import { buildChapter, buildSection, s, x, BL_CALLOUT } from "../concepts-bl-helpers";

export const chapter03BlProductivityVsRevenueGains = buildChapter({
  slug: "bl-productivity-vs-revenue-gains",
  number: 3,
  shortTitle: "Productivity vs Revenue Gains",
  title: "AI Productivity vs Revenue Gains: Measuring Both Correctly",
  readingMinutes: 28,
  summary:
    "Productivity gains and revenue gains from AI require completely different measurement models, different attribution methods, and different organisational changes to realise. Leaders who conflate them produce business cases where neither type of value is properly tracked or captured.",
  keyTakeaway:
    "Productivity ROI is earned through capacity redeployment, not just time savings — and revenue ROI requires clean attribution design before deployment. Business leaders who treat these as one measurement problem consistently underperform on both.",
  pmCallout: BL_CALLOUT,
  sections: [
    buildSection({
      number: "3.1",
      title: "Why productivity and revenue ROI need different models",
      subtitle: "The structural differences that make a single AI ROI model misleading",
      take: "Productivity gains reduce inputs for the same output — or increase output for the same inputs. Revenue gains increase the top line. They have different causation chains, different time horizons, and require different organisational actions to realise. A single combined model obscures whether either type of value is actually being captured.",
      why: "Leaders who separate the models can act on each independently. If productivity is on track but revenue is not, the problem and solution are different than if both are failing. The separation creates diagnostic clarity that a blended number eliminates.",
      paragraphs: [
        [
          s("Productivity ROI causation chain: AI task automation → time saved → capacity redeployed → output increased or cost reduced. "),
          x(
            "Each arrow in this chain requires a specific action and measurement. AI saves time (measurable in the tool). Time is redeployed (requires a management decision). Output increases (measurable against a baseline). Without tracking each link, the chain breaks invisibly.",
            "If the AI saves 200 hours per month but the capacity is not explicitly redeployed — no new tasks assigned, no headcount reduction, no expanded scope — the 200 hours flows into unstructured time. The financial value is zero regardless of the productivity metric.",
          ),
          s(" Require a capacity redeployment plan as a condition of the productivity ROI assumption — not as an aspiration."),
        ],
        [
          s("Revenue ROI causation chain: AI capability → better customer interaction → higher conversion or retention → revenue increase. "),
          x(
            "Revenue causation chains are longer and have more confounding variables. Market conditions, competitor actions, sales cycle changes, and pricing decisions all affect revenue simultaneously with AI deployment. Isolating the AI contribution requires deliberate measurement design.",
            "Revenue models also have longer time horizons: a personalisation AI that improves customer lifetime value may not produce measurable revenue impact for 6–12 months post-deployment, while productivity savings can appear in week two.",
          ),
          s(" For revenue AI, build the attribution design before deployment — the measurement architecture cannot be retrofitted to a longer causation chain."),
        ],
        [
          s("The organisational actions required are completely different. "),
          x(
            "Productivity ROI requires management action: process redesign, capacity redeployment decisions, role scope changes. Revenue ROI requires commercial action: sales process changes, marketing capability shifts, customer experience redesign. Both are leadership responsibilities — neither happens automatically from the AI deployment.",
            "The most common failure mode: leaders approve AI, wait for ROI, and find twelve months later that the technical deployment succeeded but the organisational changes required to capture value never happened. The AI worked; the organisation did not change.",
          ),
          s(" Name the organisational change owner for each ROI category at the business case approval stage."),
        ],
      ],
      examples: [
        {
          title: "Insurance — separated models revealing a productivity gap",
          body: "An insurer's AI claims processing tool reported combined ROI of £1.4M against a £2.1M target. Separating the model revealed: productivity target £1.2M (actual £0.4M) and cost reduction target £0.9M (actual £1.0M). The blended miss hid a 67% productivity shortfall. Investigation found capacity had been saved but not redeployed — claims handlers' freed time had not been assigned to expanded case volume. The separated model identified the actionable problem.",
        },
        {
          title: "Retail — revenue attribution designed before launch",
          body: "A retailer deploying AI personalisation built a clean measurement model before launch: a randomised control trial for 20% of traffic, with revenue per session as the single primary metric. The measurement design took three weeks and required holding back the deployment for some users. The result eight months later was an unambiguous 11% revenue per session uplift attributable to AI — a clean metric that justified the next phase of investment without debate.",
        },
        {
          title: "Professional services — different owners for different ROI",
          body: "A consultancy deploying AI research tools assigned separate owners at approval: the Head of Delivery for productivity ROI (capacity redeployment) and the Head of Business Development for revenue ROI (faster proposal turnaround enabling higher win rates). Twelve months later, productivity ROI was on track (HoD had redesigned the delivery model) while revenue ROI had not materialised (HoBD had not changed the proposal process). The ownership separation made the success and failure visible — and actionable.",
        },
      ],
    }),
    buildSection({
      number: "3.2",
      title: "Measuring productivity gains precisely",
      subtitle: "The four-step measurement protocol that turns time savings into credible financial claims",
      take: "Productivity measurement requires four steps: measure the baseline task time, measure the AI-assisted task time, calculate time saved, then verify that the saved time is redeployed at documented value. Stopping at step three produces a number; completing step four produces a financial result.",
      why: "Most AI productivity claims stop at time-saved and never reach financial outcome. Finance sees through this. Leaders who complete the full four-step protocol produce productivity ROI that survives audit and CFO challenge.",
      paragraphs: [
        [
          s("Step one: baseline task time measurement must be documented, not estimated. "),
          x(
            "Productivity claims based on estimated baseline time are rejected in Finance reviews because they are unauditable. Direct observation, time-tracking system data, or process mining data provide defensible baselines. Manager estimates do not.",
            "For high-volume repetitive tasks, sample 100–200 instances over four weeks. For low-volume complex tasks, use time tracking for two to three months. The investment in baseline measurement is small compared to the credibility it provides.",
          ),
          s(" Measure baseline task time for a minimum of four weeks before deployment — document the methodology and sample size."),
        ],
        [
          s("Step two and three: measure AI-assisted time and calculate the saving at task level. "),
          x(
            "AI-assisted task time should be measured consistently — including setup time, quality review time, and any correction time, not just the AI generation time. Partial task times systematically overstate productivity savings.",
            "Calculate savings at task level first, then scale to population. Task-level measurement reveals where savings are concentrated (high-frequency tasks vs occasional complex ones) and where AI underperforms (tasks where AI-assisted time exceeds manual time due to correction overhead).",
          ),
          s(" Measure AI-assisted time including all steps — AI generation, review, correction, and output — not just the AI step."),
        ],
        [
          s("Step four: document capacity redeployment by name. "),
          x(
            "For each team or role where productivity savings are claimed, document: what was the saved time used for? Were additional tasks added to role scope? Was headcount reduced? Was quality improvement achieved with the same time (doing the same volume better)?",
            "A capacity redeployment register — a simple table of team, hours saved, and redeployment use — is the finance-grade evidence that converts a time-saving claim into a value claim.",
          ),
          s(" Require a capacity redeployment register updated monthly for every team claiming productivity ROI."),
        ],
      ],
      examples: [
        {
          title: "Legal — direct observation baseline",
          body: "A law firm measured baseline contract review time by having a research associate time 150 contract reviews across three weeks before AI deployment. Mean review time: 47 minutes. Post-deployment measurement of 150 AI-assisted reviews: mean 18 minutes including AI output review and markup. Saving: 29 minutes per contract. At £85/hour fully loaded cost, saving per contract: £41. Annual volume 4,200 contracts: £172K annual productivity saving. The documented methodology was accepted by Finance without challenge.",
        },
        {
          title: "Financial services — redeployment register preventing phantom savings",
          body: "A bank's AI report-writing tool saved analysts an estimated 220 hours per month across the team. The redeployment register required each team manager to document how the time was used. Three teams showed clear redeployment to additional client analysis (additional output value documented). Two teams showed no redeployment — the saved time had been absorbed as reduced overtime. Actual claimable productivity saving: 140 hours, not 220. The register prevented a 57% overclaim.",
        },
        {
          title: "Healthcare — quality improvement as productivity value",
          body: "A hospital's AI clinical documentation tool did not reduce total documentation time but significantly improved documentation completeness. The productivity ROI was redefined: same time input, measurably better output quality. Finance accepted 'quality productivity' as a valid category when the metric was defined as 'clinical documentation completeness score' with a baseline and post-deployment measurement. Productivity is not only time — it is also quality of output per unit of input.",
        },
      ],
    }),
    buildSection({
      number: "3.3",
      title: "Translating productivity to dollars",
      subtitle: "The three conversion approaches — and which one is credible in a Finance review",
      take: "Time savings translate to financial value through three mechanisms: direct cost reduction (headcount or contractor reduction), capacity value (additional output produced with saved time), or quality improvement value (better output producing downstream financial benefit). Each requires different evidence and different organisational action.",
      why: "Using the wrong conversion approach for your actual situation produces a financial claim that Finance challenges or rejects — not because the productivity gain is not real, but because the conversion does not match the organisational reality.",
      paragraphs: [
        [
          s("Direct cost reduction is the most auditable and requires the hardest commitment. "),
          x(
            "If AI saves 3 FTEs of work, the financial value is 3 FTEs × fully-loaded cost — but only if those 3 FTEs are actually reduced or not replaced in attrition. A headcount reduction that never materialises is not a cost saving; it is a cost avoidance that did not occur.",
            "Headcount reduction from AI requires HR and leadership sign-off in the business case, not just a financial projection. If the operational sponsor is not willing to commit to the headcount change, do not claim direct cost reduction — claim capacity value instead.",
          ),
          s(" Only claim direct cost reduction if the operational leader has explicitly committed to the headcount or contractor reduction in writing."),
        ],
        [
          s("Capacity value requires the clearest documentation of what was done with the freed time. "),
          x(
            "If 3 FTE-equivalent hours are saved and redeployed to higher-value work, the financial value is: value of the higher-value work − cost of the capacity. If analysts spend freed time on additional client coverage and each new client generates £20K revenue, the capacity value is traceable to specific revenue outcomes.",
            "Capacity value claims are stronger when the redeployed work produces a measurable financial outcome, not when it is simply 'allocated to more valuable tasks' without a downstream metric.",
          ),
          s(" Require the operational sponsor to name the specific higher-value work and its financial metric before approving capacity value claims."),
        ],
        [
          s("Quality improvement value requires the clearest causal chain and longest attribution horizon. "),
          x(
            "Better AI-assisted work produces fewer errors, fewer rework cycles, higher customer satisfaction, or faster delivery. Each of these outcomes has a financial value if you trace the chain far enough. The challenge is that quality improvements are often captured in soft metrics first — and financial outcomes appear 6–12 months later.",
            "For quality value claims, build the attribution chain explicitly: better documentation quality → fewer insurance claim disputes → lower legal cost. Then measure each link in the chain rather than asserting the endpoint directly.",
          ),
          s(" Document the quality-to-value chain with intermediate metrics at each link — do not jump from 'better quality' to a financial figure without showing the chain."),
        ],
      ],
      examples: [
        {
          title: "Retailer — cost reduction commitment in writing",
          body: "A retailer's AI inventory tool claimed 4 FTE cost reduction. The CFO required the Head of Supply Chain to sign a letter committing to the headcount reduction before the business case was approved. The letter was signed — and the headcount reduction was executed on schedule post-deployment. The pre-commitment mechanism, uncomfortable as it was, ensured that the financial benefit materialised rather than remaining on paper.",
        },
        {
          title: "Consulting — capacity value chain",
          body: "A consultancy's AI research tool freed 180 partner hours per quarter. The capacity was redeployed to business development activities. The BD team tracked conversion rates on proposals generated during the redeployment period. Twelve months post-deployment, £1.4M in new client revenue could be directly attributed to proposals developed using the freed capacity. The chain from AI → freed time → BD activity → revenue was clean and auditable.",
        },
        {
          title: "Healthcare — quality chain measured at each link",
          body: "An AI clinical coding tool improved coding accuracy from 87% to 96%. The quality-value chain was: coding accuracy → claims accuracy → claims rejection rate → revenue leakage from rejected claims. Each link was measured. Baseline claims rejection rate: 8.3%. Post-deployment: 3.1%. Revenue recovered from reduced rejection: £2.3M annually. Finance accepted the entire chain because each intermediate metric was documented and measured.",
        },
      ],
    }),
    buildSection({
      number: "3.4",
      title: "Revenue uplift from AI: measurement methods that work",
      subtitle: "How to measure AI's contribution to revenue with confidence intervals that Finance will accept",
      take: "Revenue uplift from AI is real and measurable — but only with the right measurement design, built before deployment. Leaders who measure revenue impact retroactively always face attribution challenges that undermine credibility. Leaders who design measurement upfront produce results that Finance and the board can act on.",
      why: "Revenue measurement is also a commercial discipline. The measurement design forces the commercial team to define exactly which revenue metric the AI is intended to improve — which is valuable even before the AI is deployed.",
      paragraphs: [
        [
          s("Randomised controlled trials are the gold standard for revenue AI. "),
          x(
            "Split customers, regions, or sales reps into treatment (AI-assisted) and control (non-AI) groups. Run the split for long enough to capture a full sales cycle. Measure the primary revenue metric — conversion rate, deal size, time-to-close, retention — independently for each group.",
            "The group assignment must be truly random and the groups must be equivalent before the test. Pre-test equivalence checking (same historical conversion rates, same customer characteristics) is as important as the test design itself.",
          ),
          s(" For revenue AI, run a randomised controlled trial for a minimum of one full sales cycle before reporting ROI — not after you have already committed to full deployment."),
        ],
        [
          s("Quasi-experimental designs when randomisation is impossible. "),
          x(
            "If you cannot randomly assign customers to AI and non-AI experiences — because the product change is global, or because randomisation would create inconsistent customer journeys — use difference-in-differences, synthetic control, or matched historical comparison methods.",
            "These methods are less clean than randomisation but, when applied rigorously, produce credible estimates with stated uncertainty. The key is transparency: present the method, its assumptions, and its limitations alongside the result.",
          ),
          s(" Present the measurement method explicitly in every revenue ROI claim — a number without a method is not a claim Finance can validate."),
        ],
        [
          s("Define the primary revenue metric before deployment and do not change it post-deployment. "),
          x(
            "Changing the primary revenue metric after deployment because the original metric did not move is the most common form of revenue ROI manipulation. It produces reports that look good but are analytically dishonest.",
            "Agree the primary revenue metric in the business case approval document — conversion rate, average order value, renewal rate, or whichever metric is most directly connected to the AI capability. If that metric does not move, the revenue ROI case has not been made, regardless of which other metrics improved.",
          ),
          s(" Lock the primary revenue metric in the business case approval — changes after deployment require a separate governance decision, not just a revised slide."),
        ],
      ],
      examples: [
        {
          title: "E-commerce — RCT before full deployment",
          body: "An e-commerce company ran a 12-week RCT before deploying AI product recommendations globally: 30% of users received AI recommendations, 70% received the existing rule-based system. Revenue per session: AI group £3.84, control group £3.41. Uplift: 12.6%, statistically significant at 99% confidence. Full deployment decision was made on clean RCT evidence. Post-full-deployment measurement confirmed the RCT result within 1.2 percentage points.",
        },
        {
          title: "B2B sales — difference-in-differences measurement",
          body: "A SaaS company could not randomise AI sales assist because all reps received the tool simultaneously. They used a difference-in-differences model: reps with more than 30 days' active tool use vs reps with less than 30 days' use, controlling for tenure, territory, and deal size. High-use reps showed 23% shorter sales cycles. The DID estimate was presented with a ±4% confidence interval. Finance accepted the range, noting it was materially positive even at the lower bound.",
        },
        {
          title: "Retail — pre-committed metric preventing post-deployment cherry-picking",
          body: "A retailer pre-committed to 'basket size' as the primary metric for AI product recommendation ROI in the business case approval document. At the six-month review, basket size was +2.1% against a +4% target — a miss. The team presented click-through rate and page engagement as secondary improvements. Because the primary metric was pre-committed, the review was honest about the miss and identified a recommendation algorithm parameter as the cause. A design change improved basket size to +3.8% by month nine.",
        },
      ],
    }),
    buildSection({
      number: "3.5",
      title: "Cost avoidance vs cost reduction",
      subtitle: "Why the distinction matters for Finance approval — and how to make cost avoidance credible",
      take: "Cost reduction removes money already being spent from the P&L. Cost avoidance prevents money from being spent that would otherwise have been required. Both have real financial value — but Finance treats them differently, and business leaders must understand why and present each appropriately.",
      why: "Cost avoidance claims that are not distinguished from cost reduction erode Finance credibility when the avoided cost was never on the P&L to begin with. Presenting them correctly builds credibility; conflating them destroys it.",
      paragraphs: [
        [
          s("Cost reduction is simpler: a specific line on the P&L goes down. "),
          x(
            "Licence fees for a replaced system, headcount that is reduced, contractor spend that is eliminated — these are traceable and verifiable. Finance can confirm cost reduction by comparing P&L line items before and after.",
            "Cost reduction claims only require an audit trail: the before cost, the mechanism of reduction, and the after cost. If all three are present and the GL codes match, the claim is clean.",
          ),
          s(" For cost reduction, include the GL code and budget owner alongside the financial claim."),
        ],
        [
          s("Cost avoidance requires more sophisticated justification. "),
          x(
            "AI that prevents the need to hire additional staff as the business grows is cost avoidance — the cost was never incurred, but it would have been without AI. AI that prevents compliance breaches avoids regulatory fines that were never actually charged.",
            "Credible cost avoidance claims require: (a) evidence that the avoided cost would have occurred without AI, (b) a specific counterfactual scenario (what would have happened without the AI deployment), and (c) a method for estimating the avoided cost that is not purely speculative.",
          ),
          s(" For cost avoidance, explicitly state the counterfactual: 'Without AI, we would have needed to hire X FTEs at Y cost as business volume grew by Z.'"),
        ],
        [
          s("Present cost reduction and cost avoidance in separate rows in the business case benefit table. "),
          x(
            "Finance applies different credibility weights to cost reduction (fully auditable) and cost avoidance (dependent on counterfactual quality). Separating them allows Finance to apply appropriate scrutiny to each without rejecting either.",
            "A common mistake: blending cost reduction and cost avoidance into a single 'cost saving' line. This allows Finance to challenge the entire line when they dispute the avoidance component — rather than accepting the reduction and scrutinising only the avoidance.",
          ),
          s(" Label each benefit line as either 'cost reduction (P&L traceable)' or 'cost avoidance (counterfactual basis stated)' — never combine them."),
        ],
      ],
      examples: [
        {
          title: "Logistics — scaling cost avoidance with documented growth",
          body: "A logistics company's AI dispatch system claimed cost avoidance: the AI enabled 35% volume growth without adding dispatch staff. The counterfactual was documented: at historical staffing ratios, 35% volume growth would have required 7 additional FTEs at £38K each. Cost avoidance: £266K/year. Finance accepted the claim because the growth trajectory was auditable from revenue data and the historical staffing ratio was documented from the previous three years.",
        },
        {
          title: "Financial services — mixing cost types exposed",
          body: "A bank blended £800K of clearly tracked compliance licence savings (cost reduction) with £1.2M of 'regulatory fine avoidance' (cost avoidance) into a single £2M benefit line. Finance challenged the entire £2M because the avoidance methodology was unvalidated. Separating the line into £800K auditable reduction (accepted immediately) and £1.2M avoidance (reviewed separately with enhanced justification) ultimately produced full acceptance — but the blending had delayed approval by six weeks.",
        },
        {
          title: "Healthcare — avoided staffing with growth evidence",
          body: "A hospital's AI scheduling tool enabled a 28% increase in appointment throughput without adding scheduling staff. The cost avoidance claim was documented: throughput growth + historical staffing ratio + staff cost per FTE = £340K annual avoidance. The growth evidence came from appointment booking system data. Finance flagged one assumption (the historical staffing ratio might not have needed to be linear with growth) and agreed on a 15% discount to the avoidance figure. The adjusted £289K was accepted.",
        },
      ],
    }),
    buildSection({
      number: "3.6",
      title: "The productivity paradox in AI",
      subtitle: "Why AI productivity gains appear later than expected — and how to manage stakeholder expectations",
      take: "AI productivity gains consistently appear 6–18 months after deployment, not immediately. The reasons are structural: learning curve, workflow adaptation, change resistance, and the time required to redesign processes around AI capability. Leaders who set expectations of immediate productivity returns damage programme credibility.",
      why: "Managing the productivity paradox is a communication and governance challenge as much as a technical one. Leaders who explain the J-curve trajectory upfront maintain stakeholder confidence through the slow initial period; leaders who promise quick wins face pressure to cancel or scale back before the investment pays off.",
      paragraphs: [
        [
          s("The learning curve suppresses early productivity gains for most users. "),
          x(
            "New AI tools require users to develop judgment about when to accept AI output, when to review carefully, and when to override. This judgment develops over four to twelve weeks. During this period, AI-assisted task time may be longer than manual task time — not because the AI is slow, but because the user is still calibrating.",
            "Measuring productivity in the first six weeks typically shows an apparent decline. Leaders who see the early-period data without understanding the learning curve conclude the AI is not working. Educating stakeholders about the J-curve before deployment preserves programme integrity.",
          ),
          s(" Communicate the J-curve productivity trajectory before deployment — and define the expected inflection point with evidence from comparable deployments."),
        ],
        [
          s("Workflow adaptation takes longer than technical deployment. "),
          x(
            "The greatest productivity gains from AI come not from doing the same tasks faster, but from redesigning workflows around AI capability. A team that uses AI to draft documents but still runs the same multi-stage approval process captures less than 30% of the potential productivity gain.",
            "Workflow redesign is a management and change management activity, not a technology activity. It requires leadership sponsorship, process mapping, and deliberate role scope changes — all of which take months, not weeks.",
          ),
          s(" Budget a workflow redesign phase (3–6 months) as a distinct programme workstream — not an assumption that productivity will emerge organically."),
        ],
        [
          s("Change resistance compounds the productivity paradox in complex organisations. "),
          x(
            "Some employees resist using AI tools that they perceive as threatening their expertise, reducing their autonomy, or creating surveillance on their performance. This resistance reduces adoption below the level needed to realise productivity benefits — and it is invisible in the adoption statistics until active investigation.",
            "Segment adoption data by role, tenure, and team to identify change resistance patterns. Targeted engagement — addressing specific concerns rather than broad communications — is more effective than general 'AI is here to help' messaging.",
          ),
          s(" Treat low adoption in specific segments as a change management problem, not a technology problem — they usually have different solutions."),
        ],
      ],
      examples: [
        {
          title: "Professional services — J-curve expectation management",
          body: "A consulting firm's AI research tool deployment included a pre-deployment briefing to partners showing comparable deployment data: productivity typically declines or is flat for weeks one to six, improves to baseline by week eight, and exceeds baseline by week twelve. When the actual deployment followed this pattern exactly, partners were prepared and did not escalate. Without the pre-briefing, the week-four performance data had been planned to trigger an 'emergency programme review.'",
        },
        {
          title: "Insurance — workflow redesign as a separate workstream",
          body: "An insurer deployed AI claims assessment and immediately saw the technical capability was sound. But productivity gains were modest because the claims workflow still required the same number of human touchpoints. A six-month workflow redesign workstream — funded as a separate project — reduced approval stages from seven to three and introduced AI-informed batch processing. Productivity gains jumped from 11% to 38% following the workflow redesign, not the AI deployment.",
        },
        {
          title: "Financial services — segmented adoption revealing resistance",
          body: "A bank's AI analysis tool showed 72% overall adoption, which appeared healthy. Segmented analysis revealed that analysts with more than eight years' tenure had 31% adoption — the lowest of any segment. Interviews revealed concerns about AI 'deskilling' their expertise and changing how their performance was evaluated. A targeted engagement programme addressing evaluation criteria and positioning AI as an amplifier of senior judgment raised senior analyst adoption to 68% over three months.",
        },
      ],
    }),
    buildSection({
      number: "3.7",
      title: "Portfolio view: productivity and revenue together",
      subtitle: "Managing the combined AI ROI portfolio — when to prioritise which gain type",
      take: "Most organisations have AI investments generating both productivity and revenue gains simultaneously. A portfolio view manages the combined ROI trajectory, identifies where to invest additional programme resources, and communicates the aggregate AI investment return to leadership and the board.",
      why: "Individual AI projects compete for budget and attention. A portfolio view reveals where the aggregate AI investment is performing, which projects are driving the most value, and which are consuming resources without proportionate return — enabling capital reallocation decisions.",
      paragraphs: [
        [
          s("Build a portfolio summary that aggregates productivity and revenue ROI separately. "),
          x(
            "A single blended portfolio ROI obscures which type of value is being generated and whether either type requires additional investment. Separate productivity and revenue tracks allow leaders to answer: 'Where are we getting more value than expected, and where should we invest more?'",
            "Portfolio summary format: list each AI project, its primary ROI category, its current realised ROI versus target, and its adoption level. Four columns, updated monthly. Simple enough for a board committee and actionable enough for the programme team.",
          ),
          s(" Produce a four-column AI portfolio summary monthly — project, category, realised vs target ROI, adoption level."),
        ],
        [
          s("When to prioritise productivity: early-stage AI adoption with established baselines. "),
          x(
            "Productivity gains are typically faster to realise, easier to measure, and carry less attribution risk than revenue gains. In early AI adoption phases, building productivity ROI credibility creates the organisational confidence and Finance trust needed to approve more complex revenue AI investments.",
            "Productivity gains also fund the next phase of AI investment: if AI has demonstrably saved £2M in operational cost, that creates the capacity for a £1M revenue AI investment without net new budget pressure.",
          ),
          s(" Use productivity ROI wins to fund and justify more complex revenue AI investments — sequence them deliberately."),
        ],
        [
          s("When to prioritise revenue: late-stage competitive environments with established AI operations. "),
          x(
            "Revenue AI typically requires mature AI operations, strong data infrastructure, and commercial agility to deploy effectively. Organisations that try to start with revenue AI without the operational foundations consistently underperform on both productivity and revenue gains.",
            "Revenue AI also requires longer-term commitment: a personalisation engine or sales AI rarely shows full returns in less than 12 months. Leaders who switch focus or cut funding at month six consistently fail to capture the long-term compounding value.",
          ),
          s(" Commit to a 24-month minimum evaluation horizon for revenue AI investments before measuring ROI against the original target."),
        ],
      ],
      examples: [
        {
          title: "Financial services — portfolio summary enabling reallocation",
          body: "A bank's monthly AI portfolio summary showed three projects above productivity target, two at target, and one significantly below. The below-target project was consuming 40% of the programme team's time. The portfolio view gave the AI Investment Committee the evidence to redirect resources from the underperforming project (AI reporting automation, technically complex, low adoption) to a project above target (AI compliance review, high adoption, compounding value). Net portfolio ROI improved 31% in the following quarter.",
        },
        {
          title: "Retailer — productivity funding revenue AI",
          body: "A retailer's AI supply chain tool delivered £1.8M productivity ROI in its first year — exceeding target. The portfolio view showed this created capacity to fund a £900K AI personalisation investment in year two without requiring net new budget. The productivity win financed the revenue AI launch. The CFO noted: 'The productivity savings are self-funding the next phase of the AI roadmap.' This sequencing of productivity before revenue was deliberate programme strategy.",
        },
        {
          title: "Technology company — 24-month commitment to revenue AI",
          body: "A SaaS company's AI churn prediction tool showed a 4% reduction in monthly churn at the 12-month review — against a 7% target. Standard process would have triggered a programme review and potential funding cut. The 24-month commitment in the business case held. At month 18, with workflow changes completed, churn reduction reached 8.4% — exceeding the original target. The commitment to a longer evaluation horizon captured value that a 12-month cut-off would have forfeited.",
        },
      ],
    }),
    buildSection({
      number: "3.8",
      title: "BL decision lens: which gain type to prioritise",
      subtitle: "Three questions that determine the right investment sequencing for your organisation",
      take: "Deciding whether to lead with productivity or revenue AI is a strategic and organisational readiness decision, not just a financial one. Business leaders who answer three questions honestly before the investment decision are more likely to capture the value they project.",
      why: "Sequencing matters: organisations that try to capture revenue AI ROI before their AI operations are mature and their measurement infrastructure is strong consistently underperform. The three questions diagnose readiness objectively.",
      paragraphs: [
        [
          s("Question one: does the team have the capacity redeployment commitment to realise productivity ROI? "),
          x(
            "Productivity ROI without capacity redeployment is a financial phantom. If the operational leader has not committed to redesigning the workflow, adding scope, or reducing headcount, do not claim productivity ROI. The question is: is the organisational change ready, not just the technology?",
            "If the answer is no, either invest in building the change management readiness before deployment or adjust the business case to reflect a longer time horizon for the organisational change.",
          ),
          s(" Do not approve a productivity AI investment if the operational leader has not explicitly committed to the capacity redeployment decision."),
        ],
        [
          s("Question two: is the measurement infrastructure clean enough to isolate revenue AI contribution? "),
          x(
            "Revenue AI ROI is only credible if the measurement design was built before deployment and the attribution chain is clean. If your customer data is fragmented, your sales data has poor attribution, or your CRM is inconsistently used, your revenue AI measurement will be contested.",
            "The readiness question is not 'do we have data?' but 'do we have the specific data pipeline, attribution model, and baseline metrics that will isolate the AI contribution?'",
          ),
          s(" Commission a measurement readiness assessment before approving any revenue AI investment above £200K."),
        ],
        [
          s("Question three: is the organisation mature enough to sustain a 24-month investment horizon for revenue AI? "),
          x(
            "Revenue AI investments that are cut at 12 months because the results are not yet compelling produce the worst possible outcome: real costs incurred without full value captured. If leadership does not have the conviction or the financial headroom to hold the investment for two years, either do not make it or reduce the scale to a level that is sustainable.",
            "This is a governance and leadership question, not a programme question. It should be answered honestly at the approval stage — not deferred until month 12 when the funding conversation becomes political.",
          ),
          s(" State explicitly in the business case approval: 'This investment requires a 24-month hold before final ROI review.' Get leadership sign-off on the hold period before committing."),
        ],
      ],
      examples: [
        {
          title: "Manufacturing — readiness assessment preventing a failed investment",
          body: "A manufacturer commissioned a measurement readiness assessment before approving an AI quality revenue AI project. The assessment found that the revenue attribution chain required clean product-level data that did not exist in the ERP. The project was delayed six months while data infrastructure was built. The delay felt costly at the time; the revenue ROI report at month 18 was clean, uncontested, and led to the next phase of investment being approved without scrutiny.",
        },
        {
          title: "Professional services — 24-month hold stated and honoured",
          body: "A law firm's AI business development tool had a 24-month hold stated in the approval document. At month 12, the managing partner was under pressure from non-AI-using partners to cut the programme. The hold document was produced. The programme continued. At month 22, AI-assisted proposals had a 31% higher win rate than non-AI proposals — the result that justified the investment. Without the documented hold, the investment would have been cut six months before delivering its value.",
        },
        {
          title: "Retailer — productivity first, then revenue",
          body: "A retailer's AI programme board used the three questions to sequence their two-year roadmap: year one was productivity AI (supply chain, scheduling) with clear redeployment commitments; year two was revenue AI (personalisation, pricing) with measurement infrastructure built during year one. The sequencing built organisational capability, Finance credibility, and data infrastructure before the more complex revenue investments were required to deliver. Year-two revenue AI results were 40% above target — a direct benefit of the year-one foundational investment.",
        },
      ],
    }),
  ],
  quiz: [
    {
      q: "An AI tool has saved the team 200 hours per month but financial ROI has not appeared. What is the most likely cause?",
      options: [
        "The AI tool is not working correctly.",
        "The saved capacity has not been redeployed to produce additional value — time was saved but not captured.",
        "Finance has miscalculated the hourly rate.",
        "The team needs more training on the AI tool.",
      ],
      correct: 1,
      correctFeedback:
        "Correct. Time saved is not value realised. Productivity ROI requires that saved capacity is explicitly redeployed to higher-value work or results in a direct cost reduction. Re-read sections 3.1 and 3.2.",
      wrongFeedback:
        "Productivity ROI requires capacity redeployment, not just time savings. Re-read section 3.1 on the productivity causation chain.",
    },
    {
      q: "An AI sales tool has been deployed for 12 months and shows improved engagement metrics but flat conversion rate — the pre-committed primary revenue metric. How should the business leader respond?",
      options: [
        "Replace the primary metric with the engagement metrics.",
        "Declare success based on engagement improvements.",
        "Report the primary metric honestly as underperforming, investigate the gap, and commit to a plan to address it.",
        "Extend the measurement period indefinitely until conversion rate improves.",
      ],
      correct: 2,
      correctFeedback:
        "Right. Pre-committed primary metrics cannot be replaced post-deployment. Report honestly, diagnose the gap, and commit to a corrective plan. Credibility is built through transparency, not metric substitution. Re-read sections 3.4 and 3.7.",
      wrongFeedback:
        "Switching metrics after deployment destroys Finance credibility. Re-read section 3.4 on revenue measurement methods.",
    },
    {
      kind: "categorize",
      q: "Sort each scenario into the correct ROI realisation type.",
      categories: ["Productivity ROI realised", "Productivity ROI potential only (not yet realised)"],
      items: [
        { text: "AI saves 150 hours/month; managers assign additional client coverage with the freed time.", category: 0 },
        { text: "AI saves 200 hours/month; the freed time is absorbed as reduced weekend working.", category: 1 },
        { text: "AI reduces headcount by 3 FTEs as committed in the business case approval.", category: 0 },
        { text: "AI speeds up report writing; reports are produced faster but the same number are produced.", category: 1 },
        { text: "AI improves documentation quality; downstream error correction cost falls by £120K.", category: 0 },
        { text: "AI tool is available to 400 staff; 85 have used it more than once.", category: 1 },
      ],
      correctFeedback:
        "Right. Productivity ROI is realised only when capacity is explicitly redirected to additional output, direct cost reduction, or documented quality improvement. Re-read sections 3.2 and 3.3.",
      wrongFeedback:
        "Time saved without redeployment is potential, not realised. Re-read sections 3.2 and 3.3.",
    },
    {
      q: "Why do AI productivity gains typically appear 6–18 months after deployment rather than immediately?",
      options: [
        "AI technology is slow to process the first tasks.",
        "Finance takes too long to measure the results.",
        "Learning curve, workflow adaptation, and change resistance structurally delay productivity realisation.",
        "Productivity gains always take exactly 18 months regardless of the AI type.",
      ],
      correct: 2,
      correctFeedback:
        "Correct. The productivity paradox has three structural causes: user learning curve (4–12 weeks), workflow adaptation (3–6 months), and change resistance in specific segments. Re-read section 3.6.",
      wrongFeedback:
        "The productivity paradox is a structural phenomenon with three specific causes. Re-read section 3.6.",
    },
    {
      kind: "order",
      q: "Order the recommended AI investment sequencing for an organisation building AI capability for the first time.",
      prompt: "Drag to arrange first phase (top) to last (bottom).",
      items: [
        "Build measurement infrastructure and AI operations foundation.",
        "Deploy productivity AI with committed capacity redeployment plans.",
        "Use productivity ROI wins to fund next-phase AI investment.",
        "Deploy revenue AI with 24-month evaluation horizon and clean attribution design.",
      ],
      correctFeedback:
        "Correct. Infrastructure first, then productivity AI to build credibility and fund the next phase, then revenue AI when the organisation has the measurement maturity and operational foundation. Re-read section 3.7.",
      wrongFeedback:
        "Sequencing matters. Productivity before revenue, infrastructure before deployment. Re-read section 3.7 on portfolio view.",
    },
    {
      q: "What is the correct financial treatment of 'cost avoidance' in an AI business case?",
      options: [
        "Combine it with cost reduction in a single 'total savings' line.",
        "Exclude it entirely — Finance will not accept speculative figures.",
        "Present it in a separate row with the counterfactual explicitly stated and the avoided cost calculation shown.",
        "Round it up to the nearest £500K for simplicity.",
      ],
      correct: 2,
      correctFeedback:
        "Right. Cost avoidance is credible when the counterfactual is explicit, the avoided cost methodology is transparent, and it is separated from auditable cost reduction. Re-read section 3.5.",
      wrongFeedback:
        "Cost avoidance has real value but requires transparent methodology. Re-read section 3.5 on cost avoidance vs cost reduction.",
    },
  ],
});
