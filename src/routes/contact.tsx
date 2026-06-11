import { createFileRoute, Link } from "@tanstack/react-router";
import { Nav, Footer } from "@/components/site-nav";
import {
  ArrowRight,
  Bug,
  Check,
  Clock,
  Copy,
  Globe2,
  Handshake,
  Lightbulb,
  Mail,
  PencilLine,
  Shield,
} from "lucide-react";
import { useCallback, useState } from "react";

const CONTACT_EMAIL = "hello@factorbeam.dev";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact FactorBeam — Email" },
      {
        name: "description",
        content:
          "Email hello@factorbeam.dev for edits, feedback, bugs, or partnerships. Copy the address and write from your email client.",
      },
      { property: "og:title", content: "Contact — FactorBeam" },
      {
        property: "og:description",
        content: "Email hello@factorbeam.dev — every message is read personally.",
      },
      { property: "og:url", content: "/contact" },
      { property: "og:type", content: "website" },
    ],
    links: [{ rel: "canonical", href: "/contact" }],
  }),
  component: Contact,
});

const REASONS = [
  {
    icon: PencilLine,
    title: "Suggest an edit",
    detail: "Typos, unclear sections, or a sharper example.",
  },
  {
    icon: Lightbulb,
    title: "Topic idea",
    detail: "A concept you wish the Executive KB covered.",
  },
  {
    icon: Bug,
    title: "Report a bug",
    detail: "Something broken — include browser and steps.",
  },
  {
    icon: Handshake,
    title: "Partnership",
    detail: "Collaborations, guest writing, or sponsorship.",
  },
] as const;

function Contact() {
  const [copied, setCopied] = useState(false);

  const copyEmail = useCallback(async () => {
    try {
      await navigator.clipboard.writeText(CONTACT_EMAIL);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 2000);
    } catch {
      // Fallback for older browsers or denied permission
      const el = document.createElement("textarea");
      el.value = CONTACT_EMAIL;
      el.setAttribute("readonly", "");
      el.style.position = "absolute";
      el.style.left = "-9999px";
      document.body.appendChild(el);
      el.select();
      document.execCommand("copy");
      document.body.removeChild(el);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 2000);
    }
  }, []);

  return (
    <>
      <Nav />
      <main className="overflow-x-hidden">
        {/* Hero */}
        <section className="relative">
          <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
            <div className="mesh-glow-1 absolute -top-24 left-1/2 h-[460px] w-[460px] -translate-x-1/2 rounded-full bg-purple-light/50 blur-[110px] dark:bg-purple-light/10" />
          </div>

          <div className="mx-auto max-w-[720px] px-5 pt-16 pb-12 text-center sm:px-6 sm:pt-28 sm:pb-16">
            <div className="section-label mb-4 inline-flex items-center gap-2">
              <span className="inline-block h-1.5 w-1.5 rounded-full bg-purple" />
              Contact
            </div>
            <h1 className="text-[36px] font-medium leading-[1.08] tracking-[-0.025em] sm:text-[56px] sm:leading-[1.02]">
              Write by <span className="text-purple">email</span>.
            </h1>
            <p className="mx-auto mt-5 max-w-[520px] text-[15px] leading-relaxed text-muted-foreground sm:text-[17px]">
              No form, no ticket queue. Copy the address, open your mail app, and send
              a note — every message is read personally.
            </p>
          </div>
        </section>

        {/* Email card — primary focal point */}
        <section className="mx-auto max-w-[640px] px-5 pb-16 sm:px-6 sm:pb-20">
          <div className="hairline bg-card overflow-hidden rounded-2xl">
            <div className="border-b border-border/60 bg-muted/20 px-6 py-4 sm:px-8">
              <p className="text-[11px] font-semibold uppercase tracking-wider text-muted-foreground">
                Email address
              </p>
            </div>

            <div className="px-6 py-8 sm:px-8 sm:py-10">
              <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                <a
                  href={`mailto:${CONTACT_EMAIL}`}
                  className="group inline-flex items-center gap-3 text-left"
                >
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-purple-light/70 text-purple dark:bg-purple-light/15">
                    <Mail size={20} />
                  </span>
                  <span>
                    <span className="block text-[11px] font-medium uppercase tracking-wider text-muted-foreground">
                      FactorBeam
                    </span>
                    <span className="mt-0.5 block font-mono text-[18px] font-medium tracking-tight text-foreground group-hover:text-purple sm:text-[20px]">
                      {CONTACT_EMAIL}
                    </span>
                  </span>
                </a>

                <button
                  type="button"
                  onClick={copyEmail}
                  aria-label={copied ? "Email copied" : "Copy email address"}
                  className="inline-flex shrink-0 items-center justify-center gap-2 rounded-lg border border-border bg-background px-4 py-2.5 text-[13px] font-medium transition-all hover:border-purple/40 hover:bg-purple-light/30 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-purple/30"
                >
                  {copied ? (
                    <>
                      <Check size={15} className="text-success" />
                      Copied
                    </>
                  ) : (
                    <>
                      <Copy size={15} />
                      Copy email
                    </>
                  )}
                </button>
              </div>

              <p className="mt-6 text-[13.5px] leading-relaxed text-muted-foreground">
                Paste the address into Gmail, Outlook, Apple Mail, or whatever you use.
                Add a clear subject line and you&apos;ll get a reply from the same thread.
              </p>

              <div className="mt-6 flex flex-wrap gap-x-6 gap-y-2 border-t border-border/60 pt-6 text-[12.5px] text-muted-foreground">
                <span className="inline-flex items-center gap-1.5">
                  <Clock size={13} className="text-purple" />
                  Replies within ~2 business days
                </span>
                <span className="inline-flex items-center gap-1.5">
                  <Globe2 size={13} className="text-purple" />
                  Remote, async-first
                </span>
                <span className="inline-flex items-center gap-1.5">
                  <Shield size={13} className="text-purple" />
                  Your address is never shared
                </span>
              </div>
            </div>
          </div>

          <p className="mt-4 text-center text-[12.5px] text-muted-foreground">
            Prefer one tap?{" "}
            <a
              href={`mailto:${CONTACT_EMAIL}`}
              className="font-medium text-purple hover:underline"
            >
              Open in your email app
            </a>
          </p>
        </section>

        {/* What to write about */}
        <section className="mx-auto max-w-[900px] px-5 pb-20 sm:px-6 sm:pb-28">
          <div className="mb-8 text-center">
            <div className="section-label mb-2">What to write about</div>
            <h2 className="text-[24px] font-medium tracking-tight sm:text-[28px]">
              A helpful subject line is enough
            </h2>
            <p className="mx-auto mt-3 max-w-[480px] text-[14px] text-muted-foreground">
              Pick the bucket that fits — it helps route your note faster.
            </p>
          </div>

          <div className="grid gap-3 sm:grid-cols-2">
            {REASONS.map(({ icon: Icon, title, detail }) => (
              <div
                key={title}
                className="hairline bg-card flex gap-4 rounded-xl p-5 transition-colors hover:border-purple/30"
              >
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-muted/60 text-purple">
                  <Icon size={16} />
                </span>
                <div>
                  <h3 className="text-[14px] font-medium text-foreground">{title}</h3>
                  <p className="mt-1 text-[13px] leading-relaxed text-muted-foreground">
                    {detail}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="hairline mt-6 rounded-xl bg-card p-6 sm:p-7">
            <div className="section-label mb-3">Include when you can</div>
            <ul className="grid gap-2.5 sm:grid-cols-2">
              {[
                "Executive KB and chapter name",
                "What confused you or felt off",
                "How you'd rephrase or fix it",
                "Screenshots for visual bugs",
              ].map((item) => (
                <li key={item} className="flex gap-2 text-[13.5px] text-muted-foreground">
                  <Check size={14} className="mt-0.5 shrink-0 text-purple" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* FAQ */}
        <section className="mx-auto max-w-[720px] px-5 pb-24 sm:px-6 sm:pb-32">
          <div className="mb-8 text-center">
            <div className="section-label mb-2">FAQ</div>
            <h2 className="text-[26px] font-medium tracking-tight sm:text-[32px]">
              Quick answers
            </h2>
          </div>
          <div className="hairline divide-y divide-border overflow-hidden rounded-2xl bg-card">
            <Faq q="How fast will I hear back?">
              Most messages get a reply within two business days. Edit suggestions are
              usually merged or declined within a week.
            </Faq>
            <Faq q="Will my edit suggestion be credited?">
              If your suggestion meaningfully improves a chapter, you&apos;ll be credited
              by name (or handle) in the change log unless you ask otherwise.
            </Faq>
            <Faq q="Do you accept guest writers?">
              Occasionally. Pitch the topic, your angle, and a short writing sample.
              Depth and originality matter more than credentials.
            </Faq>
            <Faq q="Is FactorBeam open to sponsorship?">
              Not yet. The surface stays clean while the audience grows.
              Reach out anyway if you have a relevant offer.
            </Faq>
          </div>
        </section>

        {/* Footer CTA */}
        <section className="mx-auto max-w-[720px] px-5 pb-32 sm:px-6">
          <div className="flex flex-col items-center rounded-2xl hairline bg-card p-10 text-center sm:p-14">
            <h2 className="mb-3 text-[26px] font-medium tracking-tight sm:text-[32px]">
              Many answers are already in the Executive KB
            </h2>
            <p className="mb-8 max-w-[420px] text-[14.5px] text-muted-foreground sm:text-[15.5px]">
              Before you write, skim the index — you might find what you need in under
              a minute.
            </p>
            <Link
              to="/executive-kb"
              className="btn-primary gap-2 px-6 py-3 text-[14px]"
            >
              Browse Executive KB
              <ArrowRight size={15} />
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

function Faq({ q, children }: { q: string; children: React.ReactNode }) {
  return (
    <details className="group p-5 sm:p-6">
      <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-[15px] font-medium tracking-tight">
        {q}
        <span className="text-[20px] leading-none text-muted-foreground transition-transform group-open:rotate-45">
          +
        </span>
      </summary>
      <div className="mt-3 text-[14px] leading-relaxed text-muted-foreground">
        {children}
      </div>
    </details>
  );
}
