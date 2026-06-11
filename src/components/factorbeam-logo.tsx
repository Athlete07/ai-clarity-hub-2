import { BRAND } from "@/lib/brand";
import { cn } from "@/lib/utils";

/** Brand palette — matches the FactorBeam identity sheet */
const C = {
  primary: BRAND.colors.primary,
  secondary: BRAND.colors.secondary,
  deep: BRAND.colors.deep,
} as const;

type MarkProps = {
  size?: number;
  className?: string;
  /** Favicon / app-icon style with filled purple background */
  variant?: "default" | "filled";
};

/**
 * FactorBeam mark — scattered signal converges through a prism into one clear point.
 * Transparent by default; use `filled` for favicons and app icons.
 */
export function FactorBeamMark({ size = 32, className, variant = "default" }: MarkProps) {
  const uid = `fb-${variant}-${size}`;
  const filled = variant === "filled";

  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden
      className={cn("shrink-0", className)}
    >
      <defs>
        <linearGradient id={`${uid}-bg`} x1="4" y1="36" x2="36" y2="4" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor={C.deep} />
          <stop offset="100%" stopColor={C.secondary} />
        </linearGradient>
        <linearGradient id={`${uid}-beam`} x1="8" y1="32" x2="34" y2="8" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor={C.deep} />
          <stop offset="45%" stopColor={C.primary} />
          <stop offset="100%" stopColor={C.secondary} />
        </linearGradient>
      </defs>

      {filled ? <rect width="40" height="40" rx="10" fill={`url(#${uid}-bg)`} /> : null}

      <circle
        cx="6.5"
        cy="11"
        r="1.75"
        fill={filled ? "#fff" : C.secondary}
        fillOpacity={filled ? 0.45 : 0.55}
      />
      <circle
        cx="4.75"
        cy="20"
        r="2"
        fill={filled ? "#fff" : C.primary}
        fillOpacity={filled ? 0.65 : 1}
      />
      <circle
        cx="6.5"
        cy="29"
        r="1.75"
        fill={filled ? "#fff" : C.secondary}
        fillOpacity={filled ? 0.45 : 0.55}
      />
      <path
        d="M10 31L16.5 23L22 25.5L13.5 35.5L10 31Z"
        fill={filled ? "#fff" : C.deep}
        fillOpacity={filled ? 0.35 : 1}
      />
      <path
        d="M10 9.5L22.5 14L16.5 23L10 20.5L10 9.5Z"
        fill={filled ? "#fff" : C.secondary}
        fillOpacity={filled ? 0.75 : 1}
      />
      <path
        d="M10 20.5L16.5 23L22.5 14L31 16.5L33.5 19L22 25.5L10 20.5Z"
        fill={filled ? "#fff" : `url(#${uid}-beam)`}
        fillOpacity={filled ? 0.95 : 1}
      />
      <circle cx="34.5" cy="17.5" r="4" fill={filled ? "#fff" : C.primary} />
      <circle cx="34.5" cy="17.5" r="1.85" fill={filled ? C.primary : C.secondary} />
    </svg>
  );
}

/** Presets per context — sizes follow brand header tokens (18px wordmark, 32px mark). */
const LOGO_CONTEXT = {
  header: { markSize: BRAND.header.logoMarkPx, wordmarkClass: "text-lg" },
  hero: { markSize: 36, wordmarkClass: "text-xl" },
  compact: { markSize: 28, wordmarkClass: "text-base" },
  icon: { markSize: BRAND.header.logoMarkPx, wordmarkClass: "" },
} as const;

type LogoContext = keyof typeof LOGO_CONTEXT;

type LogoProps = {
  /** Layout preset — `header` matches global nav standards */
  context?: LogoContext;
  markSize?: number;
  className?: string;
  showWordmark?: boolean;
  iconOnly?: boolean;
  /** @deprecated Use `context` instead */
  size?: number;
};

export function FactorBeamLogo({
  context = "header",
  markSize,
  className,
  showWordmark = true,
  iconOnly = false,
  size,
}: LogoProps) {
  const preset = LOGO_CONTEXT[context];
  const resolvedMark = markSize ?? preset.markSize;
  const wordmark = iconOnly || context === "icon" ? false : showWordmark;

  return (
    <span className={cn("inline-flex items-center gap-2.5", className)}>
      <FactorBeamMark size={resolvedMark} />
      {wordmark ? (
        <span
          className={cn(
            "whitespace-nowrap leading-none tracking-tight",
            size ? undefined : preset.wordmarkClass,
          )}
          style={size ? { fontSize: size } : undefined}
        >
          <span className="font-semibold text-foreground">Factor</span>
          <span className="font-medium text-purple">Beam</span>
        </span>
      ) : null}
    </span>
  );
}
