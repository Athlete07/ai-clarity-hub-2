import { buildChapter, buildSection, s, x, sectionWithDiagram } from "../concepts-bl-helpers";
import { BL_CALLOUT } from "../concepts-bl-helpers";

export const chapter05BlRedefiningRolesAiAugmented = buildChapter({
  slug: "bl-redefining-roles-ai-augmented",
  number: 5,
  shortTitle: "Redefining Roles in AI-Augmented Work",
  title: "Redefining Roles in the AI-Augmented Organisation",
  readingMinutes: 26,
  summary:
    "When AI augments a role, the role itself changes — not just the tools used in it. The tasks AI performs, the decisions humans retain, and the skills that become more valuable all shift. Business leaders who design this shift deliberately — through structured role anatomy, new job description frameworks, and honest communication of what changes — produce more capable teams and more motivated employees than leaders who allow role change to happen by default.",
  keyTakeaway:
    "Role redefinition in the AI-augmented organisation is not a job description update exercise. It is a fundamental redesign of what humans contribute alongside AI — shifting from task execution to outcome ownership, from information retrieval to judgement application, and from individual expertise to collaborative intelligence. Leaders who design this shift create roles that are more rewarding and more productive. Leaders who allow it to happen by default create roles that are less clear and less valued.",
  pmCallout: BL_CALLOUT,
  sections: [
    sectionWithDiagram({
      number: "5.1",
      title: "The augmentation versus replacement spectrum",
      subtitle: "How to map every role on the spectrum from full augmentation to partial replacement",
      take: "AI does not universally augment or replace — it augments some dimensions of every role and replaces other dimensions. Understanding where each role sits on this spectrum, at the task level rather than the job level, allows business leaders to design role redefinition that is accurate, honest, and productive rather than vague and anxiety-inducing.",
      why: "Leaders who communicate about AI in terms of 'augmentation' at the job level but implement AI that replaces significant task dimensions are making a promise that reality contradicts. Task-level clarity — naming specifically which tasks AI performs and which humans retain — is both more honest and more useful for role design.",
      paragraphs: [
        [
          s("The augmentation-replacement spectrum operates at the task level within roles, not at the job level. "),
          x(
            "A financial analyst's role is not 'replaced' or 'augmented' in total. Specific tasks within it are affected differently: data retrieval and formatting (high replacement probability), routine trend analysis (high replacement probability), complex multi-variable scenario modelling (high augmentation probability), client communication and relationship management (low AI impact), and regulatory interpretation requiring judgement (low AI impact).",
            "Mapping this at the task level allows the role to be redesigned around the tasks that remain human — rather than the person experiencing a gradual, unnamed erosion of their role content without understanding what is happening.",
          ),
          s(" Conduct a task-level AI impact assessment for every role in your deployment scope before communicating role changes to affected employees."),
        ],
        [
          s("Three categories of tasks exist within every role: AI-replaceable (AI performs better or at equivalent quality at lower cost), AI-augmentable (AI assists but human judgement remains essential), and human-essential (AI adds no value or introduces unacceptable risk). "),
          x(
            "AI-replaceable tasks are candidates for full automation: data entry, document formatting, routine compliance checking, information retrieval. AI-augmentable tasks are candidates for human-AI collaboration: complex analysis, creative development, strategic planning with data inputs. Human-essential tasks are protected from automation: relationship management, ethical judgement, political navigation, situations requiring empathy.",
            "The ratio of AI-replaceable to AI-augmentable to human-essential tasks determines how significantly each role will change and how much role redefinition work is required.",
          ),
          s(" Map every task in a role against the three categories before designing the AI deployment for that function. The mapping determines the scale and nature of the role change communication required."),
        ],
        [
          s("Roles with a high proportion of AI-replaceable tasks require proactive redefinition — not just communication. "),
          x(
            "If 60% of a role's tasks are AI-replaceable, the question is not just 'how do we communicate this change?' but 'what is the redefined role that makes this person's contribution significant and motivating?' A role where 60% of the previous content has been automated without a redefined purpose for the remaining 40% is not a job — it is a remainder.",
            "Proactive redefinition fills the space created by AI-replaceable task automation with upgraded human responsibilities: higher-level analysis, relationship management, quality oversight of AI outputs, exception handling, and cross-functional synthesis.",
          ),
          s(" For every role where AI replaces more than 30% of tasks, design a proactive role redefinition that fills the created space with higher-value human work before deployment."),
        ],
      ],
      examples: [
        {
          title: "Financial services — task-level mapping produces accurate communication",
          body: "A bank conducted a task-level AI impact assessment for its 120 financial analyst roles. The assessment found that 45% of tasks were AI-replaceable (data retrieval, report formatting, routine trend identification), 35% were AI-augmentable (scenario modelling, client presentation development), and 20% were human-essential (client relationship, regulatory judgement, complex structuring). This breakdown allowed the bank to communicate specifically: 'Your role will spend less time on data and more time on analysis and client work. Here are the specific tasks that will change and the new skills that become more valuable.' Analyst anxiety measured before and after the communication dropped 29 points after the specific task-level communication versus 8 points after a generic 'AI will augment your role' communication.",
        },
        {
          title: "Legal department — proactive redefinition prevents role remainder problem",
          body: "A legal team's task-level analysis showed that 55% of paralegal tasks were AI-replaceable (document retrieval, first-pass contract review, billing time entry). Without proactive redefinition, paralegal roles would have become low-engagement remainder positions. The team redefined paralegal roles to include: AI output quality review, complex document exception investigation, client matter coordination, and lawyer support in AI-assisted research directions. The redesigned roles were more engaging and more valuable to the lawyers than the original roles. Paralegal retention improved in the AI deployment year versus the prior year.",
        },
        {
          title: "Manufacturer — role spectrum mapping drives retraining investment",
          body: "A manufacturer's task-level assessment of production line roles found a wide spectrum: some roles were 70% AI-replaceable (making them candidates for significant redeployment), while others were 15% AI-replaceable (requiring minimal role change). The spectrum data allowed the manufacturer to target retraining investment precisely: heavy retraining for high-replacement roles, targeted skill additions for low-replacement roles. Total retraining investment was 40% lower than the programme team had initially estimated because the mapping eliminated unnecessary retraining for roles that required minimal change.",
        },
      ],
    }, {
      kind: "diagram",
      id: "founder-hiring-sequence",
      type: "flow",
      title: "AI Talent Strategy",
      caption:
        "Assess gap → upskill or hire → prove pilot → scale team.",
    }),
    sectionWithDiagram({
      number: "5.2",
      title: "Role anatomy: what AI can do versus what humans must do",
      subtitle: "A structured approach to understanding human advantage in an AI-augmented role",
      take: "Human advantage in AI-augmented roles does not lie in doing tasks faster or more accurately than AI — AI usually wins on speed and accuracy for well-defined tasks. Human advantage lies in capabilities that AI consistently lacks: contextual judgement in novel situations, ethical navigation of ambiguous decisions, relationship trust that enables difficult conversations, and systemic thinking that connects disparate signals into strategic insight.",
      why: "Leaders who understand where human advantage is durable can redesign roles around that advantage — creating work that is more meaningful to the person doing it and more valuable to the organisation than the AI-replaceable tasks they replace.",
      paragraphs: [
        [
          s("Five human capabilities remain durably advantaged over AI in organisational contexts: contextual judgement, trust-based relationships, creative synthesis across domains, ethical navigation, and physical-world dexterity. "),
          x(
            "Contextual judgement: the ability to recognise when a situation is genuinely novel and requires a different response from any training example. Trust-based relationships: the ability to have difficult conversations, deliver hard feedback, and maintain relationships through conflict — because the other party knows the human has genuine stake in the relationship. Creative synthesis: connecting ideas across domains in ways that AI trained on existing patterns cannot reliably generate.",
            "Roles redesigned around these five capabilities are more resilient to further AI development than roles redesigned around tasks that are merely difficult for current AI but will become easier for future AI.",
          ),
          s(" Design redesigned roles around durably human capabilities, not around tasks that are difficult for current AI but will become AI-replaceable in three to five years."),
        ],
        [
          s("The most common role redefinition error is designing the AI-augmented role around AI oversight rather than human capability. "),
          x(
            "An 'AI overseer' role — where a human's primary responsibility is reviewing AI outputs for errors — is not a durable human role. It is a transitional quality control function that will itself become automatable as AI self-audit capabilities mature. Roles designed around reviewing AI today will face the same replacement question again in five years.",
            "Roles designed around the human capabilities that AI cannot replicate — contextual judgement, trust relationships, creative synthesis — are more durable and more motivating than roles designed around monitoring AI outputs.",
          ),
          s(" Evaluate every redesigned role against the question: does this role use distinctively human capabilities, or does it primarily oversee AI outputs? The second type of role is not a long-term solution."),
        ],
        [
          s("Role anatomy analysis should be conducted with the role-holders — not just for them. "),
          x(
            "The people who do a job have more granular understanding of which tasks require human judgement than any external analyst can reconstruct. A participatory role anatomy process — where employees map their own task landscape, identify what they believe AI can and cannot do, and co-design the augmented role — produces more accurate role designs and generates the psychological ownership that increases adoption.",
            "A role designed with the employee is experienced as a professional development opportunity. A role designed for the employee is experienced as a management imposition. The process difference produces fundamentally different adoption and motivation outcomes.",
          ),
          s(" Involve role-holders in the role anatomy process. Their participation in designing their augmented role is both more accurate and more motivating than design-for rather than design-with."),
        ],
      ],
      examples: [
        {
          title: "Insurance — adjusters co-design augmented role",
          body: "An insurance company's claims adjusters participated in a role anatomy workshop: they mapped their own task landscape, assessed each task's AI replaceability, and proposed how the freed time should be used. The adjusters' co-designed role increased client-facing investigation time (contextual judgement), added a complex claims triage function (AI-generated flags requiring human investigation prioritisation), and created a client advocacy role for disputed claims (trust relationship capability). Adjuster engagement scores after the co-design increased by 31 points. The co-designed roles were more valuable to the business than the externally designed alternatives the programme team had been developing in parallel.",
        },
        {
          title: "Consulting firm — avoiding the AI overseer trap",
          body: "A consulting firm initially redesigned analyst roles as 'AI quality oversight' positions — reviewing AI research outputs for accuracy. The HR director raised the durability concern: 'In five years, AI will review its own outputs better than a human analyst can. We are designing a role that is already heading toward obsolescence.' The firm redesigned analyst roles around synthesis (connecting AI research outputs with client context in ways the AI could not), client communication (translating AI findings into client-relevant recommendations), and engagement design (structuring the research questions that the AI would then answer). The redesigned roles were more motivating and more durable.",
        },
        {
          title: "Healthcare — nurse role anatomy identifies protected capabilities",
          body: "A hospital's nursing role anatomy workshop identified four human-essential capability areas: patient comfort and emotional support during procedures (trust relationship), clinical deterioration recognition from subtle behavioural cues the AI monitoring system could not detect (contextual judgement), family communication during stressful situations (trust relationship), and care plan advocacy in multidisciplinary team meetings (ethical navigation). The workshop documented these capabilities explicitly and built the AI documentation and monitoring tools around preserving — not replacing — the nursing time available for these four areas. Documentation tool design was changed specifically to reduce time burden so nursing presence in the four human-essential areas could increase.",
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
      number: "5.3",
      title: "The new job description framework for AI-augmented roles",
      subtitle: "How to write job descriptions that accurately capture the AI-augmented role",
      take: "A job description written for a pre-AI role, deployed into an AI-augmented context, will misrepresent what the role does, what skills it requires, and what success looks like. The new job description framework captures the human-AI collaboration structure: which tasks are human-led, which are AI-assisted, and which are AI-performed with human oversight. This framework is also a recruitment and retention tool — it tells the labour market what kind of work the organisation offers.",
      why: "Job descriptions that accurately represent AI-augmented work attract candidates who understand and are motivated by AI collaboration, and set expectations that reduce onboarding friction and early turnover. Job descriptions that still describe pre-AI tasks attract candidates who will be surprised by the reality and set expectations that are systematically wrong.",
      paragraphs: [
        [
          s("An AI-augmented job description has four sections that standard job descriptions omit: AI collaboration scope (which tasks use AI and how), human judgement areas (where human decision-making is essential and protected), AI output responsibilities (what the human is accountable for in AI-generated outputs), and AI development contribution (how the role contributes to AI system improvement over time). "),
          x(
            "The AI output responsibilities section is particularly important: it makes explicit that the human is accountable for the quality of AI-generated work that they approve, communicate, or act on — not just for the quality of their own manually produced work. This accountability is a significant role change that must be communicated before the role is filled, not discovered after.",
            "The AI development contribution section signals to candidates and incumbents that they are partners in AI improvement — not just consumers of AI outputs. This framing is more motivating and more accurate than treating AI as a fixed tool.",
          ),
          s(" Rewrite all job descriptions in AI-affected roles before the next recruitment cycle. A candidate hired into a pre-AI job description in an AI-augmented role is set up for misaligned expectations."),
        ],
        [
          s("The language of AI-augmented job descriptions should reflect collaboration, not subordination. "),
          x(
            "Subordination language: 'Uses AI tools to complete analysis tasks.' Collaboration language: 'Leads AI-assisted financial analysis, applying judgement to AI-generated insights in client contexts.' The collaboration language is more accurate (the human leads; the AI assists), more motivating (the human role has primacy), and more honest about what the role actually requires.",
            "Language signals about the human-AI relationship in the role affect both who applies and how the role is experienced by the person doing it. Subordination language attracts candidates who are comfortable following AI; collaboration language attracts candidates who want to lead alongside AI.",
          ),
          s(" Review all AI-augmented job descriptions for subordination language. Replace with collaboration language that positions the human as the lead partner, not the AI operator."),
        ],
        [
          s("New skills required in AI-augmented roles should be specified rather than implied. "),
          x(
            "Generic requirements like 'comfortable with technology' or 'AI-literate' are too vague to attract the right candidates or guide development. Specific requirements like 'ability to evaluate AI-generated financial analysis for accuracy, context-appropriateness, and client relevance' are actionable — they describe what the candidate must be able to do and what development the organisation must invest in.",
            "Specific AI skill requirements in job descriptions also create accountability for training investment: if the job description says the role requires AI output evaluation skills, the organisation is obligated to provide development for incumbents who do not yet have them.",
          ),
          s(" For every AI-augmented role, specify the AI collaboration skills required in the same way you specify technical or domain skills. 'Comfortable with AI' is not a specification."),
        ],
      ],
      examples: [
        {
          title: "Financial services — new JD framework reduces mis-hire rate",
          body: "A bank rewrote its financial analyst job descriptions using the four-section AI-augmented framework before its next hiring cycle. In the first post-rewrite cohort of 18 hires, the 12-month retention rate was 89% compared to 71% for the pre-rewrite cohort. Exit interviews in the lower-retention pre-rewrite cohort showed 'role was different from what I expected' as the top reason for leaving. The new JD framework had set accurate expectations that reduced early departure.",
        },
        {
          title: "Healthcare — AI output accountability clarified in JD",
          body: "A hospital rewrote its radiologist job description to explicitly include: 'Accountable for all diagnostic conclusions made using AI diagnostic support, including appropriate validation of AI-generated findings before incorporation into patient records.' Three radiologists who had been informally resistant to the AI tool — citing uncertainty about their accountability for AI-assisted diagnoses — became comfortable after the JD update made clear that they retained full diagnostic accountability. The clarity of accountability had removed an ambiguity that was suppressing adoption.",
        },
        {
          title: "Technology company — specific AI skill requirements drive development",
          body: "A technology company updated its product manager job descriptions to specify: 'Ability to design AI-assisted user research studies, evaluate AI-generated insight summaries for contextual accuracy, and brief engineering teams on human judgement requirements for AI feature development.' The specificity created two outcomes: candidates who applied understood what the role required, and the L&D team had a clear brief for the AI skills development programme that needed to be in place before the new JDs went live.",
        },
      ],
    }),
    buildSection({
      number: "5.4",
      title: "From task ownership to outcome ownership",
      subtitle: "How AI augmentation shifts accountability from completing tasks to owning results",
      take: "When AI automates the tasks of a role, the human's accountability shifts from 'I completed these tasks correctly' to 'I am responsible for the outcomes these tasks were designed to produce.' This is a significant accountability shift that many organisations do not make explicit — leaving employees in an ambiguous position where their work accountability has expanded but their authority and recognition have not.",
      why: "Leaders who make the accountability shift explicit — naming the outcomes employees now own, the authority they have to achieve them, and the recognition they will receive for doing so — create roles that are genuinely more significant and rewarding than the task-focused roles they replace. Leaders who allow the shift to happen implicitly create roles with expanded accountability but unchanged authority and recognition.",
      paragraphs: [
        [
          s("Outcome ownership in an AI-augmented role has three dimensions: what result is the human responsible for, what authority does the human have to achieve that result, and how is achievement recognised? "),
          x(
            "Task accountability: 'I completed 40 claim reviews this week.' Outcome accountability: 'I am responsible for accurate, fair claim resolution for customers in my portfolio, using AI-assisted review to maximise both speed and accuracy.' The second formulation describes a higher-accountability role that requires more human judgement and is more meaningful to the person in it.",
            "Outcome accountability without corresponding authority is a recipe for role frustration. If a human is responsible for the outcome of an AI-assisted process but cannot adjust the AI's parameters, override its recommendations, or redirect its inputs, the accountability is nominal rather than real.",
          ),
          s(" When expanding accountability from task to outcome, confirm that the human has the authority needed to achieve the outcome — including the authority to override AI recommendations where judgement requires it."),
        ],
        [
          s("The transition from task to outcome accountability requires explicit management of the performance measurement framework. "),
          x(
            "A person who was measured on task completion (volume, speed, accuracy of tasks performed) and is now measured on outcome achievement (client satisfaction, risk reduction, revenue generated) is in a fundamentally different performance relationship with their manager. The transition requires new measurement approaches, new feedback conversations, and potentially new manager skills.",
            "Managers who continue to measure task completion metrics in AI-augmented roles are measuring the wrong thing — and inadvertently signalling that the task-level work that AI has partly taken over is still what the organisation values. Performance frameworks must shift in step with role designs.",
          ),
          s(" Update performance frameworks for AI-augmented roles at the same time as role descriptions. A role with outcome accountability measured by task completion metrics sends contradictory signals."),
        ],
        [
          s("Outcome ownership creates a more motivating role design for most employees — not just for those who are already high-performing. "),
          x(
            "Research on job satisfaction consistently identifies outcome ownership, decision-making authority, and visible impact as the highest predictors of meaningful work. AI augmentation — when managed as a role redesign opportunity rather than a task reduction — can increase all three dimensions of meaningful work for a broad population of employees.",
            "The employees who most benefit from the transition to outcome ownership are often mid-level employees whose previous roles had task clarity but outcome ambiguity. When AI handles the routine tasks, the expanded outcome focus can be experienced as professional development rather than role erosion.",
          ),
          s(" Frame the transition to outcome ownership in career development language — not change management language. For many employees, it is a genuine promotion of their accountability and significance."),
        ],
      ],
      examples: [
        {
          title: "Retailer — outcome ownership reframes AI impact for store managers",
          body: "A retailer's AI demand forecasting deployment shifted store managers from 'ordering the right stock quantities' (a task) to 'ensuring optimal stock performance for their store's customer base' (an outcome). The reframing gave managers explicit authority to override AI recommendations based on local market knowledge, with the expectation that they would explain significant overrides in a weekly review. At 12 months, stock availability improved 8% while overstock costs fell 12%. Managers who embraced outcome ownership reported higher job satisfaction than before the AI deployment — because their local market expertise was more, not less, valued.",
        },
        {
          title: "Financial services — performance framework shift accompanies role redesign",
          body: "A bank redesigned credit analyst roles from task accountability (number of applications reviewed) to outcome accountability (quality of credit portfolio performance in their segment). The performance framework was updated simultaneously: analysts were now measured on portfolio performance, not review volume. Managers received training on outcome-based performance conversations. At 18 months, both portfolio performance metrics and analyst engagement scores had improved — the outcome accountability had aligned personal incentives with organisational outcomes in a way that the task-based framework had not.",
        },
        {
          title: "Healthcare — nursing outcome ownership increases role satisfaction",
          body: "A hospital redesigned nursing roles from task accountability (completing documentation and medication tasks as scheduled) to outcome accountability (patient experience and clinical outcome quality for their assigned patients). AI documentation tools handled a large proportion of documentation time, creating space for the outcome-focused nursing activities. At 12 months, nurse-reported role satisfaction improved by 24 points — driven by responses to questions about 'having time to do the work that matters.' AI had given nurses more time for human care by removing time from documentation tasks.",
        },
      ],
    }),
    buildSection({
      number: "5.5",
      title: "Creating AI-adjacent roles",
      subtitle: "New roles that emerge at the intersection of human expertise and AI capability",
      take: "AI augmentation does not just change existing roles — it creates new role categories that did not exist before AI was present. AI-adjacent roles — those that emerge specifically because of AI deployment — include AI quality stewards, human-AI workflow designers, AI ethics navigators, and AI performance managers. These roles are critical for AI transformation success and are frequently understaffed or underfunded.",
      why: "Leaders who invest in AI-adjacent roles are investing in the ongoing health of their AI systems — not just their initial deployment. AI-adjacent roles provide the human intelligence that keeps AI systems accurate, ethical, and aligned with organisational needs as those needs evolve.",
      paragraphs: [
        [
          s("Four AI-adjacent role categories are consistently underdeveloped in enterprise AI deployments. "),
          x(
            "AI Quality Stewards: domain experts who continuously evaluate AI output quality in their functional area and escalate accuracy, bias, or drift issues. Workflow Designers: practitioners who continuously redesign human-AI workflows as AI capabilities evolve. Ethics Navigators: professionals who identify ethical risks in AI deployment and maintain escalation pathways. AI Performance Managers: analysts who track AI system performance metrics and coordinate with vendors or internal ML teams on system improvement.",
            "All four categories require domain expertise as much as AI technical knowledge. An AI Quality Steward in healthcare must understand clinical quality; an AI Quality Steward in finance must understand financial accuracy standards. Technical AI knowledge alone is insufficient.",
          ),
          s(" Map each of the four AI-adjacent role categories to named individuals in your current organisation before deployment. Empty categories predict governance failures."),
        ],
        [
          s("AI-adjacent roles are most valuable when they are bridges between AI systems and domain practitioners — not gatekeepers between them. "),
          x(
            "A gatekeeping AI role — where practitioners must request AI access through a specialist team — creates friction that reduces adoption and concentrates AI knowledge in a small group. A bridging AI role — where a domain-knowledgeable specialist helps practitioners integrate AI into their own workflows — distributes AI capability across the function and creates more durable adoption.",
            "The bridging model requires AI-adjacent role holders to be respected domain practitioners, not primarily AI technologists. Their domain credibility is what enables them to translate AI capability into practice-relevant workflow improvement.",
          ),
          s(" Hire or develop AI-adjacent role holders from domain experts with AI interest, not AI technologists with domain interest. Domain credibility is the harder capability to develop."),
        ],
        [
          s("AI-adjacent roles require their own career pathways — they are not temporary transition roles. "),
          x(
            "An AI Quality Steward who develops deep expertise in AI accuracy management in a specific domain is a rare and valuable professional. Without a defined career pathway, these professionals become vulnerable to external recruitment by competitors or AI vendors. Defined career pathways — and compensation that reflects the combined domain and AI expertise required — retain the institutional knowledge that these roles accumulate.",
            "AI-adjacent role career pathways should connect to both domain leadership paths and AI leadership paths — recognising that the combination of deep domain and AI expertise is more valuable than either alone.",
          ),
          s(" Define career pathways for AI-adjacent roles before filling them. Filling them without pathways creates a talent development investment that walks out the door."),
        ],
      ],
      examples: [
        {
          title: "Financial services — AI Quality Steward prevents fraud detection drift",
          body: "A bank's fraud detection AI had been performing well for 14 months when an experienced fraud analyst serving as AI Quality Steward identified a pattern: the model's false negative rate was increasing on a specific fraud category that had evolved post-training. The analyst's domain expertise — knowing what evolving fraud patterns looked like — allowed her to identify model drift that standard system performance metrics had not flagged. The model was retrained before any material fraud losses occurred. Without the AI Quality Steward role, the drift would not have been identified until fraud losses spiked.",
        },
        {
          title: "Healthcare — AI Workflow Designer reduces integration friction",
          body: "A hospital's AI workflow designer role — a senior nurse with 12 years of clinical experience and AI deployment training — redesigned the AI documentation workflow three times in the first six months based on clinical practice feedback. Each redesign reduced documentation friction for nurses. At month six, nurse AI tool utilisation was 87% — compared to 34% in a peer hospital that had deployed the same tool without a workflow designer role. The workflow designer's clinical credibility allowed her to identify friction that a technical AI team would not have recognised as a workflow problem.",
        },
        {
          title: "Consulting firm — AI Ethics Navigator role prevents reputational risk",
          body: "A consulting firm's AI Ethics Navigator — a senior consultant with ethics and AI policy expertise — identified that a client's proposed AI-assisted hiring tool would likely violate the EU AI Act's prohibited practices for emotion recognition in employment. The identification occurred during internal review, before any client deliverable was produced. The Navigator's role prevented a significant reputational and legal risk that would not have been caught in a standard quality review process.",
        },
      ],
    }),
    buildSection({
      number: "5.6",
      title: "Managing the identity shift in role change",
      subtitle: "How to support employees whose professional identity is disrupted by AI augmentation",
      take: "When AI performs a significant part of what a person has spent years developing expertise in, the impact is not primarily practical — it is personal. Professional identity is built around capability and expertise that are valued by others. When AI matches or exceeds that expertise in specific domains, the psychological impact is real regardless of whether the job is secure. Leaders who address the identity dimension explicitly create better outcomes than leaders who focus only on the practical transitions.",
      why: "Role transitions that are managed only at the practical level (new task descriptions, new performance metrics) consistently produce lower engagement than role transitions that also acknowledge and address the identity dimension. The acknowledgement is not therapy — it is leadership honesty about what the change means for the person.",
      paragraphs: [
        [
          s("Professional identity disruption follows a predictable pattern: pride in current expertise, threat when AI matches that expertise, grief when the expertise is automated, adaptation as new expertise areas are developed. "),
          x(
            "The grief phase is the most important for leaders to recognise and acknowledge. A highly capable professional who is proud of their expertise does not simply 'move on' when AI automates it. They experience a genuine loss — of professional significance, of peer recognition, of the satisfaction of expertise mastery. Denying or minimising this loss is both inaccurate and counterproductive.",
            "Acknowledging the loss does not mean dwelling on it. A leader who says 'I know that the skill you have spent five years developing is being partly automated, and I understand that feels like a loss — it is a loss in one dimension while being a new opportunity in another' is more honest and more helpful than a leader who says 'this is exciting — AI will free you up to do more interesting work.'",
          ),
          s(" In role change conversations, explicitly acknowledge what the person is losing before describing what they will gain. The loss is real; pretending otherwise is dishonest."),
        ],
        [
          s("The transition from current expertise to new expertise requires bridge activities that connect the two. "),
          x(
            "Bridge activities are role experiences that use the person's current expertise in a new AI-adjacent way — so the expertise is not abandoned but redeployed. A financial analyst whose modelling expertise is partly automated becomes the person who evaluates AI model outputs for analytical quality — using their modelling knowledge to assess the AI, rather than performing the analysis the AI now performs.",
            "Bridge activities maintain continuity of expertise identity while extending it into the new AI context. They are not the final destination of the role transition — they are the path from current expertise to new expertise that does not require the person to start from zero.",
          ),
          s(" Design bridge activities for every significant role transition — experiences that redeploy existing expertise in new AI-adjacent ways before requiring entirely new expertise."),
        ],
        [
          s("New expertise development must be presented as a legitimate professional achievement, not a consolation prize. "),
          x(
            "AI collaboration expertise — the ability to get better results from AI tools than average users, to identify AI errors that others miss, to design AI-human workflows that produce outcomes neither could achieve alone — is a genuinely rare and valuable skill. Presenting it as such — rather than as a replacement for the real expertise that was automated — gives the professional a meaningful new achievement to pursue.",
            "The organisations that present AI collaboration expertise as a career-elevating achievement attract and retain employees who pursue it with genuine motivation. The organisations that present it as a compensatory skill attract employees who pursue it grudgingly.",
          ),
          s(" Formally recognise AI collaboration expertise in career frameworks and compensation structures. The recognition signals that the new expertise is genuinely valued, not a substitute for what was lost."),
        ],
      ],
      examples: [
        {
          title: "Law firm — acknowledging identity loss improves transition",
          body: "A law firm partner who was deeply experienced in manual contract analysis had her practice area's contract review work significantly automated by AI. The managing partner had two conversations with her: the first acknowledged directly that 'the skill you have spent 15 years developing is being automated, and I recognise that is a real professional loss, not just a process change.' The second conversation focused on her new role as the firm's AI Legal Accuracy lead — where her contract expertise was used to evaluate and train AI tools. She later described the acknowledgement conversation as 'the moment I decided to invest in the new role rather than resist the change.' The acknowledgement had made the transition possible.",
        },
        {
          title: "Healthcare — bridge activity maintains expertise identity",
          body: "A radiologist whose routine X-ray reading was substantially automated by AI was concerned about losing her diagnostic expertise. A bridge activity was designed: she became the lead clinical validator for AI diagnostic cases — reviewing AI-flagged outliers, cases where AI confidence was below threshold, and cases with unusual presentation patterns. The bridge activity used her full diagnostic expertise — applied to the hardest cases the AI could not confidently resolve. Her expertise identity was maintained and actually elevated: she moved from reading 200 routine cases per day to reviewing 30 complex cases per day, with measurably more time for each.",
        },
        {
          title: "Financial services — AI collaboration expertise formally recognised",
          body: "A bank introduced an 'AI Financial Analysis' certification into its analyst career framework — a 40-hour programme teaching AI output evaluation, prompt design for financial analysis, and AI-augmented modelling techniques. The certification carried a 12% compensation premium. Forty-two analysts completed the programme in the first cohort. Post-completion surveys showed that 91% viewed the certification as a genuine career development achievement, not a compensatory skill. The bank had converted the identity risk of AI augmentation into a career development opportunity by formalising the expertise as genuinely valuable.",
        },
      ],
    }),
    buildSection({
      number: "5.7",
      title: "Communicating role redesign to affected teams",
      subtitle: "How to communicate role changes that are honest, specific, and motivating rather than vague and anxiety-inducing",
      take: "Role redesign communication is the single most personal AI communication a leader will deliver — because it is talking to a specific person about their specific job. Generic statements about augmentation or transformation are worse than useless here because they create anxiety without providing the specific information the person needs. Role redesign communication must be individual, specific, and two-way.",
      why: "Leaders who communicate role redesign in a personal, honest, and two-way format consistently achieve higher employee engagement in the redesigned role than leaders who communicate it through programme announcements or all-hands sessions. The individual investment in the communication signals the individual's importance.",
      paragraphs: [
        [
          s("Role redesign communication has three phases: individual briefing, collective sense-making, and ongoing dialogue. "),
          x(
            "Individual briefing: a one-on-one conversation between the employee and their manager, using the role anatomy analysis as a foundation, that describes specifically what will change, what will remain, what new capabilities will be developed, and what support is available. This conversation must happen before any team-level communication — the employee should not learn about their own role change in a group setting.",
            "Collective sense-making: a team session where the redesigned roles are discussed in the context of the team's overall AI deployment — so individuals can see how their redesigned roles connect with their colleagues' redesigned roles and with the team's new working model.",
          ),
          s(" Individual briefing before group communication is non-negotiable for role redesign. Learning about your own job change in a group setting is experienced as a lack of respect regardless of the communication's quality."),
        ],
        [
          s("The individual briefing conversation should be prepared with role-specific content — not a standard script. "),
          x(
            "A manager who prepares for a role redesign conversation by reviewing the specific employee's task map, their tenure and expertise history, and the specific new responsibilities in their redesigned role demonstrates that the conversation is about this person, not about the programme. The preparation is visible in the conversation and signals genuine individual consideration.",
            "A manager who delivers a standardised role redesign communication to all employees in a team — without individual preparation — is delivering a communications exercise, not a role change conversation. The employee notices the difference.",
          ),
          s(" Require managers to complete individual preparation for every role redesign conversation: task map review, individual history, specific new responsibilities. Provide a conversation guide but not a script."),
        ],
        [
          s("The ongoing dialogue after the initial role redesign communication matters as much as the initial briefing. "),
          x(
            "Role redesign is not a one-time announcement — it is a continuous negotiation between what AI can do, what the organisation needs, and what the individual can contribute. Regular check-ins in the first 90 days after role redesign — a 15-minute monthly conversation about what is working, what is difficult, and what further support is needed — keep the role redesign on track and signal continued investment in the individual.",
            "The 90-day follow-up period is when role redesign either embeds successfully or quietly drifts back to the original patterns — because the old patterns were easier and the new ones required more ongoing investment than the initial briefing provided.",
          ),
          s(" Schedule 90-day follow-up check-ins for every role redesign at the same time as the initial briefing. The check-in commitment signals sustained investment and prevents silent regression to pre-AI patterns."),
        ],
      ],
      examples: [
        {
          title: "Financial services — individual briefing before group communication prevents anxiety cascade",
          body: "A bank conducted 45 individual role redesign briefings with financial analysts in the week before the team-level AI deployment announcement. At the team announcement, each analyst had already been personally briefed on their specific role change. The announcement produced zero immediate anxiety questions — because every question had already been answered individually. Compare: a peer bank that delivered the role change announcement at a team level first and then scheduled individual follow-ups. The peer bank spent six weeks managing the anxiety generated by employees learning about their role changes in a group context before individual clarification was available.",
        },
        {
          title: "Healthcare — manager preparation transforms conversation quality",
          body: "A hospital provided managers with a role redesign conversation guide and required them to review each nurse's specific task map before their individual briefing. A quality review of the conversations showed that nurses who received prepared conversations reported 41% higher satisfaction with the communication than nurses whose managers had used the generic guide without individual preparation. The preparedness difference was perceived clearly by nurses: 'She knew my specific situation, not just the general programme.'",
        },
        {
          title: "Retailer — 90-day check-ins prevent role drift",
          body: "A retailer's store manager role redesign included scheduled 30-minute check-ins at days 30, 60, and 90 with each manager's district director. At the day 30 check-in, 8 of 24 managers reported that they were still doing the AI-automated ordering tasks manually 'just to check' the AI's recommendations. This was identified as a transition behaviour — acceptable in the grace period but requiring active management to prevent it from becoming the permanent workflow. Targeted coaching at days 30–60 addressed the trust and habit issues. At day 90, only 2 of 24 managers were still using the manual fallback. Without the structured check-ins, the role drift would have continued indefinitely.",
        },
      ],
    }),
    buildSection({
      number: "5.8",
      title: "BL decision lens: your role redesign process",
      subtitle: "The four decisions that determine whether AI role change is an engagement opportunity or a disengagement risk",
      take: "Role redesign in AI transformation is one of the highest-impact decisions a business leader makes — because it determines whether employees experience AI as a professional advancement or a professional diminishment. The four decisions are: what process will we use to map tasks and design augmented roles, how will we communicate role changes, how will we support identity transitions, and how will we measure role redesign success?",
      why: "Leaders who make these four decisions deliberately produce role redesigns that are more accurate, more motivating, and more durable than leaders who allow role change to happen through technology deployment without explicit design. The role redesign decision is not an HR decision — it is a leadership decision that determines the human experience of AI transformation.",
      paragraphs: [
        [
          s("Decision 1 — Role mapping process: who participates in the task-level AI impact assessment, how long does it take, and what is the output? "),
          x(
            "The role mapping process should be participatory (role-holders involved), specific (task-level, not job-level), and documented (a written output that can be shared with the employee and referenced in performance management). A participatory, documented process that takes two weeks per function produces dramatically more accurate role designs and more engaged employees than a rapid assessment conducted by management without employee involvement.",
            "The two-week investment per function is front-loaded: it replaces months of role ambiguity, adoption friction, and performance management confusion that undefined AI-augmented roles consistently generate.",
          ),
          s(" Commit to a participatory, documented role mapping process before any AI deployment that will significantly change role content. The investment is returned in adoption quality and employee engagement."),
        ],
        [
          s("Decision 2 — Communication process: in what sequence and format will role changes be communicated, with what preparation required from managers? "),
          x(
            "The sequence is non-negotiable: individual briefing before group communication. The format is a structured one-on-one conversation using the task map as a foundation. The preparation requirement is manager-specific: each manager must review the individual's task map and history before the conversation. These decisions are made once but must be reinforced in manager training and quality review.",
            "The most common communication process failure is insufficient manager preparation. A manager briefing guide alone is insufficient — managers must be held accountable for the quality of individual role redesign conversations through follow-up surveys and quality review processes.",
          ),
          s(" Build manager accountability for role redesign conversation quality into the performance framework. Individual briefing quality is a leadership deliverable, not an administrative task."),
        ],
        [
          s("Decisions 3 and 4 — Identity support and success measurement: what bridge activities and recognition structures support identity transitions, and how is role redesign success defined and measured? "),
          x(
            "Identity support: bridge activities that connect current expertise to new AI-adjacent applications; recognition structures that value AI collaboration expertise; career pathways that make new expertise a genuine achievement. Success measurement: employee engagement in the redesigned role (not just adoption of the AI tool), retention rates in redesigned role cohorts, and productivity in the new role design (not just AI utilisation rate).",
            "Measuring role redesign success by AI utilisation rate is insufficient — high utilisation can coexist with low engagement and low performance if the role design is poor. Measuring by employee engagement in the redesigned role captures both the adoption and the human quality of the transition.",
          ),
          s(" Define success for role redesign by employee engagement in the new role, not by AI utilisation rate. High utilisation with low engagement indicates the tool is being used but the role has not been successfully redesigned."),
        ],
      ],
      examples: [
        {
          title: "Insurance — four-decision framework produces engagement improvement",
          body: "An insurance company made all four role redesign decisions before its AI claims deployment: participatory task mapping (2 weeks per team with adjusters involved), individual briefing before group communication (managers briefed on preparation requirements), bridge activities designed for each role (existing expertise redeployed in AI quality steward function), and success measured by adjuster engagement score in redesigned role. At 12 months, adjuster engagement in AI-deployed teams was 23 points higher than in teams not yet deployed — demonstrating that the role redesign had converted the AI deployment from an engagement risk to an engagement driver.",
        },
        {
          title: "Financial services — manager accountability for communication quality",
          body: "A bank included role redesign conversation quality in its manager performance framework: every manager received a 3-question post-conversation survey from their analysts (Was the conversation specific to your situation? Did your manager clearly explain what changes and what does not? Did you have the opportunity to ask questions?). Managers scoring below 3.5/5 received coaching. At six months, conversation quality scores averaged 4.2/5 and analyst anxiety scores were 31% lower than in a parallel deployment that had not included manager quality accountability.",
        },
        {
          title: "Healthcare — engagement measurement identifies redesign gap",
          body: "A hospital measured role redesign success by nurse AI utilisation (85% at six months — above target) and nurse engagement in redesigned role (2.9/5 at six months — below target). The engagement gap revealed that while nurses were using the tool, they did not experience the redesigned role as more meaningful. Exit interview analysis showed that the documentation time saved by AI had been absorbed by additional administrative tasks, not by the expanded patient care time that the role redesign had promised. The engagement measure identified the gap that the utilisation measure had missed, triggering a workflow revision that protected the gained time for patient care.",
        },
      ],
    }),
  ],
  quiz: [
    {
      q: "What is the fundamental problem with designing AI-augmented roles around 'AI oversight' (reviewing AI outputs)?",
      options: [
        "It requires more AI technical knowledge than most employees have",
        "It is a transitional role that will itself become AI-automatable as AI self-audit capabilities mature",
        "It creates too much accountability for employees without sufficient authority",
        "It is more expensive to staff than other AI-adjacent roles",
      ],
      correct: 1,
      correctFeedback:
        "Correct. AI oversight roles — where humans primarily review AI outputs for errors — are transitional. As AI self-audit capabilities develop, the oversight function will itself become automatable. Roles designed around durably human capabilities (contextual judgement, trust relationships, creative synthesis) are more resilient to further AI development.",
      wrongFeedback:
        "AI oversight roles are a design mistake because they are themselves transitional. Designing a role around reviewing AI outputs means the role faces the same replacement question in five years as the original task did. Roles should be designed around capabilities that AI cannot replicate: contextual judgement, trust relationships, ethical navigation, and creative synthesis.",
    },
    {
      kind: "categorize",
      q: "Categorise these role tasks for a financial analyst:",
      categories: ["AI-Replaceable Tasks", "AI-Augmentable Tasks", "Human-Essential Tasks"],
      items: [
        { text: "Data retrieval and report formatting", category: 0 },
        { text: "Routine trend identification in structured data", category: 0 },
        { text: "Complex multi-variable scenario modelling", category: 1 },
        { text: "Client presentation development with AI research inputs", category: 1 },
        { text: "Client relationship management and trust development", category: 2 },
        { text: "Regulatory interpretation requiring contextual judgement", category: 2 },
      ],
      correctFeedback:
        "Correct. AI-replaceable tasks are well-defined, data-driven, and not requiring contextual judgement. AI-augmentable tasks benefit from AI inputs but require human analysis and judgement in context. Human-essential tasks require the capabilities AI consistently lacks: trust relationships and contextual regulatory judgement.",
      wrongFeedback:
        "Task categorisation maps to AI's capability profile: AI excels at well-defined data tasks (replaceable), assists in complex analysis (augmentable), and cannot replicate trust relationships and contextual judgement (human-essential). The ratio of replaceable to human-essential tasks determines the scale of role redesign required.",
    },
    {
      q: "What is the non-negotiable sequencing rule for communicating role redesign to affected employees?",
      options: [
        "Group announcement first so all employees receive the same information simultaneously",
        "Individual briefing before any group communication — the employee should not learn about their role change in a group setting",
        "Written communication first so employees can review the information at their own pace",
        "Manager briefing first, then employee communication at a time the manager chooses",
      ],
      correct: 1,
      correctFeedback:
        "Correct. An employee should never learn about their own role change in a group setting. Individual briefing before group communication is non-negotiable because learning about a personal role change alongside colleagues signals institutional indifference. The individual briefing demonstrates that the organisation regards each person's transition as individually significant.",
      wrongFeedback:
        "The non-negotiable rule is individual briefing before group communication. Learning about your own role change in a group context is experienced as disrespectful regardless of the communication's quality. The individual investment in the briefing signals that the person's specific transition matters.",
    },
    {
      q: "When communicating the identity dimension of role change to an employee whose expertise is being partially automated, what is the correct sequence?",
      options: [
        "Describe the exciting new opportunities first, then briefly acknowledge the changes",
        "Focus only on the practical workflow changes and avoid emotional dimensions",
        "Acknowledge what the person is losing before describing what they will gain",
        "Present the business case for AI augmentation before addressing personal impact",
      ],
      correct: 2,
      correctFeedback:
        "Correct. The loss is real and must be acknowledged first. A leader who leads with the opportunity ('this is exciting — AI will free you up for more interesting work') before acknowledging the loss signals that they do not understand or respect the significance of what is changing. Acknowledging the loss first creates the trust to receive the opportunity framing honestly.",
      wrongFeedback:
        "The sequence matters because the person is experiencing a real loss. Leading with the opportunity before acknowledging the loss signals that the leader doesn't recognise the loss as real, which undermines the credibility of the opportunity framing. Acknowledge the loss first, then describe the opportunity.",
    },
    {
      kind: "order",
      q: "Order the steps in a role redesign process:",
      items: [
        "Conduct participatory task-level AI impact assessment with role-holders",
        "Design the augmented role around durably human capabilities",
        "Write the AI-augmented job description with collaboration language",
        "Brief individual employees before any group communication",
        "Design bridge activities connecting current expertise to new AI-adjacent work",
        "Measure success by employee engagement in redesigned role, not only AI utilisation",
      ],
      prompt: "Drag to arrange in the correct sequence",
      correctFeedback:
        "Correct. The process starts with accurate task mapping, moves to role design, then communication, then identity support, then measurement. Starting with job description writing before task mapping produces inaccurate role descriptions. Measuring by utilisation only misses the engagement quality of the redesign.",
      wrongFeedback:
        "Role redesign starts with participatory task mapping to get the design right, then role design, then communication (individual before group), then identity support through bridge activities, and finally measurement that includes engagement quality, not just utilisation.",
    },
    {
      q: "A business leader measures their AI role redesign success by AI tool utilisation rate. Utilisation is at 85% — above target. But employee engagement in the redesigned role is 2.9/5 — below target. What does this combination tell the leader?",
      options: [
        "The programme is successful — utilisation is the primary metric",
        "Employees need more training to engage more deeply with the AI tool",
        "The tool is being used but the role has not been successfully redesigned — likely the freed time was not redirected to higher-value work",
        "The engagement measure is too subjective to be used alongside utilisation data",
      ],
      correct: 2,
      correctFeedback:
        "Correct. High utilisation with low engagement indicates the tool is being used but the role design has failed: the time freed by AI has likely been absorbed by other low-value tasks rather than redirected to the higher-value human work the redesign promised. The engagement measure caught what the utilisation measure missed.",
      wrongFeedback:
        "High utilisation with low engagement is a role design failure signal. The tool is being used, but the role is not more meaningful — which means the time saved by AI has not been invested in higher-value human work. The engagement gap reveals that the role redesign did not actually redesign the role, just added a tool to the existing role.",
    },
  ],
});
