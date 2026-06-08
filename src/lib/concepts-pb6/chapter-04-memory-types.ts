import { buildChapter, buildSection, s, x } from "../concepts-pb4-helpers";

export const chapter04MemoryTypes = buildChapter({
  slug: "pb6-memory-types",
  number: 4,
  shortTitle: "Memory Types",
  title: "Memory Types",
  readingMinutes: 28,
  summary:
    "How agents remember — in-context, episodic, semantic, and procedural memory, plus external stores, retrieval strategies, compression, and multi-user isolation. The architecture layer that determines whether an agent feels continuous or amnesiac.",
  keyTakeaway:
    "Agent memory is not one thing — it's a stack of systems trading off context window cost, recall accuracy, and infrastructure complexity. PMs who specify memory depth per feature avoid shipping agents that forget mid-task or leak one user's history to another.",
  pmCallout:
    "As a PM: when eng says 'we'll add memory,' ask 'which type, for how long, scoped to whom, and what happens when retrieval pulls the wrong past?' Memory is a product promise, not a checkbox.",
  sections: [
    buildSection({
      number: "4.1",
      title: "Why memory is the hardest agent problem",
      subtitle: "Finite windows, long tasks, and the illusion of continuity",
      take: "Agents must carry information across turns, sessions, and tools — but context windows are finite, tokens cost money, and naive 'remember everything' approaches collapse under scale. Memory architecture is the bridge between chatbot amnesia and trustworthy long-running agents.",
      why: "Users judge agent quality by continuity — 'it forgot what I said five minutes ago' feels like product failure even when the model is frontier-class. PMs who treat memory as an afterthought ship demos that break on real workflows.",
      paragraphs: [
        [
          s("Context windows grew from 4K to 128K+ tokens, but tasks grew faster. "),
          x(
            "A support agent resolving a billing dispute may need account history, prior tickets, policy docs, and tool outputs from twelve API calls — easily exceeding practical window limits once you include system prompts and scratchpad reasoning.",
            "Longer windows also mean higher latency and cost per turn — stuffing everything into in-context memory is not free even when it fits.",
          ),
          s(" Memory architecture decides what stays hot, what gets retrieved, and what gets compressed."),
        ],
        [
          s("Memory failures look like model failures to users. "),
          x(
            "When an agent repeats a question already answered, contradicts an earlier commitment, or loses track of a multi-step goal, users blame 'the AI got dumber' — not 'our retrieval threshold was wrong.'",
            "Support tickets spike on memory regressions faster than on single-turn quality dips because they break trust in the agent's autonomy.",
          ),
          s(" PMs should define memory acceptance criteria in the PRD alongside task success rate."),
        ],
        [
          s("Memory spans three time horizons: turn, session, and cross-session. "),
          x(
            "Turn memory is the current exchange. Session memory covers today's conversation. Cross-session memory persists preferences, facts, and past outcomes — each horizon needs different storage and retrieval mechanics.",
            "Consumer products often over-promise cross-session memory before nailing within-session continuity — sequence your roadmap accordingly.",
          ),
          s(" The hardest agent problem is choosing what to forget, not what to remember."),
        ],
      ],
      examples: [
        {
          title: "Copilot 'forgot' the file you uploaded — session memory gap",
          body: "A coding assistant lost track of an uploaded spec after the user asked unrelated questions for twenty minutes. Summarisation dropped the file reference. PM fix: pin critical artifacts in state with explicit retrieval rules — not hope the model remembers.",
        },
        {
          title: "Enterprise agent with 128K window still failed — wrong memory layer",
          body: "Team stuffed full CRM exports into context instead of episodic retrieval. Latency hit 8s; model attended to wrong fields. PM reframed memory as retrieve-on-demand semantic store, not bigger prompt.",
        },
        {
          title: "ChatGPT memory toggle — user-visible memory as product policy",
          body: "OpenAI's optional cross-session memory made persistence explicit and user-controllable. PM lesson: memory features need UX for view, edit, and delete — not silent accumulation.",
        },
      ],
    }),
    buildSection({
      number: "4.2",
      title: "In-context memory",
      subtitle: "Everything in the active prompt — fast, ephemeral, expensive",
      take: "In-context memory is whatever currently lives in the model's prompt: system instructions, conversation history, tool outputs, and retrieved chunks. It's the fastest recall path — zero retrieval latency — but bounded by window size and token cost.",
      why: "Most v1 agents rely entirely on in-context memory because it's simple. PMs who understand its limits know when 'just increase context' stops being a viable roadmap item.",
      paragraphs: [
        [
          s("In-context memory is the default for chat history. "),
          x(
            "Each turn appends user message, assistant reply, and tool results to the messages array sent to the API. The model 'remembers' by re-reading the full transcript — there is no separate memory module unless you build one.",
            "Every prior token is re-processed on each call — cost scales superlinearly with conversation length on many APIs.",
          ),
          s(" Long threads are a COGS problem disguised as a UX feature."),
        ],
        [
          s("Attention dilution hurts even when content fits. "),
          x(
            "Models can lose focus on critical details buried mid-context — 'lost in the middle' effects mean retrieval quality matters even inside the window.",
            "Pinning: keep high-priority facts in system prompt or final user message improves recall without expanding total tokens.",
          ),
          s(" PMs ask eng to identify 'must-not-drop' fields and where they live in the prompt stack."),
        ],
        [
          s("In-context is right for short, high-stakes, fully-visible context. "),
          x(
            "Use when: task completes in <10 turns, all context must be auditable in one trace, retrieval latency is unacceptable (sub-second voice), or regulatory requires full prompt logging.",
            "Avoid as sole strategy when: multi-day workflows, thousands of prior interactions, or large document corpora must inform each turn.",
          ),
          s(" Treat in-context as L1 cache — hot, small, intentional."),
        ],
      ],
      examples: [
        {
          title: "Voice assistant — in-context only by necessity",
          body: "Sub-300ms budgets leave no room for vector retrieval mid-utterance. Product kept last 3 turns in-context; older context summarised at session end. PM accepted tradeoff: fast but shallow memory.",
        },
        {
          title: "Token bill shock from full history replay",
          body: "B2B agent sent entire 40-turn threads every call — $0.18 per query at scale. PM mandated sliding window + episodic retrieval for turns older than 8. COGS dropped 62%.",
        },
        {
          title: "System prompt pinning for compliance disclaimers",
          body: "Legal required disclaimer on every response. PM ensured disclaimer lived in system prompt, not turn 1 of history — preventing summarisation from dropping it.",
        },
      ],
    }),
    buildSection({
      number: "4.3",
      title: "Episodic memory",
      subtitle: "Records of what happened — actions, outcomes, and interaction traces",
      take: "Episodic memory stores time-ordered records of past interactions and agent actions — 'user asked for refund on Tuesday,' 'tool X returned error code 403' — retrieved when relevant rather than kept permanently in-context.",
      why: "Agents that act across sessions need episodic recall to avoid repeating work and to personalise. PMs define what episodes are stored, for how long, and under whose consent.",
      paragraphs: [
        [
          s("Episodes are events, not facts. "),
          x(
            "Episodic memory captures what occurred: timestamps, tool calls, user messages, outcomes. Semantic memory (next section) captures distilled facts. Conflating them produces bloated stores or wrong retrieval.",
            "Schema example: { session_id, timestamp, action, result, user_id } — queryable and auditable.",
          ),
          s(" PMs specify retention TTL for episodes — 30 days vs forever is a legal and UX decision."),
        ],
        [
          s("Retrieval triggers episodic recall into context. "),
          x(
            "On new user message, embed query → search episode store → inject top-k relevant past events into prompt. User sees continuity without shipping full history every turn.",
            "Bad retrieval surfaces irrelevant past actions — agent references a cancelled task from months ago.",
          ),
          s(" Golden eval cases should include 'don't resurrect stale episodes' scenarios."),
        ],
        [
          s("Episodic memory powers personalisation and audit. "),
          x(
            "Personalisation: 'last time you preferred CSV export.' Audit: 'agent sent email at 14:03 with these parameters.' Both require structured episode logs, not raw chat dumps.",
            "Enterprise buyers ask for episode logs in security reviews — PM treats them as compliance assets.",
          ),
          s(" Episodic design belongs in the AI PRD when agents take actions on behalf of users."),
        ],
      ],
      examples: [
        {
          title: "Shopping agent — episodic cart abandonment",
          body: "Agent stored episode 'user abandoned checkout at payment step.' Next session retrieved episode and offered to resume. Conversion +8%. PM defined 7-day episode TTL and opt-out.",
        },
        {
          title: "Wrong episode retrieved — creepy recall",
          body: "Agent mentioned a health question from a shared demo account. Root cause: episode store keyed by org not user. PM blocked launch until memory isolation per user_id shipped.",
        },
        {
          title: "Zendesk-style ticket handoff via episodes",
          body: "Human agent picked up case; AI summary pulled episodic trace of tool calls and prior bot attempts. PM spec: episodes must be human-readable in support console.",
        },
      ],
    }),
    buildSection({
      number: "4.4",
      title: "Semantic memory",
      subtitle: "Long-term factual knowledge retrieved by meaning",
      take: "Semantic memory stores facts, preferences, and domain knowledge as embeddings in vector stores — retrieved by semantic similarity when the agent needs background knowledge not present in the current thread.",
      why: "RAG is semantic memory for documents; user preference stores are semantic memory for people. PMs already know RAG — agent semantic memory applies the same pattern to user-specific and agent-learned facts.",
      paragraphs: [
        [
          s("Semantic memory is the agent's external knowledge graph. "),
          x(
            "Facts extracted from conversations ('user is vegetarian,' 'Q3 budget cap is $50K') embed and index for later retrieval. Unlike episodes, semantic entries are deduplicated and updated — latest fact wins.",
            "Extraction pipeline: after each session, LLM proposes fact candidates → human or automated validation → upsert to semantic store.",
          ),
          s(" PMs govern what categories of facts may be auto-extracted vs require explicit user confirmation."),
        ],
        [
          s("Overlap with RAG — and intentional separation. "),
          x(
            "Company docs RAG and user semantic memory should use separate indexes and access controls. Mixing them risks leaking one user's preferences into another's answers or polluting doc retrieval with chat noise.",
            "Architecture: org_knowledge_index vs user_memory_index — different namespaces, different retention policies.",
          ),
          s(" Ask eng for a memory topology diagram before multi-tenant launch."),
        ],
        [
          s("Semantic retrieval quality depends on extraction quality. "),
          x(
            "Garbage fact extraction ('user hates project' from sarcasm) poisons long-term memory. Confidence scores and user confirmation for high-impact facts reduce harm.",
            "Eval: precision/recall on 'should agent know X about user Y' test sets.",
          ),
          s(" Semantic memory without extraction eval is a slow-motion hallucination factory."),
        ],
      ],
      examples: [
        {
          title: "Notion AI — workspace vs user semantic layers",
          body: "Workspace content indexed as org semantic memory; user-specific signals kept separate. PM pattern: separate indexes for shared knowledge and personal context.",
        },
        {
          title: "Fact extraction false positive — wrong dietary preference",
          body: "Agent remembered 'vegan' from a joke in chat; restaurant recommendations broke trust. PM added user-visible 'memories' page to view and delete stored facts.",
        },
        {
          title: "Sales copilot semantic memory for account facts",
          body: "Post-call extraction updated semantic store: 'Acme uses Salesforce, renewal March.' Next call retrieved facts without rep re-briefing. PM owned fact categories and CRM sync rules.",
        },
      ],
    }),
    buildSection({
      number: "4.5",
      title: "Procedural memory",
      subtitle: "How the agent knows what to do — baked into weights and prompts",
      take: "Procedural memory is knowledge of how to perform tasks — workflows, tool orderings, formatting rules — encoded in fine-tuned weights, system prompts, or explicit playbooks rather than retrieved as episodic or semantic facts.",
      why: "When agents 'forget how' to follow your process, the fix is often procedural (prompt, fine-tune, workflow graph) not episodic (more chat history). PMs route reliability issues to the right memory layer.",
      paragraphs: [
        [
          s("Procedural memory lives in system design, not vector DBs. "),
          x(
            "Examples: 'always call validate_schema before send_email,' 'use tone guide v3 for customer replies,' 'escalate if refund >$500.' These are policies and skills — stable across sessions.",
            "Delivery mechanisms: system prompt, fine-tuned adapter, LangGraph node sequence, or hardcoded orchestration.",
          ),
          s(" PMs version procedural memory like code — changelog when workflow steps change."),
        ],
        [
          s("Fine-tuning encodes procedural memory in weights. "),
          x(
            "Support bot fine-tuned on resolved tickets internalises triage patterns — procedural memory that doesn't consume context tokens each turn.",
            "Tradeoff: updating procedure requires retrain or prompt overlay — slower iteration than editing a retrieved doc.",
          ),
          s(" Pair fine-tune (stable procedures) with semantic memory (changing facts)."),
        ],
        [
          s("Playbooks and SOPs are procedural memory documents. "),
          x(
            "Retrieved SOP chunks blur line between semantic and procedural — treat runbooks as procedural when agent must follow steps in order.",
            "PM maintains canonical SOP versions; agent retrieves 'current refund SOP v2.4' not stale v2.1.",
          ),
          s(" When agent skips steps, debug procedural layer before episodic layer."),
        ],
      ],
      examples: [
        {
          title: "Fine-tuned triage bot — procedural memory in LoRA",
          body: "LoRA on 5K resolved tickets encoded escalation rules procedurally. PM updated procedure via quarterly retrain; episodic memory handled case-specific facts.",
        },
        {
          title: "System prompt as procedural memory — version drift",
          body: "Two deploy environments ran different system prompts; agents behaved inconsistently. PM instituted prompt registry with version tags visible in admin console.",
        },
        {
          title: "LangGraph workflow — procedural memory as graph",
          body: "Refund flow encoded as fixed node sequence with conditional branches. PM chose graph over freeform agent because procedure compliance was non-negotiable.",
        },
      ],
    }),
    buildSection({
      number: "4.6",
      title: "External memory stores",
      subtitle: "Databases, vector stores, and KV layers behind long-term recall",
      take: "External memory stores persist agent state outside the prompt — vector DBs for semantic recall, SQL/NoSQL for structured episodes, Redis for session scratchpads, and file stores for artifacts. They are the infrastructure PMs fund when agents outgrow chat history.",
      why: "Choosing stores affects latency SLA, cost, compliance, and multi-tenant isolation. PMs don't pick Pinecone vs Postgres — but they must ask whether memory infra meets product requirements.",
      paragraphs: [
        [
          s("Typical store mapping by memory type. "),
          x(
            "Semantic → vector DB (Pinecone, pgvector, Qdrant). Episodic → event log (Postgres, DynamoDB, ClickHouse). Session scratchpad → Redis with TTL. Artifacts → S3 with metadata index.",
            "Unified 'memory API' abstraction lets eng swap stores without rewriting agent logic — PM cares about SLA not vendor.",
          ),
          s(" Composite architecture is normal — one store rarely fits all memory types."),
        ],
        [
          s("Latency budget includes memory retrieval. "),
          x(
            "Each retrieval adds 50–300ms (embed + search + rerank). Multi-store lookups compound. PM sets end-to-end latency budgets that account for memory hops.",
            "Caching frequent memories (user prefs) in Redis reduces repeat retrieval cost.",
          ),
          s(" 'Instant' agent UX conflicts with deep memory — design tiered recall."),
        ],
        [
          s("Backup, deletion, and portability are product requirements. "),
          x(
            "GDPR erasure must delete user rows across all memory stores — PM coordinates with legal on data map.",
            "Export: users may request 'what do you remember about me' — memory stores need query APIs for privacy UX.",
          ),
          s(" External memory without deletion story fails enterprise procurement."),
        ],
      ],
      examples: [
        {
          title: "pgvector for semantic + Postgres for episodes",
          body: "Team avoided second vendor by using pgvector alongside transactional episode tables. PM accepted slightly higher latency for simpler ops and unified backup.",
        },
        {
          title: "Redis session + S3 artifact store",
          body: "Long tool outputs stored in S3; Redis held pointers and summaries. Prevented context blow-up from 50-page PDF extractions. PM spec'd max artifact size and TTL.",
        },
        {
          title: "GDPR deletion across three stores — 6-week remediation",
          body: "User delete button wiped chat UI but not vector memory. Audit failure. PM added deletion cascade requirement to memory PRD for all new features.",
        },
      ],
    }),
    buildSection({
      number: "4.7",
      title: "Memory retrieval strategies",
      subtitle: "Recency, relevance, and importance — what enters context",
      take: "Agents can't inject all stored memory into each turn — retrieval strategies rank candidates by semantic relevance, recency, importance, and user scope before packing the context window.",
      why: "Wrong retrieval is indistinguishable from wrong answers. PMs define ranking policies and eval retrieval separately from generation quality.",
      paragraphs: [
        [
          s("Multi-signal ranking beats pure similarity. "),
          x(
            "Combine vector score + recency decay + explicit user pins + importance tags ('critical: allergy'). RRF or learned rerankers merge signals.",
            "Pure top-k similarity retrieves tangentially related but wrong-era facts.",
          ),
          s(" PM workshop: list memory types that must always override similarity rank."),
        ],
        [
          s("Query formulation for memory search. "),
          x(
            "Use current user message, agent plan step, or hyde-generated query to search memory. Multi-query retrieval (generate 3 query variants) improves recall on ambiguous prompts.",
            "Agent can explicitly 'remember to look up X' in scratchpad — memory-aware planning.",
          ),
          s(" Log retrieval candidates in traces — debug 'why did agent think that?'"),
        ],
        [
          s("Token budget allocation across memory types. "),
          x(
            "Example split: 40% recent turns, 30% semantic facts, 20% episodic events, 10% retrieved docs — tunable per product.",
            "Dynamic allocation: if semantic retrieval empty, expand doc RAG budget.",
          ),
          s(" PM defines priority order when window is full — what gets dropped first."),
        ],
      ],
      examples: [
        {
          title: "Recency-weighted retrieval fixed stale preference bug",
          body: "User changed shipping address; agent used old address from semantically similar 'delivery' episode. PM added recency boost for contact-info category.",
        },
        {
          title: "Pinned memories — user override of ranking",
          body: "Power users pinned 'always use formal tone for client X.' Pins bypass pure similarity. PM shipped pin UI after enterprise request.",
        },
        {
          title: "Retrieval eval suite — 50 'should recall' cases",
          body: "PM curated cases where correct answer requires specific memory. Automated nightly retrieval eval blocked deploy when recall dropped 5pp.",
        },
      ],
    }),
    buildSection({
      number: "4.8",
      title: "Memory compression and summarisation",
      subtitle: "Fitting the past into the present window",
      take: "When conversations or episode logs exceed context limits, agents compress history via rolling summarisation, structured state objects, or extractive fact promotion — trading detail for space while trying to preserve decision-critical information.",
      why: "Compression is lossy. PMs decide what loss is acceptable and require eval when summarisation strategy changes — silent summary bugs erase commitments.",
      paragraphs: [
        [
          s("Rolling summary pattern. "),
          x(
            "Every N turns, LLM summarises older messages into a compact block; raw messages archived externally. Summary replaces history in-context.",
            "Risk: summary drops nuance ('user said maybe' → summary says 'user agreed'). Critical for legal and financial agents.",
          ),
          s(" PM flags domains where summarisation is forbidden — full transcript retrieval instead."),
        ],
        [
          s("Structured state compression. "),
          x(
            "Instead of prose summary, maintain JSON state: { goal, completed_steps, pending_items, key_entities }. Smaller and more reliable for tool-heavy agents.",
            "LangGraph checkpoints often use structured state — aligns with agent frameworks.",
          ),
          s(" Prefer structured state when agent is workflow-like; prose summary when conversational."),
        ],
        [
          s("Promotion pipeline: compress → extract → archive. "),
          x(
            "Before deleting raw turns, extract durable facts to semantic memory; archive full transcript to cold storage for audit.",
            "Three-stage pipeline prevents total information loss while keeping hot path lean.",
          ),
          s(" PM defines audit retention even when user-facing memory compresses."),
        ],
      ],
      examples: [
        {
          title: "Summary dropped cancellation caveat — support incident",
          body: "Compressed history lost 'do not cancel subscription' note; agent cancelled anyway. PM required structured state field do_not_cancel: true before compression.",
        },
        {
          title: "Claude-style periodic summarisation",
          body: "Long chats auto-summarise with user-visible continuity. PM benchmark: task completion on 50-turn synthetic tasks before/after summarisation threshold change.",
        },
        {
          title: "Checkpoint every 5 tool calls",
          body: "Engineering checkpointed structured state to Postgres; raw tool I/O in S3. Agent resumed 2-hour workflow after crash. PM sold reliability win to enterprise.",
        },
      ],
    }),
    buildSection({
      number: "4.9",
      title: "Memory isolation in multi-user systems",
      subtitle: "Shared memory is a privacy bug, not a feature",
      take: "Agent memory must be scoped per user, tenant, or session with hard enforcement at the storage and retrieval layers — cross-user memory leakage is a severity-1 privacy incident, not an edge case.",
      why: "Multi-tenant B2B and consumer apps share infrastructure. PMs treat memory namespace design as blocking for GA — legal and trust implications exceed model quality.",
      paragraphs: [
        [
          s("Namespace every memory write and read. "),
          x(
            "Partition keys: tenant_id + user_id minimum. Retrieval queries must include partition filter — never rely on LLM to 'know' not to cross users.",
            "Defense in depth: middleware injects user scope; vector DB metadata filter mandatory.",
          ),
          s(" Pen-test memory isolation before enterprise launch — red-team cross-tenant retrieval."),
        ],
        [
          s("Shared vs private memory tiers. "),
          x(
            "Org-wide semantic memory (company policies) vs user-private memory (preferences) vs team-shared (project context). PM documents who can read/write each tier.",
            "Role-based access: manager agent may read team episodes; individual contributor may not read peer private memory.",
          ),
          s(" 'Workspace memory' features need explicit sharing consent UX."),
        ],
        [
          s("Observability must not exfiltrate across users. "),
          x(
            "Traces and logs containing memory contents need same scoping as stores. Support tools show memory only for authenticated user context.",
            "Common bug: debug dashboard shows retrieved memories from wrong session.",
          ),
          s(" PM security review includes memory scoping in logging pipeline."),
        ],
      ],
      examples: [
        {
          title: "Cross-tenant retrieval in staging — caught pre-GA",
          body: "Missing tenant_id filter in vector query returned another customer's contract terms. PM halted release; eng added integration tests asserting partition filters on every memory API.",
        },
        {
          title: "Team shared project memory with ACL",
          body: "Consulting copilot shared project semantic memory across invite-only workspace; private user memory stayed isolated. PM spec'd invite model before memory sharing.",
        },
        {
          title: "Support agent viewing user memory — audit log",
          body: "Human support could view agent memory for debugging with logged justification. PM balanced debuggability vs privacy per SOC2 requirements.",
        },
      ],
    }),
    buildSection({
      number: "4.10",
      title: "PM decision lens",
      subtitle: "Designing memory architecture for task length, expectation, and cost",
      take: "Match memory depth to task duration, user expectations, and infra budget: short tasks → in-context only; multi-session → episodic + semantic; regulated multi-tenant → isolation-first external stores with compression eval gates.",
      why: "Memory architecture is a one-way door — migrating stores after launch is painful. PMs who document the memory matrix upfront avoid re-architecture under user backlash.",
      paragraphs: [
        [
          s("The memory decision matrix. "),
          x(
            "Rows: task length (turns/sessions), sensitivity (PII/regulated), personalisation need, multi-user. Columns: in-context, episodic, semantic, procedural, external stores.",
            "Fill matrix in PRD; empty cells mean explicit 'out of scope' not accidental gap.",
          ),
          s(" Review matrix when adding tools that produce large outputs — memory pressure changes."),
        ],
        [
          s("User-facing memory UX requirements. "),
          x(
            "View what agent remembers, edit/delete facts, opt out of cross-session memory, export data. Consumer regulations increasingly expect these.",
            "Transparency reduces 'creepy' factor and support load from wrong memories.",
          ),
          s(" Memory UX is product work — not a settings afterthought."),
        ],
        [
          s("Cost and eval cadence. "),
          x(
            "Model memory COGS: retrieval embeddings, store GB, re-read tokens. Set budgets per DAU tier.",
            "Quarterly: retrieval recall eval, compression regression, isolation pen-test, retention policy audit.",
          ),
          s(" PM owns memory roadmap sequencing: isolation before personalisation before cross-session intelligence."),
        ],
      ],
      examples: [
        {
          title: "Memory matrix deferred over-engineering",
          body: "PM scoped v1 to in-context + session Redis only; v2 added semantic user memory after PMF. Avoided 3-month infra delay — honest sequencing.",
        },
        {
          title: "Enterprise RFP — memory isolation dossier",
          body: "Bank required diagram of memory stores, TTLs, deletion SLA, and pen-test results. PM won deal with memory architecture doc — not model benchmark alone.",
        },
        {
          title: "Compression eval gate in CI",
          body: "Every change to summarisation prompt ran 30 long-conversation regression cases. PM blocked release when 2 cases lost refund constraints — memory treated as safety-critical.",
        },
      ],
    }),
  ],
  quiz: [
    {
      q: "An agent keeps 'forgetting' details from earlier in a 30-turn conversation despite fitting in the context window. What's the most likely first fix?",
      options: [
        "Switch to a smaller model to reduce attention dilution.",
        "Improve memory retrieval/ranking or structured state — not just add more raw history.",
        "Disable all external memory stores immediately.",
        "Remove the system prompt to free tokens.",
      ],
      correct: 1,
      correctFeedback:
        "Right. Fitting in-window ≠ reliably attended. Pinning, structured state, or better retrieval often beats blind history expansion.",
      wrongFeedback:
        "Context fit alone doesn't guarantee recall. Re-read sections 4.2, 4.7, and 4.8.",
    },
    {
      q: "What's the key difference between episodic and semantic memory?",
      options: [
        "Episodic stores time-ordered events; semantic stores distilled facts retrieved by meaning.",
        "They are identical — both use vector search only.",
        "Semantic memory only exists in fine-tuned models.",
        "Episodic memory cannot be stored externally.",
      ],
      correct: 0,
      correctFeedback:
        "Exactly. Episodes are what happened; semantic entries are what is true — different schemas, retrieval, and update rules.",
      wrongFeedback:
        "Episodes are events with timestamps; semantic memory holds facts and preferences. Re-read sections 4.3 and 4.4.",
    },
    {
      q: "A B2B agent retrieved another customer's data from the vector store. What failed?",
      options: [
        "The model's reasoning capability.",
        "Memory isolation — tenant/user scoping on writes and retrieval queries.",
        "Procedural memory in the system prompt.",
        "In-context window size.",
      ],
      correct: 1,
      correctFeedback:
        "Right. Cross-user leakage is a partition filter and architecture failure — must be enforced below the LLM layer.",
      wrongFeedback:
        "This is a multi-tenant isolation bug, not a model quality issue. Re-read section 4.9.",
    },
    {
      kind: "categorize",
      q: "Sort each item to the best primary memory type.",
      categories: ["In-context", "Episodic", "Semantic", "Procedural"],
      items: [
        { text: "Last 5 messages in the current API call.", category: 0 },
        { text: "Log of tool calls from yesterday's session.", category: 1 },
        { text: "User preference 'prefers bullet summaries' stored as embedding.", category: 2 },
        { text: "Fine-tuned escalation workflow baked into LoRA weights.", category: 3 },
        { text: "Company refund SOP retrieved from runbook index.", category: 2 },
        { text: "System prompt rule: always validate JSON before send.", category: 3 },
      ],
      correctFeedback:
        "Right. Match storage mechanism to memory role — events, facts, procedures, or hot context.",
      wrongFeedback:
        "Review sections 4.2–4.5 for definitions of each memory type.",
    },
    {
      kind: "order",
      q: "Put the recommended memory architecture rollout sequence in order.",
      prompt: "Drag to arrange first step (top) to last (bottom).",
      items: [
        "In-context + session continuity for short tasks.",
        "Hard user/tenant isolation on any external store.",
        "Episodic logs for cross-turn action audit and recall.",
        "Semantic extraction with user-visible view/delete UX.",
        "Compression with regression eval on long conversations.",
      ],
      correctFeedback:
        "Exactly. Start simple, isolate before scaling personalisation, then add extraction and lossy compression with eval gates.",
      wrongFeedback:
        "Don't add cross-session semantic memory before isolation. Re-read section 4.10.",
    },
    {
      q: "Rolling summarisation of chat history primarily risks:",
      options: [
        "Increasing API latency on every turn.",
        "Lossy compression dropping decision-critical details users assume are still known.",
        "Eliminating the need for any vector database.",
        "Improving memory isolation between tenants.",
      ],
      correct: 1,
      correctFeedback:
        "Right. Summaries save tokens but can erase nuance — eval and structured state mitigate loss.",
      wrongFeedback:
        "Summarisation trades space for fidelity. Re-read section 4.8.",
    },
  ],
});
