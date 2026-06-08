import { buildChapter, buildSection, s, x } from "../concepts-pb4-helpers";

export const chapter06MultimodalProductDesign = buildChapter({
  slug: "pb8-multimodal-product-design",
  number: 6,
  shortTitle: "Multimodal Design",
  title: "Multimodal Product Design Patterns",
  readingMinutes: 30,
  summary:
    "The UX and architecture patterns that work when your product takes in or produces more than one modality at once",
  keyTakeaway:
    "Multimodal products fail when teams treat modalities as independent features stapled together. The PM job is to design coherent flows: pick input and output modalities per task, ground model outputs back to source regions, budget latency across encoding pipelines, and specify degradation when any modality fails. The highest-ROI multimodal pattern in enterprise today is document understanding — vision plus language on PDFs, slides, and forms.",
  pmCallout:
    "As a PM: every modality you add multiplies latency, cost, moderation surface, and failure modes. Support a modality only when it clearly beats text for the user's job — not because the model can technically accept it.",
  sections: [
    buildSection({
      number: "6.1",
      title: "What is multimodal product design",
      subtitle: "Combining text, image, audio, and video inputs and outputs into coherent user experiences",
      take: "Multimodal product design orchestrates multiple input types (text, image, audio, video, files) and output types (text, generated images, speech, video) into unified workflows where modalities complement each other — not compete. The model layer may be unified (GPT-4o, Gemini) or pipelined (STT → LLM → vision tool), but the user experiences one coherent product.",
      why: "Users don't think in modalities — they think in tasks. PMs who design task-first and map modalities second ship integrated experiences; modality-first design produces gimmicky upload buttons nobody uses.",
      paragraphs: [
        [
          s("Unified models vs orchestrated pipelines are both valid. "),
          x(
            "Unified: one model ingests image + text in single forward pass (GPT-4o, Claude 3). Pipelined: specialised models chained (Whisper → GPT → DALL-E).",
            "Unified simplifies architecture; pipelined allows per-step optimisation and vendor mixing. PM doesn't mandate one — eng picks per constraints.",
          ),
          s(" User experience should hide whether backend is unified or pipelined."),
        ],
        [
          s("Modality affordances must be discoverable but not overwhelming. "),
          x(
            "Chat bar with attach icon, drag-drop zone, camera button, microphone — each modality needs clear 'when to use this' signalling.",
            "Default path should be simplest modality (usually text); advanced modalities on explicit opt-in.",
          ),
          s(" Modality sprawl without guidance confuses users."),
        ],
        [
          s("Cross-modal consistency is a brand requirement. "),
          x(
            "Tone in text matches tone in TTS. Visual style in generated images matches app design system. Multimodal incoherence feels broken.",
            "PM maintains cross-modal design system: voice persona, image style guide, text voice — aligned.",
          ),
          s(" Three teams (design, content, audio) need one multimodal spec."),
        ],
      ],
      examples: [
        {
          title: "ChatGPT — unified multimodal default",
          body: "OpenAI made image upload, voice mode, and file analysis native in one chat thread. PM lesson: users expect one conversation, multiple input types — not separate 'image app' and 'text app.' Integration beat feature isolation.",
        },
        {
          title: "Notion AI — pipelined behind simple UX",
          body: "Users highlight PDF text or ask about page images. Backend orchestrates OCR, vision, and LLM — user sees 'ask about this.' PM hid pipeline complexity; modality was contextual to document, not a menu of options.",
        },
        {
          title: "Failed 'upload anything' launch",
          body: "Startup launched with 6 input modalities on day one. Analytics: 91% text, 6% image, 3% other. Maintenance burden for audio/video pipelines wasn't justified. PM retro: ship text + one differentiated modality; expand on usage data.",
        },
      ],
    }),
    buildSection({
      number: "6.2",
      title: "Input modality selection",
      subtitle: "When to let users choose their modality vs when to design a single canonical input path",
      take: "Input modality selection follows the user context: hands-busy → voice; visual problem → image/camera; document workflow → file upload; precision → text. Offer choice when contexts vary (mobile vs desktop); force canonical path when one modality is clearly superior (receipt scanning → camera, not text description).",
      why: "Too many input options create decision paralysis. Too few miss context-appropriate convenience. PMs map user contexts to modality defaults with optional override.",
      paragraphs: [
        [
          s("Context detection can auto-select modality. "),
          x(
            "Mobile camera app defaults to visual search. Desktop research tool defaults to text. Car interface defaults to voice.",
            "Smart defaults based on device, entry point, and prior behaviour reduce friction.",
          ),
          s(" PM defines default modality per surface — web, mobile, embedded."),
        ],
        [
          s("Modality fallback chains handle environment constraints. "),
          x(
            "Voice fails in noisy open office → offer text. Camera fails without permission → offer upload. Graceful chain, not dead end.",
            "Detect failure fast (<2s) and suggest alternative modality.",
          ),
          s(" Fallback is input modality design — not error page."),
        ],
        [
          s("Canonical path for high-stakes accuracy. "),
          x(
            "Medical symptom checker: structured text form beats vague voice description for triage. Insurance claim: photo of damage + structured fields.",
            "PM picks canonical path when liability or accuracy requires structured input.",
          ),
          s(" Freedom of modality isn't always user benefit."),
        ],
      ],
      examples: [
        {
          title: "Google Lens — camera-first with text fallback",
          body: "Lens opens camera by default; text search available via toggle. PM optimised for visual query context. 80% of sessions camera-initiated — validated default choice.",
        },
        {
          title: "Support chat — paste screenshot beats describe",
          body: "PM added screenshot paste when users typed long error descriptions. Image + auto-OCR reduced avg messages to resolution by 1.4. Canonical path shifted to 'show us' for visual bugs.",
        },
        {
          title: "Legal contract review — PDF only",
          body: "PM rejected image photo of contracts — OCR errors on fine print unacceptable. Canonical input: PDF upload only. Modality constraint improved accuracy from 82% to 96% on clause extraction.",
        },
      ],
    }),
    buildSection({
      number: "6.3",
      title: "Cross-modal grounding",
      subtitle: "Connecting model text output back to the specific image region or audio segment that generated it — the citation pattern for non-text inputs",
      take: "Cross-modal grounding links model assertions to source evidence: bounding boxes on image regions, timestamps in audio/video, page numbers in documents, or highlighted text spans. Users verify AI claims by inspecting the source — same trust function as RAG citations for text, extended to visual and audio modalities.",
      why: "Multimodal outputs without grounding feel like magic tricks — users can't verify. Grounding transforms 'the model said so' into auditable assistance — mandatory for enterprise, healthcare, and legal.",
      paragraphs: [
        [
          s("Visual grounding formats: boxes, masks, and pointers. "),
          x(
            "Bounding box overlay on detected object. Segmentation mask highlight. Arrow pointer to chart element.",
            "PM picks granularity: box for object-level, highlight for text-in-image, timestamp for video.",
          ),
          s(" Grounding UI must be tappable — jump to source on click."),
        ],
        [
          s("Audio and video grounding use timestamps. "),
          x(
            "'At 2:34, the speaker mentions budget overrun' — click jumps to moment. Karaoke-style word highlighting for transcript sync.",
            "Requires diarisation + alignment between transcript tokens and audio timeline.",
          ),
          s(" Timestamp citation is video/audio equivalent of footnote."),
        ],
        [
          s("Grounding quality is a product metric. "),
          x(
            "Eval: does the cited region actually support the claim? IoU (intersection over union) for visual grounding benchmarks.",
            "PM sets grounding accuracy threshold alongside answer accuracy — both gate launch.",
          ),
          s(" Ungrounded correct answers still fail enterprise trust bar."),
        ],
      ],
      examples: [
        {
          title: "Bloomberg terminal — chart grounding",
          body: "AI answers about chart data highlight the referenced data series. PM required every numeric claim grounded to chart element. Analyst trust enabled adoption — ungrounded answers rejected in user testing.",
        },
        {
          title: "Meeting AI — timestamp citations",
          body: "Otter/Fireflies pattern: summary bullet links to recording timestamp. PM metric: 90% of claims have valid timestamp within 5s of relevant speech. Grounding drove paid conversion — users could verify instantly.",
        },
        {
          title: "Insurance photo assessment — bounding box audit",
          body: "Damage assessment AI drew boxes on vehicle damage regions. Adjusters clicked to verify. Ungrounded version failed regulatory review; grounded version approved. PM lesson: grounding is compliance feature.",
        },
      ],
    }),
    buildSection({
      number: "6.4",
      title: "Document understanding as a multimodal pattern",
      subtitle: "PDFs, slides, invoices, forms — the high-value enterprise use case where vision and language combine",
      take: "Document understanding combines OCR, layout analysis, table extraction, and semantic comprehension — treating pages as images with structure, not flat text. Models parse headers, columns, checkboxes, stamps, and handwriting alongside prose. Output: structured data, Q&A, summaries, and redline comparisons.",
      why: "Enterprise AI ROI concentrates in document workflows — contracts, invoices, claims, reports. PMs who master document multimodal patterns ship features with measurable labour savings; chatbot PMs often struggle to prove value.",
      paragraphs: [
        [
          s("Layout matters as much as text content. "),
          x(
            "Two-column PDF, nested tables, footnotes, and sidebar callouts lose meaning in naive text extraction.",
            "Vision-language models (GPT-4V, Claude, Gemini) read layout natively; pipeline approaches use layoutLM + OCR.",
          ),
          s(" PM tests on ugly real documents — not clean digital PDFs only."),
        ],
        [
          s("Structured extraction vs freeform Q&A are different products. "),
          x(
            "Extraction: populate JSON schema from invoice. Q&A: 'what is the termination clause?'",
            "Extraction needs field-level accuracy metrics; Q&A needs citation and confidence.",
          ),
          s(" PM picks document product type before model selection."),
        ],
        [
          s("Human review queue for high-stakes documents. "),
          x(
            "Contract review: AI flags clauses, attorney confirms. Extraction confidence <0.85 → human queue.",
            "PM designs review UI showing model reasoning + source highlight — not just extracted fields.",
          ),
          s(" Document AI in enterprise is human-in-the-loop by default."),
        ],
      ],
      examples: [
        {
          title: "Ramp — invoice extraction at scale",
          body: "Expense platform extracts vendor, amount, line items from receipt photos and PDF invoices. Multimodal: image + layout + text. PM metric: auto-approval rate for expenses under $500 when extraction confidence >0.92. Document pattern with clear ROI.",
        },
        {
          title: "Harvey — legal document analysis",
          body: "Legal AI reads contracts as visual documents, not text dumps. Clause identification with page citations. PM positioned as 'associate that highlights' — grounding + document understanding = trust in law.",
        },
        {
          title: "Healthcare prior auth — form understanding",
          body: "PM scoped form field extraction from mixed typed/handwritten PDFs. Layout model + human review for low-confidence fields. Cut prior auth processing from 45 min to 8 min average. Document multimodal with compliance guardrails.",
        },
      ],
    }),
    buildSection({
      number: "6.5",
      title: "Visual question answering in products",
      subtitle: "Users pointing at things and asking questions — the interaction model and reliability constraints to design around",
      take: "Visual QA lets users ask questions about images: upload photo, draw region, or point camera — 'what is this?', 'how many?', 'is this damaged?' Product patterns include camera search, AR overlay Q&A, screenshot analysis, and diagram interpretation. Reliability varies by domain — generic objects strong, specialised equipment weak.",
      why: "Visual QA is the consumer face of multimodal AI — high delight when it works, high embarrassment when it hallucinates on a user's specific context. PMs scope domain and confidence UX carefully.",
      paragraphs: [
        [
          s("Region selection improves accuracy. "),
          x(
            "Full-image Q&A dilutes focus. Tap-to-select region or circle area constrains model attention.",
            "Crop-before-ask pattern: send cropped region + question to model. Reduces hallucination on background objects.",
          ),
          s(" PM designs region selection UX — not just full-image upload."),
        ],
        [
          s("Domain scope must be explicit to users. "),
          x(
            "'Identify plants' works; 'identify any object' overpromises. Scope labels: 'beta for medical images' sets expectations.",
            "Out-of-domain graceful decline: 'I'm not confident about this type of image.'",
          ),
          s(" General-purpose VQA marketing creates specific-domain liability."),
        ],
        [
          s("Camera real-time vs upload-async are different latency products. "),
          x(
            "Real-time AR overlay needs <1s; upload analysis can take 5–10s with progress indicator.",
            "PM matches interaction pattern to latency budget — don't promise real-time on cloud pipeline.",
          ),
          s(" 'Point and ask' AR is hardest multimodal UX to ship well."),
        ],
      ],
      examples: [
        {
          title: "Google Lens — region tap search",
          body: "Users circle object in camera view; search runs on selected region. PM design: selection constrains query. Drove billions of visual searches — region selection is core pattern, not enhancement.",
        },
        {
          title: "AllTrails plant ID — scoped VQA",
          body: "Trail app identifies plants from photo — scoped domain model. PM declined 'identify anything' — plant-only scope achieved 88% accuracy vs 60% for general model. Narrow beat broad.",
        },
        {
          title: "Industrial AR — failure on rare equipment",
          body: "AR maintenance app promised part identification. Failed on legacy equipment not in training data. PM added 'report unknown part' flow + human expert escalation. Honest confidence UX prevented safety incidents.",
        },
      ],
    }),
    buildSection({
      number: "6.6",
      title: "Multimodal output design",
      subtitle: "When to respond in the same modality as the input vs when to switch — the design logic behind choosing text, image, or audio as output",
      take: "Output modality should match user context and task: voice question in car → voice answer; image analysis on desktop → annotated image + text summary; creative prompt → generated image. Switching modalities adds value when output is better consumed differently — but switching without reason confuses.",
      why: "Symmetric multimodal (image in → image out) is rare and often wrong. PMs design asymmetric flows deliberately — the output modality serves comprehension, not mirroring.",
      paragraphs: [
        [
          s("Text is the default output for most inputs. "),
          x(
            "Even image inputs usually produce text answers — it's scannable, copyable, searchable. Image output reserved for generation tasks.",
            "Exception: annotated image output (circles, labels) when spatial communication beats prose.",
          ),
          s(" 'Multimodal product' ≠ 'generates images for everything.'"),
        ],
        [
          s("Audio output for eyes-busy contexts only. "),
          x(
            "Driving, walking, accessibility. Otherwise users prefer text they can skim.",
            "Auto-play audio responses annoy in open offices — require explicit play button unless hands-busy detected.",
          ),
          s(" PM gates audio output on context — not default."),
        ],
        [
          s("Generated media output needs moderation and rights workflow. "),
          x(
            "Image/video output: content policy, watermark, download rights, edit-before-send.",
            "PM output pipeline includes review step for user-generated shareable media.",
          ),
          s(" Multimodal output multiplies moderation surface."),
        ],
      ],
      examples: [
        {
          title: "Be My Eyes — image in, voice out",
          body: "Blind users photograph scene; AI describes aloud. Perfect asymmetric design: input matches user capability, output matches consumption mode. PM validated with blind user council — modality pairing was accessibility-driven.",
        },
        {
          title: "Canva Magic Edit — image in, image out",
          body: "User selects image region, describes edit, receives modified image. Symmetric visual workflow. PM added text summary of changes for accessibility and undo context.",
        },
        {
          title: "Slack screenshot analysis — image in, text out",
          body: "Users paste screenshots; AI returns text summary in thread. PM chose text for searchability and threading — not annotated image reply. Output modality served collaboration workflow.",
        },
      ],
    }),
    buildSection({
      number: "6.7",
      title: "Latency in multimodal pipelines",
      subtitle: "Image encoding, audio preprocessing, and cross-modal fusion all add time — the budget breakdown that surprises teams",
      take: "Multimodal latency stacks: image resize and encode (100–500ms), audio transcription (real-time factor 0.3–1×), file upload (variable), vision encoder forward pass (500ms–3s), then LLM generation. Total easily 3–8 seconds without optimisation. Budget per modality step in the PRD.",
      why: "Teams benchmark text chat latency then ship image features with 5× slower response — users perceive product as broken. PM-owned latency budget prevents modality features from degrading core experience.",
      paragraphs: [
        [
          s("Image resolution directly impacts encode time and token cost. "),
          x(
            "4K image → downscale to 1024px before model. Detail mode vs fast mode toggle.",
            "PM specifies max image dimensions and quality tiers — 'high detail' costs 3× latency.",
          ),
          s(" User-uploaded phone photos need aggressive preprocessing."),
        ],
        [
          s("Parallel preprocessing where possible. "),
          x(
            "Upload file while user types question. Transcribe audio while showing 'processing' animation.",
            "Perceived latency via progressive UI — show transcript before answer.",
          ),
          s(" PM designs loading states per pipeline stage — not single spinner."),
        ],
        [
          s("Caching multimodal inputs by content hash. "),
          x(
            "Same PDF uploaded twice shouldn't re-encode. Cache embeddings of document pages.",
            "Session-level cache for multi-turn doc Q&A — first turn slow, follow-ups fast.",
          ),
          s(" Multimodal caching is high-ROI infra investment."),
        ],
      ],
      examples: [
        {
          title: "Claude PDF analysis — progressive disclosure",
          body: "Anthropic shows 'reading document' before answer generation. PM pattern: name the slow step. Users tolerate 8s when progress is visible; abandon at 5s with blank spinner.",
        },
        {
          title: "Image downscale — 4s to 1.2s",
          body: "App sent full 12MP photos to vision API. PM spec: resize to 1568px long edge client-side. Latency dropped 70%; accuracy unchanged on product catalog task. Preprocessing spec was PM decision.",
        },
        {
          title: "Document cache — multi-turn Q&A",
          body: "Legal app cached page embeddings on first upload. Turn 1: 12s. Turns 2–10: 2s average. PM priced storage for cache vs re-encode cost — cache won at >2 questions per document.",
        },
      ],
    }),
    buildSection({
      number: "6.8",
      title: "Multimodal context assembly",
      subtitle: "Packaging text, images, and audio together into a single model prompt — the engineering and cost implications",
      take: "Context assembly combines system prompt, conversation history, retrieved documents, user-uploaded images, audio transcripts, and tool results into one model request. Vision tokens cost 5–20× text tokens per image. Assembly order affects model attention — recent and visual content often weighted heavily. Token budget management is PM-relevant for cost and quality.",
      why: "Bad assembly sends too many images (blows budget), wrong order (model ignores key doc), or stale context (wrong answer). PMs spec context limits and priority rules — the multimodal equivalent of RAG context assembly.",
      paragraphs: [
        [
          s("Token budget allocation across modalities. "),
          x(
            "100K context: reserve 20K for system + history, 60K for document pages, 20K for generation. Exceeding budget → truncate oldest turns or lowest-relevance pages.",
            "PM defines truncation policy — what gets dropped first.",
          ),
          s(" Multimodal products hit context limits faster than text-only."),
        ],
        [
          s("Interleaving order affects comprehension. "),
          x(
            "Pattern: instruction → image → question works better than image → long text → question.",
            "Multiple images: label each ('Image 1: front damage, Image 2: rear damage') — reduces confusion.",
          ),
          s(" PM provides assembly templates for common multimodal query types."),
        ],
        [
          s("Cost per request scales with visual token count. "),
          x(
            "GPT-4o: ~765 tokens per 1024×1024 image. 10-page PDF as images = 7,650 vision tokens before any text.",
            "PM models cost per document page in pricing — margin depends on assembly efficiency.",
          ),
          s(" Finance must see multimodal token math before pricing tier design."),
        ],
      ],
      examples: [
        {
          title: "Customer support — image + ticket history assembly",
          body: "PM limited context to: last 3 messages + 1 screenshot + KB article. Full history + 5 images blew latency and cost. Constrained assembly improved p95 response 4s → 1.8s.",
        },
        {
          title: "Architecture diagram Q&A — labelled images",
          body: "Engineers uploaded multi-page architecture PDFs. PM required page labels in prompt template. Unlabelled pages caused model to confuse diagram 2 and 5. Assembly template fix — no model change.",
        },
        {
          title: "Margin analysis — vision token surprise",
          body: "PM priced doc analysis at $0.10/query assuming text tokens. Actual: $0.38 with full-page image encoding. Repriced at $0.35 with page-limit cap. Assembly cost model prevented ongoing margin loss.",
        },
      ],
    }),
    buildSection({
      number: "6.9",
      title: "Graceful degradation across modalities",
      subtitle: "What the product does when one modality fails or is unavailable — the fallback design that determines robustness",
      take: "Graceful degradation defines fallbacks: STT fails → offer keyboard; image upload fails → offer text description; vision model low confidence → 'I can't analyse this image clearly'; offline → cached text-only mode. Each modality failure should route to next-best input or output path — never a dead end.",
      why: "Multimodal products multiply failure points. Users forgive one modality failing if another works instantly. PMs who spec degradation paths ship reliable products; those who don't ship fragile demos.",
      paragraphs: [
        [
          s("Detect modality failure fast and switch explicitly. "),
          x(
            "'Microphone unavailable — type your message instead.' Not silent failure or infinite retry.",
            "Failure detection: permission denied, hardware missing, timeout, confidence below threshold.",
          ),
          s(" Explicit switch message teaches users the fallback exists."),
        ],
        [
          s("Partial modality loss in multi-input queries. "),
          x(
            "User attaches image + asks question; image corrupt. Process text question, note image failed.",
            "Don't reject entire query for one modality failure.",
          ),
          s(" PM specs per-modality error isolation."),
        ],
        [
          s("Capability tiers for offline and low-bandwidth. "),
          x(
            "Online: full multimodal. Degraded: text only, smaller model. Offline: cached responses + queue for sync.",
            "Mobile apps in emerging markets need text-first degradation path.",
          ),
          s(" Degradation tiers are product requirements for global scale."),
        ],
      ],
      examples: [
        {
          title: "Voice-to-text fallback — 40% retention save",
          body: "Voice note feature lost 60% of users when STT failed silently. PM added instant keyboard fallback with preserved audio recording. Retention recovered to 88% of voice-success cohort.",
        },
        {
          title: "Low-confidence image decline",
          body: "Medical symptom photo app declined analysis below confidence 0.7: 'Photo unclear — try better lighting or describe symptoms in text.' Liability reduction + user trust vs wrong diagnosis from bad photo.",
        },
        {
          title: "Airplane mode — queued multimodal",
          body: "Field app queued photo + voice notes offline; processed on reconnect. PM designed offline capture UX separate from online analysis. Degradation enabled uninterrupted field workflow.",
        },
      ],
    }),
    buildSection({
      number: "6.10",
      title: "PM decision lens: choosing which modalities to support",
      subtitle: "The user task, model capability ceiling, latency budget, and moderation surface each modality adds",
      take: "Add a modality when: it clearly improves task completion vs text alone, model reliability meets threshold in your domain, latency fits user context, moderation is manageable, and cost per query supports margin. Defer when: text suffices, reliability is below 80% on domain eval, or latency exceeds context tolerance.",
      why: "Modality sprawl is the multimodal trap — impressive demos, unmaintainable products. PM framework keeps roadmap disciplined: one new modality per release, gated by eval.",
      paragraphs: [
        [
          s("Modality decision matrix: task × context × risk. "),
          x(
            "Score each candidate modality 1–5 on: task fit, reliability, latency, cost, moderation risk. Ship only 4+ on task fit AND 3+ on reliability.",
            "Document understanding and voice-in-hands-busy score high. Video generation scores high task fit but lower reliability.",
          ),
          s(" Matrix prevents 'competitor has image upload' reactive roadmap."),
        ],
        [
          s("Sequence modalities by ROI, not impressiveness. "),
          x(
            "Enterprise: document upload first. Consumer: camera search. Developer: screenshot. Pick highest-ROI for your segment.",
            "Each modality needs eval set, moderation policy, support docs, and failure UX — not just API integration.",
          ),
          s(" Modalities are product commitments, not config flags."),
        ],
        [
          s("Sunset modalities that don't earn usage. "),
          x(
            "Analytics threshold: <5% of sessions after 90 days → deprecate or hide. Maintenance cost of unused modalities drains team.",
            "PM quarterly modality review: usage, cost, incident rate, NPS impact.",
          ),
          s(" Removing failed modalities is as important as adding new ones."),
        ],
      ],
      examples: [
        {
          title: "B2B SaaS — document-only multimodal",
          body: "PM evaluated image, voice, video. Only PDF/image document upload passed matrix for contract analysis use case. Shipped document multimodal only — 94% feature adoption vs 8% for added voice experiment.",
        },
        {
          title: "Fitness app — camera form check",
          body: "Camera modality scored 5 on task fit (exercise form), 4 on reliability for 20 core exercises. Text description scored 2. PM prioritised camera over chat expansion. Modality matched core job.",
        },
        {
          title: "Deprecated audio input — maintenance save",
          body: "Audio query feature used by 2% of users; caused 15% of support tickets. PM sunset after 6 months; redirected to voice-to-text on keyboard mic. Engineering capacity freed for document features with 10× usage.",
        },
      ],
    }),
  ],
  quiz: [
    {
      q: "What is the highest-ROI multimodal pattern for enterprise AI today?",
      options: [
        "Real-time AR object identification.",
        "Document understanding — PDFs, invoices, and forms combining vision and language.",
        "AI-generated video marketing.",
        "Voice-only interfaces.",
      ],
      correct: 1,
      correctFeedback:
        "Right. Document workflows deliver measurable labour savings with proven reliability — the enterprise multimodal sweet spot.",
      wrongFeedback:
        "Enterprise ROI concentrates in document understanding. Re-read section 6.4.",
    },
    {
      q: "What is cross-modal grounding?",
      options: [
        "Training one model on all modalities simultaneously.",
        "Linking model text outputs to source evidence — image regions, timestamps, or page citations.",
        "Converting all inputs to text before processing.",
        "Using the same voice for all languages.",
      ],
      correct: 1,
      correctFeedback:
        "Exactly. Grounding lets users verify AI claims against source — citations for non-text modalities.",
      wrongFeedback:
        "Grounding connects outputs to source regions or timestamps. Re-read section 6.3.",
    },
    {
      q: "Why should output modality often differ from input modality?",
      options: [
        "Models can only output text.",
        "Output should match how users best consume the answer — text for skimming, audio for hands-busy, annotated images for spatial data.",
        "Symmetric input/output is always more accurate.",
        "Regulations require different output modalities.",
      ],
      correct: 1,
      correctFeedback:
        "Right. Asymmetric design serves comprehension — image in doesn't mean image out.",
      wrongFeedback:
        "Output modality serves user context, not mirroring. Re-read section 6.6.",
    },
    {
      kind: "categorize",
      q: "Match each multimodal design concern to its primary section focus.",
      categories: ["Grounding", "Latency", "Degradation", "Context assembly"],
      items: [
        { text: "Bounding box on cited image region.", category: 0 },
        { text: "Client-side image downscale before API.", category: 1 },
        { text: "STT fails → offer keyboard input.", category: 2 },
        { text: "Token budget across images and text.", category: 3 },
        { text: "Timestamp link to meeting recording.", category: 0 },
        { text: "Cache document embeddings for follow-up Q&A.", category: 1 },
      ],
      correctFeedback:
        "Right. Grounding, latency, degradation, and assembly are distinct multimodal design disciplines.",
      wrongFeedback:
        "Map each concern to grounding, latency, degradation, or context assembly. Re-read sections 6.3–6.9.",
    },
    {
      kind: "order",
      q: "Put the PM modality evaluation process in the recommended order.",
      prompt: "Drag to arrange from first step (top) to last (bottom).",
      items: [
        "Map user task and context of use.",
        "Score candidate modalities on task fit, reliability, latency, cost, and moderation.",
        "Ship highest-scoring modality with domain eval gate.",
        "Monitor usage, cost, and incident rate for 90 days.",
        "Sunset or expand based on usage data.",
      ],
      correctFeedback:
        "Exactly. Task → score → ship with eval → monitor → iterate — disciplined modality roadmap.",
      wrongFeedback:
        "Modality decisions flow task mapping → scoring → gated ship → review. Re-read section 6.10.",
    },
    {
      q: "When adding a new input modality, what should gate the launch?",
      options: [
        "Competitor has it.",
        "Domain eval reliability ≥ threshold, latency fits user context, and moderation policy is defined.",
        "Engineering finished the integration.",
        "Marketing requested it for the press release.",
      ],
      correct: 1,
      correctFeedback:
        "Right. Reliability, latency, and moderation are launch gates — not demo success.",
      wrongFeedback:
        "Modalities need eval thresholds, latency fit, and moderation before GA. Re-read section 6.10.",
    },
  ],
});
