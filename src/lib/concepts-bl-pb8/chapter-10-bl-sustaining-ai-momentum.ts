import { buildChapter, buildSection, s, x, sectionWithDiagram } from "../concepts-bl-helpers";
import { BL_CALLOUT } from "../concepts-bl-helpers";

export const chapter10BlSustainingAiMomentum = buildChapter({
  slug: "bl-sustaining-ai-momentum",
  number: 10,
  shortTitle: "Sustaining AI Momentum",
  title: "Sustaining AI Momentum: The Long Game of AI Transformation Leadership",
  readingMinutes: 24,
  summary:
    "AI transformation momentum is harder to sustain than to start. The excitement of early pilots and quick wins gives way to the grinding work of operational integration, the fatigue of continuous change, and the distraction of competing strategic priorities. Business leaders who sustain AI momentum do so through institutional design — governance structures, leadership practices, and organisational habits that make AI advancement the default rather than a continuous act of will.",
  keyTakeaway:
    "Sustained AI momentum is not a leadership personality trait — it is an institutional design achievement. Organisations that sustain AI momentum have built the governance, the culture, and the capability development systems that advance AI transformation without requiring heroic individual leadership energy at every stage. The leader's job is to build those systems, not to be the system.",
  pmCallout: BL_CALLOUT,
  sections: [
    sectionWithDiagram({
      number: "10.1",
      title: "The momentum trap: why AI transformations stall after year one",
      subtitle: "Understanding the predictable momentum loss that follows early AI programme success",
      take: "Year one AI momentum is driven by novelty, visible quick wins, and concentrated leadership attention. Year two momentum must be driven by institutional structures that do not depend on novelty, by a broader population of success stories that justify continued investment, and by governance that keeps AI transformation on the leadership agenda despite competing priorities. Organisations that do not transition from novelty-driven to institution-driven momentum will stall.",
      why: "Understanding why momentum stalls — and which structural factors determine whether it is sustained — allows leaders to invest in the right momentum-building infrastructure before the stall occurs. Post-stall recovery is significantly more expensive than pre-stall prevention.",
      paragraphs: [
        [
          s("Five factors drive year one AI momentum that are absent or depleted by year two. "),
          x(
            "Novelty premium: the excitement of new technology generates engagement that is not sustainable beyond 12 months. Concentrated leadership attention: year one AI programmes typically have C-suite direct involvement that shifts to delegated management by year two. Quick win concentration: the easiest and most visible use cases are deployed first; year two use cases are more complex and take longer to show results. Programme team specialisation: programme teams lose members to operational roles and external opportunities. Change management intensity: the most significant change management investment is front-loaded and not sustained.",
            "Each of these five factors creates a predictable year two momentum dip. Organisations that have not built institutional structures to replace them with sustainable drivers will experience the dip as an unmanaged stall.",
          ),
          s(" Before entering year two of an AI programme, audit which of the five year-one momentum factors are depleting and what institutional structures will replace them. Waiting until momentum stalls to build the replacements is reactive and expensive."),
        ],
        [
          s("The stall manifests in three observable patterns: declining adoption rates, reduced innovation investment, and leadership attention drift. "),
          x(
            "Declining adoption rates: AI tool utilisation that peaked in months 6–9 and has been slowly declining since month 12 — not dramatically, but consistently. Reduced innovation investment: the organisation is running AI tools it deployed in year one but has not launched new AI use cases in the prior six months. Leadership attention drift: AI is no longer a standing agenda item in leadership team meetings; it surfaces in response to news or vendor briefings rather than through programme governance.",
            "Each pattern individually is a warning sign. All three together indicate a stalled transformation that will be difficult to restart without a significant re-investment of leadership attention and programme energy.",
          ),
          s(" Monitor for all three stall patterns monthly from month 12 onward. Any single pattern appearing for two consecutive months should trigger a momentum audit."),
        ],
        [
          s("Sustained momentum requires four institutional structures that replace the five year-one drivers. "),
          x(
            "Structure 1: AI governance forum that maintains leadership attention as a standing commitment. Structure 2: AI innovation pipeline that continuously generates new use case candidates rather than relying on programme team initiative. Structure 3: AI performance measurement that makes the business case for continued investment visible continuously, not just at milestone reviews. Structure 4: AI culture infrastructure that sustains the learning culture independently of individual champion energy.",
            "These four structures are not additional programme investments — they are the governance, capability, and cultural infrastructure that mature AI programmes build to replace programme management. Their presence is what distinguishes organisations that sustain AI transformation from organisations that plateau after year two.",
          ),
          s(" Design and launch all four structures before year two begins. A programme that enters year two without these structures is relying on year one momentum to carry it — which it will not."),
        ],
      ],
      examples: [
        {
          title: "Financial services — stall identified and pre-empted",
          body: "A bank's programme manager identified year two momentum risk at month 10 — before any stall had occurred — by auditing the five year-one momentum factors. Novelty was depleting, C-suite direct involvement was shifting to delegated management, and the most visible quick win use cases had all been deployed. The programme launched all four institutional structures before month 12: a standing AI governance forum (quarterly), an AI innovation pipeline (cross-functional use case assessment panel), an AI performance dashboard (monthly), and an AI community of practice (bi-monthly). Year two adoption rates improved rather than declining — the institutional structures had replaced novelty as the momentum driver before novelty ran out.",
        },
        {
          title: "Manufacturer — three stall patterns trigger momentum audit",
          body: "A manufacturer's programme manager observed two consecutive months in which all three stall patterns were present: adoption declining from 74% to 68%, no new use cases launched in 7 months, and AI not appearing on the agenda of three consecutive leadership team meetings. A momentum audit revealed the root cause: the programme team lead had transitioned to an operations role and had not been replaced, leaving no named advocate for AI in leadership discussions. A new AI programme lead was appointed, a leadership team AI agenda commitment was reinstated, and an AI innovation pipeline was launched. Adoption returned to 78% within three months.",
        },
        {
          title: "Healthcare — institutional structures outlast programme leadership changes",
          body: "A hospital's AI programme achieved sustained momentum through two AI programme manager transitions — which would typically have caused significant momentum loss. The sustainability was attributable to the institutional structures that had been built before the first transition: the standing AI governance forum had its own momentum and membership, the AI innovation pipeline had department-level ownership, and the AI community of practice had self-organising leadership from clinical champions. The structures had become self-sustaining, and the leadership transition created only minor disruption rather than the programme restarts that had characterised previous change leadership transitions.",
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
      title: "Building institutional AI memory",
      subtitle: "How to capture and leverage what the organisation has learned from AI transformation",
      take: "Institutional AI memory is the organisation's accumulated knowledge about what works, what does not work, and why — preserved in systems and practices that outlast the individuals who generated the knowledge. Without institutional memory, every AI initiative starts from zero, repeating the mistakes of previous initiatives and ignoring the lessons that could prevent them.",
      why: "Organisations with strong AI institutional memory learn faster, avoid repeated mistakes, and build on accumulated knowledge across each transformation phase. Organisations without it manage a continuous series of first deployments, each paying the same learning costs the previous deployment paid.",
      paragraphs: [
        [
          s("AI institutional memory has four components: programme learning logs, decision archaeology, performance archives, and practice communities. "),
          x(
            "Programme learning logs: documented lessons from each AI deployment, including what worked, what did not, and the specific design changes the lessons imply for future deployments. Decision archaeology: documented records of major programme decisions, including the evidence, reasoning, and dissent that led to each decision — so future leaders can understand the context of inherited decisions. Performance archives: historical AI performance data that allows future initiatives to benchmark against the organisation's own experience. Practice communities: communities of practitioners who carry institutional knowledge in their heads and social networks.",
            "The loss of any single component creates specific institutional memory risks: without learning logs, mistakes recur; without decision archaeology, decisions are relitigated; without performance archives, baselines are unavailable; without communities, knowledge retires.",
          ),
          s(" Review your current AI institutional memory infrastructure against these four components. The most common gap is decision archaeology — the reasoning behind major decisions is almost never documented."),
        ],
        [
          s("Knowledge retention risk is highest during leadership and team transitions. "),
          x(
            "When a programme lead transitions, they carry years of context about vendor relationships, failed approaches that were tried and abandoned, and nuanced understanding of why specific decisions were made the way they were. Without a formal knowledge transfer process, this context is lost. The incoming lead spends months rediscovering what the outgoing lead knew — at the cost of programme momentum.",
            "A formal knowledge transfer protocol for AI programme leadership transitions should include: a structured briefing on the four memory components, access to archived materials, introductions to key stakeholders and vendors, and a 90-day overlap period during which the incoming lead can ask the outgoing lead context questions.",
          ),
          s(" Implement a formal 90-day knowledge transfer protocol for every AI programme leadership transition. The protocol preserves institutional memory that would otherwise retire with the outgoing lead."),
        ],
        [
          s("Practice communities are the most resilient form of institutional AI memory — because the knowledge lives in relationships, not documents. "),
          x(
            "Documents can be lost, ignored, or outdated. Practice communities carry knowledge in the relationships between practitioners: the informal network of who knows what, who to call for specific AI challenges, and which prior approaches can be repurposed for current problems. Communities are more resistant to knowledge loss because they are distributed — no single departure eliminates the knowledge.",
            "Practice communities require active cultivation: facilitation, recognition, and connection to the formal programme. An AI community that is left to self-organise without institutional support will lose cohesion within 12 months as individual practitioners' priorities shift.",
          ),
          s(" Assign a community steward to your AI practice community — a named individual whose role includes active facilitation, new member recruitment, and connection to the formal programme. Passive communities decay; actively stearded communities compound."),
        ],
      ],
      examples: [
        {
          title: "Financial services — decision archaeology prevents relitigated decision",
          body: "A bank's new AI programme lead inherited a decision that had been made 18 months earlier: to use a horizontal AI platform rather than function-specific point solutions. Without decision archaeology, the lead considered relitigating this decision after receiving a compelling point solution vendor pitch. The documented decision record showed that the horizontal platform decision had been made after a detailed analysis of 12 point solutions, with the key finding that the organisation's data governance requirements made horizontal consistency essential. The decision archaeology prevented a six-month relitigating exercise and allowed the new lead to build on the existing architecture rationale.",
        },
        {
          title: "Healthcare — community steward prevents community decay",
          body: "A hospital's AI clinical practice community had been self-organising for 12 months with strong initial energy. At month 12, the informal leader who had been driving the community was promoted to a role that reduced her clinical practice involvement. Community meeting attendance dropped 60% in two months. An appointed community steward — a senior nurse with AI programme relationship and facilitation skills — rebuilt the meeting cadence, recruited new active members from recent AI adopters, and connected the community to the next AI deployment as an implementation advisory group. The community recovered to previous activity levels within three months of the steward appointment.",
        },
        {
          title: "Manufacturer — learning log prevents repeated deployment failure",
          body: "A manufacturer's second AI deployment — in a different plant — used the learning log from the first deployment as its design input. The log documented that the first deployment had failed to achieve adoption in the night shift due to a workflow friction the change management team had not identified until month four. The second deployment built a specific night shift workflow adaptation into its pre-deployment design. Second deployment night shift adoption was 71% — compared to 18% at the equivalent point in the first deployment. The learning log had converted a costly first deployment mistake into a second deployment design advantage.",
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
      title: "Governance structures that sustain momentum",
      subtitle: "The governance design decisions that make AI advancement the institutional default",
      take: "Governance structures sustain AI momentum by making AI advancement a standing institutional commitment rather than a discretionary leadership investment. Without governance structures, AI momentum depends on individual leaders' sustained attention — which is always in competition with operational demands, strategic crises, and personal energy depletion. With governance structures, AI advancement proceeds even when individual leaders are occupied elsewhere.",
      why: "The difference between organisations that sustain AI transformation and those that plateau is almost always governance design, not leadership capability. The right governance structures create institutional momentum that does not require heroic individual leadership energy to sustain.",
      paragraphs: [
        [
          s("An AI governance structure has four standing elements: an executive AI committee, a cross-functional AI council, an AI ethics and risk function, and an AI innovation pipeline. "),
          x(
            "Executive AI committee: the C-suite forum that maintains strategic AI direction, reviews investment decisions, and ensures AI remains on the leadership agenda. Cross-functional AI council: the operational forum that coordinates AI deployment across functions, manages cross-functional dependencies, and shares learning across the organisation. AI ethics and risk function: the governance body responsible for ethical review, risk assessment, and escalation pathway management. AI innovation pipeline: the process by which new AI use case ideas are identified, evaluated, and approved for development.",
            "All four elements are needed for complete governance coverage. Missing the ethics and risk function creates governance gaps that surface as incidents. Missing the innovation pipeline creates stagnation — the organisation deploys what was planned and has no process for identifying what to deploy next.",
          ),
          s(" Assess your current AI governance against the four elements. Any missing element represents a specific governance gap that will produce a specific type of momentum loss."),
        ],
        [
          s("The AI innovation pipeline is the governance element most directly responsible for sustaining momentum. "),
          x(
            "An innovation pipeline is a structured process for continuously identifying new AI use case candidates: a regular call for ideas (quarterly from all functions), an evaluation process against value, feasibility, and risk criteria, and a stage gate that advances the strongest candidates to pilot development. Without a pipeline, new AI initiatives depend on individual champions who surface opportunities sporadically and through informal networks.",
            "A pipeline with a quarterly cadence produces 4 innovation reviews per year, each evaluating 6–12 candidate use cases. Over two years, the pipeline evaluates 50–100 candidates and advances the highest-value 10–15 to pilots. This is the cadence of a genuinely innovating organisation — not a programme that deploys what was planned and stops.",
          ),
          s(" Launch the AI innovation pipeline before year two begins. A pipeline without a champion at executive level is a suggestion box that nobody acts on."),
        ],
        [
          s("Governance meeting cadence must balance oversight with operational freedom. "),
          x(
            "Too frequent governance — monthly executive AI committee meetings on tactical details — creates governance overhead that slows deployment and frustrates programme teams. Too infrequent governance — annual AI investment reviews — creates a gap in which programme direction can drift, risks can compound, and investment decisions can be made without adequate oversight. A tiered cadence is optimal: executive committee quarterly for strategic oversight, operational council monthly for coordination, ethics and risk function as-needed with a monthly standing check-in.",
            "The governance cadence should be documented and committed to before the governance structures are launched. Governance that meets 'as needed' is governance that meets less than optimal frequency because 'as needed' is always competing with operational urgency.",
          ),
          s(" Document governance meeting cadences before launching governance structures and commit to them in writing. Governance without committed cadences is aspirational, not institutional."),
        ],
      ],
      examples: [
        {
          title: "Financial services — innovation pipeline discovers five new use cases per year",
          body: "A bank's AI innovation pipeline ran quarterly evaluations of function-submitted AI use case ideas. In year two, the pipeline reviewed 34 candidates across four quarters, advanced 6 to pilot development, and produced 3 live deployments. The pipeline's value was not only the 3 deployments — it was the disciplined evaluation of 31 ideas that were not advanced, preventing the scattershot ad-hoc pilot launches that had characterised year one. The pipeline converted AI innovation from opportunistic to systematic, producing more deployments with more evidence and fewer failed pilots than the unstructured year one approach.",
        },
        {
          title: "Healthcare — ethics function prevents compliance incident",
          body: "A hospital's AI ethics and risk function — a standing body that reviewed all new AI use cases before pilot approval — identified that a proposed AI patient satisfaction prediction tool had been trained on data that included protected health information in ways that the HIPAA authorisation did not clearly cover. The function's review prevented a compliance exposure that would have emerged 12 months into the pilot if the tool had been deployed without review. The function had a standing monthly check-in that caught the issue as part of routine review — not as a reactive response to an incident.",
        },
        {
          title: "Retailer — tiered governance cadence prevents both extremes",
          body: "A retailer designed its AI governance cadence before launching governance structures: executive committee quarterly (strategic investment and direction), operational council monthly (cross-functional coordination), ethics function monthly standing check-in plus as-needed for specific reviews. In year two, the tiered cadence operated without modification. Post-year-two assessment showed that the governance had required 22 total hours of executive time (4 quarterly meetings × 45 minutes + 2 non-routine calls) and had produced 8 major investment decisions, 3 deployment accelerations, and 1 ethics review that prevented a compliance risk. The 22 hours of executive time had generated demonstrably better programme outcomes than the previous year's ad hoc engagement.",
        },
      ],
    }),
    buildSection({
      number: "10.4",
      title: "Connecting AI outcomes to business strategy renewal",
      subtitle: "How to embed AI capability in the annual strategy cycle rather than managing it as a parallel programme",
      take: "AI transformation that runs as a parallel programme to business strategy will always be vulnerable to deprioritisation when strategy cycles focus on immediate business challenges. AI transformation that is embedded in the business strategy — where AI capability is part of the strategic plan, the resource allocation, and the performance measurement — is structurally protected from the competing priority dynamics that stall parallel programmes.",
      why: "The transition from AI as programme to AI as strategy is the most important governance transition in sustaining AI momentum. It requires deliberately embedding AI capability in the annual planning cycle, performance management framework, and board governance agenda — not as an AI programme item but as a strategic capability item.",
      paragraphs: [
        [
          s("AI capability should appear in the annual strategic plan as a named strategic capability — not as an IT programme budget line. "),
          x(
            "The strategic plan language difference: 'IT Budget: AI Programme: $2.4M' is a cost centre. 'Strategic Capability: AI-Augmented Customer Intelligence — enabling 15% improvement in customer retention through AI-driven churn prediction and personalised intervention' is a strategic investment with a named business outcome. The strategic capability framing connects AI investment to business strategy in a way that the programme budget line cannot.",
            "A strategic capability in the annual plan requires a named owner, a measurable outcome target, a resource allocation, and a review mechanism. These four elements are the difference between a strategic commitment and a budget line.",
          ),
          s(" Reframe AI programme investments as strategic capability investments in the next annual planning cycle. The reframing is not cosmetic — it changes the governance structure, the accountability, and the investment protection that the AI work receives."),
        ],
        [
          s("The board AI agenda should evolve from programme monitoring to strategic capability governance. "),
          x(
            "A board that receives AI programme updates — deployment status, adoption rates, programme spend — is monitoring a programme. A board that discusses AI capability as a strategic asset — competitive positioning, investment thesis, talent implications, risk exposure — is governing a strategic dimension of the business. The transition from monitoring to governance typically occurs in year two or three of an AI transformation.",
            "The preparation for this transition: shifting the AI board presentation from programme dashboards to strategic capability assessments, including competitive benchmarking, risk landscape, and investment allocation decisions that require board-level input.",
          ),
          s(" Prepare a strategic capability assessment for your next board AI presentation — not a programme dashboard. The assessment frames AI as a board-level strategic responsibility, not an executive-level programme to be monitored."),
        ],
        [
          s("AI capability development should be integrated into functional strategy cycles, not only into the enterprise AI programme. "),
          x(
            "Each functional leader's annual plan should include an AI capability development section: what AI capabilities will the function develop in the year, what business outcomes does the development target, and how will development be measured? This integration makes functional leaders co-owners of AI capability development — not recipients of AI tools deployed by the enterprise programme.",
            "Functional AI capability sections in annual plans also create a portfolio view: the enterprise can see the full AI capability investment across all functions, identify gaps and duplications, and coordinate cross-functional dependencies in the planning process rather than during deployment.",
          ),
          s(" Require AI capability development sections in every functional leader's annual plan. This requirement creates functional ownership of AI capability rather than enterprise programme dependency."),
        ],
      ],
      examples: [
        {
          title: "Financial services — AI in strategic plan changes investment protection",
          body: "A bank transitioned its AI programme from an IT budget line to a strategic capability in its annual plan in year two. The transition produced three immediate outcomes: the AI capability investment was reviewed alongside other strategic investments rather than IT budgets, the CFO became a named co-owner (alongside the CTO) of the investment outcome, and the AI investment withstood a cost reduction cycle that cut 12% of IT programme spend — because the AI investment was protected as strategic capital, not discretionary programme spend.",
        },
        {
          title: "Healthcare — board strategic capability assessment changes AI governance quality",
          body: "A hospital system's board had been receiving quarterly AI programme dashboards for two years. The Chief Strategy Officer prepared a strategic capability assessment for a board session: competitive positioning of the hospital's AI capability versus peer systems, three-year investment thesis and expected capability trajectory, risk exposure from AI capability gaps, and three decisions requiring board input. The board discussion lasted 90 minutes — the longest AI governance conversation in the programme's history. Three significant investment decisions and one risk mitigation action resulted. The programme dashboard had never generated a board decision in two years of reporting.",
        },
        {
          title: "Manufacturer — functional AI sections reveal planning gaps",
          body: "A manufacturer required AI capability development sections in all eight functional leaders' annual plans for the first time in year three. The portfolio view revealed two significant gaps: supply chain and quality had developed strong AI capabilities independently, but there was no integration between them — supply chain AI demand signals were not reaching quality AI defect prediction models. A cross-functional integration project was identified in the planning cycle and funded. Without the portfolio view created by functional AI sections, the gap would not have been visible until two separately developed systems had created operational integration problems.",
        },
      ],
    }),
    buildSection({
      number: "10.5",
      title: "Building the next generation of AI leaders internally",
      subtitle: "How to create the internal AI leadership pipeline that sustains transformation beyond the founding team",
      take: "AI transformation that depends on the founding programme team and the early executive sponsors is fragile. Key individual departures, promotions, or burnout can stall a programme that was making real progress. Building the next generation of AI leaders — people who can sustain and extend the transformation when the founding team moves on — is the governance investment that makes AI transformation durable.",
      why: "The organisations that sustain AI transformation longest are those that have built an internal AI leadership pipeline that continuously replenishes the people who carry the programme forward. The investment in developing the next generation is the highest-long-term return investment in AI sustainability.",
      paragraphs: [
        [
          s("An AI leadership pipeline has three tiers: operational AI leaders (functional leads who manage AI capability in their functions), programme AI leaders (people with programme management and change expertise applied to AI), and strategic AI leaders (executives who can integrate AI capability into business strategy). "),
          x(
            "Most organisations develop one tier — usually operational AI leaders — without deliberately developing the other two. Programme AI leaders are in short supply externally and must often be developed internally. Strategic AI leaders — executives who understand AI well enough to make strategy-level capability decisions — are the rarest and most important category.",
            "A three-tier development programme is not three separate programmes — it is a progression: operational leaders who demonstrate programme leadership capability are promoted into programme leader roles; programme leaders who demonstrate strategic thinking are prepared for strategic leader roles.",
          ),
          s(" Map your current AI leadership population against the three tiers. Any empty tier creates a specific organisational vulnerability that will surface in programme continuity, investment decisions, or strategic positioning."),
        ],
        [
          s("Internal AI leader development is most effective when it is paired with real programme responsibility — not classroom training. "),
          x(
            "An aspiring AI programme leader who is given responsibility for a real AI deployment — with coaching, mentoring, and a safety net — develops programme leadership capability that training programmes cannot replicate. The responsibility accelerates development because the feedback is immediate, consequential, and personally meaningful.",
            "Giving real programme responsibility to developing AI leaders requires a principal who has authority to intervene if the development leader encounters a problem that exceeds their current capability. The principal's role is to create the conditions for stretch development without creating conditions for programme failure.",
          ),
          s(" Identify your top two AI leadership development candidates and design a stretch assignment — real programme responsibility with a coaching structure — before the end of the current year. Development without stretch is education; development with stretch is capability building."),
        ],
        [
          s("AI leadership development should be formal and visible — not informal and hidden. "),
          x(
            "Formal development includes: named development candidates, structured development plans, regular review conversations, and visible programme responsibility. Informal development — 'she is doing the work anyway, she might as well get some experience' — does not signal the organisation's investment in the individual, does not produce the same development outcomes, and does not create the retention commitment that formal development creates.",
            "A visible AI leadership development programme also signals to the rest of the organisation that AI leadership is a valued and investable career path — which attracts further talent into the AI development pipeline.",
          ),
          s(" Make AI leadership development visible: publish development candidate names, programme responsibilities, and career trajectory expectations. Visibility is both a development tool and a talent attraction signal."),
        ],
      ],
      examples: [
        {
          title: "Financial services — three-tier pipeline prevents leadership vacuum",
          body: "A bank's AI programme lead departed to an external role after 30 months. Because the bank had built a three-tier AI leadership pipeline, the departure created a planned transition rather than a leadership vacuum: an operational AI leader was promoted to programme AI leader (filling the departure gap), a strategic AI leader development candidate was given expanded executive visibility as part of their development plan, and the transition knowledge transfer protocol was executed over a 90-day overlap period. Programme momentum was maintained without interruption. A peer bank without a pipeline experienced an 8-month programme stall when its programme lead departed.",
        },
        {
          title: "Healthcare — stretch assignment accelerates development",
          body: "A hospital's Chief Nursing Officer identified a charge nurse as an AI leadership development candidate and gave her full programme responsibility for the AI documentation deployment in two clinical departments — with the CNO as coaching support. The charge nurse managed the deployment from change management design through go-live and 90-day adoption review. Her development in those six months exceeded what the programme team estimated would take 18 months of classroom and observation training. She was promoted to AI Programme Lead at the end of the deployment. The stretch assignment had accelerated her development by an estimated 12 months.",
        },
        {
          title: "Manufacturer — visible development programme attracts talent",
          body: "A manufacturer published a formal 'AI Leadership Pathway' programme: three named development tracks (operational, programme, strategic), current candidates named and their development activities described, and a commitment to promote candidates to named programme responsibilities within 18 months. After publication, the number of internal applications for AI programme roles increased 4×. The visibility of the programme had converted AI leadership from a specialised function that happened to people to a career path that people actively chose to pursue.",
        },
      ],
    }),
    buildSection({
      number: "10.6",
      title: "Managing AI fatigue",
      subtitle: "How to sustain energy and engagement in a transformation that never fully ends",
      take: "AI fatigue — the depletion of energy and motivation that occurs when transformation demands are sustained too long without adequate recovery, recognition, and renewal — is a real and manageable risk to sustained AI momentum. It is most acute in the people most invested in the transformation: the programme team, the change champions, and the functional leaders who have carried the most change management burden.",
      why: "Leaders who manage AI fatigue proactively — recognising it early, intervening before burnout, and building renewal into the transformation rhythm — retain the people whose energy is most critical to sustained momentum. Leaders who ignore fatigue until it produces departure or disengagement pay the retention and knowledge cost.",
      paragraphs: [
        [
          s("AI fatigue has four observable signals: declining initiative (less voluntary AI experimentation), reduced quality engagement (going through the motions of programme activities without energy), informal resistance (the kind of quiet non-engagement that never becomes active resistance), and talent departure (the departure of programme team members to external AI roles). "),
          x(
            "Declining initiative and reduced quality engagement appear first and are the most manageable with early intervention. Informal resistance and talent departure appear later and are more costly. A quarterly team energy check-in — an honest conversation about what is energising and what is depleting in the current programme state — provides early signal before the late signals appear.",
            "Team energy check-ins are not employee satisfaction surveys. They are honest structured conversations: what is working well, what is difficult, what do you need to sustain your energy over the next quarter? The output is specific actions, not aggregate satisfaction data.",
          ),
          s(" Schedule quarterly team energy check-ins for programme team members and key change champions. These conversations are the highest-value retention investment in your programme team."),
        ],
        [
          s("Renewal interventions that prevent fatigue from becoming burnout include: recognition, rotation, and renewal activities. "),
          x(
            "Recognition: visible acknowledgement of the programme team's and change champions' contributions — not generic appreciation but specific recognition of specific achievements in visible contexts. Rotation: rotating programme responsibilities to provide variety and prevent the 'same problem forever' fatigue that sets in when people manage the same challenge for too long. Renewal activities: protected time for learning, exploration, and skill development that is not directly tied to programme delivery — preventing the 'always delivering, never developing' fatigue pattern.",
            "The most effective renewal investment is often the simplest: allowing a programme team member who has been solving the same adoption problem for eight months to spend two months on a different aspect of the programme. Rotation provides novelty without the knowledge loss of departure.",
          ),
          s(" For programme team members approaching 18 months in the same programme role, design a rotation option before they ask for it. The proactive offer signals investment in their growth and prevents the departure that a passive approach produces."),
        ],
        [
          s("Pacing AI transformation to allow recovery between major change cycles is a structural fatigue management strategy. "),
          x(
            "Organisations that launch new AI deployments continuously — without recovery periods between major change cycles — create a change-on-change environment that consistently produces higher fatigue levels than organisations that pace their deployments with deliberate recovery periods. A 12-month stability commitment — no major new AI deployments for 12 months after a significant transformation cycle — allows the workforce to consolidate the changes already made before the next wave.",
            "The stability commitment requires resisting competitive pressure to launch new AI initiatives before the previous ones are fully embedded. The temptation to keep moving is powerful; the cost of sustained high-pace change is workforce fatigue that impairs the quality of both current operations and new change adoption.",
          ),
          s(" Build deliberate recovery periods into your transformation roadmap — 6-month windows after major deployment waves during which no new deployments are launched. Recovery periods improve both next-cycle quality and team retention."),
        ],
      ],
      examples: [
        {
          title: "Financial services — team energy check-in prevents departure",
          body: "A bank's programme manager conducted a team energy check-in with her five programme team members at month 16. Three of five reported significant fatigue; two reported interest in exploring external roles. The check-in produced three specific actions: recognition sessions with the CFO and CTO for the two most fatigued members, rotation of programme responsibilities to provide variety, and two 'innovation days' per month where team members could explore new AI use cases not currently on the programme roadmap. At month 18 check-in, all five members reported improved energy. Neither of the interested-in-external-roles members departed.",
        },
        {
          title: "Healthcare — stability commitment prevents change fatigue",
          body: "A hospital system had launched six AI deployments across three clinical functions in 24 months — a pace that had produced measurable adoption quality decline in the final two deployments. A deliberate 12-month stability commitment was instituted: no new AI deployments in clinical functions for 12 months, focused entirely on deepening and sustaining the six existing deployments. Clinical staff satisfaction with AI change management (measured in a quarterly survey) improved 21 points over the stability period. When new deployments launched in month 13, adoption rate in the first month was the highest the programme had ever recorded — the recovery period had rebuilt change capacity.",
        },
        {
          title: "Retailer — proactive rotation prevents costly departure",
          body: "A retailer's AI supply chain programme lead had been in the same role for 20 months. A talent retention conversation with her manager revealed that she was being approached by external AI roles and was seriously considering departures. A proactive rotation offer — six months as the AI innovation pipeline lead, using her supply chain domain knowledge to assess cross-functional AI use cases — provided the new challenge she was seeking without losing her institutional knowledge. She remained for 24 more months and became the retailer's first AI Strategy Director when the role was created.",
        },
      ],
    }),
    buildSection({
      number: "10.7",
      title: "Evolving the AI vision as technology changes",
      subtitle: "How to keep the AI transformation vision current with rapidly evolving AI technology",
      take: "An AI transformation vision written in year one is partially obsolete by year two and significantly obsolete by year three — because AI technology evolves faster than multi-year strategic visions can track. Leaders who update their AI vision regularly — not just their AI deployment roadmap — maintain the strategic coherence that sustains transformation investment and attract the talent and partnerships that emerging AI capability requires.",
      why: "An AI transformation vision that is not updated becomes a constraint rather than a guide: it anchors investment in last year's technology thinking and provides no framework for evaluating the AI capabilities that have emerged since the vision was written. Regular vision renewal is a strategic necessity, not a communications exercise.",
      paragraphs: [
        [
          s("AI vision renewal should occur annually and be anchored to three inputs: technology landscape changes, competitive position shifts, and internal capability evolution. "),
          x(
            "Technology landscape changes: what AI capabilities that did not exist or were not enterprise-ready last year are enterprise-ready now? How does this change what is possible for the organisation? Competitive position shifts: what AI capabilities have competitors developed that have changed the competitive landscape? What AI capabilities are now table stakes rather than differentiators? Internal capability evolution: how has the organisation's own AI capability changed in the past year — what can it now do that it could not before?",
            "The vision renewal is not a complete rewrite — it is a structured update that incorporates the year's changes while maintaining strategic continuity. A complete rewrite every year creates organisational confusion about direction; no update creates strategic anachronism.",
          ),
          s(" Schedule an annual AI vision renewal session — a full-day leadership team exercise anchored to the three inputs. The session should produce a one-page vision update and three strategic priority changes that reflect the year's changes."),
        ],
        [
          s("The AI vision must make technology choices for the organisation — not leave them to default or vendor preference. "),
          x(
            "Technology choices embedded in the vision: whether to build proprietary AI models or deploy commercial ones, whether to invest in AI infrastructure or use cloud AI services, whether to compete on AI speed or AI accuracy in specific domains. These choices determine the strategic path the organisation is on and the investments required. An organisation without explicit technology choices in its AI vision is making those choices implicitly — through vendor selection, programme team preferences, and budget increments.",
            "Explicit technology choices create strategic coherence: every AI investment decision can be evaluated against the choices in the vision. Implicit technology choices create strategic drift: each investment decision is made independently and the portfolio may be internally inconsistent.",
          ),
          s(" Include three explicit AI technology choices in your AI vision. The choices create the boundaries within which deployment decisions are made — preventing the strategic drift that unconstrained vendor and programme team decision-making produces."),
        ],
        [
          s("Communicating vision evolution to the workforce requires as much craft as communicating the original vision. "),
          x(
            "A vision update that is simply issued as a revised strategy document will not be understood or trusted by a workforce that has been working under the original vision. A vision update that is communicated with explicit acknowledgement of what has changed, why it has changed, and what it means specifically for different parts of the organisation will be understood and trusted — because it treats the workforce as intelligent adults who can navigate the honest explanation of strategic evolution.",
            "The most effective vision evolution communication acknowledges explicitly: 'When we wrote the original vision, we did not anticipate [specific change]. That change has happened and it affects our strategy in [specific ways]. Here is what we are doing differently as a result — and here is what remains the same.'",
          ),
          s(" When communicating a vision update, explicitly name both what has changed and what has remained constant. The constants provide stability; the changes provide relevance. Both are needed for the communication to build rather than undermine trust."),
        ],
      ],
      examples: [
        {
          title: "Financial services — annual vision renewal prevents strategic anachronism",
          body: "A bank's original AI vision (year one) prioritised AI for fraud detection and credit scoring — the two highest-ROI categories at the time. The year two vision renewal identified that AI-assisted client advisory services had matured significantly, creating a new strategic priority that the original vision had not anticipated. The vision update added client advisory AI as a third strategic priority, and budget was allocated accordingly. Without the renewal, the organisation would have continued to prioritise year one's highest-ROI categories while a new high-value category remained unaddressed.",
        },
        {
          title: "Technology company — explicit technology choice prevents strategic drift",
          body: "A technology company's AI vision renewal process produced three explicit technology choices: build proprietary AI models for core product features (competitive differentiation), deploy commercial AI for internal productivity (cost efficiency), and avoid AI infrastructure investment in favour of cloud AI services (capital efficiency). These choices eliminated six months of internal debate about a subsequent AI infrastructure vendor's proposal — the proposal was against the explicit technology choice and was declined quickly and confidently. Without the explicit choice, the debate would have consumed significant leadership time and produced an inconsistent infrastructure investment.",
        },
        {
          title: "Healthcare — vision evolution communication maintains trust",
          body: "A hospital system's year three AI vision update shifted its primary strategic emphasis from AI efficiency (reducing administrative burden) to AI quality (improving clinical outcomes). The shift reflected both technology maturation and the organisation's growing confidence in clinical AI. The CMO communicated the update with explicit acknowledgement: 'Our original vision was primarily about reducing the administrative burden on clinicians. We are evolving that to a more ambitious vision: AI that improves the care we deliver. This change reflects what we have learned about AI's clinical capability over three years — not a change in our values, but an expansion of our ambition.' Clinical staff satisfaction with the AI programme direction reached its highest recorded level in the survey following the communication.",
        },
      ],
    }),
    buildSection({
      number: "10.8",
      title: "BL decision lens: your momentum maintenance system",
      subtitle: "The five-element system that sustains AI transformation beyond individual leadership energy",
      take: "AI momentum is not sustained by individual leadership will — it is sustained by institutional systems that make AI advancement the organisational default. The five-element momentum maintenance system covers: governance architecture, institutional memory, AI leadership pipeline, fatigue management, and vision renewal cadence. A leader who has built all five elements has created an AI transformation that outlasts any individual leadership contribution.",
      why: "The ultimate test of AI transformation leadership is not the results achieved during the leader's tenure — it is whether the organisation continues to advance AI capability after the leader has moved on. The five-element system is the leader's succession plan for the transformation, not just for themselves.",
      paragraphs: [
        [
          s("Element 1 — Governance architecture: the four standing structures (executive AI committee, cross-functional AI council, ethics and risk function, and innovation pipeline) are all active with documented cadences, named owners, and meeting records. "),
          x(
            "The governance architecture is the most visible element of the momentum maintenance system — it is the structure that the board, the leadership team, and the workforce can see as evidence that AI transformation is institutionally embedded. A governance architecture that exists on paper but does not meet, does not make decisions, and does not drive investment is governance theatre, not governance infrastructure.",
            "Governance architecture should be assessed annually: are all four structures active and effective? Are the cadences being maintained? Are decisions being made and acted on? Are escalations being handled appropriately? The annual assessment prevents the governance decay that turns active structures into paper commitments.",
          ),
          s(" Conduct an annual governance architecture assessment. A governance structure that has not produced a programme decision in six months is not functioning."),
        ],
        [
          s("Elements 2–4 — Institutional memory, AI leadership pipeline, and fatigue management: the three programme health elements that determine whether the transformation can sustain itself through normal organisational dynamics. "),
          x(
            "Institutional memory: all four components (learning logs, decision archaeology, performance archives, and practice communities) are active and maintained. AI leadership pipeline: all three tiers (operational, programme, strategic) have named development candidates with active development plans. Fatigue management: quarterly team energy check-ins are scheduled, rotation options are available, and the transformation roadmap includes recovery periods between major change cycles.",
            "These three elements are invisible in the organisational structure chart — they are programme management practices rather than governance structures. They are also the elements most likely to be deprioritised when programme team capacity is under pressure. They should be protected as programme management infrastructure, not treated as discretionary.",
          ),
          s(" Include elements 2–4 in the annual governance architecture assessment. Programme health elements that are not assessed are not maintained."),
        ],
        [
          s("Element 5 — Vision renewal cadence: the annual AI vision renewal is scheduled, documented, and produces the three outputs (vision update, strategic priority changes, technology choice confirmation) that keep strategic coherence current. "),
          x(
            "The vision renewal cadence is the element that connects the momentum maintenance system to the organisation's strategic planning cycle. A vision renewal that is not connected to the annual planning cycle produces strategic documents that do not drive investment decisions. A vision renewal that is integrated with the planning cycle produces investment decisions that reflect current AI technology, competitive position, and internal capability.",
            "The complete five-element system is the leader's final AI transformation deliverable: not the results achieved in the programme, but the institutional infrastructure that will advance the transformation after the programme's founding energy has moved on. Building it is the highest-leverage activity in the final stage of AI transformation leadership.",
          ),
          s(" Schedule the first vision renewal session before year two begins. A vision written in year one without a renewal process is a document, not a living strategy."),
        ],
      ],
      examples: [
        {
          title: "Financial services — five-element system enables leadership succession",
          body: "A bank's founding AI programme lead transitioned to a Group AI Director role, moving from day-to-day programme management to enterprise strategy. The transition was successful because all five momentum elements were in place: the governance architecture ran without the founding lead's daily involvement; the institutional memory system captured her context; the leadership pipeline had a successor; the fatigue management system had retained the key programme team; and the vision renewal had been conducted twice, each time without the founding lead as the primary driver. The transformation continued to advance at the same rate after her transition as before.",
        },
        {
          title: "Healthcare — annual governance assessment identifies decay",
          body: "A hospital system's annual governance architecture assessment at the end of year two found that the AI innovation pipeline — one of the four standing structures — had not convened in five months. Investigation revealed that the pipeline's executive sponsor had changed roles and no replacement sponsor had been assigned. The pipeline had continued to exist on the governance register but had not operated. A new sponsor was assigned within two weeks, and the pipeline held its next quarterly evaluation within 30 days of the assessment. The annual assessment had identified governance decay before it had become programme drift.",
        },
        {
          title: "Technology company — vision renewal drives investment shift",
          body: "A technology company's year three vision renewal — connected to the annual planning cycle for the first time — identified that its year one technology choice (build proprietary models for core product features) needed reconsideration. Foundation model capability had advanced to the point where commercial models could match the quality of its proprietary models at 20% of the development cost. The vision renewal produced an explicit technology choice revision: shift from build to deploy-and-fine-tune for all but the most proprietary feature applications. The revised choice released $4.2M of previously allocated AI development investment into product innovation. The vision renewal had paid for the entire five-element system many times over in a single strategic decision.",
        },
      ],
    }),
  ],
  quiz: [
    {
      q: "What are the five year-one momentum factors that deplete by year two — and what must replace them?",
      options: [
        "Vendor enthusiasm, technology novelty, external consultants, pilot results, and communications campaigns — replaced by internal capability",
        "Novelty premium, concentrated C-suite attention, quick win concentration, programme team specialisation, and change management intensity — replaced by four institutional structures",
        "Budget availability, competitive pressure, board support, talent availability, and technology maturity — replaced by operational efficiency",
        "Executive mandate, staff training, process redesign, technology deployment, and performance measurement — replaced by continuous improvement",
      ],
      correct: 1,
      correctFeedback:
        "Correct. The five year-one factors are: novelty premium, concentrated C-suite attention, quick win concentration, programme team specialisation, and change management intensity. All five deplete by year two. The four institutional structures — governance forum, innovation pipeline, performance measurement, and culture infrastructure — replace them as sustainable momentum drivers.",
      wrongFeedback:
        "The five year-one momentum factors are specifically: novelty premium, concentrated leadership attention, quick win concentration, specialist programme team energy, and front-loaded change management intensity. All five naturally deplete. The four institutional structures — governance, innovation pipeline, measurement, and culture infrastructure — are the replacements that must be built before they deplete.",
    },
    {
      kind: "categorize",
      q: "Categorise these institutional memory components by type:",
      categories: ["Programme Learning Logs", "Decision Archaeology", "Performance Archives", "Practice Communities"],
      items: [
        { text: "Documented lessons from AI deployments with specific design changes for future initiatives", category: 0 },
        { text: "Records of major programme decisions including evidence, reasoning, and dissent", category: 1 },
        { text: "Historical AI performance data enabling future initiatives to benchmark against experience", category: 2 },
        { text: "Practitioner networks carrying institutional knowledge in relationships and social networks", category: 3 },
        { text: "Reasons why a vendor was not selected and what that implies for future evaluations", category: 1 },
        { text: "Month-by-month adoption curve data from prior deployments", category: 2 },
      ],
      correctFeedback:
        "Correct. Each memory component addresses a different knowledge risk: learning logs prevent repeated mistakes, decision archaeology prevents relitigating settled decisions, performance archives provide benchmarking baselines, and practice communities carry knowledge in relationships that survive individual departures.",
      wrongFeedback:
        "The four components address different memory risks. Learning logs prevent repeated deployment mistakes. Decision archaeology prevents relitigating major decisions when key people leave. Performance archives provide honest benchmarks. Practice communities preserve the relational knowledge that documents cannot capture.",
    },
    {
      q: "What is the most direct indicator that an AI transformation has transitioned from programme management to institutional ownership?",
      options: [
        "The programme team has been disbanded and all AI is managed by IT operations",
        "AI adoption rates have remained above 80% for 12 consecutive months",
        "The AI transformation advances at the same rate after the founding programme lead departs as before",
        "The board has approved multi-year AI investment without requiring annual reapproval",
      ],
      correct: 2,
      correctFeedback:
        "Correct. The ultimate test of AI transformation institutionalisation is whether the organisation continues to advance AI capability after the founding leadership has moved on. A transformation that depends on the founding leader is a programme, not an institution. A transformation that continues independently is institutionalised.",
      wrongFeedback:
        "The indicator of genuine institutionalisation is programme continuity through leadership transitions. If AI transformation depends on specific individuals — programme leads, executive champions, technical architects — it is fragile. When it continues to advance despite normal organisational turnover, the transformation has become institutional.",
    },
    {
      q: "An AI programme is showing three simultaneous stall signals: declining adoption rates, no new use cases in seven months, and AI absent from the last three leadership team meeting agendas. What is the correct first response?",
      options: [
        "Launch a communications campaign to re-energise the AI programme across the organisation",
        "Commission an external AI advisory firm to assess the programme's strategy",
        "Conduct a momentum audit to identify which of the five year-one momentum factors have depleted and which institutional structures are missing",
        "Accelerate the next AI deployment to demonstrate continued programme investment",
      ],
      correct: 2,
      correctFeedback:
        "Correct. Three simultaneous stall signals indicate a structural momentum problem, not a communications or deployment problem. A momentum audit identifies which of the five year-one drivers have depleted and which of the four institutional structures are absent or not functioning. The audit produces specific structural investments rather than symptoms-level responses.",
      wrongFeedback:
        "Three simultaneous stall signals require a structural diagnosis, not a symptoms-level response. A momentum audit identifies the specific structural gaps — which institutional structures are absent or not functioning — and produces targeted structural investments. Communications campaigns and new deployments address symptoms without diagnosing the structural cause of the stall.",
    },
    {
      kind: "order",
      q: "Order the five elements of an AI momentum maintenance system:",
      items: [
        "Governance architecture: four standing structures with documented cadences and named owners",
        "Institutional memory: learning logs, decision archaeology, performance archives, and practice communities",
        "AI leadership pipeline: three-tier development programme with named candidates and stretch assignments",
        "Fatigue management: quarterly energy check-ins, rotation options, and recovery periods in the roadmap",
        "Vision renewal cadence: annual vision update connected to the strategic planning cycle",
      ],
      prompt: "Drag to arrange in the correct sequence",
      correctFeedback:
        "Correct. Governance architecture is the visible institutional backbone. Institutional memory preserves the knowledge the governance requires. The leadership pipeline ensures governance continues through transitions. Fatigue management retains the people who carry the pipeline and the memory. Vision renewal keeps the entire system strategically current.",
      wrongFeedback:
        "The five elements build on each other: governance architecture is the structural foundation; institutional memory is the knowledge the structure requires to function; the leadership pipeline ensures continuity through transitions; fatigue management retains the human energy that the system depends on; and vision renewal keeps the entire system aligned with an evolving technology and competitive landscape.",
    },
    {
      q: "What is the most effective single investment a business leader can make to ensure AI transformation continues after they have moved on?",
      options: [
        "Documenting the AI programme strategy in a comprehensive handbook for their successor",
        "Building a diverse and capable external AI advisory board to guide future direction",
        "Building the five-element momentum maintenance system — governance, memory, pipeline, fatigue management, and vision renewal",
        "Securing multi-year board commitment to AI investment before transitioning",
      ],
      correct: 2,
      correctFeedback:
        "Correct. The five-element momentum maintenance system is the leader's succession plan for the transformation. It is not dependent on any single person — not the outgoing leader, the incoming leader, or any specific programme team member. It is the institutional infrastructure that advances AI transformation independently of who is in specific leadership roles.",
      wrongFeedback:
        "The five-element system is the most durable investment because it is institutional rather than personal. A handbook relies on the successor reading and following it. An advisory board depends on sustained engagement. Board commitment depends on continued business justification. The momentum maintenance system advances the transformation independently of these dependencies.",
    },
  ],
});
