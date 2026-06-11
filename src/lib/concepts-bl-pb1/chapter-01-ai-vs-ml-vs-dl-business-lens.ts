import { buildChapter, buildSection, s, x, BL_CALLOUT } from "../concepts-bl-helpers";

export const chapter01BlAiVsMlVsDlBusinessLens = buildChapter({
  slug: "bl-ai-vs-ml-vs-dl-business-lens",
  number: 1,
  shortTitle: "AI vs ML vs DL — Business Lens",
  title: "AI, Machine Learning, and Deep Learning — What Business Leaders Actually Need to Know",
  readingMinutes: 24,
  summary:
    "The distinction between AI, machine learning, and deep learning is not a technical quiz — it is a budget conversation. Leaders who can place a vendor's claim in the right category negotiate better contracts, avoid project failure, and make smarter board presentations.",
  keyTakeaway:
    "AI ⊃ ML ⊃ Deep Learning. Rules scale with headcount; learned systems scale with data. Generative AI is the newest commercial category inside deep learning. Your job is spotting where on this map every vendor sits before a dollar moves.",
  pmCallout: BL_CALLOUT,
  sections: [
    buildSection({
      number: "1.1",
      title: "AI in a Business Context",
      subtitle: "Why the label matters for budget, risk, and board conversations — even if the technology is unchanged",
      take: "Artificial intelligence is a behaviour label applied to software that makes judgement calls instead of following fixed instructions. In 2026, 'AI' is also a capital-markets category — your board, CFO, and investors use it to set valuation multiples and risk tolerances regardless of what is actually running under the hood.",
      why: "When the board asks 'what is our AI strategy?', they are really asking three questions at once: where are we spending, what can go wrong, and how will this affect our competitive position? Answering without a shared vocabulary produces expensive misalignment.",
      paragraphs: [
        [
          s("The term artificial intelligence dates to the 1950s, but its commercial weight has never been higher. "),
          x(
            "Today 'AI' describes software that performs tasks we would call intelligent if a human did them — from a simple routing rule to a language model that drafts contracts.",
            "The label tracks observable behaviour, not internal mechanism. A rule engine that routes insurance claims intelligently is AI. A deep neural network doing the same task is also AI.",
          ),
          s(" For business leaders, the label matters because it shapes how investors, regulators, and customers respond — often before they know what is inside."),
        ],
        [
          s("Budget conversations change the moment 'AI' is on the slide. "),
          x(
            "Finance teams often treat AI investment differently from standard software: faster approval, larger tolerance for ambiguity, and higher expectation of magic.",
            "That latitude is a trap. AI projects fail at roughly the same rate as large software projects — around 80% never reach production — partly because the label suppresses the rigorous scoping that saves normal software projects.",
          ),
          s(" Your role as a business leader is to demand the same cost, timeline, and success-metric rigour from an AI project that you would demand from an ERP rollout."),
        ],
        [
          s("Risk framing also shifts with the AI label. "),
          x(
            "Regulators in finance (SR 11-7, EU AI Act), healthcare (FDA SaMD), and HR (EEOC guidance) now attach specific compliance obligations to AI-driven decisions.",
            "A vendor who calls a rules engine 'AI' in a regulated context may be importing liability your legal team has not reviewed. The taxonomy clarifies exposure.",
          ),
          s(" Knowing whether you are buying rules, ML, or deep learning is the first step in a defensible risk management posture."),
        ],
      ],
      examples: [
        {
          title: "Goldman Sachs — AI governance as board agenda",
          body: "Goldman established an AI governance committee at board level in 2023, requiring all AI deployments above a risk threshold to receive sign-off. The trigger was not technical performance — it was regulatory conversation with the Fed. Leaders across financial services followed. The lesson: the AI label carries regulatory weight that budget conversations must account for.",
        },
        {
          title: "Unilever — AI washing in procurement",
          body: "Unilever's procurement team evaluated a demand-forecasting platform marketed as 'AI-powered'. Due diligence revealed a rule-based formula with manually updated seasonal factors. The platform still had value — but Unilever renegotiated from a six-figure SaaS price to an appropriate rules-tool rate. The vocabulary gap cost the vendor the premium.",
        },
        {
          title: "NHS Digital — AI label triggers clinical governance",
          body: "When NHS Digital piloted a patient-triage support tool, the vendor's use of 'AI-assisted' in marketing automatically triggered clinical software governance under NICE guidance — adding six months of regulatory review. A more accurate label ('decision-support algorithm') would have followed a faster pathway. Terminology choices have operational consequences.",
        },
      ],
    }),
    buildSection({
      number: "1.2",
      title: "Machine Learning and Pattern Recognition",
      subtitle: "When data, not code, becomes the product — and what that means for your roadmap",
      take: "Machine learning replaces hand-written rules with patterns extracted from examples. The business implication: your dataset — not your engineering team — is the primary source of product value. That is a fundamentally different asset to manage, protect, and invest in.",
      why: "When a vendor says their system 'learns from your data', they are describing a relationship where your data becomes their training asset. Leaders who understand ML can negotiate data rights, set realistic performance expectations, and avoid lock-in that compounds over years.",
      paragraphs: [
        [
          s("In classical software, every behaviour is written by a developer. "),
          x(
            "In machine learning, the developer provides a learning algorithm and labelled examples; the system infers the rules. Nobody wrote 'if invoice > 90 days AND new customer → flag for collections'. The model inferred it from thousands of labelled payment records.",
            "This matters to finance leaders because the cost centre shifts. The primary expense is no longer developer time — it is data collection, labelling, and infrastructure. Many AI projects fail because the data budget was an afterthought.",
          ),
          s(" The honest line item for an ML project includes data acquisition, labelling, retraining, and ongoing monitoring — often exceeding the initial model build cost."),
        ],
        [
          s("ML systems degrade over time even with zero code changes — a phenomenon called concept drift. "),
          x(
            "The patterns the model learned may no longer match reality. Fraud tactics evolve. Buying behaviour shifts. Economic conditions change. A model trained in 2022 on consumer credit data may perform meaningfully worse in 2025.",
            "Operations leaders who have adopted ML tools need a retraining cadence built into vendor contracts and internal processes. Absence of this is how 'AI tools' become 'broken tools' without anyone knowing why.",
          ),
          s(" Ask every ML vendor: what is the retraining schedule, who triggers it, and what is the SLA on performance recovery after a drift event?"),
        ],
        [
          s("The data your company generates is the raw material for ML differentiation. "),
          x(
            "Transaction histories, support interactions, HR outcomes, and customer behaviour logs are training inputs that competitors cannot easily replicate. This is the data flywheel: more usage generates more data; more data improves the model; better model drives more usage.",
            "Leaders who understand this invest in data infrastructure and data rights before they need ML — not after. The window to establish a flywheel advantage is early.",
          ),
          s(" HR, operations, and finance leaders sit on ML training gold: treat internal data as a strategic asset with the same care as IP."),
        ],
      ],
      examples: [
        {
          title: "American Express — fraud ML as operational advantage",
          body: "Amex's fraud detection is ML trained on decades of transaction data spanning merchant categories, geographies, and customer segments. Competitors cannot replicate the training set; they can only access less data. The ML advantage is not algorithmic — it is historical data depth. Business leaders should identify their equivalent proprietary data before evaluating ML vendors.",
        },
        {
          title: "LinkedIn Talent Insights — when ML degrades invisibly",
          body: "LinkedIn's salary benchmark tools use ML trained on job postings and stated salaries. During the 2020–22 labour market disruption, stated salaries lagged actual offer packages by significant margins — the model's training data had not caught up. HR leaders using the tool for compensation benchmarking were under-offering. Knowing the retraining cadence and data lag is essential before making compensation decisions on ML outputs.",
        },
        {
          title: "Walmart — store-level demand forecasting",
          body: "Walmart trains demand-forecasting models per store cluster using hyperlocal transaction data — weather, local events, regional demographics. The value is not the ML algorithm (commodity) but the labelled transaction data (proprietary). Operations leaders who negotiate data custody and portability in vendor contracts protect this advantage. Those who grant vendors unrestricted training rights on their transaction data may fund a competitor's model.",
        },
      ],
    }),
    buildSection({
      number: "1.3",
      title: "Deep Learning — The Unlock and the Cost",
      subtitle: "Why DL changed what is possible — and what it costs your P&L",
      take: "Deep learning is the subset of ML that cracked language, vision, and speech — and it is also the most expensive, least explainable, and most API-dependent technology category on your vendor landscape. Knowing when you need it protects your budget from GPU charges you never should have approved.",
      why: "When a vendor describes 'large language models', 'neural networks', or 'generative AI', they are talking about deep learning — and importing a specific cost structure, regulatory complexity, and performance profile into your operations. Business leaders cannot evaluate these contracts without understanding the basics.",
      paragraphs: [
        [
          s("Before deep learning became commercially viable around 2012–2016, teaching computers to understand language or images required teams of specialists hand-engineering features. "),
          x(
            "Deep learning collapsed that: neural networks with many stacked layers learn features directly from raw data. Nobody designed the feature hierarchy — it emerged from exposure to vast amounts of labelled or unlabelled examples.",
            "For business leaders, this means capabilities that were previously ten-year research projects are now API calls. That is genuinely transformative — but it also means the capability is available to every competitor who holds an API key.",
          ),
          s(" The unlock is real; the differentiation must come from somewhere else — your data, your workflow integration, your customer relationships."),
        ],
        [
          s("The cost structure of deep learning is categorically different from standard software. "),
          x(
            "Training large models requires millions of dollars of specialised GPU compute. Inference — running the model to produce answers — costs fractions of a cent per query but adds up rapidly at scale. A customer-facing product making 10 million API calls per month faces material COGS from model inference alone.",
            "CFOs reviewing AI vendor contracts need to model per-query costs against projected usage volumes. A tool that looks affordable at pilot scale can become a significant line item at production scale.",
          ),
          s(" Request usage-based pricing scenarios from every DL vendor: flat fee, per-token, and per-call — and model each against your realistic volume forecast."),
        ],
        [
          s("Deep learning is also the least explainable category — a material concern for regulated industries. "),
          x(
            "Unlike rules engines where you can read the logic, deep models distribute decisions across billions of numerical weights. When a deep learning tool declines a mortgage, suggests a candidate, or flags a transaction, you cannot inspect the reasoning line by line.",
            "Regulators under GDPR Article 22, the EU AI Act, and US financial regulation increasingly require 'right to explanation' for automated decisions. Deep learning tools deployed in these contexts require supplemental governance: human review, audit trails, and documentation of aggregate rather than individual-level justification.",
          ),
          s(" Do not deploy deep learning in high-stakes automated decisions without a human review pathway and legal sign-off on explainability requirements."),
        ],
      ],
      examples: [
        {
          title: "JP Morgan COiN — DL unit economics at scale",
          body: "JP Morgan's contract intelligence system (COiN) uses deep learning to review commercial loan agreements, cutting 360,000 hours of annual lawyer time. The cost calculus: GPU inference cost plus human review of edge cases versus paralegal salaries. Finance leaders evaluating similar tools should model the human-in-loop cost alongside the inference cost — the savings case changes materially if human review cannot be reduced below 20%.",
        },
        {
          title: "Workday — DL in HR with explainability guardrails",
          body: "Workday's Skills Cloud uses deep learning to infer employee skills from job titles, descriptions, and learning completions. For compensation and promotion recommendations, Workday explicitly excludes protected characteristics and surfaces human-readable skill tags rather than raw model scores — an architecture decision made to survive EEOC review. HR leaders should ask every AI talent vendor what the explainability architecture looks like for regulated decisions.",
        },
        {
          title: "A retailer's inference cost surprise",
          body: "A major UK retailer deployed a DL-powered product recommendation engine across its e-commerce platform. Pilot economics at 50,000 sessions/day looked healthy. At 3 million sessions/day post-rollout, inference costs added £280K/month to technology overhead — an item absent from the original business case. The lesson: pilot-to-production cost modelling is a CFO governance requirement, not an engineering detail.",
        },
      ],
    }),
    buildSection({
      number: "1.4",
      title: "The Nested Hierarchy",
      subtitle: "AI ⊃ ML ⊃ Deep Learning — why precision here is a board-room advantage",
      take: "Every deep learning system is machine learning. Every machine learning system is AI. The reverse is never true. Leaders who hold this precisely ask better questions in vendor meetings, avoid overpaying for mis-labelled tools, and run more credible board presentations about technology risk.",
      why: "Vendors have financial incentive to call everything 'AI'. Investors test whether you know what you are actually buying. Regulators are beginning to classify AI systems by category with different compliance obligations. Precision pays — in procurement, in reporting, and in risk management.",
      paragraphs: [
        [
          s("Picture three nested circles. "),
          x(
            "The outer circle is AI: any system that behaves intelligently, including expert systems, rule engines, and classical statistics. Inside it sits ML: systems that learn patterns from data. Inside ML sits deep learning: large neural networks trained on massive datasets.",
            "Each circle implies a different cost profile, governance requirement, and competitive dynamic. Conflating them means applying the wrong lens — and making the wrong decisions.",
          ),
          s(" In vendor diligence, moving a claim from the outer to the inner circle is often worth a six-figure contract renegotiation."),
        ],
        [
          s("Vendors exploit the gradient by marketing inward. "),
          x(
            "A rules-based routing engine becomes 'our AI-powered workflow'. A linear regression model becomes 'machine learning'. A prompt wrapper becomes 'deep learning'. Each upgrade increases perceived sophistication and justifies a higher price.",
            "Business leaders who cannot decode the hierarchy pay the gradient premium. Those who can force specificity negotiate from strength.",
          ),
          s(" The single most valuable procurement question is: 'Is there a trained model with labelled data and evaluation metrics — or is this rules-based?' Evasion is your answer."),
        ],
        [
          s("The hierarchy also maps directly to operational risk. "),
          x(
            "Rules-based systems fail loudly — a wrong rule produces a predictable wrong answer you can trace and fix. ML systems fail statistically — performance degrades gradually and silently. Deep learning systems can fail dramatically and unexpectedly — hallucinations, bias amplification, adversarial inputs.",
            "Operations leaders need different monitoring regimes for each tier. A rules audit is a code review. An ML audit is a performance dashboard. A deep learning audit includes red-teaming, bias testing, and adversarial evaluation.",
          ),
          s(" Your operational governance framework should specify which tier of AI requires which type of audit before deployment."),
        ],
      ],
      examples: [
        {
          title: "SAP SuccessFactors — hierarchy inside one platform",
          body: "SuccessFactors contains rules-based workflows (approval routing), classical ML (attrition prediction), and deep learning (natural language survey analysis) — all marketed under 'SAP AI'. HR leaders implementing SuccessFactors need to know which layer governs which decision, because the governance requirements differ completely. One platform, three tiers, three risk profiles.",
        },
        {
          title: "Insurance underwriting — reclassifying the AI tier",
          body: "A mid-market insurer discovered its 'AI underwriting assistant' was a decision tree with 47 hand-coded rules — classical AI, not ML. Reclassifying correctly allowed the compliance team to skip the EU AI Act high-risk pathway, saving eight months of certification work. The cost of vocabulary precision: zero. The benefit: eight months of revenue acceleration.",
        },
        {
          title: "Microsoft 365 Copilot — one brand, multiple tiers",
          body: "Copilot branding covers grammar suggestions (rules), meeting summaries (deep learning), and workflow automation triggers (rules + ML hybrid). Enterprise buyers who negotiate 'Copilot' as a monolith miss the ability to enable or disable tiers by risk appetite. Legal teams at large firms have disabled generative features while keeping rules-based suggestions — a negotiation only possible if the buyer understands the hierarchy.",
        },
      ],
    }),
    buildSection({
      number: "1.5",
      title: "Rules-Based vs Learned Systems",
      subtitle: "One scales with headcount. The other scales with data. Knowing which you are buying changes the contract.",
      take: "If the vendor could have written the behaviour as a list of if-then rules, it is not machine learning — regardless of the marketing. Rules scale with engineering investment; learned systems scale with data quality and volume. Paying ML prices for a rules engine is one of the most common and expensive mistakes in enterprise AI procurement.",
      why: "This distinction determines your vendor leverage, your switching cost, your operational risk, and your regulatory obligation. It takes three questions to establish — and most enterprise buyers never ask them.",
      paragraphs: [
        [
          s("A rules-based system executes behaviour written explicitly by humans. "),
          x(
            "If invoice_days_outstanding > 90 AND customer_segment = 'SMB' → escalate to collections. The logic is readable, auditable, and deterministic: same input always produces the same output.",
            "A learned system has implicit logic in statistical weights. The same input may produce different outputs as the model is retrained. The logic is probabilistic, not readable line by line.",
          ),
          s(" Both are legitimate. They have different cost structures, different failure modes, and radically different vendor lock-in profiles."),
        ],
        [
          s("Rules win when patterns are stable, codifiable, and auditability is required. "),
          x(
            "Expense approval workflows, compliance checklists, SLA routing, eligibility determination — these are stable, well-defined, and legally auditable. A rules engine ships in weeks, runs at fractions of a cent, and survives a regulatory audit with a printed logic tree.",
            "ML wins when patterns are too complex, high-dimensional, or dynamic for humans to specify — customer churn, demand forecasting, fraud detection, sentiment analysis.",
          ),
          s(" Choosing ML for a stable rules problem is an expensive project that delivers fragility. Choosing rules for a dynamic pattern problem is a brittle product that breaks silently."),
        ],
        [
          s("The three questions that separate rules from ML in any vendor meeting. "),
          x(
            "First: is there labelled training data and an evaluation metric? Second: does performance change when the model is retrained on new data? Third: can you export or inspect the decision logic?",
            "A genuine ML system answers yes, yes, no. A rules system answers no, no, yes. A hybrid answers mix. Any vendor who cannot answer all three crisply is selling marketing.",
          ),
          s(" Run these three questions before any AI procurement decision above £50K. The answers cost nothing and potentially save hundreds of thousands."),
        ],
      ],
      examples: [
        {
          title: "HMRC — rules as regulatory trust",
          body: "HMRC's tax eligibility and penalty systems are rules engines — not ML — because every decision must be explainable to a tribunal with a specific statutory provision. 'The model decided' is not an acceptable answer in a tax court. Regulated industries should map which decisions require rules-based explainability before deploying ML tools from vendors who do not distinguish between the two.",
        },
        {
          title: "Mastercard Decision Intelligence — knowing the hybrid",
          body: "Mastercard's fraud tool layers rules (merchant category velocity limits) over ML (behavioural scoring) over deep learning (network-wide pattern detection). Enterprise buyers who negotiate a single SLA across all three layers create unenforceable contracts. The right approach: separate SLAs for rules uptime, ML accuracy, and DL coverage — each with different review cadences.",
        },
        {
          title: "The £180K rules-engine procurement",
          body: "A UK insurer evaluated an 'AI claims triage' platform at £180K/year. Due diligence: the system used 312 hand-maintained rules with a simple scoring formula. The vendor offered to 'add ML' at a future date. The insurer correctly evaluated the purchase as a rules platform — renegotiated to £45K — and kept a contractual option to migrate to ML when the vendor could demonstrate genuine training data and evaluation metrics.",
        },
      ],
    }),
    buildSection({
      number: "1.6",
      title: "Generative AI as a Commercial Category",
      subtitle: "What changed, why it matters to non-technical leaders, and where the business risk sits",
      take: "Generative AI — models that produce text, images, code, and structured data rather than classifying inputs — is the newest commercial category inside deep learning. It created a wave of enterprise tools that are genuinely useful, genuinely risky, and frequently oversold. Business leaders need a clear view of value and liability before adoption.",
      why: "Your employees are already using generative AI tools regardless of IT policy. The question is not whether to engage but how to engage with appropriate governance — which requires understanding what the category does, what it cannot do, and where liability sits.",
      paragraphs: [
        [
          s("Generative AI models are trained to produce outputs — they generate rather than classify. "),
          x(
            "A classification model asks 'which category does this input belong to?' A generative model asks 'what output would be a plausible continuation or response to this input?' Large language models produce text. Image generators produce images. Code generators produce code.",
            "This is a different failure mode from classification. A classifier that errs assigns wrong categories. A generator that errs produces plausible-sounding but false content — hallucination — which is more dangerous in professional contexts because the output is fluent and confident.",
          ),
          s(" Every generative AI deployment in a professional context requires a human review layer for consequential outputs — this is not optional governance, it is liability management."),
        ],
        [
          s("The commercial value of generative AI for business leaders is concentrated in three categories. "),
          x(
            "First: content and communication velocity — drafting, summarising, translating. Second: knowledge retrieval — surfacing relevant information from large document repositories. Third: code assistance — accelerating developer productivity.",
            "The ROI evidence is most mature for developer productivity (GitHub data shows 30–50% task completion acceleration) and document summarisation (legal and finance teams report significant time savings on due diligence and contract review).",
          ),
          s(" For HR, operations, and finance leaders, the highest-confidence use case in 2026 is internal document retrieval and draft generation — with human sign-off before anything external-facing."),
        ],
        [
          s("The liability landscape for generative AI is rapidly evolving. "),
          x(
            "Copyright exposure (from training data), confidentiality risk (from employees pasting proprietary data into public models), defamation risk (from hallucinated claims about real people or companies), and regulatory risk (from automated decisions without human oversight) all require legal review before enterprise deployment.",
            "Leaders who treat generative AI tools the same as SaaS productivity software are importing material liability. The vendor agreement, data processing terms, and acceptable-use policy all require legal counsel familiar with AI law.",
          ),
          s(" Establish an AI acceptable-use policy reviewed by legal before any enterprise-wide generative AI rollout — not after the first incident."),
        ],
      ],
      examples: [
        {
          title: "Morgan Stanley — controlled generative AI in wealth management",
          body: "Morgan Stanley deployed a GPT-4-powered assistant for financial advisers to retrieve firm research and client data. The architecture: retrieval from a curated, firm-controlled document corpus — not open internet generation. Outputs require adviser review before client communication. The governance architecture (controlled corpus + human review + audit log) is a model for regulated-industry GenAI deployment.",
        },
        {
          title: "Samsung data leak — confidentiality risk of public models",
          body: "Samsung engineers pasted proprietary chip design code and internal meeting notes into ChatGPT to assist with debugging and meeting summarisation. The data entered OpenAI's training pipeline. Samsung subsequently banned public generative AI tools for employees. Leaders should treat employee use of public GenAI as a confidentiality risk requiring explicit policy before widespread adoption, not after a breach.",
        },
        {
          title: "Levi Strauss — diversity and generative image risk",
          body: "Levi's announced a plan to use AI-generated diverse models — then withdrew after public criticism. The generative images surfaced brand risk at the intersection of representation, authenticity, and labour. Leaders should run scenario analysis on public-facing generative AI outputs before launch — not as a technical review but as a brand, legal, and stakeholder review.",
        },
      ],
    }),
    buildSection({
      number: "1.7",
      title: "What AI Cannot Do",
      subtitle: "The limits that vendor pitches omit — and why business leaders must know them",
      take: "AI cannot reason causally, guarantee accuracy, understand context outside its training, exercise judgment, or take legal responsibility for decisions. Leaders who know these limits set appropriate expectations, design correct human-oversight architectures, and avoid the most common and costly AI deployment failures.",
      why: "The majority of enterprise AI project failures are not technical failures — they are expectation failures. Teams deploy AI assuming capabilities it does not have. Understanding limits is the most cost-effective risk management tool available to a business leader.",
      paragraphs: [
        [
          s("AI systems — including the most sophisticated large language models — do not understand. They predict. "),
          x(
            "An LLM generates the next word that is statistically likely given its training. It does not have beliefs, intentions, or comprehension. When it produces a correct answer, it is because the pattern matches training — not because it reasoned to a conclusion.",
            "This matters operationally because AI tools fail in surprising ways when inputs differ from training patterns. A model that is brilliant on standard contracts may produce dangerous outputs on novel clause types it has not encountered.",
          ),
          s(" Build operational processes assuming AI will fail on edge cases — because it will, and edge cases are often where business risk concentrates."),
        ],
        [
          s("AI cannot guarantee accuracy, and confidence in the output is not evidence of correctness. "),
          x(
            "Hallucination — generating plausible-sounding but factually incorrect content — is a structural property of generative models, not a bug to be fixed. The model does not have a fact-checking layer; it has a pattern-completion layer.",
            "Finance and legal leaders are particularly exposed: an AI-summarised contract that omits a material clause looks identical to a correct summary. The model does not flag what it missed — it produces a fluent, confident output regardless.",
          ),
          s(" Consequential AI outputs in finance, legal, medical, or HR contexts require human expert review as a governance requirement — not as a performance metric."),
        ],
        [
          s("AI cannot take legal or moral responsibility for decisions — your organisation can. "),
          x(
            "When an AI tool makes a hiring recommendation, credit decision, or medical triage suggestion, legal liability rests with the organisation that deployed it and the humans who acted on its output. 'The AI decided' is not a defence in employment law, consumer credit regulation, or clinical governance.",
            "This has a practical implication: every AI-assisted decision in a regulated domain needs a documented human decision point. The AI surfaces options; a named human makes the final call and is accountable for it.",
          ),
          s(" Map every AI-assisted decision in your operation to the human accountable for it — by name and role — before you go live."),
        ],
      ],
      examples: [
        {
          title: "Air Canada chatbot liability — 'the AI is responsible' rejected",
          body: "Air Canada's customer service chatbot incorrectly quoted bereavement fare policy, promising a refund the company did not intend to provide. Air Canada argued the chatbot was a 'separate legal entity'. The tribunal rejected this and held Air Canada liable. Business leaders: your AI tools are your liability. Customer-facing AI outputs require accuracy guardrails and clear escalation pathways.",
        },
        {
          title: "Legal hallucination — Mata v. Avianca",
          body: "US attorneys submitted legal briefs citing cases that did not exist — hallucinated by ChatGPT. The error resulted in sanctions and public embarrassment. Legal departments deploying generative AI for research or drafting must implement citation verification workflows. An AI-produced legal brief is a draft, not a filing-ready document.",
        },
        {
          title: "Retail demand AI — edge-case failure in supply chain",
          body: "A European retailer's demand-forecasting AI was trained on pre-pandemic purchasing patterns. During a supply chain disruption, buying behaviour shifted dramatically outside training distribution. The model maintained confident forecasts while reality diverged — leading to significant overstock in some categories and stockouts in others. Operations leaders: AI forecasting tools need manual override protocols during anomalous market conditions.",
        },
      ],
    }),
    buildSection({
      number: "1.8",
      title: "The Business Leader Decision Lens — Spotting Real AI",
      subtitle: "A four-question framework for every vendor meeting, project approval, and board presentation",
      take: "Four questions clarify any AI claim in minutes: (1) rules, ML, or deep learning? (2) what training data powers it and who owns it? (3) how is performance measured and reviewed? (4) what happens when it is wrong and who is responsible? Leaders who run these consistently avoid six-figure procurement errors and make credible AI decisions at board level.",
      why: "You will be asked to approve, champion, or challenge AI investments regularly. This lens is a decision tool — not a technology quiz — that can be applied in a thirty-minute meeting without a technical background.",
      paragraphs: [
        [
          s("Question one: what mechanism — rules, ML, or deep learning? "),
          x(
            "Ask the vendor directly: 'Is there a trained model with labelled data and an evaluation metric, or is this rules-based?' If ML: who provides the training data, how often is the model retrained, and what triggers a retrain? If deep learning: what is the inference cost at our projected volume, and what is the explainability architecture?",
            "This question alone reclassifies most 'AI' vendor pitches into their accurate tier and immediately adjusts the price conversation.",
          ),
          s(" The mechanism question is non-negotiable before any AI contract above your defined materiality threshold."),
        ],
        [
          s("Question two: what training data powers it and who owns it? "),
          x(
            "For ML and deep learning tools: what data was the model trained on? Does our usage data improve the vendor's model — and if so, are we consenting to fund a competitor's training asset? Do we retain rights to export our interaction data if we switch vendors?",
            "Data rights in AI contracts are as material as pricing. Vendors who train on customer data without clear data rights terms are building moats at your expense.",
          ),
          s(" Involve legal counsel on AI vendor data terms with the same urgency as IP clauses — because they are IP clauses."),
        ],
        [
          s("Questions three and four: performance accountability and failure ownership. "),
          x(
            "Ask: what metric defines success, who measures it, and what is the contractual recourse if performance deteriorates? Then: what does failure look like — a wrong answer, a missed case, a biased output — and who is responsible when it happens?",
            "Vendors who resist performance SLAs for AI tools are telling you they do not believe in their own performance claims. Vendors who deflect failure ownership to 'AI limitations' are telling you they will not be partners when the system fails.",
          ),
          s(" Governance requirement: every AI deployment decision should include a documented failure mode and a named human accountable for outcomes."),
        ],
      ],
      examples: [
        {
          title: "A CHRO's four-question vendor meeting",
          body: "A Chief People Officer evaluated an AI-powered talent assessment platform. Four questions: (1) deep learning on interview video — noted explainability obligation; (2) training data was third-party — negotiated data rights clause; (3) performance metric was 'hiring manager satisfaction' — too vague, renegotiated to 90-day retention rate; (4) bias testing documentation required before go-live. Contract signed six weeks later than originally planned — with appropriate governance. No deployment incidents in 18 months.",
        },
        {
          title: "CFO AI governance gate",
          body: "A global manufacturing firm's CFO established an AI investment gate: any AI project above £100K requires answers to all four questions in the business case before budget approval. Within 12 months, the gate rejected four projects that had passed initial IT approval — all four were mis-categorised ML projects without retraining budgets. The gate saved an estimated £600K in failed implementations.",
        },
        {
          title: "Board AI literacy — reclassifying the 'AI strategy'",
          body: "A FTSE 250 board received a strategy presentation titled 'Our AI Roadmap'. A non-executive director with the four-question framework asked during presentation: 'Which of these are ML and which are rules-based?' The question exposed that eight of twelve 'AI initiatives' were rules automation — legitimate, valuable, but not requiring AI governance or AI-scale risk review. The board restructured reporting accordingly, reducing governance overhead and accelerating three genuinely ML initiatives.",
        },
      ],
    }),
  ],
  quiz: [
    {
      q: "A vendor pitches an 'AI-powered compliance monitoring platform' for £150K/year. When asked if there is a trained model, they describe 'our proprietary intelligence layer using advanced pattern recognition'. What is your next move?",
      options: [
        "Sign — 'proprietary pattern recognition' sounds sophisticated.",
        "Ask directly: is there labelled training data, an evaluation metric, and a retraining schedule — or is this a rules engine? Treat evasion as a red flag and reprice accordingly.",
        "Assume it is deep learning because they mentioned pattern recognition.",
        "Escalate to IT — the technical question is outside the leader's remit.",
      ],
      correct: 1,
      correctFeedback:
        "Right. Three direct questions establish the mechanism in any vendor meeting. Evasion on training data and evaluation metrics signals a rules engine priced as ML. Re-read sections 1.5 and 1.8.",
      wrongFeedback:
        "Leaders must ask the mechanism question before budget approval. 'Pattern recognition' is not a synonym for ML — it is a marketing phrase. Re-read sections 1.5 and 1.8.",
    },
    {
      kind: "order",
      q: "Order the four business-leader decision questions from first to last when evaluating an AI vendor.",
      prompt: "Drag to arrange from first question (top) to last (bottom).",
      items: [
        "What mechanism — rules, ML, or deep learning?",
        "What training data powers it, and who owns the data rights?",
        "How is performance measured and what is the contractual recourse?",
        "What does failure look like and who is responsible when it happens?",
      ],
      correctFeedback:
        "Right. Mechanism first — it determines cost and governance tier. Then data rights, then performance accountability, then failure ownership. Re-read section 1.8.",
      wrongFeedback:
        "Start with mechanism — it reclassifies the tool and resets the price conversation. Everything else follows. Re-read section 1.8.",
    },
    {
      kind: "categorize",
      q: "Sort each AI claim into the correct tier: Rules-based, Machine Learning, or Deep Learning.",
      categories: ["Rules-based", "Machine Learning", "Deep Learning"],
      items: [
        { text: "An expense approval system that routes claims above £5,000 to finance director — fully auditable logic tree.", category: 0 },
        { text: "A churn prediction model retrained monthly on customer transaction history with a measured AUC score.", category: 1 },
        { text: "A contract drafting tool using a large language model that generates clause text from prompts.", category: 2 },
        { text: "An invoice routing system with 47 if-then rules maintained by the finance team.", category: 0 },
        { text: "A demand-forecasting platform that improves accuracy as it receives more transaction data over time.", category: 1 },
        { text: "A meeting summarisation tool that uses a transformer model to condense call transcripts.", category: 2 },
      ],
      correctFeedback:
        "Right. Rules: deterministic logic, auditable, no training data. ML: learns from labelled data, performance improves with retraining. Deep learning: large neural networks, generates or classifies complex inputs. Re-read sections 1.2–1.5.",
      wrongFeedback:
        "Ask: is the logic hand-written (rules) or learned from examples (ML/DL)? Is it a neural network generating outputs (DL)? Re-read sections 1.2–1.5.",
    },
    {
      q: "Your legal team flags that an AI vendor contract grants the vendor the right to use your interaction data to improve their model. What is the correct response?",
      options: [
        "Accept — model improvement benefits us too.",
        "Reject and renegotiate: interaction data is a proprietary training asset. Require data rights clauses that prohibit vendor training on your data or grant reciprocal model improvements specific to your account.",
        "Escalate to IT — data rights are a technical matter.",
        "Accept only for non-sensitive interactions.",
      ],
      correct: 1,
      correctFeedback:
        "Right. Vendor training rights on customer interaction data are AI intellectual property clauses. Accepting grants the vendor a training asset at your expense. Re-read sections 1.2 and 1.8.",
      wrongFeedback:
        "Your interaction data is the training input for ML differentiation. Granting vendors unrestricted training rights funds their model — and potentially their other customers' competitive advantage. Re-read sections 1.2 and 1.8.",
    },
    {
      q: "An AI-assisted decision tool declines a customer's credit application. The customer requests an explanation. Your vendor says 'the AI decided'. What is the correct response?",
      options: [
        "Forward the vendor's response — the AI made the decision.",
        "Reject the vendor's framing: legal liability rests with your organisation, not the AI. Provide the explanation your regulatory framework requires, and audit whether your deployment architecture includes a documented human decision point.",
        "Apologise and manually override the decision.",
        "Escalate to the vendor's technical team for an explanation.",
      ],
      correct: 1,
      correctFeedback:
        "Right. AI tools do not carry legal responsibility — your organisation does. 'The AI decided' is not a regulatory defence. Every automated decision in a regulated context needs a human accountable decision point. Re-read sections 1.7 and 1.8.",
      wrongFeedback:
        "AI liability rests with the deploying organisation. This is established in GDPR, the EU AI Act, and financial regulation. Re-read sections 1.7 and 1.8.",
    },
    {
      kind: "order",
      q: "A board presentation on 'AI strategy' is scheduled. Order the steps a business leader should take before presenting.",
      prompt: "Drag to arrange from first step (top) to last (bottom).",
      items: [
        "Classify each initiative: rules-based, ML, or deep learning.",
        "Identify which initiatives carry regulatory or explainability obligations.",
        "Map each AI-assisted decision to a named human accountable for outcomes.",
        "Present the strategy with accurate tier labels and governance architecture.",
      ],
      correctFeedback:
        "Right. Classification → regulatory mapping → accountability mapping → presentation. Boards that receive accurate tier labelling make better governance decisions and avoid over-applying AI risk frameworks to rules engines. Re-read sections 1.4 and 1.8.",
      wrongFeedback:
        "Classify first — the tier determines governance requirements, regulatory exposure, and accountability structure. Everything else follows from accurate classification. Re-read sections 1.4 and 1.8.",
    },
  ],
});
