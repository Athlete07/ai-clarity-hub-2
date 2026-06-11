import { BL_CALLOUT, buildChapter, buildSection, s, x } from "../concepts-bl-helpers";

export const chapter08BlMeasuringAiAdoptionTeams = buildChapter({
  slug: "bl-measuring-ai-adoption-teams",
  number: 8,
  shortTitle: "Measuring AI Adoption",
  title: "Measuring AI Adoption Across Teams",
  readingMinutes: 24,
  summary:
    "AI adoption measurement is the discipline that separates AI programmes that deliver sustained business value from those that deliver initial activity followed by invisible decline. Most organisations measure AI adoption with the wrong metrics — login rates, training completions, user counts — that capture tool presence but not tool integration into workflow. The metrics that predict sustained value are workflow depth (how deeply AI is integrated into operational decisions), output quality improvement, and business outcome change. These metrics take more effort to capture but are the only ones that justify continued AI investment.",
  keyTakeaway:
    "The adoption metrics worth measuring are the ones that change when AI is genuinely integrated into how work gets done: decision quality improvement, workflow cycle time reduction, output quality uplift, and error rate reduction. Login rates and training completions are activity metrics — useful for diagnosing support needs but not for justifying continued AI investment or measuring AI programme success.",
  pmCallout: BL_CALLOUT,
  sections: [
    buildSection({
      number: "8.1",
      title: "Why most AI adoption metrics are vanity metrics",
      subtitle: "The metrics that look good in dashboards and tell you nothing about business value",
      take: "Vanity metrics are metrics that can improve without any improvement in business outcomes. In AI adoption, the classic vanity metrics are: number of users who have logged in (tells you nothing about use quality), training completion rate (tells you nothing about skill transfer), number of AI features available (tells you nothing about features used), and total AI queries submitted (tells you nothing about whether AI outputs were used). These metrics are easy to collect, look impressive in presentations, and are highly gameable without any genuine adoption occurring.",
      why: "Leaders who manage AI adoption using vanity metrics will consistently believe their programmes are succeeding when they are not. The metrics will show progress; the business results will not change. Vanity metrics are not harmless — they produce investment decisions based on false signals and delay the detection of adoption failures until they have compounded into programme failures.",
      paragraphs: [
        [
          s("The login rate problem: a user who logs in and does nothing has the same login count as a user who uses the AI extensively. "),
          x(
            "Platform login data is the most commonly used AI adoption proxy and the least informative. A team with 100% weekly login rate may have 30% of members doing substantive work and 70% opening the platform to clear a notification. A team with 60% weekly login rate may have every active user doing substantive AI-assisted work daily. Login rate cannot distinguish between these two scenarios.",
            "Replace login rate with active use rate: the percentage of users who performed a substantive action (generated an output, accepted an AI recommendation, completed a configured workflow) in the measurement period. Active use rate is harder to game and more predictive of business value.",
          ),
          s(" Replace login rate with active use rate as your primary AI tool usage metric."),
        ],
        [
          s("Training completion tells you what employees have been exposed to, not what they can do. "),
          x(
            "A training completion rate of 85% means 85% of employees started and finished a training module. It means nothing about whether they retained the knowledge, whether they changed their workflow, or whether the training produced the capability it was designed to produce. Reporting training completion as an AI adoption metric is the equivalent of reporting the number of books distributed as a literacy metric.",
            "Replace training completion rate with capability assessment pass rate and workflow adoption rate measured 30 days post-training. These two metrics together tell you whether training changed anything.",
          ),
          s(" Never report training completion as an AI adoption metric. It is a training administration metric, not a capability metric."),
        ],
        [
          s("Query volume metrics conflate noise with signal. "),
          x(
            "High query volume on an AI platform can reflect genuine deep adoption (many employees using AI extensively) or noise (many employees experimenting with AI without integrating it into their work). The distinction requires examining what happens to AI outputs: are they accepted, edited, and used in decisions, or are they reviewed and discarded? Acceptance rate and action rate are better proxies for genuine adoption than raw query volume.",
            "Organisations that report query volume as an adoption success metric are often describing an engagement phase that has not converted to adoption. Query volume without output action rate is curiosity, not integration.",
          ),
          s(" Report AI output acceptance rate alongside query volume. Acceptance rate without output action rate still does not capture whether AI changed any decisions."),
        ],
      ],
      examples: [
        {
          title: "Financial services — login rate gaming",
          body: "A bank's AI advisory tool dashboard showed 94% weekly login rate among 280 advisors. The CISO flagged unusually high weekend login activity (Saturday evening spikes). Investigation revealed that 60 advisors had set up automated reminders to log in weekly to maintain their 'AI active user' status — which was being tracked as a performance metric. The 94% login rate represented 60 gamers, 110 genuine daily users, and 110 occasional users. Active use rate (substantive actions in the period): 56%. The gameable metric had obscured the real adoption picture for 4 months.",
        },
        {
          title: "Healthcare — completion vs capability gap",
          body: "A hospital trust reported 91% AI documentation tool training completion to the board as evidence of successful AI adoption. A capability assessment 30 days later tested the ability to use the tool in a simulated clinical scenario. Result: 47% of the 91% completion cohort could use the tool accurately under test conditions. The board had been given a training administration metric as an adoption metric. When the 47% capability figure was presented alongside the 91% completion figure, the board immediately requested a programme review.",
        },
        {
          title: "Marketing — query volume vs action rate",
          body: "A media company's AI content platform showed 12,000 monthly queries — a metric the programme director presented as evidence of strong adoption. A deeper analysis of query outcomes: 8,400 queries (70%) produced outputs that were not saved, shared, or incorporated into any content piece. 3,600 queries (30%) produced outputs that were used. The action rate was 30%, not the 70%+ that would indicate genuine integration. The programme director had been measuring curiosity as adoption.",
        },
      ],
    }),
    buildSection({
      number: "8.2",
      title: "Four categories of meaningful AI adoption metrics",
      subtitle: "The measurement framework that reveals whether AI is changing how work gets done",
      take: "Meaningful AI adoption metrics fall into four categories that together describe the full adoption journey: usage depth (how extensively AI is being used in workflows, not just whether it is being logged into), workflow integration (how deeply AI outputs are embedded in operational decisions), output quality (whether AI-assisted work is better than non-AI-assisted work), and business outcome (whether the function's performance has improved in the ways AI was designed to improve it). Each category requires different data sources and has different measurement costs.",
      why: "Business leaders who measure only one category are seeing only one facet of adoption. Usage depth without output quality tells you AI is being used but not whether it is being used well. Output quality without business outcome tells you individual work has improved but not whether it has changed function performance. All four categories are needed for a complete adoption picture.",
      paragraphs: [
        [
          s("Usage depth metrics measure how AI is being used, not whether it is being used. "),
          x(
            "Usage depth indicators: session duration (are users spending meaningful time in the AI tool?), feature breadth (are users accessing multiple AI capabilities or only the default view?), active use rate (performing substantive actions, not just logging in), and recurrence (are users returning daily or only occasionally?). Depth metrics are available from AI platform analytics dashboards and require no additional data collection.",
            "A user who logs in daily, uses 3 different AI features, and spends 20 minutes per session has high usage depth. A user who logs in weekly, uses only the default report, and spends 2 minutes per session has low usage depth. Both have 100% 'login rate.'",
          ),
          s(" Extract usage depth metrics from AI platform analytics rather than relying on login data alone."),
        ],
        [
          s("Workflow integration metrics measure whether AI outputs are influencing decisions. "),
          x(
            "Workflow integration indicators: AI output acceptance rate (what percentage of AI recommendations are accepted without major modification?), decision influence rate (in what percentage of decisions was an AI output reviewed before the decision was made?), and override documentation rate (when AI recommendations are not followed, is the reason documented?). These metrics require combining AI platform data with workflow or decision data.",
            "Workflow integration is the hardest category to measure because it requires connecting AI system data to operational decision data — two data systems that are not typically integrated. The measurement investment is justified because workflow integration is the most direct predictor of business outcome.",
          ),
          s(" Build the data integration required to measure AI output influence on decisions as part of the AI deployment project, not as a retrospective measurement exercise."),
        ],
        [
          s("Output quality metrics measure whether AI-assisted work is better than baseline. "),
          x(
            "Output quality indicators are role-specific: contract first-submission pass rate (legal), forecast accuracy (operations), query resolution rate (customer service), report revision rate (finance), first-call-resolution rate (sales). Each requires a pre-AI baseline and a consistent post-AI measurement cadence. Quality metrics are the most compelling evidence for AI programme continuation because they directly demonstrate work improvement.",
            "Output quality measurement requires investment in baseline data collection before AI deployment. Many organisations cannot demonstrate AI quality impact because they did not measure baseline quality before deployment — making improvement impossible to attribute.",
          ),
          s(" Invest in baseline quality measurement 3–6 months before AI deployment. Improvement without a baseline is not demonstrable."),
        ],
      ],
      examples: [
        {
          title: "Operations — usage depth analysis",
          body: "A manufacturer's AI quality inspection platform analytics revealed: 85% active use rate (users who performed a substantive action weekly), but only 38% feature breadth (users who accessed more than the default fault detection view). Further analysis: the 38% with high feature breadth were capturing 12× more defect variants than the 62% with low feature breadth. The depth analysis identified a training gap: the majority of users were not accessing the AI's root cause analysis feature, which was the highest-value capability. A 90-minute feature-specific training session increased feature breadth to 71% within 4 weeks.",
        },
        {
          title: "Legal — workflow integration measurement",
          body: "A law firm measured AI contract review integration by connecting AI platform review data to the matter management system. Metric: what percentage of contracts had an AI review completed before the first partner review? At month 3: 62% of contracts. At month 6: 81%. At month 12: 91%. The increase in workflow integration correlated with a decrease in partner review time per contract (from an average of 92 minutes to 57 minutes) — because AI had resolved straightforward issues before the partner review, leaving only complex issues requiring senior attention.",
        },
        {
          title: "Finance — quality baseline investment",
          body: "A CFO invested in 3 months of baseline quality measurement before deploying an AI financial commentary tool: tracked the percentage of board reports that required revision after first draft, the average number of revisions per report, and the average senior analyst time per report. Baseline: 68% required revision, 2.4 revisions average, 4.2 hours average. Post-AI at 6 months: 31% required revision, 1.1 revisions average, 2.8 hours average. The quality improvement evidence — only possible because of the baseline investment — was the primary justification for extending the AI programme to 3 additional finance functions.",
        },
      ],
    }),
    buildSection({
      number: "8.3",
      title: "Measuring workflow integration vs tool usage",
      subtitle: "The diagnostic question every adoption measurement programme must answer",
      take: "The most important distinction in AI adoption measurement is between tool usage (the employee opened the AI tool) and workflow integration (the AI output influenced a decision or changed the work product). High tool usage with low workflow integration indicates adoption friction — employees are present in the tool but not using it to change how they work. Low tool usage with high workflow integration indicates adoption efficiency — a smaller number of employees are using the tool deeply and generating disproportionate value.",
      why: "Organisations that manage to tool usage targets without measuring workflow integration systematically miss adoption failures that are masked by usage activity. An employee who opens an AI tool, reviews one output, and closes the tool has a usage count but no workflow integration. Managing only to usage targets will fund training and communications for an employee who is present but not integrated.",
      paragraphs: [
        [
          s("Workflow integration depth has three levels: awareness (employee has seen AI outputs), consideration (employee reviews AI outputs before decisions), and commitment (employee routinely acts on AI outputs or explicitly overrides them with documentation). "),
          x(
            "Awareness-level employees know the AI produces outputs and occasionally look at them. Consideration-level employees routinely check AI outputs as part of their decision-making process. Commitment-level employees consistently either act on AI outputs or override them with documented reasoning — in both cases, the AI is genuinely influencing their decisions.",
            "Moving employees from awareness to consideration to commitment is the adoption journey. Measurement that only tracks awareness (are they using the tool?) will miss whether the journey is progressing.",
          ),
          s(" Design your adoption measurement to distinguish between awareness, consideration, and commitment levels — not just present or absent."),
        ],
        [
          s("Time-displacement measurement reveals whether AI use is replacing manual work or adding to it. "),
          x(
            "When AI is genuinely integrated into workflow, it should displace some manual activity. An employee who uses an AI demand forecast and spends less time on manual data compilation has shown workflow integration through time displacement. An employee who uses an AI demand forecast and continues to do the same amount of manual data compilation has adopted the tool but not integrated it into their workflow.",
            "Time displacement surveys (do you spend less time on manual task X since using AI tool Y?) are a low-cost measurement of whether AI has actually changed how work is done. They are self-reported and therefore imprecise — but as an adoption quality signal, they are significantly more informative than login data.",
          ),
          s(" Include time displacement questions in 30-day and 90-day post-adoption surveys. They are the lowest-cost integration measurement available."),
        ],
        [
          s("Override analysis reveals whether employees trust and use AI outputs appropriately. "),
          x(
            "An AI tool whose outputs are accepted 98% of the time is almost certainly being over-trusted — employees are not critically evaluating AI recommendations. An AI tool whose outputs are accepted 40% of the time is almost certainly being under-trusted or being used only as a secondary reference. Calibrated trust produces acceptance rates typically in the 70–85% range, with documented overrides for rejected recommendations.",
            "Override analysis requires designing the AI tool to capture override events and override reasons. Overrides that are not captured produce a false 100% acceptance rate in the analytics. Building override capture into the tool design is a deployment requirement, not a retrospective measurement decision.",
          ),
          s(" Require override capture as a deployment requirement for every AI tool that produces recommendations acted on by employees."),
        ],
      ],
      examples: [
        {
          title: "Retailer — consideration vs awareness level",
          body: "A retailer measured AI buying tool adoption at three levels. After 6 weeks: Awareness (viewed AI output at least once in the period): 84%. Consideration (viewed AI output before 50%+ of decisions): 51%. Commitment (viewed AI output before 90%+ of decisions, with override documentation when not followed): 22%. The management team had been reporting awareness-level data (84%) as 'adoption.' The consideration and commitment data revealed that only 22% of buyers had genuinely integrated AI into their decision process. The data drove a targeted coaching programme for buyers at awareness level only.",
        },
        {
          title: "Operations — time displacement survey",
          body: "An operations team's 90-day post-adoption survey asked: 'Since using the AI scheduling tool, how has the time you spend on manual schedule creation changed?' Responses: reduced significantly (40%), reduced slightly (32%), unchanged (22%), increased (6%). The 28% with unchanged or increased time were investigated: 14% had AI tool access issues preventing full use, 8% had not completed the integration step that connected AI to their scheduling data, and 6% had managers who were not supporting AI use. Each barrier was addressable. Resolving the identified barriers moved the 'reduced significantly' group from 40% to 61% within 8 weeks.",
        },
        {
          title: "Financial services — override analysis",
          body: "A bank's AI credit recommendation tool was reporting 97% acceptance rate after 6 months. The risk director flagged the rate as a concern: 'No human reviewer accepts AI recommendations 97% of the time if they are genuinely reviewing them.' Investigation revealed: the tool did not surface an explicit override mechanism. Reviewers who disagreed with AI recommendations simply made their own decision without recording it. The tool was updated to require a brief override reason if the reviewer's decision differed from the AI recommendation. Post-update acceptance rate: 74% with 26% documented overrides. The 74% was a healthier adoption signal than the previous 97%, which had been masking systematic non-use of the override function.",
        },
      ],
    }),
    buildSection({
      number: "8.4",
      title: "Leading indicators of adoption failure",
      subtitle: "How to identify AI adoption problems 60–90 days before they become programme failures",
      take: "AI adoption failure is predictable — not inevitable — if leading indicators are monitored and acted on. The six leading indicators of adoption failure are: declining active use rate (early adopters are reverting to non-AI workflows), rising override rate without documentation (employees are bypassing AI without accountability), stalling workflow integration (usage depth has not improved in 30 days), absence of peer sharing (no informal AI communication in teams), manager non-adoption (team's manager has stopped using the AI tool), and absence of positive qualitative signals (no unprompted AI success stories in team meetings or communications).",
      why: "Lagging adoption metrics (output quality, business outcomes) reflect adoption problems that occurred 60–90 days earlier. By the time business outcomes decline, the adoption failure has been compounding for months. Leading indicators allow course correction before the adoption decline is visible in business metrics.",
      paragraphs: [
        [
          s("Declining active use rate is the earliest and most reliable leading indicator of adoption failure. "),
          x(
            "Active use rate should increase from programme launch through month 6 as more employees integrate AI tools and existing users deepen their integration. A declining active use rate in months 2–5 indicates that early adopters are reverting to non-AI workflows — the most common early warning of adoption failure.",
            "Active use rate decline can be caused by: tool quality issues (AI outputs becoming less reliable), workflow friction (the AI tool is not well-integrated into the operational process), competing priorities (other initiatives are crowding out AI use), or loss of manager support. Each cause requires a different intervention; the metric's job is to trigger investigation, not to diagnose.",
          ),
          s(" Monitor active use rate weekly for the first 12 weeks post-deployment. A 5-point decline in any 2-week period triggers an immediate investigation."),
        ],
        [
          s("Rising override rate without documentation indicates employees are bypassing AI without accountability. "),
          x(
            "An undocumented override — an employee who ignores an AI recommendation without recording why — is both a governance risk (what happens if the human decision is wrong?) and an adoption signal (the employee is not engaging with the AI tool enough to document their reasoning). Rising undocumented overrides indicate eroding trust in AI outputs, which is often caused by a specific failure event that has not been surfaced.",
            "Undocumented override tracking requires the AI tool to capture the difference between AI recommendation and human decision — which requires tool design, not just analytics. This is a deployment requirement, not a post-deployment measurement add-on.",
          ),
          s(" Track the ratio of undocumented to documented overrides monthly. A rising undocumented ratio is a trust erosion signal."),
        ],
        [
          s("Absence of positive qualitative signals is the leading indicator most often overlooked. "),
          x(
            "When AI adoption is working, employees spontaneously mention AI in team meetings: 'The AI flagged this early and saved us 3 days,' 'I checked the AI recommendation and it matched my analysis.' When these unprompted positive signals are absent — when AI use is never mentioned in team discussions, when no one shares AI success stories — the adoption is either genuinely absent or present but not generating value that employees notice.",
            "Qualitative signal monitoring is informal: a manager who listens for spontaneous AI mentions in team meetings and weekly catch-ups. It costs no technology investment and provides a leading indicator that no analytics dashboard can replicate.",
          ),
          s(" Ask managers to track whether they hear unprompted AI success stories in team conversations monthly. Absence of stories is a weak but early warning signal."),
        ],
      ],
      examples: [
        {
          title: "Insurance — active use rate early warning",
          body: "An insurer's AI claims tool active use rate monitoring showed a 7-point decline in week 8 (from 71% to 64%) and a further 6-point decline in week 10 (to 58%). The trigger investigation revealed: a tool update released in week 7 had changed the interface for the most commonly used feature, and many users had not received an update notification. A 30-minute update briefing restored active use rate to 73% by week 12 — higher than the pre-decline level because the new interface was more efficient once users understood it. Without the weekly monitoring, the decline would not have been detected until the month-3 adoption report.",
        },
        {
          title: "Financial services — undocumented override ratio",
          body: "A bank's AI underwriting tool showed a rising undocumented override ratio in months 4–6: documented overrides (18%) plus undocumented overrides (inferred from cases where AI recommendation differed from decision but no override record existed) had risen to a combined 42%. Investigation of 20 undocumented override cases revealed: 14 involved a specific AI recommendation type (high-value deals in a niche sector) that had produced 3 incorrect recommendations in month 3. The three errors had not been formally reported but had spread through informal peer communication, eroding trust in all AI recommendations — not just for the specific case type. A targeted quality investigation of that recommendation type restored trust and reduced the undocumented override ratio to 8%.",
        },
        {
          title: "Healthcare — qualitative signal monitoring",
          body: "A hospital trust asked ward managers to track AI adoption positive signals for 8 weeks. Managers were given a simple tally: count the number of times AI was mentioned positively in their team's conversations (daily huddles, handover discussions, clinical reviews). Wards with 3+ positive AI mentions per week had 71% active use rates. Wards with 0–1 positive AI mentions per week had 34% active use rates. The qualitative signal monitoring identified the low-signal wards 6 weeks before their active use rates were included in the monthly analytics report — enabling earlier coaching intervention.",
        },
      ],
    }),
    buildSection({
      number: "8.5",
      title: "Building an adoption dashboard for leadership",
      subtitle: "How to present AI adoption data in a format that drives investment decisions",
      take: "An AI adoption dashboard for leadership presents four things on one page: adoption progress across the four metric categories, variance against target (which functions are above and below adoption benchmarks), leading indicator status (which programmes have early warning signals), and the connection between adoption level and business outcome. A dashboard that takes 5 minutes to read and enables a decision is more valuable than a dashboard that takes 45 minutes to read and produces questions.",
      why: "Leadership adoption dashboards that are too detailed, too technical, or too disconnected from business outcomes produce three responses: the dashboard is not read, the dashboard is read but not acted on, or it is read and produces questions about metrics rather than decisions about AI investment. The dashboard's design should be reverse-engineered from the decisions it needs to enable.",
      paragraphs: [
        [
          s("Design the dashboard by identifying the three decisions it must enable before designing any metrics. "),
          x(
            "The three decisions an AI adoption dashboard typically needs to enable: (1) which AI deployments should receive additional investment to accelerate adoption, (2) which AI deployments are at risk and require intervention, and (3) which AI deployments have achieved sufficient adoption to justify expanding to additional functions or users. Each decision requires specific evidence; the dashboard should be designed to provide that evidence and no more.",
            "A dashboard that enables all three decisions with 8 metrics is more useful than a dashboard with 40 metrics that requires interpretation before any decision can be made.",
          ),
          s(" Identify the 3 decisions the dashboard must enable before selecting any metrics. Metrics that do not contribute to any of the 3 decisions are dashboard noise."),
        ],
        [
          s("The adoption scorecard provides the programme-level view in one glance. "),
          x(
            "The scorecard has one row per AI deployment and five columns: active use rate (target: 70%+), workflow integration level (target: consideration or above), output quality vs baseline (target: measurable improvement), adoption trend (improving/stable/declining), and leading indicator status (green/amber/red based on early warning monitoring). The scorecard identifies the 2–3 deployments that need attention immediately and the 2–3 that are performing well enough to serve as models for others.",
            "Traffic light scoring in each column (green = on target, amber = approaching risk, red = below target) allows leadership to identify programmes requiring intervention in 30 seconds.",
          ),
          s(" Use a 5-column adoption scorecard with traffic light scoring as the primary leadership view."),
        ],
        [
          s("Connect adoption level to business outcome in the same dashboard view. "),
          x(
            "The most powerful element of a leadership adoption dashboard is a side-by-side comparison: functions with high adoption versus functions with low adoption, showing business outcomes in each group. If high-adoption functions show measurably better business outcomes, the dashboard is making the investment case for adoption support in low-adoption functions visible. If high-adoption and low-adoption functions have the same business outcomes, the dashboard is surfacing an AI value question that requires investigation.",
            "Business outcome data by adoption level is the evidence that converts AI adoption from a programme management question into a strategic investment question. Leaders who can see that high-adoption functions outperform low-adoption functions by 12% on a business KPI will fund adoption support without being asked twice.",
          ),
          s(" Include a business outcome comparison by adoption tier in every leadership adoption dashboard."),
        ],
      ],
      examples: [
        {
          title: "Retailer — decision-driven dashboard design",
          body: "A retailer's AI programme director designed the adoption dashboard by first identifying the 3 decisions it needed to enable: (1) which 2 deployments needed additional CoE support, (2) which 1 deployment was failing and needed to be reviewed, (3) which 2 deployments were ready for expansion to additional functions. The dashboard that emerged had 12 metrics across 6 deployments — all directly feeding the 3 decisions. Previous dashboard: 47 metrics, reviewed for 60 minutes per month, produced no decisions in the previous 3 review cycles.",
        },
        {
          title: "Financial services — adoption scorecard",
          body: "A bank's AI adoption scorecard had 7 rows (one per AI deployment) and 5 columns. Green: 3 deployments. Amber: 2 deployments (both had stalling workflow integration). Red: 2 deployments (one declining active use rate, one high undocumented override ratio). The scorecard was reviewed in a 15-minute monthly leadership meeting. In that meeting: the 2 red deployments received intervention decisions (additional coaching and a tool quality review respectively), the 2 amber deployments were flagged for monitoring, and the 3 green deployments were identified as expansion candidates. The 15-minute monthly review replaced a 60-minute monthly programme review that had been running for 6 months with no decisions.",
        },
        {
          title: "Healthcare — business outcome by adoption tier",
          body: "A hospital trust included a business outcome comparison by adoption tier in its quarterly AI adoption dashboard. High-adoption wards (70%+ AI tool integration): average patient pathway completion time 4.2 hours. Low-adoption wards (below 40% integration): 6.1 hours. The 1.9-hour differential provided the clinical operations director with a direct financial and patient outcome argument for additional adoption support in low-adoption wards. Budget for adoption coaching in low-adoption wards was approved the same day the dashboard was presented — the first time an AI programme budget had been approved without a separate business case submission.",
        },
      ],
    }),
    buildSection({
      number: "8.6",
      title: "Adoption benchmarks by industry and function",
      subtitle: "How to set adoption targets that are ambitious but evidence-based",
      take: "AI adoption targets that are not benchmarked against external evidence are either too low (producing a false sense of success at below-market performance) or too high (producing demoralisation when market-rate performance is labelled as failure). Industry and function benchmarks provide the reference points that make adoption targets credible. Credible targets produce genuine accountability; arbitrary targets produce political performance management.",
      why: "Business leaders who set AI adoption targets without external benchmarks are making targets up — which everyone knows. When everyone knows targets are invented, missing them produces negotiation rather than remediation. Benchmarked targets produce genuine accountability because the reference point is external and verifiable.",
      paragraphs: [
        [
          s("AI adoption benchmarks vary significantly by industry, function, and AI tool maturity. "),
          x(
            "Industry benchmarks (at 12 months post-deployment): financial services 55–70% active use rate (high regulatory oversight supports adoption discipline), retail and consumer goods 45–65% (moderate adoption infrastructure), healthcare 40–60% (high clinical complexity, significant compliance constraints), professional services 60–75% (high AI tool sophistication, well-established adoption practices). These ranges are illustrative — actual benchmarks should be sourced from peer organisations and industry reports current to the deployment year.",
            "Benchmarks from peer organisations are more relevant than industry averages because they reflect comparable AI tool maturity, comparable workforce characteristics, and comparable operational context.",
          ),
          s(" Source adoption benchmarks from 3–5 peer organisations in the same industry rather than relying on broad industry averages."),
        ],
        [
          s("Function-level benchmarks differ significantly from organisation-level benchmarks. "),
          x(
            "Within the same organisation, customer service functions typically achieve the highest AI adoption (workflow is repetitive, AI benefit is immediately visible, function leadership is highly measurement-oriented), while legal and compliance functions typically achieve the lowest (outputs require expert review, risk aversion is high, workflow integration is complex). Finance functions fall in the middle and show high variance depending on whether the CFO is an active AI champion.",
            "Setting the same adoption target for all functions produces unfair accountability in some functions and insufficient ambition in others. Function-specific targets calibrated to function-level benchmarks are fairer and more motivating.",
          ),
          s(" Set function-specific adoption targets calibrated to function-level benchmarks, not a single organisational target applied uniformly."),
        ],
        [
          s("Target-setting timing affects whether benchmarks produce motivation or demoralisation. "),
          x(
            "Adoption targets set at programme launch are the least accurate predictions of realistic performance — the adoption trajectory is unknown before deployment begins. Targets set at month 3 (after pilot data is available) are significantly more accurate and more credible with the teams they govern.",
            "Programme launch targets should be directional (this programme aims for 60–70% active use at 12 months, consistent with peer benchmarks) rather than precise (this programme will achieve exactly 68% by month 12). Precision signals false certainty; direction signals genuine ambition.",
          ),
          s(" Set directional targets at programme launch and precise targets at month 3 when pilot data provides a deployment-specific trajectory."),
        ],
      ],
      examples: [
        {
          title: "Financial services — peer benchmark sourcing",
          body: "A bank's AI adoption team sourced adoption benchmarks from 4 peer institutions through an industry AI adoption roundtable. Peer data at 12 months: active use rates 58%, 64%, 71%, and 67% for comparable AI advisory tool deployments. Benchmark range: 58–71%. The bank set a 12-month target of 65% (mid-range) for its own deployment. Post-deployment, the bank achieved 69% at 12 months — above its target and at the top of the peer range. Without the peer benchmark, the internal target had originally been 80% (aspirational and unsupported by data), which would have labelled 69% as a significant failure.",
        },
        {
          title: "Retailer — function-specific targets",
          body: "A retailer set function-specific AI adoption targets based on function-level benchmarks from its customer community: customer service 72% (high benchmark function), commercial buying 58% (moderate benchmark function), finance 51% (moderate-low benchmark function), legal 38% (low benchmark function). At 12 months: customer service 74% (above target), commercial buying 61% (above target), finance 47% (below target by 4%), legal 42% (above target). The function-specific targets revealed that finance — which would have looked like a success against a single 58% organisational target — was actually below its function-specific benchmark.",
        },
        {
          title: "Insurance — directional vs precise targets",
          body: "An insurer set directional launch targets ('60–70% adoption range, consistent with peer benchmarks') and precise month-3 targets after pilot data. Pilot data showed: adoption trajectory tracking toward 58% at month 12, below the 60–70% range. The precise month-3 target of 58% was set, with an explicit intervention plan to reach 65% by month 12. The programme team found the directional-to-precise target transition more motivating than a fixed launch target because it gave them explicit credit for the pilot insight and a clear recovery trajectory.",
        },
      ],
    }),
    buildSection({
      number: "8.7",
      title: "Using adoption data to drive investment decisions",
      subtitle: "How to connect adoption measurement to AI programme funding and expansion",
      take: "Adoption data is only valuable if it drives decisions — not if it is collected, reported, and filed. The three investment decisions that adoption data should drive are: expanding successful deployments to additional functions (adoption evidence replaces speculation), allocating additional support to at-risk deployments (adoption leading indicators provide early warning), and discontinuing deployments that have failed to achieve integration despite intervention (adoption data provides the evidence for a discontinuation decision that is not a personal indictment of the function).",
      why: "Organisations that collect adoption data but do not use it to make programme investment decisions have built a reporting function, not a management function. The data's value is entirely in its use. Business leaders who connect adoption data to budget decisions create the feedback loop that makes AI adoption measurement valuable.",
      paragraphs: [
        [
          s("Adoption evidence as the basis for expansion decisions prevents premature scaling. "),
          x(
            "An AI deployment that has achieved 70%+ active use rate, consideration-level workflow integration, and measurable output quality improvement has demonstrated evidence-based readiness for expansion. An AI deployment that has achieved 40% active use rate and improving trend has demonstrated potential but not readiness. Scaling before evidence is available wastes expansion resources and imports low-adoption patterns into new functions.",
            "Expansion decisions based on adoption evidence rather than executive enthusiasm consistently produce higher second-function adoption because the expansion includes the lessons from the first deployment.",
          ),
          s(" Require adoption evidence (active use 70%+, workflow integration at consideration level, quality improvement measurable) before approving any AI deployment expansion."),
        ],
        [
          s("Discontinuation evidence must be objective to remove politics from the decision. "),
          x(
            "Discontinuing an AI deployment is a difficult decision in most organisations because it is associated with admitting failure, disappointing the vendor, and acknowledging that the AI investment was not fully justified. Adoption data removes the political complexity: a deployment that has been below 30% active use for 6 months, despite two targeted interventions, has objective evidence of integration failure. The evidence makes the discontinuation a data-driven decision rather than a political one.",
            "Define discontinuation criteria before deployment: 'If active use rate is below 30% at month 12 despite two targeted interventions, the deployment will be reviewed for discontinuation.' Agreed criteria in advance make the decision governance rather than judgement.",
          ),
          s(" Define discontinuation criteria at programme launch. Agreed criteria remove the politics from discontinuation decisions when they are needed."),
        ],
        [
          s("Portfolio-level adoption management identifies the highest and lowest performers across all AI deployments. "),
          x(
            "An AI programme portfolio view — all deployments with their adoption scores, trends, and leading indicators — enables portfolio-level resource allocation: invest CoE support in high-potential deployments, investigate low-adoption deployments, and scale high-adoption deployments faster. Without a portfolio view, investment decisions are made deployment by deployment, missing the cross-portfolio patterns that reveal systemic enablers and barriers.",
            "A portfolio view consistently reveals that adoption performance correlates with manager sponsorship — which is a portfolio-level insight that individual deployment reviews do not surface. Identifying manager sponsorship as a portfolio-level adoption driver enables a portfolio-level management development intervention rather than 7 individual deployment-level interventions.",
          ),
          s(" Review the full AI deployment portfolio monthly, not deployment by deployment. Cross-portfolio patterns are invisible in individual deployment reviews."),
        ],
      ],
      examples: [
        {
          title: "Retailer — evidence-based expansion",
          body: "A retailer's AI customer insights tool pilot achieved 74% active use rate, 82% consideration-level workflow integration, and a measurable 18% improvement in campaign conversion rates after 16 weeks. The adoption evidence was used to approve expansion to 4 additional commercial functions. The pilot function's AI champion was seconded to lead the expansion. Expansion functions achieved 69% active use rate at month 3 — significantly above the 38% typical first-month adoption rate for new deployments — because the expansion benefited from the pilot's documented adoption approach.",
        },
        {
          title: "Financial services — objective discontinuation",
          body: "A bank's AI compliance tool had pre-agreed discontinuation criteria: active use below 30% at month 12 despite two interventions. At month 12, active use was 27% — despite an additional coaching programme and a workflow redesign intervention. The adoption data made the discontinuation decision governance, not politics. The vendor was informed that the deployment would not be renewed at the same scope; a replacement evaluation was started. The function director, who would previously have defended the deployment to avoid admitting failure, supported the discontinuation because 'the data made the decision — not me.'",
        },
        {
          title: "Healthcare — portfolio pattern reveals manager factor",
          body: "A hospital trust's monthly portfolio review of 8 AI deployments identified a consistent pattern: the 3 deployments with the highest adoption were all in wards with a named AI champion manager. The 3 deployments with the lowest adoption were in wards whose managers had not completed the AI tool training programme. The portfolio view revealed a manager training gap that was not visible in any individual deployment review. A mandatory manager training requirement was added to the AI deployment programme. The next 3 deployments, all with trained managers, achieved an average 67% adoption at month 6 versus the portfolio average of 44%.",
        },
      ],
    }),
    buildSection({
      number: "8.8",
      title: "BL decision lens: your AI adoption measurement framework",
      subtitle: "Three measurement decisions that determine whether adoption data drives programme value",
      take: "An AI adoption measurement framework that drives programme decisions requires three elements: metrics that measure workflow integration rather than tool presence, leading indicators that provide 60-day early warning of adoption failure, and a dashboard format that enables three specific investment decisions in a 15-minute leadership review. These three elements can be designed before the first AI deployment and applied consistently across every subsequent deployment.",
      why: "Business leaders who design their measurement framework after deployment are always measuring retrospectively. The decisions that measurement should enable — expand, support, or discontinue — require current data, not historical reports. Designing the measurement framework in parallel with deployment planning is the structural choice that makes measurement useful.",
      paragraphs: [
        [
          s("Decision 1: replace vanity metrics with workflow integration metrics in every AI adoption report. "),
          x(
            "In your next AI adoption review, remove login rate, training completion, and query volume as headline metrics. Replace them with active use rate, workflow integration level, and output quality vs baseline. This change may initially produce lower headline numbers — because these metrics are harder to game — but it will produce accurate programme visibility for the first time.",
            "The transition from vanity metrics to integration metrics will produce resistance from programme managers whose performance is measured by the vanity metrics. Anticipate this resistance and address it directly: the goal is programme success, not metric success.",
          ),
          s(" Explicitly replace vanity metrics in the next adoption report. Do not add integration metrics alongside vanity metrics — replace them."),
        ],
        [
          s("Decision 2: implement leading indicator monitoring with a named owner and a response protocol. "),
          x(
            "Assign a named owner to monitor the six leading indicators monthly: active use rate trend, override rate ratio, workflow integration stall, peer sharing presence, manager adoption status, and qualitative signal presence. Define the response protocol for each indicator: 'If active use rate declines by 5 points in 2 weeks, the named owner contacts the function's AI workflow lead within 48 hours for investigation.' Named ownership and response protocols convert monitoring from a data collection exercise to a management activity.",
            "Without a named owner, monitoring is everyone's responsibility and therefore no one's. Without a response protocol, a red indicator produces a discussion rather than an action.",
          ),
          s(" Name the leading indicator monitor for each AI deployment before monitoring begins. Owner accountability is the mechanism that makes monitoring produce interventions."),
        ],
        [
          s("Decision 3: define the three decisions your adoption dashboard must enable before it is designed. "),
          x(
            "State explicitly: 'This dashboard must enable three decisions: (1) which deployments to expand, (2) which to support, (3) which to review for discontinuation.' Then design the minimum metrics that provide evidence for each decision. A dashboard designed backwards from decisions is inherently simpler and more actionable than a dashboard designed forwards from available data.",
            "The three-decision frame prevents the most common dashboard design failure: collecting all available metrics and presenting them without specifying what decisions they are intended to support.",
          ),
          s(" State the three decisions before any dashboard design work begins. Send the design brief with the three decisions as the first requirement."),
        ],
      ],
      examples: [
        {
          title: "Measurement framework in one workshop",
          body: "A financial services adoption team designed its measurement framework in a 3-hour workshop before the first AI deployment: (1) Identified and agreed to remove vanity metrics (login rate, training completion, query volume). (2) Defined integration metrics: active use rate (target 70%+), workflow integration level (target: consideration within 8 weeks), output quality vs baseline (target: measurable improvement by month 4). (3) Assigned a named leading indicator monitor with a 6-element checklist. (4) Defined the three dashboard decisions. The framework was applied to all subsequent AI deployments without modification — because the structure was deployment-agnostic.",
        },
        {
          title: "Vanity metric replacement produces honest visibility",
          body: "A retailer replaced its AI adoption dashboard headline metrics before the month-4 review. Previous headline: 'AI training completion: 82%, user logins: 94% weekly.' New headline: 'Active use rate: 47%, consideration-level integration: 31%, output quality vs baseline: +12% where measured.' The new metrics revealed that the programme was performing significantly below expectations. The programme director initially resisted the change but, after the new dashboard prompted a targeted intervention, achieved 68% active use rate at month 6 — a result that would not have been pursued if the vanity metrics had continued to report apparent success.",
        },
        {
          title: "Three-decision dashboard in 15 minutes",
          body: "A healthcare trust's AI adoption dashboard was designed for 3 decisions: expand (which deployments have achieved adoption evidence for expansion), support (which need CoE intervention), discontinue (which have failed despite intervention). Monthly 15-minute review: 4 deployments green (expansion candidates), 2 amber (support flagged), 1 red (discontinuation review triggered). All three decisions were made in the 15-minute window. Previous monthly review: 60 minutes, 40 metrics, zero decisions made.",
        },
      ],
    }),
  ],
  quiz: [
    {
      q: "An AI programme reports 88% training completion and 74% weekly login rate as evidence of successful adoption. What is most likely being missed?",
      options: [
        "Whether the AI tool is technically reliable",
        "Whether employees have actually changed how they work — workflow integration and output quality remain unmeasured",
        "Whether the training was long enough",
        "Whether the vendor is providing adequate support",
      ],
      correct: 1,
      correctFeedback:
        "Correct. Training completion and login rate are activity metrics that measure presence, not integration. They tell you nothing about whether AI is influencing decisions, improving output quality, or changing workflow. Both can be high while genuine adoption remains very low.",
      wrongFeedback:
        "The missing dimension is workflow integration — whether AI outputs are actually influencing how employees make decisions and produce work. Training completion measures exposure; login rate measures access; neither measures whether the AI is genuinely part of how work gets done.",
    },
    {
      q: "An AI contract review tool shows 97% output acceptance rate after 6 months. The risk director flags this as a concern. Why?",
      options: [
        "97% acceptance means the AI is too confident in its recommendations",
        "A 97% acceptance rate suggests employees are not critically evaluating AI recommendations, indicating over-trust",
        "High acceptance rates indicate the AI tool is too easy to use",
        "97% acceptance creates regulatory compliance risk through excessive automation",
      ],
      correct: 1,
      correctFeedback:
        "Correct. Calibrated trust in AI outputs typically produces acceptance rates of 70–85%. A 97% rate strongly suggests employees are accepting AI recommendations without meaningful review — either because the override mechanism is not visible, because the culture discourages challenging AI, or because employees lack the skill to evaluate AI output quality.",
      wrongFeedback:
        "Very high acceptance rates (95%+) in complex domains like contract review are a red flag, not a success signal. Human reviewers who are genuinely reviewing AI outputs will identify errors and overrides regularly. A 97% acceptance rate almost certainly reflects a culture or design issue that has removed meaningful human review from the process.",
    },
    {
      kind: "categorize",
      q: "Categorise these AI adoption metrics as either 'Vanity Metrics' or 'Meaningful Metrics':",
      categories: ["Vanity Metrics", "Meaningful Metrics"],
      items: [
        { text: "Weekly AI tool login rate", category: 0 },
        { text: "Training module completion rate", category: 0 },
        { text: "Total AI queries submitted", category: 0 },
        { text: "AI output acceptance rate with documented overrides", category: 1 },
        { text: "Workflow integration level (awareness/consideration/commitment)", category: 1 },
        { text: "Output quality vs pre-AI baseline", category: 1 },
      ],
      correctFeedback:
        "Correct. Vanity metrics (logins, completions, query volume) measure presence and activity but not integration. Meaningful metrics (acceptance rate with overrides, integration level, quality vs baseline) measure whether AI is genuinely influencing how work gets done.",
      wrongFeedback:
        "Vanity metrics can improve without any real adoption. A user who logs in without using the tool improves login rate. A completed training module does not mean changed behaviour. Meaningful metrics require AI to genuinely influence decisions and work quality — they cannot improve through gaming.",
    },
    {
      q: "Which of the following is the earliest leading indicator of AI adoption failure?",
      options: [
        "Business outcome metrics declining below target",
        "Manager reporting reduced team satisfaction with the AI tool",
        "Active use rate declining for 2 consecutive weeks in months 2–5",
        "Training completion rate falling below the programme target",
      ],
      correct: 2,
      correctFeedback:
        "Correct. Active use rate decline in months 2–5 is the earliest and most reliable leading indicator — it appears 60–90 days before business outcome decline. Business outcome decline is a lagging indicator. Manager satisfaction reporting is useful but subjective. Training completion is not an adoption metric.",
      wrongFeedback:
        "Business outcome decline is a lagging indicator — by the time it appears, the adoption failure has been compounding for months. Active use rate decline in months 2–5 is a leading indicator — it appears 60–90 days before business outcome decline, providing enough time for course correction.",
    },
    {
      kind: "order",
      q: "Order these steps to design an AI adoption measurement framework:",
      items: [
        "Identify the three investment decisions the framework must enable",
        "Replace vanity metrics with workflow integration metrics",
        "Define leading indicators and assign named monitors with response protocols",
        "Design the dashboard to surface evidence for the three decisions",
        "Set benchmarked adoption targets for each function and deployment",
      ],
      prompt: "Drag to arrange in the correct sequence",
      correctFeedback:
        "Correct. Decision identification first — it defines what the framework must prove. Then metric selection (integration over vanity), leading indicator monitoring with accountability, dashboard design serving the three decisions, and finally benchmarked targets that make accountability credible.",
      wrongFeedback:
        "Start with the decisions the framework must enable — this determines what metrics are needed. Then select integration metrics over vanity metrics. Assign leading indicator owners before deployment. Design the dashboard to serve the decisions identified in step 1. Set benchmarked targets last — they require deployment context that is only available once the metric framework is defined.",
    },
    {
      q: "A business leader wants to approve expansion of an AI tool from one function to three additional functions. What adoption evidence should be required before approval?",
      options: [
        "At least 6 months have passed since the initial deployment",
        "The AI vendor has approved the expansion scope",
        "The initial function has achieved 70%+ active use rate, consideration-level workflow integration, and measurable output quality improvement",
        "The expansion functions have completed AI awareness training",
      ],
      correct: 2,
      correctFeedback:
        "Correct. Expansion decisions should be based on adoption evidence from the initial deployment: sustained active use (70%+), genuine workflow integration (consideration level or above), and demonstrated quality improvement. Premature expansion imports low-adoption patterns and wastes resources.",
      wrongFeedback:
        "Expansion evidence should demonstrate that AI is genuinely integrated in the initial function — not just deployed. The three evidence criteria (70%+ active use, consideration-level integration, measurable quality improvement) confirm that the deployment has achieved the adoption that justifies scaling, not just the activity that suggests it.",
    },
  ],
});
