import { useEffect, useState } from "react";
import { CONSENT_PANEL_OPEN_EVENT, useConsent } from "@/lib/consent";
import { Cookie, X } from "lucide-react";

export function CookieConsent() {
  const { hydrated, decided, consent, save, acceptAll, rejectAll } = useConsent();
  const [open, setOpen] = useState(false);
  const [details, setDetails] = useState(false);
  const [analytics, setAnalytics] = useState(false);
  const [ads, setAds] = useState(false);

  const preferencesMode = open && decided;

  useEffect(() => {
    if (hydrated && !decided) {
      const t = setTimeout(() => setOpen(true), 400);
      return () => clearTimeout(t);
    }
  }, [hydrated, decided]);

  useEffect(() => {
    const onReopen = () => {
      setAnalytics(consent.analytics);
      setAds(consent.ads);
      setDetails(true);
      setOpen(true);
    };
    window.addEventListener(CONSENT_PANEL_OPEN_EVENT, onReopen);
    return () => window.removeEventListener(CONSENT_PANEL_OPEN_EVENT, onReopen);
  }, [consent.analytics, consent.ads]);

  useEffect(() => {
    if (!open) return;
    setAnalytics(consent.analytics);
    setAds(consent.ads);
  }, [open, consent.analytics, consent.ads]);

  const close = () => {
    setOpen(false);
    setDetails(false);
  };

  const dismiss = () => {
    if (decided) {
      setAnalytics(consent.analytics);
      setAds(consent.ads);
      close();
      return;
    }
    rejectAll();
    close();
  };

  if (!hydrated || !open) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-live="polite"
      aria-label="Cookie consent"
      className="fixed inset-x-0 bottom-0 z-50 px-4 pb-4 sm:px-6 sm:pb-6 animate-fade-in-up"
    >
      <div className="mx-auto max-w-3xl hairline rounded-xl bg-popover/95 backdrop-blur p-5 shadow-lg">
        <div className="flex items-start gap-3">
          <div className="hidden h-8 w-8 shrink-0 items-center justify-center rounded-md bg-accent text-accent-foreground sm:flex">
            <Cookie size={15} />
          </div>
          <div className="flex-1 min-w-0">
            <div className="flex items-start justify-between gap-3">
              <h2 className="text-[14px] font-medium text-foreground">
                {preferencesMode ? "Cookie preferences" : "Your privacy matters"}
              </h2>
              <button
                type="button"
                aria-label="Close"
                onClick={dismiss}
                className="text-muted-foreground hover:text-foreground"
              >
                <X size={14} />
              </button>
            </div>
            <p className="mt-1 text-[13px] leading-relaxed text-muted-foreground">
              {preferencesMode
                ? "Update which optional cookies we may use. Strictly necessary cookies stay on so the site works."
                : "This site uses cookies for essential functions, and — only with your permission — for analytics and personalised ads. You can change your choice anytime in the footer."}
            </p>

            {(details || preferencesMode) && (
              <div className="mt-4 space-y-2.5 text-[13px]">
                <Row
                  label="Strictly necessary"
                  desc="Required for the site to work. Always on."
                  checked
                  disabled
                />
                <Row
                  label="Analytics"
                  desc="Anonymous usage stats to improve content."
                  checked={analytics}
                  onChange={setAnalytics}
                />
                <Row
                  label="Advertising"
                  desc="Personalised ads and ad measurement."
                  checked={ads}
                  onChange={setAds}
                />
              </div>
            )}

            <div className="mt-4 flex flex-wrap items-center gap-2">
              <button
                type="button"
                onClick={() => {
                  rejectAll();
                  close();
                }}
                className="hairline rounded-md px-3 py-1.5 text-[13px] text-foreground hover:bg-muted"
              >
                Reject all
              </button>
              {!details && !preferencesMode ? (
                <button
                  type="button"
                  onClick={() => setDetails(true)}
                  className="hairline rounded-md px-3 py-1.5 text-[13px] text-foreground hover:bg-muted"
                >
                  Customise
                </button>
              ) : (
                <button
                  type="button"
                  onClick={() => {
                    save({ analytics, ads });
                    close();
                  }}
                  className="hairline rounded-md px-3 py-1.5 text-[13px] text-foreground hover:bg-muted"
                >
                  Save choices
                </button>
              )}
              <button
                type="button"
                onClick={() => {
                  acceptAll();
                  close();
                }}
                className="ml-auto rounded-md bg-primary px-3.5 py-1.5 text-[13px] font-medium text-primary-foreground hover:opacity-95"
              >
                Accept all
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Row({
  label, desc, checked, onChange, disabled,
}: { label: string; desc: string; checked: boolean; onChange?: (v: boolean) => void; disabled?: boolean }) {
  return (
    <label className={`flex items-start gap-3 hairline rounded-md p-2.5 ${disabled ? "opacity-70" : "cursor-pointer hover:bg-muted/50"}`}>
      <input
        type="checkbox"
        checked={checked}
        disabled={disabled}
        onChange={(e) => onChange?.(e.target.checked)}
        className="mt-0.5 h-3.5 w-3.5 accent-[var(--purple)]"
      />
      <span className="flex-1">
        <span className="block text-foreground">{label}</span>
        <span className="block text-[12px] text-muted-foreground">{desc}</span>
      </span>
    </label>
  );
}

export function CookiePreferencesLink({ className }: { className?: string }) {
  const { reopen } = useConsent();
  return (
    <button
      type="button"
      onClick={reopen}
      className={
        className ??
        "text-[13px] text-muted-foreground transition-colors hover:text-foreground"
      }
    >
      Cookie preferences
    </button>
  );
}
