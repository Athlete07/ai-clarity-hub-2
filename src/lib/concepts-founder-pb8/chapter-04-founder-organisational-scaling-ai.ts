import { buildChapter, buildSection, s, x, sectionWithDiagram } from "../concepts-pb4-helpers";

export const chapter04FounderOrganisationalScalingAi = buildChapter({
  slug: "founder-organisational-scaling-ai",
  number: 4,
  shortTitle: "Organisational Scaling",
  title: "Organisational Scaling Alongside Technical Scaling",
  readingMinutes: 24,
  summary:
    "Your company structure breaks at the same time your infrastructure does. AI team structures that work at 10 people fail at 50, cross-functional alignment fractures, and institutional knowledge walks out the door — unless you plan the org chart 18 months ahead.",
  keyTakeaway:
    "Technical scaling without organisational scaling produces incidents nobody owns, decisions nobody remembers, and hires you make six months too late. The founder's job is to anticipate structural breakpoints — centralised vs embedded AI, knowledge management, and the MLOps and governance roles that prevent fires.",
  pmCallout:
    "As a founder: your org chart is a scaling constraint as real as your GPU budget. Map the transition from centralised AI team to embedded engineers before product complexity forces it chaotically — and hire MLOps and data quality before the pipeline breaks, not after.",
  sections: [
    sectionWithDiagram({
      number: "4.1",
      title: "The AI team structure that works at 10 people and fails at 50",
      subtitle: "The organisational failure modes that accompany rapid AI product scaling",
      take: "At 10 people, a centralised AI team with direct founder access ships fast. At 50, the same structure creates bottlenecks, context loss, and misaligned priorities — unless you evolve structure deliberately.",
      why: "Org structure determines decision speed, quality ownership, and whether AI expertise reaches the product surface. Wrong structure at scale is as expensive as wrong architecture.",
      paragraphs: [
        [
          s("The 10-person pattern: centralised and fast. "),
          x(
            "One AI lead, two engineers, direct line to founder. Priorities are obvious. Context is shared implicitly. Shipping is fast because coordination cost is near zero.",
            "This pattern is optimal — temporarily.",
          ),
          s(" Founders who institutionalise the 10-person pattern at 50 people create a bottleneck disguised as a team."),
        ],
        [
          s("The 50-person failure modes. "),
          x(
            "Central AI team becomes a ticket queue. Product teams ship AI features without AI review. Duplicate model pipelines proliferate. Nobody owns production model health across products.",
            "Embedded engineers without standards create fragmentation. Centralised teams without embedding create disconnect.",
          ),
          s(" Both extremes fail. Scaling requires hybrid structure with clear rules."),
        ],
        [
          s("Breakpoint signals are predictable. "),
          x(
            "AI team request backlog exceeds two sprints. Product teams hire their own ML contractors. Model incidents have unclear ownership. Three teams rebuild the same retrieval stack.",
            "Any two signals mean org redesign is overdue — not optional.",
          ),
          s(" Redesign before crisis. Crisis-driven reorgs lose talent and momentum."),
        ],
      ],
      examples: [
        {
          title: "Spotify squad model — scaled autonomy with standards",
          body: "Spotify's squad structure balances embedded teams with platform standards. AI-native startups need analogous thinking: embedded product ownership plus shared AI platform primitives. Founders should define what is centralised (eval, monitoring, security) vs embedded (product-specific models).",
        },
        {
          title: "Ticket-queue AI team — 6-week backlog",
          body: "A 45-person startup's central AI team had a six-week request backlog. Product teams shipped prompt changes without review. Three production incidents in one month had no clear owner. The founder split the team: platform squad plus embedded liaisons. Backlog cleared in two sprints.",
        },
        {
          title: "Duplicate RAG stacks — fragmentation cost",
          body: "Three product teams each built retrieval pipelines with different vector DBs and eval methods. Total cost 2.4x a shared platform. The founder mandated a shared retrieval service with team-specific configs. Fragmentation was an org failure, not an engineering preference.",
        },
      ],
    }, {
      kind: "diagram",
      id: "founder-scaling-inflection",
      type: "flow",
      title: "Scaling Inflection Points",
      caption:
        "Cost and architecture choices compound at each order-of-magnitude in usage.",
    }),
    sectionWithDiagram({
      number: "4.2",
      title: "When to move from a centralised AI team to embedded AI engineers",
      subtitle: "The product complexity threshold that forces org structure change",
      take: "Move toward embedded AI engineers when you have multiple distinct AI product surfaces, domain-specific model requirements, and a central team that cannot maintain context on every product line. Keep central platform for shared infrastructure, standards, and governance.",
      why: "Embedding too early fragments standards. Embedding too late starves products. The threshold is product complexity and incident patterns — not headcount alone.",
      paragraphs: [
        [
          s("Embed when product domains diverge. "),
          x(
            "One AI feature: centralise. Three AI surfaces with different data domains, quality bars, and release cadences: embed with platform support.",
            "Legal doc AI and sales email AI should not share one product-agnostic engineer at scale.",
          ),
          s(" Domain depth requires embedded ownership — platform provides rails, not rides."),
        ],
        [
          s("Keep central what must be consistent. "),
          x(
            "Model registry, eval frameworks, monitoring stack, security review, cost dashboards, and vendor relationships stay central.",
            "Embedded engineers consume platform primitives — they do not rebuild them per team.",
          ),
          s(" Draw the line explicitly. Ambiguity produces either duplication or bottleneck."),
        ],
        [
          s("Transition in phases, not overnight. "),
          x(
            "Phase 1: embed liaisons while keeping central delivery. Phase 2: split ownership by product line. Phase 3: platform team becomes internal vendor with SLAs.",
            "Sudden reorgs destroy morale. Phased transitions with communicated rationale retain talent.",
          ),
          s(" Tell the team why before reorganising them."),
        ],
      ],
      examples: [
        {
          title: "Stripe embedded specialists — domain ownership",
          body: "At scale, Stripe embeds domain specialists in product areas while maintaining platform infrastructure. Founders approaching 40–50 people should study which AI capabilities are product-specific vs company-wide.",
        },
        {
          title: "Phased embed — liaison model",
          body: "A 35-person AI startup assigned one AI engineer as liaison per product squad while central platform matured. Six months later, full embed with platform SLAs. Incident ownership clarity improved before structural change completed.",
        },
        {
          title: "Embed too early — three incompatible eval standards",
          body: "A 18-person company embedded AI engineers before platform eval existed. Each team measured quality differently. Board could not compare product lines. The founder recentralised eval and monitoring, then re-embedded. Sequence mattered.",
        },
      ],
    }, {
      kind: "diagram",
      id: "founder-eval-framework",
      type: "flow",
      title: "Evaluation Framework",
      caption:
        "Define task → golden set → ship gate → monitor drift.",
    }),
    buildSection({
      number: "4.3",
      title: "Cross-functional alignment at scale",
      subtitle: "How product, engineering, data, and AI teams stop talking to each other — and how to fix it",
      take: "Cross-functional misalignment at scale manifests as: product ships AI features without quality review, engineering optimises latency while product optimises capability, data teams lack visibility into model training needs, and nobody owns the end-to-end user outcome.",
      why: "AI products sit at the intersection of product, engineering, data, and ML. Silos produce incidents at the seams. Alignment mechanisms are founder-installed, not emergent.",
      paragraphs: [
        [
          s("Shared metrics create shared language. "),
          x(
            "Product, engineering, and AI should all review the same weekly dashboard: override rate, task completion, latency, cost per task.",
            "Different metrics produce different optimisations and conflicting releases.",
          ),
          s(" One dashboard, one meeting, one definition of success."),
        ],
        [
          s("AI feature launch checklist crosses functions. "),
          x(
            "Product: outcome definition and success metric. AI: eval and monitoring plan. Engineering: latency and cost budget. Data: pipeline and labelling readiness. Legal/compliance: risk classification.",
            "No function signs off alone on production AI launches.",
          ),
          s(" Checklists feel bureaucratic until they prevent a liability incident."),
        ],
        [
          s("Rotating cross-functional incident review builds empathy. "),
          x(
            "Monthly joint review of top failure clusters — product hears engineering constraints, AI hears user pain, data hears labelling gaps.",
            "Silos break when teams see the same failure from different angles.",
          ),
          s(" Founders facilitate the first three sessions. Then teams run them without you."),
        ],
      ],
      examples: [
        {
          title: "Amazon working backwards — shared outcome focus",
          body: "Amazon's working-backwards PR/FAQ process aligns cross-functional teams on customer outcome before build. Founders scaling AI products should adopt similar pre-launch alignment — especially for features with quality and liability implications.",
        },
        {
          title: "Launch checklist prevented compliance gap",
          body: "A product team prepared an AI feature launch. Checklist blocked release: legal had not classified risk tier, monitoring was undefined. Two-week delay. Post-launch zero compliance flags. The checklist was credited in the board deck.",
        },
        {
          title: "Metric mismatch — latency vs capability war",
          body: "Product pushed richer model responses. Engineering enforced latency SLO. Teams optimised against each other for two months. Shared dashboard with cost-per-task and p95 latency aligned tradeoffs in one meeting. Shared metrics ended the war.",
        },
      ],
    }),
    buildSection({
      number: "4.4",
      title: "Knowledge management for AI teams",
      subtitle: "How to preserve institutional knowledge about model decisions as the team grows",
      take: "Model decisions, prompt versions, eval results, incident post-mortems, and routing rationale must be documented and discoverable — or they leave when employees leave and repeat when new hires arrive.",
      why: "AI systems are opinionated artefacts. Without knowledge management, your company forgets why the model behaves the way it does — and re-learns through production incidents.",
      paragraphs: [
        [
          s("Model cards and decision logs are minimum viable memory. "),
          x(
            "Every production model: version, training data summary, eval results, known limitations, owner, last audit date.",
            "Every significant decision: why this model tier, why this routing threshold, why this escalation policy.",
          ),
          s(" If it is not written down, it does not exist when the author leaves."),
        ],
        [
          s("Prompt and config versioning is not optional. "),
          x(
            "Prompts are code. Store in git, review in PRs, tag with releases. 'The prompt in someone's notebook' is a bus factor of one.",
            "Link prompt versions to model performance metrics for rollback forensics.",
          ),
          s(" Founders should be able to answer 'what changed before the regression?' in ten minutes."),
        ],
        [
          s("Post-mortems are institutional investments. "),
          x(
            "Blameless post-mortems with action items, owners, and deadlines. Searchable archive. Quarterly review of recurring themes.",
            "Teams that do not read past post-mortems repeat past incidents.",
          ),
          s(" Assign someone to maintain the incident archive — curation beats volume."),
        ],
      ],
      examples: [
        {
          title: "Google ML best practices — documentation culture",
          body: "Google's ML engineering culture emphasises model documentation, reproducibility, and post-mortem discipline. Startups need lighter-weight versions of the same habits from the first production model — not after the first departure.",
        },
        {
          title: "Departure amnesia — routing threshold mystery",
          body: "A senior ML engineer left without documenting routing thresholds. New hire changed a threshold, causing enterprise override spike. Forensics took two weeks. Prompt and config git history plus decision log would have cut it to hours.",
        },
        {
          title: "Post-mortem archive — repeated incident prevented",
          body: "A team searched the incident archive before launching a retrieval change. A similar change had caused latency regression 14 months prior. They adopted the documented mitigation. Archive search took 20 minutes. Incident prevented.",
        },
      ],
    }),
    buildSection({
      number: "4.5",
      title: "Hiring ahead of scale — the AI roles to fill before you need them",
      subtitle: "MLOps, data quality, AI governance — the hires that prevent the fires",
      take: "Hire ahead of breakpoints: MLOps or platform engineer before pipeline incidents, data quality owner before labelling scale breaks, AI governance before enterprise sales require it, and technical program management when cross-functional coordination exceeds founder capacity.",
      why: "Reactive hiring is six months late. The incident happens at month two; the hire starts at month eight. Ahead-of-scale hiring is insurance with ROI.",
      paragraphs: [
        [
          s("MLOps/platform before the second production model. "),
          x(
            "One model in production can be artisanal. Three models without registry, monitoring, and deployment automation is chaos.",
            "MLOps hire trigger: second model entering production or first rollback that took more than four hours.",
          ),
          s(" Platform engineers multiply AI team output — they are force multipliers, not overhead."),
        ],
        [
          s("Data quality before labelling exceeds manual review. "),
          x(
            "When monthly ingested examples exceed what one person can spot-check, hire data quality ownership — process, tooling, contractor management.",
            "Bad data at scale is a scaling tax on every future model.",
          ),
          s(" This hire protects the feedback loop — your moat infrastructure."),
        ],
        [
          s("Governance before enterprise, not after RFP. "),
          x(
            "Enterprise customers ask for model cards, audit trails, and incident response. A governance hire — even fractional — prepares artefacts before sales needs them.",
            "Governance as sales enablement changes the hiring calculus.",
          ),
          s(" First enterprise deal is too late to start governance from zero."),
        ],
      ],
      examples: [
        {
          title: "Databricks — platform investment early",
          body: "Companies that win at AI scale invest in platform and MLOps early. Databricks built on the insight that data and ML infrastructure must scale together. Founders should hire platform capacity when complexity trends upward — not when incidents force it.",
        },
        {
          title: "MLOps hire — rollback from 6 hours to 12 minutes",
          body: "A startup's first MLOps engineer shipped model registry, canary deploys, and one-click rollback. Mean rollback time dropped from 6 hours to 12 minutes. The hire paid for itself in the first incident avoided.",
        },
        {
          title: "Governance hire unlocked enterprise tier",
          body: "A fractional AI governance lead produced model cards, incident response playbook, and bias testing documentation in six weeks. Enterprise pipeline accelerated — security review cycle cut from 8 weeks to 3. Governance was revenue infrastructure.",
        },
      ],
    }),
    buildSection({
      number: "4.6",
      title: "Founder decision lens: the organisational scaling plan",
      subtitle: "The 18-month org chart that anticipates the structural changes your growth will force",
      take: "Build an 18-month organisational scaling plan: current structure, predicted breakpoints (headcount, product lines, enterprise motion), planned transitions (embed, platform team, governance), and hire timeline with triggers — reviewed quarterly.",
      why: "The plan is how founders turn org design from reactive firefighting into strategic anticipation. Boards and leadership teams align on structural investments before breakpoints hit.",
      paragraphs: [
        [
          s("Map breakpoints to growth milestones. "),
          x(
            "Example: at 30 people, embed AI liaisons. At 50, platform team with SLAs. At first enterprise deal, governance hire. At three AI product surfaces, full embed with shared eval.",
            "Triggers should be observable — backlog depth, incident ownership gaps, sales motion change.",
          ),
          s(" Milestones beat calendar guesses. 'When we feel big' is not a trigger."),
        ],
        [
          s("Include talent retention in the plan. "),
          x(
            "Reorgs without career paths lose senior people. Show embedded engineers platform influence. Show platform engineers product impact.",
            "Scaling plans that only draw boxes lose the people in the boxes.",
          ),
          s(" Discuss the plan with leads before announcing — retention starts in private conversations."),
        ],
        [
          s("Review quarterly against actuals. "),
          x(
            "Did we hit breakpoints early or late? Did hires land on time? Did incidents reveal plan gaps?",
            "Update the plan — it is a living document, not a Series A deck artifact.",
          ),
          s(" Present org scaling progress to the board alongside technical scaling metrics."),
        ],
      ],
      examples: [
        {
          title: "18-month plan — board alignment",
          body: "A founder presented an 18-month org plan with triggers and hire timeline alongside infrastructure cost projections. Board approved headcount budget proactively. When the company hit 42 people six months early, triggers fired and hires were already approved. Planning prevented panic.",
        },
        {
          title: "Early breakpoint — backlog trigger",
          body: "AI request backlog hit three sprints at 28 people — plan trigger was 30. Founder accelerated embed transition by one quarter. Incidents that peers experienced at 50 never materialised. Early trigger response was cheaper than late crisis reorg.",
        },
        {
          title: "Plan gap — TPM hire missed",
          body: "Cross-functional coordination broke at 55 people because TPM hire was deferred. Founder added TPM to plan with explicit trigger: 'more than two cross-team AI launches per month.' Lesson: coordination roles are scaling infrastructure too.",
        },
      ],
    }),
  ],
  quiz: [
    {
      q: "What is the central AI team failure mode at ~50 people?",
      options: [
        "Too much innovation.",
        "Becoming a ticket queue while product teams ship AI without standards or ownership.",
        "Excessive documentation.",
        "Too many embedded engineers.",
      ],
      correct: 1,
      correctFeedback:
        "Right. Centralised teams at scale become bottlenecks; fragmentation follows without platform standards.",
      wrongFeedback:
        "Re-read section 4.1 on org failure modes at scale.",
    },
    {
      q: "When should founders move toward embedded AI engineers?",
      options: [
        "At company formation.",
        "When multiple distinct AI product surfaces with different domains exceed central team context capacity.",
        "Never — always keep AI centralised.",
        "Only after IPO.",
      ],
      correct: 1,
      correctFeedback:
        "Exactly. Embed on product complexity, keep platform central. Re-read section 4.2.",
      wrongFeedback:
        "Embedding too early fragments; too late starves products. Re-read section 4.2.",
    },
    {
      kind: "categorize",
      q: "Sort each capability into centralised vs embedded ownership.",
      categories: ["Keep central", "Embed in product teams"],
      items: [
        { text: "Model registry and monitoring stack.", category: 0 },
        { text: "Domain-specific fine-tuning for legal vs sales products.", category: 1 },
        { text: "Vendor relationships and cost dashboards.", category: 0 },
        { text: "Product-line-specific eval and quality targets.", category: 1 },
        { text: "Security review and compliance standards.", category: 0 },
        { text: "Feature-specific prompt and routing optimisation.", category: 1 },
      ],
      correctFeedback:
        "Right. Platform primitives centralise; domain product work embeds. Re-read sections 4.1 and 4.2.",
      wrongFeedback:
        "Centralise standards and shared infra; embed domain ownership. Re-read sections 4.1–4.2.",
    },
    {
      q: "What cross-functional mechanism best prevents siloed optimisation?",
      options: [
        "Separate metrics per team.",
        "Shared weekly dashboard and joint review of override rate, completion, latency, and cost per task.",
        "AI team reports only to founder.",
        "Eliminating product managers.",
      ],
      correct: 1,
      correctFeedback:
        "Right. Shared metrics create shared language and aligned tradeoffs.",
      wrongFeedback:
        "Re-read section 4.3 on cross-functional alignment.",
    },
    {
      kind: "order",
      q: "Order the proactive hiring sequence for scaling AI companies.",
      prompt: "Drag to arrange earliest hire trigger (top) to later specialist (bottom).",
      items: [
        "MLOps/platform before second production model.",
        "Data quality owner before labelling exceeds manual review.",
        "Governance lead before enterprise sales motion.",
        "TPM when cross-team AI launches exceed coordination capacity.",
      ],
      correctFeedback:
        "Exactly. Platform, data quality, governance, then coordination — hire ahead of breakpoints. Re-read section 4.5.",
      wrongFeedback:
        "Re-read section 4.5 on hiring ahead of scale.",
    },
    {
      q: "What should an 18-month organisational scaling plan include?",
      options: [
        "Only current headcount.",
        "Breakpoints, planned structure transitions, hire triggers, and quarterly review against actuals.",
        "A fixed org chart that never changes.",
        "Only engineering roles.",
      ],
      correct: 1,
      correctFeedback:
        "Right. Anticipate breakpoints with triggers and review quarterly. Re-read section 4.6.",
      wrongFeedback:
        "Re-read section 4.6 on the founder organisational scaling plan.",
    },
  ],
});
