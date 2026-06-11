import { BL_CALLOUT, buildChapter, buildSection, s, x } from "../concepts-bl-helpers";

export const chapter07BlAiLiteracyProgrammeDesign = buildChapter({
  slug: "bl-ai-literacy-programme-design",
  number: 7,
  shortTitle: "AI Literacy Programme Design",
  title: "Designing an AI Literacy Programme",
  readingMinutes: 25,
  summary:
    "An AI literacy programme is only valuable if it changes how people work, not just how people think about AI. Most enterprise AI literacy programmes fail this test: they produce informed employees who do not change their daily behaviour. The programmes that succeed share four design principles: they are role-specific rather than generic, workflow-embedded rather than classroom-based, continuously updated as AI tools evolve, and measured by behavioural outcomes rather than learning completion metrics.",
  keyTakeaway:
    "The single most important AI literacy design decision is the choice between generic AI education (applicable to everyone, changes no one) and role-specific AI capability development (applicable to specific roles, changes their daily work). Generic programmes are cheaper and easier to commission; role-specific programmes are 3–4× more expensive to design but 5–6× more effective at producing adoption. Design the programme you need, not the programme you can afford to run at scale.",
  pmCallout: BL_CALLOUT,
  sections: [
    buildSection({
      number: "7.1",
      title: "Why generic AI training programmes fail",
      subtitle: "The four design flaws that produce informed employees who do not change their behaviour",
      take: "Generic AI training programmes fail for four predictable reasons: they are designed by AI enthusiasts for a neutral audience (producing content that is too advanced for sceptics and too basic for practitioners), they are evaluated by completion rates rather than behavioural outcomes (creating an incentive to maximise enrolment rather than maximise impact), they are not connected to the specific AI tools deployed in the organisation (producing knowledge that does not transfer to practice), and they are run as events rather than processes (producing initial enthusiasm without sustained adoption).",
      why: "Business leaders who commission generic AI literacy programmes and measure success by completion rates are buying the appearance of AI capability development rather than the reality. The measurement choice reveals the design intent: if completion is the goal, completion will be achieved. If behaviour change is the goal, the programme must be designed to produce it.",
      paragraphs: [
        [
          s("Generic AI literacy content produces a broad but shallow common denominator that satisfies no one. "),
          x(
            "A single AI literacy module designed for a 3,000-person organisation that spans customer service, finance, operations, legal, and sales must be pitched at a level that is accessible to all — which means too basic for employees who already have AI exposure and too abstract for employees who need practical tool guidance. The result is a training experience rated as 'not relevant to my role' by 60–70% of participants.",
            "The not-relevant rating is not a content quality problem — it is a design problem. Generic content is inherently not relevant to specific roles because it is designed to be relevant to all roles.",
          ),
          s(" Do not commission AI literacy content until you have defined which specific roles the content is for. Role definition precedes content design."),
        ],
        [
          s("Completion rate measurement creates perverse incentives that undermine training quality. "),
          x(
            "A programme measured by completion rate optimises for accessibility (short modules, mobile-friendly, self-paced) and minimal friction (no assessments that prevent completion, no prerequisites that block enrolment). These optimisations reduce the quality and depth that produce behaviour change. An organisation that celebrates 80% completion of a 30-minute AI awareness module has measured an activity, not an outcome.",
            "The completion rate incentive is structurally dysfunctional: it rewards the production of training that people start and finish, not training that changes what they do. Replacing completion rate with adoption rate (are trained employees using AI tools differently?) removes the perverse incentive.",
          ),
          s(" Replace training completion rate with AI tool adoption rate as the primary programme success metric before the programme is designed."),
        ],
        [
          s("Disconnection from deployed tools produces knowledge that does not transfer to practice. "),
          x(
            "An employee who completes a module on 'how to prompt AI tools effectively' and then faces their organisation's specific AI contract review tool, demand forecasting tool, or customer analytics platform discovers that generic prompting principles apply partially at best. The gap between generic content and specific tool use is where behaviour change fails.",
            "Role-specific AI literacy is almost always tool-specific: the goal is not to teach prompting in general but to teach employees how to get the best results from the specific AI tools deployed in their specific workflow.",
          ),
          s(" Design AI literacy content for the tools currently deployed or scheduled for deployment in the next 6 months — not for AI tools in general."),
        ],
      ],
      examples: [
        {
          title: "Insurance — completion rate metric exposed",
          body: "An insurer reported 78% AI literacy training completion across 2,400 employees. A follow-up AI tool adoption audit 3 months later showed 24% of trained employees were using any AI tool in their daily workflow. When the programme manager reported this gap to the CRO, the response: 'We measured the wrong thing. Completion tells us nothing.' The insurer redesigned the programme with tool adoption as the primary metric, reduced the programme to 800 targeted employees, and ran role-specific content. Twelve months later: 69% adoption among trained employees.",
        },
        {
          title: "Retailer — generic content rejection",
          body: "A retailer deployed a generic AI literacy e-learning programme to all 600 commercial staff. Post-course survey: 71% rated the content as 'not relevant to my role.' Focus groups revealed: category managers wanted AI to help with demand forecasting (not in the module), buyers wanted AI to help with supplier negotiation preparation (not in the module), and marketers wanted AI to help with content creation (only briefly mentioned). The programme was redesigned as three role-specific modules. Relevance ratings: 83%, 79%, and 87% respectively. Adoption within 60 days: 61% versus 18% for the generic version.",
        },
        {
          title: "Financial services — tool-specific design",
          body: "A bank's first AI literacy programme taught 'effective prompting' using generic examples (writing a poem, summarising a news article). Its deployed AI tools were a credit risk summariser, a regulatory reporting generator, and a client meeting note tool — none resembling the generic examples. Post-programme, employees rated their prompting confidence highly but could not translate the generic skill to tool-specific use. The programme was redesigned using real examples from the 3 deployed tools. Adoption of all 3 tools increased by an average of 42% in the first 8 weeks after the redesigned programme.",
        },
      ],
    }),
    buildSection({
      number: "7.2",
      title: "Three tiers of AI literacy",
      subtitle: "Awareness, working knowledge, and practitioner — designing the right tier for each audience",
      take: "AI literacy exists at three tiers with distinct learning objectives, programme designs, and time investments. Tier 1 (Awareness): employees understand AI's relevance to their function and can engage productively in AI-related conversations. Tier 2 (Working Knowledge): employees can use specific AI tools in their defined workflow reliably. Tier 3 (Practitioner): employees can configure, evaluate, and improve AI tools beyond default settings. Each tier requires a different programme design; conflating them wastes budget on the wrong experience for the wrong audience.",
      why: "Business leaders who deploy one-size-fits-all literacy programmes across all three tiers simultaneously underinvest in Tier 3 (where the most AI value is extracted) and overinvest in Tier 1 for employees who already have awareness. Tier mapping before design is the step that makes programme investment efficient.",
      paragraphs: [
        [
          s("Tier 1 (Awareness) programmes are appropriate for two populations: senior leaders who make AI investment decisions without using AI tools directly, and employees in functions where AI tools are not yet deployed but will be in the future. "),
          x(
            "Tier 1 content: what AI is and is not capable of, how AI decisions are made, what risks AI introduces, how to evaluate AI claims. Format: 4–8 hours, can be e-learning or facilitated. Target outcome: participant can distinguish between AI hype and AI evidence, can ask productive questions about AI proposals, can identify AI risk factors in vendor claims.",
            "Tier 1 is appropriate for senior leaders even when Tier 2 and 3 are the operational priority — because senior leaders who cannot evaluate AI proposals are a governance risk.",
          ),
          s(" Deliver Tier 1 to all senior leaders and board members regardless of whether they will directly use AI tools."),
        ],
        [
          s("Tier 2 (Working Knowledge) programmes are appropriate for any employee whose daily workflow includes or will include AI tool use. "),
          x(
            "Tier 2 content: specific to the AI tools deployed in the employee's role, covers how to use the tool, how to evaluate its outputs, how to give useful feedback, and how to escalate when outputs are unreliable. Format: 8–16 hours of tool-specific content plus 4–8 weeks of supervised practice. Target outcome: participant uses the AI tool reliably in daily workflow with calibrated trust.",
            "Tier 2 is the most numerically significant tier in most organisations because most employees are or will be daily AI tool users. It requires the most investment in design (role-specific and tool-specific) and delivery (supervised practice).",
          ),
          s(" Calculate the cost of Tier 2 design and delivery before committing to the number of employees it will cover. Role-specific design is expensive; it is also the only design that produces adoption."),
        ],
        [
          s("Tier 3 (Practitioner) programmes are appropriate for the 10–20% of employees who will configure, optimise, and advocate for AI tools within their function. "),
          x(
            "Tier 3 content: advanced prompting and configuration, AI output quality assessment, prompt library management, workflow design for AI integration, basic understanding of AI model limitations and failure modes. Format: 40–80 hours over 8–16 weeks including project work. Target outcome: participant can independently configure AI tools for new use cases, evaluate AI output quality against professional standards, and coach colleagues on AI tool use.",
            "Tier 3 practitioners are the highest-leverage investment in AI literacy. A single Tier 3 practitioner embedded in a team of 20 can lift the entire team's Tier 2 capability within 90 days through active coaching.",
          ),
          s(" Identify and develop 2–4 Tier 3 practitioners per function before investing in broad Tier 2 training. Practitioners amplify the value of all other training."),
        ],
      ],
      examples: [
        {
          title: "Healthcare — tier mapping before design",
          body: "A hospital trust mapped 2,400 employees to literacy tiers before any programme design: 180 senior clinicians and managers to Tier 1 (awareness), 1,800 clinical and operational staff to Tier 2 (working knowledge for deployed tools), 420 to both Tier 2 and 3 (practitioners in clinical informatics, pharmacy, and data teams). The tier mapping revealed that 89 employees already met Tier 2 requirements based on existing usage data — they were assigned directly to Tier 3. The mapping reduced the total programme budget by 22% by eliminating redundant training for already-capable employees.",
        },
        {
          title: "Financial services — Tier 3 investment ahead of Tier 2",
          body: "A bank invested in 25 Tier 3 practitioners across its commercial banking function before running any Tier 2 training. The 25 practitioners developed prompt libraries, produced role-specific quick-reference guides, and ran weekly 'AI clinics' for their teams during the Tier 2 programme rollout. Tier 2 adoption rate in practitioner-supported teams: 73%. Tier 2 adoption rate in teams without practitioner support: 41%. Cost of practitioner programme: £180,000. Estimated adoption value difference: £520,000 in additional AI tool productivity returns at 12 months.",
        },
        {
          title: "Retailer — Tier 1 for board members",
          body: "A retailer delivered a 6-hour Tier 1 AI literacy programme to 8 board members before a board AI strategy presentation. Post-programme, board members could distinguish between AI capability claims and AI marketing claims, could ask about implementation risk in vendor proposals, and could challenge ROI projections with relevant questions. At the strategy presentation, 3 board members challenged AI vendor claims that the previous year's board had accepted without question. The CEO observed: 'The board is now a quality control layer for AI proposals rather than an approving audience.'",
        },
      ],
    }),
    buildSection({
      number: "7.3",
      title: "Designing role-specific AI learning paths",
      subtitle: "How to build a curriculum that connects AI literacy to the specific work of each role group",
      take: "A role-specific AI learning path is a sequence of learning experiences — curated, not comprehensive — that take an employee from their current AI capability to the capability required for their role. It is not a list of available courses. It is a prescriptive journey with defined start points, milestones, completion criteria, and a connection to the specific AI tools and workflows the role uses. A well-designed learning path is the artefact that most directly predicts programme completion and adoption.",
      why: "Employees who understand what they need to learn, why they need to learn it, and how each learning experience connects to their daily work are 3× more likely to complete the path and 4× more likely to adopt the AI tools it prepares them for. Path design is the infrastructure that converts individual learning investments into organisational capability.",
      paragraphs: [
        [
          s("A role-specific learning path has five design elements. "),
          x(
            "Element 1: entry assessment — what does the employee already know? Element 2: required destination — what capability does the role require at what tier? Element 3: learning sequence — which experiences (in what order) bridge the gap? Element 4: milestones — what can the employee do at each stage of the path that they could not do before? Element 5: completion criteria — what observable behaviour demonstrates the path has been completed?",
            "Most enterprise learning paths define elements 1–3 and omit 4–5. Without milestones and completion criteria, the path is a content list, not a development journey. Milestones give employees visible progress; completion criteria give the organisation measurable outcomes.",
          ),
          s(" Always define observable completion criteria (what can the employee do?) before defining the learning sequence (what will they study?)."),
        ],
        [
          s("Learning path length should be proportionate to the gap, not to the content available. "),
          x(
            "A Tier 2 learning path for an employee with minimal AI exposure might be 20 hours. The same path for an employee who already uses AI tools informally might be 6 hours. One-size learning paths that run all employees through the same duration regardless of starting point waste the time of advanced employees and rush employees who need more depth.",
            "An entry assessment that accurately measures starting capability allows the path to adapt its length to the individual. Adaptive paths consistently achieve higher completion rates and better outcomes than fixed-length paths for the same investment.",
          ),
          s(" Include an entry assessment in every learning path design. Use assessment results to set path entry points, not to determine eligibility."),
        ],
        [
          s("The learning sequence must prioritise practice before knowledge for AI tool adoption. "),
          x(
            "The conventional learning sequence is: knowledge first, practice second. For AI tool adoption, a practice-first sequence often produces better outcomes: encounter the tool in a real or simulated workflow first, discover the questions that need answering, then receive the conceptual knowledge in the context of those questions.",
            "Practice-first sequences work for AI because AI tools are intuitive enough to start exploring without much prior knowledge. The questions that emerge from initial practice are more specific and more motivated than the questions that precede any practical experience.",
          ),
          s(" Consider a practice-first sequence for Tier 2 learning paths: encounter the tool, discover your questions, then receive targeted knowledge."),
        ],
      ],
      examples: [
        {
          title: "Logistics — observable completion criteria",
          body: "A logistics company defined observable completion criteria for its AI route optimisation learning path before designing any content: 'Participant can use the AI routing tool to generate a modified route plan in response to a live operational change within 5 minutes, can identify and explain the AI's reasoning for the top-ranked route, and can flag a route recommendation for human review with documented justification.' These criteria were used to design the content and to assess completion. 88% of participants who met the criteria were still using the tool at month 6.",
        },
        {
          title: "Healthcare — adaptive path lengths",
          body: "A hospital trust implemented adaptive learning paths for its AI clinical documentation tool. Entry assessment identified 3 starting cohorts: no AI exposure (40% of staff, assigned 18-hour path), casual AI users (35% of staff, assigned 10-hour path), and experienced AI users (25% of staff, assigned 6-hour path). Completion rates by cohort: 91% (18-hour), 94% (10-hour), 96% (6-hour). Overall completion: 93% versus the 58% completion rate of the previous fixed-length programme. Cost savings from adaptive paths: 28% reduction in total training hours delivered.",
        },
        {
          title: "Marketing — practice-first sequence",
          body: "A marketing team piloted a practice-first AI content generation path: week 1 was unstructured tool use time (no guidance, just a task), weeks 2–3 covered conceptual knowledge based on questions collected from week 1, week 4 was structured practice with coaching. The conventional path (knowledge, then practice) ran simultaneously in a comparable team. At 8 weeks: practice-first team adoption was 79%, knowledge-first team adoption was 48%. Practice-first participants cited higher motivation: 'I already knew why I needed to learn this by week 2 because I had already tried it.'",
        },
      ],
    }),
    buildSection({
      number: "7.4",
      title: "Content types: courses, workshops, lunch-and-learns, and shadowing",
      subtitle: "Matching learning content format to the literacy outcome required",
      take: "Different content formats produce different types of learning. E-learning courses produce scalable knowledge transfer at low cost. Facilitated workshops produce collaborative practice and peer learning at medium cost. Lunch-and-learns produce awareness and social normalisation at very low cost. Shadowing produces contextual skill transfer at high cost per person but high depth per hour. An AI literacy programme that relies on a single content format will over-serve some outcomes and under-serve others.",
      why: "Business leaders who choose the cheapest available format (e-learning) for all AI literacy objectives are optimising for unit cost rather than outcome quality. The question is not which format is cheapest — it is which format produces the specific outcome required at acceptable cost.",
      paragraphs: [
        [
          s("E-learning is appropriate for knowledge transfer but insufficient for skill development or attitude change. "),
          x(
            "E-learning's strengths: scalable, self-paced, consistent, trackable. Its limitations: produces knowledge, not skill; cannot simulate the social and emotional dynamics of AI use in real workflows; produces low engagement for employees with minimal prior motivation. E-learning is the right format for Tier 1 awareness content and for the knowledge component of Tier 2 learning paths. It is the wrong format for supervised practice, peer learning, or attitude change.",
            "E-learning is often the default AI literacy format because it is the easiest to commission and the easiest to measure. It is not the most effective format for the most important AI literacy outcomes.",
          ),
          s(" Use e-learning for knowledge components only. Design a different format for all practice and skill development components."),
        ],
        [
          s("Facilitated workshops are the highest-impact format for Tier 2 working knowledge development when designed around real workflows. "),
          x(
            "A 4-hour facilitated workshop that uses the organisation's actual AI tools, with the participants' real role tasks, supervised by a facilitator who can answer tool-specific questions in real time, consistently produces higher adoption than the equivalent time in e-learning. The workshop's advantage is immediacy: errors are corrected in the moment, questions are answered in context, and peer experience is shared across the group.",
            "Workshop design for AI literacy must use real tools and real data. Workshops using demo environments or generic examples produce knowledge that does not transfer to the real tool. The design investment required to build a role-specific, tool-specific workshop is higher — but the adoption outcome is also higher.",
          ),
          s(" For every Tier 2 supervised practice component, invest in a facilitated workshop with real tools and role-realistic tasks rather than a simulation environment."),
        ],
        [
          s("Shadowing produces the deepest contextual skill transfer for Tier 3 practitioner development but is expensive at scale. "),
          x(
            "A Tier 3 practitioner candidate who shadows an experienced AI practitioner for 3–4 hours per week for 6 weeks — observing real AI tool use decisions, discussing the reasoning behind configuration choices, and gradually taking over tasks under supervision — develops contextual expertise that cannot be replicated in formal training. Shadowing is expensive (requires experienced practitioner time) and cannot scale to large populations, but it is the right format for the small number of practitioners who need deep expertise.",
            "Shadowing is most effective when the experienced practitioner is an internal role model rather than an external trainer — because internal practitioners understand the specific tools, data, and business context that the candidate will work in.",
          ),
          s(" Use shadowing as the primary development format for Tier 3 practitioner candidates, supplemented by structured knowledge content for concepts the shadowing does not cover."),
        ],
      ],
      examples: [
        {
          title: "Operations — format portfolio",
          body: "A manufacturer designed its AI quality inspection literacy programme with four content formats: e-learning (2 hours — AI quality concepts, Tier 1/2 knowledge); facilitated workshop (4 hours — supervised practice with real inspection tool on real product data, Tier 2 skill); lunch-and-learn series (monthly, 45 minutes — peer sharing of AI use experiences and tips, normalisation); shadowing (6 weeks × 4 hours — for 8 practitioner candidates, Tier 3 development). Total cost: £420,000. Adoption at month 6: 79%. Previous e-learning-only programme: £180,000 cost, 28% adoption. Cost per percentage point of adoption: £531 (format portfolio) versus £643 (e-learning only).",
        },
        {
          title: "Financial services — real-tool workshop vs demo environment",
          body: "A bank compared AI credit analyst training in two formats: Workshop A used the production AI credit tool with real case files (names removed). Workshop B used a vendor-provided demo environment with simulated cases. Both workshops were 4 hours with the same facilitator. Post-workshop adoption at 4 weeks: Workshop A — 67%, Workshop B — 31%. Participant feedback on Workshop B: 'I could not see how what we practised would apply to our actual case files.' The demo environment workshop failed to produce transfer because the gap between the demo and the real tool was too large for most participants to bridge independently.",
        },
        {
          title: "Marketing — shadowing produces practitioner",
          body: "A media company used a 6-week shadowing programme to develop its first 3 AI content practitioners. Each candidate shadowed an external AI consultant for 4 hours per week while simultaneously managing real content projects using the AI tools. At week 8, all 3 practitioners were working independently. The three practitioners then each shadow-developed two more practitioners from within the team. Within 6 months, the team had 9 practitioners developed entirely through cascaded shadowing at an average cost of £8,000 per practitioner — versus the external training programme cost of £22,000 per practitioner.",
        },
      ],
    }),
    buildSection({
      number: "7.5",
      title: "Measuring learning effectiveness beyond completion rates",
      subtitle: "The four metrics that tell you whether your AI literacy programme is working",
      take: "Completion rate measures whether people started and finished a learning experience. It does not measure whether they learned, whether they changed their behaviour, or whether the learning produced business value. Four metrics fill this gap: knowledge retention (did learning stick 30 days later?), workflow adoption (are trained employees using AI tools differently in their work?), output quality (has the quality of AI-assisted work improved?), and business outcome (has the function's performance improved in the ways AI was expected to improve it?). The four metrics form a measurement cascade from learning event to business impact.",
      why: "Programmes that are measured only by completion rate are optimised to produce completions. Programmes that are measured by workflow adoption are optimised to produce adoption. The measurement choice determines the design choice — and the design choice determines the outcome.",
      paragraphs: [
        [
          s("Knowledge retention measures what participants know 30 days after training, not immediately after. "),
          x(
            "Immediate post-training knowledge assessments measure what people can recall when the training is fresh. A 30-day delayed assessment measures what has been retained — which is the relevant measure for whether training produced lasting knowledge. Research on the forgetting curve shows that 40–60% of training content is forgotten within 30 days without reinforcement. A 30-day retention assessment that reveals 40% retention is telling you that reinforcement is needed, not that the original training was poor.",
            "The purpose of 30-day retention assessment is not to evaluate employees — it is to calibrate the reinforcement design. Low retention in specific content areas identifies which content needs reinforcement activities (spaced repetition, job aids, coach prompting).",
          ),
          s(" Include a 30-day retention assessment in every AI literacy programme. Use results to trigger reinforcement for participants who score below threshold."),
        ],
        [
          s("Workflow adoption is the metric that connects learning to practice. "),
          x(
            "Workflow adoption measures whether trained employees are using AI tools in their daily work in the way the training intended. Data sources: AI platform usage data (logins, feature use, session duration), manager observation, output review records. A trained employee who is not using the AI tool at 30 days has an adoption gap that requires investigation — not additional training. The investigation typically reveals a workflow integration issue, a tool quality concern, or an unreported barrier that training cannot address.",
            "The gap between training completion and workflow adoption is the change management gap. Measuring adoption exposes this gap; not measuring adoption allows it to grow silently.",
          ),
          s(" Measure workflow adoption at 30, 60, and 90 days post-training for every cohort. Investigate employees with low adoption before investing in additional training for them."),
        ],
        [
          s("Output quality measurement closes the loop between AI literacy and AI value. "),
          x(
            "Output quality measures whether the work produced by AI-assisted employees meets quality standards at a higher rate than before training. Examples: AI-generated contract drafts that pass legal review on first submission (versus requiring revision), AI-assisted demand forecasts that fall within acceptable accuracy bounds, AI-supported customer responses that resolve queries without escalation. Output quality measurement requires a pre-training baseline and a defined quality standard — both must be established before the programme begins.",
            "Output quality improvement is the direct financial justification for AI literacy investment. If AI-assisted outputs are not higher quality than pre-AI outputs, either the AI is not good enough or the literacy programme has not produced the skill required to use it effectively.",
          ),
          s(" Establish quality measurement baselines before any AI literacy programme begins. Quality improvement evidence is your strongest programme ROI argument."),
        ],
      ],
      examples: [
        {
          title: "Insurance — 30-day retention drives reinforcement design",
          body: "An insurer's AI claims assessment literacy programme ran a 30-day retention assessment for its 200-person cohort. Results: 89% retention on AI tool navigation (well-retained), 71% retention on output evaluation criteria (moderate), 38% retention on error escalation protocol (poorly retained). The low retention on escalation protocol triggered: a laminated quick-reference card for each employee's workstation, a 20-minute weekly team briefing for 4 weeks covering escalation scenarios, and a dedicated escalation protocol module added to onboarding for new hires. Three-month follow-up assessment: escalation protocol retention rose to 81%.",
        },
        {
          title: "Financial services — adoption gap investigation",
          body: "A bank's 30-day adoption measurement found 62% of trained credit analysts were using the AI credit tool daily. Investigation of the 38% non-adopters revealed: 22% had not been given system access despite completing training (an IT provisioning failure), 10% had managers who had discouraged tool use ('not sure we trust it yet'), and 6% had unresolved tool quality concerns from training that had not been logged. All three barriers were addressable in 2 weeks. Adoption reached 88% at day 60 — without any additional training.",
        },
        {
          title: "Marketing — output quality baseline enables ROI case",
          body: "A marketing agency established a pre-AI-literacy baseline: 42% of AI-assisted content briefs passed the creative director's quality review on first submission. After a 6-week AI content practitioner programme for 12 content leads, first-submission pass rate reached 71%. The 29 percentage point improvement in first-submission quality reduced revision cycles by an estimated 140 hours per month. At a blended rate of £65 per hour, the quality improvement delivered £9,100 per month in recovered productivity — against a programme cost of £34,000. Payback period: 3.7 months.",
        },
      ],
    }),
    buildSection({
      number: "7.6",
      title: "Vendor-delivered vs internally-built training",
      subtitle: "When to buy AI literacy content and when to build it",
      take: "The build vs buy decision for AI literacy content depends on three variables: content specificity (generic content is better bought; role-specific, tool-specific content is better built), content currency (rapidly evolving AI tool content is better built internally to enable fast updates; conceptual content is better bought), and design capability (if internal L&D has AI literacy design capability, build; if not, buy and adapt). Most organisations need a hybrid: buy generic awareness content, build tool-specific working knowledge content.",
      why: "Organisations that buy all AI literacy content receive polished, generic programmes that miss the specificity required for adoption. Organisations that build all AI literacy content invest disproportionately in design for content that is available cheaply at quality from the market. The hybrid approach is both more effective and more cost-efficient than either extreme.",
      paragraphs: [
        [
          s("Generic AI literacy content (Tier 1 awareness) is available at high quality from the market and should be bought rather than built. "),
          x(
            "What AI is, how AI models learn, AI ethics and risk, AI regulation basics — these topics are well-covered by established providers at £50–£200 per licence per employee. Building equivalent content internally requires AI curriculum design expertise that most L&D teams do not have and would cost £80,000–£200,000 for equivalent quality. The buy decision for Tier 1 is almost always the right answer.",
            "The exception: organisations in regulated industries that require industry-specific AI regulation content (financial services, healthcare, legal) should supplement bought generic content with internally built compliance-specific modules.",
          ),
          s(" Buy Tier 1 generic awareness content from established providers. Invest internal design capacity in role-specific Tier 2 and 3 content."),
        ],
        [
          s("Role-specific, tool-specific working knowledge content (Tier 2) must be built internally because it does not exist externally. "),
          x(
            "No external provider has content for your specific AI forecasting tool, configured for your data, in your industry context, for your role-level outputs. This content can only be built by people who understand your tools, your workflows, and your quality standards. The most effective internal builders are AI practitioners who work in the function, not the L&D team who are experts in instructional design but not in the specific AI use case.",
            "Building Tier 2 content requires AI practitioners to spend time as content contributors — typically 20–30% of their time during a 12-week content development period. This is a significant time investment that must be planned and protected.",
          ),
          s(" Assign AI practitioners as content contributors for Tier 2 programme design. L&D provides the instructional design framework; practitioners provide the role-specific AI content."),
        ],
        [
          s("The procurement criteria for AI literacy vendors must go beyond content quality to include update velocity. "),
          x(
            "AI tools evolve rapidly: a content module built for an AI tool version released 12 months ago may be meaningless for the current version. AI literacy vendors who can update content within 4–6 weeks of major tool changes are more valuable than vendors with higher-quality static content. Ask any AI literacy vendor: 'How do you update content when a tool we are using releases a major new version? What is your update timeline?'",
            "Content currency is a risk factor for AI literacy investments that standard L&D procurement criteria do not include. An 18-month-old AI literacy module is often not just outdated — it is actively misleading, because it describes AI tool behaviours that no longer exist.",
          ),
          s(" Add content update velocity to AI literacy vendor evaluation criteria. A vendor who cannot update content in 4–6 weeks is not suitable for dynamic AI tool environments."),
        ],
      ],
      examples: [
        {
          title: "Retailer — buy/build allocation",
          body: "A retailer's L&D team allocated AI literacy budget: £45,000 for Tier 1 awareness content (bought from an established provider, covering all 600 commercial staff), £180,000 for Tier 2 role-specific content (built internally with 3 AI practitioner contributors over 16 weeks, covering 3 role groups and 4 specific tools), £65,000 for Tier 3 practitioner development (shadowing programme for 15 practitioners, designed internally). Total: £290,000. Comparable full-vendor programme quote: £420,000 for generic content that covered only Tier 1 and light Tier 2. The build/buy hybrid produced higher specificity at 31% lower cost.",
        },
        {
          title: "Financial services — practitioner-as-content-contributor",
          body: "A bank's AI credit analytics programme used 3 experienced AI credit analysts as content contributors for the Tier 2 programme design: 25% time allocation for 12 weeks. Their contributions: tool-specific scenario library (40 real-case prompts), failure mode examples from their own experience, quality evaluation criteria specific to credit decisions, and a role-specific quick reference guide. L&D provided the instructional structure. The resulting modules received 89% 'directly applicable to my work' ratings — versus 31% for the previous vendor-built generic programme.",
        },
        {
          title: "Technology company — vendor update velocity",
          body: "A technology company evaluated 3 AI literacy vendors on content update velocity. Vendor A: 'We update content annually with major course revisions.' Vendor B: 'We update content when significant platform changes occur, typically 4–8 weeks after release.' Vendor C: 'We update content continuously as tools evolve, with minor updates within 2 weeks and major redesigns within 6 weeks.' The company selected Vendor C at a 25% price premium. In the first 12 months, Vendor C's content was updated 8 times in response to AI platform changes. Vendor A's comparable content was not updated at all.",
        },
      ],
    }),
    buildSection({
      number: "7.7",
      title: "Sustaining literacy as AI tools evolve",
      subtitle: "How to prevent AI literacy from becoming stale as the tools change",
      take: "AI literacy depreciates at the speed of AI tool evolution. A programme designed for AI tools available today will have measurable knowledge currency gaps within 12 months as tools are updated, replaced, or supplemented. Sustaining AI literacy requires a continuous learning infrastructure — not annual course refreshes but a living system of regular updates, community practice, and capability review that tracks tool evolution and updates human capability in near-real-time.",
      why: "Organisations that treat AI literacy as a programme to be commissioned and completed are not building AI capability — they are building a snapshot of 2024 AI capability that will depreciate from the day it is delivered. Sustainable AI literacy is a continuous investment, not a one-time event.",
      paragraphs: [
        [
          s("An AI literacy update trigger system monitors tool changes and initiates content updates and learning notifications. "),
          x(
            "Major tool updates (new model releases, significant feature changes, UI redesigns) trigger: content review and update (L&D team), user notification (communication to affected employees), optional refresher module (for employees whose workflows are directly affected). Minor updates (minor UI changes, new features that extend but do not change existing workflows) trigger: notification to AI champions who cascade to teams. This system prevents the most common AI literacy currency failure: employees using outdated tool knowledge because no update mechanism existed.",
            "Tool update trigger systems require a monitoring responsibility — someone who tracks AI vendor roadmaps and release notes and translates product changes into learning implications. In a CoE, this is the AI technical lead's role; in a function, it is the AI workflow owner's role.",
          ),
          s(" Assign tool update monitoring to a named role for each AI tool deployed. Content currency is not self-maintaining."),
        ],
        [
          s("A community of practice sustains AI literacy through peer knowledge exchange as tools evolve. "),
          x(
            "A community of practice for AI literacy connects employees across functions who are at the same tier — practitioners with practitioners, working knowledge users with working knowledge users — to share new AI use cases, tool tips, failure modes, and emerging best practices. The community generates learning content continuously from operational experience, supplementing formal training with current, contextual knowledge.",
            "A community of practice for AI runs most sustainably when it has a named facilitator (an AI champion or CoE team member), a regular cadence (monthly 45-minute session), and a content contribution model (members bring one AI use case per session to share). Without structure, communities of practice exist for 3–6 months and then decay.",
          ),
          s(" Launch the AI community of practice before formal training ends — establish the habit of peer learning as a supplement to formal training, not as a replacement for it."),
        ],
        [
          s("Quarterly capability reviews identify employees whose AI literacy has drifted below the required level as tools evolve. "),
          x(
            "A 15-minute quarterly self-assessment for each AI-using employee, covering the current tool functionality, update changes, and output evaluation criteria, identifies employees who need a targeted refresher. Quarterly capability reviews are not high-stakes assessments — they are calibration tools that prevent the gap between tool capability and employee knowledge from growing silently.",
            "Employees who have been using an AI tool for 12 months often believe their knowledge is current when the tool has evolved significantly. Quarterly reviews create a habit of checking currency rather than assuming it.",
          ),
          s(" Implement quarterly 15-minute capability reviews for all Tier 2 and 3 employees. Frame them as calibration, not evaluation."),
        ],
      ],
      examples: [
        {
          title: "Financial services — update trigger system",
          body: "A bank assigned its AI operations analyst (part of the CoE) the role of monitoring AI vendor roadmaps and release notes for all 7 deployed AI tools. When the AI credit risk tool released a major update that changed the explanation interface, the analyst triggered the update protocol: content updated in 3 weeks, notification sent to 140 credit analysts, optional 90-minute refresher module opened to all users. 67% of credit analysts completed the refresher within 4 weeks. A post-update adoption check showed no decline in tool usage following the change — compared to a 34% temporary adoption drop following a previous major update with no update trigger system.",
        },
        {
          title: "Retailer — community of practice",
          body: "A retailer's AI community of practice ran monthly 45-minute sessions for 85 AI practitioners across 6 functions. Session structure: 3 members share an AI use case or tip (5 minutes each), group discussion (15 minutes), CoE update on new tools or changes (10 minutes). After 12 months: 78% monthly attendance, 142 use cases documented in the community knowledge library, and 12 cross-function AI tool adaptations where one function adopted an approach pioneered by another. The community generated 142 reusable knowledge assets at zero cost beyond the facilitator time.",
        },
        {
          title: "Healthcare — quarterly capability review",
          body: "A hospital trust implemented quarterly 15-minute capability reviews for 420 clinical AI tool users. The review covered 10 questions on current tool functionality — updated each quarter to reflect tool changes. Review results triggered automatic targeted refreshers for employees scoring below 70%. In the first year: 34% of employees required at least one targeted refresher (indicating that significant knowledge gaps were developing without the reviews). Post-refresher knowledge scores improved by an average of 28 percentage points. The trust estimated the quarterly review cost at £42,000 annually; the estimated cost of AI errors attributable to outdated knowledge in the year before the reviews: £190,000.",
        },
      ],
    }),
    buildSection({
      number: "7.8",
      title: "BL decision lens: your AI literacy programme design",
      subtitle: "Four design decisions that determine whether your AI literacy investment produces adoption",
      take: "An AI literacy programme that produces adoption rather than completion is defined by four decisions: targeting the right tiers for the right populations, designing to observable completion criteria rather than knowledge objectives, including supervised practice in the training budget, and building an update infrastructure that sustains currency as AI tools evolve. These four decisions are not design preferences — they are the difference between a compliance exercise and a capability investment.",
      why: "Business leaders who approve AI literacy budgets without specifying these four requirements will receive programmes that satisfy procurement criteria and produce completion rates — but not adoption. Specifying the requirements before the programme is commissioned is the business leader's responsibility, not the L&D team's.",
      paragraphs: [
        [
          s("Require a tier mapping before approving any AI literacy programme design or budget. "),
          x(
            "The tier mapping identifies which employees need Tier 1, Tier 2, or Tier 3 content based on their role and the AI tools they use or will use. Without the tier map, programme design will default to a single-tier delivery that under-serves some populations and over-serves others. The tier map should be the first deliverable in any AI literacy programme design process.",
            "A tier map produced in 2–3 hours of structured analysis with the HR business partner and function leaders typically reveals that 30–50% of the intended audience does not need the proposed training level — freeing budget for higher-impact investment in the populations who do.",
          ),
          s(" Reject any AI literacy programme design that does not include a tier map as its first deliverable."),
        ],
        [
          s("Require observable completion criteria before approving content design. "),
          x(
            "Before any content is designed or commissioned, the programme sponsor must be able to state: 'A participant has completed this programme when they can do X, Y, and Z in their actual workflow.' If X, Y, and Z cannot be defined, the programme objectives are not clear enough for effective design.",
            "Observable completion criteria convert a training objective into an adoption target. They also convert a vendor's scope conversation from 'how many hours of content do you need?' to 'what should employees be able to do at the end?'",
          ),
          s(" Require observable completion criteria as a prerequisite for any AI literacy content brief sent to vendors or internal L&D."),
        ],
        [
          s("Approve the supervised practice budget as a separate line item from content delivery. "),
          x(
            "The supervised practice component of AI literacy — the 4–8 weeks of guided workflow practice that produces ability rather than knowledge — is the component most at risk of being cut when budgets are tight. Approving it as a separate, protected line item signals that practice is not an optional add-on to content delivery but a core programme requirement.",
            "Supervised practice costs approximately 2–3× the content delivery cost per participant. This ratio surprises most budget holders. Presenting it explicitly — 'content delivery: £X, supervised practice: £2X, total programme: £3X' — enables a genuine trade-off conversation rather than a budget reduction that silently removes the highest-value component.",
          ),
          s(" Present supervised practice as a separate, protected budget line in every AI literacy investment case."),
        ],
      ],
      examples: [
        {
          title: "Tier mapping reduces programme cost by 30%",
          body: "A financial services company required a tier map before approving its AI literacy programme budget. The map identified: 180 senior leaders needed Tier 1 only (not Tier 2 as the original programme proposed), 340 employees were already at Tier 2 based on usage data (needed Tier 3 not Tier 2), and 420 employees in functions without deployed AI tools needed Tier 1 only. The redesigned programme cost 30% less than the original proposal and produced higher adoption because each population received the right tier of content.",
        },
        {
          title: "Observable criteria prevent scope debate",
          body: "A retailer required observable completion criteria before commissioning its AI inventory management literacy content. Stated criteria: 'Participant can generate a reorder recommendation using the AI tool, can evaluate the recommendation against stock constraints, and can override the recommendation with a documented reason within 8 minutes.' When a vendor proposed a 12-module programme, the retailer's L&D director said: 'Show me which modules produce these criteria — and remove the rest.' The programme went from 12 modules (8 hours) to 4 modules (2.5 hours plus supervised practice). Cost reduction: 55%. Adoption equivalence: confirmed.",
        },
        {
          title: "Supervised practice as protected budget",
          body: "An insurer presented its AI underwriting literacy budget to the CFO with supervised practice as a separate line: 'Content delivery: £85,000 (knowledge), Supervised practice: £165,000 (ability development — 6 weeks × 30 minutes per week per person × 680 people × coach cost). Total: £250,000.' The CFO questioned the supervised practice cost. The L&D director explained: 'This is the component that produces adoption. If we remove it, we will spend £85,000 and achieve 28% adoption, based on our previous comparable programme. If we keep it, we will achieve 70%+ adoption. The difference in business value is £420,000 per year in underwriting efficiency.' The full budget was approved.",
        },
      ],
    }),
  ],
  quiz: [
    {
      q: "A company reports 80% AI literacy training completion but only 22% AI tool adoption. What is the most likely explanation?",
      options: [
        "The AI tools are not suitable for the workforce",
        "The training was too short to be effective",
        "The programme was measured and designed for completion, not for behaviour change — it produced knowledge without adoption",
        "Employees need more time to adopt and adoption will increase naturally",
      ],
      correct: 2,
      correctFeedback:
        "Correct. A completion-optimised programme produces completions. Without supervised practice, role-specific content, and adoption-focused measurement, even high-completion programmes fail to change how people work. The 58-percentage-point gap between completion and adoption is the signature of a knowledge-only programme.",
      wrongFeedback:
        "The gap between 80% completion and 22% adoption reveals a design flaw: the programme produced knowledge without the behaviour change infrastructure (supervised practice, workflow integration, peer learning) needed for adoption. High completion with low adoption is the predictable outcome of programmes measured by completion rather than adoption.",
    },
    {
      q: "Which AI literacy tier is appropriate for a board member who makes AI investment decisions but will not directly use AI tools?",
      options: [
        "Tier 3 (Practitioner) — they need deep AI expertise to make good investment decisions",
        "Tier 2 (Working Knowledge) — they need to understand how to use the specific AI tools deployed",
        "Tier 1 (Awareness) — they need to evaluate AI claims, understand risk, and make sound investment decisions",
        "No AI literacy training — board members should rely on expert advice rather than developing their own AI knowledge",
      ],
      correct: 2,
      correctFeedback:
        "Correct. Tier 1 Awareness gives decision-makers the ability to evaluate AI proposals, challenge unrealistic claims, identify risk, and make sound investment decisions without requiring tool proficiency. Board members who lack Tier 1 literacy cannot provide genuine governance.",
      wrongFeedback:
        "Board members who do not use AI tools directly do not need Tier 2 or 3 capability. They need Tier 1 Awareness: sufficient conceptual understanding to distinguish AI evidence from AI marketing, evaluate proposals, and identify governance risks. Without Tier 1, board-level AI governance is approval-only, not scrutiny.",
    },
    {
      kind: "categorize",
      q: "Categorise these AI literacy content decisions as either 'Buy (external provider)' or 'Build (internally)':",
      categories: ["Buy (external provider)", "Build (internally)"],
      items: [
        { text: "Generic AI awareness module covering what AI is and how it works", category: 0 },
        { text: "AI ethics and regulation foundations course", category: 0 },
        { text: "Role-specific training for your AI demand forecasting tool", category: 1 },
        { text: "Workflow-embedded practice scenarios for your specific CRM AI features", category: 1 },
        { text: "Prompt library and quality evaluation guide for your AI contract review tool", category: 1 },
        { text: "Foundational data literacy e-learning for business users", category: 0 },
      ],
      correctFeedback:
        "Correct. Generic conceptual content (AI awareness, ethics, data literacy) is available at high quality from the market and should be bought. Tool-specific, workflow-specific, organisation-specific content (demand forecasting tool training, CRM scenarios, contract review prompt library) does not exist externally and must be built internally.",
      wrongFeedback:
        "Buy external when the content is generic enough to exist in the market at acceptable quality. Build internally when the content must be specific to your tools, workflows, and business context — because no external provider can produce it.",
    },
    {
      q: "A 30-day retention assessment of an AI literacy programme shows 38% retention for the error escalation protocol and 91% retention for tool navigation. What action should this trigger?",
      options: [
        "The entire programme should be redesigned",
        "Targeted reinforcement activities for the error escalation protocol only",
        "The employees who scored low on escalation should repeat the full programme",
        "Escalation protocol should be removed from the programme as it is too complex",
      ],
      correct: 1,
      correctFeedback:
        "Correct. Differentiated retention data enables targeted reinforcement: identify which specific content is not being retained and design reinforcement for that content only. 91% navigation retention needs no action; 38% escalation retention needs reinforcement (job aids, short refresher, manager prompting) for that specific topic.",
      wrongFeedback:
        "Retention assessment data should drive targeted reinforcement, not wholesale programme redesign. High retention areas (91% navigation) are performing well. The low-retention area (38% escalation) needs specific reinforcement activities — job aids, brief refresher modules, or manager-led scenario practice — not a full programme repeat.",
    },
    {
      kind: "order",
      q: "Order these AI literacy programme design steps in the correct sequence:",
      items: [
        "Map employees to AI literacy tiers based on role and deployed tools",
        "Define observable completion criteria for each tier",
        "Decide which content to buy externally and which to build internally",
        "Design supervised practice components proportionate to each tier's ability requirements",
        "Build an update trigger system and community of practice for sustained currency",
      ],
      prompt: "Drag to arrange in the correct sequence",
      correctFeedback:
        "Correct. Tier mapping sets the scope; completion criteria set the quality standard; buy/build decisions set the design approach; supervised practice ensures ability development; and the update infrastructure ensures the programme remains current as tools evolve.",
      wrongFeedback:
        "The sequence is: scope first (tier mapping), quality standard second (completion criteria), design approach third (buy/build), ability development fourth (supervised practice), sustainability fifth (update infrastructure). Each step builds on the previous; designing content before defining completion criteria produces content that cannot be evaluated against outcomes.",
    },
    {
      q: "What is the primary risk of an AI literacy programme that does not have a content update mechanism?",
      options: [
        "The programme becomes more expensive over time",
        "Employees' AI knowledge becomes outdated as tools evolve, producing incorrect AI tool use and reduced adoption",
        "Regulatory compliance requirements cannot be met with static content",
        "External vendors will revoke content licences without update commitments",
      ],
      correct: 1,
      correctFeedback:
        "Correct. AI tools evolve rapidly. Without an update mechanism, employees are using knowledge of tools that no longer behave as described — producing incorrect use, reduced output quality, and eventually adoption decline as the tool feels unpredictable because the user's mental model is outdated.",
      wrongFeedback:
        "The core risk is knowledge depreciation: employees who learned AI tools in a training programme 12 months ago may have outdated knowledge if the tools have been updated. Using outdated tool knowledge produces incorrect outputs, reduced quality, and adoption decline as the tool behaves unexpectedly relative to the employee's mental model.",
    },
  ],
});
