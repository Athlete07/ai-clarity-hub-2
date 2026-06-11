import { buildChapter, buildSection, s, x, BL_CALLOUT } from "../concepts-bl-helpers";

export const chapter04BlAiAuditExplainability = buildChapter({
  slug: "bl-ai-audit-explainability",
  number: 4,
  shortTitle: "AI Audit & Explainability",
  title: "AI Audit and Explainability — Why Black-Box AI Is a Business Liability",
  readingMinutes: 24,
  summary:
    "Explainability — the ability to explain why an AI system produced a specific output — is both a regulatory requirement and a business risk management tool. Black-box AI deployed in consequential decisions creates legal exposure under GDPR, the EU AI Act, and employment law. Business leaders must understand when explainability is required and how to design AI governance around it.",
  keyTakeaway:
    "Explainability is not a technical nice-to-have — it is a legal requirement for AI systems making consequential decisions about individuals, and a prerequisite for meaningful human oversight. Business leaders who deploy unexplainable AI in high-stakes contexts own the liability for decisions they cannot audit, review, or defend.",
  pmCallout: BL_CALLOUT,
  sections: [
    buildSection({
      number: "4.1",
      title: "What Explainability Means for Business Leaders",
      subtitle: "The difference between interpretable AI and explainability tools — and why only one satisfies regulatory requirements",
      take: "Explainability in AI means being able to communicate, in terms meaningful to a non-technical person, why a specific AI system produced a specific output. This is not the same as knowing how the model works internally. Business leaders need the former — not the latter — to satisfy legal obligations and exercise genuine oversight.",
      why: "GDPR, the EU AI Act, and employment and financial services law all require that automated decisions can be explained to affected individuals. A system that cannot produce a human-readable explanation of why it made a specific decision is legally non-compliant in those contexts — regardless of its technical sophistication.",
      paragraphs: [
        [
          s("Interpretable models — decision trees, linear regression, rule-based systems — explain themselves: the decision logic is readable. "),
          x(
            "Deep learning models — neural networks, large language models — are intrinsically unexplainable at the individual decision level. Their outputs emerge from billions of weighted parameters; no one can read the logic of a specific decision the way they can read a decision tree.",
            "This creates a fundamental tension for business deployment: the most powerful AI models are the least explainable. Resolving this tension is not a technical problem — it is a governance architecture decision.",
          ),
          s(" Map each high-stakes AI system to its explainability category before deployment: interpretable (logic is readable), explainable (post-hoc explanation tools available), or black-box (explanation is not possible) — and establish governance accordingly."),
        ],
        [
          s("Post-hoc explainability tools produce explanations for black-box models, but with limitations business leaders must understand. "),
          x(
            "Tools like SHAP (SHapley Additive exPlanations) and LIME (Local Interpretable Model-agnostic Explanations) attribute a decision to input features — 'income contributed most positively; employment type contributed negatively'. These are approximations of a complex model's behaviour, not the actual decision logic.",
            "Post-hoc explanations are legally useful: GDPR's requirement for 'meaningful information about the logic involved' can be satisfied by feature attribution explanations in many DPA guidance documents. But they have limits: the explanation may not reflect the actual mechanism, particularly for edge cases.",
          ),
          s(" Post-hoc explainability tools satisfy regulatory transparency requirements in most current guidance, but document their limitations and apply additional human review for decisions at the model's performance boundary."),
        ],
        [
          s("The business case for explainability extends beyond compliance. "),
          x(
            "Explainable AI enables better model auditing — finding bias, data quality issues, and model drift is easier when you can see what the model is responding to. It enables better human oversight — reviewers who understand why the AI scored something can exercise genuine judgement. It enables better incident investigation — when an AI system fails, explainability determines how quickly the root cause is identified.",
            "Organisations that build explainability into AI systems as a governance feature, not just a compliance obligation, consistently discover model quality issues earlier and at lower cost.",
          ),
          s(" Frame explainability investment to leadership as a model quality and risk management tool, not just a compliance cost — the operational benefits of explainability exceed the compliance obligation."),
        ],
      ],
      examples: [
        {
          title: "GDPR Article 22 — explainability as legal requirement",
          body: "The UK ICO's guidance on automated decision-making requires organisations to provide 'meaningful information about the logic involved' in automated decisions — not a full technical explanation of the model architecture, but a human-readable explanation of the factors that influenced the decision. Organisations using black-box models for automated credit, hiring, or insurance decisions must implement explainability tools (SHAP, LIME, or interpretable model design) to satisfy this requirement. 'The model decided' is not meaningful information about the logic involved.",
        },
        {
          title: "Commonwealth Bank — explainable AI credit decisions",
          body: "Commonwealth Bank implemented SHAP-based explanations for its AI mortgage affordability model, providing loan officers with the top five factors contributing to each applicant's score. Factors are displayed in plain English: 'Your income relative to the loan amount requested is the primary factor. Your recent credit utilisation has had a moderate negative effect.' Customer complaints about unexplained decisions fell 60% following implementation. Explainability tools that translate model outputs to plain English are operationally valuable beyond regulatory compliance.",
        },
        {
          title: "Goldman Sachs — Marcus model explainability audit",
          body: "Goldman Sachs' Marcus personal loans platform implemented SHAP attribution for credit decisions and discovered during internal audit that a proxy variable (geographic postcode) was contributing disproportionately to scores in specific markets — a bias signal that aggregate performance metrics had not detected. The explainability layer revealed a model quality issue that was then remediated. This illustrates the model auditing value of explainability tools beyond regulatory compliance.",
        },
      ],
    }),
    buildSection({
      number: "4.2",
      title: "The Legal Explainability Requirements",
      subtitle: "GDPR, EU AI Act, and sector-specific laws — what each requires and where the obligations overlap",
      take: "Three distinct legal frameworks create explainability obligations for business leaders: GDPR Article 22 (right to explanation for automated decisions), EU AI Act Article 13 (transparency obligations for high-risk AI), and sector-specific laws in financial services, employment, and healthcare. Understanding where these overlap is necessary to avoid the compliance trap of satisfying one while violating another.",
      why: "Most organisations address GDPR explainability and AI Act transparency as separate compliance exercises. They are connected: a system that satisfies AI Act Article 13 transparency requirements at the deployer level but cannot explain individual decisions to affected individuals violates GDPR Article 22. The frameworks must be addressed together.",
      paragraphs: [
        [
          s("GDPR Article 22 creates an individual right to explanation for automated decisions with legal or significant effects. "),
          x(
            "The explanation must be in plain language that the individual can understand — not technical documentation. It must address: the factors considered, their relative importance, and what the individual could do to change the outcome if they disagree.",
            "Current DPA guidance indicates that feature attribution explanations (SHAP/LIME) satisfy this requirement for most use cases, provided they are translated from technical attribution scores to human-readable language. A credit declination letter citing 'income-to-debt ratio (major positive effect) and recent credit inquiries (moderate negative effect)' satisfies the requirement. A letter citing 'SHAP value = -0.23' does not.",
          ),
          s(" Build plain-language explanation templates for every automated decision type — translating model output to human-readable explanation is an operational requirement before go-live, not a future enhancement."),
        ],
        [
          s("EU AI Act Article 13 requires transparency documentation for high-risk AI systems — addressed to deployers, not individuals. "),
          x(
            "Providers of high-risk AI systems must provide deployers with documentation sufficient to operate the system, understand its capabilities and limitations, and fulfil their own transparency obligations. This includes: system description, performance metrics by use case, known limitations and misuse cases, and human oversight guidance.",
            "This is institutional transparency — ensuring the organisation deploying the AI understands what it is deploying — distinct from the individual transparency required under GDPR. Both are required. A deployer who has AI Act Article 13 documentation but cannot explain a specific decision to an affected individual still violates GDPR.",
          ),
          s(" Obtain AI Act Article 13 documentation from all high-risk AI vendors, and separately implement individual decision explanation capability under GDPR — these are different obligations, both required."),
        ],
        [
          s("Sector-specific explainability obligations often exceed GDPR's requirements. "),
          x(
            "UK financial services (FCA Consumer Duty): firms must be able to explain how AI models produce outcomes in the consumer's interest. US fair lending (ECOA, FCRA): creditors must provide adverse action notices with specific reasons for credit decisions — 'the model declined' is not a specific reason. EU banking prudential regulation (EBA AI guidelines): banks must maintain explainability for AI used in credit risk, market risk, and compliance functions.",
            "Financial services leaders should treat FCA Consumer Duty and ECOA adverse action notice requirements as the most prescriptive explainability obligations — they typically exceed GDPR requirements and define the gold standard explanation format for financial decisions.",
          ),
          s(" For financial services AI, use ECOA adverse action notice format as the template for AI decision explanations — it is more prescriptive than GDPR and compliance with it typically satisfies the broader legal landscape."),
        ],
      ],
      examples: [
        {
          title: "FCA Consumer Duty — AI explainability in retail banking",
          body: "The FCA's Consumer Duty (effective July 2023) requires financial services firms to be able to demonstrate that AI-driven product and service decisions produce outcomes that are in the consumer's interest. Several banks received FCA questions about AI models used for product eligibility, complaint handling prioritisation, and interest rate setting under Consumer Duty reviews. Banks unable to explain how these models produce consumer-appropriate outcomes are at regulatory risk. Consumer Duty explainability obligations require ongoing model documentation, not just pre-launch certification.",
        },
        {
          title: "CFPB adverse action notices — credit AI explanation format",
          body: "The US Consumer Financial Protection Bureau issued guidance confirming that ECOA adverse action notice requirements apply to AI-based credit decisions. The notice must include specific reasons for the adverse action — not generic model output descriptions. Examples of compliant reasons: 'Insufficient credit history to assess creditworthiness'; 'Debt-to-income ratio exceeds lending criteria'; 'Recent delinquencies on existing accounts'. The CFPB specifically found that reasons like 'algorithmic assessment of creditworthiness' or 'model-based risk evaluation' are non-compliant.",
        },
        {
          title: "EBA AI guidelines — banking internal model explainability",
          body: "The European Banking Authority's guidelines on AI in banking require institutions to maintain explainability for AI models used in credit risk assessment, regardless of whether individual customers request explanations. Supervisors conducting model risk management reviews expect to receive explanations of how AI models reach their outputs, including in stress scenarios. Banks using black-box AI in credit risk models face supervisory scrutiny on explainability — not just at the point of customer interaction.",
        },
      ],
    }),
    buildSection({
      number: "4.3",
      title: "Types of AI Audit",
      subtitle: "Technical, algorithmic, compliance, and ethical audits — what each covers and who should commission them",
      take: "AI audit is not a single activity — it encompasses four distinct audit types with different scope, evidence requirements, and governance outcomes. Business leaders must distinguish between these and commission the right type at the right stage of the AI lifecycle, not conflate all AI assurance into a single annual review.",
      why: "Organisations that conduct technical performance audits and consider AI governance satisfied are missing algorithmic fairness audits, compliance audits, and ethical impact audits that address categorically different risks. A perfect technical audit does not evidence GDPR compliance, and a GDPR compliance audit does not assess discriminatory impact.",
      paragraphs: [
        [
          s("Technical audits assess model performance, robustness, and reliability. "),
          x(
            "Technical audits cover: accuracy and performance metrics, model stability under distribution shift, adversarial robustness, data quality assessment, and infrastructure security. These are conducted by data scientists and ML engineers and are typically included in vendor conformity documentation.",
            "Technical audits are necessary but not sufficient for AI governance. A model can pass all technical audit criteria and still be GDPR non-compliant, discriminatory, or ethically problematic. Leaders who conflate technical excellence with governance compliance are leaving significant risk unaddressed.",
          ),
          s(" Technical audits are the vendor's minimum standard — require them as table stakes, then separately commission the compliance and algorithmic audits your governance programme requires."),
        ],
        [
          s("Algorithmic audits specifically test for bias, fairness, and discriminatory impact. "),
          x(
            "Algorithmic audits cover: demographic parity and equalised odds analysis, proxy variable testing, intersectional subgroup performance, and red-teaming for biased outputs. They are conducted by specialists with both technical and anti-discrimination expertise.",
            "Algorithmic audits are required for any AI system making consequential decisions about individuals. They are distinct from technical audits and require human rights or employment law input to define what bias patterns are legally significant — data scientists alone cannot make this determination.",
          ),
          s(" Commission algorithmic audits from specialists who combine technical and legal expertise — a data science team auditing its own model for bias without legal input is not an algorithmic audit."),
        ],
        [
          s("Compliance audits verify adherence to specific legal frameworks — GDPR, EU AI Act, sector regulations. "),
          x(
            "Compliance audits are conducted by legal and compliance specialists and cover: DPIA completeness, lawful basis documentation, subject rights infrastructure, AI Act classification and conformity documentation, and sector-specific regulatory requirements.",
            "External compliance audits are increasingly requested by national supervisory authorities as part of enforcement investigations. Organisations that have conducted proactive compliance audits and remediated findings are in a significantly better position than those facing first compliance review during an enforcement action.",
          ),
          s(" Commission external compliance audits for high-stakes AI systems on an annual basis — the cost of proactive compliance audit is a fraction of enforcement investigation remediation."),
        ],
      ],
      examples: [
        {
          title: "NYC Local Law 144 — mandatory algorithmic hiring audit",
          body: "New York City's Local Law 144 (effective January 2023) requires employers using AI hiring tools to commission annual independent algorithmic audits for bias and publish audit results publicly. The law defines an 'automated employment decision tool' broadly — including AI resume screening, interview scoring, and candidate ranking. Business leaders using AI in hiring in New York City are legally required to commission and publish annual algorithmic audits. This is the first mandatory algorithmic audit law in the US and a model others are following.",
        },
        {
          title: "UK ICO audit programme — GDPR compliance for AI",
          body: "The UK ICO's AI auditing framework (published 2023) enables organisations to self-assess GDPR compliance for AI systems against the ICO's standard. Several organisations have requested ICO engagement on AI compliance — receiving either informal guidance or formal audit engagement. Organisations that complete ICO self-assessments and remediate findings demonstrate GDPR compliance proactivity. Those first assessed during an enforcement investigation are at a significant procedural disadvantage.",
        },
        {
          title: "Financial services — independent algorithmic audit",
          body: "A major UK insurer commissioned an independent algorithmic audit of its AI pricing model from a specialist audit firm combining actuarial and legal expertise. The audit covered: bias across protected characteristics, proxy variable analysis, pricing outcome distribution, and compliance with FCA Consumer Duty explainability requirements. Findings included one significant proxy variable issue (postcode-to-ethnicity correlation) and two explainability gaps. The insurer remediated before the next pricing cycle. External audit findings identified and remediated proactively are internal risk management; identified by the regulator, they are enforcement.",
        },
      ],
    }),
    buildSection({
      number: "4.4",
      title: "Designing for Explainability — Architecture Decisions",
      subtitle: "The choices that determine whether your AI system can be explained — made before a line of code is written",
      take: "Explainability is primarily an architecture decision made at AI system design stage, not a tool added post-deployment. Business leaders who specify explainability as a system requirement before development begins get explainable systems at low cost. Those who request explainability after deployment pay significantly more for lower-quality explanations.",
      why: "Many organisations discover explainability obligations during legal review of a deployed system — after the architecture has been fixed. The cost of redesigning a deployed AI for explainability is typically 3–5 times the cost of designing for explainability from the start.",
      paragraphs: [
        [
          s("The interpretability-accuracy trade-off is real but narrower than widely claimed. "),
          x(
            "The traditional view: interpretable models (decision trees, linear models) are less accurate than black-box models (deep learning). Modern machine learning research has significantly narrowed this gap: well-tuned gradient boosted trees and interpretable neural architectures often match deep learning accuracy for tabular data — the most common enterprise AI use case.",
            "For credit, HR, and insurance AI — high-stakes decisions on structured tabular data — the case for selecting inherently interpretable models is strong: they satisfy explainability obligations natively and often match performance of less interpretable alternatives.",
          ),
          s(" Require evaluation of interpretable model alternatives before selecting a black-box architecture for tabular data high-stakes decisions — the interpretability-accuracy trade-off is often smaller than assumed."),
        ],
        [
          s("Post-hoc explainability tools should be specified in procurement, not added as afterthoughts. "),
          x(
            "SHAP and LIME require access to model internals or a proxy model that approximates the main model. Retrofitting these tools to a deployed model often requires architectural changes and generates lower-quality explanations than when built into the original pipeline.",
            "Procurement specifications for high-stakes AI systems should include: explainability tool type, explanation format (feature attribution, counterfactual, example-based), plain-language output format for individual decisions, and integration with the decision delivery workflow.",
          ),
          s(" Include explainability tool specification in procurement requirements before vendor selection — not as a post-procurement request once the architecture is fixed."),
        ],
        [
          s("Counterfactual explanations — 'what would have changed this decision' — often satisfy both legal requirements and individual needs better than feature attribution. "),
          x(
            "A credit declination with counterfactual explanation: 'If your annual income were £5,000 higher and you had no credit inquiries in the last 6 months, your application would likely be approved.' This is more actionable for the individual than 'income had a significant negative effect'.",
            "Counterfactual explanations are supported by GDPR guidance as a valid approach to Article 22 explanation. They require specific model architecture choices — not all models can efficiently generate reliable counterfactuals — making them an architecture decision, not a post-deployment add-on.",
          ),
          s(" Evaluate counterfactual explanation capability as an architecture requirement for credit, hiring, and benefit eligibility AI — counterfactuals satisfy legal requirements while being more actionable for individuals."),
        ],
      ],
      examples: [
        {
          title: "Nationwide Building Society — interpretable model selection",
          body: "Nationwide Building Society's credit risk team evaluated deep learning and gradient boosted tree architectures for a mortgage affordability model. Performance difference on their test dataset: 0.8% AUC. The team selected the gradient boosted tree architecture for its native interpretability — feature importance values are directly readable from the model without post-hoc tools. The compliance team estimated the interpretable architecture reduced legal review time by four weeks and eliminated post-hoc explainability tool procurement. The accuracy cost was less than one percentage point.",
        },
        {
          title: "European bank — counterfactual explanation implementation",
          body: "A European bank implemented counterfactual explanation for its AI personal loan decisioning system. Decline letters include: the most proximate actionable counterfactual (what the customer could change), the timeframe within which the change would be assessed, and a customer service pathway to discuss the decision. The legal team confirmed the counterfactual format satisfies GDPR Article 22 and ECOA adverse action notice requirements simultaneously. Customer service contacts about declined decisions fell 35% — customers with actionable counterfactuals are less likely to escalate.",
        },
        {
          title: "Procurement specification — explainability as requirement",
          body: "A government agency procuring an AI benefits eligibility assessment tool included explainability requirements in the procurement specification: the system must produce, for every eligibility determination, a plain-English explanation of the top three factors affecting the determination, and a counterfactual explanation identifying the minimum change that would produce a different outcome. Three vendors who could not satisfy the specification were eliminated from the tender. The winning vendor's explainability architecture was contractually binding and independently tested before go-live.",
        },
      ],
    }),
    buildSection({
      number: "4.5",
      title: "Human Oversight Architecture",
      subtitle: "Designing review processes where human oversight is genuine, not performative",
      take: "Meaningful human oversight requires more than a checkbox in a workflow. It requires reviewers who have access to explanation tools, the competence to interpret them, sufficient time to review genuinely, and documented authority to override. Performative human oversight — where reviewers rubber-stamp AI decisions without genuine review — satisfies no legal requirement and creates compounded liability.",
      why: "The EU AI Act, GDPR Article 22, and most sector regulators specify 'meaningful' human oversight. Courts and regulators have found that nominal human involvement without genuine review does not satisfy this requirement. Designing meaningful oversight is an operational challenge, not a technical one.",
      paragraphs: [
        [
          s("Meaningful oversight requires access to the information needed to make a genuine decision. "),
          x(
            "A human reviewer who sees only the AI's binary output (approve/decline) cannot genuinely review the decision. A reviewer who sees the contributing factors, the confidence level, and the individual's circumstances can exercise genuine judgement.",
            "Oversight tool design — what information the reviewer sees, in what format, with what supporting context — determines whether oversight is meaningful. This is an operational and UX design decision that must be made before deployment, not after the first regulatory challenge.",
          ),
          s(" Design oversight interfaces that give reviewers the explanation, confidence interval, the AI's known limitations for this case type, and the individual's key circumstances — not just the binary AI output."),
        ],
        [
          s("Oversight staffing and time allocation determine whether genuine review is operationally possible. "),
          x(
            "If reviewers are expected to process 200 AI-assisted decisions per hour, genuine review is impossible regardless of the tools available. Meaningful oversight requires time allocation commensurate with decision consequence and complexity.",
            "Leaders approving human oversight architectures must challenge volume assumptions: 'our reviewer will handle 150 reviews per day' should trigger the question 'how much time is available per review, and is that sufficient for genuine evaluation?' Operational throughput pressure undermines governance design.",
          ),
          s(" Define the minimum time per review required for genuine oversight and staff accordingly — throughput targets that make genuine oversight impossible are governance failures, not operational efficiencies."),
        ],
        [
          s("Override authority must be real, documented, and monitored. "),
          x(
            "Reviewers must have explicit authority to override AI outputs, a documented process for doing so, and no operational pressure (implicit or explicit) to align with AI outputs. Monitoring override rates identifies both genuine oversight in action and potential automation bias.",
            "Automation bias — the tendency to align with AI outputs without genuine independent review — is a documented cognitive effect. Human reviewers under time pressure default to confirming AI decisions rather than genuinely evaluating them. Override rate monitoring detects automation bias: a review process with zero overrides over sustained periods is not demonstrating meaningful oversight.",
          ),
          s(" Monitor AI decision override rates actively — zero override rates are a governance warning signal requiring investigation, not a sign of AI accuracy."),
        ],
      ],
      examples: [
        {
          title: "Benefits agency — oversight time allocation",
          body: "A benefits agency implementing an AI eligibility assessment tool proposed an oversight model with reviewers handling 80 determinations per day. Internal review identified that genuine assessment of the AI's explanation and the applicant's circumstances required a minimum 8 minutes per case — making 80 daily reviews impossible with genuine oversight. The agency reconfigured the oversight model: AI handles routine low-risk determinations automatically; reviewers handle medium-risk determinations (25 per day with 15 minutes each) and make all high-risk determinations without AI assistance. The tiered model achieved efficiency while preserving genuine oversight.",
        },
        {
          title: "Court bail AI — override rate monitoring",
          body: "A US jurisdiction using an AI risk assessment tool for bail decisions implemented override rate monitoring after academic research suggested judges were experiencing automation bias. Monitoring found judges overrode AI recommendations in only 2.3% of cases — statistically implausible given the heterogeneity of individual circumstances. The monitoring data was used to restructure the review interface, removing AI recommendations from the initial case presentation and having judges form independent assessments before viewing the AI output. Override rates increased to 14%, indicating more genuine independent review.",
        },
        {
          title: "Insurance claims AI — genuine oversight design",
          body: "A UK insurer redesigned its AI claims assessment oversight to address a regulator observation that oversight was performative. Redesign elements: claims handlers receive SHAP attribution for each assessment factor; handler training specifically addresses cases where AI scores conflict with contextual information; handlers must document the basis for any override or confirmation decision above £5,000; monthly calibration sessions review borderline cases where AI and handler assessments diverged. Post-redesign: override rates increased 18%, and a subsequent ICO audit found the oversight architecture satisfactory under GDPR Article 22.",
        },
      ],
    }),
    buildSection({
      number: "4.6",
      title: "Model Documentation and the AI Audit Trail",
      subtitle: "What documentation an AI system needs — and why maintaining it is both a legal requirement and a governance tool",
      take: "Model documentation is the audit trail that evidences governance when questions arise. The EU AI Act mandates technical documentation for high-risk AI; GDPR requires DPIA documentation; and litigation defence requires evidence of due diligence. Business leaders must treat model documentation as a legal record, maintained with the same rigour as financial records.",
      why: "Organisations that cannot produce model documentation during enforcement investigations or litigation defence are at a severe disadvantage. Producing documentation retrospectively — reconstructing model development decisions after a complaint — is legally insufficient and technically unreliable.",
      paragraphs: [
        [
          s("The minimum model documentation set for a high-stakes AI system covers eight elements. "),
          x(
            "System description and intended use; training data provenance and quality assessment; model architecture and training methodology; validation and testing results including bias tests; known limitations and failure modes; human oversight architecture and override protocols; monitoring and update procedures; and incident response pathway.",
            "This documentation must be created during development, not reconstructed afterwards. Many organisations have model performance documentation but not limitation documentation — the latter is what regulators and courts most frequently request.",
          ),
          s(" Require limitation documentation as a mandatory deliverable for every AI project: what the model does not do well, under what conditions it fails, and what human oversight compensates for those limitations."),
        ],
        [
          s("Model cards — standardised documentation templates — provide a practical documentation structure. "),
          x(
            "Model cards, introduced by Google and adopted by the AI industry, provide a standardised format for AI system documentation covering: model details, intended use and out-of-scope uses, training data, evaluation results, ethical considerations, and caveats.",
            "Model cards are not regulatory documentation per se, but completing them forces documentation of all elements required by the EU AI Act's technical documentation obligation. Using model cards as the documentation template reduces documentation burden while meeting regulatory requirements.",
          ),
          s(" Adopt model card format as the standard documentation template for all AI systems — it covers the EU AI Act's technical documentation elements and creates a consistent audit trail."),
        ],
        [
          s("Documentation must be maintained — not just created. "),
          x(
            "Model documentation becomes stale as systems evolve: model updates, training data changes, use case extensions, and monitoring findings all require documentation updates. A model card created at deployment that reflects a different system than is currently running is misleading rather than helpful.",
            "Treat model documentation with the same change management discipline as software documentation: version control, change review, and document owner accountability. Regulatory requests for documentation expect the current state — not the initial deployment state.",
          ),
          s(" Assign a named documentation owner for every AI system with responsibility for keeping model documentation current through all system changes — stale documentation is worse than no documentation when it misrepresents current system state."),
        ],
      ],
      examples: [
        {
          title: "Google — model card publication standard",
          body: "Google published the original model card methodology in 2019 and has since published model cards for over 100 production AI systems, including details of training data, performance metrics, demographic subgroup performance, and known limitations. Enterprise customers using Google AI products can review published model cards as part of their governance due diligence. Business leaders should require equivalent documentation from all AI vendors — if a vendor has not completed a model card for their system, they have not completed adequate documentation.",
        },
        {
          title: "EU AI Act conformity file — documentation at legal standard",
          body: "The EU AI Act's technical documentation requirements for high-risk AI (Annex IV) specify eight categories of required documentation, from system description to conformity assessment. A financial services firm preparing its first EU AI Act conformity file discovered that while it had performance documentation for all eight AI systems in scope, it had limitations documentation for only three and human oversight documentation for one. The documentation gap required a three-month programme to remediate — creating documentation that should have been created during development.",
        },
        {
          title: "Litigation — documentation as defence",
          body: "A UK employer defending an age discrimination claim arising from AI recruitment screening was able to produce complete model documentation: training data provenance showing no age data in training features, bias test results conducted pre-deployment showing no age disparity, post-deployment monitoring reports covering 18 months showing consistent bias performance, and the training materials for human oversight reviewers. The Employment Tribunal found the employer had taken reasonable steps to prevent discrimination. The documentation was the defence.",
        },
      ],
    }),
    buildSection({
      number: "4.7",
      title: "Explainability in Vendor Relationships",
      subtitle: "What to require from AI vendors on explainability — in procurement, contracts, and ongoing operations",
      take: "AI vendors who cannot explain their systems cannot help you explain your decisions to regulators, courts, or affected individuals. Explainability requirements must be specified in procurement, embedded in contracts, and verified in ongoing operations — not assumed from vendor marketing materials.",
      why: "Many AI vendor contracts include 'explainability' as a feature description without defining what explanation means, how it is generated, or what happens when an explanation cannot be produced. These gaps become visible during regulatory investigations and litigation — at the worst possible time.",
      paragraphs: [
        [
          s("Procurement specifications must define what explanation means, not just require it. "),
          x(
            "Specify: explanation method (SHAP, LIME, counterfactual, inherently interpretable model); explanation granularity (decision-level vs. model-level); explanation format (plain English, feature attribution, counterfactual); delivery mechanism (API, embedded in workflow, customer-facing portal); and the maximum cases where an explanation cannot be generated.",
            "Vendors who interpret 'explainability' as a marketing feature description rather than a performance specification will provide dashboard-level model explanations that do not satisfy individual decision explanation requirements. Specification precision prevents this.",
          ),
          s(" Define explainability in procurement specifications at the decision level, not the model level — regulators and courts ask about specific decisions, not aggregate model behaviour."),
        ],
        [
          s("Contractual explainability obligations must include performance standards and escalation provisions. "),
          x(
            "Contracts should specify: explanation availability rate (what percentage of decisions must be explicable), explanation response time (how quickly an explanation can be produced on request), quality standards for explanations (reviewed and approved format examples), and escalation provisions for cases where explanation cannot be produced.",
            "Explanation failure — an AI decision that cannot be explained — requires a defined response: typically escalation to human decision-maker with full manual review and documentation. This provision must be operational before go-live, not designed in response to the first unexplainable case.",
          ),
          s(" Include explanation failure protocols in every AI vendor contract for high-stakes decisions — defining what happens when the AI cannot explain a decision is as important as the explanation capability itself."),
        ],
        [
          s("Ongoing verification ensures vendor explainability performance matches contractual commitments. "),
          x(
            "Explainability tool performance should be tested in the live environment, not just demonstrated during vendor onboarding. Shadow testing — sampling live decisions and verifying that explanations are generated correctly, are accurate to the model's behaviour, and satisfy the agreed quality standard — is the operational verification approach.",
            "Organisations that conduct initial explainability validation but do not test ongoing performance miss the opportunity to detect explanation quality degradation following model updates, infrastructure changes, or increased transaction volumes.",
          ),
          s(" Include explainability performance in routine monitoring alongside accuracy and fairness metrics — explanation quality can degrade independently of model accuracy following system changes."),
        ],
      ],
      examples: [
        {
          title: "UK bank — explainability specification in mortgage AI procurement",
          body: "A UK bank's mortgage AI procurement specification included a detailed explainability requirement: decision-level SHAP attribution for top five factors, plain English translations tested for readability at a 10-year-old reading level, counterfactual explanations for all decline decisions, and explanation generation within 500ms of decision. Three vendors who met accuracy requirements did not meet explainability specification. The selected vendor's explainability architecture was independently tested before contract signature.",
        },
        {
          title: "Insurance vendor contract — explanation failure protocol",
          body: "An insurer's AI pricing vendor contract included an explanation failure protocol: any pricing decision generating an error in the explanation system must be escalated to a human underwriter within 2 hours; the underwriter must issue a manual pricing decision with documented rationale within 24 hours; all explanation failures must be reported in the monthly performance dashboard; more than five explanation failures per 1,000 decisions in any month triggers a root cause investigation. The protocol was tested in the live environment before go-live — generating three protocol-triggers in the test environment that were resolved before production.",
        },
        {
          title: "Annual explainability audit — detecting degradation",
          body: "A financial services firm's annual AI explainability audit identified that SHAP explanations for its credit model had degraded following a model update six months prior: explanation confidence intervals had widened significantly, and a subset of decisions were generating inconsistent attributions. The degradation had not triggered accuracy alarms because the model's overall performance was unchanged. The explainability-specific audit caught a quality issue that standard monitoring had missed — and enabled remediation before an individual explanation was used in a customer dispute.",
        },
      ],
    }),
    buildSection({
      number: "4.8",
      title: "Building an Explainability and Audit Programme",
      subtitle: "A practical governance architecture that business function leaders can own and evidence",
      take: "An explainability and audit programme has five components: explainability requirements in procurement and architecture, model documentation standards, audit schedule by AI system risk tier, human oversight architecture with genuine review, and ongoing monitoring of explanation quality. Business leaders who implement all five are in a defensible position when explainability obligations are tested.",
      why: "Explainability governance is not a one-time investment — it is an ongoing operational commitment. AI systems that cannot explain today's decisions create today's liability. Business leaders must own the programme, not delegate it to technical teams without governance accountability.",
      paragraphs: [
        [
          s("The explainability programme starts with classification: which AI systems require what level of explainability? "),
          x(
            "High-stakes automated decisions (credit, hiring, benefits, insurance) require decision-level explanation capability meeting legal standards. High-risk AI systems under the EU AI Act require institutional-level documentation under Article 13. Profiling systems that inform human decisions require explanation available on request but not necessarily for every individual decision.",
            "Classification determines the investment level: decision-level explainability for automated decisions is the highest investment; documentation for profiling tools used internally is lower. Applying the same explainability standard to all AI systems wastes resource; applying the lowest standard to all creates liability.",
          ),
          s(" Classify AI systems by explainability obligation tier before budgeting explainability investment — tiered standards prevent both over-investment in low-risk systems and under-investment in high-stakes ones."),
        ],
        [
          s("Annual audit schedule should cover technical, algorithmic, and compliance audit types for all in-scope systems. "),
          x(
            "High-risk AI systems: annual independent algorithmic audit, annual compliance audit, internal technical audit quarterly. Medium-risk AI systems: annual internal algorithmic audit, biennial external compliance review. Low-risk systems: annual performance monitoring review without separate audit.",
            "The audit schedule and budget should be presented to the leadership team responsible for AI deployment as a programme cost — not absorbed by the technology team as an engineering activity. Leadership visibility on audit findings and resource allocation is a governance requirement.",
          ),
          s(" Present the annual AI audit schedule and budget to the leadership team as a programme with defined deliverables — making audit findings and resource requirements visible at leadership level."),
        ],
        [
          s("Programme governance includes ownership, escalation, and board-level visibility. "),
          x(
            "The explainability and audit programme requires: a named owner at senior leadership level (CISO, CRO, or equivalent); an escalation pathway from monitoring findings to leadership decision; and periodic board-level reporting on audit outcomes, open findings, and programme performance.",
            "Boards that have approved AI deployments without understanding their explainability and audit status are making governance decisions without required information. AI audit programme reporting should be a standing item in risk committee reporting — not an annual presentation when asked.",
          ),
          s(" Establish explainability and audit programme reporting to the risk committee as a standing agenda item — board-level visibility on audit findings is a governance requirement, not an optional transparency measure."),
        ],
      ],
      examples: [
        {
          title: "Global insurer — explainability programme architecture",
          body: "A global insurer's AI explainability programme covers: (1) a three-tier classification of AI systems by explainability obligation; (2) model card documentation for all in-scope systems, maintained by a named documentation owner; (3) annual independent algorithmic audit for all Tier 1 systems (16 systems); (4) quarterly human oversight rate monitoring; (5) bi-annual explainability quality testing; and (6) quarterly risk committee reporting with audit findings, open items, and remediation status. The programme is owned by the Chief Risk Officer and is cited in the annual regulatory reporting as evidence of AI governance maturity.",
        },
        {
          title: "UK employer — NYC Local Law 144 compliance programme",
          body: "A UK employer with New York City operations built an annual algorithmic audit programme for its AI hiring tools to satisfy NYC Local Law 144. The programme includes: an independent algorithmic auditor appointed annually; an adverse impact analysis published publicly on the company website by 1 January each year; a 30-day public comment period; and an annual compliance sign-off by the General Counsel. The programme established the UK-headquartered company's compliance with the first mandatory algorithmic audit law — and created a governance template applicable to future equivalent laws in other jurisdictions.",
        },
        {
          title: "Board AI audit reporting — establishing the baseline",
          body: "A FTSE 100 board's risk committee received its first AI audit programme report in Q1 2026. The report covered: inventory of 34 AI systems by risk tier, audit schedule and completion status, five open findings from annual algorithmic audits, three remediation programmes under way, and programme cost versus budget. Non-executive committee members asked substantive questions about bias remediation timelines and explainability gaps that had not been visible in previous technology reports. The reporting established board-level AI governance accountability that changed the resources allocated to remediation programmes.",
        },
      ],
    }),
  ],
  quiz: [
    {
      q: "A customer submits a subject access request following an AI-based insurance declination. Your AI vendor provides a SHAP explanation citing 'feature_7 = -0.23, feature_12 = +0.11'. Is this a compliant GDPR Article 22 explanation?",
      options: [
        "Yes — SHAP attribution satisfies the 'meaningful information about logic involved' requirement.",
        "No — SHAP attribution must be translated to plain English describing the actual factors in human-readable terms. 'feature_7 = -0.23' is a technical score, not meaningful information to the individual.",
        "Yes — the numbers indicate which factors were negative and positive.",
        "Compliance depends on the size of the SHAP values.",
      ],
      correct: 1,
      correctFeedback:
        "Right. SHAP values must be translated to plain language — 'your recent claims history had a moderate negative effect on your premium' satisfies the requirement; 'feature_7 = -0.23' does not. Re-read sections 4.1 and 4.2.",
      wrongFeedback:
        "SHAP technical values are not meaningful to non-technical individuals. GDPR Article 22 requires plain-language explanation — the technical attribution must be translated to human-readable factors and their significance. Re-read sections 4.1 and 4.2.",
    },
    {
      kind: "order",
      q: "Order the four types of AI audit from foundational (first) to most comprehensive governance coverage (last).",
      prompt: "Drag to arrange from first (top) to last (bottom).",
      items: [
        "Technical audit: model performance, robustness, and data quality",
        "Algorithmic audit: bias, fairness, and discriminatory impact testing",
        "Compliance audit: GDPR, EU AI Act, and sector regulatory requirements",
        "Ethical impact audit: broader societal and stakeholder impact assessment",
      ],
      correctFeedback:
        "Right. Technical audits are the foundation, then algorithmic audits for discrimination risk, then compliance audits for legal framework adherence, then ethical impact for broader societal assessment. All four are required for comprehensive governance. Re-read section 4.3.",
      wrongFeedback:
        "Technical audits are necessary but not sufficient. Each subsequent audit type addresses a different risk dimension not covered by the prior type. All four are required for comprehensive AI governance. Re-read section 4.3.",
    },
    {
      kind: "categorize",
      q: "Classify each explainability approach by the legal framework it primarily satisfies.",
      categories: ["GDPR Article 22 (Individual Decision Explanation)", "EU AI Act Article 13 (Institutional Transparency)", "Both Frameworks", "Neither Framework"],
      items: [
        { text: "A plain-English letter to a declined credit applicant citing the top three factors affecting their score and what they could change.", category: 0 },
        { text: "A technical documentation package provided to deploying organisations covering system architecture, training data, and performance metrics.", category: 1 },
        { text: "A counterfactual explanation showing an individual what minimum change would produce a different automated decision outcome.", category: 0 },
        { text: "A model card published publicly describing overall model performance and known limitations without individual decision detail.", category: 1 },
        { text: "SHAP attribution scores presented in raw numerical format without plain-language translation.", category: 3 },
        { text: "A system that provides both plain-language individual decision explanations and technical documentation to deploying organisations.", category: 2 },
      ],
      correctFeedback:
        "Right. GDPR Article 22: individual decision explanations in plain language. AI Act Article 13: institutional documentation for deployers. Both: systems providing both. Neither: raw SHAP values without translation. Re-read sections 4.1 and 4.2.",
      wrongFeedback:
        "GDPR Article 22 requires individual explanations in plain language. AI Act Article 13 requires institutional documentation for deploying organisations — not individual decision explanations. Raw SHAP values satisfy neither requirement. Re-read sections 4.1 and 4.2.",
    },
    {
      q: "Your AI oversight model has human reviewers handling 120 AI-assisted credit decisions per day. Six months of monitoring shows a 0% override rate — reviewers have not overridden a single AI decision. What is the governance interpretation?",
      options: [
        "Excellent AI performance — the model is so accurate that human review confirms all decisions.",
        "A governance warning signal: 0% override rate across 120 daily decisions for six months is statistically implausible and indicates automation bias — reviewers are confirming AI outputs without genuine independent review. The oversight architecture is performative, not meaningful.",
        "The reviewers need more training on the model's capabilities.",
        "Reduce the number of reviewers — if nobody is overriding, the oversight resource is wasted.",
      ],
      correct: 1,
      correctFeedback:
        "Right. Zero override rates over sustained periods indicate automation bias — reviewers are rubber-stamping AI decisions without genuine review. This constitutes performative oversight that satisfies no legal requirement. The architecture must be redesigned. Re-read section 4.5.",
      wrongFeedback:
        "Statistical reality: any set of 120 daily credit decisions will contain some that a genuinely independent reviewer would question. Zero overrides indicates reviewers are not genuinely reviewing — this is automation bias and performative oversight that creates compounded legal liability. Re-read section 4.5.",
    },
    {
      q: "When is an inherently interpretable model (decision tree, linear regression) preferable to a high-performance black-box model for a business decision AI?",
      options: [
        "Never — performance should always be maximised regardless of explainability.",
        "When the AI is used for high-stakes decisions about individuals (credit, hiring, insurance) and the interpretable model's performance is within acceptable range — the legal and operational benefits of native explainability typically justify a small accuracy trade-off.",
        "Only when explicitly required by regulation.",
        "When the decision type involves fewer than 100 cases per month.",
      ],
      correct: 1,
      correctFeedback:
        "Right. For high-stakes tabular data decisions, interpretable models often match black-box performance within 1–2% and provide native explainability that eliminates post-hoc tool procurement and satisfies legal obligations more reliably. Re-read section 4.4.",
      wrongFeedback:
        "Performance maximisation at the expense of explainability creates liability in high-stakes AI contexts. Interpretable models for tabular data often come within 1–2% of black-box performance — a trade-off that is typically legally and operationally justified. Re-read section 4.4.",
    },
    {
      kind: "order",
      q: "Order the steps to respond when a model update causes AI explanation quality to degrade below contractual standards.",
      prompt: "Drag to arrange from first action (top) to final resolution (bottom).",
      items: [
        "Identify the degradation through routine explainability monitoring or shadow testing",
        "Assess which decision types are producing non-compliant explanations and their volume",
        "Notify the AI vendor under the contractual explanation performance SLA",
        "Apply manual review to all decisions where explanation quality is below standard",
        "Require vendor root cause analysis and remediation plan within contractual timeframe",
        "Validate explanation quality has recovered before removing manual review safeguard",
      ],
      correctFeedback:
        "Right. Detection → scope assessment → vendor notification → manual review safeguard → vendor remediation → validation before removing safeguard. Manual review must be applied while the explanation system is degraded — not after remediation. Re-read sections 4.6 and 4.7.",
      wrongFeedback:
        "Once explanation degradation is confirmed, manual review must begin immediately — you cannot continue automated decisions without compliant explanations. Vendor remediation runs in parallel, and the manual review safeguard remains until quality is validated. Re-read sections 4.6 and 4.7.",
    },
  ],
});
