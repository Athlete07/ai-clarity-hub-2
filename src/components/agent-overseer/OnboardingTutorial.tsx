import { useEffect, useRef, useState } from "react";
import type { OverseerEngine, UISnapshot } from "@/lib/agent-overseer/engine";
import { TutorialDrill } from "@/lib/agent-overseer/tutorial-drill";
import { NodeStatus } from "@/lib/agent-overseer/types";

const STEPS = [
  {
    title: "The Arena",
    body: "You schedule the swarm. Ready nodes glow — dispatch ALPHA (1) or BETA (2) to execute them. Nothing runs without your order.",
    drill: false,
  },
  {
    title: "The Threat",
    body: "Practice on this 3-node graph: a livelock will fire on Infer. Select it, apply mutex, serialize path, release.",
    drill: true,
  },
  {
    title: "Your Power",
    body: "Mutex freezes contention. Serialize path proves you understand the dependency chain. Fast, correct releases score highest.",
    drill: false,
  },
];

const STATUS_COLOR: Record<NodeStatus, string> = {
  [NodeStatus.PENDING]: "#1E3A5F",
  [NodeStatus.READY]: "#1E3A5F",
  [NodeStatus.RUNNING]: "#00F5FF",
  [NodeStatus.COMPLETED]: "#00FF9F",
  [NodeStatus.LOCKED]: "#FFB800",
  [NodeStatus.LIVELOCK]: "#FF3864",
  [NodeStatus.DEGRADED]: "#FF3864",
};

function DrillCanvas({ drill }: { drill: TutorialDrill }) {
  const ref = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = ref.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;
    let raf = 0;
    const draw = () => {
      drill.tick();
      ctx.fillStyle = "#050A14";
      ctx.fillRect(0, 0, 560, 120);
      for (const n of drill.nodes) {
        ctx.beginPath();
        ctx.arc(n.x, n.y, 22, 0, Math.PI * 2);
        ctx.fillStyle = STATUS_COLOR[n.status];
        ctx.fill();
        ctx.strokeStyle = drill.selectedId === n.id ? "#E8F4FD" : "#4A7FA5";
        ctx.lineWidth = drill.selectedId === n.id ? 2 : 1;
        ctx.stroke();
        ctx.fillStyle = "#E8F4FD";
        ctx.font = "10px monospace";
        ctx.textAlign = "center";
        ctx.fillText(n.label, n.x, n.y - 30);
      }
      raf = requestAnimationFrame(draw);
    };
    raf = requestAnimationFrame(draw);
    return () => cancelAnimationFrame(raf);
  }, [drill]);

  return (
    <canvas
      ref={ref}
      width={560}
      height={120}
      className="mt-3 w-full rounded-lg border border-[#0D1B2A]"
      onClick={(e) => {
        const rect = e.currentTarget.getBoundingClientRect();
        const x = ((e.clientX - rect.left) / rect.width) * 560;
        const y = ((e.clientY - rect.top) / rect.height) * 120;
        for (const n of drill.nodes) {
          if ((n.x - x) ** 2 + (n.y - y) ** 2 < 28 ** 2) drill.select(n.id);
        }
      }}
    />
  );
}

export function OnboardingTutorial({
  engine,
  snap,
}: {
  engine: OverseerEngine;
  snap: UISnapshot;
}) {
  const [step, setStep] = useState(0);
  const [drill] = useState(() => new TutorialDrill());
  if (snap.phase !== "TUTORIAL") return null;

  const s = STEPS[step];
  const last = step === STEPS.length - 1;
  const drillDone = drill.phase === "done";

  return (
    <div className="absolute inset-0 z-40 flex items-center justify-center bg-[#050A14]/85 p-4 backdrop-blur-sm">
      <div className="w-full max-w-[520px] rounded-2xl border border-[#00F5FF]/40 bg-[#050A14] p-6 shadow-[0_0_60px_rgba(0,245,255,0.12)]">
        <p className="font-mono text-[10px] font-bold uppercase tracking-[0.3em] text-[#00F5FF]">
          Briefing {step + 1} / {STEPS.length}
        </p>
        <h2 className="mt-2 text-[20px] font-bold tracking-tight text-[#E8F4FD]">{s.title}</h2>
        <p className="mt-2 text-[13px] leading-relaxed text-[#4A7FA5]">{s.body}</p>

        {s.drill && (
          <>
            <DrillCanvas drill={drill} />
            <div className="mt-3 flex flex-wrap gap-2">
              <button
                type="button"
                disabled={drill.phase !== "lock"}
                onClick={() => drill.applyMutex()}
                className="rounded-md border border-[#FF3864]/50 px-3 py-1.5 font-mono text-[10px] uppercase text-[#FF3864] disabled:opacity-30"
              >
                Mutex
              </button>
              <button
                type="button"
                disabled={drill.phase !== "path"}
                onClick={() => drill.serializePath()}
                className="rounded-md border border-[#4A7FA5]/50 px-3 py-1.5 font-mono text-[10px] uppercase text-[#E8F4FD] disabled:opacity-30"
              >
                Serialize
              </button>
              <button
                type="button"
                disabled={drill.phase !== "release"}
                onClick={() => drill.release()}
                className="rounded-md border border-[#00FF9F]/50 px-3 py-1.5 font-mono text-[10px] uppercase text-[#00FF9F] disabled:opacity-30"
              >
                Release
              </button>
            </div>
            {drill.pathConfirmed && drill.phase === "release" && (
              <p className="mt-2 font-mono text-[10px] text-[#00F5FF]">
                Path: {drill.getPath().join(" → ")}
              </p>
            )}
          </>
        )}

        <div className="mt-5 flex gap-2">
          {step > 0 && (
            <button
              type="button"
              onClick={() => setStep(step - 1)}
              className="rounded-lg border border-[#4A7FA5]/40 px-4 py-2.5 font-mono text-[12px] font-bold uppercase tracking-wider text-[#E8F4FD]"
            >
              Back
            </button>
          )}
          <button
            type="button"
            disabled={s.drill && !drillDone}
            onClick={() => {
              if (last) engine.finishTutorial();
              else setStep(step + 1);
            }}
            className="flex-1 rounded-lg bg-[#00F5FF] px-4 py-2.5 font-mono text-[12px] font-bold uppercase tracking-wider text-[#050A14] disabled:opacity-40"
          >
            {last ? "Begin Oversight" : "Next"}
          </button>
        </div>
      </div>
    </div>
  );
}
