import { buildChapter, buildSection, s, x } from "../concepts-pb4-helpers";

export const chapter07AiVideoGeneration = buildChapter({
  slug: "pb8-ai-video-generation",
  number: 7,
  shortTitle: "AI Video Generation",
  title: "AI Video Generation",
  readingMinutes: 28,
  summary:
    "The frontier capability reshaping content creation — what AI video generation can do now, what it can't, and how to build products around it responsibly",
  keyTakeaway:
    "AI video generation extends diffusion to the temporal dimension — text-to-video is impressive but inconsistent; image-to-video is the production-ready sweet spot. PMs who gate launches on consistency metrics, build provenance and consent infrastructure, and map use cases to maturity tiers avoid the deepfake reputational cliff.",
  pmCallout:
    "As a PM: don't ship AI video generation because the demo looked cinematic. Ship when image-to-video consistency passes your golden set, moderation catches synthetic likeness abuse, and legal has signed off on training-data and commercial-rights posture for your vendor stack.",
  sections: [
    buildSection({
      number: "7.1",
      title: "What is AI video generation",
      subtitle: "Synthesising coherent moving video from text, image, or video prompts — the modality that compresses creative production timelines",
      take: "AI video generation synthesises moving video from prompts — text descriptions, still images, or existing footage — using models that extend image diffusion across time. Unlike image generation, success requires temporal coherence: objects must move plausibly, identities must persist across frames, and lighting must stay consistent. The capability compresses production timelines for marketing, prototyping, and entertainment — but quality variance is high.",
      why: "PMs who treat video generation like 'images but longer' underestimate consistency failures that make output unusable in production. Understanding what the modality actually delivers — and where it breaks — prevents roadmap bets on capabilities that aren't production-ready.",
      paragraphs: [
        [
          s("Video generation is image generation plus temporal modelling. "),
          x(
            "Models learn to denoise not just spatial pixels but sequences of frames — predicting how scenes evolve over seconds.",
            "Each additional second multiplies compute, data requirements, and failure modes.",
          ),
          s(" PMs scope features by clip length and consistency requirements, not demo duration."),
        ],
        [
          s("Input modalities define reliability tiers. "),
          x(
            "Text-to-video: highest creative freedom, lowest consistency. Image-to-video: anchors appearance, most reliable. Video-to-video: transforms existing footage, best for editing workflows.",
            "Product roadmap should sequence by input type maturity — not launch all three at once.",
          ),
          s(" Reliability hierarchy is the PM's primary scoping tool."),
        ],
        [
          s("Creative production vs user-generated content are different products. "),
          x(
            "B2B creative tools tolerate iteration and human review. Consumer UGC products need one-shot quality and instant moderation.",
            "Same underlying model, radically different quality bars and safety requirements.",
          ),
          s(" PM defines product tier before selecting vendor or architecture."),
        ],
      ],
      examples: [
        {
          title: "Marketing team — 3-day campaign turnaround",
          body: "Brand team used image-to-video to animate product hero shots for social ads. 15-second clips from still photography replaced a $40K video shoot. Human editor reviewed every output before publish. PM scoped v1 to image-to-video only — text-to-video reserved for internal ideation.",
        },
        {
          title: "Consumer app — text-to-video launch failure",
          body: "Startup launched 'type a prompt, get a video' to general users. 60% of outputs had morphing faces or physics violations. App Store reviews cited 'broken AI.' PM retro: should have launched image-to-video with curated templates first.",
        },
        {
          title: "Pre-visualisation for film — controlled environment",
          body: "Studio used AI video for storyboard animatics — low fidelity acceptable, director reviews every clip. PM positioned as ideation tool, not final render. Quality bar matched use case; no user-facing consistency promise.",
        },
      ],
    }),
    buildSection({
      number: "7.2",
      title: "How video generation models work",
      subtitle: "Extending diffusion to the temporal dimension — the architecture that adds motion consistency to image generation",
      take: "Video generation models extend diffusion by operating on spatiotemporal tensors — 3D volumes of frames rather than 2D images. Architectures add temporal attention layers, frame interpolation modules, or autoregressive frame prediction to maintain coherence. Training requires massive video datasets; inference is orders of magnitude more expensive than image generation. Latent space compression (like Stable Diffusion's approach for images) is critical for practical generation times.",
      why: "PMs who understand the architecture can set realistic latency budgets, cost-per-clip estimates, and quality expectations. 'Why does a 5-second clip take 3 minutes?' has an architectural answer — and users will ask.",
      paragraphs: [
        [
          s("Spatiotemporal diffusion denoises frame sequences jointly. "),
          x(
            "Rather than generating frames independently, models denoise across time — each step considers neighbouring frames for motion coherence.",
            "Joint denoising is why video costs 10–100× more compute than a single image.",
          ),
          s(" PM includes per-second compute cost in unit economics from day one."),
        ],
        [
          s("Temporal attention captures motion patterns. "),
          x(
            "Attention layers connect pixels across frames — learning that a walking person's legs alternate, water flows downward, shadows move with light source.",
            "Failure: attention breaks on long clips — coherence degrades after 4–8 seconds in most current models.",
          ),
          s(" Clip length limits are architectural, not arbitrary vendor restrictions."),
        ],
        [
          s("Latent video diffusion compresses before denoising. "),
          x(
            "Models encode video into compressed latent representations, run diffusion in latent space, then decode to pixels — same efficiency trick as image latent diffusion.",
            "PM asks vendors: latent compression ratio and decode quality loss at target resolution.",
          ),
          s(" Latent architecture determines cost-quality tradeoff for your resolution tier."),
        ],
      ],
      examples: [
        {
          title: "Cost surprise — 5-second clip economics",
          body: "PM budgeted image-generation costs for video feature. First production estimate: $2.40 per 5-second 1080p clip vs $0.04 per image. Architecture briefing revealed spatiotemporal tensor size. PM repriced feature as premium tier or limited free generations.",
        },
        {
          title: "Clip length gate — architectural limit",
          body: "Users requested 30-second generated videos. Model coherence collapsed after 8 seconds — faces morphed, objects duplicated. PM capped v1 at 6 seconds with loop-friendly prompts. Roadmap item: 'extend temporal coherence' tied to next model generation.",
        },
        {
          title: "Resolution vs latency tradeoff",
          body: "Product offered 720p (45s generation) and 1080p (3min generation). Analytics: 78% of users chose 720p. PM made 720p default; 1080p premium. Architecture knowledge informed tiering, not guesswork.",
        },
      ],
    }),
    buildSection({
      number: "7.3",
      title: "The major video generation platforms",
      subtitle: "Sora, Runway Gen-3, Kling, Veo, Pika — capability comparison, access model, and what each is optimised for",
      take: "Major video generation platforms optimise for different outcomes: OpenAI Sora (cinematic quality, limited access), Runway Gen-3 (creative professional workflow), Kling (long-form Chinese market), Google Veo (enterprise integration), Pika (consumer-friendly short clips). Access models range from API-only to creative suite to closed beta. PMs evaluate on consistency, max duration, resolution, API availability, commercial licensing, and moderation tooling — not demo reels alone.",
      why: "Vendor selection for video generation locks in cost structure, capability ceiling, and legal posture for 12–18 months. PMs who compare platforms on production criteria — not launch hype — avoid costly migrations.",
      paragraphs: [
        [
          s("Platform maturity varies by use case, not headline. "),
          x(
            "Sora excels at cinematic text-to-video but API access is restricted. Runway offers production workflow tools. Pika optimises for quick social clips.",
            "Best demo ≠ best production fit for your specific input modality and volume.",
          ),
          s(" PM runs golden-set eval across 2–3 finalists before vendor commit."),
        ],
        [
          s("Access model shapes product architecture. "),
          x(
            "API-first vendors (Runway, some Pika tiers) integrate into your product. Suite-first vendors (Runway web app) suit creative teams, not embedded features.",
            "Closed beta vendors create roadmap dependency risk — plan fallback.",
          ),
          s(" PM documents vendor access tier in build vs buy decision."),
        ],
        [
          s("Commercial licensing differs materially. "),
          x(
            "Some platforms grant commercial rights on outputs; others restrict to personal use. Training data provenance policies vary — enterprise legal review required.",
            "Licensing is a product gate, not a footnote in vendor terms.",
          ),
          s(" PM gets legal sign-off on output rights before any user-facing launch."),
        ],
      ],
      examples: [
        {
          title: "Vendor bake-off — golden set decided",
          body: "PM ran 50 image-to-video prompts through Runway, Pika, and Kling. Runway won on character consistency (82% pass rate); Kling won on duration (10s coherent). Chose Runway for brand safety product; Kling for internal tooling only.",
        },
        {
          title: "API access delay — fallback plan saved launch",
          body: "Primary vendor delayed API access 8 weeks. PM had pre-negotiated Runway as fallback. Launched on schedule with slightly higher COGS. Vendor diversification was explicit in roadmap risk register.",
        },
        {
          title: "Licensing blocker — switched vendors",
          body: "Legal flagged: Vendor A's terms prohibited commercial use of outputs in paid product tiers. PM switched to Vendor B with explicit commercial license — 3-week delay vs potential lawsuit. Licensing review now mandatory in vendor eval checklist.",
        },
      ],
    }),
    buildSection({
      number: "7.4",
      title: "Text-to-video",
      subtitle: "Generating video from a text prompt alone — the current quality ceiling and the prompt engineering that gets the best results",
      take: "Text-to-video generates motion from language alone — no visual anchor. Current quality ceiling: 4–8 seconds of mostly coherent motion for simple scenes; character consistency, complex physics, and multi-subject scenes remain unreliable. Prompt engineering matters enormously: specifying camera movement, lighting, subject count, and motion type improves hit rate. PMs should position text-to-video as ideation and exploration — not production-final output — until consistency metrics cross threshold.",
      why: "Text-to-video demos create the highest user expectations and the highest disappointment rate. PMs who set honest capability framing and invest in prompt guidance reduce support burden and churn.",
      paragraphs: [
        [
          s("Prompt specificity drives output quality. "),
          x(
            "Vague: 'a person walking.' Better: 'medium shot, woman in red coat walking left to right on rainy street, static camera, 4 seconds.'",
            "Product should offer prompt templates and structured inputs — not blank text box only.",
          ),
          s(" PM treats prompt UX as core product surface, not power-user afterthought."),
        ],
        [
          s("Scene complexity is the failure predictor. "),
          x(
            "Single subject, simple motion: 70–80% usable. Multiple interacting subjects, dialogue, fine motor action: <30% usable without heavy editing.",
            "PM documents complexity tiers in feature spec — what's in scope for v1.",
          ),
          s(" Complexity budget prevents users from prompting into failure."),
        ],
        [
          s("Iteration is expected — design for it. "),
          x(
            "Professional users generate 10–20 variants per usable clip. Consumer products need either curation (templates) or tolerance for iteration (credit model).",
            "One-shot expectation is the primary text-to-video churn driver.",
          ),
          s(" PM models generation credits and iteration UX in unit economics."),
        ],
      ],
      examples: [
        {
          title: "Template library — 3× hit rate improvement",
          body: "Blank prompt box yielded 22% user satisfaction. PM shipped curated templates ('product reveal,' 'nature B-roll,' 'abstract background'). Satisfaction rose to 67%. Structured prompts outperformed open-ended for non-expert users.",
        },
        {
          title: "Complexity guardrails — blocked bad prompts",
          body: "PM added pre-flight check: prompts with >2 named characters or dialogue flagged with warning. Users redirected to image-to-video or simplified prompt. Support tickets for 'broken video' dropped 40%.",
        },
        {
          title: "Credit model aligned with iteration reality",
          body: "PM priced 50 generation credits per month — avg user needed 12 attempts per finished clip. Credits matched iteration behaviour; flat 'unlimited' would have destroyed unit economics at text-to-video COGS.",
        },
      ],
    }),
    buildSection({
      number: "7.5",
      title: "Image-to-video",
      subtitle: "Animating a still image — the most reliable current use case and why it outperforms pure text-to-video in production",
      take: "Image-to-video animates a still image — adding motion while preserving appearance, composition, and identity. Because the visual anchor is fixed, consistency rates are 2–3× higher than text-to-video for the same model family. Best use cases: product photography animation, portrait motion, landscape parallax, logo reveals. PMs should default to image-to-video for first production launches — it's the highest-confidence path to shippable quality.",
      why: "Image-to-video is where video generation delivers ROI today. PMs who lead with this modality ship faster, satisfy users sooner, and build eval infrastructure before tackling harder text-to-video.",
      paragraphs: [
        [
          s("Visual anchor eliminates appearance drift. "),
          x(
            "Model only needs to predict motion, not invent appearance from scratch. Face, product, background stay fixed — motion is the variable.",
            "Dramatically reduces the hardest failure mode: morphing identities.",
          ),
          s(" PM scopes v1 around 'animate what user uploads' — not 'imagine from words.'"),
        ],
        [
          s("Motion control parameters matter. "),
          x(
            "Camera pan, zoom, parallax depth, subject motion intensity — user-controllable motion reduces randomness.",
            "Product UX: sliders for motion type, not just 'animate' button.",
          ),
          s(" Controlled motion outperforms unconstrained animation in production."),
        ],
        [
          s("Input image quality sets output ceiling. "),
          x(
            "High-resolution, well-lit, uncluttered source images produce best results. Noisy, low-res, or busy images amplify artefacts.",
            "PM adds input validation: resolution minimum, subject detection, quality score.",
          ),
          s(" Input guidelines are product requirements, not user education PDFs."),
        ],
      ],
      examples: [
        {
          title: "E-commerce — product photo animation",
          body: "Retail PM launched image-to-video for seller product listings. Sellers upload hero shot; AI adds subtle rotation and zoom. 89% approval rate on first generation. Text-to-video deferred to v3. Revenue uplift from higher engagement on animated listings.",
        },
        {
          title: "Real estate — parallax from property photos",
          body: "PropTech app animated listing photos with depth-aware parallax. Image-to-video from single wide-angle shot. Agents reported 2× click-through vs static. PM gated on interior photos only — exterior with people triggered consent review.",
        },
        {
          title: "Input validation — rejected 30% of uploads",
          body: "PM added quality gate: minimum 1024px, single clear subject, no heavy text overlay. Rejected uploads got actionable feedback. Generation success rate rose from 54% to 81%. Validation was product feature, not error message.",
        },
      ],
    }),
    buildSection({
      number: "7.6",
      title: "Video-to-video",
      subtitle: "Style transfer, motion transfer, and editing existing footage with generation — the post-production workflow being reinvented",
      take: "Video-to-video transforms existing footage: style transfer (make footage look animated or painted), motion transfer (apply one video's motion to another subject), inpainting/outpainting at video level, and AI-assisted colour grading. This modality serves post-production workflows — editors who have source footage and want to transform it. Quality depends on source footage quality and transformation scope; heavy restyling introduces more artefacts than subtle enhancement.",
      why: "Video-to-video targets a different user (editor vs creator) and different buying motion (B2B creative tools vs consumer apps). PMs who match modality to user workflow capture value without competing on text-to-video hype.",
      paragraphs: [
        [
          s("Style transfer is the most mature video-to-video pattern. "),
          x(
            "Apply visual style (anime, oil painting, cinematic grade) while preserving motion and structure from source.",
            "Works best on 5–15 second clips; longer clips accumulate style inconsistency.",
          ),
          s(" PM positions style transfer as enhancement tool, not full re-creation."),
        ],
        [
          s("Motion transfer enables creative repurposing. "),
          x(
            "Apply dance motion to a still character, or replicate camera movement from reference clip.",
            "Consent and likeness issues spike — source video rights and output likeness review required.",
          ),
          s(" PM builds consent flow for any motion transfer involving identifiable people."),
        ],
        [
          s("Video inpainting removes or replaces objects across frames. "),
          x(
            "Remove boom mic, replace background, fix continuity errors — frame-consistent inpainting is emerging but artefact-prone on complex motion.",
            "Editor workflow integration (timeline, keyframes) matters more than generation quality alone.",
          ),
          s(" PM evaluates video-to-video on workflow fit, not clip gallery demos."),
        ],
      ],
      examples: [
        {
          title: "Agency — style transfer for ad variants",
          body: "Creative agency used video-to-video style transfer to produce 12 ad variants from one master shoot. Editor workflow: upload master, select style preset, review, export. PM sold B2B tool at $200/seat — not consumer credits.",
        },
        {
          title: "Motion transfer — consent incident",
          body: "User applied celebrity dance motion to personal photo without rights to source dance video. PM added ToS block and automated pose-source detection. Incident drove consent UX and source-attribution requirements into v1.1.",
        },
        {
          title: "Video inpainting — boom mic removal",
          body: "Indie filmmaker tool removed boom mic from 30-second clip. 70% frame-perfect; 30% needed manual touch-up in timeline. PM set expectation: 'AI assist, not AI replace' — human review step in workflow.",
        },
      ],
    }),
    buildSection({
      number: "7.7",
      title: "Consistency and character coherence",
      subtitle: "The hardest unsolved problem — keeping faces, objects, and scenes stable across cuts and scenes",
      take: "Character coherence — the same person looking like the same person across frames and scenes — is video generation's hardest unsolved problem. Current models maintain identity for 4–8 seconds in simple shots; multi-scene narratives, dialogue scenes, and character close-ups fail frequently. Techniques emerging: reference image conditioning, character LoRA fine-tuning, and temporal identity embeddings. PMs must set consistency as a measurable eval metric, not assume vendor marketing claims.",
      why: "Products promising 'AI actors' or 'consistent characters' without solving coherence ship broken experiences. PMs who measure and gate on consistency metrics protect brand and user trust.",
      paragraphs: [
        [
          s("Identity drift is the primary quality failure. "),
          x(
            "Faces morph subtly across frames — eyes change colour, jawline shifts, age appears to fluctuate. Unacceptable for any product showing people.",
            "PM defines identity consistency as primary eval metric for people-containing video.",
          ),
          s(" Golden set must include face-heavy clips with human-rated consistency scores."),
        ],
        [
          s("Multi-scene coherence requires reference conditioning. "),
          x(
            "Techniques: provide reference image of character, fine-tune on character dataset, use identity-preserving adapters.",
            "Each technique adds user friction (upload references) or cost (fine-tune per character).",
          ),
          s(" PM chooses coherence technique based on use case: one-off vs recurring character."),
        ],
        [
          s("Object permanence fails on interaction. "),
          x(
            "Objects held, thrown, or occluded often disappear or duplicate. Physical interaction scenes are research-grade, not production-grade.",
            "PM documents interaction complexity limits in feature spec.",
          ),
          s(" 'Character picks up cup' is a harder prompt than it sounds — scope accordingly."),
        ],
      ],
      examples: [
        {
          title: "Consistency eval — blocked character feature",
          body: "PM promised 'AI spokesperson' for SaaS onboarding videos. Golden set: same character across 5 scenes. Model passed 2 of 5 — face drift visible. Feature shipped as single-scene only with reference image upload. Multi-scene deferred to eval gate.",
        },
        {
          title: "Reference image workflow — 91% consistency",
          body: "Required users to upload 3 reference photos before multi-scene generation. Consistency pass rate rose from 38% to 91%. Friction tradeoff accepted for B2B creative tool; would fail for consumer one-tap product.",
        },
        {
          title: "Object interaction — descoped v1",
          body: "Users requested 'product demo with hands interacting.' Object permanence failed 70% of attempts. PM descoped to product-only rotation (no hands). Honest capability limit prevented viral failure clips.",
        },
      ],
    }),
    buildSection({
      number: "7.8",
      title: "Synthetic media and deepfake risk",
      subtitle: "Consent, provenance, watermarking, and the content authentication infrastructure that responsible video generation products require",
      take: "AI video generation enables synthetic media at scale — including non-consensual deepfakes. Responsible products require: explicit consent for likeness use, provenance metadata (C2PA, SynthID), visible or invisible watermarking, abuse detection for celebrity and private individual likeness, and clear user-facing disclosure that content is AI-generated. Regulatory pressure (EU AI Act, state deepfake laws) is accelerating — compliance is a product requirement, not legal afterthought.",
      why: "One viral deepfake incident attributed to your product destroys trust, invites regulation, and triggers platform bans. PMs who build safety infrastructure before scale sleep better than those who bolt it on after the scandal.",
      paragraphs: [
        [
          s("Consent flows for likeness are non-negotiable. "),
          x(
            "Any feature animating a person's face requires explicit consent from that person — or use of licensed stock likeness only.",
            "Product: identity verification, consent capture, audit trail.",
          ),
          s(" PM blocks upload-and-animate of arbitrary faces without consent gate."),
        ],
        [
          s("Provenance metadata enables authentication. "),
          x(
            "C2PA and SynthID embed generation metadata in file — model, timestamp, platform. Enables downstream detection and takedown.",
            "PM requires vendor support for provenance or adds post-processing embed step.",
          ),
          s(" Provenance is becoming platform requirement — YouTube, Meta investing in detection."),
        ],
        [
          s("Abuse detection must run before and after generation. "),
          x(
            "Pre-generation: block celebrity likeness, NCIM hashes, policy-violating prompts. Post-generation: scan outputs for undetected abuse.",
            "Budget 15–20% of video feature eng for safety infrastructure.",
          ),
          s(" One viral deepfake attributed to your product ends the feature — invest upfront."),
        ],
      ],
      examples: [
        {
          title: "Consent gate — enterprise requirement",
          body: "Enterprise customer required proof of consent workflow before procurement. PM demoed: upload face → liveness check → signed consent → generation enabled. Deal closed; consent infra became competitive advantage.",
        },
        {
          title: "Watermarking — platform compliance",
          body: "Social platform announced AI content labelling requirement. PM accelerated invisible watermark + visible 'AI generated' badge. Met deadline; competitors received content demotion warnings.",
        },
        {
          title: "Abuse detection — celebrity block",
          body: "PM deployed likeness detection for top 10K celebrity faces before public launch. Blocked 340 generation attempts in first month. Detection false-positive rate tuned with legal. Safety infra cost 15% of eng budget.",
        },
      ],
    }),
    buildSection({
      number: "7.9",
      title: "Commercial rights and training data",
      subtitle: "The unresolved IP questions around AI video generation — what PMs need to know before shipping generated content",
      take: "AI video models train on vast web-scraped video datasets — copyright status of training data is actively litigated. Commercial rights on outputs vary by platform and jurisdiction. PMs need legal clarity on: whether customers can use outputs commercially, whether outputs infringe third-party style or content, indemnification from vendor, and documentation for enterprise procurement. Until law settles, conservative posture — licensed training data vendors, explicit output rights grants, human review for commercial campaigns — reduces exposure.",
      why: "A customer using your generated video in a national ad campaign that triggers a copyright claim becomes your reputational and legal problem. PMs who front-load IP diligence avoid ship-then-litigate.",
      paragraphs: [
        [
          s("Training data provenance is the central legal uncertainty. "),
          x(
            "Models trained on YouTube, stock footage, films without explicit license — rights holders are suing.",
            "PM asks vendors: training data sources, licenses, and litigation status.",
          ),
          s(" Vendor indemnification clauses belong in enterprise contracts."),
        ],
        [
          s("Output commercial rights vary by platform tier. "),
          x(
            "Personal use only vs commercial license vs full ownership — terms differ across Runway, Pika, OpenAI, etc.",
            "PM maps platform tier to customer use case before integration.",
          ),
          s(" Misaligned licensing = customer can't use what they paid you to generate."),
        ],
        [
          s("Style mimicry is the emerging risk surface. "),
          x(
            "Generating video 'in the style of' a known director or brand aesthetic may constitute infringement even without copying specific frames.",
            "PM adds style-mimicry guardrails and prompts policy for brand-sensitive customers.",
          ),
          s(" Enterprise customers will ask — have the answer before sales calls."),
        ],
      ],
      examples: [
        {
          title: "Legal review — delayed launch 6 weeks",
          body: "Legal required vendor training-data disclosure and output indemnification before enterprise tier launch. Negotiation took 6 weeks. PM built legal review into vendor selection criteria for future — not post-selection surprise.",
        },
        {
          title: "Commercial rights — customer contract clause",
          body: "Enterprise customer required contractual guarantee of commercial rights on all outputs. PM added vendor pass-through clause and human-review option for campaign assets. Clause became standard in enterprise MSA.",
        },
        {
          title: "Style mimicry block — brand protection",
          body: "User prompted 'Wes Anderson style product video.' PM added style-mimicry detection for named directors and major brand aesthetics. Redirected to generic 'symmetrical pastel' template. Avoided potential infringement claim.",
        },
      ],
    }),
    buildSection({
      number: "7.10",
      title: "PM decision lens: AI video generation as a product feature",
      subtitle: "The use cases worth building now, the moderation requirements, and the reputational risks of what your pipeline might produce",
      take: "Ship AI video generation when: use case maps to image-to-video or controlled video-to-video (not open text-to-video), consistency passes golden set on target clip types, moderation catches likeness abuse, legal signs off on commercial rights, and unit economics work at expected generation volume. Kill or defer when: users expect Hollywood quality from one prompt, use case requires multi-scene character coherence, or moderation surface exceeds team capacity.",
      why: "The PM decision lens converts capability hype into gated product judgment. Video generation's reputational risk is asymmetric — one failure clip outweighs a hundred successes.",
      paragraphs: [
        [
          s("Maturity-tier your use cases. "),
          x(
            "Tier 1 (ship now): image-to-video product animation, style transfer for editors. Tier 2 (pilot): text-to-video with templates. Tier 3 (research): multi-scene narrative, AI actors.",
            "Roadmap follows tiers — not competitor feature parity.",
          ),
          s(" PM publishes maturity map for stakeholders — sets honest expectations."),
        ],
        [
          s("Moderation is a product surface, not backend only. "),
          x(
            "Pre-generation: prompt filtering, likeness detection. Post-generation: output review queue for flagged content. User reporting and takedown workflow.",
            "Budget moderation eng and ops at 20–30% of video feature team.",
          ),
          s(" Under-invested moderation is the primary deepfake product failure mode."),
        ],
        [
          s("Reputational risk assessment per launch tier. "),
          x(
            "Internal tool: lower risk. B2B creative suite: medium — customer publishes. Consumer UGC: highest — viral failure clips, platform policy violations.",
            "PM documents risk tier and required safety controls per tier.",
          ),
          s(" Higher risk tier = more gates before GA — not faster ship."),
        ],
      ],
      examples: [
        {
          title: "Tier 1 launch — image-to-video only",
          body: "PM scoped v1: sellers animate product photos only. No people, no text-to-video, no user prompts beyond motion sliders. Passed all gates in 8 weeks. v2 added portrait animation with consent flow. Tiered launch built trust before expanding surface.",
        },
        {
          title: "Consumer UGC — killed after risk review",
          body: "PM proposed open text-to-video social feature. Risk review: moderation surface for 100K DAU estimated at 8 FTE. Kill decision — unit economics and safety couldn't support. Redirected to B2B API with enterprise moderation contract.",
        },
        {
          title: "Golden set gate — CEO backed delay",
          body: "Sales wanted GA for video ad generator. Golden set pass rate: 71% vs 85% gate. PM held; shipped beta to 50 accounts with disclosure. Reached 86% in 4 weeks. Zero public failure clips. Gate discipline matched image generation learnings.",
        },
      ],
    }),
  ],
  quiz: [
    {
      q: "Which AI video generation input modality is most reliable for production launches today?",
      options: [
        "Text-to-video — highest creative freedom.",
        "Image-to-video — visual anchor preserves appearance and improves consistency.",
        "Video-to-video — always highest quality.",
        "All modalities are equally production-ready.",
      ],
      correct: 1,
      correctFeedback:
        "Right. Image-to-video anchors appearance and delivers 2–3× higher consistency than text-to-video.",
      wrongFeedback:
        "Image-to-video is the production-ready sweet spot. Re-read sections 7.4 and 7.5.",
    },
    {
      q: "What is video generation's hardest unsolved quality problem?",
      options: [
        "Resolution — 4K output.",
        "Character coherence — keeping faces and objects stable across frames and scenes.",
        "Audio sync — matching sound to video.",
        "File size — compression.",
      ],
      correct: 1,
      correctFeedback:
        "Exactly. Identity drift and object permanence failures are the core unsolved problems.",
      wrongFeedback:
        "Consistency and character coherence are the primary failure modes. Re-read section 7.7.",
    },
    {
      q: "What safety infrastructure should responsible AI video products include?",
      options: [
        "Terms of service only — no technical controls.",
        "Consent flows, provenance metadata, watermarking, and likeness abuse detection.",
        "Visible watermark only — no other requirements.",
        "Safety is the user's responsibility, not the product's.",
      ],
      correct: 1,
      correctFeedback:
        "Right. Consent, provenance, watermarking, and abuse detection are baseline for responsible video generation.",
      wrongFeedback:
        "Responsible products require consent, provenance, watermarking, and detection. Re-read section 7.8.",
    },
    {
      kind: "order",
      q: "Put video generation input modalities in reliability order (most reliable first).",
      prompt: "Drag to arrange from most reliable (top) to least reliable (bottom).",
      items: [
        "Image-to-video — animating a still with visual anchor.",
        "Video-to-video — style transfer and editing existing footage.",
        "Text-to-video — generating from language alone.",
      ],
      correctFeedback:
        "Right. Image-to-video is most reliable; text-to-video has lowest consistency.",
      wrongFeedback:
        "Reliability order: image-to-video → video-to-video → text-to-video. Re-read sections 7.4–7.6.",
    },
    {
      q: "Why is AI video generation dramatically more expensive than image generation?",
      options: [
        "Vendors charge more because it's newer.",
        "Spatiotemporal diffusion operates on frame sequences — joint denoising across time multiplies compute.",
        "Video files are larger to store.",
        "There is no cost difference.",
      ],
      correct: 1,
      correctFeedback:
        "Right. Temporal modelling and spatiotemporal tensors drive 10–100× compute vs single images.",
      wrongFeedback:
        "Architecture drives cost — spatiotemporal diffusion is far more compute-intensive. Re-read section 7.2.",
    },
    {
      kind: "categorize",
      q: "Match each AI video concern to its category.",
      categories: ["Quality gate", "Safety & compliance", "Commercial & legal"],
      items: [
        { text: "Golden set consistency pass rate ≥85% before GA.", category: 0 },
        { text: "C2PA provenance metadata on all outputs.", category: 1 },
        { text: "Vendor output commercial rights for enterprise tier.", category: 2 },
        { text: "Likeness consent flow before face animation.", category: 1 },
        { text: "Clip length cap based on coherence eval.", category: 0 },
        { text: "Training data provenance review with legal.", category: 2 },
      ],
      correctFeedback:
        "Right. Quality gates, safety/compliance, and commercial/legal are distinct PM disciplines.",
      wrongFeedback:
        "Match items to quality, safety, and legal categories. Re-read sections 7.7–7.10.",
    },
  ],
});
