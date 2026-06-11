import { buildChapter, buildSection, s, x, sectionWithDiagram } from "../concepts-pb4-helpers";

export const chapter02AiValuationPremium = buildChapter({
  slug: "founder-ai-valuation-premium",
  number: 2,
  shortTitle: "AI Valuation Premium",
  title: "The AI Valuation Premium — What Justifies It and What Doesn't",
  readingMinutes: 26,
  summary:
    "Why two companies with the same revenue get completely different multiples — what the AI premium actually is, what earns it, and how to negotiate valuation on defensibility rather than hype.",
  keyTakeaway:
    "The AI premium is an investor bet on compounding defensibility — data moat, loop velocity, improvement rate, and switching costs. API wrappers and chatbot features do not earn it; honest self-assessment before fundraising saves months of mismatched expectations.",
  pmCallout:
    "As a founder: run the premium scorecard before you name a valuation. If you cannot credibly claim all four justification factors, you are pitching SaaS multiples — and should price the round accordingly to avoid a down round later.",
  sections: [
    sectionWithDiagram({
      number: "2.1",
      title: "What the AI premium actually is",
      subtitle: "The additional multiple investors assign to companies with credible AI-native architectures",
      take: "The AI premium is not a label — it is an additional valuation multiple investors assign when they believe your architecture compounds defensibility faster than a traditional SaaS business. Same revenue, different futures, different prices.",
      why: "Founders who understand the premium as a bet on compounding negotiate differently. Founders who treat it as a marketing badge get term sheets that revert to SaaS reality in due diligence.",
      paragraphs: [
        [
          s("Valuation multiples reflect expected future cash flows and risk. "),
          x(
            "Traditional SaaS multiples price retention, expansion, and margin. AI premiums add optionality: the belief that proprietary data and improving models will widen moats and expand TAM faster than linear feature development.",
            "The premium is essentially a call option on compounding intelligence — not on having AI in the pitch deck.",
          ),
          s(" Investors pay upfront for a future they must believe you can execute."),
        ],
        [
          s("The premium varies by stage and evidence. "),
          x(
            "At seed, investors grant a modest premium for credible loop design and vertical data access. At Series A, they require metric proof. At growth, the premium compresses unless margins prove AI improves economics, not destroys them.",
            "A seed premium without A-round evidence is a bridge to a down round — not a permanent valuation floor.",
          ),
          s(" Treat the premium as earned in tranches tied to milestones, not granted at incorporation."),
        ],
        [
          s("Market conditions modulate the premium but do not eliminate the logic. "),
          x(
            "In 2021, premiums were generous and diligence was thin. In 2025, premiums exist but are narrower — only companies with real defensibility earn them.",
            "Founders who raised at peak premiums without building loops face painful repricing. Honest self-assessment prevents fundraising into a valuation trap.",
          ),
          s(" The premium is real but conditional — build the underlying assets or expect multiple compression."),
        ],
      ],
      examples: [
        {
          title: "Same ARR, different multiples — vertical vs wrapper",
          body: "Two companies at $2M ARR pitched the same month. The vertical legal AI with firm-specific data and documented loop latency raised at 25x ARR. The horizontal writing assistant with pure API dependency raised at 12x. Revenue was identical; compounding credibility was not.",
        },
        {
          title: "Premium compression — Jasper trajectory",
          body: "Jasper's early premium assumed generative copy was structurally defensible. As models commoditised and competition flooded in, the market repriced toward SaaS norms. Founders should treat premium as contingent on continued compounding — not a permanent status.",
        },
        {
          title: "Growth-stage premium requires margin proof",
          body: "An enterprise AI company maintained premium multiples at $20M ARR only after proving 70%+ gross margin through model routing and caching. Investors kept the premium because AI improved unit economics. Without margin proof, growth AI companies trade like expensive services businesses.",
        },
      ],
    }, {
      kind: "diagram",
      id: "founder-vc-diligence-stack",
      type: "flow",
      title: "Investor Diligence Stack",
      caption:
        "Team → data moat → unit economics → timing → risk. The five lenses on every AI term sheet.",
    }),
    buildSection({
      number: "2.2",
      title: "What justifies the premium — the four factors",
      subtitle: "Data moat, feedback loop velocity, model improvement rate, and switching cost depth",
      take: "Investors justify AI premiums with four factors: proprietary data moat, feedback loop velocity, demonstrable model improvement rate, and deep switching costs. Score well on all four and you earn the multiple. Miss two and you are SaaS with an API bill.",
      why: "These four factors are what partners write in the defensibility section of the memo. Founders who can evidence each factor control the valuation conversation.",
      paragraphs: [
        [
          s("Data moat is the foundation. "),
          x(
            "Proprietary, labelled, current, domain-specific data that competitors cannot replicate in twelve months justifies premium pricing of future advantage.",
            "Without exclusive data, improvement is available to anyone with the same API — the moat is imaginary.",
          ),
          s(" Quantify accumulation rate: GB/month of proprietary labelled signal, not total rows."),
        ],
        [
          s("Feedback loop velocity measures how fast you convert usage into improvement. "),
          x(
            "Days from user correction to deployed model update signals operational maturity. Months signals roadmap fiction.",
            "Loop velocity is a competitive clock — faster loops beat better starting models over eighteen months.",
          ),
          s(" Document latency, ownership, and shipped improvements per quarter."),
        ],
        [
          s("Model improvement rate and switching costs complete the picture. "),
          x(
            "Improvement rate: task completion up, overrides down, accuracy up on held-out sets — measured monthly. Switching costs: workflow integration, custom models on proprietary data, institutional knowledge embedded in the product.",
            "Investors model: 'if a competitor copies our UI tomorrow, what do we still have?' Premium answers require more than UI.",
          ),
          s(" Present all four factors in a single defensibility slide with metrics, not adjectives."),
        ],
      ],
      examples: [
        {
          title: "Waymo — data moat justifying capital intensity",
          body: "Waymo's premium reflects billions of miles of proprietary driving data — not algorithmic novelty. Investors price the corpus and the loop that improves from every disengagement. Founders should map their equivalent: what miles have we driven that no one else has?",
        },
        {
          title: "Gong — switching costs plus behavioural data",
          body: "Gong embeds in sales workflows and accumulates conversation intelligence across teams. Replacing Gong means losing historical coaching signal. The premium reflects workflow depth plus data — both switching cost factors.",
        },
        {
          title: "Four-factor scorecard in a Series A memo",
          body: "A successful A-round memo explicitly scored: data moat (proprietary labels from 40K users), loop velocity (9 days), improvement rate (override down 22% in two quarters), switching costs (ERP integration + custom fine-tune). The scorecard justified 18x ARR vs 10x for a comparable SaaS company.",
        },
      ],
    }),
    sectionWithDiagram({
      number: "2.3",
      title: "What does not justify the premium",
      subtitle: "Using GPT-4 via API, adding an AI chatbot to a SaaS product, calling yourself AI-first",
      take: "API access, chatbot features, fine-tuning on public data, and 'AI-first' branding do not justify premium multiples. Investors have seen thousands of identical architectures. Without proprietary compounding, you are SaaS — price accordingly.",
      why: "Overclaiming the premium sets valuation expectations you cannot support in the next round. Honest tier placement at seed prevents painful repricing at Series A.",
      paragraphs: [
        [
          s("GPT-4 via API is infrastructure, not IP. "),
          x(
            "Every competitor can call the same endpoint. Fine-tuning on public datasets reproduces in weeks. Prompt engineering is not a moat.",
            "Investors classify this as AI-powered SaaS at best — not AI-native premium territory.",
          ),
          s(" If removing the API leaves a functioning product with no proprietary advantage, you do not have a premium story."),
        ],
        [
          s("Bolt-on chatbots on existing SaaS products are features, not businesses. "),
          x(
            "Adding 'Ask AI' to a dashboard improves UX but does not create compounding defensibility unless user interactions generate proprietary training signal.",
            "Feature AI gets feature multiples. Business AI gets premium multiples. The distinction is architectural, not marketing.",
          ),
          s(" Audit whether AI is in the improvement mechanism or only in the interface."),
        ],
        [
          s("'AI-first' positioning without AI-native architecture is AI-washed. "),
          x(
            "AI-washed companies raise once on hype and face down rounds when diligence reveals no loop, no proprietary data, and no improvement trajectory.",
            "The honest self-assessment: AI-native, AI-powered, or AI-washed? Each tier has a different fair multiple.",
          ),
          s(" Mis-tiering at seed is the most expensive mistake in AI fundraising."),
        ],
      ],
      examples: [
        {
          title: "Chatbot on legacy CRM — feature multiple",
          body: "A CRM added GPT-powered email drafts. Revenue grew but override data stayed in logs, never improving models. Series A investors offered 8x ARR — standard SaaS — despite 'AI-first' branding. The chatbot was a feature; the moat was still distribution.",
        },
        {
          title: "Fine-tune on public data — reproducible in weeks",
          body: "A startup fine-tuned on open-source medical texts and claimed proprietary AI. Diligence found identical datasets on Hugging Face. The premium collapsed. Founders must prove data exclusivity, not fine-tune existence.",
        },
        {
          title: "Honest tiering saving a seed round",
          body: "A founder reframed from 'AI-native fraud detection' to 'AI-powered workflow with growing proprietary label corpus.' The honest tier set expectations at 15x ARR instead of 30x. The round closed quickly. Series A metrics later earned the premium they initially skipped.",
        },
      ],
    }, {
      kind: "diagram",
      id: "founder-funding-valuation",
      type: "comparison",
      title: "AI Premium vs AI Discount",
      caption:
        "Compounding data loops earn premium multiples; API wrappers with negative unit economics trade at a discount.",
    }),
    buildSection({
      number: "2.4",
      title: "How to build toward a defensible valuation",
      subtitle: "The concrete milestones that shift your company from 'AI feature' to 'AI business' in investor perception",
      take: "Premium valuation is earned through milestones: proprietary data accumulation live, loop shipping improvements quarterly, override rates trending down, AI-attributed revenue separated, and model-agnostic architecture documented. Each milestone moves investor perception one tier.",
      why: "Founders who treat these as fundraising prerequisites — not post-raise nice-to-haves — enter negotiations with leverage. Founders who defer them negotiate on hope.",
      paragraphs: [
        [
          s("Milestone one: instrument for proprietary signal from day one. "),
          x(
            "Every user action should generate captureable, ownable, labellable data. Without instrumentation, you cannot build a moat retroactively.",
            "Six months of unlogged interactions is six months of moat you cannot recover.",
          ),
          s(" This is a product architecture decision, not a Series B data engineering project."),
        ],
        [
          s("Milestone two: close the loop and publish improvement evidence. "),
          x(
            "Ship model updates driven by user feedback. Track override rate, task completion, and held-out eval improvements monthly.",
            "One quarter of documented improvement shifts investor conversations from 'can you?' to 'how fast?'",
          ),
          s(" Improvement evidence is the currency of premium negotiations."),
        ],
        [
          s("Milestone three: separate AI-attributed revenue and prove margins. "),
          x(
            "Show which revenue requires AI to deliver value. Model cost per dollar of AI-attributed ARR must be sustainable at 10x scale.",
            "Premium multiples at growth stage require AI to improve economics — not just top-line growth.",
          ),
          s(" Build toward the scorecard in section 2.2 before you need the term sheet."),
        ],
      ],
      examples: [
        {
          title: "Eight-week loop closure — valuation inflection",
          body: "A seed company spent eight weeks building override-to-fine-tune pipeline. Override rate dropped 15% in one quarter. Series A conversations shifted from scepticism to competitive rounds. The milestone was operational, not narrative.",
        },
        {
          title: "AI-attributed revenue line — board metric",
          body: "An enterprise assistant tagged features as 'AI-required' vs 'AI-enhanced' in billing analytics. 60% of expansion revenue was AI-required. Investors priced the premium on that line, not total ARR. Founders should instrument attribution before fundraising.",
        },
        {
          title: "Model-agnostic migration — diligence unlock",
          body: "A company spent one sprint abstracting model providers and documented fallback. Diligence risk score dropped; lead investor increased pre-money by 15%. Portability was a valuation input, not an engineering afterthought.",
        },
      ],
    }),
    buildSection({
      number: "2.5",
      title: "Valuation benchmarks — honest numbers for 2025",
      subtitle: "What AI companies are actually raising at across stages — seed through Series B",
      take: "2025 AI valuations are bifurcated: premium companies with defensibility evidence raise at the top of range; wrappers raise at SaaS norms or struggle. Seed: $8–20M pre for credible teams. Series A: 12–25x ARR for proven loops. Series B: premium requires margin proof.",
      why: "Founders who anchor negotiations to realistic benchmarks close faster. Founders who anchor to 2021 outliers waste runway on impossible rounds.",
      paragraphs: [
        [
          s("Seed-stage AI in 2025 typically closes between $8M and $20M pre-money. "),
          x(
            "Top of range requires exceptional team, clear vertical wedge, and credible data path. Bottom of range is strong teams in crowded horizontal markets.",
            "Pre-revenue premiums above $25M are rare without prior exits or extraordinary technical founders.",
          ),
          s(" Seed valuation is a bet on trajectory — bring evidence of the four factors even pre-revenue."),
        ],
        [
          s("Series A AI ranges from 12x to 25x ARR depending on defensibility score. "),
          x(
            "12–15x: AI-powered SaaS with growing but unproven loops. 15–20x: documented improvement metrics and proprietary data. 20–25x: vertical dominance signals and strong retention on AI-native features.",
            "Below 10x usually means investors classify you as SaaS regardless of branding.",
          ),
          s(" Know your tier before naming a number."),
        ],
        [
          s("Series B and beyond require gross margin above 65% and clear path to profitability. "),
          x(
            "Growth investors punish inference-heavy businesses with services-like margins. Premium persists only when AI improves unit economics.",
            "Benchmarks shift quarterly — validate with three recent comps in your vertical, not Twitter anecdotes.",
          ),
          s(" Your lawyer and lead investor are better benchmark sources than press headlines."),
        ],
      ],
      examples: [
        {
          title: "Vertical legal AI — top of A range",
          body: "A legal workflow company at $4M ARR with 130% NRR and documented loop metrics raised at 22x. Comps in horizontal writing tools at similar ARR raised at 14x. Vertical defensibility moved the multiple — not revenue alone.",
        },
        {
          title: "Seed reality check — crowded market",
          body: "A horizontal 'AI for sales' seed with no proprietary data closed at $10M pre after initially targeting $25M. Adjusting to benchmark saved six months. The company built loop metrics and raised A at a premium eighteen months later.",
        },
        {
          title: "Series B margin gate",
          body: "A customer AI company at $15M ARR was offered 8x until they demonstrated model routing that lifted gross margin from 52% to 68%. The multiple moved to 14x. Growth premium requires margin proof in 2025.",
        },
      ],
    }),
    buildSection({
      number: "2.6",
      title: "The valuation conversation with your lead investor",
      subtitle: "How to negotiate your multiple based on AI defensibility — not just revenue",
      take: "Negotiate valuation by presenting defensibility evidence, not by anchoring to the highest 2021 comp. Lead with the four-factor scorecard, comparable companies in your tier, and milestones that unlock the next multiple tranche.",
      why: "Investors respect founders who understand fair value. Founders who over-anchor on hype multiples lose leads; founders who under-anchor leave dilution on the table unnecessarily.",
      paragraphs: [
        [
          s("Open with evidence, not emotion. "),
          x(
            "Present: override trend, loop latency, data accumulation rate, AI-attributed revenue %, and three comps with disclosed multiples in your vertical.",
            "The conversation becomes analytical. Partners defend higher multiples to their IC with your scorecard.",
          ),
          s(" Make it easy for your champion to write the memo."),
        ],
        [
          s("Negotiate milestone-linked tranches where appropriate. "),
          x(
            "If some premium factors are emerging but not proven, accept slightly lower pre-money with explicit milestone triggers for additional capital or ratchet protection.",
            "This aligns valuation with evidence and reduces down-round risk if loops take longer than planned.",
          ),
          s(" Structure reflects honesty about where you are on the premium path."),
        ],
        [
          s("Understand what the lead needs for their IC. "),
          x(
            "Every partner has internal comparables and risk limits. Ask: 'What would move you from 15x to 20x conviction?' Then deliver those metrics or accept the lower multiple.",
            "Valuation is a joint problem-solving exercise when done well — adversarial when founders treat it as pure haggling.",
          ),
          s(" Your goal is a sustainable cap table for the next round, not maximum pre-money today."),
        ],
      ],
      examples: [
        {
          title: "Scorecard-driven negotiation — Series A",
          body: "A founder presented a one-page four-factor scorecard and three vertical comps. The lead opened at 14x; the founder countered with improvement-rate data and closed at 17x. Both sides cited the same framework — no arbitrary haggling.",
        },
        {
          title: "Milestone tranche — honest emerging premium",
          body: "A seed company accepted $12M pre with a $3M follow-on tranche at $18M pre upon hitting 10-day loop latency and 5% override reduction. The structure priced current state honestly and rewarded execution.",
        },
        {
          title: "Sustainable cap table discipline",
          body: "A founder declined a $30M seed pre from a tourist investor and closed $15M pre with a sector specialist. The next round up at fair premium avoided a down round. Maximum pre-money is not always optimal pre-money.",
        },
      ],
    }),
    buildSection({
      number: "2.7",
      title: "Founder decision lens: the AI premium self-assessment",
      subtitle: "Do you deserve a premium multiple right now — the honest scorecard",
      take: "Score yourself 0–2 on each factor: data moat, loop velocity, improvement rate, switching costs. Eight or above: premium justified. Five to seven: AI-powered, partial premium. Below five: SaaS multiples — build before you pitch premium.",
      why: "This self-assessment prevents fundraising into a valuation trap and focuses the team on the milestones that actually move multiples.",
      paragraphs: [
        [
          s("Rate data moat: 0 = public/scraped only, 1 = some proprietary but unlabelled, 2 = proprietary labelled current domain data accumulating monthly. "),
          x(
            "Be ruthless. Investors will score the same way in diligence.",
            "If you are unsure, you are a 0 or 1 — not a 2.",
          ),
          s(" Document evidence for each point before scoring yourself a 2."),
        ],
        [
          s("Rate loop velocity: 0 = no loop, 1 = loop designed but not shipping, 2 = corrections deploy to models in under thirty days with owners. "),
          x(
            "Rate improvement rate: 0 = no measurement, 1 = offline evals only, 2 = production metrics improving quarterly.",
            "Rate switching costs: 0 = replaceable in a week, 1 = moderate workflow integration, 2 = deep integration plus custom models on proprietary data.",
          ),
          s(" Sum the eight points. Match your target valuation to your tier."),
        ],
        [
          s("If below premium threshold, set a build plan before setting a price. "),
          x(
            "Sixty-day goals: instrument overrides, ship one model update from user labels, document architecture portability.",
            "Fundraise at fair SaaS multiple, hit milestones, earn premium at Series A. This path beats a down round.",
          ),
          s(" Honest scoring is a strategic advantage — investors rarely meet founders who self-assess accurately."),
        ],
      ],
      examples: [
        {
          title: "Score 4/8 — honest SaaS seed",
          body: "A founder scored 4/8, pitched at 12x ARR equivalent, closed quickly, and spent nine months reaching 7/8. Series A achieved the premium they skipped at seed. Honest scoring preserved credibility.",
        },
        {
          title: "Score 9/8 — competitive A round",
          body: "A vertical industrial AI scored 9/8 on the framework with sensor data moat, 7-day loop, and ERP switching costs. Three term sheets at top-of-range multiples. The scorecard was the deck.",
        },
        {
          title: "Internal quarterly premium audit",
          body: "One CEO runs the scorecard quarterly with the exec team. Scores are tracked in the board deck alongside ARR. When score crosses 7, they trigger fundraise conversations. Premium fundraising becomes a metric-driven decision, not a calendar event.",
        },
      ],
    }),
  ],
  quiz: [
    {
      q: "What is the AI valuation premium fundamentally an investor bet on?",
      options: [
        "Having the newest foundation model in the stack.",
        "Compounding defensibility through data, loops, improvement, and switching costs.",
        "First-mover advantage in any market with AI branding.",
        "Lower engineering headcount than traditional SaaS.",
      ],
      correct: 1,
      correctFeedback:
        "Right. The premium prices future compounding — not API access or branding.",
      wrongFeedback:
        "Re-read sections 2.1 and 2.2. Premium reflects defensibility factors, not model choice.",
    },
    {
      kind: "categorize",
      q: "Sort each company characteristic into whether it justifies an AI premium.",
      categories: ["Justifies premium", "Does not justify premium"],
      items: [
        { text: "Proprietary labelled data accumulating 2TB/quarter from user workflows.", category: 0 },
        { text: "GPT-4 API integration with prompt engineering only.", category: 1 },
        { text: "Override rate down 20% over two quarters with documented model updates.", category: 0 },
        { text: "AI chatbot bolted onto a ten-year-old SaaS product with no feedback loop.", category: 1 },
        { text: "Deep ERP integration plus custom fine-tune on customer-specific data.", category: 0 },
        { text: "'AI-first' branding without proprietary training signal.", category: 1 },
      ],
      correctFeedback:
        "Exactly. Premium requires compounding assets — not features or labels.",
      wrongFeedback:
        "Re-read sections 2.2 and 2.3 for the four factors vs non-qualifying characteristics.",
    },
    {
      q: "A company scores 4/8 on the premium self-assessment. What is the founder-correct fundraising approach?",
      options: [
        "Pitch top-of-market AI premium anyway to anchor high.",
        "Price at fair SaaS multiples, build toward milestones, earn premium at next round.",
        "Delay all fundraising until score reaches 10/8.",
        "Switch to a non-AI narrative entirely.",
      ],
      correct: 1,
      correctFeedback:
        "Right. Honest tier placement prevents down rounds. Build the scorecard, then earn the premium.",
      wrongFeedback:
        "Re-read section 2.7. Score below 5 means SaaS multiples until milestones land.",
    },
    {
      kind: "order",
      q: "Order the four factors investors use to justify AI premiums.",
      prompt: "Drag to arrange as a complete defensibility picture (any logical order — all four required).",
      items: [
        "Proprietary data moat accumulating with usage.",
        "Feedback loop velocity measured in days to deployment.",
        "Model improvement rate evidenced in production metrics.",
        "Switching cost depth from workflow and custom models.",
      ],
      correctFeedback:
        "Right. All four factors together justify premium — missing two reclassifies you as SaaS.",
      wrongFeedback:
        "Re-read section 2.2. Premium requires data, loop velocity, improvement rate, and switching costs.",
    },
    {
      q: "At Series A in 2025, what ARR multiple range is typical for AI companies with documented loop metrics and proprietary data?",
      options: [
        "3–5x ARR.",
        "12–25x ARR depending on defensibility score.",
        "50–100x ARR as standard.",
        "Valuation is always fixed at $100M pre-money regardless of ARR.",
      ],
      correct: 1,
      correctFeedback:
        "Right. 2025 A-round multiples are bifurcated by defensibility evidence within the 12–25x band.",
      wrongFeedback:
        "Re-read section 2.5 for honest 2025 benchmark ranges.",
    },
    {
      q: "How should founders negotiate valuation with a lead investor?",
      options: [
        "Anchor to the highest 2021 AI comp regardless of metrics.",
        "Present the four-factor scorecard, comps in your tier, and milestone-linked structure.",
        "Let the investor name a number without presenting evidence.",
        "Focus only on total ARR without margin or defensibility data.",
      ],
      correct: 1,
      correctFeedback:
        "Right. Evidence-based negotiation with comps and milestones produces sustainable cap tables.",
      wrongFeedback:
        "Re-read section 2.6. Negotiate on defensibility evidence, not hype anchors.",
    },
  ],
});
