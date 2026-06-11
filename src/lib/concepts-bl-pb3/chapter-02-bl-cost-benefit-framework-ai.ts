import { buildChapter, buildSection, s, x, BL_CALLOUT, sectionWithDiagram } from "../concepts-bl-helpers";

export const chapter02BlCostBenefitFrameworkAi = buildChapter({
  slug: "bl-cost-benefit-framework-ai",
  number: 2,
  shortTitle: "Cost-Benefit Framework",
  title: "The AI Cost-Benefit Framework for Business Leaders",
  readingMinutes: 30,
  summary:
    "AI cost-benefit analysis fails most often because the cost side is systematically underestimated and the benefit side is never stress-tested. This chapter builds a complete cost inventory, a benefit categorisation model, and a sensitivity analysis framework that will survive CFO scrutiny.",
  keyTakeaway:
    "A credible AI cost-benefit framework requires honest total cost of ownership — including change management, data preparation, and ongoing operations — balanced against rigorously categorised benefits with stated confidence levels. Leaders who build the full framework earn faster approvals and fewer post-deployment surprises.",
  pmCallout: BL_CALLOUT,
  sections: [
    sectionWithDiagram({
      number: "2.1",
      title: "The full cost inventory for AI projects",
      subtitle: "Every cost category that belongs in the denominator — and why most business cases miss half of them",
      take: "AI project cost inventory has eight categories: software licensing, implementation and integration, data preparation, infrastructure, change management, training, ongoing operations, and opportunity cost. Business cases that present only the licensing cost systematically understate true cost by 40–70% and set every stakeholder up for budget surprises.",
      why: "The CFO's first question when an AI project overshoots budget is always: 'What did the original business case show?' Leaders who present complete cost inventories at approval have a different conversation than those who discover hidden costs during execution.",
      paragraphs: [
        [
          s("Software licensing is the most visible cost and rarely the largest. "),
          x(
            "Per-seat, per-API-call, and usage-based pricing models each compound differently at scale. A per-seat licence that looks affordable at 50 users becomes a significant line item at 500. Usage-based pricing that appears manageable in pilot volumes can grow non-linearly as adoption increases and new use cases emerge.",
            "Model the licensing cost at three adoption scenarios — 30%, 60%, and 100% of eligible users — before signing the contract. The 100% scenario often reveals a different conversation about enterprise pricing tiers.",
          ),
          s(" Negotiate the 100% adoption pricing before pilot, not after you are commercially committed."),
        ],
        [
          s("Implementation, integration, and data preparation are the hidden majority. "),
          x(
            "Connecting AI tools to existing systems — CRM, ERP, data warehouse, core platforms — requires engineering time that the vendor's statement of work rarely covers completely. Data preparation — cleaning, labelling, formatting, and validating the data the AI needs — can consume more engineering effort than the integration itself.",
            "For enterprise AI deployments, budget integration and data preparation at 1.5–2× the software licence cost as a starting assumption. Adjust down only with a detailed technical scoping, not with optimism.",
          ),
          s(" Require a technical scoping document before finalising the cost model — vendor estimates are not scoping documents."),
        ],
        [
          s("Ongoing operations cost is the most consistently omitted category. "),
          x(
            "Model monitoring, retraining, data pipeline maintenance, performance governance, and human oversight roles are operational costs that continue for the life of the AI deployment. A model that drifts without monitoring delivers degrading ROI. A team that monitors and maintains the model costs money every quarter.",
            "Ongoing operations typically run 15–25% of the initial implementation cost per year. This means a £500K implementation generates £75–125K in annual operational cost that must appear in the multi-year NPV calculation.",
          ),
          s(" Include a five-year operational cost projection in every AI business case, not just the first-year cost."),
        ],
      ],
      examples: [
        {
          title: "Insurer — the data preparation surprise",
          body: "An insurer's AI underwriting tool had a £320K software licence and a £480K implementation estimate. Data preparation — cleansing 15 years of policy records, normalising claim codes, and creating training labels — cost an additional £610K that was not in the original business case. Total first-year cost was 2.5× the approved figure. The data preparation requirement had been identified during vendor due diligence but excluded from the business case as 'a one-time item.' One-time items are still costs.",
        },
        {
          title: "Retailer — ongoing operations not budgeted",
          body: "A retailer's AI pricing engine was built and deployed on-budget. Year two saw an unbudgeted £180K data science team cost to retrain the model after a promotional strategy change invalidated the training data. Year three brought another £140K for a competitor pricing data feed integration. The five-year TCO was 3.4× the original business case. Every subsequent AI business case at the company required a five-year operational cost model.",
        },
        {
          title: "Professional services — opportunity cost quantified",
          body: "A consulting firm's AI document tool required 140 hours of senior partner time to validate the AI output quality during the first three months of deployment. At fully-loaded cost, this was £84K of senior capacity that was not in the business case. Opportunity cost — the time of skilled humans required to train, validate, and manage AI outputs — is a real project cost that belongs in the denominator.",
        },
      ],
    }, {
      kind: "diagram",
      id: "bl-ai-transformation",
      type: "flow",
      title: "AI Initiative Execution Path",
      caption:
        "Assess → prioritise → pilot → scale → embed. The sequence that turns AI ambition into measurable outcomes.",
    }),
    sectionWithDiagram({
      number: "2.2",
      title: "One-time vs recurring costs: building the multi-year model",
      subtitle: "How to correctly structure the cost timeline so the NPV calculation reflects reality",
      take: "Presenting AI costs as a single year-one figure systematically misrepresents the investment. The correct model separates one-time costs (implementation, data preparation, training) from recurring costs (licensing, operations, monitoring) and presents a multi-year NPV that reflects the true long-term commitment.",
      why: "Year-one cost comparisons make AI investments look cheaper than they are and make ongoing cost increases look like overruns. A multi-year model aligns expectation to reality and enables accurate payback period calculations.",
      paragraphs: [
        [
          s("One-time costs cluster in years zero and one. "),
          x(
            "Implementation, integration engineering, data preparation, initial training, and change management all peak in the pre-deployment and first-year phases. These costs end — they do not recur — but they must be fully captured in the denominator or the payback period is calculated incorrectly.",
            "A common error: treating change management as a separate organisational budget item rather than a project cost. Change management for AI is a direct project cost that belongs in the business case cost inventory regardless of which budget line it comes from.",
          ),
          s(" Build a cost-by-quarter waterfall for the first two years to show when one-time costs are incurred — not an annual average."),
        ],
        [
          s("Recurring costs grow with adoption and sometimes with usage. "),
          x(
            "Licensing, infrastructure, data pipeline operations, model monitoring, and human oversight all continue for the life of the deployment. Many grow with adoption: more users means more licences; higher task volume means higher inference costs. The recurring cost model must reflect the adoption trajectory, not just the launch-day baseline.",
            "Build the recurring cost model at three adoption scenarios (30%, 60%, 100%) to show the CFO the full range of ongoing cost commitment — and to reveal whether the business case ROI holds at all adoption levels or only at optimistic assumptions.",
          ),
          s(" Show that ROI is positive at all three adoption scenarios — not just the optimistic one."),
        ],
        [
          s("The five-year NPV is the correct reporting frame for significant AI investments. "),
          x(
            "Most AI investments have payback periods of 18–36 months. Presenting only year-one ROI creates a misleading picture for investments with strong long-term returns and a neutral short-term profile. NPV with a stated discount rate gives Finance the correct frame for capital allocation decisions.",
            "Use the organisation's standard hurdle rate as the discount rate. If the organisation uses 8%, use 8% — not a lower rate chosen to improve the NPV appearance.",
          ),
          s(" Include the NPV calculation with the hurdle rate clearly stated in every AI business case above £200K."),
        ],
      ],
      examples: [
        {
          title: "Manufacturing — waterfall cost model catches a budget gap",
          body: "A manufacturer modelled AI predictive maintenance costs as an annual average. A quarterly cost waterfall revealed that Q1 year-one required £420K (implementation and data prep) while the annual average suggested £280K. The budget had been set at £300K per year. The waterfall identified the £120K Q1 gap before it became a mid-project crisis. Quarterly modelling matters as much as annual totals.",
        },
        {
          title: "Financial services — recurring cost at three adoption scenarios",
          body: "A bank's AI credit model had a favourable ROI at 60% advisor adoption but a negative ROI at 30% adoption (insufficient benefit to cover fixed operational costs) and a problematic licensing cost at 100% adoption (usage-based pricing became dominant). The three-scenario model revealed a narrow adoption band where the business case worked. The programme team redesigned the deployment to ensure adoption would land in the viable range before approving the investment.",
        },
        {
          title: "Healthcare — NPV vs payback period",
          body: "An AI diagnostic tool had a 28-month payback period — which looked unfavourable against a competitor software with a 14-month payback. The five-year NPV told a different story: the AI tool's compounding accuracy improvement generated 3.4× the competitor tool's NPV because it improved over time while the competitor tool was static. The NPV frame changed the investment decision.",
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
      number: "2.3",
      title: "Hard vs soft benefit categories",
      subtitle: "Why the distinction matters for Finance approval — and how to handle each category correctly",
      take: "Hard benefits are directly traceable to a P&L line: cost eliminated, revenue added, headcount reduced. Soft benefits are real but indirect: faster decisions, better employee experience, reduced compliance risk. Finance accepts hard benefits at face value; soft benefits require conversion methodology or explicit acknowledgment of their estimation nature.",
      why: "Business cases that mix hard and soft benefits without distinguishing them give Finance license to reject the entire model. Separating them clearly allows Finance to discount the soft benefits appropriately while accepting the hard benefits fully — and often results in a stronger case than one that blends everything together.",
      paragraphs: [
        [
          s("Hard benefits require documented baseline and a clear P&L connection. "),
          x(
            "A £400K hard cost reduction claim needs: the current cost on the P&L, the mechanism by which AI reduces it (fewer processing steps, lower error rework, reduced headcount), and a post-deployment tracking plan that shows the line moving.",
            "The strongest hard benefit cases include the specific GL code that will change, the budget owner who has committed to the saving, and the quarter when the saving is expected to appear. Vague hard benefit claims are treated by Finance as soft.",
          ),
          s(" For each hard benefit, name the GL code, the amount, the quarter it appears, and the owner who has committed to it."),
        ],
        [
          s("Soft benefits should be presented in their own section with explicit conversion assumptions. "),
          x(
            "Improved employee experience reduces attrition. Reduced attrition has a cost: replacement, recruitment, and ramp-up. Converting 'better experience' to a financial figure requires an attrition assumption and a replacement cost assumption — both of which must be stated explicitly.",
            "Unstated conversion assumptions are the source of 'we just made up that number' challenges in Finance reviews. Stating the assumptions gives Finance the opportunity to validate, challenge, or accept them — which is a better outcome than silent rejection.",
          ),
          s(" For each soft benefit with a financial conversion, present the conversion in a separate table with all assumptions named."),
        ],
        [
          s("Risk reduction is the hardest soft benefit to convert — and the most undervalued. "),
          x(
            "The value of avoiding a compliance breach, a safety incident, or a reputational event is real but requires an event probability and an event cost to convert. Expected value = probability × cost is the standard approach. Both inputs require judgment and both must be stated.",
            "Risk reduction benefits are often excluded from business cases because they are hard to quantify — leaving a significant value category off the table. A conservative expected value calculation that acknowledges uncertainty is better than omission.",
          ),
          s(" Include risk reduction as a separate benefit category with stated probability and cost assumptions — never omit it because it is difficult to quantify."),
        ],
      ],
      examples: [
        {
          title: "Legal services — hard benefit documentation",
          body: "A law firm's AI contract review tool claimed £1.1M hard cost reduction from reduced junior associate review hours. Finance required: the specific billing code for associate time, the hourly rate used, the volume reduction assumption, and the partner sponsor who had committed to achieving the reduction through workflow redesign. All four were provided. Finance accepted the £1.1M at full face value in the business case.",
        },
        {
          title: "Retailer — soft benefit conversion done right",
          body: "A retailer's AI scheduling tool claimed improved employee experience would reduce attrition. The conversion table stated: current attrition rate 22%, target attrition rate 16%, replacement cost per employee £8,400 (documented from HR), affected headcount 340. Calculated benefit: £170K per annum. Finance challenged the 6-point attrition improvement assumption and agreed on 4 points as a conservative input. The adjusted benefit of £113K was accepted without further challenge — because the methodology was transparent.",
        },
        {
          title: "Pharmaceutical — risk reduction included",
          body: "An AI pharmacovigilance tool included a risk reduction benefit: reducing the probability of a reportable safety event that triggers regulatory action. The calculation stated: current estimated event frequency 2.1 per year, target 0.9 per year, average regulatory action cost £2.3M. Expected annual value of risk reduction: £2.76M. This single risk reduction category was larger than all productivity benefits combined and drove the investment approval. Excluding it would have killed a high-value investment.",
        },
      ],
    }),
    buildSection({
      number: "2.4",
      title: "Time horizon and discounting",
      subtitle: "Choosing the right evaluation period and applying the correct hurdle rate",
      take: "The evaluation time horizon and discount rate are not neutral technical choices — they are assumptions that determine whether an AI investment appears attractive or marginal. Business leaders must choose these parameters at the business case stage and defend them, because Finance will test both.",
      why: "Inconsistent time horizons make AI investments incomparable and allow advocates to cherry-pick the frame that looks best. Standardising on organisational norms creates discipline and enables genuine portfolio comparison across AI investments.",
      paragraphs: [
        [
          s("Time horizon should reflect the expected useful life of the AI system. "),
          x(
            "Most AI systems have a useful life of three to seven years before significant rearchitecting or replacement. Three years is conservative and appropriate for rapidly evolving AI categories. Five years is standard for enterprise systems with moderate evolution risk. Seven years is justified only for deeply embedded AI in stable processes.",
            "Using a ten-year horizon to make marginal NPVs look positive is a Finance red flag. Using a two-year horizon to exclude long-term compounding value is strategically dishonest. Match the horizon to the realistic product lifespan.",
          ),
          s(" State the basis for your time horizon choice in the business case — 'standard enterprise lifecycle' or 'high AI evolution risk' — not just the number."),
        ],
        [
          s("Use the organisation's standard hurdle rate, not a rate chosen to improve the result. "),
          x(
            "If the organisation uses 10% for capital projects, use 10% for AI. A lower rate inflates NPV; a higher rate deflates it. Both are manipulations that Finance will identify and that damage the credibility of the entire business case.",
            "For AI investments with higher uncertainty than standard capital projects, some organisations apply a risk premium — an additional 2–5% above the standard hurdle rate. If your organisation uses risk premiums, apply them consistently to AI and all comparables.",
          ),
          s(" Match the hurdle rate to the organisation standard and apply a risk premium only if it is applied consistently across the investment portfolio."),
        ],
        [
          s("Present both payback period and NPV — they answer different questions. "),
          x(
            "Payback period answers: how long until we recover the investment? NPV answers: what is the total value created in today's dollars? A project with a long payback but very high NPV may be strategically superior to a short-payback project with modest total returns.",
            "Board-level investment decisions benefit from both frames: the CFO cares about payback for cash flow planning; the CEO and board care about NPV for strategic value creation. Providing both eliminates the 'give me just one number' simplification that loses important information.",
          ),
          s(" Present both payback period and five-year NPV in every AI business case summary — they are complementary, not alternatives."),
        ],
      ],
      examples: [
        {
          title: "Technology company — time horizon discipline",
          body: "A technology company standardised all AI business cases on a four-year horizon based on their historical technology refresh cycle. One team submitted a seven-year model for an AI analytics platform. Finance rejected the horizon, recalculated on four years, and the NPV dropped from positive to slightly negative — triggering a scope reduction that made the four-year case viable. The standardisation prevented an over-scoped investment.",
        },
        {
          title: "Manufacturing — risk premium application",
          body: "A manufacturer applied a 3% AI risk premium above their 8% standard hurdle rate for all AI projects in their first two years of AI adoption, acknowledging higher uncertainty. The premium was applied consistently to all AI investments — not selectively on unfavourable cases. By year three, their improved track record of AI delivery justified removing the premium, reducing the hurdle rate for AI and improving the attractiveness of the pipeline.",
        },
        {
          title: "Healthcare — payback vs NPV decision",
          body: "An AI radiology triage tool showed a 34-month payback period — unfavourable against a rule-based triage update with a 12-month payback. But the five-year NPV of the AI tool was £4.2M versus £0.9M for the rule-based option, because the AI tool compounded accuracy with data while the rule-based tool was static. The board chose the AI tool based on NPV. Presenting only payback period would have produced the wrong decision.",
        },
      ],
    }),
    buildSection({
      number: "2.5",
      title: "Risk adjustments in AI cost-benefit",
      subtitle: "How to reflect delivery risk, adoption risk, and technology risk in the financial model without making the case look arbitrary",
      take: "AI investments carry three risks that standard capital projects do not: delivery risk (will the AI work as specified?), adoption risk (will users actually use it?), and technology risk (will the underlying model remain fit for purpose?). Ignoring these risks produces optimistic models that underperform. Over-adjusting produces models that never get approved.",
      why: "Risk-adjusted financial models earn Finance credibility because they acknowledge uncertainty honestly. The goal is not to make the case look conservative — it is to give decision-makers a realistic expectation so the post-deployment result is not a shock.",
      paragraphs: [
        [
          s("Delivery risk adjusts the cost, not the benefit. "),
          x(
            "AI implementation projects overrun more frequently than standard software projects because the output quality is not known until the system is tested on real data. Budget contingency of 20–30% for AI implementation and data preparation reflects industry experience and should be a standard line item.",
            "Delivery risk can be reduced by phasing the investment: a proof-of-concept phase that validates technical feasibility before committing the full implementation budget. Phase gates reduce delivery risk without reducing ambition.",
          ),
          s(" Include a 25% implementation contingency in the cost model and present it as risk management, not pessimism."),
        ],
        [
          s("Adoption risk adjusts the benefit. "),
          x(
            "The benefit model should show results at 40%, 60%, and 80% adoption — not only at full adoption. If the business case only works at 90% adoption and your organisation's typical enterprise software adoption is 55–65%, the case rests on an unrealistic assumption.",
            "Adoption risk is mitigated by change management investment. Every percentage point of contingency removed from the benefit model by stronger change management planning is a direct NPV improvement.",
          ),
          s(" If the business case only works above 80% adoption, either strengthen the change management plan or revise the benefit assumptions."),
        ],
        [
          s("Technology risk is the AI-specific risk that most business cases ignore. "),
          x(
            "Foundation model providers change pricing, capabilities, and terms of service. Underlying data distributions shift over time. Regulatory requirements change. A model that works today may require significant rework in 18 months.",
            "Technology risk appears in the business case as a technology refresh cost in years three to five — a budget line for model updates, retraining, and potential re-platforming that acknowledges the AI system is not static.",
          ),
          s(" Include a technology refresh budget in years three to five of every AI NPV model — use 15–20% of implementation cost as a starting estimate."),
        ],
      ],
      examples: [
        {
          title: "Financial services — phased investment reducing delivery risk",
          body: "A bank proposed a £1.8M AI credit scoring system. Finance required a proof-of-concept phase (£180K) before approving the full investment. The PoC revealed that three key data fields required for the model were not available in the required format. The data engineering cost increased by £310K. Because the PoC budget had been approved separately, the discovery was managed as a scope refinement rather than an overrun — and the full investment was approved with accurate cost data.",
        },
        {
          title: "Retailer — adoption scenario exposing a structural problem",
          body: "A retailer's AI inventory optimisation tool had a positive NPV at 70% adoption but negative NPV at 40% adoption — and the company's historical ERP adoption in retail operations was 45%. The business case, presented with all three adoption scenarios, prompted a conversation about change management investment. Adding £120K in change management (structured training, process coaching, and manager incentives) made the 70% adoption target credible and the full business case viable.",
        },
        {
          title: "Logistics — technology refresh budget",
          body: "A logistics operator's AI route optimisation case included a year-four technology refresh budget of £95K (15% of implementation cost) for model retraining as the network expanded. When the refresh was actually needed in year three due to a network restructuring, the budgeted line absorbed the cost without a supplementary business case. The foresight had been noted positively by Finance at the original approval — and the CFO cited it as evidence of programme management maturity.",
        },
      ],
    }),
    buildSection({
      number: "2.6",
      title: "Sensitivity analysis for AI investments",
      subtitle: "Testing which assumptions drive the outcome — and what to do when the sensitive variables are also the uncertain ones",
      take: "Sensitivity analysis identifies which input assumptions most affect the NPV outcome. For most AI investments, the top three sensitivities are adoption rate, time-to-value (how quickly benefits ramp), and ongoing operational cost. Leaders who know their sensitivities can actively manage them instead of hoping the base case holds.",
      why: "Without sensitivity analysis, post-deployment ROI shortfalls appear as surprises. With it, they appear as expected outcomes in the low-adoption or slow-ramp scenarios that the programme team was already monitoring. The difference between 'surprise' and 'expected low-case outcome' is a political and governance difference as much as a financial one.",
      paragraphs: [
        [
          s("Build a tornado chart to identify which variables matter most. "),
          x(
            "Vary each key assumption by ±20% holding all others constant. Plot the resulting NPV range for each variable. The variables with the widest impact range — the longest bars on the tornado chart — are the ones that warrant the most management attention and the most contingency planning.",
            "The tornado chart makes it immediately visible to any stakeholder which assumptions drive the business case. This is uncomfortable if the sensitive variables are also the most uncertain ones — but that discomfort is a governance signal, not a reason to omit the analysis.",
          ),
          s(" Present the tornado chart in the business case summary — it demonstrates analytical rigour and forces a direct conversation about the most uncertain assumptions."),
        ],
        [
          s("Test the break-even point for the two most sensitive variables. "),
          x(
            "If adoption rate is the most sensitive variable, calculate the break-even adoption rate: the minimum adoption level at which NPV remains positive. If the break-even is 72% adoption and your historical average is 60%, the business case carries significant adoption risk that must be explicitly managed.",
            "Break-even analysis converts abstract sensitivity ranges into operational targets. 'We need above 72% adoption to stay NPV-positive' is a programme management target, not just an analytical footnote.",
          ),
          s(" Convert break-even adoption into a programme management target and assign an owner before go-live."),
        ],
        [
          s("Sensitivity analysis also identifies where additional investment pays off. "),
          x(
            "If adoption rate has the highest sensitivity, additional change management investment that moves adoption from 60% to 75% has a higher ROI than almost any other programme decision. The sensitivity analysis makes this investment case automatically.",
            "Present the 'investment-in-assumption' recommendation alongside the tornado chart: 'Improving adoption from 60% to 75% through a £50K change management investment shifts NPV from £320K to £1.4M. This is the highest-return use of contingency budget.'",
          ),
          s(" Use sensitivity analysis to prioritise where programme contingency is best spent — not just to document uncertainty."),
        ],
      ],
      examples: [
        {
          title: "Professional services — tornado chart conversation",
          body: "A consulting firm's AI proposal automation tool had adoption rate as the dominant sensitivity (±30% NPV impact) followed by time-to-value (±18%) and licensing cost (±8%). The tornado chart prompted the CEO to ask why adoption was so uncertain. The answer revealed no user research had been done on consultant willingness to adopt. A two-week user research phase was commissioned. Results showed significant workflow concerns that were addressed in the design, raising the adoption confidence interval and improving the base-case NPV.",
        },
        {
          title: "Manufacturer — break-even adoption as a target",
          body: "A manufacturer's AI quality inspection tool had a break-even adoption rate of 68%. The programme sponsor stated at kick-off: 'If we are below 68% adoption at month six, we will stop, review, and redesign before month twelve.' Adoption at month six was 61%. A programme pause and redesign of the operator interface raised adoption to 81% by month nine. The break-even target had created a management trigger that prevented the investment from drifting to an NPV-negative outcome.",
        },
        {
          title: "Financial services — contingency allocation from sensitivity",
          body: "A bank's AI compliance monitoring tool sensitivity analysis showed that the time-to-value assumption drove 40% of the NPV variance. The programme team recommended allocating £90K of the £200K contingency to accelerating data integration — the primary driver of time-to-value delay — and holding £110K for other risks. The CFO approved the allocation recommendation because it was analytically justified. Benefits began 11 weeks earlier than the original base case, moving the outcome from the base to the high scenario.",
        },
      ],
    }),
    buildSection({
      number: "2.7",
      title: "Build vs buy in the cost framework",
      subtitle: "The three cost dimensions of the build/buy decision — and how business leaders should frame it",
      take: "Build vs buy is not an IT decision or a technical preference — it is a cost-benefit decision with three financial dimensions: total cost of ownership, time-to-value, and strategic optionality. Business leaders who leave this decision to the technology team miss the opportunity to frame it correctly for the business.",
      why: "Build decisions that look cheaper in year one are often 3–5× more expensive over five years when operational, talent, and maintenance costs are included. Buy decisions that look expensive in year one often have lower total ownership cost and faster time-to-value. The framework matters more than the initial comparison.",
      paragraphs: [
        [
          s("Total cost of ownership over five years is the correct comparison frame. "),
          x(
            "Build costs include: engineering labour, compute infrastructure, data pipeline engineering, model training, ongoing retraining, monitoring infrastructure, and the ongoing talent cost to maintain and improve the system. These are real recurring costs that grow with model complexity.",
            "Buy costs include: licensing, integration engineering, vendor management, and the dependency risk of contractual exposure. At five-year TCO, enterprise AI vendors often appear more cost-effective than custom builds for non-differentiating AI functions.",
          ),
          s(" Require a five-year TCO comparison for any build vs buy decision — not a year-one cost comparison."),
        ],
        [
          s("Time-to-value is a cost with a financial figure. "),
          x(
            "A build decision that takes 12 months longer than a buy decision to reach production incurs a real opportunity cost: twelve months of foregone benefit that the buy option would have delivered. Quantify this: if the monthly benefit is £80K, twelve months' delay costs £960K in foregone value.",
            "Time-to-value favours buy for most enterprise AI use cases unless the use case requires proprietary data and custom model architecture. Speed to benefit is a financial argument, not an impatience argument.",
          ),
          s(" Add foregone benefit from delay to the build option's total cost when comparing build and buy."),
        ],
        [
          s("Strategic optionality favours build only for core differentiating AI. "),
          x(
            "A custom-built AI system that processes your proprietary data and creates a competitive capability unique to your business has strategic option value that no vendor can replicate. This option value justifies higher build cost and longer time-to-value.",
            "Strategic optionality is overused as a justification for building undifferentiated AI functions that any vendor can provide. Reserve the build argument for AI that sits on your proprietary data and produces capability that is genuinely not available from the market.",
          ),
          s(" Accept the build argument only when the use case sits on proprietary data and the capability is genuinely not available from the market."),
        ],
      ],
      examples: [
        {
          title: "Financial services — five-year TCO reversing the build decision",
          body: "A bank's data team proposed building a custom AI document classification system for £340K versus buying a vendor solution for £480K. A five-year TCO analysis included the engineering team's ongoing maintenance cost (£120K/year), model retraining (£40K/year), and infrastructure (£60K/year). Five-year build TCO: £1.34M. Five-year buy TCO: £780K (licensing plus updates). The buy decision was 42% cheaper over the relevant horizon — and delivered 8 months faster.",
        },
        {
          title: "Technology company — foregone benefit calculation",
          body: "A SaaS company was evaluating building a custom AI recommendation engine (18-month build) versus buying a vendor solution (3-month implementation). Monthly revenue benefit was estimated at £120K. Foregone benefit from 15-month delay: £1.8M. This single calculation shifted the build-buy decision — the custom engine would need to be significantly better than the vendor solution over five years to justify the foregone value.",
        },
        {
          title: "Retailer — proprietary data justifying build",
          body: "A retailer built a custom AI markdown pricing engine using 12 years of their own transactional data, competitor pricing, and local footfall patterns. No vendor solution could access this proprietary data combination. The five-year build TCO was 40% higher than available vendor solutions. The strategic optionality argument was accepted: the proprietary data capability was genuinely unavailable from the market and created a pricing advantage measurable in gross margin percentage points.",
        },
      ],
    }),
    buildSection({
      number: "2.8",
      title: "BL decision lens: approving the cost-benefit framework",
      subtitle: "Five framework quality standards every business leader should enforce before approving an AI investment",
      take: "The cost-benefit framework quality determines whether you are making an informed investment decision or approving a story with numbers attached. Business leaders who enforce framework standards get better decisions; those who accept the first number presented to them inherit the surprises.",
      why: "Your role in the cost-benefit process is not to build the model — it is to enforce the standards that make the model credible, challenge the assumptions that are too convenient, and ensure the CFO can defend the case to the board without hedging.",
      paragraphs: [
        [
          s("Standard one: complete cost inventory with all eight categories present. "),
          x(
            "Reject any business case that excludes change management, ongoing operations, or data preparation as 'separately budgeted' or 'outside scope.' They are inside scope for the total cost of ownership, regardless of which budget line funds them.",
            "If the case presents licensing cost only, send it back with the requirement to add the full inventory. A two-week delay in approval is less costly than a two-year cost overrun.",
          ),
          s(" Review the cost inventory checklist: eight categories must all be present and documented."),
        ],
        [
          s("Standard two: hard and soft benefits separated with conversion methodology stated. "),
          x(
            "If you cannot identify which benefits are directly traceable to a P&L line and which require conversion assumptions, the model is not ready for approval. Require the separation and the methodology before signing off.",
            "Soft benefit conversion assumptions are often where the most unrealistic optimism hides. Review the conversion methodology with the same rigour as the primary financial metrics.",
          ),
          s(" Ask the sponsoring team to walk you through the soft benefit conversion methodology — not just the resulting number."),
        ],
        [
          s("Standards three through five: multi-year NPV present, sensitivity analysis done, and measurement architecture agreed. "),
          x(
            "Third: reject any significant AI business case that presents only year-one figures. Require five-year NPV with stated discount rate. Fourth: require a tornado chart identifying the three most sensitive variables and the break-even points for the top two. Fifth: confirm the measurement architecture has been agreed with Finance — baseline, method, dashboard, and review cadence.",
            "These five standards do not require deep financial expertise to enforce — they require the discipline to ask for them consistently and to decline approval when they are absent.",
          ),
          s(" Make the five standards explicit in your organisation's AI investment approval template — so they are required, not requested."),
        ],
      ],
      examples: [
        {
          title: "Global retailer — investment template enforcing five standards",
          body: "A global retailer added the five framework standards to their AI investment approval template after three AI projects experienced significant cost overruns. The template required all five elements before a submission reached the investment committee. In the first 18 months after adoption, not one approved AI investment required a supplementary budget request. The template paid for itself in the first approved project.",
        },
        {
          title: "Financial services — soft benefit challenge that improved the case",
          body: "A CFO challenged the soft benefit conversion in an AI talent management tool: the team claimed £400K employee experience benefit based on a broad market survey of attrition cost. The CFO asked for the conversion to use the company's own HR data on replacement cost and the department's specific historical attrition rate. The revised calculation produced £280K — 30% lower — but was accepted without further challenge because it used auditable internal data.",
        },
        {
          title: "Manufacturing — sensitivity analysis revealing the right investment",
          body: "A manufacturer's AI maintenance tool business case was sent back to include sensitivity analysis. The resulting tornado chart showed that the third variable — parts availability time — had almost no impact on NPV, but the team had proposed allocating contingency budget there. The contingency was redirected to adoption change management (the most sensitive variable), improving the base-case NPV by £340K. The investment returned to approval with a materially better expected outcome — because the framework standard was enforced.",
        },
      ],
    }),
  ],
  quiz: [
    {
      q: "A business case for an AI tool presents the software licensing cost as the primary investment figure. What is the most important missing cost category?",
      options: [
        "The vendor's annual conference attendance fee.",
        "The office space for the implementation team.",
        "Integration, data preparation, change management, training, and ongoing operational costs.",
        "The marketing budget for the AI tool launch.",
      ],
      correct: 2,
      correctFeedback:
        "Right. Licensing is typically the smallest cost category. The full inventory includes integration, data preparation, change management, training, ongoing operations, and opportunity cost. Re-read section 2.1.",
      wrongFeedback:
        "The full AI cost inventory has eight categories. Re-read section 2.1 for the complete list.",
    },
    {
      q: "At what adoption level should the benefit model in an AI business case be stress-tested?",
      options: [
        "100% — the maximum possible adoption.",
        "The expected adoption level only.",
        "Three scenarios: conservative (40%), base (60%), and optimistic (80–100%).",
        "50% — the midpoint by default.",
      ],
      correct: 2,
      correctFeedback:
        "Correct. Benefits must be modelled at multiple adoption levels. If the case only works at 90% adoption but your historical average is 60%, the case carries unacknowledged adoption risk. Re-read sections 2.2 and 2.5.",
      wrongFeedback:
        "Single-scenario benefit models hide adoption risk. Re-read section 2.2 on multi-year modelling and 2.5 on sensitivity analysis.",
    },
    {
      kind: "order",
      q: "Order the correct approach to building a credible AI cost-benefit framework.",
      prompt: "Drag to arrange first step (top) to last (bottom).",
      items: [
        "Complete the full eight-category cost inventory including ongoing operations.",
        "Separate hard and soft benefits with conversion methodology for soft categories.",
        "Build a multi-year NPV model using the organisation's standard hurdle rate.",
        "Run sensitivity analysis and identify break-even points for top sensitivities.",
        "Agree measurement architecture with Finance before seeking approval.",
      ],
      correctFeedback:
        "Correct sequence. Cost inventory first, then benefit separation, then NPV, then sensitivity, then measurement. Re-read sections 2.1 through 2.8.",
      wrongFeedback:
        "The framework builds from costs to benefits to financial model to risk testing. Re-read sections 2.1–2.8.",
    },
    {
      kind: "categorize",
      q: "Sort each business case element into the correct category.",
      categories: ["Hard benefit — accept at face value", "Soft benefit — requires conversion methodology"],
      items: [
        { text: "Headcount reduction of 4 FTEs at documented fully-loaded cost.", category: 0 },
        { text: "Improved employee satisfaction leading to lower attrition.", category: 1 },
        { text: "Elimination of a third-party data processing contract worth £85K/year.", category: 0 },
        { text: "Faster decision-making reducing market window loss.", category: 1 },
        { text: "Reduction in IT helpdesk tickets with documented cost-per-ticket.", category: 0 },
        { text: "Improved brand perception from better customer AI experience.", category: 1 },
      ],
      correctFeedback:
        "Right. Hard benefits trace directly to a P&L line. Soft benefits require conversion assumptions that must be explicitly stated. Re-read section 2.3.",
      wrongFeedback:
        "Hard benefits have a direct P&L connection. Soft benefits need conversion methodology. Re-read section 2.3.",
    },
    {
      q: "What is the primary financial argument for choosing 'buy' over 'build' for a non-differentiating AI function?",
      options: [
        "Buy solutions are always better quality.",
        "Build teams are unreliable.",
        "Five-year TCO of building (including ongoing talent, maintenance, and compute) is typically higher than buying, and build incurs additional foregone benefit from longer time-to-value.",
        "Vendor solutions never require customisation.",
      ],
      correct: 2,
      correctFeedback:
        "Correct. For non-differentiating AI, buy often wins on both five-year TCO and time-to-value. Build is justified only when the AI sits on proprietary data and the capability is genuinely unavailable from the market. Re-read section 2.7.",
      wrongFeedback:
        "Build vs buy is a five-year TCO and time-to-value question. Re-read section 2.7.",
    },
    {
      q: "A tornado chart in sensitivity analysis shows adoption rate as the longest bar. What should the business leader do as a direct result?",
      options: [
        "Remove adoption rate from the model to simplify it.",
        "Set adoption rate as a break-even target, assign it a programme owner, and allocate contingency to change management that improves adoption.",
        "Reduce the adoption rate assumption to make the model conservative.",
        "Approve the investment only if adoption rate exceeds 100%.",
      ],
      correct: 1,
      correctFeedback:
        "Right. The most sensitive variable becomes a management target and a contingency allocation priority. Sensitivity analysis converts analytical output into programme management action. Re-read section 2.6.",
      wrongFeedback:
        "Sensitivity analysis drives programme management decisions, not just analytical documentation. Re-read section 2.6.",
    },
  ],
});
