// Single source of truth for playbook → chapter sequences.
// Both the playbooks listing page and the chapter reader use this.
// Keeping chapters scoped to their playbook prevents cross-playbook bleed
// in sidebar, prev/next nav, progress %, and chapter numbering.

export type PlaybookId =
  | "pm-foundations"
  | "pm-llms-prompting"
  | "pm-dev-toolchain"
  | "pb-4-ai-systems-design"
  | "pb-5-ai-infrastructure-deployment"
  | "pb-6-agents-multi-agent-systems"
  | "pb-7-ai-product-strategy-decisions"
  | "pb-8-multimodal-emerging-ai"
  | "pb-9-seo-content-strategy-ai";

export type PlaybookChapter = {
  slug: string;
  note: string;
};

export type Playbook = {
  id: PlaybookId;
  title: string;
  subtitle: string;
  description: string;
  difficulty: "Beginner" | "Intermediate" | "Advanced";
  readingMinutes: number;
  topics: string[];
  sequence: PlaybookChapter[];
};

export const PLAYBOOKS: Playbook[] = [
  {
    id: "pm-foundations",
    title: "AI Foundations for PMs",
    subtitle: "A technical fast-track focusing on models and evaluation.",
    description:
      "A specialized sequence focusing on the technical mechanics of AI, model training vs inference, validation metrics, and handling bias/hallucination.",
    difficulty: "Intermediate",
    readingMinutes: 20,
    topics: [
      "AI vs ML vs DL",
      "How models learn",
      "Training vs Inference",
      "Data & Labels",
      "Probability & Confidence",
      "Model Evaluation",
      "Bias & Hallucination",
    ],
    sequence: [
      {
        slug: "ai-vs-ml-vs-deep-learning",
        note: "The hierarchy you'll explain 100 times in your career — AI vs ML vs Deep Learning, rule-based vs learned systems, and the 3 questions to ask any vendor.",
      },
      {
        slug: "pm-how-models-learn",
        note: "Understand how models learn from data & labels and how they are evaluated.",
      },
      {
        slug: "pm-training-vs-inference",
        note: "The most expensive mistake PMs make in AI is conflating the cost of building a model with the cost of running one.",
      },
      { slug: "pm-data-and-labels", note: "Why your data strategy is your AI strategy." },
      { slug: "pm-probability-and-confidence", note: "Why AI outputs aren't answers — they're bets." },
      { slug: "pm-model-evaluation", note: "Why \"accuracy\" alone will mislead you every time." },
      {
        slug: "pm-bias-and-hallucination",
        note: "The two failure modes that will define your AI PM career.",
      },
    ],
  },
  {
    id: "pm-llms-prompting",
    title: "LLMs, Models & Prompting",
    subtitle: "Deep dive into language models and advanced prompting.",
    description:
      "Understand the core mechanics of LLMs, from tokenization and attention to practical prompt engineering and deciding between fine-tuning and RAG.",
    difficulty: "Advanced",
    readingMinutes: 45,
    topics: [
      "Tokenization",
      "Transformers & attention",
      "Context windows",
      "Temperature & sampling",
      "Prompt engineering depth (CoT, ToT, structured output)",
      "Fine-tuning vs RAG decision",
      "Embeddings",
      "Model families",
      "Multimodal basics (vision, speech, image gen)",
    ],
    sequence: [
      {
        slug: "pm-llm-tokenization",
        note: "How machines read — and why tokens are the unit of cost, latency, and context for every LLM feature you'll ever ship.",
      },
      {
        slug: "pm-llm-transformers-attention",
        note: "The architecture that changed everything — encoders, decoders, attention, and why these choices shape what your product can do.",
      },
      {
        slug: "pm-llm-context-windows",
        note: "The model's working memory — why every input, output, and history token counts against the same budget, and how to design features inside that constraint.",
      },
      {
        slug: "pm-llm-temperature-sampling",
        note: "The dials that control how creative, random, or predictable your model is — temperature, top-p, top-k, decoding strategies, and how to match them to your use case.",
      },
      {
        slug: "pm-llm-prompt-engineering-foundations",
        note: "The craft of talking to models so they actually do what you need — instructions, system vs user prompts, zero/few-shot, role prompting, output formats, and negative prompting.",
      },
      {
        slug: "pm-llm-prompt-engineering-advanced",
        note: "The techniques that separate good AI products from great ones — chain-of-thought, tree-of-thought, self-consistency, ReAct, structured output, constitutional prompting, chaining, and when advanced prompting replaces fine-tuning.",
      },
      {
        slug: "pm-llm-embeddings",
        note: "How models represent meaning as numbers — what an embedding is, why vector arithmetic captures semantics, similarity search, dimensions and cost, the practical text use cases, multimodal embeddings, and the PM map of where embeddings power product features.",
      },
    ],
  },
  {
    id: "pm-dev-toolchain",
    title: "Developer Toolchain for PMs",
    subtitle: "Understanding the tools engineers use to build AI.",
    description: "A comprehensive guide to the modern AI developer stack, from APIs and orchestrators to vector databases and deployment infrastructure.",
    difficulty: "Intermediate",
    readingMinutes: 30,
    topics: [
      "Git & GitHub",
      "APIs & REST",
      "Python basics",
      "Notebooks & Colab",
      "Cloud (AWS/GCP/Azure)",
      "Containers & Docker",
      "CI/CD concepts",
      "Cost & latency tradeoffs"
    ],
    sequence: [
      {
        slug: "pm-dev-git-github",
        note: "Version control demystified — the system that makes software collaboration possible and gives you direct visibility into engineering velocity.",
      },
      {
        slug: "pm-dev-apis-rest",
        note: "The plumbing of modern software — how products talk to each other and why understanding webhooks vs polling is critical for your roadmap.",
      },
      {
        slug: "pm-dev-python-basics",
        note: "The language of data science, AI, and automation — what PMs need to read (not write) it.",
      },
      {
        slug: "pm-dev-notebooks-colab",
        note: "The PM's window into how data scientists actually work, and why a working notebook is not a shippable product.",
      },
      {
        slug: "pm-dev-cloud",
        note: "Where your product actually runs, and why cloud architecture decisions directly impact your margins and compliance.",
      },
      {
        slug: "pm-dev-containers-docker",
        note: "The packaging system that made 'it works on my machine' a solved problem, and what it signals about your team's maturity.",
      },
      {
        slug: "pm-dev-ci-cd-concepts",
        note: "How software goes from a developer's laptop to your users safely, and why feature flags are a PM's best friend.",
      },
      {
        slug: "pm-dev-cost-latency",
        note: "The constraint every technical product decision lives inside, and why you must calculate unit economics before writing a Jira ticket.",
      }
    ],
  },
  {
    id: "pb-4-ai-systems-design",
    title: "AI Systems Design",
    subtitle: "Expanded",
    description:
      "A deeper systems-level view of how modern AI products are built, tuned, evaluated, and monitored in production.",
    difficulty: "Advanced",
    readingMinutes: 247,
    topics: [
      "RAG architecture",
      "Vector databases",
      "Chunking & retrieval",
      "Reranking",
      "LangChain",
      "Fine-tuning (LoRA, QLoRA, DPO, RLHF)",
      "Evals & benchmarks",
      "Guardrails & safety layers",
      "Observability & tracing",
    ],
    sequence: [
      {
        slug: "pb4-rag-architecture",
        note: "The most important pattern in applied AI — giving your model knowledge it wasn't trained on.",
      },
      {
        slug: "pb4-vector-databases",
        note: "The specialised index that makes million-scale semantic search possible — and the vendor choice that locks in your RAG economics.",
      },
      {
        slug: "pb4-chunking-retrieval",
        note: "How you split knowledge determines what can be found — chunking and retrieval strategy are the highest-leverage quality knobs in any RAG system.",
      },
      {
        slug: "pb4-reranking",
        note: "First-pass retrieval gets you in the ballpark; reranking decides what actually reaches the model.",
      },
      {
        slug: "pb4-langchain-orchestration",
        note: "LangChain is the duct tape of LLM applications — chains, agents, tools, memory, and observability hooks in one ecosystem.",
      },
      {
        slug: "pb4-fine-tuning-deep-dive",
        note: "Full fine-tuning, LoRA, QLoRA, instruction tuning, DPO, and RLHF — the adaptation stack PMs navigate when prompting and RAG stop being enough.",
      },
      {
        slug: "pb4-evals-benchmarks",
        note: "How to measure whether your AI feature actually works — and why defining what 'better' means is a product decision, not an engineering one.",
      },
      {
        slug: "pb4-guardrails-safety",
        note: "Input and output guardrails, moderation APIs, and regulatory context — how PMs ship capable AI without shipping liability.",
      },
      {
        slug: "pb4-observability-tracing",
        note: "Why you can't iterate on an AI feature you can't see — tracing, cost monitoring, and production feedback loops.",
      },
    ],
  },
  {
    id: "pb-5-ai-infrastructure-deployment",
    title: "AI Infrastructure & Deployment",
    subtitle: "New",
    description:
      "Serving, deploying, and operating models reliably — from inference architecture choices to MLOps rollout patterns.",
    difficulty: "Advanced",
    readingMinutes: 35,
    topics: [
      "Model serving architectures",
      "GPU vs CPU inference",
      "Batch vs streaming",
      "Quantization & distillation",
      "Edge vs cloud",
      "MLOps pipelines",
      "Model versioning",
      "Canary & shadow deployments",
      "Latency/cost/quality triangle",
    ],
    sequence: [],
  },
  {
    id: "pb-6-agents-multi-agent-systems",
    title: "Agents & Multi-agent Systems",
    subtitle: "New — was buried in PB5",
    description:
      "Agent design patterns, tool use, memory, and reliability — plus how to coordinate multiple agents safely.",
    difficulty: "Advanced",
    readingMinutes: 35,
    topics: [
      "Agent fundamentals & architectures",
      "Tool use & function calling",
      "ReAct & planning patterns",
      "Memory types (in-context, episodic, semantic)",
      "LangGraph deep dive",
      "Multi-agent coordination & supervision",
      "MCP protocol",
      "Agent reliability & failure modes",
      "Human-in-the-loop design",
    ],
    sequence: [],
  },
  {
    id: "pb-7-ai-product-strategy-decisions",
    title: "AI Product Strategy & Decisions",
    subtitle: "Expanded",
    description:
      "How to make (and defend) product decisions in AI: metrics, discovery, data flywheels, and responsible AI constraints.",
    difficulty: "Intermediate",
    readingMinutes: 30,
    topics: [
      "Build vs buy vs fine-tune",
      "AI metrics (task completion, drift, online evals, RLHF loops)",
      "AI discovery methods",
      "Data strategy & flywheels",
      "AI safety, ethics & regulation (EU AI Act, red-teaming, constitutional AI)",
      "AI PRDs & specs",
      "Roadmap for AI features",
      "Responsible AI frameworks",
    ],
    sequence: [],
  },
  {
    id: "pb-8-multimodal-emerging-ai",
    title: "Multimodal & Emerging AI",
    subtitle: "New",
    description:
      "The practical product and technical landscape of multimodal systems — and what’s likely coming next.",
    difficulty: "Intermediate",
    readingMinutes: 30,
    topics: [
      "Vision transformers (ViT)",
      "Diffusion models & image generation",
      "Speech-to-text & TTS",
      "Video AI",
      "Voice interfaces",
      "Multimodal product design patterns",
      "AI video generation",
      "On-device AI",
      "What's coming: world models, reasoning models",
    ],
    sequence: [],
  },
  {
    id: "pb-9-seo-content-strategy-ai",
    title: "SEO & Content Strategy for AI",
    subtitle: "Unchanged",
    description:
      "How search works now (and where it’s heading) — topic clusters, entities, schema, and optimization for AI search surfaces.",
    difficulty: "Beginner",
    readingMinutes: 25,
    topics: [
      "Semantic SEO",
      "Topic clusters & pillar pages",
      "AI Overviews optimization",
      "Structured data & schema",
      "Entity-based SEO",
      "Content architecture",
      "Search intent mapping",
      "AIO (AI search optimization)",
    ],
    sequence: [],
  },
];

export const playbookForSlug = (slug: string): Playbook | undefined =>
  PLAYBOOKS.find((p) => p.sequence.some((c) => c.slug === slug));

export const playbookById = (id: PlaybookId): Playbook | undefined =>
  PLAYBOOKS.find((p) => p.id === id);

export const nextSlugInPlaybook = (slug: string): string | undefined => {
  const pb = playbookForSlug(slug);
  if (!pb) return undefined;
  const i = pb.sequence.findIndex((c) => c.slug === slug);
  return i >= 0 && i < pb.sequence.length - 1 ? pb.sequence[i + 1].slug : undefined;
};

export const prevSlugInPlaybook = (slug: string): string | undefined => {
  const pb = playbookForSlug(slug);
  if (!pb) return undefined;
  const i = pb.sequence.findIndex((c) => c.slug === slug);
  return i > 0 ? pb.sequence[i - 1].slug : undefined;
};
