import { buildChapter, buildSection, s, x, sectionWithDiagram } from "../concepts-pb4-helpers";

export const chapter06ModelEvaluation = buildChapter({
  slug: "founder-model-evaluation",
  number: 6,
  shortTitle: "Model Evaluation",
  title: "Model Evaluation — Why your team's metrics lie to you (and what to measure instead)",
  readingMinutes: 26,
  summary:
    "The founder's guide to AI evaluation beyond accuracy slides — offline vs online truth, benchmark theatre, production signals, regression discipline, and the five questions that protect you before every model swap.",
  keyTakeaway:
    "Evaluation is a business governance system, not a dashboard exercise. Founders who ask what error costs money, whether offline metrics predict customer reality, and how regressions get caught before users do — ship AI that survives diligence and renewals; founders who accept headline accuracy ship demos that collapse in week three.",
  pmCallout:
    "As a founder: before your next model update ships, ask your team for offline metrics, online metrics, and the last regression test result — in the same meeting. If they can only produce one of the three, you do not have an evaluation strategy. You have a launch prayer.",
  sections: [
    buildSection({
      number: "6.1",
      title: "Why accuracy is the wrong metric — the founder version",
      subtitle: "The 99% slide that impresses investors and bankrupts pilots",
      take: "Accuracy is a headline number that hides what your business actually needs. When the event you care about is rare — fraud, churn, disease, defects — a model can score 99% while catching none of it. Founders who lead with accuracy signal they have not translated the product into economics yet.",
      why: "Investors and enterprise buyers have seen enough AI pitches to distrust top-line accuracy. When a founder cannot explain what 'accurate' means for the minority class their revenue depends on, diligence turns skeptical and pilots expose the gap within weeks.",
      paragraphs: [
        [
          s("Your ML lead reports 99% accuracy on a fraud-detection model. "),
          x(
            "If only 0.1% of transactions are fraudulent, a model that labels every transaction 'legitimate' is 99.9% accurate while catching zero fraud.",
            "Accuracy without class balance context is a vanity metric — the mathematical equivalent of a hockey-stick chart with no axis labels.",
          ),
          s(" Founders who celebrate accuracy without asking 'accurate at what?' set themselves up for a production disaster and a painful board conversation."),
        ],
        [
          s("The founder version of this problem is not the formula — it is credibility at the moment of truth. "),
          x(
            "Enterprise pilots and design partners do not care about aggregate correctness. They care whether your product catches the cases that cost them money, reputation, or compliance exposure.",
            "A hospital buyer discovers your '99% accurate' diagnostic tool never flags the rare condition you promised to catch. Refund requests and stalled Series A conversations follow.",
          ),
          s(" Accuracy is the wrong north star whenever the expensive failure mode is rare."),
        ],
        [
          s("Strip bare accuracy from investor decks and customer one-pagers unless the problem is genuinely balanced. "),
          x(
            "Ask your team: 'What is the baseline rate if we guessed the majority class every time?' That number is your floor, not your success metric.",
            "Then demand metrics tied to the event you sell — miss rate, false alarm rate, or dollars saved — not a single percentage that flatters the model.",
          ),
          s(" Founders who name the baseline in diligence calls signal operational seriousness immediately."),
        ],
      ],
      examples: [
        {
          title: "Medical screening startup — the 99.9% trap",
          body: "A seed-stage health AI pitched 99.9% accuracy detecting a disorder affecting 1 in 10,000 patients. A hospital diligence team calculated that a script printing 'healthy' for everyone beat the model. The pilot was cancelled before term sheet discussions. Founder lesson: always present performance on the cases you actually sell, not headline accuracy.",
        },
        {
          title: "Stripe Radar — fraud as a rare-event problem",
          body: "Payment fraud is a tiny fraction of volume. Stripe built Radar around catching losses and limiting false blocks — not around accuracy on all transactions. Founders in fraud, abuse, and trust-and-safety should copy this framing: optimize for money protected and customers not wrongly blocked, not for a percentage that rewards ignoring fraud entirely.",
        },
        {
          title: "Manufacturing QA — investor red flag",
          body: "During Series A diligence, a VC asked what percentage of engine blocks had defects. Answer: 2%. The founder then revealed 98% accuracy — the VC immediately asked how many defects the model actually caught. The catch rate was 12%. Diligence continued but valuation conversation reset. The founder rebuilt the eval framework before the next fundraise.",
        },
      ],
    }),
    sectionWithDiagram({
      number: "6.2",
      title: "Precision vs recall — a business decision disguised as a technical one",
      subtitle: "The threshold meeting is a strategy meeting — even if engineering scheduled it",
      take: "Precision asks: when the model speaks, can we trust it? Recall asks: when something important happens, did we catch it? You cannot maximize both at once. The tradeoff is not a tuning detail — it is a product, pricing, and liability decision that belongs on the founder's calendar.",
      why: "Engineers will optimize for whatever metric is easiest to plot. Founders must translate customer pain into which error type the company can afford. Get this wrong and retention, margin, and regulatory posture all break — regardless of how impressive the offline charts look.",
      paragraphs: [
        [
          s("Your CTO asks: 'Catch 90% of churn signals with 40% false alarm rate, or 60% of signals with 10% false alarms?' "),
          x(
            "That is not a technical question. It is a question about how much sales team attention costs and how much a missed churning account costs.",
            "The precision-recall tradeoff is a menu of business strategies. The founder picks the item — engineering implements the threshold.",
          ),
          s(" Founders who defer this decision get a product that optimizes for engineering convenience."),
        ],
        [
          s("Precision dominates when acting wrongly is expensive — auto-refunds, auto-deletes, auto-approvals, customer-facing alerts. "),
          x(
            "Recall dominates when missing the event is catastrophic — fraud at wire-transfer scale, safety violations, compliance breaches, high-value churn.",
            "Same model, different thresholds, different unit economics. Banks use different settings for a $5 coffee purchase versus a $5,000 wire transfer for exactly this reason.",
          ),
          s(" Document the cost asymmetry before launch: a false positive costs $X; a false negative costs $Y; therefore we optimize for [precision/recall]."),
        ],
        [
          s("Put the threshold rationale in the board deck and sales enablement — not just the ML wiki. "),
          x(
            "When a customer complains about false alarms or misses, you adjust threshold with math, not apologies.",
            "Tiered thresholds by customer segment can become a SKU: premium grade catches everything; standard grade catches only high-severity cases.",
          ),
          s(" Investors remember founders who have done this math. Enterprise buyers require it in security questionnaires."),
        ],
      ],
      examples: [
        {
          title: "Airbnb trust & safety — recall when misses are existential",
          body: "After high-profile safety incidents, Airbnb invested heavily in catching dangerous listings and behavior — accepting more manual review and false flags over missing a serious case. Founders in marketplace trust should assume recall-first posture on safety, then tune precision once human review capacity is modeled.",
        },
        {
          title: "Klarna — false positives as churn cost",
          body: "Buy-now-pay-later fraud models that block legitimate shoppers destroy conversion. Klarna's product success depends on catching fraud without freezing good customers. The founder lesson: in consumer fintech, false positives are not annoyances — they are CAC waste. Open enterprise sales calls with false-positive rate, not just fraud catch rate.",
        },
        {
          title: "Greenhouse recruiting AI — bandwidth as the constraint",
          body: "A recruiting AI startup had capacity to interview 50 candidates per role from 10,000 applicants. The founder set a high-precision threshold to surface only the top 50 — accepting low recall because interview bandwidth was the binding constraint. The strategy was coherent; a recall-optimized model would have overwhelmed customers and killed renewals.",
        },
      ],
    }, {
      kind: "diagram",
      id: "founder-eval-framework",
      type: "flow",
      title: "The Founder Evaluation Framework",
      caption:
        "Define the task, build a golden set, set a ship gate, and monitor drift — the minimum bar before any AI feature reaches users.",
    }),
    buildSection({
      number: "6.3",
      title: "Offline evaluation vs online evaluation",
      subtitle: "Why your test set is a rehearsal — and production is opening night",
      take: "Offline evaluation runs the model against historical labeled data in a controlled lab. Online evaluation measures what happens when real users, real adversaries, and real drift interact with the product. Offline metrics are necessary; online metrics are truth. Founders who conflate them fundraise on fiction.",
      why: "Every AI startup has impressive offline numbers. The ones that survive prove those numbers predict customer outcomes. Diligence teams and design partners increasingly ask how offline eval connects to production — founders who cannot answer lose deals and board trust.",
      paragraphs: [
        [
          s("Your team ships a model that beats the old one on every offline benchmark. Week two in production: support tickets spike and a design partner threatens to churn. "),
          x(
            "Offline data is frozen history. Production is live adversaries, changing user behavior, seasonality, and feedback loops the test set never saw.",
            "A model that memorized last quarter's patterns can look brilliant offline and useless when the world shifts.",
          ),
          s(" The gap between offline win and online failure is one of the most common causes of AI startup embarrassment."),
        ],
        [
          s("Offline eval belongs in R&D and architecture decisions — which model is fundamentally smarter on representative data. "),
          x(
            "Online eval belongs in launch gates and board updates — does this change improve conversion, reduce cost, or cut error rates customers actually feel?",
            "Run both in parallel: offline for iteration speed, online for business truth. Never ship a major model change on offline wins alone.",
          ),
          s(" Founders should require an online measurement plan before approving any model swap."),
        ],
        [
          s("Build a simple bridge document your team updates monthly: offline metric → expected online proxy → actual online result. "),
          x(
            "When the bridge breaks — offline improved but online flat — stop shipping and diagnose before the next board meeting.",
            "Investors respect founders who say 'our offline recall improved 8 points; online fraud savings moved 3 points; we are investigating the gap' over founders who only report lab scores.",
          ),
          s(" Treat offline metrics as hypotheses about production, not proof of production."),
        ],
      ],
      examples: [
        {
          title: "Netflix recommendation — offline A/B disconnect",
          body: "Netflix learned early that offline ranking metrics did not always predict watch time and retention. They built infrastructure to test recommendations in production with controlled experiments. Founders building personalization or ranking products should budget for online experimentation from seed stage — not treat offline NDCG as launch approval.",
        },
        {
          title: "Zillow Offers — when offline pricing models miss the market",
          body: "Zillow's iBuying algorithm relied on offline home-valuation accuracy that did not hold when housing markets shifted rapidly. The business wrote down hundreds of millions and exited iBuying. Founder lesson: offline accuracy on historical prices is not the same as making money when macro conditions change. Online P&L is the final exam.",
        },
        {
          title: "Duolingo — offline fluency vs daily streaks",
          body: "Duolingo optimizes models against offline language-learning metrics but validates changes through production experiments on engagement and completion. Founders in edtech and productivity should ask: does our offline 'quality' metric correlate with the behavior customers pay for? If not, offline wins are theatre.",
        },
      ],
    }),
    buildSection({
      number: "6.4",
      title: "Benchmark theatre — when your team's metrics don't reflect reality",
      subtitle: "Impressive charts that survive the meeting and die in the pilot",
      take: "Benchmark theatre is when metrics look rigorous but fail to represent how customers use the product — leaky test sets, cherry-picked time windows, synthetic tasks, or evaluation data that does not match production traffic. The team is not necessarily lying; they are often optimizing for what is easy to measure instead of what matters.",
      why: "Founders who accept benchmark theatre discover the truth in the worst venues: customer escalations, diligence deep-dives, and competitor bake-offs on real data. Catching theatre early saves quarters of misallocated engineering and prevents fundraising narratives that cannot survive contact with production.",
      paragraphs: [
        [
          s("Your team presents a 15-point offline improvement. You ask one question: 'Would our largest customer recognize this dataset?' Long pause. "),
          x(
            "Benchmark theatre often starts innocently — a clean internal dataset, a public leaderboard task, a demo prompt suite that never appears in support tickets.",
            "The metrics are real; the connection to revenue is fictional.",
          ),
          s(" Founders must audit whether evaluation data looks like paying customers, not like Kaggle."),
        ],
        [
          s("Common theatre patterns to interrogate: random splits on grouped data (same patient, same user, same account in train and test), "),
          x(
            "evaluation on stale data while production drifted, reporting aggregate metrics while the product fails on a key segment, and comparing models on tasks customers never bought.",
            "Data leakage inflates offline scores and guarantees production disappointment — the silent killer of AI startups.",
          ),
          s(" Ask who has access to the test set and whether it was touched after every hyperparameter tweak."),
        ],
        [
          s("Replace theatre with customer-shaped evaluation: holdout sets from real production traffic, segment-level scorecards, and periodic re-runs on fresh data. "),
          x(
            "Run vendor and model bake-offs on six months of your own labeled data — not their marketing benchmark.",
            "Founders who demand 'evaluate on what we sell, for whom we sell it' filter out teams optimizing for slide decks.",
          ),
          s(" Honest metrics that drop 10% but predict production beat inflated metrics that collapse in week one."),
        ],
      ],
      examples: [
        {
          title: "IBM Watson Health — benchmark vs clinic reality",
          body: "Watson Health generated headlines on curated oncology benchmarks but struggled to deliver consistent value in live hospital workflows — different populations, messy records, and clinical context offline tests omitted. Founders in health and regulated verticals should treat vendor benchmark PDFs as marketing until proven on their own patient or customer cohorts.",
        },
        {
          title: "OpenAI MMLU vs enterprise RAG",
          body: "General knowledge benchmarks like MMLU dominate AI Twitter. Enterprise buyers care whether the copilot retrieves the right policy paragraph from their messy SharePoint. A founder whose eval suite is only public benchmarks is preparing for conferences, not renewals. Build eval on your customers' documents, tickets, and failure cases.",
        },
        {
          title: "Kaggle champion — production false-positive explosion",
          body: "A founder hired a Kaggle champion whose models topped public leaderboards. Production deployment increased false positives 3x and destroyed user trust. Post-mortem: competition metrics assumed symmetric error costs and static data. The founder rewrote eval criteria around business-weighted loss on internal traffic. Team composition and incentives changed.",
        },
      ],
    }),
    sectionWithDiagram({
      number: "6.5",
      title: "Evaluation in production — what to measure after you ship",
      subtitle: "The metrics that show up in renewals, not in research papers",
      take: "Production evaluation asks whether the AI is making the business healthier — not whether the model still scores well on a frozen CSV. Founders need a short list of online metrics tied to revenue, cost, risk, and customer experience that update weekly and trigger action when they move.",
      why: "Boards and customers do not renew on offline F1. They renew when fraud losses fall, support cost per ticket drops, time-to-hire improves, or error rates customers feel go down. Founders who instrument production eval early catch model decay before churn; founders who do not learn from angry QBRs.",
      paragraphs: [
        [
          s("After launch, the question changes from 'how accurate is the model?' to 'is the AI worth the infrastructure, risk, and customer trust it consumes?' "),
          x(
            "Production metrics include business outcomes (dollars saved, conversion lift, handle time), product health (override rate, thumbs-down rate, escalation rate), and risk signals (incident count, near-miss log, segment disparity).",
            "If humans override the model more than 40% of the time, you do not have automation — you have an expensive suggestion box.",
          ),
          s(" Founders should pick three to five production metrics and review them in every exec staff meeting."),
        ],
        [
          s("Instrument the human-AI boundary obsessively. "),
          x(
            "Log every prediction, confidence score, human override, and downstream outcome. Without this trail, you cannot debug regressions, train the next version, or answer diligence questions.",
            "Production logs are your future training data and your liability audit trail — under-investing here is false economy.",
          ),
          s(" Treat observability as a founder priority, not a post-Series A chore."),
        ],
        [
          s("Set alert thresholds that match business pain, not statistical curiosity. "),
          x(
            "Alert when override rate jumps 20% week-over-week, when a customer segment's error rate diverges from average, or when cost per automated action exceeds human review.",
            "Weekly production eval reviews beat quarterly 'AI strategy' slides. Founders who run them catch decay while fixes are cheap.",
          ),
          s(" Online eval is how you learn whether the product you sold is the product you shipped."),
        ],
      ],
      examples: [
        {
          title: "Intercom Fin — resolution rate as the north star",
          body: "Intercom measures its support AI on resolution rate and customer satisfaction — whether tickets actually close without human help. Founders building support and ops AI should copy this: measure completed workflows, not model confidence alone. If resolution rate stalls, the model is not production-ready regardless of offline BLEU or ROUGE.",
        },
        {
          title: "GitHub Copilot — acceptance rate over time",
          body: "GitHub tracks suggestion acceptance and developer retention as core product metrics. A coding assistant that developers ignore is a failed product even if perplexity improved. Founders in developer tools should measure 'did the human keep the output?' — the ultimate online precision proxy.",
        },
        {
          title: "Spotify Discover Weekly — engagement as online eval",
          body: "Spotify validates recommendation changes through listening behavior — skips, saves, session length — not offline accuracy alone. Founders in consumer AI should tie model updates to cohort retention and feature usage. If offline ranking wins but skips rise, rollback beats celebrate.",
        },
      ],
    }, {
      kind: "diagram",
      id: "ch2-fitting-comparison",
      type: "comparison",
      title: "The Fitting Spectrum",
      caption:
        "Underfitting fails users; overfitting fails in production. Optimal fit is a product decision tied to business risk tolerance.",
    }),
    buildSection({
      number: "6.6",
      title: "Regression testing for AI — why models break in non-obvious ways",
      subtitle: "The update that fixed fraud and broke refunds — and how to catch it before users do",
      take: "Regression testing for AI means proving a new model still handles the cases the old model got right — not just that average metrics improved. Models break in non-obvious ways: a fraud upgrade that silently degrades refund classification, a prompt change that breaks JSON output, a fine-tune that forgets a key customer segment.",
      why: "Traditional software regressions are binary — a test passes or fails. AI regressions are statistical and segment-specific — average metrics improve while a high-value customer cohort collapses. Founders who skip regression discipline ship 'improvements' that cause emergency rollbacks and erode customer trust.",
      paragraphs: [
        [
          s("Your team ships v2 of the support classifier. Aggregate accuracy rises 4 points. Enterprise customers open tickets: the model now misroutes billing disputes — the one category they pay premium for. "),
          x(
            "Global metric improvements hide local catastrophes. Regression testing asks: what got worse, for whom, on the cases we cannot afford to break?",
            "A golden set of real historical failures — frozen customer incidents, edge cases, regulatory scenarios — is worth more than another week of training.",
          ),
          s(" Founders should mandate regression gates alongside improvement targets for every model release."),
        ],
        [
          s("Build a golden set from production pain: top 500 support escalations, worst fraud misses, legal-reviewed contract failures, demos that embarrassed sales. "),
          x(
            "Run every candidate model against this set before launch. Block release if any must-not-break case regresses beyond tolerance.",
            "Version the golden set like code. Add a new case every time a customer catches something your eval missed.",
          ),
          s(" Regression testing turns customer incidents into permanent guardrails instead of repeated incidents."),
        ],
        [
          s("Pair golden-set testing with shadow mode and canary rollout for high-risk changes. "),
          x(
            "Shadow mode runs the new model in parallel without affecting users — compare outputs on live traffic. Canary sends 5% of traffic to the new model and watches production metrics.",
            "Founders approve full rollout only when shadow and canary confirm offline wins translate to online safety.",
          ),
          s(" Rollback plans are not pessimism — they are how mature AI companies ship weekly without betting the customer base on one deploy."),
        ],
      ],
      examples: [
        {
          title: "Microsoft Tay — no regression guardrails on behavior",
          body: "Microsoft's Tay chatbot was manipulated into generating offensive output within hours of launch. The failure was not only content policy — it was missing regression and adversarial eval before exposure to live Twitter. Founders shipping customer-facing LLMs should maintain red-team prompt suites and block launch if safety regressions appear — even when average helpfulness scores rise.",
        },
        {
          title: "Amazon search ranking — segment regressions",
          body: "Large marketplaces routinely A/B test ranking models because a global lift in click-through can hide drops for strategic sellers or categories. Amazon's scale demands segment-level regression checks. Founders with multi-sided products should require per-segment golden metrics — not one aggregate uplift number.",
        },
        {
          title: "Bloomberg GPT fine-tune — format regression",
          body: "Finance copilots often regress on structured output — tables, JSON, ticker symbols — when upgraded for general chat quality. Bloomberg and other vertical AI vendors learned to maintain format-specific regression suites. Founders selling into workflows with parsers and compliance exports should test 'does it still parse?' on every update.",
        },
      ],
    }),
    buildSection({
      number: "6.7",
      title: "Building an evaluation culture — not just an evaluation metric",
      subtitle: "Why the best AI companies argue about eval in every sprint review",
      take: "Evaluation culture means the whole company — product, sales, support, legal — feeds failure cases into a shared system, disagreements about metrics are welcomed, and nobody ships because 'the number went up.' Metrics are the output of culture; without culture, metrics become theatre.",
      why: "Startups that treat eval as ML's private homework repeat the same production failures quarterly. Startups that treat eval as company infrastructure compound learning speed — every churned pilot, every sales loss, every support escalation improves the next model. Investors bet on learning velocity; eval culture is how you prove it.",
      paragraphs: [
        [
          s("Two startups with identical models diverge when one treats eval as a dashboard and the other as organizational memory. "),
          x(
            "Eval culture routes customer escalations into labeled examples, puts support leaders in model review meetings, and celebrates catches before launch — not just launches.",
            "Sales hears 'we do not know yet' as honesty; customers hear rapid fixes after failures as competence.",
          ),
          s(" Founders set the tone by asking 'what did we learn?' before 'did we ship?'"),
        ],
        [
          s("Institutionalize eval rituals: weekly review of production metrics, monthly golden-set updates, post-mortem template for every model incident, and a single eval doc linked from the data room. "),
          x(
            "Assign an eval owner with authority to block release — not as a bureaucrat, but as the person who remembers last quarter's rollback.",
            "Incentivize teams for customer outcomes and incident prevention, not leaderboard scores. Bonus structures that reward offline benchmarks alone create theatre.",
          ),
          s(" Evaluation culture is how you scale quality without the founder in every deploy meeting forever."),
        ],
        [
          s("Founders model intellectual honesty in board updates — report offline, online, and known gaps in the same breath. "),
          x(
            "Say: 'Recall improved offline; override rate flat online; we are adding 200 billing tickets to the golden set this sprint.'",
            "Boards trust founders who name uncertainty. Boards lose patience with founders who report only wins until a customer names the losses.",
          ),
          s(" Eval culture is a competitive moat because most competitors will not build it until after their first public failure."),
        ],
      ],
      examples: [
        {
          title: "Google — search quality rater program",
          body: "Google employs thousands of search quality raters and integrates human judgment into continuous eval — not as a one-time launch gate. Founders cannot copy Google's scale, but they can copy the principle: ongoing human eval beats one heroic benchmark. Budget for raters, customer councils, or expert review from day one if quality is your moat.",
        },
        {
          title: "Anthropic — red teaming as culture",
          body: "Anthropic institutionalized red teaming and safety eval as core product development, not a compliance checkbox. Founders building LLM products should embed adversarial testing in sprint cadence — jailbreak attempts, prompt injection, policy edge cases — with results visible to leadership weekly.",
        },
        {
          title: "Figma AI — design partner feedback loops",
          body: "Figma rolled out AI features through controlled beta with explicit feedback channels before broad launch. Design partners supplied real workflows that became eval cases. Founders should treat early customers as eval collaborators — exchange transparency on metrics for honest failure reports.",
        },
      ],
    }),
    buildSection({
      number: "6.8",
      title: "Founder decision lens: the five evaluation questions to ask your team before every major model update",
      subtitle: "Five questions that take twenty minutes and prevent twenty-week rollbacks",
      take: "Before every major model update, founders should ask five evaluation questions and refuse to ship until the answers are documented. This is not micromanagement — it is the minimum governance layer between probabilistic software and customer trust.",
      why: "Model updates are irreversible in reputation even when reversible in code. A single bad deploy becomes the story customers remember. Five questions create a consistent decision lens that works whether you understand backpropagation or not — because they force the team to connect metrics to money, customers, and risk.",
      paragraphs: [
        [
          s("Question 1 — What error costs us more money or trust, false alarms or misses? "),
          x(
            "If the team cannot answer in dollars or customer terms, they are not ready to ship.",
            "This question forces precision-recall alignment with unit economics — not with default thresholds.",
          ),
          s(" Question 2 — What offline metric predicts the online outcome we sell, and what happened to it on fresh data?"),
        ],
        [
          s("Question 3 — What got worse on the golden set and for which customer segments? "),
          x(
            "Demand segment-level regression results, not aggregate uplift.",
            "If enterprise billing disputes regressed, the release waits — even if consumer metrics improved.",
          ),
          s(" Question 4 — What is the rollback trigger in production, and who watches the dashboard for the first 72 hours?"),
        ],
        [
          s("Question 5 — What customer-visible promise changes with this update, and is sales aligned? "),
          x(
            "If the model becomes more conservative, say so before customers notice fewer alerts. If it becomes more aggressive, legal and success must sign off.",
            "Evaluation without communication is half a system. The founder closes the loop by updating the board, the data room eval doc, and customer-facing SLAs when operating points change.",
          ),
          s(" Twenty minutes of these five questions beats a quarter of explaining why the pilot failed."),
        ],
      ],
      examples: [
        {
          title: "Palantir — deployment gates in regulated accounts",
          body: "Palantir's enterprise deployments use structured rollout gates — eval evidence, operator sign-off, and rollback paths before model changes touch mission-critical workflows. Founders selling into government, finance, or healthcare should copy the gate concept at startup scale: documented answers to the five questions before every major update.",
        },
        {
          title: "Notion AI — feature beta before default-on",
          body: "Notion shipped AI capabilities through progressive rollout with feedback instrumentation before making them default. Founders can adapt question 4 for consumer products: define canary cohort, rollback trigger (e.g., thumbs-down rate + support volume), and explicit 72-hour watch owner — even at seed stage.",
        },
        {
          title: "Scale AI — customer data as eval contract",
          body: "Scale AI built its business on labeled evaluation data as a first-class deliverable. Founders without Scale's budget should still contractually treat eval datasets and golden sets as product assets — versioned, owned, and updated when customers churn or expand. The five questions fail if the underlying eval data is stale or borrowed from a benchmark.",
        },
      ],
    }),
  ],
  quiz: [
    {
      q: "Your fraud model reports 99.5% accuracy. Fraud represents 0.5% of transactions. What should concern you most?",
      options: [
        "99.5% is below industry standard.",
        "A model guessing 'not fraud' every time achieves ~99.5% accuracy while catching zero fraud — accuracy masks complete failure on the rare class.",
        "You need a larger training set to reach 99.9%.",
        "Accuracy is the correct metric for fraud detection.",
      ],
      correct: 1,
      correctFeedback:
        "Right. In imbalanced problems, accuracy is misleading. Ask what happens on the cases that actually cost you money.",
      wrongFeedback:
        "Re-read section 6.1. When the event is rare, accuracy rewards models that ignore it entirely.",
    },
    {
      q: "Your team wants to lower the detection threshold to catch more events. As a founder, you should expect:",
      options: [
        "Both false alarms and misses to drop simultaneously.",
        "More events caught but more false alarms — a precision-recall tradeoff that must match your unit economics.",
        "Offline metrics only to change; production stays identical.",
        "The test set to become unnecessary.",
      ],
      correct: 1,
      correctFeedback:
        "Exactly. Threshold is a business strategy decision. More catches usually mean more false alarms.",
      wrongFeedback:
        "Re-read section 6.2. You cannot move toward sensitivity without accepting more false positives in most products.",
    },
    {
      q: "Offline metrics improved 12% but production override rate is flat. The best founder response is:",
      options: [
        "Ship immediately — offline improvement always translates online.",
        "Investigate the offline-online gap before broad rollout; offline wins alone are not launch approval.",
        "Abandon the model entirely.",
        "Replace online metrics with offline metrics in the board deck.",
      ],
      correct: 1,
      correctFeedback:
        "Right. Offline eval is a hypothesis; online behavior is truth. Bridge the gap before you scale.",
      wrongFeedback:
        "Re-read section 6.3. Production is opening night; the test set is rehearsal.",
    },
    {
      q: "Which scenario is the clearest example of benchmark theatre?",
      options: [
        "Running a held-out test set the team has not tuned against.",
        "Reporting a 15-point gain on a clean public dataset that does not resemble paying customer traffic.",
        "Measuring override rate in production weekly.",
        "Adding last month's customer escalations to the golden set.",
      ],
      correct: 1,
      correctFeedback:
        "Exactly. Theatre is when metrics look rigorous but do not represent how customers use the product.",
      wrongFeedback:
        "Re-read section 6.4. Ask whether your eval data looks like revenue, not like a leaderboard.",
    },
    {
      q: "Why do AI companies maintain a golden set of historical failure cases?",
      options: [
        "To replace the need for online metrics entirely.",
        "To catch segment-specific regressions — average metrics can improve while must-not-break cases get worse.",
        "Because regulators require exactly 500 test examples.",
        "To eliminate the need for human review.",
      ],
      correct: 1,
      correctFeedback:
        "Right. Golden sets turn past customer pain into permanent release gates.",
      wrongFeedback:
        "Re-read section 6.6. Global uplift can hide local catastrophes without regression testing.",
    },
    {
      q: "Before a major model update, a founder asks: 'What got worse on the golden set and for which segments?' This question primarily guards against:",
      options: [
        "Excessive cloud storage costs.",
        "Shipping an aggregate improvement that breaks high-value customer workflows.",
        "GDPR data retention violations.",
        "Developers overfitting to the training set only.",
      ],
      correct: 1,
      correctFeedback:
        "Exactly. Question 3 from the founder decision lens blocks releases that win on averages but lose where it matters.",
      wrongFeedback:
        "Re-read section 6.8. Segment-level regression discipline prevents emergency rollbacks.",
    },
  ],
});
