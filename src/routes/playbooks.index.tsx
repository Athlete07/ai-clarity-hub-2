import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Nav, Footer } from "@/components/site-nav";
import { ShareMenu } from "@/components/share-menu";
import { useProgress } from "@/lib/storage";
import { Briefcase, Crown, ArrowRight } from "lucide-react";
import { PLAYBOOKS, formatPlaybookLabel, type Playbook } from "@/lib/playbooks";
import { FOUNDER_PLAYBOOKS } from "@/lib/playbooks-founder";

export const Route = createFileRoute("/playbooks/")({
  head: () => ({
    meta: [
      { title: "All AI playbooks for product managers — FactorBeam" },
      {
        name: "description",
        content:
          "Browse every FactorBeam playbook. Plain-English AI chapters sequenced for product managers — pick the playbook that matches the gap in your work.",
      },
      { property: "og:title", content: "All AI playbooks for product managers — FactorBeam" },
      {
        property: "og:description",
        content:
          "Plain-English AI playbooks for product managers — sequenced like a course, skimmable like a doc.",
      },
      { property: "og:url", content: "/playbooks" },
      { property: "og:type", content: "website" },
    ],
    links: [{ rel: "canonical", href: "/playbooks" }],
  }),
  component: PlaybooksPage,
});

type RoleId = "pm" | "founder";

type Role = {
  id: RoleId;
  title: string;
  description: string;
  icon: typeof Briefcase;
  iconBg: string;
  iconColor: string;
  popular?: boolean;
};

const ROLES: Role[] = [
  {
    id: "pm",
    title: "Product Manager",
    description:
      "Understand AI well enough to write better specs, challenge your engineering team, and spot BS in vendor pitches.",
    icon: Briefcase,
    iconBg: "#EEEDFE",
    iconColor: "#534AB7",
    popular: true,
  },
  {
    id: "founder",
    title: "Founder/CEO",
    description:
      "Make AI strategy, vendor, and roadmap calls with confidence — without needing to become an engineer first.",
    icon: Crown,
    iconBg: "#FEF3E2",
    iconColor: "#B45309",
  },
];

const THEMES = {
  pm: {
    border: "border-purple",
    glow: "from-purple-light/20",
    badge: "bg-purple-light text-purple-dark border border-purple/10",
    progress: "bg-purple",
    textHover: "group-hover/card:text-purple",
    pillActive: "bg-purple text-white border-purple",
    cardHover: "hover:border-purple/40",
  },
  founder: {
    border: "border-amber",
    glow: "from-amber-bg/30",
    badge: "bg-amber-bg text-amber border border-amber/10",
    progress: "bg-amber",
    textHover: "group-hover/card:text-amber",
    pillActive: "bg-amber text-white border-amber",
    cardHover: "hover:border-amber/40",
  },
} as const;

const PLAYBOOKS_BY_ROLE: Record<RoleId, Playbook[]> = {
  pm: PLAYBOOKS,
  founder: FOUNDER_PLAYBOOKS,
};

const ROLE_KEY = "factorbeam_selected_role";

const HOVER_BORDERS: Record<RoleId, string> = {
  pm: "hover:border-purple/50 dark:hover:border-purple-dark/50",
  founder: "hover:border-amber/50 dark:hover:border-amber/50",
};

function PlaybooksPage() {
  const [role, setRole] = useState<RoleId | null>(null);
  const { progress } = useProgress();

  useEffect(() => {
    try {
      const saved = window.localStorage.getItem(ROLE_KEY) as RoleId | null;
      if (saved && PLAYBOOKS_BY_ROLE[saved]) {
        setRole(saved);
      }
    } catch {
      // ignore
    }
  }, []);

  const selectRole = (id: RoleId) => {
    setRole(id);
    try {
      window.localStorage.setItem(ROLE_KEY, id);
    } catch {
      // ignore
    }
  };

  const playbooks = role ? PLAYBOOKS_BY_ROLE[role] || [] : [];

  return (
    <>
      <Nav />
      <main className="mx-auto max-w-[720px] px-6 pt-16 pb-24">
        {role === null ? (
          /* State A: Unselected */
          <div className="animate-fade-in-up relative">
            {/* Ambient Background Mesh Glows */}
            <div className="absolute top-1/2 left-1/4 -translate-y-1/2 -z-20 w-[280px] h-[280px] rounded-full bg-purple-light/35 blur-[80px] dark:bg-purple-light/5 pointer-events-none mesh-glow-1" />
            <div className="absolute top-1/3 right-1/4 -translate-y-1/2 -z-20 w-[240px] h-[240px] rounded-full bg-blue-bg/40 blur-[80px] dark:bg-blue-bg/5 pointer-events-none mesh-glow-2" />

            {/* Intro */}
            <div className="text-center relative z-10">
              <h1 className="text-[32px] font-medium leading-tight text-foreground">
                AI concepts, sequenced for your role
              </h1>
              <p className="mt-3 text-[16px] text-muted-foreground">
                Same AI concepts, sequenced for how you actually work. Choose your role to begin.
              </p>
            </div>

            {/* Role Selectors Grid */}
            <div className="mt-8 grid grid-cols-1 gap-3 sm:grid-cols-2 relative z-10">
              {ROLES.map((r, index) => {
                const Icon = r.icon;
                return (
                  <button
                    key={r.id}
                    type="button"
                    onClick={() => selectRole(r.id)}
                    className={`relative rounded-xl p-4 text-left bg-card hairline transition-all hover:scale-[1.02] hover:shadow-[0_8px_30px_rgba(0,0,0,0.06)] cursor-pointer animate-fade-in-up duration-300 ${HOVER_BORDERS[r.id]}`}
                    style={{
                      minHeight: 44,
                      animationDelay: `${index * 100}ms`,
                      animationFillMode: "both",
                    }}
                  >
                    <div className="flex items-center gap-3">
                      <div
                        className="flex items-center justify-center rounded-lg shrink-0"
                        style={{ width: 32, height: 32, background: r.iconBg, color: r.iconColor }}
                      >
                        <Icon size={16} />
                      </div>
                      <h3 className="text-[14px] font-semibold text-foreground">{r.title}</h3>
                    </div>
                    <p className="mt-2 text-[12px] text-muted-foreground leading-snug">
                      {r.description}
                    </p>
                    {r.popular && (
                      <span className="absolute top-2 right-2 rounded-full px-1.5 py-0.5 text-[9px] font-semibold bg-purple text-white">
                        Popular
                      </span>
                    )}
                  </button>
                );
              })}
            </div>
          </div>
        ) : (
          /* State B: Active Role Selected */
          <div className="animate-fade-in-down">
            {/* Compact Header & Horizontal Selector Pills */}
            <div className="text-center">
              <h1 className="text-[24px] font-medium leading-tight text-foreground">
                AI concepts, sequenced for your role
              </h1>

              <div className="mt-4 flex flex-wrap justify-center gap-2">
                {ROLES.map((r) => {
                  const Icon = r.icon;
                  const active = r.id === role;
                  const theme = THEMES[r.id];
                  return (
                    <button
                      key={r.id}
                      type="button"
                      onClick={() => selectRole(r.id)}
                      aria-pressed={active}
                      className={`px-3 py-1.5 rounded-full text-[12px] font-semibold transition-all border flex items-center gap-1.5 cursor-pointer ${
                        active
                          ? theme.pillActive
                          : "bg-muted/40 hover:bg-muted text-muted-foreground border-border/40"
                      }`}
                    >
                      <span
                        className="flex items-center justify-center rounded shrink-0"
                        style={{
                          width: 14,
                          height: 14,
                          background: active ? "transparent" : r.iconBg,
                          color: active ? "white" : r.iconColor,
                        }}
                      >
                        <Icon size={10} />
                      </span>
                      {r.title}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Playbooks Vertical Stack */}
            <div className="mt-10 flex flex-col gap-4">
              <div className="flex items-center justify-between pl-1 pr-1">
                <h2 className="text-[11px] font-semibold text-muted-foreground uppercase tracking-wider">
                  Available Playbooks
                </h2>
                <button
                  type="button"
                  onClick={() => {
                    setRole(null);
                    try {
                      window.localStorage.removeItem(ROLE_KEY);
                    } catch {
                      // ignore
                    }
                  }}
                  className="text-[11px] text-purple hover:underline font-medium cursor-pointer"
                >
                  View all roles
                </button>
              </div>
              {playbooks.length === 0 ? (
                <div className="rounded-2xl border border-dashed border-border/60 bg-muted/20 px-6 py-12 text-center">
                  <p className="text-[15px] font-medium text-foreground">No playbooks yet</p>
                  <p className="mx-auto mt-2 max-w-[360px] text-[13px] leading-relaxed text-muted-foreground">
                    {ROLES.find((r) => r.id === role)?.title} playbooks are on the way. Switch to
                    Product Manager to browse what&apos;s available today.
                  </p>
                </div>
              ) : (
              playbooks.map((p, index) => {
                const moduleCount = p.sequence.length || p.topics.length;
                const pDoneCount = p.sequence.filter((s) => progress[s.slug] === "done").length;
                const pPct = p.sequence.length
                  ? Math.round((pDoneCount / p.sequence.length) * 100)
                  : 0;
                const theme = THEMES[role];
                const nextIncompleteSlug =
                  p.sequence.find((s) => progress[s.slug] !== "done")?.slug || p.sequence[0]?.slug;

                return (
                  <div
                    key={p.id}
                    className={`rounded-2xl border p-4 sm:p-5 bg-card relative transition-all duration-300 border-border/60 ${theme.cardHover} animate-fade-in-up`}
                    style={{
                      animationDelay: `${index * 120}ms`,
                      animationFillMode: "both",
                    }}
                  >
                    {/* Glow backplate effect */}
                    <div
                      className={`absolute inset-0 -z-10 rounded-2xl bg-gradient-to-tr ${theme.glow} to-transparent blur-xl pointer-events-none opacity-50 dark:opacity-100`}
                    />

                    {/* Absolute CTA button */}
                    {p.sequence.length > 0 ? (
                      <Link
                        to="/playbooks/$playbookId/$chapterSlug"
                        params={{ playbookId: p.id, chapterSlug: nextIncompleteSlug as string }}
                        className={`absolute top-4 right-4 sm:top-5 sm:right-5 py-1.5 px-3.5 text-[11px] font-semibold rounded-lg text-white transition-all inline-flex items-center gap-1.5 justify-center cursor-pointer ${theme.progress} hover:opacity-90`}
                      >
                        {pPct === 0 ? (
                          <>
                            Start Playbook <ArrowRight size={12} />
                          </>
                        ) : pPct === 100 ? (
                          "Review Playbook"
                        ) : (
                          "Resume Playbook"
                        )}
                      </Link>
                    ) : (
                      <span
                        className={`absolute top-4 right-4 sm:top-5 sm:right-5 py-1.5 px-3.5 text-[11px] font-semibold rounded-lg text-white/50 bg-muted-foreground/30 transition-all inline-flex items-center gap-1.5 justify-center cursor-not-allowed`}
                      >
                        Coming Soon
                      </span>
                    )}

                    <div className="flex flex-col gap-2.5">
                      {/* Metadata row: chips + share (no extra footer row) */}
                      <div className="flex items-center gap-2 pr-[120px] sm:pr-[140px]">
                        <div className="flex min-w-0 flex-1 flex-wrap items-center gap-2">
                          <span
                            className={`rounded-full px-2.5 py-0.5 text-[10px] font-semibold uppercase tracking-wider ${theme.badge}`}
                          >
                            {formatPlaybookLabel(p.order)}
                          </span>
                          <span
                            className={`rounded-full px-2.5 py-0.5 text-[10px] font-semibold uppercase tracking-wider ${theme.badge}`}
                          >
                            {p.difficulty}
                          </span>
                          <span className="rounded-full bg-muted px-2 py-0.5 text-[10px] font-medium text-muted-foreground">
                            ~{p.readingMinutes} min read
                          </span>
                          <span className="rounded-full bg-muted px-2 py-0.5 text-[10px] font-medium text-muted-foreground">
                            {moduleCount} Modules
                          </span>
                        </div>
                        {p.sequence.length > 0 && (
                          <ShareMenu
                            title={p.title}
                            summary={p.description}
                            playbookId={p.id}
                            chapterSlug={nextIncompleteSlug}
                            variant="icon"
                          />
                        )}
                      </div>

                      {/* Title & Description */}
                      <div>
                        <div className="flex flex-wrap items-center gap-3 pr-[120px] sm:pr-[140px]">
                          <h3 className="text-[17px] font-bold text-foreground tracking-tight">
                            {p.title}
                          </h3>
                          {pPct > 0 && (
                            <div className="flex items-center gap-2">
                              <div className="h-1 w-16 overflow-hidden rounded-full bg-muted shrink-0">
                                <div
                                  className={`h-full transition-all duration-500 rounded-full ${theme.progress}`}
                                  style={{ width: `${pPct}%` }}
                                />
                              </div>
                              <span className="text-[10px] text-muted-foreground font-medium whitespace-nowrap">
                                {pPct}%
                              </span>
                            </div>
                          )}
                        </div>
                        {p.subtitle && (
                          <p className="mt-1 text-[12px] font-medium text-muted-foreground">
                            {p.subtitle}
                          </p>
                        )}
                        <p className="mt-1 text-[13px] text-muted-foreground leading-relaxed">
                          {p.description}
                        </p>
                      </div>

                      {/* Topics Covered */}
                      <div className="flex flex-wrap gap-1.5 items-center">
                        <span className="text-[10px] font-bold uppercase tracking-wider text-muted-foreground shrink-0 mr-1">
                          Topics:
                        </span>
                        {p.topics.map((topic) => (
                          <span
                            key={topic}
                            className="inline-flex items-center rounded-full px-2.5 py-0.5 text-[11px] font-medium bg-muted/40 text-muted-foreground border border-border/60"
                          >
                            {topic}
                          </span>
                        ))}
                      </div>

                    </div>
                  </div>
                );
              })
              )}
            </div>
          </div>
        )}
      </main>
      <Footer />
    </>
  );
}
