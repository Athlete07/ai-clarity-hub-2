import { buildChapter, buildSection, s, x, sectionWithDiagram } from "../concepts-bl-helpers";
import { BL_CALLOUT } from "../concepts-bl-helpers";

export const chapter06BlAiWorkforcePlanning = buildChapter({
  slug: "bl-ai-workforce-planning",
  number: 6,
  shortTitle: "AI Workforce Planning",
  title: "AI Workforce Planning: Preparing Your Organisation for the Long Game",
  readingMinutes: 26,
  summary:
    "AI workforce planning is the strategic process of anticipating what capabilities the organisation will need as AI augments its operations, and preparing the people, structures, and pipelines to meet that need. It is not a one-time headcount exercise — it is a continuous capability management process that runs in parallel with AI deployment. Business leaders who invest in AI workforce planning build organisations that adapt to AI capability evolution rather than react to it.",
  keyTakeaway:
    "AI workforce planning requires four strategic choices: which capabilities to build internally versus acquire externally, how to reskill versus redeploy versus restructure, what AI fluency baseline the entire organisation needs, and how to manage workforce transitions humanely. Leaders who make these choices proactively build resilient organisations. Leaders who make them reactively manage workforce crises.",
  pmCallout: BL_CALLOUT,
  sections: [
    sectionWithDiagram({
      number: "6.1",
      title: "The strategic workforce planning imperative",
      subtitle: "Why AI workforce planning must run as a parallel programme to AI deployment — not a response to it",
      take: "AI workforce planning that begins after AI deployment has already changed the workforce need is remediation, not planning. The planning horizon for AI workforce decisions is 18–36 months: the time required to develop new capabilities internally, restructure roles, and manage transitions humanely. By the time AI deployment makes the workforce need visible, it is too late to meet it through planning.",
      why: "Business leaders who integrate workforce planning into AI programme governance — running it as a parallel workstream with the same investment and attention as technology deployment — avoid the workforce crises that reactive organisations manage repeatedly. The investment in planning is consistently less expensive than the cost of unplanned transitions.",
      paragraphs: [
        [
          s("The planning horizon for AI workforce decisions is determined by the longest lead time in the workforce change portfolio. "),
          x(
            "Retraining an existing workforce member in a new skill domain takes 12–18 months to reach proficiency. Recruiting a specialist with new capabilities takes 4–12 months. Restructuring a team requires HR, legal, and union processes that run 6–18 months. If AI deployment creates a capability need that requires retraining, and deployment is 12 months away, the retraining must start now.",
            "A workforce plan with an 18–36 month horizon looks unnatural in an organisation accustomed to annual planning. But AI capability evolution — and the workforce consequences it creates — operates on a longer cycle than annual budget planning can accommodate.",
          ),
          s(" Run your AI workforce plan on an 18–36 month horizon. Annual planning is insufficient for the lead times involved in developing capabilities at scale."),
        ],
        [
          s("AI workforce planning has three inputs: the AI deployment roadmap (what capabilities will AI perform in 12, 24, and 36 months?), the current workforce capability map (what can the current workforce do?), and the future capability requirement (what must the workforce be able to do for the AI-augmented organisation to perform?). "),
          x(
            "The gap between the current capability map and the future capability requirement is the workforce planning agenda. It identifies the capabilities to develop, the roles to redesign, the functions to restructure, and the external capabilities to acquire.",
            "Most organisations have AI deployment roadmaps and current workforce data. Very few have a structured future capability requirement. Building the future capability requirement is the most neglected and most valuable element of AI workforce planning.",
          ),
          s(" Before any other workforce planning activity, build the future capability requirement: what specific capabilities will the AI-augmented organisation need in 12, 24, and 36 months that the current workforce does not have?"),
        ],
        [
          s("AI workforce planning is a leadership function, not an HR function. "),
          x(
            "HR can execute the plans — running retraining programmes, managing transitions, redesigning job architectures. But the decisions that shape workforce plans — which capabilities are strategically critical, which roles will change fundamentally, what the organisation is prepared to invest in its workforce — are leadership decisions that require the authority and organisational knowledge of senior leaders.",
            "An AI workforce plan owned by HR will be operationally competent but strategically conservative. An AI workforce plan owned by the leadership team — with HR executing — will reflect the strategic ambition and investment commitment that the plan requires.",
          ),
          s(" The AI workforce plan should be presented to and owned by the leadership team. HR owns the execution. Leadership owns the strategy and the investment commitment."),
        ],
      ],
      examples: [
        {
          title: "Financial services — planning horizon prevents capability gap",
          body: "A bank identified 18 months before its AI credit decision deployment that the deployment would require 35 AI model validation specialists — a capability its current workforce did not have. The workforce plan launched a validation specialist development programme alongside the technology programme: 14 existing analysts were retraining in model validation over 12 months, and 21 external specialists were recruited across a 9-month pipeline. When the deployment went live, the 35 specialists were in place. Without the 18-month planning horizon, the deployment would have gone live into a governance capability gap.",
        },
        {
          title: "Retailer — future capability requirement reveals planning gap",
          body: "A retailer built its future capability requirement for the first time during its AI workforce planning exercise. The exercise revealed that its 18-month deployment roadmap would require AI supply chain analysts — a capability category that did not exist in its current workforce and had no pipeline. The retailer had been planning to reskill existing supply chain staff without assessing whether the reskilling was technically feasible in the timeframe. The capability analysis revealed that only 4 of 22 supply chain staff had the quantitative foundation for AI analyst training. The other 18 required either different retraining paths or external recruitment. Without the future capability requirement analysis, the retailer would have invested in a retraining programme designed for the wrong population.",
        },
        {
          title: "Healthcare — leadership-owned workforce plan drives investment",
          body: "A hospital system that owned its AI workforce plan at the leadership team level secured three times more retraining budget than a peer system that had delegated its plan to HR. The difference was not in the quality of the plans — both were technically competent. The difference was in the advocacy: when the CEO, CMO, and CHRO co-presented the workforce plan to the board, the investment case was strategic. When the HR Director presented it alone, it was an operational budget request. Leadership ownership changed the nature of the investment conversation.",
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
    sectionWithDiagram({
      number: "6.2",
      title: "Skills inventory for an AI-augmented organisation",
      subtitle: "How to map what you have, identify what you need, and close the gap strategically",
      take: "A skills inventory is not a training needs assessment — it is a strategic view of the organisation's human capability portfolio. In an AI-augmented organisation, the skills inventory must capture three dimensions: current technical and domain skills, current AI collaboration skills, and the skills that will become critical as AI deployment progresses. The gap between current and future skills is the workforce investment agenda.",
      why: "Leaders who conduct a skills inventory before making workforce decisions invest in accurate intelligence that guides precise interventions. Leaders who make workforce decisions without a skills inventory make investments based on assumptions that are frequently wrong — investing in the wrong people, for the wrong skills, at the wrong time.",
      paragraphs: [
        [
          s("A meaningful AI-era skills inventory captures five categories: technical domain expertise, AI collaboration skills, data literacy, adaptive learning capacity, and human-essential soft skills. "),
          x(
            "Technical domain expertise is the foundation — the subject matter knowledge that allows AI outputs to be correctly evaluated and applied. AI collaboration skills include: AI prompt design, AI output evaluation, AI tool integration into existing workflows, and AI limitation recognition. Data literacy is the ability to understand data provenance, quality, and appropriate interpretation. Adaptive learning capacity is the demonstrated ability to learn new skills as context changes. Human-essential soft skills are the capabilities that AI cannot replace: relationship building, ethical navigation, creative synthesis.",
            "The AI collaboration skills and adaptive learning capacity categories are most frequently missing from current skills inventories — because they were not relevant before AI deployment and most inventories have not been updated.",
          ),
          s(" Update your skills inventory framework to include AI collaboration skills and adaptive learning capacity before conducting the next inventory. An inventory that does not capture these categories produces an incomplete picture."),
        ],
        [
          s("Skills inventory data is only useful if it is honest — which requires assessment methods that are more reliable than manager self-reporting. "),
          x(
            "Manager self-reports of team skills are systematically biased toward overestimating strengths in high-performing employees and underestimating development needs in average performers. Objective assessment methods — structured skills assessments, demonstrated performance on representative tasks, peer evaluations, and validated AI skill certifications — produce more accurate inventory data.",
            "The precision required for AI workforce planning decisions justifies more rigorous assessment methods than annual performance review data can provide. A workforce planning decision that restructures 40 roles based on inaccurate skills data will be significantly more expensive than the cost of objective skills assessment.",
          ),
          s(" For workforce planning decisions affecting more than 20 roles, invest in objective skills assessment rather than relying on manager self-reporting. The assessment cost is small relative to the cost of a misdirected workforce investment."),
        ],
        [
          s("Skills inventory data must be updated at the same frequency as the AI deployment roadmap changes. "),
          x(
            "An AI deployment roadmap that evolves every six months creates new skill requirements every six months. A skills inventory that is updated annually will be 6–12 months behind the requirement curve — making workforce planning decisions based on stale capability data. Lightweight skills tracking systems — quarterly manager assessments for high-change roles, annual full assessments for stable roles — balance accuracy with practicality.",
            "The highest-change roles in an AI-augmented organisation are AI-adjacent roles and the roles most directly affected by AI deployment. These roles warrant more frequent tracking than stable roles.",
          ),
          s(" Update skills inventory data for high-change roles quarterly and for stable roles annually. The tracking frequency should match the rate of capability change in the role."),
        ],
      ],
      examples: [
        {
          title: "Financial services — AI collaboration skills gap revealed",
          body: "A bank's updated skills inventory — including AI collaboration skills for the first time — revealed that only 12% of its analyst population could accurately evaluate AI-generated financial models for quality and accuracy. This capability gap had not been visible in the previous inventory, which measured only technical domain skills and did not capture AI collaboration. The revelation triggered an immediate AI model evaluation skills development programme, preventing a future deployment that would have put AI-generated outputs in front of clients without adequate human quality review.",
        },
        {
          title: "Healthcare — objective assessment corrects manager bias",
          body: "A hospital's workforce planning team compared manager-reported nursing skills assessments against an objective structured assessment for 180 nurses. The comparison revealed systematic manager bias: 67% of nurses rated by their managers as 'high AI adaptability' scored below average on the objective adaptive learning assessment. The mismatch would have directed retraining investment toward the wrong population — investing in nurses who appeared ready based on manager ratings but were not ready based on objective data. The objective assessment redirected the investment and produced a retraining programme 31% more effective than the manager-rated programme would have been.",
        },
        {
          title: "Retailer — quarterly high-change role tracking catches emerging gap",
          body: "A retailer tracked skills quarterly for its AI supply chain analyst roles. The Q3 tracking identified that three of its seven analysts had not kept pace with updates to the AI platform's advanced analytics module — a skills gap that had opened in the prior quarter following a platform upgrade. Targeted development for the three analysts in Q4 prevented the gap from widening into a performance gap. An annual inventory would not have identified the gap until it had already affected operations.",
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
      number: "6.3",
      title: "Build, buy, borrow, or bot — the four workforce strategies",
      subtitle: "How to choose the right strategy for each AI capability need",
      take: "Every AI workforce capability gap has four possible responses: build (develop existing employees), buy (recruit externally), borrow (contract or partner), or bot (automate the capability requirement entirely). The right choice depends on the strategic importance of the capability, the time to develop it internally, the availability in the external market, and the cost-efficiency of automation. Most organisations default to building — which is often the right answer for strategic capabilities and often the wrong answer for commodity capabilities.",
      why: "Leaders who evaluate all four strategies before choosing one make better workforce decisions than leaders who default to building. The default-to-build bias consistently produces over-investment in developing capabilities that would be faster, cheaper, or better acquired externally or automated.",
      paragraphs: [
        [
          s("Build is the right strategy when: the capability is strategically differentiating, the current workforce has the foundational skills required, and the development timeline fits within the deployment need. "),
          x(
            "AI capabilities that require deep institutional knowledge — understanding the organisation's specific context, client relationships, and competitive position — are candidates for building, because external talent cannot replicate institutional knowledge. AI capabilities that are generic across industries — standard data analysis, AI tool operation, AI output review — are candidates for buying or borrowing.",
            "The build strategy also creates institutional AI capability that compounds over time. Employees who develop AI skills internally become the organisation's AI teachers and change champions for future deployments.",
          ),
          s(" Apply the build strategy to capabilities that require institutional knowledge or have strategic differentiation value. For commodity AI capabilities, the build strategy is consistently more expensive than alternatives."),
        ],
        [
          s("Buy is the right strategy when: the capability is time-critical, not available internally, and available in the external labour market. "),
          x(
            "AI-specific roles — ML engineers, AI ethicists, AI workflow designers — that do not exist in the current workforce and cannot be developed in time for deployment requirements are candidates for external recruitment. The buy strategy is faster than build (months versus 12–18 months) but more expensive per capability and does not leave institutional knowledge when the hired employee departs.",
            "External AI talent is expensive and competitive. Organisations that bid for AI specialists in a tight labour market often find that the cost of buy exceeds the cost of borrow — especially for project-specific capability needs that do not justify permanent headcount.",
          ),
          s(" Use the buy strategy for strategic permanent roles only. For project-specific and time-limited AI capability needs, the borrow strategy is typically more cost-effective."),
        ],
        [
          s("Borrow (contract, partner, or secondment) and bot are the most underused strategies in most AI workforce plans. "),
          x(
            "Borrow is right for: specialist AI capabilities needed for a defined period (implementation, pilot design, governance review), capabilities available from a partner or vendor without permanent headcount addition, and learning-by-doing acquisition where the organisation wants to develop future build capability from the borrowed engagement. Bot is right for: capability gaps in well-defined, data-rich, repetitive processes where automation is more efficient than any human development investment.",
            "The bot strategy — automating the capability requirement itself — is only appropriate when the automation meets quality, ethics, and governance standards. Automating a capability that requires human judgement to produce safe outputs is not a workforce strategy — it is a governance failure.",
          ),
          s(" Evaluate borrow and bot strategies for every AI workforce capability gap before defaulting to build or buy. Many organisations are systematically over-investing in build and under-utilising borrow and bot."),
        ],
      ],
      examples: [
        {
          title: "Financial services — borrow strategy saves 18 months",
          body: "A bank needed AI model risk governance capability before its loan decision AI went live in 6 months. Internally developing the capability would take 18 months. External recruitment was highly competitive and expensive. The bank contracted three AI model risk specialists for a 12-month engagement — at 70% of the cost of permanent headcount — and paired each specialist with an internal analyst to build internal capability through the engagement. At the engagement's end, the three internal analysts had developed sufficient competency to continue the function. The borrow strategy delivered the capability on time and built the internal succession.",
        },
        {
          title: "Retailer — bot strategy for commodity AI capability",
          body: "A retailer initially planned to build internal AI content generation expertise for its email marketing capability. A workforce planning analysis showed that the capability was available through an AI content platform that could be deployed in 6 weeks for less than the cost of one full-time specialist per year. The bot strategy — deploying the AI content tool rather than building the human capability — delivered the requirement at lower cost and higher quality than the build strategy would have produced. The build investment was redirected to AI performance analysis, a capability that required the retailer's institutional knowledge of its customer base.",
        },
        {
          title: "Healthcare — build strategy for institutional knowledge capability",
          body: "A hospital evaluated all four strategies for clinical AI quality stewardship — the capability to evaluate AI diagnostic support outputs for clinical accuracy in the hospital's specific patient population. The capability required deep knowledge of the hospital's patient demographics, clinical protocols, and care pathways — institutional knowledge that could not be acquired externally. The build strategy was selected: six experienced clinicians were developed as AI quality stewards over 12 months. The bot and buy strategies were evaluated but rejected: no AI system could provide the institutional contextual judgement required, and externally recruited AI specialists lacked the clinical knowledge that made the stewardship role valuable.",
        },
      ],
    }),
    buildSection({
      number: "6.4",
      title: "Reskilling versus redeployment decisions",
      subtitle: "How to decide who to retrain and who to redeploy — and how to communicate both decisions humanely",
      take: "Reskilling and redeployment are two distinct responses to AI-driven role change, and choosing between them requires an honest assessment of individual capability, organisational need, and transition feasibility. Reskilling is appropriate when the person has the foundational capability for the new skills and when the organisation has the time and resources to develop them. Redeployment is appropriate when reskilling is not feasible but a different role within the organisation fits the person's existing capabilities.",
      why: "Leaders who make reskilling and redeployment decisions based on clear criteria — not on tenure, seniority, or emotional reluctance — produce fairer, more effective, and more credible outcomes than leaders who make these decisions inconsistently. Criteria-based decisions can be explained; instinct-based decisions create perceived unfairness that damages trust across the entire workforce.",
      paragraphs: [
        [
          s("The reskilling decision requires assessment against three criteria: foundational capability for the new skills, realistic time to proficiency within the deployment need, and motivation to develop in the new direction. "),
          x(
            "Foundational capability is the most important criterion — and the most frequently skipped. A person without the quantitative foundation needed for AI data analysis roles cannot be reskilled into those roles regardless of motivation or time investment. A person with the foundation but insufficient motivation will produce low returns on a high reskilling investment. All three criteria must be met for reskilling to be the right decision.",
            "The motivation criterion is the most sensitive to assess. It is best assessed through honest individual conversations — 'Is this the direction you want to develop in?' — rather than assumed. A person who is honest about not wanting to develop in the AI direction should be supported in finding a redeployment path, not pushed through a reskilling programme they will not commit to.",
          ),
          s(" Apply the three-criteria reskilling test to every individual in a role that will change significantly. Do not assume reskilling is appropriate without confirming foundational capability, feasibility, and motivation."),
        ],
        [
          s("Redeployment is the right decision when reskilling is not feasible but the individual has valuable capabilities that serve a different organisational need. "),
          x(
            "An experienced customer service representative whose role is substantially automated by AI may have strong relationship management skills, problem-solving capability, and institutional knowledge that make them valuable in a client success role, a complex case specialist role, or a team coach role. Redeployment requires an active search for the matching need — not a passive invitation for the individual to find their own next role.",
            "Proactive redeployment — where the organisation actively identifies roles that match the individual's capabilities and proposes specific opportunities — is experienced as genuine support. Passive redeployment — where the individual is told to apply for internal openings — is experienced as abandonment with a courtesy delay.",
          ),
          s(" Make redeployment an active process: for every individual being redeployed, identify two to three specific internal roles that match their capabilities and facilitate warm introductions to the relevant hiring managers."),
        ],
        [
          s("Both reskilling and redeployment decisions must be communicated with specific reasoning, genuine options, and clear support commitments. "),
          x(
            "Communicating a reskilling decision: 'We would like to develop you for the AI analyst role. Based on your analytical background and the assessment results, we believe you have the foundation. The development programme is 12 months with 20% of your time protected for learning. Here is the support available.' Communicating a redeployment decision: 'The [current role] is changing significantly, and based on our honest assessment, the new role requires skills that would take longer to develop than the timeline allows. We have identified [two specific roles] that match your strengths. Here is the support available for the transition.'",
            "Both communications are honest about the reasoning, specific about the options, and clear about support. Neither is a management euphemism for 'you're being let go.' When redeployment options genuinely do not exist, redundancy must be communicated honestly — not through a sequence of increasingly implausible redeployment offers.",
          ),
          s(" Communicate reskilling and redeployment decisions in writing after the verbal conversation, confirming the specific opportunities and support commitments made. Written confirmation prevents the misunderstandings that verbal-only conversations create."),
        ],
      ],
      examples: [
        {
          title: "Financial services — criteria-based reskilling prevents wasted investment",
          body: "A bank applied the three-criteria reskilling test to 85 financial analysts facing role change. The test identified 47 who met all three criteria (foundation, feasibility, motivation), 22 who met two criteria but not motivation (honest about not wanting the AI-augmented role), and 16 who lacked the quantitative foundation for the new role. The 47 were enrolled in the reskilling programme. The 22 were supported in redeployment searches. The 16 were offered enhanced redundancy with career transition support. The criteria-based approach prevented wasting reskilling investment on the 38 individuals for whom it was not appropriate — a saving of approximately $1.2M in training cost with predictably low return.",
        },
        {
          title: "Retailer — proactive redeployment retains valuable employees",
          body: "A retailer's AI inventory management deployment automated 60% of store operations assistant roles. Rather than announcing that the roles were at risk and inviting applications for other positions, the HR team proactively mapped each operations assistant's skills against seven other role categories in the organisation. For each individual, one or two specific roles were identified as strong matches. Operations assistants received individual briefings with a specific role proposal, a warm introduction to the hiring manager, and a 60-day transition support programme. Retention rate for operations assistants offered proactive redeployment: 74%. For a peer company that used passive redeployment: 31%.",
        },
        {
          title: "Healthcare — honest redundancy communication when redeployment is not possible",
          body: "A hospital's AI medical coding deployment eliminated the need for 18 of its 26 medical coders. The hospital identified 8 coders who had skills suitable for redeployment to clinical documentation quality roles. The 18 for whom no suitable redeployment existed were communicated with honestly: 'We have not been able to identify internal roles that match your skills and experience. We will provide [specific redundancy package], six months of outplacement support, and [specific career transition resources].' The honest communication — without stringing the 18 individuals through implausible redeployment processes — was rated as respectful by 14 of the 18 in a follow-up survey conducted by the outplacement provider.",
        },
      ],
    }),
    buildSection({
      number: "6.5",
      title: "AI fluency as a core organisational competency",
      subtitle: "How to build a baseline level of AI understanding across the entire organisation",
      take: "AI fluency — the ability to work productively alongside AI tools, evaluate AI outputs with appropriate scepticism, and identify when AI is and is not appropriate for a given task — is not a specialist skill. It is a baseline organisational competency that every employee in an AI-augmented organisation needs. Building that baseline requires a different programme design than specialist AI training.",
      why: "Organisations that build AI fluency as a universal baseline reduce the adoption gap, reduce the incidence of AI misuse, and create a workforce that can identify AI quality issues rather than assuming AI outputs are correct. The baseline investment produces organisation-wide risk reduction and productivity improvement.",
      paragraphs: [
        [
          s("AI fluency at the organisational baseline level has four components: understanding what AI can and cannot do, evaluating AI outputs with appropriate scepticism, knowing when to use and when not to use AI, and understanding the organisation's AI governance commitments and escalation pathways. "),
          x(
            "This baseline does not require employees to understand machine learning algorithms, train models, or design AI systems. It requires them to be intelligent consumers and collaborators with AI tools: using them appropriately, questioning their outputs, and knowing when to escalate concerns.",
            "The baseline is analogous to financial literacy — not every employee needs to be a CFO, but every employee should be able to read a financial report, recognise anomalies, and know when to escalate a concern to Finance. AI fluency is the equivalent for AI.",
          ),
          s(" Define the AI fluency baseline for your organisation explicitly — what does every employee need to understand and be able to do? Then design the programme to deliver it, not a more ambitious specialist capability."),
        ],
        [
          s("AI fluency programmes must be role-relevant and practical to produce genuine capability change. "),
          x(
            "A generic AI literacy training that covers AI history, technical concepts, and use case examples from unrelated industries does not produce the behaviour change needed for AI fluency. A role-relevant programme that covers how AI works in the specific tools the employee uses, how to evaluate AI outputs in their specific domain, and what the AI governance requirements are for their specific function produces genuine capability change.",
            "The most effective AI fluency programmes include: hands-on practice with the AI tools the employee actually uses, worked examples using real data from the employee's function, and scenario-based exercises covering AI failure modes in the employee's specific context.",
          ),
          s(" Require every AI fluency training module to use real tools, real data, and real context from the employee's function. Generic examples produce awareness; role-relevant examples produce capability."),
        ],
        [
          s("AI fluency must be maintained — not just built — as AI capabilities and tools evolve. "),
          x(
            "An AI fluency programme that runs once at deployment produces capability that is accurate for the AI tools deployed but becomes outdated as those tools update, new tools are added, and AI capability expands into new function areas. AI fluency maintenance requires quarterly refreshers for high-impact AI tools, annual recertification for the organisational baseline, and just-in-time learning modules for new tool deployments.",
            "The maintenance investment is typically 20–30% of the initial build investment per year — significantly less than the cost of rebuilding fluency after an extended gap.",
          ),
          s(" Include AI fluency maintenance in the annual learning investment plan from the start. An AI fluency programme without a maintenance plan decays in 18–24 months."),
        ],
      ],
      examples: [
        {
          title: "Financial services — universal baseline reduces AI error incidents",
          body: "A bank deployed AI fluency training across its entire workforce of 4,200 employees — all roles, all levels. The training covered: AI capability overview, AI output evaluation techniques, AI governance escalation pathway, and the bank's acceptable use policy. At 12 months post-training, internal audit found that AI-related escalations (employees flagging potentially incorrect AI outputs) had increased 340% — indicating that employees were applying their evaluation skills. More importantly, AI error incidents that reached clients had decreased 58%. The baseline investment had converted a passive AI-using workforce into an active AI quality governance workforce.",
        },
        {
          title: "Healthcare — role-relevant AI fluency vs generic training",
          body: "A hospital ran an A/B comparison: half its nursing staff received a generic AI literacy programme; half received a role-relevant programme using their specific EHR-integrated AI documentation and clinical decision support tools. At 60-day follow-up, the role-relevant cohort showed 2.8× more appropriate AI override behaviour (flagging AI outputs that required clinical review), 2.1× higher AI tool utilisation, and 74% higher confidence in their ability to identify AI errors. The generic programme produced awareness; the role-relevant programme produced capability.",
        },
        {
          title: "Retailer — AI fluency maintenance plan prevents decay",
          body: "A retailer built AI fluency for 3,800 employees in a 6-month programme in Year 1. Year 2 assessment — before maintenance was launched — showed that 41% of employees had below-baseline scores due to tool updates, role changes, and skills decay without reinforcement. The maintenance programme launched in Year 2 reversed the decay at 60% of the Year 1 training cost per employee. The retailer subsequently built the maintenance programme into its annual training calendar from Year 3 onward, preventing the Year 2 decay pattern.",
        },
      ],
    }),
    buildSection({
      number: "6.6",
      title: "Managing workforce transitions humanely",
      subtitle: "The practices that distinguish organisations that manage AI workforce change with integrity",
      take: "Workforce transitions in AI transformation — whether through reskilling, redeployment, or redundancy — are tests of organisational values as much as change management challenges. Transitions managed with genuine respect, individual support, sufficient time, and honest communication build the organisational trust that makes future AI transformation easier. Transitions managed primarily for speed and cost produce legal, reputational, and cultural damage that compounds across subsequent transformation phases.",
      why: "The organisation that manages its AI workforce transitions well has a workforce that trusts it to manage future transitions well. The organisation that manages transitions poorly has a workforce that resists every subsequent AI change because the previous transition experience is their reference point for what AI transformation means to them personally.",
      paragraphs: [
        [
          s("Humane workforce transitions have five characteristics: sufficient lead time, individual clarity, genuine options, active support, and honest communication. "),
          x(
            "Sufficient lead time: 90–180 days from notification to role change, not 30 days. Individual clarity: each person knows specifically what their role change means for their situation, not just the programme announcement. Genuine options: redeployment options that are real, not performative. Active support: outplacement, career counselling, skills assessment, and internal network introductions. Honest communication: including honest communication about options that are not available.",
            "The cost of meeting these five characteristics is real — it extends transition timelines, requires individual investment, and demands leadership honesty that is sometimes uncomfortable. The cost of not meeting them is higher: legal challenges, attrition of employees who were not being managed out, and cultural damage that persists for years.",
          ),
          s(" Before communicating any AI workforce transition, confirm that all five characteristics can be met. If any cannot be met, address the gap before communicating."),
        ],
        [
          s("Line managers are the delivery channel for humane transitions — and consistently the most underprepared component. "),
          x(
            "A transition communication that is carefully crafted centrally but delivered carelessly by an unprepared line manager is a failed transition regardless of the central quality. Line managers delivering role change communications need: specific individual briefing on the employee's situation, scripted language for difficult elements of the conversation, clear escalation pathways for questions they cannot answer, and their own emotional preparation for a difficult conversation.",
            "Many managers have never had a role change conversation with a direct report. The AI transformation creates this requirement at scale — not as an occasional challenging management task but as a programme-level management responsibility. Manager preparation for transition conversations is a training investment, not a briefing exercise.",
          ),
          s(" Train managers for AI workforce transition conversations as a formal programme module — not an email with talking points. The conversation quality determines the employee experience of the transition."),
        ],
        [
          s("Post-transition follow-up with affected employees signals whether the organisation's stated commitment to humane transitions is genuine. "),
          x(
            "A 30-day follow-up check-in with every employee who has undergone a workforce transition — conducted by HR, not the line manager — provides early identification of support gaps, surfaces concerns that were not raised in the initial conversation, and demonstrates continued organisational investment in the individual's wellbeing beyond the transition moment.",
            "Follow-up data also provides programme intelligence: the patterns in post-transition employee experience reveal whether the transition management process is working as designed or whether systematic gaps exist. This intelligence improves future transitions.",
          ),
          s(" Schedule a 30-day follow-up check-in with every employee who has experienced a workforce transition. The check-in is not a courtesy — it is a programme quality control and a genuine support mechanism."),
        ],
      ],
      examples: [
        {
          title: "Financial services — 180-day lead time preserves dignity",
          body: "A bank's AI workforce transitions in its operations function gave affected employees 180-day notice — twice the legal minimum. The extended timeline allowed employees to complete their current project cycle (preserving professional completion of work in progress), participate in the redeployment process without time pressure, and make personal financial decisions with more certainty. External survey data from the outplacement partner showed that affected employees rated the bank's transition management 4.3/5 — higher than the industry average of 2.9/5. The bank's next AI deployment cycle saw 28% lower pre-deployment anxiety in affected functions, attributed directly to the prior transition's management quality.",
        },
        {
          title: "Retailer — manager preparation prevents transition failures",
          body: "A retailer ran a two-hour transition conversation workshop for 47 store managers before its AI-driven role change programme. The workshop covered: the conversation structure, difficult question handling, emotional regulation for the manager, and post-conversation follow-up steps. Stores where managers attended the workshop had a 34% higher positive rating from affected employees for the transition conversation. Stores where managers had not attended (15 managers were absent from training) had 3× the formal HR complaints about the transition process. The 2-hour workshop investment had prevented significant HR process costs.",
        },
        {
          title: "Healthcare — 30-day follow-up catches support gap",
          body: "A hospital's 30-day follow-up with 24 redeployed nurses revealed a pattern: 16 of the 24 had not yet made contact with their new department manager, despite being formally redeployed. The redeployment process had placed them on paper but had not created the human connection needed to begin the new role. HR intervened to facilitate direct manager introductions for all 16. Without the follow-up, the redeployment would have looked complete on paper while the individuals were in a support gap — adrift between their former role and a new role that had not yet accepted them.",
        },
      ],
    }),
    buildSection({
      number: "6.7",
      title: "Planning for the long AI tail of workforce change",
      subtitle: "How to build a workforce planning capability that adapts continuously as AI evolves",
      take: "AI workforce change is not a one-time event with a defined end. It is a continuous process of adaptation as AI capabilities expand, role requirements evolve, and the competitive landscape shifts. Organisations that build a continuous workforce planning capability — not a programme with an end date — adapt to AI change rather than react to it. The long AI tail requires a governance structure, not just a project team.",
      why: "Business leaders who treat AI workforce planning as a phase of their AI transformation programme will find that when the programme ends, the workforce planning need continues — but the governance, the resources, and the discipline are gone. Building workforce planning as an ongoing capability prevents the capability gap that follows programme completion.",
      paragraphs: [
        [
          s("Continuous AI workforce planning requires three permanent structures: a skills tracking system, a scenario planning process, and a workforce governance forum. "),
          x(
            "Skills tracking: a living skills inventory that is updated quarterly for high-change roles and annually for stable roles, integrated with the HR information system and accessible to workforce planning stakeholders. Scenario planning: a twice-yearly exercise that models workforce implications of three AI deployment scenarios (base case, accelerated adoption, technology shift) and identifies capability gaps in each. Workforce governance forum: a quarterly leadership meeting that reviews workforce planning data, approves capability investments, and monitors transition programme progress.",
            "None of these three structures is expensive to maintain — the combined ongoing investment is typically 0.5–1.0 FTE in HR and leadership attention. The absence of all three is what produces the reactive workforce crises that are measured in millions of dollars.",
          ),
          s(" Establish all three permanent structures before the first AI workforce transition. The structures are most valuable before the need is urgent — not as reactive tools deployed after the urgency has arrived."),
        ],
        [
          s("The organisation's workforce planning capability should be visible to employees — not just an internal management tool. "),
          x(
            "Employees who know the organisation has a structured, ongoing approach to workforce planning in the context of AI change are less anxious about AI deployment than employees who have no visibility into how workforce implications are being managed. A brief annual communication about the workforce planning activity — what was assessed, what investments were made, what the 18-month outlook shows — is an anxiety reduction tool as much as a transparency exercise.",
            "Visible workforce planning also creates a cultural norm: the organisation takes long-term workforce health seriously, invests in it continuously, and keeps employees informed. This norm makes future AI change easier to introduce because the workforce trusts that its implications have been thought through.",
          ),
          s(" Publish an annual AI Workforce Planning Brief: one page that describes the workforce planning activity for the prior year, the investment made, and the 18-month outlook. The brief is an employee confidence tool as much as a transparency document."),
        ],
        [
          s("The long AI tail includes the workforce implications of AI capabilities that do not yet exist. "),
          x(
            "An organisation planning its workforce for currently deployed AI tools is planning for yesterday's problem. The scenario planning process must include one 'wild card' scenario: what if an AI capability emerges in the next 18 months that can perform [the most highly valued human task in our current workforce]? What would that require of our workforce planning?",
            "The wild card scenario does not have to be likely to be worth planning for. The organisations most disrupted by AI were those that had not asked this question before the disruptive capability arrived. The organisations most resilient to AI disruption asked it regularly — and had built adaptive capacity that let them respond when the disruption arrived.",
          ),
          s(" Include a wild card AI scenario in every twice-yearly workforce scenario planning exercise. The scenario's value is in building the planning habit and adaptive capacity, not in predicting the future with certainty."),
        ],
      ],
      examples: [
        {
          title: "Financial services — continuous planning prevents knowledge work disruption",
          body: "A bank's workforce governance forum reviewed its twice-yearly AI scenario planning in Q2 and identified that one wild card scenario — AI achieving human-level performance in commercial loan analysis — was materialising faster than the base case had projected. The scenario planning had pre-identified the workforce implications: 35 commercial loan analyst roles would need fundamental redesign within 18 months. Because the governance structure was already in place, the bank launched the role redesign programme immediately. When the AI capability arrived 14 months later, the redesigned roles were already in place. A bank without the scenario planning had to launch and complete the same redesign in 5 months under significant operational pressure.",
        },
        {
          title: "Healthcare — visible workforce planning reduces staff anxiety",
          body: "A hospital published its first AI Workforce Planning Brief after Year 1 of its transformation. The brief summarised: the skills tracking data, the AI deployment roadmap implications for each clinical function, and the specific investments made in development and redeployment. An employee confidence survey after the brief's publication showed a 19-point improvement in 'confidence that the organisation is managing AI workforce changes responsibly.' The brief cost two hours to write. The anxiety reduction it produced would have required significantly more than two hours of change management activity to achieve through any other means.",
        },
        {
          title: "Retailer — wild card scenario turns disruption into preparation",
          body: "A retailer's wild card scenario in Year 2 planning — 'AI achieves human-level performance in visual merchandising decision-making' — seemed implausible to the planning team but was included as required. In Year 3, a competitor demonstrated exactly this capability. The retailer's wild card scenario had triggered an 18-month investment in visual merchandising expertise that went beyond AI-assisted decisions to human curation, brand expression, and customer experience design — the areas where the AI proved weakest. The retailer's visual merchandising capability was a competitive differentiator precisely because the wild card scenario had prepared it.",
        },
      ],
    }),
    buildSection({
      number: "6.8",
      title: "BL decision lens: your AI workforce plan template",
      subtitle: "A six-component workforce plan that every AI transformation leader should build before deployment",
      take: "An AI workforce plan is not a static document — it is a decision framework that guides workforce choices across an 18–36 month transformation horizon. The six-component plan covers: future capability requirements, build-buy-borrow-bot decisions by capability, reskilling and redeployment criteria and processes, AI fluency baseline investment, humane transition commitments, and continuous planning governance. Completed before deployment, it converts reactive workforce management into strategic workforce leadership.",
      why: "Leaders who build the six-component plan before deployment make better, faster, and more humane workforce decisions across the transformation horizon than leaders who build it reactively. The planning investment is typically 40–60 hours of leadership and HR time. The return is a workforce that is prepared for AI transformation rather than surprised by it.",
      paragraphs: [
        [
          s("Component 1 — Future capability requirements: a function-by-function analysis of the capabilities the AI-augmented organisation will need in 12, 24, and 36 months that the current workforce does not have. "),
          x(
            "This component is built from the AI deployment roadmap and the current skills inventory. For each function in the deployment scope, it answers: what capabilities will AI create demand for, and what capabilities will AI reduce demand for? The answers drive every subsequent workforce planning decision.",
            "The most common gap in this component is the 12-month horizon analysis — organisations typically plan the immediate year and leave years two and three as intentions rather than plans. The 24- and 36-month analyses are where the most valuable workforce planning decisions are made.",
          ),
          s(" Build the future capability requirement for 12, 24, and 36 months — not just the first year. The most valuable planning decisions operate on the 24–36 month horizon."),
        ],
        [
          s("Components 2–4 cover workforce strategy by capability, individual transition criteria, and AI fluency investment. "),
          x(
            "Workforce strategy (Component 2): for each capability in the future requirement, which strategy — build, buy, borrow, or bot — is most appropriate? Component 3: what are the organisation's specific criteria for reskilling vs redeployment decisions, and what support commitments apply to each? Component 4: what is the AI fluency baseline definition and the investment plan to build and maintain it across the organisation?",
            "These three components translate the strategic analysis into operational decisions. Without them, the strategic analysis produces no action. With them, each person in the organisation who needs to make a workforce decision has a clear framework.",
          ),
          s(" Complete Components 2–4 in parallel — they are interdependent. The workforce strategy informs the transition criteria, and both inform the fluency investment."),
        ],
        [
          s("Components 5–6 cover humane transition commitments and continuous planning governance. "),
          x(
            "Component 5: the organisation's specific commitments on lead times, support, and communication for every category of workforce transition — reskilling, redeployment, and redundancy. Component 6: the three permanent structures (skills tracking, scenario planning, governance forum) with named owners, meeting cadences, and annual review commitments.",
            "Components 5 and 6 are the operational backbone of the workforce plan. They determine whether the plan's strategic intentions translate into consistent treatment of individuals across the organisation's change journey. Without them, the plan is aspirational. With them, it is operational.",
          ),
          s(" Components 5 and 6 should be shared with employees — not kept as internal governance documents. Visible commitments are the strongest evidence that the plan is genuine."),
        ],
      ],
      examples: [
        {
          title: "Financial services — six-component plan transforms workforce management",
          body: "A bank completed its six-component AI workforce plan eight months before its first major deployment. The plan identified capability requirements for 18 months, selected build strategy for AI quality stewardship, buy strategy for ML ops, and borrow strategy for governance specialists, defined reskilling criteria with a three-test framework, built AI fluency investment at $420K for the first year, committed to 120-day minimum lead times for all transitions, and established a quarterly workforce governance forum chaired by the CHRO. At 24 months, the bank had managed transitions for 340 roles with zero formal HR challenges, a 91% positive employee rating for the transition management process, and a talent pipeline that was ahead of its deployment needs.",
        },
        {
          title: "Healthcare — visible commitments reduce pre-transition anxiety",
          body: "A hospital published its AI workforce plan's humane transition commitments — specifically Components 5 and 6 — in an internal communication to all clinical staff. The commitments included: minimum 120-day lead times, proactive redeployment assessments, six months of career transition support, and quarterly workforce governance forum results shared annually. Pre-deployment anxiety survey scores in clinical functions who received the commitment communication were 27% lower than in functions that had not yet received it. The visible plan commitment was doing the work that the generic 'we will manage this responsibly' communication had not been able to achieve.",
        },
        {
          title: "Retailer — 36-month capability requirement changes hiring strategy",
          body: "A retailer's 36-month future capability requirement analysis — built as Component 1 of its workforce plan — revealed that by year three, its AI programme would require significant in-house data science capability that was not available in its current workforce or in its standard recruitment pipeline. The analysis triggered a strategic partnership with two universities for a data science apprenticeship programme and an accelerated external recruitment plan beginning immediately. Without the 36-month analysis, the capability gap would not have been visible until 18 months before it was needed — leaving insufficient time to address it through build or buy strategies.",
        },
      ],
    }),
  ],
  quiz: [
    {
      q: "Why must AI workforce planning run in parallel with AI deployment — not as a response to it?",
      options: [
        "To ensure that HR is involved in technology procurement decisions",
        "Because the lead times for developing new capabilities (12–18 months) require planning to begin before deployment creates the need",
        "To comply with employment law requirements for consultation before role changes",
        "Because workforce planning is cheaper when done in advance of technology deployment",
      ],
      correct: 1,
      correctFeedback:
        "Correct. Reskilling takes 12–18 months, recruitment takes 4–12 months, and restructuring takes 6–18 months. By the time AI deployment makes a capability need visible, it is too late to meet it through planning. The planning horizon must precede the deployment need by the length of the longest lead time in the workforce change portfolio.",
      wrongFeedback:
        "The planning horizon is driven by the lead times involved: 12–18 months for reskilling, 4–12 months for recruitment. Workforce planning that begins when AI deployment creates the need is already too late. The planning must begin at the planning horizon — 18–36 months before the capability need is required.",
    },
    {
      kind: "categorize",
      q: "Match each workforce capability need to the most appropriate workforce strategy:",
      categories: ["Build", "Buy", "Borrow", "Bot"],
      items: [
        { text: "Domain-specific AI quality stewardship requiring deep institutional knowledge", category: 0 },
        { text: "Strategic permanent ML engineering roles needed within 6 months", category: 1 },
        { text: "Specialist AI governance review needed for a 12-month implementation project", category: 2 },
        { text: "Routine data entry and formatting tasks in a well-defined, high-volume process", category: 3 },
      ],
      correctFeedback:
        "Correct. Build for capabilities requiring institutional knowledge that cannot be acquired externally. Buy for strategic permanent roles needed quickly that aren't available internally. Borrow for specialist time-limited needs. Bot for well-defined, repetitive tasks where automation is more efficient than human development.",
      wrongFeedback:
        "Strategy selection depends on four factors: strategic importance (build for institutional knowledge), time criticality (buy if urgent and available externally), duration (borrow for time-limited), and automation feasibility (bot for well-defined repetitive work). Defaulting to build is the most common — and most expensive — workforce planning error.",
    },
    {
      q: "What are the three criteria for the reskilling decision?",
      options: [
        "Tenure, seniority, and manager recommendation",
        "Technical interest, budget availability, and timeline convenience",
        "Foundational capability for new skills, realistic time to proficiency, and motivation to develop",
        "Current performance rating, team suitability, and role availability",
      ],
      correct: 2,
      correctFeedback:
        "Correct. All three criteria must be met: foundational capability (can this person learn the new skills?), feasibility (can proficiency be reached within the required timeline?), and motivation (does this person want to develop in this direction?). Missing any criterion makes reskilling inappropriate — not just harder.",
      wrongFeedback:
        "The three reskilling criteria are: foundational capability (the prerequisite skills exist), feasibility (proficiency is achievable in the required time), and motivation (the individual genuinely wants this development path). All three must be met. Reskilling without motivation produces low returns on high investment.",
    },
    {
      q: "What is the most important characteristic that distinguishes humane AI workforce transitions?",
      options: [
        "Minimising the financial cost of the transition programme",
        "Completing transitions as quickly as possible to reduce uncertainty",
        "Sufficient lead time, individual clarity, genuine options, active support, and honest communication",
        "Ensuring that all transitions are voluntary rather than managed",
      ],
      correct: 2,
      correctFeedback:
        "Correct. Humane transitions have five characteristics: sufficient lead time (90–180 days), individual clarity (specific to their situation), genuine options (real not performative), active support (outplacement, career counselling, introductions), and honest communication (including about options that are not available). Together, these characteristics determine whether transitions are experienced as respectful.",
      wrongFeedback:
        "Humane transitions are characterised by five elements: sufficient lead time, individual clarity, genuine options, active support, and honest communication. Speed and cost minimisation are not characteristics of humane transitions — they are often in tension with the characteristics that matter.",
    },
    {
      kind: "order",
      q: "Order the six components of an AI workforce plan:",
      items: [
        "Future capability requirements by function and time horizon",
        "Build-buy-borrow-bot decisions for each capability gap",
        "Reskilling and redeployment criteria and individual processes",
        "AI fluency baseline definition and investment plan",
        "Humane transition commitments for all transition types",
        "Continuous planning governance structures with named owners",
      ],
      prompt: "Drag to arrange in the correct sequence",
      correctFeedback:
        "Correct. The sequence builds from strategic analysis to operational decisions to governance. Future capability requirements drive strategy decisions; strategy decisions inform transition criteria; all three inform fluency investment; transition commitments operationalise the strategy; governance makes it continuous.",
      wrongFeedback:
        "Start with future capability requirements — they drive everything else. Then workforce strategy by capability. Then individual transition criteria. Then fluency investment. Then humane transition commitments (which should be publicly shared). Finally, the governance structures that make the plan continuous rather than episodic.",
    },
    {
      q: "What should an AI workforce scenario planning exercise always include beyond the base case and optimistic scenarios?",
      options: [
        "A cost reduction scenario that models the minimum workforce required",
        "A regulatory risk scenario covering potential AI restrictions",
        "A wild card scenario: what if an AI capability emerges that can perform the most valued human task in the current workforce?",
        "A competitor benchmarking scenario that models rival workforce strategies",
      ],
      correct: 2,
      correctFeedback:
        "Correct. The wild card scenario — asking what if AI capability emerges that automates the most valued current human task — builds the planning habit and adaptive capacity that makes organisations resilient to AI disruption. It does not need to be likely to be worth planning for: the value is in developing the response capability before the disruption arrives.",
      wrongFeedback:
        "The wild card scenario — modelling an AI capability breakthrough that could automate the organisation's most valued human tasks — is the scenario with the most strategic value in AI workforce planning. It builds adaptive capacity for disruptions that current planning horizons cannot see but that history suggests are inevitable.",
    },
  ],
});
