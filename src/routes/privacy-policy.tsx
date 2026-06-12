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
import {
  AlertTriangle,
  Cookie,
  Eye,
  FileText,
  Globe,
  Lock,
  Scale,
  Shield,
  UserCheck,
} from "lucide-react";

const CONTACT_EMAIL = CREATOR.socials.email;
const GOOGLE_PRIVACY_URL = "https://policies.google.com/privacy";
const GOOGLE_ADS_PRIVACY_URL =
  "https://policies.google.com/technologies/ads";
const GOOGLE_DATA_PARTNERS_URL =
  "https://policies.google.com/technologies/partner-sites";
const GOOGLE_AD_SETTINGS_URL = "https://adssettings.google.com";
const ABOUT_ADS_OPT_OUT_URL = "https://www.aboutads.info/choices";
const NAI_OPT_OUT_URL = "https://optout.networkadvertising.org";
const GOOGLE_ADSENSE_POLICIES_URL =
  "https://support.google.com/adsense/answer/9335564";
const CLOUDFLARE_PRIVACY_URL = "https://www.cloudflare.com/privacypolicy/";

export const Route = createFileRoute("/privacy-policy")({
  head: () => ({
    meta: [
      { title: "Privacy Policy — FactorBeam" },
      {
        name: "description",
        content:
          "FactorBeam Privacy Policy — how we collect, use, and protect personal data worldwide, including cookies, Google AdSense, and your legal rights.",
      },
      { property: "og:title", content: "Privacy Policy — FactorBeam" },
      {
        property: "og:description",
        content:
          "Global privacy disclosures for FactorBeam — data practices, Google AdSense, cookies, and your rights under GDPR, CCPA, and other laws.",
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
  { id: "controller", title: "Data controller & contact" },
  { id: "scope", title: "Scope & children" },
  { id: "data-collected", title: "Data we collect" },
  { id: "legal-bases", title: "Legal bases" },
  { id: "cookies", title: "Cookies & technologies" },
  { id: "advertising", title: "Google AdSense" },
  { id: "analytics", title: "Analytics" },
  { id: "data-use", title: "How we use data" },
  { id: "sharing", title: "Sharing & processors" },
  { id: "transfers", title: "International transfers" },
  { id: "retention", title: "Data retention" },
  { id: "security", title: "Security" },
  { id: "your-rights", title: "Your rights" },
  { id: "regional", title: "Regional notices" },
  { id: "third-party", title: "Third-party links" },
  { id: "changes", title: "Changes" },
] as const;

const HIGHLIGHTS = [
  { label: "No accounts", detail: "No signup required to use FactorBeam." },
  { label: "No data sold", detail: "Personal data is never sold to third parties." },
  { label: "Consent first", detail: "Analytics & ads only with your permission." },
  { label: "Global rights", detail: "Access, delete, and opt out where applicable." },
];

function PrivacyPolicy() {
  return (
    <>
      <Nav />
      <main className="overflow-x-hidden">
        <LegalHero
          title="Privacy Policy"
          description="How FactorBeam collects, uses, and protects personal data for visitors worldwide — including cookie choices, Google AdSense disclosures, and your rights under applicable privacy laws."
          lastUpdated="June 2026"
        />

        <LegalHighlightStrip items={HIGHLIGHTS} />

        <LegalDocumentLayout
          toc={[...TOC]}
          related={{
            label: "Terms of Service",
            to: "/terms-of-service",
            description:
              "Rules for using FactorBeam, including advertising standards and prohibited conduct.",
          }}
        >
          <LegalSection id="overview" index={1} icon={Shield} title="Overview">
            <p>
              FactorBeam (&quot;FactorBeam&quot;, &quot;we&quot;, &quot;us&quot;, or
              &quot;our&quot;) is a free educational website and open AI Literacy project
              operated by {CREATOR.name}. This Privacy Policy explains how we collect, use,
              disclose, and protect personal data when you visit or use our website, AI Literacy
              tracks, quizzes, simulations, and related features (collectively, the
              &quot;Service&quot;).
            </p>
            <p>
              We apply this policy to visitors globally and design our cookie and advertising
              practices to align with widely recognised standards, including the EU General Data
              Protection Regulation (GDPR), UK GDPR, and Google AdSense publisher requirements.
              By using the Service, you acknowledge this policy. If you do not agree, please do
              not use the Service.
            </p>
            <p>
              This policy should be read together with our{" "}
              <Link to="/terms-of-service" className="text-purple hover:underline">
                Terms of Service
              </Link>
              .
            </p>
          </LegalSection>

          <LegalSection id="controller" index={2} icon={Globe} title="Data controller & contact">
            <p>
              <strong>Data controller:</strong> {CREATOR.name}, trading as FactorBeam, based in{" "}
              {CREATOR.location}.
            </p>
            <p>
              <strong>Privacy contact:</strong>{" "}
              <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>
            </p>
            <p>
              For questions about this policy, to exercise your privacy rights, or to raise a
              concern about how we handle personal data, contact us at the email above. We will
              respond within the timeframes required by applicable law.
            </p>
          </LegalSection>

          <LegalSection id="scope" index={3} icon={UserCheck} title="Scope & children">
            <p>
              This policy applies to personal data processed through the Service. It does not
              apply to third-party websites, apps, or services linked from FactorBeam, which
              have their own privacy policies.
            </p>
            <p>
              <strong>Children:</strong> The Service is not directed at children under 13. We do
              not knowingly collect personal data from children under 13. If you are under the
              age of digital consent in your country (for example, 16 in parts of the European
              Economic Area or United Kingdom), you may use the Service only with verifiable
              consent from a parent or legal guardian. If you believe a child has provided us
              personal data without appropriate consent, contact us and we will take appropriate
              steps to delete it.
            </p>
          </LegalSection>

          <LegalSection id="data-collected" index={4} icon={UserCheck} title="Data we collect">
            <p>
              We collect only the data needed to operate the Service, remember your preferences,
              comply with law, and — where you consent — measure usage and serve advertising.
            </p>
            <p>
              <strong>Data collected automatically when you visit:</strong>
            </p>
            <ul>
              <li>IP address and approximate location (typically country or region level)</li>
              <li>Browser type, version, language, and device identifiers</li>
              <li>Operating system and device type</li>
              <li>Referring URL, pages viewed, and timestamps</li>
              <li>Screen size and similar technical telemetry needed to render the site</li>
            </ul>
            <p>
              Our hosting and content-delivery providers (including Cloudflare) may process this
              information to deliver, secure, and optimise the Service. Server logs are generated
              as part of normal website operation.
            </p>
            <p>
              <strong>Data stored locally in your browser:</strong>
            </p>
            <ul>
              <li>Theme preference (light/dark mode)</li>
              <li>Reading progress and quiz state</li>
              <li>Cookie consent choices (category and timestamp)</li>
            </ul>
            <p>
              This information stays on your device unless you clear browser storage. We do not
              currently operate user accounts or a central profile database.
            </p>
            <p>
              <strong>Data you provide directly:</strong> If you email us at{" "}
              <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a> (via our{" "}
              <Link to="/contact" className="text-purple hover:underline">
                contact page
              </Link>
              ), you may provide your name, email address, and message content. Messages are
              handled through your email provider and our inbox; they are not published on the
              site.
            </p>
            <p>
              <strong>We do not intentionally collect:</strong> payment card details, government
              ID numbers, precise geolocation, health data, or other special categories of
              personal data through the Service.
            </p>
          </LegalSection>

          <LegalSection id="legal-bases" index={5} icon={Scale} title="Legal bases for processing">
            <p>
              Where the GDPR, UK GDPR, or similar laws apply, we rely on the following legal
              bases:
            </p>
            <ul>
              <li>
                <strong>Consent</strong> — for non-essential cookies, analytics, and personalised
                advertising (including Google AdSense), where required. You may withdraw consent at
                any time via{" "}
                <CookiePreferencesLink className="font-medium text-purple hover:underline" />{" "}
                in the footer.
              </li>
              <li>
                <strong>Legitimate interests</strong> — to operate, secure, and improve the
                Service, prevent abuse, and understand aggregate usage, balanced against your
                rights. Where local law requires consent instead of legitimate interests for a
                specific activity, we obtain consent.
              </li>
              <li>
                <strong>Legal obligation</strong> — to comply with applicable law, respond to
                lawful requests, and enforce our Terms.
              </li>
            </ul>
            <p>
              In jurisdictions that use different frameworks (for example, consent or notice under
              U.S. state privacy laws, or legitimate uses under India&apos;s Digital Personal Data
              Protection Act), we process personal data as permitted by those laws.
            </p>
          </LegalSection>

          <LegalSection id="cookies" index={6} icon={Cookie} title="Cookies & similar technologies">
            <p>
              Cookies are small text files stored on your device. We also use similar technologies
              such as local storage and pixels/beacons (where advertising is enabled). Cookies
              and related technologies are grouped as follows:
            </p>
            <ul>
              <li>
                <strong>Strictly necessary</strong> — required for core functionality, security,
                theme preference, reading progress, quiz state, and remembering your consent
                choices. These cannot be disabled through our banner because the Service cannot
                function properly without them.
              </li>
              <li>
                <strong>Analytics</strong> — help us understand how visitors use the AI Literacy
                (for example, which sections are most read). Loaded only if you grant analytics
                consent. We do not currently load a third-party analytics script; this category
                exists so we can enable measurement in future without changing how you control
                cookies.
              </li>
              <li>
                <strong>Advertising</strong> — used by Google AdSense and its partners to serve
                and measure ads, including personalised ads where permitted. Loaded only if you
                grant advertising consent.
              </li>
            </ul>
            <p>
              On your first visit, a cookie banner asks for your choices. You can change them at
              any time by clicking{" "}
              <CookiePreferencesLink className="font-medium text-purple hover:underline" />{" "}
              in the footer. Rejecting non-essential cookies means analytics and advertising
              scripts are not loaded.
            </p>
            <p>
              Browser settings may also let you block or delete cookies. Blocking strictly
              necessary cookies may affect site functionality.
            </p>
          </LegalSection>

          <LegalSection id="advertising" index={7} icon={Eye} title="Google AdSense">
            <p>
              FactorBeam may display third-party advertisements through{" "}
              <strong>Google AdSense</strong>, operated by Google LLC (and Google Ireland Limited
              for users in the European Economic Area and United Kingdom). Advertising helps keep
              the Service free. AdSense scripts and ad tags load only after you consent to
              advertising cookies, except where non-personalised ads are permitted without consent
              under applicable law.
            </p>
            <p>
              <strong>Required Google advertising disclosures:</strong>
            </p>
            <ul>
              <li>
                Third-party vendors, including Google, use cookies to serve ads based on a
                user&apos;s prior visits to this website or other websites.
              </li>
              <li>
                Google&apos;s use of advertising cookies enables it and its partners to serve ads
                to users based on their visit to our site and/or other sites on the Internet.
              </li>
              <li>
                Users may opt out of personalised advertising by visiting{" "}
                <a
                  href={GOOGLE_AD_SETTINGS_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Google Ads Settings
                </a>
                .
              </li>
              <li>
                Alternatively, users may opt out of a third-party vendor&apos;s use of cookies for
                personalised advertising by visiting{" "}
                <a
                  href={ABOUT_ADS_OPT_OUT_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  www.aboutads.info
                </a>{" "}
                (U.S.) or{" "}
                <a href={NAI_OPT_OUT_URL} target="_blank" rel="noopener noreferrer">
                  optout.networkadvertising.org
                </a>{" "}
                (Network Advertising Initiative).
              </li>
            </ul>
            <p>
              When advertising is enabled, Google and its partners may collect or receive
              information from your browser or device (such as cookies, device identifiers, IP
              address, and ad interaction data) to deliver, personalise, and measure ads. Google
              operates independently of FactorBeam.
            </p>
            <p>
              For more information, see:
            </p>
            <ul>
              <li>
                <a href={GOOGLE_PRIVACY_URL} target="_blank" rel="noopener noreferrer">
                  Google Privacy Policy
                </a>
              </li>
              <li>
                <a href={GOOGLE_ADS_PRIVACY_URL} target="_blank" rel="noopener noreferrer">
                  How Google uses information from sites that use its services
                </a>
              </li>
              <li>
                <a
                  href={GOOGLE_DATA_PARTNERS_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  How Google uses data when you use our partners&apos; sites or apps
                </a>
              </li>
              <li>
                <a
                  href={GOOGLE_ADSENSE_POLICIES_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Google Publisher Policies
                </a>
              </li>
            </ul>
            <p>
              FactorBeam does not sell your personal data to advertisers. We do not share
              individual-level browsing data with advertisers for their own use beyond what occurs
              through standard ad delivery when you have consented (or where non-personalised ads
              are lawfully served). Advertiser content and offers are provided by third parties;
              we do not control and are not responsible for them. See our{" "}
              <Link to="/terms-of-service" className="text-purple hover:underline">
                Terms of Service
              </Link>{" "}
              for user obligations regarding invalid ad clicks.
            </p>
          </LegalSection>

          <LegalSection id="analytics" index={8} icon={FileText} title="Analytics">
            <p>
              If you consent to analytics cookies, we may use privacy-oriented analytics tools to
              understand aggregate traffic and content performance (for example, which AI Literacy
              chapters are most visited). Analytics is designed to minimise identification of
              individual visitors.
            </p>
            <p>
              <strong>Current status:</strong> Analytics consent is collected through our cookie
              banner, but a third-party analytics provider is not yet active on the site. When we
              enable analytics, we will update this policy and ensure processing remains
              consent-gated where required by law.
            </p>
            <p>
              You may withdraw analytics consent at any time via{" "}
              <CookiePreferencesLink className="font-medium text-purple hover:underline" />{" "}
              in the footer.
            </p>
          </LegalSection>

          <LegalSection id="data-use" index={9} icon={Shield} title="How we use data">
            <p>We use personal data to:</p>
            <ul>
              <li>Provide, maintain, and secure the Service</li>
              <li>Remember your preferences (theme, reading progress, consent choices)</li>
              <li>Understand aggregate usage and improve the AI Literacy</li>
              <li>Serve and measure advertising when you have given consent</li>
              <li>Respond to enquiries, feedback, and support requests</li>
              <li>Detect, prevent, and address abuse, fraud, or security incidents</li>
              <li>Comply with legal obligations and enforce our Terms</li>
            </ul>
            <p>
              We do <strong>not</strong> sell personal data. We do not use the Service to make
              solely automated decisions that produce legal or similarly significant effects about
              you. Ad personalisation is controlled by your cookie choices and third-party opt-out
              tools described above.
            </p>
          </LegalSection>

          <LegalSection id="sharing" index={10} icon={Globe} title="Sharing & processors">
            <p>
              We share personal data only as described below. We require service providers that
              process data on our behalf to protect it appropriately.
            </p>
            <ul>
              <li>
                <strong>Hosting &amp; security</strong> — infrastructure providers such as{" "}
                <a
                  href={CLOUDFLARE_PRIVACY_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Cloudflare
                </a>{" "}
                process technical data to deliver and protect the site.
              </li>
              <li>
                <strong>Advertising</strong> — Google AdSense (Google LLC / Google Ireland
                Limited) when you consent to advertising cookies.
              </li>
              <li>
                <strong>Analytics</strong> — future analytics providers, only with consent where
                required.
              </li>
              <li>
                <strong>Legal &amp; safety</strong> — regulators, courts, or law enforcement when
                required by law or to protect rights, safety, and security.
              </li>
              <li>
                <strong>Business transfers</strong> — in connection with a merger, acquisition, or
                sale of assets, subject to continued protection of your data.
              </li>
            </ul>
            <p>
              We do not share personal data with third parties for their independent marketing
              purposes.
            </p>
          </LegalSection>

          <LegalSection id="transfers" index={11} icon={Globe} title="International transfers">
            <p>
              FactorBeam is operated from {CREATOR.location}. Our service providers may process
              personal data in India, the United States, the European Union, the United Kingdom,
              and other countries where they maintain facilities.
            </p>
            <p>
              Where required by law, we rely on appropriate safeguards for cross-border transfers,
              such as the European Commission&apos;s Standard Contractual Clauses, the UK
              International Data Transfer Agreement or Addendum, or other mechanisms recognised
              under applicable data-protection law. You may contact us for more information about
              safeguards relevant to your region.
            </p>
          </LegalSection>

          <LegalSection id="retention" index={12} icon={Lock} title="Data retention">
            <p>We retain personal data only as long as necessary for the purposes described in this policy:</p>
            <ul>
              <li>
                <strong>Server logs</strong> — typically for a limited period defined by our
                hosting provider, then deleted or aggregated.
              </li>
              <li>
                <strong>Browser-stored data</strong> — until you clear site data or change
                preferences locally.
              </li>
              <li>
                <strong>Consent records</strong> — for as long as needed to demonstrate and
                respect your choices, and as required by law.
              </li>
              <li>
                <strong>Analytics</strong> — when enabled, generally up to 26 months or the
                retention period offered by the analytics provider, whichever is shorter, unless a
                longer period is required by law.
              </li>
              <li>
                <strong>Email correspondence</strong> — as long as needed to handle your
                request and for reasonable record-keeping, then deleted or archived according to
                our internal practices.
              </li>
            </ul>
            <p>
              We may retain anonymised or aggregated data that no longer identifies you.
            </p>
          </LegalSection>

          <LegalSection id="security" index={13} icon={Lock} title="Security">
            <p>
              We implement reasonable technical and organisational measures to protect personal
              data, including HTTPS encryption in transit and reputable hosting infrastructure.
              No method of transmission or storage is completely secure; we cannot guarantee
              absolute security.
            </p>
            <p>
              If you believe your interaction with us is no longer secure, please contact us
              promptly at{" "}
              <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>.
            </p>
          </LegalSection>

          <LegalSection id="your-rights" index={14} icon={UserCheck} title="Your rights">
            <p>
              Depending on where you live, you may have rights regarding your personal data,
              including:
            </p>
            <ul>
              <li>Access — request a copy of personal data we hold about you</li>
              <li>Rectification — request correction of inaccurate data</li>
              <li>Erasure — request deletion in certain circumstances</li>
              <li>Restriction — request limited processing in certain circumstances</li>
              <li>Portability — receive data you provided in a structured, machine-readable format</li>
              <li>Objection — object to processing based on legitimate interests or for direct marketing</li>
              <li>Withdraw consent — at any time, without affecting prior lawful processing</li>
              <li>Complaint — lodge a complaint with a supervisory authority</li>
            </ul>
            <p>
              To exercise these rights, email{" "}
              <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>. We may need to verify your
              request. We will respond within the timeframe required by applicable law (for
              example, one month under GDPR, or 45 days under CCPA/CPRA where applicable).
            </p>
            <p>
              You can also manage cookies through{" "}
              <CookiePreferencesLink className="font-medium text-purple hover:underline" />{" "}
              and through the Google and industry opt-out links in the{" "}
              <a href="#advertising" className="text-purple hover:underline">
                Google AdSense
              </a>{" "}
              section above.
            </p>
          </LegalSection>

          <LegalSection id="regional" index={15} icon={Scale} title="Regional notices">
            <p>
              <strong>European Economic Area &amp; United Kingdom:</strong> FactorBeam processes
              personal data as described in this policy. You have the rights listed above under
              the GDPR and UK GDPR. You may contact your local data-protection authority; UK
              residents may contact the Information Commissioner&apos;s Office (ICO) at{" "}
              <a
                href="https://ico.org.uk"
                target="_blank"
                rel="noopener noreferrer"
              >
                ico.org.uk
              </a>
              .
            </p>
            <p>
              <strong>United States — California (CCPA/CPRA):</strong> California residents have
              the right to know what personal information we collect, use, and disclose; to delete
              certain personal information; to correct inaccurate personal information; and to opt
              out of the &quot;sale&quot; or &quot;sharing&quot; of personal information for
              cross-context behavioural advertising. FactorBeam does not sell personal information.
              Advertising through Google AdSense may involve &quot;sharing&quot; as defined under
              California law when personalised ads are enabled. You may opt out by rejecting
              advertising cookies in our banner, using Google Ads Settings, or contacting us. We do
              not discriminate against you for exercising privacy rights. Authorised agents may
              submit requests on your behalf where permitted by law.
            </p>
            <p>
              <strong>Other U.S. states:</strong> Residents of Colorado, Connecticut, Virginia,
              Utah, Texas, and other states with comprehensive privacy laws may have similar
              rights (access, deletion, correction, opt-out of targeted advertising). Contact us to
              exercise applicable rights.
            </p>
            <p>
              <strong>Brazil (LGPD):</strong> Brazilian data subjects may confirm processing,
              access, correct, anonymise, block, or delete unnecessary data, and lodge complaints
              with the Autoridade Nacional de Proteção de Dados (ANPD).
            </p>
            <p>
              <strong>Canada:</strong> Canadian residents may have rights under federal and
              provincial privacy legislation, including access and correction. Contact us to
              exercise applicable rights.
            </p>
            <p>
              <strong>Australia:</strong> Australian residents may access and correct personal
              information and complain to the Office of the Australian Information Commissioner
              (OAIC) at{" "}
              <a href="https://www.oaic.gov.au" target="_blank" rel="noopener noreferrer">
                oaic.gov.au
              </a>
              .
            </p>
            <p>
              <strong>India (DPDPA):</strong> As the Service is operated from India, we process
              personal data in accordance with the Digital Personal Data Protection Act, 2023, and
              applicable rules. Data principals may contact us to exercise rights provided under
              Indian law, including access, correction, erasure, and grievance redressal.
            </p>
            <p>
              <strong>Do Not Track / Global Privacy Control:</strong> Where recognised by
              applicable law, we honour opt-out preference signals for targeted advertising to the
              extent technically feasible. Cookie choices and third-party opt-out tools remain the
              primary way to control ads on this site.
            </p>
          </LegalSection>

          <LegalSection id="third-party" index={16} icon={AlertTriangle} title="Third-party links">
            <p>
              The Service may link to external websites, tools, and educational resources. Those
              third parties process data under their own privacy policies. We are not responsible
              for their practices. Review their policies before providing personal data.
            </p>
          </LegalSection>

          <LegalSection id="changes" index={17} icon={FileText} title="Changes to this policy">
            <p>
              We may update this Privacy Policy to reflect changes in the Service, our data
              practices, legal requirements, or advertising programme standards (including Google
              AdSense policies). Material changes will be posted on this page with an updated
              &quot;Last updated&quot; date. Where required by law, we will provide additional
              notice or seek consent.
            </p>
            <p>
              Continued use of the Service after changes take effect constitutes acknowledgment of
              the updated policy, except where applicable law requires express consent.
            </p>
          </LegalSection>

          <div className="rounded-2xl border border-border bg-muted/30 px-6 py-5 sm:px-8">
            <LegalProse>
              <p>
                Questions about privacy or advertising?{" "}
                <Link to="/contact" className="text-purple hover:underline">
                  Contact us
                </Link>{" "}
                or email{" "}
                <a href={`mailto:${CONTACT_EMAIL}`} className="text-purple hover:underline">
                  {CONTACT_EMAIL}
                </a>
                . Manage cookies anytime via{" "}
                <CookiePreferencesLink className="font-medium text-purple hover:underline" />
                . For site rules, see our{" "}
                <Link to="/terms-of-service" className="text-purple hover:underline">
                  Terms of Service
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
