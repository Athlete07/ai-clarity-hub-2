import { buildChapter, buildSection, s, x, BL_CALLOUT, sectionWithDiagram } from "../concepts-bl-helpers";

export const chapter03BlTrainingVsInferenceCost = buildChapter({
  slug: "bl-training-vs-inference-cost",
  number: 3,
  shortTitle: "Training vs Inference Cost",
  title: "Training vs Inference Cost — The CFO's Guide to AI Economics",
  readingMinutes: 25,
  summary:
    "AI has two distinct cost phases: training (building the model) and inference (using it). Most enterprise AI budget is consumed at inference, not training — and the cost dynamics are non-linear in ways that surprise finance teams who plan from pilot data. This chapter gives business leaders the economic vocabulary to plan, negotiate, and govern AI costs.",
  keyTakeaway:
    "Inference cost is your AI variable cost of goods sold — it scales with usage in ways pilot budgets routinely underestimate. Training cost is a capital expenditure that most organisations should not incur directly. TCO analysis, tier selection, and latency-cost trade-offs are the CFO levers that make AI economics work.",
  pmCallout: BL_CALLOUT,
  sections: [
    sectionWithDiagram({
      number: "3.1",
      title: "Training Cost as Capital Expenditure",
      subtitle: "Why training is a one-time cost you probably should not bear — and what it means when vendors do",
      take: "Training a large AI model is a capital expenditure measured in millions of dollars for frontier models. Most organisations should never incur this cost directly — they access pre-trained models via API or purchase tools built on them. Understanding training cost explains vendor pricing, market structure, and why switching costs are high.",
      why: "When a vendor claims 'proprietary AI', business leaders need to assess whether the training investment is real and defensible — or whether it is fine-tuning on a commodity model priced at custom-model rates.",
      paragraphs: [
        [
          s("Training a frontier language model requires significant compute infrastructure over weeks or months. "),
          x(
            "GPT-4 class training is estimated to have cost OpenAI over $100M in compute. Gemini Ultra, Google's frontier model, required similarly large investments. These are capital expenditures that appear in the balance sheet of a handful of technology companies.",
            "For most enterprise AI buyers, training cost is not in your budget — nor should it be. The viable options are API access to pre-trained models, fine-tuning on pre-trained foundations, or purchasing tools built on those foundations. Training from scratch is the exception, not the rule.",
          ),
          s(" If a mid-sized vendor claims to have trained a proprietary foundation model, ask for evidence: compute spend, model evaluation documentation, and benchmark performance. Unsubstantiated claims of proprietary training at frontier quality are a diligence red flag."),
        ],
        [
          s("For custom ML — non-foundation models built for specific tasks — training cost is more accessible but still material. "),
          x(
            "A custom demand-forecasting model, fraud classifier, or document extractor may cost £20K–£200K to train depending on data volume, model complexity, and compute time. This is a project cost that belongs in the initial capital budget with ongoing retraining costs in the operating budget.",
            "Many organisations mis-categorise initial ML training as a one-time cost and are surprised by the retraining budget required to maintain performance over time. The initial training is the start of the cost curve, not the end.",
          ),
          s(" Budget for retraining from the initial AI business case. A model trained once and never retrained is an appreciating liability, not a depreciating asset."),
        ],
        [
          s("Training cost drives market structure and vendor leverage — which affects your negotiating position. "),
          x(
            "Because frontier model training is accessible to only a few companies, those companies have structural leverage over every AI tool built on their foundations. If OpenAI changes GPT pricing by 30%, every enterprise application built on GPT faces a margin impact they cannot easily absorb.",
            "CFOs should map their organisation's AI spend to its foundational dependencies and model a 30–50% foundation model price increase scenario as part of AI budget planning.",
          ),
          s(" Foundation model provider concentration is a supply chain risk that belongs in your technology risk register alongside cloud provider concentration."),
        ],
      ],
      examples: [
        {
          title: "Meta's Llama — open source changes the training cost equation",
          body: "Meta's decision to release Llama model weights publicly shifted the training cost equation for the industry. Organisations with technical capability can now fine-tune frontier-quality models without paying per-token API fees. The CFO implication: self-hosted open models have high capital cost (engineering, GPU infrastructure) but near-zero marginal inference cost. The break-even analysis versus API pricing depends on volume and technical capability.",
        },
        {
          title: "A manufacturer's ML training budget error",
          body: "A manufacturer budgeted £180K for a predictive maintenance ML model: £50K data preparation, £80K model development, £50K infrastructure. After 18 months, retraining costs had added £120K — because production equipment changes required model updates every quarter. The total 24-month cost exceeded £300K against a £180K original budget. Operations and finance leaders: initial training is 40–60% of the 3-year cost for most custom ML models. Budget accordingly.",
        },
        {
          title: "Anthropic's enterprise pricing — training cost in the price",
          body: "Anthropic's Claude enterprise pricing reflects the enormous training investment in Claude models. Enterprise customers paying significant annual contracts are partially financing Anthropic's training infrastructure for future model generations. Leaders should understand that vendor AI pricing is not purely based on inference cost — it includes amortised training investment and R&D. This is relevant to make-vs-buy decisions for high-volume AI use cases.",
        },
      ],
    }, {
      kind: "diagram",
      id: "founder-training-inference-split",
      type: "comparison",
      title: "Training CapEx vs Inference OpEx",
      caption:
        "Most organisations should rent pre-trained models. Inference is the variable COGS line that scales with every API call.",
    }),
    buildSection({
      number: "3.2",
      title: "Inference Cost — Your AI Variable Cost of Goods Sold",
      subtitle: "The per-query cost that scales with usage and determines AI product economics",
      take: "Inference is using a trained model to produce outputs. Every API call, every document processed, every query answered incurs inference cost. At scale, inference is your AI variable cost of goods sold — and it behaves non-linearly in ways that pilot budgets routinely misrepresent.",
      why: "Inference cost is the number most frequently missing from AI business cases and the number most frequently responsible for AI project economics failing in production. Finance leaders must model it correctly before go-live.",
      paragraphs: [
        [
          s("Inference is computationally expensive because AI models require significant memory and computation to produce each output. "),
          x(
            "A large language model processes every token (roughly, every word) in both the input and output through billions of mathematical operations. At the token prices charged by API providers, the cost per document, per conversation turn, or per query adds up quickly at enterprise volume.",
            "Current frontier model pricing (mid-2026) sits at approximately $15–$60 per million output tokens for leading models. A comprehensive document analysis consuming 4,000 input and 1,000 output tokens costs $0.10–$0.30 per document at frontier rates.",
          ),
          s(" Build a token consumption model before signing any usage-based AI contract: estimate average input length, average output length, and projected monthly volume. The product of these three numbers is your monthly AI inference budget."),
        ],
        [
          s("Inference cost is a non-linear function of context length — with significant implications for document-heavy use cases. "),
          x(
            "Models that process long documents — contracts, financial reports, clinical records — consume context proportional to document length. A 100-page contract is not 10x more expensive to process than a 10-page contract — it may be 15–20x more expensive due to the quadratic attention computation in transformer models.",
            "Operations leaders evaluating AI for document-intensive workflows — legal review, financial analysis, compliance monitoring — must include long-document context cost in their unit economics model.",
          ),
          s(" Request context length pricing tiers from any AI vendor serving document-heavy workflows. Standard pricing models may not reflect the actual cost of your use case at your document volume."),
        ],
        [
          s("Inference cost varies significantly by provider, model tier, and deployment architecture. "),
          x(
            "API inference from closed providers (OpenAI, Anthropic, Google) is the highest per-token cost but lowest operational overhead. Self-hosted open models (Llama, Mistral) have near-zero marginal inference cost but require significant GPU infrastructure investment. Cached inference — reusing outputs for repeated queries — can reduce effective cost by 50–70% for stable use cases.",
            "The optimal inference architecture depends on your volume, technical capability, latency requirements, and data sovereignty requirements. There is no universally cheapest option — only the cheapest for your specific parameters.",
          ),
          s(" Model inference architecture economics across three scenarios for any major AI deployment: API-only, hybrid API/self-hosted, and fully self-hosted. At what volume does the break-even point occur?"),
        ],
      ],
      examples: [
        {
          title: "A legal department's inference cost surprise",
          body: "A large law firm piloted a contract analysis AI at 500 documents per month in a limited practice area. Inference cost: £2,000/month. Business case approved for firm-wide rollout at 15,000 documents per month. Expected inference cost: £60,000/month — a line item 30x the pilot that had not appeared in any business case. The error: pilot volume was a nonlinear underestimate of firm-wide volume. Finance teams must model at full deployment volume, not pilot volume.",
        },
        {
          title: "Customer service AI — token optimisation as cost lever",
          body: "A global insurer deployed a customer service LLM at £45,000/month inference cost. The engineering team identified that 60% of tokens were consumed by repetitive system prompt content sent with every query. Compressing the system prompt and implementing prefix caching reduced monthly inference cost to £18,000 — a 60% reduction with no performance impact. Token optimisation is a material cost lever that business sponsors should fund as a routine engineering activity.",
        },
        {
          title: "Retail recommendation engine — cost at scale",
          body: "A major European retailer's AI recommendation engine processed 8 million product recommendation requests per day across its e-commerce platform. At API pricing, monthly inference cost exceeded their acceptable COGS threshold for the recommendation feature. Moving to a self-hosted open model at equivalent quality required £600K infrastructure investment but reduced monthly inference from £80K to £8K. The break-even was 8 months — well within the business case horizon.",
        },
      ],
    }),
    sectionWithDiagram({
      number: "3.3",
      title: "Scale Economics — How AI Unit Cost Behaves at Volume",
      subtitle: "Why AI economics improve dramatically with scale — and why that changes your investment case",
      take: "AI has highly favourable scale economics: the marginal cost of serving additional users decreases as volume increases, and infrastructure investment amortises across more queries. This is fundamentally different from professional services or bespoke software, and it changes how business leaders should frame AI investment cases.",
      why: "Leaders who understand AI scale economics make better investment decisions: they can justify larger upfront infrastructure spend, negotiate volume-based pricing, and model the competitive advantage of scale more accurately.",
      paragraphs: [
        [
          s("AI inference has near-zero marginal cost per additional unit once infrastructure is in place. "),
          x(
            "Once a model is deployed on GPU infrastructure, serving the ten-thousandth query costs essentially the same as serving the tenth — electricity and bandwidth are the only truly marginal costs. This is categorically different from professional services, where serving ten times as many clients requires ten times as many people.",
            "For business leaders, this means the unit economics of AI improve monotonically with volume. The business case at 1,000 users is different from the business case at 100,000 users — and the latter is dramatically more favourable.",
          ),
          s(" Model AI investment economics at multiple volume scenarios. Underestimating future volume in the business case systematically understates the ROI of infrastructure investment."),
        ],
        [
          s("Volume-based pricing negotiation is standard practice for enterprise AI contracts — but requires volume commitment. "),
          x(
            "API providers offer significant per-token discounts at volume: committing to 10 billion tokens per month may achieve 30–50% discounts versus pay-as-you-go rates. Cloud providers offer committed use discounts for GPU reservation. These discounts fundamentally change the unit economics.",
            "The trade-off is volume commitment risk: organisations that commit to volume tiers and underutilise them pay for unused capacity. Finance teams should model committed versus pay-as-you-go across expected volume range with appropriate hedging.",
          ),
          s(" Negotiate volume-based pricing from AI providers but structure commitments with ramp-up provisions and volume floors that reflect your realistic adoption timeline."),
        ],
        [
          s("Scale economics create winner-take-most dynamics in AI-native markets. "),
          x(
            "AI-native companies whose products improve with usage can fund better models from the economics of scale: more revenue enables more training investment, which improves the model, which attracts more users. This flywheel compounds in ways linear-cost businesses cannot replicate.",
            "For leaders assessing AI-native competitors or potential acquisitions, scale economics deserve explicit modelling. A competitor with 10x your inference volume may have infrastructure economics that make their product difficult to match without similar scale.",
          ),
          s(" Include competitive scale economics in your AI investment thesis: at what usage volume does your AI capability become structurally defensible versus a better-funded competitor?"),
        ],
      ],
      examples: [
        {
          title: "AWS Bedrock — enterprise volume discounts in practice",
          body: "AWS Bedrock's enterprise pricing for Claude and other models includes volume-tier discounts that reduce per-token cost by 25–40% at committed monthly spend thresholds. A large financial services firm renegotiated from pay-as-you-go to a committed tier after 6 months of production usage data — saving £220K annually at the same volume. The saving was available on day one but required volume data to negotiate from a position of information.",
        },
        {
          title: "GitHub Copilot — scale economics as market position",
          body: "GitHub Copilot charges $19/month per developer at any scale. At Microsoft's volume, the underlying inference cost is a fraction of that price — the margin structure is only achievable because GitHub distributes across millions of developers. Smaller AI coding assistants cannot match Copilot's price at equivalent quality because they lack the scale to amortise foundation model costs. Scale is a moat in AI-native markets.",
        },
        {
          title: "A bank's GPU commitment strategy",
          body: "A tier-2 UK bank committed to a three-year AWS GPU reserved capacity agreement to support its self-hosted AI model deployment. The upfront commitment was £4M versus £11M at on-demand rates over the same period — a £7M saving conditional on utilisation targets. Finance structured the commitment with a 60% reserved, 40% on-demand split, providing cost efficiency without full commitment risk. AI infrastructure is a capital allocation decision that finance should lead, not IT should discover.",
        },
      ],
    }, {
      kind: "diagram",
      id: "founder-unit-economics-trap",
      type: "flow",
      title: "The Unit Economics Trap",
      caption:
        "Pilot budgets routinely underestimate inference at production volume. Model 10× usage before signing usage-based contracts.",
    }),
    buildSection({
      number: "3.4",
      title: "API vs Self-Hosted — The Build, Buy, and Host Decision",
      subtitle: "How to choose between renting AI capability and owning AI infrastructure",
      take: "API access is cheapest at low volume, lowest technical risk, and highest per-unit cost. Self-hosted open models are cheapest at high volume, require engineering investment, and offer full data sovereignty. Most enterprise AI deployments will maintain a portfolio of both. The decision framework is economics, sovereignty, and latency — not vendor preference.",
      why: "The API-vs-self-hosted decision is a capital allocation and risk decision that belongs with finance and legal leadership — not exclusively with IT. Data residency requirements, volume economics, and geopolitical risk all bear on the decision.",
      paragraphs: [
        [
          s("API access to AI models is the fastest path to deployment and the most flexible for variable workloads. "),
          x(
            "With API access, you pay per token, require no GPU infrastructure, and benefit from the provider's model improvements and security management. The trade-off: per-token cost is highest at all volume levels, data leaves your environment with each query, and you are subject to the provider's uptime, terms, and pricing decisions.",
            "For most organisations, API access is correct for: new AI experiments, variable-volume use cases, AI features embedded in SaaS tools, and contexts where speed to market outweighs cost optimisation at scale.",
          ),
          s(" API-first is a rational starting point — but include a self-hosting evaluation trigger in your AI governance framework: at what monthly spend does the self-hosted break-even case become compelling?"),
        ],
        [
          s("Self-hosted open models offer cost efficiency at scale and data sovereignty — at the cost of engineering complexity. "),
          x(
            "Running Llama, Mistral, or Falcon on your own infrastructure means near-zero marginal inference cost, full control over data, and independence from external pricing. The costs: GPU hardware or cloud GPU reservation, ML engineering to deploy and optimise, and operational overhead to manage availability and performance.",
            "Self-hosted becomes economically compelling when monthly API spend exceeds the break-even on infrastructure investment — typically somewhere between £30K and £100K monthly depending on model size and GPU efficiency.",
          ),
          s(" Calculate your API-to-self-hosted break-even point annually. At high volume, self-hosted may be an order of magnitude cheaper and should be in the financial plan."),
        ],
        [
          s("Data sovereignty considerations often override pure economics in regulated industries. "),
          x(
            "Financial services, healthcare, and government organisations may face data residency requirements that prohibit sending patient, customer, or classified data to external API providers — regardless of economics. Self-hosted is the only compliant option in these contexts.",
            "The EU AI Act, UK GDPR, US HIPAA, and equivalent regulations impose data processing location constraints that legal and compliance teams must evaluate before approving any API-based AI deployment. This is a legal gate, not a technical preference.",
          ),
          s(" Data sovereignty requirements should be the first filter in any AI deployment architecture decision — before economics, capability, or vendor preference."),
        ],
      ],
      examples: [
        {
          title: "NHS — data sovereignty forcing self-hosted",
          body: "NHS Digital's AI deployments are constrained by data processing agreements that require patient data to remain within UK-based infrastructure. This eliminates API access to US-based providers for any patient-touching AI use case. NHS trusts deploying clinical AI must use either self-hosted models on UK infrastructure or UK-sovereign cloud deployments. The regulatory constraint, not the economics, determines the architecture.",
        },
        {
          title: "A professional services firm's hybrid architecture",
          body: "A Big Four professional services firm runs a hybrid AI architecture: GPT-4 via Azure OpenAI (EU data residency) for client-facing work where contractual data sovereignty is met, and a self-hosted Llama deployment for internal knowledge management where volume economics favoured self-hosting. The hybrid architecture required an 18-month engineering programme but reduced AI infrastructure spend by 40% versus all-API.",
        },
        {
          title: "FinTech — self-hosted break-even achieved",
          body: "A UK lending fintech reached £65K/month in OpenAI API spend across its document processing and customer communication workflows. Engineering assessed self-hosted Mistral on AWS reserved GPU instances. Break-even: 14 months. Three-year NPV of self-hosted versus continued API: £1.1M savings. The business case was approved by finance, not engineering — because the decision was fundamentally a capital allocation question.",
        },
      ],
    }),
    buildSection({
      number: "3.5",
      title: "Latency as a Cost — User Experience Has a Price",
      subtitle: "Why AI response time affects revenue, and how leaders trade cost for speed",
      take: "Latency — the time an AI system takes to respond — is not just a user experience issue. It is a revenue variable: high-latency AI tools have lower adoption, worse engagement metrics, and higher abandonment rates. Reducing latency requires either faster (more expensive) model configurations or architectural investment. Leaders must decide what user experience is worth.",
      why: "AI vendors often present latency and cost as independent variables. They are not — faster responses require either premium model tiers, caching infrastructure, or hardware investment. Understanding the trade-off allows finance and product leaders to price user experience decisions correctly.",
      paragraphs: [
        [
          s("Latency in AI systems is measured in seconds or sub-seconds and varies dramatically by model tier and infrastructure. "),
          x(
            "A small, cached model may respond in 200ms — imperceptible latency. A frontier model processing a long document may take 20–40 seconds — noticeable and frustrating in an interactive product. The latency gap between these configurations can be an order of magnitude in cost.",
            "For consumer-facing AI features, 2 seconds is generally the UX threshold below which users perceive the tool as responsive. Above 5 seconds, abandonment rates increase significantly. Above 10 seconds, AI tools begin to feel unreliable regardless of output quality.",
          ),
          s(" Define your latency requirement before selecting an AI model tier or architecture. Latency requirements are a product decision that constrains cost optimisation."),
        ],
        [
          s("Streaming output — the ChatGPT effect — changes the perceived latency experience dramatically. "),
          x(
            "Rather than waiting for a complete response before displaying anything, streaming models display text as it is generated. The time to first token (TTFT) may be 1–3 seconds, but the user sees immediate progress. This makes the same model feel significantly faster for interactive use cases.",
            "Streaming adds engineering complexity and cost but substantially improves user experience for text-generation use cases. Operations leaders evaluating AI writing or drafting tools should require streaming capability and measure TTFT as the primary latency metric — not total response time.",
          ),
          s(" Specify streaming capability and time-to-first-token requirements in AI tool evaluations for any interactive user-facing AI feature."),
        ],
        [
          s("Caching and pre-computation dramatically reduce latency and cost for predictable query patterns. "),
          x(
            "If a significant fraction of AI queries are repetitive — same question, same document type, same use case — caching the model's outputs reduces both latency (serving from cache is near-instantaneous) and cost (cached results do not incur inference compute charges).",
            "Customer service AI, FAQ assistants, and document classification tools often have high query repetition rates. Implementing semantic caching — storing responses for queries that are similar in meaning, not just identical — can reduce inference costs by 40–60% in these contexts.",
          ),
          s(" Ask any AI vendor deploying in high-volume use cases: what caching and pre-computation architecture is in place, and what is the estimated cache hit rate for our use case?"),
        ],
      ],
      examples: [
        {
          title: "Google search UX research — latency and revenue",
          body: "Google's research found that a 400ms increase in search latency reduced daily searches by 0.44% — a significant revenue impact at Google's scale. AI product teams should apply the same discipline: measure the revenue or engagement impact of latency changes before accepting slower model configurations as cost trade-offs. Latency is not an abstract technical metric — it has a financial consequence.",
        },
        {
          title: "Legal AI — batch vs interactive latency trade-off",
          body: "A law firm's AI contract review tool was implemented in two modes: interactive (attorney reviews as the AI analyses) and batch (overnight bulk processing). Interactive mode required a fast, expensive configuration. Batch mode used a slower, cheaper configuration at 40% lower inference cost. By routing clause-level review to interactive and full-contract pre-analysis to batch, the firm reduced monthly AI cost by 35% with no impact on attorney-reported satisfaction.",
        },
        {
          title: "Insurance claim triage — pre-computation strategy",
          body: "An insurer deployed an AI claim triage tool. Analysis showed 70% of inbound claims fell into 12 document-type categories with predictable processing patterns. Pre-computing triage outputs for new claims at off-peak hours reduced average interactive response from 8 seconds to under 1 second for the common case — with 65% inference cost reduction. Pre-computation was the engineering solution; the business requirement was the latency definition.",
        },
      ],
    }),
    buildSection({
      number: "3.6",
      title: "Total Cost of Ownership — What AI Actually Costs",
      subtitle: "The full cost picture that AI business cases routinely omit",
      take: "The total cost of ownership for AI tools includes training or licensing, inference, integration, quality assurance, human oversight, governance, and retraining over time. Business cases built only on licensing fees and inference understate actual cost by 50–200%. Leaders who see the full picture make better investment decisions and face fewer budget surprises.",
      why: "AI project failures are frequently attributed to technology performance when the root cause is cost structure: the project was built on an incomplete financial model that collapsed when human oversight, quality assurance, and retraining costs materialised.",
      paragraphs: [
        [
          s("AI TCO has six components that must all appear in the business case. "),
          x(
            "Component one: model cost (licensing, API, or infrastructure). Two: data cost (preparation, labelling, storage). Three: integration cost (engineering to connect AI to existing systems). Four: quality assurance (evaluation, testing, red-teaming). Five: human oversight (the humans required to review AI outputs in consequential contexts). Six: governance and compliance (audit trails, regulatory documentation, legal review).",
            "Of these six, most AI business cases include only component one. The omission of human oversight cost is particularly common and particularly expensive — and it is often non-negotiable in regulated industries.",
          ),
          s(" Require all six TCO components to be present in any AI business case before approval. A case missing any component is incomplete and should be returned for revision."),
        ],
        [
          s("Human oversight cost is frequently the largest omission in AI business cases. "),
          x(
            "Most AI deployments in regulated or consequential contexts require human review of some fraction of outputs. An AI document classifier may require expert review of the 15% of documents where model confidence is below threshold. A customer-facing AI may require human escalation for 10% of interactions. These are not optional — they are governance requirements.",
            "The cost of human oversight can equal or exceed the cost of the AI tool itself. A customer service AI that replaces 20 agents but requires 8 reviewers has a very different business case than one that requires 2 reviewers.",
          ),
          s(" Model human-in-loop cost at multiple oversight rate scenarios: 5%, 15%, and 30% human review as the base, expected, and stressed cases."),
        ],
        [
          s("Ongoing retraining and maintenance costs are systematically underestimated in year-one business cases. "),
          x(
            "Custom ML models require regular retraining as data distributions shift. Fine-tuned models require retraining when the base model updates. Integration maintenance costs accumulate as underlying systems change. Quality assurance is not a one-time activity — it is an ongoing operational function.",
            "Industry evidence suggests that ongoing maintenance, retraining, and governance costs for custom ML deployments represent 25–40% of initial build cost per year. Three-year TCO is typically 2–3x the year-one cost for non-trivial ML deployments.",
          ),
          s(" Require 3-year TCO projections with explicit retraining, maintenance, and governance cost lines for any AI investment above your materiality threshold."),
        ],
      ],
      examples: [
        {
          title: "Manufacturer's TCO gap",
          body: "A global manufacturer approved an AI-based production scheduling system with a £2.1M business case covering licensing, integration, and first-year inference. Post-deployment TCO analysis 18 months later identified £1.7M in uncounted costs: human oversight in the control centre (£600K), quality assurance engineering (£500K), data pipeline maintenance (£350K), and governance documentation for ISO compliance (£250K). TCO was 80% higher than the business case. The project remained positive ROI — but the gap required emergency budget revision.",
        },
        {
          title: "AI customer service — the human cost model",
          body: "A utility company modelled an AI customer service chatbot replacing 40 human agents. The vendor's business case projected £1.8M annual saving. Independent TCO analysis added: 8 human reviewers for escalations (£320K), quality assurance team (£160K), integration maintenance (£120K), and annual retraining (£80K). Net saving: £1.12M — still compelling, but 38% below the vendor's projection. The independent TCO was the governance gate that produced an accurate business case.",
        },
        {
          title: "Financial services — governance cost materialisation",
          body: "A retail bank's credit AI deployment faced a governance cost materialisation it had not modelled: the EU AI Act high-risk classification for credit scoring triggered a certification process that cost £800K in legal, technical audit, and documentation costs over 18 months. AI Act compliance costs for high-risk financial AI were not industry-established at time of business case — but the regulatory landscape was foreseeable. Legal review before business case approval would have captured this.",
        },
      ],
    }),
    buildSection({
      number: "3.7",
      title: "Cost Levers — What Business Leaders Can Pull",
      subtitle: "The practical actions available to finance and operations leaders to manage AI spend",
      take: "Business leaders have seven practical levers to manage AI cost: model tier selection, prompt optimisation, caching, batch versus real-time processing, volume commitments, architecture migration, and output quality trade-offs. These are not technical decisions — they are economic decisions that require business owner involvement.",
      why: "AI spend without active management will grow faster than any other technology budget line. The levers exist; using them requires business leaders to understand what they are buying and to demand cost accountability from their AI delivery teams.",
      paragraphs: [
        [
          s("The most powerful cost lever is model tier selection — the choice of which model to use for which task. "),
          x(
            "Deploying a frontier model for all queries is like staffing every customer interaction with a specialist consultant. Routing simple, well-defined queries to smaller models and reserving frontier capability for complex cases reduces average cost per query by 50–80% with minimal quality loss on the simple majority.",
            "The business leader's role is to define quality requirements per task type — not to select the technical model. Operations leaders who define minimum acceptable quality for each AI task type enable engineers to select the cheapest model that meets the specification.",
          ),
          s(" Maintain a task-quality matrix: for each AI use case, define the minimum acceptable quality threshold. Engineering selects the cheapest model above that threshold. Review quarterly."),
        ],
        [
          s("Prompt design and context management are material cost levers within the same model tier. "),
          x(
            "Input tokens cost money. Sending unnecessary context — boilerplate instructions, redundant document content, irrelevant conversation history — increases cost without improving output quality. Well-designed prompts that are concise and targeted can reduce token consumption by 20–40% versus initial implementations.",
            "This is not a task to delegate and forget — it is an ongoing cost optimisation activity. As AI tools scale, prompt optimisation ROI increases proportionally.",
          ),
          s(" Assign ownership of prompt optimisation as a cost management function alongside software performance optimisation. At scale, the two have equivalent financial impact."),
        ],
        [
          s("Architectural decisions — caching, batching, and tiering — provide the largest cost reductions but require investment to implement. "),
          x(
            "Semantic caching stores and reuses outputs for similar queries, reducing inference cost by 30–70% in high-repetition use cases. Batch processing routes non-time-sensitive tasks to off-peak compute at lower cost. Output quality tiering routes queries to appropriate models based on complexity signals.",
            "Each architectural lever requires engineering investment: typically £50K–£200K implementation cost for a production-grade system. The business case for each should be evaluated against projected monthly inference savings — most achieve payback within 6–12 months at volume.",
          ),
          s(" Require AI architecture teams to present annual cost optimisation roadmaps covering caching, batching, and tier routing investments — with business case payback analysis."),
        ],
      ],
      examples: [
        {
          title: "A technology company's 60% AI cost reduction",
          body: "A SaaS company with £120K/month AI inference spend implemented three cost levers over 6 months: (1) model tiering — routing 70% of queries to a smaller model, saving 45%; (2) semantic caching for FAQ-type queries, saving an additional 20% on remaining volume; (3) prompt optimisation, reducing average token consumption by 15%. Combined effect: monthly inference spend reduced to £48K — a 60% reduction with no user-reported quality decline. The programme paid for itself in 6 weeks.",
        },
        {
          title: "Batch vs real-time routing — an operations example",
          body: "A global logistics company processed AI-generated route optimisation for 15,000 daily shipments. Moving 80% of non-urgent routes from real-time to batch processing (overnight, off-peak) reduced inference cost by 35% with no impact on service levels — because non-urgent route planning could tolerate a 4-hour lag. The lever was identified by the operations team asking: which AI tasks actually require real-time response? The answer was only 20% of volume.",
        },
        {
          title: "CFO-led quarterly AI cost review",
          body: "A financial services CFO implemented a quarterly AI cost review: each business unit must present AI spend versus approved budget, cost-per-unit-of-output versus baseline, and active optimisation initiatives in flight. The review surfaced a customer service AI that had experienced 3x volume growth without cost tier renegotiation — the unit was paying pay-as-you-go rates on volume that qualified for a 35% committed-tier discount. The CFO review recaptured £280K annually in avoidable overspend.",
        },
      ],
    }),
    buildSection({
      number: "3.8",
      title: "The BL CFO Conversation — Presenting AI Economics at Board Level",
      subtitle: "How to structure the financial narrative for AI investment that earns approval and maintains credibility",
      take: "AI investments require a financial narrative structured around three phases: initial capital (training or licensing and integration), variable operating cost (inference at scale), and ongoing governance (retraining, quality assurance, oversight). Boards that see all three phases in the original business case approve more confidently and require fewer emergency budget revisions.",
      why: "AI investment cases that secure board approval under-scoped routinely produce credibility problems when true costs emerge. The CFO who presents a complete cost picture — including the uncomfortable human oversight and governance lines — builds institutional trust in AI governance.",
      paragraphs: [
        [
          s("Structure the AI financial narrative in three time horizons for any board presentation. "),
          x(
            "Year one: capital and implementation. Model the licensing or infrastructure cost, integration engineering, data preparation, and initial governance setup. This is the CapEx-equivalent phase. Year two to three: variable operating cost growth. Model inference cost scaling with usage, ongoing retraining, and quality assurance. Year four and beyond: architecture maturation. Model the cost efficiency gains from architectural optimisation and volume-based pricing.",
            "A three-year phased model demonstrates financial discipline and sets accurate expectations. Single-year business cases create the budget crisis conditions that undermine AI credibility.",
          ),
          s(" Require three-year phased financial models for all AI investments above board materiality threshold. Single-year models should not pass the CFO review gate."),
        ],
        [
          s("The five questions a CFO should ask when reviewing any AI business case. "),
          x(
            "One: is inference cost modelled at full deployment volume — not pilot volume? Two: is human oversight cost modelled at an appropriate review rate? Three: is retraining cost included annually for custom ML models? Four: what is the foundation model provider concentration risk and its price sensitivity? Five: what is the break-even on cost optimisation architectural investment?",
            "These five questions are not technical — they are financial governance questions. A well-prepared AI business case answers all five. An incomplete case cannot.",
          ),
          s(" Publish these five questions as standing CFO requirements for AI business case approval. Teams that are aware of the requirements produce better cases."),
        ],
        [
          s("Boards that understand AI economics govern more effectively and fund more appropriately. "),
          x(
            "Board members who conflate AI cost with software licensing cost either underfund AI projects or misattribute budget overruns. A ten-minute AI cost education at board level — distinguishing training cost, inference cost, and governance cost — produces materially better board oversight.",
            "Non-executive directors with AI financial literacy ask better questions in AI strategy reviews: 'What is our inference cost at 10x current volume?' is the question that surfaces scale risk before it becomes a CFO problem.",
          ),
          s(" Add AI cost economics to the board education programme. A board that understands the cost structure approves better and governs more effectively."),
        ],
      ],
      examples: [
        {
          title: "A CFO's AI cost framework at FTSE 100 level",
          body: "A FTSE 100 CFO implemented a standardised AI cost framework across all business units: all AI spend categorised as CapEx (training, integration), Operating (inference, oversight), or Governance (compliance, audit). The categorisation enabled cross-unit comparison for the first time and identified that one business unit was spending 3x its peers on governance due to duplicated compliance processes. The framework paid for itself in the first year through governance consolidation savings.",
        },
        {
          title: "Board AI literacy investment",
          body: "A global bank invested in a half-day board AI economics workshop covering training cost, inference cost, governance obligations, and concentration risk. Post-workshop, board AI investment approvals improved in quality (more complete business cases required) and governance engagement (NEDs asking more substantive questions). The workshop cost: £40K. Estimated value of improved business case quality in the following year: two projects redirected to avoid architecture decisions that would have created £2M in avoided remediation costs.",
        },
        {
          title: "Scale scenario modelling — a worked example",
          body: "A retailer's AI board paper modelled product recommendation inference cost at three scales: 1 million sessions/month (current), 5 million (12-month target), and 20 million (3-year plan). At current volume, API pricing was optimal. At 5 million, hybrid API/self-hosted was breakeven. At 20 million, self-hosted was materially cheaper. The board approved a phased architecture migration plan with clear volume triggers for each migration step — preventing both premature infrastructure investment and overpriced API dependency at scale.",
        },
      ],
    }),
  ],
  quiz: [
    {
      q: "An AI business case presents licensing cost and first-year inference cost. What is the most important missing element the CFO should require?",
      options: [
        "The vendor's EBITDA margin.",
        "Human oversight cost, retraining cost, and governance/compliance cost — modelled over three years, not one.",
        "The technical architecture diagram.",
        "A reference from another company in the same industry.",
      ],
      correct: 1,
      correctFeedback:
        "Right. Licensing and inference are two of six TCO components. Human oversight, retraining, integration maintenance, and governance costs are routinely omitted and frequently represent 50–100% of the modelled cost. Re-read section 3.6.",
      wrongFeedback:
        "AI TCO has six components. Licensing and inference are only two. Human oversight and governance costs are the most commonly omitted — and the most frequently responsible for budget overruns. Re-read section 3.6.",
    },
    {
      kind: "order",
      q: "Order the three AI financial planning horizons from first to last in a board business case.",
      prompt: "Drag to arrange from first phase (top) to last (bottom).",
      items: [
        "Year one: capital and implementation — licensing, integration, data preparation, initial governance.",
        "Years two to three: variable operating cost growth — inference at scale, retraining, quality assurance.",
        "Year four and beyond: architecture maturation — cost efficiency from caching, tiering, and volume pricing.",
      ],
      correctFeedback:
        "Right. Capital first, then operating scale, then architecture maturation. This three-phase structure sets accurate expectations and prevents the budget crisis that single-year business cases routinely create. Re-read section 3.8.",
      wrongFeedback:
        "Phased financial models for AI must cover all three horizons. Single-year models are insufficient governance. Re-read section 3.8.",
    },
    {
      kind: "categorize",
      q: "Sort each cost item into the correct AI TCO category.",
      categories: ["CapEx / one-time", "Operating / recurring", "Governance / compliance"],
      items: [
        { text: "GPU infrastructure for self-hosted model deployment.", category: 0 },
        { text: "Monthly inference API charges at production volume.", category: 1 },
        { text: "EU AI Act certification audit for high-risk credit AI.", category: 2 },
        { text: "Engineering integration of AI tool with existing CRM.", category: 0 },
        { text: "Human review team for AI-flagged compliance cases.", category: 1 },
        { text: "Annual bias testing and fairness documentation for HR AI.", category: 2 },
      ],
      correctFeedback:
        "Right. CapEx: one-time infrastructure and integration. Operating: recurring inference and oversight costs. Governance: compliance, audit, and fairness obligations. All three categories must appear in AI business cases. Re-read section 3.6.",
      wrongFeedback:
        "AI costs span three categories. CapEx covers setup, Operating covers ongoing usage and oversight, Governance covers regulatory compliance. Missing any category produces an incomplete business case. Re-read section 3.6.",
    },
    {
      q: "Your AI inference spend is £80K/month via API. Engineering proposes a self-hosted architecture at £500K implementation cost with £10K/month ongoing infrastructure cost. What financial analysis is required?",
      options: [
        "Approve — self-hosted is always cheaper.",
        "Calculate break-even: (£500K ÷ (£80K – £10K)) = ~7 months. If the 3-year NPV of savings justifies the implementation risk and engineering overhead, approve with volume-trigger governance.",
        "Reject — implementation cost is too high.",
        "Request a pilot of self-hosted before committing to full migration.",
      ],
      correct: 1,
      correctFeedback:
        "Right. Break-even analysis at roughly 7 months, with 3-year NPV calculation accounting for engineering overhead and concentration risk reduction. Volume-trigger governance ensures migration timing aligns with economics. Re-read sections 3.3 and 3.4.",
      wrongFeedback:
        "Self-hosted economics require break-even analysis against current API spend, factoring in implementation cost and ongoing operational overhead. A 7-month break-even at this example is compelling — but the decision requires NPV analysis, not intuition. Re-read sections 3.3 and 3.4.",
    },
    {
      q: "Which of the following is the most powerful AI cost lever available to a business leader without requiring significant engineering investment?",
      options: [
        "Training a proprietary model from scratch.",
        "Defining minimum acceptable quality requirements per task type, enabling engineers to select the cheapest model that meets the specification rather than defaulting to the most capable.",
        "Negotiating a lower per-seat license fee.",
        "Switching from API to self-hosted immediately.",
      ],
      correct: 1,
      correctFeedback:
        "Right. Model tier selection is the highest-leverage cost reduction for AI spend. Defining quality thresholds per task type is the business owner's lever — it enables engineers to select the cheapest compliant option, often reducing cost by 50–80% on mixed-complexity workloads. Re-read section 3.7.",
      wrongFeedback:
        "Task quality specification is the business leader's cost lever — it enables optimal model tier selection without requiring engineering intervention. Re-read section 3.7.",
    },
    {
      kind: "order",
      q: "Order the five CFO questions for reviewing an AI business case from first to last.",
      prompt: "Drag to arrange from first question (top) to last (bottom).",
      items: [
        "Is inference cost modelled at full deployment volume — not pilot volume?",
        "Is human oversight cost modelled at an appropriate review rate?",
        "Is retraining cost included annually for custom ML models?",
        "What is the foundation model provider concentration risk and price sensitivity?",
      ],
      correctFeedback:
        "Right. Volume modelling first, then oversight cost, then retraining, then concentration risk. These four questions (of the full five) cover the most common AI business case omissions. Re-read section 3.8.",
      wrongFeedback:
        "Inference at full volume first — it is the most common and most material omission. Then oversight, retraining, and concentration risk. Re-read section 3.8.",
    },
  ],
});
