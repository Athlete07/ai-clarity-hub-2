import { createFileRoute, Link } from "@tanstack/react-router";
import { Nav, Footer } from "@/components/site-nav";
import {
  ArrowRight,
  Mail,
  MessageSquareText,
  PencilLine,
  Lightbulb,
  Bug,
  Handshake,
  Clock,
  Globe2,
  Check,
} from "lucide-react";
import { useMemo, useState } from "react";

const CONTACT_EMAIL = "hello@factorbeam.dev";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact FactorBeam — Suggest edits, ask questions, partner with us" },
      {
        name: "description",
        content:
          "Reach the FactorBeam team. Suggest an edit to a playbook, report a bug, share feedback, or explore a partnership. Most messages get a reply within two business days.",
      },
      { property: "og:title", content: "Contact — FactorBeam" },
      {
        property: "og:description",
        content:
          "Suggest edits, report bugs, share feedback, or partner with FactorBeam.",
      },
      { property: "og:url", content: "/contact" },
      { property: "og:type", content: "website" },
    ],
    links: [{ rel: "canonical", href: "/contact" }],
  }),
  component: Contact,
});

type Topic = "edit" | "idea" | "bug" | "partnership" | "other";

const TOPICS: { id: Topic; label: string; icon: typeof PencilLine; hint: string }[] = [
  { id: "edit", label: "Suggest an edit", icon: PencilLine, hint: "Typos, unclear sections, better examples." },
  { id: "idea", label: "Topic idea", icon: Lightbulb, hint: "A concept you wish we covered." },
  { id: "bug", label: "Report a bug", icon: Bug, hint: "Something broken on the site." },
  { id: "partnership", label: "Partnership", icon: Handshake, hint: "Collaborations, guest writing, sponsorship." },
  { id: "other", label: "Something else", icon: MessageSquareText, hint: "Just want to say hi." },
];

function Contact() {
  const [topic, setTopic] = useState<Topic>("edit");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [sent, setSent] = useState(false);

  const selected = TOPICS.find((t) => t.id === topic)!;

  const mailtoHref = useMemo(() => {
    const subjectLine =
      subject.trim() ||
      `${selected.label}${name.trim() ? ` — from ${name.trim()}` : ""}`;
    const body = [
      message.trim() || "(write your message here)",
      "",
      "—",
      name.trim() ? `From: ${name.trim()}` : null,
      email.trim() ? `Reply to: ${email.trim()}` : null,
      `Topic: ${selected.label}`,
    ]
      .filter(Boolean)
      .join("\n");
    const params = new URLSearchParams({ subject: subjectLine, body });
    return `mailto:${CONTACT_EMAIL}?${params.toString().replace(/\+/g, "%20")}`;
  }, [subject, selected, name, email, message]);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    window.location.href = mailtoHref;
    setSent(true);
  }

  return (
    <>
      <Nav />
      <main className="overflow-x-hidden">
        {/* ── Hero ───────────────────────────────────────────── */}
        <section className="relative">
          <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
            <div className="mesh-glow-1 absolute -top-24 left-1/2 h-[460px] w-[460px] -translate-x-1/2 rounded-full bg-purple-light/50 blur-[110px] dark:bg-purple-light/10" />
          </div>

          <div className="mx-auto max-w-[820px] px-5 pt-16 pb-10 text-center sm:px-6 sm:pt-28 sm:pb-14">
            <div className="section-label mb-4 inline-flex items-center gap-2">
              <span className="inline-block h-1.5 w-1.5 rounded-full bg-purple" />
              Contact
            </div>
            <h1 className="text-[36px] font-medium leading-[1.08] tracking-[-0.025em] sm:text-[60px] sm:leading-[1.02]">
              Let's make the playbook <span className="text-purple">sharper</span>.
            </h1>
            <p className="mx-auto mt-5 max-w-[540px] text-[15px] leading-relaxed text-muted-foreground sm:text-[17px]">
              Found a typo, have a clearer example, spotted a bug, or want to partner?
              Pick a topic below and send a note — we read every message.
            </p>

            <div className="mt-6 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-[13px] text-muted-foreground">
              <span className="inline-flex items-center gap-1.5">
                <Clock size={13} className="text-purple" />
                Replies within ~2 business days
              </span>
              <span className="inline-flex items-center gap-1.5">
                <Globe2 size={13} className="text-purple" />
                Remote, async-first
              </span>
              <span className="inline-flex items-center gap-1.5">
                <Mail size={13} className="text-purple" />
                {CONTACT_EMAIL}
              </span>
            </div>
          </div>
        </section>

        {/* ── Form + Side rail ─────────────────────────── */}
        <section className="mx-auto max-w-[1100px] px-5 pb-20 sm:px-6 sm:pb-28">
          <div className="grid gap-8 lg:grid-cols-[1fr_340px] lg:gap-10">
            {/* Form card */}
            <form
              onSubmit={handleSubmit}
              className="hairline bg-card rounded-2xl p-6 sm:p-9"
            >
              {/* Topic picker */}
              <div className="mb-6">
                <label className="mb-3 block text-[13px] font-medium text-foreground/80">
                  What's this about?
                </label>
                <div className="grid grid-cols-2 gap-2 sm:grid-cols-5">
                  {TOPICS.map((t) => {
                    const Icon = t.icon;
                    const active = topic === t.id;
                    return (
                      <button
                        key={t.id}
                        type="button"
                        onClick={() => setTopic(t.id)}
                        aria-pressed={active}
                        className={[
                          "group flex flex-col items-start gap-1.5 rounded-lg border px-3 py-3 text-left transition-all",
                          active
                            ? "border-purple/50 bg-purple/5 ring-1 ring-purple/30"
                            : "border-border bg-background hover:border-foreground/20 hover:bg-muted/50",
                        ].join(" ")}
                      >
                        <Icon
                          size={15}
                          className={active ? "text-purple" : "text-muted-foreground"}
                        />
                        <span className="text-[12.5px] font-medium leading-tight">
                          {t.label}
                        </span>
                      </button>
                    );
                  })}
                </div>
                <p className="mt-2 text-[12.5px] text-muted-foreground">{selected.hint}</p>
              </div>

              {/* Identity */}
              <div className="grid gap-4 sm:grid-cols-2">
                <Field label="Name" htmlFor="name" optional>
                  <input
                    id="name"
                    type="text"
                    autoComplete="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Jane Doe"
                    className="w-full rounded-md border border-border bg-background px-3 py-2.5 text-[14px] outline-none transition-colors placeholder:text-muted-foreground/60 focus:border-purple/60 focus:ring-2 focus:ring-purple/20"
                  />
                </Field>
                <Field label="Email" htmlFor="email" optional>
                  <input
                    id="email"
                    type="email"
                    autoComplete="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="you@company.com"
                    className="w-full rounded-md border border-border bg-background px-3 py-2.5 text-[14px] outline-none transition-colors placeholder:text-muted-foreground/60 focus:border-purple/60 focus:ring-2 focus:ring-purple/20"
                  />
                </Field>
              </div>

              <div className="mt-4">
                <Field label="Subject" htmlFor="subject" optional>
                  <input
                    id="subject"
                    type="text"
                    value={subject}
                    onChange={(e) => setSubject(e.target.value)}
                    placeholder={`e.g. ${
                      topic === "edit"
                        ? "Typo in LLMs · Chapter 2"
                        : topic === "bug"
                          ? "Quiz won't submit on Safari"
                          : "Short summary"
                    }`}
                    className="w-full rounded-md border border-border bg-background px-3 py-2.5 text-[14px] outline-none transition-colors placeholder:text-muted-foreground/60 focus:border-purple/60 focus:ring-2 focus:ring-purple/20"
                  />
                </Field>
              </div>

              <div className="mt-4">
                <Field label="Message" htmlFor="message">
                  <textarea
                    id="message"
                    required
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    rows={7}
                    placeholder="Tell us what you noticed, what you'd change, and (if relevant) where you saw it…"
                    className="w-full resize-y rounded-md border border-border bg-background px-3 py-2.5 text-[14px] leading-relaxed outline-none transition-colors placeholder:text-muted-foreground/60 focus:border-purple/60 focus:ring-2 focus:ring-purple/20"
                  />
                </Field>
              </div>

              <div className="mt-6 flex flex-col-reverse items-stretch gap-3 sm:flex-row sm:items-center sm:justify-between">
                <p className="text-[12.5px] text-muted-foreground">
                  By sending, you agree your message opens in your email client.
                  We never share your address.
                </p>
                <button
                  type="submit"
                  disabled={!message.trim()}
                  className="inline-flex items-center justify-center gap-2 rounded-md bg-purple px-5 py-2.5 text-[14px] font-medium text-white transition-colors hover:bg-purple-dark disabled:cursor-not-allowed disabled:opacity-50"
                >
                  {sent ? (
                    <>
                      <Check size={15} />
                      Opened in your mail app
                    </>
                  ) : (
                    <>
                      Send message
                      <ArrowRight size={15} />
                    </>
                  )}
                </button>
              </div>
            </form>

            {/* Side rail */}
            <aside className="flex flex-col gap-4">
              <div className="hairline bg-card rounded-2xl p-6">
                <div className="section-label mb-2">Direct email</div>
                <a
                  href={`mailto:${CONTACT_EMAIL}`}
                  className="text-[15px] font-medium text-foreground hover:text-purple"
                >
                  {CONTACT_EMAIL}
                </a>
                <p className="mt-2 text-[13px] leading-relaxed text-muted-foreground">
                  Prefer your own client? Write to us directly — we read everything.
                </p>
              </div>

              <div className="hairline bg-card rounded-2xl p-6">
                <div className="section-label mb-3">What to include</div>
                <ul className="space-y-2.5 text-[13.5px] text-muted-foreground">
                  <Bullet>The playbook and chapter (if relevant)</Bullet>
                  <Bullet>What confused you or felt off</Bullet>
                  <Bullet>How you'd rephrase or fix it</Bullet>
                  <Bullet>Screenshots for visual bugs</Bullet>
                </ul>
              </div>

              <div className="hairline bg-card rounded-2xl p-6">
                <div className="section-label mb-3">Before you write</div>
                <p className="text-[13.5px] leading-relaxed text-muted-foreground">
                  Many answers already live in the playbooks. A quick scan of the index
                  might save you a round-trip.
                </p>
                <Link
                  to="/playbooks"
                  className="mt-3 inline-flex items-center gap-1.5 text-[13.5px] font-medium text-purple hover:underline"
                >
                  Browse playbooks
                  <ArrowRight size={13} />
                </Link>
              </div>
            </aside>
          </div>
        </section>

        {/* ── FAQ ───────────────────────────────────────── */}
        <section className="mx-auto max-w-[820px] px-5 pb-24 sm:px-6 sm:pb-32">
          <div className="mb-8 text-center">
            <div className="section-label mb-2">FAQ</div>
            <h2 className="text-[26px] font-medium tracking-tight sm:text-[32px]">
              Quick answers
            </h2>
          </div>
          <div className="divide-y divide-border hairline bg-card rounded-2xl overflow-hidden">
            <Faq q="How fast will I hear back?">
              Most messages get a reply within two business days. Edit suggestions
              are usually merged or declined within a week.
            </Faq>
            <Faq q="Will my edit suggestion be credited?">
              If your suggestion meaningfully improves a chapter, we'll credit you
              by name (or handle) in the change log unless you ask us not to.
            </Faq>
            <Faq q="Do you accept guest writers?">
              Occasionally. Pitch the topic, your angle, and a short writing sample.
              We're selective — depth and originality matter more than credentials.
            </Faq>
            <Faq q="Is FactorBeam open to sponsorship?">
              Not yet. We're keeping the surface clean while the audience grows.
              Reach out anyway if you have a relevant offer.
            </Faq>
          </div>
        </section>

        {/* ── Footer CTA ────────────────────────────────────── */}
        <section className="mx-auto max-w-[720px] px-5 pb-32 sm:px-6">
          <div className="text-center hairline bg-card p-10 sm:p-14 rounded-2xl flex flex-col items-center">
            <h2 className="text-[26px] sm:text-[32px] font-medium tracking-tight mb-3">
              The playbook is open.
            </h2>
            <p className="mb-8 text-[14.5px] text-muted-foreground sm:text-[15.5px]">
              Free. No signup. Start reading in the next 60 seconds.
            </p>
            <Link
              to="/playbooks"
              className="inline-flex items-center justify-center gap-2 rounded-md bg-purple px-6 py-3 text-[14px] font-medium text-white transition-colors hover:bg-purple-dark"
            >
              Browse the playbooks
              <ArrowRight size={15} />
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

function Field({
  label,
  htmlFor,
  optional,
  children,
}: {
  label: string;
  htmlFor: string;
  optional?: boolean;
  children: React.ReactNode;
}) {
  return (
    <div>
      <label
        htmlFor={htmlFor}
        className="mb-1.5 flex items-baseline justify-between text-[13px] font-medium text-foreground/80"
      >
        <span>{label}</span>
        {optional ? (
          <span className="text-[11.5px] font-normal text-muted-foreground">Optional</span>
        ) : null}
      </label>
      {children}
    </div>
  );
}

function Bullet({ children }: { children: React.ReactNode }) {
  return (
    <li className="flex gap-2">
      <Check size={14} className="mt-0.5 flex-none text-purple" />
      <span>{children}</span>
    </li>
  );
}

function Faq({ q, children }: { q: string; children: React.ReactNode }) {
  return (
    <details className="group p-5 sm:p-6">
      <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-[15px] font-medium tracking-tight">
        {q}
        <span className="text-muted-foreground transition-transform group-open:rotate-45 text-[20px] leading-none">
          +
        </span>
      </summary>
      <div className="mt-3 text-[14px] leading-relaxed text-muted-foreground">
        {children}
      </div>
    </details>
  );
}
