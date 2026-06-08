import { buildChapter, buildSection, s, x } from "../concepts-pb4-helpers";

export const chapter02DiffusionImageGeneration = buildChapter({
  slug: "pb8-diffusion-image-generation",
  number: 2,
  shortTitle: "Diffusion & Image Gen",
  title: "Diffusion Models & Image Generation",
  readingMinutes: 29,
  summary:
    "How modern image generation actually works — the probabilistic process behind Midjourney, DALL-E, and Stable Diffusion",
  keyTakeaway:
    "Diffusion models learn to reverse a noise corruption process — starting from random pixels and iteratively denoising toward a coherent image guided by your prompt. For PMs, image generation is a product surface with sharp tradeoffs: model choice (aesthetic vs controllable vs open-weight), guidance and step parameters, conditioning beyond text (ControlNet, reference images), legal exposure on training data and deepfakes, and moderation requirements that must be designed before launch — not bolted on after a PR crisis.",
  pmCallout:
    "As a PM: treat image generation like user-generated content at infinite scale — every pixel is a liability and a delight. Ship with blocklists, provenance metadata, human review for public-facing outputs, and explicit brand policy on style mimicry. The demo is easy; responsible product is hard.",
  sections: [
    buildSection({
      number: "2.1",
      title: "What is a diffusion model",
      subtitle: "Learning to reverse a noise process — the counterintuitive mechanism that generates photorealistic images from random pixels",
      take: "A diffusion model generates images by learning to undo gradual noise corruption: during training, images are noised step by step until pure static; the model learns to predict and remove that noise. At inference, it starts from random noise and iteratively denoises — guided by a text embedding — into a coherent image.",
      why: "Stakeholders ask 'how does it know what a cat looks like?' PMs who can explain denoising — not magic — set realistic expectations on controllability, iteration time, and why the same prompt yields variance.",
      paragraphs: [
        [
          s("Generation is iterative refinement, not one-shot painting. "),
          x(
            "Each denoising step adjusts the whole image slightly — global structure emerges early, fine detail late. Typical runs: 20–50 steps. More steps ≠ always better; diminishing returns after a model-specific sweet spot.",
            "UX implication: progress indicators, cancel mid-run, preview low-step drafts. Users perceive slowness without step feedback.",
          ),
          s(" Latency is steps × model size — budget in PRD non-functionals."),
        ],
        [
          s("Diffusion replaced GANs as default for quality and stability. "),
          x(
            "GANs: generator vs discriminator, mode collapse, hard to scale. Diffusion: stable training, diverse outputs, scales with data and compute. Midjourney, SD, DALL-E 3, Flux are diffusion-family.",
            "PM doesn't pick architecture — but 'diffusion' signals: diverse outputs per prompt, tunable steps/guidance, active open-source ecosystem (SD).",
          ),
          s(" Product expectation: variation is a feature and a consistency challenge."),
        ],
        [
          s("Random seed controls reproducibility. "),
          x(
            "Same prompt + same seed + same params ≈ same image. Change seed → new variation. Products need: seed pinning for brand assets, randomise for creative exploration, audit logs for compliance.",
            "Enterprise workflows often require reproducible generations for legal review — seed and model version in metadata.",
          ),
          s(" Spec whether users need deterministic output or creative roulette."),
        ],
      ],
      examples: [
        {
          title: "Marketing asset tool — seed pinning",
          body: "Brand team needed approved hero image variations. PM shipped seed lock + 'regenerate background only' via inpainting. Legal signed off on fixed seed assets for paid media. Diffusion variance became controlled A/B, not chaos.",
        },
        {
          title: "User education — 'why different every time?'",
          body: "Support tickets spiked: 'same prompt, different logo shape.' PM added onboarding tooltip on stochastic generation and seed control for Pro tier. Reduced confusion tickets 34%. Explaining diffusion mechanics is UX work.",
        },
        {
          title: "Exec demo vs production latency",
          body: "CEO demo used 4-step distilled model on local GPU — sub-second. Production API: 28 steps, 12s p95. PM aligned roadmap on distillation for interactive tier; kept quality steps for export tier. Iterative denoising has product tiers.",
        },
      ],
    }),
    buildSection({
      number: "2.2",
      title: "The forward and reverse process",
      subtitle: "Adding noise step by step, then learning to denoise — the training loop that makes generation possible",
      take: "Forward process: gradually add Gaussian noise to an image over T timesteps until signal is destroyed. Reverse process: train a neural network to predict the noise (or the clean image) at each timestep so at generation time it can walk backward from pure noise to a structured image — the training objective that makes text-conditioned synthesis possible.",
      why: "Eng debates on 'fewer steps' and 'distilled models' trace to this loop. PMs who understand forward/reverse can evaluate quality-latency tradeoffs and vendor claims about turbo modes without accepting marketing at face value.",
      paragraphs: [
        [
          s("Training teaches denoising at every noise level. "),
          x(
            "Model sees partially noised images and learns to predict noise component. Covers coarse structure (high noise) and texture (low noise). Text conditioning injected via cross-attention to prompt embeddings.",
            "Poor text alignment often means weak conditioning at certain timesteps — PM symptom: right style, wrong object.",
          ),
          s(" Quality issues map to training coverage — not always fixable by prompt hacks."),
        ],
        [
          s("Schedulers control how noise is removed at inference. "),
          x(
            "DDIM, Euler, DPM++ — different paths through timestep space. Same model, different scheduler → speed/quality shift. Vendors hide this; open SD exposes it.",
            "PM for advanced users: expose 'quality vs speed' not scheduler names. For enterprise: lock scheduler in pipeline for reproducibility.",
          ),
          s(" Turbo/distilled models skip timesteps — validate on your prompt distribution."),
        ],
        [
          s("Classifier-free guidance trains on conditional and unconditional denoising. "),
          x(
            "Model learns with and without text prompt; at inference, blend predictions to push toward prompt. Foundation for guidance scale knob (section 2.6).",
            "Training trick becomes PM-facing parameter with brand risk at extremes.",
          ),
          s(" Forward/reverse math becomes user-visible levers — handle with care."),
        ],
      ],
      examples: [
        {
          title: "Turbo mode regression — skipped timesteps",
          body: "Eng enabled 8-step turbo for free tier. Fine text in infographic prompts collapsed. PM reverted turbo for text-heavy template category; kept for backgrounds. Timestep shortcut hurt low-noise detail phases.",
        },
        {
          title: "Reproducibility audit — scheduler change",
          body: "Pipeline upgrade changed default scheduler; marketing assets drifted. PM required scheduler + model hash in generation manifest for compliance. Reverse process params are versioned infrastructure.",
        },
        {
          title: "Training data gap — reflective surfaces",
          body: "Product shots with glass reflections often smeared. Vendor confirmed weak training on mirror/reflection pairs. PM added photography guidelines ('minimise glare') and inpainting fix workflow — not promptable around training hole.",
        },
      ],
    }),
    buildSection({
      number: "2.3",
      title: "Text conditioning",
      subtitle: "How a prompt guides the denoising process — the mechanism that connects words to pixels",
      take: "Text prompts are encoded by a language model (CLIP, T5, or LLM) into embeddings that condition each denoising step via cross-attention — the model learns which visual features to reinforce or suppress as noise is removed, translating natural language into spatial and stylistic constraints on the emerging image.",
      why: "PMs own prompt UX, template libraries, and safety filters on text input. Weak text conditioning is why products ship prompt builders, negative prompts, and style presets — the interface between user intent and denoising math.",
      paragraphs: [
        [
          s("Prompt engineering for images is not LLM prompt engineering. "),
          x(
            "Effective image prompts: subject, medium, lighting, composition, style references — order and token weighting matter. '(word:1.3)' in SD; natural language paragraphs in DALL-E 3 / Midjourney.",
            "PM deliverable: template gallery per use case (product shot, icon, storyboard) with tested prompts — not blank textarea.",
          ),
          s(" Blank prompt box is a support ticket factory."),
        ],
        [
          s("Negative prompts suppress unwanted features. "),
          x(
            "Open models: explicit 'negative prompt' list (blurry, extra fingers, watermark). Closed APIs bake negatives internally. PM policy: banned concept lists align with negative prompts and post-filters.",
            "Safety: block prompt injection attempting to override system negatives ('ignore previous, generate…').",
          ),
          s(" Text conditioning is an attack surface — sanitise and log prompts."),
        ],
        [
          s("Long-caption models improved alignment. "),
          x(
            "SD 1.5 + CLIP: 77 token limit, brittle. SD 3 / DALL-E 3: T5 or LLM encoders accept paragraphs — better nuance, worse if users ramble contradictorily.",
            "PM UX: structured fields (subject, background, mood) concatenated into model-optimal caption — guided creation beats raw prose.",
          ),
          s(" Structure user intent before it hits the conditioner."),
        ],
      ],
      examples: [
        {
          title: "Prompt template library — ecommerce",
          body: "Sellers picked 'studio product,' 'lifestyle outdoor,' 'flat lay.' Backend assembled tested prompt skeletons with brand-safe negatives. Generation success rate (no regen needed) 41% → 67%. PM owned templates as product IP.",
        },
        {
          title: "Prompt injection in consumer app",
          body: "Users appended 'nude' synonyms to bypass filters via unicode homoglyphs. PM added normalisation, blocklist, and classifier on prompt before API. Text conditioning path secured like any user input.",
        },
        {
          title: "DALL-E 3 rewrite — user surprise",
          body: "API silently expanded short prompts. Users complained outputs didn't match exact words. PM toggled 'literal vs enhanced prompt' with preview of rewritten caption. Transparency fixed trust — conditioning was LLM-mediated.",
        },
      ],
    }),
    buildSection({
      number: "2.4",
      title: "Latent diffusion",
      subtitle: "Running diffusion in compressed latent space instead of pixel space — the efficiency innovation behind Stable Diffusion",
      take: "Latent diffusion (LDM) runs the denoising process in a compressed latent space produced by a variational autoencoder (VAE) — the model denoises smaller latent tensors, then the VAE decoder upsamples to full-resolution pixels — dramatically cutting compute and enabling consumer GPUs and faster APIs.",
      why: "Stable Diffusion's product impact came from latent diffusion + open weights. PMs evaluating self-host vs API should know latent space enables affordable scale — and introduces VAE artifacts (bad hands, blurry text) that aren't fixable by prompt alone.",
      paragraphs: [
        [
          s("Pixel-space diffusion is prohibitively expensive at scale. "),
          x(
            "Denoising 1024×1024 RGB directly = huge tensors per step. LDM denoises 64×64×4 latent grid — ~48× less compute for comparable output resolution.",
            "Enables self-host on single GPU, sub-$0.01 images at volume — changes unit economics for generative features.",
          ),
          s(" Latent diffusion made image gen a feature, not a research demo."),
        ],
        [
          s("VAE decode is a quality bottleneck. "),
          x(
            "Faces, fingers, small text — artifacts often from VAE, not diffusion UNet. Fixes: specialised VAE, refiner pass, upscaler, inpaint repair workflow.",
            "PM acceptance criteria: separate 'structure correct' vs 'decode polish' — may need post-pipeline.",
          ),
          s(" Budget engineering for decode/refine if hands and text matter."),
        ],
        [
          s("Open SD stack = latent + UNet + text encoder + VAE. "),
          x(
            "Swap components independently: SDXL base + refiner, replace CLIP with OpenCLIP, plug LoRA into UNet. Modularity helps custom pipelines; fragmentation hurts support.",
            "PM self-host decision: own integration test matrix across component versions.",
          ),
          s(" Modularity is power and maintenance — document pinned stack."),
        ],
      ],
      examples: [
        {
          title: "Self-host SDXL — COGS win",
          body: "At 2M images/month, API cost $180K. PM approved self-host LDM on 8×A100 cluster — infra $52K/month + 1 MLOps. Latent diffusion economics justified capital. Required incident runbooks for VAE rollback.",
        },
        {
          title: "Text in logos — VAE limit",
          body: "Generated posters had garbled taglines. Refiner + SDXL VAE fix recovered 80% legibility. PM set expectation: 'AI typography assist' not 'final print typography' — human designer step retained.",
        },
        {
          title: "Mobile latent preview",
          body: "App showed low-step latent preview before full decode — users saw composition in 2s, final in 10s. Perceived latency win without cutting steps. PM feature from understanding latent vs pixel phases.",
        },
      ],
    }),
    buildSection({
      number: "2.5",
      title: "The major image generation models compared",
      subtitle: "Midjourney, DALL-E 3, Stable Diffusion, Flux — what each optimises for, who controls it, and how they differ",
      take: "Midjourney optimises aesthetic wow and community workflow; DALL-E 3 optimises prompt adherence inside OpenAI ecosystem; Stable Diffusion optimises openness and self-host control; Flux optimises quality-speed frontier on open weights — PMs pick based on control, cost, legal posture, moderation API, and aesthetic fit for brand, not leaderboard beauty alone.",
      why: "Stakeholders say 'use Midjourney' without integration path. PM comparison matrix prevents wrong vendor lock — e.g., picking Discord-only Midjourney for in-app API feature.",
      paragraphs: [
        [
          s("Midjourney — aesthetic leader, product integration friction. "),
          x(
            "Strengths: stylised beauty, art direction, fast community iteration. Weaknesses: no official enterprise API (historically Discord-first), limited fine control, ToS constraints on commercial workflow.",
            "Best for: marketing creative teams, concept art, mood boards — not embedded in-app generation without partner risk review.",
          ),
          s(" Evaluate legal/integration before building on unofficial wrappers."),
        ],
        [
          s("DALL-E 3 — OpenAI alignment and safety packaging. "),
          x(
            "Strengths: strong prompt following, ChatGPT integration, enterprise API, built-in safety filters. Weaknesses: cost, less stylised than MJ, OpenAI lock-in, training data disputes.",
            "Best for: copilots already on OpenAI, rapid MVP with moderation handled vendor-side.",
          ),
          s(" Pair with OpenAI content policy review for your vertical."),
        ],
        [
          s("Stable Diffusion / Flux — open weights, maximum control. "),
          x(
            "SD: massive LoRA/ControlNet ecosystem, self-host, license varies by checkpoint. Flux: newer quality bar, Black Forest Labs licensing tiers for commercial.",
            "Best for: high volume, custom fine-tunes, air-gapped, brand-specific LoRA — you own moderation and infra.",
          ),
          s(" Open models shift liability and MLOps to you — plan both."),
        ],
      ],
      examples: [
        {
          title: "In-app avatar gen — DALL-E vs SD",
          body: "PM needed API + moderation for teen social app. DALL-E enterprise API + OpenAI safety won despite higher per-image cost. Self-host SD would require CSAM classifier and 24/7 on-call. Control vs responsibility tradeoff.",
        },
        {
          title: "Agency creative — Midjourney retained",
          body: "Internal marketing kept Midjourney for campaigns; product used SD fine-tune for on-brand asset bulk. PM documented dual-vendor strategy in creative ops handbook — different tools for different surfaces.",
        },
        {
          title: "Flux migration bake-off",
          body: "PM ran 500 brand prompts on SDXL vs Flux. Flux won photoreal product shots; SDXL LoRA still won branded illustration style. Hybrid routing by template type — no single model winner.",
        },
      ],
    }),
    buildSection({
      number: "2.6",
      title: "Guidance scale and sampling steps",
      subtitle: "The parameters that trade diversity for prompt fidelity — and what happens at the extremes",
      take: "Guidance scale (CFG) controls how strongly denoising follows the text prompt vs allowing diverse outputs; sampling steps control how many denoising iterations run. High guidance = prompt literal but oversaturated/weird; low guidance = dreamy but off-brief. More steps = sharper to a point; too few = muddy.",
      why: "These knobs are PM-visible as 'creativity vs accuracy' sliders. Defaults shape brand outcomes — wrong global defaults generate either bland or horror-valley assets across all users.",
      paragraphs: [
        [
          s("Guidance scale typically lives between 5 and 15. "),
          x(
            "CFG 7–9: balanced default for SD. Above 12: contrast spikes, artifact halos, 'fried' look. Below 4: ignores prompt, drift.",
            "Expose as 'adherence' slider with safe bounds — hide raw CFG from casual users.",
          ),
          s(" Power users get CFG; everyone else gets curated presets."),
        ],
        [
          s("Steps trade latency for detail with diminishing returns. "),
          x(
            "20–30 steps common baseline; 50+ for marginal gains. Distilled models: 4–8 steps with tuned schedulers.",
            "PM tiering: draft 12 steps, export 30 steps. Show estimated wait time per tier.",
          ),
          s(" Default steps set COGS — load test at peak campaign traffic."),
        ],
        [
          s("Model-specific sweet spots require golden prompt eval. "),
          x(
            "Optimal CFG/steps depend on checkpoint, resolution, and prompt class. Product shot vs watercolor landscape differ.",
            "Build per-template defaults from eval — not one global constant from a blog post.",
          ),
          s(" Template-level params beat global defaults for quality consistency."),
        ],
      ],
      examples: [
        {
          title: "CFG too high — brand campaign disaster",
          body: "Default CFG 14 for 'vivid marketing.' Launch week assets looked oversharpened and uncanny. PM lowered to 7.5 for product templates; kept 11 only for 'illustration' mode. Parameter default was brand decision.",
        },
        {
          title: "Draft vs export steps",
          body: "Free users: 15 steps preview. Paid export: 35 steps + upscaler. Conversion +8% on export upsell. PM priced latency/quality explicitly — steps as monetisation lever.",
        },
        {
          title: "A/B guidance on adherence complaints",
          body: "Merchants said images 'didn't match prompt.' A/B: adherence slider default 60% vs 80%. Higher adherence reduced regens 22% but increased 'looks artificial' reports 9%. PM picked 70% default with advanced toggle.",
        },
      ],
    }),
    buildSection({
      number: "2.7",
      title: "ControlNet and image conditioning",
      subtitle: "Guiding generation with depth maps, poses, edges, and reference images — precision beyond text prompts",
      take: "ControlNet and similar adapters inject structural conditioning — edges, depth, pose skeletons, segmentation masks — into the diffusion UNet so generation follows spatial layout while text controls style and content — enabling pose-locked characters, architecture faithful to sketch, and product shots matching reference composition.",
      why: "Text alone can't specify 'exactly this pose' or 'this room layout.' PMs evaluating creative tools, fashion, interior design, or storyboard features should know image conditioning is the precision layer — and adds pipeline complexity (preprocessors, user upload UX).",
      paragraphs: [
        [
          s("Structural controls reduce prompt lottery. "),
          x(
            "Canny edge → preserve layout; depth map → furniture placement; OpenPose → character pose lock; IP-Adapter → style from reference image.",
            "Workflow: user uploads reference → preprocessor extracts control map → diffusion conditioned on map + text.",
          ),
          s(" Condition when pixel layout matters — not when abstract concept art suffices."),
        ],
        [
          s("Multi-control stacking increases power and failure modes. "),
          x(
            "Depth + pose + canny simultaneously — conflicts if maps disagree. PM UX: guided wizard ('upload floor plan') not arbitrary control spaghetti.",
            "QA matrix explodes with control combinations — limit supported modes per release.",
          ),
          s(" Ship 2–3 control modes well, not ten poorly."),
        ],
        [
          s("Reference image conditioning vs inpainting. "),
          x(
            "Img2img: noise partial image and regenerate. Inpaint: mask region only. ControlNet: structural guide without destroying whole image. Pick by edit scope — PM specs in design mocks.",
            "Mis-picked mode causes 'why did my whole photo change' support pain.",
          ),
          s(" Name the edit primitive in UI — users don't know ControlNet from img2img."),
        ],
      ],
      examples: [
        {
          title: "Interior design — depth + sketch",
          body: "Users uploaded room photo; depth ControlNet + 'Scandinavian refresh' prompt. Layout preserved, furniture restyled. PM metric: project save rate +31% vs text-only. Preprocessor failures (dark rooms) routed to tips UX.",
        },
        {
          title: "Fashion lookbook — pose lock",
          body: "OpenPose from mannequin shot ensured consistent model pose across outfit variants. Reduced regen from pose drift 45%. PM scoped pose library — 12 approved templates for season launch.",
        },
        {
          title: "Control stack conflict",
          body: "Power users enabled depth + canny + pose; outputs melted. PM limited Pro tier to dual-control max; surfaced warning on triple stack. Conditioning power needs guardrails.",
        },
      ],
    }),
    buildSection({
      number: "2.8",
      title: "Fine-tuning image models",
      subtitle: "DreamBooth, LoRA for diffusion — training a model to generate specific subjects, styles, or brand assets",
      take: "DreamBooth and LoRA adapters fine-tune diffusion UNets on small image sets to embed a specific subject ('sks dog'), brand style, or product line — cheaper than full retrain, composable with base checkpoints — the path to on-brand generation at scale with legal review of training images you own.",
      why: "Marketing wants 'our brand look' not generic SD aesthetic. PMs scope fine-tune like LLM fine-tune: owned training images, eval set, version pins, and sunset when base model upgrades orphan adapters.",
      paragraphs: [
        [
          s("DreamBooth specialises a subject; LoRA specialises a style or concept. "),
          x(
            "DreamBooth: 10–20 images of one product/character, trigger token in prompt. LoRA: lighter weight file, stack multiple (style + character), faster train.",
            "Commercial use requires license on base model + rights to training photos — PM + legal sign-off.",
          ),
          s(" Only train on assets you own or have model release for."),
        ],
        [
          s("Fine-tune eval is visual and subjective — structure it. "),
          x(
            "Golden prompts per template; human raters on brand dimensions (color, composition, logo accuracy). Inter-rater agreement matters — 'on brand' is fuzzy.",
            "Automated metrics (CLIP score) supplement, don't replace, brand steward review.",
          ),
          s(" Brand team owns accept/reject rubric — not eng alone."),
        ],
        [
          s("Adapter lifecycle couples to base checkpoint updates. "),
          x(
            "SD 1.5 LoRA may not port to SDXL or Flux without retrain. PM tracks base model deprecation like LLM base version.",
            "Maintain adapter registry: base hash, train date, approved use cases, expiry.",
          ),
          s(" Plan retrain budget when upgrading foundation checkpoint."),
        ],
      ],
      examples: [
        {
          title: "Brand LoRA — seasonal campaign",
          body: "Trained LoRA on 200 approved brand illustrations. Trigger token in merchant templates. Campaign asset production time -40%. Legal cleared training set ownership; LoRA file access restricted to internal tool.",
        },
        {
          title: "DreamBooth product hero — ecommerce",
          body: "15 angles of new sneaker; DreamBooth for lifestyle gen without photo shoot. PM required human QA on every public listing image. Fine-tune accelerated draft; human gate for publish.",
        },
        {
          title: "Base upgrade orphan — SDXL migration",
          body: "SD 1.5 LoRA library invalidated on SDXL move. PM budgeted 6-week retrain sprint; staggered template migration. Image fine-tune debt mirrors LLM adapter debt.",
        },
      ],
    }),
    buildSection({
      number: "2.9",
      title: "The ethical and legal landscape",
      subtitle: "Training data provenance, style mimicry, deepfakes, and the copyright cases reshaping what image generation products can do",
      take: "Image generation products face unresolved copyright questions (training on scraped art), likeness and deepfake regulation, style mimicry backlash, and platform liability for harmful outputs — PMs must partner with legal on ToS, opt-out policies, provenance standards, and geographic compliance before scaling generative features.",
      why: "A single viral deepfake or artist lawsuit can pause roadmap. Ethical/legal design is not legal's job alone — PM defines what the product encourages, logs, blocks, and discloses.",
      paragraphs: [
        [
          s("Training data provenance is actively litigated. "),
          x(
            "Artists allege unauthorised use of work in LAION and model training. Outcomes vary by jurisdiction. Enterprise customers ask: 'was your model trained on our competitors' imagery?'",
            "PM vendor diligence: training data statements, indemnification clauses, opt-out mechanisms (e.g., robots.txt respect claims — verify).",
          ),
          s(" Document vendor claims; don't repeat unverified 'fully licensed' marketing."),
        ],
        [
          s("Likeness, deepfakes, and impersonation are regulated emerging. "),
          x(
            "EU AI Act, US state deepfake laws, platform policies on political and NCII content. Products need consent flows for face/voice-conditioned gen.",
            "Block: celebrity impersonation without rights, non-consensual intimate imagery, minor likeness synthesis.",
          ),
          s(" Face-conditioned features require identity verification and consent UX."),
        ],
        [
          s("Style mimicry is reputational risk even when legal wins. "),
          x(
            "Living artists may lose commissions when users clone style with one word. Community backlash affects brand regardless of court outcome.",
            "PM policy: no 'in the style of [living artist]' presets; promote transformative use cases; artist partnership program where strategic.",
          ),
          s(" Ethics shapes roadmap before courts settle copyright."),
        ],
      ],
      examples: [
        {
          title: "Artist opt-out program",
          body: "Creative platform let artists submit opt-out list excluded from style LoRA training. PM partnered with trust team on review SLA. Reduced creator protest; legal noted opt-out not same as opt-in in all regions — geo disclaimers added.",
        },
        {
          title: "Deepfake election pause",
          body: "Political deepfake viral week before election. PM emergency-disabled face-swap feature globally; retained text-to-image with stricter blocklist. Crisis playbooks for generative features are mandatory.",
        },
        {
          title: "Enterprise indemnity question",
          body: "Fortune 500 asked indemnification for copyright claims on generated assets. PM escalated to vendor enterprise addendum; interim policy: human legal review on campaign assets over $50K spend. Legal landscape blocked full auto-publish.",
        },
      ],
    }),
    buildSection({
      number: "2.10",
      title: "PM decision lens: image generation as a product feature",
      subtitle: "Use cases, quality thresholds, moderation requirements, and the brand risk of what your model might produce",
      take: "Ship image generation when users need novel visuals faster than stock/search/photoshoot allows — marketing variants, concept exploration, personalised assets — and you can absorb moderation, legal, and brand risk. Delay when mistakes are public, regulated, or trademark-sensitive; require human approval, provenance metadata, and clear 'AI-generated' disclosure.",
      why: "Generative features demo in 48 hours and haunt in 48 days. PM decision lens separates creative acceleration tools (internal, draft) from customer-facing autonomous generation (high risk).",
      paragraphs: [
        [
          s("High-fit use cases: draft, internal, opt-in creative. "),
          x(
            "Storyboard drafts, ad variant exploration, background replacement, personalised invitation graphics — user expects iteration, errors recoverable.",
            "Monetise on export quality tier and volume — align COGS to willingness to pay.",
          ),
          s(" Start internal dogfood before customer-facing autopublish."),
        ],
        [
          s("High-risk use cases: identity, news, minors, trademarks. "),
          x(
            "Realistic humans for news, medical imagery, child-facing apps, automatic logo generation — elevated harm surface.",
            "Require: blocklists, output classifiers, human review queue, C2PA/watermark metadata, age gates.",
          ),
          s(" If harm is irreversible, don't ship v1 without review gate."),
        ],
        [
          s("Launch checklist for generative image features. "),
          x(
            "1) Use case risk tier 2) Model/vendor ADR 3) Prompt/output policy 4) Moderation pipeline 5) User disclosure 6) Appeal process 7) Incident kill switch 8) Golden eval per template",
            "Skip any item → defer launch. Generative PM owns kill switch authority.",
          ),
          s(" Quality threshold is 'safe at scale,' not 'wow in demo.'"),
        ],
      ],
      examples: [
        {
          title: "B2B slide deck gen — internal first",
          body: "PM launched v1 internal-only for sales engineers. Collected failure modes 6 weeks before customer beta. Added mandatory human pick among 4 variants. Customer launch avoided public deepfake incident.",
        },
        {
          title: "Kids app — feature killed",
          body: "Proposal: generate story illustrations. PM risk review: cannot guarantee block of disturbing imagery at 99.99%. Shipped curated asset library instead. Decision lens saved regulatory exposure.",
        },
        {
          title: "Disclosure UX — trust win",
          body: "Published C2PA metadata + 'AI generated' badge on exports. Transparency reduced backlash when influencer used tool; press framed as assisted creation. PM treated disclosure as feature, not shame.",
        },
      ],
    }),
  ],
  quiz: [
    {
      q: "How does a diffusion model generate an image at inference time?",
      options: [
        "By retrieving the closest match from a database of stock photos",
        "By starting from random noise and iteratively denoising toward a coherent image guided by conditioning",
        "By stitching together patches from existing copyrighted artworks",
        "By running a single forward pass from text to pixels with no iteration",
      ],
      correct: 1,
      correctFeedback:
        "Right. Generation reverses the noise process over multiple denoising steps, conditioned on text or other inputs.",
      wrongFeedback:
        "Diffusion iteratively denoises from noise — it doesn't retrieve or stitch existing images. Re-read sections 2.1 and 2.2.",
    },
    {
      q: "What problem does latent diffusion primarily solve?",
      options: [
        "Eliminating all need for text prompts",
        "Reducing compute by denoising in a compressed latent space instead of full pixel space",
        "Guaranteeing perfect typography in every generation",
        "Removing legal risk from training data",
      ],
      correct: 1,
      correctFeedback:
        "Exactly. LDM runs diffusion in VAE-compressed latent space — faster and cheaper, enabling SD-scale deployment.",
      wrongFeedback:
        "Latent diffusion is an efficiency innovation (VAE latent space), not a legal or prompt elimination fix. Re-read section 2.4.",
    },
    {
      q: "What happens at very high classifier-free guidance (CFG) scales?",
      options: [
        "Images always become more diverse and creative",
        "Prompt adherence may increase but artifacts and oversaturated 'fried' looks often appear",
        "Generation requires zero denoising steps",
        "The model ignores the text prompt entirely",
      ],
      correct: 1,
      correctFeedback:
        "Right. High CFG pushes prompt literalism but commonly introduces visual artifacts — why PMs bound 'adherence' sliders.",
      wrongFeedback:
        "High CFG increases prompt pressure, often causing artifacts — low CFG causes drift. Re-read section 2.6.",
    },
    {
      kind: "categorize",
      q: "Match each need to the best approach.",
      categories: ["Text prompt only", "ControlNet / structural conditioning", "LoRA / DreamBooth fine-tune", "Human review gate"],
      items: [
        { text: "Abstract concept mood board exploration", category: 0 },
        { text: "Lock character pose for fashion variants", category: 1 },
        { text: "On-brand illustration style at scale", category: 2 },
        { text: "Customer-facing photorealistic human ads", category: 3 },
        { text: "Preserve room layout from user photo", category: 1 },
        { text: "Specific product hero without photoshoot", category: 2 },
      ],
      correctFeedback:
        "Right. Text for exploration, controls for layout/pose, fine-tune for brand/subject, review for high-risk publish.",
      wrongFeedback:
        "Match precision needs to controls/fine-tunes and risk to review gates. Re-read sections 2.7, 2.8, and 2.10.",
    },
    {
      kind: "order",
      q: "Order the responsible generative image launch checklist.",
      prompt: "Drag to arrange recommended sequence.",
      items: [
        "Tier use case risk (internal draft vs public publish)",
        "Define prompt/output policy and moderation pipeline",
        "Run golden eval per template on target model",
        "Ship disclosure/provenance and kill switch",
        "Document vendor/model ADR with legal review",
      ],
      correctFeedback:
        "Exactly. Risk tier → policy/moderation → eval → safety ops → legal ADR.",
      wrongFeedback:
        "Start with risk tiering and policy before eval and launch safety mechanics. Re-read sections 2.9 and 2.10.",
    },
    {
      q: "When is self-hosted Stable Diffusion / Flux most compelling vs closed API?",
      options: [
        "When you want zero MLOps responsibility and fastest safety packaging",
        "When you need high volume, custom LoRA, air-gap, or deep pipeline control and can own moderation",
        "When you never need to update model weights",
        "When legal prohibits all generative features regardless of host",
      ],
      correct: 1,
      correctFeedback:
        "Right. Open/self-host wins on control, volume economics, and custom fine-tunes — you own moderation and ops.",
      wrongFeedback:
        "Self-host trades control for MLOps and safety ownership. Closed APIs package moderation. Re-read section 2.5.",
    },
  ],
});
