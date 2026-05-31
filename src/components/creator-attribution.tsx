import { Link } from "@tanstack/react-router";
import { CREATOR } from "@/lib/creator";
import { ArrowRight } from "lucide-react";

/**
 * Compact author attribution for the bottom of article pages.
 * Links to the full /creator page. Keep it minimal — photo, name,
 * one-line bio, and a CTA.
 */
export function CreatorAttribution() {
  return (
    <div className="hairline flex items-start gap-4 rounded-2xl bg-card p-5 sm:items-center sm:gap-5 sm:p-6">
      <img
        src={CREATOR.photo}
        alt={`Portrait of ${CREATOR.name}`}
        width={64}
        height={64}
        loading="lazy"
        className="h-14 w-14 shrink-0 rounded-xl object-cover hairline sm:h-16 sm:w-16"
      />
      <div className="min-w-0 flex-1">
        <p className="text-[11px] font-medium uppercase tracking-wider text-purple">
          Written by
        </p>
        <p className="mt-0.5 text-[15px] font-medium text-foreground sm:text-[16px]">
          {CREATOR.name}
        </p>
        <p className="mt-0.5 text-[13px] text-muted-foreground">
          {CREATOR.role}
        </p>
        <p className="mt-1 hidden text-[13px] text-foreground/70 sm:block">
          {CREATOR.shortBio}
        </p>
      </div>
      <Link
        to="/creator"
        className="shrink-0 inline-flex items-center gap-1 rounded-md bg-purple px-3 py-2 text-[13px] font-medium text-white transition-colors hover:bg-purple-dark"
      >
        Profile
        <ArrowRight size={13} />
      </Link>
    </div>
  );
}
