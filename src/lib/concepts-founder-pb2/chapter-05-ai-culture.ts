import { buildChapter, buildSection, s, x, sectionWithDiagram } from "../concepts-pb4-helpers";

export const chapter05AiCulture = buildChapter({
  slug: "founder-ai-culture",
  number: 5,
  shortTitle: "AI Culture",
  title: "AI Culture — What It Actually Takes to Build This Way",
  readingMinutes: 22,
  summary:
    "The organisational operating system underneath AI-native architecture: experimentation, failure tolerance, data literacy, speed vs safety calibration, and avoiding performative AI-nativity as you scale past 20 people.",
  keyTakeaway:
    "AI culture is not an AI committee or values slide — it is experimentation with eval gates, org-wide data literacy, honest failure tolerance, and norms set at ten people that cannot be retrofitted at a hundred.",
  pmCallout:
    "As a founder: culture is where architecture goes to die or compound. If your team performs AI-nativity in all-hands but ships without eval, your culture is washed — and your best engineers will leave for places that mean it.",
  sections: [
    buildSection({
      number: "5.1",
      title: "What AI culture is not",
      subtitle: "Talking about AI constantly, having an AI committee, and adding AI to your company values",
      take: "Performative AI culture is all-hands demos, innovation committees, and values posters without eval discipline, loop ownership, or failure postmortems. Real AI culture is operational: how decisions get made when the model is wrong, how experiments ship, and how data is read across functions.",
      why: "Engineers and investors detect theatre quickly. Culture washing erodes trust faster than product delays — top AI talent leaves for teams that ship loops, not slides.",
      paragraphs: [
        [
          s("AI committees without ship authority produce slide decks, not models. "),
          x(
            "Monthly 'AI sync' with no eval gates, no loop metrics, and no budget is governance theatre.",
            "Real culture embeds AI quality in product reviews the same way performance is reviewed.",
          ),
          s(" Dissolve committees that do not own metrics."),
        ],
        [
          s("Values language without behaviour is employer brand debt. "),
          x(
            "'AI-first' on the wall while punishing failed experiments teaches risk aversion.",
            "Culture is what happens when inference fails in production — not what the CEO says at offsite.",
          ),
          s(" Define three observable behaviours, not ten adjectives."),
        ],
        [
          s("The tell: can a PM explain override rate and last retrain date? "),
          x(
            "If only ML team knows AI health, culture is siloed — not native.",
            "Cross-functional fluency distinguishes culture from branding.",
          ),
          s(" Test culture with questions, not slogans."),
        ],
      ],
      examples: [
        {
          title: "AI innovation lab — zero production impact",
          body: "Fortune 500 created AI lab with PhDs; two years, no production model. Startup competitor shipped loop in six months. Lab culture without product accountability is expensive theatre.",
        },
        {
          title: "Values poster vs eval gate",
          body: "Company added 'AI excellence' to values but skipped eval on launch. Incident forced eval CI — culture shifted when behaviour changed, not when poster shipped.",
        },
        {
          title: "All-hands demo-only culture",
          body: "Weekly CEO demos of cherry-picked prompts; eng knew production failure rate. Two senior engineers left for competitor with public eval dashboard. Honesty beat hype.",
        },
      ],
    }),
    sectionWithDiagram({
      number: "5.2",
      title: "Experimentation as a core operating principle",
      subtitle: "Why AI-native companies ship experiments, not features, and what that means for your process",
      take: "AI products require hypothesis-driven experiments: model A vs B, prompt variants, retrieval configs — each with eval criteria and rollback. Shipping 'the AI feature' as a one-time launch without experiment infrastructure is waterfall in a probabilistic domain.",
      why: "Deterministic software culture kills AI velocity. Founders must institutionalize experiment cadence — or engineers hide changes in hotfixes.",
      paragraphs: [
        [
          s("Every AI change is an experiment until online metrics confirm. "),
          x(
            "Offline eval, shadow traffic, A/B, canary — pick minimum viable experiment for risk tier.",
            "Feature flags for models and prompts are as essential as feature flags for UI.",
          ),
          s(" Roadmaps list hypotheses and success metrics — not just deliverables."),
        ],
        [
          s("Experiment velocity is a company KPI, not ML team hobby. "),
          x(
            "Target: N meaningful experiments per month with documented learnings.",
            "Failed experiments with writeups are success — they prevent repeat waste.",
          ),
          s(" Celebrate learning speed, not demo polish."),
        ],
        [
          s("Product process adapts: discovery includes eval baseline, delivery includes promotion criteria. "),
          x(
            "PRD template adds: eval set, regression threshold, rollback owner.",
            "Sprint review shows metric delta, not only screenshots.",
          ),
          s(" Non-AI features keep simpler process — do not over-process deterministic work."),
        ],
      ],
      examples: [
        {
          title: "Booking.com — experiment culture origin",
          body: "Booking ran thousands of experiments — AI-native companies extend this to model and prompt variants. Founders should budget experiment infrastructure like analytics.",
        },
        {
          title: "Prompt A/B — 8% completion lift",
          body: "Team ran weekly prompt experiments with 500-case eval plus 5% live A/B. Small variant drove 8% task completion lift. Experiment cadence compounded without hero launches.",
        },
        {
          title: "Big bang launch — rollback nightmare",
          body: "Single launch of new model without canary; CSAT crashed 48 hours. Culture changed to mandatory experiment gate — CEO enforced in product review.",
        },
      ],
    }, {
      kind: "diagram",
      id: "bl-change-management",
      type: "flow",
      title: "Building AI Culture",
      caption:
        "Sponsor → communicate honestly → train → empower champions → measure adoption. Culture is how strategy becomes behaviour.",
    }),
    sectionWithDiagram({
      number: "5.3",
      title: "Failure tolerance in AI development",
      subtitle: "Why 80% of AI experiments fail and how to build an org that is okay with that",
      take: "Most model and prompt experiments will not beat baseline — that is the nature of probabilistic systems. Culture must reward well-designed failures with fast kill decisions, not punish teams for negative results. Failure intolerance produces prompt hiding, metric gaming, and no innovation.",
      why: "If the first failed experiment costs someone their review, you get one safe prompt forever. AI-native companies need failure budgets like financial risk budgets.",
      paragraphs: [
        [
          s("Define failure as 'hypothesis tested with clear negative result' — not 'mistake'. "),
          x(
            "Postmortem: what we tried, eval outcome, what we learned, what we kill.",
            "Blameless culture applies to experiments; not to shipping without eval.",
          ),
          s(" Distinguish negligent failure (no eval) from honest negative experiment."),
        ],
        [
          s("Failure budget: percent of eng capacity on exploratory work with explicit kill criteria. "),
          x(
            "10–20% at seed is reasonable — with weekly review of continue/kill.",
            "Zero exploratory budget means zero compounding advantage over time.",
          ),
          s(" CEO protects budget when quarter pressure hits — or loop stalls."),
        ],
        [
          s("Publicize failures to prevent duplicate work. "),
          x(
            "Internal experiment registry: tried X, did not work because Y.",
            "Teams repeat failed paths when learnings stay siloed.",
          ),
          s(" Failure log is IP — prevents wasted runway."),
        ],
      ],
      examples: [
        {
          title: "Fine-tune failure — documented and killed",
          body: "Team fine-tuned on 10K examples — offline up, online flat. Postmortem in wiki; killed path. Another team avoided same approach — saved six weeks. Failure tolerance with documentation.",
        },
        {
          title: "Zero failure tolerance — prompt stagnation",
          body: "Eng lead punished for A/B regression; team stopped experimenting. Override rate climbed from drift while prompts frozen. Culture fix required CEO messaging on failure budget.",
        },
        {
          title: "Amazon — institutionalized failure",
          body: "Amazon's experiment culture extends to AI teams at scale. Founders at seed can copy mechanism: written kill criteria before experiment starts.",
        },
      ],
    }, {
      kind: "diagram",
      id: "ch2-data-flywheel",
      type: "flow",
      title: "The Data Flywheel",
      caption:
        "Usage → signal → better model → better product → more usage.",
    }),
    buildSection({
      number: "5.4",
      title: "Data literacy across the company",
      subtitle: "Why every function — not just engineering — needs to understand what the data is saying",
      take: "AI-native culture requires sales, support, product, and finance to read loop metrics — override rate, task completion, signal volume — not just MRR. Data literacy means asking 'what label does this generate?' in every customer conversation and product decision.",
      why: "When only ML understands the model, product ships features that poison the loop and sales promises capabilities eval disproves. Cross-functional literacy prevents organizational self-sabotage.",
      paragraphs: [
        [
          s("Support is a labelling org in disguise. "),
          x(
            "Ticket categories, escalation reasons, and correction patterns are training signal — if captured.",
            "Support scripts should feed structured feedback, not just resolve tickets.",
          ),
          s(" Train support on override logging as strategic work."),
        ],
        [
          s("Sales must know eval boundaries — what the model reliably does today. "),
          x(
            "Overselling creates bad labels when customers force edge cases.",
            "Demo script tied to eval pass cases — honesty wins enterprise renewals.",
          ),
          s(" Weekly sync: sales objections → eval gap list."),
        ],
        [
          s("Finance models inference COGS and loop ROI — not only seat revenue. "),
          x(
            "CFO who understands cost per successful task catches margin death early.",
            "Board packages include AI metrics beside financials.",
          ),
          s(" Monthly 'data standup' — 15 minutes, all functions, three metrics."),
        ],
      ],
      examples: [
        {
          title: "Support-driven eval gaps",
          body: "Support lead flagged top five escalation themes monthly — became eval cases within week. Task completion rose 9%. Data literacy turned tickets into product input.",
        },
        {
          title: "Sales oversell — label pollution",
          body: "Sales promised AI handled complex contracts; customers fed unsuitable docs — noisy negative labels. CEO aligned sales script to eval pass set. Quality recovered.",
        },
        {
          title: "Finance caught COGS creep",
          body: "CFO tracked cost per resolution weekly; flagged 22% rise before board meeting. Triggered model routing project. Data literacy in finance saved margin story.",
        },
      ],
    }),
    buildSection({
      number: "5.5",
      title: "Speed vs safety in AI culture",
      subtitle: "The tension every AI company lives inside and how to calibrate it deliberately",
      take: "AI culture must calibrate speed and safety by risk tier — consumer writing assist moves fast with eval; medical, hiring, and credit move slow with human review and audit trails. Undifferentiated 'move fast' or 'move safe' both fail. Document tier per use case.",
      why: "Regulators, enterprise buyers, and your own liability surface depend on calibration. Culture without explicit tiers produces either reckless shipping or paralysis.",
      paragraphs: [
        [
          s("Risk tiering drives process weight — not company-wide dogma. "),
          x(
            "Low risk: automated eval plus fast deploy. High risk: human review plus legal sign-off plus extended shadow.",
            "Same company can have both tiers in different products.",
          ),
          s(" Publish tier definitions — eng and legal align on one page."),
        ],
        [
          s("Safety includes quality, bias, and hallucination — not only compliance. "),
          x(
            "Override rate and disparate impact metrics belong in release gates.",
            "Speed without quality metrics is recklessness; safety without metrics is fear.",
          ),
          s(" Red team quarterly on high-tier surfaces."),
        ],
        [
          s("Founders model calibration in public decisions. "),
          x(
            "Killing a launch despite demo readiness teaches culture more than values.",
            "Shipping without eval on high-tier teaches opposite — regardless of speech.",
          ),
          s(" Calibration is CEO behaviour visible to org."),
        ],
      ],
      examples: [
        {
          title: "Klarna — speed with rules boundary",
          body: "Klarna moved fast on conversational AI but kept refund logic in rules. Tiered speed/safety by workflow risk. Founders should copy explicit boundaries, not blanket speed.",
        },
        {
          title: "Hiring AI — paused for bias eval",
          body: "HR tech startup delayed launch six weeks for disparate impact analysis. Lost short-term revenue; won enterprise contract requiring audit trail. Calibration matched risk.",
        },
        {
          title: "Consumer app — fast tier documented",
          body: "Writing assist documented tier-1: automated eval, 24-hour rollback, no PII in training. Shipped weekly experiments. High-tier legal product on separate slower track — same company.",
        },
      ],
    }),
    buildSection({
      number: "5.6",
      title: "Avoiding AI washing your own culture",
      subtitle: "The signs that your team is performing AI-nativity rather than practicing it",
      take: "Culture washing signs: demos never match production, ML metrics absent from leadership meetings, 'AI' in every press release but no loop owner, hiring researchers before eval exists, punishing experiment failure while claiming innovation. Self-audit quarterly.",
      why: "Internal culture washing loses engineers before external washing loses investors. The best AI talent joins teams that measure, not perform.",
      paragraphs: [
        [
          s("Demo-production gap is the cardinal sin. "),
          x(
            "If sales demos use different prompts/models than production, culture rewards deception.",
            "Same eval set for demo and prod — or demo labelled 'representative sample'.",
          ),
          s(" CEO watches production trace, not only staged demo."),
        ],
        [
          s("Headcount theatre: researchers and 'AI leads' without pipeline. "),
          x(
            "PhDs publishing while product static is culture washing for fundraising.",
            "Headcount aligned to loop stage — platform when loop flows.",
          ),
          s(" Right-size AI team to architectural maturity."),
        ],
        [
          s("Language drift: everything becomes 'AI' internally. "),
          x(
            "Rules engine rebranded 'AI' confuses team on what requires eval.",
            "Precise terminology inside company mirrors external honesty.",
          ),
          s(" Internal tier audit same as external — native, powered, washed."),
        ],
      ],
      examples: [
        {
          title: "Demo prompt leak",
          body: "Sales used hidden demo prompt; customers got worse production experience. Churn followed. CEO mandated single production config for demos — culture aligned to truth.",
        },
        {
          title: "Research hire before eval",
          body: "Company hired research scientist at seed; no labels, no eval. Scientist left in 7 months. Replaced with AI product engineer owning loop — culture matched stage.",
        },
        {
          title: "Quarterly culture audit",
          body: "Leadership scores five washing signs 1–5 quarterly. Score worsened on demo gap; fixed in same quarter. Audit prevents slow drift to theatre.",
        },
      ],
    }),
    buildSection({
      number: "5.7",
      title: "Founder decision lens",
      subtitle: "The three cultural decisions to make explicit before you scale past 20 people",
      take: "Document three norms before headcount 20: (1) experiment and failure protocol — eval required, blameless postmortems, failure budget; (2) data literacy cadence — who sees which metrics weekly; (3) speed/safety tiers by product risk with release gates. Norms set at ten stick; at a hundred you inherit whatever accreted.",
      why: "Culture retrofit at Series B costs attrition and rewrites. Three explicit decisions take one leadership offsite — cheaper than re-hiring half the AI team.",
      paragraphs: [
        [
          s("Decision one: experiment protocol in writing. "),
          x(
            "PRD fields, eval threshold, rollback owner, experiment registry location.",
            "New hires read on day one — not oral tradition.",
          ),
          s(" CEO enforces in first product review after document ships."),
        ],
        [
          s("Decision two: metrics visibility map. "),
          x(
            "Support sees override themes; sales sees eval pass set; finance sees COGS per task.",
            "15-minute weekly cross-functional metrics standup.",
          ),
          s(" Opacity is not humility — it is loop death."),
        ],
        [
          s("Decision three: risk tiers and release gates. "),
          x(
            "Tier definitions co-signed by CEO, eng lead, and counsel.",
            "Review tiers at 2x headcount and new product lines.",
          ),
          s(" Share with board as culture infrastructure — not HR fluff."),
        ],
      ],
      examples: [
        {
          title: "Offsite at 12 people — three norms",
          body: "Founders documented experiment protocol, metrics map, and risk tiers at 12 headcount. Scaled to 45 with same norms — no culture retrofit. New managers onboard from doc.",
        },
        {
          title: "Waited until 60 — painful retrofit",
          body: "Company skipped explicit norms; at 60 people eng and product fought on eval gates. Three-month culture project plus attrition. Three decisions at 20 would have prevented.",
        },
        {
          title: "Board culture report",
          body: "CEO quarterly board slide: experiment count, failure postmortems, override trend, tier violations. Investors cited operational maturity — culture as diligence asset.",
        },
      ],
    }),
  ],
  quiz: [
    {
      q: "Which is the strongest signal of performative AI culture?",
      options: [
        "Weekly cross-functional review of override rate and retrain cadence.",
        "Monthly AI innovation committee with no loop metrics or ship authority.",
        "Blameless postmortems on failed prompt experiments.",
        "PRD template requiring eval threshold before launch.",
      ],
      correct: 1,
      correctFeedback:
        "Right. Committees without metrics and authority are theatre. Re-read section 5.1.",
      wrongFeedback:
        "Real culture is operational — metrics, eval, ownership. Re-read section 5.1.",
    },
    {
      kind: "categorize",
      q: "Sort each practice as healthy AI culture vs culture washing.",
      categories: ["Healthy AI culture", "Culture washing"],
      items: [
        { text: "Mandatory eval gate before any model or prompt promotion.", category: 0 },
        { text: "Sales demos use secret prompts that differ from production.", category: 1 },
        { text: "Internal registry of failed experiments with learnings.", category: 0 },
        { text: "'AI-first' values poster without behaviour change.", category: 1 },
        { text: "Support escalations feed structured eval cases weekly.", category: 0 },
        { text: "Hiring research PhDs before any labels or eval exist.", category: 1 },
      ],
      correctFeedback:
        "Right. Healthy culture measures, experiments, and learns; washing performs without operational discipline.",
      wrongFeedback:
        "Culture is behaviour — eval, honesty, loop metrics. Re-read sections 5.1 and 5.6.",
    },
    {
      q: "Why should finance participate in AI data literacy?",
      options: [
        "Finance should write prompts.",
        "Cost per successful task and inference COGS trends catch margin issues before they break unit economics.",
        "Finance replaces ML team.",
        "Investors do not care about COGS.",
      ],
      correct: 1,
      correctFeedback:
        "Right. Data literacy includes financial metrics on AI COGS and loop ROI. Re-read section 5.4.",
      wrongFeedback:
        "Cross-functional literacy includes finance on inference economics. Re-read section 5.4.",
    },
    {
      kind: "order",
      q: "Order the three cultural decisions to document before scaling past 20 people.",
      prompt: "Drag to arrange (top = first to document).",
      items: [
        "Experiment and failure protocol — eval required, postmortems, failure budget.",
        "Data literacy cadence — who sees which AI metrics weekly.",
        "Speed vs safety tiers by product risk with release gates.",
      ],
      correctFeedback:
        "Right. Experiment norms → metric visibility → risk calibration. Re-read section 5.7.",
      wrongFeedback:
        "Document experiment protocol, metrics map, and risk tiers before scale. Re-read section 5.7.",
    },
    {
      q: "80% of AI experiments fail to beat baseline. What should the org do?",
      options: [
        "Stop experimenting to avoid failure.",
        "Treat well-measured negative results as success — kill fast, document learnings, maintain failure budget.",
        "Hide failures from leadership.",
        "Punish teams for negative A/B results.",
      ],
      correct: 1,
      correctFeedback:
        "Right. Failure tolerance with discipline — eval, kill, learn — enables compounding. Re-read section 5.3.",
      wrongFeedback:
        "AI requires experiment culture with blameless negative results. Re-read section 5.3.",
    },
    {
      kind: "order",
      q: "Order risk-tier release process from low-risk to high-risk AI features.",
      prompt: "Drag to arrange (top = lightest process).",
      items: [
        "Automated eval plus fast deploy with rollback.",
        "Shadow traffic plus canary before full promotion.",
        "Human review plus legal sign-off plus extended audit trail.",
      ],
      correctFeedback:
        "Right. Calibrate speed/safety by tier — not one-size-fits-all. Re-read section 5.5.",
      wrongFeedback:
        "Low risk moves fast with eval; high risk adds human and legal gates. Re-read section 5.5.",
    },
  ],
});
