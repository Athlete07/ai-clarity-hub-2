import type { ReactNode } from "react";
import { Layers, Box, Maximize, ArrowRight, Activity, Cpu, CheckCircle2 } from "lucide-react";
import type { ConceptBodyBlock } from "@/lib/concepts";
import {
  DIAGRAM_REGISTRY,
  type ComparisonDiagramDef,
  type FlowDiagramDef,
  type NestedDiagramDef,
  type TreeBranch,
  type TreeDiagramDef,
} from "@/lib/diagram-registry";

export function DiagramBlock({ block }: { block: Extract<ConceptBodyBlock, { kind: "diagram" }> }) {
  const registryDef = DIAGRAM_REGISTRY[block.id];

  return (
    <div className="my-10 overflow-hidden rounded-xl border border-border bg-card shadow-sm">
      <div className="border-b border-border bg-muted/20 px-5 py-3">
        <h4 className="flex items-center gap-2 text-[14px] font-semibold text-foreground">
          {block.type === "flow" && <Layers size={15} className="text-muted-foreground" />}
          {block.type === "nested" && <Maximize size={15} className="text-muted-foreground" />}
          {block.type === "comparison" && <Activity size={15} className="text-muted-foreground" />}
          {block.type === "tree" && <Cpu size={15} className="text-muted-foreground" />}
          {block.title}
        </h4>
        <p className="mt-1 leading-relaxed text-[12px] text-muted-foreground">{block.caption}</p>
      </div>

      <div className="overflow-x-auto p-6">
        {registryDef ? (
          <RegistryDiagram def={registryDef} />
        ) : (
          <>
            {block.id === "ch1-dl-flow" && <FlowDiagram />}
            {block.id === "ch1-ai-hierarchy" && <NestedDiagram />}
            {block.id === "ch1-paradigm-shift" && <ComparisonDiagram />}
            {(block.id === "ch1-ml-decision-tree" || block.title === "Is it actually ML?") && (
              <TreeDiagram />
            )}

            {block.id === "ch2-training-loop" && <TrainingLoopFlow />}
            {block.id === "ch2-epochs-nested" && <EpochsNested />}
            {block.id === "ch2-fitting-comparison" && <FittingComparison />}

            {block.id === "ch1-git-flow" && <GitFlow />}
            {block.id === "ch2-api-flow" && <ApiFlow />}
            {block.id === "ch3-python-stack" && <PythonStack />}
            {block.id === "ch4-notebook-lifecycle" && <NotebookLifecycle />}
            {block.id === "ch5-runtime-spectrum" && <RuntimeSpectrum />}
            {block.id === "ch6-orchestration" && <OrchestrationTree />}
            {block.id === "ch7-deploy-flow" && <DeployFlow />}
            {block.id === "ch8-cost-latency-frontier" && <CostLatencyFrontier />}
            {block.id === "pb4-rag-pipeline" && <RagPipelineFlow />}
            {block.id === "pb5-serving-stack" && <ServingStackFlow />}
          </>
        )}
      </div>
    </div>
  );
}

function RegistryDiagram({
  def,
}: {
  def: FlowDiagramDef | NestedDiagramDef | ComparisonDiagramDef | TreeDiagramDef;
}) {
  switch (def.type) {
    case "flow":
      return <StepRow steps={def.steps} highlightLast={def.highlightLast} />;
    case "nested":
      return <RegistryNested layers={def.layers} />;
    case "comparison":
      if (def.cards) return <RegistryComparisonCards cards={def.cards} />;
      if (def.rows) return <RegistryComparisonRows rows={def.rows} />;
      return null;
    case "tree":
      return <RegistryTree def={def} />;
    default:
      return null;
  }
}

function RegistryNested({ layers }: { layers: NestedDiagramDef["layers"] }) {
  const renderLayer = (index: number): ReactNode => {
    const layer = layers[index];
    const isInnermost = index === layers.length - 1;
    const inner = !isInnermost ? renderLayer(index + 1) : null;

    return (
      <div
        className={`relative rounded-xl border p-5 pt-8 ${
          isInnermost
            ? "rounded-md border-purple bg-purple-light/40 shadow-sm"
            : index === 0
              ? "border-border bg-muted/10"
              : "rounded-lg border-border bg-muted/20"
        }`}
      >
        <div
          className={`absolute left-5 top-3 text-[13px] font-bold ${
            isInnermost ? "text-purple-dark" : index === 0 ? "text-foreground/80" : "text-foreground"
          }`}
        >
          {layer.title}
        </div>
        <div
          className={`mb-4 mt-1 pl-1 text-[11px] ${
            isInnermost ? "text-purple-dark/80" : "text-muted-foreground"
          }`}
        >
          {layer.desc}
        </div>
        {layer.items && (
          <div
            className={`mb-4 pl-1 text-[11px] ${
              isInnermost ? "text-purple-dark/70" : "text-muted-foreground"
            }`}
          >
            {layer.items}
          </div>
        )}
        {inner}
      </div>
    );
  };

  return <div className="relative mx-auto w-full max-w-[520px]">{renderLayer(0)}</div>;
}

function RegistryComparisonCards({ cards }: { cards: NonNullable<ComparisonDiagramDef["cards"]> }) {
  return (
    <div className="flex w-full flex-col gap-4 lg:flex-row">
      {cards.map((c) => (
        <div
          key={c.label}
          className={`flex-1 rounded-xl border p-5 ${
            c.accent ? "border-purple bg-purple-light/20" : "border-border bg-transparent"
          }`}
        >
          <div
            className={`mb-3 text-[12px] font-semibold uppercase tracking-wider ${
              c.accent ? "text-purple-dark" : "text-muted-foreground"
            }`}
          >
            {c.label}
          </div>
          <div
            className={`rounded border p-4 text-[13px] shadow-sm ${
              c.accent ? "border-purple bg-purple-light/50" : "border-border bg-card"
            }`}
          >
            <div className={`font-medium ${c.accent ? "text-purple-dark" : "text-foreground"}`}>
              {c.title}
            </div>
            <div
              className={`mt-2 text-[12px] ${c.accent ? "text-purple-dark/80" : "text-muted-foreground"}`}
            >
              {c.desc}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

function RegistryComparisonRows({ rows }: { rows: NonNullable<ComparisonDiagramDef["rows"]> }) {
  return (
    <div className="flex flex-col gap-6">
      {rows.map((row) => (
        <div key={row.label} className="rounded-xl border border-border bg-transparent p-5">
          <div className="mb-4 text-[12px] font-semibold uppercase tracking-wider text-muted-foreground">
            {row.label}
          </div>
          <div className="flex flex-wrap items-center gap-3 text-[13px]">
            {row.steps.map((step, i) => (
              <div key={step} className="flex items-center gap-3">
                <div className="rounded border border-border bg-card px-3 py-2 font-medium text-foreground shadow-sm">
                  {step}
                </div>
                {i < row.steps.length - 1 && (
                  <ArrowRight size={16} className="text-muted-foreground/50" />
                )}
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

function RegistryTree({ def }: { def: TreeDiagramDef }) {
  return (
    <div className="w-full text-[13px] font-medium">
      <div className="rounded-md border border-border bg-muted/30 px-4 py-2 text-foreground">
        {def.root}
      </div>
      <div className="relative mt-4 pl-6">
        <div className="absolute bottom-0 left-3 top-0 w-px bg-border" />
        {def.branches.map((branch, i) => (
          <TreeBranchNode key={i} branch={branch} depth={0} />
        ))}
      </div>
    </div>
  );
}

function TreeBranchNode({ branch, depth }: { branch: TreeBranch; depth: number }) {
  const hasChildren = branch.children && branch.children.length > 0;
  return (
    <div className={`relative ${depth > 0 ? "mb-4" : "mb-6"}`}>
      <div className="absolute -left-3 top-3 w-4 border-t border-border" />
      <div className="flex items-start gap-2 pl-4">
        <span className="mt-0.5 rounded border border-border bg-card px-1.5 py-0.5 text-[10px] font-bold text-muted-foreground shadow-sm">
          {branch.answer}
        </span>
        <div className="w-full">
          <div className="text-foreground">{branch.label}</div>
          {branch.action && (
            <div className="mt-1 flex items-center gap-1.5 text-[12px] text-muted-foreground">
              <ArrowRight size={12} /> {branch.action}
            </div>
          )}
          {branch.conclusion && (
            <div className="mt-3 rounded-lg border border-purple bg-purple-light/40 p-3">
              <div className="flex items-center gap-2 font-semibold text-purple-dark">
                <CheckCircle2 size={14} /> {branch.conclusion.title}
              </div>
              <div className="mt-1 text-[12px] text-purple-dark/80">{branch.conclusion.action}</div>
            </div>
          )}
          {hasChildren && (
            <div className="relative mt-4 pl-4">
              <div className="absolute bottom-0 left-2 top-0 w-px bg-border" />
              {branch.children!.map((child, i) => (
                <TreeBranchNode key={i} branch={child} depth={depth + 1} />
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

function StepRow({
  steps,
  highlightLast = true,
}: {
  steps: { title: string; desc: string }[];
  highlightLast?: boolean;
}) {
  return (
    <div className="flex w-full min-w-min max-w-[900px] flex-col items-center gap-3 sm:flex-row sm:flex-wrap">
      {steps.map((step, i) => {
        const isLast = i === steps.length - 1;
        const accent = highlightLast && isLast;
        return (
          <div key={i} className="flex items-center gap-3">
            <div
              className={`flex h-[92px] w-[140px] flex-col items-center justify-center rounded-lg border p-3 text-center shadow-sm ${
                accent
                  ? "border-purple bg-purple-light/50 text-purple-dark"
                  : "border-border bg-muted/10 text-foreground"
              }`}
            >
              <span className="text-[12px] font-medium leading-tight">{step.title}</span>
              <span
                className={`mt-1 text-[10px] leading-tight ${accent ? "text-purple-dark/80" : "text-muted-foreground"}`}
              >
                {step.desc}
              </span>
            </div>
            {!isLast && (
              <ArrowRight size={16} className="rotate-90 text-muted-foreground/50 sm:rotate-0" />
            )}
          </div>
        );
      })}
    </div>
  );
}

function GitFlow() {
  return (
    <StepRow
      steps={[
        { title: "Local commits", desc: "On a feature branch" },
        { title: "Push to remote", desc: "Branch lives on GitHub" },
        { title: "Open PR", desc: "Description + reviewers" },
        { title: "Review + CI", desc: "Tests, lint, approval" },
        { title: "Merge to main", desc: "Squash or merge commit" },
        { title: "Deploy", desc: "CD pipeline to prod" },
      ]}
    />
  );
}

function RagPipelineFlow() {
  return (
    <StepRow
      steps={[
        { title: "Ingest", desc: "Load docs, PDFs, APIs" },
        { title: "Chunk", desc: "Split into passages" },
        { title: "Embed", desc: "Vectors per chunk" },
        { title: "Index", desc: "Store in vector DB" },
        { title: "Retrieve", desc: "Top-N at query time" },
        { title: "Generate", desc: "LLM + grounded context" },
      ]}
    />
  );
}

function ServingStackFlow() {
  return (
    <StepRow
      steps={[
        { title: "Client", desc: "App, API consumer" },
        { title: "Load balancer", desc: "Distribute traffic" },
        { title: "API gateway", desc: "Auth, rate limits" },
        { title: "Inference server", desc: "vLLM, Triton, TGI" },
        { title: "Model", desc: "Weights on GPU/CPU" },
      ]}
    />
  );
}

function ApiFlow() {
  return (
    <div className="flex w-full max-w-[820px] flex-col items-stretch gap-4">
      <div className="grid grid-cols-1 gap-3 sm:grid-cols-3">
        <div className="rounded-lg border border-border bg-muted/10 p-4 shadow-sm">
          <div className="text-[11px] font-semibold uppercase tracking-wider text-muted-foreground">
            Client request
          </div>
          <ul className="mt-2 space-y-1 text-[12px] text-foreground">
            <li>Method (GET / POST)</li>
            <li>URL + path params</li>
            <li>Headers (auth, type)</li>
            <li>Body (JSON payload)</li>
          </ul>
        </div>
        <div className="flex items-center justify-center rounded-lg border border-dashed border-border bg-muted/20 p-4 text-center">
          <div>
            <Activity size={18} className="mx-auto text-muted-foreground" />
            <div className="mt-2 text-[12px] font-medium text-foreground">Server</div>
            <div className="text-[11px] text-muted-foreground">
              Auth, validate, process, query DB
            </div>
          </div>
        </div>
        <div className="rounded-lg border border-purple bg-purple-light/40 p-4 shadow-sm">
          <div className="text-[11px] font-semibold uppercase tracking-wider text-purple-dark">
            Server response
          </div>
          <ul className="mt-2 space-y-1 text-[12px] text-purple-dark">
            <li>Status code (200 / 4xx / 5xx)</li>
            <li>Headers (cache, rate limit)</li>
            <li>Body (data, error, meta)</li>
          </ul>
        </div>
      </div>
      <div className="flex items-center justify-center gap-2 text-[11px] text-muted-foreground">
        <ArrowRight size={12} /> Request <ArrowRight size={12} /> Server work{" "}
        <ArrowRight size={12} /> Response
      </div>
    </div>
  );
}

function PythonStack() {
  return (
    <div className="relative mx-auto w-full max-w-[520px]">
      <div className="rounded-xl border border-border bg-muted/10 p-5 pt-8">
        <div className="absolute left-6 top-4 text-[13px] font-bold text-foreground/80">
          Your model code (Python)
        </div>
        <div className="mb-4 mt-1 pl-1 text-[11px] text-muted-foreground">
          model.fit(...), prompt templates, training loops — the part you read.
        </div>

        <div className="relative rounded-lg border border-border bg-muted/20 p-5 pt-8">
          <div className="absolute left-5 top-3 text-[13px] font-bold text-foreground">
            Frameworks: PyTorch / TensorFlow / JAX
          </div>
          <div className="mb-4 mt-1 pl-1 text-[11px] text-muted-foreground">
            Tensor ops, autograd, model abstractions — Python on top, C++ underneath.
          </div>

          <div className="relative rounded-lg border border-border bg-muted/30 p-5 pt-8">
            <div className="absolute left-5 top-3 text-[13px] font-bold text-foreground">
              CUDA / cuDNN / optimised C++ kernels
            </div>
            <div className="mb-4 mt-1 pl-1 text-[11px] text-muted-foreground">
              The hot loops that actually move floats around.
            </div>

            <div className="relative rounded-md border border-purple bg-purple-light/40 p-5 pt-8 shadow-sm">
              <div className="absolute left-4 top-3 text-[13px] font-bold text-purple-dark">
                GPU drivers + hardware (NVIDIA / TPU)
              </div>
              <div className="mt-1 pl-1 text-[11px] text-purple-dark/80">
                Where the FLOPs and the cloud bill actually happen.
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function NotebookLifecycle() {
  return (
    <StepRow
      steps={[
        { title: "Notebook", desc: "Exploration, charts, ad-hoc" },
        { title: ".py modules", desc: "Extract reusable logic" },
        { title: "Tested code", desc: "Unit tests + linting" },
        { title: "Deployed service", desc: "Versioned, monitored" },
      ]}
    />
  );
}

function RuntimeSpectrum() {
  const cards = [
    {
      label: "Virtual machines",
      accent: false,
      cost: "Flat cost, 24/7",
      best: "Steady, predictable load",
      pain: "Pay for idle capacity",
    },
    {
      label: "Containers",
      accent: true,
      cost: "Scales with traffic",
      best: "Most web + API workloads",
      pain: "Needs orchestration",
    },
    {
      label: "Serverless",
      accent: false,
      cost: "Pay per invocation",
      best: "Spiky, low-volume jobs",
      pain: "Expensive at sustained scale",
    },
  ];
  return (
    <div className="flex w-full flex-col gap-4 lg:flex-row">
      {cards.map((c) => (
        <div
          key={c.label}
          className={`flex-1 rounded-xl border p-5 ${
            c.accent ? "border-purple bg-purple-light/20" : "border-border bg-transparent"
          }`}
        >
          <div
            className={`mb-3 text-[12px] font-semibold uppercase tracking-wider ${
              c.accent ? "text-purple-dark" : "text-muted-foreground"
            }`}
          >
            {c.label}
          </div>
          <div
            className={`rounded border p-4 text-[13px] shadow-sm ${
              c.accent ? "border-purple bg-purple-light/50" : "border-border bg-card"
            }`}
          >
            <div className={`font-medium ${c.accent ? "text-purple-dark" : "text-foreground"}`}>
              {c.cost}
            </div>
            <div
              className={`mt-2 text-[12px] ${c.accent ? "text-purple-dark/80" : "text-muted-foreground"}`}
            >
              Best for: {c.best}
            </div>
            <div
              className={`mt-1 text-[12px] ${c.accent ? "text-purple-dark/80" : "text-muted-foreground"}`}
            >
              Watch out: {c.pain}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

function OrchestrationTree() {
  const layers = [
    { title: "One container", desc: "Runs a single process in isolation" },
    { title: "Service", desc: "Many identical containers behind a load balancer" },
    { title: "Application", desc: "Multiple services talking over the network" },
    { title: "Orchestrator (Kubernetes)", desc: "Schedules, restarts, scales, routes traffic" },
  ];
  return (
    <div className="mx-auto flex w-full max-w-[580px] flex-col gap-2">
      {layers.map((l, i) => {
        const isLast = i === layers.length - 1;
        return (
          <div key={l.title} className="flex flex-col gap-1">
            <div
              className={`flex items-center gap-3 rounded-lg border p-3 shadow-sm ${
                isLast
                  ? "border-purple bg-purple-light/50 text-purple-dark"
                  : "border-border bg-muted/10 text-foreground"
              }`}
              style={{ marginLeft: `${i * 18}px` }}
            >
              <Box
                size={16}
                className={isLast ? "text-purple-dark" : "text-muted-foreground"}
              />
              <div>
                <div className="text-[13px] font-medium leading-tight">{l.title}</div>
                <div
                  className={`text-[11px] leading-tight ${
                    isLast ? "text-purple-dark/80" : "text-muted-foreground"
                  }`}
                >
                  {l.desc}
                </div>
              </div>
            </div>
            {!isLast && (
              <div
                className="text-[12px] text-muted-foreground/50"
                style={{ marginLeft: `${i * 18 + 18}px` }}
              >
                ↓
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}

function DeployFlow() {
  return (
    <StepRow
      steps={[
        { title: "PR opened", desc: "Diff + description" },
        { title: "CI", desc: "Lint, tests, build" },
        { title: "Review", desc: "Approval gate" },
        { title: "Merge to main", desc: "Trigger CD" },
        { title: "Staging", desc: "Automated checks" },
        { title: "Canary", desc: "1–5% of traffic" },
        { title: "100% rollout", desc: "Monitor + rollback ready" },
      ]}
    />
  );
}

function CostLatencyFrontier() {
  return (
    <div className="mx-auto w-full max-w-[640px]">
      <div className="relative h-[300px] rounded-xl border border-border bg-muted/10 p-4">
        <div className="absolute bottom-7 left-12 right-6 border-t border-border" />
        <div className="absolute bottom-7 left-12 top-4 border-l border-border" />
        <div className="absolute bottom-1 left-1/2 -translate-x-1/2 text-[10px] uppercase tracking-wider text-muted-foreground">
          Latency / cost per call →
        </div>
        <div className="absolute left-1 top-1/2 -translate-y-1/2 -rotate-90 text-[10px] uppercase tracking-wider text-muted-foreground">
          ← Quality / capability
        </div>

        <FrontierPoint left="22%" bottom="24%" label="Small model" sub="Fast, cheap, narrow" />
        <FrontierPoint left="46%" bottom="50%" label="Mid + RAG" sub="Balanced default" accent />
        <FrontierPoint left="72%" bottom="72%" label="Frontier model" sub="Slow, costly, broad" />
        <FrontierPoint left="80%" bottom="42%" label="Fine-tuned small" sub="Specialised win" />
      </div>
      <div className="mt-3 text-center text-[11px] text-muted-foreground">
        Mature products route different requests to different points on this curve.
      </div>
    </div>
  );
}

function FrontierPoint({
  left,
  bottom,
  label,
  sub,
  accent,
}: {
  left: string;
  bottom: string;
  label: string;
  sub: string;
  accent?: boolean;
}) {
  return (
    <div
      className="absolute flex flex-col items-center"
      style={{ left, bottom, transform: "translate(-50%, 50%)" }}
    >
      <div
        className={`h-3 w-3 rounded-full border ${
          accent ? "border-purple-dark bg-purple" : "border-border bg-card"
        }`}
      />
      <div
        className={`mt-1 whitespace-nowrap rounded border px-2 py-1 text-[10px] shadow-sm ${
          accent
            ? "border-purple bg-purple-light/60 text-purple-dark"
            : "border-border bg-card text-foreground"
        }`}
      >
        <div className="font-medium leading-tight">{label}</div>
        <div className="leading-tight opacity-75">{sub}</div>
      </div>
    </div>
  );
}

function FlowDiagram() {
  const steps = [
    { title: "Raw Input Data", desc: "e.g., Image Pixels" },
    { title: "Layer 1", desc: "Detects basic edges & gradients" },
    { title: "Layer 2", desc: "Combines edges into textures & shapes" },
    { title: "Layer 3", desc: "Combines shapes into object parts" },
    { title: "Output Layer", desc: "Final classification (e.g., 'Car')" },
  ];

  return (
    <div className="flex w-full min-w-min max-w-[800px] flex-col items-center gap-3 sm:flex-row">
      {steps.map((step, i) => {
        const isLast = i === steps.length - 1;
        return (
          <div key={i} className="flex items-center gap-3">
            <div
              className={`flex h-[90px] w-[130px] flex-col items-center justify-center rounded-lg border p-3 text-center shadow-sm ${
                isLast
                  ? "border-purple bg-purple-light/50 text-purple-dark"
                  : "border-border bg-muted/10 text-foreground"
              }`}
            >
              <span className="text-[12px] font-medium">{step.title}</span>
              <span
                className={`mt-1 text-[10px] leading-tight ${isLast ? "text-purple-dark/80" : "text-muted-foreground"}`}
              >
                {step.desc}
              </span>
            </div>
            {!isLast && (
              <ArrowRight size={16} className="rotate-90 text-muted-foreground/50 sm:rotate-0" />
            )}
          </div>
        );
      })}
    </div>
  );
}

function NestedDiagram() {
  return (
    <div className="relative mx-auto w-full max-w-[500px]">
      {/* AI Box */}
      <div className="rounded-xl border border-border bg-muted/10 p-5 pt-8">
        <div className="absolute left-6 top-4 text-[13px] font-bold text-foreground/80">
          Artificial Intelligence (AI)
        </div>
        <div className="mb-4 mt-1 pl-1 text-[11px] text-muted-foreground">
          Contains: Hand-coded rules, Expert systems, Search algorithms
        </div>

        {/* ML Box */}
        <div className="relative rounded-lg border border-border bg-muted/30 p-5 pt-8">
          <div className="absolute left-5 top-3 text-[13px] font-bold text-foreground">
            Machine Learning (ML)
          </div>
          <div className="mb-4 mt-1 pl-1 text-[11px] text-muted-foreground">
            Contains: Random Forests, Linear Regression, SVMs
          </div>

          {/* DL Box */}
          <div className="relative rounded-md border border-purple bg-purple-light/40 p-5 pt-8 shadow-sm">
            <div className="absolute left-4 top-3 text-[13px] font-bold text-purple-dark">
              Deep Learning (DL)
            </div>
            <div className="mt-1 pl-1 text-[11px] text-purple-dark/80">
              Contains: Neural Networks, Transformers (LLMs), CNNs
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function ComparisonDiagram() {
  return (
    <div className="flex flex-col gap-6">
      <div className="rounded-xl border border-border bg-transparent p-5">
        <div className="mb-4 text-[12px] font-semibold uppercase tracking-wider text-muted-foreground">
          Traditional Engineering Paradigm
        </div>
        <div className="flex items-center gap-4 text-[13px]">
          <div className="rounded border border-border bg-card px-3 py-2 font-medium text-foreground shadow-sm">
            Data + Hand-coded Rules
          </div>
          <ArrowRight size={16} className="text-muted-foreground/50" />
          <div className="rounded border border-dashed border-border bg-muted/30 px-3 py-2 text-muted-foreground">
            Execution Engine
          </div>
          <ArrowRight size={16} className="text-muted-foreground/50" />
          <div className="rounded border border-border bg-muted/10 px-3 py-2 font-medium text-foreground">
            Output Answers
          </div>
        </div>
      </div>

      <div className="rounded-xl border border-border bg-transparent p-5">
        <div className="mb-4 text-[12px] font-semibold uppercase tracking-wider text-muted-foreground">
          Machine Learning Paradigm
        </div>
        <div className="flex items-center gap-4 text-[13px]">
          <div className="rounded border border-border bg-card px-3 py-2 font-medium text-foreground shadow-sm">
            Data + Correct Answers
          </div>
          <ArrowRight size={16} className="text-muted-foreground/50" />
          <div className="rounded border border-dashed border-border bg-muted/30 px-3 py-2 text-muted-foreground">
            Training Algorithm
          </div>
          <ArrowRight size={16} className="text-purple/60" />
          <div className="rounded border border-purple bg-purple-light/50 px-3 py-2 font-medium text-purple-dark">
            Output Learned Rules
          </div>
        </div>
      </div>
    </div>
  );
}

function TreeDiagram() {
  return (
    <div className="w-full text-[13px] font-medium">
      <div className="flex items-center gap-3">
        <div className="rounded-md border border-border bg-muted/30 px-4 py-2 text-foreground">
          Does the system's logic update automatically based on new data?
        </div>
      </div>

      <div className="relative mt-4 pl-6">
        <div className="absolute bottom-0 left-3 top-0 w-px bg-border"></div>

        {/* Branch 1 */}
        <div className="relative mb-6">
          <div className="absolute -left-3 top-3 w-4 border-t border-border"></div>
          <div className="flex items-start gap-2 pl-4">
            <span className="mt-0.5 rounded border border-border bg-card px-1.5 py-0.5 text-[10px] font-bold text-muted-foreground shadow-sm">
              NO
            </span>
            <div>
              <div className="text-foreground/80">It is a Rule-Based System (Marketing AI).</div>
              <div className="mt-1 flex items-center gap-1.5 text-[12px] text-muted-foreground">
                <ArrowRight size={12} /> Action: Treat as standard software.
              </div>
            </div>
          </div>
        </div>

        {/* Branch 2 */}
        <div className="relative">
          <div className="absolute -left-3 top-3 w-4 border-t border-border"></div>
          <div className="flex items-start gap-2 pl-4">
            <span className="mt-0.5 rounded border border-border bg-card px-1.5 py-0.5 text-[10px] font-bold text-foreground shadow-sm">
              YES
            </span>
            <div className="w-full">
              <div className="text-foreground">
                Are the decision rules explicitly written by a human?
              </div>

              <div className="relative mt-4 pl-4">
                <div className="absolute bottom-0 left-2 top-0 w-px bg-border"></div>

                {/* Sub-branch 1 */}
                <div className="relative mb-6">
                  <div className="absolute -left-2 top-3 w-4 border-t border-border"></div>
                  <div className="flex items-start gap-2 pl-4">
                    <span className="mt-0.5 rounded border border-border bg-card px-1.5 py-0.5 text-[10px] font-bold text-foreground shadow-sm">
                      YES
                    </span>
                    <div>
                      <div className="text-foreground/80">It is a dynamic Rule-Based System.</div>
                      <div className="mt-1 flex items-center gap-1.5 text-[12px] text-muted-foreground">
                        <ArrowRight size={12} /> Action: Test boundary conditions manually.
                      </div>
                    </div>
                  </div>
                </div>

                {/* Sub-branch 2 */}
                <div className="relative">
                  <div className="absolute -left-2 top-3 w-4 border-t border-border"></div>
                  <div className="flex items-start gap-2 pl-4">
                    <span className="mt-0.5 rounded border border-border bg-card px-1.5 py-0.5 text-[10px] font-bold text-muted-foreground shadow-sm">
                      NO
                    </span>
                    <div>
                      <div className="text-foreground">
                        It infers patterns directly from a training dataset.
                      </div>
                      <div className="mt-3 rounded-lg border border-purple bg-purple-light/40 p-3">
                        <div className="flex items-center gap-2 font-semibold text-purple-dark">
                          <CheckCircle2 size={14} /> Conclusion: True Machine Learning System.
                        </div>
                        <div className="mt-1 leading-relaxed text-[12px] text-purple-dark/80">
                          Action: Require an evaluation dataset, monitor for drift, and budget for
                          retraining pipelines.
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function TrainingLoopFlow() {
  const steps = [
    { title: "1. Forward Pass", desc: "Generates a prediction" },
    { title: "2. Loss Function", desc: "Calculates the error" },
    { title: "3. Backpropagation", desc: "Assigns the blame backwards" },
    { title: "4. Gradient Descent", desc: "Updates parameters to learn" },
  ];

  return (
    <div className="flex w-full min-w-min max-w-[800px] flex-col items-center gap-3 sm:flex-row">
      {steps.map((step, i) => {
        const isLast = i === steps.length - 1;
        return (
          <div key={i} className="flex items-center gap-3">
            <div
              className={`flex h-[90px] w-[130px] flex-col items-center justify-center rounded-lg border p-3 text-center shadow-sm ${
                isLast
                  ? "border-purple bg-purple-light/50 text-purple-dark"
                  : "border-border bg-muted/10 text-foreground"
              }`}
            >
              <span className="text-[12px] font-medium">{step.title}</span>
              <span
                className={`mt-1 text-[10px] leading-tight ${isLast ? "text-purple-dark/80" : "text-muted-foreground"}`}
              >
                {step.desc}
              </span>
            </div>
            {!isLast && (
              <ArrowRight size={16} className="rotate-90 text-muted-foreground/50 sm:rotate-0" />
            )}
          </div>
        );
      })}
    </div>
  );
}

function EpochsNested() {
  return (
    <div className="relative mx-auto w-full max-w-[500px]">
      {/* Epoch Box */}
      <div className="rounded-xl border border-border bg-muted/10 p-5 pt-8">
        <div className="absolute left-6 top-4 text-[13px] font-bold text-foreground/80">Epoch</div>
        <div className="mb-4 mt-1 pl-1 text-[11px] text-muted-foreground">
          One full pass through the entire 1,000,000 row dataset.
        </div>

        {/* Batch Box */}
        <div className="relative rounded-lg border border-border bg-muted/30 p-5 pt-8">
          <div className="absolute left-5 top-3 text-[13px] font-bold text-foreground">Batch</div>
          <div className="mb-4 mt-1 pl-1 text-[11px] text-muted-foreground">
            A smaller chunk of data, e.g., 1,000 rows.
          </div>

          {/* Iteration Box */}
          <div className="relative rounded-md border border-purple bg-purple-light/40 p-5 pt-8 shadow-sm">
            <div className="absolute left-4 top-3 text-[13px] font-bold text-purple-dark">
              Iteration
            </div>
            <div className="mt-1 pl-1 text-[11px] text-purple-dark/80">
              Processing one batch and taking one step of gradient descent.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function FittingComparison() {
  return (
    <div className="flex flex-col gap-6 lg:flex-row">
      <div className="flex-1 rounded-xl border border-border bg-transparent p-5">
        <div className="mb-4 text-[12px] font-semibold uppercase tracking-wider text-muted-foreground">
          Underfitting
        </div>
        <div className="rounded border border-border bg-card p-4 text-[13px] shadow-sm">
          <div className="font-medium text-foreground">Model is too simple</div>
          <div className="mt-2 text-muted-foreground">
            Fails to learn anything. Terrible accuracy on both training and test data.
          </div>
        </div>
      </div>

      <div className="flex-1 rounded-xl border border-purple bg-purple-light/20 p-5">
        <div className="mb-4 text-[12px] font-semibold uppercase tracking-wider text-purple-dark">
          Optimal Fit
        </div>
        <div className="rounded border border-purple bg-purple-light/50 p-4 text-[13px] shadow-sm">
          <div className="font-medium text-purple-dark">Learns the pattern</div>
          <div className="mt-2 text-purple-dark/80">
            High accuracy on training data, and high accuracy on unseen test data.
          </div>
        </div>
      </div>

      <div className="flex-1 rounded-xl border border-border bg-transparent p-5">
        <div className="mb-4 text-[12px] font-semibold uppercase tracking-wider text-muted-foreground">
          Overfitting
        </div>
        <div className="rounded border border-border bg-card p-4 text-[13px] shadow-sm">
          <div className="font-medium text-foreground">Memorizes the noise</div>
          <div className="mt-2 text-muted-foreground">
            Perfect accuracy on training data, but fails catastrophically on unseen test data.
          </div>
        </div>
      </div>
    </div>
  );
}
