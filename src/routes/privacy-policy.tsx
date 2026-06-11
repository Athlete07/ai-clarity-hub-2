import { createFileRoute, Link } from "@tanstack/react-router";
import { Nav, Footer } from "@/components/site-nav";
import {
  LegalClosingCta,
  LegalDocumentLayout,
  LegalHero,
  LegalHighlightStrip,
  LegalProse,
  LegalSection,
} from "@/components/legal-document";
import { CookiePreferencesLink } from "@/components/cookie-consent";
import { brandOgMeta } from "@/lib/brand";
import { CREATOR } from "@/lib/creator";
import { Cookie, Eye, Shield, UserCheck } from "lucide-react";

export const Route = createFileRoute("/privacy-policy")({
  head: () => ({
    meta: [
      { title: "Privacy Policy — FactorBeam" },
      {
        name: "description",
        content:
          "FactorBeam's privacy policy explains how this site uses cookies, analytics, and third-party ads (Google AdSense). Learn about your data rights.",
      },
      { property: "og:title", content: "Privacy Policy — FactorBeam" },
      {
        property: "og:description",
        content:
          "How FactorBeam uses cookies, analytics, and third-party ads. Your data rights explained.",
      },
      { property: "og:url", content: "/privacy-policy" },
      { property: "og:type", content: "website" },
      ...brandOgMeta(),
    ],
    links: [{ rel: "canonical", href: "/privacy-policy" }],
  }),
  component: PrivacyPolicy,
});

const TOC = [
  { id: "overview", title: "Overview" },
  { id: "data-collected", title: "Data collected" },
  { id: "cookies", title: "Cookies & technologies" },
  { id: "advertising", title: "Third-party advertising" },
  { id: "data-use", title: "How your data is used" },
  { id: "your-rights", title: "Your rights" },
  { id: "retention", title: "Data retention" },
  { id: "changes", title: "Changes to this policy" },
] as const;

const HIGHLIGHTS = [
  { label: "No accounts", detail: "No signup required to use FactorBeam." },
  { label: "No data sold", detail: "Personal data is never sold to third parties." },
  { label: "You choose", detail: "Analytics & ads only with your consent." },
  { label: "Global rights", detail: "Access, delete, and opt out where applicable." },
];

function PrivacyPolicy() {
  return (
    <>
      <Nav />
      <main className="overflow-x-hidden">
        <LegalHero
          title="Privacy Policy"
          description="Transparency about cookies, ads, analytics, and your rights — written for a global audience."
          lastUpdated="June 2026"
        />

        <LegalHighlightStrip items={HIGHLIGHTS} />

        <LegalDocumentLayout
          toc={[...TOC]}
          related={{
            label: "Terms of Service",
            to: "/terms-of-service",
            description: "Rules for using FactorBeam's website and Executive KB content.",
          }}
        >
          <LegalSection id="overview" index={1} icon={Shield} title="Overview">
            <p>
              FactorBeam is a free educational website. This policy explains what data is
              collected, how it is used, and your rights. Collection is kept minimal: only
              what is necessary to run the site, improve the experience, and serve relevant
              ads.
            </p>
          </LegalSection>

          <LegalSection id="data-collected" index={2} icon={UserCheck} title="Data collected">
            <p>
              <strong>Automatically</strong> — when you visit FactorBeam, the hosting
              provider and analytics services may collect:
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
              <strong>From you directly</strong> — when you email{" "}
              <a href="mailto:hello@factorbeam.dev">hello@factorbeam.dev</a>, you may
              provide your name, email, and message. Messages are handled through your
              email provider and are not stored on this site&apos;s servers.
            </p>
            <p>
              FactorBeam does <strong>not</strong> collect: phone numbers, physical
              addresses, payment details, or any sensitive personal information.
            </p>
          </LegalSection>

          <LegalSection id="cookies" index={3} icon={Cookie} title="Cookies & similar technologies">
            <p>
              Cookies are small text files stored on your browser. This site uses them for:
            </p>
            <ul>
              <li>
                <strong>Strictly necessary</strong> — site functionality, theme preference,
                reading progress, and quiz state. These cannot be disabled.
              </li>
              <li>
                <strong>Analytics</strong> — anonymous usage statistics to understand which
                Executive KB sections are most helpful. Only active if you grant consent.
              </li>
              <li>
                <strong>Advertising</strong> — personalised ads via Google AdSense. Only
                active if you grant consent.
              </li>
            </ul>
            <p>
              You control analytics and advertising cookies through the cookie banner shown
              on your first visit, or by clicking{" "}
              <CookiePreferencesLink className="font-medium text-purple hover:underline" />{" "}
              in the footer at any time.
            </p>
          </LegalSection>

          <LegalSection id="advertising" index={4} icon={Eye} title="Third-party advertising">
            <p>
              FactorBeam displays ads through <strong>Google AdSense</strong>, a
              third-party advertising service. When you grant consent for advertising,
              Google may:
            </p>
            <ul>
              <li>Show personalised ads based on your browsing history and interests</li>
              <li>Use cookies and web beacons to measure ad performance</li>
              <li>Collect device and location data to serve contextually relevant ads</li>
            </ul>
            <p>
              Google operates independently of FactorBeam. For details on how Google uses
              your data, see the{" "}
              <a
                href="https://policies.google.com/privacy"
                target="_blank"
                rel="noopener noreferrer"
              >
                Google Privacy Policy
              </a>{" "}
              and{" "}
              <a
                href="https://policies.google.com/technologies/ads"
                target="_blank"
                rel="noopener noreferrer"
              >
                How Google uses information from sites that use its services
              </a>
              .
            </p>
            <p>
              <strong>Opt-out:</strong> You can opt out of personalised advertising by
              visiting{" "}
              <a
                href="https://adssettings.google.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                Google Ad Settings
              </a>{" "}
              or{" "}
              <a
                href="https://www.aboutads.info/choices"
                target="_blank"
                rel="noopener noreferrer"
              >
                Your Online Choices
              </a>
              . You can also reject advertising cookies in the cookie banner.
            </p>
          </LegalSection>

          <LegalSection id="data-use" index={5} icon={Shield} title="How your data is used">
            <ul>
              <li>Operate and secure the website</li>
              <li>Remember your preferences (theme, reading progress)</li>
              <li>Analyse aggregate usage to improve the Executive KB</li>
              <li>Serve ads when you have given consent</li>
              <li>Respond to your messages and feedback</li>
            </ul>
            <p>
              Personal data is <strong>not</strong> sold. Individual-level data is not
              shared with advertisers. Data is not used for automated decision-making or
              profiling beyond ad personalisation (which you can disable).
            </p>
          </LegalSection>

          <LegalSection id="your-rights" index={6} icon={UserCheck} title="Your rights">
            <p>Depending on your jurisdiction, you may have the right to:</p>
            <ul>
              <li>Access the personal data held about you</li>
              <li>Request correction or deletion of your data</li>
              <li>Withdraw consent for cookies or analytics at any time</li>
              <li>Object to processing for direct marketing</li>
              <li>Lodge a complaint with your local data-protection authority</li>
            </ul>
            <p>
              To exercise any of these rights, contact {CREATOR.name} at{" "}
              <a href="mailto:hello@factorbeam.dev">hello@factorbeam.dev</a>.
            </p>
          </LegalSection>

          <LegalSection id="retention" index={7} icon={Shield} title="Data retention">
            <p>
              Analytics data is retained for up to 26 months, after which it is automatically
              deleted. Email messages are not stored on this site&apos;s servers. Cookie
              consent records are retained for as long as necessary to respect your choices.
            </p>
          </LegalSection>

          <LegalSection id="changes" index={8} icon={Shield} title="Changes to this policy">
            <p>
              This policy may be updated to reflect changes in practices or legal
              requirements. Material changes will be announced on the site. The &quot;Last
              updated&quot; date at the top of this page reflects the most recent revision.
            </p>
          </LegalSection>

          <div className="rounded-2xl border border-border bg-muted/30 px-6 py-5 sm:px-8">
            <LegalProse>
              <p>
                If you have questions about this Privacy Policy, please{" "}
                <Link to="/contact" className="text-purple hover:underline">
                  contact us
                </Link>
                .
              </p>
            </LegalProse>
          </div>
        </LegalDocumentLayout>

        <LegalClosingCta
          title="Transparency builds trust."
          subtitle="Your data stays yours. Only what you consent to is used."
          secondaryLabel="Read Terms of Service"
          secondaryTo="/terms-of-service"
        />
      </main>
      <Footer />
    </>
  );
}
