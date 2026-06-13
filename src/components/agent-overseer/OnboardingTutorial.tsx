import { useCallback, useEffect, useReducer, useRef, useState } from "react";
import type { OverseerEngine, UISnapshot } from "@/lib/agent-overseer/engine";
import { TutorialDrill, type DrillPhase } from "@/lib/agent-overseer/tutorial-drill";
import { NodeStatus } from "@/lib/agent-overseer/types";

const STEPS = [
  {
    title: "The Arena",
    body: "You schedule the swarm. Ready nodes glow — dispatch ALPHA (1) or BETA (2) to execute them. Nothing runs without your order.",
    drill: false,
  },
  {
    title: "The Threat",
    body: "Practice on this 3-node graph: when Infer turns red, click it, then Mutex → Serialize → Release.",
    drill: true,
  },
  {
    title: "Your Power",
    body: "Mutex freezes contention. Serialize path proves you understand the dependency chain. Fast, correct releases score highest.",
    drill: false,
  },
];

const DRILL_HINT: Partial<Record<DrillPhase, string>> = {
  watch: "Watch the graph — a livelock will appear on Infer in a moment…",
  livelock: "Click the red Infer node, then press Mutex.",
  lock: "Press Mutex to lock contention.",
  path: "Press Serialize to confirm the dependency path.",
  release: "Press Release to finish the drill.",
  done: "Drill complete — press Next to continue.",
};

const STATUS_COLOR: Record<NodeStatus, string> = {
  [NodeStatus.PENDING]: "#1E3A5F",
  [NodeStatus.READY]: "#1E3A5F",
  [NodeStatus.RUNNING]: "#00F5FF",
  [NodeStatus.COMPLETED]: "#00FF9F",
  [NodeStatus.LOCKED]: "#FFB800",
  [NodeStatus.LIVELOCK]: "#FF3864",
  [NodeStatus.DEGRADED]: "#FF3864",
};

const CANVAS_W = 560;
const CANVAS_H = 120;

function DrillCanvas({
  drill,
  onDrillChange,
}: {
  drill: TutorialDrill;
  onDrillChange: () => void;
}) {
  const ref = useRef<HTMLCanvasElement | null>(null);
  const onChangeRef = useRef(onDrillChange);
  onChangeRef.current = onDrillChange;

  useEffect(() => {
    const canvas = ref.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;
    let raf = 0;
    let prevPhase = drill.phase;
    const draw = () => {
      drill.tick();
      if (drill.phase !== prevPhase) {
        prevPhase = drill.phase;
        onChangeRef.current();
      }
      ctx.fillStyle = "#050A14";
      ctx.fillRect(0, 0, CANVAS_W, CANVAS_H);
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

  const hitTest = (clientX: number, clientY: number, el: HTMLCanvasElement) => {
    const rect = el.getBoundingClientRect();
    const x = ((clientX - rect.left) / rect.width) * CANVAS_W;
    const y = ((clientY - rect.top) / rect.height) * CANVAS_H;
    for (const n of drill.nodes) {
      if ((n.x - x) ** 2 + (n.y - y) ** 2 < 28 ** 2) {
        drill.select(n.id);
        onDrillChange();
        return;
      }
    }
  };

  return (
    <canvas
      ref={ref}
      width={CANVAS_W}
      height={CANVAS_H}
      className="mt-3 w-full rounded-lg border border-[#0D1B2A]"
      onClick={(e) => hitTest(e.clientX, e.clientY, e.currentTarget)}
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
  const [, syncDrill] = useReducer((n: number) => n + 1, 0);

  const bumpDrill = useCallback(() => syncDrill(), []);

  if (snap.phase !== "TUTORIAL") return null;

  const s = STEPS[step];
  const last = step === STEPS.length - 1;
  const drillPhase = drill.phase;
  const drillDone = drillPhase === "done";
  const nextDisabled = Boolean(s.drill && !drillDone);

  const runDrillAction = (action: () => boolean) => {
    if (action()) bumpDrill();
  };

  return (
    <div className="absolute inset-0 z-40 flex items-center justify-center bg-[#050A14]/85 p-4 backdrop-blur-sm">
      <div className="w-full max-w-[520px] rounded-2xl border border-[#00F5FF]/40 bg-[#050A14] p-6 shadow-[0_0_60px_rgba(0,245,255,0.12)]">
        <div className="flex items-center justify-between gap-3">
          <p className="font-mono text-[10px] font-bold uppercase tracking-[0.3em] text-[#00F5FF]">
            Briefing {step + 1} / {STEPS.length}
          </p>
          <button
            type="button"
            onClick={() => engine.finishTutorial()}
            className="font-mono text-[10px] uppercase tracking-wider text-[#4A7FA5] underline-offset-2 hover:text-[#E8F4FD] hover:underline"
          >
            Skip briefing
          </button>
        </div>
        <h2 className="mt-2 text-[20px] font-bold tracking-tight text-[#E8F4FD]">{s.title}</h2>
        <p className="mt-2 text-[13px] leading-relaxed text-[#4A7FA5]">{s.body}</p>

        {s.drill && (
          <>
            <DrillCanvas drill={drill} onDrillChange={bumpDrill} />
            <p className="mt-2 font-mono text-[10px] text-[#00F5FF]">
              {DRILL_HINT[drillPhase] ?? "Follow the steps below."}
            </p>
            <div className="mt-3 flex flex-wrap gap-2">
              <button
                type="button"
                disabled={drillPhase !== "lock"}
                onClick={() => runDrillAction(() => drill.applyMutex())}
                className="rounded-md border border-[#FF3864]/50 px-3 py-1.5 font-mono text-[10px] uppercase text-[#FF3864] disabled:opacity-30"
              >
                Mutex
              </button>
              <button
                type="button"
                disabled={drillPhase !== "path"}
                onClick={() => runDrillAction(() => drill.serializePath())}
                className="rounded-md border border-[#4A7FA5]/50 px-3 py-1.5 font-mono text-[10px] uppercase text-[#E8F4FD] disabled:opacity-30"
              >
                Serialize
              </button>
              <button
                type="button"
                disabled={drillPhase !== "release"}
                onClick={() => runDrillAction(() => drill.release())}
                className="rounded-md border border-[#00FF9F]/50 px-3 py-1.5 font-mono text-[10px] uppercase text-[#00FF9F] disabled:opacity-30"
              >
                Release
              </button>
            </div>
            {drill.pathConfirmed && drillPhase === "release" && (
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
            disabled={nextDisabled}
            onClick={() => {
              if (last) engine.finishTutorial();
              else setStep(step + 1);
            }}
            className="flex-1 rounded-lg bg-[#00F5FF] px-4 py-2.5 font-mono text-[12px] font-bold uppercase tracking-wider text-[#050A14] enabled:hover:bg-[#33F7FF] disabled:cursor-not-allowed disabled:opacity-40"
          >
            {last ? "Begin Oversight" : "Next"}
          </button>
        </div>
      </div>
    </div>
  );
}
