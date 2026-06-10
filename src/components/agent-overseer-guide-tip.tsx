import { useEffect, useId, useRef, useState } from "react";
import { Info } from "lucide-react";
import { AGENT_OVERSEER_GUIDE } from "@/lib/games";

export function AgentOverseerGuideTip() {
  const [open, setOpen] = useState(false);
  const wrapRef = useRef<HTMLDivElement | null>(null);
  const panelId = useId();

  useEffect(() => {
    if (!open) return;
    const onPointerDown = (e: PointerEvent) => {
      if (wrapRef.current && !wrapRef.current.contains(e.target as Node)) {
        setOpen(false);
      }
    };
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    document.addEventListener("pointerdown", onPointerDown);
    document.addEventListener("keydown", onKeyDown);
    return () => {
      document.removeEventListener("pointerdown", onPointerDown);
      document.removeEventListener("keydown", onKeyDown);
    };
  }, [open]);

  return (
    <div ref={wrapRef} className="group/info relative inline-flex align-middle">
      <button
        type="button"
        aria-label="What is Agent Overseer and how to play"
        aria-expanded={open}
        aria-controls={panelId}
        onClick={(e) => {
          e.preventDefault();
          e.stopPropagation();
          setOpen((v) => !v);
        }}
        className="flex h-6 w-6 items-center justify-center text-[#4A7FA5] transition-colors hover:text-[#00F5FF] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#00F5FF]/50"
      >
        <Info size={14} strokeWidth={2.25} aria-hidden />
      </button>

      {/* Short hover hint on desktop; full guide opens on click */}
      <div
        role="tooltip"
        className="pointer-events-none absolute bottom-full left-1/2 z-20 mb-2 hidden w-[220px] -translate-x-1/2 rounded-lg border border-[#1E3A5F] bg-[#050A14] px-3 py-2 text-center text-[11px] leading-snug text-[#4A7FA5] shadow-lg group-hover/info:block group-focus-within/info:block max-sm:hidden"
      >
        What is this? How to play
      </div>

      {open && (
        <div
          id={panelId}
          role="dialog"
          aria-label="Agent Overseer guide"
          className="absolute top-full left-0 z-30 mt-2 w-[min(calc(100vw-3rem),320px)] rounded-xl border border-[#1E3A5F] bg-[#050A14] p-4 shadow-xl sm:left-1/2 sm:-translate-x-1/2"
          onClick={(e) => e.stopPropagation()}
        >
          <p className="font-mono text-[10px] font-bold uppercase tracking-[0.2em] text-[#00F5FF]">
            What is this?
          </p>
          <p className="mt-2 text-[13px] leading-relaxed text-[#E8F4FD]">
            {AGENT_OVERSEER_GUIDE.what}
          </p>

          <p className="mt-3 font-mono text-[10px] font-bold uppercase tracking-[0.2em] text-[#00F5FF]">
            Why play
          </p>
          <p className="mt-1.5 text-[12px] leading-relaxed text-[#4A7FA5]">
            {AGENT_OVERSEER_GUIDE.why}
          </p>

          <p className="mt-3 font-mono text-[10px] font-bold uppercase tracking-[0.2em] text-[#00F5FF]">
            How to play
          </p>
          <ol className="mt-1.5 list-decimal space-y-1.5 pl-4 text-[12px] leading-relaxed text-[#E8F4FD]">
            {AGENT_OVERSEER_GUIDE.steps.map((step) => (
              <li key={step}>{step}</li>
            ))}
          </ol>

          <p className="mt-3 border-t border-[#1E3A5F] pt-3 font-mono text-[10px] leading-relaxed text-[#4A7FA5]">
            {AGENT_OVERSEER_GUIDE.controls}
          </p>
        </div>
      )}
    </div>
  );
}
