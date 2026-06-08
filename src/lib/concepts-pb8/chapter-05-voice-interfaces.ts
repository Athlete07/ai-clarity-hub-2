import { buildChapter, buildSection, s, x } from "../concepts-pb4-helpers";

export const chapter05VoiceInterfaces = buildChapter({
  slug: "pb8-voice-interfaces",
  number: 5,
  shortTitle: "Voice Interfaces",
  title: "Voice Interfaces",
  readingMinutes: 29,
  summary:
    "Designing AI products people talk to — the interaction model, UX patterns, and reliability constraints that make voice hard to ship well",
  keyTakeaway:
    "Voice interfaces are not chat with audio — they're an eyes-free, hands-free modality with no undo, no scan-back, and brutal latency sensitivity. The production pattern is almost always multimodal: voice in, screen out. PMs who ship voice must own the full stack budget (STT → LLM → TTS), persona design, barge-in behaviour, and error recovery — because users blame the product, not the pipeline, when the assistant mishears.",
  pmCallout:
    "As a PM: if your voice feature can't recover gracefully from a misheard command in under 3 seconds, users will stop talking and start tapping. Voice is a trust game — one bad loop kills adoption faster than ten bad chat messages.",
  sections: [
    buildSection({
      number: "5.1",
      title: "What makes a voice interface different",
      subtitle: "No cursor, no screen, no undo — the constraints that make voice UX a distinct design discipline",
      take: "Voice interfaces operate in a transient, linear medium — users hear information once, can't skim, can't scroll back easily, and can't correct input with the precision of a keyboard. Cognitive load is higher for dense information; memory of spoken lists fades in seconds. Design must favour short utterances, confirmation loops, and progressive disclosure.",
      why: "Teams that port chat UI patterns to voice ship products that overwhelm users. PMs who internalise voice constraints design for ears and attention spans, not eyes and screens.",
      paragraphs: [
        [
          s("Ephemeral output demands brevity and structure. "),
          x(
            "A chat message with five bullet points is scannable. Spoken aloud, it's exhausting. Voice responses should be one to two sentences per turn with optional 'tell me more.'",
            "Rule of thumb: if it takes more than 15 seconds to speak, offer to send details to screen or notification.",
          ),
          s(" PMs set max spoken response length in the voice PRD."),
        ],
        [
          s("Input ambiguity is higher than typed text. "),
          x(
            "Homophones, accents, background noise, and mid-sentence corrections ('no wait, I meant…') break STT. Users can't see what was transcribed until you show them.",
            "Confirmation for high-stakes actions ('send $500 to John') is mandatory — not optional polish.",
          ),
          s(" Voice input error rate is 2–5× typed input in real environments."),
        ],
        [
          s("Context is invisible without visual affordances. "),
          x(
            "Chat UIs show history; pure voice has no persistent thread unless designed. Users forget what they asked three turns ago.",
            "Design patterns: recap ('You asked about your flight to Chicago'), session summaries, and screen companion showing transcript.",
          ),
          s(" Memory aids are voice UX requirements, not enhancements."),
        ],
      ],
      examples: [
        {
          title: "Banking voice transfer — brevity saved NPS",
          body: "v1 read full account balances aloud — 45-second monologue. NPS dropped. PM capped spoken responses at 12 seconds; offered 'details on screen.' Task completion unchanged; satisfaction +22 points. Voice needs editorial discipline.",
        },
        {
          title: "Smart speaker recipe app — list problem",
          body: "Reading 12-ingredient lists by voice failed user testing — nobody remembered item 7. PM redesigned: send list to phone screen on request, voice only for step-by-step one instruction at a time. Multimodal fallback fixed retention.",
        },
        {
          title: "In-car assistant — eyes on road constraint",
          body: "PM mandated no spoken responses over 8 seconds while vehicle moving. Complex answers queued as 'parked summary' or pushed to dashboard display. Safety constraint became voice design principle — not afterthought.",
        },
      ],
    }),
    buildSection({
      number: "5.2",
      title: "The voice AI stack",
      subtitle: "Wake word → STT → LLM → TTS → speaker — the five layers and where latency accumulates in each",
      take: "A production voice assistant chains five layers: wake word or push-to-talk detection, speech-to-text transcription, language model reasoning, text-to-speech synthesis, and audio playback. Each layer adds latency — typically 200–800ms for STT, 500–3000ms for LLM, 200–600ms for TTS. End-to-end budgets under 2 seconds feel responsive; over 4 seconds feel broken.",
      why: "PMs who only benchmark the LLM miss 40–60% of perceived latency. Stack-level budgeting is how voice products hit responsiveness targets — often by streaming STT partials, LLM tokens, and TTS audio in pipeline.",
      paragraphs: [
        [
          s("Wake word vs push-to-talk is a privacy and accuracy tradeoff. "),
          x(
            "Always-listening wake words (Alexa, Siri) enable hands-free but raise privacy concerns and false activations. Push-to-talk (walkie-talkie button) is more reliable in noise.",
            "Enterprise and healthcare often mandate push-to-talk or hardware mute. Consumer products favour wake words.",
          ),
          s(" PM chooses activation model based on context of use — not tech default."),
        ],
        [
          s("Streaming pipelines hide latency via overlap. "),
          x(
            "Partial STT results start LLM processing before user finishes speaking. LLM streams tokens to TTS before full response completes. User hears first audio while model still generates.",
            "Time-to-first-audio matters more than total generation time — same lesson as text streaming.",
          ),
          s(" PM tracks time-to-first-audio as primary voice latency metric."),
        ],
        [
          s("Edge vs cloud split affects every layer. "),
          x(
            "On-device wake word + STT for privacy; cloud LLM for capability. Or full on-device for offline (Apple Intelligence patterns).",
            "Hybrid routing: simple intents on-device ('set timer'), complex queries to cloud. PM defines routing rules per intent class.",
          ),
          s(" Stack architecture is a product positioning decision — privacy, offline, capability."),
        ],
      ],
      examples: [
        {
          title: "Customer support voice bot — latency waterfall",
          body: "PM instrumented stack: wake 50ms, STT 400ms, LLM 1800ms, TTS 350ms = 2.6s before first audio. Optimised LLM with smaller model for tier-1 intents cut to 1.4s. Lesson: LLM was 70% of delay — voice PMs must own model tiering.",
        },
        {
          title: "Alexa — streaming pipeline standard",
          body: "Amazon pioneered overlapping STT→LLM→TTS streaming for Alexa LLM features. Perceived latency half of wait-for-complete pipeline. PM pattern: never ship voice v1 without streaming — users compare to Alexa/Google bar.",
        },
        {
          title: "Healthcare dictation — cloud-only stack",
          body: "HIPAA-compliant voice notes used cloud STT + LLM + TTS with BAA-covered vendors. No on-device option. PM accepted 3s latency for accuracy on medical terminology — domain STT model worth the wait.",
        },
      ],
    }),
    buildSection({
      number: "5.3",
      title: "Conversational state in voice",
      subtitle: "How voice assistants track dialogue context across turns — without the visual affordance of a chat history",
      take: "Voice assistants maintain session state: dialogue history, user preferences, slot values (destination city, date), and intent stack. Without visible chat history, state must be reinforced verbally ('Your flight to Denver on the 12th') and persisted across sessions for returning users. Context window limits apply — long voice sessions need summarisation or reset.",
      why: "Lost context is the #1 voice frustration ('I already told you that'). PMs spec state persistence, recap behaviour, and session reset triggers — not just happy-path single-turn commands.",
      paragraphs: [
        [
          s("Slot-filling dominates transactional voice flows. "),
          x(
            "Book flight: need origin, destination, date, passengers. Voice UX asks one slot at a time, confirms each, handles corrections ('change the date to the 15th').",
            "Dialogue managers (Rasa, Voiceflow) or LLM function calling implement slot logic. PM writes slot flow diagrams before build.",
          ),
          s(" Multi-turn transactional voice without slot design is chaos."),
        ],
        [
          s("Anaphora resolution requires recent context. "),
          x(
            "'Move it to tomorrow' — 'it' refers to previous entity. Models need last 3–5 turns in context minimum.",
            "Session timeout (30s silence = new session) must be communicated: 'Still working on your reservation?'",
          ),
          s(" PM defines session timeout and context carryover rules."),
        ],
        [
          s("Cross-session memory is a product choice with privacy implications. "),
          x(
            "'Remember I prefer aisle seats' requires persistent user profile. GDPR deletion, opt-in, and transparency required.",
            "Ephemeral sessions (no memory) are simpler and safer for shared devices (hotel room speaker).",
          ),
          s(" Memory policy belongs in voice PRD privacy section."),
        ],
      ],
      examples: [
        {
          title: "Airline booking voice — slot flow redesign",
          body: "v1 let users say full request in one utterance; STT garbled multi-city itineraries. PM redesigned slot-by-slot flow with verbal confirmation each step. Completion rate 34% → 71%. Structured voice beats open-ended for transactions.",
        },
        {
          title: "Smart home — shared device no-memory policy",
          body: "Roommate conflict: speaker remembered one user's calendar. PM disabled cross-session memory on shared household devices; per-user voice profiles on personal devices. Context policy prevented privacy incident.",
        },
        {
          title: "Drive-through AI — 90-second session cap",
          body: "Fast-food voice ordering timed out at 90s idle. PM added 'Are you still there?' at 60s and cart recap. Abandoned orders dropped 40%. Session management is revenue-critical in voice commerce.",
        },
      ],
    }),
    buildSection({
      number: "5.4",
      title: "Interruption and barge-in",
      subtitle: "What happens when users speak over the AI response — the real-time audio challenge that most voice products handle badly",
      take: "Barge-in lets users interrupt the assistant mid-response — essential for corrections ('no, stop'), new commands, or impatience. Implementation requires echo cancellation (don't transcribe your own TTS output), voice activity detection during playback, and immediate TTS halt with pipeline reset. Poor barge-in causes the assistant to ignore users or transcribe its own speech.",
      why: "Users naturally interrupt humans — they expect the same from AI. Products without barge-in feel deaf and infuriating. PMs must spec barge-in as P0, not v2.",
      paragraphs: [
        [
          s("Echo cancellation is the hidden engineering requirement. "),
          x(
            "Speaker plays TTS while mic is open. Without acoustic echo cancellation (AEC), STT hears the assistant's own voice as user input.",
            "Hardware AEC (phone, smart speaker) vs software AEC (web browser) — quality varies. Web voice apps have hardest barge-in.",
          ),
          s(" PM tests barge-in on target hardware — laptop browser ≠ phone app."),
        ],
        [
          s("Interrupt semantics need product rules. "),
          x(
            "Hard interrupt: stop TTS immediately, process new utterance. Soft interrupt: 'Let me finish this point, then I'll help.'",
            "High-stakes confirmations should resist barge-in ('Say yes to confirm $1000 transfer').",
          ),
          s(" PM defines which states allow interrupt and which require completion."),
        ],
        [
          s("Partial response handling on interrupt. "),
          x(
            "User interrupts halfway through weather forecast. Did they hear enough? Offer 'want the rest?' or assume satisfied.",
            "State machine must track what was spoken vs what was queued.",
          ),
          s(" Interrupted responses need graceful truncation UX."),
        ],
      ],
      examples: [
        {
          title: "Web voice assistant — barge-in failure",
          body: "Browser-based support bot couldn't barge-in — users yelled over it, STT transcribed bot's own voice. PM delayed launch 6 weeks for WebRTC AEC integration. Post-fix barge-in success 88%. Web voice without AEC is not shippable.",
        },
        {
          title: "GPS navigation — interrupt for reroute",
          body: "Drivers interrupt turn-by-turn for 'recalculate route.' PM required sub-200ms TTS halt on voice activity detection. Slow interrupt caused missed turns and 1-star reviews. Real-time barge-in is safety-critical in automotive.",
        },
        {
          title: "Payment confirmation — no-barge-in zone",
          body: "PM blocked barge-in during payment confirmation readback. User must say 'confirm' or 'cancel' after full amount spoken. Prevented accidental interrupts that previously confirmed wrong transactions.",
        },
      ],
    }),
    buildSection({
      number: "5.5",
      title: "Prosody and expressiveness",
      subtitle: "How TTS systems convey emotion, emphasis, and pacing — the difference between readable and listenable",
      take: "Neural TTS goes beyond word pronunciation — prosody (pitch, rhythm, stress) conveys meaning, emotion, and brand personality. SSML tags control pauses, emphasis, and speaking rate. Modern models (ElevenLabs, OpenAI TTS, Google Chirp) generate expressive speech from context; older systems sound robotic regardless of script quality.",
      why: "Users judge assistant intelligence partly by how it sounds. Flat robotic TTS undermines premium positioning; expressive TTS increases engagement and comprehension — especially for storytelling, education, and empathy scenarios.",
      paragraphs: [
        [
          s("Script writing for voice differs from UI copy. "),
          x(
            "Written: 'Your reservation is confirmed for March 12.' Spoken: 'You're all set — March 12th.' Contractions, shorter clauses, natural rhythm.",
            "PMs employ voice copywriters or TTS-optimised templates — not web copy pasted into TTS.",
          ),
          s(" Bad script defeats good TTS model."),
        ],
        [
          s("SSML and prompt-based prosody control. "),
          x(
            "SSML: <break time='500ms'/>, <emphasis level='strong'>. Prompt-based: 'Say cheerfully: Your order shipped!'",
            "Over-punctuation in text ('...') can create unnatural pauses. Test every script with ears.",
          ),
          s(" PM reviews audio samples in QA — not just text transcripts."),
        ],
        [
          s("Emotion matching context reduces cognitive dissonance. "),
          x(
            "Sympathy for failed transaction; enthusiasm for achievement unlock; neutral for factual data.",
            "Wrong emotion (cheerful tone for error message) erodes trust faster than wrong words.",
          ),
          s(" Emotion-tone mapping table belongs in voice design system."),
        ],
      ],
      examples: [
        {
          title: "Meditation app — prosody as product core",
          body: "Calm/Headspace-class apps invest heavily in pacing — slow rate, warm tone, breath pauses. PM rejected generic TTS; licensed voice actor + neural clone. Retention 2× vs robotic TTS A/B. Prosody IS the product for audio wellness.",
        },
        {
          title: "Bank fraud alert — urgent prosody",
          body: "Fraud alert used calm default TTS; users missed urgency. PM switched to faster rate + higher pitch variation + SSML emphasis on 'unusual activity.' Response rate +35%. Prosody communicates priority when content alone doesn't.",
        },
        {
          title: "Kids education app — character voices",
          body: "PM defined three TTS personas (teacher, buddy, narrator) with distinct prosody profiles. Children engaged 40% longer vs single voice. Expressiveness drove learning outcomes — not just delight.",
        },
      ],
    }),
    buildSection({
      number: "5.6",
      title: "Voice persona design",
      subtitle: "Name, tone, gender, accent, and speaking style — the brand decisions that define how your AI sounds",
      take: "Voice persona encompasses name ('Alexa'), gender presentation, accent, age perception, formality level, and vocabulary choices. Persona must align with brand, user expectations, and cultural context. Consistency across all spoken touchpoints builds recognition; inconsistency feels like talking to strangers.",
      why: "Persona is brand in voice products — as important as visual identity. PMs own persona decisions with brand and legal; changing voice post-launch disorients users.",
      paragraphs: [
        [
          s("Gender and accent choices carry cultural weight. "),
          x(
            "Default 'female assistant' reinforces stereotypes; some markets prefer local accents for trust. UK users distrust American-accent TTS for banking.",
            "Offer voice selection where possible. Document persona rationale for inclusivity review.",
          ),
          s(" Persona decisions need explicit stakeholder sign-off — not engineer default."),
        ],
        [
          s("Formality spectrum maps to use case. "),
          x(
            "Enterprise B2B: professional, concise. Consumer companion: warm, conversational. Healthcare: calm, authoritative.",
            "Vocabulary whitelist/blacklist: avoid slang in finance; allow casual in gaming.",
          ),
          s(" PM writes persona brief: 1-page 'who is this voice?' document."),
        ],
        [
          s("Named persona vs anonymous assistant. "),
          x(
            "Named (Siri, Alexa) builds relationship but limits multi-assistant scenarios. Anonymous ('your assistant') scales but lacks warmth.",
            "Custom enterprise personas often use company name ('Acme Assistant') for brand alignment.",
          ),
          s(" Naming decision affects marketing, support docs, and user mental model."),
        ],
      ],
      examples: [
        {
          title: "Spotify DJ — persona as feature",
          body: "Spotify DJ uses distinctive voice + music commentary persona — not generic TTS. PM positioned as 'knows your taste' companion. Persona differentiation drove press and engagement vs commodity shuffle.",
        },
        {
          title: "Enterprise rebrand — voice change backlash",
          body: "Company swapped TTS voice in app update without announcement. Support tickets spiked: 'where did my assistant go?' PM lesson: voice changes need changelog, optional legacy voice period, and in-app notice.",
        },
        {
          title: "Global launch — accent localisation",
          body: "US English TTS launched in Australia; users reported 'foreign' feel. PM added Australian accent option per market. Local persona increased task completion 15% — accent is trust signal.",
        },
      ],
    }),
    buildSection({
      number: "5.7",
      title: "Error recovery in voice",
      subtitle: "What the interface does when it mishears, misunderstands, or fails — graceful degradation in an eyes-free context",
      take: "Voice error recovery patterns: reprompt ('I didn't catch that — could you repeat?'), offer alternatives ('Did you mean Denver or Dallas?'), escalate to screen ('I can show options on your phone'), fallback to typed input, and human handoff. Max two reprompt loops before changing strategy — third failure needs different modality.",
      why: "Voice error loops ('Sorry, I didn't understand' × 5) destroy trust faster than any other UX failure. PMs design recovery paths before launch — not improvised in support docs.",
      paragraphs: [
        [
          s("Confidence thresholds trigger different recovery tiers. "),
          x(
            "STT confidence <0.6: reprompt. Intent confidence <0.7: offer choices. Both low: escalate to screen or human.",
            "PM sets thresholds per intent risk level — payment intents get higher bars.",
          ),
          s(" Same confidence number means different things for 'play jazz' vs 'transfer $500.'"),
        ],
        [
          s("Explicit correction affordances. "),
          x(
            "'That's not what I said' should trigger transcript display on companion screen for tap-to-edit.",
            "Voice-only correction ('no, I said…') works for simple slots; complex fixes need visual fallback.",
          ),
          s(" PM specs correction UX per error type — mishear vs misunderstanding vs wrong action."),
        ],
        [
          s("Failure tone matters as much as failure logic. "),
          x(
            "Blame user: 'I didn't understand you.' Blame system: 'I'm having trouble hearing you — let me try differently.'",
            "Apologetic, solution-oriented copy reduces abandonment in error states.",
          ),
          s(" Voice error copy is PRD content — legal and brand reviewed."),
        ],
      ],
      examples: [
        {
          title: "Pizza ordering bot — two-strike rule",
          body: "After two failed STT attempts, bot offered: 'Tap your order on screen' with SMS link. Orders completed 78% vs 45% with infinite reprompt loop. PM two-strike rule became company voice standard.",
        },
        {
          title: "Medical intake — human handoff at low confidence",
          body: "Symptom description below intent confidence 0.75 routed to nurse callback within 5 minutes. PM prioritised safety over automation. Zero adverse events from misheard symptoms in 12-month pilot.",
        },
        {
          title: "Smart home — clarify don't deny",
          body: "v1 responded 'I can't do that' for ambiguous commands. PM changed to 'Did you want to turn off the bedroom or living room lights?' Clarifying question pattern cut frustration reports 60%.",
        },
      ],
    }),
    buildSection({
      number: "5.8",
      title: "Multimodal voice",
      subtitle: "Voice input paired with screen output — the hybrid pattern that dominates in practice over pure voice-only",
      take: "Most successful voice products are multimodal: speak to input, read/watch on screen for output. Phone assistants show cards; car systems display maps; kiosks show menus. Pure voice-only works for eyes-busy contexts (driving, cooking) with severely constrained information density.",
      why: "PMs chasing 'voice-only' parity with screen apps over-scope and under-deliver. Multimodal voice leverages voice for input convenience and screen for information richness — the pragmatic production pattern.",
      paragraphs: [
        [
          s("Input modality ≠ output modality. "),
          x(
            "Voice in + visual out is standard for search, lists, and confirmations. Visual in + voice out suits accessibility narration.",
            "PM maps each feature to optimal input/output pair — not assuming symmetry.",
          ),
          s(" 'Voice interface' often means voice input with screen backup."),
        ],
        [
          s("Companion screen unlocks complex workflows. "),
          x(
            "Flight booking: voice initiates 'flights to Chicago,' screen shows options, voice confirms selection.",
            "Reduces spoken list length; leverages visual comparison.",
          ),
          s(" PM designs voice as launcher and navigator, screen as detail surface."),
        ],
        [
          s("Cross-device handoff extends sessions. "),
          x(
            "'Continue on your phone' when smart speaker hits complexity wall. Session state syncs across devices.",
            "Apple Handoff, Alexa app, Google Home app patterns — PM specs handoff triggers.",
          ),
          s(" Device handoff is escape hatch for voice complexity limits."),
        ],
      ],
      examples: [
        {
          title: "Google Assistant — cards as default",
          body: "Most Assistant responses render visual cards on phone/watch even when spoken. PM insight: voice triggers, screen delivers. Pure audio-only is minority of successful interactions.",
        },
        {
          title: "Retail kiosk — voice browse, touch checkout",
          body: "Store kiosk used voice for product search ('where is organic milk?') and touch for payment. PM separated browse (hands dirty) from checkout (precision needed). Multimodal by task phase.",
        },
        {
          title: "Warehouse picking — voice in, headset display out",
          body: "Workers spoke pick confirmations; AR headset showed bin locations and quantities. Voice-only failed in noisy warehouse. Multimodal cut pick errors 30% vs voice-only pilot.",
        },
      ],
    }),
    buildSection({
      number: "5.9",
      title: "Accessibility as a driver",
      subtitle: "Why voice interfaces are not just convenient but essential for users who cannot use screens",
      take: "Voice interfaces are critical accessibility infrastructure for users with visual impairments, motor disabilities, dyslexia, and situational limitations (driving, carrying items). WCAG and ADA implications apply when voice is the primary interface. Design for screen reader compatibility, voice control of all features, and alternatives when voice fails.",
      why: "Accessibility isn't a niche — it's legal requirement and market expansion. PMs who design voice for accessibility first often ship better voice for everyone (clear prompts, error recovery, brevity).",
      paragraphs: [
        [
          s("Voice must not be the only path to any function. "),
          x(
            "WCAG: if voice controls a feature, keyboard/touch equivalent must exist. Voice-only features exclude deaf users and noisy environments.",
            "PM ensures feature parity across modalities — voice is enhancement, not gate.",
          ),
          s(" Accessibility audit includes voice flows — not just visual UI."),
        ],
        [
          s("Speech disabilities need accommodation. "),
          x(
            "Users with aphasia, stutter, or non-standard speech patterns may have lower STT accuracy. Adaptive models and patient reprompt loops required.",
            "Microsoft Speech Accessibility Project and similar improve recognition for atypical speech.",
          ),
          s(" PM tests with diverse speech samples — not only clear studio recordings."),
        ],
        [
          s("Voice output serves blind users when done right. "),
          x(
            "Screen readers and voice assistants overlap but differ — assistants are conversational, screen readers are navigational.",
            "Spoken UI must not conflict with screen reader audio — coordination required on mobile.",
          ),
          s(" Blind user testing is mandatory for voice-primary products."),
        ],
      ],
      examples: [
        {
          title: "Be My Eyes + AI — accessibility-first voice",
          body: "App connects blind users with AI describing visual scenes via voice. PM prioritised low-latency, clear prosody, and interrupt for corrections. Accessibility requirements drove entire stack design — became best-in-class for sighted users too.",
        },
        {
          title: "ADA lawsuit — voice-only IVR",
          body: "Bank IVR required voice for all account changes; deaf customers couldn't access. Settlement required chat and ASL video options. PM lesson: voice option yes, voice-only no.",
        },
        {
          title: "Motor impairment — voice as primary input",
          body: "Productivity app added voice commands for users with RSI. PM ensured every click action had voice equivalent. Expanded TAM 8% with minimal incremental cost — accessibility drove feature completeness.",
        },
      ],
    }),
    buildSection({
      number: "5.10",
      title: "PM decision lens: when to build voice",
      subtitle: "The use case signals, latency bar, persona decisions, and moderation considerations that define whether voice is right for your product",
      take: "Build voice when: users' hands or eyes are occupied, input speed matters more than precision, the task is simple enough for spoken dialogue, and latency budget under 2s is achievable. Don't build voice when: information density is high, precision input is critical (long IDs, passwords), environment is noisy, or moderation of spoken user content is unmanageable.",
      why: "Voice is expensive to do well and unforgiving when done poorly. PM decision framework prevents 'add Alexa skill' roadmap items that nobody uses.",
      paragraphs: [
        [
          s("Use case signals that favour voice. "),
          x(
            "Driving, cooking, exercising, warehouse work, clinical settings with gloved hands. Commands not compositions ('play music' not 'edit spreadsheet').",
            "Score: hands-busy + eyes-busy + short utterance + low precision need = voice candidate.",
          ),
          s(" If users are at a desk with keyboard, voice rarely wins."),
        ],
        [
          s("Moderation surface expands with voice. "),
          x(
            "Users speak toxic content, PII aloud in public, or trigger unintended actions. Audio logs raise privacy issues.",
            "PM plans: audio retention policy, real-time moderation, no sensitive data spoken aloud prompts.",
          ),
          s(" Voice moderation and privacy are launch blockers — not post-launch."),
        ],
        [
          s("Success metrics differ from text chat. "),
          x(
            "Task completion, time-to-first-audio, reprompt rate, barge-in success, session abandonment after error.",
            "DAU on voice feature alone misleads — measure task success in voice-eligible contexts.",
          ),
          s(" PM defines voice-specific metrics in PRD — not borrowed chat KPIs."),
        ],
      ],
      examples: [
        {
          title: "Project management app — voice killed",
          body: "PM proposed voice task creation. User research: 95% of tasks created at desk with keyboard. Voice added 8 weeks, 4% adoption. Feature deprecated. Lesson: no hands-busy context = no voice ROI.",
        },
        {
          title: "Field service app — voice shipped",
          body: "Technicians in crawl spaces, gloved hands. Voice note + work order update shipped with 67% daily use. PM validated hands-busy context in field ride-alongs before build. Context signal was decisive.",
        },
        {
          title: "Voice commerce — moderation gate",
          body: "PM blocked voice product search in kids app — couldn't moderate spoken queries in real time. Shipped voice only for whitelisted actions (reorder last purchase). Scoped moderation surface enabled launch.",
        },
      ],
    }),
  ],
  quiz: [
    {
      q: "What is the primary reason voice interfaces need shorter responses than chat?",
      options: [
        "TTS models can't generate long audio.",
        "Spoken information is ephemeral — users can't skim or easily scroll back.",
        "Microphones have limited recording time.",
        "LLMs don't work with voice.",
      ],
      correct: 1,
      correctFeedback:
        "Right. Voice is linear and transient — brevity and structure are UX requirements, not preferences.",
      wrongFeedback:
        "Users can't skim spoken content. Design for ears, not eyes. Re-read section 5.1.",
    },
    {
      q: "Where does most latency typically accumulate in a voice AI stack?",
      options: [
        "Wake word detection.",
        "The LLM reasoning step — often 50–70% of end-to-end delay.",
        "Speaker hardware playback.",
        "User thinking time.",
      ],
      correct: 1,
      correctFeedback:
        "Exactly. STT and TTS add hundreds of ms; LLM often adds 1–3 seconds — the primary optimisation target.",
      wrongFeedback:
        "LLM inference dominates voice latency. PMs must own model tiering. Re-read section 5.2.",
    },
    {
      q: "Why is barge-in (interrupting the assistant) a P0 requirement?",
      options: [
        "It reduces cloud costs.",
        "Users naturally interrupt in conversation — without barge-in, assistants feel deaf and ignore corrections.",
        "It improves STT accuracy.",
        "Regulators require it.",
      ],
      correct: 1,
      correctFeedback:
        "Right. Barge-in matches conversational expectations — poor interrupt handling is a top voice frustration.",
      wrongFeedback:
        "Users expect to interrupt. Barge-in requires echo cancellation and TTS halt. Re-read section 5.4.",
    },
    {
      kind: "categorize",
      q: "Match each voice UX pattern to its primary purpose.",
      categories: ["Latency", "Error recovery", "State management", "Persona"],
      items: [
        { text: "Streaming STT partials to start LLM early.", category: 0 },
        { text: "Two-strike reprompt then screen fallback.", category: 1 },
        { text: "Verbal recap of slot values before confirmation.", category: 2 },
        { text: "SSML emphasis and emotion-tone mapping.", category: 3 },
        { text: "Time-to-first-audio as primary metric.", category: 0 },
        { text: "Session timeout with 'still there?' prompt.", category: 2 },
      ],
      correctFeedback:
        "Right. Voice UX spans latency optimisation, recovery, state, and persona — each with distinct design patterns.",
      wrongFeedback:
        "Map patterns to latency, recovery, state, or persona purposes. Re-read sections 5.2–5.7.",
    },
    {
      kind: "order",
      q: "Put the voice AI processing pipeline in correct order.",
      prompt: "Drag to arrange from first step (top) to last (bottom).",
      items: [
        "Wake word or push-to-talk activation.",
        "Speech-to-text transcription.",
        "LLM reasoning and response generation.",
        "Text-to-speech synthesis.",
        "Audio playback to user.",
      ],
      correctFeedback:
        "Exactly. Wake → STT → LLM → TTS → playback — with streaming overlap in production.",
      wrongFeedback:
        "The stack flows wake → STT → LLM → TTS → speaker. Re-read section 5.2.",
    },
    {
      q: "When is building a voice interface the wrong product decision?",
      options: [
        "When users are driving or cooking.",
        "When users are at a desk, tasks need high-precision input, and information density is high.",
        "When the product targets accessibility users.",
        "When latency under 2 seconds is achievable.",
      ],
      correct: 1,
      correctFeedback:
        "Right. Desk + precision + density = keyboard wins. Voice needs hands-busy context and simple utterances.",
      wrongFeedback:
        "Voice fails when precision and density matter at a desk. Re-read section 5.10.",
    },
  ],
});
