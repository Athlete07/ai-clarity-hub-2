import { createFileRoute, Link } from "@tanstack/react-router";
import { FactorBeamLogo } from "@/components/factorbeam-logo";
import { Nav, Footer } from "@/components/site-nav";
import { brandOgMeta } from "@/lib/brand";
import { FaqItem } from "@/components/faq-item";
import { useProgress } from "@/lib/storage";
import {
  EXECUTIVE_KBS,
  chapterRouteParams,
  formatExecutiveKbLabel,
  type ExecutiveKb,
  type ExecutiveKbTrack,
} from "@/lib/executive-kb";
import { FOUNDER_EXECUTIVE_KBS } from "@/lib/executive-kb-founder";
import { BUSINESS_LEADER_EXECUTIVE_KBS } from "@/lib/executive-kb-business-leader";
import { executiveKbTrackSearch } from "@/lib/executive-kb-track";
import { ROLES, ROLE_THEMES, type RoleId } from "@/lib/role-themes";
import { FEATURED_GAME } from "@/lib/simulations";
import {
  ArrowRight,
  BarChart3,
  Bookmark,
  Globe,
  Highlighter,
  ListChecks,
  Play,
  Sparkles,
} from "lucide-react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "FactorBeam — AI clarity for product leaders worldwide" },
      {
        name: "description",
        content:
          "Plain-English Executive KB for PMs, founders, and business leaders. Sequenced chapters, real product examples, highlight-to-explain, and quizzes. Free, no signup.",
      },
      {
        property: "og:title",
        content: "FactorBeam — AI clarity for product leaders worldwide",
      },
      {
        property: "og:description",
        content:
          "Understand modern AI well enough to ship. Executive KB for every role — highlight anything confusing and get an instant explanation.",
      },
      { property: "og:url", content: "/" },
      { property: "og:type", content: "website" },
      ...brandOgMeta(),
    ],
    links: [{ rel: "canonical", href: "/" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: [
            {
              "@type": "Question",
              name: "Do I need a technical background?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "None at all. Every chapter is written for operators, founders, and curious people — not engineers. Where math would normally appear, chapters use product analogies and real examples instead.",
              },
            },
            {
              "@type": "Question",
              name: "How long does each chapter take?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "Most chapters take 20–35 minutes including reading, the three examples, and the quiz. There's no timer — and your progress is saved automatically.",
              },
            },
            {
              "@type": "Question",
              name: "What if I get stuck on a sentence?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "Highlight it. You'll get a plain-English explanation in place. You can also flag it as confusing — those flags drive the next round of edits.",
              },
            },
            {
              "@type": "Question",
              name: "Is it really free?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "Yes — no signup, no paywall, no ads.",
              },
            },
          ],
        }),
      },
    ],
  }),
  component: Home,
});

const ALL_KBS = [...EXECUTIVE_KBS, ...FOUNDER_EXECUTIVE_KBS, ...BUSINESS_LEADER_EXECUTIVE_KBS];
const TOTAL_CHAPTERS = ALL_KBS.reduce((n, kb) => n + kb.sequence.length, 0);

const TRACK_KBS: Record<RoleId, ExecutiveKb[]> = {
  pm: EXECUTIVE_KBS,
  founder: FOUNDER_EXECUTIVE_KBS,
  "business-leader": BUSINESS_LEADER_EXECUTIVE_KBS,
};

const FEATURED_BY_TRACK: { track: ExecutiveKbTrack; roleId: RoleId }[] = [
  { track: "pm", roleId: "pm" },
  { track: "founder", roleId: "founder" },
  { track: "business-leader", roleId: "business-leader" },
];

function Home() {
  const { progress } = useProgress();

  const allSlugs = ALL_KBS.flatMap((p) => p.sequence.map((s) => s.slug));
  const doneCount = allSlugs.filter((slug) => progress[slug] === "done").length;
  const inProgressSlug = allSlugs.find((slug) => progress[slug] === "in-progress");
  const firstSlug = allSlugs[0];
  const resumeSlug = inProgressSlug ?? allSlugs.find((s) => progress[s] !== "done") ?? firstSlug;
  const resumeParams = resumeSlug ? chapterRouteParams(resumeSlug) : undefined;
  const ctaLabel = doneCount === 0 ? "Start reading" : "Resume reading";
  const progressPct = allSlugs.length ? Math.round((doneCount / allSlugs.length) * 100) : 0;

  return (
    <>
      <Nav />
      <main className="overflow-x-hidden">
        {/* ── Hero ───────────────────────────────────────────────── */}
        <section className="relative home-hero-mesh">
          <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
            <div className="mesh-glow-1 absolute -top-32 right-0 h-[480px] w-[480px] rounded-full bg-purple-light/40 blur-[120px] dark:bg-purple-light/8" />
            <div className="mesh-glow-2 absolute bottom-0 left-0 h-[360px] w-[360px] rounded-full bg-blue-bg/50 blur-[100px] dark:bg-blue-bg/10" />
          </div>

          <div className="mx-auto max-w-6xl px-5 pt-14 pb-20 sm:px-6 sm:pt-20 sm:pb-28 lg:grid lg:grid-cols-2 lg:items-center lg:gap-16 lg:pt-24 lg:pb-32">
            <div className="text-center lg:text-left">
              <div className="mb-6 flex justify-center lg:justify-start">
                <FactorBeamLogo context="hero" />
              </div>
              <div className="inline-flex flex-wrap items-center justify-center gap-2 lg:justify-start">
                <span className="inline-flex items-center gap-1.5 rounded-full border border-purple/15 bg-purple-light/60 px-3 py-1 text-[11px] font-medium tracking-wide text-purple-dark dark:bg-purple-light/20 dark:text-purple">
                  <Sparkles size={12} aria-hidden />
                  Executive KB
                </span>
                <span className="inline-flex items-center gap-1.5 rounded-full border border-border bg-card/80 px-3 py-1 text-[11px] font-medium tracking-wide text-muted-foreground">
                  <Globe size={12} aria-hidden />
                  Free · No signup
                </span>
              </div>

              <h1 className="mt-8 text-[40px] font-medium leading-[1.04] tracking-[-0.035em] sm:text-[52px] lg:text-[58px]">
                Understand AI
                <br />
                <span className="text-purple">enough to ship.</span>
              </h1>

              <p className="mx-auto mt-6 max-w-[480px] text-[16px] leading-[1.65] text-muted-foreground sm:text-[18px] lg:mx-0">
                Plain-English chapters for PMs, founders, and business leaders.
                Highlight any sentence you don&apos;t understand — get an explanation
                right there, in context.
              </p>

              <div className="mt-9 flex flex-col items-stretch gap-3 sm:flex-row sm:items-center sm:justify-center lg:justify-start">
                {resumeParams ? (
                  <Link
                    to="/executive-kb/$kbId/$chapterSlug"
                    params={resumeParams}
                    className="btn-primary px-7 py-3.5 text-[15px]"
                  >
                    {ctaLabel}
                    <ArrowRight size={16} />
                  </Link>
                ) : null}
                <Link
                  to="/executive-kb"
                  className="inline-flex items-center justify-center gap-2 px-4 py-3.5 text-[15px] font-medium text-foreground/80 transition-colors hover:text-foreground"
                >
                  Browse all tracks
                  <ArrowRight size={15} className="opacity-60" />
                </Link>
              </div>

              {doneCount > 0 ? (
                <p className="mt-6 text-[13px] text-muted-foreground lg:text-left">
                  <span className="font-medium text-foreground">{progressPct}%</span> of the
                  library complete · {doneCount} chapter{doneCount === 1 ? "" : "s"} done
                </p>
              ) : null}
            </div>

            {/* Product preview — highlight interaction */}
            <div className="mt-14 lg:mt-0">
              <div className="relative mx-auto max-w-[420px] lg:max-w-none">
                <div
                  aria-hidden
                  className="absolute -inset-4 rounded-3xl bg-gradient-to-br from-purple/10 via-transparent to-blue/10 blur-xl"
                />
                <div className="relative overflow-hidden rounded-2xl border border-border/80 bg-card shadow-brand">
                  <div className="flex items-center gap-2 border-b border-border/60 px-4 py-3">
                    <span className="h-2 w-2 rounded-full bg-purple/60" />
                    <span className="h-2 w-2 rounded-full bg-muted-foreground/25" />
                    <span className="h-2 w-2 rounded-full bg-muted-foreground/25" />
                    <span className="ml-2 text-[10px] font-medium uppercase tracking-widest text-muted-foreground">
                      Chapter · PM 01
                    </span>
                  </div>
                  <div className="space-y-4 p-5 sm:p-6">
                    <p className="text-[14px] leading-relaxed text-foreground/90">
                      Large language models don&apos;t retrieve facts from a database — they
                      predict the next token from patterns in{" "}
                      <mark className="rounded-sm bg-purple-light px-1 py-0.5 text-purple-dark dark:bg-purple-light/30 dark:text-purple">
                        training data
                      </mark>
                      .
                    </p>
                    <div className="animate-fade-in-up rounded-xl border border-purple/20 bg-purple-light/40 p-4 dark:bg-purple-light/10">
                      <div className="flex items-center gap-2 text-[10px] font-semibold uppercase tracking-wider text-purple-dark dark:text-purple">
                        <Highlighter size={11} />
                        Instant explanation
                      </div>
                      <p className="mt-2 text-[13px] leading-relaxed text-purple-dark/90 dark:text-foreground/85">
                        Training data = labeled examples the model learns from — like
                        thousands of flashcards with the right answer on the back.
                      </p>
                    </div>
                    <div className="flex items-center justify-between pt-1">
                      <div className="h-1 flex-1 overflow-hidden rounded-full bg-muted">
                        <div className="h-full w-[38%] rounded-full bg-purple" />
                      </div>
                      <span className="ml-3 text-[11px] font-medium text-muted-foreground">
                        38%
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── Stats strip ─────────────────────────────────────────── */}
        <section className="border-y border-border/80 bg-muted/30">
          <div className="mx-auto grid max-w-6xl grid-cols-2 divide-x divide-border/60 sm:grid-cols-4">
            <StatCell value={String(ALL_KBS.length)} label="Executive KBs" />
            <StatCell value="3" label="Role tracks" />
            <StatCell value={`${TOTAL_CHAPTERS}+`} label="Chapters" />
            <StatCell value="$0" label="Forever" />
          </div>
        </section>

        {/* ── Role tracks ─────────────────────────────────────────── */}
        <section className="mx-auto max-w-6xl px-5 py-20 sm:px-6 sm:py-28">
          <div>
            <p className="section-label">Built for how you work</p>
            <h2 className="mt-3 text-[clamp(1.5rem,3.5vw,2.25rem)] font-medium leading-[1.1] tracking-[-0.02em] text-balance sm:whitespace-nowrap sm:text-pretty">
              Same AI concepts. Sequenced for your role.
            </h2>
            <p className="mt-4 text-[15px] leading-relaxed text-muted-foreground text-balance sm:whitespace-nowrap sm:text-[16px] sm:text-pretty">
              Pick a track on the Executive KB page — every chapter uses examples and framing that match your day job.
            </p>
          </div>

          <div className="mt-12 grid gap-4 lg:grid-cols-3">
            {ROLES.map((role, i) => {
              const theme = ROLE_THEMES[role.id];
              const Icon = role.icon;
              const kbCount = TRACK_KBS[role.id].length;
              return (
                <Link
                  key={role.id}
                  to="/executive-kb"
                  search={executiveKbTrackSearch(role.id)}
                  className={`group relative flex flex-col rounded-2xl border border-border bg-card p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-card-hover sm:p-7 ${theme.hoverBorder} animate-fade-in-up`}
                  style={{ animationDelay: `${i * 80}ms`, animationFillMode: "both" }}
                >
                  {role.popular ? (
                    <span className="absolute right-5 top-5 rounded-full bg-purple-light px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wider text-purple-dark">
                      Popular
                    </span>
                  ) : null}
                  <div
                    className={`inline-flex h-11 w-11 items-center justify-center rounded-xl ${theme.iconBox}`}
                  >
                    <Icon size={20} />
                  </div>
                  <h3 className="mt-5 text-[18px] font-medium tracking-tight">{role.title}</h3>
                  <p className="mt-2 flex-1 text-[14px] leading-relaxed text-muted-foreground">
                    {role.description}
                  </p>
                  <div className="mt-6 flex items-center justify-between">
                    <span className="text-[12px] font-medium text-muted-foreground">
                      {kbCount} Executive KBs
                    </span>
                    <span
                      className={`inline-flex items-center gap-1 text-[13px] font-medium transition-all group-hover:gap-2 ${theme.textHover.replace("group-hover/card:", "group-hover:")}`}
                    >
                      Choose track
                      <ArrowRight size={14} />
                    </span>
                  </div>
                </Link>
              );
            })}
          </div>
        </section>

        {/* ── Experience bento ─────────────────────────────────────── */}
        <section className="bg-muted/25 py-20 sm:py-28">
          <div className="mx-auto max-w-6xl px-5 sm:px-6">
            <div className="text-center">
              <p className="section-label">The experience</p>
              <h2 className="mx-auto mt-3 text-[clamp(1.5rem,3.5vw,2.25rem)] font-medium leading-[1.1] tracking-[-0.02em] text-balance sm:whitespace-nowrap sm:text-pretty">
                Designed for clarity, not credential collecting.
              </h2>
            </div>

            <div className="home-bento mt-12">
              <BentoCard
                span="lg:col-span-7"
                className="min-h-[220px] sm:min-h-[260px]"
              >
                <div className="flex h-full flex-col justify-between">
                  <div>
                    <div className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-purple-light text-purple-dark">
                      <Highlighter size={18} />
                    </div>
                    <h3 className="mt-5 text-[20px] font-medium tracking-tight sm:text-[22px]">
                      Highlight to understand
                    </h3>
                    <p className="mt-2 max-w-[400px] text-[14px] leading-relaxed text-muted-foreground">
                      Stuck on a sentence? Select it. A plain-English explanation appears in
                      place — no tab-switching, no search rabbit holes.
                    </p>
                  </div>
                  <p className="mt-6 text-[12px] font-medium uppercase tracking-wider text-purple">
                    Our differentiator
                  </p>
                </div>
              </BentoCard>

              <BentoCard span="lg:col-span-5">
                <div className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-teal-bg text-teal">
                  <ListChecks size={18} />
                </div>
                <h3 className="mt-4 text-[17px] font-medium tracking-tight">
                  3 real examples per concept
                </h3>
                <p className="mt-2 text-[14px] leading-relaxed text-muted-foreground">
                  Stripe, Duolingo, GitHub, Anthropic — every idea grounded in products you
                  already know.
                </p>
              </BentoCard>

              <BentoCard span="lg:col-span-4">
                <div className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-amber-bg text-amber">
                  <BarChart3 size={18} />
                </div>
                <h3 className="mt-4 text-[17px] font-medium tracking-tight">
                  Quiz after every chapter
                </h3>
                <p className="mt-2 text-[14px] leading-relaxed text-muted-foreground">
                  Judgment, not memorization. Categorize, order, and choose under real
                  constraints.
                </p>
              </BentoCard>

              <BentoCard span="lg:col-span-8">
                <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
                  <div className="max-w-md">
                    <div className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-blue-bg text-blue">
                      <Bookmark size={18} />
                    </div>
                    <h3 className="mt-4 text-[17px] font-medium tracking-tight">
                      Progress that follows you
                    </h3>
                    <p className="mt-2 text-[14px] leading-relaxed text-muted-foreground">
                      Close the tab. Switch devices. Your place, glossary, and streak pick up
                      exactly where you left off — stored locally, no account required.
                    </p>
                  </div>
                  <div className="shrink-0 rounded-xl border border-border bg-background/80 px-6 py-5 text-center">
                    <p className="home-stat-value text-[32px] font-medium tracking-tight text-foreground">
                      20–35
                    </p>
                    <p className="mt-1 text-[12px] text-muted-foreground">min per chapter</p>
                  </div>
                </div>
              </BentoCard>
            </div>
          </div>
        </section>

        {/* ── Featured paths ──────────────────────────────────────── */}
        <section className="mx-auto max-w-6xl px-5 py-20 sm:px-6 sm:py-28">
          <div className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-end">
            <div>
              <p className="section-label">Start anywhere</p>
              <h2 className="mt-3 text-[28px] font-medium tracking-[-0.02em] sm:text-[32px]">
                Three entry points. One standard of clarity.
              </h2>
            </div>
            <Link
              to="/executive-kb"
              className="inline-flex items-center gap-1 text-[14px] font-medium text-purple transition-colors hover:text-purple-dark"
            >
              View full library
              <ArrowRight size={14} />
            </Link>
          </div>

          <div className="mt-10 grid gap-4 lg:grid-cols-3">
            {FEATURED_BY_TRACK.map(({ track, roleId }) => {
              const kb = TRACK_KBS[roleId][0];
              if (!kb) return null;
              const firstSlug = kb.sequence[0]?.slug;
              const params = firstSlug ? chapterRouteParams(firstSlug) : undefined;
              const theme = ROLE_THEMES[roleId];
              if (!params) return null;

              return (
                <Link
                  key={track}
                  to="/executive-kb/$kbId/$chapterSlug"
                  params={params}
                  className={`group flex flex-col rounded-2xl border border-border bg-card p-6 transition-all hover:-translate-y-0.5 hover:shadow-brand ${theme.cardHover}`}
                >
                  <span
                    className={`inline-flex w-fit rounded-full px-2.5 py-0.5 text-[10px] font-semibold uppercase tracking-wider ${theme.badge}`}
                  >
                    {formatExecutiveKbLabel(track, kb.order)}
                  </span>
                  <h3 className="mt-4 text-[18px] font-medium tracking-tight group-hover:text-foreground">
                    {kb.title}
                  </h3>
                  <p className="mt-2 flex-1 text-[13px] leading-relaxed text-muted-foreground">
                    {kb.subtitle}
                  </p>
                  <div className="mt-5 flex items-center justify-between text-[12px] text-muted-foreground">
                    <span>
                      {kb.difficulty} · ~{kb.readingMinutes} min
                    </span>
                    <span
                      className={`inline-flex items-center gap-1 font-medium opacity-0 transition-all group-hover:opacity-100 ${theme.textHover.replace("group-hover/card:", "group-hover:")}`}
                    >
                      Start
                      <ArrowRight size={12} />
                    </span>
                  </div>
                </Link>
              );
            })}
          </div>
        </section>

        {/* ── Simulations ─────────────────────────────────────────── */}
        <section className="relative overflow-hidden bg-[#050A14] text-[#E8F4FD]">
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0 opacity-[0.12]"
            style={{
              backgroundImage:
                "linear-gradient(#00F5FF22 1px, transparent 1px), linear-gradient(90deg, #00F5FF22 1px, transparent 1px)",
              backgroundSize: "40px 40px",
            }}
          />
          <div className="relative mx-auto max-w-6xl px-5 py-20 sm:px-6 sm:py-24">
            <div className="flex flex-col gap-10 lg:flex-row lg:items-center lg:justify-between">
              <div className="max-w-xl">
                <div className="inline-flex items-center gap-2 font-mono text-[11px] tracking-[0.2em] text-[#00F5FF]">
                  <span className="relative flex h-1.5 w-1.5">
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#00F5FF] opacity-50" />
                    <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-[#00F5FF]" />
                  </span>
                  SIMULATIONS · BETA
                </div>
                <h2 className="mt-5 font-mono text-[28px] font-medium tracking-tight sm:text-[36px]">
                  {FEATURED_GAME.title}
                </h2>
                <p className="mt-4 text-[15px] leading-relaxed text-[#9FB8D1]">
                  {FEATURED_GAME.description} Eight minutes. No signup. Build orchestration
                  instincts no whitepaper can teach.
                </p>
                <Link
                  to={FEATURED_GAME.route}
                  className="mt-8 inline-flex items-center gap-2.5 rounded-md bg-[#00F5FF] px-6 py-3 font-mono text-[13px] font-semibold tracking-wider text-[#050A14] transition-shadow hover:shadow-[0_0_40px_-4px_#00F5FF80]"
                >
                  <Play size={14} fill="currentColor" />
                  LAUNCH SIMULATION
                </Link>
              </div>
              <div className="grid grid-cols-2 gap-3 sm:gap-4">
                <SimStat label="Duration" value={`~${FEATURED_GAME.minutes} min`} />
                <SimStat label="Difficulty" value={FEATURED_GAME.difficulty.toUpperCase()} />
                <SimStat label="Waves" value={String(FEATURED_GAME.waves)} />
                <SimStat label="Agents" value="ALPHA · BETA" />
              </div>
            </div>
          </div>
        </section>

        {/* ── Manifesto ───────────────────────────────────────────── */}
        <section className="mx-auto max-w-3xl px-5 py-20 text-center sm:px-6 sm:py-28">
          <p className="section-label">Why FactorBeam exists</p>
          <blockquote className="mt-6 space-y-6 text-[20px] font-medium leading-[1.55] tracking-[-0.01em] text-foreground/90 sm:text-[24px]">
            <p>Every resource on AI is either impossibly technical or dangerously vague.</p>
            <p className="text-muted-foreground">
              We translate complexity into product strategy — so you can ship with confidence,
              challenge vendors, and lead your team without a PhD.
            </p>
          </blockquote>
          <Link
            to="/about"
            className="mt-8 inline-flex items-center gap-1.5 text-[14px] font-medium text-purple hover:underline"
          >
            About the platform
            <ArrowRight size={14} />
          </Link>
        </section>

        {/* ── FAQ ─────────────────────────────────────────────────── */}
        <section className="mx-auto max-w-[680px] px-5 pb-8 sm:px-6">
          <div className="text-center">
            <p className="section-label">Common questions</p>
            <h2 className="mt-3 text-[26px] font-medium tracking-tight sm:text-[30px]">
              Frequently asked
            </h2>
          </div>
          <div className="hairline-t mt-8">
            <FaqItem
              q="Do I need a technical background?"
              a="None at all. Every chapter is written for operators, founders, and curious people — not engineers. Where math would normally appear, chapters use product analogies and real examples instead."
            />
            <FaqItem
              q="How long does each chapter take?"
              a="Most chapters take 20–35 minutes including reading, the three examples, and the quiz. There's no timer — and your progress is saved automatically."
            />
            <FaqItem
              q="What if I get stuck on a sentence?"
              a="Highlight it. You'll get a plain-English explanation in place. You can also flag it as confusing — those flags drive the next round of edits."
            />
            <FaqItem
              q="Is it really free?"
              a="Yes — no signup, no paywall, no ads."
            />
          </div>
        </section>

        {/* ── Closing CTA ─────────────────────────────────────────── */}
        <section className="mx-auto max-w-6xl px-5 pb-20 sm:px-6 sm:pb-28">
          <div className="relative overflow-hidden rounded-3xl bg-purple px-8 py-14 text-center text-primary-foreground sm:px-12 sm:py-16">
            <div
              aria-hidden
              className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(255,255,255,0.12),transparent_55%)]"
            />
            <div className="relative">
              <h2 className="text-[26px] font-medium tracking-tight sm:text-[32px]">
                Start with one chapter.
                <br />
                Leave with sharper judgment.
              </h2>
              <p className="mx-auto mt-4 max-w-md text-[15px] text-primary-foreground/85">
                Join product leaders worldwide who are building real AI intuition — one
                highlight at a time.
              </p>
              <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
                <Link
                  to="/executive-kb"
                  className="inline-flex items-center gap-2 rounded-md bg-background px-7 py-3.5 text-[15px] font-medium text-foreground transition-opacity hover:opacity-95"
                >
                  Explore Executive KB
                  <ArrowRight size={16} />
                </Link>
                {resumeParams ? (
                  <Link
                    to="/executive-kb/$kbId/$chapterSlug"
                    params={resumeParams}
                    className="inline-flex items-center gap-2 px-5 py-3.5 text-[15px] font-medium text-primary-foreground/90 transition-colors hover:text-primary-foreground"
                  >
                    {ctaLabel}
                  </Link>
                ) : null}
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

function StatCell({ value, label }: { value: string; label: string }) {
  return (
    <div className="px-5 py-8 text-center sm:px-6 sm:py-10">
      <p className="home-stat-value text-[28px] font-medium tracking-tight text-foreground sm:text-[32px]">
        {value}
      </p>
      <p className="mt-1.5 text-[12px] font-medium uppercase tracking-wider text-muted-foreground">
        {label}
      </p>
    </div>
  );
}

function BentoCard({
  children,
  span,
  className = "",
}: {
  children: React.ReactNode;
  span?: string;
  className?: string;
}) {
  return (
    <div
      className={`rounded-2xl border border-border bg-card p-6 transition-colors hover:border-purple/25 sm:p-7 ${span ?? ""} ${className}`}
    >
      {children}
    </div>
  );
}

function SimStat({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-lg border border-[#1E3A5F] bg-[#0A1220]/80 px-4 py-4">
      <p className="font-mono text-[10px] tracking-[0.18em] text-[#4A7FA5]">{label}</p>
      <p className="mt-1 font-mono text-[15px] font-medium text-[#E8F4FD]">{value}</p>
    </div>
  );
}
