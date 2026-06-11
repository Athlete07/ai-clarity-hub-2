import { buildChapter, buildSection, s, x, BL_CALLOUT, sectionWithDiagram } from "../concepts-bl-helpers";

export const chapter09BlIncidentResponseAiFailures = buildChapter({
  slug: "bl-incident-response-ai-failures",
  number: 9,
  shortTitle: "AI Incident Response",
  title: "AI Incident Response — Managing Failures Before They Become Crises",
  readingMinutes: 22,
  summary:
    "AI systems fail in distinctive ways: silently, at scale, and often in ways that compound over time before detection. A well-designed AI incident response programme — with defined classification, detection, escalation, investigation, and remediation protocols — is the difference between a managed operational failure and a regulatory crisis.",
  keyTakeaway:
    "AI incident response requires classification (severity determines response speed), detection (monitoring that catches failures before customers do), escalation (defined pathways from operational team to board), investigation (root cause before remediation), remediation (fix and verify), and notification (regulators and affected individuals where required). Business leaders own the escalation decision — not the technical investigation.",
  pmCallout: BL_CALLOUT,
  sections: [
    sectionWithDiagram({
      number: "9.1",
      title: "How AI Incidents Differ From Standard IT Incidents",
      subtitle: "The distinctive characteristics of AI failures — and why standard incident response frameworks need AI-specific extensions",
      take: "AI incidents differ from standard IT incidents in four ways: they are often silent (no error generated), they are often slow (performance degrades gradually), they affect many people simultaneously when they occur, and their root cause is often in training data or model architecture rather than code. Standard incident response frameworks designed for software bugs address none of these characteristics.",
      why: "Applying standard IT incident response to AI failures produces delayed detection, inadequate investigation, and incomplete remediation. A credit model that drifts for six months before producing enough complaints to trigger a review is not a standard software incident — it is an AI-specific failure mode that requires AI-specific detection and response.",
      paragraphs: [
        [
          s("Silent failure: AI systems fail without generating errors. "),
          x(
            "A software bug produces an error log entry or an application crash. An AI model that begins making incorrect predictions produces no errors — it continues operating normally, generating outputs that look like valid outputs but are wrong in systematic ways.",
            "This means standard monitoring approaches — watching for error rates, application crashes, and service unavailability — are inadequate for AI incident detection. AI monitoring must watch for performance metric changes, output distribution shifts, and user experience signals that indicate model behaviour has changed.",
          ),
          s(" AI incident detection requires output quality monitoring, not just system availability monitoring — silent failures are the most common and most damaging AI failure mode."),
        ],
        [
          s("Slow failure: AI performance degrades gradually before becoming a crisis. "),
          x(
            "Model drift typically appears as a gradual deterioration: slightly lower accuracy, slightly higher customer complaints, slightly increasing bias metrics — each individually below escalation thresholds but collectively representing significant degradation over weeks or months.",
            "Without trend monitoring and threshold alerting that triggers at the onset of degradation rather than at crisis level, slow failures are only detected when they produce enough customer complaints or operational impact to be visible — at which point significant harm has already occurred.",
          ),
          s(" Set AI monitoring thresholds at the onset of degradation, not at crisis level — the goal is early detection, not late confirmation."),
        ],
        [
          s("Scale failure: AI incidents affect many people simultaneously. "),
          x(
            "When a credit model produces biased outputs, every credit decision made during the failure period is potentially affected — hundreds or thousands of customers. When an HR AI produces discriminatory recommendations, every hiring decision made during the failure period is affected. Scale means AI incidents produce large populations of affected individuals requiring communication and potential remediation.",
            "This scale dimension transforms AI incident response from a technical problem to an operational and legal programme. Affected-individual identification, communication, and remediation are operational functions requiring legal, communications, and operations leadership involvement — not just the technical team.",
          ),
          s(" Plan for affected-individual identification and communication before any AI incident occurs — the operational capacity to identify and communicate with thousands of affected individuals in days requires pre-built processes, not incident-time improvisation."),
        ],
      ],
      examples: [
        {
          title: "Credit model drift — 14-month silent failure",
          body: "A consumer lender's credit model began drifting 14 months after deployment as consumer financial behaviour shifted post-pandemic. The drift produced gradually increasing false decline rates for creditworthy applicants — individually each case appeared normal, but the pattern across 14 months affected an estimated 8,000 applicants who received incorrect credit decisions. Detection was triggered by a complaint spike that prompted the first post-deployment performance analysis. Earlier trend monitoring would have detected the drift at 3–4 months when fewer than 2,000 applicants had been affected. Slow failure detection requires trend monitoring, not complaint monitoring.",
        },
        {
          title: "Facial recognition misidentification — scale response",
          body: "A law enforcement facial recognition system produced 26 confirmed misidentification cases over an 18-month period before a systematic audit identified the pattern. Each individual case was treated as an isolated incident; the systematic failure was not recognised until the audit. AI incidents that appear isolated may be systematic — periodic case review across the full decision population is required to identify systematic patterns that individual case review misses.",
        },
        {
          title: "Amazon — recommendation AI failure at scale",
          body: "Amazon's recommendation engine experienced an error in 2023 that caused adult products to be recommended to unrelated product pages — visible to all users browsing affected categories. Detection was near-immediate (social media reports within minutes); remediation took 4 hours. The incident scale: estimated millions of customer interactions affected. The Amazon response illustrated the communication speed required for high-visibility AI failures: public acknowledgement within hours, technical explanation within 24 hours. Slow public communication of visible AI failures amplifies reputational damage.",
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
      number: "9.2",
      title: "AI Incident Classification",
      subtitle: "A severity classification system that determines response speed, escalation level, and notification obligations",
      take: "AI incident classification determines everything: how quickly you respond, who you escalate to, whether you halt the system, and whether you must notify regulators and affected individuals. A clear four-level severity classification — defined before any incidents occur — ensures consistent, proportionate response regardless of which team member is on duty.",
      why: "Incident classification decisions made under pressure, without pre-defined criteria, are made inconsistently. A team that over-classifies escalates too many incidents to leadership, creating alert fatigue. A team that under-classifies misses escalations that regulators and affected individuals expect.",
      paragraphs: [
        [
          s("Severity 1 (Critical): immediate halt required, executive notification, potential regulatory notification. "),
          x(
            "Severity 1 criteria: confirmed discrimination at scale (bias finding affecting more than a defined number of individuals); AI system producing outputs with immediate safety implications; regulatory enforcement action triggered; system producing legally invalid automated decisions at scale; confirmed data breach through AI pipeline.",
            "Response: immediate system halt or fallback, escalation to executive team within 2 hours, legal and DPO notification within 4 hours, regulatory notification assessment within 24 hours, affected-individual identification commenced.",
          ),
          s(" Severity 1 incidents are rare but require a pre-rehearsed response — the first time you run a Severity 1 response should not be during an actual Severity 1 incident."),
        ],
        [
          s("Severity 2 (High): urgent response, senior management notification, potential regulatory notification. "),
          x(
            "Severity 2 criteria: AI performance below threshold with customer impact; bias monitoring threshold breach; regulatory inquiry (not enforcement action) relating to AI systems; significant unexplained AI output distribution change; vendor AI compliance failure affecting your deployment.",
            "Response: senior management notification within 4 hours, enhanced monitoring and potential human review overlay within 8 hours, legal review within 24 hours, root cause analysis commenced, regulatory notification assessment within 72 hours.",
          ),
          s(" Severity 2 incidents are the most common high-consequence incidents — ensure the escalation pathway to senior management is tested and the escalation decision authority is clear."),
        ],
        [
          s("Severity 3 (Medium) and Severity 4 (Low) complete the classification. "),
          x(
            "Severity 3: AI performance below threshold without confirmed customer impact, individual customer complaint about AI decision, minor model behavioural anomaly. Response: AI governance team notification, investigation commenced, potential vendor engagement, 5-day resolution target.",
            "Severity 4: routine model monitoring alert below escalation threshold, individual access request relating to AI system, minor data quality issue in AI pipeline. Response: logging in incident register, technical team investigation, standard change management process, 10-day resolution target.",
          ),
          s(" Severity 3 and 4 incidents are the most frequent — efficient processing requires standard procedures that do not consume governance leadership attention."),
        ],
      ],
      examples: [
        {
          title: "Severity 1 classification — credit AI discrimination",
          body: "A UK bank's monthly bias monitoring detected a 34% demographic parity disparity for a protected characteristic in its credit AI — significantly above the 20% Severity 1 threshold. The classification triggered: immediate system halt (all pending credit decisions routed to human review); executive escalation within 90 minutes; legal and DPO notification within 3 hours; FCA preliminary notification assessment within 8 hours. The system was halted 4 hours after detection — before the business day ended, preventing additional affected decisions. Root cause analysis identified a training data quality issue; the system was relaunched after retraining 3 weeks later with confirmed compliance. The pre-defined Severity 1 response protocol enabled an 8-hour halt decision that would otherwise have taken days of debate.",
        },
        {
          title: "Severity 2 escalation — vendor compliance failure",
          body: "A financial services firm received notification from a third-party AI vendor that the vendor had received an FCA corrective notice for AI processing violations related to the specific model deployed by the firm. Severity 2 classification triggered: senior management notification within 3 hours; legal review of the firm's specific deployment within 24 hours; FCA notification assessment (assessed as not required — the firm's deployment did not include the specific violated feature); vendor remediation plan required within 72 hours. Total elapsed time from vendor notification to full response: 5 days. The classification framework determined the appropriate response speed without requiring an ad hoc escalation decision.",
        },
        {
          title: "Severity 4 routine processing — AI data quality alert",
          body: "An AI pipeline monitoring alert detected a 3% data freshness degradation in a non-critical recommendation AI — below the Severity 3 threshold but above the logging trigger. Severity 4 classification: alert logged in incident register, technical team investigation commenced, vendor ticket opened. Resolution: data pipeline configuration issue resolved within 4 days. No customer impact. The Severity 4 processing consumed 2 hours of technical team time and generated a single incident register entry — appropriate proportionate response to a low-severity issue. Without a classification system, the same alert might have generated an unnecessary senior management escalation.",
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
      number: "9.3",
      title: "Detection — Finding AI Failures Before They Escalate",
      subtitle: "The monitoring architecture that enables early detection of AI incidents",
      take: "AI incident detection requires three monitoring layers: automated performance monitoring (accuracy, bias, drift metrics), output quality monitoring (distribution of outputs, anomaly detection in output patterns), and external signal monitoring (customer complaints, media mentions, regulatory enquiries). No single layer catches all AI failures — all three are required.",
      why: "Organisations with only automated performance monitoring miss failures that appear within normal performance ranges but produce systematically biased outputs for subgroups. Organisations with only complaint monitoring detect failures too late, after significant harm has occurred. The three-layer architecture provides complementary detection coverage.",
      paragraphs: [
        [
          s("Layer 1: automated performance monitoring with defined thresholds. "),
          x(
            "Every production AI system should have defined metrics with automated alert thresholds: accuracy/precision, recall, bias metrics, output volume, and response time. Thresholds should be set at two levels: a warning level (investigate) and an escalation level (consider system halt).",
            "Metric frequency must match the AI system's decision volume and impact: a fraud detection AI making thousands of decisions per hour needs near-real-time monitoring; a credit AI making dozens of decisions per day needs daily monitoring. The monitoring frequency must be sufficient to detect failures before they affect too many decisions.",
          ),
          s(" Set monitoring frequency proportional to decision volume — high-volume AI systems need real-time or hourly monitoring; lower-volume systems can use daily review."),
        ],
        [
          s("Layer 2: output quality monitoring and anomaly detection. "),
          x(
            "Output quality monitoring tracks the distribution of AI outputs over time, looking for unexplained shifts: if a credit model's approval rate changes significantly without corresponding changes in applicant profile, that shift is an anomaly requiring investigation.",
            "Statistical process control techniques — control charts, run charts, CUSUM analysis — are effective output quality monitoring tools. They detect output distribution changes before they are severe enough to trigger performance metric alerts, providing earlier detection of slow-developing failures.",
          ),
          s(" Add output distribution monitoring alongside performance metric monitoring — distribution shifts often precede performance metric degradation and provide earlier warning of developing failures."),
        ],
        [
          s("Layer 3: external signal monitoring. "),
          x(
            "External signals include: customer complaints classified as AI-related, social media monitoring for AI incident mentions, media monitoring for regulatory and industry AI incident coverage, and regulatory enquiry tracking. External signals often provide earlier detection of reputational failures than internal monitoring.",
            "Customer complaint data is the most underused AI incident detection resource: customers who experience unexpected, unfair, or unexplainable AI decisions often complain — and their complaints aggregate into patterns that precede formal detection. Analysing complaints for AI-related patterns is an effective early warning mechanism.",
          ),
          s(" Add AI incident keyword classification to customer complaint analysis — customer complaints are often the first external signal of AI performance failures before internal monitoring detects them."),
        ],
      ],
      examples: [
        {
          title: "Fraud AI — near-real-time monitoring",
          body: "A bank's AI fraud detection system has near-real-time monitoring: accuracy metrics updated every 30 minutes with automated alerts at 2 warning levels. Warning Level 1 (false positive rate above 8%): automatic investigation trigger to the fraud operations team. Warning Level 2 (false positive rate above 12%): automatic escalation to AI Governance Lead with 30-minute response SLA. The monitoring cadence matches the transaction volume: 4,000 transactions per hour at peak means 30-minute monitoring intervals catch failures affecting fewer than 2,000 transactions before escalation. Without this frequency, a failure at peak volume could affect 80,000+ transactions before a daily review cycle detected it.",
        },
        {
          title: "Output distribution monitoring — approval rate anomaly",
          body: "A mortgage lender's output distribution monitoring detected an unexplained 7-percentage-point decline in the mortgage AI's overall approval rate over a 6-week period. The change was within the performance metric's normal range (no accuracy alert triggered) but outside the output distribution control chart's warning boundary. Investigation revealed a systematic bias against applicants in two postcode areas — a data quality issue affecting specific geographic inputs. The output distribution monitoring detected the issue at week 6; performance metric monitoring would not have triggered until approximately week 14. Eight weeks of early detection prevented 340 additional affected applicants.",
        },
        {
          title: "Complaint analysis — AI incident early detection",
          body: "A professional services firm's AI document review tool began generating customer complaints in a pattern the customer service team did not recognise as AI-related. Manual analysis of 3 months of complaints identified a cluster of complaints about 'incorrect document categorisations' that correlated with a specific document type introduced to the corpus 4 months prior. The AI model had not been trained on the new document type and was systematically miscategorising it. The complaint analysis identified the failure 2 months before the monitoring system would have detected it. AI keyword classification of complaints is now standard practice.",
        },
      ],
    }),
    buildSection({
      number: "9.4",
      title: "Escalation and Decision Authority",
      subtitle: "Who decides what, when — clear escalation pathways that prevent both under-escalation and over-escalation",
      take: "AI incident escalation decisions — particularly the decision to halt a deployed AI system — must be made by the right person at the right speed. Pre-defined escalation pathways and decision authority tables eliminate the most common escalation failures: unduly delayed escalation by technical teams reluctant to alarm leadership, and unilateral technical decisions to halt systems without business impact assessment.",
      why: "The most common AI incident governance failure is not a technical one — it is an escalation failure: a technical team that monitors a bias finding for three weeks before raising it to legal and management. Pre-defined escalation thresholds and authority tables eliminate this failure mode.",
      paragraphs: [
        [
          s("Decision authority tables must specify who makes each key escalation decision. "),
          x(
            "Decision 1: Classify the incident severity — AI Governance Lead. Decision 2: Activate human review overlay — AI Governance Lead with system owner notification. Decision 3: Halt the AI system — System Owner and AI Governance Lead jointly (for Severity 1); AI Governance Lead alone (for Severity 2 with notification). Decision 4: Notify regulator — Legal and DPO jointly (any severity). Decision 5: Notify affected individuals — Legal, Communications, and System Owner jointly.",
            "Authority tables prevent the most damaging escalation failure: a technical team that halts a revenue-generating AI system unilaterally without business impact assessment, or a business team that prevents a justified halt for commercial reasons without governance authority to do so.",
          ),
          s(" Define decision authority tables before any incident occurs — authority ambiguity during incidents produces either delayed decisions or unilateral decisions, both of which damage governance outcomes."),
        ],
        [
          s("Escalation timelines must be defined by severity and enforced. "),
          x(
            "Defined timelines: Severity 1 — executive escalation within 2 hours, regardless of time of day. Severity 2 — senior management escalation within 4 hours during business hours, within 8 hours outside business hours. Severity 3 — AI governance team notified at next business day.",
            "Time of day provisions matter: a Severity 1 AI incident discovered at 10pm on a Friday must still follow the 2-hour executive escalation pathway. Out-of-hours escalation requires maintained contact lists and named on-call responsibility. An escalation pathway that only works during business hours is not a Severity 1 escalation pathway.",
          ),
          s(" Test escalation pathways out-of-hours at least annually — an escalation route that fails at 11pm on a Sunday has not been validated for the scenarios where it will be most needed."),
        ],
        [
          s("Preventing under-escalation: technical teams must escalate without business impact assessment. "),
          x(
            "The most common under-escalation pattern: a technical team detects a bias threshold breach, spends several days investigating root cause before escalating because they want to understand the issue fully before raising it to management.",
            "Escalation criteria must be explicit: escalate on detection, not on confirmed root cause. Leadership receives the severity classification and the known facts; root cause investigation runs in parallel. Escalation is a notification, not a completed analysis report.",
          ),
          s(" Define escalation as detection-triggered, not investigation-triggered — escalate on threshold breach, not on root cause confirmation."),
        ],
      ],
      examples: [
        {
          title: "Under-escalation pattern — three-week delay",
          body: "A financial services firm's technical team detected a Severity 2 bias threshold breach (23% age parity disparity, threshold: 20%) on a Monday. Over the next three weeks, the team investigated root cause, developed a proposed remediation, and prepared a full report before escalating to the AI Governance Lead and legal team. During those three weeks, the AI system continued processing applications with the confirmed bias pattern — affecting an estimated 900 applications. Post-incident review: the escalation policy specified 4-hour escalation for Severity 2 on detection. The team's interpretation ('escalate when we have an explanation') contradicted the policy. The policy was amended to add explicit language: 'Escalate on threshold breach, not on root cause confirmation. Investigation runs in parallel with escalation.'",
        },
        {
          title: "Decision authority — system halt",
          body: "A retail bank's AI fraud detection system triggered a Severity 1 bias alert at 3:15am on a Saturday (35% racial disparity in false positive rate, threshold: 25%). The on-call technical team classified Severity 1 and initiated escalation. The decision authority table specified: system halt decision requires AI Governance Lead and System Owner (Head of Fraud Operations) jointly. Both were reached by phone by 4:00am. Decision made: implement human review overlay for the affected demographic immediately (halt not required — human review overlay provided equivalent protection). Executive notification by 5:30am, legal and DPO notification at 8:00am business start. The out-of-hours authority table was tested — and worked. The decision was made in 45 minutes by the right people.",
        },
        {
          title: "Regulatory notification assessment",
          body: "A UK insurer experienced a Severity 2 AI incident — vendor compliance failure affecting an AI used in insurance pricing decisions. Within 24 hours, legal and DPO jointly assessed regulatory notification obligations: FCA notification not immediately required (vendor failure was remediated within 24 hours, no customer financial impact confirmed); ICO notification not required (no data breach identified); FCA proactive disclosure recommended (informing the case supervisor at the next scheduled meeting). The notification assessment was completed within 24 hours because the decision authority (legal and DPO jointly) and assessment framework (FCA notification criteria, ICO notification criteria) were pre-defined. Without pre-defined authority, the assessment would have taken 5–7 days of internal debate.",
        },
      ],
    }),
    buildSection({
      number: "9.5",
      title: "Investigation and Root Cause Analysis",
      subtitle: "How to investigate AI failures effectively — and why the investigation determines the quality of the remediation",
      take: "Root cause analysis of AI failures requires a structured approach that looks beyond the immediate symptom (the wrong output) to the underlying cause (data quality, model architecture, deployment configuration, or monitoring failure). Remediating symptoms without identifying root causes produces recurring incidents.",
      why: "The most common AI incident investigation failure is symptom-focused remediation: the model is retrained, the system is restarted, and the incident is closed — without identifying whether the root cause was training data, feature engineering, deployment configuration, or monitoring design. The next incident looks different but has the same root cause.",
      paragraphs: [
        [
          s("The AI incident investigation has five focus areas. "),
          x(
            "Focus 1: Input data analysis — did the input distribution change? Was there a data quality failure? Was there an adversarial input? Focus 2: Model analysis — did model performance change? Was there a training data issue? Was there a model update that was not governed? Focus 3: Deployment analysis — was the system used for an unintended use case? Was there a configuration change? Was there an infrastructure issue affecting model execution?",
            "Focus 4: Monitoring analysis — why did monitoring not detect the failure earlier? Was the threshold set appropriately? Was the monitoring frequency adequate? Focus 5: Governance analysis — were all governance controls in place? Were any governance steps bypassed? Was the classification correct at deployment?",
          ),
          s(" All five focus areas must be investigated, not just the most apparent — monitoring failure analysis in particular is frequently skipped, perpetuating the detection gap that allowed the incident to develop."),
        ],
        [
          s("Investigation timeline must balance thoroughness with urgency. "),
          x(
            "Severity 1 incidents: initial root cause hypotheses within 24 hours, preliminary root cause analysis within 72 hours, full root cause report within 7 days. Severity 2: preliminary root cause within 5 days, full root cause report within 14 days. Severity 3: root cause report within 21 days.",
            "The preliminary root cause analysis — identifying the most probable cause category within 72 hours for Severity 1 — is the most critical investigation output. It drives the remediation approach and the immediate risk management decisions (system halt, human review overlay, affected-individual scope assessment).",
          ),
          s(" Define investigation timelines by severity — the preliminary root cause must be fast enough to drive remediation decisions before the incident compounds."),
        ],
        [
          s("Root cause analysis must produce remediation recommendations at all five focus areas, not just the primary cause. "),
          x(
            "A complete root cause report includes: primary root cause, remediation recommendation for the primary cause, analysis of all five investigation areas, and recommendations for any secondary gaps identified. A credit AI bias incident may have a primary cause (training data quality) and secondary causes (monitoring threshold set too high, bias testing not conducted at last retraining).",
            "Remediating only the primary cause while leaving secondary causes in place creates conditions for recurrence. The root cause analysis is the quality gate for the remediation programme — a remediation that does not address all identified causes is an incomplete remediation.",
          ),
          s(" Require the root cause report to address all five investigation areas, not just the primary cause — secondary causes are frequently the mechanism that allowed the primary cause to persist undetected."),
        ],
      ],
      examples: [
        {
          title: "Root cause analysis — five-area investigation",
          body: "A bank's Severity 1 AI bias incident (credit AI) produced a root cause analysis covering all five investigation areas. Primary cause: training data quality — a data pipeline error had introduced demographic segmentation data into features that should have been demographics-free. Secondary causes: (1) bias testing at last retraining had used an incorrect protected characteristic proxy, failing to detect the segmentation data; (2) monitoring threshold was set at 25% (threshold breach at 34%) — lowering to 15% would have detected the issue 6 weeks earlier; (3) the deployment configuration change that introduced the pipeline error had not been reviewed by the AI governance gate. Four remediations: primary cause fix (pipeline correction), retraining with corrected data, monitoring threshold reduction, and deployment configuration review process update.",
        },
        {
          title: "Monitoring analysis — systemic gap identified",
          body: "A healthcare AI incident investigation's monitoring analysis identified that the system's monitoring had no output quality monitoring layer — only accuracy metric monitoring. The incident (systematic miscategorisation of a new clinical condition type) had been detectable by output distribution monitoring (the new condition category was producing anomalous output patterns) six weeks before the accuracy metric alert triggered. Recommendation: add output distribution monitoring with control chart alerting for all future AI systems as a deployment precondition. The monitoring analysis prevented repetition of the same detection gap in future incidents.",
        },
        {
          title: "Governance analysis — use case extension without governance review",
          body: "A professional services firm's AI document review incident investigation governance analysis identified that the system had been extended to process a new document type six months prior — without a governance review trigger. The new document type was outside the model's training distribution; the system systematically miscategorised it. Governance analysis finding: the change management trigger for AI use case extensions had not been implemented in the document review tool's change management process. Remediation: implementation of the change management trigger for all AI system changes above a defined threshold, with retrospective review of all changes made to AI systems in the prior 18 months.",
        },
      ],
    }),
    buildSection({
      number: "9.6",
      title: "Regulatory Notification — When and How",
      subtitle: "The notification obligations that arise from AI incidents — GDPR, EU AI Act, and sector-specific requirements",
      take: "AI incidents may trigger regulatory notification obligations under multiple frameworks simultaneously: GDPR (data breach notification to ICO), EU AI Act (serious incident notification to national supervisory authority), and sector-specific obligations (FCA, PRA, EBA). Business leaders must understand the notification triggers, timelines, and content requirements for each framework before an incident occurs.",
      why: "Notification obligations that are discovered during an incident — under time pressure with incomplete information — are missed, delayed, or incomplete. Leaders who know the notification framework before incidents can make notification decisions within hours, not days.",
      paragraphs: [
        [
          s("GDPR breach notification: 72 hours to ICO for breaches likely to result in high risk. "),
          x(
            "A GDPR personal data breach requires ICO notification within 72 hours if likely to result in a high risk to individuals' rights and freedoms. AI incidents that constitute personal data breaches — training data exposed, AI processing personal data without adequate safeguards, AI system producing outputs that expose personal data — trigger the 72-hour clock.",
            "Not all AI incidents are GDPR breaches. A model bias incident without a personal data exposure element is not a GDPR breach — it may be a GDPR compliance failure (inadequate technical measures) but not a notifiable breach. The distinction determines the notification obligation.",
          ),
          s(" Assess every AI incident for GDPR breach status immediately — the 72-hour clock starts from when you first become aware, not when investigation is complete."),
        ],
        [
          s("EU AI Act serious incident notification: national supervisory authority notification for high-risk AI. "),
          x(
            "Under the EU AI Act, providers and deployers of high-risk AI systems must notify their national supervisory authority of any serious incident — defined as an incident resulting in death or serious harm, a serious and irreversible disruption of critical infrastructure, or a serious violation of fundamental rights.",
            "The 'serious violation of fundamental rights' trigger is the most relevant for most enterprise AI: discriminatory AI output at scale, systematic AI-based denial of access to essential services, and AI-based decisions that systematically affect protected groups could all meet this threshold. Legal assessment of whether a specific incident meets the serious incident threshold should be completed within 24 hours of incident classification.",
          ),
          s(" Assess every Severity 1 and 2 AI incident for EU AI Act serious incident notification obligation within 24 hours — the threshold is broader than it appears and includes fundamental rights violations."),
        ],
        [
          s("Sector-specific notification obligations often have faster timelines than GDPR. "),
          x(
            "FCA: material operational incidents affecting customers or market integrity require notification — no prescribed timeline but 'as soon as reasonably practicable'. PRA: prudential incident notification similarly expects prompt notification. EBA AI guidelines: banks should notify national supervisory authority of material AI incidents affecting credit risk or operational risk.",
            "For financial services firms, the practical approach is parallel assessment: assess all applicable notification obligations simultaneously — GDPR, EU AI Act, FCA, PRA — and notify any applicable framework for which the threshold is met, rather than sequential assessment that risks missing notification windows.",
          ),
          s(" For financial services firms: parallel notification assessment across all applicable frameworks simultaneously — sequential assessment risks missing notification windows under fast-moving frameworks."),
        ],
      ],
      examples: [
        {
          title: "ICO AI breach notification — 72 hours in practice",
          body: "A healthcare provider's AI patient triage system experienced an incident that exposed patient triage scores (special category health data) to a subset of patients through an API error. GDPR breach notification assessment: personal data breach (yes), involves special category data (yes), likely high risk to individuals (yes — health data exposure). ICO notification within 72 hours was triggered. The notification was submitted at hour 68, including: nature of breach, data categories affected, estimated number of individuals, likely consequences, and mitigation measures implemented. ICO assessed the breach as requiring individual notification to all affected patients. Pre-defined notification assessment process enabled compliance within the 72-hour window.",
        },
        {
          title: "EU AI Act serious incident assessment",
          body: "A bank's credit AI incident (34% age discrimination disparity) was assessed for EU AI Act serious incident notification within 18 hours of discovery. Assessment: the incident involved a high-risk AI system (credit decisions, Annex III), the discrimination pattern affected access to financial services (essential service), and the scale (estimated 400 affected applicants) arguably constituted a 'serious violation of fundamental rights'. Legal assessment: the 'serious' threshold was uncertain but the risk of under-notification exceeded the cost of notification. The bank notified the national supervisory authority proactively. The authority acknowledged the notification positively and conducted a focused review rather than a full enforcement investigation — a direct benefit of proactive disclosure.",
        },
        {
          title: "FCA concurrent notification — financial services incident",
          body: "A financial services firm experiencing a Severity 1 AI pricing incident assessed four notification obligations simultaneously within 8 hours: GDPR (not applicable — no personal data breach), EU AI Act (assessed as not meeting the serious incident threshold — no confirmed individual financial harm), FCA (applicable — material operational incident affecting customers), FCA notification submitted within 24 hours. The parallel assessment framework — with pre-defined criteria for each notification obligation and a legal team familiar with all four frameworks — enabled a comprehensive notification decision within 8 hours. Sequential assessment would have taken 3–4 days.",
        },
      ],
    }),
    buildSection({
      number: "9.7",
      title: "Affected-Individual Remediation",
      subtitle: "How to identify, communicate with, and remedy harm for individuals affected by AI failures",
      take: "AI incidents affecting individuals at scale create legal and ethical obligations to identify affected individuals, communicate transparently, and remedy adverse outcomes where possible. Business leaders must plan the remediation architecture — individual identification systems, communication templates, remedy programmes — before incidents occur, not improvise them during a live incident.",
      why: "Affected-individual remediation is operationally complex at scale: identifying which individuals were affected by a specific AI failure, what adverse outcome they experienced, and what remedy is appropriate requires pre-built data systems and legal frameworks that cannot be assembled in days during an incident response.",
      paragraphs: [
        [
          s("Individual identification requires pre-built data infrastructure. "),
          x(
            "Identifying individuals affected by an AI failure requires: records of every AI decision with input data and output (to identify who was affected by the failure pattern), timestamps (to define the period of failure), and contact information (to reach affected individuals).",
            "Many organisations discover during incident response that they lack the data infrastructure to identify affected individuals: AI system outputs are not logged with sufficient granularity, decision timestamps are not retained, or contact information is not linked to decision records.",
          ),
          s(" Build affected-individual identification capability into every AI system at deployment — logging must be sufficient to identify who was affected by any specific failure pattern, with contact information linkable to decision records."),
        ],
        [
          s("Communication must be honest, timely, and actionable. "),
          x(
            "Communication to affected individuals must cover: what AI system was involved and how it affected the individual, what the organisation is doing to address the failure, what remedy is available to the individual, and how to make a complaint or request further information.",
            "The tone of affected-individual communication is a governance decision: organisations that communicate proactively and honestly before individuals contact them have better outcomes — in regulatory assessment of governance quality, in reputational damage limitation, and in complaint volume — than those who communicate reactively or defensively.",
          ),
          s(" Proactive communication to affected individuals before complaints arrive is always more governance-effective than reactive communication — regulators and individuals respond better to organisations that notify them."),
        ],
        [
          s("Remedy programmes must be proportionate to the adverse outcome caused. "),
          x(
            "Remedy for a credit application incorrectly declined by a biased AI: review by a qualified human underwriter with no AI involvement; if the original decision was incorrect, approval with an apology. Remedy for an incorrectly rejected job application: reinstatement to the selection process; compensation for time and effort if the application window has closed.",
            "The remedy programme must be designed before it is needed: the legal basis for the remedy, the operational process for delivery, the budget provision, and the quality assurance that remedies are delivered correctly all require pre-planning that is not achievable during an active incident.",
          ),
          s(" Design remedy programme frameworks for your highest-risk AI use cases before incidents occur — the remedy design cannot be improvised during the incident without becoming itself a source of harm."),
        ],
      ],
      examples: [
        {
          title: "Credit AI remediation — 8,000 affected applicants",
          body: "A consumer lender's credit model drift incident affected an estimated 8,000 applicants over 14 months. Remediation programme: (1) individual identification — AI decision log matched to applicant database, 7,847 affected applicants identified within 5 days using pre-existing logging infrastructure; (2) communication — personalised letter to each applicant explaining the failure and their remedy options; (3) remedy — all affected applicants offered re-review by human underwriter; (4) outcome tracking — 1,240 re-reviews conducted, 890 decisions changed to approval. The affected-individual identification required logging infrastructure that had been built at deployment — without it, identification would have been impossible at this scale.",
        },
        {
          title: "HR AI remediation — candidate re-engagement",
          body: "A retailer's recruitment AI bias incident (age discrimination in candidate shortlisting) affected an estimated 340 candidates over 9 months. Remediation: candidates identified from application database; personalised email sent acknowledging the failure, apologising, and offering a re-review of their application by a human recruiter. 248 of 340 candidates accepted the re-review offer; 34 received job offers following human review. The proactive communication approach generated significant positive social media response — candidates who received honest, prompt communication were far more likely to re-engage and recommend the employer than those who did not.",
        },
        {
          title: "NHS AI incident — patient communication",
          body: "An NHS trust's AI diagnostic support system incident (reduced sensitivity following a vendor update) required communication to patients whose scans were reviewed during the affected period. Communication challenge: 4,200 patients required notification that their scan had been reviewed with a system operating below normal sensitivity, and offered a repeat scan review by a consultant radiologist. The trust's communications team had pre-prepared a template for AI incident patient communication — developed as part of the pre-deployment governance programme. Communication was dispatched within 6 days of incident discovery. Pre-prepared templates reduced communication time from an estimated 3 weeks to 6 days.",
        },
      ],
    }),
    buildSection({
      number: "9.8",
      title: "Building an AI Incident Response Programme",
      subtitle: "A practical programme that prepares your organisation for AI failures before they occur",
      take: "An AI incident response programme has six components: classification framework, detection architecture, escalation pathways, investigation methodology, notification protocols, and remediation frameworks. All six must be operational before deployment — not assembled during an active incident. Business leaders who build the programme before it is needed avoid the compounding operational, legal, and reputational damage of improvised incident response.",
      why: "Every element of AI incident response that must be built during an active incident is an element that is built under time pressure, with incomplete information, and with the organisation simultaneously managing the external consequences of the failure. Pre-built response capability is risk management; improvised response capability is crisis management.",
      paragraphs: [
        [
          s("Tabletop exercises validate the incident response programme before it is needed. "),
          x(
            "A tabletop exercise simulates a specific AI incident scenario — a Severity 1 bias finding, a vendor compliance failure, a data breach through an AI pipeline — and tests whether the incident response programme works: are classification criteria clear, are escalation pathways known, are notification timelines achievable, are individual identification systems adequate?",
            "Tabletop exercises identify gaps that review of written procedures misses: the escalation contact list is out of date; the classification criteria produce ambiguous results for certain scenarios; the legal team's notification assessment process takes longer than the compliance window allows.",
          ),
          s(" Conduct annual tabletop exercises for AI incident scenarios — use realistic scenarios for your highest-risk AI systems and involve all response team members, including legal, DPO, communications, and business function owners."),
        ],
        [
          s("Post-incident reviews are governance investments, not administrative exercises. "),
          x(
            "Every AI incident — regardless of severity — should produce a post-incident review covering: what happened, how it was detected, how the response was executed, what worked and what did not, and what changes to the incident response programme are required.",
            "The highest-value output of a post-incident review is the programme improvement recommendation: if the incident was detected later than the monitoring design should have allowed, the monitoring threshold is wrong. If escalation was delayed, the escalation criteria were ambiguous. Post-incident review is continuous programme improvement.",
          ),
          s(" Post-incident review output is a programme improvement recommendation, not just an incident record — assign ownership and target dates to each recommendation before the review is closed."),
        ],
        [
          s("Incident response programme governance requires named ownership and regular review. "),
          x(
            "The incident response programme is a governance document that becomes stale as AI systems change, regulations evolve, and team structures change. Annual review of the complete programme — classification criteria, escalation contacts, notification protocols, and remediation frameworks — ensures it remains current.",
            "Named ownership is essential: the AI Governance Lead typically owns the incident response programme, with system owners owning the system-specific elements. Without named ownership, programme maintenance is nobody's responsibility.",
          ),
          s(" Assign named ownership of the incident response programme to the AI Governance Lead and schedule annual review — a programme not maintained is a programme that will fail in the scenarios it was designed for."),
        ],
      ],
      examples: [
        {
          title: "Tabletop exercise — Severity 1 bias scenario",
          body: "A financial services firm conducted a tabletop exercise simulating a Severity 1 bias incident: a 34% demographic parity disparity in the credit AI, discovered by the monitoring team at 9pm on a Thursday. Exercise findings: (1) the on-call escalation pathway was not clear — three team members believed different people were responsible for the 2-hour executive escalation; (2) the affected-individual identification process was estimated at 5 days — too slow for the notification window; (3) the regulatory notification criteria for EU AI Act serious incidents were unknown to the legal team member who participated. Three programme improvements followed: escalation contact list updated with on-call rotation; affected-individual identification process pre-built and tested; EU AI Act notification assessment framework documented for legal team. None of these gaps were visible in procedure review.",
        },
        {
          title: "Post-incident review — detection gap improvement",
          body: "A retailer's post-incident review for a recommendation AI bias incident identified that monitoring detection occurred 8 weeks after the bias pattern began — 4 weeks later than the monitoring architecture should have detected it. Root cause: the monthly bias monitoring reports were reviewed at the end of the month, meaning a threshold breach occurring on day 1 of the month was not reviewed until day 30. Improvement recommendation: automate bias monitoring to generate immediate alert on threshold breach rather than batch monthly review. Implementation: 2 weeks. Next incident (Severity 3, same AI system): detected at 3 days. The post-incident improvement reduced detection time by 85%.",
        },
        {
          title: "Annual programme review — regulatory updates",
          body: "A UK insurer's annual AI incident response programme review in Q1 2026 identified three regulatory updates that required programme changes: (1) EU AI Act serious incident notification guidance issued by the European AI Office specified a 72-hour notification window for confirmed fundamental rights violations — added to notification protocols; (2) FCA's Dear CEO letter on AI governance specified new incident categorisation requirements — integrated into classification framework; (3) ICO guidance on AI and GDPR breach notification updated to include AI model failures — reviewed and incorporated into breach assessment criteria. Annual review prevented three notification protocol gaps from persisting into the regulatory environment.",
        },
      ],
    }),
  ],
  quiz: [
    {
      q: "Your AI fraud detection system's monthly bias monitoring report shows false positive rates of 27% for one demographic group (policy threshold: 20%). The technical team detected this two weeks ago but did not escalate while investigating root cause. What governance failure does this illustrate?",
      options: [
        "Good practice — the team provided a thorough investigation before escalating.",
        "Under-escalation: the incident should have been escalated within 4 hours of threshold detection, not held pending root cause analysis. Escalation is triggered by threshold breach, not by investigation completion. The two-week delay means the system continued operating with a confirmed bias pattern for 14 additional days.",
        "The technical team correctly managed the incident within their authority.",
        "The escalation was appropriate given the severity was below Severity 1 threshold.",
      ],
      correct: 1,
      correctFeedback:
        "Right. Escalation criteria must be detection-triggered, not investigation-triggered. Threshold breach triggers escalation; investigation runs in parallel. A two-week delay after a confirmed Severity 2 threshold breach is a governance failure regardless of investigation thoroughness. Re-read sections 9.2 and 9.4.",
      wrongFeedback:
        "A confirmed bias threshold breach triggers escalation regardless of investigation completeness. Investigation runs in parallel with escalation — not before it. The two-week delay allowed the biased system to continue operating and significantly expanded the affected-individual population. Re-read sections 9.2 and 9.4.",
    },
    {
      kind: "order",
      q: "Order the six components of an AI incident response programme from most foundational (first) to most operational (last).",
      prompt: "Drag to arrange from foundational (top) to operational (bottom).",
      items: [
        "Classification framework: four-level severity criteria defined before any incidents occur",
        "Detection architecture: three-layer monitoring (performance metrics, output quality, external signals)",
        "Escalation pathways: decision authority tables and defined timelines by severity",
        "Investigation methodology: five-area root cause analysis framework with severity-based timelines",
        "Notification protocols: GDPR, EU AI Act, and sector-specific notification triggers and timelines",
        "Remediation frameworks: affected-individual identification, communication templates, and remedy programmes",
      ],
      correctFeedback:
        "Right. Classification enables detection decisions, detection feeds escalation, escalation triggers investigation, investigation informs notification, and notification and investigation drive remediation. Each component depends on the prior one. Re-read section 9.8.",
      wrongFeedback:
        "Classification must come first — without clear severity criteria, detection alerts cannot be classified and escalation pathways cannot be activated. Remediation is last because it depends on investigation findings and notification decisions. Re-read section 9.8.",
    },
    {
      kind: "categorize",
      q: "Classify each AI incident monitoring signal by the detection layer it belongs to.",
      categories: ["Performance Monitoring", "Output Quality Monitoring", "External Signal Monitoring"],
      items: [
        { text: "Automated alert: credit AI precision drops below 84% (threshold: 85%).", category: 0 },
        { text: "Control chart alert: mortgage AI approval rate has shifted 7 percentage points outside normal distribution bounds.", category: 1 },
        { text: "Customer service report: 15 complaints in the past week citing unexpected AI categorisation of support tickets.", category: 2 },
        { text: "Bias monitoring alert: demographic parity disparity for age group exceeds 20% policy threshold.", category: 0 },
        { text: "Statistical anomaly: AI recommendation outputs showing unusual concentration in one category compared to historical distribution.", category: 1 },
        { text: "Social media monitoring alert: mentions of '[Company] AI unfair' trending in industry press.", category: 2 },
      ],
      correctFeedback:
        "Right. Performance monitoring: accuracy and bias metric threshold alerts. Output quality monitoring: distribution anomalies detected by statistical process control. External signals: customer complaints and media monitoring. All three layers are required for comprehensive detection. Re-read section 9.3.",
      wrongFeedback:
        "Performance monitoring tracks accuracy and bias metrics against thresholds. Output quality monitoring detects distribution changes not visible in aggregate metrics. External signals (complaints, media) are often the first visible indicator of public-facing AI failures. Re-read section 9.3.",
    },
    {
      q: "A Severity 1 AI bias incident has been confirmed in your credit AI system. The legal team says regulatory notification assessment will take 5–7 days to complete. What is the governance issue and how should it be resolved?",
      options: [
        "5–7 days is acceptable — regulatory notification should not be rushed.",
        "The GDPR 72-hour breach notification window and EU AI Act serious incident notification requirements cannot accommodate a 5–7 day assessment process. Pre-defined notification assessment frameworks must be built before incidents — enabling a 24-hour notification assessment, not a 5-day one.",
        "Submit all possible regulatory notifications immediately to avoid missing any window.",
        "Seek an extension from the regulator while the assessment is completed.",
      ],
      correct: 1,
      correctFeedback:
        "Right. GDPR's 72-hour window and EU AI Act's notification requirements require pre-built assessment frameworks that enable decisions in hours, not days. A 5-7 day assessment process will miss the GDPR notification window for any breach element. Re-read sections 9.6 and 9.8.",
      wrongFeedback:
        "Regulatory notification windows do not pause for internal assessment processes. Pre-defined notification criteria and assessment frameworks are required to make notification decisions within the applicable windows. Building the assessment process during the incident creates the exact delay that misses notification deadlines. Re-read sections 9.6 and 9.8.",
    },
    {
      q: "During a tabletop exercise for a Severity 1 AI incident scenario, the team discovers that affected-individual identification is estimated at 5 days — too slow for a regulatory notification that requires individual notification within 72 hours. What is the correct governance response?",
      options: [
        "Accept the 5-day identification process — it is within industry norms.",
        "The tabletop exercise has identified a critical capability gap. Pre-build the affected-individual identification data infrastructure and process before any incident occurs. The 72-hour window cannot accommodate a 5-day identification process — the infrastructure must be redesigned.",
        "Negotiate with the regulator to extend the notification window for complex AI incidents.",
        "Report the 5-day estimate in the tabletop findings without further action.",
      ],
      correct: 1,
      correctFeedback:
        "Right. Tabletop exercises exist to find gaps like this before real incidents occur. The correct response is to fix the gap: pre-build identification infrastructure and process to meet the notification window requirement. Re-read sections 9.7 and 9.8.",
      wrongFeedback:
        "A 5-day affected-individual identification process is incompatible with 72-hour regulatory notification requirements. The tabletop exercise identified a real capability gap — the correct response is to redesign the identification infrastructure before an incident occurs, not to accept the gap or negotiate with the regulator. Re-read sections 9.7 and 9.8.",
    },
    {
      kind: "order",
      q: "Order the AI incident response actions for a Severity 1 bias finding from immediate detection to full resolution.",
      prompt: "Drag to arrange from first action (top) to final resolution (bottom).",
      items: [
        "Classify the incident as Severity 1 and activate human review overlay immediately",
        "Escalate to executive team within 2 hours and to legal/DPO within 4 hours",
        "Commence root cause analysis across all five investigation areas in parallel with escalation",
        "Assess regulatory notification obligations within 24 hours and notify applicable authorities",
        "Identify affected individuals and commence communication and remediation programme",
        "Complete full root cause report, implement programme improvements, and conduct post-incident review",
      ],
      correctFeedback:
        "Right. Classification and immediate safeguard first, then escalation, then parallel root cause investigation, then notification assessment, then affected-individual remediation, then programme improvement. Each step depends on the prior one — but root cause investigation runs in parallel with escalation, not after it. Re-read sections 9.2, 9.4, 9.5, 9.6, 9.7.",
      wrongFeedback:
        "Classification and human review overlay are immediate — do not wait for escalation before activating safeguards. Root cause analysis runs in parallel with escalation, not sequentially after it. Notification assessment must happen within 24 hours — before root cause is fully confirmed. Re-read sections 9.2, 9.4, 9.5, 9.6, 9.7.",
    },
  ],
});
