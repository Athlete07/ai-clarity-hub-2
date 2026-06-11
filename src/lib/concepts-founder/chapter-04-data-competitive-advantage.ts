import { buildChapter, buildSection, s, x, sectionWithDiagram } from "../concepts-pb4-helpers";

export const chapter04DataCompetitiveAdvantage = buildChapter({
  slug: "founder-data-competitive-advantage",
  number: 4,
  shortTitle: "Data Competitive Advantage",
  title: "Data — Your Actual Competitive Advantage",
  readingMinutes: 22,
  summary:
    "Investors fund data moats, not model wrappers. How proprietary signal, labelling economics, flywheels, and data liability determine whether your AI startup compounds in value or gets cloned when the next foundation model drops.",
  keyTakeaway:
    "Algorithms are rented; proprietary data is owned. Founders who instrument for training signal at launch build flywheels. Founders who pitch 'we use GPT-4' as the moat discover competitors ship the same wrapper in weeks.",
  pmCallout:
    "As a founder: when an investor asks 'what's your AI moat?' the honest answer is your data flywheel — not your prompt. Ask your eng lead on day one: does every user interaction generate labelled signal we can learn from?",
  sections: [
    sectionWithDiagram({
      number: "4.1",
      title: "Why data is the only durable moat in AI",
      subtitle: "Why algorithms commoditize and proprietary signal compounds",
      take: "In a world of commoditized foundation models and cheap API access, proprietary data — user behaviour, domain corrections, longitudinal outcomes — is the only asset investors cannot price into a competitor's cap table. Models are rented; data is owned.",
      why: "When a Series A investor asks what your competitive advantage is, you cannot say 'we use a really advanced model.' You must point to a proprietary dataset your competitors cannot buy, scrape, or license on equal terms.",
      paragraphs: [
        [
          s("An investor compares your AI feature to a specialized competitor. Both companies call the same foundation model API. The difference isn't architecture — it's diet. "),
          x(
            "Models are statistical mirrors of the information they were fed. Intelligence is bounded by the scope, quality, and exclusivity of training examples.",
            "Switching model providers is painful but possible. Rebuilding three years of proprietary behavioural data from scratch is not.",
          ),
          s(" You are looking at a positioning failure caused entirely by undifferentiated training data."),
        ],
        [
          s("Mechanically, models sweep through datasets converting text, pixels, or clicks into numerical representations. "),
          x(
            "The algorithm is agnostic to what it learns — it finds correlations in whatever you feed it. Public Wikipedia produces encyclopedic output; five years of proprietary workflow data produces something no competitor can rent.",
            "Domain expertise lives in the data, not the weights you rent from OpenAI.",
          ),
          s(" If your training corpus is scrapeable from the public web, your product can be cloned over a weekend."),
        ],
        [
          s("The business consequence shifts where startup IP lives. Historically, moats were proprietary source code. In the AI era, algorithms are open-source or API-rentable. "),
          x(
            "Your intellectual property now lives in your database and the feedback loops that enrich it. Competitors copy your UI; they cannot buy your users' correction history.",
            "Pitch decks that lead with model choice signal commodity thinking. Pitch decks that lead with proprietary data signal defensibility.",
          ),
          s(" Treat data acquisition as a primary product feature from incorporation — not a post-PMF engineering task."),
        ],
      ],
      examples: [
        {
          title: "Bloomberg — The 40-year data moat",
          body: "Bloomberg spent decades capturing Wall Street terminal workflows. When they trained BloombergGPT, they didn't need a better algorithm — they had exclusive access to forty years of pristine financial data no competitor could replicate. Founders pitching fintech AI should study this: the moat predated the model by decades.",
        },
        {
          title: "Waymo — Miles driven as physical IP",
          body: "Self-driving companies don't compete on code; they compete on miles driven. Waymo deployed sensor-rigged fleets for years solely to collect edge-case training data. New entrants cannot buy that history. Founders in physical-world AI must budget for data collection as capex, not an afterthought.",
        },
        {
          title: "Reddit — Monetizing the corpus",
          body: "Reddit signed multi-million-dollar licensing deals for user conversations as LLM training fuel. The community feature became a balance-sheet asset. Founders with user-generated content should ask early: do we own training rights, and is that in our fundraising narrative?",
        },
      ],
    }, {
      kind: "diagram",
      id: "founder-data-moat-layers",
      type: "nested",
      title: "The Data Moat Stack",
      caption:
        "Distribution generates proprietary data; data trains models competitors cannot replicate. Algorithms commoditize — signal compounds.",
    }),
    buildSection({
      number: "4.2",
      title: "What makes data valuable — the four properties",
      subtitle: "Proprietary, labelled, current, and domain-specific — the diligence checklist",
      take: "Not all data is strategic. Investors evaluate four properties: proprietary (competitors cannot access it), labelled (it teaches models what to predict), current (it reflects today's world), and domain-specific (it encodes expertise public corpora lack). Missing any one property weakens the moat.",
      why: "When engineering says 'we have a million rows,' your diligence question is which of the four properties they satisfy. Volume without all four is storage cost dressed up as strategy.",
      paragraphs: [
        [
          s("Proprietary data is data only your product can generate or access under exclusive terms. "),
          x(
            "Public web scrapes, brokered datasets, and API outputs available to every competitor are not proprietary — they are rented intelligence everyone shares.",
            "Proprietary means a competitor would need your users, your partnerships, or your years of operation to replicate it.",
          ),
          s(" If a rival can buy the same corpus next quarter, you have no data moat — you have a timing advantage at best."),
        ],
        [
          s("Labelled data carries ground truth: what the model should have predicted. Current data reflects the world as it exists now, not as it existed when a foundation model was pre-trained. "),
          x(
            "A million unlabelled log lines are archives. Ten thousand recent, expert-labelled corrections are fuel. Stale data teaches yesterday's patterns — concept drift breaks models trained on old distributions.",
            "Domain-specific data encodes vocabulary, edge cases, and judgment calls that general corpora never contain — legal clause nuance, manufacturing defect taxonomy, clinical coding standards.",
          ),
          s(" The four properties compound: proprietary domain labels from last week's user edits are worth more than a billion public tokens."),
        ],
        [
          s("The business consequence: founders should score every data asset against all four properties before claiming it in a pitch deck. "),
          x(
            "A brokered dataset may be labelled and domain-specific but neither proprietary nor consented — diligence will kill it.",
            "Product-generated feedback can be proprietary, current, and domain-specific but useless until you define the labelling pipeline.",
          ),
          s(" Build a four-column scorecard for your data roadmap and show investors which cells you are filling each quarter."),
        ],
      ],
      examples: [
        {
          title: "Stripe Radar — Four properties in one loop",
          body: "Chargeback outcomes are proprietary (only Stripe's network sees them), labelled (fraud or legitimate), current (retrained continuously), and domain-specific (payments risk). Founders should map their equivalent signal: which user action produces data scoring 4/4?",
        },
        {
          title: "Common Crawl — Volume without moat",
          body: "Common Crawl offers petabytes of web text — impressive quantity, zero proprietary value. Every LLM vendor trains on it. Founders citing 'we scraped the web' are describing commodity input, not competitive advantage.",
        },
        {
          title: "Healthcare AI — Stale labels kill deals",
          body: "A diagnostic startup trained on 2019 imaging data saw accuracy crater on 2024 scanners. Data was labelled and domain-specific but not current. Diligence flagged concept drift; the round repriced. Founders must budget continuous refresh, not one-time collection.",
        },
      ],
    }),
    sectionWithDiagram({
      number: "4.3",
      title: "The data flywheel — and whether you actually have one",
      subtitle: "Usage → signal → better model → better product — or just a diagram on a slide",
      take: "A data flywheel is the loop where product usage generates training signal, improves the model, improves the product, and drives more usage. Many founders draw the loop in pitch decks but ship static features with quarterly manual exports. A flywheel requires closed-loop architecture, not aspiration.",
      why: "If your AI feature requires manual exports and quarterly retraining, you built a static tool. If user actions stream back as labels automatically, you built an engine competitors cannot catch without equal time and usage — the story investors fund.",
      paragraphs: [
        [
          s("A competitor clones your recommendation UI, hires the same engineers, uses the same API. Six months later you're vastly superior; they're dying. "),
          x(
            "Your system learns from every interaction in real time. They have a static model. Flywheels pull away at accelerating rates — static models degrade.",
            "They can match your code; they cannot simulate your history of user interactions.",
          ),
          s(" You have a data flywheel; they have a feature checklist."),
        ],
        [
          s("Mechanically, flywheels need four connected stages: model predicts, user reacts, reaction captures as ground truth, model retrains. "),
          x(
            "Natively generated labels are clean and use-case-aligned — not guessed from scraped internet text.",
            "Every broken link — especially signal-to-ship latency — stalls compounding. Quarterly retrain is a slow flywheel; weekly is competitive.",
          ),
          s(" Ask honestly: can you name the user action that closes the loop today, or is the flywheel still a roadmap item?"),
        ],
        [
          s("The business consequence: investors distinguish flywheel diagrams from flywheel metrics. "),
          x(
            "Board slides should show signal volume, label throughput, model delta after retrain, and consent coverage — not just a circular arrow graphic.",
            "Flywheels built on non-consented data are liability flywheels — fines, forced deletion, trust collapse.",
          ),
          s(" If you cannot report flywheel health in numbers, you do not yet have a flywheel — you have a feature."),
        ],
      ],
      examples: [
        {
          title: "Google Search — Click as label",
          body: "User skips first two results, clicks third — that click pipes back as superior-answer label. Usage trains the product. Founders should identify their equivalent 'click signal' before launch, not after PMF.",
        },
        {
          title: "Github Copilot — Tab to accept",
          body: "Ghost text requires explicit Tab acceptance — binary positive label. Ignored suggestions are negative signal. Billions of implicit labels compounded. Founders: what is your Tab-equivalent friction that generates labels without annoying users into churn?",
        },
        {
          title: "Fake flywheel — Quarterly CSV export",
          body: "A Series A candidate showed a flywheel slide but admitted retraining happened manually every quarter from exported spreadsheets. Lead investor passed: no compounding loop, no moat. Founders must instrument capture before claiming flywheel defensibility.",
        },
      ],
    }, {
      kind: "diagram",
      id: "ch2-data-flywheel",
      type: "flow",
      title: "The Data Flywheel",
      caption:
        "More usage → more signal → better model → better product → more usage. Investors fund this loop when it is real, not imagined.",
    }),
    buildSection({
      number: "4.4",
      title: "Training data vs inference data vs feedback data",
      subtitle: "Three data streams founders confuse — and why only one builds a moat",
      take: "Training data shapes what the model knows before deployment. Inference data is the live input users send at query time. Feedback data is what users do after seeing the output — accepts, edits, rejections. Only feedback data compounds proprietary advantage; training and inference without feedback loops are static.",
      why: "When engineering says 'we log everything,' clarify which bucket each log fills. Logging inference prompts without capturing feedback creates storage cost, not a flywheel. Investors fund feedback loops, not prompt archives.",
      paragraphs: [
        [
          s("Training data is the historical corpus used to set model weights — fine-tuning examples, domain documents, labelled pairs from past operations. "),
          x(
            "It is expensive to assemble and slow to refresh. Once training completes, the model is frozen until the next training run.",
            "Founders who buy a foundation model start with someone else's training data. Their moat must come from what they add on top.",
          ),
          s(" Training data is CapEx; without ongoing feedback, it depreciates as the world changes."),
        ],
        [
          s("Inference data is the live payload at query time — the user's prompt, document, image, or transaction features. It flows through the model but does not automatically improve it. "),
          x(
            "Logging inference data enables analytics, compliance, and retrieval — but not learning unless you pipe outcomes back as labels.",
            "Privacy regulations often treat inference logs as personal data subject to retention limits — not as a free training corpus.",
          ),
          s(" Inference without feedback is observability, not a moat."),
        ],
        [
          s("Feedback data closes the loop: the user's correction, acceptance, escalation, or downstream outcome attached to a specific inference. "),
          x(
            "Feedback is the only stream that converts usage into proprietary training signal. Accept/reject on a suggestion, edit distance on a draft, chargeback on a fraud score — each is a label competitors cannot replicate without your users.",
            "Design products so feedback capture is the default path, not an optional 'rate this response' buried in settings.",
          ),
          s(" Your data strategy should lead with feedback architecture; training and inference support it."),
        ],
      ],
      examples: [
        {
          title: "Gmail Spam — Feedback as free labels",
          body: "The inference is an incoming email. The feedback is 'Report Spam' or 'Not Spam.' Google retrains on feedback continuously; raw inbox storage alone would teach nothing. Founders should ask: what is our spam-button equivalent?",
        },
        {
          title: "Legal AI — Edit distance as signal",
          body: "A contract-review tool logs every lawyer edit to AI-drafted clauses. Inference was the draft; feedback is the diff. Retraining on edit distance compounds domain expertise. Founders in professional tools should measure edit distance, not just thumbs up/down.",
        },
        {
          title: "Chatbot logging trap — Prompts without outcomes",
          body: "A startup logged millions of prompts but never captured whether users acted on answers. Series A diligence found inference archives with zero labelled outcomes — no flywheel, no moat. Storage cost masquerading as strategy.",
        },
      ],
    }),
    buildSection({
      number: "4.5",
      title: "Labelling — the hidden cost most founders ignore",
      subtitle: "From free clicks to $500/hour experts — the unit economics investors will audit",
      take: "Labels are the ground-truth targets that teach models what to predict. Raw data without labels is storage cost. Labelling cost scales with cognitive load and credentials required — from nearly-free implicit product signal to expert annotation at hundreds per hour. Your domain determines whether you are a software company or an ops-heavy data company.",
      why: "When engineering requests a labelling budget, you must model whether the feature's revenue supports it. Expert-labelled products cannot be sold at consumer price points — investors will catch this math in five minutes.",
      paragraphs: [
        [
          s("You hand an engineer 10,000 customer support emails and ask for a sentiment classifier. A week later: blocked. The spreadsheet has raw text but no tags for happy vs angry. "),
          x(
            "Models cannot learn categories they have never been shown. Algorithms don't infer human judgment magically — they need explicitly tagged examples.",
            "The label is the teacher's answer key. Without it, backpropagation has no target.",
          ),
          s(" You have data volume; you lack instructional signal — and signal costs money to produce."),
        ],
        [
          s("Mechanically, label cost ties to cognitive load. Bottom of the spectrum: implicit labels from product usage (clicks, accepts). Middle: crowdsourced labour. Top: expert annotation only licensed professionals can produce. "),
          x(
            "An MRI is pixels until an oncologist circles the tumor. You cannot Mechanical-Turk that task.",
            "Inconsistent or wrong labels produce a perfectly confused, highly confident system. Inter-rater reliability is a prerequisite for model accuracy.",
          ),
          s(" Map every label source to cost-per-example in your financial model before the seed deck claims 'proprietary training data.'"),
        ],
        [
          s("The business consequence: medical, legal, and financial AI often look like services businesses early — staggering VC spend on expert labels before software margins emerge. "),
          x(
            "That burn is also a barrier to entry. Survive it and you have a moat; underestimate it and you die in seed extension.",
            "Before expert annotation, explore LLM pre-labelling with expert verification — verification is 3–5x cheaper than generation from scratch.",
          ),
          s(" Price premium enterprise if you cannot escape high label cost — consumer pricing on expert data never works."),
        ],
      ],
      examples: [
        {
          title: "Scale AI — Built on labelling pain",
          body: "Scale AI became a multi-billion-dollar company around the operational pain of labelling. Tech giants had infinite raw data but no infrastructure to draw bounding boxes on millions of driving images. Founders should recognize: in many verticals, the labelling company is the real business before the product is.",
        },
        {
          title: "PathAI — Pathologist labels only",
          body: "PathAI requires board-certified pathologists to annotate tissue slides — $400/hour territory. Market restricted to high-value healthcare enterprises. Founders in regulated diagnostics should show investors expert label cost per case in the model, not hand-wave 'we'll use AI to label.'",
        },
        {
          title: "ReCaptcha — Zero-cost vision labels",
          body: "Google turned security UX into free bounding-box labels for computer vision. Every crosswalk click is training data that would cost millions manually. Founders should ask: can we turn core product usage into free labels the way ReCaptcha did?",
        },
      ],
    }),
    buildSection({
      number: "4.6",
      title: "Data network effects vs traditional network effects",
      subtitle: "When more users make the AI better — and when they just make the chat busier",
      take: "Traditional network effects mean each new user increases value for existing users — messaging apps, marketplaces, social graphs. Data network effects mean each new user improves the AI for everyone through aggregated training signal. Many AI products have neither; they have single-player utility with no cross-user learning.",
      why: "Investors will ask whether your network effect is real or borrowed from a foundation model. If user A's data does not improve user B's experience, you have a product — not a data network effect.",
      paragraphs: [
        [
          s("Traditional network effects require interconnection: I join because you're already there. The value is social or transactional density. "),
          x(
            "WhatsApp is worthless alone. LinkedIn's feed improves as your professional graph grows. The moat is membership, not model weights.",
            "AI wrappers on APIs often have zero network effects — each user's session is isolated.",
          ),
          s(" Do not confuse viral growth with network effects. Growth is acquisition; network effects are retention physics."),
        ],
        [
          s("Data network effects require that aggregated usage makes the model measurably better for all users. "),
          x(
            "Waze routing improves as more drivers report traffic. Fraud models improve as more transactions generate labels. The new user contributes signal, not just revenue.",
            "Personalization-only AI — where my data improves my experience but not yours — is a data advantage, not a network effect.",
          ),
          s(" Ask: does user 10,000 make user 1's next query better? If no, cite honest single-player moats instead."),
        ],
        [
          s("The business consequence: data network effects are weaker than classic network effects when signal is siloed per customer. "),
          x(
            "Enterprise deployments with strict data isolation may forbid cross-tenant learning — killing network effects while preserving privacy contracts.",
            "Founders should design tenancy architecture early: federated learning, anonymized aggregates, or vertical-specific pools that still compound.",
          ),
          s(" Pitch the effect you actually have. Mislabeling single-player AI as 'network effects' fails diligence in one question."),
        ],
      ],
      examples: [
        {
          title: "Waze — Classic data network effect",
          body: "Every driver's speed and route data improves ETA predictions for every other driver. More users directly improve the product for incumbents. Founders in mobility or logistics should ask: does our sensor data aggregate across users?",
        },
        {
          title: "Notion AI — Single-player by default",
          body: "Notion AI drafts inside your workspace. Your edits may fine-tune your experience but don't automatically improve another user's drafts. It's valuable software — not a data network effect. Founders should be precise about which moat they are building.",
        },
        {
          title: "Enterprise silo trap — No cross-tenant learning",
          body: "A B2B compliance AI signed ten enterprises with strict data-isolation clauses. Each deployment learned only from that customer's data — no cross-customer compounding. Revenue scaled; moat per customer stayed flat. Architecture choice traded network effects for deal velocity.",
        },
      ],
    }),
    buildSection({
      number: "4.7",
      title: "Data partnerships and acquisition strategy",
      subtitle: "Buy, partner, generate — and how to structure deals that survive diligence",
      take: "Founders acquire data three ways: generate it through product usage (best moat), partner for exclusive access, or purchase/licence third-party corpora. Partnerships and purchases are faster but rarely proprietary. Deal structure — exclusivity, training rights, refresh cadence, termination — determines whether the asset survives investor audit.",
      why: "When a shortcut dataset gets you to demo faster, model the downstream diligence risk. Brokers rarely offer exclusivity; partners often revoke access. Your cap table story should not depend on a handshake expiring next year.",
      paragraphs: [
        [
          s("Product-generated data is the gold standard: proprietary by definition, aligned to your use case, compounding with usage. "),
          x(
            "Partnerships accelerate cold-start when you lack users — exclusive access to a hospital system's de-identified records, a publisher's archive, a logistics firm's tracking history.",
            "Purchased datasets get you to benchmark quickly but are available to anyone with budget — not a moat, a head start.",
          ),
          s(" Rank acquisition strategies by exclusivity and refresh rights, not row count."),
        ],
        [
          s("Mechanically, data deals must specify: training rights, sublicensing, exclusivity scope, update frequency, and deletion on termination. "),
          x(
            "A partnership that grants 'access for analytics' but not 'model training' leaves you with dashboards, not a flywheel.",
            "Exclusivity limited to twelve months or non-compete carve-outs for the partner's other licensees collapses moat narratives mid-Series A.",
          ),
          s(" Legal should review data agreements before engineering ingests a single row — not after the model is trained."),
        ],
        [
          s("The business consequence: acquirers and investors price data partnerships as contingent assets. "),
          x(
            "Reddit's licensing deals converted UGC into balance-sheet revenue because terms were explicit and exclusive.",
            "Startups that trained on partner data without termination carve-outs have lost models overnight when partnerships ended.",
          ),
          s(" Build a data acquisition roadmap: what you generate in year one, what you partner for at seed, what you must own by Series A."),
        ],
      ],
      examples: [
        {
          title: "Reddit — Licensing UGC as strategic asset",
          body: "Reddit negotiated multi-year exclusive licensing with major LLM vendors for training on community content. The deal structure — rights, exclusions, revenue share — turned posts into a fundraisable asset. Founders with UGC should study term sheets, not just traffic metrics.",
        },
        {
          title: "Apple Health — Partnership without training rights",
          body: "Many health-app integrations read Apple Health data for display but contractually cannot train models on it. Access ≠ ownership. Founders in regulated verticals must distinguish read permissions from training rights in every integration.",
        },
        {
          title: "Broker dataset — Fast start, diligence failure",
          body: "A startup bought two million support tickets from a data broker to bootstrap a classifier. Series A diligence found non-exclusive licence, unclear end-user consent, and 30% duplicates. The asset was written down; the round repriced. Cheap data can be expensive capital.",
        },
      ],
    }),
    buildSection({
      number: "4.8",
      title: "Data liability — what you own, what you don't, and what can sue you",
      subtitle: "Consent, provenance, and the difference between asset and lawsuit",
      take: "Owning data means lawful right to collect, store, train on, and retain it — not merely possessing bytes on a server. Users, regulators, partners, and copyright holders can force deletion, block training, or unwind deals if provenance and consent are weak. Data liability can erase a moat overnight.",
      why: "When your seed deck claims 'proprietary training data,' diligence lawyers ask who can sue you and whether you have a paper trail. Labels without legal rights are liabilities, not assets.",
      paragraphs: [
        [
          s("You may possess data you do not own. User emails in your database are not automatically training fuel. "),
          x(
            "GDPR purpose limitation, CCPA opt-out rights, and sector rules (HIPAA, GLBA) constrain what you can do with data collected for one purpose when you later use it for model training.",
            "Terms of service updated after the fact do not cure unlawful retroactive training — regulators and plaintiffs know this.",
          ),
          s(" Consent architecture is as important as labelling architecture — design both before launch."),
        ],
        [
          s("Mechanically, diligence traces a chain: collection notice → stated purpose → training use disclosed → retention policy → deletion on request → subprocessors documented. "),
          x(
            "Brokered datasets often break the chain at consent. Scraped web content invites copyright claims — see major publishers suing AI vendors.",
            "Partner data carries termination clauses that can require model deletion — a clawback of your moat.",
          ),
          s(" If you cannot produce the chain for a row, do not train on it."),
        ],
        [
          s("The business consequence: data liability is valuation material, not legal housekeeping. "),
          x(
            "Forced deletion of a training set resets model quality to baseline — and tells customers you mishandled their data.",
            "Flywheels built on non-consented data are liability flywheels: fines, trust collapse, investor walk-aways.",
          ),
          s(" Publish internal data governance before investors ask: consent coverage, provenance audits, deletion SLAs."),
        ],
      ],
      examples: [
        {
          title: "GDPR complaint — Labels without consent",
          body: "A startup trained a support classifier on historical tickets without updating terms for AI training use. A diligence lawyer flagged purpose-limitation violations. The round stalled six weeks while they renegotiated consent and purged non-consented rows. Labels without legal rights are liabilities, not assets.",
        },
        {
          title: "NYT v. OpenAI — Copyright and training corpora",
          body: "Major publishers sued AI companies alleging unlawful use of copyrighted articles in training data. Outcomes will reshape what 'publicly available' means for commercial training. Founders scraping content should assume litigation risk is priced into the sector.",
        },
        {
          title: "Partner termination — Model clawback clause",
          body: "An enterprise data partnership expired; the contract required deletion of all derived models within ninety days. The startup's core classifier had to be retrained from scratch on consented first-party data only. Partnership data is rented; plan for return conditions.",
        },
      ],
    }),
    buildSection({
      number: "4.9",
      title: "Founder decision lens: designing your product to capture proprietary training signal from day one",
      subtitle: "The instrumentation checklist every AI feature should pass before ship",
      take: "Capturing proprietary training signal is a product design decision, not a post-PMF data engineering project. Every AI feature should answer: what user action produces a label, is it consented, how fast does it reach the training pipeline, and does it improve outcomes measurably? Founders who defer this build static demos; founders who instrument at launch build moats.",
      why: "Retrofitting feedback capture after users have learned to ignore your UI is ten times harder than designing the Tab-accept, edit-diff, or escalation-click on day one. Investors fund founders who can articulate the signal architecture in the seed meeting.",
      paragraphs: [
        [
          s("Start with the label, not the model. Before choosing an architecture, define the ground truth your product can generate for free. "),
          x(
            "Gmail's label is 'Report Spam.' Copilot's label is Tab-to-accept. Your feature needs an equivalent — explicit, low-friction, legally consented.",
            "If the only signal is a buried thumbs-down, you will starve the flywheel.",
          ),
          s(" Write the signal spec in the same PRD as the feature spec."),
        ],
        [
          s("Instrument three streams together: inference context, model output, and user feedback attached to the same session ID. "),
          x(
            "Partial logging — prompts without outcomes — creates archives, not training sets.",
            "Measure edit distance, time-to-accept, escalation rate, and downstream business outcomes (chargeback, ticket reopen) as label proxies.",
          ),
          s(" Engineering's definition of done should include signal routing to the training pipeline, not just API latency."),
        ],
        [
          s("The business consequence: seed-stage founders win diligence by showing signal metrics, not model benchmarks. "),
          x(
            "Escalation labels 4x since launch, edit-distance down 22%, 78% training opt-in — these are moat slides.",
            "Board questions should be: what signal did we capture this week, and when does it ship to the model?",
          ),
          s(" Design for proprietary, labelled, current, domain-specific feedback from incorporation — algorithms can wait."),
        ],
      ],
      examples: [
        {
          title: "Copilot — Tab as product requirement",
          body: "GitHub Copilot's core UX decision was requiring explicit Tab acceptance. That single interaction generates billions of binary labels. Founders should treat feedback UX as moat infrastructure, not polish.",
        },
        {
          title: "Series B moat slide — Metrics not buzzwords",
          body: "A founder presented flywheel health in diligence: escalation labels 4x, edit-distance down 22%, monthly retrain cadence, consent opt-in at 78%. Round priced on compounding data asset, not model demo. Investors fund loops with numbers, not diagrams.",
        },
        {
          title: "Retrofit failure — Bolt-on feedback widget",
          body: "A legal AI shipped without edit tracking, then added a 'rate this clause' widget six months later. Adoption was 2%. Flywheel never spun. Competitors who instrumented edit-diff at launch pulled ahead. Signal capture is launch-blocking, not v2.",
        },
      ],
    }),
  ],
  quiz: [
    {
      q: "An investor asks why your GPT-4 wrapper isn't defensible. What's the strongest honest answer?",
      options: [
        "We have a longer system prompt than competitors.",
        "Proprietary usage data and feedback loops that improve the product with every customer interaction.",
        "We were first to market with the integration.",
        "We use the newest API version on launch day.",
      ],
      correct: 1,
      correctFeedback:
        "Right. Models commoditize; owned signal that compounds with usage is the moat founders can defend in diligence.",
      wrongFeedback:
        "Prompts and API versions copy in weeks. Re-read sections 4.1 and 4.3 on data as moat and flywheels.",
    },
    {
      q: "Which combination best describes strategic training data for an AI startup?",
      options: [
        "High volume, scraped from the public web, unlabelled.",
        "Proprietary, labelled, current, and domain-specific.",
        "Purchased from a broker with non-exclusive licence.",
        "Identical to the foundation model's pre-training corpus.",
      ],
      correct: 1,
      correctFeedback:
        "Exactly. All four properties compound into defensibility; missing any one weakens the moat.",
      wrongFeedback:
        "Re-read section 4.2. Volume alone is not strategy — score data on proprietary, labelled, current, and domain-specific.",
    },
    {
      kind: "order",
      q: "Order the data flywheel stages for compounding advantage.",
      prompt: "Drag to arrange first step (top) to last (bottom).",
      items: [
        "Users interact with the AI product.",
        "Interactions captured as explicit and implicit signal.",
        "Signal converted to labels and model improvements.",
        "Measurably better outcomes delivered to users.",
        "Retention and acquisition increase, feeding more usage.",
      ],
      correctFeedback:
        "Exactly. Any broken link — especially signal-to-ship latency — stalls the loop investors expect you to articulate.",
      wrongFeedback:
        "The loop is usage → capture → improve → better product → more usage. Re-read section 4.3.",
    },
    {
      q: "Your team logs every user prompt but never records whether users accepted or edited the output. What's missing?",
      options: [
        "More training data from the foundation model vendor.",
        "Feedback data — the stream that converts inference into proprietary training signal.",
        "Larger GPU clusters for inference.",
        "Unsupervised clustering on prompt embeddings.",
      ],
      correct: 1,
      correctFeedback:
        "Right. Inference logs alone are observability. Feedback closes the loop and builds the moat.",
      wrongFeedback:
        "Re-read section 4.4. Training, inference, and feedback are three distinct streams — only feedback compounds.",
    },
    {
      q: "A legal-AI startup needs lawyers at $300/hour to label contracts. What's the correct pricing implication?",
      options: [
        "Launch at $9/month consumer pricing to maximize adoption.",
        "Price as premium enterprise — expert label COGS cannot be recovered at consumer ARPU.",
        "Skip labels and rely on zero-shot prompting only.",
        "Wait for open-source models to eliminate labelling.",
      ],
      correct: 1,
      correctFeedback:
        "Right. The labelling cost spectrum dictates business model. Expert data requires expert pricing.",
      wrongFeedback:
        "Re-read section 4.5. Unit economics must connect label cost to revenue per customer.",
    },
    {
      q: "Due diligence finds your training set includes brokered data with unclear consent chains. What's the primary risk?",
      options: [
        "Slower inference latency.",
        "GDPR and purpose-limitation liability that can force deletion and unwind the data moat narrative.",
        "Lower model parameter count.",
        "Incompatibility with vector databases.",
      ],
      correct: 1,
      correctFeedback:
        "Right. Data liability can kill rounds. Quality includes legal provenance and consent — not just row count.",
      wrongFeedback:
        "Re-read sections 4.5 and 4.8. Non-compliant data is a liability flywheel, not an asset.",
    },
  ],
});
