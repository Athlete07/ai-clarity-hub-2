import { buildChapter, buildSection, s, x, BL_CALLOUT, sectionWithDiagram } from "../concepts-bl-helpers";

export const chapter05BlMinimumViableAiGovernance = buildChapter({
  slug: "bl-minimum-viable-ai-governance",
  number: 5,
  shortTitle: "Minimum Viable AI Governance",
  title: "Minimum Viable AI Governance — The Smallest Programme That Protects Your Organisation",
  readingMinutes: 23,
  summary:
    "AI governance does not require a dedicated department or a multi-year transformation programme. Minimum viable governance — the smallest set of policies, processes, and controls that materially reduces your legal, operational, and reputational risk — can be built in weeks. Business leaders who wait for perfect governance deploy with no governance.",
  keyTakeaway:
    "Minimum viable AI governance has five components: an AI inventory, a classification framework, a pre-deployment gate with legal and DPO review, an acceptable use policy, and a named accountability owner. These five components address the majority of regulatory exposure and can be operational within 60 days.",
  pmCallout: BL_CALLOUT,
  sections: [
    sectionWithDiagram({
      number: "5.1",
      title: "Why Most AI Governance Fails",
      subtitle: "The five failure patterns that prevent governance from working — and how minimum viable governance avoids them",
      take: "Most AI governance programmes fail not because they are technically wrong but because they are too complex, too slow, too ownership-fragmented, or too disconnected from deployment realities. Minimum viable governance is designed to avoid these failure patterns — not to be comprehensive from day one.",
      why: "The choice in most organisations is not between comprehensive governance and minimum viable governance — it is between minimum viable governance and no governance. Perfect governance programmes in design prevent deployed governance programmes that work imperfectly.",
      paragraphs: [
        [
          s("Failure pattern one: governance designed for an idealised AI programme rather than the actual one. "),
          x(
            "Most AI governance frameworks assume a central AI programme with coordinated development, a single technology stack, and a clear taxonomy of AI systems. Most organisations have fragmented AI adoption: individual teams deploying SaaS tools with AI features, shadow IT AI tools, data science teams running independent models, and vendor-embedded AI across multiple functions.",
            "Governance designed for the idealised programme is useless for the actual one. Minimum viable governance starts with a realistic inventory of what is actually deployed — then applies governance proportional to risk.",
          ),
          s(" Audit the actual AI landscape before designing governance — most organisations have 2–3 times more AI in use than central technology records show."),
        ],
        [
          s("Failure pattern two: governance owned by legal or technology without cross-functional business accountability. "),
          x(
            "Legal-owned governance produces policies that technology and business teams do not read. Technology-owned governance produces controls that do not address legal and business risk. Without named business function owners for each AI system — the person who approved deployment and is accountable for outcomes — governance has no operational traction.",
            "Minimum viable governance assigns clear ownership at the business function level: the CHRO owns HR AI governance, the CFO owns finance AI governance, and so on. This is accountability, not technical expertise.",
          ),
          s(" Assign a named business function owner for every AI system before designing the governance programme — accountability without a named person is a policy document, not a governance programme."),
        ],
        [
          s("Failure pattern three: governance that creates deployment friction without risk reduction. "),
          x(
            "Governance programmes that require 12-week review cycles for low-risk productivity tools create pressure to bypass governance entirely. Minimum viable governance is tiered: low-risk AI gets a lightweight review; high-risk AI gets full legal, DPO, and business risk review. The friction is proportional to the risk.",
            "Tiered governance is more effective at reducing risk than uniform comprehensive governance: high-risk systems get the attention they need; low-risk systems are not delayed for disproportionate review; business teams stop treating governance as an obstacle.",
          ),
          s(" Design governance friction proportional to risk tier — maximum friction for high-risk AI, minimum viable review for low-risk AI — so the programme is sustainable and not systematically bypassed."),
        ],
      ],
      examples: [
        {
          title: "Global law firm — governance programme restart",
          body: "A global law firm launched an AI governance programme with a 47-page policy manual, a 14-week approval process for any new AI tool, and a governance committee requiring seven signatures. Within six months, three partner groups had found workarounds, AI tools were being deployed under 'productivity software' procurement categories, and the governance programme had no visibility of 40% of the firm's AI usage. The firm restarted with a minimum viable programme: a 2-page acceptable use policy, a three-tier classification, a two-week maximum review for Tier 1 tools, and a monthly shadow IT discovery sweep. Compliance rates improved from 60% to 94%.",
        },
        {
          title: "Financial services firm — tiered governance",
          body: "A financial services firm's AI governance programme classified AI systems into three tiers: Tier 3 (internal productivity, no customer or regulatory impact) requires IT registration and acceptable use acknowledgement — two-day process. Tier 2 (customer-facing, operational impact) requires legal review, DPO review, and business risk sign-off — three-week process. Tier 1 (credit, HR decisions, regulated outputs) requires full DPIA, legal review, DPO sign-off, and executive sponsor — eight-week process. Governance completion rates: 100% Tier 3, 97% Tier 2, 91% Tier 1. Tiered friction produces proportional compliance.",
        },
        {
          title: "Retail group — shadow AI discovery",
          body: "A retail group's quarterly shadow AI discovery sweep found 23 AI tools deployed by business teams outside IT governance in the first sweep — including a customer sentiment AI deployed by the marketing team, a pricing AI deployed by the category management team, and an HR scheduling AI deployed by store operations. All 23 were retrospectively classified and governed; 4 required immediate remediation (data processing issues). The discovery sweep became a permanent quarterly process. Shadow AI discovery is a minimum viable governance requirement.",
        },
      ],
    }, {
      kind: "diagram",
      id: "founder-risk-governance",
      type: "flow",
      title: "AI Risk Management Flow",
      caption:
        "Inventory → classify → control → monitor → report. The governance sequence regulators and boards expect.",
    }),
    sectionWithDiagram({
      number: "5.2",
      title: "Component One: The AI Inventory",
      subtitle: "Building a complete, accurate, and maintained inventory of every AI system in your organisation",
      take: "The AI inventory is the foundation of all AI governance. Without a complete inventory, you cannot classify risk, assign accountability, or apply governance controls. Most organisations significantly undercount their AI systems — a structured discovery exercise is required, not just an IT asset register query.",
      why: "You cannot govern what you have not found. The regulatory obligation to document and control AI systems applies to AI systems that exist, regardless of whether they appear in your IT records.",
      paragraphs: [
        [
          s("The AI inventory must cover four categories of AI in use: vendor-provided SaaS AI, internally developed models, AI-embedded in operational technology, and API-integrated AI. "),
          x(
            "SaaS AI is the most common and most overlooked: Microsoft 365 Copilot, Salesforce Einstein, Workday AI, Zendesk AI — these are AI systems embedded in tools teams use daily. They appear in software procurement records but not in AI inventories.",
            "Internally developed models are often known only to the data science or engineering team that built them. Operational technology AI — predictive maintenance, quality control, logistics optimisation — is often managed by operations teams with no connection to the central AI governance programme.",
          ),
          s(" Run an AI discovery exercise across all four categories simultaneously: survey each business function, review IT procurement records, interview the data science team, and audit operational technology systems."),
        ],
        [
          s("The minimum data fields for each inventory entry are eight. "),
          x(
            "System name; primary function and business use case; deploying business function and named owner; vendor or internal development; data processed (including personal data categories); current classification (where assessed); governance status; and date of last review.",
            "The inventory is a living document — new deployments, de-commissioned systems, and use case changes must be reflected within a defined update window. Quarterly minimum; monthly for high-velocity AI adoption environments.",
          ),
          s(" Create the inventory in a shared system accessible to legal, technology, and business function owners — a spreadsheet that only IT can access is not a governance inventory."),
        ],
        [
          s("Maintaining the inventory requires both reactive and proactive mechanisms. "),
          x(
            "Reactive: a change management trigger requiring any new AI tool deployment or material use case change to update the inventory within 10 business days. Proactive: quarterly shadow IT sweep using IT spend analysis, browser extension inventories, and business function self-assessment surveys.",
            "The proactive mechanism is more important than the reactive one: teams deploying AI outside governance processes do not self-report. The quarterly sweep is the mechanism that catches shadow AI before it becomes a regulatory exposure.",
          ),
          s(" Implement both a change management trigger (reactive) and a quarterly shadow IT sweep (proactive) — the sweep is more important because non-compliant deployments do not self-report."),
        ],
      ],
      examples: [
        {
          title: "Professional services firm — inventory discovery results",
          body: "A professional services firm's first AI inventory discovery identified 67 AI systems against an initial IT estimate of 23. The additional 44 included: 18 SaaS platforms with AI features identified through procurement record review; 12 internally developed models identified by interviewing data science leads; 9 AI-embedded in vendor API integrations identified by engineering team survey; and 5 shadow IT tools identified through browser extension analysis. Complete inventory: 67 systems. Risk classified: 11 Tier 1, 24 Tier 2, 32 Tier 3. Governance gaps identified: 8 Tier 1 systems without DPIA, 3 Tier 1 without DPO review.",
        },
        {
          title: "Retailer — quarterly shadow AI sweep methodology",
          body: "A retailer's quarterly shadow AI sweep methodology: (1) IT expenditure analysis for vendor payments to known AI providers not in AI inventory; (2) business function self-assessment survey sent to all department heads; (3) engineering team review of external API calls to AI services; (4) review of new software procurement approvals for AI features. First sweep: 11 unreported AI deployments. Fourth sweep: 2 unreported deployments — demonstrating that consistent sweep methodology reduces shadow AI over time.",
        },
        {
          title: "Financial services group — living inventory governance",
          body: "A financial services group's AI inventory is maintained in a shared Confluence space with named owners for each entry. The change management trigger is embedded in the IT change management process — any new software procurement or development project with AI components automatically generates an AI inventory update ticket. Quarterly reviews by the AI Governance team include: completeness check against IT procurement records, ownership validation (contacting named owners to confirm still current), and classification review for any systems approaching a classification threshold change.",
        },
      ],
    }, {
      kind: "diagram",
      id: "bl-governance-mvg",
      type: "nested",
      title: "AI Governance Framework",
      caption:
        "Inventory → risk tier → minimum controls. The governance path regulators and boards expect.",
    }),
    buildSection({
      number: "5.3",
      title: "Component Two: Risk Classification",
      subtitle: "A tiered classification framework that determines governance requirements without requiring legal expertise for every decision",
      take: "Risk classification determines governance requirements. A clear, documented classification framework — based on objective criteria, not case-by-case judgement — enables governance to scale without requiring legal review at every decision point. Classification is the multiplier that makes minimum viable governance work.",
      why: "Without a documented classification framework, every AI system requires custom governance assessment — overwhelming legal and compliance resources and creating delays that drive shadow AI adoption. A documented framework enables business teams to self-classify, escalating only ambiguous cases.",
      paragraphs: [
        [
          s("A three-tier classification covers 95% of enterprise AI systems with five objective criteria. "),
          x(
            "Tier 1 (High Risk): AI systems making or significantly influencing decisions with legal or significant effects on individuals; AI in regulated contexts (credit, employment, healthcare, insurance, law enforcement); AI processing special category data; AI in Annex III EU AI Act categories.",
            "Tier 2 (Medium Risk): AI making operational decisions with significant business impact but no direct individual effects; AI processing personal data at scale; customer-facing AI with potential reputational impact; AI in safety-critical operations.",
          ),
          s(" Tier 3 (Low Risk): AI for internal productivity with no customer, employee decision, or regulated context; AI tools with no personal data processing or aggregated-only personal data. Tier 3 requires registration and acceptable use only."),
        ],
        [
          s("The classification framework must include a decision tree, not just tier descriptions. "),
          x(
            "Business teams who cannot determine classification from tier descriptions will escalate everything to legal. A decision tree — 'Does the AI output significantly influence a decision about an individual? YES → Tier 1 consideration. Does it process personal data at scale? YES → Tier 2 minimum' — enables self-service classification with legal escalation only for genuinely ambiguous cases.",
            "Decision trees should be tested against a sample of real systems before publication — if the tree misclassifies three of ten test systems, the criteria are ambiguous and need refinement before use.",
          ),
          s(" Publish a visual classification decision tree alongside tier descriptions — self-service classification reduces governance bottlenecks and builds classification competence across business functions."),
        ],
        [
          s("Classification must be reviewed when systems change — use case extension is the most common reclassification trigger. "),
          x(
            "A Tier 3 internal productivity AI that is subsequently integrated into a customer-facing workflow becomes Tier 2 or Tier 1. A Tier 2 operational AI that begins making hiring recommendations becomes Tier 1. Use case extension without reclassification review is a common governance gap.",
            "Embedding a reclassification trigger in the change management process — any material use case change requires classification review before the change is deployed — prevents this gap without requiring continuous re-review of stable systems.",
          ),
          s(" Any material change to an AI system's use case, data processing scope, or decision output triggers a reclassification review — embed this in change management, not as a separate governance step."),
        ],
      ],
      examples: [
        {
          title: "European bank — three-tier classification in practice",
          body: "A European bank's AI classification framework classified 47 systems in year one: 8 Tier 1 (credit decisioning, HR screening, regulatory reporting AI), 19 Tier 2 (customer service AI, fraud monitoring, operational scheduling), 20 Tier 3 (internal document drafting, meeting summarisation, code assistance). Tier 1 governance requirements: DPIA mandatory, legal review, DPO sign-off, EU AI Act classification, executive sponsor. Tier 2: DPIA where personal data is processed, legal review, IT approval. Tier 3: IT registration, acceptable use acknowledgement. Classification completion time: average 3 hours for Tier 3, 2 weeks for Tier 2, 6 weeks for Tier 1.",
        },
        {
          title: "Use case extension reclassification",
          body: "A healthcare group's Tier 3 internal documentation AI was extended by the HR team to assist with drafting individual performance improvement plans. The change management trigger identified the extension as a material use case change — individual HR decisions — and generated a reclassification review. The system was reclassified as Tier 1 (employment AI with individual effects), triggering a mandatory DPIA, DPO review, and EU AI Act Annex III classification assessment. The extension was delayed six weeks for governance completion. The trigger prevented a Tier 3-governed system being used in a Tier 1 context.",
        },
        {
          title: "Classification decision tree — testing before publication",
          body: "A financial services firm tested its classification decision tree against 15 real AI systems before publication. The initial tree misclassified 4 systems: a loan pricing AI classified as Tier 2 (should be Tier 1 — financial services individual decision), a customer segmentation AI classified as Tier 1 (should be Tier 2 — no individual decision output), and two internal analytics tools mis-classified. Refinement based on test results produced a decision tree with 94% self-classification accuracy — published with legal escalation guidance for the 6% ambiguous cases.",
        },
      ],
    }),
    buildSection({
      number: "5.4",
      title: "Component Three: The Pre-Deployment Gate",
      subtitle: "A structured review process that scales with risk tier — fast for low-risk, rigorous for high-risk",
      take: "The pre-deployment gate is the mechanism that prevents non-compliant AI systems going live. It must be fast enough to avoid driving shadow AI adoption, rigorous enough to catch real governance gaps, and cross-functional enough to evaluate legal, technical, and business risk simultaneously.",
      why: "A pre-deployment gate with a 12-week review cycle for all AI systems will be systematically bypassed. A gate with tiered review timelines — 2 days for Tier 3, 3 weeks for Tier 2, 8 weeks for Tier 1 — is sustainable and will be respected.",
      paragraphs: [
        [
          s("The gate has different requirements by tier, but all tiers require minimum registration information. "),
          x(
            "All tiers: system name, owner, vendor, intended use case, data processed, and initial classification. Tier 3: IT registration, information security review, acceptable use acknowledgement. Tier 2: adds legal review for data processing, DPO consultation, and privacy notice update if required. Tier 1: adds DPIA, DPO sign-off, EU AI Act classification, legal review of vendor contract, bias testing evidence, explainability assessment, and human oversight design.",
            "The gate should be a form or workflow, not an email process. Forms create a record of what was reviewed; emails create ambiguity about completion status.",
          ),
          s(" Build the gate as a workflow system with automatic routing by tier, completion tracking, and notification to governance team when a high-tier system is submitted — governance should be proactive, not reactive."),
        ],
        [
          s("Gate reviews must be completed by named individuals with defined responsibilities. "),
          x(
            "Tier 1 gate: legal reviewer (lawful basis, vendor contract, bias evidence assessment); DPO reviewer (DPIA adequacy, rights infrastructure); information security reviewer (data handling, access controls); executive sponsor sign-off.",
            "Unnamed 'legal approval' or 'DPO review' creates ambiguity about who is accountable and whether the review was substantive. Named individuals with documented responsibilities create accountability and an audit trail.",
          ),
          s(" Assign named reviewers to each gate role and document their review completion — the gate record must evidence who reviewed what, not just that the process was completed."),
        ],
        [
          s("Gate failure — a system that does not pass the review — requires a defined response. "),
          x(
            "A system that fails the gate should receive: a written finding identifying the specific gaps, an owner-assigned remediation plan with target date, and a gate hold preventing deployment until remediation is confirmed complete.",
            "The gate's authority must be respected operationally: a system that fails the gate must not deploy regardless of commercial pressure. Gates with 'exceptions' become gates without authority. The gate is only a governance tool if it can say no.",
          ),
          s(" Establish gate failure as an absolute deployment hold — no exceptions without senior leadership sign-off on the specific risk accepted. Gates that cannot say no are not governance."),
        ],
      ],
      examples: [
        {
          title: "Global manufacturer — gate implementation",
          body: "A global manufacturer implemented a pre-deployment gate as a ServiceNow workflow in eight weeks. Tier 3 gate: automated routing, 2-day SLA, IT and information security review, automatic approval on completion. Tier 2 gate: manual routing to legal and DPO, 3-week SLA, escalation alert at day 15 if not complete. Tier 1 gate: assigned governance team member as coordinator, 8-week SLA, weekly status update to submitting team. Year one: 124 gates submitted, 97% within-SLA completion, 9 gate failures (4 Tier 2, 5 Tier 1), all requiring remediation before deployment. No gate exceptions approved.",
        },
        {
          title: "Commercial pressure vs. gate authority",
          body: "A financial services firm's Tier 1 AI gate was submitted for a vendor credit scoring tool with a commercial contract already signed and a go-live date committed to the vendor. The gate review identified three material gaps: no completed DPIA, no bias testing documentation, and no human oversight design. The governance team recommended a gate hold. Commercial pressure from the business team sought an exception from the CFO. The CFO declined the exception and directed the vendor relationship to accommodate a six-week delay. The vendor complied; the gaps were remediated; the system launched six weeks late with complete governance. The CFO's decision established gate authority.",
        },
        {
          title: "Fast gate for productivity AI — encouraging compliance",
          body: "A professional services firm's Tier 3 gate was designed to complete in 24 hours for standard productivity AI tools: an automated form, IT security automated scan, and automatic approval on scan completion for tools meeting pre-approved criteria (established SaaS platforms with standard data processing). Teams discovered the fast gate and began routing AI tool adoptions through governance voluntarily — previously, teams had bypassed governance to avoid delays. Fast governance for low-risk AI increases overall governance compliance by removing the friction that drives shadow AI.",
        },
      ],
    }),
    buildSection({
      number: "5.5",
      title: "Component Four: The Acceptable Use Policy",
      subtitle: "A practical policy that employees will actually read and follow",
      take: "An AI acceptable use policy defines the rules for how employees may use AI tools — including both company-approved tools and personal AI tools for work purposes. It must be short enough to read, specific enough to be actionable, and enforced with real consequences to be effective.",
      why: "Employee use of public AI tools (ChatGPT, Claude, Gemini) for work purposes is already widespread in most organisations — with or without a policy. An absent or unusable policy leaves the organisation exposed to confidentiality breaches, copyright violations, and data protection violations from employee AI use.",
      paragraphs: [
        [
          s("The acceptable use policy must address three types of employee AI use: company-approved tools, personal AI tools for work purposes, and AI in client or external deliverables. "),
          x(
            "Company-approved tools: what can be done with each tool, data classification restrictions, output review requirements for consequential decisions. Personal AI tools: what types of work tasks personal tools may or may not be used for; what data must never be input to personal AI tools.",
            "AI in external deliverables: when AI-generated content must be disclosed to clients; quality and accuracy verification requirements before AI-assisted work is sent externally; copyright and attribution obligations.",
          ),
          s(" The three-category structure covers the full employee AI use landscape — a policy that only addresses company tools leaves personal tool use and external deliverable risk unaddressed."),
        ],
        [
          s("The data classification restriction is the most operationally critical policy element. "),
          x(
            "Employees must know which data categories may not be input to any AI tool — public or company-provided. The minimum prohibited data categories for most organisations: personal data of customers or employees, financial data not intended for publication, legal advice and privileged communications, client confidential information, and proprietary technical information.",
            "The policy should express this as a positive list of what can be input to public AI tools (publicly available information, general background research, anonymised examples) rather than only a negative list of prohibited data — making compliance easier than avoidance.",
          ),
          s(" Express the data input rule as a positive list of what can be used with public AI, supplemented by the prohibited list — positive framing is more usable and leads to higher compliance than prohibition-only framing."),
        ],
        [
          s("Enforcement and training must accompany the policy — an unread, unenforced policy creates false assurance. "),
          x(
            "Policy launch: all-staff communication, mandatory training completion with comprehension check, manager acknowledgement for teams in high-risk functions. Enforcement: violation reporting pathway, defined consequences for data input policy violations, annual policy acknowledgement renewal.",
            "Training scenarios are more effective than policy text: 'Can I input customer feedback into ChatGPT to summarise themes? No — customer feedback is personal data. Can I use ChatGPT to draft a generic email template? Yes — no prohibited data is involved.' Scenario training produces compliance behaviour; policy text produces acknowledgement signatures.",
          ),
          s(" Replace lengthy policy text training with scenario-based training — ten specific scenarios covering the most common employee AI use cases are more effective than a 20-page policy reading requirement."),
        ],
      ],
      examples: [
        {
          title: "Samsung data leak — the cost of absent policy",
          body: "Samsung's 2023 case — employees inputting proprietary chip design code and internal meeting notes into ChatGPT — demonstrates the cost of absent acceptable use policy. Samsung subsequently banned all external AI tools for employees. A targeted acceptable use policy (prohibiting input of proprietary technical information) would have prevented the specific incident without requiring a full tool ban. Blanket bans of AI tools are operationally costly; targeted data classification restrictions achieve the same protection more sustainably.",
        },
        {
          title: "Professional services firm — scenario-based AUP training",
          body: "A professional services firm replaced its 15-page AI acceptable use policy with a 2-page policy supplemented by 12 specific scenarios published on the intranet. Scenarios covered: using ChatGPT for internal draft documents (permitted with output review), inputting client data to any AI tool (prohibited), using AI to summarise published research (permitted), generating client deliverable content with AI without disclosure (prohibited), using AI for code generation (permitted with security review for production code). Annual training completion rates: 94% versus 61% for the previous text-only policy.",
        },
        {
          title: "Law firm — AI in client deliverables policy",
          body: "A mid-size law firm's acceptable use policy included specific provisions for AI in client deliverables: AI-generated legal research must be citation-verified by a qualified lawyer before inclusion in any client advice; AI-generated contract drafts must be reviewed line by line by a qualified solicitor; client communications generated with AI assistance must be approved by a partner before sending; AI assistance must be disclosed in engagement letters where material. The policy was developed after the Mata v. Avianca case established the consequences of AI-hallucinated legal citations.",
        },
      ],
    }),
    buildSection({
      number: "5.6",
      title: "Component Five: Accountability and Ownership",
      subtitle: "Naming the people responsible for AI governance — by system, by function, and at board level",
      take: "AI governance without named accountable individuals is a policy document, not a programme. Minimum viable governance requires three accountability levels: a named owner for every AI system, a named AI governance lead at senior level, and board-level awareness and sponsorship. All three must be operational before the governance programme is considered live.",
      why: "Regulators investigating AI incidents ask the same first question: who was responsible for governance of this system? An organisation that cannot name a person is demonstrating governance failure — regardless of what its policy documents say.",
      paragraphs: [
        [
          s("System-level accountability: every AI system has a named business owner. "),
          x(
            "The system owner is the business leader who approved deployment, is accountable for the system's outcomes, has authority to commission bias testing and human oversight, and is the first-line contact for governance incidents. This is the CHRO for HR AI, the CFO for finance AI, the COO for operations AI — not an IT manager or data scientist.",
            "System ownership is a business accountability, not a technical accountability. The system owner does not need to understand model architecture — they need authority over deployment decisions, resource for governance compliance, and accountability for outcomes.",
          ),
          s(" Assign business function leaders as AI system owners before going live — if no business leader is willing to own accountability for an AI system's outcomes, that system is not ready for deployment."),
        ],
        [
          s("Programme-level accountability: a named AI governance lead with cross-functional authority. "),
          x(
            "The AI governance lead is responsible for: maintaining the inventory and classification framework, administering the pre-deployment gate, coordinating audits and compliance reviews, and reporting AI governance status to leadership. This is typically a senior role in Legal, Risk, or Technology with cross-functional authority.",
            "The AI governance lead must have authority to halt deployments that fail the gate — without this authority, the role is advisory. Named authority in the governance lead's role description, with board-level backing, creates the operational credibility the programme requires.",
          ),
          s(" The AI governance lead must have documented authority to halt non-compliant deployments — advisory roles without authority cannot operate an effective gate."),
        ],
        [
          s("Board-level accountability: awareness, sponsorship, and risk oversight. "),
          x(
            "The board does not run AI governance — but it is responsible for oversight of material risk. AI governance status, audit findings, open incidents, and material regulatory obligations should be reported to the appropriate board committee (risk, audit, or technology) at minimum annually, and for material incidents as they occur.",
            "Boards that receive AI governance reports make better decisions about governance resource allocation, executive accountability, and risk appetite — creating the top-down support that makes governance programmes sustainable.",
          ),
          s(" Include AI governance status in the annual risk committee report as a minimum — boards that cannot answer basic questions about their AI governance status are carrying unquantified regulatory risk."),
        ],
      ],
      examples: [
        {
          title: "FTSE 100 — AI governance lead appointment",
          body: "A FTSE 100 financial services firm appointed a Chief AI Governance Officer in 2024 — a new role reporting to the Chief Risk Officer with a mandate to build and operate the AI governance programme. The role's authority included: gate hold authority for Tier 1 AI deployments, mandatory engagement in all AI vendor contracts above £100K, and direct access to the Board Risk Committee. Year one outcomes: complete AI inventory (67 systems), all Tier 1 systems governed (11), four gate-held systems remediated before deployment, and zero material regulatory findings on AI governance in the FCA annual meeting.",
        },
        {
          title: "Mid-market firm — distributed ownership model",
          body: "A mid-market professional services firm with 800 employees established AI governance without a dedicated governance lead role: the General Counsel coordinates governance with the help of a part-time governance coordinator. System owners are the relevant function heads (CHRO, CFO, COO). The pre-deployment gate is a lightweight form reviewed by the General Counsel for Tier 2+ and IT for Tier 3. Board reporting via the audit committee quarterly. The model demonstrates that minimum viable governance is achievable without a dedicated governance department — coordination and named accountability are the key ingredients.",
        },
        {
          title: "Regulator inquiry — accountability question",
          body: "An ICO inquiry into an AI-assisted recruitment tool at a UK employer began with a single question: 'Who is responsible for governance of this AI system?' The employer named the HR Director as system owner, the General Counsel as governance lead, and the Chair of the Audit Committee as board sponsor. The ICO investigator noted the named accountability structure as evidence of governance maturity and proceeded to substantive review of governance documentation. Organisations unable to name accountable individuals at the opening of an inquiry demonstrate governance failure before any substantive review begins.",
        },
      ],
    }),
    buildSection({
      number: "5.7",
      title: "Scaling Minimum Viable Governance Over Time",
      subtitle: "How the five-component programme evolves as your AI portfolio grows and regulatory requirements mature",
      take: "Minimum viable governance is the starting point, not the destination. As your AI portfolio grows, regulatory obligations mature, and governance programme matures, the five components scale — deeper auditing, more sophisticated monitoring, and specialist capabilities added as risk justifies investment.",
      why: "Organisations that build minimum viable governance well are positioned to scale effectively. Those that build comprehensive governance frameworks before deploying real AI have frameworks that do not match operational reality. Start minimum, scale to fit.",
      paragraphs: [
        [
          s("Scaling the inventory: from spreadsheet to system-of-record. "),
          x(
            "A spreadsheet inventory is viable for portfolios under 30 AI systems. As the portfolio grows and governance requirements become more complex — tracking DPIA status, audit schedules, vendor compliance, and monitoring results for 60+ systems — a purpose-built governance system or a well-configured GRC platform becomes necessary.",
            "The transition point is when governance data management consumes more time than governance activity. A well-configured GRC platform (Archer, ServiceNow GRC, or AI-specific tools like Credo AI or ValidMind) automates inventory maintenance, status tracking, and reporting — freeing governance resource for the substantive work.",
          ),
          s(" Plan the inventory system transition before you need it — retrofitting a GRC platform to 80 AI systems with complex governance histories is significantly harder than building the system for 30 and scaling."),
        ],
        [
          s("Scaling the gate: adding specialist review capabilities for complex systems. "),
          x(
            "The initial gate relies on general legal and DPO capability. As high-risk AI systems proliferate — credit AI, HR AI, health AI — specialist review capability becomes necessary: algorithmic auditors, AI ethics reviewers, and sector-specific regulatory specialists.",
            "Specialist capability can be built in-house or contracted externally. For most mid-market organisations, a panel of specialist external advisors supplementing internal general capability is more cost-effective than building specialist in-house teams.",
          ),
          s(" Build specialist review capability for the highest-risk AI domains before the volume of Tier 1 systems exceeds general legal and DPO capacity — the capacity constraint is a governance risk, not just a resource question."),
        ],
        [
          s("Scaling monitoring: from manual review to automated monitoring infrastructure. "),
          x(
            "Initial governance monitoring relies on manual review of audit reports and vendor documentation. As production AI systems generate operational data — accuracy metrics, bias monitoring results, explanation quality scores, incident logs — automated monitoring infrastructure becomes necessary to maintain visibility across the portfolio.",
            "The minimum monitoring infrastructure for a mature AI programme: a performance dashboard for each in-scope AI system, automated threshold alerting for bias and accuracy deviations, and a consolidated governance status dashboard for leadership reporting.",
          ),
          s(" Invest in monitoring infrastructure when manual review of governance data becomes the bottleneck — the governance programme is only as good as its ability to detect and respond to live issues."),
        ],
      ],
      examples: [
        {
          title: "Technology company — governance programme maturation",
          body: "A technology company's AI governance programme at year one: spreadsheet inventory (34 systems), Word document acceptable use policy, email-based gate process, and a General Counsel as part-time governance lead. Year three: GRC-platform inventory (89 systems), scenario-based AUP with annual digital training, ServiceNow workflow gate with automated Tier 3 approval, dedicated AI Governance Lead role, quarterly automated monitoring dashboard, and annual external algorithmic audits for all Tier 1 systems. The year three programme is a natural evolution of the year one minimum viable programme — not a replacement.",
        },
        {
          title: "GRC platform selection for AI governance",
          body: "A financial services firm evaluated three GRC platforms for AI governance: a general GRC platform (Archer), a ServiceNow GRC module, and a specialist AI governance platform (ValidMind). Decision factors: integration with existing IT governance processes (Archer won on integration), AI-specific features including model card support and bias testing integration (ValidMind won), and cost per AI system at scale (ServiceNow most cost-effective at 100+ systems). The firm selected ServiceNow for integration and cost, supplemented by ValidMind for model documentation for the 11 highest-risk systems.",
        },
        {
          title: "Monitoring automation — threshold alerting in practice",
          body: "A retail bank's AI monitoring infrastructure automatically alerts the AI governance lead when: any AI system's accuracy metric falls below a defined threshold; any bias monitoring result exceeds the fairness policy threshold; any AI system's explanation quality score falls below standard; and any AI incident is classified as Tier 2 or above. Year one alerts: 23 performance alerts (all investigated, 7 required model review), 4 bias threshold alerts (2 required remediation), and 1 Tier 2 incident. Automation reduced governance lead time on monitoring by 60% while increasing alert response time from 5 days (manual review cycle) to 1 day (automated alert).",
        },
      ],
    }),
    buildSection({
      number: "5.8",
      title: "The 60-Day Minimum Viable Governance Launch Plan",
      subtitle: "A practical week-by-week programme that any business leader can sponsor",
      take: "Minimum viable governance can be operational in 60 days. The launch plan is: days 1–15 discovery (inventory and stakeholder mapping), days 16–30 framework (classification, gate design, policy draft), days 31–45 review (cross-functional review and legal sign-off), days 46–60 launch (communication, training, and gate go-live). Business leader sponsorship is the single biggest determinant of speed.",
      why: "The 60-day plan is achievable because minimum viable governance requires no new technology, no new specialist hires, and no complex integration — it requires clear decisions, named accountability, and a business leader willing to sign off and enforce.",
      paragraphs: [
        [
          s("Days 1–15: discovery and stakeholder mapping. "),
          x(
            "Week 1: run the AI discovery exercise — survey all function heads, review IT procurement records, interview data science leads, audit API logs. Output: draft AI inventory. Week 2: identify governance stakeholders — legal, DPO, IT, CISO, and business function leads who will be system owners. Establish a governance working group with meeting cadence through to day 60.",
            "The working group meeting cadence is the engine of the 60-day plan. Weekly 60-minute meetings with named decisions at each meeting keep momentum. Without the working group, governance design falls to email chains and stalls.",
          ),
          s(" Establish the governance working group in week one — the working group cadence is what makes the 60-day plan achievable."),
        ],
        [
          s("Days 16–45: design, draft, and review. "),
          x(
            "Days 16–30: design the classification framework and decision tree; draft the gate process and forms; draft the acceptable use policy; identify and brief system owners. Days 31–45: legal review of all governance documents; DPO review of DPIA requirement and rights infrastructure design; cross-functional pilot of the gate process with three to five real systems.",
            "The gate pilot is essential: running real systems through the draft gate before launch identifies friction points, ambiguities in the classification framework, and resource gaps in the review process. Launching an untested gate creates avoidance behaviour from day one.",
          ),
          s(" Pilot the gate with three to five real AI systems before launch — find and fix the friction before business teams experience it."),
        ],
        [
          s("Days 46–60: launch, communicate, and enforce. "),
          x(
            "Day 46–50: all-staff communication from business leader sponsor, manager briefings for high-risk function teams, mandatory AUP training launched with completion deadline.",
            "Day 51–60: gate goes live for all new deployments; review committee has first meeting; shadow IT discovery mechanism activated. Day 60 milestone: the governance programme is operational — not perfect, but live with clear accountability and enforcement.",
          ),
          s(" The day 60 milestone is not the end — it is the start of the governance programme's operational life. Month 3 retrospective, month 6 programme review, and annual maturation planning keep minimum viable governance moving toward comprehensive governance."),
        ],
      ],
      examples: [
        {
          title: "Professional services firm — 58-day launch",
          body: "A 600-person professional services firm launched minimum viable AI governance in 58 days. Week 1: inventory discovery (27 AI systems found, 9 more than IT records showed). Weeks 2–3: classification framework drafted, gate process designed, AUP drafted. Weeks 4–5: legal and DPO review, pilot gate run with 5 systems (2 required classification revision). Weeks 6–7: all-staff communication, manager briefings, AUP training launch. Week 8: gate live, shadow IT sweep mechanism activated. Day 58 status: 27 systems classified, 4 Tier 1 systems in gate review, AUP training 88% complete, governance working group meeting fortnightly.",
        },
        {
          title: "Business leader sponsor — the decisive factor",
          body: "Two comparable financial services firms launched AI governance programmes simultaneously. Firm A's programme was sponsored by the CISO — it produced governance documentation but could not enforce gate holds against commercial pressure, and business units routinely bypassed the gate for low-priority systems. Firm B's programme was sponsored by the CEO with a specific mandate to the COO and CFO — the gate was respected, no exceptions were approved without CEO sign-off, and shadow AI was systematically captured. Six months in: Firm A had 60% of AI systems in governance; Firm B had 93%. Sponsor authority is the single biggest determinant of governance effectiveness.",
        },
        {
          title: "Month 3 retrospective — programme adjustment",
          body: "A retailer's AI governance programme month 3 retrospective identified three friction points: the Tier 2 gate was taking 6 weeks instead of the 3-week SLA (legal capacity bottleneck); the classification decision tree was generating too many escalations (ambiguity in the 'operational AI' definition); and system owners were not maintaining their inventory entries (no reminder mechanism). Actions: legal resource supplemented with external panel for Tier 2 reviews; decision tree clarified with two additional example scenarios; automated quarterly reminder emails to system owners for entry review. Three programme adjustments at month 3 prevented three governance failures at month 12.",
        },
      ],
    }),
  ],
  quiz: [
    {
      q: "Your organisation has a comprehensive AI governance framework in a 60-page policy document, but a quarterly audit reveals 40% of AI deployments occurred outside the governance process. What is the root cause and correct response?",
      options: [
        "The governance policy needs to be more comprehensive — add more detailed requirements.",
        "The governance programme has failed the usability test: it is too complex or too slow, driving shadow AI adoption. Replace with a tiered minimum viable governance programme — maximum 2-day gate for Tier 3, 3-week for Tier 2 — that business teams will actually use.",
        "Implement mandatory training on the governance policy for all employees.",
        "Increase audit frequency to quarterly monitoring of all deployments.",
      ],
      correct: 1,
      correctFeedback:
        "Right. 40% shadow AI adoption indicates governance friction is driving avoidance. Complexity and speed, not comprehensiveness, are the problems. Tiered governance with proportional friction is the solution. Re-read section 5.1.",
      wrongFeedback:
        "More comprehensive governance increases friction and will worsen shadow AI adoption. The programme has failed on usability — tiered governance with fast lanes for low-risk AI is the solution to shadow AI, not greater complexity. Re-read section 5.1.",
    },
    {
      kind: "order",
      q: "Order the five components of minimum viable AI governance from foundational first to final component.",
      prompt: "Drag to arrange from first component (top) to last (bottom).",
      items: [
        "AI inventory: complete, maintained register of all AI systems in use",
        "Risk classification: tiered framework determining governance requirements",
        "Pre-deployment gate: structured review process scaled by risk tier",
        "Acceptable use policy: clear rules for employee AI use including personal tools",
        "Accountability and ownership: named individuals responsible at system, programme, and board level",
      ],
      correctFeedback:
        "Right. Inventory first — you cannot classify what you have not found. Then classification to determine requirements, then the gate to enforce them, then the AUP to govern employee use, then accountability to make it all operational. Re-read sections 5.2–5.6.",
      wrongFeedback:
        "Inventory must be first — classification, gate, and accountability all depend on knowing what AI systems exist. Without a complete inventory, governance has no foundation. Re-read sections 5.2–5.6.",
    },
    {
      kind: "categorize",
      q: "Classify each AI system into the correct minimum viable governance tier.",
      categories: ["Tier 1 (High Risk)", "Tier 2 (Medium Risk)", "Tier 3 (Low Risk)"],
      items: [
        { text: "An AI system that automatically screens and ranks job applicants for EU-based hiring.", category: 0 },
        { text: "A customer service chatbot that answers product FAQs and routes complex queries to human agents.", category: 1 },
        { text: "An AI writing assistant that helps employees draft internal emails and documents.", category: 2 },
        { text: "An AI credit scoring model used to approve or decline personal loan applications.", category: 0 },
        { text: "A demand forecasting AI that generates purchase order recommendations for review by procurement managers.", category: 1 },
        { text: "A meeting transcription and summarisation tool used for internal team meetings only.", category: 2 },
      ],
      correctFeedback:
        "Right. Tier 1: AI making consequential individual decisions (hiring, credit). Tier 2: customer-facing or operational AI with significant impact but not individual decisions. Tier 3: internal productivity AI with no customer, employee decision, or regulated context. Re-read section 5.3.",
      wrongFeedback:
        "Tier 1: decisions with legal or significant individual effects. Tier 2: operational AI with business impact but no individual decisions. Tier 3: internal productivity with no regulated context. Re-read section 5.3.",
    },
    {
      q: "Six months after deploying an AI scheduling tool (Tier 3), the HR team extends its use to assist with generating individual performance improvement plan (PIP) recommendations. What governance action is required?",
      options: [
        "No action needed — the tool was already classified and approved as Tier 3.",
        "The use case extension to individual HR decisions (PIP recommendations) triggers a reclassification review. The system must be reclassified — likely to Tier 1 as employment AI with individual effects — and the full Tier 1 gate must be completed before the PIP use case goes live.",
        "Notify the DPO of the change and proceed if no objection is raised within 5 business days.",
        "Reclassify as Tier 2 and proceed — PIP recommendations are advisory, not decisions.",
      ],
      correct: 1,
      correctFeedback:
        "Right. Any material use case extension triggers reclassification. PIP recommendations are employment AI with individual effects — likely Tier 1 under the EU AI Act's Annex III — requiring full governance review before this use case is deployed. Re-read section 5.3.",
      wrongFeedback:
        "Original classification does not cover new use cases. A use case extension to individual employment decisions is a material change requiring reclassification review. The EU AI Act's Annex III covers employment AI — this use case may now be Tier 1. Re-read section 5.3.",
    },
    {
      q: "An AI governance programme has named the IT Director as accountable owner for all AI systems. A discrimination complaint about an AI hiring tool is filed naming the employer. The HR Director claims no responsibility for the tool's governance. What governance structure failure does this illustrate?",
      options: [
        "IT was the wrong technical owner — the CISO should own AI governance.",
        "System accountability was assigned to a technical function rather than the business function that deploys and benefits from the AI. Business function leaders — not IT — must own accountability for AI outcomes in their domain. IT is a governance enabler, not the governance accountable owner.",
        "The governance programme needs a dedicated Chief AI Officer.",
        "The HR Director should have been copied on IT governance decisions.",
      ],
      correct: 1,
      correctFeedback:
        "Right. IT accountability for business AI outcomes creates accountability gaps. The HR Director owns HR AI — they approved deployment, benefit from it, and are accountable for its outcomes. Technical accountability (IT) and business accountability (function head) are different — both are needed, but business accountability is primary. Re-read section 5.6.",
      wrongFeedback:
        "Assigning business AI accountability to IT creates the exact gap evidenced here. The business function that deploys and benefits from AI must own accountability for its outcomes — IT provides governance infrastructure and technical oversight, but cannot own business outcome accountability. Re-read section 5.6.",
    },
    {
      kind: "order",
      q: "Order the 60-day minimum viable governance launch plan phases from first to last.",
      prompt: "Drag to arrange from first phase (top) to final milestone (bottom).",
      items: [
        "Days 1–15: AI discovery exercise and governance working group establishment",
        "Days 16–30: classification framework design, gate process design, and AUP draft",
        "Days 31–45: legal and DPO review, and gate pilot with real AI systems",
        "Days 46–50: all-staff communication and AUP training launch",
        "Days 51–60: gate goes live, shadow IT sweep activated, governance operational",
        "Month 3: programme retrospective and adjustment based on operational experience",
      ],
      correctFeedback:
        "Right. Discovery → design → review and pilot → communicate → launch → retrospective. The gate pilot before launch is essential — launching an untested gate creates avoidance behaviour. The month 3 retrospective adjusts the programme before problems become entrenched. Re-read section 5.8.",
      wrongFeedback:
        "Discovery must precede design — you cannot design a classification framework without knowing what systems exist. The gate pilot must precede launch — an untested gate will create friction that drives shadow AI. Re-read section 5.8.",
    },
  ],
});
