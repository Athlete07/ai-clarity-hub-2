import {
  Brain,
  Scale,
  ShieldAlert,
  GitBranch,
  Target,
  type LucideIcon,
} from "lucide-react";

export type GameDifficulty = "Easy" | "Medium" | "Hard";

export type Game = {
  id: string;
  title: string;
  description: string;
  minutes: number;
  difficulty: GameDifficulty;
  icon: LucideIcon;
  iconBg: string;
  iconColor: string;
};

/** Flagship simulation — rendered as a featured card above the grid, with its own route. */
export const FEATURED_GAME = {
  id: "agent-overseer",
  title: "Agent Overseer",
  description:
    "Schedule ALPHA and BETA across a live task graph, resolve AI-injected livelocks with mutex locks, and clear 10 escalating waves.",
  minutes: 8,
  difficulty: "Hard" as GameDifficulty,
  route: "/games/agent-overseer" as const,
};

/** Shown via the ⓘ guide next to the title on /games. */
export const AGENT_OVERSEER_GUIDE = {
  what: "A short simulation where you schedule two AI agents across a live task graph — like orchestrating a real agentic pipeline.",
  why: "Practice spotting contention and keeping a swarm moving, without reading a textbook. Built for PMs and founders who want hands-on orchestration instincts.",
  steps: [
    "Dispatch ALPHA (1) or BETA (2) to glowing ready nodes — tasks only run when you assign them.",
    "Keep both agents busy as the dependency graph unfolds.",
    "When a livelock hits (red flash): select the node → Apply Mutex → Serialize Path → Release.",
    "Clear each wave’s required locks, then survive 10 escalating waves.",
  ],
  controls: "Click nodes · 1/2 dispatch · Space mutex/path/release · P pause",
};

export const GAMES: Game[] = [
  {
    id: "vendor-or-real-ai",
    title: "Vendor or Real AI?",
    description: "Spot which pitch is genuine machine learning versus rules dressed up as AI.",
    minutes: 2,
    difficulty: "Easy",
    icon: ShieldAlert,
    iconBg: "#E8F5EE",
    iconColor: "#2D6A4F",
  },
  {
    id: "train-or-run",
    title: "Train or Run?",
    description: "Sort product decisions into training costs versus inference costs.",
    minutes: 2,
    difficulty: "Easy",
    icon: Brain,
    iconBg: "#EEEDFE",
    iconColor: "#534AB7",
  },
  {
    id: "hallucination-radar",
    title: "Hallucination Radar",
    description: "Decide which AI outputs you would ship, flag, or send back for review.",
    minutes: 4,
    difficulty: "Medium",
    icon: Target,
    iconBg: "#FEF3E2",
    iconColor: "#B45309",
  },
  {
    id: "build-buy-api",
    title: "Build, Buy, or API?",
    description: "Pick the right stack call when budget, speed, and control pull in different directions.",
    minutes: 5,
    difficulty: "Hard",
    icon: GitBranch,
    iconBg: "#FEE2E2",
    iconColor: "#B91C1C",
  },
  {
    id: "confidence-check",
    title: "Confidence Check",
    description: "Judge when model confidence matches real risk — and when it is dangerously overconfident.",
    minutes: 3,
    difficulty: "Medium",
    icon: Scale,
    iconBg: "#E0F2FE",
    iconColor: "#0369A1",
  },
];

const STATS_KEY = "factorbeam:games:weekly-plays";

type WeeklyPlays = Record<string, { week: string; count: number }>;

function weekKey(): string {
  const d = new Date();
  const jan1 = new Date(d.getFullYear(), 0, 1);
  const week = Math.ceil(((d.getTime() - jan1.getTime()) / 86400000 + jan1.getDay() + 1) / 7);
  return `${d.getFullYear()}-W${String(week).padStart(2, "0")}`;
}

function readWeeklyPlays(): WeeklyPlays {
  if (typeof window === "undefined") return {};
  try {
    const raw = window.localStorage.getItem(STATS_KEY);
    return raw ? (JSON.parse(raw) as WeeklyPlays) : {};
  } catch {
    return {};
  }
}

function writeWeeklyPlays(data: WeeklyPlays) {
  if (typeof window === "undefined") return;
  try {
    window.localStorage.setItem(STATS_KEY, JSON.stringify(data));
    window.dispatchEvent(new CustomEvent("factorbeam:storage", { detail: { key: STATS_KEY } }));
  } catch {
    // ignore
  }
}

/** Weekly play count for a game (aggregate stored in localStorage). */
export function getWeeklyPlayCount(gameId: string): number {
  const all = readWeeklyPlays();
  const entry = all[gameId];
  if (!entry || entry.week !== weekKey()) return 0;
  return entry.count;
}

/** Record a play for weekly stats (e.g. when user taps Play now). */
export function recordGamePlay(gameId: string): number {
  const all = readWeeklyPlays();
  const week = weekKey();
  const entry = all[gameId];
  const next =
    !entry || entry.week !== week
      ? { week, count: 1 }
      : { week, count: entry.count + 1 };
  all[gameId] = next;
  writeWeeklyPlays(all);
  return next.count;
}

export const DIFFICULTY_STYLES: Record<
  GameDifficulty,
  { badge: string; label: string }
> = {
  Easy: {
    badge: "bg-success-bg text-success",
    label: "Easy",
  },
  Medium: {
    badge: "bg-amber-bg text-amber",
    label: "Medium",
  },
  Hard: {
    badge: "bg-destructive/10 text-destructive",
    label: "Hard",
  },
};
