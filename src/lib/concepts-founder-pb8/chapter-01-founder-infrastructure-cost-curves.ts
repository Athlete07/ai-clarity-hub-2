import { buildChapter, buildSection, s, x, sectionWithDiagram } from "../concepts-pb4-helpers";

export const chapter01FounderInfrastructureCostCurves = buildChapter({
  slug: "founder-infrastructure-cost-curves",
  number: 1,
  shortTitle: "Infrastructure Cost Curves",
  title: "Infrastructure Cost Curves at Scale",
  readingMinutes: 28,
  summary:
    "The unit economics that looked fine at 1,000 users look very different at 100,000. How AI infrastructure costs scale non-linearly, the levers that bend the curve, and the spreadsheet your board expects before you celebrate product-market fit.",
  keyTakeaway:
    "Inference costs dominate AI margins and scale faster than revenue unless you architect for it. Model routing, caching, and prompt compression are not optimisation projects — they are survival infrastructure. Build the cost model before the bill surprises your CFO.",
  pmCallout:
    "As a founder: your pilot cost model is wrong at production scale. Model the non-linear inference curve now — cost per conversation, cost per successful task, and margin at 10x and 100x — before growth turns a win into a cash burn crisis.",
  sections: [
    buildSection({
      number: "1.1",
      title: "How AI infrastructure costs scale — the non-linear reality",
      subtitle: "Why your cost model from the pilot is almost certainly wrong at production scale",
      take: "AI infrastructure costs do not scale linearly with users. Inference, retrieval, embedding, and human review compound — and free-tier API pricing disappears exactly when usage spikes. Founders who model linear cost-per-user get blindsided at the inflection.",
      why: "Your fundraise narrative and pricing strategy assume a cost structure. If that structure is wrong by 3x at scale, you either raise on false premises or cut growth to survive. The cost model is a strategic document, not an engineering footnote.",
      paragraphs: [
        [
          s("Pilot economics lie. "),
          x(
            "At 500 daily active users, API bills feel manageable, caching is optional, and model selection is 'whatever works best.' At 50,000 DAU, every token, every retrieval call, and every uncached embedding multiplies into a line item that can exceed payroll.",
            "The non-linearity comes from compounding: more users → more sessions → longer context windows → more retrieval chunks → higher failure rates → more human review.",
          ),
          s(" Founders who extrapolate pilot burn rate to Series A scale routinely miss by an order of magnitude."),
        ],
        [
          s("The cost stack has more layers than founders track. "),
          x(
            "Inference is visible. Less visible: embedding regeneration, vector database storage and query costs, evaluation pipelines, fine-tuning runs, labelling for quality drift, and on-call engineering when latency spikes force emergency scaling.",
            "Each layer has its own scaling curve. Ignoring retrieval and embedding costs is how companies discover their 'AI margin' was calculated on inference alone.",
          ),
          s(" Map every dollar from user action to infrastructure response — not just the LLM API line."),
        ],
        [
          s("Growth and cost inflect together. "),
          x(
            "Enterprise customers run longer sessions. Power users consume 10x the tokens of median users. Viral features spike concurrent load, forcing reserved capacity or rate-limit pain.",
            "Revenue per user and cost per user diverge unless you designed for heavy-tail usage from day one.",
          ),
          s(" Segment your cost model by user cohort, not company average — the average hides the users who bankrupt you."),
        ],
      ],
      examples: [
        {
          title: "Jasper's margin reset — linear assumptions at scale",
          body: "Jasper scaled rapidly on generative copy with API-dependent economics. As usage grew, inference costs compressed margins faster than pricing adjustments. The lesson for founders: revenue growth without cost architecture is a trap. Model the curve before you chase the hockey stick.",
        },
        {
          title: "Support AI startup — pilot vs production bill",
          body: "A customer-support AI ran a pilot at $800/month API cost for 200 agents. At full rollout to 8,000 agents with longer ticket context, the projected bill hit $140K/month — 175x, not 40x. The founder renegotiated pricing and rebuilt retrieval before launch. Early modelling saved the unit economics story.",
        },
        {
          title: "Board surprise — 'we thought it scaled with seats'",
          body: "A Series A company priced per seat but consumed tokens per conversation. Enterprise customers averaged 40 conversations per seat daily. Gross margin at scale was negative on the largest accounts. The board forced a pricing restructure six months post-raise. Cost modelling by account tier would have caught this at seed.",
        },
      ],
    }),
    buildSection({
      number: "1.2",
      title: "The inference cost explosion",
      subtitle: "What happens to your API bill when usage grows 100x and your pricing hasn't changed",
      take: "Inference is usually 60–80% of AI infrastructure spend at scale. When usage grows 100x on fixed per-seat pricing, your API bill can grow faster than revenue — turning a profitable customer into a loss leader.",
      why: "Investors and boards will ask what happens to margins at 10x usage. If you cannot answer with a model that includes token volume, context length, and model tier, you are not ready to scale.",
      paragraphs: [
        [
          s("Token volume is the hidden multiplier. "),
          x(
            "A feature that worked in demos with 500-token prompts becomes 8,000-token prompts in production when you add conversation history, retrieved documents, and system instructions.",
            "10x users with 8x longer prompts is 80x token consumption — not 10x. Founders who price per seat without metering usage inherit this risk.",
          ),
          s(" Audit production prompt sizes monthly. They grow silently as features accumulate."),
        ],
        [
          s("Model tier defaults are expensive defaults. "),
          x(
            "Teams ship on the best available model because it makes demos reliable. At scale, running GPT-4-class models on every request when 70% of tasks are classification or extraction burns margin for zero user-visible benefit.",
            "The inference explosion is often a model-selection problem disguised as a growth problem.",
          ),
          s(" Instrument which requests actually need frontier capability — you will find most do not."),
        ],
        [
          s("Free tiers and startup credits expire at the worst moment. "),
          x(
            "Azure, AWS, and OpenAI startup credits smooth early burn. When credits expire at the same time usage spikes from product-market fit, founders face a cliff: renegotiate, rearchitect, or raise emergency capital.",
            "Plan the post-credit cost structure at 50% of credit consumption, not 100%.",
          ),
          s(" Treat credits as timing subsidy, not permanent COGS."),
        ],
      ],
      examples: [
        {
          title: "Notion AI — usage-aware pricing design",
          body: "Notion AI launched with usage limits and tiered plans rather than unlimited inference on flat pricing. The product team understood that unconstrained generative features on per-seat pricing destroy margins. Founders building AI into seat-based products should study how usage caps protect economics.",
        },
        {
          title: "Legal doc AI — context window cost shock",
          body: "A contract-review tool appended full document text to every follow-up question. Average session tokens went from 2K to 45K over three months of feature additions. Monthly API cost rose 22x while MAU rose 4x. Prompt architecture review cut tokens 60% without quality loss.",
        },
        {
          title: "Credit cliff at Series A",
          body: "A seed-stage AI writing tool burned through $180K in OpenAI credits over 14 months. At credit expiry, run-rate API cost was $32K/month against $41K MRR — 78% COGS on inference alone. The company spent two months on model routing before continuing growth spend. Founders should model month-one post-credit economics.",
        },
      ],
    }),
    sectionWithDiagram({
      number: "1.3",
      title: "The three cost levers at scale",
      subtitle: "Model selection, prompt compression, and caching — the toolkit before you renegotiate contracts",
      take: "Before you call your API vendor or raise prices, exhaust three levers: route requests to the cheapest model that meets quality bar, compress prompts without losing task fidelity, and cache responses where accuracy allows. Together they routinely cut inference spend 40–70%.",
      why: "Vendor negotiation and self-hosting are high-latency, high-risk moves. Levers you control today — routing, compression, caching — buy runway and improve margins without architectural rewrites.",
      paragraphs: [
        [
          s("Model selection is the highest-ROI lever. "),
          x(
            "A tiered approach — small model for intent classification, medium for extraction, large only for synthesis — cuts average cost per request dramatically.",
            "Quality gates matter: route with confidence thresholds and fall back to larger models only on low-confidence outputs.",
          ),
          s(" Most founders over-index on the best model because it is the easiest to ship. Routing is engineering work that pays like finance work."),
        ],
        [
          s("Prompt compression is undervalued. "),
          x(
            "Summarise conversation history instead of appending it. Retrieve three chunks instead of ten. Strip redundant system instructions. Use structured outputs to reduce parse-and-retry loops.",
            "Every thousand tokens removed from a prompt multiplied by millions of requests is real money.",
          ),
          s(" Assign someone to own token budget per feature — treat tokens like storage or bandwidth."),
        ],
        [
          s("Caching turns variable cost into fixed savings. "),
          x(
            "Semantic caching for similar queries, exact caching for deterministic pipelines, and precomputation for common requests eliminate redundant inference.",
            "The tradeoff is staleness and personalization — cache policy is a product decision, not just infrastructure.",
          ),
          s(" Start with high-repeat, low-personalization queries. FAQ-style AI features are cache goldmines."),
        ],
      ],
      examples: [
        {
          title: "Intercom Fin — routing and retrieval discipline",
          body: "Intercom's support AI combines retrieval, routing, and escalation to control inference costs at scale. Not every customer query runs the most expensive path. Founders building customer-facing AI should design escalation and routing as cost architecture, not afterthought.",
        },
        {
          title: "Prompt diet — 58% token reduction",
          body: "A recruiting AI startup ran a two-week prompt audit: compressed system prompts, summarised thread history after turn four, and reduced retrieval from eight to three chunks. Override rate unchanged. Monthly inference cost dropped from $28K to $12K. No vendor negotiation required.",
        },
        {
          title: "Semantic cache on documentation AI",
          body: "A developer-docs assistant cached answers to semantically similar questions with 24-hour TTL. Cache hit rate reached 34% at scale, cutting effective cost per query by nearly a third. Accuracy tradeoffs were documented and monitored. Caching was a product feature with a cost SLA.",
        },
      ],
    }, {
      kind: "diagram",
      id: "founder-scaling-inflection",
      type: "flow",
      title: "Infrastructure Cost Inflection Points",
      caption:
        "API defaults work at 1K users; routing and caching become mandatory at 100K. Model your cost curve at each order of magnitude.",
    }),
    buildSection({
      number: "1.4",
      title: "Model routing at scale",
      subtitle: "Sending simple queries to cheaper models and complex queries to powerful ones — the architecture",
      take: "Model routing is the standard architecture for AI products at scale: classify intent, estimate complexity, route to the appropriate model tier, and escalate on low confidence. Done well, it preserves user-perceived quality while cutting average inference cost 50% or more.",
      why: "Routing is how you scale without choosing between growth and margin. Investors increasingly expect to see routing architecture in technical diligence — it signals operational maturity.",
      paragraphs: [
        [
          s("Build a routing layer, not a single model call. "),
          x(
            "The router can be a small classifier, heuristic rules, or a cascade: cheap model first, expensive model on failure. The pattern is the same — never default everything to the frontier.",
            "Routing logic should be versioned, measurable, and owned — not buried in application code.",
          ),
          s(" Expose routing decisions in your observability stack. You need to know what percentage of traffic hits each tier."),
        ],
        [
          s("Quality thresholds define the routing policy. "),
          x(
            "Set confidence cutoffs per task type. A summarisation task might accept 0.85 confidence from a small model; a compliance extraction might require 0.95 from a large model or human review.",
            "Routing without quality measurement is just cost cutting with extra steps.",
          ),
          s(" Tie routing rules to production quality metrics — override rate, task completion, user retry rate."),
        ],
        [
          s("Routing evolves with your model portfolio. "),
          x(
            "As smaller models improve, promote them to handle tasks previously routed upstream. Quarterly routing reviews should ask: can this tier move down?",
            "Static routing decays — what required GPT-4 in 2023 may run on a fine-tuned 8B model in 2025.",
          ),
          s(" Treat your routing table as a living document, not a one-time architecture decision."),
        ],
      ],
      examples: [
        {
          title: "Cursor — tiered model access by task",
          body: "Cursor routes autocomplete, chat, and agentic tasks across model tiers based on complexity and user plan. Users get quality where it matters; the company manages cost where it does not. Founders should map their user journeys to model tiers explicitly.",
        },
        {
          title: "Cascade routing — 47% cost reduction",
          body: "An email-assistant startup implemented a cascade: fine-tuned 7B model first, GPT-4o only on low-confidence drafts. Escalation rate stabilised at 18%. Average cost per email dropped 47% with no change in user acceptance rate. Routing was shipped in three weeks.",
        },
        {
          title: "Routing regression — the monitoring gap",
          body: "A fintech AI changed routing thresholds to cut costs. Override rate spiked 3x on mortgage-calculation queries — a low-volume, high-stakes segment. Without segment-level monitoring, the regression ran for two weeks. Routing changes need canary deployment and segment dashboards.",
        },
      ],
    }),
    sectionWithDiagram({
      number: "1.5",
      title: "Caching strategies for AI products",
      subtitle: "What to cache, how long to cache it, and the accuracy tradeoffs",
      take: "Caching in AI products is not like caching static web pages. You choose what to cache (exact matches, semantic neighbours, precomputed embeddings), how long to keep it (TTL vs invalidation triggers), and what accuracy you sacrifice for cost savings.",
      why: "At scale, repeat queries are inevitable — support FAQs, common code patterns, standard document types. Caching captures that repetition without re-paying inference on every request.",
      paragraphs: [
        [
          s("Match cache type to query pattern. "),
          x(
            "Exact caching works for deterministic inputs. Semantic caching works for paraphrased questions with similar intent. Embedding caches work for retrieval-heavy pipelines where document corpora change slowly.",
            "Wrong cache type either misses savings or serves stale wrong answers.",
          ),
          s(" Profile your query distribution before choosing cache architecture — high-repeat queries justify semantic cache investment."),
        ],
        [
          s("TTL and invalidation are product decisions. "),
          x(
            "A cached legal template answer might be valid for days. A cached stock price answer is wrong in minutes. TTL policy must reflect data freshness requirements and user expectations.",
            "Document cache invalidation triggers: corpus update, model version change, user-specific context shift.",
          ),
          s(" Users who receive cached wrong answers blame the product, not the cache policy."),
        ],
        [
          s("Measure cache hit rate and quality impact together. "),
          x(
            "Track: hit rate, cost saved, override rate on cached vs uncached responses, and user retry rate. A 40% hit rate with 2x retry rate on cached answers is a net loss.",
            "Cache dashboards belong next to quality dashboards — not in infrastructure-only monitoring.",
          ),
          s(" Set a quality floor: if cached responses underperform, narrow cache scope before expanding it."),
        ],
      ],
      examples: [
        {
          title: "GitHub Copilot — implicit caching patterns",
          body: "Code completion products benefit from pattern repetition across developers and repos. Similar contexts produce similar suggestions. While Copilot's internals are proprietary, the lesson holds: high-repeat domains (code, support macros, legal clauses) are cache-friendly. Founders should identify their repeat-query profile early.",
        },
        {
          title: "TTL mistake — stale policy advice",
          body: "An HR-policy chatbot cached answers for 30 days. A policy update mid-month left 12% of cached responses outdated. Employee trust dropped before engineering noticed. TTL was shortened to 24 hours with corpus-change invalidation. Cache policy needed legal-stakeholder input.",
        },
        {
          title: "Embedding cache on RAG pipeline",
          body: "A knowledge-base AI cached document embeddings and only recomputed on document change. Ingestion cost dropped 80% for a corpus with frequent reads and infrequent writes. Query latency improved 200ms. The founder presented embedding cache strategy in the Series A deck as margin infrastructure.",
        },
      ],
    }, {
      kind: "diagram",
      id: "ch8-cost-latency-frontier",
      type: "comparison",
      title: "Cost-Latency-Quality Trade-offs at Scale",
      caption:
        "Different request types belong at different points on the frontier. Routing is a margin strategy, not just an engineering optimisation.",
    }),
    buildSection({
      number: "1.6",
      title: "Building your AI cost model — the spreadsheet",
      subtitle: "The unit economics model to build and maintain as you scale",
      take: "Every scaling AI founder needs a living cost model: cost per query, cost per successful task, cost per user per month, and gross margin by segment — with scenarios at 2x, 5x, and 10x usage. Update it monthly. Present it to the board quarterly.",
      why: "The spreadsheet is how you make infrastructure decisions legible to finance, investors, and your own team. Without it, engineering optimises latency while finance panics about burn.",
      paragraphs: [
        [
          s("Start with cost per successful task, not cost per API call. "),
          x(
            "A successful task might require two model calls, one retrieval, and a human review 8% of the time. Roll it up. That number is what you compare to revenue per task.",
            "Cost per call flatters you. Cost per successful outcome is honest.",
          ),
          s(" Define 'successful' the same way your product team defines it — completed, accepted, not overridden."),
        ],
        [
          s("Model scenarios, not single points. "),
          x(
            "Build rows for: current scale, 2x users, 5x users, 10x users. Columns for: current architecture, with routing, with caching, with negotiated pricing, with self-host.",
            "The scenario matrix shows which lever matters at which scale — and when to pull each trigger.",
          ),
          s(" Investors respect founders who show the curve, not founders who quote today's margin."),
        ],
        [
          s("Reconcile model to actuals monthly. "),
          x(
            "Compare predicted API spend to invoice. Variance over 10% means your model is wrong — update assumptions on token volume, cache hit rate, or routing distribution.",
            "A cost model that never reconciles to actuals is fiction.",
          ),
          s(" Assign finance or ops ownership — engineering builds it, but someone must keep it current."),
        ],
      ],
      examples: [
        {
          title: "Series A cost model — board template",
          body: "A B2B AI startup presented a quarterly cost model: inference, retrieval, labelling, and human review as separate COGS lines, with margin by customer segment. The board used it to approve pricing changes for enterprise tier. The founder said the spreadsheet was as important as the product roadmap.",
        },
        {
          title: "Scenario matrix caught pricing gap",
          body: "A founder's 5x scenario showed negative gross margin on self-serve tier even with routing and caching. The model forced a pricing change before launch of a viral feature. Without the scenario row, they would have acquired users profitably on paper and lost money in practice.",
        },
        {
          title: "Monthly reconciliation — 23% model drift",
          body: "An AI sales-enablement tool reconciled projected vs actual API spend monthly. Month four showed 23% overshoot — power users had 3x expected session length. The model updated cohort assumptions and triggered a usage-based upsell. Reconciliation is early warning, not accounting hygiene.",
        },
      ],
    }),
    buildSection({
      number: "1.7",
      title: "Founder decision lens: the cost per user conversation your CFO needs",
      subtitle: "How to translate AI infrastructure costs into the financial metrics your board understands",
      take: "Your CFO and board do not think in tokens. They think in cost per conversation, gross margin by tier, and burn multiple. Translate infrastructure costs into those metrics — and set thresholds that trigger architectural or pricing decisions before margins go negative.",
      why: "The founder's job at scale is to connect engineering levers to financial outcomes. Cost per conversation is the bridge metric that makes AI infrastructure a board-level conversation, not an engineering expense line.",
      paragraphs: [
        [
          s("Define the conversation unit for your product. "),
          x(
            "For a support bot, it is a resolved ticket. For a writing assistant, it is an accepted draft. For a coding tool, it is a accepted suggestion session. Pick the unit your customer pays for or measures success by.",
            "Inconsistent definitions across teams make board conversations impossible.",
          ),
          s(" Document the unit and stick to it across product, finance, and engineering dashboards."),
        ],
        [
          s("Set decision thresholds before you hit them. "),
          x(
            "Example thresholds: cost per conversation above $0.40 triggers routing review; above $0.60 triggers pricing change; above $0.80 triggers growth pause until architecture fixes land.",
            "Thresholds turn reactive panic into proactive governance.",
          ),
          s(" Review thresholds quarterly as model prices change — yesterday's ceiling is today's baseline."),
        ],
        [
          s("Present cost trends, not cost snapshots. "),
          x(
            "Boards want to see: cost per conversation trending down as routing and caching mature, or honestly trending up with a plan. A flat snapshot hides whether you are winning or losing the efficiency race.",
            "Pair cost trend with quality trend — override rate, NPS, task completion — so the board sees efficiency without quality collapse.",
          ),
          s(" The founder narrative: 'We are getting cheaper per outcome while quality improves.' Prove it with two lines on one chart."),
        ],
      ],
      examples: [
        {
          title: "CFO dashboard — one metric alignment",
          body: "A founder and CFO agreed on 'cost per resolved conversation' as the north-star infrastructure metric. Engineering reported token costs; finance translated to the unit. When the metric rose 15% in one quarter, the board approved a model-routing sprint instead of blaming 'AI is expensive.' Shared vocabulary prevented a crisis.",
        },
        {
          title: "Threshold-triggered pricing change",
          body: "A customer-success AI set a internal threshold: gross margin below 55% on any segment triggers pricing review within 30 days. Enterprise segment hit 51% at scale. The company introduced usage-based overage pricing within three weeks. Thresholds encoded in policy beat ad-hoc firefighting.",
        },
        {
          title: "Board deck — cost and quality dual chart",
          body: "A Series B AI company showed six quarters of cost-per-task declining 38% while override rate declined 22%. The dual trend justified continued growth investment. Investors cited 'operational leverage on inference' in the memo. Founders who only show revenue miss the efficiency story boards want.",
        },
      ],
    }),
  ],
  quiz: [
    {
      q: "A founder extrapolates pilot API costs linearly to 100x users. What is the most likely outcome?",
      options: [
        "Costs will be lower than projected due to economies of scale.",
        "Costs will grow faster than projected due to token compounding, longer contexts, and heavy-tail users.",
        "Costs stay flat because API prices always decrease.",
        "Revenue always outpaces inference costs automatically.",
      ],
      correct: 1,
      correctFeedback:
        "Right. AI infrastructure costs scale non-linearly. Token volume, context length, and power-user concentration compound beyond simple user multiples.",
      wrongFeedback:
        "Pilot economics lie. Re-read sections 1.1 and 1.2 on non-linear scaling and the inference explosion.",
    },
    {
      q: "Which three levers should founders exhaust before renegotiating API contracts or raising prices?",
      options: [
        "Hiring more salespeople, rebranding, and opening a new office.",
        "Model selection/routing, prompt compression, and caching.",
        "Switching cloud regions, changing logos, and adding features.",
        "Reducing customer support, cutting R&D, and delaying fundraising.",
      ],
      correct: 1,
      correctFeedback:
        "Exactly. Routing, compression, and caching routinely cut inference spend 40–70% without vendor negotiation.",
      wrongFeedback:
        "The three cost levers are model selection, prompt compression, and caching. Re-read section 1.3.",
    },
    {
      kind: "order",
      q: "Order the model routing cascade from cheapest first to most expensive last.",
      prompt: "Drag to arrange lowest-cost path (top) to highest-cost escalation (bottom).",
      items: [
        "Fine-tuned small model or classifier handles the request.",
        "Medium-tier model on low-confidence output from first tier.",
        "Frontier model or human review for high-stakes low-confidence cases.",
      ],
      correctFeedback:
        "Right. Cascade routing preserves quality while minimising average inference cost. Re-read section 1.4.",
      wrongFeedback:
        "Route cheap first, escalate on confidence. Re-read section 1.4 on model routing at scale.",
    },
    {
      kind: "categorize",
      q: "Sort each caching decision into the correct category.",
      categories: ["Good cache candidate", "Risky cache candidate"],
      items: [
        { text: "FAQ answer with stable policy text and 24-hour TTL.", category: 0 },
        { text: "Real-time stock price recommendation with 30-day TTL.", category: 1 },
        { text: "Common code-completion pattern across similar repos.", category: 0 },
        { text: "Personalised medical advice using patient-specific context.", category: 1 },
        { text: "Document embedding cache with invalidation on corpus update.", category: 0 },
        { text: "Cached legal advice without invalidation on regulation change.", category: 1 },
      ],
      correctFeedback:
        "Right. Cache high-repeat, slow-changing, low-personalization queries. Avoid caching freshness-critical or personalised high-stakes outputs.",
      wrongFeedback:
        "Re-read section 1.5. TTL, invalidation, and accuracy tradeoffs determine cache fitness.",
    },
    {
      q: "What is the most honest unit for comparing AI infrastructure cost to revenue?",
      options: [
        "Cost per API call regardless of outcome.",
        "Cost per successful task or conversation as the product defines success.",
        "Total monthly API bill divided by employee count.",
        "Number of tokens consumed per quarter.",
      ],
      correct: 1,
      correctFeedback:
        "Right. Cost per successful outcome connects infrastructure spend to business value — what boards and CFOs need.",
      wrongFeedback:
        "Cost per call flatters you. Model cost per successful task. Re-read sections 1.6 and 1.7.",
    },
    {
      kind: "order",
      q: "Order the founder cost governance workflow.",
      prompt: "Drag to arrange first step (top) to ongoing practice (bottom).",
      items: [
        "Define cost-per-conversation unit aligned across teams.",
        "Build scenario spreadsheet at 2x, 5x, 10x with lever modelling.",
        "Set decision thresholds that trigger routing or pricing reviews.",
        "Reconcile model to actuals monthly and present trends to board.",
      ],
      correctFeedback:
        "Exactly. Define the unit, model scenarios, set thresholds, then reconcile and report. Re-read section 1.7.",
      wrongFeedback:
        "Start with unit definition, then model, thresholds, and monthly reconciliation. Re-read sections 1.6 and 1.7.",
    },
  ],
});
