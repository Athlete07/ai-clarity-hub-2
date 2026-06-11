import { buildChapter, buildSection, s, x, sectionWithDiagram } from "../concepts-pb4-helpers";

export const chapter03AiMetricsInvestors = buildChapter({
  slug: "founder-ai-metrics-investors",
  number: 3,
  shortTitle: "AI Metrics Investors",
  title: "AI Metrics Investors Actually Care About",
  readingMinutes: 30,
  summary:
    "Not DAU and MRR alone — the metrics that prove your AI thesis is compounding and what to have live before Series A.",
  keyTakeaway:
    "Revenue tells investors what happened. AI metrics tell them what will happen. Model improvement rate, data accumulation, override rate, task completion, AI-attributed revenue, and loop velocity are the leading indicators partners price into memos.",
  pmCallout:
    "As a founder: build the AI metrics dashboard before the fundraise dashboard. If you enter Series A with only MRR and a demo, investors classify you as SaaS — regardless of your pitch deck adjectives.",
  sections: [
    sectionWithDiagram({
      number: "3.1",
      title: "Why standard SaaS metrics are insufficient for AI companies",
      subtitle: "Revenue and growth tell investors what happened. AI metrics tell them what will happen.",
      take: "MRR, NRR, and CAC payback are necessary but insufficient for AI companies. Investors need leading indicators that the product compounds — not just grows. Without AI-specific metrics, you are priced as SaaS regardless of branding.",
      why: "SaaS metrics measure distribution and retention. AI metrics measure whether intelligence improves with usage. Founders who conflate the two wonder why 'great growth' earns mediocre AI multiples.",
      paragraphs: [
        [
          s("SaaS metrics are lagging indicators of business health. "),
          x(
            "ARR tells you what customers paid last month. It does not tell you whether your model is getting better, your moat is widening, or your inference costs will destroy margin at scale.",
            "AI investors price leading indicators — the metrics that predict future defensibility.",
          ),
          s(" Bring both lagging and leading metrics to every investor meeting."),
        ],
        [
          s("Growth without compounding is a red flag in AI diligence. "),
          x(
            "A company can grow ARR while model quality flatlines — hiring more salespeople to offset stagnant AI value.",
            "Investors ask: 'if you froze sales for one quarter, would the product improve on its own from usage?' SaaS metrics cannot answer that.",
          ),
          s(" AI metrics answer whether usage makes you stronger or just busier."),
        ],
        [
          s("The dashboard split investors expect at Series A. "),
          x(
            "Left column: ARR, NRR, gross margin, CAC. Right column: improvement rate, override rate, loop latency, data accumulation, AI-attributed revenue.",
            "Founders with only the left column get SaaS term sheets. Founders with both columns get AI premium conversations.",
          ),
          s(" Build the right column six months before you need it."),
        ],
      ],
      examples: [
        {
          title: "Strong ARR, weak AI metrics — SaaS classification",
          body: "A support AI company grew ARR 3x in a year but override rate was flat and no model updates shipped in eight months. Series A investors offered 11x ARR. A competitor at half the ARR with improving metrics raised at 19x. Growth alone did not earn the premium.",
        },
        {
          title: "Leading indicators in a winning memo",
          body: "A Series A memo highlighted: override rate down 18% QoQ, loop latency 11 days, proprietary labels +40% QoQ. ARR was secondary to compounding evidence. The founder built the right-column dashboard nine months before fundraising.",
        },
        {
          title: "Board deck evolution — adding the AI column",
          body: "One CEO added a dedicated 'AI compounding' slide to monthly board decks at seed. By month ten, the metrics told a story ARR alone could not. Investors cited the slide in diligence. Habit formed the fundraise narrative.",
        },
      ],
    }, {
      kind: "diagram",
      id: "founder-vc-diligence-stack",
      type: "flow",
      title: "Investor Diligence Stack",
      caption:
        "Team → data moat → unit economics → timing → risk. The five lenses on every AI term sheet.",
    }),
    sectionWithDiagram({
      number: "3.2",
      title: "Model improvement rate",
      subtitle: "How fast is your model getting better — and how do you prove it to someone outside your company",
      take: "Model improvement rate measures whether your product intelligence compounds over time — via held-out eval scores, production quality metrics, and override trends. Flat improvement rate means flat moat regardless of ARR growth.",
      why: "This is the metric that separates AI businesses from AI features. Investors will ask for it. Founders without it admit they are not learning from usage.",
      paragraphs: [
        [
          s("Define improvement on tasks that matter to customers, not generic benchmarks. "),
          x(
            "Held-out accuracy on your core task — contract clause extraction, support resolution, code suggestion acceptance — tracked monthly.",
            "Generic MMLU scores impress no one in application-layer diligence. Task-specific evals tied to revenue matter.",
          ),
          s(" Publish a model card internally: baseline, current, delta, methodology."),
        ],
        [
          s("Connect offline improvement to online behaviour. "),
          x(
            "Offline evals can improve while production overrides stay flat — a sign your eval set is stale or unrepresentative.",
            "The best founders track both: offline held-out performance and online override/task completion trends moving together.",
          ),
          s(" Divergence between offline and online is a diligence conversation you want to have proactively."),
        ],
        [
          s("Report improvement rate as a cadence, not a one-time achievement. "),
          x(
            "'We improved 10% once' is less compelling than 'we improve 2–4% monthly via shipped loop updates.'",
            "Investors model compounding. Monthly improvement cadence signals operational AI maturity.",
          ),
          s(" Version every model release and tie it to metric deltas."),
        ],
      ],
      examples: [
        {
          title: "GitHub Copilot — acceptance rate as improvement proxy",
          body: "Copilot tracks suggestion acceptance rate as a production improvement metric. Rising acceptance signals the model serves developers better — not just benchmark scores. Founders should identify their equivalent acceptance metric per core task.",
        },
        {
          title: "Stale eval set trap",
          body: "A legal AI showed improving offline F1 scores but flat attorney override rate. Diligence revealed the eval set was six months old and unrepresentative. Investors discounted offline metrics until online alignment was fixed.",
        },
        {
          title: "Monthly model release notes — investor-ready",
          body: "One startup published internal monthly 'model release notes' with eval deltas and override impact. At Series A, these notes became diligence evidence of improvement cadence. Operational habit became fundraising asset.",
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
      title: "Data accumulation rate",
      subtitle: "How fast are you building your proprietary data asset — the leading indicator of future moat",
      take: "Data accumulation rate tracks volume, quality, and exclusivity of proprietary labelled signal over time — GB/month, labels/month, unique domains covered. It is the leading indicator of future moat strength.",
      why: "Investors model moat trajectory, not moat snapshots. A steep accumulation curve justifies premium; a flat curve signals wrapper risk.",
      paragraphs: [
        [
          s("Measure proprietary labelled data — not total storage. "),
          x(
            "Raw logs without labels are observability. Labels with ground truth are training assets.",
            "Report: new proprietary labels per month, source (user correction, expert review, outcome feedback), and exclusivity.",
          ),
          s(" A competitor can match your log volume. They cannot match your labelled correction history."),
        ],
        [
          s("Segment accumulation by strategic value. "),
          x(
            "Edge cases, high-value customer segments, and failure modes are worth more than bulk happy-path examples.",
            "Investors prefer 10K high-value labels in a narrow domain over 10M generic prompts.",
          ),
          s(" Quality-weighted accumulation tells a stronger story than row counts."),
        ],
        [
          s("Show accumulation is intentional, not accidental. "),
          x(
            "Instrument product flows to capture signal by design — not as a post-hoc analytics project.",
            "Founders who cannot explain how each product feature adds to the corpus are not building a data moat.",
          ),
          s(" Tie accumulation KPIs to product roadmap items."),
        ],
      ],
      examples: [
        {
          title: "Tesla — miles as accumulation metric",
          body: "Tesla reports billions of miles driven as autonomous data accumulation. Investors and analysts treat miles as moat trajectory. Founders should define their 'miles' — the unit of proprietary signal only they accumulate.",
        },
        {
          title: "Label velocity dashboard",
          body: "A clinical AI tracked expert labels per week by condition rarity. Rare-condition labels accumulated slower but carried 10x strategic weight. Investors weighted the quality-segmented chart higher than aggregate volume.",
        },
        {
          title: "Accidental logs vs designed capture",
          body: "Two companies had similar user counts. One logged prompts only; the other captured accept/reject/edit triples by design. At diligence, only the second showed accumulation rate. Product instrumentation determined moat narrative.",
        },
      ],
    }),
    buildSection({
      number: "3.4",
      title: "Human override rate",
      subtitle: "How often do users correct or override your AI — the most honest measure of model quality",
      take: "Human override rate — how often users edit, reject, or escalate AI outputs — is the most honest production quality metric. It is hard to fake and directly measures user trust.",
      why: "Investors trust override trends more than founder accuracy claims. A declining override rate signals real improvement; a flat or rising rate signals trouble under growth.",
      paragraphs: [
        [
          s("Define override precisely for your product. "),
          x(
            "Overrides include: explicit rejection, manual edit before accept, escalation to human, or abandonment after AI suggestion.",
            "Each product surface needs a clear definition — otherwise you measure noise.",
          ),
          s(" Segment overrides by task type, user cohort, and model version."),
        ],
        [
          s("Trend matters more than absolute number. "),
          x(
            "8% override rate improving to 5% over two quarters is a strong story. 3% override rate rising to 7% during growth is a crisis.",
            "Investors plot override rate against ARR growth to detect quality collapse during scaling.",
          ),
          s(" Present override trend alongside revenue trend — always."),
        ],
        [
          s("Use overrides as training fuel, not just a KPI. "),
          x(
            "Every override should feed the labelling pipeline with ownership and SLA to model update.",
            "Override rate without loop closure is a support metric, not an AI metric.",
          ),
          s(" The best override dashboards show capture → label → ship cycle time."),
        ],
      ],
      examples: [
        {
          title: "Override trend — Series A conviction driver",
          body: "A document AI showed override rate declining from 14% to 6% over three quarters while ARR tripled. Investors cited 'quality scaling with growth' in the memo. Override trend was the single most referenced metric.",
        },
        {
          title: "Hidden quality collapse",
          body: "A company celebrated ARR growth while override rate climbed from 5% to 19% silently. Churn followed six months later. Investors who had passed cited the override trend they asked about in the pitch. Founders should monitor overrides weekly.",
        },
        {
          title: "Override-to-label pipeline SLA",
          body: "One team set a 72-hour SLA from override to training queue. Meeting the SLA correlated with quarterly improvement rate. Investors treated the SLA as evidence of operational loop maturity.",
        },
      ],
    }),
    buildSection({
      number: "3.5",
      title: "Task completion rate",
      subtitle: "The percentage of AI-assisted tasks completed without failure — the metric that tracks user trust",
      take: "Task completion rate measures what percentage of AI-assisted workflows reach successful outcomes without failure, escalation, or abandonment. It connects model quality to user trust and retention.",
      why: "Investors use task completion to model NRR and expansion. Low completion means AI is a demo feature; high completion means AI is the product.",
      paragraphs: [
        [
          s("Define the task boundary clearly. "),
          x(
            "Task = one user goal: resolve a ticket, draft a contract section, generate a passing unit test. Completion = goal achieved without human takeover.",
            "Vague definitions produce vanity metrics. Precision enables improvement.",
          ),
          s(" Instrument completion events in product analytics from launch."),
        ],
        [
          s("Segment by difficulty and user expertise. "),
          x(
            "Power users may complete 90% of tasks; novices 60%. Aggregate hides where the product fails.",
            "Investors ask about long-tail failure modes — segment completion reveals them.",
          ),
          s(" Improving novice completion often moves NRR more than optimising for experts."),
        ],
        [
          s("Link completion to business outcomes. "),
          x(
            "Higher task completion should correlate with retention, expansion, and reduced support costs.",
            "If completion improves but NRR flatlines, the task definition may not map to value.",
          ),
          s(" Present completion alongside NRR to show AI drives business results."),
        ],
      ],
      examples: [
        {
          title: "Support AI — resolution rate as completion",
          body: "A support AI tracked 'resolved without agent' as task completion. Moving from 42% to 61% completion correlated with 15-point NRR improvement. Investors model completion → retention → LTV.",
        },
        {
          title: "Long-tail failure discovery",
          body: "Aggregate completion was 78% but segment analysis showed 34% for non-English queries. The founder surfaced this proactively in Series A diligence and presented a roadmap fix. Transparency built trust.",
        },
        {
          title: "Completion vs accuracy",
          body: "A coding assistant had high syntax accuracy but low task completion because suggestions did not match repo conventions. Founders learned completion measures end-to-end success — not intermediate metrics.",
        },
      ],
    }),
    buildSection({
      number: "3.6",
      title: "AI-attributed revenue",
      subtitle: "How much of your revenue is directly attributable to AI capabilities — the metric that justifies the premium",
      take: "AI-attributed revenue is the portion of ARR that customers pay for specifically because of AI capabilities — not distribution, legacy features, or services. It justifies the AI premium in financial terms.",
      why: "Without attribution, investors cannot tell if AI drives growth or rides along on a traditional SaaS business. Attribution clarity strengthens valuation narrative.",
      paragraphs: [
        [
          s("Tag features and plans by AI dependency. "),
          x(
            "AI-required: product does not function without inference. AI-enhanced: product works without AI but AI adds value. Non-AI: traditional features.",
            "Survey customers, analyse usage correlation, and tag billing lines accordingly.",
          ),
          s(" Be conservative — investors respect under-claiming with evidence over over-claiming."),
        ],
        [
          s("Track AI-attributed expansion separately. "),
          x(
            "New logos matter. Expansion driven by AI feature adoption matters more for compounding narrative.",
            "Show AI-attributed NRR as its own line in the board deck.",
          ),
          s(" Rising AI-attributed share signals strategic transformation, not feature attach."),
        ],
        [
          s("Connect attribution to margin. "),
          x(
            "AI-attributed revenue must carry inference costs — show gross margin on AI lines specifically.",
            "High AI-attributed ARR with negative AI gross margin is a growth-stage crisis, not a premium story.",
          ),
          s(" Present attribution with unit economics, not in isolation."),
        ],
      ],
      examples: [
        {
          title: "60% AI-required expansion — A round narrative",
          body: "An enterprise assistant showed 60% of expansion ARR tied to AI-required features via usage and billing analysis. Investors priced premium on that line. Total ARR alone would have earned a lower multiple.",
        },
        {
          title: "Over-attribution corrected before diligence",
          body: "A founder initially claimed 80% AI-attributed revenue. Internal audit found 45% was more defensible. Correcting before diligence preserved trust. Investors penalise discovered inflation harshly.",
        },
        {
          title: "AI-attributed margin slide",
          body: "One board deck showed AI-attributed ARR growing 200% YoY with 68% gross margin after routing optimisations. Growth investors cited the slide as proof AI improved economics — not just top line.",
        },
      ],
    }),
    buildSection({
      number: "3.7",
      title: "Feedback loop velocity",
      subtitle: "How long does it take from user interaction to model improvement — the competitive clock",
      take: "Feedback loop velocity measures elapsed time from user interaction (especially correction) to deployed model improvement. It is the competitive clock — faster loops beat better starting models.",
      why: "Investors explicitly compare loop velocity across portfolio companies. Slow loops signal organisational failure, not technical difficulty.",
      paragraphs: [
        [
          s("Measure end-to-end latency, not engineering sub-steps. "),
          x(
            "Clock starts at user correction. Clock stops at measurable production improvement affecting live users.",
            "Sub-step SLAs (label within 48h, train within 24h) roll up to one founder-facing number.",
          ),
          s(" Report median and p90 loop latency — outliers reveal bottlenecks."),
        ],
        [
          s("Assign loop ownership across functions. "),
          x(
            "Product captures signal. Data labels. ML ships. PM measures. Without a DRI, loops stall in handoffs.",
            "Investors ask who owns loop velocity — 'the team' is not an answer.",
          ),
          s(" Name a single executive owner for loop SLA in the org chart."),
        ],
        [
          s("Benchmark against competitors and portfolio norms. "),
          x(
            "Seven-day loops beat quarterly retraining cycles. Same-day loops beat seven-day loops in competitive markets.",
            "Velocity is relative — know what 'fast' means in your vertical.",
          ),
          s(" Improving velocity is a strategic initiative, not an engineering afterthought."),
        ],
      ],
      examples: [
        {
          title: "14-day to 6-day loop — competitive win",
          body: "A fraud AI reduced loop latency from 14 days to 6 days by automating label review. Detection improved faster than a competitor with a better seed model. Investors cited velocity as the moat.",
        },
        {
          title: "Loop stall at handoff",
          body: "Overrides were logged but labels sat in a queue for three weeks with no owner. Effective loop velocity was infinite. Diligence flagged 'no compounding.' Hiring one ML ops owner fixed it in a quarter.",
        },
        {
          title: "Velocity on the board agenda",
          body: "A CEO made loop latency a standing board metric alongside burn and ARR. When p90 exceeded 21 days, it triggered an exec review. Discipline kept velocity investor-ready.",
        },
      ],
    }),
    buildSection({
      number: "3.8",
      title: "Founder decision lens: building your AI metrics dashboard before your Series A",
      subtitle: "The five metrics to have live, tracked, and explainable before you enter the fundraising process",
      take: "Before Series A, have five metrics live: override rate trend, task completion rate, model improvement rate, data accumulation rate, and loop velocity. Add AI-attributed revenue and margin as a sixth when possible. No live dashboard = SaaS classification.",
      why: "Building the dashboard forces the operational infrastructure investors will diligence anyway. Six months of metric history is worth more than six weeks of pitch coaching.",
      paragraphs: [
        [
          s("Start with instrumentation, not fundraising timing. "),
          x(
            "Wire product events for overrides, completions, and model version at seed — even pre-revenue.",
            "Retroactive metrics are not trusted. Continuous history is.",
          ),
          s(" Treat the dashboard as a product deliverable with an owner and weekly review."),
        ],
        [
          s("Make metrics explainable in one sentence each. "),
          x(
            "Every metric needs: definition, data source, update cadence, and current trend direction.",
            "If the founder cannot explain a metric cold, investors assume it is vanity.",
          ),
          s(" Rehearse metric explanations more than pitch narrative."),
        ],
        [
          s("Use the dashboard to drive execution, not just fundraising. "),
          x(
            "Set internal targets: override down 2% per quarter, loop under 14 days, labels up 20% per quarter.",
            "When metrics drive sprints, they improve naturally before fundraise.",
          ),
          s(" Fundraise when the trends are your story — not when the calendar says so."),
        ],
      ],
      examples: [
        {
          title: "Seed-stage dashboard — nine months of history",
          body: "A company instrumented all five metrics at seed with zero revenue. Nine months later, trends told a compounding story that ARR alone could not. Series A diligence was a dashboard walkthrough — not a debate about claims.",
        },
        {
          title: "Metric definition doc — diligence appendix",
          body: "A founder attached a one-page metric definitions doc to the data room. Investors praised clarity. Definitions prevented three weeks of back-and-forth. Preparation reduced friction.",
        },
        {
          title: "Dashboard-driven sprint priorities",
          body: "When loop velocity slipped, the CEO paused feature work and staffed a pipeline sprint. Velocity recovered in four weeks. Investors later cited operational responsiveness as conviction signal.",
        },
      ],
    }),
  ],
  quiz: [
    {
      q: "Why are standard SaaS metrics alone insufficient for AI company valuation?",
      options: [
        "SaaS metrics are always wrong.",
        "They are lagging indicators — investors need leading AI metrics showing compounding intelligence.",
        "AI companies do not have revenue.",
        "Investors only care about benchmark scores.",
      ],
      correct: 1,
      correctFeedback:
        "Right. ARR shows what happened; improvement rate, overrides, and loop velocity show what will happen.",
      wrongFeedback:
        "Re-read section 3.1. SaaS metrics are necessary but do not prove AI compounding.",
    },
    {
      kind: "categorize",
      q: "Match each metric to what it primarily signals to investors.",
      categories: ["User trust / quality", "Moat trajectory", "Operational compounding"],
      items: [
        { text: "Human override rate trending down.", category: 0 },
        { text: "Proprietary labelled data accumulating monthly.", category: 1 },
        { text: "Feedback loop velocity in days to deployment.", category: 2 },
        { text: "Task completion rate by user segment.", category: 0 },
        { text: "Model improvement rate on held-out task evals.", category: 2 },
        { text: "AI-attributed revenue as % of expansion ARR.", category: 1 },
      ],
      correctFeedback:
        "Right. Overrides and completion signal trust; accumulation and attribution signal moat; improvement and velocity signal operations.",
      wrongFeedback:
        "Re-read sections 3.2–3.7 for what each metric proves.",
    },
    {
      q: "A company shows improving offline benchmark scores but flat override rate in production. What should investors conclude?",
      options: [
        "The AI thesis is fully proven.",
        "Offline evals may be stale or unrepresentative — online quality is not improving.",
        "Override rate is irrelevant.",
        "Benchmarks are the only metric that matters.",
      ],
      correct: 1,
      correctFeedback:
        "Right. Offline/online divergence is a red flag. Production override trends are harder to fake.",
      wrongFeedback:
        "Re-read section 3.2. Connect offline improvement to online behaviour.",
    },
    {
      q: "Which metric is described as 'the competitive clock' for AI businesses?",
      options: [
        "Total headcount.",
        "Feedback loop velocity — time from interaction to deployed improvement.",
        "Number of press mentions.",
        "GitHub stars.",
      ],
      correct: 1,
      correctFeedback:
        "Right. Faster loops beat better starting models over time.",
      wrongFeedback:
        "Re-read section 3.7 on loop velocity as competitive advantage.",
    },
    {
      kind: "order",
      q: "Order the five metrics to have live before Series A (build instrumentation first).",
      prompt: "Drag to arrange recommended priority (top = instrument first).",
      items: [
        "Override rate — defines production quality baseline.",
        "Task completion rate — connects AI to user outcomes.",
        "Model improvement rate — proves learning over time.",
        "Data accumulation rate — shows moat trajectory.",
        "Feedback loop velocity — proves operational compounding.",
      ],
      correctFeedback:
        "Right. All five should be live with history — this order reflects typical instrumentation dependency.",
      wrongFeedback:
        "Re-read section 3.8. Five core metrics plus AI-attributed revenue should be live before Series A.",
    },
    {
      q: "What is AI-attributed revenue?",
      options: [
        "Total ARR regardless of feature type.",
        "Revenue customers pay specifically because of AI capabilities — tagged and evidenced.",
        "Projected revenue from future models.",
        "API spend on foundation models.",
      ],
      correct: 1,
      correctFeedback:
        "Right. Attribution separates AI-driven growth from traditional SaaS lines.",
      wrongFeedback:
        "Re-read section 3.6. Attribution must be conservative and evidenced.",
    },
  ],
});
