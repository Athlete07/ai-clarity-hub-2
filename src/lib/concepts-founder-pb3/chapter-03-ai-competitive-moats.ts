import { buildChapter, buildSection, s, x, sectionWithDiagram } from "../concepts-pb4-helpers";

export const chapter03AiCompetitiveMoats = buildChapter({
  slug: "founder-ai-competitive-moats",
  number: 3,
  shortTitle: "AI Competitive Moats",
  title: "AI Competitive Moats — Where Defensibility Actually Lives",
  readingMinutes: 26,
  summary:
    "The honest answer to 'what happens if OpenAI builds this.' Capabilities via API are not moats — proprietary data, distribution, switching costs, workflow depth, and trust are.",
  keyTakeaway:
    "Any capability you rent from a foundation model provider is not defensible. Moats in AI are slow to build and that slowness is the point — they compound while model features commoditise quarterly.",
  pmCallout:
    "As a founder: when you cannot answer 'what do we have if the model is free for everyone,' you are building a demo business. Map your moat honestly before your competitor's fundraise forces you to.",
  sections: [
    buildSection({
      number: "3.1",
      title: "Why AI capabilities are not a moat",
      subtitle: "Any capability you access via API, your competitor can access via the same API tomorrow",
      take: "Model capabilities diffuse at the speed of provider roadmaps. Your fine-tuned edge lasts months; GPT-N+1 resets the baseline. Moats must live outside the model weights you do not own.",
      why: "Founders who pitch 'better AI' without moat mechanics get crushed in diligence by the OpenAI question. Investors are not asking about today's benchmark — they are asking about year-three defensibility.",
      paragraphs: [
        [
          s("Capability moats assumed secret recipes. "),
          x(
            "In 2019, a better classifier could win. In 2026, frontier capabilities are API SKUs with release notes.",
            "Your competitor's 'secret model' is often the same endpoint with a different system prompt.",
          ),
          s(" Capability is necessary; capability alone is not sufficient for venture returns."),
        ],
        [
          s("Commoditisation clock runs faster than your sales cycle. "),
          x(
            "Features you ship in Q2 may be native in the provider UI in Q4.",
            "Moats that do not depend on exclusive capability — data, workflow, distribution — survive the clock.",
          ),
          s(" Build where the clock helps you (accumulating assets), not where it hurts (feature parity)."),
        ],
        [
          s("The investor shorthand: 'What happens when this is a checkbox?' "),
          x(
            "If your only answer is 'we will fine-tune better,' you are still in capability territory.",
            "Strong answers reference customer switching costs, proprietary corpora, or channel lock-in.",
          ),
          s(" Practice the checkbox question in board meetings before investors ask it cold."),
        ],
      ],
      examples: [
        {
          title: "Code completion — capability commoditised",
          body: "Tab completion moved from differentiators to table stakes across IDEs. Winners kept distribution (GitHub, Cursor) not because the model was unique forever, but because editor integration and workflow were sticky. Capability opened the door; moat held the room.",
        },
        {
          title: "Image generation APIs",
          body: "DALL·E, Midjourney, Stable Diffusion narrowed quality gaps. Standalone 'generate marketing images' apps without brand workflow or asset libraries churned. Moat required campaign workflow and brand corpus — not pixels alone.",
        },
        {
          title: "Seed pitch — 'our model is 4% better'",
          body: "Founder led with benchmark delta on a public dataset. Investor asked provider roadmap timeline; gap was projected to close in one release. Deal died not on quality but on moat absence. Capability slide without moat slide is incomplete.",
        },
      ],
    }),
    sectionWithDiagram({
      number: "3.2",
      title: "The five real moats in AI businesses",
      subtitle: "Proprietary data, distribution, switching costs, workflow integration depth, and brand trust",
      take: "Durable AI companies combine at least one primary moat from the five: data others cannot get, distribution others cannot buy cheaply, switching costs others cannot shortcut, workflow depth others cannot replicate without migration, or trust others have not earned in high-stakes domains.",
      why: "This taxonomy turns vague 'defensibility' slides into an audit. Founders who name primary and secondary moats allocate capital correctly; founders who hand-wave allocate to features.",
      paragraphs: [
        [
          s("Proprietary data: labelled, domain-specific, permissioned, current. "),
          x(
            "Public internet scrapes are not moats — everyone fine-tunes on the same corpus.",
            "Customer-generated outcomes under contract are moats — especially with exclusivity.",
          ),
          s(" Data moats are strongest and slowest."),
        ],
        [
          s("Distribution and switching costs compound differently. "),
          x(
            "Distribution: channel, embedded partnerships, marketplace placement — speeds adoption.",
            "Switching costs: migrated data, trained personalisation, institutional workflows — slows churn.",
          ),
          s(" Best AI businesses build both over time; seed stage usually leads with one."),
        ],
        [
          s("Workflow depth and brand trust matter most in regulated and high-liability domains. "),
          x(
            "Workflow depth: your product is where work happens, not where output is copied.",
            "Brand trust: buyers stake careers on your outputs — earned slowly, lost instantly.",
          ),
          s(" In healthcare, law, and finance, trust is a moat line item on the balance sheet."),
        ],
      ],
      examples: [
        {
          title: "Bloomberg GPT — data + trust moat",
          body: "Financial language models without Bloomberg's permissioned terminal data lack credibility in trading floors. Distribution through terminal + proprietary corpus + trust in market-moving contexts = moat stack competitors cannot API their way into quickly.",
        },
        {
          title: "Canva — distribution + workflow",
          body: "Magic design features are replicable; Canva's template graph, brand kits, and team workflows are not. AI capabilities enhance a moat built on creative ops lock-in, not the other way around.",
        },
        {
          title: "Early-stage moat honesty",
          body: "Seed company named primary moat: switching costs via ERP-embedded approvals. Secondary: data moat in 18 months if override labels hit volume. Investor appreciated staged honesty over pretending data moat existed day one.",
        },
      ],
    }, {
      kind: "diagram",
      id: "founder-data-moat-layers",
      type: "nested",
      title: "Competitive Moat Layers",
      caption:
        "Distribution, proprietary data, and model advantage — the three layers investors underwrite in AI diligence.",
    }),
    sectionWithDiagram({
      number: "3.3",
      title: "Data moats — the strongest and the slowest",
      subtitle: "Why data moats take years to build and why that is actually the point",
      take: "Data moats require volume, label quality, exclusivity, and time — which is exactly why they work. Fast moats get copied; slow moats reward patience and punish tourists.",
      why: "Investors overweight model buzz and underweight data clocks. Founders who articulate the data moat timeline — what accumulates per user per month — earn premium multiples at Series A.",
      paragraphs: [
        [
          s("Not all data is moat-building data. "),
          x(
            "Logs without labels are archaeology, not training signal.",
            "Outcome-labelled data — accept/reject, win/loss, clinician correction — compounds model quality.",
          ),
          s(" Instrument for outcomes, not page views."),
        ],
        [
          s("Exclusivity and consent determine durability. "),
          x(
            "Scraped data moats evaporate in legal challenges or provider policy changes.",
            "Contractual usage rights and customer opt-in create enforceable advantage.",
          ),
          s(" Series B diligence will ask who owns the data and whether it can disappear."),
        ],
        [
          s("Timeline honesty: data moats are back-loaded. "),
          x(
            "Year one: thin signal, heavy human review.",
            "Year three: model quality diverges measurably on your distribution.",
          ),
          s(" Survive the thin years with wedge economics that do not require perfect models on day one."),
        ],
      ],
      examples: [
        {
          title: "Waymo — miles as labelled reality",
          body: "Autonomous driving data moats come from rare edge cases in real miles — not synthetic-only training. Competitors can buy similar models; they cannot buy a decade of structured disengagement labels cheaply. Slow, capital-intensive, defensible.",
        },
        {
          title: "Retail demand forecasting — weak data moat",
          body: "Many retailers had sales history but shared vendors and similar models. Without exclusive signal (store-level inventory moves, proprietary supplier terms), data moat was thin. Differentiation moved to workflow integration with suppliers.",
        },
        {
          title: "Human-in-the-loop as moat bridge",
          body: "Legal AI startup used attorney accept/reject on clauses as labels. Year one economics were ugly; year two override rate dropped 40% on firm-specific style. Data moat emerged from operations design, not from launching earlier.",
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
      number: "3.4",
      title: "Distribution moats in AI",
      subtitle: "Why the company that reaches users first, even with an inferior model, often wins",
      take: "In many AI categories, distribution beats marginal model quality — especially when products are good enough and embedded where work happens. The startup that owns the channel compounds data and switching costs while the better model ships in a lab.",
      why: "Technical founders underinvest in GTM assuming quality wins. History shows embedded distribution (IDE, EHR, CRM, ERP) often wins over standalone superior models.",
      paragraphs: [
        [
          s("Good enough plus embedded beats best-in-class plus bolt-on. "),
          x(
            "Copilot in Office reduced friction of switching to a better standalone writer.",
            "EHR-embedded documentation beat standalone scribe apps for many clinicians despite comparable ASR.",
          ),
          s(" Distribution is where habit and procurement live."),
        ],
        [
          s("Channel partnerships can be moats — or traps. "),
          x(
            "Exclusive vertical channel deals create distribution moats.",
            "Reseller dependence without product lock-in is rented distribution — can be revoked.",
          ),
          s(" Own the user relationship where possible; rent channels only with exclusivity or integration depth."),
        ],
        [
          s("PLG vs enterprise distribution choices affect moat type. "),
          x(
            "PLG: fast signal, weaker switching early, viral loops.",
            "Enterprise: slow land, deep workflow lock-in, stronger switching costs post-embed.",
          ),
          s(" Pick distribution that matches your moat thesis — data velocity vs contract depth."),
        ],
      ],
      examples: [
        {
          title: "GitHub Copilot — distribution over model exclusivity",
          body: "Microsoft distribution in the editor created default usage. Competing models could be better briefly; switching cost of leaving the IDE flow was the moat. Founders should ask where their 'IDE' is.",
        },
        {
          title: "Epic + ambient vendors — EHR gatekeeping",
          body: "Ambient documentation startups partner through Epic and Cerner channels. Distribution moat is certification and integration depth inside the clinical record — not audio model alone.",
        },
        {
          title: "Channel trap — Shopify app churn",
          body: "AI merchandising app relied on Shopify App Store traffic without deep merchant workflow. When Shopify shipped native features, traffic collapsed. Distribution without switching cost was not a moat.",
        },
      ],
    }),
    buildSection({
      number: "3.5",
      title: "Switching cost moats",
      subtitle: "Workflow lock-in, trained models on proprietary data, and institutional knowledge — the stickiness stack",
      take: "Switching costs in AI come from personalised models, embedded workflows, accumulated corrections, and team habits — not from contracts alone. The stickiness stack should deepen every quarter a customer stays.",
      why: "Retention is the proof of moat. Founders who measure migration pain honestly know whether they have a business or a trial.",
      paragraphs: [
        [
          s("Personalisation creates technical switching costs. "),
          x(
            "Per-customer fine-tunes, embedding indexes, and prompt libraries trained on proprietary docs.",
            "Migration means retraining, revalidation, and accuracy regression — buyers fear regression more than subscription fees.",
          ),
          s(" Make personalisation visible in ROI narratives, not hidden in infra."),
        ],
        [
          s("Workflow lock-in beats output lock-in. "),
          x(
            "Copy-paste AI output is easy to leave; approvals, audit trails, and role-based workflows in your system are not.",
            "Become the system of record for the AI-assisted process, not a sidebar.",
          ),
          s(" Sidebar features churn; workflow features renew."),
        ],
        [
          s("Institutional knowledge accumulates in overrides and configs. "),
          x(
            "Taxonomies, escalation rules, banned phrases, confidence thresholds — organisational memory.",
            "Rebuilding that logic in a competitor product is a six-month internal project customers avoid.",
          ),
          s(" Export is a trust feature; depth is a moat — balance both deliberately."),
        ],
      ],
      examples: [
        {
          title: "Zendesk AI on historical tickets",
          body: "Models trained on years of ticket resolutions per account. Switching vendors means cold-start accuracy drop. Switching cost moat is account-specific signal — painful to migrate even if APIs are open.",
        },
        {
          title: "Custom risk rules + ML ensemble",
          body: "Fintech combined learned models with analyst-defined rules in one console. Competitor offered better AUC on paper; migration required re-validating rules with regulators. Switching cost moat beat benchmark moat.",
        },
        {
          title: "Shallow switching — generic chat UI",
          body: "HR team used standalone chat for policy Q&A. Migration to Microsoft Copilot took an afternoon. No personalisation, no workflow — no switching cost moat despite six months of usage.",
        },
      ],
    }),
    buildSection({
      number: "3.6",
      title: "The wrapper problem — and the honest self-assessment",
      subtitle: "If the model provider builds your feature natively, what exactly do you have left",
      take: "A wrapper is thin value between user and provider API — easily bypassed when the provider adds a button. Honest self-assessment names what remains after commoditisation: if the answer is 'brand,' you are fragile.",
      why: "Every AI founder must run the wrapper test quarterly. Denial is how companies become case studies in provider keynotes.",
      paragraphs: [
        [
          s("Wrapper symptoms are predictable. "),
          x(
            "Value is primarily prompt engineering on public models.",
            "No proprietary data flywheel, no workflow system of record, no vertical compliance story.",
          ),
          s(" Wrappers can raise in hype cycles; they rarely win at scale."),
        ],
        [
          s("Escaping wrapper status requires intentional moat investment. "),
          x(
            "Vertical corpus acquisition, deep integrations, outcome labelling pipelines, liability infrastructure.",
            "These investments are slower than shipping another chat surface — but they are the company.",
          ),
          s(" If you are a wrapper today, name the bridge to moat with dates and metrics."),
        ],
        [
          s("Some wrappers are viable businesses — know which kind you are. "),
          x(
            "Thin wrappers: agency margins, churn, strategic risk — often bootstrap or PE, not venture.",
            "Thick wrappers: heavy services, compliance, data acquisition on the way to moat — staged venture path.",
          ),
          s(" Mislabeling a wrapper as platform company misprices risk for everyone."),
        ],
      ],
      examples: [
        {
          title: "ChatPDF era — wrapper wave",
          body: "Many document chat apps were RAG on PDFs with no exclusivity. Provider and incumbent document suites added native chat; thin wrappers died. Survivors owned regulated corpora or workflow (contract lifecycle, not 'chat with PDF').",
        },
        {
          title: "Wrapper to moat — vertical compliance layer",
          body: "Insurtech started as policy summarisation wrapper. Added claims adjudication workflow, state filing integrations, and outcome-labelled reserves. Provider commoditised summarisation; moat sat in workflow and proprietary loss data.",
        },
        {
          title: "Honest board classification",
          body: "CEO labelled company 'Stage 1 wrapper, Stage 2 data moat by month 18.' Board aligned spend: minimal on UI polish, maximal on integration and labelling. Honesty prevented vanity roadmap.",
        },
      ],
    }),
    buildSection({
      number: "3.7",
      title: "Competing against foundation model providers",
      subtitle: "When OpenAI, Google, and Anthropic are simultaneously your supplier and your competitor",
      take: "Foundation model providers are dual-role players: they sell you intelligence and may ship your product as a feature. Strategy requires supplier diversification, moat outside their roadmap, and explicit contingency when partnership becomes competition.",
      why: "Founders who ignore dual-role dynamics wake up to pricing changes, terms changes, and native feature announcements without a plan. Treat providers as strategic actors, not utilities.",
      paragraphs: [
        [
          s("Supplier relationship management is CEO-level. "),
          x(
            "Multi-model abstraction, contract terms on data usage, price lock clauses where possible.",
            "Architecture portability is not paranoia — it is bargaining power.",
          ),
          s(" Dependence without leverage is a strategic vulnerability."),
        ],
        [
          s("Compete where providers are structurally slow. "),
          x(
            "Vertical liability, enterprise change management, on-prem requirements, legacy integrations.",
            "Providers optimise for horizontal scale; you optimise for depth in one industry's mess.",
          ),
          s(" Their speed on models is your constraint; your speed on workflow is their constraint."),
        ],
        [
          s("Coopetition decisions should be explicit. "),
          x(
            "Partner programs and marketplace listings can accelerate distribution — until you are unfeatured.",
            "Never outsource your moat to a provider's partner tier.",
          ),
          s(" Use providers for capability; own customer, data, and workflow."),
        ],
      ],
      examples: [
        {
          title: "OpenAI Assistants vs custom agent startups",
          body: "Native agent builders commoditised simple agent wrappers. Startups with CRM-deep agents and customer-specific tool auth retained value. Competition pushed survivors toward workflow moats faster.",
        },
        {
          title: "Google Search Generative Experience",
          body: "SEO and content tools faced distribution shock when answers appeared in SERP. Moat shifted to first-party data, brand, and workflows outside search — not ranking tricks alone.",
        },
        {
          title: "Anthropic enterprise contracts",
          body: "Startups on single-provider stacks negotiated enterprise data terms while building model routing layer. When provider launched overlapping feature, routing plus vertical compliance kept customers. Dual-role planning paid off.",
        },
      ],
    }),
    buildSection({
      number: "3.8",
      title: "Founder decision lens: mapping your moat honestly",
      subtitle: "The uncomfortable question every founder must answer — and the strategic response if the answer is bad",
      take: "Score your primary moat 1–5 across data, distribution, switching, workflow, and trust. If nothing scores four today, name the bridge plan with milestones — or pivot wedge. Honesty beats optimism in memos and board rooms.",
      why: "Founders who map moats early make better build/buy, hiring, and partnership calls. Founders who wait hear the same gaps from diligence firms at lower valuations.",
      paragraphs: [
        [
          s("Run the moat map quarterly with your leadership team. "),
          x(
            "For each moat type: evidence today, metric trajectory, owner, investment required.",
            "Red flag: same score quarter after quarter with no investment shift.",
          ),
          s(" Moat maps turn strategy into operating rhythm."),
        ],
        [
          s("If the map is weak, choose a strategic response — do not hope. "),
          x(
            "Deepen vertical workflow and switching costs, accelerate proprietary data via partnerships, or pivot wedge to where you have distribution advantage.",
            "If the moat map is weak, choose a strategic response — do not hope the competitor stalls.",
          ),
          s(" Weak moat plus great model is a temporary state, not a plan."),
        ],
        [
          s("Communicate moat staging to investors. "),
          x(
            "Stage 1: wedge + thin switching. Stage 2: data velocity milestone. Stage 3: platform.",
            "Investors fund staged moats when milestones are measurable — not when moats are asserted.",
          ),
          s(" The uncomfortable question is 'what do we have in 24 months?' — answer with metrics."),
        ],
      ],
      examples: [
        {
          title: "Moat map triggered partnership",
          body: "Scores: data 2, switching 3, distribution 2. CEO pursued exclusive EHR data partnership to move data to 4 within 12 months. Roadmap reprioritised from features to integration depth. Series A closed on staged moat story.",
        },
        {
          title: "Weak map — orderly pivot",
          body: "Horizontal email assistant scored 1–2 across moats. Team pivoted to mortgage broker workflow with LOS integration — switching cost 4, data 3 path visible. Honest map enabled fast pivot without founder denial.",
        },
        {
          title: "Board moat dashboard",
          body: "Quarterly board packet included moat scores and leading indicators: labels per account, integration depth, NRR in embedded accounts. Directors engaged with strategy instead of debating feature parity.",
        },
      ],
    }),
  ],
  quiz: [
    {
      q: "Which is NOT one of the five real moats in AI businesses discussed in this chapter?",
      options: [
        "Proprietary data",
        "Faster API calls to GPT",
        "Workflow integration depth",
        "Brand trust in high-stakes domains",
      ],
      correct: 1,
      correctFeedback:
        "Right. API access is rented capability, not a moat. Re-read sections 3.1 and 3.2.",
      wrongFeedback:
        "Capability via API commoditises; moats are data, distribution, switching costs, workflow depth, trust. Re-read section 3.2.",
    },
    {
      kind: "categorize",
      q: "Classify each asset as 'Capability (commoditising)' or 'Moat (compounding)'.",
      categories: ["Capability", "Moat"],
      items: [
        { text: "GPT-4 API access with standard terms.", category: 0 },
        { text: "Per-customer clause accept/reject labels over 24 months.", category: 1 },
        { text: "Better prompt template for summarisation.", category: 0 },
        { text: "Embedded approvals workflow in customer ERP.", category: 1 },
        { text: "Public web scrape fine-tune.", category: 0 },
        { text: "Exclusive partnership for specialty medical imaging data.", category: 1 },
      ],
      correctFeedback:
        "Right. Moats accumulate exclusive, workflow-embedded, or hard-to-replicate assets — not shared capabilities.",
      wrongFeedback:
        "If everyone can rent it tomorrow, it is capability not moat. Re-read sections 3.1–3.3.",
    },
    {
      q: "A startup's product is 'chat with your PDFs' using public embeddings and no workflow. What is the honest wrapper assessment?",
      options: [
        "Strong moat — PDFs are proprietary.",
        "Thin wrapper — provider or document suite can replicate; urgent need for vertical workflow or exclusive data.",
        "Data moat — users upload files.",
        "Distribution moat — PDFs are popular.",
      ],
      correct: 1,
      correctFeedback:
        "Right. Generic document chat without exclusivity or workflow depth is classic wrapper risk. Re-read section 3.6.",
      wrongFeedback:
        "Upload alone is not a moat; assess wrapper risk and bridge plan. Re-read section 3.6.",
    },
    {
      q: "Why are data moats described as 'the strongest and the slowest'?",
      options: [
        "Data is free and fast to collect.",
        "They take years to compound but are hard to replicate once volume, labels, and exclusivity align.",
        "Models never improve with more data.",
        "Investors dislike data stories.",
      ],
      correct: 1,
      correctFeedback:
        "Right. Slow accumulation is the barrier competitors cannot shortcut. Re-read section 3.3.",
      wrongFeedback:
        "Data moats compound over time — that slowness is defensive. Re-read section 3.3.",
    },
    {
      kind: "order",
      q: "Order moat types by typical time-to-meaningful defensibility for a seed-stage vertical AI startup (fastest first).",
      prompt: "Drag to arrange fastest to build meaningful defensibility (top) to slowest (bottom).",
      items: [
        "Workflow integration and switching costs in one vertical.",
        "Distribution via embedded channel partnership.",
        "Proprietary outcome-labelled data moat at scale.",
      ],
      correctFeedback:
        "Right. Workflow/switching often emerges first; data moats at scale take longest — plan investments accordingly. Re-read sections 3.3–3.5.",
      wrongFeedback:
        "Workflow lock-in typically precedes large-scale proprietary data moats. Re-read sections 3.3–3.5.",
    },
    {
      q: "OpenAI announces a native feature overlapping your core product. Your best strategic response as founder is:",
      options: [
        "Hope users prefer your UI.",
        "Deepen moats outside capability — workflow, proprietary data, switching costs — and execute contingency plan you already documented.",
        "Sue the provider.",
        "Immediately train a foundation model.",
      ],
      correct: 1,
      correctFeedback:
        "Right. Dual-role provider competition is expected; moat outside their roadmap is the response. Re-read sections 3.6 and 3.7.",
      wrongFeedback:
        "Plan for provider competition with moat depth and portability — not hope or denial. Re-read sections 3.6 and 3.7.",
    },
  ],
});
