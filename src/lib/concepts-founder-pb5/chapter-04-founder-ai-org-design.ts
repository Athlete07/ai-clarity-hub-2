import { buildChapter, buildSection, s, x, sectionWithDiagram } from "../concepts-pb4-helpers";

export const chapter04FounderAiOrgDesign = buildChapter({
  slug: "founder-ai-org-design",
  number: 4,
  shortTitle: "AI Org Design",
  title: "AI Org Design — Structure for Scale",
  readingMinutes: 21,
  summary:
    "The structure that works at 10 people will break at 50. Centralised vs embedded teams, centre of excellence, product collaboration models, org evolution by stage, data ownership, and avoiding the ivory tower.",
  keyTakeaway:
    "Org design is a product decision. Structure AI teams to ship user outcomes — not to impress board slides with headcount.",
  pmCallout:
    "As a founder: your AI org chart is a bet on how innovation happens in your company. Centralise too early and you bottleneck; embed too early and you duplicate. Match structure to stage.",
  sections: [
    buildSection({
      number: "4.1",
      title: "Centralised vs embedded AI teams",
      subtitle: "One AI team serving the whole company vs AI engineers embedded in product teams",
      take: "Centralised: shared platform, consistent standards, one hiring bar — but risk of bottleneck. Embedded: fast product iteration — but risk of duplicated effort and inconsistent quality. Most startups start centralised and embed selectively at Series A.",
      why: "This is the first org design fork. Wrong choice slows every AI feature for a year or fragments your stack beyond maintenance.",
      paragraphs: [
        [
          s("Centralised AI team owns AI capability as a service. "),
          x(
            "Product teams request features; AI team prioritises roadmap. Works when AI patterns repeat across products and standards matter.",
            "Fails when AI team becomes ticket queue and product teams route around them.",
          ),
          s(" Seed default: one centralised AI function (often one person)."),
        ],
        [
          s("Embedded AI engineers sit inside product squads. "),
          x(
            "They attend product standups, own AI features for that squad, and ship at product cadence.",
            "Works when AI is the product and squads are autonomous. Fails when each squad reinvents evals and infra.",
          ),
          s(" Embedding without shared platform creates hidden tech debt."),
        ],
        [
          s("Hybrid is the durable model at scale. "),
          x(
            "Platform AI team owns evals, model routing, data pipelines. Embedded AI engineers consume platform and ship features.",
            "Founders should plan toward hybrid by Series B — not on day one.",
          ),
          s(" Structure follows product complexity, not org-chart fashion."),
        ],
      ],
      examples: [
        {
          title: "Seed centralised — one AI lead",
          body: "Five-person startup: one AI Engineer serves all product needs. No embedding debate yet. Correct for headcount. Founders should not copy Spotify squad model at five people.",
        },
        {
          title: "Series A embedded misfire",
          body: "Startup embedded AI engineers in three squads without shared platform. Three different eval frameworks, incompatible logging. Series B refactor cost two quarters. Hybrid would have prevented duplication.",
        },
        {
          title: "Series B hybrid — platform + embed",
          body: "Platform team of three owns MLOps, eval library, and model routing. Four embedded AI engineers in product squads ship features on shared rails. Founder credits hybrid for 2x feature velocity vs pure centralised queue.",
        },
      ],
    }),
    sectionWithDiagram({
      number: "4.2",
      title: "The AI centre of excellence model",
      subtitle: "When it works, when it creates bottlenecks, and when to dismantle it",
      take: "A Centre of Excellence (CoE) sets standards, trains the org, and builds shared tools — but does not own all AI delivery. CoE as sole delivery team creates bottleneck; CoE as platform enabler scales.",
      why: "Enterprises love CoE slides. Startups die when CoE becomes approval layer instead of acceleration layer.",
      paragraphs: [
        [
          s("CoE done right: platform, standards, guild. "),
          x(
            "Publishes eval templates, model selection guide, and security checklist. Runs office hours. Does not gate every prompt change.",
            "Measures success by product team velocity and incident rate — not by CoE headcount.",
          ),
          s(" Enablement, not empire-building."),
        ],
        [
          s("CoE done wrong: ivory tower queue. "),
          x(
            "Every AI feature requires CoE approval. Product teams wait weeks. Shadow AI projects appear in spreadsheets.",
            "Symptom: product managers hire contractors to bypass internal AI team.",
          ),
          s(" Bottleneck CoE is worse than no CoE."),
        ],
        [
          s("When to dismantle or restructure. "),
          x(
            "If CoE backlog exceeds one quarter and product teams complain, shift to embedded with platform support.",
            "If CoE ships impressive demos nobody uses, problem is product coupling — not structure alone.",
          ),
          s(" Reorg when metrics say so, not when McKinsey decks say so."),
        ],
      ],
      examples: [
        {
          title: "CoE as platform guild — scaled well",
          body: "Series B company: 4-person AI platform CoE built shared eval harness and model router. 8 embedded engineers consumed it. Feature lead time dropped 35%. CoE measured by adoption, not approvals.",
        },
        {
          title: "CoE bottleneck — shadow IT",
          body: "Centralised CoE required ticket for every prompt change. Product team built rogue LangChain app on personal AWS. Security incident forced reorg to embedded model. Founder lesson: enable or get routed around.",
        },
        {
          title: "Early CoE mistake at seed",
          body: "Founder titled solo AI hire 'Head of AI CoE' with three-person company. Signalled bureaucracy to next hire. Retitled 'Founding AI Engineer', pipeline improved. Names matter at small scale.",
        },
      ],
    }, {
      kind: "diagram",
      id: "founder-org-design-stages",
      type: "flow",
      title: "AI Org Design by Stage",
      caption:
        "Seed generalist → Series A application stack → Series B platform team → scale governance. Org design follows product maturity.",
    }),
    sectionWithDiagram({
      number: "4.3",
      title: "How AI teams interface with product teams",
      subtitle: "The collaboration model that produces good AI products vs the one that produces AI features nobody uses",
      take: "Good interface: shared roadmap, joint success metrics (task completion, override rate), AI engineers in discovery, PMs in eval review. Bad interface: AI team receives specs, ships in isolation, surprise at launch.",
      why: "AI features fail in product dimensions — trust, failure UX, scope — not only model dimensions. Interface design determines whether AI ships to usage.",
      paragraphs: [
        [
          s("Shared metrics, not separate scorecards. "),
          x(
            "AI team measured only on model accuracy while PM measured on adoption creates misalignment.",
            "Joint north star: task completion rate, human override rate, AI-attributed retention.",
          ),
          s(" If metrics diverge, teams optimise against each other."),
        ],
        [
          s("AI engineers belong in discovery. "),
          x(
            "Feasibility conversations before PRD lock: can we hit 90% accuracy? what data exists? what fails gracefully?",
            "Late involvement produces specs that cannot be built or should not be shipped.",
          ),
          s(" 'Can we AI this?' is a discovery question, not a post-launch question."),
        ],
        [
          s("Rituals that work: weekly eval review, monthly failure postmortem. "),
          x(
            "PM + AI lead review eval dashboard together. User-reported failures become eval cases within 48 hours.",
            "Celebrates fixes to failure modes, not only accuracy improvements.",
          ),
          s(" Collaboration is ritualised, not assumed."),
        ],
      ],
      examples: [
        {
          title: "Joint metrics — adoption turnaround",
          body: "AI feature had 92% offline accuracy but 12% task completion. PM and AI lead aligned on task completion north star, redesigned fallback UX. Adoption tripled. Shared metric fixed interface failure.",
        },
        {
          title: "Spec-over-wall failure",
          body: "PM wrote PRD without AI feasibility review. Engineering built feature that hallucinated in 30% of demo cases. Killed at launch. Now AI engineer joins discovery for any AI epic.",
        },
        {
          title: "Eval review ritual",
          body: "Weekly 30-minute eval review: PM, AI lead, one engineer. Added 5 user failure cases to suite per week. Regression rate dropped 60% over quarter. Cheap ritual, high leverage.",
        },
      ],
    }, {
      kind: "diagram",
      id: "founder-org-design-stages",
      type: "flow",
      title: "AI Org by Stage",
      caption:
        "Generalist → application stack → platform → governance as the company scales.",
    }),
    buildSection({
      number: "4.4",
      title: "AI team structure at seed, Series A, Series B",
      subtitle: "The org chart evolution as you scale — who reports to whom and why it changes",
      take: "Seed: AI lead reports to CTO or CEO, team of 1–2. Series A: AI lead + 3–5, possible AI PM, reports to CTO with dotted line to product. Series B: Head of AI, platform sub-team, embedded engineers, reports to CTO or CPO depending on product centrality.",
      why: "Reporting lines signal priorities. AI reporting to marketing is a feature team; reporting to CTO with product dotted line is a core capability.",
      paragraphs: [
        [
          s("Seed structure — flat and founder-visible. "),
          x(
            "1–2 AI people, direct access to CEO, no middle management.",
            "AI lead owns architecture and ships. Founder is implicit AI PM.",
          ),
          s(" Optimise for speed, not hierarchy."),
        ],
        [
          s("Series A — specialisation begins. "),
          x(
            "Add AI PM or senior IC #2–3. Introduce light platform thinking (shared evals).",
            "AI lead still hands-on; begins hiring and setting bar.",
          ),
          s(" First management layer appears around 5 AI headcount."),
        ],
        [
          s("Series B — platform + embed formalises. "),
          x(
            "Head of AI manages platform team and dotted-line embedded engineers in squads.",
            "Reporting to CPO signals AI-native product; to CTO signals infrastructure-heavy AI.",
          ),
          s(" Choose reporting based on where AI creates value in your business."),
        ],
      ],
      examples: [
        {
          title: "Seed — CEO dotted line",
          body: "Solo AI Engineer reported to CTO with weekly CEO sync on roadmap. No AI PM until Series A. Structure matched decision speed at 12-person company.",
        },
        {
          title: "Series A — first AI PM",
          body: "Three AI engineers, one AI PM, reported to CTO. PM owned eval criteria and customer-facing accuracy narrative. Unlocked enterprise sales requiring SLA language.",
        },
        {
          title: "Series B — Head of AI to CPO",
          body: "AI-native legal product moved AI org under CPO. Signalled AI is product core, not cost centre. Embedded engineers in three vertical squads. Revenue attribution justified structure.",
        },
      ],
    }),
    buildSection({
      number: "4.5",
      title: "The AI team's relationship with data",
      subtitle: "Who owns the data pipeline — engineering, data science, or a dedicated data team",
      take: "At seed, AI lead often owns data ingestion for AI features. At scale, split: data platform owns pipelines, AI owns feature engineering and training data quality, product owns consent and labelling priorities.",
      why: "Ambiguous data ownership produces models trained on stale, leaky, or non-consented data — discovered in diligence, not in development.",
      paragraphs: [
        [
          s("Data pipeline ownership clarifies accountability. "),
          x(
            "Ingestion, warehousing, and access control: typically data platform or backend. Feature engineering, labelling specs, training set curation: AI/ML team. Consent, retention policy, customer data rights: product + legal.",
            "Three owners, three domains — document in a RACI before Series A.",
          ),
          s(" RACI chart before Series A prevents pipeline blame games."),
        ],
        [
          s("AI teams without data access ship demos, not moats. "),
          x(
            "If AI engineers cannot query production behaviour logs, feedback loops stall.",
            "Founders should guarantee data access in AI team charter — not fight for it per project.",
          ),
          s(" Data access is organisational design, not a technical ticket."),
        ],
        [
          s("Labelling ownership is often orphaned. "),
          x(
            "Product defines what 'good' looks like. AI defines labelling schema. Ops or contractors execute.",
            "Nobody owning labelling = models trained on inconsistent labels.",
          ),
          s(" Assign labelling owner explicitly in org design."),
        ],
      ],
      examples: [
        {
          title: "Seed — AI lead owns ingestion",
          body: "First AI hire built document ingestion pipeline because no data team existed. Correct at seed. Documented handoff criteria for Series A data hire.",
        },
        {
          title: "Pipeline blame game — stale features",
          body: "ML model degraded; AI blamed data team, data blamed backend. No RACI. Root cause: 72-hour feature lag undocumented. RACI + SLA fixed in one sprint.",
        },
        {
          title: "Labelling owner assigned — quality jump",
          body: "Series A startup assigned AI PM as labelling spec owner; ops ran annotation. Inter-annotator agreement rose from 0.71 to 0.89. Model quality followed org clarity.",
        },
      ],
    }),
    buildSection({
      number: "4.6",
      title: "Avoiding the ivory tower AI team",
      subtitle: "The signs that your AI team is building impressive things that do not solve real user problems",
      take: "Ivory tower signals: low feature adoption, product teams bypassing AI, demos that impress board but not users, metrics focused on offline accuracy only, no AI engineers in customer calls.",
      why: "Ivory tower teams burn runway and talent. They produce conference talks while competitors ship useful mediocre AI.",
      paragraphs: [
        [
          s("Measure adoption, not impressiveness. "),
          x(
            "If AI features have <20% adoption after 90 days, problem is product fit or trust — not model architecture.",
            "Ivory tower teams respond with better models instead of better UX.",
          ),
          s(" Founders should review adoption monthly with AI lead."),
        ],
        [
          s("Require customer contact from AI team. "),
          x(
            "Monthly customer call rotation for every AI engineer. Read support tickets tagged 'AI wrong'.",
            "Distance from users produces technically elegant irrelevance.",
          ),
          s(" Customer contact is an org requirement, not a volunteer activity."),
        ],
        [
          s("Align incentives with shipped outcomes. "),
          x(
            "Bonuses and promotions tied to production features and user metrics — not paper submissions or internal platform elegance.",
            "What you measure is what you get.",
          ),
          s(" Incentive design is founder responsibility."),
        ],
      ],
      examples: [
        {
          title: "Impressive demo, zero adoption",
          body: "AI team demoed 97% accurate internal benchmark to board. Feature had 8% adoption because users did not trust outputs. Reorg embedded engineers with PM; added citation UX. Adoption hit 45%. Problem was ivory tower distance.",
        },
        {
          title: "Customer call rotation",
          body: "Founder mandated monthly customer call for each AI engineer. Within two months, three eval cases came directly from call notes. Override rate dropped 22%. Proximity fixed prioritisation.",
        },
        {
          title: "Incentive shift — platform to product",
          body: "AI platform team bonuses tied to internal adoption of eval library, not lines of platform code. Product teams started using shared tools. Incentives killed ivory tower metrics.",
        },
      ],
    }),
    buildSection({
      number: "4.7",
      title: "Founder decision lens: drawing your AI org chart 18 months out",
      subtitle: "The exercise that reveals the hiring gaps you need to start filling today",
      take: "Draw three org charts: today, +9 months, +18 months. For each: headcount, reporting lines, centralised vs embedded, data ownership, and triggers for next hire. Present to board as hiring plan, not wish list.",
      why: "Reactive hiring produces wrong roles at wrong time. Forward org design turns recruiting into execution of a plan investors can underwrite.",
      paragraphs: [
        [
          s("Start from product roadmap, not headcount envy. "),
          x(
            "Each AI feature on roadmap implies engineering weeks. Sum weeks → FTE need.",
            "Add platform headcount when duplicated effort appears twice.",
          ),
          s(" Roadmap-driven headcount survives board scrutiny."),
        ],
        [
          s("Define triggers for structure change. "),
          x(
            "Example: embed first AI engineer when second product squad launches AI epic.",
            "Example: hire MLOps when second model serves production.",
          ),
          s(" Triggers remove founder gut-feel from reorg timing."),
        ],
        [
          s("Share the 18-month chart with your AI lead. "),
          x(
            "Co-authored org plan retains the lead and calibrates ambition.",
            "Surprise reorgs lose talent. Transparent plan attracts talent.",
          ),
          s(" Org design is a retention tool when done openly."),
        ],
      ],
      examples: [
        {
          title: "18-month chart — Series A approved",
          body: "Founder presented today/9mo/18mo AI org charts tied to product milestones. Board approved two additional AI hires triggered by enterprise feature launch. Plan turned recruiting from debate into execution.",
        },
        {
          title: "Missing trigger — late MLOps",
          body: "18-month plan had no MLOps trigger. Second production model caused incident; emergency hire at premium. Updated plan: MLOps at 'second model in production'. Cheap lesson.",
        },
        {
          title: "Co-authored plan — retained lead",
          body: "AI lead co-wrote 18-month org plan including their own eventual platform manager hire. Lead stayed through Series B because path was visible. Transparency retained talent.",
        },
      ],
    }),
  ],
  quiz: [
    {
      q: "Five-person seed startup with one AI Engineer. Best default structure?",
      options: [
        "Embed AI engineer in each imaginary squad.",
        "Centralised AI function — one person serves all product needs.",
        "Build 10-person AI CoE immediately.",
        "Outsource all AI to agency permanently.",
      ],
      correct: 1,
      correctFeedback:
        "Right. At seed, centralised (often solo) AI is correct. Embedding and CoE are scale patterns.",
      wrongFeedback:
        "Match structure to headcount. Re-read sections 4.1 and 4.4.",
    },
    {
      q: "Product teams building shadow AI tools to bypass internal AI CoE ticket queue. Diagnosis?",
      options: [
        "Healthy innovation.",
        "CoE bottleneck — restructure toward platform enablement + embedded delivery.",
        "Fire product teams.",
        "Hire more CoE approvers.",
      ],
      correct: 1,
      correctFeedback:
        "Right. Shadow IT signals bottleneck CoE. Enable or embed — do not add approval layers.",
      wrongFeedback:
        "Bottleneck CoE gets routed around. Re-read section 4.2.",
    },
    {
      kind: "categorize",
      q: "Sort each practice into good AI/product interface or bad interface.",
      categories: ["Good interface", "Bad interface"],
      items: [
        { text: "Shared north star: task completion rate.", category: 0 },
        { text: "AI team measured only on offline accuracy.", category: 1 },
        { text: "AI engineer joins discovery before PRD lock.", category: 0 },
        { text: "PM writes AI spec without feasibility review.", category: 1 },
        { text: "Weekly joint eval review with PM and AI lead.", category: 0 },
        { text: "AI team has no customer contact ever.", category: 1 },
      ],
      correctFeedback:
        "Right. Good interface = shared metrics, early feasibility, rituals, user proximity.",
      wrongFeedback:
        "AI fails at product boundaries. Re-read section 4.3.",
    },
    {
      q: "Series B AI-native product company — AI creates core product value. Typical reporting line for Head of AI?",
      options: [
        "CMO — AI is marketing.",
        "CPO or CTO depending on product vs infrastructure centrality.",
        "CFO — AI is cost centre only.",
        "No reporting line — flat chaos.",
      ],
      correct: 1,
      correctFeedback:
        "Right. AI-native product often reports to CPO; infrastructure-heavy AI to CTO. Signal matches strategy.",
      wrongFeedback:
        "Reporting lines signal priorities. Re-read section 4.4.",
    },
    {
      kind: "order",
      q: "Order org evolution stages (earliest first).",
      prompt: "Drag to arrange typical AI org evolution (top = earliest).",
      items: [
        "Seed: 1–2 centralised AI builders reporting to CTO/CEO.",
        "Series A: add AI PM, 3–5 headcount, light platform standards.",
        "Series B: hybrid platform team + embedded engineers in squads.",
        "Mature: platform CoE enables; embedded teams deliver features.",
      ],
      correctFeedback:
        "Right. Centralise early, specialise and hybridise as product complexity grows.",
      wrongFeedback:
        "Do not jump to hybrid or CoE at seed. Re-read section 4.4.",
    },
    {
      q: "AI team demos 96% benchmark to board but feature has 9% user adoption. Founder-correct response?",
      options: [
        "Celebrate benchmark — hire more researchers.",
        "Investigate product fit and trust; embed engineers with PM; measure adoption not offline accuracy alone.",
        "Kill AI entirely.",
        "Ignore adoption — accuracy is what matters.",
      ],
      correct: 1,
      correctFeedback:
        "Right. Low adoption with high offline accuracy is ivory tower signal. Fix product interface and trust.",
      wrongFeedback:
        "Adoption reveals real value. Re-read section 4.6.",
    },
  ],
});
