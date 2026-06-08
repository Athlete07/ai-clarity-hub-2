import { buildChapter, buildSection, s, x } from "../concepts-pb4-helpers";

export const chapter08ResponsibleAiFrameworks = buildChapter({
  slug: "pb7-responsible-ai-frameworks",
  number: 8,
  shortTitle: "Responsible AI Frameworks",
  title: "Responsible AI Frameworks",
  readingMinutes: 27,
  summary:
    "The operational structures that make ethical AI a practice, not a principle — what leading teams actually do, not just believe",
  keyTakeaway:
    "Responsible AI is operationalised through frameworks (NIST AI RMF, vendor standards), impact assessments, model cards, accountability RACI, ongoing monitoring, and vendor due diligence — not ethics statements. PMs who embed these practices in the release process make safety a gate, not a poster.",
  pmCallout:
    "As a PM: a Responsible AI PDF on the wiki is not a practice. Ship only features that pass impact assessment, have model cards, name an accountable owner, and include post-launch monitoring — or you're running an ethics theatre program.",
  sections: [
    buildSection({
      number: "8.1",
      title: "What is a Responsible AI framework",
      subtitle: "The policies, processes, reviews, and accountability structures that operationalise AI ethics inside a company",
      take: "A Responsible AI framework is the operational system — policies (what we won't build), processes (impact assessment, red-team, release review), reviews (ethics board, legal sign-off), accountability (RACI for AI decisions), and metrics (bias monitoring, incident response) — that turns ethical principles into daily product decisions.",
      why: "Principles without process are aspirational. Frameworks give PMs checklists, escalation paths, and documentation artefacts that survive personnel changes and satisfy regulators. Without a framework, each PM reinvents ethics ad hoc.",
      paragraphs: [
        [
          s("Frameworks bridge principles and product gates. "),
          x(
            "Principle: 'We build fair AI.' Framework: disaggregated eval by demographic, impact assessment template, release blocker if parity gap >5%.",
            "PM uses framework artefacts in PRD and launch checklist — not separate ethics document.",
          ),
          s(" Integration into product workflow is what separates real from theatre."),
        ],
        [
          s("Framework scope covers full AI lifecycle. "),
          x(
            "Discovery (should we build this?), development (how do we test harm?), deployment (who approves?), monitoring (what do we watch?), incident response (what if harm occurs?).",
            "Not just pre-launch — post-launch monitoring is half the framework.",
          ),
          s(" PM owns discovery and deployment gates; partners with safety on monitoring."),
        ],
        [
          s("Framework maturity is a spectrum — start minimal, expand. "),
          x(
            "Level 1: impact assessment + model card for high-risk features. Level 2: ethics review board + red-team program. Level 3: external audit + public transparency reports.",
            "PM documents current maturity; roadmap improves framework quarterly.",
          ),
          s(" Perfect framework day one is less valuable than functioning minimum today."),
        ],
      ],
      examples: [
        {
          title: "Startup — minimal framework in 2 weeks",
          body: "5-person AI team adopted: 1-page impact assessment, model card template, PM accountable for high-risk releases. No board yet. Passed first enterprise security review because framework was operational, not aspirational. Maturity level 1 sufficient for v1.",
        },
        {
          title: "Enterprise — framework prevented harmful feature",
          body: "Impact assessment flagged: emotion detection in hiring video interviews — high bias risk, EU AI Act high-risk category. Framework process blocked feature despite exec enthusiasm. Legal and ethics aligned on kill. Framework earned PM veto credibility.",
        },
        {
          title: "Framework maturity roadmap",
          body: "PM published 4-quarter framework maturity plan: Q1 impact assessments, Q2 ethics board, Q3 red-team program, Q4 external audit. Board approved budget per level. Maturity roadmap made responsible AI a program, not a one-time initiative.",
        },
      ],
    }),
    buildSection({
      number: "8.2",
      title: "The major frameworks compared",
      subtitle: "NIST AI RMF, Google PAIR, Microsoft RAI Standard, Partnership on AI — what each covers and what each leaves to you",
      take: "Major Responsible AI frameworks: NIST AI RMF (US federal, govern-map-measure-manage functions), Google PAIR (human-centred design practices), Microsoft Responsible AI Standard (requirements checklist), Partnership on AI (tenets and case studies). None is plug-and-play — each provides structure; your company must localise policies, risk taxonomy, and enforcement.",
      why: "PMs asked to 'implement NIST' need to know what's prescriptive vs adaptable. Picking a framework anchor accelerates adoption; copying without localisation creates checkbox compliance.",
      paragraphs: [
        [
          s("NIST AI RMF — govern, map, measure, manage. "),
          x(
            "Govern: policies and accountability. Map: context and risk identification. Measure: eval and monitoring. Manage: prioritise and act on findings.",
            "Best for: regulated industries, US federal contractors, structured risk documentation.",
          ),
          s(" PM uses Map and Measure functions most directly in product work."),
        ],
        [
          s("Microsoft RAI Standard — requirement-level specificity. "),
          x(
            "Concrete requirements: fairness testing, reliability targets, privacy controls, inclusiveness, transparency, accountability — each with sub-requirements.",
            "Best for: product teams wanting checklist-style gates integrated into release process.",
          ),
          s(" Borrow requirement language for your launch checklist."),
        ],
        [
          s("No framework replaces company-specific risk taxonomy. "),
          x(
            "All frameworks leave you to define: what's high-risk for your product, which populations are affected, what parity threshold is acceptable, who has veto power.",
            "PM workshop: adapt framework skeleton, fill in company risk appetite.",
          ),
          s(" Framework adoption = 30% copy, 70% localise."),
        ],
      ],
      examples: [
        {
          title: "NIST AI RMF — federal contract requirement",
          body: "Gov contractor PM mapped product lifecycle to NIST Govern-Map-Measure-Manage. Impact assessments filled Map function. Eval gates filled Measure. Incident runbook filled Manage. Contract audit passed. NIST provided structure federal buyer expected.",
        },
        {
          title: "Microsoft checklist — SaaS release gates",
          body: "PM adapted Microsoft RAI Standard sub-requirements into Jira release checklist: fairness eval, privacy review, transparency copy, human fallback. 12 items, 45-minute review. Framework reduced ethics review from ad-hoc debate to repeatable gate.",
        },
        {
          title: "Hybrid framework — best of two",
          body: "Company used NIST for governance documentation (board-level) and Microsoft requirements for product gates (PM-level). PM didn't force single framework religion — used what fit each audience. Pragmatic adoption beat purity.",
        },
      ],
    }),
    buildSection({
      number: "8.3",
      title: "AI impact assessments",
      subtitle: "The pre-launch review process that evaluates harm potential, affected populations, and mitigation options before deployment",
      take: "An AI impact assessment (AIA) documents: feature purpose, affected populations, potential harms (bias, privacy, safety, autonomy), likelihood and severity, mitigations (technical and procedural), residual risk acceptance, and approver sign-off. Completed before build for high-risk features; before launch for all AI features.",
      why: "AIAs force structured thinking about harm before sunk cost. Regulators (EU AI Act) require conformity assessments for high-risk systems — AIA is the foundation. PMs who run AIAs early avoid building features that fail legal review at launch.",
      paragraphs: [
        [
          s("AIA timing: early for high-risk, pre-launch for all. "),
          x(
            "High-risk (hiring, credit, health): AIA in discovery — may kill feature before eng starts. Medium-risk: AIA before beta. Low-risk: lightweight AIA before GA.",
            "Risk tier determines AIA depth — not one-size-fits-all 20-page doc.",
          ),
          s(" PM triages risk tier using framework taxonomy."),
        ],
        [
          s("Harm taxonomy makes assessment concrete. "),
          x(
            "Categories: discriminatory outcomes, privacy violation, physical/psychological harm, erosion of autonomy, misinformation, environmental impact.",
            "PM scores each: likelihood (low/med/high) × severity (low/med/high) = priority.",
          ),
          s(" Scoring prevents vague 'there might be bias' without action."),
        ],
        [
          s("Mitigations and residual risk are explicit. "),
          x(
            "Mitigation: disaggregated eval, human review, output filtering, access restriction. Residual risk: '3% parity gap on age group, accepted with monitoring.'",
            "Approver signs residual risk — accountability named.",
          ),
          s(" 'We mitigated everything' is rarely true; honest residual risk builds trust."),
        ],
      ],
      examples: [
        {
          title: "Hiring AI — AIA killed feature in discovery",
          body: "AIA scored high likelihood × high severity on discriminatory outcomes for resume screening AI. Mitigations insufficient for residual risk. PM recommended kill; leadership agreed. 3 eng months saved. AIA in discovery, not launch week.",
        },
        {
          title: "Lightweight AIA — 30 minutes for FAQ bot",
          body: "Low-risk FAQ bot: 1-page AIA — affected population (all users), harms (misinformation low severity with citations), mitigations (RAG grounding, confidence threshold). Legal signed in 30 minutes. Right-sized process for risk tier.",
        },
        {
          title: "AIA drove mitigation design",
          body: "Credit explanation AI: AIA flagged autonomy harm — users might over-trust AI explanation for loan denial. Mitigation: mandatory human appeal path, 'AI-generated explanation' label, plain-language limits disclaimer. AIA shaped product, not just compliance doc.",
        },
      ],
    }),
    buildSection({
      number: "8.4",
      title: "Model cards and system cards",
      subtitle: "Standardised documentation of model capabilities, limitations, training data, and intended use — the transparency artefact your team should produce",
      take: "Model cards document a specific model: training data summary, intended use, out-of-scope uses, performance metrics (including disaggregated), ethical considerations, and caveats. System cards document the full product system: model + retrieval + guardrails + human fallback — what the user actually experiences.",
      why: "Model cards are the transparency artefact regulators, enterprise buyers, and internal teams request. PMs who require model/system cards for every AI release create institutional memory and audit evidence.",
      paragraphs: [
        [
          s("Model card vs system card — both needed. "),
          x(
            "Model card: 'GPT-4 fine-tuned on support tickets, 89% intent accuracy, not for medical advice.' System card: 'Support bot = fine-tuned model + RAG on help docs + escalation below 0.8 confidence.'",
            "Enterprise buyers ask for system card; researchers ask for model card.",
          ),
          s(" PM owns system card; data science contributes model card sections."),
        ],
        [
          s("Disaggregated metrics are non-negotiable for high-risk. "),
          x(
            "Overall accuracy 92% may hide 71% for Spanish queries or 68% for users over 65. Model card must break out key subgroups.",
            "Subgroup analysis in card prevents 'average hides harm' audit failures.",
          ),
          s(" PM defines which subgroups to disaggregate based on AIA."),
        ],
        [
          s("Cards are living documents tied to model version. "),
          x(
            "Model v2.1 → card v2.1. Re-eval results update performance section. Out-of-scope uses updated when misuse observed.",
            "Card version in release manifest alongside model version.",
          ),
          s(" Stale cards are worse than no cards — they misrepresent current behaviour."),
        ],
      ],
      examples: [
        {
          title: "Enterprise deal — system card closed $2M",
          body: "Prospect required system card before procurement. PM produced in 3 days from PRD + eval data. Documented limitations honestly — prospect valued transparency over perfection. Deal closed. System card became standard sales artefact.",
        },
        {
          title: "Disaggregated metrics revealed hidden gap",
          body: "Model card draft: 91% overall accuracy. Disaggregated: 94% English, 74% Portuguese. PM blocked Portuguese GA; funded data collection. Card process caught gap overall metric hid.",
        },
        {
          title: "Model card prevented misuse",
          body: "Model card stated out-of-scope: 'not for legal advice.' Customer attempted legal use case; support cited card. Misuse contained. Out-of-scope section is liability and expectation tool.",
        },
      ],
    }),
    buildSection({
      number: "8.5",
      title: "Accountability structures",
      subtitle: "Who owns AI safety decisions — the RACI for model releases, the escalation path when a red-team finding is serious",
      take: "Accountability for AI: RACI matrix naming who is Accountable for release decisions (usually PM or product director), Responsible for safety eval (data science/safety team), Consulted (legal, ethics, design), Informed (support, comms). Escalation path defines what happens when red-team finds critical issue — veto authority, timeline, and communication.",
      why: "Ambiguous ownership means safety findings sit in Slack threads while launch proceeds. Clear RACI and escalation make 'who can stop the ship?' answerable in 30 seconds.",
      paragraphs: [
        [
          s("Accountable role has release veto authority. "),
          x(
            "PM Accountable for product AI releases can delay GA for unresolved critical safety finding. Documented in RACI — not informal.",
            "Veto used rarely but must exist; without it, safety is advisory.",
          ),
          s(" Exec support for PM veto prevents override by revenue pressure."),
        ],
        [
          s("Escalation tiers by finding severity. "),
          x(
            "Critical (harm potential, regulatory violation): automatic launch block, exec notification within 24h. High: fix before GA. Medium: fix within 30 days post-launch. Low: backlog.",
            "PM and safety team agree severity taxonomy upfront.",
          ),
          s(" Severity without escalation path is classification theatre."),
        ],
        [
          s("Cross-functional sign-off is accountability evidence. "),
          x(
            "Release record: PM (A), safety lead (R), legal (C signed), ethics board (C for high-risk). Timestamped in release system.",
            "Audit trail proves process ran — not just policy existed.",
          ),
          s(" Sign-off is lightweight when process is habitual."),
        ],
      ],
      examples: [
        {
          title: "PM veto — supported by RACI",
          body: "Red-team critical finding: jailbreak exposed internal data in support bot. RACI gave PM accountable veto. GA delayed 2 weeks. Sales frustrated but RACI and exec pre-commitment held. Fix shipped; incident avoided.",
        },
        {
          title: "No RACI — finding ignored, incident followed",
          body: "Bias finding in hiring tool logged as 'medium' with no owner. Launched anyway. Media coverage 3 months later. Post-mortem: no RACI, no escalation. Company adopted accountability matrix within 30 days.",
        },
        {
          title: "Escalation tier prevented overreaction",
          body: "Low-severity finding: occasional informal tone in formal context. Classified low per taxonomy — backlog fix, no launch delay. Clear tiers prevented both ignore and over-block. PM confidence in process increased.",
        },
      ],
    }),
    buildSection({
      number: "8.6",
      title: "Ongoing monitoring as a responsible AI practice",
      subtitle: "Post-launch bias testing, performance disaggregation, and incident response for AI failures",
      take: "Post-launch responsible AI monitoring includes: continuous quality sampling (online eval), disaggregated performance dashboards, drift detection (data and model), user harm signal tracking (complaints, thumbs-down, escalation rate), and AI incident response runbook — treating live AI like production infrastructure with SLOs, not a ship-and-forget feature.",
      why: "Pre-launch assessment assumes stable world. Production shifts — new user segments, model updates, adversarial use. Monitoring catches harm that pre-launch testing missed.",
      paragraphs: [
        [
          s("Online eval replaces one-time launch testing. "),
          x(
            "Sample 1–5% of live traffic for quality scoring (automated + periodic human review). Alert when metric drops below band.",
            "PM sets online eval SLO same as latency SLO.",
          ),
          s(" Launch is start of monitoring obligation, not end of safety work."),
        ],
        [
          s("Disaggregated dashboards surface harm to subgroups. "),
          x(
            "Overall metrics green while subgroup degrades — classic monitoring blind spot. Dashboard requires min sample size per subgroup before hiding.",
            "PM reviews disaggregated dashboard monthly; safety reviews weekly for high-risk.",
          ),
          s(" Average-only dashboards are responsible AI failure mode."),
        ],
        [
          s("AI incident response runbook distinct from infra incidents. "),
          x(
            "AI incident: harmful output at scale, bias spike, jailbreak exploit, misinformation viral spread. Runbook: disable feature flag, comms template, root cause (model/prompt/data), re-eval before re-enable.",
            "PM owns comms and re-enable criteria; eng owns technical containment.",
          ),
          s(" Runbook rehearsed quarterly — not written once and forgotten."),
        ],
      ],
      examples: [
        {
          title: "Online eval caught drift in week 3",
          body: "Launch accuracy 90% on golden set. Online eval week 3: 79% — new product line queries underrepresented in training. Alert fired; PM triggered data collection sprint. Monitoring caught drift golden set missed.",
        },
        {
          title: "Subgroup dashboard — parity alert",
          body: "Monthly review: gender parity gap widened from 2% to 7% on loan explanation feature. Automatic alert to safety lead. Mitigation: retrain with balanced sample. Monitoring as responsible AI practice, not launch checkbox.",
        },
        {
          title: "AI incident runbook — 4-hour containment",
          body: "Jailbreak spread on social media for consumer chatbot. Runbook activated: feature flag off in 20 minutes, comms posted in 2 hours, root cause identified (prompt injection via URL) in 4 hours. Rehearsed runbook made response fast.",
        },
      ],
    }),
    buildSection({
      number: "8.7",
      title: "Stakeholder engagement",
      subtitle: "When to involve affected communities, domain experts, and civil society in AI product decisions — and how to do it without it being performative",
      take: "Meaningful stakeholder engagement means involving affected communities, domain experts, and civil society in impact assessment, eval design, and beta feedback — with compensation, transparent scope, and demonstrated influence on product decisions. Performative engagement (consultation after decisions) damages trust worse than none.",
      why: "PMs can't foresee all harm perspectives internally. External stakeholders surface blind spots — but only if engagement is structured with real decision influence.",
      paragraphs: [
        [
          s("Engage when impact is high and internal expertise is low. "),
          x(
            "Healthcare AI: engage clinicians and patient advocates. Hiring AI: engage HR ethics and candidate experience researchers. Consumer finance: engage financial counsellors.",
            "Engagement scope: review AIA, critique eval design, beta test with feedback loop.",
          ),
          s(" Not every feature needs external engagement — risk tier guides."),
        ],
        [
          s("Structure engagement for influence, not optics. "),
          x(
            "Good: paid advisory panel, shared eval criteria, public changelog of changes from feedback. Bad: one survey, no follow-up, ignored recommendations.",
            "PM documents how stakeholder input changed the product — accountability to participants.",
          ),
          s(" 'We consulted' without changes is performative — avoid."),
        ],
        [
          s("Domain experts complement community voices. "),
          x(
            "Clinicians catch clinical validity; patients catch usability and dignity harms. Both needed.",
            "PM budgets engagement: stipends, time, facilitation — not volunteer extraction.",
          ),
          s(" Compensated engagement respects participant expertise."),
        ],
      ],
      examples: [
        {
          title: "Patient advisory — changed default design",
          body: "Health symptom checker: patient advisors flagged that probabilistic language caused anxiety. PM changed default to conservative triage + clear 'see a doctor' CTA. Advisors saw change in beta; continued engagement. Influence demonstrated.",
        },
        {
          title: "Performative engagement backlash",
          body: "Company held one community listening session, ignored feedback, launched feature criticised for bias. NGO published criticism. PM rebuilt engagement as paid 6-month advisory with decision log. Trust repair took longer than doing it right first.",
        },
        {
          title: "Domain expert eval design",
          body: "Legal AI: practising attorneys helped design golden set including edge cases internal team missed (jurisdiction conflicts, stale precedent). Eval validity improved 20%. Expert engagement in eval design, not just marketing.",
        },
      ],
    }),
    buildSection({
      number: "8.8",
      title: "Internal AI ethics review boards",
      subtitle: "What they do, who sits on them, when they have veto power, and how to make them functional rather than ceremonial",
      take: "An AI ethics review board is a cross-functional body (legal, safety, external ethicist, PM representative, eng lead) that reviews high-risk AI impact assessments, can veto or conditionally approve releases, and publishes decision rationale. Functional boards have charter, quorum, SLA, and track record of real decisions — not annual meet-and-approve.",
      why: "Boards without veto power are theatre. Boards that review everything become bottlenecks. PMs who charter boards with clear scope and authority get useful governance without launch paralysis.",
      paragraphs: [
        [
          s("Board scope: high-risk and novel AI only. "),
          x(
            "High-risk per framework taxonomy + anything with external ethics controversy. Low-risk FAQ bots skip board — use lightweight AIA.",
            "Scope prevents board overload and maintains seriousness.",
          ),
          s(" PM routes items to board based on risk tier, not politics."),
        ],
        [
          s("Veto and conditional approval are real powers. "),
          x(
            "Outcomes: approve, approve with conditions (monitoring, usage limits), delay pending mitigation, reject.",
            "Conditions are tracked — PM reports compliance at re-review.",
          ),
          s(" Board decisions logged with rationale — institutional memory."),
        ],
        [
          s("Functional board cadence and composition. "),
          x(
            "Biweekly meeting, 5-person quorum, 10-business-day review SLA. Includes at least one member without revenue incentive (external advisor).",
            "Charter document: scope, powers, membership, SLA — approved by exec.",
          ),
          s(" Ceremonial board = leadership sign-off dressed as ethics."),
        ],
      ],
      examples: [
        {
          title: "Board conditional approval — monitoring required",
          body: "Emotion analytics in classroom tool: board approved with conditions — disaggregated age-group monitoring, parent opt-out, 90-day re-review. PM implemented conditions as launch requirements. Conditional approval model worked.",
        },
        {
          title: "Board reject — rare but decisive",
          body: "Social credit-style behaviour scoring for gig workers: board rejected after impact assessment. One of 40 reviews in 2 years. Rejection credibility made approval meaningful — not rubber stamp.",
        },
        {
          title: "Board reform after ceremonial phase",
          body: "Original board approved 100% of 12 items in year 1 — ceremonial. Reformed with external ethicist, veto charter, high-risk-only scope. Year 2: 3 conditional, 1 delay, 1 reject. PMs took board seriously after reform.",
        },
      ],
    }),
    buildSection({
      number: "8.9",
      title: "Responsible AI in vendor evaluation",
      subtitle: "The questions to ask third-party AI providers about their safety practices, training data, and incident disclosure",
      take: "Vendor responsible AI due diligence asks: training data provenance and consent, safety testing performed (red-team, bias eval), model card availability, incident history and disclosure policy, data handling (retention, subprocessors, training on your data), geographic compliance (EU AI Act readiness), and exit portability — before procurement, not after integration.",
      why: "Your product inherits vendor safety posture. PMs who skip vendor RAI diligence inherit undisclosed risks — and regulators hold you accountable for third-party AI in your product.",
      paragraphs: [
        [
          s("Vendor questionnaire covers six domains. "),
          x(
            "Data: what trained on, opt-out for customer data. Safety: eval methodology, red-team cadence. Transparency: model card, changelog on updates. Compliance: certifications, AI Act classification. Operations: incident SLA, support. Commercial: lock-in, export.",
            "PM adapts standard questionnaire; legal reviews data clauses.",
          ),
          s(" Score vendors; don't treat all APIs as interchangeable commodities."),
        ],
        [
          s("Model update notification is contractual. "),
          x(
            "Vendor silent model swap = your product behaviour changes without assessment. Contract clause: 30-day notice, re-eval right, rollback option.",
            "PM includes update notification in vendor scorecard.",
          ),
          s(" Silent updates are responsible AI anti-pattern in dependencies."),
        ],
        [
          s("Inherited risk documentation for your system card. "),
          x(
            "Your system card references vendor model card + your mitigations. 'Built on Vendor X model v3 — see attached vendor card; we add RAG grounding and human review.'",
            "Transparency chain: vendor → your system → customer.",
          ),
          s(" Gaps in vendor transparency limit your transparency — choose accordingly."),
        ],
      ],
      examples: [
        {
          title: "Vendor red-team report — procurement gate",
          body: "Enterprise required vendor red-team summary before API contract. Vendor A provided; Vendor B refused. Chose A despite 15% higher price. Vendor RAI diligence was procurement requirement, not nice-to-have.",
        },
        {
          title: "Silent model update — incident inherited",
          body: "Vendor updated model without notice; summarisation tone shifted to inappropriate informality in healthcare app. No contractual notice clause. PM added update notification to all vendor renewals. Inherited incident from vendor gap.",
        },
        {
          title: "Data training opt-out — negotiated",
          body: "PM negotiated contractual guarantee: customer data not used for vendor training. Legal clause + technical API setting. Vendor evaluation caught default opt-in policy. RAI vendor diligence protected customer trust.",
        },
      ],
    }),
    buildSection({
      number: "8.10",
      title: "PM decision lens: making responsible AI real",
      subtitle: "The three practices that separate teams with genuine responsible AI cultures from those with a PDF on a shared drive",
      take: "Three practices make responsible AI real: (1) impact assessment as launch gate for every AI feature, (2) model/system cards updated with every release, and (3) post-launch monitoring with disaggregated metrics and incident runbook. PMs who institutionalise these three — not 50-page policies — build cultures that operationalise ethics.",
      why: "Culture follows practice, not posters. PMs are the function that can embed all three in the product release process — making responsible AI the default path, not the exception.",
      paragraphs: [
        [
          s("Practice 1: no launch without completed AIA. "),
          x(
            "Jira release checklist: AIA link required field. Automated block without it. Right-sized AIA by risk tier.",
            "First practice to implement — highest harm prevention per hour invested.",
          ),
          s(" AIA gate is the cultural signal: we take harm seriously."),
        ],
        [
          s("Practice 2: model/system card per release. "),
          x(
            "Release artefact bundle: PRD version, eval results, model card, system card, AIA. Stored in searchable registry.",
            "Cards force performance honesty; registry builds institutional memory.",
          ),
          s(" Second practice — transparency becomes habitual."),
        ],
        [
          s("Practice 3: monitoring SLO + incident runbook live before GA. "),
          x(
            "GA checklist: online eval dashboard green, disaggregated views configured, runbook linked in on-call rotation.",
            "Third practice closes the loop — responsible AI doesn't end at launch.",
          ),
          s(" Three practices beat fifty principles. Start Monday."),
        ],
      ],
      examples: [
        {
          title: "Three practices in 30 days",
          body: "PM team implemented: AIA template in Notion, model card in release template, monitoring dashboard for first feature. No ethics board yet. First audited feature passed enterprise review. Three practices sufficient for culture start.",
        },
        {
          title: "PDF replaced by gates — team behaviour shifted",
          body: "Company had 40-page RAI policy unread. PM added three gates to release process. Eng asked 'where's AIA?' without prompting within 6 weeks. Practice changed behaviour; policy didn't.",
        },
        {
          title: "Responsible AI as competitive advantage",
          body: "Prospect chose company over competitor citing: public system cards, documented impact assessments, incident history transparency. Three practices were sales differentiator. RAI realness won deal — not ethics washing.",
        },
      ],
    }),
  ],
  quiz: [
    {
      q: "What distinguishes a Responsible AI framework from ethical principles alone?",
      options: [
        "Frameworks are only for large companies.",
        "Frameworks operationalise ethics through policies, processes, reviews, accountability, and metrics — not just statements.",
        "Principles are more important than frameworks.",
        "Frameworks replace the need for legal review.",
      ],
      correct: 1,
      correctFeedback:
        "Right. Frameworks turn principles into product gates, RACI, and monitoring — operational practice.",
      wrongFeedback:
        "Frameworks operationalise ethics via process and accountability. Re-read sections 8.1 and 8.2.",
    },
    {
      q: "When should an AI impact assessment (AIA) be completed for a high-risk feature?",
      options: [
        "After launch, during post-mortem.",
        "In discovery — before significant engineering investment.",
        "Only when a regulator asks.",
        "Never — AIAs slow innovation.",
      ],
      correct: 1,
      correctFeedback:
        "Exactly. High-risk AIAs in discovery can prevent building harmful features.",
      wrongFeedback:
        "High-risk AIAs belong in discovery, not launch week. Re-read section 8.3.",
    },
    {
      q: "What is the difference between a model card and a system card?",
      options: [
        "They are identical documents.",
        "Model card documents the model; system card documents the full product including retrieval, guardrails, and fallback.",
        "System cards are only for open-source models.",
        "Model cards are marketing documents only.",
      ],
      correct: 1,
      correctFeedback:
        "Right. Model card = model capabilities; system card = what users actually experience.",
      wrongFeedback:
        "Model cards cover the model; system cards cover the full system. Re-read section 8.4.",
    },
    {
      kind: "categorize",
      q: "Match each responsible AI practice to its primary purpose.",
      categories: ["Impact assessment", "Model/system card", "Ongoing monitoring", "Vendor due diligence"],
      items: [
        { text: "Evaluate harm potential and mitigations before launch.", category: 0 },
        { text: "Document capabilities, limitations, and disaggregated metrics.", category: 1 },
        { text: "Online eval and subgroup parity dashboards post-GA.", category: 2 },
        { text: "Questionnaire on training data, red-team, and update notification.", category: 3 },
        { text: "Residual risk sign-off by accountable approver.", category: 0 },
        { text: "Contractual opt-out for vendor training on customer data.", category: 3 },
      ],
      correctFeedback:
        "Right. AIA, cards, monitoring, and vendor diligence each own a distinct safety layer.",
      wrongFeedback:
        "Map practices to assessment, documentation, monitoring, and vendor diligence. Re-read sections 8.3–8.9.",
    },
    {
      q: "What makes an AI ethics review board functional rather than ceremonial?",
      options: [
        "It approves every AI feature regardless of risk.",
        "It meets annually and has no decision authority.",
        "It has clear scope, real veto/conditional approval power, and a track record of substantive decisions.",
        "It includes only engineering representatives.",
      ],
      correct: 2,
      correctFeedback:
        "Right. Functional boards have charter, scope, real authority, and substantive decisions.",
      wrongFeedback:
        "Functional boards have scope, veto power, and real decisions — not rubber stamps. Re-read section 8.8.",
    },
    {
      q: "What are the three practices that make responsible AI real according to the PM decision lens?",
      options: [
        "Publish ethics principles, hire a philosopher, and avoid all risk.",
        "Impact assessment as launch gate, model/system cards per release, post-launch monitoring with incident runbook.",
        "Only use open-source models.",
        "Outsource all safety to the model vendor.",
      ],
      correct: 1,
      correctFeedback:
        "Exactly. AIA gate, cards per release, and live monitoring — three practices over fifty principles.",
      wrongFeedback:
        "Three practices: AIA gate, cards, monitoring + runbook. Re-read section 8.10.",
    },
  ],
});
