import { buildChapter, buildSection, s, x } from "../concepts-pb4-helpers";

export const chapter02BlRfpProcessAiVendors = buildChapter({
  slug: "bl-rfp-process-ai-vendors",
  number: 2,
  shortTitle: "RFP for AI Vendors",
  title: "Running an RFP Process for AI Vendors",
  readingMinutes: 27,
  summary:
    "A standard procurement RFP fails for AI vendors because AI capabilities are not comparable on a features checklist — they require live demonstrations, reference architecture reviews, and pilot commitments. Business leaders who adapt the RFP process for AI compress evaluation timelines, surface real capabilities rather than sales claims, and arrive at contract negotiation with evidence rather than hope.",
  keyTakeaway:
    "An AI RFP has three stages standard RFPs lack: a functional requirements brief that replaces a generic scope of work, a live capability demonstration that replaces a written response, and a pilot commitment that replaces a reference check. These three additions convert an AI RFP from a marketing exercise into a procurement instrument.",
  pmCallout:
    "As a business leader: an AI vendor's written RFP response is a marketing document. The only signal that matters is what the vendor can demonstrate on your data, in your environment, with your use case. Design your RFP to force this demonstration.",
  sections: [
    buildSection({
      number: "2.1",
      title: "Why standard RFPs fail for AI vendors",
      subtitle: "The three assumptions standard procurement makes that break down for AI evaluation",
      take: "Standard RFPs assume vendors can describe their capabilities in writing, that written descriptions are comparable across vendors, and that reference checks validate production performance. All three assumptions fail for AI: capabilities depend on your data, descriptions are marketing, and references are cherry-picked.",
      why: "Business leaders who issue standard RFPs for AI vendors receive polished documents that tell them nothing about how the technology will perform in their environment. The RFP format must change before the evaluation can produce useful signal.",
      paragraphs: [
        [
          s("Standard RFPs ask vendors to describe what they do. AI RFPs must ask vendors to demonstrate what they do on your specific problem. "),
          x(
            "An AI vendor can write 'our model achieves 94% accuracy' in an RFP response. But 94% on whose benchmark, with whose data, on which task? Accuracy claims in written responses are marketing claims.",
            "The only meaningful accuracy signal is performance on a sample of your data, under your conditions, evaluated by your team.",
          ),
          s(" Replace 'please describe your AI capability' with 'please demonstrate your AI capability on the following sample problem.'"),
        ],
        [
          s("Standard RFPs use feature checklists as the comparison framework. AI features are not comparable across vendors on a checklist. "),
          x(
            "Two vendors both check 'natural language processing: yes.' One uses a 2020-era BERT model for keyword extraction. One uses a 2024-era GPT-4-class model for semantic understanding. The checklist cannot distinguish them.",
            "Feature checklists were designed for software with deterministic capabilities. AI capabilities are probabilistic and context-dependent — checklists systematically mislead.",
          ),
          s(" Replace feature checklists with scenario-based demonstrations and minimum performance thresholds."),
        ],
        [
          s("Standard reference checks ask for customer contacts who will speak positively. AI reference checks must be structured to reveal implementation reality. "),
          x(
            "Ask references not 'are you happy with the vendor?' but 'what took longer than quoted?', 'what capabilities underperformed the demo?', and 'what would you require in the contract if you could re-sign today?'",
            "These three questions reliably surface integration gaps, performance gaps, and contract terms that buyers wish they had negotiated differently.",
          ),
          s(" Structured reference questions convert a PR exercise into an intelligence exercise."),
        ],
      ],
      examples: [
        {
          title: "Insurer — checklist evaluation failure",
          body: "An insurance company issued a standard RFP for AI claims processing with a 120-question feature checklist. All four vendors responded 'yes' to 114–118 questions. The evaluation team spent eight weeks scoring checklists and selected the vendor with the highest score. Six months into implementation, the selected vendor's NLP model underperformed on the insurer's handwritten claims forms — a use case not represented in the checklist. A demonstration-based evaluation would have revealed this in week two.",
        },
        {
          title: "Bank — demonstration requirement changes shortlist",
          body: "A mid-market bank rewrote its AI RFP to require a live demonstration on 50 anonymised customer support queries before any written evaluation. Two of five vendors declined the demonstration requirement — eliminating themselves. The three who demonstrated showed performance variance from 61% to 89% accuracy on the bank's actual query distribution. The 89% vendor was not the vendor ranked first on written responses. The demonstration changed the entire shortlist.",
        },
        {
          title: "Retailer — reference question discipline",
          body: "A retail procurement team adopted three structured reference questions for all AI vendor references: 'What took longer than quoted?', 'What capabilities underperformed the demo?', 'What contract term do you wish you had negotiated?' Across four vendors and twelve references, these questions surfaced: one vendor's implementation timeline was 3× quoted; one vendor's accuracy dropped 18% in production vs demo; one vendor's auto-renewal clause had trapped a reference customer for two additional years. All three findings changed the final selection.",
        },
      ],
    }),
    buildSection({
      number: "2.2",
      title: "The AI RFP structure: three stages",
      subtitle: "Functional brief, capability demonstration, and pilot commitment — the three stages of an AI RFP",
      take: "An AI RFP runs in three sequential stages: a written functional brief that vendors respond to, a live capability demonstration, and a structured pilot commitment. Each stage eliminates vendors who cannot meet the next. A vendor who clears all three stages can be taken to contract with evidence.",
      why: "Three-stage AI RFPs are longer than standard RFPs but produce better procurement decisions faster, because each stage uses vendor effort as a filter — vendors unwilling to invest in demonstration and pilot commitment self-select out.",
      paragraphs: [
        [
          s("Stage 1 — the functional brief — replaces the scope of work. "),
          x(
            "The brief specifies: the job to be done in one sentence, the data available to the AI (type, volume, format), the systems the AI must integrate with, the minimum acceptable performance threshold, and the deployment timeline. Vendors respond with a proposed approach, not a feature list.",
            "A functional brief that fits on two pages generates better vendor responses than a 40-page RFP that asks for everything.",
          ),
          s(" Brief responders who do not address all five elements in their response are eliminated before Stage 2."),
        ],
        [
          s("Stage 2 — the capability demonstration — is the most differentiating stage of the process. "),
          x(
            "Provide shortlisted vendors with a sample dataset (anonymised if necessary) representing your actual use case. Set a 90-minute demonstration window. Require vendors to show: setup time, accuracy on the sample, confidence scores for borderline cases, and how errors are surfaced to users.",
            "Confidence score transparency is the most diagnostic demonstration criterion: vendors whose models do not expose confidence are building black boxes you cannot safely deploy.",
          ),
          s(" Score demonstrations on a rubric agreed before the demonstration window opens — not retrospectively."),
        ],
        [
          s("Stage 3 — the pilot commitment — converts the best demonstration into a contractually bounded proof of value. "),
          x(
            "The pilot commitment defines: duration (8–12 weeks), scope (one function, one team, one use case), success criteria (specific, measurable, agreed), and go/no-go decision point. Vendors who will not commit to pilot terms are not confident in their own technology.",
            "A vendor who resists pilot terms is either selling a product not ready for your environment or optimising for contract closure ahead of value delivery.",
          ),
          s(" The pilot commitment is signed before full contract negotiation begins — it is your risk-reduction instrument."),
        ],
      ],
      examples: [
        {
          title: "Healthcare — three-stage RFP timeline",
          body: "A healthcare system ran a three-stage AI RFP for clinical documentation AI. Stage 1 (functional brief response): 3 weeks, 12 vendors responded, 7 eliminated for not addressing integration requirements. Stage 2 (demonstration on 200 anonymised clinical notes): 2 weeks, 5 vendors demonstrated, 2 reached minimum accuracy threshold. Stage 3 (pilot commitment): 1 week, both vendors signed pilot terms, 1 withdrew after reviewing success criteria. Total: 6 weeks to a single vendor with signed pilot terms — faster than the organisation's standard 16-week RFP process.",
        },
        {
          title: "Financial services — demonstration rubric prevents bias",
          body: "A bank's AI evaluation team was enthusiastic about one vendor's sales team and presentation style. The demonstration rubric — set before demos — required scores on: accuracy (40%), confidence transparency (30%), integration setup time (20%), error presentation (10%). The favoured vendor scored 61 overall. A less-marketed vendor scored 88. The rubric removed the halo effect of a polished sales team from a technical evaluation.",
        },
        {
          title: "Logistics — pilot commitment as risk filter",
          body: "A logistics company requested pilot commitments from two shortlisted AI route optimisation vendors. Vendor A signed pilot terms with a 12-week timeline and a minimum 8% fuel efficiency improvement threshold. Vendor B's legal team proposed a pilot 'letter of intent' with no performance commitments and a clause allowing extension at the vendor's discretion. Vendor B's response was treated as a red flag: confident vendors commit to measurable pilots. Vendor A's pilot delivered 11% fuel efficiency improvement in 10 weeks.",
        },
      ],
    }),
    buildSection({
      number: "2.3",
      title: "Writing the functional brief",
      subtitle: "The five elements of an AI functional brief that generates actionable vendor responses",
      take: "The functional brief is the input document that determines the quality of every vendor response in your AI RFP. A brief with all five elements generates responses you can compare. A brief missing any element generates responses you cannot compare — and cannot trust.",
      why: "Business leaders who invest 40 hours in writing a precise functional brief save 400 hours of downstream evaluation effort. Precision in the brief propagates precision through the entire RFP process.",
      paragraphs: [
        [
          s("Element 1: the job to be done in one sentence using the standard format. "),
          x(
            "Format: 'Help [actor] [action] [object] [condition].' Example: 'Help sales managers identify which open deals are most likely to close this quarter without additional discounting.' This sentence immediately tells vendors the actor (sales manager), the action (identify), the object (deals), and the condition (no discounting constraint).",
            "A job-to-be-done sentence eliminates the ambiguity that generates off-target vendor responses. Every word matters.",
          ),
          s(" Spend three iterations on this sentence. It is the most important sentence in your entire RFP."),
        ],
        [
          s("Element 2: the data inventory — type, volume, format, and access method. "),
          x(
            "Example: 'CRM data: 24 months of Salesforce opportunity records, ~8,000 deals, accessible via Salesforce API. Call recordings: Gong transcripts for 60% of deals, MP3 format, accessible via Gong API. Email: Gmail threads for all deals, accessible via Google Workspace API.'",
            "Vendors who see your data inventory can immediately assess whether their model has been trained on similar data and whether their integration stack supports your access methods.",
          ),
          s(" Data inventory completeness is the factor most correlated with accurate vendor implementation scoping."),
        ],
        [
          s("Elements 3–5: integration requirements, minimum performance threshold, and deployment timeline. "),
          x(
            "Integration: list the three systems the AI output must connect to, with API details. Performance: state the minimum acceptable threshold — not the ideal. 'We will not proceed to contract if accuracy on our sample benchmark falls below 80%.' Timeline: state the must-have go-live date and the acceptable range.",
            "A minimum performance threshold in the brief converts the demonstration from a qualitative experience into a pass/fail gate. Vendors below the threshold are eliminated without negotiation.",
          ),
          s(" All five elements fit on two pages. A brief longer than two pages is obscuring imprecise requirements."),
        ],
      ],
      examples: [
        {
          title: "Legal function — two-page brief that works",
          body: "Job: 'Help legal operations managers identify which NDA clauses deviate from our standard template before attorney review.' Data: '3,000 NDAs per year, PDF format, stored in SharePoint, accessible via Microsoft Graph API.' Integration: 'Must surface deviations in Microsoft Teams and log to our matter management system via REST API.' Performance: 'Minimum 85% precision on clause deviation identification, validated on 100-NDA sample.' Timeline: 'Production deployment within 10 weeks of contract.' This two-page brief generated seven actionable vendor responses and eliminated twelve vendors who responded to a previous six-page RFP.",
        },
        {
          title: "HR function — data inventory reveals vendor gap",
          body: "An HR team's functional brief included a data inventory that specified candidate data was stored in Greenhouse ATS in a non-standard schema. Two of four vendors responding to the brief contacted the HR team immediately: they had no Greenhouse integration and their data ingestion pipeline could not handle non-standard schemas without a 16-week custom build. The data inventory element of the brief saved both vendors from submitting proposals they could not fulfil and saved the HR team from evaluating proposals built on unachievable assumptions.",
        },
        {
          title: "Finance — minimum threshold eliminates negotiation",
          body: "A CFO's functional brief for AI financial close automation stated: 'Minimum performance: 90% of journal entries processed without human review, on a 200-entry benchmark sample. Vendors who do not meet this threshold in the demonstration will not proceed to pilot.' Three vendors demonstrated. Two scored 87% and 91% respectively. The 87% vendor argued their score would improve in production. The brief's threshold eliminated the negotiation: only the 91% vendor proceeded. The CFO spent zero time mediating a borderline case.",
        },
      ],
    }),
    buildSection({
      number: "2.4",
      title: "Designing the capability demonstration",
      subtitle: "How to structure a 90-minute vendor demonstration that produces comparable, objective signal",
      take: "A vendor demonstration that is not structured produces enthusiasm, not evidence. A structured demonstration with a pre-agreed rubric, a representative sample dataset, and mandatory demonstration elements produces evidence that survives the transition from evaluation team to decision maker.",
      why: "Most AI vendor demonstrations are designed by the vendor to show the product at its best. An evaluation-designed demonstration shows the product at your actual conditions — which is the only condition that matters.",
      paragraphs: [
        [
          s("Four mandatory elements must appear in every AI vendor demonstration. "),
          x(
            "1. Live inference on your sample data (not the vendor's demo data). 2. At least two adversarial inputs: edge cases or known-difficult examples from your actual workflow. 3. How the model exposes uncertainty — confidence scores, abstention rates, or human escalation triggers. 4. How errors are logged and surfaced for review.",
            "Vendors who refuse adversarial inputs are protecting their demo from conditions that will occur daily in production. This refusal is itself a disqualifying signal.",
          ),
          s(" Share the adversarial inputs with vendors 24 hours before the demonstration — they should not be surprises, but they should reveal real performance."),
        ],
        [
          s("Score demonstrations on a rubric agreed by all evaluators before the first vendor presents. "),
          x(
            "A simple rubric: accuracy on sample (40 points), confidence transparency (25 points), error presentation quality (20 points), integration setup time (15 points). Total: 100 points. Minimum to proceed: 70 points.",
            "A pre-agreed rubric prevents the most common AI evaluation failure: the evaluation team changes its criteria after seeing impressive features from the first vendor, making all subsequent evaluations incomparable.",
          ),
          s(" Lock the rubric before the first demonstration. Do not adjust it between vendors."),
        ],
        [
          s("Document the demonstration with a recording and a transcript, not just evaluator notes. "),
          x(
            "AI vendor demonstrations contain technical claims that evaluators cannot verify in real time: 'our model was trained on 50 billion tokens', 'our latency is under 200ms at scale.' Recording the claim creates a reference for contract negotiation — claims made in demonstration can become contractual performance warranties.",
            "Turning demonstration claims into contractual warranties is the most effective negotiating technique available to AI buyers.",
          ),
          s(" Send vendors a written summary of technical claims from the demonstration and ask them to confirm or correct each one before contract negotiation begins."),
        ],
      ],
      examples: [
        {
          title: "Procurement team — rubric prevents vendor halo effect",
          body: "A procurement team evaluated four AI contract analysis vendors. The first vendor had an exceptional sales team and a polished demo. Without a rubric, the team's post-demo discussion anchored on the first vendor. The facilitator introduced the rubric mid-evaluation. Scored objectively, the first vendor scored 67/100 — below the 70-point threshold. The third vendor scored 84/100. The rubric prevented a procurement decision based on sales team performance.",
        },
        {
          title: "Healthcare — adversarial inputs reveal production gap",
          body: "A hospital system included 20 adversarial inputs in a clinical AI demonstration: handwritten notes, non-English patient names, abbreviation-heavy physician shorthand, and ambiguous date formats. Vendor A's model handled 14 of 20 correctly. Vendor B's model handled 19 of 20 correctly. On the vendor's standard demo data, both had appeared to perform at 95%+ accuracy. Adversarial inputs revealed a 35-percentage-point performance gap between vendors under real-world conditions.",
        },
        {
          title: "Financial services — demonstration claim becomes warranty",
          body: "A bank's evaluation team recorded a vendor demonstration in which the vendor stated 'our model processes 10,000 documents per hour at 200ms latency with 99.9% uptime.' The team sent a post-demo summary and asked the vendor to confirm the claims. The vendor confirmed. The bank's legal team incorporated all three metrics as performance warranties in the contract. In year two, documented latency exceeded 200ms consistently. The warranty clause triggered a service credit that recovered 18% of the annual contract value.",
        },
      ],
    }),
    buildSection({
      number: "2.5",
      title: "Vendor scoring and shortlist management",
      subtitle: "How to move from demonstration results to a defensible shortlist without evaluation drift",
      take: "Shortlist management is where AI evaluations most commonly drift: evaluators add criteria after seeing demos, weight factors differently across vendors, or allow a compelling use case to compensate for a structural capability gap. Disciplined shortlist management produces a defensible procurement decision that survives board scrutiny.",
      why: "The procurement decision for a multi-year AI contract will be reviewed by legal, finance, IT security, and often the board. A shortlist built on post-hoc rationale does not survive this scrutiny. A shortlist built on pre-agreed criteria does.",
      paragraphs: [
        [
          s("Three types of shortlist decisions require explicit discipline: elimination, tie-breaking, and deferral. "),
          x(
            "Elimination: a vendor falls below a threshold on a knock-out criterion. This is binary — the vendor is out. Tie-breaking: two vendors score within five points of each other on the rubric. Use a single additional criterion agreed in advance (typically integration depth or reference check outcome) to break the tie. Deferral: a vendor scores well but the category is not the organisation's immediate priority. Document the deferral and revisit in the next procurement cycle.",
            "Treating all three decision types the same — 'we discussed it and chose' — is the source of shortlist decisions that cannot be defended later.",
          ),
          s(" Document the decision type and the criterion applied for every vendor at every stage."),
        ],
        [
          s("Reference checks are Stage 2.5 — between demonstration and pilot commitment. "),
          x(
            "Request two references per shortlisted vendor: one reference from a company similar in size and industry, one reference from a company that went live more than 12 months ago. The second reference reveals post-sale support quality and long-term performance, which the sales team cannot influence.",
            "References provided entirely by the vendor are curated. If possible, ask peers in your network who are customers of the vendor — their candour will exceed any vendor-provided reference.",
          ),
          s(" Structured reference questions (what took longer, what underperformed, what term would you renegotiate) produce more signal than open-ended reference calls."),
        ],
        [
          s("Present the shortlist to stakeholders with a structured justification document, not a recommendation memo. "),
          x(
            "The justification document has four sections: the evaluation criteria and rubric, each vendor's score on each criterion, the elimination rationale for vendors not shortlisted, and the recommended next step (pilot with vendor X). The document invites challenge — it does not present a pre-determined conclusion.",
            "Evaluation documents that present a conclusion rather than evidence invite stakeholders to challenge the conclusion rather than engage with the evidence. Present evidence first.",
          ),
          s(" A justification document that can be challenged on its evidence is a stronger procurement instrument than a recommendation memo that cannot."),
        ],
      ],
      examples: [
        {
          title: "Legal team — elimination documentation prevents re-opening",
          body: "A legal operations team eliminated a vendor from an AI contract review evaluation because it lacked SOC 2 Type II certification — a knock-out criterion. Three weeks later, the vendor's sales team contacted the CEO and claimed they were 'close to certification.' The CEO asked the evaluation team to reconsider. The evaluation team produced the elimination documentation showing SOC 2 as a pre-agreed knock-out criterion. The CEO declined to override a documented criterion. The vendor was not re-instated.",
        },
        {
          title: "Retailer — 12-month reference reveals support gap",
          body: "A retailer's evaluation team spoke with references provided by an AI inventory forecasting vendor. All three references were enthusiastic. The team also identified a fourth reference — a peer contact at a similar retailer — who had been using the vendor for 14 months. The peer contact reported that customer success manager turnover meant their account had four different CSMs in 14 months, and support response time had degraded from 4 hours to 3 business days. This signal changed the pilot commitment terms: the retailer required a dedicated CSM as a contract term.",
        },
        {
          title: "Professional services — justification document survives board challenge",
          body: "A professional services firm's board asked why a well-known AI vendor had been eliminated from the evaluation. The evaluation team produced the justification document: the vendor had scored 64/100 in the demonstration (below the 70-point threshold) and the reference from a similar firm reported a 7-month implementation delay. The board reviewed the document and confirmed the elimination. Without the document, the conversation would have been a negotiation about brand preference.",
        },
      ],
    }),
    buildSection({
      number: "2.6",
      title: "Pilot commitment terms",
      subtitle: "What to include in a pilot agreement before full contract negotiation",
      take: "A pilot commitment is a short-form agreement — typically 3–5 pages — that defines pilot scope, success criteria, timeline, data access, and the go/no-go decision process. It is signed before full contract negotiation and protects both parties from a major commitment before value is demonstrated.",
      why: "Pilot commitments prevent the most costly AI procurement failure pattern: a full contract signed on demo enthusiasm, a failed implementation, and a contract dispute over a technology that never worked in the buyer's environment. The pilot is the risk control that makes full contract negotiation evidence-based.",
      paragraphs: [
        [
          s("The five essential elements of a pilot agreement. "),
          x(
            "1. Scope: the single use case, team, and data set in scope. No scope expansion during the pilot. 2. Success criteria: three to five specific, measurable metrics with minimum thresholds. 3. Timeline: fixed start and end date. 4. Data access: what data the vendor can access, retain, and use for model training during the pilot. 5. Go/no-go: who makes the go/no-go decision, by what date, using what evidence.",
            "A pilot agreement without a data access clause allows the vendor to use your data to train their model — which they will use for all future customers. This is a commercial and privacy risk that requires explicit restriction.",
          ),
          s(" The data access clause is the most frequently missed and most commercially important element of a pilot agreement."),
        ],
        [
          s("Pilot success criteria must be specific, measurable, and agreed before the pilot begins. "),
          x(
            "Weak success criterion: 'improve team efficiency.' Strong success criterion: 'reduce average contract review time from 4.2 hours to below 2.5 hours, measured across 100 contracts reviewed during the pilot period.' The difference is the difference between a vendor claiming success and a buyer having evidence of success.",
            "Vendors sometimes propose vague success criteria to give themselves room to claim success regardless of outcome. The procurement lead must insist on numerical thresholds before signing.",
          ),
          s(" If the vendor cannot agree specific success criteria before the pilot, they do not believe their product will meet them."),
        ],
        [
          s("The go/no-go process must be owned by the business leader, not the IT team or the vendor. "),
          x(
            "Go/no-go decisions that rest with IT teams can stall because technical evaluation takes longer than business outcome measurement. Go/no-go decisions that involve the vendor create a conflict of interest. The business leader with budget authority must own the go/no-go decision using the pre-agreed success criteria as the standard.",
            "The go/no-go decision is a business decision: did the AI deliver the business outcome required? This is not a technical question and should not have a technical owner.",
          ),
          s(" Schedule the go/no-go decision meeting before the pilot begins, not at the end of the pilot period."),
        ],
      ],
      examples: [
        {
          title: "Data access clause catches model training risk",
          body: "A law firm's pilot agreement with an AI legal research vendor included a data access clause: 'Vendor may access client matter data solely for the purpose of delivering the pilot service. Vendor shall not use pilot data to train, fine-tune, or improve any model without written consent.' The vendor's standard pilot agreement had no such restriction. The clause addition was non-negotiable for the firm. The vendor accepted. Three months later, the vendor's terms of service update revealed they had begun using pilot customer data for model training — a practice the law firm's clause explicitly prevented.",
        },
        {
          title: "Success criteria precision prevents vendor dispute",
          body: "A retailer's AI demand forecasting pilot agreement specified: 'Success requires forecast accuracy improvement of at least 15 percentage points versus the baseline forecast on a 90-day retrospective test, measured by Mean Absolute Percentage Error (MAPE).' At pilot end, vendor MAPE improvement was 12 percentage points. The vendor argued the pilot was a success because 'accuracy improved.' The buyer pointed to the 15-point threshold in the signed agreement. The go/no-go was no-go. The vendor had no contractual basis to dispute. The retailer was not locked into a full contract for a product that underdelivered.",
        },
        {
          title: "Go/no-go ownership clarity",
          body: "A financial services firm's AI pilot committee included the CFO (budget owner), head of operations (user), and CTO (integration). The pilot agreement specified the CFO as the go/no-go decision owner. At pilot end, the CTO and head of operations disagreed: CTO said integration quality was insufficient; head of operations said productivity improvement was transformative. The CFO reviewed the pre-agreed success criteria — productivity threshold met, integration timeline met — and made a go decision. The pre-agreed ownership and criteria resolved a committee disagreement in 30 minutes.",
        },
      ],
    }),
    buildSection({
      number: "2.7",
      title: "Common RFP process mistakes to avoid",
      subtitle: "The seven failure modes that make AI RFPs expensive, slow, and unconvincing",
      take: "Seven mistakes account for 80% of failed AI RFP processes: too many vendors on the longlist, written-response-only evaluation, no performance threshold, vendor-designed demonstrations, unstructured reference calls, committee-owned go/no-go, and missing data access terms. Avoiding these mistakes compresses evaluation time and improves procurement quality simultaneously.",
      why: "AI RFP failures are expensive in two directions: the cost of a bad selection, and the cost of a process so burdensome that the best vendors self-select out. A streamlined, rigorous process attracts better vendors and produces better decisions.",
      paragraphs: [
        [
          s("Mistake 1: too many vendors on the longlist. "),
          x(
            "A longlist of more than eight vendors for any AI use case is a sign that functional mapping was not completed. A longlist of eight requires eight rounds of Stage 1 evaluation, eight reference calls, and eight risk assessments. The marginal information value of vendor eight versus vendor six is near zero. Limit longlists to six through functional mapping before RFP issuance.",
            "Every additional vendor on the longlist costs approximately 12 hours of evaluation team time. A 15-vendor longlist versus a 6-vendor longlist costs 108 additional hours for marginal evaluation value.",
          ),
          s(" Functional mapping before RFP issuance is the only reliable method for longlist compression."),
        ],
        [
          s("Mistakes 2–4: written-only evaluation, no threshold, vendor-designed demos. "),
          x(
            "Written-only evaluation: eliminates the only source of true capability signal. No threshold: converts evaluation from a gate into an opinion. Vendor-designed demos: transfers evaluation control to the entity with the highest incentive to obscure weaknesses.",
            "These three mistakes together produce an evaluation that is expensive, slow, and produces a selection that is no better than chance on technical performance.",
          ),
          s(" Address all three by designing the demonstration format and rubric before the first vendor contact."),
        ],
        [
          s("Mistakes 5–7: unstructured references, committee go/no-go, missing data access terms. "),
          x(
            "Unstructured references: convert a due diligence step into a testimonial. Committee go/no-go: produces delays, conflicts, and decisions that satisfy no one. Missing data access terms: exposes your proprietary data to vendor model training programmes that compete with your interests.",
            "Each mistake has a simple fix: structured reference questions, single-owner go/no-go, and a data access clause in the pilot agreement. None requires legal expertise or additional budget.",
          ),
          s(" All seven mistakes have documented fixes. Running the same broken RFP process a second time is a leadership decision, not a process limitation."),
        ],
      ],
      examples: [
        {
          title: "Technology company — longlist discipline saves 200 hours",
          body: "A technology company's procurement team initially assembled a 22-vendor longlist for AI code review tools. The functional mapping exercise reduced this to 6 vendors across two subcategories (security-focused and productivity-focused) before any vendor contact. The evaluation team saved an estimated 192 hours of Stage 1 review time. The final selection was completed in 9 weeks versus the 22-week timeline projected for the 22-vendor longlist.",
        },
        {
          title: "HR platform — written-only evaluation fails",
          body: "An HR platform vendor received top marks on a written-only AI evaluation because their RFP response was the most detailed and professionally formatted. During a post-purchase demonstration — requested after contract signature — the HR team discovered the vendor's AI interview scoring tool had never been validated against their applicant tracking system. Integration required a 6-month custom build. The written-only evaluation had awarded 40 points out of 40 for 'integration readiness.' A live demonstration would have revealed the integration gap before contract.",
        },
        {
          title: "Pharmaceutical — data access clause commercial value",
          body: "A pharmaceutical company's pilot agreement data access clause restricted the AI vendor from using clinical trial data for model training. After the pilot converted to a full contract, the vendor's next product release included a 'Clinical Trial Analysis' feature priced at $150,000 per year. The pharmaceutical company's lawyers reviewed the vendor's training data disclosure and found the feature was built partially on data from customer pilots. The pharmaceutical company's data access clause meant their data was excluded — and they had legal standing to negotiate a commercial credit for the category's development, which they had involuntarily funded.",
        },
      ],
    }),
    buildSection({
      number: "2.8",
      title: "BL decision lens: your AI RFP calendar",
      subtitle: "How to design a 12-week AI RFP process that produces a signed pilot agreement and a vendor on contract",
      take: "A well-run AI RFP produces a signed pilot agreement in 12 weeks from functional brief to pilot start. This timeline is achievable with a dedicated evaluation lead, a pre-agreed rubric, and demonstration requirements communicated in the brief. The calendar is the project management artefact that keeps the process on track.",
      why: "Business leaders who do not set an explicit RFP calendar allow the process to expand to fill available time — typically doubling the intended timeline. A 12-week calendar with stage-gate decision points prevents expansion and maintains vendor engagement quality.",
      paragraphs: [
        [
          s("The 12-week AI RFP calendar. "),
          x(
            "Weeks 1–2: functional brief writing and internal alignment. Weeks 3–4: vendor longlist identification and brief distribution. Weeks 5–6: Stage 1 written response review and shortlist to 3–4 vendors. Weeks 7–8: Stage 2 demonstrations. Week 9: structured reference calls. Week 10: shortlist to 1–2 vendors. Weeks 11–12: pilot agreement negotiation and signature.",
            "The calendar has five internal decision gates: brief sign-off (Week 2), longlist approval (Week 4), demonstration shortlist (Week 6), final shortlist (Week 10), and pilot agreement approval (Week 12). Each gate requires a named decision owner and a decision-by date.",
          ),
          s(" Assign a single evaluation lead who owns the calendar — not a committee. Committee ownership is the most common cause of timeline expansion."),
        ],
        [
          s("Communicate the calendar to all shortlisted vendors in the Stage 1 brief. "),
          x(
            "Vendors who know the evaluation timeline can resource their response appropriately. Vendors who do not know the timeline will ask repeatedly — adding evaluation team overhead — or will assume the evaluation is low-priority and deprioritise their own response quality.",
            "A communicated timeline also creates a commitment device: vendors who agree to the calendar and then miss demonstration scheduling create their own disqualification.",
          ),
          s(" Include the evaluation calendar as an appendix to the functional brief. Make it non-negotiable."),
        ],
        [
          s("After pilot agreement signature, schedule the full contract negotiation kickoff within two weeks. "),
          x(
            "The momentum of a successful pilot agreement signature is the best environment for contract negotiation. Vendors are motivated to close. Buyers have evidence. Legal teams have a documented performance record to anchor warranty terms. A two-week gap between pilot signature and contract kickoff maintains this momentum.",
            "Contract negotiations that begin six months after a pilot agreement signature lose the momentum advantage and often require re-establishing context that was clear at pilot agreement time.",
          ),
          s(" Set the contract negotiation kickoff date at the same time you set the pilot start date — do not let it float."),
        ],
      ],
      examples: [
        {
          title: "12-week AI RFP calendar — one-page format",
          body: "Week 1–2: Functional brief (owner: procurement lead). Week 3–4: Vendor brief (owner: procurement lead, distributed to 6 vendors). Week 5–6: Stage 1 review, shortlist to 3 (owner: evaluation committee, decision by: Day 42). Week 7–8: Demonstrations (owner: evaluation lead, rubric locked). Week 9: References (2 per vendor, structured questions). Week 10: Shortlist to 1 (owner: budget holder, decision by: Day 70). Week 11–12: Pilot agreement (owner: legal + procurement, signed by: Day 84). This calendar lives in a shared project management tool with all decision dates visible to the evaluation committee.",
        },
        {
          title: "Software company — calendar communication quality impact",
          body: "A software company shared its 12-week evaluation calendar with all six shortlisted vendors. Three vendors assigned dedicated solution engineers to the evaluation — the timeline signalled a serious buyer. Three vendors assigned their standard sales team. The demonstration quality difference between the two groups was material: solution engineer-supported demos showed live environment integrations; standard sales demos showed slide decks. The calendar communication was the differentiating signal that attracted technical investment from the best vendors.",
        },
        {
          title: "Retailer — contract kickoff timing",
          body: "A retailer completed a successful AI pilot and signed the pilot agreement in Week 12. They delayed contract negotiation kickoff for four months while awaiting a budget cycle. By the time negotiations began, the vendor had signed three new enterprise customers and the contract terms had shifted. The implementation team that conducted the pilot had been redeployed. The retailer renegotiated from a weaker position and ultimately paid 23% more than the pilot pricing implied. A two-week contract negotiation kickoff would have locked pilot-phase commercial terms.",
        },
      ],
    }),
  ],
  quiz: [
    {
      q: "Why does a standard feature checklist fail as the primary AI vendor evaluation tool?",
      options: [
        "Feature checklists are too expensive to produce and maintain",
        "AI vendors refuse to respond to feature-based RFPs",
        "AI capabilities are probabilistic and context-dependent — two vendors checking the same feature may perform 30 percentage points apart in your environment",
        "Feature checklists require ISO certification to be legally valid",
      ],
      correct: 2,
      correctFeedback: "Correct. Feature checklists were designed for deterministic software. AI capabilities depend on data, context, and model architecture — two vendors both checking 'NLP: yes' may deliver fundamentally different performance on your actual use case.",
      wrongFeedback: "The core problem is that 'feature: yes' tells you nothing about performance on your data. AI capabilities are probabilistic — a demonstration on your actual sample is the only reliable evaluation signal.",
    },
    {
      kind: "order",
      q: "Order the three stages of an AI RFP from first to last:",
      items: [
        "Functional brief: vendors respond in writing to a precise requirements document",
        "Capability demonstration: shortlisted vendors demonstrate on your sample data",
        "Pilot commitment: finalist vendor signs a bounded pilot agreement before full contract",
      ],
      prompt: "Drag to arrange in the correct sequence",
      correctFeedback: "Correct. The brief attracts relevant vendors. The demonstration reveals real capability. The pilot agreement de-risks the full contract commitment.",
      wrongFeedback: "The sequence is: written brief → live demonstration → pilot agreement. Each stage uses the investment required to filter vendors who cannot deliver.",
    },
    {
      q: "A vendor demonstrates 94% accuracy on their own demo data but declines to run the demonstration on your sample data. What is the correct interpretation?",
      options: [
        "The vendor's model is confidential and legally restricted from external testing",
        "The vendor is protecting intellectual property that could be stolen in a demonstration",
        "The vendor's performance on your data may differ materially from their demo data performance — declining adversarial input is a disqualifying signal",
        "This is standard practice in the AI vendor market and should be accepted",
      ],
      correct: 2,
      correctFeedback: "Correct. A vendor who declines to demonstrate on your data is either not confident in their performance on real-world conditions or protecting a demo environment optimised for sales rather than operations.",
      wrongFeedback: "A vendor's refusal to demonstrate on your data is a signal that their demo data performance does not predict your environment performance. This is a disqualifying signal, not standard practice.",
    },
    {
      kind: "categorize",
      q: "Categorise these pilot agreement elements as either 'Essential — must include' or 'Optional — nice to have':",
      categories: ["Essential — must include", "Optional — nice to have"],
      items: [
        { text: "Data access restrictions on vendor model training", category: 0 },
        { text: "Specific, measurable success criteria with numerical thresholds", category: 0 },
        { text: "Fixed pilot start and end date", category: 0 },
        { text: "Named go/no-go decision owner", category: 0 },
        { text: "Vendor's implementation team bios", category: 1 },
        { text: "Reference to vendor's product roadmap", category: 1 },
      ],
      correctFeedback: "Correct. Data access restrictions, measurable success criteria, fixed timeline, and named go/no-go owner are essential to protect the buyer and make the pilot evidence-based. Team bios and roadmap references are nice-to-have context.",
      wrongFeedback: "The essential elements are those that protect the buyer from unlimited data use, vague success claims, open-ended timelines, and committee paralysis. Everything else is supplementary.",
    },
    {
      q: "What is the optimal longlist size for an AI vendor RFP, and why?",
      options: [
        "25–30 vendors: maximum market coverage ensures you do not miss the best option",
        "15–20 vendors: analyst coverage typically identifies this many per category",
        "No more than 6 vendors: each additional vendor beyond 6 costs approximately 12 hours of evaluation time for marginal information value",
        "2–3 vendors: competitive tension only requires a small number of options",
      ],
      correct: 2,
      correctFeedback: "Correct. A longlist of no more than 6 vendors — achieved through functional mapping before RFP issuance — produces equivalent outcome quality to a 20-vendor longlist at one-third the evaluation cost.",
      wrongFeedback: "Longlist size should be no more than 6 vendors for any specific use case. Functional mapping before RFP issuance achieves this by eliminating vendors in the wrong category before evaluation begins.",
    },
    {
      q: "Which structured reference question produces the most useful signal for an AI procurement decision?",
      options: [
        "'Would you recommend this vendor to a colleague?'",
        "'What took longer than quoted, what underperformed the demo, and what contract term would you renegotiate today?'",
        "'How would you rate the vendor on a scale of 1 to 10?'",
        "'What are the three best features of the vendor's product?'",
      ],
      correct: 1,
      correctFeedback: "Correct. The three structured questions — what took longer, what underperformed, what would you renegotiate — are specifically designed to surface implementation reality, performance gaps, and contract risks that open-ended or rating questions cannot reveal.",
      wrongFeedback: "Open-ended and rating questions produce advocacy, not intelligence. The three structured questions are designed to reveal implementation reality: timeline gaps, performance gaps, and contract terms that buyers regret.",
    },
  ],
});
