/**
 * Agent Overseer — the single flagship game on FactorBeam.
 * (Earlier prototype games were retired; only the featured simulation ships.)
 */

export const FEATURED_GAME = {
  id: "agent-overseer",
  title: "Agent Overseer",
  tagline: "Orchestrate two AI agents through a live task graph.",
  description:
    "Schedule ALPHA and BETA across a live task graph, resolve AI-injected livelocks with mutex locks, and clear 10 escalating waves.",
  minutes: 8,
  difficulty: "Hard" as const,
  waves: 10,
  agents: 2,
  route: "/games/agent-overseer" as const,
};

export const AGENT_OVERSEER_GUIDE = {
  what: "A short simulation where you schedule two AI agents across a live task graph — like orchestrating a real agentic pipeline.",
  why: "Practice spotting contention and keeping a swarm moving, without reading a textbook. Built for PMs and founders who want hands-on orchestration instincts.",
  steps: [
    "Dispatch ALPHA (1) or BETA (2) to glowing ready nodes — tasks only run when you assign them.",
    "Keep both agents busy as the dependency graph unfolds.",
    "When a livelock hits (red flash): select the node → Apply Mutex → Serialize Path → Release.",
    "Clear each wave's required locks, then survive 10 escalating waves.",
  ],
  controls: "Click nodes · 1/2 dispatch · Space mutex/path/release · P pause",
};

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

export function getWeeklyPlayCount(gameId: string): number {
  const all = readWeeklyPlays();
  const entry = all[gameId];
  if (!entry || entry.week !== weekKey()) return 0;
  return entry.count;
}

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
