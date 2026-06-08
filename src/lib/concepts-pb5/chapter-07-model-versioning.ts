import { buildChapter, buildSection, s, x } from "../concepts-pb4-helpers";

export const chapter07ModelVersioning = buildChapter({
  slug: "pb5-model-versioning",
  number: 7,
  shortTitle: "Model Versioning",
  title: "Model Versioning",
  readingMinutes: 28,
  summary:
    "Why AI products need explicit model versioning beyond git tags — registries, prompt pins, embedding coupling, rollback playbooks, vendor deprecation, and the PM policies that keep production behaviour explainable when the model changes without a code deploy.",
  keyTakeaway:
    "A model version is a product commitment — not just a string in a config file. Without version pins, registries, and rollback paths, every vendor update or prompt tweak is an unreviewed release to every user.",
  pmCallout:
    "As a PM: maintain a version manifest — model ID, prompt hash, embedding version, eval score at ship — for every production slice. If support can't answer 'what version answered this query?', you don't have versioning, you have hope.",
  sections: [
    buildSection({
      number: "7.1",
      title: "Why model versioning matters",
      subtitle: "Non-determinism, silent updates, and accountability",
      take: "Model versioning records which weights, adapters, prompts, and retrieval stacks produced a given output — turning opaque probabilistic behaviour into auditable product state, because unlike traditional software, the 'binary' you ship can change underneath you without a deploy on your side.",
      why: "Incidents, support tickets, compliance audits, and eval regressions all start with the same question: what changed? PMs who treat versioning as infrastructure — not eng detail — unblock postmortems and earn trust with legal and enterprise buyers.",
      paragraphs: [
        [
          s("Traditional releases version code; AI releases version behaviour. "),
          x(
            "A git tag pins your application logic. It does not pin OpenAI's March GPT-4o behaviour, your fine-tuned adapter checkpoint, or the embedding model that built last week's index.",
            "Model versioning is the practice of pinning and logging every component that influences output distributions — base model ID, fine-tune job ID, quantization level, prompt template version, retrieval corpus snapshot.",
          ),
          s(" PM implication: 'we didn't deploy' is not 'nothing changed' in AI products."),
        ],
        [
          s("Silent vendor updates are a versioning failure mode. "),
          x(
            "API providers update base models, deprecate endpoints, and shift safety refusals without a semver bump on your repo.",
            "Teams that log only application version discover regressions from user complaints — weeks after the vendor moved.",
          ),
          s(" Version pins + nightly eval against golden sets are how mature teams detect vendor drift before users do."),
        ],
        [
          s("Versioning enables rollback — the most underrated AI safety net. "),
          x(
            "When a new model scores better on offline eval but worse on a critical slice online, rollback means repointing config to model-v2.3 — minutes, not a hotfix sprint.",
            "Without pinned versions and a registry, rollback is 're-prompt until it feels right' — not an operational procedure.",
          ),
          s(" PM deliverable: rollback SLA in the release checklist — who can flip the pin, in what dashboard, with what approval."),
        ],
      ],
      examples: [
        {
          title: "Support couldn't reproduce the complaint",
          body: "Enterprise customer cited a wrong policy answer from the copilot. Support pulled logs — no model_version field, only app v3.2.1. Vendor had updated the base model four days earlier. PM mandated model_version on every trace; retro action item closed in one sprint. Next ticket resolved in 20 minutes.",
        },
        {
          title: "Friday prompt change, Monday incident",
          body: "A PM-approved 'minor tone tweak' shipped without a prompt version bump in config. Eng couldn't diff what users saw Friday vs Monday. PM instituted prompt_hash in logs and semver for prompt templates — same rigor as API versioning.",
        },
        {
          title: "Audit asked for model lineage",
          body: "Financial services prospect required proof of which model answered loan-eligibility questions in Q3. Team had inference logs but no registry linking model IDs to approval dates and eval scores. PM built a version manifest doc; deal stalled six weeks until lineage existed. Versioning became a sales requirement.",
        },
      ],
    }),
    buildSection({
      number: "7.2",
      title: "Semantic versioning for models",
      subtitle: "MAJOR.MINOR.PATCH — what each bump means in AI",
      take: "Model semver communicates breaking behaviour change (MAJOR), measurable but backward-compatible improvement (MINOR), and bug-fix or retrain on same architecture (PATCH) — giving PMs and customers a shared language for release notes when 'the model' is the product.",
      why: "Without semver conventions, 'model v2' means nothing — new weights? new tokenizer? new safety layer? PMs who define semver rules with ML avoid surprise breaking changes and set customer expectations for migration windows.",
      paragraphs: [
        [
          s("MAJOR — behaviour breaks existing integrations or SLAs. "),
          x(
            "Examples: output schema change, refusal policy shift that blocks previously allowed queries, context window reduction, fine-tune that changes tone beyond eval tolerance on golden set.",
            "MAJOR bumps require customer comms, migration guide, and often parallel-run period.",
          ),
          s(" PM gate: MAJOR releases need signed eval report on held-out set + rollback plan before GA."),
        ],
        [
          s("MINOR — better on metrics, same contract. "),
          x(
            "Higher accuracy on benchmark, lower latency at same quality tier, expanded language support — API surface unchanged.",
            "Still run full regression; 'backward compatible' in AI means 'no slice dropped more than agreed threshold,' not 'byte-identical outputs.'",
          ),
          s(" PM release note template: which metrics improved, which slices unchanged, link to eval dashboard."),
        ],
        [
          s("PATCH — hotfix retrain, quantization fix, safety patch. "),
          x(
            "Same model card intent; fixes a known failure mode (e.g., JSON truncation bug) without repositioning the product tier.",
            "Patches should be fast — but still logged. Silent patches erode trust when users notice behaviour shifts.",
          ),
          s(" Document patch policy: auto-apply vs opt-in, especially for regulated customers on version pins."),
        ],
      ],
      examples: [
        {
          title: "MAJOR bump killed an integration",
          body: "Model v3.0 switched from free-text to strict JSON tool calls — MAJOR by design. One partner still parsed prose. PM owned migration comms 60 days early; semver label '3.0.0' triggered automated breaking-change checklist in release tooling.",
        },
        {
          title: "MINOR oversold as invisible",
          body: "Eng shipped 'minor' embedding model update — 4% retrieval recall gain. German queries regressed 9% — not backward compatible for that slice. PM retro: slice-specific gates define MINOR, not aggregate averages.",
        },
        {
          title: "PATCH without changelog",
          body: "Vendor patched safety filters; refusal rate on medical FAQs jumped. No version string changed — only behaviour. PM escalated; vendor added dated snapshot IDs. Lesson: insist on immutable version identifiers, not just semver labels.",
        },
      ],
    }),
    buildSection({
      number: "7.3",
      title: "Model registry and artifact management",
      subtitle: "MLflow, W&B, Hugging Face Hub — the system of record",
      take: "A model registry stores trained artifacts, metadata, lineage, approval status, and stage promotions (Staging → Production) — the CMDB for ML — so PMs and eng share one source of truth for which checkpoint is live, which is candidate, and which is retired.",
      why: "Spreadsheets and Slack threads don't scale past three models. PMs who know what a registry contains can ask for promotion gates, approval workflows, and customer-facing model cards without micromanaging training code.",
      paragraphs: [
        [
          s("Registry entries bundle more than weights. "),
          x(
            "Typical metadata: training data snapshot ID, hyperparameters, eval metrics at train time, bias test results, approver, deployment regions, associated prompt version, cost per 1M tokens inference profile.",
            "MLflow Model Registry, Weights & Biases Model Registry, SageMaker Model Registry, and HF Hub revisions serve similar roles with different enterprise fit.",
          ),
          s(" PM question in design review: 'What metadata must exist before Staging → Prod promotion?'"),
        ],
        [
          s("Stages and promotion workflows. "),
          x(
            "Staging: internal dogfood and eval. Production: customer traffic. Archived: rollback-only, no new traffic. Some teams add Canary stage for 5% traffic pin.",
            "Promotion should require human approval + automated eval pass — not S3 upload completion.",
          ),
          s(" PM signs promotion for customer-facing models; eng signs for infra-only embeddings."),
        ],
        [
          s("Registry integrates with deployment, not replaces it. "),
          x(
            "Registry holds artifact URI; serving layer (Triton, vLLM, Bedrock import) pulls from registry on deploy. Config service points production traffic to registry version ID.",
            "Drift happens when deploy config and registry disagree — PM asks for single 'prod pointer' dashboard.",
          ),
          s(" Quarterly registry hygiene: archive unused models, document rollback candidates, align naming with customer-facing model cards."),
        ],
      ],
      examples: [
        {
          title: "MLflow promotion gate",
          body: "Team blocked Production promotion unless faithfulness ≥ 0.88 on golden set and latency p95 within budget. PM received Slack approval request with eval link — one-click reject sent model back to Staging with comment. Replaced email chains and 'I thought we shipped that' confusion.",
        },
        {
          title: "Two 'production' models",
          body: "US region pointed to registry v14; EU still on v12 — undocumented. GDPR customer received different answers than US sibling account. PM mandated regional parity report weekly from registry export.",
        },
        {
          title: "Hugging Face revision pin",
          body: "Self-hosted Llama used 'main' branch tag — upstream commit moved, behaviour shifted. PM required immutable revision SHA in registry; deploy pipeline rejected floating tags. Incident class eliminated.",
        },
      ],
    }),
    buildSection({
      number: "7.4",
      title: "Prompt versioning",
      subtitle: "Templates, hashes, and co-versioning with models",
      take: "Prompt versioning tracks system instructions, few-shot examples, tool schemas, and assembly logic as first-class artifacts — because prompt changes alter output distributions as much as weight updates, and must be diffed, reviewed, and rolled back with equal rigor.",
      why: "PMs edit prompts in playgrounds and Google Docs. Without version control, the 'production prompt' is folklore. Co-versioning prompts with models prevents false attribution when debugging quality shifts.",
      paragraphs: [
        [
          s("Prompts belong in git — or a prompt CMS with audit trail. "),
          x(
            "Store templates as files (Jinja, YAML) or managed records (LangSmith, Humanloop, PromptLayer). Every deploy logs prompt_version or content hash.",
            "PR review for prompt changes: same as code — diff visible, eval CI triggered, approver named.",
          ),
          s(" PM rule: no production prompt edit without a ticket linking to eval results."),
        ],
        [
          s("Few-shot examples are versioned data, not throwaway text. "),
          x(
            "Example selection, order, and formatting bias outputs. Changing three examples can swing faithfulness 10%+ on small golden sets.",
            "Tag few-shot sets with dataset version; treat swaps as model-adjacent releases.",
          ),
          s(" Ask eng to log which example IDs were injected per request — critical for support reproduction."),
        ],
        [
          s("Co-versioning matrix: which prompt pairs with which model. "),
          x(
            "GPT-4o prompt v7 may fail on Claude — prompts are not model-agnostic. Registry row: model_id + prompt_id + tools_schema_version = deployable unit.",
            "Compatibility matrix prevents 'we upgraded model but forgot prompt' mismatches.",
          ),
          s(" PM maintains compatibility table in release notes for multi-model products."),
        ],
      ],
      examples: [
        {
          title: "Prompt hash in traces",
          body: "Each response logged prompt_hash a3f9c2. Support compared failing vs working sessions — different hash revealed unauthorised hotfix in one region. PM enforced config-as-code sync across regions within 4 hours of prompt promotion.",
        },
        {
          title: "Few-shot swap regression",
          body: "Eng replaced five support examples in system prompt — no version bump. Escalation rate up 11%. Diff showed new examples encouraged over-apologetic tone. PM reverted prompt v2.4.1; added few-shot dataset to golden eval slice.",
        },
        {
          title: "Prompt CMS audit trail",
          body: "Compliance review required who changed medical disclaimer text and when. Playground edits had no history. PM adopted prompt CMS with RBAC; legal signed off on approval workflow mirroring code review.",
        },
      ],
    }),
    buildSection({
      number: "7.5",
      title: "Embedding and retrieval version coupling",
      subtitle: "Index–query alignment and corpus snapshots",
      take: "Embedding model version, chunking policy version, and corpus snapshot ID must stay aligned across index and query paths — mixing versions breaks semantic search silently, and PMs must treat retrieval stack bumps as coupled releases, not independent knob turns.",
      why: "RAG quality incidents often trace to version skew — new query embeddings against old index, or reindexed corpus without revalidating chunk boundaries. PMs who understand coupling ask the right questions in index rebuild PRs.",
      paragraphs: [
        [
          s("Embedding version mismatch is a silent killer. "),
          x(
            "Index built with text-embedding-3-large v1; queries use v2 after API default changed — similarity scores become meaningless noise.",
            "Pin embedding model ID in index metadata; reject queries when query embedder ≠ index embedder.",
          ),
          s(" PM checklist for any embedding change: full reindex schedule, eval window, rollback index snapshot."),
        ],
        [
          s("Chunking policy is a versioned contract. "),
          x(
            "Chunk size 512 → 1024 changes what retrieval returns — same embedding model, different behaviour. Version chunker config with corpus builds.",
            "Store chunker_version on each vector; enables mixed-index migration during transitions.",
          ),
          s(" Pair chunking changes with golden-set retrieval recall metrics — not just generation eval."),
        ],
        [
          s("Corpus snapshot IDs for audit and rollback. "),
          x(
            "Tag index builds: corpus_2025-06-01_legal_pdfs_v4. User answer cites chunks from that snapshot — reproducible for compliance.",
            "Blue/green index swaps: new snapshot in shadow, eval pass, flip router — old snapshot kept for rollback.",
          ),
          s(" PM communicates to customers when knowledge base refresh changes answer behaviour — it's a product event."),
        ],
      ],
      examples: [
        {
          title: "API default embedding swap",
          body: "Overnight retrieval quality collapsed — no app deploy. Root cause: embedding API default model updated. Index metadata still said ada-002; queries used 3-small. PM added startup check blocking mismatched pairs; full reindex over weekend with comms to CS.",
        },
        {
          title: "Chunk size change without re-embed",
          body: "Team re-chunked docs but reused old vectors — misaligned chunk boundaries. Faithfulness dropped 14%. PM required atomic release: chunker_version bump triggers full embed pipeline, not incremental shortcut.",
        },
        {
          title: "Corpus snapshot for regulated answers",
          body: "Insurance bot answers must cite policy version effective date. Index tagged policy_corpus_v2024.3; rollback to v2024.2 available when regulatory text reverted. PM documented snapshot in customer-facing release notes.",
        },
      ],
    }),
    buildSection({
      number: "7.6",
      title: "Rollback strategy",
      subtitle: "Fast revert when behaviour regresses",
      take: "AI rollback repoints traffic or config to a known-good model-prompt-index combination — ideally one click and under five minutes — with pre-staged artifacts, runbooks, and eval confirmation that the rollback target still passes gates, because forward fixes are slower than reverts in production incidents.",
      why: "PMs approve releases; they must also approve rollback authority and comms templates before launch. Teams without rollback practice discover their 'previous version' was garbage-collected.",
      paragraphs: [
        [
          s("Rollback targets must be pre-identified and retained. "),
          x(
            "Keep N-1 and N-2 model artifacts in registry; retain previous index snapshot 30–90 days; prompt tags immutable in git.",
            "Rollback is not 'redeploy last week' if last week's weights were deleted to save storage.",
          ),
          s(" PM asks in launch review: 'Show me the rollback button and last successful drill date.'"),
        ],
        [
          s("Rollback triggers — automatic and human. "),
          x(
            "Auto: online error rate, latency SLO breach, safety classifier spike, thumbs-down rate threshold. Human: PM or on-call judgment on qualitative reports.",
            "Define which metrics auto-flip vs require approval — regulated products often require human confirm.",
          ),
          s(" Document rollback decision tree in incident runbook — reduces 3am debate."),
        ],
        [
          s("Post-rollback: forward fix on branch, not in prod. "),
          x(
            "Revert restores service; root-cause fix ships through normal eval + canary path.",
            "Capture incident bundle: failing version IDs, sample traces, eval diff — feeds next version bump.",
          ),
          s(" PM owns external comms if customer-visible behaviour changed during incident window."),
        ],
      ],
      examples: [
        {
          title: "One-click model pin revert",
          body: "New fine-tune v2.1 dropped task completion 8% in hour one. On-call flipped config model_pin from v2.1 to v2.0 — 90 seconds, no redeploy. PM postmortem: v2.1 lacked sufficient non-English golden cases; gate added before next promotion.",
        },
        {
          title: "Rollback blocked — artifact deleted",
          body: "Team tried reverting embedding index; snapshot expired after 14 days. Rebuild took 48 hours. PM extended retention to 90 days and costed cold storage — cheaper than outage.",
        },
        {
          title: "Partial rollback by segment",
          body: "Enterprise tier rolled back to prior model; free tier stayed on new model for cost reasons. PM documented segment-specific pins in status page; support scripts updated same day.",
        },
      ],
    }),
    buildSection({
      number: "7.7",
      title: "Vendor deprecation and migration",
      subtitle: "API sunsets, model EOL, and migration projects",
      take: "Cloud LLM vendors deprecate model IDs on announced timelines — fine-tunes delete, endpoints redirect, pricing tiers shift — and migration is a PM-led cross-functional project: eval parity, prompt retuning, customer comms, and contractual notice periods, not a one-line config change.",
      why: "Vendor deprecation notices land in eng inboxes; customers experience behaviour change. PMs who own migration timelines prevent emergency weekends and contractual breaches with enterprise SLAs on model stability.",
      paragraphs: [
        [
          s("Deprecation timeline anatomy. "),
          x(
            "Typical: announcement → 90-day parallel availability → hard cutoff. Fine-tuned models often shorter notice. Some changes are 'silent' unless you subscribe to vendor changelogs.",
            "PM calendar: T-90 eval kickoff, T-60 customer notice, T-30 default new users on successor, T-0 force migrate stragglers.",
          ),
          s(" Assign migration DRI; treat like API v1 sunset, not ops ticket."),
        ],
        [
          s("Migration ≠ lift-and-shift model ID. "),
          x(
            "Successor model needs prompt retune, eval re-baseline, possible retrieval re-embed, safety re-certification.",
            "Run parallel shadow eval: old vs new on golden set + production sample — define acceptable delta per slice.",
          ),
          s(" PM acceptance: 'no slice worse than X' not 'average score improved.'"),
        ],
        [
          s("Contract and pricing implications. "),
          x(
            "Enterprise MSAs may specify model families or prohibit automatic upgrades. Successor may change per-token price — COGS model needs update.",
            "Document customer-facing model equivalence table: deprecated_id → replacement_id, known deltas.",
          ),
          s(" Legal review on customer notices for regulated use cases — migration is a compliance event."),
        ],
      ],
      examples: [
        {
          title: "Fine-tune EOL scramble",
          body: "OpenAI announced fine-tune deprecation with 60-day notice. Team had 12 production fine-tunes. PM chartered migration workstream: RAG + prompt baseline replaced 8; 4 retrained on successor. Two slipped past deadline — emergency read-only mode for one customer.",
        },
        {
          title: "Silent successor behaviour drift",
          body: "Vendor mapped gpt-4-0314 → gpt-4o automatically. Aggregate eval flat; JSON extraction slice -12%. PM negotiated opt-out pin for 90 days; fixed parser prompts; then migrated with slice gates.",
        },
        {
          title: "Multi-vendor deprecation insurance",
          body: "After single-vendor scare, PM required abstraction layer logging model_family — enabled 3-week partial migration to second provider for enterprise tier. Version manifest made dual-run auditable.",
        },
      ],
    }),
    buildSection({
      number: "7.8",
      title: "Version-aware experimentation",
      subtitle: "A/B tests, holdouts, and experiment isolation",
      take: "Experiments must isolate one versioned variable at a time — model OR prompt OR index, with experiment ID logged alongside all version pins — so PMs can attribute metric lifts to the right change and avoid shipping untested version combinations.",
      why: "Multivariate chaos — new model plus new prompt plus new reranker — makes winners unrepeatable and losers undebuggable. PMs enforce experiment hygiene so version history stays interpretable.",
      paragraphs: [
        [
          s("One diff per experiment — enforced by tooling. "),
          x(
            "Feature flag ties user to variant: control model_v3 + prompt_v5 vs treatment model_v4 + prompt_v5 — not both v4.",
            "Experiment registry records hypothesis, version matrix, start/end, decision.",
          ),
          s(" PM rejects 'let's try everything' launches — schedule sequential experiments instead."),
        ],
        [
          s("Holdout groups protect long-term measurement. "),
          x(
            "Permanent 5% holdout on stable baseline detects slow drift and cumulative risk from stacked wins.",
            "Holdout users stay on pinned versions until deliberate promotion — not accidental flag drift.",
          ),
          s(" Explain holdout cost to leadership as insurance against overfitting product metrics."),
        ],
        [
          s("Experiment conclusion → version promotion. "),
          x(
            "Winning variant becomes new default pin; loser artifacts archived with experiment ID for audit.",
            "Document non-significant results — prevents zombie re-tests every quarter.",
          ),
          s(" PM sign-off ties experiment ID to release notes: 'Based on exp-2025-042, promoted model_v4.'"),
        ],
      ],
      examples: [
        {
          title: "Confounded experiment",
          body: "Team shipped new model and new chunking same release — completion up 6%. Next month couldn't reproduce on model alone. PM mandated experiment template: single variable field required; CI blocks multi-version flags without waiver.",
        },
        {
          title: "Holdout caught stacked drift",
          body: "Twelve sequential 'small wins' looked great in treatment cohorts. Holdout on January baseline showed net -3% vs original — cumulative regressions on rare slices. PM paused promotions; fixed slices before continuing.",
        },
        {
          title: "Experiment registry for sales",
          body: "AE claimed 'latest model is 20% better.' Registry showed 20% on narrow sales-email slice only, not general chat. PM gave sales slice-specific talking points with experiment IDs — reduced oversell churn.",
        },
      ],
    }),
    buildSection({
      number: "7.9",
      title: "PM version policy and documentation",
      subtitle: "Manifests, model cards, and customer-facing truth",
      take: "PM-owned version policy defines naming, promotion gates, retention, customer notification rules, and the version manifest — a living document linking model IDs to eval scores, owners, and rollback status — so versioning is operable across eng, support, legal, and sales.",
      why: "Versioning without policy decays into ad hoc pins and tribal knowledge. PMs write the policy because versioning is a product reliability and trust commitment, not just MLOps hygiene.",
      paragraphs: [
        [
          s("The version manifest — single page PM maintains. "),
          x(
            "Columns: component (base model, fine-tune, prompt, embedder, index), version ID, stage (prod/staging/archived), eval score at promotion, owner, customer-visible name, rollback eligible (Y/N).",
            "Updated on every promotion; linked from on-call runbook and status page.",
          ),
          s(" Review in weekly AI product sync — same standing item as roadmap."),
        ],
        [
          s("Model cards for external audiences. "),
          x(
            "Customer-facing summary: intended use, known limitations, training data high-level, version history, deprecation schedule. Internal card adds full lineage.",
            "Enterprise buyers increasingly require model cards in security questionnaires.",
          ),
          s(" PM owns customer card narrative; eng owns technical accuracy."),
        ],
        [
          s("Policy rules that stick. "),
          x(
            "Examples: no floating tags in prod; 90-day artifact retention; MAJOR bumps need 30-day notice; all traces include version fields; prompt changes require eval CI pass.",
            "Exceptions need PM + eng lead written waiver with expiry.",
          ),
          s(" Onboard new PMs and vendors against policy doc — reduces repeated incidents."),
        ],
      ],
      examples: [
        {
          title: "Version manifest in onboarding",
          body: "New PM spent day one reading manifest — knew prod stack in 30 minutes vs two weeks of Slack archaeology. Manifest linked from PRD template; every feature spec listed affected version components.",
        },
        {
          title: "Model card closed enterprise deal",
          body: "Prospect required documented version history and bias eval per release. PM published quarterly updated model card on trust portal. Security review passed in one round vs previous three-month loop.",
        },
        {
          title: "Policy waiver with expiry",
          body: "Startup skipped registry for MVP — waiver expired at 10K MAU. PM triggered registry migration sprint before expiry; avoided policy debt becoming production crisis.",
        },
      ],
    }),
  ],
  quiz: [
    {
      q: "Why is model versioning uniquely important for AI products compared to traditional software?",
      options: [
        "AI models never change after training",
        "Output behaviour can change from vendor updates, prompt edits, or retrieval changes without an application code deploy",
        "Versioning is only needed for self-hosted models, not APIs",
        "Git tags alone fully capture all behaviour-affecting state",
      ],
      correct: 1,
      correctFeedback:
        "Right. Behaviour is distributed across models, prompts, embeddings, and corpora — all can shift without a traditional release.",
      wrongFeedback:
        "AI behaviour changes from many sources beyond app code. Re-read section 7.1.",
    },
    {
      q: "What typically warrants a MAJOR semver bump for a production model?",
      options: [
        "A 2% improvement on aggregate offline accuracy with identical API contract",
        "A breaking output schema change or policy shift that invalidates existing integrations",
        "Any routine safety patch from the vendor",
        "Renaming the model in the dashboard only",
      ],
      correct: 1,
      correctFeedback:
        "Correct. MAJOR signals breaking behavioural or contractual change requiring migration and comms.",
      wrongFeedback:
        "MAJOR bumps indicate breaking changes — not minor metric wins. Re-read section 7.2.",
    },
    {
      q: "Embedding model version mismatch between index and query typically causes:",
      options: [
        "Higher API rate limits",
        "Silent retrieval quality collapse because vectors live in incompatible semantic spaces",
        "Automatic reindexing by the vector database",
        "Improved diversity of search results",
      ],
      correct: 1,
      correctFeedback:
        "Exactly. Mismatched embedders produce meaningless similarity scores — a classic RAG incident.",
      wrongFeedback:
        "Index and query must use the same embedding model version. Re-read section 7.5.",
    },
    {
      kind: "order",
      q: "Order the vendor deprecation migration timeline from first to last.",
      prompt: "Drag to arrange first (top) to last (bottom).",
      items: [
        "Announcement received — assign migration DRI and calendar",
        "Parallel eval: successor vs deprecated on golden set and key slices",
        "Customer notice and internal rollback target confirmed",
        "Default new traffic on successor; stragglers force-migrated at cutoff",
      ],
      correctFeedback:
        "Right. Plan early, prove parity, communicate, then cut over — not a one-line config change at T-0.",
      wrongFeedback:
        "Deprecation is a project: plan → eval → comms → migrate. Re-read section 7.7.",
    },
    {
      q: "A PM version manifest should NOT:",
      options: [
        "Link version IDs to eval scores at promotion time",
        "List rollback-eligible artifacts and owners",
        "Be updated only after major incidents",
        "Be reviewed in regular product syncs",
      ],
      correct: 2,
      correctFeedback:
        "Correct. The manifest is living documentation — updated on every promotion, not forensic archaeology.",
      wrongFeedback:
        "Manifests stay current as part of normal release hygiene. Re-read section 7.9.",
    },
    {
      kind: "categorize",
      q: "Match each versioned component to its primary failure mode when unversioned.",
      categories: ["Prompt", "Embedding index", "Base model API"],
      items: [
        { text: "Undiffable tone shift from a 'minor' system instruction edit.", category: 0 },
        { text: "Retrieval returns irrelevant chunks after corpus re-chunk without re-embed.", category: 1 },
        { text: "Silent vendor update changes refusal rate and JSON compliance.", category: 2 },
        { text: "Few-shot example swap swings faithfulness without code deploy.", category: 0 },
        { text: "Query embedder upgraded while index still on previous model.", category: 1 },
        { text: "Support cannot reproduce user complaint — no model_id in logs.", category: 2 },
      ],
      correctFeedback:
        "Right. Prompts, retrieval stacks, and base models each fail differently — all need pins and logs.",
      wrongFeedback:
        "Each component has distinct failure modes when unversioned. Re-read sections 7.1, 7.4, and 7.5.",
    },
  ],
});
