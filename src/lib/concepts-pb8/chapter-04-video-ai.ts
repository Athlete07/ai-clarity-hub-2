import { buildChapter, buildSection, s, x } from "../concepts-pb4-helpers";

export const chapter04VideoAi = buildChapter({
  slug: "pb8-video-ai",
  number: 4,
  shortTitle: "Video AI",
  title: "Video AI",
  readingMinutes: 28,
  summary:
    "The hardest modality — what models can do with moving images today and where the capability frontier actually sits",
  keyTakeaway:
    "Video AI compounds every difficulty of image AI with time — temporal coherence, compute scale, and data hunger. PMs who treat video as 'images plus frames' underestimate cost and overestimate quality. Map features to maturity tiers: perception and search are production-ready; generation and long-form reasoning are emerging; character consistency across minutes is still research-grade.",
  pmCallout:
    "As a PM: before you scope a video feature, answer three questions — how many frames per second of understanding, what happens when the model misreads motion, and whether users need generation or comprehension. Most video roadmaps fail because they conflate all three.",
  sections: [
    buildSection({
      number: "4.1",
      title: "Why video is harder than images",
      subtitle: "Temporal coherence, computational scale, and vastly larger data requirements — the compounding difficulty of adding time",
      take: "Video adds a temporal dimension that multiplies compute, storage, and model complexity. A single minute of 1080p video at 30fps contains 1,800 frames — each carrying spatial information plus relationships across time. Models must track object persistence, motion, causality, and scene changes while processing orders of magnitude more data than a still image.",
      why: "PMs who price video features like image features blow budgets and miss launch windows. Understanding why video is harder prevents scoping 'upload a video, get instant summary' when the infrastructure reality is batch jobs, frame sampling, and GPU clusters.",
      paragraphs: [
        [
          s("Compute scales linearly with duration — and often worse. "),
          x(
            "A 4K image might be 8MB and one forward pass. A 10-minute video is thousands of frames — even at 1fps sampling, you're running hundreds of inference passes or one enormous attention computation.",
            "Frame sampling (1fps, keyframes only) is a product tradeoff: cheaper but may miss brief events. PMs specify sampling strategy in the PRD.",
          ),
          s(" Video cost is duration × resolution × frame rate — not a flat per-upload fee."),
        ],
        [
          s("Temporal coherence is a distinct failure mode. "),
          x(
            "Image models can hallucinate a wrong object once. Video models can hallucinate inconsistently — a person wears a red shirt in frame 10 and blue in frame 11 with no scene change.",
            "Users notice temporal inconsistency faster than single-frame errors. It's the uncanny valley of video AI.",
          ),
          s(" Quality bars for video include cross-frame consistency, not just per-frame accuracy."),
        ],
        [
          s("Training data for video is scarcer and messier. "),
          x(
            "Image datasets (ImageNet, LAION) are curated at billion scale. Labelled video with temporal annotations — actions, events, object tracks — is orders of magnitude smaller and noisier.",
            "Models trained on internet video inherit camera motion, editing cuts, and watermark noise. Domain-specific video (factory floors, surgical footage) often lacks pretraining coverage.",
          ),
          s(" Expect lower zero-shot quality on niche video domains than on generic images."),
        ],
      ],
      examples: [
        {
          title: "Sports highlight app — underestimated frame cost",
          body: "PM scoped 'AI highlights from full game footage' as a 2-week feature. Engineering revealed: 90-minute game at 2fps sampling = 10,800 frames; GPU cost $4.50/game at launch scale. PM pivoted to key-moment detection on broadcast timestamps first — shipped in 3 weeks at 1/10th the compute.",
        },
        {
          title: "Security camera analytics — temporal gap",
          body: "Vendor demo showed perfect person detection on still frames. Production on 24fps streams: model detected person in frame 100, lost them in frame 101, re-detected in frame 105 as 'new person.' PM required temporal tracking layer — added 6 weeks but cut false alerts 70%.",
        },
        {
          title: "EdTech lecture summarisation — duration ceiling",
          body: "Students uploaded 3-hour lectures. Model context couldn't ingest full video; team chunked into 5-minute segments, losing cross-segment references ('as I said earlier'). PM set v1 scope: lectures under 45 minutes with chapter markers. Honest ceiling beat broken long-form promise.",
        },
      ],
    }),
    buildSection({
      number: "4.2",
      title: "Video understanding models",
      subtitle: "Classifying, captioning, and answering questions about video content — the perception side of video AI",
      take: "Video understanding models extract semantic information from footage: classification (what is happening), captioning (describing scenes in text), object detection and tracking, action recognition, and video question answering. Architectures include frame-level CNNs/ViTs with temporal aggregation, video transformers that attend across space and time, and multimodal models that ingest sampled frames plus audio.",
      why: "Understanding is the production-ready side of video AI — search, moderation, summarisation, and analytics. PMs who start with understanding before generation build features users trust; generation-first roadmaps often stall on quality.",
      paragraphs: [
        [
          s("Frame sampling is the first architectural fork. "),
          x(
            "Uniform sampling (1 frame per second), keyframe extraction, or scene-change detection — each trades cost against coverage.",
            "Action recognition needs higher fps; meeting summarisation may need only scene changes. PM specifies the event granularity the product promises.",
          ),
          s(" Wrong sampling strategy misses the events users care about."),
        ],
        [
          s("Audio is half the signal in many videos. "),
          x(
            "Multimodal video understanding fuses visual frames with transcribed speech and ambient audio. A lecture's content lives in speech; a product demo's value may be in what's shown while the narrator talks.",
            "Whisper + vision model is a common stack; unified models (GPT-4o, Gemini) process both natively.",
          ),
          s(" PMs scope audio inclusion explicitly — silent-video-only understanding loses most meeting and tutorial content."),
        ],
        [
          s("Output format determines downstream product shape. "),
          x(
            "Classification → tags and filters. Captioning → search and accessibility. Q&A → interactive exploration. Structured extraction → timestamps + entities JSON.",
            "PM picks output schema before model selection — 'summary paragraph' vs '{scenes: [{start, end, description, objects[]}]}' are different products.",
          ),
          s(" Understanding models are middleware; the product is what you do with their output."),
        ],
      ],
      examples: [
        {
          title: "YouTube Content ID — classification at planetary scale",
          body: "Google's video understanding stack fingerprints and classifies uploads for copyright matching — the canonical production video perception system. PM lesson: understanding at scale requires aggressive sampling, specialised models per task, and human appeal for edge cases — not one general model on full resolution.",
        },
        {
          title: "Loom AI summaries — captioning as product",
          body: "Loom generates chapter titles and summaries from screen recordings by understanding visual changes plus narration. PM scoped v1 to English screen recordings under 10 minutes. Understanding stack: scene detection + STT + LLM synthesis. Shipped perception pipeline before any generation feature.",
        },
        {
          title: "TikTok moderation — multi-model understanding",
          body: "Short-video platforms run parallel understanding models: object detection (weapons), action classification (dangerous stunts), OCR (text overlays), audio classification (music rights). PM coordinates policy thresholds per model — no single 'understand video' call. Understanding is a pipeline, not a button.",
        },
      ],
    }),
    buildSection({
      number: "4.3",
      title: "Temporal reasoning",
      subtitle: "Understanding what happens before and after — the capability that separates strong video models from frame processors",
      take: "Temporal reasoning means models understand causality, sequence, and change over time — not just what's in each frame independently. 'Did the person pick up the object before leaving?' requires tracking state across seconds. Strong video models maintain object identity, infer actions from motion, and reason about event order.",
      why: "Frame-by-frame captioning produces descriptions; temporal reasoning produces narratives. PMs selling 'video intelligence' need to know whether their use case requires the latter — it's a harder bar and a different eval.",
      paragraphs: [
        [
          s("Object permanence and tracking are prerequisites. "),
          x(
            "A model that re-identifies the same person across frames can answer 'what did she do?' A model that treats each frame independently produces disconnected observations.",
            "Tracking APIs (ByteTrack, DeepSORT) or end-to-end video transformers handle this differently. PM asks: do we need entity persistence?",
          ),
          s(" Without tracking, 'count how many times X happened' is unreliable."),
        ],
        [
          s("Action recognition spans time windows, not instants. "),
          x(
            "'Falling' is a motion pattern over 0.5–2 seconds. 'Signing a document' may take 30 seconds with multiple sub-actions.",
            "Models use temporal receptive fields — 8-frame clips, 32-frame clips — that define what actions they can detect.",
          ),
          s(" PM maps user questions to minimum temporal window the model must reason over."),
        ],
        [
          s("Causal and counterfactual questions are the frontier. "),
          x(
            "'Would the ball have gone in if the defender hadn't touched it?' requires physical reasoning most models lack.",
            "Current production systems handle descriptive temporal Q&A ('what happened after the whistle?') better than predictive causal Q&A.",
          ),
          s(" PMs label causal reasoning features as experimental with explicit accuracy caveats."),
        ],
      ],
      examples: [
        {
          title: "Warehouse safety — action recognition over clips",
          body: "PM scoped 'detect forklift near-misses' from CCTV. Frame-level object detection missed near-misses; temporal action model on 2-second clips caught 89% of events. Lesson: safety analytics need clip-level temporal models, not per-frame labels.",
        },
        {
          title: "Sports analytics — event sequencing",
          body: "Soccer app promised 'build-up play analysis.' Frame captions described players individually; couldn't chain passes. Added temporal graph model linking entities across 5-second windows. PM reset marketing from 'AI understands football' to 'AI tags pass sequences' — honest capability boundary.",
        },
        {
          title: "Legal deposition review — before/after questions",
          body: "Attorneys asked 'did the witness change their answer after the objection?' Requires comparing statements across minutes. GPT-4o on sampled frames + transcript handled simple cases; complex causal questions failed 40%. PM scoped human review for temporal causation queries — didn't promise autonomous legal reasoning.",
        },
      ],
    }),
    buildSection({
      number: "4.4",
      title: "Video embeddings",
      subtitle: "Representing video semantics as vectors — enabling search, recommendation, and retrieval across video libraries",
      take: "Video embedding models compress footage into fixed-dimension vectors that capture semantic content — enabling similarity search ('find clips like this'), clustering, recommendation, and retrieval-augmented video Q&A. Approaches include embedding individual frames and pooling, clip-level embeddings (VideoCLIP, InternVideo), and joint audio-visual embeddings.",
      why: "Embeddings turn video libraries from unsearchable archives into queryable assets. PMs building 'find the moment when…' or 'recommend similar content' features should think embedding-first — it's more production-proven than asking an LLM to watch everything.",
      paragraphs: [
        [
          s("Granularity choice: frame, clip, or scene embeddings. "),
          x(
            "Frame embeddings enable fine-grained search but noisy results. Clip embeddings (4–16 seconds) match how users think about moments. Scene embeddings align with narrative structure.",
            "Many systems embed at clip level with timestamp metadata — search returns time ranges, not whole videos.",
          ),
          s(" PM specifies search granularity in the PRD — 'find the video' vs 'find the 10-second moment.'"),
        ],
        [
          s("Multimodal embeddings unify text queries and video content. "),
          x(
            "CLIP-style contrastive training on video-text pairs lets users search with natural language: 'sunset timelapse over city skyline.'",
            "Quality depends on training data coverage — niche domains (medical procedures, industrial equipment) may have weak text-video alignment.",
          ),
          s(" Text-to-video search is the highest-ROI embedding product pattern."),
        ],
        [
          s("Index economics mirror vector DB lessons from text RAG. "),
          x(
            "1M hours of video at 1 clip embedding per 10 seconds = 360M vectors. Storage, indexing, and query cost scale accordingly.",
            "Tiered storage: hot index for recent content, cold archive with on-demand embedding for back catalogue.",
          ),
          s(" PM models embedding cost per hour ingested before promising universal search."),
        ],
      ],
      examples: [
        {
          title: "Google Video Intelligence — enterprise video search",
          body: "GCP's video API extracts labels, shots, and speech, enabling search across corporate video archives. PM pattern: ingest pipeline embeds on upload; search is sub-second on millions of hours. Product value is discovery, not generation.",
        },
        {
          title: "Frame.io AI search — creative workflow embeddings",
          body: "Adobe's Frame.io lets editors search footage by visual and spoken content. Embedding clip-level vectors with transcript text enabled 'find all takes where actor mentions the product.' PM focused on editor workflow latency — search under 2s on 500-hour projects.",
        },
        {
          title: "Security footage retrieval — false positive cost",
          body: "PM built 'find person in red jacket' across 30 days of CCTV. Embedding search returned semantically similar colours but wrong people 25% of the time. Added metadata filters (camera, time range) before semantic rank. PM lesson: video embeddings need structured filters for high-stakes retrieval.",
        },
      ],
    }),
    buildSection({
      number: "4.5",
      title: "Video generation",
      subtitle: "Sora, Runway, Kling, Veo — the architecture of video diffusion models and what they currently produce reliably",
      take: "Video generation extends image diffusion to the temporal dimension — denoising latent representations across frames while maintaining motion coherence. Models like OpenAI Sora, Runway Gen-3, Kling, and Google Veo generate short clips (typically 5–20 seconds) from text, image, or video prompts. Quality varies wildly by scene complexity, human motion, and text rendering.",
      why: "Video generation is the highest-hype, highest-risk modality. PMs must separate demo clips from production reliability — most platforms produce impressive landscapes and slow pans; fast human action, readable text, and multi-shot narratives remain inconsistent.",
      paragraphs: [
        [
          s("Diffusion over spacetime latents is the dominant architecture. "),
          x(
            "Models learn to denoise video latents — compressed representations spanning multiple frames jointly. 3D convolutions or temporal attention layers enforce frame-to-frame consistency.",
            "Compute per generated second dwarfs image generation — a 10-second clip may cost $0.50–$2.00 on API platforms.",
          ),
          s(" PM unit economics start with cost per second of output, not per image."),
        ],
        [
          s("Prompt engineering for video is more constrained than for images. "),
          x(
            "Short, single-scene prompts work best: 'aerial shot of waves on beach at golden hour, slow pan left.' Multi-action narratives ('person enters, picks up phone, reads message, reacts') fail frequently.",
            "Camera motion keywords (dolly, pan, tracking shot) are well-supported; complex character dialogue scenes are not.",
          ),
          s(" PMs provide prompt templates per use case — not open-ended generation."),
        ],
        [
          s("Duration and resolution caps define product boundaries. "),
          x(
            "Most APIs cap at 5–20 seconds and 720p–1080p. Extending duration compounds consistency failures.",
            "Product pattern: generate short clips, stitch in editor — not one-shot long-form generation.",
          ),
          s(" v1 scope should match platform caps, not user imagination of feature films."),
        ],
      ],
      examples: [
        {
          title: "E-commerce product videos — image-to-video wins",
          body: "PM tested text-to-video for product demos; results inconsistent on product details. Image-to-video from hero product shot produced reliable 5-second rotation clips. Shipped image-to-video only for v1 — 3× higher merchant satisfaction than text-to-video.",
        },
        {
          title: "Marketing agency — Runway API integration",
          body: "Agency built 'generate B-roll from script' tool. Text-to-video worked for landscapes and abstract backgrounds; failed on branded products with logos. PM scoped tool to 'mood B-roll' category only — explicit exclusion of product shots with text.",
        },
        {
          title: "Social app video stickers — short loop constraint",
          body: "App added 3-second looping video stickers from prompts. Short duration masked consistency issues; users loved abstract loops. PM capped at 3 seconds and 480p — quality acceptable, cost $0.08/sticker. Longer clips would have 3× failure rate per internal eval.",
        },
      ],
    }),
    buildSection({
      number: "4.6",
      title: "Consistency challenges in video generation",
      subtitle: "Why generated characters change appearance across frames — the core unsolved problem of video generation quality",
      take: "Temporal consistency — maintaining the same face, object, clothing, and scene layout across frames — is video generation's hardest open problem. Models drift: characters morph, objects appear and disappear, lighting shifts unnaturally. Mitigations include reference image anchoring, temporal attention constraints, post-hoc face-swap correction, and limiting motion complexity.",
      why: "Users forgive a weird hand in a still image; they abort a video where the protagonist's face changes mid-clip. PMs who don't design around consistency failures ship features that look broken, not creative.",
      paragraphs: [
        [
          s("Identity drift is the most visible failure. "),
          x(
            "Faces are high-sensitivity — humans detect micro-changes instantly. Generated characters can shift age, ethnicity, or features across a 10-second clip.",
            "Mitigations: anchor on reference image (image-to-video), use face-consistent LoRA, or limit to non-human subjects.",
          ),
          s(" Any product featuring human characters needs a consistency strategy or strict scope limits."),
        ],
        [
          s("Object permanence breaks under motion. "),
          x(
            "A generated cup on a table may vanish when the camera pans. Clothing patterns shift. Background elements morph.",
            "Simpler scenes (single subject, static background, slow camera) produce dramatically better consistency.",
          ),
          s(" PM complexity budget: fewer moving elements = higher ship confidence."),
        ],
        [
          s("Multi-shot narrative is research-grade. "),
          x(
            "Maintaining the same character across scene cuts — different angles, lighting, locations — is beyond reliable production today.",
            "Workarounds: generate shots independently and use character reference models; or limit to single continuous shots.",
          ),
          s(" 'Generate a 60-second ad with consistent spokesperson' is not a v1 spec."),
        ],
      ],
      examples: [
        {
          title: "AI avatar startup — consistency killed conversion",
          body: "Startup generated spokesperson videos from text. 40% of clips had face drift visible in user testing. PM pivoted to photo-anchored image-to-video with fixed avatar library — consistency 95%+. Open generation deprioritised to roadmap year 2.",
        },
        {
          title: "Fashion brand — clothing pattern drift",
          body: "Generated model walking in branded dress; plaid pattern morphed across frames. Brand team rejected 80% of outputs. PM scoped to static pose lookbook videos (minimal motion) — pattern consistency acceptable. Motion-heavy runway shots remained manual.",
        },
        {
          title: "Post-production face correction pipeline",
          body: "Studio built gen-AI B-roll with automatic face-swap correction using reference still. Added $0.15/clip and 30s processing but salvaged 70% of otherwise unusable clips. PM priced correction into unit economics — raw generation alone wasn't shippable.",
        },
      ],
    }),
    buildSection({
      number: "4.7",
      title: "Video editing with AI",
      subtitle: "Inpainting, outpainting, style transfer, and object removal at the video level — the editing workflow being reinvented",
      take: "AI video editing applies generative and understanding models to modify existing footage: inpainting (remove/replace objects), outpainting (extend frame boundaries), style transfer, colour grading, auto-reframe, background replacement, and AI-assisted cuts. These tools augment editors rather than replace production — and often work more reliably than from-scratch generation because source frames anchor consistency.",
      why: "Edit-in-place is the near-term product opportunity in video AI — lower risk than generation, clear ROI for creators and enterprises, and failure modes are 'reject this edit' not 'throw away the whole clip.'",
      paragraphs: [
        [
          s("Object removal and inpainting are the most mature edit operations. "),
          x(
            "Models fill masked regions across frames using temporal context. Runway, Adobe Firefly, and DaVinci Resolve integrate this natively.",
            "Works best on static cameras and simple backgrounds; moving cameras with complex occlusion still artifact.",
          ),
          s(" PM scope: 'remove logo from interview' yes; 'remove person from crowd chase scene' not yet."),
        ],
        [
          s("Auto-reframe and smart crop leverage understanding, not generation. "),
          x(
            "Detect subject, track across frames, crop to vertical for social — pure understanding + geometry, no diffusion needed.",
            "High reliability, low cost, immediate creator value. Often the first AI video feature to ship.",
          ),
          s(" Understanding-based edits ship faster than generative edits."),
        ],
        [
          s("Generative fill across time requires preview and undo. "),
          x(
            "Editors need frame-by-frame preview, mask refinement, and non-destructive layers — AI edit as a suggestion, not irreversible change.",
            "PM requirements: preview latency under 10s per edit region, undo stack, export without AI watermark if paid tier.",
          ),
          s(" Edit UX is as important as edit model quality for adoption."),
        ],
      ],
      examples: [
        {
          title: "CapCut auto-reframe — understanding-only win",
          body: "CapCut's AI reframe for TikTok conversion tracks subjects and crops horizontal to vertical. No generative pixels — pure detection + crop. PM shipped in 4 weeks; 60% of exports use it. Lesson: highest-adoption video AI is often not generative.",
        },
        {
          title: "Adobe Premiere object removal — pro workflow integration",
          body: "Firefly video inpainting integrated as effect layer in Premiere timeline. Editors mask object, preview fill, adjust. PM priced as Creative Cloud premium — pros pay for undo and keyframe control, not one-click magic.",
        },
        {
          title: "Real estate virtual staging — edit vs generate",
          body: "PM chose furniture overlay via video inpainting on empty room walkthroughs over generating room from scratch. Anchored to real footage = consistent lighting and geometry. 85% agent satisfaction vs 50% for full generation approach.",
        },
      ],
    }),
    buildSection({
      number: "4.8",
      title: "Long-form video understanding",
      subtitle: "Processing hours of content — the context window problem applied to video and the retrieval patterns that work around it",
      take: "Long-form video (hours) exceeds any model's context window. Production systems use hierarchical processing: chunk into scenes, embed and index clips, transcribe audio, extract keyframes, summarise segments, then use RAG-style retrieval to answer questions or build summaries. No model 'watches' a 3-hour film in one pass.",
      why: "PMs promising 'upload any video, ask anything' without a chunking and retrieval architecture are promising magic. Long-form is a systems design problem — the PM owns the segmentation strategy and what 'global understanding' means in the product.",
      paragraphs: [
        [
          s("Segmentation is the foundation layer. "),
          x(
            "Scene detection, speaker diarisation, chapter markers, and slide transitions create natural chunk boundaries.",
            "Arbitrary fixed windows (every 5 minutes) lose semantic coherence. PM defines segmentation signals per content type: lectures use slide changes; podcasts use speaker turns.",
          ),
          s(" Bad chunks produce bad summaries — segmentation is a product quality decision."),
        ],
        [
          s("Hierarchical summarisation maps to user mental models. "),
          x(
            "Level 1: whole-video abstract. Level 2: chapter summaries. Level 3: timestamped key moments. Users navigate down, not up.",
            "Map-reduce pattern: summarise chunks, then summarise summaries. PM specifies depth levels in UX.",
          ),
          s(" Flat single-paragraph summaries of 2-hour content satisfy nobody."),
        ],
        [
          s("Retrieval enables interactive long-form Q&A. "),
          x(
            "Embed chunks; user question retrieves top-k segments; LLM answers from retrieved clips only.",
            "Citations with timestamps are mandatory — 'answer + jump to moment' is the product, not prose alone.",
          ),
          s(" Long-form video Q&A is RAG with timestamps — borrow PB4 patterns."),
        ],
      ],
      examples: [
        {
          title: "Zoom AI Companion — meeting-length hierarchy",
          body: "Zoom summarises hour-long meetings via transcription + chunk summarisation + topic extraction. Doesn't process video frames for standard meetings — audio carries 90% of signal. PM lesson: for talking-head content, audio-first long-form beats video-first.",
        },
        {
          title: "Coursera lecture search — chunked RAG",
          body: "Students query across 10-hour courses. System segments by instructor slide changes, embeds transcript + keyframes, retrieves relevant 2-minute clips. PM metric: 'did the cited clip answer the question?' — 82% yes rate. Global 'watch and understand' was never attempted.",
        },
        {
          title: "Legal video discovery — hour limits and human review",
          body: "PM scoped deposition review to videos under 2 hours with mandatory timestamp citations. Longer depositions routed to paralegal chunking. System never claimed full-video comprehension — retrieval + citation model matched legal workflow.",
        },
      ],
    }),
    buildSection({
      number: "4.9",
      title: "PM decision lens: video AI use cases by maturity",
      subtitle: "What's production-ready now, what's emerging, and what's still research — mapping capability to roadmap timing",
      take: "Map video features to maturity tiers before roadmap commitment. Production-ready now: clip search, auto-captioning, scene detection, short-form summarisation, auto-reframe, moderation. Emerging (pilot with caveats): video Q&A on chunked content, image-to-video product clips, object removal edits. Research-grade: long-form consistent character generation, multi-shot narrative, real-time video understanding on edge devices.",
      why: "Video roadmaps fail from ambition mismatch — shipping research-tier features as GA destroys trust. Maturity mapping lets PMs sequence bets: revenue from ready tiers funds R&D on emerging ones.",
      paragraphs: [
        [
          s("Score each feature on four axes. "),
          x(
            "Model reliability (% acceptable output), cost per minute of video, latency (real-time vs batch), and moderation risk (synthetic humans, copyrighted content).",
            "Features failing two or more axes stay in pilot — not GA.",
          ),
          s(" Four-axis scorecard beats 'competitor has it' roadmap pressure."),
        ],
        [
          s("Match modality to user job. "),
          x(
            "Discovery job → embeddings and search. Comprehension job → summarisation and Q&A. Creation job → generation and editing. Different jobs, different maturity curves.",
            "Don't sell generation when the user's job is findability.",
          ),
          s(" Job-to-modality fit prevents building the wrong video feature."),
        ],
        [
          s("Phase gates with eval on real user footage. "),
          x(
            "Pilot: 50 users, 500 hours of domain-specific video, human review of outputs. GA gate: ≥80% task completion on domain eval set.",
            "Demo footage from model vendor is not your eval set.",
          ),
          s(" Domain footage eval is non-negotiable for video — generic benchmarks mislead."),
        ],
      ],
      examples: [
        {
          title: "Media company maturity map — sequenced 18-month roadmap",
          body: "PM tiered features: Q1 shipped captioning + search (tier 1). Q3 piloted chunk Q&A (tier 2). Tier 3 generation limited to internal B-roll tool. Board approved roadmap because each tier had revenue or cost-save justification — not hype.",
        },
        {
          title: "Startup killed real-time video analysis",
          body: "Founder wanted live coaching during video calls. Temporal reasoning on 30fps stream required GPU fleet — $2/user/month inference at scale. PM modelled unit economics; feature killed. Async upload analysis shipped instead at $0.15/user/month. Maturity + economics gate saved company.",
        },
        {
          title: "Enterprise pilot contract — explicit tier-2 caveats",
          body: "Sales wanted GA label on video Q&A. PM signed pilot SOW: 'beta accuracy, human verification required, videos under 60 minutes.' Customer accepted with SLA exclusions. Honest tier labeling closed deal without post-pilot churn from overpromising.",
        },
      ],
    }),
  ],
  quiz: [
    {
      q: "Why is video AI fundamentally more expensive than image AI at the same resolution?",
      options: [
        "Video files use different file formats that models can't compress.",
        "Video adds a temporal dimension — thousands of frames per minute, each requiring processing plus cross-frame coherence.",
        "Image models are always smaller than video models.",
        "Video AI doesn't use GPUs.",
      ],
      correct: 1,
      correctFeedback:
        "Right. Time multiplies compute — duration × frame rate × resolution drives cost, plus temporal consistency requirements.",
      wrongFeedback:
        "Video cost scales with frames and temporal processing, not just resolution. Re-read section 4.1.",
    },
    {
      q: "What is the most production-ready category of video AI today?",
      options: [
        "Multi-shot narrative generation with consistent characters.",
        "Video understanding — classification, captioning, search, and moderation.",
        "Real-time causal reasoning on unlimited-length streams.",
        "Generating feature-length films from text prompts.",
      ],
      correct: 1,
      correctFeedback:
        "Exactly. Understanding and search are proven; generation consistency and long-form reasoning remain emerging.",
      wrongFeedback:
        "Perception and search are production-ready; generation and causal reasoning are not. Re-read sections 4.2 and 4.5.",
    },
    {
      q: "What is the core unsolved problem in AI video generation?",
      options: [
        "Generating any pixels at all.",
        "Temporal consistency — maintaining the same characters, objects, and scenes across frames.",
        "Converting video to audio.",
        "Storing video files in the cloud.",
      ],
      correct: 1,
      correctFeedback:
        "Right. Identity drift and object permanence breaks are the dominant quality failures in generated video.",
      wrongFeedback:
        "Consistency across frames is the hard problem — not basic generation. Re-read section 4.6.",
    },
    {
      kind: "categorize",
      q: "Match each video AI approach to its primary product use case.",
      categories: ["Search & discovery", "Comprehension", "Generation", "Editing"],
      items: [
        { text: "Clip-level embeddings with text query.", category: 0 },
        { text: "Hierarchical summarisation with timestamps.", category: 1 },
        { text: "Image-to-video 5-second product rotation.", category: 2 },
        { text: "Object removal inpainting on existing footage.", category: 3 },
        { text: "Scene detection for content moderation.", category: 1 },
        { text: "Auto-reframe for vertical social export.", category: 3 },
      ],
      correctFeedback:
        "Right. Search, comprehension, generation, and editing are distinct product lanes with different maturity levels.",
      wrongFeedback:
        "Map each approach to search, comprehension, generation, or editing. Re-read sections 4.4–4.7.",
    },
    {
      kind: "order",
      q: "Put the long-form video understanding pipeline in the correct processing order.",
      prompt: "Drag to arrange from first step (top) to last (bottom).",
      items: [
        "Segment video into scenes or chunks.",
        "Transcribe audio and extract keyframes.",
        "Embed chunks and index for retrieval.",
        "Generate hierarchical summaries per segment.",
        "Answer user questions via retrieval + cited timestamps.",
      ],
      correctFeedback:
        "Exactly. Segment → extract → embed → summarise → retrieve-on-query is the production long-form pattern.",
      wrongFeedback:
        "Long-form video uses chunking, indexing, and RAG — not single-pass full watch. Re-read section 4.8.",
    },
    {
      q: "When should a PM choose image-to-video over text-to-video for a product feature?",
      options: [
        "Always — text-to-video is never useful.",
        "When consistency and subject fidelity matter — a reference image anchors appearance across frames.",
        "Only when the product has no budget for GPUs.",
        "When users don't have images, only text descriptions.",
      ],
      correct: 1,
      correctFeedback:
        "Right. Image anchoring dramatically improves consistency — the most reliable current generation pattern.",
      wrongFeedback:
        "Image-to-video anchors identity and product detail better than pure text prompts. Re-read sections 4.5 and 4.6.",
    },
  ],
});
