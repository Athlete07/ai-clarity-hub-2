import { buildChapter, buildSection, s, x } from "../concepts-pb4-helpers";

export const chapter01AgentFundamentals = buildChapter({
  slug: "pb6-agent-fundamentals",
  number: 1,
  shortTitle: "Agent Fundamentals",
  title: "Agent Fundamentals & Architectures",
  readingMinutes: 26,
  summary:
    "From single-turn responses to autonomous reasoning — what makes a system an agent and the architectures that determine trust",
  keyTakeaway:
    "An agent is a model that perceives, reasons, decides, and acts across multiple steps — not just responds. The architecture you choose (reflexive, planning, multi-agent, hierarchical) and where you sit on the autonomy spectrum determine reliability, latency, cost, and how much users will trust the system to act on their behalf.",
  pmCallout:
    "As a PM: before you greenlight 'make it an agent,' ask what actions it will take, how wrong it can be before harm occurs, and whether a fixed chain would deliver 90% of the value at 10% of the risk. Agent architecture is a trust contract, not a feature flag.",
  sections: [
    buildSection({
      number: "1.1",
      title: "What is an AI agent",
      subtitle: "A model that perceives, reasons, decides, and acts across multiple steps — not just responds",
      take: "An AI agent is a system where a language model operates in a loop: it receives observations (user input, tool results, environment state), reasons about what to do next, selects an action (often a tool call or message), and repeats until the task is complete or a stop condition is hit — unlike a chatbot that emits one response per turn.",
      why: "Vendors label everything 'agentic.' PMs who can define the boundary between 'smart chatbot' and 'autonomous actor' avoid over-engineering simple features and under-investing in safety for systems that send emails, move money, or modify production data.",
      paragraphs: [
        [
          s("The minimum viable agent has four capabilities: perceive, reason, decide, act. "),
          x(
            "Perceive: ingest context beyond the latest user message — prior tool outputs, retrieved documents, session state. Reason: the model's internal deliberation (explicit or implicit). Decide: choose among available actions. Act: execute — call an API, update a database, send a notification.",
            "A single-turn LLM call does perceive (the prompt) and reason (generation), but it doesn't decide among external actions or act on the world. Adding tool calling and a loop crosses the line.",
          ),
          s(" Products marketed as 'agents' without a real act step are chatbots wearing a cape."),
        ],
        [
          s("Agents are defined by behaviour, not by model size or framework. "),
          x(
            "GPT-4 with function calling in a while-loop is an agent. A 7B model in LangGraph with three tools is an agent. A 70B model that only streams markdown answers is not — regardless of how 'smart' it sounds.",
            "Framework branding (AutoGPT, CrewAI, LangGraph) describes orchestration patterns, not agenthood. PMs should evaluate the runtime behaviour diagram, not the README adjectives.",
          ),
          s(" The architecture review question is: 'What can this system do without a human clicking confirm each time?'"),
        ],
        [
          s("Multi-step is necessary but not sufficient. "),
          x(
            "A fixed three-step chain (retrieve → summarise → format) runs multiple LLM calls but isn't an agent — the path is predetermined. An agent chooses the next step based on intermediate results.",
            "Some products are 'constrained agents' — a loop with a whitelist of two tools and max three iterations. That's often the right production design: agent mechanics with chain-like predictability.",
          ),
          s(" PMs should name which steps are dynamic vs scripted; ambiguity here causes security and eval gaps."),
        ],
      ],
      examples: [
        {
          title: "Customer support triage — agent vs chatbot boundary",
          body: "Version 1 answered FAQs from a knowledge base — chatbot. Version 2 could look up order status, issue refunds under $50, and escalate to humans — agent. The PM's scope document listed every autonomous action with a dollar threshold and approval rule. Legal signed off on v2 because actions were enumerated, not implied.",
        },
        {
          title: "Devin-style coding agent — act step is the product",
          body: "Coding agents perceive repo state, reason about bugs, decide which files to edit, and act by writing code and running tests. The demo magic is the act loop, not the model's eloquence. PMs benchmarking coding copilots should score task completion (tests pass, PR merges), not explanation quality.",
        },
        {
          title: "Salesforce Agentforce — enterprise agent packaging",
          body: "Salesforce positions agents as employees with roles, data access, and guardrails — not a chat widget. The PM lesson: enterprise buyers want named boundaries (what data, what actions, what audit trail), not 'general intelligence.' Agent products win when autonomy is scoped to a business role.",
        },
      ],
    }),
    buildSection({
      number: "1.2",
      title: "The agent loop",
      subtitle: "Observe → think → act → observe — the cycle that separates agents from chatbots",
      take: "The agent loop is the repeating cycle: observe current state, think (reason/plan), act (tool call or output), observe the result — and continue until done. This loop is the runtime heartbeat of every agent system; its step limits, timeouts, and termination conditions are product decisions.",
      why: "Every production incident involving runaway cost, infinite loops, or silent failure traces back to loop configuration. PMs who understand the loop can spec max iterations, per-step timeouts, and user-visible progress — not leave them as engineering afterthoughts.",
      paragraphs: [
        [
          s("Observe is broader than 'read the user message.' "),
          x(
            "Observations include: tool return values, HTTP status codes, database query results, error messages, and accumulated conversation history. The framework concatenates these into the next prompt context.",
            "Bad observation design — truncating errors, summarising away numeric IDs — causes the model to repeat failed actions. PMs should require that critical fields (order ID, error code) survive observation formatting.",
          ),
          s(" What the model doesn't observe, it can't reason about."),
        ],
        [
          s("Think may be explicit (ReAct traces) or implicit (direct tool call). "),
          x(
            "Explicit: model outputs 'Thought: I need the customer's email first' before calling get_user. Implicit: model emits a function_call JSON with no visible reasoning. Explicit thinking costs tokens but improves debuggability and tool accuracy.",
            "Product tradeoff: show thinking to power users (transparency) vs hide it (cleaner UX, less token cost). Many products show a condensed 'Working on it…' with optional expand.",
          ),
          s(" The loop doesn't mandate visible chain-of-thought — but observability should capture it internally."),
        ],
        [
          s("Termination is a first-class design element. "),
          x(
            "Loops end when: model emits final answer (no tool call), max steps reached, timeout fired, guardrail triggered, or human approval granted. Missing termination → infinite loops and five-figure API bills.",
            "PM spec template: max_steps (e.g., 10), max_wall_clock (e.g., 120s), max_cost_per_run (e.g., $0.50). Engineering implements; PM owns the numbers based on task complexity and margin.",
          ),
          s(" A loop without a budget is a liability."),
        ],
      ],
      examples: [
        {
          title: "Travel booking agent — six-step loop with visible progress",
          body: "Agent loop: search flights → observe prices → check loyalty account → observe balance → hold seats → confirm. PM required step labels in UI ('Checking loyalty…') and hard stop at 8 steps. Users tolerated 45s runs because progress was visible; opaque spinning would have caused abandonment.",
        },
        {
          title: "Runaway loop — $12K weekend bill",
          body: "Internal agent retried a failing API call without backoff or step cap. Same error 400 times over a holiday. Post-mortem: PM added max_steps=15 and cost circuit breaker to every agent PRD. The loop diagram is now mandatory in design reviews.",
        },
        {
          title: "OpenAI Assistants API — threads as loop state",
          body: "Assistants run tool loops server-side; clients poll for status. PMs building on managed APIs still own termination policy — the platform provides mechanics, not business-appropriate limits. Default limits are often too loose for high-stakes domains.",
        },
      ],
    }),
    buildSection({
      number: "1.3",
      title: "Why agents are different from chains",
      subtitle: "Chains follow a fixed path, agents choose their own — the flexibility and the risk that come with it",
      take: "Chains execute a predetermined sequence of steps (A → B → C) every time; agents dynamically select the next action based on observations. Agents trade predictability for adaptability — better on ambiguous tasks, worse on cost estimation, testing, and compliance storytelling.",
      why: "The most common agent architecture mistake is agentising a problem with a known pipeline. PMs who can articulate 'why not a chain?' save quarters of debugging non-deterministic failures on deterministic workflows.",
      paragraphs: [
        [
          s("Chains are easier to test, debug, and explain. "),
          x(
            "Chain: input → embed → retrieve top-k → rerank → generate. Every run hits the same nodes. Golden tests are straightforward. Latency is summable.",
            "Agent: model may retrieve zero, three, or seven times depending on the question. Integration tests need scenario matrices, not single paths. p95 latency has a long tail.",
          ),
          s(" Regulated industries often prefer chains with explicit audit paths over free-form agent loops."),
        ],
        [
          s("Agents win when the path isn't knowable upfront. "),
          x(
            "Research tasks, multi-system troubleshooting, open-ended data analysis — the right sequence depends on intermediate findings. A chain that always runs five SQL queries wastes time on simple questions and fails on complex ones.",
            "Heuristic: if your eng team can draw the flowchart without 'maybe' branches, start with a chain. Add agent routing only at the branch points.",
          ),
          s(" Hybrid architectures — chain skeleton with agent nodes — are the production norm."),
        ],
        [
          s("Agents introduce product risks chains don't. "),
          x(
            "Wrong tool selection, hallucinated parameters, scope creep across steps, compounding errors. A chain fails at a known stage; an agent fails at an unpredictable stage.",
            "PM risk register for agents should include: unintended actions, cost overrun, infinite retry, and task drift — items that rarely appear on chain PRDs.",
          ),
          s(" Flexibility isn't free; it's a line item in reliability and support cost."),
        ],
      ],
      examples: [
        {
          title: "Invoice processing — chain beat agent",
          body: "PM pushed for an 'intelligent agent' to process invoices. Engineering prototyped a chain: OCR → validate schema → match PO → post to ERP. 94% straight-through on structured PDFs. Agent version added tool choice variance and dropped STP to 87% with higher cost. Shipped chain; agent reserved for exception queue only.",
        },
        {
          title: "SRE incident copilot — agent justified",
          body: "Incident response path varies: sometimes logs first, sometimes deploy history, sometimes customer reports. Agent loop with observability tools outperformed fixed chain. PM accepted higher p95 latency for lower mean-time-to-diagnosis. Right tool for ambiguous paths.",
        },
        {
          title: "LangChain LCEL vs AgentExecutor — same team, different bets",
          body: "Teams using LangChain often start with LCEL chains for RAG, graduate to AgentExecutor when users ask follow-ups requiring tool use. PM roadmap: chain for v1 launch, agent for v2 when eval proves chain can't handle 20% of query types — data-driven graduation, not hype-driven.",
        },
      ],
    }),
    buildSection({
      number: "1.4",
      title: "The four agent architectures",
      subtitle: "Reflexive, planning, multi-agent, and hierarchical — what each is built for and where each breaks",
      take: "Production agent systems cluster into four patterns: reflexive (observe-act with minimal planning), planning (explicit plan then execute), multi-agent (specialist agents collaborating), and hierarchical (manager delegates to workers). Each optimises for different task structure, latency tolerance, and operational complexity.",
      why: "Architecture choice drives headcount, infra cost, and failure modes. PMs who pick 'multi-agent because it's modern' without task decomposition needs inherit coordination bugs that single-loop agents avoid.",
      paragraphs: [
        [
          s("Reflexive agents: tight loops, minimal upfront planning. "),
          x(
            "ReAct-style: think one step, act, repeat. Best for tasks where the next action is obvious from the last observation — lookup, calculate, respond.",
            "Breaks when: long horizons require remembering a global plan, or when early mistakes poison later steps without backtracking.",
          ),
          s(" Default architecture for most v1 agent features — simplest to ship and observe."),
        ],
        [
          s("Planning agents: plan first, execute second. "),
          x(
            "Plan-and-execute: model generates a multi-step plan, then a (possibly cheaper) executor follows it. Helps on tasks needing global structure — research reports, migration checklists.",
            "Breaks when: the plan goes stale after step two because reality didn't match assumptions. Requires replanning triggers — a PM spec item.",
          ),
          s(" Planning adds latency upfront; saves wasted tool calls on wrong paths."),
        ],
        [
          s("Multi-agent and hierarchical: division of labour at the cost of coordination. "),
          x(
            "Multi-agent: peer specialists (researcher + writer + critic) message each other. Hierarchical: orchestrator assigns subtasks to workers and synthesises results.",
            "Breaks when: agents duplicate work, contradict each other, or loop delegating without terminating. Needs supervisor logic and shared state schema.",
          ),
          s(" Justify multi-agent with parallelism or specialisation evidence — not demo aesthetics."),
        ],
      ],
      examples: [
        {
          title: "Reflexive support bot — 80% of production agents",
          body: "Single-loop agent with CRM lookup, knowledge search, and ticket create tools. No planner node. Handles 80% of tier-1 intents. PM chose reflexive because average task depth was 2.3 tool calls — planning overhead wasn't justified.",
        },
        {
          title: "Planning agent for quarterly board prep",
          body: "Research agent generated an 8-step plan (market data → competitor scan → financials → narrative). Executor used cheaper model for data pulls, frontier model for synthesis. Plan went stale when earnings dropped mid-run — replanning after step 4 saved the deliverable.",
        },
        {
          title: "Hierarchical coding system — orchestrator + specialists",
          body: "Orchestrator decomposed 'add OAuth' into backend, frontend, and test subtasks; worker agents owned each repo. PM tracked coordination overhead: 40% more tokens than single agent, but 2× success on multi-repo tasks. Architecture matched task decomposition, not fashion.",
        },
      ],
    }),
    buildSection({
      number: "1.5",
      title: "Autonomy spectrum",
      subtitle: "Single LLM call → chain → agent → multi-agent system — where your product sits and why it matters",
      take: "Autonomy increases left to right: one-shot LLM response (lowest), fixed chain, dynamic agent loop, coordinated multi-agent system (highest). Each step up adds capability, cost, latency variance, and trust requirements — PMs should place features deliberately on this spectrum, not default to maximum autonomy.",
      why: "Stakeholders hear 'agent' and assume full autonomy. Mapping your feature on the spectrum sets correct expectations for legal, support, and pricing — and prevents over-building.",
      paragraphs: [
        [
          s("Single LLM call: sufficient for classification, extraction, generation. "),
          x(
            "Sentiment analysis, email draft, JSON extraction from text — no tools, no loop. Cheapest, fastest, easiest to eval.",
            "PM mistake: wrapping a one-shot call in agent branding, then wondering why it can't 'check the database.'",
          ),
          s(" Start here; move right only when eval proves insufficiency."),
        ],
        [
          s("Chains and agents differ in who controls the path. "),
          x(
            "Chain autonomy is in the designer's hands — predictable. Agent autonomy is in the model's hands — adaptive. Multi-agent autonomy is distributed — hardest to predict.",
            "Enterprise buyers ask 'who is accountable when it does the wrong thing?' — easier to answer on the left side of the spectrum.",
          ),
          s(" Document your position; update when capabilities or risk tolerance change."),
        ],
        [
          s("Autonomy should match reversibility of actions. "),
          x(
            "Read-only tools (search, summarise) tolerate higher autonomy. Write tools (send email, delete row, charge card) demand lower autonomy or human gates.",
            "Spectrum placement isn't global per product — it's per action type. Same agent can be high-autonomy on search, low-autonomy on send.",
          ),
          s(" PMs define an autonomy matrix: action × approval level."),
        ],
      ],
      examples: [
        {
          title: "Copilot tiers mapped to autonomy spectrum",
          body: "Tier 1: inline suggestions (single call). Tier 2: chat with RAG chain. Tier 3: agent with read tools. Tier 4: agent with write tools + approval. PM priced tiers by autonomy, not model name — customers understood what they were buying.",
        },
        {
          title: "Banking chatbot held at chain level deliberately",
          body: "Regulator-friendly design: fixed chain for balance lookup and FAQ — no dynamic tool routing. Agent prototype existed internally but wasn't shipped. PM documented spectrum position in compliance packet; 'autonomy' wasn't a marketing word.",
        },
        {
          title: "Internal vs external autonomy split",
          body: "Same codebase: internal ops agent (high autonomy, write access to staging) vs customer-facing agent (read-only, max 5 steps). PM refused to unify — support cost and incident blast radius differed 10×. Spectrum position is per audience.",
        },
      ],
    }),
    buildSection({
      number: "1.6",
      title: "What agents can and can't do today",
      subtitle: "The capability ceiling that separates demos from reliable production deployments",
      take: "Today's agents reliably handle bounded tasks: retrieval, structured API calls, short multi-step workflows with clear success criteria. They struggle with long-horizon planning, precise numeric reasoning across many steps, novel tool combinations without training, and maintaining goal alignment over 20+ actions — the gap between impressive demos and 95% production reliability is large.",
      why: "Sales promises 'autonomous AI employees'; support inherits impossible expectations. PMs who articulate the capability ceiling set realistic roadmaps and avoid shipping features that work in the demo video but fail on edge cases.",
      paragraphs: [
        [
          s("Agents are strong when success is verifiable per step. "),
          x(
            "Did the API return 200? Does the JSON match schema? Does the test pass? Step-level verification enables retry and recovery.",
            "Weak when success is only judgeable at the end — 'write a good strategy memo' — without intermediate rubrics.",
          ),
          s(" Design tasks with checkable milestones; agents follow checkpoints better than vibes."),
        ],
        [
          s("Error compounding is the silent killer. "),
          x(
            "95% per-step accuracy sounds excellent. Over 10 steps: 0.95^10 ≈ 60% end-to-end success. Production agents need per-step reliability well above 95% or recovery mechanisms.",
            "PM math: ask eng for measured per-step success on golden tasks, then raise to the power of expected step count. If result is unacceptable, reduce steps or add verification.",
          ),
          s(" Capability ceiling is often a step-count problem, not a model IQ problem."),
        ],
        [
          s("Models hallucinate actions, not just facts. "),
          x(
            "Hallucinated tool names, invented parameters, calling deprecated endpoints — common in production traces. Guardrails and schema validation catch some; not all.",
            "Today's ceiling includes 'needs human review for irreversible or legally binding outputs' — not a temporary limitation but a design constraint for 2025–2026 deployments.",
          ),
          s(" PMs should publish honest capability bounds in internal docs and customer-facing SLAs."),
        ],
      ],
      examples: [
        {
          title: "Demo agent vs production agent — same prompt, different outcomes",
          body: "Conference demo: agent booked a flight in 90 seconds. Production: 12% of runs failed on edge cases — multi-city, loyalty edge rules, payment timeouts. PM set customer expectation: 'assisted booking' with human fallback, not autonomous travel agent.",
        },
        {
          title: "Spreadsheet agent — numeric drift over steps",
          body: "Agent chained five calculation tools; rounding errors compounded; final total wrong by 2%. Single Python tool call was more reliable. PM learned: agents aren't better at math chains — they're better at choosing when to invoke computation.",
        },
        {
          title: "Capability roadmap tied to eval, not model releases",
          body: "PM tracked 'agent task success rate' monthly on 50 golden workflows. New model improved open-ended writing but didn't move tool accuracy. Ceiling lowered by better schemas and step limits, not GPT-N alone. Roadmap prioritised tooling over model swaps.",
        },
      ],
    }),
    buildSection({
      number: "1.7",
      title: "Task suitability for agents",
      subtitle: "When to use an agent vs a simpler chain — the complexity, reversibility, and ambiguity test",
      take: "Use an agent when the task path is unpredictable, requires multiple tool types, and mistakes are recoverable or low-stakes. Prefer chains or single calls when the workflow is known, stakes are high and irreversible, or latency and cost must be tightly bounded — three tests: complexity, reversibility, ambiguity.",
      why: "Agent suitability is the highest-leverage architectural decision in this playbook. Wrong choice wastes eng months and erodes user trust; right choice unlocks tasks chains simply cannot do.",
      paragraphs: [
        [
          s("Complexity test: does the number of steps vary by input? "),
          x(
            "Fixed 3-step pipeline → chain. Variable 2–15 steps depending on findings → agent candidate.",
            "If 90% of queries need one retrieval, use a chain with agent fallback for the 10% — tiered architecture beats uniform agent.",
          ),
          s(" Measure step variance on production-like queries before committing."),
        ],
        [
          s("Reversibility test: what happens when it's wrong? "),
          x(
            "Read-only, draft-only, staging-only → agent-friendly. Send, delete, purchase, publish → human gate or chain with explicit confirm step.",
            "PM should classify every tool as reversible, compensatable (refund), or irreversible — irreversible tools cap autonomy.",
          ),
          s(" The reversibility matrix is non-negotiable for launch review."),
        ],
        [
          s("Ambiguity test: is 'done' objectively definable? "),
          x(
            "High ambiguity: 'research competitors' — agent explores. Low ambiguity: 'extract invoice total' — chain with validation.",
            "Agents on low-ambiguity tasks wander — adding steps, over-tooling, burning budget. Chains on high-ambiguity tasks break — missing branches.",
          ),
          s(" Match architecture to ambiguity; don't default to the most flexible option."),
        ],
      ],
      examples: [
        {
          title: "Three-test scorecard — agent rejected for payroll",
          body: "Payroll adjustment: low ambiguity (fixed rules), irreversible (money movement), low step variance. Scorecard said chain + human approve. PM blocked agent proposal from sales engineering — prevented a compliance incident.",
        },
        {
          title: "Data science copilot — agent approved",
          body: "User questions vary wildly; tools include SQL, Python, charting. High ambiguity, reversible (queries read-only), variable steps. Agent architecture with SQL read replica. Suitability tests passed.",
        },
        {
          title: "Hybrid: chain default, agent on retry",
          body: "RAG chain answered 85% of queries. On low confidence score, route to agent with expanded tools. PM improved coverage without agentifying the happy path — cost stayed flat, success rate +9pp.",
        },
      ],
    }),
    buildSection({
      number: "1.8",
      title: "Agent state management",
      subtitle: "How agents track what they've done, what they know, and what to do next across a long task",
      take: "Agent state is the structured memory of a run: conversation history, tool call log, intermediate variables, plan status, and scratchpad notes — persisted in a state object that each loop iteration reads and updates. Poor state design causes lost context, repeated actions, and unrecoverable long tasks.",
      why: "Users expect agents to remember what they already tried. PMs who spec state requirements (what persists, what summarises, what expires) prevent 'it forgot the order ID' bugs that look like model failures but are architecture gaps.",
      paragraphs: [
        [
          s("State has short-term and long-term layers. "),
          x(
            "Short-term: current run's messages, tool I/O, active plan — lives in context window or graph state. Long-term: user preferences, past session summaries, episodic memory in vector DB — retrieved selectively.",
            "Conflating the two causes privacy bugs (leaking User A's state to User B) and cost blowups (dumping entire history every step).",
          ),
          s(" PM spec should list state fields, retention, and isolation rules."),
        ],
        [
          s("What to keep raw vs summarised. "),
          x(
            "Keep raw: IDs, error codes, numeric results, last tool JSON. Summarise: long document retrieves, chatty reasoning traces, verbose logs.",
            "Over-summarisation loses the signal needed for the next step; under-summarisation fills the context window by step six.",
          ),
          s(" State compression is a product decision with quality impact — not just eng optimisation."),
        ],
        [
          s("Checkpointing enables resume and human-in-the-loop. "),
          x(
            "Persist state to DB after each step; on crash or approval gate, resume from checkpoint instead of restarting. LangGraph, Temporal, and custom stores support this.",
            "PM requirement for long-running tasks (>60s): user can leave and return; session isn't lost. Requires durable state — ephemeral in-memory loops don't qualify.",
          ),
          s(" Checkpointing is the bridge between agent demos and production workflows."),
        ],
      ],
      examples: [
        {
          title: "Lost order ID — state bug not model bug",
          body: "Agent fetched order #8842, then summarised history aggressively; next step hallucinated #8843. Fix: pin order_id in structured state outside the summarised thread. PM added 'immutable run anchors' to agent PRD template.",
        },
        {
          title: "LangGraph state schema — TypedDict as contract",
          body: "Team defined state: messages, plan, artifacts, step_count. PM reviewed schema as API contract — each field had owner and retention policy. Reduced 'mystery meat' context passed to the model.",
        },
        {
          title: "Multi-tab resume — checkpoint UX",
          body: "Legal review agent ran 20 minutes; partner closed laptop. Checkpoint persisted; resume showed completed steps and pending approval. PM metric: resume success rate 98%. Without checkpointing, feature would have been unusable.",
        },
      ],
    }),
    buildSection({
      number: "1.9",
      title: "PM decision lens: committing to an agent architecture",
      subtitle: "The reliability, latency, and cost implications of giving a system the ability to take actions on behalf of your users",
      take: "Committing to an agent architecture is committing to non-deterministic latency, compounding error risk, higher per-task COGS, and new security surfaces — in exchange for handling ambiguous multi-step tasks chains cannot. The PM decision packages architecture choice, autonomy matrix, termination policy, eval plan, and rollback path into a single launch gate.",
      why: "Agent projects fail in production not because models are too dumb but because PMs treated architecture as eng-only. Reliability, latency, and cost are product requirements with numbers — not engineering surprises post-launch.",
      paragraphs: [
        [
          s("Build the business case before the architecture diagram. "),
          x(
            "Quantify: tasks unlocked (% coverage), revenue or cost saved, support reduction. Counter: incremental COGS per run, expected failure rate, support load from misfires, security review time.",
            "If chain covers 85% at 20% of agent cost, agent may be a premium tier — not a migration.",
          ),
          s(" CFO-friendly agents have unit economics slides, not just capability demos."),
        ],
        [
          s("Define launch criteria with failure rate thresholds. "),
          x(
            "Example gate: ≥92% task success on golden set, p95 latency <90s, zero irreversible errors in 500-run sim, cost per task <$0.40.",
            "Without numeric gates, 'beta' stretches forever or ships too early — both burn trust.",
          ),
          s(" PM owns the gate; eng owns measurement infrastructure."),
        ],
        [
          s("Plan degradation paths from day one. "),
          x(
            "Feature flags: agent → chain fallback → human queue. Kill switch for tool write access. Model downgrade path if cost spikes.",
            "Agents without rollback are experiments on paying users. PM documents degradation triggers in the launch runbook.",
          ),
          s(" The best agent launch is one where you can turn autonomy down without redeploying."),
        ],
      ],
      examples: [
        {
          title: "Agent ADR — architecture decision record",
          body: "PM published ADR: chose reflexive single-loop over multi-agent; max 8 steps; read tools auto, write tools approval; fallback to human at step limit. Eng, legal, and support signed. Six months later, ADR was the reference when sales asked for 'full autonomy.'",
        },
        {
          title: "Latency SLA negotiation — agent realism",
          body: "Sales promised '<5s response.' Agent p95 was 34s. PM reset expectation: streaming progress + async completion for agent tasks; <5s only for chain tier. Lost one deal, won three with honest SLAs.",
        },
        {
          title: "Cost circuit breaker saved Q4 margin",
          body: "Agent COGS ran 3× forecast on power-user segment. PM shipped per-user daily budget and graceful 'continue tomorrow' message. Margin recovered; power users got higher tier upsell. Architecture commitment included cost governance.",
        },
      ],
    }),
  ],
  quiz: [
    {
      q: "What distinguishes an AI agent from a single-turn chatbot?",
      options: [
        "The model size must be above 70B parameters.",
        "It operates in a loop — perceiving, reasoning, deciding, and acting across multiple steps.",
        "It uses a vector database for retrieval.",
        "It streams tokens to the client.",
      ],
      correct: 1,
      correctFeedback:
        "Right. Agenthood is about the perceive-reason-decide-act loop across steps, not model size or streaming.",
      wrongFeedback:
        "Agents are defined by multi-step action loops, not parameter count or RAG. Re-read sections 1.1 and 1.2.",
    },
    {
      q: "When is a fixed chain usually better than an agent?",
      options: [
        "When the workflow path is known and predictability matters more than adaptability.",
        "When tasks require irreversible write actions without oversight.",
        "When latency and cost must be tightly bounded.",
        "All of the above.",
      ],
      correct: 3,
      correctFeedback:
        "Exactly. Known paths, high stakes, and tight budgets favour chains — agents trade predictability for flexibility.",
      wrongFeedback:
        "Chains win on predictable workflows, bounded cost/latency, and auditability. Re-read sections 1.3 and 1.7.",
    },
    {
      q: "95% per-step accuracy over 10 steps yields roughly what end-to-end success rate?",
      options: ["95%", "90%", "60%", "50%"],
      correct: 2,
      correctFeedback:
        "Right. Errors compound: 0.95^10 ≈ 60%. This is why step count and recovery matter as much as model choice.",
      wrongFeedback:
        "Per-step errors multiply: 0.95^10 ≈ 60%. Re-read section 1.6.",
    },
    {
      kind: "categorize",
      q: "Match each scenario to the best architecture on the autonomy spectrum.",
      categories: ["Single LLM call", "Fixed chain", "Reflexive agent", "Multi-agent"],
      items: [
        { text: "Extract invoice total from structured PDF.", category: 1 },
        { text: "Classify support ticket sentiment.", category: 0 },
        { text: "Troubleshoot incident with unknown root cause using logs and deploy tools.", category: 2 },
        { text: "Generate board report requiring parallel research, writing, and critique.", category: 3 },
        { text: "FAQ answer from knowledge base with fixed retrieve-then-generate.", category: 1 },
        { text: "Book travel with variable steps depending on search results.", category: 2 },
      ],
      correctFeedback:
        "Right. Match autonomy to task structure — don't over-agent simple extraction or under-agent open research.",
      wrongFeedback:
        "Place features on the spectrum by task predictability and decomposition needs. Re-read sections 1.4 and 1.5.",
    },
    {
      kind: "order",
      q: "Put the agent loop cycle in correct order.",
      prompt: "Drag to arrange from first step (top) to last (bottom) within one iteration.",
      items: [
        "Observe current state (user input, tool results, context).",
        "Think / reason about what to do next.",
        "Act (tool call or final response).",
        "Observe the result of the action.",
      ],
      correctFeedback:
        "Exactly. Observe → think → act → observe — then repeat until termination.",
      wrongFeedback:
        "The loop is observe → think → act → observe. Re-read section 1.2.",
    },
    {
      q: "Which is the strongest PM launch gate for an agent feature?",
      options: [
        "Demo looks impressive in internal all-hands.",
        "Competitor shipped an agent so we must too.",
        "≥92% golden-task success, p95 latency budget, cost cap, and chain/human fallback defined.",
        "Engineering says the framework supports agents.",
      ],
      correct: 2,
      correctFeedback:
        "Right. Numeric reliability, latency, and cost gates plus degradation paths — not demos or hype.",
      wrongFeedback:
        "Agent launches need measurable gates and rollback paths. Re-read section 1.9.",
    },
  ],
});
