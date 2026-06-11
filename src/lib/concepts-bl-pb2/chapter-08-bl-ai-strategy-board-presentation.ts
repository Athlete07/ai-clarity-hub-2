import { buildChapter, buildSection, s, x } from "../concepts-bl-helpers";

export const chapter08BlAiStrategyBoardPresentation = buildChapter({
  slug: "bl-ai-strategy-board-presentation",
  number: 8,
  shortTitle: "Board AI Presentation",
  title: "Presenting AI Strategy to the Board — Getting Approval That Sticks",
  readingMinutes: 20,
  summary:
    "Board AI presentations fail when they lead with technology and end with a funding request that the board cannot evaluate on their own terms. This chapter gives business leaders the structure, language, and preparation to present AI strategy as a capital allocation decision that the board can evaluate, approve, and govern — and that produces sustained investment rather than one-off approval.",
  keyTakeaway:
    "Boards approve AI investment when it is presented as a business capital allocation decision with comprehensible returns, clear risk management, and credible governance. They resist it when it feels like a technology enthusiasm that requires trust they have not yet earned. The business leader's job is to make AI feel like the former before the presentation starts.",
  pmCallout:
    "As a business leader: the board presentation is your accountability moment. You are asking for sustained investment on the basis of your judgment about strategic priorities. Present with the specificity you would want if you were on the other side of the table.",
  sections: [
    buildSection({
      number: "8.1",
      title: "What the Board Actually Wants",
      subtitle: "Understanding the fiduciary lens before designing the presentation",
      take: "Board members evaluating AI investment are asking four questions: Is this the right strategic bet given what we know about the competitive environment? Is the expected return credible and the downside bounded? Is there a governance mechanism that will keep the programme on track? And is this leader credible enough that I should trust their judgment on this investment? The presentation must answer all four — in that order.",
      why: "Most AI presentations answer the technology questions that the presenting team is most comfortable with. Boards ask strategic and governance questions. The gap between what is presented and what is being evaluated is why AI presentations so often produce 'we need more information' rather than approval.",
      paragraphs: [
        [
          s("Boards evaluate AI investment as a capital allocation decision, not a technology decision. "),
          x(
            "The board's lens is: what is this investment expected to return, over what time horizon, at what risk, compared to alternatives? This is the same lens applied to a factory acquisition, a market entry, or an R&D programme. AI is not special — it is a capital allocation category that happens to have probabilistic returns and technology execution risk.",
            "The presenting leader who speaks in capital allocation terms — expected return ranges, investment horizon, risk-adjusted comparison to alternatives — earns the board's respect as a peer in the investment conversation. The leader who speaks in technology terms alone signals that they are not yet operating at the fiduciary level the board requires.",
          ),
          s(" Speak capital allocation at board level — not technology capability."),
        ],
        [
          s("Credibility is the pre-condition for everything else. "),
          x(
            "Board members who do not trust the presenting leader's judgment will find reasons to decline any AI investment regardless of the quality of the presentation. Credibility is built before the presentation: through accurate forecasting, through delivering on previous commitments, through honest disclosure of challenges alongside successes.",
            "A leader who has previously over-promised and under-delivered on AI investment faces a higher credibility burden at every subsequent presentation. The remedy is not better slides — it is a track record of accurate forecasts and honest disclosure. Build credibility before the approval conversation, not during it.",
          ),
          s(" Credibility is built before the presentation — the presentation reveals it, it does not create it."),
        ],
        [
          s("Boards are more risk-aware than they are technology-curious. "),
          x(
            "Technology enthusiasts presenting to boards often calibrate their presentation for the technology interest they wish the board had. Boards have fiduciary responsibility — their primary lens is risk management, not opportunity maximisation. A presentation that minimises risk to maximise the approval probability is a presentation that loses credibility the moment a risk materialises that was not disclosed.",
            "Present risk prominently, clearly, and with specific mitigation. Board members who are surprised by a risk post-approval lose confidence in the leader's judgment; board members who were clearly told about a risk and saw a credible mitigation maintain confidence even when the risk materialises.",
          ),
          s(" Risk transparency before the approval earns more sustained support than risk minimisation."),
        ],
      ],
      examples: [
        {
          title: "A financial services group — capital allocation language",
          body: "A financial services group's CDO redesigned the AI strategy presentation after two consecutive board sessions produced 'we need more information'. The redesign removed all technical content from the main presentation and framed AI investment in capital allocation terms: 'We are proposing a £4.8M, three-year investment envelope. Conservative expected return: £6.2M over five years. Base case: £9.8M. Optimistic: £14.2M. The conditions under which each applies are the performance gates in the governance framework.' The board approved in the same session. The CDO noted: 'I presented the same programme — I just spoke their language.'",
        },
        {
          title: "A retailer — credibility built through honest disclosure",
          body: "A retailer's Chief Digital Officer had disclosed a six-month programme delay at the previous board meeting — proactively, before the board raised it — with root cause analysis and a revised milestone plan. At the next board meeting, when presenting a new AI investment proposal, a board member opened with: 'Given how you handled the programme delay, I'm comfortable with your risk assessment here.' The honest disclosure of a setback had built more credibility than a smooth programme report would have.",
        },
        {
          title: "A bank — risk disclosure that maintained confidence post-materialisation",
          body: "A bank's AI fraud detection board presentation included a specific risk: 'Vendor API changes could require an integration rebuild at estimated cost of £280K. We have a contract clause that provides 90-day notice; we have allocated a contingency reserve of £350K.' Twelve months later, the vendor API changed and the integration rebuild was required. The board was informed; the £280K cost was drawn from the contingency reserve. No confidence was lost. The risk had been disclosed, quantified, and provisioned.",
        },
      ],
    }),
    buildSection({
      number: "8.2",
      title: "Presentation Structure",
      subtitle: "The sequence that earns approval from the first slide",
      take: "The most effective AI board presentation has six sections in a specific sequence: strategic context (why now), competitive imperative (why we must act), investment proposal (what we are asking for), expected returns (what we expect to receive), risk and governance (what could go wrong and how we will manage it), and approval request (what decision we need today). Each section earns the next; removing any section creates a gap that board questions will fill.",
      why: "Presentation structure is not about aesthetics — it is about managing the board's decision-making journey from context to conviction. Sections out of order produce premature questions that derail the narrative. Missing sections produce delayed objections that derail the approval.",
      paragraphs: [
        [
          s("Strategic context earns the board's attention before the investment case is made. "),
          x(
            "Three to five minutes on the competitive and strategic environment that makes AI investment necessary. Not a technology survey — a business assessment. What is happening in our competitive environment that makes AI investment urgent? What customer needs are evolving that AI can address? What internal constraints is AI the best lever to remove?",
            "The strategic context section establishes that the leader has a clear view of the business environment and that AI investment is a response to that environment — not a technology enthusiasm independent of it.",
          ),
          s(" Strategic context is the permission structure for everything that follows."),
        ],
        [
          s("The investment proposal section specifies what is being asked for. "),
          x(
            "Clear, specific, and complete: total investment amount, time horizon, governance mechanism, and the decision point today (full approval, phased approval, approval to proceed to detailed business case). Vague investment proposals produce vague approvals — which are later interpreted differently by the presenting leader and the board, creating governance ambiguity.",
            "The approval request should be phrased as a specific action: 'We are requesting approval of a £4.8M three-year envelope, with the first-year tranche of £1.4M releasing on board approval today and subsequent tranches releasing on meeting the specified milestone conditions.'",
          ),
          s(" Specific investment proposal; specific approval request — vagueness produces governance ambiguity."),
        ],
        [
          s("Risk and governance is not an appendix — it is a core section. "),
          x(
            "Boards that see risk and governance in the appendix read this as: 'the presenting leader wants me to approve before I think about risks.' That reading erodes credibility instantly. Risk and governance in the main presentation body signals that the leader has thought about risks as carefully as about returns — which is the fiduciary standard.",
            "Three risks, three mitigations, three contingencies. Not a risk register — a clear-headed assessment of the three things most likely to undermine the programme and how you will manage each. Boards can engage with three risks in a presentation. They cannot process a comprehensive risk register.",
          ),
          s(" Three risks in the main body — not a full risk register in the appendix."),
        ],
      ],
      examples: [
        {
          title: "A bank — structure that eliminated questions",
          body: "A bank's CDO ran the six-section structure for the first time in a board presentation. At the end, the board chair noted: 'I don't have any questions — you've answered them.' The chair explained afterwards: 'Usually we spend 20 minutes on questions that the presentation should have pre-empted. Your structure pre-empted them.' The CDO had walked the room through every question a well-prepared board member would ask, in the order they would ask them.",
        },
        {
          title: "An insurer — risk section that earned approval despite board scepticism",
          body: "An insurer's AI claims board presentation included a board member known for challenging technology investment. When the presenter reached the risk section — three risks with specific mitigations and contingencies — the sceptical board member's body language changed: he leaned forward and began taking notes. The post-meeting debrief revealed: 'I was looking for the risks you hadn't thought of. You'd thought of the ones I'd have raised. That's what I needed to see.' The presentation was approved; the sceptic voted in favour.",
        },
        {
          title: "A retailer — vague approval request produced governance ambiguity",
          body: "A retailer's AI presentation ended with: 'We are seeking board support for our AI programme.' The board agreed 'in principle'. Over the following two months, the CDO and CFO had three disagreements about what 'in principle' meant for budget release. The next annual AI presentation ended with: 'We are requesting approval of a £3.2M three-year investment envelope, with year-one budget of £980K releasing today on this approval, and year-two and year-three tranches releasing on confirmation of the milestone conditions in Appendix B.' Zero post-approval ambiguity.",
        },
      ],
    }),
    buildSection({
      number: "8.3",
      title: "Business Outcomes First",
      subtitle: "The non-negotiable sequencing principle for AI board presentations",
      take: "The first three minutes of an AI board presentation must establish business outcomes — what will change in the business as a result of this investment, by how much, and by when. Technology capability, model architecture, vendor comparison, and accuracy metrics follow the outcomes — they are the evidence that the outcomes are achievable, not the case for the investment. Leaders who lead with technology before establishing outcomes lose the board's fiduciary attention in the first three minutes.",
      why: "Boards make investment decisions based on expected business outcomes. They evaluate whether the technology is credible evidence for those outcomes — but the outcome must come first. Technology-first presentations require the board to work backward to the outcome, which they will not do under time pressure.",
      paragraphs: [
        [
          s("The outcome statement is the first sentence, not the summary. "),
          x(
            "Do not bury the outcome in a summary slide or in a key takeaway box. Make it the first sentence spoken: 'This investment is expected to reduce our cost to serve from £48 per customer to £31 per customer over three years, representing £12M in cumulative cost reduction.' Then the rest of the presentation is the case for why that outcome is achievable.",
            "The outcome-first structure performs two functions simultaneously: it earns the attention of financially focused board members who are evaluating capital allocation, and it frames everything that follows as evidence for the outcome rather than as intrinsically interesting technology.",
          ),
          s(" Outcome in the first sentence — not the conclusion."),
        ],
        [
          s("Connect every technology claim to the outcome it enables. "),
          x(
            "When the presentation mentions AI accuracy, adoption rate, or infrastructure investment, it must immediately connect to the outcome: 'The model achieves 93% accuracy, which is the threshold required to automate 65% of standard claims decisions — driving the £8M in processing cost reduction that represents the core of our return.'",
            "Technology claims without outcome connections are data without meaning to the board. Each technology fact is only valuable in the context of the outcome it enables. The presenting leader's discipline is to never allow a technology fact to sit unconnected in the presentation.",
          ),
          s(" No technology fact without an outcome connection — every metric earns its slide."),
        ],
        [
          s("Quantify outcomes at the most specific level the evidence supports. "),
          x(
            "Specific outcomes are more credible than general ones — not because precision implies certainty, but because specificity implies that the leader has done the analysis. '£12M cumulative cost reduction' is more credible than 'significant cost savings', and '£8M to £16M depending on adoption rate' is more credible than '£12M' — because it shows the assumption structure.",
            "When the evidence does not support specificity, say so explicitly: 'Based on our pilot data, we expect 15-20% improvement in processing speed. We will have a tighter estimate after the first production quarter.' This honesty is more credible than false precision and more productive than vague estimates.",
          ),
          s(" Specific outcomes with stated ranges are more credible than precise point estimates without ranges."),
        ],
      ],
      examples: [
        {
          title: "A bank — outcome first in the first sentence",
          body: "A bank's CDO opened the board AI presentation with: 'This investment is expected to return £9.8M in net benefit over five years on a £4.8M investment, with the first measurable return of £1.1M expected in year one.' No context slide, no technology overview, no agenda. The outcome, stated in the first sentence, produced an immediate change in the room: board members who had been reviewing other papers put them down and engaged. The technology and implementation details that followed were evaluated as evidence for the outcome claim — which is exactly what they were.",
        },
        {
          title: "An insurer — technology claim connected to outcome",
          body: "An insurer's claims AI presentation included: 'The model achieves 91% accuracy on standard claim types, which means 8.1% of decisions will be wrong without human review. We are designing for human review of all model decisions in the first six months — this maintains quality while we build the evidence base for expanding automation scope.' Accuracy connected to error rate connected to governance design connected to the scale-up plan. No technology fact was left unconnected to its business consequence.",
        },
        {
          title: "A manufacturer — honest range that earned approval",
          body: "A manufacturer's AI quality control board presentation provided a cost reduction estimate with an explicit range: '£1.8M to £3.2M annually depending on the adoption rate of the AI-assisted inspection protocol by our quality engineering team. Our adoption milestone is 75% usage by month 6; we have designed a training and incentive programme to achieve this. If adoption reaches only 40%, the return will be approximately £1.1M.' The board approved. A board member commented afterward: 'The range with conditions told me more than a point estimate would have.'",
        },
      ],
    }),
    buildSection({
      number: "8.4",
      title: "Quantifying the Opportunity",
      subtitle: "The analysis that converts strategic rationale into investment conviction",
      take: "Opportunity quantification translates 'AI is strategically important' into 'here is the specific value pool AI can unlock for our business and why our investment is sized appropriately to capture it.' Boards that see opportunity quantification understand why the investment amount is correct — not too small to capture the value, and not larger than the value pool justifies.",
      why: "Without opportunity quantification, investment sizing is either arbitrary or driven by what the presenting leader thinks the board will approve — neither of which earns the confidence of a rigorous board. Opportunity quantification shows the work and defends the investment size.",
      paragraphs: [
        [
          s("The opportunity is the addressable problem, not the total market size. "),
          x(
            "The total market size for AI is not the opportunity for your business. The opportunity is the specific pool of cost, revenue, or risk in your business that AI can improve — your specific invoice processing volume, your specific customer churn rate, your specific fraud exposure. Total addressable market language signals a technology enthusiast's framing; specific business problem language signals a capital allocator's.",
            "Quantify the problem before quantifying the AI solution: 'Our annual invoice processing cost is £8.4M. AI can address 72% of invoice volume at a fraction of current cost. The AI-addressable cost pool is £6M; our target is to reduce it by 65%, generating £3.9M in annual savings.' The opportunity is £3.9M, not the total AI market.",
          ),
          s(" Quantify the addressable problem in your business — not the total market."),
        ],
        [
          s("Show the capture rate assumption explicitly. "),
          x(
            "The investment captures a fraction of the opportunity — not all of it, not immediately. The capture rate assumption — how much of the addressable opportunity the investment is expected to capture, on what timeline — is the key variable that converts the opportunity into an expected return.",
            "Capture rate assumptions are where optimism most commonly inflates AI business cases. A capture rate of 80% at month 12 assumes near-perfect adoption, near-perfect model performance, and near-perfect integration — simultaneously. The conservative capture rate that reflects realistic adoption timelines, model improvement curves, and integration challenges is the defensible one.",
          ),
          s(" Conservative capture rate assumptions are more credible and more useful than optimistic ones."),
        ],
        [
          s("Compare the investment to the captured opportunity, not to the total opportunity. "),
          x(
            "The investment return ratio should be stated against the captured opportunity (the conservative estimate of what the investment actually delivers) — not against the total opportunity (the maximum possible if everything works perfectly). 'We are investing £1.4M to capture £3.9M over three years, at our conservative capture rate assumption' is a credible investment case. 'We are investing £1.4M for a £6M opportunity' implies 100% capture rate at no timeline adjustment — which is not credible.",
            "Boards that evaluate AI investment by comparing investment to total opportunity produce approval decisions that are systematically optimistic. Boards that compare investment to captured opportunity — at the conservative capture rate — make more accurate investment decisions.",
          ),
          s(" Return on captured opportunity, not return on total opportunity."),
        ],
      ],
      examples: [
        {
          title: "A bank — opportunity quantification that sized the investment correctly",
          body: "A bank's AI mortgage pre-screening presentation quantified: total mortgage processing cost = £14.2M annually. AI-addressable volume (standard cases) = 68% of total. AI-addressable cost pool = £9.7M. Conservative capture rate = 55% at 18 months post-deployment (based on comparable industry deployments). Expected annual saving at conservative capture = £5.3M. Investment required = £2.1M. Return ratio = 2.5× over 12 months of steady-state operation. The board approved without challenge to the investment amount — because the quantification showed the amount was neither too small nor too large relative to the captured opportunity.",
        },
        {
          title: "An insurer — inflated capture rate challenged",
          body: "An insurer's AI claims board presentation proposed a 90% claims automation rate at 12 months post-deployment. A board member with prior claims operations experience asked: 'What is the automation rate our closest comparable competitor achieved at 12 months?' The answer was 62%. The 90% assumption was revised to 60% conservative / 75% base in the resubmitted business case. The investment size was also revised down — from £3.2M to £2.4M — because the revised opportunity capture did not justify the original investment. The board approved the revised case.",
        },
        {
          title: "A retailer — captured vs. total opportunity framing",
          body: "A retailer's AI personalisation board presentation initially compared investment to total personalisation opportunity (£28M in estimated annual revenue impact at full implementation). The board asked: 'What is the expected return on the investment you're actually requesting?' The presenter recalculated on captured opportunity: £28M total opportunity, 35% capture at conservative adoption rate over 3 years, £9.8M captured value, £3.2M investment. Return on captured opportunity: 3.1× over three years. The reframing answered the board's question precisely — and earned the approval that the total-opportunity framing had not.",
        },
      ],
    }),
    buildSection({
      number: "8.5",
      title: "Presenting Risk Alongside Opportunity",
      subtitle: "The discipline that earns fiduciary trust",
      take: "Risk disclosure in an AI board presentation is not a weakness — it is a fiduciary requirement that, when done well, increases the board's confidence in the presenting leader's judgment. Boards have seen too many investment presentations that minimise risk to maximise approval likelihood, and then are surprised when risks materialise. A leader who surfaces risks proactively and presents credible mitigations is demonstrating the judgment that sustained investment trust requires.",
      why: "Risk-minimised presentations earn approval; risk-transparent presentations earn sustained support. When risks materialise — and in AI programmes they do — the board that was told about them maintains confidence. The board that was not told about them loses it.",
      paragraphs: [
        [
          s("Select the three material risks, not a comprehensive list. "),
          x(
            "A comprehensive risk register in a board presentation signals that the leader cannot prioritise — which is itself a risk signal. The three material risks are: the ones most likely to occur, the ones with the highest potential impact on the investment return, and the ones that require board-level awareness to manage. Operational risks that are within the management team's authority to resolve do not belong in a board presentation.",
            "Material AI risks typically include: technology performance risk (will the AI achieve the required accuracy on production data?), adoption risk (will the team adopt the AI-assisted workflow at the required rate?), and regulatory risk (are there regulatory developments that could constrain the deployment?).",
          ),
          s(" Three material risks: most likely, highest impact, requiring board awareness."),
        ],
        [
          s("Present each risk with its mitigation and its contingency. "),
          x(
            "The mitigation is what you are doing to reduce the probability or impact of the risk. The contingency is what you will do if the risk materialises despite the mitigation. Risks presented without contingencies leave the board with an unanswered question: 'what happens if the mitigation doesn't work?' That unanswered question is the source of most post-presentation risk objections.",
            "The mitigation-contingency pair also demonstrates that the leader has thought through two scenarios — successful mitigation and mitigation failure — which is the full risk management frame. Boards that see this two-scenario thinking are more confident that the leader will manage the programme coherently when conditions change.",
          ),
          s(" Mitigation reduces probability; contingency manages impact if mitigation fails. Always provide both."),
        ],
        [
          s("Do not bury risk in the appendix. "),
          x(
            "Risks in the appendix communicate that the leader would prefer the board not to focus on them. Boards notice this — and focus on them anyway, but with reduced confidence in the leader's transparency. The risk section in the main body, presented as a structured three-risk framework, communicates the opposite: the leader has thought carefully about risk and is presenting it as central to the investment decision.",
            "The risk section should take three to four minutes in a thirty-minute board presentation. This is proportionate — risk management is one of six sections, not the dominant one, but not an afterthought.",
          ),
          s(" Risk in the main body, in proportion — not an appendix item."),
        ],
      ],
      examples: [
        {
          title: "A bank — three-risk framework that earned approval from the risk committee",
          body: "A bank's AI credit risk board presentation went through the risk and governance committee before the full board. The three risks presented: (1) model accuracy below threshold — mitigation: pilot gate condition; contingency: vendor model comparison and potential resourcing of alternative vendor. (2) Regulatory classification change — mitigation: regulatory engagement in progress; contingency: reduced automation scope. (3) Adoption failure — mitigation: change management programme; contingency: extended human-in-the-loop period before expanding automation. The risk committee's assessment: 'This is the most thorough risk analysis we've seen on an AI proposal. We recommend board approval.'",
        },
        {
          title: "An insurer — hidden risk that damaged confidence",
          body: "An insurer's AI claims automation presentation had buried regulatory risk in an appendix. The programme was approved. At month 8, a regulatory consultation document was published that threatened to reclassify the insurer's claims automation approach as requiring individual customer consent. The board was surprised — the risk had been in the appendix they had not read. The CDO lost significant credibility. The subsequent AI investment presentation included the regulatory risk as the second item in the main risk section.",
        },
        {
          title: "A retailer — contingency that maintained confidence post-materialisation",
          body: "A retailer's AI personalisation board presentation included a technology performance risk with contingency: 'If the personalisation model does not meet the 82% relevance threshold in the pilot, we will extend the pilot period by 8 weeks and introduce a manual curation review step for recommendations below 70% confidence.' At month 4 of the pilot, the model achieved 76% relevance — below threshold. The pre-specified contingency was activated without board discussion. At the quarterly review, the CDO reported: 'Risk 1 materialised; contingency activated as planned; pilot extended; model now at 84% relevance.' Board confidence was maintained.",
        },
      ],
    }),
    buildSection({
      number: "8.6",
      title: "Addressing Competitive Urgency",
      subtitle: "Making the case for timing without creating artificial pressure",
      take: "The board needs to understand why the investment is needed now rather than in the next planning cycle. Competitive urgency is a legitimate and powerful argument when it is evidence-based — when competitor AI adoption is documented and its impact on your market position is traceable. Manufactured urgency — 'everyone is doing AI' without specific competitive evidence — is transparent and counterproductive.",
      why: "Boards are experienced at evaluating urgency claims. Genuine competitive urgency earns accelerated approval. Manufactured urgency earns scepticism — and makes the board question the quality of the leader's strategic analysis.",
      paragraphs: [
        [
          s("Evidence-based urgency has three components: competitor action, customer impact, and your current position. "),
          x(
            "What specific AI capabilities have your competitors deployed, and at what scale? How are those deployments affecting the customer decisions that determine your competitive position — win rates, churn, share of wallet? And what is your current position on the dimensions that those deployments affect? The intersection of competitor action and customer impact on your specific competitive metrics is the urgency evidence.",
            "Competitive intelligence assembled from public sources — analyst reports, industry data, customer voice, regulatory filings — is more credible than general market observations. 'Three of our five primary competitors have deployed AI mortgage pre-screening, and our win rate for same-day decisions has declined from 67% to 54% in 18 months' is urgency evidence. 'The industry is adopting AI' is not.",
          ),
          s(" Urgency evidence: specific competitor action, specific customer impact, specific position change."),
        ],
        [
          s("Quantify the cost of inaction. "),
          x(
            "The board is comparing: invest now with defined returns, or invest later with an additional cost of inaction. The cost of inaction — continued competitive position loss, missed revenue opportunity, accumulating data advantage gap — is the most powerful urgency argument when it can be quantified.",
            "Cost of inaction quantification: 'If we delay this investment by 12 months, our conservative estimate of additional lost revenue is £1.8M (based on current win-rate trajectory) and our data advantage gap to the three competitors who have deployed widens by approximately 12 months of training data accumulation. This gap takes 24 months to close once we begin deployment — meaning a 12-month delay costs 36 months of competitive parity.'",
          ),
          s(" Quantify the cost of delay — not just the benefit of acting."),
        ],
        [
          s("Avoid manufactured urgency. "),
          x(
            "Claims like 'we must act now or we will be left behind' without specific evidence of competitive movement or customer impact are transparent to experienced board members. They signal that the presenting leader is using urgency as a pressure tactic rather than as analytical conclusion.",
            "If genuine urgency cannot be evidenced, do not manufacture it. Instead, present the opportunity with a realistic timeline and explain the review conditions under which urgency would be warranted: 'If competitor adoption accelerates beyond the current rate, or if our win rate continues to decline, we would recommend advancing this investment. Our recommendation today is for planned investment at the pace the business case supports.'",
          ),
          s(" No urgency without evidence — state the conditions under which urgency would be warranted instead."),
        ],
      ],
      examples: [
        {
          title: "A bank — evidence-based urgency changes the approval timeline",
          body: "A bank's AI mortgage pre-screening board presentation included competitive data: three competitor banks had deployed AI pre-screening in the past 18 months; the bank's same-day decision win rate had declined from 71% to 56% in that period; and customer research indicated that 44% of applicants chose their mortgage provider partly based on processing speed. The board, which had been planning a standard annual budget approval for AI investment, approved an accelerated Q3 investment start. The urgency evidence had changed the timeline decision.",
        },
        {
          title: "A retailer — cost of inaction quantified",
          body: "A fashion retailer's AI personalisation board presentation quantified the cost of a 12-month delay: 'Our current personalisation approach produces 3.2% click-through on product recommendations. Our closest competitor's AI personalisation produces 5.8%. The 2.6 percentage point gap translates to £2.4M in annual revenue we are not capturing. A 12-month delay extends this revenue gap by 12 months, adding £2.4M to the cost of inaction. Additionally, the competitor has 12 more months of training data, widening the model advantage by approximately 18 months of additional catch-up time.' The board approved the investment at the accelerated timeline the CDO recommended.",
        },
        {
          title: "An insurer — manufactured urgency rejected",
          body: "An insurer's AI programme board presentation claimed: 'The insurance industry is transforming through AI — companies that do not invest now will be left behind.' A board member asked for the specific evidence. The presenting director could not provide competitor-specific data or customer impact data. The board declined to approve at the pace proposed: 'We don't make capital allocation decisions based on general industry urgency. Come back with specific competitive intelligence.' The resubmission, six weeks later, included specific competitor deployment data and customer research. It was approved.",
        },
      ],
    }),
    buildSection({
      number: "8.7",
      title: "Handling Difficult Questions",
      subtitle: "Preparation for the questions that reveal whether you know your programme",
      take: "Difficult board questions on AI are predictable. They fall into four categories: return credibility ('how confident are you in these numbers?'), technology risk ('what if the AI doesn't work?'), governance and accountability ('who is responsible if this goes wrong?'), and strategic fit ('is this the best use of this capital?'). Preparation for these categories is more valuable than preparation for any specific question.",
      why: "Board members who ask difficult questions are not adversaries — they are doing the governance work the organisation needs them to do. Leaders who welcome difficult questions and answer them with specific evidence demonstrate the programme depth that earns approval. Leaders who deflect or oversimplify undermine the confidence the presentation was designed to build.",
      paragraphs: [
        [
          s("Return credibility questions are invitations to show your work. "),
          x(
            "'How confident are you in these numbers?' is the most common board question for AI investment cases. The answer is not a confidence percentage — it is the assumptions behind the numbers and the evidence for each assumption.",
            "The answer structure: 'The return estimate is built on three assumptions. First, model accuracy: we have pilot data showing 91% accuracy, and we need 89% for the deployment to perform. Second, adoption rate: we are assuming 70% team usage at month 6 — our change management programme is designed for this; comparable deployments average 65%. Third, integration cost: we are using actuals from our last comparable integration. The conservative estimate assumes all three come in below target; the base case uses the stated assumptions.'",
          ),
          s(" Answer return credibility questions with the assumption structure, not with confidence reassurance."),
        ],
        [
          s("Technology risk questions are invitations to discuss failure modes. "),
          x(
            "'What if the AI doesn't work?' deserves a specific answer about what 'not working' means and what the response would be. Not working can mean: model accuracy below threshold (pilot gate handles this), vendor product underperforms (contract SLA and contingency vendor identified), integration failure (rollback capability in place), or adoption failure (extended human-in-the-loop fallback designed).",
            "The answer demonstrates that the leader has defined 'not working' precisely — not as a vague concern but as specific scenarios with specific responses. This level of specificity signals programme depth.",
          ),
          s(" Define 'not working' as specific scenarios with specific responses — not as a general assurance."),
        ],
        [
          s("Strategic fit questions are the hardest because they challenge the investment thesis. "),
          x(
            "'Is this the best use of this capital?' requires an honest comparison to alternatives. The alternatives are typically: invest elsewhere in the business, return capital to shareholders, invest in the same AI outcome through a different approach, or defer the investment. Each alternative requires a brief case for why AI investment is superior.",
            "The honest answer: 'We have evaluated three alternatives: investing the same capital in headcount, buying a vendor product instead of building, and deferring by 12 months. The headcount option produces £X over the same period at higher operating cost; the vendor product does not cover our specific use case; the 12-month deferral costs £Y in competitive position loss. On balance, this investment represents the highest-return use of this capital for our strategic priorities.'",
          ),
          s(" Answer strategic fit questions with a specific comparison to alternatives — not with a general endorsement."),
        ],
      ],
      examples: [
        {
          title: "A bank — assumption structure answers the credibility question",
          body: "A bank board member asked: 'You're showing £9.8M return on a £4.8M investment — how confident are you in that?' The CDO: 'Our base case return of £9.8M is built on three assumptions: 91% model accuracy (we have this in pilot; we need 89%), 70% team adoption at 6 months (comparable bank AI deployments average 65%, we are targeting 70% with our change management programme), and integration cost of £1.2M (based on our actual cost for our last comparable integration, not a vendor estimate). If all three come in at the conservative end of the range, the return is £6.2M — still above the hurdle rate. The £9.8M assumes the base case on all three.' The board member nodded and did not follow up. The assumption structure had answered the question.",
        },
        {
          title: "An insurer — technology risk specificity",
          body: "A board member at an insurance company asked: 'What happens if the AI model doesn't perform?' The CDO: 'We have three specific 'not working' scenarios. Scenario one: pilot gate catches sub-threshold performance — we redesign the model or scope before investing in production. Scenario two: production performance degrades over time — our model monitoring system triggers a retraining alert; we have a retraining cadence in the governance plan. Scenario three: vendor ceases operations — we have a data portability clause and a 90-day notice requirement; in that window, we would deploy our contingency vendor or begin an internal build of the simplified model version.' The board member: 'That's thorough. Next question.'",
        },
        {
          title: "A retailer — strategic fit answered with comparisons",
          body: "A board member asked the most difficult question: 'Should we be putting £3.2M into AI or returning it to shareholders?' The CDO: 'We've evaluated three alternatives. First, returning the capital: at our current share price, £3.2M is approximately 0.4% of market cap — a meaningful but one-time gesture versus a three-year competitive investment. Second, investing in headcount instead: £3.2M buys 16 FTEs over three years; the same AI investment replaces the equivalent of 24 FTEs of processing work while improving quality. Third, a smaller vendor product: doesn't cover the personalisation use case we've identified. On balance, this AI investment produces a higher risk-adjusted return than the alternatives for our current strategic position.' The board approved.",
        },
      ],
    }),
    buildSection({
      number: "8.8",
      title: "The Approval Meeting",
      subtitle: "Before, during, and after — the full management of the board approval process",
      take: "The board presentation is a single event in a larger approval process. The most effective business leaders manage the approval process as a campaign — building understanding and addressing concerns before the meeting, facilitating confident decision-making during it, and managing post-approval commitments rigorously after it. Approval meetings that fail are usually failing because of something that happened before the meeting, not in it.",
      why: "Pre-meeting alignment, in-meeting facilitation, and post-approval follow-through are the three components of an effective board approval process. Leaders who manage only the in-meeting presentation manage one third of what determines the outcome.",
      paragraphs: [
        [
          s("Pre-meeting alignment is the most valuable investment in the approval process. "),
          x(
            "Before the board meeting, seek one-on-one conversations with the board members most likely to have concerns — the audit chair on risk and governance, the CFO if a board member on return credibility, the industry expert if a board member on strategic fit. These conversations surface objections before the meeting, allow you to address them in the presentation design, and ensure that no board member arrives cold to a proposal they have concerns about.",
            "A board member whose concern has been heard and addressed before the meeting is more likely to raise it as a clarification in the meeting (allowing the leader to answer confidently) than as an objection (which positions them against the proposal). Pre-meeting engagement converts potential objectors into engaged questioners.",
          ),
          s(" One-on-one pre-meeting conversations with the likely-concerned board members — before the presentation is finalised."),
        ],
        [
          s("During the meeting, facilitate the decision — do not just present. "),
          x(
            "After the presentation, the chair will open questions. The leader who treats questions as interruptions to be managed has not shifted from presenter to decision-facilitator mode. The questions are the decision-making process. Each question is an opportunity to provide specific evidence, correct a misunderstanding, or surface the board member's concern more precisely for the room to evaluate.",
            "When a question cannot be answered in the meeting — because it requires data not in the room — say so directly and commit to providing it within 48 hours. Improvised answers to data-dependent questions are often incorrect and undermine the leader's credibility more than acknowledging a data gap.",
          ),
          s(" Facilitate the decision — answer with evidence, acknowledge data gaps, do not improvise."),
        ],
        [
          s("Post-approval commitments define whether the approval is the beginning or the end. "),
          x(
            "A board approval that is not followed by specific post-approval commitments — first milestone report date, format and content of quarterly updates, escalation triggers for board re-engagement — is an approval without accountability. The approval is the beginning of the governance relationship, not the end.",
            "Post-approval commitment examples: 'I will provide a three-page milestone update at the Q2 board meeting. I will inform the chair immediately if either of the two risk conditions we discussed materialise. I will present the six-month outcome evidence at the October board.' These commitments, made explicitly at the approval meeting, establish the accountability framework that makes the approval durable.",
          ),
          s(" State post-approval commitments explicitly at the approval meeting — they establish the governance relationship."),
        ],
      ],
      examples: [
        {
          title: "A bank — pre-meeting engagement surfaces the critical concern",
          body: "A bank's CDO conducted pre-meeting conversations with three board members before the AI credit risk presentation. The audit committee chair raised a concern not in the presentation: 'What is our liability if the AI makes a wrong credit decision and the applicant claims discrimination?' The CDO reworked the risk section to address this specifically — explainability design, regulatory engagement, and the human-in-the-loop approval process that preserved individual accountability. The audit chair's in-meeting question was: 'Can you confirm the explainability approach handles the discrimination risk we discussed?' The CDO could. The approval was clean.",
        },
        {
          title: "An insurer — data gap acknowledged in meeting",
          body: "A board member asked an insurer's AI claims presentation: 'What is the comparable automation rate for our direct peer group — not the broad industry, but our specific competitors?' The CDO: 'I don't have that specific data in the room. I have the broad industry figure — 62% at 12 months. I'll provide peer-specific data within 48 hours and confirm whether it changes our adoption rate assumption.' The commitment was kept. The data confirmed the assumption was defensible. The board noted the approach: 'The honest acknowledgement of what was not in the room built more confidence than if the answer had been improvised.'",
        },
        {
          title: "A retailer — post-approval commitments maintained sustained support",
          body: "A retailer's AI personalisation board approval included four explicit post-approval commitments from the CDO: quarterly milestone reports in a defined format, immediate notification if the adoption rate missed the month-6 milestone, a six-month ROI update with variance analysis, and an annual strategic alignment review. All four commitments were met. Eighteen months later, when the CDO requested a second investment tranche for the programme's Phase 2, the board chair noted: 'You did everything you committed to after Phase 1 approval. We're prepared to approve Phase 2 on that basis.'",
        },
      ],
    }),
  ],
  quiz: [
    {
      q: "A board member asks 'how confident are you in your £9.8M return estimate?' What is the most credible response?",
      options: [
        "'Very confident — our vendor has case studies showing similar returns.'",
        "Walk through the three assumptions underlying the estimate, the evidence for each, and what the return would be if all three came in at the conservative end of their range.",
        "'It's our best estimate based on current information.'",
        "'The return depends on adoption — if adoption is high, returns could exceed £9.8M.'",
      ],
      correct: 1,
      correctFeedback:
        "Right. Return credibility questions are invitations to show the assumption structure. Board members who ask this question want to understand what the numbers are built on — not to receive reassurance. Re-read sections 8.3 and 8.7.",
      wrongFeedback:
        "Confidence assertions and vague dependency statements do not answer the question. The assumption structure is the credible answer. Re-read section 8.7.",
    },
    {
      q: "Where should the AI risk section appear in a 30-minute board presentation?",
      options: [
        "In the appendix for board members who want the detail.",
        "At the end of the main presentation as a final consideration.",
        "In the main body, after the investment proposal and expected returns, presented with three material risks, their mitigations, and contingencies.",
        "Before the strategic context, to demonstrate risk-awareness upfront.",
      ],
      correct: 2,
      correctFeedback:
        "Right. Risk in the main body, after the opportunity and investment case, signals that the leader has considered risk as carefully as return. Risk in the appendix signals the opposite — that the leader would prefer the board not to focus on it. Re-read sections 8.2 and 8.5.",
      wrongFeedback:
        "Risk in the appendix undermines fiduciary credibility. Risk too early (before the opportunity case) disrupts the decision narrative. Risk in the main body after the investment case is the correct placement. Re-read sections 8.2 and 8.5.",
    },
    {
      kind: "order",
      q: "Order the six sections of an AI board presentation in the correct sequence.",
      prompt: "Drag to arrange from first section (top) to last (bottom).",
      items: [
        "Strategic context — why AI investment is necessary given the competitive environment.",
        "Competitive imperative — what happens if we do not act.",
        "Investment proposal — what we are asking for, specifically.",
        "Expected returns — what business outcomes the investment will produce.",
        "Risk and governance — three material risks with mitigations and contingencies.",
        "Approval request — the specific decision needed today.",
      ],
      correctFeedback:
        "Right. Context earns attention; competitive imperative creates urgency; investment proposal specifies the ask; expected returns justify it; risk and governance demonstrate fiduciary thinking; approval request closes the narrative. Each section earns the next. Re-read section 8.2.",
      wrongFeedback:
        "The sequence is not arbitrary — each section manages the board's decision-making journey. Strategic context must precede the investment case; risk must be in the main body; the approval request must be specific and final. Re-read section 8.2.",
    },
    {
      q: "You are presenting competitive urgency for an AI investment. Which of these is evidence-based urgency?",
      options: [
        "'The AI industry is growing at 35% annually — we need to invest to keep up.'",
        "'Three of our five primary competitors have deployed AI mortgage pre-screening. Our same-day decision win rate has declined from 71% to 56% in 18 months, and customer research shows 44% of applicants weight processing speed in their lender choice.'",
        "'Our peers are all investing in AI — we risk being left behind.'",
        "'AI is the most significant technology shift of our generation — the risk of inaction is existential.'",
      ],
      correct: 1,
      correctFeedback:
        "Right. Evidence-based urgency has three components: specific competitor action, specific customer impact, and specific position change. All three are present in option B. The other options are general market observations that boards will correctly identify as manufactured urgency. Re-read section 8.6.",
      wrongFeedback:
        "General industry trends and existential risk claims are manufactured urgency that experienced board members will challenge. Evidence-based urgency requires specific competitor action, specific customer impact, and specific position measurement. Re-read section 8.6.",
    },
    {
      q: "During the board meeting, a director asks a data-dependent question you cannot answer precisely from what is in the room. What is the correct response?",
      options: [
        "Provide your best estimate to maintain momentum.",
        "Acknowledge that you don't have that specific data in the room, commit to providing it within 48 hours, and confirm whether it would change any assumption in the investment case.",
        "Redirect to a related question you can answer.",
        "Ask the CFO if they have the data.",
      ],
      correct: 1,
      correctFeedback:
        "Right. Acknowledging a data gap is more credible than improvising an answer. The commitment to provide the data within 48 hours maintains momentum without requiring an inaccurate improvisation. Re-read section 8.8.",
      wrongFeedback:
        "Improvised answers to data-dependent questions are often incorrect and undermine credibility more than acknowledging a gap. Re-read section 8.8.",
    },
    {
      kind: "categorize",
      q: "Sort each board question into its category type.",
      categories: ["Return credibility", "Technology risk", "Governance and accountability", "Strategic fit"],
      items: [
        { text: "'How confident are you in the adoption rate assumption?'", category: 0 },
        { text: "'What happens if the model doesn't perform as expected in production?'", category: 1 },
        { text: "'Who is accountable if the AI makes a wrong decision that affects a customer?'", category: 2 },
        { text: "'Is this the best use of this capital compared to the acquisition we discussed in Q1?'", category: 3 },
        { text: "'What is the evidence for the cost reduction estimate?'", category: 0 },
      ],
      correctFeedback:
        "Right. Categorising questions before the meeting allows you to prepare responses by category rather than rehearsing specific questions. Each category has a distinct answer approach. Re-read section 8.7.",
      wrongFeedback:
        "Board questions on AI investments cluster into four predictable categories. Recognising the category allows you to apply the correct answer approach rather than treating each question as unique. Re-read section 8.7.",
    },
  ],
});
