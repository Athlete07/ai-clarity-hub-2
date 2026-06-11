import { buildChapter, buildSection, s, x } from "../concepts-pb4-helpers";

export const chapter04BlRedFlagsAiVendorPitches = buildChapter({
  slug: "bl-red-flags-ai-vendor-pitches",
  number: 4,
  shortTitle: "Red Flags in AI Pitches",
  title: "Red Flags in AI Vendor Pitches",
  readingMinutes: 24,
  summary:
    "AI vendor pitches are among the most sophisticated sales experiences in enterprise technology: they blend genuine innovation with AI hype, credible benchmarks with misleading statistics, and compelling demos with cherry-picked data. Business leaders who can identify the fifteen most common red flags in AI vendor pitches protect their organisations from expensive mistakes and their own reputations from association with failed deployments.",
  keyTakeaway:
    "The most dangerous AI vendor pitches are the most convincing ones. A polished demo, impressive benchmark statistics, and a compelling founder story are not evidence of enterprise readiness. The fifteen red flags in this chapter identify the gap between sales theatre and operational reality — and each flag is actionable before you leave the meeting room.",
  pmCallout:
    "As a business leader: an AI vendor's pitch is designed to maximise your confidence in their technology and urgency toward a contract commitment. Every question you ask that exposes a red flag is a moment where you protect your organisation. Ask the uncomfortable questions while you still have negotiating leverage.",
  sections: [
    buildSection({
      number: "4.1",
      title: "The demo-to-production gap",
      subtitle: "Why AI demos reliably outperform production deployments and how to test for this in the room",
      take: "AI vendor demos are designed to show the model at its best: curated data, optimal prompts, pre-loaded context, and a test environment tuned for the demo scenario. Production deployments face messy data, inconsistent inputs, and real edge cases that the demo never encounters. The demo-to-production gap is the most common source of post-purchase disappointment in AI procurement.",
      why: "Understanding the demo-to-production gap converts a passive demo audience into an active evaluator. The questions in this section should be asked during every AI demo, not after the contract is signed.",
      paragraphs: [
        [
          s("Three questions reveal the demo-to-production gap in real time. "),
          x(
            "'Can you run that demonstration on our sample data right now?' If yes, you are seeing real performance. If no, you are seeing a curated performance. 'What percentage of your customer base has gone live with this specific feature?' If the feature is new or used by fewer than 20% of customers, it is not production-tested. 'What is your median time-to-production-value for a customer similar to us?' If the answer is vague, the vendor does not track this metric — which means they are not managing implementation success.",
            "These three questions cannot be deflected without revealing information. A confident vendor answers all three directly.",
          ),
          s(" Ask all three in sequence during the demonstration, not in a follow-up email where answers can be polished."),
        ],
        [
          s("Demo data is the most reliable proxy for production reality. "),
          x(
            "Vendors who demo on anonymised samples of your actual data are showing you production-relevant performance. Vendors who demo on their own data, a public benchmark dataset, or a synthetic dataset are showing you what they want you to see. The data used in the demo is as important as the performance shown on it.",
            "Ask the vendor to show you the demo dataset before the demo starts. If the data looks nothing like your environment — structured vs. your unstructured, clean vs. your messy — discount the demo performance accordingly.",
          ),
          s(" Require vendors to show you their demo dataset before the demonstration begins. The data quality gap is the performance gap."),
        ],
        [
          s("Post-demo reference architecture is the bridge between demo and production reality. "),
          x(
            "After a demo, ask the vendor to walk through the reference architecture for a deployment equivalent to yours: data pipeline, integration points, latency at scale, and human review workflow. A vendor who can draw this in 20 minutes has thought through production. A vendor who produces a slide with three boxes and arrows is selling a concept, not a deployable system.",
            "Reference architecture conversations are uncomfortable for vendors who have not built them for your use case. That discomfort is information.",
          ),
          s(" Schedule a 30-minute reference architecture conversation with the vendor's solution engineering team after every demo that passes the initial interest threshold."),
        ],
      ],
      examples: [
        {
          title: "Marketing platform — demo data gap",
          body: "A marketing team watched an AI content personalisation demo using beautifully formatted retail product data. Their actual data was exported from a 15-year-old ERP system with inconsistent naming conventions, missing fields, and three different encoding formats. When they provided their sample data for a follow-up demo, the vendor's model accuracy dropped from 91% to 63%. The demo-to-production gap was 28 percentage points and was entirely visible in the data — if the team had asked to see the demo dataset before the first demonstration.",
        },
        {
          title: "Financial services — time-to-production question",
          body: "A bank asked an AI document processing vendor: 'What is your median time-to-production-value for a bank similar in size to us?' The vendor could not answer. When pressed, they acknowledged they did not track time-to-production metrics by customer segment. The bank's operations team estimated from their own experience that their environment would require 9–12 months to prepare for production. The vendor had quoted a 12-week implementation in the demo. The gap between the sales claim and the operational reality was surfaced by a single direct question.",
        },
        {
          title: "Healthcare — reference architecture conversation",
          body: "After an impressive AI clinical documentation demo, a hospital's IT director requested a reference architecture walkthrough with the vendor's solution engineering team. The solution engineer's architecture for a 500-bed hospital — the hospital's size — included a proprietary data ingestion layer that required replacing the hospital's existing data warehouse. This was not mentioned in the demo or the sales materials. The replacement requirement added $800,000 and 14 months to the vendor's quoted implementation — converting a compelling demo into an uneconomic deployment.",
        },
      ],
    }),
    buildSection({
      number: "4.2",
      title: "Benchmark manipulation and statistical red flags",
      subtitle: "How AI vendors misuse benchmarks and statistics, and the questions that expose it",
      take: "AI vendor benchmarks are almost universally presented in the most favourable possible light: cherry-picked tasks, optimal configurations, proprietary evaluation metrics, and comparison against weaker baselines. Business leaders who understand the five most common benchmark manipulation techniques can convert marketing statistics into honest performance data.",
      why: "Accepting AI vendor benchmarks at face value means making procurement decisions based on marketing statistics. Understanding benchmark manipulation allows business leaders to ask the questions that convert vendor claims into defensible data.",
      paragraphs: [
        [
          s("Five benchmark manipulation techniques are used regularly in AI vendor pitches. "),
          x(
            "1. Task cherry-picking: testing only on tasks where the model excels. 2. Baseline gaming: comparing against outdated or weak competitors. 3. Proprietary metrics: using internal accuracy definitions that differ from industry standards. 4. Evaluation set leakage: training the model on data from the evaluation set. 5. Optimal configuration testing: benchmarking with settings unavailable in production.",
            "You do not need to detect all five in every pitch. Asking two questions reliably surfaces the most material manipulations: 'What tasks are excluded from this benchmark?' and 'Who conducted this evaluation — your team or a third party?'",
          ),
          s(" Third-party benchmark reports are dramatically more reliable than vendor-produced benchmark reports. Ask for both and compare."),
        ],
        [
          s("'Best in class' and 'state of the art' are phrases that require immediate clarification. "),
          x(
            "Best in class among which competitors? As of what date? On which tasks? State of the art compared to which baseline? A vendor claiming 'best-in-class accuracy' in October 2024 may be comparing against a model released in 2022 — when three newer, more capable models have been released since their benchmark was run.",
            "AI model performance benchmarks have a shelf life of 3–6 months. A benchmark run more than six months ago is likely stale relative to the current competitive landscape.",
          ),
          s(" Ask for the benchmark date, the competitor versions included, and the task scope. Any benchmark without all three data points cannot be evaluated."),
        ],
        [
          s("The question 'on what percentage of our actual use case does this benchmark apply?' converts a vendor statistic into a relevant signal. "),
          x(
            "A vendor claims 94% accuracy on legal document review. Your legal team reviews NDAs, M&A documents, vendor contracts, and employment agreements — four different document types with different complexity levels. Ask: 'Which of our four document types does this 94% figure apply to?' The answer reveals either a general claim being applied to a specific context, or a specific claim that is directly relevant to your use case.",
            "Relevant accuracy is always lower than headline accuracy. The gap between headline accuracy and relevant accuracy is the real product risk.",
          ),
          s(" For every accuracy claim, ask the vendor to apply the benchmark to your specific document types, decision types, or workflow steps."),
        ],
      ],
      examples: [
        {
          title: "Legal AI — task cherry-picking exposed",
          body: "A law firm received a pitch claiming 97% accuracy for an AI contract review tool. The evaluation team asked: 'What contract clause types are in your benchmark?' The vendor's benchmark included only standard non-compete, liability, and IP assignment clauses — the easiest clause types to identify. The firm's actual review workflow included representations and warranties, material adverse change clauses, and indemnification structures — significantly more complex. The 97% benchmark did not apply to 60% of the firm's actual use case. Use-case-adjusted accuracy was estimated at 78%.",
        },
        {
          title: "Logistics AI — stale benchmark",
          body: "A logistics company evaluated an AI route optimisation vendor whose marketing materials claimed 'best-in-class route efficiency vs. all major competitors.' The evaluation team asked for the benchmark date. The vendor's benchmark was 18 months old and compared against three legacy systems. Two newer entrants to the route optimisation market — including one that was leading on efficiency in analyst reviews — were not included. The vendor's claim was technically true at the benchmark date and materially misleading at the evaluation date. An updated benchmark request revealed the vendor ranked third in efficiency among current-generation systems.",
        },
        {
          title: "Healthcare AI — proprietary metric manipulation",
          body: "An AI diagnostic tool claimed 96% diagnostic agreement with physician consensus. The evaluation team asked for the metric definition. The vendor's 'diagnostic agreement' counted any diagnosis within the same disease category as agreement — so 'Type 2 diabetes' and 'pre-diabetic insulin resistance' counted as an agreement, not a disagreement. Using standard clinical diagnostic accuracy definitions (exact diagnosis match), agreement was 81%. The proprietary metric inflated apparent performance by 15 percentage points. Asking for metric definitions before accepting headline accuracy figures is non-negotiable.",
        },
      ],
    }),
    buildSection({
      number: "4.3",
      title: "Urgency tactics and artificial scarcity",
      subtitle: "How to recognise and neutralise the pressure tactics used to accelerate AI contract commitments",
      take: "AI vendors use urgency tactics more aggressively than traditional software vendors because the market is moving fast and buyers feel FOMO about being left behind. 'Limited pilot spots', 'founding customer pricing', 'our integration team is committed elsewhere next quarter', and 'our competitor is being evaluated by three of your rivals right now' are the most common urgency creation techniques. None of them should accelerate your procurement timeline.",
      why: "An AI contract signed under artificial urgency is a contract signed without complete due diligence. Urgency tactics work because they create fear of missing out — a fear that is almost never validated by events. Every legitimate AI vendor will still be available to sign a contract after a rigorous evaluation process.",
      paragraphs: [
        [
          s("'Founding customer pricing' and 'limited pilot spots' are the most common urgency tactics in AI sales. "),
          x(
            "Founding customer pricing is real when a vendor is genuinely pre-revenue and needs design partners. It is a tactic when a vendor has 200 customers and is offering 'founding customer' pricing to the 201st. Ask: 'How many customers have received founding customer pricing, and what does your standard pricing look like?' The gap between the answers reveals whether the offer is genuine.",
            "Legitimate founding customer offers come with design partner obligations: regular feedback calls, case study participation, and co-development commitments. Urgency pricing without obligations is a discount with a deadline — a standard sales tactic.",
          ),
          s(" Require vendors to disclose the number of founding customer agreements already signed before treating the offer as scarce."),
        ],
        [
          s("'Your competitor is evaluating us' is the most psychologically effective urgency tactic and the least informative. "),
          x(
            "It may be true. It is always irrelevant. Your competitor's AI procurement timeline should not drive your procurement timeline. If they evaluate faster and make a better procurement decision, you lose a round. If they evaluate faster and make a worse decision, you win by doing your diligence.",
            "The appropriate response to 'your competitor is evaluating us' is: 'We make AI procurement decisions on our timeline and our criteria. If your technology is the right fit, we will conclude our evaluation and sign a contract. If speed is a sales criterion for you, we are not the right customer at this time.'",
          ),
          s(" State your evaluation timeline at the first meeting and hold it. Vendors who accept your timeline are serious about your business. Vendors who cannot accept your timeline are optimising for speed, not fit."),
        ],
        [
          s("'Price will increase after Q4' is a legitimate commercial constraint and an illegitimate urgency tactic depending on context. "),
          x(
            "Legitimate: a vendor announcing a pricing model change effective January 1 six months in advance. This is a commercial constraint that buyers can choose to act on or not. Illegitimate: a vendor claiming prices increase at the end of the current quarter with no prior notice, applied to every prospect regardless of evaluation stage.",
            "Counter-tactic: ask for the price increase in writing, ask when it was last communicated to prospects in the evaluation stage, and ask for the new price schedule. A vendor who cannot produce all three has invented the urgency.",
          ),
          s(" Request any commercial urgency in writing, including the date the price or availability constraint was established. Written urgency is real urgency. Verbal urgency is a sales technique."),
        ],
      ],
      examples: [
        {
          title: "Retailer — founding customer pricing exposure",
          body: "A retailer was offered 'founding customer pricing' of $240,000 per year by an AI inventory vendor who claimed only three founding customer slots remained. The retailer's procurement team asked: 'How many founding customer agreements have you already signed?' The vendor disclosed 47. 'What is your standard enterprise pricing?' The vendor disclosed $320,000 per year. The retailer correctly identified the offer as a 25% discount with a deadline — a standard commercial offer, not a scarce founding opportunity. They completed the full evaluation process, which took six additional weeks, and signed at $240,000 — the same price offered under urgency. No slots had closed.",
        },
        {
          title: "Financial services — competitor urgency neutralised",
          body: "A bank's AI evaluation team was told by a vendor that 'two of your top three competitors are in advanced contract discussions with us.' The bank's CTO responded: 'We will complete our evaluation process. If your technology fits our requirements, we will proceed. Our timeline is 12 weeks from today.' The vendor accepted. The bank completed its evaluation, selected a different vendor, and later learned that one competitor had signed with the urgency vendor and experienced a 14-month implementation delay. The competitor urgency claim was used to pressure a decision — not to provide meaningful market information.",
        },
        {
          title: "Professional services — price urgency in writing",
          body: "A consulting firm was told by an AI proposal generation vendor that 'our pricing increases by 30% on December 1 and we only have two weeks left.' The firm asked for the price increase in writing and the date on which the December 1 deadline was communicated to prospects. The vendor sent an email confirming the deadline — but the date it was 'communicated to prospects' was the same day as the urgency pitch. The firm treated the deadline as a sales-created urgency, completed its full evaluation over eight additional weeks, and signed at the 'post-increase' price — which was identical to the 'pre-increase' price the vendor had originally quoted.",
        },
      ],
    }),
    buildSection({
      number: "4.4",
      title: "Integration claims and 'works with everything' red flags",
      subtitle: "How vendors overstate integration readiness and how to test true integration depth",
      take: "The phrase 'we integrate with everything' is a red flag, not a feature. Every integration requires engineering work on both sides. Vendors who claim seamless integration with your core systems before seeing your environment are making promises they have not validated. True integration readiness requires a reference customer using the same integration stack in production — not a slide showing connector logos.",
      why: "Integration failures are the most common cause of AI implementation cost overruns. A vendor who overstates integration readiness in a pitch creates implementation scope that was not in the business case — and by the time the gap is discovered, the contract is signed.",
      paragraphs: [
        [
          s("Three questions test integration claims during the pitch. "),
          x(
            "'Do you have a reference customer using our specific version of [core system] in production today?' 'What is the typical integration engineering effort for our stack — in person-weeks?' 'What does your integration architecture look like for a deployment equivalent to ours?' A vendor who can answer all three specifically — not generically — has built the integration. A vendor who deflects to a slide showing connector logos has not.",
            "Connector logos and API documentation are evidence of integration possibility, not integration reality. The distinction is 200–800 engineering hours.",
          ),
          s(" Require a live integration demonstration between the vendor's tool and your test environment before the shortlist stage, not after contract signature."),
        ],
        [
          s("'Native integration' has no standardised definition in AI vendor marketing. "),
          x(
            "A vendor may call a REST API connection a 'native integration.' Another vendor may reserve the term for a bidirectional, real-time sync with schema mapping and error handling. Ask: 'What does native integration mean for your Salesforce connector specifically?' and then ask: 'What does a customer need to build on their side to complete this integration?' The second question reveals the hidden integration work that 'native' does not include.",
            "Hidden integration work — the configuration, mapping, and error handling that the buyer's team must complete — is consistently the largest source of AI implementation cost overruns.",
          ),
          s(" Ask vendors to define their integration depth in engineering hours, not product marketing terms."),
        ],
        [
          s("Roadmap integrations presented in pitches as current capabilities are the most material misrepresentation in AI sales. "),
          x(
            "Vendors often include planned integrations in product demos to avoid losing on a missing capability. The planned integration may be on the roadmap, or it may be added to the roadmap when the prospect asks for it. Ask: 'Is this integration in production for paying customers today, or is it on your roadmap?' followed by 'If it is on the roadmap, what is your commitment to deliver it and what happens to our contract if it is delayed?'",
            "A contract signed based on a roadmap integration that is not delivered is a contract dispute. A contract with a contingent clause tied to the roadmap delivery is a protected procurement.",
          ),
          s(" Never allow roadmap capabilities to influence the procurement decision unless they are contractually committed with delivery dates and remedies for non-delivery."),
        ],
      ],
      examples: [
        {
          title: "ERP integration — connector logo vs. reality",
          body: "A manufacturer evaluated an AI demand forecasting tool that showed a SAP S/4HANA logo on its integration slide. The evaluation team asked: 'Do you have a reference customer using SAP S/4HANA version 2022 in production?' The vendor disclosed that their SAP integration was certified for S/4HANA version 2019 and had one customer using version 2021 — but no production deployments on version 2022. The manufacturer was on version 2022. The certified integration required revalidation on their version — a 4-month engineering engagement not included in the vendor's quoted implementation timeline.",
        },
        {
          title: "Healthcare — roadmap integration in contract",
          body: "A hospital evaluated an AI administrative documentation tool. The tool could not integrate with Epic EHR in the current version — but the vendor's roadmap showed Epic integration in Q3. The hospital's evaluation team required the Epic integration as a deployment condition. The vendor proposed a conditional contract clause: 'If Epic integration is not delivered in general availability by Q3, customer may terminate without penalty and receive a prorated refund.' The vendor accepted. The Epic integration was delivered in Q4 — one quarter late. The hospital invoked the clause, received a 25% refund of the annual contract value, and used the refund to fund the additional three months of manual workflow required before the integration was complete.",
        },
        {
          title: "Financial services — integration engineering hours",
          body: "A bank's IT team asked an AI fraud detection vendor to quantify integration engineering effort for their specific stack: Salesforce CRM, Oracle core banking, and an in-house transaction monitoring system. The vendor estimated 120 person-hours. The bank's enterprise architecture team reviewed the vendor's API documentation and estimated 480 person-hours — four times the vendor's estimate — based on the in-house transaction monitoring system's non-standard schema. The hidden integration work would have surfaced as a cost overrun 90 days into implementation. The upfront question prevented a $180,000 budget gap.",
        },
      ],
    }),
    buildSection({
      number: "4.5",
      title: "Customer success and support red flags",
      subtitle: "How to evaluate whether a vendor's post-sale support matches their pre-sale promises",
      take: "AI vendors invest heavily in pre-sale resources and consistently under-invest in post-sale support. The customer success team that does not exist yet will be created to service your contract — a common pattern in growth-stage AI companies. Evaluating post-sale support before signing is the most effective way to convert sales promises into contractual commitments.",
      why: "AI implementations require more post-sale support than traditional software because the system adapts to data, requires regular performance review, and generates novel failure modes that need rapid response. A vendor with a weak post-sale support structure will absorb more of your internal team's time than the productivity gain the AI delivers.",
      paragraphs: [
        [
          s("Five post-sale support questions should be asked before signing any AI contract. "),
          x(
            "1. Who is our dedicated customer success manager? 2. What is the CSM-to-customer ratio on your enterprise team? 3. What is your median time to first response for support tickets — and do you track P1 (system down) separately from P2 (performance degraded)? 4. How do you handle model performance degradation reports — what is the escalation path? 5. What is your customer success team's churn rate over the past 12 months?",
            "A CSM-to-customer ratio above 1:25 is a support risk signal for AI tools requiring active monitoring. A CSM team churn rate above 30% means your success manager will likely change multiple times in a two-year contract — destroying institutional knowledge of your deployment.",
          ),
          s(" Request the CSM assignment before contract signature, not after. A vendor who cannot name your CSM does not yet have one."),
        ],
        [
          s("'Enterprise success plan' is a commitment that requires specification. "),
          x(
            "Vendors offer 'enterprise success plans' that range from quarterly check-in calls to embedded implementation engineers. Ask for the success plan deliverables in writing: who does what, at what frequency, and with what escalation path. A success plan that cannot be specified in writing does not exist as a plan — it exists as a sales commitment.",
            "The most common post-sale disappointment is a vendor who committed an 'enterprise success team' in sales and delivered a shared support portal in deployment. The difference between these two is a contract clause, not a relationship.",
          ),
          s(" Require the success plan to be attached as a schedule to the contract, not referenced as a future document to be provided after signature."),
        ],
        [
          s("Customer success team tenure is a post-sale support quality proxy. "),
          x(
            "Ask for the average tenure of the vendor's enterprise customer success team. A team with average tenure of 8 months in a 2-year product means every CSM learns the product on a live customer deployment — your deployment. A team with average tenure of 24 months has institutional product knowledge that benefits your implementation.",
            "AI products are complex enough that CSM quality depends heavily on product knowledge depth. New hires cannot provide the same implementation guidance that 24-month veterans provide. Tenure is a quality proxy for AI CSMs that does not apply equally to traditional software CSMs.",
          ),
          s(" Ask for the tenure distribution of the enterprise success team — not just the average. High variance indicates a team in transition, which is a deployment risk."),
        ],
      ],
      examples: [
        {
          title: "SaaS company — CSM churn risk",
          body: "A SaaS company signed a 2-year AI analytics contract. During the sales process, the vendor's chief customer officer presented their customer success philosophy. Post-signature, the SaaS company was assigned a CSM. The CSM left after three months. A replacement was assigned and left after four months. A third CSM was assigned and left after two months. By month nine, the company had three different CSMs with no institutional knowledge of their deployment. A CSM churn rate question during due diligence would have revealed the vendor's 40% annual CS team churn — a risk signal that a succession plan clause in the contract would have mitigated.",
        },
        {
          title: "Legal firm — success plan specification",
          body: "A law firm required the vendor's 'enterprise success plan' to be attached as a contract schedule before signature. The schedule revealed: quarterly business reviews (QBR), a dedicated CSM with less than 1:20 CSM-to-customer ratio, monthly model performance reports, and a 4-hour P1 response SLA. When the firm compared the schedule against three other shortlisted vendors' success plans, the differences were material: one vendor's plan had annual QBRs and no model performance reports. The schedule made success plan comparison concrete and comparable — which a verbal pitch could not achieve.",
        },
        {
          title: "Retailer — named CSM before signature",
          body: "A retailer's procurement lead required the vendor to name and introduce the dedicated CSM before contract signature. The vendor's first response was that the CSM would be assigned after contract execution. The procurement lead refused, citing the principle that a vendor who cannot name a CSM has not yet hired one. After two weeks, the vendor introduced a CSM with 18 months of tenure and experience with three similar retail deployments. The pre-signature CSM introduction converted an abstract success plan into a credible deployment commitment.",
        },
      ],
    }),
    buildSection({
      number: "4.6",
      title: "IP ownership and data use red flags",
      subtitle: "How AI vendors claim ownership of your data, your outputs, and your improvements",
      take: "AI vendor contracts regularly contain clauses that give the vendor broad rights to your data, your AI-generated outputs, and the improvements your usage generates for their model. Business leaders who do not read these clauses before signature may discover their proprietary data is training a competitor's product and their unique AI outputs are owned by the vendor.",
      why: "IP and data ownership disputes are the fastest-growing category of enterprise AI contract disputes. The risks are embedded in standard terms that most buyers accept without reading. Understanding the three most common IP risk patterns allows business leaders to negotiate before signing — not litigate after.",
      paragraphs: [
        [
          s("Three IP risk patterns appear in most AI vendor standard terms. "),
          x(
            "1. Training data opt-out: the vendor's default is to use your data to improve their model — you must opt out, not opt in. 2. Output ownership ambiguity: the contract does not specify whether AI-generated outputs (reports, analyses, recommendations) are owned by you or the vendor. 3. Improvement licence: your usage of the AI 'improves' the model; the vendor claims ownership of those improvements, which are trained on your proprietary data.",
            "All three risks are resolved by specific contract language. None requires legal expertise to identify — they require reading the terms before signing.",
          ),
          s(" Require the vendor to provide a data use and IP ownership summary — a one-page plain English description of what they own, what you own, and what they can do with your data."),
        ],
        [
          s("'We do not use your data to train our models' requires contractual confirmation, not verbal assurance. "),
          x(
            "Many AI vendors state this verbally and in marketing materials. The legal standard is the contract. If the contract's data use section contradicts the verbal assurance, the contract governs. Ask the vendor to point you to the specific contract clause that prohibits training data use — and if it is absent, require it to be added before signature.",
            "Verbal assurances about data use that are contradicted by contract terms have exactly zero legal value. The contract is the only representation that matters.",
          ),
          s(" If the vendor's contract does not match their verbal data use commitments, the discrepancy is a red flag — either the vendor's legal team and sales team are misaligned, or the verbal commitment is a sales tactic without legal backing."),
        ],
        [
          s("Output ownership is particularly important for AI used in competitive intelligence, product development, or client deliverables. "),
          x(
            "If your legal team uses AI to produce a contract analysis that is unique to a client matter, and the vendor's terms claim ownership of 'outputs generated using the service', the vendor may claim ownership of client-privileged work product. This is not theoretical: several major AI vendors' terms include output licence claims that conflict with professional privilege.",
            "Outputs ownership is a commercial, legal, and competitive issue. A vendor who owns your AI-generated outputs owns a piece of your intellectual production — which, in professional services, legal, or R&D contexts, is a material commercial risk.",
          ),
          s(" Require the contract to state: 'All outputs generated by the service using Customer data are owned exclusively by Customer.'"),
        ],
      ],
      examples: [
        {
          title: "Law firm — training data opt-out missed",
          body: "A law firm deployed an AI document review tool under the vendor's standard terms without legal review. Eighteen months later, the firm discovered that the standard terms included a training data clause: 'Customer grants Vendor a non-exclusive licence to use Customer Data to improve Vendor's AI Services.' The firm had processed 40,000 client documents under this clause. The firm's professional responsibility partner identified the clause as a potential breach of client confidentiality obligations. The firm terminated the contract and spent $180,000 on a legal review to assess client notification obligations. The training data opt-out clause had been available as a contract addendum — the firm simply had not requested it.",
        },
        {
          title: "Consulting firm — output ownership dispute",
          body: "A consulting firm used an AI research synthesis tool to produce client strategy reports. The vendor's terms included: 'Vendor grants Customer a licence to use Outputs for Customer's internal business purposes.' The firm's general counsel identified 'internal business purposes' as insufficient for a consulting firm whose business is delivering outputs to clients. The terms were renegotiated before contract signature to: 'Customer owns all Outputs generated using Customer Data and may use Outputs for any purpose including delivery to Customer's clients.' The renegotiation took two weeks. The dispute that would have followed a client delivery claim would have taken two years.",
        },
        {
          title: "Pharmaceutical — improvement licence commercial impact",
          body: "A pharmaceutical company evaluated an AI drug discovery tool. The vendor's terms included an improvement licence: 'Improvements to the AI Service resulting from Customer's use are owned by Vendor.' The company's R&D legal team determined that drug candidate profiles generated using the AI — and the model improvements derived from those profiles — represented proprietary research assets. The vendor was unwilling to remove the improvement licence clause. The pharmaceutical company declined to proceed: the value of the research assets potentially transferred under the clause exceeded the contract value by two orders of magnitude.",
        },
      ],
    }),
    buildSection({
      number: "4.7",
      title: "The ten-question pitch audit",
      subtitle: "A structured set of questions that reveal red flags in any AI vendor pitch within 30 minutes",
      take: "Ten questions, asked in every AI vendor pitch, systematically surface the most common red flags without requiring technical expertise. The questions are designed to be asked by business leaders — not by engineers — and to reveal the gap between sales claims and operational reality in real time.",
      why: "Business leaders who wait for their technical team to identify red flags after a pitch miss the moment when questions have the most impact: during the pitch, while the vendor is in sales mode and the most revealing responses are most likely. The ten-question pitch audit is a business leadership skill, not a technical one.",
      paragraphs: [
        [
          s("Questions 1–4 address performance reality. "),
          x(
            "1. 'Can you run that demo on our sample data right now?' 2. 'What was the date of the benchmark you just cited and who conducted it?' 3. 'What is your median time from contract signature to first customer value for a company similar to ours?' 4. 'What percentage of your customers who started a pilot with you went on to full deployment?' Customers who did not convert from pilot to deployment are the most informative cohort the vendor will not show you voluntarily.",
            "Question 4 — pilot-to-deployment conversion — is the most diagnostic single question available to a business leader. A conversion rate below 70% indicates systematic pilot-to-production gaps. A conversion rate above 90% indicates the vendor can deliver on their demo.",
          ),
          s(" Ask questions 1–4 in sequence without allowing the vendor to move on until each has a specific answer."),
        ],
        [
          s("Questions 5–7 address integration and support reality. "),
          x(
            "5. 'Name a reference customer using our specific core systems in production today.' 6. 'Who will be our dedicated customer success manager and how many customers do they currently manage?' 7. 'What is your standard contract liability cap and have you ever exceeded it?' Questions 5 and 6 test operational readiness. Question 7 tests how the vendor thinks about their own failure risk — vendors who have never thought about exceeding their liability cap have never seriously contemplated their own failure modes.",
            "Question 7 response patterns are revealing: 'We have never had a liability claim' means either they are new, they are lucky, or they have not yet had customers large enough to claim. None of these is reassuring.",
          ),
          s(" Write the answers to questions 5–7 in the meeting. Vendors who provide specific answers in the room are more reliable than vendors who 'follow up by email.'"),
        ],
        [
          s("Questions 8–10 address commercial and IP reality. "),
          x(
            "8. 'Does your standard contract allow you to use our data to train your models?' 9. 'Who owns the AI-generated outputs — us or you?' 10. 'If your company is acquired or shuts down in the next 24 months, what happens to our data and our contract?' Questions 8–10 move from technical to commercial to existential. Each addresses a risk category that the sales team will not raise voluntarily.",
            "Question 10 is the question sales teams least expect: it forces them to think about company continuity risk, which they prefer to avoid. A vendor who has a prepared, specific answer to question 10 has thought seriously about their obligations to customers. A vendor who is surprised by the question has not.",
          ),
          s(" The ten questions take 30 minutes. The insight they produce is worth 60 days of post-contract discovery."),
        ],
      ],
      examples: [
        {
          title: "Retailer — pilot-to-deployment conversion question",
          body: "A retailer's procurement lead asked an AI demand forecasting vendor: 'What percentage of pilot customers converted to full deployment?' The vendor's head of sales initially deflected: 'Our pilots have been very successful.' The lead repeated the question: 'What is the percentage?' The vendor disclosed 58% — a number not volunteered in any sales material. The 42% non-conversion rate prompted a deeper question: 'What were the top three reasons pilots did not convert?' The answers revealed that integration complexity (28%), accuracy below expectations (8%), and internal budget reallocation (6%) drove the non-conversions. The retailer required integration architecture review as a condition of proceeding to pilot.",
        },
        {
          title: "Financial services — liability cap question",
          body: "A bank's procurement team asked an AI fraud detection vendor: 'What is your standard contract liability cap and have you ever had a liability claim from a customer?' The vendor's sales lead disclosed the standard cap was equal to 12 months' contract value — $180,000 for their contract. They had not had a formal liability claim. The bank's legal team noted that a single fraudulent transaction missed by the AI and not caught before processing could exceed $180,000. The liability cap was renegotiated to $2M before contract signature — a commercial negotiation triggered by a 30-second question.",
        },
        {
          title: "Healthcare — question 10 reveals continuity risk",
          body: "A hospital system asked an AI clinical documentation vendor: 'If your company is acquired or shuts down in the next 24 months, what happens to our data and our contract?' The vendor's sales team had no prepared answer. After two days, the vendor's legal team responded: in an acquisition scenario, the acquirer inherits all obligations; in a shutdown scenario, the vendor's terms gave customers 30 days to export data. The hospital required a 90-day data export window (matching their recovery planning timeline) and a data escrow arrangement for model weights. Both were negotiated before contract signature — prompted entirely by question 10.",
        },
      ],
    }),
    buildSection({
      number: "4.8",
      title: "BL decision lens: your red flag scorecard",
      subtitle: "A one-page scorecard that grades every AI vendor pitch against the fifteen most common red flags",
      take: "A red flag scorecard completed during or immediately after every AI vendor pitch converts a subjective impression into an objective record. The scorecard tracks fifteen red flags across five categories, produces a risk score, and becomes part of the vendor evaluation file — making the red flag record retrievable in a post-procurement review.",
      why: "Business leaders who rely on intuition after an AI pitch are susceptible to vendor halo effects: the most polished pitch team creates the most positive impression, regardless of the underlying risk profile. A scorecard converts impression into evidence and evidence into a defensible procurement record.",
      paragraphs: [
        [
          s("The red flag scorecard has five categories, three red flags each, scored as: not present (0), possibly present (1), or clearly present (2). "),
          x(
            "Category 1 — Demo integrity: demo-on-vendor-data only, refused adversarial inputs, no reference architecture discussion. Category 2 — Benchmark validity: no benchmark date disclosed, proprietary metrics only, no third-party validation. Category 3 — Commercial pressure: artificial urgency tactics, competitor urgency claims, deadline pricing. Category 4 — Integration honesty: connector logo without reference customer, roadmap integration presented as current, integration effort not quantifiable. Category 5 — Contract risk: training data opt-out not offered, output ownership ambiguous, liability cap below risk exposure.",
            "Total score 0–6: proceed with standard caution. 7–15: require written responses to flagged items before shortlisting. 16–30: eliminate or require extraordinary remediation before proceeding.",
          ),
          s(" Complete the scorecard within 30 minutes of the pitch ending, while observations are fresh. Post-meeting completion loses the specific observations that make the scorecard actionable."),
        ],
        [
          s("Present the red flag scorecard at each evaluation gate along with the technical rubric score. "),
          x(
            "A vendor with a high technical rubric score and a high red flag score should not advance without explicit risk acknowledgement. A vendor with a moderate technical score and a low red flag score may be a safer procurement than the inverse. Both scores together produce a more complete risk-adjusted view of the vendor than either alone.",
            "The red flag scorecard is not a disqualification instrument — it is a risk visibility instrument. A high red flag score triggers further investigation, not automatic elimination.",
          ),
          s(" Combine the red flag scorecard with the technical rubric into a single vendor risk profile for each evaluation committee presentation."),
        ],
        [
          s("Use the red flag scorecard to improve your organisation's AI procurement literacy over time. "),
          x(
            "After each procurement cycle, review which red flags were most frequently present and which were most predictive of post-contract problems. An organisation that tracks red flag patterns across three to five procurement cycles builds an institutional knowledge base about which vendor types and which red flag profiles predict deployment success versus failure.",
            "Institutional AI procurement knowledge is a competitive advantage: organisations that evaluate AI vendors rigorously get better contract terms, better implementations, and better vendor behaviour than organisations that evaluate on impressions.",
          ),
          s(" Review red flag scorecard patterns quarterly with the procurement and IT leadership team. Evolve the scorecard as new red flag patterns emerge in the market."),
        ],
      ],
      examples: [
        {
          title: "Red flag scorecard in practice",
          body: "A financial services firm completed red flag scorecards for four AI analytics vendors after pitch meetings. Vendor A scored 4/30 (low risk): live demo on firm's sample data, dated benchmark with third-party validation, no urgency tactics, named reference customer using same core systems, GDPR data processing agreement offered proactively. Vendor B scored 18/30 (high risk): demo on vendor data only, benchmark date undisclosed, deadline pricing applied, connector logo only for core integration, training data opt-out not offered. Vendor B had the highest technical rubric score. The combined view led to Vendor A proceeding to pilot — a decision that would not have been made on technical score alone.",
        },
        {
          title: "Red flag pattern review — annual learning",
          body: "A technology company reviewed red flag scorecard data from seven AI procurement cycles over 18 months. The analysis revealed that 'benchmark date not disclosed' was present in 86% of pitches and was the single best predictor of post-contract performance disappointment. The company added a benchmark date disclosure requirement to the functional brief — making it a knock-out requirement in writing before the pitch stage. In the next procurement cycle, three vendors self-selected out by disclosing benchmarks older than 12 months and acknowledging their tool was behind current-generation competitors in the relevant capability.",
        },
        {
          title: "Risk-adjusted procurement decision",
          body: "A retailer evaluated two shortlisted AI vendors. Vendor A: technical rubric 87/100, red flag score 8/30 (two flags: no reference architecture discussion, connector logo for SAP integration). Vendor B: technical rubric 79/100, red flag score 3/30 (one flag: benchmark date was 8 months old). Risk-adjusted view: Vendor A's flags were specific and investigable — a reference architecture session and an SAP integration reference check were scheduled. Vendor B's single flag was addressed by requesting an updated benchmark. Both flags were resolved before the pilot decision. The combined scoring framework converted a 'which is technically better' decision into a 'which is better with known risks managed' decision.",
        },
      ],
    }),
  ],
  quiz: [
    {
      q: "What is the most reliable way to test for a demo-to-production gap during an AI vendor demonstration?",
      options: [
        "Ask the vendor how long they have been in business and how many customers they have",
        "Ask the vendor to run the demonstration on your sample data instead of their curated demo data",
        "Request a product roadmap showing planned feature releases for the next 12 months",
        "Ask for a list of investors and board members who validate the company's credibility",
      ],
      correct: 1,
      correctFeedback: "Correct. Asking the vendor to demonstrate on your actual sample data is the only way to see performance under your conditions. Demo data is curated for performance — your data represents reality.",
      wrongFeedback: "The demo-to-production gap is revealed by running the demonstration on your actual data, not the vendor's curated demo data. Company age, customer count, roadmaps, and investor names do not predict performance in your environment.",
    },
    {
      q: "An AI vendor claims 'best-in-class accuracy' for their document processing tool. Which set of follow-up questions best evaluates this claim?",
      options: [
        "'How many customers use your tool?' and 'What is your NPS score?'",
        "'What is your benchmark date, who conducted the evaluation, and which of our specific document types does this accuracy figure apply to?'",
        "'Do you have a case study I can read?' and 'Can you provide two customer references?'",
        "'What is your pricing model?' and 'How long does implementation take?'",
      ],
      correct: 1,
      correctFeedback: "Correct. Benchmark date (to check for staleness), third-party vs. vendor-conducted evaluation (to check for manipulation), and use-case relevance (to check for cherry-picking) are the three questions that convert a marketing claim into evaluable data.",
      wrongFeedback: "The three questions that evaluate an accuracy claim are: benchmark date, who conducted the evaluation, and which specific tasks the accuracy applies to. Customer count, NPS, and case studies do not evaluate the accuracy claim itself.",
    },
    {
      kind: "categorize",
      q: "Categorise these vendor pitch moments as either 'Red flag — investigate before proceeding' or 'Normal practice — no concern':",
      categories: ["Red flag — investigate before proceeding", "Normal practice — no concern"],
      items: [
        { text: "Vendor declines to run demo on your sample data, citing data security", category: 0 },
        { text: "Vendor offers a limited-time 'founding customer' price with a 2-week deadline", category: 0 },
        { text: "Vendor's standard contract allows training data use without an opt-out clause", category: 0 },
        { text: "Vendor provides a reference customer list of three named companies", category: 1 },
        { text: "Vendor cannot guarantee a specific go-live date before seeing your environment", category: 1 },
        { text: "Vendor's benchmark was conducted by a third-party testing organisation", category: 1 },
      ],
      correctFeedback: "Correct. Declining sample data demo, artificial urgency pricing, and training data opt-out absence are red flags requiring investigation. Reference lists, go-live uncertainty, and third-party benchmarks are normal, non-alarming vendor practices.",
      wrongFeedback: "Red flags indicate gaps between sales claims and operational reality. Normal practices are standard commercial and evaluation behaviours that do not indicate deception or risk.",
    },
    {
      kind: "order",
      q: "Order these ten-question pitch audit questions from most to least diagnostic value for a business leader evaluating an AI vendor:",
      items: [
        "What percentage of pilot customers converted to full deployment?",
        "Can you run the demo on our sample data right now?",
        "Who will be our dedicated CSM and how many customers do they manage?",
        "Does your standard contract allow training data use?",
        "What was the benchmark date and who conducted it?",
      ],
      prompt: "Drag to arrange from highest to lowest diagnostic value",
      correctFeedback: "Correct. Pilot-to-deployment conversion reveals systematic vendor delivery failures. Live demo on your data reveals real performance. CSM assignment reveals post-sale support readiness. Training data clause reveals IP risk. Benchmark date reveals claim validity.",
      wrongFeedback: "Pilot-to-deployment conversion rate is the single most diagnostic question because it reveals the vendor's systematic ability to deliver on their demo — the core risk in AI procurement.",
    },
    {
      q: "Which of these IP and data ownership risks is most commonly missed by business leaders signing standard AI vendor contracts?",
      options: [
        "The vendor charges per API call rather than per seat",
        "The vendor's standard terms allow them to use your data to train their AI model without an explicit opt-out",
        "The vendor's contract is governed by the laws of a different country",
        "The vendor requires annual contract renewal rather than multi-year commitment",
      ],
      correct: 1,
      correctFeedback: "Correct. Training data opt-out is the most commonly missed IP risk in standard AI vendor terms. The default is typically opt-in-to-training, and buyers must explicitly request and negotiate an opt-out clause to protect their data from being used to train the vendor's model.",
      wrongFeedback: "The most commonly missed IP risk is the training data clause: standard AI vendor terms often grant the vendor a licence to use customer data for model training unless the customer explicitly opts out. Pricing model, governing law, and renewal terms are standard commercial terms that buyers typically notice.",
    },
    {
      q: "A vendor's AI pitch uses the phrase 'we integrate with everything.' What is the correct response?",
      options: [
        "Accept the claim — modern AI tools are built on open API standards",
        "Ask: 'Do you have a reference customer using our specific core system version in production today, and how many engineering hours does the integration typically require?'",
        "Request a data sheet listing all supported integrations",
        "Ask the vendor's sales engineer to walk through the API documentation",
      ],
      correct: 1,
      correctFeedback: "Correct. 'We integrate with everything' is a marketing claim. The specific questions — named reference customer on your system version in production, and engineering hours required — convert the claim into testable evidence.",
      wrongFeedback: "The phrase 'we integrate with everything' requires two specific follow-up questions: a named reference customer using your exact system version in production (to test integration reality) and the typical engineering hours required (to test integration cost).",
    },
  ],
});
