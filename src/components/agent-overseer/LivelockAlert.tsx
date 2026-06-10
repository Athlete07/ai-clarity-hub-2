import { AlertTriangle } from "lucide-react";
import type { UISnapshot } from "@/lib/agent-overseer/engine";

const ESCALATION_TEXT: Record<number, string> = {
  0: "SELECT NODE → APPLY MUTEX → SERIALIZE PATH → RELEASE",
  1: "PENALTY APPLIED — resolve immediately",
  2: "DOWNSTREAM DEGRADATION — contention spreading",
  3: "CRITICAL — wave failure imminent",
};

export function LivelockAlert({ snap }: { snap: UISnapshot }) {
  if (!snap.livelockActive) return null;

  const locked = snap.mutexLockedNodeId !== null;
  const seconds = Math.ceil(snap.livelockRemainingMs / 1000);

  return (
    <div
      className="pointer-events-none absolute inset-x-0 top-0 z-20 flex justify-center px-4 pt-4"
      role="alert"
      aria-live="assertive"
    >
      <div
        className={`pointer-events-auto w-full max-w-[560px] rounded-xl border px-5 py-4 backdrop-blur ${
          locked
            ? "border-[#FFB800]/60 bg-[#FFB800]/10"
            : "border-[#FF3864]/70 bg-[#FF3864]/15 ao-strobe"
        }`}
      >
        <p
          className={`flex items-center gap-2 font-mono text-[13px] font-bold uppercase tracking-wider ${
            locked ? "text-[#FFB800]" : "text-[#FF3864]"
          }`}
        >
          <AlertTriangle size={15} aria-hidden />
          {locked
            ? `MUTEX HELD ON ${snap.mutexLockedNodeId}`
            : `LIVELOCK — ALPHA & BETA DEADLOCKED ON ${snap.livelockNodeId}`}
        </p>
        <p className="mt-1.5 font-mono text-[11px] tracking-wide text-[#E8F4FD]/85">
          {ESCALATION_TEXT[snap.livelockEscalation] ?? ESCALATION_TEXT[0]}
        </p>
        {snap.livelockEscalation < 2 && (
          <p className="mt-1.5 font-mono text-[11px] text-[#4A7FA5]">
            Penalty window:{" "}
            <span className={seconds <= 10 ? "text-[#FF3864]" : "text-[#E8F4FD]"}>{seconds}s</span>
          </p>
        )}
      </div>
    </div>
  );
}
