import { buildChapter, buildSection, s, x, sectionWithDiagram } from "../concepts-pb4-helpers";

export const chapter03TrainingVsInference = buildChapter({
  slug: "founder-training-vs-inference",
  number: 3,
  shortTitle: "Training vs Inference",
  title: "Training vs Inference — Your Two Biggest Cost Lines",
  readingMinutes: 20,
  summary:
    "Training is upfront CapEx; inference is per-user OpEx. Confusing them destroys unit economics and kills Series A companies that scale before the spreadsheet says they can.",
  keyTakeaway:
    "Training buys capability once. Inference rents capability on every click. Founders who model inference cost per user before launch survive viral growth; founders who do not get a bridge-round conversation they did not plan for.",
  pmCallout:
    "As a founder: when your CEO or board asks why you are not training your own foundation model, explain that you are buying variable inference to avoid fixed training CapEx — and show the spreadsheet that says when that trade flips.",
  sections: [
    sectionWithDiagram({
      number: "3.1",
      title: "Training cost",
      subtitle: "The one-time capital expenditure — and why most startups should never pay it",
      take: "Training is the massive offline investment that produces a frozen model: GPU clusters, months of calendar time, and irrecoverable spend if the run fails. It is R&D CapEx, not a feature launch. Almost every startup should rent pre-trained models instead of funding pre-training.",
      why: "Boards and investors will ask why you are not 'building your own AI.' The answer is arithmetic: frontier training runs cost eight to nine figures. Founders who cannot articulate this confuse capital allocation and approve projects that consume a Series A without producing a deployable product.",
      paragraphs: [
        [
          s("Training is what happens before any user sees your product. "),
          x(
            "Clusters of GPUs run for weeks or months, processing trillions of tokens or millions of images, adjusting weights through billions of forward-backward cycles.",
            "No revenue is generated during this phase. No user feedback improves the model live. The output is a static weight file — a snapshot of intelligence at the moment training stopped.",
          ),
          s(" You are paying to manufacture the asset; you have not yet paid to operate it."),
        ],
        [
          s("Training economics are brutal because failure is common and non-refundable. "),
          x(
            "Hardware faults, data corruption, or misconfigured hyperparameters can waste millions mid-run. Unlike software bugs, you cannot hotfix a half-trained model — you restart or restore from checkpoint.",
            "Backpropagation requires holding the entire network state in memory, which is why training needs GPU clusters while inference can often run on fewer chips.",
          ),
          s(" Only a handful of companies on Earth can treat frontier pre-training as a recurring operating rhythm."),
        ],
        [
          s("Your default strategy should be to let someone else pay training CapEx. "),
          x(
            "Use OpenAI, Anthropic, Google, or Meta's open weights. Fine-tune on your domain when adaptation — not pre-training — is the bottleneck.",
            "When your CTO says 'train from scratch,' ask what capability fine-tuning plus RAG cannot achieve. If they cannot answer, you are funding research, not product.",
          ),
          s(" Training CapEx belongs in the business plan of model vendors — not in your seed deck unless you are one."),
        ],
      ],
      examples: [
        {
          title: "OpenAI GPT-4 — nine-figure training bet",
          body: "GPT-4's training run reportedly exceeded $100M in compute alone, ran for months, and answered zero customer queries during that period. OpenAI amortises that CapEx across API revenue and enterprise contracts. Founders buying tokens are renting the outcome of that bet — not replicating it.",
        },
        {
          title: "Meta Llama 3 — open-source as subsidised CapEx",
          body: "Meta spent billions on GPU infrastructure to train Llama 3, then released weights publicly. They absorbed training CapEx to shape the ecosystem. Startups downloading Llama avoid training cost but still face fine-tuning and hosting decisions — training savings do not eliminate AI spend.",
        },
        {
          title: "BloombergGPT — when vertical training CapEx makes sense",
          body: "Bloomberg trained a domain-specific finance model because their data moat and customer willingness to pay justified eight-figure R&D. That is the exception: vertical monopoly data, enterprise pricing power, and ML engineering at scale. Most startups lack all three.",
        },
      ],
    }, {
      kind: "diagram",
      id: "founder-training-inference-split",
      type: "comparison",
      title: "Training CapEx vs Inference OpEx",
      caption:
        "Training manufactures capability once; inference meters it on every user action. Founders who confuse the two misallocate capital and discover margin crisis at scale.",
    }),
    buildSection({
      number: "3.2",
      title: "Inference cost",
      subtitle: "The recurring operational expenditure on every user click",
      take: "Inference is the per-query cost of running the frozen model: input tokens processed, output tokens generated, GPUs rented by the millisecond. It is COGS. Every user interaction spends money — there is no marginal cost near zero like traditional SaaS.",
      why: "Your gross margin is set at inference time, not at fundraising time. Founders who launch AI features without a per-query cost model discover at 10× usage that their best customers are their least profitable — often during the same quarter they are pitching Series A.",
      paragraphs: [
        [
          s("Inference is a forward pass — data in, prediction out, weights unchanged. "),
          x(
            "The model does not learn during inference. It applies the weights produced by training to calculate the next token, classification, or embedding.",
            "Because weights are fixed, inference is cheaper per operation than training — but it happens millions of times per day in production.",
          ),
          s(" Training is a bonfire you light once. Inference is a meter that runs forever."),
        ],
        [
          s("Pricing is typically per token or per request, and output tokens cost more than input tokens. "),
          x(
            "Generating text requires sequential forward passes — one per token — which burns more compute than processing the prompt upfront.",
            "A long system prompt plus a verbose response can turn a 'simple' feature into a 4-cent query. Four cents sounds small until a power user runs it five hundred times a month.",
          ),
          s(" Multiply per-query cost by daily active users by queries per user by thirty. That is your monthly inference line item."),
        ],
        [
          s("Inference cost is variable OpEx that scales linearly with engagement — the opposite of classic software margins. "),
          x(
            "Traditional SaaS serves another user for pennies. AI SaaS serves another heavy user for dollars.",
            "If your pricing is flat subscription and your cost is per query, power users subsidise themselves into your burn rate.",
          ),
          s(" Design pricing, caps, and model tiering at the same time you design the feature — not after the AWS bill arrives."),
        ],
      ],
      examples: [
        {
          title: "GitHub Copilot — subsidised inference on flat pricing",
          body: "Copilot runs inference on nearly every keystroke pause for millions of developers at a flat monthly fee. Microsoft reportedly loses money on heavy users because inference volume outpaces subscription revenue. The founder lesson: flat pricing plus unbounded inference is a deliberate subsidy — know you are making it.",
        },
        {
          title: "ChatGPT Plus — inference-aware subscription design",
          body: "OpenAI caps GPT-4 messages per window even for paying users because they model inference cost per subscriber. The Plus tier is priced against expected token burn, not unlimited appetite. Founders should copy the discipline, if not necessarily the caps.",
        },
        {
          title: "Apple Intelligence — inference shifted to the edge",
          body: "Apple runs smaller models on-device for many tasks, eliminating cloud inference COGS for those paths. Users pay via hardware margin, not per query. Edge inference is a structural way to escape linear cloud COGS — if your product can tolerate smaller models.",
        },
      ],
    }),
    sectionWithDiagram({
      number: "3.3",
      title: "The unit economics trap",
      subtitle: "Technically impressive and financially catastrophic — at the same time",
      take: "The unit economics trap is shipping an AI feature customers love whose inference cost per user exceeds the revenue that user generates. Viral adoption makes this worse, not better — there are no economies of scale in the forward pass.",
      why: "Series A investors will model your gross margin. If your AI feature drags blended margin below 50% with no path to improvement, you are a services business wearing a SaaS multiple. Founders who catch this pre-launch keep fundraising optionality; founders who catch it post-viral spike negotiate from weakness.",
      paragraphs: [
        [
          s("Traditional SaaS unit economics assume near-zero marginal cost per user. AI breaks that assumption permanently. "),
          x(
            "Each generation requires fresh compute proportional to tokens processed. Caching helps only when queries repeat identically — rare in conversational or personalised products.",
            "10× users means roughly 10× inference spend, not 10× spread across a fixed server fleet.",
          ),
          s(" Your LTV:CAC ratio means nothing if gross margin on the AI SKU is negative."),
        ],
        [
          s("The trap closes when pricing, packaging, and architecture are designed separately. "),
          x(
            "Product designs proactive AI everywhere. Finance models flat subscription. Engineering picks the smartest model. Nobody multiplies the three together until usage spikes.",
            "The proactive email draft that runs on 100% of messages but is opened 20% of the time is a classic trap: you pay inference on every message, capture value on few.",
          ),
          s(" Unit economics must be designed into the feature spec, not discovered in the P&L."),
        ],
        [
          s("Escape paths exist — but each is a product decision, not a finance afterthought. "),
          x(
            "Usage-based pricing aligns revenue with cost. Model routing sends easy queries to cheap models. Explicit user triggers avoid speculative inference. Hard caps protect tail risk.",
            "Human-in-the-loop for low-confidence cases trades labour cost for inference savings — sometimes correctly, sometimes as an admission the model is not ready.",
          ),
          s(" Founders who present AI features in board decks should present cost-per-user alongside adoption projections — always."),
        ],
      ],
      examples: [
        {
          title: "Jasper at peak API dependence",
          body: "Jasper scaled rapidly on OpenAI APIs while marketing a flat-feel subscription. When API costs rose and competition intensified, margin pressure became existential. The lesson: revenue growth without inference margin discipline is a countdown, not a victory.",
        },
        {
          title: "Notion AI — click-to-generate as margin protection",
          body: "Notion requires explicit user action to invoke AI writing assistance rather than generating speculatively on every keystroke. At Notion's scale, speculative inference would burn millions daily. Friction is sometimes the margin strategy.",
        },
        {
          title: "Midjourney — killing unlimited tiers",
          body: "Midjourney abandoned unlimited fast generation because image inference COGS scaled linearly with obsessive users. GPU-hour quotas align revenue with cost. Founders in generative media should study their pricing evolution as a survival playbook.",
        },
      ],
    }, {
      kind: "diagram",
      id: "founder-unit-economics-trap",
      type: "flow",
      title: "The Unit Economics Trap",
      caption:
        "Flat pricing plus unbounded inference turns viral adoption into a COGS crisis — model this before launch, not after the AWS bill.",
    }),
    sectionWithDiagram({
      number: "3.4",
      title: "API dependency vs model ownership",
      subtitle: "The strategic tradeoff you must choose — not stumble into",
      take: "API dependency means paying retail per-token prices with zero infrastructure overhead. Model ownership means renting GPUs 24/7 and hiring ML ops — but capturing wholesale inference margins at scale. Neither is universally correct; the answer is a function of volume, capital, and control requirements.",
      why: "Founders who default to APIs without a migration thesis pay forever. Founders who self-host too early pay idle GPU bills while product-market fit is still uncertain. The decision should be modelled, dated, and revisited at revenue milestones — not inherited from engineering preference.",
      paragraphs: [
        [
          s("APIs trade margin for speed and optionality. "),
          x(
            "You ship in days, scale instantly, and swap models when vendors release improvements. You pay a markup that funds the vendor's training CapEx and profit.",
            "At low volume, markup is cheaper than keeping a GPU warm. At high volume, markup compounds into a line item larger than a dedicated cluster.",
          ),
          s(" APIs are the correct seed-stage default for most products."),
        ],
        [
          s("Self-hosting trades operational burden for cost control and data residency. "),
          x(
            "Open weights from Meta, Mistral, or others eliminate per-token vendor markup but introduce GPU rental, monitoring, failover, and security patching.",
            "You pay for GPUs during idle nights. You need someone who can debug CUDA errors at 2am.",
          ),
          s(" Ownership without ML ops maturity is ownership of outages."),
        ],
        [
          s("The crossover point is a spreadsheet row, not a philosophy. "),
          x(
            "Plot monthly API spend vs cost of a right-sized GPU fleet at your p95 latency target. Add headcount for the ML platform engineer you will need.",
            "Set a trigger: 'When API spend exceeds $X for three consecutive months, we evaluate self-host.' Review quarterly as model prices fall.",
          ),
          s(" Board conversations improve dramatically when you can say 'we migrate at $X MRR, not when engineering gets bored of APIs.'"),
        ],
      ],
      examples: [
        {
          title: "Harvey — API first, self-host as margin defence",
          body: "Harvey built on frontier APIs to prove legal workflow value, then invested in self-hosted and fine-tuned models as enterprise volume grew. API dependency was a go-to-market accelerant; ownership became a margin and control requirement at scale.",
        },
        {
          title: "Replicate — making ownership accessible",
          body: "Replicate lets teams run open models without building full ML ops, blurring the line between API convenience and ownership economics. Founders can delay hiring a platform team — but still must model per-run cost as COGS.",
        },
        {
          title: "Dropbox AI features — API pragmatism",
          body: "Dropbox ships AI summarisation and search via partner models rather than training proprietary foundation models. At their scale, the build-vs-buy calculus favours partnering for capability and competing on distribution and trust — not on owning weights.",
        },
      ],
    }, {
      kind: "diagram",
      id: "founder-api-vs-own",
      type: "comparison",
      title: "API Dependency vs Model Ownership",
      caption:
        "APIs trade margin for speed at low volume; self-hosting trades operational burden for wholesale economics at high volume.",
    }),
    buildSection({
      number: "3.5",
      title: "Inference cost at scale",
      subtitle: "The numbers that kill Series A companies between 1,000 and 100,000 users",
      take: "Going from 1,000 to 100,000 users can multiply inference spend 100× while revenue per user stays flat. Auto-regressive generation makes long outputs disproportionately expensive. There is no volume discount on the forward pass.",
      why: "Series A decks show hockey-stick revenue. They often omit hockey-stick COGS. Founders who model inference at 10× and 100× current usage avoid the emergency bridge round caused by a viral feature that loses money on every click.",
      paragraphs: [
        [
          s("Auto-regressive generation makes output length a cost multiplier. "),
          x(
            "Each generated token requires another full forward pass through the model. A 2,000-token report is not twice the cost of a 1,000-token report — it is roughly twice the sequential compute, with output tokens priced at a premium.",
            "Users who ask for 'more detail' are asking you to spend more money.",
          ),
          s(" Default verbosity in your product is a COGS policy, not a UX accident."),
        ],
        [
          s("Power users dominate tail cost. "),
          x(
            "The top 5% of users often generate 50%+ of inference spend — automations, bulk processing, always-on agents.",
            "Average cost per user hides catastrophic P&L impact from a small segment. Model your 95th and 99th percentile user before you model the median.",
          ),
          s(" If your best evangelists are your worst unit economics, you do not have product-market fit — you have a subsidy program."),
        ],
        [
          s("Scale exposes architectural choices you deferred at pilot volume. "),
          x(
            "Synchronous LLM calls in the request path become bottlenecks. Lack of caching or batching burns redundant compute. One model tier for all tasks overpays on easy queries.",
            "Series A is when deferred inference debt comes due — often in the same quarter you need to show efficiency.",
          ),
          s(" Build the 100× cost model in the seed stage; execute the optimisations before the spike, not after the invoice."),
        ],
      ],
      examples: [
        {
          title: "Character.AI — engagement vs inference burn",
          body: "Character.AI achieved extraordinary engagement with conversational AI, which implies extraordinary inference volume. High minutes-per-user is a double-edged sword: retention looks amazing while GPU bills scale with every message. Founders should celebrate engagement only alongside cost-per-session.",
        },
        {
          title: "Shopify Sidekick — scale-aware rollout",
          body: "Shopify rolled AI assistance with merchant context carefully, knowing inference at merchant scale could outpace subscription value. Enterprise AI features need per-merchant cost models, not just demo latency scores.",
        },
        {
          title: "Zapier AI steps — credits as cost translation",
          body: "Zapier charges AI credits per automation step because background triggers can fire thousands of times daily per power user. They translated inference COGS into a pricing primitive users understand. Founders should expose cost logic in packaging before finance forces it.",
        },
      ],
    }),
    sectionWithDiagram({
      number: "3.6",
      title: "Cost optimisation levers",
      subtitle: "Caching, routing, compression, and smaller models — before you raise a bridge round",
      take: "Inference cost is not fixed. Caching, model routing, prompt compression, batching, and distillation can cut COGS 40–80% without killing the feature — if you invest before crisis, not during it.",
      why: "Investors prefer founders who show margin discipline proactively. A bridge round to 'fix unit economics' signals you shipped without understanding the business model. These levers are cheaper than emergency fundraising.",
      paragraphs: [
        [
          s("Model routing sends easy queries to cheap models and hard queries to expensive ones. "),
          x(
            "A classifier or small model can handle FAQ routing, extraction, or simple summarisation. Reserve frontier models for multi-step reasoning.",
            "Most user queries are not frontier-hard. Routing is the highest ROI inference optimisation for many products.",
          ),
          s(" Ask engineering for a routing architecture in the MVP spec, not the Series A retrofit."),
        ],
        [
          s("Prompt and context compression reduces input token burn. "),
          x(
            "RAG pipelines that dump 20 chunks into every query pay for tokens whether or not the model needs them. Reranking, summarisation, and metadata filters shrink prompts.",
            "Caching identical or near-identical queries avoids redundant forward passes — especially for support bots and internal tools.",
          ),
          s(" Every token you send is a token you pay for. Treat context window as a budget, not a buffet."),
        ],
        [
          s("Smaller models and distillation trade capability for margin with discipline. "),
          x(
            "Fine-tuning a small model on your highest-volume task often beats a general frontier model at 1/10th the cost.",
            "Batch inference for non-real-time tasks — overnight reports, email drafts prepared in advance — uses cheaper off-peak compute.",
          ),
          s(" The goal is not the smartest model; it is the cheapest model that clears your quality bar for each task tier."),
        ],
      ],
      examples: [
        {
          title: "Microsoft Copilot tiering",
          body: "Microsoft routes tasks across model tiers — smaller models for inline suggestions, larger models for complex analysis. Users experience one product; finance experiences differentiated COGS. Tiering should be invisible to users but explicit in your architecture diagram.",
        },
        {
          title: "Intercom Fin — retrieval before generation",
          body: "Fin compresses support context through retrieval and structured snippets rather than dumping entire knowledge bases into prompts. Less input tokens, faster answers, lower cost per resolution. RAG done well is a margin strategy.",
        },
        {
          title: "Cohere — enterprise models sized for workload",
          body: "Cohere offers models explicitly positioned for cost-sensitive enterprise workloads — classification, search, RAG — rather than only frontier chat. Founders should match model SKU to task complexity, not default to the flagship name.",
        },
      ],
    }, {
      kind: "diagram",
      id: "founder-inference-optimisation",
      type: "flow",
      title: "Inference Cost Optimisation Levers",
      caption:
        "Routing, compression, caching, and distillation can cut COGS 40–80% — invest before crisis, not during a bridge round.",
    }),
    buildSection({
      number: "3.7",
      title: "The inference cost conversation with your CTO",
      subtitle: "Five questions every founder should ask — and understand the answers to",
      take: "You do not need to write CUDA kernels. You need to ask five questions about every AI feature and understand whether the answers fit your margin model: cost per query, p95 latency, model tier, trigger logic, and 10× scale projection.",
      why: "CTOs optimise for capability and reliability by default. Founders optimise for survival and margin. The inference cost conversation aligns both — or surfaces that you need a different technical lead for this phase of company.",
      paragraphs: [
        [
          s("Question 1: What is all-in cost per query at median and p95 usage? "),
          x(
            "Include input tokens, output tokens, retrieval, tool calls, and orchestration overhead. Median tells you pricing; p95 tells you tail risk.",
            "If the CTO cannot produce a number, the feature is not ready for GA — it is ready for a spreadsheet exercise.",
          ),
          s(" Do not accept 'it depends' without a worked example using real pilot data."),
        ],
        [
          s("Question 2: What triggers inference, and can we require explicit user intent? "),
          x(
            "Background, proactive, and on-every-keystroke triggers multiply cost without multiplying value.",
            "Ask for a trigger map: user-initiated vs system-initiated, and the percentage of invocations that lead to retained value.",
          ),
          s(" The most expensive inference is the inference nobody asked for."),
        ],
        [
          s("Questions 3–5: Which model tier, what latency target, what happens at 10× volume? "),
          x(
            "Model tier ties directly to COGS. Latency targets force size trade-offs. 10× projection tests whether your architecture survives success.",
            "Ask for a latency-quality-cost triangle: pick two consciously, do not pretend you have all three at frontier scale.",
          ),
          s(" Document answers in the PRD. Revisit monthly. Update the board when answers change."),
        ],
      ],
      examples: [
        {
          title: "Series A CTO review — the missing p95",
          body: "A startup pitched investors on AI margin improvement while only modelling median query cost. p95 users running bulk analysis cost 8× median. Due diligence found negative gross margin on the top decile. The fix was caps and routing — but the valuation conversation was already damaged.",
        },
        {
          title: "Figma AI — deliberate trigger design",
          body: "Figma invokes AI on explicit design actions — not continuously on canvas changes. Founders in creative tools should study how explicit triggers protect COGS while keeping magic in the moments users expect.",
        },
        {
          title: "Databricks — cost visibility as product",
          body: "Databricks exposes compute cost per workload because their buyers demand it. AI-native founders should internalise the same expectation: if you cannot show cost per feature, enterprise procurement will eventually force you to — under worse terms.",
        },
      ],
    }),
    buildSection({
      number: "3.8",
      title: "Founder decision lens",
      subtitle: "Building your AI cost model before investors ask for it",
      take: "Before you sign any AI infrastructure contract, build a spreadsheet: cost per query × queries per user × users × model price trajectory. Include training/fine-tuning as one-time rows and inference as monthly rows. Update it when vendors change pricing.",
      why: "Investors will ask for AI unit economics in Series A diligence. Customers will ask for predictability in enterprise contracts. Your future self will ask why you launched without caps. The spreadsheet is the founder tool that prevents all three conversations from becoming surprises.",
      paragraphs: [
        [
          s("Start with a single feature and model it honestly. "),
          x(
            "Inputs: average prompt tokens, average output tokens, model price per million tokens, queries per user per day, expected MAU.",
            "Outputs: monthly inference COGS at current usage, at 3×, at 10×. Compare to ARPU at each tier.",
          ),
          s(" If COGS exceeds 30% of ARPU at expected scale, the feature economics need redesign before marketing amplifies them."),
        ],
        [
          s("Add training and fine-tuning as explicit CapEx rows — not hidden in engineering salaries. "),
          x(
            "Fine-tune project: $X compute, $Y labelling, Z weeks delay. Amortise over expected queries if you want — but do not pretend it is free.",
            "Compare CapEx of adaptation vs ongoing API markup. The cheaper path depends on volume and how fast base models commoditise.",
          ),
          s(" Present both paths in board materials. Decisions look strategic when alternatives are quantified."),
        ],
        [
          s("Bake cost assumptions into contracts, pricing, and roadmap gates. "),
          x(
            "Enterprise quotes should include AI usage tiers. Product launches should have COGS acceptance criteria. Vendor contracts should have price-change clauses.",
            "When OpenAI cuts prices 50%, you gain margin — update the model and consider passing savings to growth. When prices rise, you already have levers documented.",
          ),
          s(" The founders who survive AI markets treat cost models as living documents — not fundraising theatre."),
        ],
      ],
      examples: [
        {
          title: "Seed deck inference slide — the one investors remember",
          body: "Strong AI seed decks include: assumed model, cost per query, queries per user, gross margin at 1K and 10K users, and optimisation levers already planned. Weak decks say 'AI-powered' with no COGS line. Diligence separates them quickly.",
        },
        {
          title: "OpenAI price cuts — margin gift or trap",
          body: "When OpenAI reduces API prices, startups with modelled unit economics gain instant margin expansion. Startups without models discover accidentally they are profitable — until the next feature doubles token usage. Update the spreadsheet when vendors move.",
        },
        {
          title: "Enterprise procurement — the AI cost appendix",
          body: "Sophisticated buyers ask for projected AI cost per seat and usage caps in contracts. Founders who built the model pre-sales attach a cost appendix confidently. Founders who improvise promise unlimited AI and lose margin on the signature.",
        },
      ],
    }),
  ],
  quiz: [
    {
      kind: "categorize",
      q: "Sort each line item into the correct cost bucket.",
      categories: ["Training (CapEx)", "Inference (OpEx)"],
      items: [
        { text: "Renting 512 H100 GPUs for four weeks to pre-train a foundation model.", category: 0 },
        { text: "Every user click on 'Summarise' generating 600 output tokens.", category: 1 },
        { text: "A two-day fine-tuning run on 3,000 labelled sales emails.", category: 0 },
        { text: "Nightly batch scoring of support tickets with your classifier.", category: 1 },
        { text: "OpenAI API bill charged per million tokens in production.", category: 1 },
        { text: "Labelling 40,000 medical images for a new training dataset.", category: 0 },
      ],
      correctFeedback:
        "Right. Training and fine-tuning are upfront investments producing a frozen model. Inference is every production call that uses it.",
      wrongFeedback:
        "If it runs when users (or batch jobs) hit the model in production, it is inference. If it creates or adapts the model offline, it is training CapEx. Re-read sections 3.1 and 3.2.",
    },
    {
      q: "Your board asks why you are not training a proprietary foundation model. What is the strongest founder answer?",
      options: [
        "Open-source models cannot handle our use case.",
        "We rent inference from vendors who amortise nine-figure training CapEx; we will adapt via fine-tuning and RAG until volume justifies ownership.",
        "Training is faster than using APIs.",
        "Investors prefer companies that own models.",
      ],
      correct: 1,
      correctFeedback:
        "Right. The capital allocation story is rent-vs-own with a volume-triggered migration plan — not heroic pre-training at seed.",
      wrongFeedback:
        "Training from scratch is slower and vastly more expensive than API-first adaptation for almost all startups. Re-read sections 3.1 and 3.4.",
    },
    {
      q: "A generative feature goes viral and usage grows 50× in one month. What happens to inference COGS?",
      options: [
        "Stays flat — the model is already trained.",
        "Scales roughly linearly with usage because each generation requires fresh compute.",
        "Falls due to economies of scale on forward passes.",
        "Triggers an automatic retraining run.",
      ],
      correct: 1,
      correctFeedback:
        "Exactly. Inference is variable OpEx. More queries means more forward passes means more bill.",
      wrongFeedback:
        "Training is sunk; inference is per use. There are no forward-pass economies of scale. Re-read section 3.5.",
    },
    {
      q: "At what point does self-hosting an open model typically beat vendor API pricing?",
      options: [
        "Day one — self-hosting is always cheaper.",
        "When query volume is high enough that API markup exceeds the fixed cost of a right-sized GPU fleet plus ML ops overhead.",
        "When you need lower latency only.",
        "When the vendor deprecates a model.",
      ],
      correct: 1,
      correctFeedback:
        "Right. It is a crossover calculation — volume vs markup vs operational burden.",
      wrongFeedback:
        "Self-hosting pays idle GPU costs and ops headcount. It wins at high utilisation, not automatically. Re-read section 3.4.",
    },
    {
      kind: "order",
      q: "Put the typical AI product cost lifecycle in order from earliest to latest spend.",
      prompt: "Drag to arrange — earliest (top) to latest (bottom).",
      items: [
        "Vendor pre-training (you pay $0 — they absorbed CapEx).",
        "Your fine-tuning or RAG indexing (small CapEx project).",
        "Production inference on first paying users (OpEx begins).",
        "Cost optimisation and optional self-host migration at scale (OpEx discipline).",
      ],
      correctFeedback:
        "Right. Foundation CapEx is vendor-funded; your spend starts at adaptation, then inference, then optimisation as volume grows.",
      wrongFeedback:
        "You do not pay for frontier pre-training first. Your cost line starts at adaptation and inference. Re-read sections 3.1–3.6.",
    },
    {
      q: "Before signing an enterprise AI contract, which founder action best protects margin?",
      options: [
        "Promise unlimited AI usage to win the logo.",
        "Attach a cost model with per-seat usage tiers, caps, and trigger logic based on modelled cost per query.",
        "Choose the largest frontier model to maximise demo quality.",
        "Defer all cost questions until post-launch telemetry.",
      ],
      correct: 1,
      correctFeedback:
        "Right. Modelled tiers and caps turn inference COGS into a priced product instead of a surprise.",
      wrongFeedback:
        "Unlimited AI on flat pricing is how enterprise logos become margin traps. Build the spreadsheet first. Re-read section 3.8.",
    },
  ],
});
