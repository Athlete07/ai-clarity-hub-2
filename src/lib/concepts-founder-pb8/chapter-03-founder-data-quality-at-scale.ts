import { buildChapter, buildSection, s, x, sectionWithDiagram } from "../concepts-pb4-helpers";

export const chapter03FounderDataQualityAtScale = buildChapter({
  slug: "founder-data-quality-at-scale",
  number: 3,
  shortTitle: "Data Quality at Scale",
  title: "Data Quality Problems at Scale",
  readingMinutes: 24,
  summary:
    "The data problems invisible at 1,000 users become company-threatening at 100,000. Training contamination, feedback loop corruption, pipeline failures, and governance gaps — and the audit founders must run before every major model update.",
  keyTakeaway:
    "Data quality is not a preprocessing step — it is a scaling constraint. Bad data entering your training pipeline silently degrades models. Corrupted feedback loops optimise toward the wrong objective. Founders who scale data collection without scaling governance ship regressions disguised as improvements.",
  pmCallout:
    "As a founder: your feedback loop is only as honest as your data pipeline. Before you celebrate model improvement, ask whether training data still represents the users you serve today — not the users you had six months ago.",
  sections: [
    sectionWithDiagram({
      number: "3.1",
      title: "Why data quality degrades as you scale",
      subtitle: "More users means more edge cases, more adversarial inputs, and more distribution drift",
      take: "Data quality degrades at scale because volume amplifies noise. More users generate more edge cases, more labelling errors, more adversarial inputs, and more stale examples that no longer represent production reality.",
      why: "Models trained on degrading data get worse while dashboards show retraining activity. Founders mistake pipeline motion for progress.",
      paragraphs: [
        [
          s("Volume overwhelms manual quality controls. "),
          x(
            "At 1,000 users, a founder can eyeball training batches. At 100,000, automated pipelines ingest thousands of examples daily — and a 2% error rate is thousands of bad labels per month.",
            "Manual review does not scale. Automated quality gates must scale with ingestion.",
          ),
          s(" The percentage of bad data stays constant or rises; the absolute volume of damage grows."),
        ],
        [
          s("User-generated training signal is messy. "),
          x(
            "Overrides are not always correct. Users game systems. Click-through behaviour confuses preference with convenience. Implicit feedback is noisy.",
            "Treating all user signal as ground truth poisons the loop at scale.",
          ),
          s(" Classify signal types: gold labels, silver labels, and noise — weight them differently."),
        ],
        [
          s("Distribution drift outpaces dataset refresh. "),
          x(
            "Training corpora reflect last quarter's users. Production serves this quarter's users. Without refresh cadence, models optimise for a ghost population.",
            "Dataset freshness is a metric — measure median age of training examples by segment.",
          ),
          s(" Stale data is silent technical debt with compound interest."),
        ],
      ],
      examples: [
        {
          title: "YouTube recommendations — scale and signal noise",
          body: "Recommendation systems at YouTube-scale face relentless data quality challenges: noisy implicit feedback, adversarial uploads, and shifting viewer behaviour. Quality gates and sampling discipline are core infrastructure. Founders at smaller scale need proportional discipline, not proportional complacency.",
        },
        {
          title: "Label noise at scale — 2% became 2,000 errors",
          body: "A document-classification AI ingested 100K monthly labelled examples at 2.1% contractor error rate — 2,100 mislabels. Aggregate accuracy dropped 4 points over two retraining cycles before root-cause analysis found labelling drift. Error rate was stable; volume was not.",
        },
        {
          title: "Implicit feedback trap",
          body: "A shopping-assistant AI trained on click-through signal learned to recommend sensational products users clicked but did not buy. Conversion fell while engagement rose. The feedback loop optimised the wrong objective. Explicit outcome labels were required.",
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
      number: "3.2",
      title: "Training data contamination",
      subtitle: "When bad user data enters your training pipeline and silently degrades your model",
      take: "Training data contamination occurs when incorrect, adversarial, biased, or out-of-policy examples enter fine-tuning or retraining pipelines — degrading model behaviour in ways offline eval may not catch until production.",
      why: "One contaminated batch can undo months of quality work. Contamination is a security and governance problem, not just a data cleaning task.",
      paragraphs: [
        [
          s("Contamination sources are diverse. "),
          x(
            "Prompt injection attempts stored as training examples. Contractor labelling errors at scale. PII leaking into training corpora. Deprecated product behaviour encoded in old examples. Competitor sabotage via coordinated bad inputs.",
            "Any user input that reaches training without validation is a contamination vector.",
          ),
          s(" Map every path from user input to training set — block unvalidated paths."),
        ],
        [
          s("Detection requires statistical and semantic checks. "),
          x(
            "Sudden shifts in label distribution, duplicate adversarial patterns, outliers in embedding space, and examples violating content policy should block ingestion automatically.",
            "Human review samples 1–5% of batches; automation guards the rest.",
          ),
          s(" Quarantine suspicious batches — never auto-merge to production training."),
        ],
        [
          s("Recovery means versioned datasets and rollback. "),
          x(
            "If contamination ships, rollback to last known-good dataset version and retrain. Without dataset versioning, recovery is guesswork.",
            "Treat training datasets like production code: versioned, diffable, auditable.",
          ),
          s(" Post-incident: add the failure pattern to automated blocklist."),
        ],
      ],
      examples: [
        {
          title: "Microsoft Tay — adversarial contamination",
          body: "Tay demonstrated how quickly adversarial user input can contaminate a learning system at scale. Modern fine-tuning pipelines face the same class of risk. Founders must filter, quarantine, and review before user content becomes training data.",
        },
        {
          title: "PII in fine-tuning set — compliance halt",
          body: "A customer-service AI fine-tuned on ticket exports included unredacted customer emails in 0.4% of examples. Compliance review halted deployment. PII scanning on ingestion — not post-hoc — became mandatory. Contamination risk was legal, not just quality.",
        },
        {
          title: "Dataset versioning saved a retrain",
          body: "A contaminated batch slipped through automated checks. The team rolled back to dataset v2.3, retrained in 48 hours, and deployed. Without versioning, they would have manually reconstructed six weeks of curation. Versioning is insurance.",
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
      title: "Feedback loop corruption",
      subtitle: "When the signals you use to improve your model start pointing in the wrong direction",
      take: "Feedback loop corruption happens when optimisation targets diverge from user value: noisy labels, gaming, selection bias in who provides feedback, and delayed signals that reflect old product behaviour.",
      why: "A corrupted loop does not stall — it actively makes the product worse while improvement metrics look positive. This is one of the most dangerous failure modes in AI-native companies.",
      paragraphs: [
        [
          s("Align the loop objective with business outcome. "),
          x(
            "Optimising for thumbs-up on drafts is not the same as optimising for sent emails that achieved their goal.",
            "Define the north-star outcome label and trace how each feedback signal proxies it.",
          ),
          s(" Misaligned proxies corrupt loops slowly — review proxy validity quarterly."),
        ],
        [
          s("Selection bias distorts who you learn from. "),
          x(
            "Power users provide most feedback but are not representative. Silent majority churns without signalling. Overfitting to vocal users skews the model toward edge preferences.",
            "Weight feedback by representative sampling or stratified aggregation.",
          ),
          s(" Ask: 'whose behaviour is our loop learning from?' If the answer is 'our loudest users,' you have bias."),
        ],
        [
          s("Delay and leakage break causal learning. "),
          x(
            "Using future information in training labels, mixing pre- and post-feature-launch data, and delayed outcome labels all corrupt causal signal.",
            "Timestamp everything. Train on data from stable product periods.",
          ),
          s(" A loop that learns from leaked future data looks brilliant offline and fails online."),
        ],
      ],
      examples: [
        {
          title: "Netflix — aligned feedback proxies",
          body: "Netflix invests heavily in aligning recommendation feedback with long-term engagement quality, not just clicks. Founders must similarly audit whether their loop optimises proxy metrics or actual customer outcomes.",
        },
        {
          title: "Power-user skew — mainstream churn",
          body: "A coding assistant loop learned from users who accepted 40+ suggestions daily. Mainstream developers found suggestions too aggressive. Acceptance among power users rose; NPS among median users fell. Stratified retraining on median cohort restored balance.",
        },
        {
          title: "Gaming the thumbs-down",
          body: "Users discovered thumbs-down triggered human review that often produced better answers. The system over-indexed on adversarial thumbs-down patterns. Feedback classification separated 'adversarial gaming' from 'genuine quality signal.'",
        },
      ],
    }),
    buildSection({
      number: "3.4",
      title: "Data pipeline reliability at scale",
      subtitle: "The infrastructure failures that corrupt your training data without obvious symptoms",
      take: "Data pipelines fail silently: partial exports, schema drift, duplicate ingestion, timezone bugs, and job retries that double-label examples. Pipeline reliability is data quality infrastructure.",
      why: "Founders invest in model architecture while pipeline failures corrupt the fuel. A perfect engine with contaminated fuel still crashes.",
      paragraphs: [
        [
          s("Schema and contract drift breaks pipelines quietly. "),
          x(
            "An API field rename drops a feature column. A null-handling change turns missing values into false labels. Downstream training ingests corrupted rows for weeks.",
            "Data contracts between producers and consumers — with breaking-change alerts — are mandatory at scale.",
          ),
          s(" Test pipelines on schema change the same way you test code on API change."),
        ],
        [
          s("Idempotency and deduplication prevent duplicate poisoning. "),
          x(
            "Retry logic that re-ingests the same example with a different label creates contradiction. Duplicate rows overweight outliers.",
            "Idempotent ingestion keys and dedup passes belong in every training pipeline.",
          ),
          s(" Monitor duplicate rate as a first-class data quality metric."),
        ],
        [
          s("Observability for data pipelines mirrors production observability. "),
          x(
            "Row counts, null rates, label distribution, ingestion latency, and failure rates — dashboarded and alerted.",
            "A 40% drop in daily ingested rows is an incident, not a quiet anomaly.",
          ),
          s(" Assign pipeline on-call rotation before scale, not after a silent failure."),
        ],
      ],
      examples: [
        {
          title: "Airflow failure — three weeks of stale training",
          body: "A scheduled labelling export failed silently for three weeks. Training continued on stale data while production traffic shifted. Model quality dropped gradually. Row-count alerting would have fired day one. Data pipeline observability is model observability.",
        },
        {
          title: "Schema drift — null labels",
          body: "A product update changed empty-field behaviour from null to empty string. Labelling pipeline interpreted empty strings as negative class. 18% of new labels were wrong for two weeks. Contract tests on ingestion caught similar drift thereafter.",
        },
        {
          title: "Dedup fix — contradictory examples removed",
          body: "Retry logic created 340K duplicate examples with conflicting labels in a fine-tuning set. After dedup and contradiction resolution, offline eval improved 6 points without any model architecture change. Pipeline hygiene was the improvement.",
        },
      ],
    }),
    buildSection({
      number: "3.5",
      title: "Data governance at scale",
      subtitle: "Who owns data quality, how it is measured, and what the escalation path looks like",
      take: "Data governance at scale requires: named ownership (data quality lead or rotating steward), defined metrics (freshness, error rate, contamination blocks, duplicate rate), escalation paths (quarantine → investigate → rollback dataset), and cross-functional accountability.",
      why: "Without governance, data quality is everyone's problem and nobody's job. Incidents become blameless post-mortems with no structural fix.",
      paragraphs: [
        [
          s("Assign explicit data quality ownership. "),
          x(
            "At scale, 'the data team handles it' is insufficient. Name a DRI for training data quality with authority to block releases.",
            "Quality DRIs report metrics weekly alongside model performance metrics.",
          ),
          s(" Block authority is power — founders must back quality holds even when they delay features."),
        ],
        [
          s("Define measurable quality SLAs. "),
          x(
            "Examples: max 1% labelling error rate, max 7-day median dataset freshness, zero PII in training exports, 100% schema contract compliance.",
            "SLAs without measurement are aspirations. Automate measurement.",
          ),
          s(" Publish SLAs internally. Teams optimise what is measured and visible."),
        ],
        [
          s("Escalation path: quarantine, investigate, rollback. "),
          x(
            "Suspicious batch → automatic quarantine → human review within 24 hours → merge or discard → if merged in error, dataset rollback and retrain.",
            "Document the path. Run a tabletop exercise before you need it.",
          ),
          s(" Governance is tested in incidents. Drill once per quarter."),
        ],
      ],
      examples: [
        {
          title: "Stripe data culture — ownership and contracts",
          body: "Stripe's engineering culture emphasises data contract discipline and ownership at scale. Founders should establish data quality DRIs and contracts early — before pipeline complexity makes retroactive governance painful.",
        },
        {
          title: "Quality hold delayed launch — retained trust",
          body: "A data quality DRI blocked a model release over elevated contamination flags. Launch delayed nine days. Post-release override rate was lowest in company history. The founder publicly credited the hold. Governance earned engineering trust.",
        },
        {
          title: "Quarterly governance tabletop",
          body: "An AI team ran a quarterly drill: simulated contaminated batch, timed quarantine response, practiced dataset rollback. First drill took 6 hours. Fourth drill took 90 minutes. Governance speed is competitive advantage.",
        },
      ],
    }),
    buildSection({
      number: "3.6",
      title: "Founder decision lens: the data quality audit",
      subtitle: "The review to run before each major model update to ensure your training data is still trustworthy",
      take: "Before every major model update, run a data quality audit: dataset freshness by segment, labelling error sample, contamination scan results, feedback loop alignment check, pipeline health dashboard, and comparison of training distribution vs current production distribution.",
      why: "The audit is the founder's checkpoint that improvement work is built on honest fuel. Skipping it ships regressions with confidence.",
      paragraphs: [
        [
          s("Audit checklist — non-negotiable items. "),
          x(
            "(1) Median dataset age by segment. (2) Random sample labelling audit — target 500 examples. (3) Contamination and PII scan pass. (4) Training vs production distribution comparison. (5) Pipeline row-count and error-rate review. (6) Feedback proxy alignment sign-off from product.",
            "Any red item blocks release until resolved or explicitly accepted with founder sign-off.",
          ),
          s(" Print the checklist. Tape it to the release process."),
        ],
        [
          s("Compare training distribution to live production. "),
          x(
            "If training data is 80% English and production is now 55% English, you are shipping a model optimised for the past.",
            "Distribution comparison is a single chart that prevents silent drift.",
          ),
          s(" Founders should see this chart — not just ML leads."),
        ],
        [
          s("Document audit outcomes in the model card. "),
          x(
            "Record: dataset version, audit date, pass/fail per item, known limitations, segments under-represented.",
            "Model cards are diligence artefacts and internal memory.",
          ),
          s(" Investors and enterprise customers increasingly ask for model cards. Build the habit early."),
        ],
      ],
      examples: [
        {
          title: "Audit caught distribution mismatch — avoided regression",
          body: "Pre-release audit showed training data was 90% SMB tickets while enterprise was now 40% of traffic. Release paused; enterprise-stratified data collection ran for three weeks. Post-release enterprise override rate improved instead of collapsing. The audit paid for itself.",
        },
        {
          title: "Model card in enterprise sales",
          body: "An enterprise prospect requested dataset provenance and audit history. The founder produced model cards with audit logs. Deal accelerated — governance was a sales asset, not overhead.",
        },
        {
          title: "Founder sign-off on accepted risk",
          body: "A labelling error rate of 1.4% exceeded the 1% SLA but was segment-isolated. The founder signed acceptance with a remediation plan and held release one week — not indefinitely. Governance includes timed risk acceptance, not just blocking.",
        },
      ],
    }),
  ],
  quiz: [
    {
      q: "Why does a stable 2% labelling error rate become more dangerous at scale?",
      options: [
        "Error rates always increase with volume.",
        "The absolute number of bad labels grows with volume — thousands of errors per month at scale.",
        "Contractors work faster at scale.",
        "Models become immune to label noise at scale.",
      ],
      correct: 1,
      correctFeedback:
        "Right. Percentage error rates hide absolute damage growth. Volume amplifies noise.",
      wrongFeedback:
        "Re-read section 3.1. Stable error rates still compound damage at scale.",
    },
    {
      q: "What is training data contamination?",
      options: [
        "Using too much data in training.",
        "Incorrect, adversarial, or out-of-policy examples entering the training pipeline.",
        "Training on public datasets.",
        "Using GPUs instead of CPUs.",
      ],
      correct: 1,
      correctFeedback:
        "Exactly. Contamination silently degrades models — a security and governance problem.",
      wrongFeedback:
        "Re-read section 3.2 on contamination sources and detection.",
    },
    {
      kind: "categorize",
      q: "Sort each feedback signal issue into the correct corruption type.",
      categories: ["Proxy misalignment", "Selection bias"],
      items: [
        { text: "Optimising click-through instead of purchase completion.", category: 0 },
        { text: "Loop learns mostly from power users who are not representative.", category: 1 },
        { text: "Thumbs-up on drafts that users never send.", category: 0 },
        { text: "Silent majority churns without providing feedback.", category: 1 },
        { text: "Engagement metric rises while conversion falls.", category: 0 },
        { text: "Feedback dominated by vocal enterprise beta customers.", category: 1 },
      ],
      correctFeedback:
        "Right. Proxy misalignment optimises the wrong outcome; selection bias learns from unrepresentative users. Re-read section 3.3.",
      wrongFeedback:
        "Re-read section 3.3 on loop corruption — proxies vs selection bias.",
    },
    {
      q: "What pipeline failure mode creates contradictory training examples?",
      options: [
        "Schema contract testing.",
        "Retry logic that re-ingests the same example with different labels without deduplication.",
        "Dataset versioning.",
        "Row-count alerting.",
      ],
      correct: 1,
      correctFeedback:
        "Right. Idempotency and dedup are mandatory — retries without them poison training data.",
      wrongFeedback:
        "Re-read section 3.4 on pipeline reliability and deduplication.",
    },
    {
      kind: "order",
      q: "Order the data governance escalation path.",
      prompt: "Drag to arrange first response (top) to recovery (bottom).",
      items: [
        "Automatic quarantine of suspicious batch.",
        "Human review within 24 hours — merge or discard.",
        "If bad data merged: dataset version rollback.",
        "Retrain from last known-good dataset and post-incident blocklist update.",
      ],
      correctFeedback:
        "Exactly. Quarantine → investigate → rollback → retrain. Re-read sections 3.5 and 3.6.",
      wrongFeedback:
        "Re-read sections 3.5 and 3.6 on governance escalation and audit.",
    },
    {
      q: "What should founders review before every major model update?",
      options: [
        "Only offline benchmark scores.",
        "Data quality audit: freshness, labelling sample, contamination scan, distribution vs production, pipeline health.",
        "Competitor press releases.",
        "Latest foundation model release notes only.",
      ],
      correct: 1,
      correctFeedback:
        "Right. The pre-release audit ensures training data still represents production reality.",
      wrongFeedback:
        "Re-read section 3.6 on the founder data quality audit checklist.",
    },
  ],
});
