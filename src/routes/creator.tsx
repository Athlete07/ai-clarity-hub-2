import { createFileRoute, Link } from "@tanstack/react-router";
import { Nav, Footer } from "@/components/site-nav";
import {
  ArrowRight,
  Github,
  Globe,
  Linkedin,
  Mail,
  MessageSquare,
  PenLine,
  Shield,
  Sparkles,
  Twitter,
} from "lucide-react";
import { AuthorPortrait } from "@/components/author-portrait";
import { CREATOR } from "@/lib/creator";
import { EXECUTIVE_KBS } from "@/lib/executive-kb";
import { FOUNDER_EXECUTIVE_KBS } from "@/lib/executive-kb-founder";
import { BUSINESS_LEADER_EXECUTIVE_KBS } from "@/lib/executive-kb-business-leader";

export const Route = createFileRoute("/creator")({
  head: () => {
    const sameAs = [
      CREATOR.socials.website,
      CREATOR.socials.linkedin,
      CREATOR.socials.twitter,
      CREATOR.socials.github,
    ].filter(Boolean);

    const personJsonLd = {
      "@context": "https://schema.org",
      "@type": "Person",
      name: CREATOR.name,
      jobTitle: CREATOR.role,
      description: CREATOR.shortBio,
      image: CREATOR.photo,
      url: "/creator",
      email: `mailto:${CREATOR.socials.email}`,
      knowsAbout: CREATOR.expertise,
      sameAs,
      creator: {
        "@type": "WebSite",
        name: "FactorBeam",
        url: "/",
      },
    };

    return {
      meta: [
        { title: `${CREATOR.name} — Author of FactorBeam` },
        {
          name: "description",
          content: `${CREATOR.name} is the ${CREATOR.role}. ${CREATOR.shortBio}`,
        },
        { name: "author", content: CREATOR.name },
        { property: "og:title", content: `${CREATOR.name} — Author of FactorBeam` },
        { property: "og:description", content: CREATOR.shortBio },
        { property: "og:url", content: "/creator" },
        { property: "og:type", content: "profile" },
        { property: "og:image", content: CREATOR.photo },
        { property: "profile:first_name", content: CREATOR.name.split(" ")[0] },
        {
          property: "profile:last_name",
          content: CREATOR.name.split(" ").slice(1).join(" "),
        },
      ],
      links: [{ rel: "canonical", href: "/creator" }],
      scripts: [
        {
          type: "application/ld+json",
          children: JSON.stringify(personJsonLd),
        },
      ],
    };
  },
  component: CreatorPage,
});

const ALL_KBS = [...EXECUTIVE_KBS, ...FOUNDER_EXECUTIVE_KBS, ...BUSINESS_LEADER_EXECUTIVE_KBS];
const TOTAL_CHAPTERS = ALL_KBS.reduce((n, kb) => n + kb.sequence.length, 0);

const SOCIALS = [
  { href: CREATOR.socials.linkedin, icon: Linkedin, label: "LinkedIn" },
  { href: CREATOR.socials.twitter, icon: Twitter, label: "Twitter" },
  { href: CREATOR.socials.github, icon: Github, label: "GitHub" },
  { href: CREATOR.socials.website, icon: Globe, label: "Website" },
  { href: `mailto:${CREATOR.socials.email}`, icon: Mail, label: "Email" },
] as const;

function CreatorPage() {
  return (
    <>
      <Nav />
      <main className="overflow-x-hidden">
        {/* ── Hero ───────────────────────────────────────────────── */}
        <section className="relative home-hero-mesh">
          <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
            <div className="mesh-glow-1 absolute -top-32 right-1/4 h-[440px] w-[440px] rounded-full bg-purple-light/40 blur-[120px] dark:bg-purple-light/8" />
            <div className="mesh-glow-2 absolute bottom-0 left-0 h-[300px] w-[300px] rounded-full bg-teal-bg/40 blur-[100px] dark:bg-teal-bg/10" />
          </div>

          <div className="mx-auto max-w-6xl px-5 pt-14 pb-16 sm:px-6 sm:pt-20 sm:pb-20 lg:grid lg:grid-cols-12 lg:items-center lg:gap-12 lg:pt-24 lg:pb-24">
            <div className="flex justify-center lg:col-span-5 lg:justify-start">
              <div className="relative">
                <div
                  aria-hidden
                  className="absolute -inset-3 rounded-3xl bg-gradient-to-br from-purple/15 via-transparent to-teal-bg/30 blur-lg"
                />
                <AuthorPortrait
                  size="hero"
                  className="relative rounded-2xl shadow-brand"
                  priority
                />
              </div>
            </div>

            <div className="mt-10 text-center lg:col-span-7 lg:mt-0 lg:text-left">
              <p className="section-label">Author</p>
              <h1 className="mt-3 text-[36px] font-medium leading-[1.04] tracking-[-0.035em] sm:text-[48px]">
                {CREATOR.name}
              </h1>
              <p className="mt-2 text-[15px] font-medium text-purple sm:text-[16px]">
                {CREATOR.role}
              </p>
              <p className="mt-1 text-[13px] text-muted-foreground">{CREATOR.location}</p>

              <p className="mx-auto mt-6 max-w-[520px] text-[16px] leading-[1.65] text-foreground/90 sm:text-[17px] lg:mx-0">
                {CREATOR.shortBio}
              </p>

              <div className="mt-8 flex flex-wrap items-center justify-center gap-2 lg:justify-start">
                {SOCIALS.map((s) => (
                  <SocialLink key={s.label} {...s} />
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ── Stats ──────────────────────────────────────────────── */}
        <section className="border-y border-border/80 bg-muted/30">
          <div className="mx-auto grid max-w-6xl grid-cols-2 divide-x divide-border/60 sm:grid-cols-4">
            <StatCell value="8+" label="Years in AI product" />
            <StatCell value={String(ALL_KBS.length)} label="Executive KBs written" />
            <StatCell value={`${TOTAL_CHAPTERS}+`} label="Chapters authored" />
            <StatCell value="3" label="Role tracks" />
          </div>
        </section>

        {/* ── Story ──────────────────────────────────────────────── */}
        <section className="mx-auto max-w-6xl px-5 py-20 sm:px-6 sm:py-28">
          <div className="lg:grid lg:grid-cols-12 lg:gap-16">
            <div className="lg:col-span-4 lg:sticky lg:top-24 lg:self-start">
              <p className="section-label">The story</p>
              <h2 className="mt-3 text-[28px] font-medium tracking-[-0.02em] sm:text-[32px]">
                Built from the room where pitches went sideways.
              </h2>
              <blockquote className="mt-6 border-l-2 border-purple/30 pl-5 text-[15px] font-medium leading-relaxed text-foreground/90 italic">
                &ldquo;FactorBeam is the resource I wish I had when I started.&rdquo;
              </blockquote>
            </div>

            <div className="mt-10 space-y-6 lg:col-span-8 lg:mt-0">
              {CREATOR.longBio.map((paragraph, i) => (
                <p
                  key={i}
                  className="text-[16px] leading-[1.75] text-foreground/85 sm:text-[17px]"
                >
                  {paragraph}
                </p>
              ))}

              <div className="flex items-start gap-3 rounded-2xl border border-border bg-muted/30 p-5 sm:p-6">
                <Shield size={18} className="mt-0.5 shrink-0 text-muted-foreground" />
                <div>
                  <p className="text-[12px] font-semibold uppercase tracking-wider text-muted-foreground">
                    AI disclosure
                  </p>
                  <p className="mt-2 text-[14px] leading-relaxed text-muted-foreground sm:text-[15px]">
                    {CREATOR.aiDisclosure}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── Credentials & expertise ────────────────────────────── */}
        <section className="bg-muted/25 py-20 sm:py-28">
          <div className="mx-auto max-w-6xl px-5 sm:px-6">
            <div className="text-center">
              <p className="section-label">Background</p>
              <h2 className="mx-auto mt-3 max-w-[480px] text-[28px] font-medium tracking-[-0.02em] sm:text-[32px]">
                Experience that shows up in every chapter.
              </h2>
            </div>

            <div className="home-bento mt-12">
              <div className="rounded-2xl border border-border bg-card p-6 sm:p-8 lg:col-span-7">
                <div className="flex items-center gap-2">
                  <PenLine size={16} className="text-purple" />
                  <span className="section-label">Credentials</span>
                </div>
                <ul className="mt-6 space-y-4">
                  {CREATOR.credentials.map((credential, i) => (
                    <li key={credential} className="flex gap-4">
                      <span className="font-mono text-[11px] text-muted-foreground/60">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <span className="text-[15px] leading-relaxed text-foreground/90">
                        {credential}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="rounded-2xl border border-border bg-card p-6 sm:p-8 lg:col-span-5">
                <div className="flex items-center gap-2">
                  <Sparkles size={16} className="text-purple" />
                  <span className="section-label">Areas of expertise</span>
                </div>
                <div className="mt-6 flex flex-wrap gap-2">
                  {CREATOR.expertise.map((area) => (
                    <span
                      key={area}
                      className="rounded-full border border-purple/15 bg-purple-light/50 px-3.5 py-1.5 text-[12px] font-medium text-purple-dark dark:bg-purple-light/15 dark:text-purple"
                    >
                      {area}
                    </span>
                  ))}
                </div>
                <p className="mt-8 text-[13px] leading-relaxed text-muted-foreground">
                  These are the domains I write about most — and the ones where I&apos;ve
                  seen product teams struggle to translate technical reality into
                  roadmap decisions.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ── Writing philosophy ─────────────────────────────────── */}
        <section className="mx-auto max-w-6xl px-5 py-20 sm:px-6 sm:py-28">
          <div className="overflow-hidden rounded-3xl border border-border bg-card">
            <div className="grid lg:grid-cols-2">
              <div className="border-b border-border p-8 sm:p-10 lg:border-b-0 lg:border-r">
                <p className="section-label">How I write</p>
                <h3 className="mt-3 text-[22px] font-medium tracking-tight sm:text-[24px]">
                  In public. With receipts.
                </h3>
                <p className="mt-4 text-[15px] leading-relaxed text-muted-foreground">
                  Every chapter is researched, structured, and rewritten until a
                  non-technical PM can defend it in a roadmap review. I welcome
                  corrections — they make the Executive KB better for everyone.
                </p>
              </div>
              <div className="flex flex-col justify-center p-8 sm:p-10">
                <p className="text-[15px] leading-relaxed text-foreground/85">
                  If something is wrong, unclear, or outdated, I want to hear about it.
                  FactorBeam is a living resource — your feedback shapes the next edit.
                </p>
                <Link
                  to="/contact"
                  className="mt-6 inline-flex w-fit items-center gap-2 text-[14px] font-medium text-purple transition-colors hover:text-purple-dark"
                >
                  <MessageSquare size={15} />
                  Send feedback or corrections
                  <ArrowRight size={14} />
                </Link>
                <Link
                  to="/about"
                  className="mt-3 inline-flex w-fit items-center gap-1.5 text-[13px] text-muted-foreground transition-colors hover:text-foreground"
                >
                  Read about FactorBeam
                  <ArrowRight size={13} />
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
              className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(255,255,255,0.12),transparent_55%)]"
            />
            <div className="relative">
              <h2 className="text-[26px] font-medium tracking-tight sm:text-[32px]">
                Read what I&apos;ve been writing.
              </h2>
              <p className="mx-auto mt-4 max-w-md text-[15px] text-primary-foreground/85">
                Every Executive KB chapter is researched, structured, and edited for
                product leaders worldwide — free, no signup.
              </p>
              <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
                <Link
                  to="/executive-kb"
                  className="inline-flex items-center gap-2 rounded-md bg-background px-7 py-3.5 text-[15px] font-medium text-foreground transition-opacity hover:opacity-95"
                >
                  Browse Executive KB
                  <ArrowRight size={16} />
                </Link>
                <a
                  href={`mailto:${CREATOR.socials.email}`}
                  className="inline-flex items-center gap-2 px-5 py-3.5 text-[15px] font-medium text-primary-foreground/90 transition-colors hover:text-primary-foreground"
                >
                  <Mail size={15} />
                  Email me
                </a>
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

function SocialLink({
  href,
  icon: Icon,
  label,
}: {
  href: string;
  icon: typeof Linkedin;
  label: string;
}) {
  const isExternal = href.startsWith("http") || href.startsWith("mailto:");
  return (
    <a
      href={href}
      target={href.startsWith("http") ? "_blank" : undefined}
      rel={href.startsWith("http") ? "noopener noreferrer me" : "me"}
      aria-label={
        href.startsWith("http") ? `${label} (opens in a new tab)` : label
      }
      className="inline-flex items-center gap-1.5 rounded-full border border-border bg-card px-3.5 py-2 text-[12px] font-medium text-muted-foreground transition-all hover:border-purple/30 hover:text-foreground"
    >
      <Icon size={13} />
      {label}
    </a>
  );
}
