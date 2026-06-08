import { buildChapter, buildSection, s, x } from "../concepts-pb4-helpers";

export const chapter06FineTuningDeepDive = buildChapter({
  slug: "pb4-fine-tuning-deep-dive",
  number: 6,
  shortTitle: "Fine-Tuning Deep Dive",
  title: "Fine-Tuning Deep Dive",
  readingMinutes: 32,
  summary:
    "Full fine-tuning, LoRA, QLoRA, instruction tuning, DPO, and RLHF — the adaptation stack PMs navigate when prompting and RAG stop being enough. What each technique buys, what it costs, and how to choose.",
  keyTakeaway:
    "Fine-tuning changes model weights to bake in behaviour; LoRA/QLoRA make it affordable; instruction tuning shapes format; DPO and RLHF align outputs to human preferences. The PM job is matching technique to failure mode — not defaulting to fine-tune because it sounds serious.",
  pmCallout:
    "As a PM: before you approve a fine-tuning sprint, write down the failure mode ('model won't follow JSON schema' vs 'model tone is wrong' vs 'model lacks domain facts'). The failure mode picks the technique — not the other way around.",
  sections: [
    buildSection({
      number: "6.1",
      title: "Full fine-tuning recap",
      subtitle: "Updating every weight — maximum control, maximum cost",
      take: "Full fine-tuning continues training on all model parameters using your labelled dataset, producing a new model checkpoint that has permanently shifted — the strongest adaptation, but requiring GPU clusters, ML expertise, and ongoing eval discipline.",
      why: "Vendors offer 'fine-tune GPT-4o' buttons that hide complexity. PMs who understand full fine-tuning vs parameter-efficient methods avoid paying Ferrari prices to move the rearview mirror.",
      paragraphs: [
        [
          s("Full fine-tuning means gradient updates on every weight in the network. "),
          x(
            "You start from a base checkpoint (e.g., Llama 3 70B), run supervised training on (input, output) pairs, and save a complete new weight file — often tens to hundreds of GB.",
            "The model's knowledge and behaviour can shift broadly: new tone, new format compliance, new domain vocabulary — but also catastrophic forgetting of general capabilities if data is narrow or overtrained.",
          ),
          s(" At frontier scale (70B+), full fine-tuning is a research-lab or well-funded ML team activity, not a weekend eng task."),
        ],
        [
          s("When full fine-tuning still makes sense. "),
          x(
            "Domain shift is extreme (medical coding, legal clause generation), you have large high-quality proprietary datasets (10K–1M+ examples), and inference must run on your own weights without adapter overhead.",
            "OpenAI and others offer managed full fine-tuning on select models — you bring JSONL, they handle infra. PM tradeoff: convenience vs data residency and per-token inference markup on custom models.",
          ),
          s(" Most product teams in 2026 default to LoRA/QLoRA on open models or managed API fine-tunes on smaller models first."),
        ],
        [
          s("The PM checklist before full fine-tune. "),
          x(
            "Have you exhausted prompt engineering and RAG? Do you have eval metrics that prove the base model fails consistently on your task? Is labelled data volume and quality sufficient? Who owns model versioning and rollback?",
            "Fine-tuning fixes systematic behaviour gaps; it doesn't fix bad retrieval, missing data, or ambiguous product requirements.",
          ),
          s(" If you can't articulate the eval delta you expect (+15 points on format compliance), you're not ready to fine-tune — you're ready to gather data."),
        ],
      ],
      examples: [
        {
          title: "OpenAI fine-tune on gpt-4o-mini — classification at scale",
          body: "A moderation pipeline fine-tuned gpt-4o-mini on 50K labelled examples for niche policy categories. Cost: low thousands to train; inference cheaper than few-shot GPT-4 on every call. PM ROI: precision on rare violation types jumped from 0.71 to 0.89 — worth it because false negatives had regulatory cost.",
        },
        {
          title: "Full fine-tune regret — reverted after forgetting",
          body: "A customer-support model fully fine-tuned on ticket replies started failing on general reasoning tasks and multilingual queries. Team reverted to base + LoRA adapter for tone only. PM lesson: narrow data + full fine-tune = capability amnesia. Scope the adaptation target.",
        },
        {
          title: "Harvey-style legal fine-tunes — domain depth as moat",
          body: "Legal AI products invest in full or large-scale fine-tuning on proprietary matter data because generic models lack citation discipline and jurisdiction nuance. PM framing: fine-tune is a moat investment when domain data is proprietary and RAG alone can't enforce output structure.",
        },
      ],
    }),
    buildSection({
      number: "6.2",
      title: "LoRA",
      subtitle: "Low-Rank Adaptation — train a small adapter, not the whole model",
      take: "LoRA freezes the base model and trains small low-rank matrices injected into attention layers — capturing most fine-tune benefits at a fraction of GPU memory and cost, with adapters you can swap per customer or task.",
      why: "LoRA is why fine-tuning left the research lab and entered product roadmaps. PMs who know LoRA can discuss multi-tenant customisation and per-tenant adapters without funding a GPU farm.",
      paragraphs: [
        [
          s("The intuition: weight updates during fine-tuning are low-rank. "),
          x(
            "Instead of updating the full W matrix in attention, LoRA learns ΔW = A × B where A and B are thin matrices (rank r). Only A and B are trained; base weights stay frozen.",
            "Trainable parameters drop from billions to millions — e.g., 7B model might train 4–20M LoRA params. Memory footprint shrinks dramatically; multiple adapters can sit on one base model.",
          ),
          s(" Inference can merge adapters into base weights for speed, or hot-swap adapters per request for multi-tenant SaaS."),
        ],
        [
          s("LoRA changed the economics of custom models. "),
          x(
            "A single A100 can fine-tune a 7B–13B model with LoRA in hours; 70B with QLoRA (next section) on one or few GPUs. Training runs cost hundreds to low thousands, not tens of thousands.",
            "Hugging Face PEFT library standardised LoRA configs — rank, alpha, target modules — lowering eng barrier.",
          ),
          s(" PMs can budget LoRA experiments as sprint-sized spikes, not quarter-long ML programs."),
        ],
        [
          s("LoRA limits: it nudges behaviour, doesn't inject facts. "),
          x(
            "LoRA excels at style, format, tone, classification boundaries, and task-specific phrasing. It does not reliably add factual knowledge that wasn't in pretraining or your data — that's RAG's job.",
            "Teams that LoRA-train hoping to replace a knowledge base usually get confident wrong answers in new factual territory.",
          ),
          s(" Failure mode → technique: 'wrong facts' = RAG; 'wrong format/tone/tool-use pattern' = LoRA/DPO."),
        ],
      ],
      examples: [
        {
          title: "Per-tenant LoRA adapters in B2B SaaS",
          body: "A writing assistant trains a LoRA adapter per enterprise customer on approved style guides (500–2K examples). Base model shared; adapter loaded by tenant ID. PM monetises 'brand voice' tier. Full fine-tune per customer would be economically absurd; LoRA makes it viable.",
        },
        {
          title: "Function-calling LoRA on Llama",
          body: "A team LoRA-tuned Llama 3 8B on 10K tool-calling examples to match GPT-4 function-call reliability at 1/10 inference cost. PM tradeoff: slightly lower general reasoning, much better unit economics on agent feature.",
        },
        {
          title: "LoRA merge for deployment",
          body: "Engineering merged LoRA weights into base for production serving — eliminated adapter lookup latency. PM didn't care about merge mechanics but cared that p95 dropped 40ms. Deployment shape is a product latency decision.",
        },
      ],
    }),
    buildSection({
      number: "6.3",
      title: "How LoRA works",
      subtitle: "Rank, target modules, and what actually gets trained",
      take: "LoRA attaches trainable low-rank matrices to chosen layers (usually attention q/k/v/o projections), scales the adapter output by alpha/rank, and leaves everything else frozen — the details PMs need to scope training runs and interpret results.",
      why: "When ML says 'we'll LoRA the q and v projections at rank 16,' PMs who understand that sentence can ask whether rank is justified by data size and whether they're training the right layers for the failure mode.",
      paragraphs: [
        [
          s("Target modules determine what capability you're adapting. "),
          x(
            "Common targets: q_proj, v_proj (query and value in attention). Some configs add k_proj, o_proj, MLP layers for harder tasks. More targets = more trainable params = more capacity but more overfit risk.",
            "Rule of thumb: start q+v for style/format tasks; expand targets if eval plateaus.",
          ),
          s(" PM question in design review: 'Which layers are we adapting and why that matches our eval gap?'"),
        ],
        [
          s("Forward pass with LoRA is additive. "),
          x(
            "Output = W·x + (α/r)·B·A·x. Base computation unchanged; LoRA path adds a correction. α (alpha) is a scaling hyperparameter; r is rank.",
            "Higher rank = larger A and B matrices = more degrees of freedom. Diminishing returns past rank 32–64 for many tasks unless dataset is huge.",
          ),
          s(" Training adjusts A and B to minimise loss on your examples; base W never moves."),
        ],
        [
          s("Data format for LoRA fine-tuning is usually instruction pairs. "),
          x(
            "JSONL with messages or prompt/completion fields: user instruction + ideal assistant response. Quality beats quantity — 1K excellent examples often beats 10K noisy ones.",
            "Data cleaning is PM-adjacent work: remove contradictory examples, dedupe near-duplicates, ensure labels match current product policy.",
          ),
          s(" Garbage training data produces garbage adapters faster than full fine-tune — smaller model capacity doesn't forgive bad labels."),
        ],
      ],
      examples: [
        {
          title: "Rank ablation — PM-readable experiment",
          body: "Team trained rank 8, 16, 32, 64 on same 3K dataset; eval on held-out 500. Rank 16 plateaued; 64 overfit. PM chose rank 16 for production — saved training time and reduced overfit risk. Ablation results belong in the PRD appendix.",
        },
        {
          title: "Layer target expansion for JSON schema",
          body: "Format-compliance task failed with q+v LoRA only. Adding MLP layers improved schema-valid JSON from 0.82 to 0.94. PM learned: structural output tasks may need broader targets — not every failure is 'more data.'",
        },
        {
          title: "Contradictory labels sunk a LoRA run",
          body: "Support reply dataset mixed 'be brief' and 'be thorough' examples without context tags. LoRA adapter averaged to mushy middle. PM fixed data taxonomy (issue type → style rule) before retrain. Data governance is fine-tune prerequisite.",
        },
      ],
    }),
    buildSection({
      number: "6.4",
      title: "QLoRA",
      subtitle: "Fine-tune huge models on consumer GPUs — quantize then adapt",
      take: "QLoRA quantizes the frozen base model to 4-bit precision for memory efficiency, then applies LoRA training on top — making 70B-class fine-tunes feasible on a single 24–48GB GPU instead of a multi-GPU cluster.",
      why: "QLoRA is the reason open-weight fine-tuning conversations include 'we can try Llama 70B' without a $50K infra line item. PMs scope bets on open models because QLoRA exists.",
      paragraphs: [
        [
          s("Memory is the bottleneck LoRA alone doesn't solve. "),
          x(
            "A 70B model in fp16 needs ~140GB VRAM just to load weights — before activations, optimizer states, or gradients. LoRA reduces trainable params but base weights still load full precision.",
            "QLoRA stores base weights in 4-bit NormalFloat (NF4) quantization; LoRA adapters train in higher precision (bf16). Peak VRAM drops enough to fit on one A6000 or 2× consumer GPUs.",
          ),
          s(" Tradeoff: slight quality loss from quantization vs massive infra savings — usually acceptable for adaptation tasks."),
        ],
        [
          s("QLoRA democratised open-model customisation. "),
          x(
            "Hugging Face + bitsandbytes + PEFT recipes let small teams fine-tune Llama 3 70B on domain tone or tool-use patterns overnight on rented RunPod/Lambda instances.",
            "PM cost model: $2–5/hour GPU × 8–24 hours = tens to low hundreds per experiment vs six-figure cluster rental for full fine-tune.",
          ),
          s(" Experiment cadence matters: QLoRA enables weekly adapter iterations tied to eval regressions."),
        ],
        [
          s("Know QLoRA limits for production planning. "),
          x(
            "Serving quantized+adapter models needs compatible inference stack (vLLM, TGI with adapter support). Merging QLoRA into full precision for deployment adds a step.",
            "Not every hosting provider supports dynamic adapter loading — confirm before promising per-customer adapters at scale.",
          ),
          s(" PM asks eng: 'train with QLoRA, serve how?' before committing roadmap to open 70B."),
        ],
      ],
      examples: [
        {
          title: "Overnight QLoRA on RunPod",
          body: "A 4-person startup QLoRA-tuned Mistral 7B on 8K internal support transcripts over a weekend — $40 GPU rental. Beat few-shot GPT-4 on in-domain tone eval. PM used result to justify dedicated ML hire vs ongoing API spend — decision data from a cheap spike.",
        },
        {
          title: "70B QLoRA for medical acronym disambiguation",
          body: "Clinical copilot needed consistent expansion of hospital-specific acronyms. RAG helped; QLoRA on 5K labelled pairs nailed format. Full 70B fine-tune was budgeted at $80K; QLoRA run cost $600. PM signed off after blinded clinician eval.",
        },
        {
          title: "Serving mismatch delayed launch",
          body: "Team QLoRA-trained beautifully but production inference stack didn't support 4-bit + LoRA hot-swap. Two-week delay to merge adapters and validate. PM retro: 'training path' and 'serving path' are one decision.",
        },
      ],
    }),
    buildSection({
      number: "6.5",
      title: "LoRA rank and alpha",
      subtitle: "The two hyperparameters that control adapter capacity and strength",
      take: "Rank (r) sets adapter capacity — how many degrees of freedom the adaptation has. Alpha (α) scales how strongly the adapter influences the forward pass — higher alpha means the LoRA correction weighs more against frozen base weights.",
      why: "Rank and alpha are the 'pricing knobs' of LoRA — PMs don't tune them, but they approve GPU hours and interpret whether a failed run needs more data vs more capacity vs different scaling.",
      paragraphs: [
        [
          s("Rank is the width of the adapter bottleneck. "),
          x(
            "Rank 8: very constrained — good for simple style shifts. Rank 16–32: default for many instruction tasks. Rank 64–128: complex behaviour changes; needs more data to avoid overfit.",
            "Trainable params scale roughly linearly with rank × number of target modules × hidden dimension.",
          ),
          s(" If eval improves from rank 16→32 but not 32→64, you've found the capacity ceiling for your dataset."),
        ],
        [
          s("Alpha controls effective learning rate of the adapter path. "),
          x(
            "Scaling factor α/r multiplies the LoRA output. Common convention: set alpha = 2× rank (e.g., r=16, α=32) as a starting point.",
            "Higher alpha/r ratio = stronger adapter influence — can help underfitting; too high causes instability or overfit on small datasets.",
          ),
          s(" PM takeaway: 'we increased alpha' means 'we're letting the adapter speak louder' — ask what eval metric that was meant to move."),
        ],
        [
          s("Rank/alpha interact with dataset size — the PM-visible pattern. "),
          x(
            "Small data (500 examples) + high rank = memorisation and eval train/test divergence. Large data (50K+) + low rank = underfitting — model can't capture nuance.",
            "Sweet spot is empirically found via ablation, not guessed. Budget 2–3 GPU runs for hyperparameter sweep in any fine-tune PRD.",
          ),
          s(" Skipping ablation to 'save GPU cost' often wastes the entire training run."),
        ],
      ],
      examples: [
        {
          title: "Rank 64 overfit on 1K examples",
          body: "Marketing copy LoRA on 1K examples: train loss dropped, held-out eval worsened. Dropped to rank 8, eval recovered. PM now requires dataset size / rank ratio guideline in ML playbook: <2K examples → rank ≤16.",
        },
        {
          title: "Alpha sweep documented for compliance",
          body: "Regulated fintech documented rank 16 alpha 32 as production standard after ablation — auditors asked for reproducibility. PM owned the 'model card' doc listing hyperparameters alongside training data provenance.",
        },
        {
          title: "When to stop tuning hyperparameters",
          body: "Team spent 2 weeks sweeping rank/alpha; eval moved 0.3 points. PM killed sweep — problem was label noise, not capacity. Fixed data labelling pipeline; rank 16 baseline hit target. Hyperparameter obsession can mask data problems.",
        },
      ],
    }),
    buildSection({
      number: "6.6",
      title: "Instruction tuning",
      subtitle: "Teaching the model to follow commands — format before facts",
      take: "Instruction tuning trains on (instruction, response) pairs so the model learns to follow directives, adopt roles, and produce structured outputs — the foundation that makes chat models usable before any domain-specific LoRA.",
      why: "When users say 'the model doesn't follow instructions,' they need instruction-tuning thinking — clearer system prompts, few-shot, or SFT — not necessarily more RAG or RLHF.",
      paragraphs: [
        [
          s("Base models ≠ chat models. "),
          x(
            "A base Llama checkpoint predicts next token on raw text — it doesn't naturally answer questions. Instruction tuning (supervised fine-tuning on conversational examples) produces the 'helpful assistant' behaviour users expect.",
            "ChatGPT, Claude, Llama-3-Instruct all went through instruction tuning stages. Your LoRA sits on top of an already instruction-tuned model in most product stacks.",
          ),
          s(" PM implication: pick instruct/chat checkpoints as LoRA bases, not raw pretrained weights."),
        ],
        [
          s("SFT (supervised fine-tuning) is instruction tuning's workhorse. "),
          x(
            "Train on curated prompt-response pairs: user asks X, ideal assistant says Y. Loss is standard next-token prediction on the response tokens.",
            "Alpaca, ShareGPT-style datasets, and proprietary golden examples are common sources. Mix general instruction-following with domain-specific pairs to avoid narrow behaviour.",
          ),
          s(" 500–5K high-quality proprietary examples often move product-specific instruction adherence more than generic open datasets."),
        ],
        [
          s("Instruction tuning vs RAG division of labour. "),
          x(
            "Instruction tuning: how to behave, format, refuse, cite format, tool-call syntax. RAG: what facts to use at answer time.",
            "PM anti-pattern: LoRA-train 50K FAQ pairs into weights when FAQ changes weekly — use RAG. LoRA-train 'always respond with JSON {answer, confidence, sources_used}' — correct use.",
          ),
          s(" Dynamic knowledge → retrieval. Stable behaviour rules → instruction tune or LoRA."),
        ],
      ],
      examples: [
        {
          title: "Alpaca-style SFT on internal golden set",
          body: "Team exported 2K thumbs-up AI replies from human-reviewed pilot as SFT data. Instruction adherence (follow template, cite policy ID) jumped measurably. PM curated the golden set — product judgment on which replies to imitate.",
        },
        {
          title: "Mistral Instruct vs Base — wrong checkpoint",
          body: "Junior eng LoRA'd Mistral base instead of Mistral-Instruct; outputs were incoherent chat. PM catch in eval review before launch. Checkpoint selection is a one-line decision with huge product impact.",
        },
        {
          title: "Refusal behaviour via instruction tuning",
          body: "Healthcare bot needed consistent 'I can't diagnose' refusals. Added 300 refusal examples to SFT mix. Refusal rate on red-team prompts went from 0.62 to 0.91. Cheaper than RLHF for binary compliance behaviours.",
        },
      ],
    }),
    buildSection({
      number: "6.7",
      title: "DPO",
      subtitle: "Direct Preference Optimization — alignment without a reward model",
      take: "DPO fine-tunes on preference pairs (chosen response vs rejected response to the same prompt) by optimising the model to increase likelihood of preferred outputs — achieving RLHF-like alignment without training a separate reward model or running PPO.",
      why: "DPO made preference alignment accessible to small teams. PMs evaluating 'make outputs sound more human / less verbose / more on-brand' should know DPO vs SFT tradeoffs.",
      paragraphs: [
        [
          s("Preference data looks like: same prompt, two answers, label which is better. "),
          x(
            "DPO loss directly pushes policy model toward chosen and away from rejected responses. No reward model, no reinforcement learning loop — simpler pipeline than classic RLHF.",
            "Data comes from human labelers, thumbs up/down logs, or AI-ranked pairs (risky if judge is weak).",
          ),
          s(" PM owns preference criteria: 'better' must be defined — shorter? more accurate? warmer tone? — or labelers disagree and DPO learns noise."),
        ],
        [
          s("DPO excels at stylistic and qualitative preferences. "),
          x(
            "Examples: less hedging, more direct answers, better summarisation structure, preferred brand voice between two valid options.",
            "DPO is weaker when 'better' requires external fact-checking the model can't see in the pair — prefer RAG + eval for factual accuracy.",
          ),
          s(" Use DPO when both candidates are factually acceptable but one matches product voice."),
        ],
        [
          s("DPO typically runs after SFT/LoRA, not on base models. "),
          x(
            "Standard stack: instruction-tuned base → optional domain SFT → DPO on preferences. Skipping SFT and DPOing a base model often yields unstable training.",
            "TRL library (Transformer Reinforcement Learning) popularised DPO recipes on Hugging Face — eng-friendly, still needs PM-curated preferences.",
          ),
          s(" Budget: preference labelling is the expensive line item — hundreds to thousands of ranked pairs for meaningful shift."),
        ],
      ],
      examples: [
        {
          title: "Thumbs data → DPO pipeline",
          body: "Copilot logged A/B reply variants; users thumbs-up one. PM defined minimum 10K pairwise preferences before DPO run. Post-DPO, preferred style rate rose 18% on blind eval. Data flywheel made alignment cheaper over time.",
        },
        {
          title: "DPO made outputs too terse",
          body: "Preferences collected from power users who favoured brevity; DPO shortened all replies — casual users felt rushed. PM rebalanced preference data across user segments. Alignment reflects who labels — sampling bias is product risk.",
        },
        {
          title: "Zephyr / ORPO — DPO in open model recipes",
          body: "Open models like Zephyr used DPO publically — PMs benchmark open DPO'd models against API models for tone tasks. Sometimes 'good enough' at 1/20th inference cost wins the roadmap.",
        },
      ],
    }),
    buildSection({
      number: "6.8",
      title: "RLHF",
      subtitle: "Reinforcement Learning from Human Feedback — the classic alignment stack",
      take: "Classic RLHF trains a reward model on human preference rankings, then uses reinforcement learning (typically PPO) to optimise the language model toward higher reward — powerful but complex, unstable, and infrastructure-heavy.",
      why: "Frontier chatbots were RLHF-shaped products. PMs still hear 'we need RLHF' as a magic quality wand — knowing the pipeline separates realistic alignment plans from science projects.",
      paragraphs: [
        [
          s("RLHF is a three-stage pipeline. "),
          x(
            "1) SFT on demonstrations. 2) Train reward model (RM) on human comparisons — RM scores any (prompt, response). 3) PPO fine-tunes policy model to maximise RM score while staying close to SFT model (KL penalty).",
            "Each stage needs data, compute, and eval. OpenAI, Anthropic, and Google used variants of this for flagship assistants.",
          ),
          s(" PM scope: RLHF is a program, not a ticket — unless you're a foundation model lab or have serious ML org."),
        ],
        [
          s("RLHF failure modes are legendary. "),
          x(
            "Reward hacking: model optimises RM score with verbose, sycophantic, or format-gaming outputs. Mode collapse: diversity drops. Training instability: PPO hyperparameters blow up.",
            "Mitigations: KL constraints, rejection sampling, iterative data collection, constitutional AI overlays — all need senior ML ownership.",
          ),
          s(" Product PMs consume RLHF results from API vendors; they rarely run RLHF themselves in 2026."),
        ],
        [
          s("When product teams still touch RLHF concepts. "),
          x(
            "Human feedback loops for ranking outputs, red-teaming for RM training data, online RLHF-style bandits for picking among N generations — productised pieces without full PPO stack.",
            "RLAIF (AI feedback) replaces some human labels with model judges — cheaper, introduces judge bias PMs must monitor.",
          ),
          s(" Ask vendors: 'How was this model aligned?' Answer may be RLHF, DPO, or constitutional — affects what feedback mechanisms will work for your fine-tune."),
        ],
      ],
      examples: [
        {
          title: "InstructGPT paper — RLHF product origin story",
          body: "OpenAI's InstructGPT showed RLHF-aligned 1.3B could beat 175B base on human preference — proof that alignment beats raw scale for usability. PM lesson: 'bigger model' isn't always the roadmap; 'better aligned smaller model' might be.",
        },
        {
          title: "Anthropic preference learning — RLHF at lab scale",
          body: "Anthropic's Claude alignment combines RLHF-style preference learning with constitutional principles. Enterprise PMs buying Claude inherit that alignment — custom DPO/LoRA layers on top for domain, not re-running RLHF from scratch.",
        },
        {
          title: "PPO blow-up killed a sprint",
          body: "A team attempted full RLHF on 7B model; PPO training collapsed week two. Fell back to DPO on same preference data — reached 80% of quality goal in 3 days. PM retro: default to DPO unless RLHF expertise is on payroll.",
        },
      ],
    }),
    buildSection({
      number: "6.9",
      title: "RLHF vs DPO",
      subtitle: "Choosing the alignment path — complexity, quality, and team fit",
      take: "RLHF offers flexible reward modelling and online optimisation but demands heavy ML ops; DPO is simpler, more stable, and often 90% of the preference alignment benefit for product teams with pairwise data.",
      why: "The RLHF-vs-DPO decision is staffing and timeline — not theology. PMs who frame it that way prevent six-week RLHF detours when DPO would ship in six days.",
      paragraphs: [
        [
          s("Complexity comparison is stark. "),
          x(
            "RLHF: SFT + reward model training + PPO loop + reference model + KL tuning + distributed training debugging. DPO: SFT + single DPO training pass on preference pairs.",
            "Engineering surface area for RLHF is 3–5× DPO. Most startups and product ML teams choose DPO or vendor-aligned base models.",
          ),
          s(" RLHF remains foundation-lab territory unless alignment is your core product."),
        ],
        [
          s("Quality: RLHF can win on hard preference landscapes — sometimes. "),
          x(
            "When preferences are nuanced, non-transitive, or require multi-objective reward (helpful + harmless + honest), learned reward models can capture structure pairwise DPO oversimplifies.",
            "Empirically, many product preferences (tone, length, format) DPO fine enough. Benchmark gaps narrow every year.",
          ),
          s(" Run DPO first; escalate to RLHF only if eval plateaus with sufficient preference data."),
        ],
        [
          s("Data requirements differ in shape, not just volume. "),
          x(
            "RLHF benefits from ranked lists (A > B > C) and on-policy samples — model generates candidates, humans rank. DPO needs chosen/rejected pairs — can mine from logs.",
            "PM data strategy: design product UI to capture pairwise preferences early — thumbs, A/B pick — feeds future DPO without a labelling project later.",
          ),
          s(" The alignment technique you can run is the one your data model supports."),
        ],
      ],
      examples: [
        {
          title: "DPO default, RLHF never",
          body: "A 12-person AI company's ML playbook: API base model → LoRA SFT → DPO on preferences. RLHF explicitly out of scope without VP Eng approval. PMs scope alignment work within playbook — prevents science fair projects.",
        },
        {
          title: "RLHF for reward model serving",
          body: "A marketplace used a reward model (RLHF stage 2 only) to score seller-generated listings at inference — not to fine-tune the generator. PM used RM as quality gate. Hybrid: RLHF machinery for scoring, DPO for writer model.",
        },
        {
          title: "Vendor alignment + local DPO",
          body: "Product uses GPT-4o (vendor RLHF) + DPO LoRA on brand voice preferences in post-processing model. PM stacks alignment layers instead of replicating OpenAI's RLHF — sensible division of labour.",
        },
      ],
    }),
    buildSection({
      number: "6.10",
      title: "PM decision lens",
      subtitle: "Matching adaptation technique to failure mode — the fine-tune decision tree",
      take: "Prompt → RAG → instruction tune/LoRA → DPO → (RLHF if lab-scale) is the escalation ladder. Each rung costs more and risks more; PMs hold the ladder and approve climbs only when the eval proves the lower rung failed.",
      why: "Fine-tuning requests are emotional — stakeholders want 'our own model.' The PM decision lens turns emotion into a failure-mode matrix with eval gates, protecting margin and timeline.",
      paragraphs: [
        [
          s("The decision tree starts with diagnosis, not technique. "),
          x(
            "Wrong facts → RAG / data pipeline. Wrong format → prompt engineering → SFT/LoRA. Wrong tone among valid answers → DPO. Pervasive capability gap on proprietary task → LoRA/QLoRA or API fine-tune. Foundation-level alignment → vendor or RLHF lab.",
            "Write the failure mode in the PRD title: 'LoRA for JSON schema compliance on invoice extraction' not 'fine-tune the model.'",
          ),
          s(" If you can't name the eval metric that fine-tuning will move, stop."),
        ],
        [
          s("Eval gates between rungs. "),
          x(
            "Before LoRA: base model + best prompt + RAG fails held-out eval by >X points. Before DPO: SFT model produces valid candidates but wrong preference >Y% of time. Before production: regression eval on general capabilities (MMLU subset, safety prompts).",
            "Golden set size: 200–500 minimum for product decisions; 50 for directional spikes only.",
          ),
          s(" PM signs eval protocol before GPU spins — not after results arrive."),
        ],
        [
          s("Total cost of ownership includes refresh cadence. "),
          x(
            "Fine-tuned weights stale when policies, products, or facts change. LoRA adapters need retrain schedules; RAG indexes need refresh — often cheaper.",
            "Model version pinning: customers on adapter v3 while v5 is live creates support hell. PM plans versioning like API deprecation.",
          ),
          s(" The cheapest fine-tune is the one you didn't need because RAG and prompts were good enough — and that's a win, not a compromise."),
        ],
      ],
      examples: [
        {
          title: "Fine-tune decision memo template",
          body: "Sections: failure mode, eval gap, techniques ruled out and why, chosen technique, data source + size, hyperparameter plan, GPU budget, serving path, rollback plan, refresh cadence. Exec approval required above $5K train cost or customer-facing model change.",
        },
        {
          title: "RAG won, LoRA cancelled",
          body: "Team proposed LoRA for product knowledge. PM ran RAG eval with better chunking first — solved 85% of gap. LoRA deferred indefinitely. Saved 6 eng-weeks. Escalation ladder worked because eval was honest.",
        },
        {
          title: "DPO refresh quarterly on preference drift",
          body: "Brand guidelines update quarterly; DPO adapter retrained on new preference pairs from post-guidance user feedback. PM owns calendar. Fine-tune isn't one-shot — it's a subscription to GPU and labelling.",
        },
      ],
    }),
  ],
  quiz: [
    {
      q: "Your copilot gives wrong policy dates because regulations updated last week. Best first fix?",
      options: [
        "QLoRA fine-tune on last year's policy PDFs",
        "Refresh RAG index with current regulations",
        "DPO on user tone preferences",
        "Full RLHF pipeline",
      ],
      correct: 1,
      correctFeedback:
        "Right. Frequently changing facts belong in retrieval, not weights. Fine-tuning bakes in stale knowledge and needs expensive retraining when policies change.",
      wrongFeedback:
        "Dynamic factual knowledge is RAG's job. Fine-tuning and DPO shape behaviour and preferences, not weekly-updating regulations. Re-read sections 6.2 and 6.6.",
    },
    {
      q: "What does LoRA actually train during fine-tuning?",
      options: [
        "Every parameter in the base model",
        "Small low-rank adapter matrices while base weights stay frozen",
        "Only the tokenizer vocabulary",
        "The vector database embeddings",
      ],
      correct: 1,
      correctFeedback:
        "Exactly. LoRA freezes the base model and learns compact A×B adapters injected into attention layers — dramatically fewer trainable parameters.",
      wrongFeedback:
        "Full fine-tuning updates all weights; LoRA trains small adapter matrices only. Re-read sections 6.2 and 6.3.",
    },
    {
      q: "QLoRA's main benefit over standard LoRA for large models is:",
      options: [
        "Higher answer quality on all tasks",
        "4-bit quantization of frozen base weights so 70B models fit on fewer GPUs",
        "Eliminating the need for training data",
        "Replacing the need for instruction tuning",
      ],
      correct: 1,
      correctFeedback:
        "Right. QLoRA quantizes the frozen base to 4-bit to slash VRAM requirements, enabling large-model adapter training on affordable hardware.",
      wrongFeedback:
        "QLoRA is a memory efficiency technique, not a quality magic bullet. It quantizes base weights while LoRA adapters train in higher precision. Re-read section 6.4.",
    },
    {
      q: "When is DPO more appropriate than classic RLHF for a product team?",
      options: [
        "When building a foundation model from scratch with unlimited ML staff",
        "When you have pairwise preference data and want alignment without reward-model + PPO complexity",
        "When you need to inject frequently updated factual knowledge",
        "When you have no labelled data at all",
      ],
      correct: 1,
      correctFeedback:
        "Right. DPO optimises directly on chosen/rejected pairs — simpler and more stable than full RLHF for most product preference alignment.",
      wrongFeedback:
        "DPO needs preference pairs and suits product-team alignment. RLHF is heavier ML ops; RAG handles facts. Re-read sections 6.7–6.9.",
    },
    {
      kind: "categorize",
      q: "Match each failure mode to the best primary technique.",
      categories: ["RAG", "LoRA / SFT", "DPO"],
      items: [
        { text: "Model doesn't know this week's pricing — data changes daily.", category: 0 },
        { text: "Model answers correctly but ignores required JSON output schema.", category: 1 },
        { text: "Both answers are factual; users prefer shorter, direct tone.", category: 2 },
        { text: "Model lacks access to proprietary docs not in pretraining.", category: 0 },
        { text: "Model needs consistent tool-call syntax for your API.", category: 1 },
        { text: "A/B tests show users prefer variant B's structure over variant A.", category: 2 },
      ],
      correctFeedback:
        "Right. Facts and freshness → RAG. Format, schema, tool patterns → SFT/LoRA. Preferences among valid outputs → DPO.",
      wrongFeedback:
        "Use the escalation ladder: dynamic knowledge is retrieval; behavioural/format gaps are instruction tune/LoRA; stylistic preferences are DPO. Re-read section 6.10.",
    },
    {
      kind: "order",
      q: "Order the typical model adaptation escalation ladder from try first to try last.",
      prompt: "Drag to arrange first (top) to last (bottom).",
      items: [
        "Prompt engineering and structured output settings",
        "RAG for dynamic or proprietary knowledge",
        "LoRA / SFT for stable format and behaviour patterns",
        "DPO for preference alignment on pairwise data",
        "Full RLHF or foundation-level alignment (lab scale)",
      ],
      correctFeedback:
        "Exactly. Each rung costs more — climb only when eval proves the previous rung failed. Most product teams stop at LoRA or DPO on vendor-aligned bases.",
      wrongFeedback:
        "Start cheap and reversible (prompt, RAG), then weight updates (LoRA/SFT), then preferences (DPO), then lab-scale RLHF. Re-read section 6.10.",
    },
  ],
});
