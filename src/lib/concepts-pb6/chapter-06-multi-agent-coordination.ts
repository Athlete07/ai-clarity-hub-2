import { buildChapter, buildSection, s, x } from "../concepts-pb4-helpers";

export const chapter06MultiAgentCoordination = buildChapter({
  slug: "pb6-multi-agent-coordination",
  number: 6,
  shortTitle: "Multi-agent Coordination",
  title: "Multi-agent Coordination & Supervision",
  readingMinutes: 27,
  summary:
    "When one agent isn't enough — orchestrator-worker patterns, peer networks, specialised roles, inter-agent communication, supervisor agents, loop prevention, trust boundaries, and debugging agent teams. The PM framework for when multi-agent complexity pays off.",
  keyTakeaway:
    "Multi-agent systems trade coordination overhead for parallelism and specialisation. They win when tasks decompose cleanly; they lose when a single well-tooled agent would suffice. PMs apply the simpler-system test before funding agent teams.",
  pmCallout:
    "As a PM: every additional agent is another hiring line on an org chart — with the same risk of miscommunication. Ask 'could one agent with better tools do this?' before approving a multi-agent architecture.",
  sections: [
    buildSection({
      number: "6.1",
      title: "Why multi-agent systems",
      subtitle: "Parallelism, specialisation, and scope — three drivers",
      take: "Teams build multi-agent systems when work parallelises (research while drafting), requires distinct expertise (coder vs reviewer), or exceeds one agent's reliable context/tool scope — not because 'multi-agent' sounds impressive in demos.",
      why: "Multi-agent is the default pitch in 2026; single-agent baselines often outperform in production. PMs demand justification against simpler architecture.",
      paragraphs: [
        [
          s("Parallelism cuts wall-clock latency. "),
          x(
            "Three researchers querying different sources simultaneously beat one agent serially — if results merge cleanly. User waits for slowest branch plus merge time.",
            "Diminishing returns when branches depend on each other — false parallelisation wastes 3× LLM cost.",
          ),
          s(" PM models latency as critical path, not sum of agents."),
        ],
        [
          s("Specialisation improves per-step quality. "),
          x(
            "Small prompts and tools per role beat one mega-agent juggling everything — less tool selection error, tighter eval per role.",
            "Analogue: specialist consultants vs one generalist — coordination cost is real.",
          ),
          s(" Specialisation only pays when roles have clear interfaces and evals."),
        ],
        [
          s("Scope and safety separation. "),
          x(
            "Untrusted content agent runs sandboxed; executor agent has production DB access but no web browse — blast radius containment.",
            "Multi-agent as security architecture, not only quality architecture.",
          ),
          s(" PM security review may mandate separation of privileged tools across agents."),
        ],
      ],
      examples: [
        {
          title: "Single agent baseline beat multi-agent on support",
          body: "Team shipped orchestrator + 3 specialists; task completion lagged monolithic agent with same tools. PM reverted to single agent + better schema. Lesson: benchmark before multiplying agents.",
        },
        {
          title: "Parallel research branches — 40% latency win",
          body: "Report agent fan-out to legal, financial, and news sub-agents; merge node synthesised. Independent sources justified parallelism — PM documented merge quality eval.",
        },
        {
          title: "Sandbox reader + privileged writer",
          body: "Reader agent parsed untrusted URLs; writer agent only received sanitised summaries. Security team required split — multi-agent as isolation boundary.",
        },
      ],
    }),
    buildSection({
      number: "6.2",
      title: "Orchestrator-worker pattern",
      subtitle: "A coordinator delegates to specialists — the default multi-agent shape",
      take: "An orchestrator agent (or deterministic supervisor node) decomposes goals, assigns subtasks to worker agents, collects outputs, and decides next steps — hierarchical control familiar from human teams.",
      why: "Most production multi-agent systems are orchestrator-worker under the hood. PMs who recognise the pattern can spec handoffs, SLAs, and failure escalation clearly.",
      paragraphs: [
        [
          s("Orchestrator responsibilities. "),
          x(
            "Parse user goal → task list → assign to workers → validate outputs → synthesise final answer or re-delegate. May be LLM-driven or rule-based state machine.",
            "LLM orchestrators drift; hybrid (rules for structure, LLM for wording) often more reliable.",
          ),
          s(" PM defines orchestrator authority: can it override worker? reassign? abort?"),
        ],
        [
          s("Worker agents are narrow. "),
          x(
            "Research worker: search tools only. SQL worker: read-only DB schema. Each worker gets minimal prompt and tool set — reduces hallucinated tool calls.",
            "Workers should not know full user goal if principle of least privilege applies.",
          ),
          s(" Worker scope doc is part of security review — not only eng implementation detail."),
        ],
        [
          s("Handoff payload is the contract. "),
          x(
            "Structured JSON between orchestrator and workers: { task_id, inputs, constraints, output_schema }. Freeform prose handoffs cause misparse and scope creep.",
            "Version handoff schema like API — breaking changes need migration.",
          ),
          s(" PM writes acceptance criteria on handoff fields — missing field = integration bug."),
        ],
      ],
      examples: [
        {
          title: "AutoGPT-style planner — orchestrator drift",
          body: "LLM orchestrator kept adding scope ('also build a website'). PM capped orchestrator with explicit task list max 5 items and user confirm step.",
        },
        {
          title: "Deterministic orchestrator for finance",
          body: "Rules engine assigned extract → validate → post steps; LLM workers only inside nodes. Auditor preferred predictable orchestration graph.",
        },
        {
          title: "Handoff schema versioning incident",
          body: "Worker expected customer_id; orchestrator sent account_id after refactor. Silent failure 3 days. PM mandated schema contract tests in CI.",
        },
      ],
    }),
    buildSection({
      number: "6.3",
      title: "Peer-to-peer agent networks",
      subtitle: "Lateral communication without a central coordinator",
      take: "Peer agents message each other directly — debating, negotiating, or passing work — without a single orchestrator. Flexible for open-ended collaboration; harder to debug, terminate, and secure.",
      why: "P2P multi-agent demos look emergent; production often devolves into loops or talking past each other. PMs treat P2P as advanced pattern with explicit complexity budget.",
      paragraphs: [
        [
          s("When P2P fits. "),
          x(
            "Brainstorming, adversarial debate (pro/con agents), or research collectives where no single plan is known upfront. Creativity over determinism.",
            "Avoid for transactional workflows with compliance paths — use orchestrator-worker.",
          ),
          s(" PM use-case filter: reversible output + low stakes → P2P candidate."),
        ],
        [
          s("Message bus vs shared blackboard. "),
          x(
            "Agents post to shared state (blackboard architecture) or send direct messages. Blackboard simplifies observability — all posts in one log.",
            "PM prefers blackboard for debuggability unless latency requires direct message.",
          ),
          s(" Every message costs tokens — cap rounds in PRD."),
        ],
        [
          s("Termination is harder without orchestrator. "),
          x(
            "Consensus detection ('agents agree') or max round count stops debate. Ambiguous stop conditions → runaway costs.",
            "PM sets max_messages and max_rounds per session — non-negotiable.",
          ),
          s(" P2P without caps is a COGS incident waiting to happen."),
        ],
      ],
      examples: [
        {
          title: "Pro/con debate for strategy memo",
          body: "Two peer agents argued investment thesis for 4 rounds; synthesiser agent merged. PM priced as premium 'deep analysis' tier — 8× token cost disclosed.",
        },
        {
          title: "P2P loop — agents agreeing endlessly",
          body: "Politeness prompts caused mutual 'great point!' loops. Fix: max 6 messages + stagnation detector. PM added loop metric to dashboard.",
        },
        {
          title: "Blackboard architecture for incident response",
          body: "All agents appended findings to shared incident board; human lead orchestrated externally. PM hybrid: human orchestrator + P2P contributors.",
        },
      ],
    }),
    buildSection({
      number: "6.4",
      title: "Specialised agent roles",
      subtitle: "Researcher, writer, critic, executor — division of labour",
      take: "Role specialisation assigns each agent a persona, tool set, and success metric — researcher finds facts, writer drafts, critic scores, executor acts. Mirrors human workflows and enables per-role eval.",
      why: "Role labels are PM-friendly abstractions — you can roadmap 'add critic agent v2' with eval targets instead of vague 'improve agent.'",
      paragraphs: [
        [
          s("Role prompts are product copy. "),
          x(
            "Researcher: 'cite sources, no speculation.' Critic: 'flag unsupported claims, score 1-5.' PM owns tone and strictness — roles encode policy.",
            "Role changes are prompt version bumps — changelog for users when behaviour shifts.",
          ),
          s(" A/B role prompts like A/B UX copy — measure task outcomes."),
        ],
        [
          s("Tool scoping per role. "),
          x(
            "Researcher: web + doc search. Writer: no tools, text only. Executor: CRM write with approval gate. Least privilege per role reduces accidents.",
            "PM tool approval matrix: which role may invoke which capability.",
          ),
          s(" Expanding executor tools requires PM sign-off — same as single-agent tool policy."),
        ],
        [
          s("Per-role eval harness. "),
          x(
            "Researcher: citation accuracy. Critic: correlation with human labels. Writer: brand voice score. Composite product metric weights roles.",
            "Weak researcher tanks composite output — diagnose by role metric, not only final answer.",
          ),
          s(" PM dashboard: role-level pass rates on golden set."),
        ],
      ],
      examples: [
        {
          title: "Critic agent blocked unsupported claims",
          body: "Legal memo flow: critic rejected drafts with <2 citations per assertion. Final output citation rate 94% vs 61% without critic. PM made critic mandatory edge in graph.",
        },
        {
          title: "Role confusion — writer started searching",
          body: "Writer agent given search tool 'just in case' bypassed researcher. Quality variance spiked. PM enforced tool removal from writer role.",
        },
        {
          title: "Executor role behind HITL",
          body: "Only executor role could call payment API; always after human approve node. Role separation satisfied finance audit.",
        },
      ],
    }),
    buildSection({
      number: "6.5",
      title: "Inter-agent communication",
      subtitle: "Structured handoffs vs freeform agent chat",
      take: "Agents exchange task specs, results, and status via structured messages (JSON schemas, event envelopes) or freeform natural language — structured wins for reliability; freeform wins for flexibility at cost of parse errors.",
      why: "Communication format is integration design. PMs who require structured handoffs reduce 'telephone game' degradation across agents.",
      paragraphs: [
        [
          s("Structured handoffs reduce information loss. "),
          x(
            "Schema: { finding, confidence, sources[], open_questions[] }. Downstream agent parses reliably; logs searchable.",
            "Natural language handoffs compress poorly over 3+ hops — details drop each hop.",
          ),
          s(" PM spec handoff schema in API-style doc attached to PRD."),
        ],
        [
          s("Shared context vs message passing. "),
          x(
            "All agents read shared state object (LangGraph parent state) vs explicit messages. Shared state simplifies; explicit messages audit who said what.",
            "Hybrid: shared state for facts, messages for requests/responses.",
          ),
          s(" Choose based on debug needs — support asks 'which agent decided X?'"),
        ],
        [
          s("Idempotency and duplicate delivery. "),
          x(
            "Workers may receive retry messages — idempotent task IDs prevent duplicate side effects.",
            "PM requires idempotency keys for any executor handoff that triggers writes.",
          ),
          s(" Multi-agent doubles retry complexity vs single agent — test duplicate delivery."),
        ],
      ],
      examples: [
        {
          title: "JSON handoff vs prose — A/B on defect rate",
          body: "Structured handoffs reduced downstream parse errors 78%. PM standardised envelope schema across all worker agents.",
        },
        {
          title: "Telephone game in 4-agent chain",
          body: "User budget '$50K' became '$5K' by writer hop. Fix: canonical facts block in shared state immutable by writers. PM labelled budget as protected field.",
        },
        {
          title: "Async handoff via queue",
          body: "Long research tasks posted results to SQS; orchestrator polled completion. PM accepted async UX for 10-min research jobs.",
        },
      ],
    }),
    buildSection({
      number: "6.6",
      title: "Supervisor agents",
      subtitle: "Overseers that monitor quality, route failures, and enforce policy",
      take: "Supervisor agents (or supervisor nodes) observe worker outputs, score quality, detect errors, and reroute or escalate — a meta-layer that catches mistakes before users see them.",
      why: "Supervisors are how PMs add quality gates without slowing every step with human review — automated second pair of eyes with defined thresholds.",
      paragraphs: [
        [
          s("Supervisor patterns. "),
          x(
            "Inline critic after each worker step. Final QA supervisor before user delivery. Anomaly supervisor watching for policy violations across all messages.",
            "Supervisor can be smaller/cheaper model — classification task not generation.",
          ),
          s(" PM sets supervisor pass threshold and escalation path on fail."),
        ],
        [
          s("Supervisor vs orchestrator. "),
          x(
            "Orchestrator assigns work; supervisor evaluates work. May be same LLM with different prompt or separate graph node.",
            "Combining roles saves cost; separating improves eval clarity.",
          ),
          s(" Document which node has veto power over shipping output."),
        ],
        [
          s("Supervisor gaming and blind spots. "),
          x(
            "Workers optimise for supervisor rubric, miss user intent — Goodhart risk. Supervisors miss novel failure modes not in rubric.",
            "Periodic human audit of supervisor decisions calibrates automation.",
          ),
          s(" PM refreshes supervisor criteria when user complaints cluster on passed outputs."),
        ],
      ],
      examples: [
        {
          title: "Supervisor blocked PII in outbound email",
          body: "Worker draft passed writer eval but supervisor detected SSN pattern. Routed to redaction node. PM metric: supervisor catch rate.",
        },
        {
          title: "Cheap supervisor model — 90% cost saving",
          body: "GPT-4o workers + mini supervisor for checklist QA. PM accepted 2pp quality trade for 35% overall COGS reduction.",
        },
        {
          title: "Supervisor false positives frustrated users",
          body: "Over-strict supervisor rejected 18% of valid drafts. PM loosened threshold after human review sample — balance speed and safety.",
        },
      ],
    }),
    buildSection({
      number: "6.7",
      title: "Avoiding redundancy and loops",
      subtitle: "When agent teams duplicate work or spin forever",
      take: "Multi-agent systems risk redundant research, circular delegation ('you handle it' loops), and repeated failed actions — prevented by task ownership registry, deduplication hashes, progress trackers, and hard round limits.",
      why: "Loops burn budget silently. PMs define coordination protocols and KPIs (duplicate task rate, rounds per resolution) like eng defines rate limits.",
      paragraphs: [
        [
          s("Task ledger prevents duplicate work. "),
          x(
            "Shared ledger: { task, owner, status }. Agent must check ledger before starting work. Orchestrator assigns exclusive ownership.",
            "Without ledger, two researchers repeat identical web search — 2× cost, 0 benefit.",
          ),
          s(" PM requires ledger visibility in ops dashboard for long-running jobs."),
        ],
        [
          s("Progress detection stops spinning. "),
          x(
            "Hash action sequences; if state unchanged for 3 rounds, escalate. Detect 'debate without new facts' in P2P setups.",
            "Stagnation detector cheaper than unlimited LLM rounds.",
          ),
          s(" User-facing message when stagnation triggers — don't hang silently."),
        ],
        [
          s("Delegation depth limits. "),
          x(
            "Orchestrator → worker OK; worker → sub-worker → sub-sub-worker often chaos. Max depth 2 unless proven need.",
            "PM complexity budget: each depth level needs separate eval suite.",
          ),
          s(" Say no to recursive 'spawn helper agent' patterns in v1."),
        ],
      ],
      examples: [
        {
          title: "Duplicate search detection saved 30% tokens",
          body: "Query hash registry prevented second agent repeating same Google query. PM added cost attribution per agent role.",
        },
        {
          title: "Circular delegation — two agents deferring",
          body: "Researcher said ask writer; writer said ask researcher. Orchestrator rule: writer must draft from available facts or return explicit gap list.",
        },
        {
          title: "Max depth policy in PRD",
          body: "PM capped delegation at orchestrator + 2 workers. Feature request for nested agents deferred — complexity test failed.",
        },
      ],
    }),
    buildSection({
      number: "6.8",
      title: "Trust between agents",
      subtitle: "Verification, sandboxing, and permission scoping",
      take: "Agents must not blindly trust outputs from other agents — especially when prompts or tools could be poisoned. Verify structured outputs, sandbox untrusted agents, and scope permissions so one compromised role can't exfiltrate data.",
      why: "Prompt injection via tool results propagates in multi-agent systems faster than single-agent. PMs treat inter-agent trust as security requirement, not eng detail.",
      paragraphs: [
        [
          s("Validate worker outputs before orchestrator acts. "),
          x(
            "Schema validation, moderation scan, fact cross-check against trusted source before executor uses researcher claim.",
            "Treat worker output as untrusted user content if workers browse web.",
          ),
          s(" PM lists high-risk fields requiring cross-source verification."),
        ],
        [
          s("Sandbox untrusted capability agents. "),
          x(
            "Browser agent runs in isolated VM; only sanitised excerpts enter privileged graph state. Code agent in container with no network.",
            "Blast radius containment mirrors microservice security patterns.",
          ),
          s(" Security review focuses on data flow between trust zones."),
        ],
        [
          s("No credential sharing across roles. "),
          x(
            "Executor holds API keys; researcher never sees them. Workers receive least-privilege tokens scoped to task.",
            "Shared credential pool across agents = single breach point.",
          ),
          s(" PM approves credential architecture in multi-agent designs."),
        ],
      ],
      examples: [
        {
          title: "Poisoned web page in researcher output",
          body: "Hidden prompt in webpage instructed executor to email secrets. Supervisor + schema block stopped exfil. PM mandated web sanitizer node.",
        },
        {
          title: "Read-only SQL agent — scoped creds",
          body: "SQL worker JWT allowed SELECT only on analytics views. Executor had separate write creds behind HITL. Trust zones documented for SOC2.",
        },
        {
          title: "Cross-check supervisor for financial figures",
          body: "Supervisor re-queried API for numbers before including in client report. 3% of worker figures were stale — caught pre-send.",
        },
      ],
    }),
    buildSection({
      number: "6.9",
      title: "Debugging multi-agent systems",
      subtitle: "Tracing failures across agents — observability patterns",
      take: "Multi-agent failures are distributed — root cause may be orchestrator misroute, worker tool error, bad handoff, or supervisor false negative. Unified tracing with agent_id, span hierarchy, and handoff payloads is mandatory for operability.",
      why: "Support can't debug 'the AI team failed' without agent-level traces. PMs fund observability proportional to agent count — each new agent multiplies debug surface.",
      paragraphs: [
        [
          s("Hierarchical traces. "),
          x(
            "One user request → parent trace → child spans per agent/node → tool spans nested. LangSmith, Langfuse support multi-agent views.",
            "Filter by agent_role in dashboard to see researcher vs writer latency.",
          ),
          s(" PM requires agent_id in every user-facing error report internally."),
        ],
        [
          s("Replay with frozen handoffs. "),
          x(
            "Save handoff payloads at each step; replay downstream agents without re-running expensive upstream — speeds debug.",
            "Fixture library from production failures becomes regression tests.",
          ),
          s(" Post-incident: add failing handoff to golden replay suite within 48h."),
        ],
        [
          s("Metrics per agent and per edge. "),
          x(
            "Success rate, latency, token cost, escalation rate by role. Heatmap which edge misroutes most.",
            "PM reviews weekly multi-agent ops digest — same as service mesh metrics for microservices.",
          ),
          s(" Alert when any agent error rate 2× baseline — partial system failure."),
        ],
      ],
      examples: [
        {
          title: "LangSmith trace showed misroute in 2 minutes",
          body: "Customer complaint debug: orchestrator sent SQL task to writer. Trace span label made root cause obvious. PM mandated span naming convention.",
        },
        {
          title: "Replay harness from prod incident",
          body: "Frozen handoff from bad merge reproduced bug in CI. Prevented recurrence on next orchestrator prompt change.",
        },
        {
          title: "Agent cost attribution dashboard",
          body: "PM discovered critic consumed 40% tokens with minimal quality lift. Reduced critic rounds from 3 to 1 — saved $12K/mo.",
        },
      ],
    }),
    buildSection({
      number: "6.10",
      title: "PM decision lens",
      subtitle: "Multi-agent complexity as product risk — the simpler system test",
      take: "Before multi-agent: prove single agent with better tools/prompts fails eval; prove task decomposes with clear handoffs; prove coordination cost < quality/latency gain. Otherwise ship simpler system and iterate.",
      why: "Multi-agent projects overrun when driven by hype. PMs protect roadmap with explicit go/no-go criteria and exit path back to single agent.",
      paragraphs: [
        [
          s("The simpler system test. "),
          x(
            "1) Can one agent + tool router pass golden set? 2) If multi-agent, what's critical path latency vs single? 3) What's coordination COGS premium? 4) Can support debug traces?",
            "Fail any → defer multi-agent or reduce agent count.",
          ),
          s(" Run test before sprint 1, not after 3-month build."),
        ],
        [
          s("Phased multi-agent rollout. "),
          x(
            "Phase 1: single agent. Phase 2: add critic supervisor only. Phase 3: parallel researchers. Each phase gated on eval + ops readiness.",
            "Skip phases when data proves need — don't skip gates.",
          ),
          s(" PM documents rollback: disable worker agents via feature flag, orchestrator solo mode."),
        ],
        [
          s("When multi-agent is the right call. "),
          x(
            "Clear role separation for security, proven parallel speedups, specialist eval gains, or regulatory separation of duties.",
            "Document decision in ADR with metrics — defends scope to leadership.",
          ),
          s(" Multi-agent should be justified by measured lift, not architecture fashion."),
        ],
      ],
      examples: [
        {
          title: "Simpler system test killed 5-agent design",
          body: "Single agent with 12 tools passed 89% golden set; 5-agent design projected 91% at 3× cost. PM shipped single agent; revisited multi-agent next quarter.",
        },
        {
          title: "Phased critic-only addition",
          body: "V1 single agent; v1.1 added critic supervisor — +7pp quality, +20% latency. PM communicated latency change; users accepted tradeoff.",
        },
        {
          title: "Multi-agent win on compliance separation",
          body: "Regulator required human-approved executor separate from untrusted research. Multi-agent mandatory — PM framed as compliance enabler not optional complexity.",
        },
      ],
    }),
  ],
  quiz: [
    {
      q: "What's the most common production multi-agent architecture pattern?",
      options: [
        "Fully peer-to-peer agents with no coordination.",
        "Orchestrator-worker — coordinator delegates to specialist agents.",
        "Random agent selection each turn.",
        "Single agent pretending to be multiple personas in one prompt.",
      ],
      correct: 1,
      correctFeedback:
        "Right. Orchestrator-worker is the default reliable pattern — clear handoffs and ownership.",
      wrongFeedback:
        "Most prod systems use hierarchical delegation, not uncoordinated P2P. Re-read section 6.2.",
    },
    {
      q: "Before approving a multi-agent design, a PM should first:",
      options: [
        "Assume multi-agent is always more capable.",
        "Verify a simpler single-agent baseline cannot meet eval with acceptable cost/latency.",
        "Remove all supervisor layers for speed.",
        "Use freeform prose handoffs to maximise flexibility.",
      ],
      correct: 1,
      correctFeedback:
        "Exactly. The simpler system test prevents coordination overhead without measurable lift.",
      wrongFeedback:
        "Multi-agent needs justification against single-agent baseline. Re-read section 6.10.",
    },
    {
      q: "Structured JSON handoffs between agents primarily reduce:",
      options: [
        "GPU memory usage.",
        "Information loss and parse errors compared to freeform prose chains.",
        "Need for any supervisor agent.",
        "User privacy requirements.",
      ],
      correct: 1,
      correctFeedback:
        "Right. Schemas make inter-agent contracts explicit and debuggable.",
      wrongFeedback:
        "Structure improves reliability of communication, not hardware or privacy by itself. Re-read section 6.5.",
    },
    {
      kind: "categorize",
      q: "Sort each pattern to the best fit.",
      categories: ["Orchestrator-worker", "Peer-to-peer", "Supervisor layer"],
      items: [
        { text: "Planner assigns research and writing to separate agents.", category: 0 },
        { text: "Pro and con agents debate before synthesis.", category: 1 },
        { text: "QA agent rejects draft before user sees it.", category: 2 },
        { text: "Sandboxed browser agent passes sanitised excerpts only.", category: 0 },
        { text: "Shared blackboard for incident findings.", category: 1 },
        { text: "PII scan on worker output before send.", category: 2 },
      ],
      correctFeedback:
        "Right. Match hierarchy, lateral collaboration, and quality oversight patterns.",
      wrongFeedback:
        "Review sections 6.2, 6.3, and 6.6.",
    },
    {
      kind: "order",
      q: "Put the recommended multi-agent adoption sequence in order.",
      prompt: "Drag to arrange first step (top) to last (bottom).",
      items: [
        "Ship and eval single-agent baseline with full tool set.",
        "Run simpler-system test — prove multi-agent lift worth cost.",
        "Add orchestrator-worker with structured handoff schemas.",
        "Introduce supervisor/critic layers with pass thresholds.",
        "Enable parallel workers only for independent subtasks with merge eval.",
      ],
      correctFeedback:
        "Exactly. Baseline first, justify complexity, then add coordination, QA, and parallelism.",
      wrongFeedback:
        "Don't start with parallel P2P agents. Re-read section 6.10.",
    },
    {
      q: "A task ledger shared across agents primarily prevents:",
      options: [
        "Model hallucinations in final answers.",
        "Duplicate work when multiple agents repeat the same subtask.",
        "Need for human-in-the-loop approval.",
        "Context window exhaustion.",
      ],
      correct: 1,
      correctFeedback:
        "Right. Ledgers track ownership and status to avoid redundant parallel effort.",
      wrongFeedback:
        "Task ledgers coordinate work assignment, not hallucination or context limits. Re-read section 6.7.",
    },
  ],
});
