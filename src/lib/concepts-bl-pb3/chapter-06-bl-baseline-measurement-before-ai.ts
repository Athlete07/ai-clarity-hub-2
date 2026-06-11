import { buildChapter, buildSection, s, x, BL_CALLOUT } from "../concepts-bl-helpers";

export const chapter06BlBaselineMeasurementBeforeAi = buildChapter({
  slug: "bl-baseline-measurement-before-ai",
  number: 6,
  shortTitle: "Baseline Before AI",
  title: "Baseline Measurement Before AI: The Foundation of Credible ROI",
  readingMinutes: 27,
  summary:
    "The baseline is the most important measurement in any AI investment — and the most consistently neglected. Without a documented, Finance-approved baseline measured before deployment, every ROI claim is an assertion, not an evidence-based result. This chapter builds the baseline measurement discipline that makes post-deployment ROI credible.",
  keyTakeaway:
    "A baseline measured after deployment is not a baseline — it is a post-hoc benchmark. Business leaders who insist on pre-deployment baseline measurement and Finance sign-off are the ones whose post-deployment ROI reports survive scrutiny without revision.",
  pmCallout: BL_CALLOUT,
  sections: [
    buildSection({
      number: "6.1",
      title: "Why baselines determine business case credibility",
      subtitle: "The three ways a weak baseline destroys an otherwise strong ROI claim",
      take: "A weak or missing baseline destroys ROI credibility in three ways: it allows cherry-picking of the most favourable pre-deployment comparison point, it invites Finance to challenge the entire ROI claim rather than the specific numbers, and it creates a political dispute about what actually changed rather than a management conversation about how to improve.",
      why: "Leaders who own the baseline own the ROI narrative. Leaders who delegate or skip baseline measurement cede the narrative to whoever has the most convenient number — and that is rarely the programme sponsor.",
      paragraphs: [
        [
          s("Destruction one: retrospective baselines are inherently negotiable. "),
          x(
            "A baseline established after results are known — 'we believe performance was X before deployment' — is retrospective and negotiable. Finance can challenge the figure, Operations can produce a different version, and the ROI calculation becomes a political negotiation rather than a measured comparison.",
            "Every retrospective baseline is selected, consciously or unconsciously, to make the post-deployment comparison look as favourable as possible. Even honest selections are subject to this bias. Finance knows this — which is why they discount retrospective baselines.",
          ),
          s(" Treat retrospective baselines as inadmissible for significant AI ROI claims — the only acceptable baseline is one measured and documented before deployment."),
        ],
        [
          s("Destruction two: single-period baselines miss cyclical variation. "),
          x(
            "A baseline measured in one quarter may reflect a peak, a trough, or a transition that is not representative of normal performance. An AI deployment measured against a particularly bad quarter will appear to produce dramatic improvement; measured against a particularly good quarter it will appear to produce none.",
            "Rolling averages over 12 months — or period-equivalent comparisons for seasonal businesses — are the correct baseline structure. They smooth cyclical variation and make the comparison representative.",
          ),
          s(" Use rolling 12-month averages for baselines, not single-quarter snapshots."),
        ],
        [
          s("Destruction three: undocumented baselines invite audit failure. "),
          x(
            "An ROI claim that is subjected to an internal audit or Finance review cannot be defended if the baseline is undocumented. 'We measured it before deployment' is not a defensible answer. A documented baseline has: the metric name, the measurement methodology, the data source, the measurement period, the resulting figure, and the Finance sign-off date.",
            "Audit-proof documentation of the baseline is not bureaucratic overhead — it is the evidence that converts an ROI claim from an assertion to a fact.",
          ),
          s(" Document every baseline with all six elements before deployment: metric, methodology, data source, period, figure, and Finance sign-off."),
        ],
      ],
      examples: [
        {
          title: "Insurance — retrospective baseline challenged",
          body: "An insurer's AI claims processing tool claimed a 31% cost reduction at the six-month review. Finance requested the pre-deployment baseline documentation. The programme team produced a figure based on 'the team's recollection of the previous year's average.' Finance commissioned an independent baseline from system data. The independent figure was 18% lower than the recollected figure — reducing the claimed improvement from 31% to 11%. The programme was not cancelled, but credibility was damaged for all subsequent AI claims submissions.",
        },
        {
          title: "Retailer — seasonal baseline error",
          body: "A retailer deployed AI demand forecasting in October. Their baseline was September data — the final pre-deployment month. Post-deployment comparison in November showed dramatic improvement. The comparison was valid — and also largely due to the normal November seasonal uplift that had always characterised the business. Without a 12-month rolling baseline, the seasonal effect was attributed to AI. The retrospective analysis six months later corrected the attribution but the initial overclaim had already been reported to the board.",
        },
        {
          title: "Healthcare — documented baseline surviving audit",
          body: "A hospital's AI diagnostic support tool was subjected to a clinical governance audit 18 months post-deployment. The auditors requested the pre-deployment baseline. The programme team produced a six-page baseline documentation pack: the diagnostic accuracy metric, the measurement methodology (audit of 300 cases by two independent reviewers), the data source (clinical records system), the measurement period (four months pre-deployment), the resulting figure (87.4% accuracy), and Finance sign-off date. The audit took 20 minutes. The baseline was accepted without revision.",
        },
      ],
    }),
    buildSection({
      number: "6.2",
      title: "What to measure before deploying AI",
      subtitle: "The metric categories that form a complete baseline — and how to prioritise when time is limited",
      take: "A complete AI baseline covers five metric categories: process performance (speed, volume, quality), cost (per transaction, per hour, per error), human behaviour (time allocation, task breakdown, override rate equivalent), customer or output quality, and risk and compliance indicators. When time is limited, prioritise the metrics that will appear in the primary ROI claim.",
      why: "Measuring the wrong things before deployment produces a baseline that cannot be compared to post-deployment results. A baseline only has value if it measures the same things that will be measured after deployment — in the same way, on the same population.",
      paragraphs: [
        [
          s("Process performance metrics are the most frequently measured and the most frequently misconfigured. "),
          x(
            "Time-per-task, volume-per-day, and error rate are the standard process performance baseline metrics. The misconfiguration risk: measuring average time when median is more representative of typical performance; measuring total volume when the relevant comparison is AI-eligible volume; measuring total errors when the AI only addresses a subset of error types.",
            "Define precisely which transactions, which tasks, and which error types will be affected by the AI deployment — and measure the baseline only on that specific population. A baseline on the full process inflates the denominator when the AI only addresses a fraction of the work.",
          ),
          s(" Define the AI-eligible population before measuring the baseline — and measure the baseline on that population only."),
        ],
        [
          s("Cost baselines require fully-loaded calculation, not just direct cost. "),
          x(
            "A cost baseline that captures direct labour cost only — ignoring management overhead, system cost, rework cost, and quality assurance cost — understates the true cost the AI is replacing. Fully-loaded cost baselines are larger and produce larger apparent ROI — but they must be calculated consistently between pre and post deployment.",
            "The cost allocation methodology — how overheads are distributed across tasks — must be the same before and after deployment. Changes in overhead allocation between the baseline and post-deployment periods invalidate the comparison.",
          ),
          s(" Use the same cost allocation methodology for the baseline and post-deployment measurements — document the methodology before deployment."),
        ],
        [
          s("Human behaviour baselines are the most neglected and the most valuable. "),
          x(
            "How do people currently spend their time on the tasks AI will affect? Time tracking data, activity monitoring, or structured observation studies provide the behavioural baseline. This baseline enables the productivity ROI chain: AI changes behaviour → behaviour change produces time saving → time saving is redeployed.",
            "Without a behavioural baseline, the productivity ROI chain cannot be completed. Saying 'AI saves 40% of task time' without knowing how much time is currently spent on the task produces a meaningless saving estimate.",
          ),
          s(" Conduct a structured time allocation study for all roles significantly affected by AI deployment — as a baseline measurement requirement, not as an optional people analytics project."),
        ],
      ],
      examples: [
        {
          title: "Financial services — AI-eligible population baseline",
          body: "A bank's AI document review tool was expected to handle 60% of all incoming contract documents — the 'standard' category. The remaining 40% were complex multi-jurisdiction contracts requiring specialist review. The baseline was measured on the 60% AI-eligible population only: 4.2 hours per document, 12% error rate requiring rework. The 40% non-eligible population was excluded from the baseline and from the ROI claim. This precision prevented inflated ROI claims and made post-deployment comparison clean.",
        },
        {
          title: "Healthcare — fully-loaded cost baseline",
          body: "A hospital's AI scheduling tool baseline included: direct scheduler salary cost (£28K/year per scheduler), management overhead allocation (22% of direct cost), system costs per transaction (£0.34), and rework cost for scheduling errors (£84 per error at historical error rate). Fully-loaded cost per scheduling interaction: £4.12. Post-deployment AI-assisted cost: £1.84. Saving of £2.28 per interaction × 180K interactions per year = £410K. If only direct salary cost had been used in the baseline, the saving would have appeared as £120K.",
        },
        {
          title: "Professional services — time allocation study as baseline",
          body: "Before deploying AI research tools, a consulting firm commissioned a 4-week time allocation study for 80 analysts. Method: weekly structured time logs by category (client research, proposal writing, internal administration, business development, direct billable work). Baseline result: 34% of analyst time spent on research and document tasks within AI scope. This established the denominator for every productivity claim: if AI reduces research time, the saving is a fraction of the 34% — not of total analyst time.",
        },
      ],
    }),
    buildSection({
      number: "6.3",
      title: "Data collection methods for baseline",
      subtitle: "Four methods for gathering baseline data — and when each is appropriate",
      take: "Baseline data collection has four methods: system data extraction (most objective), structured observation (most accurate for complex tasks), time tracking studies (best for knowledge worker baselines), and process mining (most comprehensive for multi-step workflows). Each has cost, accuracy, and time implications that match different baseline requirements.",
      why: "Choosing the wrong data collection method produces a baseline that is either too expensive to collect, too inaccurate to be credible, or too narrow to cover the measurement scope. Matching the method to the metric type and available systems is a planning decision that determines whether the baseline can be collected before the deployment timeline.",
      paragraphs: [
        [
          s("System data extraction is the fastest and most objective method. "),
          x(
            "When the process being baselined runs through an existing system — ERP, CRM, case management system, clinical system — transaction logs, timestamps, and outcome records provide objective baseline data without human self-reporting bias.",
            "System data extraction does have gaps: it measures what the system records, not what actually happens. If workarounds exist — people completing tasks outside the system, recording outcomes at the wrong stage — the system data will not capture true performance. Shadow process mapping before data extraction identifies these gaps.",
          ),
          s(" Before extracting system data as a baseline, map the actual process against the recorded process — document any workarounds that affect what the system data shows."),
        ],
        [
          s("Structured observation is the most accurate for complex judgment tasks. "),
          x(
            "For tasks where the quality of judgment matters — clinical decisions, legal reasoning, financial analysis — structured observation by trained observers provides a baseline that system data cannot. A trained observer following a sample of professionals through their actual work produces a behavioural and quality baseline that time stamps cannot.",
            "Structured observation is expensive: it requires trained observers, management time, and three to six weeks of study. It is only appropriate for high-value, high-complexity tasks where the AI investment is above £500K and the ROI case depends on quality improvement evidence.",
          ),
          s(" Reserve structured observation for high-complexity, high-value tasks where quality is the primary ROI driver — use system data extraction for volume and time metrics."),
        ],
        [
          s("Process mining provides the most comprehensive view for multi-step workflows. "),
          x(
            "Process mining tools extract event logs from enterprise systems and map the actual process flow — including deviations, bottlenecks, rework loops, and wait times. For AI investments targeting workflow efficiency, process mining provides a baseline that neither system data extraction nor observation can fully capture.",
            "Process mining requires a compatible enterprise system (most modern ERP and BPM systems are compatible) and technical expertise to configure and interpret. Budget two to four weeks for a process mining baseline study. The output is a visual process map with time distributions — immediately comparable to post-deployment maps.",
          ),
          s(" For workflow AI investments, require a process mining baseline study as a pre-deployment deliverable — not an optional enhancement."),
        ],
      ],
      examples: [
        {
          title: "Financial services — system data exposing a workaround",
          body: "A bank extracted system data for their loan origination baseline. The data showed a mean processing time of 2.1 days — surprisingly fast. Shadow process mapping revealed that relationship managers were pre-completing forms manually before entering them into the system, effectively doing part of the work offline. True end-to-end processing time was 4.8 days. The shadow process added 2.7 days that system data did not capture. Correcting for the workaround doubled the baseline time — and doubled the apparent AI saving.",
        },
        {
          title: "Healthcare — structured observation for clinical quality",
          body: "A hospital deployed AI diagnostic support for emergency medicine. The quality baseline required structured observation: 12 trained observers followed emergency physicians for 6 weeks, rating diagnostic reasoning quality on a validated scale and recording time-to-diagnosis. Observation baseline: mean diagnostic quality score 7.2/10, mean time-to-diagnosis 28 minutes. Post-deployment: 8.4/10, 19 minutes. The structured observation baseline was the only defensible methodology for a quality improvement claim in a clinical setting.",
        },
        {
          title: "Insurance — process mining revealing the real baseline",
          body: "An insurer used process mining for their claims processing baseline. The visual process map revealed: 34% of claims followed the standard process, 41% had one manual intervention loop, and 25% had two or more loops — significantly extending processing time for the majority of claims. System data showed mean processing time; process mining showed the distribution and the proportion of claims following each path. The AI was designed to eliminate the manual intervention loops — targeting the 66% of claims with loops, not the full 100%.",
        },
      ],
    }),
    buildSection({
      number: "6.4",
      title: "Process mapping for AI baseline",
      subtitle: "Why process mapping before AI deployment is the step most programmes skip and most programmes regret",
      take: "AI cannot optimise a process that is not understood. Process mapping before AI deployment reveals the actual current state — not the documented intended process — including workarounds, manual interventions, handoff failures, and quality inconsistency. This map becomes both the baseline and the AI design specification.",
      why: "AI deployments designed against documented intended processes rather than actual current-state processes consistently underperform. The gap between how the process is documented and how it actually runs is where AI designs fail — and where baseline measurements are systematically wrong.",
      paragraphs: [
        [
          s("Document the actual process, not the intended process. "),
          x(
            "Every organisation has a documented process (the procedure manual) and an actual process (what people do). For most mature processes, the gap between the two is significant. Workers have developed workarounds to address system limitations, approval bottlenecks, and quality failures that the official process does not acknowledge.",
            "AI deployed to optimise the documented process will fail in the actual process environment. Process mapping must capture what actually happens — through direct observation, process mining, and interviews with the people who do the work, not the people who designed the process.",
          ),
          s(" Conduct process mapping through direct observation and worker interviews — do not accept process documentation as the current-state baseline without validation."),
        ],
        [
          s("Identify the AI-eligible steps and the AI-ineligible steps separately. "),
          x(
            "Not every step in a process will be AI-assisted. The process map should distinguish clearly: which steps will AI replace or assist, and which will remain human-only? The AI-eligible steps are the baseline measurement scope. The AI-ineligible steps determine the maximum possible improvement from the AI deployment.",
            "If AI addresses only 40% of total process time, the maximum productivity improvement is 40% — not 100%. A process map makes this ceiling visible before expectations are set.",
          ),
          s(" Calculate the AI-eligible percentage of total process time before setting ROI targets — the ceiling is defined by process scope, not by AI capability."),
        ],
        [
          s("Map the quality failure points as well as the time failure points. "),
          x(
            "Process maps focused only on time miss the quality dimension: where in the process do errors occur, what causes them, and what is the downstream cost of each error type? AI designed to address quality failures needs a quality map, not just a time map.",
            "Quality failure maps also reveal whether AI will improve quality by automating error-prone steps (positive quality ROI) or by introducing new error types through AI misclassification (quality risk). Both are design inputs and baseline measurements.",
          ),
          s(" Add a quality failure overlay to the process map — noting where errors occur, their frequency, and their downstream cost."),
        ],
      ],
      examples: [
        {
          title: "Retail — documented vs actual process gap",
          body: "A retailer's AI purchasing approval tool was designed against the documented three-step approval process. Process mapping revealed the actual process had seven steps — including an informal senior buyer review that was not documented but was required for all transactions above £15K. AI designed for three steps failed at step four and generated workarounds within 48 hours of launch. A two-week redesign based on the actual process map resolved the issue — but at the cost of a delayed go-live and lost programme momentum.",
        },
        {
          title: "Financial services — AI-eligible ceiling calculation",
          body: "A bank's loan origination process map identified AI-eligible steps representing 38% of total end-to-end process time. The remaining 62% included regulatory customer interaction (human-required), credit committee review (human-required), and compliance validation (partially human-required). The maximum productivity improvement from AI was 38% × improvement rate within AI-eligible steps. This ceiling calculation prevented a business case from claiming 40%+ total process time savings — which would have required AI to address human-required steps.",
        },
        {
          title: "Healthcare — quality failure map informing AI design",
          body: "A hospital's clinical coding process map included a quality failure overlay: 73% of coding errors occurred at the primary diagnosis code step (downstream cost: insurance claim rejection). Secondary diagnosis codes had a 4% error rate with negligible financial impact. AI was designed to focus on primary diagnosis coding accuracy rather than speed. The quality failure map defined the AI design priority — without it, an AI optimised for speed would have addressed the wrong quality failure point.",
        },
      ],
    }),
    buildSection({
      number: "6.5",
      title: "Baseline pitfalls and how to avoid them",
      subtitle: "The six most common baseline measurement failures — and the governance change that prevents each",
      take: "Six baseline pitfalls account for the majority of AI ROI credibility failures: measuring too late, measuring on a convenience sample, failing to document the methodology, using inconsistent metrics before and after, capturing the wrong population, and ignoring the effect of the measurement itself on behaviour. Each has a specific prevention.",
      why: "These pitfalls are predictable and preventable. Leaders who know them before the baseline measurement phase can build a process that avoids them. Leaders who encounter them post-deployment face reconstruction costs that are always higher than prevention costs.",
      paragraphs: [
        [
          s("Pitfall one: measuring too late — the baseline collection starts after deployment announcement. "),
          x(
            "When employees know an AI deployment is coming, some change their behaviour — working harder to establish a high-performance baseline, or working less if they believe the AI will replace them. The period between deployment announcement and deployment go-live is a contaminated measurement period.",
            "Start baseline measurement as a standard analytical activity, separate from the AI deployment announcement. Baseline data collected as part of a general operational analytics programme is less subject to behaviour change than data collected in obvious preparation for an AI deployment.",
          ),
          s(" Collect baseline data before any announcement of AI deployment — or at minimum before announcement of the measurement programme."),
        ],
        [
          s("Pitfall two: convenience sample rather than representative sample. "),
          x(
            "Measuring baseline performance on the highest-performing team, the most experienced users, or the simplest transaction types produces an inflated baseline that AI will struggle to match. The reverse — measuring on the worst-performing subset — produces an artificially favourable comparison.",
            "A stratified sample covering all performance levels, experience bands, and transaction types is required for a representative baseline. Sample size should be large enough to produce stable estimates — a minimum of 100 transactions per transaction type, or four weeks of data for continuous processes.",
          ),
          s(" Require a stratified random sample design for every baseline measurement — and document the sampling methodology before collection begins."),
        ],
        [
          s("Pitfalls three through six: methodology, metric consistency, population, and Hawthorne effect. "),
          x(
            "Third: an undocumented methodology cannot be replicated post-deployment. Fourth: metrics that change definition between baseline and post-deployment (e.g., 'processing time' measured from different start points) produce phantom improvements. Fifth: baseline measured on the wrong population — all transactions versus AI-eligible only — inflates the denominator. Sixth: the Hawthorne effect — people performing better when they know they are being measured — requires a baseline observation window long enough to normalise behaviour.",
            "The single governance change that prevents most of these pitfalls: require Finance to review and countersign the baseline measurement plan before data collection begins. Finance involvement in the plan design catches most methodological errors before they occur.",
          ),
          s(" Require Finance sign-off on the baseline measurement plan — not just the baseline results — before collection begins."),
        ],
      ],
      examples: [
        {
          title: "Retailer — announcement timing pitfall",
          body: "A retailer announced AI stock management to the warehouse team in January and began baseline measurement in February. Comparison with historical system data later revealed that warehouse team accuracy in February was 14% better than the preceding six months — a measurement-period performance improvement that disappeared after go-live. The baseline had captured a behaviour change response to the announcement. The independent audit recommended using the six-month historical system data as the true baseline.",
        },
        {
          title: "Financial services — stratified sample preventing elite sample bias",
          body: "A bank initially proposed measuring their loan origination AI baseline on the top two performing branches — selected for 'data quality and consistency.' The CFO challenged the sample selection: 'If we measure baseline on the best performers, AI will appear to underperform.' The baseline was redesigned as a stratified random sample of 12 branches across three performance tiers. The resulting baseline was 18% lower performance than the original elite sample — and the post-deployment comparison was genuinely representative.",
        },
        {
          title: "Healthcare — Finance measurement plan sign-off",
          body: "A hospital required Finance countersignature on all baseline measurement plans for AI investments above £100K. On the first application, Finance identified that 'patient throughput' was being measured from admission to discharge in the baseline plan, but the AI impact was only on the triage-to-treatment segment. Finance required the baseline metric to align with the AI scope. The corrected baseline was three times smaller than the original — and so was the apparent AI improvement, but it was accurate.",
        },
      ],
    }),
    buildSection({
      number: "6.6",
      title: "Baseline documentation and sign-off",
      subtitle: "The documentation standard that makes baseline evidence audit-proof",
      take: "Audit-proof baseline documentation requires six elements: metric specification, measurement methodology, data source and extraction method, measurement period, sample description, and the Finance sign-off with date. A baseline that lacks any of these elements can be challenged — and in post-deployment ROI reviews, challenged baselines are routinely revised downward.",
      why: "Documenting the baseline completely before deployment is the highest-leverage governance action a business leader can take on an AI project. It costs two to three weeks of analytical work. It saves months of post-deployment dispute.",
      paragraphs: [
        [
          s("Metric specification must be unambiguous. "),
          x(
            "Not 'processing time' — but 'end-to-end processing time from document receipt timestamp in the intake system to approval timestamp in the case management system, excluding weekends and system downtime periods, for transactions categorised as standard in the transaction classification field.'",
            "Ambiguous metric specifications are exploited — not always dishonestly, but inevitably through the natural human tendency to interpret in a way that supports the conclusion the interpreter prefers. Unambiguous specifications remove this latitude.",
          ),
          s(" Write metric specifications that can be given to a new analyst six months later, and they will measure exactly the same thing you measured today — test this by giving the specification to someone not involved in the project."),
        ],
        [
          s("Data source documentation prevents the 'different version' problem. "),
          x(
            "Specifying the exact system, table, field names, query logic, and data extraction date prevents the post-deployment situation where someone produces a 'different version' of the baseline from the same system using slightly different query parameters.",
            "Store the baseline data extract (or a reference to the exact extract) alongside the baseline documentation. The data extract is the primary evidence; the calculated figures are derived from it.",
          ),
          s(" Store the raw baseline data extract (or a system-verified reference to it) alongside the baseline documentation — not just the calculated summary statistics."),
        ],
        [
          s("Finance sign-off should be a formal countersignature, not an email acknowledgement. "),
          x(
            "A formal countersignature — even a one-line signature on the baseline documentation pack — changes the political status of the baseline. It converts it from a programme claim to a jointly agreed fact.",
            "Finance countersignature also creates a shared responsibility for the baseline quality: if Finance signed off on the methodology, they are unlikely to challenge it twelve months later. They may challenge the post-deployment measurement, but not the baseline.",
          ),
          s(" Require a named Finance reviewer's countersignature on the baseline documentation — with date — before deployment approval."),
        ],
      ],
      examples: [
        {
          title: "Professional services — unambiguous metric specification",
          body: "A consulting firm's AI proposal tool baseline specification for 'proposal preparation time': 'Total hours logged under billing code PROP-01 and PROP-02 in the time-billing system, per proposal reference number, from first logged hour to document upload in the proposal management system, including all team member hours regardless of role, for proposals in the Commercial segment (client type code CM in the CRM) submitted between 1 January and 31 March 2025.' Three analysts independently measured the baseline from this specification and arrived at figures within 2% of each other.",
        },
        {
          title: "Manufacturing — data extract storage",
          body: "A manufacturer's AI quality inspection baseline documentation included a reference to the exact SQL query used to extract defect rate data from the MES system, the system environment (production, not UAT), and the extraction timestamp. When the post-deployment review attempted to reconstruct the baseline using a 'similar query,' the stored reference identified a parameter difference that would have changed the baseline by 11%. The stored extract prevented a phantom improvement of 11 percentage points.",
        },
        {
          title: "Financial services — Finance countersignature changing the conversation",
          body: "A bank required Finance Director countersignature on all AI baselines above £100K investment. At the 12-month post-deployment review for an AI credit tool, Finance itself challenged the post-deployment measurement methodology (not the baseline). The conversation was: 'Our baseline was agreed and signed — can you confirm the post-deployment measurement is consistent with the baseline methodology?' This inversion — Finance defending the baseline they had signed rather than challenging it — was noted as a governance success by the audit committee.",
        },
      ],
    }),
    buildSection({
      number: "6.7",
      title: "When the baseline changes after deployment",
      subtitle: "How to handle external changes, process changes, and market shifts that alter the comparison",
      take: "Baselines are measured in a world that continues to change after deployment. Market shifts, organisational restructuring, regulatory changes, and process improvements made simultaneously with AI deployment all alter the comparison. Business leaders need a framework for identifying when the baseline has become unrepresentative — and what to do about it.",
      why: "Rigid adherence to an invalidated baseline produces ROI claims that are technically compliant but factually misleading. Abandoning baselines at the first sign of external change produces a system where no comparison is ever possible. The correct approach is a documented materiality threshold for baseline revision.",
      paragraphs: [
        [
          s("Define a materiality threshold for baseline revision before deployment. "),
          x(
            "A baseline that is invalidated by a change of less than 10% may not require revision — the ROI claim remains materially accurate. A baseline invalidated by a change of more than 25% requires revision — the comparison is no longer representative.",
            "Agreeing the materiality threshold before deployment — and including it in the baseline documentation — means that when a concurrent change occurs, the decision about whether to revise the baseline is governed by an agreed rule, not by the programme team's interest in preserving a favourable comparison.",
          ),
          s(" Document the materiality threshold (typically 10–25%) in the baseline sign-off document — revisions exceeding this threshold require Finance review."),
        ],
        [
          s("Concurrent process changes require delta documentation. "),
          x(
            "If a process improvement, headcount change, or system upgrade occurs simultaneously with AI deployment, the ROI comparison is contaminated. Delta documentation — a record of all non-AI changes made to the process in the same period — allows Finance and the programme team to estimate what proportion of the improvement is attributable to AI versus other changes.",
            "Delta documentation is not optional when concurrent changes occur. Without it, the entire ROI claim is challengeable. With it, a defensible attribution split can usually be made — even if not perfectly precise.",
          ),
          s(" Maintain a concurrent change log from deployment date — all process, staffing, system, and market changes that affect the baseline metric must be recorded."),
        ],
        [
          s("Market shifts require external reference data. "),
          x(
            "If the market shifts during the measurement period — input costs change, customer volumes change, competitor actions change — the baseline comparison must account for the market effect. External reference data (industry benchmarks, market indices, competitor published metrics) provides the context for attributing improvement to AI versus market.",
            "A simple market adjustment: if your efficiency metric improved 18% and the industry average improved 12% in the same period, the AI-attributable improvement is approximately 6 percentage points. This rough attribution is more credible than claiming the full 18%.",
          ),
          s(" Track relevant industry benchmarks and market indices throughout the deployment period — use them to context-adjust ROI claims when market conditions shift materially."),
        ],
      ],
      examples: [
        {
          title: "Retailer — materiality threshold preventing invalid revision",
          body: "A retailer's AI demand forecasting baseline was partially affected when a new distribution centre opened three months after AI deployment. The operational team requested a baseline revision. Finance applied the agreed 15% materiality threshold: the new distribution centre affected approximately 8% of total forecasting volume — below the revision threshold. The baseline was maintained with a documented note on the 8% scope limitation. The ROI claim was slightly discounted to acknowledge the limitation rather than revised.",
        },
        {
          title: "Financial services — concurrent change log",
          body: "A bank deployed AI AML monitoring in Q2 while simultaneously implementing a new customer transaction categorisation system. The concurrent change log documented: the categorisation system went live 6 weeks after AI, affected 28% of transaction types in the AI scope, and was expected to improve baseline detection by 3–4 percentage points independently. The ROI report attributed the overall 31% improvement to AI and noted: 'Estimated 3–4 percentage points attributable to the parallel transaction categorisation system. AI-attributable improvement: 27–28 percentage points.' The attribution honesty strengthened the Finance credibility of the remaining claim.",
        },
        {
          title: "Healthcare — industry benchmark adjustment",
          body: "A hospital's AI surgical scheduling tool showed a 19% improvement in on-time surgical starts. In the same period, NHS benchmark data showed a 6% sector-wide improvement in surgical start performance — attributed to a new national guidance implementation. The programme team adjusted their claim: 'AI-attributable improvement: approximately 13 percentage points (19% total improvement less 6% sector-wide background improvement).' The adjusted claim was presented to the board with the industry data source cited. The board noted the intellectual honesty and approved the Phase 2 investment without further question.",
        },
      ],
    }),
    buildSection({
      number: "6.8",
      title: "BL decision lens: approving the baseline",
      subtitle: "The sign-off checkpoint that determines whether post-deployment ROI will be credible",
      take: "The baseline sign-off is a business leader decision, not a programme management routine. It is the moment at which the organisation commits to a specific, documented measurement of current-state performance that will determine whether the AI investment is judged a success or failure. The quality of this decision is the primary determinant of post-deployment ROI credibility.",
      why: "Leaders who treat baseline sign-off as a bureaucratic checkbox rather than a substantive decision consistently face post-deployment ROI disputes. Leaders who engage seriously with the baseline quality — challenging methodology, verifying population, and confirming Finance involvement — protect the programme from credibility failure.",
      paragraphs: [
        [
          s("Ask three questions before signing the baseline. "),
          x(
            "First: is this the actual process performance or the documented process performance? The answer should always be actual — if process mapping has not been done, the baseline is suspect. Second: is the measurement period long enough to account for seasonal variation? Twelve months is the standard; shorter periods require explicit justification. Third: has Finance reviewed and accepted the methodology? Not just the resulting figure — the methodology.",
            "If any answer is unsatisfactory, the baseline is not ready for sign-off. Delay is appropriate. A deployment that proceeds without a credible baseline produces an ROI report that no one will believe — including the programme sponsor.",
          ),
          s(" Use these three questions as your personal baseline sign-off checklist — answer each in writing before countersigning."),
        ],
        [
          s("Require the baseline to be presented to you in a briefing, not just sent for review. "),
          x(
            "A baseline documentation pack sent for review is a passive action. A 30-minute briefing from the programme team requires them to present the methodology, answer challenges, and confirm that Finance has been involved. The briefing format surfaces gaps that document review misses.",
            "The most common gap found in baseline briefings: Finance has been informed, not involved. 'We sent Finance a copy' is not the same as 'Finance reviewed and accepted the methodology.' The briefing format forces clarity on this distinction.",
          ),
          s(" Require a 30-minute baseline briefing from the programme team before sign-off — and confirm Finance involvement directly with the Finance reviewer."),
        ],
        [
          s("Confirm the baseline will be stored and accessible for the full life of the investment. "),
          x(
            "A baseline that cannot be retrieved at the 24-month post-deployment review is as useful as no baseline. Confirm the storage location, the access controls, and the retention commitment before sign-off.",
            "Programme teams frequently change during the life of an AI investment. The baseline documentation must be held in a durable location accessible to Finance, the governance committee, and the successor programme lead — not in the original programme manager's email inbox.",
          ),
          s(" Confirm the baseline storage location and access arrangement at sign-off — it should be in a shared location accessible to Finance and the governance committee."),
        ],
      ],
      examples: [
        {
          title: "Insurance — baseline briefing finding a gap",
          body: "An insurer's Head of Operations required a 30-minute baseline briefing before sign-off on an AI claims assessment tool. The briefing revealed that the process mapping had been done using workshop documentation rather than direct observation — a documented process, not an actual process map. The Head of Operations required a direct observation process map of 40 representative claims before sign-off. The observation map revealed a seven-step workaround not in the documentation. The baseline was revised. The post-deployment comparison was accurate.",
        },
        {
          title: "Financial services — Finance involvement confirmed directly",
          body: "A programme manager assured the CTO that Finance had 'reviewed' the baseline methodology. The CTO called the Finance Director directly. Finance had received a copy of the baseline but had not reviewed the methodology. The CTO held the sign-off until Finance completed a methodology review. Finance identified an inconsistency in the cost allocation methodology. The fix took four days. The baseline sign-off produced a Finance-endorsed document that survived a subsequent external audit without revision.",
        },
        {
          title: "Healthcare — baseline storage governance",
          body: "A hospital implemented an AI baseline storage protocol: all signed baseline documentation packs (including raw data extracts or system references) were held in a shared drive accessible to the programme governance committee, Finance, and the clinical governance team. Access was confirmed at each annual AI portfolio review. When the original programme manager departed 14 months after deployment, the baseline was retrieved by the successor and used without modification for the 24-month ROI review. The storage protocol had been a two-sentence addition to the project governance document.",
        },
      ],
    }),
  ],
  quiz: [
    {
      q: "Why is a baseline measured in the month immediately after an AI deployment announcement considered unreliable?",
      options: [
        "The measurement window is too short.",
        "Employees may change their behaviour in response to the announcement, contaminating the performance data.",
        "Deployment announcements always cause system outages that affect data quality.",
        "Post-announcement baselines are more accurate because employees are more engaged.",
      ],
      correct: 1,
      correctFeedback:
        "Correct. The Hawthorne effect and announcement-response behaviour (both working harder to establish a high baseline and working less in anticipation of AI) contaminate measurement in the post-announcement period. Re-read sections 6.1 and 6.5.",
      wrongFeedback:
        "Announcement-period baselines are subject to behavioural change. Re-read section 6.5 on baseline pitfalls.",
    },
    {
      q: "A business case claims AI will reduce processing time by 35%. The baseline was measured using the total process, but the AI only affects 40% of the process steps. What is the maximum achievable improvement?",
      options: [
        "35% — the AI design target.",
        "40% — the proportion of process steps AI addresses.",
        "Less than 40% — AI can only eliminate a fraction of the 40% it addresses, not all of it.",
        "35% plus the additional AI expansion scope.",
      ],
      correct: 2,
      correctFeedback:
        "Right. If AI addresses 40% of process time, the maximum productivity improvement is bounded by that 40% — and in practice, AI will not eliminate all of the time in its scope, only a portion of it. Re-read sections 6.2 and 6.4.",
      wrongFeedback:
        "The AI-eligible scope sets the ceiling for improvement. Re-read section 6.4 on process mapping.",
    },
    {
      kind: "order",
      q: "Order the correct baseline measurement sequence.",
      prompt: "Drag to arrange first step (top) to last (bottom).",
      items: [
        "Define the AI-eligible population and the metrics that will be measured.",
        "Select the data collection method (system extraction, observation, time tracking, or process mining).",
        "Conduct the baseline measurement before any deployment announcement.",
        "Document the six-element baseline pack and seek Finance methodology review.",
        "Obtain named Finance countersignature before deployment approval.",
      ],
      correctFeedback:
        "Correct sequence. Define scope, select method, measure before announcement, document fully, then get Finance sign-off. Re-read sections 6.2 through 6.6.",
      wrongFeedback:
        "The baseline sequence must be completed before deployment announcement. Re-read sections 6.2–6.6.",
    },
    {
      kind: "categorize",
      q: "Sort each baseline approach into the correct assessment.",
      categories: ["Credible baseline approach", "Weak or invalid baseline approach"],
      items: [
        { text: "12-month rolling average of the performance metric with Finance-signed methodology.", category: 0 },
        { text: "Single-quarter comparison against the worst-performing quarter before deployment.", category: 1 },
        { text: "Stratified sample of 200 transactions across all performance tiers.", category: 0 },
        { text: "Manager estimate of pre-deployment performance without system data.", category: 1 },
        { text: "Process mining data from the 6 months before deployment announcement.", category: 0 },
        { text: "Measurement conducted in the week after AI deployment announcement.", category: 1 },
      ],
      correctFeedback:
        "Right. Credible baselines use objective data, representative samples, and pre-announcement measurement. Re-read sections 6.1 through 6.5.",
      wrongFeedback:
        "Credible baselines require objective measurement, representative samples, and pre-announcement timing. Re-read sections 6.1–6.5.",
    },
    {
      q: "A market improvement of 8% occurred during the same period as an AI deployment that showed 22% performance improvement. How should the business leader present the AI-attributable ROI?",
      options: [
        "Claim the full 22% as AI-attributable.",
        "Claim zero — all improvement is attributable to market conditions.",
        "Approximate the AI-attributable improvement as approximately 14 percentage points, citing the industry benchmark data.",
        "Remove the market context from the report to avoid confusion.",
      ],
      correct: 2,
      correctFeedback:
        "Correct. The market adjustment produces an approximate AI-attributable figure of 14 percentage points (22% minus 8% background improvement). Citing the external benchmark data makes the adjustment credible. Re-read section 6.7.",
      wrongFeedback:
        "Market shifts require adjustment. Re-read section 6.7 on handling baseline changes.",
    },
    {
      q: "Which of the following is the most important element of the six-part baseline documentation standard?",
      options: [
        "The summary statistics table.",
        "The Finance countersignature with date — converting the programme's claim into a jointly agreed fact.",
        "The length of the documentation pack.",
        "The programme manager's name.",
      ],
      correct: 1,
      correctFeedback:
        "Right. The Finance countersignature converts the baseline from a programme assertion to a jointly agreed fact that Finance cannot later challenge without reviewing its own sign-off. Re-read section 6.6.",
      wrongFeedback:
        "Finance countersignature is the governance element that makes all other documentation credible. Re-read section 6.6.",
    },
  ],
});
