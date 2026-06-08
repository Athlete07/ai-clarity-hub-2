import { buildChapter, buildSection, s, x } from "../concepts-pb4-helpers";

export const chapter01BuildBuyFineTune = buildChapter({
  slug: "pb7-build-buy-fine-tune",
  number: 1,
  shortTitle: "Build vs Buy vs Fine-tune",
  title: "Build vs Buy vs Fine-tune",
  readingMinutes: 28,
  summary:
    "The most consequential architectural decision a PM makes — and the framework for making it well",
  keyTakeaway:
    "Build, buy, and fine-tune are not three equal options — they are three layers of a stack. Most durable AI products buy the base model, fine-tune for behaviour where prompting fails, and build the surrounding product system. The PM job is to map differentiation, data advantage, timeline, and exit cost — then document the decision before engineering commits.",
  pmCallout:
    "As a PM: never let 'we'll use GPT' or 'we'll train our own model' be the first sentence in a PRD. Start with what must be differentiated, what data you own, and what happens if the vendor doubles price or deprecates the API. The build vs buy decision is a finance and legal conversation dressed as an architecture choice.",
  sections: [
    buildSection({
      number: "1.1",
      title: "The three paths mapped",
      subtitle: "Building from scratch, buying a third-party solution, and adapting an existing model — what each actually means in practice",
      take: "Build means you own the full stack — data pipelines, training, serving, and product integration. Buy means you license capability from a vendor and integrate via API or SaaS. Fine-tune means you start from a foundation model and adapt weights or behaviour with your data — you don't train from random init, but you don't get a black-box API either.",
      why: "Teams argue for months using the same words to mean different things. PMs who define the three paths precisely prevent 'we're building AI' from hiding a prompt wrapper, or 'we're buying' from hiding a six-month custom integration.",
      paragraphs: [
        [
          s("Build from scratch is rare and narrowly justified. "),
          x(
            "True build: pretrain or train a domain foundation model, operate GPUs, maintain MLOps, own tokenizer and architecture choices. Most startups and product teams never need this.",
            "When PMs say 'build,' they often mean 'assemble' — RAG, orchestration, evals, UI. That's product engineering on top of bought models, not build in the strategic sense.",
          ),
          s(" Clarify whether 'build' means model training or product system construction."),
        ],
        [
          s("Buy covers a spectrum from raw API to full SaaS. "),
          x(
            "Raw API: OpenAI, Anthropic, Google — you get tokens and embeddings, you own everything else. Vertical SaaS: Harvey, Glean, Intercom Fin — you get a productized capability with less control. Managed fine-tuning: vendor trains on your data in their environment.",
            "Buy is not 'no engineering.' Integration, auth, data routing, evals, and fallback logic are always yours. The question is where the model intelligence lives.",
          ),
          s(" Map buy options by how much of the inference stack you outsource."),
        ],
        [
          s("Fine-tune sits between buy and build. "),
          x(
            "Supervised fine-tuning (SFT), LoRA/QLoRA adapters, DPO/RLHF for preference alignment — you adapt a base model's behaviour without pretraining from scratch.",
            "Fine-tune changes model weights; prompt engineering and RAG change inputs. PMs confuse them when demos look good with few-shot prompts but fail at scale — fine-tune is the escalation path when prompt variance is too high.",
          ),
          s(" Fine-tune is a precision tool for behaviour and domain language, not a substitute for product design."),
        ],
      ],
      examples: [
        {
          title: "Healthcare chart summarisation — three paths in one RFP",
          body: "Vendor A offered SaaS summarisation (buy). Vendor B offered API + managed fine-tune on de-identified notes. Internal DS proposed full fine-tune on proprietary data with open-weight Llama. PM mapped: differentiation = clinical ontology accuracy; timeline = 90 days; data = HIPAA-bound. Shipped buy+light fine-tune on Vendor B; deferred pretrain build indefinitely.",
        },
        {
          title: "Legal research startup — 'build' was orchestration",
          body: "Founder pitched 'we're building AI.' Technical diligence revealed: GPT-4 API, Pinecone, custom reranker, no owned weights. PM reframed as buy base + build retrieval and workflow — accurate framing unlocked realistic unit economics and investor narrative.",
        },
        {
          title: "Banking fraud model — true build justified",
          body: "Global bank with decade of labelled fraud transactions and regulatory bar on third-party data egress. Built in-house gradient-boosted + later transformer ensemble on private infra. Buy was non-starter for data residency; fine-tune alone couldn't match feature engineering depth. Build won on moat and compliance, not on hype.",
        },
      ],
    }),
    buildSection({
      number: "1.2",
      title: "The real cost of building",
      subtitle: "Engineering time, data infrastructure, ongoing maintenance, and the opportunity cost of everything else you didn't build",
      take: "Building AI capability in-house carries costs far beyond the first training run: data engineering, GPU capacity, ML platform headcount, retraining cadence, incident response, and the roadmap features you didn't ship while hiring three ML engineers.",
      why: "Build decisions fail when finance sees a one-time GPU invoice but misses the recurring ML tax. PMs who quantify total cost of ownership defend the roadmap and avoid 'cheap' builds that become permanent cost centres.",
      paragraphs: [
        [
          s("Engineering time is the dominant line item. "),
          x(
            "A minimal in-house model team: 2 ML engineers, 1 data engineer, 1 MLOps, part-time PM — $800K–$1.2M/year fully loaded before GPU bills.",
            "Timeline: 6–18 months to production-grade serving with evals, monitoring, and rollback — not the 6-week notebook prototype.",
          ),
          s(" Compare build headcount to buy integration: often 2–3 generalist engineers for 8–12 weeks."),
        ],
        [
          s("Data infrastructure is the hidden foundation. "),
          x(
            "Labelling pipelines, versioned datasets, consent tracking, feature stores, and train/serve skew prevention — all required before model quality is repeatable.",
            "Teams that 'already have data' usually have logs, not labelled training sets. PM should budget 3–6 months of labelling for a serious fine-tune, longer for build.",
          ),
          s(" No data pipeline means every retrain is a manual fire drill."),
        ],
        [
          s("Opportunity cost is the PM's responsibility to name. "),
          x(
            "Every senior ML hire not working on core product differentiation is a feature quarter lost. Build only when the capability is the product moat, not when it's infrastructure.",
            "Ask: 'If we bought this tomorrow, what would our ML team do instead?' If the answer is strategic work, buy may free capacity.",
          ),
          s(" Builds that don't compound create expensive parallel product orgs."),
        ],
      ],
      examples: [
        {
          title: "Retail demand forecast — build ate the roadmap",
          body: "PM approved in-house LSTM team to 'own the algorithm.' Eighteen months later: model matched vendor baseline, zero incremental revenue features shipped. Post-mortem: opportunity cost of 4 eng-years exceeded 10 years of vendor license. Lesson: build without differentiation hypothesis is a sunk roadmap.",
        },
        {
          title: "Data pipeline before model — fintech KYC",
          body: "Build case required 40K labelled document pairs. PM scoped labelling vendor + internal review loop first — 4 months, $280K before first fine-tune. Execs initially balked; PM showed build without labels was demo-only. Pipeline became reusable asset for three features.",
        },
        {
          title: "MLOps maintenance — the recurring invoice",
          body: "After launch, in-house team spent 35% of sprint capacity on drift monitoring, retraining triggers, and GPU cost optimisation — unplanned in original business case. PM added 'ML ops run rate' line to annual budget review; build TCO now includes 0.3 FTE ongoing per model.",
        },
      ],
    }),
    buildSection({
      number: "1.3",
      title: "The real cost of buying",
      subtitle: "Licensing fees, vendor lock-in, capability ceiling, and the data you're handing to a third party",
      take: "Buying trades capital efficiency and speed for dependency: per-token or per-seat fees that scale with success, API contracts that change, capability ceilings you can't prompt past, and data flows that legal must approve.",
      why: "Buy looks cheap in year one and expensive in year five — or cheap until you hit a quality ceiling and need an expensive migration. PMs who model exit cost and data egress upfront avoid surprise re-platforms.",
      paragraphs: [
        [
          s("Licensing models vary — unit economics differ wildly. "),
          x(
            "Per-token API: scales with usage, unpredictable at viral growth. Per-seat SaaS: predictable but may cap MAU. Enterprise minimums: $100K–$500K/year floors regardless of adoption.",
            "PM must forecast at 10× volume: a feature profitable at 1M tokens/month may destroy margin at 50M.",
          ),
          s(" Build a sensitivity table before signing multi-year deals."),
        ],
        [
          s("Vendor lock-in is architectural, not just contractual. "),
          x(
            "Prompt formats, tool schemas, embedding dimensions, fine-tune artifact formats — all proprietary. Switching vendors means re-embedding corpora, re-running evals, and often redesigning UX latency profiles.",
            "Mitigation: abstraction layer, multi-vendor eval harness, and contractual data export rights — PM items, not afterthoughts.",
          ),
          s(" Exit cost should be a line item in the buy business case."),
        ],
        [
          s("Data you send to vendors is a liability and a strategic leak. "),
          x(
            "Customer PII, proprietary documents, and user prompts may train vendor models depending on terms. Enterprise 'no training' clauses cost more and still require trust.",
            "Legal review: data processing agreement, residency, subprocessors, breach notification, and deletion SLAs. PM owns the data flow diagram in the security questionnaire.",
          ),
          s(" 'We'll anonymise it' is rarely sufficient for regulated domains."),
        ],
      ],
      examples: [
        {
          title: "Token bill shock — support bot viral moment",
          body: "Marketing campaign 8×'d support bot usage. Monthly API spend went $12K → $94K in one billing cycle. PM had no per-user cap or tier gating. Renegotiated enterprise rate and shipped usage budgets. Buy case now includes traffic spike scenarios.",
        },
        {
          title: "Embedding lock-in — vector DB migration",
          body: "Product built on Vendor A embeddings (1536-dim). Vendor B offered 30% cost reduction but different dimensions — full re-index of 40M chunks, 6-week migration, 2-week quality regression. PM documented embedding choice as 2-year commitment in ADR.",
        },
        {
          title: "SaaS ceiling — outgrew vertical vendor",
          body: "Legal AI SaaS handled standard contracts well but failed on firm-specific clause taxonomy. PM hit capability ceiling at 78% task completion vs 92% target. Migration to API + custom RAG took 5 months — buy was right for v1, wrong assumption for v3 scale.",
        },
      ],
    }),
    buildSection({
      number: "1.4",
      title: "The real cost of fine-tuning",
      subtitle: "Training compute, labelled data, evaluation infrastructure, and the model versioning discipline it demands",
      take: "Fine-tuning is cheaper than pretraining but expensive to do well: curated labelled datasets, GPU training runs, rigorous offline and online evals, version pinning, and rollback discipline every time weights change.",
      why: "Teams fine-tune because prompts 'almost work' — then discover labelling and eval costs match a quarter of engineering. PMs who scope fine-tune as a product release, not a weekend experiment, avoid shipping regressions with new weights.",
      paragraphs: [
        [
          s("Labelled data is the gate — quality beats quantity. "),
          x(
            "SFT for behaviour: hundreds to thousands of high-quality examples. Domain adaptation: often 10K+. RLHF/DPO: preference pairs with consistent human judgement.",
            "Bad labels teach bad habits faster than prompts fail. PM budgets reviewer time, inter-annotator agreement, and golden set maintenance.",
          ),
          s(" 'We have chat logs' is not a training set until labelled and filtered."),
        ],
        [
          s("Training compute is manageable; iteration cost isn't. "),
          x(
            "LoRA on 7B–70B: tens to low thousands per run on cloud GPUs. Full fine-tune: orders of magnitude higher.",
            "Real cost: 10–30 experimental runs, hyperparameter sweeps, and failed versions that pass offline but fail online. Each run needs eval compute and PM review time.",
          ),
          s(" Fine-tune TCO = data + (runs × eval) + deployment complexity."),
        ],
        [
          s("Model versioning discipline is non-optional. "),
          x(
            "Every weight change needs: model_id in traces, offline golden scores, canary or shadow deploy, and rollback path. Fine-tuned models drift separately from base model updates.",
            "Vendor may deprecate base model your adapter depends on — PM tracks vendor roadmap alongside internal version registry.",
          ),
          s(" A fine-tune without version pins is a production incident waiting."),
        ],
      ],
      examples: [
        {
          title: "Tone fine-tune — 800 examples, 3 months",
          body: "Brand voice assistant needed consistent warmth and brevity. Prompt engineering hit 71% style compliance on golden set. PM approved fine-tune: 800 curator-reviewed examples, 14 training runs, 89% compliance. Cost: $45K labelling + $8K compute — justified vs brand risk of off-tone responses at scale.",
        },
        {
          title: "Fine-tune regression — skipped eval gate",
          body: "Eng shipped new adapter after offline accuracy +2%. Online task completion dropped 6% on long-tail intents not in training set. No canary. PM instituted: no weight promotion without 500-case stratified eval and 5% shadow traffic minimum.",
        },
        {
          title: "Base model deprecation — adapter orphan",
          body: "Cloud provider announced retirement of base model v3 in 90 days. Team had 4 production adapters pinned to v3. PM escalated migration sprint; reframed fine-tune as coupled dependency on vendor lifecycle, not one-time project.",
        },
      ],
    }),
    buildSection({
      number: "1.5",
      title: "When buying wins",
      subtitle: "Commodity capabilities, fast timelines, limited ML expertise — the conditions that make third-party the right call",
      take: "Buying wins when the capability is commoditised, time-to-market dominates differentiation, your ML bench is thin, and the problem is well-served by frontier APIs with acceptable unit economics at your scale.",
      why: "Defaulting to buy is correct more often than tech Twitter admits. PMs who articulate buy conditions prevent hero culture from delaying launch while the team trains a model that vendors already ship better.",
      paragraphs: [
        [
          s("Commodity capabilities should not be rebuilt. "),
          x(
            "Speech-to-text, generic summarisation, standard embeddings, OCR, translation — vendor parity is high and improving quarterly.",
            "Differentiation rarely lives in the tokenizer. It lives in workflow, data, UX, and domain integration.",
          ),
          s(" Buy commodities; build where users feel unique value."),
        ],
        [
          s("Fast timelines favour buy + integrate. "),
          x(
            "API integration: weeks. SaaS pilot: days to start. In-house fine-tune: months. Pretrain: years.",
            "When GTM window is this quarter and capability is 'good enough' at 85%, buy ships revenue; build ships slides.",
          ),
          s(" PM ties buy decision to dated business milestone, not technical preference."),
        ],
        [
          s("Limited ML expertise makes buy the risk reducer. "),
          x(
            "Teams without MLOps, eval culture, and GPU ops buy reliability they can't yet operate.",
            "Buy is a bridge: integrate now, hire ML depth, revisit fine-tune when prompts and evals prove the use case.",
          ),
          s(" Buying isn't giving up — it's sequencing capability maturity."),
        ],
      ],
      examples: [
        {
          title: "Meeting transcription — pure buy",
          body: "PM needed transcription for sales call notes. Whisper-class APIs within 2% WER of custom train. Shipped in 3 weeks via API. Build case had no moat — audio wasn't proprietary. Buy freed team for CRM workflow differentiation.",
        },
        {
          title: "Series A startup — buy to find PMF",
          body: "Zero ML hires, 6-month runway. PM mandated API-first for all AI features until task completion >80% on two use cases. Avoided premature fine-tune spend. Post-PMF, hired ML lead to optimise COGS — right sequencing.",
        },
        {
          title: "Enterprise search — buy SaaS, build connectors",
          body: "Glean-class vendor handled retrieval quality and security model. PM bought platform, built custom ERP connectors and permission sync — hybrid where buy wins on search core, build wins on integration depth.",
        },
      ],
    }),
    buildSection({
      number: "1.6",
      title: "When building wins",
      subtitle: "Deep differentiation, proprietary data advantage, long time horizon, and competitive moats that justify the investment",
      take: "Building wins when the model itself is the competitive advantage — unique data, unique objective, regulatory constraints blocking third parties, or economics at scale that flip below vendor per-token pricing.",
      why: "Over-buying leaves you as a feature on someone else's platform. PMs who identify true moat sources justify build investment to boards with defensibility math, not with 'we want control.'",
      paragraphs: [
        [
          s("Proprietary data advantage must be provable. "),
          x(
            "Behavioural logs, longitudinal outcomes, domain artefacts competitors can't license — these justify training signal others lack.",
            "If your data advantage is a thin RAG corpus, build is oversold. If it's 10 years of labelled outcomes, build may be mandatory.",
          ),
          s(" Ask: 'Could a competitor replicate this with the same API and public data?'"),
        ],
        [
          s("Regulatory and residency constraints force build or private deploy. "),
          x(
            "Healthcare, defence, certain financial workloads — third-party API may be prohibited regardless of quality.",
            "Open-weight models on private infra are 'build' in deployment sense even if weights are downloaded, not trained.",
          ),
          s(" Legal veto converts build from preference to requirement."),
        ],
        [
          s("Unit economics at scale can invert the buy/build line. "),
          x(
            "At 500M tokens/month, owned inference on distilled model may beat API pricing — if quality holds.",
            "Break-even analysis needs quality-adjusted cost: cheaper model with 5% lower completion may cost more in support and churn.",
          ),
          s(" Build for economics only after quality parity is demonstrated on golden sets."),
        ],
      ],
      examples: [
        {
          title: "Netflix-style recommendation — data is the model",
          body: "Streaming engagement model trained on exclusive viewing behaviour — unavailable to vendors. PM framed product as 'personalisation moat,' not 'ML project.' Build justified by data exclusivity and decade horizon.",
        },
        {
          title: "Defence contractor — air-gapped inference",
          body: "No external API allowed. PM procured on-prem GPU cluster, deployed open-weight models with internal fine-tunes. Buy was compliance-non-starter; build was infrastructure procurement with known TCO.",
        },
        {
          title: "High-volume classification — crossed COGS threshold",
          body: "At 2B classifications/month, API quote exceeded $2M/year. Distilled in-house model on owned GPUs projected $400K/year at 96% vs 97% accuracy. PM accepted 1pp trade for margin; build won on math at scale.",
        },
      ],
    }),
    buildSection({
      number: "1.7",
      title: "When fine-tuning wins",
      subtitle: "Style, tone, domain language, and format changes that prompting alone can't achieve reliably",
      take: "Fine-tuning wins when you need consistent behavioural patterns — brand voice, output schema adherence, domain terminology, safety refusals — that prompting achieves inconsistently or at prohibitive token cost.",
      why: "PMs escalate to fine-tune too early or too late. Knowing the fine-tune trigger — measured prompt ceiling, not demo frustration — saves months of prompt hacking or premature GPU spend.",
      paragraphs: [
        [
          s("Style and tone need low-variance outputs. "),
          x(
            "Marketing, support, and executive comms require consistent voice. Few-shot prompts drift across languages and edge cases.",
            "Fine-tune encodes style in weights; prompts fight the base model's default each turn.",
          ),
          s(" Measure style compliance rate on 200+ diverse prompts before fine-tune approval."),
        ],
        [
          s("Domain language and format adherence benefit from SFT. "),
          x(
            "Medical coding, legal citation format, JSON schema with nested business rules — fine-tune teaches patterns that long system prompts bloat and still miss.",
            "Structured output APIs help; fine-tune adds domain vocabulary and edge-case handling.",
          ),
          s(" Fine-tune when format errors cause downstream system failures, not cosmetic issues."),
        ],
        [
          s("Preference alignment (DPO/RLHF) shapes product feel. "),
          x(
            "When thumbs-up/down data shows systematic preference — concise vs thorough, cautious vs direct — preference tuning beats prompt stacking.",
            "Requires feedback volume and clear rubric. PM defines what 'better' means before DS consumes preferences.",
          ),
          s(" RLHF loops are product decisions encoded as training signal."),
        ],
      ],
      examples: [
        {
          title: "Insurance claims assistant — domain jargon",
          body: "Prompted GPT handled generic questions; failed on policy rider terminology 40% of time. PM approved 3K example SFT on historical adjuster notes. Terminology accuracy rose to 94%. Fine-tune won where glossary prompts couldn't generalise.",
        },
        {
          title: "JSON extraction — schema fine-tune",
          body: "Invoice parsing needed nested line-item JSON. Prompt + JSON mode: 82% valid parse. Fine-tune on 5K labelled invoices: 97% valid. Downstream ERP automation required >95% — fine-tune threshold met, prompts didn't.",
        },
        {
          title: "Support tone DPO — user preference loop",
          body: "Users preferred shorter empathetic replies; model defaulted verbose. 12K preference pairs from thumbs data. DPO run aligned tone without lengthening system prompt. PM owned preference rubric; DS owned training.",
        },
      ],
    }),
    buildSection({
      number: "1.8",
      title: "The hybrid reality",
      subtitle: "Most production AI products buy the base model, fine-tune for behaviour, and build the surrounding system — the spectrum, not the binary",
      take: "Production AI is almost always hybrid: bought foundation model, optional fine-tune or RAG layer, and built product shell — auth, workflows, evals, monitoring, human fallback, and business logic.",
      why: "Binary debates waste executive time. PMs who describe the stack layer-by-layer align eng, finance, and legal on what is owned vs rented — and where differentiation actually lives.",
      paragraphs: [
        [
          s("The foundation layer is usually bought. "),
          x(
            "Frontier models from OpenAI, Anthropic, Google, or open-weight hosted on cloud — pretraining is not your job.",
            "PM documents foundation choice, fallback vendor, and deprecation response plan.",
          ),
          s(" 'We don't build LLMs' should be explicit company policy unless you're an AI lab."),
        ],
        [
          s("The adaptation layer mixes RAG, fine-tune, and prompts. "),
          x(
            "RAG for factual grounding from proprietary docs. Fine-tune for behaviour and format. Prompts for task routing and guardrails.",
            "Layers stack: a copilot might RAG for knowledge, fine-tune for tone, prompt for tool selection.",
          ),
          s(" PM specs which layer owns which failure mode."),
        ],
        [
          s("The product layer is always built. "),
          x(
            "UX, permissions, audit logs, billing, integrations, eval dashboards, escalation queues — this is where users experience value.",
            "Competitors can buy the same API. They can't copy your workflow and data flywheel without your product layer.",
          ),
          s(" Hybrid clarity prevents under-investing in the shell while over-debating model ownership."),
        ],
      ],
      examples: [
        {
          title: "B2B copilot — canonical hybrid",
          body: "Buy: GPT-4 class API. Adapt: RAG on customer docs + LoRA for industry tone. Build: Slack app, approval workflows, eval dashboard, SOC2 logging. PM roadmap sequenced buy Day 1, RAG Month 2, fine-tune Month 5 after eval proof.",
        },
        {
          title: "E-commerce search — buy embeddings, build ranker",
          body: "Bought embedding API for catalog vectors. Built custom reranker and business rules for margin and stock. Hybrid optimised where ML expertise existed (ranking) and commodity made sense (embeddings).",
        },
        {
          title: "Internal HR bot — open-weight private + built UI",
          body: "Deployed Llama on private cloud (buy/host, not train). Light fine-tune on HR policy Q&A. Built Teams integration and escalation to humans. PM slide: 'We own data path and UX; we rent base intelligence.'",
        },
      ],
    }),
    buildSection({
      number: "1.9",
      title: "Vendor evaluation criteria",
      subtitle: "Capability, reliability, pricing model, data handling, roadmap alignment, and exit cost — the due diligence checklist",
      take: "Vendor selection is a structured diligence process: score capability against your golden tasks, stress-test reliability and latency, model pricing at 3× growth, audit data terms, align roadmaps, and price exit migration.",
      why: "AI vendor churn is high; contracts are complex. PMs who run a scored evaluation avoid choosing the best demo instead of the best production partner — and document why for procurement and security.",
      paragraphs: [
        [
          s("Capability: eval on your data, not vendor benchmarks. "),
          x(
            "Run golden set from your domain. Measure task completion, hallucination rate, latency p95, and failure modes.",
            "Vendor MMLU scores are irrelevant for invoice parsing. PM supplies 100–500 real examples for bake-off.",
          ),
          s(" Capability scorecard is the core deliverable of vendor POC."),
        ],
        [
          s("Reliability and support: SLAs, incident history, rate limits. "),
          x(
            "Uptime SLA, support tier, rate limit headroom, regional redundancy, and status page honesty during outages.",
            "Ask for reference calls in your industry. PM tracks outage impact on your containment rate.",
          ),
          s(" A cheaper vendor with 3 nines may cost more than premium with 4 nines at scale."),
        ],
        [
          s("Data handling and exit cost close the diligence loop. "),
          x(
            "DPA terms, training opt-out, data residency, fine-tune artifact export, and contract termination data deletion.",
            "Exit cost estimate: re-embedding, re-eval, eng migration months. PM presents exit scenario to legal before signature.",
          ),
          s(" Procurement wants price; you bring total risk-adjusted cost."),
        ],
      ],
      examples: [
        {
          title: "Three-vendor bake-off — scorecard decided",
          body: "PM ran identical 300-case golden set across OpenAI, Anthropic, and vertical SaaS. SaaS won on time-to-integrate but lost on long-tail accuracy. Chose API vendor B: +4pp task completion, acceptable COGS. Scorecard attached to procurement record.",
        },
        {
          title: "DPA redline — training opt-out non-negotiable",
          body: "Legal flagged vendor default terms allowed training on customer prompts. PM blocked signature until enterprise no-train addendum. Delayed launch 2 weeks; avoided strategic data leak. Vendor evaluation includes legal pass/fail gates.",
        },
        {
          title: "Exit clause — pre-negotiated migration fund",
          body: "PM negotiated 90-day data export assistance and fine-tune weight export in contract. Reserved $150K migration budget in year 3 planning. Exit cost wasn't zero but was bounded — board appreciated honesty.",
        },
      ],
    }),
    buildSection({
      number: "1.10",
      title: "PM decision lens: the build vs buy decision tree",
      subtitle: "A structured framework for making this call with your team, your finance stakeholder, and your legal counsel in one meeting",
      take: "Use a decision tree in one working session: (1) Is third-party use legally allowed? (2) Is capability commoditised? (3) Do we have proprietary training signal? (4) Does prompting/RAG meet quality bar? (5) Does unit economics favour own inference at scale? — document outcome in an ADR with revisit triggers.",
      why: "The build vs buy meeting fails when it's opinion theatre. A tree with explicit gates gives finance numbers, legal vetoes, and engineering estimates a shared structure — and produces an auditable decision.",
      paragraphs: [
        [
          s("Gate 1 — Legal and compliance: can we send data? "),
          x(
            "If no: private deploy or build on-prem. If yes with conditions: document DPA requirements as constraints on vendor shortlist.",
            "Legal at the table from minute one — not week six.",
          ),
          s(" Compliance failure resets the tree to build/private paths."),
        ],
        [
          s("Gates 2–4 — Commodity, data, quality: the strategic core. "),
          x(
            "Commodity + no proprietary data → buy. Proprietary data + quality gap prompts can't close → fine-tune. Model is the moat + scale economics → build train/serve.",
            "Each gate needs evidence: golden eval scores, data inventory, COGS model — not assertions.",
          ),
          s(" PM facilitates; DS validates quality gate; finance validates economics gate."),
        ],
        [
          s("Document in ADR with revisit triggers. "),
          x(
            "ADR records: decision, alternatives rejected, metrics that would flip decision (e.g., 'revisit build if API spend >$1.5M/year' or 'revisit fine-tune if style compliance <85% after prompt sprint').",
            "Quarterly review: vendor price change, new open-weight release, eval regression — tree re-run in 30 minutes if triggers fire.",
          ),
          s(" Decisions without revisit triggers become religious wars."),
        ],
      ],
      examples: [
        {
          title: "90-minute decision workshop — support AI",
          body: "Attendees: PM, eng lead, DS, finance, legal. Tree outcome: buy API + RAG + human escalation; fine-tune deferred until 10K labelled tickets. ADR signed same day. Sales referenced ADR when prospect asked 'why not your own model.'",
        },
        {
          title: "Trigger fired — API spend revisit",
          body: "ADR said revisit at $80K/month API spend. Hit at month 9. Re-ran tree: fine-tune distilled model projected 40% savings at 95% quality. Approved adapter sprint. Decision tree living document, not one-off.",
        },
        {
          title: "Legal gate redirected entire strategy",
          body: "Healthcare client — no PHI to public API. Tree stopped at Gate 1. Pivoted to private hosted open-weight + on-prem RAG. Saved 8 weeks of wrong vendor POC. PM template now starts with compliance before capability.",
        },
      ],
    }),
  ],
  quiz: [
    {
      q: "In the build/buy/fine-tune framework, what does 'build' most often mean for product teams?",
      options: [
        "Pretraining a foundation model from scratch on proprietary data.",
        "Assembling the product system — orchestration, RAG, evals, UX — often on top of bought models.",
        "Writing longer system prompts.",
        "Purchasing a vertical SaaS AI product.",
      ],
      correct: 1,
      correctFeedback:
        "Right. Most teams 'build' the product layer; true pretrain-from-scratch build is rare and narrowly justified.",
      wrongFeedback:
        "Build usually means product engineering around models, not pretraining. Re-read sections 1.1 and 1.8.",
    },
    {
      q: "Which condition most strongly favours buying over building?",
      options: [
        "The capability is commoditised and time-to-market is critical.",
        "You have a decade of exclusive labelled behavioural data.",
        "Regulations prohibit sending data to third parties.",
        "You project 500M tokens/month at current quality.",
      ],
      correct: 0,
      correctFeedback:
        "Exactly. Commodity capabilities and speed favour buy; proprietary data, compliance walls, and scale economics push toward build or private deploy.",
      wrongFeedback:
        "Buy wins on commodity + timeline. Proprietary data, compliance, and scale flip the calculus. Re-read sections 1.5 and 1.6.",
    },
    {
      q: "When is fine-tuning most clearly justified?",
      options: [
        "Before any prompt engineering has been attempted.",
        "When style, domain language, or format adherence can't be made reliable with prompts alone.",
        "Whenever the API bill exceeds $1,000/month.",
        "Only when pretraining from scratch is impossible.",
      ],
      correct: 1,
      correctFeedback:
        "Right. Fine-tune addresses consistent behavioural and domain patterns that prompting hits a ceiling on — measured, not assumed.",
      wrongFeedback:
        "Fine-tune follows demonstrated prompt limits on behaviour/format, not arbitrary spend thresholds. Re-read sections 1.4 and 1.7.",
    },
    {
      kind: "categorize",
      q: "Match each scenario to the best primary path.",
      categories: ["Buy API/SaaS", "Fine-tune", "Build/train core model", "Hybrid stack"],
      items: [
        { text: "Meeting transcription for internal notes.", category: 0 },
        { text: "Brand voice compliance across 12 languages.", category: 1 },
        { text: "Fraud detection on 10 years of proprietary transaction labels.", category: 2 },
        { text: "B2B copilot: GPT API + doc RAG + approval UI.", category: 3 },
        { text: "JSON invoice parsing needing 97% schema validity.", category: 1 },
        { text: "Air-gapped deployment with no external API.", category: 2 },
      ],
      correctFeedback:
        "Right. Match path to differentiation, data, compliance, and measured quality gaps — most production systems are hybrid.",
      wrongFeedback:
        "Use commodity → buy, behaviour/format gaps → fine-tune, moat + data → build, typical copilot → hybrid. Re-read sections 1.5–1.8.",
    },
    {
      kind: "order",
      q: "Order the PM decision tree gates from first to last.",
      prompt: "Drag to arrange the standard build vs buy decision sequence.",
      items: [
        "Legal/compliance: can we use third-party APIs with our data?",
        "Is the capability commoditised vs core differentiation?",
        "Do prompts/RAG meet the quality bar on golden evals?",
        "Do proprietary data and scale economics justify build or fine-tune?",
        "Document ADR with revisit triggers.",
      ],
      correctFeedback:
        "Exactly. Compliance first, then strategic and quality gates, then economics — always document with triggers.",
      wrongFeedback:
        "Start with legal, then commodity/differentiation, quality evidence, economics, ADR. Re-read section 1.10.",
    },
    {
      q: "Which vendor diligence practice is strongest?",
      options: [
        "Choosing the vendor with the best conference demo.",
        "Running your golden task set across finalists and scoring capability, reliability, data terms, and exit cost.",
        "Signing the lowest per-token price without usage forecasting.",
        "Avoiding legal review until after engineering integration is complete.",
      ],
      correct: 1,
      correctFeedback:
        "Right. Structured bake-off on your tasks plus reliability, data, and exit cost — not demos or price alone.",
      wrongFeedback:
        "Vendor selection requires your golden eval, legal review, and exit planning. Re-read section 1.9.",
    },
  ],
});
