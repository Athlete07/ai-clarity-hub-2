import { buildChapter, buildSection, s, x } from "../concepts-pb4-helpers";

export const chapter03BatchVsStreaming = buildChapter({
  slug: "pb5-batch-vs-streaming",
  number: 3,
  shortTitle: "Batch vs Streaming",
  title: "Batch vs Streaming Inference",
  readingMinutes: 24,
  summary:
    "Two fundamentally different ways to run models — batch throughput vs streaming tokens — and how the choice shapes UX, cost, and architecture",
  keyTakeaway:
    "Batch inference maximises GPU utilisation by processing many inputs together; streaming inference delivers tokens as they're generated so users see progress. Real-time serving answers single requests immediately. Production systems mix all three — and perceived latency often matters more than wall-clock time.",
  pmCallout:
    "As a PM: streaming a 4-second response feels instant; waiting 4 seconds for a block feels broken — even when the total time is identical. Design for perceived latency, not just benchmarks.",
  sections: [
    buildSection({
      number: "3.1",
      title: "What is batch inference",
      subtitle: "Processing many inputs together on a schedule — the offline, high-throughput, low-urgency mode",
      take: "Batch inference collects many inputs — documents, rows, images — and processes them together in one or few GPU runs. Jobs run on a schedule or queue, optimising throughput and cost rather than single-request latency.",
      why: "PMs who force batch workloads into synchronous APIs pay GPU premiums for no UX benefit. PMs who batch user-facing chat destroy the product. Knowing batch mode unlocks 10× cost efficiency on the right features.",
      paragraphs: [
        [
          s("Batch jobs amortise fixed GPU costs across many inputs. "),
          x(
            "Loading a model into VRAM has fixed overhead. Processing 10,000 documents in one batched job shares that overhead; processing one document per API call pays it 10,000 times.",
            "Nightly pipelines, bulk embedding, offline classification, and training-data labelling are classic batch patterns.",
          ),
          s(" PMs label features 'batch-eligible' in the roadmap when users don't wait on the result."),
        ],
        [
          s("Scheduling and queueing define batch UX. "),
          x(
            "Users don't stare at a spinner — they get notified when the job completes, or results appear in the UI next refresh. SLA is 'done by 6am' not 'done in 200ms.'",
            "Job status, progress bars for long batches, and partial results on failure are product requirements for batch features.",
          ),
          s(" A batch feature without job visibility feels broken even if the model works perfectly."),
        ],
        [
          s("Batch failures must be resumable. "),
          x(
            "A 6-hour job that fails at hour 5 without checkpointing wastes money and trust. Idempotent chunks, retry per batch slice, and dead-letter queues are engineering requirements.",
            "PMs scope 'what happens when 3% of rows fail?' — partial success UX, export of failures, manual retry.",
          ),
          s(" Batch reliability is a product commitment, not a background script detail."),
        ],
      ],
      examples: [
        {
          title: "Stripe Radar — batch fraud model scoring",
          body: "Fraud models score transactions in near-real-time for high-risk paths, but many risk features are computed in batch pipelines over historical behaviour. PM lesson: the same product mixes latency tiers — not everything is one inference mode.",
        },
        {
          title: "Notion AI bulk page summaries — async job pattern",
          body: "Summarising an entire workspace is batch work: queue a job, process pages in chunks, notify on completion. Trying to synchronously summarise 500 pages would timeout and waste GPU. PM scoped async UX with email notification — correct product shape for batch.",
        },
        {
          title: "Embedding 10M docs — spot GPU batch overnight",
          body: "A RAG launch blocked on embedding 10M documents. Batch job on spot GPUs over three nights cost $400 total vs an estimated $12K if done synchronously via API calls. PM moved launch date by 3 days; saved five figures. Batch economics enabled the feature.",
        },
      ],
    }),
    buildSection({
      number: "3.2",
      title: "What is streaming inference",
      subtitle: "Generating tokens as they are produced — the mechanism behind ChatGPT's live typing effect",
      take: "Streaming inference sends each generated token (or small chunk) to the client as soon as it's ready, rather than waiting for the full completion. The user sees progressive output — the 'typing' effect that makes LLM chat feel responsive even when total generation takes 10+ seconds.",
      why: "Streaming transforms wall-clock wait into active reading time. PMs who ship non-streaming chat in 2026 ship a product that feels a generation behind competitors.",
      paragraphs: [
        [
          s("Autoregressive generation is inherently sequential. "),
          x(
            "LLMs generate token N, then use it to generate token N+1. You can't parallelise a single sequence's tokens — but you can stream each token to the user as it emerges.",
            "Time-to-first-token (TTFT) measures delay until streaming starts. Inter-token latency measures smoothness of the typing effect.",
          ),
          s(" PMs track TTFT and tokens/sec as separate UX metrics — both affect perceived quality."),
        ],
        [
          s("Streaming changes error and cancellation semantics. "),
          x(
            "Users can stop generation mid-stream when the answer is sufficient — saving tokens and cost. Partial responses must render cleanly; connection drops mid-stream need recovery UX.",
            "Server-side: open connections longer, more memory for in-flight KV cache, trickier load balancing than stateless request-response.",
          ),
          s(" 'Stop generating' is a product feature with cost implications — promote it in UX."),
        ],
        [
          s("Not all model outputs should stream. "),
          x(
            "Structured JSON, tool-call arguments, and safety classifications often need complete output before parsing — streaming partial JSON breaks clients.",
            "Pattern: stream the user-visible prose; buffer structured payloads until complete. Or stream with a schema-validating parser on the client.",
          ),
          s(" PMs specify which response types stream in the API contract — mixed modes are normal."),
        ],
      ],
      examples: [
        {
          title: "ChatGPT's typing indicator — streaming as product identity",
          body: "ChatGPT's UX is inseparable from streaming. Users read while the model writes — cognitive load shifts from waiting to evaluating. PMs cloning 'chat with docs' who return full responses after 8s wonder why engagement lags. Streaming is not optional polish.",
        },
        {
          title: "Claude API message streaming — developer primitive",
          body: "Anthropic and OpenAI both expose SSE-based streaming in their APIs. Developer products (Cursor, Jasper) build on this primitive. PMs evaluating API vendors should verify streaming quality: chunk size, reconnect behaviour, and first-token latency.",
        },
        {
          title: "Non-streaming JSON tool calls — hidden buffer",
          body: "An agent product streamed assistant prose but buffered tool-call JSON until complete — clients parsed function names only after the full block arrived. PM documented which message parts stream in the developer docs. Mixed streaming prevented production parser bugs.",
        },
      ],
    }),
    buildSection({
      number: "3.3",
      title: "What is real-time inference",
      subtitle: "Single requests answered immediately — the default mode for user-facing AI features",
      take: "Real-time inference processes one request (or a small concurrent set) with minimal queueing delay — the user expects an answer now. It encompasses both streaming and non-streaming synchronous responses; the defining trait is low end-to-end latency, not whether tokens drip out.",
      why: "PMs conflate 'real-time' with 'streaming.' Real-time is the SLA; streaming is one technique to meet it. Classification, search ranking, and short completions can be real-time without streaming.",
      paragraphs: [
        [
          s("Real-time sets the latency budget for interactive features. "),
          x(
            "Search autocomplete: <100ms. Chat first token: <1–2s. Image classification on upload: <500ms. Each feature has a UX-derived budget.",
            "Exceeding budget feels broken regardless of model quality. Users blame the product, not the GPU.",
          ),
          s(" PMs write latency budgets in PRDs before model selection — budget drives architecture."),
        ],
        [
          s("Real-time requires warm infrastructure. "),
          x(
            "Cold GPUs, deep queues, and serialised processing destroy real-time SLAs. Always-warm replicas, connection pooling, and edge caching for small models are infra prerequisites.",
            "Real-time is expensive because you pay for idle capacity to absorb variance.",
          ),
          s(" Cost of real-time is the cost of headroom — budget it explicitly."),
        ],
        [
          s("Some real-time features don't need LLMs. "),
          x(
            "Semantic search returns embedding similarity in milliseconds. Intent classifiers route queries in microseconds. Don't invoke a 70B model when a 100M-parameter classifier suffices.",
            "Real-time architecture often chains fast non-LLM steps with slower LLM steps only when needed.",
          ),
          s(" PMs map the critical path — LLM calls should rarely be the first hop."),
        ],
      ],
      examples: [
        {
          title: "Google Search ranking — real-time without generation",
          body: "Search ranking inference runs in milliseconds on every query — real-time ML, not generative streaming. PM lesson: 'real-time AI' predates LLMs. Your product likely has real-time classical ML alongside generative features.",
        },
        {
          title: "Figma AI actions — sub-second non-streaming",
          body: "Short transformations ('make this concise') may return in <2s total — streaming adds client complexity for minimal UX gain on three-sentence outputs. PM chose non-streaming for micro-edits; streaming for long drafts. Latency class drives mode.",
        },
        {
          title: "Voice assistant wake word — real-time on device",
          body: "Wake-word detection runs in real-time on-device CPU/NPU — sub-50ms. Full LLM reasoning runs in cloud with streaming. PM architected hybrid real-time tiers in one product surface.",
        },
      ],
    }),
    buildSection({
      number: "3.4",
      title: "Why batching improves GPU utilisation",
      subtitle: "How grouping requests fills the GPU's parallel capacity — and the throughput vs latency tradeoff",
      take: "GPUs achieve peak throughput when many independent operations run in parallel. Static batching groups requests that arrive together; dynamic batching waits briefly to fill a batch. Larger batches raise utilisation and throughput but add queueing delay — the fundamental throughput-latency tradeoff.",
      why: "PMs who demand 'lowest latency' and 'lowest cost' without acknowledging the tradeoff set engineering up to fail. Batching is how you buy cost efficiency; limiting batch wait time is how you protect latency.",
      paragraphs: [
        [
          s("GPU cores idle without parallel work. "),
          x(
            "A single small inference request may utilise 10–20% of GPU tensor cores. Ten concurrent requests batched together may hit 80% — same hardware, 5× throughput.",
            "Inference servers automatically batch when configured with max batch size and max wait time (e.g., batch up to 32 requests or wait 50ms, whichever comes first).",
          ),
          s(" PMs should know the batch wait window — 50ms vs 200ms changes p95 latency noticeably."),
        ],
        [
          s("Static vs dynamic batching differ in predictability. "),
          x(
            "Static batching: fixed batch size N, pad shorter sequences to max length — simple but wastes compute on padding. Dynamic batching: group variable-length sequences with attention masking — harder but more efficient.",
            "LLM serving frameworks (vLLM, TGI) implement continuous/dynamic batching as the production default.",
          ),
          s(" Padding waste is a hidden cost PMs surface when comparing inference server benchmarks."),
        ],
        [
          s("Batch size tuning is an ongoing ops task. "),
          x(
            "Higher max batch → better throughput, worse tail latency during low traffic (waiting to fill batch). Lower max batch → worse utilisation, better latency.",
            "Tune per environment: production API vs offline batch job use different batch configs on the same model.",
          ),
          s(" Include batch config in incident runbooks — 'we lowered max batch to protect latency' is a valid incident response."),
        ],
      ],
      examples: [
        {
          title: "Embedding API batch size 256 — throughput benchmark",
          body: "OpenAI's embedding API accepts batches up to 2048 inputs per call. A PM migrating to self-host benchmarked throughput at batch 1 vs 64 vs 256 — 12× throughput improvement at batch 256 with acceptable latency for their async pipeline. Batch size became a documented integration guideline.",
        },
        {
          title: "50ms batch window — latency regression post-mortem",
          body: "An eng team increased vLLM batch wait from 20ms to 100ms to improve utilisation. p95 TTFT rose 80ms; chat NPS dropped. PM reverted to 30ms wait — utilisation fell 8%, NPS recovered. Quantified tradeoff prevented repeat.",
        },
        {
          title: "Offline batch size 512 — maximise GPU for nightly jobs",
          body: "Nightly document classification used batch 512 on spot GPUs — no latency SLA, maximum throughput. Same model served online at batch max 16. PM approved dual config: one model artefact, two serving profiles.",
        },
      ],
    }),
    buildSection({
      number: "3.5",
      title: "Continuous batching",
      subtitle: "The vLLM innovation that lets new requests join an in-flight batch — and why it changed LLM serving efficiency",
      take: "Traditional static batching waits for all sequences in a batch to finish before starting new ones — GPU sits idle as short requests complete. Continuous batching (iteration-level batching) adds new requests and removes completed ones each decoding step, keeping GPU utilisation high under variable-length concurrent load.",
      why: "Continuous batching is why self-hosted LLM economics improved dramatically in 2023–2024. PMs evaluating self-host viability should know this term — it's the difference between 'GPU can't keep up' and 'viable at our volume.'",
      paragraphs: [
        [
          s("Static batching suffers from tail stragglers. "),
          x(
            "Batch of 8 requests: 7 finish in 2s, 1 takes 15s. The GPU waits or runs padded nonsense until the straggler completes before accepting new work.",
            "Under chat load with variable output lengths, static batching utilisation collapses.",
          ),
          s(" User-facing LLM serving with static batching alone is largely obsolete in 2026."),
        ],
        [
          s("Continuous batching iterates per token step. "),
          x(
            "Each autoregressive step: add newly arrived requests to the batch, drop sequences that emitted EOS, run one forward pass for whoever remains.",
            "vLLM's PagedAttention manages KV cache memory non-contiguously so new sequences slot in without full memory defragmentation.",
          ),
          s(" Result: 2–10× higher throughput vs naive serving on conversational workloads."),
        ],
        [
          s("PM implication: self-host economics changed. "),
          x(
            "Pre-vLLM, many self-host ROI models failed. Post-vLLM/TGI continuous batching, break-even vs managed APIs shifted toward higher query volumes.",
            "PMs revisiting 'we tried self-host and it was too expensive' should re-evaluate with modern serving stacks — the answer may have changed.",
          ),
          s(" Ask eng: 'Are we using continuous batching?' If no, fix that before buying more GPUs."),
        ],
      ],
      examples: [
        {
          title: "vLLM paper — production throughput step change",
          body: "The vLLM team's PagedAttention + continuous batching paper demonstrated order-of-magnitude throughput gains on ShareGPT traffic patterns. PMs cite it in build-vs-buy decks when eng claims self-host is impossible — the burden shifts to 'are we running modern serving?'",
        },
        {
          title: "TGI continuous batching — Hugging Face parity",
          body: "TGI implemented similar iteration-level batching. Teams on HF ecosystem chose TGI over vLLM for integration reasons with comparable batching benefits. PM lesson: multiple viable servers exist — pick on ecosystem fit, not religion.",
        },
        {
          title: "Throughput 3× after vLLM migration — same hardware",
          body: "A copilot on raw FastAPI + transformers moved to vLLM on identical 4×L4 nodes. Throughput tripled; p95 latency improved 25%. PM delayed GPU purchase 6 months. Software architecture beat hardware spend.",
        },
      ],
    }),
    buildSection({
      number: "3.6",
      title: "Streaming tokens to the UI",
      subtitle: "SSE, WebSockets, and the front-end engineering behind progressive response rendering",
      take: "Streaming from model to UI requires a persistent connection: Server-Sent Events (SSE) for unidirectional token streams, WebSockets for bidirectional chat, and client-side rendering that appends tokens incrementally. Broken streaming UX (flicker, buffer-then-burst, no cursor) undermines the latency win.",
      why: "PMs assume streaming is 'backend sends tokens.' Half the perceived quality is frontend: markdown rendering, scroll behaviour, stop button, and reconnect on mobile network drops.",
      paragraphs: [
        [
          s("SSE is the default for LLM chat APIs. "),
          x(
            "HTTP-based, unidirectional server→client, auto-reconnect in browsers, works through most corporate proxies. OpenAI and Anthropic streaming APIs use SSE-style event streams.",
            "WebSockets when you need bidirectional (user interrupts, collaborative editing, voice). Higher infra complexity.",
          ),
          s(" PMs pick SSE for standard chat; WebSockets for interactive/agentic UIs with frequent client messages."),
        ],
        [
          s("Front-end rendering must be incremental-safe. "),
          x(
            "Markdown half-rendered mid-stream breaks code blocks and lists. Libraries like react-markdown with streaming patches, or render-plain-text-first-then-format, prevent visual glitches.",
            "Auto-scroll vs user-scroll-up-to-read is a UX tension — stop auto-scroll when user scrolls up.",
          ),
          s(" QA streaming UX on slow 3G throttling — desktop-only testing misses mobile pain."),
        ],
        [
          s("Observability for streaming differs from REST. "),
          x(
            "Log TTFT, tokens streamed, stream duration, client disconnect reason. A high disconnect rate mid-stream signals latency or quality issues users won't file tickets for.",
            "Load balancers need idle timeout > max generation time or streams get cut at 60s.",
          ),
          s(" PMs add 'stream completion rate' to the metrics dashboard alongside error rate."),
        ],
      ],
      examples: [
        {
          title: "Vercel AI SDK — streaming as front-end primitive",
          body: "The Vercel AI SDK standardised useChat + streaming hooks for React. PMs on Next.js stacks ship streaming chat faster. Evaluate whether your framework has first-class streaming support before custom-building.",
        },
        {
          title: "ALB 60s timeout — streams cut mid-answer",
          body: "A legal summariser streamed 90-second outputs; AWS ALB default idle timeout was 60s. Streams died silently; users saw truncated summaries. PM worked with eng to raise timeout and add client reconnect — infra config is streaming UX.",
        },
        {
          title: "Stop button saves 40% tokens",
          body: "Adding a visible 'Stop generating' button let users cancel after reading enough. Average tokens per session dropped 40%; cost per session fell proportionally. PM promoted stop to primary UI — product decision with direct COGS impact.",
        },
      ],
    }),
    buildSection({
      number: "3.7",
      title: "When to use batch vs real-time",
      subtitle: "Document processing, embeddings, nightly scoring vs live chat, search, recommendations",
      take: "Use batch when users don't wait, inputs accumulate, and throughput matters most. Use real-time when interaction depends on immediate feedback. The decision tree starts with 'is a human staring at a spinner?' — yes means real-time architecture and cost.",
      why: "Misclassified workloads are the most expensive architectural mistake in AI infra: real-time GPUs for batch jobs, or batch queues for live chat.",
      paragraphs: [
        [
          s("Batch fits accumulation and schedule tolerance. "),
          x(
            "Bulk document ingestion, periodic model scoring, training data generation, analytics enrichment, re-embedding corpora — inputs arrive in volume; output deadline is hours or days.",
            "Optimise for: $/document, job completion rate, retry resilience. Use spot GPUs, large batch sizes, job queues.",
          ),
          s(" PRD template field: 'User waits synchronously? Y/N' — N routes to batch design."),
        ],
        [
          s("Real-time fits interactive and transactional moments. "),
          x(
            "Chat, copilot inline suggestions, live search, checkout fraud check, voice response — user action triggers inference; delay blocks the workflow.",
            "Optimise for: TTFT, p95 latency, stream smoothness. Use warm GPUs, continuous batching, streaming UX.",
          ),
          s(" Real-time features need latency SLOs in the SLA; batch features need completion-time SLOs."),
        ],
        [
          s("Grey zone: async with fast notification. "),
          x(
            "Heavy but user-initiated: 'Analyse this 200-page PDF' — too slow for sync, too urgent for overnight batch. Pattern: accept job, process in priority queue, notify in 2–5 minutes.",
            "PMs define the grey zone explicitly — users tolerate minutes if expectations are set; they don't tolerate ambiguous spinners.",
          ),
          s(" Job queue with ETA beats fake streaming for workloads over ~30s total."),
        ],
      ],
      examples: [
        {
          title: "GitHub Copilot — real-time inline completion",
          body: "Inline code suggestions must appear in <500ms or developers disable the plugin. Pure real-time, no batch option. PM latency budget drove small model selection and edge caching — architecture follows UX constraint.",
        },
        {
          title: "Spotify batch + real-time split",
          body: "Playlist generation: batch overnight. Skip button feedback: real-time ranking adjustment. One product, two inference modes. PM org chart often mirrors this split — platform batch team vs real-time serving team.",
        },
        {
          title: "Misclassified PDF upload — user waited 20 minutes",
          body: "A 'summarise upload' feature ran synchronously on a 300-page PDF. Gateway timed out at 30s; job continued server-side with no client feedback. PM re-scoped to async job + email notification. Mode misclassification caused support tickets, not model quality.",
        },
      ],
    }),
    buildSection({
      number: "3.8",
      title: "The hybrid pattern",
      subtitle: "Streaming the response while batching the retrieval — how production systems mix both modes",
      take: "Production RAG and agent systems hybridise: retrieval and embedding run as batched or parallel lookups (milliseconds to seconds), then the LLM streams tokens to the user. Different pipeline stages use different batching and latency strategies — optimise each stage independently.",
      why: "PMs who think in single-mode oversimplify architecture. Hybrid is the norm for RAG, agents, and multimodal products.",
      paragraphs: [
        [
          s("RAG is inherently hybrid. "),
          x(
            "Retrieve top-k chunks: parallel vector lookups (real-time, non-streaming). Optionally rerank: batched cross-encoder on 50 docs (50–200ms). Generate answer: streaming tokens.",
            "User sees streaming prose; behind the scenes retrieval was a batched scoring step.",
          ),
          s(" PMs instrument each stage separately — slow retrieval with fast generation still feels slow (TTFT includes retrieval)."),
        ],
        [
          s("Parallel precomputation hides batch work. "),
          x(
            "While user types, pre-fetch likely context. While retrieval runs, show 'Searching...' streaming status. Speculative retrieval on conversation turn N while user reads turn N-1.",
            "Product polish: progressive disclosure of pipeline stages in the UI reduces perceived wait.",
          ),
          s(" 'Thinking' and 'Searching' states are hybrid UX — honest progress beats blank spinner."),
        ],
        [
          s("Agents loop real-time and batch steps. "),
          x(
            "Agent loop: LLM streams plan → tool call (may batch API request) → LLM streams result interpretation. Each tool has its own latency class.",
            "PMs define timeout per tool in agent specs — a batch-eligible tool called synchronously in the agent loop blocks the stream.",
          ),
          s(" Agent PRDs need a latency column per tool in the tool manifest."),
        ],
      ],
      examples: [
        {
          title: "Perplexity — retrieve then stream",
          body: "Perplexity retrieves and ranks sources (parallel, non-streaming), then streams the synthesised answer with citations. Users see sources appear, then prose flows. PM designed staged UI matching hybrid pipeline — TTFT includes search.",
        },
        {
          title: "Cursor — batch context assembly, stream completion",
          body: "IDE copilots batch codebase retrieval and context packing, then stream the code suggestion. Retrieval latency is hidden in the keystroke-to-suggestion window. PM optimises perceived latency of the whole loop, not generation alone.",
        },
        {
          title: "Agent with slow SQL tool — 8s stream freeze",
          body: "An analytics agent streamed LLM prose but blocked on a 8-second SQL query mid-loop — stream froze without explanation. Fix: stream status events ('Querying database...') during tool execution. Hybrid UX requires streaming at the orchestration layer, not just the LLM.",
        },
      ],
    }),
    buildSection({
      number: "3.9",
      title: "PM decision lens",
      subtitle: "The perceived latency problem — why streaming a slow model feels faster than waiting for a fast one",
      take: "Perceived latency — how long the wait feels — often beats wall-clock latency for user satisfaction. Streaming, progress indicators, and staged pipeline disclosure turn seconds of waiting into active engagement. PMs optimise perception and physics together.",
      why: "Teams ship faster models but ignore UX and wonder why NPS didn't move. The perceived latency lens explains why streaming beats raw speed — and when honest async beats fake streaming.",
      paragraphs: [
        [
          s("The psychology of waiting is well studied — AI products ignore it at their peril. "),
          x(
            "Occupied time feels shorter than unoccupied time. Uncertain waits feel longer than known waits. Unexplained waits feel longest.",
            "Streaming occupies users with reading. Progress bars with ETA reduce anxiety. Blank spinners maximise perceived pain.",
          ),
          s(" Invest in streaming and progress UX before buying the next faster GPU."),
        ],
        [
          s("Match mode to total duration, not just model type. "),
          x(
            "<2s total: non-streaming may suffice. 2–30s: stream tokens. >30s: async job with notification — streaming for 60s without structure feels broken.",
            "The threshold varies by use case — legal researchers tolerate longer streams than mobile consumers.",
          ),
          s(" User research on 'when did you feel it was too slow?' beats engineer guesses."),
        ],
        [
          s("Measure perceived and actual latency separately. "),
          x(
            "Metrics: TTFT, stream completion rate, user stop rate (early cancel = satisfied enough), time-to-first-interaction. Survey: 'Did this feel fast?' correlated with TTFT more than total duration when streaming.",
            "A/B: streaming on vs off with identical total time — streaming wins engagement consistently in chat contexts.",
          ),
          s(" PMs who only log total request duration miss the lever that moves NPS."),
        ],
      ],
      examples: [
        {
          title: "Identical 6s — streaming A/B +18% completion",
          body: "A writing assistant A/B tested streaming vs block response at identical 6-second total generation time. Streaming arm had 18% higher task completion and 12% higher return rate. PM cited study in GPU budget review — UX mode mattered as much as model speed.",
        },
        {
          title: "Fake streaming backlash",
          body: "A product buffered the full response then dripped it character-by-character to simulate streaming. Power users noticed identical delay before first character. Trust eroded; reviews called it 'fake.' PM rule: never simulate streaming — real tokens or honest wait.",
        },
        {
          title: "ETA on batch jobs — support tickets down 60%",
          body: "An async document processor added queue position and ETA ('~4 minutes remaining'). Support tickets asking 'is it stuck?' dropped 60% with no infra change. Perceived latency improved through communication, not compute.",
        },
      ],
    }),
  ],
  quiz: [
    {
      q: "What is the primary benefit of continuous batching in vLLM-style serving?",
      options: [
        "It eliminates the need for GPU memory entirely.",
        "New requests join in-flight batches each token step, improving utilisation under variable-length concurrent load.",
        "It replaces streaming with block responses for lower latency.",
        "It only works for offline batch jobs, not online chat.",
      ],
      correct: 1,
      correctFeedback:
        "Right. Continuous batching avoids waiting for all sequences in a static batch to finish — short requests don't block the GPU while long ones complete.",
      wrongFeedback:
        "Continuous batching is an online serving optimisation for concurrent chat-like workloads. Re-read section 3.5.",
    },
    {
      q: "A user uploads 10,000 documents for embedding overnight. Which inference mode is appropriate?",
      options: [
        "Real-time synchronous API — one request per document.",
        "Batch inference on a job queue with large batch sizes, optionally on spot GPUs.",
        "Streaming SSE — one token at a time per document.",
        "No GPU needed — embeddings cannot be batched.",
      ],
      correct: 1,
      correctFeedback:
        "Exactly. Bulk offline work favours batch mode: high throughput, schedule tolerance, spot cost savings.",
      wrongFeedback:
        "Synchronous per-document calls waste GPU overhead. Re-read sections 3.1 and 3.7.",
    },
    {
      kind: "order",
      q: "Order the stages of a typical hybrid RAG response as the user experiences them.",
      prompt: "Drag to arrange first step (top) to last (bottom).",
      items: [
        "User submits a question (real-time trigger).",
        "Retriever fetches and optionally reranks chunks (parallel/batched lookup).",
        "LLM streams answer tokens to the UI.",
        "User reads progressively rendered response.",
      ],
      correctFeedback:
        "Correct. Hybrid systems mix real-time triggers, batched retrieval, and streaming generation — optimise each stage independently.",
      wrongFeedback:
        "RAG is not pure streaming or pure batch — it's a pipeline combining both. Re-read section 3.8.",
    },
    {
      q: "Why does streaming often improve user satisfaction even when total generation time is unchanged?",
      options: [
        "Streaming reduces actual FLOPs required.",
        "Occupied time (reading arriving tokens) feels shorter than unoccupied waiting on a blank screen.",
        "Streaming always reduces TTFT to zero.",
        "Users cannot stop streaming responses.",
      ],
      correct: 1,
      correctFeedback:
        "Right. Perceived latency psychology: active reading beats passive waiting. TTFT matters more than total duration for engagement.",
      wrongFeedback:
        "Streaming doesn't change total compute — it changes the UX of waiting. Re-read section 3.9.",
    },
    {
      kind: "categorize",
      q: "Sort each feature into the best primary inference mode.",
      categories: ["Batch / async", "Real-time / streaming"],
      items: [
        { text: "Live customer support chatbot.", category: 1 },
        { text: "Nightly re-embedding of updated wiki pages.", category: 0 },
        { text: "Inline code completion in an IDE.", category: 1 },
        { text: "Monthly churn risk scoring for all accounts.", category: 0 },
        { text: "Long-form answer with typing effect in chat UI.", category: 1 },
        { text: "Bulk labelling 500K rows for training data.", category: 0 },
      ],
      correctFeedback:
        "Right. Ask whether a human waits interactively — that determines real-time vs batch architecture and budget.",
      wrongFeedback:
        "Interactive = real-time/streaming. Accumulated offline work = batch. Re-read section 3.7.",
    },
    {
      q: "Engineering increases batch wait window from 20ms to 150ms to improve GPU utilisation. What metric should the PM watch first?",
      options: [
        "Offline training loss.",
        "p95 time-to-first-token and user-facing latency SLOs.",
        "Number of documents in the training set.",
        "Git commit frequency.",
      ],
      correct: 1,
      correctFeedback:
        "Right. Longer batch windows trade throughput for queueing delay — TTFT and p95 latency are the user-visible cost.",
      wrongFeedback:
        "Batching improves utilisation but adds wait time before processing starts. Re-read section 3.4.",
    },
  ],
});
