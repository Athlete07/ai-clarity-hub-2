import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Nav, Footer } from "@/components/site-nav";
import { useProgress } from "@/lib/storage";
import {
  Briefcase,
  ArrowRight,
} from "lucide-react";

export const Route = createFileRoute("/playbooks")({
  head: () => ({
    meta: [
      { title: "AI concepts, sequenced for your role — FactorBeam" },
      {
        name: "description",
        content:
          "Same AI concepts, sequenced for how you actually work. Pick your role and read in the order that makes the most sense for you.",
      },
      { property: "og:title", content: "AI concepts, sequenced for your role — FactorBeam" },
      {
        property: "og:description",
        content: "Role-based sequences through the FactorBeam AI playbook.",
      },
    ],
    links: [{ rel: "canonical", href: "/playbooks" }],
  }),
  component: PlaybooksPage,
});

type RoleId = "pm";

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
];

const THEMES = {
  pm: {
    border: "border-purple",
    glow: "from-purple-light/20",
    badge: "bg-purple-light text-purple-dark border border-purple/10",
    progress: "bg-purple",
    textHover: "group-hover/card:text-purple",
  },
} as const;

const PM_FOUNDATIONS_SEQUENCE = [
  {
    slug: "pm-ai-hierarchy",
    note: "Learn the core definitions (AI vs ML vs DL) and probability-based thinking.",
  },
  {
    slug: "pm-how-models-learn",
    note: "Understand how models learn from data & labels and how they are evaluated.",
  },
];

type Playbook = {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  difficulty: "Beginner" | "Intermediate" | "Advanced";
  readingMinutes: number;
  topics: string[];
  sequence: { slug: string; note: string }[];
};

const PLAYBOOKS_BY_ROLE: Record<RoleId, Playbook[]> = {
  pm: [
    {
      id: "pm-foundations",
      title: "AI Foundations for PMs",
      subtitle: "A technical fast-track focusing on models and evaluation.",
      description:
        "A specialized sequence focusing on the technical mechanics of AI, model training vs inference, validation metrics, and handling bias/hallucination.",
      difficulty: "Intermediate",
      readingMinutes: 20,
      topics: [
        "AI vs ML vs DL",
        "How models learn",
      ],
      sequence: PM_FOUNDATIONS_SEQUENCE,
    },
  ],
};

const ROLE_KEY = "factorbeam_selected_role";

const HOVER_BORDERS: Record<RoleId, string> = {
  pm: "hover:border-purple/50 dark:hover:border-purple-dark/50",
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
                  return (
                    <button
                      key={r.id}
                      type="button"
                      onClick={() => selectRole(r.id)}
                      aria-pressed={active}
                      className={`px-3 py-1.5 rounded-full text-[12px] font-semibold transition-all border flex items-center gap-1.5 cursor-pointer ${
                        active
                          ? "bg-purple text-white border-purple"
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
              <div className="flex items-center justify-between pl-1">
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
              {playbooks.map((p, index) => {
                const pDoneCount = p.sequence.filter((s) => progress[s.slug] === "done").length;
                const pPct = Math.round((pDoneCount / p.sequence.length) * 100);
                const theme = THEMES[role];
                const nextIncompleteSlug =
                  p.sequence.find((s) => progress[s.slug] !== "done")?.slug || p.sequence[0]?.slug;

                return (
                  <div
                    key={p.id}
                    className="rounded-2xl border p-4 pr-[150px] sm:p-5 sm:pr-[165px] bg-card relative transition-all duration-300 border-border/60 hover:border-purple/40 animate-fade-in-up"
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
                    <Link
                      to="/playbook/$slug"
                      params={{ slug: nextIncompleteSlug }}
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

                    <div className="flex flex-col gap-3">
                      {/* Top Row: Badges */}
                      <div className="flex flex-wrap items-center gap-2">
                        <span
                          className={`rounded-full px-2.5 py-0.5 text-[10px] font-semibold uppercase tracking-wider ${theme.badge}`}
                        >
                          {p.difficulty}
                        </span>
                        <span className="rounded-full bg-muted px-2 py-0.5 text-[10px] font-medium text-muted-foreground">
                          ~{p.readingMinutes} min read
                        </span>
                        <span className="rounded-full bg-muted px-2 py-0.5 text-[10px] font-medium text-muted-foreground">
                          {p.sequence.length} Modules
                        </span>
                      </div>

                      {/* Title & Description */}
                      <div>
                        <h3 className="text-[17px] font-bold text-foreground tracking-tight">
                          {p.title}
                        </h3>
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

                      {/* Slim Progress bar */}
                      {pPct > 0 && (
                        <div className="flex items-center gap-3 w-full sm:max-w-[280px] mt-1">
                          <div className="h-1 w-24 overflow-hidden rounded-full bg-muted shrink-0">
                            <div
                              className={`h-full transition-all duration-500 rounded-full ${theme.progress}`}
                              style={{ width: `${pPct}%` }}
                            />
                          </div>
                          <span className="text-[11px] text-muted-foreground font-medium whitespace-nowrap">
                            {pPct}% complete ({pDoneCount} of {p.sequence.length})
                          </span>
                        </div>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        )}
      </main>
      <Footer />
    </>
  );
}
