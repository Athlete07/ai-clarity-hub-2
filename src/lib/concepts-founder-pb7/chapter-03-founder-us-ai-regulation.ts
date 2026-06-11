import { buildChapter, buildSection, s, x, sectionWithDiagram } from "../concepts-pb4-helpers";

export const chapter03FounderUsAiRegulation = buildChapter({
  slug: "founder-us-ai-regulation",
  number: 3,
  shortTitle: "US Regulatory Landscape",
  title: "US Regulatory Landscape — What Is Coming and How Fast",
  readingMinutes: 26,
  summary:
    "The US regulatory environment is fragmented, fast-moving, and consequential — federal executive orders and NIST framework, FTC enforcement, sector regulators, state patchwork, emerging AI liability law, and how founders stay current without becoming compliance lawyers.",
  keyTakeaway:
    "US AI regulation is not one law — it is federal guidance, FTC enforcement, sector rules, and state legislation operating simultaneously. Founders who map sector and state exposure for each feature avoid the 'we'll comply when there's a federal law' trap that has already caught companies in FTC actions and state penalties.",
  pmCallout:
    "As a founder: there is no single US AI law coming to save you from complexity. Map federal + sector + state exposure per feature now — or discover it in an FTC inquiry, EEOC investigation, or Colorado compliance audit.",
  sections: [
    sectionWithDiagram({
      number: "3.1",
      title: "The federal AI landscape in 2025",
      subtitle: "Executive orders, NIST AI RMF, proposed legislation — the current state of play",
      take: "US federal AI policy combines executive orders mandating agency AI use standards, NIST's voluntary AI Risk Management Framework, OSTP guidance, and proposed legislation that may or may not pass. The operative reality: federal contractors and enterprise buyers increasingly expect NIST-aligned practices even without mandatory law.",
      why: "Founders who wait for comprehensive federal AI legislation will be regulated by enforcement actions, sector rules, and state laws in the meantime. The federal landscape sets expectations even when it does not set binding rules for all startups.",
      paragraphs: [
        [
          s("Executive orders established federal AI governance expectations. "),
          x(
            "Agencies must implement AI safety standards, publish AI use inventories, and require NIST-aligned practices for federal AI procurement.",
            "If you sell to government or federal contractors, these orders are effectively your compliance spec.",
          ),
          s(" B2G and B2B founders should read federal procurement AI requirements as market signals."),
        ],
        [
          s("NIST AI Risk Management Framework is voluntary but influential. "),
          x(
            "Four functions: Govern (policies, accountability), Map (context, risks), Measure (evals, testing), Manage (respond, monitor). Enterprise buyers and insurers increasingly reference NIST alignment.",
            "NIST RMF is the credible answer when EU AI Act does not apply but buyers still ask about your safety program.",
          ),
          s(" Structure your governance framework around NIST's four functions — it maps cleanly to startup operations."),
        ],
        [
          s("Proposed federal legislation remains uncertain — do not bet your compliance strategy on it. "),
          x(
            "Multiple AI bills have been introduced; none have passed as comprehensive horizontal law. Sector-specific and state regulation fills the gap.",
            "The US pattern: enforcement and sector rules lead; comprehensive legislation follows years later.",
          ),
          s(" Build compliance for what is enforceable today, not what might pass tomorrow."),
        ],
      ],
      examples: [
        {
          title: "Federal contractor — NIST alignment requirement",
          body: "A B2B AI startup selling to a federal agency contractor was required to demonstrate NIST AI RMF alignment in procurement. The founder mapped existing eval, logging, and oversight practices to NIST's four functions and produced a 12-page alignment document. No new product build — just articulation of existing practices. Deal closed.",
        },
        {
          title: "NIST RMF as enterprise sales tool",
          body: "A health AI startup structured its governance documentation around Govern-Map-Measure-Manage. Enterprise hospital buyers recognised the framework. Sales cycle shortened because the safety narrative was standardised, not bespoke per prospect.",
        },
        {
          title: "Waiting for federal law — costly delay",
          body: "A fintech founder deferred AI compliance investment saying 'there's no federal AI law yet.' FTC inquiry into deceptive AI claims arrived first. Settlement cost exceeded what proactive compliance would have cost by 5x. Federal legislation timeline was irrelevant to enforcement timeline.",
        },
      ],
    }, {
      kind: "diagram",
      id: "bl-ai-transformation",
      type: "flow",
      title: "AI Initiative Execution Path",
      caption:
        "Assess → prioritise → pilot → scale → embed. The sequence that turns AI ambition into measurable outcomes.",
    }),
    sectionWithDiagram({
      number: "3.2",
      title: "FTC scrutiny of AI companies",
      subtitle: "Deceptive AI claims, dark patterns, and the enforcement actions that have already happened",
      take: "The FTC enforces against unfair and deceptive practices in AI — overclaiming capabilities, undisclosed AI use, biased outcomes causing consumer harm, and dark patterns in AI-driven interfaces. No AI-specific statute is required; existing consumer protection law applies now.",
      why: "FTC enforcement is the most immediate federal regulatory risk for US AI startups. Marketing claims, product behaviour, and data practices are all in scope. Founders who treat the FTC as a future concern have already missed active enforcement.",
      paragraphs: [
        [
          s("Deceptive AI claims are the most common enforcement trigger. "),
          x(
            "Claiming AI can diagnose conditions without clinical validation. Marketing 'AI-powered' fraud detection without substantiation. Promising capabilities the model does not reliably deliver.",
            "FTC requires competent and reliable evidence for objective claims. Demo accuracy is not evidence.",
          ),
          s(" Align every marketing claim with eval evidence — or soften the claim."),
        ],
        [
          s("Undisclosed AI use and dark patterns draw scrutiny. "),
          x(
            "Using AI to manipulate consumer choices without disclosure. AI-driven pricing that discriminates. Automated decisions affecting consumers without transparency.",
            "If AI influences a consumer outcome, disclosure and fairness expectations apply.",
          ),
          s(" Review GTM messaging and UX flows with the same rigor as feature specs."),
        ],
        [
          s("FTC enforcement precedents are your compliance guide. "),
          x(
            "Actions against AI health apps, automated decision systems, and deceptive chatbots establish what the FTC considers unfair or deceptive.",
            "Read enforcement actions in your vertical — they are free compliance manuals.",
          ),
          s(" Assign someone to monitor FTC AI-related enforcement quarterly."),
        ],
      ],
      examples: [
        {
          title: "FTC action on AI health claims",
          body: "An app claimed AI could diagnose skin conditions without FDA clearance or clinical validation. FTC settlement required substantiation for all health claims and consumer notification. Founder lesson: health AI GTM must match eval evidence — superlatives without proof are enforcement invitations.",
        },
        {
          title: "Rite Aid facial recognition — biometric enforcement",
          body: "FTC banned Rite Aid from using facial recognition after deploying a system that generated false positives disproportionately affecting people of colour. Precedent for biometric AI: deployment without adequate testing and bias evaluation is deceptive practice. Founders in biometrics should treat this as their compliance baseline.",
        },
        {
          title: "Marketing claim audit before launch",
          body: "A legal AI startup's marketing claimed '99% accuracy on case law research.' General counsel flagged FTC substantiation risk — accuracy was measured on a curated test set, not production. Marketing revised to 'validated on [specific benchmark] with [specific limitations].' Avoided enforcement exposure before a single ad ran.",
        },
      ],
    }, {
      kind: "diagram",
      id: "founder-eval-framework",
      type: "flow",
      title: "Evaluation Framework",
      caption:
        "Define task → golden set → ship gate → monitor drift.",
    }),
    buildSection({
      number: "3.3",
      title: "Sector-specific AI regulation",
      subtitle: "Healthcare (FDA), financial services (SEC, CFPB), employment (EEOC) — the vertical regulators",
      take: "Sector regulators already govern AI in their domains: FDA for medical devices and diagnostic AI, SEC and CFPB for financial AI, EEOC for hiring algorithms, FCC for communications AI. Your vertical determines which regulator matters most — often more than any horizontal AI law.",
      why: "A horizontal 'AI compliance' program misses the sector regulator who will actually investigate you. Founders must map their vertical's specific rules before launch, not after the first complaint.",
      paragraphs: [
        [
          s("Healthcare AI faces FDA oversight for diagnostic and treatment recommendations. "),
          x(
            "Software as a Medical Device (SaMD) classification triggers FDA clearance or approval. Wellness claims without diagnostic positioning avoid FDA but still face FTC.",
            "The line between 'wellness coaching' and 'diagnosis' is a regulatory line — and a product positioning decision.",
          ),
          s(" Health AI founders need FDA counsel before positioning, not after launch."),
        ],
        [
          s("Financial services AI is governed by fair lending and consumer protection law. "),
          x(
            "CFPB enforces against discriminatory lending algorithms. SEC scrutinises AI in investment advice. FCRA governs credit reporting AI. ECOA prohibits disparate impact in credit decisions.",
            "A credit model with proxy discrimination violates existing law — no new AI statute needed.",
          ),
          s(" Fair lending testing is a product requirement for any fintech AI affecting credit outcomes."),
        ],
        [
          s("Employment AI faces EEOC disparate impact scrutiny. "),
          x(
            "NYC Local Law 144 requires bias audits for automated employment decision tools. EEOC guidance treats algorithmic discrimination as standard discrimination — intent is not required.",
            "Hiring AI without bias evaluation is employment law exposure, not just AI risk.",
          ),
          s(" Any AI influencing hiring, promotion, or compensation needs bias audit documentation."),
        ],
      ],
      examples: [
        {
          title: "FDA SaMD classification — product pivot",
          body: "A health AI startup's symptom checker was classified as SaMD by FDA counsel. Required 510(k) clearance — 18-month timeline. Founder pivoted to wellness positioning (no diagnostic claims) for v1 and pursued FDA clearance for v2. Regulatory classification determined product roadmap.",
        },
        {
          title: "CFPB fair lending investigation",
          body: "CFPB investigated a fintech's AI lending model for disparate impact against minority applicants. Model used zip code proxies for risk. Settlement required model remediation and ongoing fair lending testing. Founder lesson: proxy variables are discrimination vectors — test for disparate impact before launch.",
        },
        {
          title: "NYC bias audit law — hiring AI compliance",
          body: "An AI recruiting tool sold to NYC employers required annual bias audits under Local Law 144. Founder built audit pipeline and published results as a sales asset. NYC compliance became a differentiator for enterprise HR buyers in all US markets — not just New York.",
        },
      ],
    }),
    buildSection({
      number: "3.4",
      title: "State-level AI laws",
      subtitle: "California, Colorado, Texas — the patchwork that creates compliance complexity",
      take: "US states are enacting AI laws faster than federal government: Colorado AI Act (consequential decisions), California's multiple AI bills (transparency, training data disclosure, anti-discrimination), Texas and others following. Founders face a state patchwork requiring geo-aware compliance or highest-standard universal compliance.",
      why: "State laws create the same geo-compliance challenge as the EU AI Act — but with more variation and faster iteration. Founders who ignore state law discover it in customer contracts and AG inquiries.",
      paragraphs: [
        [
          s("Colorado AI Act leads state-level consequential decision regulation. "),
          x(
            "Requires impact assessments for high-risk AI systems making consequential decisions about education, employment, housing, healthcare, and legal services. Effective 2026 with enforcement from 2026.",
            "Colorado's framework mirrors EU high-risk themes — impact assessment, bias testing, disclosure.",
          ),
          s(" If you serve Colorado users in consequential domains, begin impact assessments now."),
        ],
        [
          s("California's AI legislative activity is the broadest. "),
          x(
            "Bills covering training data transparency, AI-generated content labelling, anti-discrimination in automated decisions, and chatbot disclosure. California's market size makes its laws de facto national standards.",
            "What California requires, most US startups implement nationally — building separate CA/non-CA products is rarely worth it.",
          ),
          s(" Monitor California AI legislation as a leading indicator for national practice."),
        ],
        [
          s("State patchwork strategy: highest standard or geo-compliance. "),
          x(
            "Option A: comply to the strictest state law nationally (simpler, often cheaper at scale). Option B: geo-fence features by state (complex engineering, legal risk if enforcement fails).",
            "Most growth-stage startups choose highest-standard universal compliance.",
          ),
          s(" Maintain a state-by-feature compliance matrix updated quarterly."),
        ],
      ],
      examples: [
        {
          title: "Colorado AI Act prep — impact assessment inventory",
          body: "A B2B SaaS founder inventoried features affecting employment and credit outcomes. Two flagged for Colorado impact assessment requirements. Began assessments six months before effective date. Competitors scrambled in month one; this founder's enterprise sales continued uninterrupted.",
        },
        {
          title: "California training data transparency",
          body: "California legislation requiring disclosure of training data sources for generative AI prompted a startup to document data provenance for all fine-tuning datasets. Documentation effort was significant but became a diligence asset for enterprise buyers nationwide.",
        },
        {
          title: "Highest-standard strategy — one product nationally",
          body: "A hiring AI startup implemented NYC bias audit standards, Colorado impact assessment framework, and EU transparency requirements as universal baseline. Engineering cost was 15% higher than US-minimum — but legal complexity of 50-state geo-compliance would have cost more. One standard, one product.",
        },
      ],
    }),
    buildSection({
      number: "3.5",
      title: "AI liability — the emerging legal framework",
      subtitle: "Product liability, negligence, and the cases that will define AI legal responsibility",
      take: "AI liability in the US is forming through product liability law, negligence standards, and emerging case law — not yet a comprehensive AI liability statute. Courts are deciding whether AI outputs are products, services, or information — with different liability implications for each classification.",
      why: "How courts classify your AI output determines your liability exposure. Founders who understand the emerging framework can structure products, terms of service, and insurance to manage exposure — not eliminate it.",
      paragraphs: [
        [
          s("Product liability applies when AI causes physical or economic harm. "),
          x(
            "Defective design (model trained on bad data), manufacturing defect (deployment error), failure to warn (inadequate disclaimers about AI limitations).",
            "Courts are increasingly treating AI outputs as products when they cause harm — 'the model hallucinated' is not a complete defence.",
          ),
          s(" Structure your product to demonstrate reasonable care — documentation is your defence."),
        ],
        [
          s("Negligence standards apply to professional AI advice. "),
          x(
            "Legal AI citing fake cases, medical AI giving wrong diagnoses, financial AI providing unsuitable advice — professional negligence claims attach when AI operates in domains with duty-of-care standards.",
            "The standard is whether a reasonable company would have deployed this AI with these safeguards.",
          ),
          s(" Reasonable care means evals, oversight, and limitations disclosure — documented."),
        ],
        [
          s("Terms of service disclaimers have limited protective value. "),
          x(
            "Courts may not enforce blanket 'AI may be wrong' disclaimers for consequential decisions. Disclaimers work better for low-stakes features than for hiring, credit, or medical AI.",
            "Product design mitigations (human review, confidence thresholds) protect more than legal language.",
          ),
          s(" Invest in product safeguards first, disclaimer language second."),
        ],
      ],
      examples: [
        {
          title: "Air Canada chatbot — contractual liability",
          body: "Canadian tribunal held Air Canada liable for chatbot promises not in actual policy. Precedent: companies are responsible for AI outputs presented to consumers, regardless of internal policy. US founders should expect similar reasoning in American courts.",
        },
        {
          title: "Legal AI fake citations — professional negligence",
          body: "Lawyers sanctioned for filing AI-generated fake case citations. The AI company faced reputational and potential negligence exposure. Founder lesson: professional-domain AI needs citation verification architecture — not just generation.",
        },
        {
          title: "Reasonable care documentation — litigation defence",
          body: "A hiring AI company faced discrimination complaint. Their defence: documented bias audits, human review requirement, disaggregated eval results, and user training materials — all predating the complaint. Case settled favourably. Documentation of reasonable care was the difference.",
        },
      ],
    }),
    buildSection({
      number: "3.6",
      title: "Founder decision lens: monitoring the regulatory environment",
      subtitle: "How to stay current without becoming a compliance lawyer — the minimum viable approach",
      take: "Minimum viable regulatory monitoring for founders: (1) quarterly sector regulator review, (2) state law tracker for states you sell into, (3) FTC enforcement digest, (4) legal counsel on retainer for AI-specific questions, (5) industry association policy updates, (6) annual compliance matrix refresh.",
      why: "Regulatory monitoring is not optional for AI founders — but it does not require a full-time compliance hire at seed stage. A structured minimum viable approach keeps you informed without consuming founder time.",
      paragraphs: [
        [
          s("Quarterly regulatory review — two hours, four sources. "),
          x(
            "FTC enforcement actions in your vertical. State AG AI initiatives in your top five revenue states. Sector regulator guidance updates (EEOC, CFPB, FDA). EU AI Act implementation timeline changes.",
            "Block two hours quarterly. Assign to founder, COO, or ops lead — not 'someone will do it.'",
          ),
          s(" Calendar it. Unscheduled monitoring does not happen."),
        ],
        [
          s("Legal counsel on retainer — AI-specific, not general corporate. "),
          x(
            "A general startup lawyer may not track AI regulation. Retain counsel with AI regulatory practice for quarterly check-ins and ad-hoc feature reviews.",
            "One $5K quarterly review prevents $500K enforcement exposure.",
          ),
          s(" Bring new features to counsel before launch, not after customer complaint."),
        ],
        [
          s("Compliance matrix as living document. "),
          x(
            "Rows: features. Columns: EU AI Act tier, FTC exposure, sector regulator, state laws, mitigations, status. Update quarterly.",
            "The matrix is your regulatory dashboard — share with board, sales, and engineering.",
          ),
          s(" When a new law passes, add a column — do not create a separate document."),
        ],
      ],
      examples: [
        {
          title: "Quarterly review caught Colorado law",
          body: "A founder's quarterly regulatory review flagged Colorado AI Act impact on their credit scoring feature. Six-month preparation window before effective date. Without scheduled review, they would have discovered it from a Colorado customer's legal team with weeks to comply.",
        },
        {
          title: "AI-specific counsel — feature review ritual",
          body: "A health AI startup instituted a rule: no new AI feature ships without 30-minute counsel review. Cost: $500 per feature. Caught FDA positioning risk on two features before development. Ritual cost was negligible vs regulatory rework.",
        },
        {
          title: "Compliance matrix in board deck",
          body: "A Series A founder added a one-page compliance matrix to quarterly board materials: 8 features, 5 regulatory columns, green/yellow/red status. Board approved compliance budget based on yellow items. Matrix made abstract regulatory risk concrete and fundable.",
        },
      ],
    }),
  ],
  quiz: [
    {
      q: "What is the most immediate federal regulatory risk for most US AI startups?",
      options: [
        "Waiting for comprehensive federal AI legislation to pass.",
        "FTC enforcement against deceptive AI claims and unfair practices.",
        "Only EU AI Act extraterritorial reach.",
        "Patent infringement from OpenAI.",
      ],
      correct: 1,
      correctFeedback:
        "Right. FTC enforces now under existing consumer protection law — no AI-specific statute needed.",
      wrongFeedback:
        "Re-read section 3.2. FTC enforcement is active and immediate.",
    },
    {
      q: "NIST AI Risk Management Framework is organised around which four functions?",
      options: [
        "Build, ship, scale, exit.",
        "Govern, Map, Measure, Manage.",
        "Train, test, deploy, monitor.",
        "Hire, fire, promote, compensate.",
      ],
      correct: 1,
      correctFeedback:
        "Exactly. NIST's four functions structure a credible safety program for US markets.",
      wrongFeedback:
        "Re-read section 3.1. Govern-Map-Measure-Manage is the NIST framework.",
    },
    {
      q: "Under EEOC guidance, algorithmic hiring discrimination requires:",
      options: [
        "Proof of intentional discrimination by the founder.",
        "Only disparate impact — differential outcomes may be sufficient.",
        "A written apology to affected candidates.",
        "No compliance until federal AI legislation passes.",
      ],
      correct: 1,
      correctFeedback:
        "Right. Disparate impact — differential outcomes — can establish discrimination without intent.",
      wrongFeedback:
        "Re-read sections 3.3 and 3.5. Intent is not required for disparate impact claims.",
    },
    {
      kind: "categorize",
      q: "Match each regulator to its primary AI oversight domain.",
      categories: ["Healthcare", "Financial services", "Employment", "Consumer protection"],
      items: [
        { text: "FDA — Software as a Medical Device classification.", category: 0 },
        { text: "CFPB — fair lending and discriminatory credit algorithms.", category: 1 },
        { text: "EEOC — disparate impact in hiring algorithms.", category: 2 },
        { text: "FTC — deceptive AI capability claims.", category: 3 },
        { text: "NYC Local Law 144 — bias audits for hiring AI.", category: 2 },
      ],
      correctFeedback:
        "Right. Sector regulators govern AI in their domains — often more immediately than horizontal AI law.",
      wrongFeedback:
        "Re-read section 3.3. Each vertical has its own regulator with active AI enforcement.",
    },
    {
      kind: "order",
      q: "Order the minimum viable regulatory monitoring cadence (most frequent first).",
      prompt: "Drag to arrange the recommended monitoring rhythm.",
      items: [
        "Quarterly sector, state, and FTC enforcement review.",
        "New feature review with AI-specific counsel before launch.",
        "Annual compliance matrix refresh for board.",
      ],
      correctFeedback:
        "Right. Quarterly review is the heartbeat; feature review is per-launch; matrix refresh is annual.",
      wrongFeedback:
        "Re-read section 3.6. Quarterly review, per-feature counsel, annual matrix refresh.",
    },
    {
      q: "For US state AI law compliance, the most common growth-stage strategy is:",
      options: [
        "Ignore state laws until federal legislation passes.",
        "Comply to the strictest state standard nationally.",
        "Build a separate product for each of the 50 states.",
        "Rely only on terms of service disclaimers.",
      ],
      correct: 1,
      correctFeedback:
        "Right. Highest-standard universal compliance avoids 50-state geo-complexity.",
      wrongFeedback:
        "Re-read section 3.4. Most startups choose one high standard nationally.",
    },
  ],
});
