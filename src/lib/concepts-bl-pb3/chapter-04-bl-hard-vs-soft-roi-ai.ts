import { buildChapter, buildSection, s, x, BL_CALLOUT } from "../concepts-bl-helpers";

export const chapter04BlHardVsSoftRoiAi = buildChapter({
  slug: "bl-hard-vs-soft-roi-ai",
  number: 4,
  shortTitle: "Hard vs Soft ROI",
  title: "Hard vs Soft AI ROI: Measuring What Matters to the Business",
  readingMinutes: 28,
  summary:
    "Hard AI ROI has a direct P&L signature. Soft AI ROI is real but indirect — and systematically undervalued or overclaimed depending on whether the conversion methodology is honest. This chapter builds the framework for capturing both categories with the rigour that survives Finance scrutiny.",
  keyTakeaway:
    "Soft ROI is not weak ROI — it is unquantified ROI waiting for a conversion methodology. Business leaders who dismiss it leave significant value off the table; leaders who overclaim it lose Finance credibility. The discipline is in the conversion, not the category.",
  pmCallout: BL_CALLOUT,
  sections: [
    buildSection({
      number: "4.1",
      title: "Defining hard ROI in the AI context",
      subtitle: "What qualifies as hard ROI, how it is measured, and why the standard is higher than it seems",
      take: "Hard AI ROI meets three criteria: it is directly traceable to a specific financial line, the baseline is documented before deployment, and the change in that line post-deployment can be attributed to AI with a defensible methodology. Anything that meets only one or two of these criteria is not yet hard ROI — it is a hard ROI candidate.",
      why: "The three-criteria standard protects leaders from approving business cases that look hard but are actually soft with financial-sounding language. Hard ROI requires all three elements or Finance will rightfully treat it as soft.",
      paragraphs: [
        [
          s("Criterion one: traceable to a specific financial line. "),
          x(
            "Hard ROI must connect to an identifiable P&L account — not to a broad category like 'operational efficiency.' The connection must be: AI reduces the volume of rework tasks → rework labour cost falls → specific GL code reduces by £X.",
            "Generic claims like 'AI improves operational efficiency by £1M' are not hard ROI because they are not traceable. Specific claims like 'AI reduces claims processing labour cost (GL 4210) by £340K' are traceable and meet criterion one.",
          ),
          s(" For every hard ROI claim, name the specific financial line and the GL code — not a category."),
        ],
        [
          s("Criterion two: documented baseline before deployment. "),
          x(
            "Without a pre-deployment baseline, the 'before' figure is retrospective, subject to revision, and always open to challenge. The baseline for hard ROI must be measured, documented, and agreed with Finance before deployment begins.",
            "Retrospective baselines invite the most convenient interpretation. If Finance is asked to accept a baseline established after the results are known, credibility is immediately compromised — not because the baseline is necessarily wrong, but because the process is unauditable.",
          ),
          s(" Require Finance to sign off on the baseline measurement before deployment approval — not after."),
        ],
        [
          s("Criterion three: defensible attribution methodology. "),
          x(
            "The change in the financial line must be attributed to AI, not merely correlated with the deployment timing. A cost line that fell after AI deployment might have fallen due to seasonal factors, process changes, or headcount decisions unrelated to AI.",
            "Attribution methodology does not require perfection — it requires transparency. A before/after comparison with documented confounders, a control group, or a regression model with stated assumptions all qualify. An assertion without a method does not.",
          ),
          s(" State the attribution methodology in every hard ROI claim — even a simple before/after requires documentation of what else changed."),
        ],
      ],
      examples: [
        {
          title: "Financial services — hard ROI meeting all three criteria",
          body: "A bank's AI fraud detection was evaluated as hard ROI. Financial line: fraud losses (P&L account FL-220). Documented baseline: monthly fraud losses measured for 12 months pre-deployment, averaged £420K/month with documented seasonality. Attribution: difference-in-differences model controlling for transaction volume and macroeconomic fraud trends. Post-deployment: fraud losses averaging £310K/month. Hard ROI: £1.32M annual, attribution-adjusted. Finance accepted without challenge.",
        },
        {
          title: "Retailer — criterion three failure",
          body: "A retailer claimed AI markdown pricing delivered £800K hard ROI. The financial line was clear. The baseline was documented. But the measurement period coincided with a competitor closing stores — creating a natural demand uplift that was indistinguishable from the AI effect. The attribution methodology (simple before/after) could not separate the effects. Finance reclassified the claim as 'unquantified value' — not hard ROI. The lesson: attribution methodology must account for concurrent market changes.",
        },
        {
          title: "Healthcare — baseline sign-off preventing post-deployment dispute",
          body: "A hospital's AI appointment scheduling claimed hard ROI on 'no-show reduction.' Finance signed off on the baseline: 18.4% no-show rate averaged over 14 months pre-deployment. Post-deployment rate: 11.2%. Attribution: no other scheduling changes occurred in the same period (documented in the change log). Hard ROI: 7.2 percentage point no-show reduction × visit value. No post-deployment dispute was possible — the baseline was locked before deployment.",
        },
      ],
    }),
    buildSection({
      number: "4.2",
      title: "Defining soft ROI and strategic value",
      subtitle: "The categories of AI value that do not appear immediately on the P&L — and why they are worth quantifying",
      take: "Soft AI ROI includes: employee experience and retention, decision quality improvement, brand and customer trust, speed of decision-making, and strategic optionality. None of these appear directly on the P&L, but each has a financial consequence that can be estimated with honest assumptions. The goal is not precision — it is informed approximation.",
      why: "Soft ROI is structurally undervalued in AI business cases because it requires additional analytical effort to convert. Leaders who do the conversion work capture a more complete picture of AI value — and often discover that the soft ROI is larger than the hard ROI for strategic AI investments.",
      paragraphs: [
        [
          s("Employee experience and retention have the most accessible conversion pathway. "),
          x(
            "AI that reduces tedious, repetitive work improves employee experience — which reduces voluntary attrition — which reduces replacement and ramp-up cost. The conversion chain has measurable inputs: attrition rate, replacement cost per role, ramp-up time cost. Plug in the numbers and the soft ROI becomes a financial estimate.",
            "The conversion is an estimate, not a precision measurement — but a well-reasoned estimate is more useful to decision-makers than an omission. State the inputs, state the assumptions, and let Finance challenge the specific numbers rather than the entire category.",
          ),
          s(" Convert employee experience ROI using your organisation's actual attrition data and documented replacement cost — not industry benchmarks."),
        ],
        [
          s("Decision quality improvement has a longer and more complex conversion pathway. "),
          x(
            "AI that improves the quality of decisions (better information, faster analysis, reduced cognitive load) creates downstream financial value through fewer bad decisions — but the path from 'better decisions' to a financial outcome requires specific evidence of what bad decisions cost.",
            "Decision quality ROI is most credible when you can point to a specific category of decision error that AI reduces — loan defaults, procurement errors, clinical misdiagnoses — and can estimate the historical cost of that error category.",
          ),
          s(" Identify the specific decision category AI improves, document the historical error rate and cost, and project the improvement as the conversion mechanism."),
        ],
        [
          s("Strategic optionality is the hardest to quantify but often the most strategically important. "),
          x(
            "AI investments that build capability, data infrastructure, or organisational skill create options for future value that cannot be predicted precisely. These option values are real: a company with AI-ready data infrastructure can deploy new AI capabilities faster and at lower cost than a company building from scratch.",
            "Option value can be estimated using real options methodology — assigning a probability to the option being exercised and an estimated value if it is. Even rough estimates make the strategic optionality visible to decision-makers who would otherwise omit it entirely.",
          ),
          s(" Include a named strategic option in every AI business case — 'this investment creates the option to deploy X capability without additional infrastructure cost' — and assign it a probability and rough value."),
        ],
      ],
      examples: [
        {
          title: "Technology company — retention soft ROI",
          body: "A technology company's AI developer tooling claimed a retention soft ROI. Conversion: AI reduces time on low-value debugging tasks (measured: 4.2 hours/week recovered per developer) → improved developer experience → estimated 3-point reduction in annual developer attrition (from 18% to 15%) → replacement cost per developer £45K (HR-documented) → 180 developers affected → soft ROI: £243K annually. Finance challenged the 3-point attrition reduction. After discussion, they accepted 2 points. Adjusted soft ROI: £162K. Transparent methodology enabled productive challenge rather than blanket rejection.",
        },
        {
          title: "Financial services — decision quality conversion",
          body: "A bank's AI credit decision support claimed decision quality soft ROI. Conversion: historical small-business loan default rate 8.3%, AI-projected rate 5.9%, average default loss £24K, annual new loans 340 → projected annual loss reduction: £19.7K per percentage point × 2.4 points = £473K. The conversion was presented as a projection with 40% confidence interval. Finance accepted it as a risk-adjusted soft benefit — contributing to an approved business case where the hard ROI alone was marginal.",
        },
        {
          title: "Retailer — strategic optionality named and estimated",
          body: "A retailer's AI customer data platform named a strategic option: 'The platform creates the option to deploy AI personalisation across all digital channels within 12 months, at an incremental cost of £180K, versus building new infrastructure at an estimated £740K if the platform does not exist.' The option value was £560K in infrastructure cost avoidance if the option was exercised. The option was highlighted as a soft benefit in the business case summary — and exercised 14 months after the platform went live.",
        },
      ],
    }),
    buildSection({
      number: "4.3",
      title: "Converting soft to hard: methods that work",
      subtitle: "Three conversion techniques that turn soft ROI claims into financially credible estimates",
      take: "Three methods convert soft ROI to financially credible estimates: expected value calculation (probability × outcome cost), market proxy valuation (what would you pay to achieve this outcome externally?), and cost of failure analysis (what does it cost when this soft benefit fails to exist?). Each applies to different soft ROI categories.",
      why: "The choice of conversion method is a credibility decision. Using the wrong method for the category produces either an under-estimate that misrepresents value or an over-estimate that Finance rejects. Matching the method to the category is the analytical skill that builds Finance confidence.",
      paragraphs: [
        [
          s("Expected value calculation applies to risk reduction and probabilistic outcomes. "),
          x(
            "When the soft ROI is 'we reduce the probability of a bad outcome,' the conversion is: probability of the bad outcome without AI × cost of the bad outcome. This is standard expected value calculation — and it is widely accepted in Finance when both inputs are defensible.",
            "The two inputs both require justification. Probability inputs should come from historical frequency data or, if unavailable, industry actuarial data. Cost inputs should come from historical cost of comparable incidents, legal or regulatory estimates, or insurance premium data.",
          ),
          s(" Use expected value for risk reduction soft ROI — and document both the probability and cost inputs with their data sources."),
        ],
        [
          s("Market proxy valuation applies to capability and experience soft ROI. "),
          x(
            "What would you pay to achieve the soft benefit through an external provider if AI did not deliver it? Employee experience improvements have a market proxy in recruitment and retention agency fees. Decision quality improvements have a market proxy in consultant day rates for the advisory service AI is replacing. The proxy sets a credible upper bound on the value.",
            "Market proxies are not perfect valuations — they are reasonableness anchors. A soft ROI claim that significantly exceeds the market proxy for the equivalent external service is likely overstated.",
          ),
          s(" For capability soft ROI, find the market proxy — what would an external service provider charge for this capability — and use it as an upper bound on your estimate."),
        ],
        [
          s("Cost of failure analysis applies to decision quality and strategic speed soft ROI. "),
          x(
            "What happens when the soft benefit does not exist? Slower decisions cost delayed revenue. Poor information quality costs rework and error correction. No strategic AI capability costs a competitive disadvantage with a market value attached. Costing the failure scenario and comparing it to the AI investment provides a floor on the soft ROI value.",
            "Cost of failure analysis also works as a business case narrative: 'If we do not make this investment, here is what a single failure event costs us.' One high-cost failure scenario can justify an entire AI investment programme.",
          ),
          s(" For decision quality and speed soft ROI, document one specific failure scenario its estimated cost, and show how AI reduces its probability."),
        ],
      ],
      examples: [
        {
          title: "Pharmaceutical — expected value for regulatory risk",
          body: "A pharmaceutical company's AI pharmacovigilance tool claimed soft ROI on regulatory risk reduction. Conversion: historical frequency of reportable safety events: 3.4 per year. Estimated cost per event (regulatory response, legal, reputational): £680K. Expected annual cost without AI: £2.3M. AI-projected event frequency: 1.2 per year. Expected annual cost with AI: £816K. Soft ROI: £1.5M per year. The expected value calculation, with documented inputs, was the largest single benefit in the business case.",
        },
        {
          title: "Professional services — market proxy for knowledge management",
          body: "A law firm's AI knowledge management tool claimed soft ROI on 'faster access to precedent.' Market proxy: the cost of a senior associate's time to search manually for equivalent precedents — £160/hour × 3.2 hours per complex query × 800 queries per year = £409K. The AI reduced this to 0.4 hours per query. Soft ROI: £409K × (3.2-0.4)/3.2 = £358K. The proxy was credible because it used the firm's own billing rates and measured query volume — not an external benchmark.",
        },
        {
          title: "Manufacturing — cost of failure analysis",
          body: "A manufacturer's AI predictive maintenance tool claimed soft ROI on 'avoided production downtime.' Cost of failure analysis: historical unplanned downtime events — 4.1 per year on average. Cost per unplanned downtime event (lost production, emergency maintenance, schedule disruption): £182K. Annual cost without AI: £746K. AI-projected frequency: 0.9 per year. Projected annual cost with AI: £164K. Soft ROI: £582K. The single failure scenario cost was more than twice the annual AI licence cost — making the investment obvious.",
        },
      ],
    }),
    buildSection({
      number: "4.4",
      title: "Risk reduction as ROI",
      subtitle: "Why risk reduction is the most undervalued AI benefit category — and how to present it to get Finance approval",
      take: "AI-driven risk reduction is consistently the most undervalued benefit in business cases because it quantifies the value of events that did not happen. Business leaders who learn to measure risk reduction ROI capture a category that often represents 30–60% of total AI value in regulated or safety-critical industries.",
      why: "Risk reduction that is not quantified is not included in business cases, which means risk reduction AI is systematically underfunded. Leaders who quantify it accurately direct more investment to AI that prevents costly failures — some of the highest-return AI deployments available.",
      paragraphs: [
        [
          s("Start with historical incident frequency and cost. "),
          x(
            "Every organisation has historical data on the types of incidents AI is intended to prevent: compliance breaches, quality failures, safety incidents, fraud events, customer churn events. The baseline risk model is the historical frequency and average cost of these events.",
            "If internal historical data is incomplete, industry actuarial data, regulatory breach statistics, and insurance underwriting data all provide defensible proxies for incident frequency and cost.",
          ),
          s(" Build the risk baseline from internal historical data first, supplement with industry data where internal data is insufficient."),
        ],
        [
          s("Model AI's risk reduction effect as a probability shift, not a certainty. "),
          x(
            "AI does not eliminate risk — it reduces it. The business case should model the reduction as a probability shift: from baseline frequency X to projected frequency Y. The financial value is the expected cost difference: (X − Y) × cost per event.",
            "Claiming that AI eliminates a risk category entirely is almost never credible and invites Finance challenge. Claiming that AI reduces frequency by a defensible percentage (backed by vendor evidence, pilot data, or comparable deployment benchmarks) is both more accurate and more credible.",
          ),
          s(" Express risk reduction as a frequency reduction percentage with evidence — not as a binary elimination claim."),
        ],
        [
          s("Include second-order risk: the cost of the risk management response. "),
          x(
            "A compliance breach does not cost only the direct penalty — it triggers an internal response (legal, regulatory, operational) that may cost more than the penalty itself. A quality failure does not cost only the rework — it triggers customer service, escalation management, and reputational response costs.",
            "Including second-order risk doubles or triples the cost-per-event estimate in many categories — and the second-order costs are often more defensible than the primary penalty because they are based on internal cost data.",
          ),
          s(" Double the cost-per-event estimate to include response costs — then test whether the total is defensible with Finance before including it in the business case."),
        ],
      ],
      examples: [
        {
          title: "Financial services — comprehensive risk reduction model",
          body: "A bank's AI AML monitoring tool modelled risk reduction in four tiers: direct regulatory fines (historical average £1.2M per reportable event), internal regulatory response cost (£340K per event), operational disruption (£180K per event), and reputational impact (£450K per event estimated from comparables). Total cost per event: £2.17M. Historical frequency: 2.3 events per year. AI-projected frequency: 0.7 per year. Annual risk reduction ROI: £3.47M. This single category justified the entire AI programme investment.",
        },
        {
          title: "Healthcare — frequency data from comparable deployments",
          body: "A hospital had insufficient internal data on AI-preventable clinical errors to set a baseline frequency. They used published NHS data on the category of diagnostic errors their AI tool addressed, validated by their clinical governance team. The external benchmark was disclosed in the business case as 'comparable NHS trust data, validated against our patient population characteristics.' Finance accepted the external data with a 20% downside adjustment to account for potential population differences.",
        },
        {
          title: "Manufacturing — second-order risk making the case",
          body: "A manufacturer's AI safety monitoring tool had a modest direct risk reduction ROI (£180K per year in avoided accident costs). Adding second-order costs — RIDDOR investigation costs, HSE relationship costs, production schedule disruption, and management time — tripled the cost-per-incident estimate to £540K. The three-times multiplier was documented from the company's internal post-incident accounting records. Total risk reduction ROI: £540K. The investment was approved at this figure; it would not have been approved at the direct cost figure alone.",
        },
      ],
    }),
    buildSection({
      number: "4.5",
      title: "Speed to market as ROI",
      subtitle: "Converting AI-enabled speed advantages into financial value — the three mechanisms",
      take: "Speed to market ROI from AI has three mechanisms: captured revenue during a competitive window (first-mover advantage), reduced time cost of capital tied up in product development, and reduced organisational cost of delay. Each mechanism requires different evidence and produces different financial estimates.",
      why: "Speed ROI is often dismissed as speculative, but for product innovation, go-to-market cycles, and competitive response, the financial value of faster execution is both real and calculable. Leaders who measure it can justify AI investments that pure cost-efficiency models cannot.",
      paragraphs: [
        [
          s("Competitive window revenue is the most intuitive but requires the most external evidence. "),
          x(
            "If AI accelerates time-to-market by three months and the market window for a product is twelve months before commoditisation, capturing an additional quarter of premium-margin revenue has a calculable value. The input is: premium revenue per month × months captured by AI acceleration.",
            "The challenge is estimating the competitive window. Internal product managers often have better data on window duration than is credited — drawing on launch history, competitor response times, and customer purchasing cycles.",
          ),
          s(" Use product launch history and competitor response data to bound the competitive window estimate — do not assume it is open-ended."),
        ],
        [
          s("Time cost of capital is the simplest mechanism and the most often omitted. "),
          x(
            "Every month a product, feature, or decision is delayed, capital is tied up without generating return. The cost of this delay is straightforward: capital committed × hurdle rate × months delayed.",
            "For large AI-assisted product development cycles, time cost of capital can be substantial — and it accrues whether or not the delay is visible in the P&L. AI that compresses development cycles by 30% at a cost of £150K may save £400K in capital cost alone.",
          ),
          s(" Calculate time cost of capital for every AI investment that accelerates a major development or approval cycle — it is always positive and often larger than expected."),
        ],
        [
          s("Organisational cost of delay includes the management overhead of running extended programmes. "),
          x(
            "Every month a project runs, it consumes project management, steering committee, executive time, and opportunity cost. AI that compresses a 12-month decision cycle to 8 months saves 4 months of programme overhead — a real financial benefit.",
            "Organisational delay cost is most visible in large transformation programmes and complex procurement decisions. AI tools that provide faster analysis, faster scenario modelling, and faster stakeholder alignment have programme cost savings that belong in the business case.",
          ),
          s(" Estimate programme overhead cost per month for any AI investment targeting process compression — include it in the speed ROI calculation."),
        ],
      ],
      examples: [
        {
          title: "Consumer goods — competitive window revenue",
          body: "A consumer goods company used AI to compress their seasonal product development cycle from 9 months to 6 months. Historical competitive window for seasonal products: 4 months of premium pricing before major retailer markdowns. Acceleration captured 1 additional month of premium margin per SKU. 12 SKUs affected. Incremental margin per SKU per month: £28K. Annual speed ROI: £336K. The AI investment cost: £120K. Payback: under five months.",
        },
        {
          title: "Technology company — time cost of capital",
          body: "A software company used AI-assisted testing to compress their quarterly release cycle from 14 weeks to 9 weeks. New features delayed 5 weeks on average across 4 quarterly releases. Capital committed to features in development: £4.2M average. Hurdle rate: 12%. Annual capital cost savings from 5-week compression × 4 releases: £4.2M × 12% × (5/52) × 4 = £194K. This calculation justified the £85K AI testing tool cost entirely on capital efficiency alone, before any quality improvement benefits were added.",
        },
        {
          title: "Financial services — programme overhead in procurement AI",
          body: "A bank's AI contract analysis tool was used in a major vendor procurement process. The procurement cycle was compressed from 7 months to 4 months. Programme overhead per month: steering committee (4 hours × 6 executives × £350/hour), project management (0.5 FTE), legal review time. Total monthly programme cost: £38K. Three months saved: £114K overhead reduction. This was the primary financial justification for the AI tool in the procurement context — not process accuracy.",
        },
      ],
    }),
    buildSection({
      number: "4.6",
      title: "Employee experience and retention ROI",
      subtitle: "Calculating the financial value of AI's impact on talent — the full conversion model",
      take: "Employee experience ROI from AI is a chain: AI reduces tedious tasks → employee experience improves → voluntary attrition falls → replacement and ramp-up cost decreases. Each link can be measured. The financial result is usually larger than leaders expect — and it is a compelling argument in tight labour markets.",
      why: "Talent cost is one of the largest and most underappreciated financial risks in organisations deploying AI for the first time. AI that either creates or destroys employee experience has a directly calculable financial consequence. Leaders who measure this are better equipped to make deployment decisions that optimise both performance and retention.",
      paragraphs: [
        [
          s("Measure the task experience change directly, not through survey alone. "),
          x(
            "Time spent on tedious, repetitive, low-judgment tasks — before and after AI deployment — is the primary input to the experience conversion. Direct measurement through time-tracking data is more credible than self-reported survey estimates.",
            "Supplement time measurement with targeted experience surveys focused on specific task categories rather than general satisfaction — 'How much has AI changed the time you spend on administrative documentation?' produces more actionable data than 'How satisfied are you with AI tools?'",
          ),
          s(" Measure task experience change through time-tracking data as the primary input — use satisfaction surveys as a secondary validation."),
        ],
        [
          s("Link experience change to attrition risk using your HR data, not industry benchmarks. "),
          x(
            "Industry benchmarks for the relationship between employee experience and attrition exist but vary enormously by role type, seniority, geography, and industry. Your HR system has the actual data: which roles have the highest attrition, what are the exit interview themes, and which teams are experiencing the highest turnover?",
            "The connection between AI deployment and attrition reduction is strongest when exit interview data shows that tedious task volume was a named attrition driver. If it is not a named driver, the attrition reduction claim is weaker and should be discounted.",
          ),
          s(" Check exit interview data before claiming attrition reduction ROI — if tedious work is not a named exit theme, either revise the claim or invest in building the evidence first."),
        ],
        [
          s("Calculate full replacement cost including ramp-up, not just recruitment fees. "),
          x(
            "Replacement cost has four components: recruitment cost (agency fees or HR time), onboarding cost (training, IT, management time), ramp-up cost (productivity gap during the first three to six months), and team disruption cost (morale, knowledge transfer, coverage during vacancy).",
            "For most professional roles, full replacement cost is 1.5–2.5× annual salary. HR departments often have this figure from talent cost analyses. Using the actual company figure rather than a generic multiplier makes the retention ROI significantly more credible.",
          ),
          s(" Use your HR-documented full replacement cost per role — not a generic industry multiplier — in every retention ROI calculation."),
        ],
      ],
      examples: [
        {
          title: "Professional services — full retention ROI model",
          body: "A consultancy deployed AI research tools and measured: research task time reduction of 3.1 hours/week per consultant. Exit interview audit: 34% of departing consultants cited 'high volume of administrative/research work' as a primary reason. Affected population: 280 consultants. Current attrition: 24%. Estimated attrition with AI: 19% (a 5-point reduction applied only to the 34% of exits with research-related drivers). Annual reduced exits: 280 × 0.05 × 0.34 = 4.8 FTEs. Full replacement cost per consultant: £72K. Annual retention ROI: £346K.",
        },
        {
          title: "Technology company — time-tracking data over survey",
          body: "A technology company used IDE activity data and Jira time logs to measure that AI coding assistants reduced time on boilerplate code generation from 31% to 12% of developer task time. This was a 19-percentage-point shift in developer time structure. Corroborating satisfaction survey: mean task satisfaction score improved from 5.4 to 7.8 on a 10-point scale for 'development tasks.' The combination of objective time data and satisfaction survey was more compelling to Finance than either alone.",
        },
        {
          title: "Financial services — attrition ROI not supported by exit data",
          body: "A bank's AI document processing tool business case initially claimed £820K retention ROI based on generic industry attrition-experience benchmarks. The CHRO reviewed the business case and found that exit interviews in the affected teams did not cite document processing burden as a theme — retention drivers were compensation, career path, and manager quality. The CHRO recommended removing the attrition ROI from the business case. The revised case was stronger for the honesty — it was approved faster because Finance did not have to challenge a weak assumption.",
        },
      ],
    }),
    buildSection({
      number: "4.7",
      title: "Weighted ROI scoring model",
      subtitle: "How to combine hard and soft ROI into a single defensible investment case",
      take: "A weighted ROI scoring model combines hard and soft benefits into a single investment score while making the evidence quality of each benefit explicit. Hard benefits are included at full confidence; soft benefits are discounted by their conversion quality. The result is a conservative, auditable, and Finance-credible total ROI estimate.",
      why: "Without a weighting model, business cases either exclude soft ROI (undervaluing the investment) or include it at full value (making the total claim vulnerable to selective challenge). The weighting model makes the confidence level transparent and defensible.",
      paragraphs: [
        [
          s("Assign confidence weights based on evidence quality, not benefit size. "),
          x(
            "Four confidence levels: High (90%) for hard benefits with documented baseline and clean attribution; Medium-High (75%) for soft benefits with actuarial or market proxy conversion; Medium (55%) for soft benefits with reasoned estimation; Low (35%) for soft benefits based primarily on judgment or qualitative argument.",
            "Confidence weights are not a reflection of importance — a high-confidence small benefit may be less important than a medium-confidence large one. The weights reflect how much of the projected value you will actually defend to Finance under challenge.",
          ),
          s(" Assign confidence weights based on the quality of evidence for each benefit category, not on its desirability to the investment case."),
        ],
        [
          s("Calculate the confidence-weighted total and compare it to the investment. "),
          x(
            "Confidence-weighted total ROI = Σ (benefit estimate × confidence weight). If this total remains positive after applying conservative confidence weights, the investment case is robust. If it turns negative under conservative weighting, the investment depends on soft assumptions that require more development before approval.",
            "The confidence-weighted total often reveals that the hard ROI alone is sufficient to justify the investment — and the soft ROI is additional upside. This is a stronger approval narrative than one that requires the full blend of hard and soft to produce a positive case.",
          ),
          s(" If the confidence-weighted ROI is negative, the investment case depends on unreliable assumptions — either strengthen the evidence or reduce the investment scope."),
        ],
        [
          s("Present the scoring model as a summary table, not a calculation buried in an appendix. "),
          x(
            "A one-page scoring table with benefit category, annual estimate, confidence weight, and confidence-adjusted figure gives Finance and leadership the complete picture in a format that supports decision-making. Hiding the confidence model in an appendix is a transparency failure that erodes credibility.",
            "The table also creates a live management tool: as the deployment progresses and evidence builds, confidence weights can be revised upward — producing a real-time picture of how the investment case is strengthening.",
          ),
          s(" Include the weighted ROI scoring table in the business case executive summary — not in an appendix."),
        ],
      ],
      examples: [
        {
          title: "Global bank — scoring model in practice",
          body: "A global bank's AI compliance tool used a four-row scoring table: (1) Cost reduction £480K, confidence 90%, weighted £432K; (2) Risk reduction £1.2M, confidence 75%, weighted £900K; (3) Efficiency gain £340K, confidence 55%, weighted £187K; (4) Employee experience £160K, confidence 35%, weighted £56K. Total weighted ROI: £1.575M against £620K investment. The table showed that even at conservative confidence levels, the case was compelling — and it was approved in one meeting.",
        },
        {
          title: "Retailer — confidence revision as evidence builds",
          body: "A retailer's AI personalisation tool business case included a £890K revenue uplift soft benefit at 55% confidence (£490K weighted) because it was based on pilot data. After six months of full deployment, A/B test data confirmed the revenue effect at 94% statistical confidence. The confidence weight was revised to 85%. The weighted benefit rose from £490K to £757K — and the revised score was used to justify the Phase 2 investment.",
        },
        {
          title: "Healthcare — model revealing an unsound case",
          body: "A hospital's AI administrative automation tool had a compelling headline ROI of £1.4M. Applying the scoring model: hard cost reduction £240K at 90% (£216K), hard labour saving £310K at 90% (£279K), soft efficiency £580K at 40% (£232K), soft experience £270K at 25% (£68K). Total weighted: £795K. Investment: £880K. Weighted ROI was negative. The model identified that the investment depended on the soft efficiency estimate — which was based on aspirational rather than evidenced assumptions. The project was delayed for a pilot that validated the soft assumption before the full investment was approved.",
        },
      ],
    }),
    buildSection({
      number: "4.8",
      title: "BL decision lens: how much soft ROI to count",
      subtitle: "The three questions that determine your soft ROI governance position",
      take: "There is no single right answer to 'how much soft ROI counts' — but there is a defensible governance position: soft ROI counts when the conversion methodology is transparent, the inputs are documented, and Finance has had the opportunity to challenge the assumptions. Leaders who can describe their governance position clearly earn the trust to include soft ROI at full estimated value.",
      why: "Your governance position on soft ROI determines whether your AI programme is systematically under-resourced (excluding all soft ROI) or over-promised (including all soft ROI at face value). Both positions produce poor outcomes. The middle ground — evidence-based, transparently weighted — is the credible position.",
      paragraphs: [
        [
          s("Question one: has the conversion methodology been reviewed by Finance? "),
          x(
            "Soft ROI that Finance has reviewed and accepted, even with adjustment, carries more authority than soft ROI calculated independently by the programme team and presented as a figure. The review process is a credibility-building step, not a bureaucratic obstacle.",
            "Invite Finance to co-develop the soft ROI conversion methodology where the benefit category is material. A Finance-co-authored methodology is unassailable in the approval meeting.",
          ),
          s(" For soft ROI categories above £200K, involve Finance in developing the conversion methodology before presenting to the investment committee."),
        ],
        [
          s("Question two: would the investment be approved without the soft ROI? "),
          x(
            "If the investment is positive on hard ROI alone and soft ROI is additional upside, the governance position is straightforward: include soft ROI as an upside range rather than a base case figure. The investment stands on hard ROI; soft ROI strengthens the case.",
            "If the investment is only positive when soft ROI is included at full face value, the governance position is more demanding: the soft ROI must be robustly evidenced, Finance-reviewed, and included with explicit confidence discounting. Never approve an investment that requires full soft ROI at face value without this rigour.",
          ),
          s(" If the investment requires soft ROI to be positive, require Finance review and confidence discounting before approval."),
        ],
        [
          s("Question three: how will you report soft ROI progress post-deployment? "),
          x(
            "Soft ROI claimed in the business case must be tracked post-deployment — even if imprecisely. An attrition reduction claim that is never followed up with attrition data twelve months post-deployment is a credibility liability.",
            "Build soft ROI tracking into the post-deployment measurement plan at the same time as hard ROI. The tracking does not need to be as rigorous as the measurement of hard ROI — but a directional metric for each soft ROI category demonstrates that the claim was serious.",
          ),
          s(" For every soft ROI category above £100K in the business case, name one directional tracking metric and add it to the post-deployment dashboard."),
        ],
      ],
      examples: [
        {
          title: "Professional services — Finance co-authorship",
          body: "A consulting firm's AI knowledge platform included a £420K soft ROI from 'faster knowledge access reducing senior partner time on internal search.' The programme team invited Finance to co-develop the conversion: they agreed the metric (senior partner search time from time-billing system), the rate (partner billing rate), and the tracking method (monthly time-billing category). Finance signed off on the methodology. The soft ROI was included at full face value in the approved business case — because Finance had built it.",
        },
        {
          title: "Retailer — soft ROI as upside only",
          body: "A retailer's AI category management tool had positive hard ROI of £1.8M against a £1.1M investment. The business case included £640K of soft ROI (employee experience, faster range decision-making) as 'additional upside — not required for investment approval.' Finance reviewed the soft ROI separately and accepted £390K of the £640K as credible. The investment case summary stated: 'Approved on hard ROI basis; soft ROI of up to £390K represents upside potential subject to tracking confirmation.' Clean, credible, and honest.",
        },
        {
          title: "Healthcare — soft ROI tracking preventing a credibility gap",
          body: "A hospital's AI scheduling tool included a £280K employee experience soft ROI. Tracking metric at deployment: nurse voluntary turnover rate in scheduling-heavy wards. At month 12, turnover had fallen from 23% to 17% in those wards — consistent with the soft ROI direction but not precisely attributable to AI alone. The programme team reported: 'Directional confirmation of retention benefit — 6-point turnover reduction in affected wards. Full financial quantification requires additional year of data.' Finance noted the transparent reporting positively at the annual AI programme review.",
        },
      ],
    }),
  ],
  quiz: [
    {
      q: "An AI project shows improved team satisfaction and faster meetings. Why is this NOT yet hard ROI?",
      options: [
        "Satisfaction and meeting speed are not important metrics.",
        "They do not meet the three criteria for hard ROI: traceable financial line, documented baseline, and defensible attribution methodology.",
        "Hard ROI only applies to revenue, not to operational metrics.",
        "The measurement period is too short.",
      ],
      correct: 1,
      correctFeedback:
        "Correct. Hard ROI requires all three criteria. Satisfaction and speed improvements are soft ROI until they are converted to a financial line with a documented baseline and attribution method. Re-read section 4.1.",
      wrongFeedback:
        "Hard ROI has three specific criteria. Re-read section 4.1.",
    },
    {
      q: "A business case includes a £500K risk reduction soft benefit. What is the most important requirement for this to be credible?",
      options: [
        "The £500K must be approved by the legal team.",
        "The expected value calculation must show the probability and cost inputs with their data sources.",
        "Risk reduction should always be excluded from business cases.",
        "The figure must be rounded to the nearest £100K.",
      ],
      correct: 1,
      correctFeedback:
        "Right. Expected value for risk reduction requires both probability and cost inputs to be documented with their sources. Re-read sections 4.3 and 4.4.",
      wrongFeedback:
        "Risk reduction ROI is credible when both inputs (probability and cost) are documented. Re-read sections 4.3 and 4.4.",
    },
    {
      kind: "categorize",
      q: "Sort each benefit into the most appropriate conversion methodology.",
      categories: ["Expected value (probability × outcome cost)", "Market proxy valuation", "Cost of failure analysis"],
      items: [
        { text: "Reduced probability of a regulatory compliance breach.", category: 0 },
        { text: "Faster knowledge search replacing billable partner time.", category: 1 },
        { text: "Faster product decisions reducing delayed revenue risk.", category: 2 },
        { text: "Reduced probability of a quality defect escape.", category: 0 },
        { text: "AI analysis replacing external consultant day rates.", category: 1 },
        { text: "Slower strategic response enabling a competitor advantage.", category: 2 },
      ],
      correctFeedback:
        "Right. Expected value for probability-based risks, market proxy for external service equivalents, cost of failure for decision and speed impacts. Re-read section 4.3.",
      wrongFeedback:
        "Match the conversion method to the benefit category type. Re-read section 4.3.",
    },
    {
      q: "A weighted ROI scoring model shows that total confidence-weighted ROI is negative, even though the headline (unweighted) ROI is £1.2M positive. What does this tell the business leader?",
      options: [
        "The confidence weights are wrong and should be increased.",
        "The investment should be approved because the headline ROI is positive.",
        "The investment case depends on soft ROI assumptions that are not yet sufficiently evidenced — either build stronger evidence or reduce the scope.",
        "Confidence-weighted models are not used in standard Finance practice.",
      ],
      correct: 2,
      correctFeedback:
        "Correct. A negative confidence-weighted ROI means the investment case depends on unreliable soft assumptions. Strengthen the evidence or reduce the scope before seeking approval. Re-read section 4.7.",
      wrongFeedback:
        "Confidence-weighted ROI is the honest assessment. Re-read section 4.7 on the weighted scoring model.",
    },
    {
      kind: "order",
      q: "Order the correct approach to building a hard/soft ROI model for a business case.",
      prompt: "Drag to arrange first step (top) to last (bottom).",
      items: [
        "Identify all potential benefit categories and classify each as hard or soft.",
        "For hard benefits, document the specific financial line, baseline, and attribution method.",
        "For soft benefits, select the conversion methodology and document all input assumptions.",
        "Apply confidence weights based on evidence quality for each benefit.",
        "Present the confidence-weighted total alongside the headline total.",
      ],
      correctFeedback:
        "Correct sequence. Classify, then document, then convert, then weight, then present. Re-read sections 4.1 through 4.7.",
      wrongFeedback:
        "Hard ROI requires documentation; soft ROI requires conversion; both require confidence weighting. Re-read sections 4.1–4.7.",
    },
    {
      q: "What should a business leader do if the investment in an AI project is only positive when soft ROI is included at full face value?",
      options: [
        "Approve immediately — soft ROI is still ROI.",
        "Exclude soft ROI entirely and decline the investment.",
        "Require Finance review of soft ROI conversion methodology, apply confidence discounting, and only approve if the confidence-weighted total remains positive.",
        "Double the soft ROI to create more margin for error.",
      ],
      correct: 2,
      correctFeedback:
        "Right. When the investment depends on soft ROI, the soft methodology must be Finance-reviewed and confidence-discounted. A positive confidence-weighted total after this rigour is the approval threshold. Re-read section 4.8.",
      wrongFeedback:
        "Investments dependent on soft ROI require additional rigour, not less. Re-read section 4.8.",
    },
  ],
});
