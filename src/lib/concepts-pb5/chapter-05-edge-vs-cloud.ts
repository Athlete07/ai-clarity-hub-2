import { buildChapter, buildSection, s, x } from "../concepts-pb4-helpers";

export const chapter05EdgeVsCloud = buildChapter({
  slug: "pb5-edge-vs-cloud",
  number: 5,
  shortTitle: "Edge vs Cloud",
  title: "Edge vs Cloud",
  readingMinutes: 26,
  summary:
    "Where inference runs shapes privacy, latency, cost, and offline behaviour. On-device NPUs, cloud GPU fleets, hybrid routing, and the PM frameworks for choosing — or combining — edge and cloud in production AI products.",
  keyTakeaway:
    "Edge inference keeps data local and cuts round-trip latency; cloud inference brings frontier-scale models and elastic capacity. Most mature products route by sensitivity, connectivity, and task complexity — not a single global choice.",
  pmCallout:
    "As a PM: 'edge vs cloud' is not an architecture religion. It's a routing policy — which queries stay on device, which escalate to cloud, and what happens when the network drops.",
  sections: [
    buildSection({
      number: "5.1",
      title: "Edge vs cloud inference",
      subtitle: "Two deployment surfaces with different physics",
      take: "Cloud inference runs models on remote GPU clusters accessed over the network; edge inference runs compressed models on the user's device or on-prem hardware. The tradeoff is capability and elasticity vs privacy, latency, and offline availability.",
      why: "Deployment location is a product promise — 'your data never leaves your device' vs 'always the latest model.' PMs who conflate them ship RFPs you can't win and SLAs you can't keep.",
      paragraphs: [
        [
          s("Cloud inference is the default for frontier LLMs. "),
          x(
            "Datacenter GPUs (A100, H100, L40S) run 70B+ models with batching, autoscaling, and weekly model updates. You pay per token or per GPU-hour; latency includes network RTT.",
            "Typical p95 end-to-end: 800ms–3s depending on model size, region, and prompt length. Strength: best quality, no device constraints, centralised observability.",
          ),
          s(" Weakness: data egress, connectivity dependency, recurring COGS that scales with usage."),
        ],
        [
          s("Edge inference runs where the user is. "),
          x(
            "Phone NPU, laptop GPU (Metal/CUDA), factory gateway, or customer VPC appliance. Models are small (1B–8B) and quantised (INT4/INT8). Updates ship via app releases or OTA bundles.",
            "Latency can be 50–300ms for short tasks — no network hop. Strength: privacy, offline, predictable marginal cost per user.",
          ),
          s(" Weakness: model staleness, device fragmentation, limited context and capability."),
        ],
        [
          s("The PM frame: deployment is a routing problem. "),
          x(
            "Apple Intelligence, Copilot, and Notion AI all hybridise: sensitive or fast paths on-device; heavy reasoning in cloud. Users rarely see the split — they see one product.",
            "Your PRD should specify routing rules: PII on-device, summarisation >4K tokens to cloud, offline queue for sync later.",
          ),
          s(" Binary 'we're edge' or 'we're cloud' pitches break on real enterprise requirements."),
        ],
      ],
      examples: [
        {
          title: "ChatGPT mobile — cloud-first with on-device optimisations",
          body: "OpenAI's mobile apps are predominantly cloud inference with UI optimisations (streaming, caching). PM lesson: even cloud-first products add on-device pieces (voice activity detection, small classifiers) at the edge of the stack.",
        },
        {
          title: "Samsung Galaxy AI — hybrid on-device + cloud",
          body: "Translation and transcription run on-device for speed and privacy; complex generative tasks hit cloud. PMs pitching mobile AI should map features to this matrix before promising 'fully private AI.'",
        },
        {
          title: "Factory vision QC — edge-only mandate",
          body: "A manufacturer required defect detection at <100ms on the line with no outbound network. Cloud was non-starter. PM scoped a 500M-parameter vision model on Jetson edge — different product shape than a SaaS copilot.",
        },
      ],
    }),
    buildSection({
      number: "5.2",
      title: "On-device AI use cases",
      subtitle: "When local inference is a feature, not a compromise",
      take: "On-device AI wins when privacy regulation, offline requirements, ultra-low latency, or zero marginal cloud cost per query are primary — transcription, keyboard suggestions, photo enhancement, local search, and sensitive drafting.",
      why: "Sales teams promise 'on-device AI' because it sounds safe. PMs must know which features actually ship locally vs which need cloud — or deals close on fiction.",
      paragraphs: [
        [
          s("Privacy-sensitive workflows default to on-device. "),
          x(
            "Health notes, legal drafts, children's data, credentials in screenshots — users and regulators increasingly expect these never hit a third-party API.",
            "GDPR, HIPAA, and enterprise DPAs often classify cloud LLM inference as subprocessor data transfer — triggering legal review.",
          ),
          s(" On-device isn't paranoia; it's procurement acceleration in regulated verticals."),
        ],
        [
          s("Offline and intermittent connectivity are edge forcing functions. "),
          x(
            "Field technicians, pilots, ships, rural clinics — 'assume connectivity' fails. Edge models with sync-when-online patterns are product requirements, not edge cases.",
            "Queue user actions locally, run inference offline, merge results when back online — PM specs the conflict resolution UX.",
          ),
          s(" Cloud-only copilots lose entire verticals (construction, defence, maritime) to offline-capable competitors."),
        ],
        [
          s("Micro-interactions need edge speed. "),
          x(
            "Autocomplete, camera filters, wake-word detection — anything in the 16–100ms perceived latency band can't tolerate 200ms+ RTT to Virginia.",
            "These features use tiny models (10M–1B params) optimised for NPUs. PMs shouldn't force GPT-class models into keystroke paths.",
          ),
          s(" Match model class to interaction tempo — edge for reflexes, cloud for deliberation."),
        ],
      ],
      examples: [
        {
          title: "Apple Photos — on-device face and object recognition",
          body: "Years of on-device ML built user trust for 'photos never leave device for indexing.' PMs adding AI to consumer apps inherit that expectation bar — cloud processing requires explicit consent UX.",
        },
        {
          title: "Copilot+ PCs — NPU as a platform bet",
          body: "Microsoft markets 40+ TOPS NPUs for local inference (Recall, Studio Effects). PMs on Windows must test on NPU, GPU, and CPU fallback tiers — fragmentation is the hidden cost of edge.",
        },
        {
          title: "Medical scribe offline mode",
          body: "A clinic scribe app shipped on-device Whisper-small for exam rooms with poor Wi-Fi; cloud large model for overnight batch polish. PM priced tiers: offline basic included, cloud enhancement premium.",
        },
      ],
    }),
    buildSection({
      number: "5.3",
      title: "Cloud inference architectures",
      subtitle: "How datacenter serving scales — and what PMs pay for",
      take: "Cloud inference stacks combine model servers (vLLM, TGI, TensorRT-LLM), load balancers, GPU autoscaling, regional deployment, and API gateways. PMs care about throughput, p95 latency, multi-tenant isolation, and cost per million tokens.",
      why: "When eng proposes 'we'll self-host,' PMs need enough vocabulary to ask about batching, cold start, and regional failover — or accept surprise outages and bills.",
      paragraphs: [
        [
          s("Managed APIs vs self-hosted GPU fleets. "),
          x(
            "Managed (OpenAI, Anthropic, Bedrock): zero ops, premium per-token pricing, fast model updates. Self-hosted (vLLM on K8s): lower unit cost at scale, full data control, you own uptime.",
            "Break-even often 5–20M tokens/month depending on model size and team cost — PM runs the spreadsheet with real usage forecasts.",
          ),
          s(" Hybrid: managed for burst and frontier; self-hosted for high-volume stable workloads."),
        ],
        [
          s("Continuous batching and KV cache dominate cloud economics. "),
          x(
            "vLLM-style serving batches concurrent requests sharing GPU memory for KV cache — throughput 3–10× vs naive one-request-per-GPU. PM-visible effect: cost per query drops as usage grows (economies of scale).",
            "Cold start: scaling GPU nodes from zero takes minutes — autoscaling policy affects p99 latency during traffic spikes.",
          ),
          s(" Ask eng for cost curve vs QPS, not single-point latency demos."),
        ],
        [
          s("Multi-region and tenancy shape enterprise deals. "),
          x(
            "EU customers want inference in eu-west; healthcare wants dedicated tenancy; finance wants no noisy-neighbour batching with other customers.",
            "Cloud architecture options: shared pool, dedicated GPU, VPC peering, customer-managed keys. Each tier is a SKU PM can price.",
          ),
          s(" 'We use cloud' is insufficient for enterprise security questionnaires — specify region, isolation, and data retention."),
        ],
      ],
      examples: [
        {
          title: "Perplexity-style search — cloud GPU at scale",
          body: "Heavy retrieval + LLM rerank + generation runs entirely cloud-side — edge isn't viable for web-scale RAG. PM accepts cloud COGS as core COGS, optimises via caching and smaller models for simple queries.",
        },
        {
          title: "Series B fintech — migrated API to self-hosted vLLM",
          body: "At 40M tokens/month, OpenAI bill exceeded $120K. Self-hosted Llama on 8×L40S cut inference 60% after ML ops hire. PM funded platform team when unit economics crossed break-even — timing mattered.",
        },
        {
          title: "Cold start outage during product launch",
          body: "Viral launch hit marketing site; GPU autoscaler lagged 8 minutes; users saw timeouts. PM added pre-warmed minimum instances and graceful degradation message — infra requirement became UX requirement.",
        },
      ],
    }),
    buildSection({
      number: "5.4",
      title: "Network and offline constraints",
      subtitle: "Bandwidth, jitter, and what happens when the pipe breaks",
      take: "Network quality determines whether cloud inference feels instant or broken. PMs spec degraded modes: smaller local model, cached responses, queue-and-retry, and honest offline messaging — not infinite spinners.",
      why: "Products tested on office Wi-Fi fail for mobile users on LTE in elevators. Offline behaviour is a retention feature in field-heavy verticals.",
      paragraphs: [
        [
          s("RTT and payload size dominate mobile cloud UX. "),
          x(
            "Each LLM call sends KB–MB of prompt context. On 200ms RTT + 1s generation, users wait 1.2s minimum. Streaming masks time-to-first-token but not total completion on slow networks.",
            "Compression (gzip), prompt minimisation, and edge caching of embeddings reduce bytes on wire — PM requirements, not optional optimisations.",
          ),
          s(" Set mobile-specific latency budgets separate from datacenter-internal benchmarks."),
        ],
        [
          s("Offline modes need explicit product design. "),
          x(
            "Tier 1: full offline with local model. Tier 2: read-only cached answers. Tier 3: queue requests, process on reconnect. Tier 4: block with clear message.",
            "Users forgive 'unavailable offline' less than 'wrong offline' — bad local answers erode trust faster than honest limits.",
          ),
          s(" PM writes offline acceptance criteria in the same doc as online SLAs."),
        ],
        [
          s("Sync conflicts when edge and cloud diverge. "),
          x(
            "User edits draft offline; cloud model updated overnight; merge on reconnect can overwrite user work. CRDT-style text merge or version vectors are hard — PM chooses simple rules: 'offline edits win' or 'show diff on sync.'",
            "Hybrid products without sync policy ship painful support tickets within weeks.",
          ),
          s(" Edge isn't only inference — it's state management across connectivity."),
        ],
      ],
      examples: [
        {
          title: "Notion offline — cached content, cloud AI blocked",
          body: "Notion allows offline doc editing but defers AI features until online. PM pattern: separate content availability from AI availability — honest gating beats hallucinated offline answers.",
        },
        {
          title: "Airline pilot EFB app — fully offline manuals + local search",
          body: "Aviation apps can't depend on cabin connectivity. Local embeddings over manuals + small on-device QA model. Cloud sync only on ground Wi-Fi. PM sold 'works at 35,000 feet' as primary value prop.",
        },
        {
          title: "Streaming stall UX — partial response saved",
          body: "Mobile copilot lost connection mid-stream. PM spec: save partial answer, offer retry button, don't discard tokens user already read. Small UX detail; large trust impact on flaky networks.",
        },
      ],
    }),
    buildSection({
      number: "5.5",
      title: "Hybrid edge-cloud patterns",
      subtitle: "Routing, escalation, and the best-of-both-worlds stack",
      take: "Hybrid architectures run a small edge model for fast/private paths and escalate hard queries to cloud frontier models — with a router (rules, classifier, or confidence threshold) deciding which path each request takes.",
      why: "Pure edge caps quality; pure cloud caps privacy and offline. Hybrid is how most 2026 consumer and enterprise AI products actually ship — PMs own the routing policy.",
      paragraphs: [
        [
          s("Router patterns PMs should know. "),
          x(
            "Rule-based: PII detected → edge; token count >4K → cloud; user tier Pro → cloud. Classifier-based: small model predicts task difficulty. Confidence-based: edge answers if logprob high, else escalate.",
            "Routers need eval too — mis-routing sends hard queries to weak models (bad) or easy queries to expensive cloud (margin leak).",
          ),
          s(" Start rule-based; add ML routing when traffic justifies tuning."),
        ],
        [
          s("Cascade and speculative patterns. "),
          x(
            "Cascade: edge drafts answer, cloud verifies/refines if needed. Speculative: edge generates fast, cloud parallel-checks — swap if disagreement.",
            "Latency can beat cloud-only when edge is right 80% of time. PM tracks escalation rate as a KPI — too high means edge model is too weak.",
          ),
          s(" Hybrid isn't static — tune escalation threshold per release."),
        ],
        [
          s("Cost accounting across tiers. "),
          x(
            "Attribute cloud cost only to escalated fraction. If 70% stay on edge, cloud bill drops proportionally — but edge has fixed NPU optimisation cost amortised per device.",
            "PM unit economics: edge = upfront eng + per-device inference free; cloud = variable per token. Break-even depends on escalation rate and device volume.",
          ),
          s(" Model hybrid routing in pricing: free tier edge-heavy, paid tier cloud-heavy."),
        ],
      ],
      examples: [
        {
          title: "Grammarly — on-device suggestions + cloud rewrite",
          body: "Lightweight on-device checks for latency; deep rewrites hit cloud. PM analogue: classify features by latency budget and route accordingly in your PRD.",
        },
        {
          title: "Enterprise copilot router — regex + embedding gate",
          body: "Internal copilot routed HR/PII keywords to on-prem 7B; general code questions to GPT-4 cloud. Escalation rate 18% after tuning. PM defined keyword list with legal; eng built embedding fallback.",
        },
        {
          title: "Confidence threshold tuning — support ticket deflection",
          body: "Edge model answered FAQs at 0.85+ confidence; below threshold escalated to cloud with user-visible 'getting a deeper answer…' PM A/B tested threshold: 0.80 vs 0.90 traded deflection vs quality.",
        },
      ],
    }),
    buildSection({
      number: "5.6",
      title: "Privacy and data residency",
      subtitle: "Where bytes go — and what contracts require",
      take: "Edge inference keeps raw user content on device or customer VPC; cloud inference sends prompts to vendor infrastructure subject to subprocessors, retention policies, and cross-border transfer rules. Deployment choice is a compliance decision.",
      why: "Legal reviews stall deals when PMs can't answer 'does data leave the EU?' or 'is prompt data used for training?' Edge vs cloud answers those questions structurally.",
      paragraphs: [
        [
          s("Data residency maps to deployment region and architecture. "),
          x(
            "Cloud: pick region (eu-west-1), negotiate zero-retention API terms, enable customer-managed keys. Edge: data never leaves device — strongest residency story, weaker model.",
            "On-prem appliance (edge in customer DC) splits difference: your model, their metal, air-gapped option.",
          ),
          s(" PM maintains a residency matrix per feature: which paths cross which borders."),
        ],
        [
          s("Subprocessor and training-data clauses in vendor contracts. "),
          x(
            "OpenAI/Anthropic enterprise tiers offer no-training and retention windows. Self-hosted eliminates vendor subprocessor for inference — but you still might call external APIs for tools.",
            "Edge doesn't eliminate compliance if app phones home for analytics or crash logs with prompt snippets.",
          ),
          s(" Privacy policy must match architecture — legal reads the diagram."),
        ],
        [
          s("PII detection as routing input. "),
          x(
            "Run lightweight NER/classifier on-device before any cloud call; redact or block. Microsoft Presidio, on-device Core ML models — pattern is standard in regulated copilots.",
            "PM defines what counts as PII for your domain (account numbers, patient IDs) and required handling per class.",
          ),
          s(" 'We use encryption in transit' doesn't satisfy bank security — they want data locality."),
        ],
      ],
      examples: [
        {
          title: "EU hospital RFP — on-prem only",
          body: "Hospital required PHI never leave hospital network. PM shipped appliance with quantised Llama + local vector DB. Cloud API vendors eliminated. Deal size justified custom edge packaging.",
        },
        {
          title: "Zero-retention API tier — cloud with legal guardrails",
          body: "Law firm accepted cloud GPT-4 with 30-day zero-retention enterprise agreement and no training opt-out documented. Cheaper than on-prem; legal comfort from contract not architecture.",
        },
        {
          title: "Accidental telemetry leak",
          body: "Edge app logged full prompts to Sentry on crash. Security audit flagged GDPR violation. PM added scrubbing pipeline — edge inference doesn't matter if observability exfiltrates data.",
        },
      ],
    }),
    buildSection({
      number: "5.7",
      title: "Latency and cost tradeoffs",
      subtitle: "The triangle PMs balance on every feature",
      take: "Edge optimises marginal latency and variable cloud cost; cloud optimises peak capability and ops simplicity. Hybrid optimises both at the price of routing complexity. PMs put all three on one chart with real p95 and $/1K queries.",
      why: "Execs ask for 'fast, cheap, and best quality.' PMs who quantify the triangle set realistic roadmaps instead of promising all three globally.",
      paragraphs: [
        [
          s("Latency budgets by surface. "),
          x(
            "Inline UI (autocomplete): <100ms → edge only. Chat assistant: 1–3s acceptable → cloud OK. Batch report: minutes → cheapest cloud batch slot.",
            "Mis-matched surface and deployment cause churn: 2s cloud latency in a keystroke feature feels broken.",
          ),
          s(" Write latency budget per feature in the PRD, not one global SLA."),
        ],
        [
          s("Cost structure differs fundamentally. "),
          x(
            "Cloud: variable OPEX scales with DAU × queries × tokens. Edge: fixed NPU optimisation + larger app binary + QA matrix across devices; near-zero marginal inference cost.",
            "High-volume narrow tasks favour edge or self-hosted cloud; low-volume broad tasks favour managed APIs.",
          ),
          s(" PM forecasts both at 10× current usage before committing to edge R&D."),
        ],
        [
          s("Quality ceiling is the hidden third axis. "),
          x(
            "Edge 3B model won't match cloud 70B on novel reasoning — escalation rate and user disappointment on hard tasks are quality metrics.",
            "Track 'escalation satisfaction' separately from 'edge-only satisfaction' in hybrid products.",
          ),
          s(" Cheaper/faster edge answers that are wrong cost more in support than cloud spend saved."),
        ],
      ],
      examples: [
        {
          title: "Latency tier SKU — Fast (edge) vs Deep (cloud)",
          body: "Research tool priced Fast summaries at edge ($9/mo) and Deep analysis at cloud ($29/mo). PM made tradeoff explicit; conversion improved vs hidden quality variance.",
        },
        {
          title: "Cloud bill vs edge eng — break-even at 18 months",
          body: "Edge investment $400K eng + $50K/device QA. Cloud variable $25K/mo and growing. Break-even month 18 at current growth. PM presented both curves to board — chose hybrid now, full edge at 2M MAU.",
        },
        {
          title: "p95 regression from cloud region move",
          body: "Eng migrated inference to cheaper US region; EU users saw +400ms RTT. PM blocked cutover until eu-west warm standby — cost savings don't justify EU churn.",
        },
      ],
    }),
    buildSection({
      number: "5.8",
      title: "Hardware landscape",
      subtitle: "NPUs, mobile GPUs, and edge appliances PMs encounter",
      take: "Edge AI hardware spans phone NPUs (Apple Neural Engine, Qualcomm Hexagon), PC NPUs (Intel NPU, AMD XDNA), discrete GPUs in laptops, and industrial edge boxes (NVIDIA Jetson). Each has different TOPS, memory, and software stacks.",
      why: "PMs approve edge roadmaps without knowing Jetson ≠ iPhone NPU. Hardware literacy prevents quarter-long ports that target the wrong silicon.",
      paragraphs: [
        [
          s("Mobile NPUs — billions of devices, tight memory. "),
          x(
            "Apple Neural Engine, Qualcomm Hexagon, Google TPU in Pixel — typically 2–38 TOPS INT8, <8 GB shared memory. Models must be tiny, quantised, Core ML / NNAPI / QNN converted.",
            "PM implication: support iOS + Android means two conversion pipelines and device QA matrices.",
          ),
          s(" Consumer mobile edge is high reach, high fragmentation cost."),
        ],
        [
          s("PC NPUs — the Copilot+ wave. "),
          x(
            "Windows Copilot+ PCs target 40+ TOPS NPU for local inference alongside CPU/GPU. ONNX Runtime, DirectML, Windows ML — still maturing vs CUDA ecosystem.",
            "Enterprise laptop refresh cycles may standardise NPU — PM bets on 2–3 year horizon for B2B edge features.",
          ),
          s(" Ask: minimum hardware spec for your edge feature — exclude older laptops explicitly."),
        ],
        [
          s("Industrial edge — Jetson, Intel ARC, on-prem appliances. "),
          x(
            "Jetson Orin: 20–275 TOPS, used in robotics, vision, field gateways. More memory and CUDA familiarity than phones. On-prem LLM appliances (NVIDIA NIM, bespoke) sell to regulated enterprises.",
            "PM sells appliance as 'turnkey edge' — higher ASP, longer sales cycle, lower device fragmentation.",
          ),
          s(" Pick hardware tier matching customer environment, not engineer preference."),
        ],
      ],
      examples: [
        {
          title: "Core ML conversion sprint — iOS ship blocker",
          body: "Team trained PyTorch model; App Store ship required Core ML. Six-week conversion and quantisation sprint. PM now schedules 'deployment format' task in edge epics from day one.",
        },
        {
          title: "Jetson factory deploy — CUDA skills transfer",
          body: "Vision team already on CUDA ported LLM summarisation to Jetson Orin for line-side reports. Same NVIDIA stack reduced learning curve vs mobile NNAPI.",
        },
        {
          title: "Minimum spec backlash — 'Copilot+ only'",
          body: "PM labelled advanced local AI 'requires Copilot+ PC or Apple M-series' after support tickets from Intel i5 users. Painful but honest — reduced 1-star reviews from impossible expectations.",
        },
      ],
    }),
    buildSection({
      number: "5.9",
      title: "PM decision lens",
      subtitle: "A framework for edge, cloud, or hybrid — per feature",
      take: "For each AI feature, score: privacy/regulatory sensitivity, offline need, latency budget, quality bar, query volume, and device target. High sensitivity + tight latency + offline → edge. Frontier quality + elastic scale → cloud. Most features → hybrid with explicit routing rules.",
      why: "One-page scoring beats architecture debates in month three. PMs bring the framework; engineering validates feasibility.",
      paragraphs: [
        [
          s("The six-question feature matrix. "),
          x(
            "1) Must data leave device? 2) Offline required? 3) p95 latency budget? 4) Minimum model capability? 5) Monthly query volume forecast? 6) Target devices?",
            "Score each feature independently — your app might be edge for dictation, cloud for research.",
          ),
          s(" Document answers in AI PRD appendix — reviewers sign once."),
        ],
        [
          s("Phased rollout pattern. "),
          x(
            "V1 cloud-only to validate quality and PMF. V1.5 hybrid router for cost/privacy wins on proven high-volume intents. V2 edge packaging for enterprise RFPs.",
            "Skipping V1 and building edge first delays learning and burns edge-specific eng.",
          ),
          s(" Edge is an optimisation and distribution channel — rarely the fastest path to product-market fit."),
        ],
        [
          s("Vendor and build checklist for enterprise sales. "),
          x(
            "Include: deployment diagram, data flow, regions, retention, subprocessors, offline behaviour, minimum hardware, escalation policy, observability without prompt exfiltration.",
            "Sales engineers close faster when PM maintains living 'deployment modes' doc synced to actual shipping config.",
          ),
          s(" Architecture diagrams are sales collateral — keep them current."),
        ],
      ],
      examples: [
        {
          title: "Feature matrix killed 'all on-device' roadmap",
          body: "PM scored 12 features: 4 edge, 6 hybrid, 2 cloud-only. Board wanted full edge for marketing. Data showed only 4 met latency+privacy bar locally. Hybrid roadmap approved with honest positioning.",
        },
        {
          title: "RFP win on deployment flexibility",
          body: "Bank chose vendor offering cloud SaaS, VPC deploy, and air-gapped appliance — same product, three packaging modes. PM owned packaging matrix; eng owned config templates.",
        },
        {
          title: "Quarterly routing review",
          body: "Escalation rate crept from 22% to 41% as users asked harder questions. PM triggered edge model refresh + threshold retune. Hybrid products need ongoing routing ops, not ship-once.",
        },
      ],
    }),
  ],
  quiz: [
    {
      q: "A hospital requires PHI to never leave their network. What's the strongest architectural response?",
      options: [
        "Use a public cloud LLM API with HTTPS encryption.",
        "On-prem or appliance-based edge inference with local model weights.",
        "Cache cloud responses locally so fewer calls are needed.",
        "Ask users not to enter PHI.",
      ],
      correct: 1,
      correctFeedback:
        "Right. Encryption in transit doesn't satisfy data residency — PHI must not reach vendor infrastructure. On-prem/appliance edge keeps data inside the hospital network.",
      wrongFeedback:
        "Cloud APIs with encryption still transfer data to subprocessors. Re-read sections 5.2 and 5.6.",
    },
    {
      q: "What's the primary advantage of hybrid edge-cloud routing?",
      options: [
        "Eliminates the need for any cloud spending.",
        "Combines edge privacy/latency for simple paths with cloud capability for hard queries.",
        "Guarantees frontier model quality on every request.",
        "Removes observability requirements.",
      ],
      correct: 1,
      correctFeedback:
        "Exactly. Hybrid routes by sensitivity, difficulty, and latency — edge for fast/private, cloud for capability.",
      wrongFeedback:
        "Hybrid still uses cloud for escalations; it optimises the mix, not eliminates cloud. Re-read section 5.5.",
    },
    {
      q: "Your autocomplete feature targets <80ms latency on mobile. Which deployment fits best?",
      options: [
        "Cloud GPT-4 with streaming.",
        "Small quantised on-device model on the phone NPU.",
        "Batch cloud inference every 5 seconds.",
        "User-initiated manual refresh from server.",
      ],
      correct: 1,
      correctFeedback:
        "Right. Sub-100ms interactions can't absorb network RTT — tiny edge models on NPUs are designed for this tempo.",
      wrongFeedback:
        "Cloud round-trips dominate mobile latency budgets for keystroke features. Re-read sections 5.2 and 5.7.",
    },
    {
      kind: "categorize",
      q: "Sort each requirement to the best primary deployment bias.",
      categories: ["Edge-first", "Cloud-first", "Hybrid routing"],
      items: [
        { text: "Offline field manual search on a oil rig with no connectivity.", category: 0 },
        { text: "Multi-hop research over web-scale RAG with 70B model.", category: 1 },
        { text: "Consumer app: private on-device dictation + cloud deep rewrite.", category: 2 },
        { text: "Ultra-low-latency camera filter on iPhone.", category: 0 },
        { text: "Startup validating PMF with weekly model updates and low volume.", category: 1 },
        { text: "Enterprise copilot with PII rules and general knowledge questions.", category: 2 },
      ],
      correctFeedback:
        "Right. Offline/ultra-low latency → edge; frontier scale and fast iteration → cloud; mixed sensitivity and capability → hybrid.",
      wrongFeedback:
        "Score privacy, offline, latency, and quality per feature. Re-read section 5.9.",
    },
    {
      q: "Self-hosted cloud inference becomes economically attractive compared to managed APIs primarily when:",
      options: [
        "You have fewer than 1,000 queries per month.",
        "Query volume is high and stable enough to amortise GPU ops and engineering.",
        "You never need to update the model.",
        "Regulators prohibit all GPU usage.",
      ],
      correct: 1,
      correctFeedback:
        "Right. Self-host break-even depends on token volume vs managed API premium plus ops cost — typically millions of tokens monthly.",
      wrongFeedback:
        "Low volume favours managed APIs. Re-read section 5.3.",
    },
    {
      kind: "order",
      q: "Put the recommended product rollout sequence for deployment strategy.",
      prompt: "Drag to arrange first step (top) to last (bottom).",
      items: [
        "Ship cloud-first to validate quality and product-market fit.",
        "Add hybrid routing for high-volume or privacy-sensitive intents.",
        "Package edge/on-prem modes for enterprise RFP requirements.",
        "Maintain quarterly routing and escalation rate reviews.",
      ],
      correctFeedback:
        "Exactly. Validate with cloud speed, optimise with hybrid economics, expand with edge packaging, operate with ongoing tuning.",
      wrongFeedback:
        "Building full edge before PMF delays learning. Re-read section 5.9.",
    },
  ],
});
