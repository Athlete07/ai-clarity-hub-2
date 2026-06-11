import { buildChapter, buildSection, s, x, sectionWithDiagram } from "../concepts-pb4-helpers";

export const chapter05FounderUnitEconomicsInflection = buildChapter({
  slug: "founder-unit-economics-inflection",
  number: 5,
  shortTitle: "Unit Economics Inflection",
  title: "The Unit Economics Inflection Points",
  readingMinutes: 26,
  summary:
    "The moments in your growth curve where the financial model changes fundamentally. Model negotiation thresholds, build-vs-buy crossover, fine-tuning ROI, margin evolution, and the analysis that proves to investors you understand your own cost structure before Series B.",
  keyTakeaway:
    "AI unit economics are not static — they inflect at predictable volume thresholds. Founders who model inflection points before they arrive can negotiate, rearchitect, and fundraise from strength. Those who discover them through margin collapse restructure from weakness.",
  pmCallout:
    "As a founder: map your four inflection points — API negotiation, build-vs-buy crossover, fine-tuning ROI, and margin floor — on a single timeline before your Series B. Investors fund founders who understand when their economics change, not founders surprised by them.",
  sections: [
    sectionWithDiagram({
      number: "5.1",
      title: "The four unit economics inflection points in AI product scaling",
      subtitle: "The revenue and usage thresholds where your cost structure changes",
      take: "AI products hit four predictable inflection points: (1) API volume unlocks negotiation leverage, (2) usage crosses build-vs-buy threshold for self-hosting, (3) fine-tuning ROI justifies smaller dedicated models, (4) margin floor forces pricing or architecture change. Each shifts unit economics fundamentally.",
      why: "Founders who name these thresholds in advance make architectural and financial decisions proactively. Founders who discover them reactively often cut growth or raise emergency capital.",
      paragraphs: [
        [
          s("Inflection points are volume-driven, not time-driven. "),
          x(
            "The negotiation threshold might be 500M tokens monthly. The build-vs-buy crossover might be $80K monthly inference spend. The numbers vary by product — but the pattern is universal.",
            "Your job is to calculate your thresholds, not copy someone else's.",
          ),
          s(" Put dollar and volume thresholds in your financial model — not footnotes."),
        ],
        [
          s("Each inflection enables a different lever. "),
          x(
            "Negotiation improves unit cost without engineering. Self-hosting trades capex and ops for variable cost reduction. Fine-tuning trades upfront ML work for per-request savings.",
            "Margin floor inflection forces pricing, packaging, or product scope change.",
          ),
          s(" Sequence matters: negotiate before you build; route before you fine-tune unless data moat requires it."),
        ],
        [
          s("Missing an inflection is expensive. "),
          x(
            "Six months at 100K/month overpay on API because you did not negotiate costs more than the engineering quarter to fix it.",
            "Founders should calendar threshold reviews when usage hits 50% of projected inflection.",
          ),
          s(" 50% threshold review is early warning — not premature optimisation."),
        ],
      ],
      examples: [
        {
          title: "OpenAI enterprise tiers — volume inflection",
          body: "API providers offer meaningful discounts at enterprise volume tiers. Founders who track token volume against tier thresholds time negotiations deliberately. Crossing a tier without renegotiating is leaving margin on the table.",
        },
        {
          title: "Missed negotiation — 14 months overpay",
          body: "A startup crossed 400M monthly tokens — enterprise tier threshold — and did not renegotiate for 14 months. Estimated overpay: $340K. A quarterly threshold review would have triggered outreach at 200M tokens.",
        },
        {
          title: "Inflection map in Series A deck",
          body: "A founder included an inflection timeline in the Series A deck: current state, negotiation at 300M tokens, routing ROI now, fine-tuning at 600M, self-host evaluation at $100K monthly spend. Investors cited 'cost structure literacy' in the memo.",
        },
      ],
    }, {
      kind: "diagram",
      id: "founder-scaling-inflection",
      type: "flow",
      title: "Scaling Inflection Points",
      caption:
        "Cost and architecture choices compound at each order-of-magnitude in usage.",
    }),
    sectionWithDiagram({
      number: "5.2",
      title: "The model negotiation threshold",
      subtitle: "When your usage volume gives you leverage to renegotiate API pricing",
      take: "API negotiation leverage typically begins at meaningful committed volume — often hundreds of millions of tokens monthly or equivalent spend tiers. Approach vendors at 50–70% of threshold with usage projections, multi-year commitment options, and competitive quotes.",
      why: "Vendor pricing is not fixed. Startups at scale have more leverage than they assume — but only if they negotiate before desperation, not after margin collapse.",
      paragraphs: [
        [
          s("Prepare a negotiation dossier. "),
          x(
            "Current monthly volume and growth projection. Competitive quotes or benchmark pricing. Architecture portability evidence. Multi-year commit willingness.",
            "Vendors discount for predictability and retention — not for asking nicely.",
          ),
          s(" Negotiate from data and alternatives, not from 'we are a startup.'"),
        ],
        [
          s("Committed use discounts trade flexibility for margin. "),
          x(
            "Annual commits lower unit cost but lock you in. Model the tradeoff: savings vs portability risk.",
            "Hybrid: commit on baseline volume, pay-as-go on burst — preserves some flexibility.",
          ),
          s(" Legal and finance should review commit structures — not just engineering."),
        ],
        [
          s("Renegotiate on growth milestones, not once. "),
          x(
            "Each new volume tier warrants a new conversation. Build vendor review into quarterly finance rhythm.",
            "Your first enterprise agreement is not your last.",
          ),
          s(" Assign vendor relationship ownership — usually founder at seed, finance or CTO at scale."),
        ],
      ],
      examples: [
        {
          title: "Anthropic and OpenAI enterprise programs",
          body: "Major API providers structure enterprise pricing around committed volume. Founders approaching thresholds should engage account teams early with growth data. Waiting until finance panics yields worse terms.",
        },
        {
          title: "Competitive quote — 22% reduction",
          body: "A startup obtained competitive quotes from two providers at 280M monthly tokens. Incumbent matched with 22% reduction on 18-month commit. Engineering maintained multi-model abstraction — commit was financial, not architectural lock-in.",
        },
        {
          title: "Over-commit risk — model shift",
          body: "A company committed annual volume on a flagship model tier. A cheaper model launched mid-contract with better task fit. Partial commit flexibility clause limited damage. Founders should negotiate model-flexibility terms in enterprise agreements.",
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
      number: "5.3",
      title: "The build vs buy inflection point",
      subtitle: "The usage level at which building your own infrastructure becomes cheaper than paying for it",
      take: "Self-hosting or dedicated inference infrastructure becomes economically rational when monthly API spend exceeds the fully-loaded cost of engineering, GPU, and ops — typically in the $60K–$150K monthly spend range for many products, but calculate yours.",
      why: "Build-vs-buy is a CFO question with engineering consequences. Wrong timing burns engineering quarters; right timing unlocks margin step-change.",
      paragraphs: [
        [
          s("Fully-load the build side of the equation. "),
          x(
            "GPU cost, ML engineer time, DevOps, monitoring, failure risk, and opportunity cost of engineering not shipping features.",
            "Founders underestimate fully-loaded build cost and overestimate API permanence.",
          ),
          s(" If build ROI requires 18 months to pay back and model economics shift quarterly, buy may still win."),
        ],
        [
          s("Buy buys speed; build buys margin at scale. "),
          x(
            "Before inflection: API optimises time-to-market. After inflection: margin compression makes build rational.",
            "Hybrid is common: self-host high-volume stable workloads, API for burst and experimentation.",
          ),
          s(" The inflection is a range, not a day — model sensitivity analysis."),
        ],
        [
          s("Portability de-risks the decision. "),
          x(
            "Model abstraction layers let you shift workloads gradually — 20% self-hosted, measure, expand.",
            "Big-bang migration is high risk. Incremental migration is how scaled companies transition.",
          ),
          s(" Start self-host proof-of-concept at 50% of calculated inflection — not 100%."),
        ],
      ],
      examples: [
        {
          title: "Replicate and self-host ecosystem",
          body: "Infrastructure providers like Replicate and cloud GPU offerings lower self-host friction. Founders should benchmark self-host cost against API invoices monthly after $40K spend — the crossover may arrive earlier than expected.",
        },
        {
          title: "Hybrid migration — 35% cost reduction",
          body: "At $95K monthly API spend, a startup self-hosted inference for top three stable task types — 60% of volume. Blended cost dropped 35%. Remaining 40% stayed on API for experimentation. Incremental approach limited risk.",
        },
        {
          title: "Premature build — 9-month detour",
          body: "A seed company self-hosted at $18K monthly API spend. Engineering distraction delayed core product. API prices dropped. Build never achieved ROI. The inflection math was wrong — fully-loaded build cost exceeded savings for 24 projected months.",
        },
      ],
    }),
    buildSection({
      number: "5.4",
      title: "The fine-tuning ROI threshold",
      subtitle: "When the cost of fine-tuning a smaller model is justified by the inference cost savings",
      take: "Fine-tuning ROI crosses positive when projected inference savings over 12–18 months exceed fine-tuning cost (data prep, compute, evaluation, deployment, maintenance) — and quality meets production bar on a smaller cheaper model.",
      why: "Fine-tuning is a margin lever, not a moat requirement for every company. Founders should run the ROI calculation before the science project.",
      paragraphs: [
        [
          s("Calculate savings on marginal requests. "),
          x(
            "If fine-tuned 8B replaces frontier model on 70% of requests at 80% lower per-request cost, model blended savings against fixed fine-tune cost.",
            "Include retraining cadence — fine-tuning is not one-and-done at scale.",
          ),
          s(" ROI must survive sensitivity analysis: what if frontier prices drop 30%?"),
        ],
        [
          s("Quality gate is non-negotiable. "),
          x(
            "Cheaper model that fails override rate threshold destroys more value than it saves.",
            "Canary fine-tuned models against production metrics before committing.",
          ),
          s(" Fine-tuning ROI is null if quality regresses — model the quality floor explicitly."),
        ],
        [
          s("Fine-tuning plus routing is the modern pattern. "),
          x(
            "Fine-tuned small model handles head cases; frontier handles long tail. Average cost drops while quality holds.",
            "This is often higher ROI than 100% fine-tune replacement.",
          ),
          s(" Route first, fine-tune second — unless domain data moat requires proprietary weights."),
        ],
      ],
      examples: [
        {
          title: "GitHub Copilot — specialised models at scale",
          body: "Copilot uses model portfolio and specialisation strategies to manage cost and quality at scale. Founders should think in portfolios — fine-tuned specialists plus frontier generalists — not single-model dependency.",
        },
        {
          title: "Fine-tune ROI — 8-month payback",
          body: "A classification-heavy product fine-tuned a 7B model on 40K labelled examples. Inference cost on classified traffic dropped 76%. Total project cost $85K. Monthly savings $11K. Payback 7.7 months. Board approved expanded fine-tune program.",
        },
        {
          title: "Fine-tune without routing — quality regression",
          body: "A startup fine-tuned for cost savings without routing fallback. Long-tail accuracy dropped below threshold. Savings erased by churn on affected segment. Routing plus fine-tune fixed both — lesson: ROI calc must include quality guardrails.",
        },
      ],
    }),
    buildSection({
      number: "5.5",
      title: "Margin evolution as you scale",
      subtitle: "How gross margin changes as you move through each inflection point — the financial model",
      take: "Gross margin in AI products typically follows a curve: compressed at early scale (high API cost, no leverage), improving through routing and negotiation, step-changing at fine-tune or self-host inflection, then stabilising or compressing again if pricing lags usage growth.",
      why: "Boards and investors track margin trajectory, not margin snapshots. Founders must narrate the curve — where you are, what inflection is next, and what margin target each lever delivers.",
      paragraphs: [
        [
          s("Model margin by lever, not by hope. "),
          x(
            "Baseline margin today. +X points from routing. +Y from negotiation. +Z from fine-tune. +W from self-host. Sum with timeline.",
            "Each lever has a realistic activation quarter — not 'someday.'",
          ),
          s(" Present margin as a phased projection with assumptions exposed."),
        ],
        [
          s("Pricing must co-evolve with margin. "),
          x(
            "If usage per seat grows faster than price, margin compresses even with technical levers.",
            "Usage-based pricing, tiered limits, and enterprise packaging are margin tools alongside engineering.",
          ),
          s(" Finance and product co-own margin — not engineering alone."),
        ],
        [
          s("Segment margin reveals truth. "),
          x(
            "Blended 65% gross margin can hide self-serve at 41% and enterprise at 78%.",
            "Segment margin drives pricing, packaging, and sales focus.",
          ),
          s(" Report segment margin to the board monthly at scale."),
        ],
      ],
      examples: [
        {
          title: "Margin bridge in board deck",
          body: "A founder presented a quarterly margin bridge: compression from growth, expansion from routing, step-change from negotiation. Board understood temporary compression as investment, not failure. Narrative clarity prevented panic.",
        },
        {
          title: "Self-serve margin crisis — pricing fix",
          body: "Self-serve segment margin hit 38% at scale while blended stayed 61%. Segment analysis triggered usage-based pricing tier. Self-serve margin recovered to 54% in two quarters. Blended margin masked a crisis.",
        },
        {
          title: "Margin target per growth stage",
          body: "A company set explicit margin targets: 50% at Series A, 60% at Series B, 65% at growth. Each target mapped to inflection levers. Missing a target triggered architecture review, not just cost cutting.",
        },
      ],
    }),
    buildSection({
      number: "5.6",
      title: "The fundraising implications of each inflection point",
      subtitle: "How your unit economics story changes at each stage — and what that means for your next raise",
      take: "Seed investors forgive pre-margin optimisation. Series A investors want a credible path to 60%+ gross margin with named levers. Series B investors expect demonstrated margin improvement and inflection execution — not promises.",
      why: "Fundraising timing should align with inflection narrative. Raising Series B while margin is compressing without a credible lever story is harder than raising after a negotiation or routing win.",
      paragraphs: [
        [
          s("Seed: path credibility, not proof. "),
          x(
            "Show you understand inference economics and have a plan: routing roadmap, negotiation threshold, unit economics spreadsheet.",
            "Investors fund trajectory awareness at seed.",
          ),
          s(" 'We have not optimised yet' is acceptable with a named plan."),
        ],
        [
          s("Series A: early proof points. "),
          x(
            "Demonstrate one lever working: routing deployed, override rate stable, cost per task declining, or negotiation in progress.",
            "A-round memos cite operational maturity on AI economics.",
          ),
          s(" Raise A after first lever proof — not before."),
        ],
        [
          s("Series B: margin trajectory is the story. "),
          x(
            "Investors expect segment margin, inflection timeline with actuals vs plan, and capital efficiency — burn multiple relative to net revenue retention.",
            "B-round without margin improvement narrative faces multiple compression.",
          ),
          s(" Time fundraise after inflection execution when possible — margin wins are fundraising wins."),
        ],
      ],
      examples: [
        {
          title: "Series A — routing proof closed round",
          body: "A founder delayed Series A six weeks to deploy model routing and show cost-per-task decline. Memo cited 'operational leverage on inference.' Round closed at upper end of range. Short delay bought stronger economics story.",
        },
        {
          title: "Series B miss — margin compression",
          body: "A company raised Series A on growth. At B, margin had compressed from 58% to 44% with no inflection execution. Round terms worsened materially. Investors cited 'API cost structure without mitigation evidence.'",
        },
        {
          title: "Growth — margin plus NRR dual narrative",
          body: "A growth-stage AI company presented 67% gross margin with 128% NRR. Inflection execution (negotiation plus fine-tune) was half the investor story. Economics and retention together justified premium multiple.",
        },
      ],
    }),
    buildSection({
      number: "5.7",
      title: "Founder decision lens: modelling your inflection points before your Series B",
      subtitle: "The financial analysis that demonstrates to investors that you understand your own cost structure",
      take: "Before Series B, build an inflection model: current unit economics, four threshold calculations with assumptions, lever impact on margin by quarter, segment breakdown, and actuals-vs-plan tracker. Present it as a core diligence artefact.",
      why: "This model is how founders prove they are building a business, not renting growth on an API tab. It converts technical levers into investor language.",
      paragraphs: [
        [
          s("Build the inflection spreadsheet with exposed assumptions. "),
          x(
            "Rows: token volume, API spend, cost per task, gross margin blended and by segment. Columns: actuals plus quarterly projections. Assumption cells: price per token, routing %, negotiation discount, fine-tune payback.",
            "Investors stress-test assumptions — make them visible.",
          ),
          s(" Sensitivity tabs: what if API prices drop 20%? What if usage per user doubles?"),
        ],
        [
          s("Tie inflection timeline to capital plan. "),
          x(
            "Each lever has engineering cost and time. Capital plan funds inflection execution before margin crisis.",
            "Series B proceeds should fund growth and inflection — not emergency margin repair.",
          ),
          s(" Use of funds slide maps dollars to levers: routing, fine-tune, platform hire."),
        ],
        [
          s("Update actuals monthly — diligence lives in the trend. "),
          x(
            "Investors who see six months of actuals tracking plan trust the model. Deviations with explanation are fine; silence is not.",
            "The model is a management tool first, fundraising tool second.",
          ),
          s(" Founders who run the model monthly make better architecture decisions daily."),
        ],
      ],
      examples: [
        {
          title: "Inflection model in data room",
          body: "A Series B data room led with unit economics inflection model — 18 months actuals, 12 months projection, sensitivity analysis. Lead investor said it was the clearest AI economics artefact they had seen in diligence. Model quality accelerated process.",
        },
        {
          title: "Sensitivity analysis changed strategy",
          body: "Founder's sensitivity tab showed self-host ROI vanished if API prices dropped 25%. Strategy shifted to negotiation plus routing first, self-host evaluation deferred. Model prevented premature build commitment.",
        },
        {
          title: "Monthly actuals review — board confidence",
          body: "Monthly founder review of inflection actuals vs plan became standing board agenda item. One quarter behind on negotiation trigger — board approved vendor relations consultant. Transparency retained confidence without hiding miss.",
        },
      ],
    }),
  ],
  quiz: [
    {
      q: "What are the four unit economics inflection points in AI product scaling?",
      options: [
        "Hiring, firing, fundraising, and exiting.",
        "API negotiation threshold, build-vs-buy crossover, fine-tuning ROI, and margin floor forcing pricing/architecture change.",
        "Product launch, marketing campaign, rebrand, and IPO.",
        "Seed, Series A, Series B, and growth stage only.",
      ],
      correct: 1,
      correctFeedback:
        "Right. Each inflection shifts cost structure fundamentally. Re-read section 5.1.",
      wrongFeedback:
        "The four inflection points are negotiation, build-vs-buy, fine-tuning ROI, and margin floor. Re-read section 5.1.",
    },
    {
      q: "When should founders begin API pricing negotiation?",
      options: [
        "After margin has collapsed.",
        "At 50–70% of projected enterprise volume threshold with growth data and competitive context.",
        "Never — API prices are fixed.",
        "Only after Series C.",
      ],
      correct: 1,
      correctFeedback:
        "Exactly. Negotiate from leverage and projections — not desperation. Re-read section 5.2.",
      wrongFeedback:
        "Re-read section 5.2 on the model negotiation threshold.",
    },
    {
      kind: "order",
      q: "Order the typical lever sequence for cost optimisation at scale.",
      prompt: "Drag to arrange generally earliest lever (top) to later major architectural lever (bottom).",
      items: [
        "Model routing and prompt compression.",
        "API volume negotiation and committed use discounts.",
        "Fine-tuning smaller models for high-volume task types.",
        "Self-host or hybrid infrastructure for stable high-volume workloads.",
      ],
      correctFeedback:
        "Right. Route and compress first, negotiate at volume, fine-tune for ROI, self-host at crossover. Re-read sections 5.3 and 5.4.",
      wrongFeedback:
        "Sequence: routing → negotiation → fine-tune → self-host. Re-read sections 5.1–5.4.",
    },
    {
      q: "When does fine-tuning ROI typically justify the investment?",
      options: [
        "Immediately at product launch.",
        "When projected 12–18 month inference savings exceed fully-loaded fine-tuning cost and quality meets production bar.",
        "Only when investors request it.",
        "When the team is bored.",
      ],
      correct: 1,
      correctFeedback:
        "Right. Fine-tuning is a margin lever with a quality gate — run the ROI calc first.",
      wrongFeedback:
        "Re-read section 5.4 on fine-tuning ROI threshold.",
    },
    {
      kind: "categorize",
      q: "Sort each fundraising stage expectation into the correct category.",
      categories: ["Seed expectation", "Series B expectation"],
      items: [
        { text: "Credible path to margin with named levers.", category: 0 },
        { text: "Demonstrated margin improvement and inflection execution.", category: 1 },
        { text: "Unit economics spreadsheet with trajectory awareness.", category: 0 },
        { text: "Segment margin and actuals vs inflection plan.", category: 1 },
        { text: "'We have not optimised yet' acceptable with a plan.", category: 0 },
        { text: "Margin trajectory is the core economic story.", category: 1 },
      ],
      correctFeedback:
        "Right. Seed funds path; Series B funds proof. Re-read section 5.6.",
      wrongFeedback:
        "Re-read section 5.6 on fundraising implications per stage.",
    },
    {
      q: "What should founders build before Series B to demonstrate cost structure literacy?",
      options: [
        "A marketing video about AI.",
        "Inflection model with thresholds, margin projections, sensitivity analysis, and monthly actuals tracker.",
        "Only a pitch deck without numbers.",
        "A list of preferred GPU vendors.",
      ],
      correct: 1,
      correctFeedback:
        "Exactly. The inflection model converts technical levers into investor-grade financial analysis. Re-read section 5.7.",
      wrongFeedback:
        "Re-read section 5.7 on modelling inflection points before Series B.",
    },
  ],
});
