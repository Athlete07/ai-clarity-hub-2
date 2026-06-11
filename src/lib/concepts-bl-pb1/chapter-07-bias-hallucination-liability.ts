import { buildChapter, buildSection, s, x, BL_CALLOUT, sectionWithDiagram } from "../concepts-bl-helpers";

export const chapter07BlBiasHallucinationLiability = buildChapter({
  slug: "bl-bias-hallucination-liability",
  number: 7,
  shortTitle: "Bias, Hallucination, and Liability",
  title: "Bias, Hallucination, and Liability — The AI Risk Briefing Every Board Needs",
  readingMinutes: 25,
  summary:
    "Bias and hallucination are the two AI failure modes most likely to produce board-level consequences: regulatory enforcement, legal liability, reputational damage, and customer harm. Business leaders who understand these risks in non-technical terms can design appropriate governance, set correct board-level risk tolerances, and make AI deployment decisions with clear eyes.",
  keyTakeaway:
    "Bias is not a technical accident — it is a structural property of models trained on historical data that reflects historical inequality. Hallucination is not a bug — it is a structural property of generative models that produce plausible outputs without a truth-checking mechanism. Both risks require governance architecture, not technical fixes alone.",
  pmCallout: BL_CALLOUT,
  sections: [
    sectionWithDiagram({
      number: "7.1",
      title: "What AI Bias Means for Business Leaders",
      subtitle: "A practical definition with financial, legal, and operational consequences",
      take: "AI bias means the AI system produces systematically different outcomes for different groups in ways that are unfair, harmful, or illegal. It is not primarily a moral failing — it is a business risk with legal liability, regulatory consequence, and reputational exposure that belongs in your risk register.",
      why: "Most business leaders have encountered AI bias as a media story about a tech company. The more important question is: are your AI systems biased against your customers, employees, or regulators' expectations — and do you have evidence to answer that question?",
      paragraphs: [
        [
          s("AI bias is the systematic and unequal treatment of different groups by an AI system. "),
          x(
            "A credit AI that approves applications from one demographic group at a higher rate than another — all else equal — is biased. A hiring AI that ranks CVs from graduates of certain universities higher regardless of underlying qualifications is biased. A healthcare AI that performs more accurately for patients of one demographic than another is biased.",
            "The legal framework for bias in AI is established: the UK Equality Act, GDPR, the EU AI Act, the US EEOC, and fair lending laws all impose obligations on organisations deploying AI that produces discriminatory outcomes — regardless of whether discrimination was intended.",
          ),
          s(" 'We did not intend to discriminate' is not a legal defence against AI discrimination claims. Intent is irrelevant; outcome is the legal standard in most AI bias frameworks."),
        ],
        [
          s("AI bias has three dimensions relevant to business leaders: legal, operational, and reputational. "),
          x(
            "Legal: discriminatory AI outcomes can constitute violations of equality law, consumer credit regulation, and employment law — with enforcement sanctions, compensation awards, and regulatory investigations. Operational: biased AI systems produce incorrect business decisions at disproportionate rates for certain customer or employee segments, reducing quality and trust. Reputational: public disclosure of AI bias — through media, whistleblowers, or enforcement action — produces significant brand damage in an environment of heightened AI scrutiny.",
            "All three dimensions materialise simultaneously when AI bias is exposed. The organisations most exposed are those that deployed AI in high-stakes decisions without bias testing — not those that tested, found issues, and remediated.",
          ),
          s(" Bias testing before deployment is liability protection. Bias discovered post-deployment through complaint or investigation is the scenario with maximum legal and reputational exposure."),
        ],
        [
          s("The board's AI bias question should be: where in our operation is AI making decisions that affect individuals, and have those systems been tested for disparate impact? "),
          x(
            "Disparate impact testing measures whether AI outcomes differ systematically across groups defined by protected characteristics — race, gender, age, disability, religion. It does not require proof of intent; it requires measurement of outcomes.",
            "Boards that cannot answer the bias testing question for their AI systems have a governance gap that regulators, activists, and litigants may identify before the board does. The proactive governance position is to require bias testing reports for all AI systems making decisions affecting individuals as a standing governance item.",
          ),
          s(" Add AI bias testing status to the board governance dashboard — alongside financial control effectiveness and cybersecurity posture. It belongs in the same risk visibility tier."),
        ],
      ],
      examples: [
        {
          title: "HireVue — video interview AI bias and regulatory attention",
          body: "HireVue's AI video interview analysis attracted Illinois Biometric Information Privacy Act scrutiny and an FTC investigation into AI hiring practices. The company eventually discontinued the facial analysis component of its tool. Business leaders deploying AI in hiring must understand that the regulatory environment for AI bias in employment is active and the cost of post-hoc response significantly exceeds the cost of pre-deployment testing.",
        },
        {
          title: "HMRC AI and discrimination risk",
          body: "UK civil society groups analysed HMRC's Connect AI system — used for tax investigation targeting — finding demographic disparities in investigation rates. HMRC faced parliamentary questions about the system's fairness and was required to produce disparate impact analysis. Government and large enterprise leaders should anticipate that AI systems used in public-facing decisions will be subject to freedom-of-information requests, parliamentary scrutiny, and media analysis. Governance documentation protects as much as the testing itself.",
        },
        {
          title: "Health AI — the skin tone benchmark failure",
          body: "Multiple FDA-cleared dermatology AI tools were found in peer-reviewed research to perform significantly worse on darker skin tones — a training data representation failure with clinical consequences. Hospital leaders who deployed these tools without demographic performance breakdown testing created clinical governance failures. The lesson applies beyond healthcare: any AI tool affecting individuals requires demographic performance breakdown before deployment, regardless of FDA or regulatory clearance.",
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
    sectionWithDiagram({
      number: "7.2",
      title: "How Bias Enters AI Systems",
      subtitle: "The four pathways that introduce unfairness — and what leaders can do about each",
      take: "AI bias enters through four pathways: historical data bias, measurement bias, label bias, and sampling bias. Each pathway has a different source, a different detection method, and a different remediation. Understanding the pathways allows leaders to ask the right questions of vendors and internal teams — not just 'is the AI biased?' but 'which type of bias has been tested?'",
      why: "Vendors who assure you their AI is 'fair' without specifying which bias types were tested and with what methodology are providing an insufficient assurance. The pathways are specific, testable, and defensible — vague assurances are not.",
      paragraphs: [
        [
          s("Historical data bias is the most prevalent pathway: AI trained on historical decisions inherits historical discrimination. "),
          x(
            "If credit has historically been extended at lower rates to certain demographic groups — due to discriminatory lending, geographic redlining, or socioeconomic barriers — a model trained on historical approval decisions learns to replicate that pattern. The model did not create the discrimination; it encoded and automated it.",
            "This is structurally significant: the historical data may reflect entirely legal lending decisions made under past regulatory frameworks, but the AI replicating that pattern at scale in 2026 may violate current equal opportunity requirements. Historical legality does not guarantee current compliance.",
          ),
          s(" For any AI trained on historical decisions — credit, hiring, promotion, healthcare allocation — require explicit testing for historical bias encoding before deployment."),
        ],
        [
          s("Measurement bias arises when the variable being predicted is measured differently across groups. "),
          x(
            "In healthcare: pain levels are self-reported and clinical studies show systematic underestimation of pain in certain patient groups — an AI predicting pain from reported scores inherits this measurement error. In employment: performance ratings reflect manager-employee relationships that are known to be biased along gender and racial lines — an AI predicting performance from historical ratings inherits that bias.",
            "Measurement bias is particularly pernicious because it is embedded in the label itself — not in the features. Even perfectly fair feature engineering cannot remove bias that was introduced at the point of measurement.",
          ),
          s(" For AI systems predicting subjectively-measured outcomes — performance ratings, risk assessments, clinical evaluations — require a review of measurement quality and known biases in the label before accepting model performance claims."),
        ],
        [
          s("Sampling and selection bias occurs when training data over- or under-represents certain groups. "),
          x(
            "A fraud detection model trained predominantly on retail consumer fraud may perform poorly on business account fraud — an underrepresented population in the training data. A medical AI trained predominantly on patients from urban teaching hospitals may underperform on rural populations with different disease prevalence and care patterns.",
            "Sampling bias creates performance disparities that appear as bias: the model is simply less accurate for underrepresented groups, which translates to higher error rates and less fair outcomes for those groups. Detection requires performance breakdowns by demographic group, not just aggregate metrics.",
          ),
          s(" Require disaggregated performance metrics by relevant demographic subgroup from any AI vendor serving diverse customer or employee populations. Aggregate metrics conceal sampling bias."),
        ],
      ],
      examples: [
        {
          title: "Amazon hiring AI — historical data encoding selection bias",
          body: "Amazon's CV screening tool, trained on historical successful-hire data from a predominantly male engineering workforce, learned that features correlated with the historical hiring pattern were predictive of future success. The correlation included implicit gender signals. The model encoded the historical selection bias — not maliciously, but structurally. The system was shut down before deployment. The failure mode is the archetype for historical data bias in high-stakes hiring AI.",
        },
        {
          title: "Pulse oximetry AI — measurement bias in clinical data",
          body: "Research published in NEJM found that pulse oximetry (blood oxygen measurement) systematically over-reads oxygen saturation in patients with darker skin tones — producing inaccurate clinical training labels. AI models trained on pulse oximetry data to predict clinical interventions therefore had biased inputs for one demographic group. This is measurement bias: the measurement instrument was the source of the discrimination, not the algorithm. Leaders in medical AI must understand that data quality includes measurement instrument bias.",
        },
        {
          title: "UK mortgage AI — geographic sampling gap",
          body: "A UK lender's mortgage risk AI was trained predominantly on metropolitan applications where historical data was dense. Applications from rural areas and post-industrial regions were underrepresented in training. Performance analysis revealed the model had significantly higher false decline rates in rural areas — a demographic proxy with income and ethnicity correlations. The sampling gap was not intentional but had discriminatory impact. Geographic disaggregation of performance data was the detection mechanism.",
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
      number: "7.3",
      title: "High-Stakes AI Contexts — Where Bias Causes Most Harm",
      subtitle: "The deployment domains where bias risk is highest and governance requirements are strictest",
      take: "Not all AI bias carries equal risk. Bias in entertainment recommendation is a quality issue. Bias in credit, hiring, healthcare, housing, and criminal justice is a legal, ethical, and operational crisis. Leaders must map their AI deployments to consequence tiers and apply governance resources proportionally.",
      why: "Treating all AI bias risk equally misallocates governance resources. The high-stakes domains — regulated by equality law, consumer protection, and the EU AI Act's high-risk classification — require substantially more governance investment than low-stakes domains.",
      paragraphs: [
        [
          s("The EU AI Act classifies AI in high-stakes domains as high-risk, triggering mandatory governance obligations. "),
          x(
            "High-risk domains under the EU AI Act include: recruitment and employment decisions, education and vocational training, essential private services (credit, insurance), law enforcement, border control, and biometric identification. High-risk AI requires: fundamental rights impact assessment, bias testing, human oversight architecture, technical documentation, and registration in the EU database before deployment.",
            "UK organisations serving EU customers or operating in the EU market are subject to the AI Act's obligations. UK domestic legislation is evolving in parallel. Leaders in regulated industries should assume the high-risk framework applies to any AI system making consequential decisions affecting individuals.",
          ),
          s(" Map your AI system portfolio against the EU AI Act high-risk categories. High-risk AI requires a structured governance programme — not just standard IT deployment governance."),
        ],
        [
          s("Credit and financial services AI bias has the most established regulatory framework in the UK and US. "),
          x(
            "In the UK: the FCA's fair treatment of customers obligation, the Consumer Duty, and the Equality Act 2010 collectively require that AI-assisted financial decisions do not produce discriminatory outcomes. In the US: ECOA (Equal Credit Opportunity Act) prohibits discriminatory credit decisions and requires disparate impact analysis for AI-assisted underwriting.",
            "Financial services leaders deploying AI in credit decisions — lending, insurance pricing, fraud decisioning — face the most mature enforcement environment. 'Disparate impact' testing (measuring whether AI outcomes differ statistically across protected groups) is expected by regulators and increasingly required by examiners.",
          ),
          s(" Financial services AI in credit, insurance, and fraud decisioning requires disparate impact testing, documented methodology, and legal sign-off — before deployment and annually thereafter."),
        ],
        [
          s("Employment AI bias has high legal exposure combined with high reputational risk. "),
          x(
            "The EEOC in the US and employment equality frameworks in the UK both impose disparate impact obligations on employment decisions. AI tools used in hiring, performance management, promotion, and redundancy selection that produce statistically different outcomes across demographic groups are at legal risk — regardless of intent.",
            "The reputational dimension compounds the legal risk: employment discrimination stories are culturally resonant and media-amplified. A company whose AI hiring tool is found to discriminate faces brand damage in talent markets, consumer markets, and investor ESG assessments simultaneously.",
          ),
          s(" HR leaders: require bias testing documentation for any AI tool in the talent lifecycle — before purchase, before deployment, and annually thereafter. The documentation is your legal protection as well as your governance record."),
        ],
      ],
      examples: [
        {
          title: "Upturn and the predictive policing debate",
          body: "Predictive policing AI tools used in US cities — PredPol, ShotSpotter, others — have been documented to direct police resources disproportionately to communities of colour. The bias pathway: historical crime data reflects historical policing patterns (where police were deployed), not actual crime distribution. The political and legal consequence: multiple cities have suspended or banned the tools. For public sector and law enforcement leaders: AI in consequential public decisions carries democratic accountability as well as legal accountability.",
        },
        {
          title: "UK insurance — FCA pricing AI review",
          body: "The FCA's 2021 general insurance pricing intervention — prohibiting price discrimination against loyal customers — has evolved into broader scrutiny of AI-assisted pricing models. Insurers using AI to set prices must now demonstrate their models do not produce unfair outcomes for vulnerable customers. The regulatory direction of travel: AI pricing in regulated services requires fairness evidence, not just actuarial justification.",
        },
        {
          title: "Hospital readmission AI — healthcare bias governance",
          body: "A major US hospital system's patient readmission prediction AI was found to systematically under-predict readmission risk for Black patients — because it used healthcare cost as a proxy for health need. Black patients had historically lower healthcare costs due to access barriers, not lower health need. The model recommended fewer preventive interventions for a higher-need group. The governance lesson: in healthcare AI, proxy variables that correlate with protected characteristics are bias pathways even when they are not protected characteristics themselves.",
        },
      ],
    }),
    buildSection({
      number: "7.4",
      title: "Disaggregated Reporting — The Governance Tool for AI Fairness",
      subtitle: "Why overall performance metrics hide bias — and how to make bias visible",
      take: "Disaggregated reporting breaks AI performance down by demographic subgroup, revealing performance disparities that aggregate metrics conceal. It is the primary governance tool for detecting and documenting AI fairness — and it is increasingly expected by regulators, investors, and customers in high-stakes AI contexts.",
      why: "Aggregate AI metrics can be 'good' while performance for specific groups is discriminatory. Leaders who demand disaggregated reporting see what aggregate reporting conceals — and can act before bias becomes a regulatory incident.",
      paragraphs: [
        [
          s("Disaggregated reporting requires breaking performance metrics down by protected characteristic groups. "),
          x(
            "For a credit AI: report approval rates, false positive rates, and recall separately for each gender, age group, and ethnicity category. Compare across groups. Statistically significant differences in outcomes require investigation — they may be explicable by legitimate factors (e.g., actual creditworthiness differences) or may indicate discrimination.",
            "The legal standard for AI bias in most jurisdictions is disparate impact: if the AI produces significantly different outcomes for protected groups, the burden of proof shifts to the organisation to demonstrate a legitimate non-discriminatory justification. Disaggregated reporting is the measurement tool that enables this analysis.",
          ),
          s(" Require disaggregated performance reports for all AI systems making decisions that affect individuals in protected characteristic categories. Aggregate metrics are insufficient governance."),
        ],
        [
          s("Disaggregated reporting must include calibration metrics, not only accuracy metrics. "),
          x(
            "A model may have similar accuracy across demographic groups while having different calibration — overconfident on one group and underconfident on another. Different calibration produces different effective decision rates even when accuracy appears equal. Demographic calibration testing is a distinct requirement from demographic accuracy testing.",
            "The COMPAS recidivism AI case demonstrated exactly this: different calibration by racial group produced different false positive rates, even at equivalent accuracy levels. Leaders should require calibration testing by subgroup as a separate governance requirement.",
          ),
          s(" Add demographic calibration testing to your AI governance standard — separate from demographic accuracy testing. Both are required for comprehensive fairness governance."),
        ],
        [
          s("Disaggregated reports require appropriate data governance — and this creates its own governance challenge. "),
          x(
            "Disaggregating by protected characteristic requires the collection and processing of sensitive data — race, gender, disability status. This data requires its own legal basis and appropriate security controls. Organisations that cannot collect demographic data (for legal or ethical reasons) may need proxy analysis — using geographic or socioeconomic indicators as demographic proxies.",
            "The governance paradox: adequate fairness testing requires the very data categories that data minimisation principles discourage. Regulators increasingly expect a documented solution to this paradox — typically involving purpose limitation, anonymisation for analysis, and controlled access to disaggregated outputs.",
          ),
          s(" Develop a data governance framework for bias testing data: legal basis for collection, data minimisation approach, access controls, and retention limits. This is a GDPR compliance requirement, not a technical choice."),
        ],
      ],
      examples: [
        {
          title: "Consumer Financial Protection Bureau — disaggregated lending data",
          body: "The CFPB's Home Mortgage Disclosure Act (HMDA) requires US lenders to report mortgage application and approval data disaggregated by race, ethnicity, and gender. This public reporting requirement has created an external bias monitoring mechanism — civil society organisations, regulators, and researchers analyse the data and identify statistically significant disparities. UK lenders operating in the US face this requirement; UK financial services leaders should anticipate equivalent UK requirements emerging under the FCA.",
        },
        {
          title: "A UK employer's pay equity AI audit",
          body: "A FTSE 100 company applied disaggregated reporting to its AI-assisted compensation recommendation tool. Aggregate performance: compensation recommendations within 3% of benchmark for 89% of employees. Disaggregated: female employees in technical roles received recommendations averaging 7.2% below benchmark — a statistically significant gender pay gap being amplified by the AI. The disaggregated report caught a bias the aggregate metric concealed. The tool was suspended pending recalibration. Gender pay reporting obligations made the discovery a compliance imperative.",
        },
        {
          title: "NHS — regional disaggregation in clinical AI",
          body: "NHS Digital's governance framework for AI clinical tools includes disaggregated performance reporting by ethnicity, age, and deprivation index. A clinical AI for early disease detection was found to underperform by 19 percentage points in the most deprived quintile of the patient population — a socioeconomic disparity with demographic correlates. The disaggregated report prevented deployment in the most vulnerable population segment pending targeted model improvement.",
        },
      ],
    }),
    buildSection({
      number: "7.5",
      title: "What Hallucination Actually Means",
      subtitle: "The most misunderstood AI failure mode — correctly defined for business leaders",
      take: "Hallucination is when a generative AI produces confident-sounding content that is factually incorrect, legally problematic, or entirely fabricated. It is not a bug — it is a structural property of how generative models work. Business leaders must understand this distinction: hallucination cannot be fully eliminated, only governed.",
      why: "Leaders who believe hallucination is a fixable bug will deploy generative AI with insufficient governance, expecting the problem to disappear. Leaders who understand it is structural will design appropriate review architectures, set correct user expectations, and manage the liability exposure correctly.",
      paragraphs: [
        [
          s("Hallucination occurs because generative AI models predict what text should come next — they do not look up or verify facts. "),
          x(
            "An LLM generates each token (roughly, each word) based on its probability given the preceding context and training. The model that produces 'The case was decided in Smith v. Jones [2019], in which the court held...' is generating a highly probable continuation — not retrieving a verified case reference. If Smith v. Jones [2019] does not exist, the model does not know that.",
            "The model's training may have included millions of legal case citations. It has learned the pattern of legal citation — it will produce plausible-sounding citations regardless of whether the specific citation is real.",
          ),
          s(" Generative AI outputs that include specific facts, citations, calculations, or regulatory references require external verification before professional use. Fluency is not accuracy."),
        ],
        [
          s("Hallucination has several forms — all of which occur in enterprise AI deployments. "),
          x(
            "Factual hallucination: the AI states a false fact with confidence. Citation hallucination: the AI produces a reference (case, study, regulation) that does not exist or does not say what is claimed. Quantitative hallucination: the AI produces incorrect numerical calculations or statistics. Contextual hallucination: the AI answers a different question than was asked, with misleading confidence.",
            "In professional contexts — legal drafting, financial analysis, medical documentation — all four forms can cause material harm. The common factor: the output looks correct to a non-expert reader because generative AI produces professionally-toned, well-formatted text regardless of accuracy.",
          ),
          s(" Train users of generative AI tools in the professional context to treat all specific facts, citations, and calculations as unverified drafts requiring expert check before use."),
        ],
        [
          s("Retrieval-augmented generation (RAG) reduces but does not eliminate hallucination. "),
          x(
            "RAG architectures pair the generative model with a document retrieval system: instead of generating from training memory alone, the model first retrieves relevant documents and generates conditioned on their content. This significantly reduces hallucination on document-specific questions — the model has the source material in front of it.",
            "However, RAG does not eliminate hallucination: models can still hallucinate when retrieved documents are ambiguous, when the question requires synthesis across conflicting sources, or when the model generates confidently about information absent from the retrieved documents. RAG reduces the problem; governance manages the residual risk.",
          ),
          s(" When vendors propose RAG as the solution to hallucination concerns, ask for evidence of residual hallucination rates on the retrieval corpus — RAG is a risk reducer, not a risk eliminator."),
        ],
      ],
      examples: [
        {
          title: "Mata v. Avianca — legal citation hallucination",
          body: "US attorney Steven Schwartz submitted legal briefs citing six cases generated by ChatGPT that did not exist. When opposing counsel could not find the cases, the court required Schwartz to produce them. He returned to ChatGPT, which confirmed the cases were real — another hallucination. The court sanctioned Schwartz. The lesson: legal AI tools must be treated as drafting assistants requiring citation verification, not authoritative legal research tools. This governance requirement applies regardless of the tool's sophistication.",
        },
        {
          title: "Air Canada chatbot — policy hallucination with liability",
          body: "Air Canada's customer service AI hallucinated a bereavement fare policy — stating a discount was available when the company's actual policy differed. The customer relied on the chatbot and purchased a full-fare ticket expecting a refund. A tribunal held Air Canada liable. Customer-facing AI tools that communicate policy, pricing, or contractual terms require factual grounding — either through RAG on verified policy documents or through human escalation for consequential information requests.",
        },
        {
          title: "Financial research AI — quantitative hallucination risk",
          body: "An investment management firm deployed an LLM to synthesise analyst reports and produce investment summaries. Routine quality checking found the model produced revenue figures that differed from the source documents in 8% of cases — quantitative hallucinations on financial data. The error rate was unacceptable for investment decisions. The governance solution: all quantitative figures in AI-generated summaries required source verification before use. The AI remained valuable for qualitative synthesis; human verification covered quantitative data.",
        },
      ],
    }),
    buildSection({
      number: "7.6",
      title: "High-Risk Hallucination Contexts",
      subtitle: "Where hallucination causes the most harm — and what governance looks like",
      take: "Hallucination risk is not uniform across use cases. In entertainment recommendation and email draft suggestions, hallucination is an inconvenience. In legal, medical, financial, and compliance contexts, hallucination can cause professional harm, legal liability, patient injury, and regulatory violation. Leaders must tier their hallucination governance by context consequence.",
      why: "A one-size hallucination policy — either 'always verify everything' or 'AI is reliable enough' — misallocates governance resources. Tiered governance matches oversight intensity to consequence — protecting high-stakes contexts without making low-stakes use cases ungovernable.",
      paragraphs: [
        [
          s("Three categories define hallucination consequence severity for enterprise leaders. "),
          x(
            "Category one — high consequence: legal, medical, financial, and compliance contexts where hallucinated facts can cause direct harm, legal liability, or regulatory violation. These require expert human verification of all specific facts, citations, and calculations before professional use. Category two — moderate consequence: customer communications, HR documentation, and public content where hallucination can cause reputational damage or customer harm. These require human review before external publication. Category three — low consequence: internal drafts, brainstorming, and research assistance where hallucination is discoverable in context and causes limited harm.",
            "The governance investment matches the category: category one requires structured expert verification workflows; category two requires human review gates; category three requires user awareness training.",
          ),
          s(" Map your AI use cases to these three consequence categories. The mapping drives your hallucination governance architecture — avoid applying category one governance to category three use cases."),
        ],
        [
          s("Legal context hallucination is particularly hazardous because the format mimics authoritative sources. "),
          x(
            "Legal citations, regulatory references, statutory provisions, and case holdings all have recognisable formats that AI models reproduce accurately. A hallucinated case citation looks identical to a real one in format. Legal professionals who do not verify every citation are exposed to professional misconduct consequences — as the Mata v. Avianca case demonstrated.",
            "Law firms and legal departments that have deployed AI for research, drafting, and contract analysis must implement citation verification workflows as a matter of professional standards compliance. Many leading firms now use verification software alongside generative AI — treating the AI as a high-speed drafter and the verification layer as the quality gate.",
          ),
          s(" Legal AI deployments require citation and reference verification workflows as standard — regardless of AI sophistication or vendor assurances. This is a professional standards requirement, not an optional quality enhancement."),
        ],
        [
          s("Healthcare hallucination carries patient safety consequences that require specific clinical governance. "),
          x(
            "Medical AI tools that generate clinical documentation, drug dosing suggestions, diagnostic summaries, or treatment protocols carry patient safety obligations that are distinct from standard AI governance. A hallucinated drug interaction warning or a missed contraindication can cause direct patient harm.",
            "FDA and MHRA regulation of software as a medical device (SaMD) imposes specific requirements on AI clinical tools — including performance validation, human oversight architecture, and post-market surveillance. Clinical leaders should not deploy generative AI in clinical documentation or decision support without confirming regulatory classification and appropriate clinical governance.",
          ),
          s(" Clinical leaders: any generative AI tool producing clinical documentation or decision support requires regulatory classification review and clinical governance committee approval before deployment."),
        ],
      ],
      examples: [
        {
          title: "A law firm's AI verification protocol",
          body: "A major UK law firm deployed a generative AI tool for contract drafting and legal research. Governance protocol: all AI-generated legal research citations verified against Westlaw or LexisNexis before inclusion in any client document. AI-generated clause language reviewed by qualified solicitor before inclusion in contracts. The firm published the protocol publicly — not as a limitation disclosure but as a quality assurance differentiator. Clients viewed the governance as evidence of professional responsibility.",
        },
        {
          title: "A hospital's clinical AI governance gate",
          body: "An NHS trust's clinical AI governance committee required that any generative AI tool producing clinical content — discharge summaries, referral letters, care plans — undergo a six-month pilot with 100% human review before any reduction in review rate. After six months, the pilot data informed a risk-stratified review protocol: complex cases retained 100% review; standard cases reduced to 30% sampling. The phased approach used real-world data rather than vendor performance claims to calibrate governance.",
        },
        {
          title: "Financial compliance AI — hallucination in regulatory context",
          body: "A compliance function deployed AI to help draft regulatory submissions. Hallucination risk scenario: the AI generating regulatory references that did not exist or predated the current version of the regulation. Governance solution: all regulatory citations in AI-drafted submissions required manual verification against the firm's regulatory library before filing. The compliance team developed a citation verification checklist specific to the AI tool — making the governance procedure a standard part of the submission workflow, not an ad hoc check.",
        },
      ],
    }),
    buildSection({
      number: "7.7",
      title: "Catching Hallucination — Practical Governance",
      subtitle: "The operational mechanisms that detect hallucination before it causes harm",
      take: "Hallucination governance is not about trusting the AI less — it is about building structured verification into professional workflows. The organisations that catch hallucination reliably are those that have made verification a process requirement, not a personal responsibility of individual AI users.",
      why: "Individual vigilance is an unreliable governance mechanism: it is inconsistent, dependent on individual skill, and susceptible to automation bias. Process-level verification requirements — built into professional workflows — provide systematic protection.",
      paragraphs: [
        [
          s("The most effective hallucination governance mechanism is structured factual grounding before generation. "),
          x(
            "RAG architecture, verified document libraries, and constrained generation (the AI can only generate content supported by specified source documents) all reduce hallucination by anchoring outputs to verified facts before generation begins. Verification is built into the generation process, not applied post hoc.",
            "For enterprise AI deployments in high-consequence contexts, the architecture decision — RAG versus unconstrained generation — is a governance decision that should require business leader and legal review. Unconstrained generation in legal, medical, or financial contexts is a governance failure waiting to happen.",
          ),
          s(" For category one and two contexts, require RAG or constrained generation architectures from vendors. Unconstrained generation in high-consequence contexts is an unacceptable governance posture."),
        ],
        [
          s("Post-generation verification must be a workflow requirement, not an optional quality step. "),
          x(
            "Professional workflows that include AI-generated content must specify: which elements require verification, who is responsible for each verification step, what verification method is used (source lookup, expert review, calculation check), and what is the consequence of finding a hallucination (correction, escalation, reporting).",
            "Workflows that specify AI as a 'drafting assistant' without specifying the verification requirements have created an ambiguous process where each individual decides how much to verify — producing inconsistent and often insufficient checking.",
          ),
          s(" Build AI verification requirements into professional workflow documentation — the same way you would specify quality control steps in any other professional process."),
        ],
        [
          s("Hallucination logging and monitoring enables systematic improvement and governance evidence. "),
          x(
            "Organisations that log identified hallucinations — when they occurred, in what context, how they were detected, and what the consequence was — build governance evidence and a dataset for improving their AI governance approach. The log answers the question regulators, auditors, and litigants will ask: 'What is your hallucination rate and what do you do about it?'",
            "Hallucination logging also reveals patterns: specific query types, specific document categories, or specific time periods where hallucination rates are elevated. These patterns inform targeted governance improvements — focused oversight on identified high-risk query patterns.",
          ),
          s(" Implement hallucination logging for high-consequence AI deployments. The log is governance evidence and a quality improvement tool simultaneously."),
        ],
      ],
      examples: [
        {
          title: "A Big Four firm's AI quality assurance programme",
          body: "A Big Four professional services firm deployed generative AI for client-facing reports and tax analysis. QA programme: 15% random sampling of AI-generated outputs by qualified reviewers, with findings logged in a central AI quality register. Monthly review of hallucination log to identify patterns. Findings fed back to AI vendor for model improvement and to training teams for user guidance updates. The programme cost: 0.8 FTE reviewer time. The benefit: early identification of a systematic hallucination pattern in VAT analysis that affected 3% of outputs — caught before client delivery.",
        },
        {
          title: "Legal verification technology — citation checking tools",
          body: "Multiple startups — Casetext, Harvey, and others — have built citation verification into their legal AI tools: generated citations are automatically checked against legal databases before presentation to the lawyer. The verification step is part of the generation workflow, not a user responsibility. Law firms evaluating legal AI should require built-in citation verification as a standard feature specification — the verification architecture is as important as the generation capability.",
        },
        {
          title: "Healthcare documentation — structured hallucination prevention",
          body: "A hospital deploying AI for clinical documentation implemented structured generation: the AI was constrained to generate text only from information present in the patient's electronic health record for that encounter. Free-form generation was disabled. Hallucination rates on clinical documentation dropped from 12% (unconstrained) to 0.8% (constrained). The residual 0.8% occurred when the EHR data itself was incomplete — a data quality issue, not a model hallucination issue. Constrained generation is the most effective hallucination prevention architecture for document-grounded tasks.",
        },
      ],
    }),
    buildSection({
      number: "7.8",
      title: "BL Board Risk Items — Presenting AI Risk to the Board",
      subtitle: "How to structure the bias, hallucination, and liability narrative for effective board governance",
      take: "Boards need a structured AI risk briefing covering: which AI systems carry bias risk (and the testing status), which carry hallucination risk (and the verification architecture), what the legal liability exposure looks like, and what the governance mechanisms are to detect and respond to failures. A board that receives this briefing can govern AI risk. A board that does not cannot.",
      why: "AI risk has entered the board governance agenda through regulatory requirements (EU AI Act, FCA, ICO), investor ESG expectations, and the increasing frequency of high-profile AI failures. Board members who receive an inadequate AI risk briefing cannot meet their governance responsibilities — and cannot ask the right questions to hold management accountable.",
      paragraphs: [
        [
          s("The board AI risk briefing has four components. "),
          x(
            "One: AI risk register — a mapped inventory of AI systems by consequence tier, with bias testing status and hallucination governance status for each. Two: incident log — any identified bias issues, hallucination events, or AI-related regulatory contacts in the period. Three: regulatory landscape — material changes in AI regulation (EU AI Act, FCA guidance, ICO enforcement) and the organisation's compliance status. Four: governance actions — any threshold changes, model retraining events, vendor contract amendments, or governance framework updates in the period.",
            "Each component serves a different board governance function: the register enables risk assessment; the incident log enables performance oversight; the regulatory landscape enables compliance monitoring; the governance actions enable accountability.",
          ),
          s(" Structure the board AI risk update with all four components as standing agenda items. Boards that receive these four components quarterly are governing AI risk; boards that receive ad hoc updates are not."),
        ],
        [
          s("Board members need a minimum AI literacy to govern AI risk effectively. "),
          x(
            "Non-executive directors who do not understand the difference between bias and hallucination, who conflate AI accuracy with AI fairness, or who treat all AI risks as equivalent cannot ask the questions that hold management accountable. A basic AI literacy programme for the board — four to six hours — changes the quality of board AI governance measurably.",
            "Investor ESG frameworks and stewardship codes are increasingly expecting board-level AI governance literacy. The Investment Association's Stewardship Code and institutional investor AI governance guides all point in this direction. Board AI literacy is becoming a governance expectation, not a voluntary enhancement.",
          ),
          s(" Commission a board AI literacy programme covering bias, hallucination, evaluation, and liability — as a standing governance investment rather than a one-off event. AI literacy has a shelf life: update it annually."),
        ],
        [
          s("The liability narrative for the board requires three clear statements. "),
          x(
            "One: for which AI systems is the organisation the deploying organisation under the EU AI Act high-risk framework — and what compliance obligations does that trigger? Two: for which AI-assisted decisions is the organisation the legally accountable entity — and what is the human accountability chain? Three: what is the organisation's position if an AI system produces a discriminatory or harmful output — what detection, response, and remediation mechanisms exist?",
            "Boards that can be briefed on all three statements have appropriate AI liability governance. Boards that cannot be given a clear answer to any of the three have identified a governance gap requiring immediate management attention.",
          ),
          s(" Present the three liability statements to the board annually as part of the AI risk governance update. Gaps in any statement are board action items, not management discretionary items."),
        ],
      ],
      examples: [
        {
          title: "A FTSE 100 board AI risk governance framework",
          body: "A FTSE 100 board implemented a quarterly AI risk update with all four components: AI risk register (23 systems, categorised by consequence tier with current bias and hallucination status), incident log (3 minor incidents in Q3, all resolved within governance framework), regulatory landscape (EU AI Act implementation timeline updated), governance actions (two thresholds revised, one vendor contract amended). The framework required 4 hours of management preparation and 30 minutes of board time per quarter — producing demonstrably better board AI governance than ad hoc reporting.",
        },
        {
          title: "NEDs and AI literacy — a board programme",
          body: "A financial services firm invested in a half-day AI governance workshop for non-executive directors. Curriculum: AI system types and bias pathways, hallucination and its governance, EU AI Act high-risk classification, and AI incident response. Post-workshop, NEDs introduced three new standing questions to AI management reports: bias testing status, hallucination governance architecture, and regulatory compliance assessment. The questions changed the quality of management preparation for board meetings — improving governance without additional board time commitment.",
        },
        {
          title: "A board liability disclosure crisis — prevention",
          body: "A business services company avoided a significant liability disclosure crisis when its board AI risk register — implemented six months earlier — identified a potentially high-risk AI recruitment tool that had not been bias-tested. The board governance process required management to halt deployment pending bias testing. Testing identified a statistically significant gender disparity in screening recommendations. Remediation preceded deployment. The board's proactive governance prevented the scenario — an undisclosed AI discrimination claim — that would have required material liability disclosure.",
        },
      ],
    }),
  ],
  quiz: [
    {
      q: "A vendor assures you their AI tool is 'fair and unbiased'. What is the minimum evidence you should require before accepting this assurance?",
      options: [
        "The vendor's written attestation of fairness.",
        "Disaggregated performance metrics by protected characteristic groups, with documented bias testing methodology, a description of which bias types (historical, measurement, sampling) were tested, and calibration testing by subgroup.",
        "A reference from another client in a similar industry.",
        "The AI Act compliance certificate.",
      ],
      correct: 1,
      correctFeedback:
        "Right. 'Fair and unbiased' is a claim that requires specific evidence: disaggregated performance, documented methodology, and coverage of all relevant bias pathways. Vague assurances are legally and operationally insufficient. Re-read sections 7.1, 7.2, and 7.4.",
      wrongFeedback:
        "Vendor fairness assurances are insufficient governance. Specific evidence requires disaggregated metrics, documented methodology, and bias pathway coverage. Re-read sections 7.1, 7.2, and 7.4.",
    },
    {
      kind: "categorize",
      q: "Sort each AI failure scenario into the correct bias pathway.",
      categories: ["Historical data bias", "Measurement bias", "Sampling bias"],
      items: [
        { text: "A promotion AI trained on historical promotion decisions replicates a pattern where women were promoted at lower rates than men.", category: 0 },
        { text: "A pain management AI underestimates pain severity for certain patient groups because clinical pain scores are measured less accurately for those groups.", category: 1 },
        { text: "A fraud detection AI performs worse on business account fraud because business fraud was underrepresented in the consumer-focused training dataset.", category: 2 },
        { text: "A credit AI replicates geographic redlining patterns from historical mortgage approval data.", category: 0 },
        { text: "A performance management AI inherits manager rating bias because ratings are subjectively assigned by managers with known demographic biases.", category: 1 },
      ],
      correctFeedback:
        "Right. Historical data bias: AI encodes past discrimination. Measurement bias: the label being predicted is measured inaccurately for certain groups. Sampling bias: certain groups are underrepresented in training data, producing worse performance for them. Re-read section 7.2.",
      wrongFeedback:
        "Three bias pathways, three different sources. Historical: past decisions. Measurement: inaccurate labels. Sampling: underrepresented groups in training. Re-read section 7.2.",
    },
    {
      q: "An attorney submits a legal brief citing three cases that do not exist — generated by an AI legal research tool. Who bears responsibility?",
      options: [
        "The AI vendor — the tool produced the citations.",
        "The attorney and the law firm — professional responsibility for legal submissions rests with the practitioner, regardless of the tool used to prepare them. AI-generated citations require professional verification.",
        "The court — they should have checked the citations.",
        "The client — they instructed the use of AI tools.",
      ],
      correct: 1,
      correctFeedback:
        "Right. Professional responsibility for legal submissions rests with the practitioner. 'The AI produced it' is not a defence — it is an aggravating factor indicating failure to verify. Legal AI tools require citation verification workflows as a professional standards requirement. Re-read sections 7.5 and 7.6.",
      wrongFeedback:
        "AI tools do not carry professional responsibility — their users do. Legal professionals using generative AI must verify all citations and references before submission. Re-read sections 7.5 and 7.6.",
    },
    {
      kind: "order",
      q: "Order the four components of a board AI risk briefing.",
      prompt: "Drag to arrange from first component (top) to last (bottom).",
      items: [
        "AI risk register — inventory of systems by consequence tier with bias and hallucination governance status.",
        "Incident log — identified bias issues, hallucination events, and regulatory contacts in the period.",
        "Regulatory landscape — material AI regulation changes and compliance status.",
        "Governance actions — threshold changes, retraining events, and vendor contract updates in the period.",
      ],
      correctFeedback:
        "Right. Register first (what we have and its risk status), then incidents (what happened), then regulatory (what changed in the environment), then governance actions (what we did). This sequence gives the board the context to evaluate each subsequent item. Re-read section 7.8.",
      wrongFeedback:
        "Start with the risk register — the board needs to understand the landscape before reviewing incidents, regulations, and governance actions. Re-read section 7.8.",
    },
    {
      q: "Your AI credit scoring system is found to have a 14-percentage-point accuracy gap between two demographic groups. What is the required governance response?",
      options: [
        "Accept — some performance variation is technically unavoidable.",
        "Halt deployment pending investigation. Identify the bias pathway (training data, measurement, sampling), document findings, engage legal counsel on disparate impact implications, implement remediation, and re-test before redeployment. Disclose to the regulator if the gap is material under applicable rules.",
        "Retrain the model immediately without investigation.",
        "Add a disclaimer to customer-facing communications.",
      ],
      correct: 1,
      correctFeedback:
        "Right. A 14-percentage-point accuracy gap in credit AI is a material disparate impact finding. The response is halt, investigate, remediate, re-test, and disclose — not accept, ignore, or minimise. Re-read sections 7.3 and 7.4.",
      wrongFeedback:
        "A statistically significant accuracy gap in credit AI constitutes a disparate impact finding that triggers regulatory and legal obligations. The response is investigation and remediation — not acceptance or minimisation. Re-read sections 7.3 and 7.4.",
    },
    {
      kind: "order",
      q: "Order the governance steps for preventing hallucination harm in a legal context.",
      prompt: "Drag to arrange from first step (top) to last (bottom).",
      items: [
        "Select AI architecture with constrained generation or RAG on verified legal corpus.",
        "Implement citation verification as a mandatory workflow step — not optional.",
        "Train users on hallucination risk and verification requirements.",
        "Log identified hallucinations and review patterns monthly to improve governance.",
      ],
      correctFeedback:
        "Right. Architecture first (reduce hallucination at source), then workflow (catch what remains), then user training (inform behaviour), then logging (improve over time). Re-read sections 7.5, 7.6, and 7.7.",
      wrongFeedback:
        "Prevent at source first (architecture), then detect what passes through (workflow verification), then inform users (training), then improve systematically (logging). Re-read sections 7.5–7.7.",
    },
  ],
});
