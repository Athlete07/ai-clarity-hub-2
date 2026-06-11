import { createFileRoute, Link, useNavigate } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Nav, Footer } from "@/components/site-nav";
import { ShareMenu } from "@/components/share-menu";
import { useProgress } from "@/lib/storage";
import {
  dismissTrackBanner,
  executiveKbSearchSchema,
  executiveKbTrackSearch,
  isTrackBannerDismissed,
  readStoredRole,
  writeStoredRole,
} from "@/lib/executive-kb-track";
import { ArrowRight, BookOpen, CheckCircle2, X } from "lucide-react";
import {
  EXECUTIVE_KBS,
  formatExecutiveKbLabel,
  type ExecutiveKb,
} from "@/lib/executive-kb";
import { FOUNDER_EXECUTIVE_KBS } from "@/lib/executive-kb-founder";
import { BUSINESS_LEADER_EXECUTIVE_KBS } from "@/lib/executive-kb-business-leader";
import { brandOgMeta } from "@/lib/brand";
import { ROLES, ROLE_THEMES, type RoleId } from "@/lib/role-themes";

export const Route = createFileRoute("/executive-kb/")({
  validateSearch: (search) => executiveKbSearchSchema.parse(search),
  head: () => ({
    meta: [
      { title: "Executive KB — AI knowledge for product leaders — FactorBeam" },
      {
        name: "description",
        content:
          "Browse every FactorBeam Executive KB. Plain-English AI chapters sequenced for product managers, founders, and business leaders — pick the KB that matches the gap in your work.",
      },
      {
        property: "og:title",
        content: "Executive KB — AI knowledge for product leaders — FactorBeam",
      },
      {
        property: "og:description",
        content:
          "Plain-English Executive KB for product leaders — sequenced like a course, skimmable like a doc.",
      },
      { property: "og:url", content: "/executive-kb" },
      { property: "og:type", content: "website" },
      ...brandOgMeta(),
    ],
    links: [{ rel: "canonical", href: "/executive-kb" }],
  }),
  component: ExecutiveKbPage,
});

const EXECUTIVE_KBS_BY_ROLE: Record<RoleId, ExecutiveKb[]> = {
  pm: EXECUTIVE_KBS,
  founder: FOUNDER_EXECUTIVE_KBS,
  "business-leader": BUSINESS_LEADER_EXECUTIVE_KBS,
};

const ALL_KBS = [...EXECUTIVE_KBS, ...FOUNDER_EXECUTIVE_KBS, ...BUSINESS_LEADER_EXECUTIVE_KBS];
const TOTAL_CHAPTERS = ALL_KBS.reduce((n, kb) => n + kb.sequence.length, 0);

function ExecutiveKbPage() {
  const { track: trackFromUrl } = Route.useSearch();
  const navigate = useNavigate();
  const [role, setRole] = useState<RoleId | null>(trackFromUrl ?? null);
  const [showTrackBanner, setShowTrackBanner] = useState(false);
  const { progress } = useProgress();

  // URL ?track= wins; else restore from localStorage and sync URL for shareable links.
  useEffect(() => {
    if (trackFromUrl) {
      setRole(trackFromUrl);
      writeStoredRole(trackFromUrl);
      return;
    }

    const saved = readStoredRole();
    if (saved && EXECUTIVE_KBS_BY_ROLE[saved]) {
      setRole(saved);
      navigate({
        to: "/executive-kb",
        search: executiveKbTrackSearch(saved),
        replace: true,
      });
      return;
    }

    setRole(null);
  }, [trackFromUrl, navigate]);

  useEffect(() => {
    setShowTrackBanner(!isTrackBannerDismissed());
  }, []);

  const selectRole = (id: RoleId) => {
    setRole(id);
    writeStoredRole(id);
    navigate({
      to: "/executive-kb",
      search: executiveKbTrackSearch(id),
    });
  };

  const handleDismissBanner = () => {
    dismissTrackBanner();
    setShowTrackBanner(false);
  };

  const executiveKbs = role ? EXECUTIVE_KBS_BY_ROLE[role] || [] : [];
  const activeRole = role ? ROLES.find((r) => r.id === role) : null;

  return (
    <>
      <Nav />
      {role === null && showTrackBanner ? (
        <div
          role="status"
          className="border-b border-purple/15 bg-purple-light/50 dark:bg-purple-light/10"
        >
          <div className="mx-auto flex max-w-6xl items-start justify-between gap-4 px-5 py-3 sm:items-center sm:px-6">
            <p className="text-[13px] leading-snug text-purple-dark dark:text-purple sm:text-[14px]">
              Pick your track above to see chapters framed for your role.
            </p>
            <button
              type="button"
              onClick={handleDismissBanner}
              aria-label="Dismiss"
              className="shrink-0 rounded-md p-1.5 text-purple-dark/70 transition-colors hover:bg-purple-light hover:text-purple-dark dark:text-purple/70 dark:hover:text-purple"
            >
              <X size={16} />
            </button>
          </div>
        </div>
      ) : null}
      <main className="overflow-x-hidden">
        {/* ── Hero ───────────────────────────────────────────────── */}
        <section className="relative home-hero-mesh">
          <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
            <div className="mesh-glow-1 absolute -top-32 left-1/4 h-[400px] w-[400px] rounded-full bg-purple-light/35 blur-[120px] dark:bg-purple-light/8" />
            <div className="mesh-glow-2 absolute right-0 bottom-0 h-[320px] w-[320px] rounded-full bg-blue-bg/40 blur-[100px] dark:bg-blue-bg/10" />
          </div>

          <div className="mx-auto max-w-6xl px-5 pt-14 pb-12 sm:px-6 sm:pt-20 sm:pb-16">
            <p className="section-label">Executive KB</p>
            <h1 className="mt-3 text-[clamp(1.75rem,4.5vw,3rem)] font-medium leading-[1.1] tracking-[-0.035em] text-balance sm:text-pretty">
              Same AI concepts,{" "}
              <span className="text-purple">sequenced for your role.</span>
            </h1>
            <p className="mt-5 text-[16px] leading-relaxed text-muted-foreground text-balance sm:text-[17px] sm:text-pretty">
              {role
                ? `${executiveKbs.length} plain-English Executive KBs with chapters and quizzes — sequenced for ${activeRole?.title}s.`
                : "Same AI concepts, framed for how you actually work — pick your track to browse sequenced chapters."}
            </p>

            <div className="mt-8">
              <p className="section-label mb-3">Your track</p>
              <RoleTrackPills role={role} onSelect={selectRole} />
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

        <div className="mx-auto max-w-6xl px-5 py-12 sm:px-6 sm:py-16">
          {role === null ? (
            <>
              <p className="section-label mb-6">Compare tracks</p>
              <div className="grid gap-4 lg:grid-cols-3">
              {ROLES.map((r, i) => {
                const Icon = r.icon;
                const rTheme = ROLE_THEMES[r.id];
                const kbCount = EXECUTIVE_KBS_BY_ROLE[r.id].length;
                return (
                  <button
                    key={r.id}
                    type="button"
                    onClick={() => selectRole(r.id)}
                    className={`group relative rounded-2xl border border-border bg-card p-6 text-left transition-all duration-300 hover:-translate-y-1 hover:shadow-card-hover sm:p-7 ${rTheme.hoverBorder} animate-fade-in-up`}
                    style={{ animationDelay: `${i * 80}ms`, animationFillMode: "both" }}
                  >
                    {r.popular ? (
                      <span className="absolute right-5 top-5 rounded-full bg-purple-light px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wider text-purple-dark">
                        Popular
                      </span>
                    ) : null}
                    <div
                      className={`inline-flex h-11 w-11 items-center justify-center rounded-xl ${rTheme.iconBox}`}
                    >
                      <Icon size={20} />
                    </div>
                    <h2 className="mt-5 text-[18px] font-medium tracking-tight">{r.title}</h2>
                    <p className="mt-2 text-[14px] leading-relaxed text-muted-foreground">
                      {r.description}
                    </p>
                    <div className="mt-6 flex items-center justify-between">
                      <span className="text-[12px] text-muted-foreground">
                        {kbCount} Executive KBs
                      </span>
                      <span
                        className={`inline-flex items-center gap-1 text-[13px] font-medium ${rTheme.textHover.replace("group-hover/card:", "group-hover:")}`}
                      >
                        Browse track
                        <ArrowRight size={14} className="transition-transform group-hover:translate-x-0.5" />
                      </span>
                    </div>
                  </button>
                );
              })}
              </div>
            </>
          ) : (
            <div>
              <div className="mb-8">
                <p className="section-label">Library</p>
                <h2 className="mt-2 text-[22px] font-medium tracking-tight sm:text-[26px]">
                  {activeRole?.title} Executive KBs
                </h2>
              </div>
              {executiveKbs.length === 0 ? (
                <div className="rounded-2xl border border-dashed border-border bg-muted/20 px-8 py-16 text-center">
                  <BookOpen size={28} className="mx-auto text-muted-foreground/50" />
                  <p className="mt-4 text-[17px] font-medium">No Executive KB yet</p>
                  <p className="mx-auto mt-2 max-w-md text-[14px] leading-relaxed text-muted-foreground">
                    {activeRole?.title} entries are on the way. Switch to another track to
                    browse what&apos;s available today.
                  </p>
                </div>
              ) : (
                <div className="grid gap-4 lg:grid-cols-2">
                  {executiveKbs.map((kb, index) => (
                    <KbCard
                      key={kb.id}
                      kb={kb}
                      role={role}
                      progress={progress}
                      index={index}
                    />
                  ))}
                </div>
              )}
            </div>
          )}
        </div>
      </main>
      <Footer />
    </>
  );
}

function RoleTrackPills({
  role,
  onSelect,
}: {
  role: RoleId | null;
  onSelect: (id: RoleId) => void;
}) {
  return (
    <div
      className="flex flex-wrap gap-2"
      role="group"
      aria-label="Choose your role track"
    >
      {ROLES.map((r) => {
        const Icon = r.icon;
        const active = r.id === role;
        const rTheme = ROLE_THEMES[r.id];
        return (
          <button
            key={r.id}
            type="button"
            onClick={() => onSelect(r.id)}
            aria-pressed={active}
            className={`inline-flex items-center gap-2 rounded-full border px-4 py-2.5 text-[13px] font-semibold transition-all sm:px-5 ${
              active
                ? rTheme.pillActive
                : "border-border bg-card text-muted-foreground shadow-sm hover:border-border/80 hover:text-foreground"
            }`}
          >
            <Icon size={15} aria-hidden />
            {r.title}
            {r.popular && !active ? (
              <span className="rounded bg-purple-light px-1.5 py-0.5 text-[9px] font-bold uppercase tracking-wide text-purple-dark">
                Popular
              </span>
            ) : null}
          </button>
        );
      })}
    </div>
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

function KbCard({
  kb,
  role,
  progress,
  index,
}: {
  kb: ExecutiveKb;
  role: RoleId;
  progress: Record<string, "in-progress" | "done" | undefined>;
  index: number;
}) {
  const theme = ROLE_THEMES[role];
  const moduleCount = kb.sequence.length || kb.topics.length;
  const doneCount = kb.sequence.filter((s) => progress[s.slug] === "done").length;
  const pct = kb.sequence.length ? Math.round((doneCount / kb.sequence.length) * 100) : 0;
  const nextSlug =
    kb.sequence.find((s) => progress[s.slug] !== "done")?.slug ?? kb.sequence[0]?.slug;
  const hasChapters = kb.sequence.length > 0;

  return (
    <article
      className={`group relative flex flex-col rounded-2xl border border-border bg-card p-6 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-brand sm:p-7 ${theme.cardHover} animate-fade-in-up`}
      style={{ animationDelay: `${index * 60}ms`, animationFillMode: "both" }}
    >
      <div className="flex items-start justify-between gap-3">
        <div className="flex flex-wrap items-center gap-2">
          <span
            className={`rounded-full px-2.5 py-0.5 text-[10px] font-semibold uppercase tracking-wider ${theme.badge}`}
          >
            {formatExecutiveKbLabel(role, kb.order)}
          </span>
          <span className="rounded-full bg-muted px-2.5 py-0.5 text-[10px] font-medium text-muted-foreground">
            {kb.difficulty}
          </span>
        </div>
        {hasChapters ? (
          <ShareMenu
            title={kb.title}
            summary={kb.description}
            kbId={kb.id}
            chapterSlug={nextSlug}
            variant="icon"
          />
        ) : null}
      </div>

      <h3 className="mt-4 text-[19px] font-medium tracking-tight text-foreground sm:text-[20px]">
        {kb.title}
      </h3>
      {kb.subtitle ? (
        <p className="mt-1.5 text-[13px] font-medium text-muted-foreground">{kb.subtitle}</p>
      ) : null}
      <p className="mt-3 flex-1 text-[14px] leading-relaxed text-muted-foreground">
        {kb.description}
      </p>

      <div className="mt-4 flex flex-wrap gap-1.5">
        {kb.topics.slice(0, 4).map((topic) => (
          <span
            key={topic}
            className="rounded-full border border-border/60 bg-muted/30 px-2.5 py-0.5 text-[11px] text-muted-foreground"
          >
            {topic}
          </span>
        ))}
        {kb.topics.length > 4 ? (
          <span className="px-1 text-[11px] text-muted-foreground">
            +{kb.topics.length - 4}
          </span>
        ) : null}
      </div>

      <div className="mt-6 flex items-center gap-4 border-t border-border/60 pt-5">
        <div className="min-w-0 flex-1">
          <div className="flex items-center justify-between text-[11px] text-muted-foreground">
            <span>
              ~{kb.readingMinutes} min · {moduleCount} chapters
            </span>
            {pct > 0 ? <span>{pct}%</span> : null}
          </div>
          {pct > 0 ? (
            <div className="mt-2 h-1 overflow-hidden rounded-full bg-muted">
              <div
                className={`h-full rounded-full transition-all ${theme.progress}`}
                style={{ width: `${pct}%` }}
              />
            </div>
          ) : null}
        </div>

        {hasChapters && nextSlug ? (
          <Link
            to="/executive-kb/$kbId/$chapterSlug"
            params={{ kbId: kb.id, chapterSlug: nextSlug }}
            className={`inline-flex shrink-0 items-center gap-1.5 rounded-lg px-4 py-2 text-[12px] font-semibold text-primary-foreground transition-opacity hover:opacity-90 ${theme.progress}`}
          >
            {pct === 0 ? (
              <>
                Start <ArrowRight size={13} />
              </>
            ) : pct === 100 ? (
              <>
                <CheckCircle2 size={13} /> Review
              </>
            ) : (
              "Resume"
            )}
          </Link>
        ) : (
          <span className="shrink-0 rounded-lg bg-muted px-4 py-2 text-[12px] font-semibold text-muted-foreground">
            Coming soon
          </span>
        )}
      </div>
    </article>
  );
}
