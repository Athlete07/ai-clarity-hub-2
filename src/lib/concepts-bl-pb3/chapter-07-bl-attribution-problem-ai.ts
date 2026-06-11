import { buildChapter, buildSection, s, x, BL_CALLOUT } from "../concepts-bl-helpers";

export const chapter07BlAttributionProblemAi = buildChapter({
  slug: "bl-attribution-problem-ai",
  number: 7,
  shortTitle: "The Attribution Problem",
  title: "The AI Attribution Problem: Isolating What AI Actually Did",
  readingMinutes: 27,
  summary:
    "Attribution — determining how much of the observed improvement was actually caused by AI — is the hardest methodological challenge in AI ROI measurement. This chapter gives business leaders the tools to design credible attribution, understand the limits of each method, and communicate uncertainty honestly without surrendering the ROI claim.",
  keyTakeaway:
    "Perfect attribution is impossible in most real-world AI deployments. Credible attribution — with stated methodology, honest confidence intervals, and transparent assumptions — is achievable and sufficient for decision-making. Leaders who demand perfect attribution delay decisions indefinitely; leaders who accept credible attribution make better investments faster.",
  pmCallout: BL_CALLOUT,
  sections: [
    buildSection({
      number: "7.1",
      title: "Why attribution is the hardest AI ROI problem",
      subtitle: "The three structural reasons AI attribution is harder than standard investment evaluation",
      take: "AI attribution is structurally harder than standard investment attribution for three reasons: AI works simultaneously with other changes (confounding), AI improves over time rather than delivering a fixed benefit (compounding), and AI affects behaviour in ways that are difficult to separate from the capability itself (behavioural mediation). Each makes simple before/after comparison systematically misleading.",
      why: "Leaders who understand why attribution is hard can set realistic expectations, choose appropriate methods, and communicate credible uncertainty ranges rather than false precision. Leaders who do not understand the structural challenges either overclaim (ignoring confounders) or give up on measurement entirely.",
      paragraphs: [
        [
          s("Confounding: other things change at the same time as AI. "),
          x(
            "AI is rarely deployed in isolation. It accompanies process improvements, team restructurings, training programmes, system updates, and market changes — all of which also affect the metrics being measured. Separating the AI effect from these concurrent changes is the core attribution challenge.",
            "In large organisations, the list of concurrent changes during any six-month deployment window typically includes 10–30 items that could affect the primary metric. Most are small individually; collectively, they can produce effects as large as the AI itself.",
          ),
          s(" Maintain a concurrent change log from deployment date and disclose all material concurrent changes in every ROI report."),
        ],
        [
          s("Compounding: AI benefits grow over time, not in a straight line. "),
          x(
            "A model that learns from deployment data, that is retrained on user feedback, and whose users develop judgment about when to accept AI output — all of these create benefits that are larger in month 12 than in month one. A measurement taken at month six may significantly understate the long-term return.",
            "Compounding also makes early negative results misleading: an AI system that appears to produce modest benefit in the first three months may be in the learning curve phase that precedes the compounding trajectory. Measurement timing matters.",
          ),
          s(" Report AI ROI at multiple time points (3 months, 6 months, 12 months) rather than at a single measurement date — and show the trend, not just the snapshot."),
        ],
        [
          s("Behavioural mediation: AI changes how people work, not just how the system processes. "),
          x(
            "When AI is deployed, people change their behaviour in response to the AI output — accepting recommendations, skipping steps they used to perform manually, or applying AI insights to decisions beyond the immediate task. These behavioural changes produce effects that are not directly caused by the AI but are inseparable from it.",
            "Behavioural mediation means that the AI effect is larger than the direct task automation effect — but harder to attribute. A recommendation AI that changes how managers make decisions contributes to better outcomes in ways that go beyond the recommendation itself.",
          ),
          s(" Include behavioural change documentation in attribution reports — noting specifically which user behaviours changed and what effects those changes produced beyond the direct AI contribution."),
        ],
      ],
      examples: [
        {
          title: "Financial services — concurrent change confounding",
          body: "A bank's AI customer segmentation tool showed a 24% improvement in cross-sell conversion. The concurrent change log revealed: new product launched in month two (estimated 8% conversion uplift), sales incentive scheme changed in month three (estimated 6% uplift), and economic conditions improved general propensity to buy (estimated 4% uplift). Attribution-adjusted AI contribution: approximately 6% — a quarter of the headline figure. The attribution log prevented the bank from declaring a multi-million pound AI win that was primarily driven by other changes.",
        },
        {
          title: "Retailer — compounding trajectory",
          body: "A retailer's AI demand forecasting tool showed 3.4% waste reduction at month three and 11.8% at month twelve. A measurement taken only at month three would have produced a marginal ROI figure below the investment threshold. The twelve-month trajectory revealed compounding performance — the model was improving on deployment data faster than initial projections. Multiple measurement points were the only way to see the trajectory rather than a point-in-time snapshot.",
        },
        {
          title: "Professional services — behavioural mediation",
          body: "A consulting firm's AI proposal tool reduced proposal preparation time (direct attribution: measurable). It also changed how partners reviewed client opportunities — because AI insights made opportunities more comparable, partners began applying a more rigorous qualification process that reduced bids on marginal opportunities. Win rate improved beyond the tool's direct contribution. The behavioural change was documented as an additional attribution category: 'AI-induced qualification improvement' — estimated separately from the direct productivity saving.",
        },
      ],
    }),
    buildSection({
      number: "7.2",
      title: "Types of attribution challenges",
      subtitle: "Five attribution challenge patterns — and the diagnostic questions that identify each",
      take: "Attribution challenges fall into five patterns: concurrent improvement (other changes happening at the same time), selection bias (the people or processes getting AI are systematically different), market tailwind (the whole market is improving), adoption heterogeneity (some people use AI heavily, others barely), and temporal drift (what is normal changes over time). Each requires a different analytical response.",
      why: "Diagnosing which pattern applies to your attribution challenge is the prerequisite to addressing it. Leaders who apply the wrong attribution method to the wrong challenge type produce results that look rigorous but are wrong.",
      paragraphs: [
        [
          s("Concurrent improvement is the most common and most manageable pattern. "),
          x(
            "Diagnostic question: did any non-AI changes that affect the primary metric occur in the measurement period? If yes, estimate each change's impact separately and subtract from the observed improvement. If the residual remains positive and significant, the AI attribution is credible.",
            "Managing concurrent improvement does not require perfect separation — it requires honest disclosure and reasonable estimation. A report that says 'total improvement 18%, concurrent changes estimated 6%, AI-attributable approximately 12%' is more credible than a report that claims the full 18%.",
          ),
          s(" Disclose and estimate all concurrent improvements — a conservative AI attribution is more credible than a headline figure that ignores confounders."),
        ],
        [
          s("Selection bias occurs when AI is deployed to the best performers first. "),
          x(
            "If AI is piloted with the top-performing team and then measured against the company average, the improvement will be misleadingly small. If AI is deployed first to the lowest performers and measured against the company average, the improvement will be misleadingly large.",
            "Diagnostic question: is the population receiving AI systematically different from the comparison population? If yes, match the groups on relevant pre-deployment characteristics before comparing.",
          ),
          s(" Check whether the AI-receiving group is systematically different from the comparison group — if so, use matched comparison rather than average comparison."),
        ],
        [
          s("Adoption heterogeneity, temporal drift, and market tailwind require different diagnostics. "),
          x(
            "Adoption heterogeneity: some users are using AI heavily (high exposure) and some barely (low exposure). The correct attribution is based on the high-exposure group versus the low-exposure group, not AI deployer versus non-deployer. Temporal drift: the definition of 'normal' changes over time due to external factors — seasonal, economic, or regulatory. Market tailwind: your metric improves because everyone's metric improves — AI is just along for the ride.",
            "The unifying diagnostic question for all five patterns: 'What would have happened to our primary metric if we had not deployed AI, and how confident are we in that counterfactual?' The quality of the attribution is the quality of the counterfactual.",
          ),
          s(" State the counterfactual explicitly in every attribution report: 'Without AI, we estimate the metric would have been X. Actual result was Y. AI attribution: Y minus X.'"),
        ],
      ],
      examples: [
        {
          title: "Retailer — selection bias identification",
          body: "A retailer piloted AI merchandising support with their top 20 regional buyers (selected for technical proficiency) and compared results to the full buyer population. The comparison showed 8% improvement in category performance. A data analyst noted that the pilot group had historically outperformed the broader population by 14% — meaning the comparison was inherently biased toward understatement. A matched comparison (pilot group performance versus the same group's historical performance) showed a 22% improvement. Selection bias had masked the real result.",
        },
        {
          title: "Insurance — market tailwind subtracted",
          body: "An insurer's AI risk pricing showed a 9% improvement in combined ratio. Industry data showed that the sector average combined ratio improved 6% in the same period due to favourable weather claims experience. The attribution-adjusted AI contribution: 3 percentage points — not 9. The report stated: 'AI-attributable improvement estimated at 3 percentage points (9% total improvement less 6% sector-wide improvement). We regard this estimate as conservative — not all sector improvement is eliminable from our portfolio.' The conservative disclosure was accepted by Finance.",
        },
        {
          title: "Financial services — adoption heterogeneity attribution",
          body: "A bank's AI analysis tool was used daily by 30% of analysts and occasionally by 50%. High-usage analysts showed 28% faster client report production; low-usage analysts showed 6% improvement. The attribution was exposure-dose based: 'AI contributes 28% improvement in highly adopted use cases; system-wide improvement depends on adoption distribution.' The dose-response attribution was presented to the investment committee as evidence that increasing adoption was the primary value lever — generating a change management investment decision.",
        },
      ],
    }),
    buildSection({
      number: "7.3",
      title: "Experimental design to isolate AI impact",
      subtitle: "Building the attribution test into the deployment design before go-live",
      take: "The cleanest attribution comes from experimental designs built into the deployment — not retrofitted after results arrive. Randomised controlled trials, stepped-wedge designs, and crossover designs all provide better attribution than post-hoc analysis, and all can be built into AI deployment programmes with modest additional planning.",
      why: "Attribution experiments require planning before deployment. Leaders who ask 'how will we prove this worked?' before deployment get attribution evidence. Leaders who ask after deployment get attribution debates.",
      paragraphs: [
        [
          s("Randomised controlled trial: the most powerful, rarely used in enterprise AI. "),
          x(
            "Randomly assign eligible users, customers, or transactions to AI-assisted and non-AI conditions. Run for a defined period. Compare the primary metric between groups. The random assignment eliminates selection bias and most confounders — producing the cleanest attribution available.",
            "Enterprise objections to RCTs: 'We cannot give some customers a worse experience' (manage with ethical review), 'We cannot withhold a benefit from employees' (deploy universally and use exposure-dose variation instead), 'The implementation does not support randomisation' (technical challenge worth solving for significant investments).",
          ),
          s(" For AI investments above £500K where clean attribution is material to reinvestment decisions, require a randomised or near-randomised design before approval."),
        ],
        [
          s("Stepped-wedge design: practical compromise for enterprise deployment. "),
          x(
            "Deploy AI to one region, team, or business unit at a time, over a planned schedule. Each group serves as a comparison for the next group to receive AI. This design is easier to implement than an RCT (full deployment eventually happens) while providing much better attribution than a simultaneous full deployment.",
            "The stepped-wedge design requires: a deployment schedule agreed before launch, consistent measurement across all groups throughout the rollout, and a final group that has received AI long enough to assess compounding effects.",
          ),
          s(" For organisation-wide AI deployments, require a stepped-wedge rollout plan as the default — simultaneous full deployment eliminates the attribution opportunity."),
        ],
        [
          s("Crossover design: for processes where AI can be turned off and on. "),
          x(
            "If the AI tool can be activated for a period and deactivated for a comparison period (for the same user or process), the within-subject comparison eliminates selection bias entirely. Each user or process is their own control.",
            "Crossover designs are practical for: AI tools that supplement rather than replace (the user can work without it), recommendation tools (the recommendation can be withheld for a comparison period), and quality check tools (the AI check can be suspended for a comparison sample).",
          ),
          s(" Consider a crossover design for AI tools that can be activated and deactivated — the within-subject comparison is typically the most credible available attribution."),
        ],
      ],
      examples: [
        {
          title: "E-commerce — RCT built into deployment",
          body: "An e-commerce company deployed AI product search ranking to 30% of users (treatment) while the remaining 70% received the existing algorithm (control) for eight weeks before full deployment. Primary metric: revenue per session. Treatment: £4.12; control: £3.68. Attribution: £0.44 per session uplift, statistically significant at 95% confidence. Full deployment was approved on clean RCT evidence. The eight-week delay and temporary withholding of the improved experience was judged worthwhile for the quality of the attribution evidence.",
        },
        {
          title: "Manufacturing — stepped-wedge rollout",
          body: "A manufacturer deployed AI quality inspection to one production line per month over six months. Measurement tracked defect escape rate on AI-live lines versus not-yet-live lines throughout the rollout. The stepped-wedge produced six comparison points. The consistent improvement (each newly live line showing improvement within 4–6 weeks) was more compelling evidence than a single before/after comparison would have provided. The progressive evidence also gave the investment committee confidence to approve the final two lines when the first four showed consistent results.",
        },
        {
          title: "Financial services — crossover in credit advisory",
          body: "A bank's AI credit advisory tool was tested with a crossover design: each advisor received AI suggestions for one week, then worked without them for one week, alternating for six weeks. Within-advisor comparison of decision quality (measured by loan performance proxy) showed consistent 18% improvement in AI-on weeks versus AI-off weeks. The within-subject design eliminated the experience-level confounders that had complicated previous attribution attempts. The crossover evidence was accepted by the credit risk committee without challenge.",
        },
      ],
    }),
    buildSection({
      number: "7.4",
      title: "Control groups and A/B testing in enterprise",
      subtitle: "Making control groups work in complex organisations — the practical implementation guide",
      take: "Control groups in enterprise AI are harder to implement than in digital consumer products — but not impossible. The practical barriers are primarily organisational (fairness, consistency of treatment, operational complexity) rather than technical. Leaders who invest in overcoming these barriers produce attribution evidence that is three to five times more credible than the alternative.",
      why: "Many enterprise AI leaders assume control groups are impractical for their organisations and never attempt them. In doing so, they permanently handicap their ability to make evidence-based AI reinvestment decisions. Most of the practical barriers can be overcome with modest governance investment.",
      paragraphs: [
        [
          s("The fairness objection: 'We cannot give some employees or customers a worse experience.' "),
          x(
            "Resolution: the control group is not receiving a worse experience — they are continuing to receive the current, familiar experience. The AI group is receiving an experimental experience. Framing matters: the trial is testing whether the AI genuinely improves outcomes, which benefits both groups if the evidence supports wider deployment.",
            "For customer-facing AI, ethical review of the control group design is appropriate. For internal employee tools, HR and union agreement on the trial terms resolves most fairness objections.",
          ),
          s(" Frame the control group as an evidence-building measure that protects both groups from premature deployment of an unvalidated system."),
        ],
        [
          s("Group equivalence: ensuring the comparison groups start from the same position. "),
          x(
            "Random assignment ensures equivalence in expectation — but in small enterprise groups (fewer than 100 units), random assignment may still produce unbalanced groups by chance. Pre-test equivalence checks confirm that the groups are comparable on the most important pre-deployment characteristics.",
            "Check equivalence on: the primary metric (similar historical performance), volume (similar transaction counts), and relevant demographics (experience level, tenure, geographic profile). Document the equivalence check before the trial begins — not after results raise questions about comparability.",
          ),
          s(" Document pre-test equivalence checks before the trial begins — this is the evidence that the comparison was fair."),
        ],
        [
          s("Operational complexity: maintaining the control condition during the trial period. "),
          x(
            "Enterprise trials fail when control group members informally access the AI tool through colleagues, when managers inadvertently contaminate the control by sharing AI insights, or when the trial period is too short to produce meaningful performance differences.",
            "Trial integrity requires: clear communication to all participants about the trial design, monitoring for cross-contamination (colleagues sharing AI outputs), and trial duration long enough to see a complete effect cycle — typically 4–12 weeks depending on the decision cycle.",
          ),
          s(" Assign a trial integrity owner responsible for monitoring contamination and reporting breaches — with authority to exclude contaminated observations from the analysis."),
        ],
      ],
      examples: [
        {
          title: "Insurance — fairness objection resolved",
          body: "An insurer's underwriting AI control group trial faced a fairness challenge from the head of underwriting: 'Why are some teams getting the tool and others not?' The resolution: all teams were informed that the four-week trial was a validation phase to ensure the tool worked as promised before full deployment. The trial was framed as a quality assurance step that protected all underwriters from a premature tool that might be unreliable. All teams accepted the framing. Post-trial deployment was smoother because teams had understood the purpose of the trial.",
        },
        {
          title: "Professional services — pre-test equivalence check",
          body: "A consulting firm's AI research tool trial assigned six teams to AI and six to control. Pre-test equivalence check revealed that the AI group had, by chance, a higher proportion of senior staff than the control group. The assignment was rebalanced by moving two senior-heavy project teams between groups. The rebalanced pre-test equivalence check showed no significant differences. The trial result — presented with the equivalence documentation — was accepted by the management committee as clean evidence.",
        },
        {
          title: "Financial services — trial integrity ownership",
          body: "A bank's AI credit tool trial assigned a named trial integrity officer with authority to monitor for contamination. In week three, the officer detected that two analysts in the control group had been receiving AI-generated summaries from colleagues in the AI group via email. The contaminated observations were excluded from the analysis and the control group's week three and four data was flagged as partially contaminated. The honest disclosure strengthened rather than weakened the trial's credibility — Finance noted that the contamination detection demonstrated analytical rigour.",
        },
      ],
    }),
    buildSection({
      number: "7.5",
      title: "Quasi-experimental methods",
      subtitle: "When randomisation is impossible — the four methods that provide credible attribution without a clean experiment",
      take: "Difference-in-differences, synthetic control, regression discontinuity, and instrumental variables are quasi-experimental methods that provide credible attribution when randomisation is impossible. Each makes specific assumptions that must be stated — but honest estimation with stated assumptions is more credible than no estimation at all.",
      why: "Most enterprise AI deployments cannot accommodate true randomisation — they deploy to all users simultaneously, use historical data rather than prospective experiments, or affect markets rather than individuals. Quasi-experimental methods provide the attribution evidence that full deployment makes impossible through experimental design.",
      paragraphs: [
        [
          s("Difference-in-differences is the most widely applicable method. "),
          x(
            "DiD compares the change in the outcome for the AI-treated group (from before to after) with the change in the outcome for a comparison group (from before to after) that did not receive AI. If both groups were trending similarly before AI deployment, the DiD estimate isolates the AI effect.",
            "Key assumption: parallel trends. The treated and control groups must have been moving in the same direction before AI deployment. If they were trending differently before deployment, the DiD estimate is biased — and the bias must be acknowledged.",
          ),
          s(" For DiD attribution, plot the pre-deployment trends for both groups and confirm they are parallel — if they are not, document the limitation."),
        ],
        [
          s("Synthetic control: constructing a counterfactual from multiple comparison units. "),
          x(
            "When no single comparison unit closely matches the AI-treated group, synthetic control constructs a weighted combination of multiple comparison units that collectively match the treated group's pre-deployment performance. The synthetic counterfactual shows what would have happened without AI.",
            "Synthetic control is most useful for single-unit deployments (e.g., one division or one country) where no natural comparison group exists. The method requires multiple pre-deployment periods of data and multiple potential comparison units.",
          ),
          s(" Use synthetic control when the AI is deployed to a single business unit and no comparable control unit exists — the multi-unit comparison is more robust than no comparison."),
        ],
        [
          s("Regression discontinuity and instrumental variables for specific settings. "),
          x(
            "Regression discontinuity applies when AI is deployed based on a threshold (e.g., accounts above £1M get AI, below £1M do not): comparing outcomes just above and just below the threshold isolates the AI effect. Instrumental variables apply when there is a factor that influenced AI adoption but did not directly affect the outcome — allowing an indirect estimate of the AI effect.",
            "Both methods are technically demanding and require data science expertise. They are appropriate for large investments where clean attribution evidence is worth significant analytical investment.",
          ),
          s(" For investments above £1M where attribution quality is material, invest in a data science resource to run the appropriate quasi-experimental method — the analytical cost is small relative to the investment being evaluated."),
        ],
      ],
      examples: [
        {
          title: "Retailer — DiD with parallel trends check",
          body: "A retailer deployed AI pricing to three regions simultaneously. The DiD comparison used seven non-AI regions as the control group. Pre-deployment trend check: all ten regions showed parallel revenue growth over the preceding 12 months (within 2% variance). DiD estimate: AI regions improved 14 percentage points more than control regions post-deployment. The parallel trends check was included in the Finance report — confirming the validity of the DiD assumption and the credibility of the 14-point attribution.",
        },
        {
          title: "Financial services — synthetic control for single-division deployment",
          body: "A bank deployed AI underwriting in its commercial lending division. No other division had comparable scale, risk profile, or customer mix. A synthetic control was constructed from weighted combinations of peer bank data (available through industry benchmarking). The synthetic control tracked the bank's commercial lending performance closely in the pre-deployment period. Post-deployment divergence was attributed to AI: approximately 8 percentage point improvement in approval accuracy over 12 months. The synthetic control gave the CFO a framework to evaluate a single-division deployment that had no internal comparison group.",
        },
        {
          title: "Healthcare — instrumental variable approach",
          body: "A hospital deployed AI diagnostic support across all clinicians simultaneously. A data scientist used distance to the hospital's AI training centre as an instrumental variable: clinicians who attended AI training were more likely to adopt the tool, and training attendance was driven partly by geographic proximity. The IV estimate of the AI effect (using attendance rate as the instrument for AI use intensity) was 12% improvement in diagnostic accuracy, slightly higher than the naive comparison — suggesting that the naive comparison was slightly downward biased by lower adoption among less-trained clinicians.",
        },
      ],
    }),
    buildSection({
      number: "7.6",
      title: "When attribution is impossible: proxy metrics",
      subtitle: "How to maintain ROI credibility when causal attribution cannot be established",
      take: "Sometimes attribution is genuinely impossible: the deployment is too complex, the concurrent changes too numerous, or the time horizon too short for causal methods to work. In these cases, proxy metrics — leading indicators that are credibly connected to financial outcomes — provide a legitimate alternative to causal attribution.",
      why: "Abandoning ROI measurement because causal attribution is impossible is a worse governance decision than using well-chosen proxy metrics with honest caveats. Proxy metrics maintain the measurement discipline and create the evidence base for future attribution work.",
      paragraphs: [
        [
          s("A good proxy metric has a documented and accepted causal connection to the financial outcome. "),
          x(
            "Override rate is a proxy for AI quality: lower override rates mean users trust the AI output, which means productivity is higher and rework is lower. The connection between override rate and financial outcome is defensible. Customer effort score is a proxy for retention: lower effort means higher retention, which has a documented financial value.",
            "A proxy without a documented causal connection is simply a metric that moved in the right direction. Finance will distinguish between a proxy with a causal argument and a metric chosen because it happened to look good.",
          ),
          s(" Document the causal pathway from each proxy metric to the financial outcome — before adopting the proxy as a substitute for causal attribution."),
        ],
        [
          s("Use multiple independent proxies rather than a single proxy. "),
          x(
            "A single proxy that moved could have been caused by many things other than AI. Three or four independent proxies that all moved consistently in the expected direction provide convergent evidence that is harder to explain away as coincidence or confounding.",
            "Independent proxies measure different aspects of the same underlying effect: user satisfaction, task completion rate, error frequency, and processing speed are four independent observations of AI-assisted task quality. If all four improve together, the convergence is strong evidence.",
          ),
          s(" Report at least three independent proxy metrics — and present the convergence of all three as the evidence, not any single metric in isolation."),
        ],
        [
          s("State attribution limitations explicitly rather than hoping Finance will not notice. "),
          x(
            "Finance reviewers who notice an attribution problem that was not disclosed will penalise the omission more severely than the problem itself. An explicit statement — 'Due to simultaneous process changes, we cannot cleanly isolate the AI effect. We instead report three proxy metrics that are consistently positive' — is treated as analytical honesty.",
            "Explicit limitation statements also document the evidence gap for future investment in better attribution design. A stated limitation is an invitation for the next investment cycle to design the attribution properly.",
          ),
          s(" Include a one-paragraph 'attribution limitations' statement in every ROI report where causal attribution could not be established — and describe what better attribution design would look like."),
        ],
      ],
      examples: [
        {
          title: "Insurance — convergent proxies for complex deployment",
          body: "An insurer deployed AI across the underwriting process during a major regulatory change — making causal attribution impossible. Three independent proxy metrics were tracked: underwriter satisfaction score (improved 18%), policy error rate (fell from 4.2% to 1.8%), and decision cycle time (reduced from 4.8 days to 2.9 days). The convergence across all three proxies was presented to the board as evidence of AI value, with an explicit attribution limitations statement. The board accepted the proxy evidence and approved Phase 2 investment.",
        },
        {
          title: "Retailer — documented causal pathway for proxy",
          body: "A retailer could not cleanly attribute revenue improvement to AI personalisation due to simultaneous site redesign. They tracked 'recommendation click-through rate to purchase' as the primary proxy — with a documented causal pathway: higher CTR → more AI-influenced purchases → higher basket value per AI-influenced session → measurable revenue uplift from AI-influenced sessions only. The proxy metric, measured exclusively on AI-influenced sessions, produced a clean £1.4M annual attribution — even though the total revenue attribution was contaminated by the site redesign.",
        },
        {
          title: "Financial services — attribution limitations as transparency win",
          body: "A bank's AI report concluded: 'Due to three concurrent process changes in Q3, we cannot establish causal attribution for the full observed improvement. We report four independent proxy metrics: analyst time saving (33%), report revision rate (down 44%), output quality score (up 2.4 points), and analyst satisfaction (up 1.9 points). Convergence across all four proxies provides strong circumstantial evidence of AI value. For the next phase, we recommend a stepped-wedge deployment to enable controlled attribution.' The attribution limitations statement was cited by the audit committee as evidence of programme management maturity.",
        },
      ],
    }),
    buildSection({
      number: "7.7",
      title: "Multi-factor attribution frameworks",
      subtitle: "Distributing credit across AI and other concurrent changes — the structured approach",
      take: "When multiple factors contributed to an improvement — AI, process changes, training, market conditions — a multi-factor attribution framework distributes credit systematically rather than assigning it all to AI or dismissing AI's contribution entirely. The framework is explicit about its assumptions and produces a range rather than a false precision point estimate.",
      why: "Multi-factor attribution is how Finance actually thinks about complex business outcomes. Leaders who present multi-factor attributions speak Finance's language. Leaders who present single-factor attributions invite Finance to add the factors themselves — usually less favourably.",
      paragraphs: [
        [
          s("Identify all contributing factors and estimate each independently. "),
          x(
            "For each concurrent change, estimate its isolated contribution to the observed improvement — using the same analytical methods (historical comparison, industry benchmarks, management estimates) applied consistently. The sum of independent factor contributions should approximately equal the total observed improvement.",
            "If the sum of independent contributions significantly exceeds the total improvement, there is a mathematical inconsistency that must be resolved before presenting the attribution. Factors often interact — their combined effect is less than the sum of independent effects.",
          ),
          s(" Check that factor contributions sum to no more than 110% of the total observed improvement — significant exceedance signals unrealistic independent estimates."),
        ],
        [
          s("Express AI attribution as a range, not a point estimate. "),
          x(
            "Given the estimation involved in multi-factor attribution, a range is more honest and more defensible than a point estimate. AI contributed between 35% and 55% of the observed improvement, based on stated assumptions, is a credible range. AI contributed exactly 44% is a false precision claim.",
            "The range reflects genuine uncertainty about the relative contributions of different factors. Finance respects the honesty of a range and is suspicious of the precision of a point — particularly in complex multi-factor situations.",
          ),
          s(" Express AI attribution as a low-high range with the key assumptions that determine the bounds stated explicitly."),
        ],
        [
          s("Sensitivity test the attribution range to the most uncertain input. "),
          x(
            "Identify the most uncertain factor contribution estimate. Test: if that estimate is 50% higher or lower, how does the AI attribution range change? If the AI attribution range remains materially positive under this sensitivity test, the attribution is robust. If the range becomes negative under an adverse sensitivity, the attribution depends on the uncertain factor and should be disclosed as such.",
            "Sensitivity testing the attribution prevents post-deployment 'gotcha' challenges: 'If you used a different assumption for the market tailwind, AI attribution would be near zero.' Your sensitivity analysis should show you have already tested this scenario.",
          ),
          s(" Sensitivity test the AI attribution to the most uncertain concurrent factor — and disclose the sensitivity range alongside the base attribution."),
        ],
      ],
      examples: [
        {
          title: "Insurance — multi-factor attribution framework",
          body: "An insurer observed a 26% improvement in claims cycle time. Multi-factor attribution: AI workflow automation (management estimate: 40–50% of improvement), process redesign concurrent with AI (40–50% of improvement), seasonal volume reduction (6–8% of improvement). Estimates sum to 86–108% — within the acceptable range given interaction effects. AI attribution: 40–50% of 26% = 10–13 percentage points. Sensitivity test: if process redesign contributed 60% instead of 50%, AI attribution: 8–10 percentage points. Attribution remained materially positive under adverse sensitivity.",
        },
        {
          title: "Financial services — range vs point estimate",
          body: "A bank initially presented their AI trading analytics attribution as: 'AI contributed £2.4M of the £4.1M improvement.' Finance challenged the precision. The revised attribution stated: 'AI contributed between £1.6M and £2.8M (39–68% of the £4.1M improvement), based on our DiD estimate with uncertainty from market condition adjustment.' Finance accepted the range immediately — the precision of the original claim had made them suspicious; the honest range made them confident.",
        },
        {
          title: "Retailer — sensitivity test preventing a challenge",
          body: "A retailer's AI replenishment attribution was sensitive to the market demand estimate. Their attribution sensitivity section stated: 'If market demand growth was 3% instead of our 1.5% estimate, AI attribution falls from £2.1M to £1.3M — still positive and above the investment break-even of £0.8M.' When an independent board member raised the market demand concern at the review meeting, the programme sponsor was able to respond immediately: 'We modelled that scenario. The attribution remains positive at £1.3M — above our break-even.' The pre-tested sensitivity answer closed the challenge.",
        },
      ],
    }),
    buildSection({
      number: "7.8",
      title: "BL decision lens: accepting attribution uncertainty",
      subtitle: "How to make confident investment decisions when attribution is inherently imprecise",
      take: "The business leader's job in the face of attribution uncertainty is not to achieve perfect measurement — it is to make decisions with the best available evidence, properly communicated. Three principles govern this: require the best attribution method the situation allows, demand honest uncertainty disclosure, and make reinvestment decisions on the trajectory of evidence, not on a single precise figure.",
      why: "Leaders who demand perfect attribution before making reinvestment decisions default to inaction. Leaders who accept any figure without scrutiny over-invest in AI that is not delivering. The discipline is in the honest middle ground: best available evidence with stated uncertainty.",
      paragraphs: [
        [
          s("Require the best attribution method the situation allows, not the most convenient one. "),
          x(
            "If a stepped-wedge deployment was feasible and was not done, attribution is weaker than it had to be. If a control group was feasible and was not designed, attribution is weaker than it had to be. The question to ask the programme team is not 'why is attribution uncertain?' but 'what was the best attribution method available and why was it or was it not used?'",
            "If the best method was not used because it was inconvenient — not because it was genuinely impossible — that is a governance failure, not a measurement reality. Future deployments should require the best feasible method as a standard.",
          ),
          s(" Ask the programme team: 'What was the best attribution method available for this deployment, and was it used? If not, why not?' Make the answer part of the programme review."),
        ],
        [
          s("Make reinvestment decisions on the trajectory of evidence, not on a single data point. "),
          x(
            "A single measurement with uncertain attribution provides weak reinvestment evidence. Three consistent measurements over 12 months — all positive, all showing the expected improving trajectory — provide strong reinvestment evidence even if each individual measurement carries attribution uncertainty.",
            "Trajectory evidence also enables early warning: a programme that should be improving but is not — even if the absolute attribution is uncertain — is a signal to investigate and intervene before the investment reaches its review date.",
          ),
          s(" Review AI attribution at three time points (3, 6, and 12 months) and base reinvestment decisions on the trajectory, not a single measure."),
        ],
        [
          s("Communicate attribution uncertainty as evidence quality, not as failure. "),
          x(
            "Attribution uncertainty is a feature of complex real-world measurement, not a failure of the programme team. Communicating it to the board as 'we have medium-confidence attribution but are investing in better measurement design for the next phase' is evidence of mature AI programme management — not a confession of failure.",
            "Boards that receive honest attribution uncertainty disclosures make better reinvestment decisions than boards that receive false precision — because they apply the correct confidence level to the figure rather than discovering the uncertainty later and feeling misled.",
          ),
          s(" Describe attribution quality explicitly to the board: 'High confidence (controlled experiment),' 'Medium confidence (quasi-experimental),' or 'Indicative (proxy metrics only)' — this context improves board decision quality."),
        ],
      ],
      examples: [
        {
          title: "Manufacturing — trajectory over single measurement",
          body: "A manufacturer's AI preventive maintenance ROI was measured at three time points: month 3 (unplanned downtime down 8%, attribution uncertain due to seasonal variation), month 6 (down 14%, attribution medium confidence from DiD), month 12 (down 21%, attribution high confidence from full-year DiD with seasonal adjustment). No single measurement was conclusive. The trajectory — consistently positive, improving with each measurement, increasingly credible attribution — was the basis for the Phase 2 investment decision. The trajectory evidence was accepted by the board where a single uncertain measurement might not have been.",
        },
        {
          title: "Financial services — honest attribution quality communication",
          body: "A bank's annual AI portfolio review presented attribution quality labels for all 14 AI deployments: three at 'high confidence (controlled experiment)', six at 'medium confidence (quasi-experimental)', and five at 'indicative (proxy metrics)'. The board used the labels to calibrate their assessment: high confidence programmes were evaluated at face value; indicative programmes were evaluated at 50% of their claimed figure for reinvestment purposes. The transparent labelling improved board decision quality — and the programme team was motivated to improve attribution quality to gain full credit for their results.",
        },
        {
          title: "Retailer — requiring best method retrospectively",
          body: "A retailer's AI pricing review revealed that a stepped-wedge deployment had been feasible but was not done — all regions went live simultaneously because the technology team found a phased rollout 'operationally complex.' The post-deployment attribution was based on before/after with no control group. The investment committee noted this in the review minutes and required that all future AI deployments above £200K include a stepped-wedge or control group design as a standard condition. One uncomfortable retrospective conversation changed the attribution standard for the entire AI programme.",
        },
      ],
    }),
  ],
  quiz: [
    {
      q: "An AI deployment shows a 22% improvement, but a competitor's product launch, a team restructuring, and an industry tailwind all occurred in the same period. What is the most credible approach to the ROI report?",
      options: [
        "Claim the full 22% as AI-attributable — attribution challenges are normal.",
        "Withdraw the ROI report entirely until attribution is perfect.",
        "Estimate each concurrent factor's contribution separately, subtract from total improvement, and present AI attribution as a range with limitations disclosed.",
        "Increase the claimed improvement to offset the attribution uncertainty.",
      ],
      correct: 2,
      correctFeedback:
        "Correct. Multi-factor attribution with honest disclosure of concurrent factors produces credible results. Claiming the full improvement or abandoning measurement are both worse governance outcomes. Re-read sections 7.1 and 7.7.",
      wrongFeedback:
        "Multi-factor attribution is the credible path. Re-read sections 7.1 and 7.7.",
    },
    {
      q: "What is the primary advantage of a stepped-wedge deployment over a simultaneous full deployment from an attribution perspective?",
      options: [
        "Stepped-wedge is faster to implement.",
        "It allows earlier-deploying groups to serve as comparisons for later-deploying groups, providing cleaner attribution without withholding the tool from any group permanently.",
        "It reduces the cost of the AI licence.",
        "Stepped-wedge only works for small teams.",
      ],
      correct: 1,
      correctFeedback:
        "Right. The stepped-wedge creates natural comparison groups at no permanent cost to any group — everyone receives AI eventually, but the rollout timing provides attribution evidence. Re-read section 7.3.",
      wrongFeedback:
        "The stepped-wedge is the enterprise-friendly attribution design. Re-read section 7.3.",
    },
    {
      kind: "categorize",
      q: "Sort each attribution situation into the most appropriate response.",
      categories: ["Experimental design (before deployment)", "Quasi-experimental method (after simultaneous deployment)", "Proxy metrics only"],
      items: [
        { text: "Deploying AI to all employees simultaneously — no control possible but historical data exists.", category: 1 },
        { text: "Deploying AI to customer-facing roles with ability to hold back 20% for comparison.", category: 0 },
        { text: "Complex multi-change environment making causal isolation impossible.", category: 2 },
        { text: "Regional rollout where AI goes live in different regions at different times.", category: 0 },
        { text: "AI deployed alongside a major ERP upgrade affecting the same metrics.", category: 2 },
        { text: "Historical data available for a comparable non-AI group.", category: 1 },
      ],
      correctFeedback:
        "Right. Experimental design when feasible before deployment, quasi-experimental when post-deployment with comparison data available, proxy metrics when causal isolation is genuinely impossible. Re-read sections 7.3 through 7.6.",
      wrongFeedback:
        "Match the attribution method to what was possible given deployment design and data availability. Re-read sections 7.3–7.6.",
    },
    {
      q: "A DiD attribution analysis requires which key assumption to be valid?",
      options: [
        "The treated and control groups must have identical size.",
        "The treated and control groups must have been following parallel pre-deployment trends.",
        "The measurement period must be exactly 12 months.",
        "The same person must measure both groups.",
      ],
      correct: 1,
      correctFeedback:
        "Correct. Parallel pre-deployment trends is the key DiD assumption. If the groups were trending differently before AI deployment, the DiD estimate is biased and the limitation must be disclosed. Re-read section 7.5.",
      wrongFeedback:
        "DiD validity depends on parallel pre-deployment trends. Re-read section 7.5.",
    },
    {
      kind: "order",
      q: "Order the business leader's actions when reviewing an AI attribution report.",
      prompt: "Drag to arrange first action (top) to last (bottom).",
      items: [
        "Ask: what was the best attribution method available — was it used, and if not, why not?",
        "Review the concurrent change log for material factors not attributed to AI.",
        "Assess whether the attribution approach (experimental, quasi-experimental, or proxy) is appropriate.",
        "Evaluate the trajectory of evidence across multiple measurement points.",
        "Make the reinvestment decision based on the evidence quality label, not just the headline figure.",
      ],
      correctFeedback:
        "Correct sequence. Method quality first, then concurrent factors, then appropriateness of approach, then trajectory, then decision. Re-read sections 7.1, 7.7, and 7.8.",
      wrongFeedback:
        "Attribution review has a logical sequence from method quality to decision. Re-read sections 7.1, 7.7, and 7.8.",
    },
    {
      q: "Which statement best describes how a business leader should communicate attribution uncertainty to the board?",
      options: [
        "Omit attribution uncertainty to avoid undermining confidence in the AI programme.",
        "Describe it as 'high confidence,' 'medium confidence,' or 'indicative' with an explanation, so the board can calibrate their assessment accordingly.",
        "Claim perfect attribution — boards do not need to understand measurement uncertainty.",
        "Refuse to report until attribution is perfect.",
      ],
      correct: 1,
      correctFeedback:
        "Right. Explicit attribution quality labels enable the board to make better reinvestment decisions. Omission or false precision both damage board confidence when reality diverges from the claim. Re-read section 7.8.",
      wrongFeedback:
        "Transparent attribution quality communication builds board trust. Re-read section 7.8.",
    },
  ],
});
