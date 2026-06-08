import { buildChapter, buildSection, s, x } from "../concepts-pb4-helpers";

export const chapter04DataStrategyFlywheels = buildChapter({
  slug: "pb7-data-strategy-flywheels",
  number: 4,
  shortTitle: "Data Strategy & Flywheels",
  title: "Data Strategy & Flywheels",
  readingMinutes: 28,
  summary:
    "Your data is your moat — how proprietary signal, feedback loops, labelling strategy, and governance determine whether your AI product compounds in value or gets copied by the next foundation model release.",
  keyTakeaway:
    "Models commoditise; proprietary data that improves with usage does not. PMs who design for training signal at launch — not after PMF — build flywheels. PMs who treat data as an engineering afterthought ship features competitors can replicate in a quarter.",
  pmCallout:
    "As a PM: when leadership asks 'what's our AI moat?' the honest answer is your data flywheel — not your prompt. Ask eng on day one: does every user interaction generate labelled signal we can learn from?",
  sections: [
    buildSection({
      number: "4.1",
      title: "Why data strategy is AI strategy",
      subtitle: "The model is a commodity; the data that shapes it is the asset",
      take: "Foundation models level the playing field on raw capability — what differentiates AI products is proprietary data: user behaviour, domain expertise, longitudinal outcomes, and feedback loops that competitors cannot scrape or license. Data strategy is not a data-team problem; it is the product strategy for AI.",
      why: "PMs who conflate 'we use GPT-4' with competitive advantage discover that every competitor ships the same wrapper in weeks. Durable AI products are built on data assets that compound — PMs own whether those assets exist.",
      paragraphs: [
        [
          s("Models are rented; data is owned. "),
          x(
            "API access to frontier models is available to anyone with a credit card. What you cannot rent is three years of how your users edit AI drafts, which support resolutions worked, or how clinicians overrode diagnostic suggestions.",
            "Switching model providers is painful but possible. Rebuilding proprietary behavioural data from scratch is not.",
          ),
          s(" PMs inventory owned data assets in the same breath as feature roadmaps."),
        ],
        [
          s("Data strategy precedes model strategy. "),
          x(
            "Choosing RAG vs fine-tune vs prompt-only depends on what data you have and can collect. Teams that pick architecture before auditing data availability build impressive demos on borrowed knowledge.",
            "First question in AI PRD: what data exists today, what must we capture at launch, and who owns consent for each stream.",
          ),
          s(" 'We need more data' without a capture plan is a roadmap stall, not a strategy."),
        ],
        [
          s("Data debt compounds like tech debt — faster. "),
          x(
            "Six months of unlogged user corrections cannot be retroactively labelled. Missing consent at signup blocks future training use. PMs who defer instrumentation pay 10x to fix it under regulatory pressure.",
            "Treat data instrumentation as launch-blocking, not post-GA analytics.",
          ),
          s(" Every AI feature without a data capture spec ships blind to its own improvement path."),
        ],
      ],
      examples: [
        {
          title: "Notion AI — workspace content as owned data asset",
          body: "Notion's moat is not the LLM wrapper — it is structured workspace data users already created. PM framed AI as leverage on existing proprietary corpus, not a bolt-on chatbot. Competitors could match models; they could not match user knowledge graphs.",
        },
        {
          title: "Legal tech startup with no feedback loop — commoditised in 90 days",
          body: "Product used GPT-4 for contract review with zero logging of lawyer edits. When Harvey and incumbents shipped similar features, there was no proprietary correction dataset to fine-tune on. PM post-mortem: data strategy was absent from v1 PRD.",
        },
        {
          title: "Duolingo — learning data as core IP",
          body: "Duolingo's AI features draw on billions of learner mistake patterns — data no generic LLM possesses. PM treats every exercise interaction as training signal for personalisation. Model vendor is interchangeable; learner telemetry is not.",
        },
      ],
    }),
    buildSection({
      number: "4.2",
      title: "The data flywheel explained",
      subtitle: "More users → more signal → better product → more users",
      take: "A data flywheel is the compounding loop where product usage generates training signal that improves the model, which improves the product, which attracts more usage. Each revolution widens the gap between you and copycats — if the loop actually closes.",
      why: "Flywheels are easy to diagram and hard to operationalise. PMs who understand where loops break — cold start, signal sparsity, latency to improvement — avoid pitching 'it gets better with usage' without a credible mechanism.",
      paragraphs: [
        [
          s("The canonical loop has four stages. "),
          x(
            "Acquire users → capture interactions → convert signal to model improvement → deliver measurably better outcomes → retain and acquire more users. Any broken link stalls compounding.",
            "Cold start: new products have no signal. Mitigation: bootstrap with expert data, synthetic data, or narrow domain where you have depth.",
          ),
          s(" PMs diagram the loop and mark which stage is weakest today."),
        ],
        [
          s("Flywheels require closed-loop learning infrastructure. "),
          x(
            "Capturing thumbs-down is useless without a pipeline to eval, label, retrain or prompt-tune, deploy, and measure delta. PM funds the loop, not just the capture UI.",
            "Time from signal to model update is a PM KPI — quarterly retrain is a slow flywheel; weekly is competitive.",
          ),
          s(" Ask eng: what is our signal-to-ship latency?"),
        ],
        [
          s("Network effects vs data effects — know which you have. "),
          x(
            "Network effect: product value rises with user count (marketplace). Data effect: model quality rises with usage volume (recommendation, support AI). Some products have both; many have neither and claim a flywheel anyway.",
            "Honest PM assessment: does marginal user #10,000 improve model quality for user #1?",
          ),
          s(" Pitch flywheels only when the mechanism is real and measurable."),
        ],
      ],
      examples: [
        {
          title: "Spotify Discover Weekly — classic data flywheel",
          body: "More listening → better taste models → better playlists → more listening. PM owned the loop metric: skip rate on recommended tracks. Each playlist generation fed back into collaborative filtering — model and product inseparable.",
        },
        {
          title: "Broken flywheel — feedback logged but never used",
          body: "B2B writing assistant collected 200K thumbs ratings but no retrain pipeline for 18 months. Users stopped rating when quality didn't improve. PM restarted project with explicit quarterly model update commitment tied to feedback volume.",
        },
        {
          title: "Waze — network + data flywheel combined",
          body: "More drivers → better traffic data → better routing → more drivers. PM designed features (report hazard, reroute) specifically to generate real-time signal competitors couldn't buy. Data and network reinforced each other.",
        },
      ],
    }),
    buildSection({
      number: "4.3",
      title: "Designing products to capture training signal",
      subtitle: "Architectural decisions at launch determine whether usage teaches the model",
      take: "Products either generate labelled data by design — edit flows, confirmation steps, ranking choices — or consume model output passively with no learning loop. PMs specify capture points in the PRD: what event, what label, what consent, what downstream use.",
      why: "Retrofitting capture after launch means sparse, biased historical data and angry users asked for new permissions. PMs who embed signal capture in core UX avoid the 'we wish we'd logged that' post-mortem.",
      paragraphs: [
        [
          s("Design interaction patterns that produce labels. "),
          x(
            "Strong patterns: user edits AI draft (before/after pair), user picks best of three options (preference label), user confirms or rejects suggestion (binary label), user reorders results (ranking label).",
            "Weak patterns: copy-paste output with no trace; chat-only with no structured feedback affordance.",
          ),
          s(" PM workshop: for each AI output, what is the user's natural correction gesture?"),
        ],
        [
          s("Capture context alongside the label. "),
          x(
            "Label without context is nearly useless for retraining. Log: input prompt, retrieved context, model version, user segment, timestamp, and the correction — with PII scrubbed per policy.",
            "Schema design is a PM + eng + legal collaboration, not an analytics afterthought.",
          ),
          s(" Minimum viable training row should be defined before launch."),
        ],
        [
          s("Make contributing signal low-friction. "),
          x(
            "If feedback requires a modal survey, response rate craters. Inline thumbs, implicit accept (user sends without editing), and optional 'why' fields outperform mandatory forms.",
            "Target >15% explicit feedback rate on AI outputs for consumer; higher for B2B power users.",
          ),
          s(" Frictionless capture beats rich capture that users ignore."),
        ],
      ],
      examples: [
        {
          title: "Gmail Smart Compose — implicit signal from accepted suggestions",
          body: "Tab-to-accept is a positive label; ignored suggestions are negative signal. PM designed UX so the natural send flow generates training data without a feedback button. Billions of implicit labels compounded over years.",
        },
        {
          title: "Copilot accept/reject diff logging",
          body: "Engineering logged full before/after code diffs when developers accepted or modified suggestions. PM made diff capture a launch requirement — enabled monthly fine-tune cycles on proprietary coding patterns.",
        },
        {
          title: "Missed capture — support AI with no escalation reason",
          body: "Agent escalated to human but product didn't log why. Team couldn't train on failure modes. PM added required escalation category (5 options) — structured signal from a painful workflow moment.",
        },
      ],
    }),
    buildSection({
      number: "4.4",
      title: "Implicit vs explicit feedback",
      subtitle: "What users tell you vs what their behaviour already did",
      take: "Explicit feedback is deliberate — thumbs, ratings, reports. Implicit feedback is behavioural — dwell time, click-through, task completion, edit distance, abandonment. Mature AI products weight both; over-reliance on either misleads.",
      why: "Explicit feedback is sparse and skewed toward extremes. Implicit feedback is abundant but ambiguous. PMs define signal weighting and know which metric drives which model decision.",
      paragraphs: [
        [
          s("Explicit feedback: high intent, low volume. "),
          x(
            "Thumbs down on a wrong answer is gold — but only angry or delighted users bother. Expect 1–5% response rates on optional explicit feedback in consumer products.",
            "Use for: failure case identification, red-team seeding, human review queue prioritisation.",
          ),
          s(" Never size retrain datasets from explicit feedback alone."),
        ],
        [
          s("Implicit feedback: high volume, noisy signal. "),
          x(
            "User copied output without edit → likely good. User deleted entire draft → likely bad. User switched to competitor tab → ambiguous. Requires careful label inference rules.",
            "Click-through on recommendation ≠ satisfaction — could be curiosity. Combine implicit signals.",
          ),
          s(" PM defines inference rules with data science before treating behaviour as labels."),
        ],
        [
          s("Hybrid scoring beats single-source labels. "),
          x(
            "Example composite: explicit thumbs (weight 3) + edit distance <10% (weight 2) + task completed without retry (weight 1). Disagreement between signals flags cases for human review.",
            "Active learning: prioritise labelling cases where implicit and explicit conflict.",
          ),
          s(" Document signal hierarchy in the AI metrics spec."),
        ],
      ],
      examples: [
        {
          title: "YouTube implicit — watch time vs explicit dislike",
          body: "Dislike button is rare; watch time and scroll-past are abundant. PM treats implicit engagement as primary ranking signal, explicit dislike as high-confidence negative override. Different signals, different model heads.",
        },
        {
          title: "Explicit-only trap — 0.3% feedback rate",
          body: "Enterprise search AI relied solely on thumbs. 0.3% rate meant 97% of sessions invisible to improvement loop. PM added implicit signal: did user click result #1 and stay >30s? Effective label volume increased 40x.",
        },
        {
          title: "Edit distance as implicit quality score",
          body: "Marketing copy AI scored outputs by Levenshtein distance between draft and sent version. High edit distance = weak generation. PM dashboard tracked median edit distance weekly — leading indicator before thumbs caught up.",
        },
      ],
    }),
    buildSection({
      number: "4.5",
      title: "Data labelling strategy",
      subtitle: "Internal, outsourced, model-assisted, and active learning",
      take: "Labels don't appear magically — PMs choose among internal domain experts, outsourced annotation vendors, model-assisted pre-labelling, and active learning that prioritises the most informative examples. Strategy depends on domain complexity, volume, cost, and quality bar.",
      why: "Wrong labelling strategy produces garbage flywheels — high-volume noisy labels that degrade models. PMs align label quality requirements with product risk tier.",
      paragraphs: [
        [
          s("Internal labelling — expensive, accurate, doesn't scale. "),
          x(
            "Use when: domain requires licensed expertise (medical, legal), error cost is catastrophic, volume is <10K examples. Your support leads labelling escalation reasons is internal labelling.",
            "Bottleneck: PMs must protect expert time — batch labelling sessions, clear rubrics.",
          ),
          s(" Gold-standard sets for eval almost always require internal or double-annotated labels."),
        ],
        [
          s("Outsourced annotation — scales, needs quality control. "),
          x(
            "Vendors: Scale AI, Labelbox workforce, Surge. Require: annotation guidelines, inter-annotator agreement targets (>0.8 Cohen's kappa for critical tasks), gold questions mixed in to catch drift.",
            "PM writes the annotation rubric — eng cannot substitute for product judgment on edge cases.",
          ),
          s(" Budget 15–20% of annotation spend on QA and adjudication."),
        ],
        [
          s("Model-assisted labelling and active learning. "),
          x(
            "Model pre-labels; humans correct — 3–5x throughput gain. Active learning: train on small set → model scores unlabelled pool → humans label highest-uncertainty cases → repeat.",
            "Best ROI path for teams with mid-volume data and limited label budget.",
          ),
          s(" PM gates flywheel acceleration on label pipeline throughput, not just capture."),
        ],
      ],
      examples: [
        {
          title: "Medical imaging — internal radiologist labels only",
          body: "FDA-adjacent product required board-certified radiologists for all training labels. PM accepted $400/hour cost and 500-case quarters — no outsourced shortcut. Label quality was regulatory requirement.",
        },
        {
          title: "Scale AI + rubric doc — moderation classifier",
          body: "PM wrote 40-page annotation guide with 200 edge-case examples. Outsourced team hit 0.85 IAA after two rubric iterations. Shipped classifier 3 months faster than internal-only labelling.",
        },
        {
          title: "Active learning cut label spend 60%",
          body: "Support intent classifier: model confidence sampling surfaced 8K ambiguous cases from 500K pool. Humans labelled only those. PM tracked label efficiency (model improvement per dollar) as quarterly KPI.",
        },
      ],
    }),
    buildSection({
      number: "4.6",
      title: "Data quality vs data quantity",
      subtitle: "Noisy millions lose to clean thousands",
      take: "More data helps until it doesn't — mislabelled, duplicated, or out-of-distribution examples dilute training signal. PMs invest in data cleaning, deduplication, and stratified sampling rather than chasing vanity dataset sizes in pitch decks.",
      why: "Leadership loves 'we have 10M examples.' Models love 50K correct ones. PMs who champion quality metrics prevent flywheels that spin faster in the wrong direction.",
      paragraphs: [
        [
          s("Diminishing returns hit early on homogeneous data. "),
          x(
            "10K diverse support tickets may beat 1M near-duplicate password-reset queries. Measure marginal lift per 10K new examples before funding bulk collection.",
            "Learning curves: plot eval metric vs dataset size in quarterly reviews.",
          ),
          s(" PM asks data science: are we on the flat part of the curve?"),
        ],
        [
          s("Noise sources PMs should police. "),
          x(
            "Duplicate examples (same FAQ 500 times), label inconsistency (two annotators, opposite labels), temporal drift (2021 policies in 2025 data), selection bias (only power users opt into feedback).",
            "Data cleaning sprints are legitimate roadmap items — not 'non-feature work.'",
          ),
          s(" Publish data quality SLAs alongside model quality SLAs."),
        ],
        [
          s("Quality gates before training runs. "),
          x(
            "Automated checks: label distribution balance, PII scan, language detection, outlier length, duplicate hash. Human spot-check sample per batch. Block training on failed QA.",
            "One bad bulk import can regress production — treat data like code with CI.",
          ),
          s(" PM signs off on training data release notes for high-risk features."),
        ],
      ],
      examples: [
        {
          title: "1M examples, model got worse — duplicate hell",
          body: "Crawled forum data without dedup. Model memorised spam patterns. PM halted flywheel, ran dedup + quality filter, retrained on 120K clean examples. Quality jumped; leadership learned size ≠ value.",
        },
        {
          title: "Stratified sampling for rare intents",
          body: "Refund intent was 0.4% of traffic but 40% of escalations. PM mandated oversampling in training set to 15% representation. Containment on refunds improved 22pp without more total data.",
        },
        {
          title: "Gold set regression caught label drift",
          body: "Outsourced annotators drifted on sarcasm labels over 6 months. Weekly gold-question audit caught 12pp accuracy drop in annotation. PM triggered rubric retrain before model retrain.",
        },
      ],
    }),
    buildSection({
      number: "4.7",
      title: "Proprietary data as competitive moat",
      subtitle: "Behavioural, longitudinal, domain-specific, and network-generated",
      take: "Not all data is moat-worthy. Public web text is commodity. Proprietary moats come from behavioural traces (what users actually do), longitudinal outcomes (what happened next), domain-specific expert corrections, and network-generated data only your product can collect.",
      why: "PMs articulate moat type in strategy docs — 'we have data' is not a moat statement. Investors and leadership need specificity on replicability and compounding rate.",
      paragraphs: [
        [
          s("Four moat categories to inventory. "),
          x(
            "Behavioural: click paths, edits, abandonment — how users interact with AI output. Longitudinal: did the recommended candidate get hired? did the draft close the deal? Domain-specific: clinician overrides, engineer code review comments. Network-generated: Waze traffic, LinkedIn graph — only exists at scale on your platform.",
            "Rate each asset: replicability (low/medium/high), growth rate, consent status.",
          ),
          s(" Moat map belongs in quarterly strategy review."),
        ],
        [
          s("Commodity data is table stakes, not differentiation. "),
          x(
            "RAG on public docs, common crawl fine-tunes, generic instruction tuning — any competitor can replicate. Moat requires data they cannot access or that improves faster than they can buy.",
            "Test: could a well-funded startup replicate this dataset in 12 months with budget?",
          ),
          s(" If yes, moat is execution speed, not data — plan accordingly."),
        ],
        [
          s("Moats erode — plan for model capability catching up. "),
          x(
            "GPT-4 class models absorbed tasks that once required proprietary data. Moat strategy must evolve: from raw data to workflow lock-in, from labels to outcomes, from features to distribution.",
            "PM scenario-plan: what if base model does our task 90% well without our data?",
          ),
          s(" Flywheels must accelerate faster than foundation model progress."),
        ],
      ],
      examples: [
        {
          title: "Stripe Radar — network fraud signal",
          body: "Fraud patterns seen across millions of merchants — data no single merchant possesses. PM moat narrative: cross-merchant behavioural graph. Competitor can match model; cannot match network breadth.",
        },
        {
          title: "Commodity RAG on public docs — no moat",
          body: "Startup pitched 'AI legal assistant' on scraped public statutes. Incumbent added same RAG in 6 weeks. PM lesson: public corpus + wrapper = no defensibility. Pivoted to firm-specific clause edit history as moat.",
        },
        {
          title: "Longitudinal hiring outcomes — Ashby-style moat",
          body: "ATS tracked which AI-sourced candidates progressed to offer. Outcome labels impossible to buy. PM funded outcome tracking as strategic — not analytics nice-to-have.",
        },
      ],
    }),
    buildSection({
      number: "4.8",
      title: "Data partnerships and licensing",
      subtitle: "Acquiring signal you cannot generate internally",
      take: "When internal data is insufficient, PMs pursue partnerships, licensing deals, and synthetic data — each with IP, exclusivity, quality, and regulatory tradeoffs. Partnerships accelerate cold start but can create dependency and limit flywheel ownership.",
      why: "Data deals are product decisions with legal tails. PMs lead business case; legal leads terms — but PM must understand what rights you're buying and what you're giving up.",
      paragraphs: [
        [
          s("Partnership types and when they fit. "),
          x(
            "Exclusive domain corpus license: jump-start vertical AI (health records aggregator). Co-development: partner generates labels, you provide model (annotation startups). Data clean room: train on combined datasets without raw exchange (ads, finance).",
            "Each structure differs in flywheel ownership — who improves from usage?",
          ),
          s(" PM clarifies post-deal: does usage data flow back to us or partner?"),
        ],
        [
          s("Licensing terms PMs should fight for. "),
          x(
            "Training use rights (not just inference), derivative work ownership, exclusivity window, termination data retention, audit rights on partner data quality, liability for biased or illegal content in licensed corpus.",
            "Cheap data license with no training rights is a demo license, not a moat license.",
          ),
          s(" Involve legal before LOI — renegotiating after integration is brutal."),
        ],
        [
          s("Synthetic and public data — bootstrap, not moat. "),
          x(
            "Synthetic data fills gaps for eval and early train; rarely sustains production quality alone. Public datasets commoditise. Use to cold-start; replace with proprietary signal ASAP.",
            "Disclose synthetic % in model cards if regulated or enterprise sales.",
          ),
          s(" PM roadmap: licensed/synthetic for v1, proprietary for v2 flywheel."),
        ],
      ],
      examples: [
        {
          title: "Reuters license for news summarisation",
          body: "PM negotiated training + inference rights on licensed corpus with 2-year exclusivity in fintech vertical. Deal cost $2M/year — justified by cold-start speed vs 18-month crawl-and-litigate path.",
        },
        {
          title: "Partner data trap — no derivative ownership",
          body: "Partnership provided inference-only API access. Team could not fine-tune on partner data. Flywheel stalled at wrapper layer. PM renegotiated training rights or walked — half-measures waste engineering.",
        },
        {
          title: "Synthetic medical dialogue for bootstrap",
          body: "GPT-generated doctor-patient dialogues seeded initial classifier. PM mandated replacement with real triage data by month 9 — synthetic plateaued at 78% accuracy; real data reached 91%.",
        },
      ],
    }),
    buildSection({
      number: "4.9",
      title: "Data governance as a product discipline",
      subtitle: "Consent, retention, usage rights, and regulatory constraints",
      take: "Governance defines what data you may collect, store, train on, and delete — GDPR, CCPA, sector rules, and user expectations shape the flywheel as much as engineering. PMs embed consent, purpose limitation, and deletion cascades in product design, not legal footnotes.",
      why: "A flywheel built on non-compliant data is a liability flywheel — fines, forced deletion, and trust collapse. PMs who treat governance as launch-blocking ship sustainable compounding.",
      paragraphs: [
        [
          s("Consent must match training use. "),
          x(
            "Signup ToS that buries 'we train AI on your content' fails GDPR purpose limitation and user trust. Granular consent: separate toggles for service delivery vs model improvement vs third-party share.",
            "Opt-in for training use increasingly expected in EU; default-on risks enforcement.",
          ),
          s(" PM designs consent UX; legal validates wording; eng enforces flags in pipeline."),
        ],
        [
          s("Retention and deletion are architecture requirements. "),
          x(
            "User delete account → cascade delete raw data, embeddings, derived labels, and model checkpoints trained on their data (or document impossibility and legal basis). 30-day vs forever retention is a product choice.",
            "Right to erasure requests must complete within regulatory SLA — often 30 days.",
          ),
          s(" PM data map lists every store and whether deletion is automated."),
        ],
        [
          s("Purpose limitation and data minimisation. "),
          x(
            "Collect only fields needed for the feature; restrict training pools to consented users; anonymise where possible. Secondary use (new AI feature) may require new consent or DPIA.",
            "Enterprise customers audit data flows — governance dossier wins deals.",
          ),
          s(" New AI feature PRD includes DPIA trigger checklist."),
        ],
      ],
      examples: [
        {
          title: "Adobe Firefly — licensed training data narrative",
          body: "PM marketed commercially safe training corpus as product differentiator. Governance was go-to-market: enterprises feared IP risk from competitors' scraper-trained models. Data governance became sales asset.",
        },
        {
          title: "Deletion cascade failure — regulatory complaint",
          body: "User deleted account; chat logs gone but vector embeddings remained. GDPR complaint filed. PM emergency sprint: embedding deletion API, retrain policy for affected checkpoints. 6-week remediation.",
        },
        {
          title: "Opt-in training toggle — trust recovery",
          body: "Backlash on silent training on user docs. PM shipped explicit 'help improve AI' toggle default-off in EU. Short-term data volume dipped; long-term trust and enterprise adoption recovered.",
        },
      ],
    }),
    buildSection({
      number: "4.10",
      title: "PM decision lens",
      subtitle: "Designing your data flywheel from day one",
      take: "Before launch, PMs specify: what signal each feature captures, how it flows to labels, who labels it, how often models update, what governance applies, and what moat category you're building. The flywheel blueprint is as important as the feature spec.",
      why: "Teams that add flywheels after PMF spend years catching up to competitors who instrumented on day one. PMs own the blueprint — eng builds pipes, legal clears rights, but product defines the loop.",
      paragraphs: [
        [
          s("The day-one flywheel checklist. "),
          x(
            "□ Capture points per AI output defined □ Implicit + explicit signals listed □ Label schema and rubric drafted □ Consent UX for training use □ Pipeline sketch: event → store → label → train → deploy □ Moat category named □ Quality gate before train □ Deletion cascade designed",
            "Review checklist in AI PRD approval gate — same weight as eval criteria.",
          ),
          s(" Empty checklist items are explicit v2 debt with owner and date."),
        ],
        [
          s("Sequence flywheel investment with product maturity. "),
          x(
            "v1: capture + gold eval set (100–500 examples). v2: monthly retrain or prompt optimisation from feedback. v3: active learning + automated deploy gates. v4: proprietary moat narrative defensible in fundraising.",
            "Don't build MLOps cathedral before proving users want the feature.",
          ),
          s(" Match flywheel sophistication to retention proof — not pitch deck ambition."),
        ],
        [
          s("Flywheel metrics on the PM dashboard. "),
          x(
            "Signal volume (events/day), label throughput, signal-to-ship latency, model delta after retrain, moat proxy (edit distance trend, containment lift). Review monthly with eng and data science.",
            "If signal volume grows but model quality flatlines, loop is broken — diagnose before next feature.",
          ),
          s(" PM presents flywheel health in quarterly business reviews — not just DAU."),
        ],
      ],
      examples: [
        {
          title: "Flywheel blueprint in PRD — approved before build",
          body: "PM attached one-page loop diagram to support AI PRD. Capture: escalation reason + transcript. Label: internal QA weekly. Retrain: monthly. Moat: proprietary resolution patterns. Exec approved funding with clear compounding story.",
        },
        {
          title: "Deferred flywheel — honest v1 scope",
          body: "PM scoped v1 to capture-only + manual monthly review — no auto-retrain until 5K labelled examples. Avoided empty pipeline cosplay. v2 automated when volume justified infra.",
        },
        {
          title: "Board slide — moat map with metrics",
          body: "PM presented four moat categories with Dec vs Jun data: behavioural traces 3x, outcome labels 2x, edit-distance down 18%. Flywheel became credible strategy narrative, not buzzword.",
        },
      ],
    }),
  ],
  quiz: [
    {
      q: "A competitor ships the same foundation model wrapper in 8 weeks. What's the most durable differentiator?",
      options: [
        "A longer system prompt with better instructions.",
        "Proprietary data and feedback loops that improve the product with usage.",
        "Using the newest model API version on launch day.",
        "More features in the first release regardless of data capture.",
      ],
      correct: 1,
      correctFeedback:
        "Right. Models commoditise; owned signal that compounds with usage is the moat PMs can defend.",
      wrongFeedback:
        "Prompts and API versions copy easily. Re-read sections 4.1 and 4.7 on data as strategy and moat.",
    },
    {
      q: "Which interaction pattern best generates training signal by design?",
      options: [
        "User copies AI output to clipboard with no logging.",
        "User edits AI draft before sending — capturing before/after pairs.",
        "Chat-only interface with no feedback affordance.",
        "Displaying output as read-only PDF.",
      ],
      correct: 1,
      correctFeedback:
        "Exactly. Edit flows produce high-quality labelled pairs with natural user friction.",
      wrongFeedback:
        "Passive consumption generates little signal. Re-read section 4.3 on capture design.",
    },
    {
      q: "Your team has 2M training examples but model quality plateaued. What's the best first diagnostic?",
      options: [
        "Switch to a larger foundation model immediately.",
        "Audit data quality — duplicates, label noise, and diminishing returns on homogeneous data.",
        "Remove all explicit feedback UI to reduce clutter.",
        "Stop labelling and rely only on implicit signals.",
      ],
      correct: 1,
      correctFeedback:
        "Right. Quantity without quality spins the flywheel in the wrong direction — clean thousands beat noisy millions.",
      wrongFeedback:
        "More data isn't always better. Re-read section 4.6 on quality vs quantity.",
    },
    {
      kind: "categorize",
      q: "Sort each data asset to its primary moat category.",
      categories: ["Behavioural", "Longitudinal", "Domain-specific", "Network-generated"],
      items: [
        { text: "Edit distance on AI drafts across millions of sessions.", category: 0 },
        { text: "Whether AI-recommended candidates received job offers.", category: 1 },
        { text: "Radiologist corrections on scan classifications.", category: 2 },
        { text: "Real-time traffic speed reports from app users.", category: 3 },
        { text: "Surgeon corrections on AI-generated pre-op summaries.", category: 2 },
        { text: "Click-through and dwell time on search results.", category: 0 },
      ],
      correctFeedback:
        "Right. Moat type determines replicability — match asset to category before strategy pitches.",
      wrongFeedback:
        "Review section 4.7 — public RAG corpora are commodity; behavioural and network data compound.",
    },
    {
      kind: "order",
      q: "Put the data flywheel stages in correct compounding order.",
      prompt: "Drag to arrange first step (top) to last (bottom).",
      items: [
        "Users interact with the AI product.",
        "Interactions captured as explicit and implicit signal.",
        "Signal converted to labels and model improvements.",
        "Measurably better outcomes delivered to users.",
        "Retention and acquisition increase, feeding more usage.",
      ],
      correctFeedback:
        "Exactly. Any broken link — especially signal-to-ship latency — stalls the loop.",
      wrongFeedback:
        "The loop is usage → capture → improve → better product → more usage. Re-read section 4.2.",
    },
    {
      q: "Before using user data to train models in the EU, a PM should prioritise:",
      options: [
        "Maximising dataset size with default-on training consent buried in ToS.",
        "Granular consent, purpose limitation, deletion cascades, and legal review of training rights.",
        "Skipping governance until after Series B funding.",
        "Licensing public data only — internal user data is never useful.",
      ],
      correct: 1,
      correctFeedback:
        "Right. Governance shapes what flywheel you can legally and ethically run — design it at launch.",
      wrongFeedback:
        "Non-compliant flywheels create liability. Re-read section 4.9 on data governance.",
    },
  ],
});
