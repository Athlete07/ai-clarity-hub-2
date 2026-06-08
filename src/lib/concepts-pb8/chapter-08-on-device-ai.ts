import { buildChapter, buildSection, s, x } from "../concepts-pb4-helpers";

export const chapter08OnDeviceAi = buildChapter({
  slug: "pb8-on-device-ai",
  number: 8,
  shortTitle: "On-Device AI",
  title: "On-Device AI",
  readingMinutes: 27,
  summary:
    "Bringing models to the hardware — the technical and product shift that moves AI off the cloud and onto the device in your user's pocket",
  keyTakeaway:
    "On-device AI runs inference locally on NPUs and mobile silicon — trading model capability for privacy, offline reliability, and sub-100ms latency. PMs who map features to the hybrid edge-cloud split, plan OTA model updates, and position privacy as product story — not just engineering constraint — unlock differentiated experiences competitors can't copy with API calls alone.",
  pmCallout:
    "As a PM: on-device isn't 'run the cloud model on a phone.' It's accepting a smaller model with a narrower capability ceiling in exchange for data never leaving the device. Ship on-device when privacy, offline, or latency is the primary user value — not when you need frontier reasoning on every query.",
  sections: [
    buildSection({
      number: "8.1",
      title: "What is on-device AI",
      subtitle: "Running inference locally on phones, laptops, and embedded hardware — no server round trip, no data leaving the device",
      take: "On-device AI runs model inference locally on user hardware — smartphones, laptops, wearables, embedded systems — without sending data to cloud servers. Input stays on device, inference runs on local CPU/GPU/NPU, output returns immediately. This eliminates network latency, enables offline operation, and ensures sensitive data never leaves the user's control. The tradeoff: device memory, compute, and battery constrain model size and capability versus cloud frontier models.",
      why: "PMs who understand on-device as a distinct deployment mode — not 'cloud but local' — make correct build vs buy vs hybrid decisions. Misunderstanding the capability ceiling causes products that promise cloud quality on a phone.",
      paragraphs: [
        [
          s("On-device means inference, not training, on hardware. "),
          x(
            "Devices run pre-trained models in compressed formats. Fine-tuning and training still happen in cloud — weights ship to device via updates.",
            "PM scopes on-device for inference workloads only unless building research tooling.",
          ),
          s(" Training on-device is rare and battery-prohibitive for consumer products."),
        ],
        [
          s("Data locality is the defining product property. "),
          x(
            "Audio, images, health data, documents — processed entirely on device. No server log, no third-party data processing agreement needed for that inference path.",
            "Privacy story is genuine — not marketing spin — when architecture guarantees it.",
          ),
          s(" PM validates with security: is data truly local, or phoning home for 'enhancement'?"),
        ],
        [
          s("Capability ceiling is real and permanent per device generation. "),
          x(
            "iPhone 15 NPU runs ~7B parameter quantised models; cloud runs 70B+ frontier models. Gap narrows slowly.",
            "PM documents capability delta in PRD — what on-device can and cannot do.",
          ),
          s(" Users forgive smaller models when latency and privacy deliver clear value."),
        ],
      ],
      examples: [
        {
          title: "Health app — vitals analysis on device",
          body: "Wearable PM shipped heart rhythm analysis entirely on-device. Data never left wrist sensor to phone to cloud. FDA pathway simplified — no cloud PHI processing. On-device was regulatory requirement, not optimisation.",
        },
        {
          title: "Mispositioned feature — user disappointment",
          body: "PM marketed 'full AI assistant on your phone.' On-device model couldn't handle multi-step reasoning users expected from ChatGPT. Reviews: 'dumb AI.' Repositioned as 'private quick answers' with cloud escalation button. Honest capability framing recovered ratings.",
        },
        {
          title: "Document scanning — local OCR and extraction",
          body: "Expense app processed receipt photos on-device — OCR, categorisation, amount extraction. No receipt images uploaded. Enterprise customers in EU chose product specifically for data locality. On-device was procurement differentiator.",
        },
      ],
    }),
    buildSection({
      number: "8.2",
      title: "Why on-device now",
      subtitle: "Apple Neural Engine, Qualcomm NPU, and the dedicated AI silicon that made on-device performance viable for real models",
      take: "Dedicated AI accelerators — Apple Neural Engine, Qualcomm Hexagon NPU, Google Tensor TPU, Intel NPU in Copilot+ PCs — deliver 10–30 TOPS (trillion operations per second) for INT8 inference. This silicon generation makes 1–7B parameter quantised models practical on phones and laptops. Apple's and Qualcomm's push into on-device AI is creating platform expectations: users will expect local AI features, and OS vendors will gate premium experiences on NPU presence.",
      why: "PMs who track silicon generations understand which device cohorts support their feature and when capability jumps justify new model deployments. Building for 2022 phones vs 2025 phones is a different product.",
      paragraphs: [
        [
          s("NPUs are purpose-built for matrix multiplication. "),
          x(
            "Unlike general CPUs, NPUs parallelise inference ops efficiently — lower power, higher throughput for model workloads.",
            "PM asks eng: NPU utilisation vs GPU fallback — battery impact differs 3–5×.",
          ),
          s(" NPU-first architecture is table stakes for mobile AI features."),
        ],
        [
          s("Platform vendors are driving on-device as strategy. "),
          x(
            "Apple Intelligence, Gemini Nano on Android, Copilot+ on Windows — OS-level on-device AI sets user expectations.",
            "Third-party apps compete with platform-native features — differentiation must be clear.",
          ),
          s(" PM monitors platform announcements — capability and policy shifts affect roadmap."),
        ],
        [
          s("Device fragmentation is the PM's distribution challenge. "),
          x(
            "NPU capability varies: flagship 2024 phone vs budget 2022 phone. Feature may work on 40% of install base.",
            "PM defines minimum hardware tier and graceful degradation for older devices.",
          ),
          s(" Hardware gating is product decision — not just eng compatibility matrix."),
        ],
      ],
      examples: [
        {
          title: "Hardware tier — flagship only v1",
          body: "PM scoped on-device summarisation to iPhone 15 Pro+ and Pixel 8+ (NPU ≥15 TOPS). Older devices routed to cloud with consent. 62% of install base eligible. Roadmap: expand as install base upgrades.",
        },
        {
          title: "Platform competition — differentiated on privacy",
          body: "Apple shipped on-device writing tools. Third-party writing app PM doubled down on cross-platform + custom style fine-tune on-device. Couldn't compete on OS integration; won on portability and personalisation.",
        },
        {
          title: "Battery testing — NPU vs GPU",
          body: "Eng prototype ran model on GPU — 8% battery per 10-min session. NPU path: 1.2%. PM made NPU requirement non-negotiable in spec. Battery test became standard QA gate for on-device features.",
        },
      ],
    }),
    buildSection({
      number: "8.3",
      title: "Model formats for on-device",
      subtitle: "Core ML, TensorFlow Lite, ONNX, ExecuTorch — the runtime formats that package models for device deployment",
      take: "On-device deployment requires model formats optimised for mobile runtimes: Core ML (Apple ecosystem), TensorFlow Lite (cross-platform mobile), ONNX Runtime (cross-platform, Windows emphasis), ExecuTorch (Meta's PyTorch mobile runtime). Each format supports operator fusion, quantisation, and hardware acceleration hooks. PMs don't choose formats directly — but understand that platform choice (iOS-first vs Android-first vs cross-platform) drives runtime selection and eng stack.",
      why: "Runtime choice affects which models you can deploy, update cadence, and cross-platform parity. PMs who align platform strategy with runtime constraints avoid building iOS-only features that can't port to Android for 18 months.",
      paragraphs: [
        [
          s("Platform-native formats optimise for that silicon. "),
          x(
            "Core ML compiles models for Apple Neural Engine. TFLite targets Android NNAPI. Best performance comes from native format per platform.",
            "Cross-platform from single format (ONNX) trades some performance for eng efficiency.",
          ),
          s(" PM documents platform priority: iOS-first, Android-first, or true parity."),
        ],
        [
          s("Model conversion is an eng workstream, not a button click. "),
          x(
            "PyTorch/ONNX model → Core ML conversion may lose operators, require graph surgery, or fail on dynamic shapes.",
            "PM budgets 2–4 weeks eng per model per platform for conversion and validation.",
          ),
          s(" Conversion risk belongs in roadmap — not discovered at launch crunch."),
        ],
        [
          s("Runtime version fragmentation affects updates. "),
          x(
            "Core ML 7 vs 6, TFLite 2.14 vs 2.10 — older OS versions may not support newest runtime features.",
            "PM defines minimum OS version support alongside hardware tier.",
          ),
          s(" OS version floor is product decision with market reach implications."),
        ],
      ],
      examples: [
        {
          title: "Core ML conversion — 3-week delay",
          body: "Cloud ONNX model failed Core ML conversion — unsupported attention operator. Eng implemented custom op. 3-week delay. PM added conversion spike to future model selection criteria.",
        },
        {
          title: "Cross-platform ONNX — acceptable tradeoff",
          body: "Startup chose ONNX Runtime for iOS + Android from single model artefact. 15% slower than native Core ML on iPhone — acceptable for their latency budget. PM prioritised eng velocity over peak iOS performance.",
        },
        {
          title: "OS floor — dropped Android 10",
          body: "TFLite feature required Android 12+ for NNAPI delegate. PM accepted losing 8% of Android install base. Communicated upgrade prompt for older devices with cloud fallback.",
        },
      ],
    }),
    buildSection({
      number: "8.4",
      title: "Quantisation for mobile",
      subtitle: "How INT4 and INT8 compression makes 7B parameter models fit on a phone — the quality tradeoff at the device constraint",
      take: "Quantisation reduces model weight precision from FP16/FP32 to INT8 or INT4 — shrinking model size 2–4× and accelerating inference with minimal quality loss on well-calibrated models. A 7B FP16 model (~14GB) becomes ~4GB INT4 — fitting in phone RAM. Quality tradeoff: 1–5% accuracy degradation on most tasks; larger drops on nuanced reasoning. PMs set quality eval gates for quantised vs full-precision before accepting on-device deployment.",
      why: "Quantisation is the enabler that makes on-device LLMs possible — but it's also the source of 'dumber local model' complaints. PMs who eval quantised quality and set user expectations avoid backlash.",
      paragraphs: [
        [
          s("INT4 is the mobile sweet spot for LLMs. "),
          x(
            "INT4 weights + INT8 activations: ~4GB for 7B model. Runs on flagship phone RAM. INT8 alone may still exceed budget.",
            "PM confirms target model size with eng before promising feature.",
          ),
          s(" Model size budget is a hard constraint — not a preference."),
        ],
        [
          s("Quantisation-aware training improves quality. "),
          x(
            "Post-training quantisation (PTQ): quick, some quality loss. Quantisation-aware training (QAT): slower, better quality retention.",
            "PM chooses PTQ for speed-to-market; QAT when quality gate fails PTQ.",
          ),
          s(" Quality eval on quantised model is mandatory — not optional."),
        ],
        [
          s("Task sensitivity varies — summarisation vs reasoning. "),
          x(
            "Summarisation, classification, extraction: quantisation impact minimal. Multi-step reasoning, code generation: larger degradation.",
            "PM routes hard tasks to cloud even in hybrid architecture.",
          ),
          s(" Don't quantise your way into routing everything to cloud — defeats purpose."),
        ],
      ],
      examples: [
        {
          title: "PTQ pass — shipped on schedule",
          body: "7B summarisation model quantised to INT4 via PTQ. Golden set: 94% vs 96% full precision — within 2% gate. Shipped on-device summarisation for meeting notes. PTQ saved 3 weeks vs QAT.",
        },
        {
          title: "QAT required — reasoning task",
          body: "On-device code completion failed quality gate with PTQ — 71% vs 88% pass rate. Eng ran QAT; recovered to 85%. PM descoped to autocomplete snippets only; full completion routed to cloud.",
        },
        {
          title: "User education — 'private mode' label",
          body: "PM labelled on-device path 'Private Mode — faster, stays on device' and cloud path 'Full AI — most capable.' Users understood tradeoff. Support tickets about 'dumber AI' dropped vs unlabeled hybrid.",
        },
      ],
    }),
    buildSection({
      number: "8.5",
      title: "Privacy-preserving AI",
      subtitle: "The use cases where data never leaving the device is not a feature but a requirement — healthcare, legal, finance, personal data",
      take: "Privacy-preserving on-device AI serves regulated and sensitive domains: healthcare (patient data), legal (privileged documents), finance (account details), personal data (photos, messages, biometrics). In these contexts, on-device isn't a nice-to-have — it's a compliance or procurement requirement. Architecture must be auditable: cryptographers and security teams verify no data exfiltration, not just marketing claims.",
      why: "PMs in regulated verticals who pitch cloud AI face procurement blockers. On-device unlocks markets cloud can't serve — but only with verifiable architecture, not privacy theatre.",
      paragraphs: [
        [
          s("Regulated industries require data residency by default. "),
          x(
            "HIPAA, attorney-client privilege, GDPR sensitive processing — cloud inference requires DPAs, BAA, complex compliance.",
            "On-device eliminates cloud processing of raw sensitive input — simplifies compliance story.",
          ),
          s(" PM leads with architecture diagram in enterprise security reviews."),
        ],
        [
          s("Verifiable locality beats policy promises. "),
          x(
            "Airplane mode test: feature works with network disabled. Packet capture: no sensitive payload leaves device.",
            "Security audit validates — PM doesn't assert privacy without eng evidence.",
          ),
          s(" 'Works offline' is the user-visible proof of on-device processing."),
        ],
        [
          s("Federated learning extends privacy story. "),
          x(
            "Model improves from aggregate device signals without raw data leaving devices — gradients only.",
            "Emerging pattern: on-device inference + federated improvement loop.",
          ),
          s(" PM positions federated learning for 'gets better without seeing your data' narrative."),
        ],
      ],
      examples: [
        {
          title: "Legal tech — privilege requirement",
          body: "Law firm SaaS PM built contract review on-device. Documents never uploaded. Passed bar association ethics review competitors with cloud processing couldn't. On-device was sole procurement differentiator — not model quality.",
        },
        {
          title: "Healthcare — BAA avoided",
          body: "Patient symptom checker ran triage model on-device. No PHI to cloud — no BAA required for inference path. FDA SaMD pathway simplified. PM documented data flow for 510(k) submission.",
        },
        {
          title: "Airplane mode demo — closed enterprise deal",
          body: "CISO asked: 'Prove it doesn't phone home.' PM demoed full feature in airplane mode with network monitor running. Zero packets. Deal closed. Demo became standard enterprise sales asset.",
        },
      ],
    }),
    buildSection({
      number: "8.6",
      title: "Offline capability",
      subtitle: "AI features that work without a network connection — the reliability advantage that on-device unlocks for field, travel, and low-connectivity contexts",
      take: "Offline AI features work without network connectivity — critical for field workers, travellers, military, rural users, and any context where connectivity is intermittent or untrusted. On-device models enable offline transcription, translation, object detection, and summarisation. PMs design offline-first UX: queue sync when connected, clear offline indicators, graceful capability reduction when local model is smaller than cloud.",
      why: "Offline isn't edge case — it's core value for large user segments. PMs who design offline-first capture users competitors lose when the network drops.",
      paragraphs: [
        [
          s("Offline is reliability, not just privacy. "),
          x(
            "Construction site, airplane, subway, rural clinic — network unavailable or prohibited.",
            "On-device features work identically in all connectivity states.",
          ),
          s(" PM identifies offline-critical user journeys in discovery — not as v2 afterthought."),
        ],
        [
          s("Sync strategy for hybrid features. "),
          x(
            "Offline: local inference, results stored locally. Online: sync results, fetch model updates, escalate hard queries to cloud.",
            "UX: clear 'offline mode' indicator; explain what works and what waits for connection.",
          ),
          s(" Users tolerate reduced capability offline if communicated honestly."),
        ],
        [
          s("Model updates require connectivity — plan for stale models. "),
          x(
            "User offline for 30 days may run outdated model. On reconnect: background model update, changelog if behaviour changed.",
            "PM defines max offline staleness and forced-update policy.",
          ),
          s(" Long offline periods are edge case but real for field deployments."),
        ],
      ],
      examples: [
        {
          title: "Field service — offline diagnostic AI",
          body: "Technician app diagnosed equipment from photos on-device in basements and remote sites. No connectivity required. Synced reports when back in van. PM metric: 40% of sessions had zero connectivity — offline was primary mode.",
        },
        {
          title: "Travel app — offline translation",
          body: "Phrasebook translation ran on-device. Tourists used in airplane mode abroad. Cloud translation offered as 'enhanced' when connected. Offline was default; cloud was upgrade — inverted typical AI architecture.",
        },
        {
          title: "Stale model — forced update after 90 days",
          body: "Field devices offline 90+ days ran outdated safety model. PM implemented: on reconnect, mandatory model update before safety-critical inference. Edge case policy prevented liability from stale weights.",
        },
      ],
    }),
    buildSection({
      number: "8.7",
      title: "Model update distribution at the edge",
      subtitle: "How to push new model weights to millions of devices — the OTA update pipeline and the version fragmentation problem",
      take: "On-device models improve via OTA (over-the-air) weight updates — downloaded on WiFi, applied at app launch or in background. Challenges: update size (100MB–2GB), bandwidth cost, version fragmentation (users on different model versions), rollback on bad updates, and A/B testing model versions in production. PMs plan update cadence, delta compression, staged rollouts, and fallback to previous model version.",
      why: "Ship-and-forget on-device models decay — cloud models improve weekly; on-device models stuck on launch weights fall behind. Update infrastructure is ongoing product cost, not one-time eng task.",
      paragraphs: [
        [
          s("Model updates are app updates — or separate OTA channel. "),
          x(
            "Bundled in app release: simple, slow cadence. Separate model CDN: faster iteration, more infra.",
            "PM chooses based on model improvement velocity — monthly vs weekly.",
          ),
          s(" Separate model OTA is worth it when ML team ships model improvements frequently."),
        ],
        [
          s("Staged rollout prevents fleet-wide bad updates. "),
          x(
            "1% → 10% → 50% → 100% with quality monitoring at each stage. Rollback trigger: error rate spike, quality metric drop.",
            "Same discipline as app releases — model bugs are harder to debug.",
          ),
          s(" PM defines rollback criteria before any model OTA push."),
        ],
        [
          s("Version fragmentation is permanent state. "),
          x(
            "Not all users update immediately. Support N and N-1 model versions in client code. Feature flags per model version.",
            "PM accepts fragmentation — designs features for lowest supported model version.",
          ),
          s(" 'Everyone on latest model' is fantasy at scale."),
        ],
      ],
      examples: [
        {
          title: "Bad OTA rollback — 4-hour incident",
          body: "Model OTA to 20% of users caused crash on Android 11 devices. Rollback triggered in 4 hours; 1.2% of users affected. PM added device-OS matrix to staged rollout gates.",
        },
        {
          title: "Delta compression — 80% smaller updates",
          body: "Full model 1.2GB; delta from v2 to v3: 240MB. WiFi-only download policy. Update adoption rose from 34% to 71% in 7 days. PM made delta updates requirement for model OTA.",
        },
        {
          title: "A/B model test on device",
          body: "PM ran on-device summarisation A/B: model v3 vs v4 on 10% traffic. v4 improved golden set 4% but added 200ms latency. Kept v3 — latency SLO trumped quality gain. On-device A/B infra became standard.",
        },
      ],
    }),
    buildSection({
      number: "8.8",
      title: "Hybrid on-device and cloud",
      subtitle: "Running lightweight models on-device for latency-sensitive tasks and routing complex queries to cloud — the architecture that dominates in practice",
      take: "Hybrid architecture runs small models on-device for fast, private, offline-capable tasks — and routes complex queries to cloud frontier models when connected and capable. Routing logic considers: query complexity, connectivity, user privacy preference, latency budget, and model confidence. This is the dominant production pattern: neither pure on-device nor pure cloud delivers optimal UX across all scenarios.",
      why: "PMs who design hybrid from day one avoid the false binary of 'all local' vs 'all cloud.' Routing intelligence is product logic — what stays local vs escalates defines user experience.",
      paragraphs: [
        [
          s("Routing rules are product decisions. "),
          x(
            "Simple: keyword/heuristic routing. Advanced: small classifier model predicts 'needs cloud.' User override: 'Private mode' forces local.",
            "PM writes routing spec: which intents local, which cloud, user controls.",
          ),
          s(" Routing transparency builds trust — users understand why cloud was used."),
        ],
        [
          s("Latency budget drives local-first design. "),
          x(
            "On-device: 50–200ms. Cloud round-trip: 500ms–3s. Voice, camera, real-time UX need local path.",
            "PM defines latency SLO per feature; architecture follows.",
          ),
          s(" Cloud escalation for hard queries is fine — if fast path handles common case."),
        ],
        [
          s("Privacy preference overrides routing. "),
          x(
            "'Never use cloud' mode: all queries local or 'can't answer.' Enterprise policy: force local for classified data.",
            "PM implements privacy controls that actually change routing — not just settings theatre.",
          ),
          s(" Hybrid without real privacy controls is cloud with extra steps."),
        ],
      ],
      examples: [
        {
          title: "Smart routing — 78% local hit rate",
          body: "Assistant PM routed FAQs and summarisation locally; reasoning and code to cloud. Classifier predicted complexity. 78% queries never left device. Avg latency 180ms vs 2.1s all-cloud. User satisfaction highest on hybrid vs either pure path.",
        },
        {
          title: "Private mode — enterprise requirement",
          body: "Enterprise tier: admin policy forces local-only routing. Cloud escalation disabled. Feature set reduced but compliance met. PM priced enterprise tier higher — privacy control as premium.",
        },
        {
          title: "Routing transparency — trust metric",
          body: "PM showed badge: 'Answered on device' vs 'Enhanced with cloud.' Users who cared about privacy used device path more. Transparency increased NPS among privacy-conscious segment 12 points.",
        },
      ],
    }),
    buildSection({
      number: "8.9",
      title: "On-device AI across platforms",
      subtitle: "iOS (Core ML, Apple Intelligence), Android (Gemini Nano), Windows (Copilot+) — the ecosystem differences that affect your distribution strategy",
      take: "Platform ecosystems differ materially: Apple (Core ML, Apple Intelligence APIs, strict App Store review), Google (Gemini Nano on Pixel/Samsung, Android NNAPI, Play Store policies), Microsoft (Copilot+ NPU requirement, Windows ML). PMs choose platform priority based on user base, platform AI roadmaps, and distribution constraints. Cross-platform parity is expensive — iOS-first or Android-first is often correct.",
      why: "Platform vendors are also AI competitors. PMs who understand ecosystem dynamics avoid building features Apple/Google will ship natively — and leverage platform APIs where they accelerate delivery.",
      paragraphs: [
        [
          s("Apple Intelligence sets iOS user expectations. "),
          x(
            "Writing tools, summarisation, image generation on-device — third-party apps compete with OS features.",
            "Differentiation: cross-platform, domain-specific models, deeper integration with your app's data.",
          ),
          s(" PM monitors WWDC/Android I/O for capability shifts affecting roadmap."),
        ],
        [
          s("Gemini Nano availability is device-specific on Android. "),
          x(
            "Not all Android devices run Gemini Nano — Pixel and select Samsung flagship only initially.",
            "PM defines Android hardware matrix; broader than iOS due to fragmentation.",
          ),
          s(" Android on-device is harder to scope than iOS — plan for wider fallback."),
        ],
        [
          s("Windows Copilot+ creates NPU-class laptop segment. "),
          x(
            "Copilot+ PCs require 40+ TOPS NPU. On-device AI for desktop productivity is emerging product category.",
            "PM evaluates desktop on-device if user base includes knowledge workers on modern laptops.",
          ),
          s(" Desktop on-device is 2025+ opportunity — earlier for early adopters."),
        ],
      ],
      examples: [
        {
          title: "iOS-first — Android 6 months later",
          body: "PM shipped on-device feature iOS-only for v1 — Core ML path proven. Android TFLite port took 5 months due to fragmentation testing. Honest platform roadmap prevented Android user backlash with 'coming soon' timeline.",
        },
        {
          title: "Apple API vs custom model",
          body: "PM evaluated Apple Intelligence Writing Tools API vs custom on-device model. API: faster ship, less control. Custom: brand voice fine-tune. Chose custom for differentiation; API for languages Apple doesn't support.",
        },
        {
          title: "Copilot+ laptop feature — niche v1",
          body: "PM shipped on-device meeting summarisation for Copilot+ laptops only — 12% of desktop users. Niche but high-NPS segment. Roadmap: expand as NPU laptops proliferate.",
        },
      ],
    }),
    buildSection({
      number: "8.10",
      title: "PM decision lens: on-device vs cloud as a product positioning decision",
      subtitle: "Privacy story, offline capability, latency advantage, and the model capability ceiling you accept by leaving the cloud",
      take: "Choose on-device when: privacy or compliance requires data locality, offline is primary use case, latency budget is <200ms, or platform positioning is 'your data stays yours.' Choose cloud when: frontier model capability is essential, task requires large context or multi-step reasoning, or rapid model improvement without OTA infra is priority. Hybrid when: user base needs both — which is most products.",
      why: "On-device vs cloud is a product positioning decision with permanent capability tradeoffs — not an eng optimisation to decide later. PMs who choose deliberately build coherent products; those who default to cloud miss differentiation.",
      paragraphs: [
        [
          s("Lead with the user value on-device delivers. "),
          x(
            "Privacy: 'Never leaves your device.' Offline: 'Works anywhere.' Speed: 'Instant responses.'",
            "Don't lead with 'smaller model' — lead with benefit, acknowledge tradeoff honestly.",
          ),
          s(" Positioning must match architecture — privacy claims require verifiable on-device path."),
        ],
        [
          s("Capability ceiling is acceptable when value is clear. "),
          x(
            "Users accept simpler on-device answers for meeting notes privacy. They won't accept for legal research requiring frontier reasoning.",
            "PM maps features to capability tier — don't force on-device where cloud is clearly better.",
          ),
          s(" Wrong feature on wrong tier causes churn — not wrong technology choice."),
        ],
        [
          s("Build OTA and hybrid infra before promising improvement. "),
          x(
            "On-device model at launch is snapshot. Users expect improvement — plan update cadence and hybrid escalation from day one.",
            "Static on-device model without update path feels abandoned within 6 months.",
          ),
          s(" On-device is a program, not a launch — budget ongoing model ops."),
        ],
      ],
      examples: [
        {
          title: "Privacy positioning — 2× enterprise conversion",
          body: "PM repositioned note-taking app around 'AI that never uploads your notes.' On-device summarisation and search. Enterprise conversion rate 2× vs prior cloud-AI positioning. Privacy was procurement trigger — not model benchmark scores.",
        },
        {
          title: "Wrong tier — moved feature to cloud",
          body: "PM shipped on-device code assistant. Quality insufficient for developer users. Moved to cloud with opt-in data processing. Kept on-device for snippet autocomplete only. Honest tier mapping recovered developer NPS.",
        },
        {
          title: "Hybrid as default — neither pure path",
          body: "PM rejected 'all on-device' and 'all cloud' proposals. Shipped hybrid with transparent routing. 82% user satisfaction vs 61% (cloud-only prototype) and 58% (on-device-only prototype). Hybrid was correct product — not compromise.",
        },
      ],
    }),
  ],
  quiz: [
    {
      q: "What is the primary tradeoff when choosing on-device AI over cloud?",
      options: [
        "On-device is always cheaper to operate.",
        "You accept a smaller model and narrower capability ceiling in exchange for privacy, offline reliability, and lower latency.",
        "On-device models are always more accurate.",
        "On-device requires no model updates.",
      ],
      correct: 1,
      correctFeedback:
        "Right. On-device trades capability for privacy, offline, and latency advantages.",
      wrongFeedback:
        "On-device accepts capability ceiling for privacy and latency. Re-read sections 8.1 and 8.10.",
    },
    {
      q: "Why is INT4 quantisation critical for on-device LLMs?",
      options: [
        "INT4 improves model reasoning quality.",
        "INT4 compresses model size 2–4× so 7B models fit in phone RAM.",
        "INT4 is required by Apple App Store.",
        "INT4 eliminates the need for NPUs.",
      ],
      correct: 1,
      correctFeedback:
        "Exactly. Quantisation shrinks models to fit device memory constraints.",
      wrongFeedback:
        "INT4 enables model size that fits on-device memory. Re-read section 8.4.",
    },
    {
      q: "What architecture dominates production on-device AI products?",
      options: [
        "Pure on-device — never use cloud.",
        "Pure cloud with local caching.",
        "Hybrid — lightweight on-device for fast/private tasks, cloud escalation for complex queries.",
        "Federated learning only — no local inference.",
      ],
      correct: 2,
      correctFeedback:
        "Right. Hybrid routing is the dominant production pattern.",
      wrongFeedback:
        "Most products use hybrid on-device + cloud routing. Re-read section 8.8.",
    },
    {
      q: "What makes on-device AI a procurement requirement in regulated industries?",
      options: [
        "It's cheaper than cloud.",
        "Sensitive data never leaves the device — simplifying HIPAA, privilege, and GDPR compliance.",
        "Regulators require on-device only.",
        "Cloud AI is banned in healthcare.",
      ],
      correct: 1,
      correctFeedback:
        "Right. Data locality simplifies compliance in healthcare, legal, and finance.",
      wrongFeedback:
        "Privacy-preserving architecture is the regulated-industry driver. Re-read section 8.5.",
    },
    {
      kind: "order",
      q: "Put on-device model deployment steps in logical order.",
      prompt: "Drag to arrange from first (top) to last (bottom).",
      items: [
        "Select target model and quantise (INT4/INT8) for device memory budget.",
        "Convert to platform runtime format (Core ML, TFLite, ONNX).",
        "Eval quantised model quality against golden set.",
        "Deploy via app bundle or OTA model CDN.",
        "Monitor quality and stage OTA updates with rollback plan.",
      ],
      correctFeedback:
        "Right. Quantise → convert → eval → deploy → monitor/update.",
      wrongFeedback:
        "Deployment flow: quantise → convert → eval → deploy → OTA monitor. Re-read sections 8.3–8.7.",
    },
    {
      kind: "categorize",
      q: "Match each on-device AI concept to its category.",
      categories: ["User value", "Technical enabler", "Operational challenge"],
      items: [
        { text: "Offline transcription in airplane mode.", category: 0 },
        { text: "Apple Neural Engine NPU acceleration.", category: 1 },
        { text: "Model OTA version fragmentation across install base.", category: 2 },
        { text: "Airplane mode proof for enterprise security review.", category: 0 },
        { text: "Core ML format for iOS deployment.", category: 1 },
        { text: "Staged rollout with rollback on bad model update.", category: 2 },
      ],
      correctFeedback:
        "Right. User value, technical enablers, and operational challenges are distinct.",
      wrongFeedback:
        "Match items to value, enabler, and ops categories. Re-read sections 8.2–8.7.",
    },
  ],
});
