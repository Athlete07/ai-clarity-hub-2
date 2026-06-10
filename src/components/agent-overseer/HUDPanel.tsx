import { useEffect, useRef, useState } from "react";
import { Link } from "@tanstack/react-router";
import { ArrowLeft } from "lucide-react";
import type { UISnapshot } from "@/lib/agent-overseer/engine";

function formatTime(ms: number): string {
  const mm = Math.floor(ms / 60000);
  const ss = Math.floor((ms % 60000) / 1000);
  return `${String(mm).padStart(2, "0")}:${String(ss).padStart(2, "0")}`;
}

export function HUDPanel({ snap }: { snap: UISnapshot }) {
  const [displayScore, setDisplayScore] = useState(snap.score);
  const [delta, setDelta] = useState<number | null>(null);
  const displayedRef = useRef(snap.score);
  const targetRef = useRef(snap.score);

  useEffect(() => {
    if (snap.score === targetRef.current) return;
    const diff = snap.score - targetRef.current;
    targetRef.current = snap.score;
    setDelta(diff);
    const from = displayedRef.current;
    const to = snap.score;
    const start = performance.now();
    let raf = 0;
    const step = (t: number) => {
      const p = Math.min(1, (t - start) / 500);
      const v = Math.round(from + (to - from) * p);
      displayedRef.current = v;
      setDisplayScore(v);
      if (p < 1) raf = requestAnimationFrame(step);
    };
    raf = requestAnimationFrame(step);
    const timeout = setTimeout(() => setDelta(null), 1300);
    return () => {
      cancelAnimationFrame(raf);
      clearTimeout(timeout);
    };
  }, [snap.score]);

  const progress = snap.totalNodes ? snap.completedNodes / snap.totalNodes : 0;
  const lockProgress = snap.minLocksRequired
    ? snap.locksResolvedThisWave / snap.minLocksRequired
    : 1;
  const lowTime = snap.timeRemainingMs < 60_000;

  return (
    <div className="flex flex-wrap items-center gap-x-4 gap-y-2 border-b border-[#0D1B2A] bg-[#050A14]/85 px-4 py-3 sm:px-6">
      <Link
        to="/games"
        className="flex items-center gap-1.5 font-mono text-[11px] uppercase tracking-wider text-[#4A7FA5] transition-colors hover:text-[#E8F4FD]"
      >
        <ArrowLeft size={13} />
        Games
      </Link>

      <h1 className="text-[15px] font-bold uppercase tracking-[0.2em] text-[#E8F4FD]">
        Agent <span className="text-[#00F5FF]">Overseer</span>
        {snap.phase === "PAUSED" && (
          <span className="ml-2 text-[11px] text-[#FFB800]">PAUSED</span>
        )}
      </h1>

      <span className="font-mono text-[12px] text-[#4A7FA5]">
        WAVE <span className="text-[#E8F4FD]">{snap.wave}</span>/10
      </span>

      <div className="flex min-w-[100px] flex-1 items-center gap-2">
        <div className="h-1.5 w-full max-w-[140px] overflow-hidden rounded-full bg-[#0D1B2A]">
          <div
            className="h-full rounded-full bg-[#00FF9F] transition-[width] duration-300"
            style={{ width: `${Math.round(progress * 100)}%` }}
          />
        </div>
        <span className="font-mono text-[10px] text-[#4A7FA5]">
          {snap.completedNodes}/{snap.totalNodes}
        </span>
      </div>

      <div className="flex items-center gap-2">
        <div className="h-1.5 w-16 overflow-hidden rounded-full bg-[#0D1B2A]">
          <div
            className="h-full rounded-full bg-[#FFB800]"
            style={{ width: `${Math.min(100, Math.round(lockProgress * 100))}%` }}
          />
        </div>
        <span className="font-mono text-[10px] text-[#4A7FA5]">locks</span>
      </div>

      <span
        className={`font-mono text-[13px] tabular-nums ${lowTime ? "text-[#FF3864]" : "text-[#E8F4FD]"}`}
      >
        {formatTime(snap.timeRemainingMs)}
      </span>

      <span className="relative font-mono text-[13px] tabular-nums text-[#E8F4FD]">
        SCORE: <span className="text-[#00F5FF]">{displayScore.toLocaleString()}</span>
        {delta !== null && (
          <span
            className={`absolute -top-4 right-0 text-[11px] font-semibold ${
              delta >= 0 ? "text-[#FFB800]" : "text-[#FF3864]"
            }`}
          >
            {delta >= 0 ? `+${delta}` : delta}
          </span>
        )}
      </span>
    </div>
  );
}
