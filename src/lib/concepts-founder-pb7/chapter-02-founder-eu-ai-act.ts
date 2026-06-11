import { buildChapter, buildSection, s, x, sectionWithDiagram } from "../concepts-pb4-helpers";

export const chapter02FounderEuAiAct = buildChapter({
  slug: "founder-eu-ai-act",
  number: 2,
  shortTitle: "EU AI Act",
  title: "The EU AI Act — What Every Founder Must Know Now",
  readingMinutes: 30,
  summary:
    "The most significant AI regulation in history is already law — timeline, scope, four risk tiers, high-risk obligations, foundation model provisions, penalties up to 7% of global turnover, and the minimum viable compliance posture for startups selling to Europe.",
  keyTakeaway:
    "The EU AI Act applies to you if EU users touch your AI — regardless of HQ location. Founders who map features to risk tiers at ideation choose markets deliberately; founders who discover high-risk classification mid-deal lose nine months and six figures in compliance rework.",
  pmCallout:
    "As a founder: EU revenue is often 25–40% of your TAM. The AI Act is not a legal footnote — it is a product architecture decision that determines whether you can sell in Europe at all.",
  sections: [
    sectionWithDiagram({
      number: "2.1",
      title: "What the EU AI Act is and when it applies",
      subtitle: "Timeline, scope, and the critical question — does it apply to you even if you are not in Europe",
      take: "The EU AI Act is the world's first comprehensive horizontal AI law. It applies extraterritorially: if you place an AI system on the EU market or if its output is used in the EU, you are in scope — regardless of whether your company is US, Indian, or Singaporean.",
      why: "Founders who assume 'we're US-based so EU law doesn't apply' discover the extraterritorial reach when their first EU enterprise deal hits legal review. Scope determination is step one of any international AI strategy.",
      paragraphs: [
        [
          s("The Act entered into force in 2024 with phased implementation through 2027. "),
          x(
            "Prohibited practices and AI literacy obligations apply first. High-risk system requirements phase in through 2026–2027. Foundation model obligations have their own timeline.",
            "The clock is running. 'We'll comply later' means narrowing your EU addressable market with every month that passes.",
          ),
          s(" Build your compliance roadmap against the published timeline, not against fundraising milestones."),
        ],
        [
          s("Extraterritorial scope is the surprise for most US founders. "),
          x(
            "Offering an AI product to EU residents — even via a US-hosted website — triggers obligations. Your terms of service saying 'US users only' do not protect you if EU users can sign up.",
            "Geo-fencing must be technical enforcement, not legal disclaimer.",
          ),
          s(" If EU users can access your AI, assume you are in scope until counsel says otherwise."),
        ],
        [
          s("The Act regulates AI systems — not just AI companies. "),
          x(
            "Providers (who develop or place AI on market), deployers (who use AI in their business), importers, and distributors each have distinct obligations.",
            "B2B founders are often providers. Enterprise customers using your tool may be deployers with their own obligations — but you still carry provider duties.",
          ),
          s(" Map your role in the value chain before negotiating enterprise contracts."),
        ],
      ],
      examples: [
        {
          title: "US SaaS founder — extraterritorial surprise",
          body: "A San Francisco HR tech startup assumed EU law was irrelevant. Their first EU enterprise prospect's legal team cited the AI Act in security review. CV-screening feature triggered high-risk employment classification. Nine-month compliance gap killed the deal. The founder geo-fenced EU and rebuilt with conformity in mind — but lost a year of EU revenue.",
        },
        {
          title: "Geo-fencing as interim strategy",
          body: "A credit AI startup not ready for high-risk conformity technically blocked EU IP addresses and removed EU pricing from their website. Interim strategy preserved US growth while compliance documentation was built. Explicit market choice beat accidental EU exposure.",
        },
        {
          title: "B2B provider vs deployer obligations",
          body: "An AI analytics platform sold to EU banks. The startup was the provider; each bank was a deployer for their use case. The founder packaged provider documentation (model card, logging spec, oversight UI) enabling banks to meet deployer obligations. Won three EU bank contracts because compliance artifacts existed.",
        },
      ],
    }, {
      kind: "diagram",
      id: "bl-governance-mvg",
      type: "nested",
      title: "AI Governance Framework",
      caption:
        "Inventory → risk tier → minimum controls. The governance path regulators and boards expect.",
    }),
    sectionWithDiagram({
      number: "2.2",
      title: "The four risk tiers",
      subtitle: "Unacceptable risk, high risk, limited risk, minimal risk — and where common AI applications fall",
      take: "Four tiers define your compliance burden: unacceptable (banned outright), high-risk (conformity assessment and ongoing obligations), limited risk (transparency duties), minimal risk (largely unregulated). Most consumer AI is limited or minimal; vertical B2B often hits high-risk.",
      why: "Tier classification determines your product roadmap, legal budget, and EU launch timeline. Misclassification in either direction — too low or too high — costs money and market access.",
      paragraphs: [
        [
          s("Unacceptable risk: prohibited AI practices with no compliance path. "),
          x(
            "Social scoring of individuals, real-time biometric identification in public spaces for law enforcement (with narrow exceptions), manipulation of vulnerable groups, and emotion recognition in workplaces and schools.",
            "If your product does any of these, the EU market is closed. Redesign or exit.",
          ),
          s(" Most legitimate startups never touch unacceptable tier — but know the boundaries."),
        ],
        [
          s("High-risk: heavy compliance for consequential decisions. "),
          x(
            "Annex III covers employment, education, essential services (credit, insurance), law enforcement, migration, justice, and democratic processes. Safety components in regulated products also qualify.",
            "Conformity assessment, technical documentation, human oversight, accuracy requirements, and post-market monitoring are mandatory.",
          ),
          s(" High-risk is a different product development lifecycle — budget accordingly."),
        ],
        [
          s("Limited and minimal risk: lighter but not zero. "),
          x(
            "Limited risk: chatbots, emotion recognition (non-prohibited contexts), biometric categorisation, deepfakes — require transparency (disclose AI interaction or label synthetic content).",
            "Minimal risk: spam filters, AI-enabled games, inventory optimisation — no specific obligations but general product safety principles apply.",
          ),
          s(" Maintain a feature-to-tier registry updated every release."),
        ],
      ],
      examples: [
        {
          title: "Employment AI — clear high-risk",
          body: "A recruiting startup's CV-ranking feature for EU customers is high-risk under Annex III (employment and worker management). Triggered conformity assessment, bias documentation, human review UI, and nine-month EU launch delay — but planned, not discovered. Founder presented timeline honestly to EU prospects and won waitlist commitments.",
        },
        {
          title: "Support chatbot — limited risk transparency",
          body: "A fintech added customer support chatbot for EU users. Limited risk tier required AI disclosure and human handoff path. Two weeks of legal and design work — not nine months. Cheap compliance enabled on-schedule EU launch.",
        },
        {
          title: "Inventory optimisation — minimal risk",
          body: "A retail SaaS founder's demand forecasting AI for warehouse stocking classified as minimal risk. No conformity assessment. Still implemented logging and basic evals as good practice. Calibration saved compliance budget for the hiring module that actually needed high-risk treatment.",
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
      number: "2.3",
      title: "High-risk AI categories — the full list",
      subtitle: "Hiring, credit, education, law enforcement, healthcare, critical infrastructure — the verticals with the heaviest obligations",
      take: "Annex III lists eight high-risk domains: biometrics, critical infrastructure, education, employment, essential services, law enforcement, migration, and justice/democratic processes. B2B founders selling horizontal tools into these verticals inherit the compliance burden of their customers' use cases.",
      why: "The full list tells you which verticals to pursue deliberately vs which require compliance investment before first sale. Enterprise sales into high-risk verticals without compliance artifacts is pipeline fiction.",
      paragraphs: [
        [
          s("Employment and essential services are the most common startup collision points. "),
          x(
            "CV screening, performance monitoring, task allocation, and worker management are high-risk. Credit scoring, insurance pricing, and emergency service dispatch qualify under essential services.",
            "Horizontal 'AI for business' products often hit high-risk through customer use cases the founder never marketed.",
          ),
          s(" Ask every enterprise prospect: 'In which Annex III domain will you use our AI?'"),
        ],
        [
          s("Education and healthcare-adjacent AI carry heavy oversight requirements. "),
          x(
            "Admission decisions, exam scoring, student monitoring, and vocational training assessment are high-risk in education. Medical device AI falls under separate MDR rules but intersects with the Act.",
            "Edtech and healthtech founders must budget compliance as core product cost — not legal afterthought.",
          ),
          s(" Human oversight UX is a product requirement, not a legal checkbox."),
        ],
        [
          s("Law enforcement, migration, and justice are typically outside startup TAM — but know the boundaries. "),
          x(
            "Predictive policing, visa assessment, and judicial decision support are high-risk with additional scrutiny. Most startups avoid these markets deliberately.",
            "If a government prospect approaches, compliance cost is an order of magnitude higher than commercial SaaS.",
          ),
          s(" Declining high-risk government deals without compliance capacity is a valid strategic choice."),
        ],
      ],
      examples: [
        {
          title: "Horizontal SaaS — customer use case trap",
          body: "A 'productivity AI' platform's resume summarisation feature was used by an EU HR customer for screening. High-risk classification applied to the deployer's use case; provider documentation requirements followed. Founder added use-case attestation to enterprise contracts and built compliance packet for HR vertical.",
        },
        {
          title: "Edtech essay scoring — oversight by design",
          body: "An edtech startup building automated essay grading for EU schools classified high-risk. Built teacher review screen with AI score, rationale, and one-click override. No grade published without educator confirmation. Compliance architecture became a sales differentiator in EU procurement.",
        },
        {
          title: "Insurtech pricing AI — essential services",
          body: "An insurance pricing AI for EU markets triggered essential services high-risk classification. Required risk management system, bias monitoring, and explainability for premium decisions. Founder raised a compliance-specific funding tranche and delayed EU launch 12 months — but entered with defensible documentation competitors lacked.",
        },
      ],
    }),
    buildSection({
      number: "2.4",
      title: "Compliance obligations for high-risk AI systems",
      subtitle: "Conformity assessments, technical documentation, human oversight, transparency requirements",
      take: "High-risk AI systems require: a risk management system, data governance, technical documentation, record-keeping, transparency to deployers and users, human oversight design, and accuracy/robustness/cybersecurity standards. Third-party conformity assessment may be required before market placement.",
      why: "These obligations reshape your engineering backlog, hiring plan, and launch timeline. Founders who treat them as legal paperwork discover they are product requirements that take quarters to build.",
      paragraphs: [
        [
          s("Risk management system: continuous, not one-time. "),
          x(
            "Identify and analyse known and foreseeable risks. Estimate and evaluate risks that emerge during use. Adopt mitigations and test effectiveness. Document throughout the lifecycle.",
            "This is an operating process — not a PDF produced once before launch.",
          ),
          s(" Assign a risk management owner — typically the founder or head of product at seed stage."),
        ],
        [
          s("Technical documentation and record-keeping are diligence artifacts. "),
          x(
            "General description, design specifications, training data characteristics, validation results, risk assessment, and human oversight measures — all documented and maintained.",
            "Logs of AI decisions must be automatically generated and retained for audit.",
          ),
          s(" Enterprise EU buyers will request this documentation in security review. Build it as you build the product."),
        ],
        [
          s("Human oversight must be meaningful, not theatrical. "),
          x(
            "High-risk systems must allow human override, enable understanding of model limitations, and support monitoring for anomalies and dysfunctions.",
            "A rubber-stamp 'approve' button does not satisfy the Act. Oversight must be capable of preventing or reversing harmful decisions.",
          ),
          s(" Oversight UX is a founder-level product decision with legal consequences."),
        ],
      ],
      examples: [
        {
          title: "Recruiting SaaS — compliance packet won RFP",
          body: "A recruiting AI startup packaged model card, bias eval results, logging spec, oversight UI documentation, and risk management process for EU enterprise HR buyers. Won a major EU bank RFP because compliance artifacts existed. Competitor with 'we use GPT-4' lost on documentation alone.",
        },
        {
          title: "Conformity assessment timeline — planned delay",
          body: "A credit AI founder mapped 11-month conformity assessment timeline before promising EU launch dates. Sales team set expectations honestly. Three EU prospects joined a paid pilot with manual review fallback while conformity completed. Transparency preserved pipeline.",
        },
        {
          title: "Logging architecture — built early, not retrofitted",
          body: "A hiring AI startup built decision audit logs from day one: input, model version, output, confidence, human override flag, timestamp. Retrofitting logging after launch would have cost 4x and broken existing deployments. Early architecture decision saved the EU compliance path.",
        },
      ],
    }),
    buildSection({
      number: "2.5",
      title: "The foundation model provisions",
      subtitle: "What the Act requires of companies using GPT-4, Claude, or Gemini in their products",
      take: "The EU AI Act imposes specific obligations on providers of general-purpose AI models (GPAI) — OpenAI, Anthropic, Google — and downstream obligations on startups that fine-tune or substantially modify these models. Most API-only startups are deployers, but fine-tuning triggers provider duties.",
      why: "Your relationship with foundation model providers affects your compliance burden. Founders who fine-tune open models may become providers under the Act. Founders who use APIs need to understand what their vendor must provide.",
      paragraphs: [
        [
          s("GPAI providers must meet transparency, copyright, and safety obligations. "),
          x(
            "Technical documentation, training data summary, copyright compliance policy, and energy reporting. Systemic risk models (above 10^25 FLOPs training compute) face additional requirements including adversarial testing and incident reporting.",
            "OpenAI, Anthropic, and Google bear primary provider obligations for their base models.",
          ),
          s(" As an API consumer, you inherit downstream transparency duties to your users."),
        ],
        [
          s("Fine-tuning or substantial modification can make you a provider. "),
          x(
            "If you fine-tune a GPAI model and place it on the market under your name, you may assume provider obligations for that modified model.",
            "RAG and prompt engineering alone typically do not make you a provider — but fine-tuning on proprietary data for customer deployment might.",
          ),
          s(" Discuss your architecture with counsel before fine-tuning for EU market deployment."),
        ],
        [
          s("Vendor due diligence extends to GPAI compliance. "),
          x(
            "Enterprise EU contracts will ask: which foundation model, what GPAI provider obligations are met, what documentation is available.",
            "Choose vendors who publish model cards, training data summaries, and safety eval results.",
          ),
          s(" Your vendor's compliance posture is your compliance posture in enterprise sales."),
        ],
      ],
      examples: [
        {
          title: "API-only startup — deployer obligations",
          body: "A legal research startup using Claude via API is a deployer, not a GPAI provider. Obligations focus on transparency to users, logging, and ensuring the application layer meets risk tier requirements. Foundation model compliance is Anthropic's responsibility; application compliance is the founder's.",
        },
        {
          title: "Fine-tuned open model — provider risk",
          body: "A healthcare AI startup fine-tuned Llama on clinical data and marketed it as their proprietary model to EU hospitals. Counsel flagged potential GPAI provider obligations for the fine-tuned model. Founder restructured as deployer of base model with application-layer compliance — avoiding duplicate provider duties.",
        },
        {
          title: "Vendor documentation in enterprise RFP",
          body: "An EU government RFP required foundation model documentation: training data summary, safety eval results, and copyright policy. The startup's vendor (Anthropic) provided published model card and safety documentation. Startup attached vendor docs to their compliance packet. Vendor selection became a compliance decision.",
        },
      ],
    }),
    buildSection({
      number: "2.6",
      title: "Penalties — the numbers that focus attention",
      subtitle: "Up to €35M or 7% of global annual turnover — the fines that make this a board-level conversation",
      take: "EU AI Act penalties are severe: up to €35 million or 7% of global annual turnover for prohibited AI practices; up to €15 million or 3% for other violations; up to €7.5 million or 1% for supplying incorrect information. For a growth-stage startup, 7% of turnover can exceed total funding raised.",
      why: "Penalty scale transforms compliance from legal department concern to board-level risk management. Founders who present penalty exposure to their board get compliance budget approved; founders who hide it get fired after an incident.",
      paragraphs: [
        [
          s("Penalty tiers map to violation severity. "),
          x(
            "Prohibited AI practices: maximum penalties. High-risk non-compliance (missing conformity, inadequate oversight): mid-tier. Administrative violations (incorrect information to authorities): lower tier but still material.",
            "The gradient means some violations are company-ending, others are expensive corrections.",
          ),
          s(" Know which tier your features risk before launch."),
        ],
        [
          s("Global turnover calculation includes all revenue, not just EU. "),
          x(
            "A US startup with $10M global revenue faces up to $700K in penalties for serious violations — and up to $3M for high-risk non-compliance.",
            "At seed stage, even 1% penalties can exceed your last raise. Compliance ROI is existential, not incremental.",
          ),
          s(" Present penalty exposure quantitatively in board materials — not as vague legal risk."),
        ],
        [
          s("Penalties are not the only cost — market access loss compounds. "),
          x(
            "Regulatory action triggers enterprise contract termination clauses, investor confidence loss, and personal director liability in some jurisdictions.",
            "The fine is the floor of damage, not the ceiling.",
          ),
          s(" Compliance investment is insurance against multi-dimensional loss."),
        ],
      ],
      examples: [
        {
          title: "Board penalty exposure presentation",
          body: "A Series A founder presented EU AI Act penalty exposure to the board: $2M ARR company, maximum 7% penalty = $140K for prohibited practices, $60K for high-risk non-compliance. Board approved $120K compliance budget and 6-month EU launch delay. Quantified risk enabled rational investment.",
        },
        {
          title: "GDPR precedent — penalty psychology",
          body: "GDPR fines (up to 4% of turnover) reshaped how every startup treats EU data. Founders who lived through GDPR compliance applied the same board-level urgency to the AI Act. The pattern: EU regulation with percentage-of-turnover penalties becomes a CEO priority, not a legal footnote.",
        },
        {
          title: "Startup near-miss — prohibited practice review",
          body: "A social analytics startup considered an 'employee engagement score' feature. Counsel flagged potential social scoring prohibition under the Act. Feature killed before development. Avoided maximum-tier penalty exposure entirely. Cheap legal review at ideation saved existential risk.",
        },
      ],
    }),
    buildSection({
      number: "2.7",
      title: "Founder decision lens: EU AI Act compliance checklist",
      subtitle: "The minimum viable compliance posture for a startup operating in or selling to European markets",
      take: "Minimum viable EU AI Act compliance for startups: (1) feature-to-tier classification registry, (2) transparency UX for limited-risk features, (3) high-risk compliance roadmap or geo-fence, (4) logging architecture, (5) human oversight design for consequential features, (6) counsel review of foundation model relationship, (7) incident reporting process.",
      why: "This checklist is the starting posture — not the finish line. But founders who complete it before EU sales can answer enterprise security reviews, survive diligence, and make informed market decisions.",
      paragraphs: [
        [
          s("Step one: classify every feature against the four tiers. "),
          x(
            "Document tier, rationale, and applicable Annex III category. Update every release. Share with sales so EU prospects get honest timelines.",
            "Classification is a product exercise with legal input — not a legal exercise alone.",
          ),
          s(" Unclassified features do not ship to EU users."),
        ],
        [
          s("Step two: implement tier-appropriate mitigations. "),
          x(
            "Limited risk: AI disclosure, synthetic content labelling, human handoff. High-risk: begin conformity assessment, build oversight UI, start technical documentation. Unacceptable: block feature.",
            "Geo-fence features not yet compliant — technical enforcement, not terms of service.",
          ),
          s(" Minimum viable compliance means no EU user sees a non-compliant feature."),
        ],
        [
          s("Step three: institutionalise ongoing compliance. "),
          x(
            "Quarterly tier registry review. Incident reporting process. Model update assessment for high-risk features. Vendor documentation refresh.",
            "Compliance is a cadence, not a project. Assign an owner — founder at seed, dedicated hire at Series B.",
          ),
          s(" Bring EU AI Act status to board quarterly — tier registry, open gaps, timeline."),
        ],
      ],
      examples: [
        {
          title: "Seed startup — checklist in two weeks",
          body: "A seed-stage founder completed the seven-item checklist with $8K of legal review: tier registry (12 features), chatbot disclosure, EU geo-fence on hiring module, logging spec, oversight wireframes for credit feature, vendor doc collection, incident runbook draft. EU enterprise pilot approved in security review. Total cost: less than one month of delayed revenue.",
        },
        {
          title: "Geo-fence + roadmap — honest EU strategy",
          body: "A fintech founder geo-fenced two high-risk features, shipped three limited-risk features to EU with disclosure, and presented a 12-month high-risk compliance roadmap to EU prospects. Won two pilot contracts with manual fallback for gated features. Honest posture beat pretending full compliance.",
        },
        {
          title: "Checklist gap killed deal — then fixed",
          body: "A health AI startup lost an EU hospital deal because they had no tier registry or logging architecture. Founder spent six weeks building both, re-engaged prospect, closed deal. The checklist items the prospect asked for were exactly the seven on this list.",
        },
      ],
    }),
  ],
  quiz: [
    {
      q: "When does the EU AI Act apply to a US-based AI startup?",
      options: [
        "Only if the company has a physical office in Europe.",
        "When it places AI on the EU market or EU users can access the AI output.",
        "Never — US companies are exempt from EU regulation.",
        "Only after the company reaches $100M in revenue.",
      ],
      correct: 1,
      correctFeedback:
        "Right. Extraterritorial scope means EU users trigger EU obligations regardless of HQ.",
      wrongFeedback:
        "Re-read section 2.1. The Act applies based on market access, not company location.",
    },
    {
      q: "CV screening for EU employers is most likely classified as:",
      options: [
        "Minimal risk — no special requirements.",
        "High-risk under Annex III employment category.",
        "Unacceptable — all hiring AI is banned.",
        "Limited risk — only chatbot disclosure needed.",
      ],
      correct: 1,
      correctFeedback:
        "Exactly. Employment and worker management AI is a classic high-risk category.",
      wrongFeedback:
        "Re-read sections 2.2 and 2.3. Hiring AI triggers heavy conformity obligations.",
    },
    {
      q: "What is the maximum penalty for prohibited AI practices under the EU AI Act?",
      options: [
        "€1,000 per violation.",
        "Up to €35M or 7% of global annual turnover.",
        "A warning letter with no financial penalty.",
        "Only applicable to companies with EU headquarters.",
      ],
      correct: 1,
      correctFeedback:
        "Right. Penalties are board-level — up to 7% of global turnover.",
      wrongFeedback:
        "Re-read section 2.6. EU AI Act penalties are percentage-of-turnover scale.",
    },
    {
      kind: "categorize",
      q: "Match each EU AI Act obligation to the risk tier where it primarily applies.",
      categories: ["High-risk", "Limited risk", "All tiers"],
      items: [
        { text: "Conformity assessment before market placement.", category: 0 },
        { text: "Disclose that users are interacting with AI.", category: 1 },
        { text: "Maintain a feature-to-tier classification registry.", category: 2 },
        { text: "Meaningful human oversight with override capability.", category: 0 },
        { text: "Label AI-generated synthetic content.", category: 1 },
      ],
      correctFeedback:
        "Right. Conformity and oversight are high-risk; transparency duties are limited risk; registry is universal good practice.",
      wrongFeedback:
        "Re-read sections 2.2, 2.4, and 2.7 for tier-specific obligations.",
    },
    {
      kind: "order",
      q: "Order the minimum viable EU AI Act compliance steps (first step top).",
      prompt: "Drag to arrange the recommended startup compliance sequence.",
      items: [
        "Classify every AI feature against the four risk tiers.",
        "Implement tier-appropriate mitigations or geo-fence non-compliant features.",
        "Institutionalise quarterly review, incident process, and board reporting.",
      ],
      correctFeedback:
        "Exactly. Classify first, mitigate or geo-fence second, institutionalise third.",
      wrongFeedback:
        "Re-read section 2.7. Classification precedes mitigation precedes ongoing cadence.",
    },
    {
      q: "When might a startup using foundation models become a GPAI provider under the Act?",
      options: [
        "Whenever they use any API from OpenAI.",
        "When they fine-tune or substantially modify a GPAI model and place it on market under their name.",
        "Never — only OpenAI and Google are providers.",
        "Only if they have more than 1,000 employees.",
      ],
      correct: 1,
      correctFeedback:
        "Right. Fine-tuning and substantial modification can shift provider obligations to the startup.",
      wrongFeedback:
        "Re-read section 2.5. API use is typically deployer status; fine-tuning may trigger provider duties.",
    },
  ],
});
