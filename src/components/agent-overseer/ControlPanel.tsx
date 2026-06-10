import { useEffect, useRef } from "react";
import { Lock, Unlock, GitBranch, Play, Pause } from "lucide-react";
import { NodeStatus } from "@/lib/agent-overseer/types";
import type { OverseerEngine, UISnapshot } from "@/lib/agent-overseer/engine";

const STATUS_BADGE: Record<NodeStatus, string> = {
  [NodeStatus.PENDING]: "bg-[#1E3A5F] text-[#E8F4FD]",
  [NodeStatus.READY]: "bg-[#00F5FF]/20 text-[#00F5FF] ring-1 ring-[#00F5FF]/50",
  [NodeStatus.RUNNING]: "bg-[#00F5FF]/15 text-[#00F5FF]",
  [NodeStatus.COMPLETED]: "bg-[#00FF9F]/15 text-[#00FF9F]",
  [NodeStatus.LOCKED]: "bg-[#FFB800]/15 text-[#FFB800]",
  [NodeStatus.LIVELOCK]: "bg-[#FF3864]/20 text-[#FF3864]",
  [NodeStatus.DEGRADED]: "bg-[#FF3864]/10 text-[#FFB800]",
};

const LOG_COLOR: Record<string, string> = {
  info: "text-[#4A7FA5]",
  success: "text-[#00FF9F]",
  warn: "text-[#FFB800]",
  danger: "text-[#FF3864]",
};

export function ControlPanel({
  engine,
  snap,
}: {
  engine: OverseerEngine;
  snap: UISnapshot;
}) {
  const logRef = useRef<HTMLDivElement | null>(null);
  const sel = snap.selectedNode;

  useEffect(() => {
    const el = logRef.current;
    if (el) el.scrollTop = el.scrollHeight;
  }, [snap.logs]);

  const canApply =
    snap.livelockActive && !snap.mutexLockedNodeId && sel?.id === snap.livelockNodeId;
  const canRelease = snap.canReleaseMutex;
  const canDispatch =
    snap.phase === "PLAYING" &&
    !snap.livelockActive &&
    sel?.isReady &&
    snap.idleAgents.length > 0;

  const hint = snap.mutexLockedNodeId
    ? "Serialize the execution path, then release mutex to resume."
    : snap.livelockActive
      ? `Livelock on ${snap.livelockNodeId}. Select it → Apply Mutex → Serialize Path → Release.`
      : snap.readyNodeIds.length
        ? `${snap.readyNodeIds.length} node(s) ready — dispatch idle agents (keys 1=ALPHA, 2=BETA).`
        : "Complete dependencies to unlock ready nodes.";

  return (
    <aside className="flex w-full flex-col gap-4 lg:w-[300px] lg:shrink-0">
      <section className="rounded-xl border border-[#0D1B2A] bg-[rgba(5,10,20,0.85)] p-4">
        <div className="flex items-center justify-between">
          <h2 className="font-mono text-[10px] font-semibold uppercase tracking-[0.2em] text-[#4A7FA5]">
            Node Inspector
          </h2>
          <button
            type="button"
            onClick={() => engine.togglePause()}
            disabled={snap.phase !== "PLAYING" && snap.phase !== "PAUSED"}
            className="flex items-center gap-1 rounded-md border border-[#4A7FA5]/40 px-2 py-1 font-mono text-[10px] uppercase text-[#E8F4FD] hover:bg-[#1E3A5F]/50 disabled:opacity-30"
            aria-label={snap.phase === "PAUSED" ? "Resume" : "Pause"}
          >
            {snap.phase === "PAUSED" ? <Play size={11} /> : <Pause size={11} />}
            {snap.phase === "PAUSED" ? "Resume" : "Pause"}
          </button>
        </div>
        {sel ? (
          <div className="mt-3 space-y-2 font-mono text-[12px]">
            <p className="text-[#E8F4FD]">
              {sel.id} <span className="text-[#4A7FA5]">· {sel.label}</span>
            </p>
            <p>
              <span
                className={`inline-block rounded px-2 py-0.5 text-[10px] font-bold tracking-wider ${STATUS_BADGE[sel.status]}`}
              >
                {sel.status}
              </span>
            </p>
            <p className="text-[#4A7FA5]">
              agent: <span className="text-[#E8F4FD]">{sel.assignedAgent ?? "—"}</span>
            </p>
          </div>
        ) : (
          <p className="mt-3 text-[12px] text-[#4A7FA5]">Click a node to inspect and dispatch.</p>
        )}
      </section>

      <section className="rounded-xl border border-[#0D1B2A] bg-[rgba(5,10,20,0.85)] p-4">
        <h2 className="font-mono text-[10px] font-semibold uppercase tracking-[0.2em] text-[#4A7FA5]">
          Dispatch
        </h2>
        <div className="mt-3 flex gap-2">
          {(["ALPHA", "BETA"] as const).map((id) => (
            <button
              key={id}
              type="button"
              disabled={!canDispatch || !snap.idleAgents.includes(id)}
              onClick={() => sel && engine.dispatchAgent(id, sel.id)}
              className="flex-1 rounded-lg border border-[#00F5FF]/40 bg-[#00F5FF]/10 px-2 py-2.5 font-mono text-[11px] font-bold uppercase tracking-wider text-[#00F5FF] transition-colors hover:bg-[#00F5FF]/20 disabled:cursor-not-allowed disabled:opacity-30"
            >
              {id}
            </button>
          ))}
        </div>
        <p className="mt-2 font-mono text-[10px] text-[#4A7FA5]">
          Wave locks: {snap.locksResolvedThisWave}/{snap.minLocksRequired} resolved
        </p>
      </section>

      <section className="rounded-xl border border-[#0D1B2A] bg-[rgba(5,10,20,0.85)] p-4">
        <h2 className="font-mono text-[10px] font-semibold uppercase tracking-[0.2em] text-[#4A7FA5]">
          Mutex Controls
        </h2>
        <div className="mt-3 flex flex-col gap-2">
          <button
            type="button"
            disabled={!canApply}
            onClick={() => engine.applyMutex()}
            className="flex items-center justify-center gap-2 rounded-lg border border-[#FF3864]/50 bg-[#FF3864]/10 px-3 py-2.5 font-mono text-[12px] font-bold uppercase tracking-wider text-[#FF3864] transition-colors hover:bg-[#FF3864]/25 disabled:cursor-not-allowed disabled:opacity-30"
          >
            <Lock size={13} /> Apply Mutex Lock
          </button>
          <button
            type="button"
            disabled={!snap.mutexLockedNodeId}
            onClick={() => engine.confirmSerializePath()}
            className="flex items-center justify-center gap-2 rounded-lg border border-[#4A7FA5]/40 bg-[#1E3A5F]/30 px-3 py-2.5 font-mono text-[12px] font-bold uppercase tracking-wider text-[#E8F4FD] transition-colors hover:bg-[#1E3A5F]/60 disabled:cursor-not-allowed disabled:opacity-30"
          >
            <GitBranch size={13} /> Serialize Path
          </button>
          <button
            type="button"
            disabled={!canRelease}
            onClick={() => engine.releaseMutex()}
            className="flex items-center justify-center gap-2 rounded-lg border border-[#00FF9F]/50 bg-[#00FF9F]/10 px-3 py-2.5 font-mono text-[12px] font-bold uppercase tracking-wider text-[#00FF9F] transition-colors hover:bg-[#00FF9F]/25 disabled:cursor-not-allowed disabled:opacity-30"
          >
            <Unlock size={13} /> Release Mutex Lock
          </button>
        </div>
        {snap.confirmedPath && (
          <p
            className={`mt-3 break-words font-mono text-[11px] leading-relaxed ${
              snap.pathConfirmed ? "text-[#00FF9F]" : "text-[#FFB800]"
            }`}
          >
            {snap.confirmedPath.join(" → ")}
            {!snap.pathConfirmed && snap.livelockNodeId ? " (verify against livelock node)" : ""}
          </p>
        )}
        {hint && (
          <p className="mt-3 rounded-lg border border-[#FFB800]/30 bg-[#FFB800]/10 px-3 py-2 text-[11px] leading-relaxed text-[#FFB800]">
            {hint}
          </p>
        )}
      </section>

      <section className="flex min-h-0 flex-1 flex-col rounded-xl border border-[#0D1B2A] bg-[rgba(5,10,20,0.85)] p-4">
        <h2 className="font-mono text-[10px] font-semibold uppercase tracking-[0.2em] text-[#4A7FA5]">
          Agent Activity Log
        </h2>
        <div
          ref={logRef}
          className="mt-3 h-[140px] overflow-y-auto font-mono text-[11px] leading-relaxed lg:h-[180px]"
        >
          {snap.logs.map((l, i) => (
            <p key={`${l.time}-${i}`} className={LOG_COLOR[l.kind]}>
              [{l.time}] {l.text}
            </p>
          ))}
        </div>
      </section>
    </aside>
  );
}
