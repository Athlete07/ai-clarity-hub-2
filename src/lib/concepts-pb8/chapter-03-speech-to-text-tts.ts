import { buildChapter, buildSection, s, x } from "../concepts-pb4-helpers";

export const chapter03SpeechToTextTts = buildChapter({
  slug: "pb8-speech-to-text-tts",
  number: 3,
  shortTitle: "Speech & TTS",
  title: "Speech-to-Text & TTS",
  readingMinutes: 28,
  summary:
    "The voice layer of AI products — how machines listen and speak, and what production-grade audio AI actually requires",
  keyTakeaway:
    "Speech-to-text converts audio waveforms to text; text-to-speech converts text back to natural audio — together they form the perception and voice layers of voice AI products. For PMs, shipping voice means choosing batch vs streaming STT, planning diarisation and multilingual gaps, selecting neural TTS with persona and consent policies, and budgeting end-to-end latency across the STT → LLM → TTS stack. Voice is a UX contract measured in milliseconds and trust, not demo accuracy on quiet studio recordings.",
  pmCallout:
    "As a PM: never demo voice in a quiet conference room and ship to a warehouse floor. Golden audio eval must include noise, accents, overlap, and domain vocabulary — and you need explicit consent flows before any voice cloning feature touches production.",
  sections: [
    buildSection({
      number: "3.1",
      title: "What is speech-to-text (STT)",
      subtitle: "Converting audio waveforms to text — the perception layer that opens AI to spoken input",
      take: "Speech-to-text (automatic speech recognition, ASR) transforms raw audio waveforms into text transcripts — handling acoustic variability (accents, noise, mic quality), linguistic ambiguity, and often punctuation and formatting — forming the input layer that lets LLMs and workflows consume spoken user intent.",
      why: "Voice features fail when PMs treat STT as 'solved' because Siri works in a demo. STT is the bottleneck for accuracy, latency, and cost in every voice product — spec it with the same rigour as your LLM choice.",
      paragraphs: [
        [
          s("STT is perception, not understanding. "),
          x(
            "ASR outputs words (with timestamps, confidence scores); downstream LLM interprets meaning. STT errors compound — 'send to forty customers' vs 'four customers' is catastrophic.",
            "PM architecture: show transcript for user confirmation on high-stakes actions; don't auto-act on STT alone.",
          ),
          s(" Separate STT quality metrics from LLM task success in eval."),
        ],
        [
          s("Audio capture quality dominates model choice. "),
          x(
            "Sample rate, codec, noise suppression, mic placement — often explain more variance than swapping Whisper for Deepgram.",
            "PM UX: mic permission education, VAD (voice activity detection), 'move closer' hints, optional headset mode for pro users.",
          ),
          s(" Fix capture before escalating to pricier STT tier."),
        ],
        [
          s("STT deployment modes: cloud API, on-device, hybrid. "),
          x(
            "Cloud: best accuracy, ongoing cost, privacy considerations. On-device: Apple/Android speech, limited vocab. Hybrid: on-device wake + cloud STT for query.",
            "Match deployment to privacy story and offline requirements — not only accuracy benchmarks.",
          ),
          s(" STT choice is positioning, not just WER numbers."),
        ],
      ],
      examples: [
        {
          title: "Medical scribe — STT as liability boundary",
          body: "Ambient clinical documentation used STT + LLM note. PM required clinicians confirm transcript before sign-off — STT errors on drug names caught at review. Product treated STT as draft perception, not authoritative record.",
        },
        {
          title: "Warehouse voice pick — noise reality",
          body: "Pilot STT failed in active warehouse (72dB). Added noise-cancelling headset requirement + custom vocab boost for SKUs. WER improved more from hardware than model swap. PM spec included environment tier, not just API vendor.",
        },
        {
          title: "STT-only MVP — meeting notes",
          body: "Shipped transcription without LLM summary v1. Validated core job: searchable archive. STT vendor bake-off on 200 real meeting recordings before adding copilot features. Perception layer first.",
        },
      ],
    }),
    buildSection({
      number: "3.2",
      title: "How Whisper works",
      subtitle: "OpenAI's open-source STT model — the encoder-decoder architecture that made high-accuracy transcription accessible",
      take: "Whisper is a transformer encoder-decoder trained on 680K hours of multilingual weakly supervised web audio — audio is converted to a log-mel spectrogram, encoded to hidden states, then autoregressively decoded to text tokens — delivering strong out-of-the-box accuracy and making self-host STT feasible for many teams.",
      why: "Whisper became the default reference PMs hear in vendor pitches. Understanding its architecture and limits sets realistic expectations on hallucinations, language support, and when commercial APIs (Deepgram, AssemblyAI, Google) still win on streaming and diarisation.",
      paragraphs: [
        [
          s("Encoder-decoder mirrors machine translation for speech. "),
          x(
            "Encoder ingests 30-second audio chunks as spectrogram patches; decoder generates text token sequence with cross-attention. Supports multilingual and translation modes in one model family.",
            "Chunking matters: long meetings split into segments — PM UX for seamless paragraph merge and timestamp continuity.",
          ),
          s(" Whisper 'large' vs 'tiny' is accuracy vs cost/latency product tier."),
        ],
        [
          s("Open weights enabled self-host and fine-tune ecosystems. "),
          x(
            "Teams run Whisper on own GPUs for air-gap, cost control, or domain fine-tune (medical vocab). faster-whisper, whisper.cpp for optimised inference.",
            "PM tradeoff: self-host saves API $ at scale; you own GPU ops, scaling, and model updates.",
          ),
          s(" Calculate breakeven monthly audio hours before self-host commit."),
        ],
        [
          s("Whisper hallucinates on silence and noise — known failure. "),
          x(
            "Long silent stretches or background music may produce phantom text — 'thanks for watching' meme. Mitigation: VAD pre-filter, confidence thresholds, post-filter heuristics.",
            "PM eval: include silent/near-silent clips — not just speech-heavy golden set.",
          ),
          s(" Never auto-publish Whisper output without silence-segment QA."),
        ],
      ],
      examples: [
        {
          title: "Self-host Whisper — cost inflection",
          body: "At 80K hours/month transcribed, API cost $110K. PM approved 4×GPU self-host Whisper large — $28K infra + 0.5 MLOps FTE. Break-even month 4. Required hallucination filter sprint for podcast silence gaps.",
        },
        {
          title: "Whisper tiny on-device preview",
          body: "Mobile app ran whisper.cpp tiny for local draft caption while cloud large finalized. Users saw instant rough text; export used cloud. PM tiered perception by use case.",
        },
        {
          title: "Hallucination incident — podcast tool",
          body: "Silent intro music transcribed as phantom sponsorship read. PM added VAD trim + confidence gating; public changelog acknowledged issue. Whisper strength didn't eliminate known weakness.",
        },
      ],
    }),
    buildSection({
      number: "3.3",
      title: "Real-time vs batch transcription",
      subtitle: "Streaming word-by-word vs processing a completed audio file — the latency and accuracy tradeoffs",
      take: "Batch transcription processes complete audio files with full context — highest accuracy and simpler pipeline, higher latency. Real-time streaming STT emits partial transcripts word-by-word with tight latency budgets — essential for live captions and voice agents but typically sacrifices some accuracy and punctuation quality.",
      why: "PMs promise 'live' voice without specifying streaming STT architecture — then wonder why voice agent feels laggy. Mode selection drives UX architecture, cost model (per-minute streaming vs per-file), and error recovery patterns.",
      paragraphs: [
        [
          s("Batch fits async workflows — meetings, legal depositions, media. "),
          x(
            "Upload → queue → full transcript in minutes. Models use future context for disambiguation. Cheaper per hour at scale for non-interactive use.",
            "UX: progress bar, email when ready, speaker labels post-process. Users tolerate delay without interaction.",
          ),
          s(" Default for note-taking, compliance archive, content repurposing."),
        ],
        [
          s("Streaming fits interactive voice — agents, live captions, dictation. "),
          x(
            "Partial results every 100–300ms; endpointing detects user stopped speaking. Requires WebSocket infra, barge-in handling, partial LLM triggers carefully.",
            "Latency budget: STT partial + LLM + TTS must stay under ~800ms–1.2s for natural turn-taking (see 3.9).",
          ),
          s(" Streaming STT is prerequisite for conversational voice UX."),
        ],
        [
          s("Hybrid patterns are common in production. "),
          x(
            "Stream for live UI; batch reprocess for final archive quality. Or stream STT for speed, batch diarisation after call ends.",
            "PM spec: which transcript is 'source of truth' for search/legal — usually batch pass.",
          ),
          s(" Document dual-transcript strategy to avoid user confusion."),
        ],
      ],
      examples: [
        {
          title: "Voice agent — streaming mandatory",
          body: "Customer service voice bot used batch STT prototype — 4s turn latency, users hung up. Switched to streaming STT + partial intent detection. Task completion +28%. PM lesson: interactivity defines mode.",
        },
        {
          title: "Meeting product — dual pass",
          body: "Live meeting showed streaming captions; post-meeting email used batch re-transcribe with higher accuracy + diarisation. PM labelled live vs final transcript in UI — trust improved when differences explained.",
        },
        {
          title: "Legal deposition — batch only",
          body: "Law firm rejected streaming for certified transcript — required batch with human editor. PM enterprise tier: no streaming, SLA on WER + human review queue. Accuracy > latency.",
        },
      ],
    }),
    buildSection({
      number: "3.4",
      title: "Speaker diarisation",
      subtitle: "Identifying who said what in a multi-speaker recording — the capability that turns transcripts into structured conversations",
      take: "Speaker diarisation partitions audio into segments labelled by speaker identity (Speaker A, B, C) without necessarily knowing names — enabling meeting transcripts with attributions, analytics per participant, and downstream summarisation that respects turn structure.",
      why: "Undiarised wall-of-text breaks meeting products, sales coaching, and compliance review. PMs should know diarisation is separate from STT quality — vendors bundle differently; overlap and crosstalk remain hard.",
      paragraphs: [
        [
          s("Diarisation + STT = two problems, often two models. "),
          x(
            "Pipeline: diarise segments → STT per segment, or joint models (some vendors). Speaker count may need to be estimated or capped.",
            "PM ask vendors: overlap handling, max speakers, error rate on similar voices.",
          ),
          s(" Bake-off diarisation on your real meetings — not podcast solo hosts."),
        ],
        [
          s("Name assignment is product layer on top of labels. "),
          x(
            "Diarisation outputs Speaker 1/2; product maps to calendar attendees, CRM contacts, or user manual tag. Voice profiles can auto-map recurring speakers.",
            "UX: let users correct speaker labels — corrections are valuable training signal.",
          ),
          s(" Speaker correction UI is high-engagement — invest in it."),
        ],
        [
          s("Failure modes: overlap, similar voices, remote audio. "),
          x(
            "Crosstalk merges speakers; quiet remote participants cluster wrong. Hybrid meetings with room mic + laptops are worst case.",
            "PM mitigations: per-participant streams (Zoom bot APIs), headset recommendation, confidence warnings on speaker tags.",
          ),
          s(" Set user expectations on panel discussions and brainstorms."),
        ],
      ],
      examples: [
        {
          title: "Sales call intelligence — diarisation core",
          body: "Coaching product required rep vs prospect attribution. Vendor diarisation 91% turn accuracy on 1:1 calls; dropped to 71% on three-way. PM scoped v1 to 1:1 only; roadmap for multiline after per-track audio ingest.",
        },
        {
          title: "Speaker relabel — user fix loop",
          body: "Users renamed 'Speaker 2' to manager name; system learned voice embedding for next meeting. Correction feature DAU 34% among power users. PM prioritised relabel over new AI summary templates.",
        },
        {
          title: "Compliance — diarisation dispute",
          body: "Regulator questioned which speaker admitted liability. Overlapping segment misattributed. PM added low-confidence speaker highlight + audio clip playback per utterance. Audit UX mattered more than WER.",
        },
      ],
    }),
    buildSection({
      number: "3.5",
      title: "Multilingual STT",
      subtitle: "How transcription quality varies across languages — and why low-resource languages remain a product gap",
      take: "Multilingual STT quality correlates with training data availability — English and major European languages perform best; low-resource languages, dialects, and code-switching lag significantly. PMs must publish supported language tiers honestly and design fallback (human transcribe, text input) for underserved users.",
      why: "Global roadmap promises '100 languages' from vendor marketing. PMs who stratify quality by language prevent NPS collapse in India, Africa, and LATAM markets where English-first eval hid gaps.",
      paragraphs: [
        [
          s("Language tiers should be explicit in product. "),
          x(
            "Tier A: production WER target met on golden set. Tier B: beta — usable with errors. Tier C: unsupported — don't market. Whisper lists many languages; quality varies 10×.",
            "PM docs: language support page with last eval date and known weak dialects.",
          ),
          s(" 'Supports language X' without quality tier is a support trap."),
        ],
        [
          s("Code-switching and accent diversity stress models. "),
          x(
            "Hinglish, Spanglish, regional accents within 'English' — WER spikes. Custom vocab and fine-tune on local audio help; generic model may fail.",
            "Eval strata: accent, domain jargon, recording device — per target market.",
          ),
          s(" Local PM or partner must validate golden audio — not HQ English-only."),
        ],
        [
          s("Translation mode ≠ fluent STT for all languages. "),
          x(
            "Whisper can translate non-English speech to English text — useful for analytics, lossy for legal verbatim. Separate 'transcribe in language' vs 'translate to English' user settings.",
            "Misconfigured mode produces wrong script (e.g., Romanised vs native script) — user trust issue.",
          ),
          s(" Mode clarity in UI prevents 'wrong language output' tickets."),
        ],
      ],
      examples: [
        {
          title: "India launch — tier honesty",
          body: "PM marked Hindi Tier B after golden eval WER 18% vs English 6%. Marketing agreed to 'beta' badge and feedback widget. Avoided launch backlash from implied parity. Roadmap: fine-tune on local corpus.",
        },
        {
          title: "Call center Tagalog — code-switch",
          body: "Agents mixed English product terms in Tagalog sentences. Off-the-shelf STT mangled SKU names. Custom phrase boosting + 200h labelled audio reached ship bar. Multilingual isn't one toggle.",
        },
        {
          title: "Unsupported language graceful fallback",
          body: "User selected Welsh; STT confidence persistently low. PM shipped detect-low-confidence → offer text chat fallback. Better than garbage transcript and blame on user accent.",
        },
      ],
    }),
    buildSection({
      number: "3.6",
      title: "What is text-to-speech (TTS)",
      subtitle: "Converting text back to spoken audio — the generation layer that gives AI a voice",
      take: "Text-to-speech synthesises natural-sounding audio from text — handling pronunciation, prosody, pacing, and emotion — closing the loop in voice AI so systems can respond hands-free and accessibly, not only read transcripts on screen.",
      why: "TTS is the brand voice users hear. PM decisions on voice persona, latency, and quality tier define trust and delight more than LLM eloquence users never see if audio is robotic or slow.",
      paragraphs: [
        [
          s("TTS completes the voice loop with STT. "),
          x(
            "Stack: user speaks → STT → LLM → TTS → speaker. Weak TTS makes smart answers feel dumb. Users judge whole system by ear.",
            "PM eval TTS and STT together on same golden dialogues — not isolated.",
          ),
          s(" Voice product quality = weakest link in STT-LLM-TTS chain."),
        ],
        [
          s("TTS outputs vary by format and streaming support. "),
          x(
            "MP3/WAV blobs for async playback vs streamed audio chunks for real-time agent. First-byte latency critical for conversation.",
            "Spec: time-to-first-audio, not just total synthesis time for paragraph.",
          ),
          s(" Stream TTS for agents; batch blob OK for notifications."),
        ],
        [
          s("SSML and pronunciation dictionaries for domain language. "),
          x(
            "SSML tags: pause, emphasis, phoneme overrides. Brand names, medical terms, acronyms need custom lexicon — generic TTS mispronounces and breaks trust.",
            "PM maintains pronunciation lexicon with CS and marketing — living document.",
          ),
          s(" One mispronounced product name repeated in every reply damages brand."),
        ],
      ],
      examples: [
        {
          title: "Banking IVR upgrade — TTS brand voice",
          body: "Replaced legacy robotic TTS with neural voice matching brand guidelines (warm, authoritative). CSAT on phone channel +11 points. PM owned voice selection committee with marketing sign-off.",
        },
        {
          title: "Pronunciation lexicon — pharma",
          body: "Drug names mispronounced in 40% of TTS sentences. PM shipped custom lexicon update pipeline; med affairs approved phonemes quarterly. TTS without lexicon unshippable in vertical.",
        },
        {
          title: "Async vs stream — two features",
          body: "Daily podcast digest used batch TTS MP3 — fine. Live tutor used streaming TTS. Same vendor, different APIs. PM split requirements docs; avoided applying podcast SLA to agent.",
        },
      ],
    }),
    buildSection({
      number: "3.7",
      title: "Neural TTS",
      subtitle: "ElevenLabs, OpenAI TTS, Google WaveNet — how deep learning replaced robotic synthesis with natural, expressive speech",
      take: "Modern neural TTS uses deep generative models (transformers, diffusion, vocoders) to produce human-like speech with natural prosody — vendors like ElevenLabs, OpenAI, Google Cloud, and Amazon Polly Neural offer distinct voice libraries, emotion controls, and latency profiles replacing concatenative 'robot voice' era.",
      why: "Vendor landscape is crowded and swapping is painful (voice brand identity). PMs run structured voice bake-offs on representative scripts — not listen to one demo sentence.",
      paragraphs: [
        [
          s("Neural TTS quality unlocked voice-as-product. "),
          x(
            "Legacy TTS: stitched diphones, flat intonation. Neural: learns mel spectrograms → vocoder, models breath, emphasis, emotion. Users accept voice AI as 'real enough.'",
            "Sets bar: new products sound outdated if still on legacy Polly standard voices.",
          ),
          s(" Budget neural tier in COGS — legacy cheap voice hurts NPS."),
        ],
        [
          s("Vendor differentiation: expressiveness, cloning, languages. "),
          x(
            "ElevenLabs: expressive, cloning, creator focus. OpenAI TTS: API simplicity inside GPT stack. Google/AWS: enterprise scale, many languages, custom Voice Builder.",
            "PM matrix: language list, streaming latency, cloning terms, data retention, price per character.",
          ),
          s(" Pick vendor for roadmap languages and persona needs — not hype."),
        ],
        [
          s("Emotion and style controls are PM-facing brand levers. "),
          x(
            "Stability, similarity boost, style exaggeration (vendor-specific knobs). Map to brand adjectives: 'calm expert' vs 'upbeat coach.'",
            "Document default settings per product surface — support shouldn't guess.",
          ),
          s(" Voice settings are brand guidelines, not eng tuning afterthought."),
        ],
      ],
      examples: [
        {
          title: "Voice bake-off — EdTech tutor",
          body: "Five vendors, 30 lesson scripts, child + parent listeners blind scored warmth and clarity. OpenAI TTS won clarity; ElevenLabs won warmth. PM picked OpenAI for kids tier (clarity priority) with SSML slower rate.",
        },
        {
          title: "Emotion knob misuse",
          body: "Support bot style exaggeration maxed — users found responses melodramatic. PM reset to conservative preset; added internal-only slider for experimentation. Neural expressiveness needs brand guardrails.",
        },
        {
          title: "Enterprise Google custom voice",
          body: "Fortune 500 commissioned custom WaveNet voice from approved actor. 6-month legal + recording process. PM timeline: neural TTS brand isn't a sprint — plan actor contracts and exclusivity.",
        },
      ],
    }),
    buildSection({
      number: "3.8",
      title: "Voice cloning",
      subtitle: "Replicating a specific person's voice from minutes of audio — the capability, the product applications, and the consent and misuse risks",
      take: "Voice cloning trains a TTS model to mimic a specific speaker from short audio samples — enabling personalised assistants, dubbing, accessibility preservation, and brand spokesperson consistency — but creates deepfake, fraud, and consent risks requiring verification, opt-in, and abuse monitoring before any productisation.",
      why: "Cloning is the most regulated and reputational risky voice feature. PMs must treat it like biometric data — consent artifacts, revocation, watermarking, and kill switches are not optional.",
      paragraphs: [
        [
          s("Legitimate product uses require verified consent. "),
          x(
            "Celebrity brand deal with contract, user clones own voice for accessibility, author narrates audiobook from sample, internal exec approves corporate training voice.",
            "Flow: identity verification + explicit recorded consent + terms prohibiting impersonation + audit log.",
          ),
          s(" No cloning from uploaded YouTube clip — ever."),
        ],
        [
          s("Misuse surface: fraud, political fakes, harassment. "),
          x(
            "Banking vishing with cloned CEO voice; non-consensual intimate audio. Regulators responding with disclosure requirements and bans on unverified cloning.",
            "PM mitigations: liveness check, C2PA-style audio watermark, rate limits, blocklist, report abuse, cooperate with law enforcement playbook.",
          ),
          s(" Fraud teams must review voice clone features pre-launch."),
        ],
        [
          s("Technical quality vs ethical gate. "),
          x(
            "30 seconds of audio can produce convincing clone — quality sufficient for fraud before quality sufficient for product delight.",
            "PM gate: cloning tier behind enterprise contract, not consumer free tier — unless strong identity checks.",
          ),
          s(" Ease of cloning outpaces user awareness — educate and disclose."),
        ],
      ],
      examples: [
        {
          title: "CEO internal announcements — verified clone",
          body: "Multilingual announcements used exec-cloned voice with written approval and video attestation on intranet. Clone limited to internal IP range + watermark. PM coordinated legal + comms; external use prohibited.",
        },
        {
          title: "Consumer clone feature delayed",
          body: "Startup wanted 'clone your voice' social feature. PM risk review: no robust minor protection. Shipped 18+ with ID verify + 60s consent script recording. Competitor without gates faced fraud press story 8 weeks later.",
        },
        {
          title: "Revocation — user divorce case",
          body: "User demanded ex-partner voice removed from shared account clone. PM implemented instant voice model delete + cert of deletion for legal. Consent lifecycle includes revocation SLA.",
        },
      ],
    }),
    buildSection({
      number: "3.9",
      title: "Latency in voice interfaces",
      subtitle: "Why end-to-end latency from speech-in to speech-out is the number one UX constraint in voice AI products",
      take: "Voice UX breaks when end-to-end latency (user stops speaking → agent audio starts) exceeds ~800ms–1.2s perceptual threshold — budget accumulates across STT endpointing, LLM time-to-first-token, TTS time-to-first-byte, and network — PMs must spec per-layer budgets and instrument each segment, not optimize one hop.",
      why: "Teams optimize LLM while STT endpointing adds 400ms and TTS buffers 300ms. Users experience sum. PM-owned latency budget prevents finger-pointing and defines architecture (streaming, smaller models, edge STT).",
      paragraphs: [
        [
          s("Latency stack decomposition is mandatory. "),
          x(
            "Typical conversational budget: VAD/endpointing 200–400ms + STT finalize 100–200ms + LLM TTFT 200–500ms + TTS first byte 100–300ms + network 50–150ms. Parallelization helps but endpointing is serial.",
            "PM dashboard: p50/p95 per segment per region. Alert on regression.",
          ),
          s(" Publish internal SLA: p95 voice turn < 1.0s or fallback UX."),
        ],
        [
          s("Streaming and prefetch shrink perceived wait. "),
          x(
            "Stream STT to early LLM trigger; stream LLM tokens to TTS sentence chunks; filler audio ('hm, let me check') controversial but used — brand decision.",
            "Smaller/faster LLM for voice tier; complex reasoning async callback.",
          ),
          s(" Not every query deserves same model — route by latency class."),
        ],
        [
          s("Endpointing trades cut-off errors vs speed. "),
          x(
            "Aggressive endpointing: faster response, truncates thoughtful pauses. Conservative: user finishes, feels laggy. Tunable per persona (tutor vs drive-thru).",
            "PM user research: test pause tolerance in target context — driving vs desk.",
          ),
          s(" Endpointing params are UX research outputs."),
        ],
      ],
      examples: [
        {
          title: "Drive-thru voice — 700ms target",
          body: "QSR chain required sub-700ms p95. Architecture: on-prem GPU STT + distilled LLM + streaming TTS; no cloud round trip. PM rejected feature adding RAG lookup before response — moved to confirm-after-offer pattern.",
        },
        {
          title: "Latency regression — new LLM",
          body: "Upgraded LLM improved answer quality +12% but TTFT +280ms. Voice abandonment +9%. PM split voice route to fast model; kept premium model for text channel. Latency budget enforced routing.",
        },
        {
          title: "Filler phrase controversy",
          body: "Product added 'one moment' earcon during lookup. A/B: perceived latency improved, some users found patronising. PM made filler optional in settings — latency UX isn't one-size.",
        },
      ],
    }),
    buildSection({
      number: "3.10",
      title: "PM decision lens: building a voice layer",
      subtitle: "The STT-LLM-TTS stack, the latency budget, the multilingual requirement, and the voice identity decisions that define your product's character",
      take: "Build a voice layer when users are hands-busy, eyes-busy, or accessibility requires speech — and you can meet latency, accuracy, and safety bars on real audio in target environments. Define STT vendor/mode, LLM routing, TTS persona, multilingual tiers, cloning policy, moderation, and fallback to text in one architecture doc before sprint one.",
      why: "Voice projects fail from stacked assumptions: English demo, quiet room, no diarisation, cloned voice without legal, unlimited latency. PM decision lens forces explicit go/no-go per surface.",
      paragraphs: [
        [
          s("Positive signals for voice investment. "),
          x(
            "Field workers, drivers, cooks, clinicians with gloves, visually impaired users, consumer convenience 'just talk' moments where typing is friction.",
            "Users already call phone support — voice AI augments existing behaviour.",
          ),
          s(" Voice wins when speech is naturally faster than thumbs."),
        ],
        [
          s("Negative signals — stay text-first. "),
          x(
            "Dense data entry (long forms), open offices where speaking is awkward, high-stakes verbatim capture without review, markets where STT tier B quality insults users.",
            "Multimodal with screen often beats voice-only — design hybrid first.",
          ),
          s(" Voice is not universal upgrade — context determines fit."),
        ],
        [
          s("Voice layer checklist before PRD approval. "),
          x(
            "1) Environment audio golden set 2) Streaming vs batch 3) p95 latency budget 4) Language tiers 5) Voice persona + clone policy 6) Diarisation needs 7) STT error confirmation UX 8) Kill switch",
            "Partner with legal on cloning and recording consent laws (two-party states, GDPR).",
          ),
          s(" Ship voice like safety-critical UX — instrumented, gated, reversible."),
        ],
      ],
      examples: [
        {
          title: "Logistics copilot — voice layer justified",
          body: "Drivers couldn't type while delivering. PM shipped voice status updates with 900ms p95, noise-robust STT, 40-word max responses. Text fallback in app for noisy failures. Adoption 62% active drivers — context fit clear.",
        },
        {
          title: "Open office SaaS — voice deferred",
          body: "Users rejected speaking queries in shared workspace. PM kept mic button hidden default; keyboard shortcut primary. Voice roadmap paused until car/mobile use case grew. Decision lens avoided wasted build.",
        },
        {
          title: "Voice layer ADR — single doc",
          body: "PM published ADR: Deepgram streaming STT, GPT-4o-mini voice route, OpenAI TTS 'nova', no cloning v1, EN Tier A / ES Tier B, p95 1.1s, transcript confirm on money actions. Eng estimates dropped from 3 weeks debate to execution.",
        },
      ],
    }),
  ],
  quiz: [
    {
      q: "What is the primary role of STT in a voice AI product?",
      options: [
        "To interpret user intent and execute business logic",
        "To convert audio waveforms into text for downstream processing",
        "To generate natural prosody in responses",
        "To identify fraudulent speakers automatically",
      ],
      correct: 1,
      correctFeedback:
        "Right. STT is the perception layer — speech to text — before LLM understanding and TTS response.",
      wrongFeedback:
        "STT transcribes audio; intent and response generation happen downstream. Re-read sections 3.1 and 3.6.",
    },
    {
      q: "What is a known Whisper failure mode PMs must test for?",
      options: [
        "Perfect accuracy on silent audio segments",
        "Hallucinated text on silence, noise, or music-only passages",
        "Inability to process English",
        "Mandatory streaming-only deployment",
      ],
      correct: 1,
      correctFeedback:
        "Exactly. Whisper can hallucinate phantom phrases on non-speech audio — include silence in golden eval.",
      wrongFeedback:
        "Whisper's documented weakness includes silence/music hallucinations. Re-read section 3.2.",
    },
    {
      q: "When is batch transcription preferred over streaming?",
      options: [
        "Live voice agent turn-taking under 1 second",
        "Async meeting archive where final accuracy matters more than instant partials",
        "Real-time dictation in a voice keyboard",
        "Barge-in enabled customer support bot",
      ],
      correct: 1,
      correctFeedback:
        "Right. Batch suits async workflows prioritizing final accuracy; streaming suits interactive voice.",
      wrongFeedback:
        "Interactive voice needs streaming; async archives favor batch. Re-read section 3.3.",
    },
    {
      kind: "categorize",
      q: "Match each requirement to the best voice stack choice.",
      categories: ["Streaming STT + stream TTS", "Batch STT + diarisation", "Custom pronunciation lexicon", "Verified voice clone with consent"],
      items: [
        { text: "Sub-second voice agent responses", category: 0 },
        { text: "Post-meeting searchable transcript with speakers", category: 1 },
        { text: "Pharma product name pronunciation", category: 2 },
        { text: "CEO multilingual internal announcements", category: 3 },
        { text: "Live captioning in video call", category: 0 },
        { text: "Sales call rep vs prospect attribution", category: 1 },
      ],
      correctFeedback:
        "Right. Match latency mode, diarisation, domain lexicon, and gated cloning to each use case.",
      wrongFeedback:
        "Streaming for live interaction, batch+diarisation for meetings, lexicon for domain terms, verified clone for identity-bound voice. Re-read sections 3.3–3.8.",
    },
    {
      kind: "order",
      q: "Order the voice turn latency stack for diagnosis.",
      prompt: "Drag to arrange segments users experience sequentially after they stop speaking.",
      items: [
        "Endpointing / VAD detects utterance end",
        "STT finalizes transcript",
        "LLM produces first token",
        "TTS emits first audio byte",
        "Audio plays on user device",
      ],
      correctFeedback:
        "Exactly. Diagnose p95 regressions by measuring each hop — endpointing through playback.",
      wrongFeedback:
        "After user stops: endpointing → STT → LLM TTFT → TTS first byte → playback. Re-read section 3.9.",
    },
    {
      q: "What is the strongest PM gate before shipping consumer voice cloning?",
      options: [
        "Maximum audio quality regardless of consent",
        "Identity verification, explicit consent capture, abuse monitoring, and revocation path",
        "Cloning any voice from a 5-second social media clip",
        "Skipping legal review because neural TTS is new technology",
      ],
      correct: 1,
      correctFeedback:
        "Right. Voice cloning requires verified consent, misuse controls, and deletion — treat as biometric-grade risk.",
      wrongFeedback:
        "Consumer cloning demands consent, verification, abuse controls, and legal review. Re-read section 3.8.",
    },
  ],
});
