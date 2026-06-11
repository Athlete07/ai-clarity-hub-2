import { buildChapter, buildSection, s, x, sectionWithDiagram } from "../concepts-bl-helpers";
import { BL_CALLOUT } from "../concepts-bl-helpers";

export const chapter01BlWhyAiTransformationsFail = buildChapter({
  slug: "bl-why-ai-transformations-fail",
  number: 1,
  shortTitle: "Why AI Transformations Fail",
  title: "Why AI Transformations Fail — and What Leaders Do Differently",
  readingMinutes: 30,
  summary:
    "Between 70% and 85% of enterprise AI transformation programmes fail to deliver their stated business outcomes. The failures are not technical — they are organisational. Business leaders who understand the five systemic failure modes before launching transformation can design programmes that avoid them. This chapter maps each failure mode to a specific leadership decision that prevents it.",
  keyTakeaway:
    "AI transformations fail for predictable, preventable reasons: leadership misalignment, technology-first sequencing, underestimating change management, insufficient data infrastructure, and measuring the wrong outcomes. None of these are technical failures. They are leadership failures. The leaders who succeed treat AI transformation as an organisational change programme with a technology component — not a technology project with an organisational component.",
  pmCallout: BL_CALLOUT,
  sections: [
    buildSection({
      number: "1.1",
      title: "The five failure modes of AI transformation",
      subtitle: "Why most enterprise AI programmes produce pilots, not performance",
      take: "Enterprise AI transformation fails in five predictable ways: leadership misalignment on goals, technology-before-process sequencing, underestimating change management investment, weak data infrastructure, and measuring activity instead of outcomes. Each failure mode is visible in advance — and preventable with deliberate leadership decisions.",
      why: "Business leaders who can name the failure modes before starting transformation can design checkpoints that catch each one early. A programme that reaches 12 months without addressing these five risks is statistically unlikely to deliver its business case.",
      paragraphs: [
        [
          s("The first failure mode — leadership misalignment — accounts for more failed AI programmes than any technical factor. "),
          x(
            "When the CEO believes AI will drive 30% cost reduction, the CFO believes it will reduce headcount, and the CHRO believes it will augment workers without any job loss, the programme has three incompatible mandates operating in parallel.",
            "Leadership misalignment does not resolve itself. It surfaces in funding disputes, conflicting communications to staff, and competing project priorities — six months after launch, when it is expensive to correct.",
          ),
          s(" Leadership alignment on the AI transformation goal is not a soft prerequisite — it is the hardest technical challenge of the programme."),
        ],
        [
          s("The second failure mode — technology-first sequencing — is the most common error in organisations with strong IT functions. "),
          x(
            "A technology-first programme deploys the AI tool and then asks the business to change its processes to fit the tool. A process-first programme redesigns the workflow, identifies where AI creates leverage, and then selects the tool that fits the redesigned process.",
            "Technology-first programmes deliver tools that nobody uses because the workflow that would use them was never redesigned. Process-first programmes deliver productivity because the human workflow and the AI capability are co-designed.",
          ),
          s(" If your AI programme started with vendor selection, you are in a technology-first programme. Pause and resequence before deployment."),
        ],
        [
          s("The third failure mode — underestimating change management — consistently surprises organisations that have successfully deployed ERP or CRM systems. "),
          x(
            "AI changes not just the tool but the nature of the work itself: what decisions humans make, what skills they need, what their output looks like. ERP changed processes. AI changes roles. The change management investment for AI is 2–3× the investment required for process-only technology change.",
            "Organisations that allocate 10% of their AI programme budget to change management — the standard for ERP — consistently underinvest. AI transformation requires 20–30% of total programme budget in change management.",
          ),
          s(" If your current AI programme budget allocates less than 20% to change management, you are planning for the third failure mode."),
        ],
      ],
      examples: [
        {
          title: "Retail bank — leadership misalignment surfaces at month six",
          body: "A retail bank launched an AI transformation programme with CEO, CFO, and COO sponsorship. Six months in, the COO's team had redesigned three processes; the CFO had frozen further investment pending a cost reduction proof point; the CEO was fielding board questions about AI competitive positioning. The three sponsors had never aligned on whether the programme's primary goal was cost reduction, productivity, or competitive differentiation. The programme was restructured at month eight after delivering no measurable outcome.",
        },
        {
          title: "Manufacturer — technology-first programme stalls",
          body: "A manufacturing company deployed an AI predictive maintenance tool across 12 plants before redesigning the maintenance workflow. The tool generated 40% more alerts than the maintenance team could action. Technicians began ignoring AI alerts because the volume was unmanageable in the existing workflow. Utilisation dropped to 12% within three months. A process redesign that preceded the deployment would have sized the alert volume to the team's capacity.",
        },
        {
          title: "Professional services firm — change management underinvestment",
          body: "A consulting firm launched an AI research assistant for consultants, allocating $800K to technology and $40K to training and adoption. Adoption at six months: 18%. A competitor running the same technology with a 25% change management budget achieved 71% adoption in the same period. The technology investment was equal. The human investment was not.",
        },
      ],
    }),
    sectionWithDiagram({
      number: "1.2",
      title: "Why leadership misalignment kills AI projects",
      subtitle: "How conflicting executive goals create competing programme mandates that destroy execution",
      take: "Leadership misalignment on AI transformation is not a personality conflict — it is a structural failure of goal-setting. When executives hold incompatible definitions of success, the programme team receives contradictory signals at every decision point. The programme cannot optimise for two conflicting goals simultaneously, so it optimises for neither.",
      why: "Business leaders who resolve alignment before launch — not during execution — give their programme teams a single north star. Every resource allocation, priority call, and communication decision becomes simpler when the leadership team agrees on the primary goal.",
      paragraphs: [
        [
          s("The three most common misalignment axes in AI transformation are: cost reduction vs workforce augmentation, speed to deploy vs governance rigour, and functional depth vs enterprise breadth. "),
          x(
            "Cost reduction and workforce augmentation are not mutually exclusive as outcomes, but they require different programme designs. A cost-reduction programme eliminates steps. An augmentation programme adds AI capability to existing steps. Running both simultaneously creates a programme that does neither well.",
            "Misalignment on the cost/augmentation axis produces staff who receive contradictory messages: 'AI will help you do your job better' from HR and 'AI will reduce our cost base by 15%' from Finance, in the same quarter.",
          ),
          s(" The cost of not aligning on the primary goal is a workforce that does not trust the programme's stated purpose."),
        ],
        [
          s("Speed vs governance misalignment is most dangerous in regulated industries. "),
          x(
            "A programme sponsor who prioritises competitive speed deploys AI tools before completing risk and compliance review. A programme sponsor who prioritises governance blocks deployment pending full audit. In financial services and healthcare, the governance sponsor is legally correct — but the business falls behind competitors who are taking calculated risks.",
            "The resolution is a risk-tiered deployment framework: low-risk AI use cases proceed immediately, medium-risk cases proceed with lightweight controls, high-risk cases proceed only after full review. Both sponsors get a partial win.",
          ),
          s(" A risk-tiered deployment framework resolves speed vs governance misalignment without requiring either sponsor to fully concede."),
        ],
        [
          s("Functional depth vs enterprise breadth is the most common misalignment between functional leaders and the CTO. "),
          x(
            "The sales leader wants the best sales AI, the HR leader wants the best HR AI, and the CTO wants a single AI platform with consistent data governance. These are legitimately competing architectures. The functional leader is optimising for immediate productivity. The CTO is optimising for long-term data integrity.",
            "The hybrid resolution — a shared data platform with function-specific AI applications — satisfies both but requires an explicit architectural decision before procurement, not a series of uncoordinated functional purchases.",
          ),
          s(" Document the functional vs platform architecture decision as a leadership alignment artefact before any AI procurement begins."),
        ],
      ],
      examples: [
        {
          title: "Insurance company — three sponsors, three mandates",
          body: "An insurance company's AI transformation had three executive sponsors: the CEO (competitive positioning), CFO (cost reduction), and CHRO (workforce development). At the six-month programme review, the CEO presented AI as a market differentiation story, the CFO presented a 12% claims processing cost reduction, and the CHRO presented a new AI skills training curriculum. The three presentations described three different programmes. The programme team had been managing three competing priorities for six months. A half-day leadership alignment session before launch would have resolved this.",
        },
        {
          title: "Healthcare system — governance vs speed resolved",
          body: "A hospital system's CMO and CIO were misaligned on clinical AI deployment speed. The CMO wanted AI diagnostic tools live within 90 days. The CIO required 180-day security and clinical validation. A risk-tiered framework resolved the conflict: administrative AI (scheduling, billing) deployed in 60 days with standard IT review; clinical decision support deployed in 120 days with clinical validation; diagnostic AI deployed in 180 days with full regulatory review. Both sponsors supported the framework.",
        },
        {
          title: "Retailer — platform vs point solution resolved at executive level",
          body: "A retailer's three functional leaders had each shortlisted a different AI vendor before an enterprise platform decision was made. The CTO escalated the conflict to the CEO, who convened a two-hour executive session. The outcome: a shared data platform decision (Microsoft Azure AI) with a 6-month evaluation period for functional tools. All three functional leaders participated in the platform selection. The subsequent functional tool evaluations were faster because the architecture constraint eliminated 60% of vendors immediately.",
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
      title: "The technology-first trap",
      subtitle: "Why deploying AI before redesigning the workflow produces tools nobody uses",
      take: "Technology-first AI deployment gives people a powerful tool in a workflow that was not designed to use it. The result is predictable: the tool generates outputs the existing process cannot absorb. Utilisation drops. The programme is labelled a failure. The technology was never the problem — the sequencing was.",
      why: "Process-first AI deployment requires more upfront work and delays visible technology deployment by 4–8 weeks. That delay consistently produces 3–5× higher adoption rates and 2× the measured productivity gain compared to technology-first programmes. The payback on the process design investment is never in doubt.",
      paragraphs: [
        [
          s("The process-first sequence has four steps: map the existing workflow, identify the decision points where AI creates leverage, redesign the workflow to integrate AI at those decision points, and then select the technology that best fits the redesigned workflow. "),
          x(
            "Most organisations skip steps one through three and start at step four — vendor selection. The result is a vendor selected for features that matter in a demo but not in the actual workflow, integrated into a process that was never designed to use those features.",
            "A process map takes two weeks to build for a single function. It prevents six months of low-adoption deployment.",
          ),
          s(" Require a current-state process map and a future-state AI-integrated process map before any vendor selection decision is made."),
        ],
        [
          s("The most common technology-first mistake is deploying AI to generate outputs that the downstream process cannot consume. "),
          x(
            "An AI tool that generates 500 customer risk flags per day in an organisation whose risk team reviews 50 per day is not an AI problem — it is a process problem. The tool is doing exactly what it was bought to do. The workflow was never redesigned to handle the volume the tool produces.",
            "Before deployment, answer: how many AI-generated outputs can the downstream process absorb per day? If the answer is less than what the tool will generate, the process must be redesigned first.",
          ),
          s(" Define the downstream absorption capacity before deployment. If the tool will generate more than the process can absorb, the deployment will fail regardless of tool quality."),
        ],
        [
          s("Process-first sequencing also changes the vendor selection conversation. "),
          x(
            "When you arrive at a vendor demo with a redesigned workflow and specific integration requirements, vendor demos become structured evaluations instead of open-ended feature tours. You can tell within 20 minutes whether the vendor's tool fits the redesigned workflow or not. The evaluation becomes 40% faster and the selection is more accurate.",
            "Vendors who struggle to answer process-specific questions in a demo are revealing that their tool was not designed for your workflow — regardless of their general capability claims.",
          ),
          s(" Your redesigned workflow is your vendor evaluation rubric. Any tool that cannot map to your workflow steps fails in round one."),
        ],
      ],
      examples: [
        {
          title: "Legal department — AI output volume overwhelms workflow",
          body: "A legal department deployed an AI contract review tool that flagged anomalous clauses. In the pilot, the tool reviewed 10 contracts per week and flagged 40 clauses — a workload the team managed. In production with 80 contracts per week and 320 flags, the team could not action all flags before contract execution deadlines. The team began ignoring the flags to meet deadlines. Utilisation of the flag review feature dropped to 8%. A workflow redesign would have set a maximum daily flag threshold and prioritised flag severity before deployment.",
        },
        {
          title: "Finance team — process map reveals workflow mismatch",
          body: "A finance team built a current-state process map for their month-end close before selecting an AI tool. The map revealed that three of the nine close steps were bottlenecked by manual data aggregation that AI could automate — but six steps required human judgement that AI could not replace. The team evaluated vendors specifically on automating the three aggregation steps. The selected vendor was not the highest-rated in analyst reports — it was the vendor whose tool best addressed the three bottlenecked steps.",
        },
        {
          title: "Customer service — redesign before deployment doubles adoption",
          body: "A telecom company ran two parallel AI customer service deployments in two regions. Region A deployed the AI tool first and then adjusted workflows in response to usage data. Region B redesigned workflows first and then deployed the tool. At six months, Region A had 31% agent adoption. Region B had 74%. The technology was identical. Region B's process-first sequencing produced 2.4× the adoption rate, which translated into 2.1× the productivity gain.",
        },
      ],
    }, {
      kind: "diagram",
      id: "bl-change-management",
      type: "flow",
      title: "AI Change Management",
      caption:
        "Sponsor → communicate → train → champions → measure adoption.",
    }),
    buildSection({
      number: "1.4",
      title: "Underestimating the change management burden",
      subtitle: "Why AI transformation requires 2–3× the change management investment of standard IT projects",
      take: "AI does not just change what tools people use — it changes what their jobs mean. When a decision that defined a role is now made by an algorithm, the human's identity in their work changes, not just their workflow. Standard IT change management addresses workflow change. AI change management must address identity change. The investment required is categorically different.",
      why: "Leaders who budget for AI change management at ERP-level investment (8–12% of programme cost) consistently underdeliver on adoption. Leaders who budget at 20–30% consistently outperform on adoption and time-to-value. The change management investment is not a soft cost — it is the primary driver of programme ROI.",
      paragraphs: [
        [
          s("Three elements of AI change are qualitatively different from prior technology change: decision authority transfer, skill obsolescence anxiety, and output ownership ambiguity. "),
          x(
            "When AI takes over a decision a human previously made, the human loses a piece of their professional identity. When a skill a person spent years developing becomes automated, anxiety about future relevance intensifies. When AI produces an output and a human reviews it, the question of who owns the quality of that output is genuinely unresolved.",
            "ERP change management addressed none of these three elements. AI change management must address all three to achieve adoption.",
          ),
          s(" Design your change management programme to address decision authority, skill relevance, and output ownership explicitly — not as afterthoughts."),
        ],
        [
          s("The 20–30% change management budget rule covers four investment categories: communications, training, coaching, and reinforcement. "),
          x(
            "Communications: structured programme narrative for all stakeholder groups throughout transformation. Training: not just tool training but role redesign, new skill development, and AI collaboration practice. Coaching: individual and team-level support for leaders navigating adoption challenges. Reinforcement: performance frameworks, incentives, and recognition structures that reward AI-augmented work.",
            "Most programmes invest heavily in communications and training but underinvest in coaching and reinforcement. Coaching and reinforcement are where adoption converts to sustained behaviour change.",
          ),
          s(" If your change management plan does not have a budget line for reinforcement activities in months 6–18, adoption will peak and then reverse."),
        ],
        [
          s("Change management investment compounds — the best programmes start change management activities before technology deployment. "),
          x(
            "A change readiness assessment, leadership alignment sessions, and initial stakeholder communications that begin 8–12 weeks before go-live give employees time to process the change, ask questions, and develop initial AI fluency before they need to use the tool in their work.",
            "Programmes that launch change management activities at the same time as the technology deployment give employees no processing time. The result is confusion and resistance that could have been pre-empted.",
          ),
          s(" Start change management 8–12 weeks before AI tool deployment, not on the day of deployment."),
        ],
      ],
      examples: [
        {
          title: "Bank — change management budget unlocks ROI",
          body: "Two banks deployed identical AI loan underwriting tools in the same quarter. Bank A allocated 8% of programme budget to change management — standard for their IT projects. Bank B allocated 28%. At 12 months, Bank A had 34% underwriter adoption and no measured productivity gain. Bank B had 79% adoption and a 22% reduction in underwriting cycle time. The technology investment was equal. The change management investment was the differentiating variable.",
        },
        {
          title: "Logistics firm — decision authority transfer addressed proactively",
          body: "A logistics firm recognised that deploying AI route optimisation would transfer a core decision — route design — from experienced dispatchers to an algorithm. Instead of assuming dispatchers would accept this, the firm redesigned the dispatcher role to focus on exception management, customer relationships, and scenario planning that the AI could not perform. The change management programme framed this as a promotion of skills, not a replacement. Dispatcher adoption was 91% at six months.",
        },
        {
          title: "Accounting firm — reinforcement prevents adoption reversal",
          body: "An accounting firm deployed AI tax research tools with strong initial training and communications. Adoption reached 68% at month three. The firm then paused change management investment, assuming the tool was embedded. By month nine, adoption had dropped to 41% as billing incentives still rewarded hours spent on manual research. A reinforcement phase that updated billing guidance and recognised AI-augmented work as high-value would have sustained the adoption gains.",
        },
      ],
    }),
    buildSection({
      number: "1.5",
      title: "Insufficient data infrastructure investment",
      subtitle: "Why AI capability is only as good as the data it operates on — and most organisations are not data-ready",
      take: "AI does not create insight from poor data — it scales poor data into confident-sounding wrong answers. An organisation that deploys AI on top of fragmented, inconsistent, or ungoverned data does not accelerate decision-making. It accelerates confident misinformation. Data infrastructure readiness is a prerequisite for AI deployment, not a parallel workstream.",
      why: "Business leaders who discover data quality problems after AI deployment face the worst possible outcome: a tool that is live, expensive, and producing unreliable outputs that erode trust in the entire AI programme. Data readiness assessment before deployment is the cheapest risk mitigation in the programme portfolio.",
      paragraphs: [
        [
          s("Three data readiness indicators predict AI deployment success: data completeness, data consistency, and data governance. "),
          x(
            "Data completeness: does the organisation have enough historical data in the relevant domain for the AI to learn from? Data consistency: is the same data element defined the same way across systems — or does 'customer revenue' mean different things in CRM, ERP, and finance? Data governance: is there a clear ownership model for each data element the AI will consume, with a defined update frequency and quality standard?",
            "An AI tool deployed against data that fails two of these three criteria will produce outputs that mislead rather than inform — often confidently and at scale.",
          ),
          s(" Run a data readiness assessment against these three criteria for each AI use case before vendor selection."),
        ],
        [
          s("The most common data problem that surfaces post-deployment is inconsistent data definitions across source systems. "),
          x(
            "When an AI model is trained on 'customer lifetime value' from the CRM, which uses one calculation, and then deployed against 'customer lifetime value' from the data warehouse, which uses a different calculation, the model's outputs are systematically biased in a way that is invisible without a data lineage audit.",
            "Data lineage documentation — which system owns which data element and how it is transformed between source and AI input — is a technical artefact that business leaders must require before deployment approval.",
          ),
          s(" Require a data lineage document for each AI input before sign-off on deployment. If the team cannot produce one, the data is not ready."),
        ],
        [
          s("Data governance investment must precede AI deployment, not follow it. "),
          x(
            "Organisations that launch AI and then build data governance in parallel consistently find that governance decisions made after deployment are harder to enforce — because the AI is already producing outputs that people are acting on. Post-deployment data governance is change management on top of change management.",
            "Pre-deployment data governance is an 8–12 week investment in clear data ownership, quality standards, and update protocols. Post-deployment data governance is an 18-month remediation programme.",
          ),
          s(" Block AI deployment in any domain where data governance has not been established. The 8-week pre-work is less expensive than 18 months of post-deployment remediation."),
        ],
      ],
      examples: [
        {
          title: "Retailer — AI demand forecasting fails on inconsistent data",
          body: "A retailer deployed AI demand forecasting across 200 SKUs. Within 90 days, store managers were overriding AI recommendations at a 67% rate because the recommendations did not match their local market knowledge. An investigation revealed that the AI was trained on national demand patterns, while store-level sales data used different product category definitions. The inconsistency meant the AI's 'demand forecast' was a national average, not a local prediction. A data consistency audit before deployment would have caught the definition mismatch.",
        },
        {
          title: "Healthcare — incomplete data produces biased AI outputs",
          body: "A hospital deployed an AI patient readmission risk model trained on three years of data from two of its five clinical systems. The missing data from three systems created a model that was systematically underestimating readmission risk for patients treated in outpatient settings — the three excluded systems. The bias was discovered only after a 6-month clinical audit. Data completeness assessment before deployment would have identified the coverage gap.",
        },
        {
          title: "Financial services — data governance blocks bad outputs",
          body: "A wealth management firm established data governance for all inputs to its AI portfolio analytics tool before deployment. The governance process identified that 'benchmark return' was defined differently across five data sources. Standardising the definition took six weeks. The deployment was delayed by six weeks. When the tool went live, its benchmark comparisons were accurate from day one. A peer firm that deployed without governance spent 11 months correcting client-facing reports containing inconsistent benchmark data.",
        },
      ],
    }),
    buildSection({
      number: "1.6",
      title: "Piloting without a pathway to scale",
      subtitle: "Why successful pilots that cannot scale are expensive learning that produces no value",
      take: "A pilot that succeeds but cannot scale is not a success — it is a proof of concept that consumes budget, creates expectations, and delivers no business outcome. The scale pathway must be defined before the pilot begins: if the pilot succeeds, what happens next, with what budget, timeline, and governance? Pilots without scale pathways are performance theatre.",
      why: "Leaders who define the scale pathway before launching a pilot make a fundamentally different decision about what to pilot, how to measure it, and what success looks like. The scale question changes the design of the pilot itself — and ensures that a successful pilot is actually deployable at enterprise scale.",
      paragraphs: [
        [
          s("A scale pathway document has three components: scale criteria (what results in the pilot justify moving to scale?), scale architecture (what infrastructure, governance, and change management does scale require?), and scale budget (what investment is pre-approved if scale criteria are met?). "),
          x(
            "Without pre-defined scale criteria, every pilot review becomes a debate about whether the results are good enough to justify continued investment. With pre-defined criteria, the decision is mechanical: the pilot either met the criteria or it did not.",
            "Pre-defined scale criteria also prevent the most common pilot trap: the pilot that delivers modest results but generates enthusiasm, leading to a scale decision that was never justified by the data.",
          ),
          s(" Write the scale criteria before the pilot starts. A pilot whose scale criteria were defined after the results are known is a rationalisation, not an evaluation."),
        ],
        [
          s("The most common reason successful pilots fail to scale is that the scale architecture was never designed. "),
          x(
            "A pilot might run on a dedicated data environment, with a specialist team, and with custom integrations built for the pilot context. Scale requires the tool to run on the production data environment, be used by the existing team, and integrate with standard enterprise systems. These are different technical and organisational problems.",
            "If the pilot cannot be replicated in the production environment without the specialist team and custom integrations, the pilot proved that the tool works in a controlled environment, not that it works in the enterprise.",
          ),
          s(" Require the pilot team to document the conditions that made the pilot work and assess whether each condition exists in the production environment before sign-off on scale."),
        ],
        [
          s("Pre-approved scale budget is the missing element in most AI pilot frameworks. "),
          x(
            "If a pilot succeeds but the organisation must go through a new budget approval cycle before scaling, the momentum is lost. By the time scale budget is approved, the pilot team has moved on, the change management energy has dissipated, and the technology vendor has changed its pricing. Pre-approved scale budget converts pilot success into immediate action.",
            "A typical AI pilot budget is $150K–$500K. A pre-approved scale budget is $1M–$5M. The CFO who approves the pilot without pre-approving scale is approving an experiment with no path to return.",
          ),
          s(" Bring the scale budget request to the board when you bring the pilot approval. The incremental approval cost is low; the benefit of momentum preservation is high."),
        ],
      ],
      examples: [
        {
          title: "Insurance — pilot success, scale failure",
          body: "An insurance company ran a successful AI claims processing pilot: 35% faster cycle time, 94% accuracy, strong adjuster adoption. The pilot ran on a dedicated Azure environment configured by the vendor. When the team proposed scaling to all claims, IT identified that the production environment used a different cloud architecture. Re-engineering the integration for production took 14 months. By the time scale was ready, the vendor had been acquired, pricing had changed, and two-thirds of the pilot team had left the project. The pilot result was never replicated at scale.",
        },
        {
          title: "Manufacturer — pre-defined scale criteria prevent bad decision",
          body: "A manufacturer pre-defined its AI quality inspection scale criteria: ≥92% defect detection rate, ≤3% false positive rate, and ≤8-week deployment time per plant. The pilot delivered 89% detection rate and 6% false positives — below threshold on both criteria. Without pre-defined criteria, the enthusiasm of the pilot team might have pushed a scale decision. With them, the decision was clear: the tool was not ready. The team negotiated a 60-day improvement cycle with the vendor, reached threshold, and then scaled.",
        },
        {
          title: "Retailer — pre-approved scale budget preserves momentum",
          body: "A retailer's CFO approved a $200K AI personalisation pilot with a pre-approved $2.4M scale budget conditional on pilot success (defined as ≥8% lift in email conversion). The pilot delivered 11% lift. Because scale budget was pre-approved, the team moved to scale within 30 days of pilot completion. Competitors who ran similar pilots without pre-approved scale budgets took an average of 7 months from pilot completion to scale approval. The retailer's head start translated into a full email personalisation programme running before its next competitive season.",
        },
      ],
    }),
    buildSection({
      number: "1.7",
      title: "Measuring the wrong outcomes",
      subtitle: "Why activity metrics produce false confidence and business outcome metrics produce real decisions",
      take: "AI programmes that measure the number of pilots launched, tools deployed, and employees trained are measuring activity. Activity metrics look impressive and tell you nothing about whether the business is better. AI programmes that measure revenue impact, cost reduction, decision speed, and error rate reduction are measuring outcomes. Outcome metrics are harder to report in month three — and the only metrics that justify continued investment.",
      why: "Business leaders who report to the board on AI activity metrics are building a reporting structure that will collapse when the board asks for ROI. Leaders who report on outcome metrics from month one build a reporting structure that justifies escalating investment and identifies underperforming programmes early enough to correct them.",
      paragraphs: [
        [
          s("The five activity metrics that most commonly masquerade as outcome metrics in AI programmes are: number of AI tools deployed, percentage of employees trained, number of pilots completed, AI investment as percentage of IT budget, and model accuracy in testing. "),
          x(
            "None of these five metrics tell you whether the business is performing better. A company can have 40 AI tools deployed, 85% of employees trained, 12 pilots completed, 18% of IT budget in AI, and 97% model accuracy in testing — and zero measurable business improvement.",
            "These metrics measure inputs and activities. They are necessary to track for programme management but insufficient to report as programme success.",
          ),
          s(" If your AI programme board report contains more than two of these five metrics as primary success measures, your reporting structure is measuring the wrong things."),
        ],
        [
          s("The four business outcome metrics that AI programmes must track from month one are: cycle time reduction (how much faster is the decision or process?), error rate reduction (how much less often does the process produce the wrong output?), revenue impact (what is the measurable revenue change attributable to AI?), and cost per transaction (what is the unit cost of the process before and after AI?). "),
          x(
            "These metrics are harder to isolate from other business variables, require controlled comparison, and may not show significant movement in the first 90 days. That difficulty is precisely why they are not reported — not because they are impossible to measure, but because they require more analytical rigour.",
            "The analytical rigour required to measure business outcomes is itself a signal of programme maturity. Programmes that cannot measure business outcomes are not mature enough to report to the board.",
          ),
          s(" Require business outcome metrics from the programme team at 90 days. If they cannot produce them, the programme needs a measurement infrastructure investment before further deployment."),
        ],
        [
          s("Leading outcome metrics — early indicators that trail business results — bridge the measurement gap in the first 90 days. "),
          x(
            "Tool utilisation rate (are people actually using the AI?) is a leading indicator of productivity gain. AI recommendation acceptance rate (are decision-makers accepting or overriding AI outputs?) is a leading indicator of trust and value. Time-to-first-AI-output (how quickly does the AI reduce time-in-process?) is a leading indicator of cycle time reduction.",
            "Leading indicators allow early course correction. A utilisation rate below 40% at 60 days predicts adoption failure before it is irreversible. A recommendation acceptance rate below 30% signals a tool quality or workflow alignment problem before it becomes a culture of workarounds.",
          ),
          s(" Report one leading indicator and one lagging business outcome metric per AI use case at every programme review. Never report only activity metrics."),
        ],
      ],
      examples: [
        {
          title: "Bank — activity reporting leads to board surprise",
          body: "A bank's AI programme reported to the board for 18 months on activity metrics: 23 tools deployed, 4,200 employees trained, 91% model accuracy in testing. When the board asked for the ROI, the programme team could not provide business outcome data. An external audit found that 14 of the 23 tools had utilisation rates below 20%, and the three highest-utilisation tools together had prevented an estimated $1.8M in fraud — a number that had never been calculated or reported. The board authorised a 30-day outcome measurement exercise before the next funding cycle.",
        },
        {
          title: "Logistics firm — outcome metrics justify investment",
          body: "A logistics firm set four AI outcome metrics before deployment: route cost per kilometre, on-time delivery percentage, fuel consumption per delivery, and customer complaint rate. At 12 months, the AI route optimisation programme had reduced route cost by 9%, improved on-time delivery by 6 percentage points, reduced fuel consumption by 11%, and had no measurable impact on complaints. Three positive outcomes and one neutral outcome gave the board a clear investment decision: expand the programme with confidence in the three proven metrics.",
        },
        {
          title: "Marketing team — leading indicators enable correction at 60 days",
          body: "A marketing team deployed AI content personalisation with two leading indicators: email open rate change and click-through rate change, tracked weekly. At day 45, open rates were up 4% but click-through rates were flat — indicating personalisation was attracting attention but not driving action. The team reviewed the AI recommendation logic and found it was optimising for past behaviour without seasonal adjustment. A model update at day 50 corrected the pattern. By day 90, click-through rates were up 8%. Without leading indicator tracking, the problem would not have been visible until the quarterly business review.",
        },
      ],
    }),
    buildSection({
      number: "1.8",
      title: "Ignoring the human adoption gap",
      subtitle: "Why the gap between tool deployment and tool adoption is the real AI transformation risk",
      take: "Deploying an AI tool is not the same as adopting it. The adoption gap — the distance between a tool being available and a tool changing how people work — is where most AI programme value is lost. Closing the adoption gap requires deliberate leadership attention to behaviour change, not just technology availability.",
      why: "Leaders who measure deployment and declare success ignore the most critical variable in AI ROI: whether people actually use the tool in ways that change their outputs. A tool that is available but unused is a licensing cost, not a transformation. The adoption gap is a leadership problem, not a technology problem.",
      paragraphs: [
        [
          s("The human adoption gap has three components: awareness gap (people don't know the tool exists or what it does), capability gap (people know it exists but don't know how to use it effectively), and motivation gap (people know how to use it but choose not to). "),
          x(
            "Most AI training programmes address the capability gap but ignore the motivation gap. A person who can use the AI tool but sees no benefit to their own work — or sees a threat to their job security — will not use it. Motivation gap closure requires demonstrating personal benefit and removing perceived risk.",
            "The awareness gap is easy to close with communications. The capability gap is manageable with training. The motivation gap is the hardest and most neglected component of AI adoption.",
          ),
          s(" Audit your AI adoption programme against all three gaps. If your plan addresses only awareness and capability, you are assuming the motivation gap does not exist."),
        ],
        [
          s("Motivation gap drivers in AI adoption are consistent across industries: job security threat perception, professional identity loss, mistrust of AI accuracy, and social proof absence. "),
          x(
            "Job security threat perception is real even when the organisation has committed to no redundancies — because communications are rarely believed at face value in a transformation. Professional identity loss is real when a person's valued expertise is automated. Mistrust of AI accuracy is rational when the tool makes early mistakes. Social proof absence means people do not see respected peers visibly using and benefiting from the AI.",
            "Each of these drivers requires a specific intervention. Blanket reassurance addresses none of them effectively.",
          ),
          s(" Map the specific motivation gap drivers in your organisation before designing adoption interventions. Generic reassurance does not close motivation gaps."),
        ],
        [
          s("Peer role models are the most powerful adoption accelerator and the most underutilised. "),
          x(
            "A respected colleague who visibly uses the AI tool and talks about how it has improved their work is more persuasive than any executive communication or training programme. Identifying and enabling AI early adopters as peer champions — giving them airtime, recognition, and communities of practice to share their experience — accelerates adoption across the rest of the team.",
            "The investment in peer champion programmes is low. A monthly 30-minute 'how I use AI' session from a respected practitioner, combined with a Slack channel for tips, costs almost nothing and moves adoption metrics more than most formal training.",
          ),
          s(" Identify your five most respected early AI adopters and invest in making them visible champions. Their influence is worth more than five formal training sessions."),
        ],
      ],
      examples: [
        {
          title: "Law firm — motivation gap kills expensive deployment",
          body: "A law firm deployed an AI contract review tool at $180K per year. Utilisation at month six: 22%. Exit interviews with non-adopters revealed the dominant motivation gap driver: senior associates believed using AI on contract review would be visible to partners as 'cheating' and would reduce the billable hours they could log. The tool was available. The capability training had been done. But the firm's incentive structure (billable hours) and culture (manual work as credibility signal) created an insurmountable motivation gap. The firm addressed it by updating its billing guidance to count AI-assisted review as senior associate time and publicly recognising AI-using associates in partner meetings. Utilisation reached 71% within 90 days of the incentive change.",
        },
        {
          title: "Customer service team — peer champions accelerate adoption",
          body: "A telecom company identified six customer service agents who were enthusiastic early adopters of its AI assistant tool. The company gave each champion two hours per month to run informal team sessions showing how they used AI to resolve calls faster, handle edge cases, and reduce after-call documentation time. Champions shared their tips in a dedicated Teams channel. At six months, the champion team had 91% AI utilisation. The non-champion teams had 43%. The company expanded the champion programme to all regions in month seven.",
        },
        {
          title: "Finance team — accuracy mistrust addressed with audit transparency",
          body: "A finance team's AI forecasting tool had 76% adoption at month three — stalled because three senior analysts publicly distrusted the model's accuracy after it produced an outlier forecast in month one. The team introduced a weekly model accuracy audit: actual outcomes vs AI forecast, shared with the whole team. Over 12 weeks, the audit showed the model's accuracy improving to 89% on a rolling 30-day basis. The visibility of the improvement — and the team's understanding of why the outlier had occurred — converted the sceptical analysts. Adoption reached 94% at month six.",
        },
      ],
    }),
    buildSection({
      number: "1.9",
      title: "BL decision lens: your AI transformation failure audit",
      subtitle: "A structured self-assessment for leaders to identify which failure modes are active in their current programme",
      take: "The transformation failure audit is a structured leadership conversation — not an external consultant engagement. Conducted honestly by the leadership team, it surfaces which of the five failure modes are present in your current or planned AI programme and assigns ownership for each corrective action. Done in 90 minutes, it is the highest-ROI leadership meeting in your AI transformation calendar.",
      why: "Business leaders who avoid honest self-assessment of their AI programme's failure risks are managing a programme they do not fully understand. The audit creates shared awareness of the risks and converts abstract concerns into owned action items.",
      paragraphs: [
        [
          s("The failure audit has five diagnostic questions, one per failure mode. Each question is answered by the full leadership team on a 1–5 scale, where 1 is 'this failure mode is active and unaddressed' and 5 is 'this failure mode has been fully mitigated.' "),
          x(
            "Q1 Leadership alignment: Can every member of the leadership team state the primary goal of the AI transformation in the same words? Q2 Process-first sequencing: For every AI use case in deployment, does a current-state and future-state process map exist? Q3 Change management investment: Is 20–30% of total programme budget allocated to change management activities? Q4 Data readiness: Has a data readiness assessment been completed for every AI use case currently in deployment or planned? Q5 Outcome measurement: Are business outcome metrics (not activity metrics) being reported at every programme review?",
            "A score below 3 on any question indicates an active failure mode that requires immediate corrective action.",
          ),
          s(" Facilitate the audit with all programme sponsors in the room. Divergent scores on the same question reveal the misalignment itself."),
        ],
        [
          s("The most valuable output of the failure audit is the gap between the highest and lowest individual score on each question. "),
          x(
            "If the CEO scores Q1 (leadership alignment) at 5 and the CHRO scores it at 2, that gap is the alignment problem made visible. The divergence does not require analysis — it requires a conversation. Surfacing divergent scores in a facilitated session is often the first honest conversation a leadership team has had about their AI programme.",
            "Facilitating the audit as an anonymous scoring exercise before shared reveal maximises honesty. Leaders who believe their peers can see their score in real time often inflate scores to avoid perceived criticism.",
          ),
          s(" Use anonymous scoring in the first audit. The visible divergence will create enough productive discomfort to sustain the leadership conversation needed to resolve it."),
        ],
        [
          s("Repeat the failure audit quarterly — it is as valuable as a financial review for a programme at scale. "),
          x(
            "Failure modes that were mitigated in Q1 can re-emerge in Q3 as programme complexity increases, leadership attention shifts, and new use cases introduce new risks. A quarterly audit is a programme health check that catches re-emerging failure modes before they compound.",
            "The quarterly audit also creates a historical record of programme health that is genuinely useful for board reporting — showing not just programme activity but leadership's management of programme risk over time.",
          ),
          s(" Add the failure audit to the AI programme governance calendar as a quarterly standing agenda item. A 90-minute investment per quarter is proportionate to the scale of risk it manages."),
        ],
      ],
      examples: [
        {
          title: "Financial services — audit surfaces hidden misalignment",
          body: "A financial services firm ran its first failure audit with six executive sponsors. Q1 scores ranged from 2 to 5. The CEO and two functional heads scored alignment at 5; the CTO, CFO, and COO scored it at 2 or 3. The session revealed that the CEO's definition of the programme goal ('AI-driven competitive advantage') was not shared by the executives responsible for execution, who had different operational mandates. A half-day alignment session the following week produced a shared goal statement that all six signed. The next failure audit showed Q1 scores of 4–5 across all sponsors.",
        },
        {
          title: "Retailer — quarterly audit catches re-emerging data risk",
          body: "A retailer's Q1 failure audit scored data readiness at 4 across all sponsors — readiness had been confirmed for the initial three use cases. At Q3, the data readiness score dropped to 2 from three sponsors. New AI use cases in demand forecasting were consuming inventory data from a legacy system with known quality issues that the Q1 assessment had not covered. The quarterly audit caught the gap before deployment. A six-week data remediation exercise resolved it.",
        },
        {
          title: "Healthcare system — audit as board reporting asset",
          body: "A hospital system shared its quarterly failure audit scores with the board's AI governance committee — showing the rolling score trend across all five failure modes over four quarters. The board found the transparency more valuable than the system's standard programme dashboard. The historical trend showed that change management had improved from 2 to 4 over four quarters while data readiness had plateaued at 3. The board directed additional investment to data governance as a result. The audit had become the board's primary AI programme management tool.",
        },
      ],
    }),
  ],
  quiz: [
    {
      q: "What is the most common root cause of AI transformation failure in enterprises?",
      options: [
        "Insufficient AI model accuracy for real-world business conditions",
        "Organisational failures — leadership misalignment, technology-first sequencing, and change management underinvestment",
        "Vendor lock-in preventing organisations from switching to better tools",
        "Regulatory restrictions on AI use in enterprise environments",
      ],
      correct: 1,
      correctFeedback:
        "Correct. Between 70–85% of AI transformation failures are organisational, not technical. The five failure modes — leadership misalignment, technology-first sequencing, change management underinvestment, data infrastructure gaps, and wrong outcome metrics — are all preventable leadership failures.",
      wrongFeedback:
        "AI transformation failures are overwhelmingly organisational rather than technical. The five systemic failure modes are leadership misalignment, technology-first sequencing, change management underinvestment, insufficient data infrastructure, and measuring activity instead of outcomes.",
    },
    {
      q: "A business leader says their AI programme is succeeding because they have deployed 18 AI tools, trained 80% of employees, and achieved 95% model accuracy in testing. What is the critical problem with this assessment?",
      options: [
        "Model accuracy should be measured in production, not in testing",
        "These are all activity metrics — none of them measure whether the business is performing better",
        "The training percentage is too low to sustain adoption",
        "18 AI tools is too many to manage effectively",
      ],
      correct: 1,
      correctFeedback:
        "Correct. Tools deployed, employees trained, and model accuracy in testing are all activity metrics. They describe inputs and activities but reveal nothing about business outcomes. The questions that matter are: is cycle time reduced? Are error rates lower? What is the revenue or cost impact?",
      wrongFeedback:
        "The problem is that all three measures are activity metrics. They measure what the programme has done, not whether the business has improved. Business outcome metrics — cycle time, error rates, revenue impact, cost per transaction — must be tracked alongside activity metrics.",
    },
    {
      kind: "order",
      q: "Order these AI deployment steps in the process-first sequence (correct order):",
      items: [
        "Map the existing workflow to understand the current process",
        "Identify decision points where AI creates the most leverage",
        "Redesign the workflow to integrate AI at those decision points",
        "Select the technology that fits the redesigned workflow",
        "Deploy and measure against the redesigned process metrics",
      ],
      prompt: "Drag to arrange in the correct sequence",
      correctFeedback:
        "Correct. The process-first sequence starts with workflow understanding, identifies AI leverage points, redesigns before selecting technology, and deploys against process metrics. This sequence consistently produces 3–5× higher adoption rates than technology-first deployment.",
      wrongFeedback:
        "The process-first sequence starts with workflow mapping — never with vendor selection. The technology must fit the redesigned process, not the other way around. Technology-first programmes give people powerful tools in workflows not designed to use them.",
    },
    {
      q: "What percentage of total AI programme budget should be allocated to change management activities to achieve sustainable adoption?",
      options: [
        "3–5% — change management is a soft cost that should be minimised",
        "8–12% — the standard used for ERP and CRM implementations",
        "20–30% — reflecting that AI changes roles and identity, not just workflows",
        "50% or more — adoption is harder than technology deployment",
      ],
      correct: 2,
      correctFeedback:
        "Correct. AI transformation requires 20–30% of total programme budget in change management because AI changes not just tools and workflows but the nature of work itself — including decision authority, skill relevance, and professional identity. ERP-level investment (8–12%) consistently underdelivers on AI adoption.",
      wrongFeedback:
        "AI change management requires 20–30% of total programme budget — significantly more than the 8–12% standard for ERP projects. The difference reflects that AI changes role identity and decision authority, not just processes and tools.",
    },
    {
      kind: "categorize",
      q: "Categorise these AI programme metrics as either 'Activity Metrics' or 'Business Outcome Metrics':",
      categories: ["Activity Metrics", "Business Outcome Metrics"],
      items: [
        { text: "Number of AI tools deployed", category: 0 },
        { text: "Percentage of employees trained", category: 0 },
        { text: "Model accuracy in testing", category: 0 },
        { text: "Cycle time reduction in the target process", category: 1 },
        { text: "Error rate reduction in AI-assisted decisions", category: 1 },
        { text: "Revenue or cost impact attributable to AI", category: 1 },
      ],
      correctFeedback:
        "Correct. Activity metrics (tools deployed, employees trained, test accuracy) describe programme inputs. Business outcome metrics (cycle time, error rate, revenue impact) describe whether the business is actually performing better. Both are useful, but only outcome metrics justify continued investment.",
      wrongFeedback:
        "Activity metrics describe what the programme has done. Outcome metrics describe whether the business has improved. Tools deployed, employees trained, and test accuracy are activities. Cycle time, error rate, and revenue impact are outcomes.",
    },
    {
      q: "A pilot AI programme succeeds — cycle time reduced by 28%, accuracy improved by 15%, team adoption at 81%. But when the team proposes scaling, IT identifies that the pilot ran on a custom environment not replicated in production. What is the correct diagnosis?",
      options: [
        "The pilot was not successful enough to justify the scaling investment",
        "The pilot proved the tool works in a controlled environment but the scale architecture was never designed",
        "IT is blocking a successful programme for technical reasons",
        "The adoption rate should be higher before scaling is considered",
      ],
      correct: 1,
      correctFeedback:
        "Correct. A pilot that succeeds in a custom environment proves the tool works under controlled conditions, not that it is deployable at enterprise scale. The scale architecture — production environment compatibility, standard integration, existing team operation — must be designed before the pilot begins, not discovered after it succeeds.",
      wrongFeedback:
        "The pilot results are strong. The problem is structural: the pilot ran on conditions that don't exist in production. A scale architecture review should be part of pilot design, not a post-success discovery. The scale pathway document should have identified this gap before the pilot launched.",
    },
  ],
});
