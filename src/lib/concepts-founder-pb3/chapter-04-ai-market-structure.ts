import { buildChapter, buildSection, s, x, sectionWithDiagram } from "../concepts-pb4-helpers";

export const chapter04AiMarketStructure = buildChapter({
  slug: "founder-ai-market-structure",
  number: 4,
  shortTitle: "AI Market Structure",
  title: "Market Structure & Competitive Dynamics in AI",
  readingMinutes: 24,
  summary:
    "Understanding the game you are playing before you place your bets — value chain position, consolidation dynamics, commoditisation timing, and competitive response.",
  keyTakeaway:
    "Application-layer AI offers the largest near-term revenue and the thinnest default defensibility. Market structure analysis tells you whether you are building a company or a feature — and which strategic moves match the consolidation pattern of your category.",
  pmCallout:
    "As a founder: your market structure choice is as consequential as your model choice. Pick the layer and competitive game you can win — not the layer that looks biggest on a slide.",
  sections: [
    sectionWithDiagram({
      number: "4.1",
      title: "The AI value chain — where the money flows and where it doesn't",
      subtitle: "Foundation layer, infrastructure layer, application layer — where startups win and where they get crushed",
      take: "Foundation models capture platform economics and R&D scale. Infrastructure captures serving, retrieval, and observability rents. Applications capture workflow value — but compete with both unless moats are explicit. Founders must know which layer they are fighting in.",
      why: "Layer confusion drives mispriced rounds and wrong hiring. A seed application company that acts like a foundation company burns runway on GPUs; an infra company without scale dies on sales cycles.",
      paragraphs: [
        [
          s("Foundation layer: few winners, massive capital, API distribution. "),
          x(
            "OpenAI, Google, Anthropic, Meta — intelligence as a service.",
            "Startups rarely compete here post-2023 except in narrow open-weight niches or national stacks.",
          ),
          s(" If you are here, your investor story is compute and research, not SaaS multiples."),
        ],
        [
          s("Infrastructure layer: picks and shovels with consolidation pressure. "),
          x(
            "Vector DBs, orchestration, evals, labelling, MLOps — high technical merit, crowded markets.",
            "Winners often become features inside clouds or suites unless they own a critical control point.",
          ),
          s(" Infra startups need wedge + expansion like applications — TAM alone is insufficient."),
        ],
        [
          s("Application layer: largest surface area, default lowest defensibility. "),
          x(
            "Revenue lives closest to customer pain; competition lives closest to customer wallet incumbents guard.",
            "Winning requires vertical depth, data, or distribution — not model access alone.",
          ),
          s(" Most founders belong here — with eyes open about danger zone dynamics."),
        ],
      ],
      examples: [
        {
          title: "Cohere — foundation/infrastructure hybrid",
          body: "Cohere competes on enterprise foundation models and deployment — capital-intensive layer with different GTM than vertical SaaS. Founders comparing themselves to Cohere without similar funding and infra story misposition.",
        },
        {
          title: "Pinecone — infra with consolidation risk",
          body: "Vector search became feature in cloud databases and suites. Pinecone's path required enterprise control points beyond 'we store embeddings.' Infra layer winners must articulate escape from commoditisation.",
        },
        {
          title: "Vertical SaaS + AI — application layer honesty",
          body: "Field service AI scheduling sells to ops leaders, not ML researchers. Value chain position is application; moat is workflow + signal. Clear layer positioning focused GTM and investor narrative.",
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
    sectionWithDiagram({
      number: "4.2",
      title: "Why the application layer is both the opportunity and the danger zone",
      subtitle: "High revenue potential, low defensibility — the tension every application-layer founder must manage",
      take: "Applications touch budgets and outcomes — where customers pay. They also sit in the crosshairs of suites and foundation providers adding features. Opportunity and danger are the same address.",
      why: "Ignoring the danger zone produces companies that grow to $3M ARR then flatten when incumbents bundle. Managing it produces companies that deepen moats while revenue scales.",
      paragraphs: [
        [
          s("Revenue proximity is the opportunity. "),
          x(
            "Customers buy outcomes in their workflow — claims processed, contracts reviewed, calls summarised.",
            "Application layer captures willingness-to-pay directly; infra and foundation capture rent on builders.",
          ),
          s(" Founders who solve painful jobs can price on value, not tokens."),
        ],
        [
          s("Defensibility proximity is the danger. "),
          x(
            "Suites add AI features across existing seats — distribution shock overnight.",
            "Thin applications become demos for incumbents' roadmaps.",
          ),
          s(" Danger zone management is moat investment concurrent with growth, not after."),
        ],
        [
          s("Strategic posture: land deep, expand inside account, avoid feature races you cannot win. "),
          x(
            "Win on compliance, integration depth, and account-specific personalisation.",
            "Do not win on 'we also summarise emails' unless summarisation is embedded in a proprietary workflow.",
          ),
          s(" Application layer winners are boring in GTM, exciting in retention."),
        ],
      ],
      examples: [
        {
          title: "Salesforce Einstein GPT — suite bundling shock",
          body: "Standalone sales AI tools faced bundling against CRM distribution. Survivors integrated deeper into vertical sales motions or owned data Salesforce lacked. Danger zone strategy was differentiation by depth, not feature checklist.",
        },
        {
          title: "ServiceNow AI — workflow danger zone",
          body: "IT workflow AI startups compete where ServiceNow embeds intelligence in tickets and change management. Moat requires owning steps ServiceNow will not customise for niche industries.",
        },
        {
          title: "Application winner — vertical claims",
          body: "Claims AI for specialty insurance lines embedded in adjusters' daily tools with regulatory audit trails. Revenue at application layer; moat via workflow + proprietary loss data — danger zone acknowledged and mitigated.",
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
      number: "4.3",
      title: "Winner-takes-all vs winner-takes-most vs fragmented markets in AI",
      subtitle: "Which AI markets will consolidate and which will remain fragmented — and how to tell the difference",
      take: "Market structure varies by category: some AI markets consolidate around data network effects and distribution; others fragment by vertical, geography, and regulation. Founders must diagnose structure before choosing TAM and GTM.",
      why: "Misreading structure drives wrong fundraising targets and competitive strategy. Winner-take-all markets justify land grabs; fragmented markets justify profitable niches.",
      paragraphs: [
        [
          s("Winner-takes-all signals: strong network effects, low differentiation tolerance, global scale economies. "),
          x(
            "Consumer generative platforms with social loops approached WTA dynamics early.",
            "Enterprise vertical workflows rarely WTA — fragmentation by industry and compliance.",
          ),
          s(" Do not assume WTA because the press says 'AI is huge.'"),
        ],
        [
          s("Winner-takes-most: platform leaders plus long tail of specialists. "),
          x(
            "Cloud AI infra, general developer tools — a few large winners and niche players.",
            "Most B2B AI markets look like this: a platform layer and vertical specialists.",
          ),
          s(" Position as specialist with platform partnerships, not as parallel platform without capital."),
        ],
        [
          s("Fragmented markets reward depth and capital efficiency. "),
          x(
            "Dental, construction, municipal government — many winners by sub-vertical.",
            "Lower ceiling per company, faster path to profitability, different investor fit.",
          ),
          s(" Fragmentation is not failure — it is structure. Price strategy accordingly."),
        ],
      ],
      examples: [
        {
          title: "Search — WTA history, AI disruption",
          body: "Traditional search was WTA; AI answers may redistribute value across publishers, browsers, and vertical knowledge bases. Founders should not import old WTA assumptions into new retrieval dynamics.",
        },
        {
          title: "Legal tech — fragmented by practice area",
          body: "Litigation, corporate, immigration, and family law have different workflows and liability. Multiple AI winners coexist. Market structure diagnosis prevented a 'one legal GPT' strategy mistake.",
        },
        {
          title: "Developer copilots — takes-most",
          body: "IDE-embedded players capture majority; long tail of domain-specific coding tools (hardware, PLC, bioinformatics) survives on depth. Structure suggested partnership with platforms plus vertical focus.",
        },
      ],
    }),
    buildSection({
      number: "4.4",
      title: "The commoditisation clock",
      subtitle: "Why capabilities that cost millions in 2022 cost cents in 2025 — and how to build ahead of it",
      take: "Capabilities deflate on predictable curves as models improve and providers compete on price. Strategy assumes today's differentiator is tomorrow's baseline — and invests in assets that appreciate as capabilities commoditise.",
      why: "Founders who price and build as if capabilities stay scarce get margin-compressed overnight. Founders who build ahead of the clock capture share during transitions.",
      paragraphs: [
        [
          s("Track capability classes, not SKUs. "),
          x(
            "Speech, vision, reasoning, tool use — each class commoditises on its own schedule.",
            "Your roadmap should list which class you depend on and expected deflation quarter.",
          ),
          s(" Finance should model inference cost down 30–50% annually in many categories."),
        ],
        [
          s("Build ahead by moving value down-stack into workflow and data. "),
          x(
            "When generation commoditises, evaluation, compliance, and orchestration may still differentiate.",
            "When retrieval commoditises, proprietary corpora and ranking signal still differentiate.",
          ),
          s(" Ascend the stack as capabilities descend in price."),
        ],
        [
          s("Commoditisation can expand TAM — if unit economics work on the way down. "),
          x(
            "Cheaper inference enables use cases previously unit-negative.",
            "Founders who model cost curves capture expansion; those who fixed price on old costs miss volume.",
          ),
          s(" The clock is threat and opportunity — strategy chooses which."),
        ],
      ],
      examples: [
        {
          title: "Embedding search cost collapse",
          body: "Embedding and vector search costs dropped orders of magnitude. Startups that assumed high infra margin failed; those that passed savings into more use cases per account expanded ARPU via usage.",
        },
        {
          title: "GPT-4 price cuts — margin shock",
          body: "API price reductions improved gross margin for thoughtful unit economics models overnight — and killed companies whose pricing assumed scarcity. Commoditisation clock demanded dynamic pricing reviews.",
        },
        {
          title: "Ahead of clock — compliance layer",
          body: "Medical documentation startups invested in HIPAA audit and clinician trust while ASR commoditised. When transcription became cheap, winners sold compliance + workflow, not wav files.",
        },
      ],
    }),
    buildSection({
      number: "4.5",
      title: "Vertical AI vs horizontal AI — where defensibility actually lives",
      subtitle: "Why the durable winners in AI applications are vertical-specific, not general-purpose",
      take: "Horizontal AI races end in suite bundling. Vertical AI races end in domain moats — ontology, liability, integrations, and buyer trust. Durable application winners look vertical even when technology is general.",
      why: "TAM slides favour horizontal stories; retention data favours vertical depth. Market structure rewards founders who accept smaller initial ponds with stronger fences.",
      paragraphs: [
        [
          s("Horizontal markets compress margins through competition and bundling. "),
          x(
            "Many players, similar APIs, price pressure, feature parity in months.",
            "Customers default to incumbent suite 'good enough' unless depth is compelling.",
          ),
          s(" Horizontal can work with extraordinary distribution — rare at seed."),
        ],
        [
          s("Vertical markets trade label size for barrier height. "),
          x(
            "Industry-specific compliance, data formats, buyer committees, and liability frameworks slow incumbents.",
            "Domain language models and UX reduce override rates — measurable advantage.",
          ),
          s(" Vertical is a moat strategy expressed as market choice."),
        ],
        [
          s("Expansion within vertical beats horizontal sprawl. "),
          x(
            "Own adjacencies on same object graph before crossing industries.",
            "Cross-industry horizontal platform is late-game move, not seed positioning.",
          ),
          s(" Investors reward vertical depth with credible cross-sell more than TAM circles."),
        ],
      ],
      examples: [
        {
          title: "Harvey vs generic legal chat",
          body: "Vertical legal workflows and firm integrations outperformed generic legal Q&A tools in retention and pricing. Market structure favoured domain depth.",
        },
        {
          title: "Horizontal writing assistants — churn basin",
          body: "Many horizontal tools saw initial adoption then churn to native suite features. Vertical writing in regulated pharma marketing retained customers due to compliance workflows.",
        },
        {
          title: "Agriculture input logistics AI",
          body: "Narrow vertical with seasonal peaks, proprietary supplier data, and ERP integrations incumbents ignored. Horizontal ag-tech platforms missed the wedge; vertical specialist won county-by-county.",
        },
      ],
    }),
    buildSection({
      number: "4.6",
      title: "Competitive response planning",
      subtitle: "What to do when a well-funded competitor enters your market — the strategic options",
      take: "Competitor entry is inevitable. Responses include deepen moat, accelerate data partnerships, narrow wedge, merge, or pivot segment — not panic price cuts or feature races without economics.",
      why: "Founders without a response playbook react emotionally and burn runway. Founders with pre-written triggers act decisively when the news hits.",
      paragraphs: [
        [
          s("Diagnose the threat: capability, distribution, or capital? "),
          x(
            "Better model alone means deepen workflow moat, not benchmark wars. Better distribution means partnership or vertical niche. More capital means avoid land-grab markets and focus retention.",
            "Diagnose whether the threat is capability, distribution, or capital — response must match threat type.",
          ),
          s(" Response must match threat type."),
        ],
        [
          s("Pre-commit triggers before competitor announcements. "),
          x(
            "If well-funded horizontal entrant: accelerate vertical compliance certifications.",
            "If incumbent bundles free: shift sales to embedded accounts with switching costs.",
          ),
          s(" Triggers turn strategy into muscle memory."),
        ],
        [
          s("Sometimes the right response is cooperate or exit segment. "),
          x(
            "White-label to stronger distributor, acqui-hire, or pivot adjacent wedge.",
            "Ego-driven fights in WTA markets against better-funded players destroy companies.",
          ),
          s(" Capital allocation discipline is competitive response too."),
        ],
      ],
      examples: [
        {
          title: "Incumbent bundle response — niche down",
          body: "HR policy chat startup faced Microsoft Copilot HR templates. Response: pivot to unionised workforce policy compliance in manufacturing — too niche for suite, high pain. Retention recovered.",
        },
        {
          title: "Well-funded competitor — partnership",
          body: "Vertical insurtech competitor raised $80M. Smaller player partnered as exclusive AI layer for mutual's agent network — distribution moat over feature race. Response chose channel over confrontation.",
        },
        {
          title: "Bad response — price war",
          body: "Two startups raced to zero price in generic doc summarisation. Both died on inference costs without moats. Market structure made price war suicidal; depth would have been response.",
        },
      ],
    }),
    buildSection({
      number: "4.7",
      title: "Founder decision lens: Porter's Five Forces rewritten for your AI market",
      subtitle: "The competitive analysis framework adapted for the dynamics that are unique to AI businesses",
      take: "Classic Five Forces still apply — but supplier power of foundation models, threat of commoditisation, and substitute intelligence from incumbents must be explicit. Rewrite each force for your AI category before strategic bets.",
      why: "This exercise surfaces uncomfortable truths before fundraising. It is the board-ready version of 'do we understand our market structure?'",
      paragraphs: [
        [
          s("Supplier power: foundation model providers and cloud hosts. "),
          x(
            "Score pricing leverage, data terms, dual-role competition risk.",
            "Mitigation: multi-model, contractual protections, architecture portability.",
          ),
          s(" Supplier power is often the highest force in AI applications."),
        ],
        [
          s("Threat of new entrants and substitutes: incumbents plus open source. "),
          x(
            "Substitutes include manual services, rules engines, and suite features — not just startups.",
            "Entrant threat includes provider native features — treat providers as entrants.",
          ),
          s(" Barriers are workflow depth and data, not 'we use AI.'"),
        ],
        [
          s("Buyer power, rivalry, and complementors in AI ecosystems. "),
          x(
            "Enterprise buyers consolidate vendors — high power without switching costs.",
            "Complementors (SI partners, marketplaces) can be moat or margin leak — choose deliberately.",
          ),
          s(" Document force scores and mitigation per force on one page quarterly."),
        ],
      ],
      examples: [
        {
          title: "Five Forces on clinical documentation",
          body: "Supplier power: high (few ASR/LLM providers). Buyer power: high (health systems). Rivalry: rising. Substitutes: human scribes. Mitigation: EHR embedding + compliance + outcome data. Analysis justified premium pricing and partnership strategy.",
        },
        {
          title: "Five Forces on generic marketing copy",
          body: "Supplier power: medium. Buyer power: high. Rivalry: extreme. Substitutes: many. Entrants: trivial. Analysis killed venture path; founder pivoted to agency+software hybrid with honest economics.",
        },
        {
          title: "Board Five Forces review",
          body: "Quarterly force score update triggered multi-model mandate and SI partnership pause (margin leak). Market structure framework turned into operating decisions.",
        },
      ],
    }),
  ],
  quiz: [
    {
      q: "For most seed-stage founders, which AI value chain layer offers the best fit IF moat strategy is explicit?",
      options: [
        "Foundation model training",
        "Application layer with vertical workflow depth",
        "Only infrastructure — applications are dead",
        "None — AI is uninvestable",
      ],
      correct: 1,
      correctFeedback:
        "Right. Applications touch customer value; success requires explicit moat against danger zone dynamics. Re-read sections 4.1–4.2.",
      wrongFeedback:
        "Most seed founders build applications — with eyes open about defensibility. Re-read sections 4.1–4.2.",
    },
    {
      kind: "categorize",
      q: "Match each market to its most likely structure.",
      categories: ["Winner-takes-most / WTA", "Fragmented / vertical niches"],
      items: [
        { text: "Consumer social generative platform with network effects.", category: 0 },
        { text: "AI tools for municipal permitting workflows by region.", category: 1 },
        { text: "General-purpose IDE copilot market.", category: 0 },
        { text: "Specialty veterinary practice scheduling and records.", category: 1 },
      ],
      correctFeedback:
        "Right. Consumer platforms and broad dev tools consolidate; many B2B verticals stay fragmented.",
      wrongFeedback:
        "Diagnose structure per category — not all AI markets are winner-take-all. Re-read section 4.3.",
    },
    {
      q: "The commoditisation clock implies founders should:",
      options: [
        "Assume today's AI capability stays scarce forever.",
        "Build as if core capabilities deflate on schedule — invest in workflow, data, and trust that appreciate.",
        "Avoid AI entirely.",
        "Only compete on foundation models.",
      ],
      correct: 1,
      correctFeedback:
        "Right. Plan for capability deflation; compound moat assets. Re-read section 4.4.",
      wrongFeedback:
        "Capabilities get cheaper; moats and workflow depth should appreciate. Re-read section 4.4.",
    },
    {
      q: "A well-funded horizontal competitor enters your vertical AI niche. Often the best first response is:",
      options: [
        "Match their burn with a price war.",
        "Deepen vertical moat — compliance, integrations, data partnerships — per pre-written triggers.",
        "Immediately pivot to a different industry without analysis.",
        "Ignore them — verticals are immune.",
      ],
      correct: 1,
      correctFeedback:
        "Right. Pre-planned moat deepening beats panic feature races. Re-read section 4.6.",
      wrongFeedback:
        "Competitive response should match threat type — often depth, not price war. Re-read section 4.6.",
    },
    {
      kind: "order",
      q: "Order layers of the AI value chain from closest to end-customer workflow (top) to farthest (bottom).",
      prompt: "Drag to arrange closest to customer workflow (top) to farthest infrastructure (bottom).",
      items: [
        "Application layer — workflow products customers buy for outcomes.",
        "Infrastructure layer — vector DBs, orchestration, MLOps.",
        "Foundation layer — frontier models and APIs.",
      ],
      correctFeedback:
        "Exactly. Applications touch budgets; foundation is furthest but exerts supplier power. Re-read section 4.1.",
      wrongFeedback:
        "Applications are closest to customer pain; foundation models are the base layer. Re-read section 4.1.",
    },
    {
      q: "In Porter's Five Forces for AI, which force is often unusually high for application-layer startups?",
      options: [
        "Supplier power from foundation model providers",
        "No supplier power — APIs are free",
        "Zero rivalry — AI is new",
        "Buyer power is always low",
      ],
      correct: 0,
      correctFeedback:
        "Right. Model providers exert significant supplier and dual-role competitive power. Re-read section 4.7.",
      wrongFeedback:
        "Foundation model providers are powerful suppliers and potential competitors. Re-read section 4.7.",
    },
  ],
});
