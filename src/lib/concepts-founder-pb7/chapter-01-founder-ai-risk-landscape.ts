import { buildChapter, buildSection, s, x, sectionWithDiagram } from "../concepts-pb4-helpers";

export const chapter01FounderAiRiskLandscape = buildChapter({
  slug: "founder-ai-risk-landscape",
  number: 1,
  shortTitle: "AI Risk Landscape",
  title: "The AI Risk Landscape for Founders",
  readingMinutes: 26,
  summary:
    "What can go wrong, how fast it goes wrong, and who is holding the bag — the four risk categories every founder must map, why startups underestimate them, and how to calibrate risk proportionally before your board asks.",
  keyTakeaway:
    "AI risk is not one thing — it is technical, legal, reputational, and regulatory risk interacting on a compressed timeline. Founders who document and own their risk register before launch survive incidents; founders who treat risk as an engineering backlog discover it in press coverage and investor calls.",
  pmCallout:
    "As a founder: your AI product can fail in four different ways simultaneously — and you are personally accountable for all of them. Map your risk register before your first enterprise deal, not after your first lawsuit.",
  sections: [
    buildSection({
      number: "1.1",
      title: "The four categories of AI risk",
      subtitle: "Technical risk, legal risk, reputational risk, and regulatory risk — and how they interact",
      take: "AI risk splits into four categories that compound: technical failures (hallucination, bias, drift), legal exposure (liability, discrimination), reputational damage (trust collapse, churn), and regulatory action (fines, market bans). A single incident often triggers all four simultaneously.",
      why: "Founders who treat AI risk as purely technical miss the legal and regulatory tails that end companies. Mapping all four categories before launch is the difference between a contained incident and a company-defining crisis.",
      paragraphs: [
        [
          s("Technical risk is what engineers see first — hallucinated outputs, biased predictions, model drift, jailbreaks. "),
          x(
            "A legal research tool cites fake cases. A hiring model ranks women lower. A support bot promises refunds it cannot deliver.",
            "Technical failures are the ignition event. They are rarely the full damage.",
          ),
          s(" Every technical failure has legal, reputational, and regulatory consequences waiting behind it."),
        ],
        [
          s("Legal and regulatory risk transform technical failures into liability. "),
          x(
            "EU AI Act conformity requirements, FTC deceptive practices enforcement, EEOC disparate impact investigations, and product liability claims do not require malicious intent — only harm.",
            "A wrong AI output in hiring, credit, or healthcare is not a bug report. It is potential litigation.",
          ),
          s(" Founders who cannot name which laws apply to their product have not finished product strategy."),
        ],
        [
          s("Reputational risk is the slow bleed that kills fundraising. "),
          x(
            "Enterprise buyers add you to blocklists. Investors pause term sheets. Talented engineers update their LinkedIn. Trust lost to an AI incident rarely returns at the same valuation.",
            "Reputational damage often exceeds direct legal costs — especially for B2B companies selling into regulated verticals.",
          ),
          s(" The four categories interact: one hallucination becomes a lawsuit becomes a headline becomes a blocked EU launch."),
        ],
      ],
      examples: [
        {
          title: "Air Canada chatbot — four risks in one incident",
          body: "A customer service chatbot promised a bereavement fare discount not in airline policy. Technical failure: unconstrained generation. Legal: airline held liable for the bot's commitment. Reputational: global press coverage of 'AI lies.' Regulatory: precedent for AI output liability in Canada. One incident, four risk categories, board-level consequences.",
        },
        {
          title: "Facial recognition startup — technical becomes regulatory",
          body: "A biometric login product showed 95% overall accuracy but 40% failure rates for darker skin tones. Technical: representation bias. Legal: potential discrimination claims. Reputational: viral social media campaign. Regulatory: city bans on facial recognition and enterprise security review failures. The founder's technical accuracy slide masked existential risk.",
        },
        {
          title: "Fintech credit AI — regulatory before revenue",
          body: "A seed-stage lending startup launched AI credit scoring without mapping EU AI Act high-risk obligations. Technical model worked in US pilot. Regulatory: EU enterprise prospects required conformity documentation the company could not produce. Revenue pipeline stalled nine months. Risk mapping at ideation would have geo-fenced or redesigned the product.",
        },
      ],
    }),
    sectionWithDiagram({
      number: "1.2",
      title: "How AI risk materialises for startups",
      subtitle: "The timeline of an AI incident — from model failure to press coverage to investor call",
      take: "AI incidents compress into days what traditional software bugs take months to surface. The typical timeline: user discovers failure → social amplification → customer escalation → legal inquiry → investor call → board emergency session. Founders who have no incident playbook learn this sequence live.",
      why: "Understanding the incident timeline tells you what to prepare before launch: monitoring, kill switches, legal counsel on retainer, comms templates, and board reporting cadence. Speed of escalation is the defining property of AI risk.",
      paragraphs: [
        [
          s("Hour zero to forty-eight: a user posts a screenshot of your AI giving dangerous medical advice or discriminatory hiring output. "),
          x(
            "Social amplification is near-instant. What was one support ticket becomes ten thousand retweets before your on-call engineer finishes breakfast.",
            "AI failures are inherently shareable — they are surprising, funny, or outrageous. Virality is built into the failure mode.",
          ),
          s(" Your first response window is measured in hours, not sprint cycles."),
        ],
        [
          s("Day three to seven: enterprise customers open security reviews, legal sends preservation notices, journalists call. "),
          x(
            "B2B contracts increasingly include AI incident notification clauses. Your largest customer asks whether their data was involved. Legal counsel you have not retained is now urgent at emergency rates.",
            "Due diligence questions you faced in fundraising become customer escalation questions overnight.",
          ),
          s(" Revenue at risk exceeds the cost of every mitigation you skipped."),
        ],
        [
          s("Week two: board call, investor update, potential regulatory inquiry. "),
          x(
            "Investors ask: 'Did you know this was possible? What did you do to prevent it? What is the exposure?' Board members ask for the risk register you never wrote.",
            "The question is not whether the model failed — it is whether you exercised reasonable care as a founder.",
          ),
          s(" Founders who pre-documented risks and mitigations survive the call. Founders who improvised do not get a second meeting."),
        ],
      ],
      examples: [
        {
          title: "Legal AI hallucination — 72-hour crisis",
          body: "A legal research tool cited six fabricated court cases. Day 1: lawyer Twitter explodes. Day 2: law firm customers suspend accounts. Day 3: class action exploration and bar association inquiry. The company survived because the CEO had a feature kill switch, pre-drafted comms, and counsel on retainer — but revenue paused for a quarter.",
        },
        {
          title: "HR screening bias — quiet enterprise churn",
          body: "An AI recruiting tool showed disparate impact in an enterprise customer's internal audit. No viral moment — but three Fortune 500 accounts churned within 60 days. The founder learned that B2B AI risk often materialises as silent pipeline death, not headlines.",
        },
        {
          title: "Health chatbot — regulatory timeline",
          body: "A wellness app's AI chatbot gave eating-disorder-enabling advice to a teenager. Parents complained to regulators. FTC inquiry opened within three weeks. The founder's incident log — timestamped kill switch activation and user notification — became the difference between settlement and shutdown.",
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
    buildSection({
      number: "1.3",
      title: "Why founders underestimate AI risk",
      subtitle: "Moving fast, demo culture, and the gap between testing and production",
      take: "Founders underestimate AI risk because demos lie, accuracy metrics hide minority failure, and 'move fast' culture treats safety as a Series B problem. The gap between controlled testing and adversarial production users is where companies die.",
      why: "Underestimation is not stupidity — it is structural. Demo environments, curated test sets, and friendly beta users do not represent production. Founders who understand why they underestimate risk can correct for it systematically.",
      paragraphs: [
        [
          s("Demo culture creates false confidence. "),
          x(
            "The model works beautifully on ten curated examples in the pitch deck. Investors clap. Nobody tested Southern accents, adversarial jailbreaks, or edge-case regulatory scenarios.",
            "Demos optimise for wow. Production optimises for worst-case. These are opposite objectives.",
          ),
          s(" Founders who ship what they demo ship a liability."),
        ],
        [
          s("Aggregate metrics hide catastrophic minority failure. "),
          x(
            "95% accuracy sounds board-ready until you disaggregate: 98% for English, 41% for Spanish. 99% for light skin, 34% for dark skin.",
            "Overall accuracy is the metric founders use to feel safe and the metric that fails them in court.",
          ),
          s(" If you have not sliced metrics by cohort, you do not know your real risk profile."),
        ],
        [
          s("'We'll add safety at Series B' is a bet against probability. "),
          x(
            "Incidents happen at seed and Series A — often before you have a compliance team, before you have insurance, before you have brand equity to absorb the hit.",
            "The companies that survive early incidents had minimum viable governance at launch, not at scale.",
          ),
          s(" Speed without safety architecture is not velocity — it is deferred catastrophe."),
        ],
      ],
      examples: [
        {
          title: "Pitch deck accuracy vs production reality",
          body: "A founder presented '97% accurate' document classification to close a seed round. Enterprise pilot revealed 62% accuracy on scanned PDFs — the majority of the customer's documents. The metric was true on clean digital PDFs only. Customer churned. Investor trust damaged. The founder now mandates production-representative eval sets before any accuracy claim.",
        },
        {
          title: "Jailbreak discovered by journalist, not QA",
          body: "A mental health AI startup launched with no red-teaming. A tech journalist jailbroke the bot into providing self-harm encouragement in twenty minutes. The engineering team had tested happy-path conversations only. Cost: emergency takedown, three-month rebuild, lost partnership with a national health network.",
        },
        {
          title: "Amazon recruiting tool — historical data blind spot",
          body: "Amazon built resume screening AI on a decade of male-dominated hiring data. The model penalized women's colleges. Nobody asked 'what does our historical data encode?' until the project was scrapped. Founder lesson: data audit is risk audit — do it before training, not after headlines.",
        },
      ],
    }),
    sectionWithDiagram({
      number: "1.4",
      title: "The risk-reward calibration",
      subtitle: "Not avoiding AI risk — managing it proportionally to the potential harm",
      take: "The goal is not zero AI risk — that means zero AI product. The goal is proportional risk management: higher autonomy and higher-stakes domains require heavier guardrails, more human oversight, and more documentation. Match your safety investment to your harm surface.",
      why: "Over-investing in safety for a low-risk feature burns runway. Under-investing for a high-risk feature burns the company. Founders must calibrate — and calibration requires an honest harm assessment, not a uniform safety policy.",
      paragraphs: [
        [
          s("Harm surface area is the calibration input. "),
          x(
            "An AI that drafts internal meeting notes has different risk than an AI that approves loans, diagnoses conditions, or screens job applicants.",
            "Autonomy × stakes × population size = harm surface. Draft-only email AI scores low. Autonomous credit denial scores high.",
          ),
          s(" Score every feature on this formula before allocating engineering and legal budget."),
        ],
        [
          s("Proportional mitigation means tiered investment, not uniform checklists. "),
          x(
            "Low-risk features: basic evals, disclosure, logging. Medium-risk: red-teaming, disaggregated metrics, human fallback. High-risk: conformity assessment, audit trails, dedicated oversight UX, incident runbooks.",
            "Applying high-risk compliance to a spam filter wastes capital. Applying spam-filter safety to hiring AI invites litigation.",
          ),
          s(" Your risk register should drive resource allocation, not a one-size-fits-all policy PDF."),
        ],
        [
          s("Risk-reward calibration is a competitive decision, not just a legal one. "),
          x(
            "Companies that calibrate well ship faster in low-risk features and win enterprise deals in high-risk verticals because they have the governance artifacts buyers require.",
            "Under-calibrated competitors get blocked in security review. Over-calibrated competitors ship too slowly to win.",
          ),
          s(" Governance proportional to harm is how you move fast and stay alive."),
        ],
      ],
      examples: [
        {
          title: "Draft-only vs auto-send — proportional autonomy",
          body: "An email AI startup scoped v1 to draft-only with mandatory human send. Competitor shipped auto-send for demo wow. Competitor's bot sent an offensive reply to a CEO's biggest client. The draft-only company won the enterprise segment because proportional autonomy prevented the incident and demonstrated mature risk thinking.",
        },
        {
          title: "Edtech grading — high-risk calibration",
          body: "An edtech founder building essay scoring for EU schools budgeted nine months for EU AI Act high-risk compliance: human oversight UI, bias testing, technical documentation. Competitors launched faster without compliance and were blocked from EU procurement. The calibrated founder won slower but won the market that mattered.",
        },
        {
          title: "Internal summarisation — light-touch safety",
          body: "A B2B SaaS founder added AI meeting summarisation for internal team use only. Harm surface: low — no external commitments, no regulated decisions. Mitigation: basic hallucination warnings and source citations. No conformity assessment needed. Calibration saved $200K in unnecessary compliance spend while focusing budget on the hiring AI feature that actually needed it.",
        },
      ],
    }, {
      kind: "diagram",
      id: "founder-risk-governance",
      type: "flow",
      title: "AI Risk Governance Flow",
      caption:
        "Map use cases → classify risk tier → implement controls → monitor → report. Governance is a fundraising and enterprise sales requirement.",
    }),
    buildSection({
      number: "1.5",
      title: "High-risk vs low-risk AI applications",
      subtitle: "The EU AI Act risk tiers and how to honestly place your product",
      take: "The EU AI Act provides the clearest risk taxonomy: unacceptable (banned), high-risk (heavy compliance), limited risk (transparency duties), minimal risk (light touch). Honest classification of your features determines timeline, cost, and market access — especially in Europe.",
      why: "Misclassifying your product as low-risk when it is high-risk means discovering six-figure compliance costs mid-enterprise deal. Overclassifying wastes runway. Founders need an honest tier map, not optimism.",
      paragraphs: [
        [
          s("Most founders underestimate their tier because they think in product categories, not use cases. "),
          x(
            "A 'productivity SaaS' that includes CV screening for HR customers is high-risk in employment — regardless of your primary positioning.",
            "Your customer's use case can elevate your tier. B2B founders must map customer workflows, not just their own marketing.",
          ),
          s(" Ask sales: 'What decisions does our AI influence in the customer's business?'"),
        ],
        [
          s("High-risk domains carry conformity obligations that reshape product development. "),
          x(
            "Hiring, credit, education, law enforcement, healthcare diagnostics, critical infrastructure — these require technical documentation, human oversight, bias monitoring, and post-market surveillance.",
            "High-risk is not a label you add at launch. It is a different development lifecycle starting at architecture.",
          ),
          s(" If you sell into these verticals, compliance is a product line item from day one."),
        ],
        [
          s("Limited and minimal risk still have requirements — just lighter ones. "),
          x(
            "Customer-facing chatbots need AI disclosure. Deepfakes need labelling. Even minimal-risk features benefit from logging and basic evals.",
            "Light touch does not mean no touch. It means proportionally lighter investment.",
          ),
          s(" Build a feature-to-tier matrix and update it every release — tiers change as features change."),
        ],
      ],
      examples: [
        {
          title: "HR SaaS — customer use case elevation",
          body: "A general productivity platform added AI resume ranking as a beta feature. EU enterprise prospect classified it as high-risk employment AI under Annex III. Nine-month compliance gap killed the deal. The founder learned to gate features by tier and geo-fence non-compliant capabilities until documentation was ready.",
        },
        {
          title: "Customer support chatbot — limited risk done right",
          body: "A fintech founder added 'You are chatting with AI' disclosure and human handoff within two clicks. Limited risk tier — two weeks of legal review, not nine months of conformity assessment. Proportional compliance enabled EU launch on schedule.",
        },
        {
          title: "Credit scoring — geo-fence strategy",
          body: "A lending AI startup was not ready for EU high-risk conformity. Founder geo-fenced the AI credit feature to US-only and routed EU users to manual review. Explicit market strategy preserved EU revenue through a compliant path while US product iterated. Honest tier mapping enabled revenue instead of blocking it.",
        },
      ],
    }),
    buildSection({
      number: "1.6",
      title: "Founder decision lens: the AI risk register",
      subtitle: "How to document, score, and own your AI risks before your board asks for them",
      take: "An AI risk register is a living document: every AI feature, its harm surface, applicable regulations, mitigations in place, residual risk, and owner. Founders who maintain this document make better product decisions, survive diligence, and run better board meetings.",
      why: "The risk register is the artifact that converts vague anxiety into actionable decisions. It is what your board, investors, enterprise buyers, and lawyers all want — and what most seed-stage founders do not have.",
      paragraphs: [
        [
          s("Structure: feature → harm surface → regulation → mitigation → residual risk → owner. "),
          x(
            "For each AI feature: What can go wrong? Who gets hurt? Which laws apply? What have we built to prevent it? What risk remains? Who owns monitoring?",
            "One row per feature. Update every sprint. Review monthly with leadership.",
          ),
          s(" The register is a product document, not a legal appendix."),
        ],
        [
          s("Score residual risk to drive prioritisation. "),
          x(
            "Use likelihood × severity. High-likelihood, high-severity items get engineering sprint priority. Low-likelihood, high-severity items get incident runbooks and insurance.",
            "Scoring prevents both panic and complacency — it makes tradeoffs explicit.",
          ),
          s(" Bring the top five residual risks to every board meeting."),
        ],
        [
          s("The risk register is a sales and fundraising asset. "),
          x(
            "Enterprise security questionnaires ask exactly what the register answers. Investors in regulated AI ask for it in diligence. Founders who have it close deals faster.",
            "Transparency about managed risk builds more trust than claiming zero risk.",
          ),
          s(" Write the register before your first enterprise pilot, not after their security review."),
        ],
      ],
      examples: [
        {
          title: "Seed-stage risk register — closed enterprise deal",
          body: "A health AI founder maintained a ten-row risk register covering hallucination, bias, HIPAA, and EU AI Act tiers. An enterprise prospect's 200-question security review mapped directly to register rows. Deal closed in six weeks vs the industry average of six months. The register was the diligence accelerator.",
        },
        {
          title: "Board quarterly risk review — prevented surprise",
          body: "A founder presented top five residual risks quarterly: jailbreak exposure, hiring bias in a new feature, API vendor dependency, training data consent gaps, and missing AI liability insurance. Board approved $80K mitigation budget proactively. When a minor hallucination incident occurred, the board treated it as managed — not as a surprise.",
        },
        {
          title: "Risk register gap discovered in Series A diligence",
          body: "A Series A candidate had no risk register. Diligence firm's AI review found twelve unmanaged exposures. Term sheet went conditional with 15% lower valuation and mandatory compliance hire. The founder rebuilt the register post-close and said it was the most valuable document they never knew they needed.",
        },
      ],
    }),
  ],
  quiz: [
    {
      q: "Which four categories of AI risk interact when a single incident occurs?",
      options: [
        "Marketing, sales, finance, and HR risk.",
        "Technical, legal, reputational, and regulatory risk.",
        "Cloud, network, database, and API risk.",
        "Seed, Series A, Series B, and IPO risk.",
      ],
      correct: 1,
      correctFeedback:
        "Right. A technical failure often triggers legal, reputational, and regulatory consequences simultaneously.",
      wrongFeedback:
        "Re-read section 1.1. AI risk spans four interacting categories beyond engineering.",
    },
    {
      q: "Why do founders systematically underestimate AI risk?",
      options: [
        "Because AI models are perfectly reliable in production.",
        "Demo culture, aggregate metrics, and treating safety as a later-stage problem.",
        "Because regulators never enforce AI rules on startups.",
        "Because users never share AI failures publicly.",
      ],
      correct: 1,
      correctFeedback:
        "Exactly. Demos, blended accuracy, and deferred safety create false confidence.",
      wrongFeedback:
        "Re-read section 1.3. Underestimation is structural, not accidental.",
    },
    {
      q: "What is the correct goal of risk-reward calibration?",
      options: [
        "Eliminate all AI risk before launching any feature.",
        "Manage risk proportionally to the harm surface of each feature.",
        "Apply maximum compliance to every AI feature uniformly.",
        "Defer all safety investment until Series B.",
      ],
      correct: 1,
      correctFeedback:
        "Right. Match safety investment to autonomy, stakes, and affected populations.",
      wrongFeedback:
        "Zero risk means zero product. Uniform maximum compliance wastes runway. Re-read section 1.4.",
    },
    {
      kind: "categorize",
      q: "Match each AI application to its most likely EU AI Act tier.",
      categories: ["High-risk", "Limited risk", "Minimal risk"],
      items: [
        { text: "CV screening for EU employers.", category: 0 },
        { text: "Customer support chatbot with AI disclosure.", category: 1 },
        { text: "Internal meeting note summarisation.", category: 2 },
        { text: "Automated essay grading in EU schools.", category: 0 },
        { text: "AI-generated marketing copy with labelling.", category: 1 },
      ],
      correctFeedback:
        "Right. Employment, education, and credit are high-risk. Chatbots are limited. Internal tools are typically minimal.",
      wrongFeedback:
        "Re-read section 1.5. Annex III domains are high-risk; chatbots are limited risk.",
    },
    {
      kind: "order",
      q: "Order the typical AI incident escalation timeline (earliest first).",
      prompt: "Drag to arrange first event (top) to last (bottom).",
      items: [
        "User discovers and shares AI failure publicly.",
        "Enterprise customers escalate and legal inquiries arrive.",
        "Board and investor emergency review of exposure.",
      ],
      correctFeedback:
        "Right. Social amplification comes first, then customer/legal escalation, then board-level review.",
      wrongFeedback:
        "Re-read section 1.2. Incidents compress from user discovery to board calls in days or weeks.",
    },
    {
      q: "What should an AI risk register contain for each feature?",
      options: [
        "Only the model name and API provider.",
        "Harm surface, applicable regulations, mitigations, residual risk, and owner.",
        "Just the engineering sprint it was built in.",
        "Only financial revenue projections.",
      ],
      correct: 1,
      correctFeedback:
        "Exactly. The register converts vague anxiety into scored, owned, actionable risk.",
      wrongFeedback:
        "Re-read section 1.6. A risk register is a structured accountability document.",
    },
  ],
});
