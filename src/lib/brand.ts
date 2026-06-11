/** FactorBeam brand assets — single source of truth for logo paths. */
export const BRAND = {
  name: "FactorBeam",
  tagline: "Understand AI enough to ship.",
  colors: {
    primary: "#534AB7",
    secondary: "#6B5FD4",
    deep: "#3C3489",
    ink: "#1F1F1F",
    muted: "#6B7280",
  },
  logo: {
    /** Transparent mark — error pages, static HTML */
    mark: "/logo-mark.svg",
    /** Filled favicon / app icon */
    favicon: "/favicon.svg",
    /** Social preview image */
    og: "/og.png",
  },
  /**
   * Site header scale — aligned with Material (64dp bar, 14sp nav)
   * and WCAG 2.2 (44px minimum touch targets).
   */
  header: {
    heightPx: 64,
    heightSlimPx: 56,
    navFontPx: 14,
    logoMarkPx: 32,
    logoWordmarkPx: 18,
    touchTargetPx: 44,
  },
} as const;

type HeadMeta = { title?: string; name?: string; property?: string; content: string; charSet?: string };

export function brandIconLinks() {
  return [
    { rel: "icon", href: BRAND.logo.favicon, type: "image/svg+xml" },
    { rel: "apple-touch-icon", href: BRAND.logo.favicon },
    { rel: "manifest", href: "/site.webmanifest" },
  ] as const;
}

export function brandOgMeta(): HeadMeta[] {
  const alt = `${BRAND.name} — ${BRAND.tagline}`;
  return [
    { property: "og:image", content: BRAND.logo.og },
    { property: "og:image:alt", content: alt },
    { name: "twitter:image", content: BRAND.logo.og },
    { name: "twitter:image:alt", content: alt },
  ];
}
