import { buildChapter, buildSection, s, x } from "../concepts-pb4-helpers";

export const chapter03AiDiscoveryMethods = buildChapter({
  slug: "pb7-ai-discovery-methods",
  number: 3,
  shortTitle: "AI Discovery",
  title: "AI Discovery Methods",
  readingMinutes: 29,
  summary:
    "Finding the right AI problems to solve — the research and discovery practices that prevent building impressive solutions to unimportant problems",
  keyTakeaway:
    "AI discovery fails when it starts with model capability and hunts for a use case. Mature PMs hold capability-led and problem-led discovery in tension: map high-frequency painful tasks, run automation suitability and opportunity sizing, validate with shadowing and Wizard of Oz, then score candidates on impact, feasibility, data, and risk before a single fine-tune dollar is spent.",
  pmCallout:
    "As a PM: if your discovery doc opens with 'GPT-4 can do X,' rewrite it to open with 'users spend Y hours on Z and fail in these ways.' The model is a means; the job is the product.",
  sections: [
    buildSection({
      number: "3.1",
      title: "Why AI discovery is different",
      subtitle: "The temptation to start with a model capability and find a use case — and why that inverts the product process",
      take: "AI discovery inverts when teams start from 'the model can do X' instead of 'users struggle with Y.' Capability-first discovery produces demos that impress and products nobody needs; problem-first discovery may miss AI-suitable tasks — you need both, sequenced correctly.",
      why: "AI hype accelerates solution-first roadmaps. PMs who re-anchor discovery on jobs, frequency, and failure cost avoid quarters spent on technically clever features with no adoption.",
      paragraphs: [
        [
          s("Solution-first is seductive because demos are easy. "),
          x(
            "Foundation models generate plausible output on any prompt — a prototype in an afternoon can fake product-market fit.",
            "Discovery must separate 'looks good in conference room' from 'changes user behaviour weekly.'",
          ),
          s(" PM gate: no roadmap slot without named user job and frequency evidence."),
        ],
        [
          s("Problem-first without AI literacy misses opportunities. "),
          x(
            "Users describe workarounds, not 'I need an LLM.' PM translates pain into automation candidacy — some problems are rules + UI, not AI.",
            "AI discovery adds suitability filters other product discovery skips.",
          ),
          s(" Not every pain point deserves a model — discovery includes 'don't automate.'"),
        ],
        [
          s("Discovery outputs a scored opportunity backlog, not a model choice. "),
          x(
            "Deliverables: pain map, suitability scores, WoZ results, sizing model, risk tier — model selection comes after problem validation.",
            "Engineering model debates before problem validation are expensive theatre.",
          ),
          s(" Sequence: problem → fit → prototype → model path."),
        ],
      ],
      examples: [
        {
          title: "GPT wrapper startup — capability-first failure",
          body: "Team built 'AI for everything' browser extension. Technically flexible; no repeated job. Discovery reboot: interviewed 40 users, found one task — meeting action-item extraction — used 5×/week. Narrowed product; retention 3×. Capability-first almost killed company.",
        },
        {
          title: "Enterprise PM — problem-first saved budget",
          body: "Sales asked for 'AI in the platform.' PM ran job mapping: buyers spent 6 hours/week on compliance checklist cross-reference. High frequency, rule-bound, measurable. AI candidate; 'AI dashboard' vanity feature rejected. Problem-first focused quarter.",
        },
        {
          title: "Discovery doc rewrite ritual",
          body: "PM required every AI proposal to delete first paragraph if it mentioned model name. Replace with user quote + time-on-task data. 60% of proposals dropped or reframed as non-AI workflow fixes — healthy filter.",
        },
      ],
    }),
    buildSection({
      number: "3.2",
      title: "Capability-led vs problem-led discovery",
      subtitle: "The two starting points, the two failure modes, and how to hold them in productive tension",
      take: "Capability-led discovery asks 'what new model abilities enable?' Problem-led asks 'what jobs are painful?' Run problem-led first for backlog; capability-led in parallel for horizon bets — merge in a single prioritisation rubric.",
      why: "Pure problem-led misses breakthroughs; pure capability-led builds toys. PMs who schedule both lenses and force merge decisions prevent orgs from splitting into 'innovation lab' and 'feature factory' silos.",
      paragraphs: [
        [
          s("Capability-led failure mode: technology in search of problem. "),
          x(
            "Multimodal launches, agent hype, fine-tune because we can — outputs impressive internal demos with no KPI.",
            "Horizon scanning belongs in discovery; it shouldn't auto-enter roadmap without problem anchor.",
          ),
          s(" Capability-led items carry 'hypothesis user' label until validated."),
        ],
        [
          s("Problem-led failure mode: ignoring new solution space. "),
          x(
            "Users couldn't articulate need for semantic search before embeddings — pure interviews miss step-change solutions.",
            "Capability lens asks: 'this job was impossible last year — is it possible now?'",
          ),
          s(" Annual capability review revisits pain map with new model economics."),
        ],
        [
          s("Merge in prioritisation, not in brainstorming chaos. "),
          x(
            "Same rubric scores problem-led opportunities and capability-led bets. Capability bets need faster kill criteria.",
            "PM facilitates merge workshop: problem evidence + capability delta + sizing.",
          ),
          s(" Two lenses, one backlog, explicit kill rules."),
        ],
      ],
      examples: [
        {
          title: "Voice input — capability met latent problem",
          body: "Problem interviews: field techs hated typing in gloves. Capability: reliable on-device STT arrived. Capability-led 'voice notes' matched problem-led pain — merged priority #1. Either lens alone might have missed timing.",
        },
        {
          title: "Agent lab — capability without merge",
          body: "Innovation team shipped autonomous agent demo. No problem owner, no metric. Problem-led roadmap ignored it. Wasted quarter until PM forced merge review — killed agent, salvaged single-tool automation for real workflow.",
        },
        {
          title: "Quarterly merge workshop",
          body: "PM ran ½-day: problem team presents top 5 pains; ML team presents top 3 capability deltas. Scored together on shared rubric. Output: 2 committed, 3 problem-only, 1 capability bet with 4-week WoZ kill gate.",
        },
      ],
    }),
    buildSection({
      number: "3.3",
      title: "Pain-point mapping for AI",
      subtitle: "Identifying tasks that are high-frequency, high-effort, and rule-bound — the candidate space where AI delivers most reliably",
      take: "AI pain-point mapping catalogues user tasks by frequency, time spent, error cost, and rule structure — prioritising high-frequency, high-effort, semi-structured work where automation has clear success criteria.",
      why: "Unstructured brainstorming yields vague 'make it faster.' PMs who quantify tasks on a pain map focus discovery on slots where AI reliably pays back — not one-off executive annoyances.",
      paragraphs: [
        [
          s("Frequency × effort × error cost = opportunity heat. "),
          x(
            "Daily 30-minute task beats monthly 3-hour task for v1 AI — habit formation and data flywheel.",
            "High error cost justifies human-in-loop and eval investment.",
          ),
          s(" Heat map drives interview sampling and shadowing targets."),
        ],
        [
          s("Rule-bound and semi-structured tasks suit current LLMs. "),
          x(
            "Templates, checklists, classification, extraction, summarisation with citations — strong fits.",
            "Pure creativity and high-stakes novel judgement — weaker v1 fits; flag risk tier.",
          ),
          s(" Map task structure axis alongside pain heat."),
        ],
        [
          s("Pain map sources: support logs, time-motion studies, CRM notes. "),
          x(
            "Ticket taxonomy reveals recurring manual resolutions. Sales call notes reveal demo-requested 'AI' without underlying job.",
            "Triangulate qualitative interviews with quantitative volume data.",
          ),
          s(" PM owns living pain map doc linked from roadmap."),
        ],
      ],
      examples: [
        {
          title: "Support ticket taxonomy — pain map gold",
          body: "PM mined 90 days tickets: 'password reset' 22% volume but fully scripted — low AI value. 'Billing proration dispute' 8% volume, 25 min avg handle, high effort — AI candidate for policy citation assistant. Pain map redirected ML sprint.",
        },
        {
          title: "Analyst time-motion study",
          body: "Shadowing revealed 14 hours/week copying data between systems — high frequency, low creativity. Automation suitability high. Executive 'AI insights' idea deprioritised — low frequency, vague success.",
        },
        {
          title: "Sales-request filter",
          body: "Enterprise deals demanded 'AI feature.' Pain map showed buyer users didn't overlap with requester's imagined use case. PM used map in QBR to negotiate phased rollout on real high-frequency analyst task — preserved deal without vanity build.",
        },
      ],
    }),
    buildSection({
      number: "3.4",
      title: "The automation suitability test",
      subtitle: "Is the task well-defined, does it have measurable success, and is failure recoverable — the three questions before prototyping",
      take: "Before any AI prototype, answer three gates: (1) Well-defined task with clear inputs/outputs? (2) Measurable success criteria? (3) Recoverable failure — low irreversible harm? Three yeses proceed; any no demands redesign or human safeguards.",
      why: "Skipping suitability produces production systems that fail ambiguous tasks with irreversible actions. PMs who run the three-question test kill bad ideas cheaply and design guardrails early for marginal cases.",
      paragraphs: [
        [
          s("Well-defined: can two humans agree on 'done'? "),
          x(
            "Extract invoice total: yes. 'Write strategic vision': no — unless narrowed to structured sections with rubric.",
            "Ambiguous tasks need scoping slice before AI — PM narrows job.",
          ),
          s(" Vague tasks fail eval design and user trust alike."),
        ],
        [
          s("Measurable success: binary or graded oracle exists. "),
          x(
            "Schema validity, policy compliance checklist, human adjudication rubric, automated test — something countable.",
            "If success is 'user feels inspired,' it's marketing not automation candidate.",
          ),
          s(" No oracle → no eval → no production AI."),
        ],
        [
          s("Recoverable failure: harm bounded and fixable. "),
          x(
            "Draft email: user edits. Wrong refund: irreversible. Suitability demands approval gates for high-harm paths.",
            "Third question failure doesn't kill feature — it mandates HITL and scope reduction.",
          ),
          s(" Irreversible harm without oversight fails suitability until redesigned."),
        ],
      ],
      examples: [
        {
          title: "Automated refund — suitability fail without gate",
          body: "Task well-defined and measurable but failure irreversible. Suitability: proceed only with amount cap + human approval over $200. PM narrowed v1 scope; full automation deferred.",
        },
        {
          title: "Strategy memo generator — vague task",
          body: "Suitability fail on definition and measurement. PM reframed to 'executive brief template with required sections + fact citations' — scoped slice passed all three gates.",
        },
        {
          title: "Suitability one-pager in PRD template",
          body: "PM added three-question checklist to AI PRD template. Legal review triggered automatically on third-question 'no.' Reduced late-stage safety surprises.",
        },
      ],
    }),
    buildSection({
      number: "3.5",
      title: "User shadowing for AI features",
      subtitle: "Watching users do the task the AI will attempt — the research method that surfaces edge cases before engineering does",
      take: "Shadowing observes users performing the target task in real context — workarounds, interruptions, tools used, error recovery — surfacing edge cases and tacit steps no interview reveals.",
      why: "Users omit steps they don't notice. PMs who shadow before spec'ing AI capture the 20% edge cases that cause 80% of production failures — and design escalation paths from real behaviour.",
      paragraphs: [
        [
          s("Shadow for workflow truth, not opinion. "),
          x(
            "Note: systems opened, copy-paste patterns, where they pause, what they distrust, offline workarounds.",
            "5–8 shadows per persona minimum; include worst-case busy contexts.",
          ),
          s(" Record with consent; anonymise for shareable synthesis."),
        ],
        [
          s("Translate observations into automation boundaries. "),
          x(
            "If users always verify against System B, AI must show System B data. If they ask colleague for exceptions, AI needs escalation.",
            "Shadowing output: workflow diagram with 'AI owns' vs 'human owns' lanes.",
          ),
          s(" Shadowing without boundary diagram wastes research."),
        ],
        [
          s("Pair shadowing with edge-case catalogue. "),
          x(
            "Every 'I've never seen that before' moment becomes eval case candidate.",
            "PM prioritises edge cases by frequency observed — not only dramatic stories.",
          ),
          s(" Golden set seed comes from shadow notes."),
        ],
      ],
      examples: [
        {
          title: "Claims adjuster shadowing — tacit verification step",
          body: "Adjusters always opened weather API despite CRM having date field — trust issue. AI design included explicit weather citation. Interviews missed it; shadowing caught in session 2. Prevented 'AI skipped critical check' failure.",
        },
        {
          title: "Developer shadowing for code review bot",
          body: "Devs spent 40% review time on import style — low value. Security pattern hunt was pain. PM scoped AI to security + dependency checks, not general review. Shadowing prevented wrong automation target.",
        },
        {
          title: "Remote shadow via screen recording",
          body: "Enterprise couldn't site-visit. Users recorded Loom of monthly close process. PM synthesised 12 recordings — found undocumented CFO Excel override. Edge case became mandatory human checkpoint in v1.",
        },
      ],
    }),
    buildSection({
      number: "3.6",
      title: "Wizard of Oz prototyping for AI",
      subtitle: "Simulating AI behaviour with humans behind the curtain — validating demand before a model exists",
      take: "Wizard of Oz (WoZ) prototypes present AI UX while humans produce outputs behind the scenes — validating willingness-to-use, task completion value, and workflow fit before model investment.",
      why: "Models are expensive to tune; WoZ is cheap to learn. PMs who WoZ test demand and UX separation avoid building models for flows users abandon in week one.",
      paragraphs: [
        [
          s("WoZ tests product hypothesis, not model quality. "),
          x(
            "Questions: Will users adopt? Does it save time? Where do they distrust? What's acceptable latency?",
            "Human wizard quality should be 'good enough' — if WoZ fails, model won't save it.",
          ),
          s(" Label internal pilots honestly — deceptive WoZ to customers needs ethics review."),
        ],
        [
          s("Design WoZ for measurable outcomes. "),
          x(
            "Track: task completion, time-on-task vs baseline, repeat usage, escalation requests.",
            "Run 2–4 weeks with 15–50 users — enough for signal, small enough to operate manually.",
          ),
          s(" WoZ success criteria mirror production metrics where possible."),
        ],
        [
          s("Graduate from WoZ with explicit gates. "),
          x(
            "Gate example: 60% users request continued access + 25% time saved on task + wizard ops cost < projected API cost.",
            "Failed gate → kill or narrow scope before eng builds pipeline.",
          ),
          s(" WoZ without kill gate becomes permanent crutch."),
        ],
      ],
      examples: [
        {
          title: "HR policy bot WoZ — demand validated",
          body: "Slack bot 'answered' via HR specialist backstage. 68% weekly active among pilot cohort; median 12 min saved per query. PM approved model build. WoZ ops cost $8K/month — proved ROI before GPU spend.",
        },
        {
          title: "WoZ kill — users wanted human anyway",
          body: "Legal contract review WoZ: users submitted but didn't trust any answer without attorney — even perfect human wizard text. Repeat usage 11%. Killed AI route; kept attorney workflow tooling. Saved 6-month build.",
        },
        {
          title: "Hybrid WoZ — model draft, human polish",
          body: "PM used model drafts with human editor behind curtain to test UX latency users would tolerate. Revealed 90-second acceptable, 10-minute not. Informed async UX design before full automation.",
        },
      ],
    }),
    buildSection({
      number: "3.7",
      title: "Opportunity sizing for AI features",
      subtitle: "Estimating the value of automating a task — time saved, error rate reduced, scale unlocked",
      take: "Opportunity sizing quantifies value: hours saved × loaded labour rate, error cost reduction, revenue enabled by scale, and implementation cost — producing a prioritized ROI range, not a precise false precision.",
      why: "AI features compete for the same eng dollars as non-AI work. PMs who size opportunities defend prioritisation to finance and kill pretty ideas with negative ROI.",
      paragraphs: [
        [
          s("Time saved model: frequency × duration × population. "),
          x(
            "500 users × 3 tasks/week × 15 min saved × 50% automation rate = hours saved/week. Apply loaded rate.",
            "Discount optimism — pilot automation rates, not demo rates.",
          ),
          s(" Show assumptions explicitly; finance will challenge them."),
        ],
        [
          s("Error and risk value: cost of mistakes avoided. "),
          x(
            "Compliance errors, rework tickets, churn from bad experience — monetise where possible.",
            "Sometimes error reduction value exceeds labour savings — lead with it in regulated domains.",
          ),
          s(" Risk-adjusted value = savings − expected incident cost."),
        ],
        [
          s("Implementation cost: build, buy, run rate, change management. "),
          x(
            "Include: discovery, labelling, eval, training, support load during rollout, human-in-loop staffing.",
            "Compare 3-year TCO vs benefit — AI projects fail payback when run rate omitted.",
          ),
          s(" Negative ROI at realistic automation rate → backlog deprioritise."),
        ],
      ],
      examples: [
        {
          title: "Support sizing — containment economics",
          body: "2M sessions × 45% target containment × $4 agent cost = $3.6M/year upside. Implementation $900K year-one. PM presented sensitivity at 35% and 55% containment — board approved at base case with gate at 40%.",
        },
        {
          title: "Analyst copy-paste — time saved clear",
          body: "200 analysts × 14 hr/week × 30% automatable × $85/hr loaded = $7.4M/year potential. Build estimate $1.2M. Strong ROI; prioritised over vague 'insights' feature with unmodelled value.",
        },
        {
          title: "ROI kill — automation rate too low",
          body: "WoZ showed only 18% task automation — users edited heavily. ROI negative at realistic rate. PM killed feature despite executive enthusiasm from demo at 90% wizard quality.",
        },
      ],
    }),
    buildSection({
      number: "3.8",
      title: "Competitive intelligence for AI capabilities",
      subtitle: "How to track what models and AI features competitors are shipping without being distracted by every announcement",
      take: "Competitive AI intelligence tracks competitor shipped features against user jobs in your pain map — not every model press release. Maintain a living matrix: capability, target job, claimed metric, your parity status, and differentiation angle.",
      why: "Reactive roadmaping to competitor demos burns quarters. PMs who filter noise through 'does this serve our users' jobs?' avoid parity traps and spot real whitespace.",
      paragraphs: [
        [
          s("Track shipped product, not research blog posts. "),
          x(
            "What can paying customers do today? Pricing, limits, quality signals (reviews, case studies), not benchmark leaderboard scores.",
            "Monthly competitive sweep; quarterly deep dive on top 3 rivals.",
          ),
          s(" PM owns 'so what for our users' column — not eng reading Twitter."),
        ],
        [
          s("Parity vs leapfrog decisions. "),
          x(
            "Table stakes: users expect baseline capability — must match. Differentiation: proprietary data, workflow integration, trust — don't copy, extend.",
            "Ask: 'If we match in 6 months, do we still win on distribution/data?'",
          ),
          s(" Not every competitor feature deserves a ticket."),
        ],
        [
          s("Model vendor roadmap is competitive context too. "),
          x(
            "Provider capability drops may obsolete your build/buy decision — track for discovery refresh, not panic pivots.",
            "Vendor feature ≠ your user need — filter through pain map.",
          ),
          s(" Intelligence feeds discovery backlog refresh, not knee-jerk roadmap."),
        ],
      ],
      examples: [
        {
          title: "Competitor copilot launch — parity triage",
          body: "Rival shipped email copilot. Pain map: only 12% users lived in email — core job was in-app reporting. PM documented parity gap but declined chase; doubled down on in-app narrative generation where 70% time spent.",
        },
        {
          title: "Feature matrix quarterly review",
          body: "PM maintained matrix: 8 competitors × 6 job categories. Revealed whitespace in multi-doc audit trail — no rival strong. Discovery prioritised there vs crowded summarisation market.",
        },
        {
          title: "Vendor announcement filter",
          body: "New 1M context window announced. PM asked: 'Which pain map items need 1M context?' Answer: none in top 20. Skipped emergency architecture review — intelligence without job filter is noise.",
        },
      ],
    }),
    buildSection({
      number: "3.9",
      title: "Internal use cases as discovery ground",
      subtitle: "Why the best first AI features often solve problems your own team has — the dogfooding path to product-market fit",
      take: "Internal dogfooding surfaces real tasks with accessible data, forgiving early users, and fast feedback — ideal first AI features before external launch complexity.",
      why: "External AI launches face sales promises and support scale. PMs who prove value internally build eval culture, training data, and credibility — and often find revenue features staff already rely on.",
      paragraphs: [
        [
          s("Internal users give high-signal feedback fast. "),
          x(
            "Slack channel honesty, same-day iteration, willingness to tolerate rough edges with visible roadmap.",
            "Support, sales ops, engineering docs — common first targets.",
          ),
          s(" Internal success ≠ external PMF — but de-risks technical core."),
        ],
        [
          s("Data and privacy simpler inside the house. "),
          x(
            "Internal logs, wikis, tickets — accessible without customer DPA negotiation.",
            "Training signal from internal use bootstraps external fine-tune later.",
          ),
          s(" Legal still applies — employee data isn't consequence-free."),
        ],
        [
          s("Graduate internal wins with external discovery sprint. "),
          x(
            "Before external launch: re-run suitability, sizing, shadowing on paying users — internal workflow may differ.",
            "Package internal tool as beta with design partner customers.",
          ),
          s(" Dogfooding is phase one, not skip external discovery."),
        ],
      ],
      examples: [
        {
          title: "Support team internal copilot → product",
          body: "Built for tier-2 support searching kbase + past tickets. 40% handle time reduction internal. PM packaged as customer-facing agent with permission layer — external discovery confirmed similar pain in 3 design partners.",
        },
        {
          title: "Sales call summariser — internal only still",
          body: "Sales ops loved internal summariser; external customers had different CRM fields — external shadowing revealed mismatch. PM kept internal tool; built separate external SKU after discovery — avoided wrong launch.",
        },
        {
          title: "Engineering RFC assistant",
          body: "Internal dogfood surfaced hallucination on legacy system names. Fixed retrieval before any customer saw it. PM cited internal incident in launch gate template — dogfooding as eval incubator.",
        },
      ],
    }),
    buildSection({
      number: "3.10",
      title: "PM decision lens: the AI opportunity filter",
      subtitle: "A scoring rubric for prioritising AI feature candidates across impact, feasibility, data availability, and risk",
      take: "Score each AI candidate 1–5 on: user impact (sized ROI), automation suitability, data availability, technical feasibility, strategic differentiation, and risk/regulatory burden. Weight by company stage; threshold for discovery funding vs kill.",
      why: "Without a rubric, prioritisation is loudest voice or latest demo. PMs who run the filter in open workshops produce defensible roadmaps and polite nos to hype.",
      paragraphs: [
        [
          s("Rubric dimensions and weights. "),
          x(
            "Example weights: impact 25%, suitability 20%, data 20%, feasibility 15%, differentiation 10%, risk 10%. Startups weight differentiation higher; enterprises weight risk.",
            "Publish weights — transparency reduces political scoring.",
          ),
          s(" Scores are inputs to conversation, not oracle outputs."),
        ],
        [
          s("Thresholds for next stage investment. "),
          x(
            "Score ≥3.5 weighted → funded discovery (shadow, WoZ). ≥4.0 post-discovery → prototype. <3.0 → backlog or kill.",
            "Mandatory narrative for any dimension scoring 1–2 — mitigation or reject.",
          ),
          s(" PM documents decision in one-page opportunity brief."),
        ],
        [
          s("Review quarterly with new data. "),
          x(
            "Model economics change; data assets grow; regulations shift. Rescore backlog — last year's 2.8 may be this year's 4.1.",
            "Kill items that scored high but failed WoZ — rubric is living.",
          ),
          s(" Opportunity filter ends discovery; engineering planning starts after."),
        ],
      ],
      examples: [
        {
          title: "Workshop scoring — six candidates, two funded",
          body: "PM facilitated cross-functional scoring. Top two: billing dispute assistant (4.2), internal doc Q&A (3.9). Bottom: 'AI analytics dashboard' (2.1) killed with documented low suitability and impact. Team aligned without post-meeting lobbying.",
        },
        {
          title: "Risk dimension blocked hiring use case",
          body: "Resume screening scored high impact but risk=1 (EU AI Act high-risk). Weighted score fell below threshold. PM redirected to human-assist draft mode — rubric forced responsible scope.",
        },
        {
          title: "Rescore after data partnership",
          body: "Vertical fine-tune candidate scored 2.8 on data availability. Signed data partnership — rescore 4.0. Promoted to prototype. Quarterly rescore ritual surfaced opportunity time couldn't see before.",
        },
      ],
    }),
  ],
  quiz: [
    {
      q: "What is the primary failure mode of capability-led AI discovery?",
      options: [
        "It takes too long to interview users.",
        "Technology goes in search of problems — impressive demos without repeated user jobs.",
        "It ignores new model releases.",
        "It requires too much quantitative data.",
      ],
      correct: 1,
      correctFeedback:
        "Right. Capability-first without problem anchor produces solutions users don't repeatedly need.",
      wrongFeedback:
        "Capability-led fails when models hunt for use cases. Re-read sections 3.1 and 3.2.",
    },
    {
      q: "The automation suitability test includes which three questions?",
      options: [
        "Is it trendy, viral, and cheap?",
        "Well-defined task, measurable success, recoverable failure.",
        "Can GPT-4 do it, will VC fund it, will press cover it?",
        "Latency, cost, and parameter count.",
      ],
      correct: 1,
      correctFeedback:
        "Exactly. Definition, measurability, and failure recoverability — before prototyping.",
      wrongFeedback:
        "Suitability gates: well-defined, measurable, recoverable failure. Re-read section 3.4.",
    },
    {
      q: "Wizard of Oz prototyping is primarily used to:",
      options: [
        "Benchmark model accuracy against MMLU.",
        "Validate user demand and workflow fit before building the model.",
        "Replace all user research permanently.",
        "Train production models on human outputs automatically.",
      ],
      correct: 1,
      correctFeedback:
        "Right. WoZ tests whether the product hypothesis works — adoption, time saved, trust — before model investment.",
      wrongFeedback:
        "WoZ validates demand and UX, not final model quality. Re-read section 3.6.",
    },
    {
      kind: "categorize",
      q: "Match each discovery method to its primary strength.",
      categories: ["Pain-point mapping", "User shadowing", "Wizard of Oz", "Opportunity sizing"],
      items: [
        { text: "Quantify frequency × effort across user tasks.", category: 0 },
        { text: "Surface tacit steps and edge cases in real workflows.", category: 1 },
        { text: "Test willingness-to-use before model build.", category: 2 },
        { text: "Estimate ROI and defend prioritisation to finance.", category: 3 },
        { text: "Prioritise rule-bound high-volume work.", category: 0 },
        { text: "Observe workaround behaviour interviews miss.", category: 1 },
      ],
      correctFeedback:
        "Right. Map quantifies candidates; shadowing reveals reality; WoZ validates demand; sizing monetises the decision.",
      wrongFeedback:
        "Each method answers a different discovery question. Re-read sections 3.3–3.7.",
    },
    {
      kind: "order",
      q: "Order the recommended AI discovery sequence.",
      prompt: "Drag from first step to last in a healthy discovery flow.",
      items: [
        "Map user pain points (frequency, effort, structure).",
        "Run automation suitability test on top candidates.",
        "Shadow users and/or run Wizard of Oz validation.",
        "Size opportunity and score with AI opportunity filter.",
        "Choose model path and commit engineering resources.",
      ],
      correctFeedback:
        "Exactly. Problem → suitability → qualitative validation → sizing/scoring → build decision.",
      wrongFeedback:
        "Discovery sequences problem evidence before model commitment. Re-read sections 3.1 and 3.10.",
    },
    {
      q: "The AI opportunity filter rubric should score candidates on:",
      options: [
        "Only competitor parity and press coverage.",
        "Impact, suitability, data, feasibility, differentiation, and risk — with explicit weights.",
        "Model parameter count and GPU brand.",
        "Whether the CEO saw a demo.",
      ],
      correct: 1,
      correctFeedback:
        "Right. Weighted multi-dimensional scoring produces defensible prioritisation and clear kill thresholds.",
      wrongFeedback:
        "Use structured rubric with impact, suitability, data, feasibility, differentiation, risk. Re-read section 3.10.",
    },
  ],
});
