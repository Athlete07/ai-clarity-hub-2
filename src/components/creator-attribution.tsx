import { Link } from "@tanstack/react-router";
import { AuthorPortrait } from "@/components/author-portrait";
import { CREATOR } from "@/lib/creator";

/**
 * Chapter footer — vetted-by line with portrait.
 */
export function CreatorAttribution() {
  const [role, brand] = CREATOR.chapterCredit.split(", ");

  return (
    <div className="hairline flex items-center gap-4 rounded-xl bg-muted/20 px-5 py-4 sm:gap-5 sm:px-6 sm:py-5">
      <Link
        to="/creator"
        aria-label={`View ${CREATOR.name}'s profile`}
        className="shrink-0 transition-opacity hover:opacity-90"
      >
        <AuthorPortrait size="card" />
      </Link>

      <p className="min-w-0 text-[15px] leading-snug sm:text-[16px]">
        <span className="text-muted-foreground">Vetted by </span>
        <Link
          to="/creator"
          className="font-medium text-foreground transition-colors hover:text-purple"
        >
          {CREATOR.name}
        </Link>
        <span aria-hidden className="text-muted-foreground/40">
          {" "}
          ·{" "}
        </span>
        <span className="text-muted-foreground">{role}, </span>
        <span className="font-medium text-purple">{brand}</span>
      </p>
    </div>
  );
}
