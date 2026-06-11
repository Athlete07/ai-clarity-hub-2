/** Data-driven diagram definitions for Executive KB chapters. */

export type FlowStep = { title: string; desc: string };

export type FlowDiagramDef = {
  type: "flow";
  steps: FlowStep[];
  highlightLast?: boolean;
};

export type NestedLayer = { title: string; desc: string; items?: string };

export type NestedDiagramDef = {
  type: "nested";
  layers: NestedLayer[];
};

export type ComparisonCard = {
  label: string;
  title: string;
  desc: string;
  accent?: boolean;
};

export type ComparisonRow = {
  label: string;
  steps: string[];
};

export type ComparisonDiagramDef = {
  type: "comparison";
  cards?: ComparisonCard[];
  rows?: ComparisonRow[];
};

export type TreeBranch = {
  answer: string;
  label: string;
  action?: string;
  children?: TreeBranch[];
  conclusion?: { title: string; action: string };
};

export type TreeDiagramDef = {
  type: "tree";
  root: string;
  branches: TreeBranch[];
};

export type DiagramDef =
  | FlowDiagramDef
  | NestedDiagramDef
  | ComparisonDiagramDef
  | TreeDiagramDef;

export const DIAGRAM_REGISTRY: Record<string, DiagramDef> = {
  "ch1-feedback-loop": {
    type: "flow",
    steps: [
      { title: "User action", desc: "Product usage generates signal" },
      { title: "Capture signal", desc: "Clicks, edits, outcomes logged" },
      { title: "Label & train", desc: "Signal becomes training data" },
      { title: "Model improves", desc: "Quality delta ships to prod" },
      { title: "Better product", desc: "Retention & usage compound" },
    ],
  },
  "ch2-data-flywheel": {
    type: "flow",
    steps: [
      { title: "More users", desc: "Distribution & adoption" },
      { title: "More data", desc: "Interactions become signal" },
      { title: "Better model", desc: "Retrain on proprietary data" },
      { title: "Better product", desc: "Accuracy & UX improve" },
      { title: "More users", desc: "Flywheel accelerates" },
    ],
  },
  "ch3-ai-stack": {
    type: "flow",
    steps: [
      { title: "Foundation model", desc: "API or self-hosted weights" },
      { title: "Retrieval / vectors", desc: "Ground in your knowledge" },
      { title: "Orchestration", desc: "Prompts, tools, agents" },
      { title: "Serving", desc: "Latency, scale, uptime" },
      { title: "Observability", desc: "Quality, cost, drift traces" },
    ],
  },
  "ch4-feedback-cycle": {
    type: "flow",
    steps: [
      { title: "Predict", desc: "Model serves inference" },
      { title: "User reacts", desc: "Accept, edit, reject" },
      { title: "Label", desc: "Reaction becomes ground truth" },
      { title: "Improve", desc: "Retrain or fine-tune" },
    ],
  },
  "founder-training-inference-split": {
    type: "comparison",
    cards: [
      {
        label: "Training (CapEx)",
        title: "One-time manufacturing",
        desc: "GPU clusters, weeks of compute, frozen weights. No user revenue during the run.",
      },
      {
        label: "Inference (OpEx)",
        title: "Per-query meter",
        desc: "Forward pass on every click. Scales linearly with usage — your AI COGS line.",
        accent: true,
      },
    ],
  },
  "founder-unit-economics-trap": {
    type: "flow",
    steps: [
      { title: "Feature ships", desc: "AI on every user action" },
      { title: "Usage grows", desc: "Inference scales linearly" },
      { title: "Flat pricing", desc: "Revenue per user fixed" },
      { title: "Margin compresses", desc: "Power users burn COGS" },
      { title: "Bridge round", desc: "Unit economics crisis" },
    ],
  },
  "founder-api-vs-own": {
    type: "comparison",
    rows: [
      {
        label: "API dependency",
        steps: ["Pay per token", "Ship in days", "Vendor markup forever", "Best at seed volume"],
      },
      {
        label: "Model ownership",
        steps: ["Rent GPUs 24/7", "Hire ML ops", "Wholesale margins at scale", "Best at high volume"],
      },
    ],
  },
  "founder-inference-optimisation": {
    type: "flow",
    steps: [
      { title: "Route queries", desc: "Small model for easy tasks" },
      { title: "Compress context", desc: "Rerank RAG chunks" },
      { title: "Cache repeats", desc: "Avoid redundant calls" },
      { title: "Batch async", desc: "Off-peak for non-real-time" },
      { title: "Distil / fine-tune", desc: "Cheapest model that clears bar" },
    ],
  },
  "founder-data-moat-layers": {
    type: "nested",
    layers: [
      {
        title: "Distribution",
        desc: "Users generate interactions",
        items: "Workflow embedding, switching costs",
      },
      {
        title: "Proprietary data",
        desc: "Interactions become labels",
        items: "Transaction logs, domain documents, outcomes",
      },
      {
        title: "Model advantage",
        desc: "Retrain on data competitors lack",
        items: "Fine-tunes, eval gaps, accuracy delta",
      },
    ],
  },
  "founder-eval-framework": {
    type: "flow",
    steps: [
      { title: "Define task", desc: "What 'good' means for users" },
      { title: "Golden set", desc: "Representative test cases" },
      { title: "Baseline metric", desc: "Accuracy, latency, cost" },
      { title: "Ship gate", desc: "Minimum bar to release" },
      { title: "Monitor drift", desc: "Production regression alerts" },
    ],
  },
  "founder-ai-native-spectrum": {
    type: "nested",
    layers: [
      {
        title: "AI-washed",
        desc: "Marketing claims, no architecture",
        items: "GPT wrapper on settings page",
      },
      {
        title: "AI-powered",
        desc: "AI improves product that survives without it",
        items: "Notion AI, Copilot add-ons",
      },
      {
        title: "AI-native",
        desc: "Remove model → company does not exist",
        items: "Harvey, Midjourney, Scale AI",
      },
    ],
  },
  "founder-vc-diligence-stack": {
    type: "flow",
    steps: [
      { title: "Team", desc: "Can they ship AI?" },
      { title: "Data moat", desc: "Defensible training signal?" },
      { title: "Unit economics", desc: "Inference margin at scale?" },
      { title: "Market timing", desc: "Why now, why you?" },
      { title: "Risk surface", desc: "Regulation, dependency" },
    ],
  },
  "founder-build-buy-partner": {
    type: "tree",
    root: "Do you have proprietary data that creates model advantage?",
    branches: [
      {
        answer: "NO",
        label: "Buy / API",
        action: "Rent frontier models; compete on workflow & distribution",
      },
      {
        answer: "YES",
        label: "Is the task narrow and high-volume?",
        children: [
          {
            answer: "YES",
            label: "Build / fine-tune",
            conclusion: {
              title: "Custom model on your data",
              action: "Budget ML engineering + retraining cadence",
            },
          },
          {
            answer: "NO",
            label: "Partner + RAG",
            conclusion: {
              title: "API + retrieval + eval gates",
              action: "Ship fast; own the data loop",
            },
          },
        ],
      },
    ],
  },
  "founder-org-design-stages": {
    type: "flow",
    steps: [
      { title: "Seed", desc: "Founder + 1 AI generalist" },
      { title: "Series A", desc: "AI Eng + data pipeline" },
      { title: "Series B", desc: "ML platform + AI PM" },
      { title: "Scale", desc: "MLOps, evals, governance" },
    ],
  },
  "founder-ai-roles-map": {
    type: "comparison",
    cards: [
      {
        label: "ML Engineer",
        title: "Production ML stack",
        desc: "Training pipelines, feature stores, model serving",
      },
      {
        label: "AI Engineer",
        title: "Application AI stack",
        desc: "LLMs, RAG, agents, product inference",
        accent: true,
      },
      {
        label: "Data Scientist",
        title: "Analysis & experiments",
        desc: "Metrics, A/B tests, what to build next",
      },
    ],
  },
  "founder-hiring-sequence": {
    type: "flow",
    steps: [
      { title: "Define bet", desc: "API product vs custom model" },
      { title: "First hire", desc: "AI Eng or ML Eng" },
      { title: "Prove loop", desc: "Ship + measure quality" },
      { title: "Specialise", desc: "MLOps, DS, AI PM" },
    ],
  },
  "founder-risk-governance": {
    type: "flow",
    steps: [
      { title: "Inventory", desc: "Map AI use cases" },
      { title: "Classify risk", desc: "EU AI Act tiers" },
      { title: "Controls", desc: "Human review, logging" },
      { title: "Monitor", desc: "Incidents & drift" },
      { title: "Report", desc: "Board & regulator ready" },
    ],
  },
  "founder-funding-valuation": {
    type: "comparison",
    cards: [
      {
        label: "AI premium",
        title: "Compounding loop",
        desc: "Data moat + improving margins + category creation",
        accent: true,
      },
      {
        label: "AI discount",
        title: "Wrapper risk",
        desc: "API dependency + negative unit economics + no defensibility",
      },
    ],
  },
  "founder-scaling-inflection": {
    type: "flow",
    steps: [
      { title: "1K users", desc: "API defaults work" },
      { title: "10K users", desc: "Inference COGS visible" },
      { title: "100K users", desc: "Routing & caching required" },
      { title: "1M users", desc: "Self-host / distil economics" },
    ],
  },
  "bl-vendor-evaluation": {
    type: "flow",
    steps: [
      { title: "Requirements", desc: "Function + risk tier" },
      { title: "Shortlist", desc: "3–5 vendors max" },
      { title: "Golden set eval", desc: "Your data, your metrics" },
      { title: "TCO model", desc: "Inference at 10× volume" },
      { title: "Contract", desc: "SLA, data rights, exit" },
    ],
  },
  "bl-roi-business-case": {
    type: "flow",
    steps: [
      { title: "Baseline", desc: "Measure before AI" },
      { title: "Hypothesis", desc: "Hard + soft ROI drivers" },
      { title: "Pilot", desc: "Controlled scope + gates" },
      { title: "Scale", desc: "Rollout with attribution" },
      { title: "Track", desc: "Post-deploy ROI dashboard" },
    ],
  },
  "bl-change-management": {
    type: "flow",
    steps: [
      { title: "Sponsor", desc: "Executive ownership" },
      { title: "Communicate", desc: "Honest capability framing" },
      { title: "Train", desc: "Literacy + hands-on" },
      { title: "Champions", desc: "Peer advocates per team" },
      { title: "Measure adoption", desc: "Usage + outcome metrics" },
    ],
  },
  "bl-governance-mvg": {
    type: "nested",
    layers: [
      {
        title: "Inventory",
        desc: "What AI is in use?",
        items: "Shadow AI audit, vendor register",
      },
      {
        title: "Risk tier",
        desc: "High / limited / minimal",
        items: "EU AI Act mapping per function",
      },
      {
        title: "Minimum controls",
        desc: "Logging, review, incident path",
        items: "Human-in-loop for high-risk decisions",
      },
    ],
  },
  "bl-procurement-rfp": {
    type: "flow",
    steps: [
      { title: "Scope", desc: "Use case + success criteria" },
      { title: "RFP", desc: "Technical + commercial reqs" },
      { title: "Demos", desc: "Same golden set for all" },
      { title: "Reference calls", desc: "Production, not pilot" },
      { title: "Negotiate", desc: "Data, SLA, termination" },
    ],
  },
  "bl-ai-transformation": {
    type: "flow",
    steps: [
      { title: "Assess", desc: "Skills gap + use cases" },
      { title: "Prioritise", desc: "ROI × feasibility matrix" },
      { title: "Pilot", desc: "One function, clear metrics" },
      { title: "Scale", desc: "Playbooks + governance" },
      { title: "Embed", desc: "AI in operating rhythm" },
    ],
  },
  "bl-function-ai-map": {
    type: "comparison",
    cards: [
      { label: "Finance", title: "Forecasting & anomaly", desc: "High ROI, clear baselines" },
      { label: "HR", title: "Screening & analytics", desc: "High regulatory scrutiny", accent: true },
      { label: "Ops", title: "Automation & routing", desc: "Volume-driven inference cost" },
    ],
  },
  "sampling-funnel": {
    type: "flow",
    steps: [
      { title: "Logits", desc: "Raw model scores" },
      { title: "Temperature", desc: "Rescale distribution" },
      { title: "Top-k / top-p", desc: "Clip candidate set" },
      { title: "Repetition penalty", desc: "Downweight recent tokens" },
      { title: "Sample", desc: "Pick next token" },
    ],
  },
  "prompt-anatomy": {
    type: "flow",
    steps: [
      { title: "System", desc: "Persona, rules, scope" },
      { title: "Few-shot", desc: "Pattern examples" },
      { title: "Retrieved context", desc: "RAG / tool outputs" },
      { title: "User message", desc: "Runtime input" },
      { title: "Format spec", desc: "JSON / markdown template" },
    ],
  },
  "prompting-vs-finetuning-ladder": {
    type: "flow",
    steps: [
      { title: "Better prompt", desc: "Instruction + examples" },
      { title: "RAG", desc: "External knowledge" },
      { title: "Stronger model", desc: "Capability upgrade" },
      { title: "Fine-tune", desc: "When eval proves ceiling" },
    ],
  },
  "embeddings-use-case-map": {
    type: "comparison",
    cards: [
      { label: "Embeddings", title: "Find & classify", desc: "Search, dedup, routing" },
      { label: "Generation", title: "Compose & reason", desc: "Drafts, dialogue, agents", accent: true },
      { label: "Both", title: "RAG products", desc: "Retrieve then generate" },
    ],
  },
};
