import { buildChapter, buildSection, s, x, sectionWithDiagram } from "../concepts-pb4-helpers";

export const chapter07BiasHallucinationLiability = buildChapter({
  slug: "founder-bias-hallucination-liability",
  number: 7,
  shortTitle: "Bias, Hallucination & Liability",
  title: "Bias, Hallucination & Founder Liability — The failure modes that end companies",
  readingMinutes: 28,
  summary:
    "Bias and hallucination are not bugs to patch — they are structural properties of AI systems with legal, regulatory, and reputational consequences. EU AI Act, US disparate-impact law, and the lawyer conversation every founder must have before shipping.",
  keyTakeaway:
    "Bias is memorized prejudice at scale; hallucination is confident fiction at scale. You cannot eliminate either — but founders who build containment architecture, disaggregated evaluation, and legal guardrails before launch survive; founders who promise 'zero errors' do not ship, or ship and get sued.",
  pmCallout:
    "As a founder: stop treating bias and hallucination as engineering bugs on a backlog. They are existential risks that belong in your board deck, your data room, and your first legal counsel call — not in a post-launch retro.",
  sections: [
    sectionWithDiagram({
      number: "7.1",
      title: "What is model bias",
      subtitle: "Systematic performance gaps across groups — the risk hiding inside your accuracy slide",
      take: "Model bias is systematic unequal performance across demographic or structural groups — the model works well for the majority and fails for minorities. It is not random error; it is patterned discrimination embedded in the product.",
      why: "Founders who launch without asking 'who does this fail for?' discover the answer in viral Twitter threads, regulatory inquiries, and churned customer segments. Bias failures are company-defining events, not support tickets.",
      paragraphs: [
        [
          s("Your fintech app's facial login works flawlessly for most beta users. "),
          x(
            "Users with darker skin tones report 40% failure rates. The model is not randomly broken — it systematically fails a demographic.",
            "Bias is patterned, not noisy. Random bugs get fixed quietly. Bias becomes a civil rights headline.",
          ),
          s(" Your brand is now associated with exclusion, not innovation."),
        ],
        [
          s("Mechanically, models optimize for minimum total error across the training distribution. "),
          x(
            "If 80% of training data represents one demographic, the model sacrifices minority performance to maximize majority accuracy.",
            "The loss function has no fairness constraint unless you add one. Math optimizes for the majority by default.",
          ),
          s(" High overall accuracy can mask catastrophic minority failure."),
        ],
        [
          s("The business consequence for founders is existential in regulated and consumer markets. "),
          x(
            "Bias in lending, hiring, housing, or identity verification triggers EEOC investigations, GDPR complaints, and class actions — not just bad PR.",
            "Enterprise buyers now ask for bias audit documentation in security reviews. Missing it kills deals.",
          ),
          s(" A single biased launch can cap your TAM permanently in affected segments."),
        ],
        [
          s("Treat fairness as a launch gate, not a nice-to-have. "),
          x(
            "Mandate disaggregated evaluation before any public launch. Block ship if any cohort falls more than a few points below your floor.",
            "Founders who say 'we'll fix bias in v2' in hiring or credit products are gambling the company.",
          ),
          s(" Document your fairness criteria in the data room before fundraising in regulated verticals."),
        ],
      ],
      examples: [
        {
          title: "Gender Shades — the wake-up call",
          body: "Joy Buolamwini's research showed commercial facial analysis had under 1% error for lighter-skinned men and up to 34% for darker-skinned women. IBM, Microsoft, and Face++ overhauled training data. Founders in biometrics learned: overall accuracy is meaningless without demographic disaggregation.",
        },
        {
          title: "Apple Card credit limits",
          body: "Apple Card users discovered husbands and wives with shared finances received drastically different credit limits. Goldman Sachs' algorithm assigned lower limits to women via proxy variables despite gender being removed from inputs. Regulatory investigation followed. Founder lesson: scrubbing protected attributes does not remove discrimination.",
        },
        {
          title: "Soap dispenser — bias beyond neural networks",
          body: "A viral video showed an airport soap dispenser working for lighter skin but not darker skin. The infrared sensor was calibrated on limited skin-tone data. Founders learned bias lives in sensors, rules, and models alike — anything not tested across diverse populations.",
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
      number: "7.2",
      title: "How bias enters training data",
      subtitle: "Historical prejudice, sampling gaps, and proxy discrimination — amplified by AI",
      take: "Models are pattern-matching engines that faithfully scale whatever patterns exist in training data — including historical prejudice, sampling gaps, and proxy discrimination. Automating a biased process does not fix bias; it industrializes it.",
      why: "Founders who train on 'ten years of our data' without auditing it are automating their company's past mistakes at venture-scale speed. Due diligence teams now ask about training data lineage specifically because of Amazon's recruiting disaster.",
      paragraphs: [
        [
          s("You train a hiring AI on a decade of your company's accepted and rejected resumes. "),
          x(
            "The model learns to penalize resumes containing 'women's' — because historical hiring favored male candidates.",
            "The model held up a mirror to past behavior. It did not invent sexism; it scaled it.",
          ),
          s(" You have automated discrimination at 10,000 applications per hour."),
        ],
        [
          s("Mechanically, ML has no moral compass. "),
          x(
            "Correlations in training data are treated as ground truth. Proxy discrimination reconstructs protected attributes from zip codes, schools, and purchase patterns even when race or gender columns are deleted.",
            "Removing the gender column does not remove gender signal. Models find proxies.",
          ),
          s(" Historical data from biased processes produces biased models — deterministically."),
        ],
        [
          s("The business consequence is speed-of-discrimination. "),
          x(
            "A biased recruiter reviews 50 resumes daily. A biased algorithm rejects 10,000 qualified applicants before lunch.",
            "AI does not just inherit bias — it accelerates and institutionalizes it in infrastructure.",
          ),
          s(" Rooting out bias after launch costs multiples of preventing it during data acquisition."),
        ],
        [
          s("Audit training data before the first training run, not after the first scandal. "),
          x(
            "Ask: 'If this data perfectly represents our past, are we proud of our past?' If not, fix data acquisition before fixing algorithms.",
            "Founders control data budget and vendor selection — the highest-leverage fairness intervention.",
          ),
          s(" Document data provenance in your data room. Investors in regulated AI ask for it."),
        ],
      ],
      examples: [
        {
          title: "Amazon recruiting tool — scrapped",
          body: "Amazon built resume screening AI on a decade of male-dominated hiring data. The model penalized women's colleges and the word 'women's.' Bias was so embedded the project was abandoned. Founder takeaway: some historical data is too toxic to train on — walk away and redesign the process first.",
        },
        {
          title: "COMPAS recidivism algorithm",
          body: "US courts used COMPAS to predict re-offending. It assigned higher risk scores to Black defendants than white defendants with similar histories. The model learned from arrest data reflecting policing bias, not crime rates. Founders in criminal justice tech learned: your labels encode the bias of whoever created them.",
        },
        {
          title: "Healthcare risk scoring — spending as proxy",
          body: "A widely used hospital algorithm used historical healthcare spending as a proxy for health risk. Black patients had less historical spending due to systemic access barriers; the model ranked them healthier and denied interventions. Founder lesson: ask what your labels actually measure — not what you wish they measured.",
        },
      ],
    }),
    sectionWithDiagram({
      number: "7.3",
      title: "Types of bias to know",
      subtitle: "Representation, measurement, aggregation, deployment — each needs a different fix and budget",
      take: "Bias enters through four distinct vectors: representation (missing groups), measurement (flawed labels), aggregation (one model for different populations), and deployment (right model, wrong environment). Misdiagnosing the type wastes capital on the wrong fix.",
      why: "When engineering says 'the model is biased,' founders must triage like a CEO triages a P0 incident. Wrong diagnosis means months of wasted sprints and a still-biased product at launch.",
      paragraphs: [
        [
          s("Your speech AI fails for Southern accents. Engineering proposes architecture changes. "),
          x(
            "The training data lacked Southern accent samples. This is representation bias — fix with data acquisition, not neural network tweaks.",
            "You cannot code your way out of missing data. Buy or record diverse audio.",
          ),
          s(" Misdiagnosis cost you a quarter. Correct diagnosis costs a data budget."),
        ],
        [
          s("Representation bias: training data lacks a group. Measurement bias: labels measure the wrong thing. "),
          x(
            "Aggregation bias: one model forced on populations needing different rules. Deployment bias: model validated in one environment deployed in another.",
            "Four types, four fix budgets: data, labeling, architecture fork, or redeployment strategy.",
          ),
          s(" Each type pulls from a different line item on your operating plan."),
        ],
        [
          s("The business consequence is misallocated runway. "),
          x(
            "Collecting more of the same flawed data reinforces measurement bias. Tweaking hyperparameters does not fix aggregation bias — you need separate models or explicit stratification.",
            "Founders who cannot classify bias type approve the wrong sprint and burn months.",
          ),
          s(" Bias triage should appear in your incident response playbook."),
        ],
        [
          s("When a cohort fails, ask three questions before approving a fix: "),
          x(
            "Do we have enough data on them? Are our labels measuring what we think? Are we forcing one model on populations that need different treatment?",
            "Document the bias classification in the ticket. It determines whether you spend on data, labeling, or engineering.",
          ),
          s(" Teach your leadership team this taxonomy before launch, not during crisis."),
        ],
      ],
      examples: [
        {
          title: "Pulse oximeters — representation bias",
          body: "During COVID, pulse oximeters gave inaccurate readings for darker-skinned patients. Sensors were calibrated primarily on lighter-skinned individuals. Fix required new calibration data, not algorithm patches. A medtech founder used this case to justify a $400K diverse clinical data acquisition budget to investors.",
        },
        {
          title: "Credit scoring — measurement bias",
          body: "A model used missed payments as a label for financial irresponsibility. Lower-income users with volatile cash flows were penalized for bank timing issues, not irresponsibility. The fintech founder relabeled using income-adjusted signals and rebuilt trust with community finance partners.",
        },
        {
          title: "Pneumonia AI — deployment bias",
          body: "A pneumonia detector trained on high-resolution urban hospital X-rays failed completely at rural clinics with older equipment. The model was fair in its training context and useless in deployment context. The founder pivoted to a hardware-agnostic partnership model instead of direct SaaS deployment.",
        },
      ],
    }, {
      kind: "diagram",
      id: "founder-risk-governance",
      type: "flow",
      title: "AI Risk Management Flow",
      caption:
        "Inventory use cases, classify risk, implement controls, monitor incidents — the founder's minimum viable governance path.",
    }),
    buildSection({
      number: "7.4",
      title: "Disaggregated metrics",
      subtitle: "Why overall accuracy hides discrimination — and what investors expect in diligence",
      take: "Top-line metrics hide minority failure. Disaggregated evaluation slices performance by demographic, geographic, device, and language cohorts — exposing the discrimination averages conceal.",
      why: "Enterprise buyers and sophisticated investors no longer accept blended accuracy. Founders who present disaggregated metrics in diligence signal operational maturity; founders who cannot produce them signal prototype-stage risk.",
      paragraphs: [
        [
          s("Your content AI shows 95% precision overall. Sliced by language: 98% English, 45% Spanish. "),
          x(
            "English volume inflated the average. Spanish-speaking users get a broken product masked by the majority.",
            "Averages are the enemy of fair products. Disaggregation is the flashlight.",
          ),
          s(" You almost launched systematic discrimination against a market segment."),
        ],
        [
          s("Mechanically, disaggregation runs evaluation separately per cohort. "),
          x(
            "Instead of one F1 score, you produce fifty — one per demographic, device, region, and language bucket.",
            "Each minority cohort gets equal analytical weight regardless of traffic volume.",
          ),
          s(" Set minimum performance floors on the worst-performing cohort, not the average."),
        ],
        [
          s("The business consequence is silent churn and blocked enterprise deals. "),
          x(
            "Users who experience degraded AI churn without explaining why — because your dashboards do not slice by their cohort.",
            "Enterprise security questionnaires increasingly require disaggregated bias testing evidence.",
          ),
          s(" Airbnb's Project Lighthouse exists because platforms learned this lesson expensively."),
        ],
        [
          s("Mandate disaggregated reporting in your product requirements and data room. "),
          x(
            "List the cohorts you will track: gender, age band, geography, device, language, income proxy. Specify minimum performance floors.",
            "Founders who include this in seed data rooms accelerate enterprise conversations.",
          ),
          s(" The product is only as good as its worst cohort — make that your launch gate."),
        ],
      ],
      examples: [
        {
          title: "Airbnb Project Lighthouse",
          body: "Airbnb built privacy-safe methodology to estimate perceived race and measure booking success by cohort. Disaggregated metrics proved whether algorithm changes helped or harmed minority guests. A marketplace founder copied this pattern for seller fairness dashboards — it became an enterprise trust differentiator.",
        },
        {
          title: "Spotify regional latency",
          body: "Spotify disaggregates recommendation latency by region and connection type. An update that held 200ms overall but added 3 seconds for 3G users in India was caught immediately. A founder applied the same pattern to AI feature latency by market — preventing silent emerging-market churn.",
        },
        {
          title: "Pediatric sepsis model — ward restriction",
          body: "A hospital system sliced sepsis-prediction AUC by age. The model worked for adults but was dangerous for pediatric patients. Deployment was restricted to adult wards. A health AI founder adopted cohort-specific deployment as a commercial strategy — different SKUs for different populations.",
        },
      ],
    }),
    buildSection({
      number: "7.5",
      title: "EU AI Act — what founders must know now",
      subtitle: "Risk tiers, conformity assessment, and why EU market access is a product architecture decision",
      take: "The EU AI Act classifies AI by risk: unacceptable (banned), high-risk (heavy compliance), limited risk (transparency duties), minimal risk (light touch). Your feature-to-tier mapping determines documentation burden, timeline, and whether you can sell in Europe at all.",
      why: "EU revenue is often 25-40% of SaaS TAM. Founders who discover high-risk classification mid-build face 6-12 month delays and six-figure compliance costs. Mapping tiers at ideation is a strategic decision, not legal paperwork.",
      paragraphs: [
        [
          s("You are building AI-assisted CV screening for EU customers. "),
          x(
            "Annex III classifies employment AI as high-risk. Conformity assessment, technical documentation, human oversight, and post-market monitoring are mandatory — not optional.",
            "High-risk is a different product development lifecycle, not a label.",
          ),
          s(" Your EU launch timeline just extended by nine months — if you planned for it."),
        ],
        [
          s("Four tiers: unacceptable (prohibited — social scoring, manipulative AI), high-risk (hiring, credit, education, law enforcement), limited risk (chatbots — transparency required), minimal risk (spam filters). "),
          x(
            "Most consumer chatbots are limited risk. B2B tools sold into HR, finance, and healthcare often inherit customer high-risk obligations.",
            "Your customer's use case can reclassify your tool. Enterprise sales requires a compliance dossier.",
          ),
          s(" US HQ does not exempt you — EU users trigger EU rules."),
        ],
        [
          s("The business consequence is fines up to 7% of global turnover and criminal liability in severe cases. "),
          x(
            "Geo-fencing non-compliant features is a valid short-term strategy. Long-term requires compliance architecture or EU market exit.",
            "Founders should model EU compliance cost as a product line item in financial projections.",
          ),
          s(" Enterprise EU buyers will not sign without conformity documentation for high-risk tools."),
        ],
        [
          s("Build a feature-to-tier registry updated each release. "),
          x(
            "At ideation, ask: 'Which tier? What does conformity require? What is the timeline and cost?' Involve counsel at kickoff, not at launch.",
            "Founders who present EU AI Act fluency in enterprise sales win deals competitors lose to compliance gaps.",
          ),
          s(" Responsible AI documentation in your data room accelerates EU enterprise pipeline."),
        ],
      ],
      examples: [
        {
          title: "HR screening — planned 9-month delay",
          body: "A recruiting AI founder classified CV-ranking as EU high-risk at seed stage. Conformity assessment, bias documentation, and human oversight UI were scoped into the roadmap. EU launch was delayed but planned — not discovered. A competitor launched fast, received a regulatory inquiry, and lost two enterprise logos.",
        },
        {
          title: "Support chatbot — limited risk path",
          body: "A founder added 'You are chatting with AI' disclosure and human handoff for EU users. Limited risk tier required two weeks of legal review, not nine months. Total cost under $15K. The founder presented this tier analysis in a seed deck to demonstrate regulatory awareness.",
        },
        {
          title: "Credit scoring — geo-fence strategy",
          body: "A creditworthiness AI was not ready for EU high-risk conformity. The founder shipped US-only with EU users routed to manual review. Explicit market strategy preserved runway while compliance was built. Investors appreciated honesty over premature EU expansion.",
        },
      ],
    }),
    buildSection({
      number: "7.6",
      title: "US regulatory landscape and founder exposure",
      subtitle: "EEOC, disparate impact, state laws, and why 'the algorithm decided' is not a defense",
      take: "US AI regulation is a patchwork — federal disparate-impact doctrine, EEOC guidance on hiring algorithms, state laws like NYC Local Law 144, FTC action on deception, and sector-specific rules. Founders are liable for discriminatory outcomes regardless of intent.",
      why: "US founders often assume EU is the strict market and US is the wild west. That gap is closing. NYC bias audit laws, California CPRA automated decision-making rights, and EEOC enforcement create real compliance surface area now.",
      paragraphs: [
        [
          s("Your resume-screening AI systematically rejects older applicants. The EEOC investigates. "),
          x(
            "'We didn't program discrimination — the model learned it' is not a legal defense. You built and deployed the system; you own the outcomes.",
            "Disparate impact law cares about outcomes, not intent. Algorithms have no immunity.",
          ),
          s(" Settlement costs and discovery alone can exceed a seed round."),
        ],
        [
          s("Key US frameworks founders hit: EEOC on hiring AI, HUD on housing ads, FTC on deceptive AI claims, state privacy laws on automated decisions. "),
          x(
            "NYC Local Law 144 requires annual independent bias audits for hiring AI with public disclosure of selection rates by race and gender.",
            "State laws are proliferating faster than federal comprehensive AI legislation.",
          ),
          s(" B2B founders inherit customer compliance obligations in regulated verticals."),
        ],
        [
          s("The business consequence extends beyond fines to fundraising and M&A. "),
          x(
            "Acquirers diligence algorithmic discrimination liability. A pending EEOC investigation can kill a term sheet.",
            "Enterprise customers require representations and warranties on bias testing in contracts.",
          ),
          s(" Compliance documentation is becoming a revenue enabler, not overhead."),
        ],
        [
          s("Map your US regulatory exposure by customer vertical and state footprint. "),
          x(
            "Hiring + NYC customers = bias audit obligation. Lending + California = automated decision opt-out rights. Marketing + HUD categories = ad delivery restrictions.",
            "Founders should maintain a regulatory exposure matrix updated quarterly.",
          ),
          s(" Budget legal review as a recurring operating expense, not a one-time launch cost."),
        ],
      ],
      examples: [
        {
          title: "HUD vs Facebook housing ads",
          body: "HUD sued Facebook alleging ad algorithms allowed exclusion by race and religion in housing ads. Facebook overhauled ad delivery and created restricted portals for housing, employment, and credit. A proptech founder studied this case and built fair-housing-compliant ad targeting before launch — avoiding a category-wide landmine.",
        },
        {
          title: "NYC Local Law 144 — public audits",
          body: "NYC requires annual independent bias audits for hiring AI with published selection rates by demographic. A recruiting startup budgeted $80K/year for audit and disclosure infrastructure. Enterprise NYC customers required proof of compliance before pilot. The founder turned audit readiness into a sales asset.",
        },
        {
          title: "Air Canada chatbot liability",
          body: "Air Canada's chatbot hallucinated a bereavement fare policy. The airline argued the chatbot was a separate legal entity. A tribunal ruled against them — companies are bound by AI outputs. US founders learned: your terms of service do not override consumer protection reality.",
        },
      ],
    }),
    buildSection({
      number: "7.7",
      title: "What is hallucination",
      subtitle: "Confident, fluent falsehoods — and why LLMs are not search engines",
      take: "Hallucination is when an LLM generates statistically probable but factually false text. LLMs predict language, not truth. They will present fiction with the same authority as fact unless you architect constraints around them.",
      why: "Founders who pitch AI as 'always accurate' set expectations that guarantee scandal. Air Canada, the NYC lawyer sanctions case, and CNET's math errors are founder cautionary tales — not edge cases.",
      paragraphs: [
        [
          s("Your legal AI cites six court cases. None exist. The grammar is perfect. The lawyer submits them to court. "),
          x(
            "The LLM fabricated citations because legal citation format is statistically predictable — not because it retrieved facts.",
            "Fluency is not accuracy. Authority of tone is not evidence of truth.",
          ),
          s(" Your company name is now associated with sanctioned counsel."),
        ],
        [
          s("Mechanically, LLMs are autocomplete at scale. "),
          x(
            "Each token is chosen for statistical likelihood given prior tokens — not factual verification.",
            "Training data includes fiction, speculation, and errors. The model absorbs all of it as pattern.",
          ),
          s(" Optimization target is fluent text, not correct text. These are separable and often opposed."),
        ],
        [
          s("The business consequence is direct liability and trust destruction. "),
          x(
            "Customers treat computer-formatted output as authoritative. A hallucinated refund policy becomes a contractual commitment.",
            "Support bots that invent policies create financial liability. Research bots that invent facts destroy professional trust.",
          ),
          s(" Unconstrained LLM deployment is a liability engine with a chat interface."),
        ],
        [
          s("Never position raw LLM output as verified fact. "),
          x(
            "Constrain with retrieval, low temperature, citations, and human review for high-stakes domains.",
            "UI disclaimers are necessary but insufficient — architecture must catch hallucinations before users act on them.",
          ),
          s(" Set customer expectations in sales contracts: AI assists, humans verify for consequential decisions."),
        ],
      ],
      examples: [
        {
          title: "Air Canada bereavement fare",
          body: "Air Canada's chatbot invented a bereavement discount policy. The airline refused to honor it; a tribunal forced payment. Founder lesson: you are legally bound by your AI's confident outputs. Design autonomy levels accordingly.",
        },
        {
          title: "Lawyer sanctions — fake cases",
          body: "A lawyer used ChatGPT for a brief. It fabricated six cases with fake docket numbers. The court sanctioned the firm. A legal-tech founder built mandatory citation verification against a case database — turning a scandal into a product requirement.",
        },
        {
          title: "CNET financial articles",
          body: "CNET published AI-generated financial explainers with fundamental math errors. Confident tone masked inaccuracies from editors. Retractions followed. A fintech founder mandated calculator tool-use for any numeric claim — architecture over hope.",
        },
      ],
    }),
    buildSection({
      number: "7.8",
      title: "Hallucination mitigation — what to budget before launch",
      subtitle: "RAG, grounding, temperature, verification — and the cost-latency tradeoffs founders must fund",
      take: "Mitigating hallucination requires expensive scaffolding: retrieval systems, strict prompts, low temperature, citation requirements, and verification layers. A raw API call is a prototype; a constrained system is a product.",
      why: "Founders who underbudget safety infrastructure ship fast and fail expensively. Mitigation triples API cost and doubles latency in many architectures — that must be in your financial model and pricing from day one.",
      paragraphs: [
        [
          s("Your legal AI prototype calls GPT-4 directly. It hallucinates constantly. "),
          x(
            "Fixing it requires vector database, retrieval pipeline, verification model, and prompt engineering — a month of backend work and 3x API cost.",
            "Safety scaffolding is not a polish phase. It is core product infrastructure.",
          ),
          s(" Founders who skip it in the MVP budget pay in liability and rebuild cost."),
        ],
        [
          s("RAG retrieves verified documents and constrains the LLM to answer from them. "),
          x(
            "System prompt: 'Answer only from provided documents. Say I don't know if not found.' Temperature near zero reduces creative fabrication.",
            "RAG trades fluency for faithfulness — the right trade in high-stakes domains.",
          ),
          s(" Dual-model verification (generator + fact-checker) adds latency and cost but catches lies pre-user."),
        ],
        [
          s("The business consequence is margin and positioning. "),
          x(
            "Low-temperature RAG responses feel robotic — acceptable in compliance, wrong in brainstorming.",
            "Match mitigation thickness to risk profile. Over-engineering creative tools wastes money; under-engineering medical tools ends companies.",
          ),
          s(" Price the safety layer into your SKU. Do not subsidize verification from margin indefinitely."),
        ],
        [
          s("Build a mitigation matrix by feature risk tier before sprint one. "),
          x(
            "Low risk (brainstorming): high temperature, no RAG. Medium (internal search): RAG, moderate temperature. High (customer advice, legal, medical): RAG + verification + human gate.",
            "Document this matrix in your architecture overview for investors and enterprise buyers.",
          ),
          s(" Founders who explain mitigation strategy in diligence outperform those who say 'we use GPT-4.'"),
        ],
      ],
      examples: [
        {
          title: "Notion AI Q&A — aggressive RAG",
          body: "Notion searches your workspace, retrieves top pages, and constrains answers to that content. If the answer is not in your workspace, the AI admits ignorance. A founder building internal knowledge AI copied this pattern — hallucination rate dropped 70% with acceptable latency increase.",
        },
        {
          title: "Intercom Fin — low temperature support",
          body: "Intercom's support bot uses near-zero temperature and strict grounding on help center articles. Customer service has zero need for creativity. A founder building B2B support AI adopted the same constraint — containment rate rose, hallucinated refund policies disappeared.",
        },
        {
          title: "Dual-model verification — enterprise tier",
          body: "An enterprise legal AI uses Model A to draft and Model B to cross-reference every factual claim against a trusted database before user display. Compute cost doubled; enterprise tier pricing covered it. The founder positioned verification as the premium SKU, not a cost center.",
        },
      ],
    }),
    buildSection({
      number: "7.9",
      title: "The lawyer conversation — questions founders must ask before shipping",
      subtitle: "Liability mapping, contract language, insurance, and the 30-minute call that prevents seven-figure exposure",
      take: "Before shipping AI that affects hiring, credit, health, legal, or financial outcomes, founders need a structured legal conversation — not a generic terms-of-service review. Liability for biased and hallucinated outputs is company liability.",
      why: "First-time founders often treat legal as a launch-week checkbox. Sophisticated founders bring counsel into architecture decisions. The questions you ask determine whether you survive your first serious incident.",
      paragraphs: [
        [
          s("You schedule 30 minutes with counsel before beta launch. "),
          x(
            "You do not ask 'is our ToS fine?' You ask: 'What liability do we carry if the model discriminates or hallucinates a binding policy?'",
            "The lawyer conversation is a liability mapping session, not a document review.",
          ),
          s(" The answers reshape your product architecture, insurance budget, and customer contracts."),
        ],
        [
          s("Essential questions: What risk tier applies under EU AI Act? Does our use case trigger EEOC or disparate impact exposure? "),
          x(
            "Are we a 'decision-maker' or 'tool provider' under customer contracts? What indemnification do enterprise customers demand? Do we need AI-specific E&O or cyber liability coverage?",
            "Provider vs deployer liability differs by jurisdiction and contract structure.",
          ),
          s(" What incident response obligations exist — notification timelines, regulatory reporting, user remediation?"),
        ],
        [
          s("The business consequence of skipping this conversation is personal and corporate exposure. "),
          x(
            "Directors and officers face scrutiny when AI causes harm. Acquirers carve out AI liability in deals. Enterprise customers demand AI addenda with audit rights and performance warranties.",
            "Legal preparedness is becoming a commercial requirement, not overhead.",
          ),
          s(" Founders who bring counsel a risk matrix — not a finished product — get actionable guidance faster."),
        ],
        [
          s("Prepare for the lawyer call with: use case description, training data summary, disaggregated eval results, mitigation architecture, and target markets. "),
          x(
            "Ask for: recommended contract language, disclosure requirements, human oversight obligations, geo-fencing advice, and incident playbook outline.",
            "Document counsel's guidance in your data room under 'AI Governance.' Investors and acquirers request this folder.",
          ),
          s(" Repeat the conversation at each major feature expansion and market entry — not once at incorporation."),
        ],
      ],
      examples: [
        {
          title: "Seed-stage counsel — risk tier mapping",
          body: "A founder brought a one-page feature-to-EU-AI-Act-tier matrix to seed-stage counsel. Counsel identified two high-risk features requiring human oversight UI and flagged US hiring exposure under NYC law. Architecture changed before beta. Legal bill was $4K; avoided exposure was unquantifiable but investor-noticed.",
        },
        {
          title: "Enterprise contract AI addendum",
          body: "An enterprise buyer demanded AI-specific indemnification, bias audit rights, and incident notification within 24 hours. The founder's counsel negotiated a capped liability AI addendum with mutual audit cooperation. Deal closed. Founder lesson: standard SaaS contracts are insufficient for AI products.",
        },
        {
          title: "D&O insurance — AI rider",
          body: "A board member asked whether D&O coverage addressed AI-related claims. It did not. The founder added an AI E&O rider for $12K annually. When a hallucination incident occurred in month eight, insurance covered legal defense. The founder credited the lawyer conversation at month two for the recommendation.",
        },
      ],
    }),
  ],
  quiz: [
    {
      q: "A facial recognition system has 98% overall accuracy but 30% higher error rates for darker-skinned users. This indicates:",
      options: [
        "A hardware performance issue unrelated to the model.",
        "Structural model bias — systematic unequal performance across demographic groups.",
        "A factual hallucination problem.",
        "Insufficient training epochs.",
      ],
      correct: 1,
      correctFeedback:
        "Right. Bias is systematic performance disparity by group — not random error or hallucination.",
      wrongFeedback:
        "Re-read section 7.1. Patterned failure for a demographic is bias, not a random bug.",
    },
    {
      q: "You train hiring AI on ten years of your company's past hiring decisions. It rejects female applicants disproportionately. The most likely cause is:",
      options: [
        "A hyperparameter tuning error.",
        "The model learned and scaled historical human bias embedded in the training data.",
        "The gender column was accidentally left in the dataset.",
        "The model temperature was too high.",
      ],
      correct: 1,
      correctFeedback:
        "Exactly. Models crystallize training data patterns — including prejudice. They do not invent discrimination.",
      wrongFeedback:
        "Re-read section 7.2. Historical biased decisions become automated biased decisions.",
    },
    {
      q: "An AI trained on urban hospital X-rays fails at rural clinics with older equipment. This is:",
      options: [
        "Representation bias.",
        "Deployment bias — validated in one environment, deployed in a fundamentally different one.",
        "Measurement bias.",
        "Factual hallucination.",
      ],
      correct: 1,
      correctFeedback:
        "Right. The model was sound in its original context; the deployment environment changed.",
      wrongFeedback:
        "Re-read section 7.3. Wrong environment without recalibration is deployment bias.",
    },
    {
      q: "Under the EU AI Act, AI used for CV screening in employment is generally classified as:",
      options: [
        "Minimal risk — no requirements.",
        "High-risk — requiring conformity assessment, documentation, and human oversight.",
        "Unacceptable — prohibited.",
        "Limited risk — transparency only.",
      ],
      correct: 1,
      correctFeedback:
        "Exactly. Annex III employment AI is high-risk with substantial compliance obligations.",
      wrongFeedback:
        "Re-read section 7.5. Hiring and employment AI triggers high-risk requirements in the EU.",
    },
    {
      q: "An LLM confidently invents a fake court case citation. The fundamental reason is:",
      options: [
        "The model's database connection failed.",
        "LLMs predict probable text tokens — they do not retrieve verified facts from a truth database.",
        "The training data had no legal documents.",
        "The model suffered from representation bias.",
      ],
      correct: 1,
      correctFeedback:
        "Right. Hallucination is fluent probability, not retrieval failure.",
      wrongFeedback:
        "Re-read section 7.7. LLMs optimize for likely text, not factual accuracy.",
    },
    {
      q: "Before shipping high-stakes AI, a founder's first legal conversation should focus on:",
      options: [
        "Trademark registration for the product name.",
        "Liability mapping — regulatory tier, disparate impact exposure, contract indemnification, and incident obligations.",
        "Patenting the neural network architecture.",
        "Copyright clearance for the training data only.",
      ],
      correct: 1,
      correctFeedback:
        "Exactly. The lawyer conversation maps liability and compliance — not just paperwork.",
      wrongFeedback:
        "Re-read section 7.9. Founders need liability architecture, not generic ToS review.",
    },
  ],
});
