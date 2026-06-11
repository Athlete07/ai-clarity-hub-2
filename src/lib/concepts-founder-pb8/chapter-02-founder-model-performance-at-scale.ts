import { buildChapter, buildSection, s, x, sectionWithDiagram } from "../concepts-pb4-helpers";

export const chapter02FounderModelPerformanceAtScale = buildChapter({
  slug: "founder-model-performance-at-scale",
  number: 2,
  shortTitle: "Model Performance at Scale",
  title: "Model Performance at Scale",
  readingMinutes: 26,
  summary:
    "Models that work in demos fail in production. Models that work in production fail at scale. Distribution shift, long-tail failures, latency degradation, and monitoring gaps — the failure modes that only appear with real users, and the cadence founders need to catch them.",
  keyTakeaway:
    "Production model performance is a moving target. Scale introduces distribution shift, adversarial inputs, and latency cliffs that your test set never simulated. Monitoring, segment-level alerting, and disciplined A/B testing are not MLOps luxuries — they are founder survival infrastructure.",
  pmCallout:
    "As a founder: assume your model is degrading right now and you cannot see it yet. Install production monitoring before you scale marketing — the 1% long-tail inputs that cause 80% of incidents only appear at volume.",
  sections: [
    sectionWithDiagram({
      number: "2.1",
      title: "Why model performance degrades at scale",
      subtitle: "Distribution shift, edge cases, adversarial inputs — the failure modes that only appear with real users",
      take: "Model performance degrades at scale because production traffic is not your test set. New user segments, novel inputs, adversarial behaviour, and infrastructure load all introduce failure modes invisible at pilot scale.",
      why: "Founders who scale marketing before production monitoring discover degradation through churn, support tickets, and Twitter — not dashboards. By then, trust is expensive to rebuild.",
      paragraphs: [
        [
          s("Scale changes who uses your product. "),
          x(
            "Early adopters tolerate imperfection and provide rich feedback. Mainstream users expect reliability, encounter edge cases early adopters never hit, and churn silently when quality drops.",
            "The user distribution at 100,000 is not an extrapolation of the distribution at 1,000 — it is a different population.",
          ),
          s(" Re-baseline quality metrics every order of magnitude in user growth."),
        ],
        [
          s("Adversarial and accidental stress inputs multiply. "),
          x(
            "At scale, users paste malformed data, probe boundaries, game outputs, and combine features in ways product teams never tested. Prompt injection, garbage-in-garbage-out, and context overflow become daily events.",
            "A model robust in curated demos is fragile in the wild.",
          ),
          s(" Build an adversarial input library from production failures — it becomes your most valuable test set."),
        ],
        [
          s("Infrastructure load affects perceived model quality. "),
          x(
            "Under load, latency rises, timeouts truncate responses, and fallback paths activate. Users experience 'the AI got worse' when the model did not change — the system around it degraded.",
            "Performance at scale is model quality plus system quality. Founders must monitor both.",
          ),
          s(" Separate model regression alerts from latency regression alerts — they have different fixes."),
        ],
      ],
      examples: [
        {
          title: "Airbnb search ranking — scale reveals drift",
          body: "ML systems at marketplace scale constantly face distribution shift as inventory, users, and seasons change. Airbnb invests heavily in monitoring and retraining cadence because static models decay. Founders should expect the same decay curve — plan for it, do not discover it.",
        },
        {
          title: "Support bot — paste bomb incident",
          body: "A customer-support AI worked well until users began pasting 50-page PDFs into chat. Context overflow caused truncated, nonsensical answers. Support volume spiked. Input validation and document chunking — not model upgrades — fixed the issue. Scale surfaces input patterns demos never included.",
        },
        {
          title: "Latency cliff at 10x traffic",
          body: "A coding assistant's perceived quality dropped during a Product Hunt spike. p95 latency went from 1.2s to 8s. Users blamed the model. Autoscaling and request queuing fixed it without changing the model weights. Infrastructure degradation mimics model degradation.",
        },
      ],
    }, {
      kind: "diagram",
      id: "founder-scaling-inflection",
      type: "flow",
      title: "Scaling Inflection Points",
      caption:
        "Cost and architecture choices compound at each order-of-magnitude in usage.",
    }),
    sectionWithDiagram({
      number: "2.2",
      title: "Distribution shift — the silent killer",
      subtitle: "When your production users behave differently from your test set users",
      take: "Distribution shift is the gradual or sudden divergence between training/eval data and production traffic. It is silent because aggregate metrics can look stable while specific segments collapse.",
      why: "Shift kills moats. If your model was tuned on early-adopter behaviour and mainstream users behave differently, your core product promise erodes without a single dramatic incident.",
      paragraphs: [
        [
          s("Detect shift by segment, not aggregate. "),
          x(
            "Overall accuracy can hold at 92% while enterprise segment accuracy drops to 71%. Aggregate dashboards hide the segments that churn first.",
            "Segment by: customer tier, geography, input length, language, feature path, and acquisition channel.",
          ),
          s(" The segment that matters most is the one growing fastest — monitor it before it dominates traffic."),
        ],
        [
          s("Shift sources are predictable. "),
          x(
            "New customer verticals, seasonal behaviour, product feature launches that change input patterns, and competitor-driven user migration all shift distribution.",
            "Every major product launch is a distribution shift event. Plan eval reruns accordingly.",
          ),
          s(" Add distribution shift review to your launch checklist — not just feature QA."),
        ],
        [
          s("Mitigation is continuous eval, not one-time retraining. "),
          x(
            "Production eval sets sampled from live traffic, weekly drift detection, and automatic alerts when segment metrics cross thresholds.",
            "Retraining on stale production data that already shifted is too late. Detection must precede retraining.",
          ),
          s(" Treat production traffic as the source of truth for eval — refresh golden sets monthly."),
        ],
      ],
      examples: [
        {
          title: "Stripe fraud model — segment drift monitoring",
          body: "Fraud detection systems at Stripe-scale monitor distribution shift continuously because attacker behaviour and merchant mix evolve. Founders with smaller models need the same discipline at proportionate scale — segment dashboards and drift alerts, not annual retraining.",
        },
        {
          title: "Edtech AI — summer cohort shift",
          body: "A tutoring AI trained on school-year usage saw accuracy drop 18% during summer as casual learners replaced structured classroom users. The model had not broken — the population changed. Seasonal rebaselining and segment-specific models restored quality.",
        },
        {
          title: "Enterprise expansion — vertical shift",
          body: "A horizontal sales-email AI expanded into healthcare. Medical terminology inputs were 4% of traffic but 31% of failures. Aggregate metrics barely moved. Vertical-specific eval and fine-tuning became a prerequisite for the vertical GTM motion.",
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
      title: "Long tail failure modes",
      subtitle: "The 1% of inputs that cause 80% of your problems — and how to find them",
      take: "At scale, the long tail dominates incident volume. Rare input types, edge-case entities, multilingual fragments, and compound queries cause most failures while representing a tiny fraction of traffic.",
      why: "Founders who optimise for average-case accuracy ignore the failure modes that drive support cost, churn, and liability. Long-tail coverage is a competitive moat — and a operational requirement.",
      paragraphs: [
        [
          s("Mine the long tail from production logs. "),
          x(
            "Cluster failed or overridden requests. Rank clusters by frequency and severity. The top five clusters often account for most quality incidents.",
            "Your long-tail library should grow weekly from production, not quarterly from synthetic data.",
          ),
          s(" Assign ownership: someone reviews the failure cluster report every Monday."),
        ],
        [
          s("Decide per cluster: fix, route, or escalate. "),
          x(
            "Some clusters need model improvement. Some need routing to a specialist model. Some need human-in-the-loop by policy. Not every long-tail case deserves model training.",
            "Escalation design is often cheaper and safer than chasing 100% automation on rare high-stakes inputs.",
          ),
          s(" Document which clusters are accepted limitations vs active remediation targets."),
        ],
        [
          s("Measure long-tail coverage explicitly. "),
          x(
            "Track: percentage of traffic falling into known failure clusters, override rate on long-tail vs head, and incident rate per cluster over time.",
            "Shrinking long-tail incident rate is a leading indicator of product maturity.",
          ),
          s(" Report long-tail progress to the board — it signals operational depth beyond headline accuracy."),
        ],
      ],
      examples: [
        {
          title: "Duolingo — edge case investment",
          body: "Language products live in the long tail — rare phrases, dialects, and compound errors. Duolingo's quality investment targets edge cases because they drive learner frustration disproportionately. Founders should budget explicitly for long-tail coverage, not just head-case accuracy.",
        },
        {
          title: "Failure cluster sprint — 64% incident reduction",
          body: "A document-extraction AI clustered six months of overrides. Top three clusters: handwritten notes, tables with merged cells, and non-English headers. Targeted fine-tuning and human escalation on those clusters cut support incidents 64% in one quarter.",
        },
        {
          title: "Accepted limitation — high-stakes escalation",
          body: "A medical-coding AI routed rare procedure codes to human review rather than training on sparse examples. Automation rate dropped 3%. Liability exposure dropped far more. Long-tail strategy included knowing what not to automate.",
        },
      ],
    }),
    buildSection({
      number: "2.4",
      title: "Latency at scale",
      subtitle: "How response time degrades under load and what that does to user experience",
      take: "Latency is a quality metric. At scale, queueing, cold starts, retrieval bottlenecks, and rate limits push p95 and p99 latency past user tolerance — even when p50 looks fine.",
      why: "Users do not experience average latency. They experience the slow request that breaks their flow. Founders who monitor p50 while p99 degrades lose engagement without understanding why.",
      paragraphs: [
        [
          s("Track p95 and p99, not just averages. "),
          x(
            "A 800ms p50 with 12s p99 feels broken to power users even if dashboards look healthy.",
            "Set latency SLOs per feature path — chat, batch, autocomplete — not one global number.",
          ),
          s(" Latency SLO breaches should page the same way quality regressions do."),
        ],
        [
          s("Identify latency bottlenecks in the full pipeline. "),
          x(
            "Model inference is often only 40–60% of total latency. Retrieval, reranking, serialization, and network hops compound.",
            "Optimising inference while retrieval scans an unindexed corpus wastes engineering time.",
          ),
          s(" Profile end-to-end latency per request type before optimising any single component."),
        ],
        [
          s("Design degradation modes for load spikes. "),
          x(
            "Graceful degradation: shorter context, faster model tier, cached response, or honest 'try again' — better than timeout silence.",
            "Users forgive slower answers more than they forgive hung interfaces.",
          ),
          s(" Load testing should be part of launch readiness — not post-incident forensics."),
        ],
      ],
      examples: [
        {
          title: "Perplexity — latency as product priority",
          body: "Search-augmented AI products compete on speed as much as accuracy. Perplexity's architecture emphasises low-latency retrieval and inference. Founders in interactive AI categories should treat latency budgets as product requirements with named owners.",
        },
        {
          title: "Retrieval bottleneck — 4s hidden tax",
          body: "A RAG assistant showed 1.1s inference but 5.2s end-to-end latency. Vector search across an unpartitioned index caused the gap. Partitioning and pre-filtering cut p95 to 2.4s. Users reported 'the AI got smarter' — nothing about the model changed.",
        },
        {
          title: "Product Hunt spike — graceful degradation",
          body: "A writing assistant hit rate limits during a traffic spike. Instead of hard failures, the product switched to a faster model tier with a banner: 'Running in fast mode due to high demand.' Completion rate held. Transparency beat silent degradation.",
        },
      ],
    }),
    buildSection({
      number: "2.5",
      title: "Model monitoring in production",
      subtitle: "What to track, how to alert, and who is responsible when the model quietly gets worse",
      take: "Production monitoring tracks quality metrics (override rate, task completion, confidence distribution), operational metrics (latency, error rate, cost per request), and drift indicators (input distribution, output length, segment accuracy) — with named owners and alert runbooks.",
      why: "Without monitoring, degradation is discovered through churn lag — weeks after the damage starts. Monitoring converts model performance from hope into operations.",
      paragraphs: [
        [
          s("Minimum viable monitoring stack. "),
          x(
            "Quality: override rate, escalation rate, task completion, user retry rate. Operations: latency p50/p95/p99, error rate, timeout rate. Economics: cost per request, cost per successful task.",
            "Drift: input length distribution, language mix, segment accuracy. Alert when any metric moves beyond historical bounds.",
          ),
          s(" Ship monitoring before scale marketing — order matters."),
        ],
        [
          s("Alerts need runbooks, not just pages. "),
          x(
            "When override rate spikes: who investigates, what dashboards they check, what rollback options exist, and what customer communication is required.",
            "An alert without a runbook becomes noise. Noise gets ignored. Ignored alerts become incidents.",
          ),
          s(" Write runbooks when you write alerts — not after the first outage."),
        ],
        [
          s("Name a model performance owner. "),
          x(
            "At 10 people, it might be the founding engineer. At 50, it needs a defined role — ML lead, AI platform, or MLOps — with weekly review cadence.",
            "Diffusion of responsibility means nobody owns degradation until the founder notices churn.",
          ),
          s(" The owner presents model health at the weekly leadership meeting — five minutes, every week."),
        ],
      ],
      examples: [
        {
          title: "Spotify recommendations — continuous monitoring culture",
          body: "Recommendation systems at scale live or die on production monitoring. Spotify's ML org treats drift detection and online metrics as core infrastructure. Founders should instil the same weekly model-health review habit from the first production deployment.",
        },
        {
          title: "Override spike — 36-hour silent regression",
          body: "A contract AI deployed a prompt change Friday evening. Override rate doubled on commercial-lease clauses — 8% of traffic. No alert was configured for segment-level overrides. Discovery happened Monday via customer complaint. Segment alerts would have caught it in hours.",
        },
        {
          title: "Weekly model health five-minute review",
          body: "A Series A AI startup instituted a Monday model-health standup: override trend, latency, top failure clusters, cost per task. Issues surfaced at week one instead of quarter end. The founder credited the ritual with preventing two would-be churn events.",
        },
      ],
    }),
    buildSection({
      number: "2.6",
      title: "A/B testing AI model updates",
      subtitle: "How to test model improvements without exposing all users to the risk of regression",
      take: "Ship model updates through controlled experiments: define success metrics, run canary exposure (5–10% traffic), monitor segment quality and latency, and roll back automatically on regression. Never big-bang deploy model changes.",
      why: "Model updates are not like UI tweaks — regressions affect trust and liability. A/B testing is how you move fast without betting the customer base on offline eval accuracy.",
      paragraphs: [
        [
          s("Offline eval is necessary but insufficient. "),
          x(
            "Benchmark improvements do not guarantee production improvement. User behaviour, latency interaction, and long-tail segments differ.",
            "Require offline gate plus online canary before full rollout.",
          ),
          s(" Treat offline eval as admission to experiment, not permission to deploy."),
        ],
        [
          s("Design experiments with guardrail metrics. "),
          x(
            "Primary metric: task completion or override rate. Guardrails: latency p95, error rate, cost per request, escalation rate on high-stakes segments.",
            "A model that improves completion but doubles latency or cost fails the experiment.",
          ),
          s(" Pre-register success and rollback criteria before launching the experiment."),
        ],
        [
          s("Rollback must be instant. "),
          x(
            "Model versioning, feature flags, and traffic routing should allow one-click revert to previous model within minutes.",
            "If rollback takes a deploy cycle, you will hesitate to rollback — and hesitation costs customers.",
          ),
          s(" Practice rollback quarterly. The team that has never rolled back rolls back slowly."),
        ],
      ],
      examples: [
        {
          title: "Booking.com — experiment discipline",
          body: "Booking.com's culture of rigorous A/B testing extends to ML-driven features. Founders should adopt the same discipline for model updates: canary, measure, decide. Hero deployments are for demos, not production.",
        },
        {
          title: "Canary caught regression — rollback in 12 minutes",
          body: "A summarisation model update showed +4% offline ROUGE scores. Canary at 8% traffic showed +11% override rate on financial documents. Auto-rollback triggered in 12 minutes. Zero full-population exposure. Offline metrics would have shipped a regression.",
        },
        {
          title: "Experiment registry — institutional memory",
          body: "An AI platform team maintained an experiment log: hypothesis, metrics, outcome, decision. When a new engineer proposed a 'proven' architecture change, the log showed it had failed a canary six months prior. Experiment records prevent repeated mistakes.",
        },
      ],
    }),
    buildSection({
      number: "2.7",
      title: "Founder decision lens: the model performance review cadence",
      subtitle: "How often to review model performance data and what triggers an emergency response",
      take: "Founders need a model performance cadence: weekly health review, monthly deep dive on long-tail clusters, quarterly architecture review — plus explicit emergency triggers (override rate +20%, segment accuracy below threshold, latency SLO breach).",
      why: "Cadence converts monitoring data into decisions. Without a schedule and triggers, dashboards exist but nobody acts until a customer escalates.",
      paragraphs: [
        [
          s("Weekly: five metrics, five minutes. "),
          x(
            "Override rate trend, task completion, p95 latency, top three failure clusters, cost per successful task. Green/yellow/red. Yellow gets an owner and deadline.",
            "The weekly review is a leadership habit, not an engineering report.",
          ),
          s(" Founders who skip weekly reviews discover quarterly surprises."),
        ],
        [
          s("Monthly: long-tail and segment deep dive. "),
          x(
            "Which segments drifted? Which failure clusters grew? What experiments ran and what shipped? What is the remediation backlog?",
            "Monthly reviews allocate engineering capacity to quality — not just features.",
          ),
          s(" Tie monthly quality backlog to roadmap — quality work competes for the same engineers."),
        ],
        [
          s("Emergency triggers bypass the calendar. "),
          x(
            "Define triggers: override rate +20% week-over-week, any high-stakes segment below accuracy floor, p99 latency 2x SLO for 24 hours, security incident on prompt injection.",
            "Triggers activate a war room: model owner, product lead, founder — with rollback authority pre-delegated.",
          ),
          s(" Write triggers down and share with the board. Transparency builds trust when incidents happen."),
        ],
      ],
      examples: [
        {
          title: "Emergency trigger — pre-delegated rollback",
          body: "A founder pre-delegated rollback authority to the ML lead when override rate exceeded 15% on any enterprise account. During an incident, rollback happened in 9 minutes without founder approval bottleneck. Pre-delegation is governance, not abdication.",
        },
        {
          title: "Monthly quality backlog — roadmap tradeoff",
          body: "A founder reserved 25% of engineering capacity for quality remediation from the monthly deep dive. Long-tail cluster fixes shipped alongside features. Override rate dropped 19% over two quarters while feature velocity held. Explicit allocation beat 'we'll fix it later.'",
        },
        {
          title: "Board transparency on model incident",
          body: "After a 48-hour quality incident, a founder presented timeline, root cause, trigger gaps, and remediation to the board within one week. Investors appreciated speed and honesty. The company kept the round on track. Hiding incidents is higher risk than disclosing them.",
        },
      ],
    }),
  ],
  quiz: [
    {
      q: "Why do models that perform well in pilots often degrade at scale?",
      options: [
        "Foundation models automatically get worse over time.",
        "Production users, inputs, and system load differ from test conditions — introducing distribution shift and long-tail failures.",
        "API vendors reduce quality at higher volume tiers.",
        "Demos use stronger models than production.",
      ],
      correct: 1,
      correctFeedback:
        "Right. Scale changes user distribution, input patterns, and system behaviour around the model.",
      wrongFeedback:
        "Re-read sections 2.1 and 2.2 on degradation drivers and distribution shift.",
    },
    {
      q: "What is the best way to detect distribution shift?",
      options: [
        "Monitor aggregate accuracy only.",
        "Segment production metrics by customer tier, input type, geography, and feature path.",
        "Retrain annually on the original test set.",
        "Ask customers if quality feels worse.",
      ],
      correct: 1,
      correctFeedback:
        "Exactly. Aggregate metrics hide segment collapse — the silent killer of scaled AI products.",
      wrongFeedback:
        "Segment-level monitoring catches shift early. Re-read section 2.2.",
    },
    {
      kind: "categorize",
      q: "Sort each response into the correct long-tail strategy.",
      categories: ["Model fix", "Route or escalate"],
      items: [
        { text: "Common table-format extraction failure — 12% of overrides.", category: 0 },
        { text: "Rare medical procedure code — 0.3% of traffic, high liability.", category: 1 },
        { text: "Handwritten note cluster — frequent but specialist OCR needed.", category: 0 },
        { text: "Legal contract clause requiring partner attorney review by policy.", category: 1 },
        { text: "Multilingual header parsing — growing cluster in new market.", category: 0 },
        { text: "Fraud-flagged user input requiring human security review.", category: 1 },
      ],
      correctFeedback:
        "Right. Train on fixable frequent clusters; route or escalate rare high-stakes cases. Re-read section 2.3.",
      wrongFeedback:
        "Not every long-tail case deserves model training. Re-read section 2.3 on fix vs route vs escalate.",
    },
    {
      q: "Which latency metrics matter most for user experience at scale?",
      options: [
        "Average latency only.",
        "p95 and p99 latency per feature path.",
        "Minimum latency recorded.",
        "Latency measured only during off-peak hours.",
      ],
      correct: 1,
      correctFeedback:
        "Right. Users experience tail latency. p95/p99 SLOs catch degradation p50 hides.",
      wrongFeedback:
        "Re-read section 2.4. Tail latency drives perceived quality under load.",
    },
    {
      kind: "order",
      q: "Order the model update deployment sequence.",
      prompt: "Drag to arrange first step (top) to full rollout (bottom).",
      items: [
        "Offline eval gate — model meets minimum benchmark.",
        "Canary experiment on 5–10% traffic with guardrail metrics.",
        "Review experiment results against pre-registered success criteria.",
        "Full rollout or instant rollback based on canary outcome.",
      ],
      correctFeedback:
        "Exactly. Offline eval admits to experiment; canary proves production safety. Re-read section 2.6.",
      wrongFeedback:
        "Never big-bang deploy model changes. Re-read section 2.6 on A/B testing.",
    },
    {
      q: "What should trigger an emergency model performance response?",
      options: [
        "A single user complaint.",
        "Pre-defined triggers like override rate +20% week-over-week or high-stakes segment below accuracy floor.",
        "Completion of a quarterly board meeting.",
        "Release of a new foundation model by a vendor.",
      ],
      correct: 1,
      correctFeedback:
        "Right. Written emergency triggers with pre-delegated rollback authority prevent calendar-driven delays.",
      wrongFeedback:
        "Re-read section 2.7 on review cadence and emergency triggers.",
    },
  ],
});
