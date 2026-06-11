import { buildChapter, buildSection, s, x } from "../concepts-bl-helpers";

export const chapter04BlBuildBuyPartner = buildChapter({
  slug: "bl-build-buy-partner",
  number: 4,
  shortTitle: "Build, Buy, or Partner",
  title: "Build, Buy, or Partner — The Business Leader's AI Sourcing Decision",
  readingMinutes: 22,
  summary:
    "Every AI initiative requires a sourcing decision: build it internally, buy a vendor solution, or partner with a specialist. The wrong choice burns budget, time, and organisational credibility. This chapter gives business leaders the framework to make this decision rationally and defend it with finance, technology, and the board.",
  keyTakeaway:
    "Build when AI is the source of your competitive differentiation and you have the data moat to justify it. Buy when proven solutions exist and the value is in adoption, not novelty. Partner when you need speed and specialist capability you cannot build or buy as a whole. Hybrid is usually the reality — the question is which dimension you own and which you outsource.",
  pmCallout:
    "As a business leader: the build-buy-partner decision is a capital allocation decision, not a technology preference. Own the criteria, understand the cost structures, and make the call before the technology team makes it for you.",
  sections: [
    buildSection({
      number: "4.1",
      title: "The Three Paths Defined",
      subtitle: "What each option actually means in a 2026 enterprise AI context",
      take: "Build means developing AI capabilities using internal engineering and data science teams, typically from a base of open-source models or APIs. Buy means licensing a vendor's commercial AI product or platform. Partner means engaging a specialist — a consultancy, system integrator, or AI boutique — to co-develop or implement AI capability that neither purely builds nor purely buys. In practice, most enterprise AI is a hybrid of all three.",
      why: "The sourcing decision is made more clearly when each option is precisely defined. Vague options produce vague decisions — and vague decisions produce mis-allocated budgets and unclear accountability.",
      paragraphs: [
        [
          s("Build in 2026 does not mean training a foundation model from scratch. "),
          x(
            "Build means using internal engineering and ML talent to customise, fine-tune, or integrate foundation model capabilities against your proprietary data and workflows. It includes building the integration layer, the data pipeline, the evaluation framework, and the production serving infrastructure.",
            "The cost of build is primarily headcount — ML engineers, data engineers, MLOps specialists — plus the opportunity cost of their time relative to other engineering priorities. Build creates proprietary capability and internal knowledge; it also creates maintenance dependency on internal talent.",
          ),
          s(" Build ≠ research. It means internal capability development on top of foundation capabilities."),
        ],
        [
          s("Buy means licensing outcomes, not customisation. "),
          x(
            "Commercial AI products come pre-trained, pre-integrated for common workflows, and supported by the vendor's ongoing model improvement. The buyer pays for access to a solution that works on day one — or close to it. The trade-off is configurability: what the vendor built for the market may not precisely fit your process.",
            "Buying decisions are often faster than they appear in the RFP process — the delay is typically in integration and change management, not in the product itself. Leaders who underestimate integration effort consistently underestimate buy timelines.",
          ),
          s(" Buy means the model is the vendor's problem; integration and adoption are yours."),
        ],
        [
          s("Partner fills the gap between build and buy. "),
          x(
            "Partnering with a system integrator, AI consultancy, or specialist boutique provides temporary access to expertise that would take too long to hire and too short a project to sustain permanently. Partners build, they configure vendor products, or they do both simultaneously.",
            "Partnership relationships are difficult to evaluate before engagement — portfolio quality, team experience, and cultural fit matter more than proposal quality. References from comparable organisations in the same industry and at the same AI maturity level are more informative than vendor case studies.",
          ),
          s(" Partner quality is determined by who is in the room, not by what is in the proposal."),
        ],
      ],
      examples: [
        {
          title: "Capital One — build as competitive differentiation",
          body: "Capital One has maintained an internal AI engineering capability for over a decade, building proprietary credit risk models, fraud detection, and customer intelligence systems. The 'build' choice was justified by a specific argument: the data advantage from 100M+ customer relationships made internal model development superior to any vendor product trained on generic data. Build was the right answer because proprietary data was the competitive moat.",
        },
        {
          title: "A mid-size manufacturer — buy as speed",
          body: "A precision manufacturer evaluated building an AI quality control system versus buying a vision AI product from a specialist vendor. The internal build estimate was 14 months and £680K in engineering time. The vendor product cost £120K annually and deployed in 8 weeks. The vendor's product had been trained on 40M industrial images; the manufacturer had 80,000. Buy was obviously correct — the vendor's scale advantage in training data could not be replicated at any reasonable cost.",
        },
        {
          title: "An NHS trust — partner for speed with governance",
          body: "An NHS trust needed AI clinical pathway support implemented within a regulatory-compliant framework. Neither pure build (no internal ML capability) nor pure buy (no off-the-shelf product met NHS-specific clinical governance requirements) was viable. A partnered approach with a healthcare AI specialist provided the clinical AI expertise and NHS regulatory knowledge that neither the trust's internal team nor a commercial vendor could supply independently.",
        },
      ],
    }),
    buildSection({
      number: "4.2",
      title: "The True Cost of Building",
      subtitle: "What the internal build cost estimate is always missing",
      take: "Internal build estimates consistently undercount four cost categories: opportunity cost of engineering talent, the ongoing maintenance burden, the MLOps infrastructure required for production ML, and the knowledge dependency risk when key engineers leave. Total cost of build over three years is typically two to three times the initial engineering estimate.",
      why: "Leaders who approve AI build decisions on the initial engineering estimate are surprised by the compounding operational costs. Understanding the full cost structure produces honest build-versus-buy comparisons.",
      paragraphs: [
        [
          s("Engineering opportunity cost is the invisible build cost. "),
          x(
            "Senior ML engineers working on an internal AI build are not working on other engineering priorities. The opportunity cost of their time — features not built, technical debt not addressed, other AI projects not started — rarely appears in the build cost estimate but is real and often significant.",
            "A useful discipline: require the build estimate to include not just the engineers assigned to the AI project, but a paragraph describing what they will not be doing during that time. When that paragraph is read alongside the build cost, the comparison with the buy option often changes.",
          ),
          s(" Make the opportunity cost explicit before the build option is approved."),
        ],
        [
          s("Production ML requires MLOps infrastructure that prototype estimates ignore. "),
          x(
            "Getting a model to work in a test environment costs a fraction of what it costs to run it reliably in production. Model monitoring, drift detection, retraining pipelines, A/B testing infrastructure, rollback capabilities, and audit logging — none of these appear in 'we can build this in four months' estimates.",
            "A build that pilots in four months and then spends eight months in MLOps development before it is production-ready is an 12-month build — which is the honest comparison with the vendor product that can be deployed in two months.",
          ),
          s(" Request the MLOps infrastructure estimate alongside the model development estimate."),
        ],
        [
          s("Knowledge dependency risk is the build cost that never appears on a slide. "),
          x(
            "A proprietary AI system that is understood by two internal engineers and maintained by one is a business risk, not an asset. When those engineers leave — as AI talent does, at above-average rates — the system becomes a black box that costs more to maintain than it cost to build.",
            "The mitigation: documentation requirements built into the engineering specification, rotation of at least two engineers through the system at all times, and a vendor support fallback for production issues that cannot wait for new hire ramp-up. These mitigations cost money — and they belong in the build cost estimate.",
          ),
          s(" Build cost estimates that do not include knowledge retention costs are systematically understated."),
        ],
      ],
      examples: [
        {
          title: "A financial services group — opportunity cost revealed",
          body: "A financial services group approved an internal AI build for customer segmentation based on a £420K engineering estimate. Mid-project, a senior engineering leader flagged that the three ML engineers assigned had been pulled from a revenue-generating product feature team. The opportunity cost — delayed product features and associated revenue — was estimated at £1.1M. The total cost of the build, inclusive of opportunity cost, was £1.53M. The commercial segmentation product the team had declined to buy was £180K per year.",
        },
        {
          title: "A logistics company — MLOps discovery",
          body: "A logistics company's internal AI route optimisation build went from 'model ready' in month 5 to 'production deployed' in month 14. The nine-month gap was consumed by: integration with the dispatch system (3 months), monitoring and drift detection infrastructure (2 months), regulatory compliance documentation (2 months), and performance validation at scale (2 months). The initial build estimate had covered month 1-5 only. The comparison with a vendor product that had all of this built-in was not made until month 10.",
        },
        {
          title: "An insurer — knowledge dependency realised",
          body: "An insurer's proprietary AI pricing model was built by a team of three ML engineers over 18 months. Two engineers left for better-compensated roles within the following year. The remaining engineer and a new hire spent six months documenting and stabilising the system. When the regulator requested an explanation of a pricing anomaly, the team could not produce a clear answer — the model's logic had not been adequately documented during development. The regulatory inquiry cost £340K in consulting support.",
        },
      ],
    }),
    buildSection({
      number: "4.3",
      title: "The True Cost of Buying",
      subtitle: "What vendor pricing does not tell you about total cost of ownership",
      take: "Vendor AI product pricing covers the licence. It does not cover integration, customisation, data preparation, change management, governance design, or the ongoing cost of being dependent on a single vendor's roadmap decisions. Total cost of ownership for a bought AI solution is typically 2.5 to 4 times the licence fee in year one alone.",
      why: "Leaders who compare build cost to licence fee are making an apple-to-orange comparison. Total cost of ownership comparison — build vs. buy — requires the same cost categories on both sides.",
      paragraphs: [
        [
          s("Integration is the largest hidden cost in a buy decision. "),
          x(
            "Enterprise AI vendors demonstrate their products against their own data or sanitised sample data with pre-built connectors. Your production environment has specific systems, data formats, access controls, and audit requirements. Connecting the vendor product to your real environment typically costs 30-70% of the first-year licence fee in integration engineering.",
            "Request integration effort estimates from the vendor and from your internal integration team independently, then take the higher of the two as your planning figure. Vendors systematically underestimate integration effort because their incentive is to close the deal.",
          ),
          s(" Get independent integration estimates from your own team — do not rely solely on the vendor's estimate."),
        ],
        [
          s("Vendor dependency risk is the ongoing cost that does not appear in year one. "),
          x(
            "Once you are in production with a vendor's AI product, their roadmap decisions affect your operations. Pricing changes at renewal, model changes that affect your workflow, API deprecations that require re-integration, and acquisition risk that changes support quality — all are costs of vendor dependency.",
            "Mitigation: contractual protections (price caps, SLA guarantees, data portability provisions), and a realistic assessment of your switching cost before you sign. A product with high switching cost gives the vendor pricing power at renewal. Know your switching cost before you commit.",
          ),
          s(" Calculate your switching cost before signing — it determines your negotiating position at every renewal."),
        ],
        [
          s("Change management cost is the buy cost that never makes it into the comparison. "),
          x(
            "Vendor AI products change how people work. Whether a sales team uses an AI recommendation tool, whether a claims team trusts an AI classification, whether a finance team acts on AI exception reports — these are change management outcomes that cost money to achieve.",
            "A bought product that is not adopted produces licence cost with no value. The change management investment required for adoption is a real cost of the buy decision — even if the product itself is excellent. Build estimates routinely include engineering cost without change management cost; buy estimates routinely exclude it. Both are systematically understated.",
          ),
          s(" Add change management budget to every buy business case — it is not optional for adoption."),
        ],
      ],
      examples: [
        {
          title: "A bank — integration cost that changed the decision",
          body: "A retail bank selected an AI customer query classification product at £220K annual licence. During procurement, the internal integration team estimated 2,400 hours of integration engineering to connect the product to the bank's CRM, telephony, and compliance logging systems. At a fully-loaded internal rate of £95/hour, integration cost was £228,000 — more than the first year's licence. Total year-one cost: £448K. The equivalent internal build estimate had been declined at £380K. The reframed comparison changed the vendor selection criteria to include integration simplicity.",
        },
        {
          title: "A retailer — pricing power at renewal",
          body: "A fashion retailer deployed a vendor AI demand forecasting product with deep integration into its ERP and buying team workflows over 18 months. At the two-year renewal, the vendor increased pricing by 45%. The retailer's switching cost was estimated at £800K in re-integration and retraining, plus 12 months of parallel running. Switching was effectively not viable. The renewal was accepted. The pre-contract switching cost analysis had not been performed — it would have changed the integration architecture to reduce vendor lock-in.",
        },
        {
          title: "A telecoms operator — change management budget saves a deployment",
          body: "A telecoms operator explicitly budgeted £180K for change management alongside a £240K AI tool licence for its network operations centre. The change management programme included workflow redesign, role-specific training, and a performance measure update to credit operators for using AI recommendations. Adoption at three months post-deployment was 87%. A parallel deployment at a subsidiary that excluded the change management budget showed 23% adoption at three months with the same product. The difference was not the technology.",
        },
      ],
    }),
    buildSection({
      number: "4.4",
      title: "The True Cost of Partnering",
      subtitle: "Beyond the day rate — understanding what makes partnerships succeed and fail",
      take: "Partnership costs extend beyond consulting day rates to include internal management overhead, knowledge transfer investment, dependency on partner availability, and the variable quality of who actually delivers versus who presents in the pitch. Partners who deliver faster than internal build and better than commercial buy are excellent; partners who absorb budget and leave without knowledge transfer are expensive experiments.",
      why: "Partnership evaluations that focus on day rate and portfolio miss the variables that determine whether value is delivered and whether it persists after the engagement ends.",
      paragraphs: [
        [
          s("Internal management overhead is the hidden partnership cost. "),
          x(
            "Partners require briefing, direction, review, feedback, and integration with internal teams. Each of these activities consumes internal bandwidth. A partner engagement without a dedicated internal programme manager typically runs 30-50% over scope because misalignment accumulates faster than partners can self-correct.",
            "Budget one internal programme manager for every three to four partner workstreams. This is not overhead — it is the investment that determines whether the partner delivers the agreed scope on the agreed timeline.",
          ),
          s(" An under-managed partner engagement is an expensive learning experience for the partner."),
        ],
        [
          s("Knowledge transfer is the only partnership cost that produces lasting value. "),
          x(
            "Partners who build without transferring knowledge leave you dependent on them for every subsequent change. Partners who build and transfer knowledge leave you with a capability that persists after the engagement. The difference is not partner choice — it is contractual: specify knowledge transfer deliverables as milestone conditions, not as afterthoughts.",
            "Knowledge transfer deliverables: documented architecture decisions (not just technical documentation), hands-on training for internal engineers on the deployed system, runbooks for common operational scenarios, and a period of parallel support where the partner answers questions from your team rather than resolving issues directly.",
          ),
          s(" Specify knowledge transfer deliverables in the contract, not in the thank-you letter."),
        ],
        [
          s("Who delivers matters more than who pitches. "),
          x(
            "Partnership firms put their best presenters in the pitch and their most available people on the delivery. The presentation team and the delivery team are frequently different individuals with different experience levels.",
            "Contractual mitigation: name the key delivery personnel in the contract with a process for approving substitutions. Request CVs and reference calls for the named delivery team, not just for the firm. Partners who balk at this requirement are telling you something important.",
          ),
          s(" Named individuals in the contract — not just named firms — change the delivery risk profile."),
        ],
      ],
      examples: [
        {
          title: "An insurer — management overhead realised at cost",
          body: "An insurer engaged an AI specialist partner for a claims automation programme. No dedicated internal programme manager was assigned — the CDO managed the engagement alongside three other programmes. Scope misalignment accumulated over four months, resulting in a deliverable that did not meet operational requirements. A 12-week remediation phase cost £280K beyond the original scope. A dedicated internal programme manager would have cost £80K for the same period and would have caught the misalignment at the design review.",
        },
        {
          title: "A financial services group — knowledge transfer as contractual milestone",
          body: "A wealth management group specified five knowledge transfer milestones in a partner engagement contract: architecture decision documentation (month 2), internal engineer co-development sessions (months 3-5), operational runbook delivery (month 6), parallel support period (months 7-8), and sign-off from internal technical lead (month 8). Each milestone was a payment condition. The partner delivered all five. Eighteen months post-engagement, the internal team had extended the system without external support — exactly the outcome the milestones were designed to produce.",
        },
        {
          title: "A retailer — named individuals change",
          body: "A retailer contracted an AI boutique for a personalisation programme after a pitch from two senior partners. The delivery team was three junior consultants, none of whom had been in the pitch. The programme produced average results and ran over timeline. A subsequent engagement with the same firm contractually named the senior partners as delivery leads. The outcome was significantly better. The lesson was not that the firm had changed — it was that contract design determined who showed up.",
        },
      ],
    }),
    buildSection({
      number: "4.5",
      title: "When Buying Wins",
      subtitle: "The conditions under which a vendor product is the correct sourcing choice",
      take: "Buy when the use case is not a source of competitive differentiation, when proven vendor solutions exist with a track record in your industry, when time-to-value is a strategic constraint, and when your internal AI engineering team does not have the capacity or specialisation to build. Buying is not a compromise — in most enterprise AI contexts, it is the most rational capital allocation choice.",
      why: "Leaders who default to build because it sounds more strategic consistently over-invest in AI capability that is not differentiating. The competitive advantage lies in how you use the AI, not in who built it.",
      paragraphs: [
        [
          s("Non-differentiating use cases should almost always be bought. "),
          x(
            "If the process AI will support is not a source of competitive advantage — invoice processing, HR scheduling, IT ticket routing, standard document classification — a vendor product built for that process is faster, cheaper, and lower-risk than an internal build.",
            "The test: if your competitor bought the same product and integrated it into the same process, would you still have a competitive advantage in that process? If yes, your advantage lies elsewhere — the AI is infrastructure, not moat. Buy the infrastructure.",
          ),
          s(" If the AI is infrastructure, buy it. Competitive advantage comes from how you use it, not from who built it."),
        ],
        [
          s("Time-to-value constraint favours buying. "),
          x(
            "When competitive pressure, a regulatory deadline, or a business opportunity has a fixed time horizon, the faster path to a production deployment is almost always a vendor product — assuming a suitable product exists. The twelve to twenty-four months of a non-trivial internal build is a competitive delay that a proven vendor product does not impose.",
            "The caveat: 'faster' assumes the vendor product can be integrated into your environment. Integration complexity can close the gap between buy and build timelines. Validate integration effort early — it is the variable most likely to undermine the time-to-value argument for buying.",
          ),
          s(" Time-to-value favours buying only if integration effort is genuinely manageable."),
        ],
        [
          s("Internal capacity constraint makes buying rational regardless of differentiation. "),
          x(
            "Even if a use case is genuinely differentiating, if the internal engineering team does not have the ML expertise to build it to production quality within a competitive timeline, buying or partnering is the correct sourcing choice. Capability building takes time; market windows do not wait.",
            "The strategic question is whether the use case is sufficiently differentiating to justify building the internal capability alongside the vendor product — using the vendor product to capture near-term value while building internal expertise for the long-term differentiated version. This is a valid approach if the timeline to internal capability matches the strategic horizon.",
          ),
          s(" Buying while building internal capability is a legitimate two-speed sourcing strategy."),
        ],
      ],
      examples: [
        {
          title: "HSBC — non-differentiating process as buy signal",
          body: "HSBC's compliance document screening function processes millions of documents annually for sanctions, PEP, and adverse media checks. The AI for this process is a vendor product — not because HSBC cannot build, but because the compliance screening process is not a competitive differentiator. The competitive advantage is in the bank's relationships, products, and risk management culture — not in having a proprietary document screening model. Buying the infrastructure freed engineering capacity for genuinely differentiating AI work.",
        },
        {
          title: "A retailer — time-to-value forces buy decision",
          body: "A UK fashion retailer faced a competitor deploying AI personalisation and had a peak trading season twelve months away. Internal build estimate: 18 months minimum. Vendor deployment estimate: 10 weeks. The sourcing decision was obvious — the vendor product was bought, deployed, and producing measurable results before the peak season. The retailer's head of technology noted that an internal build would have delivered a better product in 2027; the vendor product won because 2026 mattered more.",
        },
        {
          title: "A mid-size professional services firm — capacity constraint and capability building",
          body: "A professional services firm identified AI document review as a competitive differentiator worth building internally. The problem: one ML engineer, no MLOps capability. They bought a commercial legal AI tool to capture near-term value and simultaneously hired three ML engineers to develop a proprietary review system optimised for their practice areas. The vendor product generated value while the internal capability was built. The internal system replaced the vendor product 22 months later — ahead of plan because the vendor product's revenue justified the engineering investment.",
        },
      ],
    }),
    buildSection({
      number: "4.6",
      title: "When Building Wins",
      subtitle: "The narrow but important conditions under which internal development is the right choice",
      take: "Build when the AI capability is a direct source of competitive differentiation, when you have or are committed to building a proprietary data moat that makes internal models superior to vendor alternatives, and when the organisation has or is committed to building the internal AI engineering capability required to maintain the system over time. The conditions are narrow — but when they are present, building is not just defensible, it is strategically necessary.",
      why: "Leaders who understand when build is genuinely correct can commit to it without apology. Leaders who cannot articulate why they are building instead of buying are making a preference, not a strategy.",
      paragraphs: [
        [
          s("Competitive differentiation through AI requires proprietary signal. "),
          x(
            "An AI model trained on your proprietary data produces outputs that a vendor model trained on generic data cannot replicate. Customer interaction patterns unique to your business, operational data from your specific industrial processes, clinical outcomes from your specific patient population — these are signals that create genuine model superiority over vendor alternatives.",
            "The test: does your proprietary data make an internally trained model meaningfully better than a vendor model for this specific use case? 'Meaningfully better' means measurably better on your specific evaluation criteria, not just better in principle.",
          ),
          s(" Proprietary data advantage must be demonstrated, not assumed, before committing to build."),
        ],
        [
          s("Build requires a credible commitment to the capability, not just the project. "),
          x(
            "Building AI internally is not a one-time project — it is a capability commitment. The model requires retraining as data grows and distribution shifts. The infrastructure requires MLOps investment. The talent requires retention investment. Approving a build without approving the ongoing capability budget is approving the first six months of a ten-year commitment.",
            "Before approving any significant internal AI build, require a three-year total cost of ownership model that includes maintenance, retraining, infrastructure, and talent. The three-year view changes the build-vs-buy comparison significantly — buy products are typically more expensive annually but do not compound with maintenance burden.",
          ),
          s(" Approving the build without the ongoing capability budget is not a build decision — it is a project decision that will become a maintenance crisis."),
        ],
        [
          s("Build decisions require an honest talent assessment. "),
          x(
            "Internal AI builds require ML engineers, data engineers, MLOps engineers, and — for serious production systems — ML platform engineers. Each is a specialised, expensive, and competitive talent category. An organisation that builds without genuine talent depth produces systems that are brittle in production, dependent on individuals, and unmaintainable after early team attrition.",
            "The honest talent assessment: do we have or are we credibly committed to hiring the team required to build and maintain this system at production quality? A business case that assumes talent availability without a concrete hiring plan is optimistic fiction.",
          ),
          s(" The talent plan is as important as the technical design in a build business case."),
        ],
      ],
      examples: [
        {
          title: "Spotify — build as competitive moat",
          body: "Spotify's recommendation and discovery algorithms are internal builds, not vendor products. The competitive moat is explicit: 600M+ users generating listening behaviour data at a scale no vendor can replicate. The 'Discover Weekly' feature — which drove significant subscriber growth — was only possible because Spotify controlled the model, the data, and the feedback loop. Build was correct because the data advantage was real, measurable, and directly producing the user outcome that competitors could not match.",
        },
        {
          title: "A manufacturer — three-year TCO changes the decision",
          body: "A precision manufacturer evaluated an internal AI quality inspection build with an initial engineering estimate of £820K. A three-year TCO model added: £140K MLOps infrastructure, £220K annual maintenance at 1.5 FTE, £180K model retraining over three years, and £120K for two new hire ramp-ups assuming turnover. Three-year TCO: £1.76M. The comparable vendor product was £280K per year, totalling £840K over three years including integration. The three-year view reversed the sourcing decision.",
        },
        {
          title: "A bank — talent assessment that changed the timeline",
          body: "A regional bank's AI credit risk model build business case assumed a team of four ML engineers. The talent assessment revealed only one qualified ML engineer was currently on staff and the hiring market for the remaining three was 12-18 months to close at competitive compensation. The build timeline was revised from 14 months to 30 months to account for realistic talent acquisition. At 30 months, the vendor product that would have been available in 6 months looked considerably more attractive. The sourcing decision shifted to buy-with-option-to-replace.",
        },
      ],
    }),
    buildSection({
      number: "4.7",
      title: "When Partnering Wins",
      subtitle: "The conditions that make specialist partners the rational choice",
      take: "Partner when you need specialist expertise faster than you can hire it, when the use case requires deep domain knowledge that no commercial product has productised, or when a time-constrained programme needs to move faster than internal capacity allows. Partnering is not a fallback — it is a deliberate sourcing choice that should be evaluated against build and buy with the same rigour.",
      why: "Partnering is often chosen by default when build seems too slow and buy seems too generic. Deliberate partnering — where the partner is selected for a specific expertise gap and governed with a clear knowledge transfer mandate — produces very different outcomes than convenient partnering.",
      paragraphs: [
        [
          s("The specialist expertise signal is the clearest indicator that partnering wins. "),
          x(
            "When a use case requires AI expertise at the intersection of your industry's domain knowledge and a specific AI capability — healthcare ML regulatory compliance, financial AI fairness assessment, industrial computer vision for specific manufacturing processes — the population of qualified internal candidates is very small and the hiring timeline is very long.",
            "Partners who specialise in that intersection have built the expertise through many previous engagements. Their knowledge advantage over a new hire is material. When that knowledge advantage translates to faster deployment and fewer mistakes, the partner premium is justified.",
          ),
          s(" Evaluate the partner's specific knowledge advantage over internal capability, not just their general AI reputation."),
        ],
        [
          s("Time-constrained programmes with capability gaps justify partnering. "),
          x(
            "When a competitive or regulatory deadline creates a fixed delivery window that cannot be achieved with current internal capacity — even with aggressive hiring — partnering fills the gap. The partner is a time-bounded capacity and expertise addition, not a long-term sourcing strategy.",
            "The exit condition from the partnership should be defined at entry: either the work is complete and the partner disengages, or the internal capability is built and the partner hands over. Partnerships that lack exit conditions tend to become permanent dependencies — which have the cost structure of build without the capability ownership.",
          ),
          s(" Define the partner exit condition at contract signing — dependency without exit conditions is not a partnership, it is an outsourcing arrangement."),
        ],
        [
          s("Novel domain applications benefit from partner deep precedent. "),
          x(
            "AI applications that are new to your organisation but mature in your industry benefit from partner firms that have made the same mistakes in three comparable deployments and know how to avoid them. The value is not the technical model — it is the implementation knowledge: what process design traps to avoid, what governance questions regulators ask, what change management failures are predictable.",
            "This is knowledge that no vendor product has productised and that an internal team building for the first time will discover the hard way. A partner who charges £150K more than the alternative and prevents a £600K implementation failure is a rational economic choice.",
          ),
          s(" Partner precedent in comparable deployments is worth more than generic AI expertise."),
        ],
      ],
      examples: [
        {
          title: "An NHS trust — specialist domain intersection",
          body: "An NHS trust needed AI clinical decision support that complied with the UK's NHS AI Lab GRADE framework, integrated with EMIS (the clinical system), and addressed specific NHS clinical pathway standards. No vendor product met all three conditions. No internal team had NHS AI regulatory expertise. A specialist NHS AI implementation partner with three completed GRADE-compliant deployments provided all three capabilities. The partnership produced a compliant deployment in 14 months — faster than the trust's own estimate for building internal capability.",
        },
        {
          title: "A retailer — time-constrained seasonal window",
          body: "A fashion retailer needed AI demand forecasting deployed before the autumn/winter buying cycle — six months away. Internal engineering capacity was fully committed to a platform migration. A specialist retail AI partner was engaged with a clear exit condition: full deployment and knowledge transfer by week 22, with a four-week partner-supported handover period. The deployment was complete in week 20. The internal team managed the system independently from week 26. The partnership was six months; the capability was permanent.",
        },
        {
          title: "A manufacturer — implementation knowledge worth more than model quality",
          body: "A manufacturer evaluated two AI quality control options: a technically superior internal build (estimated 95% accuracy on the test set) and a partner implementation of a vendor product (estimated 91% accuracy). The partner had three completed implementations in comparable stamping operations, including one that had navigated the exact equipment safety certification the manufacturer needed. The partner's implementation knowledge — predictable regulatory timeline, known failure modes in comparable equipment, pre-built safety override logic — was worth more than the 4% accuracy advantage. The partner option was selected.",
        },
      ],
    }),
    buildSection({
      number: "4.8",
      title: "The Hybrid Reality",
      subtitle: "Why pure sourcing strategies are rare and hybrid management is the real skill",
      take: "Most enterprise AI programmes combine elements of all three sourcing paths across different layers of the stack and different phases of the programme lifecycle. Managing this hybrid effectively — clear ownership of each layer, explicit handoff points, and governance that spans sourcing strategies — is the practical skill that determines whether the combined approach delivers or creates confusion.",
      why: "Leaders who look for a pure sourcing strategy waste time. The skill is managing the hybrid coherently — knowing what you own, what you buy, what you partner for, and how the pieces connect.",
      paragraphs: [
        [
          s("Layer the sourcing decision across the stack, not just across initiatives. "),
          x(
            "A single AI initiative may buy a foundation model API, build a proprietary fine-tuning and RAG layer on top of it, and partner for the integration into the core business system. Each layer has different optimal sourcing — the decision is not initiative-level but layer-level.",
            "Mapping the technology stack and assigning a sourcing decision to each layer clarifies both the cost model and the ownership model. Where your internal engineers own a layer, they own the maintenance. Where a vendor owns it, you own the integration and the vendor relationship. Where a partner built it, you need the knowledge transfer.",
          ),
          s(" Map the stack first; assign sourcing by layer; total the combined cost and responsibility."),
        ],
        [
          s("Handoff points between sourcing strategies require explicit design. "),
          x(
            "When a partner builds a component that your internal team will own, the handoff must be designed — not assumed. When a vendor product produces output that your internal engineers will integrate into a downstream system, the interface must be specified. When a build initiative moves to steady-state and maintenance transitions from the build team to an operational team, the transition plan must exist.",
            "Handoffs that are assumed rather than designed are where hybrid programmes fail. The most common: a partner delivers a system that internal engineers cannot maintain because the documentation and training were not specified in the contract.",
          ),
          s(" Handoff design is as important as component design in a hybrid sourcing programme."),
        ],
        [
          s("Governance in hybrid sourcing requires a single point of accountability. "),
          x(
            "When build, buy, and partner all contribute to a single AI system, who is accountable for the system's performance in production? Diffused accountability — 'the vendor is responsible for model accuracy, the partner is responsible for integration quality, the internal team is responsible for data' — produces gaps where failures between those definitions are owned by nobody.",
            "Appoint a single internal AI system owner before deployment. This person is accountable for the system's business outcome regardless of which component is sourced from where. They have the authority to require remediation from any sourcing partner and the responsibility to escalate if remediation is insufficient.",
          ),
          s(" Single point of accountability for production performance — regardless of sourcing complexity."),
        ],
      ],
      examples: [
        {
          title: "A bank — layer-level sourcing map",
          body: "A bank's AI customer service programme used a layer-level sourcing map: foundation LLM (buy — OpenAI enterprise API), context retrieval and data integration (build — internal engineering), conversation guardrails and compliance checks (partner — specialist AI safety firm), and deployment and monitoring infrastructure (buy — cloud provider). The cost model reflected each layer; the ownership map assigned a single internal owner for each layer; and the production accountability rested with a single AI system owner who could manage across all four sourcing relationships.",
        },
        {
          title: "An insurer — handoff failure prevented by design",
          body: "An insurer's partner-built claims AI system had a contractually specified handoff protocol: week 20 delivery of operational runbooks, weeks 21-24 partner-shadowed operation by the internal team, week 25 independent operation with partner on-call for one month. A draft of this protocol was included in the partner RFP, and partners who could not commit to it were excluded from selection. The handoff completed on schedule; the internal team managed the first production incident independently in week 28.",
        },
        {
          title: "A retailer — single accountability across hybrid sourcing",
          body: "A retailer's AI demand forecasting programme used a vendor product (core model), a partner (ERP integration), and internal engineers (reporting layer). When forecast accuracy degraded post-deployment, all three sourcing parties initially deflected accountability: the vendor cited data quality, the partner cited the vendor's API changes, the internal team cited the partner's integration design. A single-owner governance structure had not been established. A three-month investigation determined the root cause was in the partner's integration layer. The investigation cost more than the fix. A designated system owner with cross-component accountability would have reduced the investigation from months to weeks.",
        },
      ],
    }),
    buildSection({
      number: "4.9",
      title: "The Business Leader's Sourcing Framework",
      subtitle: "A decision tool you can use in the next vendor meeting",
      take: "Five questions determine the correct sourcing approach for any AI initiative: Is this a competitive differentiator? Do we have a proprietary data advantage? What is the realistic timeline required? Do we have the internal capability? And what is the three-year total cost of ownership for each option? Apply these questions consistently and the sourcing decision becomes an evidence-based conclusion, not an opinion.",
      why: "A repeatable decision framework prevents sourcing decisions from being driven by vendor relationships, technology enthusiasm, or executive preference. Business leaders who apply the framework consistently produce sourcing decisions they can defend to any stakeholder — and that produce better outcomes because they are made on the right criteria.",
      paragraphs: [
        [
          s("Apply the five questions in sequence, not in parallel. "),
          x(
            "Question one (competitive differentiator?) gates the remaining analysis: if the answer is no, buy unless there is a specific timeline or capability reason not to. If yes, proceed to question two. Question two (proprietary data advantage?) determines whether the differentiator is achievable through internal development: if no data advantage exists, no amount of internal engineering will produce a superior model. Proceed to buy or partner.",
            "Questions three (timeline), four (internal capability), and five (TCO) provide the final parameters. A use case that passes questions one and two but fails question three or four on realistic assessment is a build-over-time strategy, not a build-now strategy. A realistic sourcing decision requires all five questions answered honestly.",
          ),
          s(" Answer the questions in sequence; each answer gates the next. Do not run all five simultaneously."),
        ],
        [
          s("Require TCO models for all three options before making the decision. "),
          x(
            "A sourcing decision made without comparable TCO models for all three options is made on an incomplete evidence set. Build TCO is routinely underestimated; buy TCO omits integration and change management; partner TCO omits management overhead and knowledge transfer investment.",
            "The discipline: require finance or programme management to produce a three-year TCO model for the top two sourcing options for every initiative above a defined investment threshold. The exercise takes a week and consistently surfaces assumptions that change the decision.",
          ),
          s(" Three-year TCO for two options before deciding — not licence fee vs. build estimate."),
        ],
        [
          s("Document the sourcing decision with the reasoning, not just the outcome. "),
          x(
            "A sourcing decision document that records the five question answers, the TCO comparison, and the recommended approach with its rationale is an institutional memory asset. When the programme runs into difficulty — as complex AI programmes do — the sourcing rationale tells the team why they are building, buying, or partnering, and what would have to change for the decision to be revisited.",
            "Sourcing decisions that are made verbally in a meeting and recorded only as 'we decided to buy' cannot be revisited intelligently when circumstances change. The reasoning is what makes the decision auditable and updateable.",
          ),
          s(" Record the reasoning, not just the decision — the reasoning is what makes the decision auditable when circumstances change."),
        ],
      ],
      examples: [
        {
          title: "A professional services firm — five questions resolve a disputed decision",
          body: "A strategy firm's technology committee had been deadlocked for two months on whether to build or buy AI document analysis. The five-question framework was applied: competitive differentiator (yes — document analysis is a core service delivery component); proprietary data advantage (yes — 20 years of client document engagement data); timeline (24 months build vs. 8 weeks buy); internal capability (strong data science team but no MLOps); TCO (build: £1.8M over 3 years, buy: £980K over 3 years). Decision: buy now, build the proprietary version over 24 months using the vendor product's outputs as training signal. The framework resolved the deadlock in one session.",
        },
        {
          title: "An insurer — TCO models change the partner selection",
          body: "An insurer's AI governance committee required TCO models for the top two sourcing options for a claims automation programme. Build TCO: £2.3M over 3 years. Buy TCO (leading vendor): £1.4M over 3 years. Partner TCO (specialist claims AI firm): £1.8M over 3 years. The buy option was initially selected. A detailed integration estimate from the insurer's own team added £600K to the buy TCO — making buy £2.0M. Partner moved to the lowest TCO at £1.8M, including a favourable knowledge transfer arrangement. The partner was selected. The TCO model changed the decision.",
        },
        {
          title: "A manufacturer — sourcing rationale used at programme review",
          body: "A manufacturer's AI predictive maintenance programme sourcing decision document stated: 'Build selected because: (1) operational sensor data is a competitive differentiator; (2) equipment performance data from 15 years of manufacturing is proprietary and gives internal models superior accuracy on our specific machinery; (3) three-year TCO favours build at our scale. Decision to be revisited if internal ML team headcount falls below four engineers or if a vendor solution demonstrates comparable accuracy on comparable machinery.' When key personnel changes reduced the team to two engineers in year two, the sourcing rationale identified the condition for revision — and the programme was restructured with a partner before a production failure occurred.",
        },
      ],
    }),
  ],
  quiz: [
    {
      q: "Your technology team proposes building an AI invoice processing system internally, citing strategic control as the reason. What is the correct response?",
      options: [
        "Approve it — internal control is always worth the investment.",
        "Apply the five sourcing questions: is invoice processing a competitive differentiator, and does internal development produce superior outcomes to a proven vendor product?",
        "Reject it — all commodity processes should be outsourced.",
        "Commission a vendor RFP in parallel and let the better price win.",
      ],
      correct: 1,
      correctFeedback:
        "Right. 'Strategic control' is not a sourcing criterion — competitive differentiation and proprietary data advantage are. Invoice processing is typically not a source of competitive advantage, making buy the default and build requiring explicit justification. Re-read sections 4.1 and 4.5.",
      wrongFeedback:
        "Internal control is a preference, not a sourcing criterion. The five-question framework provides the relevant criteria. Re-read sections 4.5 and 4.9.",
    },
    {
      q: "A vendor presents a compelling AI product at £300K annually. Your internal integration team estimates 1,800 hours to connect it to your systems. At a fully-loaded rate of £100/hour, what is the correct year-one comparison figure for the buy option?",
      options: [
        "£300K — the licence fee is the buy cost.",
        "£480K — licence plus integration engineering.",
        "£300K plus whatever change management costs, but those are optional.",
        "The vendor's estimate should be used for integration cost, not the internal estimate.",
      ],
      correct: 1,
      correctFeedback:
        "Right. £300K licence + £180K integration engineering = £480K year-one total. Licence fee is not total cost of ownership. And change management is not optional — it determines whether the £480K investment produces value. Re-read section 4.3.",
      wrongFeedback:
        "Total cost of ownership for a buy decision must include integration engineering alongside the licence fee. The vendor's integration estimate is systematically lower than the internal estimate — use the internal estimate. Re-read section 4.3.",
    },
    {
      kind: "categorize",
      q: "Sort each use case characteristic into the sourcing option it favours.",
      categories: ["Build", "Buy", "Partner"],
      items: [
        { text: "Proprietary customer behavioural data creates model superiority that no vendor can replicate.", category: 0 },
        { text: "Standard HR scheduling process where proven vendor products exist with demonstrated industry track records.", category: 1 },
        { text: "Novel clinical AI application requiring regulatory compliance expertise that would take 18+ months to hire internally.", category: 2 },
        { text: "Competitive time constraint: peak season is 10 weeks away and internal build requires 14 months.", category: 1 },
        { text: "AI capability at the intersection of domain knowledge and technology that no commercial product has productised.", category: 2 },
      ],
      correctFeedback:
        "Right. Build wins on proprietary data advantage with competitive differentiation. Buy wins on proven commodity use cases and time constraints. Partner wins on specialist expertise gaps and novel domain applications. Re-read sections 4.5, 4.6, and 4.7.",
      wrongFeedback:
        "The sourcing decision is determined by competitive differentiation, data advantage, timeline, and capability — not by preference or technology enthusiasm. Re-read sections 4.5, 4.6, and 4.7.",
    },
    {
      q: "You are evaluating a partner engagement. The partner firm's portfolio is impressive and the pitch team is senior. What contractual element is most important to require before signing?",
      options: [
        "A fixed-price contract to protect against scope creep.",
        "Named delivery personnel with a defined approval process for substitutions, and specific knowledge transfer milestones as payment conditions.",
        "The right to cancel at any time without penalty.",
        "A performance guarantee based on the pitch team's credentials.",
      ],
      correct: 1,
      correctFeedback:
        "Right. The pitch team and the delivery team are frequently different individuals. Named delivery personnel protects you from this gap. Knowledge transfer milestones as payment conditions ensure the capability persists after the partner disengages. Re-read section 4.4.",
      wrongFeedback:
        "Fixed-price contracts protect against cost overrun but not against delivery team quality. The most important protections in a partner contract are named personnel and knowledge transfer milestone conditions. Re-read section 4.4.",
    },
    {
      q: "A hybrid AI programme has three sourcing components: a vendor model, a partner integration, and an internal reporting layer. Post-deployment, model accuracy degrades and all three parties deflect accountability. What governance element would have prevented this?",
      options: [
        "A stronger SLA in each component contract.",
        "A single internal AI system owner with cross-component accountability and the authority to require remediation from any sourcing party.",
        "A separate escalation process for each sourcing component.",
        "A vendor performance bonus tied to accuracy metrics.",
      ],
      correct: 1,
      correctFeedback:
        "Right. Diffused accountability across sourcing components is the most common governance failure in hybrid AI programmes. A single internal system owner with full accountability for production outcomes — regardless of which component caused the failure — is the correct design. Re-read section 4.8.",
      wrongFeedback:
        "Individual component SLAs do not address failures that occur at the boundaries between components. A single accountable owner resolves cross-component attribution failures. Re-read section 4.8.",
    },
    {
      kind: "order",
      q: "Order the five sourcing framework questions in the correct decision sequence.",
      prompt: "Drag to arrange the questions from first to last (top = first).",
      items: [
        "Is this AI use case a source of competitive differentiation for our business?",
        "Do we have a proprietary data advantage that makes internal development superior to vendor alternatives?",
        "What is the realistic timeline required, and which sourcing option can meet it?",
        "Do we have the internal AI engineering capability to build and maintain this system?",
        "What is the three-year total cost of ownership for each viable sourcing option?",
      ],
      correctFeedback:
        "Right. Differentiator gates the analysis; data advantage determines build viability; timeline and capability test build feasibility; TCO provides the final comparison. Answer in sequence — each answer informs whether to proceed to the next. Re-read section 4.9.",
      wrongFeedback:
        "The five questions are sequential because each answer gates the next. Running them in parallel produces contradictory conclusions that require the sequenced analysis to resolve. Re-read section 4.9.",
    },
  ],
});
