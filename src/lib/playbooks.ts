// Single source of truth for playbook → chapter sequences.
// Both the playbooks listing page and the chapter reader use this.
// Keeping chapters scoped to their playbook prevents cross-playbook bleed
// in sidebar, prev/next nav, progress %, and chapter numbering.

export type PlaybookId = "pm-foundations" | "pm-llms-prompting";

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
