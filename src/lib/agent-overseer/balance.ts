import type { AgentNode, WaveParams } from "./types";
import { NodeStatus } from "./types";

/** Estimate wave clear time for injection scheduling (ms). */
export function estimateWaveClearMs(nodes: Map<string, AgentNode>, agentCount = 2): number {
  const depth = new Map<string, number>();
  for (const n of nodes.values()) {
    const d = n.deps.length
      ? Math.max(...n.deps.map((dep) => depth.get(dep) ?? 0)) + 1
      : 0;
    depth.set(n.id, d);
  }
  const maxDepth = Math.max(0, ...depth.values());
  const avgExec =
    [...nodes.values()].reduce((s, n) => s + n.execTimeMs, 0) / Math.max(1, nodes.size);
  return Math.round((maxDepth + 1) * avgExec * (1 / agentCount) * 1.15);
}

/** First livelock fires well before wave can clear — guarantees player interaction. */
export function firstInjectionDelayMs(params: WaveParams, nodes: Map<string, AgentNode>): number {
  const est = estimateWaveClearMs(nodes);
  const proportional = Math.round(est * 0.42);
  const beforeClear = Math.max(3_000, Math.min(proportional, est - 800));
  return Math.min(params.injectionMs, beforeClear);
}

export function nextInjectionDelayMs(params: WaveParams): number {
  return params.injectionMs;
}

export function countCompleted(nodes: Map<string, AgentNode>): number {
  let n = 0;
  for (const node of nodes.values()) {
    if (node.status === NodeStatus.COMPLETED) n++;
  }
  return n;
}
