import { buildChapter, buildSection, s, x, sectionWithDiagram } from "../concepts-pb4-helpers";

export const chapter04FounderHallucinationBiasLiability = buildChapter({
  slug: "founder-hallucination-bias-liability",
  number: 4,
  shortTitle: "Hallucination & Bias Liability",
  title: "Hallucination & Bias Liability — The Failure Modes That Move From Engineering to Legal",
  readingMinutes: 30,
  summary:
    "When hallucination and bias become legal liability — real cases, discrimination law applied to AI, disparate impact standards, terms of service limits, AI liability insurance, and the briefing document for your general counsel conversation.",
  keyTakeaway:
    "Hallucination is confident fiction at scale; bias is memorized prejudice at scale. Neither is eliminable — but founders who treat them as legal and regulatory risks before launch build containment architecture. Founders who treat them as engineering bugs discover them in lawsuits, settlements, and regulatory actions.",
  pmCallout:
    "As a founder: 'the model hallucinated' is not a legal defence. 'We took reasonable care and here is the documentation' is. Build the documentation before you need it in court.",
  sections: [
    sectionWithDiagram({
      number: "4.1",
      title: "When hallucination becomes legal liability",
      subtitle: "The verticals and use cases where a wrong AI output creates real legal exposure",
      take: "Hallucination becomes legal liability when AI outputs influence consequential decisions — legal advice, medical guidance, financial recommendations, contractual commitments, or safety-critical information. The more autonomous the AI and the higher the stakes, the greater the exposure.",
      why: "Not every hallucination is a lawsuit. A wrong movie recommendation is an annoyance. A fabricated court citation in a legal filing is professional negligence. Founders must map which features cross the liability threshold.",
      paragraphs: [
        [
          s("The liability threshold is autonomy × stakes × reliance. "),
          x(
            "An AI that suggests a restaurant has low liability. An AI that autonomously promises a refund, cites a nonexistent legal precedent, or recommends a medication dosage has high liability.",
            "Each autonomy upgrade and each consequential domain crossing multiplies exposure.",
          ),
          s(" Score every feature on this formula and gate high-exposure features behind verification."),
        ],
        [
          s("Professional domains carry duty-of-care standards that AI does not meet by default. "),
          x(
            "Law, medicine, finance, and engineering advice carry professional liability norms. Deploying AI in these domains without verification architecture is negligent — regardless of disclaimers.",
            "RAG reduces but does not eliminate hallucination. Citation verification is mandatory in professional domains.",
          ),
          s(" If your AI operates in a licensed profession's territory, assume professional liability applies."),
        ],
        [
          s("Autonomous commitments are the highest-risk hallucination vector. "),
          x(
            "Chatbots that make pricing promises, policy commitments, or contractual representations bind the company to AI outputs.",
            "Air Canada precedent: the company was liable for what the bot said, not what the policy said.",
          ),
          s(" Constrain AI to retrieval-grounded answers for any policy, pricing, or legal content."),
        ],
      ],
      examples: [
        {
          title: "Legal AI fake citations — sanctions and company exposure",
          body: "Multiple lawyers sanctioned for filing briefs with AI-generated fake case citations. The AI companies faced reputational crisis and potential negligence claims. Founder lesson: legal AI must include citation verification — every case name checked against a database before presentation to the user.",
        },
        {
          title: "Air Canada bereavement fare — contractual liability",
          body: "Chatbot promised a bereavement discount not in airline policy. Tribunal held the airline liable for the bot's commitment. Precedent applies globally: your company owns what your AI says to customers, especially on pricing and policy.",
        },
        {
          title: "Medical chatbot — dosage hallucination",
          body: "A wellness app's AI chatbot suggested a medication dosage contraindicated for the user's stated conditions. FDA and FTC inquiry followed. Founder killed the feature, restricted AI to general wellness content with mandatory 'not medical advice' framing, and added human escalation for any health query.",
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
      number: "4.2",
      title: "Real cases — what has happened to companies already",
      subtitle: "The lawsuits, settlements, and regulatory actions that have already resulted from AI failures",
      take: "AI liability is not theoretical. Companies have faced FTC settlements, tribunal liability, EEOC investigations, class action exploration, regulatory fines, and customer churn from AI failures. These cases establish the precedents your product will be measured against.",
      why: "Founders who study existing cases build better products. The failure modes are known — hallucination in professional domains, bias in hiring and lending, undisclosed AI manipulation. Repeating them is negligence, not innovation risk.",
      paragraphs: [
        [
          s("Consumer-facing AI failures generate the highest-profile cases. "),
          x(
            "Air Canada chatbot, AI health apps with unsubstantiated claims, facial recognition with racial bias, chatbots providing harmful advice.",
            "Consumer cases establish that companies are responsible for AI outputs — not just model providers.",
          ),
          s(" Study consumer enforcement actions even if you sell B2B — they set judicial expectations."),
        ],
        [
          s("Employment and lending AI generate the highest-dollar exposure. "),
          x(
            "Amazon scrapped recruiting AI for gender bias. Apple Card faced regulatory investigation for gender-disparate credit limits. COMPAS recidivism algorithm faced constitutional challenges.",
            "Disparate impact in consequential domains triggers regulatory investigation and class action exploration.",
          ),
          s(" Bias in hiring and credit is the most expensive AI failure mode — budget prevention accordingly."),
        ],
        [
          s("B2B AI failures materialise as enterprise churn and contract liability. "),
          x(
            "Law firms suspending legal AI accounts after hallucination incidents. Banks churning recruiting tools after bias audits. Hospitals pausing diagnostic AI after FDA inquiry.",
            "B2B failure is often silent — no viral moment, but revenue death by security review.",
          ),
          s(" Enterprise contracts increasingly include AI incident liability clauses. Read them."),
        ],
      ],
      examples: [
        {
          title: "Amazon recruiting AI — scrapped before lawsuit",
          body: "Amazon built resume screening AI that penalized women's colleges and the word 'women's.' Bias was so embedded the project was abandoned before deployment at scale. No lawsuit — but reputational damage and a cautionary tale every investor knows. Prevention cost less than any settlement would have.",
        },
        {
          title: "Apple Card — regulatory investigation",
          body: "Apple Card users discovered husbands and wives with shared finances received drastically different credit limits. Goldman Sachs algorithm used proxy variables. NY DFS investigation followed. Founder lesson: removing protected attributes from inputs does not remove discrimination from outputs.",
        },
        {
          title: "Legal research AI — firm suspensions",
          body: "After hallucinated case citations became public, multiple law firms suspended AI research tool accounts pending verification features. The AI company lost 30% of enterprise accounts in one quarter. Recovery required building citation verification and publishing third-party accuracy audits.",
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
      number: "4.3",
      title: "Bias liability — discrimination law applied to AI",
      subtitle: "How anti-discrimination law applies to AI hiring tools, lending models, and content moderation",
      take: "Anti-discrimination law applies to AI decisions the same way it applies to human decisions. Title VII (employment), Fair Housing Act, ECOA (credit), ADA (disability), and state equivalents prohibit discrimination in AI-driven outcomes — regardless of whether a human or algorithm made the decision.",
      why: "Founders who believe 'the algorithm is objective' discover that law cares about outcomes, not intentions. Bias liability is the most mature area of AI law — because discrimination law predates AI and applies by analogy immediately.",
      paragraphs: [
        [
          s("Protected classes are protected regardless of decision-maker. "),
          x(
            "Race, gender, age, disability, religion, national origin — AI decisions affecting these groups face the same legal standards as human decisions.",
            "Replacing a biased human with a biased algorithm does not reduce liability — it may increase it through scale.",
          ),
          s(" If your AI influences outcomes for protected groups, discrimination law applies. Period."),
        ],
        [
          s("Hiring AI is the most actively enforced category. "),
          x(
            "EEOC investigates algorithmic hiring discrimination. NYC requires annual bias audits. Illinois BIPA governs biometric hiring tools. California prohibits certain automated decision-making without disclosure.",
            "Any AI in recruiting, screening, performance evaluation, or compensation faces employment discrimination law.",
          ),
          s(" Hiring AI without bias testing is not a product bet — it is a legal gamble."),
        ],
        [
          s("Lending and housing AI face fair lending and fair housing standards. "),
          x(
            "ECOA prohibits credit discrimination. Fair Housing Act prohibits housing discrimination. CFPB actively investigates AI lending models for disparate impact.",
            "Proxy variables (zip code, shopping patterns, device type) reconstruct protected attributes even when explicitly removed.",
          ),
          s(" Fair lending testing is mandatory for any AI affecting credit, insurance, or housing outcomes."),
        ],
      ],
      examples: [
        {
          title: "Hiring AI — EEOC investigation pattern",
          body: "EEOC's AI initiative targets algorithmic hiring tools for systemic discrimination. Multiple investigations launched against resume screening and video interview analysis tools. A recruiting AI founder built EEOC-aligned bias testing into the product and published methodology — turning compliance into enterprise sales advantage.",
        },
        {
          title: "Facebook housing ads — discrimination settlement",
          body: "HUD charged Facebook with housing discrimination through ad targeting algorithms that excluded protected groups. Settlement required algorithmic changes and ongoing monitoring. Founder lesson: ad targeting and content moderation AI face the same discrimination standards as hiring and lending.",
        },
        {
          title: "COMPAS recidivism — constitutional challenge",
          body: "COMPAS algorithm assigned higher risk scores to Black defendants than white defendants with similar histories. Model learned from arrest data reflecting policing bias. Constitutional and civil rights challenges followed. Founders in criminal justice AI learned: your labels encode the bias of whoever created them.",
        },
      ],
    }),
    buildSection({
      number: "4.4",
      title: "Disparate impact — the legal standard that matters most",
      subtitle: "You do not need intent to discriminate. Differential outcomes are enough.",
      take: "Disparate impact — also called adverse impact — is the legal standard where a neutral policy or algorithm produces disproportionately negative outcomes for a protected group. No discriminatory intent is required. Statistical disparity plus failure to demonstrate business necessity is sufficient for liability.",
      why: "This is the standard that makes AI bias a legal problem rather than an ethical one. Your model can be 'blind' to protected attributes and still produce disparate impact through proxy variables. Founders must test for it.",
      paragraphs: [
        [
          s("The four-fifths rule is the practical threshold in employment. "),
          x(
            "If a selection rate for any protected group is less than 80% of the rate for the highest-selected group, adverse impact is presumed.",
            "Example: if 50% of male applicants pass AI screening but only 30% of female applicants pass, that's 60% — below 80%, adverse impact presumed.",
          ),
          s(" Run four-fifths analysis on every hiring AI before deployment."),
        ],
        [
          s("Business necessity is the defence — and it must be documented. "),
          x(
            "If adverse impact exists, the employer must demonstrate the practice is job-related and consistent with business necessity, and that no less discriminatory alternative exists.",
            "'The model is more accurate overall' is not sufficient if accuracy differs across groups.",
          ),
          s(" Disaggregated accuracy by protected group is your business necessity evidence — or your liability."),
        ],
        [
          s("Proxy discrimination defeats attribute removal. "),
          x(
            "Removing race, gender, and age from model inputs does not remove discrimination. Zip codes, school names, purchase history, and browsing patterns proxy for protected attributes.",
            "Apple Card case: gender was not an input, but outcomes were gender-disparate through proxy variables.",
          ),
          s(" Test outcomes, not inputs. Outcome disparity is what regulators measure."),
        ],
      ],
      examples: [
        {
          title: "Four-fifths rule — hiring AI blocked at launch",
          body: "A startup's resume screening AI passed 45% of male applicants and 28% of female applicants — 62% ratio, well below 80% threshold. Launch blocked. Engineering retrained with balanced data and adjusted thresholds. Second test: 78% ratio — still borderline. Added human review for borderline cases. Launch approved with monitoring.",
        },
        {
          title: "Apple Card — proxy discrimination case",
          body: "Goldman Sachs credit algorithm produced gender-disparate limits despite gender not being an input. Investigators found proxy variables (shopping patterns, account structure) reconstructed gender signal. Settlement and algorithm changes followed. Founder lesson: audit outcomes by gender even when gender is not an input.",
        },
        {
          title: "Business necessity defence — documented and accepted",
          body: "A logistics AI showed adverse impact on age for physically demanding roles. Company documented that physical capability was job-related, provided alternative role matching for affected candidates, and demonstrated no less discriminatory alternative achieved safety requirements. EEOC inquiry closed. Documentation of business necessity was the defence.",
        },
      ],
    }),
    buildSection({
      number: "4.5",
      title: "What your terms of service must say about AI outputs",
      subtitle: "The disclaimers that do and do not provide legal protection",
      take: "Terms of service disclaimers about AI accuracy have limited protective value — especially for consequential decisions. Courts may not enforce blanket 'AI may be wrong' clauses for hiring, credit, medical, or legal AI. Product design mitigations protect more than legal language.",
      why: "Founders who invest in disclaimer language instead of product safeguards learn that courts evaluate reasonable care, not terms of service creativity. The right approach: product mitigations first, accurate disclaimers second, never disclaimers alone.",
      paragraphs: [
        [
          s("What disclaimers can do: set expectations for low-stakes features. "),
          x(
            "Informing users that AI-generated content may contain errors. Clarifying that AI output is not professional advice. Stating that users should verify important information.",
            "These work for content generation, summarisation, and suggestion features.",
          ),
          s(" Match disclaimer strength to feature stakes — stronger disclaimers for higher-stakes features."),
        ],
        [
          s("What disclaimers cannot do: eliminate liability for consequential autonomous decisions. "),
          x(
            "You cannot disclaim away discrimination in hiring AI. You cannot terms-of-service your way out of medical malpractice. You cannot waive fair lending obligations.",
            "Statutory protections override contractual disclaimers for protected classes and regulated domains.",
          ),
          s(" In regulated domains, product compliance matters more than terms of service language."),
        ],
        [
          s("Effective AI terms include: capability limitations, verification requirements, data use, and appeal paths. "),
          x(
            "Specifically describe what the AI does and does not do. Require user verification for consequential outputs. Disclose training data use and retention. Provide human review or appeal for adverse decisions.",
            "Specific, honest terms build more legal protection than broad liability waivers.",
          ),
          s(" Have counsel review terms alongside product design — not instead of it."),
        ],
      ],
      examples: [
        {
          title: "Broad disclaimer rejected — court precedent",
          body: "Air Canada argued its website disclaimer that the chatbot was not binding protected the company. Tribunal rejected the argument — the company presented the chatbot as an official customer service channel. Founder lesson: if you present AI as authoritative, disclaimers calling it non-binding will not protect you.",
        },
        {
          title: "Specific AI terms — enterprise acceptance",
          body: "A B2B legal AI startup's terms specifically stated: 'AI-generated citations must be independently verified before filing. [Company] provides verification tools but does not guarantee accuracy of unverified citations.' Enterprise legal teams accepted these terms because they were honest and matched product design (verification tools included).",
        },
        {
          title: "Adverse decision appeal path — regulatory compliance",
          body: "A hiring AI startup's terms included: right to human review of any adverse automated decision, response within 5 business days, and explanation of factors considered. Terms satisfied NYC bias audit requirements and GDPR Art 22 expectations. Specific rights in terms provided more protection than broad liability waivers.",
        },
      ],
    }),
    buildSection({
      number: "4.6",
      title: "Insurance for AI liability",
      subtitle: "What AI liability insurance covers, what it costs, and when you need it",
      take: "AI liability insurance (E&O with AI riders, tech E&O, cyber with AI extensions) covers legal defence costs, settlements, and regulatory fines for AI-related claims. It does not cover intentional misconduct or known unmitigated risks. Premiums range from $5K–$50K annually for startups depending on risk profile.",
      why: "Insurance is not a substitute for product safety — but it is a financial backstop that boards, investors, and enterprise customers increasingly expect. Founders who cannot get insurance at reasonable rates have a signal about their risk profile.",
      paragraphs: [
        [
          s("What AI liability insurance typically covers. "),
          x(
            "Third-party claims arising from AI errors: negligent advice, discriminatory outcomes, privacy breaches from AI processing, IP infringement from AI-generated content.",
            "Defence costs, settlements, and some regulatory fines. Not covered: intentional discrimination, known unmitigated risks not disclosed to insurer.",
          ),
          s(" Read the policy exclusions carefully — they reveal what insurers consider uninsurable risk."),
        ],
        [
          s("Insurers evaluate your risk management posture before quoting. "),
          x(
            "They ask for: risk register, bias testing documentation, human oversight design, incident response plan, eval results, and terms of service.",
            "Startups with documentation get better rates. Startups without documentation may be uninsurable.",
          ),
          s(" Your governance framework is your insurance application — build it before you shop for coverage."),
        ],
        [
          s("When to purchase: before enterprise sales and before fundraising diligence. "),
          x(
            "Enterprise contracts increasingly require proof of E&O insurance. Investors ask in diligence. Regulatory actions are easier to survive with insurance backing defence costs.",
            "Seed stage: explore quotes to understand your risk profile. Series A: purchase coverage.",
          ),
          s(" Budget $10K–$30K annually at Series A for meaningful AI E&O coverage."),
        ],
      ],
      examples: [
        {
          title: "Insurance application accelerated governance",
          body: "A seed-stage founder applied for AI E&O insurance. Insurer requested risk register, bias testing results, and incident response plan — none existed. Founder built all three in four weeks. Insurance quoted at $12K/year. The application process forced governance that would have been deferred indefinitely.",
        },
        {
          title: "Enterprise contract — insurance requirement",
          body: "A Fortune 500 prospect required $2M E&O coverage with AI liability rider before pilot. Founder purchased coverage for $18K/year. Pilot approved. Without insurance, the deal would have stalled in procurement. Insurance cost was 0.5% of pilot contract value.",
        },
        {
          title: "Claim scenario — defence costs covered",
          body: "A customer sued a B2B AI startup alleging discriminatory hiring recommendations. Insurance covered $150K in defence costs over 18 months. Case settled within policy limits. Founder said insurance was the difference between surviving the claim and running out of runway during litigation.",
        },
      ],
    }),
    buildSection({
      number: "4.7",
      title: "Founder decision lens: the AI liability conversation with your general counsel",
      subtitle: "The briefing document to prepare for your lawyer — including the questions they will not know to ask",
      take: "Prepare a one-page AI liability briefing for counsel: product description, AI features list, autonomy levels, affected populations, existing mitigations, known incidents, regulatory exposure, and insurance status. Include questions counsel will not know to ask about your specific AI architecture.",
      why: "General startup counsel may not specialise in AI liability. Your briefing educates them on your specific risk profile and ensures the conversation covers AI-specific issues — not just generic tech liability.",
      paragraphs: [
        [
          s("Briefing structure: product → features → risk → mitigations → gaps → questions. "),
          x(
            "One page. List each AI feature with autonomy level (suggest/confirm/act), affected population, applicable law, mitigations in place, and open gaps.",
            "Attach: risk register, eval results, bias testing summary, terms of service, and incident log.",
          ),
          s(" Counsel can only advise on risks you disclose. Disclose everything."),
        ],
        [
          s("Questions your counsel may not know to ask — you must raise them. "),
          x(
            "'Does our hiring AI require NYC bias audit?' 'Are we a high-risk system under EU AI Act?' 'Do our terms satisfy GDPR Art 22 for automated decisions?' 'Is our health AI positioned as SaMD?'",
            "AI-specific questions require you to bring domain knowledge. Counsel provides legal framework; you provide product facts.",
          ),
          s(" Come with questions, not just a request for 'AI legal review.'"),
        ],
        [
          s("Output of the conversation: prioritised legal action list with budget. "),
          x(
            "Counsel should deliver: top 5 legal risks ranked by severity, recommended mitigations with cost estimates, terms of service revisions, insurance recommendations, and regulatory filing requirements.",
            "Budget the legal action list like a product roadmap — with owners and timelines.",
          ),
          s(" Schedule quarterly AI liability reviews with counsel as your product evolves."),
        ],
      ],
      examples: [
        {
          title: "One-page briefing — $4K well spent",
          body: "A founder brought a one-page feature-to-regulation matrix to seed-stage counsel. Counsel identified two high-risk features requiring human oversight UI, flagged US hiring exposure under NYC law, and recommended AI E&O insurance. Architecture changed before beta. Legal bill was $4K; avoided exposure was unquantifiable but investor-noticed.",
        },
        {
          title: "Founder-educated counsel — EU AI Act classification",
          body: "A founder's general counsel was strong on corporate law but unfamiliar with EU AI Act. Founder brought tier classification analysis to the meeting. Counsel validated classification, identified conformity assessment requirements, and connected the founder with EU AI specialist. Collaboration produced better advice than either party alone.",
        },
        {
          title: "Quarterly review caught new feature risk",
          body: "A founder instituted quarterly AI liability reviews with counsel. Q3 review flagged a new 'AI performance scoring' feature for employees as high-risk under EU AI Act and EEOC exposure. Feature redesigned with human review before launch. Quarterly cadence caught a risk that would have shipped in the next sprint.",
        },
      ],
    }),
  ],
  quiz: [
    {
      q: "When does AI hallucination most likely create legal liability?",
      options: [
        "When the AI recommends a wrong movie on a streaming platform.",
        "When AI autonomously makes consequential commitments in legal, medical, or financial domains.",
        "Only when the founder intentionally programs false outputs.",
        "Never — terms of service disclaim all AI liability.",
      ],
      correct: 1,
      correctFeedback:
        "Right. Liability scales with autonomy, stakes, and reliance — especially in professional domains.",
      wrongFeedback:
        "Re-read section 4.1. Consequential autonomous outputs create the highest exposure.",
    },
    {
      q: "Disparate impact in AI means:",
      options: [
        "The founder intended to discriminate against a protected group.",
        "A neutral algorithm produces disproportionately negative outcomes for a protected group.",
        "Only applies when race is an explicit model input.",
        "Is not recognised under US employment law.",
      ],
      correct: 1,
      correctFeedback:
        "Exactly. Outcome disparity without intent is sufficient for adverse impact analysis.",
      wrongFeedback:
        "Re-read section 4.4. Disparate impact requires no discriminatory intent.",
    },
    {
      q: "What provides more legal protection for high-stakes AI features?",
      options: [
        "Broad 'AI may be wrong' disclaimer in terms of service.",
        "Product mitigations (verification, human review, bias testing) plus honest specific terms.",
        "Hiding AI failures from users.",
        "Claiming the model provider is solely responsible.",
      ],
      correct: 1,
      correctFeedback:
        "Right. Product safeguards and honest terms outperform blanket disclaimers.",
      wrongFeedback:
        "Re-read section 4.5. Courts evaluate reasonable care, not disclaimer creativity.",
    },
    {
      kind: "categorize",
      q: "Match each AI failure mode to its primary legal framework.",
      categories: ["Hallucination liability", "Bias/discrimination", "Consumer protection"],
      items: [
        { text: "Chatbot promises refund not in company policy.", category: 0 },
        { text: "Resume AI passes 30% of women vs 50% of men.", category: 1 },
        { text: "Health app claims AI diagnosis without clinical validation.", category: 2 },
        { text: "Credit model produces racially disparate loan denials.", category: 1 },
        { text: "Legal AI cites six fabricated court cases.", category: 0 },
      ],
      correctFeedback:
        "Right. Hallucination creates negligence/contractual exposure; bias triggers discrimination law; overclaims trigger FTC.",
      wrongFeedback:
        "Re-read sections 4.1–4.3. Each failure mode maps to a distinct legal framework.",
    },
    {
      kind: "order",
      q: "Order the AI liability preparation sequence for a founder (first step top).",
      prompt: "Drag to arrange the recommended preparation order.",
      items: [
        "Map features by autonomy level and consequential domain exposure.",
        "Build product mitigations: verification, oversight, bias testing.",
        "Prepare one-page liability briefing for counsel with specific AI questions.",
        "Purchase AI E&O insurance and update terms of service.",
      ],
      correctFeedback:
        "Exactly. Understand exposure, build mitigations, get legal advice, then insure and document.",
      wrongFeedback:
        "Re-read sections 4.5–4.7. Product mitigations precede legal language and insurance.",
    },
    {
      q: "AI liability insurers typically require which documentation before quoting?",
      options: [
        "Only your company's revenue and employee count.",
        "Risk register, bias testing, oversight design, eval results, and incident response plan.",
        "A promise that your AI never makes mistakes.",
        "Only your foundation model API key.",
      ],
      correct: 1,
      correctFeedback:
        "Right. Your governance framework is your insurance application.",
      wrongFeedback:
        "Re-read section 4.6. Insurers evaluate risk management posture before quoting.",
    },
  ],
});
