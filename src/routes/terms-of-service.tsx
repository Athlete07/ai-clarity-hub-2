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
import { CREATOR } from "@/lib/creator";
import { AlertTriangle, FileText, Globe, Lock, Shield } from "lucide-react";

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
        content: "Rules for using FactorBeam's website, Executive KB, and content.",
      },
      { property: "og:url", content: "/terms-of-service" },
      { property: "og:type", content: "website" },
    ],
    links: [{ rel: "canonical", href: "/terms-of-service" }],
  }),
  component: TermsOfService,
});

const TOC = [
  { id: "overview", title: "Overview" },
  { id: "eligibility", title: "Eligibility" },
  { id: "accounts", title: "Accounts & registration" },
  { id: "content", title: "Content & intellectual property" },
  { id: "dmca", title: "Copyright & DMCA" },
  { id: "conduct", title: "Prohibited conduct" },
  { id: "third-party", title: "Third-party services" },
  { id: "disclaimers", title: "Disclaimers" },
  { id: "liability", title: "Limitation of liability" },
  { id: "indemnification", title: "Indemnification" },
  { id: "termination", title: "Termination" },
  { id: "governing-law", title: "Governing law" },
  { id: "changes", title: "Changes to these terms" },
] as const;

const HIGHLIGHTS = [
  { label: "Free to use", detail: "No payment required for the Executive KB." },
  { label: "Personal study", detail: "Read, bookmark, and quote with attribution." },
  { label: "No scraping", detail: "Systematic download or mirroring is prohibited." },
  { label: "England & Wales", detail: "Governing law for disputes and interpretation." },
];

function TermsOfService() {
  return (
    <>
      <Nav />
      <main className="overflow-x-hidden">
        <LegalHero
          title="Terms of Service"
          description="The rules for using FactorBeam — our website, Executive KB, quizzes, and all related content."
          lastUpdated="June 2026"
        />

        <LegalHighlightStrip items={HIGHLIGHTS} />

        <LegalDocumentLayout
          toc={[...TOC]}
          related={{
            label: "Privacy Policy",
            to: "/privacy-policy",
            description: "How we handle cookies, analytics, advertising, and your data rights.",
          }}
        >
          <LegalSection id="overview" index={1} icon={FileText} title="Overview">
            <p>
              FactorBeam is a free educational website and open Executive KB project,
              operated by {CREATOR.name}. These Terms of Service (&quot;Terms&quot;) govern
              your access to and use of FactorBeam — the website, Executive KB, quizzes, and
              all related content (collectively, the &quot;Service&quot;). By using the
              Service, you agree to these Terms. If you do not agree, please do not use the
              Service.
            </p>
          </LegalSection>

          <LegalSection id="eligibility" index={2} icon={Lock} title="Eligibility">
            <p>
              You must be at least 13 years old to use FactorBeam. If you are under the age
              of majority in your jurisdiction, you must have permission from a parent or
              guardian. By using the Service, you represent that you meet these requirements.
            </p>
          </LegalSection>

          <LegalSection id="accounts" index={3} icon={Lock} title="Accounts & registration">
            <p>
              FactorBeam does not currently require user accounts. If accounts are introduced
              in the future, you will be responsible for safeguarding your credentials and
              for all activity under your account. Notify{" "}
              <a href="mailto:hello@factorbeam.dev">hello@factorbeam.dev</a> immediately of
              any unauthorised use.
            </p>
          </LegalSection>

          <LegalSection id="content" index={4} icon={FileText} title="Content & intellectual property">
            <p>
              All Executive KB content, text, diagrams, quizzes, and code examples on
              FactorBeam are original work published on the site unless otherwise noted, and
              are protected by copyright and other intellectual-property laws.
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
              <li>
                Republish, redistribute, or sell FactorBeam content in whole or in
                substantial part
              </li>
              <li>Remove copyright notices or author attribution</li>
              <li>
                Use FactorBeam content to train machine-learning models without written
                permission
              </li>
              <li>
                Create derivative works (e.g., courses, books, paid newsletters) based on the
                Executive KB without a licence
              </li>
              <li>Scrape, mirror, or systematically download the site</li>
            </ul>
          </LegalSection>

          <LegalSection id="dmca" index={5} icon={Shield} title="Copyright & DMCA takedown">
            <p>
              FactorBeam respects the intellectual-property rights of others. If you believe
              that material on the Service infringes your copyright, please notify{" "}
              {CREATOR.name} in writing with the following information:
            </p>
            <ul>
              <li>
                A physical or electronic signature of the copyright owner or a person
                authorised to act on their behalf
              </li>
              <li>Identification of the copyrighted work claimed to have been infringed</li>
              <li>
                Identification of the infringing material and its location on the Service (URL
                or specific page)
              </li>
              <li>
                Your contact information, including address, telephone number, and email
                address
              </li>
              <li>
                A statement that you have a good-faith belief the use is not authorised by
                the copyright owner, its agent, or the law
              </li>
              <li>
                A statement, under penalty of perjury, that the information in your notice is
                accurate and that you are the copyright owner or authorised to act on their
                behalf
              </li>
            </ul>
            <p>
              Send takedown notices to:{" "}
              <a href="mailto:dmca@factorbeam.com">dmca@factorbeam.com</a>
            </p>
            <p>
              Notices will be reviewed promptly and infringing material will be removed or
              disabled where appropriate. Repeat infringers may have access terminated.
            </p>
            <p>
              If you believe your content was removed in error, you may submit a
              counter-notice to the same email address with the required details under
              applicable law.
            </p>
          </LegalSection>

          <LegalSection id="conduct" index={6} icon={AlertTriangle} title="Prohibited conduct">
            <p>You agree not to:</p>
            <ul>
              <li>Use the Service for any unlawful purpose</li>
              <li>Attempt to gain unauthorised access to the site&apos;s systems or data</li>
              <li>
                Interfere with the proper working of the Service (e.g., DDoS, scraping bots)
              </li>
              <li>Upload or transmit viruses, malware, or harmful code</li>
              <li>Harass, abuse, or harm another person through the Service</li>
              <li>Circumvent any security or access controls</li>
            </ul>
            <p>Access may be suspended or blocked for violations.</p>
          </LegalSection>

          <LegalSection id="third-party" index={7} icon={Globe} title="Third-party services">
            <p>
              FactorBeam uses third-party services including Google AdSense for advertising
              and analytics providers for usage statistics. These services are governed by
              their own terms and privacy policies. FactorBeam is not responsible for the
              practices of third-party services.
            </p>
          </LegalSection>

          <LegalSection id="disclaimers" index={8} icon={AlertTriangle} title="Disclaimers">
            <p>
              The Service is provided &quot;as is&quot; and &quot;as available&quot; without
              warranties of any kind, either express or implied. No warranty is given that
              the Service will be uninterrupted, error-free, secure, or that any defects will
              be corrected.
            </p>
            <p>
              The Executive KB reflects the author&apos;s best understanding of AI and
              product-management concepts at the time of writing, but the field evolves
              rapidly. No guarantee is made that any strategy, technique, or example will
              produce specific results in your context.
            </p>
          </LegalSection>

          <LegalSection id="liability" index={9} icon={AlertTriangle} title="Limitation of liability">
            <p>
              To the fullest extent permitted by law, {CREATOR.name}, as operator of
              FactorBeam, shall not be liable for any indirect, incidental, special,
              consequential, or punitive damages arising out of or relating to your use of the
              Service, even if advised of the possibility of such damages. Total liability
              for any claim shall not exceed the amount paid to use the Service (which, for
              the free tier, is zero).
            </p>
          </LegalSection>

          <LegalSection id="indemnification" index={10} icon={Lock} title="Indemnification">
            <p>
              You agree to indemnify and hold harmless {CREATOR.name}, as operator of
              FactorBeam, from any claims, damages, losses, or expenses (including
              reasonable legal fees) arising out of your use of the Service, your violation
              of these Terms, or your infringement of any third-party rights.
            </p>
          </LegalSection>

          <LegalSection id="termination" index={11} icon={FileText} title="Termination">
            <p>
              Access to the Service may be suspended or terminated at any time, with or
              without notice, for any reason, including violation of these Terms. Upon
              termination, all licences granted to you under these Terms will cease
              immediately.
            </p>
          </LegalSection>

          <LegalSection id="governing-law" index={12} icon={Globe} title="Governing law">
            <p>
              These Terms shall be governed by and construed in accordance with the laws of
              England and Wales, without regard to conflict-of-law principles. Any dispute
              arising under these Terms shall be subject to the exclusive jurisdiction of the
              courts of England and Wales.
            </p>
          </LegalSection>

          <LegalSection id="changes" index={13} icon={FileText} title="Changes to these terms">
            <p>
              These Terms may be updated from time to time. Material changes will be posted
              on this page with an updated &quot;Last updated&quot; date. Continued use of
              the Service after changes constitutes acceptance of the revised Terms.
            </p>
          </LegalSection>

          <div className="rounded-2xl border border-border bg-muted/30 px-6 py-5 sm:px-8">
            <LegalProse>
              <p>
                Questions about these Terms?{" "}
                <Link to="/contact" className="text-purple hover:underline">
                  Contact us
                </Link>
                .
              </p>
            </LegalProse>
          </div>
        </LegalDocumentLayout>

        <LegalClosingCta
          title="Back to the Executive KB."
          subtitle="Free. No signup. Start reading in the next 60 seconds."
          secondaryLabel="Read Privacy Policy"
          secondaryTo="/privacy-policy"
        />
      </main>
      <Footer />
    </>
  );
}
