import { createFileRoute, Link } from "@tanstack/react-router";
import { useCallback, useEffect, useState } from "react";
import { Nav, Footer } from "@/components/site-nav";
import { Clock, Hexagon } from "lucide-react";
import { AgentOverseerGuideTip } from "@/components/agent-overseer-guide-tip";
import {
  GAMES,
  FEATURED_GAME,
  DIFFICULTY_STYLES,
  getWeeklyPlayCount,
  recordGamePlay,
  type Game,
} from "@/lib/games";

export const Route = createFileRoute("/games")({
  head: () => ({
    meta: [
      { title: "AI instinct games — FactorBeam" },
      {
        name: "description",
        content:
          "Five quick games that turn AI concepts into decisions and judgments — no theory, just thinking. Free, no login required.",
      },
      { property: "og:title", content: "AI instinct games — FactorBeam" },
      {
        property: "og:description",
        content:
          "Test your AI instincts with five short games — decisions, judgments, and challenges in 2–5 minutes each.",
      },
      { property: "og:url", content: "/games" },
      { property: "og:type", content: "website" },
    ],
    links: [{ rel: "canonical", href: "/games" }],
  }),
  component: GamesPage,
});

function useWeeklyPlayCounts() {
  const [counts, setCounts] = useState<Record<string, number>>({});

  const refresh = useCallback(() => {
    const ids = [...GAMES.map((g) => g.id), FEATURED_GAME.id];
    setCounts(Object.fromEntries(ids.map((id) => [id, getWeeklyPlayCount(id)])));
  }, []);

  useEffect(() => {
    refresh();
    const onStorage = () => refresh();
    window.addEventListener("factorbeam:storage", onStorage);
    window.addEventListener("storage", onStorage);
    return () => {
      window.removeEventListener("factorbeam:storage", onStorage);
      window.removeEventListener("storage", onStorage);
    };
  }, [refresh]);

  const recordPlay = useCallback(
    (gameId: string) => {
      const next = recordGamePlay(gameId);
      setCounts((prev) => ({ ...prev, [gameId]: next }));
    },
    [],
  );

  return { counts, recordPlay };
}

function GameCard({
  game,
  playCount,
  onPlay,
}: {
  game: Game;
  playCount: number;
  onPlay: (gameId: string) => void;
}) {
  const Icon = game.icon;
  const diff = DIFFICULTY_STYLES[game.difficulty];
  const playersLabel =
    playCount === 1 ? "1 player this week" : `${playCount.toLocaleString()} players this week`;

  return (
    <article className="hairline group flex flex-col rounded-xl bg-card p-6 transition-colors hover:border-[#7F77DD] hover:bg-[#EEEDFE] dark:hover:bg-purple-light/10">
      <div className="flex items-start justify-between gap-3">
        <div
          className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg"
          style={{ background: game.iconBg, color: game.iconColor }}
        >
          <Icon size={20} />
        </div>
        <span
          className={`shrink-0 rounded-full px-2.5 py-0.5 text-[10px] font-semibold uppercase tracking-wider ${diff.badge}`}
        >
          {diff.label}
        </span>
      </div>

      <h2 className="mt-3 text-[16px] font-medium tracking-tight text-foreground">{game.title}</h2>
      <p className="mt-1.5 text-[13px] leading-snug text-muted-foreground">{game.description}</p>
      <p className="mt-2 flex items-center gap-1 text-[12px] text-muted-foreground">
        <Clock size={12} className="opacity-70" />
        ~{game.minutes} min
      </p>

      <div className="mt-4 flex flex-col gap-2">
        <button
          type="button"
          onClick={() => onPlay(game.id)}
          className="w-full rounded-lg bg-purple px-4 py-2.5 text-[13px] font-medium text-white transition-colors hover:bg-purple-dark"
        >
          Play now →
        </button>
        <p className="text-center text-[11px] text-muted-foreground">{playersLabel}</p>
      </div>
    </article>
  );
}

function FeaturedGameCard({
  playCount,
  onPlay,
}: {
  playCount: number;
  onPlay: (gameId: string) => void;
}) {
  const playersLabel =
    playCount === 1 ? "1 player this week" : `${playCount.toLocaleString()} players this week`;

  return (
    <article className="group mb-5 rounded-xl border border-[#1E3A5F] bg-[#050A14] p-6 transition-colors hover:border-[#00F5FF]/60">
      <div className="flex flex-col gap-5 sm:flex-row sm:items-center">
        <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-[#0D1B2A] text-[#00F5FF]">
          <Hexagon size={24} />
        </div>
        <div className="min-w-0 flex-1">
          <div className="flex flex-wrap items-center gap-2">
            <span className="rounded-full bg-[#00F5FF]/10 px-2.5 py-0.5 text-[10px] font-semibold uppercase tracking-wider text-[#00F5FF]">
              Featured simulation
            </span>
            <span className="rounded-full bg-[#FF3864]/15 px-2.5 py-0.5 text-[10px] font-semibold uppercase tracking-wider text-[#FF3864]">
              {FEATURED_GAME.difficulty}
            </span>
          </div>
          <div className="mt-2 flex items-center gap-2">
            <h2 className="text-[18px] font-medium tracking-tight text-[#E8F4FD]">
              {FEATURED_GAME.title}
            </h2>
            <AgentOverseerGuideTip />
          </div>
          <p className="mt-1 text-[13px] leading-snug text-[#4A7FA5]">
            {FEATURED_GAME.description}
          </p>
          <p className="mt-2 flex items-center gap-3 text-[12px] text-[#4A7FA5]">
            <span className="flex items-center gap-1">
              <Clock size={12} className="opacity-70" />~{FEATURED_GAME.minutes} min
            </span>
            <span>{playersLabel}</span>
          </p>
        </div>
        <Link
          to={FEATURED_GAME.route}
          onClick={() => onPlay(FEATURED_GAME.id)}
          className="shrink-0 rounded-lg bg-[#00F5FF] px-5 py-2.5 text-center text-[13px] font-medium text-[#050A14] transition-opacity hover:opacity-85"
        >
          Play now →
        </Link>
      </div>
    </article>
  );
}

function GamesPage() {
  const { counts, recordPlay } = useWeeklyPlayCounts();
  const topFour = GAMES.slice(0, 4);
  const fifth = GAMES[4];

  return (
    <>
      <Nav />
      <main className="pb-24">
        <header className="mx-auto max-w-[720px] px-6 pt-16 pb-10 text-center">
          <h1 className="text-[32px] font-medium leading-tight tracking-tight text-foreground">
            Test your AI instincts
          </h1>
          <p className="mt-3 text-[16px] leading-relaxed text-muted-foreground">
            Five games that turn AI concepts into decisions, judgments and challenges — no theory,
            just thinking. Free, no login required.
          </p>
          <p className="mt-3 text-[13px] text-muted-foreground">
            Each game takes 2–5 minutes. Your scores are saved automatically.
          </p>
        </header>

        <div className="mx-auto max-w-[800px] px-6">
          <FeaturedGameCard
            playCount={counts[FEATURED_GAME.id] ?? 0}
            onPlay={recordPlay}
          />
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
            {topFour.map((game) => (
              <GameCard
                key={game.id}
                game={game}
                playCount={counts[game.id] ?? 0}
                onPlay={recordPlay}
              />
            ))}
          </div>
          {fifth && (
            <div className="mt-5 flex justify-center">
              <div className="w-full sm:max-w-[calc(50%-10px)]">
                <GameCard
                  game={fifth}
                  playCount={counts[fifth.id] ?? 0}
                  onPlay={recordPlay}
                />
              </div>
            </div>
          )}
        </div>
      </main>
      <Footer />
    </>
  );
}
