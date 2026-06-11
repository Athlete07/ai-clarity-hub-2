import { buildChapter, buildSection, s, x, BL_CALLOUT } from "../concepts-bl-helpers";

export const chapter05BlBuildingAiBusinessCase = buildChapter({
  slug: "bl-building-ai-business-case",
  number: 5,
  shortTitle: "Building the AI Business Case",
  title: "Building the AI Business Case: Structure, Stakeholders, and Sign-Off",
  readingMinutes: 30,
  summary:
    "A winning AI business case is not a financial model with a cover page — it is a structured argument that addresses the concerns of every decision-maker in the approval chain. This chapter builds the complete business case: problem statement, options analysis, financial model, risk register, and governance framework.",
  keyTakeaway:
    "AI business cases fail approval not because the investment is poor, but because the case is incomplete. Every approval decision-maker has a specific question the case must answer. Business leaders who map the questions before writing the case are more likely to get approval on the first submission.",
  pmCallout: BL_CALLOUT,
  sections: [
    buildSection({
      number: "5.1",
      title: "Structure of a winning AI business case",
      subtitle: "The seven components every AI business case needs — and the order that drives approval",
      take: "A winning AI business case has seven components in a specific order: executive summary, problem statement, options analysis, recommended solution, financial model, risk register, and governance framework. This order mirrors the decision-maker's thought process — they will read in this sequence and stop reading when they need more information.",
      why: "Business cases that bury the financial model on page eighteen, or lead with technical architecture before establishing the business problem, lose approval committee attention at the wrong moment. Structure is a persuasion tool, not just an organisational one.",
      paragraphs: [
        [
          s("The executive summary answers five questions in one page. "),
          x(
            "What problem are we solving? What is the recommended investment? What is the financial return? What is the primary risk? And what decision is required? A committee member who reads only the executive summary should have enough information to form a preliminary view before the meeting.",
            "Executive summaries that describe what the AI does rather than what decision is required are documentation, not persuasion. The summary should ask for a specific decision: 'We recommend approval of a £450K investment, returning £1.8M NPV over four years, subject to Phase 1 pilot validation.'",
          ),
          s(" Write the executive summary last — after the full case is complete — and use it to request a specific decision, not to describe the technology."),
        ],
        [
          s("The body of the case builds the argument in five sections. "),
          x(
            "Problem statement: why the status quo is financially or operationally unacceptable. Options analysis: what alternatives were considered and why the recommendation is superior. Financial model: cost-benefit, NPV, payback, and sensitivity. Risk register: the four to six key risks and their mitigations. Governance: success metrics, review cadence, and escalation triggers.",
            "Each section must answer the question that the relevant stakeholder cares about: Finance cares about the model, the Risk committee cares about the register, Operations cares about the change management plan. A case that is strong on the financial model but silent on governance fails one committee member regardless of how well the others are addressed.",
          ),
          s(" Map each business case section to the specific committee member who will scrutinise it — write for the scrutiniser, not the advocate."),
        ],
        [
          s("Length discipline matters: twelve to eighteen pages is the ceiling for board approval. "),
          x(
            "Appendices can contain technical detail, vendor comparison tables, and data analysis. The main body should not exceed eighteen pages. Every page that does not contribute to the approval decision increases the probability that a committee member fixates on a peripheral detail and misses the central argument.",
            "The case for brevity is strategic: a 30-page document signals that the sponsor has not done the work of distinguishing what matters from what is interesting. A twelve-page document signals executive-level thinking.",
          ),
          s(" Set an eighteen-page limit for the business case body before drafting — and enforce it by moving supporting detail to appendices."),
        ],
      ],
      examples: [
        {
          title: "Financial services — executive summary driving committee preparation",
          body: "A bank's AI credit model business case included a one-page executive summary that circulated to all committee members three days before the meeting. Four of five committee members had formed a view before the meeting. The meeting itself focused on two specific risk questions that the summary had flagged, rather than re-reading the document together. Approval time: 35 minutes versus the typical 2-hour session for comparable investments.",
        },
        {
          title: "Retailer — governance gap killing approval",
          body: "A retailer's AI pricing tool business case had an excellent financial model and a thorough risk register. The governance section was two sentences: 'Monthly updates will be provided to the technology steering committee.' The Risk Director asked: 'What happens if adoption falls below 50%? Who has authority to suspend?' No answer existed in the case. Approval was deferred for three weeks while a governance framework was developed. The case passed on resubmission.",
        },
        {
          title: "Healthcare — length discipline in practice",
          body: "A hospital system's AI scheduling tool business case was initially 34 pages. The programme lead compressed it to 14 pages by moving the technical architecture description, vendor comparison table, and full data analysis to appendices. The committee chair commented: 'This is the clearest AI business case I have reviewed.' The approval meeting addressed only the three highest-impact risk questions. The document discipline was the advocacy.",
        },
      ],
    }),
    buildSection({
      number: "5.2",
      title: "Stakeholder mapping for the business case",
      subtitle: "Identifying who will scrutinise which part of the case — and pre-addressing their concerns",
      take: "Every AI business case goes through multiple decision-makers with different frames: the CEO cares about strategic fit; the CFO cares about financial rigour; the CRO cares about risk; the COO cares about operational feasibility; the CTO cares about technical architecture. A case that satisfies four of five will be blocked by the fifth.",
      why: "Stakeholder mapping before writing the case is the most effective way to avoid approval failure. Leaders who map concerns first write cases that answer questions rather than cases that describe solutions.",
      paragraphs: [
        [
          s("Map each decision-maker to their primary concern and their likely challenge. "),
          x(
            "The CFO's primary concern is: is the financial model rigorous and conservative? Their likely challenge: 'What are the cost assumptions you are most uncertain about?' The CRO's concern is: what could go wrong and has it been addressed? Their likely challenge: 'What happens if the AI makes a bad decision in a high-stakes scenario?'",
            "Write the challenge in advance and draft the answer. If you cannot answer the challenge clearly, you have a gap in the case — not a stakeholder management problem.",
          ),
          s(" List every decision-maker, their primary concern, and one likely challenge before drafting the business case body."),
        ],
        [
          s("Pre-brief the highest-scrutiny stakeholder before the committee meeting. "),
          x(
            "The stakeholder most likely to block approval — usually the CFO for financial cases or the CRO for regulated industries — should see the case before the committee meeting. A bilateral review gives them the opportunity to shape the methodology, which converts them from a potential blocker to an advocate.",
            "Pre-briefing is not the same as lobbying. It is a quality improvement step: their challenge may reveal a genuine gap that improves the case for all stakeholders.",
          ),
          s(" Schedule a bilateral pre-brief with the CFO and CRO at least ten days before the approval committee — not the day before."),
        ],
        [
          s("Identify the 'silent no' — the stakeholder who will not object publicly but whose opposition will surface later. "),
          x(
            "AI business cases frequently encounter 'silent no' situations: a department head who is not on the approval committee but whose team will be most affected; a middle manager whose workflow will change most significantly; a technical lead whose existing system will be replaced.",
            "Silent opposition surfaces as implementation resistance, adoption refusal, and programme delays after approval. Stakeholder mapping should include the implementation layer, not just the approval layer.",
          ),
          s(" Map stakeholders at both approval and implementation layers — the implementation layer is where the programme will succeed or fail regardless of what the committee approves."),
        ],
      ],
      examples: [
        {
          title: "Insurance — CFO pre-brief that changed the case",
          body: "An insurance company pre-briefed the CFO on an AI claims automation business case ten days before the investment committee. The CFO identified that the productivity ROI assumed a staffing reduction that HR had not agreed to. Without the pre-brief, this would have been a committee-level challenge. With it, the programme sponsor spent two days getting HR alignment. The revised case included explicit HR sign-off. The committee meeting took 25 minutes.",
        },
        {
          title: "Retailer — implementation-layer stakeholder",
          body: "A retailer's AI inventory optimisation business case was approved by the technology committee. Three months after launch, adoption was 22% because the regional operations managers — not on the approval committee — had not been engaged in the design. Each had minor but blocking workflow concerns. Mapping the implementation layer before approval would have identified these stakeholders and their concerns. Retrofitting engagement after approval cost six months of programme performance.",
        },
        {
          title: "Financial services — CRO made an advocate",
          body: "A bank's AI customer risk scoring case was pre-briefed to the CRO who had previously blocked a similar submission. The pre-brief revealed two specific concerns: model explainability for regulatory review and the escalation path for AI-generated decisions that were appealed. Both were addressed in the revised case. The CRO endorsed the case at the committee meeting — citing the explainability framework as 'precisely what the regulator would expect.' The pre-brief converted the most likely blocker into the strongest advocate.",
        },
      ],
    }),
    buildSection({
      number: "5.3",
      title: "The problem statement",
      subtitle: "Why the problem statement is the most important and most underwritten section",
      take: "A weak problem statement lets the committee substitute their own problem framing — which may be different from yours. A strong problem statement establishes the cost of inaction, quantifies the current state pain, and creates urgency that makes the investment obviously necessary rather than optionally desirable.",
      why: "Committees approve investments that solve clearly painful, financially quantified problems. The problem statement is the emotional and analytical case for urgency. Without it, the AI investment is a solution in search of a problem — and every committee has approved solutions in search of problems that failed to deliver value.",
      paragraphs: [
        [
          s("Quantify the cost of the current state in financial terms. "),
          x(
            "A problem statement that describes pain without a number — 'our process is too slow and error-prone' — is advocacy without evidence. A problem statement that says 'our current process generates £1.4M per year in rework cost, delays customer onboarding by 4.2 days on average, and requires 12 FTE hours per transaction' creates a financially quantified baseline that every benefit claim can be compared against.",
            "The quantified problem statement also sets the scale of ambition: a £1.4M per year problem should attract a solution that addresses a meaningful fraction of that cost — not an investment that delivers £80K of saving.",
          ),
          s(" Express the problem in pounds and business impact metrics — not in process description or technology language."),
        ],
        [
          s("Document the cost of inaction over a specific horizon. "),
          x(
            "If the problem is not addressed, what happens in 12 months? In 24 months? Competitive pressure, regulatory change, cost inflation, and talent retention challenges may make the problem worse over time. Documenting this trajectory makes the 'wait and see' option financially explicit.",
            "The cost of inaction is particularly compelling for risk reduction AI: a compliance breach that occurs once every 18 months, at £2.3M per event, will occur with a probability of approximately 67% in the next 12 months — unless AI reduces the frequency. That expected cost belongs in the problem statement.",
          ),
          s(" Add a paragraph to every problem statement that explicitly calculates the cost of doing nothing over the next 24 months."),
        ],
        [
          s("Connect the problem to strategic priorities the committee has already endorsed. "),
          x(
            "A problem that is isolated from strategic priorities is easier to defer. A problem that is an operational obstacle to a strategy the board has already approved is urgent by proxy: 'Our manual compliance review process is the primary constraint on the geographic expansion that the board approved in Q1.'",
            "This connection should be explicit, not implied. Name the strategy, name the constraint, and show how AI removes the constraint. The investment becomes a strategic enabler, not a cost centre.",
          ),
          s(" Name one strategic priority already approved by the committee that the AI investment directly enables — and make that connection the first paragraph of the problem statement."),
        ],
      ],
      examples: [
        {
          title: "Manufacturing — quantified problem statement",
          body: "A manufacturer's AI quality inspection business case led with: 'Our current manual inspection process generates £1.9M per year in escaped defects (customer returns, warranty claims, brand cost). At current production growth rates, this will reach £2.7M within 18 months. Manual inspection capacity is the primary bottleneck preventing our planned production line expansion.' Three numbers, three problems, one connection to strategic priority. The committee understood the investment before the solutions slide.",
        },
        {
          title: "Professional services — cost of inaction",
          body: "A consulting firm's AI talent management tool business case included: 'At current attrition rates and replacement costs, we will spend £3.4M on consultant replacement in the next 24 months. Attrition survey data shows 38% of respondents cite administrative task burden as a primary dissatisfier. Addressing this driver through AI tools is expected to reduce the 24-month replacement cost by £920K—£1.1M.' The cost of inaction framing made a productivity investment feel urgent.",
        },
        {
          title: "Financial services — strategic connection",
          body: "A bank's AI document processing case opened with: 'Our international expansion strategy, approved at the February board meeting, requires an additional 340 mortgage origination transactions per month by Q4. Our current document processing capacity handles 280 per month. Manual capacity expansion would cost £1.4M/year in staffing and delay the expansion by eight months. AI document processing removes the capacity constraint at £380K investment and four-month implementation.' The business case was approved without a financial model discussion — the problem statement made the investment obvious.",
        },
      ],
    }),
    buildSection({
      number: "5.4",
      title: "Options analysis",
      subtitle: "Why presenting only the recommended solution is the most common business case mistake",
      take: "Presenting a single AI solution without an options analysis is the most common business case mistake. It signals that the sponsor has not considered alternatives — which gives committee members licence to propose their own alternatives and derail the meeting. A credible options analysis considers at least three alternatives and shows objectively why the recommendation is superior.",
      why: "Options analysis builds credibility with sceptical committee members — it demonstrates that the recommendation was reached through analysis, not through attachment to a preferred solution. The most persuasive recommendation is one that survives comparison with clear alternatives.",
      paragraphs: [
        [
          s("Always include the 'do nothing' option, honestly evaluated. "),
          x(
            "The do-nothing option is the status quo extended over the evaluation period. It has a cost (the continuing cost of the current state problem) and it has zero investment cost. Including it honestly — showing why the cost of inaction exceeds the cost of investment — is the most powerful argument for change.",
            "A do-nothing option that is dismissed in one sentence ('not viable') without financial analysis fails the credibility test. A do-nothing option that is evaluated with the same rigour as the investment options demonstrates analytical integrity.",
          ),
          s(" Present the do-nothing option with a five-year cost calculation — show numerically why inaction is more expensive than investment."),
        ],
        [
          s("Include a 'manual process improvement' option as the non-AI alternative. "),
          x(
            "Most AI investments have a manual equivalent: hire more people, improve the process, add controls. The manual alternative often costs more over five years than AI — but the business case must demonstrate this numerically, not assert it.",
            "The manual alternative also reveals the minimum bar the AI investment must clear: if hiring three additional FTEs costs £420K per year and delivers the same outcome as AI at £380K per year total cost of ownership, the AI investment adds only marginal cost-efficiency value. The case must rest on quality, speed, or scalability advantages.",
          ),
          s(" Calculate the manual alternative's five-year TCO alongside the AI solution — not as a footnote but as a full financial comparison."),
        ],
        [
          s("The recommended option must be demonstrably superior on the criteria that matter most. "),
          x(
            "Define two or three criteria before the analysis and show how the recommended option wins on those criteria. The criteria should match what the committee cares about: typically financial return, implementation risk, and strategic capability.",
            "A recommendation that is best on financial return but highest on implementation risk needs a risk mitigation argument. A recommendation that is lowest risk but not the best financial return needs a risk-adjusted return argument. The options comparison must anticipate the trade-off challenge.",
          ),
          s(" Define the evaluation criteria before comparing options — and make the criteria visible in the comparison table so the selection logic is transparent."),
        ],
      ],
      examples: [
        {
          title: "Retailer — do-nothing option that made the case",
          body: "A retailer's AI pricing engine options analysis included do-nothing evaluated as: current margin optimisation gap £2.2M/year, expected to grow to £3.4M/year with product range expansion in 18 months. Five-year do-nothing cost: £13.5M in foregone optimisation. AI five-year TCO: £1.8M. Manual analyst expansion five-year TCO: £4.2M. The do-nothing analysis was the most important page in the business case. It made the AI investment look conservative by comparison.",
        },
        {
          title: "Insurance — manual alternative revealing AI's real advantage",
          body: "An insurer's AI claims assessment options analysis showed: manual process improvement five-year TCO of £3.1M (hiring, training, quality controls) versus AI five-year TCO of £2.4M. The cost difference was modest. The decisive argument was quality and consistency: the AI delivered 94% assessment consistency versus 78% for manual assessment (documented from pilot data). The recommendation rested on quality, not cost — a stronger argument for a regulated insurer than a pure cost comparison.",
        },
        {
          title: "Manufacturing — criteria-first comparison",
          body: "A manufacturer's AI quality inspection options analysis defined three criteria upfront: unit economics (cost per inspection), detection rate, and scalability. A table showed: current manual system (£1.42/inspection, 87% detection, no linear scaling), rule-based automated system (£0.84/inspection, 91% detection, limited scalability), and AI vision system (£0.38/inspection, 97.3% detection, full linear scaling). The AI option won on all three criteria. The options table was the business case — the financial model simply quantified the advantage.",
        },
      ],
    }),
    buildSection({
      number: "5.5",
      title: "Financial model structure",
      subtitle: "The four elements every AI financial model must include for board-level approval",
      take: "The AI financial model for board approval requires four elements: a complete cost inventory in year-by-year format, a confidence-weighted benefit model with hard and soft separated, a five-year NPV with stated hurdle rate, and a sensitivity analysis with break-even points for the top two variables. Anything less is a financial sketch, not a model.",
      why: "Financial model quality is the single strongest signal of business case maturity. Committees that have seen poor AI financial models — which most have by 2025 — will apply a higher scrutiny standard than for non-AI investments. Meeting the standard on the first submission earns faster approval.",
      paragraphs: [
        [
          s("Year-by-year costs with categorised inventory. "),
          x(
            "Present costs in a table with eight rows (one per cost category) and five columns (one per year). This format makes the cost trajectory immediately visible: the high first-year implementation costs tapering to steady-state operations from year two. Committee members can identify the cash flow profile without asking questions.",
            "Grand total rows for each year give the operating cost baseline. A 'total cost of ownership' summary below the table provides the five-year aggregate for NPV input.",
          ),
          s(" Use a tabular cost model with one row per category and one column per year — never a single 'total investment' figure."),
        ],
        [
          s("Confidence-weighted benefit model with hard and soft separated. "),
          x(
            "Two benefit sections: hard benefits (P&L traceable, 90% confidence applied) and soft benefits (conversion methodology stated, confidence 35–75% applied based on evidence quality). Each benefit has an annual estimate and a confidence-adjusted figure.",
            "The confidence-adjusted column is the only column that should be used in the NPV calculation. Using unadjusted benefits in the NPV overstates the return.",
          ),
          s(" Use confidence-adjusted benefit figures in the NPV calculation — the unadjusted total is headline information, not the basis for the investment decision."),
        ],
        [
          s("NPV with stated hurdle rate and sensitivity table. "),
          x(
            "Five-year NPV calculated at the organisation's standard hurdle rate. Payback period. Internal rate of return. Sensitivity table showing NPV at ±20% on the top three variables. Break-even adoption rate.",
            "The sensitivity table is often the most-read section of the financial model in committee meetings. It answers the committee's implicit question: 'What could go wrong and how bad would the ROI be?' A robust NPV under adverse scenarios is more persuasive than an impressive base-case NPV.",
          ),
          s(" Make the sensitivity table a visual graphic (bar chart of NPV ranges) rather than a number table — it communicates risk bounds more effectively to non-financial committee members."),
        ],
      ],
      examples: [
        {
          title: "Technology company — year-by-year cost model",
          body: "A SaaS company's AI customer success tool had a year-by-year cost model that revealed: Year 1 total cost £840K (implementation-heavy), Year 2 £320K (steady state), Years 3-5 £290K/year (declining per-unit cost as scale increased). The year-by-year format showed the committee the implementation cash flow spike and the attractive ongoing cost structure. Without the annual breakdown, the CFO would have challenged a single 'total investment' figure without seeing the trajectory.",
        },
        {
          title: "Financial services — confidence weighting preventing challenge",
          body: "A bank's AI risk monitoring tool used confidence weights: four hard benefits at 90% and three soft benefits at 55%, 40%, and 30%. The CFO challenged the 55% weight for the compliance efficiency soft benefit. After discussion, they agreed on 45%. The NPV recalculated as £1.84M versus £1.97M — still clearly positive. Because the confidence framework existed, the challenge was constructive rather than categorical. The investment was approved with the revised assumption.",
        },
        {
          title: "Manufacturing — sensitivity graphic convincing a sceptic",
          body: "A manufacturer's investment committee included a Board member who was consistently sceptical of AI ROI claims. The sensitivity chart showed NPV ranges from £420K (worst case: 40% adoption, 20% cost overrun) to £2.8M (best case). Even the worst case was positive. The Board member commented: 'For the first time, I can see that the investment is robust across scenarios, not just in the optimistic case.' The chart answered the sceptic's question before it was asked.",
        },
      ],
    }),
    buildSection({
      number: "5.6",
      title: "Risk register in the business case",
      subtitle: "The four risk categories every AI business case must address — and how to present mitigations credibly",
      take: "AI business case risk registers must address four categories: technical risk (does the AI perform as specified?), adoption risk (will users use it at the level assumed?), integration risk (will it connect to existing systems on time and on budget?), and dependency risk (what happens if the vendor changes pricing, capability, or terms?). A register that omits any category will be supplied by the committee — usually with a more alarming framing.",
      why: "The risk register is the most-scrutinised section by the CRO and the board risk committee. A register that identifies risks honestly and provides specific, action-ready mitigations demonstrates programme maturity. A register that lists generic risks with generic mitigations signals the team has not thought through the delivery.",
      paragraphs: [
        [
          s("Rate each risk on probability and impact before mitigation and after mitigation. "),
          x(
            "A risk rated as 'high probability, high impact' before mitigation that remains 'high probability, high impact' after mitigation is a risk without a mitigation — presenting it as mitigated is misleading. The before/after comparison shows whether the mitigation actually moves the risk profile or simply acknowledges the risk exists.",
            "Committee members who understand risk will check whether the residual risk rating is genuinely lower than the inherent risk. If it is not, they will ask why the mitigation is being counted.",
          ),
          s(" Show both inherent risk (before mitigation) and residual risk (after mitigation) for every risk in the register — and only present genuinely lower residual ratings."),
        ],
        [
          s("Name specific mitigations, owners, and trigger dates. "),
          x(
            "Generic mitigations — 'we will monitor performance closely' or 'the team will manage this actively' — are not mitigations. Specific mitigations identify the action, the owner, and the date or trigger: 'If adoption falls below 60% by week eight, the programme sponsor will commission a change management intervention within five working days.'",
            "Named ownership is the single most important element of a credible risk register. A risk owned by 'the programme team' is owned by no one. A risk owned by a named individual with clear accountability is a managed risk.",
          ),
          s(" Assign every risk in the register to a named individual with a trigger condition and a response action."),
        ],
        [
          s("Dependency risk requires vendor-specific analysis. "),
          x(
            "AI vendor dependency risk includes: API pricing changes, model deprecation, capability degradation, and competitive overlap (the vendor may build what you are building). Each deserves a specific analysis: what is the contractual protection? What is the switch cost? What is the fallback?",
            "In 2025, foundation model provider risk is the most common unaddressed risk in AI business cases. A case that does not acknowledge the risk of a single-vendor API dependency invites the CTO or CRO to raise it — and their framing will be less favourable than yours.",
          ),
          s(" Address AI vendor dependency risk explicitly in the register — including the contractual terms, the switch cost, and the fallback option."),
        ],
      ],
      examples: [
        {
          title: "Financial services — before/after risk rating showing real mitigation",
          body: "A bank's AI credit model risk register showed technical accuracy risk: inherent probability Medium, inherent impact High. Mitigation: human review of all AI decisions above £50K, quarterly model performance audits, independent back-testing against human decisions. Residual probability Low, residual impact Medium. The before/after comparison was credible because the mitigation specifically reduced both probability (through audits) and impact (through human review). The Risk Director accepted the residual rating without challenge.",
        },
        {
          title: "Retailer — adoption risk with named owner",
          body: "A retailer's AI markdown tool risk register: adoption risk below 60% by week 8. Mitigation owner: Head of Merchandising (named). Trigger: If weekly active users in the merchandising team fall below 60% at the week 8 check-in, the Head of Merchandising will convene an adoption review and present options (additional training, workflow redesign, incentive change) within 10 business days. The specificity of the trigger and the named owner made the risk credible to the COO, who was the approval hold-out.",
        },
        {
          title: "Professional services — vendor dependency addressed proactively",
          body: "A consulting firm's AI knowledge platform risk register addressed OpenAI API dependency directly: 'The system is designed with model-agnostic API abstraction. Estimated switch cost to an alternative provider: 6 weeks engineering, £45K. Current contractual commitment: 12-month renewal with 90-day notice. Fallback: Anthropic API validated in parallel architecture during development phase.' The CTO had been expected to raise vendor dependency. The proactive treatment of it converted the expected challenge into a validation of the programme team's technical maturity.",
        },
      ],
    }),
    buildSection({
      number: "5.7",
      title: "Governance and success criteria",
      subtitle: "The governance framework that keeps AI investments accountable post-approval",
      take: "An AI business case approved without a governance framework is an approval without accountability. Post-deployment governance — success criteria, review cadence, escalation triggers, and investment continuation thresholds — transforms the business case from a one-time approval into an ongoing management contract between the programme and the organisation.",
      why: "The governance framework is the mechanism by which the business leader maintains accountability and credibility for the investment. Without it, the approval meeting ends all formal scrutiny — until the investment fails and everyone asks what happened.",
      paragraphs: [
        [
          s("Define success criteria in three tiers: minimum viable outcome, base case, and stretch. "),
          x(
            "Minimum viable outcome: the ROI threshold below which the investment should be suspended and reviewed. Base case: the target committed in the business case. Stretch: the high scenario that would justify additional investment. These three tiers create a decision tree for every review.",
            "The minimum viable outcome is the most important governance element because it creates an unambiguous suspension trigger. A programme that is below minimum viable outcome by month 12 should be reviewed — not reclassified as 'on track' with adjusted expectations.",
          ),
          s(" Define the minimum viable outcome — the point at which you will recommend suspending the investment — and include it in the governance framework at approval time."),
        ],
        [
          s("Set the review cadence to match the programme risk level. "),
          x(
            "Low-risk AI deployments: monthly operational dashboard, quarterly steering review, annual investment decision. High-risk AI deployments (new technology, complex integration, regulated domain): fortnightly operational dashboard, monthly steering review, six-monthly investment decision.",
            "Review cadence signals to the organisation how seriously the investment is being managed. High-risk deployments with only annual reviews send the message that no one is watching — which invites programme drift.",
          ),
          s(" Match the review cadence to the residual risk rating in the risk register — high residual risk requires higher-frequency review."),
        ],
        [
          s("Name the investment continuation decision authority and the criteria for each decision. "),
          x(
            "Who can approve: continuing to the next phase? Suspending for review? Terminating early? The decision authority should be named, with criteria for each decision. Ambiguity about who decides and on what basis produces governance vacuums that programme sponsors fill opportunistically.",
            "Investment continuation criteria should be positive (what must be true to continue) rather than negative (what must not happen to avoid termination). Positive criteria focus the programme team on delivery rather than minimum threshold management.",
          ),
          s(" Name the continuation authority and state positive criteria for each stage gate — not just the conditions for termination."),
        ],
      ],
      examples: [
        {
          title: "Insurance — three-tier success criteria",
          body: "An insurer's AI claims automation governance framework defined: Minimum viable outcome: claims processing cost reduction of at least 12% by month 12 (below this, programme suspended for root cause review). Base case: 22% cost reduction by month 12, 31% by month 24. Stretch: 35% cost reduction and expansion to two additional claims categories by month 24. The three tiers were published to all programme stakeholders at launch. At month 12, actual reduction was 18% — above minimum viable outcome, 4 points below base case. The governance tiers made the conversation constructive rather than political.",
        },
        {
          title: "Manufacturing — high-risk cadence",
          body: "A manufacturer's AI quality inspection programme had high residual risk (new technology, complex vision system integration). Governance framework: fortnightly operational dashboard (adoption, accuracy metrics, integration incidents), monthly steering review (programme director, IT director, quality director), six-monthly investment decision (MD sign-off). At month four, the fortnightly dashboard flagged integration incidents exceeding threshold. The monthly steering review commissioned a technical audit. The six-monthly decision was made with full information. The cadence prevented a silent drift to failure.",
        },
        {
          title: "Financial services — continuation criteria not termination",
          body: "A bank's AI compliance monitoring programme stated continuation criteria positively: 'Phase 2 investment of £280K will be approved when: (a) Phase 1 is live and stable for 60 days, (b) detection rate exceeds 92%, (c) false positive rate is below 8%, and (d) user adoption exceeds 80% in the compliance team.' These four criteria directed the programme team's attention. Phase 2 was approved 68 days after Phase 1 launch — all four criteria met.",
        },
      ],
    }),
    buildSection({
      number: "5.8",
      title: "BL decision lens: sign-off readiness",
      subtitle: "The five questions to answer before putting the business case to the committee",
      take: "Sign-off readiness is not about confidence in the outcome — it is about confidence in the quality of the case. Business leaders who submit cases before they are ready waste committee time, create precedents for poorly structured AI submissions, and make their next approval more difficult. Five questions test readiness.",
      why: "The approval committee's time is finite and their memory of previous AI business cases is long. A well-prepared case earns trust that carries forward to the next investment; a poorly prepared case creates a shadow of scepticism over every subsequent submission.",
      paragraphs: [
        [
          s("Question one: has every committee member been mapped to their primary concern and pre-briefed if appropriate? "),
          x(
            "If you have not had a bilateral conversation with the CFO and CRO before the committee meeting, and if either has not reviewed the financial model and risk register, the first time they see the case is in the meeting — and their reaction is unmanaged.",
            "Pre-briefing does not guarantee approval. It ensures that challenges are anticipated, that the major objections have been addressed, and that the committee member's concern has been heard rather than surprised out of them.",
          ),
          s(" Before submission, confirm that the CFO has reviewed the financial model and the CRO has reviewed the risk register."),
        ],
        [
          s("Question two: does the executive summary request a specific decision — and can you defend the primary ROI claim cold? "),
          x(
            "If the executive summary describes what the AI does rather than requesting a specific investment decision, it is not ready. If the primary ROI claim includes an assumption you cannot defend under direct challenge without returning to your notes, the case is not ready.",
            "Rehearse the three most likely challenges with a colleague playing the CFO role. If any answer requires more than two minutes or requires revisiting the appendix, the case needs to be strengthened before submission.",
          ),
          s(" Rehearse three challenge responses to the primary ROI claim before submission — if any answer is unclear, revise the case rather than the rehearsal."),
        ],
        [
          s("Questions three through five: governance framework complete, measurement infrastructure committed, and options analysis credible. "),
          x(
            "Third: does the governance framework include a named minimum viable outcome, a review cadence, and a named continuation decision authority? Fourth: has the measurement infrastructure (dashboards, data pipelines, reporting cadence) been committed with a live date before go-live? Fifth: does the options analysis include do-nothing evaluated with a five-year cost, and does the recommended option objectively win on the committee's stated criteria?",
            "These five questions are a checklist, not an aspiration. Submit the case when all five are confirmed — not when four are confirmed and the fifth is 'in progress.'",
          ),
          s(" Use the five questions as a formal sign-off checklist — the business case is not ready for submission until all five have documented yes answers."),
        ],
      ],
      examples: [
        {
          title: "Technology company — sign-off checklist in practice",
          body: "A technology company implemented a formal sign-off checklist for AI business cases above £150K. The checklist required written confirmation on all five readiness questions. The first three submissions failed the checklist — all three had incomplete governance frameworks. The checklist was uncomfortable but effective: the first submission to clear all five questions was approved at first committee meeting. Two of the three previous submissions had required multiple committee appearances.",
        },
        {
          title: "Financial services — rehearsal revealing a gap",
          body: "A programme lead rehearsed her AI credit tool business case with a colleague playing CFO. The CFO challenge: 'What is your methodology for attributing the default rate reduction to AI versus the macroeconomic improvement in borrower creditworthiness?' The programme lead could not answer clearly. She spent three days refining the attribution methodology with the data team. The actual CFO asked the same question. The answer was given in 90 seconds with a clear methodology stated. The case was approved.",
        },
        {
          title: "Healthcare — measurement infrastructure pre-commitment",
          body: "A hospital's AI surgical scheduling business case required written confirmation that the measurement infrastructure (OR utilisation dashboard, baseline data pipeline, reporting framework) would be live 14 days before go-live. The IT team initially said this was not possible within the programme timeline. The readiness checklist forced a conversation that moved the go-live date back by three weeks rather than compromising the measurement infrastructure. The programme sponsor later said the three-week delay was the best programme management decision they made.",
        },
      ],
    }),
  ],
  quiz: [
    {
      q: "A business case has an excellent financial model but a two-sentence governance section. What is the most likely consequence?",
      options: [
        "The committee will overlook the governance gap because the financials are strong.",
        "The case will be approved faster due to its brevity.",
        "The CRO or a committee member will block or defer approval until a governance framework is provided.",
        "Governance sections are optional in AI business cases.",
      ],
      correct: 2,
      correctFeedback:
        "Correct. Every committee has a member responsible for governance. A weak governance section invites either a block or a deferral for revision. Re-read sections 5.1 and 5.7.",
      wrongFeedback:
        "Governance is a required component. Re-read section 5.7 on governance frameworks.",
    },
    {
      q: "Why is pre-briefing the CFO and CRO before the committee meeting a best practice rather than a lobbying tactic?",
      options: [
        "It allows the sponsor to hear challenges before the meeting and address them in the case.",
        "It ensures those stakeholders vote in favour regardless of the case quality.",
        "It is a mandatory regulatory requirement.",
        "Pre-briefing is not recommended — all committee members should see the case for the first time together.",
      ],
      correct: 0,
      correctFeedback:
        "Right. Pre-briefing is a quality improvement step. Their challenges may reveal genuine gaps — and the case is stronger for addressing them before the meeting. Re-read section 5.2.",
      wrongFeedback:
        "Pre-briefing is a case quality improvement mechanism. Re-read section 5.2 on stakeholder mapping.",
    },
    {
      kind: "order",
      q: "Order the seven components of a winning AI business case in the correct presentation sequence.",
      prompt: "Drag to arrange first component (top) to last (bottom).",
      items: [
        "Executive summary (specific decision requested, key financial headline)",
        "Problem statement (quantified cost of current state, cost of inaction)",
        "Options analysis (including do-nothing, manual alternative, and recommendation)",
        "Financial model (year-by-year costs, confidence-weighted benefits, NPV, sensitivity)",
        "Risk register (four categories, inherent and residual ratings, named owners)",
        "Governance framework (success criteria, review cadence, continuation authority)",
        "Appendices (technical detail, vendor comparisons, full data analysis)",
      ],
      correctFeedback:
        "Correct sequence. This order mirrors the committee's decision process and addresses each stakeholder's question at the right point. Re-read section 5.1.",
      wrongFeedback:
        "The case structure should mirror the committee's decision-making sequence. Re-read section 5.1.",
    },
    {
      kind: "categorize",
      q: "Sort each element into the correct business case section.",
      categories: ["Problem statement", "Financial model", "Risk register", "Governance framework"],
      items: [
        { text: "The current manual process costs £1.4M/year in rework and delays.", category: 0 },
        { text: "Five-year NPV of £2.1M at 10% hurdle rate.", category: 1 },
        { text: "Vendor API pricing risk — mitigated by model-agnostic abstraction layer.", category: 2 },
        { text: "Minimum viable outcome: 15% cost reduction by month 12.", category: 3 },
        { text: "Cost of inaction over 24 months: £3.2M at current growth trajectory.", category: 0 },
        { text: "Break-even adoption rate: 62%.", category: 1 },
      ],
      correctFeedback:
        "Right. Each element belongs in a specific section. Mixing them reduces the impact of each section. Re-read sections 5.3, 5.5, 5.6, and 5.7.",
      wrongFeedback:
        "Each business case element has a designated section for maximum impact. Re-read sections 5.3–5.7.",
    },
    {
      q: "The options analysis in an AI business case presents only the recommended AI solution. What is the primary weakness of this approach?",
      options: [
        "It takes up too much space in the document.",
        "It signals that alternatives were not considered, giving committee members licence to propose their own alternatives and derail the discussion.",
        "Options analysis is only required for investments above £1M.",
        "Presenting only the recommendation demonstrates confidence in the solution.",
      ],
      correct: 1,
      correctFeedback:
        "Correct. A single-option business case invites alternative-generation by the committee. A credible options analysis considers at least three alternatives (including do-nothing) and shows objectively why the recommendation is superior. Re-read section 5.4.",
      wrongFeedback:
        "Options analysis is a credibility tool. Re-read section 5.4.",
    },
    {
      kind: "order",
      q: "Order the five sign-off readiness questions a business leader should answer before submitting an AI business case.",
      prompt: "Drag to arrange first check (top) to last (bottom).",
      items: [
        "Has every committee member been mapped and the CFO/CRO pre-briefed?",
        "Does the executive summary request a specific decision and can the primary ROI claim be defended cold?",
        "Does the governance framework include minimum viable outcome, review cadence, and decision authority?",
        "Has measurement infrastructure been committed with a live date before go-live?",
        "Does the options analysis include do-nothing evaluated and the recommendation winning on stated criteria?",
      ],
      correctFeedback:
        "Correct. All five must be confirmed before submission. Re-read section 5.8.",
      wrongFeedback:
        "All five readiness questions must be answered before the case is submitted. Re-read section 5.8.",
    },
  ],
});
