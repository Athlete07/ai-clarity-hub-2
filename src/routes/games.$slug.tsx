import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { Logo } from "@/components/site-nav";
import {
  GAMES,
  getGame,
  useHighScore,
  recordScore,
  incrementPlayCount,
  performanceLabel,
} from "@/lib/games";
import {
  AI_OR_NOT_ROUNDS,
  SPOT_FAKE_ROUNDS,
  SPOT_FAKE_OPTIONS,
  HALLU_ROUNDS,
  PROMPT_BATTLE_ROUNDS,
  JARGON_ROUNDS,
  type SpotFakeOption,
} from "@/lib/games-data";
import { ArrowLeft, Check, X, Copy, RotateCcw } from "lucide-react";
import { useEffect, useMemo, useRef, useState } from "react";

export const Route = createFileRoute("/games/$slug")({
  loader: ({ params }) => {
    if (!getGame(params.slug)) throw notFound();
    return { slug: params.slug };
  },
  head: ({ params }) => {
    const game = getGame(params.slug);
    const title = game ? `${game.title} — FactorBeam Games` : "Game — FactorBeam";
    const desc = game?.description ?? "Play short AI games on FactorBeam.";
    return {
      meta: [
        { title },
        { name: "description", content: desc },
        { property: "og:title", content: title },
        { property: "og:description", content: desc },
        { property: "og:url", content: `/games/${params.slug}` },
        { property: "og:type", content: "website" },
      ],
      links: [{ rel: "canonical", href: `/games/${params.slug}` }],
    };
  },
  notFoundComponent: () => (
    <div className="flex min-h-screen items-center justify-center bg-background">
      <div className="text-center">
        <h1 className="text-xl font-medium text-foreground">Game not found</h1>
        <Link to="/games" className="mt-4 inline-block text-sm text-primary underline">
          Back to all games
        </Link>
      </div>
    </div>
  ),
  component: GamePage,
});

function GameNav({ slug }: { slug: string }) {
  const high = useHighScore(slug);
  return (
    <header
      className="sticky top-0 z-40 hairline-b bg-background/85 backdrop-blur"
      style={{ height: 52 }}
    >
      <div className="mx-auto flex h-full max-w-6xl items-center justify-between px-6">
        <div className="flex items-center gap-5">
          <Logo size={14} />
          <Link
            to="/games"
            className="hidden items-center gap-1 text-[13px] text-muted-foreground transition-colors hover:text-foreground sm:inline-flex"
          >
            <ArrowLeft size={13} /> All games
          </Link>
        </div>
        <div className="text-[12px] text-muted-foreground">
          High score: <span className="text-foreground font-medium">{high ?? 0}</span>
        </div>
      </div>
    </header>
  );
}

type Phase = "pre" | "playing" | "post";

function GamePage() {
  const { slug } = Route.useParams();
  const game = getGame(slug)!;
  const high = useHighScore(slug);
  const [phase, setPhase] = useState<Phase>("pre");
  const [finalScore, setFinalScore] = useState(0);
  const [maxScore, setMaxScore] = useState(0);
  const [resetKey, setResetKey] = useState(0);

  function start() {
    incrementPlayCount(slug);
    setPhase("playing");
  }
  function finish(score: number, max: number) {
    setFinalScore(score);
    setMaxScore(max);
    recordScore(slug, score);
    setPhase("post");
  }
  function playAgain() {
    setResetKey((k) => k + 1);
    setPhase("pre");
  }

  const rules = RULES_BY_SLUG[slug] ?? [];

  return (
    <div className="min-h-screen bg-background">
      <GameNav slug={slug} />
      <main className="mx-auto max-w-6xl px-6">
        <div
          className="mx-auto my-10 rounded-[12px] bg-card p-8"
          style={{ border: "0.5px solid var(--color-border)", maxWidth: 680 }}
        >
          {phase === "pre" && (
            <div className="text-center">
              <h1 className="text-[22px] font-medium text-foreground">{game.title}</h1>
              <p className="mt-2 text-[15px] text-muted-foreground">
                {game.description}
              </p>
              <ul className="mx-auto mt-6 max-w-[440px] space-y-2 text-left text-[13px] text-muted-foreground">
                {rules.map((r, i) => (
                  <li key={i} className="flex gap-2">
                    <span className="text-purple">•</span>
                    <span>{r}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-7">
                <button
                  onClick={start}
                  className="inline-flex items-center justify-center gap-1.5 rounded-md px-5 py-2.5 text-[14px] font-medium text-primary-foreground transition-opacity hover:opacity-90"
                  style={{ backgroundColor: "var(--purple)" }}
                >
                  Start game →
                </button>
              </div>
              <p className="mt-4 text-[12px] text-muted-foreground">
                {high != null && high > 0
                  ? `Your best score: ${high}`
                  : "No score yet"}
              </p>
            </div>
          )}

          {phase === "playing" && (
            <ActiveGame key={resetKey} slug={slug} onFinish={finish} />
          )}

          {phase === "post" && (
            <PostGame
              slug={slug}
              gameTitle={game.title}
              score={finalScore}
              max={maxScore}
              onPlayAgain={playAgain}
            />
          )}
        </div>
      </main>
    </div>
  );
}

const RULES_BY_SLUG: Record<string, string[]> = {
  "ai-or-not": [
    "8 rapid-fire rounds. 60-second total timer.",
    "Decide if each product feature is Real AI or Just Rules.",
    "Correct answer = +1 point. Timer ends the game.",
  ],
  "spot-the-fake": [
    "5 vendor pitches. 4 options per pitch.",
    "First-try correct = +2. Second-try correct = +1.",
    "No timer — take your time. Max 10.",
  ],
  "hallucination-detector": [
    "5 AI-generated paragraphs. One sentence is fabricated.",
    "Click the hallucinated sentence (some paragraphs are clean).",
    "Correct = +2, wrong = 0. Max 10.",
  ],
  "prompt-battle": [
    "5 tasks, two prompts each. Pick the better prompt.",
    "Correct = +2, wrong = 0. Max 10.",
    "Read each prompt carefully — they're closer than you think.",
  ],
  "jargon-translator": [
    "8 jargon-heavy sentences. 4 plain-English options each.",
    "Correct = +1. Max 8.",
    "One option is close-but-wrong. Watch for it.",
  ],
};

function ActiveGame({
  slug,
  onFinish,
}: {
  slug: string;
  onFinish: (score: number, max: number) => void;
}) {
  switch (slug) {
    case "ai-or-not":
      return <AiOrNotGame onFinish={onFinish} />;
    case "spot-the-fake":
      return <SpotFakeGame onFinish={onFinish} />;
    case "hallucination-detector":
      return <HallucinationGame onFinish={onFinish} />;
    case "prompt-battle":
      return <PromptBattleGame onFinish={onFinish} />;
    case "jargon-translator":
      return <JargonGame onFinish={onFinish} />;
  }
  return null;
}

function HUD({
  score,
  index,
  total,
}: {
  score: number;
  index: number;
  total: number;
}) {
  return (
    <div className="mb-4 flex items-center justify-between text-[12px] text-muted-foreground">
      <span>
        Score: <span className="text-foreground font-medium">{score}</span>
      </span>
      <span>
        Question {index + 1} of {total}
      </span>
    </div>
  );
}

/* ============ Game 1: AI or Not ============ */
function AiOrNotGame({
  onFinish,
}: {
  onFinish: (score: number, max: number) => void;
}) {
  const TOTAL_SECONDS = 60;
  const [score, setScore] = useState(0);
  const [idx, setIdx] = useState(0);
  const [feedback, setFeedback] = useState<null | {
    correct: boolean;
    text: string;
  }>(null);
  const [remaining, setRemaining] = useState(TOTAL_SECONDS);
  const startRef = useRef<number>(Date.now());
  const endedRef = useRef(false);

  useEffect(() => {
    const t = setInterval(() => {
      const elapsed = (Date.now() - startRef.current) / 1000;
      const rem = Math.max(0, TOTAL_SECONDS - elapsed);
      setRemaining(rem);
      if (rem <= 0 && !endedRef.current) {
        endedRef.current = true;
        clearInterval(t);
        onFinish(score, AI_OR_NOT_ROUNDS.length);
      }
    }, 100);
    return () => clearInterval(t);
  }, [score, onFinish]);

  const round = AI_OR_NOT_ROUNDS[idx];
  const pct = (remaining / TOTAL_SECONDS) * 100;
  const barColor =
    remaining <= 10
      ? "var(--error)"
      : remaining <= 20
        ? "var(--amber)"
        : "var(--purple)";

  function answer(choice: "ai" | "rules") {
    if (feedback) return;
    const correct = choice === round.answer;
    if (correct) setScore((s) => s + 1);
    setFeedback({ correct, text: round.feedback });
    setTimeout(() => {
      setFeedback(null);
      if (idx + 1 >= AI_OR_NOT_ROUNDS.length) {
        if (!endedRef.current) {
          endedRef.current = true;
          onFinish(score + (correct ? 1 : 0), AI_OR_NOT_ROUNDS.length);
        }
      } else {
        setIdx((i) => i + 1);
      }
    }, 1400);
  }

  return (
    <div>
      <div
        className="mb-4 h-1.5 w-full overflow-hidden rounded-full"
        style={{ backgroundColor: "var(--muted)" }}
      >
        <div
          className="h-full rounded-full transition-[width] duration-100"
          style={{ width: `${pct}%`, backgroundColor: barColor }}
        />
      </div>
      <HUD score={score} index={idx} total={AI_OR_NOT_ROUNDS.length} />
      <div
        className="rounded-lg p-5 text-[15px] leading-relaxed text-foreground"
        style={{ backgroundColor: "var(--muted)" }}
      >
        {round.prompt}
      </div>
      <div className="mt-5 grid grid-cols-2 gap-3">
        <button
          onClick={() => answer("ai")}
          disabled={!!feedback}
          className="rounded-md py-4 text-[14px] font-medium text-primary-foreground transition-opacity disabled:opacity-60"
          style={{ backgroundColor: "var(--purple)", minHeight: 44 }}
        >
          Real AI
        </button>
        <button
          onClick={() => answer("rules")}
          disabled={!!feedback}
          className="hairline rounded-md py-4 text-[14px] font-medium text-foreground transition-colors hover:bg-muted disabled:opacity-60"
          style={{ minHeight: 44 }}
        >
          Just Rules
        </button>
      </div>
      {feedback && (
        <div
          className="mt-4 rounded-md p-3 text-[13px]"
          style={{
            backgroundColor: feedback.correct ? "var(--success-bg)" : "var(--error-bg)",
            color: feedback.correct ? "var(--success)" : "var(--error)",
          }}
        >
          <div className="flex items-start gap-2">
            {feedback.correct ? <Check size={14} className="mt-0.5" /> : <X size={14} className="mt-0.5" />}
            <span>{feedback.text}</span>
          </div>
        </div>
      )}
    </div>
  );
}

/* ============ Game 2: Spot the Fake ============ */
function SpotFakeGame({
  onFinish,
}: {
  onFinish: (score: number, max: number) => void;
}) {
  const [idx, setIdx] = useState(0);
  const [score, setScore] = useState(0);
  const [attempts, setAttempts] = useState(0);
  const [wrongChoices, setWrongChoices] = useState<SpotFakeOption[]>([]);
  const [feedback, setFeedback] = useState<null | { correct: boolean; text: string }>(null);
  const round = SPOT_FAKE_ROUNDS[idx];
  const max = SPOT_FAKE_ROUNDS.length * 2;

  function next(addedScore: number) {
    const newScore = score + addedScore;
    if (idx + 1 >= SPOT_FAKE_ROUNDS.length) {
      onFinish(newScore, max);
    } else {
      setScore(newScore);
      setIdx((i) => i + 1);
      setAttempts(0);
      setWrongChoices([]);
      setFeedback(null);
    }
  }

  function choose(opt: SpotFakeOption) {
    if (feedback?.correct) return;
    if (opt === round.correct) {
      const gained = attempts === 0 ? 2 : 1;
      setFeedback({ correct: true, text: round.rightFeedback });
      setTimeout(() => next(gained), 1800);
    } else {
      const newAttempts = attempts + 1;
      setWrongChoices((w) => [...w, opt]);
      setAttempts(newAttempts);
      setFeedback({ correct: false, text: round.wrongFeedback });
      if (newAttempts >= 2) {
        setTimeout(() => next(0), 1800);
      } else {
        setTimeout(() => setFeedback(null), 1600);
      }
    }
  }

  return (
    <div>
      <HUD score={score} index={idx} total={SPOT_FAKE_ROUNDS.length} />
      <div
        className="rounded-lg p-5 text-[15px] italic leading-relaxed text-foreground"
        style={{ backgroundColor: "var(--muted)" }}
      >
        "{round.pitch}"
      </div>
      <div className="mt-5 grid grid-cols-1 gap-2 sm:grid-cols-2">
        {SPOT_FAKE_OPTIONS.map((opt) => {
          const isWrong = wrongChoices.includes(opt);
          const isRight = feedback?.correct && opt === round.correct;
          return (
            <button
              key={opt}
              onClick={() => choose(opt)}
              disabled={isWrong || !!feedback?.correct}
              className="hairline rounded-md px-4 py-3 text-left text-[13px] font-medium text-foreground transition-colors hover:bg-muted disabled:cursor-not-allowed"
              style={{
                minHeight: 44,
                backgroundColor: isRight
                  ? "var(--success-bg)"
                  : isWrong
                    ? "var(--error-bg)"
                    : undefined,
                color: isRight
                  ? "var(--success)"
                  : isWrong
                    ? "var(--error)"
                    : undefined,
                opacity: isWrong ? 0.7 : 1,
              }}
            >
              {opt}
            </button>
          );
        })}
      </div>
      {feedback && (
        <div
          className="mt-4 rounded-md p-3 text-[13px]"
          style={{
            backgroundColor: feedback.correct ? "var(--success-bg)" : "var(--error-bg)",
            color: feedback.correct ? "var(--success)" : "var(--error)",
          }}
        >
          {feedback.text}
        </div>
      )}
    </div>
  );
}

/* ============ Game 3: Hallucination ============ */
function HallucinationGame({
  onFinish,
}: {
  onFinish: (score: number, max: number) => void;
}) {
  const [idx, setIdx] = useState(0);
  const [score, setScore] = useState(0);
  const [picked, setPicked] = useState<number | null>(null); // -1 = none chosen
  const round = HALLU_ROUNDS[idx];
  const max = HALLU_ROUNDS.length * 2;

  function pick(i: number) {
    if (picked !== null) return;
    setPicked(i);
    const correct = i === round.hallucinationIndex;
    const gained = correct ? 2 : 0;
    setTimeout(() => {
      if (idx + 1 >= HALLU_ROUNDS.length) {
        onFinish(score + gained, max);
      } else {
        setScore(score + gained);
        setIdx((x) => x + 1);
        setPicked(null);
      }
    }, 2200);
  }

  return (
    <div>
      <HUD score={score} index={idx} total={HALLU_ROUNDS.length} />
      <div className="mb-2 text-[11px] font-medium uppercase tracking-wider text-muted-foreground">
        Generated by AI
      </div>
      <div
        className="rounded-lg p-5 text-[14px] leading-relaxed"
        style={{ backgroundColor: "var(--muted)" }}
      >
        {round.sentences.map((s, i) => {
          const isPicked = picked === i;
          const isCorrect = i === round.hallucinationIndex;
          const showHighlight = picked !== null;
          let bg: string | undefined;
          let color: string | undefined;
          if (showHighlight && isCorrect) {
            bg = "var(--success-bg)";
            color = "var(--success)";
          } else if (showHighlight && isPicked && !isCorrect) {
            bg = "var(--error-bg)";
            color = "var(--error)";
          }
          return (
            <span
              key={i}
              onClick={() => pick(i)}
              className="cursor-pointer rounded px-1 py-0.5 transition-colors hover:bg-purple-light/60"
              style={{ backgroundColor: bg, color }}
            >
              {s}{" "}
            </span>
          );
        })}
      </div>
      {round.noneOptionLabel && (
        <button
          onClick={() => pick(-1)}
          disabled={picked !== null}
          className="hairline mt-3 w-full rounded-md px-4 py-3 text-[13px] font-medium text-foreground transition-colors hover:bg-muted disabled:opacity-60"
          style={{
            minHeight: 44,
            backgroundColor:
              picked !== null && round.hallucinationIndex === -1
                ? "var(--success-bg)"
                : picked === -1 && round.hallucinationIndex !== -1
                  ? "var(--error-bg)"
                  : undefined,
            color:
              picked !== null && round.hallucinationIndex === -1
                ? "var(--success)"
                : picked === -1 && round.hallucinationIndex !== -1
                  ? "var(--error)"
                  : undefined,
          }}
        >
          {round.noneOptionLabel}
        </button>
      )}
      {picked !== null && (
        <div
          className="mt-4 rounded-md p-3 text-[13px]"
          style={{
            backgroundColor:
              picked === round.hallucinationIndex
                ? "var(--success-bg)"
                : "var(--error-bg)",
            color:
              picked === round.hallucinationIndex
                ? "var(--success)"
                : "var(--error)",
          }}
        >
          {round.explanation}
        </div>
      )}
    </div>
  );
}

/* ============ Game 4: Prompt Battle ============ */
function PromptBattleGame({
  onFinish,
}: {
  onFinish: (score: number, max: number) => void;
}) {
  const [idx, setIdx] = useState(0);
  const [score, setScore] = useState(0);
  const [picked, setPicked] = useState<"A" | "B" | null>(null);
  const round = PROMPT_BATTLE_ROUNDS[idx];
  const max = PROMPT_BATTLE_ROUNDS.length * 2;

  function pick(c: "A" | "B") {
    if (picked) return;
    setPicked(c);
    const gained = c === round.winner ? 2 : 0;
    setTimeout(() => {
      if (idx + 1 >= PROMPT_BATTLE_ROUNDS.length) {
        onFinish(score + gained, max);
      } else {
        setScore(score + gained);
        setIdx((x) => x + 1);
        setPicked(null);
      }
    }, 2600);
  }

  function cardStyle(which: "A" | "B"): React.CSSProperties {
    if (!picked) return { border: "0.5px solid var(--color-border)" };
    if (which === round.winner)
      return { border: "1px solid var(--success)", backgroundColor: "var(--success-bg)" };
    return { border: "0.5px solid var(--color-border)", opacity: 0.55 };
  }

  return (
    <div>
      <HUD score={score} index={idx} total={PROMPT_BATTLE_ROUNDS.length} />
      <p className="text-[14px] italic text-muted-foreground">{round.task}</p>
      <div className="mt-4 grid grid-cols-1 gap-3 sm:grid-cols-2">
        {(["A", "B"] as const).map((which) => {
          const text = which === "A" ? round.promptA : round.promptB;
          return (
            <div key={which} className="flex flex-col">
              <div
                className="rounded-[12px] bg-card p-4 text-[13px] leading-relaxed text-foreground transition-all"
                style={{ ...cardStyle(which), fontFamily: "ui-monospace, SFMono-Regular, Menlo, monospace" }}
              >
                <div className="mb-2 text-[11px] font-medium uppercase tracking-wider text-muted-foreground">
                  Prompt {which}
                </div>
                {text}
              </div>
              <button
                onClick={() => pick(which)}
                disabled={!!picked}
                className="mt-2 rounded-md py-2.5 text-[13px] font-medium text-primary-foreground transition-opacity hover:opacity-90 disabled:opacity-60"
                style={{ backgroundColor: "var(--purple)", minHeight: 44 }}
              >
                Choose {which}
              </button>
            </div>
          );
        })}
      </div>
      {picked && (
        <div
          className="mt-4 rounded-md p-3 text-[13px]"
          style={{
            backgroundColor:
              picked === round.winner ? "var(--success-bg)" : "var(--error-bg)",
            color: picked === round.winner ? "var(--success)" : "var(--error)",
          }}
        >
          Winner: Prompt {round.winner}. {round.explanation}
        </div>
      )}
    </div>
  );
}

/* ============ Game 5: Jargon Translator ============ */
function JargonGame({
  onFinish,
}: {
  onFinish: (score: number, max: number) => void;
}) {
  const [idx, setIdx] = useState(0);
  const [score, setScore] = useState(0);
  const [picked, setPicked] = useState<number | null>(null);
  const round = JARGON_ROUNDS[idx];
  const max = JARGON_ROUNDS.length;

  // shuffle options stably per round
  const shuffled = useMemo(() => {
    const arr = round.options.map((text, i) => ({ text, originalIndex: i }));
    // Fisher-Yates with a seed from idx so it's stable per round mount
    let seed = idx + 1;
    const rand = () => {
      seed = (seed * 9301 + 49297) % 233280;
      return seed / 233280;
    };
    for (let i = arr.length - 1; i > 0; i--) {
      const j = Math.floor(rand() * (i + 1));
      [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    return arr;
  }, [idx, round.options]);

  function pick(originalIndex: number) {
    if (picked !== null) return;
    setPicked(originalIndex);
    const gained = originalIndex === round.correctIndex ? 1 : 0;
    setTimeout(() => {
      if (idx + 1 >= JARGON_ROUNDS.length) {
        onFinish(score + gained, max);
      } else {
        setScore(score + gained);
        setIdx((x) => x + 1);
        setPicked(null);
      }
    }, 2200);
  }

  return (
    <div>
      <HUD score={score} index={idx} total={JARGON_ROUNDS.length} />
      <div
        className="rounded-lg p-5 text-[15px] leading-relaxed text-foreground"
        style={{ backgroundColor: "var(--muted)", fontFamily: "ui-monospace, SFMono-Regular, Menlo, monospace" }}
      >
        {round.jargon}
      </div>
      <div className="mt-4 grid grid-cols-1 gap-2">
        {shuffled.map(({ text, originalIndex }) => {
          const isPicked = picked === originalIndex;
          const isCorrect = originalIndex === round.correctIndex;
          const reveal = picked !== null;
          let bg: string | undefined;
          let color: string | undefined;
          if (reveal && isCorrect) {
            bg = "var(--success-bg)";
            color = "var(--success)";
          } else if (reveal && isPicked && !isCorrect) {
            bg = "var(--error-bg)";
            color = "var(--error)";
          }
          return (
            <button
              key={originalIndex}
              onClick={() => pick(originalIndex)}
              disabled={picked !== null}
              className="hairline rounded-md px-4 py-3 text-left text-[13px] text-foreground transition-colors hover:bg-muted disabled:cursor-not-allowed"
              style={{ minHeight: 44, backgroundColor: bg, color }}
            >
              {text}
            </button>
          );
        })}
      </div>
      {picked !== null && (
        <div
          className="mt-4 rounded-md p-3 text-[13px]"
          style={{
            backgroundColor:
              picked === round.correctIndex ? "var(--success-bg)" : "var(--error-bg)",
            color: picked === round.correctIndex ? "var(--success)" : "var(--error)",
          }}
        >
          {round.explanation}
        </div>
      )}
    </div>
  );
}

/* ============ Post-game ============ */
function PostGame({
  slug,
  gameTitle,
  score,
  max,
  onPlayAgain,
}: {
  slug: string;
  gameTitle: string;
  score: number;
  max: number;
  onPlayAgain: () => void;
}) {
  const pct = max > 0 ? (score / max) * 100 : 0;
  const label = performanceLabel(pct);
  const [copied, setCopied] = useState(false);

  // share text uses X/5 format per spec
  const shareText = `I scored ${score}/${max} on ${gameTitle} on FactorBeam — the free AI playbook for PMs. Try it: factorbeam.com/games/${slug}`;

  async function share() {
    try {
      await navigator.clipboard.writeText(shareText);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {}
  }

  return (
    <div className="text-center">
      <div className="text-[48px] font-medium leading-none" style={{ color: "var(--purple)" }}>
        {score}
        <span className="text-[24px] text-muted-foreground">/{max}</span>
      </div>
      <div className="mt-3 text-[15px] text-foreground">{label}</div>
      <div className="mt-7 flex flex-wrap items-center justify-center gap-2">
        <button
          onClick={onPlayAgain}
          className="hairline inline-flex items-center gap-1.5 rounded-md px-4 py-2.5 text-[13px] font-medium text-foreground transition-colors hover:bg-muted"
        >
          <RotateCcw size={13} /> Play again
        </button>
        <button
          onClick={share}
          className="inline-flex items-center gap-1.5 rounded-md px-4 py-2.5 text-[13px] font-medium text-primary-foreground transition-opacity hover:opacity-90"
          style={{ backgroundColor: "var(--purple)" }}
        >
          <Copy size={13} /> {copied ? "Copied!" : "Share your score"}
        </button>
      </div>
      <div className="mt-5">
        <Link to="/games" className="text-[13px] text-muted-foreground underline hover:text-foreground">
          Back to games
        </Link>
      </div>
    </div>
  );
}

// Avoid TS unused-var if GAMES not referenced
void GAMES;
