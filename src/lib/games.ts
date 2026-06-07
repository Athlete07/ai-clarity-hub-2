import { useCallback, useEffect, useState } from "react";

export type Difficulty = "Easy" | "Medium" | "Hard";

export type GameMeta = {
  slug: string;
  title: string;
  description: string;
  time: string;
  difficulty: Difficulty;
  iconKey: "bolt" | "shield" | "eye" | "sword" | "language";
  tone: "purple" | "amber" | "red" | "teal" | "blue";
};

export const GAMES: GameMeta[] = [
  {
    slug: "ai-or-not",
    title: "AI or Not?",
    description:
      "60 seconds. Real products. Is it actually AI — or just a clever if/then rule?",
    time: "~2 min",
    difficulty: "Easy",
    iconKey: "bolt",
    tone: "purple",
  },
  {
    slug: "spot-the-fake",
    title: "Spot the Fake AI",
    description:
      "Five vendor pitch claims. Identify which ones are genuine AI and which are marketing fiction.",
    time: "~3 min",
    difficulty: "Medium",
    iconKey: "shield",
    tone: "amber",
  },
  {
    slug: "hallucination-detector",
    title: "The Hallucination Detector",
    description:
      "An AI wrote this paragraph. One fact is completely fabricated. Can you find it?",
    time: "~3 min",
    difficulty: "Medium",
    iconKey: "eye",
    tone: "red",
  },
  {
    slug: "prompt-battle",
    title: "Prompt Battle",
    description:
      "Two prompts, same problem. Which one gets a better AI output? Judge like an expert.",
    time: "~4 min",
    difficulty: "Hard",
    iconKey: "sword",
    tone: "teal",
  },
  {
    slug: "jargon-translator",
    title: "AI Jargon Translator",
    description:
      "Match the jargon-heavy sentence to its plain-English meaning. Faster than you think.",
    time: "~2 min",
    difficulty: "Easy",
    iconKey: "language",
    tone: "blue",
  },
];

export function getGame(slug: string) {
  return GAMES.find((g) => g.slug === slug);
}

const SCORES_KEY = "factorbeam_game_scores";
const AGG_KEY = "factorbeam_game_aggregate";

type ScoreRecord = { highScore: number; lastPlayed: number; timesPlayed: number };
type ScoresMap = Record<string, ScoreRecord>;
type AggMap = Record<string, number>;

function readJson<T>(key: string, fallback: T): T {
  if (typeof window === "undefined") return fallback;
  try {
    const raw = window.localStorage.getItem(key);
    return raw ? (JSON.parse(raw) as T) : fallback;
  } catch {
    return fallback;
  }
}
function writeJson<T>(key: string, value: T) {
  if (typeof window === "undefined") return;
  try {
    window.localStorage.setItem(key, JSON.stringify(value));
    window.dispatchEvent(new CustomEvent("factorbeam:games"));
  } catch {}
}

export function useHighScore(slug: string): number | null {
  const [score, setScore] = useState<number | null>(null);
  useEffect(() => {
    const read = () => {
      const all = readJson<ScoresMap>(SCORES_KEY, {});
      setScore(all[slug]?.highScore ?? null);
    };
    read();
    window.addEventListener("factorbeam:games", read);
    return () => window.removeEventListener("factorbeam:games", read);
  }, [slug]);
  return score;
}

export function recordScore(slug: string, score: number) {
  const all = readJson<ScoresMap>(SCORES_KEY, {});
  const prev = all[slug];
  all[slug] = {
    highScore: Math.max(prev?.highScore ?? 0, score),
    lastPlayed: Date.now(),
    timesPlayed: (prev?.timesPlayed ?? 0) + 1,
  };
  writeJson(SCORES_KEY, all);
}

export function incrementPlayCount(slug: string) {
  const agg = readJson<AggMap>(AGG_KEY, {});
  agg[slug] = (agg[slug] ?? 0) + 1;
  writeJson(AGG_KEY, agg);
}

export function usePlayCounts(): AggMap {
  const [counts, setCounts] = useState<AggMap>({});
  useEffect(() => {
    const read = () => setCounts(readJson<AggMap>(AGG_KEY, {}));
    read();
    window.addEventListener("factorbeam:games", read);
    return () => window.removeEventListener("factorbeam:games", read);
  }, []);
  return counts;
}

export function useResetSignal() {
  const [n, setN] = useState(0);
  const bump = useCallback(() => setN((x) => x + 1), []);
  return [n, bump] as const;
}

export function performanceLabel(pct: number) {
  if (pct <= 40) return "Keep reading the playbooks";
  if (pct <= 70) return "Solid instincts";
  return "You think like an AI PM";
}
