import type {
  Concept,
  ConceptBodyBlock,
  ExplainSpan,
  QuizQuestion,
} from "./concepts";

export const s = (text: string): string => text;
export const x = (text: string, explain: string): ExplainSpan => ({ text, explain });

export type SectionExample = { title: string; body: string };

export type SectionInput = {
  number: string;
  title: string;
  subtitle: string;
  take: string;
  why: string;
  paragraphs: (string | ExplainSpan)[][];
  examples: [SectionExample, SectionExample, SectionExample];
};

export function buildSection(input: SectionInput): ConceptBodyBlock[] {
  return [
    {
      kind: "h",
      number: input.number,
      title: input.title,
      subtitle: input.subtitle,
    },
    { kind: "take", text: input.take },
    { kind: "why", text: input.why },
    ...input.paragraphs.map((parts) => ({ kind: "p" as const, parts })),
    ...input.examples.map((ex) => ({
      kind: "ex" as const,
      title: ex.title,
      body: ex.body,
    })),
  ];
}

export type ChapterInput = {
  slug: string;
  number: number;
  shortTitle: string;
  title: string;
  readingMinutes: number;
  summary: string;
  keyTakeaway: string;
  pmCallout: string;
  sections: ConceptBodyBlock[][];
  quiz: QuizQuestion[];
};

export function buildChapter(input: ChapterInput): Concept {
  return {
    slug: input.slug,
    number: input.number,
    shortTitle: input.shortTitle,
    title: input.title,
    readingMinutes: input.readingMinutes,
    summary: input.summary,
    keyTakeaway: input.keyTakeaway,
    pmCallout: input.pmCallout,
    body: input.sections.flat(),
    examples: [],
    quiz: input.quiz,
  };
}
