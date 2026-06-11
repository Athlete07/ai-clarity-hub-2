import { buildChapter, buildSection, s, x, BL_CALLOUT, sectionWithDiagram } from "../concepts-bl-helpers";

export const chapter02BlAiInHrPeopleFunction = buildChapter({
  slug: "bl-ai-in-hr-people-function",
  number: 2,
  shortTitle: "AI in HR — People Function",
  title: "AI in HR and the People Function — Efficiency, Ethics, and the Human Stakes",
  readingMinutes: 25,
  summary:
    "AI in HR spans recruiting, learning, engagement, and workforce planning. The function that most directly affects people's lives and livelihoods carries the highest ethical and regulatory stakes for AI deployment. CHROs who understand this lead transformation responsibly — and avoid the employment law, bias, and trust failures that define cautionary tales.",
  keyTakeaway:
    "HR AI delivers measurable value in three zones: talent acquisition efficiency, learning personalisation, and workforce analytics. The CHRO's governance mandate is ensuring every AI-assisted people decision maintains human accountability, meets anti-discrimination law, and earns employee trust rather than eroding it.",
  pmCallout: BL_CALLOUT,
  sections: [
    sectionWithDiagram({
      number: "2.1",
      title: "The HR AI Landscape — Opportunity and Obligation",
      subtitle: "What AI actually does in HR, where the real returns are, and where the regulatory exposure concentrates",
      take: "HR AI is not a single category — it is a spectrum from high-volume, low-stakes process automation to high-stakes decisions about people's careers and livelihoods. The CHRO's job is to match the governance level to the stakes, not to apply uniform caution or uniform enthusiasm.",
      why: "HR AI that improves operational efficiency while eroding employee trust or introducing bias is not a success. The people function's license to operate depends on being the function employees trust most — AI must extend that trust, not compromise it.",
      paragraphs: [
        [
          s("The HR function touches every stage of the employee lifecycle: attract, hire, onboard, develop, engage, perform, and separate. "),
          x(
            "AI tools now exist for every stage — recruitment screening, onboarding automation, learning recommendation, performance support, engagement analysis, and workforce planning. The breadth creates opportunity and complexity in equal measure.",
            "The practical reality: AI in HR delivers the clearest ROI at the volume-intensive ends of the lifecycle — high-volume recruitment screening and compliance-heavy administrative processes. In the middle — performance, development, and engagement — AI supports human decisions rather than replacing them.",
          ),
          s(" CHROs should sequence AI deployment from high-volume administration toward judgment-intensive processes — governance complexity and ethical stakes increase as you move toward decisions that affect people's careers."),
        ],
        [
          s("The regulatory landscape for HR AI is among the most active in any business function. "),
          x(
            "New York City's Local Law 144 requires bias audits for AI recruitment tools. The EU AI Act classifies AI used in employment decisions as high-risk, requiring conformity assessment, transparency, and human oversight. EEOC guidance in the US has addressed AI disparate impact. UK Equality Act obligations apply to algorithmic decision-making in employment.",
            "These are not future risks — they are current compliance obligations. CHROs deploying AI recruitment or performance tools without legal review of applicable regulations are operating outside the standard of care.",
          ),
          s(" Before deploying any AI tool that influences employment decisions, obtain a legal opinion on applicable anti-discrimination and AI-specific regulation in every jurisdiction where the tool will operate."),
        ],
        [
          s("Employee trust is a governance requirement in HR AI — not a soft consideration. "),
          x(
            "Employees whose career decisions are influenced by algorithms they cannot see or challenge will, when they discover this, lose trust in the HR function and the organisation. Trust recovery after an AI transparency failure in HR is significantly more expensive than the governance investment that would have prevented it.",
            "Transparency requirements: employees should know when AI is used in decisions affecting them, what factors the AI considers, and how to seek human review. This is both a regulatory requirement in some jurisdictions and a trust-building practice in all of them.",
          ),
          s(" Draft an employee AI transparency disclosure as part of every HR AI deployment — covering what the AI does, what data it uses, and how employees can request human review."),
        ],
      ],
      examples: [
        {
          title: "Amazon recruiting algorithm — bias at scale",
          body: "Amazon's experimental ML recruiting tool trained on historical hiring decisions systematically downgraded applications from women because historical hires were predominantly male. The system was trained to replicate past patterns — which encoded past discrimination. Amazon discontinued the tool before deployment. CHROs should require bias testing across protected characteristics before any ML recruiting tool goes live — using current best-practice methodology, not vendor-provided results.",
        },
        {
          title: "Hilton Hotels — AI-assisted high-volume recruitment",
          body: "Hilton deployed AI-powered CV screening and initial interview scheduling for high-volume hourly roles, reducing time-to-hire from 42 days to 5 days. The governance architecture: AI screens for minimum qualifications and schedules assessments; humans make offer decisions. AI removed the scheduling burden, not the hiring judgment. This architecture — AI handles volume, humans handle decisions — is the correct template for recruitment AI.",
        },
        {
          title: "New York City Local Law 144 — compliance in practice",
          body: "When New York City's bias audit requirement for AI employment tools took effect in 2023, several major HR tech vendors could not immediately produce compliant audit documentation. Enterprises using those tools in NYC faced legal exposure. CHROs who had contractually required compliance documentation as a condition of deployment had protection; those who had not faced urgent vendor management issues. Contractual compliance requirements protect the employer when the vendor is non-compliant.",
        },
      ],
    }, {
      kind: "diagram",
      id: "bl-function-ai-map",
      type: "comparison",
      title: "AI by Function",
      caption:
        "Each function has distinct ROI, risk, and adoption patterns.",
    }),
    sectionWithDiagram({
      number: "2.2",
      title: "AI in Talent Acquisition",
      subtitle: "Accelerating hiring without automating discrimination",
      take: "AI in talent acquisition delivers measurable efficiency — 50–70% reduction in screening time in high-volume contexts. The governance requirement is matching that efficiency to bias mitigation: AI that screens faster but screens out protected groups at disparate rates has created a legal liability, not a business advantage.",
      why: "Talent acquisition is the entry point for workforce diversity. AI tools that introduce or amplify bias at the screening stage create a demographic pipeline problem that compounds for years before it is visible in workforce analytics.",
      paragraphs: [
        [
          s("AI recruitment tools serve four primary functions: CV screening, candidate sourcing, interview scheduling, and assessment scoring. "),
          x(
            "CV screening tools use ML to rank applications against job requirements, reducing manual review time for high-volume roles. Sourcing tools identify passive candidates from LinkedIn and professional databases. Interview scheduling tools eliminate the coordination overhead of booking. Assessment tools score work sample tests, video interviews, or cognitive assessments.",
            "Each function has a different risk profile. Scheduling tools are low-risk — they automate logistics. Screening and scoring tools are high-risk — they influence who gets to the interview stage and who is evaluated as qualified.",
          ),
          s(" Apply the same governance investment to AI recruitment tools as you would to a decision that directly affects employment — because that is precisely what they do."),
        ],
        [
          s("Bias in AI recruitment operates through three primary mechanisms that CHROs must understand. "),
          x(
            "Training data bias: models trained on historical hiring data replicate historical selection patterns, which often reflect historical inequalities. Proxy bias: features that correlate with protected characteristics — university attended, zip code, name structure — can create disparate impact without using the protected characteristic directly. Feedback loop bias: models that predict 'success' based on outcomes of people hired under the old process amplify whatever biases existed in that process.",
            "Bias testing must go beyond single-characteristic analysis. Intersectional testing — how does the tool perform for Black women? For older disabled candidates? — reveals amplified effects that single-variable tests miss.",
          ),
          s(" Require annual third-party bias audits across all protected characteristics and intersectional combinations for every AI recruitment tool, not just at initial deployment."),
        ],
        [
          s("Structured interview AI and video assessment tools require specific governance. "),
          x(
            "Tools that score recorded interviews using vocal tone, facial expression, or language patterns have been widely criticised for encoding cultural and neurotypical norms into hiring standards. Several research studies have found that these tools score candidates differently based on lighting, background, accent, and disability-related communication differences.",
            "The governance requirement: any tool that scores human behaviour in a hiring context requires a peer-reviewed validity study demonstrating that the scoring criteria predict job performance — not proxy characteristics. Absence of this study should disqualify the vendor.",
          ),
          s(" Demand a peer-reviewed predictive validity study from any vendor selling behavioural or video assessment AI. Vendor testimonials are not validity evidence."),
        ],
      ],
      examples: [
        {
          title: "Unilever — AI recruitment at scale with governance",
          body: "Unilever deployed AI-powered video interviews across its graduate recruitment, using Pymetrics' neuroscience-based games and HireVue video analysis. The governance architecture included bias testing before deployment, regular audits, and explicit human review for candidates who approached the scoring threshold. Unilever also committed to candidate transparency: applicants are told the AI is used and how to request a human review. The result: 50% reduction in time-to-hire, maintained diversity ratios, and no material legal challenges.",
        },
        {
          title: "iCIMS bias testing — what good looks like",
          body: "iCIMS, a major ATS vendor, conducts adverse impact analysis on their screening tools across racial, gender, and age categories as part of standard deployment. Clients receive reports showing pass-through rates by demographic. When a client's implementation showed statistically significant adverse impact on one demographic group, iCIMS worked with the client to adjust the screening criteria. CHROs should make this level of ongoing adverse impact reporting a contractual requirement — not a voluntary vendor practice.",
        },
        {
          title: "The proxy variable problem",
          body: "A professional services firm's AI screening tool assigned higher scores to candidates from a specific set of universities. Investigation revealed the scoring proxy was not university name directly but a combination of degree classification, extracurricular activity type, and graduation year — which correlated strongly with university selectivity. The tool was producing indirect socioeconomic discrimination that did not appear in single-variable testing. CHROs must require intersectional and proxy-variable testing, not just protected characteristic analysis.",
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
      title: "AI in Learning and Development",
      subtitle: "Personalised learning at scale — the highest-confidence HR AI value case",
      take: "AI-powered learning personalisation is the highest-confidence HR AI use case because it is additive rather than gatekeeping — it helps employees develop rather than deciding whether they qualify. The value is real, the ethical risk is lower, and the employee trust impact is positive when implemented well.",
      why: "L&D faces an impossible brief: deliver personalised learning for every employee role, level, and learning style at scale. AI makes the personalisation economically viable for the first time — and CHROs who deploy it well build capability faster than competitors who rely on one-size-fits-all programmes.",
      paragraphs: [
        [
          s("AI learning platforms use ML to model each learner's current knowledge state, learning pace, and skill gaps — then recommend content sequences personalised to that profile. "),
          x(
            "The personalisation mechanism: recommendation algorithms trained on learner completion data, assessment results, and job role requirements identify content most likely to close the gap between current and target competency. The more learners use the platform, the more data the model has to improve recommendations — the learning flywheel.",
            "Platforms like Degreed, Cornerstone, and LinkedIn Learning use this architecture. The differentiator is content quality and integration depth, not the underlying personalisation algorithm — which is broadly commoditised.",
          ),
          s(" CHROs evaluating learning AI platforms should prioritise content library quality and integration with job architecture over algorithm sophistication — the algorithm is table stakes."),
        ],
        [
          s("AI skills mapping is a foundational capability that unlocks more advanced workforce planning. "),
          x(
            "Skills mapping uses ML to infer employee skill profiles from job history, completed learning, performance data, and project records. The resulting skills graph allows CHROs to identify skill gaps across the workforce, model the impact of upskilling investments, and build internal talent pipelines for critical roles.",
            "The governance challenge: skills inferred by AI are probabilistic estimates, not assessments. An employee's skill profile that drives development recommendations or internal mobility decisions should be transparent to the employee and correctable by them.",
          ),
          s(" Ensure every employee can view their AI-inferred skill profile, understand how it was generated, and correct inaccuracies — this is both a trust requirement and a data accuracy requirement."),
        ],
        [
          s("Generative AI is creating a new category of L&D value: content generation and coaching at scale. "),
          x(
            "AI tools that generate role-specific learning content, simulate practice conversations, or provide on-demand coaching responses are reducing the cost of bespoke learning by 60–80%. A compliance training module that previously required six weeks of instructional design can be generated and personalised in days.",
            "The governance requirement: AI-generated learning content requires subject matter expert review before deployment, particularly in regulated areas — compliance training, safety procedures, or professional standards. AI can accelerate content creation; it cannot guarantee content accuracy.",
          ),
          s(" AI-generated learning content must be reviewed by a subject matter expert before delivery, with particular rigour for regulated or safety-critical content categories."),
        ],
      ],
      examples: [
        {
          title: "Deloitte — AI-powered learning pathways",
          body: "Deloitte's learning platform uses AI to build personalised pathways for 330,000 professionals globally, recommending content based on role, level, client industry, and personal development goals. The platform tracks pathway completion against skills targets and adjusts recommendations as priorities change. Deloitte reports a 47% increase in voluntary learning hours following AI personalisation — employees complete more content because it is more relevant to their actual work.",
        },
        {
          title: "Accenture — skills AI for internal mobility",
          body: "Accenture built a skills AI platform that maps 700,000 employee profiles against project requirements, enabling internal mobility matching that would be impossible at manual scale. The system recommends internal candidates for open projects before external hiring is considered. HR outcome: 30% of roles that previously went to external hires are now filled internally. The skills AI created a talent marketplace that the organisation's size had previously made unworkable.",
        },
        {
          title: "AI compliance training generation — banking",
          body: "A major UK bank used generative AI to create role-specific anti-money laundering training scenarios, replacing generic modules with examples relevant to each employee's job function. Compliance team time to produce a training module dropped from four weeks to three days. Completion rates increased 35% and knowledge test scores improved 18 percentage points. Every module was reviewed by the compliance team before deployment — the AI generated the first draft, the experts produced the final version.",
        },
      ],
    }),
    buildSection({
      number: "2.4",
      title: "AI in Performance Management",
      subtitle: "Supporting better conversations — not replacing human judgment about people",
      take: "AI in performance management works as a decision support tool that surfaces data, reduces recency bias, and improves calibration. It fails — legally and culturally — when it replaces human judgment with algorithmic ratings. The CHRO's job is to position AI as a tool that makes managers better, not a system that makes managers unnecessary.",
      why: "Performance management is the most emotionally significant HR process for employees. AI that makes it feel more automated, less human, or more opaque erodes the psychological safety that performance conversations require. The design principle must be AI-enhanced human judgment, not AI-replaced human judgment.",
      paragraphs: [
        [
          s("AI performance management tools serve three legitimate functions: continuous feedback capture, pattern analysis for bias reduction, and calibration support. "),
          x(
            "Continuous feedback tools collect peer and project feedback throughout the year, reducing reliance on end-of-year recall — which is structurally biased toward recent events. Pattern analysis tools flag anomalies in rating distributions across managers, identifying potential gender or demographic bias in calibration. Calibration support tools show a manager how their rating distribution compares to peers reviewing similar roles.",
            "Each of these functions improves the quality of human judgment — they do not replace it. The ratings, development plans, and promotion decisions remain with the manager and the HR business partner.",
          ),
          s(" Deploy performance AI to improve the quality of human judgment, not to automate it. The manager who makes the decision should own the decision."),
        ],
        [
          s("Algorithmic performance scoring carries specific legal risks in employment. "),
          x(
            "Systems that produce an AI-generated performance score that influences salary, promotion, or separation decisions face GDPR Article 22 challenges in the EU (right not to be subject to solely automated decisions), EEOC disparate impact analysis in the US, and Equality Act obligations in the UK.",
            "The defence is human decision authority: if a named manager reviews the AI score and makes an independent assessment before any employment action, the decision is not solely automated. The documentation must reflect this — the manager's assessment, not the AI's score, is the employment record.",
          ),
          s(" Document performance decisions as manager assessments informed by AI data — not AI scores confirmed by managers. The language reflects the legal architecture."),
        ],
        [
          s("Employee transparency in performance AI is both a legal and trust requirement. "),
          x(
            "Employees who discover that AI has been scoring their performance without their knowledge lose trust in the HR function and in the organisation's fairness. The disclosure obligation under GDPR and equivalent regulations is explicit for automated processing of personal data.",
            "Best practice: tell employees what data the performance AI uses, how it is used in calibration, and that all employment decisions are made by their manager. This transparency typically improves rather than undermines employee confidence — most employees are more concerned about inconsistent human judgment than about transparent data analysis.",
          ),
          s(" Publish your performance AI use policy to employees before deployment — not after the first grievance. Transparency now prevents a trust crisis later."),
        ],
      ],
      examples: [
        {
          title: "Microsoft — AI-assisted performance calibration",
          body: "Microsoft uses AI to support the performance calibration process by surfacing data patterns that might indicate bias — rating distributions by gender, tenure, and team. Calibration facilitators receive this data before calibration sessions. The outcome: more consistent ratings across similar roles and reduced gender pay gap in performance-driven compensation. The AI identified patterns; managers corrected them. Human accountability for every rating remained intact.",
        },
        {
          title: "IBM — continuous performance signal capture",
          body: "IBM's performance system captures continuous feedback from project completions, peer recognition, and manager check-ins, reducing end-of-year recency bias. Employees and managers review the accumulated signals together during quarterly conversations. The AI aggregates and surfaces data; the conversation interprets it. Employees report higher satisfaction with performance conversations when they include data they recognise as representing their work — rather than a manager's year-end recollection.",
        },
        {
          title: "The algorithmic termination legal challenge",
          body: "A European delivery company that used algorithmic performance scoring to trigger contract terminations faced legal challenges under GDPR Article 22. The company could not demonstrate that a human reviewed and made an independent decision before terminations — the system had effectively automated the decision. The settlement cost significantly exceeded the HR tech implementation cost. CHROs must ensure every employment action touching an AI score has a documented human decision step — before deployment, not as a post-incident fix.",
        },
      ],
    }),
    buildSection({
      number: "2.5",
      title: "AI in Employee Engagement and Wellbeing",
      subtitle: "Listening at scale — and the boundaries of appropriate AI use in people data",
      take: "AI-powered employee listening tools offer CHROs the ability to understand engagement trends across the organisation in real time rather than waiting for annual surveys. The boundary is clear: AI analyses aggregate signals and flags topics; humans interpret, respond, and build relationships. AI-powered individual monitoring crosses ethical and legal lines.",
      why: "Engagement directly drives retention and productivity. CHROs who understand what is driving disengagement earlier can act sooner — before resignations, not after. AI listening tools make this possible at scale. The governance question is what counts as legitimate listening and what counts as surveillance.",
      paragraphs: [
        [
          s("AI-powered employee listening covers pulse surveys, sentiment analysis of communication platforms, and exit interview theme analysis. "),
          x(
            "Pulse survey tools send short, frequent check-ins and use ML to track sentiment trends over time, identifying engagement changes earlier than annual surveys. Sentiment analysis tools process anonymised messages on collaboration platforms to identify emerging concerns. Exit interview AI analyses themes across departing employee conversations to identify systemic retention drivers.",
            "Each generates aggregate insights — team-level, department-level, or theme-level — that inform HR and leadership decisions. Individual-level sentiment scoring is a different category with different ethical and legal implications.",
          ),
          s(" AI employee listening is legitimate at aggregate level. Individual-level sentiment monitoring of specific employees' communications is surveillance, not listening — and carries serious legal and trust risks."),
        ],
        [
          s("The boundary between aggregate listening and individual surveillance is a governance requirement, not a technical detail. "),
          x(
            "Technically, AI tools that analyse communication platforms can produce individual-level sentiment scores. Governance — not technical limitation — is what prevents this from happening. Many vendors offer individual-level analytics as optional features; CHROs must actively configure tools to operate at aggregate levels and contractually prohibit individual-level data surfacing.",
            "Legal exposure: in the EU, individual monitoring of employee communications requires legal basis under GDPR Article 6, proportionality assessment, and employee notification. In many jurisdictions, covert monitoring of employee communications is illegal regardless of system capabilities.",
          ),
          s(" Configure AI listening tools to operate at team or higher aggregate levels. Contractually prohibit individual-level sentiment data from being accessible to managers or HR. Publish your monitoring approach in the employee privacy notice."),
        ],
        [
          s("AI wellbeing tools present an emerging governance frontier. "),
          x(
            "Tools that use ML to infer employee stress, burnout risk, or mental health signals from work patterns — email frequency, calendar density, after-hours activity — offer early warning signals but raise serious ethical questions about profiling employees on health-related data.",
            "In the EU, health-related data is a special category under GDPR Article 9, requiring explicit consent or a specific legal basis for processing. An AI tool that infers burnout risk from work patterns is processing health-related data, whether or not the vendor describes it that way.",
          ),
          s(" Before deploying AI wellbeing tools, obtain a legal opinion on applicable data protection law in every operating jurisdiction — and make participation voluntary with explicit consent rather than opt-out."),
        ],
      ],
      examples: [
        {
          title: "Salesforce — AI-powered engagement sensing",
          body: "Salesforce deploys pulse surveys with AI-powered theme analysis across its global workforce, identifying engagement drivers and detractors in real time. HR business partners receive team-level insight dashboards — no individual data. When a theme emerges in a team, the HRBP has a conversation with the manager. The AI surfaces the signal; the human builds the response. Employee opt-in rates are consistently above 85% because employees can see the aggregate insights their responses generate.",
        },
        {
          title: "Microsoft Viva Insights — aggregate workplace analytics",
          body: "Microsoft's Viva Insights analyses calendar, email, and Teams patterns to surface team-level collaboration health metrics. By default, individual data is only visible to the individual themselves; managers see team aggregates of five or more people. This privacy architecture — individual visibility to self, aggregate visibility to managers — is the governance model CHROs should require from any workplace analytics vendor.",
        },
        {
          title: "The covert monitoring legal challenge",
          body: "A financial services firm deployed an AI communication monitoring tool that flagged individual employees for 'disengagement risk' based on email and chat patterns. Employees were not notified. A whistleblower disclosure triggered a data protection authority investigation — the tool's individual-level monitoring required notification and legal basis that the firm had not obtained. The investigation resulted in a formal reprimand and a requirement to delete the individual-level data. The aggregate insights, which were legitimate, were also lost in the remediation. CHROs must configure, not just trust, the privacy settings of AI listening tools.",
        },
      ],
    }),
    buildSection({
      number: "2.6",
      title: "AI in Workforce Planning and People Analytics",
      subtitle: "Data-driven talent strategy — and the governance of predictive people analytics",
      take: "AI workforce planning tools let CHROs model the impact of growth scenarios, attrition risks, and skills gaps before they become operational crises. The governance requirement is ensuring that predictive models inform human decisions — not pre-determine them — and that the data underlying predictions meets accuracy and consent standards.",
      why: "Workforce planning has historically been reactive: filling gaps after they occur. AI makes anticipatory planning viable at scale — but only if the predictions are accurate, the data is governed, and the people implications are managed with care.",
      paragraphs: [
        [
          s("AI workforce planning covers three primary use cases: attrition prediction, skills gap modelling, and headcount scenario planning. "),
          x(
            "Attrition prediction models use ML to identify employees at higher risk of departure based on engagement signals, compensation positioning, tenure patterns, and manager change events. Skills gap modelling projects current workforce skills against future business requirements, identifying critical gaps. Headcount scenario planning models the workforce implications of business growth, contraction, or transformation scenarios.",
            "Each use case helps CHROs and business leaders make better-informed decisions — not automated decisions. The human judgment layer is the business leader's response to the model's output.",
          ),
          s(" Position workforce planning AI as a tool that reduces the number of surprises in talent management — not as a system that predicts what individuals will do."),
        ],
        [
          s("Attrition prediction models carry specific governance requirements because they flag individual employees as departure risks. "),
          x(
            "The ethical question: if a manager knows an employee is 'high attrition risk', does this knowledge change how the manager treats the employee? Research suggests it can — sometimes positively (retention investment) and sometimes negatively (reduced development, earlier succession planning, unconscious marginalisation).",
            "Best practice: attrition risk data is used by HR business partners to inform retention investment decisions at team or role level, not shared with line managers for individual employees. The model identifies patterns; the HRBP designs the intervention.",
          ),
          s(" Define who can see attrition risk data, at what level of aggregation, and for what explicit purpose — before deployment, not as an afterthought."),
        ],
        [
          s("People analytics governance requires a data ethics framework, not just a data privacy policy. "),
          x(
            "Privacy compliance governs what data can be collected and processed. Data ethics governs what data should be collected and processed — a higher standard that requires intentionality about purpose, consent, and impact on individuals.",
            "The practical test: before any people analytics use case, ask three questions. Is the prediction or analysis likely to materially affect an employee's working conditions, career, or treatment by their manager? If yes, does the employee know this data is used for this purpose? And is there a mechanism for the employee to challenge a decision influenced by this data?",
          ),
          s(" Apply a data ethics test — not just a data privacy check — to every people analytics use case before deployment."),
        ],
      ],
      examples: [
        {
          title: "Google — people analytics with governance",
          body: "Google's People Analytics team pioneered the use of data in HR decisions, including predictive models for promotion readiness and team performance. The governance architecture: analytics inform HR and leadership conversations; they do not produce automated employment decisions. Employees have access to significant data about their own performance and progression relative to peers. The people analytics function sits within HR with a dedicated ethics review process for new model deployments.",
        },
        {
          title: "IBM attrition prediction — the retention investment",
          body: "IBM deployed an attrition prediction model with 95% claimed accuracy, identifying employees at high risk of departure. The model's output went to HR business partners who worked with managers on targeted retention investments — compensation adjustments, development opportunities, and role changes. IBM reported significant reduction in unwanted attrition in the pilot population. Critically, line managers did not receive individual risk scores — only HRBPs, who designed interventions that were then implemented through the normal management relationship.",
        },
        {
          title: "The misuse of attrition data",
          body: "A technology company shared attrition risk scores with line managers, intending to enable targeted retention conversations. In practice, some managers used the data to begin succession planning and reduce investment in high-risk employees — accelerating the departure it was intended to prevent. Employees who learned they had been flagged as departure risks reported feeling pre-emptively marginalised. The programme was suspended. Attrition data in managers' hands creates different incentives than the same data in HR business partners' hands — the governance architecture matters.",
        },
      ],
    }),
    buildSection({
      number: "2.7",
      title: "Governing HR AI — The CHRO's Framework",
      subtitle: "A practical governance architecture for AI in the people function",
      take: "HR AI governance is not a compliance exercise — it is a trust architecture. CHROs who build governance that employees can see and understand maintain the people function's credibility as an employee advocate. Those who treat governance as a legal minimum invite the trust failures that are both more damaging and more expensive to repair.",
      why: "The people function's authority rests on the belief that it acts in employees' interests as well as the organisation's. AI deployments that employees experience as surveillance, discrimination, or opaque judgment undermine this authority in ways that take years to rebuild.",
      paragraphs: [
        [
          s("The CHRO's HR AI governance framework covers six areas: purpose limitation, transparency, bias testing, human oversight, data access, and review cadence. "),
          x(
            "Purpose limitation: each AI tool is approved for a specific defined purpose and is not used for secondary purposes without a new approval. Transparency: employees know when AI influences decisions affecting them. Bias testing: tools that influence employment decisions are tested annually for adverse impact across protected characteristics. Human oversight: a named manager or HR professional makes every employment decision — AI informs, humans decide.",
            "Data access: employees can view their AI-processed data and request corrections. Review cadence: every HR AI deployment is reviewed annually for performance, bias, and employee trust impact — not just at initial deployment.",
          ),
          s(" Document this framework in an HR AI Policy that is visible to employees, reviewed by legal, and updated annually as regulation evolves."),
        ],
        [
          s("Vendor selection for HR AI requires governance due diligence beyond technical assessment. "),
          x(
            "The HR AI vendor due diligence checklist: does the vendor conduct and publish bias audits? Can they produce third-party validity studies for assessment tools? What data does the vendor store, and do they use client data for model training? What is the data retention and deletion policy? Do they have compliance documentation for applicable jurisdictions?",
            "Vendors who cannot answer these questions with documentation are not ready for enterprise HR AI deployment. The people function's legal exposure does not transfer to the vendor when the tool is deployed.",
          ),
          s(" Make HR AI vendor due diligence documentation a contractual requirement, not a pre-sales courtesy — bias audits, validity studies, and data handling policies must be contractual commitments."),
        ],
        [
          s("The employee grievance pathway for AI-influenced decisions is a governance requirement in regulated jurisdictions. "),
          x(
            "Under GDPR Article 22 and equivalent legislation, employees have the right to request human review of decisions made solely by automated processing. The practical requirement: every HR AI deployment that influences employment decisions must have a documented pathway for employees to request human review, and a named person responsible for conducting that review.",
            "Best practice: make this pathway visible and accessible — not buried in privacy notices. Employees who know they can escalate to a human reviewer are more accepting of AI-assisted processes than employees who discover AI was involved only after a decision affects them.",
          ),
          s(" Publish the human review pathway for every AI-influenced HR decision prominently — in offer letters, performance review communications, and the employee handbook."),
        ],
      ],
      examples: [
        {
          title: "Workday — responsible AI architecture",
          body: "Workday publishes a Responsible AI framework that covers explainability, bias testing, and human oversight for all AI features in its HCM platform. For compensation and promotion recommendations, Workday surfaces skill-based rationale rather than model scores, satisfies GDPR explainability requirements, and requires manager sign-off on every recommendation. CHROs should use vendor-published responsible AI frameworks as a due diligence input — and contractually require compliance with those frameworks rather than relying on marketing documents.",
        },
        {
          title: "A CHRO's employee transparency communication",
          body: "Before deploying an AI-powered CV screening tool, a CHRO at a retail group published a transparent communication to all employees explaining: what the tool screens for, what it does not screen for, that all offers require human recruiter sign-off, and how candidates can request human review of a screening decision. The transparency communication reduced candidate drop-out due to AI concerns by 40% and generated no legal challenges in three years of operation. The communication cost less than one legal review of a grievance.",
        },
        {
          title: "Annual HR AI review — what it looks like",
          body: "A global professional services firm conducts an annual HR AI review across all deployed tools, covering: adverse impact rates by protected characteristic (any disparity above 80% threshold triggers a review), accuracy comparison against baseline year, employee satisfaction with AI-assisted processes (pulse survey), legal counsel update on applicable regulation changes, and data rights audit. Three tools have been modified or withdrawn following annual reviews. The review process prevented two tools from creating legal exposure that post-incident review would not have caught until a complaint was filed.",
        },
      ],
    }),
    buildSection({
      number: "2.8",
      title: "The CHRO as AI Champion and Ethics Anchor",
      subtitle: "Leading AI transformation in HR while holding the line on what AI must never do",
      take: "The CHRO's dual role in AI transformation is to accelerate adoption where AI genuinely serves employees and the organisation — and to be the executive who prevents AI from dehumanising the people function. Both roles require the same clarity about where AI adds value and where it does not belong.",
      why: "HR AI debates often polarise between uncritical enthusiasm and reflexive resistance. The CHRO's value is providing the nuanced leadership that neither camp can offer: specific use cases with specific governance, not blanket adoption or blanket resistance.",
      paragraphs: [
        [
          s("CHROs who lead AI transformation in HR with clear principles earn credibility with employees, boards, and regulators. "),
          x(
            "The principle framework: AI in HR should make humans better at human work — improving the quality of manager conversations, the personalisation of development, and the rigour of talent decisions. AI in HR should never replace the human relationship that is the foundation of the employment experience.",
            "This is not a slogan — it is a governance decision rule. When evaluating any HR AI use case, ask: does this tool make a human better at their job, or does it remove the human from the interaction? The former is a positive deployment; the latter requires exceptional justification.",
          ),
          s(" Articulate your HR AI principles publicly — to employees, to the board, and to vendors — as a governance commitment, not a values statement."),
        ],
        [
          s("The CHRO as AI ethics anchor means holding the line on three specific categories. "),
          x(
            "First: AI must not make employment decisions — it informs human decisions. Second: employees must know when AI is used in processes that affect them. Third: no HR AI tool is deployed without a bias test, a human oversight architecture, and an employee grievance pathway.",
            "These three lines are not negotiable regardless of vendor promises, cost pressures, or competitive urgency. CHROs who allow any of the three to be compromised are creating legal, reputational, and trust exposure that will eventually cost more than the AI benefit delivered.",
          ),
          s(" Write these three lines into your HR AI Policy as non-negotiable standards. Make them the basis of your governance conversations with the CEO and board."),
        ],
        [
          s("The CHRO's AI agenda for the next 12 months should be a practical plan, not an aspirational statement. "),
          x(
            "Practical CHRO AI agenda: identify the two or three highest-ROI HR AI use cases for your organisation's specific context; conduct legal review of applicable regulation in operating jurisdictions; audit existing HR tech stack for AI features already active but ungoverned; build the governance framework before the next deployment; and establish an annual HR AI review as a standing process.",
            "The sequence matters: governance framework before deployment, not after. Most HR AI failures are not technology failures — they are governance failures in tools that were already technically capable.",
          ),
          s(" Build the governance framework before the next HR AI deployment — even if it delays the deployment by four to six weeks. The governance investment prevents failures that cost months, not weeks, to recover from."),
        ],
      ],
      examples: [
        {
          title: "Schneider Electric — CHRO-led AI transformation",
          body: "Schneider Electric's CHRO led a three-year HR AI transformation programme covering recruitment, learning, and workforce planning. The governance architecture was established before any deployment: a cross-functional AI ethics committee with employee representation, a mandatory bias audit process, and a public commitment to human decision authority for all employment actions. Employee trust scores in the HR function increased during the AI programme — attributed to the transparency and governance architecture rather than the technology itself.",
        },
        {
          title: "The CHRO board presentation on HR AI",
          body: "A CHRO presenting to the board on HR AI transformation covered four topics: (1) current deployments and ROI; (2) governance framework and compliance status; (3) employee trust data on AI-assisted processes; and (4) regulatory developments and compliance readiness. The board responded by requesting a quarterly HR AI governance update — the first time AI governance was a standing agenda item. CHROs who present AI governance with the same rigour as financial governance earn the board attention their agenda deserves.",
        },
        {
          title: "Where AI does not belong in HR",
          body: "A CHRO explicitly excluded three categories from AI deployment: mental health support conversations (must be human or qualified EAP provider), disciplinary and grievance investigations (must be human-led), and redundancy selection (must be transparent human judgment with no AI pre-screening). These exclusions were published in the HR AI Policy. When employees subsequently asked about AI in these processes, the CHRO could point to the published policy. The explicit exclusions built more employee trust in AI-assisted processes elsewhere than they cost in operational efficiency.",
        },
      ],
    }),
  ],
  quiz: [
    {
      q: "Your recruitment AI vendor claims their video interview scoring tool is 'bias-free'. What do you require before deployment?",
      options: [
        "Accept the claim — the vendor has commercial incentive to ensure accuracy.",
        "Require a peer-reviewed predictive validity study and an adverse impact audit across protected characteristics and intersectional groups from an independent third party.",
        "Conduct a small internal pilot and check the diversity of hires.",
        "Ask for references from similar companies who have deployed the tool.",
      ],
      correct: 1,
      correctFeedback:
        "Right. Vendor bias-free claims require independent third-party evidence: a validity study proving the scoring predicts job performance, and an adverse impact audit across protected characteristics. Internal pilots and references do not substitute for this. Re-read section 2.2.",
      wrongFeedback:
        "Vendor claims about bias require independent evidence. A peer-reviewed validity study and third-party adverse impact audit are the minimum standard. Re-read section 2.2.",
    },
    {
      kind: "categorize",
      q: "Categorise each HR AI use case by its governance risk level.",
      categories: ["Lower governance risk", "Medium governance risk", "Higher governance risk"],
      items: [
        { text: "AI scheduling tool that automates interview booking logistics.", category: 0 },
        { text: "ML learning platform that recommends courses based on role and completion history.", category: 0 },
        { text: "AI attrition prediction model that identifies high-risk employees.", category: 1 },
        { text: "AI tool that produces a performance score that influences salary decisions.", category: 2 },
        { text: "ML CV screening tool that ranks applications for high-volume roles.", category: 1 },
        { text: "AI video assessment tool that scores candidate behavioural signals for hiring decisions.", category: 2 },
      ],
      correctFeedback:
        "Right. Scheduling and learning recommendations are additive and non-gatekeeping — lower risk. Attrition and CV screening influence who gets opportunities — medium risk. Performance scoring and behavioural assessment directly affect employment outcomes — highest governance requirements. Re-read sections 2.2 and 2.4.",
      wrongFeedback:
        "Risk scales with how directly the AI influences employment outcomes and career decisions. Logistics automation is low risk; hiring and performance decisions are high risk. Re-read sections 2.2 and 2.4.",
    },
    {
      q: "Your AI employee listening tool can produce individual-level sentiment scores for each employee. How should you configure it?",
      options: [
        "Enable individual-level scores — managers need this data to support their teams.",
        "Configure the tool to operate at team-aggregate level only (minimum five employees). Contractually prohibit individual-level data from being surfaced. Publish your monitoring approach in the employee privacy notice.",
        "Enable individual scores but restrict access to HR business partners only.",
        "Enable individual scores for manager-only access with a confidentiality agreement.",
      ],
      correct: 1,
      correctFeedback:
        "Right. Individual-level employee sentiment monitoring is surveillance, not listening — with serious legal and trust consequences. Aggregate-level configuration, contractual prohibition, and transparent privacy notice are all required. Re-read section 2.5.",
      wrongFeedback:
        "Individual sentiment monitoring of employees — regardless of who can access the data — carries legal risk under data protection law and serious employee trust consequences. Aggregate configuration is the governance requirement. Re-read section 2.5.",
    },
    {
      q: "Your ML performance tool produces an attrition risk score for every employee. What is the correct data access architecture?",
      options: [
        "Share scores with line managers so they can have targeted retention conversations.",
        "Provide scores to HR business partners for retention investment decisions at team level. Do not share individual risk scores with line managers.",
        "Make scores visible to employees so they can advocate for themselves.",
        "Share with the leadership team for workforce planning decisions.",
      ],
      correct: 1,
      correctFeedback:
        "Right. Attrition risk data in line managers' hands creates perverse incentives — managers may reduce investment in high-risk employees, accelerating departure. HR business partners use the data to design interventions delivered through the normal management relationship. Re-read section 2.6.",
      wrongFeedback:
        "Line managers with individual attrition risk scores can unconsciously marginalise flagged employees. The governance architecture keeps individual-level risk data with HRBPs who design interventions, not with managers who may react to it in ways that worsen the outcome. Re-read section 2.6.",
    },
    {
      kind: "order",
      q: "Order the steps to deploy a new AI recruitment tool responsibly.",
      prompt: "Drag to arrange from first step (top) to last (bottom).",
      items: [
        "Obtain legal opinion on applicable anti-discrimination and AI regulation in operating jurisdictions.",
        "Require third-party bias audit and predictive validity study from the vendor.",
        "Define the human oversight architecture — which decisions require human sign-off.",
        "Draft and publish employee transparency disclosure covering AI use and human review pathway.",
        "Deploy with annual bias re-audit and governance review built into the contract.",
      ],
      correctFeedback:
        "Right. Legal first — know your obligations before selecting a tool. Then bias evidence. Then human oversight design. Then employee communication. Then ongoing review as a contractual commitment. Re-read sections 2.2 and 2.7.",
      wrongFeedback:
        "Legal review comes first — it defines your obligations before you select a tool. Bias evidence, oversight architecture, and transparency communication all follow. Ongoing review is a contractual commitment, not an afterthought. Re-read sections 2.2 and 2.7.",
    },
    {
      kind: "categorize",
      q: "Sort each activity into the correct HR AI governance category.",
      categories: ["CHRO governance responsibility", "Vendor contractual requirement", "Employee right"],
      items: [
        { text: "Defining purpose limitation: each AI tool approved for a specific defined use only.", category: 0 },
        { text: "Annual bias audit documentation provided to the employer before contract renewal.", category: 1 },
        { text: "Right to view AI-processed personal data and request corrections.", category: 2 },
        { text: "Establishing the human oversight architecture for every employment AI decision.", category: 0 },
        { text: "Data handling policy specifying retention periods and deletion obligations.", category: 1 },
        { text: "Right to request human review of a decision influenced by automated processing.", category: 2 },
      ],
      correctFeedback:
        "Right. CHRO governance: purpose limitation and oversight architecture are internal design decisions. Vendor requirements: bias audits and data policies are contractual commitments. Employee rights: data access and human review pathway are regulatory entitlements. Re-read sections 2.7 and 2.8.",
      wrongFeedback:
        "Sort by who bears the responsibility: CHRO governance is internal design; vendor requirements are contractual; employee rights are regulatory entitlements that must be provided. Re-read sections 2.7 and 2.8.",
    },
  ],
});
