import { buildChapter, buildSection, s, x } from "../concepts-pb4-helpers";

export const chapter09BlPilotDesignSuccessCriteria = buildChapter({
  slug: "bl-pilot-design-success-criteria",
  number: 9,
  shortTitle: "Pilot Design & Success Criteria",
  title: "Pilot Design and Success Criteria for AI Deployments",
  readingMinutes: 26,
  summary:
    "An AI pilot is not a trial — it is a structured experiment designed to generate specific evidence about whether the AI can deliver defined business value under defined conditions, within a defined timeline. Business leaders who design pilots rigorously generate the evidence they need for go/no-go decisions. Business leaders who treat pilots as extended evaluations generate enthusiasm, not evidence — and eventually sign full contracts based on optimism rather than data.",
  keyTakeaway:
    "A well-designed AI pilot has six elements: bounded scope (one use case, one team), pre-agreed success criteria with numerical thresholds, a control group for comparison, a fixed timeline with a scheduled go/no-go decision, data access restrictions in a signed agreement, and a named decision owner. Pilots missing any of these elements cannot produce reliable go/no-go evidence — and 'we learned a lot' is not a go/no-go outcome.",
  pmCallout:
    "As a business leader: a pilot that cannot produce a clear go/no-go decision is not a pilot — it is a vendor relationship you have not yet formalised. Design the success criteria before the pilot begins, or the vendor will define success after the pilot ends.",
  sections: [
    buildSection({
      number: "9.1",
      title: "What a pilot is and what it is not",
      subtitle: "The distinction between a structured experiment and an extended evaluation",
      take: "A pilot is a structured experiment: defined scope, pre-agreed success criteria, fixed timeline, and a mandatory go/no-go decision at the end. An extended evaluation is an indefinite trial that continues until someone loses patience. Pilots produce evidence. Extended evaluations produce relationships. Evidence-based procurement requires pilots, not trials.",
      why: "Business leaders who allow pilots to run without success criteria or fixed timelines find themselves managing an AI deployment that is neither committed nor abandoned — consuming team capacity and vendor attention without producing a governance decision.",
      paragraphs: [
        [
          s("Four questions distinguish a well-designed pilot from an extended evaluation. "),
          x(
            "1. Are the success criteria defined in numerical terms that both parties can measure? 2. Is there a fixed end date on which the go/no-go decision will be made? 3. Is there a named decision owner with authority to say no? 4. Is there a control condition for comparison?",
            "If the answer to any of these four questions is no, the pilot is an extended evaluation. The fix is simple: answer each question before the pilot begins.",
          ),
          s(" Write the four answers on one page before contacting the vendor about a pilot. The page is the pilot design document."),
        ],
        [
          s("The 'we learned a lot' outcome is a pilot failure. "),
          x(
            "A pilot that ends with 'we learned a lot and need more time to evaluate' has produced a vendor relationship, not a procurement decision. The vendor has consumed six weeks of your team's time and produced enthusiasm rather than evidence. 'We learned a lot' is the outcome of a pilot without pre-agreed success criteria — because there was no standard against which to judge what was learned.",
            "Vendors prefer pilots without pre-agreed success criteria: any outcome can be framed as learning and any learning can be used to advocate for continued evaluation or a full contract. Pre-agreed success criteria shift the framing from narrative to evidence.",
          ),
          s(" If a pilot produces 'we learned a lot' as its primary output, the problem was the pilot design, not the pilot outcome."),
        ],
        [
          s("A pilot is a risk reduction instrument, not a relationship development exercise. "),
          x(
            "The purpose of a pilot is to determine whether a specific AI tool can deliver a specific business outcome in a specific environment — before committing to a full contract. The pilot is a controlled test that either validates or invalidates the hypothesis that this AI tool, in this environment, with this team, can meet this success criterion.",
            "Framing the pilot as risk reduction rather than relationship development changes the evaluation dynamic: the vendor's goal is to prove performance, not to develop trust. Trust follows evidence; it does not replace it.",
          ),
          s(" Communicate the pilot framing to the vendor at the start: 'This pilot's goal is to determine whether your AI meets our success criteria. We are not evaluating your organisation or your team — we are testing a specific capability claim.'"),
        ],
      ],
      examples: [
        {
          title: "Legal firm — extended evaluation converted to pilot",
          body: "A law firm had been 'piloting' an AI contract review tool for four months without success criteria. The vendor's account manager described the relationship as a 'design partnership.' The firm's legal operations lead converted the extended evaluation to a structured pilot: success criterion defined ('reduce NDA review time from 4.2 hours to under 2.5 hours, measured on 100 NDAs during the pilot period'), fixed end date (six weeks from definition), go/no-go decision owner (legal operations lead), control condition (10 NDAs reviewed manually as baseline). Within six weeks, the pilot produced a clear answer: average NDA review time was 2.8 hours — below the target. The pilot was not successful. A go/no-go decision was made in two hours rather than three more months of relationship development.",
        },
        {
          title: "Healthcare — 'we learned a lot' outcome prevented",
          body: "A hospital's AI scheduling pilot was designed with a single success criterion: 'Reduce no-show rate for outpatient appointments by at least 8 percentage points versus control group, measured over 10 weeks.' At week 10, the measured reduction was 4.8 percentage points — below the 8-point threshold. The vendor's implementation lead proposed extending the pilot 'to allow the model to learn from the full patient population.' The hospital's project lead referred to the pre-agreed success criterion and timeline: 'The pilot period has concluded. The success criterion was not met. We are making a no-go decision.' The 'we need more time' argument had no standing against the pre-agreed criterion and timeline.",
        },
        {
          title: "Financial services — pilot as risk reduction",
          body: "A bank communicated its pilot framing to an AI fraud detection vendor at pilot kickoff: 'This pilot will determine whether your AI meets three specific performance criteria at our production data volume and in our integration environment. We are not evaluating your team's responsiveness, your company's market position, or your product roadmap. We are testing three performance claims against defined thresholds. The outcome will be a go or no-go decision.' The vendor's technical team responded positively: the clear framing focused their effort on the three performance claims rather than account management. The pilot produced go/no-go evidence in 8 weeks rather than the 16 weeks the bank's previous AI pilot had consumed without an outcome.",
        },
      ],
    }),
    buildSection({
      number: "9.2",
      title: "Defining success criteria before the pilot begins",
      subtitle: "How to write success criteria that produce go/no-go evidence rather than interpretation",
      take: "Success criteria written before a pilot begins are the commitment that makes the pilot evidence-based. Success criteria written after a pilot begins are a rationalisation of what was learned. The difference between evidence and rationalisation is the sequence: criteria before data, not data before criteria.",
      why: "Pre-defined success criteria prevent the most common pilot failure: ex-post rationalisation of a vendor relationship that has not demonstrated sufficient value to justify a full contract but has produced enough positive experiences to resist a no-go decision.",
      paragraphs: [
        [
          s("Three to five specific, measurable success criteria are optimal for most AI pilots. "),
          x(
            "More than five criteria creates evaluation complexity — what counts as success when three are met and two are not? Fewer than three creates vulnerability to gaming — the vendor optimises for the single measured metric while allowing unmeasured aspects of performance to degrade. Three to five criteria covering accuracy, time-to-value, and user adoption provide comprehensive coverage without evaluation complexity.",
            "Each criterion must be specific (what is measured), measurable (how it is measured and by whom), time-bounded (during what period), and comparative (against what baseline). The acronym SMTC — Specific, Measurable, Time-bounded, Comparative — applies.",
          ),
          s(" Write each success criterion in the format: '[Metric] will be [threshold] or better, measured [by whom] over [pilot period], compared to [baseline].'"),
        ],
        [
          s("The baseline measurement is as important as the success criterion threshold. "),
          x(
            "A criterion without a baseline cannot demonstrate improvement. 'Reduce review time to under 2.5 hours' is incomplete — from what baseline? 'Reduce review time from 4.2 hours (measured in the pre-pilot baseline period) to under 2.5 hours' is a complete criterion. The baseline must be measured before the pilot begins, using the same measurement method that will be used for the pilot outcome.",
            "Baselines measured after the pilot begins are vulnerable to measurement bias: if the team knows they are about to be measured against an AI baseline, they may unconsciously adjust their manual performance to make the AI comparison more or less favourable.",
          ),
          s(" Measure the baseline two to four weeks before pilot kickoff, using the same team, same measurement method, and same task set that will be used during the pilot."),
        ],
        [
          s("Specify who measures success: vendor measurement, joint measurement, or buyer measurement. "),
          x(
            "Vendor measurement of their own pilot success criteria is a conflict of interest — not because vendors are dishonest, but because methodology choices that favour the vendor will be made by the vendor. Joint measurement — both parties measure independently and compare — produces the most reliable evidence. Buyer measurement — your team measures the outcome using the pre-agreed methodology — is the most conservative and most legally supportable for contract decisions.",
            "For pilots that will directly inform a contract signature, buyer measurement or joint measurement is the appropriate standard. Vendor-only measurement produces evidence that the vendor's legal team can defend; your legal team cannot.",
          ),
          s(" Use buyer measurement or joint measurement for all success criteria that will directly inform a go/no-go contract decision."),
        ],
      ],
      examples: [
        {
          title: "Success criteria — before and after",
          body: "Before (insufficient): 'The AI should improve our contract review process.' After (SMTC-compliant): 'Criterion 1: Average NDA review time will be below 2.5 hours, measured by legal operations team on 100 consecutively assigned NDAs during pilot weeks 5–10, compared to baseline of 4.2 hours measured in weeks 1–2 pre-pilot. Criterion 2: Attorney satisfaction score (5-point scale) will average 3.5 or above, measured by anonymous survey in pilot week 11, compared to pre-pilot baseline. Criterion 3: Hallucination rate on clause identification will be below 2%, measured by random sample of 20 reviewed NDAs by senior associate, no pre-pilot baseline (threshold only).' Three criteria, each fully specified. The 'before' criterion could not produce evidence; the 'after' criteria can.",
        },
        {
          title: "Baseline timing — pre-pilot measurement",
          body: "A retailer's AI demand forecasting pilot required a pre-pilot baseline measurement of forecasting accuracy. The measurement was conducted in weeks 1–3 before pilot kickoff, using the same SKU set that would be used in the pilot and the same MAPE metric. Baseline MAPE: 24.3%. Success criterion: pilot MAPE below 18% (a 25% improvement). During the pilot, the forecasting team was not told the baseline figure to prevent anchoring. Pilot measurement by the retailer's data science team: MAPE 16.8% — below the 18% threshold. The pre-pilot baseline was unambiguous, the measurement was blind, and the criterion was met. The go/no-go decision was made in 30 minutes.",
        },
        {
          title: "Joint measurement prevents dispute",
          body: "A bank's AI document processing pilot used joint measurement: both the bank's operations team and the vendor's customer success team measured processing accuracy independently on the same 500-document sample. Bank measurement: 89.2% accuracy. Vendor measurement: 91.4% accuracy. The 2.2-percentage-point discrepancy was traced to different handling of edge cases — the vendor excluded ambiguous documents from their accuracy calculation while the bank included them. The joint measurement surfaced the methodology difference before a dispute arose. The parties agreed on the bank's methodology (inclusive of ambiguous documents) as the standard for the pilot outcome. The joint measurement produced a single agreed figure (89.2%) that both parties could use for the contract decision.",
        },
      ],
    }),
    buildSection({
      number: "9.3",
      title: "Pilot scope definition",
      subtitle: "How to scope a pilot tightly enough to produce reliable evidence and broadly enough to be representative",
      take: "Pilot scope must be bounded by three parameters: one use case (not the full function), one team (not the whole organisation), and one data set (not all data). A pilot scoped too narrowly produces results that do not represent the deployment environment. A pilot scoped too broadly cannot be controlled and cannot isolate the AI's contribution from other variables.",
      why: "Pilot scope determines the generalisability of the evidence produced. A pilot on a cherry-picked use case with a self-selected team and curated data produces the best-case result — not the typical result. A pilot designed to represent realistic deployment conditions produces evidence that is decision-relevant.",
      paragraphs: [
        [
          s("Three scoping decisions determine pilot validity: use case selection, team selection, and data selection. "),
          x(
            "Use case: select the most common, highest-volume use case in the function — not the easiest. If 80% of your contract review volume is NDAs, pilot on NDAs. If 20% is complex commercial agreements, pilot on NDAs and use the complex agreement performance as secondary evidence. Team: select the team that will actually use the AI in production — not the most tech-savvy subset. The pilot's adoption metrics must reflect typical user behaviour. Data: use production data from the past 6 months — not a curated sample selected by the vendor.",
            "The most common pilot scope failure is selecting the conditions most favourable to the vendor: the simplest use case, the most enthusiastic team, and the cleanest data. This produces evidence that is optimistic rather than representative.",
          ),
          s(" Communicate the scope selection principles to the vendor at pilot kickoff: 'We are using our most common use case, typical users, and production data — not the conditions most favourable to your technology.'"),
        ],
        [
          s("The control group is the scope element most frequently omitted and most essential for valid evidence. "),
          x(
            "A control group is a comparable set of tasks or cases processed without the AI during the pilot period. Without a control group, you cannot distinguish the AI's contribution to performance improvement from other factors: team learning, process changes, seasonal variation, or the Hawthorne effect (improvement due to being observed).",
            "The Hawthorne effect is particularly strong in AI pilots: teams who know they are in a pilot often improve their manual performance — which inflates the comparison baseline and makes the AI's contribution appear smaller than it is. A control group with different but comparable team members or tasks controls for this effect.",
          ),
          s(" If a true experimental control group is not feasible (because the team or task set cannot be split), use a historical control: compare pilot performance to the same metric in the preceding 12 weeks before the pilot began."),
        ],
        [
          s("Scope creep is the most common pilot execution failure. "),
          x(
            "Vendors have a commercial incentive to expand pilot scope: a broader pilot is harder to evaluate against pre-defined criteria, produces more ambiguous evidence, and creates more vendor-team relationships that generate inertia toward a positive outcome. Common scope creep patterns: adding new features to the pilot environment, expanding the user group beyond the original pilot team, or extending the pilot timeline beyond the agreed duration.",
            "Each scope creep event requires a governance response: document the change, assess whether the success criteria remain valid with the expanded scope, and make an explicit decision about whether to accept the change. Undocumented scope creep invalidates pilot evidence.",
          ),
          s(" Designate a pilot scope owner with authority to reject scope creep — not the vendor, not the most enthusiastic internal champion, but a governance-minded business leader who can hold the line on the original design."),
        ],
      ],
      examples: [
        {
          title: "HR platform — representative scope selection",
          body: "An HR platform piloting AI candidate screening was advised by the vendor to start with a specific role category where the AI performed best (technical roles, well-represented in training data). The HR director chose the pilot scope based on volume: the highest-volume role category (customer service, 40% of annual hiring volume). The vendor noted this was a harder category for their model. The HR director accepted the additional difficulty: 'If the AI cannot meet our criteria on customer service roles, it cannot meet them on our actual hiring distribution.' The pilot on the harder scope produced lower benchmark performance — 78% vs. the vendor's projected 88% on technical roles. The go/no-go decision was based on representative evidence.",
        },
        {
          title: "Financial services — historical control group",
          body: "A bank's AI document processing pilot could not use a true experimental control group — the processing team was too small to split. The pilot used a historical control: the same MAPE metric on the same document types for the 12 weeks before pilot kickoff. Historical control accuracy: 84.2%. Pilot accuracy: 91.7%. The 7.5-percentage-point improvement exceeded the 6-point success criterion. The historical control validated the comparison: no other process changes had been made in the 12 weeks before the pilot that would have affected the baseline, making the historical control a valid comparison.",
        },
        {
          title: "Retailer — scope creep governance",
          body: "A retailer's AI personalisation pilot was scoped to email personalisation for 50,000 customers. In week three, the vendor proposed adding web personalisation to the pilot 'at no additional cost.' The pilot scope owner assessed the change: adding web personalisation would require IT integration work beyond the pilot timeline, would expand the success criteria to include web conversion metrics not yet defined, and would make the pilot timeline extension necessary. The scope creep was rejected. The vendor's proposal was documented and deferred to post-pilot evaluation if the email pilot succeeded. The rejection maintained the integrity of the original pilot design.",
        },
      ],
    }),
    buildSection({
      number: "9.4",
      title: "Pilot timeline and go/no-go process",
      subtitle: "Designing a pilot timeline that produces decision-quality evidence without indefinite extension",
      take: "A pilot timeline has three phases: setup (data access, integration, team training), measurement (the active pilot period during which success criteria are measured), and go/no-go (the decision meeting at which the evidence is reviewed and a decision is made). The go/no-go meeting must be scheduled before the pilot begins — not at the end of the measurement period when the temptation to extend is highest.",
      why: "The go/no-go meeting scheduled at the end of a pilot is subject to the sunk cost effect: if the team has invested 8 weeks in a pilot, they are psychologically disposed to find success. A go/no-go meeting scheduled before the pilot begins establishes the decision standard at a point when sunk cost has not yet accumulated.",
      paragraphs: [
        [
          s("Standard AI pilot timelines by use case complexity. "),
          x(
            "Simple automation (document classification, form processing): 4–6 weeks measurement. Complex analysis (contract review, financial modelling): 8–10 weeks. Decision support (clinical recommendation, credit assessment): 10–12 weeks. Generative AI (content generation, code generation): 6–8 weeks. These timelines include setup; measurement-only timelines are 2–4 weeks shorter.",
            "Pilot timelines shorter than 4 weeks do not provide sufficient measurement samples for statistical confidence in most AI use cases. Timelines longer than 12 weeks become extended evaluations — the measurement period should be long enough to collect 100–200 outcome events for each success criterion.",
          ),
          s(" Specify a minimum sample size for each success criterion — the pilot measurement period should be long enough to collect the minimum sample, not just to reach a calendar date."),
        ],
        [
          s("The go/no-go meeting format determines the quality of the decision. "),
          x(
            "A go/no-go meeting should have four components: evidence presentation (each success criterion, the measurement result, and whether the threshold was met), decision recommendation from the evidence (yes/no, not 'it depends'), stakeholder challenge period (30 minutes of structured challenge to the evidence and recommendation), and decision documentation (the final go/no-go decision, the reasoning, and the conditions if the decision is conditional).",
            "A go/no-go meeting without a decision documentation component produces verbal decisions that are subject to reinterpretation. The decision documentation is the governance record that makes the go/no-go binding.",
          ),
          s(" Schedule the go/no-go meeting at contract kickoff — not at the end of the pilot measurement period. Put it in the calendar before the pilot starts."),
        ],
        [
          s("Conditional go decisions require explicit conditions, not implicit optimism. "),
          x(
            "A conditional go — 'we will proceed if the vendor addresses X within Y days' — is legitimate when one criterion is narrowly missed and the gap is clearly addressable. Conditions must be: specific ('hallucination rate must reach below 2% on a repeated measurement'), time-bounded ('within 30 days of the go/no-go meeting'), measurable ('measured using the same methodology as the pilot'), and accompanied by a clear no-go consequence ('if the condition is not met, we will not proceed to contract').",
            "Conditional goes that are specific and time-bounded are legitimate. Conditional goes that are vague or open-ended are no-go decisions that the team is not willing to make — and they typically result in full contracts for products that did not meet pilot criteria.",
          ),
          s(" If more than one success criterion is missed, a conditional go is not appropriate — each missed criterion doubles the probability that the go-live deployment will underperform the pilot."),
        ],
      ],
      examples: [
        {
          title: "Healthcare — go/no-go meeting design",
          body: "A hospital's AI clinical documentation pilot go/no-go meeting was scheduled six weeks before it occurred — on the day the pilot agreement was signed. The meeting agenda: evidence presentation (15 minutes, pilot sponsor), measurement results (20 minutes, data science team), stakeholder challenge (30 minutes), decision and documentation (15 minutes, hospital CMO as decision owner). The meeting lasted 80 minutes. Evidence: two of three criteria met, one missed (hallucination rate 1.8% vs. 1.5% threshold). Discussion: hallucination rate gap was 0.3 percentage points, vendor had identified the cause. Conditional go decision documented: 'Proceed to contract if hallucination rate is below 1.5% on a 48-hour measurement conducted within 21 days of today, using the same sample methodology.' The vendor met the condition in 18 days. Contract was signed.",
        },
        {
          title: "Financial services — sample size minimum",
          body: "A bank's AI fraud detection pilot specified a minimum sample size: 'The success criteria require measurement on a minimum of 2,000 fraudulent transactions and 20,000 legitimate transactions to achieve 95% statistical confidence in the precision and recall estimates.' The pilot timeline was set to accommodate the minimum sample, not a calendar duration. In a high-fraud period, the 2,000 fraudulent transaction minimum was reached in week 6. In a low-fraud period, it required week 10. The pilot end date was adjusted to the minimum sample date — regardless of calendar duration. The minimum sample requirement prevented a premature go/no-go decision based on insufficient evidence.",
        },
        {
          title: "Professional services — vague conditional prevented",
          body: "A consulting firm's AI proposal generation pilot missed one success criterion: proposal quality scores averaged 3.4 out of 5 vs. the 3.7 threshold. The vendor proposed a conditional go: 'the model will improve as it learns from more proposals.' The pilot scope owner rejected the conditional: the improvement claim was not specific, not time-bounded, and not measurable. The pilot scope owner offered a structured alternative: 'We will conduct a second 4-week pilot after the vendor implements a specific prompt engineering improvement they have proposed, with the same success criteria and the same go/no-go process.' The vendor accepted. The second pilot achieved 3.9 — above threshold. The contract was signed based on evidence from the second pilot, not optimism about improvement.",
        },
      ],
    }),
    buildSection({
      number: "9.5",
      title: "Change management during the pilot",
      subtitle: "How to manage the human dimensions of AI pilot adoption that determine its representativeness",
      take: "The human dimensions of an AI pilot — user adoption, workflow integration, and change resistance — are as important to pilot validity as the technical performance. A pilot with 40% user adoption and strong AI performance is not evidence that the AI will deliver business value at scale — it is evidence that 40% adoption with strong AI performance produces partial business value. Representative adoption during the pilot predicts post-pilot scale.",
      why: "Business leaders who focus exclusively on technical performance during pilots and ignore adoption metrics arrive at go/no-go decisions based on AI capability in optimal conditions, not AI value in typical conditions. Adoption metrics during the pilot are the leading indicator of post-pilot value delivery.",
      paragraphs: [
        [
          s("Three adoption metrics must be tracked during every AI pilot. "),
          x(
            "1. Active user rate: the percentage of pilot users who actively use the AI (at least one interaction per week). A target of 80% active users by week four is standard — below 60% indicates adoption friction that will prevent scale. 2. Task completion rate: the percentage of eligible tasks for which the AI is used rather than bypassed. A bypass rate above 30% indicates the AI is not trusted or convenient enough for routine use. 3. Override rate: the percentage of AI recommendations that users override or ignore — providing a proxy for perceived accuracy and user calibration.",
            "These three metrics together provide a composite adoption picture: are users engaging with the AI (active user rate), are they using it where appropriate (task completion rate), and do they trust and calibrate its outputs (override rate)?",
          ),
          s(" Add all three adoption metrics to the pilot success criteria alongside the performance metrics — adoption is a performance criterion, not a secondary observation."),
        ],
        [
          s("User training design is a pilot variable, not a pilot constant. "),
          x(
            "The amount and quality of training provided to pilot users affects adoption metrics in ways that may not be reproducible at scale. If pilot users receive 8 hours of training and enterprise rollout will provide 2 hours, pilot adoption metrics will overestimate full-deployment adoption. Design pilot training to be equivalent to what full deployment will provide — not more.",
            "Vendors have an incentive to provide more training support during pilots than they can provide at scale: better-trained pilot users produce better adoption metrics that support the full contract case. Explicitly limit pilot training support to the level the vendor can sustainably provide at the contracted customer success level.",
          ),
          s(" Specify training scope and duration in the pilot agreement as a controlled variable — the same training level provided in the pilot must be achievable at full deployment scale."),
        ],
        [
          s("Change resistance during pilots is signal, not noise. "),
          x(
            "When pilot users resist the AI — high bypass rates, low active user rates, or explicit negative feedback — this resistance is information about the deployment challenge at scale. A pilot team that resists adoption at 10% scale will be a scaling team that resists adoption at 100% scale. Change resistance during a pilot is the best advance indicator of the change management investment required for full deployment.",
            "The appropriate response to change resistance in a pilot is not to force adoption to preserve success metrics — it is to understand the resistance, design a change management response, and include the change management cost in the full-deployment business case.",
          ),
          s(" Document and understand the source of any user resistance during the pilot — it is the most valuable intelligence available for designing the full-deployment change management programme."),
        ],
      ],
      examples: [
        {
          title: "Legal AI — adoption metric reveals scale risk",
          body: "A law firm's AI contract review pilot achieved strong technical performance: average NDA review time reduced to 2.1 hours vs. 2.5-hour threshold. However, adoption metrics told a different story: active user rate was 55% (below the 80% target), bypass rate was 38% (above the 30% threshold), and override rate was 67% (high — attorneys were regularly overriding AI clause flags). The go/no-go decision was conditional: 'Go on technical performance, no-go on adoption as designed. Proceed if the vendor can demonstrate an adoption intervention that achieves 75% active user rate and 25% bypass rate in a 2-week extension.' The adoption metrics — not the technical performance — were the decision-relevant evidence.",
        },
        {
          title: "Healthcare — training scope control",
          body: "A hospital's AI scheduling pilot used vendor-provided training: 6 hours of one-on-one training per scheduling coordinator during pilot setup. The vendor's standard enterprise customer success plan included 1 hour of group training at deployment. The pilot adoption rate was 87% — above the 80% threshold. The hospital's project lead flagged the discrepancy: pilot training was 6× the enterprise standard. A training-equivalent test week was run with 1-hour group training only. Active user rate in the test week: 62% — below the 80% threshold. The training-adjusted adoption metric was added to the go/no-go evidence. The conditional go required the vendor to develop a structured 3-hour onboarding programme before full deployment.",
        },
        {
          title: "Financial services — resistance as intelligence",
          body: "A bank's AI loan application processing pilot experienced significant resistance from underwriters. Bypass rate: 52%. User feedback: 'The AI's explanations don't match how we think about credit risk.' The pilot scope owner convened a feedback session with six underwriters. The resistance source: the AI's risk factor presentation used probability terminology (e.g., 'default probability 4.2%') rather than the underwriters' conceptual framework ('thin file borrower with insufficient income documentation'). The feedback generated a specific product requirement: explanation language aligned with underwriter mental models. The vendor implemented the change in week 8. Bypass rate dropped to 28% in weeks 9–10. The resistance intelligence produced a product improvement that full-deployment adoption would not have revealed until after contract signature.",
        },
      ],
    }),
    buildSection({
      number: "9.6",
      title: "Measuring ROI during the pilot",
      subtitle: "How to build a ROI measurement framework during the pilot that validates the full-deployment business case",
      take: "The pilot is the best opportunity to validate the business case ROI assumptions under real conditions. A pilot ROI measurement framework tracks the same metrics that the full-deployment business case projects — identifying which projections are accurate, which are optimistic, and which have been missed entirely. Pilot ROI evidence is the most credible input for full-deployment investment decisions.",
      why: "Business cases built without pilot evidence are projections. Business cases validated with pilot evidence are forecasts. Investors, boards, and finance teams treat projections and forecasts differently — pilot ROI evidence converts an AI investment proposal from a promise to a documented performance track record.",
      paragraphs: [
        [
          s("Map each business case assumption to a pilot measurement. "),
          x(
            "Business case assumption: 'The AI will reduce contract review time from 4.2 hours to 2.5 hours.' Pilot measurement: actual review time on 100 consecutively assigned contracts. Business case assumption: 'The AI will enable each paralegal to process 40% more contracts per week.' Pilot measurement: contracts processed per paralegal per week during pilot vs. baseline. Business case assumption: 'The AI will reduce error rate on extracted contract data from 8% to 2%.' Pilot measurement: error rate on extracted data during pilot vs. baseline.",
            "Mapping business case assumptions to pilot measurements before the pilot begins reveals assumptions that are unmeasurable — indicating they must be removed from the business case or replaced with measurable proxies.",
          ),
          s(" Reject any business case assumption that cannot be mapped to a pilot measurement — if it cannot be tested in the pilot, it cannot be validated before a full-deployment commitment."),
        ],
        [
          s("Extrapolate pilot ROI to full-deployment scale with explicit confidence ranges. "),
          x(
            "Pilot ROI at pilot scale (1 team, 1 use case) × extrapolation factor (full deployment scale) = projected full-deployment ROI. The extrapolation is not linear: adoption rates may differ at scale, edge cases not present in the pilot may reduce performance at full volume, and change management costs increase non-linearly with organisational scope.",
            "A 10% adoption shortfall at pilot scale produces a 10% ROI shortfall. A 10% adoption shortfall at full scale — across 500 users rather than 20 — requires a larger change management investment to recover, which reduces the net ROI beyond the 10% direct shortfall.",
          ),
          s(" Model three extrapolation scenarios: optimistic (pilot performance maintained at scale), base (10–15% adoption reduction at scale), and conservative (25% reduction and 20% increase in change management cost). Present all three to the decision maker."),
        ],
        [
          s("Pilot ROI calculation must include implementation costs, not just value delivery. "),
          x(
            "Business cases typically focus on value delivery (time saved, errors reduced, revenue generated) and underestimate implementation costs (integration engineering, training, change management, ongoing monitoring). A pilot that measures both value delivered and implementation cost expended provides a net ROI figure rather than a gross benefit claim.",
            "Implementation costs in AI pilots are typically 40–80% of the first-year contract value. A business case that projects the contract value as the only cost — ignoring integration, training, and monitoring costs — will overpromise ROI by 40–80%.",
          ),
          s(" Track all implementation costs during the pilot — internal team time, vendor professional services, IT integration effort, training delivery — and include them in the pilot ROI calculation alongside value delivery."),
        ],
      ],
      examples: [
        {
          title: "Legal firm — business case validation",
          body: "A law firm's AI contract review business case projected: review time reduction (4.2h to 2.5h, $180/hr paralegal rate, 40 NDAs/week), error rate reduction (8% to 2%), and 40% throughput increase. Pilot measurements: review time reduced to 2.8h (not 2.5h target), error rate reduced to 3.1% (not 2% target), throughput increase 28% (not 40% target). All three assumptions were partially validated but below projection. Full-deployment ROI reforecast using pilot data: $280,000 annual net benefit (vs. $420,000 projected). The reforecast was presented to the board alongside the business case projection. The board approved the deployment based on the validated $280,000 figure — a more defensible investment decision than the unvalidated $420,000 projection.",
        },
        {
          title: "Healthcare — three-scenario extrapolation",
          body: "A hospital's AI scheduling pilot produced: 6.8% no-show rate reduction (vs. 8% success criterion threshold). Extrapolation models: Optimistic (pilot rate maintained): $340,000 annual value, 1.2× ROI. Base (15% adoption reduction at scale): $290,000 annual value, 1.0× ROI. Conservative (25% adoption reduction, $80K additional change management): $210,000 annual value, 0.7× ROI. The hospital presented all three scenarios to the CFO. The CFO approved the deployment on the base scenario (1.0× ROI) with a 12-month performance review trigger at the conservative scenario threshold (0.7×). The three-scenario presentation converted an ambiguous pilot outcome into a structured investment decision.",
        },
        {
          title: "Financial services — implementation cost tracking",
          body: "A bank's AI document processing pilot tracked implementation costs: internal IT integration (180 hours at $120/hr = $21,600), vendor professional services ($28,000), training delivery (40 hours at $85/hr = $3,400), pilot monitoring and analysis ($8,500). Total pilot implementation cost: $61,500. Value delivered during pilot: $42,000 (measured productivity gain on pilot volume). Pilot-period net ROI: negative $19,500. Full-deployment ROI projection: $380,000 annual value vs. $140,000 annual implementation cost (lower per-unit at scale). The bank's CFO noted: 'The pilot had a negative ROI as expected — implementation costs are front-loaded. The question is full-deployment ROI, not pilot ROI. The pilot validates the value delivery rate; the implementation cost will decrease per unit at scale.' The cost tracking gave the CFO the information to make this distinction.",
        },
      ],
    }),
    buildSection({
      number: "9.7",
      title: "Pilot documentation and knowledge transfer",
      subtitle: "How to capture and preserve pilot evidence for contract negotiation and deployment planning",
      take: "Pilot documentation serves three purposes: it provides the evidence base for the go/no-go decision, it becomes the negotiating foundation for the full contract, and it is the knowledge base for the deployment team. Pilots that are not documented produce anecdotal evidence that degrades in quality as the people who experienced the pilot move on.",
      why: "AI pilot knowledge transfer failures are among the most costly and least recognised post-procurement risks. The team that designed and ran the pilot knows things about the AI's performance, failure modes, and integration requirements that the deployment team needs — and that will be lost without structured documentation.",
      paragraphs: [
        [
          s("The pilot documentation package has five components. "),
          x(
            "1. Pilot performance report: success criteria, measurement results, baseline comparisons, and go/no-go recommendation. 2. Failure mode log: every instance during the pilot where the AI produced an incorrect or unexpected output, categorised by type and frequency. 3. Integration documentation: actual integration effort expended, API issues encountered, data quality issues identified. 4. Adoption analysis: active user rate, bypass rate, override rate, and qualitative user feedback with root cause analysis for any resistance. 5. Contract negotiating inputs: performance warranty thresholds (derived from pilot measurements), integration commitments (based on actual integration complexity), and SLA benchmarks (based on observed latency and uptime).",
            "The failure mode log is the most valuable and least maintained pilot documentation component. AI failure modes observed in the pilot are the best predictor of production failure modes — and the basis for negotiating model governance provisions in the full contract.",
          ),
          s(" Assign a documentation owner at pilot kickoff — not at pilot end. Documentation completed during the pilot is more accurate than documentation reconstructed at pilot end."),
        ],
        [
          s("Contract negotiating inputs derived from pilot data are the most defensible negotiating foundation available. "),
          x(
            "Performance warranty threshold: set at 90% of the best performance measurement during the pilot — not the best measurement, but 90% of it. If the pilot achieved 91% accuracy peak, the performance warranty threshold is 82%. This accounts for the demo-to-production gap and model variation without being punitive. Latency commitment: based on P95 latency measured during peak load in the pilot — not vendor-claimed benchmark latency. Integration scope: based on actual integration effort documented during the pilot — used to negotiate a not-to-exceed implementation cost cap.",
            "Pilot-derived contract terms are harder to reject than terms proposed without evidence: the vendor knows you have measured the performance and the vendor's attempt to propose more favourable thresholds will be challenged with pilot data.",
          ),
          s(" Document pilot measurements specifically for contract negotiation use — label them as 'Contract Input: [specific provision]' in the documentation package."),
        ],
        [
          s("Knowledge transfer from pilot to deployment team is a structured handoff, not a casual briefing. "),
          x(
            "The pilot team — vendor, internal champion, and IT integration lead — knows things about the AI's performance that the deployment team does not. Structured knowledge transfer: a formal handoff session covering failure modes, workarounds, integration nuances, and adoption friction points. The session should be recorded or produce a written summary that becomes part of the deployment plan.",
            "AI knowledge transfer failures are particularly costly because AI systems fail in non-obvious ways — the failure mode log from the pilot is the deployment team's early warning system. Without it, the deployment team discovers failure modes independently — at production scale, in front of customers.",
          ),
          s(" Schedule the knowledge transfer session before the deployment team begins work, not after issues arise in deployment. The pilot team's knowledge depreciates rapidly as the deployment unfolds."),
        ],
      ],
      examples: [
        {
          title: "Healthcare — failure mode log value",
          body: "A hospital's AI clinical documentation pilot produced a 47-entry failure mode log: 23 entries for specialty-specific terminology misidentification, 15 for medication name abbreviation handling, and 9 for dictation accent recognition. The log was provided to the deployment team before go-live. The deployment team used the log to design three pre-deployment interventions: specialty-specific fine-tuning (addressing 23 entries), medication abbreviation glossary integration (15 entries), and accent-aware preprocessing (9 entries). At go-live, only 4 of the 47 failure modes appeared in production — the other 43 were addressed by the pre-deployment interventions. Without the failure mode log, all 47 would have appeared in production, requiring post-go-live remediation.",
        },
        {
          title: "Financial services — pilot-derived warranty threshold",
          body: "A bank's AI fraud detection pilot peak precision measurement: 93.2%. Performance warranty threshold calculation: 90% of 93.2% = 83.9%, rounded to 84%. The bank proposed 84% precision as the contract performance warranty threshold. The vendor's legal team countered with 80% — arguing industry standard for fraud detection AI. The bank's procurement lead presented the pilot data: 'We measured peak precision of 93.2% in an 8-week pilot. An 84% warranty threshold is 90% of observed peak performance — a generous standard that accounts for production variability. We are not asking for pilot peak performance as the warranty threshold.' The vendor accepted 84% without further negotiation. Pilot data converted a benchmark argument into an evidence-based negotiation.",
        },
        {
          title: "Legal AI — structured knowledge transfer",
          body: "A law firm's AI contract review pilot team conducted a structured knowledge transfer session before deployment. The 90-minute session covered: 12 failure modes from the failure mode log (each with workaround instructions), 3 integration nuances (specific API configuration requirements that the documentation did not mention), 4 adoption friction points (attorney concerns that had been addressed with specific workflow adjustments during the pilot), and 2 open issues (on the vendor's roadmap, expected in Q3 release). The session was recorded and the recording was distributed to all deployment team members. In the first month of production deployment, only 2 of the 12 known failure modes appeared — and both were resolved using the documented workarounds from the pilot team's knowledge transfer.",
        },
      ],
    }),
    buildSection({
      number: "9.8",
      title: "BL decision lens: your pilot design template",
      subtitle: "A one-page pilot design template that ensures every AI pilot produces decision-quality evidence",
      take: "A one-page pilot design template completed before every AI pilot kickoff converts pilot planning from an informal discussion into a structured experiment. The template has six sections corresponding to the six essential elements of a valid pilot: scope, success criteria, timeline, control condition, decision owner, and documentation plan. A pilot that begins without a completed template is not a pilot — it is a trial.",
      why: "Business leaders who complete the template before every pilot build an institutional discipline for evidence-based AI procurement. Over time, this discipline produces a portfolio of AI deployments that can be evaluated against validated evidence — not against historical enthusiasm.",
      paragraphs: [
        [
          s("The six-section pilot design template. "),
          x(
            "Section 1 — Scope: use case (one sentence, job-to-be-done format), team (named team or role type), data (source, volume, date range). Section 2 — Success criteria: 3–5 criteria in SMTC format with thresholds and measurement methods. Section 3 — Timeline: setup weeks, measurement weeks, go/no-go meeting date (calendar date). Section 4 — Control condition: control group or historical control specification. Section 5 — Decision owner: named individual with go/no-go authority. Section 6 — Documentation plan: failure mode log owner, pilot performance report owner, knowledge transfer session scheduled date.",
            "The template takes 90 minutes to complete with the vendor and relevant internal stakeholders. A template that cannot be completed in 90 minutes indicates ambiguity in the pilot design — not complexity. Resolve the ambiguity before the pilot begins, not during it.",
          ),
          s(" File the completed template in the vendor governance record before pilot kickoff — the template is the governance artefact that makes the pilot binding and the go/no-go decision defensible."),
        ],
        [
          s("Use the template review to identify pilot design gaps before they become pilot failures. "),
          x(
            "Common template gaps: success criteria without baselines (remediate by scheduling baseline measurement before pilot kickoff), no control condition specified (remediate by identifying a historical control period), no named decision owner (remediate by escalating the decision ownership question to the budget holder before pilot kickoff), documentation plan missing (remediate by assigning each documentation role before pilot kickoff).",
            "Each template gap is solvable in 1–5 business days if identified before the pilot begins. Each gap is a significant problem if identified after the pilot concludes — requiring retroactive data collection, contested retrospective baselines, or go/no-go decisions made without the required evidence.",
          ),
          s(" Review the completed template with a peer who was not involved in the design — fresh eyes identify gaps that the design team has normalised."),
        ],
        [
          s("Evolve the template after each pilot cycle based on what produced and did not produce decision-quality evidence. "),
          x(
            "After each pilot go/no-go decision, review the template: which sections produced the clearest evidence? Which were missing or incomplete? Were the success criteria specific enough? Was the control condition adequate? Did the documentation plan get executed? Incorporate the answers into the next template version.",
            "An organisation that runs three to five AI pilots and reviews the template after each one will have a pilot design template that is materially better than any external template — because it incorporates the specific failure modes, measurement challenges, and adoption dynamics of that organisation's AI procurement environment.",
          ),
          s(" Create an institutional pilot design template that is owned, versioned, and reviewed after each pilot cycle — the template is a knowledge asset that improves with each use."),
        ],
      ],
      examples: [
        {
          title: "Six-section template — completed example",
          body: "Section 1 — Scope: 'Help legal operations managers identify NDA clauses that deviate from standard template. Pilot team: 6 legal operations paralegals. Data: all NDAs received in a 10-week period (estimated 200 NDAs based on historical volume).' Section 2 — Success criteria: '(1) Average NDA review time below 2.5 hours (baseline: 4.2 hours, measured weeks 1–2). (2) Attorney satisfaction 3.5/5 or above (pilot week 11 survey). (3) Hallucination rate below 2% (spot check of 20 NDAs by senior associate).' Section 3 — Timeline: 'Setup weeks 1–2. Measurement weeks 3–10. Go/no-go meeting: [calendar date].' Section 4 — Control: 'Historical control: NDA review performance from preceding 12 weeks, measured by same team.' Section 5 — Decision owner: 'Legal Operations Director.' Section 6 — Documentation: 'Failure mode log: paralegal lead. Performance report: legal operations analyst. Knowledge transfer: [calendar date].' Completed in 85 minutes.",
        },
        {
          title: "Template gap identification — peer review",
          body: "A healthcare system's pilot design team completed a template for an AI scheduling pilot. A peer reviewer from a different department reviewed the template and identified two gaps: success criterion 2 ('improve scheduler satisfaction') had no baseline measurement planned ('we assumed they were unhappy'), and the control condition was specified as 'compare to current scheduling' without defining what 'current scheduling' meant or how it would be measured. Both gaps were closed before pilot kickoff: satisfaction baseline measured in week 1, and 'current scheduling' defined as 'manual scheduling by same team for equivalent appointment types not in the pilot scope.' The peer review prevented two measurement ambiguities from becoming go/no-go decision disputes.",
        },
        {
          title: "Template evolution after three pilots",
          body: "A financial services firm reviewed their pilot design template after three AI pilot cycles. Improvement 1: added a minimum sample size specification to the timeline section (missing from the original template, which had caused one pilot to end prematurely based on insufficient data). Improvement 2: added a vendor training scope specification to the scope section (missing from original, which had caused the adoption rate inflation issue identified in their second pilot). Improvement 3: added a 'contract negotiating inputs' section to the documentation plan (not in the original template; the connection to contract negotiation had been made informally rather than formally). Version 2 of the template incorporated all three improvements and was used for the firm's next five pilot cycles without further modification.",
        },
      ],
    }),
  ],
  quiz: [
    {
      q: "What is the primary distinction between a well-designed AI pilot and an extended evaluation?",
      options: [
        "A pilot is paid for by the vendor; an extended evaluation is paid for by the buyer",
        "A pilot has pre-agreed success criteria, a fixed timeline, and a mandatory go/no-go decision; an extended evaluation is indefinite",
        "A pilot uses live production data; an extended evaluation uses synthetic data",
        "A pilot requires a signed legal agreement; an extended evaluation is informal",
      ],
      correct: 1,
      correctFeedback: "Correct. The defining characteristics of a pilot are: pre-agreed success criteria with numerical thresholds, a fixed timeline, and a mandatory go/no-go decision at the end. Without these three elements, the pilot is an extended evaluation that produces relationships rather than evidence.",
      wrongFeedback: "The distinction between a pilot and an extended evaluation is structural: pre-agreed success criteria, fixed timeline, and mandatory go/no-go decision. Payment arrangements, data type, and legal formality are secondary considerations.",
    },
    {
      q: "A pilot produces the outcome 'we learned a lot and need more time to evaluate.' What does this outcome indicate about the pilot design?",
      options: [
        "The AI technology is not mature enough for enterprise deployment",
        "The pilot was well-designed but the AI underperformed expectations",
        "The pilot lacked pre-agreed success criteria — the outcome reveals a design flaw, not an AI capability conclusion",
        "The pilot team needs more training before a go/no-go decision can be made",
      ],
      correct: 2,
      correctFeedback: "Correct. 'We learned a lot and need more time' is the output of a pilot without pre-agreed success criteria. When there is no standard against which to judge the pilot outcome, any outcome can be framed as learning. The result is a relationship, not a procurement decision.",
      wrongFeedback: "'We learned a lot and need more time' is a pilot design failure — it indicates the pilot lacked pre-agreed success criteria. With clear success criteria, the pilot either met them (go) or did not (no-go or conditional go). There is no 'learning but undecided' outcome in a well-designed pilot.",
    },
    {
      kind: "order",
      q: "Order these pilot design activities in the correct sequence before pilot kickoff:",
      items: [
        "Define success criteria in SMTC format with measurement methods and thresholds",
        "Measure the baseline using the same method that will be used for pilot measurement",
        "Complete the pilot design template including scope, timeline, control, and decision owner",
        "Schedule the go/no-go meeting on the calendar",
        "Brief the vendor on the pilot design and confirm vendor agreement",
      ],
      prompt: "Drag to arrange in the correct sequence",
      correctFeedback: "Correct. Criteria definition shapes the template, which shapes the baseline measurement design. The go/no-go meeting is scheduled after the timeline is set. The vendor briefing confirms alignment with the completed design — not the reverse.",
      wrongFeedback: "Pilot design follows an internal-to-external sequence: define criteria, build the template, measure the baseline, schedule the go/no-go, then brief the vendor. Involving the vendor before internal criteria and design are complete allows vendor input to shape the evaluation standards.",
    },
    {
      kind: "categorize",
      q: "Categorise these pilot outcomes as either 'Go — proceed to contract' or 'No-go — do not proceed':",
      categories: ["Go — proceed to contract", "No-go — do not proceed"],
      items: [
        { text: "All three success criteria met, adoption rate 84%, failure mode log completed", category: 0 },
        { text: "Two of three criteria met, third criterion missed by 0.5 percentage points, vendor has identified specific cause and fix", category: 0 },
        { text: "Two of three criteria met, third criterion missed, vendor requests 'more time to improve'", category: 1 },
        { text: "One of three criteria met, vendor argues other criteria were not appropriate for the technology", category: 1 },
        { text: "All criteria met but adoption rate 38% (below 80% target)", category: 1 },
      ],
      correctFeedback: "Correct. Go decisions require meeting criteria or a specific, time-bounded conditional path. Vague improvement requests, post-hoc criteria challenges, and below-threshold adoption rates are no-go signals regardless of technical performance.",
      wrongFeedback: "Go decisions are based on criteria met or specific conditional gaps that are time-bounded and measurable. 'More time' requests, retrospective criteria challenges, and adoption failures are no-go signals — adoption failure means the AI will not deliver value at scale even if technical performance is strong.",
    },
    {
      q: "Why should the go/no-go meeting date be scheduled before the pilot begins rather than at the end of the measurement period?",
      options: [
        "To ensure the vendor has adequate notice to prepare their performance summary",
        "To prevent the sunk cost effect — once a team has invested significant time in a pilot, they are psychologically disposed to find success",
        "To comply with standard procurement governance timelines",
        "To ensure the decision owner's calendar is available",
      ],
      correct: 1,
      correctFeedback: "Correct. A go/no-go meeting scheduled at the start of a pilot establishes the decision standard at a point when no sunk cost has accumulated. A meeting scheduled at the end of a pilot is subject to the sunk cost effect: teams who have invested weeks in a pilot are psychologically disposed to favour a go outcome regardless of the evidence.",
      wrongFeedback: "The primary reason for scheduling the go/no-go meeting before the pilot begins is to establish the decision standard before sunk cost accumulates. The longer a team invests in a pilot, the more psychologically difficult it becomes to make a no-go decision — even when the evidence supports it.",
    },
    {
      q: "What is the correct formula for setting a performance warranty threshold from pilot measurement data?",
      options: [
        "Set the threshold at the pilot average performance — representing typical expected performance",
        "Set the threshold at the pilot peak performance — requiring the vendor to maintain their best observed performance",
        "Set the threshold at 90% of pilot peak performance — accounting for production variability while being grounded in observed evidence",
        "Set the threshold at the industry benchmark for the AI category — using market standards rather than pilot data",
      ],
      correct: 2,
      correctFeedback: "Correct. 90% of pilot peak performance is the recommended threshold formula: it is grounded in observed evidence (not market benchmarks), accounts for the pilot-to-production gap and model variation, and is not punitive relative to the vendor's demonstrated capability.",
      wrongFeedback: "The performance warranty threshold should be set at 90% of the pilot peak performance. This is grounded in evidence (the pilot measurement), accounts for production variability (the 10% buffer), and is not punitive (the vendor has demonstrated they can achieve the underlying performance). Average performance sets the bar too low; peak performance is too demanding.",
    },
  ],
});
