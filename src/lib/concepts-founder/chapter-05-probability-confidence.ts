import { buildChapter, buildSection, s, x, sectionWithDiagram } from "../concepts-pb4-helpers";

export const chapter05ProbabilityConfidence = buildChapter({
  slug: "founder-probability-confidence",
  number: 5,
  shortTitle: "Probability & Confidence",
  title: "Probability, Confidence & What AI Can and Cannot Promise",
  readingMinutes: 18,
  summary:
    "AI models don't look up answers — they sample from probability distributions. Founders who understand confidence, calibration, and thresholds ship products that manage expectations, survive diligence, and avoid promising deterministic magic.",
  keyTakeaway:
    "A model's confidence score is internal mathematical distance, not a guarantee of truth. What you promise customers, investors, and regulators is defined by the threshold where probability becomes action — and that is a founder decision, not an engineering default.",
  pmCallout:
    "As a founder: you own what your product promises. If you leave decision thresholds to engineering defaults, you inherit an arbitrary risk profile that assumes false positives and false negatives cost the same — and your churn, liability, and fundraising story will reflect it.",
  sections: [
    sectionWithDiagram({
      number: "5.1",
      title: "AI outputs are probability distributions, not facts",
      subtitle: "The mental shift that changes what you can promise investors and customers",
      take: "AI models never truly know an answer — they calculate the probability that an output is statistically appropriate. Every generation is a bet sampled from a distribution, not a database lookup.",
      why: "When enterprise customers complain that regenerate produced different numbers from the same prompt, you cannot file a bug to fix the database. You must redesign positioning and UI so the product is understood as probabilistic — or you will churn accounts and lose diligence credibility.",
      paragraphs: [
        [
          s("Your top enterprise customer submits a furious ticket. They drafted an executive summary with your AI, clicked regenerate with the identical prompt, and got different numbers and tone. They assume the software is broken. "),
          x(
            "They apply deterministic mental model — same input, same output — to a probabilistic system.",
            "Humans expect computers to act like calculators. You must train them to treat AI like an educated guess, not a ledger entry.",
          ),
          s(" The product isn't broken; it operates as designed — and your marketing may be lying."),
        ],
        [
          s("Mechanically, neural networks map inputs to multi-dimensional probability distributions. An LLM picks the highest-likelihood next token; a classifier flags a transaction based on statistical likelihood at that millisecond. "),
          x(
            "The model retrieves no truth table — it calculates the most probable next step from training patterns.",
            "Slight variations in underlying math produce different outputs for identical inputs. Randomness is architectural, not a bug.",
          ),
          s(" Every output is a mathematical bet, not a fact."),
        ],
        [
          s("The business consequence: AI software is negotiation, not contract. Traditional software: click X, always Y. AI software: click X, probably Y, maybe Z. "),
          x(
            "Selling AI as flawless oracle guarantees a hallucination event that becomes a churn story, a lawsuit, or a diligence red flag.",
            "Founders must align sales promises, SLA language, and UI design with probabilistic reality — especially in enterprise and regulated markets.",
          ),
          s(" Expectation management is founder work, not a footnote in the pitch deck."),
        ],
      ],
      examples: [
        {
          title: "ChatGPT temperature — Creativity vs consistency",
          body: "Temperature 0 forces the most probable token every time — deterministic but dull. Higher temperature introduces randomness and creativity, guaranteeing different outputs per run. Founders exposing generation to customers must choose defaults that match brand promise: creative tool vs reliable assistant.",
        },
        {
          title: "Spotify Discover Weekly — Probability, not promise",
          body: "Spotify calculates probability you'll listen without skipping — never guarantees you'll love a track. 'Discovery' framing manages expectations around occasional misses. Founders should name features to imply uncertainty (suggest, draft, assist) not certainty (answer, decide, verify).",
        },
        {
          title: "Amazon Alexa — Uncertainty in voice",
          body: "Alexa says 'I'm not sure I understood' instead of executing wrong commands aggressively. Exposing uncertainty salvages trust. Founders building voice or chat products should budget UX for graceful 'I don't know' — not confident wrong answers.",
        },
      ],
    }, {
      kind: "diagram",
      id: "bl-ai-transformation",
      type: "flow",
      title: "AI Initiative Execution Path",
      caption:
        "Assess → prioritise → pilot → scale → embed. The sequence that turns AI ambition into measurable outcomes.",
    }),
    buildSection({
      number: "5.2",
      title: "What is a confidence score",
      subtitle: "What 87% confidence actually means — and what you must never promise",
      take: "A confidence score measures how far a prediction sits from the model's internal decision boundary — statistical self-assurance, not ground-truth accuracy. It is the model grading its own homework.",
      why: "When your dashboard shows 'Confidence: 87%' and a customer asks if 87 of every 100 such cases are correct, you must know the honest answer is 'not necessarily.' Misrepresenting confidence in sales or investor materials creates legal and reputational liability.",
      paragraphs: [
        [
          s("Your fraud model flags a transaction: 'Confidence: 87%.' A support lead asks whether exactly 87 of every 100 such alerts are actually fraud. You hesitate — you don't actually know. "),
          x(
            "Internal mathematical certainty is not real-world accuracy. A model can be 99% confident and completely wrong.",
            "Confidence reflects distance from the decision boundary, not external truth.",
          ),
          s(" You are confusing self-assurance with guaranteed accuracy."),
        ],
        [
          s("Mechanically, classifiers output logits squeezed into 0–1 via softmax. Deep in 'fraud territory' approaches 99%; near the boundary hovers around 51%. "),
          x(
            "The score measures how strongly input matches the model's learned category definition — regardless of whether that definition is correct.",
            "Logit distance disguised as percentage is not a promise to users.",
          ),
          s(" Raw scores belong in logging pipelines, not customer-facing dashboards."),
        ],
        [
          s("The business consequence: exposing raw confidence to end users is dangerous. Humans interpret 90% confident as a factual guarantee. "),
          x(
            "If a forecast shown as 95% confident is wrong, users feel lied to — and plaintiffs' lawyers notice.",
            "Abstract scores into product language: High Risk, Strong Match, Draft — not softmax decimals.",
          ),
          s(" Founders set customer-facing language policy; engineering implements abstraction layers."),
        ],
      ],
      examples: [
        {
          title: "Stripe Radar — Risk levels not raw scores",
          body: "Stripe shows merchants 'Elevated Risk' or 'Highest Risk' — not '92.4% fraud probability.' Abstraction prevents statistical misinterpretation while preserving actionability. Founders should mandate UX abstraction before any confidence metric faces customers.",
        },
        {
          title: "Google Photos — Confidence in ranking only",
          body: "Google Photos ranks dog photos by internal confidence but never displays the score. Sort order communicates signal without false precision. Founders exposing AI rankings should consider whether numbers help or harm trust.",
        },
        {
          title: "Zillow Zestimate ranges — Honest uncertainty",
          body: "Zillow shows value ranges ($450k–$510k) instead of single confident point estimates. Ranges communicate regression uncertainty intuitively. Founders in prediction products should default to ranges or bands, not false point precision.",
        },
      ],
    }),
    buildSection({
      number: "5.3",
      title: "Confidence calibration",
      subtitle: "When stated confidence matches actual accuracy — and why investors care",
      take: "A model is calibrated when its confidence scores match real-world accuracy — 80% confident predictions right 80% of the time. Uncalibrated models lie about certainty and break any automated workflow built on threshold logic.",
      why: "If you auto-approve loans at >90% confidence during a growth push, you are trusting the model's self-assessment. Poor calibration means 90% might mean 60% actual success — destroying unit economics and any diligence claim about 'automated accuracy.'",
      paragraphs: [
        [
          s("You audit automated loan approvals set at 90% confidence threshold. Of 10,000 approved loans, 30% defaulted. The model was confident; reality was not. "),
          x(
            "Internal certainty divorced from predictive power — a calibration failure, not bad luck.",
            "Automated workflows built on lying scores automate catastrophic errors.",
          ),
          s(" Your growth metrics were inflated by miscalibrated confidence."),
        ],
        [
          s("Mechanically, calibration aligns predicted probabilities with observed frequencies. Perfect calibration: of 100 predictions at 80% confidence, exactly 80 correct. "),
          x(
            "Deep neural networks often push scores to extremes — 0% or 100% — even when unsure, because training optimizes loss, not honesty.",
            "Calibration techniques (Platt scaling, temperature scaling) fix scores post-training.",
          ),
          s(" Demand calibration curves before launching automated routing — not just precision/recall averages."),
        ],
        [
          s("The business consequence: conditional logic — if confidence > X, auto-act — collapses when X is untrustworthy. "),
          x(
            "Diligence on AI lending, insurance, and health products increasingly asks: show calibration at your production threshold.",
            "Founders who cannot produce reliability diagrams should not promise full automation in pitch decks.",
          ),
          s(" Calibration is a launch gate for any feature that routes money, health, or legal outcomes."),
        ],
      ],
      examples: [
        {
          title: "Weather forecasting — Gold-standard calibration",
          body: "When NWS says 70% chance of rain, it rains ~7 in 10 times historically. Perfect calibration earns societal trust in probabilistic products. Founders should aspire to this honesty — and cite calibration in enterprise sales, not just accuracy.",
        },
        {
          title: "Autonomous vehicle sensor fusion",
          body: "AV companies calibrate camera and lidar confidence so the driving computer knows how much to trust each sensor per millisecond. Uncalibrated 99% confidence on a shadow triggers phantom braking. Founders in safety-critical AI: calibration is existential, not academic.",
        },
        {
          title: "Medical triage AI — Calibration or ICU flood",
          body: "Hospital triage AI flagging colds as 99% critical floods the ICU. Calibration ensures internal panic matches medical severity. Regulated founders must budget calibration validation alongside FDA or CE pathways.",
        },
      ],
    }),
    sectionWithDiagram({
      number: "5.4",
      title: "Overconfident models",
      subtitle: "Why hallucinating at 98% confidence is a company-ending event",
      take: "Modern neural networks default to extreme overconfidence — hallucinating false information with absolute mathematical certainty. Models do not naturally say 'I don't know.'",
      why: "You cannot rely on the model to flag its own confusion. If your product assumes uncertain cases produce low scores, you will ship confident lies — the pattern behind every sanctioned lawyer, embarrassed enterprise, and viral AI-overview failure.",
      paragraphs: [
        [
          s("A lawyer uses your research AI. The model invents a fake case with citation and judge's name at 98% internal confidence. The lawyer submits; sanctions follow. Logs show no hesitation — only certainty. "),
          x(
            "Models don't feel shame. They lie with the same numerical confidence they state facts.",
            "Overconfidence exploits automation bias — users trust authoritative machine formatting over judgment.",
          ),
          s(" Your product became a liability multiplier, not a productivity tool."),
        ],
        [
          s("Mechanically, deep networks minimize training error — rarely optimized for healthy skepticism. Out-of-distribution inputs get forced through existing parameters. "),
          x(
            "The model has no concept of 'I haven't learned this.' It only calculates gradients and outputs wrong answers confidently.",
            "Doubt requires explicit engineering: conformal prediction, retrieval grounding, refusal training.",
          ),
          s(" Architectural guardrails are not optional in high-stakes domains."),
        ],
        [
          s("The business consequence: an AI that occasionally says 'I'm not sure' is annoying; an AI that confidently lies is brand-destroying. "),
          x(
            "Founders must build trust-but-verify into UX and contracts. Sales cannot promise accuracy your architecture cannot support.",
            "E&O insurance and customer contracts should reflect probabilistic limits — not deterministic SLAs you can't keep.",
          ),
          s(" Overconfidence is the gap between demo magic and production liability."),
        ],
      ],
      examples: [
        {
          title: "Google AI Overviews — Confident glue on pizza",
          body: "Google's search summaries confidently advised putting glue on pizza — sarcastic Reddit treated as culinary fact, rendered with supreme search authority. Founders syndicating LLM output into high-trust surfaces need retrieval grounding and confidence gating, not raw generation.",
        },
        {
          title: "Tesla phantom braking — Vision overconfidence",
          body: "Shadows and overpasses trigger emergency brakes because vision models confidently hallucinate obstacles. Overconfidence overrides human drivers. Physical-world AI founders: false positive cost includes injury liability, not just UX annoyance.",
        },
        {
          title: "Copilot ghost text — UI defeats overconfidence",
          body: "Copilot never auto-inserts code — grey ghost text requires Tab acceptance. UI treats every output as suggestion, neutering internal 99% confidence. Founders should default to suggest-don't-assert patterns for generative features.",
        },
      ],
    }, {
      kind: "diagram",
      id: "ch1-paradigm-shift",
      type: "comparison",
      title: "Deterministic Rules vs Probabilistic Outputs",
      caption:
        "Traditional software returns the same answer every time; ML returns confidence scores. Product and legal design must account for uncertainty.",
    }),
    buildSection({
      number: "5.5",
      title: "Decision thresholds",
      subtitle: "The confidence level at which you act — and who owns that number",
      take: "A decision threshold converts continuous probability into binary action: if score > X, delete, approve, refund, or block. The model outputs a percentage; the product — and the founder — decides what X is.",
      why: "Until someone sets X, the model is useless. X defines your risk profile: low threshold catches more fraud but angers good customers; high threshold preserves UX but lets toxicity through. This is strategy, not statistics.",
      paragraphs: [
        [
          s("Your sentiment model scores toxicity 0.00–1.00 perfectly. But the feature does nothing until code says if score > X, delete comment. Nobody has chosen X. "),
          x(
            "The model scores; the threshold acts. X is the single most important configuration in any AI feature.",
            "Engineering cannot pick X from ROC curves alone — X encodes business judgment.",
          ),
          s(" An unchosen threshold is an unshipped feature with hidden risk."),
        ],
        [
          s("Mechanically, threshold 0.80 means 0.79 stays online and 0.81 deletes — nearly identical toxicity, opposite outcomes. "),
          x(
            "Moving X slightly reclassifies millions of points overnight without changing a single model weight.",
            "The threshold is the fastest production dial — faster than retraining.",
          ),
          s(" Founders should know their production X and why it was chosen."),
        ],
        [
          s("The business consequence: threshold is your company's risk appetite in one number. "),
          x(
            "Low X on moderation: clean forum, false-positive bans. High X: free speech feel, subtle toxicity remains.",
            "False positive vs false negative costs are never symmetric — founders must price them explicitly.",
          ),
          s(" Competitors beating you may not have better models — just better-tuned X for the market."),
        ],
      ],
      examples: [
        {
          title: "Apple FaceID — Extreme precision threshold",
          body: "FaceID requires overwhelming confidence before unlock. Apple accepts passcode friction (false negative) over stranger unlock (false positive). Founders in security or identity should bias thresholds toward precision — one breach ends the company story.",
        },
        {
          title: "Uber fraud thresholds — Market-specific X",
          body: "Uber uses the same models but different thresholds per country — aggressive blocks in high-fraud markets, permissive in growth markets. One model, multiple risk strategies. Founders with multi-segment products should segment thresholds, not just models.",
        },
        {
          title: "Gmail Important marker — Low threshold, high recall",
          body: "Gmail over-flags Important because missing a critical email hurts more than a false flag. Threshold optimized for recall over precision. Founders should articulate which error type hurts more before setting X.",
        },
      ],
    }),
    buildSection({
      number: "5.6",
      title: "Human-in-the-loop design",
      subtitle: "When to automate, when to escalate, when to suppress — and how to fund the gap",
      take: "Dual thresholds create three buckets: high confidence auto-act, low confidence auto-reject, ambiguous middle route to humans. HITL lets you ship AI months before the model handles 100% of traffic — and generates premium labels for free.",
      why: "Forcing single threshold on unsure models guarantees disaster in the margins. HITL captures ROI on easy cases while humans handle edge cases — extending runway and reducing liability while the model improves.",
      paragraphs: [
        [
          s("Your insurance AI approves obvious claims and flags obvious fraud but struggles on the complex 20% in the middle. Single threshold either auto-approves fraud or denies legitimate customers. "),
          x(
            "The solution isn't always a better model — it's routing ambiguity to humans.",
            "HITL is how founders ship revenue-generating automation before model perfection.",
          ),
          s(" Dual thresholds isolate uncertainty before it touches customers."),
        ],
        [
          s("Mechanically: above 0.90 auto-approve, below 0.10 auto-deny, 0.11–0.89 to human queue. Model handles volume; humans handle judgment. "),
          x(
            "Automating 80% of easy cases cuts opex immediately. Human experts focus where judgment actually matters.",
            "HITL turns AI into triage that scales expensive expertise.",
          ),
          s(" Design the human workflow as carefully as the model — clunky review UI destroys efficiency gains."),
        ],
        [
          s("The business consequence: HITL is a fundraising story — 'we automate 80% today, 95% next year as human labels retrain the model.' "),
          x(
            "Every human resolution must pipe back as training label. Humans aren't just safety net — they're the labelling engine.",
            "Skip the feedback loop and HITL is permanent cost center, not compounding flywheel.",
          ),
          s(" Founders model HITL headcount and label harvest rate in unit economics, not just inference cost."),
        ],
      ],
      examples: [
        {
          title: "Facebook moderation — Triage at scale",
          body: "Obvious violations auto-delete at high confidence; contextual hate speech routes to human moderators. AI as triage, not oracle. Founders at scale should plan human ops budget alongside GPU budget — investors expect both lines.",
        },
        {
          title: "Brex receipt OCR — User as HITL",
          body: "High-confidence receipts auto-reconcile; crumpled low-confidence receipts pause for employee confirmation. User becomes human-in-the-loop without hiring. Founders can design users into the loop before hiring review teams.",
        },
        {
          title: "Radiology AI — Human always decides",
          body: "FDA constraints mean AI highlights anomalies; radiologist diagnoses. AI as assistant, not autonomous clinician. Regulated founders should assume HITL is default for years, not a temporary v1 crutch.",
        },
      ],
    }),
    buildSection({
      number: "5.7",
      title: "Founder decision lens",
      subtitle: "What you promise — and the threshold where probability becomes your word",
      take: "Calibrating confidence, setting thresholds, and designing HITL are how founders exert control over models they didn't train. Outsource these to engineering defaults and you abdicate your product's risk profile, customer promise, and diligence credibility.",
      why: "Data scientists optimize F1 scores; founders optimize margin, retention, and liability. The decimal where AI takes action defines what your company stands behind — and it must appear in launch readiness, sales enablement, and investor updates.",
      paragraphs: [
        [
          s("Pre-launch sync: you ask where the decision threshold is set. Engineering says 'default 0.5.' "),
          x(
            "Default 0.5 assumes false positives and false negatives cost equally — almost never true.",
            "In your product, false positives cause immediate churn. Default threshold would destroy retention on day one.",
          ),
          s(" You almost shipped technically sound software that would kill the business."),
        ],
        [
          s("Mechanically, engineering picks ROC-optimal points maximizing statistical accuracy. Founders must ask commercially viable questions: what's the dollar cost of each error type? "),
          x(
            "Math doesn't know your CAC, legal exposure, or brand reputation. Threshold is where statistics become promise.",
            "The threshold is your steering wheel — the only production dial that changes behavior without retraining.",
          ),
          s(" Mandate cost-matrix reviews: errors at various X levels translated to UX and revenue impact."),
        ],
        [
          s("The business consequence: misaligned thresholds feel like product failure even when the model is 'accurate.' "),
          x(
            "Dial up required confidence → conservative product, more HITL, higher trust. Dial down → aggressive automation, higher liability.",
            "Sales promises must match threshold policy. Promising 'fully automated' at 0.6 threshold is fraud-adjacent.",
          ),
          s(" Founders approve launch only when X is set for business ROI — not because the ROC curve looks pretty."),
        ],
      ],
      examples: [
        {
          title: "E-commerce returns bot — Brand over wholesale cost",
          body: "Denying a legitimate return triggers viral Twitter rage costing thousands in brand damage; approving a fraudulent return costs $20 wholesale. Founder mandated high threshold for denials — default approve to protect brand. Threshold encoded values, not math.",
        },
        {
          title: "Slack notification suppression — Boss message never muted",
          body: "Slack set suppression threshold insanely high — only mute when absolutely certain message is trivial. Accepted notification noise over missing boss messages. Founders should identify sacred false-negative cases and encode them in threshold policy.",
        },
        {
          title: "Waymo left turns — Safety margin as founder policy",
          body: "Waymo PMs dictate confidence required for unprotected left turns — not engineers from ROC curves. Three-minute intersection wait beats collision liability. Founders in physical-world AI must accept UX degradation for infinite-cost error prevention.",
        },
      ],
    }),
  ],
  quiz: [
    {
      q: "An enterprise customer is furious that regenerate produced different output from the same prompt. What's the fundamental issue?",
      options: [
        "The model database was corrupted during deployment.",
        "The customer expects deterministic behavior from a probabilistic system that samples from a distribution.",
        "The prompt was too short for the context window.",
        "The training data was biased toward English.",
      ],
      correct: 1,
      correctFeedback:
        "Right. AI outputs are statistical bets, not database lookups. Variation is mathematically guaranteed unless temperature is zero.",
      wrongFeedback:
        "Re-read section 5.1. The model isn't broken — it's probabilistic by architecture.",
    },
    {
      q: "Your dashboard shows 'Fraud Confidence: 95%.' What does this number actually represent?",
      options: [
        "Exactly 95 of every 100 such transactions are fraudulent.",
        "The transaction sits far from the model's internal decision boundary — internal certainty, not a guarantee of reality.",
        "The model queried 95 fraud databases before deciding.",
        "There is a 5% chance the alert is a false positive by definition.",
      ],
      correct: 1,
      correctFeedback:
        "Exactly. Confidence is logit distance disguised as percentage — self-assurance, not ground truth.",
      wrongFeedback:
        "Re-read section 5.2. Models can be 99% confident and completely wrong.",
    },
    {
      q: "You auto-approve loans at >90% model confidence. Why must you verify calibration first?",
      options: [
        "Uncalibrated models are illegal in all jurisdictions.",
        "A 90% confidence score might correspond to only 60% real-world success, destroying automated economics and diligence claims.",
        "Calibration reduces API latency.",
        "Uncalibrated models cannot process unstructured documents.",
      ],
      correct: 1,
      correctFeedback:
        "Right. If the score lies about its own accuracy, your entire if/then automation logic collapses.",
      wrongFeedback:
        "Re-read section 5.3. Calibration proves the threshold you bet the business on is trustworthy.",
    },
    {
      kind: "categorize",
      q: "For each scenario, should you raise the threshold (more conservative) or lower it (more aggressive)?",
      categories: [
        "Raise threshold (favour precision)",
        "Lower threshold (favour recall)",
      ],
      items: [
        { text: "Auto-deleting comments flagged toxic in a paid community.", category: 0 },
        { text: "Cancer screening pre-filter routing suspicious scans to radiologists.", category: 1 },
        { text: "Airport scanner identifying prohibited items.", category: 1 },
        { text: "Automated loan approval where wrong approve costs ~$50k.", category: 0 },
        { text: "Support inbox spam filter where missing real tickets is unacceptable.", category: 1 },
        { text: "Auto-refund bot issuing credits without human review.", category: 0 },
      ],
      correctFeedback:
        "Right. When acting wrongly hurts more, raise the bar. When failing to act hurts more, lower it. Founders own this tradeoff.",
      wrongFeedback:
        "Ask: what's worse — acting wrongly or failing to act? Re-read sections 5.5 and 5.7.",
    },
    {
      kind: "order",
      q: "Put the Human-in-the-Loop decision flow in correct order.",
      prompt: "Drag to arrange — first step (top) to last (bottom).",
      items: [
        "Model produces a confidence score for each input.",
        "Score compared to high and low thresholds for auto-approve and auto-reject.",
        "Ambiguous middle band routed to human reviewer queue.",
        "Human decisions logged as labels and fed into next training cycle.",
      ],
      correctFeedback:
        "Exactly. HITL automates confident extremes, escalates the middle, and harvests human judgment as training signal.",
      wrongFeedback:
        "Flow: predict → threshold → escalate → label harvest. Skipping step 4 stalls improvement. Re-read section 5.6.",
    },
    {
      q: "Engineering proposes launching with the default 0.5 decision threshold. As a founder, your best response is:",
      options: [
        "Accept it — 0.5 is industry standard and legally safe.",
        "Reject it until a cost matrix shows error rates at multiple thresholds mapped to churn, liability, and margin impact.",
        "Lower it to 0.3 to maximize automation and impress investors with volume.",
        "Remove thresholds entirely and let the model decide organically.",
      ],
      correct: 1,
      correctFeedback:
        "Right. Threshold is where probability becomes your promise. Defaults ignore unit economics.",
      wrongFeedback:
        "Re-read section 5.7. Founders must own X based on business cost of errors, not ROC aesthetics.",
    },
  ],
});
