import { buildChapter, buildSection, s, x } from "../concepts-pb4-helpers";

export const chapter02AiMetricsDepth = buildChapter({
  slug: "pb7-ai-metrics-depth",
  number: 2,
  shortTitle: "AI Metrics Depth",
  title: "AI Metrics Depth",
  readingMinutes: 27,
  summary:
    "Measuring AI products is different from measuring conventional software — the metrics layer that separates mature AI teams from ones flying blind",
  keyTakeaway:
    "DAU and NPS tell you if users show up; they don't tell you if the model still works. Mature AI teams instrument task completion, containment, hallucination rate, drift, and online evals — and tie leading signals (thumbs-down, abandonment) to lagging business outcomes before users churn silently.",
  pmCallout:
    "As a PM: block launch until you can answer 'did the AI accomplish the user's job?' on a sampled basis. If your dashboard only shows requests and latency, you're operating a black box with a pretty usage chart.",
  sections: [
    buildSection({
      number: "2.1",
      title: "Why standard product metrics are insufficient for AI",
      subtitle: "DAU, retention, and NPS don't tell you if the model is degrading — the gap traditional analytics leaves",
      take: "Traditional product metrics measure adoption and satisfaction; AI products can show rising DAU while model quality collapses — users churn later, or worse, trust the wrong answers. You need outcome and quality metrics that track whether intelligence still delivers value.",
      why: "Exec dashboards green while support tickets spike is an AI classic. PMs who supplement funnel metrics with model health metrics catch silent degradation before revenue and reputation move.",
      paragraphs: [
        [
          s("DAU masks quality collapse. "),
          x(
            "Users may try a new AI feature repeatedly while it's novel, then leave after bad experiences — DAU lags quality by weeks.",
            "A copilot with flashy launch and 40% week-4 retention may have been failing 30% of tasks from day one.",
          ),
          s(" Pair adoption metrics with task success and repeat-success rate."),
        ],
        [
          s("NPS and CSAT are noisy for probabilistic products. "),
          x(
            "Users rate the UX, not each model output. One catastrophic hallucination may not appear in a post-session survey.",
            "Segment CSAT by task type and confidence band — aggregate scores hide failure modes.",
          ),
          s(" Supplement satisfaction with per-task outcome labelling."),
        ],
        [
          s("Revenue and cost metrics need quality adjustment. "),
          x(
            "Low COGS per request means nothing if human rework cost rises. High conversion on AI-assisted flows may reflect user effort compensating for errors.",
            "PM dashboard row: gross margin minus human escalation cost minus error remediation.",
          ),
          s(" AI unit economics without quality is fiction."),
        ],
      ],
      examples: [
        {
          title: "Rising DAU, falling trust — research assistant",
          body: "DAU up 22% after launch. Task completion on golden intents flat at 68%. Users bookmarked tool but stopped relying on answers for decisions. PM added weekly completion sampling; discovered citation errors drove silent distrust. NPS hadn't moved — behaviour had.",
        },
        {
          title: "Support CSAT green, containment red",
          body: "CSAT 4.2/5 on AI-assisted tickets. Containment rate 41% vs 70% target — agents fixed bot answers. Leadership saw green satisfaction; ops saw double handle time. PM made containment a tier-1 metric alongside CSAT.",
        },
        {
          title: "Conversion up, accuracy down — listing generator",
          body: "Sellers published more listings faster after AI descriptions. Manual audit found 15% policy violations in generated copy. Conversion was a lagging false positive; hallucination rate was the leading truth. Quality gate added before publish.",
        },
      ],
    }),
    buildSection({
      number: "2.2",
      title: "Task completion rate",
      subtitle: "The primary outcome metric — did the AI actually accomplish what the user needed, end to end",
      take: "Task completion rate measures whether the user's job got done — refund issued, ticket resolved, code merged, report generated — not whether the model produced fluent text. Define completion criteria per intent before launch.",
      why: "Fluency optimises demos; completion optimises products. PMs who own the completion rubric align eng, design, and ops on what 'success' means — and give evals a north star.",
      paragraphs: [
        [
          s("Completion is intent-specific and verifiable. "),
          x(
            "Book flight: itinerary confirmed and charged. Summarise contract: key obligations extracted with citations. Debug code: tests pass.",
            "Each intent needs a binary or graded completion definition — not 'user seemed happy.'",
          ),
          s(" PM maintains completion taxonomy mapped to user journeys."),
        ],
        [
          s("Measure end-to-end, not single-turn. "),
          x(
            "Multi-step agents may complete subtasks while failing the overall job. Completion is session-level or task-level, not message-level.",
            "Partial completion tiers help: full, partial (user finished), failed (abandoned or escalated).",
          ),
          s(" Report completion by intent — aggregate rates hide weak corridors."),
        ],
        [
          s("Ground completion in automated checks where possible. "),
          x(
            "API status codes, database state, test runners, human adjudication on samples — mix methods by stakes.",
            "High-stakes domains need higher human audit percentage; high-volume domains need automated proxies.",
          ),
          s(" Completion without measurement method is a vanity definition."),
        ],
      ],
      examples: [
        {
          title: "IT password reset — binary completion",
          body: "Success = user authenticated and password changed without agent. Measured via IdP logs, not chat sentiment. Completion 88% drove ROI model. PM rejected 'helpful response' as metric — only state change counted.",
        },
        {
          title: "Legal clause extraction — graded completion",
          body: "Full: all material clauses with citations. Partial: user edited output to finish. Failed: user abandoned. Graded scale revealed 62% full / 21% partial — product viable with editor UX, not with autonomous trust.",
        },
        {
          title: "Coding agent — tests as completion oracle",
          body: "Completion = PR merged with CI green. Eloquence irrelevant. PM aligned with eng on objective completion signal; marketing couldn't claim success on demo videos alone.",
        },
      ],
    }),
    buildSection({
      number: "2.3",
      title: "Containment rate",
      subtitle: "For AI assistants, the proportion of sessions resolved without human escalation — the efficiency metric that justifies the investment",
      take: "Containment rate is the share of AI-handled sessions that never escalate to a human — the ROI metric for support, sales, and ops assistants. It connects model quality directly to labour savings.",
      why: "CFOs fund AI assistants on headcount avoidance. PMs who track containment with quality guardrails prove economics; those who optimise containment without quality create angry customers and higher downstream cost.",
      paragraphs: [
        [
          s("Define escalation events precisely. "),
          x(
            "Transfer to agent, callback request, unresolved session timeout, or explicit 'talk to human' — each counts as non-contained.",
            "Grey area: user leaves without confirming resolution — PM policy decides count.",
          ),
          s(" Ambiguous escalation definitions inflate containment artificially."),
        ],
        [
          s("Containment must be quality-adjusted. "),
          x(
            "100% containment with 50% wrong answers is worse than 70% containment with 92% accuracy.",
            "Track contained-session satisfaction or spot-check contained resolutions weekly.",
          ),
          s(" Report containment × quality, not containment alone."),
        ],
        [
          s("Segment by intent complexity. "),
          x(
            "Password reset may contain 95%; billing dispute 45%. Aggregate containment misallocates roadmap — invest where volume × gap is largest.",
            "PM prioritises intents on containment lift potential, not demo impressiveness.",
          ),
          s(" Containment heatmaps drive AI assistant backlogs."),
        ],
      ],
      examples: [
        {
          title: "Telco chatbot — containment ROI model",
          body: "70% containment on 2M sessions/month × $4 agent cost = $5.6M annual savings at quality bar 90% task success. PM presented containment only with quality floor — board approved phase 2 intents.",
        },
        {
          title: "False containment — silent escalation",
          body: "Bot said 'resolved' without fixing issue; user called next day. Containment metric counted success; repeat-contact rate exposed failure. PM added 48-hour repeat-contact as quality guard on containment.",
        },
        {
          title: "Intent-tiered targets",
          body: "Tier 1 FAQs: 85% containment target. Tier 3 disputes: 40% target with human-in-loop. PM stopped single headline number; roadmap focused on Tier 2 billing — highest volume × gap.",
        },
      ],
    }),
    buildSection({
      number: "2.4",
      title: "Hallucination rate",
      subtitle: "Measuring how often the model generates confident incorrect output — and the sampling strategies that make it measurable at scale",
      take: "Hallucination rate is the frequency of confident factual errors — wrong dates, invented citations, incorrect policy claims. It requires explicit sampling, adjudication rubrics, and stratification by domain risk.",
      why: "You can't improve what you don't measure, and you can't measure hallucinations on 100% of traffic without budget. PMs who design sampling plans and severity tiers make hallucination a managed KPI, not a Twitter anecdote.",
      paragraphs: [
        [
          s("Define hallucination vs usefulness separately. "),
          x(
            "Hallucination: factually wrong or unsupported claim presented as true. Unhelpful: vague or off-topic but not false.",
            "Rubric with examples per product — adjudicator training is PM-owned.",
          ),
          s(" Mixed definitions make rates incomparable week to week."),
        ],
        [
          s("Sampling strategies for scale. "),
          x(
            "Random sample (1–5% traffic), risk-weighted oversample (high-stakes intents 20%), adversarial set weekly, user-flagged 100% review.",
            "Combine methods: random for baseline trend, flags for pulse, golden adversarial for release gates.",
          ),
          s(" PM sets sample rate by stakes and volume — finance approves adjudication cost."),
        ],
        [
          s("Severity tiers drive response. "),
          x(
            "P0: safety/legal/financial harm. P1: user decision wrong. P2: cosmetic factual nit. Rate alone insufficient — track P0/P1 counts separately.",
            "Dashboard: hallucination rate + severity histogram + citation-attribution failure rate for RAG.",
          ),
          s(" A 2% rate is fine until P0s appear weekly."),
        ],
      ],
      examples: [
        {
          title: "RAG copilot — citation verification sampling",
          body: "5% random sample + 100% flagged answers. Adjudicators checked claim-source alignment. Hallucination rate 3.2%; uncited claim rate 8%. PM prioritised retrieval gaps over model swap — metric pointed to data not weights.",
        },
        {
          title: "Medical FAQ — risk-weighted oversample",
          body: "Dosage and contraindication intents sampled at 25% vs 2% global. P0 hallucination any occurrence triggers incident. Rate looked low aggregate; oversample caught 4 P0s pre-launch — launch blocked until RAG policy layer added.",
        },
        {
          title: "Adversarial weekly bench",
          body: "200 curated trick questions run every Monday. Hallucination rate on bench tracked separately from production sample. Regression on bench blocked Thursday deploy — online sample would have lagged days.",
        },
      ],
    }),
    buildSection({
      number: "2.5",
      title: "Model drift",
      subtitle: "When production performance degrades without a deployment — the slow failure mode that standard monitoring misses",
      take: "Model drift is gradual performance degradation without a code or weight change — often from upstream model provider updates, prompt context shifts, or tool API changes. Detect it by tracking completion, latency, and error distributions over time with control benchmarks.",
      why: "Teams grep logs for exceptions; drift has no stack trace. PMs who mandate weekly benchmark runs and provider changelog review catch slow bleeds that incident pages miss.",
      paragraphs: [
        [
          s("Provider-side changes are a common drift source. "),
          x(
            "Foundation model updates, silent behaviour shifts, deprecated endpoints — your code unchanged, outputs different.",
            "Pin model versions where possible; subscribe to provider release notes; re-run golden set on announcement.",
          ),
          s(" 'We didn't deploy' doesn't mean nothing changed."),
        ],
        [
          s("Detect drift with fixed benchmark + live trends. "),
          x(
            "Weekly golden set regression. Control questions with expected answers. Statistical process control on completion rate and escalation rate.",
            "Alert when 7-day rolling completion drops >2σ from 30-day baseline.",
          ),
          s(" Drift detection is product ops, not only ML ops."),
        ],
        [
          s("Distinguish model drift from data drift. "),
          x(
            "Model drift: same inputs, worse outputs. Data drift: input distribution changed (new user segment, new doc format).",
            "Different fixes: model drift → pin, rollback, retrain. Data drift → update corpus, re-eval, expand training.",
          ),
          s(" PM triage starts with 'did inputs change or outputs on same inputs?'"),
        ],
      ],
      examples: [
        {
          title: "Silent GPT update — completion -5pp",
          body: "No deploy for 3 weeks; task completion dropped 5pp. Provider had updated base model. Golden set rerun confirmed regression. PM escalated pin to previous version; containment recovered in 48 hours.",
        },
        {
          title: "Tool API schema drift",
          body: "CRM API added required field; agent tool calls started failing softly. Model looked 'dumber' — actually tool observation degraded. Drift dashboard on tool error rate caught it before completion metric fully moved.",
        },
        {
          title: "Weekly golden control chart",
          body: "PM instituted Monday golden run on 150 fixed cases. Chart flagged slow decline over 4 weeks — prompt context had grown from appended feature flags bloating context. Not model drift; context drift. Fixed by prompt budget policy.",
        },
      ],
    }),
    buildSection({
      number: "2.6",
      title: "Data drift",
      subtitle: "When the distribution of incoming queries shifts away from what the model was trained or evaluated on",
      take: "Data drift is shift in live query distribution — new topics, languages, user segments, or document formats — that exposes training and eval blind spots. Monitor intent distribution, OOD rate, and per-segment completion.",
      why: "A model 'working fine' on average may fail a new enterprise segment you sold yesterday. PMs who watch segment-level metrics avoid signing customers your AI isn't ready to serve.",
      paragraphs: [
        [
          s("Track intent and topic distribution over time. "),
          x(
            "Sudden spike in unseen intents signals marketing, seasonality, or new customer profile.",
            "Compare live intent histogram to eval set histogram — gap is risk map.",
          ),
          s(" Eval set should be refreshed when distribution KL divergence exceeds threshold."),
        ],
        [
          s("OOD detection and graceful degradation. "),
          x(
            "Classifier or confidence estimator flags low-familiarity queries. Product response: clarify, narrow, escalate — not confident wrong answers.",
            "OOD rate is a leading indicator before completion collapses.",
          ),
          s(" PM specs UX for OOD — metric without UX is incomplete."),
        ],
        [
          s("Segment-level dashboards for sales alignment. "),
          x(
            "Enterprise vs SMB, locale, industry vertical — completion and hallucination per segment.",
            "Sales promises must map to segments with proven metrics.",
          ),
          s(" New segment launch triggers eval sprint, not just GTM launch."),
        ],
      ],
      examples: [
        {
          title: "New enterprise vertical — eval gap exposed",
          body: "Sold to healthcare; live queries 18% clinical jargon vs 2% in eval. Completion on clinical intents 51%. Data drift by segment, not global failure. PM paused upsell until eval corpus expanded.",
        },
        {
          title: "Viral TikTok traffic — intent tsunami",
          body: "Influencer drove 40% new users asking off-script entertainment queries to serious B2B bot. OOD rate 3×. Bot looked 'broken' — distribution shifted. PM added intent router + playful deflection path; measured recovery.",
        },
        {
          title: "Document format drift — PDF to HTML",
          body: "Customers uploaded HTML exports; parser tuned for PDF. Retrieval quality dropped. Data drift in file type, not language. Metric: parse success rate by MIME type — caught before hallucination rate moved.",
        },
      ],
    }),
    buildSection({
      number: "2.7",
      title: "Online evaluation",
      subtitle: "Running evals continuously on live traffic samples — the always-on quality signal that replaces periodic offline testing",
      take: "Online eval samples live traffic, scores outputs with human adjudication, LLM-as-judge, or automated checks, and feeds dashboards and alerts — bridging the gap between pre-launch golden sets and production reality.",
      why: "Offline evals go stale day one. PMs who instrument online eval catch regressions from real user phrasing, tool failures, and edge cases no lab imagined.",
      paragraphs: [
        [
          s("Design online eval as a pipeline, not a project. "),
          x(
            "Sample → redact PII → score → aggregate → alert. Runs daily minimum; hourly for high-stakes.",
            "LLM-as-judge cheaper but needs calibration against human labels monthly.",
          ),
          s(" PM owns scorecard weights; DS owns judge calibration."),
        ],
        [
          s("Pair automated and human scoring. "),
          x(
            "Automated: JSON validity, citation presence, regex policy checks. Human: nuance, tone, subtle hallucination.",
            "Typical mix: 90% automated filters, 10% human deep review on flagged + random.",
          ),
          s(" Fully automated online eval risks optimising for proxy metrics."),
        ],
        [
          s("Close the loop to releases. "),
          x(
            "Online eval regression blocks promote. Canary traffic compared to baseline on online sample before full ramp.",
            "Same metrics offline and online — if they diverge, your offline set is wrong.",
          ),
          s(" Online eval is the production source of truth."),
        ],
      ],
      examples: [
        {
          title: "LLM judge calibrated monthly",
          body: "Online sample 2K/week scored by judge model. Monthly 200-case human calibration — judge drift corrected. PM tracked judge-human agreement; below 85% triggered rubric revision.",
        },
        {
          title: "Canary gated by online eval",
          body: "New prompt version at 5% traffic until online completion matched baseline ±1pp on 3K samples. Online eval slower than offline but caught tool-timeout failures offline missed.",
        },
        {
          title: "User flag enrichment",
          body: "Thumbs-down sessions 100% routed to adjudication queue. Online eval label budget prioritised user-flagged — highest signal per dollar.",
        },
      ],
    }),
    buildSection({
      number: "2.8",
      title: "RLHF feedback loops",
      subtitle: "Turning user preference signals into training data — the closed loop that makes models improve with usage",
      take: "RLHF and preference optimisation (DPO, RLHF pipelines) convert thumbs, rankings, and edits into training signal — closing the loop from product usage to model behaviour. PM defines preference rubric; DS owns pipeline hygiene.",
      why: "Products that collect feedback but don't train on it leave compounding value on the table. PMs who design feedback UX and legal consent enable flywheels competitors can't copy without your traffic.",
      paragraphs: [
        [
          s("Preference data needs clear 'better' definition. "),
          x(
            "Thumbs up/down without rubric yields noisy labels. Better: pairwise choice between two answers, or edit-as-supervision.",
            "PM documents what optimises — brevity, accuracy, tone — before training consumes labels.",
          ),
          s(" Garbage preferences train garbage alignment."),
        ],
        [
          s("Volume and diversity thresholds matter. "),
          x(
            "Thousands of preferences per behaviour slice before DPO moves metrics. Oversample underrepresented intents.",
            "Feedback loops amplify majority behaviour — monitor minority segment regression.",
          ),
          s(" PM reviews disaggregated impact before each preference training run."),
        ],
        [
          s("Legal and UX for feedback collection. "),
          x(
            "Consent for using interactions as training signal. Opt-out for enterprise. Transparent 'your feedback improves the model' copy.",
            "Enterprise customers may contractually prohibit training — segment feedback pools.",
          ),
          s(" Feedback loop design is privacy policy plus product design."),
        ],
      ],
      examples: [
        {
          title: "Pairwise ranking in support bot",
          body: "Users picked better of two replies — cleaner signal than thumbs. 15K pairs over 8 weeks. DPO improved concise helpfulness 11pp on eval. PM rubric: accurate > empathetic > short.",
        },
        {
          title: "Edit-as-training-data — email assistant",
          body: "User edits to drafts logged as preferred completion. SFT on accepted edits improved acceptance rate 19%. PM ensured opt-in disclosure; enterprise tier excluded from pool.",
        },
        {
          title: "Minority language regression post-DPO",
          body: "Global DPO on English-heavy preferences dropped Spanish completion 4pp. PM mandated stratified preference quotas per locale before next run — feedback loops aren't fire-and-forget.",
        },
      ],
    }),
    buildSection({
      number: "2.9",
      title: "Leading vs lagging indicators",
      subtitle: "Thumbs-down rate and session abandonment as leading signals before downstream business metrics move",
      take: "Leading indicators — thumbs-down, quick abandonment, repeat escalation, edit distance — move before retention and revenue. Lagging indicators — NPS, churn, support cost — confirm damage already done. Instrument both with explicit lead time expectations.",
      why: "Waiting for churn to act on quality is managing by autopsy. PMs who set leading indicator thresholds get weeks of warning to roll back, retrain, or escalate.",
      paragraphs: [
        [
          s("Leading signals for AI quality. "),
          x(
            "Thumbs-down rate, copy/regenerate clicks, time-to-abandon, human takeover within 30s, citation clicks (distrust proxy).",
            "Establish baseline in week 2–4 stable traffic; alert on relative change.",
          ),
          s(" Leading metrics should page on-call for AI features above revenue threshold."),
        ],
        [
          s("Lagging signals confirm business impact. "),
          x(
            "Retention, expansion revenue, support cost per session, error-related refunds, brand sentiment.",
            "Lag weeks to months — use for board narrative, not daily triage.",
          ),
          s(" Don't retire leading metrics when lagging looks fine short-term."),
        ],
        [
          s("Correlate leading to lagging to calibrate thresholds. "),
          x(
            "Historical analysis: '2pp thumbs-down increase → 1.2pp retention drop 6 weeks later.' Sets alert sensitivity.",
            "Quarterly PM review: leading→lagging correlation still holds after product changes.",
          ),
          s(" Uncalibrated alerts cause alert fatigue or false calm."),
        ],
      ],
      examples: [
        {
          title: "Thumbs-down early warning",
          body: "Thumbs-down rate 2.1% → 3.4% in 10 days; completion still within noise. PM triggered rollback of prompt change; thumbs normalised in 3 days. Retention cohort unaffected — leading signal paid off.",
        },
        {
          title: "Abandonment at first response",
          body: "40% sessions ended within one message after model update — leading indicator of tone mismatch. Lagging NPS dropped 3 weeks later. PM tied launch gates to single-turn abandonment rate.",
        },
        {
          title: "Leading-lagging dashboard row",
          body: "Exec dashboard: row 1 leading (weekly), row 2 outcome (completion, containment), row 3 lagging (retention, cost). PM trained leadership to read top-down — stop panic on retention when leading is green.",
        },
      ],
    }),
    buildSection({
      number: "2.10",
      title: "PM decision lens: building your AI metrics stack",
      subtitle: "The minimum viable measurement system to instrument before launch — and the dashboard that surfaces it",
      take: "Minimum viable AI metrics before launch: (1) task completion by intent, (2) containment or escalation rate, (3) hallucination sample with severity, (4) latency p95 and cost per task, (5) leading signals (thumbs, abandonment), (6) weekly golden regression — on one dashboard with owners and alert thresholds.",
      why: "Teams launch with request volume and pray. A defined metrics stack is a launch gate — PMs who ship the dashboard with the feature sleep through week two.",
      paragraphs: [
        [
          s("Pre-launch instrumentation checklist. "),
          x(
            "Trace IDs linking user session → model version → tools → outcome. Intent classifier or tag. Sampling pipeline for human/LLM judge. Golden set job in CI/CD.",
            "If completion can't be computed, feature isn't ready — not 'we'll add metrics later.'",
          ),
          s(" Instrumentation is part of definition of done."),
        ],
        [
          s("One dashboard, six tiles, named owners. "),
          x(
            "Tile owners: PM (completion, containment), DS (hallucination sample), Eng (latency, errors), Ops (escalation quality). Weekly review 30 minutes.",
            "Avoid 12 dashboards nobody opens. One source of truth linked from incident runbook.",
          ),
          s(" Dashboard without weekly review ritual is decoration."),
        ],
        [
          s("Alert thresholds tied to rollback runbook. "),
          x(
            "Example: completion -3pp 7-day rolling → investigate; -5pp → canary rollback. P0 hallucination any → page.",
            "Thresholds set pre-launch with eng on-call agreement — not invented during incident.",
          ),
          s(" Metrics stack includes what happens when red."),
        ],
      ],
      examples: [
        {
          title: "Launch gate — no metrics, no ship",
          body: "PM blocked launch 1 week until completion taxonomy and 3% sample pipeline live. Short delay; week-one debug used dashboard to fix intent routing — would have been blind without it.",
        },
        {
          title: "Single dashboard adoption",
          body: "Consolidated 4 team-specific views into one AI Health page. Exec and on-call used same numbers — ended weekly 'whose metric is right' meetings. PM owned narrative; DS owned methodology footnotes.",
        },
        {
          title: "Rollback runbook linked to alerts",
          body: "Alert fired on containment drop. Runbook: check provider status → golden rerun → prompt pin rollback → comms template. 45-minute recovery. PM wrote runbook alongside metric thresholds pre-launch.",
        },
      ],
    }),
  ],
  quiz: [
    {
      q: "Why are DAU and NPS alone insufficient for AI products?",
      options: [
        "AI products never have daily active users.",
        "Users may adopt while model quality degrades — traditional metrics lag intelligence failure.",
        "NPS is only for B2B products.",
        "DAU doesn't work on mobile.",
      ],
      correct: 1,
      correctFeedback:
        "Right. Adoption and satisfaction can look fine while task success and model health deteriorate — you need outcome and quality metrics.",
      wrongFeedback:
        "DAU/NPS lag quality problems. Add completion, containment, hallucination, and drift metrics. Re-read section 2.1.",
    },
    {
      q: "What is task completion rate?",
      options: [
        "The percentage of users who open the AI feature daily.",
        "Whether the user's actual job got done end-to-end — not just whether the model replied.",
        "The model's score on MMLU benchmark.",
        "Average response latency under 2 seconds.",
      ],
      correct: 1,
      correctFeedback:
        "Exactly. Completion is intent-specific and verifiable — refund issued, ticket resolved, tests pass.",
      wrongFeedback:
        "Completion measures job done, not fluency or adoption. Re-read section 2.2.",
    },
    {
      q: "Containment rate should always be reported alongside:",
      options: [
        "Total API spend only.",
        "Quality measures — contained sessions that are actually correct.",
        "Number of model parameters.",
        "Competitor feature parity.",
      ],
      correct: 1,
      correctFeedback:
        "Right. High containment with wrong answers is worse than lower containment with quality — always quality-adjust.",
      wrongFeedback:
        "Containment without quality guardrails optimises the wrong thing. Re-read section 2.3.",
    },
    {
      kind: "categorize",
      q: "Classify each metric as primarily leading or lagging for AI quality.",
      categories: ["Leading indicator", "Lagging indicator"],
      items: [
        { text: "Thumbs-down rate spike over 7 days.", category: 0 },
        { text: "6-month retention cohort decline.", category: 1 },
        { text: "Session abandonment after first AI response.", category: 0 },
        { text: "Support cost per resolved ticket.", category: 1 },
        { text: "Regenerate-click rate increase.", category: 0 },
        { text: "Quarterly NPS movement.", category: 1 },
      ],
      correctFeedback:
        "Right. Thumbs, abandonment, and regenerate clicks move first; retention, cost, and NPS confirm impact later.",
      wrongFeedback:
        "Leading signals warn early; lagging signals confirm business damage. Re-read section 2.9.",
    },
    {
      q: "Model drift is best described as:",
      options: [
        "Users asking new types of questions the model wasn't evaluated on.",
        "Performance degrading without your deployment — e.g. provider model changes or context shifts.",
        "The model getting faster over time.",
        "Increase in training data size.",
      ],
      correct: 1,
      correctFeedback:
        "Right. Drift is same-input worse-output or silent upstream change — distinct from data drift (input distribution shift).",
      wrongFeedback:
        "Model drift ≠ data drift. Drift is degradation without your deploy. Re-read sections 2.5 and 2.6.",
    },
    {
      q: "Minimum viable AI metrics stack before launch should include:",
      options: [
        "Only request count and average latency.",
        "Task completion by intent, escalation/containment, hallucination sampling, leading signals, and golden regression.",
        "MMLU and HellaSwag benchmark scores.",
        "Git commit frequency and sprint velocity.",
      ],
      correct: 1,
      correctFeedback:
        "Right. Outcome metrics, quality samples, leading signals, and weekly golden regression — on one owned dashboard.",
      wrongFeedback:
        "Launch requires outcome and quality instrumentation, not volume alone. Re-read section 2.10.",
    },
  ],
});
