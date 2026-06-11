import { buildChapter, buildSection, s, x, BL_CALLOUT } from "../concepts-bl-helpers";

export const chapter06BlAiRiskRegister = buildChapter({
  slug: "bl-ai-risk-register",
  number: 6,
  shortTitle: "AI Risk Register",
  title: "The AI Risk Register — How Business Leaders Identify, Document, and Manage AI Risk",
  readingMinutes: 22,
  summary:
    "An AI risk register is the operational backbone of your AI governance programme — a living document that maps every material AI risk, its likelihood, impact, owner, and mitigation status. Business leaders who treat AI risk management as a compliance exercise rather than an operational discipline create the conditions for avoidable incidents.",
  keyTakeaway:
    "Every deployed AI system carries a distinct risk profile across six categories: technical failure, data quality, bias and discrimination, regulatory compliance, third-party dependency, and reputational risk. The AI risk register maps these risks per system, assigns owners, and tracks mitigation status — enabling leadership decisions about risk acceptance versus investment.",
  pmCallout: BL_CALLOUT,
  sections: [
    buildSection({
      number: "6.1",
      title: "What Makes AI Risk Different",
      subtitle: "Why standard enterprise risk frameworks need AI-specific extensions — and where the gaps are",
      take: "AI risks are not fully captured by standard enterprise risk frameworks. The distinctive characteristics of AI risk — opacity (you cannot fully inspect the decision logic), drift (performance degrades silently), scale (errors affect thousands simultaneously), and emergent behaviour (AI systems fail in unexpected ways) — require AI-specific risk management extensions.",
      why: "Organisations that map AI risk onto existing risk frameworks without AI-specific extensions systematically under-estimate AI risk exposure. The opacity risk alone — not knowing why a system made a specific decision — is structurally different from any standard software risk category.",
      paragraphs: [
        [
          s("Opacity risk: AI systems cannot fully explain their decisions in all cases. "),
          x(
            "Traditional software fails in predictable ways: a bug produces a specific wrong output that can be traced, reproduced, and fixed. AI systems fail probabilistically: a model may produce wrong outputs for a specific input distribution without any systematic failure mode that is easily traceable.",
            "This changes risk management fundamentally. Traditional control: test all code paths. AI control: test representative samples and monitor production performance — accepting residual uncertainty about untested input distributions.",
          ),
          s(" AI risk registers must include opacity risk as a standard category: which decisions cannot be fully explained, what monitoring compensates for the opacity, and what the escalation pathway is when an unexplainable decision is challenged."),
        ],
        [
          s("Model drift: AI performance degrades silently without code changes. "),
          x(
            "When the real-world distribution of inputs to an AI system changes — customer behaviour shifts, market conditions change, language patterns evolve — the model's performance may degrade while the system continues running without errors.",
            "Unlike software bugs, model drift does not generate error alerts. It appears as gradually worsening outcomes: lower prediction accuracy, increasing customer complaints about AI decisions, or unexplained changes in decision outcome distributions — often identified only in retrospect.",
          ),
          s(" Model drift is a standard risk entry for every production AI system — with a defined monitoring metric, threshold, and escalation pathway before drift becomes business impact."),
        ],
        [
          s("Scale amplification: AI errors affect many people simultaneously. "),
          x(
            "A human error in a single credit decision affects one customer. An AI error in a credit model affects every customer scored by that model between the error's introduction and its detection. AI scale amplifies the impact of errors, biases, and failures in ways that individual human decision-making does not.",
            "This scale dimension changes the risk calculus for AI deployment: a 1% error rate in a model making 10,000 decisions per month produces 100 incorrect outcomes per month — a volume requiring operational remediation capacity that a 1% error rate in a manual process does not.",
          ),
          s(" Multiply any error rate estimate by the decision volume when calculating risk impact — AI risk impact is always scale-adjusted, not individual-incident-adjusted."),
        ],
      ],
      examples: [
        {
          title: "Knight Capital — algorithmic trading drift and scale",
          body: "Knight Capital's 2012 trading algorithm incident — a software deployment error causing an algorithm to execute unintended trades for 45 minutes — resulted in a $440M loss and the firm's eventual acquisition. The incident illustrates scale amplification: 45 minutes of algorithmic execution produced losses that would have taken months to accumulate through individual human trading errors. AI risk management must account for the time-to-impact compounding that automation creates.",
        },
        {
          title: "Credit model drift — retrospective discovery",
          body: "A UK bank's retail credit model was trained pre-pandemic and continued operating through 2020–2022 without retraining. Post-pandemic customer financial behaviour differed significantly from training patterns. An audit in 2022 identified the model's approval rate had diverged from human review approval rates by 23 percentage points — indicating significant drift. The drift had been undetected for 18 months because there was no monitoring metric or threshold defined for approval rate divergence. Model drift monitoring must be established before deployment, not discovered retrospectively.",
        },
        {
          title: "Facial recognition false match — opacity risk",
          body: "A false match by a facial recognition system resulted in Robert Williams being wrongfully arrested in Detroit in 2020. The opacity risk: the system produced a confident match output with no explanation of which facial features drove the match, no confidence interval for this specific comparison, and no flag for low-quality input image conditions. Reviewers accepted the output because they could not evaluate the specific decision's reliability. Opacity risk requires human review protocols that account for the reviewer's inability to verify the underlying decision logic.",
        },
      ],
    }),
    buildSection({
      number: "6.2",
      title: "The Six AI Risk Categories",
      subtitle: "A taxonomy of AI risks that covers the full exposure landscape for business leaders",
      take: "A complete AI risk register must cover six categories: technical and model risk, data risk, bias and discrimination risk, regulatory and compliance risk, third-party and supply chain risk, and reputational and ethical risk. Each category requires distinct monitoring, mitigation, and ownership.",
      why: "Risk registers that only capture the most visible risks — typically technical performance and regulatory compliance — miss the risks that produce the most damaging incidents: data quality failures, supply chain AI risk, and reputational crises from ethical AI failures.",
      paragraphs: [
        [
          s("Technical and model risk covers model performance, drift, robustness, and system reliability. "),
          x(
            "Key risks: model accuracy below acceptable threshold, model drift from changing input distribution, adversarial inputs producing incorrect outputs, infrastructure failure causing AI service outage, and model version control failures causing unintended model changes.",
            "Mitigation: defined performance metrics with monitoring thresholds, regular retraining schedule, adversarial testing in staging, infrastructure redundancy for critical AI, and version control protocols with rollback capability.",
          ),
          s(" Every production AI system needs a defined performance metric, monitoring threshold, and escalation pathway in the risk register — without these, model risk is unmeasured."),
        ],
        [
          s("Data risk covers training data quality, data pipeline failures, and data governance gaps. "),
          x(
            "Key risks: training data contains biased or unrepresentative samples, data pipeline failures cause stale or incorrect model inputs, personal data processed without adequate legal basis, data retention violations in training datasets, and data poisoning attacks on training pipelines.",
            "Mitigation: training data quality assessment documentation, pipeline monitoring with alert on data freshness failures, GDPR processing records for all training data, retention schedule applied to training datasets, and data pipeline security controls.",
          ),
          s(" Data risk is the most underestimated AI risk category — most AI failures trace to data quality or data governance failures, not model architecture failures."),
        ],
        [
          s("Bias and discrimination risk, regulatory risk, third-party risk, and reputational risk complete the taxonomy. "),
          x(
            "Bias risk: discriminatory outputs affecting protected characteristics, proxy variable discrimination, feedback loop amplification. Regulatory risk: GDPR violations, EU AI Act non-compliance, sector regulatory breaches. Third-party risk: vendor AI failure, vendor compliance failure, API dependency risk. Reputational risk: public AI failure, media coverage of AI incidents, stakeholder loss of confidence.",
            "Each risk category requires separate risk register entries for each affected AI system — a single 'AI risk' entry per system collapses the taxonomy and produces risk assessments that are too broad to manage.",
          ),
          s(" Create separate risk register entries for each risk category per in-scope AI system — one combined 'AI risk' entry per system does not support meaningful risk management."),
        ],
      ],
      examples: [
        {
          title: "Data pipeline failure — live fraud model",
          body: "A bank's AI fraud detection system began producing significantly elevated false positive rates over a 48-hour period. Root cause: a data pipeline failure caused transaction velocity data to be processed incorrectly, inflating velocity scores for all transactions. The AI model — responding normally to its input data — flagged 4,200 legitimate transactions as fraudulent. The risk register entry for data pipeline risk had a defined monitoring metric; the alert threshold was set too high and did not trigger until the second day. Post-incident: threshold adjusted to 6-hour data freshness check with immediate alert on failure.",
        },
        {
          title: "Third-party AI failure — cascading operational impact",
          body: "A logistics company's route optimisation relied on a third-party AI API for real-time traffic and route data. An extended API outage (18 hours) caused the company's AI dispatch system to fall back to static routing tables — generating 340 late deliveries and £120K in SLA penalties. The risk register entry for third-party dependency risk had no impact assessment for API outage duration — only an uptime SLA metric. Post-incident: risk register updated to include business impact modelling for 4-hour, 12-hour, and 24-hour API outage scenarios, with manual routing protocol for outages exceeding 4 hours.",
        },
        {
          title: "Reputational risk — unexpected AI failure in public context",
          body: "A recruiting agency's AI shortlisting tool was featured in a journalist's investigation after a hiring manager shared (with the journalist's source) that the AI had ranked an identically qualified candidate lower based on factors the manager could not explain. The resulting media coverage — 'Opaque AI decides who gets interviews at [firm]' — generated over 200 candidate withdrawals and a social media debate about AI hiring fairness. The reputational risk was not in the risk register because the tool was considered low-risk from a technical and regulatory standpoint. Reputational risk assessment requires public perception scenarios, not just technical and legal risk views.",
        },
      ],
    }),
    buildSection({
      number: "6.3",
      title: "Building the Risk Register",
      subtitle: "Format, fields, scoring methodology, and the review cadence that makes the register a live tool",
      take: "An AI risk register that is only updated annually in preparation for an audit is a compliance document. A risk register updated in real-time as risks are identified, monitored, and remediated is a governance tool. The format, fields, and review cadence determine which one you have.",
      why: "Risk registers fail not because of format problems but because of review cadence problems: entries are created at deployment and never updated, new risks are not added, and closed mitigations are not verified. The review cadence is the mechanism that keeps the register alive.",
      paragraphs: [
        [
          s("The minimum field set for each risk register entry covers eight fields. "),
          x(
            "Risk ID; AI system name and classification tier; risk category (from the six-category taxonomy); risk description; likelihood score (1–5); impact score (1–5); inherent risk score (likelihood × impact); current mitigations; residual risk score; risk owner (named individual); mitigation status; and next review date.",
            "The residual risk score — risk remaining after mitigations are applied — is the most governance-relevant field. It quantifies what exposure remains despite controls. Residual risk scores above a defined threshold should trigger escalation to a senior governance review.",
          ),
          s(" Residual risk scores above threshold require leadership escalation — define the threshold before populating the register so decisions are consistent, not case-by-case."),
        ],
        [
          s("Risk scoring should be calibrated against business impact, not generic likelihood descriptions. "),
          x(
            "Impact score 5 should be defined in terms your leadership team understands: regulatory fine above 2% of global turnover, class action with estimated value above £10M, AI system halt with customer service impact exceeding 48 hours, or media incident generating reputational impact at board level.",
            "Generic likelihood descriptions ('rare', 'possible') produce inconsistent scoring across risk owners. Calibrated descriptions anchored to observable events ('more than once per quarter', 'once in the last two years of operation') produce consistent, comparable scoring.",
          ),
          s(" Define likelihood and impact scales in terms observable to business leaders, not generic risk matrix language — calibrated scales produce consistent scoring across risk owners."),
        ],
        [
          s("Review cadence must be triggered by both time and events. "),
          x(
            "Time-triggered reviews: quarterly for Tier 1 systems, semi-annually for Tier 2, annually for Tier 3. Event-triggered reviews: any AI incident, any material model update, any regulatory development relevant to the system, and any bias monitoring threshold breach.",
            "Event-triggered reviews are the more important mechanism: risks change between scheduled reviews, and the most significant risk escalations arise from incidents and changes rather than calendar intervals.",
          ),
          s(" Embed event-triggered risk register review into incident response and change management processes — the risk register should be updated within 48 hours of any material AI incident, not at the next scheduled review date."),
        ],
      ],
      examples: [
        {
          title: "Global bank — AI risk register format",
          body: "A global bank's AI risk register covers 34 AI systems (11 Tier 1, 15 Tier 2, 8 Tier 3) with the following review cadence: Tier 1 quarterly risk committee presentation; Tier 2 semi-annual risk function review; Tier 3 annual governance update. Event triggers: any AI incident generates a risk register review within 48 hours; any regulatory guidance update relevant to an AI system generates a review within 10 business days; any bias monitoring threshold breach generates an immediate residual risk reassessment. The register is maintained in the GRC platform with automated reminder alerts to risk owners 2 weeks before scheduled review dates.",
        },
        {
          title: "Insurance company — calibrated risk scoring",
          body: "An insurance company calibrated its AI risk impact scores with specific business anchors: Impact 5 = FCA enforcement action or fine above 1% of turnover, or class action claim above £5M; Impact 4 = regulator correspondence or customer remediation programme above £500K; Impact 3 = service outage above 24 hours or customer complaint rate increase above 50%; Impact 2 = measurable performance degradation below threshold, or individual complaint to FCA; Impact 1 = internal quality finding with no external impact. Calibrated impact scores produced consistent register entries across all AI systems and enabled leadership decisions about risk acceptance vs. remediation investment.",
        },
        {
          title: "Healthcare AI — event-triggered review",
          body: "A healthcare provider's AI diagnostic support system risk register was event-triggered when a vendor software update caused the model's sensitivity (true positive rate) to drop 8 percentage points below its pre-update level. The event triggered an immediate risk register review: the model performance risk entry was updated from residual risk score 6 to residual risk score 12 (high), triggering escalation to the Medical Director. The system was paused for human radiologist review of all outputs until the vendor deployed a corrected update. Without the event trigger, the risk register would not have been updated until the quarterly review — three weeks later.",
        },
      ],
    }),
    buildSection({
      number: "6.4",
      title: "Risk Appetite and Acceptance",
      subtitle: "How business leaders make risk acceptance decisions — and what they are actually accepting when they sign off on AI risk",
      take: "Risk acceptance is not a passive decision — it is an active choice to operate with a known residual risk. Business leaders who sign off on AI deployments with open risk register entries are accepting specific quantified risks on behalf of their organisation. The sign-off must be informed and documented.",
      why: "Uninformed risk acceptance — signing off on an AI deployment without understanding the open risk register entries — is not risk management. When the risk materialises, the decision-maker cannot demonstrate due diligence. Informed risk acceptance — with documented understanding of the specific residual risks — is defensible.",
      paragraphs: [
        [
          s("Risk appetite must be defined before individual risk acceptance decisions, not established case-by-case. "),
          x(
            "Risk appetite defines the level and type of risk an organisation is willing to accept in pursuit of its objectives. For AI, risk appetite should specify: maximum acceptable residual risk score by system tier; risk categories where zero tolerance applies (prohibited AI practices, confirmed discrimination); and escalation thresholds requiring board-level approval.",
            "Without a defined risk appetite, every risk acceptance decision is ad hoc — creating inconsistency across systems and functions, and making it impossible to demonstrate to regulators that risk decisions were principled rather than opportunistic.",
          ),
          s(" Define AI risk appetite before reviewing the first risk register entry — risk acceptance decisions made without a defined appetite framework are not risk management."),
        ],
        [
          s("Risk acceptance sign-off must specify what is being accepted and who is accountable. "),
          x(
            "A risk acceptance documentation should include: specific risk description and residual risk score; reasons the risk cannot be fully mitigated; business justification for proceeding despite residual risk; compensating controls that reduce impact if the risk materialises; and named individual accepting the risk with their authority level.",
            "Risk acceptance at the wrong authority level is a governance failure: a data scientist accepting a high regulatory compliance risk on behalf of the organisation has no authority to do so. Risk acceptance authority levels should be defined by residual risk score in the governance framework.",
          ),
          s(" Define risk acceptance authority levels by residual risk score — high-residual-risk acceptance requires executive sign-off; medium-residual-risk acceptance requires function head sign-off; low-residual-risk acceptance requires system owner sign-off."),
        ],
        [
          s("Accepted risks must be monitored — risk acceptance is not permanent. "),
          x(
            "An accepted risk that is not monitored becomes an unmanaged risk. Risk acceptance decisions should specify: the monitoring metric that will detect if the risk materialises, the escalation pathway if it does, and a defined review date to reassess whether acceptance remains appropriate.",
            "Risk acceptance can become inappropriate due to: regulatory change (a risk that was acceptable under previous guidance may no longer be acceptable), business growth (a risk acceptable at pilot scale may not be acceptable at production scale), or incident learning (an accepted risk that has materialised elsewhere in the industry should trigger reassessment).",
          ),
          s(" Every risk acceptance decision includes a review date and specific materialisation monitoring — risk acceptance without these is permanent risk ignoring."),
        ],
      ],
      examples: [
        {
          title: "Fintech — risk appetite statement for AI",
          body: "A fintech's AI risk appetite statement defines: Tier 1 systems (credit AI, KYC AI) maximum acceptable residual risk score = 8; risk categories with zero tolerance = confirmed discrimination above any threshold, confirmed prohibited AI practices, GDPR fines above €250K; escalation threshold for board risk committee = residual risk score above 12 or any zero-tolerance category breach; risk acceptance authority levels = residual score 1–6: system owner; 7–10: function head; above 10: CRO with board notification. The statement was approved by the board risk committee and is reviewed annually.",
        },
        {
          title: "Retail bank — documented risk acceptance",
          body: "A retail bank accepted a residual bias risk (residual score 8) for its mortgage AI after determining that full mitigation was not achievable before the regulatory-driven launch date. The acceptance documentation specified: specific bias metric (demographic parity for age group — 17% disparity); reason for proceeding (regulatory timeline); compensating controls (enhanced human review for all borderline decisions involving applicants over 60, monthly monitoring with 10% threshold alert); review date (3 months post-launch); and CFO sign-off. Six months later: the bias monitoring showed improvement to 11% (below the 15% policy threshold). The documented acceptance enabled subsequent demonstration of due diligence.",
        },
        {
          title: "Scale change triggering risk acceptance review",
          body: "A professional services firm accepted a residual third-party dependency risk for an AI API at pilot scale (500 queries/month, limited customer impact if outage occurs). When the system went to production at 50,000 queries/month, the same API outage would now cause significant customer-facing service disruption — a different impact than the accepted risk described. The risk register's production volume trigger initiated a risk acceptance review; the original acceptance was withdrawn; and a redundancy architecture (fallback to alternative API) was designed before full production deployment. Risk acceptance must be reviewed when system scale changes materially.",
        },
      ],
    }),
    buildSection({
      number: "6.5",
      title: "Risk Register in Practice — Integration with Operations",
      subtitle: "How the AI risk register connects to incident management, change management, audit, and board reporting",
      take: "An AI risk register that exists in isolation from operational processes is a compliance document. An AI risk register integrated into incident management, change management, audit, and board reporting is an operational governance tool that adds value in real-time.",
      why: "The test of a risk register's value is whether it changes decisions. A risk register that is consulted before AI incidents, changes, and deployments changes decisions. One that is updated only after events is a record of what went wrong.",
      paragraphs: [
        [
          s("Incident management integration: every AI incident triggers a risk register review. "),
          x(
            "An AI incident — performance failure, bias finding, customer complaint about AI decision, regulatory inquiry — provides new risk information. The incident should trigger: review of all risk entries for the affected system; reassessment of likelihood scores for materialised risks; identification of any risk entries that the incident reveals were under-assessed; and update of mitigation status.",
            "Incident management systems should have an automatic AI risk register review trigger for any incident classified as AI-related. This ensures the register reflects current operational learning, not just pre-deployment assessments.",
          ),
          s(" Embed AI risk register review in the incident management workflow — every AI incident updates the register before the incident is closed, not at the next scheduled review date."),
        ],
        [
          s("Change management integration: every material AI system change triggers a risk review. "),
          x(
            "Model updates, training data changes, use case extensions, new data integrations, and volume changes all potentially affect the risk profile of an AI system. The change management process should require a risk register impact assessment before the change is approved.",
            "The change management trigger prevents the most common risk register staleness problem: a system's operational reality has diverged significantly from its risk register entries because changes occurred without risk reassessment.",
          ),
          s(" Make AI risk register impact assessment a mandatory step in the change management approval workflow — changes that do not require risk reassessment should document why (with a brief justification), not skip the step."),
        ],
        [
          s("Board reporting integration: the risk register drives AI governance reporting. "),
          x(
            "Board and risk committee reporting on AI should be driven by the risk register: presenting the distribution of residual risk scores across the portfolio, highlighting any risks above the escalation threshold, reporting on accepted risks and their monitoring status, and summarising incident trends.",
            "Board reports that present AI governance as a series of compliance activities ('we completed DPIAs for X systems') rather than a risk management output ('our residual risk distribution shows Y systems above threshold, with the following mitigation plans') fail to provide the risk intelligence boards need to exercise oversight.",
          ),
          s(" Structure AI risk reports to leadership and board using the risk register as the source — residual risk scores, threshold breaches, and accepted risk status are more decision-useful than compliance activity metrics."),
        ],
      ],
      examples: [
        {
          title: "Insurance group — risk register in incident response",
          body: "An insurance group's AI incident management policy requires that any AI incident classified as Tier 2 or above (customer impact or regulatory attention risk) generates an automatic AI risk register review task assigned to the system's risk owner within 24 hours. The review must be completed and the register updated before the incident can be closed. In a 12-month period, 14 Tier 2+ incidents generated risk register reviews; 9 of these resulted in risk register entry updates (7 likelihood score increases, 4 new risk entries identified by the incident). The integration keeps the register calibrated to operational reality.",
        },
        {
          title: "Retailer — change management risk integration",
          body: "A retailer's AI change management workflow includes a mandatory question: 'Does this change affect the AI system's input data, model version, use case, or decision scope?' YES answers route to a risk register impact assessment form. In the first six months, 23 changes generated impact assessments; 6 required risk entry updates; 2 required new risk entries for risks not previously identified; and 1 change was deferred pending mitigation of a newly identified regulatory compliance risk. The integration prevented a use case extension from being deployed with an unidentified GDPR purpose limitation risk.",
        },
        {
          title: "Risk committee AI reporting — residual risk dashboard",
          body: "A financial services firm's quarterly risk committee AI report presents: a heat map of residual risk scores across the AI portfolio (colour-coded red/amber/green); a table of risks above the escalation threshold with mitigation plan status; a summary of accepted risks and their monitoring performance; and an incident trend chart (number, severity, and category of AI incidents in the quarter). Non-executive committee members consistently rate this as more useful than the prior compliance-activity format. The residual risk distribution view enables board-level AI risk oversight without requiring technical knowledge.",
        },
      ],
    }),
    buildSection({
      number: "6.6",
      title: "AI-Specific Risk Scenarios",
      subtitle: "The ten risk scenarios most likely to materialise in enterprise AI deployments — and how the risk register prepares for them",
      take: "The AI risk landscape has ten high-frequency scenarios that business leaders should expect to encounter. The risk register prepares for these scenarios in advance — not by preventing them entirely, but by ensuring that when they occur, the response is documented, resourced, and executed faster than an ad hoc crisis response.",
      why: "Risk scenarios that are documented in the risk register with defined monitoring metrics and response protocols are manageable. Risk scenarios that materialise without prior documentation become crises — even when the underlying event is the same.",
      paragraphs: [
        [
          s("Scenarios 1–4: model performance, drift, adversarial, and data quality failures. "),
          x(
            "Scenario 1: model performance drops below threshold due to changed input distribution. Scenario 2: model drift from macro-economic or behavioural change produces systematically wrong outputs before monitoring detects it. Scenario 3: adversarial inputs deliberately crafted to cause AI misbehaviour (fraud evasion, content policy bypass). Scenario 4: upstream data pipeline failure causes AI to operate on stale or corrupted inputs.",
            "All four share a common response protocol: detect early via monitoring, isolate the affected system from consequential decision pathways, root cause analyse before remediation, and verify recovery before full operational reinstatement.",
          ),
          s(" Scenarios 1–4 require monitoring metrics, threshold alerts, and isolation protocols established before deployment — the response is faster and better when it follows a documented protocol."),
        ],
        [
          s("Scenarios 5–7: bias discovery, regulatory inquiry, and third-party failure. "),
          x(
            "Scenario 5: bias monitoring identifies discriminatory output patterns, triggering a regulatory investigation. Scenario 6: a regulatory authority initiates an audit of an AI system following a complaint or proactive review. Scenario 7: a third-party AI vendor suffers a data breach, service outage, or compliance failure that affects your operations.",
            "Scenarios 5 and 6 require the full bias incident response and regulatory engagement protocols covered in chapters 3 and 9. Scenario 7 requires a third-party AI failure protocol covered in chapter 7.",
          ),
          s(" Scenarios 5–7 are the most reputationally and financially material — ensure the risk register entries for these scenarios include response protocol references, not just mitigation descriptions."),
        ],
        [
          s("Scenarios 8–10: public AI failure, ethical controversy, and aggregated small failures. "),
          x(
            "Scenario 8: an AI system failure becomes publicly visible — media coverage, social media amplification, or regulatory announcement. Scenario 9: an AI system's outputs generate an ethical controversy — even without technical failure (AI used in a way that stakeholders find unacceptable). Scenario 10: a pattern of small AI failures accumulates into systemic operational degradation that is invisible at the individual failure level.",
            "Scenario 10 is the most insidious: individual AI incidents below escalation thresholds can be systemic when viewed in aggregate. The risk register should include a portfolio-level risk entry for aggregated small failures, with a frequency-based escalation trigger.",
          ),
          s(" Scenarios 8–10 require external communications protocols and stakeholder response plans — not just technical incident response — ensure the risk register cross-references communications governance."),
        ],
      ],
      examples: [
        {
          title: "Scenario 4 in practice — data pipeline failure",
          body: "A retail bank's AI credit model risk register included a documented Scenario 4 entry: data pipeline failure causing stale credit bureau data inputs, with a defined 4-hour data freshness SLA and an automatic fallback to manual credit review on SLA breach. When a data pipeline issue caused 9-hour data staleness, the fallback protocol activated automatically — routing 340 credit applications to human review. No customer impact. The 40-minute remediation and recovery was faster than it would have been without the documented protocol. Risk scenario documentation pays its cost in the first incident.",
        },
        {
          title: "Scenario 10 — aggregated small failures",
          body: "A professional services firm's AI governance dashboard identified a pattern of small AI quality incidents across 8 separate AI tools — each incident individually below escalation threshold but collectively representing 340 customer-impacting errors per quarter. No individual risk register entry had captured the portfolio-level pattern. A quarterly portfolio review introduced an aggregated frequency metric: if total AI quality incidents across all systems exceed 250 per quarter, a portfolio-level risk review is triggered regardless of individual system threshold status. The metric detected a systemic quality management gap that individual system monitoring had missed.",
        },
        {
          title: "Scenario 9 — ethical controversy without technical failure",
          body: "A financial services firm used an AI tool to prioritise customer service responses, resulting in faster responses to customers with higher account balances — technically performant, within the system's documented intended use, but generating significant social media criticism when a journalist highlighted the differential response times. The risk register had no reputational risk entry for the ethical implications of differential service. Post-incident: a reputational risk entry was added to all AI systems with customer-facing service implications, requiring an ethical impact assessment as part of the pre-deployment gate.",
        },
      ],
    }),
    buildSection({
      number: "6.7",
      title: "AI Risk Register for Different Functions",
      subtitle: "How risk register requirements differ for HR, Finance, Operations, and Technology-led AI deployments",
      take: "The AI risk register has function-specific dimensions: HR AI carries discrimination and employment law risk; Finance AI carries financial regulation and credit risk; Operations AI carries safety, supply chain, and efficiency risk. Function leaders must own the risk register for AI in their domain — not delegate it to a central governance team that lacks the functional context.",
      why: "A central governance team can design the risk register framework, but only function leaders have the knowledge to assess HR discrimination risk, credit regulatory risk, or operational safety risk with the accuracy those assessments require.",
      paragraphs: [
        [
          s("HR AI risk register priorities: discrimination, employment law, and privacy. "),
          x(
            "HR AI risk register must prioritise: disparate impact risk across all protected characteristics; EU AI Act Annex III employment AI classification and obligations; GDPR obligations for employee personal data processing; right to explanation for AI-influenced employment decisions; and potential for feedback loops that amplify existing workforce diversity gaps.",
            "HR leaders commissioning AI risk registers for HR AI should require algorithmic fairness specialists to contribute to the bias and discrimination risk entries — generalist risk teams do not have the employment law and bias testing expertise to assess these risks accurately.",
          ),
          s(" HR AI risk registers require specialist input: employment law expertise for discrimination risk entries and algorithmic fairness expertise for bias risk entries — generalist risk assessment is insufficient."),
        ],
        [
          s("Finance AI risk register priorities: regulatory compliance, explainability, and systemic risk. "),
          x(
            "Finance AI (credit, pricing, trading, financial reporting) risk register priorities: specific sector regulatory compliance (FCA, PRA, EBA, CFPB as applicable); explainability requirements for credit and insurance decisions; systemic risk from AI interactions in trading or market-making contexts; and model validation requirements under SR 11-7 or equivalent.",
            "Finance AI carries both individual customer impact risk and systemic market risk — the latter requiring risk register entries that address the AI's behaviour in stress scenarios, not just normal operating conditions.",
          ),
          s(" Finance AI risk registers must include stress scenario risk entries — AI behaviour in market stress, data shock, and extreme input conditions is a material risk category not covered by normal performance monitoring."),
        ],
        [
          s("Operations AI risk register priorities: safety, reliability, and supply chain dependencies. "),
          x(
            "Operations AI (manufacturing, logistics, predictive maintenance, quality control) risk register priorities: safety risk from AI misclassification in safety-critical processes; single-point-of-failure risk from over-reliance on AI in critical operational pathways; supply chain disruption scenarios where AI optimisation creates fragility; and data availability risk in environments where connectivity may be interrupted.",
            "Operations AI incidents tend to be physical rather than regulatory — equipment failure, production loss, safety incident — with different risk impact units than HR or Finance AI. Operations risk register impact scoring should include physical safety impact and production loss metrics alongside financial metrics.",
          ),
          s(" Operations AI risk registers require physical safety and production continuity impact categories — financial impact alone does not capture the full consequence of operations AI failure."),
        ],
      ],
      examples: [
        {
          title: "CHRO-owned HR AI risk register",
          body: "A retail group's CHRO owns the AI risk register for all HR AI tools (3 systems: recruitment AI, scheduling AI, performance AI). The CHRO receives a quarterly risk register summary from the HR data team, reviews residual risk scores with the HR Director and General Counsel, and signs off on any risk acceptance decisions above residual score 6. The risk register includes an entry completed by external employment law counsel covering the discrimination risk profile for each system, updated annually with any relevant EEOC or EHRC guidance changes. Function ownership with specialist input produces risk register entries that are both technically accurate and legally informed.",
        },
        {
          title: "Trading firm — stress scenario AI risk register",
          body: "A trading firm's AI risk register for its algorithmic execution systems includes specific stress scenario entries: market liquidity stress (volume 10× normal), data feed failure (fallback to delayed data), circuit breaker events (AI behaviour at exchange halts), and flash crash conditions (AI response to extreme price movements). Each stress scenario entry includes: expected AI behaviour, acceptable deviation from normal behaviour, monitoring metric to detect stress, and protocol to halt AI trading and switch to human execution. The stress scenario entries were developed with the Risk Management team and reviewed by the FCA as part of algorithmic trading governance.",
        },
        {
          title: "Manufacturer — physical safety in AI risk register",
          body: "A manufacturer's AI risk register for its quality control AI includes a physical safety risk entry with impact scale anchored to: Impact 5 = undetected critical defect causing product safety incident, including personal injury; Impact 4 = systematic defect detection failure causing product recall; Impact 3 = quality degradation below customer specification causing contract penalty. The physical safety impact category is separate from financial impact, with a zero-tolerance acceptance policy: any AI quality control risk with physical safety impact score above 2 requires immediate additional human inspection overlay, regardless of frequency score.",
        },
      ],
    }),
    buildSection({
      number: "6.8",
      title: "Reporting AI Risk to Leadership",
      subtitle: "How to present AI risk register findings to executives and boards — in terms that drive decisions",
      take: "AI risk reports to leadership must be designed for decision-making, not compliance demonstration. A risk committee that cannot answer 'what is our highest AI risk right now, and what are we doing about it?' after receiving an AI risk report has received the wrong report.",
      why: "Most AI risk reports to leadership present activity metrics (DPIAs completed, audits conducted, policies updated) rather than risk outcomes (residual risk scores, threshold breaches, accepted risk status). Activity metrics demonstrate compliance process; risk outcome metrics demonstrate governance effectiveness.",
      paragraphs: [
        [
          s("The leadership AI risk report has four required elements. "),
          x(
            "First: portfolio risk summary — total AI systems by tier and residual risk distribution (how many at each residual risk level). Second: risk threshold status — which systems have residual risk scores above the escalation threshold and what mitigation plans are in place. Third: accepted risk status — what risks are currently accepted and whether their monitoring metrics show the acceptance remains appropriate.",
            "Fourth: incident trend — how many AI incidents in the period, by severity and category, and what systemic patterns if any. The four elements give leadership a complete risk view without requiring them to read individual risk register entries.",
          ),
          s(" Design leadership AI risk reports around the four-element structure — portfolio view, threshold status, accepted risk status, and incident trend — rather than activity metrics."),
        ],
        [
          s("Visualisation makes risk register data decision-usable. "),
          x(
            "A heat map of AI systems on a likelihood-impact grid — colour-coded by residual risk score — communicates the risk portfolio more effectively than a table of risk register entries. A trend chart showing residual risk score changes over four quarters communicates whether governance is improving risks or whether risks are increasing. A RAG status for each accepted risk (green = monitoring within expected range, amber = monitoring approaching threshold, red = monitoring above threshold) communicates accepted risk status at a glance.",
            "Leadership teams that receive visual risk dashboards ask more substantive questions about AI risk than those receiving text-format risk reports. Visual design is a governance communication decision, not an aesthetic choice.",
          ),
          s(" Invest in visual risk dashboard design — decision quality in leadership AI risk reviews improves when the risk data is presented visually rather than in text tables."),
        ],
        [
          s("The escalation conversation: how to present risks requiring leadership decision. "),
          x(
            "When a risk register entry requires a leadership decision — risk acceptance, resource for remediation, or strategic change — the presentation should cover: specific risk and residual score, options for addressing the risk (full mitigation, partial mitigation, acceptance), cost and timeline for each option, and a recommended option with reasoning.",
            "Presenting AI risk to leadership as information rather than decisions to be made wastes leadership attention and creates governance drift — risks that are presented for awareness rather than decision tend to remain unaddressed.",
          ),
          s(" Present AI risk items requiring leadership action as decision options with costs, timelines, and a recommendation — not as information items awaiting a future decision."),
        ],
      ],
      examples: [
        {
          title: "Risk committee dashboard — heat map format",
          body: "A financial services firm's risk committee receives a quarterly AI risk dashboard: a 5×5 likelihood-impact heat map showing all 34 AI systems as dots, colour-coded by tier. Four systems sit in the high-residual zone (red). Each red system has a one-paragraph summary immediately below the heat map: system name, specific risk, current mitigation, target residual score, and timeline to reach target. Committee members consistently identify the heat map as the most useful risk communication tool in the quarterly pack. Visual risk presentation drives more substantive governance discussion than text-format risk reports.",
        },
        {
          title: "Escalation decision — risk acceptance with options",
          body: "A healthcare group's AI governance lead presented a risk acceptance decision to the CEO and General Counsel for a clinical AI system with a residual regulatory compliance risk of 12 (above the 10 threshold). Options presented: (1) delay deployment by 4 months for full regulatory compliance documentation — cost £180K, no deployment until September; (2) proceed with enhanced human review overlay and monthly compliance monitoring — cost £40K, deployment March, risk score reduced to 9; (3) withdraw from this AI deployment and maintain manual process — cost £0, foregone efficiency saving £600K/year. Recommendation: Option 2. Decision made in 20 minutes with full understanding of the specific risk. Risk presented as decision options produces faster, better-informed leadership decisions.",
        },
        {
          title: "Board AI risk reporting — establishing the habit",
          body: "A FTSE 250 board's risk committee had not received AI-specific risk reporting before 2025. The governance team introduced a standing quarterly AI risk summary: a one-page portfolio overview, two escalation items from the current quarter, and one incident summary. By Q3 2025, three non-executive directors were regularly asking substantive follow-up questions about AI risk — driving board-level conversations about AI governance investment that had not previously occurred. Establishing the reporting habit takes 2–3 quarters before boards develop the context to ask substantive questions.",
        },
      ],
    }),
  ],
  quiz: [
    {
      q: "Your AI fraud detection model has been running in production for 14 months without retraining. Customer complaint rates about incorrect fraud flags have increased 35% in the last quarter. What AI risk category best describes this situation and what is the correct response?",
      options: [
        "Technical failure risk — the model has a bug. Escalate to IT for bug fix.",
        "Model drift risk — input distribution has changed since training, causing performance degradation. Initiate a root cause analysis, implement enhanced human review for flagged transactions, and schedule emergency retraining with recent transaction data.",
        "Data quality risk — the input data is corrupted. Check data pipeline integrity.",
        "Reputational risk — customer complaints require communications response first.",
      ],
      correct: 1,
      correctFeedback:
        "Right. 14 months without retraining combined with increased false positive rates is a model drift pattern. The response is root cause analysis, human review overlay while drift is confirmed, and retraining — not bug investigation. Re-read sections 6.1 and 6.2.",
      wrongFeedback:
        "Increasing complaint rates without code changes after 14 months of operation is the classic model drift pattern — changing input distribution degrading performance silently. This is a model drift risk, not a technical bug. Re-read sections 6.1 and 6.2.",
    },
    {
      kind: "order",
      q: "Order the six AI risk categories from most foundational (first) to most organisation-specific (last).",
      prompt: "Drag to arrange in the order they should be assessed when building an AI risk register entry.",
      items: [
        "Technical and model risk: performance, drift, robustness, reliability",
        "Data risk: training data quality, pipeline failures, data governance",
        "Bias and discrimination risk: protected characteristic impacts, proxy variables",
        "Regulatory and compliance risk: GDPR, EU AI Act, sector regulations",
        "Third-party and supply chain risk: vendor failure, API dependencies",
        "Reputational and ethical risk: public perception, ethical controversy",
      ],
      correctFeedback:
        "Right. Technical first (the system must work before other risks are relevant), then data (garbage in, garbage out), then bias (discrimination is both ethical and legal), then regulatory (legal compliance), then third-party (dependency exposure), then reputational (the external manifestation of internal failures). Re-read section 6.2.",
      wrongFeedback:
        "Assess technical risk first — a system that does not function cannot be assessed for bias or regulatory compliance meaningfully. Data risk second — all AI quality flows from training data. Bias and regulatory follow, then third-party and reputational. Re-read section 6.2.",
    },
    {
      kind: "categorize",
      q: "Classify each AI risk management action into the correct governance integration point.",
      categories: ["Pre-Deployment Gate", "Incident Management", "Change Management", "Board Reporting"],
      items: [
        { text: "A risk register review triggered within 48 hours after a bias monitoring alert exceeds the policy threshold.", category: 1 },
        { text: "Residual risk score assessment required before an AI system is approved for production deployment.", category: 0 },
        { text: "A risk register impact assessment form completed before a model update is deployed to production.", category: 2 },
        { text: "A quarterly heat map showing all AI systems' likelihood-impact positions presented to the risk committee.", category: 3 },
        { text: "Risk acceptance documentation signed by the CFO for an AI system with open residual risk entries at deployment.", category: 0 },
        { text: "An AI incident trend chart showing severity and category distribution over four quarters.", category: 3 },
      ],
      correctFeedback:
        "Right. Pre-deployment gate: risk assessment and acceptance before go-live. Incident management: risk register updates triggered by incidents. Change management: risk assessment before system changes. Board reporting: portfolio risk views and trend analysis. Re-read sections 6.3 and 6.5.",
      wrongFeedback:
        "Pre-deployment gate catches risks before go-live. Incident management updates the register when incidents provide new risk information. Change management prevents changes from introducing undocumented risks. Board reporting communicates risk status for governance oversight. Re-read sections 6.3 and 6.5.",
    },
    {
      q: "Your AI risk register shows residual risk score 14 for a regulatory compliance risk in an AI credit system. Your defined escalation threshold is 10. The business team wants to proceed with deployment to meet a commercial launch date. What is the correct governance response?",
      options: [
        "Proceed — the commercial launch date creates a business necessity exception.",
        "The residual risk score is above the escalation threshold — this requires executive sign-off on a documented risk acceptance decision, including specific risk description, compensating controls, monitoring metrics, and the authority level required for this acceptance. No deployment without that sign-off.",
        "Reduce the residual score by adding a generic monitoring control and proceed.",
        "Request legal counsel to confirm the risk is acceptable before proceeding.",
      ],
      correct: 1,
      correctFeedback:
        "Right. A residual risk score above the escalation threshold requires documented risk acceptance at the defined authority level — not a commercial exception. The acceptance document must be completed with full specificity before deployment. Re-read section 6.4.",
      wrongFeedback:
        "Commercial pressure does not override the risk acceptance authority process. A score of 14 above the 10 threshold requires documented executive sign-off with specific risk description, compensating controls, and monitoring commitment — not an expedited exception. Re-read section 6.4.",
    },
    {
      q: "A quarterly review shows that AI incidents across eight separate AI tools — each individually below the escalation threshold — total 340 customer-impacting errors in the quarter. No individual system triggers an escalation. What governance gap does this reveal?",
      options: [
        "No gap — individual system thresholds were all met, so governance is working.",
        "The risk register has no portfolio-level aggregated frequency metric. Individual system thresholds can be met while systemic quality management failures accumulate across the portfolio. A portfolio-level escalation trigger for total AI incident frequency is required.",
        "The escalation thresholds for individual systems are set too high — lower them.",
        "The 340 incidents should be disclosed in the quarterly board report without further escalation.",
      ],
      correct: 1,
      correctFeedback:
        "Right. Individual system thresholds miss portfolio-level patterns. A portfolio-level frequency trigger — total incidents above X per quarter triggers a portfolio review — is required to detect systemic quality management gaps invisible at the individual system level. Re-read section 6.6.",
      wrongFeedback:
        "Meeting individual system thresholds is not evidence of portfolio-level governance health. 340 customer-impacting errors per quarter across 8 systems represents a systemic pattern that requires a portfolio-level escalation trigger. Re-read section 6.6.",
    },
    {
      kind: "order",
      q: "Order the four elements of a leadership AI risk report from most portfolio-level (first) to most action-requiring (last).",
      prompt: "Drag to arrange from broadest portfolio view (top) to specific decision items (bottom).",
      items: [
        "Portfolio risk summary: total systems by tier and residual risk distribution",
        "Risk threshold status: systems above escalation threshold with mitigation plan status",
        "Accepted risk status: current accepted risks and monitoring performance",
        "Incident trend: frequency, severity, and category with systemic patterns",
      ],
      correctFeedback:
        "Right. Portfolio view first (context), then threshold status (alert items), then accepted risk monitoring (ongoing commitments), then incident trend (operational learning). The order moves from strategic context to operational action requirements. Re-read section 6.8.",
      wrongFeedback:
        "Leadership reports should progress from broad portfolio context to specific action items. Portfolio view gives context; threshold status identifies what needs attention; accepted risk monitoring confirms commitments are being honoured; incident trend identifies systemic patterns. Re-read section 6.8.",
    },
  ],
});
