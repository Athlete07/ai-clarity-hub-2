import { buildChapter, buildSection, sectionWithDiagram, s, x } from "../concepts-pb4-helpers";

export const chapter05BlContractTermsAiLeaders = buildChapter({
  slug: "bl-contract-terms-ai-leaders",
  number: 5,
  shortTitle: "AI Contract Terms",
  title: "Contract Terms for AI Leaders",
  readingMinutes: 27,
  summary:
    "AI contracts contain terms that do not exist in traditional software agreements — and traditional software terms that mean something fundamentally different when applied to AI. Business leaders who negotiate AI contracts without understanding these differences sign agreements that expose them to open-ended liability, model performance risk, unconstrained data use, and vendor dependency. Understanding the twelve most important AI contract terms is not a legal skill — it is a business leadership competency.",
  keyTakeaway:
    "The twelve AI-specific contract terms that require negotiation are: model performance warranty, accuracy threshold with remedy, training data restriction, output ownership, liability cap calibration, indemnification scope, change-of-control, model update notification, audit rights, data return and deletion, termination for convenience, and post-termination support. Missing or misconfigured versions of these terms are the source of 90% of AI contract disputes.",
  pmCallout:
    "As a business leader: every AI contract term you accept without reading is a risk you have agreed to absorb. The vendor's standard terms are optimised for the vendor's interests. Your job in contract negotiation is to identify the terms where your interests and the vendor's interests diverge — and close the gap before signature.",
  sections: [
    sectionWithDiagram({
      number: "5.1",
      title: "Why AI contracts are different from software contracts",
      subtitle: "The five structural differences between software and AI contracts that require new negotiating skills",
      take: "Software contracts govern access to a deterministic system: the software does what it is programmed to do, and bugs are fixed. AI contracts govern access to a probabilistic system: the model generates outputs that are statistically likely but not guaranteed, performance changes over time as the model is updated, and 'bugs' may be inherent in the training data rather than fixable in code.",
      why: "Business leaders who apply standard software contract negotiating skills to AI contracts miss the five structural differences that create AI-specific risk. Understanding these differences is the prerequisite for effective AI contract negotiation.",
      paragraphs: [
        [
          s("Difference 1: performance is probabilistic, not deterministic. "),
          x(
            "A software system either returns the correct tax calculation or it has a bug. An AI system returns a statistically likely output that may be wrong in any individual instance. A 95% accuracy claim means 1 in 20 outputs is wrong — by design. Software contracts do not account for designed-in error rates. AI contracts must.",
            "Performance warranty language designed for deterministic systems — 'the software will perform in material conformance with the documentation' — is meaningless for an AI system whose documentation describes a probability distribution rather than a specification.",
          ),
          s(" Replace 'material conformance with documentation' with 'accuracy rate of [X]% on [benchmark] measured [quarterly]' — a specific, measurable, AI-appropriate warranty."),
        ],
        [
          s("Difference 2: the product changes without your consent through model updates. "),
          x(
            "Software vendors release updates that you can choose to deploy or defer. AI vendors retrain and update their models continuously, and the update may change the model's behaviour on your use case. A model that was 92% accurate may become 87% accurate after an update — or 96% accurate. Either change affects your workflow and your users, without your control.",
            "AI contract update terms must specify: advance notification before model updates, the right to test in a staging environment before the update goes to production, rollback rights if the update degrades performance, and accuracy re-warranty after updates.",
          ),
          s(" Model update rights are the most commonly absent AI contract term and the most commonly needed after year one."),
        ],
        [
          s("Differences 3–5: output liability, training data use, and vendor platform risk. "),
          x(
            "Output liability: who is responsible when the AI recommends a wrong action and a human acts on it? Traditional software contracts do not address recommendation liability — the software displayed information, the human decided. AI systems blur this line. Training data use: the AI may learn from your data, changing the product for all customers using your proprietary patterns. Platform risk: AI vendors are more likely to be acquired, pivoted, or shut down than established software vendors — creating a category of contract continuity risk not present in mature enterprise software.",
            "These three differences require three contract provisions that have no equivalent in standard software agreements: output liability allocation, training data restrictions, and change-of-control termination rights.",
          ),
          s(" Identify which of the five structural differences applies to your specific AI deployment and address each in the contract before signature."),
        ],
      ],
      examples: [
        {
          title: "Insurance AI — deterministic warranty failure",
          body: "An insurer signed an AI claims assessment contract with a standard software warranty: 'system will perform in material conformance with documentation.' The documentation described a model that 'typically achieves 90% accuracy.' In year two, model drift brought accuracy to 76%. The insurer argued the 76% figure was not 'material conformance' with a 90% typical accuracy. The vendor argued 'typically' was not a contractual commitment. The dispute ran for six months. An accuracy threshold warranty — '90% accuracy measured quarterly, with remedy if below threshold for two consecutive quarters' — would have made the obligation measurable and the remedy automatic.",
        },
        {
          title: "HR technology — model update without notice",
          body: "An HR platform deployed AI candidate scoring and trained their hiring managers on interpreting the model's output patterns. Six weeks later, the vendor pushed a model update that changed the scoring algorithm without notification. Hiring managers noticed score distributions had changed but did not know why. Three weeks of internal investigation concluded the model had been updated. The update improved overall accuracy but changed the relative ranking of candidates in ways that confused the trained managers. An update notification clause — 30 days advance notice with a staging environment test period — would have converted a disruptive change into a managed transition.",
        },
        {
          title: "Legal AI — output liability allocation",
          body: "A law firm deployed AI contract review and a junior associate relied on the AI's identification of 'all change-of-control provisions' in a target company's contracts. The AI missed two provisions — a systematic failure for non-standard clause formats. The client suffered a transaction consequence. The firm reviewed their AI contract: it contained no output liability clause. The vendor's terms disclaimed all liability for AI output accuracy. The firm had no contractual basis for a claim against the vendor. An output liability clause allocating a portion of consequential damages to the vendor — capped at a negotiated amount — would have provided both a claim basis and a vendor incentive to maintain accuracy.",
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
      number: "5.2",
      title: "Model performance warranty and accuracy thresholds",
      subtitle: "How to write an AI performance warranty that creates enforceable obligations",
      take: "A model performance warranty is an AI contract's most important provision and its most commonly absent one. Without a performance warranty, the vendor has no contractual obligation to maintain the accuracy level that drove your procurement decision. A well-written performance warranty specifies the metric, the threshold, the measurement method, the measurement frequency, and the remedy for underperformance.",
      why: "Performance warranties make the vendor's accuracy claims legally enforceable rather than marketing representations. They create a financial incentive for the vendor to maintain and improve model performance over the contract term — rather than deprioritising it after contract signature.",
      paragraphs: [
        [
          s("A complete performance warranty has five elements. "),
          x(
            "1. Metric: what accuracy measure applies — F1 score, precision, recall, MAPE, or agreement rate. 2. Threshold: the minimum acceptable value — not the demo value, the minimum acceptable. 3. Measurement method: how accuracy is measured — on a shared test set, on production samples, by the vendor, by a third party, or jointly. 4. Frequency: how often accuracy is measured — monthly, quarterly, or event-triggered (on model update). 5. Remedy: what happens if the threshold is not met — service credits, termination right, or price reduction.",
            "A performance warranty without a remedy is an observation, not an obligation. The remedy is the mechanism that makes the warranty enforceable.",
          ),
          s(" Draft the performance warranty before you begin contract negotiation — arriving at the negotiation table with your draft is a negotiating position."),
        ],
        [
          s("The measurement method determines who can prove a breach and who controls the evidence. "),
          x(
            "Vendor-only measurement: the vendor measures their own accuracy and reports to you. This is a conflict of interest — not because vendors lie, but because the measurement methodology choices that favour the vendor will be made by the vendor without challenge. Jointly agreed measurement: a shared test set and shared measurement protocol, with outputs reviewed by both parties. Third-party measurement: an independent audit of model performance, typically annually. Each model has a different cost/benefit profile.",
            "Jointly agreed measurement is the practical standard for most enterprise AI contracts: it creates accountability without the cost of annual third-party audits.",
          ),
          s(" Specify that the test set for performance measurement is agreed by both parties before the measurement period begins — not defined unilaterally by the vendor."),
        ],
        [
          s("Service credits as remedies for performance warranty breach are the standard starting point and often the wrong ending point. "),
          x(
            "Service credits — refunds of a percentage of contract fees — are appropriate when performance degradation is temporary and recoverable. They are inadequate when performance degradation is systematic, long-duration, or has caused material business harm. For high-stakes AI deployments (financial decisions, medical advice, legal analysis), the remedy should include the right to terminate without penalty if performance falls below a minimum floor for more than two consecutive measurement periods.",
            "The right to terminate without penalty is the most powerful remedy available to AI buyers and the vendor's strongest incentive to maintain performance. Vendors who resist this provision are not confident in their ability to maintain performance.",
          ),
          s(" Include a two-tier remedy: service credits for below-threshold performance, termination right for performance below a minimum floor for two consecutive periods."),
        ],
      ],
      examples: [
        {
          title: "Financial services — performance warranty anatomy",
          body: "A bank's AI fraud detection contract included: 'Vendor warrants that the AI Service will achieve a minimum precision of 88% and recall of 79% on agreed test set, measured monthly by both parties on a jointly curated 10,000-transaction sample. If precision or recall falls below threshold for two consecutive months, Customer receives a 15% service credit. If precision or recall falls below 80%/70% respectively for three consecutive months, Customer may terminate without penalty with 30-day notice and receive a prorated refund of prepaid fees.' This five-element performance warranty was drafted by the bank before contract negotiation. The vendor accepted all terms with minor measurement methodology adjustments.",
        },
        {
          title: "Healthcare — joint test set negotiation",
          body: "A hospital required joint measurement of AI clinical documentation accuracy on a test set curated by both parties. The vendor initially proposed using their own evaluation dataset. The hospital countered that a vendor-curated dataset created a conflict of interest in measurement. After negotiation, both parties contributed 1,000 clinical notes to a shared test set, with the hospital's contribution representing the hospital's actual distribution of note complexity and specialty. The joint test set took three weeks to curate and became the performance measurement standard for the 3-year contract — preventing the conflict of interest that vendor-only measurement creates.",
        },
        {
          title: "Retailer — two-tier remedy in action",
          body: "A retailer's AI demand forecasting contract included a two-tier remedy. In month 14, MAPE exceeded the threshold for two consecutive months (service credits of 10% applied). In month 19, MAPE exceeded the minimum floor threshold for three consecutive months. The retailer issued a termination notice under the minimum floor clause. The vendor's accelerated remediation addressed the model issue, and the retailer accepted a contractual cure provision — extending the minimum floor cure period to six months with enhanced monitoring. The two-tier structure created a credible threat of termination that produced a remediation commitment the service credit tier alone would not have generated.",
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
      number: "5.3",
      title: "Liability cap calibration for AI contracts",
      subtitle: "Why standard liability caps are structurally wrong for AI deployments and how to negotiate them",
      take: "Standard software contract liability caps equal 12 months' contract fees. For most software, this is adequate: a software bug that disrupts operations for a day or a week is compensated by a proportional refund. For AI, a single wrong output — a fraudulent claim approved, a discriminatory hire decision, a dangerous medical recommendation — can generate liability claims that exceed the annual contract value by an order of magnitude. AI liability caps must be calibrated to the risk exposure of the AI's use case.",
      why: "A liability cap that is structurally wrong creates a false sense of protection. Business leaders who accept standard liability caps for high-stakes AI deployments have not adequately negotiated the risk allocation — they have simply accepted the vendor's preferred risk position.",
      paragraphs: [
        [
          s("Calibrate the liability cap to the maximum foreseeable harm from a single wrong AI output. "),
          x(
            "For a fraud detection AI: the cap should cover at least the value of the largest single fraudulent transaction in your portfolio — not the annual contract fee. For a credit decisioning AI: the cap should cover the maximum consequential damages from a discriminatory credit decision. For a medical AI: the cap should cover the insured value of a patient harm claim.",
            "This calibration produces caps that are often 5–10× the annual contract value for high-stakes AI. Vendors will resist. The appropriate vendor counter is a defined liability trigger — the vendor pays when the AI output is the proximate cause of the harm, not when any AI-adjacent harm occurs.",
          ),
          s(" Present the liability cap calibration as a risk-sharing conversation, not a punitive demand. The vendor shares the risk of their model's failure in proportion to their contract fees for the value they claim to deliver."),
        ],
        [
          s("Mutual liability caps are the negotiating standard — and the vendor should have the same cap applying to you. "),
          x(
            "Vendors often propose asymmetric liability: a cap on their liability but unlimited liability for your payment obligations. A mutual cap means both parties' liability is capped at the same amount — creating symmetry and a shared negotiation anchor. Mutual caps are the norm in well-negotiated enterprise software contracts and should be the starting position in AI contract negotiation.",
            "An asymmetric liability structure — vendor capped, buyer unlimited — is a structural power imbalance that should be rejected as a standard contract term.",
          ),
          s(" Require mutuality as a negotiating position: 'both parties' liability is capped at the same amount.' This creates a natural negotiation toward a mutually acceptable figure."),
        ],
        [
          s("Three liability carve-outs are standard and appropriate: indemnification obligations, IP infringement, and wilful misconduct. "),
          x(
            "Indemnification: if the vendor indemnifies you against copyright claims arising from their training data, the indemnification obligation is unlimited — otherwise the indemnification is worthless. IP infringement: the vendor's liability for using your IP without authorisation should be unlimited. Wilful misconduct: neither party should be able to cap liability for intentional harm.",
            "These three carve-outs are industry-standard and should not be resisted by vendors who have legitimate operations. Vendor resistance to unlimited IP infringement liability is itself a due diligence signal.",
          ),
          s(" Agree the three unlimited carve-outs first and then negotiate the cap figure — this prevents the carve-outs from becoming hostages in the cap negotiation."),
        ],
      ],
      examples: [
        {
          title: "Insurance AI — risk-calibrated cap negotiation",
          body: "An insurer deploying AI claims assessment identified that their single largest fraudulent claim in the prior year was $4.2M. They proposed a liability cap of $5M to cover the foreseeable maximum harm from a single AI error. The vendor's standard cap was $240,000 (12 months' contract fees). After negotiation, the parties agreed on a $2M cap — reflecting the insurer's median fraudulent claim value rather than the maximum. The negotiation took three sessions. The insurer's calibrated approach converted a standard cap discussion into a risk-based conversation that the vendor's legal team understood and ultimately accepted.",
        },
        {
          title: "Professional services — mutual cap principle",
          body: "A consulting firm's initial AI contract review found the vendor proposed a liability cap of $150,000 (12 months' fees) on the vendor's obligations, with no cap on the firm's payment obligations. The firm's legal team required mutuality: both parties' liability capped at $150,000. The vendor accepted mutuality but argued the cap was too low for the firm's unlimited payment obligation. The negotiation converged on a mutual $300,000 cap — double the original vendor cap. Both parties had symmetrical risk. The firm's negotiating principle — mutuality before quantum — converted an asymmetric starting position into a balanced outcome.",
        },
        {
          title: "Healthcare — indemnification carve-out",
          body: "A hospital's AI diagnostic contract negotiation included a vendor-proposed liability cap of $500,000 with an indemnification obligation 'also capped at the same amount.' The hospital's legal team identified that an indemnification capped at $500,000 was inadequate for the potential patient harm claims the AI could generate — claims typically ranging from $1M to $10M in their jurisdiction. The hospital required the indemnification obligation to be carved out from the cap as unlimited. After the indemnification carve-out was agreed, the cap itself was less important: the vendor's unlimited indemnification obligation provided the coverage the hospital required for foreseeable patient harm claims.",
        },
      ],
    }),
    buildSection({
      number: "5.4",
      title: "Indemnification scope for AI-specific risks",
      subtitle: "Which indemnifications to require from AI vendors and which to provide in return",
      take: "AI indemnification covers three categories not present in standard software contracts: AI output copyright indemnification (the vendor's training data may produce infringing outputs), regulatory indemnification (the vendor's AI may not comply with regulations they represented as compliant), and IP infringement for training data (the vendor's model may have been trained on your competitors' IP). Each requires explicit indemnification language in the contract.",
      why: "Indemnification gaps in AI contracts are rarely discovered before the claim arises. By that time, the organisation is defending a claim that the vendor should be defending. Closing indemnification gaps before contract signature is orders of magnitude cheaper than correcting them in litigation.",
      paragraphs: [
        [
          s("AI output copyright indemnification is the most commercially valuable indemnification for content-generating AI. "),
          x(
            "Several major AI vendors — including Microsoft, Google, and OpenAI — offer copyright indemnification: they will defend and pay for copyright claims arising from AI-generated content, provided the buyer did not intentionally use the AI to generate infringing content. Vendors who offer this indemnification have made a commercial judgment that their training data is defensible. Vendors who do not offer it have not.",
            "Copyright indemnification availability is a market segmentation criterion: it distinguishes AI vendors who have institutionalised responsible training data practices from those who have not.",
          ),
          s(" Require copyright indemnification in writing for any AI that generates content (text, images, code, audio) in your commercial workflows."),
        ],
        [
          s("Regulatory indemnification covers the gap between vendor compliance claims and actual regulatory compliance. "),
          x(
            "A vendor claims EU AI Act compliance. Regulators determine the system is non-compliant. Who pays the fine? Without a regulatory indemnification clause, you do — even though the vendor made the compliance representations. Regulatory indemnification requires the vendor to defend and pay for regulatory fines and remediation costs that arise from their non-compliance with regulations they represented as compliant.",
            "Regulatory indemnification is not available from most AI vendors as a standard term. It must be requested and is often resisted — but the request itself reveals how confident the vendor is in their compliance representations.",
          ),
          s(" If a vendor refuses regulatory indemnification for a compliance representation they made, ask them to remove the representation from the contract. The representation without indemnification exposes you to regulatory risk while providing no contractual remedy."),
        ],
        [
          s("Training data IP indemnification protects you if a competitor's IP appears in the model's outputs. "),
          x(
            "Foundation models trained on scraped web content may have ingested competitors' internal documents, proprietary research, or confidential algorithms that appeared in public-facing content. If the model generates outputs that reproduce these proprietary elements, the competitor may have a claim against you as the deployer. Training data IP indemnification requires the vendor to defend any claim that their model's outputs infringe third-party IP rights.",
            "Training data IP indemnification is broader than copyright indemnification: it covers trade secret misappropriation and IP infringement beyond copyright, which are the claims most likely to arise in competitive intelligence or R&D AI deployments.",
          ),
          s(" Require training data IP indemnification for any AI deployed in R&D, competitive intelligence, product development, or any function where competitor IP protection is commercially sensitive."),
        ],
      ],
      examples: [
        {
          title: "Media company — copyright indemnification selection criterion",
          body: "A media company evaluated five AI content generation vendors. Two offered copyright indemnification (Vendors A and B). Three did not (Vendors C, D, E). The company's legal team calculated their expected annual copyright claim exposure at $300,000 — based on historical claims in similar content workflows. The annual cost of self-insuring copyright risk exceeded the price difference between indemnifying and non-indemnifying vendors. Vendors C, D, and E were eliminated on indemnification grounds alone. The final selection between Vendors A and B was based on technical performance — a much simpler decision than it would have been across five vendors.",
        },
        {
          title: "Healthcare — regulatory indemnification negotiation",
          body: "A healthcare AI vendor's contract contained the representation: 'The AI Service complies with applicable HIPAA requirements.' The hospital's legal team requested regulatory indemnification: 'Vendor will defend and indemnify Customer against regulatory fines and penalties arising from Vendor's non-compliance with HIPAA requirements it has represented as met.' The vendor initially refused. The hospital responded: 'If you are confident in your HIPAA compliance, this indemnification costs you nothing. If you are not confident, please remove the compliance representation.' The vendor accepted the indemnification — confirming their confidence in their compliance representation.",
        },
        {
          title: "Technology company — training data IP claim",
          body: "A technology company deployed a code generation AI and a competitor claimed that the AI's outputs reproduced portions of the competitor's proprietary algorithm library — which had appeared in academic papers that were scraped into the training data. The vendor's contract did not include training data IP indemnification. The technology company defended the claim at its own cost — $420,000 in legal fees — before reaching a settlement. In the next AI procurement cycle, training data IP indemnification was added to the non-negotiable contract requirements list.",
        },
      ],
    }),
    buildSection({
      number: "5.5",
      title: "Data rights, ownership, and residual use",
      subtitle: "Navigating the contract terms that determine who owns what when the contract ends",
      take: "Three data rights provisions in AI contracts determine who owns what before, during, and after the contract: data ownership (your data remains yours), permitted use (what the vendor can do with your data during the contract), and residual use (what happens to model improvements derived from your data after you leave). All three must be explicitly negotiated — vendor standard terms favour the vendor on all three.",
      why: "Data rights disputes are the fastest-growing category of post-termination AI litigation. Businesses that terminate AI contracts discover the vendor retained a licence to use improvements derived from their data — improvements that were built using proprietary business information the business assumed it had reclaimed at termination.",
      paragraphs: [
        [
          s("Data ownership is the foundational provision: your data must remain yours under all circumstances. "),
          x(
            "State clearly in the contract: 'All Customer Data uploaded to or generated by Customer using the Service is owned exclusively by Customer. Vendor has no ownership interest in Customer Data.' This provision prevents the vendor from claiming co-ownership of data they processed or any outputs derived from your data.",
            "Most AI vendors accept data ownership clauses without resistance — ownership of customer data is not where their business model creates value. Where vendors resist is in permitted use and residual improvements.",
          ),
          s(" Agree data ownership first — it is rarely contested and creates a positive negotiating foundation for the more contentious permitted use discussion."),
        ],
        [
          s("Permitted use defines what the vendor can do with your data during the contract. "),
          x(
            "The three permitted use options are: service delivery only (vendor can use your data only to provide the service to you), internal development (vendor can use anonymised aggregate insights from your data to improve their service for all customers), and training opt-in (vendor can use your identified data to train their model — only with your explicit written consent for each use). Most enterprise buyers should require service delivery only.",
            "Service delivery only is the most restrictive and most protective permitted use. It means the vendor cannot use your data to improve their product for competitors or to build a competitive capability derived from your operational patterns.",
          ),
          s(" Require 'service delivery only' as the standard permitted use for all data classified as confidential, proprietary, or personal under your data governance policy."),
        ],
        [
          s("Residual use restrictions prevent the vendor from retaining value from your data after contract termination. "),
          x(
            "Residual use language in vendor contracts often grants the vendor a perpetual licence to use 'de-identified insights' or 'aggregated statistical derivatives' from your data even after the contract ends. These provisions allow the vendor to retain operational patterns, workflow optimisation insights, and process intelligence derived from your proprietary workflows — indefinitely.",
            "The residual use provisions are the least-read and most commercially significant data rights provisions in AI contracts. A vendor who derived operational patterns from two years of your data and retained those patterns post-termination has a perpetual competitive advantage built on your proprietary operations.",
          ),
          s(" Require the contract to state: 'Upon termination, Vendor will delete or destroy all Customer Data and all derivatives of Customer Data, including model weights fine-tuned on Customer Data, within 30 days of termination.'"),
        ],
      ],
      examples: [
        {
          title: "Financial services — permitted use negotiation",
          body: "A bank's AI contract negotiation revealed the vendor's standard terms included: 'Vendor may use Customer Data for service improvement and product development purposes.' The bank's data governance team classified all customer transaction data as confidential. The 'product development purposes' permitted use was incompatible with the confidential classification. After negotiation, permitted use was restricted to: 'Vendor may use Customer Data solely to provide the contracted services to Customer.' The vendor accepted the restriction after the bank clarified it would prevent the vendor from improving their fraud detection model for other bank customers using the bank's transaction patterns.",
        },
        {
          title: "Healthcare — residual use clause discovery",
          body: "A hospital's legal team identified a residual use clause in an AI clinical documentation vendor's standard terms: 'Vendor retains a perpetual, royalty-free licence to use de-identified insights derived from Customer Data for product improvement and research.' The clause would have allowed the vendor to retain patterns derived from two years of clinical documentation — including anonymised clinical decision patterns — indefinitely after contract termination. The hospital required deletion of all derivatives within 30 days of termination. The vendor agreed but required the hospital to pay for a third-party deletion audit — a cost the hospital accepted as adequate protection.",
        },
        {
          title: "Retailer — data return logistics",
          body: "A retailer's AI contract included data return and deletion terms negotiated before signature: 'Upon termination, Vendor will deliver Customer Data in standard export format within 14 days and certify deletion within 30 days.' At contract termination, the retailer requested data return. The vendor's export format was a proprietary JSON schema requiring the vendor's API to read. The retailer's technical team spent three weeks building a conversion tool. Requiring 'standard format' to be defined as 'CSV or ISO 27001 open format' in the contract would have prevented the conversion cost.",
        },
      ],
    }),
    buildSection({
      number: "5.6",
      title: "Model update, audit, and rollback rights",
      subtitle: "The three technical provisions that give buyers control over a changing AI system",
      take: "Three technical provisions in AI contracts give buyers control over a system that changes without their action: model update notification and control rights, audit rights over model behaviour and performance, and rollback rights to revert to a prior model version if an update degrades performance. Without these provisions, the vendor controls the AI system's evolution — and you experience the consequences.",
      why: "AI systems change over time in ways that traditional software does not: model updates can change the distribution of outputs, the handling of edge cases, and the calibration of confidence scores without changing any user-visible feature. These changes can break downstream workflows that were calibrated to the previous model's behaviour.",
      paragraphs: [
        [
          s("Model update notification rights require the vendor to tell you when and what is changing. "),
          x(
            "The contract should specify: advance notification period (30 days is standard for major updates, 5 days for minor updates), what constitutes a major update (any change affecting accuracy by more than 2 percentage points on the agreed test set), what notification must include (changelog, expected accuracy impact, updated API documentation), and whether you can defer the update for a specified period (30 days is standard).",
            "A vendor who cannot commit to 30-day advance notification for major model updates is running a model development process that cannot accommodate enterprise change management timelines.",
          ),
          s(" Include model update notification rights in the same contract section as service maintenance and change management — they are equivalent governance mechanisms."),
        ],
        [
          s("Audit rights give you the ability to verify the vendor's performance representations independently. "),
          x(
            "The audit right clause should specify: what you can audit (model performance on agreed test set, compliance documentation, data use practices), who can conduct the audit (your internal team, a named third party at your expense), how often you can audit (annually as of right, additional audits upon reasonable cause), and what the vendor must provide (API access to test environment, documentation, cooperation with auditors).",
            "Audit rights are rarely exercised but consistently influential: vendors who know you have the right to audit their performance behave differently than vendors who do not. The right creates the incentive; the exercise confirms compliance.",
          ),
          s(" Negotiate audit rights before contract signature and exercise them at least annually — both to verify performance and to signal that the right is operational."),
        ],
        [
          s("Rollback rights are the most powerful and most rarely negotiated technical provision in AI contracts. "),
          x(
            "Rollback rights require the vendor to be able to revert your deployment to a prior model version for a specified period (typically 90 days) if the current version degrades your performance below the warranty threshold. Without rollback rights, a model update that breaks your workflow can only be fixed by waiting for the vendor to develop and deploy a new version — on their timeline.",
            "Rollback rights are rarely used but are the technical backstop that protects workflow continuity when model updates degrade performance. A vendor who cannot offer rollback rights has not built their infrastructure to support version control for individual customers — which is itself an operational maturity signal.",
          ),
          s(" Request rollback rights for the duration of the performance measurement period immediately following any major model update."),
        ],
      ],
      examples: [
        {
          title: "Legal AI — model update disruption",
          body: "A law firm deployed AI contract review and trained their associates on the model's output format and confidence score interpretation. The vendor pushed a major model update with three business days' notice. The update changed the confidence score calibration and the output section structure. Associates received the new output format without context and misinterpreted confidence scores for two weeks — incorrectly escalating low-risk clauses and missing high-risk ones. A 30-day notification clause with a staging environment test period would have given the firm's training team time to update their training materials before the update went live.",
        },
        {
          title: "Financial services — audit right exercise",
          body: "A bank exercised its annual audit right on an AI fraud detection vendor. The audit used the agreed test set and was conducted by the bank's data science team with vendor API access. The audit found that model performance on the agreed test set was 89% — above the 85% warranty threshold. However, the bank's team also tested on a second dataset reflecting recent fraud patterns not in the original test set: performance was 71%. The audit right, while not exposing a warranty breach on the agreed metric, revealed a generalisation gap the bank and vendor agreed to address in the next model update cycle. Without the audit, the gap would have been discovered in live fraud loss.",
        },
        {
          title: "Healthcare — rollback right after update failure",
          body: "A hospital's AI clinical documentation tool received a major model update that improved general accuracy but degraded performance on cardiology notes — the highest-volume specialty at that hospital — from 91% to 78%. The hospital invoked the rollback right clause, requiring the vendor to revert to the prior version within 48 hours while the vendor developed a specialty-specific fix. The vendor complied. The rollback maintained the hospital's workflow continuity during the four weeks the vendor required to develop and deploy the targeted fix. Without the rollback right, the hospital would have operated with degraded performance for four weeks.",
        },
      ],
    }),
    buildSection({
      number: "5.7",
      title: "Termination provisions and exit rights",
      subtitle: "How to ensure you can exit an AI contract on fair terms when the relationship no longer serves your interests",
      take: "AI contract termination provisions determine how much it costs — financially and operationally — to exit when the vendor underperforms, is acquired, or simply stops being the best option. Termination for convenience (the right to terminate without cause), change-of-control, and post-termination support are the three exit provisions that determine whether you are a customer or a captive.",
      why: "Business leaders who negotiate procurement without negotiating exit are accepting vendor leverage throughout the contract term. A vendor who knows you cannot exit without significant penalty behaves differently than a vendor who knows you can exit with 90 days' notice. Exit rights are negotiating leverage instruments as much as legal provisions.",
      paragraphs: [
        [
          s("Termination for convenience gives you the right to exit without cause. "),
          x(
            "Standard AI vendor contracts do not include termination for convenience for the buyer — they include it for the vendor. Require mutual termination for convenience with 90 days' written notice and pro-rated refund of prepaid fees. The 90-day notice period gives the vendor adequate notice while giving you a defined exit window that does not require proving the vendor is in breach.",
            "Termination for convenience is the most important exit right for a multi-year AI contract because technology and use cases change faster than the contract term. A tool that is the best option today may be obsolete in 18 months.",
          ),
          s(" Accept longer notice periods (up to 180 days) in exchange for larger performance commitments — notice period length is the currency for rights enhancement in AI contract negotiation."),
        ],
        [
          s("Change-of-control termination rights protect you from an acquirer who does not align with your requirements. "),
          x(
            "The change-of-control clause should trigger on: acquisition of more than 50% of voting shares, merger, or asset sale of the AI service. Upon trigger, you should have 90 days to assess the acquirer and elect to terminate without penalty if the acquirer does not meet the same security, compliance, and service standards as the original vendor.",
            "The assessment period matters: 30 days is insufficient to evaluate an acquirer. 90 days allows a meaningful due diligence review of the acquirer's standards and a transition plan if you elect to terminate.",
          ),
          s(" Define 'change of control' broadly: include indirect changes of control (private equity transactions, majority investor changes) that technically may not transfer voting shares but effectively change the operating entity."),
        ],
        [
          s("Post-termination support is the most commonly absent exit provision and the most important for operational continuity. "),
          x(
            "Post-termination support specifies what the vendor must provide after the contract ends while you transition to an alternative: continued read-only access to the system (for data export), export of all your data in a readable format, API compatibility for 180 days to allow downstream system transitions, and a named support contact during the transition period.",
            "Without post-termination support provisions, a contract ending means an operational cliff: systems connected to the AI stop working, data becomes inaccessible, and the transition is forced rather than planned.",
          ),
          s(" Require post-termination support provisions to be negotiated before contract signature — vendors who have not thought about transition support have not designed their system for customer control."),
        ],
      ],
      examples: [
        {
          title: "Technology company — termination for convenience value",
          body: "A technology company negotiated mutual termination for convenience with 90-day notice in an AI analytics contract. Fourteen months after signing, a competing vendor released a significantly superior product. The technology company issued a termination for convenience notice and received a pro-rated refund of three months' prepaid fees. The transition took 70 days. Without the termination for convenience right, the company would have been locked into a 10-month remainder of a 24-month term — paying for an inferior product while competitors adopted the superior alternative.",
        },
        {
          title: "Retailer — change-of-control clause invoked",
          body: "A retailer negotiated a change-of-control clause including indirect control changes. Fourteen months into the contract, the AI vendor's majority private equity investor was acquired by a firm with known data governance practices that conflicted with the retailer's supplier code of conduct. The retailer identified this as an indirect change of control under their contract clause and issued a 90-day assessment notice. During assessment, the retailer confirmed the new PE firm's data governance practices were materially different from the original investor's. The retailer terminated without penalty. The indirect control change clause — which was not in the vendor's standard terms — was the instrument that made this exit possible.",
        },
        {
          title: "Healthcare — post-termination support provision",
          body: "A hospital terminated an AI scheduling contract after the vendor's performance fell below the warranty threshold for three consecutive quarters. The contract included post-termination support: 180-day API compatibility and named transition support contact. The hospital's IT team used the 180-day window to build and test a replacement integration before switching. Without the provision, termination would have immediately broken the scheduling workflow for 12 clinical departments. The post-termination support clause converted a cliff-edge exit into a managed transition.",
        },
      ],
    }),
    buildSection({
      number: "5.8",
      title: "BL decision lens: your AI contract negotiation checklist",
      subtitle: "A 12-provision checklist that covers every AI-specific contract term before signature",
      take: "A 12-provision AI contract checklist, completed before any AI contract is signed, ensures that every AI-specific risk is addressed contractually — not discovered post-signature. The checklist is the business leader's instrument for converting legal terms into business risk controls.",
      why: "Business leaders who delegate AI contract negotiation entirely to legal teams without providing AI-specific requirements miss the business risk provisions that legal teams do not know to request. The business leader must own the requirements; the legal team owns the drafting.",
      paragraphs: [
        [
          s("The 12-provision checklist by category. "),
          x(
            "Performance: (1) accuracy threshold with metric and frequency, (2) remedy structure — service credits and termination right, (3) model update notification with staging period. Data rights: (4) training data opt-out, (5) permitted use restricted to service delivery, (6) residual use prohibition with deletion obligation. Liability: (7) calibrated liability cap with mutual application, (8) copyright indemnification, (9) regulatory indemnification for represented compliances. Exit: (10) termination for convenience with notice and refund, (11) change-of-control with assessment period, (12) post-termination support with data return and API continuity.",
            "Each provision is owned by a business leader (provisions 1–3, 10–12), a data governance owner (provisions 4–6), and a legal team (provisions 7–9). Assign ownership before contract negotiations begin.",
          ),
          s(" Review the checklist in the first legal negotiation session — not as a legal exercise, but as a business requirements document that the legal team is drafting."),
        ],
        [
          s("Three provisions are absolute non-negotiables: training data opt-out, data deletion obligation, and termination for convenience. "),
          x(
            "These three provisions are non-negotiable because the risks they address — unconstrained model training on your data, perpetual retention of derivatives, and indefinite contract lock-in — cannot be mitigated through any alternative mechanism. Vendors who refuse all three should be eliminated from the shortlist regardless of technical performance.",
            "A vendor who refuses training data opt-out has a business model that depends on your data. A vendor who refuses deletion obligation retains leverage over your competitive information. A vendor who refuses termination for convenience does not believe you will be satisfied with their product.",
          ),
          s(" Communicate the three non-negotiables to the vendor before contract negotiations begin — not during. Vendors who cannot accept the three non-negotiables should self-select out before investing in negotiation."),
        ],
        [
          s("Use the checklist as a governance artefact, not just a negotiation tool. "),
          x(
            "Once the contract is signed, the checklist becomes the basis for annual governance reviews: which provisions have been exercised (audit rights, update notifications), which have been tested (performance warranty measurement), and which remain unused (change-of-control, termination for convenience). The governance review ensures that the protections negotiated are operational, not theoretical.",
            "A contract provision that is never monitored provides no protection. Annual governance reviews that track provision exercise convert contract rights into active risk controls.",
          ),
          s(" Schedule the first annual governance review at contract signature — not when the contract is up for renewal."),
        ],
      ],
      examples: [
        {
          title: "12-provision checklist walkthrough",
          body: "A financial services firm used the 12-provision checklist to prepare for contract negotiation with an AI analytics vendor. Before the first negotiation session, the CFO reviewed provisions 1–3 and 10–12 (performance and exit). The CDO reviewed provisions 4–6 (data rights). Legal reviewed provisions 7–9 (liability). The preparation session took 90 minutes. The negotiation completed in two sessions because all 12 provisions had been pre-assigned, pre-drafted, and pre-prioritised. Comparison: the firm's previous AI contract negotiation — without the checklist — took five sessions over three months and still missed the residual use provision.",
        },
        {
          title: "Annual governance review — provision activation",
          body: "A healthcare company's annual AI governance review of their clinical documentation contract found: performance warranty measured quarterly (last three quarters: above threshold), model update notification received twice (30-day advance, staging period used), audit right not yet exercised (scheduled for Q3), training data opt-out confirmed in audit of vendor's data processing records, termination for convenience right unused. The governance review confirmed all provisions were active and identified the unused audit right as a gap to remediate in the current quarter. The review took 60 minutes and produced an updated provision status log.",
        },
        {
          title: "Non-negotiable provision — vendor self-selection",
          body: "A technology company communicated three non-negotiable provisions to five shortlisted AI vendors before contract negotiation: training data opt-out required, data deletion within 30 days of termination required, and mutual termination for convenience with 90-day notice required. One vendor responded that they could not accept training data opt-out because their model improvement business model required all customer data. The vendor was eliminated before the negotiation session began — saving both parties three negotiation sessions. The vendor's inability to accept the opt-out was the most informative due diligence signal the company received about that vendor's business model.",
        },
      ],
    }),
  ],
  quiz: [
    {
      q: "Why is a standard software contract warranty — 'the system will perform in material conformance with documentation' — inadequate for an AI contract?",
      options: [
        "Software contract warranties are legally unenforceable in most jurisdictions",
        "AI systems have probabilistic outputs that change over time, so 'conformance with documentation' does not create an enforceable accuracy obligation",
        "AI systems are always more complex than software systems and require longer warranty periods",
        "Software vendors use different contract templates than AI vendors",
      ],
      correct: 1,
      correctFeedback: "Correct. AI systems generate probabilistic outputs that can degrade over time due to model drift. 'Conformance with documentation' does not create an enforceable accuracy threshold — because AI documentation typically describes probability distributions rather than deterministic specifications.",
      wrongFeedback: "The problem is that AI systems have probabilistic, time-varying performance while software warranties are designed for deterministic, fixed-specification systems. AI contracts require specific accuracy thresholds with measurement methods and remedies.",
    },
    {
      kind: "order",
      q: "Order these AI contract liability negotiation steps in the correct sequence:",
      items: [
        "Identify the maximum foreseeable harm from a single wrong AI output in your use case",
        "Propose a liability cap calibrated to the foreseeable harm",
        "Establish mutual liability cap applicability as a non-negotiable negotiating position",
        "Agree three unlimited carve-outs: indemnification, IP infringement, and wilful misconduct",
        "Negotiate the final cap quantum with the vendor",
      ],
      prompt: "Drag to arrange in the correct sequence",
      correctFeedback: "Correct. Risk identification before cap proposal, mutual applicability before quantum negotiation, and carve-outs agreed before the final number — this sequence produces a structurally sound liability negotiation.",
      wrongFeedback: "The sequence moves from risk quantification to proposing a calibrated cap to establishing mutuality to agreeing carve-outs to finalising the number. Starting with the number before the structure produces a negotiation that is anchored on the wrong question.",
    },
    {
      kind: "categorize",
      q: "Categorise these data rights provisions as either 'Non-negotiable — must have' or 'Preferred — negotiate for but accept alternatives':",
      categories: ["Non-negotiable — must have", "Preferred — negotiate for but accept alternatives"],
      items: [
        { text: "Training data opt-out clause restricting vendor model training on your data", category: 0 },
        { text: "Data deletion obligation within 30 days of contract termination", category: 0 },
        { text: "Residual use prohibition covering anonymised derivatives of your data", category: 1 },
        { text: "Third-party deletion audit at vendor's expense", category: 1 },
        { text: "Data return in standard open format upon termination", category: 0 },
        { text: "Quarterly data use reporting from vendor", category: 1 },
      ],
      correctFeedback: "Correct. Training data opt-out, deletion obligation, and standard format data return are non-negotiable because no alternative mechanism adequately mitigates the risks they address. Residual use prohibition, third-party audit at vendor expense, and quarterly reporting are valuable but have workable alternatives.",
      wrongFeedback: "Non-negotiable provisions address risks with no adequate alternative mitigation. Preferred provisions address risks that can be partially mitigated through monitoring or alternative contract mechanisms.",
    },
    {
      q: "A vendor's model update improves general accuracy from 89% to 94% but degrades performance on your specific document type from 91% to 76%. Without a rollback right, what is your position?",
      options: [
        "You can immediately terminate the contract and receive a full refund",
        "You must wait for the vendor to develop and deploy a new version on their timeline while operating with degraded performance",
        "You can demand the vendor revert to the prior version under standard software maintenance terms",
        "You can withhold payment until the performance is restored to the original level",
      ],
      correct: 1,
      correctFeedback: "Correct. Without a rollback right, you have no contractual mechanism to revert to the prior model version. You must operate with degraded performance while the vendor develops a fix on their timeline — which may take weeks or months.",
      wrongFeedback: "Without a rollback right, a model update that degrades your specific use case performance leaves you operating at the degraded level while the vendor fixes the issue on their schedule. Rollback rights are the provision that gives you control over this scenario.",
    },
    {
      q: "What is the most commercially significant data rights risk that most business leaders miss in AI vendor standard terms?",
      options: [
        "Vendors charge for data storage as a separate line item",
        "Vendors retain a perpetual licence to use de-identified derivatives of your data after contract termination",
        "Vendors require customer data to be formatted in their proprietary schema",
        "Vendors share aggregated benchmark statistics from customer data in public reports",
      ],
      correct: 1,
      correctFeedback: "Correct. Residual use provisions in standard AI vendor terms often grant a perpetual licence to anonymised or aggregated derivatives of customer data — including model improvements built on your proprietary operational patterns — that survive contract termination indefinitely.",
      wrongFeedback: "The most commonly missed and most commercially significant data rights risk is the residual use provision: vendors retaining perpetual licences to model improvements derived from your data after the contract ends. This is not data storage, format, or benchmark risk — it is competitive intelligence risk.",
    },
    {
      q: "Which three provisions are absolute non-negotiables in AI contract negotiations?",
      options: [
        "Annual price increase caps, SLA response times, and unlimited storage",
        "Training data opt-out, data deletion obligation on termination, and mutual termination for convenience",
        "Dedicated customer success manager, quarterly business reviews, and product roadmap access",
        "Multi-year pricing lock, volume discount structure, and professional services rate card",
      ],
      correct: 1,
      correctFeedback: "Correct. Training data opt-out (prevents vendor model training on your data), data deletion obligation (ensures your data is not retained post-termination), and mutual termination for convenience (ensures you can exit without being locked in) are the three non-negotiables because no alternative mechanism adequately mitigates the risks they address.",
      wrongFeedback: "The three non-negotiable AI contract provisions address risks unique to AI contracts: unconstrained model training on your data (training data opt-out), perpetual data retention (deletion obligation), and indefinite contract lock-in (termination for convenience). Commercial terms like pricing, SLAs, and CSM commitments are important but have alternative mitigation paths.",
    },
  ],
});
