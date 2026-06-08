import { buildChapter, buildSection, s, x } from "../concepts-pb4-helpers";

export const chapter06AiPrdsSpecs = buildChapter({
  slug: "pb7-ai-prds-specs",
  number: 6,
  shortTitle: "AI PRDs & Specs",
  title: "AI PRDs & Specs",
  readingMinutes: 28,
  summary:
    "Writing product requirements for features that are probabilistic, non-deterministic, and dependent on data — the PM craft that most teams get wrong",
  keyTakeaway:
    "An AI PRD is a cross-functional contract, not a feature wishlist. It must specify success metrics, model requirements, evaluation criteria, failure modes, data dependencies, and human fallback before engineering starts — because you cannot retrofit quality gates after a model ships.",
  pmCallout:
    "As a PM: if your PRD doesn't define what 'good enough' means numerically, who owns the training data, and what happens when the model fails, you don't have an AI spec — you have a demo request. Write the eval criteria first; the UI mockups second.",
  sections: [
    buildSection({
      number: "6.1",
      title: "Why standard PRDs fail for AI features",
      subtitle: "Requirements that assume deterministic behaviour don't capture what matters in AI products",
      take: "Traditional PRDs specify inputs, outputs, and acceptance criteria that assume the same input always produces the same output. AI features are probabilistic — quality varies by query, context window, and model version — so PMs must write requirements around distributions, thresholds, and degradation paths, not binary pass/fail behaviour.",
      why: "Engineering builds to the spec. A deterministic PRD forces teams to treat the model like a function — then production surprises everyone when 12% of queries hallucinate. PMs who rewrite the PRD template for AI avoid the 'it worked in the demo' launch disaster.",
      paragraphs: [
        [
          s("Deterministic acceptance criteria hide probabilistic reality. "),
          x(
            "Classic PRD: 'Given invoice PDF, system extracts vendor, date, total.' AI reality: 94% extract all three correctly, 4% miss date on scanned docs, 2% hallucinate vendor on low-quality images.",
            "PM fix: acceptance = '≥92% field-level accuracy on golden set; ≥99% on structured digital PDFs; graceful partial extraction on failure.'",
          ),
          s(" The spec must describe performance bands, not a single happy path."),
        ],
        [
          s("AI PRDs need quality dimensions conventional specs omit. "),
          x(
            "Latency distribution, cost per request, confidence thresholds, out-of-distribution behaviour, model version pinning, and monitoring triggers — none appear in standard templates.",
            "Borrow from SRE: define SLOs (service level objectives) for AI quality the same way you define uptime SLOs.",
          ),
          s(" Missing dimensions become post-launch arguments between PM and data science."),
        ],
        [
          s("The PRD is where uncertainty gets negotiated. "),
          x(
            "Stakeholders want guarantees; models offer probabilities. The PRD is the document where PM, legal, and eng agree on 'good enough for v1' with explicit tradeoffs documented.",
            "Without this negotiation in writing, every quality miss becomes a scope dispute.",
          ),
          s(" Treat the AI PRD as a risk allocation document, not just a build list."),
        ],
      ],
      examples: [
        {
          title: "Invoice extraction — deterministic PRD caused a recall",
          body: "PRD said 'extract all fields accurately.' QA passed on 50 clean samples. Production on scanned invoices: 78% accuracy. Legal flagged incorrect tax totals on vendor payments. PM rewrote PRD with tiered accuracy targets and human review for confidence <0.85. Recall cost $400K; new PRD template prevented repeat.",
        },
        {
          title: "Support summarisation — missing latency spec",
          body: "PRD focused on summary quality; no p95 latency budget. Engineering shipped a chain that took 45s per ticket. Agents abandoned the feature. PM retro: AI PRDs need latency SLOs alongside quality — users won't wait for perfect prose.",
        },
        {
          title: "Company-wide PRD template overhaul",
          body: "After three AI launch failures, the PM org added mandatory AI sections: eval criteria, failure modes, fallback, data requirements. First feature through new template launched at 91% task completion with documented 9% escalation path. Template became the quality gate.",
        },
      ],
    }),
    buildSection({
      number: "6.2",
      title: "The AI PRD anatomy",
      subtitle: "Problem statement, success metrics, model requirements, data requirements, evaluation criteria, failure modes, and human fallback",
      take: "A complete AI PRD has seven mandatory sections beyond the standard problem/solution: success metrics (outcome + quality), model requirements (task, I/O, thresholds), data requirements (sources, labelling, ownership), evaluation criteria (golden sets, benchmarks), failure modes (what goes wrong and how often), human fallback (escalation design), and monitoring (post-launch signals).",
      why: "Incomplete PRDs create silent gaps — data science assumes PM owns eval design; engineering assumes fallback is 'show an error.' The anatomy forces every dependency visible before sprint planning.",
      paragraphs: [
        [
          s("Problem statement must name the task, not the technology. "),
          x(
            "'Reduce tier-1 support handle time' not 'add GPT-4 chatbot.' Task-first framing keeps the team focused on outcome metrics, not model novelty.",
            "Include baseline: current handle time, current containment rate — so success is measurable improvement, not 'AI exists.'",
          ),
          s(" Technology choice belongs in model requirements, not the problem header."),
        ],
        [
          s("Success metrics split into business and model layers. "),
          x(
            "Business: containment rate, time saved, NPS delta, revenue impact. Model: task completion, hallucination rate, latency p95, cost per session.",
            "Both layers in PRD — business metrics justify investment; model metrics gate launch.",
          ),
          s(" Launch blocked if model metrics miss threshold even when business pressure is high."),
        ],
        [
          s("Cross-functional sign-off is part of the anatomy. "),
          x(
            "AI PRD review includes: PM (metrics), data science (eval), engineering (infra), legal (data use), design (failure UX). Checkbox sign-off before build.",
            "Replaces the waterfall doc review with a lightweight 45-minute AI PRD review meeting.",
          ),
          s(" Unsigned sections are build blockers — not nice-to-haves."),
        ],
      ],
      examples: [
        {
          title: "Contract review assistant — seven-section PRD",
          body: "PM shipped PRD with all seven AI sections. Legal signed data requirements (customer contracts, retention limits). Data science committed to 200-contract golden set. Eng scoped fallback to attorney queue. Launch hit 88% clause-flag accuracy with 100% attorney review on flagged items — no surprise gaps.",
        },
        {
          title: "Missing eval section — three-month rework",
          body: "PRD had problem, mockups, and model choice. No eval criteria. Team built for three months; PM and data science disagreed on 'good enough' at launch. Feature delayed 6 weeks for eval infrastructure. Anatomy checklist now mandatory in Jira template.",
        },
        {
          title: "PRD as onboarding doc for new PM",
          body: "Incoming PM inherited half-written AI PRD. Used anatomy checklist to find missing failure modes and monitoring sections. Completed PRD in one week; eng unblocked. Anatomy doubles as audit tool for inherited specs.",
        },
      ],
    }),
    buildSection({
      number: "6.3",
      title: "Writing model requirements",
      subtitle: "Specifying task, input format, output format, quality threshold, latency budget, and cost ceiling — the six dimensions of a model spec",
      take: "Model requirements in an AI PRD specify six dimensions: the task (what the model must accomplish), input format (schema, token limits, preprocessing), output format (structured JSON, prose, tool calls), quality threshold (minimum acceptable accuracy or task completion rate), latency budget (p50/p95 targets), and cost ceiling (max spend per request or per user per month).",
      why: "Vague model specs ('use Claude for summarisation') leave engineering guessing on constraints. Six-dimension specs let data science propose the right model tier and let finance approve unit economics before build.",
      paragraphs: [
        [
          s("Task definition must be atomic and testable. "),
          x(
            "'Classify support ticket into one of 12 categories' is testable. 'Understand customer intent' is not — too broad for eval.",
            "Decompose multi-step features into model tasks: retrieve → classify → draft → each with its own six dimensions.",
          ),
          s(" One PRD may contain multiple model requirement blocks."),
        ],
        [
          s("Input/output format prevents integration surprises. "),
          x(
            "Specify: max input tokens, required fields, output schema (JSON keys, enum values), and whether streaming is required.",
            "PM works with eng on schema — 'summary' vs '{summary, confidence, citations[]}' changes eval and UI.",
          ),
          s(" Format spec is the contract between model output and downstream code."),
        ],
        [
          s("Quality, latency, and cost form a triangle — PRD picks the tradeoff. "),
          x(
            "Frontier model: higher quality, higher latency and cost. Smaller model + RAG: lower cost, may miss edge cases. PRD states which corner to optimise.",
            "Example: '≥90% category accuracy, p95 <2s, ≤$0.03/request' — data science can model-select against this.",
          ),
          s(" Without all three numbers, teams over-build on quality and blow the margin."),
        ],
      ],
      examples: [
        {
          title: "Ticket classifier — six dimensions locked before sprint 1",
          body: "Task: 12-way classification. Input: ticket subject + body, max 2K tokens. Output: {category, confidence}. Quality: ≥91% on golden set. Latency: p95 800ms. Cost: ≤$0.008/ticket. Data science chose fine-tuned small model over GPT-4 — met all six at 40% lower cost.",
        },
        {
          title: "No cost ceiling — margin surprise at scale",
          body: "PRD specified quality and latency but not cost. Shipped GPT-4 for email drafts at $0.12/email. 50K users × 20 emails/month = $120K inference bill vs $15K budget. PM added cost ceiling to all model specs; eng routes to cheaper model when confidence allows.",
        },
        {
          title: "Output format mismatch delayed launch 3 weeks",
          body: "PM spec said 'return summary.' Engineering expected {summary, sources[], confidence}. Model returned prose; parser broke. Retro: output schema in PRD with example JSON. Three-week delay avoided on next feature.",
        },
      ],
    }),
    buildSection({
      number: "6.4",
      title: "Specifying evaluation criteria in the PRD",
      subtitle: "Defining what good looks like before engineering starts — the eval spec as a contract between PM and data science",
      take: "Evaluation criteria in the AI PRD define the golden dataset (size, composition, update cadence), primary metrics (task completion, accuracy, hallucination rate), secondary metrics (latency, cost), launch thresholds (minimum to ship), and regression gates (no launch if metric drops X% from baseline). This eval spec is a binding contract between PM and data science.",
      why: "Without eval criteria in the PRD, 'done' is subjective. Data science optimises for offline benchmarks PM doesn't care about; PM rejects work that meets the wrong metric. Eval spec aligns both sides before the first training run.",
      paragraphs: [
        [
          s("Golden sets must represent production, not demos. "),
          x(
            "Include edge cases: multilingual, noisy input, adversarial prompts, long documents, empty fields. PM contributes 30% of golden cases from real user scenarios.",
            "Golden set size rule of thumb: minimum 100 cases per critical path; 500+ for high-stakes domains.",
          ),
          s(" Demo-only golden sets pass eval and fail users."),
        ],
        [
          s("Primary metric must match user outcome. "),
          x(
            "Classification → accuracy/F1. Generation → human-rated quality or task completion. RAG → answer correctness + citation accuracy. Pick one primary; others are secondary.",
            "PM owns primary metric selection — data science owns measurement methodology.",
          ),
          s(" Launch gate = primary metric ≥ threshold on golden set AND shadow traffic."),
        ],
        [
          s("Eval spec includes update triggers. "),
          x(
            "Re-eval when: model version changes, prompt template changes, data distribution shifts, or quarterly regardless. PRD documents cadence.",
            "Prevents 'we shipped v2 model without re-running golden set' incidents.",
          ),
          s(" Eval is continuous obligation, not one-time launch checkbox."),
        ],
      ],
      examples: [
        {
          title: "RAG FAQ — eval spec prevented bad launch",
          body: "PRD required ≥85% answer correctness on 300-question golden set including 50 adversarial questions. Pre-launch eval: 79%. Launch blocked. Team improved chunking; re-hit 87%. Without eval spec in PRD, PM would have shipped under pressure from sales.",
        },
        {
          title: "Primary metric disagreement resolved in PRD",
          body: "Data science optimised BLEU score; PM cared about user task completion. PRD explicitly named task completion as primary, BLEU as diagnostic only. Team aligned; launch gate clear. Saved two weeks of metric debate.",
        },
        {
          title: "Golden set as living document",
          body: "PRD specified quarterly golden set refresh with 20 new cases from production failures. After Q2 refresh, eval caught regression on new product terminology. Model retrained before users noticed. Eval spec cadence paid for itself.",
        },
      ],
    }),
    buildSection({
      number: "6.5",
      title: "Documenting failure modes",
      subtitle: "The section most AI PRDs omit — what the model will get wrong, how often, and what happens when it does",
      take: "The failure modes section documents anticipated errors (hallucination, wrong classification, partial extraction, timeout, refusal), expected frequency bands, user-visible behaviour for each failure type, logging/alerting requirements, and whether the failure is acceptable for launch or requires mitigation. Naming failures explicitly prevents pretending the model is perfect.",
      why: "Teams that omit failure modes discover them in production via Twitter. PMs who document failures upfront design better UX, set support expectations, and give legal a honest risk picture.",
      paragraphs: [
        [
          s("Categorise failures by severity and recoverability. "),
          x(
            "Severity: cosmetic (ugly formatting), functional (wrong answer), critical (wrong financial amount). Recoverability: user can retry, human escalates, automatic rollback.",
            "PRD matrix: failure type × severity × recovery path. Critical unrecoverable = launch blocker.",
          ),
          s(" Not all failures are equal — PRD prioritises which to eliminate vs accept."),
        ],
        [
          s("Expected frequency sets support and SLA expectations. "),
          x(
            "'Hallucination on medical dosage: target <0.1%, hard block at any detected instance.' vs 'Wrong emoji in summary: <5%, acceptable for v1.'",
            "PM negotiates frequency bands with data science based on eval — not aspirational zeros.",
          ),
          s(" Support team needs the frequency table before launch."),
        ],
        [
          s("Failure UX is a product requirement, not eng polish. "),
          x(
            "Specify: error copy, retry affordance, 'talk to human' button, confidence disclosure, partial result display.",
            "Bad failure UX turns a 5% error rate into 30% abandonment.",
          ),
          s(" PM writes failure UX acceptance criteria alongside happy path."),
        ],
      ],
      examples: [
        {
          title: "Medical triage chatbot — failure modes blocked launch",
          body: "PRD failure section listed: incorrect urgency classification (target <2%), hallucinated drug interaction (target 0%). Red-team found 0.4% drug interaction hallucination. Launch blocked; added retrieval guardrail. Failure modes section gave legal the evidence to demand delay.",
        },
        {
          title: "Translation feature — honest frequency bands",
          body: "PRD documented 8% quality miss on rare languages, 2% on major languages. PM set expectation: rare languages show 'beta' badge and human review offer. Support tickets dropped 60% vs surprise-launch competitor because expectations were set.",
        },
        {
          title: "Failure mode drove product differentiation",
          body: "Competitor hid summarisation errors. PM documented 6% factual error rate and built inline citation + 'report error' flow. Failure transparency became trust feature. PRD failure section became marketing honesty story.",
        },
      ],
    }),
    buildSection({
      number: "6.6",
      title: "Data requirements in the PRD",
      subtitle: "What data is needed, where it comes from, what labelling it requires, and who owns it",
      take: "Data requirements specify: training/fine-tuning data needs (volume, format, labelling), RAG/knowledge base sources (documents, refresh cadence, access permissions), evaluation data (golden set ownership), production logging requirements (what to capture for future improvement), and data governance constraints (consent, retention, PII handling).",
      why: "AI features stall when data isn't ready — and nobody owned it because the PRD said 'use customer data' without naming who provisions, labels, and refreshes it. Data requirements prevent the silent 8-week data delay.",
      paragraphs: [
        [
          s("Name data sources and access path. "),
          x(
            "'10K labelled support tickets from Zendesk export, owned by Support Ops, refreshed monthly' not 'historical tickets.'",
            "Include: API access, legal approval status, PII redaction requirements, and estimated availability date.",
          ),
          s(" Data dependency dates go on the roadmap — not 'TBD.'"),
        ],
        [
          s("Labelling requirements are scope, not afterthought. "),
          x(
            "Specify: label schema, inter-annotator agreement target, labelling vendor or internal team, budget, and timeline.",
            "PM approves label guidelines before annotation starts — prevents relabelling 5K examples.",
          ),
          s(" Unlabelled data is not training-ready; PRD states labelling as explicit workstream."),
        ],
        [
          s("Governance constraints shape what's possible. "),
          x(
            "GDPR erasure requests, HIPAA boundaries, customer contract prohibitions on training — legal flags in PRD block certain data uses.",
            "PM documents 'approved data uses' and 'prohibited data uses' in data requirements section.",
          ),
          s(" Building on prohibited data creates retroactive deletion crises."),
        ],
      ],
      examples: [
        {
          title: "Fine-tune project — data section exposed 10-week gap",
          body: "PRD data requirements revealed: needed 8K labelled examples, had 800. Labelling budget approved; vendor engaged. Roadmap adjusted before eng started. Without data section, team would have built pipeline into empty warehouse.",
        },
        {
          title: "RAG knowledge base — ownership clarity",
          body: "PRD named: Confluence export owned by Technical Writing, weekly refresh, legal review for customer-facing docs only. TW committed to pipeline. RAG stayed current; no stale-answer incident in first 6 months.",
        },
        {
          title: "GDPR constraint changed architecture",
          body: "Data requirements legal review: EU customer emails cannot train models. PRD documented exclusion filter in data pipeline. Eng built region-aware training split. Compliance signed off before launch — data section caught regulatory constraint early.",
        },
      ],
    }),
    buildSection({
      number: "6.7",
      title: "The human fallback spec",
      subtitle: "What happens when the model fails, is uncertain, or encounters an out-of-distribution input — designed explicitly, not discovered in production",
      take: "Human fallback spec defines: confidence thresholds that trigger escalation, queue routing (which team, what SLA), what context the human receives, whether the user knows they're talking to a human, partial automation handoff (model draft + human edit), and metrics to track fallback rate and resolution quality.",
      why: "Fallback is the safety net that makes probabilistic features shippable. Underspecified fallback = users stuck in loops, agents overwhelmed, or silent failures. PMs who spec fallback design the product's honest quality floor.",
      paragraphs: [
        [
          s("Confidence thresholds are product decisions. "),
          x(
            "Threshold too low → unnecessary human load. Too high → users get bad AI answers without escalation.",
            "PM sets threshold from eval: 'escalate when classifier confidence <0.72 or hallucination detector fires.'",
          ),
          s(" Thresholds are tunable post-launch — PRD defines initial values and review cadence."),
        ],
        [
          s("Handoff UX preserves user trust. "),
          x(
            "Good: 'I'm not confident — connecting you with a specialist who can see our conversation.' Bad: silent transfer with lost context.",
            "PRD specifies: context package for human (original query, model attempts, retrieved docs, confidence scores).",
          ),
          s(" Fallback is a feature, not an error state to hide."),
        ],
        [
          s("Fallback rate is a health metric. "),
          x(
            "Target: 15% fallback at launch, trending to 8% as model improves. Spike to 25% = incident.",
            "PRD includes fallback rate in monitoring dashboard alongside quality metrics.",
          ),
          s(" High fallback isn't always failure — may mean honest uncertainty handling."),
        ],
      ],
      examples: [
        {
          title: "Insurance claims — tiered fallback by confidence",
          body: "PRD: auto-approve claims < $500 when model confidence >0.9; route to adjuster 0.7–0.9 with AI summary; full manual below 0.7. Fallback rate 22% at launch, 14% at month 6. Tiered spec let PM ship with safety.",
        },
        {
          title: "No fallback spec — agent revolt",
          body: "AI draft emails sent without review; 11% contained errors. Support agents manually re-checked everything — slower than before AI. PM added human-in-the-loop spec: all external sends require approval until <3% edit rate. Fallback spec retrofitted.",
        },
        {
          title: "Fallback as training signal",
          body: "PRD specified: human corrections logged as preference pairs for monthly fine-tune. Fallback wasn't just safety — it fed the flywheel. 6 months later, fallback rate halved. Spec connected operations to improvement.",
        },
      ],
    }),
    buildSection({
      number: "6.8",
      title: "Versioning AI PRDs",
      subtitle: "How to update the spec as the model evolves, the eval results come in, and the user feedback changes what good means",
      take: "AI PRDs are living documents versioned when: model/prompt changes, eval thresholds adjust, new failure modes discovered, data sources change, or scope expands. Each version records what changed, why, re-eval results, and stakeholder re-approval — treating the PRD like an API contract with changelog discipline.",
      why: "Static PRDs drift from production reality within weeks. Versioned PRDs give audit trails for regulators, onboarding context for new team members, and prevent 'which spec are we building to?' confusion.",
      paragraphs: [
        [
          s("Trigger versioning on material changes. "),
          x(
            "Material: model swap, quality threshold change, new data source, new failure mode, autonomy level change. Immaterial: copy tweak, UI colour.",
            "PRD version bump (v1.0 → v1.1) requires re-sign from PM, data science, and eng leads.",
          ),
          s(" Version log is one paragraph: what, why, eval impact."),
        ],
        [
          s("Eval results drive threshold updates. "),
          x(
            "Launch at 88% task completion; month 3 hits 93%. PM updates PRD threshold to 90% minimum — raises the bar as model improves.",
            "Prevents quality regression acceptance: 'we used to be 93%, 88% is fine now.'",
          ),
          s(" PRD versions track quality evolution, not just feature scope."),
        ],
        [
          s("Link PRD version to model version in production. "),
          x(
            "Deployment manifest: model v2.3 + prompt template v4 + PRD v1.2. Incident post-mortem traces to exact spec version.",
            "PM maintains PRD ↔ model version mapping in release notes.",
          ),
          s(" Orphan model versions without PRD context are compliance and debug nightmares."),
        ],
      ],
      examples: [
        {
          title: "Model upgrade — PRD v1.2 gate",
          body: "GPT-4 → GPT-4o swap triggered PRD v1.2. Re-eval on golden set required before deploy. v1.2 documented new latency targets and 2% quality improvement. Legal re-approved data handling. Version discipline prevented silent behaviour change.",
        },
        {
          title: "User feedback shifted 'good' — PRD v2.0",
          body: "Users wanted shorter summaries, not comprehensive. PRD v2.0 changed primary metric from completeness to brevity score. Eval golden set updated. Model prompt revised. v2.0 changelog explained pivot — eng didn't debate scope in Slack.",
        },
        {
          title: "Audit trail for regulator",
          body: "Financial services regulator asked: 'What did you commit to at launch vs now?' PM produced PRD v1.0 through v1.4 with eval results per version. Audit passed. Versioning wasn't bureaucracy — it was evidence.",
        },
      ],
    }),
    buildSection({
      number: "6.9",
      title: "Communicating uncertainty to stakeholders",
      subtitle: "How to write a PRD for a feature whose quality you can't fully guarantee before launch",
      take: "Stakeholder communication in AI PRDs uses: probabilistic language ('target 90% accuracy' not 'will be accurate'), scenario bands (best/base/worst quality outcomes), explicit non-guarantees, phased rollout plan tied to eval results, and comparison to baseline (human performance or status quo) — making uncertainty legible without killing ambition.",
      why: "Executives and sales hear 'AI' and assume magic. PMs who communicate uncertainty in the PRD itself set org-wide expectations — preventing sales from promising 100% accuracy and legal from approving undisclosed risk.",
      paragraphs: [
        [
          s("Replace binary promises with threshold language. "),
          x(
            "'We will achieve ≥88% task completion on the golden set before GA, with documented fallback for the remainder' beats 'the AI will handle it.'",
            "Include confidence intervals where eval sample size allows.",
          ),
          s(" Stakeholders can approve a threshold; they can't approve a fantasy."),
        ],
        [
          s("Scenario bands make planning honest. "),
          x(
            "Optimistic: 92% completion, 12% containment lift. Base: 87%, 8% lift. Conservative: 82%, 4% lift. Finance models on conservative.",
            "PRD presents all three with assumptions — leadership picks risk appetite.",
          ),
          s(" Scenario bands replace the single-date fantasy roadmap."),
        ],
        [
          s("Compare to baseline, not to perfection. "),
          x(
            "'Human agents resolve 78% of tier-1 without escalation; AI target 85%' frames success vs status quo.",
            "Beats 'AI will solve everything' and gives realistic success criteria.",
          ),
          s(" Baseline comparison is the PM's credibility tool with sceptical stakeholders."),
        ],
      ],
      examples: [
        {
          title: "Board presentation — scenario bands saved the project",
          body: "CFO challenged AI ROI. PM presented PRD scenario bands with conservative 4% containment lift still positive ROI. Board approved phased rollout. Without uncertainty communication, project would have been killed for not promising certainty.",
        },
        {
          title: "Sales enablement from PRD language",
          body: "PM extracted 'approved claims' from PRD: what sales can say (88% accuracy, human backup available) vs prohibited ('never wrong'). Sales deck aligned with PRD. Customer trust improved; no oversell lawsuits.",
        },
        {
          title: "Legal comfort via explicit non-guarantees",
          body: "PRD section 'What we do not guarantee' listed: perfect accuracy, suitability for legal advice, handling of all languages. Legal signed faster because risks were named, not hidden. Uncertainty communication reduced legal cycle time.",
        },
      ],
    }),
    buildSection({
      number: "6.10",
      title: "PM decision lens: the AI PRD as a cross-functional contract",
      subtitle: "How the spec aligns PM, engineering, data science, legal, and design before a line of code is written",
      take: "The AI PRD review is a 45-minute cross-functional gate: PM presents problem and metrics, data science presents eval plan, engineering presents infra estimate, legal flags data constraints, design presents failure UX. Unresolved items become explicit risks with owners — not silent assumptions. Approved PRD version is the contract for build.",
      why: "Misalignment discovered in sprint 6 costs 10× more than misalignment caught in PRD review. The contract framing makes every function voice dependencies before commitment.",
      paragraphs: [
        [
          s("Run the AI PRD review before sprint planning. "),
          x(
            "Agenda: problem (5 min), model requirements (10 min), eval criteria (10 min), data requirements (10 min), failure/fallback (5 min), risks and open items (5 min).",
            "Output: approved v1.0 or conditional approval with blockers named.",
          ),
          s(" No eng sprint start without PRD v1.0 sign-off."),
        ],
        [
          s("RACI embedded in PRD footer. "),
          x(
            "Responsible: PM (metrics), DS (eval), Eng (build). Accountable: PM. Consulted: Legal, Design. Informed: Support, Sales.",
            "Footer prevents 'I thought data science owned that' disputes.",
          ),
          s(" RACI is two lines — not a bureaucracy exercise."),
        ],
        [
          s("Open risks section with owners and dates. "),
          x(
            "'Risk: golden set only 60 cases by launch target — owner: PM, mitigation: expand with vendor labelling, due: sprint 2.'",
            "Visible risks get resourced; hidden risks become launch fires.",
          ),
          s(" PRD contract is honest about what isn't solved yet."),
        ],
      ],
      examples: [
        {
          title: "PRD review caught legal blocker day 1",
          body: "Legal flagged in review: customer contracts prohibit using support transcripts for training. PRD updated: RAG-only, no fine-tune on customer data. Architecture pivoted before sprint 1. Contract review saved 8 weeks of rework.",
        },
        {
          title: "Design failure UX in review — not sprint 4",
          body: "Designer presented escalation flow in PRD review. Eng estimated 3 days for handoff UI. Included in sprint 1 scope. Previous features had bolted-on fallback; this one felt native. Cross-functional review timing mattered.",
        },
        {
          title: "PRD contract as dispute resolver",
          body: "Month 4: eng said scope creep on eval infrastructure. PM pointed to PRD v1.0 eval section signed by eng lead. Scope discussion resolved in 10 minutes referencing contract. AI PRD earned trust as single source of truth.",
        },
      ],
    }),
  ],
  quiz: [
    {
      q: "Why do standard deterministic PRDs fail for AI features?",
      options: [
        "AI features don't need acceptance criteria.",
        "AI outputs are probabilistic — quality varies and must be specified as thresholds and bands, not binary pass/fail.",
        "Engineering can't read PRDs for AI.",
        "AI features should only be specified verbally.",
      ],
      correct: 1,
      correctFeedback:
        "Right. AI PRDs must capture probabilistic quality, not assume identical outputs for identical inputs.",
      wrongFeedback:
        "Standard PRDs assume determinism. AI needs threshold-based acceptance. Re-read sections 6.1 and 6.2.",
    },
    {
      q: "What are the six dimensions of model requirements in an AI PRD?",
      options: [
        "Model name, API key, temperature, max tokens, system prompt, user prompt.",
        "Task, input format, output format, quality threshold, latency budget, cost ceiling.",
        "Problem, solution, mockups, timeline, budget, stakeholders.",
        "Accuracy, precision, recall, F1, BLEU, ROUGE.",
      ],
      correct: 1,
      correctFeedback:
        "Exactly. Task, I/O formats, quality, latency, and cost — the six dimensions data science needs to model-select.",
      wrongFeedback:
        "Model requirements cover task, I/O, quality threshold, latency, and cost. Re-read section 6.3.",
    },
    {
      q: "What should the failure modes section of an AI PRD include?",
      options: [
        "Only a generic 'model may be wrong' disclaimer.",
        "Anticipated errors, expected frequency, user-visible behaviour, and recovery paths.",
        "A promise that failures will be fixed post-launch.",
        "Nothing — documenting failures reduces team morale.",
      ],
      correct: 1,
      correctFeedback:
        "Right. Name failures, frequencies, UX, and recovery — don't pretend perfection.",
      wrongFeedback:
        "Failure modes need error types, frequency bands, and recovery design. Re-read section 6.5.",
    },
    {
      kind: "categorize",
      q: "Match each AI PRD section to its primary purpose.",
      categories: ["Eval criteria", "Data requirements", "Human fallback", "Failure modes"],
      items: [
        { text: "Golden set size, primary metric, launch threshold.", category: 0 },
        { text: "Label schema, data source ownership, governance constraints.", category: 1 },
        { text: "Confidence threshold for escalation and handoff UX.", category: 2 },
        { text: "Hallucination frequency band and user-visible error copy.", category: 3 },
        { text: "Quarterly golden set refresh cadence.", category: 0 },
        { text: "PII redaction requirements for training data.", category: 1 },
      ],
      correctFeedback:
        "Right. Each PRD section owns a distinct dependency — eval, data, fallback, or failure.",
      wrongFeedback:
        "Map sections to eval, data, fallback, and failure purposes. Re-read sections 6.4–6.7.",
    },
    {
      kind: "order",
      q: "Put the AI PRD cross-functional review agenda in the recommended order.",
      prompt: "Drag to arrange from first topic (top) to last (bottom).",
      items: [
        "Problem statement and success metrics.",
        "Model requirements (six dimensions).",
        "Evaluation criteria and golden set plan.",
        "Data requirements and governance.",
        "Failure modes and human fallback.",
        "Open risks, owners, and sign-off.",
      ],
      correctFeedback:
        "Exactly. Problem → model → eval → data → failure/fallback → risks — the contract review flow.",
      wrongFeedback:
        "Review flows problem → model → eval → data → failure → risks. Re-read section 6.10.",
    },
    {
      q: "What is the strongest approach to communicating AI quality uncertainty to stakeholders?",
      options: [
        "Promise 100% accuracy to maintain excitement.",
        "Avoid mentioning quality until after launch.",
        "Use threshold language, scenario bands, and baseline comparison — not binary guarantees.",
        "Let engineering explain uncertainty in the launch email.",
      ],
      correct: 2,
      correctFeedback:
        "Right. Probabilistic language, scenarios, and baseline comparison set honest expectations.",
      wrongFeedback:
        "Communicate uncertainty with thresholds, scenarios, and baselines. Re-read section 6.9.",
    },
  ],
});
