import { createFileRoute, Link } from "@tanstack/react-router";
import { Nav, Footer } from "@/components/site-nav";
import { AuthorPortrait } from "@/components/author-portrait";
import { brandOgMeta } from "@/lib/brand";
import { CREATOR } from "@/lib/creator";
import { PLATFORM_ABOUT } from "@/lib/platform-about";
import { ArrowRight, Cpu, Layers, PenLine, ShieldCheck } from "lucide-react";
import { useCallback, useState } from "react";

const CONTACT_EMAIL = CREATOR.socials.email;

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: `${PLATFORM_ABOUT.pageName} — FactorBeam` },
      {
        name: "description",
        content:
          "FactorBeam cuts through AI hype for PMs, founders, and leaders. Transparent methodology, stress-tested playbooks, and frameworks built for execution.",
      },
      {
        property: "og:title",
        content: `${PLATFORM_ABOUT.pageName} — FactorBeam`,
      },
      {
        property: "og:description",
        content: PLATFORM_ABOUT.hero.subheadline,
      },
      { property: "og:url", content: "/about" },
      { property: "og:type", content: "website" },
      ...brandOgMeta(),
    ],
    links: [{ rel: "canonical", href: "/about" }],
  }),
  component: AboutThePlatform,
});

const METHODOLOGY_ICONS = [Layers, ShieldCheck, PenLine] as const;

function AboutThePlatform() {
  const { hero, enemy, methodology, conversion } = PLATFORM_ABOUT;

  return (
    <>
      <Nav />
      <main className="overflow-x-hidden">
        {/* 1 — Mission */}
        <section className="relative home-hero-mesh">
          <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
            <div className="mesh-glow-1 absolute -top-32 left-1/4 h-[420px] w-[420px] rounded-full bg-purple-light/40 blur-[120px] dark:bg-purple-light/8" />
            <div className="mesh-glow-2 absolute right-0 bottom-0 h-[320px] w-[320px] rounded-full bg-amber-bg/40 blur-[100px] dark:bg-amber-bg/10" />
          </div>

          <div className="mx-auto max-w-3xl px-5 pt-16 pb-20 text-center sm:px-6 sm:pt-24 sm:pb-28">
            <p className="section-label">{PLATFORM_ABOUT.pageName}</p>
            <h1 className="mt-5 text-[clamp(1.75rem,4.5vw,2.75rem)] font-medium leading-[1.12] tracking-[-0.035em] text-balance">
              {hero.headline}
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-[17px] leading-[1.65] text-muted-foreground sm:text-[18px]">
              {hero.subheadline}
            </p>
            <Link
              to="/executive-kb"
              className="btn-primary mt-10 inline-flex px-6 py-3 text-[14px]"
            >
              Explore Executive KB
              <ArrowRight size={15} />
            </Link>
          </div>
        </section>

        {/* 2 — Enemy */}
        <section className="border-y border-border/80 bg-muted/25">
          <div className="mx-auto max-w-3xl px-5 py-20 sm:px-6 sm:py-28">
            <p className="section-label text-center">{enemy.label}</p>
            <h2 className="mt-4 text-center text-[clamp(1.35rem,3.2vw,2rem)] font-medium leading-[1.2] tracking-[-0.025em] text-balance">
              {enemy.title}
            </h2>
            <div className="mt-8 space-y-5 text-center">
              {enemy.body.map((paragraph) => (
                <p
                  key={paragraph.slice(0, 40)}
                  className="text-[16px] leading-[1.7] text-muted-foreground sm:text-[17px]"
                >
                  {paragraph}
                </p>
              ))}
            </div>
          </div>
        </section>

        {/* 3 — Methodology */}
        <section
          id="editorial-methodology"
          className="mx-auto max-w-6xl scroll-mt-24 px-5 py-20 sm:px-6 sm:py-28"
        >
          <div className="mx-auto max-w-2xl text-center">
            <p className="section-label">{methodology.label}</p>
            <h2 className="mt-4 text-[clamp(1.5rem,3.5vw,2.25rem)] font-medium leading-[1.15] tracking-[-0.025em]">
              {methodology.title}
            </h2>
            <p className="mt-4 text-[15px] leading-relaxed text-muted-foreground sm:text-[16px]">
              {methodology.intro}
            </p>
          </div>

          <div className="mt-14 grid gap-5 lg:grid-cols-3">
            {methodology.steps.map((item, i) => {
              const Icon = METHODOLOGY_ICONS[i] ?? Layers;
              return (
                <div
                  key={item.step}
                  className="relative rounded-2xl border border-border bg-card p-6 sm:p-7"
                >
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-[11px] tracking-widest text-muted-foreground">
                      {item.step}
                    </span>
                    <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-purple-light text-purple-dark dark:bg-purple-light/15 dark:text-purple">
                      <Icon size={16} aria-hidden />
                    </div>
                  </div>
                  <h3 className="mt-5 text-[17px] font-medium tracking-tight sm:text-[18px]">
                    {item.title}
                  </h3>
                  <p className="mt-3 text-[14px] leading-relaxed text-muted-foreground sm:text-[15px]">
                    {item.body}
                  </p>
                </div>
              );
            })}
          </div>
        </section>

        {/* 4 — Curator profile */}
        <section className="border-t border-border/80 bg-muted/20">
          <div className="mx-auto max-w-6xl px-5 py-20 sm:px-6 sm:py-28">
            <div className="overflow-hidden rounded-3xl border border-border bg-card">
              <div className="grid lg:grid-cols-5">
                <div className="flex flex-col items-center justify-center bg-muted/40 px-8 py-12 lg:col-span-2 lg:py-16">
                  <AuthorPortrait size="hero" loading="eager" priority />
                  <p className="mt-5 text-[17px] font-medium tracking-tight">{CREATOR.name}</p>
                  <p className="mt-1 text-[13px] text-muted-foreground">
                    {CREATOR.title} · {CREATOR.brand}
                  </p>
                  <p className="mt-1 text-[12px] text-muted-foreground/80">{CREATOR.location}</p>
                </div>
                <div className="flex flex-col justify-center px-8 py-10 lg:col-span-3 lg:px-12 lg:py-14">
                  <p className="section-label">Who curates this</p>
                  <p className="mt-4 text-[16px] leading-relaxed text-foreground/90 sm:text-[17px]">
                    {CREATOR.curatorBrief[0]}
                  </p>
                  <p className="mt-4 text-[14px] leading-relaxed text-muted-foreground">
                    {CREATOR.curatorBrief[1]}
                  </p>
                  <div className="mt-6 flex items-start gap-3 rounded-xl border border-border bg-muted/30 p-4">
                    <ShieldCheck size={16} className="mt-0.5 shrink-0 text-muted-foreground" />
                    <p className="text-[13px] leading-relaxed text-muted-foreground">
                      {CREATOR.aiDisclosure}
                    </p>
                  </div>
                  <Link
                    to="/creator"
                    className="mt-6 inline-flex items-center gap-1.5 text-[14px] font-medium text-purple transition-colors hover:text-purple-dark"
                  >
                    Open Curator Box
                    <ArrowRight size={14} />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 5 — Conversion */}
        <section className="mx-auto max-w-6xl px-5 pb-24 sm:px-6 sm:pb-32">
          <div className="relative overflow-hidden rounded-3xl bg-purple px-6 py-12 text-primary-foreground sm:px-10 sm:py-14">
            <div
              aria-hidden
              className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,rgba(255,255,255,0.1),transparent_55%)]"
            />
            <div className="relative grid gap-10 lg:grid-cols-2 lg:items-center lg:gap-12">
              <div>
                <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-primary-foreground/70">
                  Your next step
                </p>
                <h2 className="mt-3 text-[22px] font-medium leading-snug tracking-tight sm:text-[26px]">
                  {conversion.primary.label}
                </h2>
                <p className="mt-3 text-[14px] text-primary-foreground/85">
                  {conversion.primary.hint}
                </p>
                <Link
                  to={conversion.primary.href}
                  className="mt-6 inline-flex items-center gap-2 rounded-md bg-background px-6 py-3.5 text-[14px] font-medium text-foreground transition-opacity hover:opacity-95"
                >
                  <Cpu size={16} aria-hidden />
                  Launch Agent Overseer
                  <ArrowRight size={15} />
                </Link>
              </div>

              <div className="rounded-2xl border border-primary-foreground/15 bg-primary-foreground/10 p-6 backdrop-blur-sm sm:p-7">
                <p className="text-[15px] font-medium">{conversion.secondary.label}</p>
                <p className="mt-1.5 text-[13px] text-primary-foreground/80">
                  {conversion.secondary.hint}
                </p>
                <WorkflowEmailCapture subject={conversion.secondary.mailSubject} />
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

function WorkflowEmailCapture({ subject }: { subject: string }) {
  const [email, setEmail] = useState("");

  const requestWorkflows = useCallback(() => {
    const trimmed = email.trim();
    if (!trimmed) return;

    const body = [
      "Please send the 5 most downloaded PM AI workflows.",
      "",
      `Email: ${trimmed}`,
    ].join("\n");

    const href = `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    window.location.href = href;
  }, [email, subject]);

  return (
    <form
      className="mt-5 flex flex-col gap-3 sm:flex-row"
      onSubmit={(e) => {
        e.preventDefault();
        requestWorkflows();
      }}
    >
      <label className="sr-only" htmlFor="workflow-email">
        Your email
      </label>
      <input
        id="workflow-email"
        type="email"
        required
        autoComplete="email"
        placeholder="you@company.com"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="min-w-0 flex-1 rounded-md border border-primary-foreground/20 bg-background px-4 py-3 text-[14px] text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary-foreground/30"
      />
      <button
        type="submit"
        className="inline-flex shrink-0 items-center justify-center gap-2 rounded-md bg-primary-foreground px-5 py-3 text-[14px] font-medium text-purple transition-opacity hover:opacity-95"
      >
        Send to inbox
        <ArrowRight size={14} aria-hidden />
      </button>
    </form>
  );
}
