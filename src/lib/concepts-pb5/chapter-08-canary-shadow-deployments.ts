import { buildChapter, buildSection, s, x } from "../concepts-pb4-helpers";

export const chapter08CanaryShadowDeployments = buildChapter({
  slug: "pb5-canary-shadow-deployments",
  number: 8,
  shortTitle: "Canary & Shadow",
  title: "Canary & Shadow Deployments",
  readingMinutes: 27,
  summary:
    "How to de-risk AI releases with canary traffic ramps, shadow (dark) deployments, feature flags, rollout gates, blue/green patterns, automated rollback, and PM-owned playbooks — because shipping a new model is a production experiment whether you plan it or not.",
  keyTakeaway:
    "Canary and shadow deployments let you learn from real traffic before every user pays the cost of failure — canaries expose a small slice to new behaviour; shadows run the new stack in parallel without affecting users. PMs define the gates; eng wires the pipes.",
  pmCallout:
    "As a PM: never approve a model or prompt promotion without naming the canary percentage, success metrics, rollback trigger, and who can pull the kill switch at 2am. 'We'll monitor it' is not a rollout plan.",
  sections: [
    buildSection({
      number: "8.1",
      title: "Why gradual rollout matters for AI",
      subtitle: "Distributions, tail risk, and offline–online gaps",
      take: "AI changes alter output distributions in ways offline evals miss — tail queries, adversarial inputs, latency under load, and user reactions to tone shifts — so gradual rollout is how teams buy real-world evidence cheaply before committing 100% traffic to an unproven model-prompt stack.",
      why: "Big-bang AI launches convert unknown unknowns into company-wide incidents. PMs who insist on staged rollout protect users, revenue, and on-call sanity — and get faster iteration because failures are contained.",
      paragraphs: [
        [
          s("Offline eval predicts; online traffic proves. "),
          x(
            "Golden sets are sampled, static, and often cleaner than production. Online traffic includes malformed PDFs, jailbreaks, spike load, and user behaviour offline eval never models.",
            "A 2% canary on real queries finds slice regressions that 500-case offline suites miss — especially for subjective quality and safety.",
          ),
          s(" PM framing: canary is the cheapest online eval — budget it in every release plan."),
        ],
        [
          s("AI failures are often qualitative, not 500 errors. "),
          x(
            "Wrong medical framing, hallucinated pricing, sudden verbosity — metrics may stay green while trust erodes.",
            "Rollout gates need quality signals: thumbs-down rate, escalation, task completion, human review sample — not just error rate.",
          ),
          s(" Define 'stop the rollout' thresholds before launch, not when Twitter notices."),
        ],
        [
          s("Gradual rollout enables learning velocity. "),
          x(
            "Teams afraid of big-bang ship quarterly; teams with canary infra ship weekly with 1% exposure first.",
            "Shadow mode adds zero user risk while collecting comparative data — accelerates confident promotion.",
          ),
          s(" Rollout maturity is a competitive advantage for AI product teams."),
        ],
      ],
      examples: [
        {
          title: "Offline green, online red",
          body: "New RAG pipeline passed all offline faithfulness gates. Canary at 5% showed support escalation +22% on billing queries — retrieval returned FAQ not policy doc for ambiguous phrasing. PM halted ramp; fixed routing; offline suite gained 40 billing ambiguity cases. Users never saw full rollout.",
        },
        {
          title: "Big-bang model swap weekend",
          body: "Team skipped canary for 'minor' vendor migration Friday 5pm. Monday: enterprise customer demo failed on JSON tool calls. PM postmortem mandated canary minimum 48 hours on any model ID change — no waivers without VP sign-off.",
        },
        {
          title: "Canary as sales confidence",
          body: "Enterprise prospect asked 'how do you ship model updates safely?' PM showed canary dashboard with auto-rollback on faithfulness slice. Closed security review faster than feature list — operational maturity sold.",
        },
      ],
    }),
    buildSection({
      number: "8.2",
      title: "Canary deployment fundamentals",
      subtitle: "Small traffic slice, real user impact, controlled ramp",
      take: "A canary deployment routes a small percentage of production traffic to the new model, prompt, or pipeline variant while the majority stays on the known-good baseline — measuring error, latency, cost, and quality metrics at scale before increasing the percentage through defined ramp stages.",
      why: "Canaries are the default pattern for AI promotions. PMs who understand ramp stages and gate criteria prevent both premature 100% cutover and endless 1% limbo.",
      paragraphs: [
        [
          s("Canary anatomy: router, baseline, candidate, gates. "),
          x(
            "Traffic router (feature flag, load balancer, service mesh) assigns users or requests to baseline vs canary. Typically sticky per session to avoid mid-conversation model swaps.",
            "Candidate receives 1% → 5% → 25% → 50% → 100% only if gates pass at each stage.",
          ),
          s(" PM specifies ramp schedule and minimum dwell time per stage — e.g., 24h at 5%."),
        ],
        [
          s("What to measure during canary. "),
          x(
            "Required: error rate, p50/p95 latency, cost per query, primary quality metric (task completion, faithfulness sample). Slice by intent, locale, tier.",
            "Compare canary vs baseline statistically — not eyeballing dashboards.",
          ),
          s(" Pre-register success criteria: 'proceed if completion ≥ baseline - 1% AND p95 latency < 4s.'"),
        ],
        [
          s("Canary user experience tradeoffs. "),
          x(
            "Sticky assignment means some users get different quality — disclose in ToS for consumer; enterprise may require opt-in canary cohort.",
            "Internal dogfood canary (employees first) reduces external risk before customer percentage.",
          ),
          s(" PM decides internal-first vs external canary based on risk class and customer contracts."),
        ],
      ],
      examples: [
        {
          title: "1-5-25-100 ramp with auto-halt",
          body: "PM defined four-stage ramp with 24h minimum per stage. Stage 2 at 5%: German slice latency breached SLO — auto-halt froze at 5%, paged on-call. Fix applied; restarted from 1%. Full ramp took 6 days vs planned 4 — acceptable vs incident.",
        },
        {
          title: "Sticky session canary",
          body: "Random per-request canary swapped models mid-thread — jarring tone shift. PM required session-sticky routing; user complaints dropped. Lesson: AI canary isn't stateless like HTTP API version headers.",
        },
        {
          title: "Employee-only canary week",
          body: "High-risk medical summarisation ran employee canary 5 days before 1% customer traffic. Employees filed 30 failure reports into golden set. Customer canary passed first try — employee canary paid for itself.",
        },
      ],
    }),
    buildSection({
      number: "8.3",
      title: "Shadow deployments",
      subtitle: "Dark launch — learn without user impact",
      take: "Shadow deployment runs the candidate model or pipeline on duplicate copies of production traffic — logging outputs and metrics without returning them to users — enabling side-by-side comparison of latency, cost, and quality at full production volume with zero user-facing risk.",
      why: "Some changes are too risky even for 1% canary — or offline eval isn't trusted yet. PMs use shadow to gather evidence for go/no-go without betting customer experience.",
      paragraphs: [
        [
          s("Shadow vs canary: when to use which. "),
          x(
            "Shadow: zero user impact, full traffic duplication, 2x inference cost during shadow period. Canary: real user impact on slice, real behavioural metrics, lower duplicate cost.",
            "Common path: shadow to validate safety/latency → canary for user outcome metrics → full promotion.",
          ),
          s(" PM approves shadow COGS budget — shadow is not free; it's insurance priced in tokens."),
        ],
        [
          s("Shadow implementation patterns. "),
          x(
            "Async fork: respond to user from baseline; enqueue duplicate request to candidate, discard response, log diff. Sync shadow: run both, return baseline only — higher latency risk on hot path if not async.",
            "Log pairwise diffs for LLM-judge or human review sample.",
          ),
          s(" Ensure shadow cannot leak to user — routing bugs here are severity-1 incidents."),
        ],
        [
          s("Shadow success criteria. "),
          x(
            "Candidate p95 latency within 120% of baseline; cost per query within budget; LLM-judge win rate ≥ 52% on 500 sampled pairs; zero safety classifier regressions.",
            "Shadow duration: until statistical confidence — often 3–7 days at production volume.",
          ),
          s(" Document shadow conclusion in experiment registry before canary kickoff."),
        ],
      ],
      examples: [
        {
          title: "Shadow caught latency bomb",
          body: "Candidate model looked great offline. Shadow at 100% traffic showed p95 latency 3.2x baseline — only visible under concurrent load. PM rejected promotion; chose smaller quantized variant. Users never affected.",
        },
        {
          title: "Pairwise shadow review",
          body: "PM sampled 200 shadow pairs daily — baseline vs candidate outputs blinded. Week one: candidate won 48% — not ready. After prompt retune: 61% win. Canary approved with evidence trail.",
        },
        {
          title: "Shadow COGS spike",
          body: "Two-week shadow on GPT-4 class candidate cost $18K duplicate inference. PM pre-approved budget cap; shadow stopped at $15K with enough samples. Finance accepted as insurance vs outage brand cost.",
        },
      ],
    }),
    buildSection({
      number: "8.4",
      title: "Feature flags and traffic splitting",
      subtitle: "LaunchDarkly, Split, homegrown — control plane for AI",
      take: "Feature flags and traffic splitters assign users or requests to versioned AI stacks dynamically — enabling canary ramps, kill switches, segment-specific models, and instant rollback without redeploy — with PM-accessible controls when governance allows.",
      why: "Redeploying containers to rollback a model is too slow for AI incidents. PMs partner with eng on flag taxonomy, ownership, and who can flip production percentages.",
      paragraphs: [
        [
          s("Flag types for AI products. "),
          x(
            "Release flags: canary percentage for new model. Config flags: prompt version, retrieval top-k. Ops flags: disable tool calling, force fallback model. Kill switches: route all traffic to safe minimal model.",
            "Name flags clearly: ai.copilot.model_v4_canary_pct not temp_jason_test.",
          ),
          s(" PM maintains flag catalog in release docs — stale flags are production debt."),
        ],
        [
          s("Targeting dimensions. "),
          x(
            "Split by user ID hash (consistent), account tier, geography, internal email domain, request intent classifier.",
            "Enterprise 'no canary' exemption in contract → flag targeting rule, not manual exception.",
          ),
          s(" Document targeting in PRD — eng implements; PM verifies in staging."),
        ],
        [
          s("Governance and audit. "),
          x(
            "Who can change production flag values? Approval workflow for >10% changes? Audit log of flips?",
            "PM self-serve in staging; production changes via change ticket or paired approval.",
          ),
          s(" Quarterly flag cleanup — orphaned flags caused 3% traffic on deprecated model at one SaaS company."),
        ],
      ],
      examples: [
        {
          title: "Kill switch saved Black Friday",
          body: "New model canary at 10% during traffic spike caused timeout cascade. PM flipped kill switch flag to 0% canary — 30 seconds, no deploy. Baseline absorbed load; incident contained. Postmortem: canary max capped at 5% during peak events.",
        },
        {
          title: "Enterprise exempt targeting",
          body: "MSA required 30-day notice before model behaviour change. Flag rule: enterprise_account=true → 100% baseline until notice period ends. PM automated notice email trigger with flag date — legal approved pattern.",
        },
        {
          title: "Stale flag incident",
          body: "Engineer left canary flag at 3% for 'quick test' — forgotten for 4 months. 3% users on unmaintained experimental prompt. PM instituted monthly flag audit in product review; removed 22 stale flags.",
        },
      ],
    }),
    buildSection({
      number: "8.5",
      title: "Rollout gates and SLOs",
      subtitle: "Objective proceed/halt criteria",
      take: "Rollout gates are pre-registered pass/fail rules — latency SLOs, error budgets, quality metric floors, safety classifier ceilings — evaluated automatically between canary stages, removing subjective 'looks fine' debates and giving on-call clear halt authority.",
      why: "Without gates, every ramp becomes a meeting. PMs define gates with eng before shadow starts — gates are product policy encoded in monitoring.",
      paragraphs: [
        [
          s("Gate categories. "),
          x(
            "Availability: error rate, timeout rate. Performance: p95 latency, tokens per second. Economics: cost per session. Quality: task completion, faithfulness sample, thumbs-down. Safety: moderation block rate, PII leak detector.",
            "Hard gates block ramp; soft gates warn and require PM sign-off.",
          ),
          s(" Publish gate table in release ticket — approvers see same numbers."),
        ],
        [
          s("SLO design for AI — worse than linear. "),
          x(
            "Latency SLOs must include retrieval + generation + guardrails — not model API alone. Quality SLOs use sampled online eval, not 100% LLM-judge (too expensive).",
            "Error budget: if monthly quality budget burned in canary, pause feature releases until recovery.",
          ),
          s(" PM negotiates SLO realism with eng — impossible SLOs force gate bypass."),
        ],
        [
          s("Statistical rigor at small percentages. "),
          x(
            "At 1% canary, quality metrics are noisy — use Bayesian confidence or minimum sample size before halt.",
            "Avoid halting on noise; avoid ignoring real 5% regressions — eng picks test design, PM picks business threshold.",
          ),
          s(" 'Minimum 10K canary requests before stage 2' is a valid PM requirement."),
        ],
      ],
      examples: [
        {
          title: "Automated gate halt",
          body: "Stage 3 ramp auto-blocked: canary p95 latency 4.8s vs 3.1s baseline — gate max 3.5s. PM received Slack with dashboard link; chose optimize before resume vs accept latency for quality win. Decision in 1 hour, not emergency war room.",
        },
        {
          title: "Soft gate override documented",
          body: "Thumbs-down rate slightly above soft gate but task completion +4%. PM signed waiver with 72h enhanced monitoring — documented in experiment registry. Transparent override vs silent ignore.",
        },
        {
          title: "Safety hard gate",
          body: "Canary triggered hard gate: output moderation block rate 2x baseline — auto-zero canary. Investigation: new model more verbose, tripping competitor mention filter. PM never debated ramp — policy was pre-agreed.",
        },
      ],
    }),
    buildSection({
      number: "8.6",
      title: "Blue/green for AI stacks",
      subtitle: "Parallel environments and instant cutover",
      take: "Blue/green deployment maintains two full production-capable stacks — blue (live) and green (idle candidate) — switching traffic atomically when green passes validation, ideal for index swaps, model server cutovers, and rollback by flipping back, though AI stacks are heavier than static web apps.",
      why: "PMs choose blue/green when canary percentage is impractical — e.g., swapping entire vector index or regional model endpoint — and need instant revert without gradual ramp.",
      paragraphs: [
        [
          s("Blue/green vs canary tradeoff. "),
          x(
            "Blue/green: 0% or 100% traffic — fast cutover, double infra during transition. Canary: gradual, lower blast radius, slower.",
            "AI often combines: blue/green for index + canary for model within green stack.",
          ),
          s(" PM asks: 'Is failure binary (index corrupt) or gradual (model quality)?' — picks pattern."),
        ],
        [
          s("Validation before flip. "),
          x(
            "Green stack receives synthetic probes + shadow traffic + internal dogfood before router switch.",
            "Smoke tests alone insufficient — run golden set against green endpoint.",
          ),
          s(" Flip checklist: green eval pass, on-call staffed, rollback flip tested in staging."),
        ],
        [
          s("AI-specific blue/green costs. "),
          x(
            "Duplicate GPU pools, dual index storage, warm model replicas — COGS doubles during parallel run.",
            "Time-box green idle period; automate teardown of blue after stable window.",
          ),
          s(" PM approves infra budget for blue/green window — often $5K–$50K for enterprise RAG."),
        ],
      ],
      examples: [
        {
          title: "Index blue/green flip",
          body: "New 40M-vector index built on green. Golden retrieval recall validated. Router flipped at Tuesday 2am low traffic — 30 second cutover. Issue found at 2:40am; flipped back to blue in 15 seconds. Canary impractical for atomic index state.",
        },
        {
          title: "Blue/green without validation",
          body: "Team flipped green model server on smoke test only. Morning EU traffic hit JSON schema failures. Rolled back. PM required golden set gate on green before any flip — same as canary criteria.",
        },
        {
          title: "Combined pattern",
          body: "Blue/green new index on green; within green, 10% canary on new reranker before 100% green promotion. PM release doc diagrammed both layers — eng and support shared same picture.",
        },
      ],
    }),
    buildSection({
      number: "8.7",
      title: "Multi-armed bandits and adaptive rollout",
      subtitle: "When the rollout itself optimizes",
      take: "Multi-armed bandit rollouts dynamically allocate more traffic to better-performing variants as evidence accumulates — useful for prompt or model selection when PMs accept automated traffic shifting within guardrails, trading statistical purity for faster convergence to the winner.",
      why: "Fixed 1-5-25-100 ramps are conservative. Bandits suit low-risk UX tweaks; PMs must set guardrails so bandits can't route majority traffic to a cheaper-but-worse model without quality floors.",
      paragraphs: [
        [
          s("Bandit basics for PMs. "),
          x(
            "Start 50/50 or N-way equal split. Algorithm (Thompson sampling, UCB) shifts traffic toward higher reward variant — reward = task completion, not just click.",
            "Exploration never drops to zero — small traffic always tests alternatives for drift.",
          ),
          s(" Bandits are product decisions — reward function encodes what you optimize."),
        ],
        [
          s("Guardrailed bandits. "),
          x(
            "Constrained bandit: never allocate >60% until 95% confidence; hard floor on faithfulness metric — if variant dips below, zero its traffic.",
            "Without guardrails, bandits optimize short-term proxy metrics and harm trust.",
          ),
          s(" PM writes reward + constraints document before eng enables bandit flag."),
        ],
        [
          s("When not to use bandits. "),
          x(
            "Regulated outputs, enterprise fixed-version contracts, safety-critical paths, low-traffic features (insufficient samples).",
            "Use fixed canary when interpretability and audit trail matter more than speed.",
          ),
          s(" Default to canary; bandit is opt-in for mature teams with strong monitoring."),
        ],
      ],
      examples: [
        {
          title: "Prompt bandit with faithfulness floor",
          body: "Four prompt variants bandit-optimized for send rate. Faithfulness floor gate zeroed variant D after 2 hours despite high send rate — it hallucinated discounts. PM reward: 70% completion, 30% send rate, hard faithfulness constraint.",
        },
        {
          title: "Bandit vs enterprise contract",
          body: "Bandit auto-shifted 78% traffic to cheaper model. Enterprise customer on fixed-quality tier saw quality dip. PM disabled bandit for enterprise segment; fixed canary only. Lesson: segment policy beats global optimization.",
        },
        {
          title: "Slow traffic bandit failure",
          body: "Feature with 200 queries/day — bandit never converged, oscillated weekly. PM reverted to manual pairwise eval monthly. Bandits need volume — PM checks sample size math first.",
        },
      ],
    }),
    buildSection({
      number: "8.8",
      title: "Automated rollback and kill switches",
      subtitle: "Machines halt faster than meetings",
      take: "Automated rollback watches canary metrics and flips traffic or flags back to baseline when gates breach — without human intervention — while kill switches let any authorised responder zero the candidate instantly; PMs define thresholds and authority before launch, not during incidents.",
      why: "At 3am, waiting for PM approval to halt a 15% canary bleeding trust is unacceptable. Pre-authorized automation and kill switches are compassion for on-call and users alike.",
      paragraphs: [
        [
          s("Auto-rollback triggers. "),
          x(
            "Examples: error rate > 2x baseline for 5 min; p95 latency > gate for 10 min; safety block rate spike; sampled faithfulness drop > 8%.",
            "Hysteresis prevents flapping — require sustained breach, cooldown before re-canary.",
          ),
          s(" PM signs trigger list; legal signs if auto-rollback affects billing or SLAs."),
        ],
        [
          s("Kill switch hierarchy. "),
          x(
            "L1: zero canary percentage (keep candidate infra warm). L2: disable feature entirely — fallback message. L3: route to minimal safe model globally.",
            "Each level documented with user-facing copy pre-written.",
          ),
          s(" Run quarterly game day: can on-call find and flip kill switch in <2 min?"),
        ],
        [
          s("Human override after auto-rollback. "),
          x(
            "Auto-rollback isn't failure — it's success. Forward fix requires new candidate build, eval pass, restart from 1%.",
            "Post-incident: was gate too sensitive (noise) or too loose (user impact)? Tune with PM.",
          ),
          s(" Blameless postmortem links rollback event to version manifest entries."),
        ],
      ],
      examples: [
        {
          title: "Auto-rollback at 3am",
          body: "Canary 12% on new agent tools; error rate 3x baseline for 6 minutes — auto-zeroed. On-call woke to resolved incident, not active fire. PM morning review: tool schema mismatch; fixed and re-canaried from 1%.",
        },
        {
          title: "Kill switch UX copy",
          body: "L2 kill disabled copilot with pre-written message: 'Assistant temporarily unavailable — try again shortly.' PM drafted copy in runbook; support macros matched. Avoided ad hoc 'something broke' tweets.",
        },
        {
          title: "Over-sensitive rollback",
          body: "Auto-rollback fired twice on Monday traffic noise at 2% canary. PM widened window and minimum sample — balanced sensitivity. Automation still valuable; gates need tuning like any metric.",
        },
      ],
    }),
    buildSection({
      number: "8.9",
      title: "PM rollout playbook",
      subtitle: "Checklists, comms, and stakeholder alignment",
      take: "The PM rollout playbook standardises release tiers, required stages (shadow/canary/dogfood), gate tables, comms templates, support briefings, and status page rules — so every AI promotion follows the same risk-appropriate path instead of reinventing process under deadline pressure.",
      why: "Ad hoc rollouts forget support, legal, or rollback until failure. PMs own the playbook because rollout is a cross-functional product launch — the model is the feature.",
      paragraphs: [
        [
          s("Release tier taxonomy. "),
          x(
            "Tier 1 (low risk): prompt typo fix — CI eval only, no canary. Tier 2: model swap within family — shadow + 1-5-25 canary. Tier 3: new capability/tools — employee dogfood + shadow + extended canary. Tier 4: regulated domain — human review sample + customer notice.",
            "PM classifies every release ticket — eng doesn't guess.",
          ),
          s(" Tier definitions in wiki; quarterly examples keep calibration aligned."),
        ],
        [
          s("Stakeholder comms timeline. "),
          x(
            "T-7: support briefing + macro updates. T-3: enterprise CSM notice for Tier 3+. Launch day: status page 'monitoring enhanced.' T+1: eval readout in product channel.",
            "Internal changelog: what changed, for whom, how to report issues.",
          ),
          s(" PM sends comms; eng sends technical detail appendix."),
        ],
        [
          s("Playbook artifacts per release. "),
          x(
            "One-pager: hypothesis, version IDs, ramp schedule, gates, rollback, DRI, experiment ID. Attached to Jira/Linear ticket — audit trail for compliance.",
            "Post-launch: promote or revert decision logged with metric screenshot.",
          ),
          s(" Mature teams template this — 15 min PM fill-in vs 2 hour meeting."),
        ],
      ],
      examples: [
        {
          title: "Tier misclassification incident",
          body: "Eng treated fine-tune swap as Tier 1 — no canary. Regression hit 100% users. PM added mandatory tier field in deploy pipeline; Tier 2+ blocks without canary flag configured.",
        },
        {
          title: "Support briefing prevented ticket flood",
          body: "Before summarisation model update, PM 30-min support huddle: 'answers may be shorter; not a bug.' Ticket volume flat vs previous unbriefed launch (+40% 'broken' tickets).",
        },
        {
          title: "Playbook one-pager template",
          body: "PM copied rollout one-pager template for 12 releases in Q2 — average promotion decision time dropped from 3 days to 6 hours. Compliance loved attached experiment IDs.",
        },
      ],
    }),
  ],
  quiz: [
    {
      q: "What is the key difference between a canary and a shadow deployment?",
      options: [
        "Canary affects a small slice of users with the new stack; shadow runs the new stack in parallel without returning its output to users",
        "Shadow is always more expensive than canary because it requires double the GPUs forever",
        "Canary is only for frontend changes; shadow is only for databases",
        "They are identical terms used by different cloud vendors",
      ],
      correct: 0,
      correctFeedback:
        "Right. Canary exposes real users to candidate behaviour; shadow observes candidate on duplicate traffic with zero user impact.",
      wrongFeedback:
        "Canary = small real exposure; shadow = parallel observation only. Re-read sections 8.2 and 8.3.",
    },
    {
      q: "A PM should define rollout gate criteria:",
      options: [
        "After the first user complaint arrives",
        "Before shadow or canary starts — as pre-registered proceed/halt rules",
        "Only for Tier 1 low-risk releases",
        "Exclusively in postmortem documents",
      ],
      correct: 1,
      correctFeedback:
        "Correct. Gates must exist before launch so halts are objective, not debated mid-incident.",
      wrongFeedback:
        "Gates are pre-registered success/fail criteria. Re-read section 8.5.",
    },
    {
      q: "Blue/green deployment is often preferred over gradual canary when:",
      options: [
        "You want the smallest possible blast radius for a model quality tweak",
        "You need atomic cutover of a full stack component like a vector index",
        "You have no monitoring infrastructure",
        "Traffic volume is too high for any testing",
      ],
      correct: 1,
      correctFeedback:
        "Exactly. Blue/green suits atomic swaps — indexes, regional endpoints — with instant flip-back.",
      wrongFeedback:
        "Blue/green is for atomic environment swaps; canary is for gradual model quality ramps. Re-read section 8.6.",
    },
    {
      kind: "order",
      q: "Order the typical low-risk AI promotion path from first to last.",
      prompt: "Drag to arrange first (top) to last (bottom).",
      items: [
        "Offline eval pass on golden dataset",
        "Shadow deployment at full traffic (duplicate inference)",
        "Canary ramp 1% → 5% → 25% with gates",
        "100% promotion and archive rollback target",
      ],
      correctFeedback:
        "Right. Offline → shadow (optional) → canary → full promotion is the standard de-risking ladder.",
      wrongFeedback:
        "Promotion typically stacks evidence: offline, then shadow, then canary, then full. Re-read sections 8.1–8.3.",
    },
    {
      q: "Multi-armed bandit rollouts require PM guardrails because:",
      options: [
        "Bandits cannot assign traffic to multiple variants",
        "Unconstrained bandits may optimize short-term proxies like cost at the expense of quality or contract constraints",
        "Bandits are illegal under the EU AI Act",
        "Bandits only work for A/B tests shorter than one hour",
      ],
      correct: 1,
      correctFeedback:
        "Correct. Reward functions and hard quality floors must encode product policy — bandits optimize what you measure.",
      wrongFeedback:
        "Bandits need quality floors and segment rules — they optimize the reward you define. Re-read section 8.7.",
    },
    {
      kind: "categorize",
      q: "Match each rollout control to its primary purpose.",
      categories: ["Feature flag", "Rollout gate", "Kill switch"],
      items: [
        { text: "Instantly set canary percentage to 0% without redeploying.", category: 0 },
        { text: "Auto-halt ramp when p95 latency exceeds SLO for 10 minutes.", category: 1 },
        { text: "Disable entire copilot feature with pre-written user message.", category: 2 },
        { text: "Route enterprise accounts to baseline during notice period.", category: 0 },
        { text: "Block stage 3 ramp when faithfulness sample drops 8%.", category: 1 },
        { text: "L3 global route to minimal safe fallback model.", category: 2 },
      ],
      correctFeedback:
        "Right. Flags control routing; gates automate proceed/halt; kill switches are emergency off.",
      wrongFeedback:
        "Flags = traffic control; gates = metric thresholds; kill switches = emergency disable. Re-read sections 8.4, 8.5, and 8.8.",
    },
  ],
});
