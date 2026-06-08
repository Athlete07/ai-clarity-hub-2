import { buildChapter, buildSection, s, x } from "../concepts-pb4-helpers";

export const chapter04QuantisationDistillation = buildChapter({
  slug: "pb5-quantisation-distillation",
  number: 4,
  shortTitle: "Quantisation & Distillation",
  title: "Quantisation & Distillation",
  readingMinutes: 28,
  summary:
    "How to shrink models without killing quality — post-training quantisation, quantisation-aware training, GGUF/GPTQ/AWQ formats, and knowledge distillation from teacher to student. The compression stack PMs use when inference COGS or latency budgets bite.",
  keyTakeaway:
    "Quantisation reduces numeric precision to cut memory and speed up inference; distillation trains a smaller model to mimic a larger one. Together they are how frontier capability reaches affordable product tiers — but both require eval discipline, not faith in vendor benchmarks.",
  pmCallout:
    "As a PM: when engineering says 'we'll quantise to 4-bit,' your job is to ask 'on which eval set, with what quality delta, and what's the rollback plan?' Compression is a product tradeoff, not a checkbox.",
  sections: [
    buildSection({
      number: "4.1",
      title: "What is quantisation",
      subtitle: "Trading numeric precision for speed, memory, and margin",
      take: "Quantisation maps model weights and activations from high-precision floats (typically FP16 or FP32) to lower-bit representations (INT8, INT4, or mixed schemes), shrinking memory footprint and accelerating matrix math on supported hardware — at the cost of some accuracy.",
      why: "Inference cost is often the largest line item in an AI product P&L. PMs who understand quantisation can negotiate realistic latency SLAs and price tiers instead of treating 'smaller model' as the only cost lever.",
      paragraphs: [
        [
          s("Neural networks store billions of parameters as floating-point numbers. "),
          x(
            "A 7B-parameter model in FP16 occupies roughly 14 GB of VRAM just for weights — before KV cache, activations, or batching overhead. That single number drives GPU SKU selection, batch size, and whether you can serve one or ten concurrent users per card.",
            "FP32 uses 4 bytes per parameter; FP16 uses 2; INT8 uses 1; INT4 uses 0.5. Halving bit width roughly halves weight memory — the arithmetic is linear and predictable.",
          ),
          s(" Quantisation is the controlled process of moving down that ladder."),
        ],
        [
          s("Quantisation attacks two bottlenecks: memory bandwidth and compute throughput. "),
          x(
            "Modern inference is often memory-bound — reading weights from GPU RAM takes longer than the actual math. Lower-bit weights mean fewer bytes to fetch per token, which directly cuts latency on the same hardware.",
            "Specialised kernels (CUDA, Metal, TensorRT-LLM) exploit INT8/INT4 dot products that run faster than FP16 on the same chip. The speedup is hardware-dependent — PMs should ask for benchmarks on production SKUs, not laptop demos.",
          ),
          s(" A 2× memory reduction might translate to 1.3× latency improvement or 2× higher concurrency — the mapping isn't automatic."),
        ],
        [
          s("Quantisation is not the same as 'using a smaller model.' "),
          x(
            "You can quantise Llama 3 70B to 4-bit and still run a 70B architecture — fewer bits per weight, same parameter count. Distillation (covered later) actually reduces parameters. Teams often combine both: distill 70B → 8B, then quantise 8B to 4-bit.",
            "PM roadmap framing: quantisation is a deployment optimisation on an existing checkpoint; distillation is a training project that produces a new checkpoint.",
          ),
          s(" Confusing the two leads to wrong timelines — quantisation can be days; distillation is weeks."),
        ],
      ],
      examples: [
        {
          title: "Llama.cpp on a MacBook — quantisation as consumer distribution",
          body: "Meta's Llama models ship with GGUF quantisation variants (Q4_K_M, Q8_0, etc.) so developers run 7B–70B models on laptops. PMs building dev tools or offline-first products use this as proof that quantisation unlocks new deployment surfaces — not just cheaper cloud bills.",
        },
        {
          title: "OpenAI API pricing tiers — precision baked into SKU",
          body: "Managed APIs abstract quantisation, but the economics reflect it: smaller/faster models (gpt-4o-mini) cost less per token partly because they run on fewer, more aggressively optimised GPUs. When you negotiate enterprise pricing, you're indirectly negotiating someone else's quantisation and batching strategy.",
        },
        {
          title: "Mobile keyboard next-word prediction — INT8 since 2018",
          body: "On-device ML products quantised models years before the LLM wave. Gboard-style models run INT8 on phone NPUs with <20ms latency. PMs porting LLM lessons to mobile should study classical mobile quantisation playbooks — eval on device, not in cloud notebooks.",
        },
      ],
    }),
    buildSection({
      number: "4.2",
      title: "Why models need compression",
      subtitle: "VRAM ceilings, unit economics, and the latency-quality triangle",
      take: "Models grow faster than hardware budgets. Compression — quantisation, distillation, pruning — is how products stay inside GPU memory limits, hit p95 latency targets, and preserve gross margin at scale.",
      why: "The CFO asks why AI COGS grew 3× when usage grew 2×. Without compression vocabulary, PMs blame 'model choice' when the real issue is serving precision and batch efficiency.",
      paragraphs: [
        [
          s("VRAM is the hard constraint for self-hosted LLMs. "),
          x(
            "KV cache grows with context length × batch size × layers. A 70B model at 8K context can exceed 80 GB VRAM — requiring multi-GPU tensor parallelism that adds coordination overhead and cost.",
            "Quantising weights from FP16 to INT4 can free 50–60% of weight memory, sometimes making single-GPU deployment feasible or allowing longer context windows on the same card.",
          ),
          s(" Every PM spec that says '128K context, <2s latency, <$0.01/query' is a compression problem in disguise."),
        ],
        [
          s("Unit economics flip at scale. "),
          x(
            "At 10K queries/day, running FP16 vs INT4 might be noise. At 10M queries/day, a 40% inference cost reduction is a headcount. Compression investments that don't pay off in pilot become mandatory at growth.",
            "Break-even math: (quality regression cost in churn/support) vs (GPU savings + latency win). PMs own both sides of the equation.",
          ),
          s(" Teams that defer compression until 'Series C' often ship a re-architecture under investor pressure — painful and user-visible."),
        ],
        [
          s("Edge and real-time use cases demand compression by default. "),
          x(
            "Voice assistants, copilots with inline suggestions, and factory-floor vision can't wait for datacenter round-trips. Sub-200ms budgets require small models, quantised weights, and specialised silicon.",
            "Cloud-only teams sometimes forget this until an enterprise customer asks for on-prem or air-gapped deploy — then compression becomes a sales blocker, not an optimisation.",
          ),
          s(" Compression strategy should appear in the PRD when latency SLA or deployment environment is fixed, not as a post-launch firefight."),
        ],
      ],
      examples: [
        {
          title: "Startup GPU bill shock — FP16 serving at 2M tokens/day",
          body: "A copilot launched on A100 FP16 serving hit $18K/month GPU at 2M tokens/day — 22% of revenue. INT4 quantisation + better batching dropped GPU to $7K with 3% quality regression on their internal eval. PM reframed pricing tiers around the compressed stack.",
        },
        {
          title: "Enterprise RFP — 'must run on single L40S'",
          body: "A bank's procurement required on-prem inference on one L40S (48 GB). Raw FP16 Llama 70B didn't fit. Q4 quantisation plus context limits made the deal possible. Sales would have lost the logo without a compression roadmap item in Q1.",
        },
        {
          title: "Apple Intelligence on-device — compression as product strategy",
          body: "Apple's on-device models are aggressively compressed and routed: small on-device model for privacy-sensitive tasks, cloud for heavy lifting. PMs designing hybrid products should treat compression tiers as user-visible architecture, not backend plumbing.",
        },
      ],
    }),
    buildSection({
      number: "4.3",
      title: "Post-training quantisation (PTQ)",
      subtitle: "Compress an existing checkpoint without retraining",
      take: "Post-training quantisation (PTQ) converts a trained model to lower precision using calibration data — no gradient updates. It's fast to apply (hours, not weeks) but typically sacrifices more accuracy than quantisation-aware training.",
      why: "PTQ is the first lever engineering pulls. PMs who know its limits avoid promising 'we'll quantise Friday and ship Monday' without an eval gate.",
      paragraphs: [
        [
          s("PTQ workflow: load FP16 checkpoint → calibrate → export quantised weights. "),
          x(
            "Calibration runs a few hundred to a few thousand representative inputs through the model, recording activation ranges (min/max or percentiles) to set scaling factors for INT8/INT4 buckets.",
            "Bad calibration data = bad quantisation. If calibration prompts are all short FAQs but production queries are long legal paragraphs, accuracy drops disproportionately on the cases users care about.",
          ),
          s(" PMs should require calibration sets drawn from production query distributions, not synthetic lorem ipsum."),
        ],
        [
          s("PTQ methods differ in how they handle outliers. "),
          x(
            "Naive min-max quantisation breaks when a few activation outliers span huge ranges — most values collapse to useless bins. GPTQ (layer-wise error compensation) and AWQ (protecting salient weights) are PTQ algorithms that became productised because naive PTQ failed on LLMs.",
            "Think of PTQ as surgery on a finished model: fast, but you can't un-learn damage without reverting to FP16.",
          ),
          s(" The PM question for PTQ: 'What's the max acceptable perplexity or task-accuracy delta on our golden eval set?'"),
        ],
        [
          s("PTQ is the right first experiment when timelines are tight. "),
          x(
            "If INT4 PTQ passes eval, ship it — no QAT needed. If PTQ fails on critical tasks (JSON schema compliance, numeric reasoning), escalate to QAT or distillation rather than accepting silent quality loss.",
            "Feature-flag quantised vs full-precision paths during A/B so rollback is one toggle, not a redeploy.",
          ),
          s(" Many production stacks run PTQ INT8 for 90% of traffic and FP16 fallback for flagged high-stakes queries — a tiering pattern PMs can productise."),
        ],
      ],
      examples: [
        {
          title: "GPTQ on Mistral 7B — weekend compression spike",
          body: "Engineering ran AutoGPTQ on Mistral 7B with 512 calibration samples from support tickets. INT4 model fit on a T4; latency dropped 35%. PM blocked release until task-completion eval ran — JSON extraction regressed 8 points. They switched to AWQ and recovered 6 of those points.",
        },
        {
          title: "Calibration set mismatch — silent prod regression",
          body: "A coding copilot calibrated PTQ on Python snippets but 40% of prod queries were TypeScript + config files. Autocomplete quality on TS dropped; users blamed 'model got dumber.' Fix: stratified calibration by language. PM now owns calibration data requirements in compression PRDs.",
        },
        {
          title: "Hugging Face Optimum — PTQ as a pipeline step",
          body: "Teams using HF Optimum can script PTQ in CI: new base model release → auto PTQ → eval gate → promote to staging. PMs treat PTQ like any other build artifact with pass/fail thresholds, not a one-off notebook exercise.",
        },
      ],
    }),
    buildSection({
      number: "4.4",
      title: "Quantisation-aware training (QAT)",
      subtitle: "Teaching the model to survive low precision",
      take: "Quantisation-aware training simulates low-precision arithmetic during fine-tuning so weights adapt to INT8/INT4 constraints — slower and more expensive than PTQ, but often recovers accuracy that PTQ destroys on small models or hard tasks.",
      why: "When PTQ fails eval and the business can't afford FP16 COGS, QAT is the structured escalation. PMs approve QAT when they see a measured PTQ gap, not when engineering wants to 'try training stuff.'",
      paragraphs: [
        [
          s("QAT inserts fake-quantise nodes into the training graph. "),
          x(
            "During forward pass, weights are rounded to low-bit and back-propagated with straight-through estimators. The model learns representations robust to quantisation noise — like training athletes with weighted vests.",
            "Typically starts from an FP16 checkpoint, runs supervised fine-tuning for a fraction of original pre-training cost — days on a few GPUs, not months on a cluster.",
          ),
          s(" QAT is not full pre-training from scratch; it's adaptation with quantisation in the loop."),
        ],
        [
          s("When QAT pays off vs when it's overkill. "),
          x(
            "Pay off: small models (≤7B) on niche tasks where PTQ drops accuracy sharply; models that must run INT4 on edge NPUs; regulated domains where eval thresholds are tight.",
            "Overkill: large models where AWQ/GPTQ PTQ already passes eval; workloads with FP8 hardware paths (H100) where precision loss is minimal without QAT.",
          ),
          s(" PM cost framing: QAT = ML engineer weeks + GPU fine-tune cost. Compare to ongoing FP16 inference tax."),
        ],
        [
          s("QAT requires labelled data and eval discipline — same as fine-tuning. "),
          x(
            "You're changing weights. Catastrophic forgetting and task regression are real. Run the same eval harness you use for LoRA fine-tunes: holdout sets, regression suites, red-team prompts.",
            "Deliverable is a new checkpoint tagged 'QAT-INT4-v3' in the model registry — not an opaque binary on someone's laptop.",
          ),
          s(" If you don't have fine-tuning eval infrastructure, you're not ready for QAT — fix eval first."),
        ],
      ],
      examples: [
        {
          title: "Mobile Llama fine-tune with QAT for NPU deploy",
          body: "A field-service app needed offline troubleshooting on Android. PTQ INT4 failed on multi-step reasoning eval. Two-week QAT fine-tune on 8K proprietary repair logs produced an INT4 model that passed field-tech acceptance tests. PM traded training cost for avoiding cloud dependency.",
        },
        {
          title: "QAT skipped — AWQ was enough",
          body: "An internal summarisation tool tested GPTQ and AWQ PTQ on Llama 3 8B. AWQ passed ROUGE and human preference eval at INT4. PM closed the QAT ticket — saved three eng-weeks. The decision was data-driven, not ideological.",
        },
        {
          title: "TensorRT Model Optimizer QAT path",
          body: "NVIDIA's stack offers QAT → TensorRT deploy for teams on CUDA infra. PMs in NVIDIA-heavy enterprises should know QAT is bundled into vendor MLOps — procurement may already pay for the tooling.",
        },
      ],
    }),
    buildSection({
      number: "4.5",
      title: "GGUF, GPTQ, and AWQ",
      subtitle: "The formats and algorithms PMs see in vendor docs",
      take: "GGUF is a file format for running quantised models (especially via llama.cpp); GPTQ and AWQ are PTQ algorithms that produce weight layouts optimised for GPU inference. They're complementary — algorithm produces weights, format packages them for runtime.",
      why: "Engineering slack threads full of 'Q4_K_M vs AWQ' confuse PMs who approve timelines. Knowing the vocabulary prevents misaligned expectations between edge deploy and datacenter serve.",
      paragraphs: [
        [
          s("GGUF — portable quantised model containers for llama.cpp and friends. "),
          x(
            "GGUF files bundle quantised weights, tokenizer, and metadata. Quantisation levels (Q2, Q4_K_M, Q8) indicate bit width and mixing strategy — 'K' variants use different bit widths per layer for better quality/size tradeoff.",
            "Dominant in local/edge inference: Ollama, LM Studio, Jan.ai. PMs building 'download and run' products standardise on GGUF variants per hardware tier.",
          ),
          s(" GGUF is not a training format — it's a distribution format after PTQ conversion."),
        ],
        [
          s("GPTQ — layer-wise quantisation with Hessian-informed error compensation. "),
          x(
            "GPTQ quantises weights one layer at a time, adjusting to minimise output error given quantisation noise. Strong on NVIDIA GPUs via ExLlama, vLLM integrations.",
            "Historically popular for 4-bit GPU serving. Can struggle on some architectures or without careful group size tuning.",
          ),
          s(" PM eval note: benchmark GPTQ and AWQ on your hardware — swap winners per model family."),
        ],
        [
          s("AWQ — protecting salient weights from aggressive quantisation. "),
          x(
            "Activation-aware weight quantisation identifies ~1% of weights that matter disproportionately and keeps them higher precision. Often beats GPTQ on perplexity at same bit width.",
            "Integrated into vLLM, TensorRT-LLM, and HF ecosystems. Good default for datacenter INT4 when PTQ is the path.",
          ),
          s(" For PM roadmaps: specify target format/runtime (vLLM + AWQ vs Ollama + GGUF) in deployment PRDs — they're different release pipelines."),
        ],
      ],
      examples: [
        {
          title: "Ollama model library — GGUF as product UX",
          body: "Ollama ships models as pulled GGUF blobs with tags like 'llama3:8b-instruct-q4_0'. PMs building developer platforms mimic this: expose quantisation tier as a user-facing choice ('Quality' vs 'Speed') backed by specific GGUF variants.",
        },
        {
          title: "vLLM production serve — AWQ + continuous batching",
          body: "A B2B API switched from FP16 HuggingFace serve to vLLM with AWQ weights. Throughput 3.2×, cost per token down 55%. PM documented quantisation tier in SLA appendix so enterprise customers knew which checkpoint they were on.",
        },
        {
          title: "Wrong format for the runtime — integration delay",
          body: "A team exported GPTQ weights but their edge runtime only supported GGUF via llama.cpp. Two-week delay converting formats. PM added 'target runtime + format matrix' to the AI infra checklist — preventable coordination tax.",
        },
      ],
    }),
    buildSection({
      number: "4.6",
      title: "What is knowledge distillation",
      subtitle: "Training a student to imitate a teacher's behaviour",
      take: "Knowledge distillation trains a smaller 'student' model to match a larger 'teacher' model's outputs — soft probability distributions, hidden states, or chain-of-thought traces — transferring capability without copying every parameter.",
      why: "Distillation is how gpt-4o-mini-class models exist. PMs who understand it can scope 'build a cheaper tier' as a training programme with data and eval requirements, not magic.",
      paragraphs: [
        [
          s("Classic distillation: teacher softmax → student learns dark knowledge. "),
          x(
            "Hinton et al.'s insight: teacher probability spread over wrong answers ('car' 0.7, 'truck' 0.2, 'bicycle' 0.05) carries more information than hard label 'car'. Student mimics that distribution and learns faster than from labels alone.",
            "For LLMs, 'soft labels' become token-level logit matching, sequence-level KL divergence, or imitation of full generated responses.",
          ),
          s(" PM framing: distillation is data generation (teacher) + training (student) — both stages cost money."),
        ],
        [
          s("LLM distillation flavours PMs encounter. "),
          x(
            "Response distillation: teacher generates answers, student fine-tuned on (prompt, teacher_response) pairs. Simplest, risks propagating teacher errors.",
            "Logit/feature distillation: student matches internal representations — higher fidelity, more engineering. Used in frontier labs; less common in product teams without ML research.",
          ),
          s(" Most product-led distillation is response distillation at scale — thousands to millions of examples."),
        ],
        [
          s("Distillation changes the model architecture, not just precision. "),
          x(
            "Teacher 70B → student 8B means fewer layers, smaller hidden dims — irreducible capacity limit. Distillation maximises student quality within that cap; it doesn't make 8B equal 70B on every task.",
            "PMs set expectations: student excels on teacher-covered distribution; out-of-distribution queries regress toward base student capabilities.",
          ),
          s(" Pair distillation with eval slices that mirror production — especially edge cases teacher never saw."),
        ],
      ],
      examples: [
        {
          title: "OpenAI gpt-4o-mini — distillation as SKU strategy",
          body: "Frontier models seed smaller SKUs: GPT-4 class capability compressed into mini models for cost-sensitive API tiers. PMs pricing AI features should assume competitors replicate this pattern — teacher at premium, distilled student at volume.",
        },
        {
          title: "Microsoft Phi series — small models trained on synthetic textbooks",
          body: "Phi models use high-quality synthetic data and distillation-style training to punch above their parameter count. PM lesson: distillation data quality matters more than raw parameter count for niche domains.",
        },
        {
          title: "Support-bot distillation — 70B teacher, 7B student",
          body: "A SaaS company generated 200K (ticket, resolution) pairs from GPT-4 teacher, fine-tuned Llama 7B student. Student matched teacher on 84% of eval cases at 8× lower inference cost. PM launched 'Standard' (student) and 'Premium' (teacher) tiers with clear capability positioning.",
        },
      ],
    }),
    buildSection({
      number: "4.7",
      title: "Distillation workflows for LLMs",
      subtitle: "From teacher data generation to student deployment",
      take: "A production LLM distillation pipeline: select teacher → generate or curate training corpus → fine-tune student (often with LoRA) → eval against teacher and base → quantise student → deploy with versioning. Each stage has PM-owned quality gates.",
      why: "Distillation projects fail when treated as 'fine-tune on synthetic data' without teacher governance. PMs who map the workflow catch data pollution and eval gaps before they become user-visible regressions.",
      paragraphs: [
        [
          s("Step 1 — Define the capability slice to distil. "),
          x(
            "Don't distil 'everything GPT-4 does.' Distil summarisation of medical charts, or SQL generation for your schema, or tone compliance for your brand. Narrow scope = measurable eval = shippable student.",
            "The slice should align with a product tier or deployment constraint — not 'make cheap model smart.'",
          ),
          s(" Write the slice as user stories with pass/fail examples before generating a single teacher response."),
        ],
        [
          s("Step 2 — Teacher data generation at scale. "),
          x(
            "Pipeline: production prompts (redacted) + synthetic augmentation → teacher inference → filter (length, format, moderation) → human review sample → training JSONL.",
            "Cost: teacher API bill can reach five figures for 1M examples. Budget this in the business case alongside student training GPU time.",
          ),
          s(" PMs insist on deduplication and toxicity filters — garbage teacher data becomes garbage student weights."),
        ],
        [
          s("Step 3 — Student training, eval, and compression stack. "),
          x(
            "Fine-tune student with LoRA/QLoRA on distilled dataset. Eval: student vs teacher agreement, task metrics, regression on general capabilities. If student passes, apply PTQ (AWQ/GGUF) for deploy economics.",
            "Registry tags: teacher version, dataset hash, student checkpoint, quantisation format. Rollback = redeploy previous student tag.",
          ),
          s(" Distillation is not one-shot — re-run when teacher model updates or product scope expands."),
        ],
      ],
      examples: [
        {
          title: "Distillation data flywheel from production",
          body: "A copilot logged thumbs-up interactions, used GPT-4 to rewrite/improve them, and fed into quarterly student retraining. PM owned consent/privacy review; ML owned pipeline. Student quality tracked teacher without paying teacher inference on every query.",
        },
        {
          title: "Teacher error amplification — student learned wrong JSON",
          body: "Teacher occasionally emitted invalid JSON on edge schemas. Student faithfully learned the bug pattern. Fix: JSON validator in data pipeline rejected bad teacher samples; added schema-specific eval. PM added 'data QA metrics' to distillation dashboards.",
        },
        {
          title: "Multi-teacher ensemble for hard slices",
          body: "For coding tasks, team distilled from teacher votes: GPT-4 + Claude on disagreements went to human label. Student robustness improved on ambiguous bugs. PM approved extra teacher cost for 15% of examples — targeted spend.",
        },
      ],
    }),
    buildSection({
      number: "4.8",
      title: "Quantisation vs distillation vs pruning",
      subtitle: "Three compression axes — and when to combine them",
      take: "Quantisation reduces bits per parameter; distillation reduces parameter count by training a smaller model; pruning removes weights or structures deemed unimportant. Most production stacks combine distillation → quantisation; pruning is rarer in LLMs but common in classical ML.",
      why: "Stakeholders ask 'can't we just make it smaller?' PMs who separate the three techniques assign the right team, timeline, and budget to each ask.",
      paragraphs: [
        [
          s("Quantisation — same architecture, lower precision. "),
          x(
            "Fastest path, reversible to FP16, minimal ML research. Best when model size fits your task but VRAM/latency doesn't.",
            "Ceiling: at INT2/INT1 quality often collapses; diminishing returns below INT4 for many LLMs.",
          ),
          s(" First knob to turn."),
        ],
        [
          s("Distillation — smaller architecture, teacher-guided capability. "),
          x(
            "Slower, requires data pipeline and training, changes model behaviour holistically. Best when you need a different SKU tier or edge-viable parameter count.",
            "Pairs naturally with quantisation: 8B student + INT4 often beats 70B FP16 on narrow tasks at 1/20th cost.",
          ),
          s(" Second knob when quantisation alone can't hit size or cost targets."),
        ],
        [
          s("Pruning — remove weights or heads, optionally retrain. "),
          x(
            "Structured pruning (whole layers) can speed inference but LLM pruning research hasn't produced a default product playbook like GPTQ. Unstructured pruning often needs hardware support to realise speedups.",
            "PM reality in 2026: ask about pruning in research contexts; ship quantisation + distillation in product contexts unless ML team has proven pruning wins on your model family.",
          ),
          s(" Decision matrix: try PTQ → QAT if needed → distil if still too big/slow → explore pruning only with dedicated R&D budget."),
        ],
      ],
      examples: [
        {
          title: "Compression stack — 70B teacher to 4-bit 8B student",
          body: "Canonical enterprise pattern: distill capability slice to Llama 8B FP16, AWQ to INT4, serve on vLLM. Total cost down 85%, latency p95 400ms vs 2.1s. PM documented the stack in customer security questionnaires — auditable transformations.",
        },
        {
          title: "Quantisation-only win — no distillation needed",
          body: "Mistral 7B FP16 already met quality bar; INT4 AWQ cut GPU count in half. PM closed distillation epic as wont-fix — compression project still succeeded with one technique.",
        },
        {
          title: "Pruning research spike — didn't ship",
          body: "ML team pruned 20% of MLP weights in a 3B model. Theoretical FLOPs down, actual vLLM latency unchanged without custom kernels. PM killed pruning roadmap item; reallocated to better batching — honest prioritisation.",
        },
      ],
    }),
    buildSection({
      number: "4.9",
      title: "Quality eval after compression",
      subtitle: "Measuring what you broke before users find it",
      take: "Every compression step needs a before/after eval harness: task-specific accuracy, format compliance, latency, and regression on out-of-scope prompts. Perplexity alone is insufficient for product decisions.",
      why: "Compressed models fail in subtle ways — JSON brackets drop, refusal behaviour shifts, multilingual quality collapses. PMs who gate releases on product evals, not lab perplexity, avoid silent tier degradations.",
      paragraphs: [
        [
          s("Build a golden eval set from production reality. "),
          x(
            "200–500 prompts stratified by intent, language, length, and risk level. Label expected behaviour (not just reference text): valid JSON schema, must-refuse, must-cite, etc.",
            "Run FP16 baseline and compressed candidate through identical pipeline — same prompt template, same temperature, same post-processing.",
          ),
          s(" PMs curate or approve golden sets; engineering automates the run."),
        ],
        [
          s("Metrics that matter for PMs. "),
          x(
            "Task success rate (human or LLM-judge with calibration), format pass rate, latency p50/p95, tokens/sec, VRAM footprint, cost per 1K queries.",
            "Agreement rate with teacher (for distillation): useful but insufficient — student can agree with wrong teacher answers.",
          ),
          s(" Set explicit pass thresholds in the PRD: 'INT4 must be within 3 points of FP16 on task success, p95 latency <600ms.'"),
        ],
        [
          s("Ship compression with shadow mode and gradual rollout. "),
          x(
            "Shadow: run compressed model in parallel, log outputs, don't serve to users. Compare divergence rate. Canary: 5% traffic on compressed, monitor thumbs-down and escalation tickets.",
            "Kill switch to FP16 path if error rate exceeds threshold. PM defines thresholds; on-call owns the switch.",
          ),
          s(" Teams that skip shadow mode discover compression regressions from Twitter screenshots — worst possible eval signal."),
        ],
      ],
      examples: [
        {
          title: "JSON schema eval caught INT4 regression",
          body: "A function-calling agent passed BLEU-style summarisation eval after INT4 quantisation but failed JSON schema validation 12% more often. PM blocked release; engineering applied AWQ instead of GPTQ — schema pass rate recovered. Task-specific eval saved a production incident.",
        },
        {
          title: "Human eval for tone-sensitive brand bot",
          body: "Compressed student sounded 'more casual' on perplexity-matched eval. Human raters flagged brand voice regression invisible to automated metrics. PM required human sign-off for customer-facing tone products before compression launch.",
        },
        {
          title: "Canary rollback in 20 minutes",
          body: "INT4 deploy at 10% traffic showed 2.3× support ticket rate on 'wrong answer' category. Feature flag reverted to FP16 in 20 minutes. Post-mortem: calibration set lacked multi-hop finance queries. PM added regression slice before next attempt.",
        },
      ],
    }),
    buildSection({
      number: "4.10",
      title: "PM decision lens",
      subtitle: "Choosing compression strategy under cost, latency, and quality constraints",
      take: "The compression decision is sequential: PTQ eval first → QAT if PTQ fails → distillation if architecture is too large → quantise the result. PMs document acceptable quality delta, target hardware, rollback path, and who owns the golden eval set.",
      why: "Compression projects without a decision framework become endless ML experiments. A one-page framework lets PMs approve, defer, or kill work in a single review.",
      paragraphs: [
        [
          s("The one-page compression PRD. "),
          x(
            "Include: base model, target runtime (vLLM, llama.cpp, TensorRT), current FP16 cost/latency, target cost/latency, golden eval link, max acceptable metric regression, calibration data source, rollout plan (shadow/canary), rollback owner.",
            "Reviewers approve when the business case closes: GPU savings + latency win > quality risk + engineering time.",
          ),
          s(" Ambiguous 'optimise inference' tickets without this page get deprioritised."),
        ],
        [
          s("Tiering compression for users. "),
          x(
            "Product pattern: 'Fast' tier = distilled INT4 student; 'Pro' tier = full teacher FP16. Users self-select; margin improves on Fast without subsidising everyone.",
            "Transparency matters — enterprise customers ask which model they run. Document tiers in SLA and admin console.",
          ),
          s(" Compression enables monetisation, not just cost cutting."),
        ],
        [
          s("Re-evaluate on every base model upgrade. "),
          x(
            "New Llama/Mistral release → re-run PTQ → compare to previous quantised checkpoint. Sometimes new base + INT4 beats old distillation stack — PM schedules quarterly compression reviews alongside model version bumps.",
            "Treat quantised checkpoints as perishable assets with expiry dates, not permanent infrastructure.",
          ),
          s(" The PM who owns the model roadmap owns the compression calendar."),
        ],
      ],
      examples: [
        {
          title: "Compression ROI slide that closed a sprint",
          body: "PM presented: FP16 $14K/mo GPU, INT4 projected $5.5K/mo, task success 91.2% → 89.8% (-1.4pp), p95 latency 1.8s → 0.9s. Support cost model showed net +$6K/mo value. Eng got two sprints; CFO got a line item reduction.",
        },
        {
          title: "Deferred distillation — PTQ sufficient",
          body: "Distillation epic estimated 8 eng-weeks. PTQ AWQ met all eval gates in 3 days. PM reallocated distillation budget to observability. Right sequencing saved a quarter.",
        },
        {
          title: "Compliance ask — document the compression chain",
          body: "Healthcare customer required model lineage: base weights, distillation dataset description, quantisation method, eval results. PM maintained a compression dossier per release — sales enabler disguised as documentation.",
        },
      ],
    }),
  ],
  quiz: [
    {
      q: "Your 7B model fits quality requirements but GPU costs are too high. What's the first compression step to try?",
      options: [
        "Full distillation from GPT-4 before any other optimisation.",
        "Post-training quantisation (e.g., AWQ/GPTQ) with eval on a golden set.",
        "Remove half the transformer layers without retraining.",
        "Switch to a larger model with better hardware.",
      ],
      correct: 1,
      correctFeedback:
        "Right. PTQ is the fastest, lowest-risk first lever — same architecture, lower precision. Distillation is heavier and comes when you need a smaller architecture or PTQ fails eval.",
      wrongFeedback:
        "Start with PTQ and measure quality delta before committing to training projects. Re-read sections 4.3 and 4.8.",
    },
    {
      q: "What's the key difference between quantisation and knowledge distillation?",
      options: [
        "Quantisation reduces bits per parameter; distillation trains a smaller model to mimic a larger one.",
        "They are the same technique with different names.",
        "Distillation only works on embedding models, not LLMs.",
        "Quantisation always requires retraining from scratch.",
      ],
      correct: 0,
      correctFeedback:
        "Exactly. Quantisation compresses numeric precision on an existing architecture; distillation reduces parameter count by transferring behaviour from teacher to student.",
      wrongFeedback:
        "Quantisation keeps the same model shape with lower precision; distillation produces a new smaller checkpoint. Re-read sections 4.1 and 4.6.",
    },
    {
      q: "PTQ accuracy dropped because calibration data was all short prompts, but production queries are long documents. What's the fix?",
      options: [
        "Skip eval — perplexity is enough.",
        "Rebuild calibration set stratified to match production query length and domain distribution.",
        "Switch from INT4 to FP32 for all weights permanently.",
        "Disable quantisation and increase batch size only.",
      ],
      correct: 1,
      correctFeedback:
        "Right. PTQ quality depends on calibration data representing real activation ranges. Mismatched calibration silently hurts the cases users actually run.",
      wrongFeedback:
        "Calibration data must mirror production inputs. Re-read section 4.3.",
    },
    {
      kind: "categorize",
      q: "Sort each scenario to the best primary compression technique.",
      categories: ["PTQ quantisation", "Knowledge distillation", "QAT"],
      items: [
        { text: "7B model passes quality at FP16 but VRAM cost is too high; AWQ eval looks promising.", category: 0 },
        { text: "70B teacher quality needed but product must run on a single 24 GB GPU.", category: 1 },
        { text: "INT4 PTQ fails JSON schema eval; FP16 cost unacceptable; fine-tune budget available.", category: 2 },
        { text: "Need a 'Fast' API tier with 8× lower inference cost on a narrow task slice.", category: 1 },
        { text: "Mistral 7B AWQ INT4 already within 1pp of FP16 on golden set.", category: 0 },
        { text: "Edge NPU requires INT4; naive PTQ fails acceptance tests on proprietary domain.", category: 2 },
      ],
      correctFeedback:
        "Right. PTQ first when architecture fits; distillation when you need a smaller model; QAT when PTQ fails and you can afford fine-tuning with quantisation in the loop.",
      wrongFeedback:
        "Sequence: PTQ → QAT if PTQ fails → distillation if model is still too large. Re-read sections 4.3, 4.4, 4.6, and 4.8.",
    },
    {
      kind: "order",
      q: "Put the recommended compression decision sequence in order.",
      prompt: "Drag to arrange first step (top) to last (bottom).",
      items: [
        "Run PTQ (AWQ/GPTQ) and eval against FP16 golden set.",
        "If PTQ fails critical evals, try QAT fine-tune with quantisation in the loop.",
        "If model architecture is still too large or costly, distil from teacher to smaller student.",
        "Apply quantisation to the student checkpoint for deploy economics.",
        "Shadow/canary rollout with kill switch to uncompressed path.",
      ],
      correctFeedback:
        "Exactly. Fast cheap experiments first, training investments when needed, distillation for architecture reduction, quantise the result, then safe rollout.",
      wrongFeedback:
        "Don't jump to distillation before PTQ eval. Re-read section 4.10.",
    },
    {
      q: "Which eval practice best prevents silent compression regressions in production?",
      options: [
        "Measure perplexity on Wikipedia only.",
        "Ship INT4 to 100% traffic immediately after offline perplexity improves.",
        "Golden task eval + shadow mode + canary rollout with FP16 rollback.",
        "Ask users if the model 'feels faster' in a Slack poll.",
      ],
      correct: 2,
      correctFeedback:
        "Right. Product-relevant golden evals plus gradual rollout catch format, tone, and task failures perplexity misses.",
      wrongFeedback:
        "Perplexity alone and big-bang deploys miss product failures. Re-read section 4.9.",
    },
  ],
});
