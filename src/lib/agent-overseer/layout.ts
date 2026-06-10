import type { AgentNode } from "./types";

/**
 * Force-directed DAG layout. X is anchored to topological depth for a
 * left-to-right flow; repulsion + edge springs settle the Y axis.
 * Runs once per wave (≤35 nodes, 260 iterations) — sub-millisecond cost.
 */
export function layoutDAG(
  nodes: Map<string, AgentNode>,
  order: string[],
  W: number,
  H: number,
): void {
  const depth = new Map<string, number>();
  let maxDepth = 0;
  for (const id of order) {
    const n = nodes.get(id)!;
    const d = n.deps.length ? Math.max(...n.deps.map((dep) => depth.get(dep) ?? 0)) + 1 : 0;
    depth.set(id, d);
    maxDepth = Math.max(maxDepth, d);
  }

  const margin = 80;
  const ids = [...nodes.keys()];
  const pos = new Map(
    ids.map((id) => {
      const d = depth.get(id)!;
      const tx = margin + (W - margin * 2) * (maxDepth ? d / maxDepth : 0.5);
      return [
        id,
        {
          x: tx + (Math.random() - 0.5) * 30,
          y: margin + Math.random() * (H - margin * 2),
          tx,
        },
      ] as [string, { x: number; y: number; tx: number }];
    }),
  );

  for (let iter = 0; iter < 260; iter++) {
    // Pairwise repulsion (mostly vertical — x is depth-anchored).
    for (let i = 0; i < ids.length; i++) {
      for (let j = i + 1; j < ids.length; j++) {
        const a = pos.get(ids[i])!;
        const b = pos.get(ids[j])!;
        let dx = b.x - a.x;
        let dy = b.y - a.y;
        let d2 = dx * dx + dy * dy;
        if (d2 < 1) {
          dx = Math.random() - 0.5;
          dy = Math.random() - 0.5;
          d2 = 1;
        }
        const dist = Math.sqrt(d2);
        const minDist = 82;
        if (dist < minDist) {
          const push = ((minDist - dist) / dist) * 0.5;
          a.x -= dx * push * 0.25;
          a.y -= dy * push;
          b.x += dx * push * 0.25;
          b.y += dy * push;
        }
      }
    }
    // Edge springs pull dependents toward their dependencies on Y.
    for (const id of ids) {
      const n = nodes.get(id)!;
      const p = pos.get(id)!;
      for (const dep of n.deps) {
        const q = pos.get(dep)!;
        const dy = q.y - p.y;
        p.y += dy * 0.05;
        q.y -= dy * 0.05;
      }
      p.x += (p.tx - p.x) * 0.2;
      p.x = Math.min(W - margin, Math.max(margin, p.x));
      p.y = Math.min(H - 56, Math.max(56, p.y));
    }
  }

  for (const id of ids) {
    const p = pos.get(id)!;
    const n = nodes.get(id)!;
    n.x = p.x;
    n.y = p.y;
    n.startX = Math.random() * W;
    n.startY = Math.random() * H;
  }
}
