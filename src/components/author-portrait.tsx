import { CREATOR } from "@/lib/creator";
import { cn } from "@/lib/utils";

/**
 * Head-and-shoulders crop aligned to common profile-photo standards
 * (LinkedIn 1:1, schema.org Person image, eyes in upper third).
 */
export const AUTHOR_PORTRAIT_OBJECT_POSITION = "center 22%";

const SIZES = {
  /** Chapter author card — large enough to read facial features without zoom. */
  card: "h-[7.5rem] w-[7.5rem] sm:h-[8.5rem] sm:w-[8.5rem]",
  /** Creator profile hero. */
  hero: "h-32 w-32 sm:h-40 sm:w-40",
  /** Curator Box — editorial spotlight */
  spotlight: "h-44 w-44 sm:h-52 sm:w-52",
} as const;

type AuthorPortraitSize = keyof typeof SIZES;

type AuthorPortraitProps = {
  size?: AuthorPortraitSize;
  /** B&W + contrast — premium editorial (Curator Box) */
  tone?: "default" | "editorial";
  className?: string;
  loading?: "lazy" | "eager";
  priority?: boolean;
};

export function AuthorPortrait({
  size = "card",
  tone = "default",
  className = "",
  loading = "lazy",
  priority = false,
}: AuthorPortraitProps) {
  const dim = size === "spotlight" ? 208 : size === "hero" ? 160 : 136;
  const editorial = tone === "editorial";

  return (
    <div
      className={cn(
        "relative shrink-0 overflow-hidden rounded-xl hairline",
        editorial && "rounded-2xl bg-muted shadow-sm",
        SIZES[size],
        className,
      )}
      style={{ aspectRatio: "1 / 1" }}
    >
      <img
        src={CREATOR.photo}
        alt={`Portrait of ${CREATOR.name}, ${CREATOR.title}`}
        width={dim}
        height={dim}
        loading={priority ? "eager" : loading}
        decoding="async"
        fetchPriority={priority ? "high" : undefined}
        className={cn(
          "absolute inset-0 h-full w-full object-cover",
          editorial && "grayscale contrast-[1.08] brightness-[1.02]",
        )}
        style={{ objectPosition: AUTHOR_PORTRAIT_OBJECT_POSITION }}
      />
    </div>
  );
}
