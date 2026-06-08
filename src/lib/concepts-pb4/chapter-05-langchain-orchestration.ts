import { buildChapter, buildSection, s, x } from "../concepts-pb4-helpers";

export const chapter05LangchainOrchestration = buildChapter({
  slug: "pb4-langchain-orchestration",
  number: 5,
  shortTitle: "LangChain Orchestration",
  title: "LangChain Orchestration",
  readingMinutes: 28,
  summary:
    "LangChain is the duct tape of LLM applications — chains, agents, tools, memory, and observability hooks in one ecosystem. Understand what it buys you, what it costs, and when lighter orchestration wins.",
  keyTakeaway:
    "LangChain is an orchestration framework, not a model. It composes LLM calls, retrieval, tools, and memory into pipelines — valuable for prototyping and standard patterns, but it adds abstraction debt you'll eventually need to justify or shed.",
  pmCallout:
    "As a PM: don't let 'we'll use LangChain' substitute for a sequence diagram. Ask what chain runs on which user action, what happens when step 3 fails, and what LangSmith trace you'll use to debug it in production.",
  sections: [
    buildSection({
      number: "5.1",
      title: "What is LangChain",
      subtitle: "The orchestration layer between your product and raw model APIs",
      take: "LangChain is an open-source Python/TypeScript framework for composing LLM applications — wrapping model APIs, retrieval, tools, and memory into reusable components called chains and agents, with integrations for dozens of vector DBs and observability tools.",
      why: "LangChain appears in half of AI startup pitch decks and eng spikes. PMs who know what it actually does — and doesn't do — can separate real architecture from resume-driven development.",
      paragraphs: [
        [
          s("At its core, LangChain solves glue-code fatigue. "),
          x(
            "A minimal RAG app needs: embed query, search vector DB, format prompt, call LLM, parse output, handle retries, log traces. LangChain packages each step as a composable primitive with community-maintained integrations.",
            "Primitives include: ChatModels (OpenAI, Anthropic, etc.), Embeddings, VectorStores, Retrievers, PromptTemplates, OutputParsers, and higher-level Chains that wire them together.",
          ),
          s(" The value proposition is speed-to-prototype and integration breadth, not magical intelligence."),
        ],
        [
          s("LangChain is not a model, a vector database, or a hosting platform. "),
          x(
            "It sits in the application layer — you still choose GPT-4 vs Claude, Pinecone vs pgvector, and your own deployment infra. LangChain is the conductor, not the orchestra.",
            "Common PM confusion: 'We're building on LangChain' sounds like a platform choice. Clarify: 'We're using LangChain to orchestrate OpenAI + Pinecone + our auth layer.'",
          ),
          s(" Vendor pitches that say 'LangChain-powered' often mean 'we used their Python wrappers in the demo.'"),
        ],
        [
          s("The ecosystem split matters for roadmap planning. "),
          x(
            "LangChain (core orchestration), LangGraph (stateful multi-step / agent graphs), and LangSmith (observability) are related but distinct products from LangChain Inc.",
            "LangGraph is increasingly the recommended path for production agents with cycles, human-in-the-loop, and durable state — while classic Chains remain fine for linear pipelines.",
          ),
          s(" PMs should ask which sub-product the team is committing to, not just 'LangChain yes/no.'"),
        ],
      ],
      examples: [
        {
          title: "Two-week RAG pilot — LangChain as accelerator",
          body: "A Series A startup shipped an internal docs copilot in 10 days using LangChain's RetrievalQA chain + Pinecone integration. PM value: predictable spike scope ('standard RAG pattern') instead of open-ended 'build AI search.' Caveat: production hardening took 8 more weeks — LangChain got them to user feedback fast, not to SOC2.",
        },
        {
          title: "LangChain on the resume vs in the architecture diagram",
          body: "Due diligence on AI vendors often reveals LangChain in demos but custom orchestration in production after scale pain. PMs evaluating build-vs-buy should ask for the production architecture diagram, not the GitHub README from week one.",
        },
        {
          title: "TypeScript vs Python LangChain — team skill matters",
          body: "LangChain exists in both ecosystems. A frontend-heavy team may prefer @langchain/langchain-js in their Node API; ML-heavy teams use Python. PM staffing decisions should align with which port the team will actually maintain — splitting across both doubles abstraction debt.",
        },
      ],
    }),
    buildSection({
      number: "5.2",
      title: "Chains",
      subtitle: "Linear pipelines — the default shape of most LLM features",
      take: "A chain is a fixed sequence of steps where each step's output feeds the next: format prompt → call model → parse output. Most v1 AI features — summarise, classify, RAG Q&A — are chains, not agents.",
      why: "Teams reach for agents because they sound sophisticated. PMs who insist on starting with chains ship faster, debug easier, and only add agent complexity when the use case genuinely requires dynamic tool selection.",
      paragraphs: [
        [
          s("LCEL (LangChain Expression Language) is the modern chain syntax. "),
          x(
            "Chains are composed with the | operator: prompt | model | parser. Each component implements Runnable — a standard invoke/stream/batch interface.",
            "Example mental model: retriever | format_docs | prompt | llm | StrOutputParser() — that's a RAG chain in four pipes.",
          ),
          s(" PMs can read an LCEL diagram left-to-right as a user-journey data flow — no Python expertise required."),
        ],
        [
          s("Chains are deterministic in structure, stochastic in output. "),
          x(
            "The steps always run in the same order; the LLM's text may vary. That predictability is a feature for testing, SLAs, and compliance — you know exactly which API calls fire per user action.",
            "Contrast with agents where the model chooses how many tool calls to make. Chains have fixed cost envelopes; agents don't.",
          ),
          s(" If your PRD says 'user asks question, system returns answer,' that's a chain until proven otherwise."),
        ],
        [
          s("Common chain patterns map directly to product features. "),
          x(
            "RetrievalQA / create_retrieval_chain: RAG. create_stuff_documents_chain: pack docs into prompt. create_map_reduce_chain: summarise long corpuses. create_extraction_chain: structured JSON from text.",
            "Each pattern encodes token-management strategy — 'stuff' sends all chunks (hits context limits), 'map-reduce' summarises in waves (higher cost, handles length).",
          ),
          s(" PMs choosing between stuff vs map-reduce is a token budget decision wearing an architecture hat."),
        ],
      ],
      examples: [
        {
          title: "Support ticket classifier — chain, not agent",
          body: "A support routing feature: prompt template + GPT-4 + JSON output parser → {category, urgency, suggested_team}. Zero tools, zero loops. Shipped as an LCEL chain with 99.5% structural reliability. PM resisted 'agent' rebranding from sales — the chain matched the actual behaviour.",
        },
        {
          title: "Map-reduce for quarterly board packs",
          body: "A finance copilot summarises 40 PDFs per board meeting. Stuff chain blew the 128K window. Map-reduce chain: summarise each doc, then summarise summaries. Cost 3×, worked reliably. PM documented per-meeting token budget in the PRD — enabled by knowing the chain pattern name.",
        },
        {
          title: "Chain failure modes are localized",
          body: "When a chain step fails (vector DB timeout), LangChain raises at that Runnable. Engineering wraps retries per step. PM benefit: incident postmortems identify 'Pinecone latency' not 'the AI broke.' Chains make blast radius legible.",
        },
      ],
    }),
    buildSection({
      number: "5.3",
      title: "Agents in LangChain",
      subtitle: "When the model decides what to do next — power with unpredictability",
      take: "A LangChain agent loops: the LLM chooses an action (usually a tool call), the framework executes it, feeds the result back, and repeats until the model emits a final answer or hits a step limit.",
      why: "Agents enable multi-step research, API orchestration, and open-ended tasks — but they multiply cost, latency, and failure modes. PMs must own the max-iteration budget and the UX for 'the agent is still thinking.'",
      paragraphs: [
        [
          s("The agent loop is ReAct-shaped even if you don't call it that. "),
          x(
            "Thought → Action → Observation → repeat. LangChain's AgentExecutor runs this loop with tools registered as callable functions the model can invoke via structured output or function-calling APIs.",
            "Each iteration is a full LLM call plus tool execution. A 5-step agent is ~5× the LLM cost of a single-shot chain.",
          ),
          s(" PMs who approve agents without a max_iterations cap are approving unbounded COGS."),
        ],
        [
          s("LangGraph is now the production path for non-trivial agents. "),
          x(
            "Classic AgentExecutor is brittle: hard to persist state, add human approval gates, or recover mid-loop. LangGraph models agents as state machines / graphs with explicit nodes and edges.",
            "PM-relevant LangGraph features: checkpointing (resume after crash), interrupt (human-in-the-loop), and conditional routing (if tool X fails, go to fallback node).",
          ),
          s(" Roadmap item 'agent v2' often means 'migrate AgentExecutor to LangGraph' — plan for that refactor in Q2, not Q4 surprise."),
        ],
        [
          s("Agents shine when the path can't be scripted upfront. "),
          x(
            "Good fits: research assistant that might search web, query CRM, or calculate — depending on the question. Bad fits: fixed invoice extraction workflow that always runs the same three steps.",
            "Test: can you draw the flowchart without a '?' diamond? If yes, use a chain. If the diamond says 'model decides,' consider an agent.",
          ),
          s(" User trust drops when agents loop visibly without progress — streaming status ('Searching CRM…') is a PM UX requirement, not polish."),
        ],
      ],
      examples: [
        {
          title: "Sales copilot agent — bounded at 8 steps",
          body: "A CRM-integrated copilot lets reps ask 'prep me for the Acme call.' Agent may search accounts, pull recent emails, check open deals. PM set max_iterations=8 and timeout=45s. Average 4.2 steps, p95 cost $0.08/query. Unbounded pilot averaged $0.34 — killed margin. The cap was a product decision.",
        },
        {
          title: "Agent loop runaway — infinite tool call horror story",
          body: "A dev-tools agent without step limits called the same failing API 23 times before timeout — $2 LLM cost on one user message. PM postmortem outcome: max_iterations=5, exponential backoff on tool errors, user-visible 'I got stuck' message. LangSmith trace made the loop visible in minutes.",
        },
        {
          title: "LangGraph human-in-the-loop for refunds",
          body: "A fintech agent drafts refund decisions but LangGraph interrupts before executing Stripe API — human approves in admin UI, graph resumes. PM defined which tools require approval (money movement) vs auto (read-only). Framework choice enabled policy, not just code.",
        },
      ],
    }),
    buildSection({
      number: "5.4",
      title: "Tools and tool calling",
      subtitle: "How models touch the real world — APIs, SQL, and the trust boundary",
      take: "Tools are functions exposed to the LLM with name, description, and JSON schema. The model emits a structured tool call; LangChain executes the function and returns the result to the model — the bridge between language and action.",
      why: "Every 'AI that does things' feature is a tool-calling design problem: which actions are allowed, what descriptions steer model behaviour, and what happens when the model calls the wrong tool with wrong args.",
      paragraphs: [
        [
          s("Tool descriptions are prompt engineering by another name. "),
          x(
            "The model picks tools based on name + description text in the system prompt. Vague descriptions ('search') cause wrong picks; precise ones ('search_internal_wiki: searches employee handbook, not customer data') steer behaviour.",
            "PMs should review tool descriptions like UI copy — they're user-facing to the model and determine action selection.",
          ),
          s(" A tool catalog of 40 poorly described functions is worse than 8 well-documented ones."),
        ],
        [
          s("Structured tool calling vs ReAct text parsing. "),
          x(
            "Modern models (GPT-4, Claude) support native function/tool calling — JSON payloads the API validates. Older ReAct agents parse 'Action: search\\nAction Input: foo' from free text — fragile.",
            "LangChain supports both via bind_tools() and legacy agents. PMs should insist on native function calling for production — fewer parse failures.",
          ),
          s(" Parallel tool calls (model requests 3 tools at once) cut latency but complicate error handling — define behaviour when 1 of 3 fails."),
        ],
        [
          s("The trust boundary is at tool implementation, not the model. "),
          x(
            "LangChain @tool decorators wrap Python functions — auth, rate limits, and input validation belong inside the tool, not in hopes the model behaves.",
            "Principle of least privilege: expose read-only tools by default; write tools behind confirmation or role checks. PM defines the permission matrix; eng implements tool guards.",
          ),
          s(" Security review should list every tool, its side effects, and who can trigger it — same as any API surface."),
        ],
      ],
      examples: [
        {
          title: "SQL tool disasters — read-only replica saved the quarter",
          body: "An analytics agent shipped with a tool that ran LLM-generated SQL against production. A DROP TABLE in week two ended the experiment. Fix: tool connected to read replica only, query timeout 5s, allowlisted tables in tool description. PM signed off on the allowlist — product knowledge, not DBA trivia.",
        },
        {
          title: "Zapier-style tool sprawl",
          body: "A startup exposed 60 Zapier integrations as agent tools. Model picked wrong zaps 40% of the time. PM cut to 12 curated tools with clear descriptions — task completion doubled. Tool count is a UX variable, not 'more is better.'",
        },
        {
          title: "Tool result truncation",
          body: "A web-search tool returned 50K tokens of HTML; next LLM call blew context window. LangChain's tool message truncation + PM-defined 'summarise results before returning' policy fixed it. Tool output size is a token budget line item.",
        },
      ],
    }),
    buildSection({
      number: "5.5",
      title: "Memory modules",
      subtitle: "What the app remembers between turns — and what still counts as tokens",
      take: "LangChain memory components persist conversation history, summaries, or extracted facts across turns — but everything injected back into the prompt consumes tokens and re-enters the context window budget.",
      why: "PMs promise 'it remembers you' while engineers silently truncate history at 10 messages. Memory strategy is a product promise with direct cost and privacy implications.",
      paragraphs: [
        [
          s("Memory types map to product expectations. "),
          x(
            "ConversationBufferMemory: full transcript — simple, explodes tokens. ConversationSummaryMemory: LLM-compressed history — extra cost, longer memory. VectorStoreRetrieverMemory: retrieve relevant past turns — good for long relationships.",
            "Entity memory extracts facts ('user prefers metric units') into a structured store — enables personalisation without replaying entire chats.",
          ),
          s(" Picking memory type is choosing between fidelity, cost, and 'forgetting' behaviour users will notice."),
        ],
        [
          s("Memory is not free storage — it's recurring LLM input. "),
          x(
            "Every remembered message re-sent in the prompt costs input tokens on every subsequent turn. A 20-turn chat can accumulate 30K+ input tokens even if the latest user message is 20 tokens.",
            "Mitigations: sliding window (last K turns), summarisation triggers (every N turns), or 'forget on new session' — each is a PM-visible UX choice.",
          ),
          s(" ChatGPT's 'memory' feature is a product layer; LangChain gives primitives — PMs must define the policy."),
        ],
        [
          s("Privacy and compliance live in memory design. "),
          x(
            "GDPR deletion requests must wipe memory stores, not just UI history. Tenant isolation in B2B means memory keys scoped per org + user.",
            "LangChain memory backends range from in-process dicts (dev only) to Redis/Postgres (production). PM security review: where do conversation embeddings persist?",
          ),
          s(" 'We don't train on your data' is separate from 'we store your chat in Redis for 90 days' — both belong in the privacy FAQ."),
        ],
      ],
      examples: [
        {
          title: "Sliding window vs summary — A/B on retention",
          body: "A coaching app tested buffer memory (last 6 turns) vs summary memory (compress every 8 turns). Summary cost 12% more per session but users rated 'remembers my goals' 0.4 points higher on 5-pt scale. PM chose summary for paid tier, buffer for free — monetised memory quality.",
        },
        {
          title: "Session reset on topic change",
          body: "A legal Q&A bot detected new matter IDs and cleared memory — preventing prior case facts from bleeding into current advice. PM spec'd the reset rule; eng implemented via memory key namespace. Avoided a malpractice-adjacent failure mode.",
        },
        {
          title: "Redis memory bill surprise",
          body: "10K DAU × 50-turn average × 2KB stored per turn filled a Redis cluster in month three. PM hadn't modelled memory storage COGS separately from LLM COGS. Led to TTL policy: 7-day expiry unless user pins conversation.",
        },
      ],
    }),
    buildSection({
      number: "5.6",
      title: "LangChain vs LlamaIndex",
      subtitle: "Orchestration generalist vs data/RAG specialist — pick for your bottleneck",
      take: "LangChain is a general LLM orchestration framework (chains, agents, tools, broad integrations). LlamaIndex is optimised for data ingestion, indexing, retrieval, and query engines — RAG-first with lighter agent story.",
      why: "Eng teams sometimes run both, which doubles dependency surface. PMs who know the split can force a primary framework decision instead of accumulating glue.",
      paragraphs: [
        [
          s("LlamaIndex leads on data plumbing. "),
          x(
            "Document loaders (PDF, Notion, Slack), node parsers, hierarchical indices, query engines with built-in response synthesis — LlamaIndex assumes your hard problem is 'get the right data into the model.'",
            "LlamaIndex query engines bundle retrieve + synthesize patterns with less boilerplate than assembling LangChain Runnables from scratch.",
          ),
          s(" If your MVP is 'chat over our docs,' LlamaIndex often reaches demo faster."),
        ],
        [
          s("LangChain leads on agent orchestration breadth. "),
          x(
            "Tool ecosystems, LangGraph state machines, multi-provider model swaps, and enterprise LangSmith tracing — LangChain's bet is 'we orchestrate everything around the LLM call.'",
            "Complex agents with CRM + calendar + email tools gravitate LangChain/LangGraph even when LlamaIndex handles retrieval.",
          ),
          s(" Hybrid pattern: LlamaIndex retrieval layer + LangChain agent wrapper — works, but PM should budget integration maintenance."),
        ],
        [
          s("Neither replaces evals, guardrails, or product UX. "),
          x(
            "Both are MIT-licensed frameworks, not platforms. You still own deployment, monitoring, auth, and quality measurement.",
            "Framework choice matters less than team familiarity and hiring pool. A team that already knows LangChain shouldn't switch to LlamaIndex for a marginal retrieval API sugar.",
          ),
          s(" Decision heuristic: RAG-heavy, data-weird → evaluate LlamaIndex first. Agent-heavy, multi-integration → LangChain/LangGraph first."),
        ],
      ],
      examples: [
        {
          title: "Startup picked LlamaIndex, regretted agent phase",
          body: "Docs-only copilot v1 shipped on LlamaIndex in 3 weeks. v2 needed CRM agent tools — LlamaIndex agents were immature at the time; team bolted LangChain for agents only. PM lesson: forecast agent roadmap before framework commit, or plan hybrid early.",
        },
        {
          title: "Enterprise standardised on LangChain + single retriever",
          body: "A bank mandated LangChain for observability (LangSmith) and vendor support. Built custom retriever on internal search — skipped LlamaIndex entirely. PM valued procurement consistency over retrieval ergonomics.",
        },
        {
          title: "Side-by-side spike — same RAG, two frameworks",
          body: "Two eng days building identical RAG on both frameworks. LlamaIndex: 180 LOC. LangChain: 240 LOC. Quality identical; LlamaIndex faster to read for new hires. PM used spike output to justify LlamaIndex for RAG microservice, LangGraph for agent orchestrator.",
        },
      ],
    }),
    buildSection({
      number: "5.7",
      title: "Framework critique",
      subtitle: "Abstraction debt, breaking changes, and when to outgrow the framework",
      take: "LangChain accelerates prototypes but carries versioning churn, leaky abstractions, and debug complexity — mature teams often rewrite hot paths as plain API calls while keeping LangChain at the edges.",
      why: "PMs hear 'we need to refactor LangChain' as engineering whining until latency regresses or a breaking upgrade blocks a launch. Knowing the critique helps you schedule paydown before it becomes a crisis.",
      paragraphs: [
        [
          s("Breaking changes have been a real tax. "),
          x(
            "LangChain 0.1 → 0.2 → LCEL migrations broke countless tutorials and internal codebases. Import paths shuffle; deprecated AgentExecutor lingers alongside LangGraph.",
            "PM impact: framework upgrades compete with feature roadmap. Budget 1–2 eng-weeks per major LangChain version bump unless you pin versions aggressively.",
          ),
          s(" Pin versions in production; treat LangChain upgrades as explicit roadmap items with regression tests."),
        ],
        [
          s("Stack traces become archaeology. "),
          x(
            "Errors bubble through Runnable wrappers, retriever abstractions, and callback handlers — 'which layer failed?' takes longer than raw SDK calls.",
            "LangSmith mitigates this with traces, but local dev debugging frustrates juniors. PM signal: sprint velocity drops when onboarding new eng because of framework magic.",
          ),
          s(" If standups feature 'LangChain weirdness' weekly, schedule a simplification epic."),
        ],
        [
          s("The escape hatch is normal and healthy. "),
          x(
            "Production pattern: LangChain for retrieval orchestration and tracing; direct OpenAI/Anthropic SDK for latency-critical generation; custom code for business logic.",
            "Totally removing LangChain is rare; thinning it to 20% of calls is common at scale. PMs should celebrate 'removed LangChain from hot path' as perf win, not framework betrayal.",
          ),
          s(" Ask quarterly: which user actions still need the framework vs a 40-line function?"),
        ],
      ],
      examples: [
        {
          title: "Latency win — drop LangChain on generation path",
          body: "A copilot cut p95 latency 180ms by calling OpenAI directly for final generation while keeping LangChain retriever. PM communicated externally as 'infrastructure optimisation' — no user-facing change, measurable NPS lift on speed.",
        },
        {
          title: "0.2 migration sprint",
          body: "LangChain 0.2 migration consumed a full sprint for a 6-person team — zero user features. PM had to explain slip to CEO. Now framework upgrades are quarterly maintenance with dedicated capacity — lesson learned.",
        },
        {
          title: "Junior eng velocity — framework vs SDK",
          body: "Team A (LangChain everywhere): 3-week feature. Team B (SDK + one custom retriever): 2-week same feature. Not universal, but PM used comparison to justify 'LangChain at boundaries only' architecture guideline.",
        },
      ],
    }),
    buildSection({
      number: "5.8",
      title: "LangSmith observability",
      subtitle: "Traces, evals, and the PM dashboard for 'why did the AI do that?'",
      take: "LangSmith is LangChain Inc.'s observability platform — logging every chain/agent step, inputs/outputs, latency, and token usage — plus datasets and eval runners for regression testing prompts and pipelines.",
      why: "Without traces, AI bugs are unreproducible anecdotes. LangSmith (or an equivalent) turns 'it gave a wrong answer once' into a ticket with a trace ID — prerequisite for PM-owned quality loops.",
      paragraphs: [
        [
          s("Traces decompose a user query into billable steps. "),
          x(
            "A single user message might spawn: embed call → vector search → rerank → prompt assembly → LLM call → parser. LangSmith shows each span with timing and I/O.",
            "PMs use traces in bug triage: 'retrieval returned wrong doc' vs 'LLM ignored correct doc' — different owners, different fixes.",
          ),
          s(" Require trace URLs in AI bug tickets the same way web teams require HAR files."),
        ],
        [
          s("Datasets and evals enable regression gates. "),
          x(
            "Export production traces to datasets; define expected outputs; run eval chains on every prompt change in CI. LangSmith scores exact match, embedding distance, or LLM-as-judge.",
            "PM curates the golden dataset (50–200 real user queries) — product judgment, not ML ops trivia. Dataset quality determines whether evals catch real regressions.",
          ),
          s(" 'Prompt change' PRs without eval run should be blocked — PM policy, eng enforcement."),
        ],
        [
          s("LangSmith is optional but the capability isn't. "),
          x(
            "Alternatives: OpenTelemetry + custom dashboards, Braintrust, Weights & Biases, Helicone, Langfuse (open source). LangSmith integrates deepest with LangChain callbacks.",
            "PM requirement: pick one observability stack before launch, define retention (30/90 days), and PII redaction policy for logged prompts.",
          ),
          s(" Compliance teams will ask what's logged — answer before launch, not after audit."),
        ],
      ],
      examples: [
        {
          title: "Trace-driven retrieval fix",
          body: "PM filed 'wrong refund policy' bug. LangSmith trace showed retrieval returned 2021 policy chunk — embedding index stale, not LLM fault. Fix: re-index job. Without trace, team would have tweaked system prompt for weeks.",
        },
        {
          title: "Eval dataset from support escalations",
          body: "PM tagged 150 escalations where AI failed; eng imported as LangSmith dataset. Weekly eval runs after prompt changes. Escalation rate dropped 19% over two months — measurable ROI on observability investment.",
        },
        {
          title: "PII in traces — GDPR near-miss",
          body: "LangSmith logged full user emails in prompts until PM-required redaction middleware stripped PII before callback. Observability almost created compliance liability. Retention set to 14 days for free tier, 90 for enterprise with DPA.",
        },
      ],
    }),
    buildSection({
      number: "5.9",
      title: "PM decision lens",
      subtitle: "When LangChain helps the roadmap — and when it hijacks it",
      take: "Adopt LangChain when integration speed, standard patterns, and LangSmith tracing outweigh abstraction debt for your current scale. Outgrow or thin it when latency, debug time, or version churn dominate sprint cost.",
      why: "Framework decisions are staffing and timeline decisions. PMs who own the 'why LangChain' memo prevent both 'not invented here' rewrites and 'tutorial-driven architecture' debt.",
      paragraphs: [
        [
          s("Use this adoption checklist at kickoff. "),
          x(
            "✓ Team knows Python/TS LangChain already. ✓ Feature is chain-shaped or standard RAG/agent. ✓ LangSmith (or equivalent) in budget. ✓ Version pin + upgrade policy defined. ✗ If all boxes unchecked, consider SDK-first.",
            "Spike duration: 2–3 days to build core flow + 1 day to trace in LangSmith. If spike slips past a week, framework may be wrong fit.",
          ),
          s(" Document the sequence diagram independent of LangChain — framework becomes swappable implementation."),
        ],
        [
          s("Define success metrics beyond 'it works in demo.' "),
          x(
            "p95 latency per user action, cost per successful task, eval score on golden set, mean time to diagnose production issues.",
            "LangChain should improve time-to-first-demo AND not regress time-to-diagnose. If latter suffers by month 3, plan thinning.",
          ),
          s(" Quarterly framework review: hours spent on upgrades vs features — if >15%, escalate."),
        ],
        [
          s("Negotiate the agent boundary with stakeholders. "),
          x(
            "Sales wants 'autonomous AI agent.' Engineering can ship a 3-tool LangGraph with caps in 4 weeks or an unbounded agent that fails demos in 4 weeks.",
            "PM translates: 'agent' = dynamic tool selection with these 5 tools, 6-step max, human approval on writes. LangChain is how, not what.",
          ),
          s(" The PM who writes tool permissions, iteration caps, and memory policy owns the product — regardless of framework logo on the architecture slide."),
        ],
      ],
      examples: [
        {
          title: "Build vs LangChain vs buy — three-option memo",
          body: "Mature AI PMs present three options: raw SDK (slow build, max control), LangChain (fast build, abstraction tax), vertical SaaS (fastest, least custom). CEO picks with eyes open on 12-month TCO. LangChain wins the middle when custom logic is real but time matters.",
        },
        {
          title: "Framework exit strategy",
          body: "One team's architecture doc included 'LangChain escape hatches': list of Runnables that must remain swappable, interfaces for retriever and LLM. PM required it after 0.2 migration pain. Exit strategy reduced fear of commitment.",
        },
        {
          title: "LangSmith as shared PM/eng language",
          body: "Weekly quality review opens with LangSmith dashboard: top failing traces, cost outliers, latency regressions. PM and eng discuss same artifacts — fewer 'the AI feels worse' debates, more 'eval score on dataset X dropped 4 points after PR 1847.'",
        },
      ],
    }),
  ],
  quiz: [
    {
      q: "A feature always runs: embed query → search → format prompt → LLM → parse JSON. What LangChain primitive fits best?",
      options: [
        "Agent with 10 tools",
        "A linear chain (LCEL pipeline)",
        "VectorStoreRetrieverMemory only",
        "LangGraph cyclic graph",
      ],
      correct: 1,
      correctFeedback:
        "Right. Fixed-step pipelines are chains — predictable structure, bounded cost. Agents are for when the model must choose actions dynamically.",
      wrongFeedback:
        "The flow has no decision diamonds — same steps every time. That's a chain, not an agent. Re-read section 5.2.",
    },
    {
      q: "Your agent's average cost per query tripled after launch. What's the first PM lever to investigate?",
      options: [
        "Switch vector database brand",
        "Check max_iterations and tool call count per trace in LangSmith",
        "Remove all memory modules",
        "Upgrade to a larger embedding model",
      ],
      correct: 1,
      correctFeedback:
        "Exactly. Agent cost scales with LLM round-trips. Traces show runaway loops or excessive tool calls — cap iterations before optimising models.",
      wrongFeedback:
        "Cost tripling on an agent usually means more LLM steps per query, not embedding or vector DB pricing. Inspect traces for iteration count. Re-read section 5.3.",
    },
    {
      q: "LangChain vs LlamaIndex — which framing is most accurate for a docs-only RAG v1?",
      options: [
        "LlamaIndex is often faster to demo for ingestion + retrieval; LangChain shines more for multi-tool agents.",
        "LlamaIndex only works with OpenAI.",
        "LangChain cannot do retrieval.",
        "They are identical products with different logos.",
      ],
      correct: 0,
      correctFeedback:
        "Right. LlamaIndex is RAG/data-first; LangChain is general orchestration. Many teams pick based on whether v1 is 'chat over docs' or 'agent with many integrations.'",
      wrongFeedback:
        "The frameworks overlap but optimise for different bottlenecks. RAG-heavy v1 often favours LlamaIndex ergonomics; agent-heavy favours LangChain/LangGraph. Re-read section 5.6.",
    },
    {
      kind: "categorize",
      q: "Classify each item as a LangChain Chain concern or Agent concern.",
      categories: ["Chain", "Agent"],
      items: [
        { text: "Fixed map-reduce summarisation over 20 PDFs.", category: 0 },
        { text: "Model chooses between CRM lookup, web search, or calculator per question.", category: 1 },
        { text: "RetrievalQA with known retrieve-then-generate flow.", category: 0 },
        { text: "Requires max_iterations cap and tool permission matrix.", category: 1 },
        { text: "LCEL: prompt | llm | parser.", category: 0 },
        { text: "LangGraph interrupt for human approval before payment API.", category: 1 },
      ],
      correctFeedback:
        "Right. Chains are deterministic pipelines; agents add dynamic tool selection, loops, and governance PMs must specify.",
      wrongFeedback:
        "If the model picks what happens next, it's agent territory. If steps are fixed, it's a chain. Re-read sections 5.2 and 5.3.",
    },
    {
      q: "Why should PMs review LangChain tool descriptions before launch?",
      options: [
        "They appear in the user-facing UI footer.",
        "The model uses name + description to select tools — vague descriptions cause wrong action selection.",
        "Tool descriptions determine vector embedding dimensions.",
        "LangSmith won't trace tools without PM approval.",
      ],
      correct: 1,
      correctFeedback:
        "Right. Tool descriptions are steering prompts for action selection. They're product copy aimed at the model, not decoration.",
      wrongFeedback:
        "Tool descriptions don't affect embeddings or LangSmith tracing — they guide which function the LLM invokes. Re-read section 5.4.",
    },
    {
      kind: "order",
      q: "Order the steps for responsible LangChain adoption on a new AI feature.",
      prompt: "Drag to arrange first step (top) to last (bottom).",
      items: [
        "Draw the user-action sequence diagram independent of framework.",
        "Spike core flow with chains/agents and pin dependency versions.",
        "Wire LangSmith (or equivalent) tracing on all LLM steps.",
        "Build golden eval dataset from real user queries.",
        "Define agent caps, tool permissions, and memory policy before production.",
      ],
      correctFeedback:
        "Exactly. Architecture first, spike second, observability and evals before scale, governance before prod. Skipping tracing is how AI bugs become folklore.",
      wrongFeedback:
        "Start with what the product does, then implement, then instrument, then gate quality. Re-read sections 5.8 and 5.9.",
    },
  ],
});
