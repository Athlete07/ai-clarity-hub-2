import { buildChapter, buildSection, s, x, sectionWithDiagram } from "../concepts-pb4-helpers";

export const chapter02FindingAiWedge = buildChapter({
  slug: "founder-finding-ai-wedge",
  number: 2,
  shortTitle: "Finding Your AI Wedge",
  title: "Finding Your AI Wedge",
  readingMinutes: 24,
  summary:
    "The one workflow AI makes 10x better — and how to find it before your competitor does. Wedge discovery is the highest-leverage strategic work a founder can do before writing product code.",
  keyTakeaway:
    "A wedge is a narrow, high-frequency, high-pain workflow where AI creates step-change value and generates defensible signal. Horizontal ambition is how seed rounds die; vertical wedges are how AI companies get born.",
  pmCallout:
    "As a founder: if you cannot name the one workflow you make 10x better in one sentence, you are not ready to fundraise on AI — you are ready to experiment. Find the wedge before you find the engineers.",
  sections: [
    sectionWithDiagram({
      number: "2.1",
      title: "What is a wedge in an AI context",
      subtitle: "The specific, narrow use case where AI creates a step-change improvement — not an incremental one",
      take: "A wedge is not your TAM slide — it is the single workflow where removing AI collapses the value proposition. Incremental improvements (10% faster) get bundled by incumbents; step-changes (10x better or 10x cheaper) create entry points incumbents cannot copy overnight.",
      why: "Founders who confuse wedge with vision build platforms nobody needs yet. Investors fund wedges that prove AI changes economics in one painful job — then expand.",
      paragraphs: [
        [
          s("In classic startup theory, a wedge is a narrow product entry that expands. "),
          x(
            "In AI, the wedge must also be a place where machine intelligence changes the cost or quality curve discontinuously.",
            "Better search is incremental. Autonomous triage with human-grade accuracy in a regulated workflow is step-change.",
          ),
          s(" The AI wedge test is: would a spreadsheet and a human team still win? If yes, it is not a wedge."),
        ],
        [
          s("Step-change shows up in time, error rate, or accessible market. "),
          x(
            "Time: tasks that took hours now take minutes with acceptable risk.",
            "Error: failure modes that blocked automation now have model accuracy above the trust threshold.",
          ),
          s(" Founders must quantify before/after on the wedge workflow, not on the category TAM."),
        ],
        [
          s("Wedges are intentionally small — that is the feature, not the bug. "),
          x(
            "Small wedges concentrate data signal, shorten sales cycles, and clarify positioning.",
            "Broad wedges dilute signal, invite incumbent competition, and make moat-building impossible in the runway you have.",
          ),
          s(" Platform stories are how you pitch year three; wedges are how you survive year one."),
        ],
      ],
      examples: [
        {
          title: "Ironclad — contract workflow wedge",
          body: "Ironclad did not start as 'AI for legal.' The wedge was contract lifecycle for in-house teams — a workflow with pain, budget, and repetition. AI entered where it compressed review and extraction time by an order of magnitude. The wedge was workflow-shaped, not model-shaped.",
        },
        {
          title: "Generic 'AI assistant' — weak wedge",
          body: "Startups pitching 'AI assistant for knowledge workers' without naming a workflow fail the step-change test. Incumbents (Microsoft, Google) own distribution; the wedge is too thin to price. Weak wedges raise on vision and stall on conversion.",
        },
        {
          title: "Radiology triage — step-change in error cost",
          body: "AI triage in radiology wins where false-negative cost is catastrophic and volume is high. The wedge is not 'AI reads scans' broadly — it is prioritising urgent cases in a specific modality with measurable sensitivity. Narrow, high-stakes, step-change.",
        },
      ],
    }, {
      kind: "diagram",
      id: "founder-data-moat-layers",
      type: "nested",
      title: "Strategic Moat Layers",
      caption:
        "Distribution → proprietary data → model advantage. Strategy lives in the data loop.",
    }),
    sectionWithDiagram({
      number: "2.2",
      title: "How to identify your wedge",
      subtitle: "The workflow analysis that finds the highest-pain, highest-frequency, AI-solvable problem",
      take: "Wedge discovery is workflow archaeology: map jobs, measure frequency and pain, score AI-solvability, and interview for willingness-to-pay on the before/after — not on 'AI' as a label.",
      why: "Most founders start with technology and hunt for problems. Wedge-first founders start with workflows and hunt for discontinuities — which produces companies investors can underwrite.",
      paragraphs: [
        [
          s("Step one: list workflows in your target user's week, not your feature brainstorm. "),
          x(
            "For each workflow: minutes spent, euros lost on errors, frequency per user per week, who owns the budget.",
            "Pain without frequency is a consulting project. Frequency without pain is a vitamin.",
          ),
          s(" Score every workflow before you touch architecture."),
        ],
        [
          s("Step two: AI-solvability — where do models beat rules today? "),
          x(
            "Language-heavy, pattern-rich, high-dimensional inputs favour ML.",
            "Codified regulation with fixed outcomes favours rules — AI wedge may be wrong entry.",
          ),
          s(" Be honest about failure modes users will not tolerate in this workflow."),
        ],
        [
          s("Step three: validate willingness-to-pay on outcomes, not technology. "),
          x(
            "Ask: 'If this workflow took 80% less time with same accuracy, what would you pay?'",
            "If the answer is 'nothing, we would just cut headcount' — you have cost-save wedge, price accordingly.",
          ),
          s(" Ten customer conversations on one workflow beat hundred on 'would you use AI.'"),
        ],
      ],
      examples: [
        {
          title: "Field service scheduling — workflow map",
          body: "A founder mapped technician dispatch workflows: 45 minutes daily on phone coordination, 12% rework from misassignment. AI-solvable via constraint solving plus language intake. Wedge scored highest on frequency × pain. Product roadmap followed the map, not a technology thesis.",
        },
        {
          title: "Compliance checklist — rules won",
          body: "Workflow analysis showed compliance checks were deterministic against published rules. AI wedge scored low on solvability — high hallucination risk, low tolerance. Team pivoted to rules engine with AI assist for narrative sections only. Workflow analysis prevented a wrong wedge.",
        },
        {
          title: "Payroll anomaly detection — budget owner mattered",
          body: "Pain was real but budget sat with IT, not payroll owner. Wedge failed commercial test despite technical fit. Reframing around CFO fraud exposure unlocked budget. Wedge discovery includes who signs, not just what hurts.",
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
      title: "Wedge criteria — the four tests",
      subtitle: "High frequency, high pain, data-generative, and defensible — why all four must be true",
      take: "A wedge that fails any one test eventually stalls: low frequency starves the loop; low pain kills pricing; non-data-generative wedges cannot compound; non-defensible wedges get replicated when APIs improve.",
      why: "Founders love wedges that pass three of four tests. Investors and markets punish the missing test — usually defensibility or data signal. Run all four before you commit runway.",
      paragraphs: [
        [
          s("High frequency feeds the feedback loop and habit formation. "),
          x(
            "Weekly or daily use generates signal fast enough to improve models inside your runway.",
            "Quarterly workflows can still be wedges commercially — but you need another moat mechanism because the loop is slow.",
          ),
          s(" Frequency is the clock speed of your AI business."),
        ],
        [
          s("High pain drives urgency and budget. "),
          x(
            "Pain = money lost, risk incurred, or talent wasted — quantified, not anecdotal.",
            "Nice-to-have workflows get cut when budgets tighten; hair-on-fire workflows survive downturns.",
          ),
          s(" If users will not champion internally, you have a feature not a wedge."),
        ],
        [
          s("Data-generative and defensible are the AI-specific tests. "),
          x(
            "Data-generative: each use produces labelled or rankable signal you can train on.",
            "Defensible: even if the model is commoditised, you retain distribution, workflow depth, or proprietary corpora.",
          ),
          s(" Passing three tests is how you build a demo; passing four is how you build a company."),
        ],
      ],
      examples: [
        {
          title: "Spotify recommendations — frequency + data",
          body: "Listening is daily; skip and save actions generate massive implicit labels. Pain is mild individually but acute competitively. Defensibility came from scale of behavioural data — wedge evolved into moat. Founders should ask if their wedge produces comparable signal per user.",
        },
        {
          title: "Annual tax strategy AI — frequency fail",
          body: "High pain once per year, minimal interaction signal between filings. Startup burned runway building models without loop velocity. Wedge needed adjacent workflows (bookkeeping, quarterly estimates) to pass frequency test — discovered too late.",
        },
        {
          title: "Customer support triage — defensibility question",
          body: "High frequency, high pain, data-generative — but Zendesk and Intercom own distribution. Wedge worked as feature, failed as standalone until startup embedded in vertical CRM with industry-specific escalation rules. Defensibility arrived via vertical workflow, not model quality.",
        },
      ],
    }),
    buildSection({
      number: "2.4",
      title: "Vertical wedges vs horizontal wedges",
      subtitle: "Why narrow wedges in specific industries almost always beat broad horizontal plays at the start",
      take: "Horizontal wedges compete with platform vendors on distribution day one. Vertical wedges compete on domain depth, compliance fluency, and workflow integration — where startups can win before incumbents notice.",
      why: "Seed capital is too small to win horizontal distribution wars. Vertical wedges convert faster, churn slower, and produce domain data incumbents do not have.",
      paragraphs: [
        [
          s("Horizontal plays assume you can out-execute Microsoft on reach. "),
          x(
            "Copilots for 'all knowledge work' bundle into suites customers already own.",
            "Startups win where suites are shallow: industry-specific ontology, liability, integrations.",
          ),
          s(" Horizontal is a Series C story; vertical is a seed story."),
        ],
        [
          s("Vertical wedges trade TAM slides for credible entry. "),
          x(
            "Dental practice scheduling AI is small TAM on paper — large TAM on penetration and expansion within vertical.",
            "Investors who understand wedges reward depth and expansion path, not day-one TAM fiction.",
          ),
          s(" Name the vertical workflow first; platform second."),
        ],
        [
          s("Vertical depth creates language moats. "),
          x(
            "Models fine-tuned on how clinicians, lawyers, or underwriters actually write outperform generic models in trust-sensitive workflows.",
            "Domain UX — audit trails, approvals, liability copy — is as important as parameter count.",
          ),
          s(" Vertical is not niche when the wedge owns budget in a painful job."),
        ],
      ],
      examples: [
        {
          title: "Veeva — vertical CRM wedge",
          body: "Veeva did not compete with Salesforce horizontally — it owned life sciences workflows. AI features later compounded on vertical data and compliance trust. The wedge pattern predates modern LLMs but still applies: vertical first, platform later.",
        },
        {
          title: "Horizontal productivity AI — churn",
          body: "Many horizontal writing assistants saw spike then churn when users returned to native tools in Office and Google. No vertical workflow lock-in, no proprietary signal — horizontal wedge without moat.",
        },
        {
          title: "Construction RFQ parsing — vertical win",
          body: "Startup parsed subcontractor bids in commercial construction — obscure vertically, painful daily during bid season. Horizontal doc AI vendors missed RFQ-specific tables and liability clauses. Vertical wedge won deals incumbents did not prioritise.",
        },
      ],
    }),
    buildSection({
      number: "2.5",
      title: "The expansion path from wedge",
      subtitle: "How your initial wedge becomes your first product, then your platform",
      take: "Expansion is sequenced, not simultaneous: nail one workflow, earn trust and data, then adjacent workflows on the same object graph — matter, patient, shipment, employee — before you declare platform.",
      why: "Investors fear 'wedge and pray.' A credible expansion path shows you understand how AI companies compound inside a domain instead of chasing every new model capability.",
      paragraphs: [
        [
          s("Phase one: wedge as standalone product with one metric that matters. "),
          x(
            "Success = time saved, error reduced, revenue captured — on the wedge only.",
            "Do not expand until retention and signal quality prove the wedge holds.",
          ),
          s(" Premature platform language kills enterprise trust."),
        ],
        [
          s("Phase two: adjacent workflows sharing data objects. "),
          x(
            "Legal wedge: contract review → obligation tracking → litigation prep on same clause graph.",
            "Each adjacency reuses data model and customer relationship — marginal GTM cost drops.",
          ),
          s(" Adjacency beats unrelated feature sprawl."),
        ],
        [
          s("Phase three: platform primitives — API, marketplace, partner ecosystem. "),
          x(
            "Platform when customers ask to build on your objects and you own the canonical record.",
            "Before that, 'platform' is marketing; after that, it is net revenue retention driver.",
          ),
          s(" Gates between phases should be explicit in your strategy one-pager."),
        ],
      ],
      examples: [
        {
          title: "Stripe — payments wedge to financial infrastructure",
          body: "Stripe's wedge was seven lines of code for developers to accept payments. Expansion followed developer trust and payment object graph — connect, billing, treasury. AI companies need the same discipline: wedge object first, primitives when customers pull.",
        },
        {
          title: "Healthcare scribe to full ambient platform",
          body: "Ambient documentation wedges expanded into coding suggestions, prior auth drafts, and visit summaries — same patient encounter object. Expansion worked because each feature reused the same audio signal and EHR integration moat.",
        },
        {
          title: "Premature platform — developer API with no wedge retention",
          body: "Startup launched 'AI platform' APIs before any workflow showed standalone retention. Usage was demo-driven, churned post-hackathon. Reset to single HR screening wedge, rebuilt expansion after NRR improved. Sequence mattered more than vision.",
        },
      ],
    }),
    buildSection({
      number: "2.6",
      title: "Examples of strong vs weak AI wedges",
      subtitle: "Honest analysis of real companies — what made their wedge work or fail",
      take: "Strong wedges combine step-change outcomes, vertical or workflow depth, and signal compounding. Weak wedges are thin wrappers on commoditised capabilities with no budget owner — they raise on demos and die on retention.",
      why: "Pattern recognition from real wedges calibrates your self-assessment. Founders who study failures avoid building the same thin layer with better branding.",
      paragraphs: [
        [
          s("Strong wedge pattern: painful job, frequent use, proprietary signal, workflow lock-in. "),
          x(
            "Harvey: legal synthesis in matter context with firm-specific style and citations.",
            "Gong: revenue conversations recorded and analysed — signal no horizontal CRM replicates easily.",
          ),
          s(" Strong wedges survive 'OpenAI will build this' because context and workflow are the product."),
        ],
        [
          s("Weak wedge pattern: generic output, occasional use, no integration, API-thin. "),
          x(
            "Marketing copy generators without brand voice data or campaign workflow.",
            "Email writers without CRM context — users try once, return to Gmail native assist.",
          ),
          s(" Weak wedges show spike MAU, flat revenue, high churn."),
        ],
        [
          s("The honest post-mortem questions. "),
          x(
            "Did users pay when the model was wrong 15% of the time?",
            "Did usage generate labels we actually trained on?",
          ),
          s(" Weak wedges fail one of these quietly in the first two quarters."),
        ],
      ],
      examples: [
        {
          title: "Strong — EvenUp in personal injury",
          body: "Wedge: demand letter drafting from medical records in PI law. High pain (lawyer hours), high frequency during case intake, data-generative outcomes, vertical integrations with case management. Step-change on time-to-file, not generic summarisation.",
        },
        {
          title: "Weak — undifferentiated slide deck AI",
          body: "Many pitch-deck generators launched 2023–2024. Low frequency, low willingness-to-pay, no workflow beyond export to PDF. Commoditised when PowerPoint added native features. Classic weak wedge: demo wow, no retention.",
        },
        {
          title: "Mixed — code completion",
          body: "GitHub Copilot: strong wedge for daily developers with IDE distribution moat. Smaller players without distribution struggled — same technical wedge, different defensibility. Wedge strength is wedge plus moat, not wedge alone.",
        },
      ],
    }),
    buildSection({
      number: "2.7",
      title: "Founder decision lens: the wedge validation framework",
      subtitle: "How to test whether your wedge is real before you build a company around it",
      take: "Validate wedges with evidence, not conviction: concierge MVP, paid pilot, signal audit, incumbent response drill, and four-test scorecard — before you hire a team or raise a round on the story.",
      why: "A false wedge costs twelve to eighteen months and your reputation with investors. Two weeks of disciplined validation is the highest ROI work in the company.",
      paragraphs: [
        [
          s("Concierge MVP: deliver the outcome manually or with heavy human review. "),
          x(
            "If customers will not pay for the outcome when AI is partly fake, they will not pay for the product.",
            "Concierge proves pain and budget; it does not prove scalability — that comes next.",
          ),
          s(" Paid pilots beat free betas for wedge truth."),
        ],
        [
          s("Signal audit: trace one user session to training data. "),
          x(
            "What event would update the model? Is it logged today? Is label quality sufficient?",
            "If you cannot draw the path, the wedge is not data-generative — fix architecture or pick another wedge.",
          ),
          s(" No signal path, no AI company — feature at best."),
        ],
        [
          s("Incumbent response drill: assume Microsoft/Google ships 80% in six months. "),
          x(
            "What remains defensible? Vertical compliance? Proprietary corpus? Workflow lock-in?",
            "If answer is 'we will move faster' — that is not a strategy, that is hope.",
          ),
          s(" Score all four tests in writing; below 3.5 average, keep searching."),
        ],
      ],
      examples: [
        {
          title: "Concierge saved a seed round",
          body: "Founder ran two-week manual contract redlining for three GCs, charged $5K each. All three paid and asked for software. Wedge validated before engineering hire. Fundraise narrative included paid evidence, not slide fiction.",
        },
        {
          title: "Signal audit failure — pivot pre-build",
          body: "Planned wedge in executive coaching via chat. Audit showed no structured labels — conversations too varied, no outcome labels. Data-generative test failed. Pivoted to sales call coaching with win/loss labels from CRM. Same domain, wedge fixable by signal.",
        },
        {
          title: "Incumbent drill killed horizontal play",
          body: "Team scored defensibility 1/5 on horizontal research assistant. Drill assumed native browser integration from Google. Pivoted to patent prosecution workflow with USPTO-specific corpus. Score rose to 4/5 — fundraising reopened.",
        },
      ],
    }),
  ],
  quiz: [
    {
      q: "Which definition best matches an AI wedge?",
      options: [
        "The largest TAM segment in your pitch deck.",
        "A narrow workflow where AI creates step-change value and the product collapses without it.",
        "Any feature that uses an LLM API.",
        "The first integration on your roadmap.",
      ],
      correct: 1,
      correctFeedback:
        "Right. Wedges are workflow-specific step-changes, not TAM fiction or API usage. Re-read section 2.1.",
      wrongFeedback:
        "A wedge is a specific workflow with discontinuous improvement — not TAM or any AI feature. Re-read section 2.1.",
    },
    {
      kind: "order",
      q: "Order the wedge validation steps a founder should run before hiring a full AI team.",
      prompt: "Drag to arrange the recommended sequence (top = first).",
      items: [
        "Map workflows and score frequency × pain × AI-solvability.",
        "Run concierge or paid pilot on the top workflow.",
        "Signal audit: trace user actions to trainable labels.",
        "Incumbent response drill: what remains if platform ships 80%?",
      ],
      correctFeedback:
        "Exactly. Discover workflow, prove willingness-to-pay, prove signal, prove defensibility — then scale team. Re-read section 2.7.",
      wrongFeedback:
        "Validate pain and payment before you scale engineering; audit signal and defensibility before you declare a company. Re-read section 2.7.",
    },
    {
      kind: "categorize",
      q: "Sort each wedge against the four tests (pass = strong on that test).",
      categories: ["Passes test", "Fails test"],
      items: [
        { text: "Daily sales call analysis with win/loss labels in CRM — high frequency.", category: 0 },
        { text: "Annual wedding vow generator — occasional use.", category: 1 },
        { text: "Medication interaction check in hospital formulary — high pain, budget owner clear.", category: 0 },
        { text: "Generic blog post writer with no brand corpus or workflow — commoditised output.", category: 1 },
        { text: "Insurance claims photo upload with adjuster accept/reject labels — data-generative.", category: 0 },
        { text: "One-click haiku button with no retention or labels.", category: 1 },
      ],
      correctFeedback:
        "Right. Frequency, pain, data signal, and defensibility separate real wedges from demos.",
      wrongFeedback:
        "Apply all four tests: frequency, pain, data-generative, defensible. Re-read section 2.3.",
    },
    {
      q: "You have high pain and high frequency in a workflow, but all processing happens client-side with no logging. Which test failed?",
      options: [
        "High pain",
        "High frequency",
        "Data-generative",
        "Defensible",
      ],
      correct: 2,
      correctFeedback:
        "Right. Without signal capture, the feedback loop cannot compound — the wedge may commercialise but will not build an AI moat. Re-read sections 2.3 and 2.7.",
      wrongFeedback:
        "No logged, trainable signal means the data-generative test fails. Re-read sections 2.3 and 2.7.",
    },
    {
      q: "At seed stage, which wedge approach do sophisticated investors typically prefer?",
      options: [
        "Horizontal copilot for all knowledge workers — largest TAM.",
        "Vertical workflow depth with credible expansion along the same object graph.",
        "Platform API first, find customers later.",
        "Multiple wedges in parallel to derisk.",
      ],
      correct: 1,
      correctFeedback:
        "Right. Vertical wedges with expansion paths beat horizontal distribution wars at seed. Re-read section 2.4.",
      wrongFeedback:
        "Seed-stage AI companies usually win vertical depth first, not horizontal platform plays. Re-read section 2.4.",
    },
    {
      q: "Your concierge MVP gets interest but nobody will pay. What is the founder-correct conclusion?",
      options: [
        "Raise anyway — usage proves wedge.",
        "The wedge fails pain/budget validation; fix workflow, buyer, or outcome before building product.",
        "Add more AI features to the MVP.",
        "Lower price to zero until Series A.",
      ],
      correct: 1,
      correctFeedback:
        "Right. Willingness-to-pay is core wedge validation. Interest without budget is not a company. Re-read sections 2.2 and 2.7.",
      wrongFeedback:
        "Paid pilots prove wedges; free interest does not. Re-read sections 2.2 and 2.7.",
    },
  ],
});
