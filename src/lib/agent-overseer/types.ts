export enum NodeStatus {
  PENDING = "PENDING",
  READY = "READY",
  RUNNING = "RUNNING",
  COMPLETED = "COMPLETED",
  LOCKED = "LOCKED",
  LIVELOCK = "LIVELOCK",
  DEGRADED = "DEGRADED",
}

export type AgentId = "ALPHA" | "BETA";

export type GamePhase =
  | "TUTORIAL"
  | "PLAYING"
  | "PAUSED"
  | "WAVE_COMPLETE"
  | "GAME_OVER";

export interface AgentNode {
  id: string;
  label: string;
  status: NodeStatus;
  deps: string[];
  mutexLocked: boolean;
  x: number;
  y: number;
  startX: number;
  startY: number;
  assignedAgent: AgentId | null;
  /** Player-approved dispatch — agents only run player-dispatched nodes. */
  playerDispatched: boolean;
  execTimeMs: number;
  runStartedAt: number;
}

export interface AgentState {
  id: AgentId;
  color: string;
  currentNode: string | null;
  prevNode: string | null;
  moveStart: number;
  homeY: number;
  pathHistory: string[];
}

export interface LogEntry {
  time: string;
  text: string;
  kind: "info" | "success" | "warn" | "danger";
}

export interface CredentialStamp {
  wave: number;
  timestamp: string;
  sha256: string;
  playerId: string;
  score: number;
  signature: string;
}

export interface WaveParams {
  nodes: number;
  maxDeps: number;
  injectionMs: number;
  execBaseMs: number;
  minLocks: number;
}

export interface TelemetryEvent {
  event_type:
    | "mutex_applied"
    | "mutex_released"
    | "node_selected"
    | "dispatch"
    | "livelock_resolved"
    | "wave_complete"
    | "game_over"
    | "wave_failed";
  node_id?: string;
  wave: number;
  timestamp: string;
  resolution_time_ms?: number;
  score_delta?: number;
}

export interface LeaderboardEntry {
  playerId: string;
  score: number;
  wave: number;
  locksResolved: number;
  timestamp: string;
}

export interface SavedSession {
  version: 1;
  savedAt: number;
  sessionEndsAt: number;
  wave: number;
  score: number;
  locksResolved: number;
  locksResolvedThisWave: number;
  livelocksInjectedThisWave: number;
  phase: GamePhase;
  won: boolean;
  seed: number;
  order: string[];
  nodes: AgentNode[];
  agents: AgentState[];
  livelockActive: boolean;
  livelockNodeId: string | null;
  mutexLockedNodeId: string | null;
  nextInjectionAt: number;
  selectedNodeId: string | null;
  confirmedPath: string[] | null;
  logs: LogEntry[];
}

/** Color-blind friendly hatch pattern id per status (canvas). */
export const STATUS_PATTERN: Record<NodeStatus, "none" | "dots" | "diag" | "cross"> = {
  [NodeStatus.PENDING]: "none",
  [NodeStatus.READY]: "dots",
  [NodeStatus.RUNNING]: "diag",
  [NodeStatus.COMPLETED]: "none",
  [NodeStatus.LOCKED]: "cross",
  [NodeStatus.LIVELOCK]: "cross",
  [NodeStatus.DEGRADED]: "diag",
};
