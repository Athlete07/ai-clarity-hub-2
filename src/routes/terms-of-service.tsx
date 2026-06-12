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
import { brandOgMeta } from "@/lib/brand";
import { CREATOR } from "@/lib/creator";
import { AlertTriangle, Ban, FileText, Globe, Lock, Scale, Shield } from "lucide-react";

const CONTACT_EMAIL = CREATOR.socials.email;
const GOOGLE_ADS_PRIVACY_URL =
  "https://policies.google.com/technologies/ads";
const GOOGLE_DATA_PARTNERS_URL =
  "https://policies.google.com/technologies/partner-sites";
const GOOGLE_AD_SETTINGS_URL = "https://adssettings.google.com";
const ABOUT_ADS_OPT_OUT_URL = "https://www.aboutads.info/choices";
const GOOGLE_ADSENSE_POLICIES_URL =
  "https://support.google.com/adsense/answer/9335564";

export const Route = createFileRoute("/terms-of-service")({
  head: () => ({
    meta: [
      { title: "Terms of Service — FactorBeam" },
      {
        name: "description",
        content:
          "FactorBeam Terms of Service — global rules for using our free AI Literacy site, including advertising, intellectual property, and your legal rights.",
      },
      { property: "og:title", content: "Terms of Service — FactorBeam" },
      {
        property: "og:description",
        content:
          "Global terms for FactorBeam — eligibility, content licence, Google AdSense standards, and dispute resolution.",
      },
      { property: "og:url", content: "/terms-of-service" },
      { property: "og:type", content: "website" },
      ...brandOgMeta(),
    ],
    links: [{ rel: "canonical", href: "/terms-of-service" }],
  }),
  component: TermsOfService,
});

const TOC = [
  { id: "overview", title: "Overview" },
  { id: "operator", title: "Operator & contact" },
  { id: "eligibility", title: "Eligibility & global access" },
  { id: "accounts", title: "Accounts" },
  { id: "permitted-use", title: "Permitted use" },
  { id: "content", title: "Intellectual property" },
  { id: "dmca", title: "Copyright & DMCA" },
  { id: "conduct", title: "Prohibited conduct" },
  { id: "advertising", title: "Advertising & AdSense" },
  { id: "third-party", title: "Third-party services" },
  { id: "educational", title: "Educational disclaimer" },
  { id: "disclaimers", title: "Disclaimers" },
  { id: "liability", title: "Limitation of liability" },
  { id: "indemnification", title: "Indemnification" },
  { id: "consumer-rights", title: "Consumer rights" },
  { id: "governing-law", title: "Governing law & disputes" },
  { id: "termination", title: "Termination" },
  { id: "general", title: "General provisions" },
  { id: "changes", title: "Changes" },
] as const;

const HIGHLIGHTS = [
  { label: "Global access", detail: "Free to use worldwide, subject to local law." },
  { label: "Your rights", detail: "Mandatory consumer protections are preserved." },
  { label: "AdSense compliant", detail: "Ads via Google; no invalid click activity." },
  { label: "Privacy linked", detail: "Cookie & ad disclosures in Privacy Policy." },
];

function TermsOfService() {
  return (
    <>
      <Nav />
      <main className="overflow-x-hidden">
        <LegalHero
          title="Terms of Service"
          description="Global terms for using FactorBeam — our website, AI Literacy library, quizzes, and related services. Includes standards required for Google AdSense and respect for mandatory rights in your jurisdiction."
          lastUpdated="June 2026"
        />

        <LegalHighlightStrip items={HIGHLIGHTS} />

        <LegalDocumentLayout
          toc={[...TOC]}
          related={{
            label: "Privacy Policy",
            to: "/privacy-policy",
            description:
              "Required AdSense disclosures on cookies, Google advertising, and your data rights.",
          }}
        >
          <LegalSection id="overview" index={1} icon={FileText} title="Overview">
            <p>
              FactorBeam (&quot;FactorBeam&quot;, &quot;we&quot;, &quot;us&quot;, or
              &quot;our&quot;) is a free educational website and open AI Literacy project
              operated by {CREATOR.name}. These Terms of Service (&quot;Terms&quot;) form a
              legally binding agreement between you (&quot;you&quot; or &quot;user&quot;) and
              FactorBeam governing your access to and use of our website, AI Literacy tracks,
              quizzes, simulations, and all related content, software, and features
              (collectively, the &quot;Service&quot;).
            </p>
            <p>
              The Service is offered to users globally. By accessing or using the Service, you
              confirm that you have read, understood, and agree to these Terms and to our{" "}
              <Link to="/privacy-policy" className="text-purple hover:underline">
                Privacy Policy
              </Link>
              , which explains how we collect and use personal data, including in connection
              with cookies and advertising. If you do not agree, you must not use the Service.
            </p>
          </LegalSection>

          <LegalSection id="operator" index={2} icon={Globe} title="Operator & contact">
            <p>
              <strong>Operator:</strong> {CREATOR.name}, trading as FactorBeam, based in{" "}
              {CREATOR.location}.
            </p>
            <p>
              <strong>Contact:</strong>{" "}
              <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>
            </p>
            <p>
              For copyright notices, see the{" "}
              <a href="#dmca" className="text-purple hover:underline">
                Copyright &amp; DMCA
              </a>{" "}
              section below. For data-protection requests, see our Privacy Policy.
            </p>
          </LegalSection>

          <LegalSection id="eligibility" index={3} icon={Lock} title="Eligibility & global access">
            <p>
              You may use the Service only if you can form a binding contract with FactorBeam
              and are not barred from receiving services under applicable law.
            </p>
            <ul>
              <li>
                <strong>Minimum age:</strong> You must be at least 13 years old. If you are
                under the age of digital consent in your country (for example, 16 in parts of
                the European Economic Area or United Kingdom), you may use the Service only with
                verifiable consent from a parent or legal guardian.
              </li>
              <li>
                <strong>Global availability:</strong> We do not guarantee that the Service is
                appropriate or available in every country. You are responsible for compliance
                with local laws where you access the Service.
              </li>
              <li>
                <strong>Export & sanctions:</strong> You may not use the Service if you are
                located in, or ordinarily resident in, a country or region subject to
                comprehensive sanctions, or if you are on a restricted-party list, where such
                use would violate applicable law.
              </li>
            </ul>
            <p>
              By using the Service, you represent and warrant that you meet these requirements.
            </p>
          </LegalSection>

          <LegalSection id="accounts" index={4} icon={Lock} title="Accounts">
            <p>
              FactorBeam does not currently require user accounts. Reading progress and
              preferences may be stored locally in your browser. If accounts are introduced in
              the future, additional terms may apply and you will be responsible for safeguarding
              your credentials and all activity under your account. Notify us immediately at{" "}
              <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a> of any unauthorised use.
            </p>
          </LegalSection>

          <LegalSection id="permitted-use" index={5} icon={FileText} title="Permitted use">
            <p>
              Subject to these Terms, we grant you a limited, non-exclusive, non-transferable,
              revocable licence to access and use the Service for personal, non-commercial
              educational purposes.
            </p>
            <p>
              <strong>You may:</strong>
            </p>
            <ul>
              <li>Read, bookmark, and share links to FactorBeam pages</li>
              <li>Quote short excerpts with clear attribution to FactorBeam</li>
              <li>Print or save reasonable copies for personal study</li>
            </ul>
            <p>
              Any use beyond this scope requires our prior written permission.
            </p>
          </LegalSection>

          <LegalSection id="content" index={6} icon={Shield} title="Intellectual property">
            <p>
              The Service — including AI Literacy text, diagrams, quizzes, simulations, trade
              names, logos, and site design — is owned by or licensed to FactorBeam and is
              protected by copyright, trademark, and other intellectual-property laws worldwide.
            </p>
            <p>
              <strong>You may not:</strong>
            </p>
            <ul>
              <li>
                Republish, redistribute, sublicense, or sell Service content in whole or in
                substantial part
              </li>
              <li>Remove copyright notices, attribution, or proprietary legends</li>
              <li>
                Use Service content to train, fine-tune, or evaluate machine-learning or AI
                models without written permission
              </li>
              <li>
                Create derivative commercial products (courses, books, paid newsletters, etc.)
                based on the AI Literacy without a licence
              </li>
              <li>
                Scrape, crawl, mirror, frame, or systematically download the Service except
                as allowed by standard search-engine indexing
              </li>
              <li>
                Reverse engineer, decompile, or attempt to extract source code except where
                prohibited by applicable law
              </li>
            </ul>
            <p>
              Third-party names, logos, and examples in educational content belong to their
              respective owners and are used for illustrative purposes.
            </p>
          </LegalSection>

          <LegalSection id="dmca" index={7} icon={Shield} title="Copyright & DMCA">
            <p>
              FactorBeam respects intellectual-property rights worldwide. If you believe
              material on the Service infringes your copyright, send a written notice to{" "}
              <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a> with the subject line{" "}
              <strong>DMCA Notice</strong> (or equivalent notice under your jurisdiction)
              including:
            </p>
            <ul>
              <li>
                Your physical or electronic signature, or that of a person authorised to act on
                your behalf
              </li>
              <li>Identification of the copyrighted work claimed to have been infringed</li>
              <li>
                Identification of the material and its location on the Service (URL or
                specific page)
              </li>
              <li>Your contact details (address, telephone, and email)</li>
              <li>
                A statement of good-faith belief that the use is not authorised by the
                copyright owner, its agent, or the law
              </li>
              <li>
                A statement, under penalty of perjury where applicable, that the information
                is accurate and that you are authorised to act for the copyright owner
              </li>
            </ul>
            <p>
              We will review notices promptly and may remove or disable access to allegedly
              infringing material. Repeat infringers may have access terminated. If you believe
              content was removed in error, you may submit a counter-notice with the details
              required under applicable law (including the U.S. Digital Millennium Copyright
              Act, where relevant).
            </p>
          </LegalSection>

          <LegalSection id="conduct" index={8} icon={Ban} title="Prohibited conduct">
            <p>You agree not to:</p>
            <ul>
              <li>Use the Service for any unlawful, fraudulent, or harmful purpose</li>
              <li>
                Attempt unauthorised access to systems, accounts, or data connected to the
                Service
              </li>
              <li>
                Interfere with or disrupt the Service (including DDoS attacks, malware, or
                automated abuse)
              </li>
              <li>Harass, abuse, defame, or harm others through the Service</li>
              <li>Circumvent security, access controls, or geographic restrictions</li>
              <li>
                Misrepresent your affiliation with FactorBeam or impersonate another person or
                entity
              </li>
              <li>
                Collect personal data from other users without lawful basis and notice
              </li>
            </ul>
            <p>
              We may suspend or block access, with or without notice, for conduct that violates
              these Terms or applicable law.
            </p>
          </LegalSection>

          <LegalSection id="advertising" index={9} icon={AlertTriangle} title="Advertising & Google AdSense">
            <p>
              FactorBeam may display third-party advertisements, including through{" "}
              <strong>Google AdSense</strong> operated by Google LLC (and Google Ireland
              Limited for users in the European Economic Area and United Kingdom). Advertising
              helps keep the Service free. Ads are served only where permitted and, where
              required by law, after you have given consent through our cookie banner.
            </p>
            <p>
              <strong>Google AdSense &amp; partner advertising — key disclosures:</strong>
            </p>
            <ul>
              <li>
                Third-party vendors, including Google, use cookies to serve ads based on a
                user&apos;s prior visits to this website or other websites.
              </li>
              <li>
                Google&apos;s use of advertising cookies enables it and its partners to serve
                ads to users based on their visit to our site and/or other sites on the
                Internet.
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
                . Users may also opt out of many third-party vendors&apos; use of cookies for
                personalised advertising at{" "}
                <a
                  href={ABOUT_ADS_OPT_OUT_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  aboutads.info
                </a>
                .
              </li>
            </ul>
            <p>
              Further detail on cookies, partners, and your choices is in our{" "}
              <Link to="/privacy-policy" className="text-purple hover:underline">
                Privacy Policy
              </Link>
              , including links to{" "}
              <a
                href={GOOGLE_DATA_PARTNERS_URL}
                target="_blank"
                rel="noopener noreferrer"
              >
                How Google uses data when you use our partners&apos; sites or apps
              </a>{" "}
              and{" "}
              <a href={GOOGLE_ADS_PRIVACY_URL} target="_blank" rel="noopener noreferrer">
                How Google uses information from sites that use its services
              </a>
              .
            </p>
            <p>
              <strong>Publisher &amp; user obligations (AdSense programme standards):</strong>
            </p>
            <ul>
              <li>
                FactorBeam complies with applicable{" "}
                <a
                  href={GOOGLE_ADSENSE_POLICIES_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Google Publisher Policies
                </a>{" "}
                and related advertising policies.
              </li>
              <li>
                <strong>You must not</strong> click ads, encourage others to click ads, use
                incentivised traffic, or generate artificial or invalid impressions or clicks
                (&quot;invalid traffic&quot;).
              </li>
              <li>
                <strong>You must not</strong> interfere with ad delivery, obscure ads in a
                misleading way, or place content that encourages accidental clicks.
              </li>
              <li>
                Ads and linked sites are provided by third parties. FactorBeam does not
                endorse advertised products or services and is not responsible for advertiser
                content, offers, or practices.
              </li>
            </ul>
            <p>
              We may change, limit, or discontinue advertising at any time. Where consent is
              withdrawn for advertising cookies, personalised ads will not be served in
              accordance with your choices and applicable law.
            </p>
          </LegalSection>

          <LegalSection id="third-party" index={10} icon={Globe} title="Third-party services">
            <p>
              The Service may link to or integrate third-party websites, tools, and services
              (including Google, hosting providers, and analytics). Those services are governed
              by their own terms and privacy policies. FactorBeam is not responsible for
              third-party content, availability, or practices.
            </p>
            <p>
              Your use of third-party services is at your own risk. We encourage you to review
              their policies before providing personal data.
            </p>
          </LegalSection>

          <LegalSection id="educational" index={11} icon={FileText} title="Educational disclaimer">
            <p>
              FactorBeam provides general educational information about AI, product
              management, marketing, and related topics. It does <strong>not</strong> constitute
              legal, financial, tax, medical, or other professional advice. You should consult
              qualified professionals before making decisions that may affect your business,
              compliance obligations, or personal circumstances.
            </p>
            <p>
              AI Literacy content reflects our understanding at the time of publication. The
              field changes rapidly; we do not guarantee completeness, accuracy, or fitness for
              a particular purpose. Examples are illustrative and may not reflect current
              products, regulations, or market conditions in your jurisdiction.
            </p>
          </LegalSection>

          <LegalSection id="disclaimers" index={12} icon={AlertTriangle} title="Disclaimers">
            <p>
              To the fullest extent permitted by applicable law, the Service is provided on an
              &quot;as is&quot; and &quot;as available&quot; basis without warranties of any
              kind, whether express, implied, or statutory, including implied warranties of
              merchantability, fitness for a particular purpose, title, and non-infringement.
            </p>
            <p>
              We do not warrant that the Service will be uninterrupted, secure, error-free, or
              free of harmful components, or that defects will be corrected.
            </p>
            <p>
              Some jurisdictions do not allow exclusion of certain warranties; in those cases,
              the above exclusions apply only to the extent permitted by law.
            </p>
          </LegalSection>

          <LegalSection id="liability" index={13} icon={AlertTriangle} title="Limitation of liability">
            <p>
              To the fullest extent permitted by applicable law, FactorBeam and {CREATOR.name}{" "}
              shall not be liable for any indirect, incidental, special, consequential,
              exemplary, or punitive damages, or for any loss of profits, revenue, data,
              goodwill, or business opportunity, arising from or related to your use of the
              Service, even if advised of the possibility of such damages.
            </p>
            <p>
              Our total aggregate liability for any claim arising out of or relating to the
              Service or these Terms shall not exceed the greater of (a) the amount you paid to
              use the Service in the twelve months before the claim (which, for the free
              Service, is zero) or (b) one hundred U.S. dollars (USD $100), except where
              applicable law requires otherwise.
            </p>
            <p>
              Nothing in these Terms excludes or limits liability that cannot be excluded or
              limited under mandatory law, including liability for death or personal injury
              caused by negligence, fraud, or fraudulent misrepresentation.
            </p>
          </LegalSection>

          <LegalSection id="indemnification" index={14} icon={Lock} title="Indemnification">
            <p>
              To the extent permitted by applicable law, you agree to indemnify, defend, and
              hold harmless FactorBeam and {CREATOR.name} from any claims, damages, losses,
              liabilities, costs, and expenses (including reasonable legal fees) arising out of
              or related to: (a) your use of the Service; (b) your violation of these Terms;
              (c) your violation of any law or third-party right; or (d) any content or
              information you submit to us.
            </p>
            <p>
              This indemnity does not apply to the extent a claim arises from our intentional
              misconduct or negligence. Some jurisdictions do not permit certain indemnities;
              in those cases, this section applies only to the extent allowed by law.
            </p>
          </LegalSection>

          <LegalSection id="consumer-rights" index={15} icon={Scale} title="Consumer rights">
            <p>
              If you are a consumer (an individual using the Service for purposes outside your
              trade, business, or profession), you may have mandatory rights under the laws of
              your country of residence that cannot be waived by contract.
            </p>
            <p>
              <strong>Examples include, where applicable:</strong>
            </p>
            <ul>
              <li>
                European Economic Area and United Kingdom — consumer protection and data
                protection laws (including the UK GDPR / EU GDPR and applicable consumer
                contract regulations)
              </li>
              <li>United States — state consumer protection laws and, where applicable, the California Consumer Privacy Act (CCPA/CPRA) as described in our Privacy Policy</li>
              <li>
                Australia — the Australian Consumer Law and privacy principles
              </li>
              <li>
                Brazil — the Lei Geral de Proteção de Dados (LGPD) and the Consumer Defence
                Code
              </li>
              <li>Canada — provincial consumer protection and privacy legislation</li>
              <li>India — the Digital Personal Data Protection Act and consumer laws, as applicable</li>
            </ul>
            <p>
              Nothing in these Terms limits those non-excludable rights. If any provision of
              these Terms is held invalid or unenforceable for consumers in your jurisdiction,
              it will be modified or severed only to the minimum extent necessary.
            </p>
            <p>
              Data-subject rights (access, deletion, objection, etc.) are described in our{" "}
              <Link to="/privacy-policy" className="text-purple hover:underline">
                Privacy Policy
              </Link>
              .
            </p>
          </LegalSection>

          <LegalSection id="governing-law" index={16} icon={Globe} title="Governing law & disputes">
            <p>
              These Terms are governed by the laws of <strong>England and Wales</strong>,
              without regard to conflict-of-law rules, except where mandatory consumer protection
              law in your country of residence requires otherwise.
            </p>
            <p>
              <strong>Dispute resolution:</strong>
            </p>
            <ul>
              <li>
                We encourage you to contact us first at{" "}
                <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a> so we can try to
                resolve concerns informally.
              </li>
              <li>
                If you are a consumer in the European Union, you may also use the European
                Commission&apos;s Online Dispute Resolution platform at{" "}
                <a
                  href="https://ec.europa.eu/consumers/odr"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  ec.europa.eu/consumers/odr
                </a>
                . We are not obliged to participate in alternative dispute resolution
                proceedings before a consumer arbitration board, but will consider doing so where
                appropriate.
              </li>
              <li>
                Subject to mandatory consumer rights, the courts of England and Wales shall have
                exclusive jurisdiction over disputes that cannot be resolved informally, except
                that consumers in the EEA, UK, or other jurisdictions with mandatory forum
                rules may bring proceedings in the courts of their country of residence where
                those rules apply.
              </li>
            </ul>
          </LegalSection>

          <LegalSection id="termination" index={17} icon={FileText} title="Termination">
            <p>
              You may stop using the Service at any time. We may suspend or terminate your
              access, with or without notice, if we reasonably believe you have violated these
              Terms, applicable law, or third-party advertising policies, or if continued
              provision of the Service creates risk for us or others.
            </p>
            <p>
              Upon termination, your licence to use the Service ends immediately. Provisions that
              by their nature should survive (including intellectual property, disclaimers,
              limitation of liability, indemnity, and governing law) will continue to apply.
            </p>
          </LegalSection>

          <LegalSection id="general" index={18} icon={Scale} title="General provisions">
            <ul>
              <li>
                <strong>Entire agreement:</strong> These Terms, together with the Privacy
                Policy, constitute the entire agreement between you and FactorBeam regarding
                the Service.
              </li>
              <li>
                <strong>Severability:</strong> If any provision is held invalid, the remaining
                provisions remain in effect.
              </li>
              <li>
                <strong>No waiver:</strong> Failure to enforce a provision is not a waiver of
                our right to enforce it later.
              </li>
              <li>
                <strong>Assignment:</strong> You may not assign these Terms without our consent.
                We may assign our rights and obligations in connection with a merger,
                acquisition, or sale of assets.
              </li>
              <li>
                <strong>Force majeure:</strong> We are not liable for delays or failures caused
                by events beyond our reasonable control (including outages, acts of government,
                or natural disasters).
              </li>
              <li>
                <strong>Language:</strong> These Terms are written in English. Any translation is
                provided for convenience only; the English version controls to the extent
                permitted by law.
              </li>
            </ul>
          </LegalSection>

          <LegalSection id="changes" index={19} icon={FileText} title="Changes to these Terms">
            <p>
              We may update these Terms to reflect changes in the Service, legal requirements,
              or advertising programme standards (including Google AdSense policies). Material
              changes will be posted on this page with an updated &quot;Last updated&quot; date.
              Where required by law, we will provide additional notice.
            </p>
            <p>
              Continued use of the Service after changes take effect constitutes acceptance of
              the revised Terms, except where applicable law requires express consent. If you
              do not agree, you must stop using the Service.
            </p>
          </LegalSection>

          <div className="rounded-2xl border border-border bg-muted/30 px-6 py-5 sm:px-8">
            <LegalProse>
              <p>
                Questions about these Terms?{" "}
                <Link to="/contact" className="text-purple hover:underline">
                  Contact us
                </Link>{" "}
                or email{" "}
                <a href={`mailto:${CONTACT_EMAIL}`} className="text-purple hover:underline">
                  {CONTACT_EMAIL}
                </a>
                . For privacy and advertising disclosures, see our{" "}
                <Link to="/privacy-policy" className="text-purple hover:underline">
                  Privacy Policy
                </Link>
                .
              </p>
            </LegalProse>
          </div>
        </LegalDocumentLayout>

        <LegalClosingCta
          title="Back to AI Literacy."
          subtitle="Free. No signup. Start reading in the next 60 seconds."
          secondaryLabel="Read Privacy Policy"
          secondaryTo="/privacy-policy"
        />
      </main>
      <Footer />
    </>
  );
}
