import { buildChapter, buildSection, s, x } from "../concepts-pb4-helpers";

export const chapter01VisionTransformers = buildChapter({
  slug: "pb8-vision-transformers",
  number: 1,
  shortTitle: "Vision Transformers",
  title: "Vision Transformers (ViT)",
  readingMinutes: 28,
  summary:
    "How transformers moved from language to images — and why the same architecture that reads text now understands what it sees",
  keyTakeaway:
    "Vision Transformers treat image patches as tokens and run the same attention mechanism that powers LLMs — unifying vision and language under one architectural family. For PMs, the practical shift is that image understanding is now an API capability (VLMs) with predictable failure modes, not a bespoke CNN pipeline per use case. Ship vision features when the user problem is inherently visual — documents, charts, photos, UI screenshots — and budget for hallucination on spatial reasoning and fine detail.",
  pmCallout:
    "As a PM: don't spec 'computer vision' as a separate engineering track unless you have a narrow, high-volume classification task. Most product teams should evaluate vision-language APIs on golden image sets — document parsing, chart QA, product photo search — and treat ViT/VLM capability as a bought layer with eval gates, not a research project.",
  sections: [
    buildSection({
      number: "1.1",
      title: "What is a Vision Transformer",
      subtitle: "Applying the transformer architecture to images instead of text — the conceptual leap that unified vision and language AI",
      take: "A Vision Transformer (ViT) applies the same self-attention architecture that revolutionised NLP to images: instead of processing words in sequence, it processes fixed-size image patches as a sequence of tokens, letting the model learn relationships between any two regions of an image in a single forward pass.",
      why: "PMs hear 'transformer' and assume text. Understanding that vision now runs on the same architectural family as GPT explains why multimodal products emerged so fast — and why vendor roadmaps converge on unified models rather than separate vision and language stacks.",
      paragraphs: [
        [
          s("The conceptual leap is modality-agnostic attention. "),
          x(
            "In NLP transformers, each token attends to every other token. ViT splits an image into a grid of patches (e.g., 16×16 pixels), linearly embeds each patch into a vector, and runs standard transformer encoder blocks.",
            "Before ViT (2020), vision dominated with CNNs — local filters sliding across pixels. ViT proved that with enough data and scale, pure attention on patches matches or beats CNNs on classification — and scales better to multimodal fusion.",
          ),
          s(" One architecture family now spans text, images, and soon audio/video tokens."),
        ],
        [
          s("ViT changed what 'vision model' means for product teams. "),
          x(
            "Legacy stack: train or buy a CNN for object detection, another for OCR, another for segmentation. Modern stack: a foundation VLM handles diverse visual tasks via prompting or light fine-tuning.",
            "PM implication: feature scoping shifts from 'which CV model per task' to 'which VLM vendor and what eval set per task.' Integration complexity drops; vendor dependency and eval discipline rise.",
          ),
          s(" The product question is no longer 'can we build CV' but 'can this VLM pass our image golden set.'"),
        ],
        [
          s("ViT is the vision backbone inside most VLMs — not always visible to PMs. "),
          x(
            "GPT-4o, Claude, Gemini don't expose 'ViT' in the API — but image encoding typically flows through a ViT or ViT-variant encoder that produces visual tokens fused with text tokens.",
            "You don't buy 'a ViT' for most products; you buy a VLM whose vision encoder is ViT-based. PM diligence focuses on end-task quality, latency, and cost per image — not encoder architecture names.",
          ),
          s(" Know ViT conceptually; ship on VLM eval results."),
        ],
      ],
      examples: [
        {
          title: "Insurance claims — from CNN pipeline to VLM triage",
          body: "Legacy flow: damage detector CNN + separate OCR for license plates + rules engine. PM scoped VLM v2: single API call with photo + 'assess damage and extract plate.' Accuracy on golden set matched pipeline on 89% of cases; 11% edge cases routed to human. Roadmap shifted from maintaining three models to curating image eval sets.",
        },
        {
          title: "E-commerce search — unified embedding space",
          body: "Retailer replaced CNN product classifier with CLIP-style embeddings (ViT encoder). Users could search by photo upload. PM metric: click-through on visual search +2.1pp. Key decision was embedding vendor and refresh cadence, not training a custom ResNet.",
        },
        {
          title: "Exec ask — 'Do we need a vision team?'",
          body: "CTO proposed hiring two CV PhDs. PM reframed: 80% of roadmap was document Q&A and receipt parsing — commodity VLM tasks. Hired one ML engineer for evals and fine-tuning instead. ViT knowledge lived in vendor; team owned golden sets and product integration.",
        },
      ],
    }),
    buildSection({
      number: "1.2",
      title: "How ViT processes an image",
      subtitle: "Dividing an image into patches and treating them as tokens — the spatial-to-sequential translation that makes attention work on pixels",
      take: "ViT converts a 2D image into a 1D sequence: slice the image into non-overlapping patches, flatten each patch into a vector, add positional embeddings so the model knows spatial layout, prepend a class token (like [CLS] in BERT), and feed the sequence through transformer layers where each patch can attend to every other patch.",
      why: "PMs who grasp patch-token translation understand resolution limits, latency scaling, and why tiny text or fine defects disappear — the model literally sees a coarse grid, not infinite pixel precision.",
      paragraphs: [
        [
          s("Patch size determines the model's spatial resolution budget. "),
          x(
            "A 224×224 image with 16×16 patches yields 196 patch tokens (+ class token). Larger patches = fewer tokens = faster/cheaper but coarser detail. High-res document parsing often needs more tokens or multi-scale processing.",
            "PM spec: ask eng for effective resolution on your worst-case input (cramped invoice footer, distant shelf label). If patches are too large, OCR-quality tasks fail regardless of 'smart' the model is.",
          ),
          s(" Token count drives inference cost — patches are the billing unit of attention."),
        ],
        [
          s("Positional embeddings preserve 'where' without convolutions. "),
          x(
            "Unlike CNNs that bake in locality via filters, ViT learns spatial relationships from position encodings added to patch embeddings. At scale this enables global context — a patch in the corner can directly attend to center.",
            "Product upside: holistic document understanding (header linked to footer total). Product risk: without inductive bias of convolutions, smaller ViTs need more data; rely on vendor scale.",
          ),
          s(" Global attention is why VLMs 'get' whole slides — until they don't on dense tables."),
        ],
        [
          s("The class token aggregates image-level representation. "),
          x(
            "Early ViT used a learnable [CLS] token whose final state represents the whole image for classification. VLMs extend this: all visual tokens (or a pooled subset) feed cross-attention with text tokens.",
            "For PMs: you rarely configure this — but when vendors offer 'detail: low vs high' image modes, they're often trading token count and which regions get encoded.",
          ),
          s(" High-detail modes cost more — map to user value per image."),
        ],
      ],
      examples: [
        {
          title: "Medical label OCR — patch size failure",
          body: "VLM missed dosage on 8pt font pill bottles in field photos. Root cause: default image encoding at low token budget — patches spanned multiple characters. PM worked with eng to enable high-res tiling for pharmacy SKU workflow; accuracy 76% → 94%. Lesson: patch resolution is a product setting, not just ML hyperparameter.",
        },
        {
          title: "Warehouse inventory — counting small objects",
          body: "Drone photos of shelf bins: model undercounted screws in bulk bins. Attention saw bin-level patches, not individual parts. PM scoped human-in-loop for high-value SKUs only; deprioritised piece-count vision for commodity hardware. Honest capability ceiling avoided false automation promise.",
        },
        {
          title: "Latency spike — marketing campaign image upload",
          body: "Users uploaded 4K photos; token count exploded, p95 latency 8s → 22s. PM added client-side resize to 1536px max dimension and 'high detail' toggle for power users. Cost per session dropped 40%; NPS recovered. Patch-token math belongs in PRD non-functional requirements.",
        },
      ],
    }),
    buildSection({
      number: "1.3",
      title: "ViT vs convolutional neural networks (CNNs)",
      subtitle: "The previous vision architecture vs the new one — what ViTs do better and where CNNs still compete",
      take: "CNNs excel at local feature extraction with built-in translation invariance and run efficiently on edge hardware; ViTs excel at global context and scale with data, becoming the default for foundation vision encoders. Most PM-facing products now use ViT/VLM backends, but CNNs persist in latency-critical on-device tasks and mature detection pipelines.",
      why: "Stakeholders still reference 'our CNN model' or ask why not 'just use OpenCV.' PMs who can articulate the tradeoff prevent wrong build decisions — e.g., rebuilding a proven on-device CNN because ViT is trendy.",
      paragraphs: [
        [
          s("CNNs encode inductive bias; ViTs encode flexibility. "),
          x(
            "CNNs assume nearby pixels matter — hierarchical edges → shapes → objects. Efficient on smaller datasets. ViTs assume little locality — learn relationships from data. Need more data/compute but cap higher on diverse tasks.",
            "At ImageNet scale ViTs win benchmarks. On a 5K-image proprietary defect set, a fine-tuned EfficientNet may beat a small ViT — PM should eval both if edge deployment matters.",
          ),
          s(" Don't assume ViT wins every bake-off — measure on your images."),
        ],
        [
          s("ViTs shine at tasks needing long-range reasoning. "),
          x(
            "Document layout, chart-to-insight, 'compare left graph vs right table,' fashion outfit coherence — global attention connects distant regions. CNNs needed elaborate multi-stage pipelines for similar holism.",
            "ViT weakness: very high-resolution fine detail without tiling; CNN+specialised heads still common in manufacturing micro-defect detection.",
          ),
          s(" Match architecture era to task — holism vs micron defect."),
        ],
        [
          s("Deployment economics still favour CNNs on device. "),
          x(
            "Mobile face filters, barcode scanners, wake-word adjacent vision — optimised CNNs on NPUs ship for milliwatts. Running full ViT on phone is improving (Apple Intelligence, Gemini Nano) but capability ceiling vs cloud VLM remains.",
            "PM rule: cloud VLM for complex understanding; on-device CNN (or tiny ViT) for real-time preview and privacy-sensitive preview features.",
          ),
          s(" Hybrid architectures are the norm, not ViT-only stacks."),
        ],
      ],
      examples: [
        {
          title: "Manufacturing QA — CNN retained on line",
          body: "Factory line defect detection: 30ms latency requirement on existing CNN on edge GPU. Cloud ViT achieved +3% recall but 400ms round trip. PM kept CNN for pass/fail gate, cloud VLM for disputed case review UI. Right tool per latency tier.",
        },
        {
          title: "Social app filters — CNN not going anywhere",
          body: "AR lenses run MobileNet-class CNNs at 60fps. PM exploring 'describe my outfit' used cloud VLM — separate feature, separate stack. Lesson: user-facing real-time vision often stays CNN; semantic understanding rides VLMs.",
        },
        {
          title: "Bake-off — ViT embeddings beat CNN for search",
          body: "Internal benchmark: CLIP ViT embeddings vs legacy CNN features for visual product search. ViT +2.8pp relevance@10. PM approved migration; eng effort was re-indexing, not retraining CNN. Strategic win where global semantics mattered.",
        },
      ],
    }),
    buildSection({
      number: "1.4",
      title: "Pre-training and fine-tuning ViTs",
      subtitle: "How vision transformers learn general image understanding then specialise — the same transfer learning logic as LLMs",
      take: "ViTs are first pre-trained on massive image datasets (or image-text pairs) to learn general visual features, then fine-tuned on smaller labelled sets for specific tasks — identical transfer learning logic to LLMs, with PM implications for data labelling, eval gates, and vendor vs custom fine-tune decisions.",
      why: "Teams propose 'fine-tune our vision model' without labelling budget or base model strategy. PMs who mirror LLM fine-tune discipline — golden set first, prompt/VLM baseline, then fine-tune — avoid six-month CV side quests.",
      paragraphs: [
        [
          s("Pre-training is the moat — you almost never do it. "),
          x(
            "Google, OpenAI, Meta pre-train ViTs on billions of images or pairs. You consume via API or open weights (SigLIP, DINOv2). True pretraining is for hyperscalers and research labs.",
            "PM language: 'pre-trained encoder' = vendor foundation. Your job is task adaptation, not competing on ImageNet from scratch.",
          ),
          s(" Budget fine-tune and integration, not pretraining clusters."),
        ],
        [
          s("Fine-tuning paths mirror LLM playbooks. "),
          x(
            "Full fine-tune: update all weights — best for large domain shift, expensive. Linear probe / adapter: freeze encoder, train head — cheaper, good for classification. LoRA on vision encoder: middle ground for style/domain.",
            "Same gates as LLM fine-tune: 500–2000 quality labels, offline golden set, canary deploy. Vision fine-tune without eval is how production regressions ship.",
          ),
          s(" If you can't label 500 images, you can't fine-tune responsibly."),
        ],
        [
          s("Synthetic data and augmentation extend small datasets. "),
          x(
            "Rotation, crop, colour jitter for robustness; synthetic receipts or UI mocks for domain gap. VLMs can bootstrap labels via teacher model + human review.",
            "PM risk: synthetic-only fine-tunes fail on real-world lighting and camera noise. Always hold out a 'messy reality' test set from production uploads.",
          ),
          s(" Augmentation is not a substitute for real user images in eval."),
        ],
      ],
      examples: [
        {
          title: "Retail planogram compliance — fine-tune vs prompt",
          body: "PM tested GPT-4V zero-shot on shelf photos: 68% compliance detection. Fine-tuned open ViT on 3K labelled planogram images: 91%. Label cost $42K. ROI positive vs manual store audits. Documented as fine-tune win after prompt ceiling proven.",
        },
        {
          title: "Fine-tune regression — seasonal packaging",
          body: "Holiday packaging fine-tune boosted seasonal SKU recall but dropped standard SKU 7%. No stratified eval. PM instituted seasonal holdout sets and adapter versioning per campaign. Vision fine-tunes need temporal eval like LLMs need version pins.",
        },
        {
          title: "Teacher labelling — bootstrap with VLM",
          body: "Only 200 human labels for rare industrial parts. Team used VLM pre-labels + expert correction to reach 2K in 6 weeks. PM approved with agreement: 100% human review on safety-critical classes. Transfer learning includes label transfer, not just weights.",
        },
      ],
    }),
    buildSection({
      number: "1.5",
      title: "CLIP and contrastive learning",
      subtitle: "Training vision models on image-text pairs — the technique that connected visual and language understanding",
      take: "CLIP (Contrastive Language-Image Pre-training) trains a ViT image encoder and text encoder jointly on millions of image-caption pairs so that matching pairs embed close together and non-matching pairs embed far apart — creating a shared semantic space where 'a photo of a dog' sits near the text 'dog' without explicit classification labels.",
      why: "CLIP is why visual search, zero-shot classification, and multimodal RAG became product-feasible. PMs should understand contrastive learning as the bridge that let products search images with text and vice versa — and why bad captions in your catalog poison retrieval.",
      paragraphs: [
        [
          s("Contrastive learning replaces manual class labels with natural language. "),
          x(
            "Traditional: one-hot labels per ImageNet class. CLIP: predict which of N text snippets matches which image in a batch. Learns open-vocabulary concepts — 'avocado toast' without an avocado_toast class ID.",
            "Product unlock: search SKUs by informal description, moderate UGC with text rules, cluster user uploads by semantic theme.",
          ),
          s(" Your metadata quality becomes training signal if you fine-tune on pairs."),
        ],
        [
          s("Dual encoders enable efficient retrieval at scale. "),
          x(
            "Precompute image embeddings offline; at query time embed text and nearest-neighbour search. Powers visual search, duplicate detection, content recommendation.",
            "PM metrics: recall@k, index refresh SLA, cold-start for new products without images. CLIP-style pipelines are product systems — vector DB + encoder versioning.",
          ),
          s(" Contrastive models turn images into searchable vectors — plan re-index on encoder upgrades."),
        ],
        [
          s("Limitations PMs should expect. "),
          x(
            "CLIP struggles with counting, precise spatial relations ('left of'), fine-grained SKU differentiation (iPhone 14 vs 15), and text-heavy images where OCR logic beats pure embedding.",
            "Mitigation: hybrid retrieval (CLIP + OCR text + metadata filters), reranker with VLM, or task-specific fine-tune on product pairs.",
          ),
          s(" Zero-shot is a starting point — not the production quality bar."),
        ],
      ],
      examples: [
        {
          title: "Marketplace visual search — CLIP retrieval",
          body: "Fashion marketplace indexed 12M listings with CLIP embeddings. Users uploaded inspiration photos; text query optional. PM tracked conversion lift +4.2% on sessions using visual search. Failure mode: near-duplicate fast fashion — added metadata price filter and human style tags for premium tier.",
        },
        {
          title: "Content moderation — text rules on images",
          body: "Trust & safety team embedded meme images and matched against blocklist text concepts ('hate symbol', 'graphic violence'). CLIP zero-shot flagged 83% of held-out set; VLM reranker on borderline improved precision. PM owned policy text list — wording changes moved embedding boundaries.",
        },
        {
          title: "Bad captions hurt fine-tune",
          body: "Retailer auto-captions were SEO-stuffed ('BEST SHIRT SHIRT SALE'). Fine-tuned CLIP on bad pairs degraded visual search. PM prioritised caption cleanup sprint before ML iteration — data hygiene beat architecture change.",
        },
      ],
    }),
    buildSection({
      number: "1.6",
      title: "Vision-language models (VLMs)",
      subtitle: "GPT-4o, Claude, Gemini — how a single model processes both image patches and text tokens in one unified forward pass",
      take: "Vision-language models fuse a ViT (or similar) vision encoder with a large language model backbone so image patches and text tokens share attention layers — enabling a single API call where users attach images and ask questions in natural language, with the model reasoning across both modalities jointly.",
      why: "VLMs are the shipping surface for ViT in most products. PMs spec features against VLM APIs, not raw ViT tensors. Understanding unified forward pass explains latency, context limits, multi-image support, and why 'just add a photo' increases token cost.",
      paragraphs: [
        [
          s("Architecture pattern: encode image → fuse with text → autoregress. "),
          x(
            "Typical flow: vision encoder produces visual tokens; projector maps to LLM hidden dim; concatenated with text tokens; LLM generates answer. Some models (Gemini native multimodal) train fusion from scratch.",
            "PM-facing knobs: max images per request, max image resolution, whether PDF pages count as N images, video frame sampling.",
          ),
          s(" Every image attachment consumes context window — budget like long documents."),
        ],
        [
          s("Vendor differentiation is in fusion quality and training mix — not ViT alone. "),
          x(
            "GPT-4o, Claude 3.5/4, Gemini 1.5/2, Llama 3.2 Vision — different strength on documents, charts, handwriting, multi-image comparison. Benchmarks on YOUR tasks beat public leaderboards.",
            "PM diligence: run golden image set across 2–3 vendors quarterly. Capabilities shift with silent model updates — pin versions in production.",
          ),
          s(" VLM selection is a vendor eval problem with image strata."),
        ],
        [
          s("Multimodal prompts are product UX, not just eng payloads. "),
          x(
            "Users don't say 'encode this patch grid.' They screenshot, photograph, upload PDF. PM designs: crop tools, page selection, camera guidance ('fill the frame'), and when to ask for text fallback.",
            "Poor capture UX defeats SOTA VLMs. Product quality = model + capture + prompt template + eval.",
          ),
          s(" The best VLM fails on blurry thumb photos — guide input quality."),
        ],
      ],
      examples: [
        {
          title: "B2B support — screenshot + question",
          body: "SaaS copilot accepted UI screenshot + 'why is export greyed out?' VLM identified disabled permission state, cited settings path. PM metric: deflection rate on UI confusion tickets +12%. Required image size limits and PII blur on screenshots before upload.",
        },
        {
          title: "Vendor bake-off — invoice parsing",
          body: "PM ran 200 real invoices across GPT-4o, Claude, Gemini. Gemini led on tables; Claude on line-item extraction; GPT-4o on messy scans. Shipped multi-vendor router by doc type. No single VLM won all strata — unified architecture ≠ uniform quality.",
        },
        {
          title: "Multi-image comparison — real estate",
          body: "Feature: compare two listing photos for renovation delta. VLM supported 2-image prompt; PM capped at 2 to control cost. Users asked for 6-image timelines — roadmap item with frame budget and progressive loading. Fusion limits are product constraints.",
        },
      ],
    }),
    buildSection({
      number: "1.7",
      title: "What VLMs actually understand",
      subtitle: "Object recognition, spatial reasoning, document parsing, chart reading — the capabilities and the consistent failure modes",
      take: "Production VLMs reliably handle object/scene recognition, OCR-like text extraction, document and chart summarisation, and coarse spatial descriptions; they consistently fail on precise counting, sub-pixel detail, complex 3D spatial reasoning, niche domain symbols, and adversarial or out-of-distribution imagery — PMs must map features to capability tiers, not marketing demos.",
      why: "Executives see a demo reading a chart and assume omniscient vision. PMs who catalogue failure modes upfront set honest roadmaps, design human fallback, and avoid liability in high-stakes visual decisions (medical, legal, safety).",
      paragraphs: [
        [
          s("Strong zones: recognition, documents, coarse QA. "),
          x(
            "What works: 'what brand is this logo,' menu photo to structured items, slide deck summary, identifying chart trend direction, form field extraction with VLM+schema.",
            "Ship with confidence when error cost is low or human reviews output. Auto-approve only with measured accuracy on production distribution.",
          ),
          s(" Document understanding is the highest ROI enterprise VLM use case today."),
        ],
        [
          s("Weak zones: precision, counting, spatial logic. "),
          x(
            "'How many screws in this bin,' 'is object A exactly 2cm left of B,' medical scan anomaly, distinguishing twins in crowd — unreliable without specialised models and guardrails.",
            "Hallucination manifests as plausible wrong counts, invented axis labels, misread similar characters (0/O). Always show image citation or highlight regions when possible.",
          ),
          s(" Never auto-act on VLM spatial or count answers in high-stakes flows."),
        ],
        [
          s("Domain and distribution shift breaks demos. "),
          x(
            "Training skew toward internet photos: fails on infrared, microscopy, sonar, night vision, heavy compression, non-Latin scripts in wild fonts.",
            "PM eval must include worst-case production imagery — not stock photos. Stratify golden set: lighting, blur, rotation, language, device type.",
          ),
          s(" OOD failure is predictable if you test like users actually capture."),
        ],
      ],
      examples: [
        {
          title: "Chart QA — right trend, wrong number",
          body: "Finance copilot read chart direction correctly but hallucinated Q3 value off by 18%. PM required numeric answers cite extracted table data, not VLM alone on chart images. Hybrid: OCR pipeline + LLM reasoning. Lesson: VLMs summarise visuals; verify numbers structurally.",
        },
        {
          title: "Warehouse pick verification — counting fail",
          body: "VLM counted cartons in photo for pick confirmation; error rate 22% on stacked partial occlusions. PM reverted to barcode scan primary, VLM for damage notes only. Capability mapping prevented shipping automation on wrong primitive.",
        },
        {
          title: "Clinical paperwork — OOD handwriting",
          body: "Hospital intake forms with clinician shorthand: VLM 61% field accuracy vs 94% on typed PDFs. PM segmented flows: typed → auto, handwritten → human transcription queue. Stratified eval exposed demo-only training data bias.",
        },
      ],
    }),
    buildSection({
      number: "1.8",
      title: "ViT scale and capability",
      subtitle: "How bigger vision models produce qualitatively new abilities — the emergent capabilities that appear at scale",
      take: "As ViT and VLM parameter count, training data, and compute scale up, teams observe emergent jumps — better fine-grained recognition, multi-image reasoning, longer document comprehension, and improved robustness — not linear 2% gains. Scale buys new product categories; it also buys cost and latency PMs must model.",
      why: "Roadmaps assume 'next model upgrade fixes it.' PMs who understand scaling laws set realistic expectations — some tasks need bigger models; others need better data capture, fine-tune, or hybrid pipelines, not infinitely larger ViTs.",
      paragraphs: [
        [
          s("Emergence shows up in product features, not just benchmarks. "),
          x(
            "Small VLMs: single object QA. Large VLMs: multi-page PDF reasoning, comparing diagrams across slides, following pointer in UI mock. Capabilities appear past thresholds — planning should assume step changes, not smooth curves.",
            "When small model fails, test large before custom train — but check unit economics at forecast volume.",
          ),
          s(" Upgrade path: prompt → bigger VLM → fine-tune → specialised pipeline."),
        ],
        [
          s("Scale trades cost, latency, and environmental footprint. "),
          x(
            "Bigger vision encoders mean more tokens per image and higher GPU memory. 'High intelligence' image mode can 3× token cost vs default.",
            "PM sensitivity: margin per vision feature at 1M vs 10M monthly images. Cap resolution and detail tier by user plan.",
          ),
          s(" Capability at scale is worthless if COGS destroys the business."),
        ],
        [
          s("Distillation and efficient ViTs compress scale for edge. "),
          x(
            "Mobile VLMs distill large teacher models into smaller encoders — quality gap narrowing for preview tasks. Cloud remains for hard reasoning.",
            "PM hybrid: on-device ViT for capture assist (blur detection, crop suggest); cloud VLM for final understanding. Matches playbook 8 on-device themes.",
          ),
          s(" Not every user needs largest ViT — tier by task difficulty."),
        ],
      ],
      examples: [
        {
          title: "Model upgrade — step change on multi-page PDF",
          body: "Upgrading VLM tier enabled 40-page contract cross-reference without chunking hacks. Task completion +19%. Cost per doc +2.3×. PM introduced 'standard' vs 'deep analysis' user tiers aligned to model size. Scale unlocked feature; pricing captured value.",
        },
        {
          title: "False hope — bigger model didn't fix blur",
          body: "Team escalated to largest VLM on blurry receipt photos; accuracy 58% → 64% — still below ship bar. Root fix was camera UX (focus lock). PM lesson: scale doesn't fix input quality ceiling.",
        },
        {
          title: "Efficient ViT on device — preview gate",
          body: "Photo app ran tiny ViT to detect 'is this a document' before cloud VLM OCR. 40ms on-device; saved 35% cloud calls on casual photos. Scale split across device and cloud by sensitivity.",
        },
      ],
    }),
    buildSection({
      number: "1.9",
      title: "PM decision lens: when to use vision models",
      subtitle: "The user problem signals that tell you an image input will deliver more than a text description ever could",
      take: "Add vision when the user's task is inherently visual — they would naturally photograph, screenshot, or scan rather than type — and when text-only input loses critical information (layout, appearance, spatial context, fine-grained identity). Skip vision when structured text/API data exists, stakes require certified OCR, or latency/privacy blocks image upload.",
      why: "Teams add camera buttons because competitors did. PMs who apply a decision lens avoid multimodal complexity tax on problems that are pure text — and catch high-value vision features competitors miss because they stayed chat-only.",
      paragraphs: [
        [
          s("Positive signals: show don't tell, unstructured visuals, field capture. "),
          x(
            "Good fits: receipt/expense capture, damage reporting, shelf audit, UI troubleshooting via screenshot, visual search, diagram explanation, identity verification with liveness.",
            "User already has an image workflow — you're accelerating, not inventing behaviour.",
          ),
          s(" If users currently email photos to support, vision AI is overdue."),
        ],
        [
          s("Negative signals: data already digital, precision compliance, no camera. "),
          x(
            "Skip vision: ERP has line items as JSON, medical device outputs DICOM with structured report, regulated OCR needs vendor with audit trail, desktop-only accountants on text ledgers.",
            "Forcing image upload adds friction without value. Text/API path is faster and more accurate.",
          ),
          s(" Multimodal for multimodal's sake increases moderation and cost surface."),
        ],
        [
          s("Decision checklist before PRD. "),
          x(
            "1) Can user describe equally well in text? 2) Golden image eval ≥ target? 3) Privacy OK for cloud encode? 4) p95 latency within UX budget? 5) Fallback when model wrong? 6) Abuse surface (CSAM, forged docs)?",
            "All six need answers. Vision features fail on 3–4 more often than text features.",
          ),
          s(" Document go/no-go in ADR with revisit when VLM vendor upgrades."),
        ],
      ],
      examples: [
        {
          title: "Field service — photo-first workflow",
          body: "Technicians already photographed broken parts. PM shipped 'snap + describe issue' VLM triage suggesting parts SKUs. Text-only prior flow had 40% incomplete tickets. Vision matched behaviour; adoption 78% in 30 days.",
        },
        {
          title: "Analytics dashboard — vision rejected",
          body: "PM proposal: screenshot dashboard ask questions. Data already in warehouse — SQL copilot answered with exact numbers. Vision added hallucination risk on charts. Killed feature; saved 2 eng quarters. Negative signal: structured data superior.",
        },
        {
          title: "KYC — hybrid not pure VLM",
          body: "ID verification needed regulatory accuracy. PM combined specialised OCR/liveness vendors for extraction, VLM only for edge-case doc type classification. Vision where certified; VLM where fuzzy. Decision lens → hybrid stack.",
        },
      ],
    }),
  ],
  quiz: [
    {
      q: "What is the core idea behind a Vision Transformer?",
      options: [
        "Sliding convolutional filters across pixels to detect edges",
        "Splitting an image into patches and treating them as a token sequence for self-attention",
        "Storing every pixel as a separate database row for SQL queries",
        "Converting images to ASCII art before NLP processing",
      ],
      correct: 1,
      correctFeedback:
        "Right. ViT embeds image patches as tokens and runs transformer attention — the same family as LLMs, applied to vision.",
      wrongFeedback:
        "ViT uses patches as tokens with self-attention, not convolutions or ASCII tricks. Re-read sections 1.1 and 1.2.",
    },
    {
      q: "When do CNNs still often beat cloud ViTs in production?",
      options: [
        "Multi-page document cross-reference at any scale",
        "Ultra-low-latency on-device detection under tens of milliseconds",
        "Open-vocabulary visual search with text queries",
        "Zero-shot chart trend summarisation",
      ],
      correct: 1,
      correctFeedback:
        "Exactly. CNNs remain strong for edge, real-time, efficiency-critical vision; ViTs/VLMs lead on semantic holism and scale.",
      wrongFeedback:
        "CNNs win on latency-critical edge tasks. ViTs/VLMs lead documents, search, and global reasoning. Re-read section 1.3.",
    },
    {
      q: "What does CLIP primarily enable?",
      options: [
        "Training LLMs on text alone without images",
        "A shared embedding space where images and text descriptions align semantically",
        "Guaranteed perfect OCR on all handwriting",
        "Replacing all need for vector databases",
      ],
      correct: 1,
      correctFeedback:
        "Right. CLIP's contrastive training aligns image and text embeddings — powering visual search and zero-shot recognition.",
      wrongFeedback:
        "CLIP connects image and text in embedding space via contrastive learning. Re-read section 1.5.",
    },
    {
      kind: "categorize",
      q: "Match each task to the most appropriate approach.",
      categories: ["Cloud VLM API", "CLIP-style retrieval", "On-device CNN", "Hybrid pipeline"],
      items: [
        { text: "Screenshot UI + 'why is this button disabled?'", category: 0 },
        { text: "Search 10M product photos by text query", category: 1 },
        { text: "60fps AR face filter on phone", category: 2 },
        { text: "Invoice: OCR numbers + VLM layout summary", category: 3 },
        { text: "Factory line 30ms defect gate", category: 2 },
        { text: "Moderate meme images against text policy concepts", category: 1 },
      ],
      correctFeedback:
        "Right. Match task to latency, scale, and precision — most enterprise doc flows are hybrid.",
      wrongFeedback:
        "VLMs for semantic QA, CLIP for retrieval, CNNs for edge speed, hybrid when numbers must be exact. Re-read sections 1.3, 1.5, 1.7, 1.9.",
    },
    {
      kind: "order",
      q: "Order the PM vision feature decision sequence.",
      prompt: "Drag to arrange the recommended evaluation flow.",
      items: [
        "Confirm the user problem is inherently visual vs text/API",
        "Build stratified golden image eval from real uploads",
        "Test prompt/VLM baseline across vendors",
        "Assess latency, privacy, and cost per image at forecast scale",
        "Define fallback and moderation before launch",
      ],
      correctFeedback:
        "Exactly. Problem fit → eval → vendor test → economics → safety fallback.",
      wrongFeedback:
        "Start with problem fit and golden sets before vendor bake-offs and launch gates. Re-read sections 1.7 and 1.9.",
    },
    {
      q: "Which VLM failure mode is most important for PMs to plan around?",
      options: [
        "Perfect accuracy on all stock photos in marketing demos",
        "Hallucinated counts, numbers, and fine spatial relations on messy real captures",
        "Inability to process any text tokens in the same request",
        "Guaranteed worse performance than random guessing on documents",
      ],
      correct: 1,
      correctFeedback:
        "Right. Precise counting, numeric extraction, and spatial logic on real-world images are consistent VLM weak spots — design fallbacks accordingly.",
      wrongFeedback:
        "VLMs fail on precision tasks and OOD captures, not on basic multimodal fusion. Re-read section 1.7.",
    },
  ],
});
