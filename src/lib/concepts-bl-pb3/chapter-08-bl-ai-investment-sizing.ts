import { buildChapter, buildSection, s, x, BL_CALLOUT } from "../concepts-bl-helpers";

export const chapter08BlAiInvestmentSizing = buildChapter({
  slug: "bl-ai-investment-sizing",
  number: 8,
  shortTitle: "AI Investment Sizing",
  title: "AI Investment Sizing: How Much to Invest and When",
  readingMinutes: 28,
  summary:
    "Sizing an AI investment incorrectly — either too small to deliver meaningful value or too large for organisational absorptive capacity — is one of the most common causes of AI programme failure. This chapter builds the framework for right-sizing AI investments using portfolio logic, phased commitment, payback analysis, and capital allocation discipline.",
  keyTakeaway:
    "AI investment size should be determined by organisational absorptive capacity, not by technology ambition or vendor proposal. The right AI investment is the largest amount the organisation can deploy, adopt, and measure effectively — and no larger.",
  pmCallout: BL_CALLOUT,
  sections: [
    buildSection({
      number: "8.1",
      title: "How to size an AI investment correctly",
      subtitle: "The four inputs that determine the right investment level for any AI project",
      take: "AI investment size is determined by four inputs: the value of the problem being solved (the ceiling), organisational absorptive capacity (the practical constraint), measurement maturity (the evidence requirement), and available capital relative to competing priorities (the portfolio constraint). An investment that ignores any of these inputs is either too large or too small.",
      why: "Leaders who size investments based solely on the problem value (the ceiling) frequently overbuild relative to absorptive capacity. Leaders who size based solely on available capital underinvest relative to problem scale. The framework balances both.",
      paragraphs: [
        [
          s("Start with the problem value ceiling: the maximum investment that is financially rational. "),
          x(
            "If the problem costs £3M per year and the AI investment delivers a 30% improvement, the maximum annual value is £900K. An investment with a five-year NPV ceiling of £4.5M should not exceed a proportional investment — typically not more than 50–70% of the five-year value as the maximum investment.",
            "Investments that exceed 70% of the five-year value ceiling are ROI-thin and require either a higher confidence in the benefit estimate or a strategic optionality argument to justify the premium.",
          ),
          s(" Calculate the five-year problem value ceiling before determining investment size — do not let vendor proposals anchor the number."),
        ],
        [
          s("Apply the absorptive capacity constraint: the practical ceiling. "),
          x(
            "Organisational absorptive capacity is the amount of AI investment the organisation can deploy, adopt, and measure effectively in a given period. Signs of exceeding absorptive capacity: too many concurrent AI projects for the available data science resource, change management bandwidth spread too thin, and leadership attention divided across too many programmes.",
            "Absorptive capacity is finite and often significantly lower than technical ambition. A £5M AI programme in an organisation with two data scientists and limited change management experience will consistently underperform a £1M programme designed for the actual capacity.",
          ),
          s(" Assess data science resource availability, change management bandwidth, and leadership attention capacity before sizing any AI investment — not as afterthoughts."),
        ],
        [
          s("Measurement maturity and capital portfolio constraint complete the sizing framework. "),
          x(
            "If your measurement infrastructure cannot support a £2M AI investment (insufficient dashboards, attribution capability, or Finance engagement), size the investment down to what your current measurement maturity can credibly evaluate. Investments that cannot be measured accurately will not produce the evidence for reinvestment.",
            "Capital portfolio constraint applies portfolio logic: what is the opportunity cost of this AI investment versus alternative uses of capital? A £1M AI investment returning 18% IRR competes with other capital projects. If the AI IRR is below the portfolio average, the investment requires a strategic case beyond financial return.",
          ),
          s(" Apply all four sizing inputs in sequence — the correct investment size is the lowest of the four constraints, not the highest."),
        ],
      ],
      examples: [
        {
          title: "Financial services — absorptive capacity as the binding constraint",
          body: "A bank identified a £12M annual problem (manual credit decisions). The five-year value ceiling supported a £6M AI investment. However, absorptive capacity assessment revealed: one data science team of four people, no existing AI operations infrastructure, and a change management team at full capacity with two existing programmes. The investment was sized at £800K for Phase 1 — the maximum the organisation could deploy effectively in 12 months. Phase 1 built both the AI capability and the absorptive capacity for Phase 2.",
        },
        {
          title: "Retailer — measurement maturity limiting investment size",
          body: "A retailer proposed a £3M AI personalisation platform. Finance reviewed measurement maturity: no existing A/B testing infrastructure, fragmented customer data across three systems, and no baseline for revenue attribution. Finance recommended sizing the investment at £400K (including measurement infrastructure build) before committing to the full platform. The measurement investment took six months and enabled a clean Phase 2 business case. The Phase 2 investment was £2.4M — approved in one meeting because the measurement infrastructure produced the baseline evidence.",
        },
        {
          title: "Professional services — capital portfolio IRR comparison",
          body: "A consulting firm evaluated three capital investments: AI knowledge platform (IRR 24%), office technology upgrade (IRR 31%), and geographic expansion (IRR 19%). Portfolio capital was £2M. The AI investment at £800K had the lowest IRR but the highest strategic optionality (enabling capability that the office upgrade could not). The firm allocated £800K to AI, £1.2M to office technology, and deferred geographic expansion — based on explicit IRR comparison plus a stated strategic rationale for the AI premium over the IRR differential.",
        },
      ],
    }),
    buildSection({
      number: "8.2",
      title: "Portfolio approach to AI investments",
      subtitle: "Managing AI as a portfolio rather than as individual projects — the governance advantage",
      take: "Managing AI as a portfolio rather than as a collection of independent projects produces better resource allocation, better risk diversification, and better organisational learning. A portfolio view lets leaders balance early-stage experiments, growth-phase deployments, and mature at-scale investments — and makes capital reallocation decisions between them rational rather than political.",
      why: "Leaders who manage AI as individual projects make each investment decision in isolation, missing portfolio diversification opportunities and duplicating infrastructure costs. Portfolio management also creates the comparative performance data that enables informed capital reallocation.",
      paragraphs: [
        [
          s("Structure the portfolio across three investment horizons. "),
          x(
            "Horizon 1: at-scale AI deployments generating current ROI — typically 50–60% of AI investment budget. Horizon 2: AI deployments in growth phase, building toward full ROI — typically 30–40% of budget. Horizon 3: AI experiments and pilots — typically 10–20% of budget.",
            "The horizon structure disciplines the portfolio against two failure modes: over-indexing on experiments (lots of activity, little return) and over-indexing on scale (optimising existing deployments while missing new value opportunities).",
          ),
          s(" Allocate AI investment budget explicitly across three horizons and review the allocation annually — adjust toward higher-return horizons when evidence warrants."),
        ],
        [
          s("Diversify across AI value categories. "),
          x(
            "A portfolio that is all cost reduction AI and no revenue AI misses half the value available from AI. A portfolio that is all experimental pilots and no scale deployments produces activity without return. Explicit diversification across cost reduction, productivity, revenue, and risk reduction creates a portfolio that captures a broader range of AI value — and is more robust to any single value category underperforming.",
            "Portfolio diversification also reduces the political risk of a bad outcome in one category contaminating the whole AI programme. If cost reduction AI fails in one quarter, a well-diversified portfolio with strong revenue AI performance maintains leadership confidence in the overall programme.",
          ),
          s(" Review portfolio allocation across four value categories annually — and require a rationale for any category with less than 10% of portfolio investment."),
        ],
        [
          s("The portfolio enables comparative performance data for capital reallocation. "),
          x(
            "When AI projects are managed as a portfolio with consistent metrics, underperforming investments can be identified and resources reallocated to higher-performing ones. A portfolio view converts the capital reallocation conversation from a political negotiation (defending individual projects) to an evidence-based decision (comparing consistent metrics across all projects).",
            "Capital reallocation from underperforming to outperforming AI projects is one of the highest-return governance actions in an AI programme. It is only possible when projects are evaluated on consistent metrics and managed as a portfolio.",
          ),
          s(" Review AI portfolio performance metrics quarterly and be prepared to reallocate capital from underperforming to outperforming projects at the annual investment cycle."),
        ],
      ],
      examples: [
        {
          title: "Financial services — three-horizon portfolio",
          body: "A bank's AI investment committee adopted a three-horizon portfolio: Horizon 1 (at-scale): fraud detection, credit scoring, AML monitoring — 55% of AI budget (£3.3M). Horizon 2 (growth phase): AI customer service, AI risk reporting — 35% of budget (£2.1M). Horizon 3 (experiments): three new use cases in proof of concept — 10% of budget (£600K). The horizon structure prevented the committee from approving a new Horizon 3 experiment (AI trading analytics) at the expense of Horizon 2 growth-phase programmes that were 60% of the way to full ROI.",
        },
        {
          title: "Retailer — cross-category diversification",
          body: "A retailer's AI portfolio review revealed 80% of investment was in cost reduction AI. The CFO noted: 'Our portfolio is generating cost savings but not revenue growth. If any major cost reduction programme underperforms, our portfolio is very exposed.' The investment was rebalanced: cost reduction 55%, revenue AI 30%, risk reduction 15%. The following year, an AI pricing initiative (revenue category) became the highest-returning AI investment in the portfolio — and the rebalancing decision had made it possible.",
        },
        {
          title: "Insurance — capital reallocation based on portfolio metrics",
          body: "An insurer's quarterly AI portfolio review showed consistent underperformance in AI customer onboarding (6-month actual ROI 32% below target) and consistent outperformance in AI claims triage (6-month actual ROI 40% above target). The investment committee reallocated £400K from AI onboarding Phase 2 to claims triage Phase 3. The reallocation decision was made in 20 minutes using a four-column portfolio summary. The committee noted that the same decision would have required a three-month business case process if AI was managed as individual projects.",
        },
      ],
    }),
    buildSection({
      number: "8.3",
      title: "Phased investment models",
      subtitle: "How to structure AI investment in phases that reduce risk and build evidence",
      take: "Phased AI investment models — proof of concept, pilot, scale — distribute commitment across stages, with each stage's investment conditional on the previous stage's results. This structure reduces the risk of large sunk costs in investments that prove technically infeasible or commercially unattractive.",
      why: "Full-commitment AI investments that fail produce large write-offs and damage leadership confidence in AI programmes for years. Phased investments that fail at the pilot stage produce small write-offs and valuable learning. The governance structure determines the failure mode.",
      paragraphs: [
        [
          s("Phase 1: proof of concept — validate technical feasibility and early ROI signal. "),
          x(
            "Phase 1 answers: can the AI achieve the required quality level on real production data, in the real technical environment, with the real data available? Budget: typically 5–15% of total programme cost. Duration: 6–12 weeks. Decision gate: proceed to pilot only if quality threshold is met.",
            "The most common Phase 1 failure: the AI performs well on curated test data but fails on messy production data that was not included in the test set. Phase 1 must use production data, not demonstration data, or it proves nothing relevant to the investment decision.",
          ),
          s(" Phase 1 must use real production data in the real technical environment — demonstrations on curated data do not validate production feasibility."),
        ],
        [
          s("Phase 2: pilot — validate adoption, workflow integration, and ROI at small scale. "),
          x(
            "Phase 2 answers: will users adopt the AI at the level required to realise the ROI target? Does the workflow integration work in practice? Is the ROI signal at small scale consistent with the business case projections? Budget: typically 20–30% of total programme cost. Duration: 3–6 months. Decision gate: proceed to scale only if adoption and ROI signal meet the pilot targets.",
            "The pilot gate is the most important investment decision in the programme — it is the point at which the most common failure modes (adoption shortfall, integration complexity, quality degradation at scale) should be visible before the major capital commitment.",
          ),
          s(" Set the pilot gate criteria before the pilot begins — not after you have seen the results. Include adoption threshold, quality threshold, and a preliminary ROI signal requirement."),
        ],
        [
          s("Phase 3: scale — commit the full investment based on validated evidence. "),
          x(
            "Phase 3 is conditional on Phase 2 success. The scale investment commits the remainder of the programme budget based on evidence — not on the original business case alone. The scale investment decision should be documented as a separate approval, not a rubber stamp on the original business case.",
            "Scale decisions often reveal infrastructure investment requirements not visible at pilot scale. Budget headroom — typically 15–25% contingency above the Phase 2-extrapolated cost — accommodates the infrastructure surprises that consistently emerge as deployment coverage expands.",
          ),
          s(" Treat the scale investment as a separate approval — review Phase 2 evidence and update assumptions before committing Phase 3 budget."),
        ],
      ],
      examples: [
        {
          title: "Healthcare — Phase 1 production data validation",
          body: "A hospital's AI diagnostic support Phase 1 tested the model on the hospital's actual clinical records — including data quality issues, missing fields, inconsistent coding, and edge cases that vendor demonstration data had not included. The model accuracy on production data was 82% versus the vendor demonstration accuracy of 94%. The gap informed a data quality remediation requirement before Phase 2. The Phase 1 finding prevented a Phase 2 pilot that would have failed — and ultimately improved the Phase 2 outcome to 91% accuracy after data remediation.",
        },
        {
          title: "Financial services — pilot gate criteria",
          body: "A bank's AI document processing pilot set three gate criteria before the pilot began: (1) adoption above 70% of eligible users by week 8, (2) processing accuracy above 96%, and (3) preliminary productivity signal of at least 25% cycle time reduction. At the pilot gate, actual results: adoption 74% (pass), accuracy 97.2% (pass), cycle time reduction 31% (pass). Phase 3 investment was approved in a 15-minute committee meeting — the gate criteria had done all the analytical work.",
        },
        {
          title: "Manufacturing — scale decision as separate approval",
          body: "A manufacturer's AI quality inspection Phase 2 pilot (two production lines) showed strong results. The Phase 3 scale investment (four additional lines) was treated as a separate committee approval. The scale proposal revealed: three lines required additional lighting infrastructure (£95K not in original estimate), one line required sensor array redesign (£40K), and total Phase 3 cost was £185K above the Phase 2-extrapolated estimate. Because the scale decision was a separate approval, the revised cost was reviewed and accepted without the perception of an overrun — it was new information from a new decision stage.",
        },
      ],
    }),
    buildSection({
      number: "8.4",
      title: "AI investment benchmarks by industry",
      subtitle: "What comparable organisations invest in AI — and how to use industry benchmarks in your sizing decision",
      take: "Industry AI investment benchmarks provide a market reference point for sizing decisions — but they must be used carefully. Benchmarks reflect what organisations spend, not what they should spend. Leaders who use benchmarks as the primary sizing input risk over-investing in AI categories that are fashionable but not right for their context, or under-investing in categories where their organisation has specific competitive exposure.",
      why: "Benchmarks are useful for two purposes: confirming that a proposed investment is not wildly out of scale with peer organisations, and identifying categories where your organisation is significantly under-invested relative to peers facing the same competitive environment.",
      paragraphs: [
        [
          s("Use benchmarks to confirm scale, not to determine it. "),
          x(
            "If your AI investment budget is 0.1% of revenue and industry peers average 1.2%, the gap is a conversation starter — not an automatic mandate to increase tenfold. The correct response is to understand why peers invest at that level, whether the investment is generating peer ROI, and whether your specific competitive context requires similar investment.",
            "Benchmarks also reflect lagging decisions: today's published AI investment percentages reflect decisions made 12–24 months ago. The current investment environment may be materially different.",
          ),
          s(" Use benchmark gaps to start the strategic AI investment conversation — not to justify a specific budget figure without understanding the underlying context."),
        ],
        [
          s("Benchmark by category rather than total investment only. "),
          x(
            "A total AI investment benchmark of 1.5% of revenue masks very different category mixes: one organisation may invest primarily in AI risk and compliance (appropriate for heavily regulated industries), while another invests primarily in AI customer experience (appropriate for high-competition consumer markets). Matching your category allocation to the benchmark that reflects your competitive context is more strategic than matching total investment.",
            "Category benchmarks are available from industry analyst reports (Gartner, McKinsey, Deloitte), peer CFO surveys, and industry associations. Cross-reference multiple sources before drawing conclusions.",
          ),
          s(" Find benchmark data for your specific AI investment categories (compliance, customer experience, operations, etc.) — not just total AI spend as a percentage of revenue."),
        ],
        [
          s("The most useful benchmark is ROI-per-pound-invested, not investment level. "),
          x(
            "If peers invest 1.2% of revenue in AI and are generating strong ROI, the benchmark supports similar investment levels. If peers invest 1.2% and are generating poor ROI, the benchmark is an argument for lower investment or better programme design — not for matching the level.",
            "ROI-per-pound benchmarks are harder to find (most organisations do not publish AI ROI data) but are the most relevant for investment sizing. Proxy sources: AI vendor case study ROI figures, academic research on AI ROI distributions, and CHRO/CFO survey results on AI investment returns.",
          ),
          s(" Seek ROI-per-pound benchmark data alongside investment level data — the most useful question is not 'how much do peers spend?' but 'what return do peers get?'"),
        ],
      ],
      examples: [
        {
          title: "Financial services — benchmark gap analysed not matched",
          body: "A regional bank's AI investment was 0.4% of revenue versus a major bank benchmark of 2.1%. The CFO's initial reaction was to increase investment to close the gap. Analysis revealed: major banks were investing heavily in AI trading and high-frequency analytics not relevant to the regional bank's business model; the regional bank's relevant comparison category (AI compliance and AI customer service) benchmark was 0.6% of revenue — a much smaller gap. The benchmark analysis saved an overinvestment of approximately £4M by identifying the right comparison population.",
        },
        {
          title: "Insurance — category benchmark driving allocation",
          body: "An insurer's benchmark analysis showed: peer AI investment in claims automation (the insurer's largest cost driver) averaged 0.8% of premium revenue; the insurer was at 0.2%. In AI underwriting (lower cost driver), peers averaged 0.3% and the insurer was at 0.35% — above benchmark. The benchmark analysis supported a reallocation: reduce AI underwriting investment, increase AI claims automation investment. The reallocation improved portfolio ROI by 22% in the following year.",
        },
        {
          title: "Healthcare — ROI benchmark over investment benchmark",
          body: "A hospital system found that peer NHS trusts were investing significantly in AI administrative automation (benchmark 0.9% of operating cost). Their own AI admin investment was 0.3%. However, a survey of peer trust AI programme outcomes found that only 40% of admin AI investments were generating positive ROI — primarily due to poor baseline measurement and adoption failures. The hospital system chose to invest at 0.5% (between their current level and the benchmark) with a stronger governance framework rather than matching the benchmark with the same failure rate.",
        },
      ],
    }),
    buildSection({
      number: "8.5",
      title: "Payback period and NPV for AI",
      subtitle: "The financial metrics for AI investment decisions — their limits and their correct application",
      take: "Payback period and NPV are both required for AI investment decisions, but they answer different questions and have different failure modes. Payback period can reject high-NPV investments with long payback. NPV can favour overengineered long-horizon investments over practical near-term ones. Using both metrics, with clear decision rules, produces better AI investment decisions than either alone.",
      why: "Most organisations use payback period as the primary AI investment screen — which systematically rejects AI investments with strong long-term compounding returns and short-term learning curves. Understanding the limits of each metric enables more sophisticated investment decisions.",
      paragraphs: [
        [
          s("Payback period is the primary liquidity and risk screen, not the primary value screen. "),
          x(
            "Payback period answers: how long until I recover my capital? This is a liquidity question (do we have the cash flow tolerance for a 24-month payback?) and a risk question (are we exposed for 24 months to changes in assumptions before recovery?). It is not a value question — a high-NPV investment with a 30-month payback creates more value than a low-NPV investment with a 10-month payback.",
            "Using payback as the primary acceptance screen creates a systematic bias against AI investments with compounding long-term value and against learning-curve investments that start slowly and accelerate. Set payback as a constraint (maximum acceptable payback period), not as the primary metric.",
          ),
          s(" Use payback as a constraint (maximum X months) and NPV as the primary value metric — not the reverse."),
        ],
        [
          s("NPV is the primary value metric but requires honest discount rate and time horizon assumptions. "),
          x(
            "NPV discounts future cash flows to present value — correctly reflecting that £100K in year three is worth less than £100K today. The higher the discount rate, the more NPV penalises long-horizon benefits and favours near-term payback. The longer the time horizon, the more NPV captures compounding value.",
            "The most common NPV manipulation in AI business cases: using a lower discount rate than the organisation's standard to inflate long-horizon benefit value. If the organisation's hurdle rate is 12%, using 8% to improve the NPV of a long-horizon AI investment is a credibility-destroying manipulation that Finance will identify.",
          ),
          s(" Use the organisation's standard hurdle rate for NPV — never use a lower rate to improve the appearance of long-horizon AI benefits."),
        ],
        [
          s("The combined decision rule: payback within constraint and NPV positive at hurdle rate. "),
          x(
            "An AI investment should meet both: payback within the maximum acceptable period for your organisation's risk tolerance (typically 18–36 months for operational AI) and NPV positive at the standard hurdle rate over the relevant time horizon.",
            "Investments that fail payback but have exceptional NPV require a strategic override: the sponsor must argue that the long-term value justifies the extended payback risk. This argument should be explicit in the business case, not implicit in a payback waiver request.",
          ),
          s(" Apply both criteria explicitly — and require a documented strategic rationale for any investment that meets NPV but exceeds maximum payback."),
        ],
      ],
      examples: [
        {
          title: "Technology company — payback as constraint",
          body: "A technology company set a payback constraint of 24 months for operational AI. Their AI customer success platform had a 31-month payback — 7 months above the constraint — but a five-year NPV of £3.2M at the standard 10% hurdle rate. The programme sponsor presented an explicit strategic override: the platform created AI capability required for the company's competitive strategy, with NPV clearly exceeding alternative uses of capital. The override was approved with the strategic rationale documented. Without the combined decision rule, the 31-month payback would have produced an automatic rejection.",
        },
        {
          title: "Financial services — NPV manipulation prevented",
          body: "A bank's AI trading analytics business case used a 7% discount rate to produce a positive five-year NPV of £1.4M. Finance noted the standard hurdle rate was 12%. Recalculated at 12%, the NPV was -£240K. The case was returned for revision. The revised case compressed the time horizon (3 years vs 5 years) and tightened the benefit assumptions — producing an NPV of £180K at 12%. Marginally positive but honest. Finance accepted the investment at the reduced scope. The NPV manipulation, if accepted, would have approved a value-destroying investment.",
        },
        {
          title: "Healthcare — strategic override rationale",
          body: "A hospital's AI diagnostic support had a 28-month payback against an 18-month constraint. The strategic override rationale was specific: 'This investment is a clinical governance requirement as of the next CQC inspection cycle, regardless of payback period. The cost of not having this capability at inspection is an estimated £1.4M in ratings impact. Payback of 28 months is within the clinical governance commitment horizon.' The override was approved with the strategic rationale in the approval record. No general 'strategic importance' waiver was accepted — only a specific, quantified strategic rationale.",
        },
      ],
    }),
    buildSection({
      number: "8.6",
      title: "IRR and capital allocation priority",
      subtitle: "Using internal rate of return to rank AI investments against each other and against non-AI alternatives",
      take: "Internal rate of return (IRR) enables direct comparison of AI investments with each other and with non-AI capital projects. Leaders who use IRR as the primary capital allocation tool — rather than payback or gut feel — consistently produce higher-return AI portfolios and make more defensible capital allocation decisions.",
      why: "IRR converts all investments to a comparable return percentage, enabling rational prioritisation when capital is constrained. It is particularly powerful for AI portfolios where projects have different scales, time horizons, and benefit profiles that make simple comparison impossible.",
      paragraphs: [
        [
          s("IRR calculation for AI: the mechanics and the caveats. "),
          x(
            "IRR is the discount rate at which the NPV of an investment equals zero — the return rate the investment generates. For AI, the cash flow model includes: initial investment (negative), annual net benefit (positive), and ongoing costs (negative). The IRR is the rate at which the cumulative discounted cash flows break even.",
            "AI IRR caveats: IRR assumes reinvestment at the same rate — which is an aggressive assumption for high-IRR projects. IRR also cannot rank mutually exclusive investments of different scale (a 40% IRR on a £100K investment may create less value than a 25% IRR on a £1M investment). Use IRR for ranking, not for absolute value comparison.",
          ),
          s(" Use IRR for ranking projects of similar scale — use NPV for comparing projects of different scales."),
        ],
        [
          s("Rank AI investments against each other and against non-AI alternatives. "),
          x(
            "A capital allocation committee with AI and non-AI projects should see IRR for all projects on a single table. An AI project with 22% IRR competes directly with an operational improvement project with 28% IRR and a property investment with 14% IRR. The IRR table enables resource allocation by financial return — with strategic overrides applied explicitly and documented.",
            "Without a common IRR comparison, AI investments are evaluated in isolation and compete for budget against other AI investments only. This creates an AI bubble — where AI gets disproportionate capital regardless of its return relative to non-AI alternatives.",
          ),
          s(" Include AI investments on the same capital allocation ranking table as non-AI investments — evaluated on consistent IRR methodology."),
        ],
        [
          s("Apply strategic premiums explicitly and document them. "),
          x(
            "If an AI investment is approved with a below-average IRR because of strategic importance (competitive necessity, regulatory requirement, capability building), the strategic premium should be stated explicitly: 'This 18% IRR AI investment is approved above the 22% non-AI investment because it provides the AI operations infrastructure required for the three Horizon 2 projects currently in the pipeline.'",
            "Explicit strategic premiums create accountability — the strategic argument must materialise. If the AI infrastructure does not enable the Horizon 2 projects as promised, the original strategic premium was not justified. This accountability prevents 'strategic importance' from becoming a blanket waiver for below-threshold AI investments.",
          ),
          s(" When approving AI investments below the portfolio average IRR, state the strategic premium and the specific future value it is expected to unlock."),
        ],
      ],
      examples: [
        {
          title: "Manufacturing — IRR table enabling rational allocation",
          body: "A manufacturer's capital allocation committee used a unified IRR table for all projects. The table showed: AI predictive maintenance 34% IRR (approved), non-AI process automation 29% IRR (approved), AI quality inspection 21% IRR (marginal — approved with strategic premium: compliance requirement), non-AI facility upgrade 18% IRR (deferred), AI customer analytics 12% IRR (deferred). The IRR table produced allocation decisions in 45 minutes. The previous year, comparable decisions had taken four meetings and produced two allocation disputes.",
        },
        {
          title: "Financial services — AI infrastructure strategic premium",
          body: "A bank's AI data platform had an 11% IRR — below the 16% portfolio average. Strategic premium stated: 'Approved as infrastructure for five pending AI deployments with a combined NPV of £14M. Without the data platform, none of the five can proceed. The data platform IRR of 11% is correct in isolation; as infrastructure, its effective return includes a proportional share of the £14M enabled NPV.' Finance accepted the documented strategic premium. When the five enabled deployments were approved over the following 18 months, the strategic rationale was confirmed.",
        },
        {
          title: "Professional services — below-average IRR without strategic premium deferred",
          body: "A consulting firm's AI knowledge search tool had a 16% IRR — below the 22% portfolio average. No strategic premium was argued. The investment was deferred in the annual cycle. Six months later, an AI knowledge tool from a competitor gained commercial traction. The firm urgently revisited the investment with a strategic competitive necessity argument — this time with a documented strategic premium. The investment was approved at a revised scope that improved IRR to 19% (above the revised portfolio average of 18% after other adjustments).",
        },
      ],
    }),
    buildSection({
      number: "8.7",
      title: "Investment sizing common mistakes",
      subtitle: "The five sizing errors that consistently produce over-investment or under-investment in AI",
      take: "Five AI investment sizing mistakes account for the majority of failed or underperforming AI programmes: pilot-to-scale without evidence, technology-led rather than problem-led sizing, ignoring absorptive capacity, single-year rather than multi-year framing, and failing to account for the full cost of failure.",
      why: "Sizing mistakes are predictable and preventable — but only if they are named before the investment decision. Leaders who know the mistakes can ask the right questions; leaders who encounter them in hindsight face write-offs and governance post-mortems.",
      paragraphs: [
        [
          s("Mistake one: scaling investment before pilot evidence warrants it. "),
          x(
            "The most costly AI investment sizing mistake: committing the full programme budget before the pilot has demonstrated technical feasibility, adoption, and ROI signal. This mistake typically occurs when vendor proposals anchor the investment at scale level, when leadership enthusiasm for AI outpaces programme evidence, or when the timeline requires capital commitment before evidence is available.",
            "The fix: phased investment with explicit gate criteria. No Phase 3 capital committed until Phase 2 gate criteria are met. No exceptions without an explicit risk acceptance by the investment committee.",
          ),
          s(" Refuse to commit Phase 3 scale investment before Phase 2 pilot gate criteria are met — no exceptions."),
        ],
        [
          s("Mistake two: technology-led sizing. "),
          x(
            "AI investment sized by the technology team (to address technical ambition) rather than by the business team (to address business value) consistently overbids relative to absorptive capacity and underbids relative to the highest-value use cases.",
            "The symptom: investment proposals that describe AI architecture and model complexity but do not connect directly to specific business outcomes. The fix: require the business case to be owned and sized by the business lead, with the technology team as a delivery resource, not the sizing decision-maker.",
          ),
          s(" Require business case ownership to sit with the business leader responsible for the outcome — not with the technology team responsible for delivery."),
        ],
        [
          s("Mistakes three through five: absorptive capacity, multi-year framing, and cost of failure. "),
          x(
            "Third: ignoring absorptive capacity — approving more AI investment than the organisation can adopt effectively. Fourth: single-year framing — approving the first year of a multi-year programme without committing to the full programme, creating investment fragmentation and strategic drift. Fifth: failing to account for the full cost of failure — an AI programme that fails after two years of investment has a write-off cost, a talent opportunity cost, and a leadership credibility cost that must be weighed against the investment risk.",
            "The cost-of-failure consideration is particularly important for large investments: a £3M AI programme with a 30% probability of failure has an expected failure cost of £900K that must be reflected in the risk-adjusted return calculation.",
          ),
          s(" Include a risk-adjusted cost of failure calculation in every AI investment above £500K — and use it to set the minimum acceptable IRR."),
        ],
      ],
      examples: [
        {
          title: "Retailer — scale without pilot evidence",
          body: "A retailer committed the full £2.8M for an AI inventory system based on a vendor demonstration and a financial model. A three-month pilot had been proposed but was 'too slow for the competitive urgency.' Six months into deployment, adoption was 28% and the integration to the ERP was producing data quality errors. A £340K remediation project was commissioned. A properly gated pilot would have identified both issues at a Phase 2 cost of approximately £280K — saving £2.5M in premature scale investment.",
        },
        {
          title: "Insurance — business lead vs technology lead ownership",
          body: "An insurer's AI claims tool was initially business-cased by the IT director and sized at £1.9M for a comprehensive technical platform. The CTO required the Head of Claims to own the business case. Rebased from a business outcomes perspective, the investment was sized at £680K for Phase 1 — addressing the highest-value use cases with measurable outcomes. The Phase 1 results funded Phase 2 without additional business case effort. The technology-led original was 2.8× larger than the business-led version — and less focused on the highest-value problems.",
        },
        {
          title: "Technology company — cost of failure calculation",
          body: "A technology company's AI product recommendation investment committee added a cost-of-failure calculation to the business case template. For the £1.2M recommendation engine: probability of success assessed at 65% (based on historical AI project success rates and programme governance quality). Expected failure cost: £1.2M investment write-off + £400K team opportunity cost + £200K reputational impact on next AI proposal = £1.8M. Expected failure cost at 35% probability: £630K. This was included as a risk adjustment: 'The risk-adjusted return accounts for a 35% probability of programme failure with an expected failure cost of £630K.' The investment committee approved the investment with this transparency about failure risk — and funded the governance measures that improved the success probability.",
        },
      ],
    }),
    buildSection({
      number: "8.8",
      title: "BL decision lens: investment approval criteria",
      subtitle: "The five criteria every business leader should require before approving an AI investment",
      take: "AI investment approval should be conditional on five criteria: the investment is sized to the problem value ceiling with absorptive capacity applied, the phasing is explicit with gate criteria defined, the IRR is above the portfolio threshold or a strategic premium is documented, payback is within the maximum constraint or a strategic override is justified, and the cost of failure has been considered in the risk adjustment.",
      why: "These five criteria are not an approval checklist to slow investment — they are a quality standard that protects the organisation from the five most common AI investment mistakes. Business leaders who enforce them earn Finance credibility and produce higher-return AI portfolios.",
      paragraphs: [
        [
          s("Criterion one and two: problem-sized investment and phased commitment. "),
          x(
            "Investment size must be traceable to the problem value ceiling with absorptive capacity applied. If the proposed investment exceeds 70% of the five-year problem value ceiling, require explicit justification. Phased commitment with defined gate criteria must be present for any investment above £200K.",
            "These two criteria prevent the two most common mistakes: oversizing relative to problem value and committing at scale before pilot evidence is available.",
          ),
          s(" Check: is the investment size explained relative to the problem value ceiling? Are the phase gates defined with explicit criteria before the investment is approved?"),
        ],
        [
          s("Criterion three and four: IRR threshold and payback constraint. "),
          x(
            "IRR must exceed the portfolio average or have a documented strategic premium with a specific value argument. Payback must be within the maximum constraint or have a specific strategic override rationale.",
            "Both criteria must be met. A high-IRR investment that exceeds maximum payback needs a strategic override — not a payback exception. A within-payback investment with below-threshold IRR needs a strategic premium — not a blanket strategic importance waiver.",
          ),
          s(" Check: is the IRR above portfolio threshold or is there a specific strategic premium stated? Is payback within constraint or is there a specific strategic override with a quantified rationale?"),
        ],
        [
          s("Criterion five: cost of failure considered. "),
          x(
            "For investments above £500K, the business case should include a risk-adjusted cost of failure: probability of programme failure × expected failure cost (including write-off, opportunity cost, and credibility cost). This figure should be reflected in the minimum acceptable IRR.",
            "If the risk-adjusted failure cost is not considered, the approval committee is implicitly assuming that failure is either impossible or costless. Neither assumption is appropriate for AI investments in 2025.",
          ),
          s(" Check: for investments above £500K, is there a risk-adjusted cost of failure calculation? Is it reflected in the minimum acceptable return?"),
        ],
      ],
      examples: [
        {
          title: "Financial services — five-criteria approval",
          body: "A bank's AI investment committee required all five criteria to be addressed in submissions. The first submission of an AI risk analytics tool addressed four criteria clearly but had no phased investment plan — the full £1.8M was proposed as a single commitment. The submission was returned for revision. The revised version included a three-phase plan with Phase 1 at £320K and explicit gate criteria. The revised submission was approved in the next committee cycle. The four-week delay was judged worthwhile for the governance discipline it established.",
        },
        {
          title: "Retailer — strategic premium documentation",
          body: "A retailer's AI personalisation platform had a 19% IRR — below the 23% portfolio average. The strategic premium stated: 'This investment builds the AI recommendation infrastructure required for four identified commercial applications estimated at £8.4M combined NPV. The platform IRR of 19% is the infrastructure portion; the full portfolio IRR including enabled applications is 31%. Approval of the platform is a prerequisite for the commercial application investments in the 2026 roadmap.' The strategic premium was documented and the committee approved the investment with a 12-month checkpoint to confirm the enabled applications were on track.",
        },
        {
          title: "Healthcare — cost of failure driving governance investment",
          body: "A hospital's AI imaging tool cost of failure calculation: investment write-off £840K, clinical team opportunity cost £180K, procurement cycle restart £120K, credibility cost (next AI investment approval delay) estimated £200K. Total expected failure cost: £1.34M. At 35% historical AI project failure probability: risk-adjusted failure cost £469K. This figure was used to justify a £60K programme governance investment (project management, change management, independent technical review) that reduced failure probability from 35% to 12%. The £60K governance cost produced an expected risk reduction of £310K — the best-return line item in the budget.",
        },
      ],
    }),
  ],
  quiz: [
    {
      q: "A business leader is sizing an AI investment. The problem costs the organisation £5M per year and the AI is expected to deliver a 25% improvement. What is the maximum rational investment ceiling (five-year perspective, 60% of value)?",
      options: [
        "£5M — the full annual problem cost.",
        "£3.75M — five years of 25% improvement × 60% ceiling.",
        "£1.25M — one year of the 25% improvement.",
        "£25M — five years of full problem cost.",
      ],
      correct: 1,
      correctFeedback:
        "Correct. Five-year value: £5M × 25% × 5 = £6.25M. Maximum investment ceiling at 60%: £3.75M. This is the ceiling — not the target. Absorptive capacity, payback, and portfolio constraints may produce a lower actual investment. Re-read section 8.1.",
      wrongFeedback:
        "Investment ceiling = five-year value × 60%. Re-read section 8.1 on investment sizing.",
    },
    {
      q: "An AI investment has a 35% IRR but a 34-month payback against an 18-month maximum constraint. How should the business leader handle this?",
      options: [
        "Reject the investment — it fails the payback test.",
        "Approve immediately — 35% IRR is excellent.",
        "Approve only with a documented strategic override rationale explaining why the 34-month payback is acceptable given the specific strategic value.",
        "Change the payback constraint to 36 months to accommodate this investment.",
      ],
      correct: 2,
      correctFeedback:
        "Right. Payback is a constraint, not just a guideline. Exceeding it requires a specific, documented strategic override — not an undocumented exception. Re-read sections 8.5 and 8.6.",
      wrongFeedback:
        "Payback constraints require documented strategic overrides. Re-read section 8.5.",
    },
    {
      kind: "order",
      q: "Order the three phases of AI investment commitment from smallest to largest commitment.",
      prompt: "Drag to arrange from earliest/smallest phase (top) to latest/largest (bottom).",
      items: [
        "Phase 1: Proof of concept — 5–15% of total programme cost, validating technical feasibility on production data.",
        "Phase 2: Pilot — 20–30% of total programme cost, validating adoption and ROI signal at small scale.",
        "Phase 3: Scale — remaining programme budget, conditional on Phase 2 gate criteria being met.",
      ],
      correctFeedback:
        "Correct. Phased investment distributes commitment based on evidence quality. Each phase should be a separate approval conditional on the previous phase's gate criteria. Re-read section 8.3.",
      wrongFeedback:
        "Phased investment is the primary risk management tool for AI investment sizing. Re-read section 8.3.",
    },
    {
      kind: "categorize",
      q: "Sort each investment sizing input into the correct role in the sizing decision.",
      categories: ["Sets the maximum (ceiling)", "Sets the practical upper limit (constraint)"],
      items: [
        { text: "Five-year problem value at expected AI improvement rate.", category: 0 },
        { text: "Organisational absorptive capacity (data science resource, change management bandwidth).", category: 1 },
        { text: "Maximum payback period the organisation can tolerate.", category: 1 },
        { text: "NPV of the full benefit case at 100% adoption.", category: 0 },
        { text: "Available capital after portfolio allocation to competing priorities.", category: 1 },
        { text: "Vendor's total solution price at full enterprise licence.", category: 0 },
      ],
      correctFeedback:
        "Right. Problem value and full NPV set the ceiling; absorptive capacity, payback tolerance, and available capital are practical constraints. The correct investment is the lowest of the constraints. Re-read section 8.1.",
      wrongFeedback:
        "Investment sizing uses both ceiling and constraint inputs. Re-read section 8.1.",
    },
    {
      q: "Why is IRR a better tool for comparing AI investments across different sizes than NPV alone?",
      options: [
        "IRR is always higher than NPV.",
        "IRR converts all investments to a comparable return percentage, enabling ranking regardless of investment scale.",
        "IRR accounts for inflation while NPV does not.",
        "IRR is simpler to calculate.",
      ],
      correct: 1,
      correctFeedback:
        "Correct. IRR enables direct percentage comparison across investments of different scales. A 34% IRR investment and a 22% IRR investment are directly comparable regardless of their absolute size. Re-read section 8.6.",
      wrongFeedback:
        "IRR enables scale-independent comparison. Re-read section 8.6 on IRR and capital allocation.",
    },
    {
      q: "An AI programme has a 30% probability of failure and an expected failure cost of £1.5M. What is the minimum acceptable risk-adjusted IRR uplift this calculation justifies spending on programme governance?",
      options: [
        "Nothing — governance cost is always overhead.",
        "Up to £450K in governance investment is justified if it materially reduces the 30% failure probability.",
        "The full £1.5M in governance investment is justified.",
        "£100K fixed, regardless of programme size.",
      ],
      correct: 1,
      correctFeedback:
        "Right. Expected failure cost at 30% probability: £450K. Any governance investment that materially reduces the failure probability at a cost below £450K produces positive expected return. Re-read section 8.7 and the BL decision lens in 8.8.",
      wrongFeedback:
        "Risk-adjusted failure cost justifies governance investment. Re-read section 8.7.",
    },
  ],
});
