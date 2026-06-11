import { buildChapter, buildSection, s, x, sectionWithDiagram } from "../concepts-pb4-helpers";

export const chapter05StressTestingAiStrategy = buildChapter({
  slug: "founder-stress-testing-ai-strategy",
  number: 5,
  shortTitle: "Stress-Testing AI Strategy",
  title: "Stress-Testing Your AI Strategy",
  readingMinutes: 20,
  summary:
    "The exercise most founders avoid because they are afraid of what they will find — attacking your own strategy before competitors and investors do it for you.",
  keyTakeaway:
    "A strategy that cannot survive red team scrutiny is a roadmap with optimism. Stress-testing is not pessimism — it is how you pivot early enough to still have runway.",
  pmCallout:
    "As a founder: if you are not embarrassed by the weaknesses your red team finds, you are not red-teaming hard enough. The goal is to break the strategy in a conference room, not in the market.",
  sections: [
    sectionWithDiagram({
      number: "5.1",
      title: "Why founders need to attack their own strategy",
      subtitle: "The arguments your best-funded competitor will make against you — in your absence",
      take: "Competitors will argue your wedge is thin, your data moat is imaginary, and your provider will subsume you — at every deal and in every investor meeting you are not in. Self-attack surfaces fixes while they are still cheap.",
      why: "Founders who only sell the vision lose quarters when the first serious objection arrives unprepared. Founders who pre-debunk objections close faster and pivot cleaner.",
      paragraphs: [
        [
          s("Optimism is a fundraising tool; falsification is a survival tool. "),
          x(
            "Pitch decks select for confidence. Strategy reviews should select for disconfirming evidence.",
            "The best founders can argue against themselves without losing conviction in the process.",
          ),
          s(" Attack your strategy to strengthen it, not to abandon it at first doubt."),
        ],
        [
          s("Self-attack is cheapest before code, customers, and ego attach. "),
          x(
            "Pre-product: pivot costs weeks. Post-Series A: pivot costs morale and valuation.",
            "Schedule adversarial reviews at seed, pre-A, and post major provider announcements.",
          ),
          s(" Calendar beats courage — put red team on the operating rhythm."),
        ],
        [
          s("Invite smart skeptics — not cheerleaders. "),
          x(
            "Board member from adjacent industry, technical advisor who owes you honesty, customer who chose a competitor.",
            "Cheerleading sessions feel good; skeptic sessions save companies.",
          ),
          s(" Your job is to extract the killer argument, not win the room."),
        ],
      ],
      examples: [
        {
          title: "Pre-seed red team — wedge killed kindly",
          body: "Advisor argued horizontal research assistant would be bundled in six months. Team stress-tested; could not pass defensibility test. Pivoted to patent prosecution wedge before hire #1. Attack saved nine months.",
        },
        {
          title: "Series A prep — investor objections pre-answered",
          body: "Founder documented three killer objections with data-backed responses in appendix. Partner said diligence felt unusually fast — because objections were pre-disarmed, not hidden.",
        },
        {
          title: "Avoidance cost — post-mortem",
          body: "CEO skipped red team for three quarters citing morale. Competitor launch validated exact weakness board had raised. Emergency pivot with 40% team reduction. Attack late is restructuring.",
        },
      ],
    }, {
      kind: "diagram",
      id: "founder-data-moat-layers",
      type: "nested",
      title: "Strategic Moat Layers",
      caption:
        "Distribution → proprietary data → model advantage. Strategy lives in the data loop.",
    }),
    sectionWithDiagram({
      number: "5.2",
      title: "The three killer questions for any AI strategy",
      subtitle: "What if the model gets commoditised? What if the data advantage never materialises? What if the incumbent builds it?",
      take: "Every AI strategy must survive three questions: commoditised capability, missing data moat, incumbent/native feature. If you have no good answer to any one, that is your top strategic risk — not a footnote.",
      why: "These three questions appear in every serious investment memo. Founders who answer them in the strategy doc control the narrative; founders who dodge them lose term sheets quietly.",
      paragraphs: [
        [
          s("Commoditisation: what remains when the model is free and native? "),
          x(
            "Name workflow, data, distribution, trust — specifically.",
            "'We will move faster' fails unless speed converts to accumulating assets.",
          ),
          s(" If nothing remains, you are building a feature timeline, not a company."),
        ],
        [
          s("Data advantage: what if signal volume or quality is below plan? "),
          x(
            "Define minimum viable labels, timeline, and bridge economics with human review.",
            "If data moat requires three years and runway is eighteen months, strategy mismatch.",
          ),
          s(" Data plans need contingencies, not hope."),
        ],
        [
          s("Incumbent builds it: what is your segment, integration, or liability moat? "),
          x(
            "Incumbents ship horizontal 80% solutions; you win the 20% they cannot ship without breaking their suite.",
            "Regulated workflows and change management are moats incumbents dislike.",
          ),
          s(" Practice answering with customer names and contracts, not adjectives."),
        ],
      ],
      examples: [
        {
          title: "Commoditisation answer — audit trails",
          body: "Contract AI startup answered: 'When summarisation is free, we own obligation tracking, signatory authority checks, and SOC2 audit exports customers' GCs require.' Specific remainder beyond commoditised capability.",
        },
        {
          title: "Data moat miss — contingency",
          body: "Override rate stayed high; labels slower than plan. Contingency activated: narrow to one document type to increase label density, pause expansion. Stress test beforehand defined trigger — avoided panic.",
        },
        {
          title: "Incumbent build — manufacturing maintenance",
          body: "Incumbent CMMS added generic AI assist. Startup won on OEM-specific manuals, union safety rules, and offline plant floor deployment. Incumbent question answered with segments, not denial.",
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
      title: "Red team exercise — running it properly",
      subtitle: "How to structure a genuine strategic stress test, not a validation exercise",
      take: "A real red team assigns people to destroy the strategy, gives them data and time, forbids the CEO from defending for the first hour, and produces written kill shots with severity scores — not a brainstorming session that ends with applause.",
      why: "Fake red teams are worse than none — they create false confidence. Structure and psychological safety for attackers determine whether you learn anything.",
      paragraphs: [
        [
          s("Assign roles: attacker, defender, facilitator, scribe. "),
          x(
            "Attackers prepare objections with evidence — competitor roadmaps, customer churn reasons, unit economics.",
            "CEO listens first; defends second with prepped data only.",
          ),
          s(" Role separation prevents performative agreement."),
        ],
        [
          s("Use a standard agenda: wedge, moat, loop, economics, provider risk. "),
          x(
            "Each section: best case for company, best case against, evidence, severity 1–5.",
            "Kill shots scoring 4–5 need mitigation owners and dates.",
          ),
          s(" Output is a risk register tied to strategy, not meeting notes."),
        ],
        [
          s("Repeat after major external shocks. "),
          x(
            "Provider launch, pricing change, regulatory shift, competitor fundraise.",
            "Triggers beat annual calendar — AI markets move faster than yearly offsites.",
          ),
          s(" Red team is a living process, not a one-off retreat."),
        ],
      ],
      examples: [
        {
          title: "Structured red team — legal AI",
          body: "Attackers spent a week on competitor demos and customer loss reasons. Produced five kill shots; two scored 5 (data exclusivity, firm switching). Mitigation: exclusive corpus deal and per-firm personalisation sprint. Real exercise, real allocation shift.",
        },
        {
          title: "Fake red team detected",
          body: "Session ended with 'risks noted' but no owners or scores. Board insisted on rewrite. Next session with external facilitator produced actionable register. Structure mattered more than intent.",
        },
        {
          title: "Post-OpenAI launch red team",
          body: "Within 72 hours of provider feature launch, team red-teamed overlap. Killed two roadmap items, doubled down on ERP embedding. Speed of red team response preserved NRR.",
        },
      ],
    }),
    buildSection({
      number: "5.4",
      title: "Scenario planning for AI strategy",
      subtitle: "The three futures you must plan for simultaneously — and what you do differently in each",
      take: "Plan three futures in parallel: capability accelerates faster than expected, capability stalls or regresses, and regulatory or incumbent shock reshapes distribution. Each scenario changes wedge emphasis, moat investment, and burn.",
      why: "Single-track strategy assumes one world. Scenario planning preserves optionality and pre-commits triggers so leadership does not debate basics during crises.",
      paragraphs: [
        [
          s("Scenario A — faster commoditisation (most common). "),
          x(
            "Triggers: provider price cuts, native features, open-weight parity.",
            "Response: accelerate workflow moat, cut feature layer spend, reprice on value in embedded workflows.",
          ),
          s(" Most startups under-plan this scenario despite history."),
        ],
        [
          s("Scenario B — capability plateau or trust crisis. "),
          x(
            "Triggers: model regressions, hallucination scandals, regulatory pause.",
            "Response: human-in-the-loop economics, conservative marketing, compliance as sales asset.",
          ),
          s(" Plateau scenarios favour trust and vertical liability moats."),
        ],
        [
          s("Scenario C — distribution shock. "),
          x(
            "Triggers: suite bundling, channel partner loss, macro budget freeze.",
            "Response: niche down, partner up, or merge — per competitive response playbook.",
          ),
          s(" Document scenario triggers on the same page as financial plan."),
        ],
      ],
      examples: [
        {
          title: "Three-scenario budget model",
          body: "CFO built burn plans for A/B/C with hiring gates. When Scenario A hit (API price war), company already had approved playbook to shift 30% eng to integrations. Scenario planning reduced emergency layoff risk.",
        },
        {
          title: "Trust crisis Scenario B",
          body: "Healthcare AI vendor saw sector-wide hallucination scare. Pre-written Scenario B activated: marketing pivoted to oversight features, sales led with audit logs. Won deals while horizontal tools froze.",
        },
        {
          title: "Distribution shock Scenario C",
          body: "Primary SI partner acquired competitor. Scenario C triggered pivot to direct enterprise sales in two verticals only. Smaller TAM, higher control — pre-agreed tradeoff.",
        },
      ],
    }),
    buildSection({
      number: "5.5",
      title: "Pivoting AI strategy without losing the team",
      subtitle: "How to change direction when the stress test reveals a real problem",
      take: "Strategic pivots fail on communication, not analysis. Teams accept pivots when leaders name evidence, preserve earned assets, assign clear owners, and distinguish mission (customer problem) from mechanism (current wedge).",
      why: "Founders who hide pivot reasons lose trust; founders who over-pivot on every red team lose focus. Transparent criteria for strategic change keeps morale and investor confidence.",
      paragraphs: [
        [
          s("Separate mission from wedge. "),
          x(
            "Mission: reduce clinician documentation burden. Wedge: ambient scribe for orthopedics.",
            "Pivoting wedge while holding mission preserves meaning for the team.",
          ),
          s(" Teams rally around problems; they tolerate wedge changes when logic is clear."),
        ],
        [
          s("Inventory reusable assets before pivot. "),
          x(
            "Integrations, labels, customer relationships, compliance work — often portable to new wedge.",
            "Narrative: 'we are not starting over; we are redirecting assets.'",
          ),
          s(" Asset inventory reduces pivot feeling like failure."),
        ],
        [
          s("Communicate with evidence and new milestones. "),
          x(
            "Share red team kill shots that triggered pivot — sanitized for morale if needed.",
            "Publish 90-day milestones for new wedge validation.",
          ),
          s(" Investors prefer fast evidenced pivots to slow silent bleeding."),
        ],
      ],
      examples: [
        {
          title: "Wedge pivot with asset reuse",
          body: "Legal summarisation pivoted to litigation discovery review. Kept firm integrations and security certifications; discarded generic summarisation UI. Team saw 60% engineering carryover — morale held.",
        },
        {
          title: "Bad pivot communication",
          body: "CEO announced 'new vision' without red team context. Team interpreted as whim; two senior engineers left. Re-communicated with evidence; damage partially repaired but velocity lost a quarter.",
        },
        {
          title: "Investor-aligned pivot",
          body: "Lead investor attended red team readout. Pivot to vertical moat received support and bridge terms because logic was shared live — not revealed after missed targets.",
        },
      ],
    }),
    buildSection({
      number: "5.6",
      title: "Founder decision lens: the strategy review cadence",
      subtitle: "How often to revisit your AI strategy and what triggers an emergency review",
      take: "Run light strategy review monthly (metrics vs assumptions), full red team quarterly, and emergency review within 72 hours of provider launches, competitor mega-rounds, or NRR shocks. Cadence turns strategy into a living system.",
      why: "Annual strategy is obsolete in AI. Cadence without triggers misses shocks; triggers without cadence produce chaos. Founders need both.",
      paragraphs: [
        [
          s("Monthly light review: leading indicators only. "),
          x(
            "Labels per account, override rate, inference cost per outcome, expansion revenue, moat score movement.",
            "Compare to strategy one-pager assumptions — variance explained, not ignored.",
          ),
          s(" Fifteen minutes in leadership meeting — not a full offsite."),
        ],
        [
          s("Quarterly full review: wedge, moat, loop, scenarios. "),
          x(
            "Update one-pager, rerun four tests on wedge, refresh Five Forces, score red team mitigations.",
            "Board receives delta, not a 40-page rehash.",
          ),
          s(" Quarterly rhythm matches fundraising and budget cycles."),
        ],
        [
          s("Emergency triggers — non-negotiable. "),
          x(
            "Provider native feature overlap >50% of core value, NRR drop >10 points in embedded cohort, or regulatory reclassification of your use case.",
            "These emergency triggers demand immediate strategy review — output is hold, pivot, or double-down with a dated decision.",
          ),
          s(" Emergency review output: hold, pivot, or double-down with dated decision."),
        ],
      ],
      examples: [
        {
          title: "Monthly metric variance caught data miss",
          body: "Labels per account flat for two months while roadmap assumed 20% growth. Light review triggered data pipeline audit before quarterly board — fixed logging bug, avoided embarrassing board surprise.",
        },
        {
          title: "Emergency review post-provider launch",
          body: "Within 48 hours of native agent announcement, leadership held emergency session. Decision: hold enterprise vertical agents, kill SMB self-serve agent builder. Cadence prevented drift.",
        },
        {
          title: "Quarterly one-pager delta",
          body: "CEO sent one-page strategy delta to board: moat score data 2→3, switching 3→4, new competitor noted, mitigation on track. Directors cited clarity as reason for pro-rata.",
        },
      ],
    }),
  ],
  quiz: [
    {
      q: "What is the primary purpose of founders attacking their own AI strategy?",
      options: [
        "To reduce team morale before fundraising.",
        "To surface killer arguments and fix strategic weaknesses while pivot is still cheap.",
        "To replace strategy with pessimism.",
        "To avoid talking to customers.",
      ],
      correct: 1,
      correctFeedback:
        "Right. Self-attack strengthens strategy before competitors and investors exploit gaps. Re-read section 5.1.",
      wrongFeedback:
        "Stress-testing finds weaknesses early — not to abandon strategy at first doubt. Re-read section 5.1.",
    },
    {
      kind: "order",
      q: "Order the three killer questions by the order they should be explicitly answered in your strategy doc (any order is acceptable if all are answered — but this is the chapter's priority stack).",
      prompt: "Drag to match the chapter's three killer questions (top to bottom).",
      items: [
        "What if the model gets commoditised?",
        "What if the data advantage never materialises?",
        "What if the incumbent or provider builds it natively?",
      ],
      correctFeedback:
        "Right. All three must have explicit answers — commoditisation, data moat, incumbent response. Re-read section 5.2.",
      wrongFeedback:
        "The three killer questions cover commoditisation, data moat, and incumbent/provider response. Re-read section 5.2.",
    },
    {
      q: "Which is a sign of a FAKE red team exercise?",
      options: [
        "Assigned attackers, severity scores, and mitigation owners.",
        "Session ends with 'risks noted' but no scored kill shots or owners.",
        "CEO listens before defending.",
        "External skeptic invited.",
      ],
      correct: 1,
      correctFeedback:
        "Right. Fake red teams create false confidence without actionable output. Re-read section 5.3.",
      wrongFeedback:
        "Real red teams produce scored kill shots and owners — not vague notes. Re-read section 5.3.",
    },
    {
      kind: "categorize",
      q: "Match each event to the appropriate strategy review type.",
      categories: ["Monthly light review", "Emergency review (72h)"],
      items: [
        { text: "Override rate flat two months vs plan.", category: 0 },
        { text: "Foundation provider launches native feature overlapping core product.", category: 1 },
        { text: "Labels per account trending below assumption.", category: 0 },
        { text: "Competitor raises $100M targeting your wedge.", category: 1 },
      ],
      correctFeedback:
        "Right. Metric variance monthly; external shocks trigger emergency review within 72 hours. Re-read section 5.6.",
      wrongFeedback:
        "Leading indicator drift = monthly; major external shocks = emergency review. Re-read section 5.6.",
    },
    {
      q: "When a stress test reveals a serious wedge problem, the best pivot communication emphasizes:",
      options: [
        "Hiding weaknesses to protect morale.",
        "Mission continuity, reusable assets, evidence for change, and new 90-day milestones.",
        "Blaming the market.",
        "Immediate layoffs without context.",
      ],
      correct: 1,
      correctFeedback:
        "Right. Transparent, asset-aware pivots preserve team trust. Re-read section 5.5.",
      wrongFeedback:
        "Teams accept pivots with evidence, mission clarity, and reusable assets — not secrecy. Re-read section 5.5.",
    },
    {
      q: "Scenario A in this chapter (faster commoditisation) most likely triggers which response?",
      options: [
        "Accelerate workflow moat investment and cut thin feature-layer spend.",
        "Train a foundation model immediately.",
        "Stop all compliance work.",
        "Assume pricing power increases as models commoditise.",
      ],
      correct: 0,
      correctFeedback:
        "Right. Faster commoditisation pushes value to workflow, data, and embedded moats. Re-read section 5.4.",
      wrongFeedback:
        "When capabilities commoditise faster, deepen moats outside raw model features. Re-read section 5.4.",
    },
  ],
});
