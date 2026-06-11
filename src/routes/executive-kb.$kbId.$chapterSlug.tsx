import { createFileRoute, Link, notFound, redirect, useRouter } from "@tanstack/react-router";
import { useEffect, useRef, useState, useMemo } from "react";
import { FactorBeamLogo } from "@/components/factorbeam-logo";
import { Nav, Footer } from "@/components/site-nav";
import { BRAND, brandOgMeta } from "@/lib/brand";
import { ExampleTabs } from "@/components/example-tabs";
import { HighlightExplainer } from "@/components/highlight-explainer";
import { Quiz } from "@/components/quiz";
import { DiagramBlock } from "@/components/diagrams";
import { CreatorAttribution } from "@/components/creator-attribution";
import { CREATOR } from "@/lib/creator";
import {
  conceptBySlug,
  type ConceptBodyBlock,
} from "@/lib/concepts";
import { canonicalChapterSlug } from "@/lib/chapter-slug-migrations";
import {
  executiveKbForSlug,
  nextSlugInExecutiveKb,
  prevSlugInExecutiveKb,
  executiveKbById,
  chapterPath,
  canonicalExecutiveKbId,
  isChapterInExecutiveKb,
  executiveKbTrackForId,
  formatExecutiveKbLabel,
  type ExecutiveKbId,
} from "@/lib/executive-kb";
import { executiveKbTrackSearch } from "@/lib/executive-kb-track";
import { ROLE_THEMES } from "@/lib/role-themes";
import { useProgress, useReadMode, useSectionsViewed, useSavedDepth, type ReadMode } from "@/lib/storage";
import {
  ArrowRight,
  Clock,
  Hand,
  Menu,
  X,
  Check,
  ChevronDown,
  BookOpen,
  Zap,
  Bookmark,
  BookmarkCheck,
} from "lucide-react";
import { ShareMenu } from "@/components/share-menu";

// Approx 220 words per minute; word counts derived from block kind.
function blockWords(b: ConceptBodyBlock): number {
  if (b.kind === "p") return b.parts.reduce((n, p) => n + (typeof p === "string" ? p : p.text).split(/\s+/).length, 0);
  if (b.kind === "take" || b.kind === "why" || b.kind === "trans") return b.text.split(/\s+/).length;
  if (b.kind === "ex") return b.title.split(/\s+/).length + b.body.split(/\s+/).length;
  return 0;
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);
  const router = useRouter();

  return (
    <div className="flex h-64 flex-col items-center justify-center gap-4 text-center">
      <div className="rounded-full bg-error-bg p-3 text-error">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <circle cx="12" cy="12" r="10" />
          <line x1="12" y1="8" x2="12" y2="12" />
          <line x1="12" y1="16" x2="12.01" y2="16" />
        </svg>
      </div>
      <div>
        <h2 className="text-[16px] font-semibold">Something went wrong</h2>
        <p className="mt-1 text-[14px] text-muted-foreground max-w-[400px]">
          There was an error loading this concept. Please try again.
        </p>
      </div>
      <button
        onClick={() => {
          router.invalidate();
          reset();
        }}
        className="mt-2 rounded-md bg-foreground px-4 py-2 text-[13px] font-medium text-background transition-colors hover:bg-foreground/90"
      >
        Try again
      </button>
    </div>
  );
}

export const Route = createFileRoute("/executive-kb/$kbId/$chapterSlug")({
  beforeLoad: ({ params }) => {
    const canonicalSlug = canonicalChapterSlug(params.chapterSlug);
    const kbId = canonicalExecutiveKbId(params.kbId);

    if (params.kbId !== kbId || params.chapterSlug !== canonicalSlug) {
      const kb = executiveKbForSlug(canonicalSlug);
      if (!kb) throw notFound();
      throw redirect({
        to: "/executive-kb/$kbId/$chapterSlug",
        params: { kbId: kb.id, chapterSlug: canonicalSlug },
        replace: true,
      });
    }

    if (!isChapterInExecutiveKb(kbId, canonicalSlug)) {
      const kb = executiveKbForSlug(canonicalSlug);
      if (!kb) throw notFound();
      throw redirect({
        to: "/executive-kb/$kbId/$chapterSlug",
        params: { kbId: kb.id, chapterSlug: canonicalSlug },
        replace: true,
      });
    }
  },
  loader: ({ params }) => {
    const kbId = canonicalExecutiveKbId(params.kbId);
    const chapterSlug = canonicalChapterSlug(params.chapterSlug);
    if (!isChapterInExecutiveKb(kbId, chapterSlug)) throw notFound();
    const concept = conceptBySlug(chapterSlug);
    if (!concept) throw notFound();
    return { concept, kbId };
  },
  head: ({ loaderData }) => {
    const c = loaderData?.concept;
    const kbId = loaderData?.kbId;
    if (!c || !kbId) return { meta: [{ title: "Chapter — FactorBeam" }] };
    const canonical = chapterPath(kbId, c.slug);
    const shortTitle = c.shortTitle ?? c.title;
    const metaTitle = `${shortTitle} — FactorBeam`;
    return {
      meta: [
        { title: metaTitle },
        { name: "description", content: c.summary },
        { property: "og:title", content: metaTitle },
        { property: "og:description", content: c.summary },
        { property: "og:url", content: canonical },
        { property: "og:type", content: "article" },
        { property: "og:site_name", content: BRAND.name },
        ...brandOgMeta(),
      ],
      links: [{ rel: "canonical", href: canonical }],
      scripts: [
        {
          type: "application/ld+json",
          children: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            headline: c.title,
            description: c.summary,
            author: {
              "@type": "Person",
              name: CREATOR.name,
              url: "/creator",
              image: CREATOR.photo,
              jobTitle: CREATOR.title,
            },
            publisher: {
              "@type": "Organization",
              name: BRAND.name,
              url: "/",
              logo: BRAND.logo.mark,
            },
            mainEntityOfPage: canonical,
          }),
        },
      ],
    };
  },
  notFoundComponent: () => (
    <div className="flex min-h-screen items-center justify-center text-center">
      <div>
        <h1 className="text-2xl font-medium">Concept not found</h1>
        <Link to="/executive-kb" className="mt-3 inline-block text-purple hover:underline">
          ← Back to Executive KB
        </Link>
      </div>
    </div>
  ),
  errorComponent: ({ reset }) => {
    const router = useRouter();
    return (
      <div className="flex min-h-screen items-center justify-center text-center">
        <div>
          <h1 className="text-xl font-medium">Something went wrong loading this concept.</h1>
          <button
            onClick={() => {
              router.invalidate();
              reset();
            }}
            className="mt-3 rounded-md bg-purple px-4 py-2 text-[13px] text-primary-foreground"
          >
            Try again
          </button>
        </div>
      </div>
    );
  },
  component: ConceptPage,
});

type RenderItem =
  | { type: "block"; block: ConceptBodyBlock; sectionNum: string }
  | { type: "depth"; blocks: ConceptBodyBlock[]; sectionNum: string; sectionTitle: string };

function ConceptPage() {
  const { concept, kbId } = Route.useLoaderData() as {
    concept: NonNullable<ReturnType<typeof conceptBySlug>>;
    kbId: ExecutiveKbId;
  };
  const { progress, markDone, markInProgress } = useProgress();
  const [readMode, setReadMode] = useReadMode();
  const articleRef = useRef<HTMLElement | null>(null);
  const [sidebarOpen, setSidebarOpen] = useState(false);

  // Examples are authored inline as `kind: "ex"` blocks in `concept.body`.
  // Some concepts may also ship a separate `concept.examples` array; render both.
  const tabExamples = useMemo(() => {
    const fromBody = concept.body
      .filter((b) => b.kind === "ex")
      .map((b) => ({ title: b.title, body: b.body }));
    return [...(concept.examples ?? []), ...fromBody];
  }, [concept.body, concept.examples]);

  // Layered reading contract:
  //  - skip "trans" blocks (the Next button implies sequence)
  //  - first <p> in each section stays inline (the "Core")
  //  - remaining <p>s in that section fold into a single "Go deeper" group (the "Depth")
  //  - take / why / ex / diagram render as before
  const renderItems = useMemo<RenderItem[]>(() => {
    const items: RenderItem[] = [];
    let pIdxInSection = 0;
    let curSectionNum = "";
    let curSectionTitle = "";
    let depthBuf: ConceptBodyBlock[] = [];
    const flushDepth = () => {
      if (depthBuf.length) {
        items.push({ type: "depth", blocks: depthBuf, sectionNum: curSectionNum, sectionTitle: curSectionTitle });
        depthBuf = [];
      }
    };
    for (const b of concept.body) {
      if (b.kind === "h") {
        flushDepth();
        pIdxInSection = 0;
        curSectionNum = b.number;
        curSectionTitle = b.title;
        items.push({ type: "block", block: b, sectionNum: curSectionNum });
      } else if (b.kind === "trans") {
        continue;
      } else if (b.kind === "p") {
        if (pIdxInSection === 0) {
          items.push({ type: "block", block: b, sectionNum: curSectionNum });
        } else {
          depthBuf.push(b);
        }
        pIdxInSection++;
      } else {
        flushDepth();
        items.push({ type: "block", block: b, sectionNum: curSectionNum });
      }
    }
    flushDepth();
    return items;
  }, [concept.body]);

  // Per-section essentials: header + take + why + first-p only.
  // Depth + examples are opt-in, so they don't bloat the visible estimate.
  const sectionMinutes = useMemo(() => {
    const out: Record<string, number> = {};
    let currentId = "";
    let words = 0;
    let pIdx = 0;
    for (const b of concept.body) {
      if (b.kind === "h") {
        if (currentId) out[currentId] = Math.max(1, Math.round(words / 220));
        currentId = b.number;
        words = 0;
        pIdx = 0;
      } else if (b.kind === "trans" || b.kind === "ex" || b.kind === "diagram") {
        // excluded from essentials
      } else if (b.kind === "p") {
        if (pIdx === 0) words += blockWords(b);
        pIdx++;
      } else {
        words += blockWords(b);
      }
    }
    if (currentId) out[currentId] = Math.max(1, Math.round(words / 220));
    return out;
  }, [concept.body]);

  const essentialsMinutes = useMemo(
    () => Math.max(1, Object.values(sectionMinutes).reduce((a, b) => a + b, 0)),
    [sectionMinutes],
  );

  useEffect(() => {
    markInProgress(concept.slug);
  }, [concept.slug, markInProgress]);

  const executiveKb = executiveKbById(kbId) ?? executiveKbForSlug(concept.slug);
  const kbSlugs = executiveKb?.sequence.map((c) => c.slug) ?? [concept.slug];
  const doneCount = kbSlugs.filter((s) => progress[s] === "done").length;
  const pct = Math.round((doneCount / kbSlugs.length) * 100);
  const nextSlug = nextSlugInExecutiveKb(concept.slug);
  const prevSlug = prevSlugInExecutiveKb(concept.slug);
  const next = nextSlug ? conceptBySlug(nextSlug) : undefined;
  const prev = prevSlug ? conceptBySlug(prevSlug) : undefined;

  const currentIdx = kbSlugs.indexOf(concept.slug);
  const displayNum = currentIdx + 1;
  const track = executiveKbTrackForId(kbId);
  const theme = ROLE_THEMES[track];
  const kbOrder = executiveKb?.order ?? 1;

  return (
    <div className="min-h-screen bg-background">
      <header className="sticky top-0 z-40 border-b border-border/80 bg-background/90 backdrop-blur-md">
        <div className="site-header--slim mx-auto flex max-w-[1400px] items-center justify-between gap-4 px-4 sm:px-6">
          <div className="flex min-w-0 items-center gap-2 sm:gap-3">
            <button
              type="button"
              className="nav-icon-btn text-muted-foreground transition-colors hover:bg-muted lg:hidden"
              onClick={() => setSidebarOpen(true)}
              aria-label="Open chapter menu"
            >
              <Menu size={20} />
            </button>
            <Link
              to="/executive-kb"
              search={executiveKbTrackSearch(track)}
              className="nav-link hidden items-center gap-1.5 text-muted-foreground transition-colors hover:text-foreground sm:inline-flex"
            >
              Executive KB
            </Link>
            <span className="hidden text-muted-foreground/40 sm:inline" aria-hidden>
              /
            </span>
            <span className="nav-link truncate font-medium text-foreground">
              {executiveKb?.title ?? "Chapter"}
            </span>
          </div>
          <div className="flex shrink-0 items-center gap-3">
            <span className="nav-link hidden text-muted-foreground md:inline">
              Ch. {displayNum}/{kbSlugs.length} · {pct}%
            </span>
            <Link to="/" className="lg:hidden" aria-label={BRAND.name}>
              <FactorBeamLogo context="icon" />
            </Link>
          </div>
        </div>
        <div className="h-[2px] bg-muted">
          <div
            className={`h-full transition-all duration-500 ${theme.progress}`}
            style={{ width: `${pct}%` }}
          />
        </div>
      </header>

      <div className="mx-auto flex max-w-[1400px]">
        <Sidebar
          currentSlug={concept.slug}
          kbId={kbId}
          track={track}
          open={sidebarOpen}
          onClose={() => setSidebarOpen(false)}
        />

        <main className="min-w-0 flex-1 px-5 py-10 sm:px-8 lg:px-12 lg:py-14">
          <article ref={articleRef} className="chapter-article relative mx-auto max-w-[680px]">
            <HighlightExplainer containerRef={articleRef} />

            <header className="chapter-hero rounded-2xl border border-border/80 bg-card/40 p-6 sm:p-8">
              <div className="flex flex-wrap items-center gap-2">
                <span
                  className={`rounded-full px-2.5 py-0.5 text-[10px] font-semibold uppercase tracking-wider ${theme.badge}`}
                >
                  {formatExecutiveKbLabel(track, kbOrder)}
                </span>
                <span className="text-[12px] text-muted-foreground">
                  Chapter {displayNum} of {kbSlugs.length}
                </span>
              </div>

              <h1
                id="concept"
                className="mt-4 text-[30px] font-medium leading-[1.1] tracking-[-0.03em] text-foreground sm:text-[38px]"
              >
                {concept.title}
              </h1>

              <div className="mt-4 flex flex-wrap items-center gap-x-3 gap-y-2 text-[13px] text-muted-foreground">
                <span className="inline-flex items-center gap-1.5">
                  <Clock size={14} className="opacity-70" />
                  ~{essentialsMinutes} min essentials
                </span>
                <span className="opacity-40">·</span>
                <span>{concept.readingMinutes} min full</span>
                <span className="opacity-40">·</span>
                <span>{Object.keys(sectionMinutes).length} sections</span>
                <span className="ml-auto">
                  <ShareMenu
                    title={concept.title}
                    summary={concept.summary}
                    kbId={kbId}
                    chapterSlug={concept.slug}
                  />
                </span>
              </div>

              <p className="mt-5 border-t border-border/60 pt-5 text-[16px] leading-relaxed text-muted-foreground">
                {concept.summary}
              </p>
            </header>

            <ResumeSavedPill slug={concept.slug} />

            <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
              <div
                className="inline-flex w-fit items-center rounded-full border border-border bg-card p-0.5 text-[12px]"
                role="tablist"
                aria-label="Reading mode"
              >
                <button
                  role="tab"
                  aria-selected={readMode === "deep"}
                  onClick={() => setReadMode("deep")}
                  className={`inline-flex items-center gap-1.5 rounded-full px-3.5 py-1.5 transition-colors ${
                    readMode === "deep"
                      ? `${theme.progress} text-primary-foreground`
                      : "text-muted-foreground hover:text-foreground"
                  }`}
                >
                  <BookOpen size={12} /> Full
                </button>
                <button
                  role="tab"
                  aria-selected={readMode === "skim"}
                  onClick={() => setReadMode("skim")}
                  className={`inline-flex items-center gap-1.5 rounded-full px-3.5 py-1.5 transition-colors ${
                    readMode === "skim"
                      ? `${theme.progress} text-primary-foreground`
                      : "text-muted-foreground hover:text-foreground"
                  }`}
                >
                  <Zap size={12} /> Essentials
                </button>
              </div>
              <p className="text-[12px] text-muted-foreground">
                {readMode === "deep"
                  ? "Full — every example, fold, and depth note."
                  : "Essentials — takeaways and key points only."}
              </p>
            </div>

            <div className="mt-6 rounded-xl border border-purple/15 bg-purple-light/50 px-5 py-4 dark:bg-purple-light/10">
              <p className="text-[10px] font-semibold uppercase tracking-wider text-purple-dark dark:text-purple">
                Key takeaway
              </p>
              <p className="mt-1.5 text-[15px] font-medium leading-relaxed text-foreground/90">
                {concept.keyTakeaway}
              </p>
            </div>

            {readMode === "deep" && (
              <div className="mt-5 flex items-center gap-2 rounded-xl border border-border bg-muted/40 px-4 py-3 text-[12px] text-muted-foreground">
                <Hand size={14} className="shrink-0 text-purple" />
                Highlight any sentence below for a plain-English explanation
              </div>
            )}

            <div className="mt-7 space-y-5 text-base leading-relaxed text-foreground">
              {renderItems.map((item, i) =>
                item.type === "block" ? (
                  <BodyBlock key={i} block={item.block} mode={readMode} sectionMinutes={sectionMinutes} />
                ) : (
                  <DepthFold
                    key={i}
                    blocks={item.blocks}
                    mode={readMode}
                    slug={concept.slug}
                    sectionNum={item.sectionNum}
                    sectionTitle={item.sectionTitle}
                  />
                ),
              )}
            </div>

            {tabExamples.length > 0 && (
              <section id="examples" className="mt-16">
                <p className="section-label">Real product examples</p>
                <div className="mt-4 rounded-xl border border-amber/20 bg-amber-bg/50 px-5 py-4 text-[14px] italic leading-relaxed text-foreground">
                  {concept.pmCallout}
                </div>
                <div className="mt-6">
                  <ExampleTabs examples={tabExamples} />
                </div>
              </section>
            )}

            {/* Quiz */}
            <section id="quiz">
              <Quiz
                questions={concept.quiz}
                onComplete={() => markDone(concept.slug)}
                nextKbId={next ? kbId : undefined}
                nextChapterSlug={next?.slug}
                nextTitle={next?.shortTitle}
              />
            </section>

            {/* Author attribution */}
            <div className="mt-14">
              <CreatorAttribution />
            </div>

            <nav
              aria-label="Chapter navigation"
              className="mt-12 rounded-2xl border border-border bg-card p-4 sm:p-5"
            >
              <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                {prev ? (
                  <Link
                    to="/executive-kb/$kbId/$chapterSlug"
                    params={{ kbId, chapterSlug: prev.slug }}
                    className="inline-flex items-center gap-2 rounded-lg border border-border px-4 py-2.5 text-[13px] font-medium text-foreground transition-colors hover:bg-muted"
                  >
                    ← {prev.shortTitle}
                  </Link>
                ) : (
                  <span />
                )}
                <span className="text-center text-[12px] text-muted-foreground">
                  {progress[concept.slug] === "done" ? (
                    <span className="inline-flex items-center gap-1.5 text-success">
                      <Check size={13} /> Chapter complete
                    </span>
                  ) : (
                    "Finish the quiz to mark complete"
                  )}
                </span>
                {next ? (
                  <div className="group relative sm:text-right">
                    <Link
                      to="/executive-kb/$kbId/$chapterSlug"
                      params={{ kbId, chapterSlug: next.slug }}
                      className={`inline-flex items-center gap-2 rounded-lg px-4 py-2.5 text-[13px] font-medium ${
                        progress[concept.slug] === "done"
                          ? `${theme.progress} text-primary-foreground hover:opacity-90`
                          : "pointer-events-none border border-border text-muted-foreground opacity-50"
                      }`}
                    >
                      {next.shortTitle}
                      <ArrowRight size={14} />
                    </Link>
                    {progress[concept.slug] !== "done" && (
                      <div className="pointer-events-none absolute bottom-full left-1/2 mb-2 -translate-x-1/2 whitespace-nowrap rounded-md bg-foreground px-2.5 py-1 text-[11px] text-background opacity-0 transition-opacity group-hover:opacity-100">
                        Complete quiz to unlock
                      </div>
                    )}
                  </div>
                ) : (
                  <Link
                    to="/executive-kb"
                    search={executiveKbTrackSearch(track)}
                    className={`inline-flex items-center gap-2 rounded-lg px-4 py-2.5 text-[13px] font-medium text-primary-foreground ${theme.progress} hover:opacity-90`}
                  >
                    Back to Executive KB
                    <ArrowRight size={14} />
                  </Link>
                )}
              </div>
            </nav>
          </article>
        </main>
        <TableOfContents concept={concept} slug={concept.slug} track={track} />
      </div>
      <Footer />
    </div>
  );
}

function BodyBlock({
  block,
  mode,
  sectionMinutes,
}: {
  block: ConceptBodyBlock;
  mode: ReadMode;
  sectionMinutes: Record<string, number>;
}) {
  const skim = mode === "skim";

  if (block.kind === "h") {
    const mins = sectionMinutes[block.number];
    return (
      <div
        className="mt-12 border-t border-border/80 pt-8 first:mt-8 first:border-t-0 first:pt-0"
        id={block.title.toLowerCase().replace(/[^a-z0-9]+/g, "-")}
        data-section-num={block.number}
      >
        <div className="flex items-center gap-2 text-[11px] font-semibold uppercase tracking-wider text-purple">
          <span className="font-mono">§{block.number}</span>
          {mins ? (
            <>
              <span className="opacity-40">·</span>
              <span className="font-normal normal-case tracking-normal text-muted-foreground">
                ~{mins} min
              </span>
            </>
          ) : null}
        </div>
        <h2 className="mt-2 text-[24px] font-medium tracking-[-0.02em] leading-snug text-foreground sm:text-[26px]">
          {block.title}
        </h2>
        {block.subtitle && (
          <p className="mt-2 text-[15px] italic text-muted-foreground">{block.subtitle}</p>
        )}
      </div>
    );
  }

  if (block.kind === "take") {
    return (
      <div className="rounded-xl border border-purple/15 bg-purple-light/40 px-5 py-4 dark:bg-purple-light/10">
        <p className="text-[10px] font-semibold uppercase tracking-wider text-purple-dark dark:text-purple">
          Key takeaway
        </p>
        <p className="mt-1.5 text-[15px] font-medium leading-relaxed text-foreground/90">
          {block.text}
        </p>
      </div>
    );
  }
  if (block.kind === "why") {
    if (skim) return null;
    return (
      <div className="rounded-xl border border-amber/20 bg-amber-bg/40 px-5 py-4 text-[14px] italic leading-relaxed text-foreground">
        <p className="mb-1.5 text-[10px] font-semibold uppercase tracking-wider text-foreground/70 not-italic">
          Why this matters for you
        </p>
        {block.text}
      </div>
    );
  }
  if (block.kind === "ex") {
    return <CollapsibleExample title={block.title} body={block.body} defaultOpen={false} />;
  }
  if (block.kind === "trans") {
    return <p className="text-[14px] italic leading-relaxed text-muted-foreground">{block.text}</p>;
  }
  if (block.kind === "diagram") {
    if (skim) return null;
    return <DiagramBlock block={block} />;
  }
  if (skim) return null;
  return (
    <p>
      {block.parts.map((part, i) => {
        if (typeof part === "string") return <span key={i}>{part}</span>;
        return (
          <span
            key={i}
            data-explain={part.explain}
            className="rounded-sm bg-purple-light/40 underline decoration-purple/30 decoration-dotted underline-offset-4 transition-colors hover:bg-purple-light"
          >
            {part.text}
          </span>
        );
      })}
    </p>
  );
}

function CollapsibleExample({
  title,
  body,
  defaultOpen,
}: {
  title: string;
  body: string;
  defaultOpen: boolean;
}) {
  const [open, setOpen] = useState(defaultOpen);
  return (
    <div className="rounded-xl border border-border bg-card">
      <button
        onClick={() => setOpen((o) => !o)}
        className="flex w-full items-center justify-between gap-3 px-5 py-3.5 text-left transition-colors hover:bg-muted/30"
        aria-expanded={open}
      >
        <div className="min-w-0">
          <p className="text-[11px] font-medium uppercase tracking-wider text-muted-foreground">
            Example
          </p>
          <p className="mt-0.5 text-[14px] font-medium text-foreground">{title}</p>
        </div>
        <ChevronDown
          size={16}
          className={`shrink-0 text-muted-foreground transition-transform ${open ? "rotate-180" : ""}`}
        />
      </button>
      {open && (
        <p className="hairline-t px-5 py-4 text-[14px] leading-relaxed text-foreground/90">
          {body}
        </p>
      )}
    </div>
  );
}


function ResumeSavedPill({ slug }: { slug: string }) {
  const { items } = useSavedDepth();
  const here = items.filter((i) => i.slug === slug);
  if (here.length === 0) return null;
  const first = here[0];
  return (
    <button
      onClick={() => {
        const el = document.querySelector(`[data-section-num="${first.sectionNum}"]`);
        if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
      }}
      className="mt-4 inline-flex items-center gap-2 rounded-full bg-purple-light/60 px-3 py-1.5 text-[12px] text-purple-dark hover:bg-purple-light"
    >
      <BookmarkCheck size={12} />
      Resume saved deep dive · Section {first.sectionNum}
      {here.length > 1 && <span className="opacity-60">+{here.length - 1} more</span>}
    </button>
  );
}

function DepthFold({
  blocks,
  mode,
  slug,
  sectionNum,
  sectionTitle,
}: {
  blocks: ConceptBodyBlock[];
  mode: ReadMode;
  slug: string;
  sectionNum: string;
  sectionTitle: string;
}) {
  const [open, setOpen] = useState(false);
  const { isSaved, toggle } = useSavedDepth();
  if (mode === "skim") return null;
  const paraCount = blocks.length;
  const words = blocks.reduce(
    (n, b) =>
      n +
      (b.kind === "p"
        ? b.parts.reduce((m, p) => m + (typeof p === "string" ? p : p.text).split(/\s+/).length, 0)
        : 0),
    0,
  );
  const mins = Math.max(1, Math.round(words / 220));
  const saved = isSaved(slug, sectionNum);
  return (
    <div className="rounded-xl border border-border bg-card/60" data-section-num={sectionNum}>
      <div className="flex w-full items-center gap-2 px-2 py-1">
        <button
          onClick={() => setOpen((o) => !o)}
          className="flex flex-1 items-center justify-between gap-3 rounded-lg px-3 py-2 text-left hover:bg-muted/40"
          aria-expanded={open}
        >
          <div className="min-w-0">
            <p className="text-[11px] font-medium uppercase tracking-wider text-muted-foreground">
              Go deeper
            </p>
            <p className="mt-0.5 text-[13px] text-foreground/80">
              {paraCount} more paragraph{paraCount === 1 ? "" : "s"} · ~{mins} min
            </p>
          </div>
          <ChevronDown
            size={16}
            className={`shrink-0 text-muted-foreground transition-transform ${open ? "rotate-180" : ""}`}
          />
        </button>
        <button
          onClick={() => toggle(slug, sectionNum, sectionTitle)}
          aria-label={saved ? "Remove bookmark" : "Save for later"}
          className={`shrink-0 rounded-md p-2 transition-colors ${
            saved ? "text-purple hover:bg-purple-light/50" : "text-muted-foreground hover:bg-muted hover:text-foreground"
          }`}
          title={saved ? "Saved · click to remove" : "Save for later"}
        >
          {saved ? <BookmarkCheck size={15} /> : <Bookmark size={15} />}
        </button>
      </div>
      {open && (
        <div className="hairline-t space-y-4 px-5 py-4 text-[15px] leading-relaxed text-foreground/90">
          {blocks.map((b, i) =>
            b.kind === "p" ? (
              <p key={i}>
                {b.parts.map((part, j) =>
                  typeof part === "string" ? (
                    <span key={j}>{part}</span>
                  ) : (
                    <span
                      key={j}
                      data-explain={part.explain}
                      className="rounded-sm bg-purple-light/40 underline decoration-purple/30 decoration-dotted underline-offset-4 transition-colors hover:bg-purple-light"
                    >
                      {part.text}
                    </span>
                  ),
                )}
              </p>
            ) : null,
          )}
        </div>
      )}
    </div>
  );
}

function Sidebar({
  currentSlug,
  kbId,
  track,
  open,
  onClose,
}: {
  currentSlug: string;
  kbId: ExecutiveKbId;
  track: ReturnType<typeof executiveKbTrackForId>;
  open: boolean;
  onClose: () => void;
}) {
  const { progress } = useProgress();
  const theme = ROLE_THEMES[track];
  const [sidebarWidth, setSidebarWidth] = useState(240);
  const isResizing = useRef(false);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!isResizing.current) return;
      setSidebarWidth((w) => Math.max(200, Math.min(600, w + e.movementX)));
    };
    const handleMouseUp = () => {
      if (isResizing.current) {
        isResizing.current = false;
        document.body.style.cursor = "default";
        document.body.style.userSelect = "auto";
      }
    };
    document.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseup", handleMouseUp);
    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseup", handleMouseUp);
    };
  }, []);

  const executiveKb = executiveKbById(kbId) ?? executiveKbForSlug(currentSlug);
  const items = (executiveKb?.sequence ?? []).map((s) => {
    const c = conceptBySlug(s.slug);
    return { slug: s.slug, shortTitle: c?.shortTitle ?? s.slug };
  });

  const doneCount = items.filter((c) => progress[c.slug] === "done").length;
  const kbPct = items.length ? Math.round((doneCount / items.length) * 100) : 0;

  const list = (
    <nav className="flex flex-col px-4 py-6 sm:px-5">
      <Link
        to="/executive-kb"
        search={executiveKbTrackSearch(track)}
        className="mb-5 inline-flex items-center gap-1 text-[13px] font-medium text-muted-foreground transition-colors hover:text-foreground"
      >
        ← Executive KB
      </Link>
      <p className="text-[13px] font-medium leading-snug text-foreground">
        {executiveKb?.title ?? "Executive KB"}
      </p>
      <div className="mt-3">
        <div className="flex items-center justify-between text-[10px] text-muted-foreground">
          <span>
            {doneCount}/{items.length} chapters
          </span>
          <span>{kbPct}%</span>
        </div>
        <div className="mt-1.5 h-1 overflow-hidden rounded-full bg-muted">
          <div className={`h-full rounded-full ${theme.progress}`} style={{ width: `${kbPct}%` }} />
        </div>
      </div>
      <ul className="mt-5 space-y-0.5">
        {items.map((c, idx) => {
          const isCurrent = c.slug === currentSlug;
          const done = progress[c.slug] === "done";

          return (
            <li key={c.slug}>
              <Link
                to="/executive-kb/$kbId/$chapterSlug"
                params={{ kbId, chapterSlug: c.slug }}
                onClick={onClose}
                className={`flex items-center gap-2.5 rounded-lg px-2.5 py-2 text-[13px] transition-colors ${
                  isCurrent
                    ? "bg-purple-light/80 font-medium text-purple-dark dark:bg-purple-light/15 dark:text-purple"
                    : "text-foreground/85 hover:bg-muted/60"
                }`}
              >
                <span
                  className={`flex h-5 w-5 shrink-0 items-center justify-center rounded-full text-[10px] font-semibold ${
                    done
                      ? "bg-success-bg text-success"
                      : isCurrent
                        ? `${theme.progress} text-primary-foreground`
                        : "border border-border text-muted-foreground"
                  }`}
                >
                  {done ? <Check size={11} /> : idx + 1}
                </span>
                <span className="truncate">{c.shortTitle}</span>
              </Link>
            </li>
          );
        })}
      </ul>
      <button
        type="button"
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        className="mt-6 inline-flex items-center text-[12px] text-muted-foreground transition-colors hover:text-foreground"
      >
        ↑ Back to top
      </button>
    </nav>
  );

  return (
    <>
      <aside
        className="relative sticky top-14 hidden h-[calc(100vh-3.5rem)] shrink-0 overflow-y-auto border-r border-border/80 bg-muted/20 lg:block"
        style={{ width: sidebarWidth }}
      >
        {list}
        <div
          className="absolute right-0 top-0 h-full w-1 cursor-col-resize hover:bg-purple-light active:bg-purple"
          onMouseDown={(e) => {
            e.preventDefault();
            isResizing.current = true;
            document.body.style.cursor = "col-resize";
            document.body.style.userSelect = "none";
          }}
        />
      </aside>

      {/* Mobile drawer */}
      {open && (
        <div className="fixed inset-0 z-50 lg:hidden">
          <div className="absolute inset-0 bg-foreground/30" onClick={onClose} />
          <div className="absolute left-0 top-0 h-full w-[260px] overflow-y-auto bg-background">
            <div className="hairline-b flex items-center justify-between px-4 py-3">
              <span className="text-[14px] font-medium">Concepts</span>
              <button onClick={onClose} aria-label="Close menu">
                <X size={18} className="text-muted-foreground" />
              </button>
            </div>
            {list}
          </div>
        </div>
      )}
    </>
  );
}

function TableOfContents({
  concept,
  slug,
  track,
  mobile,
}: {
  concept: NonNullable<ReturnType<typeof conceptBySlug>>;
  slug: string;
  track: ReturnType<typeof executiveKbTrackForId>;
  mobile?: boolean;
}) {
  const [activeId, setActiveId] = useState<string>("");
  const { viewed, markViewed } = useSectionsViewed(slug);

  const headings = useMemo(() => {
    const list: { id: string; title: string; kind: string; sectionNum?: string }[] = [];
    concept.body.forEach((b) => {
      if (b.kind === "h") {
        list.push({
          id: b.title.toLowerCase().replace(/[^a-z0-9]+/g, "-"),
          title: b.title,
          kind: b.kind,
          sectionNum: b.number,
        });
      }
    });
    const bodyExamplesCount = concept.body.filter((b) => b.kind === "ex").length;
    if ((concept.examples?.length ?? 0) + bodyExamplesCount > 0) {
      list.push({ id: "examples", title: "Examples", kind: "h" });
    }
    list.push({ id: "quiz", title: "Quiz", kind: "h" });
    return list;
  }, [concept]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
            const num = (entry.target as HTMLElement).dataset.sectionNum;
            if (num) markViewed(num);
            break;
          }
        }
      },
      { rootMargin: "0px 0px -70% 0px" },
    );
    headings.forEach((h) => {
      const el = document.getElementById(h.id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, [headings, markViewed]);

  const theme = ROLE_THEMES[track];

  return (
    <nav
      className={
        mobile
          ? "w-full"
          : "sticky top-14 hidden h-[calc(100vh-3.5rem)] w-[220px] shrink-0 overflow-y-auto px-5 py-10 xl:block"
      }
    >
      <div className="rounded-xl border border-border bg-card p-4">
        <p className="section-label">On this page</p>
        <ul className="mt-3 space-y-1">
          {headings.map((h) => {
            const isViewed = h.sectionNum ? viewed.includes(h.sectionNum) : false;
            const isActive = activeId === h.id;
            return (
              <li key={h.id}>
                <a
                  href={`#${h.id}`}
                  className={`flex items-start gap-2 rounded-md px-2 py-1.5 text-[12.5px] leading-snug transition-colors ${
                    isActive
                      ? "bg-purple-light/60 font-medium text-purple-dark dark:bg-purple-light/10 dark:text-purple"
                      : isViewed
                        ? "text-foreground/75 hover:bg-muted/50 hover:text-foreground"
                        : "text-muted-foreground hover:bg-muted/50 hover:text-foreground"
                  }`}
                >
                  <span className="mt-1.5 inline-flex w-3 shrink-0 justify-center">
                    {isViewed ? (
                      <Check size={10} className="text-success" />
                    ) : (
                      <span
                        className={`h-1 w-1 rounded-full ${isActive ? theme.progress : "bg-muted-foreground/30"}`}
                      />
                    )}
                  </span>
                  {h.title}
                </a>
              </li>
            );
          })}
        </ul>
      </div>
    </nav>
  );
}
