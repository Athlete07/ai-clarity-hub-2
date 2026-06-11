import { buildChapter, buildSection, s, x, BL_CALLOUT } from "../concepts-bl-helpers";

export const chapter02BlHowModelsLearnForFunction = buildChapter({
  slug: "bl-how-models-learn-for-function",
  number: 2,
  shortTitle: "How Models Learn",
  title: "How AI Models Learn — What Business Leaders Must Understand to Evaluate Vendors",
  readingMinutes: 23,
  summary:
    "Understanding how models learn changes how you evaluate vendor claims, negotiate contracts, and set expectations for AI performance. The training process determines what the model can and cannot do — and that translates directly into business risk and budget decisions.",
  keyTakeaway:
    "Models learn from data — and the quality, recency, and ownership of that data determines what the model can do for your business. Fine-tuning and transfer learning are the practical levers that make pre-trained models business-ready, but they require data investment and governance that must be planned before deployment.",
  pmCallout: BL_CALLOUT,
  sections: [
    buildSection({
      number: "2.1",
      title: "What Training Actually Means",
      subtitle: "How a model goes from nothing to useful — and why this process determines everything downstream",
      take: "Training is the process by which a model learns patterns from data. It is a capital expenditure that happens before you ever use the model. Understanding what was in the training data — and what was not — explains most of what the model can and cannot do.",
      why: "When a vendor says 'our model was trained on industry data', that sentence contains a procurement decision: whose data, how much, how recent, and labelled by whom? Each answer changes your risk and value assessment.",
      paragraphs: [
        [
          s("Training a machine learning model is fundamentally an optimisation process. "),
          x(
            "The system is shown millions of examples — input-output pairs — and adjusts its internal parameters until its outputs match the expected results as closely as possible. The result is a set of numerical weights that encode the learned patterns.",
            "For business leaders, the critical insight is that the model contains only what the training data contained. It cannot learn what it was not shown. A fraud model trained on consumer card data knows nothing about commercial wire fraud unless commercial wire fraud examples were in the training set.",
          ),
          s(" Before purchasing any AI tool, ask: what problem was the training data designed to solve, and does that match our problem?"),
        ],
        [
          s("Training is expensive and non-recurring for foundation models, but has ongoing costs for custom ML. "),
          x(
            "Foundation models like GPT-4 or Gemini cost tens to hundreds of millions of dollars to train — expenditures feasible only for a handful of technology companies. Custom ML models for specific business tasks cost thousands to hundreds of thousands depending on data volume and compute requirements.",
            "When vendors offer 'custom AI' at low cost, they are almost certainly fine-tuning a pre-trained model — not training from scratch. That distinction matters: fine-tuning is faster and cheaper but inherits the capabilities and limitations of the base model.",
          ),
          s(" Clarify with every AI vendor: is this a fine-tuned foundation model or a custom-trained model? The answer changes your expectations and your switching cost."),
        ],
        [
          s("Training data is a strategic decision with long-term product implications. "),
          x(
            "The data chosen for training encodes the model's world view, its accuracy on different population segments, and its failure modes. A hiring model trained predominantly on successful hires from a homogeneous workforce will reproduce that homogeneity at scale.",
            "Business leaders who accept 'trained on industry data' without asking for data cards or model documentation are accepting unknown risks. The EU AI Act and EEOC guidelines are beginning to require this documentation for high-risk AI — request it proactively.",
          ),
          s(" Require training data provenance documentation from any AI vendor operating in HR, credit, healthcare, or compliance contexts."),
        ],
      ],
      examples: [
        {
          title: "Bloomberg GPT — purpose-built financial training",
          body: "Bloomberg trained a 50B parameter model on 700B tokens of financial documents — earnings transcripts, analyst reports, regulatory filings, news. The performance advantage on financial NLP tasks reflects the training specialisation. Finance leaders evaluating AI for financial analysis should ask whether the model was trained on domain-appropriate data — not just whether it is a 'large language model'.",
        },
        {
          title: "Workday skills ontology — training data scope limits",
          body: "Workday's skills inference model was initially trained predominantly on North American and Western European job market data. HR leaders in Asia-Pacific found the skills taxonomy poorly calibrated to local market roles. This is a training data scope failure — not a model architecture failure. Global HR deployments require asking vendors about geographic training data distribution.",
        },
        {
          title: "A manufacturer's custom defect model",
          body: "A European manufacturer trained a visual quality inspection model on 18 months of historical defect images. The model performed well on defects from its main product line but failed on a newly introduced component — because the new component's defect patterns were absent from training. Operations leaders: custom ML models require retraining as products and processes change. Budget for this from day one.",
        },
      ],
    }),
    buildSection({
      number: "2.2",
      title: "Parameters — The Weight of Learning",
      subtitle: "What model size means for capability, cost, and vendor pricing",
      take: "Parameters are the numerical values that encode what a model has learned. More parameters generally mean more capability — and more compute cost. The parameter count in vendor specifications is a pricing and capability signal, not just a technical specification.",
      why: "Vendors price model access partly on parameter count. CFOs reviewing AI tool budgets and CTOs selecting model tiers need to understand what they are buying when they see '7B', '70B', or '400B' parameter models — and whether the capability difference justifies the cost difference.",
      paragraphs: [
        [
          s("A model's parameters are numerical weights that determine its behaviour on any input. "),
          x(
            "Think of parameters as the model's encoded memory of everything it learned during training. A 7-billion parameter model has 7 billion such weights. A 400-billion parameter model has 400 billion. Each additional parameter requires storage and compute to run.",
            "Parameter count is a proxy for capacity — not a direct measure of quality on your specific task. A smaller model well-trained on domain-specific data often outperforms a larger general model on specialised tasks.",
          ),
          s(" Do not select AI models primarily on parameter count. Select on benchmark performance for your specific task at your required cost and latency."),
        ],
        [
          s("Parameter count drives inference cost — which drives your AI operating budget. "),
          x(
            "Larger models require more GPU memory and compute per query. Running a 70B parameter model costs roughly 10x more per query than running a 7B model. At 1 million customer queries per month, this difference is material.",
            "Many organisations are discovering that well-tuned smaller models meet their accuracy requirements at a fraction of the cost of frontier models. The 'biggest model' default is an expensive habit in enterprise AI.",
          ),
          s(" Run cost-quality trade-off analysis before standardising on any model tier. The optimal point for your task may be significantly smaller — and cheaper — than the vendor's flagship offering."),
        ],
        [
          s("The enterprise AI market is tiered by parameter class for good reason. "),
          x(
            "Lightweight models (1B–7B parameters) suit high-volume, low-latency tasks: classification, routing, intent detection. Mid-range models (7B–70B) suit document processing, summarisation, and moderate reasoning. Frontier models (70B+) suit complex reasoning, code generation, and nuanced generation tasks.",
            "Operations leaders should map task requirements to model tiers before vendor selection. Paying frontier prices for routing queries is a budget error; using a lightweight model for contract analysis is a quality error.",
          ),
          s(" Create an internal task-to-tier mapping as a budget governance tool before enterprise AI procurement begins."),
        ],
      ],
      examples: [
        {
          title: "A law firm's model tier decision",
          body: "A global law firm evaluated frontier LLMs for two use cases: contract clause identification (high volume, precision-critical) and memo drafting (lower volume, nuance-critical). After benchmarking, they deployed a fine-tuned 13B model for clause identification at 1/8th the cost of their frontier option, and retained a frontier model for memo drafting. Annual savings versus a single-tier frontier deployment: £1.2M.",
        },
        {
          title: "Mistral and the open model cost case",
          body: "Mistral's 7B and 8x7B models match or exceed earlier 70B+ closed models on many professional benchmarks. European enterprises adopting Mistral under self-hosted deployment have reported inference cost reductions of 60–80% versus OpenAI GPT-4 for document classification tasks. CFOs should treat model tier selection as a recurring budget optimisation, not a one-time vendor decision.",
        },
        {
          title: "Customer service AI — the routing tier",
          body: "A telecoms company deployed a frontier LLM for all customer service queries, including simple account balance checks and tariff lookups. The inference cost was 40x higher than necessary for those query types. Rearchitecting with a small intent classifier routing queries to appropriate model tiers — lightweight for factual lookups, frontier for complaints — reduced monthly AI infrastructure cost by 65%.",
        },
      ],
    }),
    buildSection({
      number: "2.3",
      title: "Training Data is Destiny",
      subtitle: "Why the data the model learned from determines what your business can rely on it to do",
      take: "A model can only perform well on patterns that were present in its training data. Training data determines capability ceilings, failure modes, demographic representation, and the domains where the model is reliable. Business leaders must understand training data provenance before deploying AI in consequential decisions.",
      why: "Most AI project failures that are labelled 'the model didn't work' are actually 'the training data did not match the deployment context'. This is a procurement and scoping failure that business leaders can prevent.",
      paragraphs: [
        [
          s("Training data defines the distribution the model understands. "),
          x(
            "A model trained on English-language customer service transcripts from US retail will perform poorly on Australian English, on B2B contexts, or on multilingual interactions — because those patterns were not in the training distribution.",
            "This is not a model failure. It is a distribution mismatch — the most common cause of AI underperformance in enterprise deployment. It is also entirely preventable with correct scoping before purchase.",
          ),
          s(" Before any AI deployment, define your actual deployment distribution — the language, context, domain, and population — and verify that the training data covered it."),
        ],
        [
          s("Training data recency determines performance on current conditions. "),
          x(
            "Every model has a knowledge cutoff — the date after which its training data ends. An LLM with a 2023 cutoff does not know about regulatory changes, market events, or organisational changes that occurred after that date. A fraud model trained on 2022 data may not recognise 2025 fraud patterns.",
            "This creates a specific operational risk: confident AI outputs on outdated information. Finance leaders using AI for regulatory compliance summaries must verify the training cutoff against current regulatory versions.",
          ),
          s(" Establish a knowledge cutoff review process: AI tools used for regulatory, market, or clinical guidance require cutoff verification and supplementation with current source material."),
        ],
        [
          s("Training data quality determines model quality — garbage in, garbage out, at scale. "),
          x(
            "Mislabelled training data, biased historical data, and unrepresentative samples all embed directly into model behaviour. A model trained on historical HR decisions that systematically disadvantaged certain groups will automate and accelerate that disadvantage.",
            "The EU AI Act, EEOC guidance, and UK Equality Act all have implications for AI systems trained on biased historical data. Business leaders in HR and financial services cannot accept vendor assurances of 'fairness' without requesting documentation of data auditing and bias testing.",
          ),
          s(" Request training data quality and bias documentation from any AI vendor used in HR, credit, insurance, or healthcare contexts — before deployment, not after an incident."),
        ],
      ],
      examples: [
        {
          title: "Amazon's hiring AI — historical data encoding past bias",
          body: "Amazon trained a CV-screening model on historical successful-hire data from a male-dominated engineering workforce. The model learned to downgrade CVs mentioning women's colleges and other correlated features. The model was shut down before deployment — but the lesson is widely cited: HR AI trained on historical decisions inherits historical bias. Every people analytics tool must include bias testing before go-live.",
        },
        {
          title: "COVID impact on demand forecasting models",
          body: "During 2020, virtually every retail, logistics, and hospitality demand-forecasting model failed — because COVID created consumption patterns entirely outside their training distributions. Operations leaders who understood training data destiny managed this by switching to simpler models and human judgment until new data accumulated. Those who did not lost inventory and revenue chasing AI forecasts that had no basis in reality.",
        },
        {
          title: "Medical AI — demographic training gaps",
          body: "The FDA cleared dermatology AI tools trained predominantly on lighter skin tone images consistently underperform on darker skin tones — a training data representation failure with clinical consequences. Healthcare system leaders evaluating medical AI must require demographic performance breakdowns from vendors. Average accuracy is not sufficient evidence of safe deployment across your patient population.",
        },
      ],
    }),
    buildSection({
      number: "2.4",
      title: "Overfitting — When the Model Memorises Instead of Learns",
      subtitle: "The performance illusion that collapses in production — and how to catch it before you sign",
      take: "Overfitting occurs when a model performs well on its training data but fails on new data it has never seen. It is the most common technical reason AI tools look impressive in vendor demos and disappoint in production. Business leaders can catch it by insisting on out-of-sample performance data.",
      why: "A vendor who shows you only training performance is showing you a model's memory, not its intelligence. Production performance on your data is the only number that matters — and the gap between demo and production is where AI projects most commonly fail.",
      paragraphs: [
        [
          s("An overfit model has memorised the training examples rather than learning the underlying pattern. "),
          x(
            "Imagine a model trained to identify at-risk customers. If overfit, it recognises the specific customers it saw in training — but when presented with a new at-risk customer who looks slightly different, it misclassifies confidently.",
            "Overfitting inflates in-sample performance metrics dramatically. A model reporting 97% accuracy on training data may perform at 65% on new customer data — making it less useful than a simple heuristic.",
          ),
          s(" Always request test-set performance — performance on data the model never saw during training — from any AI vendor. Training performance without test performance is not evidence."),
        ],
        [
          s("Vendor demo environments are often optimised for the demo, not for your data. "),
          x(
            "Vendors curate demonstration datasets that showcase their model's strengths. A document AI tool that extracts contracts flawlessly in the demo may struggle with your document formats, your clause language, or your file quality.",
            "The diagnostic is simple: run your own holdout data through the tool during evaluation. Supply a dataset the vendor has not seen. The performance gap between vendor demo and your data is the overfitting premium you would pay.",
          ),
          s(" Contractual right to evaluate against your own holdout data before purchase — not vendor-supplied test sets — is a non-negotiable procurement clause."),
        ],
        [
          s("Regularisation is the technical antidote to overfitting, but business leaders need the operational equivalent. "),
          x(
            "In model development, regularisation techniques penalise the model for memorising rather than generalising. For business leaders, the equivalent is: pilot with production data, measure against held-out production outcomes, and require a minimum acceptable performance floor before full deployment.",
            "A model that is 'good enough' and generalises is more operationally valuable than a model that is 'perfect' in training and brittle in production.",
          ),
          s(" Define minimum acceptable performance on your data before pilot begins — not after. Post-pilot negotiation is structurally weaker."),
        ],
      ],
      examples: [
        {
          title: "Credit scoring overfitting — the stable-economy trap",
          body: "A fintech's credit risk model showed 94% accuracy in backtesting on pre-2020 data. In 2020 deployment, accuracy dropped to 71% — because the model had memorised stable-economy patterns and had no generalisable logic for stress conditions. The business case was built on 94%. The business received 71%. Leaders building financial models: require stress-test performance data from vendors, not just historical backtests.",
        },
        {
          title: "HR attrition model — the small dataset problem",
          body: "An HR director purchased an attrition prediction model trained on the vendor's aggregate client data — 50,000 employee records. Applied to a company of 800 employees, performance was unremarkable. The model had overfit to the aggregate client profile. The vendor's defence: 'results vary by company size'. The lesson: request performance benchmarks from clients in your size range and sector before purchase.",
        },
        {
          title: "Proof-of-concept governance at a bank",
          body: "A retail bank implemented a procurement rule: any AI model must demonstrate equivalent performance on a held-out 20% of the bank's own data before progressing from POC to pilot. Three vendor tools that performed impressively in demos dropped below the bank's minimum threshold on the holdout test. The rule saved two failed deployments and one regulatory incident in the first year of operation.",
        },
      ],
    }),
    buildSection({
      number: "2.5",
      title: "Fine-Tuning — Making a General Model Specific",
      subtitle: "The practical mechanism behind most 'custom AI' offers — what it costs and what it delivers",
      take: "Fine-tuning takes a pre-trained general model and continues training it on domain-specific data to improve performance in a target area. Most 'custom AI' vendor offers are fine-tuning, not training from scratch. Understanding this distinction clarifies cost expectations, ownership questions, and performance limits.",
      why: "Fine-tuning is the most commercially viable path to domain-specific AI for mid-market organisations. But it requires data investment, raises data rights questions, and has performance ceilings set by the base model. Leaders who understand this negotiate better and set correct expectations.",
      paragraphs: [
        [
          s("Fine-tuning does not build a new model — it adapts an existing one. "),
          x(
            "A vendor offering 'custom AI trained on your industry data' almost certainly means: we took GPT-4 or Llama or a similar foundation model and continued training it on domain-specific examples. The result inherits the base model's capabilities — and its limitations.",
            "This is commercially sensible: fine-tuning costs thousands of dollars rather than millions. It is also faster: days rather than months. But the output is not a proprietary model — it is a customised version of a model the vendor controls.",
          ),
          s(" When vendors offer custom AI, clarify: is this fine-tuning on a foundation model, and which model? The base model's capabilities and licensing terms apply to your 'custom' tool."),
        ],
        [
          s("Fine-tuning raises data rights questions that business leaders must resolve before engaging. "),
          x(
            "The fine-tuning data you provide — your support tickets, your contracts, your HR records — trains the customised model. The question is: who owns that fine-tuned model? Can the vendor use your data to improve their base model or other customers' models? Can you take the fine-tuned weights if you leave?",
            "These are commercial and legal questions, not technical ones. AI vendor agreements routinely contain broad training data rights that senior lawyers would reject in a standard IP clause — but AI procurement teams accept them unchallenged.",
          ),
          s(" Treat fine-tuning data rights with the same rigour as IP licensing. Involve legal counsel before providing proprietary data for any vendor fine-tuning engagement."),
        ],
        [
          s("The performance ceiling for fine-tuning is set by the base model. "),
          x(
            "If the base model has weak mathematical reasoning, fine-tuning on your financial data will not make it a strong quantitative tool. If the base model has knowledge cutoff limitations, fine-tuning does not extend the cutoff. Fine-tuning improves style, domain vocabulary, and task-specific format — it does not fundamentally expand the model's capabilities.",
            "Operations leaders who expect fine-tuning to solve a base model's fundamental limitations will be disappointed. The correct use of fine-tuning is making a capable general model more efficient and accurate on a specific, well-defined task.",
          ),
          s(" Test the base model on your task before investing in fine-tuning. If the base model cannot perform the task at all, fine-tuning will not fix it."),
        ],
      ],
      examples: [
        {
          title: "Legal document AI — fine-tuning for clause style",
          body: "A Magic Circle law firm fine-tuned a base LLM on 50,000 of its own standard agreements to produce clause suggestions matching the firm's drafting conventions. The fine-tuned model aligned to firm style significantly better than the general model. But when tested on complex cross-border tax clauses, it matched the base model's limitations — fine-tuning had improved style, not legal reasoning depth. Leaders: define which specific tasks fine-tuning addresses before measuring success.",
        },
        {
          title: "A retailer's chatbot fine-tuning — data rights oversight",
          body: "A major retailer fine-tuned a foundation model on two years of customer service transcripts through a third-party AI vendor. Six months later, a competitor launched a product with suspiciously similar response styles and product knowledge. Investigation could not conclusively prove misuse — but the retailer's counsel found their vendor agreement granted broad training rights to all client interaction data. The legal cost of the investigation exceeded the fine-tuning contract value.",
        },
        {
          title: "NHS clinical coding — base model ceiling hit",
          body: "An NHS trust evaluated fine-tuning a general LLM on clinical coding data (ICD-10 assignment from discharge summaries). The base model had weak performance on clinical reasoning. Fine-tuning on 100,000 coded examples improved accuracy on common codes but did not solve failures on complex multi-morbidity cases. The trust concluded: a purpose-built clinical coding model (trained from domain-appropriate architecture, not fine-tuned from a general LLM) was required. Fine-tuning was the wrong tool for the depth of specialisation needed.",
        },
      ],
    }),
    buildSection({
      number: "2.6",
      title: "Transfer Learning — Standing on Capable Shoulders",
      subtitle: "How pre-trained knowledge becomes business-ready capability without prohibitive cost",
      take: "Transfer learning is the mechanism that makes practical AI feasible for organisations without Google-scale compute budgets. A model trained on vast general knowledge transfers that learning to a specific domain with comparatively modest additional training. Almost all enterprise AI tools today are transfer learning applications.",
      why: "Understanding transfer learning explains why AI tools improve rapidly, why base model provider relationships matter, and why the vendor landscape is structured around a small number of foundation model providers whose capabilities become everyone else's starting point.",
      paragraphs: [
        [
          s("Transfer learning means reusing knowledge learned in one context to accelerate learning in another. "),
          x(
            "A language model pre-trained on billions of web pages, books, and code has learned grammar, facts, reasoning patterns, and domain vocabulary. When fine-tuned on medical text, it does not need to re-learn English grammar or clinical terminology structure from scratch — it transfers that knowledge.",
            "For business leaders, transfer learning explains why AI adoption timelines have compressed dramatically. What required three years of custom model development in 2018 may now require three months of fine-tuning on a pre-trained foundation.",
          ),
          s(" The practical implication: your AI project timeline should not include building foundational capabilities. Budget for domain adaptation, not capability creation from zero."),
        ],
        [
          s("The foundation model landscape is the transfer learning infrastructure for the industry. "),
          x(
            "OpenAI, Anthropic, Google DeepMind, Meta, and Mistral provide the pre-trained foundation models that most enterprise AI tools are built upon. Your vendor's 'AI capability' is substantially a function of which foundation model they chose and how they adapted it.",
            "This creates a structural dependency: if the foundation model provider changes pricing, access terms, or capabilities, every tool built on it is affected. Leaders should map their AI tool portfolio to its underlying foundation models.",
          ),
          s(" Assess your organisation's exposure to any single foundation model provider — just as you would assess cloud provider concentration risk."),
        ],
        [
          s("Transfer learning has limits that determine when domain-specific models are worth the additional investment. "),
          x(
            "When the target domain is sufficiently distant from the pre-training distribution — highly specialised scientific language, proprietary notation systems, niche industry processes — transfer learning efficiency decreases. At the extreme, a domain-specific model trained from scratch on purpose-built data may outperform fine-tuned foundation models.",
            "This threshold varies by domain. Most business language tasks — HR, finance, operations, legal — are close enough to the pre-training distribution to benefit from transfer learning. Highly specialised scientific or engineering domains may require purpose-built approaches.",
          ),
          s(" Evaluate domain-specific models versus foundation model fine-tunes only when you have evidence that the transfer learning performance ceiling is insufficient for your use case."),
        ],
      ],
      examples: [
        {
          title: "Salesforce Einstein GPT — transfer learning as product strategy",
          body: "Salesforce built Einstein GPT on foundation models from OpenAI and its own research, fine-tuned for CRM contexts. The product strategy is transfer learning at enterprise scale: general language capability transferred to Salesforce-specific tasks — opportunity summarisation, email generation, case classification. Leaders evaluating Einstein GPT are evaluating a transfer learning application, not a proprietary model. The capability ceiling is the foundation model ceiling.",
        },
        {
          title: "Radiologoy AI — when transfer falls short",
          body: "Several radiology AI tools built by fine-tuning computer vision foundation models on X-ray datasets demonstrated strong performance on standard imaging conditions but struggled on unusual equipment configurations or atypical patient presentations. Researchers found that purpose-built medical imaging models with domain-appropriate architectures outperformed fine-tuned general models on edge cases. Healthcare leaders: evaluate AI tools across the full distribution of your patient population, including atypical presentations.",
        },
        {
          title: "HR skills inference — transfer learning advantage",
          body: "A professional services firm used a foundation model's transfer learning capability to infer employee skills from their email metadata, project involvement, and learning completions — building a skills map without a dedicated ML team. The foundation model's language understanding transferred effectively to the task. Two years prior, this capability would have required a dedicated NLP research team. Transfer learning compressed the capability timeline from years to months.",
        },
      ],
    }),
    buildSection({
      number: "2.7",
      title: "Training Data in the Tool You Are Already Using",
      subtitle: "Where the model underlying your vendor's product learned — and what that means for its behaviour",
      take: "Every AI tool your organisation uses is downstream of training decisions made by someone else. The tool's behaviour — its strengths, its biases, its knowledge cutoffs, its demographic performance — reflects choices about training data that you can investigate but did not make. Leaders who ask these questions before deployment are exercising fiduciary responsibility.",
      why: "Your legal, compliance, HR, and operations teams are making decisions based on AI tool outputs. Those outputs reflect training data choices that affect accuracy, fairness, and regulatory compliance. 'The vendor is responsible' is not an adequate governance position.",
      paragraphs: [
        [
          s("The AI tools your organisation uses contain embedded training decisions affecting their behaviour. "),
          x(
            "A vendor's document classifier was trained on specific document types — likely English-language, US or EU format, from specific industries. A vendor's people analytics tool was trained on specific workforce demographics. These training choices determine where the tool is reliable and where it is not.",
            "Business leaders do not need to audit training data themselves — but they do need to require that vendors have audited it and can provide documentation. Model cards and data sheets are the standard format: require them from enterprise AI vendors.",
          ),
          s(" Add 'model card or data sheet provision' to your AI vendor onboarding checklist as a standard governance requirement."),
        ],
        [
          s("Knowledge cutoffs in AI tools create specific operational risks that grow over time. "),
          x(
            "A legal AI tool with a January 2024 training cutoff does not know about legislation passed in 2025. A market intelligence AI with a 2023 cutoff presents historical insight as current analysis. A compliance monitoring tool may miss regulatory guidance issued after its cutoff date.",
            "The risk compounds as tools age. An AI tool purchased in 2024 and still in use in 2026 without retraining or cutoff updates is operating on a two-year knowledge lag in a period of rapid regulatory change.",
          ),
          s(" Establish annual knowledge cutoff reviews for all AI tools used in regulatory, legal, and market intelligence contexts."),
        ],
        [
          s("Understanding training data in deployed tools enables informed audit and accountability. "),
          x(
            "When an AI tool produces a surprising or damaging output — a biased recommendation, an incorrect legal summary, a discriminatory classification — the root cause is almost always in the training data or training process. Without training data documentation, incident investigation is blind.",
            "Regulators under the EU AI Act and UK AI governance frameworks are beginning to require that deploying organisations can explain high-risk AI decisions. Organisations without training data documentation cannot meet this requirement.",
          ),
          s(" Maintain a live inventory of AI tools in use, their known training data characteristics, knowledge cutoffs, and documented bias testing results."),
        ],
      ],
      examples: [
        {
          title: "Contract AI — knowledge cutoff in legal practice",
          body: "A corporate legal team used a contract analysis AI to flag non-standard clauses. The tool's training cutoff preceded significant EU contract law changes (Digital Markets Act implementation and AI Act final text). Contracts processed in the 18 months after the cutoff were reviewed for compliance with the old framework. The error was discovered in external audit, not internal QA. Leaders: legal and compliance AI tools require explicit cutoff verification against current regulatory versions.",
        },
        {
          title: "Recruitment AI — demographic bias from historical data",
          body: "A global professional services firm's CV screening AI, deployed through an HR tech vendor, consistently underscored candidates from non-UK universities for graduate roles. Investigation revealed the training data overrepresented successful hires from a cluster of UK universities. The vendor's model card did not disclose this demographic skew. Following a discrimination complaint, the firm commissioned independent bias testing — which should have been required before deployment.",
        },
        {
          title: "Financial news AI — training data and market moving",
          body: "A hedge fund deployed an AI sentiment analysis tool for earnings call transcripts. The model was trained on analyst reports from a US-centric corpus. For European and Asian company earnings calls, it systematically misread neutral statements as positive sentiment — the rhetorical conventions differed. The fund attributed three months of underperformance partly to correlated sentiment errors before identifying the training data geographic bias.",
        },
      ],
    }),
    buildSection({
      number: "2.8",
      title: "BL Vendor Training Questions",
      subtitle: "The eight questions every business leader should ask before signing an AI vendor contract",
      take: "Eight questions, asked in the right order, surface the training-related risks in any AI vendor engagement. They take thirty minutes and require no technical background. Leaders who run them consistently avoid the most common AI procurement failures.",
      why: "Training quality determines product quality. Vendors who cannot answer these questions clearly are concealing limitations that will appear in production. Vendors who answer them well earn faster trust and accelerate the governance process.",
      paragraphs: [
        [
          s("Questions one through three: understanding what was learned and from what. "),
          x(
            "One: what data was the model trained on — what domain, geography, language, time period, and demographic coverage? Two: what is the knowledge or data cutoff, and what is the update or retraining schedule? Three: was the training data labelled by humans or automatically, and what was the error rate in labelling?",
            "These three questions establish whether the model's training matches your deployment context. Mismatches here are the root cause of the majority of AI performance failures.",
          ),
          s(" If a vendor cannot answer these three questions with specifics, the governance burden shifts to you — and the deployment risk increases proportionally."),
        ],
        [
          s("Questions four through six: understanding performance evidence and its limits. "),
          x(
            "Four: what evaluation metrics were used — accuracy, precision/recall, F1, AUC — and on what test set? Five: how does performance differ across the subgroups relevant to our deployment — different geographies, demographics, use cases? Six: what holdout data was used for evaluation, and can we test against our own holdout set?",
            "Performance claims without subgroup breakdowns and holdout test access are marketing, not evidence. The gap between aggregate performance and your specific deployment subgroup is where most AI tools disappoint.",
          ),
          s(" Require contractual right to run your own holdout data before any AI vendor deployment above your materiality threshold."),
        ],
        [
          s("Questions seven and eight: understanding data rights and what happens when it fails. "),
          x(
            "Seven: if we provide fine-tuning data or interaction data, who owns the resulting model weights and the training data? Can we export model weights or interaction data if we terminate? Does our data train models for other clients? Eight: what does performance failure look like — how do you detect it, what triggers retraining, and what is the recovery SLA?",
            "Data rights questions are IP questions. Failure recovery questions are operational resilience questions. Both are governance requirements — not optional due diligence extras.",
          ),
          s(" Run these eight questions as a standard checklist in every AI vendor evaluation. Score vendors on their willingness and ability to answer — not just on the answers themselves."),
        ],
      ],
      examples: [
        {
          title: "A COO's vendor scorecard",
          body: "A FTSE 100 COO implemented a standardised vendor training scorecard with these eight questions plus weighted scoring. Vendors who answered fewer than six questions with specifics were deselected before demo. In the first year, three of six evaluated vendors were eliminated at the scorecard stage — two of whom later appeared in industry reports for AI governance failures at other client sites. The scorecard cost zero and saved two deployment risks.",
        },
        {
          title: "Finance AI — discovering the retraining gap",
          body: "A bank's fraud detection AI vendor, when asked question two (knowledge cutoff and retraining schedule), disclosed that the model was retrained quarterly — but the bank's fraud team had observed changing fraud tactics monthly. The bank negotiated a monthly retraining SLA into the contract, with performance guarantees tied to the new cadence. The negotiation was only possible because the question was asked.",
        },
        {
          title: "HR technology — data rights negotiation",
          body: "An HR director evaluating a talent intelligence platform asked question seven (data rights) and discovered the vendor's standard agreement granted rights to use client interaction data to improve the platform for all clients. The director negotiated a data segregation clause: the firm's interaction data could not be used to train any model shared with other clients. The vendor agreed after a two-week negotiation. The clause was not in any standard agreement — it was only available because the question was asked.",
        },
      ],
    }),
  ],
  quiz: [
    {
      q: "A vendor offers 'custom AI trained on your industry data' for your HR use case. What is the most important clarifying question?",
      options: [
        "How many parameters does the model have?",
        "Is this fine-tuning on a foundation model or training from scratch — and which foundation model is used?",
        "What programming language was used to build it?",
        "How long has the vendor been in business?",
      ],
      correct: 1,
      correctFeedback:
        "Right. Most 'custom AI' is fine-tuning on a foundation model. Knowing which model clarifies capability ceilings, licensing terms, and base model limitations that will carry over. Re-read sections 2.1 and 2.5.",
      wrongFeedback:
        "Custom AI almost always means fine-tuning, not training from scratch. The base model determines capabilities and limitations. Re-read sections 2.1 and 2.5.",
    },
    {
      kind: "order",
      q: "Order the eight vendor training questions from first to last in a procurement meeting.",
      prompt: "Drag to arrange from first question (top) to last (bottom).",
      items: [
        "What data was the model trained on — domain, geography, language, time period?",
        "What is the knowledge cutoff and retraining schedule?",
        "What evaluation metrics and test sets were used?",
        "Who owns the fine-tuning data and model weights — and can we export them on termination?",
      ],
      correctFeedback:
        "Right. Training data provenance first, then performance evidence, then data rights. Understanding what was learned before evaluating how well — and before committing data. Re-read section 2.8.",
      wrongFeedback:
        "Start with training data provenance — it determines whether the tool can work for your context before evaluating performance metrics. Re-read section 2.8.",
    },
    {
      kind: "categorize",
      q: "Sort each scenario into the correct training-related risk category.",
      categories: ["Training data mismatch", "Overfitting", "Knowledge cutoff gap"],
      items: [
        { text: "An AI compliance tool misses regulations passed six months after its training data ends.", category: 2 },
        { text: "A fraud model performs at 95% in vendor demo but 68% on your transaction data.", category: 1 },
        { text: "A CV screening tool performs well on UK university graduates but poorly on international candidates not represented in training data.", category: 0 },
        { text: "A legal AI trained on pre-2024 contract law misses recent statutory changes.", category: 2 },
        { text: "A demand forecasting model memorised pre-pandemic seasonal patterns and fails on post-pandemic data.", category: 1 },
        { text: "A customer sentiment tool trained on US retail transcripts performs poorly on your B2B European customer interactions.", category: 0 },
      ],
      correctFeedback:
        "Right. Training data mismatch: deployment context not in training distribution. Overfitting: training performance does not generalise. Knowledge cutoff gap: temporal information lag. Re-read sections 2.3, 2.4, and 2.7.",
      wrongFeedback:
        "Ask: is the problem the wrong context (mismatch), the model memorising not generalising (overfitting), or missing recent information (cutoff)? Re-read sections 2.3, 2.4, and 2.7.",
    },
    {
      q: "Your legal counsel flags that a vendor agreement grants the vendor rights to use your interaction data to improve their platform for all customers. What is the governance response?",
      options: [
        "Accept — shared model improvement benefits everyone.",
        "Negotiate a data segregation clause: your interaction data cannot train any model shared with other clients. If the vendor refuses, escalate to a data rights redline or alternative vendor.",
        "Accept for non-confidential interactions only.",
        "Escalate to IT — this is a technical data management issue.",
      ],
      correct: 1,
      correctFeedback:
        "Right. Interaction data is a proprietary training asset. Broad vendor training rights fund competitors at your expense. Data segregation clauses are standard negotiation territory for enterprise AI contracts. Re-read sections 2.5 and 2.8.",
      wrongFeedback:
        "Data rights in AI vendor agreements are IP clauses. Broad training rights on your interaction data may benefit competitors and reduce your switching advantage. Re-read sections 2.5 and 2.8.",
    },
    {
      q: "An AI tool performed impressively in the vendor's demo environment. What must you require before signing the contract?",
      options: [
        "A written guarantee of demo-level performance in production.",
        "The right to evaluate the tool against your own holdout data before purchase, with minimum acceptable performance defined contractually.",
        "Approval from the vendor's customer success team.",
        "A reference from another client in a similar industry.",
      ],
      correct: 1,
      correctFeedback:
        "Right. Demo environments are curated. Your data is what matters. Contractual holdout evaluation rights with a defined performance floor prevent overfitting surprises in production. Re-read section 2.4.",
      wrongFeedback:
        "Vendor demos often use curated data that may not match your context. Holdout evaluation against your own data is the only valid performance test. Re-read section 2.4.",
    },
    {
      kind: "order",
      q: "Order the steps for governing an AI tool's knowledge cutoff risk over time.",
      prompt: "Drag to arrange from first step (top) to last (bottom).",
      items: [
        "Document the knowledge cutoff date at procurement.",
        "Map the cutoff against regulatory, market, and legal change cadence in your domain.",
        "Establish a contractual retraining or update schedule with the vendor.",
        "Implement annual cutoff review as a standing governance process.",
      ],
      correctFeedback:
        "Right. Document → map risk → contract the update → review annually. Knowledge cutoff risk grows over time and requires proactive governance. Re-read sections 2.3 and 2.7.",
      wrongFeedback:
        "Knowledge cutoff risk is cumulative — the longer a tool operates without update, the greater the information lag. Start with documentation and map risk before contracting remediation. Re-read sections 2.3 and 2.7.",
    },
  ],
});
