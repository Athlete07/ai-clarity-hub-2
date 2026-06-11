import { BL_CALLOUT, buildChapter, buildSection, s, x } from "../concepts-bl-helpers";

export const chapter03BlAiRolesFunctionLeaders = buildChapter({
  slug: "bl-ai-roles-function-leaders",
  number: 3,
  shortTitle: "AI Roles for Function Leaders",
  title: "AI Roles Every Function Leader Needs to Understand",
  readingMinutes: 25,
  summary:
    "AI is creating new roles inside every business function — not just in technology teams. Function leaders who understand the emerging AI role landscape can design their teams for AI effectiveness rather than discovering the gaps when deployment fails. The new roles are not all technical: AI product owners, output reviewers, workflow designers, and human-AI translators are as important to function performance as data scientists and engineers.",
  keyTakeaway:
    "Every function needs at minimum three AI role types: an AI workflow owner (manages how AI tools are embedded in function processes), AI output reviewers (check AI outputs before they affect decisions), and an AI champion (drives adoption and surfaces improvement opportunities). These roles can be held by existing employees with targeted development — they do not require new headcount in most functions.",
  pmCallout: BL_CALLOUT,
  sections: [
    buildSection({
      number: "3.1",
      title: "The new AI roles every function leader needs to know",
      subtitle: "From prompt engineers to AI product owners — the roles reshaping how functions operate",
      take: "AI is not just changing what functions do — it is changing what roles functions need. Understanding the new role landscape is a function leader's prerequisite for team design, gap assessment, and AI adoption planning. The new roles span a spectrum from highly technical (ML engineer) to deeply operational (AI workflow designer) to entirely non-technical (AI output reviewer).",
      why: "Function leaders who only think about AI in terms of technology tools miss the human capability layer that determines whether tools deliver value. Every AI tool requires at least one human role to configure it, one to use it, and one to verify its outputs. Leaders who do not design these roles explicitly find them filled accidentally — or not at all.",
      paragraphs: [
        [
          s("The AI role landscape in a business function has five tiers. "),
          x(
            "Tier 1 (central): AI architects and ML engineers who build and maintain the technical infrastructure. Tier 2 (cross-functional): AI product owners who manage the deployment and roadmap of AI tools. Tier 3 (functional): AI workflow designers who embed AI tools into function-specific processes. Tier 4 (operational): AI practitioners who use AI tools daily and can configure and evaluate outputs. Tier 5 (all staff): AI-aware generalists who use AI tools in defined workflows without deep configuration knowledge.",
            "Most function leaders need to design Tiers 3–5 within their function. Tiers 1–2 are typically provided by the technology organisation or Centre of Excellence.",
          ),
          s(" Design your function's AI role architecture against all five tiers, even if Tiers 1–2 sit outside your direct accountability."),
        ],
        [
          s("AI roles are emerging faster than job markets can create job descriptions for them. "),
          x(
            "Many AI roles are being performed by existing employees who have not been formally recognised or compensated for the additional capability and accountability they are carrying. A marketing manager who has become the informal AI champion for their team, evaluating AI content quality and training colleagues, is performing a role that is not in their job description. Formalising informal AI role holders is a low-cost way to increase capability and improve retention.",
            "Informal AI role holders who are not recognised formally typically either stop performing the informal function (causing adoption to regress) or leave for organisations where their AI capability is formally valued.",
          ),
          s(" Identify every informal AI role holder in your function and formalise their accountabilities before they disengage or depart."),
        ],
        [
          s("The non-technical AI roles are as strategically important as the technical roles — and more frequently absent. "),
          x(
            "Most organisations have too few AI output reviewers: people who can evaluate whether an AI-generated output meets the required quality, accuracy, and business relevance standards before it is acted on. In high-stakes functions (legal, finance, clinical), the absence of trained output reviewers exposes the organisation to exactly the AI risk that leadership is worried about.",
            "Technical AI capability without output review capability is a risk amplifier. It enables faster production of outputs whose quality cannot be reliably assessed.",
          ),
          s(" Treat AI output reviewer as a critical non-technical role in every function that uses AI for consequential decisions."),
        ],
      ],
      examples: [
        {
          title: "Financial services — five-tier role design",
          body: "A bank mapped its AI role architecture across five tiers for its commercial banking function. Tier 1–2 (8 roles): provided by central AI and data team. Tier 3 (2 roles): AI workflow designers hired internally from operations analytics. Tier 4 (15 roles): AI practitioners developed through an 8-week programme from existing relationship managers. Tier 5 (120 roles): AI-aware generalists developed through a 2-day workshop. The five-tier mapping made visible that the function had 8 people in Tiers 1–2 and 120 in Tier 5, but only 2 people in Tier 3 — the workflow design tier that connected the two. Hiring 1 additional Tier 3 designer reduced AI tool deployment cycle time by 40%.",
        },
        {
          title: "Legal department — informal champion formalised",
          body: "A law firm's legal operations team had an informal AI champion — a legal operations manager who had learned to use AI contract review tools independently and had been helping colleagues for 8 months. When the AI programme team conducted a role audit, they found this manager was performing 12 hours per week of AI support work on top of their official role. The firm formalised the role, gave 30% time allocation, a 15% salary increase, and a 'Legal AI Lead' title. The manager remained with the firm and halved the function's AI tool adoption timeline.",
        },
        {
          title: "Healthcare — output reviewer gap exposed",
          body: "A hospital trust deployed an AI diagnostic support tool without designing an output reviewer role. Clinical staff used AI diagnostic suggestions without a structured evaluation protocol. An audit three months post-deployment found that AI recommendations were being actioned without clinician review in 34% of cases — because there was no role or protocol for review. The trust created a Senior Clinician AI Reviewer role (20% time allocation for 8 senior clinicians) and an output review protocol. The 34% fell to 4% within six weeks.",
        },
      ],
    }),
    buildSection({
      number: "3.2",
      title: "Prompt engineers and AI workflow designers",
      subtitle: "The two operational AI roles that most directly determine function-level AI value",
      take: "Prompt engineers and AI workflow designers are the roles most directly responsible for the quality of AI output in a business function. Prompt engineers design and optimise the instructions that AI tools receive; workflow designers embed AI tools into function processes so that outputs are used, not just generated. Both roles require deep function knowledge combined with AI tool proficiency — a combination more reliably found in upskilled function specialists than in externally hired AI generalists.",
      why: "The gap between what an AI tool can produce and what it actually produces in an organisation is almost entirely attributable to the quality of prompting and workflow integration. Function leaders who invest in prompt engineering and workflow design capability see 3–5× the adoption and output quality of those who deploy tools without these roles.",
      paragraphs: [
        [
          s("A prompt engineer in a business function is not a technical role — it is a communication design role. "),
          x(
            "Effective prompt engineering requires understanding what the AI tool can and cannot do (AI literacy), what the function needs the output to achieve (business context), and how to instruct the AI to produce outputs that meet both requirements simultaneously. The most effective function-level prompt engineers are domain experts with AI training, not AI specialists with domain training.",
            "A legal prompt engineer who understands contract law can produce contract review instructions that a generic AI prompt engineer cannot. The function expertise is the differentiator, not the prompt technique.",
          ),
          s(" Develop prompt engineering capability in your top domain experts, not in your most technically-minded staff."),
        ],
        [
          s("AI workflow design is the process of embedding AI tool outputs into function workflows so that they are used, not just available. "),
          x(
            "An AI workflow designer asks: at what point in the current process does the AI output arrive? Who receives it? What format is required? What verification step precedes action? What feedback loop exists to improve the AI output over time? These questions are process design questions, not technology questions — they require function process expertise, not engineering expertise.",
            "The most common AI deployment failure mode is a well-configured AI tool whose outputs are generated in a system that the operational team does not regularly access. Workflow design ensures the right output reaches the right person at the right moment in the process.",
          ),
          s(" A workflow designer's first deliverable is a current-state process map overlaid with AI output insertion points — not a technology architecture."),
        ],
        [
          s("Prompt engineering and workflow design are natural companions and should be held by the same individual or closely paired roles. "),
          x(
            "Designing a prompt that produces excellent output but depositing it in the wrong place in the workflow produces unused excellence. Designing a workflow with the right insertion point but using a poorly designed prompt produces conveniently available mediocrity. The two roles produce their highest combined value when the same person — or a closely collaborating pair — owns both.",
            "In teams of under 50 people, a single AI workflow owner can hold both responsibilities. In larger functions, two distinct roles with formal collaboration cadence produce better outcomes than two independent roles.",
          ),
          s(" In teams under 50, create a single 'AI Workflow Owner' role covering both prompt engineering and workflow design responsibilities."),
        ],
      ],
      examples: [
        {
          title: "Marketing — domain expert prompt engineer",
          body: "A consumer goods company trained its 3 most experienced brand managers — not its digital team — as prompt engineers for its AI content generation tool. The brand managers developed prompt libraries that reflected brand voice guidelines, audience segment nuances, and campaign brief structures that the digital team did not know. Content quality scores from creative reviewers were 28% higher for content generated with brand manager prompts than for content generated with generic prompts. The prompt libraries also onboarded junior team members to brand standards faster than the previous briefing process.",
        },
        {
          title: "Finance — workflow design prevents unused tool",
          body: "A finance department deployed an AI accounts payable anomaly detection tool that generated daily exception reports. Six months post-deployment, tool-generated exceptions were being addressed at a rate of 23%. Investigation revealed that the exception report was delivered to a shared inbox that was reviewed weekly, not daily. The workflow designer (a senior accounts payable manager with 30% time for AI workflow design) moved the exception report to a daily task notification in the existing AP workflow system. Exception address rate increased to 89% with no other changes.",
        },
        {
          title: "HR — paired workflow owner model",
          body: "An HR function with 80 people created a paired AI workflow owner model: a senior HR business partner (domain expertise) and a digital HR analyst (technical affinity) worked as a formal pair with 30% combined time for AI workflow ownership. The pair designed the prompt library for AI job description generation and built the workflow integration that made the tool accessible from within the ATS. A standalone AI specialist hired before the pair was established had produced a technically functional tool used by 3 of 80 HR staff. The pair's integrated approach achieved 64% adoption in 12 weeks.",
        },
      ],
    }),
    buildSection({
      number: "3.3",
      title: "Data stewards and AI output reviewers",
      subtitle: "The quality assurance roles that prevent AI from amplifying errors at scale",
      take: "Every AI tool that produces outputs acted on by a business function requires two governance roles: a data steward who manages the quality of the data the AI tool uses, and an AI output reviewer who evaluates the quality of the outputs before they drive decisions. Without these roles, AI tools either fail silently (acting on poor data) or fail catastrophically (producing and acting on confident but wrong outputs).",
      why: "AI amplifies what it is given. A tool operating on clean, well-governed data produces reliable outputs at scale. A tool operating on unvalidated data produces unreliable outputs at scale — faster and more confidently than any human could. Data stewardship and output review are not bureaucratic overhead; they are the risk management layer that makes AI deployment safe at scale.",
      paragraphs: [
        [
          s("A data steward for AI is not the same as a traditional data governance role. "),
          x(
            "Traditional data governance focuses on storage, access, and compliance. An AI data steward additionally focuses on training data quality (is the data the AI was trained on representative of current reality?), input data freshness (is the data the AI is using current?), and bias monitoring (does the data systematically under-represent any segment in ways that will produce biased outputs?). These three additional concerns require active, ongoing attention — not a one-time governance review.",
            "An AI system trained on two-year-old customer data and used for current customer recommendations is producing confidently wrong suggestions. The data steward's job is to catch this drift before it drives decisions.",
          ),
          s(" Create an AI data steward role before deployment, not after the first data quality failure."),
        ],
        [
          s("AI output review is a skill that must be developed, not a common-sense task that anyone can perform. "),
          x(
            "Effective AI output review requires: knowing the categories of errors the specific AI tool is prone to, knowing what 'good' looks like in the function's specific context, having a structured review protocol that covers accuracy, completeness, bias, and relevance, and knowing when to escalate an output for human expert review rather than accepting or rejecting it.",
            "A review performed by someone who does not know the AI tool's specific failure modes is not review — it is a false assurance of quality. It is worse than having no review because it provides the organisation with confidence it has not earned.",
          ),
          s(" Train AI output reviewers specifically for the tools they will review — not as a general AI literacy exercise."),
        ],
        [
          s("Output review protocols must be proportionate to the consequence of error. "),
          x(
            "A low-stakes AI output (suggested social media hashtags) requires a brief spot-check. A high-stakes AI output (AI-generated financial advice, AI-assisted clinical recommendation, AI-generated legal position) requires a structured multi-point review against specific accuracy and completeness criteria. Applying the same review protocol to all AI outputs regardless of consequence either under-protects high-stakes decisions or over-burdens low-stakes processes.",
            "A consequence-proportionate review protocol has three tiers: auto-accept (low stakes, high accuracy history), spot-check (medium stakes), and full review (high stakes). The tier assignment should be reviewed quarterly as the AI tool's accuracy history develops.",
          ),
          s(" Classify every AI output type in your function by consequence tier and design a review protocol for each tier before deployment."),
        ],
      ],
      examples: [
        {
          title: "Insurance — data steward prevents AI drift",
          body: "An insurer deployed an AI underwriting tool without an AI data steward. At month eight, a routine audit revealed the tool was using pre-COVID claims frequency data to price pandemic-sensitive risks. The tool had been producing systematically underpriced quotes for 6 months. An AI data steward, now formalised, implemented a quarterly data freshness review and a drift monitoring protocol. The insurer estimated the undetected data drift had cost £1.4M in underpriced premiums over 6 months.",
        },
        {
          title: "Legal — output reviewer training for specific failure modes",
          body: "A law firm trained 12 associates as AI contract review output reviewers. Training was specific to the contract review tool deployed: the tool's three most common error categories (missed jurisdiction-specific clauses, incorrect party identification in complex structures, and over-confident summaries of ambiguous terms), the firm's review protocol, and the escalation criteria. Reviewers who completed the training rejected AI outputs at the correct rate of 18% versus reviewers without specific training who rejected at 4% — suggesting the untrained reviewers were not identifying errors rather than finding none.",
        },
        {
          title: "Finance — consequence-tiered review",
          body: "A CFO implemented a consequence-tiered AI output review across the finance function: auto-accept for AI-generated expense categorisation (low stakes, 98% historical accuracy), spot-check for AI-generated budget variance commentary (medium stakes), and full structured review for AI-generated financial projections used in board reporting (high stakes). The tiered protocol reduced review burden by 65% versus a uniform full-review protocol, while maintaining review coverage where it mattered most. The CFO used the protocol to satisfy the audit committee that AI was being used with appropriate governance.",
        },
      ],
    }),
    buildSection({
      number: "3.4",
      title: "AI product owners in non-technical teams",
      subtitle: "What AI product ownership looks like in finance, HR, operations, and commercial functions",
      take: "An AI product owner in a business function is responsible for the AI tools deployed in that function: defining what they should do, evaluating whether they are doing it, managing the vendor relationship, and prioritising improvements. This is a product management role applied to internal AI tools — and it is the role most often absent in non-technical functions, leading to AI tools that drift from their original purpose with no accountability for course correction.",
      why: "AI tools are not set-and-forget systems. They drift: their data inputs change, their outputs become less accurate, and the business context they were configured for evolves. An AI product owner is the role that prevents this drift from becoming a deployment failure — and it belongs in the function, not in the technology team.",
      paragraphs: [
        [
          s("An AI product owner in a business function has four primary accountabilities. "),
          x(
            "First: tool performance monitoring — is the AI tool producing outputs at the accuracy and volume required? Second: business requirement evolution — as the function's needs change, do the tool's configuration and scope change with them? Third: vendor relationship management — is the vendor delivering the roadmap features promised, and are support issues being resolved? Fourth: adoption management — are the intended users actually using the tool and deriving the expected value?",
            "In technology functions, all four accountabilities are held by a product manager. In business functions, they are typically held by no one — which is why AI tools in business functions underperform their equivalent in technology functions by a significant margin.",
          ),
          s(" Assign AI product ownership for every deployed AI tool in your function. This can be 20–30% of an existing senior employee's role."),
        ],
        [
          s("AI product ownership is distinct from AI tool administration. "),
          x(
            "Administration is operational: managing user accounts, resetting permissions, troubleshooting login issues. Product ownership is strategic: deciding what the tool should prioritise, evaluating its outputs against business value, and determining whether the tool continues to justify its cost. Many functions have AI administrators and no AI product owners — producing well-maintained tools that are drifting from their strategic purpose.",
            "An AI product owner asks 'should we still be using this tool for this purpose?' every quarter. An AI administrator never asks this question.",
          ),
          s(" If you have AI administrators but no AI product owners, you have operational coverage and no strategic accountability. Add product ownership before the next contract renewal."),
        ],
        [
          s("The AI product owner role is ideally held by a business leader who understands both the function's needs and the AI tool's capabilities. "),
          x(
            "The best AI product owners in business functions are not the most technically sophisticated people in the team — they are the people with the deepest understanding of the function's processes, metrics, and decision requirements. Technical questions go to the technology team; business value questions belong to the function.",
            "An AI product owner who cannot challenge a vendor on whether the tool is delivering business value — because they defer all product questions to the technology team — is a contract manager, not a product owner.",
          ),
          s(" Select AI product owners for business insight and stakeholder credibility, not for technical depth. Technical support is available through the technology team."),
        ],
      ],
      examples: [
        {
          title: "HR — product ownership prevents tool abandonment",
          body: "A recruitment team deployed an AI candidate screening tool with no formal product owner. At month 12, the tool's screening criteria had not been updated since deployment and were producing results misaligned with the company's evolved hiring priorities (a new focus on technical skills not captured in the original configuration). Adoption had fallen from 78% to 31%. A senior recruiter was assigned product ownership. In 6 weeks, the owner reconfigured the screening criteria, updated the rejection reason taxonomy, and ran a re-adoption campaign. Adoption recovered to 71% within 3 months.",
        },
        {
          title: "Finance — product owner drives vendor accountability",
          body: "A finance director designated a senior FP&A manager as AI product owner for the function's AI forecasting tool. The product owner's quarterly review found that three features promised in the vendor roadmap for Q2 had not been delivered, that a data integration issue was reducing forecast accuracy by an estimated 8%, and that the vendor's support response times had increased from 4 hours to 48 hours. The product owner compiled this evidence and initiated a formal vendor review meeting. Two features were delivered in the following quarter; the data integration was fixed within 30 days.",
        },
        {
          title: "Operations — strategic vs administrative role clarity",
          body: "A logistics company had a well-staffed AI tool administration team but no AI product owners in its operations function. An audit revealed that 3 of the 5 AI tools deployed in operations had not had their business rules updated in over 12 months, despite significant changes to operations processes. The audit recommended converting the administration team from pure administration to a hybrid administration and product ownership model, with each administrator assigned product ownership for 1–2 tools. Six months later, all 5 tools had current business rules and the operations leadership team had quarterly visibility into tool performance for the first time.",
        },
      ],
    }),
    buildSection({
      number: "3.5",
      title: "Translators: bridging business and AI engineering",
      subtitle: "The most scarce and valuable role in enterprise AI — and how to develop it",
      take: "The AI translator is the role that converts business requirements into engineering specifications and engineering capabilities into business opportunities. It is the rarest role in enterprise AI and the one whose absence most consistently causes AI projects to fail. Translators do not need to be able to build AI systems — they need to be able to describe business problems with enough precision that engineers can build the right solution, and to describe AI capabilities with enough clarity that business leaders can make sound investment decisions.",
      why: "The most common cause of AI project failure is not technical — it is translation failure. Engineers build what they are asked to build. Business leaders ask for what they can describe. When the description is imprecise, the engineers build the wrong thing. When the AI capability is described in technical language, business leaders cannot evaluate it. The translator role solves both problems.",
      paragraphs: [
        [
          s("A translator's core skill is structured ambiguity resolution. "),
          x(
            "Business requirements are almost always ambiguous when first stated. 'We want AI to help our sales team' can mean call analysis, pipeline forecasting, proposal generation, or 20 other things. A translator asks the structured questions that convert this ambiguity into a precise specification: what decision are you trying to improve? What data exists today? What does good look like? What does bad look like? What happens today when a human makes this decision?",
            "A business leader who answers these five questions has provided 80% of the information an engineering team needs to design the right AI system. A business leader who provides only the original ambiguous statement has provided almost nothing.",
          ),
          s(" Train translators in structured requirements elicitation before any other AI project management skill."),
        ],
        [
          s("The translator role can be developed in high-aptitude employees from either business or technical backgrounds. "),
          x(
            "The most effective translators are typically former business analysts or operational managers who have developed technical curiosity, rather than former engineers who have developed business interest. Business-first translators already understand the 'what' and 'why' of business requirements; they need to develop enough technical literacy to communicate the specification to engineers. Technical-first translators must develop business empathy before they can ask the right elicitation questions.",
            "Both paths work, but business-first translators typically develop faster because business empathy takes longer to build than technical literacy for the translation role specifically.",
          ),
          s(" Identify 1–2 senior business analysts or operational managers in your function and invest in their AI technical literacy. They are your fastest path to a translator capability."),
        ],
        [
          s("The translator role has the highest retention risk of any non-specialist AI role because it is the most portable. "),
          x(
            "An AI translator who can convert business requirements into AI specifications and AI capabilities into business value propositions can work in any industry, any function, and any organisation. They are universally in demand and always underpaid relative to their market value within the organisations that develop them.",
            "Translator retention requires the same approach as AI practitioner retention: market-rate compensation, visible career path, and high-complexity problem access. A translator assigned to repetitive requirements documentation rather than strategic AI planning has no reason to stay.",
          ),
          s(" Assign translators to your highest-complexity AI projects — they perform best where the translation challenge is hardest."),
        ],
      ],
      examples: [
        {
          title: "Financial services — translator rescues failing project",
          body: "A bank's AI fraud detection project was 8 months in and significantly over scope. The engineering team had built a technically sophisticated model; the fraud operations team reported it was 'not what they needed.' An AI translator (a former fraud operations manager who had completed a 6-month AI technical literacy programme) was brought in. In 4 weeks, the translator identified that the engineering team had optimised for detection rate while the operations team needed optimisation for investigation efficiency — two different objectives that were never distinguished in the original specification. A 3-week rework corrected the objective; the tool was accepted within 6 weeks.",
        },
        {
          title: "Healthcare — business-first translator development",
          body: "A hospital trust selected 2 senior clinical pathway coordinators as AI translator candidates. Both had deep process knowledge but no technical background. Over 6 months, they completed a structured technical literacy programme covering data types, model capabilities, API concepts, and AI system architecture. Their first project as translators: specifying an AI patient flow management tool. Engineering lead feedback: 'The specification was the most precise business requirement document we have received in 3 years of healthcare AI projects.' The tool went live on time and on budget.",
        },
        {
          title: "Retail — translator retention planning",
          body: "A national retailer developed 3 AI translators from its operations planning team. All 3 were approached by executive search firms within 18 months. The retailer's retention response: moved all 3 into newly created 'AI Strategy Manager' roles with direct access to the CEO's AI steering committee, 30% salary increases, and accountability for the company's 3 most complex AI deployments. All 3 remain with the company 3 years later. The translator retention investment — approximately £180,000 per year in additional compensation — was the single highest-ROI talent decision the AI programme made.",
        },
      ],
    }),
    buildSection({
      number: "3.6",
      title: "Job design: adding AI responsibilities to existing roles",
      subtitle: "How to expand role accountabilities without creating role overload or resentment",
      take: "Adding AI responsibilities to existing roles is the most cost-effective way to build function-level AI capability — but it must be done with formal accountability, proportionate time allocation, and fair compensation. Informal AI responsibilities that grow organically without recognition create two outcomes: the informal AI role holder burns out or leaves, or they perform the AI work at the expense of their formal responsibilities. Neither is acceptable.",
      why: "Most function leaders underestimate how much AI work they are already relying on informally. Before designing new AI roles, a leader should inventory how AI-related accountabilities are currently being absorbed, by whom, and at what cost to those individuals. This inventory almost always reveals a compensation and recognition gap that must be addressed before any new AI responsibilities are added.",
      paragraphs: [
        [
          s("A formal AI responsibility expansion has three non-negotiable elements: defined scope, time allocation, and compensation adjustment. "),
          x(
            "Defined scope: what AI accountabilities is the employee taking on? Time allocation: what percentage of their time is explicitly reserved for AI work (typically 20–30% for an AI workflow owner role)? Compensation adjustment: what salary or role grade change reflects the increased accountability and market value of the expanded role?",
            "Any one of the three elements missing produces a different failure mode. Without defined scope: the employee does not know what is expected. Without time allocation: AI work is always deprioritised for 'real' work. Without compensation: the employee is doing more work for the same pay — which produces resentment and attrition.",
          ),
          s(" Apply all three elements to every formal AI responsibility expansion — none of the three is optional."),
        ],
        [
          s("AI responsibilities should be concentrated in roles where the intersection of domain expertise and AI capability creates disproportionate value. "),
          x(
            "Adding AI responsibilities to the 10% of employees with the highest domain expertise and AI aptitude creates AI capability that is contextually embedded and credible with peers. Adding AI responsibilities to 100% of employees creates superficial adoption that does not change behaviour. The goal is not everyone doing a little bit of AI work — it is a smaller number of people doing AI work well.",
            "The 80/20 principle applies to AI role design: 20% of employees in targeted AI roles will drive 80% of the AI value in a function.",
          ),
          s(" Identify the 10–20% of your function with the highest AI role potential and invest in their formal AI responsibilities before expanding to the broader population."),
        ],
        [
          s("Role transition support reduces the performance dip that accompanies AI responsibility expansion. "),
          x(
            "When existing responsibilities are not explicitly reduced to make room for AI responsibilities, the employee attempts to do their full original role plus the AI role — typically producing lower performance in both. A role transition plan identifies which existing responsibilities can be delegated, automated, or dropped to create the time allocation for AI work.",
            "The most common failure mode in AI responsibility expansion is a well-designed AI role attached to an already-full job. The employee manages the overload for 3–6 months before performance deteriorates or they resign.",
          ),
          s(" For every AI responsibility added to an existing role, identify what existing responsibility is reduced or removed."),
        ],
      ],
      examples: [
        {
          title: "Operations — informal AI load inventory",
          body: "An operations director conducted an informal AI load inventory with their 12-person management team before designing any new AI roles. The inventory revealed that 3 managers were already spending 8–15 hours per week on AI-related work (tool configuration, output review, colleague coaching) that was not in their role descriptions. All 3 had declined to raise this because they were concerned it would reflect poorly on their time management. The director formalised the 3 roles, gave each a 25% time allocation and a grade increase, and redistributed their original tasks. The AI workload became sustainable and all 3 managers remain in the organisation.",
        },
        {
          title: "Marketing — targeted 15% vs broad 100%",
          body: "A marketing function considered two job design approaches: adding 'AI content review' to all 80 team members' roles (broad approach) versus formally expanding the role of 12 senior content managers to include AI workflow ownership (targeted approach). The targeted approach produced 80% AI output quality score compliance within 3 months. The broad approach, piloted in a parallel team, produced 22% compliance — because all 80 team members had other priorities and no team member felt sufficient ownership to drive quality standards.",
        },
        {
          title: "Finance — role transition planning",
          body: "A finance controller was asked to add AI product ownership for the AI forecasting tool to her existing role (40 hours per week). The CFO and HR business partner ran a role transition analysis: 8 hours per week of the controller's existing manual reconciliation work could be handled by the AI tool itself; 5 hours per week of reporting could be delegated to a junior analyst now freed up by AI automation. The transition created 13 hours per week of capacity. The AI product owner role was assigned at 10 hours per week — leaving 3 hours as buffer and a clearly sustainable workload.",
        },
      ],
    }),
    buildSection({
      number: "3.7",
      title: "Building an AI-capable org chart for your function",
      subtitle: "From role design to an organisational structure that sustains AI capability over time",
      take: "An AI-capable org chart for a business function is not a new organisational structure — it is the existing structure with clearly named AI roles, explicit time allocations, formal accountability lines, and a development pathway for each AI role type. Building it takes 2–4 weeks and produces a talent plan, a budget estimate, and a capability trajectory that a single-function leader can manage.",
      why: "Functions that have AI capability in individuals but no AI capability in their organisational structure are fragile: a single departure removes the capability. Functions that have AI capability embedded in roles, accountability structures, and development pathways are resilient — the capability survives individual transitions and grows with each new role holder.",
      paragraphs: [
        [
          s("An AI-capable org chart overlays four elements on the existing structure. "),
          x(
            "First: AI role designation for each employee performing AI accountabilities (formal title, percentage time allocation). Second: AI capability tier for each role (Tier 1–5 from the earlier framework). Third: development pathway showing the progression route for employees at each tier. Fourth: succession identification — for each Tier 3 and 4 role, who is the designated successor currently in development?",
            "The overlay is not a replacement of the org chart — it is a second layer that makes AI accountability visible without restructuring reporting lines.",
          ),
          s(" Build the AI capability overlay on top of the current org chart, not as a separate structure. This reduces change management friction and preserves existing relationships."),
        ],
        [
          s("The development pathway is the element that makes the org chart a living system rather than a snapshot. "),
          x(
            "A development pathway for each AI role tier specifies: current tier assessment criteria, next tier requirements, learning programmes available, estimated development timeline, and career title changes at each tier. Employees who can see a clear progression from AI-aware generalist to AI practitioner to AI workflow owner are more motivated to develop AI capabilities than employees for whom AI competence has no visible career consequence.",
            "AI capability development without career consequence is a personal development benefit, not an organisational capability investment. Make the career consequence visible.",
          ),
          s(" Publish the AI capability development pathway before launching any AI upskilling programme — employees should know where AI skill leads before they invest in it."),
        ],
        [
          s("Review the AI-capable org chart quarterly and update it as AI tools, business requirements, and team capabilities change. "),
          x(
            "An AI capability org chart built once and not reviewed becomes outdated within 6 months as AI tools evolve, employees develop, and business priorities shift. A quarterly review of 60–90 minutes with the HR business partner covers: which roles need updated AI tier designations, which AI responsibilities need adjustment, which succession identifications need updating, and which development investments are required for the next period.",
            "The quarterly review rhythm is what converts the org chart overlay from an analytical exercise into an operating tool. Without the review cadence, the overlay is a planning document; with it, it is a management instrument.",
          ),
          s(" Schedule the first quarterly AI org chart review 90 days after the initial overlay is built."),
        ],
      ],
      examples: [
        {
          title: "Logistics — org chart overlay reveals gap",
          body: "A logistics operations director built an AI capability overlay for her 45-person team. The overlay revealed: 4 employees at Tier 5 (AI-aware), 1 employee at Tier 4 (practitioner), and 0 employees at Tier 3 (workflow designer) or Tier 2 (AI product owner). The entire function's AI capability rested on a single practitioner and the central technology team. The overlay made visible that one resignation would eliminate the function's AI operational capacity. A 6-month programme was designed to develop 2 Tier 4 practitioners and 1 Tier 3 workflow designer from existing Tier 5 employees.",
        },
        {
          title: "HR — visible career pathway drives voluntary development",
          body: "An HR director published an AI capability development pathway alongside the announcement of the function's AI programme. The pathway showed a clear progression from 'AI-aware HR generalist' to 'AI HR practitioner' to 'HR AI workflow owner' with title changes and salary ranges at each tier. Applications for the voluntary AI practitioner programme exceeded capacity by 3×. The director had expected 12 applications for 12 places; 36 employees applied. A second cohort was added based on demand. The visible career consequence was the factor cited most frequently in applications.",
        },
        {
          title: "Finance — quarterly review identifies succession risk",
          body: "A finance function's quarterly AI org chart review in month 9 flagged a succession risk: the AI product owner for the forecasting tool was planning a career move to a different function. The identified successor was 4 months from readiness. The quarterly review enabled a 4-month structured handover rather than a reactive gap. The successor took full responsibility on day one of the transition with documented product ownership protocols, vendor relationship history, and configuration standards.",
        },
      ],
    }),
    buildSection({
      number: "3.8",
      title: "BL decision lens: AI roles for your function",
      subtitle: "Three role design decisions you can make in your next leadership meeting",
      take: "A function leader does not need to redesign their entire organisation to build AI capability. Three decisions — identifying who currently holds informal AI accountabilities, designating formal AI workflow owners for each deployed AI tool, and building the AI capability overlay on the current org chart — can be made in a single leadership meeting and executed within 30 days.",
      why: "AI capability in a function is not built by committing to a long-term transformation programme — it is built by making a series of specific, executable role decisions that accumulate into a capable organisation. Each decision is small and reversible; the accumulation is strategic and durable.",
      paragraphs: [
        [
          s("Decision 1: inventory who is currently performing informal AI accountabilities in your function and formalise the top three. "),
          x(
            "The informal AI role holders in your function — the person everyone goes to with AI tool questions, the person who built the prompt library, the person who volunteers to configure the new tool — are your fastest path to formal AI capability. Formalise their roles before they disengage or are recruited away.",
            "This decision takes one conversation with your HR business partner and one conversation with each informal role holder. It costs a role title change and a salary adjustment — typically a total of £15,000–£45,000 per year. The cost of losing these individuals is typically 3–5× their replacement cost.",
          ),
          s(" Identify and formalise your three most valuable informal AI role holders within 30 days."),
        ],
        [
          s("Decision 2: assign a named AI product owner to every AI tool currently deployed in your function. "),
          x(
            "If you have AI tools deployed without a named product owner, you have AI infrastructure without a steward. Each tool needs one person who is accountable for its business performance, its configuration currency, and its vendor relationship. This can be a 20–30% of an existing senior employee's role for most tools.",
            "A tool without an owner will drift from its intended purpose within 12 months. You will not notice until a renewal decision surfaces the fact that the tool's outputs are no longer aligned with current business requirements.",
          ),
          s(" Name an AI product owner for every deployed AI tool before the next contract renewal cycle."),
        ],
        [
          s("Decision 3: build and publish the AI capability development pathway for your function. "),
          x(
            "The pathway — showing what AI capability tiers exist in your function, what each tier requires, and what career progression follows from each tier — is the signal to your team that AI capability development has career consequence. Without this signal, capable employees do not invest in AI development because the return is unclear.",
            "Publishing the pathway before launching any upskilling programme consistently doubles voluntary enrolment and increases retention of AI-capable employees.",
          ),
          s(" Publish the AI capability pathway for your function before the next programme intake opens."),
        ],
      ],
      examples: [
        {
          title: "Three decisions in one leadership session",
          body: "A commercial director ran a 60-minute AI roles planning session with her HR business partner. In that session: she identified 2 informal AI role holders and agreed formalisation terms for both (20% time allocation, grade increase, 'AI Workflow Lead' title) — Decision 1. She reviewed the 4 AI tools deployed in the function, found 2 had no product owner, and assigned ownership to 2 senior managers (25% time allocation each) — Decision 2. She drafted a 3-tier AI capability pathway for the commercial function — Decision 3. All three decisions were operational within 3 weeks.",
        },
        {
          title: "Product owner prevents £200K contract renewal mistake",
          body: "An assigned AI product owner for an HR analytics tool conducted a pre-renewal review and found that the tool's core analysis — built on employee survey methodology unchanged since 2022 — was no longer aligned with the company's current engagement framework. The owner recommended not renewing the contract (£180,000 per year) and replacing the tool with a vendor whose methodology matched the current framework. The renewal would have locked the company into another 2 years of misaligned analytics. The product owner role prevented a £360,000 error at a cost of 25% of one manager's time.",
        },
        {
          title: "Pathway publication triples programme applications",
          body: "A head of finance operations published a 3-tier AI capability pathway for the finance function before opening applications for a 20-person AI practitioner programme. The pathway showed that Tier 3 practitioners would be eligible for 'AI Finance Lead' roles with a 20% salary premium. Applications: 61 from a 140-person function — 3× the available places. The programme was expanded to 30 places. The head of finance operations attributed the demand to the visible career consequence: 'People applied because they could see where it led, not just because they liked AI.'",
        },
      ],
    }),
  ],
  quiz: [
    {
      q: "A business function deploys an AI tool but adoption is at 18% after 6 months. Investigation shows the tool generates outputs but they are rarely used. Which role is most likely absent?",
      options: [
        "ML engineer",
        "AI output reviewer",
        "AI workflow designer",
        "Data scientist",
      ],
      correct: 2,
      correctFeedback:
        "Correct. Low adoption despite available outputs is the signature of a missing workflow designer. The AI tool is producing outputs, but they are not being inserted at the right point in the operational workflow where they would be seen and acted on. Workflow design is the missing link between output generation and output use.",
      wrongFeedback:
        "The symptom — outputs generated but unused — points to a workflow integration failure, not a technical or quality failure. An AI workflow designer embeds AI outputs into the operational process at the point where they will be seen and acted on. Without this role, AI tools generate outputs that no one encounters in their daily work.",
    },
    {
      q: "What is the primary difference between an AI administrator and an AI product owner?",
      options: [
        "AI administrators have higher technical qualifications",
        "AI product owners manage vendor contracts while administrators manage users",
        "AI administrators handle operational tasks; AI product owners are accountable for strategic business value",
        "AI product owners only exist in technology companies",
      ],
      correct: 2,
      correctFeedback:
        "Correct. AI administration is operational: user accounts, permissions, troubleshooting. AI product ownership is strategic: is the tool delivering business value, are its configurations current, is the vendor meeting commitments? Functions that have administrators but no product owners have maintenance without accountability.",
      wrongFeedback:
        "The key distinction is operational vs strategic accountability. Administrators keep tools running. Product owners ensure tools are delivering business value and are aligned with evolving business requirements. Both roles are necessary; only one asks 'should we still be using this tool for this purpose?'",
    },
    {
      kind: "order",
      q: "Order these steps to formally expand an existing employee's role to include AI accountabilities:",
      items: [
        "Inventory current informal AI work being performed by the employee",
        "Define the scope of new AI accountabilities precisely",
        "Identify which existing responsibilities to reduce or remove",
        "Set time allocation percentage for AI work",
        "Agree compensation adjustment and announce the expanded role",
      ],
      prompt: "Drag to arrange in the correct sequence",
      correctFeedback:
        "Correct. Start by understanding what AI work already exists informally, then define the new scope, create capacity by reducing other work, set the time allocation, and complete with compensation and formal announcement.",
      wrongFeedback:
        "The sequence must start with understanding the current informal workload to avoid double-counting. Then scope the new role, create capacity by removing other responsibilities, set time allocation, and complete with the compensation and formal recognition that make the expansion sustainable.",
    },
    {
      q: "Why are domain experts typically more effective prompt engineers than AI specialists in business functions?",
      options: [
        "Domain experts have better keyboard skills and type faster",
        "AI specialists are over-qualified for prompt engineering work",
        "Domain experts understand the business context and what 'good output' looks like, which is the core of effective prompting",
        "AI specialists are too expensive to deploy in operational roles",
      ],
      correct: 2,
      correctFeedback:
        "Correct. Effective prompt engineering requires knowing what the AI tool should produce — which requires deep understanding of the function's processes, quality standards, and decision requirements. Domain experts already have this knowledge; they only need to develop AI prompting technique. AI specialists must learn the domain from scratch.",
      wrongFeedback:
        "Prompt engineering quality is determined by the clarity and precision of the instructions given to the AI, which requires knowing what good output looks like. Domain experts already know the business standards; they need only learn the prompting technique. This is faster and produces better results than having AI specialists learn the domain.",
    },
    {
      kind: "categorize",
      q: "Categorise these activities as belonging to either 'AI Product Owner' or 'AI Output Reviewer':",
      categories: ["AI Product Owner", "AI Output Reviewer"],
      items: [
        { text: "Evaluating whether an AI-generated financial forecast is accurate enough for board use", category: 1 },
        { text: "Conducting quarterly vendor performance reviews", category: 0 },
        { text: "Checking AI-generated contract clauses for jurisdiction-specific errors", category: 1 },
        { text: "Updating AI tool configuration when business processes change", category: 0 },
        { text: "Prioritising new features on the AI tool roadmap", category: 0 },
        { text: "Applying the consequence-tiered review protocol to AI outputs", category: 1 },
      ],
      correctFeedback:
        "Correct. AI product owners focus on tool strategy, vendor management, configuration, and roadmap. AI output reviewers focus on evaluating individual outputs for quality, accuracy, and appropriateness before they drive decisions.",
      wrongFeedback:
        "Product owners manage the tool itself — its configuration, vendor relationship, and strategic direction. Output reviewers manage the quality of what the tool produces — evaluating individual outputs before they are acted on. Both roles are necessary; they address different failure modes.",
    },
    {
      q: "What is the most important element that converts an AI capability org chart overlay from a planning document into an operating management tool?",
      options: [
        "Using a standardised colour coding system for AI tiers",
        "Having the CHRO approve the overlay",
        "A quarterly review cadence that updates AI roles, tiers, and succession designations",
        "Publishing the overlay on the company intranet",
      ],
      correct: 2,
      correctFeedback:
        "Correct. A quarterly review rhythm that updates AI tier designations, succession plans, and development pathways converts a static snapshot into a living management instrument. Without the review cadence, the overlay becomes outdated within 6 months and stops being used for decisions.",
      wrongFeedback:
        "The org chart overlay becomes an operating tool through regular review and update — not through how it looks or who approved it. A quarterly 60–90 minute review that updates roles, tiers, and succession keeps the overlay aligned with the changing reality of AI tool deployment and team capability.",
    },
  ],
});
