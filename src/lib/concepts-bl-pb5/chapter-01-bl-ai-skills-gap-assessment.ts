import { BL_CALLOUT, buildChapter, buildSection, s, x, sectionWithDiagram } from "../concepts-bl-helpers";

export const chapter01BlAiSkillsGapAssessment = buildChapter({
  slug: "bl-ai-skills-gap-assessment",
  number: 1,
  shortTitle: "AI Skills Gap Assessment",
  title: "Assessing the AI Skills Gap in Your Organisation",
  readingMinutes: 26,
  summary:
    "Every organisation deploying AI discovers the same problem: the gap between current team capability and the capability required to extract value from AI is wider than expected, and it sits in different places for different functions. Business leaders who map this gap before spending on tools or training avoid the most expensive mistake in AI adoption — building capability in the wrong places.",
  keyTakeaway:
    "An AI skills gap is not a single gap — it is a portfolio of gaps across awareness, working knowledge, practitioner skill, and leadership decision-making. Mapping all four layers before procuring training or hiring is the step that separates organisations that adopt AI effectively from those that spend on it without return.",
  pmCallout: BL_CALLOUT,
  sections: [
    buildSection({
      number: "1.1",
      title: "What an AI skills gap actually means",
      subtitle: "Why 'our people don't understand AI' is not a useful diagnosis",
      take: "An AI skills gap is not a single deficiency — it is a mismatch between the capabilities your teams currently have and the capabilities required to perform their roles effectively with AI tools in place. Generic statements about AI illiteracy obscure where the gap actually sits and lead to training that reaches the wrong people with the wrong content.",
      why: "Business leaders who commission AI training without first diagnosing the specific gap waste budget on courses that do not change behaviour. A precise gap definition produces a precise intervention — and a measurable improvement in adoption rates.",
      paragraphs: [
        [
          s("The AI skills gap has four distinct layers that rarely co-exist at the same severity in any single team. "),
          x(
            "Layer 1 is awareness: do people know what AI can and cannot do? Layer 2 is working knowledge: can people use AI tools in their daily workflow? Layer 3 is practitioner skill: can people configure, prompt, and evaluate AI outputs reliably? Layer 4 is leadership decision-making: can managers and leaders make sound AI investment and risk decisions?",
            "Most organisations have a severe Layer 1 gap in senior leadership and a severe Layer 3 gap in operational teams — but treat them with the same training solution, which solves neither.",
          ),
          s(" Diagnosing which layer is missing for which role group is the entire purpose of a skills gap assessment."),
        ],
        [
          s("The gap is not static — it evolves as AI tools change and as the organisation's AI ambition grows. "),
          x(
            "A team that is fully capable of using the AI tools deployed today may have a critical gap relative to the tools planned for deployment in 12 months. Skills gap assessment is a forward-looking exercise, not just a current-state audit.",
            "Assessments that only measure current capability against current tools produce a snapshot that is out of date before the report is published.",
          ),
          s(" Build your gap assessment against your 18-month AI roadmap, not your current tool stack."),
        ],
        [
          s("The gap distribution varies significantly by function and seniority. "),
          x(
            "In most organisations, front-line operations teams have the highest tool-use potential but the lowest awareness of AI capability. Senior leaders have the highest awareness exposure (through media and conferences) but the lowest working knowledge. Middle managers — who translate both downward and upward — often have the most critical gap because they must bridge both.",
            "Middle management AI capability is the most underinvested and highest-impact layer in most large organisations.",
          ),
          s(" A function-level gap heat map, not a single organisational score, is the assessment output that drives action."),
        ],
      ],
      examples: [
        {
          title: "Financial services — wrong layer, wasted training",
          body: "A mid-size bank commissioned AI awareness training for all 3,200 employees following a board mandate to 'build AI literacy.' Post-training surveys showed 80% completion and high satisfaction scores. Six months later, AI tool adoption in operations had not increased. A subsequent gap assessment revealed the real gap was Layer 3 — operational teams did not know how to configure and prompt the specific tools deployed, not Layer 1 awareness. The correct training would have cost 40% less and targeted 600 people, not 3,200.",
        },
        {
          title: "Retail chain — forward-looking gap saves 18 months",
          body: "A national retailer's AI team ran a gap assessment against their 18-month AI roadmap, which included deploying predictive inventory management and customer personalisation tools. The assessment revealed a critical gap in data interpretation skills among store operations managers — skills not required today but critical for the new tools. A 12-month learning programme was started 6 months before deployment. At launch, adoption rates were 70% in week one versus the industry average of 22% at three months.",
        },
        {
          title: "Professional services — middle management lens",
          body: "A consulting firm's gap assessment revealed that its most critical gap was in practice directors who managed client-facing AI tool deployments. Directors could not evaluate AI output quality, could not brief AI engineers effectively, and could not set client expectations about AI limitations. A targeted 40-hour practitioner programme for 85 directors — rather than firm-wide awareness training — produced a measurable improvement in client AI project delivery scores within six months.",
        },
      ],
    }),
    sectionWithDiagram({
      number: "1.2",
      title: "The four dimensions of AI literacy",
      subtitle: "Awareness, working knowledge, practitioner skill, and leadership decision-making — each requires different interventions",
      take: "AI literacy is not a single competency — it is a profile across four dimensions, and each dimension requires a different type of intervention. Conflating them produces blended training programmes that are broad enough to apply to everyone and deep enough to change no one's behaviour.",
      why: "Mapping each role group to its required literacy dimension before designing any learning intervention is the most important step in skills gap assessment. It prevents the most expensive mistake: deploying a 4-hour awareness course to 200 practitioners who need 40 hours of hands-on tool training.",
      paragraphs: [
        [
          s("Awareness literacy is the minimum threshold: the employee understands what AI is, what it cannot do, and why the organisation is investing in it. "),
          x(
            "Awareness does not require the ability to use any AI tool. It requires enough conceptual understanding to engage with AI-driven change without fear or magical thinking. A finance director who understands that AI forecasting tools are probabilistic, not certain, has awareness literacy — even if they never use the tool directly.",
            "Awareness training fails when it is designed by AI enthusiasts for AI sceptics, using language that assumes more baseline knowledge than the audience has.",
          ),
          s(" Design awareness content from the perspective of someone who has never used a digital assistant and build up, not down."),
        ],
        [
          s("Working knowledge literacy is the competency to use AI tools productively in a defined workflow. "),
          x(
            "A salesperson who can use an AI call analysis tool to prepare for customer meetings has working knowledge literacy for that tool. They do not need to understand how the model was trained — they need to know which outputs to trust, which to verify, and how to flag errors.",
            "Working knowledge is tool-specific, workflow-specific, and role-specific. It is the dimension that drives adoption, not awareness.",
          ),
          s(" Adoption metrics improve when working knowledge is built through workflow-embedded practice, not classroom instruction."),
        ],
        [
          s("Practitioner skill is the capacity to configure, prompt, evaluate, and improve AI tools beyond their default settings. "),
          x(
            "A marketing manager who can write effective prompts, evaluate output quality against business criteria, and iterate on prompt design to improve results has practitioner skill. This dimension is required for roles that direct AI tools rather than simply use them.",
            "Practitioner skill is the scarcest dimension in most organisations and the most directly correlated with AI value extraction. One practitioner embedded in a team typically lifts the working knowledge of the entire team within 90 days.",
          ),
          s(" Identify and develop two to four practitioners per function before investing in broad working knowledge training."),
        ],
      ],
      examples: [
        {
          title: "Healthcare — dimension mapping prevents over-training",
          body: "A hospital system's gap assessment mapped 14 role groups to required literacy dimensions. Clinical consultants required awareness and working knowledge for documentation AI tools. Data analysts required practitioner skill for model evaluation. The IT team required practitioner and integration skills. The board required awareness and leadership decision-making. Designing dimension-specific training rather than a single programme cut training budget by 35% while increasing adoption.",
        },
        {
          title: "Manufacturer — practitioner seeding strategy",
          body: "A manufacturing company identified that it had zero practitioners in its operations function of 400 people. Rather than training 400 people to working knowledge standard first, it selected 8 high-aptitude operators for an intensive 80-hour practitioner programme. These 8 practitioners then coached their immediate colleagues. At three months, working knowledge adoption across 400 people was at 58% — achieved at 30% of the cost of a broad training rollout.",
        },
        {
          title: "Insurance — leadership decision-making gap",
          body: "An insurer's gap assessment revealed that its leadership team — all of whom had received AI awareness training — could not make sound AI investment decisions. They could describe AI concepts but could not evaluate an AI vendor proposal, assess implementation risk, or challenge engineering timelines. A six-session leadership decision-making programme focused on procurement, risk, and governance lifted leadership AI decision quality as measured in a post-programme structured evaluation exercise.",
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
      title: "Skills gap assessment methods and tools",
      subtitle: "Surveys, role analyses, tool audits, and shadow sessions — when to use each",
      take: "A skills gap assessment uses four complementary methods: self-report surveys for scale and speed, role-capability analyses for precision, tool usage audits for ground truth, and shadow sessions for qualitative depth. No single method is sufficient. The combination produces a gap map that is both broad enough to cover the organisation and deep enough to design effective interventions.",
      why: "Leaders who commission a survey alone get self-reported capability data that is optimistically biased by 30–40% versus observed capability. Leaders who run shadow sessions alone get depth without scale. Combining methods produces a gap assessment that withstands budget scrutiny.",
      paragraphs: [
        [
          s("Self-report surveys are the fastest way to baseline awareness and working knowledge across large populations. "),
          x(
            "A 15-question validated survey deployed to 500 people takes two weeks and costs under £5,000. The limitation is self-report bias: people consistently overestimate their AI capability because they conflate using consumer AI tools (ChatGPT for personal use) with working knowledge of enterprise AI tools.",
            "Benchmark self-report scores against a small validated sample — 20 people assessed by direct observation — to calculate your organisation's self-report inflation factor. Typically 25–40%.",
          ),
          s(" Use survey data for relative gap comparisons across teams, not for absolute capability claims."),
        ],
        [
          s("Role-capability analysis maps the AI tasks required in a role to the capability required to perform them. "),
          x(
            "A role-capability matrix has two axes: AI tasks the role requires (prompt creation, output review, data interpretation, model configuration) and proficiency levels required (aware, working, practitioner). Gaps are cells where current proficiency is below required proficiency.",
            "Role-capability analysis is time-intensive — a thorough analysis of 20 distinct roles takes 3–4 weeks — but produces the most actionable output because it maps gaps to specific roles and tasks.",
          ),
          s(" Prioritise role-capability analysis for the 10–15 roles with the highest AI deployment impact."),
        ],
        [
          s("Tool usage audits extract actual usage data from deployed AI platforms to reveal real adoption versus reported adoption. "),
          x(
            "Most enterprise AI tools expose usage dashboards: login frequency, feature usage depth, session length, and output actions (accepted, edited, rejected). Comparing this data against self-report survey results consistently reveals adoption gaps 40–60% larger than survey data suggests.",
            "Usage audits require IT cooperation to access platform data and HR cooperation to match user IDs to roles. Build both partnerships before commissioning the audit.",
          ),
          s(" Tool usage audits are the most credible input to a skills gap business case because they show actual behaviour, not intention."),
        ],
      ],
      examples: [
        {
          title: "Retail — survey inflation exposed",
          body: "A retailer deployed a 15-question AI capability survey to its 280-person buying and merchandising team. 74% of respondents rated themselves 'capable' or 'highly capable' of using AI forecasting tools. A tool usage audit of the same team revealed that only 31% had logged into the AI forecasting platform in the previous 30 days, and only 11% had used more than the default report output. The inflation factor was 2.4×. Budget was reallocated from advanced training to basic workflow adoption support.",
        },
        {
          title: "Financial services — role-capability matrix",
          body: "A wealth management firm ran role-capability analysis across its 18 most AI-critical roles: portfolio analysts, client advisors, risk managers, compliance officers, and operations leads. The matrix identified 7 roles with critical gaps in output review skills — the ability to assess whether an AI output was reliable enough to act on. A targeted output review workshop for 85 people in those 7 roles was deployed in 6 weeks, at one-fifth the cost of the firm-wide AI course originally planned.",
        },
        {
          title: "Professional services — shadow sessions reveal hidden barrier",
          body: "A consulting firm supplemented its survey and tool audit with 12 one-hour shadow sessions observing consultants using an AI research tool. The shadow sessions revealed a gap that surveys and audits had missed: consultants did not know how to cite or acknowledge AI-generated content in client deliverables, and were avoiding the tool to prevent professional risk. A one-page citation protocol deployed via a 30-minute briefing increased tool adoption by 45% in two weeks — no training required.",
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
    buildSection({
      number: "1.4",
      title: "Mapping current capabilities to AI role requirements",
      subtitle: "Turning assessment data into a gap heat map by function and role",
      take: "The output of a skills gap assessment is not a report — it is a heat map that shows, for each function and key role, the distance between current AI capability and required AI capability. A heat map drives prioritisation decisions that a report cannot: it shows clearly where the gap is largest, where it is most strategically important, and where it is already closed.",
      why: "Heat maps convert abstract gap data into visible decisions. A leadership team that can see a red cell in 'operations manager — AI output review' will fund training for that specific cell. The same data presented as a narrative report produces a request for further analysis, not a budget allocation.",
      paragraphs: [
        [
          s("Build the heat map on two axes: business function (vertical) and literacy dimension (horizontal). "),
          x(
            "Cells contain a traffic light score: green (capability meets or exceeds requirement), amber (capability is within one level of requirement), red (capability is two or more levels below requirement). The business function axis should be ordered by strategic AI importance, placing your highest-priority functions at the top.",
            "A heat map of 8 functions × 4 literacy dimensions gives a 32-cell view of the entire organisation's gap profile. This is the minimum resolution required for budget-level prioritisation decisions.",
          ),
          s(" Add a fifth column: estimated timeline to close the gap at current intervention pace. Red cells with long closure timelines are your critical risk items."),
        ],
        [
          s("Overlay strategic AI deployment plans on the heat map to identify time-critical gaps. "),
          x(
            "If your organisation plans to deploy an AI customer service tool in Q3 and the heat map shows a red cell in customer service working knowledge, that gap has a hard deadline. Time-critical gaps require accelerated interventions — intensive bootcamps rather than learning programmes, embedded coaching rather than online courses.",
            "The overlay of deployment timelines onto the gap heat map converts a capability planning exercise into a risk management exercise — which is language leadership teams fund.",
          ),
          s(" Present the heat map to the CISO, CTO, and HR leadership alongside the AI deployment roadmap to surface resourcing decisions."),
        ],
        [
          s("Identify capability islands — pockets of high capability surrounded by low capability — and leverage them. "),
          x(
            "Most organisations have small clusters of AI-capable individuals in unexpected places: a finance analyst who has been using AI tools independently, a marketing manager who has completed external AI courses, a customer service lead who has built internal prompt libraries. These capability islands are peer coaching assets, not just individual contributors.",
            "Capability island mapping consistently identifies 8–15 informal AI champions per 1,000 employees who can be formally activated at low cost.",
          ),
          s(" Map capability islands in the same exercise as gap identification — the two outputs together define both the problem and the internal resources to solve it."),
        ],
      ],
      examples: [
        {
          title: "Logistics company — heat map drives board decision",
          body: "A logistics company presented its AI skills gap heat map to the board alongside its 18-month AI deployment plan. The map showed critical red cells in operations management (AI output review), commercial leadership (AI vendor decision-making), and customer service (working knowledge). The board approved a £1.2M capability investment in three targeted programmes. Without the heat map, the HR team had been trying to secure budget for a £2.8M firm-wide AI learning programme for two years.",
        },
        {
          title: "Healthcare — time-critical gap management",
          body: "A hospital trust's heat map overlay revealed that its surgical scheduling department — due to receive an AI scheduling tool in 14 weeks — had a critical gap in working knowledge. Standard e-learning would not close the gap in time. The team deployed a 3-day intensive workshop followed by 6 weeks of embedded practitioner support from a clinical informatics specialist. Adoption at tool launch was 78% in week one versus the organisation's previous AI rollout average of 19% at month three.",
        },
        {
          title: "Media company — capability island activation",
          body: "A media company's gap assessment identified 11 capability islands across its 800-person commercial and content teams — individuals who had built significant AI practitioner skill independently. Rather than hiring an external AI training firm, the company formalised these 11 individuals as internal AI coaches, gave each a 10% time allocation and a structured coaching protocol, and ran a peer-led capability programme. Cost was £65,000 versus the £380,000 external training quote. Six-month adoption results were comparable.",
        },
      ],
    }),
    buildSection({
      number: "1.5",
      title: "Prioritising gaps by business impact",
      subtitle: "Not all gaps are equally urgent — a prioritisation matrix for limited training budgets",
      take: "A skills gap assessment will identify more gaps than any training budget can close simultaneously. Prioritisation requires a two-axis matrix: business impact of closing the gap (revenue, risk, or strategic importance) versus time urgency (deployment timeline, competitive pressure, or regulatory deadline). High-impact, high-urgency gaps receive immediate intervention; high-impact, low-urgency gaps receive planned programmes.",
      why: "HR teams that present gap assessments without prioritisation frameworks receive one of two responses from leadership: they are asked to address all gaps simultaneously (impossible) or to start with the most visible gaps (which are rarely the most important). A prioritisation matrix takes the politics out of the conversation and replaces it with explicit trade-offs.",
      paragraphs: [
        [
          s("The impact axis measures what changes if the gap is closed — and what deteriorates if it is not. "),
          x(
            "Impact has four categories: revenue impact (closing the gap enables AI tools that directly improve revenue), risk mitigation (closing the gap prevents AI errors that carry regulatory or reputational risk), strategic enablement (closing the gap unlocks the organisation's AI strategy), and operational efficiency (closing the gap removes friction from daily workflows). Score each gap 1–4 across all four categories and sum the scores.",
            "Gaps that score highest on risk mitigation often receive the least investment because they prevent negatives rather than creating positives. Make the risk prevention value explicit in the scoring.",
          ),
          s(" Score gaps against all four impact categories before comparing them — a gap that scores low on revenue but high on risk is not a low-priority gap."),
        ],
        [
          s("The urgency axis measures the cost of delay — not the preference for speed. "),
          x(
            "Urgency has three drivers: deployment timeline (an AI tool deploying in 60 days creates a hard deadline), competitive pressure (a competitor deploying AI in a customer-facing function creates market urgency), and regulatory deadline (an AI regulation or audit creating a compliance date). Gaps without any of these urgency drivers are low-urgency regardless of how much leadership wants them closed.",
            "Many gaps that feel urgent are simply highly visible — the CEO mentioned AI in the last town hall, so everything AI-related feels urgent. Urgency scoring separates genuine time pressure from leadership anxiety.",
          ),
          s(" Apply urgency scoring rigorously and be prepared to defend low-urgency scores for gaps that have high organisational visibility."),
        ],
        [
          s("Prioritisation decisions must be made with, not for, functional leaders. "),
          x(
            "A gap that HR has scored as high-impact may be scored as low-impact by the function it serves if the function does not believe AI will change their work significantly. Running the prioritisation matrix as a joint exercise between HR/L&D and functional leaders produces buy-in for the resulting training investment — and surfaces disagreements about AI's functional relevance before they become adoption obstacles.",
            "Functional leaders who participate in gap prioritisation have a direct stake in the training succeeding. Functional leaders who receive a training plan from HR have no ownership of the outcome.",
          ),
          s(" Run the prioritisation workshop with functional leaders, not for them."),
        ],
      ],
      examples: [
        {
          title: "Bank — risk gap elevated above revenue gap",
          body: "A commercial bank's gap prioritisation matrix revealed that its highest-revenue-impact gap was in sales AI tools (CRM forecasting and outreach automation), while its highest-risk gap was in compliance AI tools (automated regulatory reporting). The sales gap had high leadership visibility; the compliance gap was invisible to senior leaders because the compliance team had not raised it. The prioritisation exercise elevated the compliance gap to the top of the training queue — three months before a regulatory audit that would have exposed the gap.",
        },
        {
          title: "Manufacturer — urgency discipline prevents distraction",
          body: "A manufacturer's L&D team was under pressure from the CEO to run company-wide AI awareness training after a keynote at an industry conference. The gap prioritisation matrix revealed that awareness was not a priority gap for any of the three functions deploying AI tools in the next 12 months — their gaps were in working knowledge and practitioner skill. The matrix gave the L&D director the evidence to redirect the CEO's request to a targeted leadership briefing rather than a £600,000 company-wide programme.",
        },
        {
          title: "Professional services — joint prioritisation drives buy-in",
          body: "A law firm ran a gap prioritisation workshop with six practice directors rather than presenting them with a pre-built training plan. The workshop revealed that directors disagreed on which AI tools were actually strategically important — disagreements that would have surfaced as adoption resistance six months later. Resolving the disagreements during the prioritisation workshop meant that the resulting training plan had the explicit support of all six directors, producing adoption rates that were 35% higher than the firm's previous training rollouts.",
        },
      ],
    }),
    buildSection({
      number: "1.6",
      title: "Building your skills gap report for leadership",
      subtitle: "The five elements a leadership-ready gap report must contain",
      take: "A skills gap report that does not secure budget is not a report — it is a document. A leadership-ready gap report contains five elements: a one-page heat map with business impact overlay, a gap-to-deployment timeline risk analysis, a prioritised intervention plan with cost and timeline, a success metrics framework, and a clear decision request. The report is a procurement document for learning investment, not an academic assessment.",
      why: "L&D teams lose gap assessment budget requests because they present capability data without connecting it to business outcomes. Leadership teams fund training when they can see a direct line from training investment to AI deployment success, not when they receive a summary of current skill levels.",
      paragraphs: [
        [
          s("The heat map is the report's anchor — present it on page one before any narrative. "),
          x(
            "A one-page heat map with colour coding and a deployment timeline overlay communicates the core message in 60 seconds: here is where we are, here is what we need, here is when we need it. All supporting narrative explains the heat map rather than preceding it.",
            "Leadership teams form their judgement in the first 90 seconds of a presentation. A narrative summary on page one delays the moment when the decision-maker has enough information to form a view.",
          ),
          s(" Lead with the heat map, follow with the narrative, and close with the decision request."),
        ],
        [
          s("The risk analysis section translates gaps into business risk language that leadership teams respond to. "),
          x(
            "For each critical gap, state the risk in three parts: the AI tool or initiative affected, the consequence of the gap remaining open at the deployment date, and the probability of that consequence. A risk written as 'the Q3 customer service AI deployment is at high risk of sub-30% adoption if 120 customer service managers do not have working knowledge training before go-live' is fundable. 'Customer service managers lack AI working knowledge' is not.",
            "Business risk framing converts a capability gap into a project risk — which is a category of problem that leadership teams have established funding mechanisms to address.",
          ),
          s(" Write every gap in the risk analysis section as a named initiative risk with probability and consequence."),
        ],
        [
          s("The decision request must be binary — fund the plan as proposed, or fund a defined alternative. "),
          x(
            "Reports that end with 'we recommend further investigation' or 'we invite feedback on the proposed approach' do not produce budget decisions. A decision request states: 'We are requesting £X to deliver Y programme for Z people by Date D, which will close gaps A, B, and C and reduce AI deployment risk on initiatives P, Q, and R. If budget is not available, the alternative is to defer initiatives P and Q by six months.'",
            "Providing a defined consequence for the alternative makes the cost of inaction explicit and comparable to the cost of action.",
          ),
          s(" Every skills gap report should end with a decision, not a discussion."),
        ],
      ],
      examples: [
        {
          title: "Retailer — heat map secures budget in 20 minutes",
          body: "An L&D director at a national retailer had been seeking AI training budget for eight months without success. After a gap assessment, she rebuilt the business case around a single heat map showing that five of the six AI deployments planned for the next 12 months had critical skill gaps in the deploying function. The heat map took 10 minutes to build from existing data. The budget request was approved in a 20-minute executive discussion — the first AI training budget the organisation had approved.",
        },
        {
          title: "Financial services — risk framing converts rejection",
          body: "A bank's first AI training budget request was rejected by the CFO as 'discretionary spend.' The L&D team resubmitted with each gap framed as a named project risk: the AI credit scoring deployment risk (probability: high; consequence: regulatory compliance gap), the AI fraud detection deployment risk (probability: medium; consequence: 8-week delay to deployment). The CFO approved the budget in the next planning cycle, categorising it as risk mitigation capex rather than training expense.",
        },
        {
          title: "Logistics — binary decision prevents scope creep",
          body: "A logistics company's skills gap report presented three programme options: a comprehensive programme (£850K), a targeted critical-gaps programme (£320K), and a minimum viable programme (£140K). Each option showed which deployment risks it mitigated and which it left open. Leadership selected the targeted programme without negotiation — the comparison of options made the trade-offs visible enough to make a decision without further analysis. Without the binary framing, the request would have entered an 'optimisation' process that typically added six months to budget approval.",
        },
      ],
    }),
    buildSection({
      number: "1.7",
      title: "Common mistakes in AI skills assessments",
      subtitle: "The seven assessment errors that produce gap maps no one acts on",
      take: "Skills gap assessments fail in predictable ways: assessing current state against current tools rather than future requirements, using self-report data without validation, treating the organisation as homogeneous, ignoring leadership as an assessment population, producing a report without a decision request, assessing generic AI literacy rather than role-specific AI capability, and running the assessment without functional leader involvement. Each mistake is recoverable — but only if identified before the report is published.",
      why: "The most expensive outcome of a skills gap assessment is a thorough report that no one acts on. Understanding why assessments fail to drive action is as important as understanding how to run them well. Leaders who commission assessments that do not produce budget decisions waste assessment cost and lose credibility for the next attempt.",
      paragraphs: [
        [
          s("The most common mistake is assessing generic AI literacy rather than role-specific AI capability. "),
          x(
            "A question like 'how comfortable are you with AI?' produces data that cannot be acted on. A question like 'how confident are you in evaluating whether an AI-generated demand forecast is reliable enough to base a purchase order on?' produces role-specific data that maps to a specific training intervention.",
            "Generic AI literacy surveys are the assessment equivalent of asking 'are you healthy?' rather than 'can you run 5km in under 30 minutes?' Both are about health; only one produces an actionable training prescription.",
          ),
          s(" Design every assessment question against a specific job task, not against a general AI concept."),
        ],
        [
          s("Excluding leadership from the assessment population is a structural error that guarantees adoption failure. "),
          x(
            "AI adoption fails most often not because front-line employees lack skill, but because their managers cannot model AI behaviour, cannot evaluate AI outputs, and cannot remove the blockers that prevent adoption. Assessing only operational populations while exempting leadership produces a training programme that addresses the symptom, not the cause.",
            "The most common reason AI tools are not used is that a manager has said — explicitly or implicitly — 'I don't really use this tool myself.' Leadership behaviour is the primary adoption driver, not training content.",
          ),
          s(" Include every management layer from team leader to C-suite in the assessment population."),
        ],
        [
          s("Running the assessment without functional leader involvement produces a gap map that functional leaders will not own. "),
          x(
            "When HR conducts a gap assessment of a function and presents findings to that function's leader, the leader's first response is often to dispute the methodology or the results. When the function's leader co-designs the assessment criteria and participates in the gap validation, the resulting gap map belongs to them. Ownership is the difference between a training plan that leaders champion and one they comply with reluctantly.",
            "Functional leader involvement in gap assessment design takes 4–6 additional hours of their time. The return is a training programme they will actively sponsor.",
          ),
          s(" Budget 4–6 hours of functional leader time for gap assessment co-design before the assessment begins."),
        ],
      ],
      examples: [
        {
          title: "Insurance — generic survey produces no action",
          body: "An insurer deployed a 12-question AI literacy survey to 1,800 employees. The survey used generic questions about AI familiarity and comfort. Results showed 'moderate AI literacy' across the organisation with 'higher comfort in younger employees.' The report was circulated, discussed in two meetings, and then filed. No training was commissioned because no gap was specific enough to act on. The survey cost £35,000. The organisation's AI adoption rate remained unchanged for 18 months.",
        },
        {
          title: "Retail — leadership exclusion costs adoption",
          body: "A retailer's AI skills assessment covered 340 store associates and excluded store managers and regional directors. A 12-week working knowledge programme was deployed to associates. Adoption at month three was 28% — well below the 65% target. Post-analysis interviews revealed that store managers had no knowledge of the AI tools, had not been briefed on their purpose, and had been discouraging associate use because the tools were unfamiliar. A subsequent 2-day manager programme was the intervention that actually moved adoption.",
        },
        {
          title: "Technology company — co-design produces sponsorship",
          body: "A technology firm's L&D team ran a gap assessment co-design session with its eight functional leaders before deploying any survey. Leaders defined the AI tasks their teams needed to perform, the proficiency standards required, and the business outcomes at stake. When the assessment results were presented, all eight leaders immediately recognised the gaps as their own problems — and three volunteered budget from their own function's training allocation to supplement the central programme. Co-design produced £180,000 in additional funding with no additional persuasion.",
        },
      ],
    }),
    buildSection({
      number: "1.8",
      title: "BL decision lens: your AI skills gap assessment",
      subtitle: "The four decisions you can make in your next leadership meeting based on gap assessment data",
      take: "A skills gap assessment is not a study — it is a decision-making tool. The four decisions it enables are: which functions to prioritise for AI capability investment, which deployment timelines carry skills risk, whether to use internal capability islands or external providers, and what success metrics to set before training begins. Each decision is executable within 30 days of assessment completion.",
      why: "Business leaders who treat skills gap assessments as analytical exercises defer the decisions that the assessment exists to enable. The gap map is only valuable when it produces a funded intervention within 90 days. After 90 days without action, the assessment is out of date and the budget case must be rebuilt.",
      paragraphs: [
        [
          s("Decision 1: prioritise which function receives AI capability investment first. "),
          x(
            "The heat map's intersection of strategic AI importance and current capability gap produces a clear first-mover recommendation. The function with the highest-impact AI deployment in the next 12 months and the largest current capability gap is the right starting point — not the function that asks most loudly or the function that leadership finds most visible.",
            "Starting with the wrong function produces a showcase that does not scale. Starting with the right function produces a result that funds the next round.",
          ),
          s(" Name the first function in the leadership meeting. Do not leave without agreement on the starting point."),
        ],
        [
          s("Decision 2: which deployment timelines carry material skills risk and require mitigation. "),
          x(
            "For each AI deployment in the next 18 months, state explicitly whether the current gap assessment shows a capability risk to deployment success. If yes, the deployment date must either be moved or an accelerated capability programme must be funded and staffed. This decision converts a capability planning discussion into a project governance decision.",
            "Capability risk is a project delivery risk, not just a training preference. Framing it as project risk gives the decision the right level of organisational urgency.",
          ),
          s(" Add capability readiness as a standing item on every AI deployment project status review."),
        ],
        [
          s("Decision 3: set the success metrics before training begins, not after. "),
          x(
            "Agree in the leadership meeting: what does successful capability development look like at 30, 90, and 180 days? What adoption rate would indicate the gap has been closed? What business outcome change (error rate, output quality, decision speed) would confirm capability improvement? Setting metrics before training begins prevents post-hoc rationalisation of outcomes and gives the programme a clear mandate.",
            "Training programmes without pre-agreed success metrics always appear to have succeeded because the evaluation criteria are defined after the result is known.",
          ),
          s(" Set three observable metrics at three time horizons before a single training programme is commissioned."),
        ],
      ],
      examples: [
        {
          title: "Four decisions in 45 minutes",
          body: "A financial services leadership team received the gap heat map at the start of a 45-minute agenda item. In that session: they agreed that the risk function was the first priority (Decision 1); they flagged the Q2 AI fraud detection deployment as carrying high capability risk and added a 60-day capability sprint to the project plan (Decision 2); they agreed that 70% tool adoption at 90 days was the success metric for the risk function programme (Decision 3); and they assigned a capability island from the data science team as internal coach rather than procuring external training (Decision 4). All four decisions were made before the agenda item closed.",
        },
        {
          title: "Pre-agreed metrics prevent post-programme dispute",
          body: "An insurer pre-agreed its AI capability success metrics before a claims processing AI rollout: 65% of claims managers logging into the AI tool weekly by month three, 80% reduction in manual re-work flagged by AI quality review by month six. When the programme completed, the 65% target was met at month three and the 80% re-work reduction was met at month five. The clear pre-agreed metrics enabled the L&D team to declare success with evidence — and secure budget for the next function's programme without a new business case.",
        },
        {
          title: "Capability island decision saves £200K",
          body: "A retailer's leadership team, reviewing the gap assessment, asked whether internal capability islands could be used to close the gap rather than commissioning external training. The assessment had already mapped 9 internal practitioners across five functions. The decision to activate these 9 as formal peer coaches — with 20% time allocation, a structured coaching playbook, and a £15,000 support budget — delivered comparable results to the £220,000 external programme that had been the original plan.",
        },
      ],
    }),
  ],
  quiz: [
    {
      q: "A business leader commissions AI awareness training for all 3,000 employees. Six months later, AI tool adoption has not increased. What was most likely the root cause?",
      options: [
        "The training vendor used poor quality content",
        "Employees were assessed against the wrong literacy dimension — working knowledge was needed, not awareness",
        "AI tools are inherently difficult to adopt regardless of training",
        "The training was delivered too quickly for employees to absorb",
      ],
      correct: 1,
      correctFeedback:
        "Correct. Deploying awareness training when the gap is in working knowledge — the ability to use the specific tools in daily workflow — is the most common and expensive AI training mistake. Diagnosing the literacy dimension first prevents this error.",
      wrongFeedback:
        "The core issue is dimension mismatch: awareness training addresses Layer 1 (conceptual understanding), but adoption failure is typically a Layer 2 gap (working knowledge — can people use the specific tool in their specific workflow). Assess the dimension before designing the intervention.",
    },
    {
      q: "What is the primary limitation of self-report surveys as a skills gap assessment method?",
      options: [
        "They are too expensive to deploy at scale",
        "People consistently overestimate their AI capability, producing optimistically biased data",
        "Survey responses are anonymous and cannot be linked to specific roles",
        "Surveys cannot measure practitioner-level skills",
      ],
      correct: 1,
      correctFeedback:
        "Correct. Self-report bias in AI capability assessments consistently runs 25–40% above observed capability — partly because employees conflate consumer AI tool familiarity with enterprise AI working knowledge. Validate survey data against a small observed sample to calculate your organisation's inflation factor.",
      wrongFeedback:
        "Self-report surveys are cost-effective and scalable. Their primary limitation is optimism bias: people rate their AI capability 25–40% higher than observed behaviour reveals. Calibrate survey data against observed samples before using it for gap sizing.",
    },
    {
      kind: "order",
      q: "Order these steps to build an actionable AI skills gap report:",
      items: [
        "Run multi-method assessment: survey, role analysis, tool usage audit",
        "Build function × literacy dimension heat map with deployment timeline overlay",
        "Prioritise gaps by business impact and urgency",
        "Design targeted interventions for prioritised gaps",
        "Present to leadership with a binary decision request",
      ],
      prompt: "Drag to arrange in the correct sequence",
      correctFeedback:
        "Correct. The sequence moves from assessment to visualisation to prioritisation to intervention design to leadership decision — each step building on the previous.",
      wrongFeedback:
        "Assessment precedes visualisation. Visualisation enables prioritisation. Prioritisation guides intervention design. Intervention design provides the basis for the leadership decision request. Do not jump to intervention design before the gap map is complete.",
    },
    {
      q: "A business leader finds 'capability islands' during a gap assessment. What is the most strategically valuable use of these individuals?",
      options: [
        "Promote them to AI lead roles immediately",
        "Use them as peer coaches to accelerate working knowledge across their teams",
        "Assign them to the Centre of Excellence to centralise AI capability",
        "Document their skills for the HR competency framework",
      ],
      correct: 1,
      correctFeedback:
        "Correct. Capability islands — individuals with practitioner skill embedded in operational teams — are the highest-leverage internal training asset. Formalising them as peer coaches typically lifts team working knowledge within 90 days at a fraction of external training cost.",
      wrongFeedback:
        "Promoting or centralising capability islands removes them from the operational teams where their coaching impact is highest. Their value is contextual — they understand the specific workflows, tools, and challenges of their team, which makes their coaching more effective than external training.",
    },
    {
      kind: "categorize",
      q: "Categorise these assessment activities as either 'Quantitative Methods' or 'Qualitative Methods':",
      categories: ["Quantitative Methods", "Qualitative Methods"],
      items: [
        { text: "Self-report capability survey across 500 employees", category: 0 },
        { text: "Tool usage audit from AI platform dashboards", category: 0 },
        { text: "Role-capability matrix scoring", category: 0 },
        { text: "Shadow sessions observing tool use in live workflows", category: 1 },
        { text: "Functional leader interviews on AI task requirements", category: 1 },
        { text: "Peer focus groups exploring adoption barriers", category: 1 },
      ],
      correctFeedback:
        "Correct. Quantitative methods (surveys, audits, matrices) provide scale and comparability. Qualitative methods (shadow sessions, interviews, focus groups) provide depth and context. A robust gap assessment uses both.",
      wrongFeedback:
        "Quantitative methods produce data that is scalable and comparable across populations. Qualitative methods produce insight that explains why gaps exist and what barriers prevent closing them. Shadow sessions, interviews, and focus groups are qualitative regardless of whether they produce numerical outputs.",
    },
    {
      q: "Why should success metrics for an AI capability programme be set before training begins rather than after?",
      options: [
        "So that training providers can tailor content to the target metrics",
        "To prevent post-hoc rationalisation where evaluation criteria are defined after results are known",
        "Because post-training metric setting is prohibited by most HR compliance frameworks",
        "So that employees know what scores they need to achieve to pass the programme",
      ],
      correct: 1,
      correctFeedback:
        "Correct. Training programmes without pre-agreed success metrics can always be declared a success because the criteria are defined to fit the outcomes. Pre-agreed metrics create a genuine accountability standard and give the programme team a clear mandate to pursue.",
      wrongFeedback:
        "Pre-agreed metrics prevent a specific failure mode: defining success after you know the result. When metrics are set after training, they tend to reflect what was achieved rather than what was needed — making every programme appear successful regardless of whether it changed behaviour.",
    },
  ],
});
