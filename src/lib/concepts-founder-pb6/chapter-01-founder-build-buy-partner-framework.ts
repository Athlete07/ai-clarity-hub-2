import { buildChapter, buildSection, s, x, sectionWithDiagram } from "../concepts-pb4-helpers";

export const chapter01FounderBuildBuyPartnerFramework = buildChapter({
  slug: "founder-build-buy-partner-framework",
  number: 1,
  shortTitle: "Build vs Buy vs Partner",
  title: "The Build vs Buy vs Partner Framework",
  readingMinutes: 28,
  summary:
    "The decision most founders make on instinct — training, fine-tuning, APIs, white-label, acqui-hire, and partnerships — should be made on analysis. Five axes, three-year TCO, and a reversibility test before you commit runway.",
  keyTakeaway:
    "Build, buy, and partner are not three equal options — they are three capital allocation paths with different moat, speed, and exit costs. Document the decision before engineering commits; most durable AI products buy the base, partner for data, and build the product system around both.",
  pmCallout:
    "As a founder: never let 'we'll use GPT' or 'we'll train our own model' be the first sentence in your strategy deck. Start with what must be differentiated, what data you own, what happens if the vendor doubles price, and which path you can undo in ninety days.",
  sections: [
    sectionWithDiagram({
      number: "1.1",
      title: "What build vs buy actually means in an AI context",
      subtitle: "Training your own model vs fine-tuning vs API vs white-label vs acqui-hire",
      take: "In AI, 'build' spans pretraining a foundation model to assembling RAG and agents on rented weights. 'Buy' spans raw API tokens to full vertical SaaS. 'Partner' spans data licensing, co-development, and acqui-hire for capability. Founders who use the same word for different paths make million-dollar mistakes.",
      why: "Your board, investors, and engineering team will argue for months unless you define what each path actually means in your company. Precision here prevents 'we're building AI' from hiding a prompt wrapper or 'we're buying' from hiding a six-month integration.",
      paragraphs: [
        [
          s("Build has four levels — most founders only need the bottom two. "),
          x(
            "Level 4: pretrain a foundation model from scratch — rare, capital-intensive, years-long. Level 3: train or fine-tune proprietary models on your data. Level 2: assemble product systems — RAG, agents, evals, workflows — on open or rented models. Level 1: prompt engineering only.",
            "When founders say 'build,' they usually mean Level 2. Investors hear Level 4. Clarify before fundraising.",
          ),
          s(" Match the build level to your moat claim."),
        ],
        [
          s("Buy is a spectrum, not a single checkbox. "),
          x(
            "Raw API: OpenAI, Anthropic, Google — you get intelligence, you own integration. Managed fine-tune: vendor trains on your data in their environment. White-label SaaS: Harvey-class vertical products with less control. Each has different lock-in, data flow, and margin profiles.",
            "Buy always requires engineering — auth, routing, evals, fallback. The question is how much of the inference stack you outsource.",
          ),
          s(" Map buy options by control vs speed, not by logo recognition."),
        ],
        [
          s("Partner and acqui-hire are the neglected third path. "),
          x(
            "Data partnerships: exclusive access to training signal you cannot generate alone. Model licensing: rights to weights or adapters without full acquisition. Acqui-hire: buy a team and IP when build timeline exceeds runway.",
            "Partner trades equity or revenue share for capability or data you cannot buy off the shelf.",
          ),
          s(" Partner when the asset is relational or regulatory — not when an API would suffice."),
        ],
      ],
      examples: [
        {
          title: "Legal AI startup — 'build' was orchestration",
          body: "Founder pitched 'we're building AI' to Series A investors. Diligence revealed GPT-4 API, Pinecone, custom reranker, no owned weights. Reframing as buy base + build workflow unlocked realistic unit economics and an honest investor narrative. Build level 2, not 4.",
        },
        {
          title: "Healthcare chart AI — white-label vs API",
          body: "Vendor offered SaaS summarisation (buy Level 3). Internal team proposed full fine-tune on proprietary notes (build Level 3). Chose API + managed fine-tune with HIPAA BAA — buy speed with build-level customisation. Partner path deferred until outcome data proved signal.",
        },
        {
          title: "Fintech fraud — acqui-hire as build shortcut",
          body: "Seed startup needed production ML in six months; hiring market was brutal. Acqui-hired a three-person team with a working fraud classifier and labelled dataset. Cost: $1.2M vs 18 months of failed recruiting. Partner/acqui-hire bought time the build path could not afford.",
        },
      ],
    }, {
      kind: "diagram",
      id: "founder-build-buy-partner",
      type: "tree",
      title: "Build vs Buy Decision",
      caption:
        "Data advantage and task shape determine build, buy, or partner — not engineering preference.",
    }),
    buildSection({
      number: "1.2",
      title: "The five-axis decision framework",
      subtitle: "Strategic importance, data sensitivity, cost at scale, time to market, team capability",
      take: "Score each AI infrastructure decision on five axes: strategic importance (is this the moat?), data sensitivity (can it leave your perimeter?), cost at scale (10× volume math), time to market (runway constraint), and team capability (can you operate what you build?). No single axis decides — the weighted score does.",
      why: "Founders default to whatever their technical co-founder prefers or whatever demoed best. The five-axis framework forces explicit tradeoffs that survive board scrutiny and due diligence.",
      paragraphs: [
        [
          s("Strategic importance separates moat from commodity. "),
          x(
            "High: capability is why customers choose you and competitors cannot replicate in 12 months. Low: table-stakes feature any API delivers.",
            "If strategic importance is low, buy. If high, build or partner may be justified — but only with proven data advantage.",
          ),
          s(" Ask: 'If we turned this off, would churn spike or would nobody notice?'"),
        ],
        [
          s("Data sensitivity and time to market often veto each other. "),
          x(
            "Regulated data — PHI, PCI, defence — may prohibit buy via public API regardless of speed. Fast GTM may force buy now with portability architecture for later build.",
            "Score both axes honestly: a HIPAA workload with six months runway may require partner with compliant vendor, not heroic build.",
          ),
          s(" Legal constraints convert preferences into requirements."),
        ],
        [
          s("Cost at scale and team capability determine sustainability. "),
          x(
            "Model API at 1M tokens/month is cheap; at 100M it may destroy margin. Build requires ML engineers, MLOps, eval culture — $800K–$1.2M/year before GPUs.",
            "Weight team capability: if you cannot operate what you build, build becomes a permanent dependency on contractors.",
          ),
          s(" Run the 10× volume spreadsheet before signing multi-year vendor deals."),
        ],
      ],
      examples: [
        {
          title: "Support bot — five-axis scorecard",
          body: "Strategic importance: medium (UX differentiator, not core moat). Data sensitivity: low (public help docs). Cost at scale: high risk (viral support traffic). Time to market: critical (launch in 8 weeks). Team capability: thin (no ML hires). Weighted result: buy API + build RAG shell. Build rejected on capability and timeline.",
        },
        {
          title: "Proprietary recommendation engine — build wins",
          body: "Strategic importance: very high. Data sensitivity: high (exclusive behavioural logs). Cost at scale: build cheaper at 50M inferences/month. Time to market: 12-month horizon acceptable. Team capability: ML engineer hired. All five axes pointed build — buy was convenience, not strategy.",
        },
        {
          title: "EU health data — sensitivity veto",
          body: "German health startup could not send patient notes to US API without GDPR and clinical risk failure. Data sensitivity axis vetoed default buy path. Partnered with EU-hosted open-weight deploy on private cloud — slower, but only compliant path.",
        },
      ],
    }),
    sectionWithDiagram({
      number: "1.3",
      title: "When building is the right answer",
      subtitle: "The conditions under which custom model development is worth the cost and risk",
      take: "Build when the model is the moat — exclusive labelled data, regulatory barriers to third parties, unit economics that flip below API pricing at your volume, or capability ceilings no vendor serves. Build is a defensibility bet, not a control fetish.",
      why: "Over-buying makes you a feature on someone else's platform. Under-building leaves margin and differentiation on the table when your data advantage is real. Founders must justify build with moat math, not ego.",
      paragraphs: [
        [
          s("Proprietary data advantage must be provable, not asserted. "),
          x(
            "Ten years of labelled outcomes, exclusive behavioural logs, domain artefacts competitors cannot license — these justify training signal others lack.",
            "A thin RAG corpus over public PDFs does not justify build. Ask: 'Could a well-funded competitor replicate this with the same API?'",
          ),
          s(" If yes, build is oversold."),
        ],
        [
          s("Regulatory and residency constraints force build or private deploy. "),
          x(
            "Healthcare, defence, certain financial workloads — third-party API may be prohibited regardless of model quality.",
            "Open-weight models on private infrastructure are 'build' in deployment sense even if weights are downloaded, not trained from scratch.",
          ),
          s(" Legal veto converts build from preference to requirement."),
        ],
        [
          s("Unit economics at scale can invert the buy/build line. "),
          x(
            "At hundreds of millions of tokens monthly, owned inference on distilled models may beat API pricing — if quality holds.",
            "Break-even requires quality-adjusted cost: a cheaper model with 5% lower task completion may cost more in support and churn.",
          ),
          s(" Build for economics only after quality parity on golden eval sets."),
        ],
      ],
      examples: [
        {
          title: "Netflix — data is the model",
          body: "Recommendation quality comes from exclusive viewing behaviour unavailable to any vendor. Build justified by data exclusivity and decade horizon — not because Netflix enjoys GPU bills.",
        },
        {
          title: "Defence contractor — air-gapped inference",
          body: "No external API permitted. On-prem GPU cluster with open-weight models and internal fine-tunes. Buy was compliance-non-starter; build was infrastructure procurement with known TCO signed by the general counsel.",
        },
        {
          title: "High-volume document classification",
          body: "At 2B classifications monthly, API quote exceeded $2M/year. Distilled in-house model projected $400K/year at 96% vs 97% accuracy. Founder accepted 1pp trade for margin survival — build won on spreadsheet, not ideology.",
        },
      ],
    }, {
      kind: "diagram",
      id: "founder-build-buy-partner",
      type: "tree",
      title: "Build vs Buy vs Partner Decision Tree",
      caption:
        "Proprietary data advantage and task shape determine whether you build, buy APIs, or partner — not engineering preference.",
    }),
    buildSection({
      number: "1.4",
      title: "When buying is the right answer",
      subtitle: "The conditions under which API dependency is strategically sound, not just convenient",
      take: "Buy when capability is commoditised, time-to-market dominates, your ML bench is thin, and unit economics work at projected scale. Buying is correct more often than tech Twitter admits — especially from seed to Series A.",
      why: "Hero culture delays launch while teams train models vendors already ship better. Founders who articulate buy conditions ship revenue; founders who default to build ship science projects.",
      paragraphs: [
        [
          s("Commodity capabilities should not be rebuilt. "),
          x(
            "Speech-to-text, generic summarisation, standard embeddings, OCR, translation — vendor parity is high and improving quarterly.",
            "Differentiation lives in workflow, data capture, UX, and domain integration — rarely in the tokenizer.",
          ),
          s(" Buy commodities; build where users feel unique value."),
        ],
        [
          s("Fast timelines favour buy plus integrate. "),
          x(
            "API integration: weeks. SaaS pilot: days to start. In-house fine-tune: months. Pretrain: years.",
            "When GTM window is this quarter and capability is good enough at 85%, buy ships revenue; build ships slides.",
          ),
          s(" Tie buy decisions to dated business milestones, not technical preference."),
        ],
        [
          s("Thin ML bench makes buy the risk reducer. "),
          x(
            "Teams without MLOps, eval culture, and GPU ops buy reliability they cannot yet operate.",
            "Buy is a bridge: integrate now, hire ML depth, revisit fine-tune when prompts and evals prove the use case.",
          ),
          s(" Buying is sequencing maturity, not surrendering differentiation."),
        ],
      ],
      examples: [
        {
          title: "Meeting transcription — pure buy",
          body: "Sales call notes needed transcription within 3 weeks. Whisper-class APIs within 2% WER of custom training. Audio was not proprietary — no moat in ASR. Buy freed engineering for CRM workflow differentiation.",
        },
        {
          title: "Series A startup — API-first until PMF",
          body: "Zero ML hires, six-month runway. Founder mandated API-first for all AI features until task completion exceeded 80% on two use cases. Avoided premature fine-tune spend. Post-PMF, hired ML lead to optimise COGS — correct sequencing.",
        },
        {
          title: "Enterprise search — buy platform, build connectors",
          body: "Glean-class vendor handled retrieval quality and security model. Founder bought platform, built custom ERP connectors and permission sync — hybrid where buy wins on search core, build wins on integration depth.",
        },
      ],
    }),
    buildSection({
      number: "1.5",
      title: "When partnering is the right answer",
      subtitle: "Joint ventures, data partnerships, and model licensing — the middle path",
      take: "Partner when the asset is exclusive data, regulated distribution, or specialised capability you cannot hire in time — and neither buy nor build alone closes the gap. Partnership trades equity, revenue share, or exclusivity for something APIs cannot sell.",
      why: "Founders ignore partnering because it is messier than a vendor contract and slower than an API key. In regulated verticals and data-scarce markets, it is often the only path to a real moat.",
      paragraphs: [
        [
          s("Data partnerships create training signal money cannot buy. "),
          x(
            "Hospital system exclusive notes, insurer claims history, manufacturer sensor logs — partners provide data you cannot scrape or purchase.",
            "Structure: exclusivity window, usage rights, model ownership, and what happens if the partnership ends.",
          ),
          s(" The contract is as important as the data."),
        ],
        [
          s("Model licensing sits between buy and build. "),
          x(
            "License fine-tuned weights or domain adapters without acquiring the team. Co-develop models with shared IP and revenue splits.",
            "Partner path works when regulatory approval requires a named institution or when vendor will not sell raw API access.",
          ),
          s(" Model licensing is build without hiring researchers."),
        ],
        [
          s("Joint ventures and acqui-hire accelerate capability. "),
          x(
            "JV: combine your distribution with partner's data or compliance status. Acqui-hire: buy team plus IP when recruiting timeline exceeds runway.",
            "Partner when clock and capability gap are both existential — not when you are avoiding a hard build/buy decision.",
          ),
          s(" Every partnership needs an exit clause and IP map on day one."),
        ],
      ],
      examples: [
        {
          title: "Health system data partnership",
          body: "Clinical AI startup partnered with regional hospital network for de-identified notes exclusive for 36 months. Gave 8% revenue share. Data moat impossible via API. Partner path was the only diligence-passing strategy for FDA-adjacent workflows.",
        },
        {
          title: "Automotive sensor JV",
          body: "Fleet analytics startup JV'd with Tier-1 supplier for proprietary telematics feed. Build would take years to replicate sensor network; buy had no vendor with equivalent coverage. JV traded equity for exclusive data access.",
        },
        {
          title: "Acqui-hire for NLP team",
          body: "Document AI startup acqui-hired four-person team with production parsing pipeline for $900K. Build timeline was 14 months; runway was 10. Partner via acquisition bought capability buy and build could not deliver in time.",
        },
      ],
    }),
    buildSection({
      number: "1.6",
      title: "The total cost of ownership model",
      subtitle: "How to calculate the real cost of build vs buy over a three-year horizon",
      take: "TCO includes implementation, recurring run rate, hidden data and labelling costs, opportunity cost of headcount, and exit/migration cost. Founders who compare API monthly bill to one GPU invoice make catastrophic capital allocation errors.",
      why: "Boards approve build decisions on year-one CapEx and discover year-three OpEx crisis. A three-year TCO model is how you defend runway and avoid 'cheap' builds that become permanent cost centres.",
      paragraphs: [
        [
          s("Build TCO starts with people, not GPUs. "),
          x(
            "Minimal in-house team: 2 ML engineers, 1 data engineer, 0.5 MLOps — $800K–$1.2M/year fully loaded before infrastructure.",
            "Add: labelling ($50K–$500K per serious fine-tune), GPU ($2K–$50K/month depending on scale), and 35% ongoing maintenance sprint load post-launch.",
          ),
          s(" Compare to buy integration: often 2–3 engineers for 8–12 weeks."),
        ],
        [
          s("Buy TCO scales with success — model it at 3× and 10×. "),
          x(
            "Per-token API: unpredictable at viral growth. Enterprise minimums: $100K–$500K/year floors. SaaS per-seat: predictable until MAU explodes.",
            "Include: integration maintenance, re-embedding on vendor change, legal review, and enterprise tier premiums for no-training clauses.",
          ),
          s(" A feature profitable at 1M tokens/month may destroy margin at 50M."),
        ],
        [
          s("Opportunity cost belongs on the spreadsheet. "),
          x(
            "Every senior ML hire not working on core differentiation is a feature quarter lost.",
            "Ask: 'If we bought this tomorrow, what would our team build instead?' If the answer is strategic, buy may free capacity.",
          ),
          s(" TCO without opportunity cost favours build by omission."),
        ],
      ],
      examples: [
        {
          title: "Retail demand forecast — build ate the roadmap",
          body: "In-house LSTM team for 18 months matched vendor baseline accuracy. Zero incremental revenue features shipped. Four engineer-years exceeded ten years of vendor license. TCO post-mortem: build without differentiation hypothesis is sunk roadmap.",
        },
        {
          title: "Token bill shock — support bot",
          body: "Marketing campaign 8×'d support bot usage. Monthly API spend went $12K → $94K in one cycle. TCO model had assumed linear growth. Renegotiated enterprise rate and added usage caps. Buy TCO now includes traffic spike scenarios.",
        },
        {
          title: "Three-year TCO comparison — document AI",
          body: "Founder modelled: API path $420K over 3 years at current volume; build path $1.8M including headcount and labelling. Build break-even at 8× volume in year 4 — deferred build, chose buy with annual re-review trigger.",
        },
      ],
    }),
    buildSection({
      number: "1.7",
      title: "The reversibility test",
      subtitle: "Which decision is easier to undo — and how to weight that in your analysis",
      take: "Weight decisions by how fast and cheaply you can reverse them. API integrations with abstraction layers are reversible in weeks. Fine-tuned proprietary weights on deprecated base models are not. Pretraining is effectively irreversible. Prefer reversible paths until strategic importance is proven.",
      why: "Founders treat infrastructure decisions as permanent because reversing feels like admitting error. Investors and boards prefer founders who preserve optionality until data proves commitment is warranted.",
      paragraphs: [
        [
          s("Reversibility tiers map to architecture choices. "),
          x(
            "High reversibility: prompt changes, model provider swap behind abstraction layer, RAG with standard embeddings. Medium: fine-tuned adapters tied to specific base model versions. Low: custom pretrain, deep SaaS workflow embedding, proprietary vector formats.",
            "Score each path: 'What does undo cost in dollars and calendar weeks?'",
          ),
          s(" If undo exceeds one quarter of runway, treat as irreversible."),
        ],
        [
          s("Design for portability before you need it. "),
          x(
            "Model-agnostic interfaces, versioned prompts in git, eval harnesses that run across providers, data export rights in contracts.",
            "Portability has a tax: 10–20% slower initial development. The tax is cheaper than emergency migration.",
          ),
          s(" Reversibility is an architectural requirement, not a post-crisis regret."),
        ],
        [
          s("Weight reversibility higher at seed, lower at scale. "),
          x(
            "Seed: you are still discovering product-market fit — preserve optionality. Series B with proven moat: irreversible build may be correct.",
            "The reversibility test prevents premature commitment; it does not prevent commitment when data supports it.",
          ),
          s(" Stage-adjust the weight, do not ignore the test."),
        ],
      ],
      examples: [
        {
          title: "Embedding lock-in — 6-week migration",
          body: "Product built on Vendor A embeddings (1536-dim). Vendor B offered 30% savings but different dimensions — full re-index of 40M chunks, six-week migration, two-week quality regression. Reversibility score at decision time: low. Founder now documents embedding choice as 2-year commitment.",
        },
        {
          title: "Abstraction layer payoff",
          body: "Seed startup built LiteLLM-style provider abstraction from day one. GPT-4 price increase triggered switch to Claude for 60% of traffic in nine days. Migration cost: two engineer-weeks. High reversibility by design.",
        },
        {
          title: "Fine-tune orphan — irreversible surprise",
          body: "Cloud provider deprecated base model v3 in 90 days. Four production adapters pinned to v3. Undo required full retrain on new base — 11-week sprint. Reversibility test would have flagged adapter coupling as medium-low reversibility.",
        },
      ],
    }),
    buildSection({
      number: "1.8",
      title: "Founder decision lens: the build vs buy decision document",
      subtitle: "The one-page framework to complete before committing to any AI infrastructure path",
      take: "Before any AI infrastructure commitment, complete a one-page decision document: strategic bet, five-axis scores, three-year TCO, reversibility rating, exit plan, and named owner. If you cannot fill every field, you are not ready to sign.",
      why: "The document forces alignment between founder, engineering, finance, and legal before sunk cost makes honest conversation politically expensive. It is also due diligence gold.",
      paragraphs: [
        [
          s("Section one: the one-sentence strategic bet. "),
          x(
            "'We integrate frontier models into workflow X' → buy-first. 'We train on proprietary data Y' → build-first. 'We need exclusive data Z' → partner-first.",
            "The bet determines default path before axes refine it.",
          ),
          s(" No bet sentence means postpone the decision."),
        ],
        [
          s("Section two: five-axis scores and weighted recommendation. "),
          x(
            "Rate 1–5 on strategic importance, data sensitivity, cost at scale, time to market, team capability. Weight by stage: seed weights time and capability higher; Series B weights cost at scale higher.",
            "Document dissent: if CTO and CEO score differently, that gap is a meeting, not a footnote.",
          ),
          s(" The scorecard beats the loudest voice in the room."),
        ],
        [
          s("Section three: TCO, reversibility, and review trigger. "),
          x(
            "Three-year TCO for top two paths. Reversibility tier and estimated undo cost. Calendar review trigger: re-run document when volume hits 3× or runway drops below 9 months.",
            "Store in data room. Investors ask for this in diligence — having it signals operational maturity.",
          ),
          s(" A decision without a review date is a decision you will not revisit until crisis."),
        ],
      ],
      examples: [
        {
          title: "Board-approved decision document",
          body: "Founder presented one-page build/buy doc with five-axis scores and 3-year TCO. Board approved $400K vendor contract because analysis was explicit. Peer founder with identical need got denied — no document, only 'we need the best model.'",
        },
        {
          title: "Diligence request — Series A",
          body: "Lead investor requested infrastructure decision log. Founder produced six dated one-pagers showing evolution from buy to hybrid as volume grew. Transparency accelerated diligence; competitor with oral history stalled three weeks.",
        },
        {
          title: "Dissent captured — partner vs buy",
          body: "CTO scored build 4/5 on strategic importance; CEO scored 2/5. Documented gap triggered workshop. Resolved as buy-now with 6-month build trigger if task completion plateaued. Dissent in writing prevented silent resentment.",
        },
      ],
    }),
  ],
  quiz: [
    {
      q: "You are seed-stage with six months runway, no ML hires, building a customer-support agent on public help docs. Five-axis framework result: low strategic importance, low data sensitivity, high time-to-market pressure. Correct default path?",
      options: [
        "Build — owning the model is always strategic.",
        "Buy API + build RAG integration shell.",
        "Partner with a hospital for training data.",
        "Pretrain a domain foundation model.",
      ],
      correct: 1,
      correctFeedback:
        "Right. Thin team, fast timeline, commodity capability → buy base intelligence, build product integration. Partner and pretrain are wrong stage and wrong data.",
      wrongFeedback:
        "Score all five axes. Seed support on public docs is buy-first. Re-read sections 1.2 and 1.4.",
    },
    {
      q: "Your moat is a fraud model trained on ten years of proprietary transaction labels. Regulatory rules prohibit sending data to third-party APIs. Which path is mandatory?",
      options: [
        "Buy GPT-4 API with clever prompts.",
        "White-label vertical SaaS.",
        "Build or private-deploy on owned infrastructure.",
        "Defer AI until Series C.",
      ],
      correct: 2,
      correctFeedback:
        "Right. Data sensitivity and regulatory constraints veto public API buy. Build/private deploy is requirement, not preference.",
      wrongFeedback:
        "Regulatory veto overrides convenience. Re-read sections 1.3 and 1.2 data sensitivity axis.",
    },
    {
      kind: "categorize",
      q: "Sort each scenario to the best primary path.",
      categories: ["Build", "Buy", "Partner"],
      items: [
        { text: "Exclusive hospital notes access for clinical AI — 36-month exclusivity deal.", category: 2 },
        { text: "Meeting transcription for internal sales notes — commodity ASR.", category: 1 },
        { text: "Proprietary recommendation on exclusive behavioural logs at 50M inferences/month.", category: 0 },
        { text: "Acqui-hire 4-person NLP team when runway is 10 months and build needs 14.", category: 2 },
        { text: "GPT-4 RAG support bot on public docs at seed stage.", category: 1 },
        { text: "Air-gapped defence inference with no external API.", category: 0 },
      ],
      correctFeedback:
        "Right. Partner for exclusive data and acqui-hire. Buy for commodities and seed speed. Build for moat, scale economics, and compliance walls.",
      wrongFeedback:
        "Match path to moat, data exclusivity, compliance, and timeline. Re-read sections 1.3–1.5.",
    },
    {
      q: "Three-year TCO shows API path $420K and build path $1.8M at current volume. Build breaks even only at 8× volume in year 4. Founder-correct decision?",
      options: [
        "Build anyway — ownership matters.",
        "Buy now with annual TCO re-review trigger at 3× volume.",
        "Skip AI entirely.",
        "Pretrain from scratch for optionality.",
      ],
      correct: 1,
      correctFeedback:
        "Right. TCO and stage favour buy with explicit review trigger. Preserves runway and optionality until scale justifies build.",
      wrongFeedback:
        "TCO and reversibility matter. Build before break-even burns runway. Re-read sections 1.6 and 1.7.",
    },
    {
      kind: "order",
      q: "Order the steps for the one-page build/buy decision document (first step at top).",
      prompt: "Drag to arrange the correct sequence.",
      items: [
        "Write the one-sentence strategic bet.",
        "Score five axes and note dissent.",
        "Model three-year TCO for top two paths.",
        "Rate reversibility and define review trigger.",
      ],
      correctFeedback:
        "Right. Bet → axes → TCO → reversibility/review. Strategy before spreadsheet before commitment.",
      wrongFeedback:
        "Start with strategic bet, then axes, then TCO, then reversibility. Re-read section 1.8.",
    },
    {
      q: "You chose Vendor A embeddings (1536-dim) and indexed 40M chunks. Vendor B offers 30% cost savings but different dimensions. What does reversibility analysis teach?",
      options: [
        "Embedding choice is high reversibility — switch anytime.",
        "Embedding choice is low reversibility — treat as multi-year commitment with migration cost modeled upfront.",
        "Reversibility does not apply to buy decisions.",
        "Always choose cheapest vendor annually.",
      ],
      correct: 1,
      correctFeedback:
        "Right. Embedding dimension lock-in forces full re-index — low reversibility. Model undo cost before committing.",
      wrongFeedback:
        "Architectural coupling lowers reversibility even in buy paths. Re-read section 1.7.",
    },
  ],
});
