import { buildChapter, buildSection, s, x, sectionWithDiagram } from "../concepts-bl-helpers";

export const chapter05BlAiRoadmapNonTechnical = buildChapter({
  slug: "bl-ai-roadmap-non-technical",
  number: 5,
  shortTitle: "AI Roadmap (Non-Technical)",
  title: "The AI Roadmap for Business Leaders — Owning the Plan Without Owning the Code",
  readingMinutes: 20,
  summary:
    "An AI roadmap is not a technology project plan — it is a sequenced business commitment that connects AI investment to business outcomes over a defined time horizon. Business leaders who own their AI roadmap are more credible with boards, more effective with technology partners, and more successful at delivering value than those who delegate roadmap ownership to technical teams.",
  keyTakeaway:
    "AI roadmaps differ from software roadmaps in four critical ways: they require data foundations before they require features, they must be governed by outcomes not deliverables, they fail at the change management layer more often than the technology layer, and they demand quarterly review rather than annual refresh. Own the outcomes; let the technology team own the implementation.",
  pmCallout:
    "As a business leader: your job is to own the roadmap's business logic — the sequence of bets, the outcome gates, the dependency order, and the board narrative. The technology team owns the technical delivery. That division of labour is how AI roadmaps succeed.",
  sections: [
    sectionWithDiagram({
      number: "5.1",
      title: "Why AI Roadmaps Are Different from Software Roadmaps",
      subtitle: "The four differences that change how you plan",
      take: "Software roadmaps sequence features. AI roadmaps sequence capability bets — and capability bets depend on data foundations, model performance, and human adoption in ways that feature delivery does not. A business leader who treats an AI roadmap as a feature list will be consistently surprised by why things are not where they were scheduled to be.",
      why: "Leaders who understand the specific differences between software and AI roadmaps build roadmaps that work. Leaders who import conventional roadmap assumptions into AI produce plans that are credible on paper and undeliverable in practice.",
      paragraphs: [
        [
          s("Feature delivery is deterministic; AI capability development is probabilistic. "),
          x(
            "When you schedule a software feature for Q3, engineering builds it and ships it — the outcome is binary. When you schedule an AI capability for Q3, the model must reach a performance threshold on your specific data, the integration must work with your specific systems, and the team must adopt the change. Any of those can be partially met without producing the business outcome.",
            "The planning implication: AI roadmap milestones must be defined as performance thresholds or adoption targets, not as deployment dates. 'AI deployed in Q3' is a delivery milestone; 'AI reducing document processing time by 40% by Q3' is a business milestone. The latter is what the roadmap should contain.",
          ),
          s(" Define roadmap milestones as business outcomes, not technology deployments."),
        ],
        [
          s("Software needs infrastructure; AI needs data foundations. "),
          x(
            "Infrastructure is typically available before a feature project starts. Data foundations — structured, governed, labelled, accessible data at the quality required for AI — are frequently the critical path item that determines when AI can start producing value, not when it can be deployed.",
            "AI roadmaps that do not explicitly schedule data foundation work consistently produce AI deployments that perform poorly in production because the data quality expected in the business case was not what the production environment delivered.",
          ),
          s(" Data foundation work belongs on the roadmap as explicitly as the AI initiative it enables."),
        ],
        [
          s("Software fails at the technical layer; AI often fails at the change layer. "),
          x(
            "A software feature that does not work produces an error. An AI capability that is not trusted or not adopted produces zero business outcome — with no error to diagnose. The failure mode is invisible: the system is operational, the model is performing, and the ROI is not materialising.",
            "AI roadmaps require change management milestones — adoption targets, trust indicators, workflow redesign checkpoints — alongside technical milestones. Roadmaps without change management milestones cannot detect the most common AI failure mode before the post-mortem.",
          ),
          s(" Change management milestones are technical roadmap elements — not a separate workstream."),
        ],
        [
          s("Software roadmaps tolerate annual reviews; AI roadmaps require quarterly ones. "),
          x(
            "Software features do not change what they do between planning and delivery. AI models are retrained, vendors update their APIs, regulatory guidance evolves, and competitive conditions shift — all on timescales shorter than an annual review cycle.",
            "An AI roadmap reviewed annually will be systematically misaligned with reality by the time the review happens. Quarterly reviews are not bureaucracy — they are the mechanism that keeps a probabilistic plan aligned with a changing environment.",
          ),
          s(" Build quarterly review into the roadmap governance from day one — not as a response to problems."),
        ],
      ],
      examples: [
        {
          title: "A bank — outcome milestone vs. deployment milestone",
          body: "A bank's first AI roadmap scheduled AI credit pre-screening 'deployment' for Q2. Deployment occurred in Q2 — and produced no measurable change in processing time or decision quality by Q4. The roadmap had tracked deployment, not outcome. The following year's roadmap included milestone: 'AI pre-screening achieving 30% reduction in average processing time with 95% human reviewer acceptance rate by Q2.' The outcome milestone made visible the adoption problem that the deployment milestone had concealed.",
        },
        {
          title: "A manufacturer — data foundation on the roadmap",
          body: "A manufacturer's AI predictive maintenance roadmap initially showed: Q1 vendor selection, Q2 pilot, Q3 full deployment. A revised roadmap that accounted for data foundations showed: Q1 sensor data standardisation, Q2 data quality audit and remediation, Q3 vendor selection and pilot design, Q4 limited pilot. The revised timeline was longer — and accurate. The original timeline was shorter — and wrong.",
        },
        {
          title: "A retailer — change management milestone prevents silent failure",
          body: "A retailer's AI personalisation roadmap included a change management milestone: 'Buying team using AI product recommendations in >70% of weekly range reviews by month 4 post-deployment.' When the milestone was missed at month 4 (actual: 28% usage), the roadmap governance triggered an adoption intervention — workflow redesign and training — before the ROI assessment at month 6. Without the change management milestone, the adoption problem would not have been diagnosed until the ROI review, three months after the intervention window.",
        },
      ],
    }, {
      kind: "diagram",
      id: "bl-ai-transformation",
      type: "flow",
      title: "AI Initiative Execution Path",
      caption:
        "Assess → prioritise → pilot → scale → embed. The sequence that turns AI ambition into measurable outcomes.",
    }),
    sectionWithDiagram({
      number: "5.2",
      title: "The Initiative Lifecycle",
      subtitle: "The phases every AI initiative goes through — and where each one can fail",
      take: "Every AI initiative moves through six phases: problem definition, data assessment, design and build, pilot, production deployment, and steady-state operation. Each phase has distinct activities, success criteria, and failure modes. Business leaders who understand the lifecycle can identify which phase an initiative is in, whether it is progressing normally, and what intervention is required when it stalls.",
      why: "Business leaders who treat all AI progress as a binary (in progress / complete) cannot distinguish between an initiative that is on the normal learning curve and one that has stalled in a failure mode. The lifecycle provides the diagnostic framework.",
      paragraphs: [
        [
          s("Problem definition and data assessment are the phases most often skipped. "),
          x(
            "Technology teams eager to build move quickly from 'we have an idea' to 'we are building'. The two phases that determine whether the build will succeed — rigorous problem definition and honest data assessment — are less exciting and less billable, so they shrink.",
            "Business leaders who insist on completion of these two phases before build begins are not slowing the programme — they are preventing the most common programme failure: a technically functioning AI system that addresses the wrong problem or runs on inadequate data.",
          ),
          s(" Gate build approval on completion of problem definition and data assessment — not on vendor selection."),
        ],
        [
          s("The pilot phase is the most mismanaged part of the lifecycle. "),
          x(
            "Pilots are diagnostic exercises — designed to test a hypothesis about AI performance and adoption at limited scale before full investment. They are frequently run as mini-deployments — designed to succeed rather than to learn. A pilot that is designed to demonstrate success rather than test hypotheses produces results that look good and generalisations that do not hold at scale.",
            "A well-designed pilot specifies: the hypothesis being tested, the evidence required to confirm or reject it, the population on which it runs, the duration, and the decision criteria at the end. A pilot that does not make a clear recommendation (proceed, redesign, stop) has not been designed as a diagnostic.",
          ),
          s(" Design pilots to test hypotheses, not to demonstrate capabilities — they serve very different purposes."),
        ],
        [
          s("Steady-state operation is the phase that most AI roadmaps ignore. "),
          x(
            "AI systems in production require ongoing management: model performance monitoring, retraining triggers, governance review, user feedback integration, and vendor relationship management. These activities require a named owner, a defined cadence, and a budget allocation.",
            "AI roadmaps that end at 'deployment' have not planned for steady-state. The result is models that drift undetected, governance reviews that never happen, and user feedback that is collected but not acted on. Build steady-state into every initiative plan from the beginning — including the headcount and budget required.",
          ),
          s(" Steady-state is a programme phase, not a post-programme condition — plan it before deployment."),
        ],
      ],
      examples: [
        {
          title: "A financial services group — problem definition gate",
          body: "A financial services group introduced a mandatory problem definition gate before any AI initiative could enter the build phase. The gate required: a specific problem statement with a measurable success condition, a data assessment report confirming data availability and quality, and an executive sponsor sign-off that the problem statement matched a stated business priority. In the first year, five initiatives were gated at problem definition — all five had data availability issues that would have produced failed pilots. The gate cost two to three weeks per initiative; the prevented failures would have cost an average of six months each.",
        },
        {
          title: "A retailer — hypothesis-based pilot",
          body: "A retailer ran an AI demand forecasting pilot with three explicit hypotheses: that the AI would outperform existing statistical models on fashion category lines, that the buying team would accept AI recommendations in >60% of cases, and that the change would reduce markdown rates. Each hypothesis had a test design and a specific evidence threshold. Hypothesis one was confirmed (AI outperformed statistical models by 18% on fashion lines); hypothesis two was rejected (buyer acceptance at 32%); hypothesis three could not be measured in the pilot window. Decision: proceed with redesigned change management before scale-up. The hypothesis structure made the decision clear.",
        },
        {
          title: "A bank — steady-state planning prevents drift",
          body: "A bank's AI fraud detection model was assigned a named model owner responsible for: monthly performance review against the evaluation benchmark, quarterly retraining trigger assessment, annual governance review, and continuous monitoring alert management. The model owner was a role in the operations team, budgeted as part of the programme from deployment. When fraud pattern changes caused accuracy to drop from 94% to 88% in month 14, the model owner identified it within the monthly review cycle and triggered retraining within three weeks. Without the steady-state role, the degradation would have persisted until a business impact was noticed — typically three to six months later.",
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
      title: "Gating on Outcomes, Not Deliverables",
      subtitle: "The governance principle that keeps your roadmap honest",
      take: "AI roadmap gates should be crossed when a business outcome condition is met, not when a deliverable is submitted. 'Model trained' is a deliverable. 'Model achieving 92% accuracy on holdout set' is an outcome condition. 'Pilot deployed' is a deliverable. 'Pilot demonstrating 15% reduction in processing time with >70% team adoption' is an outcome condition. Gates that require outcomes prevent progress without value.",
      why: "Deliverable-based gates are easily met without evidence of value. Outcome-based gates are met only when the investment is producing what it was intended to produce. The discipline of outcome gating is the single most powerful roadmap governance mechanism available to business leaders.",
      paragraphs: [
        [
          s("Define gate conditions before the phase begins, not when it ends. "),
          x(
            "Gate conditions defined at the beginning of a phase reflect what success looks like before investment is made. Gate conditions defined at the end of a phase reflect what the team achieved — which is subject to post-hoc rationalisation. The investment committee that allows the team to define the gate at the end of the phase is not governing; it is rubber-stamping.",
            "Gate conditions should be specific, measurable, time-bounded, and agreed by the business leader, the technology lead, and the finance owner before the phase commences. Disagreements about gate conditions that surface at the gate review should have been surfaced at the gate definition.",
          ),
          s(" Gate conditions are pre-committed decisions — they cannot be negotiated post-hoc at the review."),
        ],
        [
          s("Outcome gates have three possible results: proceed, redesign, or stop. "),
          x(
            "'Proceed' means the outcome condition is met and the investment in the next phase is approved. 'Redesign' means the outcome condition is partially met — the technical performance is there but adoption is not, or vice versa — and the next phase design must be adjusted before proceeding. 'Stop' means the outcome condition is not met and the evidence suggests it will not be met on the planned approach.",
            "A gate process that always produces 'proceed' is not a gate — it is a ceremony. The value of outcome gating is precisely in producing 'redesign' and 'stop' decisions before more budget is committed. Leaders who create conditions where 'stop' is career-limiting destroy the value of the gate.",
          ),
          s(" A gate that can only produce 'proceed' is not a governance mechanism — it is approval theatre."),
        ],
        [
          s("Build the gate review artefact before the review meeting. "),
          x(
            "Gate reviews that are briefed in the meeting room and decided in the same session produce worse outcomes than reviews with a pre-read artefact distributed 48 hours in advance. The pre-read should contain: outcome condition status with evidence, variance from plan with root cause, recommendation (proceed/redesign/stop) with rationale, and resource implication of each option.",
            "A gate review conducted without a pre-read is a conversation. A gate review conducted with a well-structured pre-read is a decision. Business leaders who receive the pre-read and arrive with questions — not blank slates — conduct more effective reviews.",
          ),
          s(" The pre-read artefact is not bureaucracy — it is the evidence base that makes the gate a decision, not a conversation."),
        ],
      ],
      examples: [
        {
          title: "An insurer — outcome gate prevents a failed scale-up",
          body: "An insurer's AI claims triage pilot gate required: accuracy >90% on standard claim types, assessor acceptance >65% of AI recommendations without modification, and zero adverse regulatory findings from a compliance review. The pilot met the first condition (92% accuracy), missed the second (48% acceptance), and met the third. Gate result: redesign — change management programme required before scale-up. A deliverable-based gate ('pilot completed') would have proceeded to scale-up with the adoption problem intact.",
        },
        {
          title: "A bank — stop decision from gate review",
          body: "A bank's AI customer churn prediction pilot gate required: lift over baseline model >20%, operational team integration into daily workflow, and business unit sponsor confirmation that the insight was actionable within current processes. The model showed 8% lift over baseline — insufficient. Gate result: stop. The investment committee was initially surprised by the stop recommendation — no previous AI pilot had produced one. The CDO reinforced: 'Stop at the gate is a success — it is less expensive than proceeding to a deployment that does not work.'",
        },
        {
          title: "A manufacturer — pre-read culture change",
          body: "A manufacturer's AI steering committee introduced a mandatory 48-hour pre-read requirement for all gate reviews. In the first cycle, pre-reads were submitted within the window but were not read by all committee members. The CDO closed the gate review after 20 minutes: 'This conversation demonstrates that the pre-read was not used as intended. We will reconvene when the committee has reviewed the evidence.' One cancelled review session produced a lasting change in pre-read culture.",
        },
      ],
    }),
    buildSection({
      number: "5.4",
      title: "The Dependency Hierarchy in Roadmap Sequencing",
      subtitle: "Data before models, models before applications, applications before scale",
      take: "AI roadmaps have a natural dependency hierarchy that cannot be reordered without creating downstream failure. Data quality and governance precede model development. Model performance precedes production integration. Production integration precedes organisation-wide scale-up. Leaders who try to run these phases in parallel consistently discover the downstream dependency the hard way — mid-programme.",
      why: "The dependency hierarchy is not a constraint that slows the roadmap — it is the sequence that ensures each phase builds on validated foundations. Violations of the hierarchy produce rework that costs more than the time saved by running in parallel.",
      paragraphs: [
        [
          s("Data before models is the most frequently violated dependency. "),
          x(
            "Model development started before data quality is confirmed consistently produces a model that performs acceptably on the available data and fails in production where data quality is different. The time invested in training the model is not wasted — but the rework when production performance does not match pilot performance is expensive.",
            "The discipline: no model development starts before a data quality assessment report confirms that production data quality meets the requirements specified in the use case brief. This is a gate condition — not a parallel workstream.",
          ),
          s(" No model training before data quality is confirmed in the production environment."),
        ],
        [
          s("Models before applications protects integration investment. "),
          x(
            "Integration engineering that is started before model performance is confirmed is engineering against a moving target. If the model requires architectural changes to meet the performance threshold — different input features, different output format, different inference latency — integration work built against the pre-change model must be partially redone.",
            "The practical rule: model architecture and performance must be confirmed on production-representative data before integration engineering commences. 'Production-representative' means data from the actual production systems, not cleaned sample data.",
          ),
          s(" Confirm model architecture on production-representative data before committing integration engineering budget."),
        ],
        [
          s("Applications before scale-up is the dependency that most organisations respect. "),
          x(
            "Scale-up of an AI system that has not been validated in production at limited scale is the highest-risk step in the roadmap. Production at limited scale reveals: real user behaviour, real exception rates, real integration failures, and real governance requirements that testing and piloting could not simulate.",
            "The scale-up gate is the most important in the roadmap. It should require evidence from limited production at a defined volume threshold — not from a pilot environment with curated conditions. The evidence is about real-world performance, not test-set performance.",
          ),
          s(" The scale-up gate requires production evidence, not pilot evidence — they are different environments."),
        ],
      ],
      examples: [
        {
          title: "A logistics company — data dependency violated",
          body: "A logistics company started AI route optimisation model development before completing a data quality audit. Six weeks into development, the data science team discovered that GPS telematics data from 30% of the fleet was recorded at insufficient resolution for the model's route optimisation feature. The model required architectural changes. Four weeks of integration engineering, started in parallel, was partially invalidated. Total rework cost: 8 weeks of combined engineering time. A data quality gate before model development would have cost 2 weeks.",
        },
        {
          title: "A bank — integration started too early",
          body: "A bank's AI credit risk model was in development when the integration team was instructed to begin CRM integration in parallel to save time. The model's output format changed twice during development — from a binary score to a multi-factor recommendation set. Each change required integration rework. The parallel approach cost 3 months of integration engineering time to produce what 6 weeks of sequential work would have achieved. The model's business case assumed sequential sequencing; the programme manager changed it to parallel to accelerate — and produced the opposite outcome.",
        },
        {
          title: "A retailer — scale-up gate prevents a public failure",
          body: "A retailer's AI pricing personalisation system passed the pilot gate on test data. The scale-up gate required evidence from a limited production deployment covering 5% of active customers for 4 weeks. During limited production, a pricing logic error — not visible in the pilot environment — applied promotional discounts to full-price items for a specific customer segment. The error affected 12,000 customers and cost £45K in margin. Caught at the scale-up gate, it was resolved before full deployment. At full scale, the same error would have affected 240,000 customers and cost £900K.",
        },
      ],
    }),
    buildSection({
      number: "5.5",
      title: "Communicating Roadmaps to Board and Executive Audiences",
      subtitle: "What the board needs to see — and what it does not",
      take: "Board and executive audiences need three things from an AI roadmap: strategic context (why AI, why now, why these investments), outcome visibility (what value is expected, when, and how will we know), and risk transparency (what could go wrong and what is the contingency). They do not need technology architecture, model accuracy metrics, or vendor comparison tables.",
      why: "AI roadmap presentations that lead with technology lose financial and governance audiences before the investment decision is reached. Presentations that lead with strategic context and business outcomes earn the attention and confidence needed for the subsequent resource conversation.",
      paragraphs: [
        [
          s("The strategic context is the 'why' that earns the attention for the 'what'. "),
          x(
            "Board members assess AI investment against their understanding of competitive dynamics, regulatory environment, and the organisation's strategic priorities. A roadmap that opens with initiative details without connecting them to these board-level concerns loses the audience before the numbers appear.",
            "Strategic context in two minutes: what competitive or operational pressure is AI addressing, how does this programme connect to the stated strategic plan, and what happens if we do not invest at this pace and scale. This context earns the board's attention for the portfolio details that follow.",
          ),
          s(" Open with strategic context; earn the attention for the portfolio details."),
        ],
        [
          s("Outcome visibility must be specific and time-bounded. "),
          x(
            "'We expect significant value from our AI programme over the next three years' is not outcome visibility — it is aspiration. '£4.2M expected cumulative value over 36 months, with £1.1M delivered in the first 12 months from the four initiatives currently in production, and £3.1M expected from the five initiatives in the pipeline' is outcome visibility.",
            "Board members who approve AI investment budgets are entitled to specific expected outcomes. Boards that accept vague value language without challenging it are not governing the investment. Business leaders who present specific outcome forecasts — with ranges and conditions — are treating the board as the accountability partner it should be.",
          ),
          s(" Specific numbers with ranges and conditions are more credible than precise single-point estimates."),
        ],
        [
          s("Risk transparency builds more confidence than risk minimisation. "),
          x(
            "AI programmes have genuine execution risks: data quality failures, model performance below threshold, adoption challenges, vendor changes, and regulatory evolution. A roadmap presentation that minimises these risks tells the board that the programme manager either does not see the risks or does not trust the board with them. Both impressions undermine confidence.",
            "Risk transparency in the board presentation: name the three most material risks, describe the mitigation, and state the contingency if the mitigation fails. This demonstrates programme maturity — and earns the trust that supports continued investment when risks materialise, as they will.",
          ),
          s(" Risk transparency earns more board confidence than risk minimisation."),
        ],
      ],
      examples: [
        {
          title: "A financial services group — strategic context that converted a sceptic",
          body: "A financial services group's AI roadmap presentation had been received with scepticism for two consecutive quarters. The CDO redesigned the opening: 'Our two primary competitors have deployed AI to halve their mortgage processing time. We process mortgages in 8 days; they process them in 4. Customer satisfaction surveys show processing speed as a top-three decision factor for 38% of applicants. This roadmap closes that gap in 18 months.' The board approved the accelerated investment in the same session. The strategic context — competitor benchmarking against a stated customer priority — earned the attention that technology descriptions had not.",
        },
        {
          title: "An insurer — specific outcomes with conditions",
          body: "An insurer's AI governance committee presented outcome forecasts with explicit conditions: 'We expect £6.8M cumulative value over 36 months. This forecast assumes: model performance remains above 90% accuracy on standard claim types; the planned data integration with the legacy system completes in Q2 as scheduled; and adoption meets the milestone target of 65% assessor usage by month 6 post-deployment. If any condition is not met, revised forecasts will be presented at the next quarterly review.' The explicit conditions were received positively by the audit committee — they demonstrated that management had thought through the dependencies.",
        },
        {
          title: "A manufacturer — risk transparency at board level",
          body: "A manufacturer's AI programme roadmap named three risks in the board presentation: talent risk (two of four ML engineers were in offer stage with competitors), data integration risk (legacy MES API had no SLA), and regulatory risk (EU AI Act timeline uncertainty for Class B systems). Each risk had a named mitigation and a named contingency. A board member asked whether the talent risk had been shared with the remuneration committee. It had not — the board presentation conversation led directly to a salary review for the AI engineering team. Risk transparency produced an intervention that a minimised risk narrative would not have.",
        },
      ],
    }),
    buildSection({
      number: "5.6",
      title: "Quarterly Reviews That Move the Programme Forward",
      subtitle: "The mechanics of a review that produces decisions, not updates",
      take: "A quarterly AI roadmap review is a decision meeting, not a status meeting. It produces three to five decisions: which initiatives advance to the next phase, which are redesigned, which are stopped, which deferred initiatives have met re-entry conditions, and whether the portfolio balance requires adjustment. A review that ends with no decisions has not served the governance function.",
      why: "Quarterly reviews that produce status updates without decisions maintain the appearance of governance without its function. The function is portfolio adjustment — ensuring resources follow the evidence rather than the original plan.",
      paragraphs: [
        [
          s("The review agenda must generate decisions, not reports. "),
          x(
            "A review agenda that allocates time to 'update on Initiative A, update on Initiative B, update on Initiative C' will produce updates. An agenda that allocates time to 'gate review decision for Initiative A, portfolio rebalancing decision, deferred initiative re-entry assessment' will produce decisions.",
            "The difference is the pre-work. Status updates can be read in the pre-read; the meeting is for decisions that require dialogue. Decision-oriented agendas require decision briefs in the pre-read — not status slides — and they require the review chair to redirect status reporting to the pre-read.",
          ),
          s(" Decision briefs, not status slides, in the pre-read — so the meeting time is for decisions."),
        ],
        [
          s("Three decisions belong in every quarterly review. "),
          x(
            "Phase gate decisions: for each initiative at a gate, proceed/redesign/stop based on the gate criteria. Portfolio balance check: does the current portfolio composition — horizon balance, risk balance, value pipeline — still reflect the correct capital allocation given current business conditions? Deferred initiative re-entry: have any deferred initiatives met their re-entry conditions, and if so, does the portfolio have capacity to absorb them?",
            "These three decision types cover the full governance function of the quarterly review. Additional items — vendor relationship updates, regulatory horizon scanning, talent pipeline assessment — are valuable but should follow, not precede, the three core decisions.",
          ),
          s(" Three core decisions; all others are secondary — sequence accordingly."),
        ],
        [
          s("Record decisions, not discussions. "),
          x(
            "The minutes of a quarterly review should record: the decision made for each agenda item, the evidence basis for the decision, any dissenting views, and the action assigned with an owner and a date. Meeting records that document discussions without decisions cannot be used to hold the programme accountable.",
            "Business leaders who chair quarterly reviews and receive discussion minutes rather than decision minutes should return them for redrafting. The minute is the governance artefact — it is the record of what the organisation committed to and on what basis.",
          ),
          s(" Decision minutes are the governance artefact — discussion minutes are the transcript of the conversation."),
        ],
      ],
      examples: [
        {
          title: "A bank — agenda redesign produces different outcomes",
          body: "A bank's AI programme quarterly reviews had been running for 18 months and produced no initiative stops or redesigns — every initiative had 'proceeded'. A governance review found that the agenda was structured as status updates by initiative lead. The agenda was redesigned to decision briefs with pre-reads. In the first redesigned review, one initiative was stopped and two were redesigned — decisions that would have been 'proceeded' under the status update format because the initiative leads had framed their updates to maintain momentum.",
        },
        {
          title: "An insurer — portfolio balance decision in quarterly review",
          body: "An insurer's Q3 quarterly review included a portfolio balance assessment that surfaced a drift: 75% of the active portfolio was in Horizon 3 programmes (>24 months to outcome) after two Horizon 1 initiatives had completed without replacement. The review decision: commission two new Horizon 1 assessments before the Q4 review. Without the explicit portfolio balance check, the drift would not have been detected until the board review six months later.",
        },
        {
          title: "A retailer — decision minutes as accountability artefact",
          body: "A retailer's AI governance committee adopted decision minutes for quarterly reviews. Six months later, a programme manager proposed restarting a stopped initiative without referencing the stop decision or the stop conditions. The committee chair read from the decision minutes: 'Initiative C stopped Q1: accuracy on production data 61%, insufficient for stated use case. Re-entry conditions: accuracy exceeds 80% on production data OR problem statement is revised to match achievable accuracy.' The programme manager could not demonstrate either condition was met. The restart was deferred. The decision minute prevented a resource allocation mistake.",
        },
      ],
    }),
    buildSection({
      number: "5.7",
      title: "Balancing the Roadmap — Short-Term and Long-Term",
      subtitle: "Keeping the portfolio honest about time horizons without sacrificing ambition",
      take: "A roadmap dominated by long-horizon ambitious programmes runs out of stakeholder confidence before it runs out of budget. A roadmap dominated by short-horizon quick wins runs out of strategic ambition before it runs out of capability. The balance — sequenced, explicitly managed, and communicated clearly — is the business leader's roadmap discipline.",
      why: "Balance is not a compromise between ambition and pragmatism — it is the mechanism that funds the ambition. Quick wins generate the evidence, credibility, and organisational capability that ambitious programmes require. Leaders who understand this sequence pursue both with intention rather than treating them as competing priorities.",
      paragraphs: [
        [
          s("Quick wins fund the credibility that long-term bets require. "),
          x(
            "The board that approved a £5M AI programme in year one based on strategic rationale will expect evidence of value before approving year two. Quick wins in the first twelve months are not just valuable in themselves — they are the evidence base for the continued investment that long-horizon programmes need.",
            "A roadmap that has no deliverable outcome in the first twelve months is asking for continued trust without providing evidence. That is a viable ask once — it is not a sustainable governance relationship.",
          ),
          s(" First twelve months must include at least one delivered, quantified business outcome."),
        ],
        [
          s("Long-term bets require protected budget and protected leadership attention. "),
          x(
            "Long-horizon AI programmes are perpetually at risk of being defunded in favour of near-term demands. The protection is explicit: a ring-fenced budget line, a named executive sponsor with a protected governance cadence, and a clear articulation of the competitive or capability horizon the bet is targeting.",
            "Long-horizon programmes without explicit protection get eroded in every quarterly review by the immediate business case of higher-priority near-term programmes. By the time the long-horizon window arrives, the programme has been stripped to a fraction of its original resourcing.",
          ),
          s(" Long-horizon bets need explicit protection — not just portfolio inclusion."),
        ],
        [
          s("Communicate the balance explicitly to stakeholders. "),
          x(
            "Stakeholders who do not understand why the roadmap includes both quick wins and long-horizon bets will apply pressure to defund one in favour of the other. Communicating the logic — 'quick wins fund the credibility and capability that long-term bets require; long-term bets address the competitive positions that quick wins cannot' — makes the balance comprehensible and defensible.",
            "The three-horizon framing is the most useful communication tool: Horizon 1 (operating AI — delivering now), Horizon 2 (growing AI — building capability), Horizon 3 (emerging AI — creating future options). Every stakeholder conversation about roadmap balance can reference these three horizons without requiring a detailed review of every initiative.",
          ),
          s(" Three-horizon language is the business leader's communication tool for roadmap balance — use it consistently."),
        ],
      ],
      examples: [
        {
          title: "A financial services group — quick win portfolio sequence",
          body: "A financial services group designed its AI roadmap with a specific rule: no Horizon 3 programme could be approved without two active Horizon 1 programmes producing measurable outcomes. The rule maintained balance through three annual cycles. In year two, the CDO was pressured to accelerate a Horizon 3 autonomous customer service programme. The rule required two Horizon 1 outcomes to be active before approval — only one was active at the time. The Horizon 3 programme was deferred by one quarter until the second Horizon 1 outcome was confirmed. The deferral was accepted because the rule was pre-stated.",
        },
        {
          title: "An insurer — protected long-horizon programme",
          body: "An insurer's AI underwriting transformation programme — a 36-month Horizon 3 initiative — was given a dedicated budget line and a Chief Actuary executive sponsor with a quarterly protected governance session. Over three years, six quarterly reviews attempted to redirect a portion of the budget to near-term priorities. The protected governance structure deflected all six — not by refusing to discuss reallocation, but by requiring the reallocation request to demonstrate that the underwriting transformation's milestone evidence did not justify its continued funding. The evidence consistently justified continuation.",
        },
        {
          title: "A retailer — three-horizon communication resolves a board debate",
          body: "A retailer's board debate on AI investment focused on a perceived conflict between 'practical AI' (Horizon 1 demand forecasting) and 'transformative AI' (Horizon 3 autonomous store operations). The CDO introduced the three-horizon frame: 'These are not competing investments — they are sequential. Horizon 1 builds the data infrastructure and organisational capability that Horizon 3 requires. We need both, in sequence, with explicit balance.' The frame resolved the debate — both investments were approved with a clear statement of sequencing logic.",
        },
      ],
    }),
    buildSection({
      number: "5.8",
      title: "Owning the Roadmap as a Business Leader",
      subtitle: "The specific actions that make roadmap ownership real",
      take: "Roadmap ownership is not signing off on a document the technology team produced. It means: setting the business outcome targets, approving the priority sequence based on your strategic judgment, chairing or co-chairing the quarterly review, holding the gate decisions against the pre-stated criteria, and being the person who answers 'how is AI going?' to the board from a position of detailed knowledge — not delegated summary.",
      why: "AI roadmaps that are owned by technology leaders and reviewed by business leaders produce technology-centric decisions. Roadmaps owned by business leaders and executed by technology teams produce business-outcome-centric decisions. The distinction is not academic — it determines whether the roadmap serves the business or serves the technology function.",
      paragraphs: [
        [
          s("Ownership begins with setting the outcome targets, not approving the plan. "),
          x(
            "The business leader's first roadmap contribution is not reviewing a technology team's proposal — it is stating the business outcomes the AI programme must produce, in what time horizon, and at what confidence level. These targets are the brief from which the technology team builds the plan.",
            "A business leader who receives a technology plan and approves it has delegated the outcome targets to the technology team. The targets will be calibrated to what the technology team believes is achievable — not to what the business needs. That gap is why AI programmes produce outcomes that disappoint business expectations.",
          ),
          s(" State the outcome targets before the technology team builds the plan — not after."),
        ],
        [
          s("Chairing the quarterly review is the most concrete ownership action. "),
          x(
            "A quarterly review chaired by the technology lead will be optimised for technology decision-making — release planning, architecture choices, vendor management. A quarterly review chaired or co-chaired by the business leader will be optimised for business outcome decision-making — gate criteria, portfolio balance, strategic alignment.",
            "Business leaders who attend quarterly reviews as participants rather than chairs receive the agenda the technology team sets. Business leaders who chair the review set the agenda — and the agenda determines the decisions that are made.",
          ),
          s(" Chair or co-chair the quarterly review — do not attend as a participant."),
        ],
        [
          s("Answering the board question requires direct programme knowledge. "),
          x(
            "'How is the AI programme going?' is a board question that the business leader must answer from direct knowledge, not from a summary prepared by the programme manager. Direct knowledge comes from chairing the quarterly review, reading the decision minutes, attending gate reviews for major initiatives, and being the named executive sponsor for the AI portfolio.",
            "A business leader who answers board questions about the AI programme by reading from a slide prepared by the technology team signals that the programme is technology-led, not business-led. Boards understand this signal — and it changes how they allocate their oversight attention.",
          ),
          s(" Answer board questions from direct knowledge — not from a briefing note."),
        ],
      ],
      examples: [
        {
          title: "A bank — outcome targets set before the plan",
          body: "A retail bank's Chief Commercial Officer set the AI programme's outcome targets before the technology team developed the roadmap: 'The programme must produce £3M in value in the first 18 months, demonstrable to the board. No more than £1.5M of that target can come from cost reduction — at least £1.5M must be from revenue or customer retention impact.' The technology team built the roadmap against these targets — and the plan was materially different from what they would have built without the constraint. The revenue target redirected investment toward customer-facing AI that the technology team's preference for cost reduction initiatives would have deprioritised.",
        },
        {
          title: "An insurer — chair changes the review agenda",
          body: "An insurer's CDO had been attending quarterly AI programme reviews as a participant for two years. When a new CEO asked why two initiatives had been 'in pilot' for eight months each without a gate decision, the CDO reviewed the past eight review minutes. The technology programme manager had chaired all eight reviews; no gate decisions had been formally made in any of them. The CDO took the chair in the next review. The first item was a gate decision for the two long-running pilots: one proceeded, one was stopped. Both decisions should have been made four months earlier.",
        },
        {
          title: "A manufacturer — direct knowledge at board level",
          body: "A manufacturer's Chief Operations Officer directly sponsored the AI predictive maintenance programme and chaired its quarterly reviews. When the board asked about programme progress at the annual review, the COO answered from the last two quarterly review decisions — specific accuracy improvements, adoption rates, and cost reduction evidence — without referencing a slide or a briefing. The board's audit committee chair commented afterward: 'That is the first AI programme update I have received where I believed the executive knew what was actually happening.'",
        },
      ],
    }),
  ],
  quiz: [
    {
      q: "Your AI roadmap milestone reads: 'AI model deployed in Q3'. A board member asks what business outcome this produces. What is the problem?",
      options: [
        "There is no problem — deployment is a valid milestone.",
        "The milestone is a deliverable, not an outcome. A business-leader-owned roadmap requires outcome milestones: the specific business metric that will change, by how much, by when.",
        "The board member is asking the wrong question — technology deployments are the measure of progress.",
        "The Q3 date is too specific.",
      ],
      correct: 1,
      correctFeedback:
        "Right. Deployment is a necessary but insufficient condition for value. Outcome milestones specify what changes in the business as a result of the deployment — and that is the measurement that matters. Re-read sections 5.1 and 5.3.",
      wrongFeedback:
        "Deliverable milestones measure activity; outcome milestones measure value. Business leaders own the outcome milestones — the technology team owns the deliverable milestones. Re-read section 5.1.",
    },
    {
      q: "A pilot gate requires model accuracy >90%. The pilot achieves 88%. The programme manager recommends proceeding because 'we're nearly there'. What is the correct governance response?",
      options: [
        "Proceed — 88% is close enough.",
        "Apply the pre-stated gate criterion: 88% does not meet >90%. Decision: redesign with a specific plan to close the accuracy gap before a new gate review.",
        "Lower the gate criterion to 88% retrospectively.",
        "Request a second pilot to see if the result improves.",
      ],
      correct: 1,
      correctFeedback:
        "Right. Gate criteria are pre-committed. Adjusting them post-hoc destroys the governance value of the gate. 'Redesign' means returning to the gate with a specific improvement plan — not abandoning the initiative. Re-read section 5.3.",
      wrongFeedback:
        "Gate criteria set in advance are the mechanism that prevents post-hoc rationalisation. Lowering them retrospectively or treating 'nearly there' as meeting the condition undermines the governance function. Re-read section 5.3.",
    },
    {
      kind: "order",
      q: "Order the AI initiative lifecycle phases in the correct dependency sequence.",
      prompt: "Drag to arrange from first phase (top) to last phase (bottom).",
      items: [
        "Problem definition and data assessment.",
        "Design and build.",
        "Pilot — hypothesis testing at limited scale.",
        "Production deployment at limited scale.",
        "Steady-state operation — monitoring, retraining, governance.",
      ],
      correctFeedback:
        "Right. The dependency hierarchy is strict: data quality must be confirmed before model development, model performance confirmed before integration investment, limited production evidence required before scale-up. Violating the sequence creates expensive rework. Re-read sections 5.2 and 5.4.",
      wrongFeedback:
        "The lifecycle phases have dependencies that make reordering them costly. Each phase validates the foundations that the next phase builds on. Re-read sections 5.2 and 5.4.",
    },
    {
      q: "A quarterly review ends with no gate decisions, no portfolio adjustments, and no initiative stops. What does this indicate?",
      options: [
        "The programme is running perfectly.",
        "The review was structured as a status meeting rather than a decision meeting — governance function was not performed.",
        "The portfolio is too well-designed to require adjustment.",
        "The programme manager is doing excellent work.",
      ],
      correct: 1,
      correctFeedback:
        "Right. Quarterly reviews that produce no decisions are status meetings. The governance function of a quarterly review is portfolio adjustment — gate decisions, balance corrections, and deferred initiative re-entry assessments. These should produce decisions in every review cycle. Re-read section 5.6.",
      wrongFeedback:
        "A portfolio that never requires adjustment is a portfolio that is not being honestly evaluated. The absence of decisions signals that the review structure is not enabling them. Re-read section 5.6.",
    },
    {
      q: "Your board asks why the AI roadmap includes both quick wins and a 30-month transformative initiative. What is the business-leader-correct answer?",
      options: [
        "They serve different technology purposes.",
        "Quick wins fund the evidence and organisational capability that the transformative initiative requires; the transformative initiative creates the competitive position that quick wins cannot reach alone. Both are necessary in sequence.",
        "The quick wins were added to satisfy the board's desire for near-term results.",
        "The transformative initiative is the real programme; quick wins are fillers.",
      ],
      correct: 1,
      correctFeedback:
        "Right. The three-horizon logic is the board-level explanation for roadmap balance. Quick wins are not concessions to impatience — they are the evidence cadence and capability-building sequence that long-horizon bets depend on. Re-read section 5.7.",
      wrongFeedback:
        "Roadmap balance is strategic, not tactical. The sequence between horizons produces the compounding value that neither quick wins alone nor transformative bets alone can generate. Re-read section 5.7.",
    },
    {
      kind: "categorize",
      q: "Sort each roadmap activity into whether it belongs in business leader ownership or technology team ownership.",
      categories: ["Business leader ownership", "Technology team ownership"],
      items: [
        { text: "Setting the outcome targets that the roadmap must deliver against.", category: 0 },
        { text: "Designing the model architecture and selecting the training approach.", category: 1 },
        { text: "Chairing the quarterly portfolio review and making gate decisions.", category: 0 },
        { text: "Managing the MLOps pipeline and monitoring model drift.", category: 1 },
        { text: "Answering the board question 'how is AI going?' from direct programme knowledge.", category: 0 },
        { text: "Specifying the data pipeline integration requirements for a new AI feature.", category: 1 },
      ],
      correctFeedback:
        "Right. Business leaders own the outcome targets, the governance decisions, and the board accountability. Technology teams own the technical design, the MLOps operations, and the integration engineering. The division of labour determines whether the roadmap serves the business or the technology function. Re-read section 5.8.",
      wrongFeedback:
        "AI roadmap ownership is divided by accountability domain. Business leaders own the business outcomes and the governance decisions. Technology teams own the technical execution. Confusing these domains produces either business leaders approving plans they do not understand or technology leaders setting business targets they are not accountable for. Re-read section 5.8.",
    },
  ],
});
