import { buildChapter, buildSection, s, x, BL_CALLOUT, sectionWithDiagram } from "../concepts-bl-helpers";

export const chapter08BlAiLandscapeVendorStructure = buildChapter({
  slug: "bl-ai-landscape-vendor-structure",
  number: 8,
  shortTitle: "AI Landscape and Vendor Structure",
  title: "The AI Landscape and Vendor Structure — Navigating as a Buyer",
  readingMinutes: 26,
  summary:
    "The AI vendor landscape is complex, rapidly consolidating, and structured in ways that create specific risks for buyers. Business leaders who understand the AI value chain — from foundation model providers through cloud platforms to application vendors — negotiate better contracts, manage concentration risk, and make vendor decisions with clear eyes about dependency and switching cost.",
  keyTakeaway:
    "The AI vendor landscape has three layers: foundation model providers, cloud AI platforms, and application vendors. Your risk is concentrated differently at each layer. Understanding where your AI value chain is exposed — to pricing changes, vendor failure, or model deprecation — is the buyer's primary protection.",
  pmCallout: BL_CALLOUT,
  sections: [
    sectionWithDiagram({
      number: "8.1",
      title: "The AI Value Chain",
      subtitle: "How AI capability flows from research labs to your operations — and where value is captured at each layer",
      take: "The AI value chain runs from compute hardware through foundation model training, cloud API distribution, and application software to end-user deployment. Value and risk are distributed differently across these layers. Buyers who understand where they sit in the chain understand their leverage, their concentration risk, and their switching options.",
      why: "Most enterprise AI buyers interact with the application layer — not realising they are three layers removed from the foundational decisions that determine what their tools can do, what they will cost next year, and what happens if a supplier changes its strategy.",
      paragraphs: [
        [
          s("The AI value chain has five layers, each with distinct economics and competitive dynamics. "),
          x(
            "Layer one: compute hardware — NVIDIA, AMD, and cloud providers who supply the GPU infrastructure for AI training and inference. Layer two: foundation model providers — OpenAI, Anthropic, Google DeepMind, Meta, Mistral, who train and maintain the large pre-trained models. Layer three: cloud AI platforms — AWS, Azure, GCP, who host and distribute foundation models plus tooling. Layer four: application vendors — who build vertical AI products on top of foundation models. Layer five: end users — enterprises that deploy AI in business processes.",
            "Most enterprise buyers interact primarily at layer four (application vendors) and layer three (cloud platforms). Decisions made at layers one and two propagate through the chain: a foundation model price increase or deprecation affects every application built on it.",
          ),
          s(" Map your organisation's AI spend to its value chain position at each layer. Concentration risk at layer two or three propagates to everything you buy at layer four."),
        ],
        [
          s("Value is captured unequally across the AI value chain. "),
          x(
            "Layer one (compute) captures value through hardware pricing power — NVIDIA's gross margins exceed 70%. Layer two (foundation models) captures value through API pricing and enterprise contracts — currently competitive but structurally powerful. Layer three (cloud platforms) captures value through bundling and vendor lock-in. Layer four (application vendors) captures value through vertical workflow integration and switching cost.",
            "Enterprise buyers create the most value — they convert AI capability into business outcomes — but retain the least structural power. Application vendor switching cost, cloud platform lock-in, and foundation model dependency all constrain buyer leverage.",
          ),
          s(" Understanding value chain dynamics enables buyers to negotiate from appropriate positions at each layer — rather than accepting standard terms that capture maximum value for vendors."),
        ],
        [
          s("AI value chain dependencies create procurement exposure that standard technology risk assessment misses. "),
          x(
            "A company that purchases a vertical AI tool from a small application vendor has: exposure to the application vendor's financial stability, exposure to the underlying foundation model's pricing and availability, and exposure to the cloud platform's service continuity. Three layers of dependency for one purchased product.",
            "Technology risk assessments that only evaluate the direct vendor miss the upstream dependencies. An application vendor can be financially stable while becoming unable to deliver its product because its foundation model provider changed pricing, deprecated a model, or modified access terms.",
          ),
          s(" Require AI application vendors to disclose their foundation model dependencies and their contractual protections against foundation model changes as part of standard vendor diligence."),
        ],
      ],
      examples: [
        {
          title: "Jasper's OpenAI dependency — value chain exposure",
          body: "Jasper, an AI writing tool that raised at peak valuations, built its entire product on OpenAI's API. When OpenAI launched ChatGPT with competitive writing capabilities, Jasper's market positioning eroded. The dependency was known — Jasper had no alternative model strategy. Enterprise buyers of vertical AI tools should evaluate: what happens to this vendor's product if the underlying foundation model provider launches a competing product or changes API pricing significantly?",
        },
        {
          title: "NVIDIA's compute layer dominance",
          body: "NVIDIA's H100 and subsequent GPU chips represent over 80% of AI training compute worldwide. Data centres and cloud providers face 12–18 month delivery queues for high-end GPU infrastructure. This compute layer scarcity propagates to the application layer: AI tools that require GPU resources for inference face capacity constraints that affect availability and pricing. Business leaders: AI infrastructure scarcity is a real supply chain risk in 2026 — include it in your technology risk register.",
        },
        {
          title: "Cloud platform bundling — Azure OpenAI as value chain integration",
          body: "Microsoft Azure integrates OpenAI's foundation models directly into its cloud platform, making GPT-4 and GPT-4o available through Azure API alongside Azure's existing enterprise tooling, security, and compliance infrastructure. For enterprise buyers, this creates a compelling bundle — but also deepens Azure cloud dependency. Procurement leaders evaluating Azure OpenAI should model the exit cost from the bundle, not just the entry price.",
        },
      ],
    }, {
      kind: "diagram",
      id: "bl-vendor-evaluation",
      type: "flow",
      title: "Vendor Evaluation Process",
      caption:
        "Requirements → shortlist → golden-set eval → TCO → contract. Run this process on every AI vendor pitch.",
    }),
    sectionWithDiagram({
      number: "8.2",
      title: "Foundation Model Providers",
      subtitle: "The companies whose models underlie most enterprise AI — and what their business models mean for buyers",
      take: "Five to ten organisations train and maintain the foundation models that power most enterprise AI. Their pricing, model deprecation decisions, access terms, and commercial strategies directly affect every AI tool built on their models. Business leaders should understand who these providers are and what their relationships look like.",
      why: "Foundation model providers are the wholesalers of the AI industry. Retail buyers who do not understand the wholesale layer have incomplete information about the risk and cost structure of what they are purchasing.",
      paragraphs: [
        [
          s("The foundation model provider landscape in 2026 is concentrated among a small number of organisations. "),
          x(
            "Closed providers: OpenAI (GPT-4o, o3 series), Anthropic (Claude 3.5/4 series), Google DeepMind (Gemini series). Open-weight providers: Meta (Llama series), Mistral (Mistral and Mixtral series), Stability AI, and several research institutions. Enterprise AI deployments are predominantly built on one or more of these foundations.",
            "The distinction between closed (API access only, weights proprietary) and open-weight (weights available for self-hosting) is commercially significant: closed providers can change pricing, terms, and model availability at any time; open-weight models can be self-hosted permanently once downloaded.",
          ),
          s(" Map your AI tool portfolio to its underlying foundation model providers. The concentration tells you where your dependency risk sits."),
        ],
        [
          s("Foundation model pricing and access terms are vendor decisions that propagate to all application layers. "),
          x(
            "OpenAI has made multiple pricing changes for its API — both increases and decreases — that directly affected the economics of every product built on its API. A 40% API price increase would compress margins for every application vendor using OpenAI, potentially triggering price increases to enterprise buyers or vendor exits from the market.",
            "Enterprise buyers of AI tools should understand: is this product's economics exposed to upstream foundation model pricing changes? Does the application vendor have contractual price protections from its foundation model provider? Is there a model switching option if foundation model pricing becomes unacceptable?",
          ),
          s(" Include foundation model pricing exposure in your AI vendor due diligence — alongside the application vendor's direct pricing terms."),
        ],
        [
          s("Model deprecation is a specific risk that AI buyers must plan for. "),
          x(
            "Foundation model providers regularly deprecate older model versions as they release newer capabilities. GPT-3.5, early Claude models, and early Gemini versions have all been deprecated or downgraded. Applications built on deprecated models must migrate — at implementation cost and with performance risk during migration.",
            "Deprecation risk is not hypothetical — it is a documented pattern in every major foundation model provider's history. Enterprise AI contracts should include model deprecation provisions: minimum notice periods, migration support obligations, and performance equivalence guarantees for the replacement model.",
          ),
          s(" Include model deprecation terms in any AI vendor contract: minimum 12-month deprecation notice, vendor obligation to support migration, and performance equivalence testing requirements for the replacement model."),
        ],
      ],
      examples: [
        {
          title: "Anthropic's enterprise strategy",
          body: "Anthropic's commercial strategy targets enterprise customers in regulated industries — financial services, legal, healthcare — with data residency, compliance documentation, and model transparency positioned as differentiators versus OpenAI. For enterprise buyers in regulated sectors, Anthropic's Claude constitutional AI approach and willingness to engage on safety documentation provides a governance narrative that OpenAI's commercial history makes harder to claim. Foundation model selection is a governance decision as well as a capability decision.",
        },
        {
          title: "Meta's Llama open strategy — a buyer opportunity",
          body: "Meta's release of Llama model weights creates a different buyer relationship: organisations that download and self-host Llama models have no ongoing dependency on Meta's API pricing, availability, or terms changes. The trade-off: self-hosting requires engineering capability and infrastructure investment. For high-volume applications where engineering capability exists, open-weight models eliminate foundation model pricing risk permanently — a strategic consideration for any organisation with sufficient technical capability.",
        },
        {
          title: "GPT-3.5 deprecation — the migration cost",
          body: "OpenAI's deprecation of GPT-3.5 API access in 2024 required all GPT-3.5-dependent applications to migrate to newer models. Migration costs included: re-evaluation of performance on the new model (different behaviours required prompt redesign), regression testing across all use cases, and in some cases, significant re-engineering of application logic. Enterprise buyers who had not included deprecation provisions in their vendor contracts received insufficient notice for budget planning. The incident is the reference case for deprecation clause negotiation.",
        },
      ],
    }, {
      kind: "diagram",
      id: "ch8-cost-latency-frontier",
      type: "comparison",
      title: "Model Tier Trade-offs",
      caption:
        "Frontier, mid-tier, and small models sit on a cost-latency-quality curve. Procurement should match tier to use case, not default to largest.",
    }),
    buildSection({
      number: "8.3",
      title: "Cloud AI Platforms",
      subtitle: "How AWS, Azure, and GCP distribute AI capability — and the lock-in they create",
      take: "The major cloud providers — AWS, Azure, and GCP — are the distribution layer for AI capability. They integrate foundation models, provide tooling, and bundle AI with existing enterprise cloud services. The bundle creates compelling economics at entry — and material switching costs at exit. Leaders must evaluate both the entry proposition and the exit cost.",
      why: "Cloud AI platform decisions are infrastructure decisions with five-to-ten year consequences. The AI capabilities bundled into your existing cloud platform may be convenient today and constraining tomorrow. Understanding what you are committing to before you commit prevents expensive later remediation.",
      paragraphs: [
        [
          s("Each major cloud platform offers a different AI proposition reflecting its strategic positioning. "),
          x(
            "Azure: OpenAI partnership creates the industry's tightest integration between a cloud platform and frontier foundation models. Azure OpenAI offers GPT-4 and GPT-4o in Azure's enterprise security and compliance wrapper — compelling for Microsoft-heavy enterprises. AWS Bedrock: a model marketplace approach offering multiple foundation models (Anthropic Claude, Meta Llama, Mistral, Amazon Titan) — optionality over any single model dependency. GCP Vertex AI: tightest integration with Google's Gemini models and Google's data platform ecosystem — compelling for analytics-heavy organisations.",
            "Each positioning creates different dependency profiles. Azure concentrates dependency on the Microsoft-OpenAI relationship. AWS distributes across multiple models. GCP concentrates on the Google ecosystem.",
          ),
          s(" Select cloud AI platform based on your existing cloud concentration and the dependency profile that fits your risk tolerance — not solely on current model performance benchmarks."),
        ],
        [
          s("Cloud AI platform lock-in operates at multiple levels simultaneously. "),
          x(
            "Data layer lock-in: training data and interaction logs stored in platform-specific formats and locations. Integration lock-in: AI capabilities deeply integrated with platform-specific services (Azure Cognitive Services, AWS SageMaker, GCP BigQuery ML). Tooling lock-in: AI monitoring, deployment, and management tooling specific to the platform. API format lock-in: applications coded against platform-specific API formats that require re-engineering on migration.",
            "Each lock-in layer has a different switching cost. Data layer migration is typically most expensive. API format migration is typically most visible. Integration migration is the most complex to estimate.",
          ),
          s(" Before committing to a cloud AI platform, model the exit cost at three time horizons: 2 years, 5 years, and 10 years. The exit cost grows with integration depth. Understanding it before entry enables conscious rather than accidental commitment."),
        ],
        [
          s("Cloud AI commitments typically require multi-year commercial commitments for best pricing — which constrains future flexibility. "),
          x(
            "Azure, AWS, and GCP all offer significant discounts on AI services for multi-year committed spending — typically 25–40% for three-year commitments versus on-demand pricing. The discount is compelling; the constraint is real. A three-year commitment made in 2024 may constrain migration flexibility in 2026 if the AI landscape has shifted significantly.",
            "CFOs should model committed versus on-demand pricing over the commitment period with realistic scenarios for AI landscape change. The discount saves money in the expected scenario; the commitment costs money in the scenario where migration becomes desirable.",
          ),
          s(" Structure cloud AI commitments with ramp provisions (gradual volume commitment), platform optionality clauses where available, and a maximum commitment duration calibrated to your confidence in the vendor relationship."),
        ],
      ],
      examples: [
        {
          title: "A bank's multi-cloud AI strategy",
          body: "A large retail bank adopted a deliberate multi-cloud AI approach: Azure OpenAI for customer-facing generative AI (Microsoft enterprise compliance wrapper), AWS Bedrock for internal ML workloads (data residency in AWS Europe), and GCP Vertex AI for analytics-AI integration (existing BigQuery investment). The strategy accepted higher complexity in exchange for no single-cloud concentration. Annual IT review: re-evaluate distribution based on capability developments. The strategy was a governance decision made at CFO and CTO level, not a technical default.",
        },
        {
          title: "GCP Vertex AI lock-in — a migration story",
          body: "A retail company built its demand forecasting and personalisation AI infrastructure on GCP Vertex AI, deeply integrating with BigQuery ML and Cloud Storage. Two years later, a strategic partnership with AWS required migrating AI infrastructure. The migration cost: £2.1M in engineering over 14 months, significantly exceeding the original platform implementation cost. The lock-in was not accidental — it was a consequence of deep integration chosen for performance reasons. The exit cost had not been modelled at implementation time.",
        },
        {
          title: "AWS Bedrock — model optionality in practice",
          body: "An insurance company using AWS Bedrock accessed Claude 3 Sonnet for claims analysis, Llama 3 for internal knowledge management, and Titan for structured data extraction — running three models on a single platform with unified billing, logging, and governance tooling. When Anthropic deprecated Claude 3 Haiku, migration to Claude 3.5 Sonnet required only prompt adjustment, not platform change. The Bedrock model-agnostic approach reduced migration cost from a platform decision to a model configuration adjustment.",
        },
      ],
    }),
    buildSection({
      number: "8.4",
      title: "Application Vendors",
      subtitle: "The AI tools your teams actually use — and what determines their longevity and value",
      take: "Application vendors are the companies whose AI tools your HR, finance, operations, and sales teams use daily. Their viability, their underlying model dependencies, their switching costs, and their governance standards all determine whether they are safe long-term investments. A due diligence framework for application vendors protects operational continuity and commercial value.",
      why: "Application vendor failure, acquisition, or product pivot is an increasingly common occurrence as the AI landscape consolidates. Leaders who selected application vendors without assessing their financial stability, their dependency risk, and their data portability have a concentration problem compounding invisibly.",
      paragraphs: [
        [
          s("Application vendor selection requires five due diligence dimensions beyond feature comparison. "),
          x(
            "One: financial stability — runway, revenue growth, customer concentration, and investor profile. Two: foundation model dependency — which models do they use, what would change if that model's pricing or availability changed? Three: data portability — can you export your data and your fine-tuned model weights on contract termination? Four: governance standards — what are their bias testing, hallucination governance, and security practices? Five: consolidation exposure — how likely is this vendor to be acquired or pivoted in your contract period?",
            "Most enterprise software due diligence addresses only dimension one. The remaining four are AI-specific risks that have materialised repeatedly in the sector.",
          ),
          s(" Use all five dimensions as a standard AI application vendor due diligence checklist. Vendors who resist or cannot answer dimensions two through five are revealing governance gaps."),
        ],
        [
          s("Application vendor financial stability is a more acute risk in AI than in traditional software. "),
          x(
            "AI application vendors face structural cost pressures: high inference costs, rapid model deprecation requiring expensive technical updates, and foundation model pricing changes they cannot fully pass through. Venture-backed AI SaaS companies that achieved growth on subsidised pricing may face unit economics crises at maturity.",
            "The enterprise buyer's risk: investing in workflow integration with a vendor that fails or pivots before the contract term ends. The sunk cost of integration — including training, process redesign, and dependency on AI-generated outputs — can exceed the vendor contract value.",
          ),
          s(" For AI application vendors above a defined materiality threshold, require financial statements or investor letters confirming runway — the same standard you would apply to any high-dependency software vendor."),
        ],
        [
          s("Application vendor switching costs are higher for AI tools than for traditional software. "),
          x(
            "Traditional software switching cost: data migration, user retraining, integration re-engineering. AI application switching cost includes all of these plus: re-establishing the model on your domain (loss of fine-tuning investment), re-generating flywheel data in the new system, and potentially lower performance during the period before the new tool has learned your domain.",
            "The AI switching cost makes application vendor lock-in more consequential than in traditional software. Enterprise buyers should build data portability and switching rights into AI vendor contracts at a higher contractual standard than for equivalent traditional software tools.",
          ),
          s(" Negotiate explicit switching rights for AI application vendors: data export in standard formats, model weight export if applicable, and knowledge transfer support. These terms are more valuable in AI than in traditional software."),
        ],
      ],
      examples: [
        {
          title: "Inflection AI acquisition — application vendor consolidation",
          body: "Inflection AI's technology and team were effectively acquired by Microsoft in 2024, leaving Inflection's enterprise Pi product in an uncertain state. Enterprise customers who had integrated Pi into HR and customer service workflows faced transition decisions they had not anticipated. The consolidation risk was foreseeable: Inflection's venture backing, its competitive position against Microsoft-backed OpenAI, and its burn rate were all public information. Due diligence on consolidation exposure would have identified the risk.",
        },
        {
          title: "An HR technology switching cost",
          body: "A company replaced its AI-powered performance management tool after two years. Switching cost: £280K in data migration and integration re-engineering. The new tool required 6 months before its AI recommendations reached the quality level of the exited tool — because the model required that period to learn the company's performance data patterns. The switching cost — including the quality lag period — exceeded the annual contract value of the exited tool. Data portability clauses were not in the original contract.",
        },
        {
          title: "Salesforce Einstein — application stability from platform integration",
          body: "Salesforce Einstein's stability as an AI application vendor derives partly from deep CRM platform integration: Einstein is not a standalone AI product but AI capabilities embedded in the world's largest CRM platform. Enterprise buyers of Einstein have CRM lock-in as a de facto application AI lock-in stabiliser — and CRM switching costs as the effective AI switching cost. Leaders should understand that application vendor stability is often a function of platform integration depth, not standalone AI capability.",
        },
      ],
    }),
    buildSection({
      number: "8.5",
      title: "Open vs Proprietary Models — A Buyer's Perspective",
      subtitle: "The strategic trade-offs between open-weight and closed foundation models for enterprise buyers",
      take: "Open-weight models (downloadable, self-hostable) and closed proprietary models (API-only) have fundamentally different risk profiles, cost structures, and strategic implications for enterprise buyers. The choice is not a technical preference — it is a commercial and strategic decision that should be made explicitly.",
      why: "Many enterprise buyers default to closed proprietary models for convenience without evaluating the long-term cost and dependency implications. Leaders who evaluate the open-weight option explicitly may find materially better economics and fewer strategic constraints.",
      paragraphs: [
        [
          s("Closed proprietary models offer faster access and frontier capability — at ongoing cost and dependency. "),
          x(
            "OpenAI, Anthropic, and Google provide API access to frontier models with no infrastructure requirement. The value proposition: immediate access to state-of-the-art capability without engineering overhead. The cost: per-token pricing at commercial rates, dependency on provider availability and terms, and no ability to self-host if the relationship changes.",
            "Closed models are appropriate for: organisations without ML engineering capability, frontier capability tasks where open models underperform, time-constrained deployments where infrastructure setup is not feasible, and use cases with variable volume that do not justify fixed infrastructure investment.",
          ),
          s(" Evaluate closed models as the correct default for speed and frontier capability — with explicit evaluation of open-weight alternatives at defined volume and capability thresholds."),
        ],
        [
          s("Open-weight models offer independence and cost efficiency — at engineering overhead cost. "),
          x(
            "Self-hosting Llama, Mistral, or Falcon models eliminates per-token pricing permanently after infrastructure investment. The ongoing cost is GPU infrastructure and ML engineering to manage deployment, optimisation, and updates. At sufficient volume, the economics strongly favour open-weight self-hosting.",
            "Open-weight models also provide: data sovereignty (no data leaves your environment), customisation freedom (fine-tuning without vendor permission), and independence from provider pricing and terms changes. These are strategic benefits beyond cost savings.",
          ),
          s(" Calculate the open-weight break-even point for each high-volume AI use case. At many enterprise volumes, the economics favour self-hosted open models — especially for use cases that do not require frontier capability."),
        ],
        [
          s("The open vs proprietary decision is often a portfolio decision, not a binary one. "),
          x(
            "Most sophisticated enterprise AI buyers maintain a portfolio: open-weight models for high-volume, well-defined tasks where cost efficiency and data sovereignty matter; proprietary frontier models for complex reasoning, novel tasks, and contexts where frontier capability is demonstrably required; and hybrid architectures that route queries to the appropriate model tier.",
            "The portfolio approach requires more architectural sophistication but produces optimal cost and capability across the organisation's diverse AI use cases. Leaders who commit entirely to one approach — all proprietary or all open — typically either overspend or underperform relative to optimum.",
          ),
          s(" Evaluate your AI portfolio against the open-proprietary dimension annually. The optimal split evolves as open model capability catches up with closed frontier models and as your engineering capability develops."),
        ],
      ],
      examples: [
        {
          title: "Mistral in European enterprise — open weight and data sovereignty",
          body: "European enterprises with GDPR and data sovereignty requirements have adopted Mistral's open-weight models (particularly Mixtral and Mistral Large) as an alternative to US-based closed API providers. Self-hosting on European infrastructure eliminates data transfer concerns while providing competitive performance on many enterprise NLP tasks. Mistral's French data centre partnerships provide EU-based cloud hosting for organisations that prefer managed infrastructure over full self-hosting. The open-weight option created choices that closed-only providers did not offer.",
        },
        {
          title: "A law firm's model portfolio strategy",
          body: "A global law firm evaluated its AI portfolio against the open-proprietary dimension. Finding: routine document classification tasks (90% of AI volume) could be handled by a fine-tuned open-weight model at 80% lower cost than the frontier model currently used. Complex contract drafting and legal reasoning (10% of AI volume) required frontier closed model capability. The firm implemented a routing architecture: open-weight for classification, frontier closed model for complex drafting. Annual AI cost reduction: 55%.",
        },
        {
          title: "Manufacturing — industrial safety AI requiring sovereignty",
          body: "A global manufacturer's industrial safety AI — analysing sensor data and safety incident reports — required data sovereignty: operational data could not leave corporate infrastructure under the manufacturer's data classification policy. Only open-weight self-hosted models were compliant. The manufacturer self-hosted Llama on its own GPU infrastructure. The data sovereignty requirement made the open-weight decision deterministic — it was not an economics choice but a compliance requirement. Leaders: data classification policies may make the open-proprietary decision for you.",
        },
      ],
    }),
    buildSection({
      number: "8.6",
      title: "AI Market Consolidation — What It Means for Buyers",
      subtitle: "The M&A trends that are reshaping the vendor landscape and their commercial consequences",
      take: "The AI market is consolidating rapidly: technology giants are acquiring AI startups, investment is concentrating at the foundation model layer, and application vendors are merging or failing. Buyers who understand consolidation trends can anticipate vendor changes, negotiate accordingly, and avoid making major commitments to vendors on the wrong side of consolidation.",
      why: "Enterprise buyers are frequently surprised by vendor acquisitions that change product direction, pricing, or support quality. AI market consolidation is accelerating and more predictable than it appears — leaders with a consolidation framework can manage the risk proactively.",
      paragraphs: [
        [
          s("AI market consolidation follows a predictable pattern driven by four forces. "),
          x(
            "Infrastructure advantage: large cloud providers are acquiring AI startups whose capabilities complement their platform. Distribution advantage: large software companies are acquiring AI tools to bundle into existing enterprise distribution. Talent acquisition: technology giants are acquiring AI startups primarily to acquire research teams, not products. Survival consolidation: undercapitalised AI startups with insufficient differentiation are merging or failing.",
            "Each consolidation type has different buyer implications. Infrastructure and distribution acquisitions often maintain product continuity. Talent acquisitions often result in product deprecation. Survival consolidation involves product and service continuity risk.",
          ),
          s(" Assess each AI vendor against the four consolidation types annually. Vendors showing talent-acquisition signals (research-focus, loss of commercial leadership, shrinking sales teams) warrant increased consolidation risk assessment."),
        ],
        [
          s("Acquisition announcements trigger specific contractual and operational responses for enterprise buyers. "),
          x(
            "When your AI vendor is acquired, the standard enterprise response sequence is: invoke contract change-of-control provisions if available, request a roadmap briefing from the acquirer within 30 days, assess product continuation risk based on acquirer's existing portfolio overlap, and initiate alternative vendor evaluation within 60 days if product continuation is uncertain.",
            "Enterprise contracts with AI vendors should include change-of-control provisions: the right to renegotiate or terminate on acquisition, data portability rights exercisable within 90 days of acquisition notification, and service continuity guarantees for the contract term regardless of ownership change.",
          ),
          s(" Include change-of-control provisions in all AI vendor contracts above your materiality threshold. These provisions are standard in enterprise software agreements but are often omitted in AI-specific contracts where buyers are less experienced."),
        ],
        [
          s("Consolidation creates both risks and opportunities for enterprise buyers. "),
          x(
            "Risk: vendor acquired by competitor, product deprecated, pricing changed, support quality degraded. Opportunity: smaller vendor acquired by a resource-rich acquirer who improves product quality, expands support, and provides commercial stability. The same consolidation event can be a risk or an opportunity depending on the acquirer.",
            "Leaders who have pre-assessed the most likely acquirer for each AI vendor — and the commercial implications of that acquisition — can respond strategically to announcement, rather than reactively. Proactive scenario planning is the consolidation risk management tool.",
          ),
          s(" Conduct annual consolidation scenario analysis for your top five AI application vendors: most likely acquirer, probability within 24 months, and buyer implication of that acquisition."),
        ],
      ],
      examples: [
        {
          title: "Microsoft's acquisition portfolio — distribution consolidation",
          body: "Microsoft's investment in OpenAI, acquisition of Nuance (clinical AI), and acquisition of GitHub (developer AI) represent distribution consolidation: AI capabilities packaged into Microsoft's enterprise distribution (Office 365, Azure, Teams). Enterprise buyers of these tools are now in a Microsoft dependency relationship whether they purchased from Microsoft or from the pre-acquisition independent vendor. Leaders with Microsoft-heavy AI portfolios should model their concentration exposure explicitly.",
        },
        {
          title: "Cohere enterprise strategy post-investment",
          body: "Cohere's strategy — focused exclusively on enterprise AI with emphasis on deployment flexibility, data privacy, and enterprise support — positions it as the alternative to OpenAI in regulated industries. Its independence from major cloud providers is commercially important to enterprises concerned about cloud platform bundling. Enterprise buyers who want foundation model access without cloud platform dependency have Cohere as a significant option. Consolidation risk: Cohere's most likely acquirer is a cloud provider seeking to improve its foundation model competitive position.",
        },
        {
          title: "Inflection AI — the talent acquisition cost to buyers",
          body: "Microsoft's effective acquisition of Inflection AI's team in 2024 left the Pi enterprise product in an uncertain state. Customers who had built workflows on Pi faced a choice: accept an uncertain product roadmap under Inflection's reduced team, or migrate. The migration cost to Pi enterprise customers was real and was not anticipated in their original procurement. The lesson: vendor financial health, investor concentration, and acquirer scenario analysis are procurement diligence items — not post-acquisition considerations.",
        },
      ],
    }),
    buildSection({
      number: "8.7",
      title: "Vendor Stability and Longevity Assessment",
      subtitle: "How to assess whether your AI vendor will be around in three years",
      take: "AI vendor financial stability assessment requires the same rigour as assessing any high-dependency technology supplier — plus AI-specific factors: inference cost structure, foundation model dependency, and research-to-product transition risk. Leaders who assess vendor stability proactively avoid the operational disruption of unexpected vendor failures.",
      why: "AI vendor failure rates are higher than traditional software vendor failure rates because the economics are harder, the competition is more intense, and the capital requirements are greater. Enterprise buyers who do not assess vendor stability are taking an implicit concentration risk they may not have priced.",
      paragraphs: [
        [
          s("Five financial indicators differentiate stable AI vendors from at-risk ones. "),
          x(
            "One: unit economics — is the vendor's cost to serve a customer decreasing over time as scale improves? Two: retention and expansion — are existing customers renewing and expanding, or churning? Three: runway — how many months of operating capital do they have at current burn rate? Four: customer concentration — does any single customer represent more than 15% of revenue? Five: revenue quality — is revenue growing from multiple use cases, or dependent on a single product feature that could be commoditised?",
            "AI vendors with poor unit economics — selling inference at below-cost prices to acquire customers — may be building a business that is structurally unviable at scale. This is particularly common in generative AI applications where inference costs are high and competitive pricing prevents sustainable margins.",
          ),
          s(" Request unit economics data (cost per active user trends, gross margin) and retention data from AI vendors above your materiality threshold at contract renewal. Vendors who refuse to share this information are concealing indicators relevant to your risk assessment."),
        ],
        [
          s("Governance quality is a predictor of AI vendor longevity in regulated industries. "),
          x(
            "Vendors who invest in bias testing, hallucination governance, security certifications, and regulatory documentation are investing in enterprise-grade quality standards that attract long-term enterprise customers. Vendors who deprioritise governance in favour of speed to market may achieve early growth but face regulatory consequences that disrupt enterprise relationships.",
            "In regulated industries — financial services, healthcare, legal — AI vendor governance quality is a selection criterion as well as a quality assurance criterion. A vendor facing a regulatory investigation for bias or data misuse creates compliance exposure for every enterprise customer who deployed their tool.",
          ),
          s(" Include governance quality in AI vendor selection and annual review criteria. Request SOC 2 Type II, ISO 27001, and AI-specific governance documentation as standard enterprise vendor requirements."),
        ],
        [
          s("Research-heavy AI vendors carry a specific stability risk: the research-to-product transition. "),
          x(
            "Some AI vendors are essentially research organisations with a commercial product wrapper. When research capability is the primary competitive advantage, the commercial product may deprioritised or pivoted as research interests evolve. For enterprise buyers, the tell-tale signs: frequent product direction changes, leadership that is primarily research-oriented, and revenue that has not grown proportionally to research output.",
            "Enterprise buyers should distinguish AI vendors who are primarily building commercial products from those who are primarily conducting research with a commercial product on the side. The former are stable enterprise vendors; the latter may pivot away from your use case.",
          ),
          s(" Assess the research-to-commercial product balance in any AI vendor relationship: what fraction of engineering headcount is in product versus research? What is the revenue growth rate? Research-heavy vendors with slow revenue growth are higher stability risks."),
        ],
      ],
      examples: [
        {
          title: "Stability AI — research vendor stability risk materialised",
          body: "Stability AI, creator of Stable Diffusion, experienced significant leadership instability, financial strain, and product direction uncertainty in 2023–24 — despite having produced one of the most influential AI models of the period. Enterprise customers who had built image generation workflows on Stability AI's commercial products faced uncertainty about support, updates, and service continuity. The research-to-commercial transition risk was identifiable in the company's public statements and leadership profile before the crisis.",
        },
        {
          title: "Stripe — stability from revenue quality",
          body: "Stripe's AI-enhanced fraud and payments infrastructure represents the stability profile that AI application vendors should aspire to: revenue from multiple enterprise customers across multiple use cases, clear unit economics improvement over time, and a commercial product tightly integrated with customer operations. Enterprise buyers of Stripe's fraud AI tools have low stability risk because the AI capability is embedded in a financially stable, multi-product commercial platform — not a standalone AI product with unproven unit economics.",
        },
        {
          title: "A procurement team's vendor stability scorecard",
          body: "A financial services procurement team developed a vendor stability scorecard for AI vendors: financial indicators (runway, gross margin trend, revenue growth, customer concentration), governance quality (SOC 2, bias testing, regulatory engagement), and product indicators (research-to-commercial balance, product direction stability, reference customer quality). Vendors scoring below threshold in any dimension were flagged for risk mitigation — including data portability planning, alternative vendor evaluation, and contract change-of-control provisions. Two vendors flagged in year one were acquired within 18 months.",
        },
      ],
    }),
    buildSection({
      number: "8.8",
      title: "BL Navigating the AI Market as a Buyer",
      subtitle: "A practical framework for making vendor decisions that age well",
      take: "Business leaders navigating the AI vendor market need a decision framework that accounts for value chain position, dependency risk, switching cost, consolidation exposure, and governance standards — not just feature comparison and price. Leaders who apply this framework make vendor decisions that age well; those who focus only on current capability make decisions they reverse expensively.",
      why: "The AI market moves rapidly. Vendor decisions made in 2024 are being re-examined in 2026 as the landscape has shifted. Leaders with a robust vendor governance framework anticipate this and build it into initial decision-making — not as post-hoc risk management.",
      paragraphs: [
        [
          s("A vendor navigation framework for AI buyers has six components. "),
          x(
            "One: value chain mapping — where does this vendor sit in the AI value chain and what dependencies does that create? Two: dependency risk — what upstream dependencies affect this vendor's pricing, availability, and capability? Three: switching cost — what would it cost to migrate from this vendor in two, five, and ten years? Four: consolidation exposure — what is the vendor's acquisition probability and what would be the buyer impact? Five: governance standards — what are their bias testing, hallucination, and security standards? Six: data rights — what are your data portability rights on termination?",
            "Each component produces specific negotiation terms and evaluation criteria. Vendors who score well across all six are appropriate for strategic long-term commitment. Vendors who score poorly on multiple dimensions should be treated as tactical vendors with short-term commitments.",
          ),
          s(" Use this six-component framework in every AI vendor selection above your materiality threshold. The framework outputs strategic versus tactical vendor classification — which drives contract term length and commitment level."),
        ],
        [
          s("Tactical vendors require different contract structures than strategic vendors. "),
          x(
            "Tactical vendors — high consolidation risk, weak governance, or uncertain switching cost — should receive: short contract terms (12 months maximum), no customisation investment, limited integration depth, strong data portability clauses, and explicit exit planning from day one. Strategic vendors — stable financials, strong governance, manageable switching cost — can receive longer commitments, deeper integration, and co-development investment.",
            "Many organisations treat all vendors as strategic when they should be treating them as tactical — committing to multi-year contracts, deep integration, and customisation investment in vendors who do not merit that trust level.",
          ),
          s(" Classify each AI vendor as strategic or tactical based on the six-component framework before committing contract term and integration depth. Misclassification in either direction is expensive."),
        ],
        [
          s("The AI vendor landscape in 2026 requires portfolio thinking, not single-vendor thinking. "),
          x(
            "The organisation most resilient to AI vendor market disruption is the one with: no single vendor representing more than 30% of AI-related operations, clear migration paths for each top-five vendor, contractual portability rights across all material AI relationships, and an annual vendor landscape review that reassesses the six-component framework.",
            "Portfolio thinking does not require more vendors — it requires deliberate distribution of AI capability across the landscape in a way that no single vendor failure or acquisition is catastrophic. The CFO and CTO co-own this portfolio view; it cannot live exclusively in either function.",
          ),
          s(" Implement an annual AI vendor portfolio review as a CFO and CTO co-owned governance process. The review reassesses concentration, switching cost, and strategic classification — and produces a vendor governance action plan for the following year."),
        ],
      ],
      examples: [
        {
          title: "A FTSE 100's AI vendor governance framework",
          body: "A FTSE 100 company implemented an annual AI vendor governance review using the six-component framework. First review findings: two vendors reclassified from strategic to tactical (high consolidation risk discovered), one vendor required data portability clause negotiation (right not in original contract), and one vendor triggered a concentration risk flag (represented 42% of AI-dependent operations). Actions completed within 90 days. The framework cost three days of CFO and CTO analyst time annually — and prevented an estimated £800K in renegotiation and remediation costs.",
        },
        {
          title: "A bank's vendor concentration governance",
          body: "A retail bank's board established a policy: no single AI vendor may represent more than 25% of AI-dependent operational processes, measured annually. The policy identified OpenAI API dependency (through three different application vendors who each used OpenAI) as an undisclosed concentration: 38% of AI-dependent processes routed through the same foundation model. The bank implemented model diversification across AWS Bedrock over 18 months — distributing dependency to Anthropic and Llama alongside OpenAI. The concentration policy made the hidden dependency visible.",
        },
        {
          title: "Portfolio vendor thinking in practice",
          body: "A professional services firm maintained four AI vendor relationships across the value chain: Azure OpenAI (frontier capability, enterprise compliance wrapper), Mistral self-hosted (data sovereignty tasks, high volume), a vertical AI application vendor for legal document review (specialist tool, tactical classification), and an ML platform vendor for internal model management (strategic, deeply integrated). Annual review: the legal AI vendor was reclassified from tactical to strategic following 18 months of strong retention and governance improvement — triggering a deeper integration commitment and a longer contract term. Portfolio thinking made the reclassification a deliberate decision rather than an accidental commitment.",
        },
      ],
    }),
  ],
  quiz: [
    {
      q: "Your primary AI application vendor is acquired by a company that has a competing product in the same category. What is the correct governance response?",
      options: [
        "Wait and see — the acquirer may improve the product.",
        "Invoke contract change-of-control provisions, request a roadmap briefing within 30 days, assess product continuation risk based on portfolio overlap, and initiate alternative vendor evaluation within 60 days if continuation is uncertain.",
        "Immediately terminate the contract.",
        "Escalate to IT — vendor management is a technical responsibility.",
      ],
      correct: 1,
      correctFeedback:
        "Right. Acquisition by a company with a competing product is the highest consolidation risk scenario — the acquirer has incentive to deprecate your vendor's product. The response sequence is structured, time-bound, and business-led. Re-read section 8.6.",
      wrongFeedback:
        "An acquisition by a portfolio competitor is a consolidation risk that triggers a structured governance response — not a wait-and-see posture. Re-read section 8.6.",
    },
    {
      kind: "categorize",
      q: "Sort each AI vendor characteristic into the correct assessment category.",
      categories: ["Foundation model dependency risk", "Financial stability risk", "Governance quality indicator"],
      items: [
        { text: "The vendor's product is entirely built on OpenAI's GPT-4 API with no alternative model option.", category: 0 },
        { text: "The vendor has 8 months runway at current burn rate with no announced funding round.", category: 1 },
        { text: "The vendor holds SOC 2 Type II certification, publishes bias testing documentation, and has a named CISO.", category: 2 },
        { text: "The vendor's contract does not include model deprecation notice or migration support provisions.", category: 0 },
        { text: "The vendor's top customer represents 35% of annual revenue.", category: 1 },
      ],
      correctFeedback:
        "Right. Foundation model dependency: API-only model access with no alternatives, no deprecation provisions. Financial stability: runway, customer concentration. Governance quality: certifications, bias testing, security leadership. Re-read sections 8.2, 8.4, and 8.7.",
      wrongFeedback:
        "Three risk categories with distinct indicators. Foundation model dependency is about upstream exposure. Financial stability is about vendor viability. Governance quality is about operational standards. Re-read sections 8.2, 8.4, and 8.7.",
    },
    {
      q: "At what point does self-hosting an open-weight AI model typically become economically compelling versus using a closed API?",
      options: [
        "Always — self-hosted is always cheaper.",
        "When the break-even analysis shows the infrastructure investment cost is recovered within an acceptable payback period through inference cost savings — typically when monthly API spend exceeds £30K–£100K depending on model size and engineering overhead.",
        "Never — closed APIs always offer better security.",
        "When the vendor raises API prices by more than 50%.",
      ],
      correct: 1,
      correctFeedback:
        "Right. The self-hosted break-even depends on monthly API spend, infrastructure cost, and engineering overhead. At many enterprise volumes, the economics favour self-hosting — but the calculation must be done explicitly, not assumed. Re-read sections 8.5 and 3.4.",
      wrongFeedback:
        "Self-hosting economics depend on volume, infrastructure cost, and engineering overhead. The break-even calculation is the decision tool — not a general assumption in either direction. Re-read sections 8.5 and 3.4.",
    },
    {
      kind: "order",
      q: "Order the six components of an AI vendor navigation framework from first to last.",
      prompt: "Drag to arrange from first component (top) to last (bottom).",
      items: [
        "Value chain mapping — where does this vendor sit and what dependencies does that create?",
        "Dependency risk — what upstream dependencies affect pricing, availability, and capability?",
        "Switching cost — what would migration cost in two, five, and ten years?",
        "Consolidation exposure — acquisition probability and buyer impact.",
      ],
      correctFeedback:
        "Right. Value chain position first — it determines the other assessments. Then dependency risk, switching cost, consolidation exposure, governance standards, and data rights. The sequence builds understanding from structural to specific. Re-read section 8.8.",
      wrongFeedback:
        "Value chain position first — it determines the structural dependencies. All other assessments follow from understanding where the vendor sits in the chain. Re-read section 8.8.",
    },
    {
      q: "A single foundation model provider (via three different application vendors) represents 38% of your AI-dependent operational processes. What governance action is required?",
      options: [
        "Accept — the foundation model provider is large and stable.",
        "Flag as a concentration risk breach. Implement model diversification — route appropriate use cases to alternative foundation models — until no single foundation model represents more than the board-approved concentration limit.",
        "Renegotiate directly with the foundation model provider.",
        "Reduce the number of AI application vendors to simplify management.",
      ],
      correct: 1,
      correctFeedback:
        "Right. Undisclosed foundation model concentration — where multiple application vendors use the same underlying model — creates a hidden single-point-of-failure risk. Diversification is the governance response. Re-read sections 8.1 and 8.8.",
      wrongFeedback:
        "Foundation model concentration is a hidden risk when multiple application vendors share the same underlying model. Diversification protects against foundation model pricing changes, deprecation, or service disruption. Re-read sections 8.1 and 8.8.",
    },
    {
      kind: "order",
      q: "Order the governance steps in an annual AI vendor portfolio review.",
      prompt: "Drag to arrange from first step (top) to last (bottom).",
      items: [
        "Apply the six-component framework to each material AI vendor — update scores from the previous year.",
        "Reassess strategic versus tactical classification based on updated scores.",
        "Identify concentration risks — vendor, foundation model, and cloud platform.",
        "Produce a vendor governance action plan for the following year.",
      ],
      correctFeedback:
        "Right. Score first, then classify, then identify concentrations, then action plan. The sequence ensures action plans are based on current evidence rather than prior year classifications. Re-read section 8.8.",
      wrongFeedback:
        "Score each vendor first using current evidence — prior year classifications may be outdated. Then reclassify, then aggregate for concentration risk, then action plan. Re-read section 8.8.",
    },
  ],
});
