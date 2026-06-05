import { createFileRoute, Link } from "@tanstack/react-router";
import { Nav, Footer } from "@/components/site-nav";
import { Shield, Cookie, Eye, UserCheck, ArrowRight } from "lucide-react";

export const Route = createFileRoute("/privacy-policy")({
  head: () => ({
    meta: [
      { title: "Privacy Policy — FactorBeam" },
      {
        name: "description",
        content:
          "FactorBeam's privacy policy explains how we use cookies, analytics, and third-party ads (Google AdSense). Learn about your data rights.",
      },
      { property: "og:title", content: "Privacy Policy — FactorBeam" },
      {
        property: "og:description",
        content:
          "How FactorBeam uses cookies, analytics, and third-party ads. Your data rights explained.",
      },
      { property: "og:url", content: "/privacy-policy" },
      { property: "og:type", content: "website" },
    ],
    links: [{ rel: "canonical", href: "/privacy-policy" }],
  }),
  component: PrivacyPolicy,
});

function PrivacyPolicy() {
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
              Privacy Policy
            </h1>
            <p className="mx-auto mt-5 max-w-[540px] text-[15px] leading-relaxed text-muted-foreground sm:text-[17px]">
              Transparency about cookies, ads, analytics, and your rights.
              Last updated: June 2026.
            </p>
          </div>
        </section>

        {/* ── Policy body ──────────────────────────────────── */}
        <section className="mx-auto max-w-[800px] px-5 pb-24 sm:px-6 sm:pb-32">
          <div className="hairline bg-card rounded-2xl p-6 sm:p-10">
            {/* Overview */}
            <PolicySection icon={Shield} title="Overview">
              <p>
                FactorBeam respects your privacy. This policy explains what data we
                collect, how we use it, and your rights. We keep things minimal:
                we only collect what is necessary to run the site, improve the
                experience, and serve relevant ads.
              </p>
            </PolicySection>

            {/* What we collect */}
            <PolicySection icon={UserCheck} title="Data we collect">
              <p>
                <strong>Automatically</strong> — when you visit FactorBeam, our server
                and analytics providers may collect:
              </p>
              <ul>
                <li>IP address (anonymised in analytics)</li>
                <li>Browser type and version</li>
                <li>Operating system</li>
                <li>Referring URL and pages visited</li>
                <li>Device type and screen size</li>
                <li>Approximate location (country/region-level only)</li>
              </ul>
              <p>
                <strong>From you directly</strong> — when you use the contact form,
                you may provide your name, email, and message. We do not store this
                on our servers; it is handled by your email client.
              </p>
              <p>
                We do <strong>not</strong> collect: phone numbers, physical addresses,
                payment details, or any sensitive personal information.
              </p>
            </PolicySection>

            {/* Cookies */}
            <PolicySection icon={Cookie} title="Cookies & similar technologies">
              <p>
                Cookies are small text files stored on your browser. We use them for:
              </p>
              <ul>
                <li>
                  <strong>Strictly necessary</strong> — site functionality, theme
                  preference, reading progress, and quiz state. These cannot be
                  disabled.
                </li>
                <li>
                  <strong>Analytics</strong> — anonymous usage statistics to understand
                  which playbooks are most helpful. Only active if you grant consent.
                </li>
                <li>
                  <strong>Advertising</strong> — personalised ads via Google AdSense.
                  Only active if you grant consent.
                </li>
              </ul>
              <p>
                You control analytics and advertising cookies through the cookie banner
                shown on your first visit, or by clicking{" "}
                <span className="font-medium text-foreground">Cookie preferences</span>{" "}
                in the footer at any time.
              </p>
            </PolicySection>

            {/* Third-party ads */}
            <PolicySection icon={Eye} title="Third-party advertising">
              <p>
                FactorBeam displays ads through <strong>Google AdSense</strong>, a
                third-party advertising service. When you grant consent for
                advertising, Google may:
              </p>
              <ul>
                <li>
                  Show personalised ads based on your browsing history and interests
                </li>
                <li>
                  Use cookies and web beacons to measure ad performance
                </li>
                <li>
                  Collect device and location data to serve contextually relevant ads
                </li>
              </ul>
              <p>
                Google operates independently of FactorBeam. For details on how Google
                uses your data, see the{" "}
                <a
                  href="https://policies.google.com/privacy"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-purple hover:underline"
                >
                  Google Privacy Policy
                </a>{" "}
                and{" "}
                <a
                  href="https://policies.google.com/technologies/ads"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-purple hover:underline"
                >
                  How Google uses information from sites that use its services
                </a>.
              </p>
              <p>
                <strong>Opt-out:</strong> You can opt out of personalised advertising
                by visiting{" "}
                <a
                  href="https://adssettings.google.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-purple hover:underline"
                >
                  Google Ad Settings
                </a>{" "}
                or{" "}
                <a
                  href="https://www.aboutads.info/choices"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-purple hover:underline"
                >
                  Your Online Choices
                </a>. You can also reject advertising cookies in our cookie banner.
              </p>
            </PolicySection>

            {/* How we use data */}
            <PolicySection icon={Shield} title="How we use your data">
              <ul>
                <li>Operate and secure the website</li>
                <li>Remember your preferences (theme, reading progress)</li>
                <li>Analyse aggregate usage to improve playbooks</li>
                <li>Serve ads when you have given consent</li>
                <li>Respond to your messages and feedback</li>
              </ul>
              <p>
                We do <strong>not</strong> sell your personal data. We do not share
                individual-level data with advertisers. We do not use your data for
                automated decision-making or profiling beyond ad personalisation
                (which you can disable).
              </p>
            </PolicySection>

            {/* Your rights */}
            <PolicySection icon={UserCheck} title="Your rights">
              <p>Depending on your jurisdiction, you may have the right to:</p>
              <ul>
                <li>Access the personal data we hold about you</li>
                <li>Request correction or deletion of your data</li>
                <li>Withdraw consent for cookies or analytics at any time</li>
                <li>Object to processing for direct marketing</li>
                <li>Lodge a complaint with your local data-protection authority</li>
              </ul>
              <p>
                To exercise any of these rights, contact us at{" "}
                <a
                  href="mailto:hello@factorbeam.dev"
                  className="text-purple hover:underline"
                >
                  hello@factorbeam.dev
                </a>.
              </p>
            </PolicySection>

            {/* Retention */}
            <PolicySection icon={Shield} title="Data retention">
              <p>
                Analytics data is retained for up to 26 months, after which it is
                automatically deleted. Contact-form messages (sent via email) are not
                stored on our servers. Cookie consent records are retained for as
                long as necessary to respect your choices.
              </p>
            </PolicySection>

            {/* Changes */}
            <PolicySection icon={Shield} title="Changes to this policy">
              <p>
                We may update this policy to reflect changes in our practices or legal
                requirements. Material changes will be announced on the site. The
                "Last updated" date at the top of this page reflects the most recent
                revision.
              </p>
            </PolicySection>

            {/* Contact */}
            <div className="mt-8 border-t border-border pt-8">
              <p className="text-[14px] text-muted-foreground">
                If you have questions about this Privacy Policy, please{" "}
                <Link to="/contact" className="text-purple hover:underline">
                  contact us
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
              Transparency builds trust.
            </h2>
            <p className="mb-8 text-[14.5px] text-muted-foreground sm:text-[15.5px]">
              Your data stays yours. We only use what you consent to.
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

function PolicySection({
  icon: Icon,
  title,
  children,
}: {
  icon: typeof Shield;
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
