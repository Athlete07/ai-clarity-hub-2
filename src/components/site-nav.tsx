import { Link, useRouter } from "@tanstack/react-router";
import { FactorBeamLogo } from "@/components/factorbeam-logo";
import { useStreak } from "@/lib/storage";
import { useTheme } from "@/lib/theme";
import { Flame, Moon, Sun, Menu } from "lucide-react";
import { CookiePreferencesLink } from "@/components/cookie-consent";
import { Sheet, SheetContent, SheetTrigger, SheetTitle } from "@/components/ui/sheet";
import { cn } from "@/lib/utils";
import * as React from "react";

const CONTACT_EMAIL = "hello@factorbeam.dev";

const navLinkClass =
  "nav-link text-muted-foreground transition-colors hover:text-foreground";

function ThemeToggle() {
  const { theme, toggle, mounted } = useTheme();
  const isDark = theme === "dark";
  return (
    <button
      type="button"
      onClick={toggle}
      aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
      title={isDark ? "Switch to light mode" : "Switch to dark mode"}
      className="nav-icon-btn hairline text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
    >
      {!mounted ? <Sun size={18} /> : isDark ? <Sun size={18} /> : <Moon size={18} />}
    </button>
  );
}

export function Logo({ compact = false }: { compact?: boolean }) {
  return (
    <Link to="/" className="text-foreground transition-opacity hover:opacity-90">
      <FactorBeamLogo context={compact ? "compact" : "header"} />
    </Link>
  );
}

function MobileMenu({ slim = false }: { slim?: boolean }) {
  const [open, setOpen] = React.useState(false);
  const router = useRouter();

  React.useEffect(() => {
    const unsubscribe = router.subscribe("onResolved", () => setOpen(false));
    return () => unsubscribe();
  }, [router]);

  if (slim) return null;

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <button
          type="button"
          aria-label="Open menu"
          className="nav-icon-btn hairline text-muted-foreground transition-colors hover:bg-muted hover:text-foreground md:hidden"
        >
          <Menu size={20} />
        </button>
      </SheetTrigger>
      <SheetContent side="right" className="w-[280px] border-l bg-background/95 backdrop-blur p-0">
        <SheetTitle className="sr-only">Navigation</SheetTitle>
        <div className="flex h-full flex-col">
          <div className="hairline-b flex items-center px-5 py-4" style={{ minHeight: "4rem" }}>
            <Logo compact />
          </div>
          <nav className="flex flex-col gap-1 p-3" aria-label="Primary">
            <Link to="/executive-kb" className={cn(navLinkClass, "rounded-md px-3 py-3")}>
              Executive KB
            </Link>
            <Link to="/about" className={cn(navLinkClass, "rounded-md px-3 py-3")}>
              About the Platform
            </Link>
          </nav>
          <div className="mt-auto hairline-t space-y-3 p-4">
            <div className="flex flex-col gap-1">
              <span className="px-3 text-xs font-semibold uppercase tracking-wider text-muted-foreground/70">
                Connect
              </span>
              <Link
                to="/creator"
                className={cn(navLinkClass, "rounded-md px-3 py-3")}
              >
                Curator Box
              </Link>
              <Link
                to="/contact"
                className={cn(navLinkClass, "rounded-md px-3 py-3")}
              >
                Contact
              </Link>
            </div>
            <CookiePreferencesLink
              className={cn(navLinkClass, "block rounded-md px-3 py-3")}
            />
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
}

export function Nav({ slim = false }: { slim?: boolean }) {
  const streak = useStreak();
  return (
    <header
      className={cn(
        "sticky top-0 z-40 hairline-b bg-background/85 backdrop-blur",
        slim ? "site-header--slim" : "site-header",
      )}
    >
      <div className="mx-auto flex h-full max-w-6xl items-center justify-between px-4 sm:px-6">
        <div className="flex min-w-0 items-center gap-4 sm:gap-5">
          <Logo />
          {slim && (
            <Link
              to="/executive-kb"
              className={cn(navLinkClass, "hidden sm:inline")}
            >
              ← Executive KB
            </Link>
          )}
        </div>

        {!slim && (
          <nav className="hidden items-center gap-8 md:flex" aria-label="Primary">
            <Link to="/executive-kb" className={navLinkClass}>
              Executive KB
            </Link>
            <Link to="/about" className={navLinkClass}>
              About the Platform
            </Link>
          </nav>
        )}

        <div className="flex items-center gap-1 sm:gap-2">
          {streak > 1 && (
            <span className="nav-link hidden items-center gap-1.5 text-muted-foreground md:inline-flex">
              <Flame size={14} aria-hidden />
              {streak}-day streak
            </span>
          )}
          <ThemeToggle />
          <MobileMenu slim={slim} />
        </div>
      </div>
    </header>
  );
}

function FooterColumn({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div>
      <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground/70">
        {title}
      </p>
      <ul className="mt-3 space-y-2">{children}</ul>
    </div>
  );
}

function FooterLink({
  to,
  children,
  href,
}: {
  to?: "/executive-kb" | "/about" | "/creator" | "/contact" | "/privacy-policy" | "/terms-of-service" | "/simulations";
  href?: string;
  children: React.ReactNode;
}) {
  const className = "nav-link text-muted-foreground transition-colors hover:text-foreground";
  if (href) {
    return (
      <li>
        <a href={href} className={className}>
          {children}
        </a>
      </li>
    );
  }
  return (
    <li>
      <Link to={to!} className={className}>
        {children}
      </Link>
    </li>
  );
}

export function Footer() {
  return (
    <footer className="hairline-t mt-24">
      <div className="mx-auto max-w-6xl px-6 py-12 sm:py-14">
        <div className="grid gap-10 sm:grid-cols-3 sm:gap-8">
          <FooterColumn title="Product">
            <FooterLink to="/executive-kb">Executive KB</FooterLink>
            <FooterLink to="/about">About the Platform</FooterLink>
            <FooterLink to="/simulations">
              <span className="inline-flex items-center gap-2">
                Simulations
                <span className="rounded bg-muted px-1.5 py-0.5 text-[10px] font-semibold uppercase tracking-wider text-muted-foreground">
                  Beta
                </span>
              </span>
            </FooterLink>
          </FooterColumn>
          <FooterColumn title="Connect">
            <FooterLink to="/creator">Curator Box</FooterLink>
            <FooterLink to="/contact">Contact</FooterLink>
            <FooterLink href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</FooterLink>
          </FooterColumn>
          <FooterColumn title="Legal">
            <FooterLink to="/privacy-policy">Privacy</FooterLink>
            <FooterLink to="/terms-of-service">Terms</FooterLink>
            <li>
              <CookiePreferencesLink />
            </li>
          </FooterColumn>
        </div>

        <div className="hairline-t mt-10 flex flex-col gap-2 pt-8 text-sm leading-normal text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
          <Logo compact />
          <span className="text-xs sm:text-sm">© 2026 · Built for curious minds, not engineers.</span>
        </div>
      </div>
    </footer>
  );
}
