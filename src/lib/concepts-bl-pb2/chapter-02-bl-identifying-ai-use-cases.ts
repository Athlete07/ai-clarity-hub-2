import { buildChapter, buildSection, s, x, sectionWithDiagram } from "../concepts-bl-helpers";

export const chapter02BlIdentifyingAiUseCases = buildChapter({
  slug: "bl-identifying-ai-use-cases",
  number: 2,
  shortTitle: "Identifying AI Use Cases",
  title: "Identifying AI Use Cases — Beyond the Obvious and the Glamorous",
  readingMinutes: 20,
  summary:
    "Use case identification is where most AI programmes go wrong — either they stop at the obvious and miss high-value opportunities, or they chase glamorous transformations and miss quick wins that could fund the journey. This chapter gives business leaders a structured method to build a complete, validated use case inventory.",
  keyTakeaway:
    "Great AI use cases are found by systematically mapping your functions against three archetypes, stress-testing with data availability and effort-frequency analysis, and resisting the glamour trap. The output is a validated inventory your team owns and can defend — not a vendor shortlist.",
  pmCallout:
    "As a business leader: use case identification is where you earn the right to a budget conversation. Walk into it with a structured inventory and you are managing a portfolio. Walk in with a technology wish list and you are funding experiments with no accountability.",
  sections: [
    sectionWithDiagram({
      number: "2.1",
      title: "The Three Categories of AI Use Cases",
      subtitle: "Automation, augmentation, and insight — and why the mix matters",
      take: "Every AI use case in a business context belongs to one of three archetypes: automation (AI replaces a human action), augmentation (AI improves a human decision), or insight (AI surfaces patterns humans cannot see at scale). Leaders who understand the three archetypes ask better questions in vendor meetings and write better business cases.",
      why: "Conflating the three archetypes creates misaligned expectations, wrong success metrics, and mismatched technology choices. An augmentation use case evaluated on automation metrics will always disappoint.",
      paragraphs: [
        [
          s("Automation replaces a human action entirely. "),
          x(
            "Invoice processing, document classification, appointment scheduling, form completion — tasks that follow a defined process and have a clear completion state. The success metric is throughput and accuracy: how many units processed per hour, at what error rate, compared to the human baseline.",
            "Automation use cases tend to have the clearest ROI calculations because the cost of the human action being replaced is known. They also have the clearest failure modes: when the AI is wrong on a fully automated task, there is no human in the loop to catch it.",
          ),
          s(" Always define the human fallback and the error consequence before funding automation."),
        ],
        [
          s("Augmentation improves a human decision without replacing it. "),
          x(
            "Credit risk scoring that surfaces recommendations for a human approver. Medical imaging analysis that flags areas for a radiologist to examine. Sales territory planning tools that rank opportunities for a sales leader to review. The AI is a decision support layer — the human retains accountability and final judgment.",
            "Success metrics for augmentation are different: decision quality improvement (error rate reduction, consistency), decision speed (time from input to decision), and decision confidence (whether the human uses the AI recommendation as more than a rubber stamp). Adoption is itself a metric — augmentation tools that are ignored are not augmenting.",
          ),
          s(" Measure whether the recommendation is actually influencing decisions — not just whether the tool is open."),
        ],
        [
          s("Insight surfaces patterns humans cannot see at scale. "),
          x(
            "Customer segmentation at a granularity that no analyst team could maintain manually. Supply chain risk signals across a supplier network too large for weekly review. Fraud pattern detection across transaction volumes that exceed human review capacity.",
            "Insight use cases often produce value indirectly — the insight itself requires a human decision and organisational action before it becomes a business outcome. That indirect value chain makes ROI harder to attribute and harder to sustain if the insight consumption is not designed into existing workflows.",
          ),
          s(" Design the insight consumption workflow before building the insight engine."),
        ],
      ],
      examples: [
        {
          title: "An insurer — three archetypes in one function",
          body: "A large insurer mapped its claims function across all three archetypes: automation for document classification and first-notification-of-loss data extraction; augmentation for claims assessor decision support on complex liability cases; insight for portfolio-level claims pattern analysis used in actuarial pricing. Each archetype had separate success metrics, separate technology choices, and separate change management programmes. Treating all three as one 'AI for claims' initiative would have produced a confused programme with no clear accountability.",
        },
        {
          title: "Augmentation adoption failure — the unused recommendation",
          body: "A logistics company deployed an AI route optimisation tool for dispatch managers. Accuracy on test data was 94%. Twelve months post-deployment, a usage analysis found that 78% of AI recommendations were overridden by dispatchers using their own judgment. Exit interviews revealed: the tool produced recommendations with no explanation, dispatchers did not trust what they could not understand, and performance reviews did not credit dispatchers for accepting AI recommendations. Augmentation had been funded; adoption had not been designed.",
        },
        {
          title: "Walmart — insight at retail scale",
          body: "Walmart's demand forecasting AI identifies restocking patterns at individual store level across 10,000+ locations — a volume no analyst team could manually review. The insight is consumed by automated replenishment orders, not human decisions. The value chain is: AI insight → automated procurement trigger → shelf availability. Each link in the chain was designed before the AI was built, which is why the insight produces business outcomes rather than reports.",
        },
      ],
    }, {
      kind: "diagram",
      id: "bl-ai-transformation",
      type: "flow",
      title: "AI Initiative Execution Path",
      caption:
        "Assess → prioritise → pilot → scale → embed. The sequence that turns AI ambition into measurable outcomes.",
    }),
    sectionWithDiagram({
      number: "2.2",
      title: "Running Discovery Workshops That Work",
      subtitle: "How to run a session that produces usable use cases, not hallway ideas",
      take: "A discovery workshop is a structured conversation, not a brainstorm. The facilitator's job is to extract problem statements from business unit leaders and convert them into use case candidates using the three-archetype framework. Unstructured brainstorming produces technology wishes; structured problem extraction produces business cases.",
      why: "Most AI discovery workshops are run by technology teams who facilitate brainstorming sessions. The result is a list of technology features the business thinks it wants. Business leaders who take ownership of the discovery process produce better use case candidates because they keep the conversation grounded in business outcomes.",
      paragraphs: [
        [
          s("Prepare three things before the workshop: the problem prompt, the archetype filter, and the documentation template. "),
          x(
            "The problem prompt: each participant brings a pre-prepared answer to the question 'what business problem is costing us the most that we cannot currently solve at scale?' The archetype filter: for each problem, the facilitator probes which of the three archetypes applies. The documentation template: for each use case candidate, the group records problem statement, estimated value, data requirement, and primary stakeholder.",
            "These three inputs convert a two-hour workshop into a usable artefact. Without them, the workshop produces a whiteboard covered in sticky notes that someone promises to synthesise and never does.",
          ),
          s(" Pre-work and structured templates are the difference between a meeting and a deliverable."),
        ],
        [
          s("Invite the right participants, not the most available ones. "),
          x(
            "The ideal discovery workshop participant is someone who owns a business outcome — revenue, cost, quality, or risk — and has operational visibility into the process that produces it. That is typically a director or senior manager level. Above that level, input becomes strategic aspiration. Below that level, input becomes task-level feature requests.",
            "Technology participants are observers and question-answerers in the problem extraction phase. They should not be facilitating or evaluating — their presence in a facilitation role consistently pulls the conversation toward technical feasibility before business value is established.",
          ),
          s(" Business outcome owners generate business cases. Technology enthusiasts generate technology backlog items."),
        ],
        [
          s("Close the workshop with a ranked candidate list, not an unranked inventory. "),
          x(
            "Within the session, before participants leave, facilitate a quick ranking exercise: participants allocate ten points across the use case candidates they believe have the highest business value. The ranking is not final — it feeds the effort-frequency matrix in the next phase — but it prevents the post-workshop drift where every idea is treated as equally important.",
            "A session that ends with a ranked list maintains momentum. A session that ends with an unranked list of fifteen ideas typically stalls at the synthesis stage because no one has clear accountability for converting the list to a prioritised artefact.",
          ),
          s(" Close the meeting with the first filter applied — even a rough rank — to maintain momentum."),
        ],
      ],
      examples: [
        {
          title: "A professional services firm — pre-work quality control",
          body: "A strategy consultancy redesigned its AI discovery workshops after repeated sessions produced low-quality use cases. The new design required each participant to submit a two-paragraph problem statement 48 hours before the session, reviewed by the facilitator. Submissions that described technology wishes ('we need an AI model for X') were returned with a prompt: 'What business problem does X solve? What is the cost of not solving it?' The quality of workshop use case candidates improved significantly, and post-workshop conversion to funded pilots increased from 15% to 40%.",
        },
        {
          title: "A utility company — separating discovery tracks by archetype",
          body: "A major utility discovered that combining operational staff and strategic leaders in the same discovery workshop produced two conversations that never connected. They split into three separate workshops, each focused on one archetype: automation (attended by operations managers), augmentation (attended by knowledge workers and their managers), and insight (attended by strategy and analytics leadership). The archetype-separated format produced better-formed candidates that were easier to score and prioritise in the consolidation session.",
        },
        {
          title: "A retailer — the in-session ranking that saved three months",
          body: "A fashion retailer previously ended discovery workshops with unranked lists that sat in a slide deck for three months before anyone created a prioritised view. They introduced a dot-voting exercise in the final fifteen minutes of each workshop: participants allocated points to the candidates they believed had highest business value. The ranking from the workshop became the input to the effort-frequency analysis the following week. Time from workshop to funded pilot reduced from 4 months to 6 weeks.",
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
      number: "2.3",
      title: "The Effort-Frequency Matrix",
      subtitle: "Why high-effort, low-frequency tasks are the wrong AI target",
      take: "Plot every use case candidate on two axes: effort required to perform the task (human time and skill per instance) and frequency (how often the task occurs). High-effort, high-frequency tasks are the most valuable AI targets. High-effort, low-frequency tasks are skilled knowledge work where AI provides support at best. Low-effort, high-frequency tasks are automation candidates with high ROI. Low-effort, low-frequency tasks do not justify AI investment.",
      why: "Effort and frequency together determine the total value addressable by AI. A task that takes one hour but happens twice a year cannot generate meaningful AI ROI regardless of how well the AI performs. Business leaders who apply this matrix before technical evaluation eliminate a large proportion of candidates without spending a single engineering hour.",
      paragraphs: [
        [
          s("The effort axis measures skilled human time, not calendar time. "),
          x(
            "A task that takes forty-five minutes of low-skill data entry is lower on the effort axis than a task that takes thirty minutes of expert judgment. AI displacement of data entry is straightforward; AI displacement of expert judgment requires augmentation design, not automation design.",
            "When measuring effort, separate task time from wait time. A report that takes two hours to produce but sits in a queue for three days is a two-hour effort task, not a five-day one. AI addresses the effort; process redesign addresses the queue.",
          ),
          s(" Measure effort accurately — it directly determines the value side of the ROI equation."),
        ],
        [
          s("Frequency compounds value and justifies fixed investment. "),
          x(
            "AI infrastructure — integration, testing, governance, maintenance — carries a fixed cost that must be amortised across use instances. A task performed 500 times per week amortises that fixed cost across 26,000 annual instances. A task performed 10 times per week amortises it across 520 instances. The investment threshold per use case should scale with frequency.",
            "Seasonal frequency matters. A task that occurs 2,000 times in four weeks at quarter-end and 50 times per week otherwise has different economics than a steady 500/week task. The AI must perform at peak, not average, frequency — and that peak drives the infrastructure requirement.",
          ),
          s(" Design for peak frequency, not average frequency, when sizing the technical investment."),
        ],
        [
          s("The matrix output is a portfolio filter, not a business case. "),
          x(
            "High-effort, high-frequency candidates move forward to data availability assessment (section 2.4). The others receive a documented disposition: low-effort, high-frequency tasks go to simple automation (RPA, workflow tools) without an AI business case. High-effort, low-frequency tasks are flagged as augmentation candidates for specialist review. Low-effort, low-frequency tasks are declined with documentation.",
            "Documenting the disposition of every candidate protects you from the same idea recurring in every planning cycle. 'We evaluated this in Q2 and it failed the frequency threshold — here are the conditions under which it would re-enter assessment' is a productive answer. 'We looked at this before' is not.",
          ),
          s(" Document every disposition, not just the ones you fund."),
        ],
      ],
      examples: [
        {
          title: "A bank — the quarterly earnings brief that failed the matrix",
          body: "A major bank's strategy team proposed AI summarisation of quarterly earnings briefings across 200 monitored companies. Effort per briefing: 90 minutes. Frequency: 4 times per year per company, totalling 800 summaries per year. The effort-frequency matrix placed this in the high-effort, moderate-frequency quadrant — not an automation candidate but an augmentation one. The proposal was redirected from a full automation business case to an AI-assisted analysis tool for analysts, with a smaller investment and faster deployment.",
        },
        {
          title: "An NHS trust — the high-frequency winner",
          body: "A hospital's radiology department identified that radiologist preliminary reports for chest X-rays ran at 3,200 per week during peak winter periods. Effort per report: 8 minutes of radiologist time. The effort-frequency matrix placed this firmly in the highest-value quadrant. AI-assisted preliminary flagging — not replacement — was funded and deployed, freeing 400+ hours of radiologist time per week at peak.",
        },
        {
          title: "A logistics firm — simple automation vs AI",
          body: "A freight logistics company discovered during effort-frequency analysis that proof-of-delivery document upload and matching ran at 8,000 per week with an average effort of four minutes per document. High-frequency, low-effort: the matrix indicated simple workflow automation (RPA), not AI. An RPA solution deployed in six weeks cost 1/10th of the AI pilot that had been proposed. The effort-frequency framework prevented over-engineering.",
        },
      ],
    }),
    buildSection({
      number: "2.4",
      title: "The Data Availability Filter",
      subtitle: "The most common reason a good use case cannot be funded today",
      take: "For every use case candidate that passes the effort-frequency matrix, ask three data questions: Is the required data being collected? Is it accessible in a structured, governed form? Is there sufficient historical data to train or validate AI performance? A 'no' on any dimension is a data pre-work item, not a rejection — but it changes the timeline and the investment sequencing.",
      why: "Data availability is the most consistent blocker of AI use cases that are otherwise well-conceived. Business leaders who do not assess data availability before vendor conversations discover it during vendor scope definition — at a point where commitment creates pressure to proceed despite unresolved data problems.",
      paragraphs: [
        [
          s("Start with whether the data exists at all. "),
          x(
            "This sounds obvious, but a surprisingly large proportion of business AI ambitions rely on data that is not being systematically collected. Customer interaction quality, employee judgment patterns, operational exception rates — these are frequently cited as valuable AI inputs but not collected in any structured form.",
            "If the data does not exist, the first investment is a data collection design project — typically 6 to 18 months before AI is viable. Some organisations discover this and are discouraged. Others fund the data collection as a strategic investment. The distinction between those two responses is the business leader's conviction about the long-term value of the use case.",
          ),
          s(" When data does not exist, ask: is the use case worth a data collection investment? That is a strategy question, not a technology question."),
        ],
        [
          s("Accessibility and governance are distinct from existence. "),
          x(
            "Data may exist in a legacy system with no API. In a vendor database with contractual restrictions on use. Across multiple systems with no common identifier. In a jurisdiction with data residency requirements that prevent centralisation. Each of these is an accessibility problem, not a data existence problem — and each has a different solution timeline and cost.",
            "Governance asks whether you have the right to use the data for AI purposes. Customer data used for an AI training set may require consent that was not collected when the data was gathered. Employee data faces additional employment law constraints in many jurisdictions. Running a data rights assessment before the business case is finalised prevents a legal block that surfaces at the worst possible moment.",
          ),
          s(" Data rights assessment is a legal function, not a technology function — involve legal before vendor selection."),
        ],
        [
          s("Volume and quality together determine training viability. "),
          x(
            "AI models need sufficient examples to learn from. Supervised learning requires labelled historical examples — not just raw data. If your historical data has 500 examples of the outcome the AI should learn, it may not be sufficient for robust model performance. If your historical data exists but is inconsistently recorded across time periods or teams, the model will learn inconsistency.",
            "Ask your technical team for a data audit output: volume of historical examples, percentage that are labelled or labelable, quality score based on consistency and completeness, and the minimum viable dataset for the chosen AI approach. Without this audit, any feasibility assessment is speculative.",
          ),
          s(" Request a data audit output before committing to a vendor — not after."),
        ],
      ],
      examples: [
        {
          title: "A healthcare insurer — consent gap discovered pre-vendor",
          body: "A health insurer identified an AI fraud detection use case that would train on claims history combined with provider interaction data. Legal review of data governance revealed that member consent collected at policy inception did not include consent for AI training use. The team ran a consent refresh programme across the member base before selecting a vendor. The six-month delay was frustrating; the alternative — building a model then discovering it could not be deployed — would have cost far more.",
        },
        {
          title: "A manufacturer — data quality over data volume",
          body: "A precision manufacturer had 15 years of equipment maintenance records — sufficient volume for a predictive maintenance model. A data audit revealed that maintenance codes had been applied inconsistently across three equipment generations and two acquired facilities. Training on the raw data produced a model that performed at 61% accuracy — below the manual diagnostic accuracy of experienced technicians. A data standardisation and relabelling project took four months and brought model accuracy to 89%. Volume was never the problem; quality was.",
        },
        {
          title: "A bank — contractual restriction prevents a use case",
          body: "A regional bank's credit risk team proposed using transaction data from a payment processing partner to enhance credit scoring. The data availability filter surfaced a contractual restriction: the partner's data could not be used for credit decisioning per the service agreement. The use case was not cancelled — it was converted into a contract renegotiation workstream for the next vendor agreement renewal. The timeline shifted by two years, but the opportunity was preserved rather than blindly pursued and blocked.",
        },
      ],
    }),
    buildSection({
      number: "2.5",
      title: "Quick Wins by Function",
      subtitle: "The use cases most functions can start in the next 90 days",
      take: "Across most business functions, a small set of AI use cases consistently appear as high-effort, high-frequency, data-available candidates. Knowing these function-level quick wins saves discovery time and gives you a starting point for any discovery conversation. They are not universally applicable — but they are worth testing against your situation first.",
      why: "Business leaders who know the proven function-level use cases arrive at discovery workshops as informed participants, not blank slates. They can probe whether the well-known opportunities apply to their context and redirect the workshop to genuinely novel candidates faster.",
      paragraphs: [
        [
          s("Finance and operations quick wins tend to cluster around document processing and exception handling. "),
          x(
            "Invoice matching and approval routing, contract clause extraction, expense policy compliance checking, regulatory report generation, and supplier communication summarisation are consistently high-frequency, reasonably well-structured tasks with proven AI approaches and short data preparation timelines.",
            "The common thread: these are tasks where structured data already exists (invoices have standard fields, contracts have consistent clause categories) and where error rates are measurable and consequential enough to justify investment.",
          ),
          s(" The structured input advantage accelerates deployment — these use cases typically pilot in weeks, not months."),
        ],
        [
          s("Sales and marketing quick wins centre on personalisation at scale and research acceleration. "),
          x(
            "Account research summarisation before sales meetings, lead scoring on structured CRM data, email personalisation at segment level, win-loss analysis pattern identification, and market intelligence monitoring are consistently high-value candidates in commercial functions.",
            "The data availability advantage in sales and marketing: CRM data, email data, and web interaction data are typically well-structured and already collected. The augmentation design challenge is ensuring that AI-generated insights reach sales professionals at the moment they need them — not in a report they will not read.",
          ),
          s(" Sales AI that does not integrate into the sales workflow is research, not a use case."),
        ],
        [
          s("HR and talent quick wins focus on volume screening and policy question answering. "),
          x(
            "CV screening for high-volume roles, interview scheduling, onboarding question answering (policy queries, benefits questions), performance review language consistency checking, and internal mobility matching are high-frequency HR candidates with existing data.",
            "The governance requirement in HR AI is non-negotiable: any use case involving hiring or performance decisions requires bias assessment, explainability design, and legal review before deployment. Quick win does not mean governance shortcut — it means the technology is proven and the data is available; the governance investment is still required.",
          ),
          s(" HR AI quick wins still require full governance investment — the 'quick' refers to technology readiness, not regulatory readiness."),
        ],
      ],
      examples: [
        {
          title: "Generali — contract extraction as finance quick win",
          body: "Insurance group Generali deployed AI contract clause extraction across its supplier contract portfolio of 12,000 active agreements. The task was high-effort (2 hours per contract for legal review of specific clauses), high-frequency (200 new contracts per month plus annual reviews), and data-available (structured legal templates). Deployment took 8 weeks. The first year produced 4,800 hours of legal team capacity redeployed to higher-value contract negotiation.",
        },
        {
          title: "Vodafone — sales call intelligence as augmentation",
          body: "Vodafone's enterprise sales team deployed AI call summarisation and next-action generation for post-meeting CRM updates. Sales team members previously spent 20-30 minutes per client meeting on CRM documentation. The AI draft reduced this to 5-10 minutes of review and edit. Adoption was high because the benefit was immediate and personal — the sales person, not just the company, won time back. CRM data quality also improved because documentation became less onerous.",
        },
        {
          title: "Unilever — HR CV screening with governance framework",
          body: "Unilever implemented AI CV screening for graduate recruitment across 30,000+ annual applications. Before deployment, they ran a bias audit across the training data, implemented explainability requirements (every rejection must surface three criteria from the candidate's application), and created an appeals process. The governance investment added six weeks to the deployment timeline and prevented a regulatory challenge that would have been significantly more costly.",
        },
      ],
    }),
    buildSection({
      number: "2.6",
      title: "The Glamour Trap",
      subtitle: "Why the most exciting AI use cases are often the least appropriate starting point",
      take: "Glamorous AI use cases — autonomous agents, generative content at scale, predictive analytics on novel data — attract leadership attention and vendor excitement. They also tend to have the longest paths to production value, the highest data requirements, and the greatest organisational change burden. Business leaders who start with glamour and ignore quick wins fund journeys that run out of runway before arriving.",
      why: "The glamour trap is one of the most consistent patterns in failed enterprise AI programmes. Starting with the most ambitious use case depletes budget and credibility before simpler, high-value applications are funded. Quick wins build the internal capability and stakeholder confidence that ambitious applications later require.",
      paragraphs: [
        [
          s("Glamorous use cases are expensive to prototype and hard to productionise. "),
          x(
            "An autonomous AI agent that handles end-to-end customer journeys is genuinely exciting. It is also a multi-year programme requiring data integration across every customer touchpoint, workflow redesign across multiple teams, governance frameworks for autonomous decisions, and technology infrastructure that most organisations do not yet have in place.",
            "The prototype of such a system can be built in weeks — vendors are excellent at building compelling demos. The production system, at scale, with governance, in your real data environment, serving real customers, is a fundamentally different endeavour.",
          ),
          s(" Separate the demo from the deployment when evaluating glamorous use cases."),
        ],
        [
          s("Quick wins build the capability that glamorous applications need. "),
          x(
            "Successfully deploying AI invoice matching teaches your organisation: how to run an AI pilot, how to measure AI performance, how to manage vendor relationships, how to design change management for AI-assisted workflows, and how to govern AI outputs. These capabilities are required by every subsequent AI application.",
            "Organisations that skip quick wins and begin with ambitious applications must build these capabilities under the pressure of a high-stakes, high-visibility programme. The failure rate in those conditions is predictably high.",
          ),
          s(" Quick wins are not consolation prizes — they are the capability-building prerequisite for the transformation you actually want."),
        ],
        [
          s("Glamour produces board visibility before it produces business value. "),
          x(
            "Leadership teams that present autonomous AI agents to the board are managing expectations upward before they have managed execution downward. When the programme stalls — as complex programmes routinely do — the board visibility becomes a liability rather than an asset.",
            "Quick wins produce board-reportable business outcomes — cost reductions, throughput improvements, error rate reductions — that build the credibility needed to fund the longer journey. Lead with the outcome, not the technology ambition.",
          ),
          s(" Build your board credibility on outcomes before you build it on ambitions."),
        ],
      ],
      examples: [
        {
          title: "A financial services group — the autonomous advisor trap",
          body: "A wealth management group approved a 'fully autonomous AI financial advisor' programme at the board level following a compelling vendor demonstration. Two years later, regulatory barriers, data integration challenges, and client trust concerns had produced a partially deployed tool used by fewer than 300 clients. Meanwhile, AI-assisted portfolio rebalancing — a quick win identified but deprioritised — could have been producing measurable value within the first six months. The glamour programme consumed the budget and timeline that the quick win needed.",
        },
        {
          title: "JPMorgan — quick wins enabling transformation",
          body: "JPMorgan's AI programme began with document processing automation across legal review — a high-frequency, well-structured, data-available use case that avoided the glamour of more transformative applications. The COIN programme (Contract Intelligence) automated review of 12,000 annual credit agreements in seconds rather than 360,000 lawyer-hours. The organisational capability built through COIN — data governance, AI performance measurement, legal-AI workflow integration — became the foundation for subsequent, more ambitious AI programmes.",
        },
        {
          title: "A telecoms operator — escaping the glamour trap",
          body: "A European telecoms operator approved a 'generative AI for network design' programme after competitive pressure from peers. Internal assessment six months in found no production deployment was imminent: data requirements were not met, engineering workflows were not redesigned, and vendor capability did not match the demo. The CDO used the assessment to redirect budget to three quick wins — call centre intent classification, churn prediction scoring, and network fault early warning — that produced measurable outcomes within a year and rebuilt board confidence in the AI programme.",
        },
      ],
    }),
    buildSection({
      number: "2.7",
      title: "Use Case Documentation",
      subtitle: "The brief that protects your investment through vendor selection and pilot design",
      take: "Every use case that enters your portfolio needs a one-page documentation brief before any vendor contact. The brief captures: problem statement, archetype classification, effort-frequency score, data availability status, success metric, and governance requirements. Without this brief, vendor conversations will define your use case for you — and vendor-defined use cases serve vendor interests.",
      why: "Use case documentation is the moment your organisation takes ownership of what it is trying to achieve. It prevents scope creep during vendor selection, gives the pilot team a clear brief, and creates the accountability artefact for post-pilot evaluation.",
      paragraphs: [
        [
          s("The problem statement must be specific enough to be falsifiable. "),
          x(
            "'Improve customer service' is not a problem statement. 'Reduce average handle time on billing query calls from 8.4 minutes to below 6 minutes for 80% of call types' is a problem statement. The difference is not just precision — it is the difference between a use case that can be evaluated and one that cannot.",
            "Falsifiability matters because it creates the condition for honest evaluation. A vague problem statement allows a mediocre deployment to be declared a success. A specific one creates accountability — and that accountability is what separates AI programmes that learn and improve from ones that drift.",
          ),
          s(" Write the success condition as a specific metric with a threshold and a time horizon before any vendor conversation."),
        ],
        [
          s("Governance requirements must be pre-specified, not discovered post-deployment. "),
          x(
            "Every use case brief should include: who is accountable for AI output quality, what is the override and escalation path when the AI is wrong, what audit trail is required, how often will performance be reviewed, and what threshold triggers a suspension or shutdown of the AI system.",
            "Pre-specifying governance requirements changes vendor conversations. Vendors who cannot support your governance requirements are eliminated early. Vendors who can will build those requirements into their proposal rather than treating them as scope additions during implementation.",
          ),
          s(" Governance requirements in the brief prevent governance debates during deployment — when momentum makes saying no difficult."),
        ],
        [
          s("The brief is a living document through the pilot phase. "),
          x(
            "Use case understanding improves as you engage vendors, run technical discovery, and begin pilot design. Update the brief to reflect new information — revised volume estimates, corrected data availability assessments, refined success metrics based on baseline measurement.",
            "The brief is not a contract — it is an organisational learning document. Every update is a record of what you discovered and how it changed the design. That record is invaluable for the post-pilot review and for briefing future teams who pick up the programme.",
          ),
          s(" Treat the brief as a living document, version-controlled, with updates signed off by the business leader sponsor."),
        ],
      ],
      examples: [
        {
          title: "A retailer — specific success metric saves a vendor selection",
          body: "A fashion retailer documenting an AI demand forecasting use case originally wrote the success metric as 'improve forecast accuracy'. During brief review, their finance director pushed for specificity: 'reduce stockout rate on core SKUs from 6.2% to below 4% within two inventory cycles of deployment.' That metric eliminated two of four shortlisted vendors who could not demonstrate performance against that specific target in comparable retail environments. The brief specificity accelerated vendor selection by six weeks.",
        },
        {
          title: "An insurer — governance pre-specification changes vendor response",
          body: "An insurer's AI pricing use case brief included a regulatory requirement: every premium decision must be explainable at the individual factor level in a format suitable for regulator audit. Three of five shortlisted vendors responded that their models used opaque ML approaches that could not produce factor-level explanations. Those three were eliminated in the first round. The governance requirement in the brief did the work that post-selection negotiation would have done badly.",
        },
        {
          title: "A manufacturer — brief versioning reveals scope creep",
          body: "A manufacturer's AI quality control brief went through four versions during vendor selection. Version comparison between V1 and V4 revealed that scope had expanded from one production line to three, the success threshold had been relaxed from 98% to 95% accuracy, and a human review requirement had been removed. The business leader used the version comparison to reset the brief to the original scope and restore the governance requirement. Without version tracking, the scope creep would have gone undetected until pilot design.",
        },
      ],
    }),
    buildSection({
      number: "2.8",
      title: "Validating With Your Team",
      subtitle: "The business leader's quality check before the portfolio is presented",
      take: "Before presenting a use case portfolio to finance, technology, or the board, validate it with the people who will actually implement the workflows — your operational team. They will surface exceptions you did not anticipate, data quality issues you did not discover, and change management risks that will determine whether the AI produces outcomes or just activity.",
      why: "Operational teams are the implementation environment for every AI initiative. Leaders who validate with them before presenting to stakeholders prevent two failure modes: presenting a use case that the operational team cannot or will not adopt, and presenting a data availability claim that operational knowledge would have corrected.",
      paragraphs: [
        [
          s("Validation is not consensus-building — it is reality-testing. "),
          x(
            "The purpose of validating with your team is not to get approval or enthusiasm. It is to surface information that changes the use case design before the design is committed. A team that tells you 'our data is messier than you think' or 'customers will not accept AI decisions for this type of query' is giving you information that saves programme budget and reputation.",
            "Leaders who treat validation as a buy-in exercise — presenting the use case and asking for enthusiasm — miss the information value entirely. The question is not 'do you support this?' It is 'what have I got wrong?'",
          ),
          s(" Ask specifically: what have I missed about this process? What data quality issues have you seen? Where would you be uncomfortable with AI making this decision?"),
        ],
        [
          s("Surface the exception inventory before the pilot design. "),
          x(
            "Every process has exceptions — cases that do not follow the standard pattern and require different handling. Exception rates of 5% to 20% are common in processes that appear highly structured. AI trained on standard cases and deployed against real processes encounters exceptions it was not designed for.",
            "Asking your operational team to enumerate the exceptions — and to estimate their frequency — produces a more accurate feasibility assessment and a better pilot design. Exceptions that exceed 15% of volume typically require either a parallel human handling track or a fundamental redesign of the automation scope.",
          ),
          s(" The exception inventory belongs in the use case brief before vendor selection, not in the post-pilot retrospective."),
        ],
        [
          s("Validate the change management readiness assessment. "),
          x(
            "Your readiness assessment in section 1.7 was based on your understanding of the team's workflow and change capacity. Your team may have a different assessment. A team that reports they are currently managing three other process changes, that their performance system does not credit AI adoption, or that trust in technology tools is low after a previous failed system — these are readiness conditions that change the timeline.",
            "The worst outcome is not a team that says they cannot do it — that gives you information to act on. The worst outcome is a team that agrees to everything in the validation session and then does not adopt the system post-deployment. Ask open questions that surface concerns: 'What would need to be true for you to genuinely use this tool?' 'What has made previous technology changes hard for your team?'",
          ),
          s(" Open questions reveal concerns that direct questions conceal."),
        ],
      ],
      examples: [
        {
          title: "A bank — exception inventory changes the pilot scope",
          body: "A retail bank validated an AI mortgage document processing use case with its processing team. The team enumerated 23 exception types, estimating that exceptions represented 28% of document volumes. The business leader used this to redesign the pilot scope: AI automation was scoped to the 72% standard cases; exceptions were preserved in a human handling queue with clear routing logic. The pilot succeeded within the redesigned scope. The original scope — full automation — would have failed on the 28% exception rate.",
        },
        {
          title: "A healthcare provider — change management concern surfaces in validation",
          body: "A healthcare provider validating an AI clinical documentation support tool with nursing staff discovered a critical change management condition: nursing staff trusted the AI for certain note types but not for medication administration records, citing patient safety concerns. The validation session redesigned the deployment: AI assistance was enabled for general clinical notes, excluded from medication records, and a trust-building review period was built in before any expansion. The validation session prevented a deployment that clinical staff would have worked around rather than adopted.",
        },
        {
          title: "A logistics company — data quality reality correction",
          body: "A logistics firm validating an AI shipment delay prediction use case with its operations team discovered that delay codes — the primary training signal — had been applied inconsistently by different depot managers. The data availability filter had assessed the data as available and structured; the operational team's knowledge revealed it was available but inconsistently labelled. The validation session triggered a data quality audit that added eight weeks to the programme but prevented training a model on misleading signal.",
        },
      ],
    }),
  ],
  quiz: [
    {
      q: "Your team proposes an 'AI for customer service'. What is the first question you should ask to convert this into a usable use case?",
      options: [
        "What vendor should we use?",
        "Which archetype applies — is this automation, augmentation, or insight — and what specific problem does it address?",
        "What is our budget for this?",
        "Have our competitors deployed customer service AI?",
      ],
      correct: 1,
      correctFeedback:
        "Right. The archetype question determines the success metric, the technology approach, and the change management design. A vague 'AI for customer service' that has not been archetypified cannot be scoped, funded, or evaluated. Re-read section 2.1.",
      wrongFeedback:
        "Vendor selection and budget come after archetype classification and problem statement — not before. Re-read sections 2.1 and 2.7.",
    },
    {
      q: "The effort-frequency analysis identifies a high-value use case performed 12 times per year with 3 hours of effort per instance. What is the correct disposition?",
      options: [
        "Fund an AI pilot — the effort per instance is high enough to justify it.",
        "Classify as high-effort, low-frequency — better suited to augmentation support or human expert tooling, not full AI automation. Document conditions for re-evaluation.",
        "Reject permanently — low-frequency tasks cannot benefit from AI.",
        "Fund it if it is glamorous enough to demonstrate AI ambition to the board.",
      ],
      correct: 1,
      correctFeedback:
        "Right. 12 instances per year at 3 hours each is 36 hours annually — insufficient volume to amortise AI infrastructure investment. This is a skilled judgment task more suited to augmentation tools or document assembly support. Re-read section 2.3.",
      wrongFeedback:
        "Effort per instance and frequency together determine the total addressable value. 36 hours per year cannot justify full AI automation investment regardless of effort per instance. Re-read section 2.3.",
    },
    {
      kind: "categorize",
      q: "Sort each use case candidate into its correct archetype.",
      categories: ["Automation", "Augmentation", "Insight"],
      items: [
        { text: "AI flags anomalous supplier invoices for a human accounts payable manager to review and approve.", category: 1 },
        { text: "AI processes and routes 4,000 standard insurance claims per week with no human review for standard cases.", category: 0 },
        { text: "AI identifies customer churn risk patterns across 2M accounts for the strategy team's quarterly review.", category: 2 },
        { text: "AI generates draft performance review language for HR managers to review and personalise before sending.", category: 1 },
        { text: "AI automatically schedules delivery routes each morning based on real-time traffic and order data.", category: 0 },
      ],
      correctFeedback:
        "Right. Automation replaces the human action. Augmentation supports a human decision that remains human-accountable. Insight surfaces patterns for human strategic use. Each archetype requires different success metrics and governance design.",
      wrongFeedback:
        "The key distinction is whether a human retains decision accountability. If yes, the archetype is augmentation or insight. If no, it is automation. Re-read section 2.1.",
    },
    {
      q: "A vendor demonstrates a compelling AI use case with test data in a 45-minute demo. Before approving any investment, what is the most critical next step?",
      options: [
        "Request the vendor's pricing proposal.",
        "Run the data availability filter against your own data — not the vendor's test data — before any commercial commitment.",
        "Present the demo to the board to build excitement.",
        "Ask competitors whether they have evaluated the same vendor.",
      ],
      correct: 1,
      correctFeedback:
        "Right. Vendor demos use curated test data. Your data will have different quality, structure, and governance constraints. The data availability filter against your real data is the most critical pre-commitment step. Re-read section 2.4.",
      wrongFeedback:
        "A compelling demo is a vendor's best argument for investment — it is also the version furthest from your real-world deployment conditions. Re-read section 2.4.",
    },
    {
      q: "Your board is excited about an autonomous AI agent that could handle end-to-end customer journeys. You have no active AI deployments in production. What is your recommended response?",
      options: [
        "Approve immediately — board excitement is a programme accelerator.",
        "Acknowledge the strategic ambition, present quick-win use cases that build the required organisational capability, and propose the autonomous agent as a Year 3 horizon in a structured roadmap.",
        "Reject the idea — autonomous agents are too risky.",
        "Commission a vendor RFP immediately to maintain momentum.",
      ],
      correct: 1,
      correctFeedback:
        "Right. Autonomous agents require organisational capability that does not yet exist. Quick wins build that capability and produce credible outcomes that fund the longer journey. Presenting it as a phased roadmap is both honest and strategically sound. Re-read section 2.6.",
      wrongFeedback:
        "Starting with the most glamorous use case without organisational capability is the most consistent pattern in failed enterprise AI programmes. Re-read section 2.6.",
    },
    {
      q: "During use case validation with your operational team, a supervisor says the data quality for the key training signal is 'messier than you think'. What is your response?",
      options: [
        "Proceed — the vendor will handle data quality issues during implementation.",
        "Commission a data quality audit immediately, update the use case brief with findings, and adjust the feasibility score and timeline accordingly.",
        "Replace the supervisor — pessimism about AI is a change management failure.",
        "Remove the data requirement from the use case brief to maintain timeline.",
      ],
      correct: 1,
      correctFeedback:
        "Right. Operational knowledge of data quality problems is exactly what validation sessions should surface. A data quality audit costs weeks and prevents a failed deployment that costs months. Update the brief and the feasibility assessment. Re-read sections 2.4 and 2.8.",
      wrongFeedback:
        "Dismissing operational knowledge of data quality is one of the most reliable ways to produce an AI model trained on misleading signal. Re-read sections 2.4 and 2.8.",
    },
  ],
});
