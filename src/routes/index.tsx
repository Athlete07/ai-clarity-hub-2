import { createFileRoute, Link } from "@tanstack/react-router";
import { Nav, Footer } from "@/components/site-nav";
import { FaqItem } from "@/components/faq-item";
import { useProgress } from "@/lib/storage";
import { PLAYBOOKS } from "@/lib/playbooks";
import { conceptBySlug } from "@/lib/concepts";
import {
  ArrowRight,
  Highlighter,
  ListChecks,
  BarChart3,
  Bookmark,
  Briefcase,
  Sparkles,
  Globe2,
  CheckCircle2,
  Circle,
} from "lucide-react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "FactorBeam — AI playbooks for people who ship products" },
      {
        name: "description",
        content:
          "Plain-English AI playbooks for product managers, founders and operators. Highlight anything confusing and get an instant explanation. Built to an international standard, free forever.",
      },
      { property: "og:title", content: "FactorBeam — AI playbooks for people who ship products" },
      {
        property: "og:description",
        content:
          "Plain-English AI playbooks for product managers, founders and operators. Highlight anything confusing and get an instant explanation.",
      },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: Home,
});

const ROLES = [
  {
    id: "pm",
    title: "Product Managers",
    body: "Write better specs, challenge engineering, and spot vendor BS.",
    available: true,
  },
  {
    id: "founder",
    title: "Founders & Operators",
    body: "Decide what to build, what to buy, and what to skip in your AI stack.",
    available: false,
  },
  {
    id: "designer",
    title: "Designers & Researchers",
    body: "Design for probability, latency and failure — not just happy paths.",
    available: false,
  },
  {
    id: "leader",
    title: "Eng & Data Leaders",
    body: "Translate model decisions into business outcomes for non-technical stakeholders.",
    available: false,
  },
] as const;

function Home() {
  const { progress } = useProgress();

  // Aggregate progress across all playbooks
  const allSlugs = PLAYBOOKS.flatMap((p) => p.sequence.map((s) => s.slug));
  const doneCount = allSlugs.filter((slug) => progress[slug] === "done").length;
  const inProgressSlug = allSlugs.find((slug) => progress[slug] === "in-progress");
  const firstSlug = PLAYBOOKS[0]?.sequence[0]?.slug;
  const resumeSlug = inProgressSlug ?? allSlugs.find((s) => progress[s] !== "done") ?? firstSlug;
  const ctaLabel = doneCount === 0 ? "Start the first playbook" : "Resume where you left off";

  return (
    <>
      <Nav />
      <main className="overflow-x-hidden">
        {/* ── Hero ─────────────────────────────────────────────────── */}
        <section className="relative">
          {/* ambient mesh */}
          <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
            <div className="mesh-glow-1 absolute -top-24 left-1/2 h-[420px] w-[420px] -translate-x-1/2 rounded-full bg-purple-light/50 blur-[100px] dark:bg-purple-light/10" />
            <div className="mesh-glow-2 absolute top-40 right-[-80px] h-[260px] w-[260px] rounded-full bg-blue-bg/60 blur-[90px] dark:bg-blue-bg/10" />
          </div>

          <div className="mx-auto max-w-[760px] px-5 pt-12 pb-14 text-center sm:px-6 sm:pt-20 sm:pb-20">
            <span className="hairline inline-flex items-center gap-1.5 rounded-full bg-card px-3 py-1 text-[11px] font-medium text-muted-foreground sm:text-[12px]">
              <Globe2 size={12} className="text-purple" />
              Built to an international standard · Free, forever
            </span>

            <h1 className="mt-5 text-[34px] font-medium leading-[1.1] tracking-[-0.02em] sm:mt-6 sm:text-[56px] sm:leading-[1.05]">
              AI playbooks for people who{" "}
              <span className="text-purple">ship products</span>, not models.
            </h1>

            <p className="mx-auto mt-5 max-w-[560px] text-[15px] leading-[1.65] text-muted-foreground sm:mt-6 sm:text-[17px]">
              Plain-English playbooks on how modern AI actually works — written for product
              managers, founders and operators. Highlight any sentence to get an instant
              explanation, in any language you read.
            </p>

            <div className="mt-7 flex flex-col items-stretch justify-center gap-3 sm:mt-9 sm:flex-row sm:items-center">
              <Link
                to="/playbook/$slug"
                params={{ slug: resumeSlug ?? "what-is-a-model" }}
                className="inline-flex items-center justify-center gap-2 rounded-md bg-purple px-5 py-3 text-[14px] font-medium text-white transition-colors hover:bg-purple-dark"
              >
                {ctaLabel}
                <ArrowRight size={15} />
              </Link>
              <Link
                to="/playbooks"
                className="hairline inline-flex items-center justify-center rounded-md bg-card px-5 py-3 text-[14px] font-medium text-foreground transition-colors hover:bg-muted"
              >
                Browse all playbooks
              </Link>
            </div>

            {/* meta strip */}
            <div className="mx-auto mt-8 flex max-w-md flex-wrap items-center justify-center gap-x-5 gap-y-2 text-[11px] text-muted-foreground sm:mt-10 sm:text-[12px]">
              <span className="inline-flex items-center gap-1.5">
                <CheckCircle2 size={12} className="text-success" />
                No signup
              </span>
              <span className="inline-flex items-center gap-1.5">
                <CheckCircle2 size={12} className="text-success" />
                Works offline
              </span>
              <span className="inline-flex items-center gap-1.5">
                <CheckCircle2 size={12} className="text-success" />
                Updated monthly
              </span>
            </div>
          </div>
        </section>

        {/* ── Stat band ────────────────────────────────────────────── */}
        <section className="hairline-t hairline-b bg-muted/30">
          <div className="mx-auto grid max-w-6xl grid-cols-2 divide-y divide-border/60 sm:grid-cols-4 sm:divide-x sm:divide-y-0">
            {[
              { k: `${PLAYBOOKS.length}`, v: "Playbooks" },
              { k: `${allSlugs.length}`, v: "Chapters" },
              { k: "100%", v: "Free & open" },
              { k: "0", v: "Lines of jargon" },
            ].map((s) => (
              <div key={s.v} className="px-5 py-5 text-center sm:px-6 sm:py-7">
                <div className="text-[22px] font-medium tracking-tight text-foreground sm:text-[28px]">
                  {s.k}
                </div>
                <div className="mt-1 text-[11px] uppercase tracking-wider text-muted-foreground sm:text-[12px]">
                  {s.v}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ── Playbooks showcase ───────────────────────────────────── */}
        <section className="mx-auto max-w-6xl px-5 pt-16 sm:px-6 sm:pt-24">
          <div className="flex flex-col items-start justify-between gap-3 sm:flex-row sm:items-end">
            <div>
              <p className="section-label">The playbooks</p>
              <h2 className="mt-2 text-[24px] font-medium tracking-tight sm:text-[30px]">
                Sequenced like a good course. Skimmable like a good doc.
              </h2>
            </div>
            <Link
              to="/playbooks"
              className="text-[13px] font-medium text-purple hover:underline"
            >
              View all →
            </Link>
          </div>

          <div className="mt-8 grid gap-4 sm:mt-10 sm:grid-cols-2 sm:gap-5">
            {PLAYBOOKS.map((p, i) => {
              const pDone = p.sequence.filter((s) => progress[s.slug] === "done").length;
              const pPct = p.sequence.length
                ? Math.round((pDone / p.sequence.length) * 100)
                : 0;
              const nextSlug =
                p.sequence.find((s) => progress[s.slug] !== "done")?.slug ??
                p.sequence[0]?.slug;
              const firstThree = p.sequence
                .slice(0, 3)
                .map((s) => conceptBySlug(s.slug))
                .filter(Boolean);

              return (
                <Link
                  key={p.id}
                  to="/playbook/$slug"
                  params={{ slug: nextSlug ?? "what-is-a-model" }}
                  className="group hairline relative flex flex-col rounded-2xl bg-card p-5 transition-all hover:-translate-y-0.5 hover:border-purple/40 hover:shadow-[0_12px_40px_-12px_rgba(83,74,183,0.18)] sm:p-6"
                >
                  <div className="flex items-center gap-2">
                    <span className="rounded-full bg-purple-light px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wider text-purple-dark">
                      Playbook {String(i + 1).padStart(2, "0")}
                    </span>
                    <span className="text-[11px] text-muted-foreground">
                      {p.difficulty} · ~{p.readingMinutes} min
                    </span>
                  </div>

                  <h3 className="mt-4 text-[19px] font-medium tracking-tight text-foreground sm:text-[20px]">
                    {p.title}
                  </h3>
                  <p className="mt-1.5 text-[13px] leading-relaxed text-muted-foreground sm:text-[14px]">
                    {p.subtitle}
                  </p>

                  {/* preview chapters */}
                  <ul className="mt-5 space-y-2">
                    {firstThree.map((c) => {
                      const state = progress[c!.slug];
                      const Icon = state === "done" ? CheckCircle2 : Circle;
                      return (
                        <li
                          key={c!.slug}
                          className="flex items-start gap-2 text-[12.5px] text-foreground/85"
                        >
                          <Icon
                            size={13}
                            className={`mt-0.5 shrink-0 ${
                              state === "done" ? "text-success" : "text-muted-foreground/50"
                            }`}
                          />
                          <span className="line-clamp-1">{c!.shortTitle}</span>
                        </li>
                      );
                    })}
                    {p.sequence.length > 3 && (
                      <li className="pl-[21px] text-[11.5px] text-muted-foreground">
                        + {p.sequence.length - 3} more chapter{p.sequence.length - 3 === 1 ? "" : "s"}
                      </li>
                    )}
                  </ul>

                  {/* footer */}
                  <div className="mt-6 flex items-center justify-between">
                    <div className="flex flex-1 items-center gap-2">
                      <div className="h-1 flex-1 max-w-[120px] overflow-hidden rounded-full bg-muted">
                        <div
                          className="h-full rounded-full bg-purple transition-all"
                          style={{ width: `${pPct}%` }}
                        />
                      </div>
                      <span className="text-[10.5px] font-medium text-muted-foreground">
                        {pPct}%
                      </span>
                    </div>
                    <span className="inline-flex items-center gap-1 text-[12px] font-medium text-purple group-hover:gap-1.5 transition-all">
                      {pPct === 0 ? "Start" : pPct === 100 ? "Review" : "Resume"}
                      <ArrowRight size={13} />
                    </span>
                  </div>
                </Link>
              );
            })}
          </div>
        </section>

        {/* ── How it works ─────────────────────────────────────────── */}
        <section className="mx-auto max-w-6xl px-5 pt-20 sm:px-6 sm:pt-28">
          <div className="text-center">
            <p className="section-label">Why people stick with it</p>
            <h2 className="mx-auto mt-2 max-w-[560px] text-[24px] font-medium tracking-tight sm:text-[30px]">
              Four small things that make AI finally click.
            </h2>
          </div>

          <div className="mt-10 grid gap-3 sm:mt-12 sm:grid-cols-2 sm:gap-4 lg:grid-cols-4">
            <FeatureCard
              icon={<Highlighter size={16} />}
              tone="purple"
              title="Highlight to understand"
              body="Select any sentence, get a plain explanation. No tab-switching, no search rabbit-holes."
            />
            <FeatureCard
              icon={<ListChecks size={16} />}
              tone="teal"
              title="3 real examples each"
              body="Every sub-concept is grounded in real products — Stripe, Duolingo, GitHub, Anthropic."
            />
            <FeatureCard
              icon={<BarChart3 size={16} />}
              tone="amber"
              title="Quiz after every chapter"
              body="Categorize, order, and choose — built to test judgment, not memory."
            />
            <FeatureCard
              icon={<Bookmark size={16} />}
              tone="blue"
              title="Progress that follows you"
              body="Close the tab, switch devices. Pick up exactly where you stopped."
            />
          </div>
        </section>

        {/* ── Who it's for (roles) ─────────────────────────────────── */}
        <section className="mx-auto max-w-6xl px-5 pt-20 sm:px-6 sm:pt-28">
          <div className="text-center">
            <p className="section-label">Who it's for</p>
            <h2 className="mx-auto mt-2 max-w-[560px] text-[24px] font-medium tracking-tight sm:text-[30px]">
              Same concepts. Sequenced for how you actually work.
            </h2>
          </div>

          <div className="mt-10 grid gap-3 sm:grid-cols-2 sm:gap-4 lg:grid-cols-4">
            {ROLES.map((r) => (
              <div
                key={r.id}
                className={`hairline relative flex flex-col rounded-xl bg-card p-5 ${
                  r.available ? "" : "opacity-70"
                }`}
              >
                <div className="flex items-center gap-2">
                  <span className="flex h-7 w-7 items-center justify-center rounded-md bg-purple-light text-purple-dark">
                    <Briefcase size={13} />
                  </span>
                  <h3 className="text-[14px] font-semibold text-foreground">{r.title}</h3>
                </div>
                <p className="mt-3 text-[12.5px] leading-relaxed text-muted-foreground">
                  {r.body}
                </p>
                <span
                  className={`mt-4 inline-flex w-fit items-center rounded-full px-2 py-0.5 text-[10px] font-medium ${
                    r.available
                      ? "bg-success-bg text-success"
                      : "bg-muted text-muted-foreground"
                  }`}
                >
                  {r.available ? "Available now" : "Coming soon"}
                </span>
              </div>
            ))}
          </div>
        </section>

        {/* ── International / philosophy ───────────────────────────── */}
        <section className="mx-auto mt-20 max-w-5xl px-5 sm:mt-28 sm:px-6">
          <div className="hairline relative overflow-hidden rounded-2xl bg-card p-6 sm:p-10">
            <div className="pointer-events-none absolute -right-20 -top-20 h-[260px] w-[260px] rounded-full bg-purple-light/60 blur-[80px] dark:bg-purple-light/15" />
            <div className="relative grid gap-6 sm:grid-cols-[1fr_auto] sm:items-center">
              <div>
                <span className="inline-flex items-center gap-1.5 rounded-full bg-purple-light px-2.5 py-1 text-[11px] font-semibold text-purple-dark">
                  <Sparkles size={12} />
                  Built for the globe
                </span>
                <h3 className="mt-4 text-[22px] font-medium leading-snug tracking-tight sm:text-[26px]">
                  One source of truth for how AI actually works — in your language, on your device.
                </h3>
                <p className="mt-3 max-w-[560px] text-[13.5px] leading-relaxed text-muted-foreground sm:text-[14.5px]">
                  Every chapter is reviewed for clarity across regions, examples are pulled from
                  products built worldwide, and the whole experience is designed to work on the
                  smallest phone and the largest monitor — at the same fidelity.
                </p>
              </div>
              <Link
                to="/about"
                className="hairline inline-flex w-fit items-center gap-1.5 rounded-md bg-background px-4 py-2.5 text-[13px] font-medium text-foreground transition-colors hover:bg-muted"
              >
                Why this exists
                <ArrowRight size={13} />
              </Link>
            </div>
          </div>
        </section>

        {/* ── FAQ ──────────────────────────────────────────────────── */}
        <section className="mx-auto mt-20 max-w-[680px] px-5 sm:mt-28 sm:px-6">
          <div className="text-center">
            <p className="section-label">Common questions</p>
            <h2 className="mt-2 text-[24px] font-medium tracking-tight sm:text-[30px]">
              Frequently asked
            </h2>
          </div>
          <div className="hairline-t mt-8">
            <FaqItem
              q="Do I need a technical background?"
              a="None at all. Every chapter is written for operators, founders, and curious people — not engineers. Where math would normally appear, we use product analogies and real examples instead."
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
              q="Will this stay updated as AI evolves?"
              a="Yes. Every chapter shows a last-updated date and is reviewed at least once a month against the latest model releases, pricing and capabilities."
            />
            <FaqItem
              q="Is it really free?"
              a="Yes — no signup, no paywall, no ads. The goal is to make a single, trustworthy AI playbook accessible everywhere."
            />
          </div>
        </section>

        {/* ── Final CTA ────────────────────────────────────────────── */}
        <section className="mx-auto mt-20 max-w-3xl px-5 pb-4 text-center sm:mt-28 sm:px-6">
          <h2 className="text-[26px] font-medium leading-tight tracking-tight sm:text-[34px]">
            Stop nodding along in AI meetings.
          </h2>
          <p className="mx-auto mt-3 max-w-md text-[14px] text-muted-foreground sm:text-[15px]">
            Read one chapter today. You'll understand more about how models actually work than 90%
            of the people in the room.
          </p>
          <Link
            to="/playbook/$slug"
            params={{ slug: resumeSlug ?? "what-is-a-model" }}
            className="mt-7 inline-flex items-center justify-center gap-2 rounded-md bg-purple px-6 py-3 text-[14px] font-medium text-white transition-colors hover:bg-purple-dark"
          >
            {ctaLabel}
            <ArrowRight size={15} />
          </Link>
        </section>
      </main>
      <Footer />
    </>
  );
}

const toneMap = {
  purple: { bg: "bg-purple-light", fg: "text-purple-dark" },
  teal: { bg: "bg-teal-bg", fg: "text-teal" },
  amber: { bg: "bg-amber-bg", fg: "text-amber" },
  blue: { bg: "bg-blue-bg", fg: "text-blue" },
} as const;

function FeatureCard({
  icon,
  tone,
  title,
  body,
}: {
  icon: React.ReactNode;
  tone: keyof typeof toneMap;
  title: string;
  body: string;
}) {
  const t = toneMap[tone];
  return (
    <div className="hairline rounded-xl bg-card p-5 transition-colors hover:border-purple/30">
      <div
        className={`mb-3 inline-flex h-9 w-9 items-center justify-center rounded-md ${t.bg} ${t.fg}`}
      >
        {icon}
      </div>
      <h3 className="text-[14px] font-semibold text-foreground">{title}</h3>
      <p className="mt-1.5 text-[13px] leading-relaxed text-muted-foreground">{body}</p>
    </div>
  );
}
