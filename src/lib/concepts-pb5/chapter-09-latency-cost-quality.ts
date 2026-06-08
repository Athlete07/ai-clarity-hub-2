import { buildChapter, buildSection, s, x } from "../concepts-pb4-helpers";

export const chapter09LatencyCostQuality = buildChapter({
  slug: "pb5-latency-cost-quality-triangle",
  number: 9,
  shortTitle: "Latency/Cost/Quality",
  title: "The Latency / Cost / Quality Triangle",
  readingMinutes: 30,
  summary:
    "Every AI product decision sits on a three-way tradeoff — latency users feel, cost the business pays, and quality that drives retention — and PMs who map their use case to the right corner of the triangle make defensible model, architecture, and SLA choices instead of defaulting to the biggest model.",
  keyTakeaway:
    "You can optimize two corners of the triangle at once, rarely all three. The PM job is picking which corner to sacrifice for which user moment — and documenting that choice before eng ships Opus for a autocomplete field.",
  pmCallout:
    "As a PM: put latency p95, cost per session, and one quality metric on the same PRD slide. If you can't state which leg you're sacrificing and why, you're not making a product decision — you're accepting the eng default.",
  sections: [
    buildSection({
      number: "9.1",
      title: "The triangle framework",
      subtitle: "Three legs, two optima, one product choice",
      take: "The latency/cost/quality triangle states that inference systems face coupled tradeoffs — faster usually means smaller or cached models (quality risk), higher quality usually means larger models or more retrieval (latency and cost up), lower cost usually means quantization, shorter context, or fewer calls (quality and latency risk) — and PMs must choose which leg is binding per use case.",
      why: "Teams debate model picks in isolation. The triangle forces explicit tradeoffs — the language executives and eng share when negotiating roadmap, COGS, and UX.",
      paragraphs: [
        [
          s("Why three variables, not two. "),
          x(
            "Cost and latency correlate but aren't identical — batching cuts cost, adds latency. Quality is multidimensional — faithfulness, fluency, reasoning depth — but rolls up to one product bar per feature.",
            "Collapsing to 'fast vs good' hides margin: a fast cheap wrong answer is worse than a slow expensive right one for compliance use cases.",
          ),
          s(" PM maps feature to triangle position in PRD non-functionals — binding constraint named first."),
        ],
        [
          s("Use-case corners of the triangle. "),
          x(
            "Low-latency/low-cost (autocomplete, classification): sacrifice peak quality. High-quality/high-latency (legal research, code architect): cost secondary. Cost-sensitive batch (overnight reports): latency sacrificed.",
            "Same product may occupy different corners per intent — routing is a PM architecture decision.",
          ),
          s(" Document per-intent triangle position — not one global model for entire app."),
        ],
        [
          s("The triangle shifts over time. "),
          x(
            "Quantization, speculative decoding, and model tier releases move the Pareto frontier — yesterday's impossible point becomes today's default.",
            "Revisit triangle choices quarterly; don't inherit MVP model picks at scale.",
          ),
          s(" PM agenda item: 'Did the frontier move enough to re-open our sacrifice?'"),
        ],
      ],
      examples: [
        {
          title: "PRD triangle slide saved a sprint",
          body: "Eng proposed GPT-4 class for in-app typo suggestions. PM slide: binding constraint = latency <200ms, cost < $0.001/session, quality = 'good enough grammar.' Triangle pointed to small local model. Avoided 400ms API round-trip and $40K/month COGS at projected MAU.",
        },
        {
          title: "Wrong corner for use case",
          body: "Contract review bot used fastest cheapest model — missed indemnity clauses. Quality was binding; team upgraded tier, accepted 8s latency, charged premium SKU. PM reframed: 'cheap wrong' cost more than 'slow right' in legal workflow.",
        },
        {
          title: "Multi-intent triangle map",
          body: "Support bot: FAQ intent = low-latency corner (Haiku-class). Dispute resolution = high-quality corner (Sonnet + RAG). PM routing doc prevented one-model-fits-all debate; metrics improved on both slices.",
        },
      ],
    }),
    buildSection({
      number: "9.2",
      title: "Latency budgets and perception",
      subtitle: "p50, p95, time-to-first-token, and UX thresholds",
      take: "Latency budgets cap end-to-end response time — retrieval, guardrails, model inference, streaming — with p95 as the user-trust metric, because AI UX is sensitive to time-to-first-token and total wait in ways traditional APIs are not, and PMs set budgets per feature tier before model selection.",
      why: "Users abandon chat that hangs; they tolerate slower for high-stakes tasks if progress is visible. PMs who set latency budgets prevent architectures that benchmark well in isolation but fail in full pipeline.",
      paragraphs: [
        [
          s("Measure full path, not model API alone. "),
          x(
            "User-perceived latency = queue + retrieval + rerank + input guardrails + TTFT + token streaming + output guardrails.",
            "A 800ms model with 2s retrieval loses to a 1.2s model with 200ms retrieval — PM specs pipeline budget.",
          ),
          s(" Require p95 dashboard on production traces — not lab benchmarks."),
        ],
        [
          s("UX thresholds by interaction type. "),
          x(
            "Inline suggestions: <200ms. Chat turn: <3s TTFT ideal, <8s tolerable. Batch report: minutes OK with progress bar. Agent multi-step: per-step streaming + aggregate cap.",
            "Streaming improves perceived latency even when total time unchanged — product choice to expose tokens early.",
          ),
          s(" PM writes thresholds in acceptance criteria — eng designs to p95, not average demo latency."),
        ],
        [
          s("Latency vs quality coupling. "),
          x(
            "Larger models, more retrieval chunks, chain-of-thought, reranking — each adds latency for quality. Cutting steps speeds up and dumb down.",
            "Prioritise steps by quality-per-millisecond — reranker may be worth 300ms; second agent pass may not.",
          ),
          s(" Latency budget allocation is prioritisation — PM orders pipeline stages by user value."),
        ],
      ],
      examples: [
        {
          title: "TTFT streaming fix",
          body: "Users complained 'slow' despite 4s total time — 3.5s was silent waiting. PM required streaming after 500ms; NPS +12 with same p95. Perceived latency leg of triangle improved without model change.",
        },
        {
          title: "Hidden retrieval tax",
          body: "Model benchmark 600ms; production p95 4.2s. Trace breakdown: retrieval 2.8s. PM reallocated sprint to index optimization vs bigger model — bigger model would have worsened COGS and total latency.",
        },
        {
          title: "Tiered latency SLAs",
          body: "Free tier p95 target 6s; Pro tier 3s via priority queue + smaller retrieval set. PM documented triangle sacrifice: free users wait more, same model quality ceiling.",
        },
      ],
    }),
    buildSection({
      number: "9.3",
      title: "Cost modeling for inference",
      subtitle: "Per-query COGS, session economics, and margin",
      take: "Inference cost is driven by model tier price per token, prompt and completion length, number of calls per session, retrieval infra, and guardrail classifiers — PMs model cost per successful session against revenue or willingness-to-pay, because AI features without unit economics become margin traps at scale.",
      why: "Finance asks 'what does this feature cost at 1M MAU?' PMs who can't answer lose budget and pricing authority. Cost is the leg of the triangle that kills AI products silently.",
      paragraphs: [
        [
          s("Token math is the baseline. "),
          x(
            "Cost ≈ (input_tokens × input_price) + (output_tokens × output_price) × calls_per_session. Long system prompts and retrieved context dominate input tokens.",
            "Output token caps and concise prompt design are COGS levers — PM reviews default max_tokens.",
          ),
          s(" Build spreadsheet: MAU × sessions × tokens × price — update when model or prompt changes."),
        ],
        [
          s("Hidden costs beyond API bill. "),
          x(
            "Vector DB, embedding jobs, GPU self-host amortization, eval LLM-judge runs, logging storage, on-call for inference incidents.",
            "Fully-loaded cost per query often 1.5–3x API line item.",
          ),
          s(" PM total cost model includes infra — not just OpenAI invoice."),
        ],
        [
          s("Cost-quality latency interactions. "),
          x(
            "Cheaper model + more retrieval passes may cost more and run slower than one strong model call — triangle is coupled.",
            "Caching repeated queries cuts cost and latency but risks stale quality.",
          ),
          s(" Scenario-plan three architectures on same triangle slide — pick with eyes open."),
        ],
      ],
      examples: [
        {
          title: "COGS killed freemium",
          body: "Free tier unlimited chat at GPT-4 rates: $1.40/user/month COGS vs $0 ARPU. PM model forecast bankruptcy at 50K users. Introduced message caps + Haiku default; margin positive at 80K.",
        },
        {
          title: "System prompt bloat",
          body: "4K-token system prompt × 2M daily calls = significant input cost. PM audit trimmed to 1.2K tokens — quality held on golden set, COGS down 18%. Cost leg improved without latency sacrifice.",
        },
        {
          title: "Agent loop cost surprise",
          body: "Agent averaged 7 model calls per user goal — COGS 7x prototype estimate. PM added call budget cap and user-visible 'deep research' toggle (expensive mode). Triangle choice explicit to users.",
        },
      ],
    }),
    buildSection({
      number: "9.4",
      title: "Quality as the third leg",
      subtitle: "Defining 'good enough' and measurable bars",
      take: "Quality in the triangle means outputs meet the product bar for the job — task completion, faithfulness, safety, tone — measured by offline eval and online proxies, because quality without measurement becomes 'demo looked fine,' and quality without a defined bar becomes endless optimization.",
      why: "PMs own the quality threshold — what score ships, what slice can't regress. Without a bar, eng optimizes latency and cost until users churn.",
      paragraphs: [
        [
          s("Quality is use-case specific, not universal. "),
          x(
            "Autocomplete: grammatical correctness. RAG support: faithfulness + resolution. Creative writing: fluency + style. Code: pass unit tests.",
            "One eval metric across features obscures triangle decisions — define bar per intent.",
          ),
          s(" PRD quality section: metric name, threshold, measurement method, slice gates."),
        ],
        [
          s("'Good enough' beats theoretical maximum. "),
          x(
            "Moving faithfulness 0.92 → 0.96 may cost 2x latency and 40% COGS — users may not notice.",
            "PM asks: marginal user value of last quality point vs cost/latency — often diminishing returns.",
          ),
          s(" Ship at defined bar; iterate quality in versions when economics allow."),
        ],
        [
          s("Quality regressions are triangle moves. "),
          x(
            "Cost cut via smaller model = quality risk. Latency cut via shorter context = quality risk. Track all three when any leg changes.",
            "Re-baseline eval when moving triangle position — don't assume quality holds.",
          ),
          s(" Quality gate in release process — same rigor as latency SLO."),
        ],
      ],
      examples: [
        {
          title: "Diminishing returns study",
          body: "PM A/B tested model tiers on email drafter. Premium model +8% 'send without edit' vs standard; +3% vs mid-tier. Mid-tier won triangle — standard wasn't worth 2x cost; premium wasn't worth latency.",
        },
        {
          title: "Undefined quality bar",
          body: "Team debated 'better summaries' for 6 weeks. PM defined bar: 'all action items from transcript present' — measurable, 0.87 on golden set. Shipped at 0.87; stopped perfectionism loop.",
        },
        {
          title: "Quality slice gate",
          body: "Aggregate faithfulness 0.91 masked Spanish slice at 0.72. PM policy: no slice below 0.80 — blocked cost-saving model downgrade that hurt minority language users.",
        },
      ],
    }),
    buildSection({
      number: "9.5",
      title: "Model tiering",
      subtitle: "Haiku / Sonnet / Opus — routing by job",
      take: "Vendors offer model tiers — small/fast/cheap vs large/slow/capable — and PMs map intents to tiers explicitly, using cascades and routers so simple queries don't subsidize complex ones, because defaulting everything to the flagship model is a latency and COGS failure mode.",
      why: "Tiering is the most common triangle optimization in production. PMs who design tier maps and upgrade triggers capture margin without uniform quality sacrifice.",
      paragraphs: [
        [
          s("Tier selection heuristics. "),
          x(
            "Small tier: classification, extraction, formatting, short FAQ. Mid tier: general chat, moderate RAG. Large tier: multi-doc reasoning, code architecture, high-stakes drafting.",
            "Intent classifier or rule router sends traffic — misrouting costs quality or wastes money.",
          ),
          s(" PM maintains tier map doc — updated when vendor releases new sizes."),
        ],
        [
          s("Upgrade paths within a session. "),
          x(
            "Start cheap; escalate to larger model on low confidence, user request ('think harder'), or failed validation.",
            "Cascade pattern: 70% queries never leave small tier — huge COGS win.",
          ),
          s(" User-facing 'use advanced model' toggle makes triangle choice transparent."),
        ],
        [
          s("Tiering and brand perception. "),
          x(
            "Free on small, Pro on large is standard packaging. All-users-on-flagship burns margin; all-users-on-small hurts premium positioning.",
            "Align tier with willingness-to-pay and task criticality.",
          ),
          s(" Sales and PM must agree tier story — not eng picking one model for simplicity."),
        ],
      ],
      examples: [
        {
          title: "Intent router COGS win",
          body: "Classifier routed 68% support queries to small tier, 28% mid, 4% large. Blended COGS down 52% vs all-large; resolution rate -1.2% — within triangle tolerance. PM published tier map in internal wiki.",
        },
        {
          title: "Misrouted complex query",
          body: "Refund dispute sent to small tier — wrong policy cited. PM added escalation rule: sentiment negative + dollar amount > threshold → mid tier minimum. Quality leg protected on high-risk slice.",
        },
        {
          title: "Pro tier as triangle packaging",
          body: "PM packaged 'fast mode' (small, <2s) vs 'thorough mode' (large, ~10s) as user choice — latency/quality tradeoff explicit. Conversion to Pro for thorough mode exceeded forecast.",
        },
      ],
    }),
    buildSection({
      number: "9.6",
      title: "Caching and speculative decoding",
      subtitle: "Reuse and prediction as latency/cost levers",
      take: "Semantic and exact caching reuse prior responses to cut latency and cost; speculative decoding drafts with a small model verified by a large one — both shift the Pareto frontier but introduce staleness, consistency, and quality risks PMs must gate with TTL policy and cache invalidation rules.",
      why: "Infra teams propose caching for COGS wins. PMs decide what's safe to cache — stale wrong answers are a quality incident.",
      paragraphs: [
        [
          s("Cache types and PM policy. "),
          x(
            "Exact cache: identical prompt hash → instant response. Semantic cache: similar queries → prior answer — faster, riskier. Embedding cache: reuse retrieval for repeated doc sets.",
            "TTL and invalidation on corpus update, policy change, or price list refresh.",
          ),
          s(" PM defines non-cacheable intents: account-specific, time-sensitive, regulated advice."),
        ],
        [
          s("Speculative decoding tradeoffs. "),
          x(
            "Small model drafts tokens; large model verifies in parallel — cuts latency of large model feel at near-small cost profile when acceptance rate high.",
            "Low acceptance on creative or rare tasks — benchmark on your distribution, not vendor blog.",
          ),
          s(" Speculative stack is eng implementation; PM approves after latency/quality eval on golden set."),
        ],
        [
          s("Consistency vs savings. "),
          x(
            "Cached answer may contradict fresh retrieval after doc update — user trust hit.",
            "Cache hit rate KPI without freshness SLA optimizes wrong leg of triangle.",
          ),
          s(" Monitor cache-induced error rate — quality leg can silently erode."),
        ],
      ],
      examples: [
        {
          title: "Semantic cache stale pricing",
          body: "Cache served old subscription price for 6 hours after update — TTL was 24h. PM set price-related intents to no-cache + 1h TTL on product FAQs. COGS rose 4%; incident class eliminated.",
        },
        {
          title: "Speculative decode win on codegen",
          body: "Speculative stack cut p95 latency 35% on code completion with 0.2% quality regression on tests — within bar. PM approved for IDE feature; rejected for legal drafting (low acceptance rate).",
        },
        {
          title: "Exact cache for onboarding",
          body: "Identical setup wizard questions cached 30 days — instant responses, near-zero marginal cost. Quality static by design. PM identified safe cache pocket in triangle.",
        },
      ],
    }),
    buildSection({
      number: "9.7",
      title: "Context length tradeoffs",
      subtitle: "More tokens, more cost, slower, sometimes better",
      take: "Longer context windows let models reason over more retrieved chunks and conversation history — improving quality on complex tasks — but inflate input token cost, latency, and 'lost in the middle' attention failures, so PMs cap context per intent as a triangle knob.",
      why: "Defaulting to max context is lazy RAG. PMs who right-size context save COGS and often improve quality by reducing noise.",
      paragraphs: [
        [
          s("Cost and latency scale with context. "),
          x(
            "Input pricing linear in tokens; attention compute superlinear on some stacks. 128K context full every call is budget suicide.",
            "Retrieve top-k chunks tuned to intent — k=3 for FAQ, k=15 for contract compare.",
          ),
          s(" PM specifies max context budget per feature — eng enforces in retrieval layer."),
        ],
        [
          s("Quality doesn't always increase with context. "),
          x(
            "Irrelevant chunks confuse models — precision beats recall past a point. Summarise-then-answer patterns compress context.",
            "'Lost in the middle' — facts buried in long prompts get ignored.",
          ),
          s(" Eval sweep top-k and context strategy — find quality plateau before cost cliff."),
        ],
        [
          s("Conversation history trimming. "),
          x(
            "Unbounded chat history grows cost per turn and latency. Sliding window, summarization memory, or vector recall of past turns — each a triangle tradeoff.",
            "PM defines how much history matters for task — support ticket vs casual chat.",
          ),
          s(" History policy is product design — not infinite context marketing."),
        ],
      ],
      examples: [
        {
          title: "top-k sweep found sweet spot",
          body: "PM requested eval of k=5,10,20,40 chunks. Faithfulness peaked at k=12 then dropped (noise); latency doubled k=12→40. Shipped k=12 — quality max, cost/latency minimized.",
        },
        {
          title: "128K marketing trap",
          body: "Sales wanted '128K context' badge. Full-window calls cost $0.18/query avg. PM introduced 'deep analysis' mode (user opt-in) — 8% usage, 35% COGS — triangle choice user-visible.",
        },
        {
          title: "Summarize-then-answer",
          body: "Long PDF Q&A compressed retrieved sections to summaries before main call — 60% input token reduction, faithfulness +4% vs raw dump. Latency and cost legs improved with quality gain.",
        },
      ],
    }),
    buildSection({
      number: "9.8",
      title: "Routing and cascades",
      subtitle: "Architectures that optimize the blend",
      take: "Routing and cascade architectures dynamically assign queries to different models, tools, or pipeline depths based on intent, confidence, or validation outcomes — letting products occupy different triangle points per request without static one-model configs.",
      why: "Static tier maps help; cascades automate triangle optimization. PMs define routing rules, escalation triggers, and failure fallbacks — the product logic of the triangle.",
      paragraphs: [
        [
          s("Router inputs. "),
          x(
            "Intent classifier, embedding similarity to known clusters, user tier, explicit mode toggle, query length, tool-required detection.",
            "Router errors send hard queries to cheap model — worst failure mode. Monitor misroute rate.",
          ),
          s(" PM validates router on stratified eval — especially edge and high-risk intents."),
        ],
        [
          s("Cascade patterns. "),
          x(
            "Draft-refine: small writes, large edits. Verify: small answers, large checks JSON/faithfulness. Branch: code → code model, prose → chat model.",
            "Each hop adds latency — cap hops per session in PRD.",
          ),
          s(" Document max cascade depth — agent loops need cost circuit breakers."),
        ],
        [
          s("Fallback triangle position. "),
          x(
            "On timeout or rate limit: fall back to smaller model, cached response, or graceful degradation message.",
            "Fallback quality/latency/cost must be pre-defined — not random error handling.",
          ),
          s(" PM writes user-facing degradation copy and minimum quality floor."),
        ],
      ],
      examples: [
        {
          title: "Draft-refine email cascade",
          body: "Haiku drafts, Sonnet refines tone in 40% of cases where brand score low. Blended latency 1.8s vs 3.2s all-Sonnet; quality within 0.02 of all-Sonnet on rubric. PM approved cascade after pairwise eval.",
        },
        {
          title: "Router misclassification",
          body: "Technical troubleshooting routed to FAQ tier — wrong fixes. PM added keyword override + 'technical' button; misroute rate 12% → 2%. Quality leg recovered.",
        },
        {
          title: "Rate-limit fallback",
          body: "Peak traffic triggered fallback to smaller model — PM pre-approved degradation: shorter answers, banner 'running in fast mode.' Avoided hard outage; triangle sacrifice communicated.",
        },
      ],
    }),
    buildSection({
      number: "9.9",
      title: "SLAs and product commitments",
      subtitle: "What you promise customers vs internal targets",
      take: "External SLAs on availability, latency, and model behaviour must leave headroom below internal SLOs — and PMs align sales promises with triangle reality, because contracting flagship quality at budget latency with startup COGS creates impossible triangles.",
      why: "Enterprise deals embed SLA penalties. PMs translate triangle choices into contract language — model tiers, response time, data handling — before sales closes.",
      paragraphs: [
        [
          s("Internal SLO vs external SLA gap. "),
          x(
            "Internal p95 latency target 3s; SLA promises 5s — buffer for incidents. Quality SLAs harder — define measurable proxies (uptime, support response) not 'accuracy 99%.'",
            "AI behaviour SLAs often use best-effort language + human review for high-risk.",
          ),
          s(" Legal reviews SLA with PM triangle doc attached."),
        ],
        [
          s("Packaging SLAs by tier. "),
          x(
            "Enterprise: dedicated capacity, priority queue, pinned model version, faster latency commit. Standard: shared pool, best-effort latency.",
            "Triangle position becomes monetization — faster/better costs more.",
          ),
          s(" PM price list maps tier → model + latency + support — coherent story."),
        ],
        [
          s("Incident and credit policy. "),
          x(
            "Latency SLO breach credits; quality incidents may be goodwill not automatic credit — define in advance.",
            "Status page honesty when degrading triangle (fallback mode) preserves trust.",
          ),
          s(" Run SLA tabletop: model vendor outage → what's promised vs delivered?"),
        ],
      ],
      examples: [
        {
          title: "SLA headroom saved penalties",
          body: "Internal p95 2.5s; SLA 4s. One bad deploy hit 3.8s p95 — inside SLA, triggered internal rollback anyway. PM credit policy never invoked; customer trust intact.",
        },
        {
          title: "Oversold accuracy SLA",
          body: "Sales promised '99% accurate AI' without definition. PM renegotiated to 'faithfulness score on agreed eval set ≥ 0.90 quarterly' — measurable triangle quality leg. Avoided lawsuit-shaped ambiguity.",
        },
        {
          title: "Enterprise priority queue",
          body: "Pro SLA included priority inference queue — latency leg improved for paying users without upgrading model. COGS +12% on enterprise slice; margin still positive. Triangle via packaging not engineering miracle.",
        },
      ],
    }),
    buildSection({
      number: "9.10",
      title: "PM decision framework",
      subtitle: "A repeatable process for triangle choices",
      take: "PM triangle decisions follow a repeatable loop: name the user job and binding constraint, benchmark three architecture options on latency/cost/quality metrics, set explicit sacrifice, document in PRD, validate in canary, and re-review when scale or vendor frontier moves — turning tradeoffs from implicit to auditable.",
      why: "Without a framework, every model debate restarts from zero. PMs who institutionalize the loop ship faster with fewer COGS surprises and fewer 'why is it so slow' escalations.",
      paragraphs: [
        [
          s("Step 1 — Name binding constraint. "),
          x(
            "Ask: if we fail this, feature fails? Latency for real-time? Quality for compliance? Cost for freemium viability?",
            "One primary binding constraint per intent — others are guardrails.",
          ),
          s(" Write binding constraint first line of PRD non-functionals."),
        ],
        [
          s("Step 2 — Option matrix and eval. "),
          x(
            "Three options minimum: e.g., small only, cascade, large only. Score each on p95 latency, $/session, primary quality metric.",
            "Use golden set + load test — not vendor datasheet.",
          ),
          s(" PM presents matrix to stakeholders — decision recorded, not re-litigated."),
        ],
        [
          s("Step 3 — Ship, measure, revisit. "),
          x(
            "Canary with triangle metrics dashboard. Quarterly review: MAU scale changed COGS? New model tier available? User job shifted?",
            "Document sacrifice: 'We accept +1.2s latency for +0.06 faithfulness' — future teams understand why.",
          ),
          s(" Triangle decisions are living — not launch-day-only."),
        ],
      ],
      examples: [
        {
          title: "Triangle decision record",
          body: "PM logged ADR: binding=quality, chose Sonnet+RAG k=10, sacrificed $0.04/session vs Haiku, p95 3.4s vs 1.1s. Six months later new mid-tier model shifted frontier — re-opened ADR, migrated at lower cost same quality.",
        },
        {
          title: "Option matrix ended debate",
          body: "Exec wanted 'best AI.' PM matrix showed large-only 4x COGS, 2x latency, +5% quality vs cascade — within noise on user completion. Cascade approved in one meeting with documented sacrifice.",
        },
        {
          title: "Scale triggered revisit",
          body: "At 10K MAU triangle choice fine; at 200K MAU COGS unsustainable. PM quarterly review flagged; routing upgrade cut COGS 38% with canary quality gates. Framework prevented panic fire drill.",
        },
      ],
    }),
  ],
  quiz: [
    {
      q: "The latency/cost/quality triangle implies that:",
      options: [
        "You can always maximize all three simultaneously with enough engineering",
        "Improving one leg often pressures the others — PMs must choose binding constraints per use case",
        "Cost is irrelevant for AI products because APIs are cheap",
        "Quality is objectively identical across all model tiers",
      ],
      correct: 1,
      correctFeedback:
        "Right. Tradeoffs are coupled — explicit choices beat accidental defaults.",
      wrongFeedback:
        "The triangle is about coupled tradeoffs and binding constraints. Re-read section 9.1.",
    },
    {
      q: "When measuring latency for an AI chat feature, PMs should prioritize:",
      options: [
        "Model API benchmark in isolation from the vendor datasheet",
        "End-to-end p95 including retrieval, guardrails, and time-to-first-token",
        "Average latency from a single developer laptop test",
        "Only total tokens generated regardless of wait time",
      ],
      correct: 1,
      correctFeedback:
        "Correct. User-perceived latency is the full pipeline — p95 is the trust metric.",
      wrongFeedback:
        "Measure full-path p95, not isolated model benchmarks. Re-read section 9.2.",
    },
    {
      q: "Model tiering (small/mid/large) primarily optimizes the triangle by:",
      options: [
        "Using the largest model for every query to simplify code",
        "Routing intents to appropriate tiers so simple queries don't pay flagship latency and COGS",
        "Eliminating the need for evals",
        "Guaranteeing identical quality across all traffic",
      ],
      correct: 1,
      correctFeedback:
        "Exactly. Tiering and routing match triangle position to intent — the standard production pattern.",
      wrongFeedback:
        "Tiering routes traffic by job — not one model for everything. Re-read section 9.5.",
    },
    {
      q: "Semantic caching requires PM policy because:",
      options: [
        "Caches never affect quality or freshness",
        "Stale cached answers can violate quality on time-sensitive or account-specific intents",
        "Caching only works for image models",
        "Caches automatically invalidate on every vendor model update",
      ],
      correct: 1,
      correctFeedback:
        "Right. Cache TTL and non-cacheable intents protect the quality leg.",
      wrongFeedback:
        "Caching trades cost/latency for freshness risk — PM policy defines what's safe. Re-read section 9.6.",
    },
    {
      kind: "categorize",
      q: "Match each use case to its typical binding triangle constraint.",
      categories: ["Latency", "Cost", "Quality"],
      items: [
        { text: "Inline autocomplete in a code editor.", category: 0 },
        { text: "Freemium chat at 100K MAU with zero ARPU.", category: 1 },
        { text: "Contract indemnity clause extraction for law firms.", category: 2 },
        { text: "Real-time fraud classification at payment checkout.", category: 0 },
        { text: "Overnight batch summarisation of support tickets.", category: 1 },
        { text: "Clinical trial protocol Q&A with audit requirements.", category: 2 },
      ],
      correctFeedback:
        "Right. Real-time UI binds latency; scale free products bind cost; high-stakes domains bind quality.",
      wrongFeedback:
        "Binding constraint follows user job and business model. Re-read sections 9.1 and 9.10.",
    },
    {
      kind: "order",
      q: "Order the PM triangle decision framework steps from first to last.",
      prompt: "Drag to arrange first (top) to last (bottom).",
      items: [
        "Name the binding constraint for the user job",
        "Benchmark three architecture options on latency, cost, and quality",
        "Document explicit sacrifice in PRD and ship via canary",
        "Quarterly revisit as scale or vendor frontier shifts",
      ],
      correctFeedback:
        "Exactly. Constraint → options → documented ship → periodic revisit — the repeatable loop.",
      wrongFeedback:
        "Framework: binding constraint, option matrix, ship with sacrifice documented, revisit quarterly. Re-read section 9.10.",
    },
  ],
});
