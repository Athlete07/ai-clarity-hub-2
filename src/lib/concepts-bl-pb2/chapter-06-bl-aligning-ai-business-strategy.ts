import { buildChapter, buildSection, s, x } from "../concepts-bl-helpers";

export const chapter06BlAligningAiBusinessStrategy = buildChapter({
  slug: "bl-aligning-ai-business-strategy",
  number: 6,
  shortTitle: "AI and Business Strategy",
  title: "Aligning AI with Business Strategy — Why Most AI Programmes Drift and How to Anchor Yours",
  readingMinutes: 20,
  summary:
    "AI investment that is not anchored to business strategy produces technically interesting outcomes that do not move the metrics that matter. This chapter shows business leaders how to create and sustain the connection between AI investment decisions and the organisation's competitive priorities — and how to communicate that connection to every stakeholder audience.",
  keyTakeaway:
    "AI is not a strategy — it is an enabler of strategies that are already sound. Every AI investment must trace its value chain to a stated competitive priority or customer outcome. The leaders who establish and maintain this connection govern programmes that deliver; the ones who let AI become its own strategic direction govern programmes that drift.",
  pmCallout:
    "As a business leader: strategic alignment is your responsibility, not the technology team's. They will solve the problem you give them — the question is whether you gave them the right problem. Set the strategic anchor before the initiative is designed.",
  sections: [
    buildSection({
      number: "6.1",
      title: "Why AI Programmes Fail to Connect to Strategy",
      subtitle: "The four disconnects that produce technically impressive drift",
      take: "AI programmes drift from strategy through four recurring patterns: technology-first investment that starts with capability rather than strategic need; siloed AI ownership that keeps AI decisions inside the technology function; planning process separation where AI is not integrated into the annual strategy cycle; and communication failure where AI progress is reported in technology terms that senior leaders cannot evaluate against strategic goals.",
      why: "Understanding the failure patterns allows business leaders to design structural protections against them — not as additional process, but as changes to how AI investment decisions are made from the beginning.",
      paragraphs: [
        [
          s("Technology-first AI investment is the most common source of strategic drift. "),
          x(
            "When the technology function owns AI investment decisions, they naturally prioritise technical sophistication, engineering interest, and vendor relationships. These are not strategic selection criteria. The most technically interesting AI projects consistently fail to be the most strategically valuable ones.",
            "The structural fix is straightforward: business strategy leaders own the investment priorities; technology leaders own the implementation design. Separating these two responsibilities prevents technology preference from masquerading as strategic choice.",
          ),
          s(" Business leaders own the priority; technology leaders own the design. The order matters."),
        ],
        [
          s("Siloed AI ownership prevents cross-functional strategic integration. "),
          x(
            "When AI is owned by a dedicated 'AI team' or 'AI CoE' (Centre of Excellence), it becomes a service provider to the business rather than an embedded capability within it. Service providers optimise for utilisation — keeping the team busy and producing deliverables. Strategic alignment requires optimising for business outcomes — sometimes requiring the AI team to say no to a request that does not serve a priority.",
            "The structural fix: AI investment decisions are made by cross-functional governance committees with business unit leaders as voting members — not by the AI CoE alone. The AI CoE is the executor; the business governance committee is the decision-maker.",
          ),
          s(" AI CoE executes; business governance decides. Cross-functional ownership prevents silo drift."),
        ],
        [
          s("Planning process separation creates strategic gaps. "),
          x(
            "In most organisations, the annual strategy planning process and the AI investment planning process are separate. The strategy process identifies competitive priorities in September; the AI planning process begins in November; by the time AI investment decisions are made in January, the strategic priorities have been filtered through three organisational layers and the connection has been attenuated.",
            "The structural fix: AI investment planning is integrated into the annual strategy process, not run in parallel with it. AI investment proposals originate from strategy workstreams, not from a separate AI pipeline.",
          ),
          s(" Integrate AI into the strategy process — do not run them in parallel and hope they connect."),
        ],
        [
          s("Communication failure between AI progress and strategic goals is invisible until it becomes a crisis. "),
          x(
            "AI progress reported in technology terms — model accuracy, inference latency, API calls processed — cannot be evaluated by senior leaders against strategic goals. The connection between 'model accuracy improved from 89% to 93%' and 'our strategy to retain premium customers is on track' is not obvious. When senior leaders cannot evaluate AI progress against strategy, they defer to the technology team's assessment — which optimises for technology success, not business outcome.",
            "The structural fix: all AI progress reporting includes a strategic alignment line — explicitly connecting the metric to the strategic priority it serves. 'Accuracy improvement to 93% brings the fraud detection system above the threshold required to deploy in all regions, enabling our risk management strategy objective of consistent customer protection standards across markets.'",
          ),
          s(" Every AI metric must have a strategic alignment line — connecting technical progress to business priority."),
        ],
      ],
      examples: [
        {
          title: "A financial services group — technology-first drift",
          body: "A financial services group's AI team produced 11 deployed models in 18 months. The Group CEO's assessment at the strategy review: 'I cannot point to a single strategic priority that has measurably advanced because of this programme.' The AI team had optimised for technical delivery; nobody had maintained the connection to the strategic plan. A restructuring of governance — business strategy leaders co-owning investment decisions — produced a fundamentally different portfolio in the next cycle.",
        },
        {
          title: "A telecoms operator — integrated planning produces alignment",
          body: "A European telecoms operator integrated AI investment planning into its annual strategy refresh in year two of the programme. Each strategic initiative team was required to include an 'AI enablement assessment' in their strategy document: which AI capabilities would accelerate progress against this initiative, and what data and infrastructure investments were required. The AI portfolio that emerged from the strategy process was materially different from — and more strategically coherent than — the AI portfolio the technology team would have designed independently.",
        },
        {
          title: "A bank — strategic alignment line in reporting",
          body: "A bank's AI programme adopted a reporting standard: every update to the executive committee must include a one-sentence strategic alignment statement for each initiative. 'This initiative supports our strategy objective of reducing the cost-to-serve for mass market customers by 20% in three years — current trajectory: 12% reduction achieved.' The format initially required additional work from programme managers. Within two quarters, the format improved — and executive committee members reported that they could, for the first time, assess AI progress against strategic goals.",
        },
      ],
    }),
    buildSection({
      number: "6.2",
      title: "Mapping AI to Strategic Priorities",
      subtitle: "The discipline that converts a technology wish list into a strategic portfolio",
      take: "Every AI initiative in your portfolio must trace to a stated strategic priority. The tracing exercise — explicitly connecting initiative to priority to business metric to competitive outcome — reveals which initiatives are strategically anchored and which are free-floating. Free-floating initiatives are the first candidates for deferral when portfolio capacity is constrained.",
      why: "Strategic mapping creates accountability in both directions: AI must justify its investment against strategy, and strategy must be explicit enough to be evaluated by AI investments. Leaders who do this mapping regularly find that their stated strategy and their actual AI investment tell two different stories.",
      paragraphs: [
        [
          s("Build the mapping as a four-column table. "),
          x(
            "Column one: stated strategic priority (from the annual strategic plan). Column two: the business metric the priority targets (customer retention rate, market share, cost per transaction). Column three: the AI initiative(s) supporting this priority. Column four: the expected contribution of each AI initiative to the metric.",
            "This table makes visible: which strategic priorities have no AI support (strategic gap), which AI initiatives have no strategic priority parent (free-floating), and which priorities have disproportionate AI investment relative to their strategic weight.",
          ),
          s(" The four-column table is the strategic alignment audit — run it before every annual portfolio review."),
        ],
        [
          s("Resolve strategic gaps before adding new initiatives. "),
          x(
            "A strategic priority with no AI support is not necessarily a gap — it may be a priority that AI cannot accelerate, or one that requires non-AI investment to progress. But discovering the gap before adding new initiatives prevents a portfolio that grows in areas of enthusiasm while missing areas of strategic need.",
            "The discipline: for every strategic gap identified, the portfolio review should produce either an AI initiative that closes the gap, a documented rationale for why AI is not the right lever for this priority, or a data foundation investment that makes AI viable for this priority in a future cycle.",
          ),
          s(" Every strategic gap gets a disposition: AI initiative, non-AI rationale, or data foundation investment."),
        ],
        [
          s("Challenge free-floating initiatives before the next cycle. "),
          x(
            "An AI initiative that cannot be mapped to a stated strategic priority is either addressing an unstated priority (which should be made explicit) or addressing a preference that has not risen to strategic significance (which should be deferred). Neither of these is obvious — both require a leadership conversation that the mapping table makes unavoidable.",
            "Free-floating initiatives are not automatically wrong — sometimes they address emerging opportunities that the formal strategy cycle has not yet recognised. The correct response is to bring the opportunity into the strategy process for explicit prioritisation, not to continue funding it informally outside the strategic framework.",
          ),
          s(" Free-floating initiatives must be brought into the strategy process — they cannot live permanently outside it."),
        ],
      ],
      examples: [
        {
          title: "An insurer — strategic gap discovery",
          body: "An insurer's strategic alignment mapping revealed that its digital distribution strategy — a top-three priority in the annual plan — had no AI initiative support. All AI investment was in operational efficiency (claims processing, fraud detection). The mapping discovery prompted a new AI programme workstream: AI-powered underwriting personalisation for digital channels. The initiative had been missing from the AI portfolio because digital distribution was owned by the commercial team, not the technology team — and cross-functional mapping was the mechanism that surfaced it.",
        },
        {
          title: "A bank — free-floating initiative resolved",
          body: "A bank's AI portfolio audit identified an AI market intelligence monitoring tool that had been running for 14 months without a strategic priority parent. The initiative had been approved at the request of the Chief Strategy Officer's office but had never been formally mapped to a strategic objective. The mapping exercise triggered a conversation: the tool was producing genuinely useful outputs, but the consumption workflow had never been designed. It was either a strategic intelligence capability (which required a formal consumption process and a strategy objective parent) or a research exercise (which should be budgeted as such and not counted in the AI portfolio).",
        },
        {
          title: "A retailer — mapping table changes portfolio composition",
          body: "A retailer's annual strategic alignment mapping found that its top strategic priority — profitable growth in the premium segment — had £180K of AI investment support, while its fourth-ranked priority — supply chain cost reduction — had £2.1M. The mapping made explicit what individual initiative reviews had not: the portfolio was heavily weighted toward cost reduction relative to the strategic priority hierarchy. The rebalancing that followed moved £800K from lower-priority supply chain initiatives to customer intelligence investments supporting premium growth.",
        },
      ],
    }),
    buildSection({
      number: "6.3",
      title: "AI as Enabler, Not Strategy",
      subtitle: "The distinction that keeps your AI investment honest",
      take: "AI is an enabler of business strategies, not a strategy in itself. 'We are an AI company' is not a business strategy. 'We use AI to serve customers faster than our competitors at a lower cost to serve' is a business strategy with AI as the enabler. Leaders who treat AI as the strategy invest in capability for its own sake. Leaders who treat AI as an enabler invest in capability because of a specific competitive outcome they are pursuing.",
      why: "When AI becomes the strategy rather than the enabler, investment decisions are made on capability grounds (we need more AI) rather than business outcome grounds (we need to close this competitive gap). Capability-driven investment produces impressive portfolios and disappointing P&Ls.",
      paragraphs: [
        [
          s("The enabler test has one question: what business outcome does this AI capability enable? "),
          x(
            "If the answer is 'it demonstrates our AI leadership' or 'it gives us capability we may use later', the initiative is strategy-in-itself. If the answer is 'it reduces cost-to-serve in our premium segment from £48 to £32 per customer per year, enabling margin improvement that funds our market expansion plan', the initiative is a strategy enabler.",
            "The enabler test is a discipline to apply in every investment conversation — not a retrospective audit. Proposals that cannot answer the test in specific, outcome-form terms should not receive investment approval.",
          ),
          s(" Apply the enabler test at investment approval — not post-mortem."),
        ],
        [
          s("'Being an AI company' is a market positioning claim, not a competitive strategy. "),
          x(
            "Market positioning that says 'we use AI' is a claim about how you deliver, not about what competitive advantage that delivery creates. Customers do not value AI — they value speed, accuracy, personalisation, cost, and reliability. When AI creates those outcomes better than alternatives, it creates competitive advantage. When it does not, it creates cost.",
            "The positioning discipline: always complete the sentence 'we use AI to deliver [specific customer outcome] better/faster/cheaper than [alternative]'. The completed sentence is a competitive strategy. 'We use AI' alone is a technology claim.",
          ),
          s(" Complete the sentence: we use AI to deliver [outcome] better than [alternative]. That is the strategy."),
        ],
        [
          s("The enabler discipline prevents AI capability accumulation. "),
          x(
            "Organisations that treat AI as strategy accumulate AI capabilities in advance of the business cases that would justify them. They have MLOps infrastructure before ML models, data lakes before data consumers, and AI governance frameworks before AI initiatives.",
            "The opposite failure is also real: organisations that wait for perfect strategy alignment before any AI investment cannot respond to competitive moves that require existing capability. The healthy tension is between 'don't invest ahead of strategy' and 'build the foundation capabilities that strategy-enabling AI requires'. The foundation capabilities — data infrastructure, governance frameworks, ML serving — are justified by the strategy; the application capabilities are justified by specific initiatives.",
          ),
          s(" Foundation capabilities are justified by strategy; application capabilities are justified by specific initiatives."),
        ],
      ],
      examples: [
        {
          title: "Amazon — AI as enabler of specific competitive strategies",
          body: "Amazon's AI investment is consistently framed around specific competitive outcomes: recommendation AI enables the 'customers who bought this' discovery that drives basket size; demand forecasting AI enables the inventory positioning that enables same-day delivery; Alexa AI enables the ambient commerce strategy. Each AI capability traces to a specific competitive outcome. 'We are an AI company' is never the strategy — the strategies are specific, and AI is specifically enabling each one.",
        },
        {
          title: "A telecoms operator — AI capability accumulation warning",
          body: "A European telecoms operator invested £4.2M in AI infrastructure over 18 months — data platform, MLOps tooling, AI governance framework, and an internal AI capability centre — before any business case justified any of it. The investment was framed as 'building AI readiness'. Eighteen months later, the infrastructure was underutilised because the business cases that would have consumed it had not been identified or approved. The foundation investment preceded strategy rather than following it.",
        },
        {
          title: "A bank — completing the sentence",
          body: "A bank's Chief Digital Officer introduced a discipline for AI investment proposals: every proposal must complete the sentence 'We use [this AI capability] to deliver [specific customer outcome] better than [the current approach or competition], which advances [specific strategic objective].' In the first cycle, eight of twelve submitted proposals could not complete the sentence without vague or circular answers. The four that could were approved. The eight were returned for revision. Three of the eight were later resubmitted with complete sentences and approved. Five were withdrawn — their sponsors could not identify a specific customer outcome the AI was enabling.",
        },
      ],
    }),
    buildSection({
      number: "6.4",
      title: "AI and Competitive Positioning",
      subtitle: "Where AI creates competitive advantage — and where it is table stakes",
      take: "AI creates competitive advantage only when it produces customer outcomes or cost structures that competitors cannot match at acceptable cost. When all competitors have access to the same AI tools and data, AI is table stakes — a cost of participation, not a source of advantage. Business leaders must be honest about which their AI initiatives are, because the investment logic differs fundamentally.",
      why: "Confusing table-stakes AI with competitive-advantage AI leads to over-investment in commoditising capability and under-investment in genuinely differentiating capability. The distinction is not obvious from the technology — it comes from competitive analysis.",
      paragraphs: [
        [
          s("Competitive advantage from AI requires one of three conditions. "),
          x(
            "Proprietary data that competitors cannot access — your customer interaction history, your operational process data, your clinical outcomes database — enables AI models that are structurally superior to what competitors can build. Network effects that compound with AI — platforms where more users generate more data that improves AI for all users — create widening advantages. First-mover switching costs — when customers build workflows and preferences around your AI that are difficult to replicate with a competitor's system — create durable advantage even without ongoing model superiority.",
            "Absent one of these three conditions, AI is likely to be table stakes within 18 to 36 months of widespread adoption. Table stakes AI is worth investing in — but as operational efficiency, not competitive differentiation.",
          ),
          s(" Test every AI initiative for which of the three competitive advantage conditions it meets — if none, it is table stakes."),
        ],
        [
          s("Table stakes AI has different investment logic than competitive AI. "),
          x(
            "Table stakes AI should be bought and deployed at minimum cost — it should not receive differentiated investment or be built internally unless there is a cost advantage to doing so. It should be evaluated on ROI, not on competitive differentiation. And it should be replaced when better vendor solutions appear rather than maintained through internal capability loyalty.",
            "Competitive AI should receive investment proportionate to the advantage it creates and the duration over which that advantage is sustainable. When the advantage begins to commoditise — as competitors adopt similar capability — the investment logic changes, and business leaders must be willing to shift from differentiating to table-stakes investment mode.",
          ),
          s(" Table stakes: buy at minimum cost. Competitive: invest proportionate to sustainable advantage."),
        ],
        [
          s("Competitive intelligence on AI adoption is an ongoing governance responsibility. "),
          x(
            "The competitive position of an AI capability changes as the vendor market evolves, as competitors adopt similar capabilities, and as customers raise their expectations. An AI capability that is differentiating today may be table stakes in 18 months. Business leaders who monitor competitive AI adoption and adjust investment logic accordingly make better capital allocation decisions than those who assess competitive positioning once at initiative approval and never revisit it.",
            "Practical mechanism: include a competitive AI positioning update as a standard item in the quarterly portfolio review — not a detailed intelligence report, but a 10-minute update on whether the competitive assumptions underlying current portfolio investments remain valid.",
          ),
          s(" Competitive positioning of AI investments must be reviewed quarterly, not just at approval."),
        ],
      ],
      examples: [
        {
          title: "Netflix — proprietary data as sustained competitive AI advantage",
          body: "Netflix's recommendation AI advantage rests on viewership data from 250M+ subscribers across 190 countries — a dataset no competitor can replicate. When streaming competitors built recommendation AI, they built it on their own smaller datasets. Netflix's advantage is not the algorithm — competitors have access to similar algorithms. The advantage is the data that makes the algorithm learn. Proprietary data is the competitive moat.",
        },
        {
          title: "CRM AI features — table stakes within 18 months",
          body: "In 2022, AI meeting summaries, lead scoring, and email personalisation were differentiating features for CRM vendors. By 2024, every major CRM platform included them. For businesses evaluating CRM AI investment in 2025, these features are table stakes — the purchase decision is determined by integration quality and total cost, not by AI sophistication. Organisations that invested in building custom CRM AI in 2022 found their investment commoditised faster than the build programme completed.",
        },
        {
          title: "A bank — quarterly competitive positioning update",
          body: "A regional bank included a quarterly competitive AI positioning update in its portfolio review — a 15-minute assessment covering: competitor AI announcements in the past quarter, vendor market developments (new products, price changes, acquisitions), and customer expectation changes identified through voice-of-customer surveys. In Q2, the update identified that two competitors had deployed AI fraud alerts that reduced false positives by 40%. The bank's fraud alert false positive rate was a documented customer complaint driver. The competitive intelligence accelerated the fraud alert AI initiative from Horizon 2 to Horizon 1.",
        },
      ],
    }),
    buildSection({
      number: "6.5",
      title: "AI and Business Model Change",
      subtitle: "When AI enables a genuinely different way of competing",
      take: "In some industries and for some organisations, AI does not just improve existing business models — it enables fundamentally different ones. Business leaders who understand when AI has business model implications — not just process improvement implications — can position their organisations for category leadership rather than incremental improvement.",
      why: "Business model AI thinking is rare and high-value. Most AI programmes are focused on operational efficiency. The leaders who recognise business model change opportunities and position their organisations to pursue them create the greatest long-term value from AI investment.",
      paragraphs: [
        [
          s("Business model change from AI has three patterns. "),
          x(
            "Outcome-based pricing: AI enables cost structures that make pay-per-outcome pricing viable where per-seat or transaction pricing previously dominated. Rolls-Royce 'power by the hour', insurance pay-per-mile, and legal AI subscription by matter outcome are all AI-enabled outcome models. Autonomous delivery: AI reduces human labour requirements enough to change the unit economics of delivery at scale — autonomous logistics, AI-drafted professional services, algorithmic investment management. Personalisation at population scale: AI enables mass customisation that was economically viable only at premium pricing, making it accessible to mass markets and disrupting premium-mass price segmentation.",
            "Each pattern is disruptive to existing business models — for incumbents and for competitors equally. Recognising which pattern your AI capabilities are approaching changes the strategic conversation.",
          ),
          s(" Identify which business model change pattern your AI capabilities are approaching — it changes the investment logic."),
        ],
        [
          s("Business model exploration requires protected experimentation outside the operational portfolio. "),
          x(
            "Business model AI exploration cannot be governed like operational AI investment. The ROI model, the time horizon, the governance cadence, and the success metrics are all different. Operational AI delivers measurable outcomes against stated metrics in 6-18 months. Business model exploration may require 3-5 years of investment before the business model thesis is confirmed or invalidated.",
            "The practical implication: business model AI exploration should have its own governance track — a separate budget, a board-level sponsor, and an innovation cadence rather than a quarterly operational review. Applying operational portfolio governance to business model exploration will defund it in the first quarterly review when it produces no measurable outcome.",
          ),
          s(" Business model exploration requires a separate governance track — not operational portfolio governance."),
        ],
        [
          s("Most organisations should explore one business model hypothesis, not several simultaneously. "),
          x(
            "Business model exploration is resource-intensive, strategically disruptive, and — by definition — uncertain in outcome. Organisations that pursue multiple simultaneous business model hypotheses divide leadership attention and organisational focus in ways that reduce the probability of any one hypothesis succeeding.",
            "The selection criterion: which business model change, if successfully realised, would create the largest sustainable competitive advantage relative to current competitors? That is the one worth exploring. The others are interesting — and can be evaluated in a subsequent cycle if the first exploration succeeds or is concluded.",
          ),
          s(" One business model hypothesis at a time — selection criterion is maximum sustainable competitive advantage."),
        ],
      ],
      examples: [
        {
          title: "Lemonade — AI-enabled business model, not just AI feature",
          body: "Lemonade's AI model is not a feature added to a traditional insurance business model. It is the foundation of a fundamentally different business model: instant underwriting, instant claims, charitable giving of unused premium. The AI enables the speed and cost structure that makes the model viable — remove the AI and the model collapses. Business leaders in insurance who evaluated Lemonade as a 'competitor with good technology' missed the more important frame: they were facing a competitor with a different business model enabled by AI.",
        },
        {
          title: "A professional services firm — outcome-based pricing exploration",
          body: "A mid-size accounting firm identified that AI document review capabilities were approaching the efficiency threshold where outcome-based audit pricing — a fee per finding rather than per hour — could be commercially viable. They created a protected exploration programme: a separate team, a three-year horizon, a Board partner as sponsor, and distinct metrics (number of outcome-pricing pilots, client retention under the model, margin at scale). The operational portfolio continued on hourly billing. The exploration programme ran independently. After 18 months, one outcome-pricing pilot showed margin improvement of 22% over the hourly equivalent — sufficient to begin a phased commercial expansion.",
        },
        {
          title: "A logistics company — single hypothesis discipline",
          body: "A logistics company identified three AI-enabled business model hypotheses: fully autonomous last-mile delivery, dynamic pricing at order-by-order level, and an AI freight brokerage marketplace. The executive team was tempted to pursue all three simultaneously given competitive pressure. A strategic facilitation session applied the selection criterion: which hypothesis creates the largest sustainable competitive advantage? Dynamic pricing at order-by-order level won — because the company had proprietary routing data that competitors lacked, creating a defensible moat. Autonomous delivery and the marketplace were filed as future evaluation candidates. The single hypothesis received full exploration resources.",
        },
      ],
    }),
    buildSection({
      number: "6.6",
      title: "AI in the Budget Cycle",
      subtitle: "Getting AI investment decisions made at the right time with the right evidence",
      take: "AI investment decisions that are made during budget season — under time pressure, with incomplete evidence, and competing against non-AI investment priorities — produce worse outcomes than those that are prepared through the year and presented to the budget process with a pre-formed case. Business leaders who work the budget calendar get AI funded; those who arrive at budget season with an undeveloped portfolio get deferred.",
      why: "Budget cycles have fixed timelines and decision criteria. AI investment proposals that are developed in response to the budget cycle, rather than in advance of it, consistently fail the evidence bar that finance teams apply — because the evidence cannot be assembled in weeks.",
      paragraphs: [
        [
          s("The AI business case should be complete six months before budget season. "),
          x(
            "A complete AI business case — with value hypothesis validated against data, pilot evidence if available, three-year TCO model, and strategic alignment mapping — requires three to four months to assemble with appropriate rigour. Starting the business case development in response to a budget call produces an incomplete case presented to finance under time pressure.",
            "Six months before budget season means the business case development commences after the previous year's strategic planning cycle — which provides the strategic priority inputs that the business case needs. This timing is not bureaucratic; it is the minimum time required to assemble credible evidence.",
          ),
          s(" Begin business case development at strategy cycle close, not at budget season open."),
        ],
        [
          s("Finance teams evaluate AI investment on the same criteria as other capital investment. "),
          x(
            "CFOs and finance committees do not have a special AI investment framework — they have a capital allocation framework that applies to all investment decisions. The criteria are consistent: expected return, time to return, risk profile, and strategic fit. AI business cases that present these criteria in AI-specific language ('model accuracy', 'inference cost', 'training data volume') without translating them to financial language ('expected cost reduction per unit', 'time to positive ROI', 'probability-weighted return range') fail on communication before they fail on merit.",
            "The translation discipline: every AI metric in the business case must have a financial expression alongside it. The finance team does not need to understand model accuracy — they need to understand what accuracy improvement means for the business outcome the investment is targeting.",
          ),
          s(" Every AI metric needs a financial expression — never present AI metrics alone to finance."),
        ],
        [
          s("Multi-year AI investment requires a multi-year budget commitment, not annual re-approval. "),
          x(
            "AI programmes that must re-justify their investment annually are systematically underfunded — because each annual justification must be made before all the value has been delivered, and the case is weaker than it will be when the programme matures.",
            "The budget mechanism for AI programmes is a multi-year envelope with annual performance gates: a total three-year investment commitment, released in annual tranches, with release conditions based on performance evidence from the previous tranche. This gives the programme planning certainty while giving finance cost control and performance accountability.",
          ),
          s(" Propose a multi-year envelope with annual performance gates — not annual re-approval."),
        ],
      ],
      examples: [
        {
          title: "A bank — six-month development produces a funded case",
          body: "A retail bank's CDO built a new AI investment cycle: strategic priority mapping in Q2, business case development in Q3, CFO pre-consultation in Q3, budget presentation in Q4 with a complete case. The first year, two AI initiatives were funded with minimal challenge — the most productive budget conversation the AI programme had experienced. Previously, AI investment proposals had been developed in September for an October budget cycle, routinely returning from finance with insufficient evidence requests.",
        },
        {
          title: "A manufacturer — financial translation",
          body: "A manufacturer's AI business case initially presented ROI in AI terms: 'Model accuracy at 94% reduces false positive inspection rate by 62%.' Finance returned it with a request for financial translation. Revised case: '94% model accuracy enables a false positive rate of 3.2% versus 8.4% current, producing 1,400 fewer manual reinspections per month at £85 fully-loaded cost per inspection, generating £119,000 annual cost avoidance.' The translation took three hours. The business case was approved in the next cycle without further challenge.",
        },
        {
          title: "An insurer — multi-year envelope approved",
          body: "An insurer proposed a three-year AI claims transformation envelope of £4.8M: £1.2M in year one (pilot phase), £2.1M in year two (scale-up), and £1.5M in year three (optimisation and steady-state). Year two and three releases were conditional on year one performance gates: accuracy threshold, adoption milestone, and cost-reduction evidence. The finance committee approved the envelope rather than requiring annual re-submission. The programme manager noted that planning certainty alone — knowing year two budget was contingent on performance, not on a new approval process — improved programme quality.",
        },
      ],
    }),
    buildSection({
      number: "6.7",
      title: "The AI Strategy Narrative",
      subtitle: "Telling the story of your AI investment in a way that stakeholders remember and support",
      take: "Every AI programme needs a narrative — a simple, compelling story that explains why you are investing in AI, what you are trying to achieve, and how you will know if you are succeeding. The narrative is not spin — it is the communication tool that makes a complex multi-year investment programme comprehensible to stakeholders who cannot attend your quarterly reviews.",
      why: "AI programmes without a clear narrative produce stakeholder confusion that leads to inconsistent support. When every stakeholder has a different mental model of what the AI programme is for, every resource conversation produces friction. A clear narrative aligns expectations and earns consistent support.",
      paragraphs: [
        [
          s("A good AI narrative has three components: the problem, the response, and the evidence. "),
          x(
            "The problem: what competitive or operational pressure is the programme addressing? This must be specific — not 'we need to be more digital' but 'our cost to serve has increased 18% in three years while competitors have held theirs flat; AI is our primary lever to reverse this.'",
            "The response: what AI investments are you making and in what sequence? Not a list of technical initiatives but a clear statement of the capability bets. The evidence: how will you know the programme is working? Specific metrics, specific milestones, specific review cadence.",
          ),
          s(" Problem, response, evidence — in that order. Never lead with the technology."),
        ],
        [
          s("Tailor the narrative to each stakeholder audience, not just the message. "),
          x(
            "The board narrative emphasises competitive positioning, risk management, and three-year value trajectory. The employee narrative emphasises what AI means for how they work, what skills will be valued, and what the organisation's investment in their development looks like. The customer narrative — when relevant — emphasises the experience improvement, the privacy and governance commitments, and the value created for them specifically.",
            "The same facts support all three narratives. The emphasis, vocabulary, and frame differ. A narrative designed for one audience and delivered to another consistently produces misalignment — either over-alarmed employees or under-informed boards.",
          ),
          s(" Different stakeholders need different narrative frames — same facts, different emphasis."),
        ],
        [
          s("Consistency of narrative over time is more valuable than sophistication at any one point. "),
          x(
            "Stakeholders who hear the same strategic narrative for AI at every touchpoint — board presentation, all-hands, manager briefing, annual review — develop a stable mental model of what the programme is for and what success looks like. Stakeholders who hear different framings at different points develop inconsistent models that produce inconsistent support.",
            "The discipline: write the core narrative statement — two to three sentences — at the programme outset. Review it once per year against strategic reality. Adjust it only when the strategic context has materially changed. This is the 'north star statement' for all AI communications.",
          ),
          s(" Write the north star statement at programme outset; review annually; adjust only on material change."),
        ],
      ],
      examples: [
        {
          title: "A retailer — three-component narrative",
          body: "A fashion retailer's AI programme north star: 'Our customers are choosing competitors who can predict what they want before they search. We are building AI that personalises our range, our pricing, and our communication at the individual customer level — turning our 12M customer dataset into a competitive advantage our competitors cannot acquire. We will know it's working when our customer retention rate reaches 68% from 61% today.' Problem, response, evidence. The statement was used unchanged in board presentations, management briefings, and team communications for 18 months.",
        },
        {
          title: "A bank — employee narrative that prevented talent attrition",
          body: "A bank's AI automation programme had a board narrative emphasising cost efficiency. The employee narrative — using the same cost efficiency framing — produced anxiety about job security that increased attrition in the operations teams being automated. A redesigned employee narrative: 'We are redeploying 200 processing roles toward customer relationship work and AI oversight roles — and investing £3M in upskilling over three years. The operations team that runs AI is more valuable than the operations team that does the work AI can do.' Attrition reduced. The board narrative and the employee narrative required different emphasis on the same programme.",
        },
        {
          title: "An insurer — consistent narrative across 24 months",
          body: "An insurer's Group Chief Executive delivered the same three-sentence AI programme statement at every board meeting, executive update, and analyst briefing for 24 months. At month 24, an analyst noted: 'This is the only insurance AI programme where I have a clear sense of what it is for and whether it is working.' Consistency of narrative — not sophistication — produced that outcome. The three-sentence statement had been written at programme outset and reviewed once at month 12 with no material change required.",
        },
      ],
    }),
    buildSection({
      number: "6.8",
      title: "The Annual AI Strategy Review",
      subtitle: "Business leader's guide to refreshing strategic alignment once a year",
      take: "Once per year, the AI investment portfolio and the business strategy must be assessed against each other in a formal alignment review. The review asks: does the current portfolio still reflect the right strategic priorities given how the business and competitive landscape have evolved? The answer produces a portfolio adjustment and a refreshed narrative — the strategic foundation for the next investment cycle.",
      why: "Annual alignment reviews prevent portfolio drift — the gradual accumulation of initiatives that made strategic sense when they were approved but are no longer well-connected to current priorities. Without an annual review, the portfolio represents a historical strategy, not the current one.",
      paragraphs: [
        [
          s("Run the alignment review as a two-part session: strategic context first, portfolio assessment second. "),
          x(
            "Part one: review the strategic plan changes from the past year — new priorities, deprecated priorities, revised competitive assessments, and material business condition changes. Part two: assess the current AI portfolio against the updated strategic context using the four-column mapping from section 6.2.",
            "Running the sessions in this order ensures portfolio assessment is done against current strategic context, not the context in which the initiatives were originally approved. The one-year gap between initiative approval and the annual review is sufficient for strategic priorities to have shifted materially in most organisations.",
          ),
          s(" Strategic context review before portfolio assessment — never in the reverse order."),
        ],
        [
          s("Four outputs should emerge from the annual review. "),
          x(
            "Portfolio adjustments: initiatives stopped, redesigned, or accelerated based on changed strategic alignment. New initiative candidates: opportunities identified by the updated strategic context that were not in the previous cycle's portfolio. Narrative refresh: updates to the three-component AI programme narrative that reflect strategic evolution. Governance mechanism review: assessment of whether the quarterly review cadence, gate criteria, and reporting standards are serving the governance function.",
            "Each output has a named owner and a timeline. The annual review is not a planning session — it produces specific decisions with specific follow-through commitments.",
          ),
          s(" Four outputs, each with an owner and a timeline — the review produces commitments, not conclusions."),
        ],
        [
          s("The annual review is the business leader's strategic accountability moment. "),
          x(
            "The annual review is the point at which the business leader who owns the AI programme answers the question: 'Given what we know now about our competitive position, our business performance, and our AI programme's results — is this the right investment?' The answer requires direct knowledge of the portfolio, honest assessment of the strategic context, and the willingness to stop or adjust investments that are no longer the right ones.",
            "Leaders who treat the annual review as a retrospective — reporting on what happened — miss its primary purpose: prospective — determining what should happen next. A retrospective looks back; a strategic alignment review looks forward from an honest assessment of current position.",
          ),
          s(" The annual review is prospective, not retrospective — its output is the next cycle's foundation."),
        ],
      ],
      examples: [
        {
          title: "A financial services group — strategic context change produces portfolio adjustment",
          body: "A financial services group's annual AI strategy review occurred during a period of regulatory change: a new AI liability framework had been published that reclassified three of the group's AI initiatives as higher risk categories requiring enhanced governance. The strategic context review (part one) surfaced the regulatory change; the portfolio assessment (part two) produced three decisions: two initiatives required governance redesign before proceeding, one was stopped pending regulatory clarity. Without the annual review timing the regulatory assessment against the portfolio, these adjustments would have been discovered initiative-by-initiative over the following six months.",
        },
        {
          title: "A manufacturer — new initiative candidates from strategic context",
          body: "A manufacturer's annual AI strategy review identified a new strategic priority that had emerged mid-year: supply chain resilience following a raw material disruption. The strategic context review surfaced it as a top-three priority. The portfolio assessment found no AI initiative supporting it. The review produced a decision to commission a use case assessment for AI supply chain risk monitoring — an initiative that would not have appeared in the portfolio without the strategic context review surfacing the gap.",
        },
        {
          title: "An insurer — governance mechanism review",
          body: "An insurer's annual AI strategy review included a governance mechanism review that found: quarterly review attendance by business unit leaders had fallen from four to two per quarter over the year, and decision rates (decisions per review) had declined from 3.8 to 1.2. The governance review produced a mechanism redesign: quarterly reviews were restructured, pre-read requirements were tightened, and business unit leader attendance was made an explicit performance expectation for CDO direct reports. Decision rate recovered to 3.1 in the subsequent two quarters.",
        },
      ],
    }),
  ],
  quiz: [
    {
      q: "Your AI programme has deployed 8 models in 18 months. The CEO asks what strategic objective has measurably advanced. You cannot answer clearly. What governance failure does this reveal?",
      options: [
        "The models were technically inferior.",
        "AI investment decisions were made without strategic priority mapping — the portfolio was built on technical feasibility and team enthusiasm, not on stated business priorities.",
        "The CEO does not understand AI.",
        "18 months is too short to see strategic impact.",
      ],
      correct: 1,
      correctFeedback:
        "Right. The inability to connect deployed AI to strategic progress is a governance failure — specifically, the absence of strategic alignment mapping at investment approval. The models may work perfectly and still produce no strategic outcome. Re-read sections 6.1 and 6.2.",
      wrongFeedback:
        "Technical success without strategic connection is the most common AI programme failure pattern. The failure is governance, not technology. Re-read section 6.1.",
    },
    {
      q: "A colleague proposes 'our strategy should be to become an AI company'. What is the correct strategic response?",
      options: [
        "Agree — AI company positioning earns premium market multiples.",
        "Challenge: AI is an enabler, not a strategy. The strategy must specify what competitive outcome AI enables — for which customers, against which competitors, on which dimensions of value.",
        "Defer to the technology team to define what an AI company means.",
        "Accept it as a positioning statement while keeping the operational strategy unchanged.",
      ],
      correct: 1,
      correctFeedback:
        "Right. 'AI company' is a positioning claim, not a competitive strategy. The strategic question is what customer outcome AI enables better than alternatives — that is the competitive strategy. AI is the enabler. Re-read section 6.3.",
      wrongFeedback:
        "AI capability without a specific competitive outcome it is enabling is capability accumulation, not strategy. Re-read section 6.3.",
    },
    {
      kind: "categorize",
      q: "Sort each AI initiative description into whether it is strategic alignment or strategic drift.",
      categories: ["Strategically aligned", "Strategic drift"],
      items: [
        { text: "AI invoice matching deployed because it was technically feasible and the vendor offered a good demo.", category: 1 },
        { text: "AI customer retention scoring deployed to support the stated strategic priority of reducing premium customer churn by 4 points.", category: 0 },
        { text: "AI capability centre built because competitors are investing in AI talent.", category: 1 },
        { text: "AI supply chain risk monitoring deployed to support the strategic priority of 99% on-shelf availability for core SKUs.", category: 0 },
      ],
      correctFeedback:
        "Right. Strategically aligned initiatives trace to a stated priority with a specific business metric. Strategically drifted initiatives are justified by technical feasibility, competitive imitation, or vendor enthusiasm — not by a strategic business outcome. Re-read sections 6.1 and 6.2.",
      wrongFeedback:
        "Strategic alignment requires a traceable connection from initiative to strategic priority to business metric. Technical feasibility or competitive pressure alone are not strategic alignment justifications. Re-read section 6.2.",
    },
    {
      q: "You are presenting an AI business case to the CFO. The case includes 'model accuracy improved from 85% to 93%'. What must you add?",
      options: [
        "A comparison to competitor model accuracy.",
        "The financial expression: what the accuracy improvement means in cost, revenue, or risk terms — the specific business metric that moves as a result.",
        "A technical explanation of how accuracy was measured.",
        "The vendor's track record on accuracy in comparable deployments.",
      ],
      correct: 1,
      correctFeedback:
        "Right. CFOs evaluate capital allocation decisions in financial terms. Every AI metric requires a financial expression to be evaluable in the context of an investment decision. Re-read section 6.6.",
      wrongFeedback:
        "Finance teams do not have an AI investment framework — they have a capital allocation framework. AI metrics must be translated into financial terms to be evaluated against that framework. Re-read section 6.6.",
    },
    {
      q: "A highly capable AI initiative cannot be mapped to any stated strategic priority. What is the correct governance response?",
      options: [
        "Fund it anyway — good AI is good AI regardless of strategic fit.",
        "Either bring the opportunity into the strategy process for explicit prioritisation, or defer it until a strategic home is identified. Do not fund it outside the strategic framework.",
        "Ask the technology team to map it to a priority retrospectively.",
        "Reduce its budget proportionally and let it continue as a low-priority programme.",
      ],
      correct: 1,
      correctFeedback:
        "Right. Free-floating AI initiatives must either find a strategic home through the strategy process or be deferred. Funding outside the strategic framework creates governance precedents that progressively undermine the alignment discipline. Re-read section 6.2.",
      wrongFeedback:
        "Capability without strategic home is informal strategy. The governance-correct response is to bring the initiative into the strategy process — not to fund it informally or reduce it proportionally. Re-read section 6.2.",
    },
    {
      kind: "order",
      q: "Order the annual AI strategy review activities in the correct sequence.",
      prompt: "Drag to arrange from first activity (top) to last (bottom).",
      items: [
        "Review strategic plan changes from the past year — new priorities, deprecated priorities, competitive assessment updates.",
        "Assess the current AI portfolio against the updated strategic context using the four-column mapping.",
        "Produce four review outputs: portfolio adjustments, new initiative candidates, narrative refresh, governance mechanism review.",
        "Assign owners and timelines to each output.",
      ],
      correctFeedback:
        "Right. Strategic context review before portfolio assessment ensures the portfolio is evaluated against current — not historical — strategy. Outputs with owners and timelines convert the review from a retrospective to a prospective commitment. Re-read section 6.8.",
      wrongFeedback:
        "The sequence matters: updating strategic context before assessing the portfolio ensures assessment is against current reality. Outputs without owners are conclusions without accountability. Re-read section 6.8.",
    },
  ],
});
