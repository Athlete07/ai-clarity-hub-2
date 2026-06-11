import { buildChapter, buildSection, s, x, sectionWithDiagram } from "../concepts-bl-helpers";

export const chapter11BlStakeholderManagementAiPolitics = buildChapter({
  slug: "bl-stakeholder-management-ai-politics",
  number: 11,
  shortTitle: "AI Politics and Stakeholders",
  title: "Stakeholder Management and AI Politics — The Game Beneath the Governance",
  readingMinutes: 20,
  summary:
    "AI programmes succeed or fail in governance meetings — but they win or lose in corridors, one-on-ones, and the informal conversations that shape what gets funded, what gets blocked, and who gets heard. Business leaders who manage only the formal governance of AI programmes manage the visible game. Those who also manage the political dynamics beneath it win both.",
  keyTakeaway:
    "AI politics are not a corruption of good governance — they are the reality of every significant organisational investment. Business leaders who recognise stakeholder dynamics, manage key relationships, convert blockers, and build coalitions produce better outcomes than equally intelligent leaders who assume good evidence speaks for itself. Evidence speaks; politics determines whether it is heard.",
  pmCallout:
    "As a business leader: political capital for AI investment is earned through credibility, trust, and track record — and spent on the decisions that matter most. Manage it deliberately, spend it strategically, and replenish it continuously through transparent governance and delivered commitments.",
  sections: [
    sectionWithDiagram({
      number: "11.1",
      title: "Why AI Investment Is Inherently Political",
      subtitle: "Understanding the political dynamics before trying to navigate them",
      take: "AI investment is politically charged because it threatens established power structures, creates winners and losers within organisations, requires cross-functional collaboration that competition typically prevents, and touches both the work identity and career trajectory of every person affected. Leaders who understand why AI is political manage the politics more effectively than those who wish politics away.",
      why: "Pretending that AI investment decisions are purely rational ignores the human dynamics that determine whether good ideas get funded and bad ones get blocked. Understanding the political reality is the prerequisite for navigating it effectively.",
      paragraphs: [
        [
          s("AI reallocates organisational power, not just workload. "),
          x(
            "When AI automates a function, the leader of that function loses headcount — which is organisational power in most management hierarchies. When AI generates insights that previously required specialist knowledge, the specialists who held monopoly on that insight lose a source of influence. When AI recommendations replace human judgment, the humans whose judgment was valued feel diminished even when their role formally remains.",
            "These power reallocations are not incidental — they are the mechanism through which AI creates value. But they produce resistance from people whose power is being reduced, regardless of whether those people intellectually support AI investment.",
          ),
          s(" AI reallocates power; the people whose power is reduced resist — regardless of intellectual support."),
        ],
        [
          s("Cross-functional AI investment requires cross-functional trust that does not routinely exist. "),
          x(
            "Most AI programmes require collaboration between functions that are structurally in competition: technology and business units compete for budget and talent; finance and operations compete over efficiency gains vs. quality; legal and product teams compete over risk appetite. AI programmes that require these functions to collaborate for the first time encounter accumulated interpersonal and structural tensions that have nothing to do with the AI programme.",
            "The political intelligence for cross-functional AI programmes: understand the pre-existing inter-function dynamics before designing the governance structure. A governance committee that puts historically competitive functions in a decision-making relationship without managing those dynamics will produce political conflict dressed as governance disagreement.",
          ),
          s(" Map inter-function dynamics before designing AI governance — unresolved tensions produce governance conflict."),
        ],
        [
          s("The change narrative creates political positioning. "),
          x(
            "How AI investment is described — as transformation, as efficiency, as capability building, or as replacement — determines the political responses it attracts. 'AI will transform our processes' produces change management anxiety in teams whose processes are being transformed. 'AI will help our team do their best work' produces curiosity and engagement. The same programme, described differently, produces different political responses.",
            "The political intelligence for narrative design: the description that earns board approval ('AI will significantly reduce our cost-to-serve') may produce the opposite of support from the team that delivers the customer service. Both narratives must be true and consistent with each other — but they are not the same narrative.",
          ),
          s(" Different stakeholders need different narrative frames — same facts, different emphasis, both honest."),
        ],
      ],
      examples: [
        {
          title: "A bank — power reallocation resistance",
          body: "A retail bank's AI credit underwriting programme was blocked for eight months by the Head of Credit Risk, who had built her career on manual underwriting judgment. Her formal objection was technical ('the model is not accurate enough'); her underlying objection was power ('if the model decides, what is my value?'). The CDO who resolved the blockage reframed the Head of Credit Risk's role: 'The model handles standard decisions; your judgment is the standard the model is trained to match, the exception cases it cannot handle, and the governance framework that ensures it performs.' The reframe gave her a credible senior role in the AI programme. The block was removed.",
        },
        {
          title: "An insurer — inter-function dynamics surfaced before governance design",
          body: "An insurer's AI claims programme director conducted stakeholder interviews before finalising the governance committee composition. Interviews revealed a four-year dispute between the Claims Director and the IT Director over a previous system implementation that had gone badly. Placing both on the same committee without addressing the prior dispute would have produced dysfunctional committee dynamics. The programme director facilitated a joint briefing between the two directors that addressed the previous dispute explicitly, established norms for the new committee, and set shared success metrics. The governance committee functioned effectively from its first session.",
        },
        {
          title: "A manufacturer — narrative calibrated by audience",
          body: "A manufacturer's AI quality programme had two narratives: the board narrative ('AI will reduce quality rejection rates by 35%, contributing £3.2M in annual cost reduction') and the production floor narrative ('AI will help quality engineers focus on the complex cases where their expertise makes the biggest difference — the system handles the routine checks so you can focus on the quality challenges that matter'). Both narratives were true. The board narrative would have produced fear on the production floor ('AI is replacing us'); the floor narrative would have been unimpressive to the board ('AI helps engineers focus'). Both audiences received the narrative calibrated for their decision-making context.",
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
    sectionWithDiagram({
      number: "11.2",
      title: "Building the Stakeholder Map",
      subtitle: "Knowing who has influence over your AI programme before the critical vote",
      take: "A stakeholder map for an AI programme identifies: who has formal authority over investment decisions, who has informal influence over those with authority, who will be most affected by the programme's outcomes, and who will actively resist or support the programme. The map is the foundation of political intelligence — without it, political management is reactive.",
      why: "Stakeholder maps are most valuable before they are needed. A leader who has mapped stakeholders before a critical governance vote can manage relationships proactively; a leader who maps stakeholders after an unexpected block is managing consequences.",
      paragraphs: [
        [
          s("Map four stakeholder dimensions for every major AI initiative. "),
          x(
            "Authority: who has formal decision rights over budget, scope, and deployment? Influence: who shapes the decisions of those with authority — trusted advisors, respected voices, informal opinion leaders? Impact: who will be most affected by the programme's outcomes — positively and negatively? Disposition: who currently supports, opposes, or is neutral to the programme, and how strong is each position?",
            "The authority dimension is visible in the org chart; the influence dimension is visible in stakeholder behaviour and relationship patterns; the impact dimension requires process mapping and change management assessment; the disposition dimension requires direct stakeholder conversations.",
          ),
          s(" Four dimensions: authority (org chart), influence (relationships), impact (process mapping), disposition (direct conversation)."),
        ],
        [
          s("Disposition mapping requires direct conversation — it cannot be done from a distance. "),
          x(
            "Understanding whether a stakeholder supports, opposes, or is neutral to an AI programme requires asking them — directly, in a context where they can answer honestly. Survey instruments and secondhand reports consistently underestimate the intensity of opposition (people do not express opposition publicly until they have decided to exercise it) and overestimate the strength of support (people express polite interest that they have not converted to active advocacy).",
            "One-on-one stakeholder conversations before critical governance events — conducted with the explicit purpose of understanding their perspective, not selling the programme — produce the most accurate disposition data. The conversation frame: 'I'd like to understand your perspective on our AI programme — what would make this investment more or less valuable to your function?'",
          ),
          s(" Direct conversation is the only reliable disposition data source — survey instruments and secondhand reports underestimate opposition."),
        ],
        [
          s("Update the map after every significant programme event. "),
          x(
            "Stakeholder dispositions change in response to programme events. A pilot that produces strong results converts neutral stakeholders to supporters and may convert mild opponents to neutrals. A missed milestone converts mild supporters to neutrals and may convert mild opponents to active opponents. A governance decision that a stakeholder disagrees with shifts their disposition independent of programme performance.",
            "The stakeholder map is a living document, updated after every programme milestone, governance event, and significant stakeholder interaction. A map updated at programme initiation and reviewed at programme completion is not a governance tool — it is a historical document.",
          ),
          s(" Update the map after every significant programme event — dispositions change with programme performance."),
        ],
      ],
      examples: [
        {
          title: "A bank — pre-critical-vote stakeholder mapping",
          body: "A bank's AI mortgage programme CDO mapped stakeholders before the board investment approval vote. The map identified: three board members with formal authority (all expected to vote yes); one non-executive director with high informal influence over the CEO whose disposition was unknown; and the Head of Legal, whose impact was high (the programme required legal process changes) and whose disposition was cautious. The CDO scheduled one-on-ones with both before the board meeting. The NED's concern: explainability for mortgage rejection decisions under Consumer Duty regulations. The Head of Legal's concern: documentation of the AI decision logic for regulatory audit. Both concerns were addressed in the board presentation. Both stakeholders voted yes.",
        },
        {
          title: "An insurer — disposition change after pilot",
          body: "An insurer's AI claims programme had two active blockers at the start: the Head of Claims (power reallocation concern) and the Data Protection Officer (data governance uncertainty). After a successful pilot that included a data governance framework and a redesigned Head of Claims role, both stakeholders' dispositions shifted. The Head of Claims became an active supporter ('the programme makes my team's expertise more valuable, not less'); the DPO became neutral ('the governance framework addresses my concerns adequately'). The stakeholder map was updated after the pilot — the updated map changed the CDO's governance strategy for the scale-up approval.",
        },
        {
          title: "A manufacturer — opposition surfaced in direct conversation",
          body: "A manufacturer's AI quality control programme manager believed the production supervisors were supportive based on a town hall where questions were positive. Direct one-on-one conversations with eight supervisors revealed: three were actively concerned that AI would reduce their authority over quality decisions (they had not said this publicly); two were worried about job security for their teams; three were genuinely supportive. The opposition — invisible in the town hall — was visible in the one-on-ones. The change management programme was redesigned to address the specific concerns before deployment, rather than discovering them post-deployment when they would manifest as adoption resistance.",
        },
      ],
    }, {
      kind: "diagram",
      id: "founder-eval-framework",
      type: "flow",
      title: "Evaluation Framework",
      caption:
        "Define task → golden set → ship gate → monitor drift.",
    }),
    buildSection({
      number: "11.3",
      title: "The CFO Relationship",
      subtitle: "The partnership that determines what gets funded",
      take: "The CFO or finance director is the most important AI investment stakeholder after the CEO. They control the budget approval process, the investment framework through which AI must be evaluated, and the financial narrative that the board hears about AI investment performance. Business leaders who manage the CFO relationship well fund AI programmes on credible business cases. Those who manage it poorly fund programmes on political goodwill that does not last.",
      why: "CFOs evaluate AI investment on the same disciplined basis as all other capital allocation decisions. Business leaders who speak CFO language — IRR, payback period, probability-weighted returns, operating cost impact — earn productive CFO relationships. Leaders who expect CFOs to trust strategic rationale without financial rigour create adversarial relationships that block good programmes alongside bad ones.",
      paragraphs: [
        [
          s("The CFO's primary concern is capital allocation discipline, not AI scepticism. "),
          x(
            "CFOs who push back on AI investment cases are not anti-AI — they are applying capital allocation rigour. A business case that cannot answer 'what is the expected return on this investment?' in financial terms has failed the CFO's basic evaluation standard — regardless of how strategically important the investment is.",
            "The most productive CFO relationships are built by business leaders who proactively engage the CFO in investment case development — not to gain approval, but to stress-test the financial assumptions before the formal approval process. A CFO who has co-developed the financial assumptions in an investment case is a validator of the case, not a challenger of it.",
          ),
          s(" Co-develop financial assumptions with the CFO before the formal approval process — validator rather than challenger."),
        ],
        [
          s("Provide the CFO with the financial framework they need for AI-specific decisions. "),
          x(
            "AI investments have characteristics that conventional capital allocation frameworks do not handle well: probabilistic benefit realisation, phased learning curves, strategic option value, and variable cost structures at scale. The business leader who provides the CFO with an AI-adapted financial framework — while remaining within the CFO's standard evaluation criteria — makes AI investment evaluation easier, not harder.",
            "The AI-adapted financial framework: expected return as a probability-weighted range rather than a single estimate, cost model that separates fixed and variable AI costs with a utilisation assumption, and a narrative explanation of strategic option value that quantifies the options created without inflating the core return calculation.",
          ),
          s(" Provide the CFO with an AI-adapted financial framework — make their evaluation easier, not harder."),
        ],
        [
          s("Report AI financial performance with the same rigour as the investment case. "),
          x(
            "CFOs who approve investment cases on detailed financial assumptions expect detailed financial performance reporting. A CFO who receives a strategic narrative ('the programme is delivering significant value') after approving an investment on specific financial assumptions will feel the accountability relationship has broken down.",
            "Match the reporting standard to the investment case standard: if the investment was approved on three financial assumptions with specific ranges, the quarterly report should show performance against each assumption with variance analysis. This reporting standard builds the CFO relationship that earns the next investment case a faster and more confident approval.",
          ),
          s(" Report against the assumptions the investment was approved on — the CFO will expect it."),
        ],
      ],
      examples: [
        {
          title: "A bank — CFO co-development of financial assumptions",
          body: "A bank's CDO scheduled working sessions with the CFO's office six weeks before submitting the AI credit risk investment case. Two sessions were used to stress-test the three core financial assumptions: model accuracy impact on processing cost, adoption rate and its effect on throughput, and integration cost based on comparable past projects. The CFO's office challenged the adoption rate assumption (too optimistic) and the integration cost (too low). Both were revised. The formal investment case, submitted with revised assumptions, was approved without challenge. The CFO's analyst noted: 'This is the first AI investment case where we didn't find problems the team hadn't seen.'",
        },
        {
          title: "An insurer — AI-adapted financial framework",
          body: "An insurer's Group CFO had declined two AI investment cases in the previous year because the return estimates were single-point and the cost models were fixed. The CDO redesigned the financial framework: probability-weighted return range with three scenarios and conditions for each, cost model separating the fixed ML platform cost from the variable inference cost with a utilisation curve, and a separate paragraph on strategic option value framing three future initiatives the infrastructure would enable without quantifying them. The CFO approved the next investment case: 'This is how I want to see all AI investment cases presented going forward.'",
        },
        {
          title: "A retailer — performance reporting matches the investment case",
          body: "A retailer's AI demand forecasting investment case had been approved on three assumptions: forecast accuracy improvement (25-35%), buyer adoption rate (65-75%), and markdown reduction (3-5 percentage points). The quarterly performance report provided variance analysis for each: forecast accuracy at 31% (within range), buyer adoption at 58% (below range — adoption intervention implemented), markdown reduction at 2.4 percentage points (below range — likely linked to adoption shortfall). The CFO's quarterly response: 'Clear performance reporting, clear variance identification, clear attribution. The adoption intervention looks correct. Approved for continued investment.' The reporting quality maintained investment confidence through a period of below-target performance.",
        },
      ],
    }),
    buildSection({
      number: "11.4",
      title: "The CHRO Relationship",
      subtitle: "The partnership that determines whether AI adoption succeeds",
      take: "The Chief Human Resources Officer has more influence over AI programme success than most AI programme leaders realise. Workforce impact, change management capacity, learning and development investment, performance measure redesign, and the cultural narrative around AI in the organisation all sit in the CHRO's domain. Business leaders who engage the CHRO as a programme co-owner produce better adoption outcomes than those who manage them as a stakeholder to be informed.",
      why: "AI adoption is a human behaviour change challenge, not a technology deployment challenge. The CHRO owns the infrastructure for human behaviour change: learning design, performance management, workforce planning, and organisational culture. Partnering with the CHRO gives AI programmes access to that infrastructure.",
      paragraphs: [
        [
          s("Engage the CHRO as a co-owner of workforce impact, not as a change management service provider. "),
          x(
            "CHROs who are informed about AI programmes and asked to 'manage the people side' are service providers. CHROs who co-own the workforce impact — helping to define which roles change, how they change, what skills are required, and how the organisation develops those skills — are programme partners. The difference is whether the CHRO is in the room when the decisions are made, or receiving decisions to implement.",
            "Co-ownership requires early engagement: the CHRO should be in the programme governance from design, not from deployment. The workforce design decisions made at programme design — which roles are automated, which are augmented, which new roles emerge — are the decisions that determine whether the CHRO's function can prepare the workforce appropriately.",
          ),
          s(" CHRO in the room at design, not at deployment — workforce design decisions cannot be reversed after implementation."),
        ],
        [
          s("The CHRO controls the performance management infrastructure that determines adoption. "),
          x(
            "Performance management systems reward the behaviours they measure. If AI-assisted work is not measured in performance reviews — if sales professionals are measured on call volume rather than AI-assisted call quality, if claims handlers are measured on decision speed regardless of AI tool usage — the performance management system is rewarding behaviour that ignores AI.",
            "Performance measure redesign is a CHRO programme, not a programme director programme. Business leaders who want AI adoption to be incentivised by the performance management system need the CHRO's engagement. The ask is specific: how do we redesign the performance measures for the roles most affected by this AI programme to reward AI-assisted work quality?",
          ),
          s(" Performance measure redesign is a CHRO programme — make the specific ask, not the general request."),
        ],
        [
          s("The CHRO relationship is a source of cultural intelligence. "),
          x(
            "CHROs have visibility into the informal cultural dynamics of the organisation that programme leaders rarely have: which manager will quietly undermine AI adoption, which team is genuinely excited, where the anxiety about AI is highest, and what the organisation's track record on technology change tells us about adoption risks.",
            "This cultural intelligence is invaluable for change management design. A change management programme designed without cultural intelligence treats all teams the same. A change management programme informed by CHRO cultural intelligence differentiates between the team that needs confidence-building (genuine technology anxiety) and the team that needs incentive alignment (rational resistance to change that doesn't benefit them).",
          ),
          s(" CHRO cultural intelligence is the change management design input that programme analysis cannot provide."),
        ],
      ],
      examples: [
        {
          title: "A bank — CHRO co-ownership of workforce design",
          body: "A bank's AI mortgage processing programme engaged the CHRO as a co-owner from month one of design. The CHRO's contribution: a workforce impact assessment that identified which roles would change (mortgage processors — from manual processing to exception handling and quality oversight), which skills the changed roles required (AI system interpretation, exception judgment, customer communication), and what the transition timeline needed to be to avoid involuntary redundancies. The workforce design was built into the programme plan — not retrofitted after deployment. The transition plan allowed natural attrition to reduce headcount rather than redundancy, preserving the programme's social licence.",
        },
        {
          title: "An insurer — performance measure redesign",
          body: "An insurer's AI claims triage programme initially showed 48% assessor acceptance of AI recommendations at month 3 — below the 65% target. The programme director's analysis of the gap found that assessors were measured on 'number of decisions per day' — a metric that rewarded fast independent decisions, not AI-assisted decisions. The CHRO redesigned the assessor performance measure to include 'AI-assisted decision quality rate' — the proportion of AI recommendations accepted and later validated as correct. Acceptance rate improved to 71% within two months of the measure change. The business outcome had not changed; the incentive had.",
        },
        {
          title: "A retailer — CHRO cultural intelligence changes the change management design",
          body: "A retailer's CHRO informed the AI personalisation programme director that the buying team — the primary AI adoption target — had experienced a previous ERP implementation that had been technically successful but organisationally chaotic, leaving lasting distrust of 'new systems'. This cultural intelligence was not in the programme analysis. The change management programme was redesigned: instead of a standard capability training model, it used a co-design approach where buying team members helped design the AI-assisted workflow they would use. Adoption at month 4 was 82% — significantly above the 65% target. The CHRO's cultural intelligence had changed the design from a training programme that would have triggered distrust to a co-design programme that built ownership.",
        },
      ],
    }),
    buildSection({
      number: "11.5",
      title: "The CTO/CIO Relationship",
      subtitle: "The technical authority whose support or opposition determines what gets built",
      take: "The CTO or CIO controls the technology architecture, the engineering resources, and the data platform decisions that determine whether AI programmes are buildable at the quality and scale they require. Business leaders who manage this relationship well have a technical partner who advocates for AI within the technology function; those who manage it poorly have a technical authority who finds legitimate reasons to defer, descope, or deprioritise AI delivery.",
      why: "AI programmes require sustained technology investment — data platform, ML infrastructure, integration engineering, and ongoing model operations. This investment competes with every other technology priority for engineering talent and infrastructure budget. A CTO/CIO who actively supports the AI programme advocates for it in technology resource allocation; one who is merely compliant with it will deprioritise it when competing demands arise.",
      paragraphs: [
        [
          s("Make the CTO/CIO a genuine programme co-owner, not a delivery vehicle. "),
          x(
            "CTO/CIOs who are told 'here is the AI programme; your team will build it' are delivery vehicles for someone else's vision. CTO/CIOs who co-design the technical architecture, challenge the technical assumptions in the business case, and contribute to the sourcing decisions own the programme alongside the business leader.",
            "Co-ownership requires respecting the CTO/CIO's technical judgment. When the business leader and the CTO/CIO disagree about the right technical approach, the resolution process should give genuine weight to the CTO/CIO's position — even when the business leader has a different intuition. Technical authority that is overruled on technical decisions becomes passive-aggressive compliance.",
          ),
          s(" Respect technical judgment in technical decisions — overruled technical authority produces passive compliance."),
        ],
        [
          s("Resolve the AI-vs-core technology investment competition explicitly. "),
          x(
            "Technology functions have pre-existing infrastructure, security, and engineering priorities that predate the AI programme. AI infrastructure — data platforms, ML serving, monitoring — competes with these priorities for engineering talent and capital budget. Without an explicit conversation about how AI investment is prioritised relative to existing technology investment, the competition is resolved informally — and AI consistently loses to the more established priorities.",
            "The explicit conversation: 'What is the relative priority of AI infrastructure versus [specific competing technology priority]? Does the AI programme require a dedicated engineering track, or will it be resourced from the general engineering pool — and if the latter, what is the protection mechanism when AI engineering competes for talent with higher-urgency operational requests?'",
          ),
          s(" Explicit priority conversation with the CTO/CIO before the engineering competition becomes a problem."),
        ],
        [
          s("Build shared success metrics that the CTO/CIO owns. "),
          x(
            "CTO/CIO-owned metrics for AI programmes differ from business outcome metrics: they include technical health indicators (model performance, infrastructure reliability, security posture), delivery metrics (milestone completion, integration quality), and operational metrics (incident rate, resolution time).",
            "When the CTO/CIO has programme success metrics that are their own accountability — not just the business leader's — the technical ownership becomes genuine. A CTO/CIO who is accountable for model uptime and data pipeline reliability manages those things with the same intensity as a business leader manages business outcome metrics.",
          ),
          s(" CTO/CIO-owned technical health metrics create genuine technical ownership of programme success."),
        ],
      ],
      examples: [
        {
          title: "A bank — CTO co-ownership of architecture",
          body: "A bank's CDO invited the CTO to co-present the AI infrastructure architecture to the board — not as a technical supporter but as a co-author of the technical design. The CTO had shaped the architecture to use the bank's existing data platform rather than a new ML-specific platform, saving £800K in infrastructure cost. The co-presentation gave the CTO visible credit for the design — which converted a 'this is your programme, I'll support it' relationship into 'this is our programme, we designed it together.' The CTO subsequently advocated for AI infrastructure investment in three technology budget discussions where previously she had been neutral.",
        },
        {
          title: "An insurer — explicit priority conversation",
          body: "An insurer's AI programme director had been discovering engineering resource constraints for eight months — AI features were consistently delayed because engineers were being reassigned to operational incidents. A direct conversation with the CIO produced an explicit agreement: 'AI programme engineering has a protected pool of three senior engineers; these engineers can only be reassigned from AI to operational incidents with Chief Digital Officer sign-off.' The protection mechanism required one governance conversation to establish. The eight-month pattern of delays ended within six weeks.",
        },
        {
          title: "A manufacturer — CTO-owned reliability metrics",
          body: "A manufacturer's AI quality control programme assigned the CTO model uptime (target: 99.2%), data pipeline freshness (target: <4-hour lag), and security incident rate (target: 0 severity-1 incidents) as CTO-owned programme metrics. These metrics appeared in the CTO's quarterly performance review alongside his operational metrics. For the first time in the programme, the CTO proactively raised an uptime risk at a programme review before an incident occurred — because it was his metric, not just the programme director's. The advance warning allowed a maintenance window to be scheduled before a potential outage occurred.",
        },
      ],
    }),
    buildSection({
      number: "11.6",
      title: "Managing Blockers",
      subtitle: "Converting opposition into support — or containing it when conversion is not possible",
      take: "Every significant AI programme has blockers — stakeholders who actively resist or obstruct the programme. Effective blocker management requires understanding the source of the blocking behaviour (legitimate concern, power threat, principle objection, or competitive interest) and responding accordingly. The response options are: address the concern, reframe the programme's impact on the blocker's interest, contain the blocking behaviour through governance, or escalate to a higher authority. Each option is appropriate in different circumstances.",
      why: "Leaving blockers unmanaged destroys AI programmes. Active blockers in governance committees can prevent approvals; in operational positions they can prevent adoption; in board-level roles they can redirect investment. Understanding and responding to blocking behaviour is an essential leadership skill for AI programme sponsors.",
      paragraphs: [
        [
          s("Diagnose the source of blocking behaviour before choosing the response. "),
          x(
            "Legitimate concern blocking: the blocker has identified a real problem — a governance gap, a regulatory risk, a data quality issue — and is blocking until it is addressed. Response: address the concern with a specific solution and confirm with the blocker that the solution satisfies it. Power threat blocking: the blocker's position or influence is threatened by the programme's success. Response: reframe the programme's impact on the blocker's role — give them a credible position in the AI-enabled future. Principle objection blocking: the blocker disagrees with the programme on principled grounds (ethical concerns, fairness concerns, privacy concerns). Response: engage seriously with the principles and demonstrate how the programme's design addresses them.",
            "Competitive interest blocking: the blocker benefits from the programme failing — a vendor competitor, a political rival for budget. Response: contain through governance design rather than engaging in direct conflict.",
          ),
          s(" Diagnose first: legitimate concern, power threat, principle objection, or competitive interest — each requires a different response."),
        ],
        [
          s("Containing blocking behaviour through governance is legitimate when necessary. "),
          x(
            "When a blocker cannot be converted — their interest in the programme's failure is genuine and irreconcilable — governance design can contain the blocking behaviour. Governance mechanisms that contain blocking: majority-vote committee structures that do not give the blocker veto power, escalation paths that bypass the blocker when they have a conflict of interest, and explicit conflict-of-interest policies that require recusal from relevant governance decisions.",
            "Containing is not suppressing — it is designing governance that produces good decisions even when one participant has a conflicting interest. The blocker who has a conflict of interest and is required to recuse from a specific decision is not losing their voice in governance — they are being asked to respect a governance norm.",
          ),
          s(" Governance design can contain blocking behaviour — this is legitimate, not suppressive."),
        ],
        [
          s("Escalation is available as a last resort — use it only when other options are exhausted. "),
          x(
            "Escalating a blocker to a higher authority — CEO, board, or a more senior executive — is the nuclear option in stakeholder politics. It produces a governance decision quickly but permanently damages the relationship with the blocker and signals to all stakeholders that political conflict is unresolved.",
            "Escalation is appropriate when: all conversion attempts have failed, governance containment is not possible or has failed, the blocker's behaviour is causing material programme harm, and the business leader has documented evidence of each attempted resolution step. Escalation without this documentation looks like political opportunism; escalation with it looks like responsible governance escalation.",
          ),
          s(" Escalation is the last resort, requiring documented prior resolution attempts — without them, it looks political."),
        ],
      ],
      examples: [
        {
          title: "A bank — legitimate concern converted",
          body: "A bank's Head of Compliance was blocking the AI credit scoring programme, citing the risk of discriminatory outcomes under the Equality Act. The CDO treated this as a legitimate concern — not a blocking behaviour to overcome. She engaged external legal counsel, commissioned a pre-deployment bias audit, and designed an explainability framework that could demonstrate protected characteristic neutrality to regulators. She then shared the outputs with the Head of Compliance before the programme governance vote. The Head of Compliance's response: 'These address my concerns. I'm prepared to support the programme.' The block was legitimate; the response was substantive.",
        },
        {
          title: "An insurer — power threat reframed",
          body: "An insurer's Claims Director was blocking the AI claims triage programme. Stakeholder interviews revealed the source: as described in section 11.1, she was concerned about loss of authority if AI made the decisions. The CDO reframed: 'The programme creates a new role — Head of Claims Intelligence — that owns the AI performance standards, the exception case governance, and the performance of the AI as a claims function capability. This role requires your claims expertise and AI governance judgment in combination.' The reframe gave the Claims Director a credible and enhanced position in the AI-enabled function. The block was removed; she became an active programme champion.",
        },
        {
          title: "A retailer — competitive interest contained through governance",
          body: "A retailer's AI personalisation programme was being blocked by the Head of Merchandising, whose function was the primary source of manual range curation that AI would partially replace. She had a competitive interest in the programme's failure — AI success reduced her function's headcount and influence. Conversion was attempted and failed: she was not interested in a reframed role. Governance containment: the AI programme governance committee was redesigned so that investment and deployment decisions required a majority vote; no single committee member had veto power. The Head of Merchandising's opposition was noted and recorded in the minutes; programme decisions proceeded on majority vote. The programme deployed as planned.",
        },
      ],
    }),
    buildSection({
      number: "11.7",
      title: "Building a Coalition",
      subtitle: "The network of support that sustains AI programmes through difficulty",
      take: "No AI programme survives purely on its own merits. The most technically sound programmes get cancelled when they hit difficulty if they have not built a coalition of active supporters who will advocate for them when the going gets hard. Building a coalition is proactive stakeholder investment — made before difficulty arrives, so it is available when needed.",
      why: "Coalitions are not about politics for its own sake — they are about ensuring that good programmes have the organisational support to survive the setbacks that every complex programme encounters. A programme with a coalition has advocates; a programme without one has only evidence.",
      paragraphs: [
        [
          s("A coalition has three types of members: sponsors, advocates, and users. "),
          x(
            "Sponsors hold formal authority — board members, executive committee members, investment committee chairs. They provide budget, governance protection, and escalation authority. Advocates hold informal influence — respected leaders, thought leaders, trusted advisors — who shape the opinion of formal authority. Users experience the AI directly — team members whose adoption demonstrates the programme's value and whose testimonials are more credible to their peers than any executive narrative.",
            "Building all three types creates a coalition that functions at three different levels of the organisation. A programme that has executive sponsor support but no user advocates is vulnerable to the disconnect between governance approval and operational reality. A programme with enthusiastic users but no executive sponsor is vulnerable to budget competition and governance decisions made without its interests represented.",
          ),
          s(" Sponsors, advocates, and users — three coalition types, three organisational levels."),
        ],
        [
          s("Coalition building requires deliberate investment, not passive hope. "),
          x(
            "Coalitions are built through: creating early wins for potential coalition members (give them a success they can associate with the programme), providing coalition members with the information they need to be effective advocates (not a sales pitch — genuine knowledge of the programme's performance and direction), and engaging them in decisions that give them ownership over programme elements they care about.",
            "The early win mechanism is particularly powerful: a business unit leader whose function is the first to see AI-driven efficiency gains becomes a coalition member without needing to be recruited. The programme's performance does the recruitment. Building early wins for the functions most likely to become effective coalition members is both good programme design and good political strategy.",
          ),
          s(" Early wins create coalition members without recruitment — design them for the functions most likely to become effective advocates."),
        ],
        [
          s("Coalition members need to know what is expected of them. "),
          x(
            "A coalition member who does not know they are expected to advocate — who thinks they are simply a positive stakeholder — will not advocate at the moment it is needed. Coalition building includes an explicit conversation: 'I am building support for this programme because I believe in its value. I would welcome your active support — would you be willing to speak to it in the executive committee/board/team meeting when it comes up?'",
            "The explicit ask converts a positive disposition into a committed advocate. Most stakeholders who are asked directly and who support the programme will agree to advocate when asked. The reluctance to make the explicit ask is the most common reason coalitions remain implicit rather than active.",
          ),
          s(" The explicit ask converts positive disposition into committed advocacy — do not assume advocacy without asking."),
        ],
      ],
      examples: [
        {
          title: "A bank — early win creates a coalition anchor",
          body: "A bank's AI programme deliberately deployed its first initiative in the Retail Banking Director's function — not because it was the highest-priority use case, but because the Retail Banking Director had the most influence over the executive committee's opinion of the AI programme. The initiative produced a £2.1M cost reduction in the first year. The Retail Banking Director became the programme's most active executive committee advocate — without being recruited. At the next budget allocation discussion, she opened: 'I can tell you from direct experience that this programme produces real returns. My function's cost reduction proves it. I'd recommend allocating the full requested budget.'",
        },
        {
          title: "An insurer — three-level coalition in action",
          body: "An insurer's AI claims programme built a three-level coalition: board sponsor (Group CEO), executive advocate (Group COO, who had seen comparable AI programmes work at a previous employer), and user advocates (three claims assessors who volunteered as 'AI champions' after the pilot, briefing their peers informally). When the programme encountered a six-month delay due to a data integration challenge, the board sponsor maintained investment at the board level, the executive advocate managed executive impatience, and the user advocates maintained team morale and continued to demonstrate the pilot results in team conversations. The delay did not trigger a programme cancellation discussion — the three-level coalition absorbed the pressure.",
        },
        {
          title: "A manufacturer — explicit ask produces active advocacy",
          body: "A manufacturer's AI quality control programme director had built four positive stakeholder relationships she believed were her coalition. When budget pressure in Q3 led to a proposal to defer the AI programme, she discovered that none of the four had spoken in defence of the programme in the budget meeting — because none of them had been explicitly asked to advocate. She scheduled calls with all four, asked directly for their support in the budget discussion, and explained what she needed: 'If the programme's value is raised in the budget discussion, I would benefit from you confirming your function's experience.' All four engaged at the next budget discussion. The deferral was avoided.",
        },
      ],
    }),
    buildSection({
      number: "11.8",
      title: "The Business Leader's Political Capital",
      subtitle: "Managing the resource that determines how much change you can drive",
      take: "Political capital is the reservoir of goodwill, trust, and credibility that enables a business leader to make resource requests, drive contentious decisions, and sustain programmes through difficulty. It is earned through credibility (accurate forecasts, delivered commitments), through transparency (honest disclosure of challenges), and through genuine stakeholder investment (listening before asking). It is spent on the decisions that matter most — and it must be replenished as it is spent.",
      why: "Political capital is a finite resource. Business leaders who spend it on every AI initiative or every governance dispute exhaust it before they reach the decisions that most need it. Leaders who manage it strategically — earning deliberately, spending selectively, and replenishing consistently — sustain the organisational influence that drives ambitious programmes.",
      paragraphs: [
        [
          s("Earn political capital before you need to spend it. "),
          x(
            "Political capital is not earned in the moment of need — it is earned in the months and years before the moment of need. The sources of political capital: accurate forecasting of AI programme outcomes (so stakeholders trust your future projections), consistent delivery against commitments (so stakeholders know that programme approvals lead to programme outcomes), and transparent disclosure of challenges (so stakeholders know they will not be surprised by problems you were aware of).",
            "Business leaders who want political capital for AI investment must have a track record of one or more of these three sources. Leaders who have none of the three — who have over-promised, under-delivered, and concealed problems — have no political capital regardless of how strong their AI investment case is.",
          ),
          s(" Political capital is earned by accurate forecasting, consistent delivery, and transparent disclosure — before you need it."),
        ],
        [
          s("Spend political capital selectively on the decisions that most need it. "),
          x(
            "Political capital spent on every governance dispute and every resource request is political capital that is not available for the decisions that most need it. Leaders who pick every battle exhaust their capital on medium-stakes decisions and have nothing left for high-stakes ones.",
            "The selection criterion: spend political capital on decisions where the outcome is genuinely important to programme success AND where the evidence alone is insufficient to produce the right outcome. Decisions where evidence speaks for itself do not need political capital. Decisions where evidence is ambiguous but the stakes are high — a borderline board approval, a contested resource allocation, a contentious governance decision — are where political capital earns its greatest return.",
          ),
          s(" Spend political capital on decisions where stakes are high and evidence alone is insufficient."),
        ],
        [
          s("Replenish political capital continuously through delivered commitments. "),
          x(
            "Political capital that is spent without being replenished is eventually exhausted — and the leader who has exhausted it cannot drive significant change regardless of their formal authority. Replenishment requires: delivering on commitments made to stakeholders, reporting honestly on programme performance (including failures), and giving credit to others when shared work succeeds.",
            "The most reliable political capital replenishment mechanism: make specific commitments and meet them. A leader who commits to 'an update in two weeks' and delivers it in two weeks earns more political capital than a leader who commits to 'a comprehensive programme review' and delivers it three months late. Specificity and reliability compound over time into a reputation for trustworthiness — which is political capital.",
          ),
          s(" Specific commitments, reliably met — the highest-yield political capital replenishment mechanism."),
        ],
      ],
      examples: [
        {
          title: "A bank — political capital earned through honest disclosure",
          body: "A bank's CDO disclosed a programme delay to the board before the board asked about it. The disclosure included: root cause analysis (a data integration problem that had not been adequately anticipated), the revised timeline, and the management action underway. A board member's response: 'I appreciate that you told us before we had to ask.' The disclosure spent some political capital (boards prefer to hear good news) but earned more than it spent — because the trust established by transparent disclosure was qualitatively different from the trust eroded by concealment.",
        },
        {
          title: "An insurer — selective spending preserves capital for the critical decision",
          body: "An insurer's CDO had conserved her political capital through three quarters of programme governance by using evidence to resolve disputes rather than relationships — asking 'what does the data show?' rather than 'I believe we should proceed.' When a board member proposed reducing the AI programme budget by 40% due to a difficult financial quarter, the CDO spent political capital directly: she called the CEO before the board meeting and requested a private conversation about the programme's value to the strategic plan. The CEO, who trusted the CDO on the basis of 18 months of accurate reporting, agreed to defend the budget in the board discussion. The 40% reduction was avoided. The CDO's capital had been preserved for exactly this moment.",
        },
        {
          title: "A retailer — commitment specificity builds capital over time",
          body: "A fashion retailer's CDO adopted a practice of making specific, calendar-dated commitments to every stakeholder engagement: 'I'll send you the pilot performance data by Thursday.' 'I'll have a response to your governance concern by the 14th.' 'I'll update the board at the October meeting with the six-month evidence.' Over 24 months, the CDO delivered on 94% of specific commitments within the stated window. The programme director noted: 'She can get a meeting with any executive in the company within 24 hours. That's what 24 months of reliable commitments buys you.' The political capital was visible in access — the CDO could reach the stakeholders she needed before critical decisions, not after.",
        },
      ],
    }),
  ],
  quiz: [
    {
      q: "A key stakeholder is blocking your AI programme's approval. Before choosing a response, what is the most important first step?",
      options: [
        "Escalate to the CEO immediately to resolve the block.",
        "Diagnose the source of the blocking behaviour: is it a legitimate concern, a power threat, a principle objection, or a competitive interest?",
        "Reduce the programme scope to remove the element the stakeholder is blocking.",
        "Build a coalition of supporters to outvote the blocker.",
      ],
      correct: 1,
      correctFeedback:
        "Right. The response to blocking behaviour depends entirely on its source. A legitimate concern requires a substantive response; a power threat requires a reframe; a principle objection requires engagement with the principle; competitive interest requires governance containment. Applying the wrong response makes the situation worse. Re-read section 11.6.",
      wrongFeedback:
        "Escalation, scope reduction, and coalition voting are all possible responses — but each is appropriate for specific sources of blocking behaviour. Diagnosing the source before choosing the response is the prerequisite for an effective intervention. Re-read section 11.6.",
    },
    {
      q: "The CFO challenges your AI investment case: 'How confident are you in the benefit estimates?' What does this question primarily signal?",
      options: [
        "The CFO is sceptical of AI investment in principle.",
        "The CFO is applying standard capital allocation rigour — they need the assumption structure and the evidence for each assumption, not a confidence assertion.",
        "The business case was poorly presented.",
        "The CFO needs to understand AI better before they can evaluate the investment.",
      ],
      correct: 1,
      correctFeedback:
        "Right. CFOs are not anti-AI — they are applying capital allocation rigour that is their governance responsibility. The question is an invitation to show the assumption structure. Re-read section 11.3.",
      wrongFeedback:
        "CFO scrutiny of benefit estimates is governance, not scepticism. The productive response is the assumption structure and evidence — not a confidence assertion or a request for the CFO to understand AI better. Re-read section 11.3.",
    },
    {
      kind: "categorize",
      q: "Sort each blocking behaviour into its likely source.",
      categories: ["Legitimate concern", "Power threat", "Principle objection", "Competitive interest"],
      items: [
        { text: "Head of Compliance blocks the AI hiring tool citing potential discrimination under employment law.", category: 0 },
        { text: "Head of Claims blocks the AI triage system because her function's headcount — and therefore her authority — will be reduced.", category: 1 },
        { text: "Chief Ethics Officer blocks the AI pricing tool on the grounds that dynamic pricing disproportionately affects lower-income customers.", category: 2 },
        { text: "A procurement director blocks the AI vendor selection because their personal relationship with a competing vendor creates a financial conflict of interest.", category: 3 },
      ],
      correctFeedback:
        "Right. Each source requires a different response: legitimate concern needs substantive resolution; power threat needs role reframing; principle objection needs genuine ethical engagement; competitive interest needs governance containment with conflict-of-interest management. Re-read section 11.6.",
      wrongFeedback:
        "Blocking source determines the appropriate response. Treating all blocking behaviour the same — as resistance to be overcome — misses the legitimate concerns and fails to convert the resolvable ones. Re-read section 11.6.",
    },
    {
      q: "You want to build a coalition for your AI programme. A business unit leader whose function would benefit from an early AI deployment has expressed interest. What is the most important next step?",
      options: [
        "Provide them with a briefing pack on the AI programme's strategic rationale.",
        "Design the first AI deployment for their function, creating an early win that converts their interest into genuine advocacy through direct experience.",
        "Add them to the programme governance committee immediately.",
        "Ask them to attend the next board presentation as a supporter.",
      ],
      correct: 1,
      correctFeedback:
        "Right. Early wins create coalition members through direct experience — which is more credible and more durable than advocacy based on briefing packs or committee membership. A business unit leader who can say 'I've seen this work in my function' is a more powerful advocate than one who says 'I've read the business case.' Re-read section 11.7.",
      wrongFeedback:
        "Briefing packs create informed stakeholders, not advocates. Committee membership creates formal participants, not committed supporters. Early wins create genuine advocates through direct experience of the programme's value. Re-read section 11.7.",
    },
    {
      q: "The CHRO of your organisation is being asked to 'support the change management for the AI programme'. What governance design change would most effectively convert the CHRO from a service provider to a co-owner?",
      options: [
        "Give the CHRO formal sign-off authority on the change management budget.",
        "Engage the CHRO from programme design — specifically in the workforce impact assessment and performance measure redesign decisions — not from deployment.",
        "Rename the CHRO's role to 'Chief People and AI Officer'.",
        "Add change management KPIs to the CHRO's annual performance objectives.",
      ],
      correct: 1,
      correctFeedback:
        "Right. Co-ownership means being in the room when design decisions are made — not managing the consequences of decisions made without you. Workforce design and performance measure decisions made at the design stage are the CHRO's highest-value contribution to AI programme success. Re-read section 11.4.",
      wrongFeedback:
        "Co-ownership is determined by when and how engagement occurs, not by formal authority labels or KPI assignments. The design-stage engagement is what converts service provision into programme co-ownership. Re-read section 11.4.",
    },
    {
      kind: "order",
      q: "Order the steps for managing a blocker who cannot be converted (competitive interest) in the correct sequence.",
      prompt: "Drag to arrange from first step (top) to last (bottom).",
      items: [
        "Diagnose the source: confirm this is a competitive interest block, not a legitimate concern that could be addressed.",
        "Attempt conversion: offer a role reframe or stakeholder engagement to test whether the interest can be aligned.",
        "Design governance containment: ensure the governance structure does not give the blocker veto power and applies conflict-of-interest policies.",
        "Document the blocking behaviour and all resolution steps taken.",
        "Escalate only if governance containment has failed and programme harm is material and ongoing.",
      ],
      correctFeedback:
        "Right. The sequence moves from diagnosis to conversion attempt to governance containment to documentation to escalation as a last resort. Escalating before attempting conversion and containment looks political. Containing without documenting lacks the evidence base for escalation if it becomes necessary. Re-read section 11.6.",
      wrongFeedback:
        "The blocker management sequence is designed to escalate progressively: diagnosis first, conversion attempt second (even if unlikely to succeed), containment third, documentation fourth, escalation last. Skipping steps produces escalations that lack evidence and containment designs that lack legitimacy. Re-read section 11.6.",
    },
  ],
});
