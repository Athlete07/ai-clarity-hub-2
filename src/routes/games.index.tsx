import { createFileRoute, Link } from "@tanstack/react-router";
import { Nav, Footer } from "@/components/site-nav";
import { GAMES, usePlayCounts, type GameMeta } from "@/lib/games";
import {
  Zap,
  Shield,
  Eye,
  Swords,
  Languages,
  Clock,
  ArrowRight,
} from "lucide-react";

export const Route = createFileRoute("/games/")({
  head: () => ({
    meta: [
      { title: "Games — Test your AI instincts | FactorBeam" },
      {
        name: "description",
        content:
          "Five short games that turn AI concepts into decisions, judgments and challenges. Free, no login required.",
      },
      { property: "og:title", content: "Games — FactorBeam" },
      {
        property: "og:description",
        content:
          "Five games that turn AI concepts into decisions and judgments. 2–5 minutes each.",
      },
      { property: "og:url", content: "/games" },
      { property: "og:type", content: "website" },
    ],
    links: [{ rel: "canonical", href: "/games" }],
  }),
  component: GamesIndex,
});

const ICON_MAP = {
  bolt: Zap,
  shield: Shield,
  eye: Eye,
  sword: Swords,
  language: Languages,
} as const;

function toneStyles(tone: GameMeta["tone"]) {
  switch (tone) {
    case "purple":
      return { bg: "var(--purple-light)", fg: "var(--purple)" };
    case "amber":
      return { bg: "var(--amber-bg)", fg: "var(--amber)" };
    case "red":
      return { bg: "var(--error-bg)", fg: "var(--error)" };
    case "teal":
      return { bg: "var(--teal-bg)", fg: "var(--teal)" };
    case "blue":
      return { bg: "var(--blue-bg)", fg: "var(--blue)" };
  }
}

function difficultyStyles(d: GameMeta["difficulty"]) {
  if (d === "Easy") return { bg: "var(--success-bg)", fg: "var(--success)" };
  if (d === "Medium") return { bg: "var(--warning-bg)", fg: "var(--warning)" };
  return { bg: "var(--error-bg)", fg: "var(--error)" };
}

function GameCard({ game, plays }: { game: GameMeta; plays: number }) {
  const Icon = ICON_MAP[game.iconKey];
  const tone = toneStyles(game.tone);
  const diff = difficultyStyles(game.difficulty);
  return (
    <Link
      to="/games/$slug"
      params={{ slug: game.slug }}
      className="group block rounded-[12px] bg-card p-6 transition-all"
      style={{
        border: "0.5px solid var(--color-border)",
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.border = "1px solid var(--purple)";
        e.currentTarget.style.backgroundColor = "var(--purple-light)";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.border = "0.5px solid var(--color-border)";
        e.currentTarget.style.backgroundColor = "";
      }}
    >
      <div className="flex items-start justify-between">
        <div
          className="flex h-10 w-10 items-center justify-center rounded-[10px]"
          style={{ backgroundColor: tone.bg, color: tone.fg }}
        >
          <Icon size={20} />
        </div>
        <span
          className="rounded-full px-2.5 py-1 text-[11px] font-medium"
          style={{ backgroundColor: diff.bg, color: diff.fg }}
        >
          {game.difficulty}
        </span>
      </div>
      <div className="mt-3 text-[16px] font-medium text-foreground">
        {game.title}
      </div>
      <p className="mt-1.5 text-[13px] text-muted-foreground">
        {game.description}
      </p>
      <div className="mt-2 flex items-center gap-1 text-[12px] text-muted-foreground">
        <Clock size={12} />
        <span>{game.time}</span>
      </div>
      <div className="mt-4">
        <div
          className="flex w-full items-center justify-center gap-1.5 rounded-md py-2.5 text-[13px] font-medium text-primary-foreground transition-colors"
          style={{ backgroundColor: "var(--purple)" }}
        >
          Play now <ArrowRight size={14} />
        </div>
        <div className="mt-2 text-center text-[11px] text-muted-foreground">
          {plays > 0 ? `${plays} players this week` : "Be the first to play"}
        </div>
      </div>
    </Link>
  );
}

function GamesIndex() {
  const counts = usePlayCounts();
  const first4 = GAMES.slice(0, 4);
  const fifth = GAMES[4];

  return (
    <div className="min-h-screen bg-background">
      <Nav />
      <main className="mx-auto max-w-6xl px-6">
        <header className="mx-auto max-w-[720px] px-2 pb-10 pt-16 text-center">
          <h1 className="text-[32px] font-medium leading-tight tracking-tight text-foreground">
            Test your AI instincts
          </h1>
          <p className="mt-4 text-[16px] text-muted-foreground">
            Five games that turn AI concepts into decisions, judgments and
            challenges — no theory, just thinking. Free, no login required.
          </p>
          <p className="mt-3 text-[13px] text-muted-foreground">
            Each game takes 2–5 minutes. Your scores are saved automatically.
          </p>
        </header>

        <section className="mx-auto max-w-[800px] pb-8">
          <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
            {first4.map((g) => (
              <GameCard key={g.slug} game={g} plays={counts[g.slug] ?? 0} />
            ))}
          </div>
          <div className="mt-5 grid grid-cols-1 md:grid-cols-2">
            <div className="hidden md:block" />
            <div className="md:col-start-1 md:col-end-3 md:mx-auto md:w-[calc(50%-10px)]">
              <GameCard game={fifth} plays={counts[fifth.slug] ?? 0} />
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
