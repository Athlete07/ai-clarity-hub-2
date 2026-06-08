import { buildChapter, buildSection, s, x } from "../concepts-pb4-helpers";

export const chapter05LanggraphDeepDive = buildChapter({
  slug: "pb6-langgraph-deep-dive",
  number: 5,
  shortTitle: "LangGraph Deep Dive",
  title: "LangGraph Deep Dive",
  readingMinutes: 29,
  summary:
    "LangGraph's graph-based control flow for production agents — nodes, edges, shared state, conditional routing, cycles, human-in-the-loop interrupts, checkpointing, and multi-agent composition. Why teams graduate from linear chains to stateful graphs.",
  keyTakeaway:
    "LangGraph models agents as directed graphs with explicit state — loops, branches, and recovery become first-class instead of fragile prompt hacks. The tradeoff is operational complexity; the payoff is predictable behaviour when agents must retry, escalate, or pause for humans.",
  pmCallout:
    "As a PM: ask for the LangGraph diagram before approving an agent epic — nodes are features, edges are decision rules, state is memory. If the team can't draw it, they're not ready to ship autonomous loops.",
  sections: [
    buildSection({
      number: "5.1",
      title: "Why LangChain wasn't enough for agents",
      subtitle: "Linear chains break when agents loop, branch, and recover",
      take: "Classic LangChain chains execute fixed sequences — fine for RAG Q&A, inadequate when agents must retry failed tools, branch on model decisions, or run until a goal is met. LangGraph fills the gap with cyclic, stateful control flow designed for agent loops.",
      why: "Teams hit production walls with chain-based agents: infinite retries, no clean pause for human approval, debugging nightmares. PMs who know why LangGraph exists can approve framework migration with clear success criteria.",
      paragraphs: [
        [
          s("Chains assume a known path; agents discover the path. "),
          x(
            "Chain: A → B → C → done. Agent: A → maybe B → tool fails → retry A' → C → reflect → D. Expressing cycles in chain abstractions leads to recursive hacks and stack overflows.",
            "LangGraph makes cycles explicit edges back to prior nodes — bounded by max iteration counters.",
          ),
          s(" PM signal: if PRD says 'until success' or 'retry on failure,' you need graph semantics."),
        ],
        [
          s("State across steps was an afterthought in early orchestrators. "),
          x(
            "Passing dicts between chain steps works for demos; production needs typed shared state, checkpointing, and concurrent updates from parallel tool nodes.",
            "LangGraph centralises state — every node reads/writes the same State object.",
          ),
          s(" State design is a PM-relevant architecture review — what's tracked affects audit and UX."),
        ],
        [
          s("LangGraph is the production path LangChain Inc. recommends for agents. "),
          x(
            "LangChain ecosystem split: LCEL chains for linear pipelines; LangGraph for agents; LangSmith for observability across both.",
            "PM roadmap: prototype in chains, migrate agent features to LangGraph before GA if loops exist.",
          ),
          s(" Budget learning curve — graph mental model differs from sequential chain thinking."),
        ],
      ],
      examples: [
        {
          title: "Chain-based agent infinite loop in prod",
          body: "Support bot retried same failed API call 47 times via recursive chain wrapper. PM incident led to LangGraph migration with max_iterations=5 and explicit error node. MTTR dropped; user trust recovered.",
        },
        {
          title: "RAG stays on chains; actions move to LangGraph",
          body: "Team kept document Q&A as linear LCEL chain; ticket-resolution agent became LangGraph with tool loop. PM accepted hybrid — right abstraction per feature.",
        },
        {
          title: "LangChain Inc. documentation shift — PM signal",
          body: "Official agent tutorials moved to LangGraph-first. PM used docs emphasis to justify sprint allocation for graph refactor vs more prompt tuning.",
        },
      ],
    }),
    buildSection({
      number: "5.2",
      title: "What is LangGraph",
      subtitle: "Stateful graph-based orchestration for agent workflows",
      take: "LangGraph is a library for building stateful, multi-step agent workflows as directed graphs — nodes perform work (LLM call, tool, router), edges define transitions, and a shared state object persists across the run.",
      why: "LangGraph vocabulary becomes the shared language between PM, eng, and support. 'Stuck in node X' is debuggable; 'agent acting weird' is not.",
      paragraphs: [
        [
          s("Graph = workflow blueprint. "),
          x(
            "Compile a graph from nodes and edges; invoke with initial state; graph runs until terminal node or interrupt. Supports sync, async, and streaming token outputs per node.",
            "LangGraph builds on LangChain Runnable primitives — reuse models, tools, retrievers inside nodes.",
          ),
          s(" One graph instance per user task or session — PM clarifies concurrency model."),
        ],
        [
          s("Stateful runs vs stateless API calls. "),
          x(
            "Each graph invocation carries thread_id for persistence — same thread resumes prior checkpoint. Critical for long tasks spanning minutes or human delays.",
            "Stateless chat APIs don't give you this; LangGraph adds session continuity at orchestration layer.",
          ),
          s(" Thread ID maps to product concepts: ticket ID, case ID, conversation ID."),
        ],
        [
          s("LangGraph Platform — managed deployment option. "),
          x(
            "LangChain offers hosted LangGraph with persistence, cron, and studio UI — vs self-hosted on your K8s.",
            "PM build-vs-buy: managed speeds launch; self-host for data residency and cost at scale.",
          ),
          s(" Framework choice includes hosting model — not just library import."),
        ],
      ],
      examples: [
        {
          title: "LangGraph Studio — PM debug sessions",
          body: "PM joined eng in Studio to watch node-by-node execution on failing customer scenario. Visual graph cut debug time from days to hours — observability as collaboration tool.",
        },
        {
          title: "Research agent graph — 8 nodes",
          body: "Plan → search → summarise → critique → revise → format → human_review → send. PM doc mirrored graph for stakeholder review — non-engineers understood scope.",
        },
        {
          title: "Self-hosted LangGraph on K8s — bank requirement",
          body: "Data residency blocked LangGraph Platform. Team self-hosted with Postgres checkpointer. PM added infra sprint; traded convenience for compliance.",
        },
      ],
    }),
    buildSection({
      number: "5.3",
      title: "Nodes and edges",
      subtitle: "The two primitives every LangGraph agent is built from",
      take: "Nodes are functions that receive state and return state updates — typically an LLM call, tool execution, or router. Edges connect nodes; normal edges are unconditional, conditional edges route based on state or model output.",
      why: "Node granularity is a product decomposition decision — too few nodes hide failure points; too many explode latency and cost. PMs review node maps for user-visible milestones.",
      paragraphs: [
        [
          s("Node design patterns. "),
          x(
            "LLM node: call model with state-derived prompt. Tool node: execute tool from last model tool_call. Router node: deterministic branch (if error count > 3 → escalate). Human node: interrupt for approval.",
            "Keep nodes idempotent where possible — retries re-run safely.",
          ),
          s(" Each node should emit trace spans — PM KPIs often map to node success rates."),
        ],
        [
          s("Edges encode allowed transitions. "),
          x(
            "Linear edge: research → draft. Conditional edge: draft → [pass QA → publish | fail QA → revise]. Forbidden transitions never happen — unlike freeform agent prompts.",
            "Explicit graph prevents agent from skipping mandatory validation steps.",
          ),
          s(" Compliance-friendly workflows love graphs — auditable paths."),
        ],
        [
          s("START and END nodes frame the run. "),
          x(
            "Entry node initialises state from user input; terminal nodes mark success/failure/cancel. Multiple END nodes support different outcomes (resolved vs escalated).",
            "PM defines terminal outcomes — each should map to user-visible status.",
          ),
          s(" User UX 'task complete' must align with graph END, not model stop token."),
        ],
      ],
      examples: [
        {
          title: "Skipped validation node — graph vs prompt agent",
          body: "Prompt-only agent sometimes skipped compliance check. LangGraph made validate node mandatory edge before send. PM signed off graph because policy enforcement was structural.",
        },
        {
          title: "Granular nodes for latency profiling",
          body: "Splitting one mega-node into retrieve + generate + format showed retrieve was 70% of p95. PM prioritised cache investment — insight from node-level traces.",
        },
        {
          title: "Router node on error taxonomy",
          body: "429 rate limit → backoff node; 401 → refresh_token node; 500 → escalate node. PM defined error UX per branch in PRD.",
        },
      ],
    }),
    buildSection({
      number: "5.4",
      title: "State management in LangGraph",
      subtitle: "The shared object every node reads and writes",
      take: "LangGraph state is a typed schema (often TypedDict or Pydantic) merged via reducers — nodes return partial updates; framework merges into global state. Messages, plan steps, tool outputs, and flags live here.",
      why: "State schema is the contract for memory, audit, and resume. PMs who review state fields catch missing audit data before launch.",
      paragraphs: [
        [
          s("Reducer functions define merge semantics. "),
          x(
            "Messages list: append new messages. Counter: increment. Last-write-wins for scalar fields. Wrong reducer = lost messages or duplicate tool calls.",
            "PM doesn't write reducers — but asks 'what accumulates vs gets replaced?'",
          ),
          s(" State explosion ( huge tool outputs) is a common production bug — cap or externalise."),
        ],
        [
          s("State vs checkpoint vs external memory. "),
          x(
            "State is hot working memory for one graph run. Checkpoints persist state snapshots. Long-term user memory still lives in vector DB — loaded into state at start node.",
            "Clear layering prevents treating checkpoint DB as analytics warehouse.",
          ),
          s(" PM spec: which state fields appear in support console for debugging."),
        ],
        [
          s("Typed state enables safer iteration. "),
          x(
            "Schema changes require migration for in-flight threads — version state schema in registry.",
            "Breaking state change without migration corrupts resumed runs — treat like API versioning.",
          ),
          s(" Major graph changes need backward compatibility plan for open tasks."),
        ],
      ],
      examples: [
        {
          title: "messages reducer bug — duplicate tool calls",
          body: "Wrong reducer replaced instead of appended messages; model retried same tool call. PM added regression test on state merge for every graph change.",
        },
        {
          title: "State field escalation_flag — support visibility",
          body: "PM required escalation_reason in state surfaced to Zendesk sidebar via webhook at END node. State schema doubled as integration contract.",
        },
        {
          title: "Oversized PDF in state — OOM crash",
          body: "Tool node stuffed 80MB text into state; worker crashed. Fix: S3 pointer in state, summary in messages. PM max artifact policy.",
        },
      ],
    }),
    buildSection({
      number: "5.5",
      title: "Conditional edges",
      subtitle: "Branching logic — how graphs route decisions",
      take: "Conditional edges evaluate state or model output to pick the next node — enabling if/else workflows, tool-routing, and quality gates without hardcoding every path in one mega-prompt.",
      why: "Branch rules are business logic PMs should recognise — 'if refund >$500 → human approval' belongs in graph routing, not buried in prompt prose.",
      paragraphs: [
        [
          s("Routing functions vs model routing. "),
          x(
            "Deterministic router: Python function on state (confidence < 0.7 → escalate). Model router: LLM returns enum next_step → edge maps to node.",
            "Prefer deterministic for compliance thresholds; model routing for ambiguous classification.",
          ),
          s(" PM documents deterministic rules in PRD appendix — engineers implement as routers."),
        ],
        [
          s("Command API for dynamic edges. "),
          x(
            "LangGraph supports returning Command(goto='node_name') from nodes for dynamic jumps — flexible but harder to visualise.",
            "PM prefers static conditional edges in Studio diagram for auditability unless dynamic jump is essential.",
          ),
          s(" Complex graphs need exported diagram in runbook — Studio screenshot minimum."),
        ],
        [
          s("Fallback edges prevent dead ends. "),
          x(
            "Always define default branch: unrecognised tool output → error_handler node. Missing fallback = stuck graph.",
            "PM acceptance: every failure mode has terminal or recovery path — no orphan states.",
          ),
          s(" Map conditional edges to user-visible error messages."),
        ],
      ],
      examples: [
        {
          title: "Amount-based routing — finance compliance",
          body: "conditional_edge: amount > 500 → human_approval else auto_process. Auditor approved graph export showing mandatory branch — not prompt-only control.",
        },
        {
          title: "LLM router misclassified intent — hybrid fix",
          body: "Model router sent billing queries to technical node 12% of time. PM added keyword fallback router before LLM router — hybrid reduced misroute to 2%.",
        },
        {
          title: "Missing default branch — stuck threads",
          body: "Unknown API response format skipped all conditional edges; graph hung until timeout. PM post-mortem: require default edge on every router node.",
        },
      ],
    }),
    buildSection({
      number: "5.6",
      title: "Cycles and loops in the graph",
      subtitle: "Retry, reflect, iterate — with termination guards",
      take: "LangGraph supports cyclic edges — agent node → tool node → agent node — enabling ReAct-style loops. Production requires max iteration limits, duplicate-action detection, and progress metrics to prevent infinite spins.",
      why: "Loops are why you bought LangGraph — and why agents fail spectacularly without caps. PMs set iteration budgets per task type.",
      paragraphs: [
        [
          s("ReAct loop as a three-node cycle. "),
          x(
            "agent → tools → agent until no tool_calls or max_steps. Classic pattern; LangGraph makes cycle explicit in diagram.",
            "Each cycle adds latency and tokens — PM sets user expectation for multi-step tasks.",
          ),
          s(" Display step progress in UI ('Step 3 of 10 max') — loops need UX affordance."),
        ],
        [
          s("Termination conditions stack. "),
          x(
            "max_iterations, goal_achieved flag, timeout, cost budget, duplicate action hash detected. Multiple guards — any triggers exit to END or escalate.",
            "PM defines which termination triggers user notification vs silent handoff.",
          ),
          s(" One guard failing is enough for incident — test all in staging."),
        ],
        [
          s("Reflection loops — quality before exit. "),
          x(
            "draft → critic → [revise → draft again | approve → END]. Separate quality cycle from tool cycle — PM tunes max revise passes.",
            "Extra cycles improve quality at linear cost — A/B threshold for your domain.",
          ),
          s(" PM approval for any loop without hard cap — non-negotiable in prod."),
        ],
      ],
      examples: [
        {
          title: "max_iterations=10 — user-visible cap",
          body: "Agent hit cap researching obscure bug; surfaced 'need human help' END state. PM preferred honest cap over 40-step invisible burn.",
        },
        {
          title: "Duplicate action detector",
          body: "Graph hashed tool calls; third identical call routed to escalate node. Prevented infinite search loop — PM KPI: duplicate-action rate.",
        },
        {
          title: "Reflect loop A/B — 1 vs 3 passes",
          body: "Legal doc agent: 3 critic passes improved accuracy 11pp but +45s latency. PM chose 1 pass for standard tier, 3 for premium.",
        },
      ],
    }),
    buildSection({
      number: "5.7",
      title: "Human-in-the-loop in LangGraph",
      subtitle: "Interrupt points where graphs pause for human review",
      take: "LangGraph supports interrupt_before/interrupt_after on nodes — graph pauses, persists checkpoint, resumes when human approves or edits state via API. Native pattern for approval workflows without bespoke polling.",
      why: "HITL is a product feature LangGraph makes implementable — PMs spec interrupt placement, timeout behaviour, and resume UX in same doc as graph design.",
      paragraphs: [
        [
          s("Interrupt mechanics. "),
          x(
            "Graph hits interrupt node → serialises checkpoint → returns control to app → UI shows pending approval → human action calls graph.resume() with updated state.",
            "Paused threads persist days — design notification and escalation if human idle.",
          ),
          s(" PM defines SLA for human response on each interrupt type."),
        ],
        [
          s("Edit state on resume. "),
          x(
            "Human can modify draft email, adjust amount, or reject tool args before resume — state mutation audited.",
            "Supports 'approve with edits' — common enterprise pattern.",
          ),
          s(" Audit log: who resumed, what changed, timestamp — compliance requirement."),
        ],
        [
          s("interrupt vs separate HITL microservice. "),
          x(
            "LangGraph interrupt keeps orchestration unified — no sync polling external ticket system for graph state.",
            "May still integrate Slack/email for notify — but checkpoint is source of truth.",
          ),
          s(" PM avoids duplicate state in ticket tool and graph — pick one system of record."),
        ],
      ],
      examples: [
        {
          title: "interrupt_before send_email node",
          body: "Marketing agent paused on every outbound send; PM dashboard showed queue. Resume API wired to mobile approve button — shipped in 2 sprints using LangGraph native interrupt.",
        },
        {
          title: "Human idle 48h — auto-cancel END",
          body: "PM policy: pending approvals expire to cancelled END with user email. Cron resumed graph with cancel flag — no orphaned checkpoints.",
        },
        {
          title: "Regulator-required approval on policy changes",
          body: "Graph could not reach publish END without human_approval node pass. Structural HITL satisfied audit — prompt-only 'ask human' would not.",
        },
      ],
    }),
    buildSection({
      number: "5.8",
      title: "Persistence and checkpointing",
      subtitle: "Resume long-running agents after failure or interruption",
      take: "Checkpointers save graph state after each node (or configured steps) to Postgres, SQLite, or Redis — enabling crash recovery, human delays, and multi-day workflows without restarting from scratch.",
      why: "Without checkpointing, a server restart mid-task loses all progress — unacceptable for enterprise agents. PMs treat persistence as launch blocker for long-running flows.",
      paragraphs: [
        [
          s("Checkpointer backends. "),
          x(
            "Postgres recommended for prod multi-worker; SQLite for dev; Redis for fast ephemeral. LangGraph Platform manages persistence automatically.",
            "Checkpoint size grows with message history — compaction strategy needed.",
          ),
          s(" PM asks recovery RTO: 'resume within 30s of worker crash' drives backend choice."),
        ],
        [
          s("thread_id ties checkpoints to product sessions. "),
          x(
            "Same thread_id on invoke resumes latest checkpoint. Map thread_id to user-visible case ID for support.",
            "Thread per task vs thread per user — PM defines lifecycle (close thread on END).",
          ),
          s(" Orphan thread cleanup policy prevents unbounded storage cost."),
        ],
        [
          s("Time travel debugging. "),
          x(
            "Developers replay from prior checkpoint — PM value: reproduce customer incident from checkpoint ID in support ticket.",
            "Retention policy for checkpoints may include PII — align with data governance.",
          ),
          s(" Checkpoint retention TTL is legal + cost decision."),
        ],
      ],
      examples: [
        {
          title: "Deploy restart mid-refund — checkpoint save",
          body: "K8s rolling deploy interrupted worker; new pod resumed thread from Postgres checkpoint. User saw 2s glitch not full restart. PM cited in reliability sales deck.",
        },
        {
          title: "Checkpoint bloat — weekly compaction job",
          body: "100MB checkpoints after 200-node research tasks. Eng compacted messages; PM funded storage monitoring alert.",
        },
        {
          title: "Support repro from checkpoint ID",
          body: "Customer sent case ID; support loaded checkpoint in Studio, saw exact node failure. MTTR cut 60%.",
        },
      ],
    }),
    buildSection({
      number: "5.9",
      title: "Multi-agent graphs",
      subtitle: "Subgraphs and supervisor patterns in LangGraph",
      take: "LangGraph composes subgraphs as nodes — a supervisor graph can invoke researcher, writer, and critic subgraphs, each with internal loops. Enables multi-agent coordination with explicit boundaries and shared parent state.",
      why: "Multi-agent is trendy; subgraphs make it maintainable. PMs insist on one diagram per subgraph — complexity budget per release.",
      paragraphs: [
        [
          s("Subgraph as encapsulated agent team. "),
          x(
            "Parent state passes inputs to subgraph; subgraph returns structured output to parent. Encapsulation limits cross-talk and eases testing in isolation.",
            "Map to org roles: subgraph = specialist team's workflow.",
          ),
          s(" PM approves new subgraphs like new microservices — interface contract required."),
        ],
        [
          s("Supervisor node pattern. "),
          x(
            "Supervisor LLM node decides which subgraph to invoke next — LangGraph multi-agent tutorial pattern. Supervisor state tracks delegated tasks.",
            "Risk: supervisor misroutes — eval supervisor decisions separately.",
          ),
          s(" Cap supervisor iterations — same loop guards as single-agent graphs."),
        ],
        [
          s("Parallel subgraph invocation. "),
          x(
            "Send API fan-out to multiple subgraphs; join results in aggregator node. Cuts latency for independent research tasks.",
            "PM cost model: parallel = concurrent LLM spend spike — rate limits matter.",
          ),
          s(" Parallelism is a product choice when user waits for merged answer."),
        ],
      ],
      examples: [
        {
          title: "Research + writer subgraphs",
          body: "Research subgraph looped on search; writer subgraph single-pass format. PM tracked quality lift vs monolithic agent — 15pp on long reports.",
        },
        {
          title: "Supervisor misroute eval",
          body: "PM added 40-case 'which specialist?' eval; supervisor accuracy 91% before prod. Below 90% blocked release — gate worked.",
        },
        {
          title: "Subgraph isolation for sandbox",
          body: "Code-exec subgraph ran in sandbox; parent graph never passed raw credentials. PM security review focused on subgraph boundaries.",
        },
      ],
    }),
    buildSection({
      number: "5.10",
      title: "PM decision lens",
      subtitle: "LangGraph as reliability investment vs operational cost",
      take: "Adopt LangGraph when agents need loops, branching, HITL, or resume — and team can operate graphs in production with tracing and checkpoint ops. Skip when linear RAG chain suffices; complexity without requirement burns sprints.",
      why: "LangGraph is not free — learning curve, hosting, checkpoint storage, graph versioning. PMs quantify prevented failure modes to justify migration.",
      paragraphs: [
        [
          s("LangGraph adoption checklist. "),
          x(
            "Need cycles/retries? Need HITL interrupts? Tasks >5 min or crash-sensitive? Multi-step audit required? Team has LangSmith tracing?",
            "Four yes → strong case. Zero yes → stay on chains.",
          ),
          s(" Document decision in ADR — why graph vs chain for this feature."),
        ],
        [
          s("Operational ownership. "),
          x(
            "Who owns graph version bumps, checkpoint DB, max iteration tuning, Studio access? Platform vs feature team RACI.",
            "Graphs are living code — PM schedules quarterly graph review like API review.",
          ),
          s(" Without ops ownership, graphs rot after launch engineer leaves."),
        ],
        [
          s("Success metrics for LangGraph migration. "),
          x(
            "Reduce infinite-loop incidents, cut MTTR via node traces, enable HITL feature shipping, improve task completion on multi-step eval set.",
            "Compare before/after on same golden agent tasks — not vanity deploy metrics.",
          ),
          s(" Migration ROI = reliability + features impossible on chains, minus infra cost."),
        ],
      ],
      examples: [
        {
          title: "Deferred LangGraph — chain enough for v1",
          body: "FAQ bot was linear RAG; PM deferred LangGraph until action-taking v2. Avoided 6-week framework tax on read-only feature.",
        },
        {
          title: "LangGraph migration ROI slide",
          body: "PM showed: loop incidents 12/mo → 0, HITL approve shipped, task completion +19pp on 30-step eval. Board approved platform hire.",
        },
        {
          title: "Graph version in customer changelog",
          body: "Enterprise wanted agent behaviour change notices. PM published graph_version 2.3.0 with node-level diff summary — trust via transparency.",
        },
      ],
    }),
  ],
  quiz: [
    {
      q: "Why do production agent teams often migrate from linear LangChain chains to LangGraph?",
      options: [
        "LangGraph replaces the need for any LLM.",
        "Agents need explicit loops, branching, and state — chains assume fixed sequences.",
        "LangGraph eliminates token costs.",
        "Chains cannot call tools.",
      ],
      correct: 1,
      correctFeedback:
        "Right. LangGraph models cyclic agent behaviour with shared state; chains fit linear pipelines.",
      wrongFeedback:
        "Chains can call tools sequentially but struggle with robust cycles and recovery. Re-read sections 5.1 and 5.6.",
    },
    {
      q: "What is LangGraph shared state primarily used for?",
      options: [
        "Storing user passwords across nodes.",
        "Accumulating messages, tool results, flags, and plan data every node reads/writes.",
        "Replacing the vector database entirely.",
        "Caching model weights on disk.",
      ],
      correct: 1,
      correctFeedback:
        "Exactly. State is the working memory of a graph run — merged via reducers across nodes.",
      wrongFeedback:
        "State is typed run memory, not credential storage or model weights. Re-read section 5.4.",
    },
    {
      q: "interrupt_before on a send_email node enables:",
      options: [
        "Faster email delivery by skipping LLM calls.",
        "Graph pause at checkpoint for human approval before continuing.",
        "Automatic deletion of all checkpoints.",
        "Unlimited agent loops without caps.",
      ],
      correct: 1,
      correctFeedback:
        "Right. LangGraph interrupts persist state and resume after human action — native HITL.",
      wrongFeedback:
        "Interrupts pause for human review; they don't remove limits or speed email. Re-read section 5.7.",
    },
    {
      kind: "categorize",
      q: "Match each LangGraph concept to its role.",
      categories: ["Node", "Conditional edge", "Checkpoint", "Subgraph"],
      items: [
        { text: "LLM call that drafts a reply from current messages.", category: 0 },
        { text: "Routes to human_approval when amount > 500.", category: 1 },
        { text: "Postgres snapshot enabling resume after crash.", category: 2 },
        { text: "Encapsulated researcher workflow invoked by supervisor.", category: 3 },
        { text: "Tool execution step updating state with API result.", category: 0 },
        { text: "Fan-out to parallel specialist graphs.", category: 3 },
      ],
      correctFeedback:
        "Right. Nodes do work; edges route; checkpoints persist; subgraphs encapsulate multi-agent pieces.",
      wrongFeedback:
        "Review sections 5.3, 5.5, 5.8, and 5.9.",
    },
    {
      kind: "order",
      q: "Put a typical ReAct-style LangGraph loop in execution order.",
      prompt: "Drag to arrange first step (top) to last (bottom).",
      items: [
        "Agent node decides next action from state.",
        "Tool node executes selected tool calls.",
        "State merges tool outputs into messages.",
        "Conditional edge checks termination (done, max steps, or error).",
        "Either loop back to agent or route to END/escalate.",
      ],
      correctFeedback:
        "Exactly. Decide → act → merge → check guards → loop or exit.",
      wrongFeedback:
        "ReAct loops agent and tool nodes with termination guards. Re-read section 5.6.",
    },
    {
      q: "When is LangGraph likely overkill for a v1 feature?",
      options: [
        "Multi-step refund workflow with human approval gates.",
        "Single-pass RAG Q&A with no tools and no retries.",
        "Research agent with retry on search failure.",
        "Long-running task needing crash recovery.",
      ],
      correct: 1,
      correctFeedback:
        "Right. Linear RAG without loops or HITL fits chains — add LangGraph when control flow complexity appears.",
      wrongFeedback:
        "Simple linear pipelines don't need graph orchestration yet. Re-read section 5.10.",
    },
  ],
});
