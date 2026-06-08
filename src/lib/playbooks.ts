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
      "How AI models go from research to reality — the engineering layer that determines whether your product scales, costs less, and stays alive in production.",
    difficulty: "Advanced",
    readingMinutes: 244,
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
    sequence: [
      {
        slug: "pb5-model-serving-architectures",
        note: "The systems between your model and your users — design choices that determine latency, cost, and reliability.",
      },
      {
        slug: "pb5-gpu-vs-cpu-inference",
        note: "The hardware decision that determines your cost floor and latency ceiling — parallel GPUs vs general-purpose CPUs.",
      },
      {
        slug: "pb5-batch-vs-streaming",
        note: "Two fundamentally different ways to run models — and how the choice shapes your product's user experience.",
      },
      {
        slug: "pb5-quantisation-distillation",
        note: "The techniques that make large models smaller, faster, and cheaper — without much loss of quality.",
      },
      {
        slug: "pb5-edge-vs-cloud",
        note: "Deciding where the model runs — privacy, latency, update cadence, and the device fragmentation problem.",
      },
      {
        slug: "pb5-mlops-pipelines",
        note: "The operational discipline that turns one-off model experiments into repeatable, reliable production systems.",
      },
      {
        slug: "pb5-model-versioning",
        note: "Managing the lifecycle of models in production — so you always know what's running, why, and how to change it.",
      },
      {
        slug: "pb5-canary-shadow-deployments",
        note: "Release techniques that let you ship new models safely — without betting your entire user base on an untested change.",
      },
      {
        slug: "pb5-latency-cost-quality-triangle",
        note: "The inescapable constraint at the centre of every AI infrastructure decision — and how to make it work for your product.",
      },
    ],
  },
  {
    id: "pb-6-agents-multi-agent-systems",
    title: "Agents & Multi-agent Systems",
    subtitle: "New — was buried in PB5",
    description:
      "From single-turn responses to autonomous reasoning — the architecture shift that defines the next generation of AI products.",
    difficulty: "Advanced",
    readingMinutes: 249,
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
    sequence: [
      {
        slug: "pb6-agent-fundamentals",
        note: "From single-turn responses to autonomous reasoning — what makes a system an agent and the architectures that determine trust.",
      },
      {
        slug: "pb6-tool-use-function-calling",
        note: "How agents reach beyond language into the real world — the mechanism that makes agents actually useful.",
      },
      {
        slug: "pb6-react-planning-patterns",
        note: "The reasoning strategies that let agents tackle complex, multi-step tasks without losing the plot.",
      },
      {
        slug: "pb6-memory-types",
        note: "How agents remember — the four memory systems that determine how much context an agent can carry across time.",
      },
      {
        slug: "pb6-langgraph-deep-dive",
        note: "The framework that brought graph-based control flow to agent systems — and why it became the production standard.",
      },
      {
        slug: "pb6-multi-agent-coordination",
        note: "When one agent isn't enough — how systems of agents collaborate, divide work, and stay under control.",
      },
      {
        slug: "pb6-mcp-protocol",
        note: "The emerging standard that lets agents connect to tools and data sources without custom integration for each one.",
      },
      {
        slug: "pb6-agent-reliability",
        note: "Why agents fail in production — and the design patterns that turn brittle prototypes into trustworthy systems.",
      },
      {
        slug: "pb6-human-in-the-loop",
        note: "Keeping humans in control of autonomous systems — the design patterns that make agents safe to deploy in the real world.",
      },
    ],
  },
  {
    id: "pb-7-ai-product-strategy-decisions",
    title: "AI Product Strategy & Decisions",
    subtitle: "Expanded",
    description:
      "The strategic layer above the technical — where PMs make the calls that determine whether AI features create durable value or expensive debt.",
    difficulty: "Intermediate",
    readingMinutes: 225,
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
    sequence: [
      {
        slug: "pb7-build-buy-fine-tune",
        note: "The most consequential architectural decision a PM makes — and the framework for making it well.",
      },
      {
        slug: "pb7-ai-metrics-depth",
        note: "Measuring AI products is different from measuring conventional software — the metrics layer that separates mature AI teams from ones flying blind.",
      },
      {
        slug: "pb7-ai-discovery-methods",
        note: "Finding the right AI problems to solve — the research and discovery practices that prevent building impressive solutions to unimportant problems.",
      },
      {
        slug: "pb7-data-strategy-flywheels",
        note: "Your data is your moat — how proprietary signal, feedback loops, and governance determine whether your AI product compounds in value.",
      },
      {
        slug: "pb7-ai-safety-ethics-regulation",
        note: "The layer every PM now owns — understanding the risks, the rules, and the practices that make AI products trustworthy.",
      },
      {
        slug: "pb7-ai-prds-specs",
        note: "Writing product requirements for features that are probabilistic, non-deterministic, and dependent on data.",
      },
      {
        slug: "pb7-roadmap-ai-features",
        note: "Planning under uncertainty — the roadmapping practices that work when timelines are unpredictable and quality is probabilistic.",
      },
      {
        slug: "pb7-responsible-ai-frameworks",
        note: "The operational structures that make ethical AI a practice, not a principle — what leading teams actually do.",
      },
    ],
  },
  {
    id: "pb-8-multimodal-emerging-ai",
    title: "Multimodal & Emerging AI",
    subtitle: "New",
    description:
      "Beyond text — the models that see, hear, speak, and generate across every medium — and what they mean for the products you'll build next.",
    difficulty: "Intermediate",
    readingMinutes: 256,
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
    sequence: [
      {
        slug: "pb8-vision-transformers",
        note: "How transformers moved from language to images — and why the same architecture that reads text now understands what it sees.",
      },
      {
        slug: "pb8-diffusion-image-generation",
        note: "How modern image generation actually works — the probabilistic process behind Midjourney, DALL-E, and Stable Diffusion.",
      },
      {
        slug: "pb8-speech-to-text-tts",
        note: "The voice layer of AI products — how machines listen and speak, and what production-grade audio AI actually requires.",
      },
      {
        slug: "pb8-video-ai",
        note: "The hardest modality — what models can do with moving images today and where the capability frontier actually sits.",
      },
      {
        slug: "pb8-voice-interfaces",
        note: "Designing AI products people talk to — the interaction model, UX patterns, and reliability constraints that make voice hard to ship well.",
      },
      {
        slug: "pb8-multimodal-product-design",
        note: "The UX and architecture patterns that work when your product takes in or produces more than one modality at once.",
      },
      {
        slug: "pb8-ai-video-generation",
        note: "The frontier capability reshaping content creation — what it can do now, what it can't, and how to build products around it responsibly.",
      },
      {
        slug: "pb8-on-device-ai",
        note: "Bringing models to the hardware — the technical and product shift that moves AI off the cloud and onto the device in your user's pocket.",
      },
      {
        slug: "pb8-emerging-ai-frontier",
        note: "The frontier that will define the next generation of AI products — world models, reasoning models, and how to build strategy around deep uncertainty.",
      },
    ],
  },
  {
    id: "pb-9-seo-content-strategy-ai",
    title: "SEO & Content Strategy for AI",
    subtitle: "Unchanged",
    description:
      "How search is being reinvented by AI — and how PMs build content strategies that win in a world where the answer appears before the link.",
    difficulty: "Beginner",
    readingMinutes: 225,
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
    sequence: [
      {
        slug: "pb9-semantic-seo",
        note: "Beyond keywords — how search engines moved from matching strings to understanding meaning, and what that demands from your content.",
      },
      {
        slug: "pb9-topic-clusters-pillar-pages",
        note: "The content architecture that signals expertise to search engines — and organises knowledge in a way users actually navigate.",
      },
      {
        slug: "pb9-ai-overviews-optimisation",
        note: "Ranking in the answer, not just below it — how to structure content that gets selected as source material for AI-generated search summaries.",
      },
      {
        slug: "pb9-structured-data-schema",
        note: "Speaking the language search engines prefer — the markup that makes your content machine-readable and eligible for rich results.",
      },
      {
        slug: "pb9-entity-based-seo",
        note: "How search engines understand the world through named things — and how to make your brand, products, and content part of that knowledge graph.",
      },
      {
        slug: "pb9-content-architecture",
        note: "The structural decisions that determine whether your content compounds in value or collapses under its own weight.",
      },
      {
        slug: "pb9-search-intent-mapping",
        note: "Matching content to what people actually want when they search — the analytical practice that prevents ranking for the wrong thing.",
      },
      {
        slug: "pb9-aio-ai-search-optimisation",
        note: "The emerging discipline of optimising for AI-powered search — how to stay visible when the interface between users and content is an AI that summarises, answers, and cites.",
      },
    ],
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
