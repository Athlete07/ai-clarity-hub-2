import { createFileRoute, Link } from "@tanstack/react-router";
import { Nav, Footer } from "@/components/site-nav";
import { FaqItem } from "@/components/faq-item";
import { useProgress } from "@/lib/storage";
import { EXECUTIVE_KBS, chapterRouteParams, formatExecutiveKbLabel } from "@/lib/executive-kb";
import { conceptBySlug } from "@/lib/concepts";
import {
  ArrowRight,
  Highlighter,
  ListChecks,
  BarChart3,
  Bookmark,
  CheckCircle2,
  Circle,
} from "lucide-react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "FactorBeam — Executive KB for product leaders" },
      {
        name: "description",
        content:
          "Plain-English Executive KB for product managers and founders. Highlight anything confusing and get an instant explanation. Free, no signup.",
      },
      { property: "og:title", content: "FactorBeam — Executive KB for product leaders" },
      {
        property: "og:description",
        content:
          "Plain-English Executive KB for product leaders. Highlight anything confusing and get an instant explanation.",
      },
      { property: "og:url", content: "/" },
      { property: "og:type", content: "website" },
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

function Home() {
  const { progress } = useProgress();

  const allSlugs = EXECUTIVE_KBS.flatMap((p) => p.sequence.map((s) => s.slug));
  const doneCount = allSlugs.filter((slug) => progress[slug] === "done").length;
  const inProgressSlug = allSlugs.find((slug) => progress[slug] === "in-progress");
  const firstSlug = EXECUTIVE_KBS[0]?.sequence[0]?.slug;
  const resumeSlug = inProgressSlug ?? allSlugs.find((s) => progress[s] !== "done") ?? firstSlug;
  const resumeParams = resumeSlug ? chapterRouteParams(resumeSlug) : undefined;
  const ctaLabel = doneCount === 0 ? "Start reading" : "Resume reading";

  return (
    <>
      <Nav />
      <main className="overflow-x-hidden">
        {/* ── Hero ─────────────────────────────────────────────────── */}
        <section className="relative">
          <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
            <div className="mesh-glow-1 absolute -top-24 left-1/2 h-[420px] w-[420px] -translate-x-1/2 rounded-full bg-purple-light/50 blur-[100px] dark:bg-purple-light/10" />
          </div>

          <div className="mx-auto max-w-[780px] px-5 pt-16 pb-16 text-center sm:px-6 sm:pt-28 sm:pb-24">
            <h1 className="text-[36px] font-medium leading-[1.08] tracking-[-0.025em] sm:text-[60px] sm:leading-[1.02]">
              Executive KB for people who{" "}
              <span className="text-purple">ship products</span>.
            </h1>

            <p className="mx-auto mt-6 max-w-[540px] text-[15.5px] leading-[1.65] text-muted-foreground sm:mt-7 sm:text-[18px]">
              Plain-English chapters on how modern AI actually works. Highlight any sentence
              you don't understand — get an explanation in place.
            </p>

            <div className="mt-8 flex flex-col items-stretch justify-center gap-3 sm:mt-10 sm:flex-row sm:items-center">
              {resumeParams ? (
                <Link
                  to="/executive-kb/$kbId/$chapterSlug"
                  params={resumeParams}
                  className="btn-primary px-6 py-3 text-[14px]"
                >
                  {ctaLabel}
                  <ArrowRight size={15} />
                </Link>
              ) : null}
              <Link
                to="/executive-kb"
                className="inline-flex items-center justify-center px-2 py-3 text-[14px] font-medium text-foreground/80 transition-colors hover:text-foreground"
              >
                Browse Executive KB →
              </Link>
            </div>
          </div>
        </section>

        {/* ── Executive KB showcase (the product) ─────────────────────── */}
        <section className="mx-auto max-w-6xl px-5 pt-8 sm:px-6 sm:pt-12">
          <div className="flex flex-col items-start justify-between gap-3 sm:flex-row sm:items-end">
            <div>
              <p className="section-label">Executive KB</p>
              <h2 className="mt-2 text-[26px] font-medium tracking-tight sm:text-[32px]">
                Sequenced like a course. Skimmable like a doc.
              </h2>
            </div>
            <Link
              to="/executive-kb"
              className="text-[13px] font-medium text-purple hover:underline"
            >
              View all →
            </Link>
          </div>

          <div className="mt-8 grid gap-4 sm:mt-10 sm:grid-cols-2 sm:gap-5">
            {EXECUTIVE_KBS.map((p) => {
              const pDone = p.sequence.filter((s) => progress[s.slug] === "done").length;
              const pPct = p.sequence.length
                ? Math.round((pDone / p.sequence.length) * 100)
                : 0;
              const nextSlug =
                p.sequence.find((s) => progress[s.slug] !== "done")?.slug ??
                p.sequence[0]?.slug;
              const nextParams = nextSlug ? chapterRouteParams(nextSlug) : undefined;
              const firstThree = p.sequence
                .slice(0, 3)
                .map((s) => conceptBySlug(s.slug))
                .filter(Boolean);

              if (!nextParams) return null;

              return (
                <Link
                  key={p.id}
                  to="/executive-kb/$kbId/$chapterSlug"
                  params={nextParams}
                  className="group hairline relative flex flex-col rounded-2xl bg-card p-5 transition-all hover:-translate-y-0.5 hover:border-purple/40 hover:shadow-brand sm:p-6"
                >
                  <div className="flex items-center gap-2">
                    <span className="rounded-full bg-purple-light px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wider text-purple-dark">
                      {formatExecutiveKbLabel("pm", p.order)}
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

        {/* ── Why people stick with it ─────────────────────────────── */}
        <section className="mx-auto max-w-6xl px-5 pt-24 sm:px-6 sm:pt-32">
          <div className="text-center">
            <p className="section-label">Why it works</p>
            <h2 className="mx-auto mt-2 max-w-[560px] text-[26px] font-medium tracking-tight sm:text-[32px]">
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

        {/* ── Who it's for (only what exists today) ────────────────── */}
        <section className="mx-auto max-w-3xl px-5 pt-24 text-center sm:px-6 sm:pt-32">
          <p className="section-label">Who it's for</p>
          <h2 className="mx-auto mt-2 text-[26px] font-medium tracking-tight sm:text-[32px]">
            Written for product managers.
          </h2>
          <p className="mx-auto mt-4 max-w-[520px] text-[14.5px] leading-relaxed text-muted-foreground sm:text-[15.5px]">
            If you write specs, talk to engineers about models, or evaluate AI vendors —
            this is for you. Executive KB for founders, designers and engineering leaders
            are in the works.
          </p>
        </section>

        {/* ── FAQ ──────────────────────────────────────────────────── */}
        <section className="mx-auto mt-24 max-w-[680px] px-5 sm:mt-32 sm:px-6">
          <div className="text-center">
            <p className="section-label">Common questions</p>
            <h2 className="mt-2 text-[26px] font-medium tracking-tight sm:text-[32px]">
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

        <div className="pb-16 sm:pb-24" />
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
