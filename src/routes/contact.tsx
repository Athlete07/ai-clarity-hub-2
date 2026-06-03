import { createFileRoute, Link } from "@tanstack/react-router";
import { Nav, Footer } from "@/components/site-nav";
import { ArrowRight, Mail, MessageSquareText } from "lucide-react";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — FactorBeam" },
      {
        name: "description",
        content:
          "Get in touch with FactorBeam. Suggest edits, ask questions, or share feedback.",
      },
      { property: "og:title", content: "Contact — FactorBeam" },
      {
        property: "og:description",
        content: "Get in touch with FactorBeam. Suggest edits, ask questions, or share feedback.",
      },
      { property: "og:url", content: "/contact" },
      { property: "og:type", content: "website" },
    ],
    links: [{ rel: "canonical", href: "/contact" }],
  }),
  component: Contact,
});

function Contact() {
  return (
    <>
      <Nav />
      <main className="overflow-x-hidden">
        {/* ── Hero ───────────────────────────────────────────── */}
        <section className="relative">
          <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
            <div className="mesh-glow-1 absolute -top-24 left-1/2 h-[420px] w-[420px] -translate-x-1/2 rounded-full bg-purple-light/50 blur-[100px] dark:bg-purple-light/10" />
          </div>

          <div className="mx-auto max-w-[800px] px-5 pt-16 pb-12 text-center sm:px-6 sm:pt-28 sm:pb-20">
            <h1 className="text-[36px] font-medium leading-[1.08] tracking-[-0.025em] sm:text-[60px] sm:leading-[1.02]">
              Get in <span className="text-purple">touch</span>.
            </h1>
            <p className="mt-4 text-[15px] sm:text-[17px] text-muted-foreground max-w-[480px] mx-auto leading-relaxed">
              Spot a typo? Want a concept explained differently? Just want to say hi? We'd love to hear from you.
            </p>
          </div>
        </section>

        {/* ── Feedback & Contact ──────────────────────────── */}
        <section className="mx-auto max-w-[680px] px-5 pb-24 sm:px-6 sm:pb-32">
          <div className="hairline bg-card rounded-2xl p-8 sm:p-10">
            <div className="flex items-center gap-3 mb-4">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-purple/10 text-purple">
                <MessageSquareText size={18} />
              </div>
              <div>
                <div className="section-label">Feedback</div>
                <h2 className="text-[20px] font-medium tracking-tight sm:text-[24px]">
                  Spot something off?
                </h2>
              </div>
            </div>
            <p className="text-[14.5px] sm:text-[15px] text-muted-foreground leading-relaxed mb-6">
              Every concept here is held to a high bar — but mistakes slip through, examples age, and explanations can always be sharper. If a section confused you, an example felt off, or you have a clearer way to explain an idea, we want to hear it.
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <a
                href="mailto:hello@factorbeam.dev?subject=Playbook%20Feedback%20%E2%80%94%20Suggested%20Edit&body=Hi%20FactorBeam%20team%2C%0A%0AI%20was%20reading%20%5Bchapter%20name%5D%20and%20noticed%20something%3A%0A%0A-%20Concept%3A%20%5Bwhich%20concept%5D%0A-%20Issue%3A%20%5Bwhat%20felt%20unclear%2C%20wrong%2C%20or%20missing%5D%0A-%20Suggestion%3A%20%5Bhow%20you%27d%20rephrase%20or%20improve%20it%5D%0A%0AKeep%20up%20the%20great%20work.%0A"
                className="inline-flex items-center justify-center gap-2 rounded-md bg-purple px-5 py-2.5 text-[14px] font-medium text-white transition-colors hover:bg-purple-dark"
              >
                <Mail size={15} />
                Suggest an edit
              </a>
              <a
                href="mailto:hello@factorbeam.dev?subject=General%20Feedback&body=Hi%20FactorBeam%20team%2C%0A%0A"
                className="inline-flex items-center justify-center gap-2 rounded-md border border-border px-5 py-2.5 text-[14px] font-medium text-foreground transition-colors hover:bg-muted"
              >
                Send general feedback
              </a>
            </div>
          </div>
        </section>

        {/* ── Footer CTA ────────────────────────────────────── */}
        <section className="mx-auto max-w-[680px] px-5 pb-32 sm:px-6">
          <div className="text-center hairline bg-card p-10 sm:p-14 rounded-2xl flex flex-col items-center">
            <h2 className="text-[26px] sm:text-[32px] font-medium tracking-tight mb-3">The playbook is open.</h2>
            <p className="text-[14.5px] sm:text-[15.5px] text-muted-foreground mb-8">Free. No signup. Start reading in the next 60 seconds.</p>
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
