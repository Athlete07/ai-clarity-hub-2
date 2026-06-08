import { buildChapter, buildSection, s, x } from "../concepts-pb4-helpers";

export const chapter02GpuVsCpuInference = buildChapter({
  slug: "pb5-gpu-vs-cpu-inference",
  number: 2,
  shortTitle: "GPU vs CPU",
  title: "GPU vs CPU Inference",
  readingMinutes: 25,
  summary:
    "The hardware decision that determines your cost floor and latency ceiling — parallel GPUs vs general-purpose CPUs, and when each wins",
  keyTakeaway:
    "GPUs dominate LLM inference because matrix multiplication parallelises across thousands of cores; CPUs win for small models, low throughput, and cost-sensitive edge cases. VRAM is often the binding constraint, not FLOPs — and cloud GPU economics (on-demand vs reserved vs spot) belong in every unit-cost model.",
  pmCallout:
    "As a PM: ask for cost per 1,000 queries on the actual hardware you'll run in production — not a laptop benchmark. GPU spend becomes a product line item the moment you self-host.",
  sections: [
    buildSection({
      number: "2.1",
      title: "Why GPUs dominate AI inference",
      subtitle: "Parallel matrix multiplication explained — and why the CPU isn't built for this workload",
      take: "Neural network inference is mostly large matrix multiplications and element-wise ops that parallelise embarrassingly well. GPUs have thousands of small cores designed for exactly this — throughput over single-thread latency — while CPUs optimise for sequential logic on a handful of fast cores.",
      why: "PMs hear 'we need GPUs' as a budget line without understanding why. That ignorance leads to bad build-vs-buy calls and unrealistic latency promises on CPU-only stacks for 70B models.",
      paragraphs: [
        [
          s("Transformers are matmul machines. "),
          x(
            "Each layer multiplies large weight matrices by activation vectors. A 7B parameter model performs billions of multiply-accumulate operations per token. The workload is compute-dense and highly parallel — every element of the matrix can be computed independently.",
            "CPUs excel when branchy sequential code must run fast on one thread. GPUs excel when the same operation runs millions of times in parallel.",
          ),
          s(" LLM inference maps to GPU strengths; general app servers map to CPU strengths."),
        ],
        [
          s("The latency-vs-throughput distinction matters for product design. "),
          x(
            "A CPU might finish one small inference faster in isolation due to lower kernel launch overhead. A GPU finishes 100 inferences faster because it batches them across cores.",
            "User-facing LLM serving rarely runs one request in isolation — concurrency is the norm. GPU throughput wins at production load even when CPU wins in a hello-world script.",
          ),
          s(" PMs should benchmark at expected concurrent load, not single-user demos."),
        ],
        [
          s("Specialised AI chips extend the same principle. "),
          x(
            "TPUs, Inferentia, and other accelerators are ASICs or optimised architectures that push matmul throughput further than general-purpose GPUs for specific workloads.",
            "The PM takeaway isn't 'buy NVIDIA' — it's 'inference needs parallel linear algebra hardware.' The vendor choice follows from model type, cloud, and software ecosystem.",
          ),
          s(" Hardware selection is a 12-month cost commitment; treat it like picking a database."),
        ],
      ],
      examples: [
        {
          title: "OpenAI API pricing reflects GPU economics",
          body: "Managed LLM APIs price per token because underlying inference runs on expensive GPU clusters with utilisation and margin baked in. PMs comparing self-host vs API are implicitly comparing 'hire MLOps + rent GPUs' vs 'pay someone else's GPU bill with markup.' The GPU is the cost floor either way.",
        },
        {
          title: "Embedding API at scale — GPU throughput wins",
          body: "A SaaS product embedded 50M documents. CPU-based encoding would have taken weeks; a GPU cluster finished in days with continuous batching. PM approved GPU spend because time-to-launch had revenue attached. The decision was throughput economics, not bragging rights.",
        },
        {
          title: "The CPU-only pilot that couldn't graduate",
          body: "An internal summariser ran Llama 8B on CPU for a 10-person pilot. p95 latency was 45 seconds per summary. Product needed sub-5s. Migration to a single A10G GPU brought p95 to 2.1s. PM used the pilot to justify GPU line item with measured before/after, not vendor marketing.",
        },
      ],
    }),
    buildSection({
      number: "2.2",
      title: "How a GPU differs from a CPU",
      subtitle: "Thousands of small cores vs dozens of large ones — the architectural tradeoff that matters for AI",
      take: "CPUs have a few powerful cores with large caches and complex branch prediction — optimised for low-latency single-thread work. GPUs have thousands of simpler cores grouped into SMs, sharing memory bandwidth — optimised for SIMD-style parallel workloads like tensor ops.",
      why: "When eng says 'we're memory-bandwidth bound,' PMs who understand CPU vs GPU architecture know the fix isn't 'faster CPU' — it's different hardware, quantisation, or batching.",
      paragraphs: [
        [
          s("Core count vs core sophistication is the fundamental split. "),
          x(
            "A modern server CPU might have 64 cores at 3+ GHz with sophisticated out-of-order execution. A datacenter GPU might have 10,000+ CUDA cores organised into streaming multiprocessors, each running simpler threads in warps of 32.",
            "GPU threads are lightweight; context switching is cheap. CPU threads are heavyweight; parallelism comes from fewer, smarter cores.",
          ),
          s(" Inference batches map to GPU warps; control-flow-heavy app logic maps to CPUs."),
        ],
        [
          s("Memory hierarchy differs critically. "),
          x(
            "CPUs have large L1/L2/L3 caches close to cores — great for irregular memory access. GPUs have high-bandwidth VRAM (HBM on datacenter cards) but higher latency to global memory — great when threads access contiguous tensor data predictably.",
            "When models don't fit in VRAM, GPU inference fails or spills to CPU RAM with catastrophic slowdown. CPUs use system RAM by default — no separate VRAM pool.",
          ),
          s(" 'Fits in memory' for GPU means 'fits in VRAM' — a sharper constraint than RAM on CPU."),
        ],
        [
          s("Host CPU still matters in GPU serving. "),
          x(
            "The GPU runs matmul; the CPU handles tokenisation, request parsing, networking, queue management, and orchestration. Under-provisioned host CPUs bottleneck GPU utilisation.",
            "A common mistake: max GPU instance with minimal vCPUs. The GPU sits idle waiting for the CPU to feed it batches.",
          ),
          s(" PMs reviewing instance types should check vCPU count alongside GPU SKU — balanced configs utilisation better."),
        ],
      ],
      examples: [
        {
          title: "NVIDIA H100 vs Intel Xeon — different tools",
          body: "H100 delivers ~3TB/s memory bandwidth for tensor workloads; Xeon excels at running PostgreSQL and Kubernetes control planes. Teams run both: CPUs for orchestration and pre/post-processing, GPUs for model forward passes. PMs budget for both, not GPU alone.",
        },
        {
          title: "Under-provisioned vCPU — GPU at 40% utilisation",
          body: "An eng team deployed vLLM on g5.xlarge (1 GPU, 4 vCPUs) for a 13B model. GPU utilisation plateaued at 40% — CPU couldn't tokenise and schedule fast enough. Upsizing to 8 vCPUs lifted utilisation to 78% and cut cost per query. PM lesson: GPU bill isn't just the GPU line item.",
        },
        {
          title: "Apple M-series — unified memory blurs the line",
          body: "Apple Silicon uses unified memory for CPU and GPU, enabling large models on laptops without discrete VRAM pools. PMs building Mac-native AI features should know this architecture differs from datacenter NVIDIA — different perf profile, different deployment story.",
        },
      ],
    }),
    buildSection({
      number: "2.3",
      title: "GPU memory (VRAM) as the binding constraint",
      subtitle: "Why a 70B model that fits in RAM still can't run on a GPU with insufficient VRAM",
      take: "VRAM holds model weights, activations, and KV cache during inference. If the working set exceeds VRAM, the model won't load or performance collapses. For LLMs, KV cache grows with concurrent sessions and context length — VRAM demand is dynamic, not just weight file size.",
      why: "PMs approve GPU purchases based on 'the model fits' from a spreadsheet, then production fails because 50 concurrent 32K-context chats exhaust VRAM. VRAM planning is capacity planning.",
      paragraphs: [
        [
          s("Weight memory is only the starting point. "),
          x(
            "A 7B model in FP16 is ~14GB weights alone. 70B is ~140GB — exceeds a single A100 80GB without quantisation or tensor parallelism across multiple GPUs.",
            "Quantisation (INT8, INT4) shrinks weight footprint. GPTQ/AWQ models trade slight quality loss for fitting on smaller GPUs.",
          ),
          s(" PMs should know the quantised vs full-precision memory budget before promising hardware."),
        ],
        [
          s("KV cache scales with concurrency and context length. "),
          x(
            "During autoregressive generation, each token adds to the key-value cache stored per layer. Long contexts and many parallel requests multiply VRAM consumption beyond static weight size.",
            "Rule of thumb: KV cache can dominate VRAM at high concurrency even when weights fit comfortably. vLLM's PagedAttention mitigates fragmentation but doesn't eliminate the bytes.",
          ),
          s(" Capacity planning must model peak concurrent users × average context length, not just model card specs."),
        ],
        [
          s("OOM errors are product incidents. "),
          x(
            "CUDA out-of-memory kills requests, drops replicas, and triggers cascading failures. Mitigations: smaller models, quantisation, max context limits, request queueing with rejection, or more/larger GPUs.",
            "Product levers: cap context window in UX, limit concurrent generations per user, tier long-context behind premium plans.",
          ),
          s(" PMs own the business tradeoff when eng proposes context caps — it's a feature decision, not just infra."),
        ],
      ],
      examples: [
        {
          title: "70B on 2× A100 80GB — tensor parallelism required",
          body: "Running Llama 70B FP16 requires splitting weights across GPUs via tensor parallelism. PMs scoping 'self-host 70B' must budget for multi-GPU nodes ($$$) and the eng complexity of distributed inference — not a single consumer GPU.",
        },
        {
          title: "Context window marketing vs VRAM reality",
          body: "A copilot marketed '100K context' but infra capped at 32K due to VRAM limits on chosen hardware. Sales promised what product couldn't deliver. PM retrospective: align marketing claims with hardware capacity model before launch.",
        },
        {
          title: "Quantised 7B fits one L4 — unit economics unlocked",
          body: "A support bot moved from GPT-4 API to quantised Llama 7B on NVIDIA L4 (24GB VRAM). Quality dropped 8% on eval but cost per query fell 85%. PM accepted the quality tradeoff for tier-1 support where speed and cost mattered more than nuance.",
        },
      ],
    }),
    buildSection({
      number: "2.4",
      title: "GPU tiers for inference",
      subtitle: "A100, H100, T4, L4 — what each costs, what it delivers, and which workloads each is built for",
      take: "Datacenter GPU tiers span entry inference cards (T4, L4) to training-class accelerators (A100, H100). Higher tiers deliver more VRAM, bandwidth, and tensor-core throughput — at sharply higher hourly rates. Matching tier to model size and latency SLA is the PM's hardware procurement problem.",
      why: "Overshooting GPU tier burns margin; undershooting causes latency failures and OOM. PMs don't pick SKUs, but they approve budgets that embed these choices.",
      paragraphs: [
        [
          s("T4 and L4 are inference workhorse tiers. "),
          x(
            "NVIDIA T4 (16GB VRAM) is older but cheap — fine for small models, embeddings, and dev/staging. L4 (24GB) is the modern inference card for 7B–13B quantised models at moderate concurrency.",
            "AWS g6 instances (L4), GCP L4 attach — typical cost $0.50–$1.50/hr on-demand. Good for cost-sensitive production on smaller models.",
          ),
          s(" Default tier for 'self-host a 7B support bot' in 2026."),
        ],
        [
          s("A100 and H100 are datacenter premium tiers. "),
          x(
            "A100 80GB: workhorse for 13B–70B with quantisation or multi-GPU. H100: ~2–3× inference throughput vs A100 for large transformer workloads, with higher memory bandwidth.",
            "On-demand H100 can exceed $4–8/hr per GPU. Reserved instances cut 30–60%. These tiers justify themselves at high throughput or when latency SLAs are tight on large models.",
          ),
          s(" PMs at scale negotiate reserved capacity; startups start on-demand until traffic is predictable."),
        ],
        [
          s("Pick tier by model size × concurrency × context, not bragging rights. "),
          x(
            "Decision matrix: 7B INT4 + low concurrency → L4. 13B FP16 + medium concurrency → A10G/L40S. 70B quantised + high concurrency → multi A100/H100.",
            "Cloud provider instance families map to GPU SKUs: AWS p4/p5 (A100/H100), g5 (A10G), g6 (L4). PMs compare effective cost per 1M tokens, not hourly rate alone.",
          ),
          s(" Run the token economics spreadsheet before signing a 1-year reserved GPU commit."),
        ],
      ],
      examples: [
        {
          title: "Startup GPU tier creep — H100 for a 7B model",
          body: "A team provisioned H100 because 'it's the best.' Utilisation averaged 12% running a 7B model that fit on L4. PM downgraded to g6.xlarge, saved $18K/month, latency unchanged on eval. Right-sizing is recurring ops hygiene.",
        },
        {
          title: "A10G sweet spot for 13B production",
          body: "Multiple open-source LLM products standardise on A10G (24GB) for 13B models with INT8 quantisation — balance of VRAM, cost (~$1/hr), and availability across clouds. PMs copying this playbook should validate on their query mix, not assume identical.",
        },
        {
          title: "H100 for latency-critical 70B",
          body: "An enterprise legal assistant self-hosted 70B with sub-3s TTFT SLA. Only H100 clusters with tensor parallelism met the bar after optimisations. PM accepted $40K/month GPU spend because billable attorney time saved exceeded infra cost 10×.",
        },
      ],
    }),
    buildSection({
      number: "2.5",
      title: "When CPU inference is good enough",
      subtitle: "Smaller models, lower throughput, cost-sensitive deployments — the CPU's legitimate use cases",
      take: "CPU inference works for tiny models, sporadic low-concurrency traffic, edge devices without GPUs, and preprocessing steps. Modern CPU optimisations (ONNX Runtime, llama.cpp with AVX) make sub-7B quantised models viable on CPU for some products — but not at LLM-chat scale.",
      why: "Not every feature needs a GPU. PMs who GPU everything waste budget; PMs who CPU everything for a 70B chat product ship unusable latency.",
      paragraphs: [
        [
          s("Small quantised models on CPU can serve niche use cases. "),
          x(
            "llama.cpp and ONNX Runtime run 3B–7B GGUF models on CPU with acceptable latency for single-user or low-concurrency internal tools. Apple Silicon and AMD with AVX-512 improve throughput.",
            "Sweet spot: offline batch on CPU overnight, dev/staging environments, and embedded classification models (not generative LLMs at scale).",
          ),
          s(" PMs match hardware to concurrency tier — CPU for <10 concurrent, GPU for product-facing chat."),
        ],
        [
          s("Classical ML and tiny neural nets live on CPU happily. "),
          x(
            "XGBoost, logistic regression, small CNNs for classification, and embedding models under 100M parameters often run faster and cheaper on CPU than GPU when batch sizes are small.",
            "Not every 'AI feature' is an LLM. Recommendation scoring, fraud rules, and sentiment classifiers may never need a GPU.",
          ),
          s(" Inventory your models by type before assuming one GPU policy for the whole product."),
        ],
        [
          s("CPU inference simplifies ops at small scale. "),
          x(
            "No CUDA drivers, no VRAM OOM, deploy on any container host. For MVPs under 1K daily queries, CPU hosting on standard Kubernetes may ship faster than GPU quota approval.",
            "The graduation trigger: when p95 latency or cost per query on CPU exceeds managed API or GPU self-host alternatives — run the numbers monthly.",
          ),
          s(" CPU is a valid launchpad; it's rarely the destination for user-facing generative AI at scale."),
        ],
      ],
      examples: [
        {
          title: "llama.cpp on MacBooks — developer tooling pattern",
          body: "IDE plugins (Continue, Cursor local mode) run small models on developer laptops via llama.cpp. Zero cloud cost, privacy preserved. PM lesson: CPU/on-device works when the user is the infrastructure and concurrency is one.",
        },
        {
          title: "Spam filter on CPU — never needed GPU",
          body: "A email product's spam classifier ran on standard CPU instances for a decade — millions of inferences daily, microsecond latency, pennies in compute. PM resisted 'upgrade to GPU' because the model wasn't the bottleneck. Right hardware for the workload.",
        },
        {
          title: "CPU staging environment — save GPU for prod",
          body: "A team ran integration tests against CPU-quantised models in CI/staging and GPU full models only in production. Cut non-prod cloud spend 70%. PM approved the quality gap in staging because eval fidelity didn't need prod parity for smoke tests.",
        },
      ],
    }),
    buildSection({
      number: "2.6",
      title: "Inference accelerators",
      subtitle: "AWS Inferentia, Google TPUs, Apple Neural Engine — the alternatives to commodity GPUs",
      take: "Hyperscalers and chip vendors offer AI-specific accelerators optimised for inference throughput and cost at scale. Inferentia and Trainium on AWS, TPUs on GCP, and Apple Neural Engine on-device each trade ecosystem lock-in and software compatibility for better price-performance on supported models.",
      why: "PMs on AWS/GCP should know accelerators exist before defaulting to NVIDIA — and should know the model compatibility constraints that come with them.",
      paragraphs: [
        [
          s("AWS Inferentia2 targets cost-efficient inference at scale. "),
          x(
            "Inferentia chips run models compiled via Neuron SDK — not every PyTorch model ports trivially. Once compiled, inf2 instances claim 3–5× better price-performance vs comparable GPU for supported transformer workloads.",
            "Best for teams all-in on AWS with eng capacity to handle Neuron compilation and model support matrix.",
          ),
          s(" PM question: 'Is our model on the Neuron supported list?' before committing."),
        ],
        [
          s("Google TPUs are GCP-native accelerators. "),
          x(
            "TPU v4/v5 pods dominate large-scale training; TPU inference endpoints serve models via JAX/PyTorch XLA paths. Strong for teams already on Vertex AI and Google stack.",
            "Migration cost from NVIDIA CUDA ecosystem is real. TPU wins when you're GCP-committed and model is supported.",
          ),
          s(" Accelerator choice often follows cloud choice — multi-cloud GPU is rare at startup scale."),
        ],
        [
          s("Edge accelerators enable on-device inference. "),
          x(
            "Apple Neural Engine, Qualcomm NPU, and Edge TPU run quantised models on phones and embedded devices — zero cloud inference cost, offline capability, privacy by architecture.",
            "Tradeoff: model size caps, device fragmentation, update distribution complexity. Chapter 5 covers edge vs cloud in depth.",
          ),
          s(" PMs choose edge accelerators when privacy or offline is a hard requirement, not a nice-to-have."),
        ],
      ],
      examples: [
        {
          title: "Anthropic on AWS Trainium — strategic chip partnership",
          body: "AWS and Anthropic's collaboration includes Trainium/Inferentia optimisation for Claude inference economics. PM lesson: large API vendors negotiate chip-level deals; startups inherit optimisations when they buy managed APIs.",
        },
        {
          title: "Inferentia migration — 40% cost cut, 6-week port",
          body: "A AWS-native NLP API team ported BERT-class models to Inferentia over six weeks. Inference cost dropped 40% at same latency. PM approved eng time because break-even was 4 months at current volume. LLM porting is harder — eval carefully.",
        },
        {
          title: "iOS on-device — Neural Engine for live transcription",
          body: "Apple's live captions run speech models on Neural Engine — sub-100ms, no server round trip. PM pattern: edge accelerator when latency + privacy dominate; cloud GPU when model capability dominates.",
        },
      ],
    }),
    buildSection({
      number: "2.7",
      title: "GPU sharing and multi-tenancy",
      subtitle: "Running multiple models on one GPU — the efficiency play and the isolation tradeoffs",
      take: "GPU sharing packs multiple models or tenants onto one physical GPU to improve utilisation. Techniques include multi-model serving (Triton), MIG (hardware partitions on A100/H100), time-slicing, and Kubernetes GPU sharing — each with different isolation and performance guarantees.",
      why: "GPUs are expensive when idle. Sharing raises utilisation from 20% to 70% and can halve effective cost — but noisy-neighbour latency spikes are a product problem if isolation is weak.",
      paragraphs: [
        [
          s("Low utilisation is the norm without sharing. "),
          x(
            "A single chat model on a dedicated A100 might sit 15% utilised during off-peak — you're paying for 85% idle silicon.",
            "Consolidating embedding + rerank + small LLM on one GPU, or serving multiple tenants on shared infra, spreads fixed cost.",
          ),
          s(" PMs push for utilisation metrics on GPU dashboards — idle GPU is margin leakage."),
        ],
        [
          s("Isolation levels vary from soft to hard. "),
          x(
            "Time-slicing: simplest, weakest isolation — one heavy job stalls others. MIG: hardware partitions with guaranteed memory and bandwidth slices on A100/H100. Multi-model serving: software-level sharing with dynamic memory.",
            "Regulated workloads (healthcare, finance) may require dedicated GPUs per tenant — sharing is a cost lever, not a compliance default.",
          ),
          s(" PMs document tenant isolation requirements before approving shared GPU pools."),
        ],
        [
          s("Noisy neighbour is a latency SLA risk. "),
          x(
            "Tenant A's batch job saturates GPU memory; Tenant B's chat requests queue. Mitigations: per-tenant quotas, priority queues, separate pools for batch vs online, and latency SLO monitoring per tenant.",
            "Enterprise contracts sometimes mandate dedicated hardware — price it accordingly.",
          ),
          s(" Sharing saves money until it costs you an enterprise renewal — monitor per-tenant p95."),
        ],
      ],
      examples: [
        {
          title: "MIG on A100 — guaranteed slices for multi-tenant SaaS",
          body: "A B2B AI platform partitioned A100s into 7 MIG instances for 7 enterprise tenants — hardware-isolated VRAM, predictable latency. PM priced dedicated MIG slice as premium tier; shared pool as standard. Hardware isolation became a SKU.",
        },
        {
          title: "Triton multi-model — embedding + LLM on one node",
          body: "A RAG product served embedding model and 7B LLM from one Triton server on L4. Utilisation went from 25% (LLM only) to 68% (both). Cost per query dropped 35%. PM tracked quality metrics — no regression because models shared VRAM headroom.",
        },
        {
          title: "Noisy neighbour churn — one batch job cost an account",
          body: "A shared GPU pool ran nightly batch summarisation alongside live chat. Batch spiked VRAM; chat p99 latency hit 12s for 45 minutes. Enterprise client churned. Fix: separate pools for batch and online. PM rule: never share batch and interactive on same GPU without hard quotas.",
        },
      ],
    }),
    buildSection({
      number: "2.8",
      title: "Cloud GPU economics",
      subtitle: "On-demand vs reserved vs spot instances — the cost structure every AI PM needs to understand",
      take: "Cloud GPUs bill hourly: on-demand is flexible and expensive; reserved (1–3 year commit) cuts 30–60%; spot/preemptible offers 60–90% discounts with interruption risk. Inference workloads split across modes — online on reserved, batch on spot.",
      why: "GPU line items surprise boards when PMs only model on-demand pricing. Reserved and spot strategies are product margin decisions, not finance footnotes.",
      paragraphs: [
        [
          s("On-demand is the default — and the most expensive. "),
          x(
            "Pay per hour, no commit, spin up/down freely. g5.xlarge on-demand ~$1/hr; p4d A100 ~$32/hr. Fine for unpredictable traffic and pilots.",
            "At steady state 24/7 load, on-demand burns cash vs reserved. Many startups run on-demand too long after product-market fit.",
          ),
          s(" Graduate to reserved when baseline load is stable for 3+ months."),
        ],
        [
          s("Reserved instances trade flexibility for discount. "),
          x(
            "1-year or 3-year commit to a region/instance type. AWS Reserved, GCP Committed Use, Azure Reservations — 30–60% savings typical.",
            "Risk: wrong instance type locked in; GPU generation obsolescence over 3 years. PMs commit to baseline capacity, keep burst on on-demand.",
          ),
          s(" Model: 70% reserved (baseline) + 30% on-demand (burst) is a common mature pattern."),
        ],
        [
          s("Spot instances power batch and fault-tolerant workloads. "),
          x(
            "Cloud reclaim spot capacity with 2-minute notice. 60–90% cheaper. Perfect for offline embedding jobs, eval runs, and training — not for user-facing online without checkpoint/resume.",
            "Hybrid: online serving on reserved GPUs; nightly batch on spot with job queue retry. PMs allocate batch budget to spot savings explicitly.",
          ),
          s(" Spot interruption is a feature for batch, a bug for chat — route workloads accordingly."),
        ],
      ],
      examples: [
        {
          title: "Reserved GPU commit at Series B",
          body: "A copilot startup at 2M queries/month committed to 1-year reserved L4 capacity after traffic plateaued. Saved $11K/month vs on-demand. PM presented break-even at month 1 of commit; CFO approved. Without reserved modelling, they'd have missed margin improvement.",
        },
        {
          title: "Spot for nightly embedding — 80% cost cut",
          body: "A search product re-embedded 500K docs nightly on spot instances with checkpointing. Interruptions added 20% wall-clock time but cut compute cost 80%. PM accepted longer batch window because users never waited on it.",
        },
        {
          title: "Wrong reserved SKU — locked into A100 for 7B model",
          body: "A team reserved p4d (A100) before L4 existed for their workload. Overpaid 18 months until commit expired. PM lesson: reserve baseline on right-sized SKU; shorter commit terms when hardware generation is moving fast.",
        },
      ],
    }),
    buildSection({
      number: "2.9",
      title: "PM decision lens",
      subtitle: "GPU spend as a product cost line — how to model hardware cost per query and when to renegotiate your cloud commitment",
      take: "GPU cost per query = (GPU hourly rate × hours) ÷ queries processed in that period. PMs who own this formula make informed build-vs-buy, tiering, and pricing decisions. Renegotiate cloud commitments when query mix, model size, or utilisation shifts materially.",
      why: "GPU spend without per-query attribution is a black hole. Finance asks 'why did infra 3×?' — PMs with unit economics answer with data, not shrugs.",
      paragraphs: [
        [
          s("Build the cost-per-query model before you self-host. "),
          x(
            "Inputs: GPU SKU hourly rate, average utilisation, throughput (tokens/sec or requests/sec at that utilisation), average tokens per request. Output: $/1K queries and $/1M tokens.",
            "Compare to managed API pricing at your volume. Include eng ops cost (on-call, MLOps) as loaded $/month amortised per query.",
          ),
          s(" Update monthly — model swaps and quantisation change the math overnight."),
        ],
        [
          s("Set GPU budget guardrails tied to product metrics. "),
          x(
            "Alerts: GPU spend per DAU, cost per successful task completion, margin per AI feature. If cost per completion exceeds willingness-to-pay, trigger optimisation sprint (quantise, route, cache) or pricing change.",
            "Finance partnership: GPU is COGS for AI-native products, not pure R&D.",
          ),
          s(" PMs who treat GPU as COGS optimise differently than those who treat it as eng overhead."),
        ],
        [
          s("Renegotiate commitments on a quarterly cadence. "),
          x(
            "Traffic grew 5×? You need more reserved capacity or you're bleeding on on-demand burst. Traffic shrank post-launch? You're paying for idle reserved. Model shrank from 70B to 7B? You might downsize SKU.",
            "Cloud vendor account reviews are PM opportunities — bring utilisation dashboards and forecast.",
          ),
          s(" The worst outcome is auto-renewing a 3-year commit sized for launch-week hype."),
        ],
      ],
      examples: [
        {
          title: "Unit economics slide for board — $0.003 per query",
          body: "An AI PM presented: 4.2M queries/month, $14K GPU spend, $0.0033 per query, 72% gross margin on AI tier at $12/seat. Board approved scale spend. Without per-query attribution, the same $14K looked like undifferentiated infra bloat.",
        },
        {
          title: "API vs self-host break-even at 800K queries/month",
          body: "Spreadsheet showed managed API cheaper below 800K queries/month; self-host L4 cheaper above, assuming 65% GPU utilisation. Team stayed on API through 600K, migrated at 900K. PM re-ran model quarterly — API price cuts shifted break-even twice.",
        },
        {
          title: "GPU budget owner — PM + FinOps pairing",
          body: "A mature team assigned PM ownership of 'AI infra COGS target' and FinOps ownership of 'commitment optimisation.' Weekly 15-minute review of utilisation and spend anomalies. Incidents of surprise bills dropped 90%. Structure beats heroics.",
        },
      ],
    }),
  ],
  quiz: [
    {
      q: "Why do GPUs outperform CPUs for LLM inference at production concurrency?",
      options: [
        "CPUs have more cores than GPUs.",
        "LLM inference is dominated by parallel matrix operations that map to thousands of GPU cores.",
        "GPUs have larger L3 caches for transformer weights.",
        "CPUs cannot run neural networks at all.",
      ],
      correct: 1,
      correctFeedback:
        "Right. Transformers are matmul-heavy and parallelise across GPU cores. CPUs win single-thread latency; GPUs win throughput under concurrent load.",
      wrongFeedback:
        "The architectural mismatch is parallel linear algebra vs sequential logic. Re-read sections 2.1 and 2.2.",
    },
    {
      q: "A 70B FP16 model needs ~140GB for weights alone. Single A100 80GB cannot run it without:",
      options: [
        "More CPU RAM only.",
        "Quantisation, tensor parallelism across multiple GPUs, or a smaller model.",
        "Faster network bandwidth.",
        "Switching from Linux to Windows.",
      ],
      correct: 1,
      correctFeedback:
        "Exactly. VRAM is the binding constraint for GPU inference. Weights must fit in VRAM (possibly split across GPUs or compressed via quantisation).",
      wrongFeedback:
        "System RAM doesn't substitute for VRAM in GPU inference. Re-read section 2.3.",
    },
    {
      kind: "categorize",
      q: "Sort each workload to the most appropriate default hardware.",
      categories: ["GPU (datacenter)", "CPU sufficient"],
      items: [
        { text: "User-facing 13B LLM chat at 200 concurrent sessions.", category: 0 },
        { text: "Nightly XGBoost churn scoring on tabular data.", category: 1 },
        { text: "7B quantised internal tool with 5 users.", category: 1 },
        { text: "Real-time embedding API at 5K req/s.", category: 0 },
        { text: "Developer-local code completion on laptop (3B model).", category: 1 },
        { text: "70B enterprise copilot with sub-3s TTFT SLA.", category: 0 },
      ],
      correctFeedback:
        "Right. Match hardware to model size, concurrency, and latency class — not every workload needs a datacenter GPU.",
      wrongFeedback:
        "Ask: concurrency, model size, and latency SLA. Re-read sections 2.4 and 2.5.",
    },
    {
      q: "Which cloud pricing model is best suited for nightly batch embedding jobs that can tolerate interruption?",
      options: [
        "3-year reserved instances with no burst capacity.",
        "Spot/preemptible instances with checkpointing and retry.",
        "On-demand only — spot is never appropriate for AI.",
        "Dedicated bare-metal with no sharing.",
      ],
      correct: 1,
      correctFeedback:
        "Right. Spot offers 60–90% savings for fault-tolerant batch work. Online chat should not run on spot without careful fallback.",
      wrongFeedback:
        "Batch jobs that can resume are ideal spot candidates. Re-read section 2.8.",
    },
    {
      kind: "order",
      q: "Order the steps to calculate GPU cost per query for a self-hosted model.",
      prompt: "Drag to arrange first step (top) to last (bottom).",
      items: [
        "Measure throughput: queries processed per hour at production load.",
        "Determine GPU hourly rate for your instance SKU.",
        "Divide hourly cost by queries per hour to get cost per query.",
        "Add amortised ops/engineering cost if comparing to managed API.",
      ],
      correctFeedback:
        "Correct. Unit economics starts with measured throughput on real hardware, not peak theoretical FLOPs.",
      wrongFeedback:
        "Cost per query = hourly GPU cost ÷ actual queries/hour. Re-read section 2.9.",
    },
    {
      q: "Your shared GPU pool runs batch summarisation alongside live chat. Chat p99 latency spikes during batch jobs. Best fix?",
      options: [
        "Remove all GPUs and switch to CPU.",
        "Separate online and batch workloads into different GPU pools with isolation.",
        "Run batch only during user peak hours.",
        "Disable autoscaling.",
      ],
      correct: 1,
      correctFeedback:
        "Right. Noisy-neighbour contention on shared GPUs is a classic multi-tenancy failure. Isolate batch from interactive paths.",
      wrongFeedback:
        "Sharing without isolation trades cost for latency risk on user-facing paths. Re-read section 2.7.",
    },
  ],
});
