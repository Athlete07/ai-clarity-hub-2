import { useEffect, useState, useCallback } from "react";

const CONSENT_KEY = "factorbeam:consent";
const CONSENT_VERSION = 1;

export type ConsentCategory = "necessary" | "analytics" | "ads";

export type ConsentState = {
  version: number;
  decidedAt: number;
  necessary: true; // always on
  analytics: boolean;
  ads: boolean;
};

const DEFAULT: ConsentState = {
  version: CONSENT_VERSION,
  decidedAt: 0,
  necessary: true,
  analytics: false,
  ads: false,
};

function read(): ConsentState | null {
  if (typeof window === "undefined") return null;
  try {
    const raw = localStorage.getItem(CONSENT_KEY);
    if (!raw) return null;
    const parsed = JSON.parse(raw) as ConsentState;
    if (!parsed || parsed.version !== CONSENT_VERSION) return null;
    return { ...DEFAULT, ...parsed, necessary: true };
  } catch {
    return null;
  }
}

function write(state: ConsentState) {
  try {
    localStorage.setItem(CONSENT_KEY, JSON.stringify(state));
    window.dispatchEvent(new CustomEvent("factorbeam:consent-change"));
  } catch {
    /* noop */
  }
}

export function useConsent() {
  const [state, setState] = useState<ConsentState | null>(null);
  const [hydrated, setHydrated] = useState(false);

  useEffect(() => {
    setState(read());
    setHydrated(true);
    const onChange = () => setState(read());
    window.addEventListener("factorbeam:consent-change", onChange);
    window.addEventListener("storage", onChange);
    return () => {
      window.removeEventListener("factorbeam:consent-change", onChange);
      window.removeEventListener("storage", onChange);
    };
  }, []);

  const save = useCallback((next: Partial<Omit<ConsentState, "version" | "necessary" | "decidedAt">>) => {
    const merged: ConsentState = {
      ...DEFAULT,
      ...(state ?? {}),
      ...next,
      version: CONSENT_VERSION,
      necessary: true,
      decidedAt: Date.now(),
    };
    write(merged);
    setState(merged);
  }, [state]);

  const acceptAll = useCallback(() => save({ analytics: true, ads: true }), [save]);
  const rejectAll = useCallback(() => save({ analytics: false, ads: false }), [save]);
  const reopen = useCallback(() => {
    try {
      localStorage.removeItem(CONSENT_KEY);
      window.dispatchEvent(new CustomEvent("factorbeam:consent-change"));
    } catch {
      /* noop */
    }
    setState(null);
  }, []);

  return {
    hydrated,
    decided: !!state && state.decidedAt > 0,
    consent: state ?? DEFAULT,
    save,
    acceptAll,
    rejectAll,
    reopen,
  };
}

export function useHasConsent(category: ConsentCategory): boolean {
  const { consent, decided } = useConsent();
  if (category === "necessary") return true;
  if (!decided) return false;
  return !!consent[category];
}
