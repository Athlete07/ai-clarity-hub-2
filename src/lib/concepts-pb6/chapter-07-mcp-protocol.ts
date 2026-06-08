import { buildChapter, buildSection, s, x } from "../concepts-pb4-helpers";

export const chapter07McpProtocol = buildChapter({
  slug: "pb6-mcp-protocol",
  number: 7,
  shortTitle: "MCP Protocol",
  title: "MCP Protocol",
  readingMinutes: 28,
  summary:
    "Model Context Protocol — the open standard that lets agents discover and use tools, resources, and prompts across systems without bespoke integrations for every pair — client/server architecture, primitives, security, ecosystem growth, and the PM platform decision of whether to expose your product as an MCP server.",
  keyTakeaway:
    "MCP collapses the N×M integration problem between agents and tools into a single protocol — but adoption is a product strategy, not just an eng convenience. PMs who understand MCP primitives and security can decide when standardised agent access is distribution and when it is liability.",
  pmCallout:
    "As a PM: before approving MCP server work, answer three questions — which capabilities do we expose, who authenticates, and what happens when an agent calls delete_customer via our MCP tool at 3am? Protocol standardisation doesn't remove permission design.",
  sections: [
    buildSection({
      number: "7.1",
      title: "What is MCP (Model Context Protocol)",
      subtitle: "An open protocol for agent–tool connectivity",
      take: "Model Context Protocol (MCP) is an open standard — originally from Anthropic — that defines how AI applications (hosts) connect to external data sources and tools (servers) through a consistent client–server interface, so agents can discover capabilities at runtime instead of hard-coding every integration.",
      why: "MCP is appearing in Cursor, Claude Desktop, and enterprise agent roadmaps. PMs who know what MCP standardises — and what it doesn't — can evaluate vendor claims and decide whether MCP belongs in the product strategy.",
      paragraphs: [
        [
          s("MCP is transport and contract, not intelligence. "),
          x(
            "It specifies how a host application lists available tools, invokes them, reads resources, and fetches prompt templates from an MCP server — typically over stdio or HTTP with JSON-RPC messages.",
            "The LLM still decides what to call; MCP just makes the call path standard. Think USB-C for agent integrations: one port shape, many devices.",
          ),
          s(" PM framing: MCP reduces integration engineering; it does not reduce product permission design."),
        ],
        [
          s("Hosts, clients, and servers form the session triangle. "),
          x(
            "Host: the user-facing app (IDE, chat client, agent runtime). MCP client: embedded in the host, speaks MCP to servers. MCP server: exposes your product's tools/resources — Postgres, Slack, filesystem, internal API.",
            "One host can connect to many servers simultaneously — the agent sees a unified capability catalogue.",
          ),
          s(" Demo magic ('agent uses 12 tools') often hides a dozen MCP servers behind one client."),
        ],
        [
          s("MCP complements your existing API strategy. "),
          x(
            "REST and GraphQL remain for human-built integrations; MCP optimises for agent discovery and structured tool invocation with schema metadata the model reads.",
            "Products can ship both: public REST for developers, MCP server for agent hosts — different distribution channels, overlapping backend.",
          ),
          s(" Ask eng: 'Which customer segment gets MCP first — power users in IDE or enterprise orchestration?'"),
        ],
      ],
      examples: [
        {
          title: "Cursor connects to filesystem MCP",
          body: "Developer uses Cursor with built-in filesystem MCP server — agent reads and edits project files without custom Cursor–filesystem glue per repo. PM lesson: standard protocol let IDE ship tool use faster than negotiating per-SaaS SDKs. User value: agent that actually touches their code.",
        },
        {
          title: "Internal wiki as MCP resource server",
          body: "Team exposed Confluence-like docs as MCP resources — agent hosts pull page content on demand. PM scoped read-only resources first; write tools deferred to Q2 after audit. MCP let them ship read access in one sprint vs six bespoke RAG connectors.",
        },
        {
          title: "Vendor pitch vs reality",
          body: "Sales claimed 'MCP-native platform.' Due diligence: only one demo MCP server, production still REST webhooks. PM required MCP roadmap with auth story before enterprise renewal. Lesson: MCP label without server catalogue is marketing.",
        },
      ],
    }),
    buildSection({
      number: "7.2",
      title: "Why MCP exists",
      subtitle: "The N×M integration problem and protocol collapse",
      take: "Before MCP, every agent framework needed custom adapters for every tool — LangChain wrapper for Slack, different wrapper for Notion, another for Postgres — creating an N×M matrix of integrations that duplicated effort and fragmented security models; MCP collapses that matrix into N+M by standardising the server interface.",
      why: "Integration sprawl slows agent roadmaps and creates inconsistent permission models. PMs who articulate the N×M cost can justify MCP investment vs continuing one-off connectors.",
      paragraphs: [
        [
          s("The integration matrix explodes with ambition. "),
          x(
            "5 agent hosts × 20 tools = 100 potential integrations if every pair is bespoke. Each needs schema maintenance, auth, rate limits, error handling, and docs when APIs change.",
            "MCP says: build one MCP server per tool domain; any MCP-compatible host connects without custom code.",
          ),
          s(" PM ROI calc: engineering weeks saved × number of agent hosts you want to support."),
        ],
        [
          s("Fragmented integrations fragment security review. "),
          x(
            "Bespoke Slack bot uses OAuth scope A; agent chain uses scope B; Zapier uses C. Security and legal review each path separately.",
            "MCP centralises: one server, one auth model, one audit log format for all MCP hosts.",
          ),
          s(" Compliance teams prefer one protocol with documented auth over ten ad hoc agent connectors."),
        ],
        [
          s("Network effects favour early MCP servers. "),
          x(
            "As more hosts adopt MCP, each new MCP server becomes instantly usable in Claude Desktop, Cursor, and internal agents — distribution without per-host partnership deals.",
            "Products with APIs should evaluate: is agent-driven usage a growth channel worth MCP exposure?",
          ),
          s(" PM question: 'If we ship an MCP server tomorrow, which three hosts would our customers actually use?'"),
        ],
      ],
      examples: [
        {
          title: "Six Slack integrations consolidated",
          body: "Company had Slack tools in three agent prototypes plus two RAG pipelines — different token scopes, conflicting rate limits. PM chartered single Slack MCP server; all hosts migrated in one quarter. Security review once, not five times.",
        },
        {
          title: "Startup deferred MCP — valid choice",
          body: "B2B product with two customers and one agent host built direct Postgres tool — 3 days. MCP server would take 2 weeks with auth hardening. PM correctly sequenced: bespoke first, MCP when third host appeared. Protocol isn't mandatory at low N.",
        },
        {
          title: "Ecosystem catalogue accelerated sales",
          body: "Prospect asked 'does your CRM work with Claude Desktop?' AE linked official MCP server in ecosystem directory — proof without custom POC. PM attributed one mid-market close to MCP listing; funded maintenance of server alongside REST API.",
        },
      ],
    }),
    buildSection({
      number: "7.3",
      title: "MCP architecture",
      subtitle: "Client, server, and host — session roles",
      take: "An MCP session involves three roles: the host application that embeds an MCP client, one or more MCP servers that expose capabilities, and the transport layer connecting them — the client negotiates capabilities, routes tool calls, and streams results back to the agent runtime inside the host.",
      why: "Architecture clarity prevents PMs from conflating 'our product has MCP' with 'our product is an agent.' Knowing roles helps scope security, SLAs, and support boundaries.",
      paragraphs: [
        [
          s("The host owns user context and agent orchestration. "),
          x(
            "Host runs the LLM, maintains conversation state, and decides which MCP servers are enabled for this user session. Examples: Cursor IDE, Claude Desktop, custom internal agent portal.",
            "Host is responsible for surfacing server permissions to the user — 'this agent can access your files and Postgres.'",
          ),
          s(" PM owns host UX for permission prompts — users blame the host brand when tools misbehave."),
        ],
        [
          s("The MCP client is the protocol adapter inside the host. "),
          x(
            "Client handles initialize handshake, capability listing, tool invocation, resource reads, and notifications. Typically one client instance multiplexes many servers.",
            "Client does not execute business logic — it serialises requests to servers and returns results to the agent loop.",
          ),
          s(" Eng concern: client crash isolates servers; PM concern: which servers are on by default for new users."),
        ],
        [
          s("MCP servers wrap domain systems. "),
          x(
            "Server implements MCP spec: list_tools, call_tool, list_resources, read_resource, list_prompts, get_prompt. Backend may be Postgres driver, GitHub API, or your SaaS REST layer.",
            "Servers can be local (stdio subprocess) or remote (HTTP/SSE) — deployment model affects enterprise security review.",
          ),
          s(" PM deliverable for server launch: capability manifest doc — tools, resources, required scopes, data residency."),
        ],
      ],
      examples: [
        {
          title: "Local stdio vs remote HTTP",
          body: "Filesystem MCP runs as local subprocess — no network egress, fast security approval. Company Postgres MCP runs remote with mTLS — required for shared dev database. PM chose local-first for individual tier, remote for team tier with SSO.",
        },
        {
          title: "Host disabled server mid-session",
          body: "User revoked GitHub MCP token in settings; host client sent disconnect. Agent gracefully degraded — PM spec'd user-visible message 'GitHub tools unavailable' not silent failure. Role clarity: host owns session policy.",
        },
        {
          title: "Multi-server capability merge",
          body: "Agent host connected filesystem + Jira + internal CRM MCP servers — 47 tools in unified list. PM worried about tool overload; eng grouped by server prefix in UI. Architecture enabled power; product design managed cognitive load.",
        },
      ],
    }),
    buildSection({
      number: "7.4",
      title: "MCP primitives",
      subtitle: "Tools, resources, and prompts",
      take: "MCP servers expose three primitive types — tools (executable functions with side effects), resources (readable data identified by URI), and prompts (reusable templated instructions) — giving agents a structured catalogue beyond ad hoc function definitions embedded in application code.",
      why: "PMs scoping MCP servers must decide what to expose in each primitive category — tools are liabilities, resources are data access, prompts are product voice. Misclassification creates security holes or weak agent UX.",
      paragraphs: [
        [
          s("Tools are the action surface — highest risk. "),
          x(
            "MCP tools mirror function calling: name, description, JSON schema for arguments, invocation handler. create_ticket, run_query, send_message are tools.",
            "Every tool needs permission scope, rate limit, idempotency policy, and audit log entry — same rigor as REST mutations.",
          ),
          s(" PM rule: no delete or payment tool without human-in-the-loop gate in host policy."),
        ],
        [
          s("Resources are read-oriented context. "),
          x(
            "Resources have URIs (file:///..., postgres://schema/table) and MIME types; agents fetch content without executing code. Docs, schema listings, config snapshots fit here.",
            "Resources reduce hallucination — agent reads actual file content instead of guessing. Prefer resources over 'read_file' tools when no side effect exists.",
          ),
          s(" PM: classify customer data exposure — which resources can agents read per tier?"),
        ],
        [
          s("Prompts are shared instruction templates. "),
          x(
            "MCP prompts are named templates with arguments — e.g., code_review(style, path) returns assembled system+user messages. Servers can ship domain expertise as prompts.",
            "Prompts version your product's agent behaviour — treat prompt changes like API changes with changelog.",
          ),
          s(" PM owns prompt catalogue narrative — what workflows each prompt enables, quality expectations."),
        ],
      ],
      examples: [
        {
          title: "Tool vs resource for database",
          body: "Team initially exposed SELECT as tool — model could spam queries. PM moved schema docs to resources (read-only URIs), kept run_readonly_query as single tool with row limit. Primitive choice reduced cost and clarified audit: reads vs executes.",
        },
        {
          title: "Prompt template for compliance review",
          body: "Legal MCP server shipped review_contract prompt — standardised checklist injected into any host. PM marketed 'compliance mode' to regulated customers; prompt updates shipped server-side without host redeploy.",
        },
        {
          title: "Over-exposed tool catalogue",
          body: "MCP server mirrored entire admin API — 80 tools. Model picked wrong tool 34% in eval. PM cut to 12 curated tools; accuracy recovered. Primitives are product surface — curate like feature flags.",
        },
      ],
    }),
    buildSection({
      number: "7.5",
      title: "How MCP tool discovery works",
      subtitle: "Runtime capability listing and dynamic extensibility",
      take: "At session start the MCP client calls list_tools (and list_resources, list_prompts) on each connected server — returning schemas the model uses to decide invocations — enabling dynamic extensibility where new servers or tools appear without redeploying the host application.",
      why: "Dynamic discovery is MCP's killer feature for power users — but PMs must manage capability sprawl, version skew, and user surprise when a new tool silently appears in production agents.",
      paragraphs: [
        [
          s("Discovery happens at connection time — and on refresh. "),
          x(
            "Initialize handshake negotiates protocol version; list_tools returns current catalogue with descriptions models read as prompts. Servers can notify clients when capabilities change.",
            "Unlike hard-coded function arrays, discovery lets ops add MCP server without mobile app update — if host supports dynamic server config.",
          ),
          s(" PM: define who can attach new servers in enterprise — admin-only vs any developer."),
        ],
        [
          s("Tool descriptions are prompt engineering at scale. "),
          x(
            "Model selects tools by reading name + description + parameter docs. Vague descriptions cause wrong-tool calls — same failure mode as poor function schemas.",
            "Discovery exposes all descriptions to the model context — bloated catalogues consume tokens and confuse routing.",
          ),
          s(" PM reviews tool copy in discovery catalogue — it's UX writing for the model."),
        ],
        [
          s("Versioning discovered capabilities. "),
          x(
            "Server v2 adds breaking tool rename — hosts with cached discovery break silently. Servers should version tools, deprecate with notices, and document migration in capability metadata.",
            "PM coordinates server changelog with host release notes when discovery shape changes.",
          ),
          s(" Treat list_tools output like an API schema — semver and deprecation policy apply."),
        ],
      ],
      examples: [
        {
          title: "Plug-in marketplace via discovery",
          body: "PM launched 'connector store' — users enable MCP servers from catalogue; discovery refreshes on enable. No host redeploy. Support tickets dropped vs manual API key paste per integration. Dynamic discovery became GTM feature.",
        },
        {
          title: "Discovery token bloat",
          body: "12 servers × 15 tools flooded system prompt with 8K tokens of schemas before user message. PM capped enabled servers per plan; eng lazy-loaded discovery per task. Discovery power needs product limits.",
        },
        {
          title: "Shadow tool in staging server",
          body: "Staging MCP server listed experimental charge_refund tool — accidentally pointed prod host at staging URL in one region. Discovery exposed dangerous tool; PM mandated environment-separated server URLs and discovery allowlists.",
        },
      ],
    }),
    buildSection({
      number: "7.6",
      title: "MCP vs function calling",
      subtitle: "Complementary layers — transport vs invocation",
      take: "Function calling is how the model emits structured tool invocations; MCP is how those invocations reach external systems through a standard server protocol — they are complementary, not competing: the model still function-calls, but MCP routes the call to the right server with discovery and auth handled uniformly.",
      why: "Teams debate 'MCP or function calling' incorrectly. PMs who clarify the stack avoid redundant projects and set realistic architecture diagrams for stakeholders.",
      paragraphs: [
        [
          s("Function calling is the model interface. "),
          x(
            "OpenAI, Anthropic, and others expose tools/functions in chat completions — model returns JSON with tool name and arguments. That layer is unchanged with MCP.",
            "MCP sits below the agent runtime: runtime maps model's tool call → MCP client call_tool on appropriate server.",
          ),
          s(" Analogy: function calling is the order ticket; MCP is the kitchen delivery standard."),
        ],
        [
          s("MCP adds discovery, resources, and multi-server routing. "),
          x(
            "Raw function calling requires you to embed all tool schemas in the prompt manually. MCP aggregates schemas from live servers and handles server lifecycle.",
            "Resources and prompts have no direct function-calling equivalent — MCP extends what agents can see beyond callable functions.",
          ),
          s(" PM architecture slide: model → agent runtime → MCP client → servers — not 'MCP replaces OpenAI tools.'"),
        ],
        [
          s("When to skip MCP and use inline tools. "),
          x(
            "Single host, 3–5 stable tools, no third-party server ecosystem — inline function definitions are simpler, fewer moving parts, easier unit tests.",
            "Adopt MCP when multiple hosts, external server contributors, or dynamic connector marketplace appear.",
          ),
          s(" PM simplicity test: will we connect more than two agent hosts in 12 months? No → inline may suffice."),
        ],
      ],
      examples: [
        {
          title: "Both layers in one stack",
          body: "Agent runtime registers MCP-discovered tools as OpenAI function schemas at session start. Model function-calls get_weather; runtime routes to Weather MCP server. PM diagram clarified investor questions — standard protocol, not proprietary magic.",
        },
        {
          title: "Premature MCP abstraction",
          body: "Team built MCP for single internal chatbot with two tools. Debugging added 2 layers; latency +40ms. PM approved revert to inline tools until second host committed. Complementary doesn't mean mandatory.",
        },
        {
          title: "Function calling error handled at MCP layer",
          body: "Model emitted malformed JSON — runtime caught before MCP call. Server timeout retried at MCP client with backoff. PM reliability spec split: model errors vs transport errors — different dashboards.",
        },
      ],
    }),
    buildSection({
      number: "7.7",
      title: "Building an MCP server",
      subtitle: "Exposing your product as agent-accessible capability",
      take: "Building an MCP server means implementing the protocol handlers for your domain — wrapping existing APIs with tool/resource definitions, auth, rate limits, and observability — so any MCP-compatible host can connect without custom integration code, turning your product into a node in the agent ecosystem.",
      why: "MCP servers are a distribution and platform bet. PMs who define MVP tool set, SLA, and pricing for agent access avoid shipping an over-broad attack surface labeled 'AI-ready.'",
      paragraphs: [
        [
          s("Start from customer jobs, not API parity. "),
          x(
            "Don't mirror 200 REST endpoints as MCP tools. Pick 5–10 high-value actions: search_accounts, create_ticket, get_invoice_status.",
            "SDKs exist in TypeScript and Python (@modelcontextprotocol/sdk) — eng estimates days for MVP, weeks for enterprise auth.",
          ),
          s(" PM MVP: one workflow end-to-end in Claude Desktop demo — that's the launch bar."),
        ],
        [
          s("Wrap, don't rewrite — server calls your existing backend. "),
          x(
            "MCP handlers should delegate to internal services with same business rules as REST. Duplicated logic in MCP layer drifts and breaks compliance.",
            "Add MCP-specific concerns: schema descriptions, argument validation, per-tool audit fields.",
          ),
          s(" Single source of truth for permissions — MCP tool auth maps to existing RBAC roles."),
        ],
        [
          s("Operational requirements for production servers. "),
          x(
            "Health checks, rate limiting, structured logging (tool_name, user_id, latency), versioning, and rollback. Remote servers need TLS, tenant isolation, and DDoS protection.",
            "PM defines SLO: p95 tool latency, error budget, support escalation when MCP server degrades.",
          ),
          s(" MCP server is a product surface — status page, changelog, and deprecation policy required."),
        ],
      ],
      examples: [
        {
          title: "SaaS MCP MVP in two sprints",
          body: "PM scoped v1: search_docs resource + create_support_ticket tool. Reused REST handlers; MCP layer thin. Launched in ecosystem directory; 200 dev signups month one. v2 added update_ticket after usage data.",
        },
        {
          title: "Duplicated business logic bug",
          body: "MCP create_order tool implemented separately from API — missed fraud check. PM incident review: all MCP tools must call shared service layer. Lesson: server is transport, not new product logic.",
        },
        {
          title: "Self-hosted vs cloud MCP server",
          body: "Enterprise customers required on-prem MCP server for air-gapped deploy. PM packaged Docker image alongside cloud-hosted option — premium tier. Building server unlocked segment previously blocked on agent integration.",
        },
      ],
    }),
    buildSection({
      number: "7.8",
      title: "MCP security model",
      subtitle: "Authentication, authorisation, and agent access risk",
      take: "MCP security spans server authentication (who is the host/user), authorisation (which tools/resources this session may use), transport encryption, and audit logging — because standardising access also standardises the attack path if permissions are coarse or tokens are over-scoped.",
      why: "Agents amplify OAuth scope mistakes — a read-only intent becomes write when the model picks the wrong tool. PMs own the policy layer security engineers implement.",
      paragraphs: [
        [
          s("Auth models: API keys, OAuth, mTLS, local trust. "),
          x(
            "Local stdio servers often trust the host process. Remote servers need OAuth 2.1 flows, short-lived tokens, and per-tenant credentials.",
            "Users must see and revoke agent access — same mental model as 'connected apps' in Google account settings.",
          ),
          s(" PM: no long-lived god tokens for MCP — scoped, rotatable, per-workspace."),
        ],
        [
          s("Authorisation is per-tool, not per-server. "),
          x(
            "Principle of least privilege: expose minimum tool set per role. Enterprise admin configures which MCP servers employees may enable.",
            "Row-level security must hold in tool handlers — agent doesn't bypass your data model.",
          ),
          s(" Red-team: 'what if model calls every tool in parallel with max privileges?'"),
        ],
        [
          s("Audit and abuse detection. "),
          x(
            "Log every call_tool with user, host, arguments hash, outcome. Alert on anomalous volume — agent loops can hammer APIs faster than humans.",
            "Rate limits per user and per tool; circuit breakers when error rate spikes.",
          ),
          s(" Compliance: MCP audit export format for SOC2 and EU AI Act traceability discussions."),
        ],
      ],
      examples: [
        {
          title: "OAuth scope too broad",
          body: "GitHub MCP requested repo+admin scope for read use case. Security blocked launch; PM narrowed to read+issues. Agent still met PRD; breach blast radius cut dramatically. Auth design is PM–security joint work.",
        },
        {
          title: "Agent loop API abuse",
          body: "Buggy agent called search_customers 400 times in 10 minutes — MCP server lacked per-session rate limit. PM added tiered limits and user notification. Standard protocol doesn't imply safe defaults.",
        },
        {
          title: "Enterprise MCP allowlist",
          body: "Fortune 500 required IT-approved MCP server list only — no user-added servers. PM shipped admin console for allowlist; discovery restricted. Security model became enterprise feature, not blocker.",
        },
      ],
    }),
    buildSection({
      number: "7.9",
      title: "The MCP ecosystem",
      subtitle: "Pre-built servers and integration network effects",
      take: "The MCP ecosystem is a growing catalogue of official and community servers — filesystem, Git, Postgres, Slack, browser, cloud APIs — that let teams assemble agent capability stacks without building every connector, creating network effects where each new server benefits all hosts and each new host benefits all servers.",
      why: "PMs evaluating build-vs-integrate should know what's already in the ecosystem — reinventing Postgres MCP wastes roadmap; contributing upstream may be better than forking.",
      paragraphs: [
        [
          s("Official and community server catalogues. "),
          x(
            "Anthropic and partners maintain reference servers; GitHub hosts community implementations. Quality varies — check maintenance, auth story, and enterprise readiness before production.",
            "Catalogues accelerate demos; production needs vetting checklist.",
          ),
          s(" PM: maintain approved-server list for employees — 'these are supported, these are use-at-your-own-risk.'"),
        ],
        [
          s("Ecosystem gaps are product opportunities. "),
          x(
            "If no mature MCP server exists for your vertical (e.g., healthcare EHR), first mover captures agent-driven workflows for that domain.",
            "Publishing quality server + docs is developer marketing — shows up in every host's connector search.",
          ),
          s(" Competitive intel: which competitors ship MCP servers? Agent discoverability is SEO for the AI era."),
        ],
        [
          s("Maintenance burden is real. "),
          x(
            "Upstream API changes break community servers. PMs budget ongoing maintenance for any server they ship — not one-time open-source drop.",
            "Pin server versions in production; auto-update only after eval pass.",
          ),
          s(" Dependency on unmaintained community server is production risk — fork or vendor."),
        ],
      ],
      examples: [
        {
          title: "Assembled stack from catalogue",
          body: "Internal agent shipped in 3 weeks using filesystem + GitHub + Postgres official servers — zero custom connectors. PM reallocated saved eng time to agent reliability. Ecosystem value quantified in sprint count.",
        },
        {
          title: "Community server security incident",
          body: "Unmaintained browser MCP server had credential leak path. PM banned from corporate allowlist; funded internal fork with security review. Ecosystem speed has tail risk.",
        },
        {
          title: "First vertical MCP server",
          body: "No good legal-docket MCP server existed; company published one, became default in two agent hosts' catalogues. PM attributed inbound leads to 'listed in MCP directory' — platform distribution worked.",
        },
      ],
    }),
    buildSection({
      number: "7.10",
      title: "PM decision lens: MCP adoption as platform strategy",
      subtitle: "Agent-accessible product and distribution tradeoffs",
      take: "MCP adoption is a platform decision — exposing your product as agent-accessible infrastructure unlocks distribution through every MCP host but commits you to schema stability, security review, and support for agent-specific failure modes; PMs weigh ecosystem reach against narrowed control of the user experience.",
      why: "Not every product should ship an MCP server on day one. PMs who apply a decision framework avoid both 'MCP for the slide deck' and 'we'll never be agent-ready.'",
      paragraphs: [
        [
          s("When MCP server is worth building. "),
          x(
            "Signals: developers are primary buyers, workflow fits tool invocation, competitors list MCP, customers use Claude Desktop/Cursor/internal agents, API revenue model supports automation.",
            "Counter-signals: purely visual UI product, heavy compliance without agent audit story, single-host captive integration.",
          ),
          s(" Score 1–5 on distribution, security readiness, maintenance capacity — ship if aggregate ≥ 12."),
        ],
        [
          s("Platform metrics beyond REST. "),
          x(
            "Track: MCP server activations, tool calls per customer, top tools, error rate by host, time-to-first-successful-call in onboarding.",
            "Agent usage may differ from UI usage — different jobs, different pricing opportunity.",
          ),
          s(" PM quarterly review: is MCP driving expansion or support load without revenue?"),
        ],
        [
          s("Governing the public capability roadmap. "),
          x(
            "Publish MCP roadmap aligned with API roadmap — customers plan integrations. Deprecation policy: 90-day notice on tool removal.",
            "Partner with top hosts for launch co-marketing — ecosystem is two-sided.",
          ),
          s(" MCP is a commitment to agent-shaped UX for your backend — staff support for agent failures."),
        ],
      ],
      examples: [
        {
          title: "MCP as enterprise checkbox",
          body: "RFP required 'MCP-compatible.' PM fast-tracked read-only server — won deal. Post-sale, usage low but renewal secure. Platform strategy sometimes means table stakes before pull-through.",
        },
        {
          title: "Deferred MCP for UX control",
          body: "Consumer app PM declined MCP — wanted curated mobile UX, feared agents bypassing paywall features. Valid strategy: own the agent inside app first; MCP when API tier matures.",
        },
        {
          title: "Pricing agent access separately",
          body: "PM introduced 'Automation tier' priced on MCP tool calls — aligned with value, covered infra cost. UI-only customers subsidized less. Platform strategy included monetisation, not just exposure.",
        },
      ],
    }),
  ],
  quiz: [
    {
      q: "What problem does MCP primarily solve?",
      options: [
        "Replacing LLMs with a faster inference engine",
        "The N×M integration matrix between agent hosts and external tools through a standard protocol",
        "Eliminating the need for function calling in model APIs",
        "Storing agent memory in a vector database",
      ],
      correct: 1,
      correctFeedback:
        "Right. MCP standardises how hosts connect to servers — collapsing bespoke per-pair integrations.",
      wrongFeedback:
        "MCP addresses integration sprawl between agents and tools. Re-read sections 7.1 and 7.2.",
    },
    {
      q: "Which MCP primitive is typically highest risk to expose?",
      options: [
        "Resources — read-only data identified by URI",
        "Prompts — reusable instruction templates",
        "Tools — executable functions with potential side effects",
        "Transport — the wire protocol between client and server",
      ],
      correct: 2,
      correctFeedback:
        "Correct. Tools perform actions; they need the strictest permission, rate limit, and audit controls.",
      wrongFeedback:
        "Tools can mutate state and cause incidents. Re-read section 7.4.",
    },
    {
      q: "MCP and function calling are best described as:",
      options: [
        "Competing standards — adopt one or the other",
        "Complementary — function calling is the model interface; MCP handles discovery, routing, and server transport",
        "Identical — MCP is Anthropic's name for OpenAI function calling",
        "Unrelated — MCP only applies to image models",
      ],
      correct: 1,
      correctFeedback:
        "Exactly. The model still emits structured calls; MCP routes them to standardised servers.",
      wrongFeedback:
        "They work at different layers of the stack. Re-read section 7.6.",
    },
    {
      kind: "order",
      q: "Order the MCP session roles from user-facing to domain system.",
      prompt: "Drag to arrange first (top) to last (bottom).",
      items: [
        "Host application — runs LLM and embeds MCP client",
        "MCP client — negotiates protocol and routes calls",
        "MCP server — exposes tools, resources, and prompts",
        "Backend system — database, API, or filesystem the server wraps",
      ],
      correctFeedback:
        "Right. User → host → client → server → backend is the standard MCP flow.",
      wrongFeedback:
        "Trace the path: host contains client, client talks to server, server wraps backend. Re-read section 7.3.",
    },
    {
      q: "Dynamic MCP tool discovery enables:",
      options: [
        "Models to train without GPUs",
        "New servers and tools to appear without redeploying the host — schemas listed at session start",
        "Automatic elimination of all hallucinated tool calls",
        "Free unlimited API calls to all connected services",
      ],
      correct: 1,
      correctFeedback:
        "Correct. Discovery lets capabilities grow dynamically — with product governance to manage sprawl.",
      wrongFeedback:
        "Discovery is about runtime capability listing. Re-read section 7.5.",
    },
    {
      kind: "categorize",
      q: "Match each MCP primitive to its best use case.",
      categories: ["Tool", "Resource", "Prompt"],
      items: [
        { text: "Execute create_support_ticket with typed parameters.", category: 0 },
        { text: "Fetch policy document content by URI for grounding.", category: 1 },
        { text: "Ship standardised code_review instruction template with arguments.", category: 2 },
        { text: "Run charge_payment — requires strict auth and audit.", category: 0 },
        { text: "Expose database schema listing for read-only context.", category: 1 },
        { text: "Version domain expertise as reusable agent instructions.", category: 2 },
      ],
      correctFeedback:
        "Right. Tools act, resources provide read context, prompts template instructions.",
      wrongFeedback:
        "Tools = actions, resources = readable data, prompts = templates. Re-read section 7.4.",
    },
  ],
});
