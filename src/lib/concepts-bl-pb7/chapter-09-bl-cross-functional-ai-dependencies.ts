import { buildChapter, buildSection, s, x, BL_CALLOUT } from "../concepts-bl-helpers";

export const chapter09BlCrossFunctionalAiDependencies = buildChapter({
  slug: "bl-cross-functional-ai-dependencies",
  number: 9,
  shortTitle: "Cross-Functional AI Dependencies",
  title: "Cross-Functional AI Dependencies — Shared Infrastructure, Data Governance, and Coordinated Transformation",
  readingMinutes: 24,
  summary:
    "AI transformation creates interdependencies between functions that siloed approaches cannot resolve. Data that HR needs exists in Finance; infrastructure that Marketing needs is built by Engineering; governance that Operations needs is owned by Legal. Business leaders who understand and manage these cross-functional dependencies accelerate transformation; those who do not create expensive redundancies and governance gaps.",
  keyTakeaway:
    "AI transformation is not a function-by-function activity — it is an enterprise coordination challenge. The most expensive AI transformation failures result not from poor technology choices but from unmanaged cross-functional dependencies in data, infrastructure, governance, and change management.",
  pmCallout: BL_CALLOUT,
  sections: [
    buildSection({
      number: "9.1",
      title: "Why AI Creates Cross-Functional Dependencies",
      subtitle: "The structural reasons why AI transformation cannot be done function by function",
      take: "AI deployments create dependencies between functions that conventional software implementations do not — because AI value is proportional to data quality and integration depth, and the data that any function needs often originates in another function's systems. Siloed AI programmes produce duplicated effort, inconsistent data, and governance gaps that more expensive to fix than to prevent.",
      why: "Most AI programme failures are not technology failures — they are organisational failures. Functions that deploy AI independently without coordinating data standards, infrastructure, or governance create a patchwork that underperforms integrated approaches by a large margin.",
      paragraphs: [
        [
          s("AI value is proportional to data integration depth — and data integration requires cross-functional coordination by definition. "),
          x(
            "A marketing AI personalisation tool that needs customer service interaction data must access Customer Service's systems. An HR workforce planning tool that needs financial headcount approvals must connect with Finance's ERP. An operations AI that needs sales pipeline data must integrate with Sales' CRM.",
            "Each integration requires not just technical connection but data governance agreement: what data can be shared, in what format, with what quality standards, and under what consent and privacy obligations. Functions that resolve these questions bilaterally and informally create inconsistencies that compound as AI deployments multiply.",
          ),
          s(" Establish cross-functional data sharing agreements before individual functions deploy AI that requires external data — bilateral ad-hoc agreements do not scale and create inconsistent data governance."),
        ],
        [
          s("AI infrastructure — data platforms, ML tooling, and governance frameworks — has significant economies of scale that siloed functions cannot capture. "),
          x(
            "A data platform that aggregates customer data for Marketing can also serve Customer Service analytics and Finance forecasting. An ML model serving platform built for one function's models can serve all functions' models. A governance framework built for Legal can provide the structure all functions need.",
            "Functions that build their own AI infrastructure independently pay the full cost multiple times and create incompatible architectures that are expensive to integrate later. Enterprise AI infrastructure investment has the highest ROI when shared.",
          ),
          s(" Evaluate AI infrastructure investments on enterprise-wide ROI, not function-level ROI. Infrastructure built for one function's use creates a fraction of the value of infrastructure shared across functions."),
        ],
        [
          s("AI governance failures are disproportionately caused by cross-functional gaps — the spaces between functions where nobody is accountable. "),
          x(
            "A customer data privacy breach that is caused by Marketing's AI tool using Customer Service data under inadequate consent governance sits between two functions' remits. An AI hiring tool that introduces bias because it was trained on Finance's historical headcount data without HR's awareness is a cross-functional governance failure.",
            "The governance gaps at function boundaries are where the most significant and most difficult-to-anticipate AI risks live. An enterprise AI governance framework that only addresses function-level risks without cross-functional governance leaves these gaps unaddressed.",
          ),
          s(" Map the cross-functional governance gaps in your AI portfolio — specifically, which AI deployments use data that originates in another function — and assign explicit governance accountability for each gap."),
        ],
      ],
      examples: [
        {
          title: "Uber — data platform as enterprise AI foundation",
          body: "Uber's Michelangelo ML platform is a shared enterprise infrastructure that serves all functions' ML model development, deployment, and monitoring needs. By building a single platform rather than allowing functions to build their own, Uber captured significant infrastructure economies, created consistent governance, and enabled cross-functional model reuse. The lesson: enterprise AI infrastructure investment with broad function adoption delivers 3–5x the value of equivalent investment in function-specific tools.",
        },
        {
          title: "The cross-functional data quality failure",
          body: "A retailer's demand forecasting AI tool depended on customer returns data from Customer Service. Unknown to the Operations team, Customer Service had changed its returns categorisation system six months earlier — returns that previously went into category A now went into category B. The AI model continued forecasting based on category A data that was now empty. Demand forecasts for A-category products were systematically wrong for six months before the integration failure was identified. Cross-functional data changes require notification protocols for AI systems that depend on the data.",
        },
        {
          title: "The governance gap — GDPR between Marketing and IT",
          body: "A technology company's Marketing team used a personalisation AI tool that stored customer behavioural data. IT maintained the data infrastructure. Neither team had clarity on who was the GDPR data controller for the behavioural data — Marketing used it but IT stored it. When a subject access request arrived, two weeks of cross-functional confusion over data ownership delayed the response past the 30-day limit. The ICO investigation noted the absence of clear data ownership governance. Cross-functional AI data governance requires explicit ownership assignment, not assumed defaults.",
        },
      ],
    }),
    buildSection({
      number: "9.2",
      title: "Shared Data Infrastructure and the Customer Data Foundation",
      subtitle: "Building the enterprise data platform that all AI deployments depend on",
      take: "Customer data is the foundation of AI deployments across Marketing, Sales, Customer Service, Finance, and Product simultaneously. Building and governing a unified customer data platform as an enterprise asset — rather than a Marketing or IT project — is the infrastructure investment that enables the most AI deployments at the highest quality.",
      why: "The most expensive and most common cross-functional AI failure is building the same data foundation multiple times in incompatible ways. A single enterprise customer data platform, built once with cross-functional governance, delivers more value and lower total cost than five function-specific data investments.",
      paragraphs: [
        [
          s("The unified customer data platform aggregates all customer interactions across channels into a single customer profile — accessible by all functions with appropriate governance. "),
          x(
            "Marketing needs purchase history and browsing behaviour. Customer Service needs interaction history and outstanding issues. Finance needs payment history and credit performance. Sales needs opportunity history and relationship signals. Each function has different data needs from the same customer base — a unified platform serves all needs from a single governed source.",
            "The governance architecture: each function has role-based access to the data it needs for its defined purposes; cross-function data sharing requires explicit consent basis and purpose specification; a central data governance function maintains the platform's integrity.",
          ),
          s(" Position the unified customer data platform as a CEO/COO agenda item, not a Marketing or IT agenda item — it is the infrastructure that enables the most value across the most functions."),
        ],
        [
          s("Data quality standards must be agreed cross-functionally before the platform is built. "),
          x(
            "Functions that define their own data quality standards create incompatible datasets. Finance defines 'customer' as a legal entity with a billing relationship; Marketing defines 'customer' as anyone who has interacted with the brand; Customer Service defines 'customer' as anyone with an active support case.",
            "Reconciling these definitions after the platform is built is significantly more expensive than agreeing standards before build. A cross-functional data standards working group should agree on canonical definitions — customer, product, transaction, interaction — before any data platform development begins.",
          ),
          s(" Run a cross-functional data standards workshop before building any shared data platform. Canonical data definitions agreed before build cost weeks; reclassification after build costs months."),
        ],
        [
          s("Consent and privacy architecture must be designed for cross-functional data use from the start. "),
          x(
            "Consent given by a customer for Marketing communications does not automatically cover Customer Service analytics, Finance creditworthiness modelling, or Product personalisation. Cross-functional use of customer data requires either a broad consent architecture that covers all intended uses or separate consent bases for each function's use.",
            "Privacy by design in a cross-functional context means mapping every planned use of customer data — across all functions — against the consent and legal basis framework before the platform launches. Retrofitting consent for uses that were not originally disclosed is significantly harder than designing for them upfront.",
          ),
          s(" Map all planned cross-functional uses of customer data against the consent and legal basis framework before the data platform launches — retrofitting consent is not a viable post-launch option."),
        ],
      ],
      examples: [
        {
          title: "Tesco — Clubcard as cross-functional data foundation",
          body: "Tesco's Clubcard programme generates customer behavioural data that serves Marketing (personalised promotions), Operations (demand forecasting), Finance (customer LTV modelling), and Product (range planning) simultaneously — all from the same consented, unified data source. The governance architecture: Tesco Insights is a shared internal service that provides data products to each function within defined consent parameters. The investment in the shared data infrastructure delivers compound returns across all consuming functions.",
        },
        {
          title: "The canonical customer definition crisis",
          body: "A telecommunications company built AI models across three functions — Marketing, Finance, and Customer Operations — each using different definitions of 'active customer'. Marketing counted all subscribers with a contract; Finance counted only subscribers with billing activity in the last 30 days; Customer Operations counted subscribers with a live service. When the three functions' AI forecasts were brought together for a board revenue review, the different customer counts produced irreconcilable revenue projections. Six weeks of data reconciliation work followed. The agreed canonical definition was established post-incident — at significantly higher cost than a pre-build standards workshop would have required.",
        },
        {
          title: "Consent architecture for cross-functional AI",
          body: "A financial services company designed its customer data consent framework before building its AI analytics platform, explicitly mapping every intended cross-functional data use to a consent basis. Six months after launch, the company received a regulatory request to demonstrate the consent basis for a specific Marketing Analytics use of Payment Processing data. The pre-designed consent architecture provided an immediate, auditable response. Companies that design consent architecture post-launch face the same request with significantly less prepared documentation.",
        },
      ],
    }),
    buildSection({
      number: "9.3",
      title: "AI Centre of Excellence — The Cross-Functional Coordination Mechanism",
      subtitle: "How to structure enterprise AI coordination without creating bureaucracy that slows transformation",
      take: "An AI Centre of Excellence (CoE) is the cross-functional coordination mechanism that prevents duplicated effort, inconsistent governance, and missed dependencies. The challenge is designing a CoE that accelerates functions rather than bottlenecking them — providing standards, shared services, and governance without becoming an approval gate that slows deployment.",
      why: "Without cross-functional coordination, functions repeat the same infrastructure investments, make incompatible data decisions, and create governance gaps at their boundaries. With over-centralised coordination, functions wait for approvals and lose deployment speed. The CoE design challenge is enabling acceleration while providing coordination.",
      paragraphs: [
        [
          s("The AI CoE serves three distinct functions that require different organisational design. "),
          x(
            "Shared services: infrastructure, tooling, and capabilities that individual functions would duplicate if built independently. These are most efficiently provided centrally. Governance and standards: data quality standards, vendor requirements, bias testing protocols, and regulatory compliance frameworks. These are defined centrally but implemented by functions.",
            "Knowledge and capability: AI literacy training, use case methodology, vendor intelligence, and cross-functional learning. These are provided by the CoE but consumed by functions at their own pace. Mixing the three in a single governance gate model creates the worst outcome — slow, centralised, and bureaucratic.",
          ),
          s(" Design the AI CoE as three separate models: a shared services provider for infrastructure, a standards setter for governance, and a capability enabler for knowledge. The governance model determines the speed and value of each."),
        ],
        [
          s("The AI CoE should not be a mandatory approval gate for every AI deployment. "),
          x(
            "Mandatory approval gates for AI deployments create bottlenecks that slow functions and incentivise workarounds. Functions that deploy AI without CoE involvement when the process is too slow defeat the governance purpose of the CoE.",
            "The better model: mandatory engagement for deployments above defined risk or investment thresholds; advisory engagement available for all other deployments; and proactive standards that functions can self-certify against. The CoE concentrates its governance capacity on the deployments that most need it.",
          ),
          s(" Define the threshold above which CoE engagement is mandatory — by investment size, risk level, or data sensitivity — and provide self-certification capability for deployments below the threshold."),
        ],
        [
          s("AI CoE success metrics should reflect enterprise AI capability growth, not CoE activity. "),
          x(
            "CoE metrics that count reviews conducted, standards published, and training delivered measure the CoE's activity — not its value. The value metrics: reduction in AI deployment time-to-value, reduction in cross-functional data integration issues, reduction in AI governance incidents, and growth in AI ROI across the portfolio.",
            "CoEs that measure their own activity confuse output with outcome. CoEs that measure enterprise AI performance — which their shared services, governance, and capability building are designed to improve — measure whether they are creating value.",
          ),
          s(" Define AI CoE success metrics as enterprise AI performance indicators — deployment speed, data integration quality, governance incident rate, and portfolio ROI. CoE activity metrics are inputs, not outcomes."),
        ],
      ],
      examples: [
        {
          title: "Google — AI CoE as platform and standards provider",
          body: "Google's AI CoE model provides internal AI platform services (TPU compute, ML tooling, deployment infrastructure), establishes AI responsible use standards, and runs internal AI literacy programmes. Product and engineering teams access shared services without mandatory approval for standard use cases; high-risk AI applications trigger mandatory responsible AI review. The model: central services reduce duplication; central standards ensure consistency; mandatory review concentrates governance capacity on the highest-risk deployments.",
        },
        {
          title: "Rolls-Royce — AI CoE enabling function deployment",
          body: "Rolls-Royce's AI CoE provides shared data science capability, ML tooling, and governance standards to functions across the organisation — enabling function-led AI deployment rather than centralised AI delivery. Functions own their AI use cases; the CoE provides the infrastructure and standards that make them viable. CoE success is measured by the number of functions deploying AI at increasing maturity levels — enterprise AI capability growth, not CoE project delivery.",
        },
        {
          title: "The mandatory approval gate failure",
          body: "A global bank established an AI CoE with mandatory approval gates for all AI deployments. Within 18 months, the gate had a 4-month average approval time for routine deployments, and three business units had deployed AI tools outside the process — either through exemptions or through labelling AI tools as 'analytics' rather than 'AI' to avoid the gate. The CoE governance was being bypassed because it was too slow for the business deployment pace. Redesigning the gate to be risk-proportionate — rapid self-certification for lower-risk deployments, mandatory review for higher-risk — reduced bypass rates and average approval time simultaneously.",
        },
      ],
    }),
    buildSection({
      number: "9.4",
      title: "Cross-Functional Data Governance",
      subtitle: "Establishing data ownership, quality standards, and sharing protocols that scale",
      take: "Cross-functional data governance is not a compliance exercise — it is the operational foundation that determines whether AI deployments work at scale. Functions that own data must be accountable for its quality; functions that consume data must be able to depend on it; and the governance framework must make both sides of this relationship explicit and enforceable.",
      why: "Data quality failures are the most common root cause of AI underperformance. When the responsible party for data quality is unclear — because the data crosses function boundaries — quality degrades without accountability. Cross-functional data governance assigns accountability.",
      paragraphs: [
        [
          s("Data ownership in a cross-functional AI context requires three role assignments: producer, steward, and consumer. "),
          x(
            "The data producer is the function that generates the data — Finance generates financial records, HR generates employee data, Customer Service generates interaction data. The data steward is accountable for data quality and governance — this may or may not be the producer. The data consumer is the function that uses the data for AI or analytics — which may be any function.",
            "When these roles are not explicitly assigned, quality accountability defaults to nobody. The function that uses low-quality data for AI suffers the consequence; the function that produced the low-quality data does not experience the consequence and has no incentive to improve.",
          ),
          s(" Assign producer, steward, and consumer roles for every significant dataset used in cross-functional AI deployments — and make quality accountability a steward performance responsibility."),
        ],
        [
          s("Data quality standards must include specific thresholds for AI use — not just general business quality standards. "),
          x(
            "General business data quality standards define what is good enough for human analysts and operational reporting. AI model quality requirements are often more stringent — a 5% missing value rate that is acceptable for quarterly reporting may cause material accuracy degradation in an ML model trained on that data.",
            "AI data quality standards should specify: maximum acceptable missing value rates for each critical field, maximum acceptable staleness (how recently the data must be updated), and minimum acceptable population size for training datasets. These standards should be established jointly by the data steward and the AI team using the data.",
          ),
          s(" Establish AI-specific data quality thresholds — distinct from general business quality standards — for every dataset used in AI model training or inference."),
        ],
        [
          s("Data change management is the cross-functional governance process that prevents AI model failures caused by upstream data changes. "),
          x(
            "When a function changes its data collection, classification, or storage methodology, any AI model trained on or operating on that data may be affected. Without notification protocols, these changes occur without the AI team's knowledge — and the model degrades or fails without an obvious cause.",
            "Data change management requires: a registry of AI models that depend on each significant dataset, a notification protocol when the dataset's methodology changes, and a model impact assessment as part of the change management process for significant data changes.",
          ),
          s(" Build a data dependency registry mapping AI models to their data sources — and establish a notification protocol that ensures model owners are informed before any significant data methodology change is implemented."),
        ],
      ],
      examples: [
        {
          title: "Airbnb — data quality as engineering standard",
          body: "Airbnb established data quality as a first-class engineering responsibility, creating data quality SLAs for key datasets that power ML models across the platform. Data producing teams are accountable for maintaining quality SLAs; consuming teams have defined expectations for the data they receive. When quality falls below SLA, the producing team is notified and has a defined remediation timeline. The framework converts data quality from an ad-hoc concern to a governed operational standard.",
        },
        {
          title: "The upstream data change that broke the model",
          body: "A supply chain forecasting AI stopped producing accurate demand forecasts. Root cause investigation (two weeks of effort) revealed that the Finance ERP had been migrated to a new chart of accounts three months earlier — changing the mapping of revenue categories that the forecasting model used as a training signal. The operations team using the forecasting model had not been informed of the ERP change. A data dependency registry and change notification protocol would have caught this before deployment rather than after three months of degraded forecasting.",
        },
        {
          title: "GDPR data stewardship assignment — a practical resolution",
          body: "A retail company's customer analytics team used behavioural data from the e-commerce platform and purchase data from the ERP. When a DSAR arrived requesting all data, it was unclear which team was the data controller for each dataset. Legal arbitration took two weeks and resulted in a delayed response. Following the incident, a data stewardship register was created assigning controller and processor roles for each significant dataset. Subsequent DSARs were processed within the statutory deadline.",
        },
      ],
    }),
    buildSection({
      number: "9.5",
      title: "AI Vendor Management as an Enterprise Function",
      subtitle: "Coordinating vendor relationships across functions to avoid duplication and inconsistency",
      take: "AI vendor proliferation — each function independently procuring AI tools — creates duplication, inconsistent data rights, incompatible architectures, and missed negotiating leverage. Centralised AI vendor management captures the scale economies of enterprise procurement while preserving function autonomy in use case selection.",
      why: "Enterprise organisations typically have AI tools for the same categories deployed by multiple functions — five different AI writing tools, three AI analytics platforms, two AI scheduling tools. The direct cost duplication is visible; the data governance inconsistency and integration complexity are invisible and more expensive.",
      paragraphs: [
        [
          s("AI vendor proliferation is an enterprise cost and governance risk that cross-functional vendor management prevents. "),
          x(
            "Functions that independently procure AI tools typically select the tool that best fits their specific use case, without considering enterprise data standards, security requirements, or integration compatibility. The result: multiple vendors for similar capabilities, inconsistent data handling terms, and integration complexity that grows with each new tool.",
            "Enterprise vendor management does not mean centralising tool selection — it means establishing the governance criteria that all tool selections must meet, negotiating enterprise agreements that give functions access to preferred vendors, and maintaining a vendor catalogue that prevents unnecessary duplication.",
          ),
          s(" Establish an AI vendor management function that sets selection criteria, negotiates enterprise agreements, and maintains a vendor catalogue — without mandating specific tool choices for every use case."),
        ],
        [
          s("AI vendor data rights are an enterprise IP and competitive risk that function-level procurement routinely misses. "),
          x(
            "Functions that independently negotiate AI vendor agreements often accept data rights terms that grant vendors the ability to train on client data without awareness of the competitive implications. Marketing accepts training rights on customer behavioural data. HR accepts training rights on employee performance data. Finance accepts training rights on transaction data.",
            "Each individually appears minor; collectively, the organisation has granted multiple vendors training rights on its most proprietary datasets — funding potentially competitive model development at the enterprise's expense.",
          ),
          s(" Establish a standard data rights clause for all AI vendor contracts — prohibiting vendor training on client data, requiring data isolation, and including audit rights for data handling compliance."),
        ],
        [
          s("AI vendor security and compliance due diligence must be consistent across function procurements. "),
          x(
            "Security assessments for AI vendors require specific evaluation criteria that general software vendor assessments do not include: model security (are model weights accessible to unauthorised parties?), training data security (how is client data isolated during training?), inference security (how are API queries and responses secured?), and AI-specific compliance (EU AI Act conformity documentation, bias audit availability).",
            "Functions that conduct standard IT security reviews for AI vendors without AI-specific criteria may approve vendors with significant AI-specific security gaps that general security reviews do not detect.",
          ),
          s(" Develop AI-specific security and compliance due diligence criteria and apply them consistently to all AI vendor assessments across functions — standard IT security reviews are insufficient for AI-specific risks."),
        ],
      ],
      examples: [
        {
          title: "JPMorgan — centralised AI vendor management",
          body: "JPMorgan established a centralised AI vendor management function that maintains a preferred vendor catalogue, negotiates enterprise agreements, and reviews all AI vendor contracts against a standard set of requirements including data rights, security standards, and regulatory compliance. Functions select from the preferred catalogue for most use cases; new vendor additions require a standardised review process. The programme reduced AI vendor count by 40% while improving average vendor compliance quality.",
        },
        {
          title: "The training rights audit",
          body: "A global professional services firm conducted a retrospective audit of its AI vendor contracts and discovered that 12 of 28 vendors had data rights clauses allowing training on client data. The clauses had been accepted by different functions in different procurement exercises without cross-functional visibility. Renegotiating the 12 contracts required six months of legal work. The data rights audit is now a standard annual exercise. Enterprise AI vendor management would have prevented the initial acceptance of inconsistent terms.",
        },
        {
          title: "AI vendor security gap — general assessment missed AI risk",
          body: "A healthcare company's standard IT security assessment approved an AI analytics vendor without AI-specific evaluation. Post-deployment review identified that patient data used for AI analysis was not isolated from the vendor's general model training infrastructure — a gap in the vendor's data handling that standard security review had not checked for. The remediation required contract amendment, data isolation implementation, and a retrospective privacy impact assessment. AI-specific security due diligence criteria would have identified the gap before contract signature.",
        },
      ],
    }),
    buildSection({
      number: "9.6",
      title: "Cross-Functional Change Management",
      subtitle: "Coordinating the human side of AI transformation across functions",
      take: "AI transformation changes work patterns across every function simultaneously. Without coordinated change management, functions experience disruption at the same time without the benefit of shared learning, and transformation fatigue compounds. Cross-functional change management reduces transformation cost while improving adoption quality.",
      why: "Change management is the most consistently underinvested component of AI transformation programmes. Functions that invest in change management achieve adoption rates of 70–85%; those that do not achieve 30–40%. The investment differential is dwarfed by the adoption difference.",
      paragraphs: [
        [
          s("AI transformation change management has specific characteristics that distinguish it from conventional change management. "),
          x(
            "Anxiety about job displacement is more pronounced with AI than with other technology changes — even when the AI transformation does not involve headcount reduction. Employees who are not told proactively what AI means for their work will fill the information vacuum with worst-case assumptions. Proactive, honest communication about AI's role in their specific function — what changes, what does not, and what the transition support looks like — reduces anxiety before it becomes resistance.",
            "Cross-functional change management ensures these communications are consistent across the organisation — employees in different functions receive the same honest messaging about AI's role, preventing the unequal information environments that generate rumour and comparison.",
          ),
          s(" Develop a cross-functional AI communication strategy that provides consistent, honest messaging to employees about AI's role in each function — before the rumour economy fills the silence."),
        ],
        [
          s("Shared AI capability building is more efficient and more effective than function-specific programmes. "),
          x(
            "AI literacy training that teaches the same foundational concepts — what AI is, what it can and cannot do, how to evaluate AI outputs — can be delivered once across the organisation rather than six times in six functions. The common foundation then serves as the basis for function-specific application training.",
            "Cross-functional AI communities of practice — where employees from different functions share AI use cases, challenges, and learnings — generate application insights that function-specific training does not. A marketing analyst's insight about AI content governance may be directly applicable to the HR team's AI communications challenge.",
          ),
          s(" Build a shared AI literacy foundation across functions before function-specific application training. Common understanding of AI fundamentals makes function-specific training faster and more effective."),
        ],
        [
          s("AI transformation fatigue is a cross-functional risk that requires active management. "),
          x(
            "Organisations that deploy AI transformation programmes simultaneously across all functions create change fatigue — employees experiencing AI adoption pressure in their work, through training requirements, and in their management conversations simultaneously. Change fatigue reduces adoption quality and increases resistance.",
            "Sequenced transformation — prioritising functions by readiness, ROI, and dependency order — reduces the simultaneous change burden. The sequencing also allows early function successes to be communicated to functions approaching their transformation phase, building enthusiasm rather than anxiety.",
          ),
          s(" Sequence AI transformation across functions to manage change fatigue — early function successes create the organisational momentum that subsequent functions benefit from, rather than simultaneous fatigue across all."),
        ],
      ],
      examples: [
        {
          title: "Vodafone — enterprise-wide AI communication strategy",
          body: "Vodafone's AI transformation programme included an enterprise-wide employee communication strategy that addressed AI's role in each function specifically — not a generic 'AI is good for us' message but function-specific explanation of what AI would change, what would not change, and how the transition would be supported. The communication programme preceded technology deployment in each function. Employee AI anxiety scores, measured in monthly pulse surveys, were significantly lower in functions that received proactive communication before deployment compared to control functions that did not.",
        },
        {
          title: "BNY Mellon — cross-functional AI community of practice",
          body: "BNY Mellon's AI community of practice brings together AI practitioners from Technology, Operations, Finance, and Risk functions to share use cases, governance learnings, and technical insights. The community has identified 12 cross-functional use cases that emerged from conversations between functions — use cases that function-level AI programmes would not have identified. The community also provides a shared forum for governance questions that cross function boundaries.",
        },
        {
          title: "The sequencing success — wave deployment",
          body: "A global insurance company sequenced its AI transformation in three waves: Wave 1 (Finance and Operations — data-rich, high-ROI, change-tolerant); Wave 2 (Customer Service and Sales — customer-facing, change management intensive); Wave 3 (HR and Legal — governance-sensitive, slower deployment). Wave 1 successes were communicated organisationally before Wave 2 began — employees in Wave 2 functions were hearing about colleagues' positive experiences when their own transformation started. Adoption rates in Wave 2 were 20% higher than benchmark — attributed to the Wave 1 success narrative that preceded deployment.",
        },
      ],
    }),
    buildSection({
      number: "9.7",
      title: "Enterprise AI Portfolio Management",
      subtitle: "Governing the full AI investment portfolio across functions",
      take: "Enterprise AI portfolio management — tracking all AI investments, their ROI performance, their governance status, and their dependencies — gives business leaders visibility they cannot obtain from function-level reporting. Leaders who manage the enterprise AI portfolio make better investment prioritisation decisions and identify the cross-functional dependencies that create the most risk.",
      why: "Organisations with 20+ AI deployments across functions have an enterprise AI portfolio that is creating significant value, significant risk, or both — and most do not manage it as a portfolio. Portfolio management converts an opaque collection of function-level projects into a governed enterprise asset.",
      paragraphs: [
        [
          s("The enterprise AI portfolio register tracks every AI deployment above a defined materiality threshold across all functions. "),
          x(
            "Minimum information per deployment: function owner, investment to date, go-live date, primary success metric and current performance, governance sign-off status, data sources used, and any cross-functional dependencies.",
            "The register serves four management purposes: investment prioritisation (where is AI generating the most value?), risk management (which deployments have governance gaps or underperforming ROI?), dependency management (which functions depend on data or infrastructure managed by other functions?), and board reporting (what is the enterprise AI portfolio's overall health?).",
          ),
          s(" Maintain an enterprise AI portfolio register as a standing management tool — reviewed quarterly by the executive team and annually by the board. The register converts invisible complexity into visible governance."),
        ],
        [
          s("AI investment prioritisation at enterprise level requires a framework that accounts for cross-functional dependencies. "),
          x(
            "A Marketing AI investment that requires Customer Service data, Finance infrastructure, and Legal compliance review is not a Marketing investment — it is an enterprise investment with Marketing as the primary beneficiary. Prioritising it solely against other Marketing investments misses the cross-functional cost and dependency picture.",
            "Enterprise AI prioritisation framework: score investments on ROI potential, readiness (data, skills, and infrastructure in place), dependency complexity (number of functions that must contribute), and governance complexity (regulatory obligations, data sensitivity). High ROI with low dependency complexity should be prioritised ahead of high ROI with high dependency complexity, everything else being equal.",
          ),
          s(" Evaluate AI investments on dependency complexity alongside ROI — high-ROI investments with complex cross-functional dependencies require more coordination than the ROI case alone indicates."),
        ],
        [
          s("Post-implementation review at enterprise level identifies learnings that improve future deployments. "),
          x(
            "Individual functions conduct post-implementation reviews for their own AI deployments — but the learnings stay within the function. Cross-functional post-implementation review identifies patterns: which vendor categories consistently underperform, which governance steps are most commonly omitted, which data dependencies are most frequently unmanaged.",
            "Enterprise AI programmes that conduct cross-functional post-implementation reviews improve their deployment quality faster than those where learning is siloed by function. The learnings that matter most — why AI investments succeed or fail — are often not function-specific.",
          ),
          s(" Conduct cross-functional post-implementation reviews annually — the learnings about why AI deployments succeed or fail are often cross-functional, not function-specific."),
        ],
      ],
      examples: [
        {
          title: "Standard Chartered — enterprise AI portfolio management",
          body: "Standard Chartered maintains an enterprise AI portfolio register covering 50+ AI deployments across Technology, Operations, Risk, and Client Services. The register is reviewed quarterly by the Chief Data and Automation Officer, who identifies cross-functional dependencies, governance gaps, and reallocation opportunities. Annual board reporting on the AI portfolio uses the register as the data source — providing governance credibility alongside the investment performance data.",
        },
        {
          title: "The dependency complexity discovery",
          body: "An enterprise AI prioritisation exercise at a manufacturing company identified that its highest-priority AI investment — a customer lifecycle value model — required data from four functions (Sales, Finance, Customer Service, and Marketing), infrastructure from IT, governance sign-off from Legal, and change management across three functions. The ROI case was compelling; the dependency complexity was not visible in the function-level business case. Resequencing ahead of two lower-ROI investments with simpler dependency profiles delivered faster aggregate ROI by avoiding the 9-month cross-functional coordination the original top-priority investment required.",
        },
        {
          title: "Cross-functional post-implementation learning",
          body: "An annual cross-functional AI post-implementation review at a UK bank identified a recurring pattern: 8 of 12 reviewed deployments had under-estimated data quality remediation costs by a factor of 2–3x. The finding was cross-functional — Marketing, Finance, Operations, and Customer Service all had the same underestimation pattern. A revised data quality assessment methodology was introduced for all new AI business cases. The next year, zero deployments exceeded their data quality budget by more than 20%. Function-level reviews would not have identified the pattern.",
        },
      ],
    }),
    buildSection({
      number: "9.8",
      title: "The Executive AI Coordination Structure",
      subtitle: "Governance architecture for cross-functional AI leadership",
      take: "AI transformation at enterprise scale requires executive coordination architecture that spans functions — a forum where function leaders share AI priorities, resolve cross-functional dependencies, and make enterprise-level trade-offs. Without this forum, cross-functional dependencies are managed bilaterally and inefficiently, or not at all.",
      why: "Cross-functional AI governance decisions — which data platform to invest in, which vendor relationships to centralise, how to sequence transformation — cannot be made by any individual function. They require a forum with the authority and cross-functional representation to make enterprise-level decisions.",
      paragraphs: [
        [
          s("The executive AI steering committee — or equivalent cross-functional forum — makes three types of decisions that individual functions cannot. "),
          x(
            "Enterprise investment decisions: which shared AI infrastructure investments to approve, how to allocate AI capability resources across functions, and when to centralise versus distribute AI governance. Cross-functional dependency resolution: when function AI priorities conflict, which takes precedence, and how shared dependencies are managed.",
            "Enterprise portfolio governance: reviewing the AI portfolio register, approving new high-risk AI deployments, and making decisions about AI deployments that affect multiple functions simultaneously.",
          ),
          s(" Establish an executive AI steering committee with representation from each function leader and authority over shared AI infrastructure, cross-functional dependency resolution, and portfolio governance."),
        ],
        [
          s("The AI steering committee's decision rights must be clearly defined to avoid both overreach and under-reach. "),
          x(
            "Overreach — the committee approves all AI deployments regardless of size or cross-functional impact — creates a bottleneck that prevents function agility. Under-reach — the committee has no authority over function-level decisions — makes it advisory without impact.",
            "Appropriate decision rights: mandatory committee approval for shared infrastructure investments above a defined threshold, cross-functional data sharing agreements, and high-risk AI deployments as classified by the governance framework. Function-level deployments within established standards require no committee involvement.",
          ),
          s(" Define committee decision rights narrowly — shared infrastructure, data agreements, and high-risk deployments. Function-level deployments within standards are not committee decisions."),
        ],
        [
          s("CEO sponsorship of enterprise AI governance is the single most important structural factor in AI transformation effectiveness. "),
          x(
            "Cross-functional AI governance decisions — which function's data platform becomes the enterprise standard, how AI investment is prioritised across competing function priorities, which vendor relationships are centralised — require CEO authority to resolve when functions disagree.",
            "AI transformation programmes with active CEO sponsorship and participation in the steering committee resolve cross-functional conflicts faster, make enterprise investment decisions at higher quality, and achieve function adoption at higher rates than those where AI governance is delegated to the CTO or CDO alone.",
          ),
          s(" CEO sponsorship is not symbolic — it is the authority that resolves cross-functional AI conflicts that function leaders cannot resolve bilaterally. Structure the AI steering committee to make CEO participation practical, not ceremonial."),
        ],
      ],
      examples: [
        {
          title: "Siemens — AI board with C-suite representation",
          body: "Siemens established an AI board chaired by the CEO with CTO, CFO, CHRO, and COO as members — meeting quarterly to review the enterprise AI portfolio, approve major infrastructure investments, and resolve cross-functional conflicts. The CEO chairing ensures that cross-functional trade-off decisions have executive authority behind them. Function leaders report that the AI board has resolved dependencies in weeks that would otherwise have required months of bilateral negotiation.",
        },
        {
          title: "The unresolved data platform conflict",
          body: "A global bank's Marketing and Risk functions independently selected different data platform vendors with incompatible architectures. Both decisions were approved at function level; the conflict only became visible when Marketing needed Risk data for a customer LTV model and the two platforms could not exchange data without a custom integration. The custom integration cost exceeded the combined annual cost of either platform. An enterprise AI steering committee with authority over data platform decisions would have identified the conflict before it crystallised.",
        },
        {
          title: "CEO AI sponsorship — the conflict resolution example",
          body: "A CPG company's Finance and Marketing functions were in a six-month disagreement about whether the customer data platform should be built to Finance's governance standards (stricter, slower) or Marketing's standards (faster, more flexible). The AI steering committee could not resolve it without CEO intervention. The CEO decided: Finance standards would apply, with Marketing's deployment timeline accommodated through phased implementation. The decision was made in one meeting with CEO authority; six months of bilateral negotiation had produced no resolution. Structural CEO sponsorship converts cross-functional gridlock into actionable decisions.",
        },
      ],
    }),
  ],
  quiz: [
    {
      q: "Marketing wants to build an AI personalisation tool that uses Customer Service interaction data. What cross-functional governance is required before deployment?",
      options: [
        "Marketing approval — they are the data consumer and responsible for the tool.",
        "A cross-functional data sharing agreement covering: consent basis for the data use, data quality standards, access controls, data ownership assignment, and purpose specification. Legal review of GDPR compliance is required before the data flows.",
        "IT security review of the data integration.",
        "Customer Service approval to share the data.",
      ],
      correct: 1,
      correctFeedback:
        "Right. Cross-functional data use for AI requires formal data sharing governance — consent basis, quality standards, access controls, and ownership — not just function approval or IT security sign-off. Re-read sections 9.1 and 9.4.",
      wrongFeedback:
        "Cross-functional data use for AI requires formal governance — the consent basis for the data use, quality standards the data must meet, access controls, and legal review. Single-function approval is not sufficient. Re-read sections 9.1 and 9.4.",
    },
    {
      kind: "order",
      q: "Order the steps to establish enterprise AI data governance before building a shared customer data platform.",
      prompt: "Drag to arrange from first step (top) to last (bottom).",
      items: [
        "Run a cross-functional data standards workshop to agree canonical definitions for key entities.",
        "Map all planned cross-functional data uses against the consent and legal basis framework.",
        "Assign producer, steward, and consumer roles for every significant dataset.",
        "Establish AI-specific data quality thresholds for all model training datasets.",
        "Build a data dependency registry mapping AI models to their source datasets.",
      ],
      correctFeedback:
        "Right. Standards before architecture. Consent mapping before any data flows. Ownership assignment enabling accountability. AI-specific quality thresholds for model training. Dependency registry for ongoing change management. This sequence prevents the most expensive cross-functional data governance failures. Re-read sections 9.2 and 9.4.",
      wrongFeedback:
        "Standards before platform build. Consent mapping before data flows. Ownership assignment before deployment. Quality thresholds for AI model requirements. Dependency registry for ongoing management. Re-read sections 9.2 and 9.4.",
    },
    {
      kind: "categorize",
      q: "Categorise each AI governance decision by the appropriate decision-making authority.",
      categories: ["Function-level decision", "AI CoE standards decision", "Executive AI steering committee decision"],
      items: [
        { text: "Selecting an AI writing tool for the Marketing team within established vendor standards.", category: 0 },
        { text: "Establishing the data rights requirements for all AI vendor contracts.", category: 1 },
        { text: "Deciding which of two incompatible data platform architectures becomes the enterprise standard.", category: 2 },
        { text: "Choosing an AI demand forecasting vendor from the preferred vendor catalogue.", category: 0 },
        { text: "Defining the AI-specific security due diligence criteria for vendor assessment.", category: 1 },
        { text: "Approving a cross-functional data sharing agreement between Finance and Marketing for AI analytics.", category: 2 },
      ],
      correctFeedback:
        "Right. Function decisions: tool selection within established standards. CoE standards: enterprise-wide criteria and requirements. Steering committee: cross-functional conflicts, shared infrastructure, and data sharing agreements. Each level handles the decisions its authority and cross-functional visibility enables. Re-read sections 9.3 and 9.8.",
      wrongFeedback:
        "Match decision authority to scope: function decisions stay within the function; CoE sets enterprise standards; steering committee resolves cross-functional conflicts and approves shared investments. Re-read sections 9.3 and 9.8.",
    },
    {
      q: "Your Finance team changed the ERP chart of accounts without notifying the Operations team whose AI forecasting model depended on the ERP data. The model degraded for three months before the cause was found. What governance prevents this?",
      options: [
        "Better communication between Finance and Operations.",
        "A data dependency registry mapping AI models to source datasets, and a change notification protocol requiring Finance to notify all model owners before implementing methodology changes to datasets they use.",
        "Requiring Operations to monitor ERP change logs.",
        "Monthly cross-functional data review meetings.",
      ],
      correct: 1,
      correctFeedback:
        "Right. Data change notification is a governance process, not a communication preference. A dependency registry and notification protocol ensures model owners are systematically informed of upstream data changes before they cause model failures. Re-read section 9.4.",
      wrongFeedback:
        "Ad-hoc communication is not a governance solution. A dependency registry and formal notification protocol creates systematic accountability for data changes that affect AI models. Re-read section 9.4.",
    },
    {
      q: "Your organisation has 35 AI tools deployed across 6 functions, with no central AI vendor register. A retrospective audit finds that 14 vendors have data rights clauses allowing training on client data. What is the governance response?",
      options: [
        "Accept the existing clauses — renegotiation is disruptive.",
        "Establish an AI vendor management function with a standard data rights clause for all new contracts. Prioritise renegotiation of the 14 existing contracts by risk level — starting with vendors using the most sensitive data. Build an AI vendor catalogue to prevent future inconsistency.",
        "Ask each function to manage their own vendor data rights.",
        "Terminate and reprocure the 14 vendors on compliant terms.",
      ],
      correct: 1,
      correctFeedback:
        "Right. Retroactively managing 14 vendor relationships requires prioritisation by risk. Preventing future inconsistency requires enterprise vendor management infrastructure. Immediate termination without reprocurement planning creates operational disruption disproportionate to the remediation value. Re-read section 9.5.",
      wrongFeedback:
        "The remediation response must balance risk management (prioritise highest-risk vendors) with operational continuity (don't simultaneously disrupt 14 vendor relationships). The governance response prevents recurrence. Re-read section 9.5.",
    },
    {
      kind: "order",
      q: "Order the cross-functional change management steps for an enterprise AI transformation programme.",
      prompt: "Drag to arrange from first step (top) to last (bottom).",
      items: [
        "Develop a cross-functional AI communication strategy addressing AI's role in each function specifically.",
        "Build a shared AI literacy programme covering foundational concepts across the organisation.",
        "Sequence transformation waves by readiness and ROI — allowing early successes to build momentum.",
        "Conduct function-specific application training for each wave before deployment.",
        "Measure adoption quality and change fatigue indicators and adjust the wave sequence as needed.",
      ],
      correctFeedback:
        "Right. Communication before deployment to prevent anxiety. Shared literacy before function-specific training. Sequenced waves for momentum and fatigue management. Application training before deployment in each wave. Ongoing measurement to adjust the approach. Re-read section 9.6.",
      wrongFeedback:
        "Communication and shared literacy before deployment. Sequenced waves to manage fatigue and build momentum. Function-specific training before each wave's deployment. Ongoing measurement to adjust. Re-read section 9.6.",
    },
  ],
});
