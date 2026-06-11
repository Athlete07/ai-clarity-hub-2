import { buildChapter, buildSection, s, x } from "../concepts-bl-helpers";

export const chapter09BlAvoidingAiInitiativeFailure = buildChapter({
  slug: "bl-avoiding-ai-initiative-failure",
  number: 9,
  shortTitle: "Avoiding AI Failure",
  title: "Avoiding AI Initiative Failure — The Business Leader's Diagnostic Guide",
  readingMinutes: 22,
  summary:
    "AI initiative failure rates are high — consistently estimated at 70-80% of enterprise AI projects that fail to deliver on their original business case. This chapter examines the eight most consistent failure patterns and gives business leaders the diagnostic tools to identify and interrupt them before they consume budget and credibility.",
  keyTakeaway:
    "Most AI initiative failures are not technology failures — they are governance, strategy, data, change management, and leadership failures that happen to involve technology. Business leaders who understand the failure patterns can prevent most of them. The ones they cannot prevent, they can detect early and respond to before the failure becomes a write-off.",
  pmCallout:
    "As a business leader: your job is to be the early warning system for the failure patterns that technology teams cannot see — change resistance, strategic drift, vendor dependency, and leadership disengagement. These are the failures only you can prevent.",
  sections: [
    buildSection({
      number: "9.1",
      title: "The AI Initiative Failure Rate",
      subtitle: "Why the numbers are high and what business leaders can do about it",
      take: "Enterprise AI initiative failure rates of 70-80% are well-documented and consistent across industries. The primary causes are not model performance or technology limitations — they are failures in problem definition, data quality, change management, and governance. Business leaders who understand this distribution of failure causes are in a position to prevent the vast majority of failures through leadership decisions, not technology investments.",
      why: "Leaders who attribute AI failure to technology limitations become passive — they wait for technology to improve. Leaders who attribute failure to governance, strategy, and change management become active — they intervene in the factors they control.",
      paragraphs: [
        [
          s("The failure cause distribution changes what leaders should focus on. "),
          x(
            "Research consistently finds that fewer than 20% of AI initiative failures are primarily attributable to technology limitations — the model could not perform the required task. The remaining 80% fail because: the problem was not well enough defined to evaluate success (25%), the data was not fit for purpose (20%), the AI output was not adopted by the users who needed to act on it (15%), the initiative was not aligned with business strategy (10%), or governance and oversight failed to detect and correct drift (10%).",
            "These causes are all within the business leader's sphere of influence. Problem definition is a leadership activity. Data fitness is a governance question. Adoption is a change management responsibility. Strategic alignment is a senior leadership obligation. Governance is a committee design and leadership attention question.",
          ),
          s(" 80% of AI failures are in the business leader's sphere of influence — not the technology team's."),
        ],
        [
          s("The failure distribution varies by industry and maturity. "),
          x(
            "Highly regulated industries have additional failure causes: regulatory compliance failures, data governance violations, and explainability requirements that were not designed into the system from the beginning. Early-maturity AI programmes have higher problem definition and data quality failure rates. More mature programmes have higher adoption and governance failure rates — the technology works, but the organisation does not change with it.",
            "Business leaders who know their organisation's maturity stage can focus diagnostic attention on the failure causes most prevalent at that stage. First AI programme: focus on problem definition and data quality. Second to fifth programme: focus on adoption and governance. Beyond five programmes: focus on strategic drift and leadership disengagement.",
          ),
          s(" Focus diagnostic attention on the failure causes most prevalent at your organisation's maturity stage."),
        ],
        [
          s("The pre-mortem is the most cost-effective failure prevention tool. "),
          x(
            "A pre-mortem is a structured exercise conducted before an AI initiative launches: the team imagines it is 18 months in the future and the initiative has failed, then works backward to identify the most plausible failure causes. Pre-mortems consistently surface failure risks that forward-looking planning misses because forward-looking planning is optimistic; backward-looking failure imagination is not.",
            "A 90-minute pre-mortem before a major AI initiative launch is the highest-ROI governance activity available. It costs nothing, it surfaces the failure causes the team is least comfortable discussing, and it produces specific mitigation designs for the most material risks.",
          ),
          s(" Run a pre-mortem before every major AI initiative launch — 90 minutes, unlimited upside."),
        ],
      ],
      examples: [
        {
          title: "McKinsey research — failure rate confirmation",
          body: "McKinsey's 2024 State of AI report found that 72% of enterprise AI initiatives failed to deliver on their stated business case. The primary causes reported by respondents: inadequate problem definition (27%), data quality and access issues (23%), inability to scale beyond pilot (18%), change management failure (15%), governance gaps (9%), and technology limitations (8%). The distribution was consistent across industries, with only the proportions shifting based on regulatory environment and AI maturity level.",
        },
        {
          title: "A manufacturer — pre-mortem that saved a programme",
          body: "A manufacturer ran a pre-mortem for its AI predictive maintenance initiative. The most voted failure scenario: 'The AI produces alerts that maintenance engineers don't trust and don't act on, so equipment continues to fail at the previous rate but we now have a monitoring system that nobody uses.' This failure scenario — an adoption failure, not a technology failure — produced a governance action: a dedicated trust-building programme with maintenance engineers, including explanations of how the AI reached its conclusions and a 90-day confidence-building period where engineers validated alerts before acting. Adoption at 6 months was 81%, among the highest the company had recorded for any new tool.",
        },
        {
          title: "A bank — maturity-stage failure focus",
          body: "A retail bank with six completed AI deployments applied failure cause analysis to its failure history. Data quality had been the primary cause of its first two failures; adoption failures had caused the next two; the most recent two had been governance failures — the models were performing and being used, but nobody was monitoring drift and the governance oversight had lapsed. The bank redirected its programme management investment: from data quality controls (largely in place) to AI performance monitoring and governance cadence (the current failure frontier).",
        },
      ],
    }),
    buildSection({
      number: "9.2",
      title: "The Pilot Trap",
      subtitle: "Why AI programmes that succeed in pilot fail at scale",
      take: "The pilot trap is when an AI initiative succeeds in a controlled, resourced, monitored pilot environment and then fails to replicate that success in production at scale. The trap is caused by four conditions that are systematically different between pilot and production: data quality, exception rate, governance intensity, and leadership attention. Business leaders who understand the trap design pilots that test production conditions, not pilot conditions.",
      why: "Pilots that are designed to succeed — with the best data, the most engaged users, the most attentive leadership — produce misleading evidence. Pilots that are designed to test production conditions produce realistic evidence. The difference in pilot design determines whether the scale-up decision is based on evidence or on optimism.",
      paragraphs: [
        [
          s("Pilot data is systematically cleaner than production data. "),
          x(
            "Pilots are typically run on a curated subset of data — the cleanest historical records, the most complete data fields, the best-governed data sources. Production data includes the full distribution: incomplete records, legacy system artefacts, edge cases, and exception types that the pilot data did not contain.",
            "The design fix: require a pilot data audit that compares the pilot dataset characteristics to the production dataset characteristics. If the pilot data is materially cleaner (fewer missing fields, lower exception rate, more complete historical coverage), the pilot performance is not representative of production performance.",
          ),
          s(" Pilot data audit: compare pilot dataset quality to production dataset quality before interpreting pilot results."),
        ],
        [
          s("Pilot exception rates are lower than production exception rates. "),
          x(
            "Pilots are often run on the most standard, most common cases — the central distribution of the process volume. Exceptions — the non-standard cases that require different handling — are frequently excluded from pilot scope to reduce complexity. When the AI deploys at production scale, the exception rate it encounters is higher than the pilot rate, and its performance on exceptions is untested.",
            "The design fix: include a representative sample of exception types in the pilot scope. Measure AI performance separately on standard cases and exception cases. If AI performance on exceptions is below the performance required for the production deployment design, the deployment design must include a separate exception handling track.",
          ),
          s(" Include exceptions in pilot scope and measure performance separately — exception performance determines production design."),
        ],
        [
          s("Pilot governance intensity cannot be maintained at scale. "),
          x(
            "Pilots run with high management attention, dedicated programme resources, engaged users who know they are being observed, and responsive vendor support. None of these conditions are sustained at scale. The AI at production scale operates with normal management attention, shared programme resources, users who have other priorities, and vendor support at standard SLA response times.",
            "The design fix: halfway through the pilot, deliberately reduce the governance intensity to production-representative levels. Run the second half of the pilot with the resources and attention the production deployment will have, not the resources of the pilot phase. The second half performance is the production performance indicator.",
          ),
          s(" Reduce governance intensity to production levels in the second half of the pilot — that performance is the production indicator."),
        ],
      ],
      examples: [
        {
          title: "A bank — pilot data audit reveals the gap",
          body: "A bank's AI loan application processing pilot achieved 96% straight-through processing with no human intervention required. A data audit comparing the pilot dataset to the production dataset revealed: the pilot had used records from one branch system with 94% data completeness; the production environment included three branch systems, one legacy and one acquired, with 67% and 71% data completeness respectively. When the AI deployed to production, straight-through processing was 71% — significantly below the pilot figure. The data audit would have predicted this; it was run post-deployment rather than pre.",
        },
        {
          title: "An insurer — exception inclusion changes the deployment design",
          body: "An insurer's AI claims triage pilot included standard claim types only — 80% of the claim volume. Exception claim types (complex liability, multi-party, legal dispute) were excluded from pilot scope. Pilot performance: 94% accuracy. When the deployment design was being finalised, a claims operations manager asked: 'What are we doing with the 20% exception cases?' The question had not been answered — the pilot had not addressed them. A 6-week exception pilot was run. Accuracy on exceptions: 61% — far below acceptable. The production design added an exception routing track with human assessors, significantly changing the automation scope and the business case.",
        },
        {
          title: "A logistics company — mid-pilot governance reduction",
          body: "A logistics company's AI route optimisation pilot ran for 12 weeks. In week 7, the programme manager deliberately reduced governance intensity: the dedicated project manager became part-time on the programme, vendor support reverted to standard SLA, and driver check-in frequency was reduced to the planned production cadence. Weeks 7-12 performance: route efficiency 6.2% below weeks 1-6 performance. The reduction was caused by a dispatch coordinator workflow issue that had been caught and corrected quickly in weeks 1-6 with dedicated programme support, and which recurred in weeks 7-12 without it. The workflow issue was fixed before production deployment — a fix that would have been discovered in production without the mid-pilot governance reduction.",
        },
      ],
    }),
    buildSection({
      number: "9.3",
      title: "Data Underestimation",
      subtitle: "The failure cause that business leaders can prevent before it happens",
      take: "Data problems are the most consistent cause of AI initiative failure after the pilot phase — and they are almost always predictable from information that is available before the initiative launches. Business leaders who insist on a rigorous data assessment before investment approval prevent the most common failure class. Leaders who accept 'data is mostly available' as a sufficient answer fund the most common failure.",
      why: "Data assessment is the least glamorous part of AI investment preparation. It is also the part where business leader insistence on rigour has the greatest impact on programme success rates. Technology teams underestimate data problems because data assessment is tedious and does not advance the interesting AI work. Business leaders who enforce data assessment discipline change this dynamic.",
      paragraphs: [
        [
          s("Four data problems cause AI failure — and all four are detectable in advance. "),
          x(
            "Volume insufficiency: not enough historical examples to train a robust model. Quality failure: historical data is inaccurate, inconsistent, or inconsistently labelled. Accessibility barriers: data exists but cannot be accessed for AI training due to system, governance, or contractual reasons. Distribution shift: historical data does not represent the future cases the AI will encounter in production.",
            "Each problem has a specific diagnostic question: volume — how many labelled historical examples exist? quality — what is the error rate and consistency score on the existing data? accessibility — what access approvals and technical integration are required? distribution — how similar is the historical period to the expected production period?",
          ),
          s(" Four diagnostic questions, four data problems, all answerable before investment approval."),
        ],
        [
          s("'Data is mostly available' is not a data assessment. "),
          x(
            "Investment proposals frequently describe data status as 'data is available', 'we have historical data', or 'the data team has access to the required sources'. None of these statements constitute a data assessment. A data assessment specifies: volume of labelled examples, completeness rate, consistency score, access pathway with timeline, and distribution comparison to expected production cases.",
            "Business leaders who accept qualitative data availability statements without requiring quantitative data assessment answers approve investments with unknown data risk. The data assessment is a two-to-four week exercise. The failure it prevents is a six-to-twelve month programme rebuild.",
          ),
          s(" Require a quantitative data assessment — not a qualitative data availability statement."),
        ],
        [
          s("Data problems that emerge during a programme are harder to manage than ones identified before it. "),
          x(
            "A data problem identified before investment approval is a pre-condition — it either delays the investment until the problem is resolved or changes the investment scope. A data problem identified after investment approval — during the build or pilot phase — is a programme disruption that has cost both money and timeline.",
            "The pre-assessment culture requires business leaders to treat incomplete data assessments as a reason to return the business case rather than approve it. The message: 'We need a complete data assessment before we can evaluate this proposal. Please resubmit when you have the four diagnostic answers.'",
          ),
          s(" Return business cases without complete data assessments — do not approve with data uncertainty unresolved."),
        ],
      ],
      examples: [
        {
          title: "A healthcare insurer — four diagnostic questions reveal the problem",
          body: "A healthcare insurer applied the four-question data assessment to a proposed AI fraud detection initiative. Volume: 12,000 labelled fraud cases over 3 years. Quality: 23% of fraud labels had been applied inconsistently across two claims systems (discovered in the assessment). Accessibility: one data system required a legal review of its data use terms before AI training use was permitted. Distribution: fraud patterns had shifted significantly in the most recent 18 months compared to the 18 months prior. Three of four diagnostic questions produced problems. The initiative was deferred pending data quality remediation and legal review. The remediation took 4 months — the programme launched on a sound data foundation.",
        },
        {
          title: "A bank — 'data available' causes a rebuild",
          body: "A bank's AI mortgage document classification investment was approved on the basis of 'mortgage document data is available in the document management system'. The statement was true — but incomplete. When the data team began the extraction, they found: document labelling was inconsistent across three document management systems used over 12 years; 34% of documents had no classification label; and the oldest system (containing 40% of the historical volume) had a different document type taxonomy from the other two. A 6-month data remediation project was required before model training could begin. The pre-approval data assessment would have identified this in 3 weeks.",
        },
        {
          title: "A retailer — distribution shift discovered",
          body: "A fashion retailer's AI demand forecasting initiative training data covered 2019-2022. A data assessment question on distribution comparison found: purchasing patterns in 2020-2021 (peak of e-commerce growth during the pandemic) were significantly different from 2023 in-store and omnichannel patterns. A model trained on 2019-2022 data would learn pandemic-era patterns that had reverted. The data scope was adjusted to 2022-2024 only — significantly reducing training volume but significantly improving representativeness. The assessment prevented a model trained on systematically unrepresentative data.",
        },
      ],
    }),
    buildSection({
      number: "9.4",
      title: "Misaligned Success Metrics",
      subtitle: "When the AI works and the business doesn't notice",
      take: "Misaligned success metrics occur when the metric used to evaluate an AI initiative is not the metric that matters to the business. The AI optimises for the evaluation metric, achieves it, and still fails to move the business outcome it was funded to address. This failure mode is preventable — but only if the success metric is specified in business outcome terms before the initiative is designed.",
      why: "Technical teams design AI systems to optimise the metric they are given. If the metric is model accuracy, they will achieve high accuracy. If the metric is processing throughput, they will process quickly. If neither accuracy nor throughput is the business outcome — if the business outcome is customer satisfaction or revenue — the AI will optimise the wrong thing.",
      paragraphs: [
        [
          s("The success metric must be the business outcome, not the technical proxy. "),
          x(
            "Model accuracy is a technical proxy for business performance — it is necessary but not sufficient. An AI that is 95% accurate at classifying customer support queries but does not improve first-call resolution rate has not achieved the business outcome. The success metric should be: first-call resolution rate, not query classification accuracy.",
            "The discipline: for every proposed AI success metric, ask 'is this the business outcome the investment was justified on, or is it a technical proxy for that outcome?' Proxies can be tracked as operational metrics; they should not be the primary success measure for investment evaluation.",
          ),
          s(" Business outcome metric first; technical proxy metrics as supporting indicators only."),
        ],
        [
          s("Specify the metric measurement method at investment approval, not at evaluation time. "),
          x(
            "Business outcome metrics must be measured in specific systems with specific methodologies. 'Customer satisfaction' measured as call centre CSAT has a different baseline and a different trajectory than 'customer satisfaction' measured as NPS survey. Specifying the measurement method after the initiative runs allows retrospective selection of the most favourable metric — which is not evaluation, it is confirmation bias.",
            "The investment approval should include: the specific metric, the specific measurement system, the baseline value at approval date, and the target value at evaluation date. All four specified in advance. Any change to the measurement method during the programme requires governance approval.",
          ),
          s(" Metric, measurement system, baseline, and target — all four specified at approval, not at evaluation."),
        ],
        [
          s("Misaligned metrics create misaligned incentives. "),
          x(
            "When the programme team is evaluated on technical proxy metrics — accuracy, throughput, deployment speed — they make decisions that optimise those metrics, not the business outcome. A programme team told 'hit 95% accuracy by month 6' will make decisions that hit 95% accuracy by month 6. Whether that accuracy translates to business outcome is not their incentive.",
            "Business outcome metrics create business outcome incentives. A programme team told 'reduce processing cost per transaction by 30% by month 12' makes different decisions — they consider adoption, governance, exception handling, and workflow redesign, because all of these affect the cost per transaction metric.",
          ),
          s(" Technical proxy incentives produce technical proxy performance. Business outcome incentives produce business outcomes."),
        ],
      ],
      examples: [
        {
          title: "A call centre — accuracy metric that missed the business",
          body: "A bank's AI call classification system achieved 97% topic classification accuracy — above the 93% target. First-call resolution rate, the business metric the system was funded to improve, decreased by 2 percentage points in the same period. The classification accuracy was real, but the routing logic built on the classifications had introduced inefficiencies. The AI had been designed and evaluated on classification accuracy; the business metric had not been in the success criteria. The programme was declared a technical success and a business failure.",
        },
        {
          title: "A retailer — NPS vs CSAT metric selection",
          body: "A retailer's AI customer service initiative was approved on the basis of 'improving customer satisfaction'. The measurement method was not specified. At evaluation, the programme manager presented CSAT data (which had improved 8 points) while the marketing director noted that NPS (which was the metric the retail strategy used as its primary customer satisfaction indicator) had declined 3 points. Both measurements were legitimate; the absence of a pre-specified metric and measurement method produced a disputed evaluation that consumed three months of governance resource to resolve.",
        },
        {
          title: "A bank — business outcome incentive changes programme decisions",
          body: "A bank's AI mortgage pre-screening team was originally given an accuracy target: 91% classification accuracy by month 6. The CDO changed the success metric to: cost per mortgage decision reduced by 25% by month 12. The programme team's decisions changed immediately: they added a workflow redesign workstream (not in the original plan) because workflow inefficiency was the second largest driver of decision cost. They added an adoption milestone because adoption determined how many decisions the AI processed (and therefore the cost per decision). Both additions would have been absent under the accuracy metric — and both were critical to delivering the business outcome.",
        },
      ],
    }),
    buildSection({
      number: "9.5",
      title: "Change Management Neglect",
      subtitle: "The failure cause that only the business leader can prevent",
      take: "Change management neglect is the failure cause that is most predictably present when AI initiatives succeed technically and fail to deliver business outcomes. Technology teams do not own change management — they deliver the AI. Business leaders own the people, the processes, and the performance measures that determine whether AI outputs become business outcomes. Change management neglect is a leadership failure.",
      why: "AI that is not adopted does not deliver ROI regardless of technical performance. Adoption requires that people change how they work — which requires understanding, motivation, capability, and leadership attention. None of these appear automatically; all of them require design and investment.",
      paragraphs: [
        [
          s("Change management for AI requires more than training. "),
          x(
            "Training tells people how to use an AI tool. Change management changes the workflow, the performance measures, the incentives, and the culture that determines whether people use the AI tool and whether using it produces business outcomes.",
            "The distinction is operationally significant: a training programme that teaches claims handlers to use an AI interface does not redesign their workflow to incorporate AI recommendations into their standard decision process, does not adjust their performance metrics to reward AI-assisted throughput, and does not address the supervisors who explicitly or implicitly signal that AI recommendations are not to be trusted.",
          ),
          s(" Change management is workflow redesign, incentive alignment, and leadership modelling — not just training."),
        ],
        [
          s("Adoption is a metric, not an assumption. "),
          x(
            "Adoption should be measured — with a specific definition of what counts as adoption, a specific measurement method, and specific milestones at which adoption is assessed. 'Tool is available' is not adoption. 'User has logged in' is not adoption. '70% of eligible users incorporating AI recommendation into their documented decision rationale at least 3 times per week' is adoption.",
            "When adoption is not measured, it is assumed — and it is assumed to be higher than it is. Post-deployment adoption assessments consistently find adoption rates 20-40 percentage points below what the programme team assumed.",
          ),
          s(" Define adoption specifically, measure it explicitly, and milestone it before deployment."),
        ],
        [
          s("Leadership modelling is the single most powerful adoption driver. "),
          x(
            "When senior leaders visibly use AI tools in their own decisions — referring to AI recommendations in meetings, citing AI insights in decisions, asking for AI-informed analysis in briefings — the signal to the organisation is unambiguous: AI is how we work now, not a tool deployed for those below.",
            "When senior leaders visibly avoid AI tools — defaulting to intuition, requesting human-only analysis, ignoring AI recommendations in their own decision process — the signal is equally unambiguous. Leadership behaviour propagates adoption faster and more durably than any training programme.",
          ),
          s(" Senior leader AI tool use is the most powerful adoption signal — model the behaviour you want."),
        ],
      ],
      examples: [
        {
          title: "A logistics company — change management gap identified post-deployment",
          body: "A logistics company's AI route optimisation system was deployed after a training programme covering system interface and alert interpretation. Six months post-deployment, a usage analysis found that 68% of dispatchers had logged in but only 31% were incorporating AI route recommendations into their dispatch decisions. Exit interviews found: supervisors were not using AI in their own decisions (modelling non-adoption); performance metrics had not been updated (dispatchers were measured on the same metrics as before AI, which did not reward AI-assisted speed); and the workflow had not been redesigned (AI recommendations required a separate step outside the existing dispatch process). All three issues were change management failures, not technology failures.",
        },
        {
          title: "A bank — adoption milestone at 30 days triggers intervention",
          body: "A bank's AI document processing system had a 30-day post-deployment adoption milestone: 65% of document processing staff using the AI-assisted workflow for at least 80% of eligible documents. At 30 days, adoption was 38%. The milestone trigger activated a pre-designed change management intervention: a team-level workshop, a workflow redesign for the two document types with lowest adoption, and a performance metric update to include AI-assisted throughput. At 90 days, adoption was 72%. Without the milestone and the triggered intervention, the adoption problem would not have been detected until the 6-month ROI review — by which time the adoption pattern would have been established and more difficult to change.",
        },
        {
          title: "A manufacturer — CEO models AI tool use",
          body: "A manufacturer's CEO received AI-generated quality insights in her weekly plant performance briefing and began asking for them explicitly: 'What does the AI quality model show for Line 3 this week?' During plant visits, she asked floor managers 'have you seen the AI alert on this section?' — and followed up when they had not. Within three months, quality engineers had begun integrating AI insights into their standard weekly reporting because the CEO's questions made it clear that AI-informed analysis was expected. No training programme was required; the CEO's behaviour was the adoption driver.",
        },
      ],
    }),
    buildSection({
      number: "9.6",
      title: "Vendor Over-Reliance",
      subtitle: "When the vendor relationship becomes a dependency that controls your programme",
      take: "Vendor over-reliance occurs when an organisation's AI capability depends on a single vendor to such a degree that the vendor has pricing power at renewal, can change functionality without the organisation's consent, and has the ability to exit the relationship with consequences the organisation cannot manage. Business leaders who manage vendor relationships as partnerships manage risk; those who create dependency manage escalating cost and fragility.",
      why: "Vendor over-reliance is the AI failure mode that develops slowly and becomes visible at the worst moment — at renewal, when the vendor has maximum leverage; at a critical deployment, when vendor availability determines programme success; or at a regulatory review, when vendor-held data and models cannot be audited.",
      paragraphs: [
        [
          s("Vendor dependency develops through three accumulation paths. "),
          x(
            "Data dependency: your AI training data and model weights live in the vendor's systems, inaccessible if you leave. Integration dependency: your systems are so deeply integrated with the vendor's API that switching requires rebuilding integrations across multiple downstream applications. Capability dependency: your internal team has not maintained any capability in the domain the vendor covers — if the vendor exits, no internal capability exists to fill the gap.",
            "Most organisations accumulate all three dependency types without a deliberate decision — they accumulate through individual procurement decisions that optimise for near-term convenience. The governance mechanism that prevents accumulation is explicit dependency assessment at each procurement decision.",
          ),
          s(" Three dependency types, all preventable through explicit procurement governance."),
        ],
        [
          s("Contract protections reduce dependency risk before it accumulates. "),
          x(
            "Four contract provisions significantly reduce vendor dependency risk: data portability (right to export all training data and model weights in a standard format on 30 days notice), API stability (minimum 90-day notice of any API changes), pricing caps (maximum annual increase percentage at renewal), and source code escrow (access to source code in defined exit scenarios).",
            "These provisions are negotiable — vendors resist them but will accept them to close deals with sophisticated buyers. Business leaders who approve AI vendor contracts without these provisions are accepting dependency risk that their technology teams may not have flagged.",
          ),
          s(" Four contract provisions that reduce vendor dependency: data portability, API stability, pricing caps, escrow."),
        ],
        [
          s("Maintain minimum internal capability in every AI domain your organisation depends on. "),
          x(
            "When a vendor covers an entire AI domain — your claims processing AI, your fraud detection AI, your customer intelligence AI — the minimum internal capability is the ability to evaluate vendor performance independently, to brief replacement vendors, and to manage the transition period if the vendor exits. This requires at least one internal person per major AI domain who understands the system deeply enough to perform these three functions.",
            "Organisations that outsource entire AI domains to vendors without maintaining this internal capability cannot evaluate whether the vendor is performing, cannot competitively bid replacement vendors, and cannot manage an unplanned vendor transition. The minimum capability is cheap; the absence of it is expensive.",
          ),
          s(" Maintain minimum internal capability per AI domain: evaluation, briefing, and transition management at minimum."),
        ],
      ],
      examples: [
        {
          title: "A bank — data portability clause prevents lock-in",
          body: "A bank's procurement team negotiated a data portability clause into a credit scoring AI vendor contract: all training data, model weights, and performance benchmarks were to be exportable in a standard format on 30 days notice, with no vendor restriction on use with alternative systems. Two years later, the vendor was acquired by a competitor bank. The acquisition made the data sharing relationship untenable. The data portability clause allowed an orderly transition to an alternative vendor within the 30-day window, with no data loss and no model rebuild required.",
        },
        {
          title: "A retailer — pricing power at renewal",
          body: "A fashion retailer's AI demand forecasting system had been deeply integrated over 18 months: vendor API calls from the buying system, the warehouse management system, and the merchandising planning tool. At renewal, the vendor increased pricing by 55%. The retailer's switching cost analysis: £1.2M in re-integration, 9 months of parallel running, and 6 months of model retraining on the new platform. Switching was economically unviable. The 55% increase was accepted. The integration depth had eliminated competitive bidding at renewal. A pricing cap clause would have prevented the outcome.",
        },
        {
          title: "A manufacturer — internal capability prevents transition crisis",
          body: "A manufacturer maintained one senior data scientist as an internal capability representative for each major AI domain, even where vendors provided the primary AI service. When their quality control AI vendor experienced a security incident and suspended service for three weeks, the internal data scientist was able to: evaluate the situation independently (not relying on the vendor's assessment), brief two alternative vendors (using documentation the internal person had maintained), and implement a manual fallback protocol for the three-week period. The transition was managed without a production quality incident.",
        },
      ],
    }),
    buildSection({
      number: "9.7",
      title: "Leadership Disengagement",
      subtitle: "The failure cause that only leaders can create — and only leaders can fix",
      take: "Leadership disengagement from an AI programme is the most reliably predictive failure indicator available. When the senior sponsor stops attending governance meetings, stops requiring evidence updates, stops asking about programme progress, and stops modelling the behaviours that signal AI matters — the programme begins its drift toward failure within quarters. Leadership attention is the resource that sustains everything else.",
      why: "AI programmes require sustained leadership attention because they require sustained organisational change. The technology is the easy part — it either works or it does not, and engineers will tell you which. The hard part is maintaining the organisational conditions — strategy alignment, change management, governance rigour, and resource protection — that produce business outcomes from a working technology. Only leadership attention maintains these conditions.",
      paragraphs: [
        [
          s("Leadership disengagement has a predictable sequence. "),
          x(
            "Stage 1: the sponsor stops attending quarterly reviews because other priorities fill the calendar. Stage 2: programme managers stop escalating issues to the sponsor because the sponsor is unavailable. Stage 3: governance decisions that should be made at leadership level are deferred or made below the required authority. Stage 4: resource competition is resolved against AI because AI has no leadership advocate. Stage 5: adoption stalls because the signal of leadership priority has disappeared.",
            "The sequence typically plays out over 6-12 months. Each stage makes the next more likely. The intervention point is Stage 1 — before the cascade begins. Catching and addressing the first missed quarterly review is infinitely cheaper than reversing Stage 5.",
          ),
          s(" Intervene at Stage 1 — the first missed quarterly review — before the cascade begins."),
        ],
        [
          s("Structural commitments protect against disengagement. "),
          x(
            "Leadership attention that is committed in advance — named in the governance calendar, specified in the programme charter, and required for milestone approval — is more durable than leadership attention that is discretionary. Discretionary attention competes with every other priority and loses to urgency.",
            "Structural commitments: quarterly review attendance as a named governance requirement; milestone sign-off requiring named executive sponsor signature; model the behaviour by asking AI-informed questions in standard business reviews; and programme update as a standing item in the direct report one-on-one cadence.",
          ),
          s(" Structural commitments to governance attendance protect engagement against competing priorities."),
        ],
        [
          s("Re-engage visibly when disengagement has begun. "),
          x(
            "When a programme leader recognises that leadership attention has waned — and the sequence has begun — the corrective action is visible re-engagement: attending the next governance meeting and chairing it, asking the programme team for a briefing and attending it with full preparation, and publicly reinforcing the programme's priority in the next team communication.",
            "Visible re-engagement signals to the programme team that the leadership priority is real, to the stakeholder community that the programme has executive support, and to the technology team that their work is being evaluated at leadership level. The signal value of visible re-engagement is disproportionate to the time investment.",
          ),
          s(" Visible re-engagement — chair the next meeting, attend with preparation — resets the programme signal immediately."),
        ],
      ],
      examples: [
        {
          title: "An insurer — cascade prevented at Stage 1",
          body: "An insurer's AI claims programme sponsor missed two consecutive quarterly reviews due to a major M&A project. The programme director flagged the Stage 1 signal to the AI governance committee chair. The chair scheduled a one-hour programme briefing with the sponsor within 10 days, re-established the quarterly review commitment in the sponsor's calendar, and delegated specific milestone sign-off decisions to a named deputy during the M&A period. The cascade was interrupted at Stage 1. By month 6, the M&A project had concluded and the sponsor resumed direct programme oversight.",
        },
        {
          title: "A bank — structural commitment that protected attention",
          body: "A bank's Chief Retail Officer had AI programme quarterly review attendance written into her performance objectives for the year — a structural commitment rather than a discretionary calendar item. When three consecutive months of competing priorities compressed the calendar, the quarterly review attendance was protected because it was a performance objective. In the same period, two other executive sponsor AI programmes lost their governance attendance — and both experienced Stage 3-4 cascade effects within six months.",
        },
        {
          title: "A retailer — visible re-engagement after six-month disengagement",
          body: "A retailer's CDO had disengaged from the AI personalisation programme for six months during a platform migration crisis. When she returned to active programme oversight, she did not send an email — she attended the next governance meeting and chaired it, asked the programme team for a programme health briefing and attended it with written questions, and publicly cited AI personalisation outcomes in the next company all-hands. Programme team engagement scores, which had declined during the disengagement period, recovered to pre-disengagement levels within 8 weeks of the visible re-engagement.",
        },
      ],
    }),
    buildSection({
      number: "9.8",
      title: "Scope Creep",
      subtitle: "When the initiative becomes everything — and delivers nothing",
      take: "Scope creep in AI initiatives is the gradual expansion of initiative scope beyond the original business case — driven by technical enthusiasm, stakeholder requests, and the natural human tendency to do more when the tools are interesting. Scope creep is the most invisible failure mode: it feels like progress because the team is doing more. It produces failure because the original business outcome is deferred or diluted by the expanded scope.",
      why: "AI scope creep is more damaging than conventional IT scope creep because the additional scope typically involves new data sources, new model training, and new integration — each of which adds complexity, timeline, and delivery risk. Conventional scope creep delays a feature; AI scope creep delays the business case.",
      paragraphs: [
        [
          s("Scope creep has three common sources in AI programmes. "),
          x(
            "Technical enthusiasm: the data science team discovers capabilities during development that seem exciting and expand scope without a business case. Stakeholder requests: business units see the AI initiative and request capabilities for their own processes without going through the investment assessment process. Mission expansion: the programme evolves from 'AI for this specific business outcome' to 'AI platform for all related business outcomes' — with a business case that justified only the first.",
            "Each source has a different management response. Technical enthusiasm is managed with a strict scope definition and a product backlog for future phases. Stakeholder requests are managed by requiring new requests to go through the standard investment assessment process. Mission expansion is managed by returning the programme to its documented scope and requiring a new business case for any expansion.",
          ),
          s(" Three sources, three management responses — none of which involve accepting the expanded scope without a new business case."),
        ],
        [
          s("The scope definition document is the anti-scope-creep tool. "),
          x(
            "A scope definition document specifies: what the initiative includes, what it explicitly excludes, and the governance process for changing the scope. The 'explicitly excludes' section is as important as the inclusion list — it creates a documented record that specific capabilities were considered and not included in this phase, which makes scope addition requests require reference to the documented exclusion.",
            "Scope definition documents that are one-paragraph descriptions of what the initiative does are not scope control tools. Scope definition documents that name what is excluded and why are. The exclusion list is the business leader's protection against 'but we thought it was included' conversations.",
          ),
          s(" The explicitly excludes section is as important as the inclusion list — write it with the same specificity."),
        ],
        [
          s("Scope change requires a governance event, not a conversation. "),
          x(
            "When scope change is managed through informal conversations — 'can we add this', 'the team is going to extend to include that' — scope creep is indistinguishable from planned expansion. Every scope change, however small, must go through a defined governance event: a scope change request form, reviewed by the business leader, with impact assessment (cost, timeline, resource), and a documented approval or rejection.",
            "This governance overhead is often resisted as bureaucratic in the early stages of an AI programme when the team is focused on progress. It is the overhead that preserves the integrity of the business case — and that makes post-delivery evaluation possible because the evaluated scope matches the approved scope.",
          ),
          s(" Every scope change, however small, through a documented governance event — not a conversation."),
        ],
      ],
      examples: [
        {
          title: "A bank — technical enthusiasm scope creep",
          body: "A bank's AI mortgage document classification initiative began with a specific scope: classify five standard document types for the digital mortgage application. During development, the data science team discovered the model could also extract key data fields from the documents — a genuinely valuable capability. The team expanded scope to include field extraction without a scope change governance event. The field extraction requirement added four months to the timeline and doubled the testing requirement. The original classification capability was delivered 4 months late. The field extraction scope could have been a Phase 2 initiative with its own business case.",
        },
        {
          title: "An insurer — exclusion list prevents scope addition",
          body: "An insurer's AI claims triage scope definition document explicitly excluded: 'Complex liability claims (defined as involving third-party legal representation), multi-party claims, and claims with active litigation. These claim types are excluded from Phase 1 scope and will be assessed for inclusion in Phase 2 following Phase 1 performance evaluation.' When the claims operations director requested inclusion of multi-party claims in month 4, the exclusion list was referenced: the request was logged as a Phase 2 candidate, not incorporated into Phase 1. The Phase 1 scope remained intact; multi-party claims were assessed in Phase 2 on the evidence from Phase 1.",
        },
        {
          title: "A retailer — governance event culture",
          body: "A fashion retailer's AI personalisation programme processed 11 scope change requests over 18 months. Each required a scope change form with cost and timeline impact assessment, reviewed by the CDO. Eight were approved; three were rejected. The three rejections — each a reasonable idea with genuine value — were redirected to the Phase 2 planning process. The CDO noted: 'The governance overhead was about 20 hours of total effort across 11 requests. The programme delivered within 8% of the original timeline. Comparable programmes without this discipline typically run 40-60% over original timeline.'",
        },
      ],
    }),
    buildSection({
      number: "9.9",
      title: "The Business Leader's Pre-Mortem",
      subtitle: "The 90-minute investment that prevents the most expensive failures",
      take: "The pre-mortem is the single highest-ROI failure prevention activity available to a business leader before an AI initiative launches. In 90 minutes, a well-facilitated pre-mortem surfaces the failure modes the optimistic planning process misses, produces specific mitigation designs for material risks, and creates a shared failure vocabulary that the team uses throughout the programme. Every major AI initiative should have a pre-mortem before it launches.",
      why: "Pre-mortems work because they exploit a cognitive asymmetry: forward-looking planning is optimistic (we will succeed if we execute well); backward-looking failure imagination is realistic (we failed because we didn't think about X). The pre-mortem uses the realistic framing to surface risks that optimistic planning conceals.",
      paragraphs: [
        [
          s("Run the pre-mortem with the full programme team — and the business leader in the room. "),
          x(
            "Pre-mortems run by programme teams without the business leader present produce a list of operational risks that the team is comfortable surfacing to each other. Pre-mortems with the business leader present surface the risks the team would not normally raise in a leadership context — scope concerns, resource inadequacy, governance gaps, stakeholder alignment problems — because the pre-mortem's explicit brief is to imagine failure, not to manage upward.",
            "The business leader's presence also enables the pre-mortem to produce decisions, not just a risk list. When a material risk is surfaced that requires a leadership decision — additional resource, a scope change, a governance redesign — the business leader can make it in the room.",
          ),
          s(" Business leader in the room — pre-mortems without leadership present surface only team-comfortable risks."),
        ],
        [
          s("Structure: imagine failure first, then identify causes. "),
          x(
            "The pre-mortem structure: open by declaring 'It is 18 months from now. This initiative has failed. Not partially — it has genuinely failed to deliver the business outcome it was funded for.' Then: 'Write down the most plausible cause of that failure. Don't self-censor.' Each participant writes silently for five minutes. Then round-robin sharing, themed grouping, and probability-impact ranking.",
            "The silent writing before sharing is critical — it prevents anchoring on the first-stated risk, which is typically the risk the most senior or most confident person is comfortable with. The round-robin after silent writing surfaces the risks the less senior participants would not have offered in an open discussion.",
          ),
          s(" Silent writing before sharing — prevents anchoring on the most-vocal participant's first stated risk."),
        ],
        [
          s("Close the pre-mortem with specific mitigations and named owners. "),
          x(
            "A pre-mortem that ends with a risk list but no mitigations is a stress test without a response plan. For the three to five risks rated highest by probability and impact, the pre-mortem should produce: the specific mitigation action, the person responsible for implementing it, and the date by which it will be in place.",
            "The pre-mortem output is a one-page risk-mitigation action plan — not a risk register. The distinction: a risk register records risks; a pre-mortem action plan commits to mitigations. The commitment makes the difference between surface-level risk identification and genuine risk management.",
          ),
          s(" Mitigation owner and date for the top three to five risks — the pre-mortem closes with commitments, not a list."),
        ],
      ],
      examples: [
        {
          title: "A bank — pre-mortem surfaces the critical concern",
          body: "A bank's AI mortgage pre-screening pre-mortem produced 23 failure scenarios in the silent writing phase. The highest-ranked: 'Compliance team does not approve the AI decision logic before the deployment date, forcing a last-minute scope change to human-in-the-loop that eliminates 80% of the cost reduction benefit.' This risk had not appeared in the programme plan. The mitigation action: compliance engagement begins 16 weeks before the deployment date rather than 8 weeks (as planned). Owner: programme director. Date: immediate. The action was taken. Compliance approved the decision logic at week 14 — 2 weeks before the original engagement start date, and 8 weeks before deployment. The risk was mitigated; the deployment proceeded as planned.",
        },
        {
          title: "A manufacturer — pre-mortem produces a scope change",
          body: "A manufacturer's AI quality control pre-mortem produced the following highest-ranked failure scenario: 'Quality engineers do not trust the AI on newly introduced component types because the training data does not include those components, and they override the AI on 80% of decisions, making the system useless for the 30% of production volume involving new components.' The business leader in the room made an immediate decision: the scope definition was changed to exclude new-component quality checks from the AI deployment for the first six months, with a programme to add new-component training data over that period. The scope change was made in the pre-mortem — before design began — at zero cost. Discovering it post-deployment would have cost a significant redesign.",
        },
        {
          title: "A retailer — pre-mortem action plan tracked throughout the programme",
          body: "A retailer's AI personalisation pre-mortem produced five mitigations with named owners and dates. The programme director added the five mitigations as standing items in every monthly programme review: mitigation status reported alongside milestone status. Three mitigations were fully implemented as planned. One was partially implemented — the incentive redesign was delayed by an HR cycle. The delay was flagged in month 4 and the incentive change was accelerated. One was superseded by a governance design change. The pre-mortem action plan was a live programme governance document for 18 months — not a one-time exercise.",
        },
      ],
    }),
  ],
  quiz: [
    {
      q: "A proposed AI initiative business case describes data status as 'data is available from our CRM and transaction systems'. What is the correct governance response?",
      options: [
        "Accept it — data availability is confirmed.",
        "Return the business case for a quantitative data assessment covering volume, quality, accessibility, and distribution before considering approval.",
        "Approve the initiative with a data assessment as a phase 1 deliverable.",
        "Ask the technology team to confirm the data statement before the next committee.",
      ],
      correct: 1,
      correctFeedback:
        "Right. 'Data is available' is not a data assessment. A quantitative data assessment covering the four diagnostic dimensions — volume, quality, accessibility, and distribution — is required before investment approval. Approving without it is accepting data risk that is preventable. Re-read section 9.3.",
      wrongFeedback:
        "Qualitative data availability statements do not address the specific failure causes that data problems represent. A quantitative assessment is required before commitment. Re-read section 9.3.",
    },
    {
      q: "An AI customer service initiative has achieved 97% topic classification accuracy but first-call resolution rate has declined. What failure pattern does this represent?",
      options: [
        "Technology failure — the AI is not accurate enough.",
        "Misaligned success metrics — the AI optimised for the technical proxy (classification accuracy) rather than the business outcome (first-call resolution rate).",
        "Change management failure — staff are not using the AI.",
        "Data underestimation — the training data was insufficient.",
      ],
      correct: 1,
      correctFeedback:
        "Right. Classification accuracy is a technical proxy for the business outcome. When the proxy improves and the business outcome does not, the success metric was misaligned. The AI optimised for what it was measured on, not for what the investment was intended to deliver. Re-read section 9.4.",
      wrongFeedback:
        "97% accuracy is a technical success. The failure is in the alignment between the technical metric and the business outcome. Re-read section 9.4.",
    },
    {
      kind: "order",
      q: "Order the leadership disengagement cascade stages from first to last.",
      prompt: "Drag to arrange from the first stage of disengagement (top) to the final stage (bottom).",
      items: [
        "The sponsor stops attending quarterly reviews.",
        "Programme managers stop escalating issues to the unavailable sponsor.",
        "Governance decisions are deferred or made below the required authority level.",
        "Resource competition resolves against AI because there is no leadership advocate.",
        "Adoption stalls because the signal of leadership priority has disappeared.",
      ],
      correctFeedback:
        "Right. The cascade is sequential and each stage makes the next more likely. The intervention point is Stage 1 — the first missed quarterly review. Catching and addressing it there is infinitely cheaper than reversing Stage 5. Re-read section 9.7.",
      wrongFeedback:
        "The cascade is a predictable sequence that begins with missed governance attendance and ends with adoption failure. Each stage is caused by the previous one. Re-read section 9.7.",
    },
    {
      q: "A data science team discovers during AI development that the model could also perform a valuable additional function not in the original scope. What is the correct governance response?",
      options: [
        "Include it — the team is already working on it and the capability is valuable.",
        "Log it as a Phase 2 candidate, require a scope change governance event with cost and timeline impact assessment if inclusion in Phase 1 is being considered, and document it in the scope change register.",
        "Tell the team to stop — all out-of-scope capabilities are rejected.",
        "Informally agree to include it but do not update the business case.",
      ],
      correct: 1,
      correctFeedback:
        "Right. Every scope change, however valuable, requires a governance event — not an informal inclusion. The additional capability may be genuinely valuable; it should enter Phase 2 planning or trigger a formal scope change with impact assessment. Re-read section 9.8.",
      wrongFeedback:
        "Informal scope inclusion is scope creep. It delays the original business case without approval and makes post-delivery evaluation impossible because the evaluated scope doesn't match the approved scope. Re-read section 9.8.",
    },
    {
      q: "You are facilitating a pre-mortem for a major AI initiative. After the facilitator declares 'the initiative has failed', what is the next step?",
      options: [
        "Open the floor for discussion of failure causes.",
        "Each participant writes the most plausible failure cause silently for five minutes before sharing round-robin.",
        "Ask the programme lead to present the risk register.",
        "Vote on which failure causes are most likely.",
      ],
      correct: 1,
      correctFeedback:
        "Right. Silent writing before sharing prevents anchoring on the first stated risk and surfaces the risks less senior participants would not raise in open discussion. The round-robin after silent writing is what makes the pre-mortem produce risks that optimistic planning missed. Re-read section 9.9.",
      wrongFeedback:
        "Open floor discussion produces the risks the most senior or confident participant is comfortable raising. Silent writing before sharing is the design element that surfaces the risks planning missed. Re-read section 9.9.",
    },
    {
      kind: "categorize",
      q: "Sort each failure symptom into its primary failure pattern.",
      categories: ["Pilot trap", "Change management neglect", "Vendor over-reliance", "Scope creep"],
      items: [
        { text: "AI achieves 96% accuracy in pilot; production deployment shows 71% because production data quality is lower.", category: 0 },
        { text: "AI is deployed; 6 months later, only 29% of eligible users are incorporating AI recommendations into their decisions.", category: 1 },
        { text: "Vendor increases price 55% at renewal because switching cost is £1.2M in re-integration.", category: 2 },
        { text: "AI mortgage document classification initiative expands to include data field extraction during development, adding 4 months to the timeline.", category: 3 },
      ],
      correctFeedback:
        "Right. Pilot trap = production performance diverges from pilot performance due to systematic environmental differences. Change management neglect = AI is deployed but not adopted. Vendor over-reliance = vendor has pricing power at renewal due to switching cost. Scope creep = initiative scope expands beyond original business case. Re-read sections 9.2, 9.5, 9.6, and 9.8.",
      wrongFeedback:
        "Each failure pattern has a distinct symptom. Pilot trap is about the pilot-to-production gap; change management is about adoption rate; vendor over-reliance is about pricing power at renewal; scope creep is about timeline and cost from expanded scope. Re-read sections 9.2, 9.5, 9.6, and 9.8.",
    },
  ],
});
