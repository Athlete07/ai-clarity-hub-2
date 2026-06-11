import { buildChapter, buildSection, s, x, sectionWithDiagram } from "../concepts-pb4-helpers";

export const chapter05FounderAiVendorContracts = buildChapter({
  slug: "founder-ai-vendor-contracts",
  number: 5,
  shortTitle: "AI Vendor Contracts",
  title: "Contract Negotiation with AI Vendors",
  readingMinutes: 22,
  summary:
    "The terms most founders accept without reading — data ownership, training opt-out, performance guarantees, price lock, termination portability, and liability for AI outputs — plus a seven-clause review checklist before you sign.",
  keyTakeaway:
    "Your AI vendor contract is a balance-sheet instrument. The seven clauses below are non-negotiable for core dependencies — default terms favour the vendor; negotiated terms are how you keep your moat and margin when the relationship ends.",
  pmCallout:
    "As a founder: signing default AI vendor terms is giving a counterparty optional rights to your data, your economics, and your migration path. Read the seven clauses with your lawyer before the pilot ends — leverage disappears after dependency.",
  sections: [
    sectionWithDiagram({
      number: "5.1",
      title: "Data ownership clauses — the non-negotiable",
      subtitle: "What your contract must say about who owns the data you feed into vendor systems",
      take: "Contract must state: you retain all ownership of inputs, outputs, and derived insights from your data. Vendor receives limited license to process for service delivery only. No broad assignment, no vendor ownership of fine-tunes trained on your data without explicit buyout terms.",
      why: "Default terms often grant vendors broad rights to use inputs for service improvement. Your customer data and prompts are moat — ownership ambiguity leaks strategic assets and scares enterprise customers.",
      paragraphs: [
        [
          s("Ownership language must be explicit and narrow. "),
          x(
            "Good: 'Customer retains all right, title, and interest in Customer Data.' Vendor license: process solely to provide contracted services.",
            "Bad: 'Customer grants Vendor royalty-free license to use data for any purpose including improvement of services.'",
          ),
          s(" Broad license = you funded their training data."),
        ],
        [
          s("Outputs and derivatives need clarity. "),
          x(
            "Who owns model outputs? Who owns fine-tunes trained on your data? Who owns embeddings generated from your corpus?",
            "Enterprise deals should assign fine-tune weights to customer on termination at minimum.",
          ),
          s(" Derivatives are where moat lives — do not leave them vague."),
        ],
        [
          s("Customer DPAs flow down. "),
          x(
            "Your enterprise customers require you to own and control data processing. Vendor contract must let you make those promises truthfully.",
            "Ownership clause is prerequisite for downstream customer contracts.",
          ),
          s(" One weak vendor clause blocks your entire enterprise pipeline."),
        ],
      ],
      examples: [
        {
          title: "Broad license redline",
          body: "Vendor MSA granted perpetual license to use prompts for product improvement. Founder's counsel redlined to processing-only license. Vendor accepted at enterprise tier — redline was worth $40K premium vs giving away proprietary prompt library.",
        },
        {
          title: "Fine-tune ownership win",
          body: "Contract specified customer owns fine-tune adapters trained on customer data, delivered on termination. Migration to private deploy possible — ownership clause converted fine-tune from hostage to asset.",
        },
        {
          title: "Enterprise deal blocked",
          body: "Fortune 500 customer required data ownership certification. Vendor standard terms failed audit. Founder renegotiated before losing $400K ACV — ownership is revenue gate, not legal footnote.",
        },
      ],
    }, {
      kind: "diagram",
      id: "bl-vendor-evaluation",
      type: "flow",
      title: "Vendor Evaluation Process",
      caption:
        "Requirements → shortlist → golden-set eval → TCO → contract. Run this process on every AI vendor pitch.",
    }),
    sectionWithDiagram({
      number: "5.2",
      title: "Training data opt-out",
      subtitle: "Whether the vendor can train their models on your data — and how to prohibit it",
      take: "Default for many APIs: vendor may train on customer inputs unless enterprise no-training addendum signed. Contract must prohibit training on customer data without opt-in, cover embeddings and fine-tunes, and specify audit rights. Premium tier cost is usually worth it for proprietary data.",
      why: "Training on your data improves vendor models that competitors also use — subsidising commoditisation of your differentiation. Regulated customers will not sign without opt-out.",
      paragraphs: [
        [
          s("No-training clause scope must be comprehensive. "),
          x(
            "Covers: prompts, completions, uploaded documents, fine-tuning datasets, embeddings, support logs sent to API.",
            "Ask: does opt-out apply to subprocessors and crash logs?",
          ),
          s(" Narrow opt-out is loophole, not protection."),
        ],
        [
          s("Enterprise tier economics. "),
          x(
            "No-training often bundled in enterprise pricing — $50K–$150K annual premium typical vs standard API.",
            "Compare premium to cost of data moat leak and lost regulated deals — usually favours paying.",
          ),
          s(" Model no-training cost in vendor TCO, not as surprise add-on."),
        ],
        [
          s("Audit and certification rights. "),
          x(
            "Right to audit vendor compliance annually or receive third-party certification. Breach notification if training policy changes.",
            "Trust but verify — vendor policy pages change without email to you.",
          ),
          s(" Contractual audit right beats marketing trust center."),
        ],
      ],
      examples: [
        {
          title: "Default training — competitor advantage",
          body: "Startup used standard API terms for legal document processing. Discovered vendor could train on inputs. Competitor with enterprise no-training won bar association endorsement. Opt-out clause became sales requirement.",
        },
        {
          title: "Premium tier ROI",
          body: "$80K annual no-training premium seemed expensive. Lost deal modelled at $350K ARR from hospital system requiring training prohibition. Premium paid for itself in one customer.",
        },
        {
          title: "Subprocessor gap",
          body: "No-training clause covered primary vendor but not logging subprocessor. Counsel extended clause to subprocessors — closed GDPR diligence gap.",
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
      number: "5.3",
      title: "Model performance guarantees",
      subtitle: "What accuracy, latency, and uptime commitments are realistic to demand",
      take: "Realistic AI performance guarantees: API uptime 99.9%+, latency percentiles at contracted load, model version notification before material changes, optional quality floor on mutually agreed eval set. Unrealistic: guaranteed accuracy on all possible inputs. Negotiate what you can measure.",
      why: "Founders accept uptime SLAs while ignoring model behaviour — then face silent regressions with no remedy. Performance guarantees must match how AI actually fails.",
      paragraphs: [
        [
          s("Separate infrastructure SLA from model quality SLA. "),
          x(
            "Infrastructure: packets arrive, API returns 200. Model quality: output meets task completion on golden set.",
            "Both belong in contract for core dependencies — not just infrastructure.",
          ),
          s(" Uptime without quality is hollow for AI products."),
        ],
        [
          s("Quality floors require shared eval set. "),
          x(
            "Attach eval set as exhibit or reference methodology. Minimum score, measurement cadence, remedy if breached twice.",
            "Vendor will resist open-ended accuracy guarantees — scoped eval is negotiable.",
          ),
          s(" Defined eval scope makes quality SLA signable."),
        ],
        [
          s("Model change notification is performance protection. "),
          x(
            "30-day notice before deprecations. 14-day notice before material behaviour changes with opt-out window.",
            "Notification lets you re-eval before automatic acceptance.",
          ),
          s(" Surprise model updates are vendor-caused incidents."),
        ],
      ],
      examples: [
        {
          title: "Quality floor negotiated",
          body: "Vendor resisted accuracy SLA. Founder proposed task completion ≥85% on 200-case exhibit eval set. Vendor accepted at enterprise tier — measurable scope unlocked signable guarantee.",
        },
        {
          title: "Deprecation notice saved quarter",
          body: "Contract required 90-day deprecation notice. Vendor complied — team migrated fine-tunes with time to spare. Peer on month-to-month terms got 30 days — crisis.",
        },
        {
          title: "Hollow uptime SLA lesson",
          body: "99.9% uptime met while model quality dropped 12% post-update. No quality remedy in contract — customer churn anyway. Founder now negotiates paired SLAs.",
        },
      ],
    }),
    buildSection({
      number: "5.4",
      title: "Price lock and escalation clauses",
      subtitle: "How to protect against the pricing changes that will come if your vendor succeeds",
      take: "Negotiate: rate lock for initial term (12–24 months), defined escalation cap (e.g. CPI or 5% annual max), volume tier breakpoints in contract, and right to renegotiate if list price increases >15%. Without locks, vendor success taxes your margin.",
      why: "AI vendors cut prices competitively but raise enterprise floors and deprecate cheap tiers. Founders who sign month-to-month list pricing inherit unlimited COGS risk.",
      paragraphs: [
        [
          s("Rate lock period matches planning horizon. "),
          x(
            "12-month lock minimum for core dependency. 24-month if multi-year customer contracts depend on stable COGS.",
            "Lock applies to contracted SKU and volume tier — specify model names.",
          ),
          s(" Vague 'preferred pricing' is not a lock."),
        ],
        [
          s("Volume tiers in contract prevent cliff surprises. "),
          x(
            "Write breakpoints: 0–10M tokens, 10–50M, 50M+. Overage rates defined per tier.",
            "Renegotiation trigger if usage exceeds forecast by 50%.",
          ),
          s(" Forecast-based pricing without tiers assumes linear world."),
        ],
        [
          s("MFN and competitive bid rights. "),
          x(
            "Most-favoured-nation: if vendor offers better rate to similar customer, you get match.",
            "Annual right to benchmark against one competitor quote — keeps vendor honest at renewal.",
          ),
          s(" Renewal leverage is built at signing, not at renewal panic."),
        ],
      ],
      examples: [
        {
          title: "18-month rate lock",
          body: "Founder negotiated 18-month locked token rate at Series A signing — survived subsequent 25% list price increase. Gross margin held; competitor on month-to-month lost margin and raised prices angering customers.",
        },
        {
          title: "Volume tier cliff avoided",
          body: "Contract specified tier breakpoints through 100M tokens/month. Growth to 40M stayed in negotiated rate — without tiers, overage would have been at worse list rate.",
        },
        {
          title: "MFN clause activation",
          body: "Peer startup published lower enterprise rate. MFN clause triggered match — saved $22K annually. Clause looked bureaucratic until it paid.",
        },
      ],
    }),
    buildSection({
      number: "5.5",
      title: "Termination and data portability",
      subtitle: "What happens to your data and your fine-tuned models when you leave",
      take: "Termination clause must include: export of all customer data, prompts, logs, fine-tune weights, and embeddings in machine-readable format within 30 days; assistance period (30–60 days); certified deletion after export; pro-rata refund or no penalty termination for convenience after year one. Without portability, exit cost is rebuild cost.",
      why: "Vendors know switching costs lock you in. Portability clauses are negotiated when they want your signature — not when you are already trapped.",
      paragraphs: [
        [
          s("Export scope and format must be specified. "),
          x(
            "JSON/CSV for logs, standard weight formats for fine-tunes, API access during transition window.",
            "Define 'reasonable assistance' — hours included, hourly rate after.",
          ),
          s(" 'Commercially reasonable efforts' without format is meaningless."),
        ],
        [
          s("Termination for convenience protects optionality. "),
          x(
            "12-month initial term with termination for convenience on 90-day notice after year one — or pro-rata refund on early exit.",
            "Auto-renew without exit right traps you past dependency point.",
          ),
          s(" Convenience termination is reversibility in legal form."),
        ],
        [
          s("Deletion certificate closes liability loop. "),
          x(
            "Written certification that vendor deleted all customer data within 30 days of export completion.",
            "Required for GDPR, HIPAA, and customer DPAs.",
          ),
          s(" Export without deletion leaves ghost liability."),
        ],
      ],
      examples: [
        {
          title: "Export clause migration",
          body: "Termination export delivered fine-tunes, embeddings metadata, and 18 months logs in 28 days. Migration to alternate vendor in 9 weeks. Peer without export clause: 5-month rebuild.",
        },
        {
          title: "Assistance period value",
          body: "Contract included 40 hours transition assistance. Vendor SE helped map tool schemas — saved estimated 3 engineer-weeks. Assistance looked expensive at signing, cheap at exit.",
        },
        {
          title: "Auto-renew trap",
          body: "Startup missed 60-day non-renewal notice — locked into second year at unfavourable rates. Counsel added calendar reminder and amended to 90-day convenience termination after year one.",
        },
      ],
    }),
    buildSection({
      number: "5.6",
      title: "Liability for AI outputs",
      subtitle: "Who is responsible when the vendor's model produces harmful or incorrect output",
      take: "AI liability clauses must address: indemnification scope for third-party claims from model outputs, caps and carve-outs for gross negligence, who bears regulatory fines, insurance requirements, and limitation of liability floors for data breaches. Default vendor terms cap liability at fees paid — often inadequate for AI harm.",
      why: "When your product injures a user with vendor-generated content, plaintiffs name you. Your contract determines whether you recover from vendor or absorb catastrophic loss alone.",
      paragraphs: [
        [
          s("Indemnification for AI-specific harms. "),
          x(
            "Vendor indemnifies for claims arising from model infringement, training data infringement, and breach of no-training obligation.",
            "Your indemnity to customers flows up — vendor must backstop what you promise downstream.",
          ),
          s(" Mutual indemnification without AI carve-outs leaves gap."),
        ],
        [
          s("Liability caps need AI-adjusted floors. "),
          x(
            "Standard cap: 12 months fees paid — may be $50K vs $5M lawsuit. Negotiate higher cap for data breach, super-cap for gross negligence.",
            "Require cyber liability insurance naming customer as additional insured.",
          ),
          s(" Cap below insurance deductible is fiction."),
        ],
        [
          s("Regulatory and reputational allocation. "),
          x(
            "Who pays GDPR fines if vendor subprocessors breach? Who notifies customers if model generates prohibited content at scale?",
            "Incident response obligations: notification timeline, joint comms approval, forensic cooperation.",
          ),
          s(" Regulatory liability must be allocated, not assumed away."),
        ],
      ],
      examples: [
        {
          title: "Indemnity carve-out negotiation",
          body: "Vendor cap was 12-month fees ($90K). Founder negotiated super-cap at 3× fees for data breach and uncapped gross negligence. Legal spend $8K — justified for health-adjacent product.",
        },
        {
          title: "Insurance requirement",
          body: "Contract required vendor maintain $5M cyber policy naming customer additional insured. Certificate required at signing and renewal — vendor without insurance disqualified.",
        },
        {
          title: "Harmful output incident",
          body: "Model generated defamatory content in published report. Customer sued startup. Vendor indemnity for training data infringement covered counsel — but only because clause was negotiated. Default cap would have exhausted at first invoice.",
        },
      ],
    }),
    buildSection({
      number: "5.7",
      title: "Founder decision lens: the AI vendor contract review checklist",
      subtitle: "The seven clauses to review with your lawyer before signing any AI infrastructure agreement",
      take: "Seven-clause checklist before sign: (1) data ownership, (2) training opt-out, (3) performance/quality SLA, (4) price lock and tiers, (5) termination export, (6) liability/indemnity, (7) subprocessors and residency. Score each green/yellow/red. Any red on core dependency = do not sign without renegotiation.",
      why: "Checklists convert legal review from overwhelming to systematic. Founders who run the seven-clause review before pilot ends negotiate from leverage; founders who run it after signing pay learning tax.",
      paragraphs: [
        [
          s("Process: counsel review with business context. "),
          x(
            "Send lawyer the vendor risk register and scorecard — legal review is not abstract. Flag which dependency is Level 3.",
            "Schedule 90-minute review session: founder, counsel, CTO for technical subprocessors.",
          ),
          s(" Context turns legal review into business decision."),
        ],
        [
          s("Red clause escalation protocol. "),
          x(
            "Red on clauses 1, 2, or 5 (ownership, training, export) = hard stop for proprietary data workloads.",
            "Red on 4 or 6 = negotiate or diversify vendor. Yellow = documented risk acceptance with board.",
          ),
          s(" Yellow without documentation is red in diligence."),
        ],
        [
          s("Store executed checklist in data room. "),
          x(
            "Attach redlines, final clauses, and yellow risk acceptances to contract file.",
            "Series A diligence requests 'material vendor contracts' — checklist accelerates review.",
          ),
          s(" Future you and future investors will read this file."),
        ],
      ],
      examples: [
        {
          title: "Checklist stopped bad sign",
          body: "Seven-clause review flagged red on training opt-out and yellow on export format. Founder delayed signing 3 weeks, negotiated both green. Engineering had wanted to start integration — checklist prevented irreversible dependency on bad terms.",
        },
        {
          title: "Board yellow acceptance",
          body: "Price lock unavailable — yellow on clause 4. Founder documented 15% COGS sensitivity and board accepted risk with quarterly COGS review trigger. Documented yellow beat silent acceptance.",
        },
        {
          title: "Diligence acceleration",
          body: "Series A data room included seven-clause checklists for three vendors. Lead counsel praised completeness — vendor diligence completed in 5 days vs typical 3 weeks.",
        },
      ],
    }),
  ],
  quiz: [
    {
      q: "Vendor MSA grants 'royalty-free license to use Customer Data to improve services.' Core dependency with proprietary customer documents. Clause status?",
      options: [
        "Green — standard terms",
        "Red — non-negotiable renegotiation on data ownership",
        "Ignore — only engineers need to care",
        "Accept if price is low",
      ],
      correct: 1,
      correctFeedback:
        "Right. Broad improvement license leaks moat and blocks enterprise. Ownership clause is non-negotiable red.",
      wrongFeedback:
        "Data ownership is clause 1 hard stop. Re-read section 5.1.",
    },
    {
      q: "Hospital system requires proof vendor will not train on PHI. Which contract element?",
      options: [
        "Uptime SLA only",
        "Training data opt-out covering inputs, embeddings, and subprocessors",
        "Logo usage rights",
        "Social media clause",
      ],
      correct: 1,
      correctFeedback:
        "Right. Comprehensive no-training clause — often enterprise tier — is regulatory gate.",
      wrongFeedback:
        "Training opt-out is clause 2. Re-read section 5.2.",
    },
    {
      kind: "categorize",
      q: "Match each contract topic to the correct checklist clause number.",
      categories: ["Clause 3 — Performance", "Clause 4 — Price", "Clause 5 — Termination"],
      items: [
        { text: "Task completion floor on agreed 200-case eval set.", category: 0 },
        { text: "18-month token rate lock with volume tier breakpoints.", category: 1 },
        { text: "Fine-tune weight export within 30 days of termination.", category: 2 },
        { text: "30-day model deprecation notice requirement.", category: 0 },
        { text: "MFN if vendor offers better rate to similar customer.", category: 1 },
        { text: "Certified data deletion after export complete.", category: 2 },
      ],
      correctFeedback:
        "Right. Performance = 3, price lock = 4, termination/portability = 5.",
      wrongFeedback:
        "Seven-clause checklist maps topics systematically. Re-read section 5.7.",
    },
    {
      q: "AI core product contract has 99.9% uptime SLA but no quality remedy. Model update drops task completion 12%. Problem?",
      options: [
        "No problem — uptime met",
        "Hollow SLA — need quality floor and model change notification (clause 3)",
        "Cancel all contracts forever",
        "Only fix with pretraining",
      ],
      correct: 1,
      correctFeedback:
        "Right. AI failures are often quality, not uptime. Pair infrastructure and quality SLAs.",
      wrongFeedback:
        "Performance guarantees must cover model behaviour. Re-read section 5.3.",
    },
    {
      q: "Best time to negotiate termination export and price lock clauses?",
      options: [
        "After 2 years of dependency",
        "Before signing when vendor wants your business — leverage is highest",
        "Never — accept all terms",
        "Only during IPO",
      ],
      correct: 1,
      correctFeedback:
        "Right. Negotiate portability and price at signing — leverage drops with dependency depth.",
      wrongFeedback:
        "Contract terms negotiated pre-dependency. Re-read sections 5.4 and 5.5.",
    },
    {
      kind: "order",
      q: "Order the seven-clause contract review checklist (first clause at top).",
      prompt: "Drag to arrange the founder's review sequence.",
      items: [
        "Data ownership",
        "Training data opt-out",
        "Performance and quality SLA",
        "Price lock and escalation",
        "Termination and data portability",
        "Liability and indemnity for AI outputs",
        "Subprocessors and data residency",
      ],
      correctFeedback:
        "Right. Ownership → training → performance → price → exit → liability → subprocessors. Systematic review beats random reading.",
      wrongFeedback:
        "Follow the seven-clause checklist order. Re-read section 5.7.",
    },
  ],
});
