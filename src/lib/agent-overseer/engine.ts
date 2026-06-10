import {
  NodeStatus,
  type AgentId,
  type AgentNode,
  type AgentState,
  type CredentialStamp,
  type GamePhase,
  type LeaderboardEntry,
  type LogEntry,
  type SavedSession,
} from "./types";
import { generateDAG, refreshReadyStates, WAVE_PARAMS } from "./dagGenerator";
import { layoutDAG } from "./layout";
import {
  firstInjectionDelayMs,
  nextInjectionDelayMs,
  countCompleted,
} from "./balance";
import {
  applyMutexLock as mxApply,
  initSharedBuffer,
  isWorkerPaused,
  releaseMutexLock as mxRelease,
  sabSupported,
  setLivelockFlag,
} from "./mutexEngine";
import { issueStamp, queueStamp } from "./credentialIssuer";
import {
  clearSession,
  getPlayerId,
  isTutorialDone,
  loadLeaderboard,
  loadSession,
  logTelemetry,
  saveSession,
  saveStamp,
  setTutorialDone,
  submitLeaderboard,
} from "./storage";
import { mulberry32, randomSessionSeed } from "./rng";
import { disposeGameAudio, initGameAudio, playSfx } from "./audio";

export const WORLD_W = 1000;
export const WORLD_H = 560;
export const ASSEMBLE_MS = 600;
export const AGENT_MOVE_MS = 600;

const SESSION_MS = 15 * 60 * 1000;
const LIVELOCK_GRACE_MS = 30_000;
const LIVELOCK_ESCALATE_MS = 45_000;
const LIVELOCK_FAIL_MS = 60_000;
const TICK_MS = 200;
const MAX_WAVE = 10;
const AUTO_DISPATCH_PENALTY = 75;
const AUTO_DISPATCH_MS = 8_000;

export interface SelectedNodeInfo {
  id: string;
  label: string;
  status: NodeStatus;
  deps: { id: string; status: NodeStatus }[];
  assignedAgent: AgentId | null;
  mutexLocked: boolean;
  execTimeMs: number;
  playerDispatched: boolean;
  isReady: boolean;
}

export interface UISnapshot {
  phase: GamePhase;
  wave: number;
  score: number;
  locksResolved: number;
  locksResolvedThisWave: number;
  minLocksRequired: number;
  livelocksInjectedThisWave: number;
  timeRemainingMs: number;
  totalNodes: number;
  completedNodes: number;
  livelockActive: boolean;
  livelockNodeId: string | null;
  livelockRemainingMs: number;
  livelockEscalation: 0 | 1 | 2 | 3;
  selectedNode: SelectedNodeInfo | null;
  mutexLockedNodeId: string | null;
  confirmedPath: string[] | null;
  pathConfirmed: boolean;
  canReleaseMutex: boolean;
  logs: LogEntry[];
  pendingStamp: CredentialStamp | null;
  stampsEarned: number;
  won: boolean;
  sabSupported: boolean;
  nodesBrief: {
    id: string;
    label: string;
    status: NodeStatus;
    ready: boolean;
  }[];
  leaderboard: LeaderboardEntry[];
  readyNodeIds: string[];
  idleAgents: AgentId[];
}

export class OverseerEngine {
  nodes = new Map<string, AgentNode>();
  order: string[] = [];
  agents: AgentState[];
  wave = 1;
  score = 0;
  locksResolved = 0;
  locksResolvedThisWave = 0;
  livelocksInjectedThisWave = 0;
  phase: GamePhase = "PLAYING";
  won = false;
  timeRemainingMs = SESSION_MS;
  livelockActive = false;
  livelockNodeId: string | null = null;
  selectedNodeId: string | null = null;
  mutexLockedNodeId: string | null = null;
  confirmedPath: string[] | null = null;
  assembleStart = 0;
  lastShockAt = 0;
  releaseFlashAt = 0;
  seed = randomSessionSeed();
  leaderboard: LeaderboardEntry[] = [];

  private sessionEndsAt = 0;
  private livelockDeadline = 0;
  private livelockStartedAt = 0;
  private escalationLevel: 0 | 1 | 2 | 3 = 0;
  private nextInjectionAt = 0;
  private logs: LogEntry[] = [];
  private pendingStamp: CredentialStamp | null = null;
  private stamps: CredentialStamp[] = [];
  private playerId: string;
  private buf = initSharedBuffer();
  private timer: ReturnType<typeof setInterval> | null = null;
  private listeners = new Set<() => void>();
  private snapshot!: UISnapshot;
  private readySince = new Map<string, number>();
  private tickCount = 0;
  private destroyed = false;

  constructor(options?: { restore?: boolean }) {
    initGameAudio();
    this.playerId = getPlayerId();
    this.agents = this.makeAgents();
    const restored = options?.restore !== false ? loadSession() : null;
    if (restored && restored.phase !== "GAME_OVER" && restored.phase !== "TUTORIAL") {
      this.applySession(restored);
      this.phase = restored.phase === "WAVE_COMPLETE" ? "WAVE_COMPLETE" : restored.phase;
    } else {
      this.phase = isTutorialDone() ? "PLAYING" : "TUTORIAL";
      this.startSession();
    }
    this.leaderboard = loadLeaderboard();
    this.timer = setInterval(() => this.tick(), TICK_MS);
    this.rebuild();
  }

  private makeAgents(): AgentState[] {
    return [
      {
        id: "ALPHA",
        color: "#00F5FF",
        currentNode: null,
        prevNode: null,
        moveStart: 0,
        homeY: WORLD_H / 2 - 60,
        pathHistory: [],
      },
      {
        id: "BETA",
        color: "#FFB800",
        currentNode: null,
        prevNode: null,
        moveStart: 0,
        homeY: WORLD_H / 2 + 60,
        pathHistory: [],
      },
    ];
  }

  subscribe = (fn: () => void): (() => void) => {
    this.listeners.add(fn);
    return () => this.listeners.delete(fn);
  };

  getSnapshot = (): UISnapshot => this.snapshot;

  destroy(): void {
    if (this.destroyed) return;
    this.destroyed = true;
    if (this.timer) clearInterval(this.timer);
    this.timer = null;
    this.persist();
    this.listeners.clear();
    disposeGameAudio();
  }

  private startSession(): void {
    this.score = 0;
    this.locksResolved = 0;
    this.won = false;
    this.stamps = [];
    this.pendingStamp = null;
    this.timeRemainingMs = SESSION_MS;
    this.sessionEndsAt = Date.now() + SESSION_MS;
    this.logs = [];
    this.seed = randomSessionSeed();
    this.setupWave(1);
    clearSession();
  }

  restart(): void {
    this.phase = "PLAYING";
    clearSession();
    this.startSession();
    this.rebuild();
  }

  finishTutorial(): void {
    setTutorialDone();
    this.phase = "PLAYING";
    this.sessionEndsAt = Date.now() + SESSION_MS;
    this.timeRemainingMs = SESSION_MS;
    this.scheduleNextInjection(true);
    this.log("OVERSEER ONLINE — dispatch agents to ready nodes", "info");
    this.rebuild();
  }

  togglePause(): void {
    if (this.phase !== "PLAYING" && this.phase !== "PAUSED") return;
    this.phase = this.phase === "PAUSED" ? "PLAYING" : "PAUSED";
    if (this.phase === "PAUSED") this.persist();
    this.rebuild();
  }

  private setupWave(w: number): void {
    const params = WAVE_PARAMS[w - 1];
    const rand = mulberry32(this.seed + w * 9973);
    const { nodes, order } = generateDAG(w, rand);
    layoutDAG(nodes, order, WORLD_W, WORLD_H);
    this.nodes = nodes;
    this.order = order;
    this.wave = w;
    this.locksResolvedThisWave = 0;
    this.livelocksInjectedThisWave = 0;
    this.readySince.clear();
    refreshReadyStates(this.nodes);
    for (const a of this.agents) {
      a.currentNode = null;
      a.prevNode = null;
      a.moveStart = 0;
      a.pathHistory = [];
    }
    this.livelockActive = false;
    this.livelockNodeId = null;
    this.mutexLockedNodeId = null;
    this.confirmedPath = null;
    this.selectedNodeId = null;
    this.escalationLevel = 0;
    setLivelockFlag(this.buf, false);
    mxRelease(this.buf);
    this.assembleStart = Date.now();
    this.scheduleNextInjection(true);
    this.log(`WAVE ${w} — dispatch ALPHA/BETA to glowing ready nodes`, "info");
  }

  private scheduleNextInjection(first = false): void {
    const params = WAVE_PARAMS[this.wave - 1];
    const delay = first
      ? firstInjectionDelayMs(params, this.nodes)
      : nextInjectionDelayMs(params);
    this.nextInjectionAt = Date.now() + delay;
  }

  nextWave(): void {
    this.pendingStamp = null;
    if (this.wave >= MAX_WAVE) {
      this.gameOver(true);
    } else {
      this.setupWave(this.wave + 1);
      this.phase = "PLAYING";
    }
    this.persist();
    this.rebuild();
  }

  private gameOver(won: boolean): void {
    this.phase = "GAME_OVER";
    this.won = won;
    this.leaderboard = submitLeaderboard({
      playerId: this.playerId,
      score: this.score,
      wave: this.wave,
      locksResolved: this.locksResolved,
      timestamp: new Date().toISOString(),
    });
    clearSession();
    this.log(
      won ? "ALL 10 WAVES CLEARED — SWARM STABLE" : "SESSION ENDED — GAME OVER",
      won ? "success" : "danger",
    );
    logTelemetry({
      event_type: "game_over",
      wave: this.wave,
      timestamp: new Date().toISOString(),
      score_delta: this.score,
    });
    playSfx(won ? "wave" : "penalty");
  }

  private tick(): void {
    if (this.destroyed) return;
    const now = Date.now();
    this.tickCount++;

    if (this.phase === "TUTORIAL") {
      this.sessionEndsAt = now + this.timeRemainingMs;
      this.rebuild();
      return;
    }

    if (this.phase === "PAUSED") {
      this.sessionEndsAt = now + this.timeRemainingMs;
      this.rebuild();
      return;
    }

    if (this.phase === "GAME_OVER") return;

    // WAVE_COMPLETE: timer keeps running (AO-007 fix).
    if (this.phase !== "WAVE_COMPLETE") {
      this.timeRemainingMs = Math.max(0, this.sessionEndsAt - now);
      if (this.timeRemainingMs === 0) {
        this.gameOver(false);
        this.rebuild();
        return;
      }
    } else {
      this.timeRemainingMs = Math.max(0, this.sessionEndsAt - now);
      if (this.timeRemainingMs === 0) {
        this.gameOver(false);
        this.rebuild();
        return;
      }
    }

    if (this.phase === "PLAYING") {
      this.handleLivelockEscalation(now);
      refreshReadyStates(this.nodes);
      this.trackReadyNodes(now);
      if (!isWorkerPaused(this.buf)) {
        this.agentTick(now);
      }
      if (!this.livelockActive && now >= this.nextInjectionAt) {
        this.injectLivelock(now);
      }
      // Safety: guarantee at least one crisis before the wave can clear.
      const completed = countCompleted(this.nodes);
      if (
        !this.livelockActive &&
        this.livelocksInjectedThisWave === 0 &&
        completed >= Math.max(1, Math.ceil(this.nodes.size * 0.35))
      ) {
        this.injectLivelock(now);
      }
      this.tryCompleteWave();
    }

    if (this.tickCount % 25 === 0) this.persist();
    this.rebuild();
  }

  private trackReadyNodes(now: number): void {
    for (const n of this.nodes.values()) {
      if (n.status === NodeStatus.READY && !n.playerDispatched) {
        if (!this.readySince.has(n.id)) this.readySince.set(n.id, now);
        const waiting = now - (this.readySince.get(n.id) ?? now);
        if (waiting >= AUTO_DISPATCH_MS) {
          const idle = this.agents.find((a) => !a.currentNode);
          if (idle) {
            this.dispatchAgent(idle.id, n.id, true);
            this.score = Math.max(0, this.score - AUTO_DISPATCH_PENALTY);
            this.log(`AUTO-DISPATCH ${idle.id} → ${n.id} (−${AUTO_DISPATCH_PENALTY})`, "warn");
          }
        }
      } else {
        this.readySince.delete(n.id);
      }
    }
  }

  private handleLivelockEscalation(now: number): void {
    if (!this.livelockActive) return;
    const elapsed = now - this.livelockStartedAt;
    if (elapsed > LIVELOCK_GRACE_MS && this.escalationLevel < 1) {
      this.escalationLevel = 1;
      this.score = Math.max(0, this.score - 500);
      this.log("⚠ RESOLUTION TIMEOUT — 500 point penalty", "danger");
      playSfx("penalty");
    }
    if (elapsed > LIVELOCK_ESCALATE_MS && this.escalationLevel < 2) {
      this.escalationLevel = 2;
      this.spreadDegradation();
      this.score = Math.max(0, this.score - 200);
      this.log("⚠ CONTENTION SPREAD — downstream nodes degraded", "danger");
    }
    if (elapsed > LIVELOCK_FAIL_MS && this.escalationLevel < 3) {
      this.escalationLevel = 3;
      this.failWave("Livelock unresolved — wave failed");
    }
  }

  private spreadDegradation(): void {
    if (!this.livelockNodeId) return;
    for (const n of this.nodes.values()) {
      if (this.isBlockedByLivelock(n.id) && n.status !== NodeStatus.COMPLETED) {
        n.status = NodeStatus.DEGRADED;
      }
    }
  }

  private failWave(reason: string): void {
    this.log(reason, "danger");
    logTelemetry({
      event_type: "wave_failed",
      wave: this.wave,
      timestamp: new Date().toISOString(),
      node_id: this.livelockNodeId ?? undefined,
    });
    this.livelockActive = false;
    this.livelockNodeId = null;
    this.mutexLockedNodeId = null;
    mxRelease(this.buf);
    setLivelockFlag(this.buf, false);
    if (this.wave <= 1) {
      this.setupWave(1);
    } else {
      this.setupWave(this.wave - 1);
    }
    this.score = Math.max(0, this.score - 1000);
    playSfx("penalty");
  }

  private isBlockedByLivelock(nodeId: string): boolean {
    if (!this.livelockActive || !this.livelockNodeId) return false;
    if (nodeId === this.livelockNodeId) return true;
    const n = this.nodes.get(nodeId);
    if (!n) return false;
    return n.deps.some((d) => this.isBlockedByLivelock(d));
  }

  private agentTick(now: number): void {
    for (const agent of this.agents) {
      const cur = agent.currentNode ? this.nodes.get(agent.currentNode) : null;

      if (cur && cur.status === NodeStatus.RUNNING && cur.assignedAgent === agent.id) {
        if (this.isBlockedByLivelock(cur.id)) continue;
        if (now - cur.runStartedAt >= cur.execTimeMs) {
          cur.status = NodeStatus.COMPLETED;
          cur.assignedAgent = null;
          cur.playerDispatched = false;
          this.score += 50;
          this.log(`${agent.id} → ${cur.id} COMPLETED ✓`, "success");
          playSfx("complete");
          agent.prevNode = cur.id;
          agent.currentNode = null;
          refreshReadyStates(this.nodes);
        }
        continue;
      }

      // Agents only run player-dispatched assignments — no random auto-claim.
    }
  }

  dispatchAgent(agentId: AgentId, nodeId: string, auto = false): boolean {
    if (this.phase !== "PLAYING" || this.livelockActive) return false;
    const agent = this.agents.find((a) => a.id === agentId);
    const node = this.nodes.get(nodeId);
    if (!agent || !node || agent.currentNode) return false;
    if (node.status !== NodeStatus.READY && node.status !== NodeStatus.DEGRADED) return false;
    if (!node.deps.every((d) => this.nodes.get(d)?.status === NodeStatus.COMPLETED)) return false;

    const now = Date.now();
    node.status = NodeStatus.RUNNING;
    node.assignedAgent = agentId;
    node.playerDispatched = true;
    node.runStartedAt = now;
    agent.prevNode = agent.currentNode ?? agent.prevNode;
    agent.currentNode = nodeId;
    agent.moveStart = now;
    agent.pathHistory.push(nodeId);
    this.readySince.delete(nodeId);
    this.log(`${auto ? "AUTO " : ""}${agentId} → ${nodeId} RUNNING`, "info");
    if (!auto) {
      logTelemetry({
        event_type: "dispatch",
        node_id: nodeId,
        wave: this.wave,
        timestamp: new Date().toISOString(),
      });
      playSfx("dispatch");
    }
    this.rebuild();
    return true;
  }

  private injectLivelock(now: number): void {
    const running = [...this.nodes.values()].filter(
      (n) => n.status === NodeStatus.RUNNING && n.playerDispatched,
    );
    const ready = [...this.nodes.values()].filter((n) => n.status === NodeStatus.READY);
    const candidates = running.length ? running : ready;
    const target = candidates[Math.floor(Math.random() * candidates.length)];
    if (!target) {
      this.nextInjectionAt = now + 5_000;
      return;
    }

    if (target.status === NodeStatus.RUNNING) target.assignedAgent = null;
    target.status = NodeStatus.LIVELOCK;
    this.livelockActive = true;
    this.livelockNodeId = target.id;
    this.livelockStartedAt = now;
    this.livelockDeadline = now + LIVELOCK_GRACE_MS;
    this.escalationLevel = 0;
    this.confirmedPath = null;
    this.lastShockAt = now;
    this.livelocksInjectedThisWave += 1;
    setLivelockFlag(this.buf, true);
    for (const a of this.agents) {
      if (a.currentNode === target.id) a.currentNode = null;
      a.prevNode = a.prevNode ?? a.currentNode;
      a.currentNode = target.id;
      a.moveStart = now;
    }
    this.log(`⚠ LIVELOCK at ${target.id} — select, mutex, serialize path, release`, "danger");
    playSfx("livelock");
  }

  selectNode(id: string | null): void {
    if (id === this.selectedNodeId) return;
    this.selectedNodeId = id;
    if (id) {
      logTelemetry({
        event_type: "node_selected",
        node_id: id,
        wave: this.wave,
        timestamp: new Date().toISOString(),
      });
    }
    this.rebuild();
  }

  applyMutex(): void {
    if (
      !this.livelockActive ||
      this.mutexLockedNodeId !== null ||
      this.selectedNodeId !== this.livelockNodeId ||
      !this.livelockNodeId
    ) {
      return;
    }
    const node = this.nodes.get(this.livelockNodeId);
    if (!node) return;
    node.mutexLocked = true;
    node.status = NodeStatus.LOCKED;
    this.mutexLockedNodeId = node.id;
    mxApply(this.buf, node.id);
    this.log(`MUTEX LOCK on ${node.id}`, "warn");
    playSfx("mutex");
    logTelemetry({
      event_type: "mutex_applied",
      node_id: node.id,
      wave: this.wave,
      timestamp: new Date().toISOString(),
    });
    this.rebuild();
  }

  confirmSerializePath(): boolean {
    const id = this.livelockNodeId ?? this.selectedNodeId;
    if (!id) return false;
    this.confirmedPath = this.getPathTo(id);
    this.rebuild();
    return true;
  }

  pathsMatch(a: string[] | null, b: string[]): boolean {
    if (!a || a.length !== b.length) return false;
    return a.every((v, i) => v === b[i]);
  }

  releaseMutex(): void {
    if (!this.mutexLockedNodeId || !this.livelockNodeId) return;
    const expected = this.getPathTo(this.livelockNodeId);
    if (!this.confirmedPath) {
      this.log("Serialize path before releasing mutex", "warn");
      return;
    }
    const node = this.nodes.get(this.mutexLockedNodeId);
    if (!node) return;

    const now = Date.now();
    const correct = this.pathsMatch(this.confirmedPath, expected);
    node.mutexLocked = false;
    node.status = NodeStatus.READY;
    node.assignedAgent = null;
    node.playerDispatched = false;
    mxRelease(this.buf);
    setLivelockFlag(this.buf, false);

    const resolutionMs = now - this.livelockStartedAt;
    let delta = Math.max(0, 1000 - Math.round(resolutionMs / 1000) * 10);
    if (!correct) {
      delta = Math.round(delta * 0.5);
      this.log("Incorrect serialized path — 50% resolution credit", "warn");
    }
    this.score += delta;
    this.locksResolved += 1;
    this.locksResolvedThisWave += 1;
    this.livelockActive = false;
    this.livelockNodeId = null;
    this.mutexLockedNodeId = null;
    this.confirmedPath = null;
    this.escalationLevel = 0;
    for (const a of this.agents) a.currentNode = null;
    this.releaseFlashAt = now;
    refreshReadyStates(this.nodes);
    this.scheduleNextInjection(false);
    this.log(
      `MUTEX released — ${(resolutionMs / 1000).toFixed(1)}s (+${delta})`,
      "success",
    );
    playSfx("release");
    logTelemetry({
      event_type: "livelock_resolved",
      node_id: node.id,
      wave: this.wave,
      timestamp: new Date().toISOString(),
      resolution_time_ms: resolutionMs,
      score_delta: delta,
    });
    this.rebuild();
  }

  getPathTo(id: string): string[] {
    const memo = new Map<string, string[]>();
    const walk = (nid: string): string[] => {
      const cached = memo.get(nid);
      if (cached) return cached;
      const n = this.nodes.get(nid);
      if (!n || !n.deps.length) {
        const r = [nid];
        memo.set(nid, r);
        return r;
      }
      let best: string[] = [];
      for (const d of n.deps) {
        const p = walk(d);
        if (p.length > best.length) best = p;
      }
      const r = [...best, nid];
      memo.set(nid, r);
      return r;
    };
    return walk(id);
  }

  getNodePosition(id: string, now: number, reducedMotion = false): { x: number; y: number } {
    const n = this.nodes.get(id);
    if (!n) return { x: 0, y: 0 };
    const t = Math.min(1, (now - this.assembleStart) / ASSEMBLE_MS);
    const e = reducedMotion ? 1 : 1 - Math.pow(1 - t, 3);
    return {
      x: n.startX + (n.x - n.startX) * e,
      y: n.startY + (n.y - n.startY) * e,
    };
  }

  private tryCompleteWave(): void {
    const params = WAVE_PARAMS[this.wave - 1];
    let allDone = true;
    for (const n of this.nodes.values()) {
      if (n.status !== NodeStatus.COMPLETED) {
        allDone = false;
        break;
      }
    }
    if (
      allDone &&
      !this.livelockActive &&
      this.locksResolvedThisWave >= params.minLocks &&
      this.livelocksInjectedThisWave >= params.minLocks
    ) {
      this.completeWave();
    }
  }

  private completeWave(): void {
    this.phase = "WAVE_COMPLETE";
    this.log(`WAVE ${this.wave} COMPLETE`, "success");
    playSfx("wave");
    logTelemetry({
      event_type: "wave_complete",
      wave: this.wave,
      timestamp: new Date().toISOString(),
      score_delta: this.score,
    });
    void issueStamp(this.playerId, this.wave, this.score).then((stamp) => {
      this.stamps.push(stamp);
      saveStamp(stamp);
      queueStamp(stamp);
      this.pendingStamp = stamp;
      this.rebuild();
    });
    this.persist();
  }

  private persist(): void {
    if (this.phase === "TUTORIAL" || this.phase === "GAME_OVER") return;
    const session: SavedSession = {
      version: 1,
      savedAt: Date.now(),
      sessionEndsAt: this.sessionEndsAt,
      wave: this.wave,
      score: this.score,
      locksResolved: this.locksResolved,
      locksResolvedThisWave: this.locksResolvedThisWave,
      livelocksInjectedThisWave: this.livelocksInjectedThisWave,
      phase: this.phase,
      won: this.won,
      seed: this.seed,
      order: this.order,
      nodes: [...this.nodes.values()],
      agents: this.agents,
      livelockActive: this.livelockActive,
      livelockNodeId: this.livelockNodeId,
      mutexLockedNodeId: this.mutexLockedNodeId,
      nextInjectionAt: this.nextInjectionAt,
      selectedNodeId: this.selectedNodeId,
      confirmedPath: this.confirmedPath,
      logs: this.logs,
    };
    saveSession(session);
  }

  private applySession(s: SavedSession): void {
    this.sessionEndsAt = s.sessionEndsAt;
    this.timeRemainingMs = Math.max(0, s.sessionEndsAt - Date.now());
    this.wave = s.wave;
    this.score = s.score;
    this.locksResolved = s.locksResolved;
    this.locksResolvedThisWave = s.locksResolvedThisWave;
    this.livelocksInjectedThisWave = s.livelocksInjectedThisWave;
    this.won = s.won;
    this.seed = s.seed;
    this.order = s.order;
    this.nodes = new Map(s.nodes.map((n) => [n.id, n]));
    this.agents = s.agents;
    this.livelockActive = s.livelockActive;
    this.livelockNodeId = s.livelockNodeId;
    this.mutexLockedNodeId = s.mutexLockedNodeId;
    this.nextInjectionAt = s.nextInjectionAt;
    this.selectedNodeId = s.selectedNodeId;
    this.confirmedPath = s.confirmedPath;
    this.logs = s.logs;
    this.assembleStart = Date.now();
    refreshReadyStates(this.nodes);
  }

  private log(text: string, kind: LogEntry["kind"]): void {
    const d = new Date();
    const time = [d.getHours(), d.getMinutes(), d.getSeconds()]
      .map((v) => String(v).padStart(2, "0"))
      .join(":");
    this.logs = [...this.logs.slice(-19), { time, text, kind }];
  }

  private rebuild(): void {
    const completed = countCompleted(this.nodes);
    const params = WAVE_PARAMS[this.wave - 1];
    const sel = this.selectedNodeId ? (this.nodes.get(this.selectedNodeId) ?? null) : null;
    const expectedPath = this.livelockNodeId ? this.getPathTo(this.livelockNodeId) : [];
    const pathOk = this.confirmedPath
      ? this.pathsMatch(this.confirmedPath, expectedPath)
      : false;

    const readyNodeIds: string[] = [];
    const nodesBrief: UISnapshot["nodesBrief"] = [];
    for (const id of this.order) {
      const n = this.nodes.get(id)!;
      const ready = n.status === NodeStatus.READY;
      if (ready) readyNodeIds.push(id);
      nodesBrief.push({ id: n.id, label: n.label, status: n.status, ready });
    }

    const idleAgents = this.agents.filter((a) => !a.currentNode).map((a) => a.id);

    this.snapshot = {
      phase: this.phase,
      wave: this.wave,
      score: this.score,
      locksResolved: this.locksResolved,
      locksResolvedThisWave: this.locksResolvedThisWave,
      minLocksRequired: params.minLocks,
      livelocksInjectedThisWave: this.livelocksInjectedThisWave,
      timeRemainingMs: this.timeRemainingMs,
      totalNodes: this.nodes.size,
      completedNodes: completed,
      livelockActive: this.livelockActive,
      livelockNodeId: this.livelockNodeId,
      livelockRemainingMs: this.livelockActive
        ? Math.max(0, this.livelockDeadline - Date.now())
        : 0,
      livelockEscalation: this.escalationLevel,
      selectedNode: sel
        ? {
            id: sel.id,
            label: sel.label,
            status: sel.status,
            deps: sel.deps.map((d) => ({
              id: d,
              status: this.nodes.get(d)?.status ?? NodeStatus.PENDING,
            })),
            assignedAgent: sel.assignedAgent,
            mutexLocked: sel.mutexLocked,
            execTimeMs: sel.execTimeMs,
            playerDispatched: sel.playerDispatched,
            isReady: sel.status === NodeStatus.READY,
          }
        : null,
      mutexLockedNodeId: this.mutexLockedNodeId,
      confirmedPath: this.confirmedPath,
      pathConfirmed: pathOk,
      canReleaseMutex: Boolean(
        this.mutexLockedNodeId && this.confirmedPath && this.confirmedPath.length > 0,
      ),
      logs: this.logs,
      pendingStamp: this.pendingStamp,
      stampsEarned: this.stamps.length,
      won: this.won,
      sabSupported: sabSupported(),
      nodesBrief,
      leaderboard: this.leaderboard,
      readyNodeIds,
      idleAgents,
    };
    this.listeners.forEach((l) => l());
  }
}
