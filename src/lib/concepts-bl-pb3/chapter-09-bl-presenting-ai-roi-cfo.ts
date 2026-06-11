import { buildChapter, buildSection, s, x, BL_CALLOUT } from "../concepts-bl-helpers";

export const chapter09BlPresentingAiRoiCfo = buildChapter({
  slug: "bl-presenting-ai-roi-cfo",
  number: 9,
  shortTitle: "Presenting AI ROI to the CFO",
  title: "Presenting AI ROI to the CFO: Language, Models, and Credibility",
  readingMinutes: 28,
  summary:
    "The CFO is the most important audience for any significant AI ROI presentation — and the audience most likely to challenge superficial or optimistic claims. This chapter builds the language, financial model structure, and presentation discipline to earn CFO confidence and accelerate AI investment approval.",
  keyTakeaway:
    "CFOs approve AI investments when they trust the financial model, understand the risk structure, and believe the sponsor has considered what could go wrong. The path to CFO approval is not through enthusiasm for AI — it is through financial rigour, honest uncertainty, and specific answers to predictable challenges.",
  pmCallout: BL_CALLOUT,
  sections: [
    buildSection({
      number: "9.1",
      title: "How CFOs think about AI investments",
      subtitle: "The CFO's mental model — four questions they are always asking",
      take: "CFOs evaluate AI investments through four questions: Is the financial model rigorous and conservative? What is the worst credible outcome? How does this compete with other uses of capital? And who is accountable for delivery? Presentations that answer all four questions earn approval; presentations that answer one or two invite challenge.",
      why: "Most AI investment presentations are built by technology or programme teams who frame AI in terms of capability and potential. CFOs frame investments in terms of risk-adjusted return and accountability. The framing mismatch is the primary reason good AI investments fail to get CFO approval on the first submission.",
      paragraphs: [
        [
          s("Question one: is the financial model rigorous or optimistic? "),
          x(
            "CFOs have seen inflated AI business cases and have been burned by disappointing actuals. Their default assumption is that an AI business case presented to them contains optimistic benefit assumptions, understated costs, and insufficient risk adjustment. Their job is to challenge until they find the limits.",
            "The way to pass this challenge is to build the model conservatively and flag your own limitations before they do. A CFO who finds an optimistic assumption before you acknowledge it loses confidence in the entire model. A CFO who is shown where the model is conservative gains confidence in everything else.",
          ),
          s(" Identify the two most optimistic assumptions in your financial model before the CFO meeting — and flag them proactively as 'our most sensitive assumptions.'"),
        ],
        [
          s("Question two: what is the worst credible outcome? "),
          x(
            "CFOs want to understand the downside before they weigh the upside. What happens if adoption is 30% lower than forecast? What happens if the integration costs 40% more than estimated? What happens if the primary benefit category underperforms?",
            "Presenting the worst credible outcome proactively demonstrates that you have stress-tested the model. A CFO who asks for the downside and finds you have already modelled it experiences a significant trust increase. A CFO who asks for the downside and receives an improvised answer experiences the opposite.",
          ),
          s(" Model the worst credible outcome before the meeting and present it as part of the sensitivity analysis — not as an answer to a challenge."),
        ],
        [
          s("Questions three and four: capital competition and accountability. "),
          x(
            "CFOs allocate finite capital across competing uses. If you cannot answer 'how does this AI investment compare to the next best use of this capital?' you have not done the capital allocation work. The answer should include the alternative's IRR, payback, and strategic fit — and a clear argument for why AI is the higher priority.",
            "Accountability means: who is personally responsible for delivering the financial result? Not 'the programme team' or 'the technology department' — a named individual who will be reviewed against the ROI target at twelve months. Without named accountability, CFOs assess the investment as having no one to hold responsible for delivery.",
          ),
          s(" Name one individual accountable for the financial ROI result at twelve months — and confirm they understand and accept this accountability before the CFO meeting."),
        ],
      ],
      examples: [
        {
          title: "Financial services — proactive sensitivity disclosure",
          body: "Before the CFO meeting, the programme sponsor flagged: 'Our most sensitive assumption is productivity benefit — it assumes 65% adoption by month nine. Historical enterprise software adoption in our organisation averages 52%. We have budgeted additional change management to address this gap, but this is still our highest-risk assumption.' The CFO said: 'I was about to ask about that. You've done the homework.' The candid acknowledgment was the turning point in the meeting — the remaining questions focused on implementation quality, not model credibility.",
        },
        {
          title: "Retailer — worst case presented",
          body: "A retailer's AI pricing tool business case included a 'worst case scenario' page: adoption 35% (vs 70% base case), implementation 30% over budget, benefit realisation at 50% of target. Worst case NPV: -£280K. The CFO asked: 'What would you do if you hit the worst case?' The programme lead answered: 'At month four, if adoption is below 50%, we have agreed to pause and redesign the change management approach before committing further spend. The pause decision is built into the governance framework.' The CFO approved the investment. The worst case analysis and the governance response was the key.",
        },
        {
          title: "Professional services — named accountability",
          body: "A consulting firm's AI research platform business case named the Head of Knowledge Management as 'accountable for delivering the productivity ROI target of £1.8M by month 12.' The CFO had a brief conversation with the Head of Knowledge Management before the approval meeting — confirming she understood and accepted the accountability. 'I've never had a business case sponsor own the ROI target this explicitly,' the CFO said. 'It changes how I think about the risk.' The investment was approved. Named accountability had converted the presentation from a proposal to a commitment.",
        },
      ],
    }),
    buildSection({
      number: "9.2",
      title: "The financial language of AI ROI",
      subtitle: "Speaking the CFO's language — the ten financial terms every AI sponsor must use correctly",
      take: "CFOs lose confidence when AI sponsors use imprecise financial language — or when they use financial terminology incorrectly. Mastering ten financial terms and using them accurately signals financial fluency and earns the credibility that accelerates approval.",
      why: "Financial language is the CFO's primary tool for evaluating precision of thinking. A sponsor who says 'net present value' when they mean 'return on investment' signals they have not done rigorous financial analysis. A sponsor who uses the correct term in the correct context signals they have.",
      paragraphs: [
        [
          s("Four foundational terms used correctly. "),
          x(
            "ROI (return on investment): net benefit divided by total cost of investment, expressed as a percentage. NPV (net present value): the sum of discounted future cash flows from the investment. IRR (internal rate of return): the discount rate at which NPV equals zero. Payback period: the time required for cumulative net benefits to equal the total investment.",
            "The most common error: using 'ROI' as a synonym for 'NPV' or 'benefit.' ROI is a ratio (net benefit / investment). NPV is a present-value sum. They answer different questions. A £5M investment generating £2M benefit is 40% ROI, but the NPV depends on the discount rate and time horizon.",
          ),
          s(" Practice using all four terms in a sentence that correctly captures the specific question each answers — before any CFO meeting."),
        ],
        [
          s("Four cost terms that prevent common credibility failures. "),
          x(
            "TCO (total cost of ownership): all costs over the life of the investment, not just licence or implementation. Sunk cost: investment already made that should not influence future decisions. Opportunity cost: the value of the next best alternative foregone. Fully-loaded cost: direct cost plus allocated overhead, management time, and benefits. Using 'cost' when you mean 'fully-loaded cost' gives CFOs an excuse to challenge the denominator.",
            "CFOs listen for whether TCO is used or just licence cost. Using TCO correctly — and including all eight cost categories — is the single term that most signals cost-model rigour.",
          ),
          s(" Use 'total cost of ownership' in the first cost discussion — not 'cost' or 'investment' — to signal that the denominator is complete."),
        ],
        [
          s("Two terms for uncertainty and two for capital allocation. "),
          x(
            "Confidence interval: the range within which the true value is likely to fall with a stated probability. Sensitivity: how much the outcome changes when an assumption changes by a given amount. Hurdle rate: the minimum acceptable return for investment approval. Capital allocation: the distribution of available capital across competing investment opportunities.",
            "Using 'confidence interval' rather than 'range' and 'sensitivity' rather than 'what-if' signals analytical rigour. Using 'hurdle rate' correctly — referring to the organisation's standard return threshold — signals you are evaluating the AI investment on the same terms as all other capital projects.",
          ),
          s(" Use 'confidence interval' instead of 'range' and 'hurdle rate' instead of 'minimum return required' — precision of language signals precision of analysis."),
        ],
      ],
      examples: [
        {
          title: "Insurance — TCO precision changing the conversation",
          body: "An insurer's AI programme sponsor consistently referred to the 'investment of £420K.' The CFO asked: 'Is that TCO or just implementation?' The sponsor answered: 'That's TCO over five years: £220K implementation, £40K data preparation, £80K change management, £60K annual operations, and a £20K technology refresh in year four. All included.' The CFO nodded and moved to the next topic. The precision of the TCO answer closed the cost challenge before it became a credibility conversation.",
        },
        {
          title: "Technology company — confidence interval vs range",
          body: "A product manager presented their AI ROI as: 'We expect revenue uplift between £800K and £1.4M.' The CFO asked: 'What confidence level does that range represent?' The question could not be answered — the range was an estimate, not a statistical confidence interval. On the next submission, the team presented: 'We project revenue uplift of £1.1M ±£280K at 80% confidence, based on our A/B test of 40,000 sessions.' The CFO approved the investment. The confidence interval had converted a vague range into an evidenced estimate.",
        },
        {
          title: "Manufacturing — hurdle rate in context",
          body: "A manufacturer's AI investment presentation stated: 'The investment generates a 28% IRR against our 12% hurdle rate — providing 16 percentage points of return above the minimum threshold.' The CFO followed up: 'And our next competing capital project?' The sponsor answered: 'A facility expansion at 19% IRR. The AI investment generates 9 points more return than the next alternative.' The IRR comparison in hurdle rate language resolved the capital competition question in two sentences.",
        },
      ],
    }),
    buildSection({
      number: "9.3",
      title: "Building the CFO-ready financial model",
      subtitle: "The format, structure, and content standards that earn CFO approval",
      take: "A CFO-ready financial model is structured in three sections: cost summary (year-by-year TCO with category breakdown), benefit model (hard and soft benefits separated with confidence weights), and return metrics (NPV, IRR, payback, sensitivity). It uses the organisation's standard assumptions, cites data sources for key inputs, and shows the model mechanics transparently rather than hiding them in a black box.",
      why: "CFOs do not take financial models at face value — they reverse-engineer the assumptions. A model with transparent mechanics and cited sources enables this review; a model that produces conclusions without showing its working invites suspicion and challenge.",
      paragraphs: [
        [
          s("Section one: year-by-year TCO with eight categories. "),
          x(
            "Present cost in a table: rows for each cost category, columns for years one through five, totals per year and per category. Every category should have a data source cited: 'Vendor contract,' 'IT engineering estimate validated by CTO,' 'HR-documented replacement cost,' 'Industry benchmark adjusted for organisation size.'",
            "Source citations convert assertions into evidence. A table with sources takes the same time to build as a table without sources — but performs entirely differently in a CFO review.",
          ),
          s(" Cite the data source for every material cost input in the financial model — not in a footnote, but adjacent to the figure."),
        ],
        [
          s("Section two: benefit model with transparency on confidence weights. "),
          x(
            "Present each benefit as a row: benefit category, annual estimate, evidence type, confidence weight, confidence-adjusted figure. Evidence types: 'Pilot measurement,' 'Industry benchmark,' 'Management estimate,' 'External actuarial data.' The evidence type signals the quality of the benefit estimate.",
            "The confidence-adjusted total is the only figure used in NPV and IRR calculations. Using unadjusted benefits in the return metrics is a transparency failure that a CFO will identify — either at the meeting or during due diligence.",
          ),
          s(" Label the evidence type for every benefit — and use confidence-adjusted totals in all return metric calculations."),
        ],
        [
          s("Section three: return metrics with sensitivity table. "),
          x(
            "Present: five-year NPV at stated hurdle rate, IRR, payback period, and a tornado chart showing NPV sensitivity to ±20% changes in the top five variables. The tornado chart should be visual — a bar chart — not a table of numbers. Visual sensitivity is processed faster and retained better by a committee.",
            "Return metrics should be presented on a single page that can stand alone. CFOs often share this page with board finance committees. A single-page return summary that makes sense without the supporting detail is a professional asset.",
          ),
          s(" Produce a one-page return metrics summary — NPV, IRR, payback, and tornado chart — that can be shared with any finance committee without requiring the supporting model."),
        ],
      ],
      examples: [
        {
          title: "Financial services — source-cited cost model",
          body: "A bank's AI compliance tool cost model included sources for every line: software licence (Vendor Master Agreement 2025, signed), implementation (IT estimate, reviewed by CTO), data preparation (data engineering scoping, confirmed by CDO), change management (HR programme cost standard, HR Director-approved), ongoing operations (IT operations estimate, CTO-confirmed), technology refresh (15% of implementation cost, industry standard for AI refresh). The CFO spent six minutes with the cost model and said: 'I have no questions on costs — every number has a home.' The sourcing took four hours to prepare; it saved forty-five minutes of meeting time.",
        },
        {
          title: "Retailer — confidence-weighted benefit in NPV",
          body: "A retailer's AI pricing benefit model: hard revenue uplift £1.4M/year (90% confidence, adjusted £1.26M), hard cost reduction £380K/year (90%, adjusted £342K), soft competitive intelligence £320K/year (55%, adjusted £176K), soft employee experience £140K/year (35%, adjusted £49K). Confidence-adjusted annual benefit: £1.827M. NPV calculated at £1.827M/year, not £2.24M/year unweighted. The CFO noted: 'You've used the risk-adjusted figure in the NPV. That's the right methodology.' The technical precision was the signal of financial rigour.",
        },
        {
          title: "Insurance — one-page return summary shared with audit committee",
          body: "An insurer's AI underwriting tool return summary: single page, four quadrants — NPV (£4.2M at 10% hurdle), IRR (34%), payback (22 months), and a six-bar tornado chart (adoption rate, implementation cost, benefit realisation speed, licensing cost, change management cost, technology refresh cost). The CFO shared the page with the audit committee as the AI investment summary for the annual report. 'I can hand this to any finance professional and they understand the investment in two minutes,' the CFO commented. The one-page discipline converted a complex investment into a transparent one.",
        },
      ],
    }),
    buildSection({
      number: "9.4",
      title: "Handling the 'show me the money' challenge",
      subtitle: "The CFO challenge that every AI sponsor faces — and how to answer it with evidence",
      take: "The 'show me the money' challenge — 'where does this saving actually show up on the P&L?' — is the most important question a CFO will ask about any AI ROI claim. Business leaders who have a specific, traceable answer to this question earn immediate credibility. Those who answer with process descriptions or efficiency metrics lose the conversation.",
      why: "The 'show me the money' challenge separates AI advocates from AI business managers. Advocates talk about AI potential; business managers trace AI benefit to a specific budget line. The distinction matters enormously in a capital allocation meeting.",
      paragraphs: [
        [
          s("Prepare the P&L walk before the meeting, not during the challenge. "),
          x(
            "For each benefit category, trace the path from AI capability to P&L impact: AI reduces invoice processing errors → fewer invoice disputes → reduced accounts payable team overtime → GL account 4150 (AP labour cost) decreases by X%. Practice this walk out loud before the CFO meeting.",
            "The walk should end at a specific GL code and a specific budget owner who has committed to the reduction. If either is missing, the walk ends in theory, not in reality.",
          ),
          s(" Practice the P&L walk for each benefit category before the meeting — you should be able to trace from AI capability to GL code in under 90 seconds."),
        ],
        [
          s("For productivity benefits: show who does what with the freed time. "),
          x(
            "The most common productivity challenge: 'So what — the time is saved. But who is doing what extra? And what does that extra work produce?' The answer requires a capacity redeployment plan with names, roles, and output metrics.",
            "If you cannot answer 'Jane Smith, Senior Analyst, will use 8 freed hours per week to cover two additional client accounts generating £180K revenue per year,' the productivity benefit is potential, not committed. The CFO will identify this.",
          ),
          s(" For productivity benefits, have a named individual and a specific additional output ready — not a process description or an efficiency metric."),
        ],
        [
          s("For risk reduction benefits: show the event frequency and the event cost. "),
          x(
            "The risk reduction challenge: 'So what is the probability and what does the event actually cost?' The answer requires: historical event frequency, documented event cost (including second-order costs), and the AI-projected improvement in frequency.",
            "If you have used industry data rather than internal data for the event cost, acknowledge this proactively: 'We used industry actuarial data because we have had only two events in five years — the industry figure is based on 200 events.' Proactive disclosure of evidence quality is more credible than hiding data source limitations.",
          ),
          s(" Have the event frequency and cost documentation ready for every risk reduction benefit — and state the data source (internal or industry) proactively."),
        ],
      ],
      examples: [
        {
          title: "Financial services — P&L walk under challenge",
          body: "CFO challenge: 'You claim £840K productivity saving. Where does that show up?' Programme lead: 'In GL account 5230, Compliance Operations Labour Cost. Currently £3.2M per year. The AI tool reduces compliance review time by 26%. 26% of £3.2M is £832K. The budget owner, Sarah Chen, has committed to a £780K reduction by month twelve through natural attrition in the team — no redundancies required. The month-twelve budget will show £2.42M in account 5230.' CFO: 'That's the right answer.' Meeting moved forward.",
        },
        {
          title: "Healthcare — capacity redeployment with names",
          body: "CFO challenge: 'The AI saves nurses time on scheduling. So what do they do with it?' Sponsor: 'The freed capacity is 12 nursing hours per week across the ward. The Head of Nursing has agreed to redeploy this to direct patient care — specifically, we will eliminate the 2 hours per day of agency nurse time we currently use for patient observation cover. That is £68K per year in direct agency cost saving, which shows in the temporary staff budget line. The Head of Nursing has signed the capacity commitment.' The named individual, specific output, and specific budget line answered the challenge completely.",
        },
        {
          title: "Insurance — risk reduction with disclosed data source",
          body: "CFO challenge: 'Your claim for regulatory fine avoidance uses a £2.3M per event figure. Where does that come from?' Sponsor: 'We used two data sources. Internal: our one actual event in 2021 cost £1.8M. Industry: ABI data on comparable insurer events averaged £2.6M. We used the midpoint of £2.2M and applied a 5% discount for conservatism — giving £2.09M, which we rounded to £2.1M. I used the lower end of the range deliberately.' CFO: 'Good. Proactive conservatism is exactly what I want to see.' The proactive data source disclosure converted a potential credibility challenge into a credibility confirmation.",
        },
      ],
    }),
    buildSection({
      number: "9.5",
      title: "Risk quantification for the CFO",
      subtitle: "Translating AI deployment risks into financial language the CFO can evaluate",
      take: "CFOs evaluate risk in financial terms: probability × impact. AI risks presented as narrative ('there may be adoption challenges') are less actionable than AI risks presented as financial ranges: 'adoption shortfall has a 30% probability and would reduce annual benefit by £420K.' Financial risk quantification enables the CFO to make an informed approval decision rather than accepting narrative assurance.",
      why: "CFOs who approve AI investments with only narrative risk descriptions are approving blind. CFOs who receive financial risk quantification can apply their capital allocation judgment to the risk-adjusted return — which is the decision they are actually making.",
      paragraphs: [
        [
          s("Quantify the top three risks in expected value terms. "),
          x(
            "For each top risk, estimate: probability of occurrence, financial impact if it occurs, and expected value (probability × impact). Present the top three risks and their expected values, and show the risk-adjusted return: base case NPV minus the sum of expected risk values.",
            "Risk-adjusted return gives the CFO an honest number: the return after accounting for the probability of the three most important failure scenarios. This is always lower than the base case NPV — and it is always more credible.",
          ),
          s(" Present a risk-adjusted NPV in every CFO submission: base case NPV minus sum of top three expected risk values."),
        ],
        [
          s("Mitigation should reduce both probability and impact — and this reduction should be quantified. "),
          x(
            "A risk mitigation that reduces the probability of adoption shortfall from 35% to 15% — through a specific change management programme — reduces the expected risk value by £120K. This quantification makes the change management investment financially justified: if the change management costs £40K and reduces expected risk by £120K, the ROI on risk mitigation is 3×.",
            "Mitigation quantification also creates a rational basis for spending on programme management, governance, and change management — activities that are often cut as 'overhead' without recognition of their risk reduction value.",
          ),
          s(" Quantify the expected risk reduction from each mitigation — and use this to justify governance and change management investment."),
        ],
        [
          s("Distinguish between risks that affect return and risks that affect viability. "),
          x(
            "A risk that reduces NPV from £2.1M to £1.6M — a return risk — is different from a risk that makes the investment NPV-negative — a viability risk. CFOs need to see both clearly: return risks are acceptable at threshold return levels; viability risks require mitigation or approval contingency.",
            "Viability risks are risks that, if they occur, would make the investment not worth completing. They typically require mandatory mitigation before approval — not just monitoring and reporting.",
          ),
          s(" Identify any viability risks separately from return risks — and require mitigation of all viability risks as an approval condition."),
        ],
      ],
      examples: [
        {
          title: "Manufacturing — quantified risk portfolio",
          body: "A manufacturer's AI quality inspection risk quantification: (1) Integration complexity risk: 25% probability, £280K impact = £70K expected value. (2) Adoption risk: 30% probability, £420K impact = £126K expected value. (3) Data quality risk: 40% probability, £180K impact = £72K expected value. Sum of expected risk values: £268K. Base case NPV: £1.84M. Risk-adjusted NPV: £1.572M — still clearly positive. CFO comment: 'I have never seen a risk-adjusted NPV in an AI submission. This is exactly how risk should be presented.' Approved.",
        },
        {
          title: "Financial services — mitigation ROI justification",
          body: "A bank's AI credit tool risk: adoption shortfall probability 35%, impact £520K. Expected risk value: £182K. Mitigation: structured change management programme at £45K. Estimated mitigation effectiveness: reduces adoption shortfall probability to 12%. Post-mitigation expected risk value: 12% × £520K = £62K. Risk reduction from mitigation: £120K. ROI on mitigation: 267%. The CFO immediately approved the change management budget: 'The £45K mitigation programme generates more return than any other line in the budget.'",
        },
        {
          title: "Healthcare — viability risk identified",
          body: "A hospital's AI diagnostic tool risk register identified a viability risk: 'regulatory reclassification of AI diagnostic output as a medical device, triggering MHRA approval requirements.' If this occurred, the programme would need to pause for 12–18 months. The probability was 20% based on current regulatory guidance. The CFO required mitigation before approval: regulatory counsel review and a conditional implementation plan if reclassification occurred. The mitigation cost was £18K. The CFO would not approve without it: 'A 20% probability of a 12-month programme pause is a viability risk, not a monitoring risk.'",
        },
      ],
    }),
    buildSection({
      number: "9.6",
      title: "Comparables and benchmarks CFOs respect",
      subtitle: "The external evidence that supports your financial model — and which sources carry CFO credibility",
      take: "CFOs give credibility to comparables that are specific (same industry, same use case, similar scale), transparent (data source named and accessible), and conservative (the comparable is comparable or better, not exceptional). Industry benchmarks, peer case studies, and vendor-provided evidence all have different credibility weights — knowing the hierarchy helps you choose the right supporting evidence.",
      why: "CFOs are generally sceptical of AI vendor case studies and optimistic industry projections. They are more receptive to peer evidence from comparable organisations and to third-party research from credible analysts. Using the right evidence source is as important as having strong internal evidence.",
      paragraphs: [
        [
          s("Peer comparables are the most credible external evidence source. "),
          x(
            "A comparable from a peer organisation in the same industry, similar size, and same use case carries the highest external credibility. Sources: industry CFO working groups, CIO/CDO association reports, and independent analyst studies with named participating organisations.",
            "When citing a peer comparable, provide as much specificity as the source allows: 'A comparable UK insurer of similar premium volume deployed AI claims assessment and achieved a 24% cycle time reduction in 18 months.' The specificity signals that the comparable is a genuine comparable, not a cherry-picked exceptional result.",
          ),
          s(" Cite peer comparables with industry, use case, scale, and outcome — never cite a comparable without at least three of these four specifics."),
        ],
        [
          s("Third-party analyst research has differential credibility. "),
          x(
            "Gartner, McKinsey, and Deloitte research carries higher CFO credibility than vendor case studies. Academic research carries high credibility but often lacks commercial relevance. Vendor-provided ROI case studies are the weakest form of external evidence — CFOs assume they are selectively presented.",
            "Use analyst research to establish the market range for AI ROI in your category — then position your business case within that range, ideally at or below the median (conservatively) rather than at the top of the range.",
          ),
          s(" Use analyst research to establish the market ROI range for your AI category — and position your business case at the median or below, not at the top of the range."),
        ],
        [
          s("Internal pilot data is the strongest evidence of all, if properly documented. "),
          x(
            "When you have run a Phase 1 or Phase 2 pilot with documented results from your own organisation, this is more credible than any external comparable. Your data, your processes, your users — the conditions are exactly the ones that will apply at scale.",
            "Pilot evidence should be presented with: sample size, measurement period, methodology, and how the pilot population relates to the scale deployment population. A pilot with 15 users over three weeks is weaker evidence than a pilot with 150 users over three months — but both are stronger than vendor case studies.",
          ),
          s(" Lead the external evidence section with your own pilot data if available — then use peer comparables and analyst research as supporting context, not as primary evidence."),
        ],
      ],
      examples: [
        {
          title: "Insurance — peer comparable presented specifically",
          body: "An insurer's AI claims tool business case cited: 'Aviva (comparable UK insurer, motor claims, similar annual claims volume) deployed AI triage assessment and achieved 19% processing time reduction and 12% manual review elimination in 14 months. Source: Celent 2024 Insurance AI Deployment Survey, page 34.' The CFO confirmed the Celent source, found the specific case, and confirmed the data. The peer comparable was validated and cited in the investment committee minutes as 'corroborating evidence for the base case assumptions.' The specificity enabled the CFO to verify the evidence independently.",
        },
        {
          title: "Financial services — analyst median positioning",
          body: "A bank cited McKinsey's 2024 Global AI Survey: 'AI in retail banking credit operations generates median productivity ROI of 22–28% process efficiency improvement (sample: 67 comparable institutions).' The bank's business case target was 21% — positioned just below the median. The CFO commented: 'You're not claiming to be at the top of the range. That makes the target more credible.' Positioning the business case below the median rather than at the maximum was the credibility signal.",
        },
        {
          title: "Retailer — pilot data as primary evidence",
          body: "A retailer's AI personalisation business case led with: 'Our Phase 2 pilot ran for 12 weeks with 28,000 customers (AI-assisted) versus 28,000 matched customers (control). Revenue per session: AI group £4.22, control group £3.79. Attribution confidence: 95% (RCT design). Pilot scale: 8% of total eligible customer base.' The CFO asked one question: 'Is the 28,000 customer pilot representative of the full customer base?' The answer confirmed segment equivalence. The pilot evidence was accepted as primary — all external comparables were supplementary.",
        },
      ],
    }),
    buildSection({
      number: "9.7",
      title: "The one-page AI ROI summary",
      subtitle: "Building the executive summary that CFOs will actually read and share",
      take: "The one-page AI ROI summary is the most important document in the business case. It must contain: the decision request, the financial headline (NPV, IRR, payback), the risk-adjusted return, the primary evidence source, and the accountability structure — in a format that can be read in two minutes and shared without the supporting model.",
      why: "CFOs share financial summaries. A one-page summary that travels well — through the board, the audit committee, and peer conversations — builds confidence in the AI programme across the organisation. A summary that requires the supporting model to make sense never travels.",
      paragraphs: [
        [
          s("Five elements in a maximum of five visual blocks. "),
          x(
            "Block one: the decision request in one sentence ('We are requesting approval of a £X investment in AI Y, expected to return £Z NPV over five years'). Block two: financial metrics table (NPV, IRR, payback, risk-adjusted NPV). Block three: top three benefit categories with annual estimates and confidence weights. Block four: top three risks with mitigations named. Block five: accountability structure (named owner, primary metric, twelve-month target).",
            "Five blocks, maximum one page. If you cannot contain the decision in five visual blocks, the scope is too broad or the communication is insufficiently disciplined. Reduce scope or improve discipline — never increase the page count.",
          ),
          s(" Build the one-page summary in landscape format with five visual blocks — test it by removing the supporting model and confirming the summary makes complete sense standalone."),
        ],
        [
          s("Visual hierarchy signals what matters most. "),
          x(
            "The NPV figure should be the largest number on the page — it is the primary value claim. The risk-adjusted NPV should be immediately adjacent and visually smaller but clearly labelled. Traffic light indicators (green/amber/red) for benefit confidence and risk levels communicate a large amount of information in a format that CFOs process in seconds.",
            "CFOs spend an average of 90 seconds on a one-page financial summary before forming a preliminary view. Visual hierarchy determines what they see in those 90 seconds. Design the page so the right things are seen first.",
          ),
          s(" Make the NPV the largest visual element, traffic-light the confidence indicators, and confirm the page tells the right story in 90 seconds of casual scanning."),
        ],
        [
          s("The summary should pass the 'three questions' test. "),
          x(
            "Three questions: (1) What decision is being requested? (2) What is the financial return and its confidence level? (3) Who is accountable if the return is not delivered? If a CFO or board member cannot answer all three questions from the one-page summary alone, the summary needs revision.",
            "Test the summary with a colleague who has not been involved in the project. Ask them to answer the three questions from the summary alone. Their answers reveal whether the summary communicates or obscures.",
          ),
          s(" Test the one-page summary with a non-involved colleague — if they cannot answer all three questions, revise before submission."),
        ],
      ],
      examples: [
        {
          title: "Financial services — one-page summary in board pack",
          body: "A bank's AI fraud detection one-page summary was included in the board pack without the supporting model — at the CFO's request. 'This is exactly what the board needs,' the CFO said. 'Decision, return, confidence, risk, and owner — on one page.' Three board members commented on the quality of the summary. Two subsequently asked about AI programme investment levels across the organisation. The one-page discipline had created a board conversation about AI strategy that no 30-page model had ever produced.",
        },
        {
          title: "Healthcare — 90-second scan test",
          body: "A hospital's AI scheduling tool summary was reviewed by a programme governance consultant using a 90-second scan test. After 90 seconds: 'I see the NPV is £1.4M, the payback is 19 months, and the traffic lights show high benefit confidence and medium risk. But I cannot see who is accountable or what the metric is at month twelve.' The accountability block was redesigned — the consultant's 90-second test had identified the gap that the approval committee would otherwise have raised.",
        },
        {
          title: "Insurance — three-questions test",
          body: "An insurer's AI underwriting summary was tested with the Chief Actuary — not involved in the programme. Three questions: (1) 'Approving £680K investment in AI underwriting support.' (2) '28% IRR, 21-month payback, risk-adjusted NPV £2.1M, medium-high confidence.' (3) 'Sarah Williams, Head of Underwriting, responsible for delivering 18% decision cycle time reduction by month twelve.' All three questions answered correctly from the one-page summary alone. The summary required only one round of revision — the original version had buried the accountability in the fifth paragraph of the risk section.",
        },
      ],
    }),
    buildSection({
      number: "9.8",
      title: "BL decision lens: CFO meeting preparation",
      subtitle: "The five preparation actions every business leader must take before presenting AI ROI to the CFO",
      take: "CFO meeting preparation is not reading the business case the night before. It is a structured week of preparation: pre-briefing, challenge rehearsal, model stress-testing, evidence verification, and accountability confirmation. Leaders who complete all five actions typically achieve approval on the first submission; leaders who skip any action typically face at least one deferral.",
      why: "CFO deferral has a real cost: four to six weeks of delay, additional analytical work, and leadership time. The preparation actions described in this section typically take two to three days and prevent most deferrals. The preparation ROI is extremely high.",
      paragraphs: [
        [
          s("Action one: pre-brief the CFO at least ten days before the committee meeting. "),
          x(
            "A bilateral pre-brief gives the CFO the opportunity to identify their specific concerns before the committee meeting. Their concerns may be material (identify a genuine gap) or manageable (provide additional evidence). Either way, a pre-brief converts a committee challenge into a preparation task.",
            "A pre-brief request that is declined ('I'll review it in the meeting') is a risk signal — the CFO has either no concerns (unlikely) or is reserving their challenges for a public forum. If the latter, escalate through the CEO or a CFO peer to understand the specific concern before the meeting.",
          ),
          s(" Request the pre-brief ten days before the committee meeting — it is harder to decline than a day-before request, and it provides time to act on the feedback."),
        ],
        [
          s("Actions two and three: challenge rehearsal and model stress-test. "),
          x(
            "Second: rehearse the ten most predictable CFO challenges with a colleague playing CFO, timing each answer to under 90 seconds. The ten challenges are: (1) what is your most uncertain assumption, (2) what is the worst case NPV, (3) who is accountable for delivery, (4) how does this compare to alternative uses of capital, (5) where does the saving show up on the P&L, (6) what is the risk-adjusted return, (7) why is the IRR above the hurdle rate, (8) what happens if adoption is 30% lower, (9) what is the exit strategy if the pilot fails, (10) what is your baseline and how was it measured?",
            "Third: stress-test the financial model at ±20% on all key assumptions. If any assumption at -20% produces a negative NPV, that assumption requires either stronger evidence or a higher contingency allocation.",
          ),
          s(" Rehearse the ten challenges with a timer — any answer that exceeds 90 seconds or requires returning to the model needs to be refined before the meeting."),
        ],
        [
          s("Actions four and five: evidence verification and accountability confirmation. "),
          x(
            "Fourth: verify that every external evidence source cited in the business case is accessible and accurate. Send a research assistant to pull the specific page of the analyst report cited; confirm the peer comparable data is from the stated source; check that pilot results are documented and retrievable.",
            "Fifth: confirm accountability. Call or meet the named owner for financial ROI accountability. Confirm they understand their accountability, know the specific metric, and are prepared to stand behind the commitment in the meeting if asked. An accountable owner who has not been briefed is a meeting liability, not an asset.",
          ),
          s(" Confirm the accountable owner understands and accepts their accountability in a conversation before the meeting — not via email."),
        ],
      ],
      examples: [
        {
          title: "Financial services — pre-brief ten days before",
          body: "A bank programme manager scheduled a CFO pre-brief ten days before the investment committee. The CFO reviewed the model and had two concerns: the change management cost seemed low for the user population size, and the benefit attribution methodology for cost reduction was unclear. Both concerns were addressed in the revised submission submitted five days later. At the committee meeting, the CFO said: 'I have already reviewed this with the team and my concerns have been addressed.' The meeting took 20 minutes. The pre-brief had done all the substantive work.",
        },
        {
          title: "Retailer — challenge rehearsal finding a gap",
          body: "A retailer's AI pricing tool team rehearsed ten challenges. Challenge four ('how does this compare to alternative uses of capital?') produced an improvised answer about strategic importance that went to three minutes and did not cite the competing investment IRRs. The team spent two hours analysing the three competing capital projects and their IRRs. The rehearsal answer was reduced to: 'The next competing project is a distribution centre expansion at 16% IRR. The AI pricing tool at 29% IRR generates 13 points more return. It is the highest-IRR project in this year's capital cycle.' At the committee meeting, the CFO asked exactly this question. The 45-second answer was the most important 45 seconds in the meeting.",
        },
        {
          title: "Healthcare — accountability confirmation in person",
          body: "A hospital programme manager sent the Head of Clinical Operations an email confirming their accountability for AI scheduling ROI. The Head replied: 'Yes, noted.' At the CFO meeting, the CFO asked the Head of Clinical Operations directly: 'You're the named accountable owner for the £1.4M operational saving target. Are you confident you can deliver that?' The Head's answer was hesitant — she had not fully processed the commitment. The CFO deferred the investment. The lesson: accountability confirmation requires a conversation, not an email acknowledgement.",
        },
      ],
    }),
  ],
  quiz: [
    {
      q: "Which of the following most accurately describes how a CFO evaluates an AI investment?",
      options: [
        "By the sophistication of the AI technology and model architecture.",
        "Through four lenses: financial model rigour, worst credible outcome, capital competition, and named accountability.",
        "By the total number of users the AI will affect.",
        "By comparing the AI to the organisation's existing technology strategy.",
      ],
      correct: 1,
      correctFeedback:
        "Correct. CFOs evaluate AI investments through financial rigour, downside risk, capital competition, and accountability. Presentations that answer all four earn approval. Re-read section 9.1.",
      wrongFeedback:
        "CFOs use specific financial and accountability lenses. Re-read section 9.1.",
    },
    {
      q: "An AI business case shows a base case NPV of £2.4M. The top three risks have expected values of £180K, £120K, and £90K. What is the risk-adjusted NPV?",
      options: [
        "£2.4M — the base case is the NPV.",
        "£2.01M — base case minus sum of expected risk values.",
        "£1.8M — base case minus the largest risk only.",
        "£3M — base case plus contingency.",
      ],
      correct: 1,
      correctFeedback:
        "Correct. Risk-adjusted NPV = £2.4M − (£180K + £120K + £90K) = £2.4M − £390K = £2.01M. Present this figure alongside the base case NPV. Re-read section 9.5.",
      wrongFeedback:
        "Risk-adjusted NPV subtracts the sum of all expected risk values from the base case. Re-read section 9.5.",
    },
    {
      kind: "order",
      q: "Order the five CFO meeting preparation actions from first (most advance time required) to last.",
      prompt: "Drag to arrange first action (top) to last (bottom).",
      items: [
        "Pre-brief the CFO at least ten days before the committee meeting.",
        "Rehearse ten predictable CFO challenges with a timed 90-second response.",
        "Stress-test the financial model at ±20% on all key assumptions.",
        "Verify all external evidence sources are accurate and accessible.",
        "Confirm the named accountable owner understands and accepts their accountability in a direct conversation.",
      ],
      correctFeedback:
        "Correct. Pre-brief first (most lead time needed), then rehearsal and stress-testing, then evidence verification and accountability confirmation. Re-read section 9.8.",
      wrongFeedback:
        "Preparation sequence matters — pre-briefing requires the most lead time. Re-read section 9.8.",
    },
    {
      kind: "categorize",
      q: "Sort each external evidence source by its CFO credibility level.",
      categories: ["Higher CFO credibility", "Lower CFO credibility"],
      items: [
        { text: "Own Phase 2 pilot data from 150 users over 12 weeks with RCT design.", category: 0 },
        { text: "Vendor-provided case study from a named reference customer.", category: 1 },
        { text: "Peer comparable from a named industry association research report.", category: 0 },
        { text: "AI vendor's marketing material with ROI claims.", category: 1 },
        { text: "McKinsey survey data citing 67 comparable institutions with named methodology.", category: 0 },
        { text: "Internal manager estimate without measurement methodology.", category: 1 },
      ],
      correctFeedback:
        "Right. Own pilot data and independent analyst research with named methodology carry highest credibility. Vendor marketing and unverified internal estimates carry lowest credibility. Re-read section 9.6.",
      wrongFeedback:
        "Evidence credibility depends on independence, specificity, and methodology transparency. Re-read section 9.6.",
    },
    {
      q: "What is the most important test to apply to a one-page AI ROI summary before submission?",
      options: [
        "It must be exactly one page.",
        "A non-involved colleague must be able to answer three questions from the summary alone: what decision is requested, what is the financial return and confidence, and who is accountable.",
        "It must include all sections of the full business case.",
        "It must use the largest possible font for the NPV figure.",
      ],
      correct: 1,
      correctFeedback:
        "Correct. The three-questions test with a non-involved colleague is the most practical test of whether the summary communicates its intent. All three must be answerable from the one-page summary alone. Re-read section 9.7.",
      wrongFeedback:
        "The three-questions test with a non-involved colleague is the gold standard. Re-read section 9.7.",
    },
    {
      q: "The 'show me the money' CFO challenge is best answered by:",
      options: [
        "Providing a high-level description of the AI capability.",
        "Citing industry benchmarks for AI productivity improvement.",
        "Tracing the benefit to a specific GL account, stating the amount, the quarter it appears, and naming the budget owner who has committed to the change.",
        "Explaining how the AI was implemented technically.",
      ],
      correct: 2,
      correctFeedback:
        "Right. The 'show me the money' challenge requires a specific P&L trace: GL account, amount, timing, and named owner commitment. Anything less is an AI advocate answer, not a business manager answer. Re-read section 9.4.",
      wrongFeedback:
        "Show me the money requires specificity to GL account and named owner. Re-read section 9.4.",
    },
  ],
});
