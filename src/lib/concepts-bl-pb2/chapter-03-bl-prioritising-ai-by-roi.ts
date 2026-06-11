import { buildChapter, buildSection, s, x } from "../concepts-bl-helpers";

export const chapter03BlPriorisingAiByRoi = buildChapter({
  slug: "bl-prioritising-ai-by-roi",
  number: 3,
  shortTitle: "Prioritising AI by ROI",
  title: "Prioritising AI by ROI — Why It Is Hard and How to Do It Anyway",
  readingMinutes: 20,
  summary:
    "AI ROI is genuinely harder to calculate than conventional IT investment — but business leaders who refuse to engage with the calculation end up with unfundable programmes or unaccountable pilots. This chapter gives you a scoring model, a portfolio framework, and the discipline to say no.",
  keyTakeaway:
    "ROI prioritisation for AI requires a consistent scoring model applied across all candidates, time-to-value discipline to prevent long-horizon thinking from crowding out near-term returns, and the governance to say no to good ideas that do not make the portfolio. Leaders who master this present AI as a capital allocation decision, not a technology gamble.",
  pmCallout:
    "As a business leader: ROI prioritisation is your most important AI governance tool. It converts 'should we do AI?' from a cultural debate to a resource allocation discipline. Own the model, apply it consistently, and defend the no's as vigorously as the yes's.",
  sections: [
    buildSection({
      number: "3.1",
      title: "Why AI ROI Is Hard",
      subtitle: "The specific reasons conventional ROI tools underserve AI investment decisions",
      take: "AI investment sits between R&D and operational technology — it carries uncertainty profiles that conventional NPV models were not designed for. Benefit realisation is probabilistic and phased. Costs have a higher variable component than traditional software. And the strategic option value — the capability that an AI investment creates for future programmes — is real but hard to discount. Leaders who understand why it is hard can design models that work despite the difficulty.",
      why: "Finance teams applying standard NPV to AI initiatives consistently undervalue them (ignoring strategic option value) or reject them (because probabilistic benefit ranges make the business case look weak). Understanding the specific sources of difficulty lets you design a more appropriate evaluation framework.",
      paragraphs: [
        [
          s("Benefit realisation in AI is phased, not binary. "),
          x(
            "A traditional software deployment has a go-live date after which benefits accrue. AI deployments reach a minimum viable performance threshold, then improve as more data is processed, models are retrained, and adoption grows. The benefit curve is S-shaped, not step-function. Standard NPV models that use a single benefit estimate from month one of deployment systematically undervalue AI.",
            "The practical fix: build three benefit curves — conservative (minimum viable performance, limited adoption), base (expected performance after first model refresh, full adoption), and optimistic (performance with full data flywheel active). Present the range, not a point estimate. Finance teams that require a single number are applying the wrong tool.",
          ),
          s(" Defend the range against requests for a single point estimate — the range is more honest and more useful."),
        ],
        [
          s("Costs have a higher variable component than traditional software. "),
          x(
            "Software licensing is typically fixed or per-seat. AI infrastructure includes variable inference costs (per API call or per compute unit), variable data processing costs, and variable model retraining costs that scale with usage volume. Budget models that treat AI costs as fixed underestimate the cost at scale.",
            "The practical fix: build a cost model that includes both fixed infrastructure costs and variable inference costs across projected usage volumes. As volume grows, unit economics should improve — the variable cost per decision should decrease as fixed costs amortise. Show this learning curve in the cost model.",
          ),
          s(" Model costs at 50%, 100%, and 200% of projected volume to understand the cost envelope at scale."),
        ],
        [
          s("Strategic option value is real but invisible to standard models. "),
          x(
            "An AI deployment in customer service builds data infrastructure, AI governance capability, and change management experience that are inputs to the next AI programme. The value of that capability is not captured in the customer service ROI calculation — but it is real.",
            "The practical fix: acknowledge strategic option value qualitatively in the business case without trying to quantify it precisely. A paragraph that says 'this deployment builds the data pipeline and governance framework required for the claims AI initiative (estimated value: £X in year 3) at no incremental cost' is more credible than a spurious option value calculation.",
          ),
          s(" Name the strategic options created; do not try to put a precise number on them."),
        ],
      ],
      examples: [
        {
          title: "A retailer — the S-curve that changed the approval decision",
          body: "A major retailer's AI demand forecasting programme was initially rejected by the investment committee because the Year 1 return was below the 15% IRR threshold. When the team presented a three-year S-curve showing Year 2 and Year 3 returns as the model improved with data volume, the programme cleared the threshold at the portfolio level. The Year 1 figure alone was a misleading representation of the initiative's economics.",
        },
        {
          title: "A bank — variable cost surprise at scale",
          body: "A bank's AI credit risk scoring tool was approved on a cost model that treated inference costs as negligible. When deployment volume reached 50,000 decisions per month, API inference costs were £180,000 per month — unbudgeted and three times higher than the fixed tool costs. The cost model had been built for pilot volume, not production scale. The variable cost problem was a modelling failure, not a technology failure.",
        },
        {
          title: "An insurer — strategic option value explicitly acknowledged",
          body: "An insurance group's first AI deployment — claims document classification — included an explicit statement in the business case: 'This deployment creates the data labelling infrastructure and AI governance framework required by three subsequent initiatives in the AI roadmap, estimated to deliver £4.2M combined value over years 2 and 3.' The investment committee approved the first initiative partly on its direct ROI and partly on this named strategic option. The subsequent initiatives were approved faster because the infrastructure existed.",
        },
      ],
    }),
    buildSection({
      number: "3.2",
      title: "Building a Scoring Model",
      subtitle: "A consistent framework that makes prioritisation repeatable and defensible",
      take: "A scoring model forces explicit trade-off decisions before anyone is invested in a specific initiative. It replaces opinion-based prioritisation with criteria-weighted evaluation. The criteria that matter most for AI ROI: value potential, time to value, data readiness, implementation complexity, and strategic alignment. Score each consistently; let the model generate the ranking.",
      why: "Without a scoring model, AI prioritisation defaults to the initiative with the most enthusiastic sponsor, the most senior champion, or the most compelling vendor demo. None of those correlate reliably with ROI. The scoring model provides an audit trail for prioritisation decisions and a framework for when conditions change.",
      paragraphs: [
        [
          s("Define five criteria with explicit weights before scoring any initiative. "),
          x(
            "Value potential (30%): estimated revenue, cost, or risk impact over three years, with conservative estimate as the anchor. Time to value (25%): months from project start to first measurable business outcome — not to deployment, to outcome. Data readiness (20%): percentage of required data available, accessible, and governed today. Implementation complexity (15%): number of system integrations, process changes, and organisational functions affected. Strategic alignment (10%): degree to which the initiative advances a stated strategic priority.",
            "The weights are deliberately ordered by business relevance. Value potential and time to value carry the most weight because they directly determine portfolio return. Data readiness carries more weight than implementation complexity because data problems are harder to solve mid-programme than integration challenges.",
          ),
          s(" Set weights before seeing scores — pre-commitment prevents weight manipulation to produce preferred rankings."),
        ],
        [
          s("Score each criterion on a 1-5 scale with explicit anchor definitions. "),
          x(
            "Value potential: 1 = under £100K annual impact; 2 = £100K-£500K; 3 = £500K-£2M; 4 = £2M-£10M; 5 = over £10M. Time to value: 1 = over 24 months; 2 = 18-24 months; 3 = 12-18 months; 4 = 6-12 months; 5 = under 6 months. Anchor definitions make the scoring comparable across evaluators and repeatable across cycles.",
            "When evaluators disagree on a score by more than one point, that is a signal to revisit the evidence — not a tie to be broken by seniority. Scoring disagreements reveal uncertainty in the business case that should be resolved before the initiative enters the portfolio.",
          ),
          s(" Disagreement is information — investigate it rather than averaging it."),
        ],
        [
          s("Apply the model consistently across all candidates in the same cycle. "),
          x(
            "The scoring model's value is comparative, not absolute. An initiative that scores 3.8 out of 5 is worth funding if the next-best alternative scores 2.1. It is worth deferring if three alternatives score above 4.0 and the portfolio capacity is three initiatives.",
            "Never score a single initiative in isolation — always score the full candidate set simultaneously. Initiatives evaluated separately are easier to game with locally optimistic assumptions. Initiatives evaluated as a comparative set produce more honest scoring because evaluators know the alternative options.",
          ),
          s(" Score the full candidate set simultaneously — never one initiative at a time."),
        ],
      ],
      examples: [
        {
          title: "A professional services firm — scoring model prevents champion bias",
          body: "A consultancy's AI governance committee introduced a formal scoring model after two consecutive AI pilots championed by senior partners produced no measurable ROI. The scoring model's time-to-value criterion consistently ranked the partners' preferred initiatives below threshold — they were long-horizon, high-complexity programmes. The model redirected investment to four shorter-horizon initiatives that produced measurable outcomes within nine months and rebuilt committee confidence in AI investment.",
        },
        {
          title: "A manufacturer — disagreement as due diligence",
          body: "A manufacturer's scoring session for five AI candidates produced a three-point disagreement on data readiness for a quality control initiative. Two evaluators scored it 4 (data available and well-structured); one scored it 1 (data exists but is trapped in a legacy system with no API). Investigation confirmed the third evaluator was correct — data existed but was inaccessible without a £180K integration project. The initiative was rescored at 1.5, dropping it from first to fourth in the ranking. The disagreement investigation prevented a budget commitment to an initiative that would have stalled at integration.",
        },
        {
          title: "A telecoms operator — comparative scoring changes the portfolio",
          body: "A European telecoms operator had approved an AI network planning initiative in isolation, scoring it against its own business case. When a scoring model was introduced and all candidate initiatives were evaluated simultaneously, the network planning initiative ranked fifth out of seven. Three operational AI candidates — call centre routing, churn prediction, and fault detection — ranked higher on value potential and time to value. The portfolio was rebuilt from the comparative scoring output, and the network planning initiative was deferred to a subsequent cycle.",
        },
      ],
    }),
    buildSection({
      number: "3.3",
      title: "Time to Value Discipline",
      subtitle: "The metric that keeps your portfolio honest",
      take: "Time to value — months from project start to first measurable business outcome — is the most important single metric for AI portfolio health. Long average time to value is a leading indicator of programme failure. Portfolios with no initiative delivering an outcome within six months will lose stakeholder confidence before they have evidence of return.",
      why: "AI programmes lose board and executive support not because they fail technically but because they run out of evidence before they run out of budget. Time to value discipline ensures evidence accumulates faster than scepticism.",
      paragraphs: [
        [
          s("Distinguish time to deployment from time to outcome. "),
          x(
            "An AI system that is deployed but not adopted has not produced value. A deployment that is adopted but does not produce a measurable outcome against the stated business metric has not produced value. Time to value is measured from project start to first confirmed business outcome — the metric in the use case brief, measured in the business system that the metric lives in.",
            "This distinction eliminates a common reporting confusion: teams that report 'we deployed in month 6' as a success marker before any business outcome is measured. Deployment is a necessary but insufficient condition for value.",
          ),
          s(" Measure time to outcome, not time to deployment — they are frequently separated by months of adoption work."),
        ],
        [
          s("Target at least one portfolio initiative delivering an outcome within six months. "),
          x(
            "The six-month threshold is not arbitrary — it is the typical review cadence of senior leadership attention. An AI portfolio that has no evidence of outcome by the six-month mark faces a credibility crisis at exactly the moment when programme momentum is most fragile.",
            "If no current candidate can deliver an outcome in six months, that is a portfolio composition problem that should be corrected before the portfolio is approved. Add a shorter-horizon initiative — even if it is smaller in value — to ensure the evidence cadence is maintained.",
          ),
          s(" If your portfolio has no six-month outcome, add one before presenting it for approval."),
        ],
        [
          s("Long-horizon initiatives require milestone evidence, not just outcome evidence. "),
          x(
            "Initiatives that take 18 to 36 months to reach the business outcome stage must produce leading-indicator evidence along the way. Stakeholders cannot wait 24 months for evidence that the programme is on track.",
            "Define three to five milestone metrics before the programme begins: data pipeline completion, pilot accuracy threshold reached, user adoption rate at 30 days post-deployment, first measurable improvement in the target metric at partial deployment. Each milestone should be evidenced with data, not status reports.",
          ),
          s(" Leading indicator milestones are not bureaucracy — they are the early warning system for programmes that are drifting."),
        ],
      ],
      examples: [
        {
          title: "A retailer — portfolio re-composition to protect credibility",
          body: "A retailer's AI portfolio contained three initiatives with average expected time to first outcome of 22 months. The CDO recognised the credibility risk and added a fourth initiative — AI product description generation — with a 10-week time to value. The small initiative delivered a measurable SEO traffic improvement in week 8, which the CDO presented alongside the three longer-horizon programmes at the six-month board review. The portfolio credibility was maintained; the three longer programmes continued with board support.",
        },
        {
          title: "A bank — milestone evidence sustains an 18-month programme",
          body: "A bank's AI fraud detection programme had an 18-month expected time to production deployment. The programme team defined five milestones with specific evidence requirements: data pipeline audit complete (month 3), model accuracy exceeds manual review benchmark on holdout set (month 7), pilot deployment in one geography with 10% fraud reduction (month 12), regulatory review complete (month 15), full deployment (month 18). Each milestone report to the steering committee included the measured evidence — not a narrative update — which sustained confidence through a challenging data integration period.",
        },
        {
          title: "A logistics company — time to value that disappeared",
          body: "A logistics company approved an AI route optimisation initiative with an expected time to first outcome of 9 months. At month 9, the deployment had occurred but driver adoption was at 23%. The time to outcome counter reset — adoption design had not been included in the original programme plan. The credibility gap was managed by reframing the outcome metric as 'driver adoption rate' for the next quarter, but the lesson was learned: time to adoption must be planned alongside time to deployment.",
        },
      ],
    }),
    buildSection({
      number: "3.4",
      title: "Dependency Mapping",
      subtitle: "Understanding which initiatives unblock others",
      take: "AI initiatives are not independent investments — they share data infrastructure, governance frameworks, and organisational capability. An initiative that appears lower-priority in isolation may be the prerequisite for three higher-value initiatives. Dependency mapping reveals the sequence that maximises portfolio return and prevents the bottleneck discovery that stalls programmes in Year 2.",
      why: "Portfolios that are prioritised without dependency mapping routinely discover mid-programme that a second initiative cannot start because the first did not deliver a required data pipeline or governance component. Dependency mapping converts that discovery from a crisis into a plan.",
      paragraphs: [
        [
          s("Map four types of dependency across your initiative portfolio. "),
          x(
            "Data dependencies: initiative B requires a data asset that initiative A will create or standardise. Infrastructure dependencies: initiative B requires an API, a data platform, or an ML serving infrastructure that initiative A will establish. Governance dependencies: initiative B is a higher-risk automation that requires the governance framework established in initiative A. Organisational dependencies: initiative B requires the AI change management capability that initiative A will build in the team that runs it.",
            "Most portfolios have several of each type. Drawing the dependency graph before finalising the sequence often reveals that a nominally lower-priority initiative is the critical path predecessor for the initiatives that matter most.",
          ),
          s(" Draw the dependency graph before finalising the portfolio sequence — not after approval."),
        ],
        [
          s("Identify the critical path and protect it. "),
          x(
            "The critical path is the sequence of initiatives where a delay in any one delays all downstream ones. Critical path initiatives require protected resource allocation — they cannot afford to compete for talent or infrastructure with parallel initiatives in the same cycle.",
            "Leaders who do not identify the critical path assign equal resources across all portfolio initiatives. When critical path initiatives slow down, the full downstream portfolio is affected — but the problem is invisible until the downstream initiative tries to start and discovers its prerequisites are not ready.",
          ),
          s(" Name the critical path in every portfolio update. Protect it explicitly in resource allocation."),
        ],
        [
          s("Use dependency mapping to sequence, not to delay. "),
          x(
            "A dependency map that shows every initiative waiting for a universal data platform before starting is a paralysis map, not a sequencing plan. The corrective principle: identify the minimum viable prerequisite for each initiative — not the ideal prerequisite. Fund the minimum viable data asset that enables the highest-value initiative to start, not the complete data transformation project.",
            "Dependency chains that span more than three levels are a warning sign. They indicate that the portfolio has been constructed around an ambitious infrastructure programme, not around near-term business value. Restructure the portfolio to have at least two initiatives that do not depend on the infrastructure programme.",
          ),
          s(" Minimum viable prerequisites enable progress; gold-plated prerequisites enable paralysis."),
        ],
      ],
      examples: [
        {
          title: "A bank — data dependency revealed by mapping",
          body: "A retail bank's AI portfolio initially ranked five initiatives by scoring model output. Dependency mapping revealed that initiatives ranked 2, 3, and 5 all required a customer identity resolution layer that initiative 4 would create. Initiative 4 moved from rank 4 to rank 1 in the sequencing plan — not because its score changed, but because its dependency value to the broader portfolio was made visible. The sequencing change prevented an 18-month delay across three initiatives.",
        },
        {
          title: "An insurer — governance dependency that protected the portfolio",
          body: "An insurer's AI portfolio included a high-automation claims processing initiative ranked first by scoring. Dependency mapping identified that this initiative required the AI governance framework (human override, audit trail, regulator reporting) that a lower-ranked, lower-automation initiative was designed to establish. The sequence was adjusted: the lower-ranked initiative deployed first, established the governance framework in a lower-risk context, and the high-automation initiative followed on an already-approved governance foundation.",
        },
        {
          title: "A manufacturer — minimum viable prerequisite that unlocked momentum",
          body: "A manufacturer's AI quality control initiative was blocked pending completion of a full MES (Manufacturing Execution System) upgrade — a 3-year programme. Dependency mapping surfaced that the AI initiative needed only two specific data streams from the MES, both of which could be extracted via a lightweight API without waiting for the full upgrade. The minimum viable prerequisite was delivered in 6 weeks; the AI pilot began independently of the MES programme.",
        },
      ],
    }),
    buildSection({
      number: "3.5",
      title: "Portfolio Thinking",
      subtitle: "Managing AI investments as a portfolio, not a list of projects",
      take: "A portfolio of AI initiatives has properties that individual project evaluation cannot see: it has a combined risk profile, a combined time-to-value curve, and an aggregate capability-building effect. Managing the portfolio as a whole — balancing near-term and long-term, high-risk and low-risk, foundational and application — produces better outcomes than optimising each initiative independently.",
      why: "Leaders who manage AI project-by-project produce fragmented capability, inconsistent learning, and unpredictable aggregate value. Leaders who manage a portfolio produce a coherent narrative for stakeholders, more efficient use of shared infrastructure, and the compounding value of capability transfer across initiatives.",
      paragraphs: [
        [
          s("Balance three investment horizons across the portfolio. "),
          x(
            "Horizon 1 (0-12 months): operational AI applications with clear ROI and high data readiness. These produce near-term returns and build organisational capability. Target 50-60% of AI portfolio budget. Horizon 2 (12-24 months): more complex applications requiring data or infrastructure foundations being built. Target 30-40% of budget. Horizon 3 (24+ months): transformative or experimental programmes, including novel use cases and emerging technology bets. Target 10-20% of budget.",
            "The horizon balance is not a formula — it is a planning discipline. The right balance depends on your organisation's AI maturity, competitive environment, and risk tolerance. What matters is that all three horizons are explicitly represented in the portfolio, not that the percentages are precise.",
          ),
          s(" Name each initiative's horizon. An all-Horizon-3 portfolio is a wish list; an all-Horizon-1 portfolio has no strategic growth."),
        ],
        [
          s("Manage portfolio risk at the aggregate level, not per initiative. "),
          x(
            "Every AI initiative carries execution risk. A portfolio of six high-risk initiatives will statistically produce two to three failures regardless of execution quality — the combined risk is unsustainable. A portfolio balanced between low-risk, proven-approach initiatives and high-risk, novel initiatives produces predictable aggregate performance even when individual initiatives fail.",
            "Risk classification for AI initiatives: low risk = proven technology, well-structured data, similar deployments in industry, limited integration scope. High risk = novel AI capability, data to be collected, first deployment in this function, wide integration scope. The portfolio should have more low-risk initiatives than high-risk ones unless the organisation has established AI programme management maturity.",
          ),
          s(" Portfolio risk is managed at the aggregate; individual initiative risk is managed at the execution level."),
        ],
        [
          s("Report portfolio metrics, not just initiative status. "),
          x(
            "Stakeholder reporting that covers only 'initiative A is on track, initiative B is delayed' misses the portfolio-level view: combined expected value, aggregate time to value, portfolio risk balance, and capability building trajectory. These portfolio metrics are what the AI programme's executive sponsor needs to manage the total investment.",
            "A portfolio health dashboard — not a project status RAG report — is the governance artefact for AI portfolio management. It should show, at a glance: budget deployed vs. committed, value realised vs. expected, initiative count by horizon, and risk balance across the active set.",
          ),
          s(" Portfolio metrics require portfolio reporting — not a collection of individual project status reports."),
        ],
      ],
      examples: [
        {
          title: "AXA — portfolio horizon balance as governance policy",
          body: "AXA's Group AI Committee adopted an explicit horizon balance policy: at least 50% of AI investment must be in deployments that produce a measurable business outcome within 12 months. The policy was introduced after two consecutive years where the portfolio drifted toward Horizon 3 programmes that consumed budget without producing near-term evidence of value. The policy is reviewed annually but the constraint remains — protecting the evidence cadence that maintains board confidence.",
        },
        {
          title: "A retailer — portfolio risk reclassification",
          body: "A retailer's AI portfolio risk assessment had classified a customer journey personalisation initiative as low-risk because the use case was common. A portfolio-level review reclassified it as high-risk: the data required was spread across 11 systems with three different governance regimes, and no comparable deployment existed in the same multi-channel retail context. The reclassification changed resource allocation — a data architect was assigned as a dedicated risk mitigation resource — and revised the time-to-value estimate from 9 months to 16 months.",
        },
        {
          title: "Siemens — portfolio dashboard replacing project reports",
          body: "Siemens' Industrial AI programme replaced per-initiative status reports with a portfolio health dashboard for executive reporting. The dashboard showed aggregate expected value, distribution of initiatives across risk classes and horizons, capital committed vs. capital producing outcomes, and a trailing 12-month realised value figure. Executive sponsors reported they could answer 'how is AI going?' from the dashboard in 90 seconds — replacing 45-minute project status meetings.",
        },
      ],
    }),
    buildSection({
      number: "3.6",
      title: "Saying No",
      subtitle: "The hardest and most valuable AI prioritisation discipline",
      take: "Saying no to a good AI idea — one that might work, that has an enthusiastic champion, and that addresses a real problem — is the discipline that separates effective AI portfolio managers from ones who fund busy programmes and wonder why nothing lands. Every yes is a trade-off against something else. Explicit no's protect the portfolio's capacity to deliver.",
      why: "Organisations that cannot say no to AI ideas end up with more active initiatives than their change management capacity, engineering resource, and leadership attention can support. Each additional initiative below the capacity threshold decreases the probability of success for every other initiative in the portfolio.",
      paragraphs: [
        [
          s("A no is not permanent — it is a disposition with conditions. "),
          x(
            "When a use case is declined in the current portfolio cycle, the declination documentation should specify: why it did not make the current portfolio (score below threshold, capacity constraint, dependency not ready), and what conditions would change the decision (data readiness improvement, capacity opening, a prerequisite initiative completing).",
            "Conditioned declinations prevent good ideas from being lost and prevent declined sponsors from re-proposing the same idea with the same evidence. 'This initiative is declined until the customer data governance framework is complete — expected Q3' is a productive answer. It acknowledges the value while managing the timing.",
          ),
          s(" Always document the conditions for re-entry alongside the decline."),
        ],
        [
          s("Protect the no from escalation pressure. "),
          x(
            "Senior sponsors whose initiatives are declined will sometimes escalate — bringing the idea to a more senior stakeholder who can override the portfolio decision. This is the most damaging threat to portfolio governance. An override at the senior level signals that the scoring model is optional, which degrades every future prioritisation conversation.",
            "The protection is procedural: document the scoring clearly enough that the override requires an explicit challenge to the criteria or the scores — not just seniority. A governance committee that can show the declined initiative scored 2.4 out of 5 against criteria that all stakeholders agreed to is in a much stronger position than one that made a judgment call.",
          ),
          s(" Defend the scoring model against escalation — not the portfolio decision. Make overriders argue with the criteria."),
        ],
        [
          s("Revisit portfolio decisions at the quarterly review cadence. "),
          x(
            "No is a time-limited position. Business conditions change, vendor markets mature, data quality improves, and capacity opens as initiatives complete. The quarterly review exists to convert conditioned no's into yes's when the conditions are met.",
            "A quarterly review that never converts a declined initiative signals that the decline conditions are not real — or that nobody is tracking whether the conditions have been met. Assign ownership for each declination condition: someone is accountable for monitoring whether the data readiness threshold has been crossed, or whether the dependency initiative has completed.",
          ),
          s(" Assign ownership for monitoring decline conditions — declinations without owners are forgotten, not tracked."),
        ],
      ],
      examples: [
        {
          title: "A financial services group — documented decline prevents re-proposal",
          body: "A wealth management group declined an AI portfolio analytics tool in three consecutive planning cycles, each time because the sponsor reframed it slightly without addressing the underlying data governance gap. When the governance committee introduced decline documentation with explicit re-entry conditions, the cycle ended: the sponsor could either address the data governance condition or accept the decline. The sponsor funded the data governance project and the AI initiative entered the portfolio in the following cycle — on a foundation that would have been absent had the conditions not been documented.",
        },
        {
          title: "A telecoms operator — protected no against C-suite escalation",
          body: "A telecoms operator's AI governance committee declined a natural language customer query system because it scored 1.8 on data readiness — core conversation logs were unstructured and unlabelled. The initiative's sponsor escalated to the CEO. The committee presented the score, the criterion definition, and the specific data gap to the CEO. The CEO asked the sponsor to address the data gap and resubmit. The scoring model was preserved; the committee's credibility strengthened.",
        },
        {
          title: "A retailer — quarterly review converts a decline",
          body: "A retailer declined an AI inventory clearance pricing tool in Q1 because the merchandising team's change management capacity was fully committed to a different programme. The decline was documented with a re-entry condition: 'Reconsider when the existing programme completes and team capacity is confirmed available.' At the Q3 review, the existing programme had delivered and team capacity was confirmed. The inventory tool entered the Q4 portfolio without needing a full re-evaluation — the previous scoring was current enough to support the decision.",
        },
      ],
    }),
    buildSection({
      number: "3.7",
      title: "Revisiting Priorities",
      subtitle: "When and how to update the portfolio without losing credibility",
      take: "AI portfolio priorities should be reviewed quarterly and updated when three conditions are met: business conditions have materially changed, new evidence about an initiative's performance or feasibility has arrived, or a previously deferred initiative has met its re-entry conditions. Ad-hoc priority changes outside the review cadence erode stakeholder trust and programme momentum.",
      why: "Portfolios that are updated ad hoc — in response to individual stakeholder pressure, new vendor pitches, or single-quarter performance data — produce inconsistent resource allocation and confuse execution teams. Portfolios reviewed on a defined cadence produce better outcomes because change is deliberate, not reactive.",
      paragraphs: [
        [
          s("Define the conditions that trigger a priority update, not just the cadence. "),
          x(
            "Not every quarterly review should produce priority changes — that signals instability rather than responsiveness. Priority updates are warranted when: a business outcome metric has shifted by more than 20% from the assumption in the scoring model; the dependency map has changed because a prerequisite initiative completed ahead or behind schedule; or competitive intelligence has materially changed the strategic alignment score for a specific initiative.",
            "Stating the conditions in advance prevents arbitrary priority changes. A stakeholder who wants to escalate an initiative mid-cycle must demonstrate that one of the conditions has been met — not just that they have a new enthusiastic case.",
          ),
          s(" Pre-state the conditions for priority updates — this protects the cadence from ad-hoc disruption."),
        ],
        [
          s("Communicate priority changes with the reasoning, not just the outcome. "),
          x(
            "Teams executing AI programmes respond very differently to 'the priority has changed' versus 'the priority has changed because the underlying business metric shifted 30% and here is how that changes the ROI calculation'. The first response is uncertainty and frustration. The second is updated direction with the logic intact.",
            "Priority changes that are communicated with reasoning also produce better re-prioritisation suggestions from teams. When execution teams understand why priorities are changing, they can identify other parts of the portfolio that should be reconsidered on the same basis.",
          ),
          s(" The reasoning for a priority change is as important as the change itself — communicate both."),
        ],
        [
          s("Protect long-horizon initiatives from short-term priority pressure. "),
          x(
            "Long-horizon initiatives are vulnerable to quarterly reprioritisation because their evidence is leading indicators rather than business outcomes. A review process that can only see evidence at the outcome level will deprioritise long-horizon programmes every cycle until they are cancelled.",
            "The protection: define milestone metrics for long-horizon initiatives that are evidence-grade at each quarterly review point. If a 24-month initiative is on its seventh quarterly review with no evidence of milestone achievement, that is a genuine signal to reconsider. If it is hitting its milestones and being deprioritised because short-horizon initiatives are producing visible outcomes, that is a portfolio balance problem — not evidence-based reprioritisation.",
          ),
          s(" Distinguish milestone achievement from outcome achievement when evaluating long-horizon initiatives."),
        ],
      ],
      examples: [
        {
          title: "An insurer — triggered review prevents instability",
          body: "An insurance group's AI governance policy specified that portfolio priorities could only be updated in formal quarterly reviews or when a triggering condition was documented and approved by two committee members. In the programme's second year, a new Chief Digital Officer joined and attempted to redirect the portfolio toward a pet project initiative. The governance committee applied the trigger condition test: no material change in business conditions, no new performance evidence, no dependency change. The redirect was deferred to the quarterly review, where it was evaluated against the full candidate set and scored in the middle tier — not the top priority the CDO had assumed.",
        },
        {
          title: "A bank — communicating the reasoning that maintained team commitment",
          body: "A bank's AI mortgage processing programme was deprioritised after interest rate changes reduced new mortgage volumes 40% below the assumption in the scoring model. The governance committee communicated the reprioritisation with the full quantitative reasoning: 'the value potential score dropped from 4 to 2 based on revised volume projections; this moved the initiative from rank 1 to rank 4; the team is redeployed to the re-scored top priority.' The execution team understood and accepted the change. An earlier ad-hoc reprioritisation without explanation had produced team attrition.",
        },
        {
          title: "A manufacturer — protecting a 30-month horizon initiative",
          body: "A manufacturer's AI materials science programme — a 30-month programme to develop AI-assisted compound property prediction — was at risk of deprioritisation in every quarterly review as operational AI initiatives produced visible short-term outcomes. The programme team introduced quarterly milestone reporting: 'model trained on X compounds; accuracy on novel compound prediction at Y%; literature coverage at Z%.' The milestone evidence, though not yet a business outcome, gave the committee concrete evidence of progress and protected the programme through five quarterly reviews. It produced its first commercial application in month 28.",
        },
      ],
    }),
    buildSection({
      number: "3.8",
      title: "Presenting the Portfolio to Leadership",
      subtitle: "The business leader's guide to a credible AI ROI conversation",
      take: "A credible AI portfolio presentation to leadership contains five elements: the strategic context for AI investment, the portfolio composition across horizons and risk levels, the value committed and value realised to date, the three-to-five active initiatives with their scoring and status, and the forward plan including the quarterly review mechanism. It takes fifteen minutes. It does not require anyone to understand a machine learning model.",
      why: "AI portfolio presentations fail when they lead with technology and end with financials that nobody trusts. They succeed when they lead with business outcomes and let the technology be the delivery mechanism for those outcomes. The business leader's job is to translate, not to educate.",
      paragraphs: [
        [
          s("Open with the business outcome narrative, not the technology narrative. "),
          x(
            "'Our AI programme has delivered £2.1M in cost reduction and £0.8M in revenue contribution in the past 12 months, against a £1.4M investment' is the opening. 'We have deployed three machine learning models and are evaluating a large language model for customer service' is the supporting detail.",
            "Financial audiences — CFOs, audit committees, boards — want to see capital allocation discipline before technology sophistication. Leading with outcomes earns the credibility to have the roadmap conversation. Leading with technology earns a question about why this is different from the last three IT programmes that did not deliver.",
          ),
          s(" Outcomes first, technology second — every time."),
        ],
        [
          s("Present the scoring model as the governance artefact. "),
          x(
            "Showing the scoring model — even in summary form — communicates to leadership that AI investment decisions are made on the same disciplined basis as capital expenditure decisions. It also communicates that individual initiative approvals are earned against criteria, not lobbied for.",
            "A thirty-second description of the scoring model: 'We evaluate every AI initiative on five criteria — value potential, time to value, data readiness, implementation complexity, and strategic alignment — with pre-agreed weights. Everything in the portfolio scored above 3.0; everything outside it is deferred with conditions for re-entry.'",
          ),
          s(" The scoring model description converts AI portfolio governance from a black box to a transparent discipline."),
        ],
        [
          s("End with the forward plan and the governance mechanism. "),
          x(
            "Leadership needs to know two things about the future: what is the expected value trajectory, and who is accountable for keeping the programme on track. The forward plan answers the value trajectory question: 'expected additional value of £3.4M from current portfolio over the next 18 months, with two new initiatives entering assessment in Q3.'",
            "The governance mechanism answers the accountability question: 'this committee reviews portfolio performance quarterly against the scoring model; priority changes require documented justification against pre-stated conditions; deferred initiatives have owners monitoring their re-entry conditions.'",
          ),
          s(" Governance mechanism clarity earns investment confidence — it tells leadership that this programme will not drift undetected."),
        ],
      ],
      examples: [
        {
          title: "A retail bank — outcome-first presentation converts sceptic to champion",
          body: "A retail bank's Chief Digital Officer had a board member who was publicly sceptical of AI investment. The CDO redesigned the quarterly AI update to open with a single slide: '£3.2M delivered against £1.9M invested in 14 months. Three programmes producing measurable outcomes; two in deployment phase.' The sceptic's first question in the subsequent board session: 'What is preventing us from investing more?' The technology details followed in the appendix, reviewed only by those interested.",
        },
        {
          title: "An insurer — scoring model as board governance artefact",
          body: "An insurer's Group Executive Committee requested that AI investment be governed with the same rigour as capital expenditure. The AI committee presented the five-criterion scoring model, showing how current portfolio initiatives had been selected and how the model prevented ad-hoc sponsorship. The GEC approved the model as the governance standard. Subsequently, initiative approvals could reference the scoring without a full business case review — saving three weeks per initiative in approval cycle time.",
        },
        {
          title: "A manufacturer — forward plan that maintained investment through a down quarter",
          body: "A manufacturer's AI programme delivered below-expected value in Q2 due to an integration delay. The forward plan presentation showed: Q2 shortfall of £180K; integration delay resolved; Q3 and Q4 expected to recover the shortfall with the two initiatives now fully deployed. The board approved continued investment because the forward plan gave them evidence of recoverability. Without the forward plan, the Q2 shortfall would have been the only data point — and the data point was not good.",
        },
      ],
    }),
  ],
  quiz: [
    {
      q: "Your finance director asks for a single-point ROI estimate for an AI programme. You have a conservative estimate of £1.2M and an optimistic estimate of £4.8M over three years. What is the correct response?",
      options: [
        "Provide the midpoint: £3M.",
        "Provide the optimistic estimate to support the business case.",
        "Defend the range as more accurate than any point estimate: provide both estimates with the conditions under which each applies.",
        "Defer to the technology team to provide the number.",
      ],
      correct: 2,
      correctFeedback:
        "Right. AI benefit realisation is genuinely probabilistic and phased. A range with defined conditions is more honest and more useful than a point estimate that implies false precision. The conditions (adoption rate, model performance trajectory, data quality improvement) are the variables that finance can track. Re-read section 3.1.",
      wrongFeedback:
        "A single-point estimate conceals the genuine uncertainty in AI benefit realisation. The range, with conditions, is the more useful and more defensible input to the investment decision. Re-read section 3.1.",
    },
    {
      q: "The scoring model ranks a proposed AI initiative fourth out of five candidates. The initiative's sponsor is a senior leader who insists it should be first. What is the governance-correct response?",
      options: [
        "Move the initiative to first to maintain the senior relationship.",
        "Ask the sponsor to identify which scoring criterion is incorrect and provide evidence to support a rescore. Criteria and evidence change the ranking; seniority does not.",
        "Remove the initiative from consideration entirely to resolve the conflict.",
        "Commission an external review to decide.",
      ],
      correct: 1,
      correctFeedback:
        "Right. Scoring models exist precisely to replace seniority-based prioritisation. The governance-correct response asks the sponsor to engage with the criteria rather than override them. If the sponsor has better evidence than the current score reflects, the model should incorporate it. Re-read section 3.2.",
      wrongFeedback:
        "Yielding to seniority undermines the governance model and signals that the scoring process is optional. Every subsequent prioritisation debate will reference this precedent. Re-read sections 3.2 and 3.6.",
    },
    {
      kind: "categorize",
      q: "Sort each dependency type into the correct category.",
      categories: ["Data dependency", "Infrastructure dependency", "Governance dependency", "Organisational dependency"],
      items: [
        { text: "Initiative B requires the customer identity resolution dataset that initiative A will create.", category: 0 },
        { text: "Initiative B requires an ML model serving platform that initiative A will procure and configure.", category: 1 },
        { text: "Initiative B is a high-automation process that requires the AI override and audit framework established in initiative A.", category: 2 },
        { text: "Initiative B requires the AI change management capability that initiative A will build in the operational team.", category: 3 },
      ],
      correctFeedback:
        "Right. All four dependency types can affect portfolio sequencing. Data and infrastructure dependencies are visible; governance and organisational dependencies are frequently invisible until the dependent initiative tries to start. Re-read section 3.4.",
      wrongFeedback:
        "Dependency types determine the sequencing logic. Confusing governance dependencies with infrastructure dependencies leads to initiatives that have the technical capability but not the governance framework required to deploy. Re-read section 3.4.",
    },
    {
      q: "Your AI portfolio currently has six initiatives with an average expected time to first business outcome of 19 months. What is the most important corrective action?",
      options: [
        "Accept it — AI takes time.",
        "Add at least one initiative with a time-to-value under six months to maintain stakeholder evidence cadence before the portfolio loses confidence.",
        "Cancel all long-horizon initiatives.",
        "Increase the budget to accelerate all existing initiatives simultaneously.",
      ],
      correct: 1,
      correctFeedback:
        "Right. A portfolio with no near-term evidence of outcome will lose stakeholder confidence before it produces value. Adding a six-month initiative protects credibility for the longer-horizon programmes. Re-read section 3.3.",
      wrongFeedback:
        "Stakeholder confidence in AI programmes is sustained by evidence at a cadence that matches the leadership review cycle. A 19-month average time to value will not produce evidence in time for six-month reviews. Re-read section 3.3.",
    },
    {
      q: "A priority update is proposed mid-cycle because a department head has a new compelling use case. Which condition would justify acting on this outside the quarterly review?",
      options: [
        "The department head is a C-suite member.",
        "The use case was not evaluated in the last cycle.",
        "A material business condition has changed — for example, a competitor has deployed the same capability and is materially affecting win rates.",
        "The use case scored above threshold in the department head's own assessment.",
      ],
      correct: 2,
      correctFeedback:
        "Right. Material business condition changes are one of the pre-stated conditions that justify a mid-cycle priority update. Seniority, novelty, and self-assessed scoring are not conditions — they are pressure. Re-read section 3.7.",
      wrongFeedback:
        "Pre-stated conditions protect the portfolio cadence from ad-hoc disruption. Only conditions that meet the pre-stated criteria justify a mid-cycle update. Re-read sections 3.6 and 3.7.",
    },
    {
      kind: "order",
      q: "Order the elements of an AI portfolio presentation from first to last.",
      prompt: "Drag to arrange the correct presentation sequence (top = first).",
      items: [
        "Business outcome narrative: value delivered against investment to date.",
        "Portfolio composition: horizon balance, risk balance, active initiative count.",
        "Active initiatives: scoring, status, and evidence for each.",
        "Forward plan: expected value trajectory and new initiatives entering assessment.",
        "Governance mechanism: review cadence, priority change conditions, accountability.",
      ],
      correctFeedback:
        "Right. Outcomes first earns the credibility to present the portfolio details. Governance last demonstrates the control environment that protects the future investment. Re-read section 3.8.",
      wrongFeedback:
        "Starting with technology or initiative details before establishing business outcomes loses the attention of financial audiences. Outcomes earn the licence to explain how the programme works. Re-read section 3.8.",
    },
  ],
});
