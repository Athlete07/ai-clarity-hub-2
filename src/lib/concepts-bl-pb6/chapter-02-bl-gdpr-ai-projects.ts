import { buildChapter, buildSection, s, x, BL_CALLOUT } from "../concepts-bl-helpers";

export const chapter02BlGdprAiProjects = buildChapter({
  slug: "bl-gdpr-ai-projects",
  number: 2,
  shortTitle: "GDPR & AI Projects",
  title: "GDPR and AI — Data Protection Obligations Every Leader Must Own Before Deploying AI",
  readingMinutes: 25,
  summary:
    "GDPR does not just govern data storage — it governs every AI system that processes personal data of EU residents, which means almost every enterprise AI project. Business leaders need a working knowledge of GDPR's AI-specific obligations: lawful basis, purpose limitation, data minimisation, automated decision-making rights, and Data Protection Impact Assessments.",
  keyTakeaway:
    "GDPR's Article 22 creates a near-absolute right not to be subject to solely automated decisions with legal or significant effects. Any AI system making or significantly influencing decisions about EU individuals — in HR, credit, marketing, or operations — must have lawful basis, human oversight, and meaningful contestation rights in place before go-live.",
  pmCallout: BL_CALLOUT,
  sections: [
    buildSection({
      number: "2.1",
      title: "GDPR and AI — Why They Are Inseparable",
      subtitle: "Every AI system that processes personal data of EU residents triggers GDPR obligations — including those running on anonymised or aggregated data",
      take: "GDPR applies to any processing of personal data relating to EU residents, and most enterprise AI systems process personal data at some stage — in training, in inference, or in output. Leaders who treat GDPR compliance as a data storage question rather than an AI processing question are missing the framework's most significant obligations.",
      why: "GDPR enforcement against AI systems is accelerating. Data Protection Authorities across the EU have issued major fines and enforcement actions specifically targeting AI processing violations — not data breach incidents. The risk is active and present.",
      paragraphs: [
        [
          s("GDPR's scope covers processing — any operation on personal data, including collection, storage, use, and automated analysis. "),
          x(
            "Training an AI model on HR data, running inference on customer profiles, generating personalised outputs for individual users — each is a distinct processing activity requiring its own legal basis and documentation in the Records of Processing Activities (ROPA).",
            "Leaders who approve AI projects without ensuring each processing activity is documented in ROPA and supported by lawful basis are creating compliance gaps that become visible only in enforcement — when the cost of remediation includes a fine and regulatory scrutiny.",
          ),
          s(" Every new AI project requires a ROPA entry identifying each processing activity, its purpose, its legal basis, and its data categories before the project goes live."),
        ],
        [
          s("DPA enforcement against AI is active. "),
          x(
            "The Italian DPA (Garante) temporarily banned ChatGPT in Italy in March 2023 for GDPR violations including insufficient legal basis for data processing. The Irish DPA fined Meta €1.2B for GDPR violations in data transfers to the US underpinning its AI training. The Spanish AEPD investigated facial recognition AI at multiple retail sites.",
            "These enforcement actions are not edge cases — they establish that DPAs are monitoring AI processing activities as a priority enforcement area. Organisations with undocumented or insufficiently justified AI processing activities are within the enforcement envelope.",
          ),
          s(" Review your AI processing activities against GDPR enforcement actions from relevant national DPAs — these actions define the current enforcement frontier."),
        ],
        [
          s("Anonymisation is harder than it looks — and re-identification risk grows with AI capabilities. "),
          x(
            "Many organisations process ostensibly anonymised data in AI systems without applying GDPR controls, on the assumption that anonymised data is outside GDPR scope. AI models trained on pseudo-anonymous data can often re-identify individuals, particularly in small populations or when combined with auxiliary data.",
            "Leaders approving AI projects on 'anonymised' data should require a formal anonymisation assessment from legal and technical teams before treating GDPR as non-applicable. Regulator guidance consistently sets a high bar for what constitutes true anonymisation.",
          ),
          s(" Do not assume anonymised equals non-personal in AI contexts — require a formal re-identification risk assessment before removing GDPR controls from AI projects."),
        ],
      ],
      examples: [
        {
          title: "Garante vs ChatGPT — GDPR enforcement against AI platforms",
          body: "Italy's Garante blocked ChatGPT's operation in Italy in March 2023 citing insufficient legal basis for training data processing, no age verification for minors, and lack of transparency. OpenAI restored access after implementing transparency measures and a data removal mechanism for Italian users. The case established: (1) AI training on scraped web data requires lawful basis assessment; (2) DPAs will act swiftly against AI services without GDPR compliance. Organisations deploying customer-facing AI must have legal basis documentation ready before launch.",
        },
        {
          title: "Meta's €1.2B fine — AI training and data transfers",
          body: "Meta's 2023 fine by the Irish DPA for transferring EU user data to US servers for AI training purposes established a direct link between AI model development and GDPR's international data transfer obligations. The case illustrates that AI training activities — not just data storage — trigger transfer mechanism requirements. Leaders approving AI training programmes on EU customer data must verify that data transfer mechanisms (SCCs, adequacy decisions) are in place.",
        },
        {
          title: "Spanish retailer — facial recognition GDPR violation",
          body: "A Spanish retailer using AI facial recognition in stores for security purposes received a €250K AEPD fine for processing biometric data without explicit consent — a special category data violation under GDPR Article 9. Biometric AI systems are simultaneously GDPR special category and EU AI Act (potentially prohibited) obligations. Leaders deploying biometric AI need both GDPR and AI Act compliance architectures before go-live.",
        },
      ],
    }),
    buildSection({
      number: "2.2",
      title: "Lawful Basis for AI Processing",
      subtitle: "The six GDPR lawful bases — which ones work for AI, which ones do not, and the consent trap",
      take: "Every AI processing activity on personal data requires a lawful basis. For most enterprise AI, the appropriate bases are legitimate interests (with a balancing test), contractual necessity, or legal obligation — not consent. Relying on consent as the default lawful basis for AI processing creates a fragile programme that individuals can withdraw at any time.",
      why: "Selecting the wrong lawful basis — particularly defaulting to consent for AI processing that could be justified under legitimate interests — creates operational risk: if consent is withdrawn, the processing must stop. For AI systems embedded in operations, this can mean system shutdown.",
      paragraphs: [
        [
          s("Legitimate interests is the most commonly applicable lawful basis for enterprise AI, but it requires a Legitimate Interests Assessment (LIA). "),
          x(
            "The LIA must demonstrate: (1) a genuine legitimate interest exists; (2) the processing is necessary for that interest; (3) the interest is not overridden by the data subject's interests, rights, and freedoms.",
            "For fraud detection AI, operational efficiency AI, and customer service AI — where the benefits are clear and the privacy impact is proportionate — legitimate interests typically provides a robust basis. For AI that profiles individuals for marketing or makes decisions with significant effects, the balancing test is harder to pass.",
          ),
          s(" Complete a Legitimate Interests Assessment for every AI system processing personal data under this basis — document it, have it reviewed by your DPO, and keep it current as the system evolves."),
        ],
        [
          s("Contractual necessity is valid where AI processing is genuinely required to perform a contract with the individual. "),
          x(
            "A bank using AI to calculate a customer's loan eligibility as part of a loan application — where the calculation is part of the contracted service — can rely on contractual necessity. A bank using AI to profile the same customer for upselling purposes cannot — upselling is not necessary to perform the loan contract.",
            "The 'necessity' test is strict: the processing must be genuinely necessary for the contract, not merely useful or commercially advantageous. AI project owners sometimes over-rely on contractual necessity because it appears simpler than a legitimate interests assessment.",
          ),
          s(" Apply the necessity test strictly: ask whether the AI processing is genuinely required to deliver the contracted service, not whether it is useful or improves the service."),
        ],
        [
          s("Consent as a lawful basis for AI processing is usually unsuitable for enterprise operations. "),
          x(
            "GDPR consent requires that it be freely given, specific, informed, and unambiguous. For employee AI processing, consent is almost never freely given — the power imbalance between employer and employee means consent cannot be considered genuinely voluntary.",
            "For customer AI processing, consent may be appropriate for optional features but is operationally fragile for AI embedded in core services: if individuals withdraw consent, the processing must cease and the AI system cannot operate for those individuals.",
          ),
          s(" Avoid consent as the lawful basis for AI processing embedded in core operations — use legitimate interests or contractual necessity with proper documentation instead."),
        ],
      ],
      examples: [
        {
          title: "Employee monitoring AI — consent failure",
          body: "A professional services firm deployed an AI productivity monitoring tool for remote employees and relied on consent as the lawful basis, with employees asked to sign a consent form during onboarding. During a data protection audit, the DPA found consent was not freely given in an employment context. The firm was required to re-establish lawful basis on legitimate interests with a documented LIA, and delete three months of processed data collected under the invalid consent basis. Start with the correct lawful basis — consent for employee AI processing is almost always wrong.",
        },
        {
          title: "Insurance AI — legitimate interests LIA",
          body: "An insurer's AI fraud detection system processes personal data under legitimate interests. The completed LIA documented: legitimate interest (preventing insurance fraud, protecting honest customers from cost pooling with fraudsters), necessity (AI pattern recognition identifies fraud signals not detectable by manual review), and balancing (individual privacy impact is low: fraud checks are expected by customers and no marketing use is made of the data). The LIA was challenged by a complainant; the insurer's documentation withstood DPA review. Document the LIA thoroughly.",
        },
        {
          title: "Marketing personalisation — lawful basis failure",
          body: "A retailer's AI personalisation engine processed customer purchase data to generate individual product recommendations. The processing was documented under contractual necessity in ROPA. A GDPR complaint established that personalised recommendations were not necessary to fulfil the sales contract — they were a commercial benefit to the retailer. The DPA required re-documentation under legitimate interests with a completed LIA, plus retrospective customer notifications. The incorrect basis was identified and exploited in litigation.",
        },
      ],
    }),
    buildSection({
      number: "2.3",
      title: "Article 22 — Automated Decision-Making Rights",
      subtitle: "The most important GDPR provision for AI — and the one most enterprise deployments get wrong",
      take: "GDPR Article 22 gives EU individuals the right not to be subject to solely automated decisions that produce legal or similarly significant effects. Most enterprise AI systems that influence hiring, credit, pricing, or service access are within Article 22's scope. Human oversight is not optional — it is a legal right.",
      why: "Article 22 is the provision that directly interfaces with AI governance. Any AI system making or significantly influencing consequential decisions without meaningful human review is a potential Article 22 violation — regardless of how the system is marketed or the sophistication of its outputs.",
      paragraphs: [
        [
          s("Article 22 applies when three conditions are met: a decision is based solely on automated processing, it involves profiling, and it produces legal or similarly significant effects. "),
          x(
            "'Legal effects' include employment decisions, credit decisions, and eligibility determinations. 'Similarly significant effects' is broader: decisions that significantly affect circumstances, behaviour, or choices — including insurance pricing, personalised marketing exclusions, and service access controls.",
            "The 'solely' element is frequently misunderstood. A human who rubber-stamps an AI decision without genuinely reviewing it does not satisfy the 'not solely automated' test. Courts and DPAs have been clear: the human review must be meaningful, not performative.",
          ),
          s(" Meaningful human review means the reviewer has the information, competence, time, and authority to override the AI decision — not just a checkbox in a workflow."),
        ],
        [
          s("The three exceptions to Article 22's prohibition are narrow. "),
          x(
            "Automated decisions are permitted if: (1) necessary for entering or performing a contract; (2) authorised by EU or member state law with appropriate safeguards; or (3) based on explicit consent.",
            "Even where an exception applies, data controllers must implement suitable safeguards, provide individuals with the right to obtain human review, the right to express their point of view, and the right to contest the decision. These safeguards must be operational — not listed in a privacy policy.",
          ),
          s(" Implement the Article 22 safeguards as operational processes: individuals must be able to request human review and contest decisions through a real pathway, not a theoretical one."),
        ],
        [
          s("Profiling — even without a final automated decision — triggers GDPR obligations. "),
          x(
            "Profiling is any automated processing that evaluates personal aspects of an individual — analysing or predicting behaviour, economic situation, health, preferences, reliability, or location. Profiling used to inform human decisions (rather than replace them) still requires a lawful basis and ROPA documentation, but is not subject to Article 22's near-absolute prohibition.",
            "The distinction matters operationally: AI systems that produce risk scores, likelihood estimates, or preference rankings used by human decision-makers are profiling tools — not Article 22 systems — and can be deployed with appropriate lawful basis and transparency rather than the full Article 22 safeguard architecture.",
          ),
          s(" Classify each AI system as a profiling tool (human uses AI output to decide) versus an automated decision system (AI decides with minimal human input) — the compliance architecture differs significantly."),
        ],
      ],
      examples: [
        {
          title: "Amazon hiring algorithm — Article 22 and bias combined",
          body: "Amazon's AI recruiting tool, which automatically downgraded CVs from female candidates based on historical male-dominated hiring data, was shut down in 2018 after it was identified as both an Article 22 violation (solely automated decisions in hiring) and a sex discrimination liability. The tool was reviewed by humans, but reviewers were not given the basis for AI scores and could not meaningfully override them. The case remains the canonical example of Article 22 and bias obligations intersecting in HR AI.",
        },
        {
          title: "Lebara — automated pricing and Article 22",
          body: "A telecoms provider used AI to generate personalised retention offers for customers at risk of churn, with the offer generated and sent automatically without human review. A customer complaint established the personalised pricing constituted an automated decision with significant effects on the customer's economic situation. The provider implemented a human review step for retention offers above a defined value threshold, and updated its privacy policy to include Article 22 disclosures. Automated pricing with significant financial effects is within Article 22's scope.",
        },
        {
          title: "Lloyds Banking Group — credit AI human review architecture",
          body: "Lloyds restructured its AI credit decisioning programme to satisfy Article 22's meaningful human review requirement. The redesigned process: AI provides a risk score and contributing factors; trained credit analysts review the score, access the contributing factors, and have documented authority to override. Override rates are monitored — analysts who never override are flagged for process review. The architecture demonstrates what 'meaningful' human review requires: information, competence, and real override authority.",
        },
      ],
    }),
    buildSection({
      number: "2.4",
      title: "Data Protection Impact Assessments for AI",
      subtitle: "When a DPIA is mandatory, what it must contain, and how to use it as a governance tool rather than a compliance burden",
      take: "A Data Protection Impact Assessment (DPIA) is mandatory before deploying AI systems that are likely to result in high risk to individuals. For most high-stakes AI — HR screening, credit scoring, health AI, biometric systems — a DPIA is not optional. A well-executed DPIA is also a governance tool that surfaces risks before they become liabilities.",
      why: "Leaders who treat DPIAs as compliance paperwork miss their operational value. The DPIA process forces cross-functional conversation about risk, necessity, and mitigations before deployment — catching problems that technology-only review misses.",
      paragraphs: [
        [
          s("GDPR Article 35 requires a DPIA when processing is likely to result in high risk — and EDPB guidelines specify that AI systems using automated decisions, systematic profiling, or processing sensitive data in large scale are high-risk categories requiring a mandatory DPIA. "),
          x(
            "In practice: HR AI that screens, ranks, or monitors employees; AI that processes health or financial data; AI using biometric data; AI making predictions about individuals at scale — all trigger mandatory DPIA requirements.",
            "Deploying any of these systems without a completed DPIA is a GDPR violation independent of any other compliance issue. The DPIA must be completed before the processing begins — not after deployment.",
          ),
          s(" Build DPIA completion as a launch gate in every AI project plan — it cannot be an afterthought, and it must be finished before go-live."),
        ],
        [
          s("A DPIA must contain: description of processing, assessment of necessity and proportionality, identification of risks, and measures to address risks. "),
          x(
            "The risk assessment component is where DPIAs deliver the most governance value. Identifying risks before deployment — bias in outcomes, data quality failures, adversarial use, re-identification risk, discrimination in automated outputs — forces project teams to design mitigations into the system rather than bolt them on post-incident.",
            "DPIAs should be written by a cross-functional team: legal (lawful basis and rights obligations), technology (data flows and model architecture), the business function (use case and decision consequences), and the DPO (overall GDPR framework compliance).",
          ),
          s(" Require cross-functional DPIA completion: legal, technology, the relevant business function, and DPO sign-off — single-function DPIAs miss the business context that determines actual risk."),
        ],
        [
          s("Where a DPIA identifies high residual risk that cannot be mitigated, the organisation must consult its national DPA before proceeding. "),
          x(
            "Prior consultation is mandatory where risk cannot be reduced to an acceptable level despite implemented safeguards. Several organisations have completed DPIAs identifying unmitigable risks and proceeded without prior consultation — creating both a GDPR violation and a regulatory relationship risk.",
            "Prior consultation is an opportunity as well as an obligation: DPAs often provide guidance that resolves uncertainty about permissible approaches. Organisations that consult proactively are treated more favourably in subsequent enforcement than those who proceed without consultation and are later investigated.",
          ),
          s(" If a DPIA concludes residual risk is high despite all mitigations, treat prior DPA consultation as a governance requirement — not an optional extra."),
        ],
      ],
      examples: [
        {
          title: "NHS England — AI diagnostic tool DPIA",
          body: "NHS England published its DPIA for an AI tool supporting radiologist review of chest X-rays, covering processing activities (pseudonymised patient images), legal basis (public task), risk assessment (model error rate, re-identification risk, clinical governance), and mitigations (radiologist review of all AI-flagged cases, accuracy monitoring, annual DPIA review). The published DPIA is a template for health AI DPIAs — available on the NHS England website. Healthcare leaders should benchmark their DPIA quality against this standard.",
        },
        {
          title: "Clearview AI — DPIA failure with enforcement consequences",
          body: "Clearview AI's facial recognition service — which scraped public web images to train a biometric identification model — operated without DPIAs for its processing activities in EU countries. Multiple DPAs (ICO, CNIL, Garante, Greek DPA) issued fines totalling over €75M across jurisdictions. The absence of DPIAs was central to enforcement findings. High-risk biometric AI requires a DPIA by definition — operating without one is a compliance violation before any other issue is assessed.",
        },
        {
          title: "Retailer HR AI — DPIA catching bias risk pre-deployment",
          body: "A European retailer's DPIA for an AI shift scheduling tool identified that the model trained on historical scheduling data reproduced patterns that systematically assigned less desirable shifts to older workers — an indirect age discrimination risk. The risk was identified in the DPIA's bias assessment section before deployment. The team retrained the model with age-neutral features and deployed with monthly bias monitoring. Without the DPIA, the bias risk would have been discovered post-deployment, likely through a discrimination complaint.",
        },
      ],
    }),
    buildSection({
      number: "2.5",
      title: "Data Minimisation and Purpose Limitation in AI",
      subtitle: "Two GDPR principles that reshape AI architecture — and why violating them is now a primary enforcement target",
      take: "Data minimisation requires using only the minimum personal data necessary for the AI purpose. Purpose limitation requires that data collected for one purpose is not repurposed for AI training or analysis without separate lawful basis. Both principles are frequently violated in AI projects — and both are current DPA enforcement priorities.",
      why: "AI developers instinctively collect as much data as possible, on the basis that more data improves model performance. This instinct conflicts directly with GDPR's data minimisation principle. Leaders approving AI projects must actively challenge data maximalism.",
      paragraphs: [
        [
          s("Data minimisation means using the minimum personal data sufficient for the AI purpose — not the maximum data available. "),
          x(
            "An AI recruitment tool that processes CV text and structured employment history to rank candidates satisfies minimisation. The same tool additionally processing candidates' LinkedIn profiles, social media posts, and publicly available photographs does not — these data points are not necessary for the ranking purpose.",
            "In practice, AI project teams often include additional data fields 'just in case they improve performance'. Each additional field requires a necessity justification. Approving AI projects without reviewing data field scope against the minimisation principle is a common GDPR compliance gap.",
          ),
          s(" Require AI project teams to document necessity justification for every personal data field included in the model — remove fields that cannot be justified against the processing purpose."),
        ],
        [
          s("Purpose limitation prohibits using personal data collected for one purpose for a different AI purpose without separate lawful basis. "),
          x(
            "Customer transaction data collected under a sales contract cannot be repurposed for training an AI marketing profiling model without a separate lawful basis assessment. Employee performance data collected for appraisal purposes cannot be fed into an AI workforce restructuring model without documented lawful basis for the AI use.",
            "Purpose creep is the most common GDPR violation in AI projects: data collected years earlier under one purpose is rediscovered by data science teams as a useful training dataset. The original collection purpose does not cover the new AI use — a new lawful basis is required.",
          ),
          s(" Establish a data use register for AI training datasets: document the original collection purpose, the proposed AI use, compatibility assessment, and new lawful basis before any dataset is used for AI training."),
        ],
        [
          s("Retention limitation interacts directly with AI model lifecycles. "),
          x(
            "Personal data must not be retained longer than necessary for the processing purpose. AI models trained on personal data that has since passed its retention period technically contain data that should have been deleted — a complex technical and legal challenge when the model weights encode patterns learned from that data.",
            "The technical community is still resolving how model unlearning satisfies GDPR right-to-erasure obligations. Business leaders should know that models trained on data with defined retention periods require a defined approach to model refresh and data subject erasure when retention expires.",
          ),
          s(" Include retention period analysis in every AI project DPIA — define the model refresh or retraining schedule that satisfies retention obligations for training data."),
        ],
      ],
      examples: [
        {
          title: "Experian — credit AI and data minimisation enforcement",
          body: "The ICO investigated Experian's AI-powered credit scoring and marketing segmentation services, finding that Experian processed personal data collected from credit applications for commercial marketing purposes — a purpose limitation violation. Experian was required to delete or anonymise significant volumes of data and restructure its processing activities. The case established that credit data collected under financial services obligations cannot be repurposed for AI marketing without separate lawful basis.",
        },
        {
          title: "HR analytics — purpose creep in AI training",
          body: "A global professional services firm's HR data team proposed using eight years of employee performance review data to train an AI model predicting future high performance. Legal review identified that the performance data was collected under an appraisal purpose — individual feedback and development — incompatible with an AI prediction purpose. The team conducted a compatibility assessment and determined a new lawful basis (legitimate interests with LIA) was required before the training dataset could be used. The model launch was delayed four months while documentation was completed.",
        },
        {
          title: "Model training on expired data — retention compliance",
          body: "A financial services firm's AI fraud detection model was trained on transaction data with a seven-year retention period. When the data governance team reviewed the model, they identified the training dataset included transactions processed before the retention clock — data that had expired and should have been deleted. The firm commissioned a model retraining on compliant data, and established a policy requiring training data retention compliance checks before any model training run. Models are not exempt from retention obligations.",
        },
      ],
    }),
    buildSection({
      number: "2.6",
      title: "Special Category Data in AI Systems",
      subtitle: "Health, ethnicity, biometric, and political data in AI — the highest-risk GDPR processing category",
      take: "GDPR Article 9 special category data — health, racial/ethnic origin, biometric data, genetic data, religion, political opinions, trade union membership, sex life — requires explicit consent or another specific Article 9 exception for every AI processing activity. Most AI systems that infer these characteristics, even indirectly, are processing special category data.",
      why: "AI systems routinely infer special category characteristics from non-special data: voice patterns can suggest health conditions; purchasing behaviour can suggest religion or ethnicity; location data can suggest political affiliation. Leaders must understand that inference of special category characteristics triggers Article 9 obligations even if the input data is not itself special category.",
      paragraphs: [
        [
          s("AI inference of special category characteristics from general data is still special category processing. "),
          x(
            "A health AI that predicts chronic disease risk from dietary purchasing patterns is processing health data — even if the input is transaction data. A marketing AI that infers religious observance from food purchase patterns is processing religion data. The inference, not just the input, determines the data category.",
            "This creates a significant compliance gap in AI systems that were not designed for special category processing but produce special category inferences as a by-product. A customer segmentation AI that creates a 'health-conscious' segment is making health inferences without a health data processing legal basis.",
          ),
          s(" Audit AI system outputs for special category inferences, not just inputs — any output that infers protected characteristics requires Article 9 compliance regardless of input data type."),
        ],
        [
          s("Biometric AI is the most consistently enforced special category in the EU. "),
          x(
            "Biometric data used for unique identification — facial recognition, voice identification, fingerprint verification — is special category data requiring explicit consent or another specific Article 9 basis. 'Biometric data processed for the purpose of uniquely identifying a natural person' is the exact definition.",
            "Workplace biometric systems — fingerprint access, facial recognition timekeeping — that process EU employee biometric data require explicit written consent with a genuine right to refuse, or another applicable Article 9 basis. Given consent cannot be freely given in employment, most workplace biometric systems require legal obligation or vital interests as the Article 9 basis.",
          ),
          s(" Any biometric AI system — including those used only for authentication or access control — requires an Article 9 legal basis assessment before deployment for EU individuals."),
        ],
        [
          s("Health AI in commercial contexts faces the highest regulatory scrutiny. "),
          x(
            "Commercial AI products that make health inferences — wellness apps, insurance pricing models, productivity tools that monitor physiological indicators — face a combination of GDPR Article 9, EU AI Act high-risk obligations (if in medical device scope), and sector-specific health regulation.",
            "Leaders overseeing health-adjacent AI products should assume multiple regulatory frameworks apply simultaneously and commission a multi-framework legal review before launch — not sequential reviews that each find compliance with their single framework.",
          ),
          s(" Health-adjacent AI requires a multi-framework legal review: GDPR Article 9, EU AI Act classification, medical device regulation (if applicable), and sector-specific rules — simultaneously, not sequentially."),
        ],
      ],
      examples: [
        {
          title: "Clearview AI biometric — Article 9 enforcement across five DPAs",
          body: "Clearview AI's facial recognition system processed biometric data without any Article 9 legal basis — it relied on 'legitimate interests' (not an Article 9 basis) for biometric data processing. Five European DPAs issued fines totalling over €75M. The case established that no business benefit justification can substitute for an Article 9 legal basis. Biometric AI requires an Article 9 legal basis — period.",
        },
        {
          title: "Health insurance pricing AI — inference violation",
          body: "A European health insurer's AI pricing model used purchasing data to infer health risk indicators including dietary patterns, supplement purchasing, and pharmacy frequency. The French CNIL found the model was processing health data under Article 9 (health inference from purchasing patterns) without explicit consent or a specific Article 9 basis. The insurer rebuilt the model to remove health-inferential features, reducing prediction accuracy but achieving compliance. Inference of health data is health data processing.",
        },
        {
          title: "Workplace wellness app — consent invalidity",
          body: "A UK-based global employer deployed an AI wellness application that collected employee mood scores, sleep patterns, and stress self-reports to generate individual wellbeing recommendations. The employer used employee consent as the Article 9 basis. An employment law review found consent could not be freely given by employees — the power imbalance meant consent was not genuinely voluntary. The employer discontinued EU deployment and redesigned the tool as an opt-in benefit with genuinely voluntary participation outside the employment management context.",
        },
      ],
    }),
    buildSection({
      number: "2.7",
      title: "AI and Data Subject Rights",
      subtitle: "How GDPR rights — access, erasure, objection, portability — apply to AI systems and what they require operationally",
      take: "GDPR data subject rights apply to AI processing: individuals have the right to access what AI systems hold about them, object to profiling, request erasure from training datasets, and contest automated decisions. Operationalising these rights for AI systems requires technical and process capabilities that must be built before deployment, not after a rights request arrives.",
      why: "Data subject rights requests are the most common trigger for GDPR enforcement actions. An organisation that cannot respond to a subject access request including AI-processed data within one month is in violation — even if all its other GDPR obligations are met.",
      paragraphs: [
        [
          s("The right of access applies to AI-processed personal data, including profiling outputs. "),
          x(
            "A subject access request for a customer who has been profiled by an AI system must include the profiling logic — 'meaningful information about the logic involved' — and the consequences of that logic, not just the underlying personal data. This means the AI system's decision process must be documented and communicable in human-readable form.",
            "Black-box AI systems that cannot produce meaningful explanations of profiling logic are GDPR-non-compliant at the point of access request, regardless of all other compliance measures. Explainability is not just a good practice — it is a legal requirement for any AI system that profiles individuals.",
          ),
          s(" Verify that every AI system used for profiling can produce a human-readable explanation of its logic and the significance of its outputs before deployment."),
        ],
        [
          s("The right to erasure ('right to be forgotten') applies to personal data held in AI training datasets. "),
          x(
            "When an individual exercises the right to erasure, personal data about them must be deleted — including from AI training datasets, wherever technically feasible. Model weights that encode patterns learned from an individual's data are a more complex technical question: current regulatory guidance does not require model deletion, but does require deletion of identifiable training data and exploration of model retraining or unlearning where feasible.",
            "Organisations must have a documented approach to erasure in AI contexts: what data can be deleted immediately, what requires model retraining, and what the timeline is. 'We cannot delete from the model' is not an acceptable erasure response without a documented technical and legal assessment.",
          ),
          s(" Document your AI erasure approach before deployment — what gets deleted immediately, what the model retraining schedule is, and how erasure is verified — and include it in your DPIA."),
        ],
        [
          s("The right to object to profiling requires you to stop profiling upon request, unless compelling legitimate grounds override the individual's interests. "),
          x(
            "Individuals can object to profiling at any time. Unless the organisation demonstrates compelling legitimate grounds that override the individual's interests, rights, and freedoms, profiling must stop for that individual. For direct marketing AI, the right to object is absolute — no override is possible.",
            "Operationally, this requires AI systems to support individual exclusion: the ability to flag an individual as excluded from AI profiling and maintain that exclusion across all processing pipelines. Systems that cannot support this are not rights-compliant.",
          ),
          s(" Every AI profiling system must support individual exclusion as a core feature, not a post-deployment add-on — build objection handling into the system architecture."),
        ],
      ],
      examples: [
        {
          title: "British Airways — subject access request and AI profiling",
          body: "A passenger submitted a subject access request to British Airways requesting all personal data including AI profiling data used for pricing personalisation. The SAR response provided transaction data but not the profiling logic used for dynamic pricing. The ICO found this insufficient — the right of access includes meaningful information about AI profiling logic. BA updated its SAR response processes to include profiling methodology documentation. AI profiling logic must be communicable in response to access requests.",
        },
        {
          title: "Healthcare AI — erasure and model retraining",
          body: "A digital health company received erasure requests from 340 users of a health monitoring AI. The company deleted identifiable user data from its training dataset but did not retrain the model. An ICO review found the approach acceptable for model weights (no requirement to delete weights based on current guidance) but required evidence of a documented model refresh schedule and erasure verification protocol. The case established the current practical standard for AI erasure compliance.",
        },
        {
          title: "Insurance direct marketing AI — absolute right to object",
          body: "A UK insurer's AI-powered direct marketing profiling engine continued to include an individual in targeting segments after an objection to direct marketing processing was submitted. GDPR Article 21(3) gives an absolute right to object to direct marketing profiling — no override is possible. The ICO issued a corrective notice and required the insurer to implement a technical control that immediately excludes objecting individuals from all AI marketing pipelines and prevents re-inclusion without new consent.",
        },
      ],
    }),
    buildSection({
      number: "2.8",
      title: "Building a GDPR-Compliant AI Programme",
      subtitle: "A practical governance architecture that embeds GDPR compliance into every AI project from day one",
      take: "GDPR compliance for AI is not a retrospective audit — it is a governance architecture embedded in the AI development and procurement lifecycle. The seven components of a compliant AI programme — inventory, lawful basis, DPIA, DPO integration, rights infrastructure, vendor management, and monitoring — must be in place before projects launch.",
      why: "The cost of retrofitting GDPR compliance into a deployed AI system — re-documenting processing, retraining models, rebuilding rights workflows — is typically 5–10 times the cost of building compliance in from the start. Leaders who approve AI projects without GDPR gates are creating future remediation budgets.",
      paragraphs: [
        [
          s("Component one: a pre-launch GDPR gate for every AI project. "),
          x(
            "Every AI project must complete a minimum compliance checklist before deployment: processing purposes documented, lawful basis identified with supporting assessment, DPIA completed (where mandatory), DPO review signed off, rights infrastructure operational.",
            "The gate must be cross-functional: legal owns lawful basis and DPO coordination; technology owns data flows and rights infrastructure; the business function owns purpose justification and human oversight; procurement owns vendor compliance. A gate that only legal can approve is a bottleneck; a gate that only technology reviews misses purpose justification.",
          ),
          s(" Establish a cross-functional AI GDPR gate with named reviewers from legal, technology, the business function, and DPO — require sign-off before any AI system goes to production."),
        ],
        [
          s("Component two: vendor GDPR compliance management. "),
          x(
            "AI vendors who process personal data on your behalf are data processors under GDPR — data processing agreements (DPAs) are mandatory. The DPA must cover: processing purposes and instructions, security obligations, sub-processor management, and your right to audit.",
            "For AI-specific risks: DPAs should address training data use (prohibiting vendor training on your personal data without explicit agreement), model access and portability, incident notification timelines, and rights request support obligations.",
          ),
          s(" Require AI vendors to execute GDPR data processing agreements with AI-specific provisions before any personal data is processed — standard DPA templates typically do not cover AI training data use."),
        ],
        [
          s("Component three: ongoing monitoring and annual review. "),
          x(
            "GDPR compliance is not a one-time certification — it requires ongoing monitoring of processing activities, annual DPIA review for high-risk systems, and updates when processing changes materially.",
            "AI systems drift and evolve: new training data, model updates, use case extensions, and new geographies all potentially require GDPR reassessment. Annual review should be triggered by any material change to the AI system and by any change in regulatory guidance or enforcement actions relevant to the processing type.",
          ),
          s(" Treat GDPR compliance reviews as live documents tied to AI system changes — any material system update triggers a compliance review, not just annual calendar reviews."),
        ],
      ],
      examples: [
        {
          title: "Global bank — AI GDPR governance architecture",
          body: "A global bank's AI governance framework includes a mandatory pre-launch legal checklist for every AI system touching personal data. The checklist requires: ROPA entry, lawful basis assessment, DPIA (for high-risk), DPO sign-off, DPA execution with AI vendors, and rights infrastructure confirmation. Sixteen projects were launched in 2025; three failed the initial checklist and required remediation before launch. The governance gate prevented three potential enforcement exposures.",
        },
        {
          title: "SaaS vendor DPA — AI training prohibition clause",
          body: "A professional services firm discovered its AI writing assistant vendor's standard DPA permitted the vendor to use customer interaction data for model improvement. Renegotiated DPA included: explicit prohibition on training the vendor's general model on customer data; customer data used only for dedicated fine-tuning with explicit agreement; model outputs not retained for vendor use. The negotiation took two weeks — less time than a single DPA enforcement investigation would require.",
        },
        {
          title: "E-commerce platform — annual GDPR AI review",
          body: "An e-commerce platform's annual GDPR review of its recommendation AI identified a material change: the model had been extended to process browsing data in addition to purchase data, increasing profiling scope without a DPIA update. The review triggered a supplementary DPIA covering the expanded processing scope and a privacy notice update to reflect the additional data use. The change had been approved by the technology team without a GDPR gate — the annual review caught it before it was investigated externally.",
        },
      ],
    }),
  ],
  quiz: [
    {
      q: "Your data science team proposes training a customer churn prediction AI on eight years of transaction data originally collected under the sales contract lawful basis. What must happen before the training can proceed?",
      options: [
        "Nothing — transaction data collected under the sales contract can be freely reused for any internal purpose.",
        "A purpose compatibility assessment must be conducted, and if the AI training purpose is incompatible with the original collection purpose, a new lawful basis must be identified and documented before training begins.",
        "Only a technical security review is needed — GDPR applies to storage, not model training.",
        "The data must be anonymised first; then GDPR no longer applies.",
      ],
      correct: 1,
      correctFeedback:
        "Right. Purpose limitation prohibits repurposing data for an incompatible new AI purpose without a new lawful basis. Transaction data collected under a sales contract requires a compatibility assessment before AI training use. Re-read sections 2.5 and 2.8.",
      wrongFeedback:
        "Purpose limitation is one of GDPR's most enforced principles in AI contexts. Transaction data collected for a sales purpose cannot automatically be repurposed for AI training — a compatibility assessment and potentially a new lawful basis is required. Re-read sections 2.5 and 2.8.",
    },
    {
      kind: "order",
      q: "Order the steps for launching a GDPR-compliant AI project from first to last.",
      prompt: "Drag to arrange from first step (top) to last (bottom).",
      items: [
        "Document processing purpose and identify lawful basis with supporting assessment",
        "Complete DPIA (mandatory for high-risk AI processing)",
        "Execute data processing agreement with AI vendors",
        "Verify rights infrastructure is operational (access, erasure, objection)",
        "Obtain DPO sign-off before go-live",
        "Establish ongoing monitoring and annual review cadence",
      ],
      correctFeedback:
        "Right. Lawful basis first, then DPIA, then vendor DPA, then rights infrastructure, then DPO sign-off, then ongoing monitoring. Each step depends on the prior one — you cannot complete the DPIA without knowing the lawful basis. Re-read section 2.8.",
      wrongFeedback:
        "Start with lawful basis — without it, the DPIA has no foundation and the DPO cannot sign off. Rights infrastructure must be operational before go-live, not after. Re-read section 2.8.",
    },
    {
      kind: "categorize",
      q: "Classify each GDPR obligation by the AI processing scenario it primarily applies to.",
      categories: ["Article 22 (Automated Decisions)", "Article 9 (Special Category)", "Article 35 (DPIA Required)", "Purpose Limitation"],
      items: [
        { text: "An AI credit scoring system automatically declines personal loan applications without human review.", category: 0 },
        { text: "An HR AI tool that infers employee stress levels from typing patterns and flags individuals to managers.", category: 1 },
        { text: "An AI profiling system that processes health data at scale to generate individual risk scores.", category: 2 },
        { text: "Using employee performance review data collected for appraisal purposes to train a workforce restructuring AI.", category: 3 },
        { text: "An AI insurance pricing model that automatically sets premium rates based solely on algorithmic risk assessment.", category: 0 },
        { text: "A facial recognition system used in a retail environment to identify known shoplifters.", category: 1 },
      ],
      correctFeedback:
        "Right. Article 22: solely automated decisions with legal/significant effects. Article 9: special category data inference (stress/emotion = health; facial recognition = biometric). DPIA: large-scale health data profiling. Purpose limitation: repurposing performance data for restructuring AI. Re-read sections 2.3, 2.4, 2.6.",
      wrongFeedback:
        "Article 22 applies to decisions, not just any AI use. Article 9 applies when special category characteristics are inferred, not just when the input data is special category. DPIAs are mandatory for large-scale special category processing. Re-read sections 2.3, 2.4, 2.6.",
    },
    {
      q: "An employee subject access request includes a request for 'all personal data processed by AI systems and the logic used'. Your AI performance management tool can export the employee's numerical performance score but not a human-readable explanation of how it was calculated. How do you respond?",
      options: [
        "Provide the numerical score — that satisfies the data element of the access request.",
        "The SAR response is incomplete. GDPR requires 'meaningful information about the logic involved' in profiling — a numerical score without explanation does not satisfy this. The AI system must be updated to produce human-readable logic explanations, or the system cannot be lawfully used for profiling.",
        "Advise the employee that AI logic is a trade secret exempt from access requests.",
        "Provide the input data used by the AI system — that constitutes the logic explanation.",
      ],
      correct: 1,
      correctFeedback:
        "Right. GDPR's right of access includes meaningful information about the logic of automated processing. A score without explanation is insufficient. If the system cannot produce this, it cannot lawfully profile individuals. Re-read section 2.7.",
      wrongFeedback:
        "Providing a numerical score does not satisfy the right of access for AI profiling. GDPR requires 'meaningful information about the logic involved' — the system must be capable of producing a human-readable explanation of its decision-making. Re-read section 2.7.",
    },
    {
      q: "A commercial AI vendor's standard data processing agreement permits the vendor to use customer interaction data to improve its general model. What is the correct response?",
      options: [
        "Accept — model improvement benefits all customers including yours.",
        "Renegotiate: the standard DPA grants the vendor a training asset at your expense. Require explicit prohibition on training the vendor's general model on your customer data, with any fine-tuning requiring separate written agreement.",
        "Accept but inform customers in the privacy notice.",
        "Only accept if the vendor is GDPR certified.",
      ],
      correct: 1,
      correctFeedback:
        "Right. Vendor training rights on your customer data without separate agreement violates purpose limitation and potentially creates a GDPR controller liability for the additional processing purpose. Renegotiate this clause as a standard commercial term. Re-read sections 2.5 and 2.8.",
      wrongFeedback:
        "Standard DPA templates often include model training rights that are incompatible with GDPR purpose limitation. This clause must be actively renegotiated — acceptance does not become compliant through disclosure in a privacy notice. Re-read sections 2.5 and 2.8.",
    },
    {
      kind: "order",
      q: "Order the elements that must be present for a GDPR Article 22 automated decision to be lawful.",
      prompt: "Drag to arrange from foundational requirement (top) to final safeguard (bottom).",
      items: [
        "An applicable exception applies: contractual necessity, legal authorisation, or explicit consent",
        "Suitable safeguards are implemented to protect the individual's rights",
        "The individual is informed of the automated decision and its basis in the privacy notice",
        "A real mechanism for the individual to obtain human review of the decision is operational",
        "A real mechanism for the individual to contest the decision with actual effect is operational",
      ],
      correctFeedback:
        "Right. Exception first (without this, solely automated decisions are prohibited), then safeguards, then transparency, then human review mechanism, then contestation mechanism. All five must be present — missing any one element means the automated decision is unlawful. Re-read section 2.3.",
      wrongFeedback:
        "Article 22 compliance requires an exception plus all safeguards. Without an applicable exception, the decision is prohibited regardless of safeguards. Without a real contestation mechanism, the decision is unlawful regardless of transparency. Re-read section 2.3.",
    },
  ],
});
