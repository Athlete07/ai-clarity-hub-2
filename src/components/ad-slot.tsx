import { useHasConsent } from "@/lib/consent";
import {
  ADSENSE_CLIENT,
  isAdsenseConfigured,
  useAdsenseSlot,
} from "@/lib/adsense";

type Props = {
  /** AdSense ad unit slot ID (data-ad-slot). Required for live ads. */
  slot?: string;
  /** AdSense ad format. Defaults to "auto" (responsive). */
  format?: "auto" | "fluid" | "rectangle" | "horizontal" | "vertical";
  /** Enable responsive full-width behaviour. Defaults to true. */
  responsive?: boolean;
  /** Layout key for in-article / in-feed formats. */
  layoutKey?: string;
  /** Visual label shown above the ad (regulatory best practice). */
  label?: string;
  className?: string;
  /** Optional fallback content when ads are disabled. Usually leave empty. */
  children?: React.ReactNode;
};

/**
 * Consent-gated Google AdSense slot.
 *
 * - Renders nothing until the user has granted the "ads" consent category.
 * - Renders nothing if no AdSense publisher ID is configured yet
 *   (VITE_ADSENSE_CLIENT). This lets us ship ad placements throughout the
 *   product before the AdSense account is live.
 * - Once both conditions are met, renders the standard AdSense <ins> tag
 *   and triggers `adsbygoogle.push({})`.
 */
export function AdSlot({
  slot,
  format = "auto",
  responsive = true,
  layoutKey,
  label = "Advertisement",
  className,
  children,
}: Props) {
  const allowed = useHasConsent("ads");
  const configured = isAdsenseConfigured();
  const active = allowed && configured && !!slot;

  useAdsenseSlot(active);

  if (!allowed) return null;

  // Consent given but AdSense not yet wired up — render nothing in prod,
  // a subtle placeholder in dev so the layout slot is visible.
  if (!configured || !slot) {
    if (import.meta.env.DEV) {
      return (
        <div
          className={
            className ??
            "hairline rounded-md bg-muted/40 p-3 text-center text-[11px] text-muted-foreground"
          }
        >
          Ad slot{slot ? ` · ${slot}` : ""} (AdSense not configured)
        </div>
      );
    }
    return null;
  }

  return (
    <div className={className ?? "my-6"}>
      <div className="mb-1 text-center text-[10px] uppercase tracking-wider text-muted-foreground/70">
        {label}
      </div>
      <ins
        className="adsbygoogle"
        style={{ display: "block" }}
        data-ad-client={ADSENSE_CLIENT}
        data-ad-slot={slot}
        data-ad-format={format}
        data-full-width-responsive={responsive ? "true" : "false"}
        {...(layoutKey ? { "data-ad-layout-key": layoutKey } : {})}
      />
      {children}
    </div>
  );
}
