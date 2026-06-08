import { buildChapter, buildSection, s, x } from "../concepts-pb4-helpers";

export const chapter09ObservabilityTracing = buildChapter({
  slug: "pb4-observability-tracing",
  number: 9,
  shortTitle: "Observability & Tracing",
  title: "Observability & Tracing",
  readingMinutes: 30,
  summary:
    "Why AI observability differs from traditional APM, what to log, multi-step tracing, prompt versioning, latency and cost breakdown, drift detection, LangSmith/W&B/Arize/Helicone/Langfuse, and closing feedback loops — how PMs debug production AI at scale.",
  keyTakeaway:
    "You can't fix what you can't see. AI observability captures prompts, retrieval, tool calls, latencies, costs, and outcomes as linked traces — the flight recorder for non-deterministic systems — and PMs use it to turn user complaints into reproducible failures.",
  pmCallout:
    "As a PM: ask for a trace link in every bug report template. If support can't paste a trace ID, you don't have observability — you have archaeology.",
  sections: [
    buildSection({
      number: "9.1",
      title: "Why AI observability is different",
      subtitle: "Non-determinism, semantic failure, and multi-step pipelines",
      take: "Traditional observability tracks errors and latency on deterministic code paths; AI observability must capture full prompt context, retrieval results, model parameters, intermediate reasoning, token costs, and output quality signals — because failures are often semantic ('wrong answer') not exceptions ('500 error').",
      why: "PMs hear 'the AI gave a bad answer' — without AI-native observability, eng can't reproduce it. PMs who fund tracing infrastructure shorten incident MTTR from days to hours.",
      paragraphs: [
        [
          s("HTTP 200 with a wrong answer is the default failure mode. "),
          x(
            "Classic APM: red when status ≠ 200 or p99 > SLA. LLM feature: green metrics while users get hallucinations, refusals, or stale data.",
            "You need quality signals in the observability stack — thumbs down, faithfulness flags, task abandonment — not just uptime.",
          ),
          s(" PM defines 'healthy' as quality + cost + latency, not availability alone."),
        ],
        [
          s("Multi-step pipelines multiply blind spots. "),
          x(
            "One user message may trigger: query rewrite → embed → retrieve → rerank → prompt build → LLM → parse → tool call → second LLM. Failure at step 3 looks like 'model dumb' in support ticket.",
            "Distributed tracing links spans — each step timed, input/output logged (with PII policy).",
          ),
          s(" Without spans, teams guess which stage failed — and usually blame the model."),
        ],
        [
          s("Non-determinism requires logging enough to replay. "),
          x(
            "Log model version, temperature, seed (if set), full prompt messages, retrieval chunk IDs, token counts. Replay in staging with same inputs to diff behaviour.",
            "Reproducibility ≠ identical output — but should narrow variance for debugging.",
          ),
          s(" Observability budget is COGS line item — storage, sampling, tool fees — PM approves like infra."),
        ],
      ],
      examples: [
        {
          title: "Green dashboard, red NPS",
          body: "APM showed 99.9% success, p95 2.1s. NPS dropped 12 points. AI observability revealed retrieval returning empty for new doc format — model apologised vaguely. Fix: parser upgrade, not prompt. PM added 'empty retrieval rate' alert.",
        },
        {
          title: "Trace ID in support macro",
          body: "PM added 'copy debug ID' button in chat UI. Support pastes trace into internal tool — sees retrieval chunks and model version. Median ticket resolution dropped from 2 days to 4 hours for AI issues.",
        },
        {
          title: "Sampling for cost control",
          body: "Full prompt logging on 100% traffic cost $8K/month storage. PM approved 10% sample + 100% on thumbs-down. Statistically sufficient for trends; complete data for incidents.",
        },
      ],
    }),
    buildSection({
      number: "9.2",
      title: "What to log",
      subtitle: "The minimum viable flight recorder",
      take: "Log request metadata, full prompt assembly (system + history + retrieval), model config, retrieval candidates and scores, tool inputs/outputs, response text, token counts, latency per stage, cost estimate, user feedback, and safety flags — with PII redaction and retention policy aligned to legal.",
      why: "Teams either log too little ('we have CloudWatch') or too much (GDPR nightmare). PMs sign off on the logging schema — what's captured, what's redacted, how long it's kept.",
      paragraphs: [
        [
          s("Core fields every AI trace should include. "),
          x(
            "trace_id, session_id, user_id (hashed), timestamp, environment, feature flag state. Model: provider, model name, version, temperature, max_tokens.",
            "Prompt: rendered messages (redacted), token count in/out. Retrieval: query, top-k doc IDs, scores, chunk text hash.",
          ),
          s(" PM checklist: can support answer 'what did the model see?' from a trace — yes or no."),
        ],
        [
          s("Quality and outcome signals alongside logs. "),
          x(
            "Explicit: thumbs up/down, report button, edit distance before send. Implicit: copy event, task completion, escalation to human, session length.",
            "Join feedback to trace_id — closes loop from metric to root cause.",
          ),
          s(" Implicit signals often outperform explicit in volume — design logging for both."),
        ],
        [
          s("PII, retention, and access control. "),
          x(
            "Redact at ingest: credit cards, health fields, secrets. Retention: 30/90/365 days per regulation. RBAC: only on-call + PM + trust & safety access full prompts.",
            "Legal review before logging user content in third-party observability SaaS.",
          ),
          s(" PM partners with legal on DPA — observability vendor sees your prompts."),
        ],
      ],
      examples: [
        {
          title: "Logging schema as PRD appendix",
          body: "PM attached required trace fields to copilot PRD v2. Eng implemented OpenTelemetry spans matching schema. Cross-team debugging used same vocabulary — 'span RAG_RETRIEVE empty' in Slack, everyone understood.",
        },
        {
          title: "Redaction pipeline",
          body: "Healthcare bot logged traces with NER-based PHI redaction before S3. Clinicians debugged via trace ID with synthetic rehydration in secure env. PM balanced debuggability vs HIPAA.",
        },
        {
          title: "Missing model version field",
          body: "Incidents after vendor update couldn't diff behaviour — model version wasn't logged. PM P0: add model_version to all spans within one sprint. Retro: 'observability schema' is versioned like API schema.",
        },
      ],
    }),
    buildSection({
      number: "9.3",
      title: "Tracing multi-step flows",
      subtitle: "Spans, parent-child traces, and agent loops",
      take: "Distributed tracing represents each pipeline step as a span with timing and I/O — parent trace links query rewrite, retrieval, generation, and tool calls — making agent loops and RAG chains debuggable as trees instead of opaque black boxes.",
      why: "Agent features fail in loops — 'why did it call the wrong tool twice?' PMs who read trace waterfalls ask better questions in incident reviews and scope agent reliability work realistically.",
      paragraphs: [
        [
          s("Span model for RAG. "),
          x(
            "Root span: user_request. Children: embed_query, vector_search, rerank, build_prompt, llm_call, parse_output. Each records latency, status, byte size.",
            "OpenTelemetry conventions emerging for GenAI — semantic attributes for model name, token usage.",
          ),
          s(" PM UX: internal trace viewer with human-readable labels, not raw JSON only."),
        ],
        [
          s("Agent traces add cycles and branches. "),
          x(
            "Agent loop: plan → tool_call → observe → replan. Each iteration a child span. Critical: log tool arguments and raw API responses (redacted).",
            "Long traces need collapse UI — PM cares about iteration count and total cost per task.",
          ),
          s(" Agent SLA: max iterations and max cost per trace — product limits encoded in orchestration."),
        ],
        [
          s("Error propagation vs silent degradation. "),
          x(
            "Retrieval timeout → empty context → model hallucinates — trace shows warning span, not error. Mark degraded states explicitly in spans.",
            "Alerts on degradation patterns: empty retrieval rate, tool error rate, parse fallback rate.",
          ),
          s(" PM dashboards highlight degradation before user-visible failure volume spikes."),
        ],
      ],
      examples: [
        {
          title: "Waterfall exposed reranker regression",
          body: "p95 latency up 400ms; waterfall showed reranker span grew from 80ms to 520ms after deploy — not LLM. PM prioritized reranker perf over prompt tuning. Trace saved week of wrong investigation.",
        },
        {
          title: "Agent loop runaway",
          body: "Trace showed 14 tool iterations on simple calendar query — bug in stop condition. PM set product cap: max 6 iterations, user message on exceed. Trace IDs in error report proved need.",
        },
        {
          title: "LangSmith trace shared in PR",
          body: "Eng attached LangSmith trace link to PR description for agent change. PM verified tool selection on 3 golden scenarios before approve. Traces as review artifact — not just runtime debug.",
        },
      ],
    }),
    buildSection({
      number: "9.4",
      title: "Prompt versioning",
      subtitle: "Know which prompt shipped which answer",
      take: "Prompt versioning tags every trace with prompt template ID and version hash — git for prompts — so when quality shifts you know whether retrieval, model, or prompt changed, and you can roll back prompts with the same discipline as code rollbacks.",
      why: "Prompts change weekly; model behaviour drifts. Without version tags, eval regressions and user complaints are un attributable. PMs require prompt version in release process.",
      paragraphs: [
        [
          s("Store prompts in version control, not scattered in code strings. "),
          x(
            "Prompt registry: YAML/JSON in repo, CMS, or LangSmith/Langfuse prompt hub. Deploy bumps version; runtime logs prompt_version on every trace.",
            "Hash rendered prompt after variable substitution — catches dynamic template bugs.",
          ),
          s(" PM owns prompt changelog: what changed, why, expected eval impact."),
        ],
        [
          s("Couple prompt version to feature flags and experiments. "),
          x(
            "A/B: 50% prompt v3, 50% v4 — traces carry variant ID. Analysis joins variant to online metrics.",
            "Rollback: flip flag to v3 in minutes — if you logged versions and kept v3 artifact.",
          ),
          s(" 'Quick prompt fix in prod' without version bump is tech debt PM should block."),
        ],
        [
          s("Prompt diff in incident review. "),
          x(
            "Compare traces before/after incident: same prompt version? same retrieval? same model?",
            "Isolation tree: version mismatch explains spike → rollback prompt, not retrain model.",
          ),
          s(" Eval CI should run on prompt PRs — version bump triggers regression suite automatically."),
        ],
      ],
      examples: [
        {
          title: "Prompt registry prevented mystery drift",
          body: "Three engineers had local prompt copies in env vars — production behaviour untraceable. PM mandated central registry + version in trace. Incident root cause time dropped 60% next quarter.",
        },
        {
          title: "A/B by prompt version",
          body: "Support bot tested concise vs thorough system prompt — traces tagged v2.1 vs v2.2. Online: concise won on CSAT, thorough won on first-contact resolution. PM shipped intent-based routing between versions.",
        },
        {
          title: "Rollback in 8 minutes",
          body: "Deploy v4.7 prompt; thumbs-down rate 2× baseline in 30 min. Flag rollback to v4.6; traces confirmed variant shift. PM post-mortem: eval missed one safety slice — added to golden set.",
        },
      ],
    }),
    buildSection({
      number: "9.5",
      title: "Latency breakdown",
      subtitle: "Where the seconds go — and what PMs can optimize",
      take: "AI feature latency is a sum of embedding, retrieval, reranking, queue time, time-to-first-token, and generation — tracing breaks down p50/p95 per stage so PMs prioritize optimizations that move user-visible SLA, not vanity model speed.",
      why: "CEO asks 'make it faster.' Without breakdown, eng optimizes wrong layer. PMs who read latency waterfalls make ROI tradeoffs — smaller model vs better cache vs faster reranker.",
      paragraphs: [
        [
          s("Typical RAG latency budget. "),
          x(
            "Embed query 20–80ms. Vector search 10–100ms. Rerank 50–500ms. Prompt assembly <10ms. LLM TTFT 200ms–2s. Generation 1–10s depending on output length.",
            "User-perceived latency = TTFT + streaming — long time-to-first-token feels broken even if total time OK.",
          ),
          s(" PM SLA often TTFT p95 < 1.5s, total < 8s for chat — define per product."),
        ],
        [
          s("Optimization levers by span. "),
          x(
            "Retrieval: cache frequent queries, smaller index, approximate search. Rerank: fewer candidates, lighter cross-encoder. LLM: smaller model routing, speculative decoding, shorter max_tokens.",
            "Parallelize independent spans — embed + keyword search concurrently.",
          ),
          s(" PM cost-latency curve: document which tier gets fast model vs slow model."),
        ],
        [
          s("Latency regressions need span-level alerts. "),
          x(
            "Alert when p95 llm_call up 30% week-over-week — vendor degradation or prompt bloat.",
            "Prompt token growth is silent latency tax — track tokens in traces.",
          ),
          s(" Include latency breakdown in weekly AI product review — one slide, four bars."),
        ],
      ],
      examples: [
        {
          title: "Reranker was the bottleneck — not GPT",
          body: "PM wanted 'faster AI'; eng profiled traces — 62% latency in cross-encoder rerank on 50 docs. Cut to 10 docs pre-rerank: p95 down 1.8s, quality eval −0.02 faithfulness — accepted tradeoff.",
        },
        {
          title: "TTFT SLA for streaming chat",
          body: "Users abandoned after 2.5s blank wait. PM set TTFT p95 alert at 1.2s; traces showed cold-start on custom model pod. Fix: min replicas — infra cost $400/mo, conversion +6%.",
        },
        {
          title: "Prompt bloat regression",
          body: "Someone added 2K-token policy appendix to system prompt. TTFT +400ms, cost +18%. Trace token metrics caught it. PM rule: >10% token increase needs eval + perf review.",
        },
      ],
    }),
    buildSection({
      number: "9.6",
      title: "Cost monitoring",
      subtitle: "Token economics in production — not spreadsheet estimates",
      take: "Cost observability attributes token usage and API spend per trace, user, feature, and prompt version — surfacing runaway agent loops, cache misses, and model routing mistakes — because AI unit economics drift silently without per-request cost tags.",
      why: "Finance asks 'why did OpenAI bill double?' PMs with cost traces answer: 'agent feature launched, 3× tool calls per session, 40% traffic on GPT-4o not mini.' Without traces, it's blame tennis.",
      paragraphs: [
        [
          s("Tag every span with cost estimate. "),
          x(
            "Input tokens × input price + output tokens × output price + embedding + reranker + tool API costs. Roll up to trace, session, daily per feature.",
            "Helicone, Langfuse, custom: cost per trace_id in near real time.",
          ),
          s(" PM dashboard: cost per successful task — not cost per request only."),
        ],
        [
          s("Cost anomaly detection. "),
          x(
            "Alert: user session cost > $2, org daily spend 2× baseline, agent iteration > 10.",
            "Abuse: scraping via your API, infinite loops — cost alerts as security signal.",
          ),
          s(" Budget caps per user tier — product policy enforced with hard stops."),
        ],
        [
          s("Cost-quality tradeoff visibility. "),
          x(
            "Compare cost per trace across prompt versions and model routes alongside quality metrics.",
            "Route simple queries to cheap model — observability proves routing accuracy and savings.",
          ),
          s(" PM presents 'we saved $12K/mo routing 70% to mini with −0.01 CSAT' — data from traces."),
        ],
      ],
      examples: [
        {
          title: "Agent loop doubled COGS",
          body: "Monthly API bill +85%. Cost traces showed agent feature — avg 4.2 LLM calls per task vs 1.3 for legacy chat. PM capped iterations, added cheaper planner model. Bill normalized in 2 weeks.",
        },
        {
          title: "Per-customer cost attribution",
          body: "B2B SaaS tagged traces with tenant_id. One tenant 12% of token spend, 3% of revenue — heavy agent automation. PM repriced tier + usage caps. Observability enabled pricing fix.",
        },
        {
          title: "Helicone budget alert",
          body: "PM set Helicone alert at $500/day staging — test script infinite loop hit $1.2K overnight. Trace showed loop; kill switch added. Cost observability as dev safety net.",
        },
      ],
    }),
    buildSection({
      number: "9.7",
      title: "Drift detection",
      subtitle: "When production behaviour shifts without a deploy",
      take: "Drift detection monitors statistical shifts in inputs, retrieval distributions, outputs, latency, cost, and quality scores over time — catching vendor model updates, corpus staleness, seasonal query changes, and slow quality erosion before users mass-complain.",
      why: "Not every regression ships in your release branch. PMs who monitor drift catch 'nothing changed in our repo but answers got worse' — usually model, data, or traffic mix.",
      paragraphs: [
        [
          s("Types of drift to monitor. "),
          x(
            "Data drift: new query topics, languages, attachment types. Retrieval drift: score distributions, empty-result rate. Output drift: length, refusal rate, sentiment. Quality drift: online thumbs-down rate, LLM-judge sample scores.",
            "Embedding-space clustering on weekly queries surfaces emerging intents.",
          ),
          s(" PM sets thresholds with seasonality — tax season spikes aren't always incidents."),
        ],
        [
          s("Model and dependency drift. "),
          x(
            "Vendor silent updates change refusal rate and tone. Embedding model version mismatch between index and query.",
            "Pin versions in config; alert on unplanned version strings in traces.",
          ),
          s(" Subscribe to provider changelogs; automate version fingerprint checks in CI."),
        ],
        [
          s("Response to drift signals. "),
          x(
            "Investigate trace samples from drift window. Compare to golden eval re-run. Patch retrieval, prompt, or routing — or escalate to vendor.",
            "Document drift incidents — update eval suite with new patterns.",
          ),
          s(" Drift dashboard owner: PM or dedicated AI ops — not 'unowned Grafana panel.'"),
        ],
      ],
      examples: [
        {
          title: "Empty retrieval drift",
          body: "Alert: empty retrieval rate 2% → 11% over 5 days. Cause: new PDF upload format not parsed. No code deploy. PM prioritized parser fix; added format to golden set.",
        },
        {
          title: "Refusal rate drift post-vendor update",
          body: "Thumbs-down cited 'unhelpful refusals.' Traces showed model_version changed; refusal rate +15%. PM contacted vendor, adjusted system prompt, added override path for enterprise tier.",
        },
        {
          title: "Query topic cluster emergence",
          body: "Weekly embedding cluster found 8% queries about new regulation — corpus had no docs. Proactive content ingest before support spike. Drift detection as product planning input.",
        },
      ],
    }),
    buildSection({
      number: "9.8",
      title: "Observability tooling",
      subtitle: "LangSmith, W&B, Arize, Helicone, Langfuse — build vs buy",
      take: "AI observability platforms — LangSmith, Weights & Biases Weave, Arize Phoenix, Helicone, Langfuse — provide tracing, eval, prompt management, and cost dashboards with varying LangChain affinity, open-source options, and enterprise compliance — letting teams buy flight recorders instead of building from scratch.",
      why: "PMs pick tools in vendor evals. Knowing the landscape prevents 'we'll build Grafana dashboards' projects that lag features by quarters.",
      paragraphs: [
        [
          s("LangSmith — LangChain ecosystem native. "),
          x(
            "Traces, datasets, eval runs, prompt hub — tight if you use LangChain/LangGraph. SaaS with self-host options evolving.",
            "Best when: team already on LangChain; wants integrated eval + trace.",
          ),
          s(" PM trial criteria: can support paste trace URL day one?"),
        ],
        [
          s("Langfuse & Helicone — OSS-friendly, proxy-friendly. "),
          x(
            "Langfuse: open-source, self-host, traces, prompts, evals, scores — popular for data residency.",
            "Helicone: OpenAI-proxy style logging, fast cost analytics, simple setup — lighter weight.",
          ),
          s(" PM asks legal: self-host vs SaaS, data residency, retention controls."),
        ],
        [
          s("W&B Weave & Arize Phoenix — ML platform heritage. "),
          x(
            "W&B Weave: experiment tracking extends to LLM traces and evals — teams already on W&B.",
            "Arize Phoenix: open-source tracing, embeddings viz, drift — strong for ML engineers monitoring retrieval quality.",
          ),
          s(" Tool fit > tool hype — match to orchestration stack and compliance bar."),
        ],
      ],
      examples: [
        {
          title: "Langfuse self-host for EU bank",
          body: "PM chose self-hosted Langfuse — prompts stay in VPC, GDPR-compliant. Tradeoff: 2 eng-weeks setup vs LangSmith faster onboarding. Compliance won.",
        },
        {
          title: "Helicone for quick cost visibility",
          body: "Startup routed OpenAI calls through Helicone — cost per feature in day 1. Later added Langfuse for full traces. PM staged observability maturity with budget.",
        },
        {
          title: "Arize for retrieval debugging",
          body: "ML team used Arize embedding drift on retrieved chunks — visualized cluster gaps. PM used viz in roadmap pitch for corpus expansion. Tool matched user: ML-heavy team.",
        },
      ],
    }),
    buildSection({
      number: "9.9",
      title: "Feedback loops",
      subtitle: "From production traces to better evals and products",
      take: "Feedback loops connect user signals — thumbs, edits, escalations, task outcomes — to trace storage, eval datasets, and prioritization — turning production into a continuous improvement flywheel instead of a one-way ship-and-hope pipeline.",
      why: "Observability without action is expensive logging. PMs design loops: bad trace → labeled example → golden set → eval → fix → verify — same rigor as traditional product iteration.",
      paragraphs: [
        [
          s("Close the loop structurally. "),
          x(
            "Thumbs-down → auto-create review queue with trace attached. PM/T&S labels root cause tag (retrieval, hallucination, tone, refusal). Promote to golden dataset on consensus.",
            "Weekly triage ritual — 30 min, top 20 negative traces.",
          ),
          s(" Unlabeled thumbs-down pile is unused gold."),
        ],
        [
          s("Implicit feedback is higher volume. "),
          x(
            "Edit distance before send, copy without send, session abandon after answer, human takeover in copilot.",
            "Join implicit signals to traces for unsupervised prioritization — review highest-impact failures first.",
          ),
          s(" PM defines 'task success' event per feature — loop metrics depend on it."),
        ],
        [
          s("Feed loops to roadmap, not only hotfixes. "),
          x(
            "Aggregate root cause tags monthly: 40% retrieval misses → corpus project. 25% format errors → schema guardrail epic.",
            "Exec reporting: 'top failure modes from traces' beats anecdotal user interviews alone.",
          ),
          s(" Observability-driven roadmap is how mature AI PMs allocate sprints."),
        ],
      ],
      examples: [
        {
          title: "Thumbs-down → golden set pipeline",
          body: "Braintrust integration: one-click promote labeled failure to dataset. Golden set grew 200 cases in Q1 from prod — all real.user pain. Eval caught next regression on same pattern.",
        },
        {
          title: "Edit distance signal",
          body: "Email drafter tracked character edit distance before send. High edit traces reviewed weekly — found systematic wrong sign-off phrase. Prompt v fix; edit distance down 34%.",
        },
        {
          title: "Root cause taxonomy in planning",
          body: "PM monthly report: trace tags showed 'stale corpus' 31% of failures. Prioritized ingestion pipeline over prompt tuning — CSAT +9% after corpus refresh. Loop drove correct investment.",
        },
      ],
    }),
    buildSection({
      number: "9.10",
      title: "PM lens",
      subtitle: "Observability as product infrastructure, not eng nice-to-have",
      take: "PMs require traceability in acceptance criteria, fund observability before scale, define dashboards that matter for decisions, and run feedback triage — because debugging AI without traces is guesswork and shipping AI without feedback loops is shipping blind.",
      why: "AI PM credibility comes from fast, data-backed answers to 'what broke and why.' Observability is how you earn that — not hero prompts in the playground.",
      paragraphs: [
        [
          s("Observability acceptance criteria for launch. "),
          x(
            "Every prod request logs trace_id. Support can lookup trace. p95 latency and cost per trace on dashboard. Thumbs-down linked to trace. Prompt version tagged.",
            "No GA without these — same as 'no auth' bar.",
          ),
          s(" PM signs launch checklist — observability row is non-negotiable for customer-facing AI."),
        ],
        [
          s("Dashboards PMs actually use. "),
          x(
            "One page: quality (thumbs, task success), performance (TTFT, p95), cost (per session, per feature), drift (refusal rate, empty retrieval). Slice by prompt version and model.",
            "Avoid 40-panel Grafana no one opens — PM specifies the one slide for weekly review.",
          ),
          s(" If you don't review it weekly, delete it and build one you will."),
        ],
        [
          s("Organizational habits. "),
          x(
            "Blameless post-mortems with trace links. Eval updates from prod failures in same sprint as fix. Cross-team trace literacy training for support and PM.",
            "Observability maturity model: logs → traces → cost → drift → automated loops.",
          ),
          s(" Your next AI feature should be easier to debug than the last — that's PM-owned progress."),
        ],
      ],
      examples: [
        {
          title: "GA blocked on missing traces",
          body: "Beta NPS good but 30% requests lacked trace_id due to mobile client bug. PM blocked GA until fix — refused to fly blind at scale. Two-day delay; saved unknown incident cost.",
        },
        {
          title: "Weekly AI product review slide",
          body: "PM standardized one dashboard slide: quality, latency, cost, top 3 trace root causes. Execs asked hard questions with data. Observability visibility increased headcount for AI ops — justified.",
        },
        {
          title: "Support trained on trace lookup",
          body: "Half-day support training: paste trace ID, read retrieval span, escalation path. AI ticket escalation to eng down 45%. PM investment in literacy, not just tooling.",
        },
      ],
    }),
  ],
  quiz: [
    {
      q: "Why is traditional APM insufficient for LLM features?",
      options: [
        "LLM APIs don't return HTTP status codes",
        "Features can return HTTP 200 with semantically wrong answers — quality failures aren't exceptions",
        "LLMs don't have latency",
        "APM tools are banned for AI",
      ],
      correct: 1,
      correctFeedback:
        "Right. Semantic failures (wrong, hallucinated, unhelpful) need quality signals and full context logs, not just uptime.",
      wrongFeedback:
        "HTTP 200 + bad answer is the common failure mode. Re-read section 9.1.",
    },
    {
      q: "Prompt versioning in traces primarily helps you:",
      options: [
        "Reduce token costs automatically",
        "Attribute quality changes to specific prompt deployments and roll back confidently",
        "Eliminate the need for evals",
        "Comply with copyright law",
      ],
      correct: 1,
      correctFeedback:
        "Exactly. Version tags link behaviour to prompt changes — essential for debugging and rollback.",
      wrongFeedback:
        "Prompt versioning is about attribution and rollback, not automatic cost savings. Re-read section 9.4.",
    },
    {
      q: "TTFT (time to first token) matters because:",
      options: [
        "It determines model accuracy",
        "Users perceive latency from first visible output — long blank waits hurt UX even if total time is OK",
        "It replaces cost monitoring",
        "It's only relevant for batch jobs",
      ],
      correct: 1,
      correctFeedback:
        "Right. Streaming UX depends on TTFT — product SLA should include it, not just total generation time.",
      wrongFeedback:
        "TTFT is a user-perceived latency metric for streaming chat. Re-read section 9.5.",
    },
    {
      q: "Cost observability per trace helps PMs:",
      options: [
        "Eliminate all API bills",
        "Identify runaway agent loops, routing mistakes, and per-tenant unit economics issues",
        "Avoid logging prompts",
        "Replace financial planning",
      ],
      correct: 1,
      correctFeedback:
        "Exactly. Per-trace cost attribution explains bill spikes and informs pricing and caps.",
      wrongFeedback:
        "Cost traces diagnose spend drivers like agent loops and model routing. Re-read section 9.6.",
    },
    {
      kind: "categorize",
      q: "Match each tool to its notable strength.",
      categories: ["LangSmith", "Helicone", "Langfuse"],
      items: [
        { text: "Deep integration with LangChain traces and evals.", category: 0 },
        { text: "Fast OpenAI-proxy style cost analytics.", category: 1 },
        { text: "Open-source self-host for data residency.", category: 2 },
        { text: "Prompt hub tied to LangGraph projects.", category: 0 },
        { text: "Simple setup for startup cost visibility.", category: 1 },
        { text: "Traces, prompts, and scores in your VPC.", category: 2 },
      ],
      correctFeedback:
        "Right. LangSmith = LangChain ecosystem; Helicone = lightweight cost proxy; Langfuse = OSS self-host flexibility.",
      wrongFeedback:
        "Review tool positioning: LangSmith for LangChain, Helicone for cost proxy, Langfuse for OSS self-host. Re-read section 9.8.",
    },
    {
      kind: "order",
      q: "Order the production feedback loop from first step to continuous improvement.",
      prompt: "Drag to arrange first (top) to last (bottom).",
      items: [
        "User signal captured (thumbs-down, edit, abandon) with trace_id",
        "Triage and root-cause labeling on trace waterfall",
        "Promote case to golden eval dataset",
        "Fix retrieval, prompt, or routing; run regression eval",
        "Monitor drift and online metrics to verify improvement",
      ],
      correctFeedback:
        "Exactly. Signal → triage → dataset → fix + eval → monitor — the observability flywheel.",
      wrongFeedback:
        "Feedback loops start with linked user signals on traces, then triage, dataset promotion, fix, and monitoring. Re-read section 9.9.",
    },
  ],
});
