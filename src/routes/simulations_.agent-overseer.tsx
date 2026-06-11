import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useRef, useState, useSyncExternalStore } from "react";
import { OverseerEngine, type UISnapshot } from "@/lib/agent-overseer/engine";
import { GameCanvas } from "@/components/agent-overseer/GameCanvas";
import { HUDPanel } from "@/components/agent-overseer/HUDPanel";
import { ControlPanel } from "@/components/agent-overseer/ControlPanel";
import { LivelockAlert } from "@/components/agent-overseer/LivelockAlert";
import { LevelComplete } from "@/components/agent-overseer/LevelComplete";
import { OnboardingTutorial } from "@/components/agent-overseer/OnboardingTutorial";
import { LeaderboardPanel } from "@/components/agent-overseer/LeaderboardPanel";
import { disposeGameAudio } from "@/lib/agent-overseer/audio";
import { initAgentOverseerSync } from "@/lib/agent-overseer/sync";
import { loadSession } from "@/lib/agent-overseer/storage";
import { brandOgMeta } from "@/lib/brand";

export const Route = createFileRoute("/simulations_/agent-overseer")({
  head: () => ({
    meta: [
      { title: "Agent Overseer — FactorBeam" },
      {
        name: "description",
        content:
          "Schedule AI agents on a live task graph, resolve injected livelocks with mutex locks, and climb 10 waves.",
      },
      ...brandOgMeta(),
    ],
    links: [{ rel: "canonical", href: "/simulations/agent-overseer" }],
  }),
  component: AgentOverseerPage,
});

const SCOPED_CSS = `
@keyframes ao-shake {
  0%, 100% { transform: translateX(0); }
  20% { transform: translateX(-4px); }
  40% { transform: translateX(4px); }
  60% { transform: translateX(-3px); }
  80% { transform: translateX(3px); }
}
.ao-shake { animation: ao-shake 0.4s linear; }
@keyframes ao-strobe {
  0%, 100% { opacity: 1; }
  50% { opacity: 0.65; }
}
.ao-strobe { animation: ao-strobe 0.6s ease-in-out infinite; }
@media (prefers-reduced-motion: reduce) {
  .ao-shake, .ao-strobe { animation: none; }
}
`;

function useEngineSnapshot(engine: OverseerEngine): UISnapshot {
  return useSyncExternalStore(engine.subscribe, engine.getSnapshot, engine.getSnapshot);
}

function AgentOverseerPage() {
  const [engine, setEngine] = useState<OverseerEngine | null>(null);
  const [resumePrompt, setResumePrompt] = useState(false);
  const engineRef = useRef<OverseerEngine | null>(null);

  useEffect(() => {
    const saved = loadSession();
    if (saved && saved.phase !== "GAME_OVER" && saved.phase !== "TUTORIAL") {
      setResumePrompt(true);
      return;
    }
    setEngine(new OverseerEngine({ restore: false }));
  }, []);

  useEffect(() => {
    engineRef.current = engine;
  }, [engine]);

  // Always tear down loop + audio when leaving the game route.
  useEffect(() => {
    return () => {
      engineRef.current?.destroy();
      engineRef.current = null;
      disposeGameAudio();
    };
  }, []);

  useEffect(() => {
    if (!engine) return;
    return initAgentOverseerSync();
  }, [engine]);

  if (resumePrompt && !engine) {
    return (
      <div className="flex min-h-screen flex-col items-center justify-center bg-[#050A14] p-6 text-center">
        <p className="font-mono text-[12px] uppercase tracking-[0.2em] text-[#00F5FF]">
          Saved session found
        </p>
        <p className="mt-2 max-w-sm text-[14px] text-[#4A7FA5]">
          Continue your in-progress run or start fresh?
        </p>
        <div className="mt-5 flex gap-3">
          <button
            type="button"
            onClick={() => {
              setResumePrompt(false);
              const e = new OverseerEngine({ restore: true });
              setEngine(e);
            }}
            className="rounded-lg bg-[#00F5FF] px-5 py-2.5 font-mono text-[12px] font-bold uppercase text-[#050A14]"
          >
            Resume
          </button>
          <button
            type="button"
            onClick={() => {
              setResumePrompt(false);
              const e = new OverseerEngine({ restore: false });
              setEngine(e);
            }}
            className="rounded-lg border border-[#4A7FA5]/40 px-5 py-2.5 font-mono text-[12px] font-bold uppercase text-[#E8F4FD]"
          >
            New game
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#050A14] text-[#E8F4FD]">
      <style>{SCOPED_CSS}</style>
      {engine ? (
        <GameShell engine={engine} />
      ) : !resumePrompt ? (
        <div className="flex min-h-screen items-center justify-center">
          <p className="font-mono text-[12px] uppercase tracking-[0.3em] text-[#4A7FA5]">
            Initialising swarm…
          </p>
        </div>
      ) : null}
    </div>
  );
}

function GameShell({ engine }: { engine: OverseerEngine }) {
  const snap = useEngineSnapshot(engine);
  const shellRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    shellRef.current?.focus();
  }, []);

  const onKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "p" || e.key === "P") {
      e.preventDefault();
      engine.togglePause();
      return;
    }
    if (snap.phase !== "PLAYING" && snap.phase !== "PAUSED") return;

    if (e.key === "ArrowRight" || e.key === "ArrowLeft") {
      e.preventDefault();
      const order = engine.order;
      if (!order.length) return;
      const idx = engine.selectedNodeId ? order.indexOf(engine.selectedNodeId) : -1;
      const next =
        e.key === "ArrowRight"
          ? order[(idx + 1) % order.length]
          : order[(idx - 1 + order.length) % order.length];
      engine.selectNode(next);
    } else if (e.key === "1") {
      const sel = engine.selectedNodeId;
      if (sel) engine.dispatchAgent("ALPHA", sel);
    } else if (e.key === "2") {
      const sel = engine.selectedNodeId;
      if (sel) engine.dispatchAgent("BETA", sel);
    } else if (e.key === " ") {
      e.preventDefault();
      if (snap.mutexLockedNodeId) {
        if (!snap.confirmedPath) engine.confirmSerializePath();
        else engine.releaseMutex();
      } else engine.applyMutex();
    }
  };

  return (
    <div
      ref={shellRef}
      className="flex min-h-screen flex-col outline-none"
      tabIndex={0}
      onKeyDown={onKeyDown}
    >
      <HUDPanel snap={snap} />

      <main className="relative mx-auto flex w-full max-w-[1280px] flex-1 flex-col gap-4 p-4 lg:flex-row lg:p-6">
        <ControlPanel engine={engine} snap={snap} />
        <div className="relative min-w-0 flex-1">
          <GameCanvas engine={engine} />
          <LivelockAlert snap={snap} />
        </div>

        <LevelComplete engine={engine} snap={snap} />
        <OnboardingTutorial engine={engine} snap={snap} />
        {snap.phase === "GAME_OVER" && <GameOverOverlay engine={engine} snap={snap} />}
      </main>

      <div className="sr-only" aria-live="polite">
        {snap.livelockActive
          ? `Livelock on ${snap.livelockNodeId}. Select, mutex, serialize path, release.`
          : `Wave ${snap.wave}. ${snap.readyNodeIds.length} ready nodes. Dispatch agents with keys 1 and 2.`}
      </div>
      <ul className="sr-only">
        {snap.nodesBrief.map((n) => (
          <li key={n.id}>
            {n.id} {n.label}: {n.status}
            {n.ready ? " ready for dispatch" : ""}
          </li>
        ))}
      </ul>

      <footer className="border-t border-[#0D1B2A] px-6 py-3">
        <p className="font-mono text-[10px] uppercase tracking-wider text-[#4A7FA5]">
          1/2 dispatch ALPHA/BETA · P pause · Space mutex/path/release · Click nodes to select
        </p>
      </footer>
    </div>
  );
}

function GameOverOverlay({ engine, snap }: { engine: OverseerEngine; snap: UISnapshot }) {
  return (
    <div className="absolute inset-0 z-30 flex items-center justify-center bg-[#050A14]/85 p-4 backdrop-blur-sm">
      <div
        className={`w-full max-w-[440px] rounded-2xl border bg-[#050A14] p-6 text-center ${
          snap.won
            ? "border-[#00FF9F]/40 shadow-[0_0_60px_rgba(0,255,159,0.15)]"
            : "border-[#FF3864]/40 shadow-[0_0_60px_rgba(255,56,100,0.15)]"
        }`}
      >
        <p
          className={`font-mono text-[10px] font-bold uppercase tracking-[0.3em] ${
            snap.won ? "text-[#00FF9F]" : "text-[#FF3864]"
          }`}
        >
          {snap.won ? "Swarm Stable" : "Session Ended"}
        </p>
        <h2 className="mt-2 text-[24px] font-bold tracking-tight">
          {snap.won ? "All 10 waves cleared" : "Game over"}
        </h2>
        <div className="mt-4 space-y-1 font-mono text-[13px] text-[#4A7FA5]">
          <p>
            Final score: <span className="text-[#00F5FF]">{snap.score.toLocaleString()}</span>
          </p>
          <p>
            Livelocks resolved: <span className="text-[#00FF9F]">{snap.locksResolved}</span>
          </p>
        </div>
        <LeaderboardPanel entries={snap.leaderboard} />
        <div className="mt-5 flex flex-col gap-2 sm:flex-row">
          <button
            type="button"
            onClick={() => engine.restart()}
            className="flex-1 rounded-lg bg-[#00F5FF] px-4 py-2.5 font-mono text-[12px] font-bold uppercase tracking-wider text-[#050A14]"
          >
            Play Again
          </button>
          <Link
            to="/simulations"
            className="flex-1 rounded-lg border border-[#4A7FA5]/40 px-4 py-2.5 font-mono text-[12px] font-bold uppercase tracking-wider text-[#E8F4FD]"
          >
            Back to Simulations
          </Link>
        </div>
      </div>
    </div>
  );
}
