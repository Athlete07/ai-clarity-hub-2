/**
 * Google AdSense configuration & loader.
 *
 * To activate ads, set the publisher ID via the Vite env var
 *   VITE_ADSENSE_CLIENT=ca-pub-XXXXXXXXXXXXXXXX
 * (or hard-code ADSENSE_CLIENT below). Until a real ID is set, all ad slots
 * render nothing — the architecture is in place but no script is loaded and
 * no network requests are made.
 *
 * Ads are ONLY loaded after the user grants the "ads" consent category in
 * the cookie consent banner (see src/lib/consent.ts). This keeps the
 * integration GDPR/UK-PECR compliant out of the box.
 */

import { useEffect, useRef } from "react";
import { useHasConsent } from "./consent";

// Public, non-secret. Safe to ship in client bundle.
export const ADSENSE_CLIENT: string =
  (import.meta.env.VITE_ADSENSE_CLIENT as string | undefined) ?? "";

export function isAdsenseConfigured(): boolean {
  return /^ca-pub-\d{10,}$/.test(ADSENSE_CLIENT);
}

const SCRIPT_ID = "google-adsense-script";

declare global {
  interface Window {
    adsbygoogle?: unknown[];
  }
}

/**
 * Inject the AdSense loader script once, after consent. Safe to call
 * multiple times — it dedupes by element id.
 */
export function loadAdsenseScript(): void {
  if (typeof window === "undefined") return;
  if (!isAdsenseConfigured()) return;
  if (document.getElementById(SCRIPT_ID)) return;

  const s = document.createElement("script");
  s.id = SCRIPT_ID;
  s.async = true;
  s.crossOrigin = "anonymous";
  s.src = `https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${encodeURIComponent(
    ADSENSE_CLIENT,
  )}`;
  document.head.appendChild(s);
}

/**
 * Hook: mounts AdSense loader as soon as the user has granted ads consent
 * and a publisher ID is configured. No-op otherwise.
 */
export function useAdsenseLoader(): void {
  const allowed = useHasConsent("ads");
  useEffect(() => {
    if (allowed) loadAdsenseScript();
  }, [allowed]);
}

/**
 * Hook: pushes a single `(adsbygoogle = window.adsbygoogle || []).push({})`
 * once the script is ready. Used by <AdSlot/> for each `<ins>` it renders.
 */
export function useAdsenseSlot(active: boolean): void {
  const pushed = useRef(false);
  useEffect(() => {
    if (!active || pushed.current) return;
    if (typeof window === "undefined") return;
    try {
      (window.adsbygoogle = window.adsbygoogle || []).push({});
      pushed.current = true;
    } catch (e) {
      // AdSense throws if the script hasn't finished loading yet.
      // It will retry naturally on the next mount/remount.
      // eslint-disable-next-line no-console
      console.debug("[adsense] push deferred", e);
    }
  }, [active]);
}
