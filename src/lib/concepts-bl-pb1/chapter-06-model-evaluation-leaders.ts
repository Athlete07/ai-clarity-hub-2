import { buildChapter, buildSection, s, x, BL_CALLOUT } from "../concepts-bl-helpers";

export const chapter06BlModelEvaluationLeaders = buildChapter({
  slug: "bl-model-evaluation-leaders",
  number: 6,
  shortTitle: "Model Evaluation for Leaders",
  title: "Model Evaluation for Leaders — Reading AI Performance Without Being a Data Scientist",
  readingMinutes: 22,
  summary:
    "Business leaders are presented with AI performance claims in vendor pitches, project updates, and board reports. Understanding which metrics matter, which mislead, and how to commission independent evaluation protects organisations from expensive AI disappointments and enables better vendor negotiation.",
  keyTakeaway:
    "Accuracy is the least useful AI evaluation metric in most business contexts. Precision, recall, and business-outcome metrics — calibrated against relevant baselines — are the numbers that tell you whether an AI system will actually improve your operation.",
  pmCallout: BL_CALLOUT,
  sections: [
    buildSection({
      number: "6.1",
      title: "Why Accuracy Is the Wrong Metric",
      subtitle: "The performance number most vendors lead with — and why it tells you almost nothing",
      take: "Overall accuracy — the percentage of cases the model gets right — is easy to compute and easy to game. It is the least useful evaluation metric for most real-world business decisions. Leaders who evaluate AI on accuracy alone will buy tools that underperform on the cases that matter most.",
      why: "Accuracy is misleading in imbalanced datasets — which are the majority of real business problems. A fraud detection model that flags nothing would achieve 99.8% accuracy if 0.2% of transactions are fraudulent — and catch zero fraud. 'Our model is 99.8% accurate' would be literally true and operationally useless.",
      paragraphs: [
        [
          s("The accuracy paradox: a model that predicts the majority class for every input achieves high accuracy on imbalanced problems. "),
          x(
            "If 98% of insurance claims are legitimate and 2% are fraudulent, a model that always predicts 'legitimate' achieves 98% accuracy — without detecting a single fraud case. Vendors can report 98% accuracy for this model with a straight face.",
            "Business leaders who accept accuracy as the primary metric on imbalanced problems are accepting a number that could be achieved without any actual AI capability. Always ask: what is the baseline accuracy — the performance achieved by predicting the majority class every time?",
          ),
          s(" Require vendors to report both model accuracy and baseline accuracy. The gap between them is the actual value the model adds. A model with 98% accuracy against a 97% baseline has added almost nothing."),
        ],
        [
          s("Aggregate accuracy masks performance variation across the cases that matter. "),
          x(
            "An AI system may achieve 92% accuracy overall while performing at 65% accuracy on the specific cases your business most needs to get right — edge cases, unusual presentations, or minority subgroups. The 92% headline is real; the 65% on your most important cases is also real and far more consequential.",
            "HR leaders, finance teams, and compliance teams frequently deal with exactly the cases where AI underperforms: unusual employee situations, complex financial transactions, edge-case regulatory scenarios. Aggregate accuracy misleads by averaging these cases with the easy majority.",
          ),
          s(" Request performance breakdowns by case complexity, subgroup, and use case type — not just aggregate accuracy. The disaggregated numbers reveal where the model actually adds value."),
        ],
        [
          s("The performance metric should be tied to the business outcome, not to the model output. "),
          x(
            "A claims processing AI is not valuable because it achieves 91% claims classification accuracy. It is valuable if it reduces claims processing time by 30% and maintains claims error rates. Measure the business outcome, not the model output accuracy. The two are correlated but not identical.",
            "The model output accuracy determines what is technically possible. The business outcome measures whether that technical capability translates into operational value. Both must be measured; the business outcome is the one that appears in the ROI calculation.",
          ),
          s(" Define business-outcome success metrics before accepting any model-output accuracy metric as evidence of value. The former is in your P&L; the latter is in the vendor's specification sheet."),
        ],
      ],
      examples: [
        {
          title: "A hospital's sepsis AI — accuracy vs recall",
          body: "A hospital evaluated a sepsis early warning AI reporting 94% accuracy. The clinical team asked for the breakdown: the model identified 72% of sepsis cases (recall of 0.72) but also generated false alerts for 18% of non-sepsis patients (false positive rate of 0.18). For sepsis — where missed cases are life-threatening — 72% recall was clinically unacceptable. A different model with 87% overall accuracy identified 94% of sepsis cases. The hospital selected the lower-accuracy, higher-recall model. Accuracy was the wrong metric.",
        },
        {
          title: "Customer churn prediction — baseline comparison",
          body: "A SaaS company evaluated an AI churn prediction tool reporting 89% accuracy. Analysis revealed: the company's natural churn rate was 11% per quarter. A model predicting 'no churn' for every customer would achieve 89% accuracy. The vendor's model had not outperformed the naive baseline. The procurement team negotiated a performance improvement guarantee above the baseline — not an absolute accuracy threshold. The difference between accuracy and baseline-adjusted accuracy saved a six-figure procurement error.",
        },
        {
          title: "Fraud detection — the 0.2% problem",
          body: "A payments company evaluated fraud detection AI with 99.85% reported accuracy against its 0.15% fraud rate. Detailed analysis showed the model caught 43% of fraud cases — a recall of 0.43. The 0.57% of missed fraud was costing £2.3M annually. A competitor model with 99.72% accuracy (lower) caught 91% of fraud — recall of 0.91 — reducing annual fraud losses to under £400K. The accuracy-focussed evaluation would have selected the inferior model. Precision and recall were the relevant metrics.",
        },
      ],
    }),
    buildSection({
      number: "6.2",
      title: "Precision and Recall in Business Language",
      subtitle: "Two metrics that replace accuracy — translated for operational decision-making",
      take: "Precision answers: of the cases the AI flagged, what fraction were correct? Recall answers: of all the cases that should have been flagged, what fraction did the AI catch? Business leaders in operations, finance, and HR should be as fluent in these two numbers as they are in conversion rate and yield.",
      why: "Precision and recall are the operational metrics that determine whether an AI system creates value or creates noise in your business processes. Leaders who understand them can set meaningful vendor performance requirements and evaluate whether AI tools are performing as needed.",
      paragraphs: [
        [
          s("Precision measures the quality of the AI's positive predictions — what fraction are actually correct. "),
          x(
            "In fraud detection: of every 100 transactions flagged as fraudulent, how many were actually fraudulent? If precision is 0.6, then 60 were fraud and 40 were legitimate customers incorrectly blocked — a significant false positive burden.",
            "Low precision means the AI generates noise: your team investigates many false alarms for each genuine case. The operational cost of low precision is investigator time, customer friction, and alert fatigue.",
          ),
          s(" Precision is the metric for operations leaders whose teams must act on AI flags. Low precision means your team works hard investigating noise. High precision means flags are worth acting on."),
        ],
        [
          s("Recall measures the coverage of the AI's detection — what fraction of actual cases it catches. "),
          x(
            "In fraud detection: of every 100 fraudulent transactions that occurred, how many did the AI flag? If recall is 0.75, then 25 fraud cases passed undetected. The operational cost of low recall is the harm caused by missed cases — fraud losses, missed diagnoses, undetected compliance violations.",
            "Low recall means the AI misses significant portions of the problem it was deployed to detect. High recall means the AI covers the problem comprehensively — at the potential cost of lower precision.",
          ),
          s(" Recall is the metric for risk leaders whose primary concern is missed cases. Low recall means the problem is larger than the AI's detection suggests."),
        ],
        [
          s("The business translation of precision-recall trade-off: quality of alerts versus coverage of the problem. "),
          x(
            "Increasing recall typically decreases precision and vice versa — they trade off against each other for a fixed model. A fraud system with very high recall catches almost everything but generates many false alarms. A fraud system with very high precision generates few false alarms but misses significant fraud.",
            "The right balance depends on the relative cost of false alarms (precision failure) versus missed cases (recall failure) in your specific context — which is the business leader's call, not the data scientist's.",
          ),
          s(" When a vendor reports a precision-recall trade-off, the business leader's job is to specify which side of the trade-off is more costly — not to accept the vendor's default balance."),
        ],
      ],
      examples: [
        {
          title: "HR — precision in candidate screening",
          body: "A talent acquisition team deployed AI CV screening. The team processed every AI-flagged candidate — so precision determined team workload. A precision of 0.55 meant 45% of reviewed candidates did not meet the hiring criteria — significant recruiter time spent on false positives. Improving precision to 0.75 through threshold adjustment reduced team workload by 27% with no change in the quality of candidates progressed. For HR teams with high screening volume, precision directly translates to headcount efficiency.",
        },
        {
          title: "Compliance monitoring — recall as the primary metric",
          body: "A bank's anti-money laundering (AML) AI is evaluated primarily on recall — the fraction of actual money laundering cases flagged for investigation. Missing an AML case (low recall) triggers regulatory consequence; generating a false AML alert (low precision) triggers investigation overhead. The FCA expects recall performance to be the primary metric in AML system design. Compliance leaders deploying AML AI should specify recall requirements first, then manage precision as a cost control.",
        },
        {
          title: "Quality control — precision-recall in manufacturing",
          body: "A manufacturer's defect detection AI had to balance two costs: passing defective products (recall failure, warranty cost) versus scrapping acceptable products (precision failure, waste cost). Engineering quantified: a missed defect cost £250 in warranty; a false reject cost £40 in scrap. The cost asymmetry favoured high recall over high precision — accepting more false rejects to reduce missed defects. The threshold setting reflected the manufacturer's known unit economics. The precision-recall decision was a finance decision, not an engineering decision.",
        },
      ],
    }),
    buildSection({
      number: "6.3",
      title: "The Precision-Recall Trade-Off",
      subtitle: "Why improving one metric generally worsens the other — and how to navigate this as a leader",
      take: "For any AI decision system operating at a fixed threshold, increasing precision decreases recall and vice versa. This is not a model failure — it is a structural property of probabilistic classifiers. Leaders who understand this can set explicit priorities and manage the trade-off intentionally rather than accepting vendor defaults.",
      why: "Vendors often optimise models for a trade-off point that minimises technical error — not the trade-off point that minimises business harm. Leaders who specify the preferred trade-off negotiate better and deploy better-calibrated AI systems.",
      paragraphs: [
        [
          s("The precision-recall curve shows all possible trade-off points for a given model. "),
          x(
            "As you lower the detection threshold, the model flags more cases — recall increases because you catch more true positives. But you also flag more false positives — precision decreases. As you raise the threshold, the model flags fewer cases — fewer false positives (precision improves) but also fewer true positives (recall decreases).",
            "The precision-recall curve is the full trade-off landscape. Any point on the curve is achievable; the business leader's job is to specify which point serves the business best.",
          ),
          s(" Request the full precision-recall curve from any AI vendor — not just a single operating point. The curve shows what is achievable across all threshold settings."),
        ],
        [
          s("The F1 score is a technical metric that balances precision and recall — but business context should determine the weighting. "),
          x(
            "The F1 score is the harmonic mean of precision and recall, treating both equally. It is a reasonable summary metric when false positives and false negatives are equally costly. When they are not — which is almost always the case in business contexts — F-beta scores with explicit weighting should be used.",
            "An F2 score weights recall twice as heavily as precision — appropriate when missing cases (false negatives) is twice as costly as false alarms. An F0.5 score weights precision twice as heavily — appropriate when false alarms are twice as costly as missed cases. The choice of weighting is a business decision that should precede model training.",
          ),
          s(" When vendors present F1 scores as their primary metric, ask whether equal weighting of precision and recall reflects your business context. If not, specify the correct weighting before accepting any performance benchmark."),
        ],
        [
          s("The precision-recall trade-off is also a resource allocation decision. "),
          x(
            "High recall with lower precision means more cases for human reviewers to process — you catch more true cases but also more false alarms. The human review team cost scales with the total flagged volume, not just the true positive volume. Increasing recall to catch 15% more cases may increase review team workload by 40% if precision drops proportionately.",
            "Leaders should model the human oversight cost implications of different trade-off points — not just the detection performance implications. The optimal trade-off point balances detection coverage against oversight cost.",
          ),
          s(" Model human oversight cost at multiple precision-recall trade-off points before finalising the operational threshold. The economically optimal point may not be the technically optimal point."),
        ],
      ],
      examples: [
        {
          title: "Content moderation — the trade-off at scale",
          body: "A social platform with 50 million daily posts operates AI content moderation. At a high-recall, low-precision threshold: 2% of posts are flagged, 15% of flagged posts are actually policy-violating (precision 0.15). Human moderation team: 800 FTE. At a lower-recall, higher-precision threshold: 0.5% of posts flagged, 45% of flagged posts are policy-violating (precision 0.45). Human moderation team: 200 FTE. The trade-off is 3x fewer missed violations versus 4x the moderation cost. Leadership must decide which side of this trade-off aligns with platform values and regulatory obligations.",
        },
        {
          title: "Accounts payable AI — precision first",
          body: "A global manufacturer deployed AI for accounts payable invoice matching. The finance director specified precision as the primary metric: 'I will not have false invoice approvals.' The AI was configured to flag anything uncertain for human review — accepting high review volume in exchange for high precision on auto-approved invoices. Result: 62% of invoices auto-approved with 99.1% precision; 38% to human review. The finance director's business priority drove the configuration — not technical optimisation.",
        },
        {
          title: "Credit collections AI — recall first",
          body: "A lending company deployed AI to identify customers at risk of defaulting for early intervention. The collections director specified recall as primary: missing an at-risk customer was worse than unnecessary outreach. The AI was configured for high recall, accepting 35% false positive rate on outreach. The intervention cost per unnecessary contact: £12. The cost of a missed default: £850. The 70:1 cost ratio justified the recall-first configuration — demonstrating that the precision-recall trade-off is a finance optimisation, not a technical default.",
        },
      ],
    }),
    buildSection({
      number: "6.4",
      title: "Baselines — What Should Your AI Beat?",
      subtitle: "The comparison that reveals whether an AI system is genuinely valuable",
      take: "Every AI evaluation requires a baseline: the performance achievable without the AI system. Without a baseline, there is no way to assess how much value the AI adds. Leaders who accept AI performance numbers without baseline comparisons cannot evaluate whether the investment is justified.",
      why: "Impressive absolute accuracy numbers are meaningless without comparison to what is already achievable. A baseline comparison is the most revealing question in any AI vendor evaluation — and the one vendors are least likely to volunteer.",
      paragraphs: [
        [
          s("Three baselines matter for AI evaluation: the trivial baseline, the current process baseline, and the best alternative. "),
          x(
            "Trivial baseline: what accuracy does a naive model achieve — always predicting the majority class, or using a simple heuristic? Current process baseline: what does the existing human or rule-based process achieve? Best alternative: what does a well-optimised alternative approach achieve — a simpler ML model, a different vendor, a redesigned human process?",
            "An AI tool must clear all three baselines to justify its cost and complexity. Clearing only the trivial baseline is the accuracy paradox at work. Clearing the current process is the minimum bar for deployment. The best alternative comparison determines whether this tool or a simpler alternative is the right choice.",
          ),
          s(" Require all three baselines in any AI evaluation report. The competitive case for deployment requires beating the best alternative — not just the trivial baseline."),
        ],
        [
          s("The current process baseline is often poorly measured — which is both a problem and an opportunity. "),
          x(
            "Most organisations do not have accurate performance metrics for their existing human or rule-based processes. They know the AI achieves 88% accuracy; they do not know whether the human process achieves 75% or 92%. Without this measurement, the AI comparison is meaningless.",
            "The process of measuring current process performance is valuable independent of AI evaluation. It creates a performance baseline that can identify improvement opportunities in the human process — and provides the honest comparison needed for AI investment justification.",
          ),
          s(" Measure current process performance before evaluating AI alternatives. The measurement investment is justified even if you do not proceed with AI — and it makes the AI decision evidence-based rather than intuition-based."),
        ],
        [
          s("Baselines must be measured in the same context as the AI evaluation. "),
          x(
            "A current-process baseline measured during a period of experienced, fully-staffed operation does not apply when evaluating AI to handle peak volume or replace departing specialists. An AI evaluation on historical data from five years ago may not reflect current decision complexity.",
            "Mismatched baselines produce misleading comparisons. The AI that outperforms a well-staffed team in normal conditions may underperform when compared against the constrained team it would actually replace — and the reverse.",
          ),
          s(" Specify the operational context for both the baseline measurement and the AI evaluation: same volume, same complexity distribution, same team composition assumptions."),
        ],
      ],
      examples: [
        {
          title: "A claims processing AI — the baseline discovery",
          body: "An insurer evaluating AI for first-notice-of-loss claims processing did not know its existing team's accuracy. Before AI evaluation, they measured: experienced claims handlers achieved 91% accurate coverage decisions on a labelled test set. The AI vendor's reported accuracy: 89%. The AI did not beat the current process baseline. Rather than abandoning the evaluation, the insurer asked: at what volume does the AI cost advantage outweigh the accuracy disadvantage? Answer: above 2,000 claims/day. Current volume: 800 claims/day. The AI investment was deferred until volume growth justified the accuracy trade-off.",
        },
        {
          title: "Fraud AI — the trivial baseline shock",
          body: "A fintech evaluated an 'AI fraud detector' reporting 98.7% accuracy. The team computed the trivial baseline: the company's fraud rate was 1.4%, so always predicting 'legitimate' achieves 98.6% accuracy. The AI beat the trivial baseline by 0.1 percentage points. The tool was worthless at its reported accuracy threshold — the vendor had not reported recall, precision, or baseline comparison. The trivial baseline calculation took five minutes and saved a six-figure vendor contract.",
        },
        {
          title: "HR AI — the best alternative comparison",
          body: "A company evaluated AI CV screening at £80K/year. The current process: two recruiters reviewing CVs at a combined cost of £120K/year, achieving known accuracy metrics. Best alternative: a redesigned manual process using structured CV scoring criteria — estimated to achieve the same accuracy improvement at £40K implementation cost. The AI beat the current process but not the best alternative. The company implemented the structured scoring process, saving £80K annually with equivalent performance improvement.",
        },
      ],
    }),
    buildSection({
      number: "6.5",
      title: "Offline vs Online Evaluation",
      subtitle: "Why lab performance and production performance are not the same — and how to bridge the gap",
      take: "Offline evaluation tests the model on historical data. Online evaluation measures real-world production performance. The gap between the two — common in AI deployments — explains most cases where AI tools that impressed in evaluation disappoint in production. Leaders must require online evaluation before committing to full deployment.",
      why: "Vendors evaluate in controlled conditions; you deploy in real conditions. The difference includes live data distribution shifts, user behaviour patterns, integration quality, and the feedback loops that emerge only in production. Offline evaluation alone is insufficient basis for full deployment commitment.",
      paragraphs: [
        [
          s("Offline evaluation uses historical labelled data to estimate future performance. "),
          x(
            "The model is trained on one portion of historical data, evaluated on another portion it has not seen. If both portions come from the same historical distribution, offline evaluation is clean and reproducible. The problem: real-world production data often differs from the historical distribution — the world changes, user behaviour evolves, and integration realities introduce noise that historical data does not capture.",
            "Offline evaluation is necessary and valuable — but it is an estimate of performance under controlled conditions, not a guarantee of production performance.",
          ),
          s(" Accept offline evaluation results as a necessary condition for progression to pilot — not as sufficient evidence for full deployment commitment."),
        ],
        [
          s("Online evaluation — an A/B test or live pilot — measures actual production performance. "),
          x(
            "A properly designed online evaluation routes a portion of real decisions through the AI system and a portion through the existing process, comparing outcomes on matched cases. The comparison reveals: does the AI improve outcomes on real cases, with real users, in the real operational environment?",
            "Online evaluation catches: user behaviour effects (humans change behaviour when interacting with AI tools), integration quality issues (the AI performs differently through the actual integration than in isolation), and distribution shift (real production data differs from historical evaluation data).",
          ),
          s(" Require online A/B evaluation before committing to full AI deployment. The evaluation investment is a fraction of the deployment cost and prevents the majority of production-performance surprises."),
        ],
        [
          s("The evaluation gap — the difference between offline and online performance — is itself a diagnostic. "),
          x(
            "A large evaluation gap (good offline, poor online) indicates one of: distribution shift (production data differs from evaluation data), integration issues (the production integration degrades performance), or user behaviour effects (people use the tool differently than anticipated). Each cause has a different fix.",
            "Organisations that proceed from offline evaluation to full deployment without an intermediate online pilot lose the diagnostic opportunity. When production performance disappoints, they cannot distinguish technical failure from integration failure from user adoption failure.",
          ),
          s(" Structure AI deployments with an explicit online evaluation phase between offline testing and full deployment. Budget 3–6 months of piloting with controlled traffic before scaling."),
        ],
      ],
      examples: [
        {
          title: "E-commerce recommendation — the online evaluation gap",
          body: "A retailer's recommendation AI achieved 23% click-through rate lift in offline evaluation on historical data. Online A/B test: 9% click-through rate lift. The gap was traced to distribution shift: the historical data was from a peak sales period; the online test ran in a slower period where browsing patterns differed. The 9% lift was still commercially valuable — but the business case had been built on 23%. Online evaluation caught the gap before it appeared as a board-level performance shortfall.",
        },
        {
          title: "Customer service AI — the integration gap",
          body: "A telecoms company's customer intent classification AI achieved 89% accuracy in offline testing. Online pilot revealed 74% production accuracy. Root cause: the production integration routed calls through a transcription layer that introduced 18% word error rate — degrading the text input quality compared to the clean text used in offline testing. The integration issue, invisible in offline evaluation, was the dominant performance driver. Online evaluation revealed it; offline evaluation could not have.",
        },
        {
          title: "Underwriting AI — the user behaviour effect",
          body: "An insurer's AI underwriting support tool showed 15% decision quality improvement in offline evaluation. Online pilot showed 4% improvement. The gap reflected underwriter behaviour change: underwriters who knew they had AI support shifted their review focus and inadvertently introduced new error types not present in historical data. The user behaviour effect was a deployment design issue — not a model quality issue. Identifying it during the pilot enabled redesign before full deployment.",
        },
      ],
    }),
    buildSection({
      number: "6.6",
      title: "Evaluating Vendor Claims",
      subtitle: "A practical guide to separating rigorous evidence from marketing",
      take: "Vendor performance claims are presented in their most favourable light — on curated test sets, with optimal model configuration, in controlled conditions. Leaders who know how to interrogate vendor evaluation methodology can distinguish rigorous evidence from optimised marketing.",
      why: "AI vendor evaluations are not standardised. There is no equivalent of GAAP for AI performance claims — vendors choose their own test sets, metrics, and baseline comparisons. The business leader's evaluation skills are the primary protection against misleading performance claims.",
      paragraphs: [
        [
          s("Five questions separate rigorous vendor evaluation from marketing material. "),
          x(
            "One: what test set was used — who provided it, how was it selected, and is it representative of your use case? Two: what baseline does the performance compare against? Three: were the evaluation conditions the same as your production conditions — same data format, same volume, same integration? Four: have the results been independently replicated or audited? Five: how does performance vary across the subgroups relevant to your deployment?",
            "A vendor who can answer all five crisply, with documented evidence, is presenting real evaluation. A vendor who deflects, generalises, or cannot produce underlying methodology is presenting marketing.",
          ),
          s(" Use these five questions as a vendor evaluation scorecard. Score each vendor's responses and include the scores in your procurement recommendation. Evaluators who cannot answer are revealing limited evidence, not limited time."),
        ],
        [
          s("Benchmark tests used in vendor marketing are often curated for maximum advantage. "),
          x(
            "Industry AI benchmarks — academic datasets, public challenges, curated domain corpora — measure model capability under controlled conditions. Vendors optimise for benchmark performance as a marketing investment. The benchmark score tells you about competitive model quality; it does not tell you about performance in your specific context.",
            "The test that matters is your holdout data — a representative sample from your actual operational context that the vendor has not been given access to before evaluation. Requiring a holdout evaluation on your data is the most revealing performance test available.",
          ),
          s(" Commission holdout data evaluations using your own operational data as the standard evaluation gate for enterprise AI procurement. Benchmark scores are supplementary, not primary, evidence."),
        ],
        [
          s("Third-party or independent evaluation is increasingly available and increasingly valuable. "),
          x(
            "For high-stakes AI deployments — medical, financial, legal, HR — third-party evaluation by independent AI auditors provides evidence that the vendor's own evaluation cannot. Independent evaluators can detect data leakage (where training data contaminated the test set), benchmark gaming, and performance claims that do not survive independent replication.",
            "The cost of independent evaluation (typically £30K–£150K depending on scope) is a fraction of enterprise AI contract values and provides protection against vendor claims that cannot be reproduced in your environment.",
          ),
          s(" For AI deployments above a defined materiality threshold or in regulated domains, require independent third-party evaluation as a procurement condition."),
        ],
      ],
      examples: [
        {
          title: "LLM benchmark gaming — the leaderboard problem",
          body: "Multiple AI benchmarks — MMLU, HumanEval, and others — have shown signs of contamination: model training data includes benchmark test questions, inflating reported scores. This is a documented problem with major foundation model providers. Enterprise buyers who purchase based on benchmark rankings may be purchasing models optimised for the benchmark, not for their operational task. Your holdout data is the only uncontaminated evaluation.",
        },
        {
          title: "Independent audit at an NHS trust",
          body: "An NHS trust required independent evaluation for a radiology AI deployment above £500K contract value. The independent evaluator identified that the vendor's reported accuracy was measured on a curated subset of high-quality images and did not reflect performance on the full distribution of radiograph quality at the trust. Actual performance on trust data: 14 percentage points below the vendor's reported figure. The independent evaluation changed the contract terms significantly.",
        },
        {
          title: "A legal AI holdout test",
          body: "A law firm required any AI contract review tool to pass a holdout evaluation on 200 anonymised internal contracts the vendor had never seen. Three vendors were evaluated: one matched claimed performance, one underperformed by 18%, one exceeded claimed performance by 6%. The holdout test ranked vendors in a different order than their benchmark scores. The firm selected the vendor who performed best on its own contracts — not the vendor with the highest industry benchmark score.",
        },
      ],
    }),
    buildSection({
      number: "6.7",
      title: "Business Metrics vs Model Metrics",
      subtitle: "Why optimising the model does not always optimise the business — and how to align them",
      take: "Model metrics (accuracy, precision, recall) measure AI system performance. Business metrics (revenue impact, cost reduction, cycle time, error rate) measure business outcome. The two are correlated but not identical — and the business metric is the one that belongs in your investment case and board report.",
      why: "AI projects that are measured only on model metrics can improve indefinitely on paper while providing diminishing or negative business value. Connecting model performance to business outcomes is the evaluation discipline that separates AI investments that pay off from those that do not.",
      paragraphs: [
        [
          s("Model metrics and business metrics must both be defined before deployment. "),
          x(
            "The model metric defines technical success: does the AI perform as specified? The business metric defines operational success: does the AI improve the business process? An AI with high model performance may have low business impact if: the process it supports is not the bottleneck, users do not adopt it effectively, or integration quality degrades the benefit.",
            "Defining both metrics before deployment creates a dual evaluation framework. Model metric: the minimum technical standard the AI must meet to be deployed. Business metric: the outcome improvement the investment must achieve to justify continued operation.",
          ),
          s(" Require both model metrics and business metrics in every AI deployment specification. Business metrics belong in the success criteria; model metrics belong in the technical acceptance criteria."),
        ],
        [
          s("The path from model metric to business metric must be explicit. "),
          x(
            "A fraud AI improving recall from 0.72 to 0.88 translates to: catching an additional 16% of fraud cases that previously escaped detection. At the company's fraud rate and average fraud value, this translates to £X in annual fraud loss reduction. The translation is: (additional fraud cases caught) × (average fraud value) = business impact. Without this chain, model metrics are disconnected from commercial reality.",
            "Every model metric improvement should have an explicit translation to business impact. If the translation produces a negligible business number, the model metric improvement may not be worth the investment required to achieve it.",
          ),
          s(" Build an explicit model-to-business metric translation for each AI system before deployment. The translation is the business case — and it reveals which model metric improvements are worth pursuing and which are academic."),
        ],
        [
          s("Business metrics often require longer measurement horizons than model metrics. "),
          x(
            "An AI system's model metrics can be measured in days (run the test set). The business impact may take quarters to materialise: customer behaviour changes, process adoption takes time, and the compounding effects of AI-improved decisions emerge slowly.",
            "Leaders who measure only at deployment and only on model metrics miss the information most relevant to ongoing investment decisions. Quarterly business metric reviews — comparing AI-assisted outcomes to pre-AI baselines — are the mechanism that connects AI investment to P&L impact.",
          ),
          s(" Establish quarterly business metric reviews for every material AI deployment. The review should compare pre-AI and post-AI business outcomes, not only current model performance metrics."),
        ],
      ],
      examples: [
        {
          title: "Accounts payable AI — model to business metric",
          body: "An accounts payable AI achieved 94% invoice matching accuracy (model metric). Business metric translation: 94% matching rate means 6% of invoices require manual exception handling. At 10,000 invoices/month and 15 minutes manual processing time per exception, the exception handling cost is 900 FTE-hours/month — significant. Improving model accuracy from 94% to 97% reduces exception handling by 50% — 450 FTE-hours saved monthly. The business case for the accuracy improvement was worth £85K annually at finance team cost rates. The model metric improvement translated directly to a cost reduction business metric.",
        },
        {
          title: "Customer churn AI — the model metric disconnect",
          body: "A SaaS company's churn prediction AI achieved 85% accuracy (model metric improvement from 71% baseline). Business metric: 90-day customer retention rate. Post-deployment measurement after two quarters: retention rate unchanged. Root cause: the AI identified at-risk customers accurately, but the intervention programme (customer success outreach) was understaffed — 60% of flagged customers received no intervention. The model metric improved; the business metric did not move because the downstream process was the bottleneck. Model evaluation without business metric evaluation missed this.",
        },
        {
          title: "Recruitment AI — business metric redefinition",
          body: "A company measured its recruitment AI initially on time-to-fill (model metric proxy: faster screening). Business metric review at 6 months: time-to-fill improved 22%. But quality-of-hire metric — 12-month retention of new hires — declined 11%. The AI had optimised for screening speed but had subtly deprioritised a quality signal that experienced recruiters had used. The business metric review revealed the model metric was not aligned with the right business objective. The model was re-evaluated and re-configured against quality-of-hire rather than screening speed.",
        },
      ],
    }),
    buildSection({
      number: "6.8",
      title: "BL Commissioning Evaluation — Running AI Performance Reviews",
      subtitle: "How to specify, commission, and interpret AI evaluation without being a data scientist",
      take: "Business leaders can commission rigorous AI evaluation without technical expertise by specifying five elements: the question the evaluation answers, the data it uses, the baselines it compares against, the metrics it measures, and the governance structure that acts on results. Evaluation specified by business leaders reflects business requirements — not technical preferences.",
      why: "AI evaluations commissioned without business leader input tend to answer technical questions rather than business questions. Specify the evaluation and you specify the answers you get. Leave it to the technical team and you may receive rigorous answers to the wrong questions.",
      paragraphs: [
        [
          s("Business leader evaluation specification has five elements. "),
          x(
            "One: the evaluation question — what decision does this evaluation inform? (Deploy, replace, renegotiate, retrain.) Two: the data — what data will the evaluation use, and is it representative of actual deployment conditions? Three: the baselines — what is the current process performance and what is the trivial baseline? Four: the metrics — what model and business metrics must be reported? Five: the governance — who reviews results, what decisions do they make, and what thresholds trigger each decision?",
            "Specifying all five elements produces an evaluation that answers the business question with actionable results — not an academic performance report that requires further interpretation.",
          ),
          s(" Use this five-element specification as a template for commissioning any AI evaluation. Distribute it before the technical team begins evaluation design — not after they have already chosen their metrics."),
        ],
        [
          s("Annual AI performance reviews are as important as annual financial audits. "),
          x(
            "AI systems degrade over time as the world changes. An annual performance review compares current model metrics against the deployment baseline, current business metrics against the pre-AI baseline, and current calibration against original calibration. The review triggers decisions: retrain, renegotiate vendor contract, adjust threshold, or decommission.",
            "Organisations without annual AI performance reviews are operating AI systems of unknown current quality — a governance gap that creates regulatory risk and operational risk simultaneously.",
          ),
          s(" Schedule annual AI performance reviews for every material AI deployment in your technology register. Include review findings in board reporting alongside technology risk updates."),
        ],
        [
          s("Evaluation findings should trigger defined governance responses, not open-ended discussions. "),
          x(
            "Pre-define the governance responses to evaluation findings before the evaluation occurs. If recall drops below 0.75: trigger vendor renegotiation within 30 days. If business metric improvement falls below 10%: initiate model replacement evaluation within 60 days. If demographic calibration gap exceeds 10 percentage points: halt deployment pending remediation.",
            "Pre-defined responses remove the ambiguity and delay that typically follows evaluation findings. When evaluation results are known and responses are not pre-defined, organisations often defer action while performance continues to decline.",
          ),
          s(" Establish pre-defined evaluation response governance: minimum acceptable thresholds for each metric and the action triggered when a threshold is breached. Publish the governance alongside the evaluation specification."),
        ],
      ],
      examples: [
        {
          title: "A CFO's AI evaluation governance",
          body: "A CFO implemented a standard AI evaluation governance framework: all AI systems above £100K annual cost receive annual performance reviews with pre-defined response thresholds. In the first review cycle, two systems triggered renegotiation responses (vendor performance had declined below contractual threshold) and one system triggered a replacement evaluation (business metric improvement had eroded to near zero). The governance framework converted evaluation results into commercial action within the defined 30-day response window.",
        },
        {
          title: "CHRO evaluation commissioning — a worked example",
          body: "A CHRO commissioning evaluation of a performance review AI specified: evaluation question (does the AI reduce manager time-in-review while maintaining rating accuracy?), data (all performance reviews from the past 12 months, split 70/30 train/test), baselines (current manager time: 4.2 hours/review; rating accuracy benchmark from calibration sessions), metrics (recall on underperformance identification, precision on high-performance identification, manager time-in-review, rating variance across like managers), governance (CHRO reviews, thresholds pre-defined). The specification produced an evaluation that answered the right question.",
        },
        {
          title: "Vendor re-evaluation — using the evaluation framework",
          body: "A logistics company's vendor contract included an annual performance review with pre-defined metric thresholds. Year-two review: recall on late delivery prediction had declined from 0.84 to 0.71 — below the 0.78 minimum contractual threshold. The pre-defined response: vendor must produce a remediation plan within 30 days or face contract renegotiation. The vendor retrained the model (incorporating post-COVID shipping data), restoring recall to 0.83. The governance framework converted an evaluation finding into vendor accountability within the contractual timeline.",
        },
      ],
    }),
  ],
  quiz: [
    {
      q: "An AI vendor reports 97.3% accuracy for a document classification tool. The company's document distribution is 97% standard format and 3% non-standard. What is the most important follow-up question?",
      options: [
        "Which machine learning algorithm was used?",
        "What is the trivial baseline accuracy — and how does the model perform specifically on the non-standard 3% of documents?",
        "How many parameters does the model have?",
        "Which cloud provider hosts the model?",
      ],
      correct: 1,
      correctFeedback:
        "Right. The trivial baseline is 97% (always predict 'standard'). The AI's aggregate accuracy may not significantly exceed this. Performance on the non-standard 3% is likely the most operationally important metric. Re-read sections 6.1 and 6.4.",
      wrongFeedback:
        "Aggregate accuracy on imbalanced distributions can match or only slightly exceed the trivial baseline. The operationally significant question is performance on the minority class — which is usually the class that requires AI assistance. Re-read sections 6.1 and 6.4.",
    },
    {
      kind: "categorize",
      q: "Sort each operational scenario into the metric that should be prioritised: Precision or Recall.",
      categories: ["Precision (primary)", "Recall (primary)"],
      items: [
        { text: "Anti-money laundering flagging: missing a laundering case creates regulatory consequence; false alerts create investigation overhead.", category: 1 },
        { text: "Automated invoice approval: incorrectly approving a fraudulent invoice is costly; incorrectly rejecting a legitimate invoice creates minor processing delay.", category: 0 },
        { text: "Cancer screening AI: missing a case has clinical consequence; unnecessary follow-up generates cost and patient anxiety.", category: 1 },
        { text: "Automated customer offer eligibility: sending an offer to an ineligible customer costs more than missing an eligible customer.", category: 0 },
      ],
      correctFeedback:
        "Right. Recall primary: when missing cases causes greater harm (laundering, cancer). Precision primary: when false positives cause greater harm (invoice approval, ineligible offers). Error cost asymmetry determines the primary metric. Re-read sections 6.2 and 6.3.",
      wrongFeedback:
        "Ask: which error is more costly — missing a true case (recall failure) or acting on a false case (precision failure)? The costlier error determines the primary metric. Re-read sections 6.2 and 6.3.",
    },
    {
      q: "An AI tool performed well in offline evaluation but underperforms in production. What should the investigation team examine first?",
      options: [
        "Retrain the model immediately.",
        "Examine distribution shift (production data differs from evaluation data), integration quality (the production integration degrades inputs), and user behaviour effects (people use the tool differently than anticipated in evaluation).",
        "Replace the vendor.",
        "Extend the evaluation period before investigating root cause.",
      ],
      correct: 1,
      correctFeedback:
        "Right. The offline-to-online gap has three root causes: distribution shift, integration quality, and user behaviour effects. Each requires different remediation. Identifying the root cause before acting is the diagnostic discipline. Re-read section 6.5.",
      wrongFeedback:
        "The offline-to-online gap is caused by distribution shift, integration issues, or user behaviour change — not model quality alone. Retraining solves the first cause but not the other two. Re-read section 6.5.",
    },
    {
      kind: "order",
      q: "Order the five elements of a business leader's AI evaluation specification.",
      prompt: "Drag to arrange from first element (top) to last (bottom).",
      items: [
        "The evaluation question — what decision does this evaluation inform?",
        "The data — representative of actual deployment conditions.",
        "The baselines — current process performance and trivial baseline.",
        "The metrics — model and business metrics to be reported.",
      ],
      correctFeedback:
        "Right. Question first — you cannot select data, baselines, or metrics until you know what decision the evaluation informs. Data second, baselines third, metrics fourth, governance last. Re-read section 6.8.",
      wrongFeedback:
        "Evaluation question first — everything else follows from what decision the evaluation is designed to inform. Re-read section 6.8.",
    },
    {
      q: "A business metric review six months post-deployment shows the recruitment AI has improved screening speed by 28% but 12-month new hire retention has declined by 9%. What is the governance response?",
      options: [
        "Accept — screening speed improvement outweighs retention decline.",
        "Initiate investigation: the model metric improvement (screening speed) does not align with the business metric outcome (retention). Review whether the model is optimising for the wrong signal, and re-configure against quality-of-hire rather than speed.",
        "Decommission the AI — retention decline shows it is failing.",
        "Retrain on more recent data.",
      ],
      correct: 1,
      correctFeedback:
        "Right. Model metric and business metric misalignment indicates the model is optimising for the wrong objective — speed rather than quality. Investigation and re-configuration are the correct responses. Re-read section 6.7.",
      wrongFeedback:
        "Model metric improvement (speed) with business metric decline (retention) indicates metric misalignment — the AI is optimising for the wrong objective. Re-read section 6.7.",
    },
    {
      kind: "order",
      q: "Order the governance responses to AI evaluation findings from pre-definition to execution.",
      prompt: "Drag to arrange from first step (top) to last (bottom).",
      items: [
        "Pre-define minimum acceptable thresholds for each evaluation metric before deployment.",
        "Conduct the annual performance review using the agreed evaluation specification.",
        "Compare results against pre-defined thresholds.",
        "Execute the pre-defined governance response: retrain, renegotiate, or decommission.",
      ],
      correctFeedback:
        "Right. Pre-define thresholds before deployment — not after results are known. Review, compare, respond in order. Pre-defined governance responses prevent delay and political ambiguity when evaluation results are unfavourable. Re-read section 6.8.",
      wrongFeedback:
        "Governance responses must be pre-defined before evaluation occurs — not negotiated after results are known. The sequence is define, review, compare, respond. Re-read section 6.8.",
    },
  ],
});
