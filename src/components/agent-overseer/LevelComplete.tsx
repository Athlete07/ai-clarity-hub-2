import { useState } from "react";
import { Check, Copy } from "lucide-react";
import type { OverseerEngine, UISnapshot } from "@/lib/agent-overseer/engine";
import { LeaderboardPanel } from "./LeaderboardPanel";
import { hrisConfigured } from "@/lib/agent-overseer/sync";

export function LevelComplete({
  engine,
  snap,
}: {
  engine: OverseerEngine;
  snap: UISnapshot;
}) {
  const [copied, setCopied] = useState<"hash" | "share" | null>(null);
  if (snap.phase !== "WAVE_COMPLETE") return null;
  const stamp = snap.pendingStamp;
  const hris = hrisConfigured();

  const copy = async (text: string, which: "hash" | "share") => {
    try {
      await navigator.clipboard.writeText(text);
      setCopied(which);
      setTimeout(() => setCopied(null), 1500);
    } catch {
      // ignore
    }
  };

  const shareUrl =
    typeof window !== "undefined"
      ? `${window.location.origin}/games/agent-overseer`
      : "/games/agent-overseer";

  return (
    <div className="absolute inset-0 z-30 flex items-center justify-center bg-[#050A14]/80 p-4 backdrop-blur-sm">
      <div className="w-full max-w-[480px] rounded-2xl border border-[#00FF9F]/40 bg-[#050A14] p-6 shadow-[0_0_60px_rgba(0,255,159,0.15)]">
        <p className="font-mono text-[10px] font-bold uppercase tracking-[0.3em] text-[#00FF9F]">
          Agentic Orchestration Cryptographic Stamp
        </p>
        <h2 className="mt-2 text-[22px] font-bold tracking-tight text-[#E8F4FD]">
          Wave {snap.wave} resolved
        </h2>
        <p className="mt-1 text-[12px] text-[#4A7FA5]">
          {hris
            ? "Credential queued for HRIS sync when online."
            : "Credential saved locally (HRIS endpoint not configured)."}
        </p>

        {stamp ? (
          <div className="mt-4 rounded-lg border border-[#0D1B2A] bg-[#0D1B2A]/40 p-3">
            <p className="break-all font-mono text-[11px] leading-relaxed text-[#00F5FF]">
              {stamp.sha256}
            </p>
            <div className="mt-2 flex items-center justify-between gap-2">
              <span className="font-mono text-[10px] text-[#4A7FA5]">
                {stamp.playerId} · score {stamp.score.toLocaleString()}
              </span>
              <button
                type="button"
                onClick={() => copy(stamp.sha256, "hash")}
                className="flex items-center gap-1.5 rounded-md border border-[#4A7FA5]/40 px-2.5 py-1 font-mono text-[10px] uppercase tracking-wider text-[#E8F4FD] transition-colors hover:bg-[#1E3A5F]/50"
              >
                {copied === "hash" ? <Check size={11} /> : <Copy size={11} />}
                {copied === "hash" ? "Copied" : "Copy"}
              </button>
            </div>
          </div>
        ) : (
          <p className="mt-4 font-mono text-[11px] text-[#4A7FA5]">Issuing SHA-256 stamp…</p>
        )}

        <LeaderboardPanel entries={snap.leaderboard} />

        <div className="mt-5 flex flex-col gap-2 sm:flex-row">
          <button
            type="button"
            onClick={() => engine.nextWave()}
            className="flex-1 rounded-lg bg-[#00FF9F] px-4 py-2.5 font-mono text-[12px] font-bold uppercase tracking-wider text-[#050A14] transition-opacity hover:opacity-85"
          >
            {snap.wave >= 10 ? "Finish Session" : `Continue to Wave ${snap.wave + 1}`}
          </button>
          {stamp && (
            <button
              type="button"
              onClick={() =>
                copy(
                  `I cleared wave ${stamp.wave} in Agent Overseer (score ${stamp.score}) — ${shareUrl}`,
                  "share",
                )
              }
              className="rounded-lg border border-[#4A7FA5]/40 px-4 py-2.5 font-mono text-[12px] font-bold uppercase tracking-wider text-[#E8F4FD] transition-colors hover:bg-[#1E3A5F]/50"
            >
              {copied === "share" ? "Copied!" : "Share"}
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
