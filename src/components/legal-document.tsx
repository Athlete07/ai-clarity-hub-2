import { Link } from "@tanstack/react-router";
import { ArrowRight, type LucideIcon } from "lucide-react";
import type { ReactNode } from "react";

const CONTACT_EMAIL = "hello@factorbeam.dev";

export function LegalHero({
  title,
  description,
  lastUpdated,
}: {
  title: string;
  description: string;
  lastUpdated: string;
}) {
  return (
    <section className="relative home-hero-mesh">
      <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        <div className="mesh-glow-1 absolute -top-32 left-1/3 h-[400px] w-[400px] rounded-full bg-purple-light/35 blur-[120px] dark:bg-purple-light/8" />
      </div>

      <div className="mx-auto max-w-6xl px-5 pt-14 pb-12 sm:px-6 sm:pt-20 sm:pb-16 lg:grid lg:grid-cols-12 lg:items-end lg:gap-12">
        <div className="lg:col-span-7">
          <p className="section-label">Legal</p>
          <h1 className="mt-3 text-[36px] font-medium leading-[1.05] tracking-[-0.035em] sm:text-[48px] lg:text-[52px]">
            {title}
          </h1>
          <p className="mt-5 max-w-[540px] text-[16px] leading-relaxed text-muted-foreground sm:text-[17px]">
            {description}
          </p>
        </div>
        <div className="mt-8 lg:col-span-5 lg:mt-0 lg:text-right">
          <p className="text-[12px] font-medium uppercase tracking-wider text-muted-foreground">
            Last updated
          </p>
          <p className="mt-1 text-[15px] font-medium text-foreground">{lastUpdated}</p>
          <p className="mt-4 text-[13px] leading-relaxed text-muted-foreground lg:ml-auto lg:max-w-[280px]">
            Questions?{" "}
            <a href={`mailto:${CONTACT_EMAIL}`} className="text-purple hover:underline">
              {CONTACT_EMAIL}
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}

export function LegalHighlightStrip({ items }: { items: { label: string; detail: string }[] }) {
  return (
    <section className="border-y border-border/80 bg-muted/30">
      <div className="mx-auto grid max-w-6xl grid-cols-2 gap-px bg-border/60 sm:grid-cols-4">
        {items.map((item) => (
          <div key={item.label} className="bg-background px-5 py-7 text-center sm:px-6 sm:py-8">
            <p className="text-[13px] font-semibold tracking-tight text-foreground">{item.label}</p>
            <p className="mt-1.5 text-[12px] leading-snug text-muted-foreground">{item.detail}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export function LegalDocumentLayout({
  toc,
  children,
  related,
}: {
  toc: { id: string; title: string }[];
  children: ReactNode;
  related: { label: string; to: "/privacy-policy" | "/terms-of-service"; description: string };
}) {
  return (
    <section className="mx-auto max-w-6xl px-5 py-16 sm:px-6 sm:py-20 lg:py-24">
      <div className="lg:grid lg:grid-cols-12 lg:gap-12">
        <aside className="hidden lg:col-span-3 lg:block">
          <nav
            aria-label="On this page"
            className="sticky top-24 rounded-2xl border border-border bg-card p-5"
          >
            <p className="section-label">On this page</p>
            <ul className="mt-4 space-y-1">
              {toc.map((item) => (
                <li key={item.id}>
                  <a
                    href={`#${item.id}`}
                    className="block rounded-md px-2 py-1.5 text-[13px] text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
                  >
                    {item.title}
                  </a>
                </li>
              ))}
            </ul>
            <div className="mt-6 border-t border-border pt-5">
              <p className="text-[11px] font-medium uppercase tracking-wider text-muted-foreground">
                Related
              </p>
              <Link
                to={related.to}
                className="mt-2 block text-[13px] font-medium text-purple hover:underline"
              >
                {related.label}
              </Link>
              <p className="mt-1 text-[12px] leading-snug text-muted-foreground">
                {related.description}
              </p>
            </div>
          </nav>
        </aside>

        <div className="lg:col-span-9">
          <div className="space-y-4">{children}</div>

          <div className="mt-8 rounded-2xl border border-border bg-muted/30 p-5 sm:p-6 lg:hidden">
            <p className="text-[12px] font-medium uppercase tracking-wider text-muted-foreground">
              Related document
            </p>
            <Link
              to={related.to}
              className="mt-2 inline-flex items-center gap-1 text-[14px] font-medium text-purple hover:underline"
            >
              {related.label}
              <ArrowRight size={14} />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export function LegalSection({
  id,
  index,
  icon: Icon,
  title,
  children,
}: {
  id: string;
  index: number;
  icon: LucideIcon;
  title: string;
  children: ReactNode;
}) {
  return (
    <article
      id={id}
      className="scroll-mt-24 rounded-2xl border border-border bg-card p-6 sm:p-8"
    >
      <div className="flex items-start gap-4">
        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-purple-light text-purple-dark dark:bg-purple-light/20 dark:text-purple">
          <Icon size={18} />
        </div>
        <div className="min-w-0 flex-1">
          <div className="flex flex-wrap items-baseline gap-3">
            <span className="font-mono text-[11px] tracking-widest text-muted-foreground/70">
              {String(index).padStart(2, "0")}
            </span>
            <h2 className="text-[18px] font-medium tracking-tight sm:text-[20px]">{title}</h2>
          </div>
          <LegalProse>{children}</LegalProse>
        </div>
      </div>
    </article>
  );
}

export function LegalProse({ children }: { children: ReactNode }) {
  return (
    <div className="legal-prose mt-4 space-y-3 text-[14.5px] leading-[1.75] text-muted-foreground sm:text-[15px]">
      {children}
    </div>
  );
}

export function LegalClosingCta({
  title,
  subtitle,
  primaryLabel = "Browse Executive KB",
  primaryTo = "/executive-kb" as const,
  secondaryLabel,
  secondaryTo,
}: {
  title: string;
  subtitle: string;
  primaryLabel?: string;
  primaryTo?: "/executive-kb" | "/contact";
  secondaryLabel?: string;
  secondaryTo?: "/contact" | "/privacy-policy" | "/terms-of-service";
}) {
  return (
    <section className="mx-auto max-w-6xl px-5 pb-20 sm:px-6 sm:pb-28">
      <div className="relative overflow-hidden rounded-3xl bg-purple px-8 py-14 text-center text-primary-foreground sm:px-12 sm:py-16">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,rgba(255,255,255,0.1),transparent_55%)]"
        />
        <div className="relative">
          <h2 className="text-[24px] font-medium tracking-tight sm:text-[30px]">{title}</h2>
          <p className="mx-auto mt-4 max-w-md text-[15px] text-primary-foreground/85">{subtitle}</p>
          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Link
              to={primaryTo}
              className="inline-flex items-center gap-2 rounded-md bg-background px-7 py-3.5 text-[15px] font-medium text-foreground transition-opacity hover:opacity-95"
            >
              {primaryLabel}
              <ArrowRight size={16} />
            </Link>
            {secondaryLabel && secondaryTo ? (
              <Link
                to={secondaryTo}
                className="inline-flex items-center gap-2 px-5 py-3.5 text-[15px] font-medium text-primary-foreground/90 transition-colors hover:text-primary-foreground"
              >
                {secondaryLabel}
              </Link>
            ) : null}
          </div>
        </div>
      </div>
    </section>
  );
}
