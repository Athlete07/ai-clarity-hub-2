import { createFileRoute, Link } from "@tanstack/react-router";
import { Nav, Footer } from "@/components/site-nav";
import { ArrowRight } from "lucide-react";
import { CREATOR } from "@/lib/creator";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — FactorBeam" },
      {
        name: "description",
        content:
          "FactorBeam is an open playbook that translates AI complexity into product strategy. Built for PMs, founders, and operators who need to ship, not research.",
      },
      { property: "og:title", content: "About — FactorBeam" },
      {
        property: "og:description",
        content:
          "An open playbook that translates AI complexity into product strategy.",
      },
      { property: "og:url", content: "/about" },
      { property: "og:type", content: "website" },
    ],
    links: [{ rel: "canonical", href: "/about" }],
  }),
  component: About,
});

function About() {
  return (
    <>
      <Nav />
      <main className="overflow-x-hidden">
        {/* ── Hero Hook ───────────────────────────────────────────── */}
        <section className="relative">
          <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
            <div className="mesh-glow-1 absolute -top-24 left-1/2 h-[420px] w-[420px] -translate-x-1/2 rounded-full bg-purple-light/50 blur-[100px] dark:bg-purple-light/10" />
          </div>

          <div className="mx-auto max-w-[800px] px-5 pt-16 pb-16 text-center sm:px-6 sm:pt-28 sm:pb-24">
            <h1 className="text-[36px] font-medium leading-[1.08] tracking-[-0.025em] sm:text-[60px] sm:leading-[1.02]">
              An open playbook for<br />
              product-minded <span className="text-purple">builders</span>.
            </h1>
          </div>
        </section>

        {/* ── The Mission ─────────────────────────────────────────── */}
        <section className="mx-auto max-w-[650px] px-5 pb-24 sm:px-6 sm:pb-32 text-[18px] sm:text-[22px] font-medium leading-[1.65] text-foreground/90 space-y-8 text-center">
          <p>
            Every resource on AI is either impossibly technical or dangerously vague.
          </p>
          <p>
            FactorBeam exists to close that gap. It translates mathematical complexity into product strategy so you can ship with confidence.
          </p>
          <p className="text-foreground">
            No PhD required. No vendor pitch. Just the concepts that actually matter when you're building AI-powered products.
          </p>
        </section>

        {/* ── What the Playbook Is ────────────────────────────────── */}
        <section className="mx-auto max-w-6xl px-5 pb-24 sm:px-6 sm:pb-32">
          <div className="mb-10 text-center">
            <div className="section-label mb-3">What the playbook is</div>
            <h2 className="text-[24px] font-medium tracking-tight sm:text-[30px]">
              Structured, sequenced, and built to be used.
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">

            {/* Card 1 — Modular playbooks */}
            <div className="hairline bg-card p-6 sm:p-8 rounded-2xl flex flex-col justify-between sm:col-span-2 transition-all hover:-translate-y-0.5 hover:border-purple/40 hover:shadow-[0_12px_40px_-12px_rgba(83,74,183,0.18)]">
              <div className="section-label mb-8">01 // Playbook structure</div>
              <div>
                <h3 className="text-[20px] sm:text-[24px] font-medium tracking-tight mb-2">Playbooks, not blog posts.</h3>
                <p className="text-[14px] sm:text-[15px] text-muted-foreground leading-relaxed max-w-[600px]">
                  Each playbook is a sequenced set of chapters that build on each other. You start with foundations and progress to advanced concepts — no jumping between scattered articles. Every playbook has a clear difficulty level and estimated reading time so you know what you're signing up for.
                </p>
              </div>
            </div>

            {/* Card 2 — Three examples rule */}
            <div className="hairline bg-card p-6 sm:p-8 rounded-2xl flex flex-col justify-between transition-all hover:-translate-y-0.5 hover:border-purple/40 hover:shadow-[0_12px_40px_-12px_rgba(83,74,183,0.18)]">
              <div className="section-label mb-8">02 // Concepts with context</div>
              <div>
                <h3 className="text-[18px] sm:text-[20px] font-medium tracking-tight mb-2">Three real examples per concept.</h3>
                <p className="text-[14px] sm:text-[15px] text-muted-foreground leading-relaxed">
                  Every section includes three concrete product examples drawn from real-world scenarios. Theory without application is trivia. Each concept is anchored to a situation you'll actually face in a roadmap review.
                </p>
              </div>
            </div>

            {/* Card 3 — Interactive reading */}
            <div className="hairline bg-card p-6 sm:p-8 rounded-2xl flex flex-col justify-between transition-all hover:-translate-y-0.5 hover:border-purple/40 hover:shadow-[0_12px_40px_-12px_rgba(83,74,183,0.18)]">
              <div className="section-label mb-8">03 // Interactive reading</div>
              <div>
                <h3 className="text-[18px] sm:text-[20px] font-medium tracking-tight mb-2">Highlight anything you don't get.</h3>
                <p className="text-[14px] sm:text-[15px] text-muted-foreground leading-relaxed">
                  Stuck on a jargon word? Highlight it for an instant, in-place explanation. No tab-switching, no guessing. If a sentence isn't perfectly clear, that's a signal to improve it — and feedback is welcome.
                </p>
              </div>
            </div>

            {/* Card 4 — End-of-chapter quizzes */}
            <div className="hairline bg-card p-6 sm:p-8 rounded-2xl flex flex-col justify-between transition-all hover:-translate-y-0.5 hover:border-purple/40 hover:shadow-[0_12px_40px_-12px_rgba(83,74,183,0.18)]">
              <div className="section-label mb-8">04 // Check your understanding</div>
              <div>
                <h3 className="text-[18px] sm:text-[20px] font-medium tracking-tight mb-2">Short quizzes at the end of every chapter.</h3>
                <p className="text-[14px] sm:text-[15px] text-muted-foreground leading-relaxed">
                  Reading is not the same as understanding. Each chapter ends with a quick quiz to surface gaps before you move on. Pass it, or re-read the section that tripped you up.
                </p>
              </div>
            </div>

            {/* Card 5 — Progress tracking */}
            <div className="hairline bg-card p-6 sm:p-8 rounded-2xl flex flex-col justify-between transition-all hover:-translate-y-0.5 hover:border-purple/40 hover:shadow-[0_12px_40px_-12px_rgba(83,74,183,0.18)]">
              <div className="section-label mb-8">05 // Your journey, tracked</div>
              <div>
                <h3 className="text-[18px] sm:text-[20px] font-medium tracking-tight mb-2">Reading streaks and progress.</h3>
                <p className="text-[14px] sm:text-[15px] text-muted-foreground leading-relaxed">
                  Your progress is saved locally as you move through chapters. Build a reading streak, pick up exactly where you left off, and see your completion percentage across every playbook.
                </p>
              </div>
            </div>

          </div>
        </section>

        {/* ── How It's Written ────────────────────────────────────── */}
        <section className="mx-auto max-w-[680px] px-5 pb-24 sm:px-6 sm:pb-32">
          <div className="mb-10 text-center">
            <div className="section-label mb-3">How it's written</div>
            <h2 className="text-[24px] font-medium tracking-tight sm:text-[30px]">
              Written in public. Held to a high bar.
            </h2>
          </div>
          <div className="space-y-6 text-[15px] leading-[1.75] text-foreground/85 sm:text-[16px]">
            <p>
              Every chapter starts with a single question: <em>"Would a non-technical PM feel confident defending this in a roadmap review?"</em> If the answer is no, it gets rewritten.
            </p>
            <p>
              The playbooks avoid filler. No long histories of AI research, no celebrity founder stories, no hype about AGI timelines. Every paragraph exists to make you a sharper product decision-maker.
            </p>
            <p>
              Concepts are introduced with a real product scenario, explained in plain language, and reinforced with three examples from different domains — consumer, B2B, and infrastructure. This cross-domain repetition is deliberate: it trains pattern recognition, not memorization.
            </p>
            <p>
              The playbooks are living documents. As models, APIs, and best practices evolve, chapters are updated. What's accurate today may need a footnote tomorrow — and corrections from readers are welcome.
            </p>
            <p>{CREATOR.aiDisclosure}</p>
          </div>
        </section>

        {/* ── Footer CTA ──────────────────────────────────────────── */}
        <section className="mx-auto max-w-[680px] px-5 pb-32 sm:px-6">
          <div className="text-center hairline bg-card p-10 sm:p-14 rounded-2xl flex flex-col items-center">
            <h2 className="text-[26px] sm:text-[32px] font-medium tracking-tight mb-3">The playbook is open.</h2>
            <p className="text-[14.5px] sm:text-[15.5px] text-muted-foreground mb-8">Free. No signup. Start reading in the next 60 seconds.</p>
            <Link
              to="/playbooks"
              className="inline-flex items-center justify-center gap-2 rounded-md bg-purple px-6 py-3 text-[14px] font-medium text-white transition-colors hover:bg-purple-dark"
            >
              Browse the playbooks
              <ArrowRight size={15} />
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
