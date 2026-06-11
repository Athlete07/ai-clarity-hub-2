import type { ExecutiveKb } from "./executive-kb";
import { withTrackOrder } from "./executive-kb";

const BUSINESS_LEADER_EXECUTIVE_KBS_DATA: Omit<ExecutiveKb, "order">[] = [
  {
    id: "ai-fundamentals-for-business-leaders",
    title: "AI Fundamentals for Business Leaders",
    subtitle: "Technical fluency for leaders who own outcomes, not model weights.",
    description:
      "The AI hierarchy, cost lines, data as asset, evaluation, liability, and vendor landscape — explained for business leaders making budget, risk, and vendor decisions across their function.",
    difficulty: "Intermediate",
    readingMinutes: 192,
    topics: [
      "AI vs ML vs DL (business lens)",
      "How models learn & what it means for your function",
      "Training vs inference — the cost conversation",
      "Data as business asset",
      "Probability & confidence — managing AI risk",
      "Model evaluation for non-technical leaders",
      "Bias & hallucination — organisational liability",
      "AI landscape & vendor market structure",
    ],
    sequence: [
      {
        slug: "bl-ai-vs-ml-vs-dl-business-lens",
        note: "AI ⊃ ML ⊃ DL — the business lens for evaluating vendor claims, board vocabulary, and the three questions before procurement moves forward.",
      },
      {
        slug: "bl-how-models-learn-for-function",
        note: "Training, parameters, overfitting, and fine-tuning in plain language — plus the vendor diligence questions about data provenance and domain coverage.",
      },
      {
        slug: "bl-training-vs-inference-cost",
        note: "CapEx vs OpEx, per-query inference at scale, API vs self-hosted, and how to frame the AI cost conversation with your CFO.",
      },
      {
        slug: "bl-data-as-business-asset",
        note: "Why data — not the model — is the moat. Audit your function's data, flywheels, ownership rights, and treat data strategy as business strategy.",
      },
      {
        slug: "bl-probability-confidence-ai-risk",
        note: "AI outputs are bets, not answers. Threshold setting, human-in-the-loop, and why your risk appetite — not your data scientist's — sets the action line.",
      },
      {
        slug: "bl-model-evaluation-leaders",
        note: "Precision, recall, baselines, and business metrics — how to commission an evaluation you can trust before you approve the business case.",
      },
      {
        slug: "bl-bias-hallucination-liability",
        note: "Bias in high-stakes decisions, disaggregated reporting, hallucination in legal and financial contexts, and putting both on the board risk register.",
      },
      {
        slug: "bl-ai-landscape-vendor-structure",
        note: "Foundation models, cloud stacks, application vendors, open vs proprietary, consolidation risk — navigating the market as a buyer with leverage.",
      },
    ],
  },
  {
    id: "ai-strategy-for-business-leaders",
    title: "AI Strategy for Business Leaders",
    subtitle: "From opportunity assessment to a roadmap your CEO and board will fund.",
    description:
      "Identify, prioritise, and sequence AI initiatives in your function — with frameworks for ROI ranking, build vs buy vs partner, and presenting strategy without overpromising.",
    difficulty: "Intermediate",
    readingMinutes: 242,
    topics: [
      "AI opportunity assessment framework",
      "Identifying AI use cases in your function",
      "Prioritising AI initiatives by ROI",
      "Build vs buy vs partner decision",
      "AI roadmap for non-technical leaders",
      "Aligning AI strategy with business strategy",
      "Quick wins vs long-term bets",
      "AI strategy presentation for board & CEO",
      "Avoiding AI initiative failure",
      "AI strategy review cadence",
      "Stakeholder management & internal politics",
    ],
    sequence: [
      {
        slug: "bl-ai-opportunity-assessment",
        note: "Value-feasibility matrix, process mapping, automation suitability test, and turning assessment output into a prioritised shortlist.",
      },
      {
        slug: "bl-identifying-ai-use-cases",
        note: "Automation vs augmentation vs acceleration, discovery workshops, effort-frequency matrix, and validating demand before you commit.",
      },
      {
        slug: "bl-prioritising-ai-by-roi",
        note: "Initiative scoring model, dependency mapping, portfolio thinking, saying no, and presenting the prioritised portfolio to the executive team.",
      },
      {
        slug: "bl-build-buy-partner",
        note: "Real costs of building, buying, and partnering — when each path wins, the hybrid reality, and the five-question sourcing framework.",
      },
      {
        slug: "bl-ai-roadmap-non-technical",
        note: "Discover → validate → pilot → productionise → scale → monitor. Gate on outcomes, not dates, and own the roadmap as a business leader.",
      },
      {
        slug: "bl-aligning-ai-business-strategy",
        note: "Map every AI initiative to a named strategic objective. AI as enabler, not strategy — and the annual review that keeps alignment honest.",
      },
      {
        slug: "bl-quick-wins-vs-long-term",
        note: "Credibility from early wins vs foundation for transformation. Sequence quick wins to fund long-term bets and balance the portfolio to your risk tolerance.",
      },
      {
        slug: "bl-ai-strategy-board-presentation",
        note: "Context → opportunity → portfolio → investment → risk → governance → ask. Lead with business outcomes and prepare for the questions you dread.",
      },
      {
        slug: "bl-avoiding-ai-initiative-failure",
        note: "Pilot trap, data underestimation, change neglect, vendor over-reliance — run a pre-mortem before launch while there is still time to fix.",
      },
      {
        slug: "bl-ai-strategy-review-cadence",
        note: "Quarterly AI review, leading indicators, portfolio honesty, and building the governance rhythm that makes strategy a living document.",
      },
      {
        slug: "bl-stakeholder-management-ai-politics",
        note: "CFO, CHRO, CTO relationships, managing blockers, building the AI coalition — political capital as an asset that determines whether strategy executes.",
      },
    ],
  },
  {
    id: "ai-roi-business-case-development",
    title: "AI ROI & Business Case Development",
    subtitle: "Build the numbers your CFO will actually sign off on.",
    description:
      "Measure hard and soft ROI, establish baselines, size investments, and track attribution after deployment — so AI projects survive budget scrutiny beyond the pilot.",
    difficulty: "Intermediate",
    readingMinutes: 220,
    topics: [
      "How to measure AI ROI",
      "Cost-benefit framework for AI projects",
      "Productivity gains vs revenue gains",
      "Hard ROI vs soft ROI in AI",
      "Building the AI business case",
      "Baseline measurement before AI",
      "Attribution problem in AI projects",
      "AI investment sizing",
      "Presenting AI ROI to CFO",
      "Tracking ROI post-deployment",
    ],
    sequence: [
      {
        slug: "bl-measuring-ai-roi",
        note: "Input, output, and outcome metrics — productivity, revenue, cost reduction, and quality ROI with the right measurement horizon.",
      },
      {
        slug: "bl-cost-benefit-framework-ai",
        note: "Full cost inventory, sensitivity analysis, payback period — build the model as a decision tool before you are committed.",
      },
      {
        slug: "bl-productivity-vs-revenue-gains",
        note: "Different evidence standards for productivity vs revenue. The headcount question, redeployment value, and leading with the stronger case.",
      },
      {
        slug: "bl-hard-vs-soft-roi-ai",
        note: "Monetise soft ROI, risk reduction as insurance, strategic optionality — present both hard and soft returns credibly to the CFO.",
      },
      {
        slug: "bl-building-ai-business-case",
        note: "Problem-first structure, baseline, comparator case, phased investment, risk disclosure, and the precision that turns conversation into decision.",
      },
      {
        slug: "bl-baseline-measurement-before-ai",
        note: "You cannot claim ROI on what you did not measure. Make pre-deployment baseline a mandatory governance gate.",
      },
      {
        slug: "bl-attribution-problem-ai",
        note: "RCTs, quasi-experiments, and good-enough attribution — design the comparison structure before launch, not retrospectively.",
      },
      {
        slug: "bl-ai-investment-sizing",
        note: "Full investment inventory, phased sizing, contingency, year-two costs — present a structure that secures commitment without surprise.",
      },
      {
        slug: "bl-presenting-ai-roi-cfo",
        note: "NPV, payback, ranges not point estimates, phased commitment ask — the CFO meeting preparation checklist.",
      },
      {
        slug: "bl-tracking-roi-post-deployment",
        note: "ROI dashboard, escalation thresholds, gap analysis, and embedding post-deployment measurement in programme governance.",
      },
    ],
  },
  {
    id: "ai-vendor-evaluation-procurement",
    title: "AI Vendor Evaluation & Procurement",
    subtitle: "Evaluate vendors, run pilots, and negotiate contracts that protect your function.",
    description:
      "RFP design, due diligence checklists, red flags in vendor pitches, SLA and data-privacy clauses, lock-in risk, and scaling from pilot to enterprise deployment.",
    difficulty: "Intermediate",
    readingMinutes: 240,
    topics: [
      "AI vendor landscape by function",
      "RFP process for AI vendors",
      "Due diligence checklist for AI vendors",
      "Red flags in AI vendor pitches",
      "Contract terms every business leader must negotiate",
      "SLA standards for AI products",
      "Data privacy clauses",
      "Vendor lock-in risk",
      "Pilot design & success criteria",
      "Scaling from pilot to enterprise deployment",
    ],
    sequence: [
      {
        slug: "bl-ai-vendor-landscape-by-function",
        note: "Categories before names — finance, HR, marketing, sales, ops, and legal vendor maps. Start with problem category, not vendor shortlist.",
      },
      {
        slug: "bl-rfp-process-ai-vendors",
        note: "Capability requirements in outcome terms, proof-of-concept on your data, reference mandates, and evaluation without losing momentum.",
      },
      {
        slug: "bl-due-diligence-ai-vendors",
        note: "Technical, security, financial, compliance, reference, roadmap, and integration diligence — depth calibrated by risk tier.",
      },
      {
        slug: "bl-red-flags-ai-vendor-pitches",
        note: "Demo-only vendors, vague accuracy claims, reference avoidance, capability inflation — use red flags as negotiating leverage.",
      },
      {
        slug: "bl-contract-terms-ai-leaders",
        note: "Performance SLAs, data ownership, training opt-out, audit rights, price protection, exit terms, and liability allocation.",
      },
      {
        slug: "bl-sla-standards-ai-products",
        note: "Uptime, accuracy, latency percentiles, drift monitoring, incident response — which SLA terms to prioritise by initiative type.",
      },
      {
        slug: "bl-data-privacy-clauses-ai",
        note: "DPAs, residency, retention, sub-processors, breach notification — make GDPR assessment a mandatory procurement gate.",
      },
      {
        slug: "bl-vendor-lock-in-risk",
        note: "Data and model portability, multi-vendor architecture, contractual protections — when deep integration is an acceptable tradeoff.",
      },
      {
        slug: "bl-pilot-design-success-criteria",
        note: "Structured experiment, not vendor showcase. Success criteria before start, representative users, stress tests, and the go/no-go review.",
      },
      {
        slug: "bl-scaling-pilot-enterprise",
        note: "Scale-up assessment, integration at scale, change management programme, governance, commercial renegotiation, and phased rollout.",
      },
    ],
  },
  {
    id: "ai-team-talent-strategy",
    title: "AI Team & Talent Strategy",
    subtitle: "Close the skills gap and drive adoption without becoming an HR project.",
    description:
      "Upskilling vs hiring, the AI roles your function must understand, change management, literacy programmes, champion networks, and measuring adoption across teams.",
    difficulty: "Intermediate",
    readingMinutes: 240,
    topics: [
      "AI skills gap assessment",
      "Upskilling vs hiring — the real tradeoff",
      "AI roles every function needs to understand",
      "Working effectively with AI engineers",
      "Building an AI centre of excellence",
      "Change management for AI adoption",
      "AI literacy programme design",
      "Measuring AI adoption across teams",
      "Resistance to AI — root causes & solutions",
      "AI champion network",
    ],
    sequence: [
      {
        slug: "bl-ai-skills-gap-assessment",
        note: "Skills taxonomy, assessment methods, champion identification, and turning the gap into upskill vs hire vs automate decisions.",
      },
      {
        slug: "bl-upskilling-vs-hiring-ai",
        note: "What training can achieve vs what requires hiring. Cost, speed, culture, and attrition risk in the talent strategy.",
      },
      {
        slug: "bl-ai-roles-function-leaders",
        note: "AI translator, data scientist vs ML engineer, prompt engineers, MLOps, responsible AI leads — which roles you need and when.",
      },
      {
        slug: "bl-working-with-ai-engineers",
        note: "Clear problem definitions, useful feedback, realistic estimates, and the operating model that produces outcomes not meetings.",
      },
      {
        slug: "bl-building-ai-centre-excellence",
        note: "Centralised vs federated CoE, what belongs centrally vs in the function, resourcing, and measuring CoE value.",
      },
      {
        slug: "bl-change-management-ai-adoption",
        note: "ADKAR for AI, stakeholder segmentation, manager enablement, workflow redesign, and sizing change management as success criterion.",
      },
      {
        slug: "bl-ai-literacy-programme-design",
        note: "Tiered curriculum by role, modalities that change behaviour, content refresh cadence, and literacy in onboarding.",
      },
      {
        slug: "bl-measuring-ai-adoption-teams",
        note: "Usage vs quality of use, team-level variation, adoption plateau diagnosis, and instrumentation from day one.",
      },
      {
        slug: "bl-resistance-to-ai",
        note: "Job security, skill obsolescence, trust deficit — match intervention to root cause, and treat resistance as signal when warranted.",
      },
      {
        slug: "bl-ai-champion-network",
        note: "Recruit, equip, and sustain peer champions. Feedback loops, community infrastructure, and adoption ROI that justifies the investment.",
      },
    ],
  },
  {
    id: "ai-risk-compliance-governance-leaders",
    title: "AI Risk, Compliance & Governance",
    subtitle: "Governance frameworks that satisfy legal, audit, and the board.",
    description:
      "EU AI Act implications by function, GDPR in AI projects, bias liability, explainability requirements, risk registers, third-party AI risk, and incident response when models fail.",
    difficulty: "Advanced",
    readingMinutes: 240,
    topics: [
      "EU AI Act implications by function",
      "Data privacy & GDPR in AI projects",
      "Bias & discrimination liability",
      "AI audit & explainability requirements",
      "Minimum viable AI governance framework",
      "AI risk register",
      "Third-party AI risk management",
      "Board reporting on AI risk",
      "Incident response for AI failures",
      "Ethical AI policy design",
    ],
    sequence: [
      {
        slug: "bl-eu-ai-act-by-function",
        note: "Risk tiers, prohibited uses, high-risk obligations in HR and finance — your function-level compliance gap and roadmap.",
      },
      {
        slug: "bl-gdpr-ai-projects",
        note: "Lawful basis, Article 22 automated decisions, DPIAs, data minimisation — GDPR as a mandatory procurement gate.",
      },
      {
        slug: "bl-bias-discrimination-liability",
        note: "Direct vs indirect discrimination, disparate impact, vendor liability reality, and bias on the risk register.",
      },
      {
        slug: "bl-ai-audit-explainability",
        note: "Legal explainability obligations, audit trails, explainability-accuracy tradeoff, and explainability as deployment criterion.",
      },
      {
        slug: "bl-minimum-viable-ai-governance",
        note: "Risk classification, pre-deployment review, accountability, policies, and proportionate governance without bureaucratic drag.",
      },
      {
        slug: "bl-ai-risk-register",
        note: "Six risk categories, dynamic updates, enterprise risk linkage, and the register as board reporting tool.",
      },
      {
        slug: "bl-third-party-ai-risk",
        note: "Third-party inventory, ongoing monitoring, contractual transfer, supply chain AI, and procurement standards.",
      },
      {
        slug: "bl-board-reporting-ai-risk",
        note: "Material exposure, governance adequacy, fiduciary duty, audit committee questions — genuine oversight not reassurance.",
      },
      {
        slug: "bl-incident-response-ai-failures",
        note: "Detection, containment, regulatory notification, root cause, and tabletop exercises before the incident occurs.",
      },
      {
        slug: "bl-ethical-ai-policy-design",
        note: "Beyond legal compliance — principles into policies, ethics review process, and organisational character under pressure.",
      },
    ],
  },
  {
    id: "ai-transformation-by-function",
    title: "AI Transformation by Function",
    subtitle: "What AI looks like in finance, HR, marketing, sales, ops, and beyond.",
    description:
      "Function-specific AI use cases, cross-functional dependencies, and how to measure transformation progress when every department moves at a different pace.",
    difficulty: "Intermediate",
    readingMinutes: 240,
    topics: [
      "AI in finance & CFO office",
      "AI in HR & people function",
      "AI in marketing & growth",
      "AI in sales & revenue",
      "AI in operations & supply chain",
      "AI in customer service",
      "AI in legal & compliance",
      "AI in product & engineering",
      "Cross-functional AI dependencies",
      "Measuring transformation progress",
    ],
    sequence: [
      {
        slug: "bl-ai-in-finance-cfo-office",
        note: "Close automation, FP&A forecasting, AP/AR, fraud detection — and the CFO as AI governance and ROI owner.",
      },
      {
        slug: "bl-ai-in-hr-people-function",
        note: "Talent acquisition liability, L&D personalisation, workforce analytics — elevated ethics for decisions about people.",
      },
      {
        slug: "bl-ai-in-marketing-growth",
        note: "Content at scale, personalisation, campaign optimisation — brand and quality control when generative AI accelerates output.",
      },
      {
        slug: "bl-ai-in-sales-revenue",
        note: "Forecasting, lead scoring, conversation intelligence, retention — sequence credibility before generative tools.",
      },
      {
        slug: "bl-ai-in-operations-supply-chain",
        note: "Demand forecasting, predictive maintenance, quality control, process mining — industrial AI with the deepest ROI evidence.",
      },
      {
        slug: "bl-ai-in-customer-service",
        note: "Deflection economics, agent assistance, human-AI handoff design, and the business case that protects CSAT.",
      },
      {
        slug: "bl-ai-in-legal-compliance",
        note: "Contract analysis, regulatory monitoring, e-discovery — accuracy requirements and privilege implications.",
      },
      {
        slug: "bl-ai-in-product-engineering-leaders",
        note: "AI in the product vs AI for development, feature investment decisions, and joint CPO-CTO investment framework.",
      },
      {
        slug: "bl-cross-functional-ai-dependencies",
        note: "Shared data, model reuse, cross-functional conflicts, customer-facing consistency, and integration tax.",
      },
      {
        slug: "bl-measuring-transformation-progress",
        note: "Activity, adoption, quality, and outcome layers — function scorecards, leading indicators, and transformation accountability.",
      },
    ],
  },
  {
    id: "leading-through-ai-change",
    title: "Leading Through AI Change",
    subtitle: "Change management for leaders when AI reshapes how your team works.",
    description:
      "Why AI transformations fail, honest communication, managing fear and resistance, redefining roles, workforce planning, psychological safety, and sustaining momentum beyond the pilot.",
    difficulty: "Intermediate",
    readingMinutes: 220,
    topics: [
      "Why AI transformations fail",
      "Change management framework for AI",
      "Communicating AI to your team honestly",
      "Managing fear & resistance",
      "Redefining roles in an AI-augmented team",
      "AI and workforce planning",
      "Building psychological safety around AI",
      "Leading by example on AI adoption",
      "AI transformation milestones",
      "Sustaining AI momentum beyond the pilot",
    ],
    sequence: [
      {
        slug: "bl-why-ai-transformations-fail",
        note: "Strategy without execution, technology without adoption, pilots that don't scale — use the failure catalogue as pre-mortem checklist.",
      },
      {
        slug: "bl-change-management-framework-ai",
        note: "Kotter and ADKAR applied to AI — coalition building, honest urgency, quick wins, and anchoring change in culture.",
      },
      {
        slug: "bl-communicating-ai-honestly",
        note: "Will my job change? Will I be supported? Does leadership know what it is doing? — sustained narrative through setbacks.",
      },
      {
        slug: "bl-managing-fear-resistance",
        note: "Acknowledge uncertainty, segment resistors, honour legitimate pushback, and resource fear management at scale.",
      },
      {
        slug: "bl-redefining-roles-ai-augmented",
        note: "Role impact assessment, judgment-based work, career paths, expansion vs elimination — deliberate design not reactive cuts.",
      },
      {
        slug: "bl-ai-workforce-planning",
        note: "Scenario-based planning, skills-based headcount, make-buy-borrow-bot, and redeployment when AI shifts demand.",
      },
      {
        slug: "bl-psychological-safety-ai",
        note: "Leader behaviour signals safety. Normalise failure, reward experimentation, and address public failures gracefully.",
      },
      {
        slug: "bl-leading-by-example-ai",
        note: "Visible personal AI practice, sharing your failures, staying current — authenticity over compliance theatre.",
      },
      {
        slug: "bl-ai-transformation-milestones",
        note: "Foundation, adoption, capability, outcome, governance, and culture milestones — named owners and timelines.",
      },
      {
        slug: "bl-sustaining-ai-momentum",
        note: "Momentum decay, funding continuity, leadership succession, second-generation use cases, and transformation as permanent operating mode.",
      },
    ],
  },
];

export const BUSINESS_LEADER_EXECUTIVE_KBS: ExecutiveKb[] = withTrackOrder(
  BUSINESS_LEADER_EXECUTIVE_KBS_DATA,
);
