import type { ConceptBodyBlock } from "../concepts";
import { buildChapter, buildSection, s, x } from "../concepts-pb4-helpers";

function insertDiagram(
  blocks: ConceptBodyBlock[],
  diagram: Extract<ConceptBodyBlock, { kind: "diagram" }>,
): ConceptBodyBlock[] {
  const exIdx = blocks.findIndex((b) => b.kind === "ex");
  const idx = exIdx === -1 ? blocks.length : exIdx;
  return [...blocks.slice(0, idx), diagram, ...blocks.slice(idx)];
}

const section13 = buildSection({
  number: "1.3",
  title: "The serving stack",
  subtitle: "Load balancer → API gateway → inference server → model — the layers every request passes through",
  take: "Every inference request traverses a stack of infrastructure layers before a single token is generated: traffic enters through a load balancer, passes policy and auth at an API gateway, queues in an inference server runtime, and finally executes on loaded model weights in GPU or CPU memory.",
  why: "PMs who only think about 'the model' miss where latency accumulates, where failures surface to users, and where scaling decisions actually happen. The serving stack is the product's reliability contract in physical form.",
  paragraphs: [
    [
      s("The load balancer is the front door. "),
      x(
        "It distributes incoming requests across multiple inference replicas, performs health checks, and terminates TLS. When one replica crashes or goes unhealthy, traffic routes elsewhere without users noticing — if the pool is sized correctly.",
        "For AI products, load balancers also enforce connection limits and sometimes sticky sessions when conversational state lives on a specific replica (though stateless design is preferred).",
      ),
      s(" PMs should know their replica count and health-check interval — they're the difference between a blip and a outage during deploys."),
    ],
    [
      s("The API gateway sits between the internet and your inference fleet. "),
      x(
        "It handles authentication, rate limiting, request validation, routing to the right model endpoint, and often billing metering. This is where you enforce per-tenant quotas and block abusive traffic before it hits expensive GPU time.",
        "Managed gateways (AWS API Gateway, Kong, Envoy) vs custom middleware in your app — the PM tradeoff is build speed vs control. Most teams start managed and peel off hot paths later.",
      ),
      s(" Latency added here is pure overhead; keep gateway logic thin and push heavy transforms to async pipelines."),
    ],
    [
      s("The inference server is where model execution happens. "),
      x(
        "Purpose-built runtimes (vLLM, Triton, TGI) load model weights into VRAM, batch incoming requests, manage KV cache for LLMs, and stream tokens back. The model weights are inert files until this layer brings them to life.",
        "A plain Flask script calling model.generate() works in demos. At production scale you need queueing, batching, memory management, and graceful shutdown — that's what inference servers provide.",
      ),
      s(" The stack diagram is your architecture review checklist: if any layer is missing, you have a hidden single point of failure."),
    ],
  ],
  examples: [
    {
      title: "OpenAI's API surface — gateway + routing you never see",
      body: "When you call the Chat Completions API, your request passes through authentication, rate limiting, model routing (GPT-4 vs GPT-4 Turbo vs fine-tuned variants), and queueing before hitting inference hardware. The PM lesson: your API wrapper is not 'the product' — the serving stack behind it determines p99 latency and uptime. Teams building 'OpenAI-compatible' APIs must replicate enough of this stack to be production-viable.",
    },
    {
      title: "Shopify Sidekick — multi-layer serving for merchant copilot",
      body: "Enterprise copilots route requests through API gateways that enforce merchant-level auth, then to model endpoints that may differ by plan tier or feature flag. When Sidekick latency spiked during a flash sale, the root cause wasn't the LLM — it was gateway rate limits shared with checkout APIs. PMs who map the full stack diagnose cross-service contention faster.",
    },
    {
      title: "Startup post-mortem — no load balancer, one GPU box",
      body: "A seed-stage AI tool ran inference on a single EC2 g5.xlarge with a Python script. A deploy restart dropped active WebSocket connections; users saw 30s hangs. Adding an ALB + two replicas with rolling deploys cost $400/month more but eliminated the 'deploy = downtime' pattern. The PM framed it as availability SLA, not infra vanity.",
    },
  ],
});

export const chapter01ModelServingArchitectures = buildChapter({
  slug: "pb5-model-serving-architectures",
  number: 1,
  shortTitle: "Model Serving",
  title: "Model Serving Architectures",
  readingMinutes: 26,
  summary:
    "The systems between your model and your users — design choices that determine latency, cost, and reliability",
  keyTakeaway:
    "Model serving is the production infrastructure that turns trained weights into a reliable API: load balancing, gateways, inference runtimes, and scaling policies. The architecture you pick in month one shapes your cost floor, latency ceiling, and how painful every future model swap will be.",
  pmCallout:
    "As a PM: before you debate GPT-4 vs Claude, draw the serving stack. If you can't point to where auth, batching, scaling, and failover happen, you're not ready to promise an SLA or estimate unit economics.",
  sections: [
    buildSection({
      number: "1.1",
      title: "What is model serving",
      subtitle: "The infrastructure that makes a trained model accessible to real users in real time",
      take: "Model serving is everything that happens after training: loading weights into runtime memory, exposing an API or SDK, handling concurrent requests, managing failures, and keeping the model available at the latency and throughput your product promises.",
      why: "Training produces a file; serving produces revenue. PMs who conflate the two underestimate the engineering surface area between a Jupyter notebook and a feature users pay for.",
      paragraphs: [
        [
          s("A trained model is not a product feature until it is served. "),
          x(
            "Training outputs weights, configs, and tokenizers — artefacts on disk. Serving loads those artefacts into memory, accepts inputs, runs forward passes, and returns outputs on demand, at scale, with observability.",
            "The gap between 'model works in eval' and 'model works for 10,000 concurrent users' is almost entirely serving engineering: memory, batching, networking, and ops.",
          ),
          s(" PMs scope serving work as a first-class roadmap item, not an 'eng will figure it out' footnote."),
        ],
        [
          s("Serving introduces operational concerns training never touches. "),
          x(
            "Uptime SLAs, p95 latency budgets, autoscaling rules, version rollback, cost per query, and incident response — all serving problems.",
            "A model that scores 92% on an offline benchmark but times out 8% of production requests is a failed product feature, regardless of benchmark glory.",
          ),
          s(" Your success metrics must include production SLOs, not just offline accuracy."),
        ],
        [
          s("Serving patterns differ by modality and use case. "),
          x(
            "LLM chat serving optimises for streaming tokens and KV-cache memory. Embedding serving optimises for high-throughput batch encoding. Image generation optimises for queue-based job processing with long runtimes.",
            "One serving architecture does not fit all models in your product. PMs catalog each model endpoint by latency class, cost profile, and scaling behaviour.",
          ),
          s(" The inventory of 'what we serve and how' should be a living document owned by product and platform jointly."),
        ],
      ],
      examples: [
        {
          title: "Hugging Face Inference Endpoints — serving as a managed SKU",
          body: "Hugging Face productised serving: pick a model, pick hardware, get an API endpoint. PMs use it to shortcut months of MLOps when validating a use case. The tradeoff: less control over batching policy, custom pre/post-processing, and unit economics at very high volume. It's the right call for pilots; it's rarely the final architecture at scale.",
        },
        {
          title: "Netflix recommendation models — serving at billions of predictions/day",
          body: "Netflix doesn't serve one LLM — it serves hundreds of ranking and embedding models on specialised infra. PM lesson: 'model serving' at mature companies is a platform capability, not a single endpoint. Your roadmap may start with one chat model but should anticipate a catalog of served models with shared routing and monitoring.",
        },
        {
          title: "Internal demo vs production pilot — the serving cliff",
          body: "A fintech team demoed a compliance summariser running locally on a laptop. The pilot required SOC2 logging, VPC isolation, 99.9% uptime, and sub-3s p95. Six weeks of serving work preceded any prompt tuning. The PM retrospective: 'We should have scoped serving in sprint one, not sprint six.'",
        },
      ],
    }),
    buildSection({
      number: "1.2",
      title: "Online vs offline serving",
      subtitle: "Synchronous inference for user-facing features vs batch processing for background jobs",
      take: "Online serving answers requests synchronously — the user waits for the result. Offline serving processes inputs in bulk on a schedule or queue — high throughput, no user staring at a spinner. Most products need both, and confusing them creates wrong SLAs and wrong hardware choices.",
      why: "PMs who label every inference path 'real-time' overspend on GPUs for nightly jobs. PMs who batch user-facing chat destroy retention. The online/offline split is the first architectural fork.",
      paragraphs: [
        [
          s("Online serving is request-driven and latency-sensitive. "),
          x(
            "A user clicks 'Summarise,' a chat message is sent, a search query runs — each triggers inference that must complete within a UX budget (often 1–5 seconds to first token, under 30 seconds total).",
            "Architecture: always-on replicas, warm models, streaming responses, aggressive autoscaling, and over-provisioned headroom for traffic spikes.",
          ),
          s(" Cost per query is higher; user experience is the return."),
        ],
        [
          s("Offline serving is throughput-driven and schedule-tolerant. "),
          x(
            "Nightly document tagging, weekly churn scoring, bulk embedding of a new corpus, backfill classification of support tickets — inputs accumulate and process in large batches.",
            "Architecture: job queues, spot instances, batch-optimised GPU utilisation, retry logic, and completion notifications instead of synchronous HTTP responses.",
          ),
          s(" You can trade latency for cost — run jobs at 3am on cheaper hardware."),
        ],
        [
          s("Hybrid products expose both paths behind different UX surfaces. "),
          x(
            "A legal research tool might embed new case law overnight (offline) but answer attorney questions live (online). Same model family, different serving topology.",
            "PMs document which user journeys hit which path. Misrouting — e.g., kicking a live chat request into a 4-hour batch queue — is a category of bug that only shows up under load.",
          ),
          s(" The PRD should state online vs offline explicitly for every AI feature."),
        ],
      ],
      examples: [
        {
          title: "Spotify Discover Weekly — offline batch, online cache",
          body: "Playlist generation runs as batch jobs over millions of users; results land in storage before users open the app. The 'instant' playlist is served from precomputed outputs, not live inference. PMs building 'personalised AI' features should ask: can we precompute 80% and serve from cache? That flips the economics.",
        },
        {
          title: "Intercom Fin — online for chat, offline for knowledge indexing",
          body: "Customer-facing answers require online LLM inference with streaming. Indexing help-centre articles into embeddings runs offline when content changes. PMs who conflate the two struggle to explain why 'reindexing' doesn't block chat responses — separate queues, separate SLAs.",
        },
        {
          title: "The 'just batch it' suggestion that killed a pilot",
          body: "A sales copilot PM accepted eng's proposal to batch email-draft requests every 15 minutes to save GPU costs. Reps expected instant drafts after clicking 'Generate.' Completion rate cratered. Fix: online path for interactive drafts, batch path for overnight CRM enrichment. Different features, different serving modes.",
        },
      ],
    }),
    insertDiagram(section13, {
      kind: "diagram",
      id: "pb5-serving-stack",
      type: "flow",
      title: "The serving stack",
      caption:
        "Client request → load balancer (distribute + health-check) → API gateway (auth, rate limits, routing) → inference server (queue, batch, execute) → model weights in GPU/CPU memory → response streamed or returned synchronously.",
    }),
    buildSection({
      number: "1.4",
      title: "Inference servers",
      subtitle: "Triton, TorchServe, vLLM, TGI — the purpose-built runtimes that replace a plain Python script",
      take: "Inference servers are specialised runtimes that load models, batch requests, manage GPU memory, and expose production-grade APIs. vLLM and TGI dominate LLM serving; Triton generalises across frameworks; TorchServe targets PyTorch ecosystems.",
      why: "Choosing an inference server is a multi-year commitment affecting batching efficiency, streaming support, and hiring pool. PMs don't pick the server, but they must understand what it enables and constrains.",
      paragraphs: [
        [
          s("vLLM revolutionised LLM serving with PagedAttention and continuous batching. "),
          x(
            "It manages KV-cache memory like virtual memory pages, reducing waste and allowing higher concurrency on the same GPU. Continuous batching adds new requests to in-flight batches without waiting for the batch to drain.",
            "Result: 2–10× throughput improvement vs naive serving for many workloads. Most self-hosted LLM stacks in 2026 default to vLLM or a fork.",
          ),
          s(" PMs benchmarking 'self-host vs API' should insist on vLLM-class efficiency, not a naive baseline."),
        ],
        [
          s("TGI (Text Generation Inference) is Hugging Face's production server. "),
          x(
            "Rust core, strong Hugging Face ecosystem integration, native support for many open models, flash attention, and quantization. Popular with teams already on HF model hubs.",
            "Tradeoff: slightly less ecosystem breadth than vLLM for cutting-edge optimisations, but excellent for standard transformer deployments.",
          ),
          s(" Good default when your model catalog lives on Hugging Face and you want managed-parity APIs self-hosted."),
        ],
        [
          s("NVIDIA Triton serves multiple model types on one platform. "),
          x(
            "Triton handles TensorRT, ONNX, PyTorch, and TensorFlow models with dynamic batching and model ensemble pipelines — one server, many model types.",
            "Enterprises with mixed workloads (LLM + vision + classical ML) often standardise on Triton. LLM-only startups usually pick vLLM/TGI for deeper transformer optimisations.",
          ),
          s(" PMs with heterogeneous model portfolios favour Triton; LLM-first products favour vLLM/TGI."),
        ],
      ],
      examples: [
        {
          title: "Perplexity-scale self-hosting — vLLM as cost lever",
          body: "Teams serving open models (Llama, Mistral) at scale cite vLLM continuous batching as the difference between viable unit economics and bleeding margin. A PM running a build-vs-buy analysis should require eng to benchmark vLLM on target hardware with production query distributions — not hello-world single-request latency.",
        },
        {
          title: "AWS SageMaker + Triton — enterprise standardisation",
          body: "Large enterprises on AWS often deploy via SageMaker endpoints backed by Triton for governance: one deployment pattern, IAM integration, CloudWatch metrics. PM tradeoff: faster compliance approval, slower iteration on bleeding-edge LLM optimisations vs a lean vLLM cluster.",
        },
        {
          title: "TorchServe migration pain — framework lock-in is real",
          body: "A computer-vision startup built on TorchServe struggled to add an LLM endpoint — different optimal runtime. They ran two serving stacks for a year. PM lesson: inference server choice creates organisational inertia. Align server choice with 18-month model roadmap, not just today's model.",
        },
      ],
    }),
    buildSection({
      number: "1.5",
      title: "Model as a microservice",
      subtitle: "Why wrapping your model in its own service boundary improves reliability and deployability",
      take: "Treating each model (or model family) as an independent microservice — own API, own scaling, own deploy cycle — isolates failures, enables team ownership, and prevents your monolith from becoming an untestable tangle of ML and business logic.",
      why: "PMs pushing 'just add AI to the backend' without service boundaries ship features that break checkout when the summariser OOMs. Microservice boundaries are reliability boundaries.",
      paragraphs: [
        [
          s("A model microservice exposes a narrow contract. "),
          x(
            "Input schema, output schema, latency SLA, error codes — nothing else. The main application calls POST /summarise or gRPC Generate; it doesn't import PyTorch into the payment service.",
            "This lets you swap model versions, change hardware, or roll back without redeploying the entire application.",
          ),
          s(" PMs write API contracts in PRDs the same way they would for any third-party integration."),
        ],
        [
          s("Independent scaling matches heterogeneous load. "),
          x(
            "Your chat model might see 500 req/s at peak while your embedding model sees 5,000 req/s steady. Monolith scaling over-provisions chat GPUs; separate services right-size each pool.",
            "Kubernetes HPA per deployment, or separate auto-scaling groups per model endpoint — the infra pattern follows the service boundary.",
          ),
          s(" Cost optimisation starts with decoupled scaling, not cheaper GPUs."),
        ],
        [
          s("Team ownership maps cleanly to service ownership. "),
          x(
            "An ML platform team owns the summarisation service SLO; product eng owns the app that calls it. On-call rotations, dashboards, and incident post-mortems have clear lines.",
            "Without boundaries, every inference incident becomes 'the app's problem' and model quality regressions hide in full-stack deploys.",
          ),
          s(" PMs advocate for service boundaries when ML and app eng are different squads — it's an org design decision as much as a technical one."),
        ],
      ],
      examples: [
        {
          title: "Uber Michelangelo — model serving as platform primitive",
          body: "Uber's ML platform treats each deployed model as a managed service with standardised logging, auth, and deployment pipelines. Product teams consume models via internal APIs without running GPUs in their service. PMs at scale should push toward platform primitives rather than every squad owning raw inference infra.",
        },
        {
          title: "E-commerce monolith meltdown — summariser took down search",
          body: "A retailer embedded LLM inference inside the search microservice. A memory leak in the summariser path crashed search pods during Black Friday. Extracting summarisation to its own service with circuit breakers isolated the blast radius. PM framed the refactor as revenue protection, not architecture purity.",
        },
        {
          title: "Circuit breakers as product feature",
          body: "A B2B API product wrapped model calls with circuit breakers: after N timeouts, return a degraded response ('Summary temporarily unavailable') instead of hanging. PM defined fallback copy and UX; eng implemented at the service boundary. Users prefer honest degradation over infinite spinners.",
        },
      ],
    }),
    buildSection({
      number: "1.6",
      title: "Multi-model serving",
      subtitle: "Serving multiple models on shared infrastructure — the efficiency gains and the routing complexity",
      take: "Production products rarely serve one model: a router model picks intents, a small model handles drafts, a large model handles hard queries, embedding models feed retrieval. Multi-model serving shares GPU fleets and adds routing logic that must be observable and testable.",
      why: "PMs who assume 'one model to rule them all' overspend on large-model calls for easy tasks. Multi-model architectures are cost optimisation — but routing bugs send hard queries to dumb models silently.",
      paragraphs: [
        [
          s("Model routing is a product logic problem dressed as infra. "),
          x(
            "Rules-based routing: if token count > N, use large model. Classifier routing: a small model predicts complexity or intent. Cascade: try cheap model first, escalate if confidence is low.",
            "Each pattern has failure modes: cascades can double latency on hard queries; classifiers can misroute edge cases.",
          ),
          s(" PMs define routing policies and acceptance criteria — eng implements; product validates on golden query sets."),
        ],
        [
          s("Shared infrastructure improves GPU utilisation. "),
          x(
            "One GPU server running vLLM can host multiple LoRA adapters or multiple smaller models if memory allows. Triton's multi-model serving loads several models on one GPU with dynamic memory allocation.",
            "The efficiency gain is real; the operational complexity is also real — one bad model deploy can evict others from VRAM.",
          ),
          s(" Capacity planning becomes multidimensional: which models cohabit which nodes?"),
        ],
        [
          s("Observability must be per-model, not per-cluster. "),
          x(
            "Log model ID, version, and routing reason on every request. Without this, a quality regression in 'model B' looks like 'the AI got worse' with no actionable diagnosis.",
            "Dashboards: latency, error rate, cost, and quality proxies split by model route. A/B tests often compare routing policies, not just model versions.",
          ),
          s(" PMs require model-level metrics in the analytics spec before multi-model routing ships."),
        ],
      ],
      examples: [
        {
          title: "Microsoft Copilot routing — small vs large model tiers",
          body: "Copilot-class products route simple completions to smaller/faster models and complex reasoning to larger ones. Users don't see the router; they feel consistent latency. PMs designing tiered AI should specify which user journeys get which route and what happens when the router is wrong.",
        },
        {
          title: "Stripe fraud + LLM — different models, same platform",
          body: "Stripe runs classical ML models for fraud at microsecond latency and newer LLM features for support — different serving stacks, unified observability culture. PM lesson: multi-model doesn't mean one server; it means one platform discipline across heterogeneous endpoints.",
        },
        {
          title: "Router regression — easy queries hit 70B model for a week",
          body: "A misconfigured intent classifier sent 40% of 'hello' and 'thanks' messages to a 70B endpoint. GPU bill doubled; latency worsened. Alerting on routing distribution caught it on day 7 — should have been day 1. PM added 'routing distribution' to the weekly metrics review.",
        },
      ],
    }),
    buildSection({
      number: "1.7",
      title: "Cold starts and warm pools",
      subtitle: "Why the first request is always slowest — and the infrastructure cost of keeping models warm",
      take: "A cold start happens when no loaded model waits on GPU memory — the runtime must fetch weights, initialise CUDA, and compile kernels before the first token. Warm pools keep replicas loaded and ready, trading infrastructure cost for consistent latency.",
      why: "Nothing erodes trust faster than a 30-second first message after marketing promises 'instant AI.' Cold starts are invisible in demos on a pre-warmed laptop; they're brutal in production with scale-to-zero.",
      paragraphs: [
        [
          s("Cold start latency has multiple components. "),
          x(
            "Container boot, model weight download from object storage, GPU memory allocation, CUDA kernel compilation (especially first run), and tokenizer initialisation — each adds seconds to minutes for large models.",
            "A 70B model cold start on a fresh node can exceed 5–10 minutes without optimised image caching. Users experience the tail of whatever path is slowest.",
          ),
          s(" PMs set 'max cold start' requirements when eng proposes scale-to-zero for cost savings."),
        ],
        [
          s("Warm pools trade money for predictability. "),
          x(
            "Minimum replica count of 1+ means at least one loaded instance always waits. For high-traffic products, N warm replicas across AZs cover baseline load plus burst headroom.",
            "Scale-to-zero saves money for dev/staging and low-traffic internal tools. It's hostile to user-facing SLAs unless you accept first-request penalty or use a 'warming' ping.",
          ),
          s(" Document the warm pool size as a product cost line — it's the price of consistent UX."),
        ],
        [
          s("Mitigations beyond always-on replicas exist. "),
          x(
            "Pre-baked container images with weights baked in (not downloaded at runtime), predictive scaling before known traffic spikes, and provisioned concurrency on serverless platforms.",
            "Some teams show optimistic UI ('Thinking...') while secretly warming a cold replica — UX padding, not a substitute for infra investment at scale.",
          ),
          s(" PMs choose between honest latency disclosure and infra spend — both are valid; hiding cold starts is not."),
        ],
      ],
      examples: [
        {
          title: "AWS Lambda + LLM — cold start reality check",
          body: "Teams experimenting with serverless LLM inference hit multi-minute cold starts for multi-GB models. Provisioned concurrency fixes latency but erases serverless cost savings. PM takeaway: serverless inference works for small models and sporadic traffic; large LLMs usually need always-warm GPU pods.",
        },
        {
          title: "Duolingo Max — warm pools for lesson-time peaks",
          body: "Edtech products see predictable traffic spikes (evening study hours). Predictive autoscaling that warms replicas 30 minutes before peak reduced p95 first-token latency 60% vs reactive scaling. PMs with cyclical usage should invest in schedule-based warming, not just threshold-based.",
        },
        {
          title: "Internal tool scale-to-zero — acceptable tradeoff documented",
          body: "A 50-person company's HR policy bot scaled to zero nights and weekends. First Monday query took 45 seconds; HR accepted it because usage was sporadic and budget was $200/month. PM explicitly documented 'cold start up to 60s acceptable' in the PRD — eng didn't over-build.",
        },
      ],
    }),
    buildSection({
      number: "1.8",
      title: "Autoscaling inference",
      subtitle: "Scaling up when traffic spikes, scaling down when it doesn't — and the latency cliff when scaling lags",
      take: "Autoscaling adjusts replica count based on metrics (GPU utilisation, queue depth, requests per second). It saves money during quiet periods and prevents overload during spikes — but scaling lag creates a latency cliff where demand outruns supply for minutes.",
      why: "PMs promise launch-day capacity without understanding scale-up time. The latency cliff kills viral moments: users arrive faster than GPUs provision.",
      paragraphs: [
        [
          s("Choosing the right scaling signal matters. "),
          x(
            "CPU utilisation is a poor signal for GPU inference — GPU can be saturated while CPU looks idle. Better signals: request queue depth, time-to-first-token p95, GPU memory utilisation, or requests in flight per replica.",
            "Custom metrics from the inference server (vLLM exposes queue stats) beat generic container metrics.",
          ),
          s(" PMs ask 'what metric triggers a new replica?' in architecture review — vague answers predict launch pain."),
        ],
        [
          s("Scale-up lag is the hidden SLA killer. "),
          x(
            "Provisioning a new GPU node: 2–5 minutes on Kubernetes with pre-warmed node pools; 5–15 minutes if starting from zero capacity in cloud APIs. During lag, existing replicas queue requests and latency explodes.",
            "Mitigation: maintain minimum replicas, use over-provisioned node pools, pre-scale before known events, and cap queue wait with timeout + graceful error.",
          ),
          s(" Launch playbooks should include 'pre-scale to N replicas 1 hour before announcement.'"),
        ],
        [
          s("Scale-down must be graceful for long-running requests. "),
          x(
            "Draining connections before terminating replicas prevents mid-stream truncation. Inference servers should support graceful shutdown: finish in-flight generations, reject new work, then exit.",
            "Aggressive scale-down saves money but truncates streaming responses — users see half an answer. PMs define whether that's acceptable (usually not).",
          ),
          s(" Cost optimisation sprints should not ship without drain-timeout validation on streaming endpoints."),
        ],
      ],
      examples: [
        {
          title: "ChatGPT launch-day scaling — the latency cliff is folklore for a reason",
          body: "Viral AI launches routinely hit periods where demand exceeds provisioned capacity. Users see 'at capacity' messages or 10× normal latency. PMs planning launches should model: peak concurrent users × avg generation time ÷ per-replica throughput = minimum replicas, then add buffer for scale-up lag.",
        },
        {
          title: "Black Friday copilot — pre-scale vs reactive",
          body: "A retail copilot pre-scaled from 4 to 20 GPU replicas before Black Friday based on prior-year traffic. Reactive scaling alone would have lagged 8 minutes into the traffic spike — long enough for support tickets. PM owned the pre-scale schedule; eng owned the runbook.",
        },
        {
          title: "Scale-down truncated streams — user-visible bug",
          body: "Aggressive HPA scale-down killed replicas mid-generation during a traffic trough. Users received cut-off legal summaries. Fix: 300-second drain period and 'generation in progress' stickiness. PM classified it as P1 — truncated output in legal context is liability, not cosmetic.",
        },
      ],
    }),
    buildSection({
      number: "1.9",
      title: "PM decision lens",
      subtitle: "Serving architecture as a product commitment — why the serving choice you make in month one is expensive to undo in month twelve",
      take: "Serving architecture is a product commitment: it determines your latency story, cost floor, reliability SLA, and how fast you can ship model updates. Changing inference servers or tearing down a monolith after launch is a quarter-scale project, not a sprint.",
      why: "PMs who defer serving decisions to 'later' inherit invisible constraints on every feature and pricing decision. The decision lens forces explicit tradeoffs before code ossifies.",
      paragraphs: [
        [
          s("Start with user-facing SLOs, work backward to architecture. "),
          x(
            "Define: p95 time-to-first-token, max error rate, acceptable cold start, and uptime target. Map each SLO to infra requirements: warm pools for cold start, replica minimums for uptime, gateway rate limits for fairness.",
            "If the SLO set implies $15K/month GPU spend and the budget is $2K, the product scope must shrink — smaller model, batch path, or API vendor — not hope for magic optimisations.",
          ),
          s(" SLO-first prevents the 'ship demo, panic in prod' cycle."),
        ],
        [
          s("Build-vs-buy for serving is a 12-month question, not a pilot question. "),
          x(
            "Managed APIs (OpenAI, Anthropic, Bedrock): fastest launch, highest per-token cost at scale, least ops. Self-hosted vLLM: highest ops burden, best unit economics at millions of queries, most control.",
            "Break-even volume depends on query length, model size, and eng salary loaded cost. PMs model three scenarios: 10K, 100K, 1M queries/month.",
          ),
          s(" Revisit the decision quarterly — the break-even point moves as model prices drop and your traffic grows."),
        ],
        [
          s("Document the serving architecture decision record. "),
          x(
            "ADR format: context, decision, consequences, review date. Include: inference server choice, online vs offline split, minimum warm replicas, autoscaling policy, and rollback procedure.",
            "New hires and execs will ask 'why do we self-host?' six months later. The ADR answers without relitigating from scratch.",
          ),
          s(" Teams that document serving decisions iterate faster because they know what's load-bearing vs incidental."),
        ],
      ],
      examples: [
        {
          title: "The serving architecture one-pager — PM template",
          body: "Mature AI PMs maintain a living doc: models served, endpoints, SLOs, cost per 1K queries, inference server, scaling policy, on-call owner, and last incident date. Exec reviews take 10 minutes. Teams without it rediscover the same architecture debates every funding round.",
        },
        {
          title: "Pivot from self-host to API at 50K users",
          body: "A startup self-hosted Llama on 8 GPUs for cost control. At 50K DAU, ops burden (on-call, CUDA debugging, model updates) exceeded one ML engineer's capacity. They migrated hot path to a managed API, kept self-host for offline batch only. PM framed it as 'buy back eng velocity' — the right call when serving ops blocks feature work.",
        },
        {
          title: "Enterprise procurement — serving architecture in the security questionnaire",
          body: "Enterprise buyers ask: where does inference run, who can access logs, what's the failover story? PMs with a clear serving architecture diagram pass security review faster. Vague 'we use AI' answers trigger month-long diligence. Serving is a sales asset when documented.",
        },
      ],
    }),
  ],
  quiz: [
    {
      q: "Your user-facing chat feature needs sub-2s time-to-first-token. Engineering proposes scale-to-zero GPU nodes to save costs. What's the primary risk?",
      options: [
        "Scale-to-zero improves first-token latency by reducing queue depth.",
        "Cold starts on idle nodes can add seconds to minutes before any token is generated.",
        "Scale-to-zero only affects offline batch jobs, not online chat.",
        "Warm pools are required by GDPR for user-facing AI.",
      ],
      correct: 1,
      correctFeedback:
        "Right. Scale-to-zero means no loaded model waits on GPU memory. The first request after idle pays container boot, weight load, and CUDA init — incompatible with aggressive TTFT SLAs unless you add provisioned concurrency or minimum replicas.",
      wrongFeedback:
        "Cold starts are the main tension with scale-to-zero for latency-sensitive online serving. Re-read sections 1.2 and 1.7.",
    },
    {
      q: "Where does the API gateway sit in the canonical serving stack?",
      options: [
        "After the inference server, before the model weights.",
        "Between the load balancer and the inference server — handling auth, rate limits, and routing.",
        "Replacing the load balancer entirely in production systems.",
        "Only in offline batch pipelines, not online serving.",
      ],
      correct: 1,
      correctFeedback:
        "Exactly. Traffic flows: client → load balancer → API gateway → inference server → model. The gateway enforces policy before expensive GPU work runs.",
      wrongFeedback:
        "The gateway protects the inference fleet and meters usage. It's upstream of the inference server. Re-read section 1.3.",
    },
    {
      kind: "order",
      q: "Put the serving stack layers in the order a request passes through them.",
      prompt: "Drag to arrange first step (top) to last (bottom).",
      items: [
        "Load balancer distributes traffic across healthy replicas.",
        "API gateway authenticates and rate-limits the request.",
        "Inference server batches and executes the forward pass.",
        "Model weights in GPU memory produce output tokens.",
      ],
      correctFeedback:
        "Correct. Each layer adds latency but also reliability, security, and efficiency. Skipping layers in production creates hidden risk.",
      wrongFeedback:
        "Request path: load balancer → gateway → inference server → model execution. Re-read section 1.3.",
    },
    {
      kind: "categorize",
      q: "Sort each workload into online (synchronous, user waits) or offline (batch, schedule-tolerant) serving.",
      categories: ["Online serving", "Offline serving"],
      items: [
        { text: "Live chat assistant responding to a user message.", category: 0 },
        { text: "Nightly embedding of 2M new support tickets.", category: 1 },
        { text: "Real-time fraud score on a checkout click.", category: 0 },
        { text: "Weekly batch churn prediction for all accounts.", category: 1 },
        { text: "Streaming code completion in an IDE.", category: 0 },
        { text: "Monthly re-index of enterprise wiki into vector store.", category: 1 },
      ],
      correctFeedback:
        "Right. Online paths need warm replicas and streaming; offline paths optimise throughput and cost on a schedule.",
      wrongFeedback:
        "Ask: is a user staring at the screen waiting? Online. Can it run tonight on a job queue? Offline. Re-read section 1.2.",
    },
    {
      q: "Your product routes simple queries to a 7B model and hard queries to a 70B model. What must you instrument to catch routing regressions?",
      options: [
        "Only aggregate cluster GPU utilisation — per-model metrics are unnecessary.",
        "Per-model latency, error rate, cost, and routing distribution on every request.",
        "Offline benchmark accuracy once per quarter.",
        "User survey NPS only.",
      ],
      correct: 1,
      correctFeedback:
        "Right. Multi-model serving fails silently when the router sends everything to the expensive model or misroutes hard queries to the small one. Per-model metrics make routing bugs visible within hours.",
      wrongFeedback:
        "Routing is a product logic layer — it needs per-model observability. Re-read section 1.6.",
    },
    {
      q: "A team debates vLLM vs baking inference into their Node.js monolith. Which framing best reflects the PM tradeoff?",
      options: [
        "Monolith is always better — fewer services to manage.",
        "vLLM adds ops complexity but delivers production batching, streaming, and GPU memory management that a script in the app server cannot match at scale.",
        "Inference servers are only for training, not serving.",
        "The choice has no impact on unit economics.",
      ],
      correct: 1,
      correctFeedback:
        "Right. Purpose-built inference servers exist because naive in-app inference collapses under concurrency, memory pressure, and streaming requirements. The PM tradeoff is ops burden vs performance and cost at scale.",
      wrongFeedback:
        "Inference servers like vLLM are production runtimes, not training tools. Re-read section 1.4.",
    },
  ],
});
