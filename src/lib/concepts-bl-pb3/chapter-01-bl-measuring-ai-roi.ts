import { buildChapter, buildSection, s, x, BL_CALLOUT, sectionWithDiagram } from "../concepts-bl-helpers";

export const chapter01BlMeasuringAiRoi = buildChapter({
  slug: "bl-measuring-ai-roi",
  number: 1,
  shortTitle: "Measuring AI ROI",
  title: "Measuring AI ROI: The Business Leader's Framework",
  readingMinutes: 30,
  summary:
    "Most AI investments fail the ROI test not because they deliver no value, but because business leaders never defined how they would measure it. This chapter builds the measurement framework before deployment — so you can prove, defend, and improve the return on every AI dollar.",
  keyTakeaway:
    "AI ROI is measurable, but only if you define the measurement architecture before you deploy. Leaders who build the framework upfront close the loop between AI spend and business outcomes; leaders who improvise after the fact struggle to justify the next investment.",
  pmCallout: BL_CALLOUT,
  sections: [
    buildSection({
      number: "1.1",
      title: "Why traditional ROI models break for AI",
      subtitle: "The three structural differences that make standard payback calculations misleading",
      take: "Traditional ROI models assume a one-time cost and a predictable, linear benefit stream. AI investments have probabilistic outcomes, capability that compounds with data, and value that spans multiple functions — making the standard payback formula systematically understate real returns and misprice risk.",
      why: "Business leaders who apply standard capital project ROI to AI either reject good investments because the model looks poor, or approve poor ones because someone gamed the assumptions. Understanding the structural differences lets you build a model that actually predicts outcomes.",
      paragraphs: [
        [
          s("Standard ROI assumes you know the benefit before you invest. "),
          x(
            "AI projects have a discovery phase where initial deployment reveals the actual use cases, adoption levels, and process changes needed to realise value. The benefit is not known at approval — it is learned post-launch.",
            "Locking in a specific dollar figure at the business case stage invites sandbagging or fantasy. Ranges with confidence intervals are more honest and more defensible when you report back to the board.",
          ),
          s(" Require scenario ranges — low, base, high — rather than a single benefit number at approval."),
        ],
        [
          s("Standard ROI treats cost as a one-time outlay. "),
          x(
            "AI projects have layered costs: model licensing, integration engineering, change management, data preparation, ongoing retraining, and human oversight. Many of these recur or grow with usage. A model that counts only the initial software contract consistently undercounts true cost by 40–70%.",
            "The gap between 'AI vendor cost' and 'total cost of AI ownership' is where business cases fall apart post-deployment. Build the full cost inventory in Chapter 2 before signing the contract.",
          ),
          s(" Insist on total cost of ownership, not just licensing, before approving any AI investment."),
        ],
        [
          s("Standard ROI ignores compounding and capability spillover. "),
          x(
            "An AI system that improves with usage data, or whose insights are applied across adjacent processes, creates returns that accelerate beyond the original scope. A customer service AI that reduces handle time also generates training data that improves routing, which improves resolution rate, which improves NPS. None of these second-order effects appear in a standard payback model.",
            "You do not need to model every second-order effect — but you should acknowledge them as upside scenarios that your conservative base case excludes.",
          ),
          s(" Document compounding potential as a named upside scenario, not as the justification for the base case."),
        ],
      ],
      examples: [
        {
          title: "Financial services — the hidden cost gap",
          body: "A regional bank approved an AI loan underwriting tool with a $800K business case showing 18-month payback. Total first-year cost including data engineering, compliance review, model monitoring, and change management reached $2.1M. Payback extended to 4.2 years. The lesson: require the full cost inventory in the approval model, not the vendor quote.",
        },
        {
          title: "Retail — compounding caught post-launch",
          body: "A UK retailer deployed AI demand forecasting with a modest 6% waste reduction target. After twelve months, the same model was applied to promotional planning and markdown timing, delivering three times the original projected value. The business case had assumed static application. Leaders now build 'expansion scenarios' into every AI investment model.",
        },
        {
          title: "Logistics — range model vs point estimate",
          body: "A logistics operator presented AI routing ROI as a single $4.2M annual saving. The CFO asked for ranges. The team built low (2.1M), base (4.2M), and high (7.8M) scenarios with explicit adoption, integration, and fuel price assumptions. The CFO approved the investment — the range model gave her confidence that the team had actually stress-tested the numbers.",
        },
      ],
    }),
    sectionWithDiagram({
      number: "1.2",
      title: "The four categories of AI value",
      subtitle: "A taxonomy that forces every AI project to declare its primary value driver before deployment",
      take: "AI value falls into four categories: cost reduction, productivity gain, revenue growth, and risk reduction. Each requires a different measurement approach, a different time horizon, and different executive sponsorship. Conflating them in a single business case produces a number nobody can validate.",
      why: "When business cases mix cost and revenue benefits with no separation, attribution becomes impossible post-deployment. Finance cannot close the loop, leaders cannot identify what is working, and the next AI investment starts from zero credibility.",
      paragraphs: [
        [
          s("Cost reduction is the most measurable category. "),
          x(
            "Direct labour reduction, vendor consolidation, error rework elimination, and process automation savings are trackable against a clear baseline. Finance already has the cost line; your job is to show before and after on the same line.",
            "Be precise: 'reducing headcount' has different measurement and cultural implications than 'redeploying FTEs to higher-value work.' Both may produce cost benefit, but they require different measurement approaches and different conversations with HR and the leadership team.",
          ),
          s(" For cost reduction, agree the exact P&L line that will move before deployment — not after."),
        ],
        [
          s("Productivity gain is real but requires translation. "),
          x(
            "Time saved per task × volume × hourly fully-loaded cost gives a productivity dollar figure — but the value is only real if the saved time is redeployed, not simply lost in slack. Leaders must plan what employees do with recovered capacity before claiming productivity ROI.",
            "The most common AI productivity business case failure: time savings exist, but no role or process was redesigned to capture them. The saving sits in 'additional breaks' rather than additional output.",
          ),
          s(" Require a capacity redeployment plan as a condition of the productivity ROI assumption."),
        ],
        [
          s("Revenue growth and risk reduction require longer horizons and more judgment. "),
          x(
            "Revenue growth from AI — better recommendations, faster sales cycles, improved personalisation — has longer attribution chains and more confounding variables. Risk reduction — avoiding a compliance breach, a safety incident, or a reputational event — is the value of things that did not happen.",
            "Neither category should be abandoned because it is hard to measure. Instead, use proxy metrics: conversion rate, sales cycle duration, compliance incident frequency, audit finding counts. Document the connection between the proxy and the ultimate financial outcome.",
          ),
          s(" For risk reduction, the measurement question is: what is the cost of the event we are preventing, and how much has AI reduced its probability?"),
        ],
      ],
      examples: [
        {
          title: "Insurance — separating cost and risk categories cleanly",
          body: "An insurer deployed AI for claims fraud detection. The original business case lumped fraud prevention (risk reduction) and manual review efficiency (cost reduction) together. Post-deployment, they could not separate the two effects. The rebuild separated categories, assigned separate baseline metrics, and produced a model that correctly attributed $3.1M to fraud prevention and $1.4M to process efficiency — enabling proper reinvestment decisions.",
        },
        {
          title: "Professional services — productivity without redeployment",
          body: "A consultancy deployed AI document drafting and claimed $2.8M productivity ROI based on time savings. Twelve months later, revenue per consultant had not changed. Time saved went to longer review cycles, not more client work. The business case was technically accurate but the firm had not redesigned the delivery model to capture the value. The lesson: productivity ROI requires organisational change, not just software.",
        },
        {
          title: "E-commerce — revenue category done right",
          body: "An online retailer attributed personalisation AI to revenue gain by running a clean A/B test: 50% of users received AI-powered recommendations, 50% received rule-based ones. Revenue per session was the single metric. The test ran for eight weeks before deployment approval. Finance accepted the revenue ROI because the attribution chain was clean from day one.",
        },
      ],
    }, {
      kind: "diagram",
      id: "bl-ai-transformation",
      type: "flow",
      title: "AI Initiative Execution Path",
      caption:
        "Assess → prioritise → pilot → scale → embed. The sequence that separates successful transformations from expensive experiments.",
    }),
    sectionWithDiagram({
      number: "1.3",
      title: "Measurement frameworks: before/after, control groups, and attribution models",
      subtitle: "The three methodological options — when each works, and what each costs to implement",
      take: "Before/after measurement is cheap and often misleading. Control groups are expensive and often impractical. Attribution models are always imperfect and always better than nothing. Business leaders need to choose the right approach for the stakes involved — and document the choice before deployment.",
      why: "The measurement method is a business decision, not just a technical one. It determines how credible your ROI claim will be in twelve months, whether Finance will accept it, and whether the next AI investment starts with earned trust or renewed scepticism.",
      paragraphs: [
        [
          s("Before/after is the default and the weakest method. "),
          x(
            "Comparing a metric before and after AI deployment confounds the AI effect with seasonal patterns, market changes, organisational changes, and everything else happening in the business simultaneously. A before/after improvement may be real or entirely explained by external factors.",
            "Before/after works when: the time series is long enough to establish a clean baseline, no other major changes occurred in the same period, and the metric is stable under normal conditions. When in doubt, supplement with at least one of the stronger methods.",
          ),
          s(" Document what else changed in the measurement period — or Finance will find it for you."),
        ],
        [
          s("Control groups are the gold standard and require planning before deployment. "),
          x(
            "Running AI for one team, region, or customer segment while holding another equivalent group constant gives a clean comparison — but only if the groups were equivalent before deployment and no other difference exists between them.",
            "The business cost of control groups is real: you are deliberately not giving some users the AI capability during the test period. The measurement benefit must outweigh the opportunity cost. For large investments, it usually does.",
          ),
          s(" For AI investments above £500K, require a control group design before deployment approval — even if it delays launch by four weeks."),
        ],
        [
          s("Attribution models allocate partial credit where clean controls are impossible. "),
          x(
            "Multi-touch attribution, regression models that hold other variables constant, and difference-in-differences methods all allow you to estimate AI's contribution in a messy real-world environment — without the clean isolation of a controlled experiment.",
            "Attribution models require more data science investment but allow you to measure AI ROI in complex, always-on processes where you cannot pause deployment for a clean test. The output is a range, not a point — and that honesty strengthens, not weakens, your credibility with Finance.",
          ),
          s(" Choose your measurement method at business case approval — not when Finance asks for the results."),
        ],
      ],
      examples: [
        {
          title: "Healthcare — before/after invalidated",
          body: "A hospital deployed AI triage support and reported a 23% improvement in time-to-treatment. Before/after measurement showed the improvement clearly. Six months later, an audit revealed that hospital staffing had also increased 15% during the same period and a new intake process had been introduced. The AI effect could not be separated. The recommendation: for clinical settings, always design a control group before deployment.",
        },
        {
          title: "Retail banking — control group that paid for itself",
          body: "A bank launched AI credit risk scoring for small business loans in three regions and held two equivalent regions on the existing model for six months. The controlled comparison showed 18% reduction in default rates attributable to AI, net of region-specific economic differences. The CFO called it 'the cleanest AI ROI evidence she had seen.' The four-week delay to design the control group was the best investment in the project.",
        },
        {
          title: "Software company — attribution model for sales AI",
          body: "A SaaS company could not pause its AI sales assist tool for a clean test. Instead, they ran a difference-in-differences model: reps who had used the tool more than 30 days vs those under 30 days, controlling for tenure, territory, and deal size. The model attributed a $1.8M revenue uplift to AI with a ±$400K confidence interval. Finance accepted the range. The rigour of the attribution model, not a point estimate, earned the credibility.",
        },
      ],
    }, {
      kind: "diagram",
      id: "bl-roi-business-case",
      type: "flow",
      title: "AI ROI Framework",
      caption:
        "Baseline → hypothesis → pilot → scale → track. ROI without baseline measurement is fiction.",
    }),
    buildSection({
      number: "1.4",
      title: "Leading vs lagging AI indicators",
      subtitle: "The dashboard structure that tells you what is working three months before the P&L shows it",
      take: "Lagging indicators — cost savings, revenue, NPS — tell you what happened six to twelve months ago. Leading indicators — adoption rate, task completion quality, process cycle time — tell you what is happening today. Business leaders who only track lagging indicators are managing AI from the rear-view mirror.",
      why: "AI projects fail slowly. Adoption stalls at 30%, quality degrades with data drift, and usage concentrates in easy tasks rather than high-value ones — all before any financial metric moves. Leading indicators give you the opportunity to intervene before the investment is lost.",
      paragraphs: [
        [
          s("Define your leading indicators before deployment, not after the first review. "),
          x(
            "Adoption rate (percentage of eligible users actively using the AI), task volume (AI-assisted tasks per day), and override rate (how often users reject or correct AI output) are the three most universal leading indicators for any AI deployment.",
            "Override rate is particularly valuable: a high and rising override rate signals the AI is underperforming and users have found this out before your quality metrics catch it. A falling override rate signals the AI is earning user trust — a leading signal of productivity ROI.",
          ),
          s(" Require a leading indicator dashboard as a deployment condition, not a post-launch nice-to-have."),
        ],
        [
          s("Process cycle time is the bridge between leading and lagging. "),
          x(
            "How long does the AI-assisted process take versus the manual process? Cycle time moves faster than financial outcomes and is directly connected to them. A 40% reduction in loan processing time shows up in the cycle time dashboard before it appears in cost savings — giving you three to six months of early warning.",
            "Cycle time also reveals process bottlenecks that the AI has exposed but not solved: the AI completes its task in seconds, but the human review step that follows still takes three days. Cycle time measurement makes the constraint visible.",
          ),
          s(" Add process cycle time to your dashboard as the metric that connects AI activity to business outcomes."),
        ],
        [
          s("Set trigger thresholds, not just observation ranges. "),
          x(
            "A leading indicator is only valuable if it prompts action when it signals a problem. Define before deployment: if adoption falls below X% by week eight, we escalate to the programme sponsor. If override rate rises above Y% for two consecutive weeks, we suspend and review.",
            "Thresholds turn dashboards from reporting tools into management tools. Without them, the dashboard produces information that no one acts on.",
          ),
          s(" Publish your trigger thresholds alongside your KPIs so every stakeholder knows what will prompt escalation."),
        ],
      ],
      examples: [
        {
          title: "Insurance — override rate as early warning",
          body: "An insurer's AI claims assessment tool showed a rising override rate in week five — from 12% to 28% — before any claim processing quality metric moved. Investigation revealed a data feed had changed and the model was receiving incomplete policy records. The issue was fixed in week seven. Without the override rate leading indicator, the problem would have surfaced as a customer complaint or error rate spike in month three.",
        },
        {
          title: "Manufacturing — cycle time revealing the real bottleneck",
          body: "A manufacturer deployed AI quality inspection and celebrated cycle time improvements in the AI step. Then cycle time analysis showed the downstream human verification step had become the new bottleneck — taking 80% of total process time with 20% of the improvement. The leading indicator exposed a process redesign opportunity worth more than the original AI investment.",
        },
        {
          title: "Professional services — adoption trigger that saved a project",
          body: "A law firm deployed AI contract review with a trigger: if adoption fell below 60% by week six, a leadership review was mandatory. At week five, adoption stood at 38%. The review found that the AI was being deployed on complex multi-jurisdictional contracts it had not been trained on. The rollout was narrowed to straightforward commercial contracts, adoption reached 78% by week ten, and the ROI case was preserved.",
        },
      ],
    }),
    buildSection({
      number: "1.5",
      title: "Setting ROI targets before deployment",
      subtitle: "Why the number you commit to before launch determines everything about credibility and accountability",
      take: "Leaders who set ROI targets before deployment create accountability, force rigorous assumption-testing, and earn Finance credibility when they report results. Leaders who measure ROI after the fact are always explaining; leaders who commit upfront are always proving.",
      why: "Pre-deployment targets are not just about the number — they are about the process of building consensus on what success looks like. When the CEO, CFO, and department head agree on the target before launch, post-deployment reporting becomes a shared conversation rather than a defence.",
      paragraphs: [
        [
          s("The target-setting conversation is as valuable as the target itself. "),
          x(
            "Requiring the sponsor, the Finance lead, and the operational owner to agree on measurable targets before approval forces the business case assumptions into the open. Disagreements about whether cycle time or cost are the primary metric, about adoption assumptions, and about time horizons surface before they become political problems post-deployment.",
            "Many AI projects that 'failed to show ROI' actually showed real value — but against a target no one had agreed on before launch, so no result could satisfy everyone.",
          ),
          s(" Run the target-setting conversation as a structured meeting, not an email exchange, before any deployment approval."),
        ],
        [
          s("Set primary and secondary targets with different decision weights. "),
          x(
            "A primary target should be the single most important financial outcome — the one that, if achieved, justifies the investment regardless of secondary performance. Secondary targets capture additional value categories. This hierarchy prevents post-deployment metric cherry-picking.",
            "If a project hits its secondary targets but misses its primary target, it should be evaluated as a miss — with an honest analysis of why, not a presentation that leads with the wins.",
          ),
          s(" Publish the primary target in the approval document as the go/no-go ROI threshold for the post-deployment review."),
        ],
        [
          s("Build the measurement infrastructure before launch, not after. "),
          x(
            "The data pipelines, dashboards, and reporting cadences needed to track ROI should be live on day one of deployment — not built as an afterthought when the first six-month review approaches. If you cannot measure the ROI target from day one, either build the infrastructure first or revise the target to something measurable with current tooling.",
            "Retrofitting measurement is expensive, slow, and frequently produces data gaps that undermine the entire ROI case. Investment in measurement infrastructure should be included in the project budget as a non-negotiable line item.",
          ),
          s(" Include measurement infrastructure cost in the project budget and require dashboards to be live before go-live."),
        ],
      ],
      examples: [
        {
          title: "Financial services — pre-deployment target alignment",
          body: "Before deploying AI compliance monitoring, the CCO, CFO, and operations director spent two sessions agreeing that the primary target was 'reduce compliance review staff cost by 25% within 12 months' and secondary targets were 'reduce false positive rate by 40%' and 'cut average review time from 4.2 days to 2 days.' When month-12 results showed 22% cost reduction, the conversation was about the 3-point gap — not about which metric to use. The pre-alignment made the review productive.",
        },
        {
          title: "Retail — cherry-picking prevented by primary target",
          body: "An AI pricing tool missed its primary revenue uplift target (£1.8M vs £2.3M target) but exceeded its secondary margin improvement target (4.1% vs 3.5% target). Because the primary target had been agreed upfront, leadership could not simply lead with margin success. The honest review identified demand forecasting integration gaps. A second-phase investment addressed them, delivering the full revenue target six months later.",
        },
        {
          title: "Healthcare — measurement infrastructure built first",
          body: "A hospital system required that all data pipelines, dashboards, and reporting workflows be live and validated two weeks before AI surgical scheduling went live. The additional two weeks added cost but meant the programme team had clean baseline data and a functioning measurement system from day one. Their 12-month ROI report was the most credible the board had reviewed — because it had been measuring from the first day of deployment.",
        },
      ],
    }),
    buildSection({
      number: "1.6",
      title: "Common AI ROI measurement mistakes",
      subtitle: "The six errors that turn valid AI investments into undefendable ROI claims",
      take: "The most common AI ROI mistakes are not mathematical — they are structural: measuring the wrong thing, measuring too late, claiming benefits before they are realised, and failing to separate AI effects from other changes. Each error is preventable with the right governance process.",
      why: "Each mistake has a predictable cost: lost Finance credibility, delayed reinvestment, and AI programme momentum lost to bureaucratic post-mortems. Knowing the mistakes before deployment lets you design them out rather than explain them after.",
      paragraphs: [
        [
          s("Mistake one: counting potential as realised. "),
          x(
            "A tool that could save 500 hours per month is not saving 500 hours per month until adoption reaches the level where 500 hours of work is actually being done through the tool. Business cases often present full-adoption benefits; reality delivers partial-adoption actuals for six to eighteen months.",
            "Require a phased benefit model that ties realised savings to adoption milestones. If adoption is at 40%, the realised benefit should be shown at 40% of maximum — not 100%.",
          ),
          s(" Distinguish potential ROI (full adoption) from realised ROI (current adoption × unit benefit) in every report."),
        ],
        [
          s("Mistake two: omitting change management cost from the denominator. "),
          x(
            "Training, communication, process redesign, and user resistance management are real costs that belong in the total cost of ownership. Business cases that exclude them show misleadingly high ROI and consistently surprise on payback period.",
            "Change management costs for enterprise AI typically run 20–35% of the software and integration cost. Leaving them out of the model is not optimism — it is a predictable error.",
          ),
          s(" Require a change management budget line in every AI investment proposal before approval."),
        ],
        [
          s("Mistake three: ignoring regression to mean and base rate effects. "),
          x(
            "If you deploy AI immediately after a period of unusually poor performance, the subsequent improvement is partly AI and partly the natural return to normal. If you measure AI against a bad quarter, you will overstate the AI effect — and the next comparison period will expose it.",
            "Use rolling twelve-month baselines rather than single-quarter comparisons. For seasonally variable processes, compare equivalent periods year-over-year.",
          ),
          s(" Set baselines using multi-period rolling averages, not the most recent data point before deployment."),
        ],
      ],
      examples: [
        {
          title: "Consulting firm — adoption gap exposed at review",
          body: "A consultancy claimed £1.9M productivity ROI at the six-month review. Finance asked for the adoption data. Active usage was at 31% of eligible consultants. Realised ROI at actual adoption was £590K — less than a third of the headline claim. The programme had been measuring potential, not actuals. The redesigned model tied monthly benefit reports to adoption percentages, restoring credibility.",
        },
        {
          title: "Manufacturer — change management omission",
          body: "An AI predictive maintenance project showed 22-month payback in the business case. Post-deployment cost review revealed unbudgeted operator retraining (£180K), process documentation (£45K), and six months of dual-running (£220K). Actual payback: 31 months. The project was still worthwhile — but the surprises damaged trust in future AI business cases. The fix was mandatory change management line items in the project template.",
        },
        {
          title: "Financial services — regression to mean trap",
          body: "A bank deployed AI fraud detection immediately after a quarter with unusually high fraud rates. The post-deployment comparison showed a dramatic improvement — but the fraud rate had also normalised market-wide during the same period. The independent audit attributed 40% of the improvement to AI and 60% to market mean reversion. The lesson: baseline health matters as much as deployment quality.",
        },
      ],
    }),
    buildSection({
      number: "1.7",
      title: "Building an AI ROI dashboard",
      subtitle: "The five panels every business leader needs, and the governance cadence that makes them useful",
      take: "An AI ROI dashboard is not a reporting artifact — it is a decision-making tool. It should answer five questions in five minutes: Are we on track with the primary financial target? Is adoption sufficient to realise the benefit? Is quality holding? Are costs tracking to budget? What action is required this week?",
      why: "Without a structured dashboard, AI ROI reviews become political — stakeholders bring their preferred metrics and the conversation turns into a negotiation about which number to believe. A shared dashboard with agreed metrics eliminates that problem.",
      paragraphs: [
        [
          s("Panel one: financial progress against target. "),
          x(
            "Show realised benefits (not potential) versus the phased target for each benefit category. Use traffic lights: green if within 10% of plan, amber if 10–25% behind, red if more than 25% behind. The CFO should be able to assess the financial position in thirty seconds.",
            "Separate panels for cost reduction, productivity, revenue, and risk reduction — mixed into a single total figure obscures which value category is performing and which needs intervention.",
          ),
          s(" Never aggregate different value categories into a single ROI number on the dashboard — force category-level visibility."),
        ],
        [
          s("Panel two: adoption and usage. "),
          x(
            "Active users as a percentage of eligible users, task volume trend, and user segments by adoption level (power users, occasional users, non-adopters) give the operational picture. Low financial progress usually traces back to adoption failure — making this panel the first diagnostic stop.",
            "Segment non-adopters: are they a specific team, tenure band, or geography? The segmentation often reveals whether the issue is training, workflow integration, or tool design.",
          ),
          s(" Show adoption by segment, not just overall — segmentation reveals where to intervene."),
        ],
        [
          s("Panels three through five: quality, cost, and actions. "),
          x(
            "Quality panel: override rate, user satisfaction, error rate. Cost panel: actual vs budgeted total cost of ownership, cost per AI-assisted task. Actions panel: the three decisions required this reporting period, owner, and due date.",
            "The actions panel is the most neglected and most important. A dashboard without actions is a history lesson. The actions panel makes it a management tool.",
          ),
          s(" Publish the actions panel to all stakeholders, not just the programme team — it creates shared accountability."),
        ],
      ],
      examples: [
        {
          title: "Global bank — five-panel dashboard governance",
          body: "A global bank standardised all AI ROI dashboards across business units to a five-panel format reviewed monthly by the AI Investment Committee. Within two cycles, the committee could compare AI programme performance across twelve deployments consistently. The format also made annual AI portfolio reviews dramatically simpler — the same framework applied to every investment for comparative analysis.",
        },
        {
          title: "Retailer — adoption segmentation saving a deployment",
          body: "A retailer's AI merchandising tool showed 58% overall adoption but the dashboard's segmentation panel revealed that regional stores were at 89% while central buying was at 14%. The issue was not the tool — it was that central buying had a conflicting process that had not been redesigned. The segmentation caught it in month two. Without the segmentation, the 58% headline would have obscured the real problem for another quarter.",
        },
        {
          title: "Healthcare — actions panel creating accountability",
          body: "A hospital network added an 'actions required' panel to their AI staffing tool dashboard. Each panel showed three decisions with named owners and completion dates, reviewed at the fortnightly steering group. Within three months, 94% of identified actions were completed on time. Previously, dashboard reviews produced discussion but rarely committed action. The panel changed the meeting from reporting to management.",
        },
      ],
    }),
    buildSection({
      number: "1.8",
      title: "BL decision lens: what to commit to before your AI deployment goes live",
      subtitle: "Five decisions every business leader must make before deployment — not after",
      take: "The measurement architecture is built before deployment or it is never built properly. Business leaders who defer these five decisions until the first post-deployment review inherit data gaps, attribution problems, and credibility deficits that no amount of retroactive analysis can fix.",
      why: "Your role is to own measurement accountability — not to delegate it to the programme team and review results after the fact. The five decisions in this section are explicitly leadership decisions, not technical ones.",
      paragraphs: [
        [
          s("Decision one: primary ROI category and primary metric. "),
          x(
            "Choose one: cost reduction, productivity gain, revenue growth, or risk reduction. Choose the single metric that will determine whether this investment was a success. This decision must be made in writing, agreed by Finance, and included in the project approval document.",
            "If you cannot choose one primary category and one primary metric, the investment scope is too broad. Narrow it before approving.",
          ),
          s(" Write it down: 'This investment will be judged by [metric] against [target] by [date].' Get the CFO's signature."),
        ],
        [
          s("Decision two: measurement method and its constraints. "),
          x(
            "Choose your method: before/after, control group, or attribution model. If you choose before/after, document what else changed in the environment. If you choose control group, name the groups and who authorises the design. If you choose attribution, name the model and who validates it.",
            "The method choice is yours — but so is accountability for the limitations of the method you choose.",
          ),
          s(" Require the measurement method to be approved by Finance before the programme team builds the dashboard."),
        ],
        [
          s("Decisions three through five: trigger thresholds, measurement infrastructure date, and review cadence. "),
          x(
            "Third: set the leading indicator thresholds that will trigger escalation — and name who gets the escalation. Fourth: set the date by which measurement infrastructure must be live (before, not after, go-live). Fifth: set the review cadence — monthly dashboards, quarterly steering reviews, annual investment decision.",
            "These are operational commitments, not aspirations. They should appear in the project charter as conditions of continued investment, not as best-effort targets.",
          ),
          s(" All five decisions should be documented and countersigned before the deployment kick-off meeting."),
        ],
      ],
      examples: [
        {
          title: "Manufacturing — pre-deployment commitment document",
          body: "Before approving AI quality inspection, the VP of Operations signed a one-page commitment document: primary metric (defect escape rate), target (reduce by 35% in 12 months), measurement method (control group in two of four plants), measurement infrastructure live date (two weeks before go-live), and monthly steering review cadence. The document was reviewed at every subsequent steering meeting. When the 12-month result showed 28% improvement, the conversation was about the 7-point gap — not about what was supposed to happen.",
        },
        {
          title: "Financial services — Finance sign-off on measurement method",
          body: "A bank required Finance sign-off on the measurement methodology for all AI investments above £250K. On one occasion, Finance rejected a before/after proposal because a major regulatory change was occurring in the same period. The team redesigned using a difference-in-differences approach. The result was unambiguous and earned board-level credibility that accelerated the next three AI approvals.",
        },
        {
          title: "Retailer — five decisions in thirty minutes",
          body: "A retailer's AI programme board ran a structured 30-minute 'measurement decisions' session before every AI deployment above £100K. The five decisions were made, documented, and countersigned in a single meeting. The sessions identified three potential attribution conflicts across six deployments that would have produced misleading ROI reports without early resolution. The thirty-minute investment prevented months of post-deployment confusion.",
        },
      ],
    }),
  ],
  quiz: [
    {
      q: "A business leader claims AI saved the company £2M based on improved metrics in the six months after deployment. What is the most likely methodological weakness in this ROI claim?",
      options: [
        "The benefit is too small to be credible.",
        "Before/after measurement cannot separate the AI effect from other concurrent changes in the business.",
        "Six months is too long a measurement window.",
        "The saving should be expressed as a percentage, not a pound figure.",
      ],
      correct: 1,
      correctFeedback:
        "Correct. Before/after measurement is the weakest method because it cannot isolate the AI contribution from seasonal patterns, market changes, and organisational changes occurring simultaneously.",
      wrongFeedback:
        "Before/after comparison conflates many effects. Re-read section 1.3 on measurement framework methods.",
    },
    {
      q: "An AI deployment is showing strong cost savings but the business case primary metric was revenue growth. How should the business leader present this at the post-deployment review?",
      options: [
        "Lead with the cost savings — a win is a win.",
        "Restate the primary metric as cost savings retrospectively.",
        "Report the primary metric honestly as underperforming, analyse why, and present the cost saving as a secondary finding.",
        "Delay the review until revenue figures improve.",
      ],
      correct: 2,
      correctFeedback:
        "Right. Pre-deployment targets exist to prevent cherry-picking. Report against the agreed primary metric, then present secondary findings clearly labelled. Credibility comes from honesty about the primary target.",
      wrongFeedback:
        "Retrospective metric changes destroy Finance credibility. Re-read sections 1.2 and 1.5 on value categories and target-setting.",
    },
    {
      kind: "order",
      q: "Order the correct sequence for setting up AI ROI measurement.",
      prompt: "Drag to arrange first step (top) to last (bottom).",
      items: [
        "Agree primary ROI category, metric, and target with Finance before approval.",
        "Choose measurement method (before/after, control group, or attribution) and document constraints.",
        "Build measurement infrastructure and dashboards — live before deployment go-live.",
        "Set leading indicator trigger thresholds and review cadence.",
        "Deploy and track actuals against pre-committed targets.",
      ],
      correctFeedback:
        "Correct sequence. All measurement decisions happen before deployment — not after. Re-read sections 1.3, 1.5, and 1.8.",
      wrongFeedback:
        "Measurement architecture is built before go-live, not after results arrive. Re-read section 1.8.",
    },
    {
      kind: "categorize",
      q: "Sort each measurement behaviour into the correct outcome.",
      categories: ["Builds Finance credibility", "Undermines ROI credibility"],
      items: [
        { text: "Reports realised ROI tied to actual adoption percentage.", category: 0 },
        { text: "Claims full-capacity benefit savings at 35% adoption.", category: 1 },
        { text: "Uses a control group with pre-agreed group equivalence.", category: 0 },
        { text: "Compares deployment results against a single-quarter bad baseline.", category: 1 },
        { text: "Separates cost reduction and revenue gain into distinct measurement tracks.", category: 0 },
        { text: "Switches from revenue target to cost metric after missing revenue goal.", category: 1 },
      ],
      correctFeedback:
        "Right. Credibility comes from honest measurement architecture — not from choosing the metrics that look best. Re-read sections 1.3 and 1.6.",
      wrongFeedback:
        "Finance credibility is earned through consistent, pre-agreed measurement. Re-read sections 1.5 and 1.6.",
    },
    {
      q: "What does a rising override rate in the first eight weeks of an AI deployment most likely signal?",
      options: [
        "The AI is working well and users are engaged.",
        "Users are resisting change for cultural reasons only.",
        "The AI output quality is underperforming and users are detecting this before financial metrics move.",
        "Override rates are irrelevant to business ROI.",
      ],
      correct: 2,
      correctFeedback:
        "Correct. Override rate is a leading indicator of AI quality. A rising rate signals the model is producing outputs users cannot trust — detected before P&L metrics move. Act on it early. Re-read section 1.4.",
      wrongFeedback:
        "Override rate is one of the most valuable leading indicators available. Re-read section 1.4 on leading vs lagging indicators.",
    },
    {
      kind: "order",
      q: "Order the five pre-deployment measurement decisions a business leader must sign off on.",
      prompt: "Drag to arrange first decision (top) to last (bottom).",
      items: [
        "Choose primary ROI category and single primary metric.",
        "Select measurement method and document its constraints.",
        "Confirm measurement infrastructure live date (before go-live).",
        "Set leading indicator trigger thresholds and escalation owner.",
        "Agree review cadence — monthly, quarterly, annual.",
      ],
      correctFeedback:
        "Exactly. All five decisions are pre-deployment commitments, not post-deployment options. Re-read section 1.8.",
      wrongFeedback:
        "These decisions must be made before deployment, not when Finance asks for results. Re-read section 1.8.",
    },
  ],
});
