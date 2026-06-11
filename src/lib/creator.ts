// Shared curator data — Curator Box, chapter attribution, schema markup.

export const CREATOR = {
  name: "Krishna Kumar",
  /** Page name — not "Author" */
  pageName: "Curator Box",
  /** Professional title — not Author or Founder */
  title: "Curator",
  brand: "FactorBeam",
  /** Shown at the bottom of every chapter */
  chapterCredit: "Curator, FactorBeam",
  location: "Bengaluru, India",
  photo: "/author.png",
  /** Two-sentence hook — time saved for the reader, not curator passion */
  hook: [
    "The AI landscape moves too fast for operators to keep up.",
    "FactorBeam spends each week testing, breaking, and refining how AI shows up in real work — so you can read a chapter instead of rebuilding the research from scratch.",
  ] as const,
  /** Brief authority block on About the Platform — after methodology only */
  curatorBrief: [
    "Krishna Kumar leads curation at FactorBeam — stress-testing AI concepts against how product and business teams actually ship, negotiate, and govern.",
    "Every chapter is researched, structured, and held to a roadmap-review bar before it goes live. AI assists drafting; the curation team owns the judgment.",
  ] as const,
  methodologyCta: {
    label: "See our editorial & testing methodology",
    href: "/about#editorial-methodology",
  },
  aiDisclosure:
    "Chapters are researched, structured, and edited by our curation team. AI assists drafting and editing; everything is reviewed before it goes live.",
  socials: {
    email: "hello@factorbeam.dev",
  },
} as const;
