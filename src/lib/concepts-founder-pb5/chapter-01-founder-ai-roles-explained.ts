import { buildChapter, buildSection, s, x, sectionWithDiagram } from "../concepts-pb4-helpers";

export const chapter01FounderAiRolesExplained = buildChapter({
  slug: "founder-ai-roles-explained",
  number: 1,
  shortTitle: "Understanding AI Roles",
  title: "Understanding AI Roles — What They Actually Do",
  readingMinutes: 24,
  summary:
    "The titles are confusing. The distinctions matter. ML Engineer, AI Engineer, Data Scientist, AI PM, Research Scientist, and MLOps — what each role actually builds, where it sits in your org, and the hiring sequence that matches your stage.",
  keyTakeaway:
    "Three stacks, six roles, one sequencing framework. Hire for the problem you have today — not the org chart you imagine at Series B.",
  pmCallout:
    "As a founder: you cannot hire AI talent intelligently until you can explain what each role builds and where it sits. Confusing ML Engineer with AI Engineer costs you six months and $200K in misallocated salary.",
  sections: [
    sectionWithDiagram({
      number: "1.1",
      title: "ML Engineer vs AI Engineer vs Data Scientist",
      subtitle: "Three different roles, three different skill sets, three different places in your org",
      take: "ML Engineers own the production ML stack — training pipelines, feature stores, model deployment. AI Engineers own the application AI stack — LLM integration, RAG, agents. Data Scientists own analysis and experimentation. Three roles, three budgets, three interview processes.",
      why: "Posting a generic 'AI Engineer' job when you need an ML Engineer produces 400 résumés and zero hires. Role clarity is the first filter in a brutal talent market.",
      paragraphs: [
        [
          s("The title explosion in AI hiring is not marketing — it reflects genuinely different work. "),
          x(
            "ML Engineers sit closest to classical machine learning: data pipelines, model training, evaluation, and serving infrastructure.",
            "AI Engineers sit closest to foundation models: prompt design, retrieval systems, tool use, and product-facing inference.",
          ),
          s(" Data Scientists sit closest to the business question: what should we measure, what experiment should we run, what does the data say."),
        ],
        [
          s("At seed stage, one person may wear two hats — but the hats are still different skills. "),
          x(
            "A strong AI Engineer can ship a RAG prototype in a week but may struggle to train a custom classifier on imbalanced fraud data.",
            "A strong ML Engineer can productionise a recommendation model but may not know how to design agent tool schemas or eval harnesses for LLMs.",
          ),
          s(" Founders who collapse the roles hire for charisma instead of capability."),
        ],
        [
          s("Your org chart should reflect work streams, not LinkedIn trends. "),
          x(
            "If your product is 'GPT-4 + your documents', you need AI Engineering first. If your moat is a proprietary model on proprietary data, you need ML Engineering first.",
            "If you do not know which bucket you are in, you are not ready to hire — you are ready to write a one-page technical strategy.",
          ),
          s(" Role clarity before recruiting saves quarters."),
        ],
      ],
      examples: [
        {
          title: "Stripe Radar — ML Engineering as core product",
          body: "Stripe's fraud detection is classical ML at scale: feature engineering, real-time scoring, continuous retraining on transaction data. The team is ML Engineers and data infrastructure — not prompt engineers. Founders building fraud or risk products should benchmark hiring against this profile, not against ChatGPT wrappers.",
        },
        {
          title: "Harvey — AI Engineering on rented intelligence",
          body: "Harvey's legal product is LLM integration, retrieval over firm documents, citation workflows, and human review UX. The early team skewed AI Engineer + domain expert, not ML researcher. Founders in vertical LLM applications should hire for application stack depth first.",
        },
        {
          title: "A seed startup's costly title mistake",
          body: "A health-tech founder hired a 'Senior AI Engineer' who was actually a computer vision researcher with no LLM or MLOps experience. Six months later they still had no production pipeline. Reframing the role as 'AI Engineer — RAG and evals' and re-hiring cut time-to-demo from six months to six weeks.",
        },
      ],
    }, {
      kind: "diagram",
      id: "founder-ai-roles-map",
      type: "comparison",
      title: "ML Engineer vs AI Engineer vs Data Scientist",
      caption:
        "Three roles, three skill sets, three budgets. Role clarity is the first filter in a brutal AI talent market.",
    }),
    buildSection({
      number: "1.2",
      title: "What an ML Engineer actually builds",
      subtitle: "Model training pipelines, feature engineering, model deployment — the production ML stack",
      take: "ML Engineers turn labelled data into reliable predictions in production. They build training pipelines, feature stores, model registries, and serving layers. If your competitive advantage requires a model trained on proprietary data, this is your first critical hire.",
      why: "Founders who need custom models but hire only prompt engineers discover too late that nobody owns retraining, drift monitoring, or inference cost at scale.",
      paragraphs: [
        [
          s("An ML Engineer's output is infrastructure that learns. "),
          x(
            "Training pipelines ingest data, version features, train models, evaluate against holdout sets, and promote winners to production.",
            "This is software engineering applied to statistical systems — not notebook experiments that never ship.",
          ),
          s(" The job ends when the model runs reliably in production, not when the validation accuracy looks good in a slide."),
        ],
        [
          s("Core skills: Python, SQL, distributed data processing, model frameworks (PyTorch, scikit-learn), and serving (TensorFlow Serving, Triton, or cloud ML platforms). "),
          x(
            "They think in data contracts: what features are available at inference time, what latency budget exists, what happens when upstream data is missing.",
            "They also think in retraining cadence: weekly, daily, or triggered by drift detection.",
          ),
          s(" Founders should ask candidates to walk through a model they shipped — not one they trained."),
        ],
        [
          s("You need ML Engineering when the model is the moat. "),
          x(
            "Recommendation engines, fraud detection, demand forecasting, computer vision on proprietary imagery — these require custom training loops.",
            "If your entire AI surface is API calls to GPT-4 with no proprietary training signal, ML Engineering is a later hire.",
          ),
          s(" Match the role to whether you are renting or owning intelligence."),
        ],
      ],
      examples: [
        {
          title: "Netflix — ML Engineering at recommendation scale",
          body: "Netflix's recommendation stack is thousands of features, A/B tested models, and continuous retraining on viewing behaviour. The team is overwhelmingly ML Engineers and data platform — not LLM prompt writers. Founders pitching 'our algorithm learns from usage' need this capability profile.",
        },
        {
          title: "Duolingo Birdbrain — classical ML in production",
          body: "Duolingo's lesson difficulty and spaced repetition use classical ML models trained on learner behaviour. ML Engineers own the pipeline from event logs to model updates. Founders in edtech or personalisation should study this path before hiring researchers.",
        },
        {
          title: "Seed-stage fraud startup — right first ML hire",
          body: "A payments startup's first ML hire built a real-time feature store and a gradient-boosted fraud model in eight weeks — not a GPT chatbot. Revenue saved in chargebacks paid for the hire twice over. The founder's lesson: hire ML Engineering when wrong predictions cost money.",
        },
      ],
    }),
    buildSection({
      number: "1.3",
      title: "What an AI Engineer actually builds",
      subtitle: "LLM integration, prompt engineering, RAG systems, agent architectures — the application AI stack",
      take: "AI Engineers ship LLM-powered product features: retrieval pipelines, prompt templates, tool-calling agents, eval harnesses, and guardrails. They are full-stack engineers who speak model APIs fluently. For most 2025 AI startups, this is the first hire.",
      why: "The majority of seed-stage AI companies build on foundation models via API. The bottleneck is not training — it is reliable product integration. AI Engineers own that layer.",
      paragraphs: [
        [
          s("AI Engineering is applied LLM product development. "),
          x(
            "Typical deliverables: a RAG pipeline over your knowledge base, structured outputs for downstream systems, agent workflows that call tools, and offline evals that catch regressions before users do.",
            "The stack spans vector databases, orchestration frameworks (LangChain, LlamaIndex), and observability tools — not GPU clusters.",
          ),
          s(" Speed to reliable demo is the metric founders should hire for."),
        ],
        [
          s("Strong AI Engineers combine backend engineering with model behaviour intuition. "),
          x(
            "They know when RAG beats fine-tuning, when to route to a cheaper model, and how to design human-in-the-loop fallbacks.",
            "They write eval suites — not because it is fashionable, but because LLM outputs are non-deterministic and regressions are silent.",
          ),
          s(" Ask candidates about the last eval they built, not the last paper they read."),
        ],
        [
          s("This role explodes in demand because foundation models commoditised capability. "),
          x(
            "In 2020 you needed an ML team to do language understanding. In 2025 you need an AI Engineer to wire GPT-4 into your workflow with acceptable quality and cost.",
            "The defensibility moved up-stack: data, workflow, distribution — but someone still has to build the integration layer.",
          ),
          s(" That person is your AI Engineer."),
        ],
      ],
      examples: [
        {
          title: "Notion AI — AI Engineering as feature velocity",
          body: "Notion's AI features — writing assist, Q&A over docs — are AI Engineering work: prompt design, context window management, product UX around non-deterministic outputs. Not a custom foundation model. Founders adding AI to existing products should hire this profile first.",
        },
        {
          title: "Glean — enterprise RAG as AI Engineering",
          body: "Glean's enterprise search is retrieval architecture, permissions-aware indexing, and ranking — built on rented models. The moat is integration depth and data connectors, not proprietary training. AI Engineers own the product stack.",
        },
        {
          title: "Agent startup — evals as hiring signal",
          body: "A founder interviewing AI Engineer candidates asked each to design an eval harness for a customer-support agent. The candidate who shipped a 20-case regression suite in the take-home got the offer. The one who wrote elegant prompts with no eval plan did not. Founders: test for production thinking.",
        },
      ],
    }),
    buildSection({
      number: "1.4",
      title: "What a Data Scientist actually does",
      subtitle: "Analysis, experimentation, statistical modelling — and why this is different from ML",
      take: "Data Scientists answer business questions with data: experiment design, causal inference, dashboards, and lightweight models. They are not ML Engineers — and hiring one when you need production pipelines creates a gap nobody fills.",
      why: "Founders conflate 'works with data' roles and end up with beautiful notebooks and no production model. Know which problem you are solving: insight or infrastructure.",
      paragraphs: [
        [
          s("Data Science is hypothesis-driven analysis at business speed. "),
          x(
            "Typical work: design an A/B test, measure feature adoption, build a forecasting spreadsheet model, segment users, or run a logistic regression to validate a thesis before engineering invests.",
            "Output is a decision, a dashboard, or a prototype — not a production serving pipeline.",
          ),
          s(" The role is closest to product and strategy, furthest from MLOps."),
        ],
        [
          s("The distinction from ML Engineering is ownership of production. "),
          x(
            "A Data Scientist might prove that a churn signal exists in the data. An ML Engineer builds the pipeline that scores churn daily in production.",
            "At early stage, one person may do both — but the skill sets diverge quickly as you scale.",
          ),
          s(" Founders should not post 'Data Scientist' when they mean 'person who ships models'."),
        ],
        [
          s("You need Data Science when you are still finding product-market fit for AI features. "),
          x(
            "Before you invest in training infrastructure, someone should prove the signal exists, quantify the uplift, and define success metrics.",
            "Once the signal is proven and the feature is committed, transition toward ML or AI Engineering hires.",
          ),
          s(" Data Science de-risks; ML Engineering industrialises."),
        ],
      ],
      examples: [
        {
          title: "Airbnb — Data Science before ML Engineering",
          body: "Airbnb's early pricing and search teams were heavy on Data Science: experimentation, causal analysis, and prototype models. Production ML came after the business case was proven. Founders should sequence insight before infrastructure.",
        },
        {
          title: "B2B SaaS — DS hire saves a bad ML bet",
          body: "A founder wanted to hire an ML Engineer to predict churn. A contract Data Scientist ran a two-week analysis and found the signal was too weak for ML — the problem was onboarding UX, not prediction. Saved $180K and six months. Founders: prove the signal first.",
        },
        {
          title: "Growth team overlap — when DS is the right fit",
          body: "A consumer app hired a Data Scientist to measure AI feature adoption, run holdout tests, and define the metric dashboard investors would see at Series A. No model training required. The hire was correct because the question was measurement, not deployment.",
        },
      ],
    }),
    buildSection({
      number: "1.5",
      title: "AI Product Manager — do you need one and when",
      subtitle: "The role that bridges technical AI capability and product strategy",
      take: "An AI PM owns the product decisions around model behaviour: what to automate, where humans stay in the loop, what to measure, and what 'good enough' means. You need one when AI features are core to roadmap and engineering cannot also own product strategy.",
      why: "Engineers optimise for technical correctness. Product requires optimising for user trust, failure modes, and unit economics. Without an AI PM, you ship impressive demos that users do not trust.",
      paragraphs: [
        [
          s("AI PM is not 'PM who likes ChatGPT'. "),
          x(
            "They define eval criteria tied to user outcomes, design fallback UX for model failures, and negotiate the accuracy-latency-cost triangle with engineering.",
            "They write PRDs that specify behaviour under uncertainty — not just happy-path wireframes.",
          ),
          s(" The role exists because AI products fail in product dimensions, not only technical ones."),
        ],
        [
          s("At seed, the founder or a technical co-founder often plays this role. "),
          x(
            "Hire a dedicated AI PM when you have multiple AI features in flight, enterprise customers asking about accuracy SLAs, or engineering spending more time on product tradeoffs than on building.",
            "Series A is the typical inflection — not because the title matters, but because coordination cost exceeds one person's bandwidth.",
          ),
          s(" Premature AI PM hires create process without product."),
        ],
        [
          s("The best AI PMs speak enough engineering to be dangerous. "),
          x(
            "They understand RAG vs fine-tuning at a decision level, can read an eval report, and know when 'the model is wrong' is a product problem vs a data problem.",
            "They do not need to implement — they need to ask the questions engineers forget.",
          ),
          s(" Interview for judgment under uncertainty, not ML credentials."),
        ],
      ],
      examples: [
        {
          title: "Intercom Fin — AI PM as trust architect",
          body: "Intercom's AI support agent required explicit product decisions: when to escalate to humans, how to show sources, what resolution rate justified automation. AI PMs owned those tradeoffs — not just engineers tuning prompts. Founders should see AI PM as trust design.",
        },
        {
          title: "Seed founder as AI PM — when it works",
          body: "A two-founder team (CEO + CTO) split product and engineering through seed. The CEO owned eval criteria and customer conversations about accuracy. No AI PM hire until Series A when three AI features shipped simultaneously. Founders can defer this hire longer than they think.",
        },
        {
          title: "Wrong hire — traditional PM without AI fluency",
          body: "A startup hired a SaaS PM to 'own AI roadmap'. They wrote user stories without eval requirements, shipped a feature with 40% task completion, and blamed engineering. Replaced with an AI-literate PM who defined human-override rate as the north star. Metric moved in one quarter.",
        },
      ],
    }),
    sectionWithDiagram({
      number: "1.6",
      title: "AI Research Scientist — only for late-stage companies",
      subtitle: "Why hiring a researcher before Series B is almost always the wrong allocation",
      take: "Research Scientists push the frontier: new architectures, novel training methods, publishable results. Unless training custom foundation models is your business model, hiring one before Series B burns runway on papers instead of product.",
      why: "PhDs are impressive in pitch meetings and expensive in burn rate. Founders hire researchers for credibility and regret it when nothing ships for a year.",
      paragraphs: [
        [
          s("Research Scientists optimise for novelty and publication. "),
          x(
            "Their incentive structure — conferences, citations, open-source prestige — diverges from startup shipping cadence.",
            "They excel when the company's bet is 'we must invent a new method to win' — not when the bet is 'we must integrate GPT-4 better than competitors'.",
          ),
          s(" Most startups are in the second category."),
        ],
        [
          s("The hire makes sense at three conditions. "),
          x(
            "One: your product requires capabilities no API provides. Two: you have proprietary data at scale that fine-tuning cannot exploit. Three: you have $10M+ and 18+ months runway for research cycles.",
            "If any condition is false, hire an AI or ML Engineer instead.",
          ),
          s(" Research is a capital allocation decision, not a prestige decision."),
        ],
        [
          s("Acqui-hire of research teams is often cheaper than building one. "),
          x(
            "Google, Meta, and OpenAI absorb most frontier talent. Startups that need research capability usually partner, license, or acqui-hire — not recruit from scratch at seed.",
            "Founders who want 'a researcher on the cap table' should ask what paper they will ship in 90 days.",
          ),
          s(" Silence to that question is your answer."),
        ],
      ],
      examples: [
        {
          title: "OpenAI, Anthropic, Cohere — research as the product",
          body: "Foundation model companies hire Research Scientists because training IS the product. Application-layer founders are not in this game unless they raise nine figures. Benchmark your hiring against application companies, not labs.",
        },
        {
          title: "Seed startup researcher regret",
          body: "A robotics startup hired a CV PhD at $280K to 'build proprietary perception'. Twelve months later: two preprints, zero production model. Replaced with an ML Engineer who fine-tuned an open vision model in six weeks. Founder lesson: research appetite must match business model.",
        },
        {
          title: "Adept — when research hire is strategic",
          body: "Adept's bet was novel agent architectures — genuinely research-heavy. They raised accordingly and hired researchers early. The counter-example proves the rule: research hires require research-stage capital and timeline. Seed founders are rarely here.",
        },
      ],
    }, {
      kind: "diagram",
      id: "founder-hiring-sequence",
      type: "flow",
      title: "AI Hiring Sequence by Stage",
      caption:
        "Define your bet → hire the right first role → prove the loop → specialise. Hire for today's problem, not Series B's org chart.",
    }),
    buildSection({
      number: "1.7",
      title: "MLOps Engineer — the role most startups hire too late",
      subtitle: "The person who keeps your AI working in production when everything else is on fire",
      take: "MLOps Engineers own the operational layer: CI/CD for models, monitoring, drift detection, rollback, and cost tracking. You need one when your AI is in production serving real users — not when you are still prototyping.",
      why: "The prototype-to-production cliff kills more AI startups than model quality. MLOps is the bridge. Founders who skip it discover regressions from user tweets, not from dashboards.",
      paragraphs: [
        [
          s("MLOps is DevOps for models. "),
          x(
            "Infrastructure: model registries, feature stores, automated retraining triggers, A/B test harnesses for model versions, and alerting when accuracy drops.",
            "Without it, every model update is a manual deploy prayed over in Slack.",
          ),
          s(" The role appears after product-market fit for AI features — not before."),
        ],
        [
          s("Symptoms you hired too late. "),
          x(
            "Engineers manually copy model weights to production. Nobody knows which prompt version is live. Inference costs spiked 3x last month and nobody noticed until finance asked.",
            "Customer reports 'the AI got worse' and the team cannot reproduce or roll back.",
          ),
          s(" Each symptom is an MLOps hire screaming to happen."),
        ],
        [
          s("At seed, a senior AI or ML Engineer should cover basic MLOps. "),
          x(
            "Version your prompts and models in git. Log inputs and outputs. Run offline evals before deploy. Track cost per request.",
            "Dedicated MLOps hires make sense around Series A when multiple models serve multiple features and uptime SLAs exist.",
          ),
          s(" Do not hire MLOps before you have something to operate."),
        ],
      ],
      examples: [
        {
          title: "Uber Michelangelo — MLOps at scale",
          body: "Uber built Michelangelo as internal MLOps platform so hundreds of models could train, deploy, and monitor consistently. Startups will not build this — but they need the discipline earlier than they think. Founders: minimum viable MLOps is versioning + monitoring + rollback.",
        },
        {
          title: "Series A wake-up call — silent regression",
          body: "A legal-tech startup pushed a prompt change that dropped citation accuracy from 94% to 71%. No monitoring — discovered via angry law-firm email. First MLOps hire built eval gates in CI; regressions now block deploy. Cost of delay: one enterprise renewal.",
        },
        {
          title: "AI Engineer with MLOps instincts — seed pattern",
          body: "A seed company's sole AI hire set up LangSmith tracing, prompt versioning, and weekly eval reports before Series A. When investors asked 'how do you know the model is working?', the founder had dashboards. MLOps thinking without MLOps headcount.",
        },
      ],
    }),
    buildSection({
      number: "1.8",
      title: "Founder decision lens: mapping the AI roles you need",
      subtitle: "The hiring sequencing framework — what to hire in what order at seed, Series A, and Series B",
      take: "Seed: one generalist AI Engineer (or ML Engineer if custom models are the moat). Series A: add AI PM, deepen ML or MLOps. Series B: specialists, possible research, dedicated data platform. Sequence by problem, not by org-chart envy.",
      why: "The LinkedIn org chart of a Series C company will bankrupt a seed startup. Founders who hire ahead of need create idle expensive talent; founders who hire behind need lose twelve months of capability.",
      paragraphs: [
        [
          s("Step one: write the one-sentence technical bet. "),
          x(
            "'We integrate frontier models into workflow X' → AI Engineer first. 'We train on proprietary data Y' → ML Engineer first. 'We do not know if the signal exists' → Data Scientist first.",
            "The bet determines the first hire more than any job board taxonomy.",
          ),
          s(" If you cannot write the sentence, postpone hiring."),
        ],
        [
          s("Step two: map hires to milestones, not headcount targets. "),
          x(
            "First production AI feature shipped → consider MLOps discipline. First enterprise customer asking SLAs → AI PM. First custom model in production → dedicated ML Engineer #2.",
            "Investors who ask 'what is your AI team plan?' want this sequencing, not a list of titles.",
          ),
          s(" Milestone-driven hiring survives board meetings."),
        ],
        [
          s("Step three: audit every open req against today's problem. "),
          x(
            "Research Scientist at seed? Almost never. MLOps before production? Too early. AI PM before multiple AI features? Premature.",
            "The framework is conservative by design — you can always hire faster, but un-hiring is expensive.",
          ),
          s(" Run this audit before every new AI job posting."),
        ],
      ],
      examples: [
        {
          title: "Seed RAG startup — correct sequence",
          body: "Month 0: founder + full-stack engineer. Month 4: first AI Engineer (RAG + evals). Month 10: contract Data Scientist for Series A metrics. Month 14 (post-A): AI PM. No ML Engineer until proprietary fine-tuning justified. Sequence matched the bet.",
        },
        {
          title: "Series A fintech — ML-first sequence",
          body: "Fraud moat required custom models from day one. Hire 1: ML Engineer. Hire 2: backend for data pipeline. Hire 3 (Series A): MLOps. Hire 4: AI PM for explainability UX. Different product, different sequence — same framework.",
        },
        {
          title: "Board prep — role map slide",
          body: "A founder presented a 18-month hiring map: three roles now, three triggered by milestones. Board approved increased recruiting budget because sequencing was credible. Contrast with a peer who listed eight titles with no triggers — recruiting budget denied.",
        },
      ],
    }),
  ],
  quiz: [
    {
      q: "You are a seed-stage startup building a customer-support agent on GPT-4 with RAG over your help docs. No custom model training planned for 12 months. What is the correct first AI hire?",
      options: [
        "AI Research Scientist — credibility with investors.",
        "AI Engineer — RAG, evals, and product integration.",
        "ML Engineer — every AI company needs one.",
        "MLOps Engineer — production readiness first.",
      ],
      correct: 1,
      correctFeedback:
        "Right. API + RAG + agent workflows are AI Engineering work. Research is premature; ML Engineering is unnecessary without custom training; MLOps before production is too early.",
      wrongFeedback:
        "Match the hire to the technical bet. RAG on rented models = AI Engineer first. Re-read sections 1.1 and 1.3.",
    },
    {
      q: "Your product moat is a fraud-detection model trained on proprietary transaction data with daily retraining. Which role owns production model deployment?",
      options: [
        "Data Scientist — they work with data.",
        "AI Engineer — they work with AI.",
        "ML Engineer — training pipelines and model serving.",
        "AI Product Manager — they own the roadmap.",
      ],
      correct: 2,
      correctFeedback:
        "Right. Custom training, feature engineering, and production serving are ML Engineering. Data Science proves the signal; AI PM owns product tradeoffs.",
      wrongFeedback:
        "Production ML pipelines are ML Engineering, not Data Science or AI Engineering. Re-read section 1.2.",
    },
    {
      kind: "categorize",
      q: "Sort each responsibility to the correct role.",
      categories: ["AI Engineer", "ML Engineer", "Data Scientist"],
      items: [
        { text: "Design a RAG pipeline and prompt eval harness for a support bot.", category: 0 },
        { text: "Build a feature store and daily retraining job for a recommendation model.", category: 1 },
        { text: "Run an A/B test to measure whether AI summaries improve ticket resolution.", category: 2 },
        { text: "Implement tool-calling agent architecture with guardrails.", category: 0 },
        { text: "Train a gradient-boosted classifier on imbalanced fraud labels.", category: 1 },
        { text: "Segment users to validate whether churn prediction is worth building.", category: 2 },
      ],
      correctFeedback:
        "Right. AI Engineers ship LLM product integration. ML Engineers own training and serving. Data Scientists prove signals and measure outcomes.",
      wrongFeedback:
        "Application stack = AI Engineer. Production ML = ML Engineer. Insight and experiments = Data Scientist. Re-read sections 1.2–1.4.",
    },
    {
      q: "A candidate has a PhD in NLP, three publications, and no shipped production LLM product. You are seed-stage building a vertical SaaS with RAG. Best assessment?",
      options: [
        "Perfect first hire — PhD proves AI depth.",
        "Strong researcher profile, wrong for seed application integration — prioritise shipped AI Engineering work.",
        "Hire as CTO immediately.",
        "Hire as MLOps Engineer.",
      ],
      correct: 1,
      correctFeedback:
        "Right. Research credentials do not equal application shipping ability. At seed on rented models, prioritise candidates who have built and eval'd production LLM features.",
      wrongFeedback:
        "Research Scientists and AI Engineers have different incentives and outputs. Re-read sections 1.3 and 1.6.",
    },
    {
      kind: "order",
      q: "Order the typical hiring sequence for a seed startup building on GPT-4 APIs (earliest first).",
      prompt: "Drag to arrange earliest hire (top) to latest hire (bottom).",
      items: [
        "AI Engineer — ship RAG/agent MVP with evals.",
        "Data Scientist (contract or part-time) — prove AI feature ROI for fundraising.",
        "AI Product Manager — coordinate multiple AI features and enterprise SLAs.",
        "Dedicated MLOps Engineer — operate multiple models at scale with monitoring.",
      ],
      correctFeedback:
        "Right. Ship first, measure second, product-manage third, operate at scale fourth. Sequence by milestone, not envy.",
      wrongFeedback:
        "Seed startups ship with AI Engineering first. PM and MLOps come after production traction. Re-read section 1.8.",
    },
    {
      q: "Your AI feature is in production serving 5,000 users. Last deploy caused a silent quality regression discovered via Twitter. What is the founder-correct next step?",
      options: [
        "Hire an AI Research Scientist to improve the model.",
        "Institute MLOps discipline — versioning, eval gates, monitoring, rollback — via hire or upskilling.",
        "Remove AI from the product until Series B.",
        "Post a generic 'AI Engineer' req and hope.",
      ],
      correct: 1,
      correctFeedback:
        "Right. Silent regressions are an operational failure. MLOps — even minimum viable — prevents repeat incidents.",
      wrongFeedback:
        "Production failures need operational fixes, not research or vague re-hiring. Re-read section 1.7.",
    },
  ],
});
