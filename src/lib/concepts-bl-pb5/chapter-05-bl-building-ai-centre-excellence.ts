import { BL_CALLOUT, buildChapter, buildSection, s, x, sectionWithDiagram } from "../concepts-bl-helpers";

export const chapter05BlBuildingAiCentreExcellence = buildChapter({
  slug: "bl-building-ai-centre-excellence",
  number: 5,
  shortTitle: "AI Centre of Excellence",
  title: "Building an AI Centre of Excellence",
  readingMinutes: 26,
  summary:
    "An AI Centre of Excellence is the organisational mechanism that prevents every business function from solving the same AI problems independently at higher cost and lower quality than a shared capability could achieve. Business leaders who design their CoE mandate, governance model, and resourcing strategy deliberately build a function that compounds in value. Those who create a CoE reactively — in response to AI chaos in the organisation — spend two years fixing structural problems that a deliberate design would have prevented.",
  keyTakeaway:
    "An AI Centre of Excellence is not an AI team — it is an enabling function. Its job is to make every business function's AI capability better than it would be alone: through shared standards, reusable infrastructure, vendor relationships, talent development, and governance. A CoE that tries to own and control AI across the organisation becomes a bottleneck. A CoE that enables and amplifies function-level AI becomes a multiplier.",
  pmCallout: BL_CALLOUT,
  sections: [
    sectionWithDiagram({
      number: "5.1",
      title: "What a Centre of Excellence actually does",
      subtitle: "Four functions that distinguish a value-creating CoE from an AI bureaucracy",
      take: "An AI Centre of Excellence creates value through four activities: establishing shared standards that prevent every function from making the same governance mistakes, building shared infrastructure that reduces the cost of AI deployment for all functions, developing talent that individual functions could not develop independently, and managing the vendor relationships that give the organisation purchasing leverage. A CoE that does these four things is a force multiplier. A CoE that primarily reviews, approves, or controls AI initiatives is a governance bureaucracy.",
      why: "Business leaders who sponsor a CoE must understand what it should and should not do before designing it. The most common CoE failure mode is mission creep from enabling to controlling — a transition that happens gradually and is often welcomed by the CoE team but resisted by the functions it was designed to serve.",
      paragraphs: [
        [
          s("Shared standards prevent organisations from discovering the same failure modes in every function sequentially. "),
          x(
            "Without a CoE, the sales function learns through an expensive failure that AI output review processes are necessary. The finance function learns the same lesson 9 months later. The HR function learns it 9 months after that. A CoE that documents and distributes the sales function's failure as a standard means the finance and HR functions never pay the price of the lesson.",
            "The value of standards compounds across functions and time. A single AI ethics framework, output review protocol, or vendor due diligence checklist — produced once by the CoE — applied across 8 functions over 3 years produces 24 instances of saved remediation cost.",
          ),
          s(" Measure CoE standards value by counting the number of functions using each standard, not by the number of standards produced."),
        ],
        [
          s("Shared infrastructure reduces the marginal cost of AI deployment as the organisation scales. "),
          x(
            "A centrally managed AI platform, data access layer, and model registry means that when a new function wants to deploy an AI tool, it plugs into existing infrastructure rather than building from scratch. Without this infrastructure, every function builds its own data pipeline, its own model hosting environment, and its own monitoring setup — at 3–5× the cost of shared infrastructure and with inconsistent security and governance standards.",
            "The shared infrastructure argument is the most compelling financial case for a CoE. Calculate the infrastructure cost for one function's AI deployment and multiply by the number of functions — the delta between per-function cost and shared infrastructure cost is the CoE's financial justification.",
          ),
          s(" Calculate the infrastructure cost multiplier (per-function cost × number of functions ÷ shared infrastructure cost) in your CoE business case."),
        ],
        [
          s("The CoE should own the vendor relationship strategy, not the vendor relationships themselves. "),
          x(
            "A CoE that negotiates enterprise agreements, manages the approved vendor list, and conducts due diligence on AI vendors gives every function access to vendors who have passed security and governance review and who have been contracted at enterprise pricing. Individual functions retain the decision on which approved vendor to use for their specific use case.",
            "A CoE that allows any function to contract any vendor independently fragments the organisation's negotiating position and creates a security governance gap. A CoE that controls all vendor relationships creates a procurement bottleneck. The right model is central approval and negotiation, decentralised selection.",
          ),
          s(" Separate the CoE's vendor approval function (central) from the function's vendor selection function (decentralised)."),
        ],
      ],
      examples: [
        {
          title: "Insurance — standards prevent repeated failure",
          body: "An insurer's CoE documented its claims AI tool's output review failure as an AI governance standard within 30 days of the incident. The standard was distributed to 7 other functions deploying AI tools. Post-implementation review 12 months later: 6 of 7 functions cited the standard as having prevented them from deploying without an output review protocol. Estimated remediation cost avoided per function: £85,000. Total value of one standard document: £510,000.",
        },
        {
          title: "Retailer — infrastructure multiplier",
          body: "A retailer's CoE built a shared AI data platform for £420,000. Estimated cost for 6 functions to build equivalent infrastructure independently: £140,000 per function × 6 = £840,000. Infrastructure savings year 1: £420,000. By year 2, 3 additional functions onboarded to the platform at marginal cost of £15,000 each versus £140,000 each independently. The multiplier effect made the CoE infrastructure investment self-funding within 14 months.",
        },
        {
          title: "Financial services — vendor strategy value",
          body: "A bank's CoE negotiated enterprise agreements with 5 AI vendors. Each agreement included preferred pricing, security certification status, and standard contract terms pre-negotiated. When the commercial banking function needed an AI analytics vendor, it selected from the approved list in 2 weeks (versus a typical 12-week procurement for a new vendor). Pricing was 22% below what the function would have negotiated independently. The time saving alone — 10 weeks of a 3-person evaluation team — was valued at £65,000.",
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
      number: "5.2",
      title: "Centralise vs federate: CoE governance models",
      subtitle: "The three CoE governance models and when each is appropriate",
      take: "AI CoE governance exists on a spectrum from fully centralised (CoE owns and builds all AI) to fully federated (CoE provides standards; functions build independently) with a hub-and-spoke hybrid model between them. The right model depends on organisational size, AI maturity, data governance complexity, and the level of function autonomy the organisation is willing to grant. Most large organisations should start with hub-and-spoke and evolve toward federation as function capability matures.",
      why: "Governance model mismatch is the most common cause of CoE failure: a centralised CoE in a decentralised organisation creates bottlenecks; a federated CoE in an immature organisation creates ungoverned AI sprawl. Matching the model to the organisation's actual context — not its ideal state — is the design principle.",
      paragraphs: [
        [
          s("The centralised model gives the CoE full accountability for all AI capability. "),
          x(
            "Functions submit AI requirements to the CoE; the CoE builds, deploys, and operates the AI systems. Advantages: highest standard consistency, most efficient resource use, best data governance control. Disadvantages: creates a deployment queue that slows function-level AI adoption; removes function ownership and accountability; CoE capacity becomes the organisational AI capacity.",
            "Centralised models work when the organisation has very few AI use cases (under 10), very high data sensitivity requirements (financial services, healthcare), or very immature function-level AI literacy. They fail when the organisation scales beyond 15–20 active AI use cases and the CoE becomes a bottleneck.",
          ),
          s(" Use the centralised model only as a starting position, not as a permanent structure. Plan the transition to hub-and-spoke at 10–15 active AI use cases."),
        ],
        [
          s("The hub-and-spoke model positions the CoE as an enabling centre with embedded function-level AI roles. "),
          x(
            "The CoE hub provides standards, shared infrastructure, vendor relationships, and specialist expertise. Each function has 1–2 AI roles (workflow owner, practitioner) who report to the function but are supported and governed by the CoE. Functions build their own AI within CoE standards; the CoE provides the framework and support.",
            "Hub-and-spoke is the most common enterprise AI governance model because it balances function speed and autonomy with organisational standards and governance. It requires the CoE to invest heavily in the quality of its standards, toolkits, and support — if the CoE's enabling materials are poor, functions bypass them.",
          ),
          s(" The quality of the CoE's enabling materials (standards, playbooks, templates) determines whether functions use them or bypass them. Invest in quality, not quantity."),
        ],
        [
          s("The federated model gives functions full autonomy within a light-touch CoE governance framework. "),
          x(
            "Functions own their AI capability entirely; the CoE provides a minimal governance framework (data standards, security requirements, approved vendor list) and a community of practice for sharing knowledge. The CoE does not provide implementation support. Advantages: maximum function speed and ownership. Disadvantages: inconsistent governance standards, risk of security and compliance gaps, duplication of effort across functions.",
            "Federated models work when functions have mature AI capability, the organisation has high governance discipline, and the complexity of AI use cases is manageable without specialist oversight. They are appropriate for technology companies and AI-native organisations, not for enterprises in early AI adoption.",
          ),
          s(" Federated governance is the destination, not the starting point. It requires mature function-level AI capability to work safely."),
        ],
      ],
      examples: [
        {
          title: "Healthcare — centralised to hub-and-spoke transition",
          body: "A hospital trust started with a centralised CoE model due to clinical data sensitivity requirements. The CoE managed all AI deployments for the first 18 months and built 6 AI systems. By month 20, there were 14 AI projects queued, with an average wait time of 4 months. The CoE transitioned to hub-and-spoke: 3 clinical functions received dedicated AI workflow owners supported by the CoE, while the CoE retained oversight of data governance and security standards. Queue time dropped to 6 weeks for new AI projects within 6 months of the transition.",
        },
        {
          title: "Financial services — hub-and-spoke at scale",
          body: "A bank's CoE ran a hub-and-spoke model across 8 business functions. Each function had 1–2 embedded AI roles supported by a weekly CoE clinic (1 hour per function, virtual). The CoE produced 12 standard playbooks covering common AI deployment scenarios. Function survey data showed that 78% of function-level AI project time was self-managed without CoE escalation. The 22% requiring CoE support was primarily data governance decisions (12%) and vendor approvals (10%). The hub-and-spoke model enabled a CoE team of 9 to effectively support AI deployments across 8 functions simultaneously.",
        },
        {
          title: "Technology company — federated model outcome",
          body: "A software company attempted a federated CoE model with minimal governance after its engineering teams resisted central oversight. Within 18 months: 6 functions had independently selected AI vendors, 3 of which overlapped (paying three times for similar capability), 2 functions had data handling practices that failed the annual security audit, and AI capability was concentrated in 2 of 6 functions with the other 4 underserved. The company implemented a hub-and-spoke model with a retrospective audit. The federated model had appeared faster in months 1–6 and was more expensive and riskier by month 18.",
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
      title: "CoE team structure and founding roles",
      subtitle: "The minimum viable team that can enable enterprise AI adoption",
      take: "A Centre of Excellence can be effective with a founding team of 4–7 people if the roles are right. The founding team needs five capabilities: AI technical leadership (to set standards and support engineering decisions), data governance expertise (to manage data access and quality standards), change and adoption expertise (to drive function-level adoption), commercial and vendor expertise (to manage vendor relationships and contracts), and programme coordination (to manage the CoE's portfolio of initiatives). These capabilities can be distributed across fewer people in smaller organisations.",
      why: "CoEs that are staffed entirely with technical roles fail to drive adoption. CoEs staffed entirely with change management roles fail to set technical standards. The right founding team covers the full enabling spectrum — from technical standards to behavioural adoption.",
      paragraphs: [
        [
          s("The five founding roles and their primary accountabilities. "),
          x(
            "AI Technical Lead (1 person, typically senior): sets AI standards, reviews engineering decisions, supports function-level technical questions. Data Governance Lead (1 person): manages data access policies, data quality standards, and AI data ethics. Adoption and Change Lead (1 person): drives function-level training, adoption measurement, and change management. Vendor and Commercial Lead (1 person, can be shared with procurement): manages vendor approvals, negotiations, and contract standards. Programme Coordinator (1 person): manages the CoE portfolio, coordinates cross-function AI initiatives, manages the CoE operating model.",
            "In organisations under 2,000 employees, 3–4 people covering these capabilities across combined roles can be effective. In organisations over 10,000 employees, the minimum viable founding team is 6–8 people.",
          ),
          s(" Size the founding team to the number of active AI use cases, not to the number of employees. One CoE team member per 3–5 active AI use cases is a reasonable initial ratio."),
        ],
        [
          s("The CoE lead's role is the most important hiring decision in the CoE formation. "),
          x(
            "An effective CoE lead needs four qualities that are rarely found in combination: deep AI technical credibility (to be respected by engineering teams), strong business acumen (to connect AI capability to business value), organisational influence (to secure function-level buy-in without line authority), and change leadership (to drive adoption without controlling behaviour). Technical excellence without business acumen produces a CoE that builds impressive things that functions do not use. Business acumen without technical credibility produces a CoE whose standards are not respected by engineering teams.",
            "The CoE lead is typically the hardest hire in the AI talent market. Budget at the top of the market for this role — the multiplier effect of the right CoE lead on organisational AI capability is 3–5× the impact of the right hire in any function-level AI role.",
          ),
          s(" Write the CoE lead job description against all four qualities. Reject candidates who excel in two or three but have significant gaps in any one."),
        ],
        [
          s("Build the CoE team's credibility through early delivery, not through extensive design. "),
          x(
            "A CoE team that spends its first 6 months designing its governance framework, building its operating model, and presenting at leadership conferences has not earned the credibility it will need to influence function behaviour. A CoE team that delivers 2–3 tangible outcomes in its first 90 days — a completed vendor approval, a deployed standard that solved a real function problem, a knowledge transfer session that was rated as highly useful — has.",
            "Function leaders who have not seen the CoE deliver anything concrete in its first 6 months will route around it. Early wins are not marketing — they are the foundation of operational trust.",
          ),
          s(" Set 3 concrete CoE delivery targets for the first 90 days before recruiting the founding team. The targets create accountability from day one."),
        ],
      ],
      examples: [
        {
          title: "Logistics — minimum viable CoE team",
          body: "A logistics company formed a 4-person CoE founding team: an AI Technical Lead (former senior data scientist from a technology company), a Data Governance Lead (internal hire from the data team), a combined Adoption and Change Lead (internal hire from HR with AI upskilling), and a Programme Coordinator (internal hire from project management office). The team ran 11 function-level AI deployments in 18 months with no additional headcount. The 4-person model was sustainable because the technical and governance work was standards-based and reusable.",
        },
        {
          title: "Financial services — CoE lead hiring standard",
          body: "A bank spent 4 months finding its CoE lead, declining 11 candidates. Of the 11: 4 were strong technically but had no business acumen; 3 had business acumen but no AI technical credibility; 2 had both but had not demonstrated change leadership experience; 2 were close matches but lacked the specific financial services regulatory knowledge required. The eventual hire brought all four qualities from a previous role as Head of AI Transformation at a comparable bank. The investment in quality hiring time paid back in credibility with both engineering teams and function leaders from the first month.",
        },
        {
          title: "Healthcare — 90-day CoE delivery targets",
          body: "A hospital trust set 3 targets for its CoE team before the team was assembled: complete the AI vendor due diligence framework (week 6), deliver one function's AI deployment using the new standard (week 10), and run one cross-function knowledge sharing session with 20+ attendees (week 12). The targets were met at weeks 7, 11, and 13. By the time the CoE presented its operating model to the board at month 6, it had operational credibility with 3 functions. The board approved the full CoE resourcing plan without challenge — because the CoE was already demonstrably delivering.",
        },
      ],
    }),
    buildSection({
      number: "5.4",
      title: "CoE mandate: what to own and what to enable",
      subtitle: "Drawing the right boundary between CoE ownership and function autonomy",
      take: "The CoE mandate must specify, with precision, which activities the CoE owns (must be involved in every instance), which it enables (provides support but functions decide), and which are entirely in function hands (CoE not involved). Mandate ambiguity creates two failure modes: functions bypass the CoE when it should be involved (governance gaps), or the CoE inserts itself into function decisions where it should not be (bottleneck). Precision prevents both.",
      why: "A vague CoE mandate — 'oversee AI across the organisation' — guarantees both failure modes simultaneously. Functions interpret 'oversee' differently: some route everything through the CoE; others route nothing. The result is inconsistent governance that no one can explain or defend.",
      paragraphs: [
        [
          s("Three categories of CoE mandate: own, enable, and inform. "),
          x(
            "Own (CoE must be involved and has decision authority): data governance standards, AI security and compliance requirements, vendor approval and contracting, AI ethics framework. Enable (CoE provides support; functions decide): AI tool selection from the approved list, deployment approach, output review protocol design, training programme design. Inform (CoE has advisory input only): function-level AI prioritisation, product roadmap decisions, headcount allocation for AI roles.",
            "The 'own' category should be as small as possible — only the things that create unacceptable risk if functions act unilaterally. Expanding 'own' increases bottleneck risk; contracting it increases governance gap risk.",
          ),
          s(" Review the 'own' category annually and move items to 'enable' as functions mature and governance risks reduce."),
        ],
        [
          s("The mandate must be agreed with function leaders, not imposed on them. "),
          x(
            "A mandate developed by the CoE and approved by the CISO and CHRO without function leader input will be respected in governance forums and ignored in daily practice. Function leaders who participated in defining the mandate have contributed to its design and are more likely to enforce it within their functions.",
            "Function leader input typically narrows the 'own' category (because functions resist CoE control) and expands the 'enable' category (because functions want support without control). This is usually the right direction: enabling is more scalable than owning.",
          ),
          s(" Run a 2-hour mandate definition workshop with 4–6 function leaders before finalising the CoE charter."),
        ],
        [
          s("The mandate should include explicit escalation paths for mandate boundary disputes. "),
          x(
            "When a function leader and the CoE disagree on whether a decision is 'owned' by the CoE or 'enabled' by the CoE, there must be a clear escalation path that resolves the dispute without either party escalating to the CEO. Typically: the CISO for security and data governance boundary disputes, the CHRO for talent and adoption boundary disputes, the CFO for commercial and vendor boundary disputes.",
            "Without escalation paths, mandate boundary disputes either stall AI initiatives while they are resolved through informal channels, or they bypass the CoE mandate entirely. Both outcomes undermine the CoE's credibility.",
          ),
          s(" Include named escalation owners for each mandate category in the CoE charter."),
        ],
      ],
      examples: [
        {
          title: "Insurance — mandate precision reduces bottleneck",
          body: "An insurer's CoE charter initially placed AI tool selection in the 'own' category, requiring CoE sign-off on every function's tool choice from the approved vendor list. This created a 6-week queue for tool selection decisions. A mandate review moved tool selection to 'enable': functions select from the approved list with CoE advisory support. The 6-week queue was eliminated. CoE involvement in tool selection dropped from 100% (all decisions) to 35% (functions that requested advisory support). Governance was not compromised because the approved vendor list ensured all selected tools met security and compliance requirements.",
        },
        {
          title: "Technology company — function-led mandate definition",
          body: "A technology company ran a mandate definition workshop with 5 function leaders before its CoE charter was written. The initial CoE proposal placed 12 activities in 'own.' Function leaders accepted 4 as appropriate for CoE ownership (security, data governance, vendor approval, ethics), moved 5 to 'enable' (deployment approach, output review design, training design, integration standards, monitoring requirements), and removed 3 entirely from CoE involvement (function AI prioritisation, team structure, AI budget allocation). The resulting mandate was more limited than the CoE team proposed and more functional than the functions originally feared.",
        },
        {
          title: "Retailer — escalation path in practice",
          body: "A retailer's CoE charter named the CISO as escalation owner for data governance boundary disputes. Six months into CoE operations, the commercial function disputed whether a new AI personalisation tool's data processing approach required CoE sign-off (CoE said yes, function said no). The dispute was escalated to the CISO within 48 hours. The CISO reviewed the data processing approach, confirmed it required CoE sign-off due to third-party data sharing, and the sign-off was completed within 5 business days. The total delay: 6 days. Without the escalation path, comparable disputes had previously taken 3–8 weeks to resolve.",
        },
      ],
    }),
    buildSection({
      number: "5.5",
      title: "Funding and resourcing the CoE",
      subtitle: "How to fund a CoE that does not compete with function AI budgets for the same capital",
      take: "CoE funding models that draw from function AI budgets create structural conflicts: functions feel they are paying for a service they do not control. CoE funding models that draw from a central innovation or transformation budget, and then demonstrate value back to functions through cost savings and deployment acceleration, avoid this conflict and enable the CoE to scale without function resistance.",
      why: "A CoE that functions feel they are funding without controlling will be the first casualty of a budget cycle where functions need to protect their own AI investments. A CoE funded centrally and evidently delivering value to functions will be protected by those functions when central budgets are scrutinised.",
      paragraphs: [
        [
          s("Three viable CoE funding models: central budget, chargeback, and hybrid. "),
          x(
            "Central budget: CoE is funded from a corporate AI transformation budget. Functions receive CoE services for free. Advantage: no function resistance to CoE costs. Disadvantage: CoE costs are invisible to functions, reducing their incentive to use CoE services efficiently. Chargeback: functions pay for CoE services at an internal transfer price. Advantage: creates function ownership of CoE value. Disadvantage: creates resistance to CoE engagement if the charge feels disproportionate. Hybrid: central funding for standards and infrastructure; chargeback for deployment support and advisory services.",
            "Most organisations start with central funding (functions are not yet AI-sophisticated enough to evaluate CoE value) and transition to hybrid as functions develop the capability to assess what CoE support is worth to them.",
          ),
          s(" Start with central funding and a formal value demonstration discipline. Plan the transition to hybrid at year 2 when functions can evaluate CoE value.",
          ),
        ],
        [
          s("The CoE budget case must quantify value in function business outcomes, not in CoE activity metrics. "),
          x(
            "A CoE budget case that counts 'standards produced,' 'training sessions delivered,' and 'vendor approvals completed' is an activity case. A budget case that shows 'infrastructure cost saved across 8 functions: £420,000,' 'deployment time reduced by 40%: estimated value £280,000 in earlier AI ROI,' and 'vendor pricing improvement: £140,000 saved against single-function negotiated rates' is a value case.",
            "Activity metrics are easy for a CoE to produce and easy for CFOs to dismiss. Value metrics require measuring outcomes in business terms and attributing them to CoE activities — which is harder but fundable.",
          ),
          s(" Build a CoE value attribution model before the end of the first quarter: for each CoE output, what business outcome did it enable, and at what value?"),
        ],
        [
          s("CoE resourcing must grow proportionately with the AI use case portfolio, not with the organisation's overall headcount. "),
          x(
            "A CoE supporting 5 AI use cases across 3 functions needs 4–5 people. A CoE supporting 20 AI use cases across 8 functions needs 10–12 people. A CoE that does not grow its team as the portfolio grows will become a bottleneck as use case volume increases; a CoE that grows its team faster than use case growth creates overhead.",
            "The right resourcing signal is not budget pressure or headcount caps — it is the ratio of CoE team members to active AI use cases. When this ratio drops below 1:3 (one CoE member per 3 active use cases), the CoE needs additional resourcing.",
          ),
          s(" Track the CoE team-to-active-use-case ratio monthly. Use it as your primary resourcing trigger."),
        ],
      ],
      examples: [
        {
          title: "Financial services — central to hybrid transition",
          body: "A bank funded its CoE centrally for 2 years. In year 3, the CFO required a budget justification. The CoE produced a value attribution model: £1.2M in infrastructure savings, £680K in accelerated deployment value, £340K in vendor pricing improvement, £520K in avoided governance remediation. Total value attributed: £2.74M against a 2-year CoE cost of £1.85M. Based on this evidence, the CFO approved a hybrid model: central funding for standards and infrastructure (£650K/year), function chargeback for deployment and advisory services (estimated £420K/year in total chargeback). The total CoE budget increased to £1.07M/year against growing value delivery.",
        },
        {
          title: "Retailer — activity vs value budget case",
          body: "A retailer's CoE submitted two versions of its year 2 budget case. Version 1 (activity): 18 standards produced, 34 training sessions, 12 vendor approvals, 8 deployment supports. Version 2 (value): £420K infrastructure savings, £280K deployment acceleration value, £140K vendor pricing improvement, £85K avoided remediation — total £925K against CoE cost of £610K. The finance committee rejected Version 1 as 'inputs not outcomes.' Version 2 was approved without challenge. The CFO added the budget case as a template for all central function budget justifications.",
        },
        {
          title: "Healthcare — use case ratio resourcing",
          body: "A hospital trust tracked its CoE team-to-active-use-case ratio from month 1. At month 8, the ratio dropped to 1:4.2 (below the 1:3 threshold) as 3 new AI projects were approved. The CoE lead requested 2 additional FTEs. Evidence presented: the current queue time for CoE support had increased from 2 weeks to 5 weeks, 3 function AI leads had cited CoE availability as a deployment blocker in the last quarter. The additional headcount was approved in 6 weeks — the fastest CoE resourcing approval in the trust's history because the ratio data provided objective evidence of capacity shortage.",
        },
      ],
    }),
    buildSection({
      number: "5.6",
      title: "CoE outputs: standards, playbooks, and shared infrastructure",
      subtitle: "The three deliverable categories that determine CoE value",
      take: "A CoE's value is delivered through three types of output: standards (the rules that prevent mistakes), playbooks (the guides that enable functions to move faster), and shared infrastructure (the platforms that reduce the cost of building). Standards prevent; playbooks accelerate; infrastructure scales. A CoE that produces all three at high quality is delivering its full value. A CoE that primarily produces standards without playbooks and infrastructure is delivering governance without enablement.",
      why: "Functions that experience a CoE primarily as a source of standards and approvals — without the playbooks that tell them how to comply and the infrastructure that makes compliance easier — will perceive the CoE as a bureaucracy. Functions that experience the CoE as a source of tools that make their AI work better and faster will seek the CoE's involvement rather than avoiding it.",
      paragraphs: [
        [
          s("Standards define the non-negotiable boundaries; they must be limited and precisely scoped. "),
          x(
            "An AI standard states: what must be true for every AI deployment in this organisation. Examples: every AI deployment must have a named output reviewer, every AI tool processing personal data must have a Privacy Impact Assessment, every AI vendor must pass security certification. Standards that are too numerous, too detailed, or too prescriptive become compliance exercises that functions perform without internalising.",
            "The optimal number of standards for a maturing enterprise AI programme is 8–15. More than 15 standards signals that the CoE is attempting to control AI behaviour rather than govern it. Standards should fit on a single A4 page.",
          ),
          s(" Review your standards portfolio annually and retire any standard that functions do not cite as valuable. Unused standards are governance overhead, not governance."),
        ],
        [
          s("Playbooks convert standards into actionable guidance that functions can execute independently. "),
          x(
            "For each standard, there should be a corresponding playbook: how do you implement an output review process? What does a Privacy Impact Assessment look like for an AI deployment? How do you evaluate a vendor against the security certification standard? Playbooks reduce CoE support requests by 60–70% because functions can self-serve on implementation.",
            "The highest-value playbooks are the ones that address the most common CoE support requests. Track support request categories for 90 days and write playbooks for the top 5 request types. This converts reactive support into proactive enablement.",
          ),
          s(" Audit CoE support requests quarterly and write a playbook for every request type that occurs more than 3 times."),
        ],
        [
          s("Shared infrastructure has three layers: data platform, model registry, and monitoring framework. "),
          x(
            "The data platform provides functions with access to governed, quality-assured data for AI use. The model registry is a catalogue of AI models built by and for the organisation, available for reuse. The monitoring framework provides standardised AI system performance tracking across all deployments. Each layer reduces function-level AI deployment cost by eliminating the need to build these capabilities independently.",
            "A model registry is often the most immediately valued infrastructure component: when a function discovers that a model solving their problem already exists in the registry, built by another function, the registry's value is instantly visible. The registry should be launched early, even with 2–3 entries, to establish the habit of registration.",
          ),
          s(" Launch the model registry as soon as the first AI model is built. Empty registries are never populated; populated registries grow."),
        ],
      ],
      examples: [
        {
          title: "Insurance — 10-standard portfolio",
          body: "An insurer's CoE published a 10-standard AI governance portfolio that fit on a single A4 page: 3 data standards, 3 security standards, 2 output review standards, 1 ethics standard, 1 vendor standard. Function survey data showed 82% of standards were cited as 'understood and actively applied' across 6 functions. The compact standard set was cited as the primary reason for high compliance: 'We can actually remember 10 standards; we could not remember 40.'",
        },
        {
          title: "Retailer — playbook reduces CoE support requests",
          body: "A retailer's CoE tracked support request categories for 12 weeks. Top 5 request types: output review process setup (28%), vendor security review process (22%), Privacy Impact Assessment completion (18%), data access request process (17%), model monitoring setup (15%). The CoE wrote playbooks for all 5 in 8 weeks. Support requests for these categories dropped by 64% in the 12 weeks after playbook publication. The CoE team recovered an estimated 80 hours per month of capacity previously spent on repeatable support requests.",
        },
        {
          title: "Financial services — model registry value",
          body: "A bank's CoE launched a model registry in month 3 with 2 entries. By month 18, the registry contained 14 models across 6 functions. The commercial banking function was scoping a customer propensity model when the registry revealed that the retail banking function had built a comparable model 8 months earlier. The commercial function adapted the retail model for its customer base in 6 weeks versus an estimated 22 weeks to build from scratch. Registry value for a single reuse: £280,000 in avoided development cost.",
        },
      ],
    }),
    buildSection({
      number: "5.7",
      title: "Measuring CoE value and demonstrating impact",
      subtitle: "The metrics that prove CoE value to the CFO and secure continued investment",
      take: "A Centre of Excellence that cannot measure and communicate its value will not survive its second annual budget cycle. CoE value has four dimensions: cost savings (infrastructure, vendor pricing, avoided remediation), speed improvements (deployment cycle time reduction), quality improvements (adoption rates, error rate reduction), and risk reduction (compliance incidents avoided, governance gaps prevented). Measuring all four converts a budget request into an investment case.",
      why: "The CoE's internal perception of its own value is almost always higher than its external perception by function leaders and the CFO. Closing this perception gap requires evidence — specific, quantified, attributable evidence — that the CoE's activities produced measurable business outcomes.",
      paragraphs: [
        [
          s("The four CoE value dimensions and their representative metrics. "),
          x(
            "Cost savings: infrastructure cost per function vs shared cost, vendor pricing differential, avoided remediation cost. Speed: AI deployment cycle time with and without CoE support, time-to-adoption for AI tools deployed with CoE versus without. Quality: AI tool adoption rates in functions with CoE support vs without, output error rates in governed versus ungoverned deployments. Risk: compliance incidents related to AI in governed versus ungoverned deployments, number of AI deployments that passed security audit first attempt.",
            "Establish baseline measurements before CoE operations begin. A CoE that cannot demonstrate before-and-after comparisons cannot demonstrate attribution.",
          ),
          s(" Capture baseline metrics for all four dimensions before the CoE delivers its first output. Without baselines, improvement cannot be demonstrated."),
        ],
        [
          s("Attribution methodology must be agreed with stakeholders before measuring. "),
          x(
            "When a function deploys an AI tool in 12 weeks instead of the previous average of 20 weeks, how much of the 8-week improvement is attributable to the CoE? Without an agreed attribution methodology, the CoE will claim 100% and the function will claim 0%. An agreed methodology — for example, 'deployment time savings attributable to CoE are calculated by comparing CoE-supported deployments to comparable non-supported deployments from the pre-CoE period' — converts a debate into a calculation.",
            "Imperfect attribution methodology agreed in advance is better than accurate attribution methodology disputed in arrears. Agreed methodology enables planning; disputed methodology enables politics.",
          ),
          s(" Agree CoE value attribution methodology with the CFO at CoE inception, not when the first value report is due."),
        ],
        [
          s("Report CoE value quarterly at the leadership level where budget decisions are made. "),
          x(
            "A quarterly CoE value report contains three elements: value delivered in the quarter (with attribution methodology applied), portfolio status (active AI use cases, deployment cycle times, adoption rates), and forward value projection (AI use cases in pipeline, expected value from current standards and infrastructure). The report should be one page per element — three pages total — and presented in the language of the CFO, not the language of the AI programme team.",
            "A value report that requires 20 minutes to read and covers 8 pages of technical detail will not be read by the people who fund the CoE. A three-page executive report presented in a 15-minute quarterly review will.",
          ),
          s(" Submit the CoE quarterly value report to the same review that approves quarterly budgets. Timing alignment is as important as content quality."),
        ],
      ],
      examples: [
        {
          title: "Technology company — baseline measurement discipline",
          body: "A software company's CoE captured 4 baseline metrics before operations began: average AI deployment cycle time (24 weeks), average AI tool adoption rate at 3 months (31%), AI-related compliance incidents in previous 12 months (6), and infrastructure cost per function (£140K average). At 12 months post-CoE: deployment cycle time 14 weeks (42% reduction), adoption rate 54% (74% improvement), compliance incidents 1 (83% reduction), infrastructure cost £52K average (63% reduction via shared platform). The four metrics provided unambiguous CoE value evidence at the first annual budget review.",
        },
        {
          title: "Financial services — attribution methodology",
          body: "A bank's CFO challenged the CoE's claim that it had accelerated 3 AI deployments by an average of 8 weeks. The CoE's attribution methodology: compare the deployment cycle time of CoE-supported projects in the current year to the 3-year average cycle time for comparable non-supported projects. The methodology had been agreed with the CFO at CoE inception. The comparison was unambiguous: average deployment time had dropped from 22 weeks (historical) to 14 weeks (current). The 8-week attribution was accepted without further challenge.",
        },
        {
          title: "Retailer — 3-page quarterly report",
          body: "A retailer's CoE replaced its 12-page quarterly report with a 3-page executive summary. The CFO feedback after the first 3-page report: 'This is the first CoE update I have actually read cover to cover. I now understand what you do and why it matters.' The CoE lead noted that the content was unchanged — the format was. The quarterly CoE budget was confirmed for year 2 in the same meeting as the first 3-page report was received.",
        },
      ],
    }),
    buildSection({
      number: "5.8",
      title: "BL decision lens: designing your AI CoE",
      subtitle: "Four CoE design decisions a business leader can make before the first team member is hired",
      take: "A Centre of Excellence's effectiveness is largely determined by decisions made before it is staffed: the governance model (centralised, hub-and-spoke, or federated), the mandate (what the CoE owns versus enables), the funding model (central, chargeback, or hybrid), and the 90-day delivery targets that establish credibility before the operating model is fully built. Making these four decisions deliberately prevents the two most common CoE failure modes: bureaucratic bottleneck and governance irrelevance.",
      why: "Most CoEs are designed by the people who will run them — which produces CoE mandates that are too broad (CoE teams want maximum scope) and governance models that are too centralised (CoE teams want maximum control). Business leaders who shape these four design decisions before hiring the CoE lead produce a CoE that serves functions rather than governing them.",
      paragraphs: [
        [
          s("Decision 1: choose the governance model that matches your organisation's current AI maturity, not its aspirational maturity. "),
          x(
            "If your functions have low AI maturity (fewer than 5 active AI use cases total, limited AI skills), start with hub-and-spoke, not federated. If data sensitivity requirements are very high (financial services, healthcare), consider a semi-centralised model for the first 18 months. The governance model is not a permanent choice — design the transition criteria for moving from the starting model to the next model as maturity increases.",
            "The most common design mistake is choosing the federated model because it is the lightest-touch option. Federated governance requires mature function AI capability to work safely. Without it, you get AI chaos labelled as autonomy.",
          ),
          s(" State the transition criteria from your starting governance model to the next model in the CoE charter — it signals to functions that the governance model will evolve."),
        ],
        [
          s("Decision 2: run a mandate definition workshop with function leaders before the CoE charter is written. "),
          x(
            "The workshop produces two outputs: an agreed 'own/enable/inform' categorisation for 20–30 potential CoE activities, and function leaders who have participated in designing the CoE mandate and therefore have ownership of its enforcement. Both outputs are more valuable than a mandate written by the CoE team and approved by the C-suite without function input.",
            "The 90 minutes of function leader time required for the workshop is an investment, not a cost — it converts potential CoE opponents into CoE co-designers.",
          ),
          s(" Run the mandate workshop before writing the CoE charter. Do not present a pre-written charter to function leaders and ask for feedback — ask for input, then write."),
        ],
        [
          s("Decision 3: set 3 concrete 90-day CoE delivery targets before hiring the founding team. "),
          x(
            "The 90-day targets create accountability for the founding team from day one and give the organisation a visible signal that the CoE is delivering, not just planning. Appropriate 90-day targets include: one completed vendor approval, one published standard with adoption in at least one function, one function-level AI deployment supported from brief to deployment. These targets are specific, verifiable, and independent of team size.",
            "A CoE founding team that knows its 90-day targets before its first day is more focused and more productive than a team that is discovering its mandate through its first months of operation.",
          ),
          s(" Publish the 90-day targets alongside the CoE launch announcement — it signals delivery orientation, not process orientation."),
        ],
      ],
      examples: [
        {
          title: "Design decisions before hire",
          body: "A logistics company's CPO made all four CoE design decisions before the CoE lead was hired: hub-and-spoke governance model with transition to federated when functions achieved an agreed AI maturity score; mandate defined in a workshop with 5 function leaders; central funding model with a 3-year plan to transition to hybrid; and 3 ninety-day targets (one vendor approval, one standard published and applied, one deployment supported). The CoE lead joined an organisation that had a design to implement, not a blank sheet to fill. The CoE lead cited this clarity as the primary reason she accepted the role over a comparable offer at a competitor.",
        },
        {
          title: "Mandate workshop outcome",
          body: "A financial services company's mandate workshop with 6 function leaders produced a 'own/enable/inform' map for 28 potential CoE activities. Function leaders placed 5 activities in 'own' (versus the CoE team's initial proposal of 14), 16 in 'enable,' and 7 in 'inform.' The CoE lead accepted the narrower ownership scope. Six months later, the CoE had achieved higher function engagement than any comparable CoE the company had run previously — because functions felt the CoE was supporting them, not controlling them.",
        },
        {
          title: "90-day targets drive credibility",
          body: "A healthcare trust published its CoE's 90-day targets in the internal launch announcement: (1) complete the AI vendor due diligence framework and apply it to 2 existing vendor relationships, (2) publish the AI output review standard and have it adopted in at least 1 clinical function, (3) support the radiology function's AI scheduling tool deployment from brief to go-live. All 3 were achieved within 90 days. The radiology function head — previously the most sceptical of CoE value — became the CoE's most vocal internal advocate at the 90-day board update.",
        },
      ],
    }),
  ],
  quiz: [
    {
      q: "A CoE that primarily reviews and approves AI initiatives across the organisation has become a bottleneck. What is the fundamental design flaw?",
      options: [
        "The CoE does not have enough staff to process approvals quickly",
        "The CoE has shifted from an enabling model to a controlling model, expanding 'own' beyond the governance-critical activities",
        "The approval process is too detailed and should be simplified",
        "Functions are submitting too many AI initiatives simultaneously",
      ],
      correct: 1,
      correctFeedback:
        "Correct. A CoE that controls rather than enables will become a bottleneck as AI initiative volume grows. The 'own' category should be limited to activities that create unacceptable risk if functions act unilaterally (data governance, security, vendor approval, ethics). Operational AI decisions should be in the 'enable' category where functions decide with CoE support.",
      wrongFeedback:
        "The bottleneck is not a capacity problem — it is a mandate design problem. When the CoE's 'own' category is too broad, every AI decision must pass through the CoE, creating a queue. The solution is to move operational AI decisions from 'own' to 'enable' — where the CoE provides guidance and functions decide.",
    },
    {
      q: "What is the key difference between a CoE standard and a CoE playbook?",
      options: [
        "Standards are for technical teams; playbooks are for business teams",
        "Standards are mandatory rules; playbooks are optional guidance",
        "Standards define what must be true; playbooks explain how to implement what must be true",
        "Standards are produced annually; playbooks are produced on demand",
      ],
      correct: 2,
      correctFeedback:
        "Correct. Standards define the non-negotiable requirement ('every AI deployment must have a named output reviewer'). Playbooks explain how to implement the standard ('here is how to design an output review process for your function'). Standards without playbooks create compliance burden; playbooks without standards create guidance without accountability.",
      wrongFeedback:
        "The relationship between standards and playbooks is complementary: standards set the requirement; playbooks provide the implementation path. A standard tells you what you must do; a playbook tells you how to do it. Both are necessary — standards without playbooks burden functions with research; playbooks without standards create guidance without governance.",
    },
    {
      kind: "categorize",
      q: "Categorise these CoE activities as either 'Own (CoE decision authority)' or 'Enable (Function decides with CoE support)':",
      categories: ["Own (CoE decision authority)", "Enable (Function decides with CoE support)"],
      items: [
        { text: "AI vendor security certification approval", category: 0 },
        { text: "AI ethics framework for the organisation", category: 0 },
        { text: "Data governance standards for AI deployments", category: 0 },
        { text: "Choice of AI tool from the approved vendor list", category: 1 },
        { text: "Output review protocol design for a specific function", category: 1 },
        { text: "AI deployment approach and phasing for a function", category: 1 },
      ],
      correctFeedback:
        "Correct. CoE 'own' activities are those where unilateral function action creates unacceptable risk: security, ethics, and data governance. 'Enable' activities are those where functions need support but should retain decision authority to maintain ownership and speed.",
      wrongFeedback:
        "The 'own' category should contain only activities where functions acting unilaterally creates genuine governance, security, or compliance risk. All other activities where CoE support adds value but function decision-making is appropriate belong in 'enable.'",
    },
    {
      q: "Which CoE governance model is most appropriate for an organisation with 8 business functions and low AI maturity across all of them?",
      options: [
        "Fully federated: functions build AI independently with minimal CoE involvement",
        "Hub-and-spoke: CoE sets standards and provides embedded support; functions build within the framework",
        "Fully centralised: CoE owns and builds all AI for every function",
        "No CoE: AI should be managed by individual functions without a shared enabling function",
      ],
      correct: 1,
      correctFeedback:
        "Correct. Hub-and-spoke balances function autonomy with CoE governance support — appropriate for organisations with multiple functions and limited AI maturity. Fully centralised creates bottlenecks at scale; fully federated requires mature function AI capability to work safely.",
      wrongFeedback:
        "An organisation with 8 functions and low AI maturity needs governance support (ruling out federated) without a single-point bottleneck (ruling out fully centralised). Hub-and-spoke provides CoE standards, shared infrastructure, and embedded function support while preserving function decision-making.",
    },
    {
      q: "What is the primary purpose of a model registry in a CoE's shared infrastructure?",
      options: [
        "To store AI model code for backup purposes",
        "To enable functions to reuse AI models built elsewhere in the organisation rather than rebuilding from scratch",
        "To track regulatory compliance of AI models",
        "To measure AI model performance against industry benchmarks",
      ],
      correct: 1,
      correctFeedback:
        "Correct. A model registry catalogues AI models built by the organisation and makes them available for reuse across functions. When a function discovers an existing model that can be adapted for their use case, the registry prevents duplicate development — converting weeks or months of engineering work into a short adaptation project.",
      wrongFeedback:
        "The model registry's primary value is reuse: enabling functions to find and adapt models already built elsewhere in the organisation rather than building from scratch. A function that finds a relevant model in the registry and adapts it in 6 weeks rather than building in 22 weeks demonstrates the registry's direct financial value.",
    },
    {
      kind: "order",
      q: "Order these CoE design activities in the correct sequence before the first CoE team member is hired:",
      items: [
        "Choose the governance model appropriate for organisational AI maturity",
        "Run a mandate definition workshop with function leaders",
        "Set 3 concrete 90-day delivery targets",
        "Write the CoE charter incorporating governance model, mandate, and targets",
        "Post the CoE lead job description with all four role quality requirements",
      ],
      prompt: "Drag to arrange in the correct sequence",
      correctFeedback:
        "Correct. Governance model selection sets the context; function leader input defines the mandate; delivery targets create accountability; the charter captures all three; the job description attracts the right CoE lead. The CoE lead joins a designed organisation, not a blank sheet.",
      wrongFeedback:
        "Design precedes hiring. Governance model first — it determines the scope of the CoE. Then mandate definition with function leaders — their input shapes the charter. Then delivery targets — to create day-one accountability. Then the charter codifies all decisions. Then the job description attracts the leader to implement the design.",
    },
  ],
});
