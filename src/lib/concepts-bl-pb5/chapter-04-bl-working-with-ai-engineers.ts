import { BL_CALLOUT, buildChapter, buildSection, s, x } from "../concepts-bl-helpers";

export const chapter04BlWorkingWithAiEngineers = buildChapter({
  slug: "bl-working-with-ai-engineers",
  number: 4,
  shortTitle: "Working with AI Engineers",
  title: "How Business Leaders Work Effectively with AI Engineers",
  readingMinutes: 24,
  summary:
    "AI engineers build the systems that business leaders deploy — but the quality of what gets built depends almost entirely on the quality of the collaboration between business and engineering. Business leaders who learn to brief AI engineers precisely, give useful feedback on AI outputs, and set realistic expectations for delivery timelines get AI systems that solve business problems. Those who do not get technically correct systems that miss the point.",
  keyTakeaway:
    "Effective collaboration with AI engineers requires three skills that no technical background is needed to develop: writing business requirements in a format engineers can act on, giving feedback on AI outputs that distinguishes data problems from model problems from requirement problems, and knowing when to challenge engineering timelines based on business risk rather than technical preference.",
  pmCallout: BL_CALLOUT,
  sections: [
    buildSection({
      number: "4.1",
      title: "What AI engineers actually do",
      subtitle: "A non-technical guide to the work of the people building your AI systems",
      take: "AI engineers do four things: they prepare and manage data pipelines (data engineering), they select and configure AI models for specific tasks (model selection and fine-tuning), they build the software that connects AI models to business systems (integration engineering), and they monitor and improve AI systems after deployment (operations and iteration). Understanding these four activities helps business leaders know what to ask for, what is realistic to expect, and when a problem is a business specification issue versus an engineering challenge.",
      why: "Business leaders who do not understand what AI engineers do cannot tell when they are being misled, cannot evaluate timeline estimates, and cannot frame requirements in terms that engineers can act on. A basic operational understanding of AI engineering — not technical depth — is the minimum for effective collaboration.",
      paragraphs: [
        [
          s("Data engineering is often 60–70% of total AI project effort and the part least visible to business leaders. "),
          x(
            "Before any AI model is selected or trained, the data that will train or inform it must be identified, accessed, cleaned, formatted, and validated. If your organisation's data is in multiple systems, requires manual extraction, or has quality issues (missing values, inconsistencies, outdated records), the data engineering phase can take 3–6 months before any AI capability is visible.",
            "Business leaders who ask 'when will we see something working?' after two months do not realise that the answer — 'when the data is ready' — is not a project management failure. It is the correct answer to a question about work that is genuinely invisible to non-engineers.",
          ),
          s(" Ask your engineering lead for a data readiness milestone before any AI capability milestone. Data readiness is the gating dependency."),
        ],
        [
          s("Model selection is the choice of which AI capability to use for a specific task — and it is not as consequential as most business leaders assume. "),
          x(
            "For most business AI use cases, multiple models could work adequately. The choice of GPT-4 versus Claude versus Llama for a document summarisation task will produce similar business outcomes. The consequential choices are the business requirements, the data quality, and the integration design — not the model itself.",
            "Business leaders who get drawn into model debates (which AI is best?) are debating a secondary question. The primary question is: are the requirements precise enough that any good model can produce the right output?",
          ),
          s(" Leave model selection to engineering — focus your attention on requirement precision and data quality."),
        ],
        [
          s("Integration engineering is where most enterprise AI deployment complexity lives. "),
          x(
            "An AI model that produces excellent outputs in isolation still needs to receive data from your existing systems, return outputs to your workflows, and handle authentication, access control, error states, and performance requirements. Integration engineering connects the AI model to your operational reality — and this connection is typically more complex than the AI model itself.",
            "A business leader who pushes for a faster model delivery timeline without understanding that 60–70% of the work is in data and integration engineering is pushing on the wrong constraint.",
          ),
          s(" In every AI project review, ask for a breakdown of effort between data engineering, model work, and integration engineering — you will find the bottleneck faster."),
        ],
      ],
      examples: [
        {
          title: "Manufacturer — data engineering timeline surprise",
          body: "A manufacturer's operations director expected the first AI quality inspection demo within 6 weeks of project kickoff. At week 8, no demo had been produced. The engineering lead explained that the image data required for training was stored across 12 manufacturing sites in 4 different formats with inconsistent labelling conventions. Data preparation was estimated at 14 more weeks. The director, who had not been briefed on the data engineering scope at kickoff, had been reporting to the board that the system would be live in Q3. Understanding data engineering timelines at kickoff would have prevented 8 weeks of misaligned stakeholder expectations.",
        },
        {
          title: "Financial services — model debate misdirects attention",
          body: "A bank's innovation team spent 6 weeks debating which foundation model to use for a customer communication AI tool. Meanwhile, the requirement for the AI tool had been written as 'generate personalised customer communications' without defining personalisation criteria, regulatory language requirements, or communication channel specifications. The model eventually selected produced technically impressive outputs that violated 3 regulatory guidelines and failed the compliance review. The model debate had consumed the time that should have been spent on requirement precision.",
        },
        {
          title: "Retailer — integration scope clarification prevents delay",
          body: "A retailer's product team asked the engineering lead to break down effort for a new AI inventory recommendation feature. The breakdown: model selection and configuration 15%, data pipeline from 8 source systems 45%, integration into existing POS and ordering systems 35%, testing and monitoring setup 5%. The business leader immediately adjusted stakeholder timelines based on the real effort distribution. The feature was delivered on the revised timeline with no escalations — because the effort breakdown had set accurate expectations.",
        },
      ],
    }),
    buildSection({
      number: "4.2",
      title: "The language barrier: translating business need to technical spec",
      subtitle: "Why requirements written in business language produce systems that solve the wrong problem",
      take: "AI engineers cannot build what they cannot specify. Business requirements written in outcomes language ('improve customer satisfaction', 'reduce fraud') cannot be translated directly into AI systems without a translation layer. The translation layer converts business outcomes into precise system specifications: input data, output format, accuracy requirements, latency constraints, and error handling. Business leaders who learn to provide this layer stop receiving systems that miss the point.",
      why: "The most expensive AI project failures are not caused by engineering incompetence — they are caused by requirements that were too ambiguous to build precisely. A requirement that reads as a business intention ('help sales predict which deals will close') is an AI brief; a requirement that specifies input data, prediction target, accuracy threshold, and system integration is an AI specification.",
      paragraphs: [
        [
          s("The five-element AI requirement converts a business intention into a buildable specification. "),
          x(
            "Element 1: what decision or action should the AI inform? Element 2: what data inputs does the AI need to make that decision? Element 3: what form should the AI output take (score, recommendation, text, classification)? Element 4: what accuracy or quality standard must the output meet before it is used? Element 5: how should the AI handle cases where it is uncertain or where the input data is missing?",
            "A business leader who answers these five questions has provided the core of a technical specification. An engineering team that starts with these five elements spends its time building the right system rather than guessing what 'better outcomes' means.",
          ),
          s(" Use the five-element format for every AI requirement you write — even a rough draft is more buildable than an outcome statement."),
        ],
        [
          s("The most important element is Element 4 — the accuracy standard. "),
          x(
            "Without an accuracy standard, AI engineers optimise for the highest technically achievable accuracy. This sounds good but produces two problems: it takes longer to deliver (higher accuracy requires more data and more iteration), and it defines success in engineering terms (model accuracy) rather than business terms (business outcome). A business leader who specifies 'I need this prediction to be right 85% of the time to be useful for my workflow' gives engineering a concrete, testable requirement.",
            "The accuracy standard must come from the business, not from the engineering team. Only the business knows at what accuracy level the AI output becomes more valuable than not having it.",
          ),
          s(" Before any AI project starts, define the minimum accuracy threshold at which the AI output would actually change your decisions. That is your accuracy requirement."),
        ],
        [
          s("Negative requirements — what the AI must not do — are as important as positive requirements. "),
          x(
            "A legal AI that must not produce outputs in languages other than English, a financial AI that must not make recommendations on products outside a defined risk band, a clinical AI that must not produce diagnostic suggestions without flagging confidence level — these negative requirements are enforcement constraints that prevent the AI from operating outside its appropriate scope.",
            "Negative requirements are missed in initial requirements documents more often than positive requirements because they require thinking about failure modes. A structured 'what must this AI never do?' question at the requirements stage is worth 4 weeks of post-deployment remediation.",
          ),
          s(" Include a 'must-not-do' section in every AI requirement document, even if it contains only 3 items."),
        ],
      ],
      examples: [
        {
          title: "Sales — five-element specification transforms project",
          body: "A commercial director rewrote a rejected AI brief using the five-element format. Original brief: 'AI that helps the sales team identify their best opportunities.' Five-element revision: Element 1: predict which opportunities in the pipeline will close in the current quarter. Element 2: CRM fields (deal size, stage, activity history, contact engagement, competitor mentions). Element 3: probability score 0–100% per deal. Element 4: minimum 70% accuracy on deals that close (acceptable for prioritisation, not for guarantees). Element 5: flag deals with insufficient CRM data as 'insufficient information' rather than assigning a low score. The engineering team started building the next day. The original brief had been in review for 3 months.",
        },
        {
          title: "HR — minimum accuracy threshold changes model choice",
          body: "An HR director specified that an AI employee retention risk predictor needed to be right 75% of the time to be useful (75% minimum accuracy threshold). At lower accuracy, the cost of HR interventions for falsely identified high-risk employees would exceed the benefit of correctly identifying genuinely high-risk employees. The engineering team's first model achieved 68% accuracy. They had been planning to optimise to 80%+ before releasing — at an estimated 3 additional months of work. The 75% threshold told them the first model was close enough to test with HR partners, saving 3 months of engineering time.",
        },
        {
          title: "Legal — must-not-do clause prevents compliance failure",
          body: "A law firm's AI contract review requirement included a 'must-not-do' section: must not produce final contract positions (only flagged issues for review), must not operate on non-English language contracts (insufficient training data), must not flag confidentiality clauses as standard (all require individual review). The third constraint — discovered during a structured 'what must this AI never do?' conversation — was not in the original brief. Without it, the system would have auto-classified 40% of confidentiality clauses as standard, removing them from the required review queue and creating a compliance gap.",
        },
      ],
    }),
    buildSection({
      number: "4.3",
      title: "Writing effective AI briefs for engineering teams",
      subtitle: "The brief format that produces AI systems aligned with business need",
      take: "An AI brief is the document that converts a business problem into an engineering workstream. A brief that contains problem context, success criteria, data landscape, integration requirements, constraints, and review process gives an engineering team everything it needs to scope, build, and deliver an AI system that solves the right problem. A brief that contains only a problem statement gives an engineering team a starting point for a 4-week requirements gathering exercise.",
      why: "The time an engineering team spends on requirements gathering when a brief is inadequate is typically 3–5 weeks. The time required to write a complete brief is typically 4–8 hours for a business leader who understands the five-element format. Writing the brief is the highest-ROI 8 hours a business leader can invest in an AI project.",
      paragraphs: [
        [
          s("An effective AI brief has seven sections. "),
          x(
            "Section 1: problem context (what workflow are we improving, for whom, and why does it matter?). Section 2: success criteria (the five-element specification including accuracy threshold). Section 3: data landscape (what data exists, where it lives, what its quality issues are). Section 4: integration requirements (what systems must the AI tool connect to, and what are the data flows?). Section 5: constraints (regulatory requirements, security requirements, timeline, budget). Section 6: non-requirements (what this brief explicitly does not cover). Section 7: review process (who approves the output at each stage, what are the sign-off criteria?).",
            "Section 6 — non-requirements — prevents scope creep and is the section most commonly omitted. Without it, engineering teams make reasonable assumptions about adjacent problems and build solutions that expand beyond the intended scope.",
          ),
          s(" Use the seven-section brief format consistently — even for small AI projects. Consistency reduces the time to produce each subsequent brief as the format becomes familiar."),
        ],
        [
          s("The data landscape section is the brief element that most often reveals project feasibility issues. "),
          x(
            "When a business leader documents the data landscape — what data exists, where it lives, who owns it, and what its quality issues are — they frequently discover that the data required for the AI system does not exist, exists in an unusable form, or is owned by a function that will not share it without a governance process. Discovering these issues in the brief is a 1-week correction. Discovering them in engineering is a 3-month delay.",
            "Many AI projects fail not because the AI is technically inadequate but because the data landscape was assumed rather than documented. The brief is the opportunity to validate the assumption before investing in engineering.",
          ),
          s(" Spend 50% of brief preparation time on the data landscape section. This is where the project risks live."),
        ],
        [
          s("The review process section defines the governance of the AI system before it is built — not after it is deployed. "),
          x(
            "The review process section answers: who reviews AI outputs before they are acted on? What are the sign-off criteria at each project milestone? Who has authority to reject an AI output as insufficient quality? What escalation path exists for disputed AI outputs? Answering these questions before engineering begins prevents the most common post-deployment governance failure: an AI system in production with no one accountable for output quality.",
            "Engineering teams build what they are asked to build. They will build an AI system with no review process if no review process is specified. The brief is the document that puts governance into the engineering scope.",
          ),
          s(" Define the output review process in the brief with the same rigour as the system requirements."),
        ],
      ],
      examples: [
        {
          title: "Operations — data landscape section reveals 6-month data gap",
          body: "An operations director spent 3 hours completing the data landscape section of an AI maintenance prediction brief. She documented that predictive maintenance required sensor data from 400 machines — and then discovered during the documentation that 280 machines did not have the sensors required. Installing sensors was a 6-month procurement and installation project. Without the brief, this would have been discovered by the engineering team 8 weeks into the project. The brief enabled a parallel track: sensor installation began while the engineering team built the model architecture, saving approximately 14 weeks of total project timeline.",
        },
        {
          title: "Financial services — non-requirements prevent scope creep",
          body: "A finance team's AI reporting brief included a non-requirements section that explicitly stated: 'This brief does not cover AI-generated narrative commentary on financial results; it covers only automated data summarisation.' Engineering built the brief scope in 6 weeks. Without the non-requirements section, the engineering lead had assumed that narrative commentary was in scope and had allocated 4 additional engineers and 8 additional weeks to the project. The non-requirements section saved 8 weeks and approximately £120,000 in engineering cost.",
        },
        {
          title: "HR — review process in brief produces governance clarity",
          body: "An HR technology brief for an AI job grading tool included a detailed review process section: all AI grade recommendations required sign-off from the relevant HR business partner; recommendations outside the standard grade range required additional sign-off from the HRBP Director; the first 500 grades would be reviewed by both AI and manual process in parallel to calibrate accuracy. The review process, designed in the brief rather than after deployment, was implemented as a workflow feature in the tool. The parallel validation period identified 12% of AI grades that required adjustment — and produced the calibration data that improved model accuracy to 91% by month 4.",
        },
      ],
    }),
    buildSection({
      number: "4.4",
      title: "Feedback loops: giving useful feedback on AI outputs",
      subtitle: "How to tell an engineering team what is wrong with an AI output in a way they can act on",
      take: "Feedback on AI outputs that says 'this is not what I wanted' is not useful feedback — it is a problem statement that an engineering team cannot act on. Useful feedback on AI outputs identifies the specific failure category: wrong input data used, correct data but wrong model processing, correct processing but wrong output format, correct output but wrong integration point. Each failure category requires a different fix.",
      why: "Engineering teams that receive non-specific feedback on AI outputs cycle through multiple attempted fixes before finding the actual problem. Each fix attempt takes 1–2 weeks. A business leader who can identify the failure category in a 10-minute review conversation saves 4–8 weeks of development cycles.",
      paragraphs: [
        [
          s("AI output failures fall into four distinct categories that require different fixes. "),
          x(
            "Category 1 (data failure): the AI used the wrong data or used correctly structured data that contained errors. Fix: data pipeline or data quality. Category 2 (model failure): the AI's processing produced an incorrect result from correct input data. Fix: model retraining or reconfiguration. Category 3 (specification failure): the AI produced what was specified, but the specification was wrong. Fix: requirements revision. Category 4 (integration failure): the AI output is correct but is displayed incorrectly or delivered to the wrong workflow step. Fix: integration adjustment.",
            "Category 3 — specification failure — is the most common category and the most difficult for engineering teams to surface because it implies that the business requirement was wrong. Engineers are reluctant to suggest this; business leaders must be willing to accept it.",
          ),
          s(" When reviewing AI outputs, ask 'which category of failure is this?' before giving feedback. The category determines the fix."),
        ],
        [
          s("Specific examples of failures are 10× more valuable than general assessments of quality. "),
          x(
            "Feedback that says 'the predictions are often wrong' leaves engineering with no starting point. Feedback that says 'for deals in the financial services sector with deal values over £500,000, the prediction is wrong 60% of the time — here are 12 examples' gives engineering a testable hypothesis: is there a data quality issue for large financial services deals, a model gap for this segment, or a specification issue with how financial services was defined?",
            "Specific examples allow engineering to reproduce the failure, which is the prerequisite for fixing it. General quality assessments produce debates about whether the failure rate is acceptable, not fixes.",
          ),
          s(" Build a failure log during AI testing — record every incorrect output with its input context, the actual output, and the expected output. This log is your most valuable testing deliverable."),
        ],
        [
          s("Distinguishing 'worse than nothing' from 'not as good as hoped' prevents over-engineering. "),
          x(
            "An AI output that is wrong 25% of the time may still be better than the current process if the current process has a 40% error rate. Feedback that focuses only on AI errors without comparing to the baseline human process leads to over-engineering: spending additional months improving an AI that is already outperforming the alternative it replaced.",
            "Always benchmark AI output quality against the current process it replaces, not against a theoretical perfect process. The relevant standard is 'better than what we do today,' not 'perfect.'",
          ),
          s(" Establish the baseline performance of the current process before AI evaluation begins. You cannot evaluate improvement without a comparison point."),
        ],
      ],
      examples: [
        {
          title: "Sales — failure category diagnosis saves 6 weeks",
          body: "A commercial director reviewed AI deal close predictions with an engineering team. Initial feedback: 'the predictions are too pessimistic.' The director then ran through the failure category framework: was the data wrong? She checked 5 examples and found that 4 had missing 'competitor mentioned' data (data failure). She reported the specific category and provided the 4 examples. Engineering investigated and found that the competitor field was not being consistently populated in the CRM by one regional sales team. A 30-minute data quality session with the sales team fixed the input. Prediction accuracy improved by 12 percentage points. The original feedback would have led to model retraining — a 6-week process that would not have addressed the data quality root cause.",
        },
        {
          title: "Healthcare — failure log drives model improvement",
          body: "A clinical operations team built a failure log during 6 weeks of AI scheduling tool testing. The log recorded 47 failures with input context (patient type, appointment type, clinician availability) and expected versus actual output. Analysis of the log identified that 38 of 47 failures occurred for urgent appointments (a category that had 20% of the training data relative to routine appointments). The failure log provided engineering with a precise retraining target. After targeted data augmentation for urgent appointments, the failure rate for that category dropped from 32% to 8%.",
        },
        {
          title: "Finance — baseline comparison prevents over-engineering",
          body: "A finance team's AI invoice processing tool produced 14% error rate in testing. The engineering team was preparing a 4-month improvement project. The business leader asked for the baseline error rate of the manual process. Manual processing error rate: 23%. The AI was already 9 percentage points better than the manual process it replaced. The engineering team's improvement project was scoped down to 4 weeks targeting the highest-consequence error types only. The tool went live at 14% error rate and immediately demonstrated business value against the 23% baseline.",
        },
      ],
    }),
    buildSection({
      number: "4.5",
      title: "Setting realistic timelines for AI development",
      subtitle: "Why AI projects take longer than expected and how to plan for the reality",
      take: "AI project timelines are systematically underestimated because they have a different effort profile from standard software development: data preparation takes longer than expected, model accuracy requires iteration cycles that cannot be scheduled in advance, and integration complexity expands as it encounters real production systems. Business leaders who understand this effort profile can set accurate stakeholder expectations, make better build-or-buy decisions, and avoid the deployment delays that undermine AI programme credibility.",
      why: "The #1 cause of AI programme credibility damage in organisations is missed delivery timelines — and the #1 cause of missed timelines is business leaders who accepted optimistic engineering estimates without understanding what drives AI project duration. Accurate timeline planning is a business leadership skill, not just an engineering skill.",
      paragraphs: [
        [
          s("AI project timelines have three phases with different predictability profiles. "),
          x(
            "Phase 1 (data and discovery): lowest predictability — data quality and availability are unknown until investigated. Typical range: 4–16 weeks depending on data landscape complexity. Phase 2 (model development and iteration): medium predictability — requires iteration cycles whose duration depends on accuracy progress. Typical range: 4–12 weeks for standard use cases. Phase 3 (integration and deployment): high predictability — standard software engineering with known systems. Typical range: 4–8 weeks.",
            "Most timeline underestimates occur in Phase 1. Engineering teams estimate Phase 1 optimistically because data quality issues are not visible until the data is accessed. Requiring a data landscape audit before any timeline commitment converts Phase 1 from an estimate to a scoped activity.",
          ),
          s(" Require a data landscape audit before any timeline commitment is made. Phase 1 duration cannot be estimated without it."),
        ],
        [
          s("Iteration cycles in AI model development are necessary, not optional — and they cannot be planned precisely in advance. "),
          x(
            "When an AI model's first version does not meet the accuracy threshold, the engineering team iterates: adjusting training data, tuning model parameters, adding or removing features. The number of iterations required depends on factors that are not known before the first model is built. Planning for 2–3 iterations in the timeline, not 0, is the realistic assumption.",
            "Business leaders who accept a development timeline that assumes first-version success have accepted an optimistic timeline. A realistic timeline includes at least 2 iteration cycles with explicit go/no-go criteria at each cycle.",
          ),
          s(" Ask the engineering lead: how many iteration cycles does this timeline assume? If the answer is 'one', the timeline is optimistic."),
        ],
        [
          s("Buffer for enterprise integration complexity is non-negotiable for systems connecting to legacy infrastructure. "),
          x(
            "Enterprise integration with legacy ERP systems, ageing CRM platforms, and internally-built databases consistently takes longer than estimated because these systems have undocumented behaviours, unexpected data format requirements, and security configurations that block standard integration patterns. A 30–50% buffer on integration timeline estimates for legacy system environments is a reasonable standard assumption.",
            "New SaaS systems integrate faster than legacy systems — but most enterprise AI deployments involve at least one legacy system. Ask the engineering lead to identify every legacy system in the integration scope and apply the buffer to those elements.",
          ),
          s(" Apply a 30–50% timeline buffer to every integration with a legacy system. This is not pessimism — it is experience-based planning."),
        ],
      ],
      examples: [
        {
          title: "Manufacturer — data audit before timeline commitment",
          body: "A manufacturer's CTO implemented a policy requiring a 2-week data landscape audit before any AI project timeline was committed. The first project under the new policy: an AI predictive maintenance system. Data audit findings: sensor data available for 60% of target machines, missing maintenance history data for 30% of machines, and inconsistent labelling across 3 data sources. Estimated data preparation: 10 weeks. Timeline with data audit: 28 weeks total. Previous timeline without audit: 16 weeks estimated. The stakeholder expectation was set at 28 weeks and delivered at 27 weeks — the manufacturer's first on-time AI project delivery in 3 years.",
        },
        {
          title: "Financial services — iteration cycle planning",
          body: "A bank's AI credit risk model timeline included 3 iteration cycles: an initial build (6 weeks), a first iteration targeting the primary segment failure (4 weeks), and a second iteration targeting edge cases (3 weeks). The timeline was 13 weeks longer than a single-iteration timeline would have been. The first model version achieved 71% accuracy (below the 80% threshold). Iteration 1 reached 78%. Iteration 2 reached 83%. The model launched on the planned date because the iteration cycles were planned in, not discovered as delays. The previous credit risk AI project, planned without iteration cycles, delivered 6 months late.",
        },
        {
          title: "Retailer — legacy ERP buffer validation",
          body: "A retailer's engineering lead estimated 6 weeks for the integration of an AI inventory tool with the company's 15-year-old ERP system. The business leader applied the 30–50% legacy buffer: revised estimate 8–9 weeks. The engineering lead agreed the buffer was appropriate given the ERP's history. Actual integration time: 8.5 weeks. Without the buffer, the go-live date would have been communicated as 6 weeks from contract signature; the actual delivery would have been 2.5 weeks late. With the buffer, the delivery was on time.",
        },
      ],
    }),
    buildSection({
      number: "4.6",
      title: "Governing AI projects without micromanaging",
      subtitle: "The governance cadence that gives business leaders visibility without slowing engineering",
      take: "AI projects require more frequent business leader involvement than standard software projects because the outputs are probabilistic, the requirements evolve through testing, and the business context that determines success changes during development. The right governance model provides visibility at key decision points without requiring continuous business leader involvement in technical decisions. It is a milestone-based model, not a daily oversight model.",
      why: "Business leaders who are too absent from AI projects discover misalignment at deployment. Business leaders who are too present slow engineering teams with non-technical questions and decisions that belong in the technical domain. The governance model that produces the best outcomes is structured, milestone-based, and clear about which decisions belong to business leaders and which belong to engineering.",
      paragraphs: [
        [
          s("A milestone-based AI project governance model has four business leader involvement points. "),
          x(
            "Milestone 1 (brief sign-off): business leader approves the brief and confirms the data landscape is accurate. Milestone 2 (first model review): business leader evaluates the first model output against the brief criteria and makes a go/no-go decision on iteration. Milestone 3 (accuracy threshold decision): business leader confirms whether the current accuracy meets the minimum threshold for deployment or requires further iteration. Milestone 4 (deployment sign-off): business leader approves deployment, confirms the output review process is in place, and accepts accountability for the deployed system.",
            "Four decision points, each typically requiring 1–4 hours of business leader time, provide sufficient governance without daily engineering involvement.",
          ),
          s(" Agree the four governance milestones and their associated decision rights with the engineering lead at project kickoff."),
        ],
        [
          s("Business leaders should own three types of decisions; engineering teams should own the rest. "),
          x(
            "Business leader decisions: minimum accuracy threshold, output review process design, deployment timing and phasing. Engineering decisions: model architecture, data processing approach, infrastructure selection, testing methodology. Decisions that business leaders should not make include: which model to use, how to structure the data pipeline, what testing methodology to apply. When business leaders make engineering decisions, they add complexity without adding value.",
            "A clear decision rights document at project kickoff prevents the most common collaboration failure: a business leader who feels they should weigh in on engineering decisions because they are 'accountable for the outcome.'",
          ),
          s(" Produce a one-page decision rights document at project kickoff and refer to it when role boundary questions arise during the project."),
        ],
        [
          s("Status reporting between milestones should be exception-based, not comprehensive. "),
          x(
            "A weekly comprehensive status report from an AI engineering team takes 2–4 hours to produce and 30 minutes to read — for a business leader who is not making any decisions based on most of it. Exception-based reporting takes 15 minutes to produce: one paragraph on each active risk or decision required, nothing else. If there are no exceptions, a one-line 'no exceptions this week' report is appropriate.",
            "Comprehensive reporting creates a false impression of governance rigour. Exception-based reporting creates genuine governance: business leaders are only notified when their input is required.",
          ),
          s(" Replace weekly AI project status reports with exception-based reporting. Reserve comprehensive reviews for milestone meetings."),
        ],
      ],
      examples: [
        {
          title: "Insurance — milestone governance model",
          body: "An insurance company implemented a four-milestone governance model for its AI claims processing project. The business leader (Head of Claims) attended Milestone 1 (brief sign-off, 2 hours), Milestone 2 (first model review, 1.5 hours), Milestone 3 (accuracy threshold decision, 1 hour), and Milestone 4 (deployment sign-off, 2 hours). Total business leader time invested: 6.5 hours across a 22-week project. Previous AI project: business leader attended 22 weekly status meetings (110 hours) and was still surprised by the deployment outcome. The milestone model produced better governance with 94% less business leader time.",
        },
        {
          title: "Financial services — decision rights document prevents conflict",
          body: "A bank's AI model governance team produced a decision rights document for its model risk management AI project. The document specified 6 business decisions and 14 engineering decisions. When the business risk director attempted to specify the model architecture at week 6 (an engineering decision), the engineering lead referred to the decision rights document. The conversation was resolved in 10 minutes rather than escalating to a governance dispute. Both parties acknowledged that without the document, the conversation would have become a 3-week stakeholder management issue.",
        },
        {
          title: "Technology company — exception reporting",
          body: "A product team replaced its weekly 45-minute AI project status meeting with exception-based reporting. In 16 weeks of delivery: 3 exceptions were reported (data access delay — 2 weeks, accuracy plateau requiring additional training data — 1 week, third-party API downtime — 3 days). Each was resolved within the week it was reported. Business leader time investment: 3 exception discussions (total 90 minutes) plus 4 milestone meetings (total 7 hours). Previous project using comprehensive weekly meetings: 16 meetings × 45 minutes = 12 hours, with multiple unresolved issues that were discussed but not escalated due to lack of urgency framing.",
        },
      ],
    }),
    buildSection({
      number: "4.7",
      title: "Escalation: when to override engineering decisions",
      subtitle: "The three situations where a business leader must override engineering judgement and how to do it well",
      take: "There are three situations where a business leader should override an engineering decision: when the engineering team makes a technical choice that has an unacceptable business risk implication the engineers may not have recognised, when accuracy is being optimised beyond the business threshold at the expense of delivery timeline, and when an engineering decision creates a regulatory or compliance implication that the engineering team does not have full context on. All three overrides are business-driven, not technically-driven.",
      why: "Business leaders who never challenge engineering decisions are not providing governance — they are providing approval. The governance value of a business leader in an AI project is specifically their willingness to challenge engineering choices that optimise for technical elegance at the expense of business value or risk management.",
      paragraphs: [
        [
          s("Override situation 1: the engineering choice creates an unacceptable business risk the engineers have not recognised. "),
          x(
            "Example: an engineering team selects a model provider whose data processing terms include training on customer data — a business risk that the engineers evaluate as a standard vendor term but which creates customer trust and regulatory exposure that the business leader can see and the engineers may not. The business leader overrides the model selection, not because of technical reasons, but because of business risk reasons that are outside the engineering team's accountability.",
            "Engineers are responsible for technical performance within the risk parameters they are given. They are not responsible for business risk parameters they have not been briefed on. Providing those parameters is the business leader's job.",
          ),
          s(" Brief engineering teams on business risk parameters at project kickoff — regulatory requirements, data sensitivity classifications, vendor restrictions — so that technical choices are made within the right constraints."),
        ],
        [
          s("Override situation 2: engineering is optimising accuracy beyond the business threshold, delaying delivery. "),
          x(
            "When a model has met the minimum accuracy threshold and engineering is continuing to iterate for higher accuracy, a business leader who needs the system deployed for operational reasons has the authority to call the system 'good enough' and proceed to deployment. The business threshold is the business leader's decision; the engineering team should respect it even if they believe the system could be technically improved.",
            "Engineering teams that have invested months in a model develop emotional attachment to its improvement. The business leader who says 'this is good enough for our workflow — deploy it' is not undermining quality; they are exercising the authority they have over the business decision.",
          ),
          s(" Explicitly exercise the accuracy threshold decision at Milestone 3. 'This meets our minimum threshold — we are proceeding to deployment' is a legitimate business decision."),
        ],
        [
          s("Override situation 3: a compliance or regulatory implication has emerged that changes the deployment decision. "),
          x(
            "AI deployments sometimes generate regulatory questions that were not identified in the original brief — a data residency requirement that changes the infrastructure choice, a sector-specific AI regulation that requires an additional human-in-the-loop step, or a customer consent requirement that changes the data collection design. When these emerge, the business leader has the authority to pause deployment and resolve the compliance question, even if the engineering team believes the technical system is ready.",
            "Compliance overrides are the most frequently resisted by engineering teams because they feel arbitrary from a technical perspective. The business leader's role is to explain the regulatory context clearly enough that the engineering team understands why the pause is necessary.",
          ),
          s(" When issuing a compliance override, explain the regulatory rationale in plain language. Engineering teams who understand the reason accept constraints more readily than those who are simply told 'we can't do this.'"),
        ],
      ],
      examples: [
        {
          title: "Financial services — data risk override",
          body: "A bank's engineering team selected a cloud AI platform whose standard terms permitted model training on customer data. The Head of Risk overrode the selection — not on technical grounds but on data protection grounds that the engineering team had not identified as disqualifying. The engineering team disagreed, citing the platform's strong technical performance. The business leader convened a 30-minute data protection review with legal, which confirmed the terms were incompatible with FCA data handling requirements. The engineering team accepted the override when the regulatory rationale was clearly explained. The replacement platform added 3 weeks to the project — versus the regulatory penalty exposure of the original choice.",
        },
        {
          title: "Retailer — accuracy threshold deployment decision",
          body: "A retailer's AI demand forecasting model reached 82% accuracy (the minimum threshold was 80%) after 14 weeks. Engineering wanted to continue iterating to reach 88% accuracy. The commercial director reviewed the business case: at 82% accuracy, the model was projected to reduce overstock costs by £2.1M annually. The incremental value of reaching 88% accuracy was estimated at £340K annually — but required 8 more weeks of development. Given Q4 trading season timing, the director deployed at 82% and scheduled an improvement iteration for Q1. The deployment captured the full peak-season forecast improvement.",
        },
        {
          title: "Healthcare — compliance pause",
          body: "A hospital trust's AI patient communication tool was two weeks from deployment when the Caldicott Guardian identified that one data flow required an additional explicit patient consent mechanism not included in the original brief. The engineering team confirmed the system was technically ready and requested to proceed with a post-deployment consent mechanism update. The CINO overrode the request and paused deployment for 4 weeks to implement the consent mechanism before go-live. The engineering team initially resisted the pause. The CINO explained the patient data protection rationale in a 20-minute session. The engineering team accepted the pause and developed the consent mechanism with greater care than they would have applied to a post-deployment patch.",
        },
      ],
    }),
    buildSection({
      number: "4.8",
      title: "BL decision lens: working with AI engineering",
      subtitle: "Three working practices you can implement immediately to improve business-engineering collaboration",
      take: "Effective collaboration with AI engineers is not a relationship management skill — it is a structured practice that requires three specific commitments from the business leader: writing requirements in the five-element format, establishing a milestone-based governance model with clear decision rights, and building a failure log during AI testing that provides engineering teams with actionable feedback. These three practices can be implemented from the next project you are involved in.",
      why: "The business-engineering collaboration gap is not caused by different personalities or poor communication styles — it is caused by the absence of the structures that enable productive collaboration. Business leaders who install these structures independently of any cultural change programme see measurable improvement in AI project outcomes within one delivery cycle.",
      paragraphs: [
        [
          s("Commit to the five-element requirement format for every AI project brief you write or approve. "),
          x(
            "Input: what data does the AI use? Output: what does the AI produce? Accuracy: what quality standard must it meet? Error handling: what happens when the AI is uncertain? Constraints: what must the AI never do? This format takes 30–60 minutes more than writing an outcome statement. The time investment reduces engineering ambiguity by 60–80% and produces a measurable reduction in iteration cycles.",
            "If you receive a brief from an engineering team that does not contain these five elements, return it for completion before approving scope or timeline. Incomplete briefs are engineering debt that compounds.",
          ),
          s(" Make the five-element format a gate condition for any AI project scope approval in your function."),
        ],
        [
          s("Establish a four-milestone governance model with a decision rights document for every AI project in your function. "),
          x(
            "The governance model takes 60 minutes to establish at project kickoff. The decision rights document takes 30 minutes to produce. Together they eliminate the two most common collaboration failures: business leaders absent until deployment (when misalignment is expensive to correct) and business leaders present at every engineering discussion (when their involvement slows technical progress without improving outcomes).",
            "The decision rights document's value is most visible when a boundary dispute arises. Having an agreed document converts a potential conflict into a 10-minute reference conversation.",
          ),
          s(" Establish the four-milestone model and decision rights document as standard practice for all AI projects in your function, regardless of project size."),
        ],
        [
          s("Build a failure log as a standard deliverable in all AI testing phases. "),
          x(
            "The failure log — recording every incorrect output with its input context, actual output, and expected output — is the single most actionable feedback tool for engineering teams. It converts subjective quality assessment ('this is often wrong') into objective debugging material ('here are 23 cases where the model was wrong, with the specific inputs that produced each error'). Engineering teams with a well-maintained failure log consistently resolve accuracy issues in half the time of teams working from subjective feedback.",
            "Assign failure log maintenance responsibility to a named member of the business testing team, not to engineering. The business perspective on what constitutes a failure is the input engineering needs.",
          ),
          s(" Add failure log maintenance as a named responsibility in every AI testing team's workplan."),
        ],
      ],
      examples: [
        {
          title: "Three practices on one project",
          body: "A commercial operations director implemented all three practices on a single AI pricing optimisation project. The five-element brief: reduced the requirements gathering phase from 4 weeks to 5 days. The four-milestone governance model: involved the director for 8.5 hours across 20 weeks versus 40 hours on the previous comparable project. The failure log: provided engineering with 31 categorised failures from testing that enabled targeted model improvement in 12 days versus the 6-week improvement cycle on the previous project. Total project delivery: 22 weeks versus the previous comparable project's 34 weeks.",
        },
        {
          title: "Decision rights document prevents £80K dispute",
          body: "A financial services AI project's engineering lead and the risk department head disagreed on whether the model's explainability feature (the ability to produce a reason for each prediction) was in scope. Without a decision rights document, the dispute escalated to executive level over 3 weeks. A subsequent AI project used a decision rights document that specified explainability requirements as a business decision — agreed by the business leader at brief sign-off. When the same question arose, the answer was in the document. The dispute lasted 15 minutes.",
        },
        {
          title: "Failure log halves iteration cycle",
          body: "An HR team's AI candidate screening testing phase produced a failure log of 44 entries across 3 weeks. Analysis identified that 31 failures occurred for candidates with non-linear career histories (career breaks, portfolio careers, international experience). Engineering used the 31 examples to identify a feature weighting problem in the experience calculation. The targeted fix took 9 days. The previous comparable AI project without a failure log required 5 iteration cycles over 11 weeks to achieve similar accuracy — because engineering was working from feedback like 'it seems to undervalue experienced candidates.'",
        },
      ],
    }),
  ],
  quiz: [
    {
      q: "An AI project is 8 weeks in with no visible output. The engineering team says the data is not ready. What is most likely happening?",
      options: [
        "The engineering team is underperforming and needs closer supervision",
        "Data engineering — which typically represents 60–70% of AI project effort — is taking its expected time",
        "The project scope was too large and should be reduced",
        "The AI technology selected is not suitable for the use case",
      ],
      correct: 1,
      correctFeedback:
        "Correct. Data preparation and engineering typically consumes 60–70% of total AI project effort and is largely invisible to business leaders. Eight weeks of data work on a complex enterprise AI project is normal, not a failure. Requiring a data landscape audit before timeline commitment prevents this expectation gap.",
      wrongFeedback:
        "Data engineering is the most time-consuming and least visible phase of AI development. An enterprise AI project with data spread across multiple systems in different formats can require 8–16 weeks of data preparation before a model can be developed. This is expected, not exceptional.",
    },
    {
      q: "Which element of an AI requirement is most important for preventing engineering teams from over-investing in model accuracy improvements?",
      options: [
        "The data landscape documentation",
        "The minimum accuracy threshold",
        "The integration requirements",
        "The non-requirements section",
      ],
      correct: 1,
      correctFeedback:
        "Correct. A minimum accuracy threshold gives engineering a specific target to hit and a clear stop condition. Without it, engineering teams optimise toward the highest technically achievable accuracy — which takes longer and may not be required for the business use case. The threshold is always a business decision.",
      wrongFeedback:
        "The minimum accuracy threshold is the requirement that tells engineering when 'good enough' is. Without it, engineering teams continue iterating past the point of business value — because they have no specification of what accuracy the business actually needs. Only the business can define this threshold.",
    },
    {
      kind: "categorize",
      q: "Categorise these project decisions as either 'Business Leader Decisions' or 'Engineering Team Decisions':",
      categories: ["Business Leader Decisions", "Engineering Team Decisions"],
      items: [
        { text: "Minimum accuracy threshold for deployment", category: 0 },
        { text: "Output review process design", category: 0 },
        { text: "Deployment timing and phasing", category: 0 },
        { text: "Model architecture selection", category: 1 },
        { text: "Data processing pipeline design", category: 1 },
        { text: "Testing methodology and tooling", category: 1 },
      ],
      correctFeedback:
        "Correct. Business leaders own decisions about what the AI system must achieve and when it should be used. Engineering teams own decisions about how to build and test the system. Mixing these decision rights produces either governance gaps or micromanagement.",
      wrongFeedback:
        "Business leaders are accountable for the business outcomes: what accuracy is good enough, how outputs will be reviewed, when deployment happens. Engineering teams are accountable for technical execution: how to build, process, and test the system. Both sets of decisions require the expertise of their respective owners.",
    },
    {
      q: "An AI output is correct but is never used by the operations team. Which failure category does this represent?",
      options: [
        "Data failure — the AI used the wrong input data",
        "Model failure — the AI's processing was incorrect",
        "Specification failure — the requirement was wrong",
        "Integration failure — the output is delivered to the wrong point in the workflow",
      ],
      correct: 3,
      correctFeedback:
        "Correct. An AI output that is technically correct but unused indicates an integration failure — the output is not arriving at the right point in the workflow where the operational team would see and act on it. Workflow design is the fix, not model improvement.",
      wrongFeedback:
        "The symptom 'correct but unused' points to integration failure: the AI is producing the right output, but it is not being delivered at the right point in the operational workflow where it would be seen and acted on. Data, model, and specification failures produce incorrect outputs. Integration failure produces correct outputs that are never encountered.",
    },
    {
      q: "A business leader's AI project timeline estimates are consistently 40% longer than the engineering team's estimates. What is the most likely explanation?",
      options: [
        "The business leader is being overly cautious and should trust engineering estimates more",
        "The business leader is correctly applying buffers for data engineering, model iteration cycles, and legacy system integration",
        "The engineering team is underperforming relative to industry standards",
        "The projects are too complex and should be simplified",
      ],
      correct: 1,
      correctFeedback:
        "Correct. AI project timelines are systematically underestimated because they exclude buffers for data preparation complexity, model iteration cycles, and legacy system integration. A 30–50% buffer on standard engineering estimates is experience-based planning, not pessimism.",
      wrongFeedback:
        "AI engineering estimates typically exclude time for data quality issues, model iteration cycles, and legacy integration complexity — all of which are predictable sources of delay. A business leader who adds buffers for these known risks is producing realistic estimates, not pessimistic ones.",
    },
    {
      kind: "order",
      q: "Order the four governance milestones for a business leader in an AI project:",
      items: [
        "Brief sign-off: approve requirements and data landscape",
        "First model review: evaluate initial output against brief criteria",
        "Accuracy threshold decision: confirm deployment readiness",
        "Deployment sign-off: approve go-live and confirm output review is in place",
      ],
      prompt: "Drag to arrange in the correct sequence",
      correctFeedback:
        "Correct. The four milestones follow the AI development lifecycle: requirements to first output to accuracy approval to deployment. Each milestone requires a specific business decision; between milestones, exception-based reporting keeps the business leader informed without requiring continuous involvement.",
      wrongFeedback:
        "The governance milestones follow the project lifecycle: brief at start, first model review after initial development, accuracy threshold when the model is being evaluated against business criteria, deployment sign-off at launch. Each milestone is a decision point; the sequence cannot be reordered.",
    },
  ],
});
