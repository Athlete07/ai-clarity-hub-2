import { buildChapter, buildSection, s, x, sectionWithDiagram } from "../concepts-pb4-helpers";

export const chapter05AiDueDiligence = buildChapter({
  slug: "founder-ai-due-diligence",
  number: 5,
  shortTitle: "AI Due Diligence",
  title: "Due Diligence — What Investors Will Find",
  readingMinutes: 24,
  summary:
    "Everything surfaces in due diligence — technical, data, liability, and team reviews, plus the data room and self-audit to run six months before you raise.",
  keyTakeaway:
    "Investors hire specialists to find what you did not disclose. Technical architecture, data provenance, AI liability, and team capability all get examined. Pre-empt findings with a six-month self-audit — or accept valuation adjustments at the term sheet.",
  pmCallout:
    "As a founder: run the same diligence on yourself that investors will run on you. If you would not invest given what you find, fix it before you pitch — not after the term sheet.",
  sections: [
    sectionWithDiagram({
      number: "5.1",
      title: "Technical due diligence for AI companies — what investors hire firms to find",
      subtitle: "Model architecture review, data provenance, infrastructure costs, team capability assessment",
      take: "Technical diligence examines architecture reality vs pitch claims: model stack, eval rigour, loop implementation, infrastructure costs at scale, and whether the team can execute the roadmap. Specialists find gaps founders assumed would not be checked.",
      why: "Term sheets are conditional on technical diligence. Surprises here reprice or kill deals. Founders who pre-run technical review control outcomes.",
      paragraphs: [
        [
          s("Diligence firms map your actual stack against your claims. "),
          x(
            "They review code, model cards, eval notebooks, deployment pipelines, and cost models.",
            "'Proprietary model' that is API prompts gets flagged immediately.",
          ),
          s(" Prepare an architecture doc with owned vs rented components labelled honestly."),
        ],
        [
          s("Eval rigour is a focal point. "),
          x(
            "Held-out test sets, online/offline metric alignment, regression tests, and model versioning practices are reviewed.",
            "No eval harness means no evidence of improvement — a major risk flag.",
          ),
          s(" Share eval methodology proactively in the data room."),
        ],
        [
          s("Infrastructure cost at scale is modelled independently. "),
          x(
            "Diligence teams project your API bill at 10x usage against your pricing. Margin collapse triggers valuation adjustments.",
            "Cost model spreadsheets are as important as architecture diagrams.",
          ),
          s(" Include sensitivity analysis: pricing +50%, usage +10x."),
        ],
      ],
      examples: [
        {
          title: "Architecture mismatch — valuation adjustment",
          body: "Diligence found 'custom ML pipeline' was Zapier plus OpenAI API. Valuation adjusted down 30%. Honest architecture doc upfront would have set correct expectations at term sheet.",
        },
        {
          title: "Eval harness — diligence accelerator",
          body: "A company provided eval notebooks, held-out sets, and monthly regression reports in the data room. Technical diligence completed in one week with no flags. Preparation shortened time-to-close.",
        },
        {
          title: "Cost model stress test",
          body: "Diligence modelled inference costs at 10x scale and found gross margin dropped to 38%. The company presented a routing roadmap that recovered margin to 65%. Transparency preserved the deal; hiding would have killed it.",
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
      number: "5.2",
      title: "Data due diligence — the questions about your data you must be able to answer",
      subtitle: "Where it came from, who owns it, whether consent exists, and what happens if it disappears",
      take: "Data diligence asks: provenance, ownership, consent, exclusivity, quality, labelling methodology, and deletion rights. Weak answers unwind the data moat narrative and can trigger legal holdbacks.",
      why: "Data is your claimed moat. If diligence cannot verify it, the premium collapses. Data problems are the most common AI deal-killers after technical gaps.",
      paragraphs: [
        [
          s("Provenance and consent are non-negotiable. "),
          x(
            "For every data source: how acquired, legal basis, user consent for training, third-party licence terms, and geographic restrictions.",
            "Scraped data without rights is a liability, not an asset.",
          ),
          s(" Maintain a data inventory with legal status per source."),
        ],
        [
          s("Ownership and exclusivity must be documented. "),
          x(
            "Can you train on it? Can you sublicense? What happens when a user deletes their account?",
            "Enterprise contracts often limit training rights — diligence reads customer MSAs.",
          ),
          s(" GDPR and purpose limitation apply even at seed stage."),
        ],
        [
          s("Quality and labelling methodology are verified. "),
          x(
            "Random sample review of labels, inter-annotator agreement, and bias in training sets.",
            "Volume without quality is discounted. Mislabelled data is a silent model risk.",
          ),
          s(" Provide labelling guidelines and quality metrics in the data room."),
        ],
      ],
      examples: [
        {
          title: "Consent gap — deal pause",
          body: "Diligence found user ToS did not clearly cover model training on uploads. Legal required ToS amendment and 60-day user notice before close. Six-month self-audit would have caught this pre-term-sheet.",
        },
        {
          title: "Enterprise MSA restriction",
          body: "A company's largest customer MSA prohibited training on customer data — contradicting the moat pitch. Diligence discovered the conflict. The company renegotiated the MSA before close — delaying the round three months.",
        },
        {
          title: "Data inventory impresses investors",
          body: "A founder provided a spreadsheet: source, volume, legal basis, consent artifact, exclusivity, refresh cadence. Diligence passed in days. Operational documentation signaled maturity.",
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
      number: "5.3",
      title: "AI liability due diligence",
      subtitle: "What legal exposure exists in your AI outputs — the review investors do before closing",
      take: "Liability diligence reviews: output risk by vertical, terms of service, disclaimers, human oversight design, bias testing, regulatory classification, and insurance. Harmful outputs create legal exposure that investors price as holdbacks or pass reasons.",
      why: "AI liability is no longer theoretical. Lawsuits, regulatory actions, and enterprise procurement requirements make this a standard diligence workstream.",
      paragraphs: [
        [
          s("Vertical determines liability exposure. "),
          x(
            "Healthcare, finance, hiring, and legal advice carry higher harm potential than marketing copy generation.",
            "Diligence maps your use case to regulatory tiers — EU AI Act, sector regulators, employment law.",
          ),
          s(" Honest risk classification beats surprise classification in diligence."),
        ],
        [
          s("Terms of service and disclaimers are reviewed for enforceability. "),
          x(
            "Generic 'AI may be wrong' disclaimers may not protect in high-risk applications.",
            "Human oversight design, escalation paths, and prohibited use cases must align with ToS.",
          ),
          s(" Have counsel review AI-specific terms before fundraising."),
        ],
        [
          s("Bias and harm testing documentation is expected. "),
          x(
            "Red-team results, bias evals on protected classes, and incident response plans are increasingly standard requests.",
            "No documentation means assumed unmanaged risk.",
          ),
          s(" Responsible AI docs are fundraising assets in regulated enterprise sales."),
        ],
      ],
      examples: [
        {
          title: "Hiring AI — bias diligence",
          body: "An AI recruiting tool faced EEOC-relevant diligence: disparate impact testing, audit trails, and human review for adverse actions. Missing tests delayed close until a third-party audit completed.",
        },
        {
          title: "Liability insurance as close condition",
          body: "A medical documentation AI closed with a requirement for AI liability insurance within 90 days of funding. The founder had researched carriers pre-diligence — avoiding a last-minute scramble.",
        },
        {
          title: "Incident response plan — trust signal",
          body: "A company included a one-page AI incident response plan in the data room: detect, contain, notify, remediate. Investors cited it as evidence of operational maturity in a high-risk vertical.",
        },
      ],
    }),
    buildSection({
      number: "5.4",
      title: "Team due diligence for AI companies",
      subtitle: "Why investors reference-check AI technical leads differently from other engineering hires",
      take: "AI team diligence verifies: relevant shipped experience, ownership of eval and production systems, ability to close the feedback loop, and honesty about capability limits. Reference checks focus on execution, not credentials.",
      why: "AI startups live or die on technical execution. Investors reference-check AI leads harder than typical engineering hires because the gap between pitch and reality is often a people problem.",
      paragraphs: [
        [
          s("References probe shipped AI products, not papers. "),
          x(
            "Did they ship models to production? Own eval frameworks? Handle model failures? Close feedback loops?",
            "Publication history matters for research companies — not for most application-layer startups.",
          ),
          s(" Prepare references who can speak to production execution."),
        ],
        [
          s("Key-person risk is explicitly assessed. "),
          x(
            "If one engineer holds all ML knowledge with no documentation, diligence flags bus-factor risk.",
            "Investors may require hiring or knowledge transfer as conditions.",
          ),
          s(" Document architecture, eval methodology, and runbooks before diligence."),
        ],
        [
          s("Founder–technical lead alignment is tested. "),
          x(
            "References are asked whether the CEO understands AI limits and supports honest external communication.",
            "Misalignment between founder overselling and technical reality is a red flag.",
          ),
          s(" Align narrative internally before references are called."),
        ],
      ],
      examples: [
        {
          title: "Reference reveal — bus factor",
          body: "References revealed the sole ML engineer built the entire pipeline with no documentation. Diligence required hiring a second senior ML engineer as a close condition. The founder had planned the hire — condition was acceptable.",
        },
        {
          title: "Execution reference — conviction boost",
          body: "A former manager confirmed the AI lead shipped three production model iterations with documented override reduction. Reference call became a conviction driver in the IC memo.",
        },
        {
          title: "Overselling misalignment — deal risk",
          body: "A reference mentioned the CEO pressured the team to claim higher accuracy than evals supported. Investor paused for founder–CTO alignment conversation. Internal narrative stress test would have prevented the surprise.",
        },
      ],
    }),
    buildSection({
      number: "5.5",
      title: "The due diligence data room for AI companies",
      subtitle: "What to prepare beyond the standard financial and legal documents",
      take: "AI data rooms extend beyond financials and cap table: architecture docs, model cards, eval reports, data inventory, labelling guidelines, loop documentation, cost models, vendor contracts, AI ToS, bias/red-team reports, and incident response plans.",
      why: "A complete AI data room accelerates diligence and signals maturity. Missing standard AI artifacts triggers scepticism and delay.",
      paragraphs: [
        [
          s("Technical appendix: architecture, model cards, eval history. "),
          x(
            "Include versioned model releases with metric deltas, held-out eval methodology, and regression test results.",
            "Investors forward this to technical diligence firms — make their job easy.",
          ),
          s(" Organise by date with clear version labels."),
        ],
        [
          s("Data appendix: inventory, consent, labelling. "),
          x(
            "Data source spreadsheet, sample labelling guidelines, quality metrics, and deletion procedures.",
            "Customer MSAs affecting training rights included explicitly.",
          ),
          s(" Legal and technical data docs should tell the same story."),
        ],
        [
          s("Commercial and risk appendix: costs, vendors, liability. "),
          x(
            "Inference cost model, vendor contracts with data/training clauses, AI-specific ToS, insurance quotes, regulatory classification memo.",
            "Completeness reduces back-and-forth and protects valuation.",
          ),
          s(" Update the data room monthly — not in a frantic pre-close sprint."),
        ],
      ],
      examples: [
        {
          title: "AI data room checklist — one-week diligence",
          body: "A company provided a 40-document AI data room organised in technical, data, and risk folders. Diligence completed in one week. The founder maintained the room since seed.",
        },
        {
          title: "Missing model cards — three-week delay",
          body: "A Series A company had no model cards or eval history. Diligence paused three weeks while the team retroactively documented six months of releases. Monthly maintenance would have prevented the scramble.",
        },
        {
          title: "Vendor contract red flags surfaced early",
          body: "Data room included OpenAI enterprise terms showing training opt-out. Investor confirmed data protection posture without extra legal review. Proactive inclusion accelerated close.",
        },
      ],
    }),
    buildSection({
      number: "5.6",
      title: "Founder decision lens: pre-empting due diligence findings",
      subtitle: "The self-audit to run six months before you raise — finding your own problems before investors do",
      take: "Six months before fundraising, run a full self-audit: hire a technical diligence consultant, conduct legal data review, red-team your product, reference-check your own claims, and fix findings. Discovering problems yourself preserves valuation and credibility.",
      why: "Self-audit is cheaper than term sheet repricing. Founders who pre-empt findings enter diligence with confidence; founders who hide findings get caught.",
      paragraphs: [
        [
          s("Engage external technical diligence early. "),
          x(
            "Fractional CTOs and diligence firms run the same playbook as investors. Budget $15–50K for a pre-diligence review.",
            "Findings become a fix roadmap with priorities — not surprises.",
          ),
          s(" Fix critical flags before booking partner meetings."),
        ],
        [
          s("Run legal and data audits in parallel. "),
          x(
            "Counsel reviews ToS, data inventory, customer MSAs, and regulatory classification. Fix consent gaps and training rights conflicts.",
            "Legal findings are slower to fix — start early.",
          ),
          s(" Align legal and technical data narratives before the data room opens."),
        ],
        [
          s("Red-team narrative and product claims. "),
          x(
            "Internal team attacks pitch claims. External red-team probes failure modes. Reference-check your own AI lead.",
            "Document fixes and mitigations. Enter fundraise with a 'diligence findings resolved' appendix if material issues were found and fixed.",
          ),
          s(" Transparency about found-and-fixed issues builds more trust than hiding."),
        ],
      ],
      examples: [
        {
          title: "Pre-diligence consultant — $30K well spent",
          body: "A founder spent $30K on pre-diligence review. Findings: missing eval harness, unclear ToS training rights, no cost model. Four months of fixes followed. Series A closed at target pre-money with one-week diligence.",
        },
        {
          title: "Self-audit discovery — honest reprice",
          body: "Self-audit found data moat was weaker than pitched. Founder lowered pre-money expectations before meetings, presented honest tiering, and closed without diligence surprises. Credibility preserved for future rounds.",
        },
        {
          title: "Six-month diligence calendar",
          body: "One CEO mapped: month -6 technical audit, -5 legal data review, -4 red-team, -3 fixes, -2 data room assembly, -1 partner meetings. Fundraise became execution of a plan — not a hope.",
        },
      ],
    }),
  ],
  quiz: [
    {
      q: "What do technical diligence firms primarily verify for AI companies?",
      options: [
        "Office layout and team social events.",
        "Architecture reality vs claims, eval rigour, loop implementation, and cost at scale.",
        "Number of Twitter followers.",
        "Choice of programming language only.",
      ],
      correct: 1,
      correctFeedback:
        "Right. Technical diligence maps actual stack, evals, loops, and economics against the pitch.",
      wrongFeedback:
        "Re-read section 5.1. Diligence examines architecture, evals, costs, and team execution.",
    },
    {
      kind: "categorize",
      q: "Sort each diligence workstream into its primary focus area.",
      categories: ["Data diligence", "Liability diligence", "Team diligence"],
      items: [
        { text: "Consent chains and training rights on user uploads.", category: 0 },
        { text: "Bias testing and incident response documentation.", category: 1 },
        { text: "Reference checks on production AI shipping experience.", category: 2 },
        { text: "Data source inventory with legal basis per source.", category: 0 },
        { text: "EU AI Act risk classification for your product.", category: 1 },
        { text: "Key-person risk and ML documentation practices.", category: 2 },
      ],
      correctFeedback:
        "Right. Data, liability, and team are distinct diligence tracks — all standard for AI companies.",
      wrongFeedback:
        "Re-read sections 5.2–5.4 for what each diligence workstream examines.",
    },
    {
      q: "What is the most common consequence of data provenance gaps in AI diligence?",
      options: [
        "Automatic valuation increase.",
        "Moat narrative collapse, legal holdbacks, or deal delay/kill.",
        "Faster close with fewer questions.",
        "No impact — data is never reviewed.",
      ],
      correct: 1,
      correctFeedback:
        "Right. Data problems are among the most common AI deal-killers after technical gaps.",
      wrongFeedback:
        "Re-read section 5.2. Provenance, consent, and ownership are heavily diligenced.",
    },
    {
      q: "What should an AI company data room include beyond standard financial and legal docs?",
      options: [
        "Only the pitch deck and cap table.",
        "Architecture docs, model cards, eval reports, data inventory, cost models, vendor contracts, and liability docs.",
        "Employee favourite movies.",
        "Marketing brand guidelines only.",
      ],
      correct: 1,
      correctFeedback:
        "Right. AI data rooms require technical, data, and risk appendices.",
      wrongFeedback:
        "Re-read section 5.5 for the complete AI data room checklist.",
    },
    {
      kind: "order",
      q: "Order the six-month pre-diligence self-audit sequence.",
      prompt: "Drag to arrange first step (top) to last (bottom).",
      items: [
        "Engage external technical diligence review.",
        "Run parallel legal and data audits.",
        "Red-team product and narrative claims.",
        "Fix critical findings and assemble data room.",
        "Begin partner meetings with confidence.",
      ],
      correctFeedback:
        "Exactly. Pre-empt findings before investors find them. Re-read section 5.6.",
      wrongFeedback:
        "Self-audit flows: technical review → legal/data → red-team → fix → fundraise. Re-read section 5.6.",
    },
    {
      q: "Why do investors reference-check AI technical leads differently from typical engineers?",
      options: [
        "They do not — references are identical.",
        "AI execution gap between pitch and reality is often a people problem — they probe shipped production AI experience.",
        "Only academic citations matter.",
        "References are optional for AI companies.",
      ],
      correct: 1,
      correctFeedback:
        "Right. References focus on production execution, loop ownership, and founder alignment.",
      wrongFeedback:
        "Re-read section 5.4. AI team diligence emphasises shipped products and execution honesty.",
    },
  ],
});
