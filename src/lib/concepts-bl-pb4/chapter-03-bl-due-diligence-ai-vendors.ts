import { buildChapter, buildSection, s, x } from "../concepts-pb4-helpers";

export const chapter03BlDueDiligenceAiVendors = buildChapter({
  slug: "bl-due-diligence-ai-vendors",
  number: 3,
  shortTitle: "AI Vendor Due Diligence",
  title: "Due Diligence for AI Vendors",
  readingMinutes: 26,
  summary:
    "AI vendor due diligence has five dimensions that standard software due diligence misses: model governance, training data provenance, output liability, AI safety practices, and regulatory compliance posture. Business leaders who complete all five dimensions before contract signature avoid the legal, reputational, and operational failures that make AI procurement headline news.",
  keyTakeaway:
    "Standard vendor due diligence checks financial stability, security certification, and reference quality. AI vendor due diligence must also verify how the model was trained, who is liable for wrong outputs, what the vendor's AI safety practices are, and whether the vendor's regulatory compliance posture matches your jurisdiction. These five additional checks are what separates a safe AI procurement from a liability exposure.",
  pmCallout:
    "As a business leader: when an AI vendor's output harms a customer, causes a regulatory violation, or generates a discriminatory decision, the question your board and regulator will ask is not 'did the vendor do due diligence?' — it is 'what due diligence did you do before signing?' Your due diligence record is your protection.",
  sections: [
    buildSection({
      number: "3.1",
      title: "The five dimensions of AI vendor due diligence",
      subtitle: "Why standard software due diligence is necessary but insufficient for AI procurement",
      take: "Standard software due diligence covers financial stability, security certification, and service continuity. AI due diligence adds five dimensions: model governance, training data provenance, output liability, AI safety practices, and regulatory compliance posture. Missing any one dimension creates an unchecked risk that materialises after contract signature.",
      why: "Business leaders who complete only standard due diligence on AI vendors are making procurement decisions with incomplete information. The five AI-specific dimensions address risks that have no equivalent in traditional software — risks that have caused enterprise AI deployments to fail publicly.",
      paragraphs: [
        [
          s("Dimension 1 — model governance — asks how the vendor manages their AI model's behaviour over time. "),
          x(
            "A model that performs at 92% accuracy on day one will drift. How does the vendor detect drift? How do they notify customers? How do they manage model updates that change outputs in ways that affect your workflow? Model governance is the ongoing maintenance regime for AI quality — and most vendors have not formalised it.",
            "A vendor without a published model governance policy is asking you to accept undefined quality risk over the life of the contract.",
          ),
          s(" Require a written model governance policy — including drift monitoring frequency, update notification timeline, and rollback rights — before contract signature."),
        ],
        [
          s("Dimension 2 — training data provenance — asks what data the vendor used to train their model. "),
          x(
            "AI models inherit the biases, errors, and legal exposures of their training data. A model trained on scraped web content may have ingested copyrighted material — exposing you to copyright liability if you deploy it commercially. A model trained on historical human decisions may replicate historical biases — exposing you to discrimination claims if you use it in hiring or lending.",
            "Training data provenance is the origin story of the model's behaviour. Understanding it is the only way to anticipate systematic failures before they occur.",
          ),
          s(" Ask vendors to provide a training data summary: sources, data types, consent basis, and bias audit results."),
        ],
        [
          s("Dimensions 3–5 — output liability, AI safety, and regulatory compliance — address who pays when the model is wrong. "),
          x(
            "Output liability: if the AI approves a fraudulent claim, generates a discriminatory hiring recommendation, or provides dangerous medical advice — who is liable? The contract must specify. AI safety: what is the vendor's process for identifying and mitigating harmful output capabilities? Regulatory compliance: is the vendor's AI Act compliance documentation aligned with your EU deployment requirements?",
            "Output liability in AI contracts is not yet standardised. Most vendor agreements limit liability to contract value. In a healthcare or financial services context, a single wrong output can generate a liability claim that exceeds the contract value by orders of magnitude.",
          ),
          s(" All five dimensions require written documentation from the vendor before contract signature, not verbal assurance during the sales process."),
        ],
      ],
      examples: [
        {
          title: "Recruiter AI — training data provenance failure",
          body: "A major retailer deployed AI resume screening trained on the company's own hiring history. The training data reflected a decade of predominantly male hires in technical roles. The AI replicated the historical pattern, downscoring female candidates. The training data provenance question — 'what data was the model trained on and what bias audit was conducted?' — would have revealed this before deployment. The company faced EEOC investigation, remediation costs, and reputational damage.",
        },
        {
          title: "Insurance AI — model drift without governance",
          body: "An insurer deployed AI fraud detection at 88% accuracy. The vendor provided no model drift monitoring or notification. Eighteen months later, a claims pattern shift reduced model accuracy to 71% — below the threshold for operational usefulness. The insurer discovered the drift through its own QA review, not vendor notification. A model governance policy requiring quarterly drift reports and a minimum accuracy threshold with automatic escalation would have detected the drift at month four.",
        },
        {
          title: "Financial services — output liability gap",
          body: "A financial services firm deployed AI credit decisioning and a customer was wrongly declined due to a model error. The customer sued for $340,000 in consequential damages. The AI vendor's contract limited liability to $50,000 — the annual contract value. The firm absorbed $290,000 in unrecovered damages. Output liability negotiation before signature would have either required the vendor to increase liability caps or flagged that the vendor was not willing to stand behind their model's decisions — which is itself a due diligence signal.",
        },
      ],
    }),
    buildSection({
      number: "3.2",
      title: "Financial and operational stability checks",
      subtitle: "Vendor financial health signals that predict contract performance and service continuity",
      take: "AI vendor financial stability is more volatile than traditional software because the market is consolidating rapidly. A vendor with excellent technology and a depleting cash runway is a deployment liability. Financial due diligence for AI vendors must assess runway, revenue durability, and acquirer risk — not just current financial health.",
      why: "Business leaders who sign 3-year AI contracts with vendors who fail in year two face: data migration costs, retraining costs, lost productivity during transition, and sometimes data loss. Financial due diligence is contract continuity insurance.",
      paragraphs: [
        [
          s("Request the vendor's most recent funding round disclosure and ask directly: what is your current cash runway at current burn rate? "),
          x(
            "A vendor with 18 months of runway and no revenue growth plan is a deployment risk for a 24-month contract. A vendor with 36 months of runway or positive operating cash flow has deployment stability. Series C and above vendors rarely fail before multi-year contract terms expire.",
            "Vendors are not obligated to disclose runway, but their response to the question is itself informative. Vendors who decline or deflect have something to protect — which is the answer to your question.",
          ),
          s(" Pair the runway question with a revenue growth question: 'What is your ARR growth rate over the past 12 months?' Declining growth plus short runway is a contract risk profile."),
        ],
        [
          s("Acquirer risk is the second financial stability check specific to AI vendors. "),
          x(
            "The AI market is consolidating. A vendor that is acquired during your contract may be integrated into the acquirer's platform, deprecated, or repriced. Your contract should include a change-of-control clause that gives you the right to terminate without penalty if the vendor is acquired.",
            "Without a change-of-control clause, you may find yourself locked into a contract with an acquirer whose product roadmap, support model, or pricing structure is incompatible with your requirements.",
          ),
          s(" Change-of-control clauses are standard in sophisticated enterprise software contracts but absent in most AI vendor standard agreements — you must add them."),
        ],
        [
          s("Operational stability covers three elements: team concentration risk, support infrastructure, and data centre resilience. "),
          x(
            "Team concentration risk: if the vendor's AI capability depends on two or three named researchers or engineers, their departure creates a model maintenance risk. Support infrastructure: what is the vendor's support team size relative to customer count? A vendor with 1,000 customers and a 3-person support team has a structural support gap. Data centre resilience: what is the vendor's RTO and RPO in a disaster recovery scenario?",
            "AI vendors often have more engineering talent than operational infrastructure. Operational stability checks reveal the gap between technical capability and service delivery capability.",
          ),
          s(" Ask for the vendor's team structure, support-to-customer ratio, and last disaster recovery test results before contract signature."),
        ],
      ],
      examples: [
        {
          title: "Professional services — runway question surfaces risk",
          body: "A law firm's due diligence team asked an AI legal research vendor directly about their cash runway. The vendor disclosed 11 months of runway and had not closed a Series B after 8 months of attempts. The law firm declined to proceed to contract. Four months later, the vendor shut down operations and transferred customer data to a third party without notification. The law firm's direct runway question — and the discipline to act on the answer — prevented a significant data and operational incident.",
        },
        {
          title: "Retailer — change-of-control clause saves contract",
          body: "A retailer signed a 3-year AI inventory optimisation contract including a change-of-control clause negotiated during due diligence. Fourteen months into the contract, the vendor was acquired by a competitor who also sold inventory management software to retailers. The acquirer immediately announced the product would be integrated into their platform and existing customers would need to migrate within 18 months. The retailer invoked the change-of-control clause and terminated without penalty — avoiding an 18-month forced migration on the acquirer's timeline.",
        },
        {
          title: "Healthcare — support concentration risk",
          body: "A hospital system evaluated an AI clinical documentation vendor. Due diligence revealed that 80% of customer implementations were managed by a single senior implementation consultant. When asked what happens if this person leaves, the vendor could not provide a documented knowledge transfer plan. The hospital required the vendor to add two co-lead implementation engineers and document the implementation methodology before proceeding to pilot. The vendor complied. Six months later, the senior consultant left. The implementation continued without disruption because the methodology was documented and the team was redundant.",
        },
      ],
    }),
    buildSection({
      number: "3.3",
      title: "Security and compliance certification review",
      subtitle: "Which certifications matter for AI vendors, and how to verify them beyond the sales slide",
      take: "AI vendor security certifications are necessary but not sufficient for enterprise deployment. SOC 2 Type II and ISO 27001 confirm that a vendor has audited security controls — but they do not address AI-specific risks like training data security, model weight protection, or inference attack prevention. AI security due diligence goes beyond certification review.",
      why: "Business leaders who stop at certification review accept that their AI vendor's security posture has been audited against general software standards — not AI-specific attack surfaces. The AI-specific risks require additional due diligence questions that certifications do not answer.",
      paragraphs: [
        [
          s("Review the actual SOC 2 report, not the SOC 2 badge on the vendor's website. "),
          x(
            "SOC 2 reports have two components: the auditor's opinion and the description of controls. The opinion tells you whether controls were operating effectively. The description tells you which controls are in scope. A SOC 2 report that excludes AI model training infrastructure from scope means the training environment was not audited.",
            "Vendors display SOC 2 badges to signal general security maturity. The report tells you whether the specific infrastructure relevant to your deployment was included in the audit scope.",
          ),
          s(" Ask: 'Is your AI model training infrastructure included in your SOC 2 audit scope?' The answer determines whether the badge is relevant to your AI procurement."),
        ],
        [
          s("Three AI-specific security questions have no equivalent in traditional software security due diligence. "),
          x(
            "1. Prompt injection: how does the vendor prevent malicious inputs from manipulating model behaviour? 2. Training data exfiltration: how does the vendor prevent model inversion attacks that reconstruct training data from model outputs? 3. Model weight security: how are the model weights protected from extraction or reverse engineering?",
            "These three attack surfaces are unique to AI systems. Traditional application security controls do not address them. A vendor who cannot answer these questions has not conducted AI-specific security review.",
          ),
          s(" Require written answers to all three AI security questions as a due diligence completion criterion."),
        ],
        [
          s("Regulatory compliance certification must be jurisdiction-specific for AI deployments. "),
          x(
            "EU AI Act compliance requirements differ by risk tier. GDPR applies to any EU personal data processed by the AI. CCPA applies to California residents' data. HIPAA applies to any US health information. A vendor certified for GDPR may not have mapped their AI system to EU AI Act high-risk requirements — which are entirely separate.",
            "Jurisdiction-specific compliance review requires identifying every jurisdiction where the AI outputs will affect individuals, then mapping each jurisdiction's AI-specific regulation to the vendor's compliance documentation.",
          ),
          s(" Build a compliance matrix: jurisdiction, applicable regulation, vendor's compliance documentation, and gaps. Review this matrix with legal counsel before contract signature."),
        ],
      ],
      examples: [
        {
          title: "Financial services — SOC 2 scope gap",
          body: "A bank reviewed an AI fraud detection vendor's SOC 2 Type II report rather than relying on the badge. The audit scope excluded the vendor's model training pipeline and the data lake used for model retraining. The bank's security team identified that customer transaction data uploaded for model personalisation passed through an unaudited environment. The bank required the vendor to extend their SOC 2 scope to include the training pipeline or restrict the vendor from using customer data for model personalisation. The vendor chose the restriction — which was the bank's preferred outcome.",
        },
        {
          title: "Healthcare — prompt injection due diligence",
          body: "A hospital evaluated an AI clinical decision support tool. The security due diligence team asked the vendor's technical lead about prompt injection prevention. The vendor's technical lead was unfamiliar with the term and escalated to their engineering team, who provided a written response 10 days later. The response described general input validation but no AI-specific prompt injection testing. The hospital required the vendor to conduct a third-party adversarial prompt testing exercise before contract signature. The test revealed two injection vulnerabilities that the vendor addressed in a model update before go-live.",
        },
        {
          title: "EU market — AI Act compliance gap",
          body: "A European retailer evaluated a US-based AI personalisation vendor. The vendor had GDPR certification. The retailer's legal team applied the EU AI Act high-risk assessment and determined the personalisation system qualified as a prohibited real-time biometric categorisation system under EU AI Act Article 5. The vendor had no EU AI Act compliance documentation and had not mapped their product to the Act's prohibited practice list. The retailer declined to proceed and selected a European vendor with EU AI Act compliance documentation.",
        },
      ],
    }),
    buildSection({
      number: "3.4",
      title: "Training data provenance and bias audit",
      subtitle: "How to evaluate what an AI model was trained on and what systematic biases it may carry",
      take: "Training data provenance is the due diligence question that AI vendors are least prepared to answer and most likely to deflect. What data the model was trained on determines its systematic biases, its jurisdictional suitability, and its copyright exposure. A vendor who cannot answer provenance questions has not done the internal work required to deploy responsibly.",
      why: "Business leaders who deploy AI without understanding training data provenance are accepting unknown systematic bias risk, unknown copyright exposure, and unknown jurisdictional incompatibility. These risks surface in production — in discrimination claims, copyright litigation, and regulatory enforcement — not in the sales process.",
      paragraphs: [
        [
          s("Ask five training data provenance questions before any AI vendor reaches the contract stage. "),
          x(
            "1. What are the primary training data sources (web scrape, licensed datasets, proprietary data)? 2. What is the date range of the training data? 3. What consent basis was used for training data collection? 4. Has the training data been audited for copyright-protected content? 5. Has the model been tested for demographic bias across the outputs your use case will generate?",
            "These five questions have specific answers. Vendors who provide vague answers ('diverse, high-quality data') have not formalised their training data governance.",
          ),
          s(" Require written answers. Vague verbal answers in a sales call cannot be held as vendor representations in a contract dispute."),
        ],
        [
          s("Bias audit scope must match your deployment use case, not the vendor's generic benchmark. "),
          x(
            "A vendor who provides a bias audit showing equal accuracy across demographic groups on their benchmark dataset may still have biased outputs in your use case. If you are using the model for hiring, the audit must test accuracy across gender, race, and age on hiring-relevant tasks. If you are using it for credit, the audit must test across demographic groups on credit-relevant decisions.",
            "Bias audits on generic benchmarks are marketing documents. Bias audits on your use case are due diligence documents.",
          ),
          s(" Require the vendor to share their bias audit methodology, not just the summary result. Methodology review reveals what was and was not tested."),
        ],
        [
          s("Copyright exposure from training data is an emerging litigation risk that business leaders should not absorb without explicit contractual allocation. "),
          x(
            "Several AI vendors are defendants in copyright litigation over training data. The risk of copyright claims related to AI-generated content is shared between the vendor and the deploying organisation. Some vendors offer copyright indemnification — a contractual commitment to defend and indemnify customers against copyright claims arising from the vendor's model. This indemnification shifts the risk back to the vendor.",
            "Copyright indemnification is available from some vendors (OpenAI, Microsoft, Google) and absent from others. Its presence or absence is a material due diligence finding.",
          ),
          s(" Ask explicitly: 'Do you provide copyright indemnification for AI-generated content?' and require the answer in writing before contract negotiation."),
        ],
      ],
      examples: [
        {
          title: "Media company — copyright indemnification gap",
          body: "A media company evaluated AI content generation vendors. Three vendors offered copyright indemnification for AI-generated content; two did not. The company's legal team treated the absence of indemnification as a risk that required either a price reduction sufficient to self-insure against copyright claims or elimination from the shortlist. Both non-indemnifying vendors were eliminated. The company calculated that the cost of a single copyright claim would exceed the annual contract value of any of the three indemnifying vendors.",
        },
        {
          title: "HR platform — bias audit scope mismatch",
          body: "An HR software company deployed an AI candidate screening tool after reviewing the vendor's bias audit, which showed equal accuracy across demographic groups on a general resume parsing benchmark. Eighteen months later, internal analysis revealed the model disproportionately downscored candidates from non-elite universities for senior technical roles — a pattern not tested in the vendor's benchmark. The bias existed in the model's training data (predominantly resumes from top-25 universities). A use-case-specific bias audit — requiring the vendor to test on the company's actual job categories and candidate pool characteristics — would have revealed the pattern before deployment.",
        },
        {
          title: "Legal services — training data date range matters",
          body: "A law firm deployed an AI legal research tool. The vendor's training data included legal cases up to December 2022. The firm deployed the tool in Q3 2024 for regulatory compliance research in a domain where three significant rulings had been issued in 2023. The tool consistently failed to reference the 2023 rulings — not because it was wrong, but because the information did not exist in its training data. A training data date range question before deployment would have revealed the cutoff and led to either a different vendor or a hybrid research workflow combining AI with manual review of post-cutoff developments.",
        },
      ],
    }),
    buildSection({
      number: "3.5",
      title: "AI safety and responsible AI practices",
      subtitle: "How to evaluate a vendor's AI safety posture beyond marketing language",
      take: "Every AI vendor claims to have a 'responsible AI' programme. Due diligence distinguishes vendors with documented, testable safety practices from vendors with a responsible AI page on their website. The difference matters when a model produces a harmful output and you need to understand the vendor's prior knowledge and mitigation efforts.",
      why: "A vendor's AI safety posture determines how they will respond when their model produces harmful outputs — which it will. Vendors with mature safety practices detect and mitigate harms proactively. Vendors without mature practices detect harms in customer complaints and respond reactively.",
      paragraphs: [
        [
          s("Five questions reveal the maturity of a vendor's AI safety practices. "),
          x(
            "1. Do you have a published AI safety or responsible AI policy? 2. Do you conduct red teaming (adversarial testing) before model releases? 3. Do you have a process for customers to report harmful model outputs? 4. How quickly do you remediate reported harmful outputs? 5. Do you publish a transparency report on safety incidents?",
            "A vendor who answers yes to all five questions has institutionalised safety practices. A vendor who answers no to more than two has a reactive safety posture — which means you are in the early warning system.",
          ),
          s(" Ask for documentation for each affirmative answer. 'We have a process' without documentation means the process exists only in someone's head."),
        ],
        [
          s("Red teaming documentation is the most diagnostic AI safety signal available to buyers. "),
          x(
            "Red teaming means the vendor hired (or internally assigned) a team to actively try to make the model produce harmful, biased, or dangerous outputs before release. A vendor who has conducted red teaming has a report that documents which attack surfaces were tested, which harms were found, and what mitigations were applied.",
            "A red teaming report is the AI equivalent of a penetration test report in traditional security due diligence. It is the evidence that the vendor has actively sought to find and fix harms — not just claimed not to have created them.",
          ),
          s(" Requesting a red teaming summary or executive summary — not the full proprietary report — is a reasonable due diligence ask that legitimate vendors should accommodate."),
        ],
        [
          s("Harm reporting and remediation SLA is a contractual commitment, not a vendor promise. "),
          x(
            "Require the contract to specify: how customers report harmful outputs (email? portal? dedicated channel?), what the vendor's acknowledgement timeline is, what the remediation timeline is for confirmed harms, and whether the vendor commits to notifying all affected customers when a systematic harm is identified.",
            "Harm reporting SLAs without contractual commitment are marketing claims. Vendors who refuse to contract a harm reporting commitment are signalling that their safety practices are not mature enough to commit to timelines.",
          ),
          s(" Include harm reporting SLAs in the same contract section as uptime SLAs — both are service quality commitments."),
        ],
      ],
      examples: [
        {
          title: "Education technology — red teaming request",
          body: "An education technology company evaluated an AI tutoring tool for K-12 students. Due diligence included a red teaming summary request. The vendor with the highest demo performance declined to share any red teaming documentation, citing confidentiality. The second-ranked vendor provided a two-page executive summary showing red teaming had identified three categories of harmful output (inappropriate content generation, factual hallucination in science content, and reward manipulation), each with documented mitigations. The education company selected the second vendor despite lower demo performance: a vendor who had found and fixed harms was more trustworthy than a vendor who claimed to have none.",
        },
        {
          title: "Legal AI — harm reporting SLA negotiation",
          body: "A law firm's contract negotiation team proposed adding a harm reporting SLA to an AI legal research contract: 'Vendor will acknowledge reported harmful outputs within 2 business days and provide a remediation timeline within 5 business days.' The vendor's legal team initially rejected the clause as operationally unachievable. After negotiation, the vendor agreed to a 5-business-day acknowledgement and 15-business-day remediation timeline for confirmed systematic harms. The negotiation itself revealed that the vendor had never previously committed to harm response timelines — and surfaced that their internal process was less mature than their sales team had represented.",
        },
        {
          title: "Insurance — responsible AI policy substance check",
          body: "An insurer reviewed three AI vendors' published responsible AI policies. Vendor A's policy was 200 words on their website: principles without practices. Vendor B's policy was a 12-page document with named governance roles, testing cadences, and incident response procedures. Vendor C had no published policy. The insurer weighted the policy substance as 15% of the due diligence score. Vendor B's policy substance, combined with their technical performance, produced the highest overall score. Vendor A's brevity and Vendor C's absence were both treated as risk signals.",
        },
      ],
    }),
    buildSection({
      number: "3.6",
      title: "Regulatory compliance posture for AI deployments",
      subtitle: "Mapping vendor compliance documentation to your jurisdiction's AI-specific regulations",
      take: "Regulatory compliance posture for AI vendors must be assessed jurisdiction by jurisdiction, regulation by regulation. A vendor compliant with GDPR may not be compliant with EU AI Act high-risk requirements. A vendor compliant in the US may have no GDPR data processing agreements. The compliance matrix is the document that makes jurisdiction-specific risks visible before they become post-deployment violations.",
      why: "Business leaders who deploy AI without completing a jurisdiction-specific compliance matrix discover regulatory gaps in enforcement actions, not due diligence reviews. The regulatory cost of a gap discovered in enforcement is orders of magnitude higher than the cost of discovering it in due diligence.",
      paragraphs: [
        [
          s("The compliance matrix has four columns: Jurisdiction, Applicable Regulation, Vendor Documentation Status, and Gap. "),
          x(
            "For an EU deployment: EU AI Act (risk classification and conformity documentation), GDPR (data processing agreement and Article 28 compliance), and any sector-specific regulation (MiFID II for financial services, MDR for medical devices). For a US deployment: CCPA, sector-specific (HIPAA, FCRA, ECOA), and state AI laws (Colorado, Illinois, Texas).",
            "The matrix forces the evaluation team to name every applicable regulation before asking the vendor for compliance documentation. Vendors who provide only the documentation they have without being asked for specific regulations will not disclose gaps voluntarily.",
          ),
          s(" Build the compliance matrix in the functional brief stage, before issuing the RFP. It becomes a checklist of required documentation from each responding vendor."),
        ],
        [
          s("EU AI Act compliance is the highest-complexity regulatory requirement for AI vendors selling into Europe. "),
          x(
            "The EU AI Act classifies AI systems as unacceptable risk (prohibited), high risk (conformity assessment required), limited risk (transparency obligations), or minimal risk (no specific obligations). Most enterprise AI tools in HR, credit, healthcare, and law enforcement are classified as high risk. High-risk AI systems require a conformity assessment, technical documentation, a human oversight mechanism, and registration in the EU database.",
            "A vendor who claims EU AI Act compliance without a completed conformity assessment for their high-risk system is making a claim they cannot support. Ask for the conformity assessment documentation, not the compliance claim.",
          ),
          s(" If the vendor cannot produce a conformity assessment for a high-risk EU AI system, they are not EU AI Act compliant regardless of what their sales team says."),
        ],
        [
          s("Sector-specific regulatory requirements often exceed general AI regulation in their specificity and enforcement risk. "),
          x(
            "HIPAA for health AI: AI vendors processing protected health information must sign a Business Associate Agreement. ECOA for credit AI: AI credit decisioning must provide adverse action notices that explain the AI's decision in terms consumers can understand. MiFID II for financial AI: AI investment recommendations require compliance documentation that differs from the EU AI Act's general requirements.",
            "Sector-specific regulations are often more prescriptive and better enforced than general AI regulation. A vendor who is EU AI Act compliant but lacks a BAA for healthcare is not deployable in a health context regardless of their general compliance posture.",
          ),
          s(" Your sector-specific regulatory requirements are non-negotiable constraints, not negotiation points. Vendors who cannot meet them are not in scope for your procurement."),
        ],
      ],
      examples: [
        {
          title: "HR technology — EU AI Act high-risk classification",
          body: "A multinational employer evaluated an AI recruitment screening tool for use across EU and US markets. EU AI Act compliance review classified the tool as a high-risk AI system (Annex III, employment and workers management). The vendor's sales team stated they were 'EU AI Act compliant.' The employer's legal team requested the conformity assessment documentation. The vendor produced a self-assessment checklist but no conformity assessment report. The employer's legal team determined the vendor was not compliant for EU deployment. A US-only pilot proceeded while the vendor worked toward EU conformity assessment completion.",
        },
        {
          title: "Healthcare AI — BAA gap stops deployment",
          body: "A hospital system completed due diligence on an AI clinical documentation vendor. Security certification: SOC 2 Type II — present. GDPR data processing agreement: not applicable (US-only deployment). HIPAA Business Associate Agreement: requested. The vendor's legal team disclosed they had never signed a BAA and had not assessed whether their data processing qualified as PHI handling under HIPAA. The hospital could not deploy a tool handling patient information without a BAA. The vendor completed a HIPAA assessment, confirmed PHI handling, and signed a BAA six weeks later — adding six weeks to the deployment timeline that a compliance matrix at RFP stage would have flagged.",
        },
        {
          title: "Credit AI — ECOA adverse action notice requirement",
          body: "A lender evaluated AI credit decisioning vendors. The compliance matrix identified ECOA adverse action notice requirements: when AI is used for credit decisions, applicants must receive notices explaining the factors used. Three vendors were evaluated; only one had a built-in adverse action notice generation feature with the regulatory-required language. The other two vendors assumed adverse action notices would be generated by the lender's existing system — but the lender's system had no mechanism to interpret AI factor output. The compliance matrix identified the gap before contract, not during a regulatory examination.",
        },
      ],
    }),
    buildSection({
      number: "3.7",
      title: "Due diligence documentation and audit trail",
      subtitle: "How to document AI due diligence so it protects you in a dispute, investigation, or board review",
      take: "AI due diligence that is not documented did not happen in the eyes of a regulator, a plaintiff's attorney, or a board of directors. The due diligence record is both your procurement protection and your regulatory defence. Documentation discipline is the difference between 'we completed due diligence' and 'we can prove we completed due diligence.'",
      why: "Regulators and plaintiffs do not accept oral assertions of due diligence. Board members cannot defend a procurement decision based on institutional memory. The due diligence file is the record that converts your process into evidence — and your evidence into legal protection.",
      paragraphs: [
        [
          s("The AI vendor due diligence file has six components. "),
          x(
            "1. Functional vendor map (pre-RFP). 2. Evaluation rubric and demonstration scores. 3. Structured reference call notes. 4. Vendor responses to five-dimension due diligence questionnaire. 5. Compliance matrix with vendor documentation attached. 6. Pilot agreement with signed go/no-go record.",
            "Each component is timestamped, version-controlled, and stored in a location accessible to legal, compliance, and the board — not in the evaluation team's email inbox.",
          ),
          s(" Name a due diligence file owner responsible for maintaining completeness and version control throughout the procurement process."),
        ],
        [
          s("Vendor representations made during due diligence should be captured in a vendor disclosure form. "),
          x(
            "The vendor disclosure form asks vendors to confirm in writing the representations they have made verbally during the sales process: accuracy rates, uptime history, compliance certifications, training data sources, and AI safety practices. Signed vendor disclosure forms become representations that can support contract warranties or warranty breach claims.",
            "Without a vendor disclosure form, the sales team's verbal claims are not representations — they are puffery. With a signed disclosure form, they are contractual starting points.",
          ),
          s(" Send the vendor disclosure form before contract negotiation and require it to be returned, signed, within five business days."),
        ],
        [
          s("Due diligence gaps discovered after contract signature must be documented as known risks with mitigation plans. "),
          x(
            "Not every due diligence gap is a deal-stopper. A vendor without a formal model governance policy may still be the best option in the market. In this case, the gap is documented, the mitigation is specified (e.g. quarterly model performance reviews contractually committed), and the residual risk is acknowledged by the budget holder in writing.",
            "Undocumented known risks are the most dangerous outcome of due diligence: the team knew about the gap, chose to proceed, but left no record of the decision or its rationale. This is the pattern that creates personal liability for business leaders in a post-incident review.",
          ),
          s(" Document every known gap and its mitigation before contract signature. A gap with a documented mitigation plan is a managed risk. A gap without documentation is a liability."),
        ],
      ],
      examples: [
        {
          title: "Professional services — vendor disclosure form prevents dispute",
          body: "A consulting firm required a vendor disclosure form from an AI proposal generation tool vendor before contract signature. The form captured the vendor's stated 96% accuracy rate on proposal content quality, 99.9% uptime, and SOC 2 Type II scope including training infrastructure. In year two, the accuracy rate dropped to 84% and an uptime incident lasted 18 hours. The vendor argued their accuracy rate referred to a benchmark that had since been revised. The firm's legal team produced the signed disclosure form confirming the 96% claim applied to production use. The dispute resolved in the firm's favour with a credit equivalent to 20% of the annual contract value.",
        },
        {
          title: "Healthcare — gap documentation prevents personal liability",
          body: "A hospital CIO's due diligence team identified that an AI clinical support vendor lacked a formal model drift monitoring policy. The CIO chose to proceed based on the vendor's technical leadership and the absence of a better-credentialled alternative. The gap was documented in the due diligence file: 'Model drift monitoring: vendor has no formal policy. Mitigation: quarterly performance review with vendor, contractual accuracy threshold of 85%, automatic escalation if accuracy drops below threshold for two consecutive quarters.' Eighteen months later, a regulatory inquiry asked the hospital to demonstrate AI governance practices. The documented gap and mitigation were presented as evidence of responsible risk management.",
        },
        {
          title: "Financial services — due diligence file access",
          body: "A bank's AI procurement team stored due diligence files in the evaluation lead's personal OneDrive. When the evaluation lead left the company eight months after contract signature, the files were inaccessible. A regulatory examination requested documentation of the AI vendor due diligence process. The bank could not produce the documentation. The examination issued a finding of inadequate AI governance processes — not because the due diligence was inadequate, but because it was not retrievable. Centralised, access-controlled storage with a named custodian is a documentation governance requirement, not an administrative preference.",
        },
      ],
    }),
    buildSection({
      number: "3.8",
      title: "BL decision lens: your AI vendor due diligence checklist",
      subtitle: "A 40-point checklist that covers all five dimensions before any AI contract signature",
      take: "A 40-point AI vendor due diligence checklist, completed for every AI procurement above a materiality threshold, converts a qualitative assessment into a documented governance record. The checklist is your protection in a board review, a regulatory examination, and a contract dispute — and your signal to the vendor that you are a sophisticated buyer who cannot be sold to on slides alone.",
      why: "Business leaders who complete a structured due diligence checklist make better procurement decisions, attract better vendor behaviour, and have a documented record that protects the organisation and the decision maker in every subsequent review.",
      paragraphs: [
        [
          s("The 40-point checklist covers eight categories: five AI-specific dimensions plus financial stability, security certification, and documentation completeness. "),
          x(
            "Category 1 — Model governance (5 points): drift monitoring policy, update notification process, rollback rights, version control, and accuracy tracking. Category 2 — Training data (5 points): sources, date range, consent basis, copyright audit, bias audit. Category 3 — Output liability (5 points): liability cap review, indemnification scope, insurance confirmation, output accuracy warranty, error escalation process.",
            "Each point is scored pass/fail or on a 3-point scale (documented, verbal only, absent). A total score below 30/40 requires either remediation before contract or documented risk acceptance by the budget holder.",
          ),
          s(" The checklist is a threshold instrument, not a ranking instrument. Minimum threshold for contract: 30/40 with no knock-out failures."),
        ],
        [
          s("Four knock-out items require a pass before contract regardless of total score. "),
          x(
            "1. SOC 2 Type II or equivalent security certification with AI infrastructure in scope. 2. GDPR data processing agreement (for EU personal data deployments). 3. Copyright indemnification (for content-generating AI). 4. Pilot agreement with signed data access restrictions. A vendor who fails any of these four is eliminated regardless of score on other dimensions.",
            "Knock-out items are non-negotiable because the risks they address — unsecured AI infrastructure, GDPR violation, copyright liability, and uncontrolled model training on your data — cannot be adequately mitigated through contract terms alone.",
          ),
          s(" Make knock-out items explicit in the RFP functional brief so vendors can self-assess before investing in the evaluation process."),
        ],
        [
          s("Conduct due diligence reviews at three points in the procurement lifecycle: before the pilot, before the full contract, and annually during the contract term. "),
          x(
            "Pre-pilot: focus on knock-out items and AI-specific dimensions. A vendor who fails pre-pilot due diligence does not enter the pilot. Pre-contract: full 40-point checklist, with documentation completeness as a gate. Annual: refresh financial stability, certification currency, and compliance posture against current regulation — because AI regulation is changing faster than the software itself.",
            "Annual due diligence reviews are the most commonly skipped step in AI governance. Vendors who were compliant at contract signature may be non-compliant with new regulations 18 months later — and you may be contractually exposed for continuing to use a non-compliant system.",
          ),
          s(" Schedule annual due diligence reviews at contract signature, not when you remember to do them."),
        ],
      ],
      examples: [
        {
          title: "40-point checklist knock-out in action",
          body: "A logistics company completed a 40-point AI due diligence checklist for a route optimisation vendor. The vendor scored 34/40 on total score — above the 30-point threshold. However, the vendor failed the copyright indemnification knock-out: they used a foundation model to generate route narratives for driver briefings and offered no indemnification for the generated content. The logistics company's legal team determined the copyright exposure was unacceptable. The vendor was eliminated despite a strong overall score. A vendor who scored 31/40 but passed all four knock-out items proceeded to pilot.",
        },
        {
          title: "Annual review catches compliance gap",
          body: "A financial services firm's annual due diligence review of an AI credit scoring vendor — conducted 16 months after contract signature — found that new Colorado AI bias testing requirements applied to the vendor's system. The vendor had not updated their bias audit methodology to include the Colorado-specific demographic testing required under the new law. The vendor had 90 days to comply before the firm's Colorado-based customers were affected. The annual review, not a vendor notification, surfaced the gap. The firm used the compliance gap as leverage to negotiate a fee reduction in exchange for extending the contract term.",
        },
        {
          title: "Board review uses checklist as evidence",
          body: "A board member of a healthcare company asked the management team to justify their AI diagnostics vendor selection at a quarterly board meeting. The CEO presented the 40-point due diligence checklist showing: 37/40 score, three documented gaps with mitigation plans, all four knock-out items passed, and a signed pilot agreement with 85% accuracy success criterion met. The board member concluded the selection was made with appropriate rigour and moved on. Without the checklist, the conversation would have been a subjective defence of the selection process.",
        },
      ],
    }),
  ],
  quiz: [
    {
      q: "Which of the following is NOT one of the five AI-specific due diligence dimensions that go beyond standard software vendor review?",
      options: [
        "Model governance",
        "Training data provenance",
        "Vendor employee headcount",
        "Output liability",
      ],
      correct: 2,
      correctFeedback: "Correct. Vendor employee headcount is a standard vendor assessment metric, not an AI-specific due diligence dimension. The five AI-specific dimensions are model governance, training data provenance, output liability, AI safety practices, and regulatory compliance posture.",
      wrongFeedback: "The five AI-specific due diligence dimensions are model governance, training data provenance, output liability, AI safety practices, and regulatory compliance posture. Employee headcount is a general vendor assessment metric that applies to all software, not specifically to AI.",
    },
    {
      kind: "categorize",
      q: "Categorise these vendor due diligence findings as either 'Knock-out — eliminate vendor' or 'Gap — document and mitigate':",
      categories: ["Knock-out — eliminate vendor", "Gap — document and mitigate"],
      items: [
        { text: "Vendor lacks SOC 2 Type II certification for their AI training infrastructure", category: 0 },
        { text: "Vendor has no GDPR data processing agreement for EU deployment", category: 0 },
        { text: "Vendor offers no copyright indemnification for generated content", category: 0 },
        { text: "Vendor has no formal model drift monitoring policy", category: 1 },
        { text: "Vendor has no published responsible AI policy", category: 1 },
        { text: "Vendor's bias audit used a generic benchmark, not a use-case-specific test", category: 1 },
      ],
      correctFeedback: "Correct. Knock-out findings (SOC 2 scope gap, no GDPR DPA, no copyright indemnification) represent risks that cannot be adequately mitigated through contract terms. Gap findings can be addressed through contractual commitments and monitoring.",
      wrongFeedback: "Knock-out findings address risks so fundamental that no contract clause can adequately mitigate them. Gap findings represent areas where contractual commitments and monitoring plans can reduce residual risk to an acceptable level.",
    },
    {
      q: "A vendor displays a SOC 2 Type II badge on their website. What additional question must a business leader ask to determine whether this certification is relevant to an AI deployment?",
      options: [
        "'How long have you had your SOC 2 certification?'",
        "'Is your AI model training infrastructure included in your SOC 2 audit scope?'",
        "'Which auditing firm conducted your SOC 2 review?'",
        "'What is your SOC 2 certification renewal date?'",
      ],
      correct: 1,
      correctFeedback: "Correct. A SOC 2 badge confirms that audited controls were operating effectively — but only for the infrastructure included in the audit scope. AI training infrastructure is often excluded from SOC 2 scope. If the training environment is excluded, the badge does not cover the highest-risk AI-specific environment.",
      wrongFeedback: "The critical question is whether the AI training infrastructure is in scope. A SOC 2 badge for an application environment that excludes the model training pipeline does not address the AI-specific security risk.",
    },
    {
      kind: "order",
      q: "Order these due diligence steps in the correct sequence for an AI procurement:",
      items: [
        "Build compliance matrix identifying all applicable regulations by jurisdiction",
        "Send vendor due diligence questionnaire covering five AI-specific dimensions",
        "Review vendor disclosure form responses against RFP claims",
        "Score vendor against 40-point checklist and identify knock-out failures",
        "Document all gaps with mitigation plans before contract signature",
      ],
      prompt: "Drag to arrange in the correct sequence",
      correctFeedback: "Correct. The sequence runs from regulatory mapping (know what you need) through questionnaire (gather evidence) through disclosure review (validate claims) through scoring (assess completeness) to gap documentation (manage residual risk).",
      wrongFeedback: "Due diligence follows a specific sequence: map regulatory requirements first, then gather vendor evidence, then validate claims, then score against criteria, then document gaps before committing to a contract.",
    },
    {
      q: "Why must a bias audit be conducted on your specific use case rather than the vendor's generic benchmark?",
      options: [
        "Generic benchmarks are always statistically invalid and cannot be trusted",
        "A vendor's generic benchmark may show equal accuracy across demographic groups while your use case has biased outputs for your specific task and population",
        "Regulators require use-case-specific bias audits before any AI deployment",
        "Generic benchmarks test accuracy, not bias, so they are irrelevant to demographic fairness",
      ],
      correct: 1,
      correctFeedback: "Correct. A model may show equal accuracy on a generic benchmark while producing systematically biased outputs on your specific use case — because your use case, data distribution, and affected population may differ materially from the benchmark conditions.",
      wrongFeedback: "The problem with generic benchmarks is that your use case has a specific task (e.g., hiring for technical roles) and a specific population (e.g., your applicant pool) that may differ from the benchmark conditions. Bias in your context requires testing in your context.",
    },
    {
      q: "What is the primary purpose of an annual AI vendor due diligence review after contract signature?",
      options: [
        "To renegotiate the contract price at each renewal cycle",
        "To assess whether new AI regulations have made the vendor's system non-compliant in your jurisdiction since contract signature",
        "To evaluate whether a competitor's product has become superior to the contracted vendor",
        "To review the vendor's customer success team performance metrics",
      ],
      correct: 1,
      correctFeedback: "Correct. AI regulation is evolving faster than software contracts. A vendor who was compliant at signature may be non-compliant with new regulations 18 months later. Annual reviews detect these compliance gaps before they become enforcement risks.",
      wrongFeedback: "Annual due diligence reviews primarily address the regulatory compliance gap risk: AI regulation changes faster than software contracts. A vendor compliant at signature may be non-compliant with a new law or regulation that applies to their system 18 months later.",
    },
  ],
});
