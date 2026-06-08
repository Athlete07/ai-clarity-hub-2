import { buildChapter, buildSection, s, x } from "../concepts-pb4-helpers";

export const chapter07RoadmapAiFeatures = buildChapter({
  slug: "pb7-roadmap-ai-features",
  number: 7,
  shortTitle: "Roadmap AI Features",
  title: "Roadmap for AI Features",
  readingMinutes: 29,
  summary:
    "Planning under uncertainty — the roadmapping practices that work for AI products, where timelines are unpredictable and quality is probabilistic",
  keyTakeaway:
    "AI roadmaps gate on eval results and data readiness, not calendar dates. PMs who sequence foundation (eval, observability, data) before features, plan scenario bands instead of single deadlines, and name technical debt categories avoid the prototype-to-production cliff that kills AI programs.",
  pmCallout:
    "As a PM: stop committing AI features to Q3 ship dates before eval infrastructure exists. Roadmap milestones should be '≥90% golden-set task completion' and 'data pipeline live' — not 'demo ready.' Confidence increases each quarter; fantasy dates do not.",
  sections: [
    buildSection({
      number: "7.1",
      title: "Why AI roadmaps are different",
      subtitle: "Model quality isn't binary, data takes time, and evaluation adds cycles that don't exist in conventional software",
      take: "AI roadmaps differ from conventional software roadmaps because delivery isn't done when code ships — it's done when quality crosses a threshold on representative data. Data labelling, eval infrastructure, model iteration, and safety review add cycles with uncertain duration that calendar-based planning ignores.",
      why: "PMs who copy SaaS roadmap templates for AI promise features on dates they can't control. Stakeholders lose trust when 'Q2 AI search' slips three quarters. AI-native roadmapping sets expectations around quality gates, not ship parties.",
      paragraphs: [
        [
          s("Code complete ≠ feature ready for AI. "),
          x(
            "Conventional: feature ships when eng merges PR. AI: feature ships when eval passes threshold on golden set AND shadow traffic AND legal signs off.",
            "Roadmap milestone language must change: 'eval gate passed' not 'sprint 14 complete.'",
          ),
          s(" PMs who conflate code complete with launch ready cause predictable slips."),
        ],
        [
          s("Data and eval are parallel workstreams, not downstream tasks. "),
          x(
            "Golden set creation, labelling pipelines, and eval harness often take as long as model integration — sometimes longer.",
            "Roadmap must show data/eval on the critical path from day one, not as 'week before launch' tasks.",
          ),
          s(" The silent killer of AI roadmaps is data readiness assumed, not scheduled."),
        ],
        [
          s("Uncertainty is structural, not a planning failure. "),
          x(
            "First model attempt may hit 70% accuracy; need three iteration cycles to reach 88%. Duration unknown until attempt one finishes.",
            "Honest roadmaps communicate bands and gates — not false precision.",
          ),
          s(" Leadership respects PMs who name uncertainty; they fire PMs who hide it until the miss."),
        ],
      ],
      examples: [
        {
          title: "Q2 commit — slipped to Q4, trust damaged",
          body: "Roadmap promised 'AI contract review' in Q2 based on eng estimate. No eval workstream scheduled. Q2: prototype at 71% accuracy. Q4: finally passed 85% gate. Sales had promised Q2 to three enterprise accounts. PM retro: roadmap should have shown eval iteration, not calendar ship.",
        },
        {
          title: "Dual-track roadmap — code and eval visible",
          body: "PM split roadmap: eng track (integration, UI) and quality track (golden set, eval, iteration). Leadership saw both. When model iteration needed extra cycle, quality track extended without 'eng delay' narrative. Transparency preserved credibility.",
        },
        {
          title: "Zero-date roadmap experiment",
          body: "One quarter, PM removed ship dates from AI items; milestones were eval gates only. Feature shipped when ready — 6 weeks 'late' by old calendar but highest-quality AI launch to date. Team adopted gate-based planning permanently.",
        },
      ],
    }),
    buildSection({
      number: "7.2",
      title: "The AI feature lifecycle",
      subtitle: "Discovery → data → prototype → eval → productionise → monitor → iterate — the stages that replace the standard sprint model",
      take: "AI features move through seven stages: discovery (problem validation), data (sources and labelling), prototype (model integration), eval (quality measurement), productionise (infra, guardrails, fallback), monitor (live quality signals), and iterate (feedback loop). Each stage has distinct exit criteria — skipping stages causes production failures.",
      why: "Teams that jump from prototype to production skip eval and productionise — the two stages that catch demo-to-production gaps. PMs who map lifecycle stages set correct sprint expectations and staffing.",
      paragraphs: [
        [
          s("Discovery and data precede prototype — always. "),
          x(
            "Discovery exit: automation suitability test passed, opportunity sized, baseline measured. Data exit: sources identified, labelling plan approved, golden set started.",
            "Prototype without data = pretty UI on random model outputs.",
          ),
          s(" PM blocks prototype sprint until discovery and data gates pass."),
        ],
        [
          s("Eval is a stage, not a launch-week activity. "),
          x(
            "Eval exit: primary metric ≥ threshold on golden set, regression suite automated, shadow mode results reviewed.",
            "Productionise exit: latency SLO met, fallback wired, monitoring live, runbook written.",
          ),
          s(" Two full stages between 'works in notebook' and 'works for users.'"),
        ],
        [
          s("Monitor and iterate are post-launch roadmap items. "),
          x(
            "Roadmap quarter after launch: drift detection, golden set refresh, fine-tune from feedback, quality threshold raise.",
            "AI features are never 'done' — roadmap includes continuous improvement budget.",
          ),
          s(" PMs who budget only launch underestimate total cost of AI ownership."),
        ],
      ],
      examples: [
        {
          title: "Skipped eval stage — public embarrassment",
          body: "Team rushed prototype to production in 6 weeks. Skipped formal eval. Launch week: viral examples of hallucinated product specs. Lifecycle retro added mandatory eval stage with 2-week minimum. PM lifecycle checklist now in Confluence.",
        },
        {
          title: "Data stage caught scope reduction early",
          body: "Discovery approved FAQ bot. Data stage revealed: only 200 labelled Q&A pairs available, need 2K for target quality. PM descoped to top-50 FAQ subset for v1. Honest lifecycle gating prevented overpromising.",
        },
        {
          title: "Iterate stage funded from ROI proof",
          body: "Post-launch monitor showed 83% containment — below 88% target but above 70% baseline. ROI positive. PM secured Q+1 iterate budget for fine-tune. Lifecycle framing made continuation obvious, not defensive.",
        },
      ],
    }),
    buildSection({
      number: "7.3",
      title: "Gating on eval results",
      subtitle: "Using quality thresholds as roadmap milestones rather than calendar dates — what shipped means in an AI context",
      take: "Eval-gated roadmaps define milestones as quality achievements: '≥85% task completion on golden set,' 'shadow mode 7 days with <2% hallucination rate,' 'fallback rate <20%.' Calendar dates attach only after gates pass — or as outer bounds, not commitments.",
      why: "Date-gated roadmaps force launches below quality threshold. Eval-gated roadmaps let PMs say no to premature ship without looking like they missed a deadline — they missed a quality bar, which is the right reason.",
      paragraphs: [
        [
          s("Define gate criteria in roadmap, not in launch checklist. "),
          x(
            "Roadmap item: 'Support AI v1 — Gate: 88% containment on 500-ticket golden set.' Visible to leadership from planning.",
            "Gate failure = extend iteration, not blame eng velocity.",
          ),
          s(" Gates are agreed before build — not negotiated under launch pressure."),
        ],
        [
          s("Shadow mode is a standard pre-GA gate. "),
          x(
            "Run model on live traffic without user exposure; measure quality and latency on real distribution. Gate: 7–14 days shadow with metrics within band.",
            "Catches golden-set-overfitting — model aces test set, fails production queries.",
          ),
          s(" PM schedules shadow mode as explicit roadmap phase with duration."),
        ],
        [
          s("Partial launch gates enable phased roadmaps. "),
          x(
            "Gate for beta: 80% accuracy on English only. Gate for GA: 85% on English + 75% on Spanish.",
            "Phased gates let roadmap show progress without binary ship/no-ship.",
          ),
          s(" Leadership sees milestone progression even when full GA gate isn't met."),
        ],
      ],
      examples: [
        {
          title: "Eval gate blocked bad GA — CEO thanked PM",
          body: "Sales demanded GA for AI pricing assistant. Eval gate: 92% quote accuracy. Pre-GA eval: 84%. PM held gate; CEO backed quality bar. Competitor launched similar feature with public errors 3 weeks later. Gate discipline became company story.",
        },
        {
          title: "Shadow mode caught distribution shift",
          body: "Golden set accuracy 91%. Shadow mode week 1: 76% on live queries — users asked questions unlike training data. Gate failed. PM extended data collection stage 3 weeks. Shadow gate prevented visible launch failure.",
        },
        {
          title: "Phased gates on roadmap slide",
          body: "Roadmap showed: Beta gate (80%, English) ✓ Q1. GA gate (85%, multilingual) → Q2 target. Q2 missed GA gate; extended to Q3. Board saw gate progress, not 'delayed project.' Eval-gated communication worked.",
        },
      ],
    }),
    buildSection({
      number: "7.4",
      title: "The prototype trap",
      subtitle: "Why AI prototypes that impress in demos routinely fail in production — and how to build roadmap checkpoints that catch it",
      take: "The prototype trap: a demo using cherry-picked prompts, a frontier model, and no latency/cost constraints looks launch-ready but fails on real traffic volume, edge cases, and unit economics. Roadmap checkpoints after prototype must include representative eval, load testing, and cost modelling — not stakeholder applause.",
      why: "Executives who see a great demo approve roadmap acceleration. PMs who don't build anti-prototype-trap gates ship demos to production and destroy credibility.",
      paragraphs: [
        [
          s("Demos optimise for impression, not measurement. "),
          x(
            "Demo: hand-picked queries, human-in-the-loop hidden, unlimited API budget, no failure cases shown.",
            "Checkpoint: 'demo script evaluated' is not a gate. Gate: blind eval on 200 held-out cases.",
          ),
          s(" PM separates demo milestones from production milestones on roadmap."),
        ],
        [
          s("Prototype trap checklist on roadmap. "),
          x(
            "After prototype: (1) eval on non-demo queries, (2) p95 latency on production infra, (3) cost per request at expected volume, (4) failure mode review, (5) legal data check.",
            "Any fail = prototype stage extended, not production sprint started.",
          ),
          s(" Checklist is 1-page; goes in roadmap as 'prototype validation gate.'"),
        ],
        [
          s("Manage stakeholder demo expectations explicitly. "),
          x(
            "Before demo: 'This shows capability direction. Production quality and timeline depend on eval gates below.' Show roadmap gates slide immediately after demo.",
            "Prevents 'I saw it work — why isn't it live?' conversation.",
          ),
          s(" Demo is discovery artefact, not shipping evidence."),
        ],
      ],
      examples: [
        {
          title: "All-hands demo — production reality 48% accuracy",
          body: "CEO demoed flawless AI research assistant. Roadmap accelerated to Q2 ship. Prototype validation gate: 48% on held-out research queries. PM showed demo vs eval gap in leadership meeting. Roadmap reset to eval-first. Prototype trap caught before eng built production UI.",
        },
        {
          title: "Cost model gate killed unviable feature",
          body: "Prototype used GPT-4 for every query — demo cost ignored. Validation gate: $0.18/query at projected volume = negative margin. PM descoped to hybrid routing. Prototype trap checklist saved unit economics.",
        },
        {
          title: "Demo + gates slide — board pattern",
          body: "PM standardised board updates: 3-minute demo, then immediate 'production gates status' slide. Board learned to ask 'which gates passed?' not 'when ship?' Culture shift reduced prototype trap pressure.",
        },
      ],
    }),
    buildSection({
      number: "7.5",
      title: "Dependency mapping for AI features",
      subtitle: "Model, data, infrastructure, eval framework, safety review — the non-code dependencies that slip roadmaps",
      take: "AI feature dependencies extend beyond engineering: model access and licensing, labelled data availability, vector DB / GPU infra, eval harness, observability stack, legal/privacy review, red-team clearance, and design for failure states. Roadmap dependency maps make these visible on the critical path.",
      why: "Roadmaps slip when eng is 'done' but legal hasn't approved data use or eval tooling doesn't exist. PM-owned dependency maps prevent 'waiting on unknown' from becoming a 6-week hole.",
      paragraphs: [
        [
          s("Dependency categories standard across AI features. "),
          x(
            "Model: API access, fine-tune pipeline, version pinning. Data: sources, labelling, governance approval. Infra: serving, caching, monitoring. Quality: golden set, eval automation. Safety: red-team, legal, fallback design.",
            "PM template dependency map with these five columns for every AI roadmap item.",
          ),
          s(" Missing column = missing conversation with that function."),
        ],
        [
          s("External dependencies need owner and escalation date. "),
          x(
            "'Vendor fine-tune API access — owner: eng lead, escalate if not ready by March 1.'",
            "External deps on critical path get weekly status in PM roadmap review.",
          ),
          s(" TBD owners are roadmap red flags."),
        ],
        [
          s("Dependency completion ≠ feature completion. "),
          x(
            "All deps green + eval gate passed = launch candidate. Deps green but eval failed = iterate, don't launch.",
            "Roadmap shows deps and gates as separate rows — both must be green.",
          ),
          s(" Prevents 'infra is ready so we ship' when quality isn't."),
        ],
      ],
      examples: [
        {
          title: "Legal dependency — 8-week slip made visible day 1",
          body: "Dependency map flagged: HIPAA BAA with model vendor — owner legal, 6–8 week timeline. PM set roadmap outer bound accordingly. Legal delivered week 7. No surprise slip — dependency was on slide from sprint 0.",
        },
        {
          title: "Eval harness dependency blocked parallel work",
          body: "Eng finished integration; eval harness not built — couldn't measure quality. Dependency map showed eval framework as critical path item owned by platform team. PM escalated week 4; harness ready week 6. Map made bottleneck visible early.",
        },
        {
          title: "Red-team dependency on roadmap",
          body: "High-risk hiring AI feature: red-team clearance on critical path. Security team booked 2-week window in Q3 roadmap. Feature didn't slip — red-team was scheduled resource, not surprise request.",
        },
      ],
    }),
    buildSection({
      number: "7.6",
      title: "Communicating AI timelines to leadership",
      subtitle: "How to set expectations without overpromising on quality or underpromising on ambition",
      take: "Leadership communication for AI roadmaps uses: outer-bound dates (not commitments), eval gate status as progress indicator, scenario timelines (optimistic/base/conservative), explicit dependency risks, and comparison to what confidence each quarter buys — framing the roadmap as increasing certainty, not just shipping features.",
      why: "Under-communicate and leadership is surprised by slips. Over-promise and PM loses credibility permanently. The right framing makes AI uncertainty a planning feature, not an excuse.",
      paragraphs: [
        [
          s("Progress = gates passed, not sprints completed. "),
          x(
            "Quarterly update: 'Support AI: discovery ✓, data 80% complete, prototype ✓, eval gate 76% toward 88% target, shadow mode scheduled Q+1.'",
            "Leadership sees movement even when ship date moves.",
          ),
          s(" Gate progress language trains org to ask right questions."),
        ],
        [
          s("Outer bounds, not commitments. "),
          x(
            "'If eval gate passes by May, GA in June. If iteration needed, GA slides to August.' Both outcomes presented upfront.",
            "Commitment is to quality bar, not calendar.",
          ),
          s(" Finance can model on conservative bound; sales plans on base."),
        ],
        [
          s("Celebrate gate passes, not just launches. "),
          x(
            "All-hands shout-out: 'Team passed 88% eval gate on contract AI — productionise sprint starts Monday.'",
            "Reinforces that quality achievement is the milestone culture.",
          ),
          s(" Reduces pressure to skip gates for launch party."),
        ],
      ],
      examples: [
        {
          title: "CEO quarterly — gates slide became standard",
          body: "PM added 'AI confidence dashboard' to CEO review: gate status, deps, scenario dates. CEO stopped asking 'why late?' and started asking 'what unblocks next gate?' Communication framework reduced timeline conflict 80%.",
        },
        {
          title: "Sales protected from overpromise",
          body: "PM gave sales conservative outer bounds; internal roadmap used base case. Two enterprise deals closed on 'beta Q3, GA Q4 when eval passes' — honest timeline. Zero churn from missed AI date promises.",
        },
        {
          title: "Board scenario timelines",
          body: "Board deck showed three AI features with optimistic/base/conservative GA dates tied to eval assumptions. Board approved base-case capital plan. When one feature hit conservative path, no emergency board meeting — scenario was pre-communicated.",
        },
      ],
    }),
    buildSection({
      number: "7.7",
      title: "Sequencing AI investments",
      subtitle: "Foundation before features — why model infrastructure, observability, and eval tooling must precede the user-facing capability",
      take: "AI roadmap sequencing rule: platform investments (eval harness, observability, data pipelines, model routing, safety review process) precede user-facing AI features. Building features on ad-hoc eval and no monitoring creates feature debt that compounds — each new feature reinvents infrastructure.",
      why: "PMs under pressure ship the visible feature first. Six months later, five features share no eval framework and nobody knows which model version is in production. Foundation-first sequencing is slower initially, faster at scale.",
      paragraphs: [
        [
          s("Foundation roadmap items are features for internal customers. "),
          x(
            "Eval platform serves all AI PMs. Observability serves on-call. Data pipeline serves fine-tune program. Frame as enabling portfolio, not overhead.",
            "One quarter of foundation saves four quarters of per-feature reinvention.",
          ),
          s(" PM advocates for foundation line items with portfolio ROI story."),
        ],
        [
          s("Minimum foundation before first user-facing AI ship. "),
          x(
            "Minimum: automated eval on golden set, production logging of inputs/outputs, model version tracking, cost dashboard, basic fallback pattern.",
            "Roadmap: foundation Q1, first feature Q2 — not both in Q1 with foundation cut.",
          ),
          s(" Cutting foundation to hit feature date borrows from incident budget."),
        ],
        [
          s("Sequence features by data readiness and risk. "),
          x(
            "First: internal dogfood, read-only, rich existing data. Later: customer-facing, write actions, sparse data.",
            "Each success builds data flywheel for harder features.",
          ),
          s(" Roadmap order reflects learning curve, not stakeholder loudness."),
        ],
      ],
      examples: [
        {
          title: "Eval platform quarter — accelerated 4 features",
          body: "Company invested one quarter in shared eval platform before shipping any customer AI. First feature took 10 weeks; fourth took 4 weeks — reused eval, logging, routing. PM portfolio ROI: foundation quarter paid back in feature 3.",
        },
        {
          title: "Skipped foundation — five features, zero observability",
          body: "Rushed three AI features without shared infra. Model version unknown during incident. No golden sets. PM emergency roadmap: 'AI platform quarter' to untangle debt. Foundation skip cost 2× the time it would have taken upfront.",
        },
        {
          title: "Dogfood-first sequencing",
          body: "Roadmap: Q1 internal support AI (read-only, support ticket data). Q2 customer FAQ (RAG on docs). Q3 customer agent (write tools). Each quarter built data and eval maturity. PM defended sequence against sales pressure for customer agent first.",
        },
      ],
    }),
    buildSection({
      number: "7.8",
      title: "Technical debt in AI systems",
      subtitle: "Prompt debt, model debt, data pipeline debt — the categories that compound silently and then surface as incidents",
      take: "AI technical debt categories: prompt debt (unmaintained prompt templates across features), model debt (unpinned versions, undeclared model swaps), data pipeline debt (brittle ETL, stale embeddings), eval debt (no regression tests, stale golden sets), and orchestration debt (hardcoded chains that should be configurable). Roadmap must allocate paydown quarters.",
      why: "AI debt doesn't show in SonarQube. It surfaces as quality cliffs, incident mysteries, and 'we can't upgrade the model because nothing is tested.' PMs who name debt categories get paydown on the roadmap.",
      paragraphs: [
        [
          s("Prompt debt is the most common and least tracked. "),
          x(
            "47 prompt variants across 12 features, no central registry, unknown which production uses. Model upgrade breaks 6 features silently.",
            "Roadmap item: prompt registry + version control + regression eval per prompt.",
          ),
          s(" PM inventories prompt debt in quarterly planning."),
        ],
        [
          s("Model debt creates audit and debug risk. "),
          x(
            "Production runs 'latest' API model; behaviour shifts on vendor update; no changelog. Regulator asks 'what model made this decision?' — no answer.",
            "Paydown: pin versions, document in release manifest, re-eval on upgrade.",
          ),
          s(" Model debt is compliance debt in regulated domains."),
        ],
        [
          s("Allocate 20% roadmap capacity to AI debt paydown. "),
          x(
            "One sprint per quarter: golden set refresh, prompt cleanup, eval automation, embedding reindex.",
            "Prevents debt compound interest — each ignored quarter doubles paydown cost.",
          ),
          s(" Debt paydown is feature velocity insurance."),
        ],
      ],
      examples: [
        {
          title: "Prompt debt incident — wrong tone at scale",
          body: "Vendor model update shifted response style. 23 prompt templates not regression-tested. Customer-facing tone broke for 2 weeks before detection. PM added prompt registry and quarterly regression to roadmap. Debt paydown sprint scheduled.",
        },
        {
          title: "Stale embeddings — silent quality cliff",
          body: "RAG embeddings 14 months old; product docs updated quarterly. Retrieval quality drifted 15% before anyone noticed. Roadmap: monthly embedding refresh automation. Data pipeline debt now visible metric.",
        },
        {
          title: "Eval debt caught in audit",
          body: "Auditor asked for evidence of ongoing quality monitoring. No automated regression since launch 8 months ago. PM emergency eval debt sprint; then permanent quarterly paydown line in roadmap. Audit passed on retry.",
        },
      ],
    }),
    buildSection({
      number: "7.9",
      title: "Roadmap scenarios for AI",
      subtitle: "Planning optimistic, base, and conservative paths based on eval outcomes — scenario planning as the honest answer to AI uncertainty",
      take: "AI roadmap scenarios define three paths: optimistic (first model iteration hits gate, deps on time), base (two iteration cycles, one dep slip), conservative (three+ iterations, major data gap). Each scenario maps to feature set, date range, and resource need — letting leadership choose risk appetite explicitly.",
      why: "Single-date roadmaps are fiction. Scenario roadmaps are honest. PMs who present three paths get approval for base case and aren't fired when optimistic doesn't materialise.",
      paragraphs: [
        [
          s("Scenarios tied to eval outcomes, not wishful thinking. "),
          x(
            "Optimistic: 88% gate passed iteration 1. Base: iteration 2 by month 4. Conservative: iteration 3 + data vendor engagement, month 6.",
            "Assumptions documented: training data size, model choice, dep timelines.",
          ),
          s(" Scenario assumptions reviewable when reality diverges."),
        ],
        [
          s("Feature scope varies by scenario. "),
          x(
            "Optimistic: full multilingual GA. Base: English GA, Spanish beta. Conservative: English beta only, GA next quarter.",
            "Scope flexibility is the PM tool when eval disappoints.",
          ),
          s(" Pre-negotiated descope prevents panic cuts."),
        ],
        [
          s("Resource scenarios for portfolio planning. "),
          x(
            "Conservative case: delay feature B to fund iteration on feature A. Portfolio PM trades across scenario bands.",
            "Prevents thrashing — decisions pre-made for each path.",
          ),
          s(" Scenarios are decision trees, not just date ranges."),
        ],
      ],
      examples: [
        {
          title: "Three-scenario board approval",
          body: "PM presented contract AI scenarios: optimistic GA June (88% iteration 1), base GA August (iteration 2), conservative beta August / GA November (data labelling). Board approved base budget. Actual: base path. No credibility damage.",
        },
        {
          title: "Conservative path triggered — pre-planned descope",
          body: "Eval iteration 3 still at 81% vs 85% gate. Conservative scenario activated: shipped read-only summary, deferred auto-redline to Q+1. Descope was on scenario slide since planning — stakeholders not surprised.",
        },
        {
          title: "Optimistic path — celebrated, not expected",
          body: "Support AI hit gate iteration 1 — optimistic scenario. PM communicated as upside surprise, not baseline skill. Team celebrated; roadmap credibility increased because optimistic wasn't the promise.",
        },
      ],
    }),
    buildSection({
      number: "7.10",
      title: "PM decision lens: the AI roadmap as a confidence-building exercise",
      subtitle: "How to structure quarterly planning so each cycle increases quality confidence rather than just shipping more features",
      take: "Quarterly AI planning outputs: gate status per feature, confidence level (low/medium/high) for each gate, foundation investment progress, debt paydown allocation, and scenario selection for next quarter. Success metric for the roadmap process is increased quality confidence — not feature count shipped.",
      why: "Roadmaps that only count shipped features incentivise gate-skipping. Confidence-building roadmaps incentivise the behaviour that makes AI programs sustainable.",
      paragraphs: [
        [
          s("Confidence score per roadmap item. "),
          x(
            "Low: prototype only, no eval. Medium: eval at 75% of gate. High: gate passed, productionise in progress.",
            "Leadership sees portfolio confidence distribution — not just green/yellow/red dates.",
          ),
          s(" PM reports confidence trend quarter over quarter."),
        ],
        [
          s("Quarterly planning ritual: gate review first. "),
          x(
            "90-minute session: each AI PM presents gate status, blockers, scenario path, next quarter ask. No new features approved without gate plan for in-flight items.",
            "Prevents portfolio bloat — finish or kill before starting.",
          ),
          s(" Confidence-building planning caps WIP on unproven AI bets."),
        ],
        [
          s("Kill criteria pre-committed. "),
          x(
            "'If not at 70% of gate after 3 iteration cycles, pause and reassess.' Written in roadmap, agreed with leadership.",
            "Kill decisions aren't failures — they're portfolio hygiene.",
          ),
          s(" PMs with kill criteria earn trust to start ambitious bets."),
        ],
      ],
      examples: [
        {
          title: "Confidence dashboard — portfolio view",
          body: "PM org built roadmap confidence view: 2 high, 4 medium, 1 low confidence items. CEO reallocated eng from low-confidence item (kill candidate) to high-confidence productionise. Portfolio quality improved; fewer simultaneous bets.",
        },
        {
          title: "Kill decision — saved 2 eng quarters",
          body: "Legal doc AI stuck at 68% after 3 iterations — below 70% kill line pre-agreed with leadership. PM killed feature, reallocated to support AI (high confidence). Kill criteria prevented sunk-cost spiral.",
        },
        {
          title: "Quarterly confidence trend — board metric",
          body: "Board asked for 'AI program health' metric. PM reported average gate confidence across portfolio: 42% Q1 → 61% Q2 → 78% Q3. Trend told story better than feature count. Board increased AI budget on evidence of maturing program.",
        },
      ],
    }),
  ],
  quiz: [
    {
      q: "Why are AI roadmaps fundamentally different from conventional software roadmaps?",
      options: [
        "AI features don't need roadmaps.",
        "AI delivery is gated on quality thresholds, data readiness, and eval — not just code completion.",
        "AI roadmaps should only include engineering tasks.",
        "AI features always ship faster than conventional software.",
      ],
      correct: 1,
      correctFeedback:
        "Right. AI roadmaps gate on eval results and data — calendar ship dates alone mislead.",
      wrongFeedback:
        "AI delivery requires quality gates and data workstreams. Re-read sections 7.1 and 7.2.",
    },
    {
      q: "What is the 'prototype trap' in AI roadmapping?",
      options: [
        "Prototypes cost too much to build.",
        "Demos using cherry-picked prompts look launch-ready but fail on real traffic, edge cases, and unit economics.",
        "Prototypes should never be shown to leadership.",
        "Prototypes are only for non-AI features.",
      ],
      correct: 1,
      correctFeedback:
        "Exactly. Great demos ≠ production quality — validation gates must follow prototype.",
      wrongFeedback:
        "Prototype trap = demo impresses, production fails. Re-read section 7.4.",
    },
    {
      q: "What should AI roadmap milestones be gated on?",
      options: [
        "Stakeholder applause after demo.",
        "Sprint velocity points completed.",
        "Eval quality thresholds and dependency readiness — not calendar dates alone.",
        "Competitor ship dates.",
      ],
      correct: 2,
      correctFeedback:
        "Right. Gate on eval results and dependencies; dates follow quality, not the reverse.",
      wrongFeedback:
        "Milestones should be eval gates and dependency completion. Re-read section 7.3.",
    },
    {
      kind: "order",
      q: "Put the AI feature lifecycle stages in correct order.",
      prompt: "Drag to arrange from first stage (top) to last (bottom).",
      items: [
        "Discovery — problem validation and suitability test.",
        "Data — sources, labelling, golden set started.",
        "Prototype — model integration.",
        "Eval — quality measurement against thresholds.",
        "Productionise — infra, guardrails, fallback.",
        "Monitor — live quality signals.",
        "Iterate — feedback loop and improvement.",
      ],
      correctFeedback:
        "Exactly. Discovery → data → prototype → eval → productionise → monitor → iterate.",
      wrongFeedback:
        "Lifecycle order: discovery → data → prototype → eval → productionise → monitor → iterate. Re-read section 7.2.",
    },
    {
      kind: "categorize",
      q: "Match each AI roadmap concept to its category.",
      categories: ["Foundation investment", "Technical debt", "Scenario planning", "Leadership communication"],
      items: [
        { text: "Shared eval platform before first customer AI feature.", category: 0 },
        { text: "Unmaintained prompt templates across 12 features.", category: 1 },
        { text: "Optimistic/base/conservative GA dates tied to eval iterations.", category: 2 },
        { text: "Quarterly update showing gate pass status, not just ship dates.", category: 3 },
        { text: "Monthly embedding refresh automation.", category: 1 },
        { text: "Outer-bound dates with conservative case for finance.", category: 2 },
      ],
      correctFeedback:
        "Right. Foundation, debt, scenarios, and communication are distinct roadmap disciplines.",
      wrongFeedback:
        "Match items to foundation, debt, scenarios, and communication. Re-read sections 7.6–7.9.",
    },
    {
      q: "What is the strongest sequencing principle for AI roadmap investments?",
      options: [
        "Ship all customer-facing features first; build platform later.",
        "Foundation (eval, observability, data pipelines) before user-facing features.",
        "Skip eval infrastructure to accelerate first launch.",
        "Sequence by whichever stakeholder is loudest.",
      ],
      correct: 1,
      correctFeedback:
        "Right. Platform foundation enables faster, safer feature portfolio at scale.",
      wrongFeedback:
        "Foundation before features — eval, observability, data first. Re-read section 7.7.",
    },
  ],
});
