import { buildChapter, buildSection, s, x } from "../concepts-pb4-helpers";

export const chapter08BlVendorLockInRisk = buildChapter({
  slug: "bl-vendor-lock-in-risk",
  number: 8,
  shortTitle: "Vendor Lock-In Risk",
  title: "Vendor Lock-In Risk in AI Procurement",
  readingMinutes: 25,
  summary:
    "AI vendor lock-in is deeper and more costly than traditional software lock-in because it operates at four levels simultaneously: data lock-in (your data is in proprietary formats), model lock-in (your teams are trained on specific AI outputs), workflow lock-in (your processes are rebuilt around AI outputs), and infrastructure lock-in (your IT architecture depends on the vendor's specific APIs). Business leaders who assess lock-in risk before signing and negotiate portability provisions before committing can reduce exit costs by 60–80% and maintain the negotiating leverage that comes from a credible exit option.",
  keyTakeaway:
    "AI lock-in risk is best managed before contract signature, not after. The four lock-in mechanisms — data, model, workflow, and infrastructure — each have a specific mitigation strategy. A business leader who identifies the lock-in risk profile of each AI procurement decision, negotiates the appropriate portability provisions, and maintains a documented exit plan retains strategic flexibility throughout the contract term.",
  pmCallout:
    "As a business leader: vendor lock-in is not a technical risk — it is a strategic risk. A vendor who knows you cannot exit without significant cost behaves differently than a vendor who knows you can switch in 90 days. Portability provisions are not exit planning — they are negotiating leverage instruments that change vendor behaviour throughout the contract term.",
  sections: [
    buildSection({
      number: "8.1",
      title: "The four levels of AI vendor lock-in",
      subtitle: "Data, model, workflow, and infrastructure lock-in — how each operates and compounds",
      take: "AI lock-in operates at four levels that compound over time: data lock-in (data in proprietary formats or stored exclusively with the vendor), model lock-in (fine-tuned models that cannot be transferred), workflow lock-in (processes rebuilt around AI-specific outputs), and infrastructure lock-in (IT architecture dependent on vendor-specific APIs). Each level adds exit cost and reduces negotiating leverage.",
      why: "Understanding the four lock-in levels before procurement allows business leaders to assess the lock-in risk profile of each AI decision and negotiate mitigations at the level where risk is highest — rather than discovering the lock-in after the contract is signed.",
      paragraphs: [
        [
          s("Level 1 — Data lock-in: your data is in the vendor's proprietary format or exclusively accessible through their API. "),
          x(
            "Signs of data lock-in: data ingested by the vendor cannot be exported in a standard format, data export requires the vendor's professional services team, your data has been processed in ways that create vendor-specific enrichments (entity tags, embeddings, classifications) that are not reproducible without the vendor's model.",
            "Data lock-in is the most immediate and most addressable lock-in level. It is mitigated by requiring data export in standard formats (CSV, JSON, Parquet, SQL dump) and retaining the original data in your own systems — never allowing the vendor to be the only repository of your business data.",
          ),
          s(" Maintain the original, unmodified dataset in your own controlled storage. The vendor's copy is the processing environment, not the data repository."),
        ],
        [
          s("Level 2 — Model lock-in: AI models fine-tuned on your data cannot be transferred to a new vendor. "),
          x(
            "When a vendor fine-tunes their foundation model on your proprietary data, the resulting fine-tuned model weights encode your data's patterns in a format that is inseparable from the vendor's base model architecture. You cannot take your fine-tuned model and run it on a different vendor's infrastructure — you must re-train a new model with a new vendor, losing the fine-tuning investment.",
            "Model lock-in is most acute when you have invested significant time and data in fine-tuning a vendor's model for your specific use case. The fine-tuned model becomes the justification for staying — 'we have too much invested to switch.'",
          ),
          s(" Mitigate model lock-in by negotiating access to your fine-tuned model weights before fine-tuning begins — not as an afterthought when you want to leave."),
        ],
        [
          s("Levels 3 and 4 — Workflow lock-in and infrastructure lock-in — are the hardest to reverse. "),
          x(
            "Workflow lock-in: your processes have been rebuilt around AI-specific outputs — specific field names, confidence score thresholds, explanation formats — that would require significant process redesign to change. Infrastructure lock-in: your IT architecture has deep integrations with the vendor's proprietary API, webhooks, or data pipeline — making a vendor change a major integration project.",
            "Workflow and infrastructure lock-in are asymmetric: they cost nothing to create (your team simply adapts to the AI's outputs) and are very costly to reverse (your team must readapt to a different AI's different outputs). The lock-in accumulates silently over the first 12 months of deployment.",
          ),
          s(" Document the vendor-specific dependencies in your workflows and infrastructure quarterly — dependency documentation is the first step in exit planning and the foundation for exit cost estimation."),
        ],
      ],
      examples: [
        {
          title: "Legal firm — model lock-in from fine-tuning",
          body: "A law firm invested 18 months fine-tuning a vendor's AI contract review model on 50,000 of their own contracts. The fine-tuned model achieved 94% clause identification accuracy — 15 points above the vendor's base model. When the vendor was acquired and the new parent began repricing, the firm realised they could not transfer the fine-tuned model: the weights were stored on the vendor's proprietary infrastructure and the vendor's acquisition agreement did not transfer fine-tuned model access to customers. The firm's exit cost estimate — retraining a new model — was 14 months and $380,000. The lock-in had never been assessed before fine-tuning began.",
        },
        {
          title: "Healthcare — data lock-in through proprietary enrichment",
          body: "A hospital deployed an AI clinical documentation vendor who tagged all clinical notes with the vendor's proprietary entity recognition system — assigning clinical concept IDs from the vendor's proprietary ontology. When the hospital evaluated switching vendors, the tagged data was only readable through the original vendor's API. Re-processing 240,000 tagged documents with a new vendor's system would have required the hospital to export untagged originals (which they had retained), but would have lost 24 months of accumulated tagging enrichments — all of which were in the departing vendor's proprietary format. Requiring tagging in an open medical ontology (SNOMED-CT, ICD-11) would have prevented the enrichment lock-in.",
        },
        {
          title: "Retailer — infrastructure lock-in discovery",
          body: "A retailer discovered their infrastructure lock-in when evaluating a vendor change after 22 months of AI demand forecasting deployment. Their IT team had built six downstream systems that consumed the AI vendor's specific JSON output format — including field names, confidence score structure, and output hierarchy — that were unique to that vendor's API. Switching vendors would require re-engineering all six downstream systems, estimated at 9 months and $420,000. No alternative vendor's output format was compatible with their existing downstream architecture. The dependency had never been documented; the exit cost was discovered when the exit was needed.",
        },
      ],
    }),
    buildSection({
      number: "8.2",
      title: "Assessing lock-in risk before contract signature",
      subtitle: "A structured framework for quantifying exit costs before committing to an AI vendor",
      take: "Lock-in risk assessment before contract signature converts an abstract risk into a quantified exit cost estimate. A business leader who knows their estimated exit cost at 24 months — before signing — can calibrate contract terms, negotiate portability provisions, and make an informed decision about whether the value of the AI deployment justifies the lock-in risk.",
      why: "Lock-in risk assessment is not pessimism — it is strategic clarity. A deployment with a $200,000 expected exit cost at 24 months is a fundamentally different decision than a deployment with a $2M expected exit cost, even if the AI performance is identical.",
      paragraphs: [
        [
          s("The lock-in risk assessment has four categories matching the four lock-in levels. "),
          x(
            "Data lock-in score: can all data be exported in standard formats within 30 days? Score 0 (yes, no extra cost), 1 (yes, with vendor engineering support), 2 (partial — some enrichments cannot be exported), 3 (substantial data loss on exit). Model lock-in score: can fine-tuned model weights be exported or reproduced without the vendor? Score 0 (open weights, fully transferable), 1 (weights available under license), 2 (weights not transferable, retraining required), 3 (weights not available at all). Same scoring for workflow and infrastructure lock-in.",
            "A total score of 0–4 is low lock-in risk. 5–8 is medium risk — negotiate portability provisions. 9–12 is high risk — require portability provisions before signing or accept the exit cost implications.",
          ),
          s(" Complete the lock-in assessment before contract negotiation — it determines which portability provisions are highest priority and anchors the negotiation with a cost estimate."),
        ],
        [
          s("Quantify exit cost at 12, 24, and 36 months to create a time-dimensioned lock-in picture. "),
          x(
            "Exit costs increase over time as workflow and infrastructure dependencies accumulate. A 12-month exit cost estimate covers: data migration, model retraining start, and initial infrastructure adaptation. A 24-month estimate adds: full model retraining, workflow redesign for changed outputs, and complete infrastructure re-integration. A 36-month estimate adds: organisational change management for teams whose processes have adapted to the AI's specific outputs.",
            "The time dimension reveals when lock-in becomes prohibitive — which is typically around 18–24 months for workflow lock-in and 24–36 months for infrastructure lock-in. This tells you the window in which exit is feasible without prohibitive cost.",
          ),
          s(" Build the time-dimensioned exit cost estimate as a table in the procurement decision document — make the lock-in trajectory visible to every stakeholder in the decision."),
        ],
        [
          s("Compare the exit cost trajectory to the value delivery trajectory. "),
          x(
            "The decision framework is simple: if the AI deployment's cumulative value at 24 months exceeds the exit cost at 24 months, the lock-in is justified. If the exit cost approaches or exceeds the value, the lock-in represents a structural power shift in the vendor's favour. The comparison makes the lock-in risk a business decision rather than a technical concern.",
            "Most AI deployments do justify their lock-in risk at the planned contract duration. The risk materialises when the deployment underperforms — when you want to exit but cannot without absorbing a cost that exceeds the value already delivered.",
          ),
          s(" Model the worst-case scenario: the AI delivers half the expected value and you need to exit at 18 months. Can you absorb the exit cost while remaining on the right side of the value equation?"),
        ],
      ],
      examples: [
        {
          title: "Financial services — lock-in risk assessment in procurement",
          body: "A bank completed a lock-in risk assessment for an AI fraud detection vendor before contract signature. Scores: data (0 — standard format export available), model (2 — fine-tuned weights not transferable), workflow (1 — outputs in standard field formats with documentation), infrastructure (1 — REST API compatible with standard integration patterns). Total score: 4 (low-medium). Exit cost at 24 months: $180,000 (model retraining and integration testing). 24-month value delivery estimate: $1.4M in fraud prevention. Decision: lock-in risk was justified by value delivery ratio of 7.8:1. The assessment was documented in the procurement decision record.",
        },
        {
          title: "Healthcare — exit cost trajectory changes contract length",
          body: "A hospital's lock-in assessment for an AI clinical documentation vendor showed: exit cost at 12 months $95,000, at 24 months $240,000, at 36 months $640,000. The 36-month exit cost trajectory was driven by accumulated workflow dependencies in 12 clinical specialties. The hospital's original plan was a 3-year contract. After seeing the 36-month exit cost, the hospital negotiated a 2-year contract with a one-year extension option — capping the initial commitment at the point where exit remained below $240,000. The exit cost trajectory analysis changed the contract structure before signature.",
        },
        {
          title: "Retailer — worst-case scenario modelling",
          body: "A retailer modelled the worst-case scenario for an AI personalisation vendor: the vendor delivers 40% of projected revenue lift (the AI underperforms its pilot benchmark in production) and the retailer needs to exit at month 18. Data lock-in score: 1. Model lock-in: 3 (proprietary recommendation model with no export). Workflow lock-in: 2. Infrastructure lock-in: 2. Exit cost at 18 months: $380,000. 18-month value at 40% performance: $190,000. Worst-case exit at month 18 would cost $190,000 more than the value received. This finding led the retailer to negotiate a model portability clause and a performance-linked termination right before signature — changing the worst-case scenario from a $190,000 net loss to a $40,000 net loss.",
        },
      ],
    }),
    buildSection({
      number: "8.3",
      title: "Negotiating portability provisions",
      subtitle: "The five contract provisions that reduce AI vendor lock-in and maintain strategic flexibility",
      take: "Five portability provisions, negotiated before contract signature, significantly reduce AI lock-in at each of the four levels: data export rights, model portability or retraining rights, output format standardisation, API compatibility commitments, and transition assistance obligations. Each provision is achievable with reasonable vendors — and a vendor who refuses all five is communicating that lock-in is central to their business model.",
      why: "Portability provisions are not anti-vendor contract terms — they are provisions that make the vendor relationship more commercially durable because both parties know the relationship is voluntary rather than coerced. Voluntary commercial relationships produce better vendor behaviour.",
      paragraphs: [
        [
          s("Provision 1 — Data export rights: access to all your data in standard formats within 30 days, at any time during the contract and on termination. "),
          x(
            "The provision should specify: format (CSV, JSON, Parquet, SQL), completeness (all data including vendor-applied enrichments in both their proprietary format and a standard equivalent), timeline (30 days for full dataset, 48 hours for samples), and cost (no cost for scheduled exports, cost-capped for emergency exports).",
            "Data export rights that require the vendor's professional services team — billed at $250/hour — are not practical exit rights. Self-service data export in standard formats is the only meaningful data portability provision.",
          ),
          s(" Test the self-service data export function during the pilot phase — vendors who cannot demonstrate self-service export in the pilot will not be able to provide it at contract termination."),
        ],
        [
          s("Provision 2 — Model portability or retraining rights: fine-tuned model weights available for export, or vendor-assisted retraining with a competing vendor if you exercise termination. "),
          x(
            "Model portability: the vendor provides your fine-tuned model weights in an open format (ONNX, Hugging Face) that can be run on alternative infrastructure. This is achievable for vendors who use open-source base models. Model retraining rights: where portability is technically infeasible (proprietary base model), the vendor commits to providing your training dataset, fine-tuning methodology documentation, and 60 days of technical assistance for retraining with a new vendor.",
            "Model retraining rights are less valuable than model portability but significantly better than no provision at all. A vendor who provides retraining assistance reduces your exit timeline from 18 months (without assistance) to 6–9 months (with assistance).",
          ),
          s(" If the vendor uses an open-source base model (LLaMA, Mistral, Phi), model portability is achievable — require fine-tuned weights in ONNX format as a standard contract term."),
        ],
        [
          s("Provisions 3–5: output format standardisation, API compatibility, and transition assistance. "),
          x(
            "Output format standardisation: AI outputs (scores, classifications, recommendations, explanations) must conform to a documented, stable schema that the vendor commits not to change without 90 days' notice. API compatibility: major API changes require 180 days' notice and a compatibility period during which both old and new API versions are operational. Transition assistance: on termination, the vendor provides 90 days of technical assistance at no charge for data migration, API transition, and model documentation.",
            "Output format standardisation and API compatibility are the provisions most directly mitigating workflow and infrastructure lock-in — the two lock-in levels that accumulate most aggressively over time and are most difficult to reverse.",
          ),
          s(" API compatibility commitments with 180-day notice periods are the single most valuable lock-in mitigation for organisations with significant downstream system integration."),
        ],
      ],
      examples: [
        {
          title: "Technology company — model portability clause",
          body: "A technology company fine-tuned an AI code review vendor's model on their proprietary codebase. Before fine-tuning began, they negotiated a model portability clause: 'Vendor will make available to Customer the fine-tuned model weights in ONNX format within 30 days of any export request, at no charge, for any model trained on Customer's data.' Eighteen months later, the vendor raised prices 40%. The technology company exercised the export right, received the ONNX weights, and deployed the model on their own GPU infrastructure within 45 days. The model portability clause converted a 40% price increase from a coerced acceptance into a credible competitive threat — and the vendor subsequently revised the proposed increase.",
        },
        {
          title: "Healthcare — output format standardisation",
          body: "A hospital's AI clinical documentation contract specified output format standardisation: all AI outputs would be in HL7 FHIR R4 format, the vendor would provide 90 days' notice before any schema change, and a compatibility period of 90 days would be provided during which both old and new schemas were operational. When the vendor changed their output schema at month 14, the compatibility period gave the hospital's IT team time to update their six downstream integrations at a measured pace rather than as an emergency. Without the standardisation clause, the schema change would have broken downstream integrations on the day of the vendor's release.",
        },
        {
          title: "Retailer — transition assistance clause",
          body: "A retailer's AI demand forecasting contract included a 90-day transition assistance clause. When the retailer terminated for performance reasons after month 16, the vendor provided: a full data export in CSV format (day 3), API access for downstream system testing (days 1–90), two technical engineers for migration support (4 hours per week for 8 weeks), and model documentation including feature importance analysis (day 15). The transition assistance clause reduced the retailer's internal migration effort from an estimated 14 weeks to 8 weeks and prevented the knowledge loss that typically occurs when a vendor disengages immediately on termination notice.",
        },
      ],
    }),
    buildSection({
      number: "8.4",
      title: "Multi-vendor strategy as lock-in risk management",
      subtitle: "When to use multiple AI vendors in the same function and how to manage the complexity",
      take: "A multi-vendor strategy — using two or more vendors in the same or adjacent functions — reduces lock-in risk by maintaining competitive tension and alternative capability. The cost of multi-vendor complexity (higher management overhead, potential integration duplication) must be weighed against the lock-in risk reduction and the negotiating leverage that a credible alternative creates.",
      why: "A vendor who knows you have no credible alternative will price, behave, and perform differently than a vendor who knows you can switch within 90 days. Multi-vendor strategy is fundamentally a negotiating leverage instrument, not an operational preference.",
      paragraphs: [
        [
          s("Three circumstances justify a multi-vendor strategy: high lock-in risk, strategic function, and unproven vendor. "),
          x(
            "High lock-in risk: when the lock-in assessment score is 8–12 and portability provisions are insufficient. Strategic function: when the AI supports a function that directly affects revenue, customer relationships, or regulatory compliance. Unproven vendor: when the vendor is pre-Series C, lacks enterprise reference customers, or has a short track record. Any one of these circumstances may justify a multi-vendor approach; two or more make it strongly advisable.",
            "Multi-vendor strategies are not appropriate for every AI deployment. They add management complexity that may exceed the lock-in risk reduction for lower-stakes or lower-lock-in deployments.",
          ),
          s(" Use the lock-in assessment score as the trigger: scores 8+ trigger a multi-vendor evaluation, not as a preference but as a procurement risk control."),
        ],
        [
          s("Three multi-vendor strategy patterns are used in enterprise AI: parallel, primary/shadow, and function segmentation. "),
          x(
            "Parallel: two vendors process the same inputs independently; outputs are compared, with one vendor's output used operationally and the comparison providing performance benchmarking. Primary/shadow: one vendor handles production; a second is maintained in a lower-volume shadow mode to preserve integration familiarity and provide a tested switch option. Function segmentation: different vendors serve different sub-functions within the same domain (e.g., Vendor A for contract review, Vendor B for contract generation).",
            "The primary/shadow pattern provides the best balance of lock-in risk reduction and management overhead: you maintain operational simplicity with one primary vendor while preserving a tested alternative that can scale to primary status within weeks.",
          ),
          s(" The primary/shadow pattern requires maintaining a minimum volume with the shadow vendor — typically 5–10% of production volume — to keep the integration alive and the performance benchmark current."),
        ],
        [
          s("Multi-vendor strategy creates negotiating leverage that changes vendor commercial behaviour. "),
          x(
            "Disclosure of a parallel or shadow vendor changes the vendor's pricing and service posture at renewal. A vendor who knows you have a tested alternative — not a theoretical one — will not test price elasticity aggressively at renewal. The shadow vendor's existence is the most cost-effective negotiating tool available at contract renewal.",
            "The cost of maintaining a shadow vendor — 5–10% volume allocation and contract management overhead — is typically 8–12% of the primary contract value. The negotiating leverage generated at renewal typically saves 15–25% of the renewal value. The ROI of multi-vendor strategy is often positive even when the shadow vendor is never promoted to primary.",
          ),
          s(" Disclose the existence of the shadow vendor to the primary vendor 90 days before renewal — the information changes the renewal negotiation dynamic before it begins."),
        ],
      ],
      examples: [
        {
          title: "Financial services — primary/shadow pattern",
          body: "A bank maintained a primary AI document processing vendor (85% volume) and a shadow vendor (15% volume) under their fraud detection function. Both vendors processed the same 15% of transactions in parallel, allowing monthly performance comparison. At year two renewal, the primary vendor proposed a 28% price increase. The bank disclosed the shadow vendor's performance metrics — which showed 96% of the primary vendor's accuracy at 18% lower cost — and proposed a 5% increase. The primary vendor counter-proposed 12%. The parties settled at 8% — $140,000 below the original proposal. The shadow vendor's maintained integration was the negotiating instrument that generated the difference.",
        },
        {
          title: "Healthcare — function segmentation strategy",
          body: "A hospital system deployed two AI vendors in their clinical documentation function: Vendor A for outpatient and emergency department documentation (high volume, speed priority) and Vendor B for complex inpatient documentation (lower volume, accuracy priority). The function segmentation reduced lock-in risk — neither vendor handled the entire clinical documentation function — and created a natural performance comparison that the hospital used in both vendors' annual negotiations. When Vendor A's accuracy degraded in year two, the hospital expanded Vendor B's scope to the emergency department while Vendor A remediated — a contingency option that the function segmentation made operationally viable.",
        },
        {
          title: "Technology company — parallel pattern for R&D",
          body: "A technology company ran two AI code analysis vendors in parallel for six months before selecting a primary vendor. Both vendors processed the same code repositories and the company compared: accuracy on their specific codebase, latency, and integration effort. The parallel evaluation produced a primary vendor selection based on evidence rather than demo performance. Post-selection, the company maintained the second vendor's integration in a 5% shadow mode for 12 months — providing an active alternative that prevented the primary vendor from treating the company as captive at the first renewal negotiation.",
        },
      ],
    }),
    buildSection({
      number: "8.5",
      title: "Foundation model vs. fine-tuned model lock-in",
      subtitle: "How the choice between foundation models and fine-tuned models determines your long-term strategic flexibility",
      take: "The choice between using a general foundation model API versus fine-tuning a model on your proprietary data is the most significant lock-in decision in AI procurement. Foundation model API access creates infrastructure and format lock-in. Fine-tuned models create all four lock-in levels simultaneously — including model lock-in that persists indefinitely. Understanding this trade-off before the first fine-tuning decision is essential.",
      why: "Many organisations begin with foundation model API access and gradually move toward fine-tuned models as performance requirements increase. Each fine-tuning investment increases lock-in. Business leaders who understand this trajectory can make conscious decisions about when the performance benefit justifies the lock-in cost.",
      paragraphs: [
        [
          s("Foundation model API access: lower lock-in, lower performance ceiling. "),
          x(
            "Using a foundation model API (OpenAI, Anthropic, Google) without fine-tuning creates infrastructure and format lock-in but not model lock-in. Switching to a different foundation model provider requires prompt engineering adaptation and integration re-testing — typically 4–8 weeks of engineering effort. No training data or fine-tuning investment is lost.",
            "Foundation model API access is the appropriate starting point for most enterprise AI use cases: the performance ceiling of modern foundation models is high enough for most business applications without fine-tuning. Fine-tuning should be evaluated only when foundation model performance is documented as insufficient for the specific use case.",
          ),
          s(" Exhaust prompt engineering and retrieval-augmented generation (RAG) optimisation before committing to fine-tuning. Fine-tuning is a lock-in decision that should be made deliberately, not as a default."),
        ],
        [
          s("Fine-tuned models: higher performance ceiling, all four lock-in levels activated. "),
          x(
            "Fine-tuning a vendor's model on your proprietary data creates model lock-in at the deepest level: the performance advantage is inseparable from the vendor's base model architecture. If the vendor changes their base model, your fine-tuning is lost. If you want to switch vendors, you must retrain from scratch on the new vendor's base model — losing both the fine-tuning investment and the performance advantage.",
            "The performance advantage of fine-tuning is real and sometimes essential for specific use cases. The lock-in cost is also real and permanent. Quantify both before beginning fine-tuning — not after.",
          ),
          s(" Before fine-tuning, negotiate: model portability (ONNX export rights), base model continuity commitment from the vendor, and retraining assistance obligations if you switch vendors."),
        ],
        [
          s("Open-source model fine-tuning is the lock-in mitigation strategy for performance-critical deployments. "),
          x(
            "Fine-tuning an open-source model (LLaMA, Mistral, Phi) on your proprietary data creates model lock-in to the open-source architecture — not to a specific vendor. The fine-tuned weights are yours to run on any compatible infrastructure. Switching hosting vendors costs weeks of engineering, not months of retraining.",
            "Open-source model fine-tuning requires more internal capability: you need a team that can run and maintain model inference infrastructure. This capability requirement is itself a procurement decision — do you build it, partner for it, or accept the vendor lock-in that comes from using a proprietary model?",
          ),
          s(" For performance-critical AI use cases where fine-tuning is justified, prefer open-source base models — the lock-in mitigation they provide is worth the additional internal infrastructure investment in most enterprise contexts."),
        ],
      ],
      examples: [
        {
          title: "Legal firm — fine-tuning lock-in analysis",
          body: "A law firm evaluated fine-tuning a proprietary AI model on 100,000 internal contracts versus using a foundation model API with RAG. Performance comparison: fine-tuned model 94% accuracy, RAG-enhanced foundation model 88% accuracy. Lock-in comparison: fine-tuned model — model lock-in score 3, exit cost at 24 months $420,000; RAG approach — model lock-in score 0, exit cost at 24 months $45,000. The 6-percentage-point performance advantage was valued at $110,000 in recovered attorney time annually. The lock-in cost difference was $375,000 at 24 months. Decision: pursue RAG optimisation for 6 months; evaluate fine-tuning only if RAG cannot close the gap to 91%. The analysis deferred fine-tuning and preserved strategic flexibility.",
        },
        {
          title: "Healthcare — open-source fine-tuning strategy",
          body: "A hospital system's clinical AI team evaluated three approaches for clinical note processing: proprietary fine-tuned model, RAG on foundation model, and open-source model fine-tuning. Lock-in scores: proprietary fine-tuned (score 10 — high lock-in), RAG foundation (score 3 — low lock-in), open-source fine-tuned (score 4 — low lock-in on hosting, high on internal capability requirement). The hospital selected open-source fine-tuning with a managed hosting vendor — achieving performance comparable to the proprietary fine-tuned model while retaining model portability. When their managed hosting vendor raised prices 35%, the hospital migrated to a different hosting provider in 6 weeks with no retraining required.",
        },
        {
          title: "Financial services — RAG before fine-tuning",
          body: "A bank's AI team spent 10 weeks optimising a RAG pipeline for financial document analysis before evaluating fine-tuning. RAG with optimised retrieval achieved 89% accuracy — within 4 percentage points of the estimated fine-tuned model performance. The fine-tuning decision criteria required a demonstrated 5-percentage-point gap before fine-tuning was approved. The RAG approach did not reach the criteria. The bank deployed RAG-based AI, avoiding model lock-in while achieving commercially acceptable accuracy. The bank's enterprise architect calculated that the avoided fine-tuning lock-in was equivalent to 14 months of additional negotiating flexibility in their annual contract renewal.",
        },
      ],
    }),
    buildSection({
      number: "8.6",
      title: "Exit planning as ongoing governance",
      subtitle: "How to maintain a live exit plan that reduces lock-in accumulation and preserves strategic flexibility",
      take: "An exit plan is not a termination plan — it is a strategic document that documents your current exit costs, identifies the lock-in accumulation trajectory, and maintains the portability provisions and alternative vendor relationships that keep exit costs below the value-delivery threshold. An exit plan kept current makes strategic flexibility an operational reality rather than a contractual aspiration.",
      why: "Business leaders who do not maintain an exit plan discover their lock-in situation when they need to exit — the worst possible time to assess options. An exit plan maintained quarterly provides continuous intelligence about lock-in accumulation and triggers mitigating actions before lock-in becomes prohibitive.",
      paragraphs: [
        [
          s("A live exit plan has four components, reviewed quarterly. "),
          x(
            "1. Current exit cost estimate: quantified by lock-in level (data, model, workflow, infrastructure), updated quarterly as dependencies accumulate. 2. Alternative vendor status: the current performance benchmark and integration status of any shadow or alternative vendor. 3. Portability provision status: are the contractual portability provisions operational — can you actually export data, receive model weights, and access transition assistance? 4. Lock-in accumulation trigger: at what exit cost level does the business leader want to be notified and consider mitigating action?",
            "The lock-in accumulation trigger is the most important component: it converts a passive monitoring document into an active governance mechanism. A trigger at 150% of the annual contract value, for example, creates an automatic review point before lock-in becomes prohibitive.",
          ),
          s(" Assign ownership of the exit plan quarterly review to the vendor relationship owner — the same person responsible for vendor performance is the right owner for vendor exit planning."),
        ],
        [
          s("Portability provision testing confirms that contractual rights are operational, not theoretical. "),
          x(
            "Annually, test each portability provision: initiate a data export and confirm it completes in the specified format and timeline; verify that the alternative vendor's integration remains operational by routing a small production volume through it; review the model documentation to confirm it is current and sufficient for retraining; test the transition assistance process with a simulation exercise.",
            "Portability provisions that have never been exercised may not be operational: the vendor's team may have turned over, the export API may have changed, or the alternative vendor's integration may have drifted from the production configuration. Annual testing reveals operational gaps before they matter.",
          ),
          s(" Document the results of annual portability provision testing in the vendor governance file — untested provisions are theoretical protections that cannot be relied upon in a real exit scenario."),
        ],
        [
          s("Use the exit plan in annual renewal negotiations. "),
          x(
            "A current exit cost estimate, a tested alternative vendor, and operational portability provisions convert a renewal negotiation from a captive customer position into a genuine commercial negotiation. Share the exit plan summary — not the full document — with the vendor's account team 90 days before renewal. The signal that you have a quantified, operational exit capability changes the vendor's renewal strategy.",
            "The goal of sharing exit plan signals is not to threaten departure — it is to ensure the renewal negotiation is conducted between parties with genuine commercial alternatives. Vendors who know you have no credible exit will not negotiate in good faith.",
          ),
          s(" The exit plan's most important function is never to be executed — it is to prevent the conditions that would make execution necessary."),
        ],
      ],
      examples: [
        {
          title: "Healthcare — exit plan triggers mitigation action",
          body: "A hospital's quarterly exit plan review at month 20 found: current exit cost had risen to $380,000 (from $140,000 at contract signature), driven primarily by workflow lock-in accumulation in 14 clinical specialties. The lock-in accumulation trigger was set at $300,000 — the trigger had been crossed. The hospital's CTO convened a lock-in review meeting. Actions taken: standardised output format clause negotiated for next renewal, shadow vendor integration established at 8% volume, and workflow documentation project initiated to make the AI's output format requirements explicit for a transition scenario. The trigger mechanism converted a passive monitoring exercise into concrete mitigation actions.",
        },
        {
          title: "Financial services — portability provision testing",
          body: "A bank's annual portability provision test for their AI analytics vendor revealed: data export completed in standard CSV format in 28 hours (within the 30-day specification), alternative vendor integration processed 12% of production volume without incident, but model documentation review found the fine-tuning methodology documentation had not been updated in 9 months and did not reflect three model versions. The bank notified the vendor of the documentation gap and required an updated methodology document within 30 days as a contract compliance matter. The testing identified a gap that would have made model retraining documentation inadequate for a real exit scenario.",
        },
        {
          title: "Technology company — exit plan at renewal",
          body: "A technology company's vendor relationship owner shared an exit plan summary with the primary AI vendor's account team 90 days before renewal: 'We have completed our annual exit plan review. Our exit cost estimate is $180,000 at the current contract term. We have an operational shadow vendor integration at 8% volume with equivalent capability documented. Our portability provisions were tested successfully in Q3.' The vendor's account team's renewal proposal — initially containing a 22% price increase — was revised to 9% in the pre-negotiation revision. The exit plan summary, without any direct threat of departure, changed the vendor's commercial opening position by 13 percentage points.",
        },
      ],
    }),
    buildSection({
      number: "8.7",
      title: "Regulatory and competitive lock-in risks",
      subtitle: "How AI vendor concentration risk creates regulatory exposure and competitive vulnerability",
      take: "AI vendor lock-in creates two systemic risks beyond the direct exit cost: regulatory concentration risk (regulators increasingly scrutinise single-vendor dependency for critical business functions) and competitive vulnerability (a competitor who switches to a superior AI vendor while you remain locked in accumulates a widening performance advantage). Managing lock-in is not just about exit cost — it is about strategic optionality in a rapidly evolving market.",
      why: "Business leaders who frame AI lock-in purely as a vendor management issue miss its strategic dimensions. The competitive and regulatory risks of AI concentration are growing as AI becomes more central to business performance — making lock-in management a strategic priority rather than a procurement hygiene requirement.",
      paragraphs: [
        [
          s("Regulatory concentration risk is emerging as AI regulators focus on operational resilience. "),
          x(
            "Financial services regulators (FCA, OCC, ECB) have begun requiring operational resilience assessments that include AI vendor concentration risk. A bank that runs its credit decisioning entirely through a single AI vendor with no tested alternative has a concentration risk profile that regulators are beginning to require explicit mitigation for — independent of the vendor's own reliability.",
            "The EU Digital Operational Resilience Act (DORA) — applicable to financial services firms from January 2025 — requires concentration risk management for critical third-party ICT providers. AI vendors used for critical business functions increasingly qualify as critical ICT providers under DORA and equivalent frameworks.",
          ),
          s(" Map your AI vendor dependencies against applicable operational resilience regulations. If an AI vendor is critical to a regulated business function, concentration risk management is a compliance requirement, not just a best practice."),
        ],
        [
          s("Competitive vulnerability from AI lock-in accumulates faster than traditional technology lock-in. "),
          x(
            "The AI model performance curve is steeper than the software improvement curve. A competitor who switches to a new AI vendor achieving 15% better accuracy in your function gains a compounding advantage: better decisions today mean better training data tomorrow, which means better models in six months. Your locked-in AI's static performance cannot compound against a competitor's improving system.",
            "This dynamic — the compounding advantage of better AI performance — makes AI lock-in a competitive risk on a faster timeline than traditional software lock-in. A software product that is 15% better than your current tool is a competitive advantage. An AI that is 15% more accurate is a compounding competitive advantage.",
          ),
          s(" Include AI competitive performance benchmarking in your quarterly exit plan review — not just internal performance measurement, but comparison to the current market leaders in your AI function."),
        ],
        [
          s("Strategic optionality is the ultimate value of lock-in risk management. "),
          x(
            "A business leader who maintains low lock-in costs, operational portability provisions, and current alternative vendor relationships has strategic optionality: the ability to adopt better technology as it emerges without paying prohibitive switching costs. In a market where AI capabilities are improving quarterly, strategic optionality is worth more than the cost of maintaining it.",
            "The cost of maintaining strategic optionality — multi-vendor overhead, portability provision negotiation time, exit plan maintenance — is typically 3–8% of the primary AI contract value annually. The value of adopting a 15%-better AI at the optimal moment, compounded over 18 months, typically exceeds this cost by a factor of 4–10×.",
          ),
          s(" Frame AI lock-in management to your board as strategic optionality investment — not as vendor risk management overhead. The framing change converts a cost centre into a competitive capability."),
        ],
      ],
      examples: [
        {
          title: "Financial services — DORA concentration risk mapping",
          body: "A bank's operational resilience team mapped AI vendor dependencies against DORA critical ICT provider criteria. Three AI vendors qualified as critical: AI credit decisioning (revenue-critical, no tested alternative), AI fraud detection (compliance-critical, tested shadow vendor at 12% volume), and AI anti-money-laundering (regulatory-critical, no tested alternative). The mapping identified two critical AI functions with no tested alternative — a DORA concentration risk finding. The bank built out shadow vendor integrations for both critical functions within 6 months — converting DORA compliance from a finding into a documented mitigation.",
        },
        {
          title: "Retailer — competitive performance benchmarking",
          body: "A retailer's quarterly exit plan review added competitive AI performance benchmarking starting in Q2. The benchmark compared their primary AI personalisation vendor's accuracy against the two current market leaders. At Q2: their vendor was within 3 percentage points of market leaders — acceptable. At Q4: market leader accuracy had improved significantly; the retailer's vendor was now 11 percentage points behind. The competitive gap — not vendor relationship issues — triggered an evaluation of the market leaders. The retailer's low lock-in score (3/12) made switching evaluation feasible without a prohibitive exit cost. The exit plan's competitive benchmarking turned a market development into an actionable strategic option.",
        },
        {
          title: "Professional services — strategic optionality framing",
          body: "A professional services firm's CTO presented AI lock-in management to the board as 'strategic optionality investment': 'We currently spend $120,000 per year on multi-vendor overhead and portability provision maintenance across our AI portfolio. In exchange, we have the ability to adopt the market-leading AI tool in any function within 90 days of identifying it — without paying switching costs that average $280,000 per function in the absence of portability provisions. The optionality is worth $1.4M annually at current switching cost rates across five AI functions. This is a return of 11.7× on the optionality investment.' The board approved an increase in multi-vendor overhead to cover a sixth AI function.",
        },
      ],
    }),
    buildSection({
      number: "8.8",
      title: "BL decision lens: your AI lock-in risk scorecard",
      subtitle: "A structured tool for assessing and managing lock-in risk across your entire AI vendor portfolio",
      take: "The AI lock-in risk scorecard aggregates lock-in assessments across your vendor portfolio into a single governance view: each vendor's lock-in score, exit cost at current contract term, portability provision status, and alternative vendor readiness. The portfolio view reveals concentration risk, tracks lock-in accumulation over time, and drives mitigating actions before individual vendor lock-in becomes a portfolio-level strategic problem.",
      why: "Individual AI vendor lock-in management is a procurement skill. Portfolio-level lock-in management is a strategic governance responsibility. Business leaders with both skills protect their organisations from individual vendor dependency and from sector-wide concentration in AI capabilities that regulators and boards are increasingly scrutinising.",
      paragraphs: [
        [
          s("The portfolio lock-in scorecard has one row per AI vendor with six columns. "),
          x(
            "Column 1: Vendor name and function. Column 2: Lock-in score (0–12), decomposed by level. Column 3: Exit cost at current contract term end date. Column 4: Portability provisions status (all operational/partial/none). Column 5: Alternative vendor status (operational shadow/evaluated not deployed/none). Column 6: Lock-in accumulation trend (stable/increasing/accelerating).",
            "The scorecard is reviewed quarterly by the vendor relationship owner and annually by the business leader. Quarterly reviews track changes in columns 3 and 6 — exit cost and trend. Annual reviews assess strategic decisions: is each vendor relationship voluntary or coerced?",
          ),
          s(" Add the portfolio scorecard to your quarterly business review agenda — it belongs alongside financial performance, not in a separate vendor management meeting."),
        ],
        [
          s("Three portfolio-level signals require immediate management action. "),
          x(
            "Signal 1 — Portfolio concentration: more than 40% of AI spend with a single vendor. Signal 2 — Exit cost cascade: if two or more primary vendors were to fail simultaneously, could you absorb the combined exit cost? Signal 3 — Portability provision gap: more than two vendors with no operational portability provisions. Each signal indicates that your AI portfolio has accumulated strategic vulnerability that requires active mitigation.",
            "Portfolio concentration and exit cost cascade are analogous to financial concentration risk: just as a portfolio concentrated in one asset class is structurally vulnerable, an AI portfolio concentrated in one vendor or with cascading exit costs is strategically vulnerable.",
          ),
          s(" Model the cascade scenario annually: if your top two AI vendors both required replacement in the same 18-month period, what would the total exit cost and transition timeline be?"),
        ],
        [
          s("The scorecard drives board reporting on AI strategic risk. "),
          x(
            "Boards increasingly want visibility into AI vendor dependency risk — not just IT governance but strategic exposure. A portfolio lock-in scorecard with a quarterly trend analysis converts AI vendor risk from a technical IT topic into a strategic governance item that boards can understand and engage with meaningfully.",
            "The board-level framing: 'We have eight AI vendors with a portfolio lock-in score of 4.2/12 (low-medium). Total exit cost at portfolio level is $840,000 — within acceptable parameters. Two vendors are in the medium-high lock-in range and are flagged for portability provision negotiation at their next renewal. No portfolio concentration signals are present.' This is a strategic risk report, not an IT governance report.",
          ),
          s(" Produce the portfolio lock-in scorecard in a board-readable format — one page, strategic framing, no technical detail — and include it in the annual strategy review rather than the IT governance committee."),
        ],
      ],
      examples: [
        {
          title: "Portfolio scorecard — quarterly review outcome",
          body: "A financial services firm's Q3 portfolio scorecard review covered 11 AI vendors. Total portfolio lock-in score: 4.8/12 (acceptable). Exit cost at current contract terms: $1.2M. Two vendors flagged for accelerating lock-in: Vendor D (AI document processing, score rising from 4 to 7 over two quarters due to new workflow dependencies) and Vendor G (AI risk scoring, no portability provisions, score 9). Actions: Vendor D — initiate portability provision negotiation at Q4 renewal; Vendor G — initiate shadow vendor evaluation and require portability provisions at next renewal. The quarterly review identified two emerging risks before they reached the trigger threshold — enabling proactive rather than reactive mitigation.",
        },
        {
          title: "Cascade scenario modelling",
          body: "A healthcare system modelled the cascade scenario: if their top two AI vendors (clinical documentation and scheduling optimisation) both required replacement in the same 18-month window. Combined exit cost: $680,000. Internal capacity to manage two simultaneous AI transitions: limited — both functions required the same IT integration team. Cascade impact assessment: 18-month transition would require either delaying one transition by 9 months (during which performance degrades or costs are absorbed) or engaging external migration support at $180,000. The cascade scenario modelling identified a capability constraint that portfolio diversification could not fully address — leading to a 12-month IT capacity investment in AI transition skills.",
        },
        {
          title: "Board reporting — portfolio lock-in",
          body: "A professional services firm's CTO presented the annual portfolio lock-in scorecard to the board: 'Our AI vendor portfolio spans 9 vendors across 6 functions. Portfolio lock-in score: 3.8/12 (low). Total exit cost at current contract terms: $620,000 across the portfolio — equivalent to 14% of annual AI spend. No concentration risk signals (largest vendor is 31% of spend). One vendor flagged for medium-high lock-in (legal research AI, score 7, exit cost $240,000). This vendor is being evaluated for portability provision negotiation at renewal in Q2. The portfolio maintains strategic optionality across all six AI functions.' The board engaged substantively with the concentration risk framing and approved the portability provision negotiation budget.",
        },
      ],
    }),
  ],
  quiz: [
    {
      q: "Which of the four AI vendor lock-in levels is most difficult to reverse after 24 months of deployment?",
      options: [
        "Data lock-in — because data accumulates in proprietary formats",
        "Model lock-in — because fine-tuned model weights cannot be transferred between vendors",
        "Workflow lock-in — because processes rebuilt around AI-specific outputs require significant redesign to change",
        "Infrastructure lock-in — because API changes require re-engineering downstream systems",
      ],
      correct: 2,
      correctFeedback: "Correct. Workflow lock-in is the most difficult to reverse because it involves organisational change — teams, processes, and decisions have been rebuilt around the AI's specific output formats and confidence scoring patterns. Reversing workflow lock-in requires both technical reconfiguration and organisational change management.",
      wrongFeedback: "While all four lock-in levels accumulate over time, workflow lock-in is hardest to reverse because it involves organisational adaptation — people and processes that have learned to work with specific AI outputs. Data and infrastructure lock-in are addressable with engineering effort; workflow lock-in requires both engineering and change management.",
    },
    {
      kind: "categorize",
      q: "Categorise these AI deployment characteristics as either 'High lock-in risk — negotiate portability provisions' or 'Low lock-in risk — standard contract terms acceptable':",
      categories: ["High lock-in risk — negotiate portability provisions", "Low lock-in risk — standard contract terms acceptable"],
      items: [
        { text: "Fine-tuning a proprietary vendor model on your proprietary data", category: 0 },
        { text: "Vendor-specific output format with no open standard equivalent", category: 0 },
        { text: "Multiple downstream systems consuming vendor-specific API output format", category: 0 },
        { text: "Foundation model API access without fine-tuning", category: 1 },
        { text: "AI tool with standard CSV data export included in base pricing", category: 1 },
        { text: "Output format in open standard (HL7 FHIR, ISO 20022)", category: 1 },
      ],
      correctFeedback: "Correct. High lock-in risks (proprietary fine-tuning, proprietary output formats, multiple downstream system dependencies) require portability provisions. Low lock-in risks (foundation model APIs, standard export formats, open output standards) have manageable exit costs without additional provisions.",
      wrongFeedback: "Lock-in risk is driven by proprietary dependencies — formats, model weights, and integration patterns that cannot be replicated without the vendor. Open standards and foundation model APIs avoid these proprietary dependencies.",
    },
    {
      kind: "order",
      q: "Order these steps in building and maintaining an AI exit plan from first to last:",
      items: [
        "Assess lock-in risk at each of the four levels before contract signature",
        "Negotiate portability provisions calibrated to the lock-in risk score",
        "Establish alternative vendor integration at minimum production volume",
        "Test portability provisions annually to confirm they are operational",
        "Use exit plan summary in renewal negotiations to maintain commercial leverage",
      ],
      prompt: "Drag to arrange in the correct sequence",
      correctFeedback: "Correct. The exit plan lifecycle: assess before signing, negotiate provisions before committing, establish alternatives early, test provisions annually, use the plan as a leverage instrument at renewal.",
      wrongFeedback: "Exit planning follows a procurement-to-renewal lifecycle. Assessment before signing shapes provision negotiation. Alternative vendor establishment in the early contract period preserves optionality. Annual testing confirms the plan is operational. Renewal use generates commercial value from the investment.",
    },
    {
      q: "What is the primary strategic value of maintaining a shadow vendor at 5–10% of production volume?",
      options: [
        "Ensuring business continuity if the primary vendor suffers an outage",
        "Providing a tested, operational alternative that changes vendor behaviour at renewal negotiations",
        "Reducing unit costs through volume distribution across multiple vendors",
        "Meeting regulatory requirements for operational resilience",
      ],
      correct: 1,
      correctFeedback: "Correct. The primary strategic value of a shadow vendor is the negotiating leverage it creates at renewal: a tested alternative with documented performance makes your exit capability credible, which changes the primary vendor's renewal pricing and behaviour. Business continuity and regulatory benefits are secondary advantages.",
      wrongFeedback: "A shadow vendor's primary strategic value is commercial — it converts you from a captive customer into a customer with a credible alternative, changing vendor behaviour at renewal. Business continuity, cost reduction, and regulatory compliance are secondary benefits.",
    },
    {
      q: "Why should a business leader prefer open-source model fine-tuning over proprietary model fine-tuning for performance-critical AI deployments?",
      options: [
        "Open-source models always achieve higher accuracy than proprietary models",
        "Open-source fine-tuned models have portable weights that can run on any compatible infrastructure, eliminating model lock-in to a specific vendor",
        "Open-source models are free to use and therefore reduce total cost of ownership",
        "Proprietary models cannot be fine-tuned on customer data",
      ],
      correct: 1,
      correctFeedback: "Correct. Open-source model fine-tuning creates portable model weights that can be deployed on any compatible hosting infrastructure. When you change hosting vendors, you move the weights — no retraining required. Proprietary model fine-tuning creates weights that are inseparable from the vendor's infrastructure, requiring full retraining to switch vendors.",
      wrongFeedback: "The lock-in advantage of open-source fine-tuning is portability: the fine-tuned weights are yours to run anywhere compatible hardware exists. Accuracy, cost, and fine-tuning availability are secondary considerations compared to the strategic flexibility that portable weights provide.",
    },
    {
      q: "At what portfolio lock-in signal level should a business leader escalate AI vendor risk to the board?",
      options: [
        "When any single vendor has a lock-in score above 8/12",
        "When the portfolio is approaching 40% of AI spend with a single vendor, exit cost cascade risk is present, or more than two vendors have no operational portability provisions",
        "When the total exit cost across the portfolio exceeds $1M",
        "When the board specifically requests an AI vendor risk review",
      ],
      correct: 1,
      correctFeedback: "Correct. The three portfolio-level signals requiring board escalation are: concentration risk (>40% spend with one vendor), exit cost cascade risk (inability to absorb simultaneous multi-vendor replacement), and portability provision gap (>2 vendors with no operational protections). Any one of these signals indicates strategic vulnerability requiring board-level attention.",
      wrongFeedback: "Board escalation is triggered by portfolio-level structural risks: concentration (>40% with one vendor), cascade risk (multiple simultaneous replacements unaffordable), or portability gap (>2 vendors unprotected). Individual vendor lock-in scores and absolute cost thresholds are management-level signals, not board-level escalation triggers.",
    },
  ],
});
