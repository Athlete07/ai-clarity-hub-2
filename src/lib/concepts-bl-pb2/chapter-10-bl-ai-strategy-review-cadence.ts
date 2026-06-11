import { buildChapter, buildSection, s, x, sectionWithDiagram } from "../concepts-bl-helpers";

export const chapter10BlAiStrategyReviewCadence = buildChapter({
  slug: "bl-ai-strategy-review-cadence",
  number: 10,
  shortTitle: "AI Strategy Review Cadence",
  title: "AI Strategy Review Cadence — Governing a Programme That Never Stands Still",
  readingMinutes: 20,
  summary:
    "AI strategies become obsolete faster than software roadmaps because model capabilities, vendor markets, regulatory requirements, and competitive conditions all evolve on timescales shorter than the annual planning cycle. Business leaders who review AI strategy on an annual cadence govern a programme that is systematically behind reality. This chapter gives you the governance architecture for a programme that stays current.",
  keyTakeaway:
    "AI governance requires a nested cadence: monthly operational monitoring to detect performance drift, quarterly portfolio reviews to make gate and priority decisions, and annual strategic alignment to ensure the portfolio still serves the right business outcomes. Each cadence has different decisions, different participants, and different artefacts — treating all three the same produces governance that is either too frequent to be strategic or too infrequent to catch operational drift.",
  pmCallout:
    "As a business leader: you own the quarterly portfolio review and the annual strategic alignment — these are the cadences that determine whether your AI programme stays connected to business strategy. The monthly operational reviews can be delegated; the quarterly and annual ones cannot.",
  sections: [
    sectionWithDiagram({
      number: "10.1",
      title: "Why AI Needs a Faster Review Cadence",
      subtitle: "The four dynamics that make annual review insufficient",
      take: "Annual review cadence is designed for stable investment programmes — infrastructure, real estate, long-term capital equipment. AI investment is not stable: model capabilities evolve quarterly, vendor markets shift through acquisitions and pricing changes, regulatory guidance is issued in response to deployments, and competitive AI adoption creates urgency that does not wait for annual review windows. Leaders who review AI annually make decisions 12 months after the evidence that should drive them.",
      why: "Understanding why AI needs a faster cadence prevents the governance trap of importing annual planning conventions into a domain where they systematically produce late decisions. The case for a faster cadence is not about busyness — it is about the decision latency that annual cadence produces.",
      paragraphs: [
        [
          s("AI model capabilities evolve on a quarterly timescale in 2026. "),
          x(
            "Foundation model releases from major providers — OpenAI, Anthropic, Google, Meta — produce meaningful capability improvements multiple times per year. A use case that was infeasible in Q1 because of accuracy limitations may be feasible in Q3 after a model release. A use case approved in Q1 based on a specific vendor's model may have a superior alternative by Q3.",
            "Annual review produces a programme designed for Q1 capabilities and governed in Q1+12. Quarterly review produces a programme that can incorporate Q3 capabilities into the Q3 portfolio review — and can adjust the sourcing decision when a better option emerges.",
          ),
          s(" Model capability improvements are quarterly events — quarterly reviews capture them; annual reviews miss them."),
        ],
        [
          s("Vendor market events — acquisitions, pricing changes, product exits — are unpredictable. "),
          x(
            "The AI vendor market has produced major consolidation events every quarter since 2023: acquisitions that change support quality, pricing model changes that affect TCO assumptions, product pivots that change capability roadmaps, and market exits that require contingency planning. None of these events wait for annual review cycles.",
            "Quarterly review cadence allows the governance committee to assess vendor market events as they occur and make programme adjustments before they become crises. Annual review produces late decisions: discovering at the annual review that a key vendor was acquired 8 months ago and that support quality has declined is not governance — it is autopsy.",
          ),
          s(" Vendor market events require a response cadence shorter than 12 months."),
        ],
        [
          s("Performance drift in AI systems is invisible without monitoring — and requires quarterly action. "),
          x(
            "AI model performance degrades over time as the world changes — fraud patterns evolve, customer language shifts, product catalogues change, market conditions alter the relationship between input features and outputs. This degradation is gradual, invisible in operational metrics until it reaches a threshold, and only detectable through active monitoring.",
            "Quarterly review is the earliest governance cadence that can respond to performance drift before it becomes a business problem. Monthly monitoring detects the drift; quarterly review provides the governance forum for the response decision — retrain, adjust, or replace.",
          ),
          s(" Drift detection requires monthly monitoring; drift response requires quarterly governance."),
        ],
        [
          s("Regulatory guidance evolves on a cadence that annual review cannot match. "),
          x(
            "In 2026, AI regulatory guidance is being published by the EU, UK, US federal agencies, and sectoral regulators at a pace of multiple significant publications per year. Regulatory publications can change the compliance requirements for deployed AI systems, the permissible use cases for AI in regulated decisions, and the documentation and audit requirements for AI governance.",
            "A programme reviewed annually will discover regulatory changes up to 12 months after they were published. Quarterly review limits the discovery lag to 3 months — and allows compliance assessment and remediation planning before a regulatory challenge arrives.",
          ),
          s(" Regulatory guidance has a quarterly issue cadence — quarterly review limits discovery lag."),
        ],
      ],
      examples: [
        {
          title: "A bank — model capability improvement missed by annual cadence",
          body: "A bank's AI credit risk programme, reviewed annually, was built on GPT-3.5 class models with accuracy limitations that required a human review step for 40% of applications. The annual review, held 11 months after programme approval, discovered that GPT-4 class models had eliminated the accuracy limitation — the human review step was now unnecessary for 80% of the 40% category. Eleven months of unnecessary human review cost was incurred because the quarterly review that would have caught the capability improvement did not exist.",
        },
        {
          title: "An insurer — vendor acquisition discovered at annual review",
          body: "An insurer's AI claims vendor was acquired by a direct competitor 7 months into the programme. The acquisition was a material programme risk — the competitor could see the insurer's claims data and model design. The insurer discovered this at the annual review. Quarterly review cadence would have produced a governance response within 3 months of the acquisition — before 7 months of exposure had accumulated.",
        },
        {
          title: "A retailer — EU AI Act guidance changes deployment requirements",
          body: "A retailer's AI pricing tool was deployed under a governance framework designed before the EU AI Act's product liability provisions were finalised. When the finalised provisions were published, they required changes to the audit trail and explanation documentation. Quarterly review cadence detected the change in the next review cycle — 6 weeks after publication. The governance changes were made within 10 weeks of publication. An annual review cadence would have produced a 12-month gap before the change was addressed.",
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
      number: "10.2",
      title: "The Quarterly Review",
      subtitle: "The governance heartbeat of the AI programme",
      take: "The quarterly review is the primary governance event for an AI programme: it is where gate decisions are made, portfolio balance is assessed, vendor and regulatory developments are evaluated, and priority adjustments are approved. It is a decision meeting, not a status meeting — and its agenda, participants, and pre-work are designed to produce decisions, not updates.",
      why: "The quarterly review's value comes from its decision-making function. A quarterly review that produces status reports has the cost of a governance event without the value of governance. Business leaders who design and chair quarterly reviews as decision forums realise the full value of the cadence.",
      paragraphs: [
        [
          s("The quarterly review agenda has five standing items. "),
          x(
            "Item one: portfolio health dashboard review — overall programme performance against value and milestone commitments. Item two: gate decisions — for each initiative at a gate, proceed/redesign/stop based on pre-stated criteria. Item three: portfolio balance check — current horizon distribution vs. targets, with rebalancing action if required. Item four: vendor and regulatory update — material changes in the past quarter that affect programme assumptions. Item five: deferred initiative re-entry — assessment of whether any deferred initiative has met its re-entry conditions.",
            "Five items, each producing a specific decision type. The agenda should be designed so that every item has a decision to make — not just information to receive. If an item produces no decision, it is a pre-read item, not a meeting agenda item.",
          ),
          s(" Five decision items, each with a specific decision type — no agenda items that produce only information."),
        ],
        [
          s("Participants are decision-makers, not briefers. "),
          x(
            "The quarterly review participant list should include: the business leader sponsor (decision authority), the AI programme director (programme health evidence), a finance representative (budget authority for gate decisions), a legal or compliance representative (regulatory update), and no more than one programme manager per active initiative.",
            "The review is undermined by programme managers presenting their own initiative's status to the decision-makers. Presentations in defence of one's own programme are optimistic by design. Decision-maker-to-decision-maker review of pre-read evidence is more productive. Require a pre-read package that contains all programme health information; the meeting is for questions and decisions.",
          ),
          s(" Decision-makers reviewing pre-read evidence is more productive than programme managers presenting their own initiatives."),
        ],
        [
          s("Pre-read package discipline determines the quality of decisions. "),
          x(
            "The pre-read package must contain: portfolio health dashboard with the current period's evidence vs. milestone; gate review brief for each initiative at a gate (evidence against the pre-stated gate criteria, variance analysis, and programme recommendation); vendor and regulatory update (material changes and their programme implications); and deferred initiative re-entry assessment.",
            "The pre-read is distributed 48 hours before the meeting. Decision-makers who arrive without having read it receive a 10-minute summary and vote — the committee's implicit signal that pre-read discipline is a governance expectation. Decision-makers who arrive with written questions based on the pre-read drive the best governance discussions.",
          ),
          s(" 48-hour pre-read with written questions from decision-makers is the governance quality standard."),
        ],
      ],
      examples: [
        {
          title: "A bank — five-item agenda in practice",
          body: "A bank's quarterly AI programme review adopted the five-item agenda. In the first year: portfolio health dashboard (5 minutes review, 5 minutes questions), gate decisions (20 minutes — 2 initiatives at gate, both proceeded), portfolio balance check (10 minutes — one rebalancing action agreed), vendor and regulatory update (10 minutes — one vendor pricing change noted, one regulatory publication assessed), deferred initiative re-entry (5 minutes — one initiative met re-entry conditions, entered assessment queue). Total meeting time: 55 minutes. Decisions made: 4. The programme director noted: 'We make more decisions in one quarterly review than we made in six months of ad hoc meetings.'",
        },
        {
          title: "An insurer — programme manager presentation problem",
          body: "An insurer's quarterly review had programme managers presenting their own initiatives' status. In three consecutive reviews, no initiative had received a 'redesign' or 'stop' gate decision — every initiative had proceeded. An external governance review found that programme managers' natural optimism in their own presentations was preventing gate decisions from being made on evidence. The review format was changed: programme managers submitted a pre-read package and attended to answer questions; decisions were made by the committee on the evidence in the pre-read, not on the verbal presentation. In the first changed review, two initiatives received 'redesign' decisions.",
        },
        {
          title: "A retailer — pre-read discipline creates governance culture",
          body: "A retailer's AI programme governance committee chair cancelled the second quarterly review when three of five committee members arrived without having read the pre-read package. 'We will reconvene when the pre-read has been read. I will reschedule for next week.' The cancelled review produced costs: rescheduled meeting time, programme delay, and a visible governance signal. It was the only review ever cancelled. All subsequent reviews had pre-read evidence of preparation in the form of pre-submitted written questions.",
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
      number: "10.3",
      title: "Leading Indicators for AI Programme Health",
      subtitle: "What to monitor monthly so you are never surprised at the quarterly review",
      take: "Leading indicators are signals that predict future AI programme performance before problems become visible in lagging business outcome metrics. Monthly monitoring of leading indicators enables the quarterly review to respond to developing issues rather than confirm established failures. Business leaders who define leading indicators for their AI programmes before launch have an early warning system; those who wait for lagging outcome metrics are managing in arrears.",
      why: "Lagging indicators — business outcomes — are valuable but arrive too late to prevent failure. By the time fraud detection ROI is measurably declining because of model drift, the model has been drifting for months. Leading indicators — model accuracy, adoption rate, data quality score — detect the drift before it becomes a business impact.",
      paragraphs: [
        [
          s("Three leading indicator categories cover the full AI programme health space. "),
          x(
            "Technical health indicators: model accuracy on a current holdout set, inference latency percentile, error rate by input type, and data pipeline freshness. Adoption indicators: active user percentage, AI recommendation acceptance rate, workflow completion rate with AI assistance, and user confidence score. Value delivery indicators: processing throughput vs. plan, exception rate, human override rate, and downstream metric movement (the business metric the AI is designed to influence).",
            "Each category has a leading relationship to the lagging business outcome metric. Technical health leads to model reliability. Adoption leads to the human behaviour change that converts AI output to business outcome. Value delivery provides the earliest signal of whether the business outcome is being approached.",
          ),
          s(" Three categories, nine specific indicators — define your specific indicators at programme design, not post-launch."),
        ],
        [
          s("Define alert thresholds at programme launch, not when problems emerge. "),
          x(
            "Each leading indicator should have two thresholds: an attention threshold (performance has declined from baseline by X — flag for review) and an action threshold (performance has declined from baseline by Y — trigger a defined response). Thresholds defined at programme launch reflect calibrated expectations; thresholds defined when problems emerge reflect post-hoc rationalisation.",
            "The action threshold triggers a pre-defined response — not an ad hoc investigation. Pre-defined responses: model accuracy below action threshold triggers a retraining sprint; adoption below action threshold triggers a change management intervention; data pipeline freshness below action threshold triggers a data engineering review.",
          ),
          s(" Alert and action thresholds with pre-defined responses — defined at launch, not when triggered."),
        ],
        [
          s("Monthly monitoring reports should be exceptions-only, not comprehensive. "),
          x(
            "A monthly monitoring report that covers all indicators whether or not they have deviated from plan produces data without signal. Decision-makers who receive comprehensive reports stop reading them — or read them without the ability to distinguish important from unimportant signals.",
            "Exception-based reporting: the monthly report contains only indicators that have crossed an alert or action threshold, the magnitude and duration of the deviation, and the pre-defined response that has been or will be triggered. If no indicators have crossed thresholds, the monthly report is one line: 'All indicators within normal range. No action required.'",
          ),
          s(" Exception-based reporting: if no thresholds are crossed, the monthly report is one line."),
        ],
      ],
      examples: [
        {
          title: "A bank — leading indicators detect drift before business impact",
          body: "A bank's AI fraud detection monthly monitoring showed a gradual accuracy decline over three months: 94.2% → 93.1% → 91.8% → 90.3%. The action threshold was 91.5%. The third monthly report crossed the attention threshold; the fourth crossed the action threshold. The pre-defined action — retraining sprint — was triggered in month 4. The retrained model restored accuracy to 94.1% within 6 weeks. The business outcome metric — fraud losses as a percentage of transaction volume — showed no deterioration during the period, because the response was triggered by the leading indicator before the lagging metric was affected.",
        },
        {
          title: "A manufacturer — adoption indicator triggers intervention",
          body: "A manufacturer's AI quality inspection monthly monitoring showed an adoption indicator below the attention threshold in month 2: AI alert action rate was 41% against a 65% target (operators were acknowledging alerts without acting on them). The attention threshold was 55%. The pre-defined attention response: root cause investigation. Investigation revealed: operators did not understand the alert confidence score display; the interface was showing a number (0.72) without context for what that number meant. A UI redesign and 90-minute training session raised the action rate to 74% in month 4. The leading indicator caught an adoption problem before it became a business outcome problem.",
        },
        {
          title: "A retailer — exception-based reporting changes the quality of attention",
          body: "A retailer's AI programme monthly reports had been comprehensive 12-page documents covering all indicators across all initiatives. The CDO reported receiving them and reading the executive summary. The programme director redesigned the format: exception-based, maximum 2 pages, only indicators crossing thresholds. In 18 months, 9 of 18 monthly reports were one page ('all indicators within normal range'). 9 reports had exceptions; 7 of those triggered action. The CDO read all 18 reports in full — because the format made them readable and the signal-to-noise ratio justified the attention.",
        },
      ],
    }),
    buildSection({
      number: "10.4",
      title: "Portfolio Review",
      subtitle: "Ensuring the portfolio as a whole is making the right bets",
      take: "The portfolio review is distinct from the programme health review: it evaluates whether the current set of AI investments — as a whole — represents the right capital allocation given current business priorities, competitive conditions, and programme performance evidence. A portfolio that contains individually sound investments that are collectively wrongly weighted, wrongly sequenced, or strategically misaligned will underperform a well-composed portfolio.",
      why: "Individual investment evaluation cannot see portfolio-level issues: concentration risk (too many high-risk initiatives), horizon imbalance (too few quick wins or too few long-term bets), dependency bottlenecks (multiple initiatives waiting for a single prerequisite), and strategic drift (investments no longer serving current priorities). Portfolio review addresses these.",
      paragraphs: [
        [
          s("Portfolio health has four dimensions: value, balance, dependency, and alignment. "),
          x(
            "Value: is the portfolio producing value at the rate the original investment commitments assumed? Compare the cumulative value delivered to plan, and the expected value pipeline from active initiatives to the plan. Balance: is the portfolio appropriately distributed across risk levels and time horizons? Dependency: are there bottlenecks — single initiatives that multiple others depend on — that create programme-wide risk? Alignment: does each active initiative still trace to a current strategic priority?",
            "Each dimension requires a specific data source: programme health reports for value, horizon distribution analysis for balance, dependency map for bottlenecks, and the current strategic plan for alignment. Portfolio review that lacks any of these data sources is incomplete.",
          ),
          s(" Four portfolio health dimensions, four data sources — prepare all four before the portfolio review."),
        ],
        [
          s("The portfolio review produces rebalancing decisions, not just assessments. "),
          x(
            "A portfolio review that assesses balance without producing a rebalancing decision has performed analysis but not governance. The output of every portfolio review should be: investment rebalancing if the distribution is materially off-target, dependency resolution if a bottleneck exists, and alignment adjustment if any initiative has drifted from its strategic home.",
            "Rebalancing decisions are the hardest portfolio review outputs to produce because they typically involve reducing investment in a currently funded initiative to fund a different one. The governance mechanism that makes this possible: explicit portfolio balance targets that were agreed before the review, creating an objective basis for rebalancing decisions rather than a political one.",
          ),
          s(" Portfolio review produces rebalancing decisions — not just balanced assessments."),
        ],
        [
          s("Document portfolio decisions with rationale, not just outcomes. "),
          x(
            "A portfolio rebalancing decision recorded as 'Initiative C investment reduced by 30%; Initiative F investment increased by 30%' cannot be revisited intelligently when conditions change. A portfolio rebalancing decision recorded with rationale — 'Initiative C value delivery 40% below plan due to data quality issues not yet resolved; Initiative F is on critical path for three Horizon 2 programmes and is resource-constrained; rebalancing of 30% addresses the bottleneck at acceptable cost to Initiative C's timeline' — can be revisited intelligently.",
            "Rationale documentation also protects portfolio decisions from retrospective challenge. A portfolio decision that is recorded with clear evidence basis is more durable than one recorded as a conclusion without evidence.",
          ),
          s(" Portfolio decision rationale is the governance artefact — it protects decisions when conditions change and enables intelligent revision."),
        ],
      ],
      examples: [
        {
          title: "A financial services group — portfolio health four dimensions",
          body: "A financial services group's quarterly portfolio review used a four-quadrant dashboard: value delivery (£ delivered vs. plan, initiative by initiative), balance (horizon distribution bar chart with targets and actuals), dependency map (current bottleneck identification), and alignment matrix (initiative-to-strategic-priority mapping, with any unmapped initiatives highlighted). The dashboard required 30 minutes of preparation per quarter and took 15 minutes to review in the committee. In the first year, it produced: three rebalancing decisions, one bottleneck resolution, and two alignment adjustments. All five decisions were made on the evidence in the dashboard rather than on committee members' individual perspectives.",
        },
        {
          title: "A bank — rebalancing decision with rationale",
          body: "A bank's portfolio review produced a rebalancing decision in Q2: 'Initiative A (AI mortgage pre-screening) investment reduced by £280K because data quality issues have delayed its value delivery to Q4; this investment is redirected to Initiative D (AI affordability assessment) which is on the critical path for the mortgage growth strategy and has been resource-constrained. Rationale: Initiative A is not producing value in Q2-Q3; Initiative D's delay costs £140K per month in missed strategic opportunity. Rebalancing produces £420K in net benefit at acceptable cost to Initiative A's Q4 timeline.' The rationale was recorded in the committee minutes and referenced when Initiative A's sponsor challenged the decision 4 weeks later.",
        },
        {
          title: "A manufacturer — dependency bottleneck identified and resolved",
          body: "A manufacturer's Q1 portfolio review dependency map identified that three Horizon 2 initiatives — AI quality, AI maintenance, and AI production scheduling — all depended on a single ML serving platform being built by a two-person internal team. The platform was 4 months behind schedule due to resource competition. Portfolio review decision: platform build team increased by 2 engineers; one Horizon 1 initiative was moved from build to buy (saving internal engineering capacity) to fund the resource increase. The dependency bottleneck was resolved without adding budget — through portfolio rebalancing.",
        },
      ],
    }),
    buildSection({
      number: "10.5",
      title: "Updating Strategy Between Annual Reviews",
      subtitle: "When and how to adjust strategic direction without losing programme coherence",
      take: "AI strategy should be formally updated once per year through the annual review process — but the conditions that justify a mid-cycle update do exist. Material competitive developments, significant regulatory changes, and fundamental business condition shifts are all legitimate triggers for strategic adjustment between annual reviews. Business leaders who maintain the discipline to distinguish legitimate triggers from convenient excuses protect programme coherence while remaining genuinely responsive to change.",
      why: "The tension between programme stability (which requires resisting every new idea that arrives) and strategic responsiveness (which requires incorporating genuinely important new information) is one of the most demanding governance challenges in AI. Too stable and the programme becomes stale; too responsive and it becomes incoherent.",
      paragraphs: [
        [
          s("Pre-state the conditions that justify mid-cycle strategic update. "),
          x(
            "As described in chapter 6, material change in the business environment — competitive position shift, regulatory reclassification, strategic pivot by the parent organisation — justifies a mid-cycle strategic update. These conditions should be stated before they arise so that when a stakeholder proposes a mid-cycle update, the test is specific: does this situation meet a pre-stated condition?",
            "Without pre-stated conditions, mid-cycle update requests are evaluated against the proposer's persuasiveness and seniority rather than against objective evidence of material change. Pre-stated conditions are the governance protection for programme coherence.",
          ),
          s(" Pre-state mid-cycle update conditions — they make the test objective rather than political."),
        ],
        [
          s("Strategic update requires a proportionate governance event, not an ad hoc decision. "),
          x(
            "A strategic update that changes which business priorities the AI programme serves, which initiatives are in the active portfolio, or which investment horizons receive funding is a governance event — not a decision the business leader can make alone in response to a stakeholder meeting.",
            "The governance event for a mid-cycle strategic update: a focused portfolio review against the updated strategic context, following the same process as the annual strategic alignment review but scoped to the specific change rather than the full portfolio. This proportionate governance response ensures that consequential decisions receive consequential governance — without requiring a full annual review cycle.",
          ),
          s(" Mid-cycle strategic updates require proportionate governance — not ad hoc decisions."),
        ],
        [
          s("Communicate strategic updates with the change and the evidence, not just the conclusion. "),
          x(
            "When a strategic update changes the AI programme's direction, the communication to programme teams, business unit stakeholders, and governance bodies must include: what changed, what new information triggered the change, how the programme will be different, and what stays the same. 'Priorities have changed' without the evidence and the reasoning produces confusion and resistance — especially in teams that are delivering against the previous priorities.",
            "Teams that understand why the strategy has changed — because of a specific competitive development or a specific regulatory change — can adapt their execution accordingly. Teams that are told priorities have changed without explanation cannot.",
          ),
          s(" Change, evidence, and consequence in every strategic update communication — the reasoning is as important as the decision."),
        ],
      ],
      examples: [
        {
          title: "A bank — pre-stated condition triggers mid-cycle update",
          body: "A bank's AI programme had a pre-stated mid-cycle update condition: 'If a competitor deploys AI capability that materially affects our win rate on a strategic product, this constitutes a material competitive development.' In Q3, a competitor launched AI-powered instant personal loan decisions; the bank's personal loan win rate declined from 58% to 49% within 6 weeks. The condition was clearly met. A focused portfolio review was convened; the personal loan AI initiative was accelerated from Horizon 2 to Horizon 1 with an additional £420K investment. The pre-stated condition made the governance decision clear and fast.",
        },
        {
          title: "An insurer — proportionate governance for mid-cycle update",
          body: "An insurer's mid-cycle strategic update — triggered by EU AI Act finalisation — was governed through a focused portfolio review attended by the CTO, CDO, General Counsel, and Chief Actuary. The review was scoped specifically to the regulatory change: which active AI initiatives were affected, what governance changes were required, and whether the strategic priority of the affected initiatives changed given the compliance burden. The review produced four decisions affecting three initiatives. Total governance time: 2 hours. The proportionate scoping kept the update focused while maintaining appropriate decision authority.",
        },
        {
          title: "A retailer — communication that preserved team coherence",
          body: "A retailer's mid-cycle strategic update moved AI investment focus from supply chain optimisation to customer personalisation following a competitor's major personalisation announcement and internal customer research results. The programme director's communication to the programme teams: 'We are redirecting two supply chain AI initiatives to Horizon 2 deferred status. The reason: a competitor's personalisation capability has been confirmed by customer research as a purchasing decision factor affecting 31% of customers — making customer personalisation the higher-priority AI investment for the business. The supply chain initiatives will be reassessed at the annual review. The personalisation programme, which was already in the portfolio, will receive additional resource.' The communication was received positively — teams understood the reason and the decision.",
        },
      ],
    }),
    buildSection({
      number: "10.6",
      title: "Stakeholder Communication Cadence",
      subtitle: "Keeping the right people informed at the right frequency",
      take: "Different stakeholders require different communication frequency, depth, and format for AI programme updates. Board: quarterly summary with annual strategic review. Executive leadership: monthly exception-based update. Business unit leaders: monthly operational impact update. Programme teams: weekly operational cadence. Miscalibrating the communication frequency — too frequent and it loses attention, too infrequent and stakeholders fill the information vacuum with assumptions — is a programme governance failure.",
      why: "Communication cadence determines stakeholder confidence and programme support. Business leaders who communicate at the right frequency to the right audiences build informed, supportive stakeholder relationships. Those who communicate ad hoc or on a single cadence to all audiences produce either stakeholder fatigue or stakeholder information gaps.",
      paragraphs: [
        [
          s("Map stakeholder information needs before designing the communication architecture. "),
          x(
            "Board information needs: is the programme producing the business outcomes the investment committed to, and are there risks requiring board attention? Frequency: quarterly. Executive leadership needs: are monthly leading indicators showing any emerging issues, and are there any programme decisions requiring executive input? Frequency: monthly. Business unit leader needs: how is AI affecting their function's operations, and what is the timeline for upcoming changes? Frequency: monthly. Programme team needs: daily operational visibility, weekly milestone and issue tracking.",
            "Each stakeholder level has different information depth requirements. Boards receive portfolio-level summaries; programme teams receive initiative-level operational detail. The same information depth for all stakeholders produces documents that are too detailed for boards and too thin for programme teams.",
          ),
          s(" Information need, frequency, and depth vary by stakeholder — design accordingly."),
        ],
        [
          s("Exception-based escalation protects the communication cadence from false urgency. "),
          x(
            "Between scheduled communication cycles, escalation should be reserved for genuinely material developments: a pre-stated alert threshold has been crossed, a governance decision is required before the next scheduled review, or a regulatory or competitive development requires immediate awareness.",
            "Leaders who escalate every development as urgent train their stakeholders to treat all escalations as non-urgent — and risk missing the signal when genuine urgency exists. Leaders who escalate only material developments train stakeholders to respond to escalations with appropriate urgency. The quality of escalation determines the quality of escalation response.",
          ),
          s(" Reserve escalation for material developments — frequent non-urgent escalation destroys the signal value of urgent ones."),
        ],
        [
          s("Close the loop on every communication cycle — acknowledge, decide, report. "),
          x(
            "Stakeholder communications that produce no visible response — questions unanswered, decisions deferred, reports unacknowledged — signal that the communication is one-directional and the stakeholder is not an active governance participant.",
            "Closing the loop requires: acknowledging receipt and indicating when a response or decision will be provided, following up with the response or decision in the stated window, and reporting the outcome of decisions made on the basis of previous communications. The loop-close is the evidence that the governance system is working as designed — and it earns the stakeholder engagement that makes the programme's governance cadence sustainable.",
          ),
          s(" Acknowledge, decide, report — the three-step loop-close that confirms the governance system is working."),
        ],
      ],
      examples: [
        {
          title: "A financial services group — communication architecture in practice",
          body: "A financial services group's AI programme communication architecture: board quarterly briefing (2-page portfolio health summary, decision items flagged, next quarter outlook); Group Executive Committee monthly exception report (one page, only exceptions above alert threshold, decision required items); business unit leader monthly operational update (one page per business unit, AI impact on their specific metrics, upcoming changes and timeline); programme team weekly standup with AI programme director (operational issues, milestone status, resource flags). Each format was different; each audience received what they needed to perform their governance function. The CDO noted: 'We stopped having AI programme conversations with people who didn't have the right information. Now everyone has the information their role requires.'",
        },
        {
          title: "A bank — escalation discipline",
          body: "A bank's AI programme established an escalation protocol: out-of-cadence escalations to the board or Group Executive were only permitted for developments that met three criteria — material impact on programme value (>15% variance from plan), governance authority required above the AI programme committee level, and decision required within 5 business days. In 18 months, three out-of-cadence escalations were made. All three met the criteria. All three produced same-day governance decisions. The escalation discipline preserved the signal value of escalations — board members knew that if an out-of-cadence escalation arrived, it genuinely required their attention.",
        },
        {
          title: "A retailer — loop close culture",
          body: "A retailer's AI programme director implemented a loop-close standard: every stakeholder communication that contained an open question or a decision request received a response within 48 hours acknowledging receipt and stating when the response would be provided. Every decision made on the basis of a communication was reported to the originating stakeholder within 5 business days. Two business unit leaders who had previously not read the monthly operational updates began engaging actively after the loop-close standard was implemented — because responses to their questions confirmed that the communication was bi-directional and their input produced decisions.",
        },
      ],
    }),
    buildSection({
      number: "10.7",
      title: "The Annual Refresh",
      subtitle: "Resetting the strategic foundation once per year",
      take: "The annual refresh is the governance event where the AI programme's strategic foundation is reset: the alignment between the portfolio and the business strategy is assessed, the portfolio composition is adjusted for the coming year, the governance architecture is reviewed for fitness, and the programme narrative is updated to reflect a year of learning. The annual refresh is not a retrospective — it is the forward-looking foundation for the next investment cycle.",
      why: "Without an annual refresh, AI programmes accumulate strategic debt — initiatives approved for last year's strategic priorities, governance mechanisms designed for last year's risk profile, and narratives that do not reflect the current state of the programme. The annual refresh clears the strategic debt.",
      paragraphs: [
        [
          s("The annual refresh has six outputs. "),
          x(
            "Portfolio adjustment: changes to active initiative set based on performance evidence and strategic alignment update. Investment planning: resource allocation for the coming year, including new initiative entries and any major scale-up decisions. Governance review: assessment of whether the quarterly review format, gate criteria, and reporting standards remain fit for purpose. Narrative update: refresh of the three-component AI programme narrative to reflect the current programme state. Organisational capability assessment: review of the internal AI capability against the coming year's programme requirements. Risk register refresh: update of material programme risks based on the past year's experience.",
            "Six outputs, each requiring preparation before the annual refresh session. The outputs represent the full set of strategic decisions that anchor the programme for the following year.",
          ),
          s(" Six outputs, each documented with rationale — the annual refresh produces the next year's governance foundation."),
        ],
        [
          s("The annual refresh is a facilitated session, not a presentation. "),
          x(
            "Annual refresh sessions that are structured as presentations — where the AI programme team presents the year's performance and the next year's plan for board and executive approval — miss the refresh function. The refresh requires structured discussion, challenge, and decision-making — not passive reception of a plan that has been developed independently.",
            "Facilitated annual refresh: the business leader opens with the strategic context update (15 minutes); the programme team presents the evidence base — performance, capabilities, risks — without the conclusions (30 minutes); breakout groups assess each of the six output areas and present recommendations (45 minutes); plenary decides the six outputs (30 minutes). Total: 2 hours, producing a set of agreed decisions that anchor the next year.",
          ),
          s(" Facilitated discussion produces better annual refresh outputs than presentations do."),
        ],
        [
          s("Document the annual refresh decisions as the governance reference for the year. "),
          x(
            "The annual refresh decision document — portfolio composition, investment plan, governance standards, narrative, capability gaps, risk profile — is the reference document for every governance decision made in the following year. Quarterly reviews, mid-cycle update requests, and strategic alignment questions all reference it.",
            "A well-prepared annual refresh document makes subsequent governance decisions faster and more consistent. Stakeholders who challenge a quarterly decision can be directed to the annual refresh document that established the decision criteria. The document earns its preparation investment through governance efficiency in every subsequent review.",
          ),
          s(" Annual refresh decision document is the reference for every governance decision in the following year."),
        ],
      ],
      examples: [
        {
          title: "A bank — six-output annual refresh",
          body: "A bank's first annual AI refresh produced six documented outputs in a 2.5-hour session: portfolio adjustment (two initiatives stopped, three new initiatives entering assessment), investment plan (£3.4M year-2 budget with initiative-level allocation), governance review (quarterly review format revised to add the vendor market update item; gate criteria updated for two initiative types), narrative update (the three-sentence programme narrative revised to reflect year-1 evidence), organisational capability assessment (two ML engineering positions identified for hire; MLOps platform investment approved), risk register refresh (three new risks added based on year-1 experience; two previous risks retired as resolved). All six outputs were documented and distributed within 48 hours. The programme director used the document in every subsequent quarterly review as the standard reference.",
        },
        {
          title: "An insurer — facilitated session vs. presentation comparison",
          body: "An insurer ran its first two annual AI refreshes as presentations — the programme team presenting to the executive committee. Both sessions produced approval of the next year's plan with minor amendments. The third annual refresh was redesigned as a facilitated session with structured discussion. The facilitated session produced two decisions that had not appeared in the two previous presentation-based refreshes: a strategic alignment gap in the digital distribution channel (requiring a new initiative), and a governance mechanism gap (the quarterly review had drifted from decision forum to status meeting). Neither of these issues was visible in a presentation format because the programme team did not raise problems they could manage; they were visible in a facilitated discussion because the executive participants raised them from their own observations.",
        },
        {
          title: "A retailer — annual refresh document as governance reference",
          body: "A retailer's annual AI refresh decision document was used as reference material in 14 subsequent governance events over the following 12 months: 4 quarterly reviews, 3 gate decisions, 4 mid-cycle update requests (all declined as not meeting the pre-stated conditions), 2 escalations, and 1 board update. The programme director calculated that 11 of the 14 events were completed faster because a decision criterion or a policy standard in the annual refresh document resolved the question without extended discussion. The document investment — approximately 8 hours of preparation — returned an estimated 40 hours of governance time efficiency.",
        },
      ],
    }),
    buildSection({
      number: "10.8",
      title: "The Business Leader's Governance Cadence",
      subtitle: "What the business leader personally owns at each review level",
      take: "The governance cadence only works if the business leader who owns the AI programme actively participates at the quarterly and annual levels — not as an attendee but as a chair, a decision-maker, and an accountability holder. Monthly monitoring can be delegated; quarterly portfolio review and annual refresh cannot. This section specifies what the business leader personally does at each level.",
      why: "Business leaders who delegate governance create governance in name only — the structures exist but the decision authority does not reside in them. The programme drifts, and the delegation becomes the explanation for why governance failed. Governance that the business leader personally participates in is governance that works.",
      paragraphs: [
        [
          s("Monthly monitoring: delegate, receive exception reports, respond within 24 hours. "),
          x(
            "Monthly operational monitoring is executed by the programme team. The business leader receives exception reports — developments that cross alert or action thresholds — and responds to them within 24 hours. The response is either 'acknowledged, the pre-defined response is activated' or 'this is a material development that requires escalation to the quarterly review or an out-of-cadence governance event'.",
            "The 24-hour response standard signals that monitoring is genuinely connected to governance. When the programme team knows that exception reports receive same-day responses, they report exceptions promptly. When exceptions are acknowledged days later, the incentive to report early is reduced.",
          ),
          s(" Delegate monitoring; respond to exceptions within 24 hours — the response speed signals that monitoring matters."),
        ],
        [
          s("Quarterly review: chair, own the gate decisions, require the pre-read. "),
          x(
            "The business leader chairs the quarterly review — not the programme director, not the AI CoE head. Chairing the quarterly review is the single most significant leadership action for programme governance because it sets the agenda (decision-oriented), it models the behaviour (pre-read preparation, evidence-based decision-making), and it makes gate decisions with the authority to commit resources or stop investment.",
            "Gate decisions — proceed, redesign, stop — require the business leader's authority because they commit or redirect significant investment. A programme director who makes gate decisions without the business leader's explicit authority is making capital allocation decisions that belong to a more senior governance level.",
          ),
          s(" Chair the quarterly review; own the gate decisions — do not delegate either to the programme director."),
        ],
        [
          s("Annual refresh: facilitate, commission the evidence base, own the six outputs. "),
          x(
            "The annual refresh is facilitated by the business leader or by a designated facilitator under the business leader's direction. The business leader commissions the six evidence inputs at least 4 weeks before the refresh session — ensuring the evidence base is prepared and validated before the session rather than assembled during it.",
            "The business leader owns the six output decisions — they cannot be delegated after the refresh session. If the refresh session produces a portfolio composition decision, the business leader owns its implementation. If it produces an investment plan, the business leader owns its approval pathway to finance. Ownership of outputs is what makes the refresh consequential rather than ceremonial.",
          ),
          s(" Commission the evidence 4 weeks out; facilitate the session; own all six outputs — the annual refresh is the business leader's most important programme governance action."),
        ],
      ],
      examples: [
        {
          title: "A bank — 24-hour response culture",
          body: "A bank's Chief Digital Officer implemented a personal rule: every AI programme exception report received a written response within 24 hours. When the programme team received the first 24-hour response to an alert — 'Alert received, retraining sprint triggered, update me in 2 weeks on model performance' — the programme culture changed. The data science team began reporting early-stage alerts (before action threshold) for awareness, rather than waiting for action threshold to send the formal report. The advance awareness allowed the CDO to ask informed questions in the quarterly review rather than receiving surprises.",
        },
        {
          title: "An insurer — gate decision authority",
          body: "An insurer's AI programme director had been making gate decisions in quarterly reviews because the CDO was frequently absent. When the CDO returned to regular attendance, she reviewed the past year's gate decisions: all eight had been 'proceed'. She instituted a rule: gate decisions require her explicit sign-off — the quarterly review produces a recommendation; the decision is formalised in a written approval within 48 hours of the review. In the first two quarters under this rule, two gate recommendations were 'proceed' and one was 'redesign'. The 'redesign' was her decision — she had challenged the proceed recommendation based on adoption evidence in the pre-read that the programme director's recommendation had not weighted sufficiently.",
        },
        {
          title: "A retailer — evidence commissioned 4 weeks out",
          body: "A retailer's CDO issued the annual refresh evidence commission 4 weeks before the refresh session: six specific evidence requests to six specific owners, each with a submission deadline 1 week before the session. In the first year, two of six evidence packages were incomplete at the commission deadline. The CDO rescheduled the refresh by 2 weeks — citing insufficient evidence for informed decision-making. The message propagated: in subsequent years, all six evidence packages were complete by the deadline. The refresh sessions produced better decisions because they operated on complete evidence.",
        },
      ],
    }),
  ],
  quiz: [
    {
      q: "Your AI programme's quarterly governance review is structured as programme managers presenting status updates on their own initiatives. What is the primary governance problem?",
      options: [
        "Programme managers know their initiatives best — this is the correct format.",
        "Programme manager presentations are optimistic by design and prevent the evidence-based gate decisions that the quarterly review should produce.",
        "The sessions are too long with programme managers presenting.",
        "Programme managers should only attend the monthly monitoring sessions.",
      ],
      correct: 1,
      correctFeedback:
        "Right. Programme managers presenting their own status will optimise for continued momentum — they will not recommend stopping or redesigning their own initiative. Gate decisions require evidence-based assessment by decision-makers reviewing pre-read evidence, not verbal presentations from investment advocates. Re-read section 10.2.",
      wrongFeedback:
        "Programme managers who present their own status are investment advocates, not objective evidence providers. The governance function requires decision-makers reviewing objective evidence. Re-read section 10.2.",
    },
    {
      q: "A leading indicator — model accuracy — has crossed the alert threshold for two consecutive months. What is the correct response?",
      options: [
        "Wait for the quarterly review to address it.",
        "Trigger the pre-defined attention response immediately: a root cause investigation. If the action threshold is crossed, trigger the pre-defined action response.",
        "Report it to the board immediately.",
        "Reduce the alert threshold so it no longer triggers.",
      ],
      correct: 1,
      correctFeedback:
        "Right. Alert thresholds trigger pre-defined responses — not board escalation, not threshold adjustment, not deferral to the quarterly review. The pre-defined response exists precisely so the response does not require a governance event to decide. Re-read section 10.3.",
      wrongFeedback:
        "Pre-defined responses are triggered by threshold crossings — the decision is made at threshold definition, not at the time of crossing. Waiting for a quarterly review allows the leading indicator problem to develop into a lagging outcome problem. Re-read section 10.3.",
    },
    {
      kind: "categorize",
      q: "Sort each governance activity into the correct cadence level.",
      categories: ["Monthly monitoring", "Quarterly review", "Annual refresh"],
      items: [
        { text: "Model accuracy monitoring against defined alert thresholds.", category: 0 },
        { text: "Gate decisions: proceed, redesign, or stop for initiatives at phase gates.", category: 1 },
        { text: "Strategic alignment assessment: does the portfolio still serve the right business priorities?", category: 2 },
        { text: "Exception-based stakeholder communication for alert threshold crossings.", category: 0 },
        { text: "Portfolio balance review: current horizon distribution vs. targets.", category: 1 },
        { text: "Governance architecture review: are the quarterly review format and gate criteria still fit for purpose?", category: 2 },
      ],
      correctFeedback:
        "Right. Monthly monitoring is operational — detecting drift in leading indicators and triggering pre-defined responses. Quarterly review is portfolio governance — gate decisions and balance adjustments. Annual refresh is strategic — alignment, investment planning, and governance architecture review. Re-read sections 10.2, 10.3, and 10.7.",
      wrongFeedback:
        "Each cadence level has a specific function: monthly is operational detection, quarterly is portfolio governance, annual is strategic alignment. Applying quarterly governance to monthly operational issues is too slow; applying monthly monitoring frequency to strategic decisions is too frequent. Re-read sections 10.2, 10.3, and 10.7.",
    },
    {
      q: "A stakeholder proposes a mid-cycle strategic update to redirect AI investment away from supply chain toward customer experience because they attended an industry conference and found it compelling. Does this justify a mid-cycle update?",
      options: [
        "Yes — industry signals should always be incorporated promptly.",
        "No — the pre-stated conditions for mid-cycle updates require evidence of material change in the business environment, not conference insights. This is a candidate for the next annual refresh.",
        "Yes if the stakeholder is senior enough.",
        "Maybe — commission a study to assess the relevance.",
      ],
      correct: 1,
      correctFeedback:
        "Right. Conference insights are intelligence, not material business condition changes. Pre-stated conditions for mid-cycle updates exist precisely to distinguish material evidence (competitive position shift, regulatory change) from interesting ideas. This input belongs in the annual refresh evidence base. Re-read section 10.5.",
      wrongFeedback:
        "The pre-stated condition test protects the programme from ad hoc redirection. A conference insight does not constitute a material business condition change — it is intelligence that may inform the annual refresh. Re-read section 10.5.",
    },
    {
      q: "As a business leader, which review cadence should you personally chair rather than delegate to the programme director?",
      options: [
        "Monthly monitoring reviews — they require your immediate operational input.",
        "All reviews equally — governance requires consistent leadership presence.",
        "Quarterly portfolio reviews and annual refresh — monthly monitoring is delegated; you receive exception reports.",
        "Only the annual refresh — quarterly reviews are operational and can be delegated.",
      ],
      correct: 2,
      correctFeedback:
        "Right. Monthly monitoring is operationally delegated; the business leader receives exception reports and responds within 24 hours. Quarterly portfolio reviews require the business leader as chair and decision-maker for gate decisions. Annual refresh requires the business leader to commission evidence, facilitate, and own all six outputs. Re-read section 10.8.",
      wrongFeedback:
        "Monthly monitoring is operational and appropriately delegated. Quarterly and annual cadences require business leader ownership because they involve capital allocation decisions and strategic direction — not operational monitoring. Re-read section 10.8.",
    },
    {
      kind: "order",
      q: "Order the six outputs of the annual refresh from the one that sets the foundation (top) to the one that communicates the result (bottom).",
      prompt: "Drag to arrange the six annual refresh outputs in their natural production sequence.",
      items: [
        "Portfolio adjustment — which initiatives are active, deferred, or stopped for the coming year.",
        "Investment planning — resource allocation for the coming year by initiative.",
        "Governance review — whether the quarterly review format and gate criteria remain fit for purpose.",
        "Organisational capability assessment — internal AI capability against coming year requirements.",
        "Risk register refresh — updated material programme risks based on the past year.",
        "Narrative update — refresh of the three-component AI programme narrative.",
      ],
      correctFeedback:
        "Right. Portfolio adjustment and investment planning establish the foundation; governance review ensures the oversight mechanism is sound; capability and risk assessments identify what the portfolio needs to succeed; narrative update communicates the refreshed programme to stakeholders. Re-read section 10.7.",
      wrongFeedback:
        "The annual refresh outputs build on each other: portfolio and investment decisions first, governance architecture second, operational enablers third, communication last. Re-read section 10.7.",
    },
  ],
});
