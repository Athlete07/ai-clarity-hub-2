import { useEffect, useState } from "react";
import { useConsent } from "@/lib/consent";
import { Cookie, X } from "lucide-react";

export function CookieConsent() {
  const { hydrated, decided, consent, save, acceptAll, rejectAll } = useConsent();
  const [open, setOpen] = useState(false);
  const [details, setDetails] = useState(false);
  const [analytics, setAnalytics] = useState(false);
  const [ads, setAds] = useState(false);

  useEffect(() => {
    if (hydrated && !decided) {
      const t = setTimeout(() => setOpen(true), 400);
      return () => clearTimeout(t);
    }
  }, [hydrated, decided]);

  useEffect(() => {
    setAnalytics(consent.analytics);
    setAds(consent.ads);
  }, [consent.analytics, consent.ads]);

  if (!hydrated || !open || decided) return null;

  return (
    <div
      role="dialog"
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
              <h2 className="text-[14px] font-medium text-foreground">We value your privacy</h2>
              <button
                aria-label="Close"
                onClick={() => { rejectAll(); setOpen(false); }}
                className="text-muted-foreground hover:text-foreground"
              >
                <X size={14} />
              </button>
            </div>
            <p className="mt-1 text-[13px] leading-relaxed text-muted-foreground">
              We use cookies for essential site functions, and — only with your permission —
              for analytics and personalised ads. You can change your choice anytime in the
              footer.
            </p>

            {details && (
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
                onClick={() => { rejectAll(); setOpen(false); }}
                className="hairline rounded-md px-3 py-1.5 text-[13px] text-foreground hover:bg-muted"
              >
                Reject all
              </button>
              {!details ? (
                <button
                  onClick={() => setDetails(true)}
                  className="hairline rounded-md px-3 py-1.5 text-[13px] text-foreground hover:bg-muted"
                >
                  Customise
                </button>
              ) : (
                <button
                  onClick={() => { save({ analytics, ads }); setOpen(false); }}
                  className="hairline rounded-md px-3 py-1.5 text-[13px] text-foreground hover:bg-muted"
                >
                  Save choices
                </button>
              )}
              <button
                onClick={() => { acceptAll(); setOpen(false); }}
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

export function CookiePreferencesLink() {
  const { reopen } = useConsent();
  return (
    <button
      onClick={reopen}
      className="text-muted-foreground hover:text-foreground underline-offset-2 hover:underline"
    >
      Cookie preferences
    </button>
  );
}
