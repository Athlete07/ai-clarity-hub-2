import { createFileRoute, Link } from "@tanstack/react-router";
import { FactorBeamLogo } from "@/components/factorbeam-logo";
import { Nav, Footer } from "@/components/site-nav";
import { brandOgMeta } from "@/lib/brand";
import { AuthorPortrait } from "@/components/author-portrait";
import { CREATOR } from "@/lib/creator";
import { EXECUTIVE_KBS } from "@/lib/executive-kb";
import { FOUNDER_EXECUTIVE_KBS } from "@/lib/executive-kb-founder";
import { BUSINESS_LEADER_EXECUTIVE_KBS } from "@/lib/executive-kb-business-leader";
import { ROLES, ROLE_THEMES } from "@/lib/role-themes";
import {
  ArrowRight,
  BarChart3,
  Bookmark,
  BookOpen,
  Highlighter,
  ListChecks,
  PenLine,
  RefreshCw,
  Shield,
  Sparkles,
  Target,
  X,
} from "lucide-react";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — FactorBeam" },
      {
        name: "description",
        content:
          "FactorBeam is an open Executive KB that translates AI complexity into product strategy. Built for PMs, founders, and business leaders who need to ship — not research.",
      },
      { property: "og:title", content: "About FactorBeam — AI clarity for product leaders" },
      {
        property: "og:description",
        content:
          "We translate AI complexity into product strategy. Sequenced chapters, real examples, highlight-to-explain — free for leaders worldwide.",
      },
      { property: "og:url", content: "/about" },
      { property: "og:type", content: "website" },
      ...brandOgMeta(),
    ],
    links: [{ rel: "canonical", href: "/about" }],
  }),
  component: About,
});

const ALL_KBS = [...EXECUTIVE_KBS, ...FOUNDER_EXECUTIVE_KBS, ...BUSINESS_LEADER_EXECUTIVE_KBS];
const TOTAL_CHAPTERS = ALL_KBS.reduce((n, kb) => n + kb.sequence.length, 0);

const EDITORIAL_BAR = [
  {
    icon: Target,
    title: "Roadmap-review test",
    body: 'Every chapter must pass one question: "Would a non-technical PM feel confident defending this in a roadmap review?" If not, it gets rewritten.',
  },
  {
    icon: X,
    title: "No filler",
    body: "No long histories of AI research, no celebrity founder stories, no hype about AGI timelines. Every paragraph exists to sharpen product judgment.",
  },
  {
    icon: BookOpen,
    title: "Cross-domain examples",
    body: "Consumer, B2B, and infrastructure — three real product scenarios per concept. Pattern recognition, not memorization.",
  },
  {
    icon: RefreshCw,
    title: "Living document",
    body: "Models, APIs, and best practices evolve. Chapters are updated as the field moves. Reader corrections are welcome.",
  },
];

const PRINCIPLES = [
  { label: "No PhD required", detail: "Operators first, engineers second." },
  { label: "No vendor pitch", detail: "Education, not affiliate links." },
  { label: "No paywall", detail: "Free worldwide. No signup." },
  { label: "No credential theater", detail: "Clarity over certificates." },
];

function About() {
  return (
    <>
      <Nav />
      <main className="overflow-x-hidden">
        {/* ── Hero ───────────────────────────────────────────────── */}
        <section className="relative home-hero-mesh">
          <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
            <div className="mesh-glow-1 absolute -top-32 left-1/4 h-[420px] w-[420px] rounded-full bg-purple-light/40 blur-[120px] dark:bg-purple-light/8" />
            <div className="mesh-glow-2 absolute right-0 bottom-0 h-[320px] w-[320px] rounded-full bg-amber-bg/40 blur-[100px] dark:bg-amber-bg/10" />
          </div>

          <div className="mx-auto max-w-6xl px-5 pt-14 pb-16 sm:px-6 sm:pt-20 sm:pb-24 lg:grid lg:grid-cols-2 lg:items-center lg:gap-16 lg:pt-24 lg:pb-28">
            <div>
              <div className="mb-2">
                <FactorBeamLogo context="hero" />
              </div>
              <p className="section-label">About FactorBeam</p>
              <h1 className="mt-4 text-[38px] font-medium leading-[1.05] tracking-[-0.035em] sm:text-[48px] lg:text-[54px]">
                Clarity is a
                <br />
                <span className="text-purple">product decision.</span>
              </h1>
              <p className="mt-6 max-w-[480px] text-[16px] leading-[1.65] text-muted-foreground sm:text-[17px]">
                FactorBeam is an open Executive KB for PMs, founders, and business
                leaders — translating AI complexity into the language of shipping.
              </p>
              <Link
                to="/executive-kb"
                className="btn-primary mt-8 inline-flex px-6 py-3 text-[14px]"
              >
                Explore Executive KB
                <ArrowRight size={15} />
              </Link>
            </div>

            <div className="mt-12 lg:mt-0">
              <div className="relative rounded-2xl border border-border bg-card p-6 shadow-brand sm:p-8">
                <div className="absolute -top-3 left-6 rounded-full border border-border bg-background px-3 py-1 text-[10px] font-semibold uppercase tracking-wider text-muted-foreground">
                  The problem we solve
                </div>
                <blockquote className="space-y-5 pt-2 text-[17px] font-medium leading-[1.6] tracking-[-0.01em] sm:text-[19px]">
                  <p>Every resource on AI is either impossibly technical or dangerously vague.</p>
                  <p className="text-muted-foreground">
                    FactorBeam exists to close that gap — mathematical complexity
                    translated into product strategy, so you ship with confidence.
                  </p>
                  <p className="text-[15px] font-normal text-foreground/90">
                    No PhD required. No vendor pitch. Just the concepts that matter
                    when you&apos;re building AI-powered products.
                  </p>
                </blockquote>
              </div>
            </div>
          </div>
        </section>

        {/* ── Stats ──────────────────────────────────────────────── */}
        <section className="border-y border-border/80 bg-muted/30">
          <div className="mx-auto grid max-w-6xl grid-cols-2 divide-x divide-border/60 sm:grid-cols-4">
            <StatCell value={String(ALL_KBS.length)} label="Executive KBs" />
            <StatCell value="3" label="Role tracks" />
            <StatCell value={`${TOTAL_CHAPTERS}+`} label="Chapters" />
            <StatCell value="$0" label="Forever" />
          </div>
        </section>

        {/* ── What we build ──────────────────────────────────────── */}
        <section className="mx-auto max-w-6xl px-5 py-20 sm:px-6 sm:py-28">
          <div>
            <p className="section-label">What Executive KB is</p>
            <h2 className="mt-3 text-[clamp(1.5rem,3.5vw,2.25rem)] font-medium leading-[1.1] tracking-[-0.02em] text-balance sm:whitespace-nowrap sm:text-pretty">
              Structured, sequenced, and built to be used.
            </h2>
            <p className="mt-4 text-[15px] leading-relaxed text-muted-foreground text-balance sm:whitespace-nowrap sm:text-[16px] sm:text-pretty">
              Not a blog archive. A learning system designed for busy leaders who need judgment, not jargon.
            </p>
          </div>

          <div className="home-bento mt-12">
            <BentoCard span="lg:col-span-12" className="sm:p-8">
              <div className="flex flex-col gap-6 lg:flex-row lg:items-start lg:justify-between">
                <div className="max-w-2xl">
                  <span className="font-mono text-[11px] tracking-widest text-muted-foreground">
                    01
                  </span>
                  <h3 className="mt-2 text-[22px] font-medium tracking-tight sm:text-[24px]">
                    Executive KB, not blog posts
                  </h3>
                  <p className="mt-3 text-[14px] leading-relaxed text-muted-foreground sm:text-[15px]">
                    Each Executive KB is a sequenced set of chapters that build on
                    each other — foundations first, advanced concepts later. No
                    jumping between scattered articles. Every KB shows difficulty
                    and reading time upfront, so you know what you&apos;re signing up
                    for.
                  </p>
                </div>
                <div className="flex shrink-0 flex-wrap gap-2 lg:max-w-[220px] lg:justify-end">
                  {["Beginner", "Intermediate", "Advanced"].map((level) => (
                    <span
                      key={level}
                      className="rounded-full border border-border bg-muted/50 px-3 py-1 text-[11px] font-medium text-muted-foreground"
                    >
                      {level}
                    </span>
                  ))}
                </div>
              </div>
            </BentoCard>

            <BentoCard span="lg:col-span-6">
              <PillarHeader n="02" icon={ListChecks} tone="teal" />
              <h3 className="mt-4 text-[18px] font-medium tracking-tight">
                Three real examples per concept
              </h3>
              <p className="mt-2 text-[14px] leading-relaxed text-muted-foreground">
                Every section anchors theory to concrete product scenarios. Theory
                without application is trivia — each concept maps to a situation
                you&apos;ll face in a roadmap review.
              </p>
            </BentoCard>

            <BentoCard span="lg:col-span-6">
              <PillarHeader n="03" icon={Highlighter} tone="purple" />
              <h3 className="mt-4 text-[18px] font-medium tracking-tight">
                Highlight anything you don&apos;t get
              </h3>
              <p className="mt-2 text-[14px] leading-relaxed text-muted-foreground">
                Stuck on jargon? Select it for an instant, in-place explanation.
                No tab-switching. Unclear sentences are a signal to improve the
                content — and your feedback drives the next edit.
              </p>
            </BentoCard>

            <BentoCard span="lg:col-span-6">
              <PillarHeader n="04" icon={BarChart3} tone="amber" />
              <h3 className="mt-4 text-[18px] font-medium tracking-tight">
                Quizzes at the end of every chapter
              </h3>
              <p className="mt-2 text-[14px] leading-relaxed text-muted-foreground">
                Reading isn&apos;t understanding. Each chapter ends with a quick quiz
                to surface gaps before you move on — pass it, or re-read what
                tripped you up.
              </p>
            </BentoCard>

            <BentoCard span="lg:col-span-6">
              <PillarHeader n="05" icon={Bookmark} tone="blue" />
              <h3 className="mt-4 text-[18px] font-medium tracking-tight">
                Progress that follows you
              </h3>
              <p className="mt-2 text-[14px] leading-relaxed text-muted-foreground">
                Saved locally as you read. Build a streak, resume exactly where you
                left off, and track completion across every Executive KB — no account
                required.
              </p>
            </BentoCard>
          </div>
        </section>

        {/* ── Who it's for ───────────────────────────────────────── */}
        <section className="bg-muted/25 py-20 sm:py-28">
          <div className="mx-auto max-w-6xl px-5 sm:px-6">
            <div className="text-center">
              <p className="section-label">Who it&apos;s for</p>
              <h2 className="mx-auto mt-3 text-[clamp(1.5rem,3.5vw,2rem)] font-medium leading-[1.15] tracking-[-0.02em]">
                Same AI concepts.
                <span className="mt-1 block text-purple sm:mt-1.5">
                  Framed for how you actually work.
                </span>
              </h2>
            </div>

            <div className="mt-12 grid gap-4 lg:grid-cols-3">
              {ROLES.map((role) => {
                const theme = ROLE_THEMES[role.id];
                const Icon = role.icon;
                return (
                  <div
                    key={role.id}
                    className={`rounded-2xl border border-border bg-card p-6 sm:p-7 ${role.popular ? "ring-1 ring-purple/20" : ""}`}
                  >
                    <div
                      className={`inline-flex h-10 w-10 items-center justify-center rounded-lg ${theme.iconBox}`}
                    >
                      <Icon size={18} />
                    </div>
                    <h3 className="mt-4 text-[16px] font-medium">{role.title}</h3>
                    <p className="mt-2 text-[14px] leading-relaxed text-muted-foreground">
                      {role.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* ── Editorial standards ─────────────────────────────────── */}
        <section className="mx-auto max-w-6xl px-5 py-20 sm:px-6 sm:py-28">
          <div className="lg:grid lg:grid-cols-12 lg:gap-12">
            <div className="lg:col-span-4 lg:sticky lg:top-24 lg:self-start">
              <p className="section-label">How it&apos;s written</p>
              <h2 className="mt-3 text-[28px] font-medium tracking-[-0.02em] sm:text-[32px]">
                Written in public.
                <br />
                Held to a high bar.
              </h2>
              <p className="mt-4 text-[15px] leading-relaxed text-muted-foreground">
                Every chapter is researched, structured, and rewritten until it
                earns a place in your workflow — not your bookmarks folder.
              </p>
            </div>

            <div className="mt-10 space-y-4 lg:col-span-8 lg:mt-0">
              {EDITORIAL_BAR.map((item, i) => {
                const Icon = item.icon;
                return (
                  <div
                    key={item.title}
                    className="group flex gap-5 rounded-2xl border border-border bg-card p-5 transition-colors hover:border-purple/25 sm:p-6"
                  >
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-muted text-muted-foreground transition-colors group-hover:bg-purple-light group-hover:text-purple-dark">
                      <Icon size={18} />
                    </div>
                    <div>
                      <div className="flex items-baseline gap-3">
                        <span className="font-mono text-[11px] text-muted-foreground/60">
                          {String(i + 1).padStart(2, "0")}
                        </span>
                        <h3 className="text-[16px] font-medium tracking-tight">
                          {item.title}
                        </h3>
                      </div>
                      <p className="mt-2 text-[14px] leading-relaxed text-muted-foreground">
                        {item.body}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* ── Principles strip ─────────────────────────────────────── */}
        <section className="border-y border-border/80 bg-muted/30">
          <div className="mx-auto grid max-w-6xl grid-cols-2 gap-px bg-border/60 sm:grid-cols-4">
            {PRINCIPLES.map((p) => (
              <div key={p.label} className="bg-background px-5 py-8 text-center sm:px-6">
                <p className="text-[13px] font-semibold tracking-tight text-foreground">
                  {p.label}
                </p>
                <p className="mt-1.5 text-[12px] text-muted-foreground">{p.detail}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ── Author ─────────────────────────────────────────────── */}
        <section className="mx-auto max-w-6xl px-5 py-20 sm:px-6 sm:py-28">
          <div className="overflow-hidden rounded-3xl border border-border bg-card">
            <div className="grid lg:grid-cols-5">
              <div className="flex flex-col items-center justify-center bg-muted/40 px-8 py-12 lg:col-span-2 lg:py-16">
                <AuthorPortrait size="hero" loading="eager" priority />
                <p className="mt-5 text-[17px] font-medium tracking-tight">{CREATOR.name}</p>
                <p className="mt-1 text-[13px] text-muted-foreground">{CREATOR.role}</p>
                <p className="mt-1 text-[12px] text-muted-foreground/80">{CREATOR.location}</p>
              </div>
              <div className="flex flex-col justify-center px-8 py-10 lg:col-span-3 lg:px-12 lg:py-14">
                <div className="inline-flex w-fit items-center gap-1.5 rounded-full border border-purple/15 bg-purple-light/50 px-3 py-1 text-[11px] font-medium text-purple-dark dark:bg-purple-light/15 dark:text-purple">
                  <PenLine size={11} />
                  Behind the Executive KB
                </div>
                <p className="mt-5 text-[16px] leading-relaxed text-foreground/90 sm:text-[17px]">
                  {CREATOR.shortBio}
                </p>
                <p className="mt-4 text-[14px] leading-relaxed text-muted-foreground">
                  {CREATOR.longBio[1]}
                </p>
                <div className="mt-6 flex items-start gap-3 rounded-xl border border-border bg-muted/30 p-4">
                  <Shield size={16} className="mt-0.5 shrink-0 text-muted-foreground" />
                  <p className="text-[13px] leading-relaxed text-muted-foreground">
                    {CREATOR.aiDisclosure}
                  </p>
                </div>
                <Link
                  to="/creator"
                  className="mt-6 inline-flex items-center gap-1.5 text-[14px] font-medium text-purple transition-colors hover:text-purple-dark"
                >
                  Meet the author
                  <ArrowRight size={14} />
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* ── Closing CTA ─────────────────────────────────────────── */}
        <section className="mx-auto max-w-6xl px-5 pb-20 sm:px-6 sm:pb-28">
          <div className="relative overflow-hidden rounded-3xl bg-purple px-8 py-14 text-center text-primary-foreground sm:px-12 sm:py-16">
            <div
              aria-hidden
              className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,rgba(255,255,255,0.1),transparent_55%)]"
            />
            <div className="relative">
              <Sparkles size={24} className="mx-auto opacity-80" aria-hidden />
              <h2 className="mt-4 text-[26px] font-medium tracking-tight sm:text-[32px]">
                Executive KB is open.
              </h2>
              <p className="mx-auto mt-4 max-w-md text-[15px] text-primary-foreground/85">
                Free. No signup. Start reading in the next 60 seconds — from anywhere
                in the world.
              </p>
              <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
                <Link
                  to="/executive-kb"
                  className="inline-flex items-center gap-2 rounded-md bg-background px-7 py-3.5 text-[15px] font-medium text-foreground transition-opacity hover:opacity-95"
                >
                  Browse Executive KB
                  <ArrowRight size={16} />
                </Link>
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 px-5 py-3.5 text-[15px] font-medium text-primary-foreground/90 transition-colors hover:text-primary-foreground"
                >
                  Send feedback
                </Link>
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

const PILLAR_TONES = {
  purple: { box: "bg-purple-light text-purple-dark", icon: Highlighter },
  teal: { box: "bg-teal-bg text-teal", icon: ListChecks },
  amber: { box: "bg-amber-bg text-amber", icon: BarChart3 },
  blue: { box: "bg-blue-bg text-blue", icon: Bookmark },
} as const;

function PillarHeader({
  n,
  icon: Icon,
  tone,
}: {
  n: string;
  icon: React.ComponentType<{ size?: number }>;
  tone: keyof typeof PILLAR_TONES;
}) {
  const t = PILLAR_TONES[tone];
  return (
    <div className="flex items-center justify-between">
      <span className="font-mono text-[11px] tracking-widest text-muted-foreground">{n}</span>
      <div className={`flex h-9 w-9 items-center justify-center rounded-lg ${t.box}`}>
        <Icon size={16} />
      </div>
    </div>
  );
}
