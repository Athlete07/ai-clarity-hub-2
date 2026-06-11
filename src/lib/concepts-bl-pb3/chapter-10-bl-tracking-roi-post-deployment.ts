import { buildChapter, buildSection, s, x, BL_CALLOUT } from "../concepts-bl-helpers";

export const chapter10BlTrackingRoiPostDeployment = buildChapter({
  slug: "bl-tracking-roi-post-deployment",
  number: 10,
  shortTitle: "Tracking ROI Post-Deployment",
  title: "Tracking AI ROI Post-Deployment: Governance, Reporting, and Reinvestment",
  readingMinutes: 28,
  summary:
    "Post-deployment ROI tracking is where AI investments prove their worth or expose their weakness. Most AI programmes track the wrong things too late, report to the wrong audience, and fail to connect insights to reinvestment decisions. This chapter builds the tracking infrastructure, reporting cadence, and governance framework that makes post-deployment ROI a management tool rather than a compliance exercise.",
  keyTakeaway:
    "Post-deployment ROI tracking is not a measurement exercise — it is a management tool. Leaders who use ROI data to make real-time decisions on adoption, programme design, and capital reallocation get more value from AI than leaders who produce ROI reports for historical record-keeping.",
  pmCallout: BL_CALLOUT,
  sections: [
    buildSection({
      number: "10.1",
      title: "Why post-deployment tracking fails",
      subtitle: "The five structural reasons most AI ROI tracking produces data but no decisions",
      take: "Post-deployment AI ROI tracking fails for five structural reasons: tracking starts too late, the wrong metrics are tracked, reporting goes to the wrong audience, data is collected but not acted on, and the tracking cadence is mismatched to the management decision cycle. Each failure is preventable with the right design.",
      why: "Leaders who know why post-deployment tracking fails can design systems that do not fail. The failure modes are predictable — they occur in the same pattern across most AI programmes, in most industries, regardless of technical sophistication.",
      paragraphs: [
        [
          s("Failure one: tracking starts too late — after the results are already fixed. "),
          x(
            "Tracking infrastructure built after deployment means the first three to six months of data is unavailable. The learning curve period — where early interventions would have the highest impact on programme outcomes — is unmeasured. By the time tracking is running, the programme has already set its trajectory.",
            "The rule: measurement infrastructure must be live before deployment go-live, not after. This rule should be a condition of deployment approval, not a best-practice recommendation.",
          ),
          s(" Delay deployment rather than start without tracking infrastructure — three weeks of tracking delay is worth more than three months of untracked deployment."),
        ],
        [
          s("Failure two: tracking the wrong metrics. "),
          x(
            "Teams most commonly track what is easiest to measure, not what is most relevant to the ROI commitment. System usage metrics — logins, sessions, features accessed — are easy to collect and irrelevant to financial ROI. Task completion rate, quality metrics, and time-per-task are harder to collect and directly connected to the ROI claim.",
            "The metrics tracked post-deployment should be exactly the metrics committed to in the business case. Any deviation from the business case metrics requires an explicit justification and approval.",
          ),
          s(" Map each post-deployment metric directly to a business case ROI claim — remove any metric that does not connect to a specific ROI commitment."),
        ],
        [
          s("Failures three through five: audience, action, and cadence mismatch. "),
          x(
            "Third: ROI reports go to programme management teams who cannot make the decisions the data recommends. The report needs to go to the person with authority to change the deployment design, reallocate budget, or escalate to leadership. Fourth: data is collected, analysed, and presented — but no action is taken because the report format does not specify required decisions. Fifth: monthly data reviewed quarterly means three months of early warning signals go unacted on.",
            "Aligning audience, action, and cadence is a governance design decision. It requires knowing who makes which decisions, at what frequency those decisions need to be made, and what data is required to make them. This design should happen before deployment — not after the first ROI report reveals the mismatch.",
          ),
          s(" Design the ROI reporting governance — audience, action authority, and cadence — as part of the deployment approval, not as a post-deployment administrative task."),
        ],
      ],
      examples: [
        {
          title: "Insurance — tracking started two months late",
          body: "An insurer deployed AI claims triage without completed measurement infrastructure. The data pipeline was ready two months after go-live. The first ROI report was produced at month four — covering only months three and four. Months one and two, where adoption had initially stalled at 28% before a recovery intervention, were untracked. The programme team had acted on the adoption issue verbally but had no data to show the investment committee. The committee asked: 'Why did adoption stall and how did you recover it?' The answer was anecdotal. Three weeks of pipeline preparation before go-live would have answered the question with evidence.",
        },
        {
          title: "Financial services — usage vs ROI metrics",
          body: "A bank's AI analysis tool tracked: daily active users, sessions per user, features accessed, and session duration. None of these metrics appeared in the business case. The ROI commitments were: analyst report preparation time, report revision rate, and client satisfaction score. Six months into deployment, the usage metrics looked strong (high adoption, regular use) but the programme team had no data on whether the ROI commitments were being met. A dashboard rebuild was required to add the correct metrics — three months after they should have been live.",
        },
        {
          title: "Healthcare — cadence and action authority aligned",
          body: "A hospital aligned ROI report cadence to decision authority: daily operational dashboard (AI quality lead, authority: immediate deployment parameter changes), weekly adoption report (Head of Nursing, authority: change management interventions), monthly financial tracking (Operations Director, authority: budget reallocation), quarterly investment review (CEO and CFO, authority: continuation or suspension decisions). The alignment meant every report went to someone who could act on it immediately — not to someone who would forward it upward. The programme had zero unanswered anomalies at month six.",
        },
      ],
    }),
    buildSection({
      number: "10.2",
      title: "Setting up the ROI tracking infrastructure",
      subtitle: "The technical and governance components of a tracking system that works",
      take: "ROI tracking infrastructure has three components: a data pipeline that collects and processes the right signals, a dashboard that presents them in an actionable format, and a reporting workflow that ensures the right people see the right data at the right time. All three must be operational before deployment go-live.",
      why: "Each component is necessary but not sufficient alone. A data pipeline without a dashboard produces data that no one sees. A dashboard without a reporting workflow produces information that no one acts on. A reporting workflow without a data pipeline produces reports based on manual collection that are delayed, inaccurate, and not credible.",
      paragraphs: [
        [
          s("Data pipeline: connecting three source systems. "),
          x(
            "Most AI ROI tracking requires data from three sources: the AI system itself (usage, task volume, quality flags, override rates), the operational system the AI augments (task completion times, error rates, volume), and the financial system (cost lines, revenue lines, relevant GL accounts).",
            "The hardest integration is usually the financial system — Finance often requires formal data governance approval for automated access to GL account data. Initiate this approval request at the business case approval stage, not at deployment stage.",
          ),
          s(" Initiate Finance data governance approval for financial system access at business case approval stage — not at deployment stage when it will delay go-live."),
        ],
        [
          s("Dashboard: five panels for management decisions. "),
          x(
            "Panel one: financial progress (actuals vs target for each benefit category). Panel two: adoption and usage (active users vs eligible, task volume, segments). Panel three: quality (override rate, user satisfaction, error rate). Panel four: cost (actual vs budgeted TCO, cost per AI-assisted task). Panel five: actions required (named decisions, owners, due dates).",
            "The actions panel is the element most frequently omitted and most important for management value. A dashboard that shows what is happening but not what to do with the information is a reporting tool. A dashboard with an actions panel is a management tool.",
          ),
          s(" Build the actions panel before any other dashboard panel — it defines what management decisions the dashboard is designed to support."),
        ],
        [
          s("Reporting workflow: from data to decision. "),
          x(
            "Define for each report: who receives it, at what frequency, in what format, and what decision authority they have. Document the escalation path: if a leading indicator crosses a threshold, who receives an alert, within what timeframe, and with what decision authority?",
            "The reporting workflow documentation should be a single page — a matrix of: report, frequency, recipient, decision authority, and escalation trigger. This matrix prevents the most common tracking failure: data collected, dashboard built, report sent — and no one makes a decision.",
          ),
          s(" Produce a one-page reporting matrix before go-live — row per report, columns for frequency, recipient, decision authority, and escalation trigger."),
        ],
      ],
      examples: [
        {
          title: "Manufacturing — Finance data governance initiated early",
          body: "A manufacturer initiated Finance data governance approval for automated GL access at the business case approval stage — four months before deployment. The approval process took six weeks. By deployment go-live, automated financial data extraction was live and validated. A comparable programme at a peer company initiated the approval two weeks before go-live. The approval took six weeks — which meant the financial tracking was absent for the first six weeks of the ROI measurement period. The early initiation was a single calendar entry; the delay was six weeks of missing financial data.",
        },
        {
          title: "Retailer — actions panel designed first",
          body: "A retailer's AI inventory tool dashboard design started with the actions panel: three decision types were identified — (1) adoption below trigger: Head of Merchandising decision, (2) cost overrun: COO decision, (3) quality below threshold: IT Director decision. The rest of the dashboard was designed to support these three decision types. The resulting dashboard had 40% fewer metrics than the original specification — and every metric on it was directly connected to one of the three decision types. The COO said: 'First AI dashboard I've seen that knows what it's for.'",
        },
        {
          title: "Healthcare — reporting matrix preventing drift",
          body: "A hospital's AI surgical scheduling one-page reporting matrix: Daily (quality lead, AI quality alerts, authority: immediate parameter change), Weekly (Head of Scheduling, adoption report, authority: change management action), Monthly (COO, financial tracking, authority: budget reallocation), Quarterly (CFO, investment review, authority: continuation decision). At month four, an adoption alert at the weekly level triggered a change management action before the monthly financial report would have shown the impact. The alert was acted on eight weeks before it would have appeared in financial data.",
        },
      ],
    }),
    buildSection({
      number: "10.3",
      title: "Leading indicators to watch weekly",
      subtitle: "The five leading indicators that predict ROI outcomes three months before financial metrics move",
      take: "Five leading indicators predict AI ROI outcomes weeks or months before financial metrics reflect them: adoption rate, override rate, task completion quality, capacity redeployment progress, and user feedback sentiment. Monitoring these weekly gives leaders the time to intervene before financial outcomes are locked.",
      why: "Financial ROI metrics are lagging — they show what happened, not what is happening. Weekly leading indicators show what is happening now and provide the time to intervene. Leaders who only review financial ROI are always reacting to history; leaders who review leading indicators are managing the present.",
      paragraphs: [
        [
          s("Adoption rate: the first signal of programme health. "),
          x(
            "Active users as a percentage of eligible users, tracked weekly, provides the earliest signal of programme health. An adoption rate below 50% at week eight is a programme alert regardless of what financial metrics show — because financial benefit is a function of adoption multiplied by per-user value.",
            "Track adoption at three granularities: overall rate, segment rate (by role, team, or geography), and trend (improving, stable, declining). The segment view and trend are more informative than the overall rate — they identify where to intervene and whether the situation is improving.",
          ),
          s(" Track adoption rate weekly at three granularities: overall, segment, and trend direction."),
        ],
        [
          s("Override rate: the quality signal. "),
          x(
            "Override rate — the percentage of AI outputs that users reject or correct — is the most sensitive indicator of AI quality. A stable or declining override rate signals improving user trust and AI performance. A rising override rate signals quality deterioration before any financial metric or formal quality review captures it.",
            "Override rate also segments: if override rate is high in one team or transaction type but low in others, the signal is specific to a subset of the deployment. Investigating the high-override segment often reveals either a data distribution issue, a model limitation, or a user training gap — all of which are actionable before they affect financial outcomes.",
          ),
          s(" Set an override rate trigger threshold before deployment — above this threshold, the programme team must investigate and report findings within five working days."),
        ],
        [
          s("Task completion quality, capacity redeployment, and user sentiment. "),
          x(
            "Task completion quality: the proportion of AI-assisted tasks completed without rework or escalation. This is a weekly proxy for productivity ROI — if quality is high, productivity benefit is accruing; if quality is low, productivity is being consumed by correction overhead. Capacity redeployment: are the freed hours being actively reassigned? Monthly confirmation from team managers prevents phantom productivity. User feedback sentiment: a brief weekly pulse (one or two questions) to active users provides qualitative early warning of adoption friction.",
            "The five indicators together give a comprehensive weekly picture that financial metrics cannot. Think of them as the instrument cluster on the dashboard — they tell you what is happening now, so you can navigate rather than just review.",
          ),
          s(" Build a five-indicator weekly review that takes no more than 15 minutes and provides enough information to make or defer a programme intervention decision."),
        ],
      ],
      examples: [
        {
          title: "Insurance — override rate trigger preventing quality failure",
          body: "An insurer's AI claims assessment tool had a pre-set override rate trigger of 20%. In week five, override rate reached 22% — triggering an investigation. The investigation found that a data feed from a third-party property valuation service had changed its output format, causing 18% of property valuations to be incorrectly parsed. The issue was resolved in week seven. Post-fix override rate returned to 11%. Without the trigger, the quality issue would have been detected at the month-three financial review — as a cost of errors in the claims that the AI had mis-assessed.",
        },
        {
          title: "Financial services — adoption segment intervention",
          body: "A bank's AI regulatory reporting tool showed 74% overall adoption at week eight but segment analysis revealed the fixed income team was at 31%. Investigation: the fixed income reporting format had unusual field mappings not covered in the initial training. Targeted training and configuration update was deployed in week ten. Fixed income adoption reached 72% by week fourteen. Without segment tracking, the 74% overall rate would have been presented as a programme health indicator — masking a significant value gap in one of the highest-volume reporting categories.",
        },
        {
          title: "Retailer — weekly sentiment pulse",
          body: "A retailer's AI merchandising tool deployed a two-question weekly pulse: 'Did AI help you make better decisions this week?' (1–5 scale) and 'What is your biggest friction point?' (open text, three responses capped). In week four, the friction responses consistently mentioned difficulty connecting AI recommendations to the ERP for purchase orders. The integration step took 4–6 minutes per transaction — eliminating 60% of the AI time saving. A workflow automation to integrate the two steps directly was completed in week seven. Weekly sentiment identified and fixed a 60% productivity leak before any financial metric could have detected it.",
        },
      ],
    }),
    buildSection({
      number: "10.4",
      title: "Monthly ROI review process",
      subtitle: "The structured monthly review that converts data into decisions",
      take: "A monthly ROI review is a management process, not a reporting exercise. It has a defined agenda, a required output (a decision or a documented non-decision), and attendees with decision authority. Monthly reviews that produce only information — without decisions — are expensive data-sharing sessions that do not improve AI programme outcomes.",
      why: "The monthly review is the primary management cadence at which leading indicator signals are converted into decisions. Without a structured process, the monthly review degrades into a status update meeting where everyone learns the same thing and no one makes a commitment.",
      paragraphs: [
        [
          s("The meeting agenda has four items, in order. "),
          x(
            "Item one: red/amber/green status of each leading indicator against threshold. Five minutes maximum. Item two: financial progress against target, hard benefits and soft benefits separately. Ten minutes. Item three: open actions from previous meeting — completed, in progress, or escalated. Five minutes. Item four: decisions required this month — proposed by the programme team, discussed, and assigned with owner and date. Fifteen minutes.",
            "Total meeting time: 35 minutes. Any meeting that takes longer has agenda items that belong in a working session, not a management review. The monthly review is a decision cadence, not a problem-solving session.",
          ),
          s(" Set a 35-minute maximum for the monthly ROI review — if topics require more time, they go to a separate working session, not to meeting extension."),
        ],
        [
          s("Every meeting must produce a decision or a documented non-decision. "),
          x(
            "At the end of every monthly review, the chair asks: 'What did we decide?' If the answer is 'nothing' — because all leading indicators are green and financial progress is on track — that is a valid non-decision. It should be documented: 'November review: all indicators within threshold, no programme changes required.'",
            "If leading indicators are amber or red and no decision was made, the meeting has failed. An amber indicator without a decision creates a monitoring loop without a management loop. The chair must force a decision: either a specific programme change or an explicit risk acceptance with stated conditions for escalation.",
          ),
          s(" End every monthly review with a decisions log entry — either the decision made or 'no changes required — all indicators within threshold.'"),
        ],
        [
          s("Connect monthly reviews to the quarterly financial report and annual investment decision. "),
          x(
            "Monthly reviews provide the data for the quarterly financial report to the investment committee. The quarterly report should not require new data collection — it should aggregate the three monthly reviews into a financial narrative.",
            "The annual investment decision (continue, scale, or exit) should be built from four quarterly reports. If monthly and quarterly tracking are robust, the annual decision is the natural conclusion of twelve months of evidence — not a reactive response to a surprise at year-end.",
          ),
          s(" Build the quarterly financial report directly from monthly review outputs — if quarterly requires new data collection, the monthly reviews are not capturing the right things."),
        ],
      ],
      examples: [
        {
          title: "Manufacturing — 35-minute monthly review",
          body: "A manufacturer's AI quality inspection monthly review ran to 90 minutes for the first three months because problem-solving discussions expanded into the meeting. The programme manager enforced the 35-minute agenda from month four: red/amber/green (5 min), financial progress (10 min), open actions (5 min), decisions (15 min). Problem-solving was explicitly moved to separate sessions. Meeting quality improved — decisions increased from 0.8 per meeting to 2.4 per meeting. The constraint drove focus; the focus drove action.",
        },
        {
          title: "Financial services — documented non-decision",
          body: "A bank's AI compliance tool monthly review in month seven had no agenda items requiring decisions — all indicators were green and financial progress was 4% above plan. The chair documented: 'Monthly review, Month 7: All five leading indicators within threshold. Financial progress 4% above target. No programme changes required. Next scheduled review: Month 8.' The documented non-decision was included in the quarterly report as evidence that the programme was running without governance gaps — not just that it was performing well.",
        },
        {
          title: "Healthcare — monthly into quarterly without new collection",
          body: "A hospital's quarterly AI scheduling report was built directly from three monthly review summaries — no new data collection. The quarterly narrative synthesised three months of decisions: (Q1, months 1–3): 'Adoption interventions in two wards produced measurable improvement. Financial progress tracking to target.' (Q2, months 4–6): 'Override rate trigger event investigated and resolved. Financial progress 8% above target for the period.' The quarterly report to the investment committee was completed in two hours. In the previous AI programme, quarterly reports required three days of retrospective data collection.",
        },
      ],
    }),
    buildSection({
      number: "10.5",
      title: "When to declare success or failure",
      subtitle: "The governance criteria that prevent both premature celebration and indefinite tolerance of underperformance",
      take: "Success and failure declarations for AI investments require pre-defined criteria, not retrospective judgment. Business leaders who pre-define success and failure thresholds at deployment approval avoid two common failures: premature success declarations that trigger reinvestment before value is sustained, and indefinite tolerance of underperformance that prevents capital reallocation to higher-return opportunities.",
      why: "Without pre-defined criteria, success and failure judgments become political — advocates of the programme declare success and critics declare failure based on the same data. Criteria agreed at approval remove the political dimension and make performance assessments evidence-based.",
      paragraphs: [
        [
          s("Define three performance tiers before deployment. "),
          x(
            "Tier 1 (success): all primary metrics at or above target for two consecutive review periods. Tier 2 (on track): primary metrics within 15% of target, trend improving. Tier 3 (under review): primary metrics more than 15% below target, or declining trend for two consecutive periods.",
            "Tier 3 triggers a formal programme review — not necessarily termination, but a structured assessment of: why are targets being missed, what corrective actions are available, and what is the revised probability of achieving the investment target?",
          ),
          s(" Publish the three performance tiers at deployment approval — so all stakeholders know before they see the first results what performance level triggers what governance response."),
        ],
        [
          s("Programme suspension criteria: the conditions under which you stop spending. "),
          x(
            "Define the conditions that would trigger a programme suspension (pause and review) before additional investment. Examples: adoption below 40% at month twelve despite two intervention cycles; primary financial metric below 50% of target at month twelve; integration failure affecting more than 30% of intended transactions.",
            "Suspension is not failure — it is a governance response to underperformance that protects the remaining investment. A suspension that recovers and produces ROI is better governance than continuing to spend on a failing programme and writing it off after the full investment is sunk.",
          ),
          s(" Define the suspension triggers before deployment — and give the programme review authority to the CFO or the investment committee, not the programme sponsor."),
        ],
        [
          s("Premature success: the underappreciated failure mode. "),
          x(
            "Declaring AI success at month six — before the compounding phase, before adoption has stabilised, and before the full benefit trajectory is visible — triggers premature reinvestment that overlooks the second-phase adoption and quality risks.",
            "Success criteria should require: two consecutive periods at or above target (preventing a single good month triggering a success declaration), and a documented assessment that the benefits are sustainable (not driven by a one-time event or a peak in the adoption cycle).",
          ),
          s(" Require two consecutive on-target periods before declaring success — and require a sustainability assessment alongside the success declaration."),
        ],
      ],
      examples: [
        {
          title: "Insurance — three-tier criteria preventing political dispute",
          body: "An insurer published three-tier performance criteria at deployment approval for their AI underwriting tool. At month nine, the underwriting team claimed 'success' based on strong adoption metrics. The investment committee applied the pre-defined criteria: primary financial metric (decision cycle time reduction) was at 61% of target — Tier 2 (on track), not Tier 1 (success). The premature success claim was declined. Three months later, decision cycle time reached the target and was maintained for two consecutive periods. Tier 1 was declared. The pre-defined criteria had prevented a premature success that would have triggered reinvestment before the programme was stable.",
        },
        {
          title: "Financial services — suspension trigger acted on",
          body: "A bank's AI document analysis tool reached month twelve with adoption at 36% despite two intervention cycles — below the 40% suspension trigger. The CFO invoked the trigger and commissioned a formal programme review. The review found: the tool worked well for standard commercial documents but performed poorly on the complex international documents that comprised 60% of the target population. The programme was suspended, redesigned with a narrower scope (standard commercial documents only), and relaunched at month sixteen. The narrowed scope reached 78% adoption and delivered 65% of original ROI. Suspension had saved £340K in continued spending on the out-of-scope application.",
        },
        {
          title: "Healthcare — sustainability assessment",
          body: "A hospital's AI bed management tool met both consecutive-period success criteria at month twelve. The required sustainability assessment reviewed: whether the performance was driven by the seasonal low-occupancy period (answer: no — equivalent period data showed 12% further improvement), whether a concurrent staffing change had contributed (answer: one ward's staffing change contributed approximately 3 percentage points, AI contributed approximately 14 percentage points), and whether adoption was stable or still growing (answer: stable at 84%). Sustainability confirmed. Success declared. Reinvestment approved. The sustainability assessment took two weeks and prevented a success declaration that would have been partially disputed.",
        },
      ],
    }),
    buildSection({
      number: "10.6",
      title: "Communicating ROI results to leadership",
      subtitle: "Structuring ROI communications that build programme confidence and earn reinvestment decisions",
      take: "ROI communications to leadership serve a dual purpose: accountability (reporting against commitments) and advocacy (building confidence for reinvestment). Both purposes require different content and tone, but the same discipline: specific metrics, honest attribution, and clear implications for future investment.",
      why: "Leadership communications that are only accountability reports lose the advocacy dimension — they become compliance exercises. Communications that are only advocacy become puffery. The discipline is to separate the accountability content (here is what happened vs what was committed) from the advocacy content (here is why the next investment is justified).",
      paragraphs: [
        [
          s("Structure communications in three sections: performance vs commitment, explanation of gaps, and implications. "),
          x(
            "Performance vs commitment: a table showing each committed metric, the target, and the actual. No narrative — just the data. Explanation of gaps: for any metric below target, a one-paragraph explanation of the gap (not an excuse), what was done about it, and the current status. Implications: what does the performance data mean for the next phase of investment? Explicitly recommend continue, scale, adjust, or suspend.",
            "The three-section structure separates evidence (section one) from analysis (section two) from recommendation (section three). Leadership receives all three in sequence — they can evaluate the evidence independently before reading the recommendation.",
          ),
          s(" Structure every leadership ROI communication in three sections: performance data, gap explanation, and explicit recommendation — never mix them."),
        ],
        [
          s("Communicate attribution quality alongside performance data. "),
          x(
            "Leadership receives AI ROI data without knowing how reliable the attribution is. A 28% improvement with high-confidence attribution (controlled experiment) is very different from a 28% improvement with indicative attribution (proxy metrics only). Without the label, both communicate the same confidence — which is incorrect.",
            "A simple attribution quality label: 'High confidence (RCT design)', 'Medium confidence (DiD model)', or 'Indicative (proxy metrics)' alongside each major metric gives leadership the context to weight the data appropriately. It also demonstrates programme management maturity.",
          ),
          s(" Include an attribution quality label for each major metric in every leadership ROI communication."),
        ],
        [
          s("Honest gap explanation builds more confidence than optimistic spin. "),
          x(
            "Leadership who receive an honest explanation of a performance gap — what caused it, what was done about it, and what the current status is — have more confidence in the programme than leadership who receive an explanation that minimises or reframes the gap.",
            "The counterintuitive insight: being the first to acknowledge a problem, with an explanation and a response, is a more effective leadership communication than defending performance against a challenge raised by someone else. Self-awareness about programme problems signals programme management maturity.",
          ),
          s(" Acknowledge performance gaps explicitly in leadership communications — and lead with the explanation and response, not with the metrics that performed well."),
        ],
      ],
      examples: [
        {
          title: "Financial services — three-section report",
          body: "A bank's six-month AI compliance tool report: Section 1 table showed five metrics — compliance review time (target -25%, actual -18%), detection accuracy (target 94%, actual 96%), user adoption (target 80%, actual 73%), cost per review (target -30%, actual -22%), compliance incident rate (target -40%, actual -29%). Section 2: compliance review time and adoption below target — explanation and three-month recovery plan stated. Section 3: recommend continuation of Phase 2 at 70% of planned pace, accelerating to full pace when adoption reaches 80%. The CFO said: 'This is how post-deployment reporting should work. Evidence, then analysis, then recommendation.'",
        },
        {
          title: "Manufacturing — attribution label in report",
          body: "A manufacturer's AI quality inspection 12-month report labelled each metric: 'Defect escape rate: -24% (Medium confidence — DiD model, parallel process change noted)', 'Inspection time: -38% (High confidence — controlled deployment to two lines vs two control lines)', 'Rework cost: -31% (Indicative — multiple concurrent improvements, full attribution not possible)'. The board member who had previously challenged AI ROI data commented: 'The confidence labels make this report much more useful. I know which numbers to rely on and which are approximate.' Labels created, not undermined, confidence.",
        },
        {
          title: "Healthcare — gap acknowledgement earning reinvestment",
          body: "A hospital's 12-month AI diagnostic support report led with: 'Adoption in the emergency medicine department is 41% — 19 percentage points below our 60% target. We identified this at month five, investigated, and found that the AI interface did not integrate with the emergency department's specific workflow. An interface redesign was completed in month eight. Adoption in ED is now trending at 4% per month and we project reaching 65% by month 15.' The board noted: 'This team identified a significant problem, fixed it, and is reporting progress honestly. That is good programme management.' The reinvestment was approved.",
        },
      ],
    }),
    buildSection({
      number: "10.7",
      title: "Iterating investment based on ROI data",
      subtitle: "Using post-deployment ROI data to make capital reallocation and programme design decisions",
      take: "Post-deployment ROI data is a capital allocation input, not just a historical record. Leaders who use it to reallocate investment within the AI portfolio — scaling what works, adjusting what is underperforming, and exiting what is not improving — compound the returns from their AI programme over time.",
      why: "Static AI investment portfolios — approved once and left unchanged — systematically underperform dynamic portfolios that reallocate based on evidence. The reallocation decision is one of the highest-return actions available to a business leader with an active AI programme.",
      paragraphs: [
        [
          s("Two reallocation decisions: within programme and across portfolio. "),
          x(
            "Within programme: use ROI data to identify the highest-performing use cases within a deployment and direct additional investment toward them. An AI tool deployed for three use cases where one is generating 80% of the value may benefit from focused capacity on the high-value use case rather than equal distribution across three.",
            "Across portfolio: use comparative ROI data from multiple AI deployments to reallocate capital from lower-performing investments to higher-performing ones. This decision requires consistent metrics across all investments — the portfolio summary format described in Chapter 8.",
          ),
          s(" Review within-programme and across-portfolio reallocation opportunities at every quarterly investment review — not only at annual cycle."),
        ],
        [
          s("Scale signals: when ROI data justifies expanded investment. "),
          x(
            "Scale signals from ROI data: two consecutive quarters at or above target, adoption trend stable or growing, quality metrics improving, and a clearly identified expansion scope with additional ROI potential. All four signals should be present before recommending scale investment.",
            "The most common premature scale signal: strong early adoption metrics without financial metric confirmation. Adoption is a leading indicator — it predicts financial outcome but does not confirm it. Financial metric confirmation should be present for at least one full quarter before scale investment is proposed.",
          ),
          s(" Require financial metric confirmation for at least one full quarter before proposing scale investment based on ROI data."),
        ],
        [
          s("Exit signals: when ROI data justifies programme termination. "),
          x(
            "Exit signals: primary financial metric below 50% of target at month twelve despite two programme corrections; adoption below 40% with declining trend despite interventions; total cost of ownership significantly exceeding business case projections with no credible path to budget.",
            "Exit is not failure — it is an evidence-based capital allocation decision that frees resources for higher-return opportunities. Leaders who exit failing AI investments are better portfolio managers than leaders who continue poor investments to avoid admitting a poor decision.",
          ),
          s(" Reframe AI programme exits as capital allocation decisions, not failures — document the learning and apply it to the next investment."),
        ],
      ],
      examples: [
        {
          title: "Financial services — within-programme reallocation",
          body: "A bank's AI customer analytics tool covered three use cases: customer churn prediction (ROI: 180% of target), cross-sell propensity scoring (ROI: 95% of target), and product recommendation (ROI: 38% of target). At the six-month review, the programme team recommended reallocating the data science resource from product recommendation (weakest performer) to churn prediction (strongest performer, with identified expansion scope in additional customer segments). Reallocation was approved. Twelve-month portfolio ROI improved 34% over the baseline trajectory.",
        },
        {
          title: "Retailer — premature scale signal deferred",
          body: "A retailer's AI personalisation tool showed strong adoption (84%) and positive leading indicators at month four. The technology team recommended scaling to additional digital channels. The investment committee applied the scale criteria: two consecutive quarters at financial metric target required. One quarter of data was available. Scale investment was deferred to month seven. When two quarters of financial data confirmed the ROI, scale investment was approved. The two-month deferral avoided scaling a programme that had later experienced a three-week quality degradation event that would have been more costly at expanded scale.",
        },
        {
          title: "Insurance — exit as capital decision",
          body: "An insurer's AI document classification tool reached month fourteen with adoption at 33% and primary financial metric at 44% of target despite two programme corrections. The investment committee applied the exit criteria and approved programme termination. The programme sponsor's exit report documented: learning (document classification AI requires higher-quality training data than the company currently maintained), next step (investment in training data quality before attempting reclassification AI again), and capital freed (£280K annual operating cost returned to portfolio). The learning became the specification for the successor investment eighteen months later — which performed at 134% of its financial target.",
        },
      ],
    }),
    buildSection({
      number: "10.8",
      title: "BL decision lens: ROI governance cadence",
      subtitle: "The governance commitments every business leader must make before AI deployment begins",
      take: "ROI governance is not a post-deployment administrative task — it is a set of leadership commitments made before deployment that determine whether the organisation captures the value it invests in. Business leaders who make these commitments publicly, specifically, and before deployment are more likely to lead programmes that deliver their financial targets.",
      why: "The governance commitments in this section are acts of leadership accountability, not just process requirements. When a business leader publicly commits to a specific review cadence, specific success criteria, and a specific suspension trigger, they create accountability for themselves and for the programme team that delivers outcome focus.",
      paragraphs: [
        [
          s("Commitment one: measurement infrastructure live before deployment. "),
          x(
            "Every business leader responsible for an AI deployment must confirm, in writing, that measurement infrastructure will be live before deployment go-live. This is the single commitment that most prevents the most common failure mode: tracking that starts too late to be useful.",
            "If the technology team says measurement infrastructure cannot be ready before go-live, the business leader has three options: delay deployment, reduce deployment scope, or accept the measurement gap and document the risk. Accepting the gap without documenting it is not an option.",
          ),
          s(" Sign off explicitly on the measurement infrastructure live date — if it is after go-live, document the measurement gap as a programme risk accepted by the business leader."),
        ],
        [
          s("Commitment two: attend the monthly ROI review for the first twelve months. "),
          x(
            "Business leader attendance at the monthly ROI review for the first twelve months is the governance signal that programme performance is being managed at leadership level. Delegating all monthly reviews to the programme team removes the accountability link between investment approval and delivery management.",
            "The business leader does not need to run the monthly review — they need to attend, make decisions when decisions are required, and be available to escalate when leading indicators trigger alerts. Their presence is the accountability mechanism that prevents the review from becoming a reporting exercise.",
          ),
          s(" Commit to attending the monthly ROI review for the first twelve months — and designate a specific substitute (with decision authority) when attendance is not possible."),
        ],
        [
          s("Commitment three: act on the suspension trigger if it fires. "),
          x(
            "The suspension trigger — defined before deployment — is only valuable if the business leader commits to acting on it. A suspension trigger that fires and is overridden without documented justification creates a precedent that the trigger is advisory, not binding.",
            "Committing to act on the suspension trigger also changes how the programme team manages the deployment: they know that performance below the trigger will result in a formal review, which creates an incentive to intervene early to prevent the trigger from firing.",
          ),
          s(" Commit publicly to acting on the suspension trigger — and document the decision when it fires, whether you suspend or override with a stated justification."),
        ],
      ],
      examples: [
        {
          title: "Financial services — measurement infrastructure delay documented",
          body: "A bank's business leader confirmed measurement infrastructure would be live at deployment. A technical integration delay pushed the infrastructure live date to two weeks post-deployment. The business leader documented: 'Measurement infrastructure will be live two weeks post-deployment. Weeks 1–2 data gap accepted as a programme risk. Baseline will be established from week three. The two-week gap will not affect the primary ROI claim because the benefit ramp does not begin until week four.' The documented risk acceptance was included in the deployment approval record. Finance noted no objection — the gap was acknowledged, not hidden.",
        },
        {
          title: "Healthcare — twelve-month review commitment",
          body: "A hospital's CFO committed to attending the monthly ROI review for the AI surgical scheduling tool for twelve months. At month six, the monthly review detected an adoption gap that the programme team had decided not to escalate because they had a mitigation plan. The CFO's attendance surfaced the issue — she asked about the gap and the plan was presented. She accelerated the mitigation timeline and committed an additional £15K in change management resources. The gap was closed three months earlier than the programme team's plan. CFO attendance at the monthly review had recovered approximately £180K of ROI that would have been delayed.",
        },
        {
          title: "Retailer — suspension trigger acted on",
          body: "A retailer's AI replenishment tool reached month ten with adoption at 38% despite two intervention cycles — the pre-defined suspension trigger was 40% at month twelve. The business leader acted at month ten (two months early): 'We are approaching the suspension trigger threshold. I am commissioning a programme review now, while we still have time to recover before month twelve, rather than waiting for the trigger to fire.' The review identified an ERP integration issue. Fixed by month twelve, adoption reached 71%. Early trigger-awareness produced by the business leader's commitment prevented a month-twelve suspension.",
        },
      ],
    }),
  ],
  quiz: [
    {
      q: "Post-deployment AI ROI tracking most often fails because:",
      options: [
        "AI tools are too complex to measure accurately.",
        "Finance refuses to provide data access.",
        "Tracking starts too late, measures the wrong metrics, reports to audiences without decision authority, produces data without action, and runs at the wrong cadence.",
        "ROI tracking is not a standard governance requirement.",
      ],
      correct: 2,
      correctFeedback:
        "Correct. Five structural failure modes account for most post-deployment tracking failures. All five are preventable with pre-deployment design. Re-read section 10.1.",
      wrongFeedback:
        "The five failure modes are structural and preventable. Re-read section 10.1.",
    },
    {
      q: "An AI tool's weekly override rate increases from 11% to 24% over two weeks. What is the most appropriate immediate response?",
      options: [
        "Wait for the monthly financial report to confirm whether the change has financial impact.",
        "Treat it as normal variation and continue monitoring.",
        "Investigate immediately — a rising override rate is a leading indicator of quality degradation before financial metrics move.",
        "Increase the trigger threshold to 30% to avoid false alarms.",
      ],
      correct: 2,
      correctFeedback:
        "Right. A rising override rate is an early warning signal that precedes financial metric movement by weeks. Immediate investigation is the correct response. Re-read section 10.3.",
      wrongFeedback:
        "Override rate is a leading indicator requiring immediate action. Re-read section 10.3.",
    },
    {
      kind: "order",
      q: "Order the monthly ROI review agenda in the correct sequence.",
      prompt: "Drag to arrange first agenda item (top) to last (bottom).",
      items: [
        "Red/amber/green status of each leading indicator against threshold (5 minutes).",
        "Financial progress against target, hard and soft benefits separately (10 minutes).",
        "Open actions from previous meeting — completed, in progress, or escalated (5 minutes).",
        "Decisions required this month — proposed, discussed, and assigned with owner and date (15 minutes).",
      ],
      correctFeedback:
        "Correct sequence. Indicators first for rapid status assessment, then financial progress, then action accountability, then new decisions. Total: 35 minutes maximum. Re-read section 10.4.",
      wrongFeedback:
        "The monthly review agenda sequence maximises decision quality in minimum time. Re-read section 10.4.",
    },
    {
      kind: "categorize",
      q: "Sort each programme scenario into the appropriate governance response.",
      categories: ["Declare success (scale investment)", "Under review (corrective action)", "Suspension trigger (formal review)"],
      items: [
        { text: "Primary metrics at 105% of target for two consecutive quarters, adoption stable.", category: 0 },
        { text: "Primary metric at 72% of target at month 12, trend improving, one intervention applied.", category: 1 },
        { text: "Adoption at 34% at month 12 despite two intervention cycles.", category: 2 },
        { text: "Primary metric 18% below target, declining trend for two periods.", category: 2 },
        { text: "Financial metric slightly above target, one leading indicator amber.", category: 1 },
        { text: "All five leading indicators green, financial progress 12% above target for two quarters.", category: 0 },
      ],
      correctFeedback:
        "Right. Success requires two consecutive on-target periods. Under review is triggered by gaps with improving trend. Suspension is triggered by persistent underperformance despite interventions. Re-read section 10.5.",
      wrongFeedback:
        "Pre-defined performance tiers prevent political success/failure declarations. Re-read section 10.5.",
    },
    {
      q: "An AI programme has been generating 180% of its ROI target for two consecutive quarters. The programme team recommends scaling to additional use cases. What additional evidence is required before the scale investment is approved?",
      options: [
        "No additional evidence — two quarters of outperformance is sufficient.",
        "A new full business case starting from zero.",
        "Confirmation that adoption trend is stable or growing and a clearly identified expansion scope with additional ROI potential.",
        "External benchmarking data on comparable scale deployments.",
      ],
      correct: 2,
      correctFeedback:
        "Correct. Scale signals require: two consecutive quarters at financial target (confirmed), stable or growing adoption, quality metrics improving, and a clearly identified expansion scope with ROI potential. All four criteria. Re-read section 10.7.",
      wrongFeedback:
        "Scale investment requires all four signals, not financial performance alone. Re-read section 10.7.",
    },
    {
      kind: "order",
      q: "Order the three business leader governance commitments for post-deployment AI ROI tracking.",
      prompt: "Drag to arrange first commitment (top) to last (bottom).",
      items: [
        "Confirm measurement infrastructure will be live before deployment go-live — document any gap as an accepted programme risk.",
        "Commit to attending the monthly ROI review for the first twelve months (or designate a named substitute with decision authority).",
        "Commit to acting on the suspension trigger if it fires — document the decision, whether suspend or override with justification.",
      ],
      correctFeedback:
        "Correct. Infrastructure before go-live establishes the measurement foundation. Monthly attendance maintains accountability. Suspension commitment creates real governance. Re-read section 10.8.",
      wrongFeedback:
        "The three commitments are a leadership accountability sequence. Re-read section 10.8.",
    },
  ],
});
