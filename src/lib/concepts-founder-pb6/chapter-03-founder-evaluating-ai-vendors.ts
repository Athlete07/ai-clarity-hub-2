import { buildChapter, buildSection, s, x, sectionWithDiagram } from "../concepts-pb4-helpers";

export const chapter03FounderEvaluatingAiVendors = buildChapter({
  slug: "founder-evaluating-ai-vendors",
  number: 3,
  shortTitle: "Evaluating AI Vendors",
  title: "Evaluating AI Vendors — The Due Diligence Process",
  readingMinutes: 26,
  summary:
    "Most founders evaluate AI vendors on demos. Demos are designed to impress, not inform. Vendor landscape, rigorous RFPs, meaningful pilots, SLA standards, data privacy, pricing traps, and a weighted scorecard before you sign.",
  keyTakeaway:
    "Treat AI vendor selection like hiring a co-founder you cannot easily fire. Run structured evaluation with your data, your edge cases, and your lawyer — not the vendor's demo environment.",
  pmCallout:
    "As a founder: the demo that wowed you used curated inputs, optimal model settings, and a sales engineer behind the curtain. Your job is to design evaluation that fails vendors who cannot survive your real workload.",
  sections: [
    sectionWithDiagram({
      number: "3.1",
      title: "The AI vendor landscape — a founder's map",
      subtitle: "Foundation model providers, infrastructure vendors, vertical AI tools — the categories and key players",
      take: "The AI vendor landscape has four layers: foundation model APIs (OpenAI, Anthropic, Google, Mistral), infrastructure (vector DBs, labelling, observability, GPU cloud), vertical AI SaaS (Harvey, Glean, industry-specific), and systems integrators. Founders who confuse layers buy the wrong product for the job.",
      why: "Buying vertical SaaS when you need an API — or buying an API when you need compliance-certified vertical software — wastes quarters. Layer clarity is the first filter.",
      paragraphs: [
        [
          s("Foundation model APIs are intelligence wholesalers. "),
          x(
            "They sell tokens, embeddings, fine-tuning hosts, and increasingly agents. You own product, evals, and integration.",
            "Substitutable for most application use cases — differentiation is above the API.",
          ),
          s(" Default layer for seed-stage product companies."),
        ],
        [
          s("Infrastructure vendors enable build and operate. "),
          x(
            "Vector databases (Pinecone, Weaviate, pgvector), labelling (Scale, Surge), tracing (LangSmith, Helicone), GPU (CoreWeave, Lambda).",
            "You are assembling a stack — each vendor is a component with its own lock-in profile.",
          ),
          s(" Evaluate infrastructure on operability and exit cost, not feature demos."),
        ],
        [
          s("Vertical AI SaaS sells outcomes, not tokens. "),
          x(
            "Legal, healthcare, sales, and support AI products bundle model, workflow, compliance, and UX. Less control, faster time-to-value in regulated niches.",
            "Right when compliance and domain workflow exceed your team's depth; wrong when your moat is custom workflow on commodity models.",
          ),
          s(" Choose vertical SaaS for speed in regulated niches; APIs for custom product bets."),
        ],
      ],
      examples: [
        {
          title: "Wrong layer — API when SaaS needed",
          body: "Health startup bought raw API for clinical documentation. Six months later still building HIPAA workflow competitors ship in SaaS. Should have evaluated vertical layer first — rebuilt on compliant platform, lost enterprise pipeline.",
        },
        {
          title: "Right layer — API for custom wedge",
          body: "Construction tech startup needed bespoke RAG over proprietary blueprints. Vertical SaaS did not exist. Foundation API + infrastructure stack correct — moat in data and workflow, not vendor brand.",
        },
        {
          title: "Infrastructure sprawl",
          body: "Startup signed five infrastructure vendors in three months — vector DB, tracing, labelling, GPU, gateway. No integration owner. Founder mapped vendor landscape layers and consolidated to three with explicit exit plans.",
        },
      ],
    }, {
      kind: "diagram",
      id: "bl-vendor-evaluation",
      type: "flow",
      title: "Vendor Evaluation Process",
      caption:
        "Requirements → shortlist → golden-set eval → TCO → contract. Run this process on every AI vendor pitch.",
    }),
    sectionWithDiagram({
      number: "3.2",
      title: "What a rigorous AI vendor evaluation looks like",
      subtitle: "Beyond the demo — the technical, commercial, and strategic evaluation process",
      take: "Rigorous evaluation has three tracks running in parallel: technical (your data, your edge cases, your latency requirements), commercial (TCO at 3× volume, contract terms), and strategic (roadmap alignment, competitive risk, lock-in vectors). Demos cover none of these.",
      why: "Founders who skip structured evaluation discover vendor gaps in production — when switching costs are highest and customer trust is on the line.",
      paragraphs: [
        [
          s("Technical track: your data, not theirs. "),
          x(
            "Provide 500+ representative documents, including adversarial edge cases. Measure task completion, not BLEU or demo applause.",
            "Run evals in your environment with your network latency — not vendor's optimised sandbox.",
          ),
          s(" Technical evaluation without your data is marketing."),
        ],
        [
          s("Commercial track: three-year TCO and terms. "),
          x(
            "Model list price, enterprise minimums, overage rates, implementation services, and internal integration FTE.",
            "Include exit costs: migration, re-embedding, contract breakage.",
          ),
          s(" Year-one price is the teaser — diligence the full term sheet."),
        ],
        [
          s("Strategic track: vendor as partner and competitor. "),
          x(
            "Roadmap alignment: will they deprecate what you build on? Vertical expansion risk: will they enter your market?",
            "Reference calls with customers who failed — not just logo slides.",
          ),
          s(" Strategic evaluation asks 'what happens when they win without us.'"),
        ],
      ],
      examples: [
        {
          title: "Demo vs reality — 40-point gap",
          body: "Vendor demo showed 94% accuracy on sample invoices. Founder's eval on 800 real invoices: 54% — layout variations broke OCR pipeline. Structured technical track caught gap before $200K annual contract.",
        },
        {
          title: "Commercial surprise — enterprise minimum",
          body: "Startup modelled $3K/month API usage. Vendor enterprise tier required $150K annual minimum for HIPAA BAA and no-training clause. Commercial track surfaced gap before legal review began.",
        },
        {
          title: "Strategic reference call",
          body: "Reference customer revealed vendor deprecated fine-tune platform with 60-day notice — not in sales deck. Strategic track reference calls are negative screening, not cheerleading.",
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
      number: "3.3",
      title: "The vendor RFP for AI — what to ask",
      subtitle: "The questions that reveal real capability vs polished sales engineering",
      take: "An AI vendor RFP must ask: eval methodology on customer data, model update notification periods, data training policies, latency percentiles at your volume, fine-tune portability, subprocessors, incident history, and what happens on termination. Vague answers are answers.",
      why: "Sales engineers excel at confident ambiguity. Written RFP responses create a paper trail for contract negotiation and diligence.",
      paragraphs: [
        [
          s("Technical RFP questions expose demo theatre. "),
          x(
            "Provide task completion metrics on our sample set. What is p99 latency at our projected QPS? How do you notify us of model behaviour changes? Can we pin model versions?",
            "Ask for failure case catalogue — what workloads do you recommend against?",
          ),
          s(" Vendors who cannot answer specifically are not enterprise-ready."),
        ],
        [
          s("Data and compliance RFP questions protect the moat. "),
          x(
            "Do you train on customer data by default? List all subprocessors and regions. Provide sample DPA and deletion SLA. Who owns fine-tune weights?",
            "Ask for SOC 2 Type II, penetration test summary, and breach notification timeline.",
          ),
          s(" Compliance answers belong in writing before pilot, not after contract."),
        ],
        [
          s("Commercial RFP questions prevent bill shock. "),
          x(
            "Price at 1×, 3×, 10× volume. Rate lock period. Overage pricing. Implementation and support fees. Exit assistance and data export format.",
            "Ask for three customer references in your vertical — including one churned customer if possible.",
          ),
          s(" If pricing is 'custom' without brackets, assume worst case."),
        ],
      ],
      examples: [
        {
          title: "Model pinning question",
          body: "RFP asked: 'Can we pin model version for 12 months?' Vendor A: yes with enterprise tier. Vendor B: 'we continuously improve models' — no pin. Founder chose A for production stability; B better for research, not SLA product.",
        },
        {
          title: "Training policy reveal",
          body: "RFP data question: 'Train on customer prompts?' Vendor default terms said yes; enterprise addendum said no for +$80K/year. Commercial and legal tracks converged — total cost not list price.",
        },
        {
          title: "Churned reference gold",
          body: "Churned customer revealed vendor support degraded post-Series C and migration took five months. RFP reference process worth more than technical demo.",
        },
      ],
    }),
    buildSection({
      number: "3.4",
      title: "Pilot design — how to run a meaningful proof of concept",
      subtitle: "The pilot structure that generates real signal vs the pilot that generates a successful demo",
      take: "A meaningful pilot: 4–6 weeks, your production-adjacent data, defined success metrics agreed upfront, edge case suite included, engineering integration (not sandbox login), executive readout with pass/fail criteria, and exit plan if pilot fails. Pilots without fail criteria are extended demos.",
      why: "Vendors love pilots that never end. Founders love pilots that confirm decisions already made. Structured pilots with kill criteria protect runway.",
      paragraphs: [
        [
          s("Define success metrics before the pilot starts. "),
          x(
            "Example: ≥85% task completion on 300-case golden set, p95 latency <2s, zero PII leakage in logging audit.",
            "Metrics must be measurable by your team — not vendor-reported dashboards only.",
          ),
          s(" No metrics, no pilot — only a paid demo."),
        ],
        [
          s("Include adversarial and edge cases deliberately. "),
          x(
            "Long documents, multilingual input, malformed PDFs, ambiguous queries, regulated content — the cases demos skip.",
            "Allocate 20–30% of pilot dataset to known hard cases from support tickets.",
          ),
          s(" Edge cases are where vendor quality and your liability live."),
        ],
        [
          s("Integration depth matches production depth. "),
          x(
            "Pilot through your auth, your network, your logging — not vendor-hosted UI.",
            "Assign internal engineering owner; vendor SE is support, not your PM.",
          ),
          s(" Sandbox pilots lie about latency, security, and operability."),
        ],
      ],
      examples: [
        {
          title: "Pilot with kill criteria",
          body: "Founder set pilot fail threshold: <80% task completion = no contract. Vendor hit 76% on multilingual support tickets. Pilot killed in week 5 — saved $180K and six months integration. Kill criteria worked.",
        },
        {
          title: "Extended demo trap",
          body: "Competitor ran 4-month 'pilot' with no metrics — vendor happy, internal team exhausted, still no production integration. Structured 6-week pilot with engineering owner replaced ambiguity.",
        },
        {
          title: "Edge case revelation",
          body: "Pilot included 50 scanned handwritten forms — vendor accuracy dropped from 91% to 43%. Edge case suite caught failure mode demos hid. Narrowed scope or changed vendor before contract.",
        },
      ],
    }),
    buildSection({
      number: "3.5",
      title: "SLA standards for AI products — what to demand",
      subtitle: "Uptime, latency, accuracy floors, and degradation response — the contractual minimums",
      take: "AI SLAs must cover API uptime (99.9%+ for enterprise), latency percentiles at your load, model version notification windows, accuracy or quality floors on agreed eval sets, incident response times, and credits for breach. Generic cloud SLAs miss model behaviour changes.",
      why: "When AI is core product, model degradation is downtime. Founders who accept uptime SLAs without quality SLAs discover silent regressions with no contractual remedy.",
      paragraphs: [
        [
          s("Uptime and latency SLAs are table stakes. "),
          x(
            "Define measurement point: vendor API edge vs your application. Specify p50/p95/p99 at contracted QPS.",
            "Include scheduled maintenance windows and notification requirements.",
          ),
          s(" Latency SLA without load specification is meaningless."),
        ],
        [
          s("Quality SLAs are harder — and more important. "),
          x(
            "Agree on golden eval set and minimum task completion or accuracy score. Model updates trigger re-eval window before automatic acceptance.",
            "Degradation response: vendor must notify within 72 hours of material behaviour change.",
          ),
          s(" Quality SLA turns silent regression into contractual event."),
        ],
        [
          s("Credits and termination triggers. "),
          x(
            "Service credits for uptime breach: 10–25% monthly fee typical. Termination for convenience if quality SLA missed twice in 12 months.",
            "Credits are weak remedy — termination rights are real leverage.",
          ),
          s(" SLAs without teeth are marketing paragraphs."),
        ],
      ],
      examples: [
        {
          title: "Quality SLA negotiation",
          body: "Enterprise customer required 90% task completion on agreed eval set. Vendor initially offered uptime-only SLA. Founder added quality floor + re-eval on model updates — vendor accepted at enterprise tier. Silent regression now contractual.",
        },
        {
          title: "Latency miss — credit vs churn",
          body: "p95 latency breached SLA for three months — vendor credits $8K. Customer churn cost $120K ARR. Founder learned credits do not replace quality; termination rights matter for core dependencies.",
        },
        {
          title: "Model update notification",
          body: "Vendor shipped model update without notice; accuracy dropped 8%. New contract clause: 30-day notice + opt-out period for material changes. AI SLA must cover behaviour, not only packets.",
        },
      ],
    }),
    buildSection({
      number: "3.6",
      title: "Data privacy in vendor contracts",
      subtitle: "Who owns your data, who can train on it, and what happens when the contract ends",
      take: "Data privacy clauses must specify: you retain ownership, vendor cannot train on your data without explicit opt-in, subprocessors listed and approved, data residency, deletion within 30 days of termination, and breach notification within 72 hours. Default vendor terms usually favour the vendor.",
      why: "Your proprietary prompts and customer data are moat and liability simultaneously. Weak data clauses leak moat to vendor and expose you to customer lawsuits.",
      paragraphs: [
        [
          s("Training opt-out is non-negotiable for proprietary data. "),
          x(
            "Default: vendor may train on inputs. Enterprise: no-training clause — often costs premium tier.",
            "Clarify: does opt-out cover embeddings, fine-tunes, and support logs?",
          ),
          s(" 'Trust us' is not a data strategy."),
        ],
        [
          s("Subprocessors and residency are diligence requirements. "),
          x(
            "List every subprocessor and country. GDPR, HIPAA, and sector rules may prohibit certain flows.",
            "Customer DPAs flow down to vendor — your vendor must support your promises.",
          ),
          s(" Data residency mismatch kills enterprise deals in EU and health."),
        ],
        [
          s("Termination data rights prevent hostage situations. "),
          x(
            "On exit: export all data, fine-tune weights, and logs in standard formats within 30 days. Certified deletion after export.",
            "Without export rights, migration becomes rebuild.",
          ),
          s(" Negotiate termination data rights when vendor wants your business — not after."),
        ],
      ],
      examples: [
        {
          title: "Training on prompts — default trap",
          body: "Startup sent customer legal documents to API under standard terms — vendor could train on inputs. Competitor with enterprise no-training clause won regulated account. Data clause was commercial disadvantage.",
        },
        {
          title: "Subprocessor surprise",
          body: "Due diligence discovered vendor used offshore subprocessor not in DPA. EU customer blocked deal until subprocessors amended. Privacy review before pilot prevents quarter-lost deals.",
        },
        {
          title: "Export clause saves migration",
          body: "Termination export delivered fine-tune artifacts and 2 years of logs in JSON — migration in seven weeks. Peer without export clause rebuilt for five months.",
        },
      ],
    }),
    buildSection({
      number: "3.7",
      title: "Pricing model evaluation",
      subtitle: "Per-token, per-call, per-seat, and custom enterprise — the models and their traps",
      take: "AI pricing models: per-token (scales with usage, unpredictable), per-call (simpler unit economics), per-seat (predictable, may cap value), enterprise custom (minimums, opaque overages). Evaluate at 1×, 3×, and 10× projected volume — and model viral spike scenarios.",
      why: "The cheapest vendor at pilot volume is often the most expensive at scale. Pricing model traps destroy gross margin after product-market fit.",
      paragraphs: [
        [
          s("Per-token pricing rewards efficiency — and punishes growth. "),
          x(
            "Input and output tokens priced separately. Long contexts and verbose models explode cost.",
            "Mitigation: prompt compression, caching, model routing, context window discipline.",
          ),
          s(" Token pricing requires COGS owner on engineering team."),
        ],
        [
          s("Enterprise custom pricing hides cliffs. "),
          x(
            "Annual minimums, bundled seats, overage at worse rates than list, implementation fees.",
            "Ask for written quote at 3× and 10× volume — verbal discounts do not survive leadership change.",
          ),
          s(" Custom pricing without brackets is unbounded risk."),
        ],
        [
          s("Per-seat vs usage mismatch. "),
          x(
            "Per-seat works when value correlates with users. Per-token when value correlates with automation volume.",
            "Hybrid models need spreadsheet — seat floor plus token overage is common enterprise structure.",
          ),
          s(" Match pricing model to how your customers capture value."),
        ],
      ],
      examples: [
        {
          title: "Token cliff at growth",
          body: "Startup at $8K/month API spend hit $67K at 5× user growth — same pricing tier. Renegotiated enterprise commit with rate cap. Pricing evaluation at 10× would have surfaced cliff pre-signing.",
        },
        {
          title: "Per-seat vs per-token crossover",
          body: "Heavy automation product: per-seat vendor looked cheap at 50 users, per-token cheaper at 500 users automating thousands of tasks daily. Pricing model evaluation saved 40% COGS at projected scale.",
        },
        {
          title: "Implementation fee surprise",
          body: "Enterprise quote excluded $45K implementation and $18K/year premium support. TCO evaluation caught $63K year-one gap vs competitor. Commercial track pays for itself.",
        },
      ],
    }),
    buildSection({
      number: "3.8",
      title: "Founder decision lens: the AI vendor scorecard",
      subtitle: "The weighted evaluation framework to use before signing any AI infrastructure contract",
      take: "Before signing, complete a weighted scorecard: technical fit (30%), commercial TCO (25%), data/compliance (20%), strategic risk (15%), operational fit (10%). Minimum passing score 70/100 with no category below 50. Below bar = no sign or renegotiate.",
      why: "Scorecards replace gut feel and sales charisma with comparable decisions across vendors. They also document diligence for board and investors.",
      paragraphs: [
        [
          s("Score each category with evidence, not impressions. "),
          x(
            "Technical: pilot metrics on your golden set. Commercial: 3-year TCO spreadsheet. Compliance: written DPA answers. Strategic: reference calls and roadmap review.",
            "Attach evidence links to scorecard — demo feelings do not count.",
          ),
          s(" Evidence-backed scoring survives internal debate."),
        ],
        [
          s("Weight categories by your stage and vertical. "),
          x(
            "Regulated vertical: compliance weight 35%, technical 25%. Seed speed bet: technical and time-to-value 40%. Enterprise ACV: operational and SLA 25%.",
            "Adjust weights explicitly — default weights may not fit your bet.",
          ),
          s(" Custom weights beat generic templates."),
        ],
        [
          s("Pass/fail gates and signatory discipline. "),
          x(
            "Founder signs only above 70 overall with no category below 50. Dissenting CTO score triggers executive session, not override by CEO.",
            "Store signed scorecards in data room with contract.",
          ),
          s(" A scorecard without signatory rules is advisory fiction."),
        ],
      ],
      examples: [
        {
          title: "Scorecard killed bad contract",
          body: "Vendor scored 88 on demo impression but 42 on compliance (no HIPAA BAA, training on by default). Category floor failed signatory rule. Second vendor scored 76 overall, all categories above 50 — signed.",
        },
        {
          title: "Board requested scorecard",
          body: "Series A board required vendor scorecards for any contract >$100K/year. Founder presented three scored evaluations — approved $280K spend in one meeting. Process signal mattered as much as numbers.",
        },
        {
          title: "Weight adjustment — health vertical",
          body: "Default scorecard underweighted compliance. Founder adjusted to 35% compliance weight — vendor that won demo lost on DPA. Weight customization prevented liability-heavy choice.",
        },
      ],
    }),
  ],
  quiz: [
    {
      q: "You need HIPAA-compliant clinical documentation AI with minimal engineering. Which vendor layer should you evaluate first?",
      options: [
        "Foundation model API only",
        "Vertical AI SaaS with healthcare compliance bundle",
        "GPU cloud provider",
        "Social media API",
      ],
      correct: 1,
      correctFeedback:
        "Right. Regulated vertical + speed → vertical SaaS layer first. Raw API shifts compliance burden to you.",
      wrongFeedback:
        "Match vendor layer to compliance and speed needs. Re-read section 3.1.",
    },
    {
      q: "Vendor demo shows 94% accuracy. Your 800-document eval shows 54%. What evaluation mistake did you almost make?",
      options: [
        "Trusting demo without technical track on your data",
        "Skipping commercial track",
        "Hiring too fast",
        "Using open source",
      ],
      correct: 0,
      correctFeedback:
        "Right. Demos use curated inputs. Technical evaluation on your data is non-negotiable.",
      wrongFeedback:
        "Structured technical evaluation uses your edge cases, not vendor sandbox. Re-read sections 3.2–3.4.",
    },
    {
      kind: "categorize",
      q: "Sort each RFP topic to the correct evaluation track.",
      categories: ["Technical", "Commercial", "Strategic"],
      items: [
        { text: "p99 latency at projected QPS on our sample set.", category: 0 },
        { text: "Price at 1×, 3×, and 10× volume with rate lock.", category: 1 },
        { text: "Reference call with churned customer in our vertical.", category: 2 },
        { text: "Model version pinning and deprecation notice period.", category: 0 },
        { text: "Exit data export format and termination assistance fees.", category: 1 },
        { text: "Vendor roadmap risk of entering our product category.", category: 2 },
      ],
      correctFeedback:
        "Right. Technical = capability, commercial = money and terms, strategic = long-term vendor relationship risk.",
      wrongFeedback:
        "Three parallel tracks: technical, commercial, strategic. Re-read section 3.2.",
    },
    {
      q: "Meaningful pilot design must include which element?",
      options: [
        "Vendor-hosted sandbox login only",
        "Predefined pass/fail metrics on your data including edge cases",
        "Unlimited duration until it feels right",
        "CEO attendance at demo only",
      ],
      correct: 1,
      correctFeedback:
        "Right. Metrics, your data, edge cases, kill criteria — pilots are tests, not extended demos.",
      wrongFeedback:
        "Pilots need success metrics and fail criteria upfront. Re-read section 3.4.",
    },
    {
      q: "AI SLA for core product should include what beyond API uptime?",
      options: [
        "Nothing — uptime is enough",
        "Quality floors on agreed eval set and model update notification",
        "Only marketing commitments",
        "Founder's verbal assurance",
      ],
      correct: 1,
      correctFeedback:
        "Right. Model behaviour changes are AI downtime. Quality SLA + update notice are essential.",
      wrongFeedback:
        "Uptime without quality misses silent regression. Re-read section 3.5.",
    },
    {
      kind: "order",
      q: "Order vendor scorecard process (first step at top).",
      prompt: "Drag to arrange the correct sequence.",
      items: [
        "Run parallel technical, commercial, strategic evaluation with evidence.",
        "Weight categories for your stage and vertical.",
        "Score vendors with category floor rules (no category below 50).",
        "Founder sign only if overall ≥70 and store in data room.",
      ],
      correctFeedback:
        "Right. Evaluate → weight → score with floors → sign with discipline.",
      wrongFeedback:
        "Evidence first, then weights, then scoring with pass/fail gates. Re-read section 3.8.",
    },
  ],
});
