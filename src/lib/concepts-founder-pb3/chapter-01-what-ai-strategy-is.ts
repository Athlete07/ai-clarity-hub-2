import { buildChapter, buildSection, s, x, sectionWithDiagram } from "../concepts-pb4-helpers";

export const chapter01WhatAiStrategyIs = buildChapter({
  slug: "founder-what-ai-strategy-is",
  number: 1,
  shortTitle: "What AI Strategy Actually Is",
  title: "What AI Strategy Actually Is",
  readingMinutes: 20,
  summary:
    "Most founders have an AI feature list. Almost none have an AI strategy. This chapter separates the two — and gives you the one-page template investors and boards actually want to see.",
  keyTakeaway:
    "An AI strategy is a theory of how you win: wedge, moat, feedback loop, expansion path. A feature list is a backlog. Founders who confuse them raise on demos and lose on diligence.",
  pmCallout:
    "As a founder: your AI strategy is not what you will ship next quarter — it is why you will still matter when every competitor has the same API access. Write it before you write the roadmap.",
  sections: [
    sectionWithDiagram({
      number: "1.1",
      title: "The difference between an AI feature list and an AI strategy",
      subtitle: "One is a product backlog. The other is a theory of how you win.",
      take: "A feature list answers 'what will we build?' An AI strategy answers 'why will we win, and what must be true for that to happen?' Founders who present roadmaps without strategic logic get term sheets that assume feature parity with incumbents.",
      why: "Investors pattern-match quickly: feature lists signal execution risk without differentiation. Strategy documents signal you understand the game — which changes valuation conversations and hiring priorities.",
      paragraphs: [
        [
          s("Every seed deck in 2026 has an AI slide. "),
          x(
            "Feature lists enumerate capabilities: summarisation, agents, copilots, embeddings. They describe outputs, not advantage.",
            "Strategy describes causality: this wedge creates usage, usage creates data, data improves the model, improvement deepens switching costs.",
          ),
          s(" The difference is whether AI is decoration or the engine of a compounding business."),
        ],
        [
          s("Feature lists are comfortable because they feel like progress. "),
          x(
            "Shipping a chatbot is measurable. Defining a wedge that only you can own requires saying no to horizontal plays and naming uncomfortable dependencies.",
            "Founders avoid strategy because it forces explicit bets: vertical depth vs platform breadth, API rent vs proprietary signal, speed vs defensibility.",
          ),
          s(" Roadmaps without bets are plans to be outspent."),
        ],
        [
          s("The board-room test is simple. "),
          x(
            "Ask: if we paused feature development for six months, would our strategic position improve or erode?",
            "If the answer is 'erode' — you have a feature factory. If 'improve' — you have a data or distribution asset compounding underneath.",
          ),
          s(" Strategy lives in assets that appreciate; feature lists live in sprint velocity."),
        ],
      ],
      examples: [
        {
          title: "Notion AI — feature list on a strong core",
          body: "Notion AI added writing assist to an existing docs product. Valuable, but strategically it is a feature layer on distribution Notion already owned. Founders should not mistake 'we added AI' for 'we have an AI strategy' unless the model changes unit economics or moat depth.",
        },
        {
          title: "Harvey — strategy before feature breadth",
          body: "Harvey's strategy was vertical legal synthesis with workflow lock-in and proprietary usage signal — not 'another chatbot.' The feature list followed the wedge. Diligence teams rewarded the sequencing: narrow win first, platform language second.",
        },
        {
          title: "The seed deck that failed on 'AI roadmap'",
          body: "A founder presented twelve AI features across four quarters with no wedge, moat, or loop narrative. Investors passed quietly — not because the tech was bad, but because any well-funded competitor could replicate the backlog in six months. Strategy absence was the kill shot.",
        },
      ],
    }, {
      kind: "diagram",
      id: "founder-data-moat-layers",
      type: "nested",
      title: "Strategic Moat Layers",
      caption:
        "Distribution → proprietary data → model advantage. Strategy lives in the data loop.",
    }),
    buildSection({
      number: "1.2",
      title: "What a real AI strategy contains",
      subtitle: "Wedge, moat, feedback loop, expansion path — the four components",
      take: "Every credible AI strategy names four things: the wedge (where you win first), the moat (what compounds), the feedback loop (how usage improves the product), and the expansion path (how wedge becomes platform). Missing any one is a hole diligence will find.",
      why: "This framework is how sophisticated investors mentally score AI companies. Founders who pre-answer all four earn faster conviction; founders who skip one get stuck in 'interesting but undifferentiated.'",
      paragraphs: [
        [
          s("The wedge is your entry point — one workflow where AI creates a step-change, not an increment. "),
          x(
            "Wedge criteria: high frequency, high pain, data-generative, and eventually defensible.",
            "Without wedge clarity, you build horizontal tools that incumbents bundle for free.",
          ),
          s(" Strategy starts narrow; platform language comes after proof."),
        ],
        [
          s("The moat is what survives API commoditisation. "),
          x(
            "Real moats in AI: proprietary data, distribution, switching costs, workflow depth, brand trust in high-stakes domains.",
            "Capabilities accessed via API are not moats — they are rent lines on someone else's R&D.",
          ),
          s(" Your strategy must name which moat you are building, not which model you call."),
        ],
        [
          s("The feedback loop and expansion path connect today's product to tomorrow's valuation. "),
          x(
            "Loop: user action → labelled signal → model improvement → better product → more usage.",
            "Expansion: wedge workflow → adjacent workflows → platform primitives → ecosystem.",
          ),
          s(" Founders who cannot draw both arrows on one page do not yet have a strategy."),
        ],
      ],
      examples: [
        {
          title: "Duolingo — four components visible",
          body: "Wedge: daily language practice with instant feedback. Moat: billions of learner interaction labels. Loop: mistakes and completions retrain Birdbrain and speech models. Expansion: from drills to conversation to certification. Founders should be able to narrate this chain for their own company.",
        },
        {
          title: "Glean — enterprise search wedge to platform",
          body: "Wedge: find internal documents fast. Moat: enterprise permissions graph + usage ranking signal. Loop: click and dwell data improves relevance per customer. Expansion: from search to agents to workflow automation. Strategy was sequenced, not declared day one.",
        },
        {
          title: "Missing moat — the Series A stall",
          body: "A startup had a crisp wedge and shipped fast, but strategy docs never named proprietary data or switching costs. At Series A, every investor asked the same question: 'What happens when Microsoft ships this?' Without moat articulation, the round dragged until the founder reframed around vertical workflow depth.",
        },
      ],
    }),
    sectionWithDiagram({
      number: "1.3",
      title: "Why most startup AI strategies are just product roadmaps",
      subtitle: "The strategic questions most founders avoid because they're uncomfortable to answer",
      take: "Roadmaps feel safe because they are controllable. Strategy feels dangerous because it commits you to bets that might be wrong. Most 'AI strategies' are roadmaps with a ChatGPT logo — they avoid dependency risk, commoditisation timing, and the incumbent response.",
      why: "Avoiding uncomfortable questions does not remove them — it defers them to diligence, where they arrive without time to fix. Founders who answer early choose markets; founders who defer get chosen by markets.",
      paragraphs: [
        [
          s("Founders default to roadmaps because VCs reward shipping. "),
          x(
            "Demo momentum is tangible in weekly standups. Strategic moat building is slow, often invisible for quarters.",
            "The trap: you raise on velocity, then discover velocity without moat is a treadmill.",
          ),
          s(" Roadmaps are necessary; they are not sufficient for AI businesses."),
        ],
        [
          s("Three questions roadmaps skip — and killers ask anyway. "),
          x(
            "What if the foundation model provider ships your feature natively? What if your data advantage never materialises? What if the incumbent bundles your capability at zero marginal cost?",
            "These are the killer questions roadmaps skip — strategy documents must answer them before you commit engineering.",
          ),
          s(" Strategy documents answer these before you have fifty engineers committed to the wrong hill."),
        ],
        [
          s("Honest strategy requires naming what you will not do. "),
          x(
            "Saying no to horizontal plays, no to training foundation models, no to markets without data signal — that is strategy.",
            "Roadmaps that only say yes read as optimism, not judgment.",
          ),
          s(" Investors fund judgment under uncertainty, not enthusiasm about features."),
        ],
      ],
      examples: [
        {
          title: "Jasper's roadmap vs strategy tension",
          body: "Jasper scaled fast on marketing copy generation — roadmap excellence. When foundation models improved native writing and incumbents bundled similar tools, the strategic questions around moat and workflow depth became urgent. Founders should stress-test whether their roadmap assumes a durable wedge.",
        },
        {
          title: "Vertical legal AI — saying no early",
          body: "A legal AI startup explicitly rejected horizontal 'AI for everyone' positioning in favour of matter-centric workflows with audit trails. The roadmap was smaller but the strategy was legible. Saying no to TAM slides won serious enterprise conversations.",
        },
        {
          title: "Board review exposing roadmap-only planning",
          body: "A board member asked for the feedback loop diagram; the CEO presented a Gantt chart. The gap was not execution — it was strategic architecture. The company paused two features to instrument usage signal. Painful quarter, stronger Series A narrative.",
        },
      ],
    }, {
      kind: "diagram",
      id: "bl-ai-transformation",
      type: "flow",
      title: "AI Strategy Execution Path",
      caption:
        "Assess → prioritise → pilot → scale → embed. Strategy without this sequence is a slide deck, not a company capability.",
    }),
    buildSection({
      number: "1.4",
      title: "AI strategy vs business strategy — the relationship",
      subtitle: "Your AI strategy does not replace your business strategy. It serves it.",
      take: "Business strategy chooses market, customer, and business model. AI strategy chooses how intelligence creates advantage inside that business. When the two diverge — AI for AI's sake — you build impressive demos that do not move revenue or margin.",
      why: "Founders who treat AI strategy as separate from business strategy end up with 'AI initiatives' that the CFO cannot tie to unit economics. Integration is what makes AI fundable and durable.",
      paragraphs: [
        [
          s("Business strategy answers who pays, why, and how you capture value. "),
          x(
            "AI strategy answers where machine intelligence changes cost-to-serve, willingness-to-pay, or retention in that business.",
            "If AI does not move one of those levers, it is a cost centre with a keynote slide.",
          ),
          s(" Align every AI bet to a business metric that matters at scale."),
        ],
        [
          s("AI strategy is a capability plan in service of positioning. "),
          x(
            "Cost leadership: AI reduces manual work per transaction — strategy focuses on automation depth and error rates.",
            "Differentiation: AI enables outcomes competitors cannot match — strategy focuses on proprietary data and workflow lock-in.",
          ),
          s(" The same model stack can serve opposite strategies; the business frame chooses which."),
        ],
        [
          s("Misalignment shows up in org design before it shows up in revenue. "),
          x(
            "AI team rewarded for model benchmarks while sales sells reliability and compliance — strategy split.",
            "Integrated strategy: AI roadmap owned by the same narrative that drives GTM and pricing.",
          ),
          s(" One page should connect AI choices to the business you are actually building."),
        ],
      ],
      examples: [
        {
          title: "Ramp — AI serving spend control business strategy",
          body: "Ramp's business strategy is corporate card and spend management. AI strategy targets receipt matching, policy violations, and anomaly detection — each tied to fraud reduction and finance team time saved. AI is not a side project; it deepens the core economic promise.",
        },
        {
          title: "AI-for-AI's-sake startup — the margin trap",
          body: "A B2B SaaS added an LLM chat interface with no change to pricing or retention curves. Usage was flat, inference cost rose. Business strategy (land-and-expand in HR) and AI strategy (generic Q&A) were disconnected. The fix was killing the chatbot and embedding AI in screening workflows customers already paid for.",
        },
        {
          title: "Healthcare documentation — business strategy leads",
          body: "Ambience and Abridge win because business strategy owns clinician time and reimbursement. AI strategy (ambient scribing) serves that wedge. Founders pitching 'our model is better' without a business wedge story lose to founders who pitch 'we return two hours per clinician per day.'",
        },
      ],
    }),
    buildSection({
      number: "1.5",
      title: "The time horizon problem in AI strategy",
      subtitle: "Why 12-month AI roadmaps are almost always wrong and what to plan instead",
      take: "Model capabilities, API pricing, and incumbent feature sets shift faster than annual planning cycles. Twelve-month AI roadmaps pretend stability; good AI strategy plans in horizons — capabilities, moats, and scenarios — not dated feature commitments.",
      why: "Boards and investors still ask for roadmaps. Founders who only provide roadmaps get blindsided by commoditisation; founders who pair horizon planning with roadmap flexibility earn credibility when the market moves.",
      paragraphs: [
        [
          s("Capability horizons move quarterly, not annually. "),
          x(
            "What required fine-tuning in 2023 is a prompt in 2024 and a native provider feature in 2025.",
            "Roadmaps that hard-code model techniques expire before they ship.",
          ),
          s(" Plan for capability classes (retrieve, reason, act) not specific model SKUs."),
        ],
        [
          s("Moat horizons are multi-year — and that mismatch is the point. "),
          x(
            "Data accumulation and workflow lock-in compound over years; feature parity can happen in months.",
            "Strategy must allocate patience to moat building and agility to feature layer.",
          ),
          s(" Founders who plan one horizon for everything either over-build or under-invest."),
        ],
        [
          s("Replace static roadmaps with scenario triggers. "),
          x(
            "Trigger: provider ships native feature → activate vertical depth and integration moat.",
            "Trigger: inference cost drops 50% → expand use cases previously unit-negative.",
          ),
          s(" Scenario planning is how AI strategy stays honest when the ground moves."),
        ],
      ],
      examples: [
        {
          title: "OpenAI DevDay — roadmap obsolescence overnight",
          body: "Teams with twelve-month roadmaps centred on custom assistants watched OpenAI ship native capabilities. Companies with strategy centred on proprietary data and enterprise workflow integration pivoted features in weeks, not quarters. Horizon planning beat dated commitments.",
        },
        {
          title: "Embedding search — technique to infrastructure",
          body: "Vector search was a differentiated roadmap item in 2022; by 2024 it was table stakes in every datastore. Strategy that named 'retrieval quality via proprietary corpora' survived; strategy that named 'we will build a vector DB' did not.",
        },
        {
          title: "Three-horizon planning at Series A",
          body: "A founder presented: H1 features (6 months), H2 moat mechanisms (18 months), H3 platform expansion (36 months). Investors preferred this to a flat roadmap because it matched how AI markets actually evolve. Flexibility within horizons was explicit.",
        },
      ],
    }),
    buildSection({
      number: "1.6",
      title: "Founder decision lens: writing your AI strategy in one page",
      subtitle: "The template that forces clarity — wedge, moat, loop, expansion",
      take: "If your AI strategy does not fit on one page, it is not clear enough to execute or defend. The one-pager forces tradeoffs: one wedge, one primary moat, one loop mechanism, one expansion sequence — with explicit risks and triggers.",
      why: "This document becomes your north star for hiring, fundraising, and saying no. It is also the artifact your lead investor will remember when writing the memo — clarity here compounds into term sheet quality.",
      paragraphs: [
        [
          s("Section one: wedge — one paragraph, one workflow, four tests passed. "),
          x(
            "Name the user, the job, the before/after metric, and why AI is 10x not 10%.",
            "If you need two paragraphs, you have two wedges — pick one.",
          ),
          s(" Wedge discipline is the hardest part of the one-pager."),
        ],
        [
          s("Section two: moat — what compounds and on what timeline. "),
          x(
            "Primary moat choice: data, distribution, switching costs, workflow depth, or trust.",
            "Include honest assessment: what is moat today vs moat at 24 months if execution hits.",
          ),
          s(" Investors forgive early thin moats; they do not forgive unarticulated moat intent."),
        ],
        [
          s("Sections three and four: loop and expansion — draw the arrows. "),
          x(
            "Loop: what event generates signal, how often it retrains or updates, who owns the pipeline.",
            "Expansion: wedge → product → platform, with gates ('we expand when override rate < X').",
          ),
          s(" Finish with three risks and three scenario triggers — that is a strategy, not a wish."),
        ],
      ],
      examples: [
        {
          title: "One-pager before seed — saved six months",
          body: "A founder wrote the wedge/moat/loop/expansion page before building. The wedge test failed on 'data-generative' — users would not produce labellable signal. They pivoted workflows pre-code. The one-pager cost a weekend; rebuilding the wrong product would have cost six months.",
        },
        {
          title: "Board uses one-pager as decision filter",
          body: "A Series A company required every AI initiative to cite which one-pager section it strengthened. Features that only added inference cost without moat or loop progress were deprioritised. Strategy became an operating filter, not a document in a drawer.",
        },
        {
          title: "Investor memo alignment",
          body: "A lead VC copied the founder's one-pager structure into the investment memo — wedge, moat, loop, expansion. When the company hit commoditisation pressure, both sides referenced the same triggers. Shared language reduced panic pivots.",
        },
      ],
    }),
  ],
  quiz: [
    {
      q: "An investor asks for your 'AI strategy.' You hand them a four-quarter roadmap of features (copilot, summarisation, agents). What did you actually provide?",
      options: [
        "A complete AI strategy — roadmaps are strategy.",
        "An execution plan without a theory of how you win — a feature list, not strategy.",
        "A moat document — features create moats automatically.",
        "A feedback loop design — shipping features closes the loop.",
      ],
      correct: 1,
      correctFeedback:
        "Right. Roadmaps describe what you build; strategy describes why you win (wedge, moat, loop, expansion). Handing only a backlog signals differentiation risk.",
      wrongFeedback:
        "Strategy requires wedge, moat, feedback loop, and expansion path — not just a Gantt chart. Re-read sections 1.1 and 1.2.",
    },
    {
      q: "Which set is the four components of a real AI strategy?",
      options: [
        "Model, prompt, API, UI",
        "Wedge, moat, feedback loop, expansion path",
        "Seed, Series A, Series B, IPO",
        "Training, inference, fine-tuning, RAG",
      ],
      correct: 1,
      correctFeedback:
        "Exactly. Those four components are how sophisticated investors evaluate AI companies. Re-read section 1.2.",
      wrongFeedback:
        "The four strategic components are wedge, moat, feedback loop, and expansion path — not technical stack pieces. Re-read section 1.2.",
    },
    {
      kind: "order",
      q: "Order the planning horizons from shortest to longest useful horizon for AI strategy.",
      prompt: "Drag to arrange from shortest (top) to longest (bottom).",
      items: [
        "Feature and capability layer — shifts quarterly as models and APIs evolve.",
        "Moat building — proprietary data and switching costs compound over years.",
        "Business positioning — market and business model, multi-year but slower than model capabilities.",
      ],
      correctFeedback:
        "Right. Capabilities move fastest; moats slowest. Good strategy plans different horizons for each. Re-read section 1.5.",
      wrongFeedback:
        "Model capabilities change faster than moat-building. Re-read section 1.5 on time horizons.",
    },
    {
      kind: "categorize",
      q: "Sort each statement into 'AI strategy' or 'Product roadmap only'.",
      categories: ["AI strategy", "Product roadmap only"],
      items: [
        { text: "Our wedge is high-frequency contract review for mid-market legal teams; usage generates clause-level acceptance signal.", category: 0 },
        { text: "Q3: ship summarisation. Q4: ship email agent.", category: 1 },
        { text: "Primary moat: workflow lock-in plus proprietary labelled outcomes; expansion into matter management after override rate < 8%.", category: 0 },
        { text: "We will use GPT-5 when it launches.", category: 1 },
        { text: "If OpenAI ships native drafting, we deepen vertical integrations and audit trails — trigger defined.", category: 0 },
        { text: "Twelve features across six integrations by December.", category: 1 },
      ],
      correctFeedback:
        "Right. Strategy names causality, moat, loops, and triggers. Roadmaps list outputs without theory of winning.",
      wrongFeedback:
        "Strategy answers why you win and what compounds; roadmaps list what ships. Re-read sections 1.1–1.3.",
    },
    {
      q: "Your business strategy is cost leadership in accounts payable automation. Your AI team proposes a general-purpose chatbot for 'innovation.' What is the founder-correct response?",
      options: [
        "Approve — AI innovation is always strategic.",
        "Reject or redirect — AI strategy must serve business strategy; tie AI to cost-to-serve, error reduction, or retention in AP workflows.",
        "Approve but only use open-source models.",
        "Defer to the AI lead — strategy is their job.",
      ],
      correct: 1,
      correctFeedback:
        "Right. AI strategy serves business strategy. A generic chatbot that does not move AP unit economics is a distraction. Re-read section 1.4.",
      wrongFeedback:
        "Business strategy chooses the game; AI strategy chooses how intelligence wins that game. Re-read section 1.4.",
    },
    {
      q: "You are writing the one-page AI strategy before seed. Which element is the most common failure mode?",
      options: [
        "Naming too many wedges instead of one narrow workflow with four tests passed.",
        "Including API costs.",
        "Listing competitors.",
        "Writing in prose instead of slides.",
      ],
      correct: 0,
      correctFeedback:
        "Right. Founders hedge with multiple wedges; investors read that as no wedge. One workflow, four tests, one page. Re-read section 1.6.",
      wrongFeedback:
        "The one-pager fails when wedge discipline fails — too broad, too many bets. Re-read section 1.6.",
    },
  ],
});
