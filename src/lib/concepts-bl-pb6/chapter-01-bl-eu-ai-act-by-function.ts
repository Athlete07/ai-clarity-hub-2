import { buildChapter, buildSection, s, x, BL_CALLOUT } from "../concepts-bl-helpers";

export const chapter01BlEuAiActByFunction = buildChapter({
  slug: "bl-eu-ai-act-by-function",
  number: 1,
  shortTitle: "EU AI Act by Function",
  title: "The EU AI Act — What Every Business Leader Must Understand Before Deploying AI",
  readingMinutes: 26,
  summary:
    "The EU AI Act is the world's first comprehensive AI regulation and it is already in force. Business leaders in any organisation selling into, operating in, or processing data from the EU must map every AI system to the Act's risk tiers before deployment — or face fines up to 3% of global turnover.",
  keyTakeaway:
    "The EU AI Act classifies AI by risk tier — unacceptable, high-risk, limited-risk, and minimal-risk. High-risk systems in HR, credit, and critical infrastructure require conformity assessments, transparency obligations, and human oversight architecture before go-live. Your job is knowing where each AI system in your portfolio sits.",
  pmCallout: BL_CALLOUT,
  sections: [
    buildSection({
      number: "1.1",
      title: "What the EU AI Act Actually Is",
      subtitle: "The world's first binding AI regulation — why it affects you even if you are not a technology company",
      take: "The EU AI Act is a risk-based legal framework that applies to any organisation placing AI systems into the EU market or using AI to affect EU residents. It is not an opt-in standard — it is enforceable law with turnover-based fines.",
      why: "Leaders who dismiss the EU AI Act as a technology concern are importing undisclosed legal liability. The Act's scope covers HR tools, credit decisioning, customer-facing AI, and internal operational systems used by any business with EU customers or employees.",
      paragraphs: [
        [
          s("The EU AI Act entered into force in August 2024, with phased obligations applying through 2026 and 2027. "),
          x(
            "Unlike GDPR — which governs data — the AI Act governs AI systems themselves: their design, deployment, and governance regardless of the data they process.",
            "This means an organisation can be fully GDPR-compliant and still violate the AI Act. The two frameworks interact but are distinct legal obligations requiring separate compliance programmes.",
          ),
          s(" Every leader responsible for AI deployment — not just compliance and technology teams — needs a working understanding of the Act's scope."),
        ],
        [
          s("The Act's extraterritorial reach mirrors GDPR's. "),
          x(
            "Any organisation placing an AI system on the EU market, using an AI system to affect people in the EU, or using outputs from an AI system to make decisions about EU residents is within scope — regardless of where the organisation is headquartered.",
            "A US-based HR platform used to screen EU job applicants, a UK insurer using AI to price EU customers, and an Asian manufacturer deploying AI quality control in an EU facility are all within scope.",
          ),
          s(" Map your AI portfolio against EU market exposure before assuming the Act does not apply to your business."),
        ],
        [
          s("Penalties are material: up to €35M or 7% of global annual turnover for prohibited-category violations, up to €15M or 3% for high-risk violations. "),
          x(
            "These are not theoretical penalties. EU member states are required to establish national supervisory authorities by August 2025. The European AI Office already has enforcement powers over general-purpose AI models.",
            "For context, the 3% threshold on global turnover for high-risk AI violations is comparable to GDPR's penalty ceiling. Organisations that took GDPR seriously in 2018 should treat the AI Act with equivalent urgency now.",
          ),
          s(" Conduct an AI portfolio audit against Act obligations before your national regulator establishes enforcement capacity — not after."),
        ],
      ],
      examples: [
        {
          title: "Workday — EU AI Act compliance architecture for HR tools",
          body: "Workday publicly documented its EU AI Act compliance posture for its talent management suite, classifying candidate screening features as high-risk AI under Annex III. Workday published conformity documentation, bias testing results, and human-override requirements. Enterprise buyers using Workday in EU hiring processes should validate this documentation is current and contractually binding — vendor compliance claims without contractual warranties are not legal cover.",
        },
        {
          title: "A UK retailer's inadvertent EU scope",
          body: "A UK-headquartered retailer assumed post-Brexit operations excluded EU AI Act obligations. Its AI-powered customer credit scoring tool assessed EU customers' applications through an EU-facing website. Legal review established the tool was within scope as a high-risk AI system under Annex III (access to financial services). The retailer faced an 18-month remediation programme to achieve conformity. Brexit does not exclude UK businesses serving EU markets from EU AI Act obligations.",
        },
        {
          title: "European AI Office — enforcement begins with GPAI",
          body: "The European AI Office commenced oversight of general-purpose AI model providers in 2025, issuing the first codes of practice under the Act's GPAI provisions. Organisations using GPAI foundation models from US providers in EU-facing products are required to ensure their use complies with the GPAI transparency and copyright rules. Business leaders who rely on third-party AI APIs should verify vendor compliance status with the AI Office's published lists.",
        },
      ],
    }),
    buildSection({
      number: "1.2",
      title: "The Four-Tier Risk Classification",
      subtitle: "Unacceptable, high-risk, limited-risk, minimal-risk — how to classify every AI system in your portfolio",
      take: "The EU AI Act classifies AI systems into four tiers with fundamentally different compliance obligations. Classifying your portfolio accurately before deployment is a leadership responsibility — misclassification carries the same penalty as non-compliance.",
      why: "Every AI deployment decision requires a prior classification step. Leaders who delegate this entirely to technology teams without business function input will mis-classify high-risk systems: the Act's Annex III triggers are defined by business use case, not technical architecture.",
      paragraphs: [
        [
          s("Tier one — prohibited AI — is a small but absolute category. "),
          x(
            "Prohibited systems include: social scoring by public authorities, real-time remote biometric surveillance in public spaces (with narrow law enforcement exceptions), subliminal manipulation, AI that exploits vulnerability, and emotion recognition in workplaces and schools.",
            "Leaders should audit any AI system in their portfolio that infers employee states, scores customer trustworthiness, or uses biometric data in public-facing contexts. Prohibited use by any party in the supply chain — including third-party vendors — creates liability.",
          ),
          s(" Any vendor claiming 'employee sentiment detection' or 'customer trust scoring' warrants immediate legal review before purchase."),
        ],
        [
          s("Tier two — high-risk AI — is defined by Annex III use cases, not technical sophistication. "),
          x(
            "High-risk categories include: AI in critical infrastructure, AI for educational assessment, AI for employment and worker management (screening, promotion, performance monitoring), AI in access to essential services (credit, insurance, housing), AI in law enforcement, and AI in democratic processes.",
            "The critical business implication: many mainstream enterprise AI tools — Applicant Tracking Systems with AI scoring, credit decisioning tools, performance management platforms — fall into high-risk categories. These require conformity assessments, technical documentation, data governance, human oversight, and registration in the EU AI Act database.",
          ),
          s(" Map your HR, finance, and customer-facing AI tools against Annex III before signing renewal contracts — high-risk compliance obligations belong in vendor agreements."),
        ],
        [
          s("Tiers three and four — limited-risk and minimal-risk — carry transparency obligations and best-practice expectations respectively. "),
          x(
            "Limited-risk systems (chatbots, emotion recognition, deep fakes) must disclose to users that they are interacting with AI. Minimal-risk systems (spam filters, AI in video games) face no mandatory obligations beyond the Act's general principles.",
            "Most enterprise AI tools for internal productivity fall into minimal-risk. Customer-facing conversational AI, AI-generated content tools, and sentiment analysis tools are limited-risk with disclosure requirements.",
          ),
          s(" Audit every customer-facing AI interaction for AI disclosure compliance — it is one of the Act's most easily enforced and publicly visible requirements."),
        ],
      ],
      examples: [
        {
          title: "Taleo/Oracle — ATS classification as high-risk",
          body: "Oracle's Taleo recruitment platform, used by thousands of EU employers, uses AI-powered candidate ranking and shortlisting. Under Annex III, this is a high-risk AI system for employment purposes. Oracle is required to provide conformity documentation; employers using Taleo for EU hiring are required to maintain human oversight and ensure candidates have rights to contest automated decisions. HR leaders should request the conformity assessment from Oracle before the next EU hiring cycle.",
        },
        {
          title: "Insurance pricing AI — high-risk reclassification",
          body: "A European insurer's pricing actuarial team assumed its AI premium calculation tool was minimal-risk because it had no customer-facing interface. Legal review reclassified it as high-risk under 'access to financial services' (Annex III). The tool required a conformity assessment, technical documentation package, and registration in the EU database — an eight-month remediation project. Internal AI tools affecting access to financial services are not automatically low-risk.",
        },
        {
          title: "Customer service chatbot — disclosure compliance",
          body: "A major EU telecoms provider deployed a conversational AI assistant without AI disclosure in the chat interface, relying on generic terms of service language. The national supervisory authority issued a corrective notice in Q1 2026. The fix: a mandatory disclosure statement at conversation start — two days' engineering work. The delay in compliance cost the company a public enforcement notice. Limited-risk disclosure obligations are low-effort to implement and high-risk to ignore.",
        },
      ],
    }),
    buildSection({
      number: "1.3",
      title: "High-Risk AI — What Compliance Actually Requires",
      subtitle: "The six obligations that apply before a high-risk AI system goes live in the EU",
      take: "High-risk AI systems under the EU AI Act require six mandatory compliance obligations before deployment: risk management system, data governance, technical documentation, logging and record-keeping, transparency to deployers, human oversight architecture, and accuracy/robustness standards. None of these are optional.",
      why: "Business leaders often assume compliance is a one-time certification event. Under the EU AI Act, high-risk AI compliance is a continuous programme — ongoing logging, monitoring, and incident reporting are mandatory throughout the system's lifecycle.",
      paragraphs: [
        [
          s("The risk management obligation is continuous, not point-in-time. "),
          x(
            "Providers of high-risk AI systems must maintain a risk management system that identifies, analyses, estimates, and mitigates risks throughout the AI system's lifecycle. This is not a pre-deployment checklist — it must be updated as the system is used, as use cases evolve, and as incidents occur.",
            "For business leaders deploying third-party high-risk AI tools, this obligation largely falls on the AI provider — but deployers must ensure their vendor contracts include evidence of ongoing risk management compliance, not merely pre-deployment certification.",
          ),
          s(" Require your high-risk AI vendors to provide annual risk management system updates as a contractual deliverable, not just a one-time pre-sale document."),
        ],
        [
          s("Technical documentation and logging requirements create audit trails. "),
          x(
            "High-risk AI providers must create technical documentation covering system design, training data, validation testing, bias assessments, and performance metrics. Deployers must maintain logs of system operations sufficient to allow post-incident investigation. Log retention varies by national implementation but 12 months is the baseline.",
            "This has direct operational implications: deploying a high-risk AI system without configuring logging infrastructure before go-live is a compliance violation from day one. Retrofitting logging to a live system is operationally disruptive and legally insufficient as retrospective compliance.",
          ),
          s(" Logging configuration is a deployment precondition, not a post-launch optimisation — schedule it as a launch gate in every high-risk AI project."),
        ],
        [
          s("Human oversight architecture is the most operationally significant obligation. "),
          x(
            "High-risk AI systems must be designed to allow humans to understand, monitor, and override system outputs. This is not merely a UI button — it requires trained personnel who understand the system's limitations, defined escalation pathways, and documented override authority.",
            "A business leader cannot satisfy this obligation by pointing to a theoretical override feature. The human oversight requirement means real people with authority and training are in the decision loop — a resourcing and process design question, not a technical one.",
          ),
          s(" Identify named individuals responsible for human oversight of each high-risk AI system and document their override authority before the system goes live."),
        ],
      ],
      examples: [
        {
          title: "HSBC credit AI — logging infrastructure as compliance prerequisite",
          body: "HSBC's credit decisioning AI team treated logging configuration as a technical deliverable separate from the compliance programme. An early review by external counsel established that logging must be operational before deployment, not after. The team restructured the project plan, adding a two-week logging validation sprint before go-live. The delay prevented what would have been a compliance gap on the first live transaction.",
        },
        {
          title: "Recruitment AI — human oversight staffing failure",
          body: "A European recruitment agency deployed a high-risk AI CV screening tool and designated a single junior HR coordinator as 'human oversight responsible'. A candidate appeal revealed the coordinator had not received system training and did not understand override authority. The national authority found the human oversight obligation unsatisfied despite the technical override feature existing. Human oversight requires competent, trained personnel — not a checkbox assignment.",
        },
        {
          title: "NHS AI diagnostic support — continuous risk management",
          body: "An NHS Trust deploying an AI diagnostic support tool for radiology maintained its pre-deployment risk assessment but did not establish a cadence for post-deployment updates. When the tool's accuracy degraded following a software update by the vendor, no mechanism existed to trigger a risk management review. The Trust subsequently implemented quarterly risk reviews tied to vendor update releases — the continuous risk management architecture the Act requires.",
        },
      ],
    }),
    buildSection({
      number: "1.4",
      title: "Your Function Under the EU AI Act",
      subtitle: "How the Act's obligations change depending on whether you are a provider, deployer, or importer",
      take: "The EU AI Act places different obligations on providers (who develop and market AI), deployers (who use AI in their business operations), and importers/distributors. Most business leaders are deployers — and deployers have direct compliance obligations that cannot be fully delegated to AI vendors.",
      why: "The most common compliance misunderstanding is assuming vendor compliance equals deployer compliance. The Act explicitly assigns deployer obligations that exist regardless of vendor compliance status. Leaders who build this into vendor relationships avoid surprise liability.",
      paragraphs: [
        [
          s("Providers bear the heaviest obligations — conformity assessments, technical documentation, CE marking for high-risk EU-market systems. "),
          x(
            "Providers are organisations that develop and place AI systems on the market or put them into service under their own name. This includes internal development teams that build AI tools for commercial use, not just external software vendors.",
            "Leaders overseeing internal AI development teams are providers for any system those teams deploy into the EU market, even if deployed exclusively for internal business operations that affect EU employees or customers.",
          ),
          s(" Internal AI development programmes targeting EU operations must build provider compliance obligations into the project from the start — retrofitting is significantly more expensive."),
        ],
        [
          s("Deployers have direct obligations that persist even when using fully-compliant third-party AI systems. "),
          x(
            "Deployer obligations include: using AI systems in accordance with provider instructions, monitoring performance, reporting serious incidents to national authorities, conducting fundamental rights impact assessments (for public body deployers and certain private deployers), and ensuring human oversight is operational.",
            "Practically: if a vendor provides a high-risk AI system with a conformity assessment but you deploy it for a use case outside the documented intended purpose — applying a hiring AI to manage existing employee performance, for example — you become liable as both deployer and effectively provider for the undocumented use case.",
          ),
          s(" Document every intended use case for each AI system before deployment, and establish a change management process for any use case extension that requires legal review."),
        ],
        [
          s("Importers and distributors who place third-country AI on the EU market also carry obligations. "),
          x(
            "Organisations importing AI systems developed outside the EU — US-based AI platforms sold into EU markets — carry importer obligations: verifying provider conformity, ensuring CE marking, not placing non-compliant systems on the market.",
            "This affects procurement decisions. A vendor certification that 'we comply with EU AI Act' does not automatically satisfy importer obligations — the importer must verify conformity documentation exists and is accurate, not merely accept vendor assertions.",
          ),
          s(" Procurement policy should require vendors to provide verifiable EU AI Act conformity documentation — not contractual compliance representations — for all high-risk AI system purchases."),
        ],
      ],
      examples: [
        {
          title: "Retail chain as deployer — use case documentation",
          body: "A pan-European retailer used a supplier's AI-powered scheduling tool to optimise store staffing. The vendor's conformity documentation covered demand forecasting; the retailer also used the output to inform individual performance reviews — a use case outside the documented intended purpose. Legal review established the retailer had assumed provider-equivalent obligations for the undocumented use case, requiring a supplementary conformity process. Strict use-case documentation prevents this exposure.",
        },
        {
          title: "US SaaS vendor — importer verification gap",
          body: "A European professional services firm contracted with a US HR analytics vendor that provided a contract warranty of EU AI Act compliance. Due diligence by the firm's legal team revealed no conformity assessment documentation existed — only a self-attested compliance checklist. The firm required the vendor to commission an independent conformity assessment as a condition of contract. Vendor warranties are not conformity documentation.",
        },
        {
          title: "Internal ML team — inadvertent provider status",
          body: "A financial services firm's data science team built an internal AI model for customer churn prediction, deployed exclusively for internal sales use. When the model's outputs were used to restrict customer service access — an 'access to essential services' use case — the firm became a provider of a high-risk AI system. The internal team had no conformity documentation. The firm initiated a remediation programme and adopted an internal AI governance policy requiring classification review for all new models before production deployment.",
        },
      ],
    }),
    buildSection({
      number: "1.5",
      title: "General-Purpose AI Models — The GPAI Chapter",
      subtitle: "What the Act says about foundation models and LLMs — and what it means for every organisation using AI APIs",
      take: "The EU AI Act includes specific provisions for general-purpose AI models — large foundation models like GPT, Claude, and Gemini. Organisations deploying GPAI models face transparency and copyright obligations; those building on GPAI APIs with systemic-risk capabilities face additional requirements.",
      why: "Almost every organisation integrating a commercial LLM API into a product or internal tool is deploying a GPAI-based system. The GPAI provisions determine what compliance obligations transfer from the model provider and what remain with the deployer.",
      paragraphs: [
        [
          s("GPAI models must comply with EU copyright law and provide technical documentation to downstream users. "),
          x(
            "Model providers must publish summaries of training data used (relevant for copyright claims), provide technical documentation to organisations building on their models, and maintain policies to respect copyright opt-outs.",
            "For business leaders using LLM APIs for content generation, this matters because copyright liability for AI-generated outputs is shared between model provider and deployer. The Act's GPAI documentation requirements are designed to surface training data provenance — a factor in copyright risk assessment.",
          ),
          s(" Request your GPAI vendor's training data summary documentation before deploying AI-generated content in externally-facing products."),
        ],
        [
          s("GPAI models with systemic risk — those exceeding the 10^25 FLOP training threshold — face additional obligations. "),
          x(
            "Systemic-risk GPAI models must conduct adversarial testing (red-teaming), report serious incidents to the European AI Office, ensure cybersecurity protections, and assess and mitigate systemic risks.",
            "In practice, the largest commercial LLMs (GPT-4 and beyond, Claude 3+ families) likely meet the systemic-risk threshold. Organisations integrating these models are not themselves subject to these obligations — but they benefit from the additional safety assurance the Act requires of the provider.",
          ),
          s(" When evaluating GPAI vendors for high-stakes use cases, request evidence of adversarial testing and EU AI Office incident reporting compliance as part of vendor diligence."),
        ],
        [
          s("GPAI provisions create a new compliance question for enterprise AI product development. "),
          x(
            "Organisations building products on GPAI APIs are GPAI model deployers. If the product is also a high-risk AI system under Annex III, both the GPAI deployer obligations and the high-risk system obligations apply simultaneously.",
            "An HR technology company building a candidate screening tool on a GPT API is simultaneously a GPAI deployer and a high-risk AI provider. The compliance programme must address both layers — a complexity that has caught several AI product companies by surprise.",
          ),
          s(" AI product teams building on GPAI APIs for EU markets must conduct a dual classification: GPAI deployment obligations plus intended use case classification."),
        ],
      ],
      examples: [
        {
          title: "OpenAI — GPAI compliance documentation for enterprise",
          body: "OpenAI published its EU AI Act GPAI compliance documentation in 2025, including training data summaries and technical documentation packages for enterprise API customers. Enterprise customers using the OpenAI API for EU-facing applications should download and retain this documentation as part of their own compliance record — regulators may request evidence of third-party AI compliance documentation during audits.",
        },
        {
          title: "AI product company — dual-layer compliance failure",
          body: "A European HR tech startup built an AI interview scoring tool on Claude's API and obtained conformity documentation for the GPAI layer. They did not separately assess the tool as a high-risk AI system under Annex III employment AI provisions. A pre-launch legal review identified the gap: the GPAI compliance documentation addressed model-level obligations but not the employer deployment-level obligations — bias testing, human oversight architecture, and candidate transparency. A three-month compliance sprint followed.",
        },
        {
          title: "Content marketing team — copyright risk in GPAI output",
          body: "A marketing team at a professional services firm used an LLM API to generate client thought leadership content. No training data summary review was conducted. Post-publication, a copyright claim was filed alleging similarity to a published work. The case highlighted that GPAI copyright risk requires proactive documentation of model training data scope — not just legal disclaimers in output templates. Training data summaries provided by GPAI vendors enable this assessment.",
        },
      ],
    }),
    buildSection({
      number: "1.6",
      title: "Prohibited AI — The Absolute Limits",
      subtitle: "Eight categories of AI your organisation must never deploy, and the vendor practices that import them",
      take: "The EU AI Act prohibits eight categories of AI outright — regardless of business justification, technical sophistication, or consent. Leaders must actively audit vendor products for prohibited practices, because some commercial tools have features that inadvertently or deliberately deploy prohibited AI.",
      why: "Prohibited AI violations carry the Act's highest penalty tier: €35M or 7% of global annual turnover. More importantly, several commercial employee management and customer engagement tools have features — notably employee sentiment analysis and social scoring — that are adjacent to or within prohibited categories.",
      paragraphs: [
        [
          s("Workplace emotion recognition is prohibited under the Act's Article 5 restrictions. "),
          x(
            "AI systems that infer or predict employees' emotional states — from facial expressions, voice tone, or behavioural patterns — are prohibited in workplace contexts. This provision directly affects several commercial HR and workforce management vendors who have marketed 'employee engagement AI', 'wellbeing monitoring', or 'productivity mood tracking'.",
            "Leaders who have purchased these tools, or whose HR vendors offer these as features, must audit the current configuration and disable or contractually prohibit deployment of emotion recognition functions for EU employees.",
          ),
          s(" Conduct an immediate audit of your HR technology stack for emotion recognition or sentiment inference features affecting EU employees — disable and document before the applicable prohibition date."),
        ],
        [
          s("Real-time biometric surveillance in public spaces is prohibited with narrow exceptions. "),
          x(
            "AI systems that identify individuals in real time using biometric data in publicly accessible spaces are prohibited except for specific law enforcement purposes under strict judicial authorisation. This affects retail AI, smart building systems, and workplace access control that uses facial recognition in public or semi-public areas.",
            "Post-session identification — using biometric data to identify individuals after an event — is permitted for law enforcement but remains highly restricted for commercial use. Retrospective identification tools marketed to retail (loss prevention) or real estate (building security) warrant legal review.",
          ),
          s(" Review any biometric access or surveillance system deployed in publicly accessible locations for EU AI Act prohibition compliance before the applicable effective date."),
        ],
        [
          s("Social scoring and manipulative AI are categorical prohibitions with broad definitions. "),
          x(
            "Social scoring — assigning trustworthiness or social behaviour scores used to disadvantage individuals — and subliminal manipulation — AI that influences behaviour without individuals' awareness in ways that harm their interests — are prohibited regardless of the data used or the domain of application.",
            "Several customer analytics and credit decisioning tools sold commercially include scoring components that assign customers 'reliability' or 'loyalty' indices used to determine service levels. Legal review of these tools' scoring mechanisms is warranted before renewal.",
          ),
          s(" Any vendor offering 'customer trust scores', 'loyalty indices', or 'behavioural reliability ratings' that influence service access requires legal review for social scoring prohibition compliance."),
        ],
      ],
      examples: [
        {
          title: "Employee productivity monitoring — prohibition audit",
          body: "A financial services firm using a remote work monitoring platform discovered the vendor's 'productivity wellbeing' module inferred employee stress and engagement states from typing patterns and application usage, flagging individuals for manager review. The firm's legal team classified this as workplace emotion recognition under Article 5 prohibition. The module was contractually disabled for all EU employees, with a vendor remediation timeline required before any EU reactivation. Feature-level audits of HR platforms are now a quarterly governance requirement.",
        },
        {
          title: "Retail facial recognition — public space prohibition",
          body: "A pan-European retailer operated a real-time facial recognition system in 200 stores to identify individuals on loss prevention watchlists. Under the Act's prohibition on real-time biometric surveillance in publicly accessible spaces, this system was in the prohibited category. The retailer decommissioned the system across EU stores before the prohibition effective date, replacing it with post-event CCTV review under human investigation protocols. The compliance cost was £2.4M across stores; the non-compliance penalty exposure was estimated at €28M.",
        },
        {
          title: "Customer creditworthiness scoring — social scoring proximity",
          body: "An insurtech platform scored customers on 'lifestyle reliability' using social media data, purchasing patterns, and location frequency — a composite score used to determine premium tiers. External legal counsel advised the scoring mechanism was within the social scoring prohibition's scope when used to determine access to financial services. The insurer removed the lifestyle reliability component and rebuilt pricing on actuarial-only factors, reducing automated decision scope and reducing AI Act risk categorisation from prohibited to high-risk.",
        },
      ],
    }),
    buildSection({
      number: "1.7",
      title: "Timelines, National Implementation, and Enforcement Readiness",
      subtitle: "What is in force now, what is coming, and how to sequence your compliance programme",
      take: "The EU AI Act has a phased implementation timeline: prohibited AI bans applied from February 2025, GPAI model obligations from August 2025, and most high-risk system obligations from August 2026. Leaders who wait for full enforcement before starting compliance programmes will miss the preparation window — and miss the opportunity to influence vendor compliance before it becomes mandatory.",
      why: "Phased timelines create a false sense of runway. High-risk AI system compliance requires technical documentation, logging infrastructure, bias testing, and human oversight architecture — typically 9–18 months of work. Starting compliance programmes after national supervisory authorities are operational is starting after the enforcement window opens.",
      paragraphs: [
        [
          s("February 2025: prohibited AI provisions became enforceable — no grace period for prohibited categories. "),
          x(
            "Organisations that have not audited their AI portfolio for prohibited AI practices are currently in potential violation. This includes employee emotion recognition tools, biometric surveillance in public spaces, and social scoring mechanisms. National supervisory authorities in France, Germany, and the Netherlands have indicated these provisions are their first enforcement priority.",
            "Leaders who assumed prohibited AI compliance was a 2026 concern need to escalate this to an immediate risk management action. The prohibited category audit should have been completed in 2024.",
          ),
          s(" If your organisation has not completed a prohibited AI audit, treat this as an urgent risk management action — not a scheduled compliance activity."),
        ],
        [
          s("August 2026: high-risk AI system obligations fully apply — conformity assessments required before deployment or renewal. "),
          x(
            "From August 2026, high-risk AI systems cannot be placed on the EU market or put into service without completed conformity assessments, technical documentation, and registration in the EU AI database. This applies to new deployments and to renewed contracts for existing systems.",
            "The practical implication for procurement: AI tools subject to high-risk classification whose contracts expire after August 2026 require vendor conformity documentation as a renewal condition. This needs to be in the vendor relationship now — not in the renewal negotiation.",
          ),
          s(" Audit all high-risk AI vendor contract renewal dates. Any renewal after August 2026 requires conformity documentation as a contract condition — begin these conversations at least 12 months before renewal."),
        ],
        [
          s("National supervisory authorities are operational and beginning enforcement. "),
          x(
            "EU member states established national competent authorities by mid-2025. These authorities have powers of investigation, access to premises, and authority to impose fines. They are not waiting for the full implementation timeline before investigating complaints and proactive audits.",
            "Early enforcement is likely to focus on visible consumer-facing violations (undisclosed chatbots), prohibited AI in high-profile workplaces, and high-risk AI systems with no compliance documentation. Organisations in these categories are first-mover enforcement targets.",
          ),
          s(" Prioritise compliance activities for public-facing AI and employee-facing high-risk systems — these are the most visible and most likely first enforcement targets."),
        ],
      ],
      examples: [
        {
          title: "HR technology vendor — conformity assessment timeline",
          body: "A major HR platform vendor began its EU AI Act conformity assessment programme for Annex III employment AI features in Q3 2024, committing to completion before August 2026. Enterprise customers whose contracts renew post-August 2026 have been provided access to draft conformity documentation for review. Procurement leaders should request this documentation proactively — don't wait for the vendor to offer it as part of a renewal negotiation.",
        },
        {
          title: "Compliance sequencing — what to do first",
          body: "A pan-European financial services group prioritised its AI Act compliance programme in three phases: (1) prohibited AI audit and remediation in Q1 2025; (2) GPAI vendor documentation review and contract updates in Q3 2025; (3) high-risk AI conformity assessment programme through 2026. This sequencing matched enforcement timeline risk. Leaders starting the programme today should follow the same order — prohibited first, GPAI second, high-risk third.",
        },
        {
          title: "French national authority — first enforcement action",
          body: "The French national AI supervisory authority announced its first investigation in Q4 2025, targeting a consumer recruitment platform using AI candidate scoring without EU AI Act Article 13 transparency disclosures to job applicants. The platform faced corrective notice and a six-month remediation deadline. The case established that national authorities are actively monitoring consumer-facing recruitment AI — a first enforcement signal for HR technology deployers.",
        },
      ],
    }),
    buildSection({
      number: "1.8",
      title: "Building Your EU AI Act Compliance Programme",
      subtitle: "A six-step programme that every business function leader can own",
      take: "EU AI Act compliance is a business programme, not a technology project. The six steps — portfolio audit, risk classification, vendor assessment, gap analysis, remediation, and ongoing governance — require leadership ownership from HR, Finance, Operations, and Legal alongside technology teams.",
      why: "Leaders who delegate EU AI Act compliance entirely to technology or legal teams create gaps: the Act's obligations require business function knowledge to classify use cases accurately and design human oversight architectures that work in real operations.",
      paragraphs: [
        [
          s("Step one: create a complete AI portfolio inventory — every AI system your organisation uses or has developed, regardless of function. "),
          x(
            "The inventory must cover: vendor-provided AI tools (SaaS platforms with AI features), internally developed AI models, AI in operational technology (logistics, manufacturing), and GPAI APIs integrated into products or workflows.",
            "Most organisations undercount their AI portfolio. A structured discovery exercise — interviewing each business function, reviewing IT procurement records, and auditing developer environments — typically reveals 30–50% more AI systems than initially identified.",
          ),
          s(" Run a structured AI discovery exercise across all functions and maintain a living inventory — the portfolio expands continuously as new tools are adopted."),
        ],
        [
          s("Steps two through four: classify, assess vendors, and identify gaps. "),
          x(
            "Classify each system using the EU AI Act four-tier framework. For each high-risk system: assess whether the vendor has provided conformity documentation; identify gaps between current deployment configuration and Act requirements (logging, human oversight, transparency disclosures).",
            "Gap analysis typically reveals three common findings: (1) AI systems in use with no vendor conformity documentation; (2) high-risk systems deployed without operational human oversight; (3) customer-facing AI interactions without required transparency disclosures.",
          ),
          s(" Gap analysis output should be a remediation register with system name, classification, gap description, owner, and target date — the same format as a data protection gap register."),
        ],
        [
          s("Steps five and six: remediate and establish ongoing governance. "),
          x(
            "Remediation actions fall into three categories: vendor actions (requiring conformity documentation, contract amendments); technical actions (implementing logging, enabling override features, updating transparency disclosures); process actions (training human oversight personnel, establishing incident reporting workflows).",
            "Ongoing governance requires: a named AI compliance owner, a quarterly AI system review process, a change management gate for new AI deployments, and an incident reporting pathway to national authorities for serious incidents involving high-risk AI.",
          ),
          s(" Embed EU AI Act compliance into your change management process: every new AI deployment above a defined threshold requires classification review before go-live."),
        ],
      ],
      examples: [
        {
          title: "Pan-European bank — AI portfolio discovery",
          body: "A pan-European bank's EU AI Act programme began with a portfolio discovery exercise across 12 business functions. Initial IT estimates identified 23 AI systems. The structured discovery revealed 67 systems — including Excel-based statistical models meeting the Act's definition of AI systems, vendor tools with AI features not disclosed in contracts, and shadow IT AI tools adopted by individual teams. The complete inventory was the foundation of an accurate risk classification and a realistic compliance programme.",
        },
        {
          title: "Manufacturing group — human oversight as process design",
          body: "A manufacturing group's EU AI Act compliance team identified that its AI-powered quality control system (high-risk: critical infrastructure Annex III) had a human override feature but no training programme for operators on when and how to use it. Designing the human oversight architecture required collaboration between compliance, operations, and HR to define override authority, train 140 operators, and document the oversight process. The business function knowledge — not the technology feature — made compliance real.",
        },
        {
          title: "Legal services firm — quarterly AI governance cadence",
          body: "A legal services firm established an AI governance committee meeting quarterly to review its AI system inventory, classify new tools adopted since the previous meeting, review any incidents or near-misses, and update vendor compliance status. The committee includes the COO, General Counsel, Head of Technology, and CHRO — exactly the cross-functional leadership the Act's obligations require. Four meetings in, the committee had prevented two non-compliant AI deployments and renegotiated three vendor contracts to include conformity documentation.",
        },
      ],
    }),
  ],
  quiz: [
    {
      q: "Your HR team wants to deploy an AI candidate scoring tool from a US vendor for EU hiring. The vendor provides a contract warranty that it 'complies with EU AI Act'. What is the correct business response?",
      options: [
        "Accept the warranty — vendor compliance covers deployer obligations.",
        "Request verifiable conformity documentation (not just a warranty) for the high-risk AI system, and separately identify your deployer obligations — human oversight, logging, transparency to candidates — that exist regardless of vendor compliance status.",
        "Escalate to legal — AI compliance is not a business leader responsibility.",
        "Only proceed if the vendor is EU-based.",
      ],
      correct: 1,
      correctFeedback:
        "Right. Vendor warranties are not conformity documentation. Deployers have direct obligations under the Act that persist regardless of vendor compliance status — human oversight, logging, and candidate transparency are deployer responsibilities. Re-read sections 1.3 and 1.4.",
      wrongFeedback:
        "Vendor compliance and deployer compliance are separate obligations under the Act. A vendor warranty does not satisfy your deployer obligations — you must independently implement human oversight, logging, and transparency requirements. Re-read sections 1.3 and 1.4.",
    },
    {
      kind: "order",
      q: "Order the EU AI Act phased implementation milestones from earliest to latest.",
      prompt: "Drag to arrange from first effective date (top) to last (bottom).",
      items: [
        "Prohibited AI bans take effect (Article 5)",
        "GPAI model obligations apply (including training data transparency)",
        "High-risk AI system obligations fully apply (conformity assessments required)",
        "All remaining transitional provisions expire",
      ],
      correctFeedback:
        "Right. Prohibited AI first (Feb 2025), then GPAI model obligations (Aug 2025), then high-risk system obligations (Aug 2026), then full transitional expiry. Leaders starting compliance now must prioritise in this order. Re-read section 1.7.",
      wrongFeedback:
        "The prohibited AI bans came first — they are already in force. GPAI model provisions came next, then high-risk system obligations in Aug 2026. Re-read section 1.7.",
    },
    {
      kind: "categorize",
      q: "Classify each AI system into its correct EU AI Act risk tier.",
      categories: ["Prohibited", "High-Risk (Annex III)", "Limited-Risk", "Minimal-Risk"],
      items: [
        { text: "Real-time facial recognition system identifying individuals in a retail store to prevent shoplifting.", category: 0 },
        { text: "AI-powered CV screening and candidate ranking tool used in EU hiring processes.", category: 1 },
        { text: "Customer service chatbot that answers product questions without disclosing it is AI.", category: 2 },
        { text: "AI spam filter in corporate email that removes phishing attempts automatically.", category: 3 },
        { text: "Employee wellbeing tool that infers stress levels from typing and application usage patterns.", category: 0 },
        { text: "AI credit scoring model used to approve or decline personal loan applications.", category: 1 },
      ],
      correctFeedback:
        "Right. Prohibited: real-time biometric surveillance in public spaces and workplace emotion recognition. High-risk: employment AI and access-to-financial-services AI. Limited-risk: chatbot without disclosure. Minimal-risk: spam filter. Re-read sections 1.2 and 1.6.",
      wrongFeedback:
        "Apply Annex III categories: HR/employment AI and financial services AI are high-risk. Real-time biometric in public spaces and workplace emotion recognition are prohibited. Chatbots without disclosure are limited-risk. Re-read sections 1.2 and 1.6.",
    },
    {
      q: "Your data science team has built an internal AI model for customer churn prediction that is now being used to restrict service access for low-score customers. How does the EU AI Act classify your organisation in this scenario?",
      options: [
        "As a minimal-risk deployer — internal models have lower obligations.",
        "As a provider of a high-risk AI system under 'access to essential services', regardless of the model being internally developed. Provider obligations including conformity assessment apply.",
        "As a limited-risk deployer — churn prediction is not explicitly listed in Annex III.",
        "As a GPAI user only — all internal ML models are treated as GPAI under the Act.",
      ],
      correct: 1,
      correctFeedback:
        "Right. Internal development does not remove provider obligations. Using a churn model to restrict customer service access meets the 'access to essential services' Annex III trigger. Your team must complete a conformity assessment regardless of the model being internally built. Re-read section 1.4.",
      wrongFeedback:
        "Internally developed AI systems that meet Annex III use case criteria are high-risk regardless of whether they are sold or used internally. Restricting service access based on AI scoring is an 'access to essential services' trigger. Re-read section 1.4.",
    },
    {
      q: "A marketing team is using a commercial LLM API to generate client-facing thought leadership content. What EU AI Act obligation does the business leader need to ensure is met?",
      options: [
        "No obligation — LLM APIs are minimal risk for commercial content.",
        "Request the GPAI provider's training data summary documentation and assess copyright risk before publishing AI-generated content externally; ensure any AI-generated content disclosures required by national implementation are in place.",
        "Register the tool in the EU AI database before use.",
        "Obtain a conformity assessment from the LLM provider before any business use.",
      ],
      correct: 1,
      correctFeedback:
        "Right. GPAI model use creates copyright risk obligations — training data summary documentation from the provider enables this assessment. Limited-risk obligations may also require AI disclosure for published content. Re-read section 1.5.",
      wrongFeedback:
        "GPAI use carries specific obligations including copyright risk assessment (requiring training data documentation from the provider) and potentially disclosure obligations. Not all LLM use is registration-free or fully minimal risk. Re-read section 1.5.",
    },
    {
      kind: "order",
      q: "Order the six steps of a EU AI Act compliance programme from first to last.",
      prompt: "Drag to arrange from first action (top) to last (bottom).",
      items: [
        "Create complete AI portfolio inventory across all business functions",
        "Classify each AI system using the four-tier risk framework",
        "Assess vendors for conformity documentation and identify deployer obligation gaps",
        "Conduct gap analysis and produce remediation register with owners and dates",
        "Execute remediation actions: vendor, technical, and process",
        "Establish ongoing governance: named owner, quarterly review, change management gate",
      ],
      correctFeedback:
        "Right. Inventory → classify → vendor assessment → gap analysis → remediation → ongoing governance. You cannot classify without inventory; cannot gap-analyse without classification. Re-read section 1.8.",
      wrongFeedback:
        "Start with a complete inventory — you cannot classify or remediate what you have not discovered. Governance comes last because it requires the remediation programme to define what to govern. Re-read section 1.8.",
    },
  ],
});
