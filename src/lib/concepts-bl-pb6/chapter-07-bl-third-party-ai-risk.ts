import { buildChapter, buildSection, s, x, BL_CALLOUT, sectionWithDiagram } from "../concepts-bl-helpers";

export const chapter07BlThirdPartyAiRisk = buildChapter({
  slug: "bl-third-party-ai-risk",
  number: 7,
  shortTitle: "Third-Party AI Risk",
  title: "Third-Party AI Risk — Managing Vendors, APIs, and Supply Chain AI Exposure",
  readingMinutes: 22,
  summary:
    "Most enterprise AI is not built in-house — it is procured from vendors, consumed as APIs, or embedded in SaaS platforms. Every third-party AI introduces risks that the deploying organisation is legally and operationally responsible for. Business leaders who manage vendor commercial relationships without AI-specific risk governance own the liability for AI failures they never caused.",
  keyTakeaway:
    "Third-party AI risk has four dimensions: vendor compliance (are they meeting regulatory obligations on your behalf), concentration risk (how dependent is your operation on a single AI provider), supply chain risk (what AI is in the tools your vendors use), and contractual risk (does your contract protect you when the AI fails). All four require active management.",
  pmCallout: BL_CALLOUT,
  sections: [
    sectionWithDiagram({
      number: "7.1",
      title: "Why Third-Party AI Risk Is Different",
      subtitle: "The specific risks that arise when AI capabilities are provided by external parties — and why standard vendor risk management misses them",
      take: "Standard vendor risk management covers service availability, data security, and financial stability. Third-party AI risk adds four AI-specific dimensions: model opacity (you cannot inspect the AI's decision logic), model drift (the AI's performance may degrade without any service disruption), compliance transfer (the vendor's regulatory obligations transfer to you as deployer), and training data risk (the AI may have been trained on data that creates liability).",
      why: "Vendor risk management teams assess software vendors using standard frameworks. AI vendors require additional assessment dimensions that standard frameworks do not cover. The gap between standard vendor assessment and AI-specific assessment is where material risk lives.",
      paragraphs: [
        [
          s("Model opacity means you cannot inspect what the vendor's AI is actually doing. "),
          x(
            "For standard software, a vendor's product behaves according to documented specifications that can be tested and verified. For AI systems, the model's behaviour emerges from training data and model weights that you cannot inspect. Vendor performance specifications describe expected behaviour — they do not guarantee specific outputs for specific inputs.",
            "This opacity makes vendor testing more important and less conclusive: you can test performance on a representative sample, but you cannot test all possible inputs. The vendor's AI system may behave unexpectedly on inputs outside the test distribution.",
          ),
          s(" Vendor AI testing must include out-of-distribution inputs and edge cases — testing only representative samples misses the opacity risk that produces unexpected failures."),
        ],
        [
          s("Compliance transfer means the deploying organisation is responsible for regulatory compliance regardless of vendor compliance status. "),
          x(
            "When a vendor provides an AI system used to make decisions about your customers or employees, you are the deployer under GDPR, the EU AI Act, and sector-specific regulations. Vendor GDPR compliance does not satisfy your GDPR compliance obligations. Vendor EU AI Act conformity documentation does not replace your deployer obligations for human oversight and transparency.",
            "The compliance transfer principle is the source of the most common third-party AI risk misunderstanding: 'our vendor is GDPR compliant, so we are covered.' This is wrong — vendor compliance and deployer compliance are distinct obligations, both required.",
          ),
          s(" Map every third-party AI system to its deployer compliance obligations — vendor compliance addresses provider obligations, not your deployer obligations. Both must be met."),
        ],
        [
          s("Training data risk exists for any AI vendor who trained their model on data that may create liability. "),
          x(
            "If a vendor's AI model was trained on data that includes personal data without adequate lawful basis, copyrighted content without license, or biased historical decisions, the resulting model carries that liability into your operations when you deploy it. You cannot inspect the training data — you are relying on vendor disclosure.",
            "The EU AI Act's GPAI provisions and the growing body of AI copyright litigation have made training data provenance a standard due diligence question. Vendors who cannot answer specific questions about training data provenance are hiding risk that transfers to you on deployment.",
          ),
          s(" Require training data provenance documentation from all AI vendors as part of due diligence — inability to answer specific provenance questions is a due diligence red flag."),
        ],
      ],
      examples: [
        {
          title: "Workday AI — compliance transfer in HR AI",
          body: "Workday's EU AI Act compliance documentation for its talent management suite covers Workday's obligations as a provider — conformity assessment, technical documentation, and transparency. However, deploying organisations are responsible for: human oversight architecture (ensuring HR staff are trained and have override authority), transparency to job candidates about AI use, and data protection impact assessments for their specific deployment configuration. A Workday compliance certificate does not satisfy these deployer obligations. Business leaders using Workday for EU hiring must independently meet deployer requirements.",
        },
        {
          title: "Training data copyright litigation — Getty vs. Stability AI",
          body: "Getty Images filed suit against Stability AI in 2023, alleging that Stability AI's image generation model was trained on Getty's copyrighted images without license. The case established that training data copyright risk is a real liability for AI vendors — and, by extension, for organisations deploying AI products built on unlicensed training data. Business leaders deploying image generation AI in content production workflows should require training data copyright documentation as standard due diligence.",
        },
        {
          title: "API vendor opacity — financial services AI",
          body: "A UK wealth management firm deployed a third-party AI model for client portfolio recommendations. The vendor's model was a black-box API — the firm received recommendation outputs without explanation of the contributing factors. An FCA Consumer Duty review found the firm could not demonstrate it understood how recommendations were generated or that they were in clients' interests. The firm was required to either obtain explainability documentation from the vendor or switch to an interpretable model. Vendor opacity is a regulatory risk for the deploying firm, not just a technical inconvenience.",
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
    sectionWithDiagram({
      number: "7.2",
      title: "Third-Party AI Due Diligence",
      subtitle: "The seven due diligence questions that every AI vendor procurement requires — before contract signature",
      take: "Third-party AI due diligence requires seven questions beyond standard software procurement assessment: training data provenance, bias testing results, explainability architecture, regulatory compliance documentation, model update and drift management, incident history and response, and data rights and portability. A vendor who cannot answer all seven has undisclosed risks.",
      why: "Standard software procurement due diligence — security, uptime, financial stability, references — does not cover AI-specific risks. The gap between standard and AI-specific due diligence is where material risk enters your AI supply chain.",
      paragraphs: [
        [
          s("Questions 1–3 address model quality and transparency. "),
          x(
            "Question 1: Training data provenance — what data was the model trained on, are there copyright or privacy issues with the training data, and is a training data summary available? Question 2: Bias testing — what bias tests were conducted, what were the results disaggregated by protected characteristics, and what bias monitoring is in place post-deployment? Question 3: Explainability — what explanation methodology is used, at what level of granularity, and can individual decisions be explained to the standard required by applicable regulation?",
            "Vendors who answer questions 1–3 with marketing language rather than specific documentation are concealing risk. Require specific documentation with each answer: training data summary, bias test results report, and explanation methodology specification.",
          ),
          s(" Questions 1–3 require specific documentation, not narrative answers — a vendor who cannot provide documentation for these three questions has not conducted adequate AI governance."),
        ],
        [
          s("Questions 4–5 address regulatory compliance and model management. "),
          x(
            "Question 4: Regulatory compliance — what EU AI Act classification has been assessed, is a conformity assessment completed for high-risk classification, and what GDPR processing obligations are acknowledged in the data processing agreement? Question 5: Model update and drift management — how frequently is the model retrained, who triggers retraining, what is the notification process for material model updates, and what is the SLA on performance recovery after a drift event?",
            "Question 5 is the most commonly omitted in procurement diligence: vendors who update their models without customer notification are changing the AI system you are deploying without your knowledge or governance review.",
          ),
          s(" Require vendor notification of material model updates as a contractual obligation — undisclosed model changes are a governance risk that your change management process cannot catch without notification."),
        ],
        [
          s("Questions 6–7 address incident history and data rights. "),
          x(
            "Question 6: Incident history — have there been material AI incidents involving this system in the last three years, how were they resolved, and what is the incident notification SLA to customers? Question 7: Data rights — what rights do you have to your interaction data, can the vendor train its general model on your data (and if so, under what terms), and can you export your data and model outputs for portability?",
            "Question 7 is increasingly important as AI vendor lock-in becomes a strategic risk: organisations that cannot export their AI-generated data or models have no practical ability to switch vendors, regardless of contract terms.",
          ),
          s(" Negotiate data portability rights in every AI vendor contract — the ability to switch vendors is a strategic business continuity requirement, not a future-proofing nicety."),
        ],
      ],
      examples: [
        {
          title: "AI hiring tool — due diligence in practice",
          body: "A global retailer's procurement team ran the seven-question due diligence framework on three finalist AI hiring tool vendors. Vendor A provided complete documentation for all seven questions. Vendor B could not provide bias test results (Question 2) and had no data portability clause in its standard contract (Question 7). Vendor C had an outstanding incident from 2023 (Question 6) involving biased candidate scoring that had not been disclosed in the sales process. Vendor A was selected — not the lowest cost, but the only vendor who passed the full due diligence. Two of the seven questions eliminated vendors that had passed standard software procurement assessment.",
        },
        {
          title: "Model update without notification — operational impact",
          body: "A financial services firm's AI customer service categorisation model produced unexpected output category changes in production. Investigation revealed the vendor had updated the model without notification — a permitted action under the standard contract. The model update changed categorisation thresholds that the firm's downstream workflows depended on, causing 1,200 customer contacts to be misrouted over four days. Post-incident: the contract was amended to require 30-day advance notification of any material model update, with a customer option to remain on the previous version for 60 days while validating the new version.",
        },
        {
          title: "Data portability negotiation",
          body: "A professional services firm's legal team identified that its AI document management vendor's standard contract granted the vendor a perpetual licence to all interaction data, with no data export functionality. If the firm wanted to switch vendors, five years of AI-processed document metadata would remain with the vendor. Renegotiation achieved: (1) data export functionality within 30 days of request; (2) prohibition on vendor retaining data after contract termination; (3) no vendor right to train its general model on the firm's documents. The negotiation took three weeks — significantly less time than being locked into a vendor relationship with no practical exit.",
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
      number: "7.3",
      title: "AI Vendor Contracts — What Must Be in Them",
      subtitle: "The contractual provisions that protect you when third-party AI fails — and the gaps in standard vendor agreements",
      take: "Standard SaaS vendor contracts are not designed for AI risk. They cover uptime, data security, and support — not model performance, bias obligations, explainability requirements, or compliance co-operation. AI-specific contractual provisions must be negotiated before contract signature — they are very difficult to add after deployment.",
      why: "Vendor contracts are the primary legal protection when third-party AI fails. Standard contracts protect the vendor, not the deployer. Negotiating AI-specific provisions shifts risk appropriately and creates the cooperation mechanisms that enforcement investigations and litigation require.",
      paragraphs: [
        [
          s("Model performance provisions: SLAs that cover AI accuracy, not just uptime. "),
          x(
            "Standard SaaS SLAs measure service availability (99.9% uptime). AI performance requires additional metrics: accuracy or precision against defined benchmarks, bias performance against fairness thresholds, explanation availability rate, and response time. Each metric needs a defined threshold, a measurement methodology, and a contractual consequence for sustained breach.",
            "AI performance SLAs are negotiable but vendors resist them because they create accountability for model quality. Requiring them is a signal of governance sophistication and typically produces better vendor engagement on model quality management.",
          ),
          s(" Require AI-specific performance SLAs in addition to standard uptime SLAs — accuracy, fairness, and explainability metrics with defined thresholds and remediation obligations."),
        ],
        [
          s("Compliance co-operation provisions: vendor obligations when you face regulatory scrutiny. "),
          x(
            "When a regulator investigates an AI system you have deployed, the investigation will require documentation from your vendor: conformity documentation, bias test results, training data summaries, incident reports, and model architecture details. Without a contractual obligation to provide this documentation, vendors have no legal obligation to cooperate with your regulatory defence.",
            "Compliance co-operation provisions should include: vendor obligation to provide specified documentation within defined timelines on request; vendor obligation to participate in regulatory enquiries relating to their AI system; and notification obligations to you when the vendor becomes aware of regulatory investigation or material compliance issue affecting the deployed system.",
          ),
          s(" Compliance co-operation provisions are insurance clauses — negotiate them proactively, as they are impossible to add after a regulatory investigation begins."),
        ],
        [
          s("Liability and indemnification provisions: who bears the cost when AI causes harm. "),
          x(
            "Standard vendor contracts typically cap liability at the contract value and exclude AI-specific failure modes from indemnification. AI-specific liability provisions should cover: indemnification for claims arising from vendor bias in the AI model; indemnification for compliance failures directly caused by vendor non-compliance with stated regulatory obligations; and liability for AI model failures directly attributable to vendor training data issues.",
            "Vendors will resist broad AI liability provisions — negotiation will produce narrower clauses than ideal. Even a narrowly-drawn indemnification for vendor training data copyright issues is significantly more protection than the standard contract's complete liability exclusion.",
          ),
          s(" Push for AI-specific indemnification provisions even if the final negotiated clause is narrow — some contractual protection for vendor-caused AI liability is substantially better than none."),
        ],
      ],
      examples: [
        {
          title: "Insurance company — AI performance SLA negotiation",
          body: "An insurance company negotiating a contract for an AI claims assessment tool required: (1) accuracy SLA — precision above 87% on held-out validation set, measured quarterly; (2) bias SLA — demographic parity disparity below 20% across age and gender, measured quarterly; (3) explanation availability rate — 99% of decisions generate compliant SHAP explanation within 500ms. The vendor's initial position was no performance SLAs beyond standard uptime. After two negotiation rounds, all three SLAs were agreed with a tiered remedy structure: single-quarter breach = remediation plan required; two consecutive quarters = fee reduction of 20%; three consecutive quarters = termination right.",
        },
        {
          title: "Regulatory investigation — compliance co-operation clause in action",
          body: "A UK employer faced an EHRC investigation into its AI hiring tool. Under the compliance co-operation clause in its vendor contract, the vendor was obligated to provide: the conformity assessment documentation, bias test results for the past 24 months, and incident reports relating to the system. The vendor initially resisted, citing client confidentiality. The legal team cited the contractual clause; the vendor complied within the contractual 15-day response period. The documentation provided was central to the employer's evidence of due diligence. Without the contractual clause, the employer would have had no mechanism to compel vendor cooperation.",
        },
        {
          title: "Training data copyright indemnification",
          body: "A media company using an AI content generation tool negotiated a training data copyright indemnification clause: if any copyright claim arising from the vendor's training data required the company to pay damages or legal costs, the vendor would indemnify the company for costs directly attributable to the vendor's training data. When a copyright claim was filed against both the company and the vendor for AI-generated images, the vendor's indemnification covered the company's legal costs — £85K. Without the clause, the standard contract's liability cap of 12 months' subscription fees would have applied — approximately £36K, significantly less than the actual costs incurred.",
        },
      ],
    }),
    buildSection({
      number: "7.4",
      title: "AI Concentration Risk",
      subtitle: "The strategic risk of dependence on a small number of AI providers — and how to manage it",
      take: "AI concentration risk is the enterprise exposure created by dependence on a small number of AI providers — particularly the handful of hyperscale AI platforms (OpenAI, Google, Microsoft, Anthropic). Disruption, pricing change, or policy change by a hyperscale provider can immediately affect AI-dependent operations at scale. Business leaders must manage concentration risk as a strategic, not just operational, risk.",
      why: "The strategic dependency on AI platforms is growing faster than awareness of the concentration risk it creates. Leaders who have not mapped their concentration exposure across the AI supply chain are carrying strategic risk they cannot quantify.",
      paragraphs: [
        [
          s("Concentration risk has three dimensions: vendor, model, and API dependency. "),
          x(
            "Vendor concentration: over-dependence on a single AI vendor for multiple critical functions. Model concentration: over-dependence on a single AI model (GPT-4, Claude, Gemini) across multiple use cases. API concentration: critical operations dependent on a single AI API without fallback.",
            "Each dimension requires different mitigation: vendor diversification (using multiple AI vendors by function), model diversification (testing and validating alternative models for critical use cases), and API redundancy (fallback API or operational mode for critical AI-dependent workflows).",
          ),
          s(" Map your AI concentration exposure across all three dimensions — vendor, model, and API — before designing mitigation. You cannot manage what you have not measured."),
        ],
        [
          s("Hyperscale provider policy changes can affect operations immediately. "),
          x(
            "AI hyperscale providers periodically change their terms of service, acceptable use policies, and model capabilities. GPT-4's API capability changes, OpenAI's content policy updates, and Google Gemini's geographic availability restrictions have all affected enterprise customers without advance notice sufficient for operational planning.",
            "Business leaders whose customer-facing or operational AI is fully dependent on a single hyperscale provider API have no operational buffer when policy changes affect their use case. Provider policy risk is not a standard software risk — traditional software does not change its capabilities based on the vendor's content moderation decisions.",
          ),
          s(" Maintain awareness of hyperscale AI provider policy change history when assessing concentration risk — their pattern of policy changes is the best predictor of future operational disruption."),
        ],
        [
          s("Business continuity planning must address AI dependency scenarios. "),
          x(
            "Business continuity plans that address IT system failures but not AI system failures are incomplete in an AI-dependent operational environment. BCP scenarios should include: primary AI vendor outage (extended), AI vendor policy change making a use case unavailable, AI vendor security incident causing temporary suspension, and AI model performance degradation requiring emergency fallback.",
            "For each AI-dependent critical process, the BCP should define the fallback mode (manual process, alternative AI provider, reduced-capability operation) and the maximum tolerable downtime before the fallback must be activated.",
          ),
          s(" Update business continuity plans to include AI dependency scenarios — AI BCP is not the same as IT BCP, and the fallback architectures are fundamentally different."),
        ],
      ],
      examples: [
        {
          title: "OpenAI terms change — commercial impact",
          body: "OpenAI's 2023 terms of service update included changes to acceptable use policy that restricted certain content generation categories relevant to adult entertainment and medical advice use cases. Several companies had built products on the OpenAI API for these use cases and faced operational disruption requiring rapid migration to alternative providers. The migration took 4–8 weeks for most affected companies — during which time the affected products were non-functional. Business leaders whose revenue-generating products depend on a single AI API should maintain validated fallback options at all times.",
        },
        {
          title: "Financial services API redundancy",
          body: "A retail bank using an AI API for real-time fraud scoring maintained a validated fallback to a rule-based fraud detection system for API outages. When an extended OpenAI API outage affected the bank's fraud enrichment workflow in 2024, the fallback activated automatically within 2 minutes, maintaining fraud scoring with slightly lower accuracy than the AI system. The bank's BCP specified: AI API outage under 4 hours — fallback to rules; outage 4–24 hours — escalate to manual review for high-value transactions; outage over 24 hours — activate manual review for all transactions above £500. The tiered fallback architecture was tested quarterly.",
        },
        {
          title: "NHS — model concentration risk",
          body: "An NHS trust using a single AI vendor's diagnostic support tool for three separate clinical functions (radiology, pathology, and A&E triage) identified that a vendor-wide technical failure would affect all three clinical functions simultaneously. A model concentration risk assessment led to: a requirement to source at least two of the three functions from different vendors; and a manual protocol backup for each clinical function that was tested semi-annually. The assessment was conducted before a vendor failure occurred — not in response to one.",
        },
      ],
    }),
    buildSection({
      number: "7.5",
      title: "AI Supply Chain Risk",
      subtitle: "The AI embedded in your vendors' products — and the risk it carries into your operations",
      take: "AI supply chain risk arises from the AI embedded in the software, services, and APIs your vendors provide — without you necessarily knowing it is there. A GDPR-compliant data processor who deploys AI to process your personal data without your knowledge may be violating your data processing agreement. Supply chain AI risk requires active discovery, not passive assumption.",
      why: "GDPR requires data controllers to know what their processors are doing with personal data — including if they are using AI. EU AI Act supply chain provisions extend similar obligations for AI systems. Leaders who have not conducted AI supply chain discovery are carrying undisclosed risk from vendors they have already approved.",
      paragraphs: [
        [
          s("Most enterprise software now includes AI features — many deployed without explicit customer notification. "),
          x(
            "Microsoft 365 added Copilot AI features to existing enterprise licenses. Salesforce embedded AI throughout its CRM platform. Zendesk deployed AI customer service automation. Each of these AI additions changed the data processing activities covered by existing data processing agreements — and potentially introduced AI systems with regulatory obligations the customer had not assessed.",
            "Organisations with comprehensive data processing agreements signed in 2021 may have significant unassessed AI processing activities under those agreements — because the vendors added AI features after the agreements were executed.",
          ),
          s(" Conduct an annual review of all data processing agreements against vendors' current AI feature set — AI features added since the agreement was signed may require DPIA, DPA amendment, or EU AI Act assessment."),
        ],
        [
          s("Sub-processor AI risk: your vendor's vendor may be using AI to process your data. "),
          x(
            "GDPR's sub-processor provisions require data processors to obtain controller authorisation before engaging sub-processors. Sub-processors include AI APIs used by your vendor to process your data — if your document management vendor uses an AI API to process your documents, the AI API provider is a sub-processor.",
            "Sub-processor AI assessments are rarely conducted systematically: organisations approve sub-processor lists without reviewing whether sub-processors are using AI and whether those AI systems comply with applicable obligations.",
          ),
          s(" Request AI disclosure from data processors as part of annual sub-processor review: identify any AI systems used to process your data and assess compliance with your data processing obligations."),
        ],
        [
          s("Software security supply chain AI risk: AI embedded in development tools and pipelines. "),
          x(
            "AI coding assistants (GitHub Copilot, Cursor, Claude Code) that suggest code trained on public repositories may introduce intellectual property risk into proprietary codebases. AI security scanning tools embedded in CI/CD pipelines may process proprietary source code. AI-powered infrastructure management tools may make autonomous operational changes.",
            "Technology leaders should inventory AI tools embedded in development and operations pipelines — these introduce both IP risk (training on proprietary code) and data risk (processing sensitive operational data through external AI APIs) that standard security reviews may not assess.",
          ),
          s(" Include AI tools in the development and operations pipeline in the AI inventory — security and IP risk from developer-facing AI is as material as customer-facing AI risk."),
        ],
      ],
      examples: [
        {
          title: "Microsoft 365 Copilot — supply chain AI assessment",
          body: "Multiple organisations discovered upon the Copilot rollout in their Microsoft 365 tenants that the AI processed existing emails, documents, and Teams communications to generate summaries and recommendations. Several DPOs required a DPIA for the Copilot deployment and identified that the DPA with Microsoft needed updating to cover AI processing activities. The discovery post-dated Copilot enablement for some tenants — creating a period of unassessed AI processing. Annual AI supply chain review would have identified the Copilot deployment before its effects on data processing activities were realised.",
        },
        {
          title: "Legal firm — sub-processor AI in document management",
          body: "A law firm's document management vendor disclosed in its sub-processor list that it used an AI API to provide automated document classification and redaction features. The AI API processed client documents — highly sensitive personal and legal data — as a sub-processor. The firm's data processing agreement did not cover AI processing activities. A DPIA was required for the AI document processing, and the sub-processor clause required amendment to specify the AI processing scope and restrictions. The discovery occurred during an annual sub-processor review — the mechanism that caught it before a client complaint or regulator investigation.",
        },
        {
          title: "Software development — GitHub Copilot IP risk",
          body: "A technology company's security team identified that developers were using GitHub Copilot in the development of a proprietary algorithmic trading system. Copilot's training on public code and its suggestion mechanism raised a concern: could proprietary trading logic be inadvertently suggested to other Copilot users who prompted similar patterns? The firm restricted Copilot use to non-proprietary development contexts and required manual code review for any AI-assisted contribution to the trading system. The IP risk was identified through the AI supply chain inventory review, not the standard security review process.",
        },
      ],
    }),
    buildSection({
      number: "7.6",
      title: "Vendor Monitoring and Ongoing Management",
      subtitle: "How to maintain AI vendor risk oversight throughout the contract lifecycle — not just at procurement",
      take: "AI vendor risk is not static — it changes as models are updated, regulations evolve, incidents occur, and vendors' own AI governance matures or deteriorates. Ongoing vendor monitoring for AI risk requires specific triggers and review processes beyond the standard vendor performance review.",
      why: "Most organisations conduct AI vendor due diligence at procurement and do not return to AI-specific assessment until contract renewal. Eighteen months of model updates, regulatory changes, and vendor compliance developments can materially change the risk profile of a deployed AI system without triggering a review.",
      paragraphs: [
        [
          s("AI-specific vendor monitoring events that should trigger immediate review. "),
          x(
            "Model update notification (any material update to the AI model requires a governance review of the change's impact on your deployment). Vendor regulatory action (any enforcement action or regulatory correspondence involving the vendor's AI practices). Vendor security incident involving AI systems. Published research identifying bias, safety, or capability concerns about the AI model you are using. Vendor terms of service or acceptable use policy change affecting your use case.",
            "These events are not covered by standard vendor performance monitoring — they require an AI-specific watch list and monitoring mechanism. Google Alerts for vendor name and regulatory terms, subscription to AI safety research newsletters, and direct vendor communication channels for model update notifications are practical monitoring mechanisms.",
          ),
          s(" Establish AI-specific vendor monitoring mechanisms beyond standard performance dashboards — regulatory actions, research findings, and model updates are AI risk signals not captured in standard vendor monitoring."),
        ],
        [
          s("Annual AI vendor governance review should cover more than contract renewal preparation. "),
          x(
            "Annual AI vendor governance review should include: updated bias test results (has the model's fairness performance changed since deployment), updated regulatory compliance status (have EU AI Act or sector obligations changed or been updated), review of model update history (what changes occurred and were they governed), incident history (any bias findings, performance failures, or regulatory inquiries), and data rights compliance (is data processing within the contracted and GDPR-compliant scope).",
            "Annual reviews that only cover commercial terms and service availability metrics are leaving AI-specific risk changes undetected for 12-month periods — in a rapidly evolving regulatory environment, that is an unacceptable monitoring gap.",
          ),
          s(" Restructure annual vendor reviews for AI vendors to include AI-specific dimensions — bias test updates, regulatory compliance status, model update history, and data rights compliance alongside standard commercial and performance review."),
        ],
        [
          s("Vendor exit planning is AI risk management. "),
          x(
            "Vendor exit — switching AI providers — is significantly more complex than switching standard software vendors. AI-specific exit considerations include: data portability (can you export all AI-processed data), model portability (can you export any custom model fine-tuned on your data), operational continuity during transition (what is the transition period without the AI system), and regulatory continuity (does the transition maintain GDPR processing compliance).",
            "Organisations that negotiate exit provisions in AI vendor contracts — data export timelines, transition support obligations, and overlapping service periods — have practical exit options. Those without exit provisions discover during transition that exit is operationally infeasible without significant disruption.",
          ),
          s(" Negotiate vendor exit provisions in every AI vendor contract before deployment — data portability, model export rights, and transition support are exit governance requirements, not future commercial negotiation items."),
        ],
      ],
      examples: [
        {
          title: "Annual AI vendor review — bias test update discovery",
          body: "A bank's annual AI vendor review for its mortgage risk AI included a request for updated bias test results from the vendor. The vendor's current results showed a demographic parity disparity of 22% for applicants over 65 — an increase from 14% in the prior year's results. The bank's governance threshold for age parity was 20%. The review triggered a vendor remediation obligation and a requirement to apply enhanced human review for applicants over 65 while the vendor remediated. Without the annual bias test update request, the threshold breach would not have been detected until the next internal audit — 8 months later.",
        },
        {
          title: "Vendor exit negotiation — data portability",
          body: "A professional services firm negotiating an AI contract required a data portability exit clause: within 60 days of contract termination, the vendor must provide all data in a standard machine-readable format, and all AI-generated outputs must be exportable in a specified schema. The vendor's standard contract offered no data export provisions — exit meant data abandonment. The negotiated clause was exercised two years later when the firm switched vendors: all data exported in 45 days, with zero operational disruption to the workflows dependent on historical AI outputs.",
        },
        {
          title: "Vendor regulatory action — immediate review trigger",
          body: "A UK insurer discovered through a Google Alert that its AI underwriting vendor had received a corrective notice from the French CNIL for GDPR processing violations affecting the same model deployed in the UK. The alert triggered an immediate vendor review: the insurer requested the full regulatory correspondence and the vendor's remediation plan, reviewed the specific violations against its own deployment configuration, and determined that two of the four violations were present in its UK deployment. Immediate remediation prevented the UK deployment from receiving a parallel ICO notice. The monitoring mechanism — a Google Alert, not a sophisticated tool — caught a compliance risk that would have been invisible without it.",
        },
      ],
    }),
    buildSection({
      number: "7.7",
      title: "Open-Source AI Risk",
      subtitle: "The specific risks of deploying open-source AI models — and why open-source does not mean low-risk",
      take: "Open-source AI models (Meta's Llama, Mistral, Falcon) are increasingly deployed by organisations seeking cost control and data sovereignty. Open-source deployment transfers the full provider obligation to the deploying organisation — including training data risk, bias testing, conformity assessment, and regulatory compliance. Open-source AI is not lower-risk; it is different-risk.",
      why: "Leaders who select open-source AI for cost or data control reasons often discover they have transferred all provider obligations to their internal team — typically without the AI governance expertise to meet those obligations. Open-source AI deployment decisions require the same governance assessment as vendor AI procurement.",
      paragraphs: [
        [
          s("Open-source AI deployment makes the deploying organisation the AI provider for regulatory purposes. "),
          x(
            "Under the EU AI Act, if an organisation deploys an open-source model in a high-risk use case, the organisation is the provider of the high-risk AI system — responsible for conformity assessment, technical documentation, CE marking, and all other provider obligations. The model developer (Meta, Mistral) retains no EU AI Act provider obligation for downstream commercial deployment.",
            "This is the critical distinction: open-source developers publish the model; they do not take on provider obligations for your commercial deployment of it. You do.",
          ),
          s(" Before deploying any open-source AI model in a high-risk use case, classify the deployment under the EU AI Act and assess the full provider obligation — do not assume open-source exempts you from provider requirements."),
        ],
        [
          s("Training data risk is often higher for open-source models than commercial models. "),
          x(
            "Commercial AI vendors are motivated by litigation risk to document training data provenance and obtain appropriate rights. Open-source model developers have historically been less rigorous — Meta's Llama training data, for example, includes public web scraping with less structured rights clearance than commercial offerings.",
            "Deploying open-source models for content generation without reviewing published training data documentation creates copyright and personal data processing risk that commercial model documentation requirements are designed to address.",
          ),
          s(" Require training data provenance review for any open-source model before deployment in content generation or personal data processing use cases — the risk is real, and the documentation exists for most major models."),
        ],
        [
          s("Fine-tuning and RAG add organisation-specific risk dimensions to open-source deployment. "),
          x(
            "Organisations that fine-tune open-source models on their own data or deploy them with retrieval-augmented generation (RAG) on proprietary document repositories are adding organisation-specific risk: the fine-tuning data's GDPR compliance, the RAG document corpus's access controls, and the combined model's performance on the organisation's specific use case.",
            "Fine-tuning and RAG deployment require a model card documenting the organisation-specific training additions, a DPIA covering the fine-tuning data processing, and bias testing on the combined model's outputs — a governance requirement that applies to the fine-tuned version, not just the base open-source model.",
          ),
          s(" Treat fine-tuned open-source models as new AI systems requiring full governance — the base model's governance documentation does not cover your fine-tuning additions."),
        ],
      ],
      examples: [
        {
          title: "Financial services — open-source LLM deployment governance",
          body: "A UK financial services firm deployed Meta's Llama model for internal document summarisation, attracted by data sovereignty (no data leaving premises) and cost savings. Pre-deployment governance: EU AI Act classification (Tier 3 — internal productivity, not high-risk), training data review (published technical report reviewed for copyright risk), GDPR lawful basis assessment (legitimate interests for employee document processing), DPIA (completed for internal document processing scope). The governance assessment took four weeks — the same process as a commercial model deployment. Data sovereignty does not reduce governance obligation.",
        },
        {
          title: "Healthcare — fine-tuning governance failure",
          body: "A healthcare provider fine-tuned Mistral on patient clinical notes to improve diagnostic documentation AI. The fine-tuning was conducted by the internal data science team without governance review — the team considered it a technical enhancement, not a new AI system. Post-deployment audit identified: the fine-tuning data processed patient personal health data without a DPIA covering the fine-tuning activity; the combined model had not been bias-tested for the clinical documentation use case; and the EU AI Act classification had not been reassessed for the clinical context (potentially high-risk medical AI). A three-month governance remediation programme followed. Fine-tuning creates a new AI system requiring new governance.",
        },
        {
          title: "Llama training data copyright review",
          body: "A media organisation considering Llama deployment for content research reviewed Meta's published training data documentation before deployment. The review identified that Llama's training data included public web content from news sources — including the organisation's own published articles. Legal review assessed the copyright risk as acceptable for research summarisation use cases (fair use/fair dealing) but unacceptable for direct content generation that produced text closely resembling source material. The organisation deployed Llama for research summarisation with output review controls, and continued to use a commercial model with explicit copyright licensing for content generation. Training data documentation enables use-case-specific risk assessment.",
        },
      ],
    }),
    buildSection({
      number: "7.8",
      title: "Building a Third-Party AI Risk Programme",
      subtitle: "A practical governance framework that extends your existing vendor risk management to cover AI-specific dimensions",
      take: "Third-party AI risk management is an extension of, not a replacement for, existing vendor risk management. The extension adds six AI-specific dimensions: AI due diligence, contract provisions, concentration risk mapping, supply chain AI discovery, ongoing AI monitoring, and exit planning. Business leaders who integrate these into existing vendor governance processes achieve AI risk coverage without building a parallel programme.",
      why: "Integrating AI risk into existing vendor governance is faster, cheaper, and more operationally sustainable than building a separate AI vendor risk programme. The integration points are clear; the incremental governance investment is modest; the risk reduction is material.",
      paragraphs: [
        [
          s("Integration point one: extend vendor due diligence with the seven AI-specific questions. "),
          x(
            "Add the seven AI due diligence questions to the standard vendor due diligence questionnaire for any procurement involving AI systems. Route responses for documentation review to the AI governance lead alongside standard IT and legal review. This integration adds minimal process overhead but catches AI-specific risks at the point where they are cheapest to address — before contract signature.",
            "Threshold: require AI-specific due diligence for any vendor providing systems that include AI features affecting personal data processing or consequential decision support, regardless of whether AI is the primary described feature of the procurement.",
          ),
          s(" Apply AI-specific due diligence to all vendor procurements that include AI features — not just those where AI is the named primary function."),
        ],
        [
          s("Integration point two: extend vendor contracts with AI-specific provisions. "),
          x(
            "Develop a standard AI addendum covering AI performance SLAs, bias obligations, explainability requirements, compliance co-operation, model update notification, data rights, and liability provisions. Apply the addendum to all new AI vendor contracts and to material contract renewals. Legal teams who have developed the addendum can negotiate it efficiently — the first negotiation of each provision is the hardest; subsequent negotiations reuse established positions.",
            "An AI contract addendum is a one-time legal investment that applies to every AI vendor contract thereafter. The return on investment — in risk reduction and enforcement protection — is clear.",
          ),
          s(" Develop a standard AI contract addendum as a one-time legal investment — the same addendum applies to all AI vendor contracts with minor customisation."),
        ],
        [
          s("Integration points three through six complete the programme. "),
          x(
            "Concentration mapping: add AI provider to the IT concentration risk register with operational impact assessments for provider disruption. Supply chain discovery: add AI disclosure to annual sub-processor review questionnaire. Ongoing monitoring: add AI-specific triggers to vendor monitoring watch list. Exit planning: add AI data portability and model export provisions to contract negotiation checklist.",
            "All six integration points can be implemented within existing governance processes — procurement, contract management, IT risk, sub-processor management, vendor monitoring, and contract administration. No new team or system is required; only AI-specific extensions to existing processes.",
          ),
          s(" All six integration points fit within existing governance processes — third-party AI risk management is a process extension, not a new programme requiring new resource."),
        ],
      ],
      examples: [
        {
          title: "Global bank — AI vendor risk framework integration",
          body: "A global bank integrated AI risk into its existing vendor risk management framework in 12 weeks: (1) AI due diligence questionnaire added to standard procurement — applied to 34 new vendor assessments in the first year; (2) AI contract addendum developed and applied to 12 contract renewals; (3) 8 AI vendors added to concentration risk register with impact assessments; (4) AI disclosure question added to sub-processor annual review — identifying 6 vendors with undisclosed AI features; (5) 4 AI-specific monitoring triggers added to vendor watch list; (6) data portability clause added to contract negotiation checklist. Total programme investment: 280 hours of legal and governance team time. Estimated risk reduction value: £2.4M in potential regulatory fine exposure addressed.",
        },
        {
          title: "AI contract addendum — first negotiation",
          body: "A professional services firm's legal team spent 6 hours drafting an AI contract addendum covering all seven AI-specific contractual provisions. The first negotiation with an HR AI vendor took 3 weeks to resolve all seven points — the vendor had not previously been required to negotiate AI-specific provisions. The second negotiation (with an AI analytics vendor) took 1 week — the firm's legal team had established positions, the vendor had reviewed the addendum in advance. Third and subsequent negotiations averaged 4 days. First negotiation investment: 3 weeks. Ongoing negotiation cost: 4 days per vendor. The addendum became a standard commercial deliverable for AI vendors dealing with the firm.",
        },
        {
          title: "Sub-processor AI discovery — annual review finding",
          body: "A financial services firm's annual sub-processor review added a question: 'Do any of your sub-processors use AI to process our data? If yes, please identify the sub-processor, the AI function, and confirm GDPR compliance documentation is available.' Four of 23 data processors identified previously undisclosed AI sub-processors. One was in scope for EU AI Act high-risk AI (an AI credit risk tool used by a data analytics sub-processor). The firm required the processor to provide EU AI Act conformity documentation from the sub-processor and updated the data processing agreement to cover the AI processing scope. Discovery mechanism: one question added to an existing annual questionnaire.",
        },
      ],
    }),
  ],
  quiz: [
    {
      q: "Your HR AI vendor provides a contract warranty that it 'complies with the EU AI Act as a provider of a high-risk AI system.' A regulatory investigation into your use of the tool begins. What is your governance position?",
      options: [
        "Strong — vendor compliance with the EU AI Act covers your regulatory exposure.",
        "Incomplete — the vendor's provider compliance does not satisfy your deployer obligations: human oversight architecture, transparency to candidates, and logging infrastructure are deployer responsibilities that exist regardless of vendor compliance. You must evidence these independently.",
        "Acceptable if you can provide the vendor's compliance documentation to the regulator.",
        "Covered — the regulator will investigate the vendor, not you.",
      ],
      correct: 1,
      correctFeedback:
        "Right. Vendor provider compliance and deployer compliance are distinct obligations under the EU AI Act. The deployer (you) must independently evidence human oversight, transparency, and logging — these cannot be delegated to the vendor. Re-read sections 7.1 and 7.3.",
      wrongFeedback:
        "The EU AI Act places distinct obligations on providers and deployers. Vendor compliance with provider obligations does not satisfy your deployer obligations. In any regulatory investigation, your human oversight architecture, transparency practices, and logging are your responsibility to evidence. Re-read sections 7.1 and 7.3.",
    },
    {
      kind: "order",
      q: "Order the seven AI vendor due diligence questions in the sequence they should be asked — from foundational model quality questions to strategic and contractual questions.",
      prompt: "Drag to arrange from first question (top) to last (bottom).",
      items: [
        "Training data provenance: what data was the model trained on and are there copyright or privacy issues?",
        "Bias testing: what tests were conducted, what were the results disaggregated by protected characteristics?",
        "Explainability: what explanation methodology is used and can individual decisions be explained to legal standards?",
        "Regulatory compliance: what EU AI Act classification and GDPR obligations are acknowledged?",
        "Model update and drift management: how frequently is the model retrained and what is the notification process?",
        "Incident history: have there been material AI incidents and what is the notification SLA?",
        "Data rights and portability: what rights do you have to interaction data and can you export for vendor switching?",
      ],
      correctFeedback:
        "Right. Model quality first (training data, bias, explainability), then regulatory compliance, then operational management (model updates, incidents), then strategic considerations (data rights). Re-read section 7.2.",
      wrongFeedback:
        "Start with model quality questions — if the model was not trained and tested properly, regulatory and contractual questions are secondary. Data rights come last as a strategic portability question. Re-read section 7.2.",
    },
    {
      kind: "categorize",
      q: "Classify each contractual provision into its primary third-party AI risk protection purpose.",
      categories: ["Model Performance Protection", "Regulatory Compliance Protection", "Liability and Indemnification", "Exit and Portability"],
      items: [
        { text: "AI accuracy SLA: precision above 87% measured quarterly with remediation obligation on breach.", category: 0 },
        { text: "Vendor obligation to provide all documentation requested within 15 days of a regulatory investigation notice.", category: 1 },
        { text: "Vendor indemnification for copyright claims arising from the vendor's AI training data.", category: 2 },
        { text: "Data export clause: all data exportable in machine-readable format within 60 days of contract termination.", category: 3 },
        { text: "Bias SLA: demographic parity disparity below 20% with termination right for three consecutive quarterly failures.", category: 0 },
        { text: "Prohibition on vendor training its general model on the customer's interaction data without separate written agreement.", category: 1 },
      ],
      correctFeedback:
        "Right. Performance SLAs: model accuracy and bias metrics with remediation obligations. Regulatory protection: compliance cooperation and data use restrictions. Liability: indemnification for vendor-caused harms. Exit: data portability and export rights. Re-read section 7.3.",
      wrongFeedback:
        "Performance SLAs address accuracy and fairness metrics. Regulatory protection provisions cover investigation cooperation and GDPR-aligned data use. Liability provisions cover harms caused by vendor AI failures. Exit provisions protect against lock-in. Re-read section 7.3.",
    },
    {
      q: "Your organisation uses three separate OpenAI API integrations for customer service, content generation, and internal analytics. What concentration risk does this create and what is the appropriate response?",
      options: [
        "No concentration risk — three separate integrations means the risk is distributed.",
        "API concentration risk: all three functions depend on the same provider. An OpenAI outage, policy change, or terms update affects all three simultaneously. Response: validate alternative provider options for at least one critical function, implement operational fallback protocols for each integration, and monitor OpenAI policy change communications.",
        "Concentration risk is only relevant for infrastructure vendors, not AI API providers.",
        "The risk is mitigated by having separate API keys for each integration.",
      ],
      correct: 1,
      correctFeedback:
        "Right. Using the same provider for multiple critical functions creates provider concentration risk. A provider disruption affects all functions simultaneously — disproportionate to the risk of single-provider dependence. Validated alternatives and fallback protocols are the mitigation. Re-read section 7.4.",
      wrongFeedback:
        "Separate integrations do not reduce provider concentration risk — all three depend on the same provider and are simultaneously affected by any provider disruption. Concentration risk requires validated alternatives and fallback protocols. Re-read section 7.4.",
    },
    {
      q: "Your data science team has fine-tuned Meta's Llama model on three years of customer support ticket data for an internal customer service AI. What governance requirements apply?",
      options: [
        "The base Llama model's open-source governance documentation covers the deployment.",
        "The fine-tuned model is a new AI system requiring full governance: a DPIA covering the fine-tuning data processing (customer personal data), training data documentation for the fine-tuning additions, bias testing on the combined model's customer service outputs, EU AI Act classification for the specific use case, and a model card documenting the fine-tuning scope. Base model documentation does not cover fine-tuning additions.",
        "Only GDPR compliance is required — Llama is open-source so EU AI Act does not apply.",
        "Fine-tuning is a technical activity — governance applies only to production deployment, not the training process.",
      ],
      correct: 1,
      correctFeedback:
        "Right. Fine-tuning creates a new AI system. The base model's governance does not cover the fine-tuning additions. The customer support ticket data requires a DPIA; the combined model requires bias testing and EU AI Act classification for the customer service use case. Re-read section 7.7.",
      wrongFeedback:
        "Open-source does not exempt from governance, and the base model's documentation does not cover fine-tuning additions. Fine-tuning on customer personal data creates a new processing activity requiring its own DPIA, and the combined model requires full governance. Re-read section 7.7.",
    },
    {
      kind: "order",
      q: "Order the six integration points for a third-party AI risk programme from first implementation (first) to ongoing operations (last).",
      prompt: "Drag to arrange from first action (top) to ongoing operations (bottom).",
      items: [
        "Develop AI-specific due diligence questionnaire and add to standard vendor procurement process",
        "Develop standard AI contract addendum covering performance SLAs, compliance co-operation, and data rights",
        "Map AI provider concentration risk and add to IT concentration risk register",
        "Add AI disclosure question to annual sub-processor review questionnaire",
        "Add AI-specific triggers to vendor monitoring watch list",
        "Add data portability and exit provisions to contract negotiation checklist",
      ],
      correctFeedback:
        "Right. Due diligence first (applied at procurement), then contract addendum (applied at signature), then concentration mapping (strategic risk register), then supply chain discovery (sub-processor review), then ongoing monitoring (continuous), then exit planning (contract negotiation ongoing). Re-read section 7.8.",
      wrongFeedback:
        "Due diligence and contract addendum come first — they are applied at the point of procurement, where risk is cheapest to address. Concentration mapping, supply chain discovery, and monitoring follow as operational processes. Exit planning is embedded in ongoing contract negotiation. Re-read section 7.8.",
    },
  ],
});
