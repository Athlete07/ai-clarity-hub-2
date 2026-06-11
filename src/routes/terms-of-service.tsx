import { createFileRoute, Link } from "@tanstack/react-router";
import { Nav, Footer } from "@/components/site-nav";
import { FileText, Globe, Lock, AlertTriangle, Shield, ArrowRight } from "lucide-react";
import { CREATOR } from "@/lib/creator";

export const Route = createFileRoute("/terms-of-service")({
  head: () => ({
    meta: [
      { title: "Terms of Service — FactorBeam" },
      {
        name: "description",
        content:
          "FactorBeam's Terms of Service. Read the rules for using this website, its Executive KB, and content.",
      },
      { property: "og:title", content: "Terms of Service — FactorBeam" },
      {
        property: "og:description",
        content:
          "Rules for using FactorBeam's website, Executive KB, and content.",
      },
      { property: "og:url", content: "/terms-of-service" },
      { property: "og:type", content: "website" },
    ],
    links: [{ rel: "canonical", href: "/terms-of-service" }],
  }),
  component: TermsOfService,
});

function TermsOfService() {
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
              Legal
            </div>
            <h1 className="text-[36px] font-medium leading-[1.08] tracking-[-0.025em] sm:text-[60px] sm:leading-[1.02]">
              Terms of Service
            </h1>
            <p className="mx-auto mt-5 max-w-[540px] text-[15px] leading-relaxed text-muted-foreground sm:text-[17px]">
              The rules for using FactorBeam. Last updated: June 2026.
            </p>
          </div>
        </section>

        {/* ── Terms body ─────────────────────────────────────── */}
        <section className="mx-auto max-w-[800px] px-5 pb-24 sm:px-6 sm:pb-32">
          <div className="hairline bg-card rounded-2xl p-6 sm:p-10">
            {/* Overview */}
            <PolicySection icon={FileText} title="Overview">
              <p>
                FactorBeam is a free educational website and open Executive KB project,
                operated by {CREATOR.name}. These Terms of Service (&quot;Terms&quot;)
                govern your access to and use of FactorBeam — the website, Executive KB,
                quizzes, and all related content (collectively, the &quot;Service&quot;).
                By using the Service, you agree to these Terms. If you do not agree,
                please do not use the Service.
              </p>
            </PolicySection>

            {/* Eligibility */}
            <PolicySection icon={Lock} title="Eligibility">
              <p>
                You must be at least 13 years old to use FactorBeam. If you are
                under the age of majority in your jurisdiction, you must have
                permission from a parent or guardian. By using the Service, you
                represent that you meet these requirements.
              </p>
            </PolicySection>

            {/* Accounts */}
            <PolicySection icon={Lock} title="Accounts & registration">
              <p>
                FactorBeam does not currently require user accounts. If accounts are
                introduced in the future, you will be responsible for safeguarding
                your credentials and for all activity under your account. Notify{" "}
                <a
                  href="mailto:hello@factorbeam.dev"
                  className="text-purple hover:underline"
                >
                  hello@factorbeam.dev
                </a>{" "}
                immediately of any unauthorised use.
              </p>
            </PolicySection>

            {/* Content usage */}
            <PolicySection icon={FileText} title="Content & intellectual property">
              <p>
                All Executive KB content, text, diagrams, quizzes, and code examples on
                FactorBeam are original work published on the site unless otherwise noted,
                and are protected by copyright and other intellectual-property laws.
              </p>
              <p>
                <strong>You may:</strong>
              </p>
              <ul>
                <li>Read, bookmark, and share links to FactorBeam content</li>
                <li>Quote short excerpts with proper attribution</li>
                <li>Print or save copies for personal, non-commercial study</li>
              </ul>
              <p>
                <strong>You may not:</strong>
              </p>
              <ul>
                <li>Republish, redistribute, or sell FactorBeam content in whole or in substantial part</li>
                <li>Remove copyright notices or author attribution</li>
                <li>Use FactorBeam content to train machine-learning models without written permission</li>
                <li>Create derivative works (e.g., courses, books, paid newsletters) based on the Executive KB without a licence</li>
                <li>Scrape, mirror, or systematically download the site</li>
              </ul>
            </PolicySection>

            {/* DMCA / Copyright takedown */}
            <PolicySection icon={Shield} title="Copyright & DMCA takedown">
              <p>
                FactorBeam respects the intellectual-property rights of others. If you
                believe that material on the Service infringes your copyright, please
                notify {CREATOR.name} in writing with the following information:
              </p>
              <ul>
                <li>A physical or electronic signature of the copyright owner or a person authorised to act on their behalf</li>
                <li>Identification of the copyrighted work claimed to have been infringed</li>
                <li>Identification of the infringing material and its location on the Service (URL or specific page)</li>
                <li>Your contact information, including address, telephone number, and email address</li>
                <li>A statement that you have a good-faith belief the use is not authorised by the copyright owner, its agent, or the law</li>
                <li>A statement, under penalty of perjury, that the information in your notice is accurate and that you are the copyright owner or authorised to act on their behalf</li>
              </ul>
              <p>
                Send takedown notices to:{" "}
                <a
                  href="mailto:dmca@factorbeam.com"
                  className="text-purple hover:underline"
                >
                  dmca@factorbeam.com
                </a>
              </p>
              <p>
                Notices will be reviewed promptly and infringing material will be removed
                or disabled where appropriate. Repeat infringers may have access terminated.
              </p>
              <p>
                If you believe your content was removed in error, you may submit a
                counter-notice to the same email address with the required details under
                applicable law.
              </p>
            </PolicySection>

            {/* User conduct */}
            <PolicySection icon={AlertTriangle} title="Prohibited conduct">
              <p>You agree not to:</p>
              <ul>
                <li>Use the Service for any unlawful purpose</li>
                <li>Attempt to gain unauthorised access to the site&apos;s systems or data</li>
                <li>Interfere with the proper working of the Service (e.g., DDoS, scraping bots)</li>
                <li>Upload or transmit viruses, malware, or harmful code</li>
                <li>Harass, abuse, or harm another person through the Service</li>
                <li>Circumvent any security or access controls</li>
              </ul>
              <p>
                Access may be suspended or blocked for violations.
              </p>
            </PolicySection>

            {/* Third-party services */}
            <PolicySection icon={Globe} title="Third-party services">
              <p>
                FactorBeam uses third-party services including Google AdSense for
                advertising and analytics providers for usage statistics. These
                services are governed by their own terms and privacy policies. FactorBeam
                is not responsible for the practices of third-party services.
              </p>
            </PolicySection>

            {/* Disclaimers */}
            <PolicySection icon={AlertTriangle} title="Disclaimers">
              <p>
                The Service is provided "as is" and "as available" without warranties
                of any kind, either express or implied. No warranty is given that the
                Service will be uninterrupted, error-free, secure, or that any defects
                will be corrected.
              </p>
              <p>
                The Executive KB reflects the author&apos;s best understanding of AI and
                product-management concepts at the time of writing, but the field evolves
                rapidly. No guarantee is made that any strategy, technique, or example
                will produce specific results in your context.
              </p>
            </PolicySection>

            {/* Limitation of liability */}
            <PolicySection icon={AlertTriangle} title="Limitation of liability">
              <p>
                To the fullest extent permitted by law, {CREATOR.name}, as operator of
                FactorBeam, shall not be liable for any indirect, incidental, special,
                consequential, or punitive damages arising out of or relating to your
                use of the Service, even if advised of the possibility of such damages.
                Total liability for any claim shall not exceed the amount paid to use
                the Service (which, for the free tier, is zero).
              </p>
            </PolicySection>

            {/* Indemnification */}
            <PolicySection icon={Lock} title="Indemnification">
              <p>
                You agree to indemnify and hold harmless {CREATOR.name}, as operator of
                FactorBeam, from any claims, damages, losses, or expenses (including
                reasonable legal fees) arising out of your use of the Service, your
                violation of these Terms, or your infringement of any third-party rights.
              </p>
            </PolicySection>

            {/* Termination */}
            <PolicySection icon={FileText} title="Termination">
              <p>
                Access to the Service may be suspended or terminated at any time,
                with or without notice, for any reason, including violation of these
                Terms. Upon termination, all licences granted to you under these Terms
                will cease immediately.
              </p>
            </PolicySection>

            {/* Governing law */}
            <PolicySection icon={Globe} title="Governing law">
              <p>
                These Terms shall be governed by and construed in accordance with the
                laws of England and Wales, without regard to conflict-of-law principles.
                Any dispute arising under these Terms shall be subject to the exclusive
                jurisdiction of the courts of England and Wales.
              </p>
            </PolicySection>

            {/* Changes */}
            <PolicySection icon={FileText} title="Changes to these terms">
              <p>
                These Terms may be updated from time to time. Material changes will be
                posted on this page with an updated &quot;Last updated&quot; date. Continued use
                of the Service after changes constitutes acceptance of the revised Terms.
              </p>
            </PolicySection>

            {/* Contact */}
            <div className="mt-8 border-t border-border pt-8">
              <p className="text-[14px] text-muted-foreground">
                Questions about these Terms?{" "}
                <Link to="/contact" className="text-purple hover:underline">
                  Contact us
                </Link>
                .
              </p>
            </div>
          </div>
        </section>

        {/* ── CTA ───────────────────────────────────────────── */}
        <section className="mx-auto max-w-[720px] px-5 pb-32 sm:px-6">
          <div className="text-center hairline bg-card p-10 sm:p-14 rounded-2xl flex flex-col items-center">
            <h2 className="text-[26px] sm:text-[32px] font-medium tracking-tight mb-3">
              Back to Executive KB.
            </h2>
            <p className="mb-8 text-[14.5px] text-muted-foreground sm:text-[15.5px]">
              Free. No signup. Start reading in the next 60 seconds.
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

function PolicySection({
  icon: Icon,
  title,
  children,
}: {
  icon: typeof FileText;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className="mb-10 last:mb-0">
      <div className="flex items-center gap-2.5 mb-3">
        <Icon size={16} className="text-purple" />
        <h2 className="text-[18px] font-medium tracking-tight">{title}</h2>
      </div>
      <div className="space-y-3 text-[14.5px] leading-[1.7] text-muted-foreground pl-[26px]">
        {children}
      </div>
    </div>
  );
}
