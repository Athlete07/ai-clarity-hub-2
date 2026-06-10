import { NodeStatus, type AgentNode, type WaveParams } from "./types";

export const WAVE_PARAMS: WaveParams[] = [
  { nodes: 6, maxDeps: 2, injectionMs: 45_000, execBaseMs: 2000, minLocks: 1 },
  { nodes: 8, maxDeps: 2, injectionMs: 40_000, execBaseMs: 1800, minLocks: 1 },
  { nodes: 10, maxDeps: 3, injectionMs: 35_000, execBaseMs: 1600, minLocks: 1 },
  { nodes: 12, maxDeps: 3, injectionMs: 30_000, execBaseMs: 1500, minLocks: 2 },
  { nodes: 15, maxDeps: 4, injectionMs: 28_000, execBaseMs: 1400, minLocks: 2 },
  { nodes: 18, maxDeps: 4, injectionMs: 25_000, execBaseMs: 1300, minLocks: 2 },
  { nodes: 22, maxDeps: 5, injectionMs: 20_000, execBaseMs: 1200, minLocks: 3 },
  { nodes: 26, maxDeps: 5, injectionMs: 18_000, execBaseMs: 1100, minLocks: 3 },
  { nodes: 30, maxDeps: 6, injectionMs: 15_000, execBaseMs: 1000, minLocks: 3 },
  { nodes: 35, maxDeps: 6, injectionMs: 12_000, execBaseMs: 900, minLocks: 4 },
];

const TASK_LABELS = [
  "Data Ingestion",
  "Vector Embedding",
  "Model Inference",
  "Policy Validation",
  "Token Budget Check",
  "Context Window Flush",
  "Agent Handoff",
  "Tool Call Dispatch",
  "Memory Write",
  "Sandbox Exec",
  "Output Guardrail",
  "Rate Limiter",
  "Audit Log",
  "Prompt Compile",
  "Retrieval Query",
  "Rerank Pass",
  "Cache Probe",
  "Schema Check",
  "Eval Harness",
  "Trace Export",
  "Safety Filter",
  "Batch Splitter",
  "Checkpoint Save",
  "Quota Probe",
  "Fallback Router",
  "Stream Mux",
  "Index Refresh",
  "Drift Monitor",
  "Replay Buffer",
  "Canary Gate",
  "Webhook Emit",
  "Session Hydrate",
  "Garbage Collect",
  "Heartbeat Ping",
  "Artifact Upload",
];

function isAcyclic(nodes: Map<string, AgentNode>): boolean {
  const inDegree = new Map<string, number>();
  const dependents = new Map<string, string[]>();
  for (const n of nodes.values()) {
    inDegree.set(n.id, n.deps.length);
    for (const d of n.deps) {
      const list = dependents.get(d) ?? [];
      list.push(n.id);
      dependents.set(d, list);
    }
  }
  const queue = [...nodes.values()].filter((n) => n.deps.length === 0).map((n) => n.id);
  let visited = 0;
  while (queue.length) {
    const id = queue.shift()!;
    visited++;
    for (const dep of dependents.get(id) ?? []) {
      const deg = (inDegree.get(dep) ?? 1) - 1;
      inDegree.set(dep, deg);
      if (deg === 0) queue.push(dep);
    }
  }
  return visited === nodes.size;
}

export function generateDAG(
  wave: number,
  rand: () => number,
): { nodes: Map<string, AgentNode>; order: string[] } {
  const params = WAVE_PARAMS[Math.min(wave, WAVE_PARAMS.length) - 1];
  const nodes = new Map<string, AgentNode>();
  const order: string[] = [];

  for (let i = 0; i < params.nodes; i++) {
    const id = `node_${String(i + 1).padStart(2, "0")}`;
    const deps: string[] = [];
    if (i > 0) {
      const isExtraRoot = i < 3 && rand() < 0.35;
      if (!isExtraRoot) {
        const want = Math.min(i, 1 + Math.floor(rand() * params.maxDeps));
        const windowStart = Math.max(0, i - 7);
        const pool = order.slice(windowStart, i);
        while (deps.length < want && pool.length) {
          const k = Math.floor(rand() * pool.length);
          deps.push(pool.splice(k, 1)[0]);
        }
      }
    }
    const execTimeMs = Math.round(params.execBaseMs * (0.7 + rand() * 0.8));
    nodes.set(id, {
      id,
      label: TASK_LABELS[i % TASK_LABELS.length],
      status: NodeStatus.PENDING,
      deps,
      mutexLocked: false,
      x: 0,
      y: 0,
      startX: 0,
      startY: 0,
      assignedAgent: null,
      playerDispatched: false,
      execTimeMs,
      runStartedAt: 0,
    });
    order.push(id);
  }

  if (!isAcyclic(nodes)) {
    return generateDAG(wave, rand);
  }
  return { nodes, order };
}

/** Mark nodes whose dependencies are all complete as READY. */
export function refreshReadyStates(nodes: Map<string, AgentNode>): void {
  for (const n of nodes.values()) {
    if (n.status !== NodeStatus.PENDING && n.status !== NodeStatus.READY) continue;
    if (n.mutexLocked) continue;
    const ready = n.deps.every((d) => nodes.get(d)?.status === NodeStatus.COMPLETED);
    n.status = ready ? NodeStatus.READY : NodeStatus.PENDING;
  }
}
