import { Link, useRouter } from "@tanstack/react-router";
import { useStreak } from "@/lib/storage";
import { useTheme } from "@/lib/theme";
import { Flame, Moon, Sun, Menu } from "lucide-react";
import { CookiePreferencesLink } from "@/components/cookie-consent";
import { Sheet, SheetContent, SheetTrigger, SheetTitle } from "@/components/ui/sheet";
import * as React from "react";

const CONTACT_EMAIL = "hello@factorbeam.dev";

function ThemeToggle() {
  const { theme, toggle, mounted } = useTheme();
  const isDark = theme === "dark";
  return (
    <button
      type="button"
      onClick={toggle}
      aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
      title={isDark ? "Switch to light mode" : "Switch to dark mode"}
      className="hairline inline-flex h-8 w-8 items-center justify-center rounded-md text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
    >
      {!mounted ? <Sun size={14} /> : isDark ? <Sun size={14} /> : <Moon size={14} />}
    </button>
  );
}

export function Logo({ size = 15 }: { size?: number }) {
  return (
    <Link to="/" className="flex items-center gap-2 text-foreground">
      <span
        aria-hidden
        className="inline-block rounded-full bg-purple"
        style={{ width: 8, height: 8 }}
      />
      <span style={{ fontSize: size, fontWeight: 500, letterSpacing: "-0.01em" }}>FactorBeam</span>
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
          className="hairline inline-flex h-8 w-8 items-center justify-center rounded-md text-muted-foreground transition-colors hover:bg-muted hover:text-foreground md:hidden"
        >
          <Menu size={18} />
        </button>
      </SheetTrigger>
      <SheetContent side="right" className="w-[280px] border-l bg-background/95 backdrop-blur p-0">
        <SheetTitle className="sr-only">Navigation</SheetTitle>
        <div className="flex h-full flex-col">
          <div className="hairline-b flex items-center gap-3 px-5 py-4">
            <Logo size={14} />
          </div>
          <nav className="flex flex-col gap-1 p-3">
            <Link
              to="/playbooks"
              className="rounded-md px-3 py-2.5 text-[14px] text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
            >
              Playbooks
            </Link>
            <Link
              to="/about"
              className="rounded-md px-3 py-2.5 text-[14px] text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
            >
              About
            </Link>
          </nav>
          <div className="mt-auto hairline-t p-4 space-y-3">
            <div className="flex flex-col gap-1">
              <span className="px-3 text-[10px] font-semibold uppercase tracking-wider text-muted-foreground/70">
                Connect
              </span>
              <Link
                to="/creator"
                className="rounded-md px-3 py-2 text-[13px] text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
              >
                Author
              </Link>
              <Link
                to="/contact"
                className="rounded-md px-3 py-2 text-[13px] text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
              >
                Contact
              </Link>
            </div>
            <CookiePreferencesLink className="rounded-md px-3 py-2 text-[13px] text-muted-foreground transition-colors hover:bg-muted hover:text-foreground" />
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
      className="sticky top-0 z-40 hairline-b bg-background/85 backdrop-blur"
      style={{ height: slim ? 52 : 60 }}
    >
      <div className="mx-auto flex h-full max-w-6xl items-center justify-between px-6">
        <div className="flex items-center gap-5">
          <Logo />
          {slim && (
            <Link
              to="/playbooks"
              className="hidden text-[13px] text-muted-foreground hover:text-foreground sm:inline"
            >
              ← Playbooks
            </Link>
          )}
        </div>

        {!slim && (
          <nav className="hidden items-center gap-7 md:flex">
            <Link
              to="/playbooks"
              className="text-[13px] text-muted-foreground transition-colors hover:text-foreground"
            >
              Playbooks
            </Link>
            <Link
              to="/about"
              className="text-[13px] text-muted-foreground transition-colors hover:text-foreground"
            >
              About
            </Link>
          </nav>
        )}

        <div className="flex items-center gap-3">
          {streak > 1 && (
            <span className="hidden items-center gap-1 text-[12px] text-muted-foreground md:inline-flex">
              <Flame size={13} />
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
      <p className="text-[10px] font-semibold uppercase tracking-wider text-muted-foreground/70">
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
  to?: "/playbooks" | "/about" | "/creator" | "/contact" | "/privacy-policy" | "/terms-of-service";
  href?: string;
  children: React.ReactNode;
}) {
  const className = "text-[13px] text-muted-foreground transition-colors hover:text-foreground";
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
            <FooterLink to="/playbooks">Playbooks</FooterLink>
            <FooterLink to="/about">About</FooterLink>
          </FooterColumn>
          <FooterColumn title="Connect">
            <FooterLink to="/creator">Author</FooterLink>
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

        <div className="hairline-t mt-10 flex flex-col gap-2 pt-8 text-[12px] text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
          <span>FactorBeam · 2026</span>
          <span>Built for curious minds, not engineers.</span>
        </div>
      </div>
    </footer>
  );
}
