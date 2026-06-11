import { buildChapter, buildSection, s, x, sectionWithDiagram } from "../concepts-pb4-helpers";

export const chapter02FounderApiDependencyRisk = buildChapter({
  slug: "founder-api-dependency-risk",
  number: 2,
  shortTitle: "API Dependency Risk",
  title: "API Dependency — The Strategic Risk You Are Probably Underweighting",
  readingMinutes: 24,
  summary:
    "Every AI startup building on third-party APIs rents its core capability. Price increases, deprecations, terms changes, and vendors becoming competitors — mapped with exit architecture and a dependency risk register.",
  keyTakeaway:
    "API dependency is not a technical detail — it is a balance-sheet risk. Model your vendor scenarios at 3× pricing, architect for portability from day one, and maintain a scored risk register your board reviews quarterly.",
  pmCallout:
    "As a founder: if a single vendor pricing email could wipe out your gross margin, you do not have a product strategy — you have a vendor subsidy strategy. Map dependencies before investors map them for you in diligence.",
  sections: [
    sectionWithDiagram({
      number: "2.1",
      title: "What API dependency actually means for your business",
      subtitle: "You do not own the capability. You rent it. Here is what that means.",
      take: "API dependency means your core product capability runs on infrastructure you do not control — pricing, availability, model behaviour, terms of use, and roadmap are vendor decisions. You own integration, UX, and customer relationships. You rent intelligence.",
      why: "Founders describe themselves as AI companies while operating as thin wrappers on rented models. Investors and boards increasingly treat API dependency as counterparty risk — same category as single-supplier manufacturing.",
      paragraphs: [
        [
          s("Dependency depth has three levels — know which one you are. "),
          x(
            "Level 1: occasional API calls for non-core features. Level 2: core workflow powered by vendor model but swappable with engineering effort. Level 3: product breaks if vendor changes price, terms, or model behaviour tomorrow.",
            "Most AI startups believe they are Level 2 while architecturally Level 3.",
          ),
          s(" Honest depth rating is the first line of the risk register."),
        ],
        [
          s("You inherit vendor strategy whether you agree or not. "),
          x(
            "When OpenAI prioritises consumer ChatGPT over enterprise API stability, you feel it. When Anthropic deprecates a model, your fine-tunes orphan. When Google bundles Gemini into Workspace, your standalone value compresses.",
            "Vendor success can become your competitive threat — not just your supplier.",
          ),
          s(" Dependency is a strategic relationship, not a utility bill."),
        ],
        [
          s("Unit economics couple to vendor pricing with no lag. "),
          x(
            "Unlike SaaS infrastructure with reserved capacity, per-token pricing moves your COGS line item when the vendor moves theirs — often with 30 days notice.",
            "A product with 40% gross margin at current token rates may have negative margin after a 2× price increase.",
          ),
          s(" Model margin sensitivity before claiming product-market fit."),
        ],
      ],
      examples: [
        {
          title: "Wrapper startup — Level 3 denial",
          body: "Founder pitched 'proprietary AI' to seed investors. Architecture: single GPT-4 endpoint, no abstraction, prompts in frontend code. One pricing change from Level 2 fantasy to Level 3 reality. Diligence downgrade followed.",
        },
        {
          title: "Vertical SaaS — inherited deprecation",
          body: "Legal drafting tool built on gpt-3.5-turbo fine-tune. OpenAI announced deprecation with 90-day window. Engineering sprint consumed entire quarter — no feature shipped. Dependency depth became board-level incident.",
        },
        {
          title: "Margin model — token sensitivity",
          body: "Support AI startup modelled 55% gross margin. Vendor price increase plus traffic growth compressed margin to 22% in one quarter. Founder renegotiated enterprise tier and added usage-based customer pricing — survival required treating API as COGS driver.",
        },
      ],
    }, {
      kind: "diagram",
      id: "bl-governance-mvg",
      type: "nested",
      title: "AI Governance Framework",
      caption:
        "Inventory → risk tier → minimum controls. The governance path regulators and boards expect.",
    }),
    sectionWithDiagram({
      number: "2.2",
      title: "The four vendor risk scenarios",
      subtitle: "Price increase, deprecation, terms change, and the vendor becoming your competitor",
      take: "Plan explicitly for four scenarios: vendor raises price, vendor deprecates your model, vendor changes terms (data use, rate limits, geographic access), and vendor ships a competing product in your vertical. Each has happened to real startups in the last 24 months.",
      why: "Founders scenario-plan for competitor moves but not supplier moves. Vendor risk is more predictable than market risk — and more neglected in board decks.",
      paragraphs: [
        [
          s("Price increase is the most common and most survivable — if modelled. "),
          x(
            "Enterprise tiers, volume discounts, and annual commits buy predictability. Without them, list price changes flow straight to COGS.",
            "Mitigation: multi-year rate caps in contract, customer price passthrough clauses, model distillation roadmap.",
          ),
          s(" Survivability depends on margin headroom you built before the email arrived."),
        ],
        [
          s("Deprecation is an engineering earthquake. "),
          x(
            "Model retirements orphan fine-tunes, break prompt behaviour, and force re-evaluation of entire product quality.",
            "Mitigation: never fine-tune without migration plan, track vendor deprecation notices in risk register, maintain cross-model eval harness.",
          ),
          s(" Deprecation notices are shorter than migration sprints — plan ahead."),
        ],
        [
          s("Terms change and competitive entry are existential. "),
          x(
            "Terms: vendor starts training on your data by default, restricts your vertical, or changes rate limits that break your UX.",
            "Competitive entry: vendor launches product in your category with distribution advantage — see Microsoft Copilot vs third-party Office AI plugins.",
          ),
          s(" These scenarios require legal review and strategic diversification, not engineering patches."),
        ],
      ],
      examples: [
        {
          title: "Price increase — Jasper COGS pressure",
          body: "As generative API pricing fluctuated and competition intensified, companies built on thin API margins faced COGS crisis. Founders who had not modelled 2× token cost learned that vendor pricing is a lever on your P&L, not background noise.",
        },
        {
          title: "gpt-3.5 fine-tune deprecation",
          body: "Multiple startups with production fine-tunes on deprecated models faced simultaneous 90-day migration windows. Teams without cross-model evals discovered quality regressions only in production. Deprecation risk is portfolio-wide, not ticket-sized.",
        },
        {
          title: "Vendor as competitor — plugin compression",
          body: "Email AI plugins lost distribution when incumbents embedded native AI in Gmail and Outlook. Vendor platform risk plus competitive entry compressed TAM overnight. Founders needed workflow depth APIs alone could not provide.",
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
      number: "2.3",
      title: "OpenAI pricing history — the case study",
      subtitle: "What happened to companies that built deep dependency on specific GPT models",
      take: "OpenAI's pricing history shows aggressive decreases on flagship models — and unpredictable deprecation of older tiers. Companies that optimised for yesterday's cheapest model without abstraction paid migration tax. Companies that modelled volatility and built eval harnesses adapted faster.",
      why: "The largest provider sets market expectations. Founders who study OpenAI's pricing and deprecation patterns understand what 'stable vendor relationship' actually means in frontier AI.",
      paragraphs: [
        [
          s("Price cuts help until your architecture is model-specific. "),
          x(
            "GPT-4o price reductions improved margins for API-first companies — if they were on current SKUs. Companies pinned to legacy models missed cuts until migration.",
            "Cheaper tokens reward architectural flexibility, not deep coupling.",
          ),
          s(" Optimise for adaptability, not for today's price leaderboard."),
        ],
        [
          s("Deprecation timelines are shorter than enterprise sales cycles. "),
          x(
            "Fine-tuned models and older chat completions retired with 90-day notices — shorter than many enterprise contract renewals.",
            "Production systems with compliance sign-off could not migrate in time without pre-built contingency.",
          ),
          s(" Enterprise customers amplify deprecation impact through SLA penalties."),
        ],
        [
          s("Capability shifts redistribute who wins. "),
          x(
            "When GPT-4 class models became cheaper, wrapper products lost differentiation. When reasoning models launched, products without agent architecture looked obsolete.",
            "Vendor roadmap is your roadmap unless you diversify or build depth below the API.",
          ),
          s(" Track vendor release notes like you track competitor product launches."),
        ],
      ],
      examples: [
        {
          title: "Margin windfall — flexible architecture",
          body: "Startup on provider abstraction layer switched 70% of traffic to cheaper model within a week of price cut — gross margin improved 12 points. Competitor on hard-coded single model waited for quarterly planning cycle.",
        },
        {
          title: "Fine-tune migration sprint",
          body: "Customer support company with gpt-3.5 fine-tune received deprecation notice. Eleven-week retrain and eval cycle cost $180K and delayed enterprise rollout. Case study now in their vendor risk register as Scenario 2.",
        },
        {
          title: "Wrapper compression post-GPT-4o",
          body: "Thin copywriting wrappers faced margin improvement but simultaneous competitive compression as incumbents added native AI. OpenAI pricing helped COGS while hurting strategic differentiation — dual lesson for dependency analysis.",
        },
      ],
    }),
    buildSection({
      number: "2.4",
      title: "Vendor lock-in in AI — how it happens and how fast",
      subtitle: "The ways your codebase becomes coupled to a specific provider without you noticing",
      take: "AI lock-in accretes silently: proprietary embedding dimensions, fine-tune formats, tool schemas, prompt idioms, eval datasets tuned to one model's quirks, and sales contracts referencing vendor trademarks. Six months of fast shipping can create a two-quarter migration.",
      why: "Lock-in is not a contract you sign — it is technical debt you accumulate. Founders who name lock-in vectors early pay a small portability tax; founders who ignore them pay a large migration invoice.",
      paragraphs: [
        [
          s("Technical coupling vectors are specific and enumerable. "),
          x(
            "Embeddings: dimension mismatch forces full re-index. Fine-tunes: adapter tied to base model version. Tool calling: schema differences across providers. Vision/audio: incompatible request formats.",
            "Each vector alone is manageable; combined they compound migration cost.",
          ),
          s(" Audit coupling quarterly — lock-in accretes in normal sprints."),
        ],
        [
          s("Organisational lock-in is equally real. "),
          x(
            "Team learns one provider's docs, debugging tools, and rate limit patterns. Sales promises 'Powered by GPT-4' on enterprise contracts. Support playbooks assume one model's failure modes.",
            "Switching vendors is a company-wide migration, not an API key rotation.",
          ),
          s(" Organisational coupling is why multi-vendor sounds easy and runs hard."),
        ],
        [
          s("Lock-in speed exceeds founder intuition. "),
          x(
            "Seed to Series A: 18 months of shipping can embed 40M vectors, four fine-tunes, and customer contracts with vendor trademarks.",
            "The faster you ship, the faster you lock — unless portability is a sprint requirement.",
          ),
          s(" Velocity and optionality trade off unless architected intentionally."),
        ],
      ],
      examples: [
        {
          title: "Embedding dimension trap",
          body: "40M chunks indexed on 1536-dim embeddings. Alternative vendor used 1024-dim. Migration: six weeks engineering, $60K compute, temporary quality dip. Lock-in vector identified too late for contract negotiation leverage.",
        },
        {
          title: "Sales-driven trademark lock-in",
          body: "Enterprise contracts referenced 'GPT-4 powered' in SLA exhibits. Switching models required customer re-approval and security re-review — 4-month calendar delay beyond engineering work.",
        },
        {
          title: "Tool schema coupling",
          body: "Agent product built on one provider's function-calling format. Alternate provider required schema rewrite and re-eval of 200 tool paths. Technical lock-in discovered during vendor outage failover attempt.",
        },
      ],
    }),
    buildSection({
      number: "2.5",
      title: "Exit strategy design for API-dependent products",
      subtitle: "How to architect for portability from day one without slowing down development",
      take: "Exit strategy is architecture: provider abstraction layer, model-agnostic eval harness, versioned prompts, standard embedding options where possible, contractual data export rights, and a documented migration runbook tested annually. Portability tax is 10–20% velocity — cheaper than emergency migration.",
      why: "Founders treat exit planning as pessimism. Investors treat it as maturity. Due diligence explicitly asks 'what happens if OpenAI doubles price' — a runbook answer beats a shrug.",
      paragraphs: [
        [
          s("Minimum viable portability stack at seed. "),
          x(
            "Provider abstraction (LiteLLM or thin internal wrapper). Prompts in git with version tags. Offline eval set of 200+ golden cases runnable against any model. No fine-tune before abstraction exists.",
            "This stack ships in one to two sprints — not a year-long platform project.",
          ),
          s(" Seed portability is discipline, not infrastructure empire."),
        ],
        [
          s("Contractual exit rights are part of architecture. "),
          x(
            "Data export on termination, fine-tune artifact delivery, deletion certificates, and rate-lock clauses — negotiated at signing when you have leverage.",
            "Exit architecture without contractual rights leaves you with code but not data or weights.",
          ),
          s(" Legal and engineering exit plans must align."),
        ],
        [
          s("Test the runbook before crisis. "),
          x(
            "Annual fire drill: switch 10% of traffic to alternate provider in staging, run eval harness, measure quality and latency delta.",
            "Untested runbooks are fiction. A drill that takes three weeks today becomes a three-month crisis under pressure.",
          ),
          s(" Schedule the drill; do not wait for the outage."),
        ],
      ],
      examples: [
        {
          title: "LiteLLM abstraction — nine-day failover",
          body: "Primary provider outage during Black Friday. Team routed 60% traffic to backup via abstraction layer in nine days. Eval harness caught 4% quality drop on long-context tasks before full cutover. Runbook worked because it was drilled quarterly.",
        },
        {
          title: "Contractual export clause payoff",
          body: "Leaving vertical SaaS vendor, export clause delivered fine-tune weights and 18 months of logged prompts. Without clause, estimated rebuild: five months. Contract negotiation at signing saved a product cycle.",
        },
        {
          title: "Runbook fiction exposed",
          body: "Startup claimed multi-vendor readiness in pitch deck. First migration attempt took 14 weeks — eval harness did not exist, embeddings were vendor-locked. Due diligence gap cost term sheet revision.",
        },
      ],
    }),
    buildSection({
      number: "2.6",
      title: "Multi-vendor strategy — when it makes sense",
      subtitle: "The cost and complexity of maintaining multiple model provider relationships",
      take: "Multi-vendor makes sense at Level 3 dependency with enterprise SLAs, when negotiating leverage requires a credible alternative, or when different models win on different task types. It costs ongoing eval maintenance, dual integrations, and split vendor relationships — not free optionality.",
      why: "Founders either ignore multi-vendor entirely or pursue it as religion. The correct frame is insurance with a premium — buy it when downside risk exceeds maintenance cost.",
      paragraphs: [
        [
          s("When multi-vendor is worth the premium. "),
          x(
            "Enterprise customers demand failover SLAs. Gross margin is fragile to single-vendor pricing. Different models objectively win on subtasks (reasoning vs cheap classification).",
            "Regulatory diversification: no single US provider for EU-sovereign positioning.",
          ),
          s(" If none apply, single-vendor plus exit runbook may suffice."),
        ],
        [
          s("Hidden costs of multi-vendor operations. "),
          x(
            "Dual eval baselines when either model updates. Split enterprise negotiations — less volume leverage per vendor. Engineering time for routing logic and quality parity.",
            "Organisational complexity: which vendor for which feature, who owns which relationship.",
          ),
          s(" Model the maintenance FTE before adopting multi-vendor."),
        ],
        [
          s("Routing beats blind redundancy. "),
          x(
            "Smart routing: cheap model for classification, frontier model for generation. Failover routing: backup when primary degrades.",
            "Random multi-vendor without routing logic doubles cost without doubling value.",
          ),
          s(" Multi-vendor is a routing strategy, not a checkbox."),
        ],
      ],
      examples: [
        {
          title: "Enterprise SLA — failover requirement",
          body: "Fortune 500 customer required 99.9% AI availability with documented failover. Startup implemented primary + backup with automatic degradation routing. Multi-vendor cost: 0.4 FTE ongoing — justified by $1.2M ACV contract.",
        },
        {
          title: "Task-based routing — cost optimisation",
          body: "Startup routed intent classification to small model ($0.0001/call) and generation to frontier model ($0.02/call). Blended COGS dropped 38% vs all-frontier. Multi-vendor as economics, not only risk.",
        },
        {
          title: "Multi-vendor without eval — false security",
          body: "Team integrated two providers but only evaluated primary. Backup model quality on legal tasks was 23 points lower — discovered during actual outage. Multi-vendor without dual eval is theatrical redundancy.",
        },
      ],
    }),
    buildSection({
      number: "2.7",
      title: "Founder decision lens: the API dependency risk register",
      subtitle: "Mapping your current vendor dependencies and scoring the risk of each",
      take: "Maintain a living risk register: every vendor dependency, depth level (1–3), exposure ($ at risk from 2× price), reversibility score, scenario plans for four vendor risks, named owner, and quarterly board review. If it is not in the register, it is invisible risk.",
      why: "Registers convert anxiety into managed risk. Investors and boards increasingly request them in AI diligence. Founders with registers negotiate contracts from strength; founders without discover risk in crisis.",
      paragraphs: [
        [
          s("Register fields — minimum viable version. "),
          x(
            "Vendor name, capability provided, dependency depth, monthly spend, % of COGS, margin at 2× price, reversibility (H/M/L), last migration drill date, contract renewal date.",
            "One row per vendor-capability pair — not one row per company.",
          ),
          s(" Completeness matters more than sophistication."),
        ],
        [
          s("Scoring and escalation thresholds. "),
          x(
            "Red: Level 3 dependency, low reversibility, no rate cap, renewal within 90 days. Yellow: Level 2 with untested runbook. Green: commodity with abstraction.",
            "Red items get founder weekly attention until mitigated.",
          ),
          s(" Scoring without escalation is documentation theatre."),
        ],
        [
          s("Board rhythm — quarterly review, not annual surprise. "),
          x(
            "Present register quarterly: new dependencies added, drills run, contract changes, vendor news (deprecations, pricing, competitive moves).",
            "Tie register to budget: mitigation sprints get line items.",
          ),
          s(" The register is a governance tool, not a compliance checkbox."),
        ],
      ],
      examples: [
        {
          title: "Series A diligence — register request",
          body: "Lead investor requested vendor risk register in data room. Founder produced 14-row register with scenario notes. Closed round in 28 days. Peer without register faced three-week delay and MFN clause on vendor exposure.",
        },
        {
          title: "Red score triggered mitigation",
          body: "Register flagged Level 3 embedding dependency, renewal in 60 days, no rate cap. Founder used red status to negotiate 18-month price lock and export rights — leverage from documented risk.",
        },
        {
          title: "Drill date exposed gap",
          body: "Quarterly review showed migration drill overdue by 11 months. Scheduled two-week sprint, discovered backup model failed on multilingual tasks. Fixed before customer-facing outage — register review paid for itself.",
        },
      ],
    }),
  ],
  quiz: [
    {
      q: "Your product stops functioning if OpenAI changes model behaviour tomorrow. No abstraction layer. Which dependency depth level?",
      options: ["Level 1 — occasional feature", "Level 2 — swappable with effort", "Level 3 — existential vendor coupling", "Not dependent — you own the AI"],
      correct: 2,
      correctFeedback:
        "Right. No abstraction, core workflow breaks on vendor change = Level 3. Honest rating is step one of risk management.",
      wrongFeedback:
        "If vendor change breaks core product, you are Level 3. Re-read section 2.1.",
    },
    {
      kind: "categorize",
      q: "Match each vendor risk scenario to the best primary mitigation.",
      categories: ["Price increase", "Deprecation", "Terms change", "Vendor competitor"],
      items: [
        { text: "Negotiate rate caps and model 2× COGS sensitivity.", category: 0 },
        { text: "Cross-model eval harness and fine-tune migration plan.", category: 1 },
        { text: "Legal review of data training and usage restrictions.", category: 2 },
        { text: "Workflow depth and distribution moat below API layer.", category: 3 },
      ],
      correctFeedback:
        "Right. Each scenario has distinct mitigations — financial, engineering, legal, and strategic.",
      wrongFeedback:
        "Four scenarios need four mitigation types. Re-read section 2.2.",
    },
    {
      q: "40M chunks indexed on vendor-specific 1536-dim embeddings. Alternate vendor uses 1024-dim. What lock-in lesson applies?",
      options: [
        "Embeddings are always portable.",
        "Embedding dimension choice is a major lock-in vector — model undo cost before committing.",
        "Lock-in only exists in contracts, not architecture.",
        "Switch vendors monthly for leverage.",
      ],
      correct: 1,
      correctFeedback:
        "Right. Embedding dimensions force full re-index — classic silent lock-in. Audit vectors early.",
      wrongFeedback:
        "Technical coupling creates lock-in fast. Re-read section 2.4.",
    },
    {
      q: "Seed startup with one GPT-4 integration. Minimum viable portability stack?",
      options: [
        "Pretrain own model immediately.",
        "Provider abstraction, versioned prompts, 200-case eval harness — before fine-tuning.",
        "Sign 10-year single-vendor contract.",
        "Ignore portability until Series C.",
      ],
      correct: 1,
      correctFeedback:
        "Right. Seed portability is abstraction + evals + prompt versioning. Cheap, high leverage.",
      wrongFeedback:
        "Portability stack is 1–2 sprints, not a year. Re-read section 2.5.",
    },
    {
      kind: "order",
      q: "Order API dependency risk register setup (first step at top).",
      prompt: "Drag to arrange the correct sequence.",
      items: [
        "List every vendor-capability pair and dependency depth.",
        "Score exposure, reversibility, and red/yellow/green status.",
        "Document scenario mitigations and named owners.",
        "Schedule quarterly board review and migration drills.",
      ],
      correctFeedback:
        "Right. Inventory → score → mitigate → govern. Register without rhythm is static fiction.",
      wrongFeedback:
        "Build register inventory first, then score, then mitigate, then review quarterly. Re-read section 2.7.",
    },
    {
      q: "When is multi-vendor strategy worth the ongoing maintenance cost?",
      options: [
        "Always — free optionality.",
        "Never — too complex.",
        "When enterprise SLAs, fragile margins, or task-based routing economics justify the premium.",
        "Only after IPO.",
      ],
      correct: 2,
      correctFeedback:
        "Right. Multi-vendor is insurance with a premium — buy when downside exceeds maintenance FTE.",
      wrongFeedback:
        "Multi-vendor is conditional, not universal. Re-read section 2.6.",
    },
  ],
});
