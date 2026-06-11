import { BL_CALLOUT, buildChapter, buildSection, s, x, sectionWithDiagram } from "../concepts-bl-helpers";

export const chapter10BlAiChampionNetwork = buildChapter({
  slug: "bl-ai-champion-network",
  number: 10,
  shortTitle: "AI Champion Network",
  title: "Building and Sustaining an AI Champion Network",
  readingMinutes: 26,
  summary:
    "An AI champion network is the most cost-effective adoption mechanism available to a business leader — a distributed network of credible peers who model AI behaviour, support colleagues' adoption, and surface adoption barriers before they become programme failures. The difference between an AI champion network that works and one that burns out in 6 months is the design: champions must be selected carefully, enabled generously, and given a mandate that extends their current role rather than replacing it.",
  keyTakeaway:
    "An AI champion network is not a volunteer enthusiasm programme — it is a formal, resourced capability that requires named role accountability, explicit time allocation, structured enablement, and regular governance. Champion networks that lack any of these four elements consistently burn out or drift from purpose within 6–12 months. Networks that have all four consistently sustain AI adoption above the organisational average for 3 years or more.",
  pmCallout: BL_CALLOUT,
  sections: [
    sectionWithDiagram({
      number: "10.1",
      title: "What an AI champion network is and why it works",
      subtitle: "The mechanism that makes peer influence a deliberate adoption strategy",
      take: "An AI champion network formalises what happens organically in every AI adoption programme — a small number of enthusiastic, capable employees who help their colleagues adopt AI tools. Formalising this informal behaviour gives it structure, scale, support, and sustainability that organic enthusiasm alone cannot maintain. The network works because peer influence is the most effective adoption mechanism available, and the champion network is the infrastructure that makes peer influence systematic rather than accidental.",
      why: "Business leaders who rely on organic AI enthusiasm to spread adoption are depending on a mechanism they cannot manage, measure, or sustain. A champion network converts the same peer influence mechanism into a managed, measurable capability that can be directed toward the functions, use cases, and populations where adoption support is most needed.",
      paragraphs: [
        [
          s("Peer influence is the most effective AI adoption mechanism in enterprise organisations. "),
          x(
            "Research on technology adoption consistently shows that the most influential adoption signal is a trusted peer's experience. An employee who sees a colleague they respect using an AI tool and genuinely benefiting from it is more motivated to try the tool than they would be after any number of leadership communications, vendor demonstrations, or training sessions. The champion network makes this peer influence deliberate: it identifies credible peers, develops their AI capability, and creates channels for their influence to reach colleagues who would not naturally encounter it.",
            "The key word is 'credible': the peer must be respected for their domain expertise and practical judgement, not just for their AI enthusiasm. An AI enthusiast who everyone knows loves technology is not a champion — they are a hobbyist. An operations manager who was sceptical, tried AI, and found it changed how they work is a champion.",
          ),
          s(" Select champions for domain credibility first, AI capability second. Credible people make AI adoption credible."),
        ],
        [
          s("The champion network addresses the adoption support gap that central programme teams cannot close at scale. "),
          x(
            "A central change team of 5–10 people cannot provide regular, contextual adoption support to 500+ employees across multiple functions. Attempting to do so produces thin coverage, slow response times, and support that lacks the role-specific context required for genuine help. A champion network of 30–50 employees distributed across functions provides 5–10× the support coverage with 3–5× the contextual relevance — because each champion understands the specific workflow, tools, and professional norms of their function.",
            "Coverage and context are the two dimensions where champion networks outperform central teams. A central team can provide deep expertise on AI technology; only a champion embedded in the function can provide 'here is how this AI tool applies to our specific planning cycle, with our specific data, in our specific context.'",
          ),
          s(" Design the champion network with a coverage target: one champion per 15–25 employees in AI-active functions."),
        ],
        [
          s("A champion network also serves as the most reliable adoption intelligence network for programme leaders. "),
          x(
            "Champions who are embedded in functions and trusted by colleagues hear adoption barriers, tool quality concerns, and manager resistance that never reach the central programme team. A weekly 30-minute champion check-in call consistently produces more actionable adoption intelligence than any analytics dashboard or employee survey — because champions are present in the daily adoption experience and trusted with honest feedback.",
            "The intelligence function of the champion network is as valuable as the advocacy function. Programme leaders who treat champion calls as a briefing opportunity (telling champions what to communicate) rather than an intelligence opportunity (asking champions what they are hearing) forfeit the network's highest-value contribution.",
          ),
          s(" Structure champion calls as intelligence-first sessions: begin with 'what are you hearing?' before moving to 'here is what we need you to communicate.'"),
        ],
      ],
      examples: [
        {
          title: "Financial services — champion vs central team coverage",
          body: "A bank's AI programme ran a 16-week comparison: one function received adoption support from the central change team (3 dedicated support hours per week for 80 employees), another function received champion support (4 champions, 2 hours each per week, 8 hours total). Active use rate at 16 weeks: central team-supported function 46%, champion-supported function 71%. Post-programme analysis: champions were accessible daily in the same physical and digital spaces as their colleagues, which produced informal support moments that central team visits could not replicate.",
        },
        {
          title: "Healthcare — intelligence gathering value",
          body: "A hospital trust's AI programme director ran monthly champion calls with 18 clinical champions. In 12 months, champion calls identified: a tool interface change that was reducing clinical adoption (6 weeks before the analytics showed a usage decline), a specific failure mode in AI documentation for complex multi-system patients (never raised through formal feedback channels), and a ward manager who was actively discouraging AI use in their team (identified through champion observation, not through any formal process). All three were resolved based on champion intelligence before they became programme-level issues.",
        },
        {
          title: "Retailer — organic vs structured champion comparison",
          body: "A retailer compared two regions: Region A had an organic enthusiasm model (no formal champion designation, supporters helped informally). Region B had a structured champion network (12 champions, named roles, 20% time allocation, monthly champion meetings). At 12 months: Region A adoption 41%, Region B adoption 68%. The organic supporters in Region A had reduced their informal support activity by month 6 because there was no structure to sustain it. The structured champions in Region B maintained consistent activity because they had formal role accountability.",
        },
      ],
    }, {
      kind: "diagram",
      id: "bl-change-management",
      type: "flow",
      title: "AI Change Management",
      caption:
        "Sponsor → communicate → train → champions → measure adoption.",
    }),
    sectionWithDiagram({
      number: "10.2",
      title: "Identifying and recruiting AI champions",
      subtitle: "Who to look for and how to approach potential champions",
      take: "Champion selection is the most consequential design decision in a champion network — more important than training content, governance structure, or support infrastructure. A well-selected champion with minimal support outperforms a poorly-selected champion with maximum support. The selection criteria must prioritise peer credibility and practical effectiveness over AI enthusiasm and technical affinity, because the champion's role is to make AI adoption credible to peers — which requires the peer's trust, not the champion's technical skills.",
      why: "Champion networks built on AI enthusiasm (selecting the most enthusiastic AI adopters) consistently produce networks that peers perceive as advocacy programmes rather than genuine peer support. A champion who is known for their AI enthusiasm is promoting AI; a champion who was initially sceptical and is now converted is testifying to AI. The latter is far more persuasive to the sceptical majority.",
      paragraphs: [
        [
          s("The four champion selection criteria in priority order. "),
          x(
            "Priority 1: peer credibility — is this person respected by their colleagues for their domain expertise and practical judgement? Priority 2: AI proficiency — does this person use AI tools reliably and can they explain their use to others? Priority 3: communication skill — can this person explain concepts clearly and comfortably in peer conversations? Priority 4: availability — does this person have the capacity to take on champion responsibilities with a formal time allocation?",
            "Most champion selections invert this priority order: they start with AI proficiency (who uses AI?) and add communication and availability. Starting with peer credibility ensures that champions are trusted before they are trained, rather than trained without being trusted.",
          ),
          s(" Apply the four criteria in priority order. A credible person who needs AI training is a better champion than an AI-capable person who lacks peer credibility."),
        ],
        [
          s("Candidate identification uses three sources: manager nominations, peer nominations, and capability island mapping. "),
          x(
            "Manager nominations identify employees the manager believes would be effective champions — but may over-select for enthusiasts the manager likes rather than peers their colleagues trust. Peer nominations identify employees that colleagues would go to for AI help — more reliable for credibility but may miss employees who are capable but not yet well-known. Capability island mapping (from the gap assessment process) identifies employees already performing informal champion behaviours.",
            "Using all three sources and cross-referencing the resulting candidates against the four selection criteria produces the most representative and credible champion cohort.",
          ),
          s(" Use manager nominations, peer nominations, and capability island mapping together. Any single source will over-represent a subset of the ideal candidate profile."),
        ],
        [
          s("The champion recruitment conversation must be honest about time commitment and benefits. "),
          x(
            "Champion burnout is almost entirely caused by inadequate time allocation combined with inadequate recognition. The recruitment conversation must specify: formal time allocation (20–30% of working time), what the champion role will require (peer support, meeting facilitation, feedback collection, monthly reporting), and what the champion gains (career development, visibility, access to advanced AI training, recognition in performance reviews).",
            "Champions who accept the role without knowing the time commitment leave within 6 months when the informal role grows beyond their capacity to manage alongside their full original role. Champions who accept the role with full knowledge of the commitment and adequate time allocation sustain for 18–24 months on average.",
          ),
          s(" Include formal time allocation, role requirements, and career benefits in every champion recruitment conversation before the candidate accepts."),
        ],
      ],
      examples: [
        {
          title: "Insurance — credibility-first selection",
          body: "An insurer's AI champion selection process used peer nominations as the primary selection source. Employees were asked: 'Who would you go to in your team if you needed help with a new work tool?' Of the 89 nominations, 54 nominated colleagues had never been identified as AI adopters in usage data. Investigation: 41 of the 54 were highly respected practical problem-solvers who were not current AI users but had the credibility that made peer influence work. All 41 were approached for the champion programme. 28 accepted, completed training, and became active champions. Post-network adoption rate in champion-supported teams: 74% versus 43% in teams without a credibility-first champion.",
        },
        {
          title: "Retailer — honest recruitment conversation",
          body: "A retailer's first AI champion cohort of 15 experienced 60% turnover in 9 months — champions leaving because 'it was more work than I expected on top of my normal job.' The recruitment conversation had not specified time commitment. The second cohort of 18 was recruited with an explicit 25% time allocation included in the role description and formal discussions about the time reallocation from their original role. Turnover in the second cohort: 11% over 18 months. The transparency about time commitment was the primary factor cited by sustained champions for their continued engagement.",
        },
        {
          title: "Healthcare — three-source identification",
          body: "A hospital trust used three identification sources for 24 clinical champion candidates: ward manager nominations (8 candidates), peer survey asking 'who would you ask for help with a new clinical tool?' (14 candidates, 7 not already nominated by managers), and capability island mapping from the training data (6 candidates, 4 not in either previous source). The 6 additional candidates from capability mapping included 2 of the most effective champions in the network — identified because they were already performing champion behaviours informally, not because anyone had thought to nominate them.",
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
      number: "10.3",
      title: "Champion roles and responsibilities",
      subtitle: "Defining what champions are accountable for and what they are not",
      take: "Champion role clarity is the second most common cause of champion network failure after inadequate time allocation. Champions who are asked to do everything — deliver training, manage adoption metrics, run communications, provide technical support, and attend every AI meeting — are exhausted within 3 months. Champions who have a clearly defined set of responsibilities, with explicit boundaries about what is not their role, are sustainable for 18–24 months.",
      why: "The champion role must be designed as a manageable addition to an existing role, not as a new role with the same hours. This requires both a clear scope of responsibilities and an explicit reduction in other responsibilities to create capacity. The reduction is the harder conversation — but it is the commitment that makes the champion sustainable.",
      paragraphs: [
        [
          s("Core champion responsibilities: four activities that fit within a 20–30% time allocation. "),
          x(
            "Activity 1: peer support — available for informal AI questions from team colleagues, 30–60 minutes per day. Activity 2: adoption monitoring — observing AI use quality in their team and flagging adoption barriers to the programme team, 30 minutes per week. Activity 3: peer sharing — presenting one AI use case or insight in team meetings once per month. Activity 4: champion network participation — attending monthly champion meeting, preparing and contributing one piece of intelligence per meeting.",
            "These four activities fit within 20–30% of a working week. Adding more activities requires either reducing the champion time allocation on other activities or increasing the formal time allocation. Neither is sustainable without explicit agreement.",
          ),
          s(" Define champion responsibilities as the four core activities. Any additional activities require a proportional time allocation increase."),
        ],
        [
          s("Champion non-responsibilities: the activities that should not be in scope. "),
          x(
            "Champions should not: deliver formal training (this belongs to L&D and the CoE), manage adoption metrics or dashboards (this belongs to the programme team), communicate AI programme updates on behalf of central communications (this should come from leadership, not champions), or manage resistance cases involving performance issues (this belongs to HR and management). When these activities migrate into the champion role, champions become programme administration staff rather than peer advocates.",
            "The most common scope creep into champion roles is training delivery. Champions are often asked to run team AI workshops because they are skilled and available. Delivering training requires 3–5× more preparation and delivery time than peer support — and removes the champion from the informal, daily support interactions that are their most valuable contribution.",
          ),
          s(" When a champion is asked to deliver formal training, redirect the request to L&D. Champions should attend training, not deliver it."),
        ],
        [
          s("Champion accountability must be to the programme, not to their direct manager alone. "),
          x(
            "A champion whose only accountability is to their direct manager will have their champion time crowded out by their manager's operational priorities. Champion accountability requires a dual reporting line: operational accountability to their direct manager, champion accountability to the AI programme lead. The programme lead reviews champion activity monthly; the direct manager provides operational capacity for the time allocation.",
            "Dual accountability is not a reporting structure change — it is an agreement about time and activity that is documented in the champion's role description and acknowledged by the direct manager. The direct manager's acknowledgement is the mechanism that protects champion time from operational crowding.",
          ),
          s(" Document dual accountability for every champion: include the programme lead as a named accountability holder in the champion role description."),
        ],
      ],
      examples: [
        {
          title: "Retailer — scope creep prevention",
          body: "A retailer's champion programme began with 4 core activities. At month 4, the programme team asked 3 champions to deliver department-wide AI workshops. The champions agreed because they wanted to help. Each workshop required 6–8 hours of preparation and 3–4 hours of delivery. Champion availability for informal peer support dropped by 60% during workshop preparation periods. Peer support requests in the affected teams went unanswered for 2–3 days at a time. The programme team contracted an L&D resource for future workshops and returned champions to their 4 core activities. Peer support response time returned to 4-hour average within 2 weeks.",
        },
        {
          title: "Financial services — dual accountability",
          body: "A bank's AI champion programme implemented dual accountability formally: each champion had a signed role addendum that named the AI programme lead as a co-accountability holder for champion activities and specified 25% time allocation. Direct managers received a briefing from the AI programme lead explaining the time allocation and its protection. In the first 6 months: zero champions reported that their direct manager had reduced their champion time allocation. Previous champion programme without formal dual accountability: 40% of champions reported having their champion time substantially reduced within 3 months by operational priorities.",
        },
        {
          title: "Healthcare — training redirect",
          body: "A hospital trust's AI programme team received a request from a ward manager to have their champion deliver an AI documentation tool workshop for 20 new nurses. The programme team redirected the request to the clinical informatics training team, who delivered the workshop. The champion attended as a peer presence and answered questions. Post-workshop adoption in the nurses' cohort: 71% at 4 weeks. In a comparable ward where the champion had been asked to deliver training without adequate support, champion burnout had caused a 3-month gap in champion coverage, and adoption was 38%.",
        },
      ],
    }),
    buildSection({
      number: "10.4",
      title: "Enabling champions: tools, training, and support",
      subtitle: "The enablement package that makes champions effective rather than merely enthusiastic",
      take: "Champions who are recruited without adequate enablement become the most visible AI adoption failure in the organisation — because they are visible enough for colleagues to notice and unsupported enough to fail. The champion enablement package must include: advanced AI capability training (champions must be ahead of the colleagues they support), a champion toolkit (practical guides, FAQ libraries, prompt templates), access to CoE expertise for questions beyond the champion's knowledge, and protected time with the AI programme lead for strategy and support.",
      why: "Champions who cannot answer their colleagues' AI questions lose credibility faster than any other adoption communication could lose it. The investment in champion enablement is the investment in the network's credibility — which is the network's primary asset.",
      paragraphs: [
        [
          s("Champion training must be 1–2 tiers ahead of the colleague population they support. "),
          x(
            "If the broader employee population is at Tier 2 (working knowledge), champions must be at Tier 3 (practitioner). If the employee population is at Tier 1 (awareness), champions must be at Tier 2. Champions who are at the same tier as their colleagues have no capability advantage and cannot provide genuine support — they are peers with identical knowledge, not peer guides.",
            "Champion training is delivered before the broader employee training programme begins. Champions who are trained alongside their colleagues cannot perform the champion role during training — they are still learning. Champions who are 4–6 weeks ahead of the broader cohort can perform the champion role from day one of the broader programme.",
          ),
          s(" Complete champion training 4–6 weeks before the broader employee training programme begins. This window is when the champion role starts."),
        ],
        [
          s("The champion toolkit has three components: a FAQ library, a prompt template library, and an escalation guide. "),
          x(
            "FAQ library: the 30–40 most common AI tool questions with answers. Maintained by the CoE and updated monthly. Reduces champion response time and ensures consistent, accurate answers across the network. Prompt template library: role-specific prompt templates for the most common AI use cases in the champion's function. Champions can share and refine these. Escalation guide: a one-page decision tree showing which questions the champion can answer independently and which require escalation to the CoE or IT support.",
            "The escalation guide prevents champions from overreaching — attempting to answer questions beyond their knowledge and providing incorrect guidance. A champion who says 'I don't know, but here's who to ask' is more valuable than a champion who provides confident incorrect answers.",
          ),
          s(" Provide all three toolkit components before the champion begins their role. No toolkit equals no enablement."),
        ],
        [
          s("Programme lead time is the most valued and most often cut enablement resource. "),
          x(
            "Champions consistently rate 30–60 minutes of protected access to the AI programme lead per month as their most valued enablement resource — above training, toolkit, and peer connection. The programme lead time enables: questions about programme strategy (why are we doing X?), early warning sharing (I'm hearing concerns about Y), and personal development guidance (what should I be learning next?). When this time is cut due to programme lead capacity, champion engagement drops faster than any other enablement reduction.",
            "Programme lead time is cheap: 30 minutes per champion per month for 30 champions is 15 hours per month of programme lead time. The return on this 15 hours — better champion intelligence, higher champion engagement, lower champion turnover — is the highest-ROI time investment in the entire programme.",
          ),
          s(" Protect programme lead time for champions as a non-negotiable in the programme schedule. It is the enablement element with the highest ROI per hour."),
        ],
      ],
      examples: [
        {
          title: "Logistics — champions 6 weeks ahead",
          body: "A logistics company's AI routing tool champion training was completed 6 weeks before the broader operations training programme. In week 1 of the broader programme, 12 champions were deployed across 12 operational teams during the supervised practice sessions. Champions answered 84% of peer questions without escalation and provided contextual guidance that the trainer (who did not know the specific routes and depot contexts) could not provide. Adoption at the end of the 6-week broader programme: 72% versus 38% in comparable regions without champions. The 6-week head start created the knowledge differential that made champions useful from day one.",
        },
        {
          title: "Insurance — FAQ library usage",
          body: "An insurer's champion FAQ library contained 38 questions and answers at launch. In the first 3 months, champions reported using the FAQ library for 64% of peer questions. The library was updated monthly: 12 new questions were added based on champion-submitted questions that were not in the library. By month 6, the library contained 56 questions covering 81% of peer AI questions without escalation. Without the FAQ library, champions estimated they would have needed to spend an additional 45 minutes per week researching answers to questions they could look up in 2 minutes.",
        },
        {
          title: "Healthcare — programme lead time retention",
          body: "A hospital trust's AI programme lead reduced champion access from 45 minutes per month to 15 minutes at month 7 due to increased programme workload. Champion satisfaction scores dropped from 78% to 51% in the following month. Champion turnover in the 90 days following the reduction: 4 of 18 champions left the programme. The programme lead restored 30-minute monthly access at month 10. Champion satisfaction recovered to 74%. The 90-day period of reduced access cost the network 22% of its capacity and required 4 replacement champion recruitments, each taking 3–4 weeks to complete.",
        },
      ],
    }),
    buildSection({
      number: "10.5",
      title: "Champion network governance and cadence",
      subtitle: "The operating rhythm that sustains champion engagement over 18–24 months",
      take: "A champion network without governance degrades within 6–12 months: champions reduce their activity as other priorities compete, the network loses its intelligence function as champions disengage from meeting cadence, and peer support coverage declines unevenly as motivated champions carry an increasing proportion of the load. Governance — a structured operating rhythm with clear accountability at each cadence point — is what converts an enthusiastic start into a sustained capability.",
      why: "Champion networks fail not because champions become less committed but because the structure around them fails to sustain their commitment. Enthusiasm does not last 18 months; structure does. The governance design is the sustainability architecture.",
      paragraphs: [
        [
          s("The champion network operating cadence has four elements at different frequencies. "),
          x(
            "Daily: champions are available for informal peer support within their team — no formal structure required, embedded in daily work. Weekly: champions complete a 15-minute activity log (peer support hours, adoption observations, questions escalated) — submitted to the programme lead via a shared tool. Monthly: champions attend a 60-minute network meeting (intelligence sharing, programme updates, peer learning). Quarterly: champions participate in a 90-minute review with the programme lead and their direct manager — reviewing champion activity, agreeing the next quarter's priorities, and addressing any time allocation or scope issues.",
            "The weekly log is the activity accountability mechanism. Without a weekly log, the daily and monthly elements can happen without programme-level visibility. Champions who know their activity is logged weekly maintain higher consistency than those whose activity is only reviewed monthly.",
          ),
          s(" Implement the weekly activity log as the cadence backbone. It takes champions 15 minutes and gives programme leads weekly visibility."),
        ],
        [
          s("Monthly champion meetings must provide intelligence value to champions, not just information value from the programme. "),
          x(
            "A monthly meeting that consists primarily of programme updates and communications briefings (giving champions information to disseminate) will see attendance decline within 4 months. Champions are operational people; they attend meetings that help them do their champion role better. A meeting that begins with 'what are you hearing?' and produces shared problem-solving on adoption barriers, peer-contributed AI tips and use cases, and recognition of champion contributions provides operational value that sustains attendance.",
            "The intelligence-first meeting format — begin with what champions are observing, then share programme updates, then close with collaborative problem-solving — is the format that produces highest champion attendance and highest programme intelligence yield.",
          ),
          s(" Design monthly meetings as intelligence-first, programme-update-second, collaborative-problem-solving-third. Never lead with what champions need to communicate."),
        ],
        [
          s("Champion network health monitoring tracks four indicators of network sustainability. "),
          x(
            "Indicator 1: champion activity rate (what percentage of champions submitted a weekly log in the past month?). Indicator 2: peer support coverage (what percentage of target employees have a champion in their team?). Indicator 3: champion retention (what percentage of champions are still active after 6 months?). Indicator 4: intelligence yield (how many actionable adoption insights were surfaced through champion channels in the past month?). These four indicators together reveal whether the network is sustaining, declining, or expanding.",
            "A network with 80%+ on all four indicators is healthy. A network with declining activity rate (below 70%) or declining retention (below 80% at 6 months) needs intervention before it reaches programme-threatening levels.",
          ),
          s(" Review champion network health indicators monthly alongside AI adoption metrics. Network health is a leading indicator of adoption programme health."),
        ],
      ],
      examples: [
        {
          title: "Financial services — weekly log discipline",
          body: "A bank's champion programme implemented a weekly 15-minute activity log for 35 champions. Log completion rate in month 1: 89%. In month 3: 71%. In month 5: 54%. Declining completion was a leading indicator of champion disengagement. The programme lead investigated: the log tool was cumbersome (taking 30+ minutes instead of 15), two log questions were consistently left blank (champions did not understand what they were asking), and some champions felt the log was surveillance rather than support. A simplified 6-question log, redesigned in collaboration with 5 champions, restored completion to 84% by month 7.",
        },
        {
          title: "Retailer — intelligence-first meeting value",
          body: "A retailer changed its monthly champion meeting format from programme-update-first to intelligence-first. Pre-change attendance (programme-update-first format): 68% average across 12 months. Post-change attendance (intelligence-first format): 87% average across 8 months. Champions cited the format change as the primary reason: 'I attend because I learn something that helps me do my job better. I used to attend because I had to.' Programme intelligence yield (actionable insights per meeting) also increased from 2.1 to 5.4 per meeting.",
        },
        {
          title: "Healthcare — network health monitoring",
          body: "A hospital trust's quarterly network health review at month 9 showed: activity rate 74% (amber), coverage 89% (green), retention 82% (green), intelligence yield 3.1 per month (amber). The amber indicators flagged two champions who had reduced their activity significantly due to increased ward operational pressures. The quarterly review produced: a conversation between the programme lead and the two champions' ward managers (resolving one case) and the recruitment of one replacement champion for a ward whose champion had moved to a different clinical area. The health monitoring caught the coverage gap 6 weeks before it would have appeared in adoption data.",
        },
      ],
    }),
    buildSection({
      number: "10.6",
      title: "Measuring champion network effectiveness",
      subtitle: "The four metrics that tell you whether your champion network is delivering adoption value",
      take: "Champion network effectiveness is measured against its purpose: improving AI adoption in teams with champion support compared to teams without it. Four metrics capture this purpose: adoption differential (adoption in champion-supported vs non-champion-supported teams), support quality (peer ratings of champion helpfulness), intelligence yield (actionable insights from champion channels per month), and champion sustainability (retention at 12 months). These four metrics together tell you whether the network is worth its investment.",
      why: "Champion networks that are only measured by activity metrics (champion training completion, meeting attendance, weekly log submission) are being measured as compliance programmes. Networks that are measured by adoption outcomes are being measured as capability investments. The measurement choice determines the design incentive: activity measurement optimises for compliance; adoption outcome measurement optimises for effectiveness.",
      paragraphs: [
        [
          s("The adoption differential is the primary champion network effectiveness metric. "),
          x(
            "The adoption differential measures the difference in AI tool active use rate between teams with a champion and teams without a champion, at the same point in the programme. A positive differential of 15+ percentage points indicates the champion network is making a material difference to adoption. A differential below 10 points suggests the network is providing insufficient support, or the champion is not reaching colleagues effectively.",
            "The adoption differential must be calculated for the same AI tool, at the same time post-deployment, in comparable teams — to isolate the champion variable. Teams with a champion may also have other adoption advantages (better management support, more relevant use cases) that must be controlled for.",
          ),
          s(" Calculate the adoption differential monthly for the first 12 months of a new champion network. It is the most direct measure of champion value."),
        ],
        [
          s("Support quality is measured by periodic peer ratings, not by champion self-report. "),
          x(
            "A quarterly pulse survey asks 3 questions: Did you receive AI support from your champion in the past month? If yes, how helpful was it (1–5 scale)? If no, did you have an AI question that went unanswered? The first question measures coverage, the second measures quality, and the third measures unmet demand (a leading indicator of coverage gaps).",
            "Peer ratings below 3.5/5 consistently indicate that the champion is not meeting colleagues' expectations — either because the champion lacks the knowledge to help, lacks the accessibility to be reached, or is not being proactive enough in identifying adoption needs.",
          ),
          s(" Run the 3-question peer support survey quarterly for all employees in champion-covered teams. Do not survey champion-uncovered teams — they have no experience to rate."),
        ],
        [
          s("Champion sustainability measures whether the network will exist at 12 months in a form that delivers adoption value. "),
          x(
            "Champion sustainability (the percentage of champions still active at 12 months) below 70% indicates that the network is incurring replacement cost equal to or greater than its adoption value. Replacement cost — identifying a new champion, recruiting, training, and building credibility — typically takes 3–4 months and produces a capability gap during that period.",
            "The leading indicator of sustainability is champion time allocation compliance: champions who report that their formal time allocation is being honoured are 3× more likely to remain active at 12 months than champions who report their time allocation is regularly crowded out by operational priorities.",
          ),
          s(" Track time allocation compliance as a leading indicator of champion sustainability. Address compliance issues within the month they are reported."),
        ],
      ],
      examples: [
        {
          title: "Insurance — adoption differential measurement",
          body: "An insurer measured the adoption differential for its AI claims tool: teams with an active champion at month 6 had 68% active use rate; teams without an active champion had 41% active use rate. Differential: 27 percentage points. The differential was used to calculate champion network ROI: 27 percentage points × 150 employees without champions × estimated value per additional adopter (£4,200 annual AI tool value) = £1.7M annual value from extending the champion network to uncovered teams. The ROI calculation secured budget for 8 additional champion positions in the next cycle.",
        },
        {
          title: "Logistics — support quality action",
          body: "A logistics company's quarterly peer support survey showed support quality ratings of 2.8/5 for 3 of its 12 champions. Investigation: the 3 low-rated champions were technically capable but were perceived as 'too technical' by colleagues — they answered AI questions with detailed technical explanations that operationally-focused colleagues found unhelpful. A coaching session for the 3 champions on how to translate AI answers to operational language increased ratings to 3.9/5 in the following quarter without any change in their technical knowledge.",
        },
        {
          title: "Financial services — sustainability tracking",
          body: "A bank's champion network tracked time allocation compliance as a monthly leading indicator. In month 4, 8 of 30 champions reported their 20% time allocation was being partially redirected to operational work. The programme lead convened a conversation with the 8 champions' line managers. 6 managers agreed to restore the time allocation. 2 managers explained genuine operational constraints; for these teams, temporary champion coverage was provided by the CoE. At month 12, champion retention was 87% — compared to 53% in the previous champion programme that had not tracked time allocation compliance.",
        },
      ],
    }),
    buildSection({
      number: "10.7",
      title: "Scaling from pilot champion network to enterprise",
      subtitle: "How to expand a working champion model across a large organisation",
      take: "A champion network that works in one function is not automatically scalable to the enterprise. The scaling journey requires adapting the champion model to different function cultures, different AI tool maturities, and different organisational structures — while preserving the core design principles that made the pilot successful. The most common scaling mistake is attempting to replicate the pilot exactly: what worked in one function's culture with one function's tools may produce different results in a different context.",
      why: "Scaling a champion network requires the same design discipline as the original pilot — not just more of the same. The functions where the champion model works easily are typically those with similar culture, similar AI tools, and similar management structures to the pilot. The functions where it is hardest are typically the ones where AI adoption impact would be highest — high-complexity, high-stakes workflows where peer support is most needed.",
      paragraphs: [
        [
          s("The scaling readiness assessment evaluates four conditions before expanding to a new function. "),
          x(
            "Condition 1: does the function have an AI deployment active or planned in the next 6 months? (If no, champion support has nothing to support.) Condition 2: does the function have employees who meet the champion selection criteria? (Credible, AI-capable, available candidates.) Condition 3: does the function's leadership support champion time allocation? (Without management commitment, champions cannot perform.) Condition 4: does the function have an AI programme contact (workflow owner or AI product owner) who will coordinate with the champion?",
            "A function that fails any of the four conditions is not ready for champion deployment. Deploying champions into unready functions produces failed experiments that make future champion deployment more difficult.",
          ),
          s(" Apply the four-condition readiness assessment before approving any champion network expansion to a new function."),
        ],
        [
          s("The champion model should be adapted, not replicated, for each new function context. "),
          x(
            "The core design principles (credibility-first selection, formal time allocation, 4 core activities, monthly meetings, intelligence-first cadence) should be preserved across all functions. The content, tools, and communication style should be adapted to the function's culture. A financial services champion communicates differently from a clinical champion from an operations champion — the underlying role is the same; the expression is different.",
            "Adaptation is faster and more effective when the new function's pilot champion cohort co-designs their champion toolkit and communications with the programme team. Co-design produces function-relevant materials in 2–3 weeks; central design produces generic materials that champions must adapt individually.",
          ),
          s(" Co-design champion toolkits with each new function's first champion cohort. The co-design process also builds cohort cohesion and shared ownership."),
        ],
        [
          s("Cross-function champion community is the scaling infrastructure that creates network effects. "),
          x(
            "As the champion network expands across functions, a cross-function champion community — quarterly sessions where champions from different functions share AI use cases, adaptation stories, and best practices — produces learning that individual functions cannot generate alone. A champion in finance who hears how a champion in marketing solved a specific AI output quality problem may adapt the solution for a finance-specific context.",
            "The cross-function community requires minimal additional infrastructure: one quarterly session of 90 minutes added to the existing monthly champion meeting rhythm. The return — cross-function AI learning and an enterprise-wide champion identity that sustains engagement — significantly exceeds the investment.",
          ),
          s(" Launch the cross-function champion community as soon as champions are active in 3 or more functions. The network effect begins at 3+ functions."),
        ],
      ],
      examples: [
        {
          title: "Insurance — readiness assessment in practice",
          body: "An insurer assessed 6 functions for champion network expansion. Results: 3 functions passed all 4 readiness conditions (claims, underwriting, customer service), 2 failed Condition 4 (no AI programme contact in function), 1 failed Condition 1 (no active or planned AI deployment in the next 6 months). The 3 ready functions received champion deployment in the next cycle. The 2 functions missing Condition 4 were supported to appoint AI workflow owners before being re-assessed. Champion deployment into the 3 ready functions avoided 2 months of champion programme failure that would have occurred in the 2 unready functions.",
        },
        {
          title: "Healthcare — function adaptation",
          body: "A hospital trust's operations champion programme was expanded to the pharmacy function. The operations toolkit (routing-focused FAQ library, operations terminology, shift-based meeting cadence) was not directly transferable. The first pharmacy champion cohort co-designed a pharmacy-specific toolkit in 3 sessions: a medication management AI FAQ library, pharmaceutical terminology in all materials, and a meeting cadence aligned with pharmacy dispensing rhythms. Co-design time: 6 hours per champion. The co-designed toolkit rated 4.3/5 for relevance in the first peer support survey; the equivalent operations toolkit adapted for pharmacy had rated 2.1/5 in a pilot that preceded the co-design approach.",
        },
        {
          title: "Financial services — cross-function community",
          body: "A bank launched a quarterly cross-function AI champion community when champions were active in 4 functions (retail banking, commercial banking, risk, and operations). The first session: 28 champions across 4 functions sharing one AI use case each. Cross-function adaptations identified at that session: 4 AI solutions developed in one function were adapted by 2 other functions before the next monthly meeting. The community's most cited value: 'I didn't know other functions had solved problems I've been working on for weeks.' A cross-function knowledge sharing system was subsequently built from the quarterly session insights, making function AI solutions searchable across the champion network.",
        },
      ],
    }),
    buildSection({
      number: "10.8",
      title: "BL decision lens: building your AI champion network",
      subtitle: "Four decisions that determine whether your champion network sustains adoption for 3 years",
      take: "A champion network that sustains AI adoption for 3 years is designed around four decisions made before the first champion is recruited: selecting for peer credibility first, implementing formal time allocation with direct manager commitment, designing the monthly meeting as intelligence-first, and building the network health monitoring from day one. Leaders who make all four decisions correctly build a network that compounds in value; leaders who improvise any of them build a network that depletes in 6–12 months.",
      why: "The champion network is the most durable AI adoption investment a business leader can make — it sustains adoption through multiple waves of AI tool deployment, change management transitions, and organisational changes that would reset adoption progress in organisations without a champion network. The design quality at inception determines its durability.",
      paragraphs: [
        [
          s("Decision 1: define champion selection criteria with 'peer credibility first' as the non-negotiable standard. "),
          x(
            "Before any champion recruitment, publish the four selection criteria in priority order and commit to applying them in that order. The commitment is most important for Criteria 1 (peer credibility) versus Criteria 2 (AI proficiency) — when these two criteria conflict, credibility wins. An employee who is highly respected but not yet AI-capable is the better champion candidate because they can be trained; an employee who is AI-capable but not respected by peers will not be trusted as a champion regardless of their capability.",
            "The most common deviation from the priority order is when a function leader or manager nominates an AI enthusiast for the champion role because they are visible and willing. Applying the criteria rigorously — which may mean not selecting the nominated enthusiast — requires the programme lead to have the selection criteria as a formal gate and to apply it consistently.",
          ),
          s(" Make the selection criteria a formal gate in champion recruitment — not a preference. Deviations from the priority order require programme lead sign-off."),
        ],
        [
          s("Decision 2: obtain direct manager commitment to time allocation before champion recruitment begins. "),
          x(
            "Direct manager commitment to the time allocation is the structural prerequisite for champion sustainability. Without it, the champion is being recruited into a role that their manager has not agreed to support — which produces the time allocation erosion that is the primary cause of champion burnout.",
            "The manager commitment conversation takes 30 minutes and covers: the champion's time allocation (20–30%), the activities this time will be used for, the champion's accountability to the programme lead, and the manager's role in protecting the time allocation from operational crowding. If the manager is unwilling to commit, the candidate should not be recruited as a champion — because they will not have the protected time required.",
          ),
          s(" Conduct the manager commitment conversation before the candidate is approached. A candidate recruited without manager commitment is being set up for burnout."),
        ],
        [
          s("Decision 3 and 4 are operational standards that must be set before the network begins. "),
          x(
            "Decision 3: implement the intelligence-first monthly meeting format from the first meeting and hold to it when programme urgency makes programme-update-first tempting. The intelligence-first format is the mechanism that sustains champion engagement — give up on it and attendance will decline within 3 months. Decision 4: implement the four network health indicators from month 1 and review them monthly alongside programme adoption data. A champion network that is not monitored is a programme element that is being managed on faith rather than evidence.",
            "Both decisions require discipline to maintain under programme pressure. The monthly meeting format will be challenged when there is urgent programme news to share. The health indicators will be cut when the programme team is busy. Both are the investments that prevent the programme from discovering, at month 9, that its most valuable adoption mechanism has been quietly declining for months.",
          ),
          s(" Lock the intelligence-first meeting format and monthly health monitoring into the programme operating model before the first champion is recruited. They are harder to implement after the programme has started."),
        ],
      ],
      examples: [
        {
          title: "Four decisions before recruitment",
          body: "A financial services company made all four champion network design decisions before recruiting its first champion cohort: (1) published the four selection criteria with 'peer credibility first' and applied them rigorously in the first cohort (rejecting 3 nominations that met AI proficiency but not credibility standards); (2) required manager commitment conversations before all 18 champion invitations were extended; (3) designed the monthly meeting as intelligence-first and ran the format for 6 consecutive months without deviation; (4) built the 4-indicator health dashboard and reviewed it in the first week of every month. At 18 months: champion retention 89%, adoption differential 24 points, programme lead cited the 4 upfront decisions as the primary reason the network had lasted longer than any previous champion programme in the organisation.",
        },
        {
          title: "Manager commitment prevents burnout",
          body: "A retailer's second champion cohort implemented manager commitment conversations before recruitment. Of 22 candidate conversations, 4 direct managers declined to commit to the 25% time allocation due to operational constraints. The 4 candidates were not recruited. Instead, 4 alternative candidates from teams whose managers did commit were recruited. At 12 months: all 18 recruited champions were still active. The 4 non-recruited candidates' colleagues reported that they would have been excellent champions — but their managers confirmed the operational constraints had not eased. The manager commitment gate prevented 4 burnout cases at the cost of finding 4 alternative candidates.",
        },
        {
          title: "Intelligence-first discipline sustained",
          body: "A logistics company's AI programme lead faced pressure to lead a monthly champion meeting with a major programme announcement (a new AI tool deployment timeline). Instead of switching to programme-update-first, the lead held to the intelligence-first format: 'What are you hearing?' produced 6 intelligence items, including 2 that were directly relevant to the new tool deployment (adoption barriers in 2 functions that would affect the new tool's reception). The announcement was shared in the second half of the meeting, informed by the intelligence just gathered. Champion attendance that month: 92%. The programme lead noted: 'If I had switched to announcement-first, I would have lost 10 minutes of the most actionable intelligence of the quarter.'",
        },
      ],
    }),
  ],
  quiz: [
    {
      q: "Why does a champion network outperform a central change team for large-scale AI adoption support?",
      options: [
        "Champions are cheaper than change management professionals",
        "Champions provide peer influence that is more credible than central team communications, combined with contextual knowledge of function-specific workflows",
        "Central change teams can only support small numbers of employees at a time",
        "Champions have more authority to enforce AI adoption than change teams",
      ],
      correct: 1,
      correctFeedback:
        "Correct. Champions combine peer credibility (trusted by colleagues for practical expertise, not AI advocacy) with deep contextual knowledge of specific workflows, tools, and professional norms. Neither of these can be replicated by a central change team, regardless of its size or quality.",
      wrongFeedback:
        "The champion network's advantage is twofold: peer credibility (a trusted peer's experience is more persuasive than any central communications) and contextual relevance (champions understand the specific workflow, data, and professional context that makes AI tool guidance actually applicable). Neither advantage is available to a central team.",
    },
    {
      q: "An enthusiastic AI adopter is nominated for the champion role. They are technically excellent but are perceived by peers as 'the person who loves technology.' Should they be selected?",
      options: [
        "Yes — their technical excellence is the most important champion quality",
        "Yes — enthusiasm is contagious and will spread to colleagues",
        "No — peer credibility for practical judgement is more important than AI enthusiasm for the champion role",
        "No — enthusiastic employees are too biassed to be effective champions",
      ],
      correct: 2,
      correctFeedback:
        "Correct. Peer credibility — being respected for practical domain judgement — is the priority selection criterion. An employee known for AI enthusiasm will be perceived as promoting AI. An employee known for practical effectiveness who has adopted AI will be perceived as testifying to AI. The latter is more persuasive for sceptical colleagues.",
      wrongFeedback:
        "Technical excellence and enthusiasm are useful but secondary to peer credibility. The champion's job is to make AI adoption credible to sceptical colleagues — which requires the peer's trust. An employee known primarily for AI enthusiasm is perceived as an advocate, not a witness. Peer credibility, not AI enthusiasm, is the primary selection criterion.",
    },
    {
      kind: "categorize",
      q: "Categorise these activities as either 'Champion Core Responsibilities' or 'Champion Non-Responsibilities':",
      categories: ["Champion Core Responsibilities", "Champion Non-Responsibilities"],
      items: [
        { text: "Providing informal AI help to team colleagues", category: 0 },
        { text: "Observing AI adoption barriers and reporting to the programme team", category: 0 },
        { text: "Sharing one AI use case in team meetings monthly", category: 0 },
        { text: "Delivering formal AI training workshops for new employees", category: 1 },
        { text: "Managing AI adoption dashboards and metrics", category: 1 },
        { text: "Communicating official AI programme updates on behalf of leadership", category: 1 },
      ],
      correctFeedback:
        "Correct. Core champion responsibilities are peer-facing and support-oriented: informal help, observation, and peer sharing. Non-responsibilities are programme management tasks that belong to L&D, programme teams, and leadership. When non-responsibilities migrate into the champion role, champions burn out.",
      wrongFeedback:
        "Champions are peer supporters, not programme administrators. Their core activities are informal support, adoption observation, and peer sharing — all within 20–30% time. Training delivery, metrics management, and official communications belong to L&D, programme teams, and leadership respectively. Scope creep into these areas is the primary cause of champion burnout.",
    },
    {
      q: "A champion network's monthly meeting has declining attendance (from 92% to 61% over 4 months). What is the most likely cause?",
      options: [
        "Champions are too busy to attend meetings",
        "The AI programme is no longer relevant to the champions' work",
        "The meeting format became programme-update-first, reducing the intelligence value champions receive from attending",
        "The meetings are too long and need to be shortened",
      ],
      correct: 2,
      correctFeedback:
        "Correct. Champions attend meetings that help them do their champion role better. When meetings shift from intelligence-first (what are you hearing?) to programme-update-first (here is what we need you to communicate), champions receive information they can get by email — and attendance declines. The intelligence-first format is the engagement mechanism.",
      wrongFeedback:
        "Attendance decline in champion meetings almost always reflects a format shift: from intelligence-first (champions contribute and receive peer learning) to programme-update-first (champions receive information). Champions are operational professionals who attend meetings for operational value. A meeting that only distributes communications has no operational value that cannot be achieved through email.",
    },
    {
      kind: "order",
      q: "Order these steps to launch an AI champion network in a new function:",
      items: [
        "Apply the four readiness conditions to confirm the function is ready for champion deployment",
        "Obtain direct manager commitment to time allocation before approaching candidates",
        "Select champions using the four criteria in priority order (credibility first)",
        "Complete champion training 4–6 weeks before the broader employee programme begins",
        "Co-design function-specific champion toolkit with the first cohort",
      ],
      prompt: "Drag to arrange in the correct sequence",
      correctFeedback:
        "Correct. Readiness first (no deployment into unready functions), then manager commitment (before candidates are recruited), then candidate selection (credibility-first), then training ahead of schedule (4–6 week head start), then co-design the toolkit (with the trained cohort). Each step enables the next.",
      wrongFeedback:
        "The sequence ensures prerequisites are in place before commitments are made: readiness conditions before deployment, manager commitment before candidate recruitment, candidate selection before training, training before the broader programme, co-designed toolkit before peer support begins. Reversing any step creates a dependency failure.",
    },
    {
      q: "What is the primary risk of expanding a champion network to new functions before assessing their readiness?",
      options: [
        "The new function's employees may not respond well to a champion programme",
        "The programme team will not have enough capacity to support additional champions",
        "Deploying champions into unready functions produces failed experiments that damage the champion programme's credibility for future deployments",
        "Additional champions increase the cost of champion training beyond the available budget",
      ],
      correct: 2,
      correctFeedback:
        "Correct. A champion deployed into a function without active AI deployment, without management support, or without a function AI contact will fail to perform the champion role — and the failure will be visible. Failed champion experiments reduce the programme's credibility and make future champion recruitment harder in those functions.",
      wrongFeedback:
        "Premature deployment into unready functions produces visible champion failures that damage the credibility of the champion model. Functions that see champions deployed without the conditions for success will conclude the champion model does not work — rather than that the conditions for success were not in place. Readiness assessment prevents this.",
    },
  ],
});
