import { createFileRoute, Link, notFound, useRouter } from "@tanstack/react-router";
import { useEffect, useRef, useState, useMemo } from "react";
import { Nav, Footer } from "@/components/site-nav";
import { ExampleTabs } from "@/components/example-tabs";
import { HighlightExplainer } from "@/components/highlight-explainer";
import { Quiz } from "@/components/quiz";
import { DiagramBlock } from "@/components/diagrams";
import {
  conceptBySlug,
  type ConceptBodyBlock,
} from "@/lib/concepts";
import { playbookForSlug, nextSlugInPlaybook, prevSlugInPlaybook } from "@/lib/playbooks";
import { useProgress, useReadMode, useSectionsViewed, useSavedDepth, type ReadMode } from "@/lib/storage";
import { Clock, Hand, Menu, X, Check, ChevronDown, BookOpen, Zap, Bookmark, BookmarkCheck } from "lucide-react";

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
      <div className="rounded-full bg-red-100 p-3 text-red-600">
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

export const Route = createFileRoute("/playbook/$slug")({
  loader: ({ params }) => {
    const concept = conceptBySlug(params.slug);
    if (!concept) throw notFound();
    return { concept };
  },
  head: ({ loaderData }) => {
    const c = loaderData?.concept;
    if (!c) return { meta: [{ title: "Concept — FactorBeam" }] };
    return {
      meta: [
        { title: `${c.title} — AI Playbook · FactorBeam` },
        { name: "description", content: c.summary },
        { property: "og:title", content: `${c.title} — FactorBeam` },
        { property: "og:description", content: c.summary },
        { property: "og:url", content: `/playbook/${c.slug}` },
        { property: "og:type", content: "article" },
      ],
      links: [{ rel: "canonical", href: `/playbook/${c.slug}` }],
    };
  },
  notFoundComponent: () => (
    <div className="flex min-h-screen items-center justify-center text-center">
      <div>
        <h1 className="text-2xl font-medium">Concept not found</h1>
        <Link to="/playbook" className="mt-3 inline-block text-purple hover:underline">
          ← Back to playbook
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
            className="mt-3 rounded-md bg-purple px-4 py-2 text-[13px] text-white"
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
  const { concept } = Route.useLoaderData() as {
    concept: NonNullable<ReturnType<typeof conceptBySlug>>;
  };
  const { progress, markDone, markInProgress } = useProgress();
  const [readMode, setReadMode] = useReadMode();
  const articleRef = useRef<HTMLElement | null>(null);
  const [sidebarOpen, setSidebarOpen] = useState(false);

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

  const playbook = playbookForSlug(concept.slug);
  const playbookSlugs = playbook?.sequence.map((c) => c.slug) ?? [concept.slug];
  const doneCount = playbookSlugs.filter((s) => progress[s] === "done").length;
  const pct = Math.round((doneCount / playbookSlugs.length) * 100);
  const nextSlug = nextSlugInPlaybook(concept.slug);
  const prevSlug = prevSlugInPlaybook(concept.slug);
  const next = nextSlug ? conceptBySlug(nextSlug) : undefined;
  const prev = prevSlug ? conceptBySlug(prevSlug) : undefined;

  const currentIdx = playbookSlugs.indexOf(concept.slug);
  const displayNum = currentIdx + 1;

  return (
    <div className="min-h-screen">
      <div
        className="fixed top-0 left-0 h-[2px] bg-purple z-50 transition-all duration-300"
        style={{ width: `${pct}%` }}
      />
      {/* Slim top nav with progress */}
      <header
        className="sticky top-0 z-40 hairline-b bg-background/85 backdrop-blur"
        style={{ height: 52 }}
      >
        <div className="mx-auto flex h-full max-w-[1400px] items-center justify-between px-4 sm:px-6">
          <div className="flex items-center gap-3">
            <button
              className="rounded-md p-1.5 text-muted-foreground hover:bg-muted lg:hidden"
              onClick={() => setSidebarOpen(true)}
              aria-label="Open concept menu"
            >
              <Menu size={18} />
            </button>
            <Link to="/" className="flex items-center gap-2">
              <span
                className="inline-block rounded-full bg-purple"
                style={{ width: 8, height: 8 }}
              />
            <span className="text-[15px] font-medium">FactorBeam</span>
            </Link>
          </div>
        </div>
      </header>

      <div className="mx-auto flex max-w-[1400px]">
        {/* Sidebar */}
        <Sidebar
          currentSlug={concept.slug}
          open={sidebarOpen}
          onClose={() => setSidebarOpen(false)}
        />

        {/* Main */}
        <main className="min-w-0 flex-1 px-5 py-12 sm:px-10 lg:px-16">
          <article ref={articleRef} className="relative mx-auto max-w-[660px]">
            <HighlightExplainer containerRef={articleRef} />

            <h1
              id="concept"
              className="text-4xl tracking-tight font-semibold leading-tight text-foreground"
            >
              {concept.title}
            </h1>
            <div className="mt-4 flex flex-wrap items-center gap-2 text-[13px] text-muted-foreground">
              <Clock size={14} className="opacity-70" />
              <span>~{essentialsMinutes} min essentials</span>
              <span className="opacity-50">·</span>
              <span>{concept.readingMinutes} min full</span>
              <span className="opacity-50">·</span>
              <span>{Object.keys(sectionMinutes).length} sections</span>
            </div>

            <ResumeSavedPill slug={concept.slug} />


            <p className="hairline-b mt-6 pb-5 text-base leading-relaxed text-muted-foreground">
              {concept.summary}
            </p>

            <div
              className="mt-6 rounded-xl bg-purple-light/70 px-5 py-4 text-[14px] text-purple-dark"
              style={{ borderLeft: "3px solid var(--purple)" }}
            >
              <p className="text-[10px] font-medium uppercase tracking-wider text-purple">
                Key takeaway
              </p>
              <p className="mt-1 font-medium leading-relaxed">{concept.keyTakeaway}</p>
            </div>

            {readMode === "deep" && (
              <div className="mt-5 flex items-center gap-2 rounded-md bg-muted/60 px-3 py-2 text-[12px] text-muted-foreground">
                <Hand size={13} />
                Select any sentence below to get a plain-English explanation
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

            {/* Examples */}
            {concept.examples.length > 0 && (
              <section id="examples" className="mt-14">
                <p className="section-label">Examples</p>

                <div
                  className="mt-3 rounded-xl bg-amber-bg/70 px-5 py-4 text-[14px] italic text-foreground"
                  style={{ borderLeft: "3px solid var(--amber)" }}
                >
                  {concept.pmCallout}
                </div>

                <div className="mt-5">
                  <ExampleTabs examples={concept.examples} />
                </div>
              </section>
            )}

            {/* Quiz */}
            <section id="quiz">
              <Quiz
                questions={concept.quiz}
                onComplete={() => markDone(concept.slug)}
                nextSlug={next?.slug}
                nextTitle={next?.shortTitle}
              />
            </section>

            {/* Bottom nav */}
            <div className="hairline-t mt-10 flex flex-wrap items-center justify-between gap-3 pt-5">
              {prev ? (
                <Link
                  to="/playbook/$slug"
                  params={{ slug: prev.slug }}
                  className="hairline rounded-md px-3 py-2 text-[13px] text-foreground hover:bg-muted"
                >
                  ← {prev.shortTitle}
                </Link>
              ) : (
                <span />
              )}
              <span className="text-[12px] text-muted-foreground">
                {progress[concept.slug] === "done" ? (
                  <span className="inline-flex items-center gap-1 text-success">
                    <Check size={12} /> Concept complete
                  </span>
                ) : (
                  "Finish the quiz to mark complete"
                )}
              </span>
              {next ? (
                <div className="group relative inline-block">
                  <Link
                    to="/playbook/$slug"
                    params={{ slug: next.slug }}
                    className={`rounded-md px-3 py-2 text-[13px] font-medium inline-block ${
                      progress[concept.slug] === "done"
                        ? "bg-purple text-white hover:bg-purple-dark"
                        : "hairline text-muted-foreground pointer-events-none opacity-60"
                    }`}
                  >
                    {next.shortTitle} →
                  </Link>
                  {progress[concept.slug] !== "done" && (
                    <div className="absolute bottom-full mb-2 left-1/2 -translate-x-1/2 whitespace-nowrap rounded bg-foreground px-2 py-1 text-[11px] text-background opacity-0 transition-opacity group-hover:opacity-100">
                      Complete quiz to unlock
                    </div>
                  )}
                </div>
              ) : (
                <Link
                  to="/playbook"
                  className="rounded-md bg-purple px-3 py-2 text-[13px] font-medium text-white hover:bg-purple-dark"
                >
                  Back to playbook
                </Link>
              )}
            </div>
          </article>
        </main>
        {/* Right TOC */}
        <TableOfContents concept={concept} slug={concept.slug} />
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
        className="hairline-t mt-10 pt-6"
        id={block.title.toLowerCase().replace(/[^a-z0-9]+/g, "-")}
        data-section-num={block.number}
      >
        <div className="flex items-center gap-2 text-[11px] font-medium uppercase tracking-wider text-purple">
          <span>Section {block.number}</span>
          {mins ? (
            <>
              <span className="opacity-40">·</span>
              <span className="text-muted-foreground normal-case font-normal tracking-normal">
                ~{mins} min
              </span>
            </>
          ) : null}
        </div>
        <h2 className="mt-1 text-2xl font-semibold tracking-tight leading-snug text-foreground">
          {block.title}
        </h2>
        {block.subtitle && (
          <p className="mt-1 text-[14px] italic text-muted-foreground">{block.subtitle}</p>
        )}
      </div>
    );
  }

  if (block.kind === "take") {
    return (
      <div
        className="rounded-xl bg-purple-light/70 px-5 py-4 text-[14px] text-purple-dark"
        style={{ borderLeft: "3px solid var(--purple)" }}
      >
        <p className="text-[10px] font-medium uppercase tracking-wider text-purple">Key takeaway</p>
        <p className="mt-1 font-medium leading-relaxed">{block.text}</p>
      </div>
    );
  }
  if (block.kind === "why") {
    if (skim) return null;
    return (
      <div
        className="rounded-xl bg-amber-bg/70 px-5 py-4 text-[14px] italic text-foreground"
        style={{ borderLeft: "3px solid var(--amber)" }}
      >
        <p className="mb-1 text-[10px] font-medium uppercase tracking-wider text-foreground/70 not-italic">
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
    <div className="hairline rounded-xl bg-card">
      <button
        onClick={() => setOpen((o) => !o)}
        className="flex w-full items-center justify-between gap-3 px-5 py-3 text-left"
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
    <div className="hairline rounded-xl bg-card/60" data-section-num={sectionNum}>
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
  open,
  onClose,
}: {
  currentSlug: string;
  open: boolean;
  onClose: () => void;
}) {
  const { progress } = useProgress();
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

  const playbook = playbookForSlug(currentSlug);
  const items = (playbook?.sequence ?? []).map((s) => {
    const c = conceptBySlug(s.slug);
    return { slug: s.slug, shortTitle: c?.shortTitle ?? s.slug };
  });

  const list = (
    <nav className="px-5 py-6 flex flex-col">
      <Link
        to="/playbooks"
        className="inline-flex items-center text-[13px] text-muted-foreground transition-colors hover:text-foreground mb-6"
      >
        ← Playbooks
      </Link>
      <p className="section-label">{playbook?.title ?? "Playbook"}</p>
      <ul className="mt-4 space-y-1">
        {items.map((c, idx) => {
          const isCurrent = c.slug === currentSlug;
          const done = progress[c.slug] === "done";

          return (
            <li key={c.slug} className="flex flex-col">
              <Link
                to="/playbook/$slug"
                params={{ slug: c.slug }}
                onClick={onClose}
                className={`flex items-center gap-3 rounded-md px-2.5 py-2 text-[13px] transition-colors ${
                  isCurrent
                    ? "bg-purple-light text-purple-dark"
                    : "text-foreground hover:bg-muted/60"
                }`}
              >
                <span
                  className={`flex items-center justify-center rounded-full text-[10px] font-medium shrink-0 ${
                    done
                      ? "bg-success-bg text-success"
                      : isCurrent
                        ? "bg-purple text-white"
                        : "hairline text-muted-foreground"
                  }`}
                  style={{ width: 20, height: 20 }}
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
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        className="mt-8 text-[12px] text-muted-foreground hover:text-foreground transition-colors inline-flex items-center"
      >
        ↑ Back to top
      </button>
    </nav>
  );

  return (
    <>
      <aside
        className="hairline-r relative sticky top-[52px] hidden h-[calc(100vh-52px)] shrink-0 overflow-y-auto bg-background lg:block"
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
  mobile,
}: {
  concept: NonNullable<ReturnType<typeof conceptBySlug>>;
  slug: string;
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
    if (concept.examples.length > 0) {
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

  return (
    <nav
      className={
        mobile
          ? "w-full"
          : "sticky top-[52px] h-[calc(100vh-52px)] w-[240px] shrink-0 overflow-y-auto hidden xl:block px-6 py-12"
      }
    >
      <p className="text-[11px] font-semibold tracking-wider uppercase text-muted-foreground mb-4">
        On this page
      </p>
      <ul className="space-y-2.5">
        {headings.map((h) => {
          const isViewed = h.sectionNum ? viewed.includes(h.sectionNum) : false;
          const isActive = activeId === h.id;
          return (
            <li key={h.id} className="flex items-start gap-1.5">
              <span className="mt-[5px] inline-flex w-3 shrink-0 justify-center">
                {isViewed ? (
                  <Check size={11} className="text-success" />
                ) : (
                  <span className="h-1 w-1 rounded-full bg-muted-foreground/30" />
                )}
              </span>
              <a
                href={`#${h.id}`}
                className={`block text-[13px] leading-snug transition-colors ${
                  isActive
                    ? "text-purple font-medium"
                    : isViewed
                      ? "text-foreground/70 hover:text-foreground"
                      : "text-muted-foreground hover:text-foreground"
                }`}
              >
                {h.title}
              </a>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
