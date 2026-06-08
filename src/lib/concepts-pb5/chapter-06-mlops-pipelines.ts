import { buildChapter, buildSection, s, x } from "../concepts-pb4-helpers";

export const chapter06MlopsPipelines = buildChapter({
  slug: "pb5-mlops-pipelines",
  number: 6,
  shortTitle: "MLOps Pipelines",
  title: "MLOps Pipelines",
  readingMinutes: 30,
  summary:
    "CI/CD for models, registries, canary and shadow deploys, monitoring drift, and rollback — the operational pipeline that turns a notebook win into a product you can ship and sleep through. What PMs own vs what engineering owns.",
  keyTakeaway:
    "MLOps is how AI features get repeatable releases: versioned artifacts, gated promotions, observable production behaviour, and fast rollback. Without it, every model update is a manual fire drill — and PMs can't iterate on quality.",
  pmCallout:
    "As a PM: if your team can't answer 'which model version is in prod, what data trained it, and how do we roll back in five minutes,' you're not running a product — you're running a demo.",
  sections: [
    buildSection({
      number: "6.1",
      title: "What MLOps means for AI products",
      subtitle: "Beyond DevOps — data, models, and eval gates",
      take: "MLOps applies software engineering discipline to ML lifecycles: versioned datasets and models, automated training and eval pipelines, staged deployments, and production monitoring — so AI features release predictably instead of via someone's laptop.",
      why: "Classic DevOps ships code; MLOps ships code plus artifacts that change behaviour probabilistically. PMs who understand the difference scope realistic release cadences and staffing.",
      paragraphs: [
        [
          s("AI products have three moving parts: code, data, and model weights. "),
          x(
            "A bugfix might be a prompt template change (code), new fine-tune examples (data), or swapped checkpoint (model). Each has different test requirements and rollback mechanics.",
            "MLOps unifies them in pipelines: commit triggers train → eval gate → staging deploy → canary → prod.",
          ),
          s(" PMs treat model version like app version — visible in admin, changelog, and support tooling."),
        ],
        [
          s("MLOps maturity correlates with iteration speed. "),
          x(
            "Immature: monthly manual model swaps, no eval automation, outages from untested prompts. Mature: weekly releases with automated regression, 5-minute rollback, drift alerts.",
            "PM roadmap velocity depends on pipeline maturity — you can't A/B daily if deploy takes two weeks.",
          ),
          s(" Fund MLOps infrastructure before funding the tenth prompt tweak experiment."),
        ],
        [
          s("PM ownership in MLOps is governance, not YAML. "),
          x(
            "PMs define: golden eval sets, pass thresholds, rollout policy, incident severity, customer communication for model changes. Engineering owns pipeline implementation.",
            "Shared artifact: model card per release — data sources, known limitations, eval scores, rollback procedure.",
          ),
          s(" Blameless post-mortems when a bad model ships; fix the gate that let it through."),
        ],
      ],
      examples: [
        {
          title: "Stripe-style eng culture applied to LLM features",
          body: "Teams with strong DevOps adopted the same rigor for RAG: index version pinned, embedding model in registry, eval in CI. PM release notes included 'retrieval index v47' alongside app 2.3. Support could reproduce user issues.",
        },
        {
          title: "Manual model swap outage — no rollback path",
          body: "Engineer hot-swapped production LLM Friday evening; Monday support flooded with 'AI got worse' tickets. No registry tag, no flag — rollback took 6 hours finding old weights. PM post-mortem mandated feature flags and registry — MLOps born from pain.",
        },
        {
          title: "Startup buys MLOps via managed platforms",
          body: "A 15-person team used Databricks MLflow + managed vector DB instead of building pipelines. PM traded customisability for speed — valid when volume is low and time-to-market dominates.",
        },
      ],
    }),
    buildSection({
      number: "6.2",
      title: "CI/CD for models",
      subtitle: "Automated build, test, and promote — for weights not just code",
      take: "Model CI/CD runs training or packaging jobs on schedule or trigger, executes eval suites against golden sets, and promotes passing artifacts to staging — mirroring application CI/CD but with nondeterministic training and longer job times.",
      why: "PMs promise 'continuous improvement' to customers. Without model CI/CD, that's a slogan. With it, you can commit to weekly quality lifts with measurable gates.",
      paragraphs: [
        [
          s("Pipeline stages PMs should recognise. "),
          x(
            "Trigger (new data, new base model, prompt change) → build (train/fine-tune/package) → test (offline eval, safety suite) → stage deploy → integration test → prod promote.",
            "Jobs run 10 minutes to 10 hours depending on training. PM schedules releases around pipeline duration — not arbitrary sprint end.",
          ),
          s(" Failed eval blocks promote — non-negotiable gate, not advisory."),
        ],
        [
          s("What goes in model CI vs app CI. "),
          x(
            "App CI: unit tests, lint, integration. Model CI: perplexity/task metrics, format compliance, regression on prior release, latency benchmark on target hardware, prompt injection red-team subset.",
            "Flaky evals destroy trust in CI — PM works with ML to stabilise golden set and thresholds.",
          ),
          s(" One failing safety test should block prod like a failing unit test."),
        ],
        [
          s("Artifacts are immutable once promoted. "),
          x(
            "Build produces model.tar + manifest (hash, training data version, hyperparams). Registry stores immutably; prod points to tag 'prod-2026-06-08'. Rollback = retag pointer, not rebuild.",
            "Rebuilding on rollback risks different weights — never acceptable in regulated deployments.",
          ),
          s(" PM changelog references artifact IDs customers can audit."),
        ],
      ],
      examples: [
        {
          title: "GitHub Actions + HF pipeline — nightly fine-tune",
          body: "Team scheduled nightly LoRA fine-tune on new thumbs-up data. CI ran 200-prompt eval; auto-promoted to staging if +2pp task success. PM reviewed weekly promotion to prod — human gate on automation.",
        },
        {
          title: "Eval flake blocked releases for a month",
          body: "LLM-judge eval variance caused 40% false failures. PM paused auto-promote; team added human adjudication on borderline cases. Lesson: CI gates must be trustworthy or teams bypass them.",
        },
        {
          title: "Prompt-only change in CI",
          body: "Not every release retrains — prompt template v12 went through CI with same model weights: regression eval on format and tone. PM treated prompts as versioned artifacts in registry alongside checkpoints.",
        },
      ],
    }),
    buildSection({
      number: "6.3",
      title: "Model registry and versioning",
      subtitle: "Single source of truth for what's running where",
      take: "A model registry stores versioned model artifacts, metadata (training data hash, eval scores, author), and deployment stage tags (staging, prod, canary). Every environment points to a registry entry — not a file path on someone's machine.",
      why: "Support tickets start with 'what changed?' Registry answers in 30 seconds. Without it, debugging production AI is archaeology.",
      paragraphs: [
        [
          s("Registry metadata PMs should require. "),
          x(
            "Model ID, base model, fine-tune dataset version, training date, eval metrics snapshot, quantisation format, known limitations, approver, linked PRD/Jira.",
            "Model cards (Hugging Face style) document intended use and failure modes — legal and sales read them.",
          ),
          s(" Sparse metadata = slow incident response."),
        ],
        [
          s("Semantic versioning for models. "),
          x(
            "Major: behaviour change requiring customer comms (new base model). Minor: fine-tune improvement, same API contract. Patch: quantisation or infra change, same eval band.",
            "Align version bumps with customer-facing changelog policy — enterprise wants 30-day notice on major.",
          ),
          s(" PM owns customer communication policy; eng owns version tagging scheme."),
        ],
        [
          s("Multi-component products version separately. "),
          x(
            "LLM checkpoint v3.2 + embedding model v1.8 + retrieval index v44 + prompt pack v12 — composite release manifest ties them together.",
            "Updating only the index without updating eval suite caused bugs when teams versioned monolithically as 'AI v5.'",
          ),
          s(" PM release notes list all component versions — support reproduces exact stack."),
        ],
      ],
      examples: [
        {
          title: "MLflow registry — staging vs production aliases",
          body: "Team used MLflow aliases: @staging, @prod, @canary. Promotion was alias move after eval. PM dashboard showed current prod alias and diff vs last week — executive visibility without Jira archaeology.",
        },
        {
          title: "Compliance audit — training data lineage",
          body: "Auditor asked which customer data trained model 2.4. Registry linked dataset hash to consent logs. PM passed audit in days — would have failed with ad-hoc S3 folders.",
        },
        {
          title: "Wrong index version — retrieval regression",
          body: "Prod LLM updated but retrieval index stale by two versions. Answers cited deleted docs. PM added composite manifest gate: prod promote requires matching index tag.",
        },
      ],
    }),
    buildSection({
      number: "6.4",
      title: "Canary and shadow deployments",
      subtitle: "Testing new models on real traffic before full cutover",
      take: "Canary routes a small percentage of production traffic to a new model version while monitoring metrics; shadow runs the new model in parallel without serving outputs to users — comparing divergence offline. Both reduce blast radius of bad releases.",
      why: "Offline eval misses production long tails. Canary and shadow are how PMs validate 'better on benchmark' means 'better for users' before betting 100% traffic.",
      paragraphs: [
        [
          s("Canary — serve new model to a slice, measure, expand or rollback. "),
          x(
            "Start 1–5% traffic on model B; monitor task success, latency, error rate, thumbs-down for 24–72 hours. Auto-rollback if thresholds breach.",
            "PM defines success criteria before canary starts — avoids moving goalposts when results are mixed.",
          ),
          s(" Gradual ramp: 5% → 25% → 100% over days for high-risk changes."),
        ],
        [
          s("Shadow — observe without user impact. "),
          x(
            "Model B processes same inputs as prod model A; outputs logged to comparison store, not returned. Measure agreement, quality on sampled human review, latency cost.",
            "Shadow doubles inference cost during experiment — PM budgets GPU for shadow period.",
          ),
          s(" Ideal for regulated domains where bad canary answer is unacceptable even at 1%."),
        ],
        [
          s("Feature flags unify model and code rollouts. "),
          x(
            "LaunchDarkly, Unleash, or homegrown flags keyed by tenant, user cohort, or query type. PM can enable new model for internal dogfood, then beta customers, then GA.",
            "Kill switch flips flag to previous model version — faster than redeploy if registry pointers wired correctly.",
          ),
          s(" Every model release ships behind a flag until canary passes — PM policy, not suggestion."),
        ],
      ],
      examples: [
        {
          title: "5% canary caught summarisation regression",
          body: "New fine-tune improved FAQ accuracy but regressed long-doc summarisation — offline eval overweighted FAQs. Canary showed +18% thumbs-down on >2K token inputs. PM rolled back before full deploy.",
        },
        {
          title: "Shadow mode for bank copilot",
          body: "Regulator uncomfortable with canary serving unreviewed answers. Shadow ran 2 weeks; human reviewers sampled 500 shadow vs prod pairs. PM presented 94% preference for shadow before prod promotion.",
        },
        {
          title: "Tenant-level flags for enterprise",
          body: "Enterprise customer A required 30-day notice before model change. PM used per-tenant flag: Customer A stayed on v2.3 while GA moved to v2.4. Registry supported multiple prod aliases by tenant.",
        },
      ],
    }),
    buildSection({
      number: "6.5",
      title: "Feature stores and data pipelines",
      subtitle: "Fresh features and training data — the upstream of model quality",
      take: "Feature stores centralise computed features for training and inference consistency; data pipelines ingest, clean, label, and version datasets that feed training jobs. Stale or leaky data pipelines cause production drift more often than model architecture choices.",
      why: "PMs focus on the model; users suffer from bad data. Pipelines are the plumbing PMs fund indirectly when they ask for 'personalisation' or 'learn from usage.'",
      paragraphs: [
        [
          s("Training-serving skew kills fine-tunes. "),
          x(
            "Features computed differently offline (batch SQL) vs online (API) produce models that fail in prod. Feature stores serve same definitions both paths — Feast, Tecton, Databricks Feature Store.",
            "LLM era: skew also hits RAG — chunking at index time must match retrieval code version.",
          ),
          s(" PM asks 'is training data pipeline the same code path as prod?' in design review."),
        ],
        [
          s("Data versioning and lineage. "),
          x(
            "DVC, LakeFS, Delta time travel — snapshot datasets immutably for reproducible training. Label: dataset-v2026-06-08-hash.",
            "GDPR deletion requests must propagate: remove user from dataset snapshot before next train — PM coordinates with legal.",
          ),
          s(" No registry without dataset version — incomplete lineage."),
        ],
        [
          s("Feedback loops as product infrastructure. "),
          x(
            "Thumbs up/down, edits, escalations → labelled examples → weekly fine-tune pipeline. PM defines consent, sampling rate, and quality bar for auto-inclusion.",
            "Poisoning risk: adversarial thumbs-down or PII in feedback — moderation step before training queue.",
          ),
          s(" Data flywheel is an MLOps pipeline with a PM-owned policy layer."),
        ],
      ],
      examples: [
        {
          title: "Feast for recommendation — classic feature store win",
          body: "E-commerce team eliminated training-serving skew on user embeddings via Feast. AI PM analogue: version embedding model + chunk pipeline together in composite manifest.",
        },
        {
          title: "Feedback loop PII incident",
          body: "Users pasted SSNs in thumbs-up feedback; auto-training queue ingested them. Pipeline blocked; PM added PII scrubber and human review for feedback→train path.",
        },
        {
          title: "Stale CRM data in copilot",
          body: "RAG index refreshed nightly but CRM pipeline broke silently for 9 days. Answers cited outdated pricing. PM added data freshness SLA alert — pipeline monitor, not model monitor.",
        },
      ],
    }),
    buildSection({
      number: "6.6",
      title: "Monitoring and drift detection",
      subtitle: "Knowing when production behaviour diverges from expectations",
      take: "Production monitoring tracks latency, error rates, cost, and quality proxies (thumbs-down rate, escalation rate, LLM-judge scores on sampled traffic). Drift detection alerts when input distributions or output patterns shift — signalling retrain, index refresh, or incident.",
      why: "Models don't throw exceptions when the world changes — they quietly get worse. PMs define what 'worse' means numerically before users flood support.",
      paragraphs: [
        [
          s("Operational metrics — the easy layer. "),
          x(
            "p50/p95 latency, tokens per request, GPU utilisation, 5xx rate, queue depth, cost per 1K queries. Standard dashboards — Datadog, Grafana, cloud-native.",
            "PM SLAs live here first: 'p95 <2s, error rate <0.5%.'",
          ),
          s(" Ops metrics catch infra breaks; not semantic quality decay."),
        ],
        [
          s("Quality metrics — the PM layer. "),
          x(
            "Online: thumbs-down rate, task abandonment, human escalation, citation click-through, edit distance on AI drafts. Sampled offline: LLM-judge on 1% traffic with human calibration weekly.",
            "Define baselines per model version — compare canary to prod on same metrics.",
          ),
          s(" Alert when thumbs-down rate exceeds 2× baseline for 1 hour — incident playbook."),
        ],
        [
          s("Drift types PMs should name. "),
          x(
            "Data drift: input queries shift (new product launch → new vocabulary). Concept drift: same questions, correct answers changed (policy update). Model drift: weights stale relative to world.",
            "Remediation: refresh RAG index, trigger retrain, publish user comms, temporary prompt guardrail.",
          ),
          s(" Drift alerts without runbook = noisy pager no one owns."),
        ],
      ],
      examples: [
        {
          title: "Langfuse / LangSmith — LLM-specific observability",
          body: "Teams trace prompt, retrieval, model version, latency, and user feedback per query. PM dashboards segment thumbs-down by model version — caught fine-tune regression in 4 hours.",
        },
        {
          title: "Product launch vocabulary drift",
          body: "New feature name flooded queries; RAG had no docs yet. Escalation rate 3× baseline. PM treated as launch ops: index seed content + temporary keyword fallback — not 'retrain the LLM.'",
        },
        {
          title: "Cost drift alert",
          body: "Average tokens per request crept up 40% after prompt change — bill shock before quality review. PM added token budget alert in monitoring — cost is a first-class metric.",
        },
      ],
    }),
    buildSection({
      number: "6.7",
      title: "Rollback and incident response",
      subtitle: "When a bad model ships — speed and communication",
      take: "Rollback means repointing prod to last-known-good registry tag or flipping feature flag — target under 5 minutes for model-only changes. Incident response adds comms, customer notification, and post-mortem fixing the gate that failed.",
      why: "AI incidents are reputational — 'the AI told customers wrong refund policy.' PMs own external comms and severity; eng owns technical rollback.",
      paragraphs: [
        [
          s("Rollback mechanics must be rehearsed. "),
          x(
            "Game day: simulate bad deploy, measure time-to-rollback. If rollback requires rebuild or manual S3 hunt, fix pipeline before next release.",
            "Composite rollback: revert LLM + index + prompt together if release was bundled — partial rollback can worsen inconsistency.",
          ),
          s(" PM attends quarterly game days — rollback is product continuity."),
        ],
        [
          s("Incident severity for AI products. "),
          x(
            "SEV1: safety violation, regulatory breach, widespread wrong financial/medical advice. SEV2: significant quality regression, major customer impact. SEV3: isolated edge case.",
            "SEV1 may require public status page update and customer email — PM drafts templates in advance.",
          ),
          s(" 'Model behaviour bug' belongs in incident taxonomy alongside outage."),
        ],
        [
          s("Post-mortem fixes gates, not people. "),
          x(
            "Ask: which eval missed this? Why did canary not catch it? Was shadow skipped for deadline? Action items: new eval case, stricter threshold, mandatory shadow for major bumps.",
            "PM adds failure mode to golden set within 48 hours — institutional learning.",
          ),
          s(" Repeat incidents without gate fixes are management failures."),
        ],
      ],
      examples: [
        {
          title: "3-minute rollback via feature flag",
          body: "Canary showed safety filter regression at 5% traffic. On-call flipped flag to model v2.3.1; prod restored in 3 minutes. PM sent internal comms; no customer email — caught early.",
        },
        {
          title: "Slow rollback — 6-hour reputation damage",
          body: "No flag; weights overwritten in place. Team hunted backup checkpoint. Viral wrong tax advice screenshots circulated. PM post-mortem: immutable registry + alias-only promote mandatory.",
        },
        {
          title: "Customer comms for major model upgrade",
          body: "Enterprise contract required 14-day notice on major model change. PM automated email from registry major-version bump — compliance as pipeline hook.",
        },
      ],
    }),
    buildSection({
      number: "6.8",
      title: "Environment promotion",
      subtitle: "Dev → staging → prod — parity and gates",
      take: "Promotion moves tested artifacts through isolated environments with increasing fidelity to production. Staging must mirror prod topology (same model server, similar data volume) or staging-pass/prod-fail surprises multiply.",
      why: "PMs sign staging demos as release candidates. Environment skew makes staging theatre — prod still breaks.",
      paragraphs: [
        [
          s("Three-environment minimum for AI features. "),
          x(
            "Dev: fast iteration, synthetic data, cheap models. Staging: prod-like config, golden eval, internal dogfood. Prod: canaried customer traffic.",
            "Some teams add pre-prod shadow environment receiving prod traffic copy — highest fidelity.",
          ),
          s(" PM dogfoods staging weekly — 'works in demo' isn't release approval."),
        ],
        [
          s("Parity dimensions that matter. "),
          x(
            "Model server (vLLM version), quantisation format, GPU type, retrieval index version, prompt templates, feature flag defaults, rate limits.",
            "Staging on CPU FP32 while prod is GPU INT4 hid 200ms latency regression until prod.",
          ),
          s(" Infra-as-code for environment definitions — drift visible in PR diffs."),
        ],
        [
          s("Promotion checklist as release gate. "),
          x(
            "Eval pass, security scan, legal sign-off for training data, changelog drafted, rollback verified, on-call briefed, canary plan approved.",
            "PM signs checklist; automated pipeline enforces hard gates (eval, tests).",
          ),
          s(" Skip checklist once → incident teaches expensive lesson."),
        ],
      ],
      examples: [
        {
          title: "Staging-prod skew — INT4 only in prod",
          body: "Staging ran FP16; prod INT4 failed JSON eval. Team aligned staging quantisation with prod. PM added 'hardware parity' line to release checklist.",
        },
        {
          title: "Synthetic staging data miss",
          body: "Staging eval used clean synthetic prompts; prod long messy enterprise paste broke parser. PM required 20% prod-sampled (redacted) prompts in staging eval.",
        },
        {
          title: "Friday prod deploy ban",
          body: "After weekend incident, PM policy: major model promotes Mon–Wed only, with on-call coverage. Cultural gate complementing technical gates.",
        },
      ],
    }),
    buildSection({
      number: "6.9",
      title: "Team roles and handoffs",
      subtitle: "Who owns the pipeline — PM, ML, platform, and on-call",
      take: "MLOps spans roles: ML engineers own training and eval; platform/SRE own serving infra and CI; PMs own quality bars, rollout policy, and customer comms; on-call rotates with runbooks for model rollback.",
      why: "Ambiguous ownership causes 'thought ML owned monitoring' gaps. PMs clarify RACI before first prod model, not after first incident.",
      paragraphs: [
        [
          s("RACI for model releases. "),
          x(
            "Responsible: ML eng trains and runs eval. Accountable: PM approves prod promote. Consulted: legal for data, security for deploy. Informed: support, customer success.",
            "On-call engineer can rollback without PM approval for SEV1 — pre-authorized in runbook.",
          ),
          s(" Document RACI in team wiki; review quarterly."),
        ],
        [
          s("PM ↔ ML eng handshake artifacts. "),
          x(
            "PRD with eval criteria → ML returns eval report per candidate → PM sign-off → platform promotes. No verbal 'ship it.'",
            "Weekly triad: PM, ML lead, platform lead — review drift metrics, pipeline health, upcoming releases.",
          ),
          s(" Handoffs fail when eval criteria are vague — PM specificity matters."),
        ],
        [
          s("Support enablement on model versions. "),
          x(
            "Support console shows model version, index version, last update. Macros for 'we fixed this in v2.4.1, you're on v2.3' — reduces mystery tickets.",
            "PM writes release notes support can paste; link to known limitations in model card.",
          ),
          s(" Support is frontline monitoring — equip them with version context."),
        ],
      ],
      examples: [
        {
          title: "RACI dispute during incident",
          body: "Outage debated between platform and ML for 45 minutes. PM facilitated; post-mortem assigned single on-call owner for 'AI stack' with rollback authority. Clear RACI cut MTTR in half next incident.",
        },
        {
          title: "PM-owned golden set — ML-owned pipeline",
          body: "PM curated 300 gold prompts with legal; ML automated nightly eval against gold. Boundary worked — PM didn't write YAML; ML didn't change pass thresholds without PM.",
        },
        {
          title: "CSM early warning loop",
          body: "Customer success flagged enterprise account escalation spike 2 days before drift alert fired. PM added CSM weekly digest of AI metrics — human sensor complementing automated drift.",
        },
      ],
    }),
    buildSection({
      number: "6.10",
      title: "PM decision lens",
      subtitle: "Maturity roadmap — what to build when",
      take: "Stage 0: manual deploys + basic logging. Stage 1: registry + feature flags + golden eval in CI. Stage 2: canary/shadow + drift alerts + rollback game days. Stage 3: automated feedback loops + tenant-level routing. PMs fund stages based on traffic, risk, and release frequency targets.",
      why: "Series A doesn't need Netflix MLOps. Enterprise healthcare at scale does. PMs right-size investment to avoid both recklessness and paralysis.",
      paragraphs: [
        [
          s("Maturity assessment questions. "),
          x(
            "Can we rollback in 5 minutes? Do we know prod model version right now? Does every release run golden eval? Is staging prod-like? Do we alert on quality not just uptime?",
            "Two 'no' answers on high-risk product → MLOps investment before next major model change.",
          ),
          s(" Honest assessment beats aspirational architecture diagrams."),
        ],
        [
          s("Build vs buy for MLOps tooling. "),
          x(
            "Buy: Weights & Biases, MLflow managed, Langfuse, Datadog LLM observability — fast, OPEX. Build: custom pipelines on K8s — control, eng cost.",
            "PM formula: if <3 ML engineers, bias buy; if unique compliance/multi-tenant needs, hybrid.",
          ),
          s(" Tooling sprawl without process still fails — process first, tools second."),
        ],
        [
          s("Roadmap sequencing PMs can defend. "),
          x(
            "Q1: registry + flags + golden eval. Q2: staging parity + canary. Q3: drift dashboards + feedback pipeline. Q4: tenant routing + automated promote with human major-version gate.",
            "Each quarter unlocks faster iteration — quantify release cadence improvement for leadership.",
          ),
          s(" MLOps ROI is release velocity and incident reduction — put numbers on both."),
        ],
      ],
      examples: [
        {
          title: "Maturity stage 1 unlocked weekly releases",
          body: "Before registry and CI eval, model releases were quarterly and scary. Stage 1 infrastructure enabled weekly minor releases. PM measured experiment velocity: 4× more A/B tests per quarter.",
        },
        {
          title: "Over-engineered pipeline for 500 DAU",
          body: "Team built custom Kubeflow for pre-PMF copilot. PM paused MLOps build; used managed API + spreadsheet eval. Revisited pipeline at 50K DAU — right-sizing saved 2 eng-quarters.",
        },
        {
          title: "Enterprise deal required MLOps evidence",
          body: "RFP demanded model lineage, rollback SLA, and change notification. PM submitted registry screenshots, game-day report, and changelog policy — won deal over competitor with better model but no ops story.",
        },
      ],
    }),
  ],
  quiz: [
    {
      q: "What's the primary purpose of a model registry in production AI?",
      options: [
        "Store user passwords securely.",
        "Versioned source of truth for model artifacts, metadata, and deployment stage tags.",
        "Replace the need for any offline evaluation.",
        "Automatically write marketing release notes.",
      ],
      correct: 1,
      correctFeedback:
        "Right. Registry tracks what's running where, with lineage and eval metadata — essential for rollback and audits.",
      wrongFeedback:
        "Registry is about artifact versioning and deployment pointers, not security credentials or skipping eval. Re-read section 6.3.",
    },
    {
      q: "When is shadow deployment preferable to canary for a regulated copilot?",
      options: [
        "When you want users to see new model outputs immediately at 100% traffic.",
        "When even a small slice of users receiving bad answers is unacceptable — compare outputs offline first.",
        "When you have no GPU budget for duplicate inference.",
        "When offline eval already passed perfectly.",
      ],
      correct: 1,
      correctFeedback:
        "Exactly. Shadow runs new model in parallel without serving outputs — safer when canary risk is too high.",
      wrongFeedback:
        "Canary serves new outputs to a traffic slice; shadow observes without user impact. Re-read section 6.4.",
    },
    {
      q: "Thumbs-down rate suddenly doubles after a silent RAG index pipeline failure. This is best described as:",
      options: [
        "GPU overheating.",
        "Data/pipeline drift — stale retrieval context degrading answers without a model weight change.",
        "Successful canary promotion.",
        "Feature store version bump.",
      ],
      correct: 1,
      correctFeedback:
        "Right. Stale index is data pipeline drift — answers degrade because context is wrong, not necessarily because LLM weights changed.",
      wrongFeedback:
        "Quality decay often comes from data/index staleness, not model changes. Re-read sections 6.5 and 6.6.",
    },
    {
      kind: "categorize",
      q: "Sort each responsibility to the primary owner.",
      categories: ["PM", "ML engineer", "Platform/SRE"],
      items: [
        { text: "Define golden eval pass thresholds and rollout policy.", category: 0 },
        { text: "Train model and run eval suite in CI pipeline.", category: 1 },
        { text: "Operate vLLM cluster autoscaling and p95 latency alerts.", category: 2 },
        { text: "Approve prod promotion after reviewing eval report.", category: 0 },
        { text: "Implement feature flag wiring to registry model tags.", category: 2 },
        { text: "Add failure mode from incident to golden eval set.", category: 0 },
      ],
      correctFeedback:
        "Right. PM owns quality bars and release decisions; ML owns training/eval; platform owns serving infra and deploy mechanics.",
      wrongFeedback:
        "See RACI in section 6.9 — PM governs, ML builds models, platform runs infra.",
    },
    {
      kind: "order",
      q: "Put the canonical model release pipeline in order.",
      prompt: "Drag to arrange first step (top) to last (bottom).",
      items: [
        "Trigger build (new data, model, or prompt version).",
        "Run automated eval and safety gates in CI.",
        "Deploy to staging with prod-like parity.",
        "Canary or shadow on production traffic with monitoring.",
        "Full promote with rollback flag ready and changelog published.",
      ],
      correctFeedback:
        "Exactly. Build → test → stage → canary/shadow → promote — never skip gates for deadline pressure.",
      wrongFeedback:
        "Promotion to prod without staging and canary is how incidents happen. Re-read sections 6.2 and 6.8.",
    },
    {
      q: "Target rollback time for a model-only production incident should be:",
      options: [
        "As long as needed to retrain from scratch.",
        "Under ~5 minutes via registry alias or feature flag to last-known-good.",
        "Next quarterly release cycle.",
        "Only after full executive approval regardless of severity.",
      ],
      correct: 1,
      correctFeedback:
        "Right. Immutable artifacts + flags/aliases enable fast rollback without rebuilding weights.",
      wrongFeedback:
        "Retraining is not rollback. Re-read section 6.7.",
    },
  ],
});
