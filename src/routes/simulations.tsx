import { createFileRoute, Link } from "@tanstack/react-router";
import { useCallback, useEffect, useState } from "react";
import { Nav, Footer } from "@/components/site-nav";
import {
  Hexagon,
  Cpu,
  Network,
  ShieldAlert,
  Keyboard,
  Activity,
  Zap,
} from "lucide-react";
import {
  FEATURED_GAME,
  AGENT_OVERSEER_GUIDE,
  getWeeklyPlayCount,
  recordGamePlay,
} from "@/lib/simulations";

export const Route = createFileRoute("/simulations")({
  head: () => ({
    meta: [
      { title: "Agent Overseer — an AI orchestration simulation | FactorBeam" },
      {
        name: "description",
        content:
          "Schedule two AI agents across a live task graph, resolve livelocks with mutex locks, and clear 10 escalating waves. Free, no login.",
      },
      { property: "og:title", content: "Agent Overseer — FactorBeam" },
      {
        property: "og:description",
        content:
          "An 8-minute simulation that builds real instincts for agent orchestration, contention, and recovery.",
      },
      { property: "og:url", content: "/simulations" },
      { property: "og:type", content: "website" },
    ],
    links: [{ rel: "canonical", href: "/simulations" }],
  }),
  component: SimulationsPage,
});

function useWeeklyPlayCount(gameId: string) {
  const [count, setCount] = useState(0);

  const refresh = useCallback(() => {
    setCount(getWeeklyPlayCount(gameId));
  }, [gameId]);

  useEffect(() => {
    refresh();
    const onStorage = () => refresh();
    window.addEventListener("factorbeam:storage", onStorage);
    window.addEventListener("storage", onStorage);
    return () => {
      window.removeEventListener("factorbeam:storage", onStorage);
      window.removeEventListener("storage", onStorage);
    };
  }, [refresh]);

  const recordPlay = useCallback(() => {
    const next = recordGamePlay(gameId);
    setCount(next);
  }, [gameId]);

  return { count, recordPlay };
}

function StatTile({
  label,
  value,
  hint,
}: {
  label: string;
  value: string;
  hint?: string;
}) {
  return (
    <div className="border-l border-[#00F5FF]/30 pl-4">
      <div className="text-[10px] font-semibold uppercase tracking-[0.18em] text-[#4A7FA5]">
        {label}
      </div>
      <div className="mt-1 font-mono text-[22px] leading-none text-[#E8F4FD]">
        {value}
      </div>
      {hint && (
        <div className="mt-1 text-[11px] text-[#4A7FA5]">{hint}</div>
      )}
    </div>
  );
}

function BriefingBlock({
  index,
  icon: Icon,
  title,
  body,
}: {
  index: string;
  icon: typeof Cpu;
  title: string;
  body: string;
}) {
  return (
    <div className="relative rounded-lg border border-[#1E3A5F] bg-[#070E1A] p-5 transition-colors hover:border-[#00F5FF]/40">
      <div className="absolute -top-3 left-4 bg-[#070E1A] px-2 font-mono text-[10px] tracking-[0.2em] text-[#00F5FF]/80">
        {index}
      </div>
      <div className="flex items-center gap-2 text-[#00F5FF]">
        <Icon size={16} />
        <h3 className="text-[13px] font-semibold uppercase tracking-[0.14em] text-[#E8F4FD]">
          {title}
        </h3>
      </div>
      <p className="mt-2 text-[13.5px] leading-relaxed text-[#9FB8D1]">{body}</p>
    </div>
  );
}

function SimulationsPage() {
  const { count, recordPlay } = useWeeklyPlayCount(FEATURED_GAME.id);
  const playersLabel =
    count === 1 ? "1 player this week" : `${count.toLocaleString()} players this week`;

  return (
    <>
      <Nav />
      <main className="bg-background pb-24">
        {/* HERO — terminal / HUD aesthetic */}
        <section className="relative overflow-hidden bg-[#050A14] text-[#E8F4FD]">
          {/* animated grid backdrop */}
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0 opacity-[0.18]"
            style={{
              backgroundImage:
                "linear-gradient(#00F5FF22 1px, transparent 1px), linear-gradient(90deg, #00F5FF22 1px, transparent 1px)",
              backgroundSize: "48px 48px",
              maskImage:
                "radial-gradient(ellipse at 50% 30%, black 30%, transparent 75%)",
            }}
          />
          {/* glow */}
          <div
            aria-hidden
            className="pointer-events-none absolute left-1/2 top-0 h-[420px] w-[820px] -translate-x-1/2 rounded-full blur-3xl"
            style={{
              background:
                "radial-gradient(closest-side, #00F5FF33, transparent 70%)",
            }}
          />

          <div className="relative mx-auto max-w-[1080px] px-6 pt-20 pb-16 sm:pt-28 sm:pb-20">
            {/* eyebrow */}
            <div className="flex items-center gap-3 font-mono text-[11px] tracking-[0.24em] text-[#00F5FF]">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#00F5FF] opacity-60" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-[#00F5FF]" />
              </span>
              FACTORBEAM // SIMULATION 001
              <span className="text-[#4A7FA5]">— LIVE</span>
            </div>

            <h1 className="mt-6 max-w-[820px] font-mono text-[44px] font-medium leading-[1.05] tracking-tight text-[#E8F4FD] sm:text-[64px]">
              Agent{" "}
              <span className="text-[#00F5FF]">Overseer</span>
              <span className="text-[#FF3864]">.</span>
            </h1>

            <p className="mt-5 max-w-[640px] text-[17px] leading-relaxed text-[#9FB8D1] sm:text-[19px]">
              {FEATURED_GAME.tagline} Resolve livelocks, hold the line through{" "}
              <span className="text-[#E8F4FD]">10 escalating waves</span>, and
              build the orchestration instincts no whitepaper can teach.
            </p>

            {/* stat bar */}
            <div className="mt-10 grid grid-cols-2 gap-y-6 sm:grid-cols-4 sm:gap-x-2">
              <StatTile label="Duration" value="~8" hint="minutes" />
              <StatTile label="Difficulty" value="HARD" hint="no hand-holding" />
              <StatTile label="Waves" value="10" hint="escalating contention" />
              <StatTile label="Agents" value="02" hint="ALPHA · BETA" />
            </div>

            {/* CTA row */}
            <div className="mt-10 flex flex-col items-start gap-4 sm:flex-row sm:items-center">
              <Link
                to={FEATURED_GAME.route}
                onClick={recordPlay}
                className="group inline-flex items-center gap-3 rounded-md bg-[#00F5FF] px-7 py-3.5 font-mono text-[14px] font-semibold tracking-wider text-[#050A14] shadow-[0_0_40px_-4px_#00F5FF80] transition-all hover:shadow-[0_0_60px_-2px_#00F5FFcc]"
              >
                <Hexagon size={16} className="transition-transform group-hover:rotate-60" />
                LAUNCH SIMULATION
                <span className="opacity-70">→</span>
              </Link>
              <div className="flex items-center gap-2 font-mono text-[11px] tracking-[0.18em] text-[#4A7FA5]">
                <Activity size={12} className="text-[#00F5FF]" />
                {playersLabel.toUpperCase()}
              </div>
            </div>
          </div>
        </section>

        {/* MISSION BRIEFING */}
        <section className="bg-[#040813] py-20 text-[#E8F4FD]">
          <div className="mx-auto max-w-[1080px] px-6">
            <div className="mb-10 flex items-end justify-between gap-4 border-b border-[#1E3A5F] pb-4">
              <div>
                <div className="font-mono text-[11px] tracking-[0.24em] text-[#00F5FF]">
                  // MISSION BRIEFING
                </div>
                <h2 className="mt-2 text-[28px] font-medium tracking-tight sm:text-[34px]">
                  What you'll actually do
                </h2>
              </div>
              <div className="hidden font-mono text-[11px] tracking-[0.18em] text-[#4A7FA5] sm:block">
                SECTOR 01 / 03
              </div>
            </div>

            <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
              <BriefingBlock
                index="01 / WHAT"
                icon={Network}
                title="The simulation"
                body={AGENT_OVERSEER_GUIDE.what}
              />
              <BriefingBlock
                index="02 / WHY"
                icon={Cpu}
                title="The instinct"
                body={AGENT_OVERSEER_GUIDE.why}
              />
              <BriefingBlock
                index="03 / HOW"
                icon={ShieldAlert}
                title="The loop"
                body="Dispatch agents, watch dependencies unfold, then break livelocks with mutex locks before the wave timer runs out."
              />
            </div>
          </div>
        </section>

        {/* PLAYBOOK + CONTROLS */}
        <section className="bg-[#050A14] py-20 text-[#E8F4FD]">
          <div className="mx-auto grid max-w-[1080px] grid-cols-1 gap-10 px-6 lg:grid-cols-5">
            {/* steps */}
            <div className="lg:col-span-3">
              <div className="font-mono text-[11px] tracking-[0.24em] text-[#00F5FF]">
                // PROTOCOL
              </div>
              <h2 className="mt-2 text-[28px] font-medium tracking-tight sm:text-[34px]">
                How to survive 10 waves
              </h2>
              <ol className="mt-8 space-y-5">
                {AGENT_OVERSEER_GUIDE.steps.map((step, i) => (
                  <li
                    key={i}
                    className="flex gap-4 rounded-lg border border-[#1E3A5F] bg-[#070E1A] p-4 transition-colors hover:border-[#00F5FF]/40"
                  >
                    <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded border border-[#00F5FF]/40 bg-[#00F5FF]/5 font-mono text-[13px] text-[#00F5FF]">
                      {String(i + 1).padStart(2, "0")}
                    </div>
                    <p className="pt-1 text-[14px] leading-relaxed text-[#9FB8D1]">
                      {step}
                    </p>
                  </li>
                ))}
              </ol>
            </div>

            {/* controls panel */}
            <aside className="lg:col-span-2">
              <div className="sticky top-24 rounded-lg border border-[#1E3A5F] bg-[#070E1A] p-6">
                <div className="flex items-center gap-2 text-[#00F5FF]">
                  <Keyboard size={16} />
                  <h3 className="font-mono text-[11px] tracking-[0.2em]">
                    CONTROL REFERENCE
                  </h3>
                </div>
                <ul className="mt-5 space-y-3 font-mono text-[12.5px]">
                  {[
                    { k: "CLICK", d: "Select node" },
                    { k: "1 / 2", d: "Dispatch ALPHA / BETA" },
                    { k: "SPACE", d: "Mutex · path · release" },
                    { k: "P", d: "Pause" },
                  ].map((row) => (
                    <li
                      key={row.k}
                      className="flex items-center justify-between gap-3 border-b border-dashed border-[#1E3A5F] pb-3 last:border-0 last:pb-0"
                    >
                      <span className="rounded border border-[#1E3A5F] bg-[#050A14] px-2 py-1 text-[#00F5FF]">
                        {row.k}
                      </span>
                      <span className="text-right text-[#9FB8D1]">{row.d}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-6 border-t border-[#1E3A5F] pt-5">
                  <div className="font-mono text-[10px] tracking-[0.2em] text-[#4A7FA5]">
                    BUILT FOR
                  </div>
                  <p className="mt-2 text-[13px] text-[#9FB8D1]">
                    PMs, founders and engineers who want hands-on intuition for
                    agent orchestration — not another LinkedIn post.
                  </p>
                </div>
              </div>
            </aside>
          </div>
        </section>

        {/* FINAL CTA */}
        <section className="relative overflow-hidden bg-[#050A14] py-20 text-[#E8F4FD]">
          <div
            aria-hidden
            className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#00F5FF]/60 to-transparent"
          />
          <div className="mx-auto max-w-[820px] px-6 text-center">
            <Zap size={28} className="mx-auto text-[#00F5FF]" />
            <h2 className="mt-4 font-mono text-[28px] tracking-tight sm:text-[36px]">
              Ready to take command?
            </h2>
            <p className="mt-3 text-[15px] text-[#9FB8D1]">
              Eight minutes. No signup. Your runs save locally.
            </p>
            <Link
              to={FEATURED_GAME.route}
              onClick={recordPlay}
              className="mt-8 inline-flex items-center gap-3 rounded-md border border-[#00F5FF] bg-[#00F5FF]/10 px-7 py-3.5 font-mono text-[14px] font-semibold tracking-wider text-[#00F5FF] transition-colors hover:bg-[#00F5FF] hover:text-[#050A14]"
            >
              <Hexagon size={16} />
              ENTER THE CONSOLE
              <span>→</span>
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
