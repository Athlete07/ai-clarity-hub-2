import { buildChapter, buildSection, s, x } from "../concepts-pb4-helpers";

export const chapter01BlAiVendorLandscapeByFunction = buildChapter({
  slug: "bl-ai-vendor-landscape-by-function",
  number: 1,
  shortTitle: "AI Vendor Landscape",
  title: "The AI Vendor Landscape by Business Function",
  readingMinutes: 28,
  summary:
    "The AI vendor market is not one market — it is fifteen overlapping submarkets organised by business function, each with different maturity curves, pricing models, and integration requirements. Business leaders who map vendors by function before issuing an RFP cut evaluation time in half and avoid shortlisting tools that cannot meet their operating context.",
  keyTakeaway:
    "Map AI vendors to the function they serve — sales, finance, HR, operations, customer service, legal, marketing — before comparing features. A vendor that leads in sales intelligence is architecturally unsuited for finance compliance automation. Functional mapping is the first filter that saves months of wasted evaluation.",
  pmCallout:
    "As a business leader: you are not buying AI — you are buying a specific capability for a specific function. Until you map vendors to functions, every demo looks equally impressive and every contract carries equal risk.",
  sections: [
    buildSection({
      number: "1.1",
      title: "Why function-first vendor mapping matters",
      subtitle: "The danger of evaluating AI vendors before defining the functional job to be done",
      take: "Most AI vendor evaluations fail before they start because the buying team compares vendors across incompatible functions. A horizontal AI platform and a vertical point solution are not alternatives — they serve different jobs. Functional mapping prevents this category error.",
      why: "Business leaders who skip functional mapping spend three months evaluating vendors and then discover the shortlist does not include the category leader in their actual use case. Function-first mapping compresses this to three weeks.",
      paragraphs: [
        [
          s("The AI vendor market in 2025 spans over 4,000 companies, and every vendor claims to solve 'intelligent automation.' "),
          x(
            "Salesforce Einstein, Gong, Clari, and Outreach all serve sales functions — but Gong is conversation intelligence, Clari is revenue forecasting, and Outreach is sales engagement. Comparing them as alternatives is a category error.",
            "Within a single business function like sales, there are five distinct AI subcategories each with different leaders.",
          ),
          s(" Without functional mapping, RFPs attract responses from vendors who cannot do the job."),
        ],
        [
          s("Functional mapping requires answering three questions before any vendor contact: "),
          x(
            "What human decision or workflow am I augmenting? What data does the vendor need to access? What downstream system must it connect to?",
            "These three questions immediately eliminate 80% of the market for any given use case.",
          ),
          s(" The answers create a functional brief that replaces a generic RFP with a targeted capability request."),
        ],
        [
          s("The cost of poor mapping is not just wasted evaluation time. "),
          x(
            "A logistics company that evaluates general-purpose LLM platforms for route optimisation will dismiss the category leader because it appears expensive — without realising specialised route optimisation AI delivers 10× the ROI of a general-purpose alternative.",
            "Mismatched vendor categories produce apples-to-oranges ROI comparisons that make the best vendor look weakest.",
          ),
          s(" Functional mapping is a pre-procurement step, not a procurement step."),
        ],
      ],
      examples: [
        {
          title: "Retail chain — five vendors, one function",
          body: "A regional retail chain issued an RFP for 'AI to improve customer experience.' Forty-three vendors responded, spanning chatbots, demand forecasting, personalisation engines, visual search, and fraud detection. The evaluation team spent six months reviewing responses before realising all five categories served different customer experience functions. Reissuing function-specific RFPs took three weeks and attracted the right specialists.",
        },
        {
          title: "Manufacturer — horizontal vs vertical mistake",
          body: "A manufacturing leader selected a horizontal AI platform for quality control inspection, attracted by its general capability. Eighteen months later, a vertical computer vision vendor purpose-built for industrial inspection was shortlisted by a competitor — at half the integration cost and triple the defect detection rate. Function-first mapping would have identified the vertical category in week one.",
        },
        {
          title: "Financial services — function map saves $2M",
          body: "A mid-market bank built a functional map across eight departments before any vendor contact. The map revealed that contract review (legal), fraud pattern detection (risk), and customer churn scoring (marketing) each had distinct vendor categories with different leading providers. Separate RFPs per function led to three best-in-class selections totalling $400K — versus the $2.4M enterprise suite initially quoted by a single horizontal vendor.",
        },
      ],
    }),
    buildSection({
      number: "1.2",
      title: "The eight AI vendor categories by function",
      subtitle: "Sales, marketing, finance, HR, operations, customer service, legal, and R&D — who leads each",
      take: "Eight functional categories account for 90% of enterprise AI spend: sales intelligence, marketing personalisation, finance automation, HR analytics, operations/supply chain, customer service AI, legal/compliance, and R&D acceleration. Each category has a different market maturity, pricing structure, and integration requirement.",
      why: "Business leaders who know which category they are buying in can benchmark vendors against category standards rather than generic AI claims. Category knowledge converts vendor demos from entertainment into structured evaluation.",
      paragraphs: [
        [
          s("Sales intelligence AI — think conversation analysis, pipeline forecasting, and lead scoring — is the most mature category, with established leaders and proven ROI benchmarks. "),
          x(
            "Average payback period in sales AI is 8 months. Finance automation AI averages 14 months. Legal AI averages 22 months. Maturity drives payback speed.",
            "Category maturity determines how much implementation risk you are accepting and how much vendor support infrastructure exists.",
          ),
          s(" Buying in an immature category requires enterprise-grade vendor stability checks that mature categories have already resolved."),
        ],
        [
          s("Operations and supply chain AI is the highest-variance category: leaders outperform laggards by 5× on implementation success. "),
          x(
            "Supply chain AI requires deep integration with ERP systems, IoT sensors, and logistics APIs. Vendors who cannot demonstrate this integration architecture in a reference architecture document are not operationally ready.",
            "A great supply chain AI algorithm with weak ERP integration is a proof of concept, not a production system.",
          ),
          s(" Integration depth is the primary evaluation criterion in operations AI — more important than model accuracy alone."),
        ],
        [
          s("Legal and compliance AI is the fastest-growing category but the highest-risk procurement: regulatory requirements vary by jurisdiction and the cost of a wrong output can exceed the cost of the contract. "),
          x(
            "Legal AI must be evaluated against the specific legal system, language, and regulatory framework it will operate in. A contract review tool trained on US common law performs poorly on German civil law contracts.",
            "Jurisdiction specificity is a non-negotiable evaluation criterion in legal AI.",
          ),
          s(" This category requires more due diligence time than any other, not less."),
        ],
      ],
      examples: [
        {
          title: "Sales AI maturity benchmark",
          body: "A B2B SaaS company evaluated four sales intelligence vendors. Using category maturity data, they found the category average for go-live time was 6 weeks. One vendor quoted 24 weeks. That single data point eliminated the vendor before a demo — saving three months of evaluation time and revealing the vendor was building implementation capacity it had not yet established.",
        },
        {
          title: "HR analytics — category within a category",
          body: "An HR leader issued an RFP for 'AI HR tools' and received responses from performance management platforms, recruiting automation tools, workforce scheduling optimisers, and employee sentiment analysers. Each is a distinct subcategory with different integration requirements and different data sensitivity profiles. Functional mapping within the HR category identified recruiting automation as the priority, reducing the vendor field from 31 to 7.",
        },
        {
          title: "R&D acceleration — emerging category risk",
          body: "A pharmaceutical company evaluated AI tools for drug discovery literature review. The category was immature: only four vendors had more than 50 enterprise customers. The procurement team applied emerging-category criteria — financial stability, reference customer depth, and roadmap commitment — rather than mature-category ROI benchmarks. Two vendors failed financial stability checks that would have passed a standard procurement review.",
        },
      ],
    }),
    buildSection({
      number: "1.3",
      title: "Horizontal platforms vs vertical point solutions",
      subtitle: "When to buy a platform and when to buy a specialist — and why most leaders get this wrong",
      take: "Horizontal AI platforms offer broad capability and single-vendor simplicity. Vertical point solutions offer depth, faster time-to-value, and lower integration cost within a specific function. The choice is not a preference — it is a function of your use case complexity, data sensitivity, and integration architecture.",
      why: "Leaders who default to horizontal platforms in search of simplicity often discover the platform is shallow in their specific function. Leaders who over-rotate to point solutions accumulate tool sprawl. The decision requires explicit criteria, not instinct.",
      paragraphs: [
        [
          s("A horizontal platform wins when your AI use case spans multiple functions, you have a dedicated integration team, and you need one data model across the enterprise. "),
          x(
            "Salesforce Einstein, Microsoft Copilot, and Google Vertex AI are horizontal platforms. They win in large enterprises with complex data governance requirements and IT resources to manage integration.",
            "Horizontal platforms are infrastructure decisions, not tool decisions. They require IT partnership from day one.",
          ),
          s(" Buying a horizontal platform without IT partnership is buying infrastructure without an operator."),
        ],
        [
          s("A vertical point solution wins when your use case is function-specific, your team needs immediate productivity, and you cannot afford a 12-month implementation. "),
          x(
            "Gong wins in sales conversation intelligence. Workday AI wins in HR. Harvey wins in legal. Each is trained on domain-specific data and delivers out-of-the-box value in weeks, not months.",
            "Point solutions trade breadth for depth and integration cost for specialisation. The trade is right when depth matters more than breadth.",
          ),
          s(" The leading indicator for point solution success is pre-built integrations with your existing core systems."),
        ],
        [
          s("The hybrid model — a horizontal platform for data and governance, vertical solutions for functional execution — is increasingly the enterprise standard. "),
          x(
            "A common pattern: Microsoft Azure for AI infrastructure and security, plus Gong for sales, Workday AI for HR, and Luminance for legal. The platform manages data residency; the point solutions deliver workflow value.",
            "The hybrid model requires a clear data flow map — which system owns what data and which AI tool reads versus writes.",
          ),
          s(" Documenting the data flow map before procurement prevents integration conflicts that derail pilots."),
        ],
      ],
      examples: [
        {
          title: "Insurance company — platform regret",
          body: "An insurance company purchased a horizontal AI platform for claims processing. After 18 months, they had processed 200 claims with AI assistance — against a target of 2,000. The platform required 14 months of integration work. A vertical claims processing AI shortlisted during the same evaluation would have been live in 6 weeks. The horizontal platform cost four times the annual contract value in implementation services.",
        },
        {
          title: "Professional services firm — point solution sprawl",
          body: "A consulting firm purchased 14 individual AI point solutions over two years — each best-in-class for its function. By year three, data lived in 14 systems with no common API layer. Client data compliance required 14 separate audits. Consolidation cost more than the original AI budget. A platform-first governance decision at year one would have prevented fragmentation.",
        },
        {
          title: "Logistics provider — hybrid model execution",
          body: "A logistics company standardised on AWS as its AI data platform and then evaluated vertical solutions against a strict criterion: must have a certified AWS integration. This single criterion reduced the vendor field from 40 to 11, eliminated integration risk, and ensured data sovereignty. The evaluation took six weeks. Time-to-value for the first vertical solution was nine weeks from contract signature.",
        },
      ],
    }),
    buildSection({
      number: "1.4",
      title: "Vendor market maturity signals",
      subtitle: "How to assess whether an AI vendor category is ready for enterprise deployment",
      take: "AI vendor categories mature at different speeds. A category is enterprise-ready when it has published ROI benchmarks, ISO/SOC 2 certified vendors, reference customers in your industry, and standardised pricing models. Buying before a category reaches this threshold means you are a beta customer paying enterprise prices.",
      why: "Enterprise leaders who buy into immature AI categories absorb product development risk on top of implementation risk. The vendor's roadmap failures become your operational failures. Category maturity assessment is a procurement risk control.",
      paragraphs: [
        [
          s("Four signals indicate enterprise maturity in an AI vendor category. "),
          x(
            "First: published third-party ROI studies with named customers. Second: SOC 2 Type II or ISO 27001 certification across the top three vendors. Third: a price-per-seat or outcome-based pricing standard the market has converged on. Fourth: analyst coverage from Gartner, Forrester, or IDC with a named Magic Quadrant or Wave.",
            "A category lacking all four signals is pre-enterprise. Proceed only if you have tolerance for a 12-month runway to production.",
          ),
          s(" Any category with fewer than two of these signals should be treated as a strategic bet, not a procurement decision."),
        ],
        [
          s("Vendor funding stage is a secondary but important maturity proxy. "),
          x(
            "A Series A AI vendor in an enterprise procurement will not survive standard 18-month contract cycles if the market contracts. Series C and above vendors have demonstrated revenue durability. Public companies have the most predictable support continuity.",
            "Funding stage is not a quality signal — it is a continuity signal. A brilliant Series A product on an 18-month runway is a liability in a 36-month enterprise deployment.",
          ),
          s(" Ask for the last 12 months of customer churn data, not the founding story."),
        ],
        [
          s("Analyst coverage gaps are as informative as analyst coverage itself. "),
          x(
            "If a vendor claims category leadership but does not appear in any Gartner Magic Quadrant or Forrester Wave for their stated category, either the category is too new for analyst coverage (a risk signal) or the vendor's positioning does not match analysts' category definition (a precision signal).",
            "Vendors who claim 'we are too innovative for analysts to cover' are sometimes right and more often wrong. Ask which vendors the analysts do cover and why.",
          ),
          s(" Cross-reference vendor category claims against the analyst taxonomy before shortlisting."),
        ],
      ],
      examples: [
        {
          title: "Customer service AI — mature category benchmark",
          body: "By 2024, customer service AI had all four maturity signals: Gartner Magic Quadrant for CRM Customer Engagement, SOC 2 Type II across the top five vendors, published Forrester TEI studies, and a per-agent pricing standard. A business leader evaluating in this category could compare vendors on outcomes, not existence. Evaluation took 8 weeks with clear criteria.",
        },
        {
          title: "AI note-taking tools — immature category trap",
          body: "A professional services firm committed to an AI meeting note-taking vendor in 2023 before the category had maturity signals. The vendor was Series A, lacked SOC 2 certification, and had no analyst coverage. Twelve months later, the vendor pivoted to a consumer model, dropped enterprise features, and the firm's 400-seat deployment was orphaned. A maturity check would have flagged all three risk signals.",
        },
        {
          title: "Legal AI — category transition moment",
          body: "In 2024, legal AI crossed the enterprise maturity threshold: Harvey and Luminance both achieved SOC 2 Type II, Gartner issued first Magic Quadrant coverage, and Thomson Reuters published a TEI study. A GC who had held off on legal AI procurement pending maturity signals had a clear buying signal. The GC who bought 18 months earlier absorbed two product pivots and one security certification gap.",
        },
      ],
    }),
    buildSection({
      number: "1.5",
      title: "Build a functional vendor map in one week",
      subtitle: "A structured process for mapping the AI vendor landscape to your organisation's specific functions",
      take: "A functional vendor map is a one-page document that lists each business function, the AI use case within it, the vendor category that serves it, and the top three vendors in that category. Built in one week, it becomes the foundation for every RFP and pilot decision for the next 18 months.",
      why: "Business leaders who operate without a functional vendor map make procurement decisions reactively — responding to vendor outreach rather than driving structured selection. The map converts reactive procurement to strategic procurement.",
      paragraphs: [
        [
          s("Day 1–2: interview functional leaders to identify the top two AI use cases per function. "),
          x(
            "Ask each functional leader: what decision takes the most time and has the clearest right answer? What data exists that we are not using? The answers surface AI use cases more reliably than asking 'where should we use AI?'",
            "Functional leaders know their bottlenecks. They do not always know which AI capability maps to which bottleneck.",
          ),
          s(" Capture use cases in job-to-be-done format: 'help sales manager identify which deals will close this quarter.'"),
        ],
        [
          s("Day 3: map each use case to a vendor category using analyst taxonomy. "),
          x(
            "Use Gartner Magic Quadrant category names as the taxonomy. If no Magic Quadrant exists, use Forrester Wave or CB Insights category names. This grounds your vendor map in the market's own definitions.",
            "Using analyst taxonomy prevents internal naming that does not match how vendors position themselves, which breaks keyword searches and RFP routing.",
          ),
          s(" Do not invent category names. Use the market's definitions so vendors can self-select into the right RFP."),
        ],
        [
          s("Day 4–5: identify the top three vendors per category using two sources: analyst rankings and your peer network. "),
          x(
            "Call two peers in similar organisations who have evaluated the category. Analyst rankings tell you who the market believes leads. Peer experience tells you who actually delivers. The intersection of both is your shortlist anchor.",
            "Peer calls of 20 minutes each consistently surface more implementation insight than 60-minute vendor demos.",
          ),
          s(" A completed functional vendor map has 8–12 rows and is ready to drive RFP design."),
        ],
      ],
      examples: [
        {
          title: "Healthcare system — one-week vendor map",
          body: "A regional hospital system ran a five-day functional vendor map exercise across six departments: clinical documentation, revenue cycle, HR scheduling, supply chain, patient communication, and compliance. The resulting map identified 11 distinct vendor categories. Six had established leaders; two were immature categories the organisation deferred; three went to immediate RFP. The exercise prevented a $1.2M contract with a horizontal platform that could not serve clinical documentation.",
        },
        {
          title: "Professional services — map drives budget prioritisation",
          body: "A law firm built a functional vendor map before its annual AI budget discussion. The map revealed that legal research AI (mature category, clear leaders) had the highest ROI per dollar spent, while AI-generated client reports (immature category, no clear leaders) had the highest risk. Budget was allocated 70% to mature category procurement and 30% to a structured pilot in the immature category. This was the first AI budget decision the firm made from evidence rather than vendor pitch quality.",
        },
        {
          title: "Media company — map prevents duplicate spend",
          body: "A media company's functional vendor map revealed that three different departments had independently evaluated content personalisation AI in the past 18 months — and each had selected a different vendor. The map exposed the overlap, led to a consolidation conversation, and identified the strongest performer for a company-wide rollout. The map paid for itself before any procurement decision was made.",
        },
      ],
    }),
    buildSection({
      number: "1.6",
      title: "Pricing model literacy across AI vendor categories",
      subtitle: "Understanding per-seat, outcome-based, consumption, and platform pricing before signing",
      take: "AI vendor pricing models vary dramatically by category: per-seat SaaS, outcome-based (per decision, per claim, per contract), consumption-based (per token, per API call), and platform licensing. Misunderstanding the pricing model is the most common source of AI contract cost overruns in year two.",
      why: "A vendor who prices per API call at $0.002 looks cheap in a demo with 1,000 calls. At 10 million production calls per month, the contract is $20,000 per month — which was not in the business case. Pricing model literacy is a budget protection skill.",
      paragraphs: [
        [
          s("Per-seat pricing is the most predictable AI pricing model and the easiest to budget. "),
          x(
            "Gong, Outreach, and most sales AI tools price per user seat. Finance AI tools like Anaplan and Workiva also use seat-based pricing. Seat pricing scales linearly with user growth — no surprises if headcount is stable.",
            "Seat pricing is also the most limiting: if five people use the AI to benefit 500 people, you are paying for 5 seats but the ROI calculation assumes 500 beneficiaries.",
          ),
          s(" Seat-based AI contracts should include a named-user audit right to prevent ghost seat accumulation."),
        ],
        [
          s("Consumption-based pricing is the highest-variance model and the most dangerous for budget planning. "),
          x(
            "OpenAI, Anthropic, Google, and most foundation model APIs price per token. A document processing workflow that processes 100 documents per day in a pilot may process 50,000 per day in production — at 500× the cost.",
            "Consumption-based pricing requires a production volume estimate before contract signature. A pilot volume estimate used for production budgeting will be wrong by an order of magnitude.",
          ),
          s(" Always require a usage cap clause in consumption-based AI contracts to prevent budget overruns."),
        ],
        [
          s("Outcome-based pricing aligns vendor incentives with buyer results and is growing across legal, insurance, and financial services AI. "),
          x(
            "A contract review AI that charges per contract reviewed, a claims processing AI that charges per claim resolved, or a fraud detection AI that charges per fraud prevented — all align cost with value delivered.",
            "Outcome-based pricing requires clear outcome definition before contract signature. 'Contract reviewed' must have a precise definition or the vendor counts every document touched as a billable outcome.",
          ),
          s(" Define the billable outcome in plain language in the contract, not in a schedule referenced by the vendor."),
        ],
      ],
      examples: [
        {
          title: "Marketing team — consumption pricing surprise",
          body: "A marketing team contracted an AI content generation tool at $0.01 per 100 words. In a pilot generating 10 blog posts per week, the cost was $40 per month. Six months into production, the team was generating 500 social posts, 200 emails, and 50 blog posts per week. Monthly cost: $3,800. Annual cost: $45,600. The original business case projected $480 per year. A production volume estimate would have caught this before contract signature.",
        },
        {
          title: "Insurance company — outcome pricing definition gap",
          body: "An insurer contracted outcome-based AI for claims processing at $12 per claim resolved. The vendor's definition of 'resolved' included claims that were flagged and referred to human reviewers. The insurer's definition required final settlement. By quarter two, the vendor was billing for 3× the claims the insurer considered resolved. The contract term required a six-month notice period to terminate. A precise outcome definition at signature would have prevented a $2.1M dispute.",
        },
        {
          title: "B2B SaaS — seat pricing audit right",
          body: "A SaaS company contracted an AI sales intelligence tool for 50 named seats at $1,200 per seat annually. In year two, a seat audit revealed 34 of the seats had not logged in for 90 days. The audit right in the contract allowed renegotiation to 30 active seats at renewal, saving $24,000. Without the audit right, auto-renewal would have locked in 50 seats for year three.",
        },
      ],
    }),
    buildSection({
      number: "1.7",
      title: "Integration architecture as vendor selection criterion",
      subtitle: "Why API depth, data connector quality, and SSO support determine deployment success",
      take: "The most capable AI vendor with a weak API integration layer will fail in your environment. Integration architecture — not model performance — is the primary predictor of deployment success in enterprise AI. Evaluate integration depth before evaluating intelligence depth.",
      why: "Business leaders who select AI vendors on model benchmarks and discover integration gaps six months into deployment have bought a proof of concept. Integration evaluation is a procurement discipline, not an IT afterthought.",
      paragraphs: [
        [
          s("Three integration questions must be answered before any AI vendor reaches the shortlist. "),
          x(
            "First: does the vendor have a certified, maintained integration with your CRM, ERP, or core system? Second: does the vendor support SSO with your identity provider? Third: does the vendor's API expose the specific data objects your workflow requires?",
            "A vendor who answers 'yes' to all three in a sales call but cannot provide a reference customer using the same integration stack in production is describing a roadmap, not a capability.",
          ),
          s(" Require a live integration demonstration with a test environment of your core system before contract signature."),
        ],
        [
          s("Data connector quality determines how much custom engineering your team must absorb. "),
          x(
            "A vendor with a native Salesforce connector that syncs bidirectionally in real time requires zero engineering to deploy in a Salesforce shop. A vendor with a CSV export integration requires a data engineering team to maintain the pipeline. The engineering cost difference is often larger than the contract value difference.",
            "Hidden integration engineering cost is the most common reason AI ROI calculations fail in post-implementation reviews.",
          ),
          s(" Add integration engineering cost to every vendor's TCO calculation before comparing contract values."),
        ],
        [
          s("SSO and identity management support is a non-negotiable enterprise criterion that many AI vendors fail. "),
          x(
            "Enterprise security teams require SSO with Okta, Azure AD, or Google Workspace. AI vendors who offer only email/password login cannot pass enterprise security review. Vendors who offer SSO but with 90-day implementation timelines create deployment delays that compound across a multi-tool procurement.",
            "SSO support is binary: it is there or it is not. No SSO means no enterprise deployment. Check this in week one, not week eight.",
          ),
          s(" Make SSO support a knock-out criterion in the RFP technical requirements section."),
        ],
      ],
      examples: [
        {
          title: "Healthcare — EHR integration non-negotiable",
          body: "A hospital system evaluated five AI clinical documentation vendors. Two were eliminated in round one because they lacked Epic EHR certification. One was eliminated because its Epic integration required a 9-month implementation by the vendor's professional services team. Two remained — both with certified Epic integrations and sub-60-day deployment timelines. The integration criterion reduced a 90-day evaluation to 30 days by eliminating non-viable vendors early.",
        },
        {
          title: "Financial services — API depth gap",
          body: "A wealth management firm selected an AI portfolio analytics tool based on benchmark performance. Six months into implementation, the firm discovered the vendor's API did not expose the tax lot data objects required for after-tax optimisation. The missing API endpoint was on the vendor's roadmap for Q3. The firm had already paid 50% of a two-year contract. An API depth review before selection would have caught this gap.",
        },
        {
          title: "Retailer — SSO failure costs 4 months",
          body: "A retail chain selected an AI inventory forecasting tool and proceeded to IT security review. The vendor supported SSO but only through a SAML 2.0 implementation that required a 16-week configuration engagement by a third-party consultant. The delay pushed the deployment past the peak season window. The AI tool went live in January for a use case that mattered in October. An SSO depth question in week one would have surfaced the timeline.",
        },
      ],
    }),
    buildSection({
      number: "1.8",
      title: "BL decision lens: your functional vendor map",
      subtitle: "How to produce a one-page AI vendor map that drives every procurement decision for the next 18 months",
      take: "The functional vendor map is the single most valuable pre-procurement artefact a business leader can produce. It takes one week to build, prevents months of misdirected evaluation, and gives every functional leader and IT partner a shared language for AI procurement decisions.",
      why: "Business leaders who operate without a vendor map make procurement decisions in response to vendor outreach. Business leaders who operate with a vendor map make procurement decisions in response to business need. The map is the difference between reactive and strategic AI adoption.",
      paragraphs: [
        [
          s("Your vendor map template has five columns: Function, Use Case (job-to-be-done format), Vendor Category (analyst taxonomy name), Top 3 Vendors (analyst + peer validated), and Maturity Signal (0–4 signals present). "),
          x(
            "Populate the first two columns in stakeholder interviews. Populate columns three and four using analyst reports and two peer calls per category. Score column five against the four maturity signals: published ROI studies, security certification, pricing standard, analyst coverage.",
            "A row with 0–1 maturity signals should be flagged as 'emerging category — defer or pilot only.' A row with 3–4 signals is ready for RFP.",
          ),
          s(" A completed map with 8–12 rows is the foundation for your AI procurement calendar."),
        ],
        [
          s("Present the vendor map to your leadership team before any budget commitment. "),
          x(
            "The map converts abstract AI strategy into concrete budget lines. Each row is a potential procurement decision with an associated vendor category and maturity risk score. Leaders can prioritise high-maturity categories for immediate procurement and high-potential immature categories for structured pilots.",
            "The map also prevents duplicate spend across functions — it surfaces where two departments are solving the same problem with different vendor categories.",
          ),
          s(" A 30-minute leadership review of the map replaces six months of uncoordinated vendor evaluations."),
        ],
        [
          s("Update your vendor map quarterly. "),
          x(
            "The AI vendor market changes faster than any other enterprise software category. A vendor who was Series A six months ago may have achieved enterprise certification. A category that was immature may have its first Gartner coverage. Quarterly updates keep your map actionable and your procurement calendar aligned with market reality.",
            "Schedule a 90-minute quarterly map review with your CTO or IT lead and two functional heads. The review cadence is as important as the initial build.",
          ),
          s(" A static vendor map becomes a liability within 12 months. A living vendor map becomes a competitive advantage."),
        ],
      ],
      examples: [
        {
          title: "One-page vendor map format",
          body: "Function: Sales | Use Case: Identify deals likely to close this quarter | Category: Revenue Intelligence | Top 3: Clari, Gong, Aviso | Maturity: 4/4. Function: Legal | Use Case: Review NDAs before signature | Category: Legal AI / Contract Review | Top 3: Harvey, Ironclad, Luminance | Maturity: 3/4. Function: HR | Use Case: Score candidate fit before interview | Category: AI Recruiting | Top 3: Greenhouse AI, Paradox, HireVue | Maturity: 3/4. This format drives RFP issuance in 30 minutes.",
        },
        {
          title: "CFO using map for AI budget allocation",
          body: "A CFO received the functional vendor map three weeks before the annual AI budget cycle. The map showed six high-maturity categories (ready for RFP) and three emerging categories (pilot-only). The CFO allocated 75% of AI budget to high-maturity procurement with defined ROI benchmarks and 25% to structured pilots in emerging categories with explicit success criteria. This was the first AI budget cycle the company could defend with evidence.",
        },
        {
          title: "Quarterly map update — category graduation",
          body: "An AI governance team reviewed their vendor map in Q3 and found that document intelligence — previously flagged as emerging (1/4 maturity signals) — had achieved 3/4 signals: SOC 2 Type II across top vendors, Gartner coverage published, and a TEI study from Forrester. The category was graduated from 'pilot only' to 'RFP ready.' A procurement that would have been premature six months earlier was now structurally safe.",
        },
      ],
    }),
  ],
  quiz: [
    {
      q: "A business leader is about to issue an RFP for 'AI to improve customer experience.' Why is this RFP likely to fail?",
      options: [
        "It does not specify a budget range for vendors to respond to",
        "Customer experience is too mature a category to need an RFP",
        "The RFP spans multiple distinct vendor categories and will attract incompatible responses",
        "AI cannot improve customer experience without a custom build",
      ],
      correct: 2,
      correctFeedback: "Correct. 'Customer experience AI' spans chatbots, personalisation, demand forecasting, and more — each a distinct vendor category. A function-first RFP defines the specific job to be done and the vendor category that serves it.",
      wrongFeedback: "The core problem is that 'customer experience AI' is not a vendor category — it is five overlapping categories. The RFP must map to a specific functional job before vendors can respond meaningfully.",
    },
    {
      q: "Which four signals indicate an AI vendor category is enterprise-ready?",
      options: [
        "Venture funding, product launch date, LinkedIn follower count, and press coverage",
        "Published ROI studies, security certification, standardised pricing, and analyst coverage",
        "Number of employees, headquarters location, patent count, and API documentation quality",
        "Customer count, NPS score, free trial availability, and G2 review rating",
      ],
      correct: 1,
      correctFeedback: "Correct. The four enterprise maturity signals are: published third-party ROI studies, SOC 2/ISO 27001 certification, a converged pricing standard, and Gartner/Forrester/IDC analyst coverage.",
      wrongFeedback: "Maturity signals must be structural and independently verifiable — not marketing metrics. The four signals are ROI studies, security certification, pricing standards, and analyst coverage.",
    },
    {
      kind: "order",
      q: "Order these steps to build a functional vendor map in one week:",
      items: [
        "Interview functional leaders to identify top AI use cases per function",
        "Map each use case to an analyst-defined vendor category",
        "Identify top three vendors per category via analyst rankings and peer calls",
        "Score each category against the four enterprise maturity signals",
        "Present the map to leadership and set the AI procurement calendar",
      ],
      prompt: "Drag to arrange in the correct sequence",
      correctFeedback: "Correct. The sequence moves from internal use case discovery to market taxonomy mapping to vendor identification to maturity scoring to leadership alignment.",
      wrongFeedback: "Start with internal use case discovery before touching the vendor market. Only after you know the job to be done can you map to a vendor category and identify leaders.",
    },
    {
      q: "A vendor's AI tool prices at $0.002 per API call. In a pilot, the team makes 5,000 calls per month. In production, they expect 8 million calls per month. What is the production monthly cost?",
      options: [
        "$10",
        "$160",
        "$16,000",
        "$160,000",
      ],
      correct: 2,
      correctFeedback: "Correct. 8,000,000 × $0.002 = $16,000 per month, or $192,000 per year. A pilot-based cost estimate of $10/month would have missed this by a factor of 1,600.",
      wrongFeedback: "Calculate: 8,000,000 calls × $0.002 per call = $16,000 per month. Consumption-based pricing requires a production volume estimate before contract signature, not a pilot volume estimate.",
    },
    {
      kind: "categorize",
      q: "Categorise these AI vendor selection criteria as either 'Round 1 Knock-out Criteria' or 'Shortlist Evaluation Criteria':",
      categories: ["Round 1 Knock-out Criteria", "Shortlist Evaluation Criteria"],
      items: [
        { text: "SSO support with your identity provider", category: 0 },
        { text: "Certified integration with your core system", category: 0 },
        { text: "SOC 2 Type II certification", category: 0 },
        { text: "Model accuracy benchmark performance", category: 1 },
        { text: "Customer success team responsiveness", category: 1 },
        { text: "Roadmap alignment with your 18-month plan", category: 1 },
      ],
      correctFeedback: "Correct. Knock-out criteria (SSO, core system integration, SOC 2) eliminate vendors before evaluation begins. Shortlist criteria (accuracy, success team, roadmap) differentiate among qualified vendors.",
      wrongFeedback: "Knock-out criteria are binary requirements — a vendor either meets them or is eliminated. Shortlist criteria are differentiators among vendors who have already cleared the knock-out threshold.",
    },
    {
      q: "What is the primary reason a business leader should prefer a vertical AI point solution over a horizontal platform for a specific function?",
      options: [
        "Vertical solutions are always cheaper than horizontal platforms",
        "Horizontal platforms cannot handle enterprise security requirements",
        "Vertical solutions offer domain depth, faster time-to-value, and lower integration cost for function-specific use cases",
        "Vertical solutions provide better data governance across the enterprise",
      ],
      correct: 2,
      correctFeedback: "Correct. Vertical point solutions are purpose-built for specific functions, with domain-trained models, pre-built integrations, and faster deployment — delivering time-to-value in weeks versus months for a horizontal platform.",
      wrongFeedback: "The vertical solution advantage is depth and speed: domain-specific training, pre-built integrations with function-relevant systems, and a faster path from contract to production value.",
    },
  ],
});
