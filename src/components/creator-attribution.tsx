import { Link } from "@tanstack/react-router";
import { CREATOR } from "@/lib/creator";

function AuthorByline({ className = "text-[13px]" }: { className?: string }) {
  return (
    <p className={`${className} text-muted-foreground`}>
      By{" "}
      <Link
        to="/creator"
        className="font-medium text-foreground transition-colors hover:text-purple"
      >
        {CREATOR.name}
      </Link>
      <span aria-hidden className="text-muted-foreground/50">
        {" "}
        ·{" "}
      </span>
      {CREATOR.role}
    </p>
  );
}

/**
 * Author attribution for chapter pages.
 * Compact byline by default; a slightly expanded card on the first chapter of each playbook only.
 */
export function CreatorAttribution({ expanded = false }: { expanded?: boolean }) {
  if (expanded) {
    return (
      <div className="hairline flex items-start gap-5 rounded-xl bg-card/60 p-5 sm:gap-6 sm:p-6">
        <Link
          to="/creator"
          aria-label={`View ${CREATOR.name}'s profile`}
          className="shrink-0 transition-opacity hover:opacity-90"
        >
          <img
            src={CREATOR.photo}
            alt={`Portrait of ${CREATOR.name}`}
            width={96}
            height={96}
            loading="lazy"
            className="h-20 w-20 rounded-xl object-cover hairline sm:h-24 sm:w-24"
          />
        </Link>
        <div className="min-w-0 pt-0.5">
          <AuthorByline className="text-[15px] sm:text-[16px]" />
          <p className="mt-2 text-[13px] leading-relaxed text-foreground/75 sm:text-[14px]">
            {CREATOR.shortBio}
          </p>
        </div>
      </div>
    );
  }

  return <AuthorByline />;
}
