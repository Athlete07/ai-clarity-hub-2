import { buildChapter, buildSection, s, x } from "../concepts-pb4-helpers";

export const chapter07EvalsBenchmarks = buildChapter({
  slug: "pb4-evals-benchmarks",
  number: 7,
  shortTitle: "Evals & Benchmarks",
  title: "Evals & Benchmarks",
  readingMinutes: 30,
  summary:
    "How to measure whether your AI feature actually works — unit tests, human eval, LLM-as-judge, golden datasets, regression suites, and the frameworks that automate them. Why evals are the hardest part of shipping AI and how PMs own the bar.",
  keyTakeaway:
    "Traditional software has pass/fail tests; AI has distributions of acceptable answers. Evals are how you turn subjective quality into a release gate — and without them, every prompt change is a coin flip in production.",
  pmCallout:
    "As a PM: define the eval before you define the feature. If you can't write down what 'good' looks like in 20 test cases, you don't have requirements — you have a demo.",
  sections: [
    buildSection({
      number: "7.1",
      title: "Why evals are the hardest part",
      subtitle: "Non-determinism, subjectivity, and moving targets",
      take: "AI features don't have binary correctness — they have distributions of acceptable outputs that shift with model updates, prompt changes, and user expectations — which makes evaluation the hardest engineering discipline in LLM products and the one PMs must co-own.",
      why: "Teams ship fast on demos and stall on evals. PMs who understand why evals are uniquely hard can unblock releases, set realistic timelines, and stop treating 'it looks fine in the playground' as a quality bar.",
      paragraphs: [
        [
          s("Traditional software tests are deterministic. "),
          x(
            "Given input X, function Y returns Z — every time. LLM features given input X return Z, Z', or Z'' depending on temperature, model version, context length, and cosmic rays.",
            "Flaky tests in CI are a nuisance; flaky AI outputs are the default state. Your eval framework must measure distributions, not single answers.",
          ),
          s(" PM implication: 'works on my machine' scales to 'works on my prompt version' unless you institutionalise measurement."),
        ],
        [
          s("Correctness is often subjective and context-dependent. "),
          x(
            "Is this summary 'good'? Accurate but too long? Accurate but missing the point the user cared about? Two domain experts may disagree — and both may be right for different user segments.",
            "Evals must encode product intent: tone, completeness thresholds, citation requirements, refusal boundaries — not just 'grammatically correct.'",
          ),
          s(" The PM job is translating user value into scorable criteria before eng builds the harness."),
        ],
        [
          s("The target moves constantly. "),
          x(
            "Vendor model updates (GPT-4o March → April), retrieval corpus changes, new jailbreaks, seasonal user queries — all shift output distributions without a code deploy on your side.",
            "Evals aren't a one-time launch checklist; they're ongoing regression infrastructure, like monitoring for quality instead of uptime.",
          ),
          s(" Teams without eval suites discover regressions from angry users and Twitter threads — the most expensive alerting system in software."),
        ],
      ],
      examples: [
        {
          title: "Prompt tweak broke production silently",
          body: "A support bot's 'minor' system prompt edit improved tone in manual spot-checks but dropped resolution rate from 0.74 to 0.61 over two weeks — no code change, no alert. PM retro: no golden dataset, no nightly eval job. The fix took one day; discovering it took 14.",
        },
        {
          title: "Two experts, two scores",
          body: "Legal summarisation eval had partner lawyers score the same 50 outputs. Inter-rater agreement (Cohen's kappa) was 0.52 — barely above chance. PM reframed eval: score 'cites correct clause' (objective) separately from 'executive-readable' (subjective LLM-judge with rubric). Release gate used only objective metrics.",
        },
        {
          title: "Model upgrade surprise",
          body: "OpenAI deprecated a fine-tuned model; team migrated to base + new prompt. Demo looked great. Eval suite on 200 golden cases showed 12% regression on JSON schema compliance. PM delayed launch one sprint for parser hardening — eval paid for itself in avoided incident.",
        },
      ],
    }),
    buildSection({
      number: "7.2",
      title: "Types of evals",
      subtitle: "Unit, integration, human, online — the eval stack",
      take: "AI evals span a stack: deterministic unit checks on structure, integration tests on full pipelines, offline human or model-judged quality scores, and online A/B metrics — each catches different failure modes and none alone is sufficient.",
      why: "PMs who ask 'do we have evals?' need to know which layer is missing. 'We check JSON parses' is not the same as 'we measure answer faithfulness on 500 held-out questions.'",
      paragraphs: [
        [
          s("Unit evals — fast, cheap, necessary, insufficient. "),
          x(
            "Assert output is valid JSON, contains required fields, stays under token limit, doesn't leak system prompt, passes regex for SKU format.",
            "These run in milliseconds in CI on every PR. They catch plumbing breaks, not reasoning failures.",
          ),
          s(" PM rule: unit evals are table stakes; they don't prove the feature works for users."),
        ],
        [
          s("Integration / offline evals — the golden dataset layer. "),
          x(
            "End-to-end: user query → retrieval → generation → scored output. Metrics: accuracy, faithfulness, relevance, latency, cost per query.",
            "Run nightly or on every prompt/model change. This is where RAGAS, PromptFoo, and custom harnesses live.",
          ),
          s(" Budget 2–4 weeks of PM + eng time to build v1; it's infrastructure, not a ticket."),
        ],
        [
          s("Human evals and online evals — ground truth and reality. "),
          x(
            "Human: raters score outputs on rubrics — expensive, slow, highest trust for subjective quality. Online: thumbs up/down, task completion, escalation rate, revenue — measures what users actually do.",
            "Offline evals predict online outcomes imperfectly. PMs triangulate: offline gates releases; online validates bets.",
          ),
          s(" Mature teams run quarterly human eval calibration and continuous online dashboards."),
        ],
      ],
      examples: [
        {
          title: "Three-layer eval for a sales email drafter",
          body: "Unit: output has subject + body, no PII from retrieval. Integration: 300 golden prompts scored for brand voice (LLM-judge) and factual claims vs CRM snippet (automated). Online: send rate and edit distance before user sends. PM release gate: integration faithfulness ≥ 0.85 AND online edit distance not worse than baseline.",
        },
        {
          title: "Human eval only at launch — scaling mistake",
          body: "V1 used 20 human-rated examples for launch approval. No automated regression. V2 added features; quality felt worse but no data proved it. PM mandated integration eval suite before V2 GA — found 0.18 drop on 'mentions correct pricing tier.'",
        },
        {
          title: "Online metric saved a bad offline score",
          body: "Offline LLM-judge scored new RAG chunking lower than baseline. Online A/B showed higher task completion — users cared about speed, not citation verbosity. PM learned: offline metrics must map to user outcomes, not proxy elegance.",
        },
      ],
    }),
    buildSection({
      number: "7.3",
      title: "Task-specific metrics",
      subtitle: "BLEU, ROUGE, and when classical NLP metrics still matter",
      take: "BLEU and ROUGE measure n-gram overlap against reference text — cheap and automatable for summarisation and translation — but they correlate poorly with human judgment on open-ended LLM tasks and should never be your only quality metric.",
      why: "Vendors and internal reports still cite BLEU/ROUGE because they're easy. PMs who know their limits avoid optimising for metric gaming and pick faithfulness/relevance metrics for RAG instead.",
      paragraphs: [
        [
          s("BLEU (Bilingual Evaluation Understudy) — precision of n-grams. "),
          x(
            "Originally for machine translation: compare generated text to one or more reference translations; score how many n-grams match, with brevity penalty.",
            "High BLEU means surface similarity to reference — not semantic equivalence. 'The cat sat' vs 'A feline rested' scores low despite same meaning.",
          ),
          s(" Still useful when references are stable and wording matters — e.g., localised UI string generation with fixed glossaries."),
        ],
        [
          s("ROUGE (Recall-Oriented Understudy for Gisting Evaluation) — recall of n-grams. "),
          x(
            "Common for summarisation: ROUGE-1 (unigrams), ROUGE-2 (bigrams), ROUGE-L (longest common subsequence). Measures how much of the reference summary appears in the candidate.",
            "Favors summaries that copy phrases from source — can reward extractive mush and penalise good abstractive summaries.",
          ),
          s(" PM use: track ROUGE trends on a fixed golden set as a cheap regression signal, not as user-quality proxy."),
        ],
        [
          s("Modern LLM eval prefers semantic metrics. "),
          x(
            "Embedding similarity (BERTScore), NLI-based faithfulness (does answer entail from context?), LLM-as-judge rubrics — better correlation with human scores on open-ended tasks.",
            "For RAG: context precision, context recall, answer relevance, faithfulness (RAGAS taxonomy) beat BLEU for 'did we hallucinate?'",
          ),
          s(" Ask eng: 'Which metric maps to the user complaint we're trying to prevent?' — not 'what's easy to compute.'"),
        ],
      ],
      examples: [
        {
          title: "ROUGE-L looked great, users hated it",
          body: "Meeting summariser optimised for ROUGE-L against human-written summaries. Scores improved 15%. User NPS dropped — summaries were verbose, copied jargon, missed decisions. PM switched primary metric to LLM-judge 'action items complete' rubric aligned with user interviews.",
        },
        {
          title: "BLEU for glossary-locked translation",
          body: "Enterprise product UI translation with mandatory term mappings ('Workspace' → fixed locale string). BLEU against approved references caught glossary violations cheaply in CI. PM accepted BLEU here because reference wording is legally constrained — not because BLEU measures 'good translation.'",
        },
        {
          title: "BERTScore as middle ground",
          body: "Support macro suggestion tool used BERTScore vs golden replies for regression. Correlated better with human 'would send as-is' than ROUGE. PM dashboard showed weekly trend — caught model swap regression before deploy.",
        },
      ],
    }),
    buildSection({
      number: "7.4",
      title: "LLM-as-judge",
      subtitle: "Using models to score models — power and pitfalls",
      take: "LLM-as-judge uses a strong model (often GPT-4 class) with a rubric prompt to score outputs on relevance, faithfulness, tone, safety — scaling subjective eval cheaply, but introducing judge bias, position bias, and self-preference that PMs must design around.",
      why: "Human eval doesn't scale to every PR. LLM-as-judge is the default compromise in 2026 — PMs who understand its failure modes write better rubrics and know when to escalate to human raters.",
      paragraphs: [
        [
          s("The pattern: rubric + reference context + candidate output → score + rationale. "),
          x(
            "Example rubric dimensions: 'Is every factual claim supported by the provided context? (1-5)' 'Is the tone professional? (1-5)' Chain-of-thought in the judge prompt improves reliability.",
            "G-Eval and similar frameworks formalise this: define criteria, ask judge to reason, then score.",
          ),
          s(" PM delivers the rubric — eng wires the harness. Rubric quality is product work."),
        ],
        [
          s("Known biases to mitigate. "),
          x(
            "Position bias: judge favors first answer in pairwise comparison. Self-preference: GPT-4 judges prefer GPT-4-style answers. Length bias: longer answers score higher. Verbosity and confidence inflate scores.",
            "Mitigations: swap positions in pairwise, use a different judge model than generator, calibrate against human-labeled subset monthly.",
          ),
          s(" Never ship solely on LLM-judge scores without periodic human calibration — drift is guaranteed."),
        ],
        [
          s("When LLM-as-judge works vs fails. "),
          x(
            "Works: faithfulness to provided context, format compliance, tone matching style guide, detecting obvious hallucinations vs source.",
            "Fails: nuanced domain judgment (medical, legal), cultural sensitivity edge cases, novel tasks without clear rubric, adversarial outputs that fool the judge.",
          ),
          s(" PM escalation rule: if mistaken judge score has regulatory or safety cost, human rater on that slice."),
        ],
      ],
      examples: [
        {
          title: "RAG faithfulness judge in CI",
          body: "Each PR runs 100 golden RAG queries; GPT-4o-mini judge scores faithfulness 1–5 with cite-or-fail rule. Drop > 0.05 from main blocks merge. PM wrote rubric with legal: 'unsupported claim' defined with 8 examples. False positive rate tuned down after first week.",
        },
        {
          title: "Position bias flipped A/B winner",
          body: "Pairwise judge always listed variant A first; variant A won 62% of comparisons. Swapping order: true tie. PM mandated ABBA ordering in eval harness — product decision almost went wrong on methodology artifact.",
        },
        {
          title: "Judge-model mismatch",
          body: "Claude-generated answers judged by GPT-4 systematically scored 0.3 lower on 'helpfulness' than GPT-4-generated answers judged by GPT-4. PM ran human calibration on 50 samples — confirmed bias. Solution: judge with neutral third model or human spot-check per generator.",
        },
      ],
    }),
    buildSection({
      number: "7.5",
      title: "Pairwise evaluation",
      subtitle: "A vs B — how alignment and product choices get made",
      take: "Pairwise eval presents two outputs for the same input and asks which is better — the same primitive behind DPO, RLHF, and PM A/B decisions — often more reliable than absolute 1–10 scoring because humans and judges are better at comparison.",
      why: "When you can't define perfect, you can often define better. Pairwise is how teams pick prompts, models, and retrieval configs — PMs should insist on pairwise for any subjective quality decision.",
      paragraphs: [
        [
          s("Absolute scores are noisy; relative rankings are stable. "),
          x(
            "Raters give Tuesday's output a 7 and Thursday's a 7 but prefer Thursday when shown side-by-side — absolute scales drift.",
            "Pairwise aggregation (Bradley-Terry, Elo) converts many A-vs-B votes into model/prompt rankings with confidence intervals.",
          ),
          s(" PM readout: 'Prompt B wins 58% ± 4% on faithfulness' beats 'Prompt B scored 4.2/5.'"),
        ],
        [
          s("Pairwise powers preference alignment. "),
          x(
            "DPO and RLHF train on chosen/rejected pairs. Product teams reuse the same data: show raters two support replies, pick one — that dataset fine-tunes tone AND evaluates future changes.",
            "Single eval pipeline for selection and training reduces waste.",
          ),
          s(" PM owns rater guidelines: when is brevity worth factual depth? Document tie-break rules."),
        ],
        [
          s("Design pairwise experiments carefully. "),
          x(
            "Same input, same context, only change one variable (prompt v2, chunk size, model). Randomise order. Enough samples for statistical power — 200+ pairs for 5-point detection often.",
            "Multi-armed bandits online are pairwise at scale with real users.",
          ),
          s(" Changing two variables at once in pairwise is a wasted experiment — PM enforces one diff per comparison."),
        ],
      ],
      examples: [
        {
          title: "Prompt tournament — 8 variants, pairwise Elo",
          body: "PM ran internal pairwise tool on 8 system prompts × 50 queries; 3 raters, 400 pairs total. Elo ranking separated top-2 clearly; bottom-4 within noise. Shipped #1; #2 became fallback for latency-critical path. Decision in 3 days vs weeks of absolute scoring debates.",
        },
        {
          title: "Pairwise for model vendor selection",
          body: "GPT-4o vs Claude 3.5 on 200 production-sampled queries, blinded pairwise with domain PMs. Claude won on long-doc synthesis; GPT-4o on structured extraction. PM split routing by intent — eval data justified dual-vendor COGS.",
        },
        {
          title: "Tie-heavy results = bad rubric",
          body: "60% of pairs marked 'tie' on customer email drafts. PM interview raters: 'both are fine' = rubric missing 'would send without edit' bar. Tightened criterion; tie rate dropped to 18%; clear winner emerged.",
        },
      ],
    }),
    buildSection({
      number: "7.6",
      title: "Golden dataset",
      subtitle: "The held-out test set that defines 'good' for your product",
      take: "A golden dataset is a curated, versioned collection of real or realistic inputs with expected outputs or scoring rubrics — your product's regression test suite for AI — and it must be representative, maintained, and protected from train-set contamination.",
      why: "Without a golden set, every quality conversation is anecdotal. PMs who invest in golden data give eng a release gate and give themselves defensible 'no' on risky launches.",
      paragraphs: [
        [
          s("Build golden sets from production, not from imagination. "),
          x(
            "Sample stratified by intent, difficulty, language, edge cases — include known failure modes from support tickets.",
            "200–500 examples often enough for v1 regression; 1K+ for high-stakes domains. Quality per example beats raw count.",
          ),
          s(" PM facilitates labeling: subject experts, clear guidelines, adjudication for disagreements."),
        ],
        [
          s("Golden data versioning is as important as code versioning. "),
          x(
            "Tag datasets v1.3 when rubrics change. Never tune prompts by iterating against the golden set without a held-out validation slice — you'll overfit the test.",
            "Split: 70% dev iteration, 30% locked holdout for release sign-off only.",
          ),
          s(" PM alert: if eng 'fixes' golden labels every sprint to pass eval, your bar is moving, not your quality."),
        ],
        [
          s("Expected outputs: exact match vs rubric vs reference-free. "),
          x(
            "Classification: exact label. RAG Q&A: reference answer + 'must cite section X' constraints. Creative tasks: rubric-only scoring, no single gold answer.",
            "Store metadata: source doc version, user persona, difficulty tag — enables slice analysis when aggregate score drops.",
          ),
          s(" Slice dashboards ('non-English', 'tables in PDF') find regressions averages hide."),
        ],
      ],
      examples: [
        {
          title: "Golden set from 6 months of support chats",
          body: "PM sampled 400 anonymised tickets stratified by product area. SMEs wrote ideal reply + must-include facts. Nightly eval against golden set; faithfulness drop > 3% pages on-call. Dataset lived in Git LFS with PR review for new cases.",
        },
        {
          title: "Holdout saved from overfitting",
          body: "Team iterated prompts against full golden set for 3 weeks — integration score 0.94. Locked holdout (never seen) scored 0.71. PM enforced dev/holdout split; true score guided redesign. Lesson: golden set needs a vault.",
        },
        {
          title: "Synthetic golden data for rare edge cases",
          body: "Only 12 real examples of 'refund + GDPR erasure' combo in production. PM worked with legal to synthesise 40 realistic variants for golden set. Rare slice stopped regressing silently after model update.",
        },
      ],
    }),
    buildSection({
      number: "7.7",
      title: "Regression testing",
      subtitle: "Every change re-runs the suite — prompts, models, retrieval",
      take: "AI regression testing re-runs the golden dataset (and unit checks) on every meaningful change — prompt edit, model version bump, embedding model swap, chunk size tweak — blocking deploy when scores drop beyond threshold, because unlike traditional code, 'no diff' doesn't mean 'no behaviour change.'",
      why: "PMs approve weekly prompt experiments. Without regression gates, 'small tweak Friday' becomes 'incident Monday.' Regression CI is how AI products earn the right to move fast.",
      paragraphs: [
        [
          s("What triggers a regression run. "),
          x(
            "PR merge, nightly schedule, pre-deploy to staging/prod, vendor model deprecation notices.",
            "Full suite may take minutes to hours — parallelise, cache retrieval where possible, use smaller judge model for PR and full judge for nightly.",
          ),
          s(" PM agrees on blocking vs advisory thresholds per metric slice."),
        ],
        [
          s("Threshold design is product policy. "),
          x(
            "Aggregate faithfulness ≥ 0.85, no slice below 0.75, latency p95 < 3s, cost per query < $0.02.",
            "Statistical noise: use confidence intervals; don't block on 0.01 noise. Do block on 0.05 drop in safety slice.",
          ),
          s(" Document thresholds in PRD / eval README — avoids debate during every failed build."),
        ],
        [
          s("Regression artifacts accelerate debugging. "),
          x(
            "Store failed cases: input, old output, new output, diff, retrieval chunks. PMs and eng triage without reproducing manually.",
            "Trend graphs over 90 days show slow drift before hard failures.",
          ),
          s(" 'Eval dashboard green' is a standing agenda item in mature AI product reviews."),
        ],
      ],
      examples: [
        {
          title: "GitHub Action blocks prompt PRs",
          body: "Prompt files in repo trigger PromptFoo eval on 150 cases; faithfulness and JSON validity must pass. Failed PR showed retrieval returned wrong doc after index rebuild — unrelated to prompt. Caught cross-team dependency before merge.",
        },
        {
          title: "Nightly regression caught vendor silent update",
          body: "No deploy for 5 days; Tuesday nightly eval dropped 8% on German queries. Root cause: embedding API default model changed. PM escalated to vendor; added model version pin to config. Users never saw it.",
        },
        {
          title: "Advisory vs blocking metrics",
          body: "PM set: faithfulness blocking, tone advisory. Tone dipped 0.04 on playful rewrites; faithfulness held. Shipped with tone fix next sprint. Clear policy prevented week-long tone perfectionism blocking revenue feature.",
        },
      ],
    }),
    buildSection({
      number: "7.8",
      title: "Eval frameworks",
      subtitle: "RAGAS, PromptFoo, Braintrust — automate the harness",
      take: "Eval frameworks standardise dataset loading, metric computation, LLM-judge calls, and CI integration — RAGAS for RAG metrics, PromptFoo for prompt/model matrix testing, Braintrust for experiment tracking — so teams don't rebuild harnesses from scratch.",
      why: "Build-vs-buy applies to eval infra. PMs who know these tools scope 'eval sprint' realistically: configure frameworks in days, custom metrics in weeks.",
      paragraphs: [
        [
          s("RAGAS — retrieval-augmented generation assessment. "),
          x(
            "Metrics: faithfulness (answer grounded in context?), answer relevancy, context precision/recall, aspect critiques. Python library; LLM-backed judges built in.",
            "Best for: RAG pipelines where hallucination and retrieval quality are primary risks. Integrates with LangChain, LlamaIndex.",
          ),
          s(" PM asks: 'Are we tracking faithfulness and context recall separately?' — RAGAS makes that default."),
        ],
        [
          s("PromptFoo — prompt and model matrix testing. "),
          x(
            "YAML-configured test cases, multiple prompt variants, multiple models, assertion types (contains, javascript, llm-rubric), CI-friendly CLI.",
            "Great for prompt iteration tournaments and provider comparison with same golden inputs.",
          ),
          s(" PM can read promptfoo.yaml — test cases are product-readable documentation."),
        ],
        [
          s("Braintrust — experiments, datasets, production logging loop. "),
          x(
            "Unified platform: log traces from prod, curate datasets from failures, run eval experiments, compare runs over time.",
            "Paid SaaS; strong for teams wanting eval + observability in one place without building internal tooling.",
          ),
          s(" Tool choice: RAGAS/PromptFoo for OSS CI glue; Braintrust when PM wants a eval command center without eng building one."),
        ],
      ],
      examples: [
        {
          title: "RAGAS in weekly RAG standup",
          body: "Team dashboarded RAGAS faithfulness + context recall per corpus version. PM saw recall drop when PDF parser upgrade broke tables — precision held so manual QA missed it. Metric naming aligned PM and eng on same failure.",
        },
        {
          title: "PromptFoo matrix — 4 prompts × 3 models",
          body: "YAML defined 80 cases; CI rendered HTML diff report per PR. PM compared cost vs faithfulness tradeoff visually — chose gpt-4o-mini + prompt C for 90% of traffic. Experiment took 2 eng-days not 2 eng-weeks.",
        },
        {
          title: "Braintrust from prod failures to golden cases",
          body: "Thumbs-down traces auto-flagged in Braintrust; PM reviewed 20/week, promoted 5 to golden dataset. Eval suite grew with real failure modes. Closed loop reduced repeat incidents 40% quarter over quarter.",
        },
      ],
    }),
    buildSection({
      number: "7.9",
      title: "Benchmark gaming",
      subtitle: "Goodhart's Law — when the metric becomes the target",
      take: "When teams optimise aggressively for a benchmark or proxy metric, the metric stops measuring what matters — Goodhart's Law — producing systems that ace evals and fail users, or public leaderboards that reward contamination and overfitting.",
      why: "PMs approve OKRs tied to eval scores. Without gaming awareness, you incentivise verbose answers, judge-friendly phrasing, and golden-set memorisation instead of user value.",
      paragraphs: [
        [
          s("Goodhart's Law in AI: 'When a measure becomes a target, it ceases to be a good measure.' "),
          x(
            "Optimise ROUGE → longer extractive summaries. Optimise LLM-judge faithfulness → hedging and refusal overload. Optimise benchmark MMLU → train on benchmark leakage.",
            "Public benchmarks (MMLU, HumanEval, MT-Bench) are useful directional signals, not product readiness certificates.",
          ),
          s(" No model's leaderboard score replaces eval on your data for your users."),
        ],
        [
          s("Common gaming patterns in product teams. "),
          x(
            "Cherry-picking golden set examples that pass. Prompt stuffing judge keywords. Retrieval that returns chunks containing golden answers verbatim. Fine-tuning on eval questions.",
            "Red team the eval: can a bad change pass? If yes, metric is hollow.",
          ),
          s(" PM culture: celebrate caught regressions, not green dashboards — gaming thrives when scores are politics."),
        ],
        [
          s("Defences: multi-metric gates, holdout sets, online validation, human audits. "),
          x(
            "No single number ships alone. Rotate holdout quarterly. Compare offline winners to online KPIs — if they diverge, trust online.",
            "Adversarial eval: deliberately hard cases, user-reported failures, synthetic traps.",
          ),
          s(" Leaderboard literacy for execs: 'SOTA on X' ≠ 'safe for our compliance use case.'"),
        ],
      ],
      examples: [
        {
          title: "Judge keyword stuffing",
          body: "Engineer added 'According to the provided context' to every answer — faithfulness judge score +12%, user complaints about robotic tone +30%. PM added tone metric and human spot-check; keyword hack reverted.",
        },
        {
          title: "MMLU hype vs product reality",
          body: "Exec wanted model swap for 'higher MMLU.' On-company golden set, new model regressed on tabular PDF extraction. PM slide: public benchmark vs our slice — decision reverted. Benchmark wasn't wrong; it wasn't ours.",
        },
        {
          title: "Train-test contamination scandal pattern",
          body: "Industry pattern: models benchmarked on test data seen in training. PM lesson for golden sets: rotate holdout, watermark internal eval sets, never publish them. Your golden data is IP and your honest bar.",
        },
      ],
    }),
    buildSection({
      number: "7.10",
      title: "PM lens",
      subtitle: "Owning the quality bar, not just the feature spec",
      take: "The PM owns what 'good enough to ship' means — writing rubrics, funding golden datasets, setting regression thresholds, and refusing launch when eval slices fail — because eng can build the harness but only product can define the bar users need.",
      why: "AI projects fail when eval is 'phase 2.' PMs who front-load eval requirements ship slower once and faster forever; PMs who don't ship demos that become production incidents.",
      paragraphs: [
        [
          s("Eval-ready PRD checklist. "),
          x(
            "Success metrics per user intent slice. 20+ exemplar inputs with expected behaviour. Failure modes ranked by severity. Release thresholds (offline + online). Owner for golden set maintenance.",
            "If any box is empty, the story is underspecified — not 'ready for eng estimate.'",
          ),
          s(" Attach eval plan to the same Jira epic as the feature — not a child epic deferred to QA."),
        ],
        [
          s("Staffing and timeline realism. "),
          x(
            "V1 golden set: 1–2 weeks PM + SME time. Harness integration: 1–2 eng weeks. Human calibration ongoing: budget quarterly.",
            "Eval is OPEX like monitoring — not one-time CAPEX.",
          ),
          s(" Push back on 'eval later' the same way you'd push back on 'security later.'"),
        ],
        [
          s("Communicating eval to stakeholders. "),
          x(
            "Show slice dashboards, not hero examples. Explain tradeoffs: 'We ship 4% faithfulness gain, accept 200ms latency.' Document known failures in release notes internally.",
            "Green eval + red online → fix metric mapping. Red eval + green online → understand before overriding.",
          ),
          s(" Your credibility as AI PM is 'we know when we're wrong' — eval makes that visible early."),
        ],
      ],
      examples: [
        {
          title: "PM blocked launch — documented and respected",
          body: "Safety slice on golden set failed 0.68 vs 0.80 threshold for healthcare triage assistant. PM wrote one-pager: failing cases, user harm scenario, fix ETA. Exec delayed launch 2 weeks — no post-mortem fire drill. Eval earned trust.",
        },
        {
          title: "Eval OKR paired with feature OKR",
          body: "Q OKR: 'Ship copilot v2' AND 'Faithfulness ≥ 0.88 on golden v2, zero regression on safety slice.' Team hit both. PM avoided classic 'shipped on date, quality debt invisible' trap.",
        },
        {
          title: "Golden set as onboarding doc",
          body: "New PMs reviewed 50 golden cases in week one — faster domain ramp than architecture diagrams. PM institutionalised: every feature adds ≥10 cases to golden set before GA. Knowledge compounded.",
        },
      ],
    }),
  ],
  quiz: [
    {
      q: "Why are AI evals fundamentally harder than traditional software unit tests?",
      options: [
        "AI models use more CPU",
        "Outputs are non-deterministic and correctness is often subjective and context-dependent",
        "Python is slower than compiled languages",
        "AI features don't need testing",
      ],
      correct: 1,
      correctFeedback:
        "Right. LLM outputs vary run-to-run and 'good' depends on product intent — evals must measure distributions and encode subjective criteria.",
      wrongFeedback:
        "The core difficulty is non-determinism and subjective quality, not infrastructure. Re-read section 7.1.",
    },
    {
      q: "BLEU and ROUGE are best used as:",
      options: [
        "The only metrics needed for any LLM product",
        "Cheap regression signals where reference text matters — not sole proxies for user satisfaction",
        "Replacements for all human evaluation",
        "Metrics that measure semantic equivalence perfectly",
      ],
      correct: 1,
      correctFeedback:
        "Exactly. BLEU/ROUGE measure n-gram overlap; useful for constrained tasks and trends, but poor alone for open-ended LLM quality.",
      wrongFeedback:
        "BLEU/ROUGE measure surface overlap, not meaning. Modern RAG eval prefers faithfulness and relevance metrics. Re-read section 7.3.",
    },
    {
      q: "What is the main advantage of pairwise evaluation over absolute 1–10 scoring?",
      options: [
        "It's faster to run in production",
        "Humans and judges are more reliable at comparing two options than assigning absolute scores",
        "It eliminates the need for a golden dataset",
        "It only works for image models",
      ],
      correct: 1,
      correctFeedback:
        "Right. Relative comparisons are more stable; pairwise data also powers DPO/RLHF and prompt tournaments.",
      wrongFeedback:
        "Pairwise improves judgment reliability, not speed alone. Re-read section 7.5.",
    },
    {
      q: "A golden dataset should NOT be:",
      options: [
        "Versioned and stratified by user intent",
        "Iterated against without any held-out lockbox set",
        "Sourced from real production-like examples",
        "Used for nightly regression runs",
      ],
      correct: 1,
      correctFeedback:
        "Correct. Tuning against the entire golden set without a held-out slice causes overfitting — your eval stops predicting production quality.",
      wrongFeedback:
        "Golden sets need versioning, representativeness, and a locked holdout. Re-read section 7.6.",
    },
    {
      kind: "categorize",
      q: "Match each eval tool to its primary strength.",
      categories: ["RAGAS", "PromptFoo", "Braintrust"],
      items: [
        { text: "Faithfulness and context recall metrics for RAG pipelines.", category: 0 },
        { text: "YAML-driven prompt × model matrix testing in CI.", category: 1 },
        { text: "Experiment tracking plus prod-to-dataset curation loop.", category: 2 },
        { text: "Aspect critique scoring for retrieval quality.", category: 0 },
        { text: "LLM-rubric assertions across provider APIs.", category: 1 },
        { text: "Compare eval runs over time with team dashboards.", category: 2 },
      ],
      correctFeedback:
        "Right. RAGAS = RAG metrics; PromptFoo = prompt/model CI matrices; Braintrust = experiment + logging platform.",
      wrongFeedback:
        "RAGAS focuses on RAG assessment, PromptFoo on configurable test matrices, Braintrust on end-to-end eval ops. Re-read section 7.8.",
    },
    {
      kind: "order",
      q: "Order the recommended eval maturity ladder from first to last.",
      prompt: "Drag to arrange first (top) to last (bottom).",
      items: [
        "Unit checks — JSON schema, format, safety regex",
        "Golden dataset with offline integration metrics",
        "Regression CI on every prompt/model change",
        "LLM-as-judge with periodic human calibration",
        "Online metrics and prod failure → golden case loop",
      ],
      correctFeedback:
        "Exactly. Start with cheap deterministic gates, build golden offline regression, add judges and calibration, close the loop with online reality.",
      wrongFeedback:
        "Eval maturity stacks: unit → golden offline → CI regression → calibrated judges → online loop. Re-read sections 7.2 and 7.10.",
    },
  ],
});
