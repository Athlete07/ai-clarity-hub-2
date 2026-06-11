import { buildChapter, buildSection, s, x } from "../concepts-pb4-helpers";

export const chapter06BlSlaStandardsAiProducts = buildChapter({
  slug: "bl-sla-standards-ai-products",
  number: 6,
  shortTitle: "SLA Standards for AI",
  title: "SLA Standards for AI Products",
  readingMinutes: 25,
  summary:
    "Standard SLAs cover uptime, response time, and support tiers. AI product SLAs must additionally cover model accuracy, inference latency, output quality degradation, and AI-specific incident categories that do not exist in traditional software. Business leaders who apply standard SLA frameworks to AI deployments accept unmeasured quality risk and receive credits only when the system is down — not when the system is up but producing wrong answers.",
  keyTakeaway:
    "An AI product can have 99.9% uptime and simultaneously have a model that has drifted from 92% accuracy to 74% accuracy — delivering wrong outputs reliably rather than no outputs occasionally. Standard uptime SLAs cannot detect this failure. AI SLAs require accuracy thresholds, inference latency standards, output quality monitoring, and incident categories that address AI-specific failure modes alongside traditional availability metrics.",
  pmCallout:
    "As a business leader: the SLA in your AI contract determines what you measure, what the vendor is accountable for, and what compensation you receive when the AI fails. An AI with an excellent uptime SLA and no accuracy SLA is a vendor who is accountable for the lights being on — not for the AI doing its job.",
  sections: [
    buildSection({
      number: "6.1",
      title: "Why standard SLAs fail for AI products",
      subtitle: "The three failure modes standard SLAs cannot detect in AI systems",
      take: "Standard SLAs measure availability (is the system up?), response time (how fast does it respond?), and support tiers (how quickly does the vendor respond to support tickets?). AI systems can meet all three standards while systematically failing on accuracy, producing biased outputs, or generating harmful content. Standard SLAs are necessary but fundamentally insufficient for AI quality governance.",
      why: "Business leaders who deploy AI with only standard SLAs are measuring the wrong thing. An AI that is always available and always fast but consistently wrong is a liability, not an asset. AI SLAs must measure what the system does, not just whether it is running.",
      paragraphs: [
        [
          s("The three AI-specific failure modes standard SLAs cannot detect. "),
          x(
            "1. Model drift: the model's accuracy degrades gradually over time as the world changes and the training data becomes less representative. An uptime SLA records no incident. The system delivers outputs at full speed — just increasingly wrong ones. 2. Distributional shift: the input distribution changes (new document types, new customer segments) and the model's performance on the new distribution is unknown. 3. Adversarial failure: a user or a data quality issue causes systematic output degradation for a specific user segment — not visible in aggregate accuracy metrics.",
            "Each failure mode is invisible to uptime and response time monitoring. Each requires AI-specific monitoring — accuracy measurement on representative samples, input distribution tracking, and segment-level performance analysis.",
          ),
          s(" Add AI-specific failure mode monitoring to every AI SLA framework — these failures are more operationally damaging than downtime for most AI deployments."),
        ],
        [
          s("The cost of AI accuracy failure is often higher than the cost of AI downtime. "),
          x(
            "When an AI system is down, users know not to rely on it — they use manual alternatives. When an AI system is up but producing wrong outputs, users may not know the outputs are wrong and continue to rely on them. A wrong fraud flag that clears a fraudulent transaction costs far more than a system outage that prevents any transaction processing.",
            "This asymmetry — known downtime vs. unknown accuracy failure — is why uptime SLAs are inadequate for AI risk governance. The most dangerous AI failure is invisible to the user.",
          ),
          s(" Frame AI SLA design around the cost of invisible failure, not just visible downtime — the cost analysis will consistently favour investing in accuracy monitoring over uptime monitoring."),
        ],
        [
          s("Standard SLA credit structures compensate for availability, not accuracy. "),
          x(
            "A standard SLA might provide a 10% service credit if uptime falls below 99.9% in a month. If the AI system has 99.95% uptime but 74% accuracy (down from 92%), the buyer receives no credit — despite experiencing a dramatically degraded service. AI SLA credit structures must include accuracy threshold breaches and quality degradation events alongside availability breaches.",
            "Accuracy-linked service credits create a financial incentive for the vendor to monitor and maintain model quality, not just system availability. Without accuracy-linked credits, the vendor's incentive structure does not reward quality maintenance.",
          ),
          s(" Design AI SLA credit structures that are at least as financially significant for accuracy breaches as for uptime breaches."),
        ],
      ],
      examples: [
        {
          title: "Insurance AI — uptime SLA masks accuracy failure",
          body: "An insurer's AI claims triage system maintained 99.97% uptime for 18 months. During this period, model drift caused accuracy to decline from 89% to 71% — a decline that went undetected because the SLA only measured availability and response time. The insurer discovered the accuracy decline during an annual internal audit, not through SLA monitoring. By that time, approximately 14% of claims had been mis-triaged — creating both financial exposure and customer service failures. An accuracy SLA with quarterly measurement and a 5-percentage-point degradation threshold would have triggered a remediation obligation 11 months earlier.",
        },
        {
          title: "Financial services — invisible accuracy failure cost",
          body: "A bank's AI anti-money-laundering system had 99.9% uptime and met all standard SLA metrics. Over 14 months, distributional shift caused the model to miss a new pattern of structured transactions used by a money-laundering network. The bank was cited by regulators for inadequate AML controls — a regulatory consequence of an AI accuracy failure that was invisible to every standard SLA metric. The regulatory penalty exceeded five years of the AI vendor's contract value. An AML-specific input distribution monitoring SLA — tracking transaction pattern distribution shifts — would have provided the signal that uptime monitoring could not.",
        },
        {
          title: "Healthcare — credit structure redesign",
          body: "A hospital renegotiated its AI clinical documentation SLA before renewal. The original SLA: 99.5% uptime, 2-second response time, Tier 1 support response within 4 hours. The renegotiated SLA added: minimum accuracy of 88% on agreed clinical note sample (measured monthly), maximum hallucination rate of 0.5% on medication dosages (measured monthly), credit structure of 15% for accuracy breach and 8% for hallucination breach — larger than the 5% credit for uptime breach. The renegotiation reflected the hospital's actual risk profile: an inaccurate AI documentation tool that is always available is more dangerous than a temporarily unavailable tool.",
        },
      ],
    }),
    buildSection({
      number: "6.2",
      title: "Accuracy SLA: metrics, thresholds, and measurement",
      subtitle: "How to specify an enforceable accuracy SLA for an AI product",
      take: "An accuracy SLA requires four elements: the metric (F1 score, precision, recall, MAPE, or agreement rate), the threshold (minimum acceptable value), the measurement method (who measures what, using which data), and the measurement frequency (monthly, quarterly, or event-triggered). Missing any element creates a warranty gap that the vendor will exploit when performance degrades.",
      why: "Accuracy SLA design is a business decision before it is a legal decision. The business leader must specify what accuracy means for their use case — the legal team can only draft the provision the business has defined.",
      paragraphs: [
        [
          s("Metric selection must match the business impact of the AI's error types. "),
          x(
            "Precision (ratio of correct positive predictions to all positive predictions) matters when false positives are costly: a fraud flag that incorrectly blocks a legitimate customer causes customer experience damage. Recall (ratio of correct positive predictions to all actual positives) matters when false negatives are costly: a fraud miss that allows a fraudulent transaction through causes financial loss. For most business use cases, both matter — use F1 score (the harmonic mean of precision and recall) as the primary accuracy metric.",
            "Choosing the wrong accuracy metric creates an SLA that measures the wrong failure mode. A vendor optimising for the measured metric will improve it at the expense of unmeasured metrics.",
          ),
          s(" Define accuracy metric selection as a business decision: which error type (false positive or false negative) is more costly in your specific use case?"),
        ],
        [
          s("The accuracy threshold must be set below the demo performance and above the minimum operational threshold. "),
          x(
            "Demo performance: the accuracy observed in the vendor's demonstration. Minimum operational threshold: the accuracy below which the AI delivers less value than the manual alternative it replaced. The SLA threshold should be set at the minimum operational threshold — typically 10–15 percentage points below demo performance — to allow for the demo-to-production gap and model variation without triggering remedies unnecessarily.",
            "Setting the SLA threshold at demo performance creates an SLA that is breached immediately and constantly — which destroys the remedy mechanism by making it routine. Setting it too low means it is never breached and never protects.",
          ),
          s(" Determine the minimum operational threshold empirically by asking: at what accuracy level does this AI deliver less value than the human workflow it replaces?"),
        ],
        [
          s("Measurement frequency must balance monitoring burden against detection speed. "),
          x(
            "Monthly measurement: catches drift within 30 days but requires a monthly measurement process. Quarterly measurement: reduces process overhead but allows up to 90 days of undetected degradation. Event-triggered measurement: required when model updates are pushed — ensures performance is verified after every change. The recommended standard: monthly measurement during the first year (calibration period), quarterly thereafter, plus event-triggered after every major model update.",
            "Event-triggered measurement after model updates is the most important measurement provision: model updates are the most common single cause of AI accuracy degradation, and verifying accuracy immediately after an update prevents extended periods of degraded performance.",
          ),
          s(" Include event-triggered accuracy measurement as a standard provision, separate from the periodic measurement schedule."),
        ],
      ],
      examples: [
        {
          title: "Fraud detection — precision vs. recall trade-off",
          body: "A payment processor evaluated AI fraud detection and designed their accuracy SLA around the business impact of error types. Analysis showed: each false positive (incorrectly blocked transaction) costs $12 in customer service and recovery. Each false negative (missed fraud) costs $340 on average. The cost ratio was 28:1 in favour of recall. The SLA specified a minimum recall of 87% as the primary metric, with precision tracked as a secondary metric with no penalty threshold. This metric selection aligned the vendor's incentives with the business's actual risk profile rather than optimising for balanced F1.",
        },
        {
          title: "Legal AI — minimum operational threshold",
          body: "A law firm determined their minimum operational threshold for AI contract review: at 80% accuracy on clause identification, the AI eliminated less senior associate review time than it added in partner review of AI errors. Below 80%, the AI increased total review time relative to manual review. The firm set the SLA threshold at 82% — 2 percentage points above the minimum operational threshold — to provide a buffer before reaching the point where the AI was net-negative to workflow. The demo performance was 93%. The 11-percentage-point demo-to-threshold gap was the correct calibration: not at demo performance (where the SLA would constantly breach) and not at zero (where it would never protect).",
        },
        {
          title: "Healthcare — event-triggered measurement after update",
          body: "A hospital's AI clinical documentation SLA included event-triggered accuracy measurement within 48 hours of any major model update. In month eight, the vendor pushed a model update and the 48-hour measurement found accuracy on specialist physician notes had dropped from 91% to 83% — below the 85% SLA threshold. The event-triggered measurement generated an automatic service credit and a 15-day remediation obligation. The remediation delivered a fix within 12 days. Without the event-triggered measurement, the degradation would have been detected at the next monthly review — 22 days later, with 22 additional days of degraded documentation quality.",
        },
      ],
    }),
    buildSection({
      number: "6.3",
      title: "Inference latency and throughput SLAs",
      subtitle: "How to set AI response time standards that match your workflow requirements",
      take: "Inference latency — the time from input to AI output — is a workflow performance standard, not a technical performance standard. An AI that responds in 4 seconds is excellent for a background batch process and unacceptable for a real-time customer interaction. Latency SLAs must be specified at the workflow level, not at the system benchmark level.",
      why: "Vendors benchmark and market latency at the system level — optimal hardware, minimal load, pre-warmed caches. Your workflow experiences latency at the production level — shared infrastructure, peak load, variable input complexity. The gap between benchmark latency and production latency is the most commonly misunderstood SLA metric in AI procurement.",
      paragraphs: [
        [
          s("Workflow latency requirements determine SLA thresholds. "),
          x(
            "Real-time interaction AI (chatbots, voice assistants, live recommendations): maximum 2 seconds for first token, 50ms per subsequent token. Workflow automation AI (document processing, form classification): maximum 15 seconds per document. Batch processing AI (nightly analytics, weekly forecasting): throughput measured in documents per hour, not latency per document. Each workflow type has a different latency standard and a different business impact when the standard is not met.",
            "Using the same latency SLA for real-time and batch AI is the equivalent of applying an airplane speed standard to a cargo ship. The measurement is meaningless relative to operational requirements.",
          ),
          s(" Classify your AI use case as real-time, workflow automation, or batch before specifying any latency SLA."),
        ],
        [
          s("Peak load latency must be specified separately from average latency. "),
          x(
            "A vendor who provides average latency of 1.2 seconds may have peak-load latency of 8 seconds — during business hours, when your team most needs the AI. SLA latency specifications must include: P50 (median latency), P95 (95th percentile — the experience of 1 in 20 users during normal load), and P99 (99th percentile — the experience during peak load). P95 and P99 are the operational standards; P50 is a benchmark metric.",
            "P95 and P99 latency specifications are the standards that reveal peak-load performance. A vendor who offers only median latency in their SLA is concealing their peak-load performance.",
          ),
          s(" Require vendors to specify P95 and P99 latency in their SLA proposals. Vendors who cannot provide P95 and P99 data have not run load testing at your expected production volume."),
        ],
        [
          s("Throughput SLAs matter more than latency SLAs for batch AI deployments. "),
          x(
            "A document processing AI that processes one document in 2 seconds is irrelevant if you process 10,000 documents per night and the SLA does not specify a minimum throughput. Throughput SLA: minimum 5,000 documents per hour on 24-hour processing windows, measured as the P95 rate over any rolling 30-day period. This SLA addresses the business requirement (all documents processed before the next business day) rather than the technical benchmark (fast per document).",
            "Throughput SLAs should be specified in business-meaningful units: documents per business day, transactions per hour during business hours, reports completed by a specified time.",
          ),
          s(" Convert latency benchmarks into throughput requirements for batch AI: 'Can you process our nightly volume by 6:00 AM?' is the business requirement. The technical latency spec is the means to achieving it."),
        ],
      ],
      examples: [
        {
          title: "Customer service AI — real-time latency SLA",
          body: "A retailer's AI customer service chatbot SLA specified P95 latency of 1.5 seconds for first response. During Black Friday peak traffic, the vendor's infrastructure hit P99 latency of 6.8 seconds — creating visible hesitation between customer queries and AI responses. Customer satisfaction scores dropped 14 points during the peak period. A P99 latency SLA of 3 seconds — with a credit trigger at breach — would have required the vendor to provision adequate peak infrastructure. The absence of a P99 specification allowed the vendor to design for average load.",
        },
        {
          title: "Financial services — throughput SLA saves the close",
          body: "A bank's AI document processing system processed loan applications. The SLA specified throughput of 500 applications per hour during business hours. At month-end, application volume spiked to 1,200 per hour. The SLA provided for burst capacity of 150% of standard throughput — 750 applications per hour — with a 4-hour grace period before credit triggers applied. The month-end volume exceeded the burst capacity. The credit trigger activated. The vendor provisioned additional infrastructure within the 4-hour grace period and processed the backlog without breach. The throughput SLA with burst capacity provision created the right incentive for the vendor to respond before the grace period expired.",
        },
        {
          title: "Healthcare — batch AI throughput requirement",
          body: "A hospital's AI radiology support tool processed overnight imaging scans to support morning rounds. The business requirement was: all scans ordered before midnight processed and reported by 6:00 AM. The SLA specified: 100% of scans processed within 6 hours of submission during overnight batch window, measured monthly. In month four, a vendor infrastructure issue caused 23% of scans to miss the 6-hour window. The attending radiologists identified the gap at 6:05 AM and conducted manual review before rounds. The SLA breach was confirmed by the measurement protocol and triggered a service credit equivalent to 8% of monthly fees. The business requirement — not a latency specification — drove the SLA design.",
        },
      ],
    }),
    buildSection({
      number: "6.4",
      title: "Output quality SLAs beyond accuracy",
      subtitle: "Hallucination rates, bias monitoring, and harmful output SLAs for generative AI deployments",
      take: "Generative AI products require output quality SLAs that go beyond accuracy: hallucination rate (factually incorrect outputs presented as factual), harmful content rate (outputs that violate safety guidelines), demographic bias rate (differential output quality across demographic groups), and relevance score (outputs that are accurate but not responsive to the input). Each of these dimensions has business consequences that accuracy metrics alone do not capture.",
      why: "Business leaders deploying generative AI without output quality SLAs accept open-ended liability for hallucinations, harmful content, and biased outputs. These risks are measurable and contractually addressable — but only if the business leader specifies the measurement standards before the contract is signed.",
      paragraphs: [
        [
          s("Hallucination rate is the primary output quality metric for large language model deployments. "),
          x(
            "Hallucination rate: the percentage of AI outputs that contain factual claims not supported by the source material or known facts. For a legal research AI, any citation to a case that does not exist is a hallucination. For a medical AI, any dosage recommendation that contradicts the referenced drug information is a hallucination. For a financial AI, any revenue figure that does not match the cited source is a hallucination.",
            "Hallucination rates of 1–3% are typical for production LLM deployments. This means 1–3 in 100 outputs contains a factual error. For a professional services firm processing 1,000 AI-assisted documents per day, this is 10–30 incorrect facts per day — every day.",
          ),
          s(" Set hallucination rate SLAs in absolute terms — maximum 1.5% hallucination rate on a monthly sample — not as a relative improvement from a baseline."),
        ],
        [
          s("Demographic bias SLAs require measurement across the specific demographic groups relevant to your use case. "),
          x(
            "A hiring AI bias SLA: 'Model performance (precision and recall) will not differ by more than 5 percentage points across gender, race, and age groups, measured quarterly on a representative applicant sample.' A credit AI bias SLA: 'Approval rate differential across income quartiles will not exceed the differential observed in the vendor's pre-deployment bias audit, measured monthly.' Each is a specific, measurable standard calibrated to the use case.",
            "Generic bias SLAs — 'vendor commits to fair and unbiased AI' — are contractual platitudes that cannot be measured or enforced. Specific demographic group measurements with numerical thresholds are enforceable standards.",
          ),
          s(" Define the demographic groups, the measured performance metric, and the acceptable differential before drafting the bias SLA clause."),
        ],
        [
          s("Harmful content SLAs for consumer-facing AI require the most specific output quality specifications. "),
          x(
            "A customer service AI harmful content SLA: 'Outputs classified as violent, sexually explicit, or discriminatory will not exceed 0.01% of all interactions in any rolling 30-day period, measured by [specified classification methodology].' The classification methodology must be specified: who classifies, using what criteria, with what sample size. Unspecified classification methodology allows the vendor to define 'harmful' in ways that exclude their model's actual failures.",
            "Harmful content SLAs without a specified classification methodology are unenforceable. The definition of 'harmful' is the most important element of the specification.",
          ),
          s(" Reference an industry standard for harmful content classification in your SLA — the Partnership on AI Taxonomy or the EU AI Act prohibited practice list provide anchored definitions that cannot be unilaterally redefined by the vendor."),
        ],
      ],
      examples: [
        {
          title: "Legal AI — hallucination rate SLA",
          body: "A law firm's AI legal research contract specified a hallucination rate SLA: 'Maximum 0.5% of AI-generated case citations will reference non-existent or materially misquoted cases, measured monthly on a 500-citation random sample.' In month six, the measured hallucination rate was 1.3% — exceeding the threshold. The vendor received a 10% service credit and a 30-day remediation obligation. The vendor identified a context window limit issue causing hallucinations in long documents and deployed a fix. Month seven measurement: 0.3% — below threshold. The specific hallucination rate SLA detected and remedied an error rate that a standard accuracy SLA would not have measured.",
        },
        {
          title: "HR platform — demographic bias SLA",
          body: "An HR platform's AI recruiting tool contract included: 'Model recall (percentage of qualified candidates correctly identified) will not differ by more than 4 percentage points across gender groups or by more than 6 percentage points across racial groups, measured quarterly on the customer's own application pool.' In Q3, the quarterly measurement found a 7.2-percentage-point gender recall differential — exceeding the 4-point threshold. The SLA triggered a service credit and a model audit obligation. The audit identified a training data imbalance in technical role applicants. The remediation reweighted training data and brought the gender differential to 2.8 percentage points in Q4.",
        },
        {
          title: "Customer service AI — harmful content classification",
          body: "A retailer's customer service AI contract specified harmful content SLA using the EU AI Act prohibited practice list as the classification standard for prohibited content categories. The measurement methodology: monthly automated screening of 10,000 randomly sampled interactions using a third-party content classification API. Monthly harmful content rate target: below 0.005%. In month three, the rate was 0.012% — exceeding the threshold. The breach report identified a cluster of interactions where the AI was responding to user attempts to extract personal data from other customers. The classification methodology identified the attack pattern; the SLA threshold triggered remediation. The third-party classification API and the anchored definition prevented any dispute about whether the identified content qualified as 'harmful.'",
        },
      ],
    }),
    buildSection({
      number: "6.5",
      title: "Support tier SLAs for AI-specific incidents",
      subtitle: "Defining AI incident categories and response times that match the urgency of AI failures",
      take: "Standard support tiers (P1 system down, P2 degraded performance, P3 minor issue) do not map cleanly onto AI failure modes. A model that is producing systemically biased outputs is not 'degraded performance' — it is an active discrimination risk. A model that is hallucinating medication dosages is not a P3 minor issue — it is a patient safety emergency. AI support tier definitions must reflect the business and regulatory urgency of AI-specific failure modes.",
      why: "Support tier SLAs determine how quickly the vendor responds to your problem. AI-specific incident categories that are classified into the wrong support tier receive slower responses — increasing the duration of business risk from AI failures.",
      paragraphs: [
        [
          s("Four AI-specific incident categories require explicit support tier definitions. "),
          x(
            "Category A — Safety failure: AI output that could cause physical harm (medical dosage errors, safety protocol violations). Response: immediate, within 1 hour. Category B — Compliance failure: AI output that violates a regulatory requirement (discriminatory decision, GDPR breach, prohibited content). Response: within 4 hours. Category C — Quality failure: accuracy below SLA threshold or systematic error pattern identified. Response: within 1 business day. Category D — Model update issue: performance degradation traceable to a vendor model update. Response: within 2 business days with rollback option.",
            "Categories A and B are new incident types that standard support tiers do not recognise. Without explicit definitions, a compliance failure may be classified as P2 degraded performance — receiving a 4-hour response instead of the 1-hour response required before a regulatory reporting deadline.",
          ),
          s(" Include the four AI-specific incident categories in the SLA as a separate schedule — not as modifications to the standard P1/P2/P3 framework."),
        ],
        [
          s("Escalation paths for AI incidents must reach technical AI engineers, not just support staff. "),
          x(
            "Standard support tier escalation reaches customer support → technical support → engineering. AI incident escalation must reach the vendor's AI model team directly for Categories A and B — because only model engineers can assess whether an AI failure is systematic, identify the cause, and authorise a model update or rollback.",
            "A vendor whose AI incident escalation path does not reach model engineers within 4 hours for a compliance failure has not designed their support infrastructure for AI-specific risk. This is an SLA design gap that predicts slow response to AI failures.",
          ),
          s(" Require the SLA to name the role (not the individual) that owns escalation for each AI incident category — and confirm the role exists in the vendor's organisation before contract signature."),
        ],
        [
          s("AI incident communication standards must include affected scope disclosure, not just status updates. "),
          x(
            "Standard incident communication: 'System is experiencing degraded performance. We are investigating.' AI incident communication must include: how many AI outputs may be affected, which user segments or data types may be impacted, whether affected outputs should be treated as unreliable, and what manual workaround is recommended during the incident.",
            "The gap between 'system degraded' and 'AI outputs for legal document analysis may have underperformed accuracy standards — manual review recommended for documents processed between [time] and [time]' is the difference between an incident communication that creates risk and one that mitigates it.",
          ),
          s(" Specify AI incident communication requirements in the SLA — not just response time SLAs, but communication content standards that tell users what to do with potentially affected outputs."),
        ],
      ],
      examples: [
        {
          title: "Healthcare AI — Category A incident response",
          body: "A hospital's AI clinical documentation SLA included a Category A Safety Failure definition: 'AI output that contains a medication dosage, allergy, or contraindication error that reaches a clinical workflow without automated flagging.' Response requirement: vendor acknowledges within 1 hour, provides affected output scope assessment within 4 hours, deploys a model fix or interim filter within 24 hours. In month nine, a nurse flagged a suspicious AI dosage recommendation. The hospital activated the Category A protocol. The vendor's model team identified a batch of affected records within 3 hours and confirmed the fix deployment within 20 hours. The Category A classification brought the model team into the response chain immediately — rather than routing through standard support.",
        },
        {
          title: "Financial services — Category B compliance failure",
          body: "A lender's AI credit decisioning tool generated adverse action notices that did not include the regulatory-required explanation of AI decision factors for a subset of applications. The lender's compliance team identified the gap during a monthly audit and classified it as a Category B Compliance Failure under their SLA. The vendor's compliance response team was engaged within 3 hours — compared to the standard P2 response time of 4 business hours that would have applied without the AI-specific category. The vendor corrected the adverse action notice generation within 14 hours and provided a complete list of affected applications within 48 hours — enabling the lender to issue corrected notices before the regulatory reporting deadline.",
        },
        {
          title: "Customer service AI — incident communication standard",
          body: "A retailer's AI customer service SLA included an AI incident communication requirement: 'For any incident affecting AI output quality, vendor will communicate within 2 hours: the estimated percentage of affected interactions, the time window of potential impact, whether affected interactions should be treated as unreliable, and the recommended customer service team response for affected customer contacts.' When the vendor's model update caused incorrect return policy responses for three hours, the incident communication met all four requirements. Customer service managers received the scope, time window, reliability flag, and recommended action — allowing them to proactively contact affected customers before receiving complaints.",
        },
      ],
    }),
    buildSection({
      number: "6.6",
      title: "SLA monitoring, measurement, and verification",
      subtitle: "How to ensure SLA measurement produces reliable, vendor-neutral evidence of performance",
      take: "An SLA that is measured only by the vendor produces vendor-favourable results. An SLA measured jointly by vendor and buyer using an agreed methodology produces neutral evidence. An SLA measured by a third party produces independent evidence. The measurement method determines the reliability of the performance record — and therefore the enforceability of the SLA.",
      why: "SLA disputes in AI contracts most commonly arise not from disagreement about the performance threshold, but from disagreement about the measurement methodology. Agreeing the measurement methodology before contract signature prevents the most common dispute trigger.",
      paragraphs: [
        [
          s("The monitoring stack for an AI SLA has three components: data collection, measurement execution, and reporting. "),
          x(
            "Data collection: who collects the sample (vendor, buyer, or jointly), how large the sample is, and how it is selected (random, stratified by input type, or representative of production distribution). Measurement execution: who runs the accuracy measurement, using what benchmark, and with what confidence interval. Reporting: how often reports are produced, what format they use, and who has access.",
            "The sample selection methodology is the most frequently contested element: a vendor who selects the measurement sample can systematically choose inputs on which their model performs well. A random or buyer-selected sample is the neutral standard.",
          ),
          s(" Require buyer-selected or jointly agreed samples for all accuracy SLA measurements — not vendor-selected samples."),
        ],
        [
          s("Continuous monitoring tools reduce measurement overhead and increase detection speed. "),
          x(
            "Rather than monthly manual sample measurement, continuous monitoring tools — LLM evaluation frameworks like LangSmith, Weights & Biases, or vendor-specific monitoring dashboards — can track accuracy, latency, and output quality metrics continuously, alerting both parties when metrics approach SLA thresholds.",
            "Continuous monitoring does not replace contractual SLA measurement but complements it: continuous monitoring provides early warning signals that prevent SLA breaches, while contractual measurement provides the evidence base for credit triggers and dispute resolution.",
          ),
          s(" Negotiate vendor access to a shared monitoring dashboard as a contract term — both parties see the same performance data in real time, reducing information asymmetry and enabling faster incident response."),
        ],
        [
          s("Third-party SLA audits are the gold standard for high-stakes AI deployments. "),
          x(
            "Annual third-party performance audits — conducted by an independent AI evaluation firm — provide the most credible evidence of AI system performance for regulatory, legal, and board reporting purposes. The audit scope: model accuracy on an independently curated test set, latency under simulated peak load, output quality on a random production sample, and compliance documentation currency.",
            "Third-party audits are the AI equivalent of financial statement audits: expensive, infrequent, and essential for the highest-stakes deployments where vendor-provided or jointly measured data is insufficient for external scrutiny.",
          ),
          s(" Include a third-party annual audit right in the SLA for any AI deployment in a regulated industry or any deployment where output errors generate regulatory or legal exposure."),
        ],
      ],
      examples: [
        {
          title: "Financial services — shared monitoring dashboard",
          body: "A bank negotiated real-time access to the vendor's AI fraud detection monitoring dashboard as an SLA term. Both parties saw: live precision and recall metrics, hourly transaction volume, and model confidence score distribution. When precision dropped from 88% to 82% over a three-day period — still above the 80% SLA threshold — the shared dashboard gave both parties simultaneous visibility. The bank's risk team flagged the trend; the vendor's model team investigated and identified a data quality issue before the threshold was breached. The shared dashboard converted a potential SLA breach into a proactive quality management event.",
        },
        {
          title: "Healthcare — third-party annual audit",
          body: "A hospital system required an annual third-party audit of their AI diagnostic support tool as an SLA term. The audit was conducted by an independent medical AI evaluation firm, used a patient cohort curated by the hospital's clinical quality team (not the vendor's test set), and included a load test simulating morning rounds peak volume. Year two audit findings: model accuracy on hospital test set was 4 percentage points below the vendor's quarterly report accuracy on their test set. The discrepancy was traced to a documentation quality difference between the vendor's test set and the hospital's clinical documentation standards. The audit produced actionable findings that vendor-provided measurement had consistently masked.",
        },
        {
          title: "Retailer — buyer-selected sample enforcement",
          body: "A retailer's AI demand forecasting SLA specified that the monthly accuracy measurement sample would be selected by the retailer — not the vendor. The retailer's data science team selected 500 SKUs representing the full range of product categories, velocity tiers, and seasonal patterns. The vendor's quarterly self-reported accuracy was 92%. The buyer-selected measurement found 84% — 8 percentage points below the vendor's report and below the 86% SLA threshold. Investigation revealed the vendor's self-selected sample had excluded long-tail SKUs with high seasonality variance — the SKUs where the model performed worst. The buyer-selected sample methodology exposed an 8-percentage-point measurement gap that had concealed a continuous SLA breach.",
        },
      ],
    }),
    buildSection({
      number: "6.7",
      title: "SLA credit structures and remedy escalation",
      subtitle: "Designing credit structures that create vendor incentives to maintain AI quality",
      take: "SLA credits are the financial mechanism that converts performance obligations into vendor incentives. Credit structures that are too small create no incentive. Credit structures that are too large create vendor gaming. The goal is a credit structure that is material enough to motivate quality maintenance and proportionate enough to be sustainable for a vendor who is genuinely trying to perform.",
      why: "SLA credit structures are incentive mechanisms, not just compensation mechanisms. A well-designed credit structure makes quality maintenance economically rational for the vendor. A poorly designed credit structure is either ignored (too small) or gamed (too large and easy to trigger).",
      paragraphs: [
        [
          s("Credit structure design starts with the business cost of the SLA breach, not the contract value. "),
          x(
            "A 10% monthly service credit for a 5-day accuracy breach may be $5,000 on a $600,000 annual contract. If the business cost of 5 days of degraded accuracy is $45,000 in manual review costs, the credit is 11% of the business cost — insufficient to motivate vendor response. Credit structures should approximate the business cost of the breach as a starting point, with the vendor and buyer negotiating toward a commercially sustainable figure.",
            "The business cost calculation requires estimating: the volume of AI outputs affected, the cost per affected output (review cost, error correction cost, or customer impact cost), and the duration of the breach. This calculation produces a credit that is economically meaningful rather than contractually symbolic.",
          ),
          s(" Present the business cost calculation to the vendor as the basis for credit structure negotiation — it is harder to reject a cost-based credit than an arbitrary percentage-of-fees credit."),
        ],
        [
          s("Remedy escalation creates a staircase of consequences for persistent performance failures. "),
          x(
            "Level 1 — Threshold breach (below SLA but above minimum floor): service credit of 10–15% monthly fees, plus vendor remediation plan within 5 business days. Level 2 — Persistent breach (below threshold for two consecutive measurement periods): service credit of 20–25% monthly fees, plus executive escalation and a 30-day cure period. Level 3 — Minimum floor breach (below minimum operational threshold for three consecutive periods): right to terminate without penalty with a prorated refund.",
            "The escalation staircase creates increasing consequences for persistent failure — motivating early remediation before the consequences escalate. Vendors who take Level 1 breaches seriously avoid Level 2 consequences. Vendors who take Level 2 seriously avoid termination.",
          ),
          s(" Design the minimum floor threshold as a firm go/no-go line — below this threshold, the AI is not providing net value and continued deployment is a business risk rather than an investment."),
        ],
        [
          s("Credit banking and aggregation prevents credit gaming while ensuring compensation. "),
          x(
            "Credit banking: if SLA credits are capped at monthly contract fees, a vendor who breaches early in the month has no financial incentive to remediate during the rest of the month — the credit cap is already reached. Allow unused credits to accumulate against future months to maintain incentive continuity.",
            "Credit aggregation: if multiple SLA metrics are in breach simultaneously (accuracy AND latency), each metric should generate its own credit rather than sharing a single credit pool. Combined credits that aggregate rather than share prevent vendor trade-off behaviour: preferentially remediating the cheaper-to-fix metric while allowing the other to remain in breach.",
          ),
          s(" Design credit structures with metric independence (each metric has its own credit) and banking provisions (unused credits roll forward) to prevent gaming and maintain incentives through the full remediation period."),
        ],
      ],
      examples: [
        {
          title: "Business cost credit calculation",
          body: "A bank calculated the business cost of a 10-day AI document processing accuracy breach: 2,000 documents per day × $18 manual review cost per document × 10 days = $360,000 in additional manual review cost. The monthly service credit under the vendor's standard terms was $12,500 (10% of monthly fees). The bank proposed a credit of $50,000 for a 10-day breach — 14% of the business cost. The vendor counter-proposed $25,000. The parties settled on $30,000 — still 8% of the business cost but 2.4× the original vendor credit. The cost-based negotiation produced a credit that was commercially meaningful rather than contractually symbolic.",
        },
        {
          title: "Insurance AI — remedy escalation execution",
          body: "An insurer's AI claims triage contract had a three-level remedy structure. In month seven, accuracy dropped below the SLA threshold — Level 1 breach. Service credit applied; vendor provided a remediation plan. In month eight, accuracy remained below threshold — Level 2 breach. Service credit doubled; executive escalation occurred; 30-day cure period began. In the third week of the cure period, the vendor deployed an updated model that restored accuracy above threshold. The escalation staircase — not the Level 1 credit alone — drove the executive escalation that produced the accelerated remediation commitment.",
        },
        {
          title: "Healthcare — credit banking in practice",
          body: "A hospital's AI radiology SLA had a monthly credit cap of 15% of monthly fees. In month four, a model issue caused accuracy to fall below threshold in week one. The 15% cap was reached by week two. The vendor had no additional financial incentive to remediate during weeks three and four. The hospital's next contract renewal required a credit banking provision: unused monthly credits roll forward to the next month. In year two, month six, accuracy fell below threshold for 18 days. The vendor addressed the issue within 4 days — before the credit accumulation would have carried over to the next month. The banking provision maintained incentives through the full breach period.",
        },
      ],
    }),
    buildSection({
      number: "6.8",
      title: "BL decision lens: your AI SLA framework",
      subtitle: "A complete SLA framework that covers availability, accuracy, latency, quality, and support for AI products",
      take: "A complete AI SLA framework has five dimensions: availability (standard uptime), accuracy (model performance threshold), latency (workflow-appropriate response time), output quality (hallucination, bias, and safety rates), and support (AI-specific incident categories and response times). A framework that covers all five dimensions provides genuine AI quality governance — not just system availability monitoring.",
      why: "Business leaders who negotiate AI SLAs covering all five dimensions protect their organisations from the full range of AI failure modes. Business leaders who accept only standard availability SLAs are measuring the wrong thing and paying credits for the wrong failures.",
      paragraphs: [
        [
          s("The five-dimension SLA framework summary. "),
          x(
            "Dimension 1 — Availability: 99.5% uptime monthly (exclude planned maintenance); credit 5% per 0.1% below threshold. Dimension 2 — Accuracy: minimum F1 score of [X]% on jointly agreed test set, measured monthly; credit 15% per month below threshold, termination right if below minimum floor for three consecutive months. Dimension 3 — Latency: P95 under [Y] seconds for real-time; P99 under [Z] seconds; credit 8% per month if P95 or P99 exceeds threshold. Dimension 4 — Output quality: hallucination rate below 1%, bias differential below 5 percentage points; credit 15% for hallucination breach, mandatory audit for bias breach. Dimension 5 — Support: Category A-D incident categories with explicit response times; credit 10% for Category A or B response breach.",
            "The five-dimension framework totals five distinct credit pools, each independently triggered. A month with three dimension breaches generates three independent credits — incentivising the vendor to address all five dimensions, not just the cheapest to fix.",
          ),
          s(" Present the five-dimension framework as a schedule to the contract — SLA schedules are easier to negotiate when presented as a structured document than when proposed as contract body language."),
        ],
        [
          s("Prioritise SLA negotiation by risk tier: high stakes, medium stakes, and monitoring. "),
          x(
            "High-stakes AI (financial decisions, medical outputs, legal analysis, employment decisions): negotiate all five dimensions with the highest threshold and largest credits. Medium-stakes AI (workflow automation, internal analytics, back-office processing): negotiate dimensions 1, 2, and 5 with standard thresholds. Monitoring AI (dashboards, reporting, non-decision support): negotiate dimension 1 only — standard availability SLA is adequate for non-decision support tools.",
            "SLA negotiation effort should be proportionate to the business risk of AI failure. Spending 10 hours negotiating an output quality SLA for a reporting dashboard is misallocated effort; spending 2 hours negotiating a two-dimensional SLA for a medical AI is inadequate effort.",
          ),
          s(" Classify every AI deployment by risk tier before SLA design — the tier determines which dimensions to negotiate and how intensively."),
        ],
        [
          s("Review and update SLAs at every contract renewal based on operational performance data. "),
          x(
            "SLAs negotiated at contract signature are based on estimated performance requirements. After 12–24 months of operational data, you know: which SLA thresholds were too lenient (never triggered), which were too strict (triggered routinely without meaningful business impact), which dimensions were missing (gaps discovered through operational incidents), and which credit structures were too small to incentivise vendor response.",
            "SLA renewal review is not a legal exercise — it is a business improvement exercise. The operational performance record from the first contract term is the most valuable input for designing a better SLA for the next term.",
          ),
          s(" Conduct an SLA performance review 90 days before renewal, using the full operational performance record. Use the review findings as negotiating inputs, not just as a compliance record."),
        ],
      ],
      examples: [
        {
          title: "Five-dimension SLA framework — financial services",
          body: "A bank's AI fraud detection SLA covered all five dimensions: Availability (99.7% monthly, credit 5%); Accuracy (precision 88% + recall 79% on 10,000 transaction joint test set, monthly, credit 15% per breach, termination right at third consecutive month); Latency (P95 200ms, P99 500ms, credit 8%); Output quality (false positive rate variance across demographic groups below 3 percentage points quarterly, mandatory audit at breach); Support (Category A-D with 1-hour/4-hour/1-day/2-day response times, credit 10% for Category A/B breach). In the first 12 months: zero availability breaches, two accuracy breaches (both remediated before month two), no latency breaches, one output quality breach (mandatory audit conducted), zero Category A/B breaches. The five-dimension framework provided comprehensive quality governance across all AI failure modes.",
        },
        {
          title: "SLA renewal review — threshold calibration",
          body: "A healthcare company's SLA renewal review found: availability SLA triggered zero times in 24 months (threshold likely too lenient or system reliability exceeded expectations), accuracy SLA triggered four times in 24 months (two were remediated, two carried over to Level 2 — staircase worked as designed), hallucination SLA was never measured (monitoring was never set up despite the contract term). The renewal negotiation tightened the availability threshold from 99.5% to 99.7% (reflecting demonstrated reliability), maintained the accuracy threshold, and added explicit measurement methodology for the hallucination SLA that had been contracted but never operationalised.",
        },
        {
          title: "Risk tier classification drives SLA scope",
          body: "A professional services firm classified its AI deployments by risk tier before SLA design. Tier 1 — AI legal research (high stakes: legal advice liability): all five SLA dimensions negotiated, highest thresholds. Tier 2 — AI meeting summarisation (medium stakes: internal workflow only): dimensions 1, 2, and 5 negotiated. Tier 3 — AI calendar scheduling assistant (low stakes: no decision support): dimension 1 only. The tiered approach allocated SLA negotiation effort proportionate to risk. The Tier 1 SLA required four negotiation sessions. The Tier 2 SLA required two sessions. The Tier 3 SLA accepted the vendor's standard terms. Total negotiation time: six sessions for three deployments — compared to twelve sessions if all three had been negotiated at Tier 1 intensity.",
        },
      ],
    }),
  ],
  quiz: [
    {
      q: "An AI system has 99.97% uptime and a standard SLA meeting all availability targets. Model drift has caused accuracy to fall from 91% to 73% over six months. What does the standard SLA provide?",
      options: [
        "A full service credit for the entire period of accuracy degradation",
        "An automatic termination right after accuracy falls below 80%",
        "No remedy — standard SLAs measure availability, not accuracy",
        "A requirement for the vendor to retrain the model within 30 days",
      ],
      correct: 2,
      correctFeedback: "Correct. Standard uptime SLAs measure whether the system is running — not whether it is producing accurate outputs. A system with 99.97% uptime and 73% accuracy provides no remedy under a standard SLA while delivering dramatically degraded business value.",
      wrongFeedback: "Standard SLAs measure availability (uptime) and response time — not model accuracy. A system can meet all standard SLA targets while simultaneously delivering wrong outputs at an increasing rate. Accuracy SLAs must be negotiated separately.",
    },
    {
      q: "For a real-time customer-facing AI chatbot, which latency metric is most operationally relevant?",
      options: [
        "P50 (median) latency — represents the typical user experience",
        "Average latency across the measurement period",
        "P99 latency — represents the user experience during peak load",
        "Maximum latency observed in any single interaction",
      ],
      correct: 2,
      correctFeedback: "Correct. P99 latency represents the experience of 1 in 100 users — typically occurring during peak load when the customer-facing impact is highest. P50/average latency describes optimal conditions; P99 describes the user experience that creates customer satisfaction risk.",
      wrongFeedback: "P99 latency — the 99th percentile — is the most operationally relevant metric for customer-facing AI because it represents peak load performance. A vendor who offers only median or average latency in their SLA is hiding their peak-load performance, which is where user experience failures occur.",
    },
    {
      kind: "categorize",
      q: "Categorise these AI incidents into the correct support tier category:",
      categories: ["Category A — Safety failure (1hr response)", "Category B — Compliance failure (4hr response)", "Category C — Quality failure (1 business day response)", "Category D — Model update issue (2 business day response)"],
      items: [
        { text: "AI medication dosage recommendation contains an error that reaches a clinical workflow", category: 0 },
        { text: "AI credit scoring generates adverse action notices missing regulatory-required explanation factors", category: 1 },
        { text: "AI document classification accuracy falls below the SLA threshold on monthly measurement", category: 2 },
        { text: "AI response time increases after a model update, exceeding P95 latency threshold", category: 3 },
      ],
      correctFeedback: "Correct. Safety failures (physical harm risk) require immediate 1-hour response. Compliance failures (regulatory violation) require 4-hour response before reporting deadlines. Quality failures (SLA threshold breach) require 1-business-day response. Model update issues require 2-business-day response.",
      wrongFeedback: "AI incident categorisation should reflect the urgency created by the type of failure: safety failures create patient/user harm risk, compliance failures create regulatory reporting deadlines, quality failures require remediation planning, and model update issues require rollback assessment.",
    },
    {
      kind: "order",
      q: "Order these steps in designing an AI accuracy SLA from first to last:",
      items: [
        "Identify the business cost of the failure mode you are measuring",
        "Select the accuracy metric that matches your error cost profile (precision, recall, or F1)",
        "Set the threshold at the minimum operational level, not the demo performance level",
        "Define the measurement methodology (who, what sample, how often)",
        "Design the credit structure based on the business cost calculation",
      ],
      prompt: "Drag to arrange in the correct sequence",
      correctFeedback: "Correct. Business cost identification drives metric selection, which drives threshold setting, which drives measurement design, which drives credit calibration. Starting with the contract language before the business analysis produces the wrong SLA.",
      wrongFeedback: "SLA design follows a business-to-contract sequence: understand the cost of failure, select the metric that measures that failure, set a threshold at the operational minimum, design the measurement process, and calibrate credits to the cost. Reversing this sequence produces SLAs that measure the wrong thing or set the wrong thresholds.",
    },
    {
      q: "A vendor's self-reported monthly accuracy measurement shows 92% — above the 88% SLA threshold. A buyer-selected sample measurement finds 84% — below the threshold. Which measurement governs SLA compliance and why?",
      options: [
        "The vendor's measurement governs because the vendor owns the system",
        "The buyer's measurement governs because the buyer is paying for the service",
        "The contracted measurement methodology governs — if the contract specifies buyer-selected samples, the buyer's measurement is the SLA standard",
        "Neither measurement governs — a third party must resolve the dispute",
      ],
      correct: 2,
      correctFeedback: "Correct. The contracted measurement methodology determines which measurement is authoritative. If the SLA specifies buyer-selected samples, the buyer's measurement is the SLA standard — and the 8-percentage-point gap revealed by the buyer's sample represents a systematic measurement bias in the vendor's self-selected sample.",
      wrongFeedback: "The contracted measurement methodology determines which measurement governs SLA compliance. This is why negotiating the measurement methodology before contract signature is as important as negotiating the threshold — the methodology determines who controls the evidence.",
    },
    {
      q: "Which SLA credit structure design principle prevents vendor gaming through selective metric remediation?",
      options: [
        "Setting all credits equal regardless of metric type to prevent gaming",
        "Combining all metric credits into a single pool with a monthly cap",
        "Designing independent credit pools for each SLA metric so vendors cannot trade off one metric against another",
        "Requiring vendors to self-report all metric breaches to prevent cherry-picking",
      ],
      correct: 2,
      correctFeedback: "Correct. Independent credit pools for each metric mean the vendor must maintain all metrics simultaneously — they cannot compensate for an accuracy breach by improving latency. A shared credit pool incentivises the vendor to remediate the cheapest metric while allowing the most expensive to remain in breach.",
      wrongFeedback: "Independent credit pools are the design principle that prevents metric trade-off gaming. When credits are pooled, vendors optimise for the credit structure — remediating the cheapest metric first. Independent pools require all metrics to be maintained simultaneously.",
    },
  ],
});
