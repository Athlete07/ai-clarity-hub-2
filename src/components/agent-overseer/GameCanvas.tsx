import { useEffect, useRef, useState } from "react";
import { NodeStatus, STATUS_PATTERN } from "@/lib/agent-overseer/types";
import {
  AGENT_MOVE_MS,
  ASSEMBLE_MS,
  WORLD_H,
  WORLD_W,
  type OverseerEngine,
} from "@/lib/agent-overseer/engine";

const COLORS = {
  bg: "#050A14",
  grid: "#0D1B2A",
  cyan: "#00F5FF",
  green: "#00FF9F",
  red: "#FF3864",
  amber: "#FFB800",
  pending: "#1E3A5F",
  text: "#E8F4FD",
  muted: "#4A7FA5",
};

const STATUS_FILL: Record<NodeStatus, string> = {
  [NodeStatus.PENDING]: COLORS.pending,
  [NodeStatus.READY]: "#2A5080",
  [NodeStatus.RUNNING]: COLORS.cyan,
  [NodeStatus.COMPLETED]: COLORS.green,
  [NodeStatus.LOCKED]: COLORS.amber,
  [NodeStatus.LIVELOCK]: COLORS.red,
  [NodeStatus.DEGRADED]: "#8B2942",
};

function drawStatusPattern(
  ctx: CanvasRenderingContext2D,
  pattern: (typeof STATUS_PATTERN)[NodeStatus],
  x: number,
  y: number,
  r: number,
): void {
  ctx.save();
  ctx.beginPath();
  ctx.arc(x, y, r - 2, 0, Math.PI * 2);
  ctx.clip();
  ctx.strokeStyle = "rgba(232,244,253,0.35)";
  ctx.lineWidth = 1;
  if (pattern === "dots") {
    for (let i = -r; i < r; i += 6) {
      for (let j = -r; j < r; j += 6) {
        ctx.beginPath();
        ctx.arc(x + i, y + j, 1, 0, Math.PI * 2);
        ctx.stroke();
      }
    }
  } else if (pattern === "diag") {
    for (let i = -r * 2; i < r * 2; i += 5) {
      ctx.beginPath();
      ctx.moveTo(x + i, y - r);
      ctx.lineTo(x + i + r, y + r);
      ctx.stroke();
    }
  } else if (pattern === "cross") {
    ctx.beginPath();
    ctx.moveTo(x - r * 0.5, y);
    ctx.lineTo(x + r * 0.5, y);
    ctx.moveTo(x, y - r * 0.5);
    ctx.lineTo(x, y + r * 0.5);
    ctx.stroke();
  }
  ctx.restore();
}

type Tooltip = { id: string; label: string; lines: string[]; sx: number; sy: number };

function easeOutCubic(t: number): number {
  return 1 - Math.pow(1 - t, 3);
}

export function GameCanvas({ engine }: { engine: OverseerEngine }) {
  const wrapRef = useRef<HTMLDivElement | null>(null);
  const bgRef = useRef<HTMLCanvasElement | null>(null);
  const fgRef = useRef<HTMLCanvasElement | null>(null);
  const viewRef = useRef({ scale: 1, ox: 0, oy: 0, w: 0, h: 0 });
  const hoverIdRef = useRef<string | null>(null);
  const [tooltip, setTooltip] = useState<Tooltip | null>(null);

  useEffect(() => {
    const wrap = wrapRef.current;
    const bg = bgRef.current;
    const fg = fgRef.current;
    if (!wrap || !bg || !fg) return;

    const reduced =
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    const dpr = Math.min(2, window.devicePixelRatio || 1);

    const resize = () => {
      const rect = wrap.getBoundingClientRect();
      for (const c of [bg, fg]) {
        c.width = Math.round(rect.width * dpr);
        c.height = Math.round(rect.height * dpr);
        c.style.width = `${rect.width}px`;
        c.style.height = `${rect.height}px`;
      }
      const scale = Math.min(rect.width / WORLD_W, rect.height / WORLD_H) * 0.98;
      viewRef.current = {
        scale,
        ox: (rect.width - WORLD_W * scale) / 2,
        oy: (rect.height - WORLD_H * scale) / 2,
        w: rect.width,
        h: rect.height,
      };
    };
    resize();
    const ro = new ResizeObserver(resize);
    ro.observe(wrap);

    let raf = 0;
    let lastShakeState = false;

    const nodePos = (now: number) => {
      const map = new Map<string, { x: number; y: number }>();
      for (const n of engine.nodes.values()) {
        map.set(n.id, engine.getNodePosition(n.id, now, reduced));
      }
      return map;
    };

    const agentScreenPos = (
      pos: Map<string, { x: number; y: number }>,
      now: number,
    ): { id: string; x: number; y: number; color: string; angle: number }[] => {
      return engine.agents.map((a, idx) => {
        const home = { x: 46, y: a.homeY };
        const from = a.prevNode ? (pos.get(a.prevNode) ?? home) : home;
        const to = a.currentNode ? (pos.get(a.currentNode) ?? home) : from;
        const t = reduced ? 1 : Math.min(1, (now - a.moveStart) / AGENT_MOVE_MS);
        const e = easeOutCubic(t);
        let x = from.x + (to.x - from.x) * e;
        let y = from.y + (to.y - from.y) * e;
        // Offset converged agents (livelock) so both stay visible.
        if (
          engine.livelockActive &&
          a.currentNode === engine.livelockNodeId &&
          engine.agents.every((g) => g.currentNode === engine.livelockNodeId)
        ) {
          x += idx === 0 ? -18 : 18;
          y -= 14;
        }
        const angle = Math.atan2(to.y - from.y, to.x - from.x);
        return { id: a.id, x, y, color: a.color, angle };
      });
    };

    const drawHexGrid = (ctx: CanvasRenderingContext2D, now: number, agents: { x: number; y: number }[]) => {
      const { w, h, scale, ox, oy } = viewRef.current;
      ctx.clearRect(0, 0, w, h);
      ctx.fillStyle = COLORS.bg;
      ctx.fillRect(0, 0, w, h);

      const size = 22;
      const stepX = 40;
      const stepY = 34;
      const agentScreen = agents.map((a) => ({ x: ox + a.x * scale, y: oy + a.y * scale }));
      const breathe = reduced ? 0 : 0.03 * Math.sin(now / 1600);

      for (let row = 0, y = 0; y < h + stepY; row++, y += stepY) {
        const offset = row % 2 ? stepX / 2 : 0;
        for (let x = offset; x < w + stepX; x += stepX) {
          let alpha = 0.08 + breathe;
          if (!reduced) {
            for (const a of agentScreen) {
              const dx = a.x - x;
              const dy = a.y - y;
              const d = Math.sqrt(dx * dx + dy * dy);
              if (d < 110) alpha += (1 - d / 110) * 0.22;
            }
          }
          ctx.strokeStyle = `rgba(0, 245, 255, ${Math.min(0.35, alpha)})`;
          ctx.lineWidth = 1;
          ctx.beginPath();
          for (let i = 0; i < 6; i++) {
            const ang = (Math.PI / 3) * i + Math.PI / 6;
            const px = x + size * Math.cos(ang);
            const py = y + size * Math.sin(ang);
            if (i === 0) ctx.moveTo(px, py);
            else ctx.lineTo(px, py);
          }
          ctx.closePath();
          ctx.stroke();
        }
      }
    };

    const drawLockGlyph = (ctx: CanvasRenderingContext2D, x: number, y: number, r: number) => {
      const s = r * 0.5;
      ctx.strokeStyle = "#050A14";
      ctx.fillStyle = "#050A14";
      ctx.lineWidth = 2;
      ctx.beginPath();
      ctx.arc(x, y - s * 0.35, s * 0.45, Math.PI, 0);
      ctx.stroke();
      ctx.fillRect(x - s * 0.6, y - s * 0.35, s * 1.2, s * 0.9);
    };

    const drawCheck = (ctx: CanvasRenderingContext2D, x: number, y: number, r: number) => {
      ctx.strokeStyle = "#04321F";
      ctx.lineWidth = 2.5;
      ctx.lineCap = "round";
      ctx.beginPath();
      ctx.moveTo(x - r * 0.4, y);
      ctx.lineTo(x - r * 0.08, y + r * 0.32);
      ctx.lineTo(x + r * 0.45, y - r * 0.3);
      ctx.stroke();
    };

    const draw = () => {
      const now = Date.now();
      const bgCtx = bg.getContext("2d");
      const ctx = fg.getContext("2d");
      if (!bgCtx || !ctx) return;

      const { scale, ox, oy, w, h } = viewRef.current;
      bgCtx.setTransform(dpr, 0, 0, dpr, 0, 0);
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

      const pos = nodePos(now);
      const agents = agentScreenPos(pos, now);

      drawHexGrid(bgCtx, now, agents);

      ctx.clearRect(0, 0, w, h);
      const toScreen = (p: { x: number; y: number }) => ({
        x: ox + p.x * scale,
        y: oy + p.y * scale,
      });

      const r = Math.max(12, (24 - engine.nodes.size * 0.28) * scale);

      // Edges
      for (const n of engine.nodes.values()) {
        const pTo = pos.get(n.id);
        if (!pTo) continue;
        const sTo = toScreen(pTo);
        for (const depId of n.deps) {
          const dep = engine.nodes.get(depId);
          const pFrom = pos.get(depId);
          if (!dep || !pFrom) continue;
          const sFrom = toScreen(pFrom);
          const active = dep.status === NodeStatus.COMPLETED;
          ctx.beginPath();
          ctx.moveTo(sFrom.x, sFrom.y);
          ctx.lineTo(sTo.x, sTo.y);
          if (active) {
            ctx.strokeStyle = `rgba(0, 245, 255, ${n.status === NodeStatus.COMPLETED ? 0.25 : 0.65})`;
            ctx.lineWidth = 1.2;
            ctx.setLineDash([6, 6]);
            ctx.lineDashOffset = reduced ? 0 : -((now / 28) % 12);
          } else {
            ctx.strokeStyle = "rgba(74, 127, 165, 0.28)";
            ctx.lineWidth = 1;
            ctx.setLineDash([3, 5]);
            ctx.lineDashOffset = 0;
          }
          ctx.stroke();
          ctx.setLineDash([]);
        }
      }

      // Nodes
      ctx.font = `${Math.max(9, 10 * Math.min(1.2, scale))}px ui-monospace, SFMono-Regular, Menlo, monospace`;
      ctx.textAlign = "center";
      for (const n of engine.nodes.values()) {
        const p = pos.get(n.id);
        if (!p) continue;
        const s = toScreen(p);
        const fill = STATUS_FILL[n.status];

        ctx.save();
        if (!reduced && n.status === NodeStatus.RUNNING) {
          ctx.shadowColor = COLORS.cyan;
          ctx.shadowBlur = 12 + 6 * Math.sin(now / 200);
        } else if (n.status === NodeStatus.LIVELOCK) {
          ctx.shadowColor = COLORS.red;
          ctx.shadowBlur = reduced ? 10 : 14 + 10 * Math.abs(Math.sin(now / 90));
        } else if (n.status === NodeStatus.LOCKED) {
          ctx.shadowColor = COLORS.amber;
          ctx.shadowBlur = 10;
        }

        ctx.beginPath();
        ctx.arc(s.x, s.y, r, 0, Math.PI * 2);
        ctx.fillStyle = fill;
        if (n.status === NodeStatus.LIVELOCK && !reduced) {
          ctx.globalAlpha = 0.65 + 0.35 * Math.abs(Math.sin(now / 90));
        }
        ctx.fill();
        ctx.globalAlpha = 1;
        ctx.lineWidth = 1;
        ctx.strokeStyle =
          n.status === NodeStatus.PENDING ? "rgba(232,244,253,0.7)" : "rgba(5,10,20,0.6)";
        ctx.stroke();
        ctx.restore();

        const pattern = STATUS_PATTERN[n.status];
        if (pattern !== "none") drawStatusPattern(ctx, pattern, s.x, s.y, r);
        if (n.status === NodeStatus.COMPLETED) drawCheck(ctx, s.x, s.y, r);
        if (n.status === NodeStatus.LOCKED) drawLockGlyph(ctx, s.x, s.y, r);
        if (n.status === NodeStatus.READY && !reduced) {
          ctx.beginPath();
          ctx.arc(s.x, s.y, r + 4, 0, Math.PI * 2);
          ctx.strokeStyle = `rgba(0, 245, 255, ${0.4 + 0.3 * Math.sin(now / 300)})`;
          ctx.lineWidth = 1.5;
          ctx.stroke();
        }

        // Selection ring
        if (engine.selectedNodeId === n.id) {
          ctx.beginPath();
          ctx.arc(s.x, s.y, r + 6, 0, Math.PI * 2);
          ctx.strokeStyle = "rgba(232,244,253,0.9)";
          ctx.lineWidth = 1.5;
          ctx.setLineDash([4, 4]);
          ctx.lineDashOffset = reduced ? 0 : -((now / 40) % 8);
          ctx.stroke();
          ctx.setLineDash([]);
        }

        ctx.fillStyle = "rgba(232,244,253,0.85)";
        ctx.fillText(n.label, s.x, s.y - r - 7);
      }

      // Agents (triangles)
      for (const a of agents) {
        const s = toScreen(a);
        const size = 10;
        ctx.save();
        ctx.translate(s.x, s.y);
        ctx.rotate(a.angle);
        ctx.beginPath();
        ctx.moveTo(size, 0);
        ctx.lineTo(-size * 0.7, size * 0.6);
        ctx.lineTo(-size * 0.7, -size * 0.6);
        ctx.closePath();
        ctx.fillStyle = a.color;
        ctx.shadowColor = a.color;
        ctx.shadowBlur = reduced ? 0 : 8;
        ctx.fill();
        ctx.restore();
        ctx.fillStyle = a.color;
        ctx.font = "9px ui-monospace, monospace";
        ctx.fillText(a.id, s.x, s.y + 20);
      }

      // Livelock shockwave + red pulses
      if (!reduced && engine.lastShockAt && now - engine.lastShockAt < 900) {
        const p = (now - engine.lastShockAt) / 900;
        const node = engine.livelockNodeId ? pos.get(engine.livelockNodeId) : null;
        if (node) {
          const s = toScreen(node);
          ctx.beginPath();
          ctx.arc(s.x, s.y, p * Math.max(w, h), 0, Math.PI * 2);
          ctx.strokeStyle = `rgba(255, 56, 100, ${1 - p})`;
          ctx.lineWidth = 3 * (1 - p);
          ctx.stroke();
        }
        const pulseT = (now - engine.lastShockAt) % 300;
        if (Math.floor((now - engine.lastShockAt) / 300) < 3) {
          ctx.fillStyle = `rgba(255, 56, 100, ${0.2 * (1 - pulseT / 300)})`;
          ctx.fillRect(0, 0, w, h);
        }
      }

      // Mutex release green flash
      if (!reduced && engine.releaseFlashAt && now - engine.releaseFlashAt < 250) {
        const p = (now - engine.releaseFlashAt) / 250;
        ctx.fillStyle = `rgba(0, 255, 159, ${0.16 * (1 - p)})`;
        ctx.fillRect(0, 0, w, h);
      }

      // Screen shake (imperative, no React state churn)
      const shaking = !reduced && engine.lastShockAt > 0 && now - engine.lastShockAt < 450;
      if (shaking !== lastShakeState) {
        wrap.classList.toggle("ao-shake", shaking);
        lastShakeState = shaking;
      }

      raf = requestAnimationFrame(draw);
    };
    raf = requestAnimationFrame(draw);

    return () => {
      cancelAnimationFrame(raf);
      ro.disconnect();
    };
  }, [engine]);

  const hitTest = (clientX: number, clientY: number): string | null => {
    const wrap = wrapRef.current;
    if (!wrap) return null;
    const rect = wrap.getBoundingClientRect();
    const { scale, ox, oy } = viewRef.current;
    const wx = (clientX - rect.left - ox) / scale;
    const wy = (clientY - rect.top - oy) / scale;
    const r = Math.max(12, 24 - engine.nodes.size * 0.28) + 6;
    const now = Date.now();
    const reduced =
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    for (const n of engine.nodes.values()) {
      const p = engine.getNodePosition(n.id, now, reduced);
      const dx = p.x - wx;
      const dy = p.y - wy;
      if (dx * dx + dy * dy <= r * r) return n.id;
    }
    return null;
  };

  const handlePointer = (clientX: number, clientY: number) => {
    engine.selectNode(hitTest(clientX, clientY));
  };

  const onMouseMove = (e: React.MouseEvent) => {
    const id = hitTest(e.clientX, e.clientY);
    if (id === hoverIdRef.current) return;
    hoverIdRef.current = id;
    if (!id) {
      setTooltip(null);
      return;
    }
    const n = engine.nodes.get(id);
    const wrap = wrapRef.current;
    if (!n || !wrap) return;
    const rect = wrap.getBoundingClientRect();
    setTooltip({
      id,
      label: n.label,
      lines: [
        `status: ${n.status}`,
        `deps: ${n.deps.length ? n.deps.join(", ") : "none"}`,
        `exec: ${n.execTimeMs}ms`,
        `agent: ${n.assignedAgent ?? "—"}`,
      ],
      sx: e.clientX - rect.left + 14,
      sy: e.clientY - rect.top + 14,
    });
  };

  return (
    <div
      ref={wrapRef}
      className="relative h-[420px] w-full overflow-hidden rounded-xl border border-[#0D1B2A] sm:h-[520px]"
      onMouseMove={onMouseMove}
      onMouseLeave={() => {
        hoverIdRef.current = null;
        setTooltip(null);
      }}
      onClick={(e) => handlePointer(e.clientX, e.clientY)}
      onTouchEnd={(e) => {
        const t = e.changedTouches[0];
        if (t) {
          e.preventDefault();
          handlePointer(t.clientX, t.clientY);
        }
      }}
      style={{
        cursor: tooltip ? "pointer" : "default",
        background: COLORS.bg,
        touchAction: "manipulation",
      }}
    >
      <canvas ref={bgRef} className="absolute inset-0" aria-hidden />
      <canvas ref={fgRef} className="absolute inset-0" aria-hidden />
      {tooltip && (
        <div
          className="pointer-events-none absolute z-10 rounded-md border border-[#0D1B2A] bg-[#050A14]/95 px-3 py-2 font-mono text-[11px] leading-relaxed text-[#E8F4FD] shadow-xl"
          style={{ left: tooltip.sx, top: tooltip.sy, maxWidth: 240 }}
        >
          <p className="font-semibold text-[#00F5FF]">
            {tooltip.id} · {tooltip.label}
          </p>
          {tooltip.lines.map((l) => (
            <p key={l} className="text-[#4A7FA5]">
              {l}
            </p>
          ))}
        </div>
      )}
    </div>
  );
}
