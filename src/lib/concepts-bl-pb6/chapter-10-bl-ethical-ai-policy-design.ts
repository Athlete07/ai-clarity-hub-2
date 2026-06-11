import { buildChapter, buildSection, s, x, BL_CALLOUT } from "../concepts-bl-helpers";

export const chapter10BlEthicalAiPolicyDesign = buildChapter({
  slug: "bl-ethical-ai-policy-design",
  number: 10,
  shortTitle: "Ethical AI Policy Design",
  title: "Ethical AI Policy Design — Building Principles That Work in Practice",
  readingMinutes: 23,
  summary:
    "An ethical AI policy that employees cannot apply in practice is a public relations document. A policy that meaningfully shapes AI deployment decisions, resolves ethical dilemmas, and creates genuine accountability is a governance instrument. Business leaders who design ethical AI policy around operational reality — not philosophical ideals — build the policies that actually change behaviour.",
  keyTakeaway:
    "Ethical AI policy has three tiers: principles (aspirational values that define what you stand for), standards (specific rules that operationalise the principles), and procedures (the processes that embed the standards in daily decisions). All three tiers are required. Principles without standards are aspirational; standards without procedures are unenforced.",
  pmCallout: BL_CALLOUT,
  sections: [
    buildSection({
      number: "10.1",
      title: "Why Most Ethical AI Policies Fail",
      subtitle: "The five failure modes of AI ethics statements — and how to avoid them in policy design",
      take: "Most organisational AI ethics statements fail for five reasons: they are too abstract to apply to specific decisions, they have no enforcement mechanism, they are disconnected from business functions, they were not co-designed with the people who must apply them, and they confuse compliance with ethics. Effective ethical AI policy avoids all five.",
      why: "An AI ethics statement that generates press coverage but does not change a single deployment decision is worse than no statement: it creates the false impression that ethical governance is in place when it is not. Leaders must design for operational impact, not reputational benefit.",
      paragraphs: [
        [
          s("Failure mode one: principles too abstract to resolve specific dilemmas. "),
          x(
            "'We commit to fair AI.' What does fair mean when a model has equal accuracy but unequal approval rates? 'We will be transparent about AI.' Does transparency require disclosing the model architecture to customers, or providing a plain-English explanation of the decision?",
            "Principles that cannot be applied to specific deployment decisions are decorative, not functional. For every principle in your ethical AI policy, test it against three real deployment dilemmas that your organisation has faced or could face. If the principle does not resolve the dilemma, it needs refinement or supplementary standards.",
          ),
          s(" Test every principle against three real deployment dilemmas before publishing the policy — principles that cannot resolve real dilemmas require refinement."),
        ],
        [
          s("Failure mode two: no enforcement mechanism. "),
          x(
            "Ethical AI principles without a governance mechanism — a review process, an escalation pathway, a veto authority — cannot change deployment decisions. If any team can deploy any AI system regardless of whether it satisfies the ethical AI policy, the policy has no effect.",
            "Enforcement is created by integrating ethical AI policy with the pre-deployment gate: an AI system that does not satisfy the ethical AI policy cannot be deployed. This integration requires both a practical method for assessing ethical compliance and a governance authority to enforce it.",
          ),
          s(" Ethical AI policy without gate integration is aspirational; policy enforced through the pre-deployment gate is operational."),
        ],
        [
          s("Failure mode three: conflating compliance with ethics. "),
          x(
            "Compliance and ethics are related but different. A legal AI system may still be ethically problematic: it may be technically compliant with GDPR while using AI in ways that treat customers unfairly. It may satisfy the EU AI Act's technical documentation requirements while deploying AI that systematically disadvantages vulnerable groups.",
            "Ethical AI policy must cover the space between legal compliance and ethical ideal — the decisions that are lawful but may not align with the organisation's values and commitments to customers, employees, and society.",
          ),
          s(" Frame ethical AI policy explicitly as covering the space beyond legal compliance — not replacing compliance programmes but addressing the decisions that compliance frameworks do not resolve."),
        ],
      ],
      examples: [
        {
          title: "Google Responsible AI — principles to standards evolution",
          body: "Google's 2018 AI Principles were broad values (be socially beneficial, avoid bias, be accountable). By 2023, Google had developed these into specific standards with decision criteria, review processes, and a Responsible Innovation team with veto authority over product features. The evolution from principles to operational standards took five years and multiple product incidents that demonstrated where principles alone were insufficient. Business leaders designing ethical AI policy should start with the principles-to-standards structure, not expect principles alone to be operational.",
        },
        {
          title: "Microsoft Responsible AI Standard — operationalisation",
          body: "Microsoft's Responsible AI Standard (published 2022) is the operational layer below its AI Principles. It defines 25 specific goals, organised under the six AI Principles, with specific measurement approaches and accountability requirements for each. The Standard explicitly states: 'Principles without operational standards do not change behaviour.' Business leaders can use Microsoft's Standard as a template for developing their own — the goal categories (fairness, reliability, privacy, security, inclusiveness, transparency, accountability) map directly to the governance obligations covered across this playbook.",
        },
        {
          title: "Tech startup — principles-only ethics failure",
          body: "A UK fintech published a one-page AI ethics statement in 2022 with five principles (fair, transparent, accountable, privacy-respecting, human-centred). In 2024, a journalist investigation revealed the firm's AI loan pricing tool produced systematically higher rates for applicants in areas correlated with minority ethnic communities. The firm's CEO cited the ethics principles in public statements. The principles had no enforcement mechanism, no fairness testing standard, and no connection to the deployment process. The gap between published principles and operational practice was exposed publicly. An ethics statement that does not change deployment behaviour is a reputational liability, not a protection.",
        },
      ],
    }),
    buildSection({
      number: "10.2",
      title: "The Three-Tier Policy Architecture",
      subtitle: "Principles, standards, and procedures — the structure that makes ethical AI policy operational",
      take: "Ethical AI policy requires three tiers: principles define what you stand for, standards translate principles into specific rules, and procedures embed standards in daily operations. All three are required. Organisations that publish principles without standards have aspirations; those with standards without procedures have unread documents.",
      why: "The three-tier architecture is how every effective regulatory framework is structured. GDPR has principles (Article 5 processing principles), standards (specific lawful bases, rights obligations), and procedures (DPIAs, SAR processes). The same architecture makes ethical AI policy operational.",
      paragraphs: [
        [
          s("Tier 1: Principles — the five foundational values for ethical AI. "),
          x(
            "The five principles that anchor most credible ethical AI frameworks: (1) Fairness — AI systems should not discriminate unfairly or produce systematically different outcomes for protected groups. (2) Transparency — AI systems and their decision-making should be explainable to those affected. (3) Accountability — humans should be accountable for AI systems and their outcomes, not the AI itself. (4) Privacy — AI systems should respect data protection rights and minimise unnecessary data collection. (5) Human control — consequential AI decisions should include meaningful human oversight.",
            "Principles should be written in language that employees at all levels can understand and apply — not philosophical abstractions. A principle should pass the 'so what' test: it should have obvious practical implications for AI deployment decisions.",
          ),
          s(" Write principles in plain language with a one-sentence practical implication for each — so every employee knows what the principle means for their AI deployment decisions."),
        ],
        [
          s("Tier 2: Standards — specific rules that operationalise each principle. "),
          x(
            "Each principle requires one or more standards — specific, measurable rules that define what the principle means in practice.",
            "Fairness standard example: 'All AI systems used in hiring, credit, or benefits eligibility decisions must undergo demographic parity and equalised odds testing before deployment, with results documented and reviewed by the AI Governance Lead.' Transparency standard example: 'All AI systems making or significantly influencing individual decisions must be capable of producing a plain-English explanation of the factors contributing to each decision.'",
          ),
          s(" Each principle needs a minimum of one specific standard — a rule that tells a deployment team what they must do (or not do) to satisfy the principle in their specific context."),
        ],
        [
          s("Tier 3: Procedures — the processes that embed standards in daily operations. "),
          x(
            "Procedures translate standards into operational steps: the pre-deployment gate checklist that includes fairness testing as a required deliverable; the DPIA template that includes a transparency assessment section; the vendor due diligence questionnaire that includes explainability requirements.",
            "Procedures are the tier that most ethical AI policies lack: the organisation has principles and may have standards, but there is no process that requires people to apply the standards before deploying AI. Without procedures, standards are aspirations that the deployment pace makes practically ignored.",
          ),
          s(" Map every standard to a procedure — identify the specific operational process (gate, template, checklist, training) that embeds each standard in deployment decisions."),
        ],
      ],
      examples: [
        {
          title: "Three-tier architecture in practice — fairness",
          body: "A retail bank's ethical AI policy tier 1 (principle): 'We are committed to fair AI that does not discriminate on protected characteristics.' Tier 2 (standard): 'All AI systems used in customer decisions must be tested for demographic parity and equalised odds before deployment. Results must be documented, and any disparity above 15% must be investigated and remediated before go-live.' Tier 3 (procedure): The pre-deployment gate form includes a mandatory section requiring upload of bias test results. The gate cannot be submitted without completing this section. The gate system validates that results are present and flags if any disparity exceeds 15%, routing to the AI Governance Lead for review. Principle → standard → procedure creates a governance chain that changes deployment behaviour.",
        },
        {
          title: "IBM Trustworthy AI — three-tier implementation",
          body: "IBM's AI ethics framework moves from its published AI Ethics principles (Explainability, Fairness, Robustness, Transparency, Privacy) through an internal Principles for Trust and Transparency (standards layer) to its AI Fairness 360 and AI Explainability 360 toolkits (procedure layer). The toolkits are the procedural operationalisation of the fairness and explainability principles — employees use the toolkits to apply the standards in development. IBM's public sharing of these toolkits enables other organisations to adopt the same procedure layer without building it from scratch.",
        },
        {
          title: "Procedure gap — standard without enforcement",
          body: "A European insurer's ethical AI policy included a transparency standard: 'All AI decisions affecting customers must include an explanation available on request.' The standard had no procedure — no process, template, or system requirement that made explanation capability a deployment prerequisite. An FCA Consumer Duty review two years after policy publication found that six AI systems used in customer decisions had no explanation capability. The standard was known; the procedure to enforce it had never been built. Procedure gaps produce compliance failures even when standards are well-designed.",
        },
      ],
    }),
    buildSection({
      number: "10.3",
      title: "Designing for Your Organisation's Context",
      subtitle: "Why generic ethical AI frameworks need adaptation to be effective in your specific industry and operational context",
      take: "Generic ethical AI frameworks — published by governments, industry bodies, and tech companies — provide useful starting points but require adaptation to your organisation's specific context: your industry's regulatory environment, your customer base, your AI portfolio composition, and your organisational values. A policy designed for a Silicon Valley tech company does not map directly to a UK healthcare provider or a European financial services firm.",
      why: "Most organisations adopt generic frameworks and publish them without adaptation — producing policies that do not reflect their actual AI deployment context, their specific regulatory obligations, or the ethical dilemmas their teams actually face. Context-specific adaptation is the work that makes generic frameworks operational.",
      paragraphs: [
        [
          s("Industry context determines which principles are most operationally critical. "),
          x(
            "Financial services: fairness and accountability are primary — credit, insurance, and investment AI must be fair and accountable under regulatory law. Healthcare: safety and human control are primary — AI that influences clinical decisions must have robust human oversight and conservative failure modes. Retail: transparency and privacy are primary — customer-facing AI must be honest about its nature and respectful of data rights.",
            "An ethical AI policy that treats all five principles equally for all AI use cases in all industries is not adapted to context. Prioritisation — which principles are non-negotiable and which require context-sensitive application — produces policies that focus governance attention where it matters most.",
          ),
          s(" Prioritise principles by your industry context — identify the top two principles that are non-negotiable for your most important AI use cases, and design the most rigorous standards and procedures around those."),
        ],
        [
          s("Customer context determines transparency and consent obligations. "),
          x(
            "Consumers interacting with AI in daily life (retail, banking, healthcare) have different transparency expectations and rights than business-to-business customers or internal employees. Consumer AI requires customer-facing transparency standards; B2B AI requires contractual transparency standards; employee AI requires employment law-specific standards.",
            "An ethical AI policy that treats all these contexts with identical transparency standards either over-governs B2B contexts or under-governs consumer contexts. Context-specific transparency standards produce policies that are appropriately rigorous without being uniformly burdensome.",
          ),
          s(" Write context-specific transparency standards for consumer AI, B2B AI, and employee AI — the transparency obligations differ by context and should not be treated identically."),
        ],
        [
          s("Organisational values provide the ethical anchor beyond regulatory compliance. "),
          x(
            "Every organisation has stated values — typically around customer service, employee wellbeing, community impact, or social responsibility. Ethical AI policy should explicitly connect AI principles to these existing values: 'Our commitment to customer fairness means our AI must never produce outcomes that would be unacceptable if they had been produced by a human employee acting within our values.'",
            "Connecting ethical AI policy to existing organisational values gives it cultural legitimacy — it is not an external regulation imposed on the organisation but an expression of who the organisation already says it is. This connection also makes the policy harder to dismiss as bureaucratic compliance.",
          ),
          s(" Connect each ethical AI principle explicitly to an existing organisational value — the connection gives the policy cultural legitimacy and makes it an expression of identity, not just compliance."),
        ],
      ],
      examples: [
        {
          title: "Healthcare ethical AI — safety as primary principle",
          body: "An NHS Trust's ethical AI policy identifies patient safety as the primary ethical principle for all clinical AI, with fairness and transparency as secondary principles. Safety standard: 'No clinical AI system may operate without a validated human oversight protocol defining when and how clinical staff may override AI outputs. Clinical AI systems in patient-contact settings must have conservative failure modes — errors toward caution rather than errors toward efficiency.' The safety-primary design reflects the regulatory and clinical context: a clinical AI that errs toward false safety alerts is preferable to one that errs toward missed diagnoses. Industry context shapes which principles are primary.",
        },
        {
          title: "Consumer financial services — fairness standards for protected groups",
          body: "A UK retail bank's ethical AI policy includes specific fairness standards for its consumer-facing AI: all AI systems in customer credit, insurance, and service decisions must be tested for adverse impact on all nine Equality Act 2010 protected characteristics before deployment; results must be provided to the firm's Fair Banking Lead for review; any disparity above 15% requires a Fairness Review Board sign-off; and the firm publishes an annual AI fairness summary in its annual report. The standards are more rigorous than the EU AI Act's minimum requirements — they reflect the firm's stated commitment to fair banking as a core value, not just regulatory compliance.",
        },
        {
          title: "Technology company — connecting AI ethics to company values",
          body: "A technology company's existing company values include 'We are on the customer's side.' Its ethical AI policy explicitly connects each AI principle to this value: 'Our commitment to transparency means customers always know when AI is involved in their experience and can understand the basis for AI-influenced decisions — because people on the customer's side don't use AI to hide from customers.' The connection produced a policy that the customer experience team adopted genuinely — it felt like an expression of their existing values, not an external governance requirement.",
        },
      ],
    }),
    buildSection({
      number: "10.4",
      title: "Co-Design and Stakeholder Engagement",
      subtitle: "Why ethical AI policies designed without input from affected groups are both ethically inadequate and practically ineffective",
      take: "Ethical AI policies designed exclusively by senior leadership and legal teams, without input from employees who use AI tools, customers affected by AI decisions, and communities affected by AI systems, are both ethically incomplete and operationally ineffective. Co-design is not optional consultation — it is the mechanism that produces policies that are both ethically legitimate and practically useful.",
      why: "Policies that employees did not help design are policies employees feel no ownership of. Policies that do not reflect the experiences of affected communities miss the ethical risks those communities identify. The cost of co-design is a few weeks of structured engagement; the cost of its absence is a policy that changes nothing.",
      paragraphs: [
        [
          s("Employee co-design produces policies that employees can actually apply. "),
          x(
            "Employees who use AI tools daily have practical knowledge that policy designers lack: they know where the grey areas are in the current framework, where the dilemmas arise that no current policy resolves, and which standards are operationally unworkable as written.",
            "Structured employee workshops — presenting draft policy for feedback, presenting real dilemmas for policy application, and soliciting operational improvement suggestions — produce policy improvements that make the final document more useful and more respected by the people who must apply it.",
          ),
          s(" Conduct structured employee workshops with the teams that deploy and use AI before finalising the policy — operational feedback from practitioners is the most valuable input in the design process."),
        ],
        [
          s("Customer and community engagement surfaces affected-group perspectives. "),
          x(
            "Customers and communities affected by AI decisions experience risks that internal stakeholders may not anticipate: the job applicant who experiences an unexplained AI rejection, the insurance customer who receives an unexplained AI-generated premium, the community that experiences AI-driven policing differently from the majority.",
            "Engagement methods include: customer advisory panels reviewing draft AI transparency standards, community organisation consultations for AI affecting specific populations, focus groups with underrepresented groups for AI in high-stakes domains. The engagement does not require universal consultation — representative input from groups who are disproportionately affected is the goal.",
          ),
          s(" Engage with communities disproportionately affected by your AI systems in policy design — their perspective surfaces ethical risks that internal stakeholder analysis will not find."),
        ],
        [
          s("External expertise brings ethical frameworks, regulatory insight, and accountability. "),
          x(
            "External ethics advisors, AI governance specialists, and civil society organisations can contribute frameworks, challenge assumptions, and provide accountability that internal policy design cannot. Several organisations have established ethics advisory boards — external bodies that review AI deployments, provide policy input, and in some cases have veto authority over specific deployments.",
            "Ethics advisory boards are most effective when they have genuine authority — the ability to see real deployment proposals, to ask difficult questions of leadership, and to have their recommendations addressed in writing. Advisory boards that receive polished presentations and are asked for endorsement are captured bodies, not governance bodies.",
          ),
          s(" Design external ethics advisory engagement with genuine authority — access to real deployment proposals, written responses to recommendations, and follow-up on prior advice."),
        ],
      ],
      examples: [
        {
          title: "Salesforce — AI ethics co-design with employees",
          body: "Salesforce's ethical AI programme included structured employee input in its design: surveys, focus groups, and a cross-functional working group that included engineers, salespeople, and customer success staff. The employee input identified three policy gaps the leadership team had not anticipated: a need for customer disclosure when AI is used in sales engagement; a need for guidance on AI in internal performance management; and a specific dilemma in AI-assisted contract pricing. Each gap was addressed in the final policy. Employee engagement produced a policy that was 32% longer than the initial draft and significantly more operationally specific.",
        },
        {
          title: "NHS AI ethics community engagement",
          body: "NHS England's ethical AI framework for diagnostic AI was developed with patient community input through the NHS's National Voices patient advocacy network. Patient input identified three principles absent from the initial draft: the right to know when AI was involved in a clinical decision; the right to request human review of any AI-influenced clinical decision; and the need for accessible explanations that do not assume clinical literacy. All three were incorporated into the final framework. The patient community identified rights that clinical and technical stakeholders had not prioritised.",
        },
        {
          title: "Tech company — ethics advisory board with authority",
          body: "A financial services technology company established an Ethics Advisory Board with four external members: an AI governance academic, a consumer rights representative, a disability rights specialist, and a data ethics lawyer. The Board reviews all new AI deployments above the defined commercial threshold, provides written recommendations, and receives written management responses to each recommendation. In two years of operation: 23 deployments reviewed, 14 received recommendations, 11 were fully incorporated, 3 were partially incorporated with management explanation. The Board's veto authority has not been exercised — management incorporates recommendations to avoid the reputational and regulatory risk of an exercise of veto.",
        },
      ],
    }),
    buildSection({
      number: "10.5",
      title: "Ethical Red Lines — Non-Negotiable Limits",
      subtitle: "Defining the AI uses your organisation will never permit — and why these are governance decisions, not technical ones",
      take: "Ethical red lines are uses of AI your organisation will never permit, regardless of commercial justification, technical capability, or competitive pressure. Every organisation needs explicitly defined red lines — the list of AI applications that are categorically off-limits and that no business case can override. These are governance decisions that must be made at board level.",
      why: "Without explicit red lines, every AI application is implicitly available if the business case is strong enough. Red lines create ethical bright lines that prevent the gradual erosion of ethical commitments under commercial pressure — each individual boundary erosion seems small; the cumulative effect is an organisation without ethical limits.",
      paragraphs: [
        [
          s("Red lines typically include prohibited AI practices from law, plus organisation-specific ethical limits. "),
          x(
            "Legally prohibited AI (EU AI Act Article 5) provides the minimum red lines: emotion recognition in workplaces, real-time biometric surveillance in public spaces, social scoring, subliminal manipulation. These are absolute and non-negotiable.",
            "Organisation-specific red lines go beyond legal prohibition to reflect the organisation's values and risk appetite: a healthcare provider might prohibit AI in clinical decisions without mandatory human review, even where legally permitted; a financial services firm might prohibit AI in customer communications that cannot identify themselves as AI; a retailer might prohibit AI in pricing that produces differential prices based on customer vulnerability indicators.",
          ),
          s(" Define red lines in two categories: legally prohibited AI practices (absolute minimum), and organisation-specific ethical limits that reflect your values beyond legal requirements."),
        ],
        [
          s("Red lines must be approved at board level and resistant to commercial override. "),
          x(
            "Red lines that can be overridden by a business case are not red lines — they are guidelines. A red line is a commitment that the organisation will not cross regardless of commercial justification. This commitment must be made at board level, not by management, because it may sometimes conflict with short-term commercial interests.",
            "Red line erosion is the most common ethical AI policy failure: an organisation establishes red lines in policy, then finds individual exceptions under commercial pressure, then finds that the exceptions have become the norm. Red lines must include an explicit no-exception provision: any red line exception requires board approval with public disclosure.",
          ),
          s(" Red line exceptions require board approval and public disclosure — if exceptions are possible without board visibility, the red line is not a red line."),
        ],
        [
          s("Red lines should be publicly communicated, not just internally documented. "),
          x(
            "Public commitment to ethical red lines creates external accountability. Customers, investors, regulators, and employees can hold the organisation to publicly stated red lines in ways that they cannot enforce internal policy documents.",
            "Several organisations have made specific public AI commitments — Google's commitment not to build AI for weapons, Microsoft's commitment not to sell facial recognition to police without appropriate legal framework, Palantir's published ethical and responsible use policy — that have created external accountability. The reputational cost of violating a public commitment exceeds the reputational cost of violating an internal policy.",
          ),
          s(" Publish red lines publicly — external accountability for red lines is more robust than internal accountability, and public commitment demonstrates genuine ethical seriousness."),
        ],
      ],
      examples: [
        {
          title: "Microsoft — facial recognition red line",
          body: "Microsoft publicly committed in 2022 not to sell facial recognition to police departments in the United States absent appropriate federal law governing such use. This red line was maintained despite competitive pressure (competitors did not make the same commitment) and business value (law enforcement is a significant potential market). Brad Smith wrote: 'We appreciate this is not a perfect solution... but we believe it's the right thing to do.' Public red lines create accountability: Microsoft cannot reverse this commitment without significant reputational cost, making the commitment genuinely durable.",
        },
        {
          title: "Healthcare provider — AI clinical red lines",
          body: "An NHS Trust's ethical AI policy includes the following clinical AI red lines: (1) AI must never make a final diagnosis without a qualified clinician review — AI is a diagnostic support tool, not a diagnostic authority; (2) AI must never determine withdrawal of treatment without a consultant-level clinical decision with patient or family involvement; (3) AI-generated clinical communications to patients require clinician review before transmission. The red lines are published in the Trust's annual Quality Account and are referenced in clinical governance reports. They represent the Trust's commitment to human clinical authority over AI in all patient-affecting decisions.",
        },
        {
          title: "Financial services — AI in vulnerable customer interactions",
          body: "A UK bank's ethical AI policy includes a red line: AI may not be used to make final decisions on credit, debt management, or account restrictions for customers who have disclosed financial vulnerability, mental health conditions, or bereavement. These decisions require a human adviser with specific vulnerability training. The red line goes beyond regulatory requirements (FCA vulnerability guidance is principles-based, not prescriptive). The red line was approved by the board and is included in the bank's published Treating Customers Fairly commitments. It has been cited positively in three FCA supervisory reviews as an example of consumer-centric ethical AI governance.",
        },
      ],
    }),
    buildSection({
      number: "10.6",
      title: "Ethical Dilemma Resolution",
      subtitle: "How to build processes that resolve AI ethical dilemmas consistently — not by personal judgment under pressure",
      take: "Every organisation deploying AI at scale will encounter ethical dilemmas — situations where legitimate values conflict and where no option is clearly right. Consistent ethical dilemma resolution requires a structured framework, defined escalation, and documented decisions — not case-by-case personal judgment under commercial pressure.",
      why: "Ethical dilemmas resolved inconsistently produce both operational unfairness (same dilemma, different outcomes) and legal risk (inconsistent application of ethical standards is harder to defend than consistently applied imperfect standards). A structured dilemma resolution framework produces consistent, documented, defensible decisions.",
      paragraphs: [
        [
          s("A structured ethical dilemma framework has four steps: frame, analyse, decide, document. "),
          x(
            "Frame: identify the specific values in tension and who is affected. Analyse: evaluate each available option against the relevant ethical principles and standards; identify the trade-offs; consult the appropriate expertise (legal, DPO, ethics advisor as relevant). Decide: make the decision at the appropriate authority level with the relevant input; name the decision-maker. Document: record the dilemma, the options considered, the reasoning, the decision, and the decision-maker.",
            "The documentation step is the most frequently skipped and the most important for governance: documented dilemma resolution creates precedent, enables consistency review, and provides evidence of ethical deliberation.",
          ),
          s(" Frame, analyse, decide, document — in that order. The documentation step is not optional for governance purposes."),
        ],
        [
          s("Escalation authority for ethical dilemmas must be defined. "),
          x(
            "Not all ethical dilemmas should be resolved at the same authority level. Dilemmas with significant commercial, reputational, or legal implications require senior leadership or board involvement. Routine deployment dilemmas that are clearly within existing standards can be resolved by the AI Governance Lead.",
            "Escalation criteria: escalate to senior leadership if the dilemma involves a potential red line application, a conflict between ethical standards and significant commercial interest, a novel dilemma with no applicable precedent, or any situation where the AI Governance Lead has a conflict of interest.",
          ),
          s(" Define escalation criteria for ethical dilemmas before they arise — decisions made without appropriate authority level are governance failures even when the decision itself is ethically sound."),
        ],
        [
          s("Ethical dilemma precedents reduce future resolution burden. "),
          x(
            "Documented ethical dilemma decisions create precedents: the next time a similar dilemma arises, the prior decision provides guidance. Building a searchable precedent register — describing the dilemma type, the decision, and the reasoning — enables consistent application across teams and over time.",
            "Precedent registers also reveal patterns: if the same type of dilemma arises repeatedly across different AI deployments, the recurrence indicates a policy gap. The standard or procedure that would resolve this dilemma type does not yet exist — and should be created.",
          ),
          s(" Maintain a searchable ethical dilemma precedent register — repeated dilemma types indicate policy gaps that should be addressed by new standards or procedures."),
        ],
      ],
      examples: [
        {
          title: "Dilemma: accuracy vs. fairness trade-off",
          body: "A bank's AI mortgage affordability model achieves 94% accuracy overall but only 84% accuracy for applicants over 65. Removing the age-correlated feature improves the 65+ accuracy to 89% but reduces overall accuracy to 91%. Ethical dilemma: optimise overall accuracy (accepting age accuracy gap) or optimise age-group fairness (accepting overall accuracy reduction). Dilemma resolution: frame (fairness vs. accuracy values in tension; affected group: applicants over 65); analyse (84% accuracy for 65+ constitutes a 10-point accuracy gap creating material discrimination risk; Equality Act 2010 fair lending obligations; 3-point overall accuracy reduction is within acceptable range); decide (remove age-correlated feature, prioritise equalised accuracy, with enhanced human review for applicants over 65 during transition); document (decision made by Chief Risk Officer, July 2025, precedent established for accuracy-fairness trade-offs in credit AI).",
        },
        {
          title: "Dilemma: customer benefit vs. data minimisation",
          body: "An e-commerce personalisation AI achieves significantly better recommendation accuracy when processing detailed browsing behaviour, but GDPR's data minimisation principle requires using only necessary data. Dilemma: more accurate personalisation requires more data; data minimisation requires less. Resolution framework: the legitimate interests LIA must demonstrate that processing additional browsing data is necessary for personalisation and that the benefit outweighs the privacy impact. Decision: core purchase history and explicit preference settings are necessary for personalisation; passive browsing data is not necessary (personalisation quality difference is marginal for most customers). Data minimisation prevailed; browsing data tracking was disabled.",
        },
        {
          title: "Precedent register — repeated dilemma type",
          body: "A technology company's ethical dilemma precedent register identified that 'AI system accuracy below threshold for specific demographic subgroup where full mitigation is not achievable within deployment timeline' had been resolved 4 times in 12 months, with varying outcomes (three accepted with human review overlay, one delayed for retraining). The pattern revealed a policy gap: no standard defined the acceptable level of subgroup accuracy below which deployment is prohibited regardless of human review overlay. A new standard was added: no AI system may be deployed where subgroup accuracy for any protected characteristic is below 80%, regardless of compensating controls. Future dilemmas of this type are resolved by the standard, not by ad hoc escalation.",
        },
      ],
    }),
    buildSection({
      number: "10.7",
      title: "Making Ethics Visible — Communication and Culture",
      subtitle: "How to embed ethical AI values in organisational culture rather than policy documents",
      take: "An ethical AI policy that exists only in a document is not embedded in organisational culture. Embedding ethical AI values requires visible leadership commitment, regular communication, meaningful training, and systems that reward ethical behaviour. Culture is the sum of what leaders do, not what policies say.",
      why: "Research consistently shows that organisational culture — not policy documents — determines ethical behaviour at decision points. Leaders who demonstrate ethical AI values through their own decisions, communications, and resource allocations build cultures where ethical AI behaviour is the norm.",
      paragraphs: [
        [
          s("Leadership behaviour is the most powerful culture signal. "),
          x(
            "When a business leader approves a gate hold on an AI deployment that would have delivered commercial value but had unresolved ethical concerns, that decision communicates ethical AI values to everyone who witnesses it. When a leader overrides the gate for commercial reasons, the opposite signal is sent.",
            "Leaders who publicly reference ethical AI principles when making deployment decisions — in team meetings, all-hands communications, and board presentations — create a shared reference point for the value system. Leaders who never reference the ethical AI framework create an implicit message that it is decorative.",
          ),
          s(" Reference the ethical AI policy publicly when making deployment decisions that involve ethical trade-offs — leadership citing the policy in real decisions is the most powerful culture signal available."),
        ],
        [
          s("Training must be scenario-based, not policy-reading-based. "),
          x(
            "Annual policy acknowledgement exercises produce signatures, not changed behaviour. Scenario-based training — presenting real dilemmas from your organisation's AI deployment experience and asking participants to apply the ethical AI framework — produces genuine understanding and changes behaviour at decision points.",
            "Role-specific training is more effective than generic training: a procurement team needs training on ethical due diligence for AI vendors; an HR team needs training on fairness in AI hiring tools; a data science team needs training on bias testing as an ethical obligation, not just a technical task.",
          ),
          s(" Replace policy acknowledgement training with scenario-based training specific to each function's AI use cases — genuine understanding changes behaviour; signatures do not."),
        ],
        [
          s("Recognition and accountability mechanisms embed culture. "),
          x(
            "Recognition: visible acknowledgement of teams that identify and resolve ethical concerns proactively — in all-hands meetings, annual governance reports, and performance reviews. Accountability: clear consequences for ethical AI policy violations that are consistently applied.",
            "Organisations that only apply accountability for ethical failures (consequences for wrong behaviour) without recognition for ethical success (reward for right behaviour) create fear-based compliance rather than value-based commitment. Both mechanisms are required.",
          ),
          s(" Implement both recognition (ethical AI success stories) and accountability (consistent consequences for violations) — fear-based compliance without value-based motivation does not embed ethical culture."),
        ],
      ],
      examples: [
        {
          title: "Satya Nadella — leadership as ethical AI signal",
          body: "Microsoft CEO Satya Nadella regularly references the company's Responsible AI framework in public speeches, earnings calls, and internal communications. When describing Microsoft's approach to AI product decisions, he consistently frames choices in terms of the responsible AI principles — making the framework a living reference point rather than a compliance document. The visible CEO engagement signals to the entire organisation that the responsible AI framework is a genuine decision tool, not a public relations artefact.",
        },
        {
          title: "Role-specific ethical AI training",
          body: "A global bank's ethical AI training programme delivers three role-specific modules: (1) AI procurement team — ethical vendor due diligence with 6 scenarios based on real procurement dilemmas; (2) HR team — fairness in AI-assisted hiring with 4 scenarios from real deployment decisions; (3) data science team — bias testing as ethical obligation with 5 scenarios from real model development dilemmas. Completion rates: 91%, 94%, and 88% respectively, versus 61% for the prior generic policy training. Post-training assessments show 73% improvement in dilemma resolution accuracy. Role-specific training works; generic training does not.",
        },
        {
          title: "Ethical AI recognition — internal awards programme",
          body: "A technology company's annual internal governance awards include an 'Ethical AI' category recognising teams that proactively identified and resolved ethical concerns in AI deployments. Year one: 12 nominations, 3 winners. The winning team — a product development group that delayed a feature launch for 8 weeks to resolve a fairness concern identified during internal testing — was featured in the company's annual report and in an all-hands presentation by the CEO. The recognition programme produced 28 nominations in year two, indicating a cultural shift toward proactive ethical identification.",
        },
      ],
    }),
    buildSection({
      number: "10.8",
      title: "Maintaining and Evolving the Ethical AI Policy",
      subtitle: "How to keep the policy current as AI capabilities, regulations, and societal expectations evolve",
      take: "An ethical AI policy written in 2024 is not adequate for 2027. AI capabilities, regulatory frameworks, and societal expectations about AI ethics are evolving rapidly. The policy maintenance programme — regular review, regulatory monitoring, stakeholder engagement, and version control — is as important as the initial policy design.",
      why: "Ethical AI policy staleness is a governance risk: a policy that does not cover generative AI, agentic AI, or the EU AI Act's latest provisions is a policy that leaves significant risk unaddressed. Regulators and courts apply current standards, not the standards in effect when the policy was written.",
      paragraphs: [
        [
          s("Annual policy review with regulatory monitoring input. "),
          x(
            "The annual review should cover: new AI capabilities deployed since the last review (do they require new standards or procedures?); regulatory developments (new guidance, enforcement actions, legislative changes); enforcement case studies from across the industry (what AI ethics failures have become visible?); and stakeholder feedback (have employees, customers, or external advisors identified gaps?).",
            "The review output is a version update to the policy — with specific changes documented, rationale explained, and effective dates communicated. A policy that is updated annually with documented changes demonstrates ongoing governance commitment; a policy that has not been updated since publication demonstrates governance neglect.",
          ),
          s(" Publish the policy version history — annual updates with documented changes demonstrate active governance; a static policy from two years ago demonstrates governance staleness."),
        ],
        [
          s("Generative AI and agentic AI require new ethical standards. "),
          x(
            "The rapid adoption of generative AI (2022–2025) and the emergence of agentic AI (AI that takes autonomous actions in the world, 2024–2026) have created new ethical questions that most existing AI ethics policies do not address: hallucination risk in consequential contexts, autonomous AI action without human oversight, AI-generated content in public discourse, and AI agent interactions with third parties on the organisation's behalf.",
            "Policies designed for classification and prediction AI (the dominant AI paradigm before 2022) need specific standards for generative and agentic AI. These are not minor amendments — they are substantive new policy areas requiring dedicated standards and procedures.",
          ),
          s(" Add dedicated policy tiers for generative AI and agentic AI in the next annual review — these capabilities require specific ethical standards not covered by prediction-AI-era policies."),
        ],
        [
          s("Version control and change communication ensure the policy is used. "),
          x(
            "Each policy version should be numbered, dated, and summarised with a change log explaining what changed and why. Changes should be communicated to all affected employees with a summary of the change and its practical implications — not as a 40-page policy document for re-reading.",
            "Employees who are not aware of policy changes cannot apply them. A communication that says 'We have updated our ethical AI policy. The key change affecting your work is: [one paragraph]' reaches employees effectively. An intranet notification that says 'Ethical AI Policy v2.3 published' does not.",
          ),
          s(" Communicate policy changes with a plain-language summary of the change and its practical implication — not a policy document notification requiring full re-reading."),
        ],
      ],
      examples: [
        {
          title: "Generative AI ethics standard — new tier",
          body: "A professional services firm's annual ethics policy review in 2024 identified that its policy had no standards for generative AI, deployed across 12 tools in the firm. New standards added: (1) AI-generated content in client deliverables must be reviewed by a qualified professional before transmission; (2) AI-generated content that could be mistaken for primary research must disclose its AI origin; (3) no employee may input client confidential information to any public generative AI tool; (4) AI-generated legal citations must be independently verified before inclusion in any legal document. The four standards addressed the generative AI ethical risks most relevant to the firm's specific context.",
        },
        {
          title: "Agentic AI — first policy engagement",
          body: "A financial services firm's 2025 ethics policy review addressed agentic AI for the first time. The firm was piloting AI agents for automated customer outreach and internal compliance monitoring — both cases where AI takes autonomous actions on the firm's behalf. New standards required: (1) all AI agent actions must be within a pre-defined and documented action scope approved by the AI Governance Lead; (2) AI agents may not make financial commitments on the firm's behalf above a defined threshold without human confirmation; (3) all AI agent actions must be logged and reviewable within 24 hours. The standards reflected the 'human control' principle applied specifically to agentic AI — where the control architecture differs fundamentally from classification or generation AI.",
        },
        {
          title: "Policy update communication — change summary format",
          body: "A retailer's ethics policy version 3.2 update was communicated to all employees with a one-paragraph change summary: 'We have updated our ethical AI policy to add guidance on generative AI tools. The key change for your work: if you use any AI tool (including ChatGPT, Copilot, or our internal AI) to generate content for customers — emails, product descriptions, marketing copy — you must review it before sending and must not include customer personal information as AI inputs. See the new Generative AI section in the policy (Section 6) for full guidance.' The communication was read by 89% of employees (per Slack engagement tracking) versus 23% for the previous full-policy notification.",
        },
      ],
    }),
  ],
  quiz: [
    {
      q: "Your organisation publishes an ethical AI policy with five principles but no standards or procedures. Six months later, bias testing reveals a discriminatory pattern in a deployed AI that the policy's fairness principle should have prevented. What governance failure does this illustrate?",
      options: [
        "The policy's fairness principle was too broadly written.",
        "The policy lacks the second and third tiers: without specific fairness testing standards and a pre-deployment gate procedure requiring bias testing, the principle cannot prevent discriminatory deployments. The policy is aspirational, not operational.",
        "The bias testing was conducted too late — it should have been done before publication.",
        "The team deploying the AI did not read the policy.",
      ],
      correct: 1,
      correctFeedback:
        "Right. Principles without standards and procedures cannot prevent specific deployment failures. The fairness principle needed a fairness testing standard (bias testing required before deployment) and a gate procedure (gate cannot be submitted without bias test results). Re-read sections 10.1 and 10.2.",
      wrongFeedback:
        "Principles alone cannot prevent specific deployment failures. Without standards (what bias testing is required) and procedures (gate cannot be submitted without bias test evidence), the principle has no operational effect on deployment decisions. Re-read sections 10.1 and 10.2.",
    },
    {
      kind: "order",
      q: "Order the three tiers of ethical AI policy from foundational values (first) to operational enforcement (last).",
      prompt: "Drag to arrange from most foundational (top) to most operational (bottom).",
      items: [
        "Principles: the five foundational values (fairness, transparency, accountability, privacy, human control)",
        "Standards: specific, measurable rules that operationalise each principle for deployment decisions",
        "Procedures: the processes (gates, templates, checklists) that embed standards in daily operations",
      ],
      correctFeedback:
        "Right. Principles define values, standards translate values into rules, procedures enforce rules in daily operations. All three tiers are required — each tier enables the next, but none can substitute for the others. Re-read section 10.2.",
      wrongFeedback:
        "Principles first (define what you stand for), then standards (define what you must do), then procedures (make sure it gets done). The three-tier architecture is the fundamental structure of operational ethical AI policy. Re-read section 10.2.",
    },
    {
      kind: "categorize",
      q: "Classify each ethical AI policy element into its correct policy tier.",
      categories: ["Principle (Tier 1)", "Standard (Tier 2)", "Procedure (Tier 3)"],
      items: [
        { text: "We are committed to fair AI that does not discriminate on protected characteristics.", category: 0 },
        { text: "All AI systems used in hiring decisions must undergo demographic parity testing with results below 15% disparity before deployment.", category: 1 },
        { text: "The pre-deployment gate form requires upload of bias test results in the mandatory 'Fairness Assessment' field before submission.", category: 2 },
        { text: "AI systems should be transparent and explainable to those they affect.", category: 0 },
        { text: "All AI systems making individual credit decisions must produce a plain-English explanation available within 24 hours of any individual request.", category: 1 },
        { text: "The DPIA template for AI systems includes a mandatory 'Transparency Assessment' section requiring evidence of explanation capability before DPO sign-off.", category: 2 },
      ],
      correctFeedback:
        "Right. Principles: aspirational values. Standards: specific measurable rules. Procedures: operational processes that enforce the standards. Each tier is distinct and all three are necessary. Re-read section 10.2.",
      wrongFeedback:
        "Principles are aspirational values. Standards are specific measurable rules ('must undergo testing', 'must produce explanation'). Procedures are the operational mechanisms that enforce standards (gate forms, DPIA templates). Re-read section 10.2.",
    },
    {
      q: "A product team presents a business case for an AI system that is legally compliant but will produce systematically higher prices for customers in areas correlated with lower-income demographics — a lawful practice with ethical implications. Under your ethical AI policy's fairness principle, what is the correct response?",
      options: [
        "Approve — the AI is legally compliant, which is the standard for deployment.",
        "Apply the ethical dilemma resolution framework: frame the values in tension (commercial pricing freedom vs. fairness to lower-income groups), analyse the trade-offs against the fairness standard, make a decision at the appropriate authority level, and document the reasoning. Compliance with law is not the ethical policy's sole standard.",
        "Reject — any AI that produces differential prices by income is ethically unacceptable.",
        "Approve with a disclosure statement to customers.",
      ],
      correct: 1,
      correctFeedback:
        "Right. Ethical AI policy covers the space between legal compliance and ethical ideal. A lawful but potentially unfair practice requires ethical analysis — not automatic approval because it is legal, and not automatic rejection because it affects a protected group. The structured dilemma framework produces a documented, consistent decision. Re-read sections 10.1 and 10.6.",
      wrongFeedback:
        "Legal compliance is the compliance framework's standard, not the ethical policy's standard. Ethical AI policy covers decisions that are lawful but may conflict with ethical values. This dilemma requires structured ethical analysis, not automatic approval or rejection. Re-read sections 10.1 and 10.6.",
    },
    {
      q: "Your ethical AI policy was written in 2023. The organisation has since deployed 8 generative AI tools, adopted AI agents for customer outreach, and faced 3 EU AI Act regulatory developments. The policy has not been updated. What is the governance risk?",
      options: [
        "Minimal — the 2023 policy's principles are technology-neutral and still applicable.",
        "Significant governance staleness risk: the policy has no standards for generative AI hallucination risk or agentic AI autonomous action; three EU AI Act developments since 2023 may require updated compliance standards; and regulators apply current standards, not 2023 standards. Annual review and update is required.",
        "The policy only needs updating when a new regulatory requirement is published.",
        "The 2023 policy's ethical principles remain valid — only the procedures need updating.",
      ],
      correct: 1,
      correctFeedback:
        "Right. A 3-year policy gap with generative AI adoption, agentic AI deployment, and multiple regulatory developments is significant governance staleness. Regulators apply current standards; investors expect current governance. Annual review and update is required. Re-read section 10.8.",
      wrongFeedback:
        "Technology-neutral principles do not substitute for technology-specific standards and procedures. Generative AI and agentic AI require specific ethical standards; EU AI Act developments may require updated compliance standards. Regulators assess current governance — not the governance that was adequate in 2023. Re-read section 10.8.",
    },
    {
      kind: "order",
      q: "Order the steps to resolve an ethical AI dilemma consistently using the four-step framework.",
      prompt: "Drag to arrange from first step (top) to final step (bottom).",
      items: [
        "Frame: identify the specific values in tension and who is affected by each available option",
        "Analyse: evaluate each option against the relevant ethical principles and standards; identify trade-offs and consult required expertise",
        "Decide: make the decision at the appropriate authority level with required input; name the decision-maker",
        "Document: record the dilemma, options considered, reasoning, decision, and decision-maker for the precedent register",
      ],
      correctFeedback:
        "Right. Frame → Analyse → Decide → Document. Documentation is not optional — it creates precedent, enables consistency review, and provides evidence of ethical deliberation. Decisions made without documentation are not part of an ethical governance programme. Re-read section 10.6.",
      wrongFeedback:
        "Frame first — you cannot analyse without knowing what values are in tension. Document last — but do not skip it. Documentation of reasoning is the governance record that enables consistency across similar future dilemmas. Re-read section 10.6.",
    },
  ],
});
