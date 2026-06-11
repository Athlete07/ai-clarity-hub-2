import { buildChapter, buildSection, s, x } from "../concepts-bl-helpers";

export const chapter01BlAiOpportunityAssessment = buildChapter({
  slug: "bl-ai-opportunity-assessment",
  number: 1,
  shortTitle: "AI Opportunity Assessment",
  title: "AI Opportunity Assessment — Finding Where AI Actually Pays",
  readingMinutes: 20,
  summary:
    "Before any vendor call or pilot budget, business leaders need a structured method to identify where AI will genuinely create value — and rule out the areas where it will not. This chapter gives you that method.",
  keyTakeaway:
    "Opportunity assessment is a filter, not a brainstorm. Work from business problems backward to AI capabilities, score by value and feasibility together, and only then shortlist for pilots. The leaders who skip this step fund demos; the leaders who do it fund outcomes.",
  pmCallout:
    "As a business leader: your job is to own the prioritised shortlist — not to understand AI architectures. Every tool in this chapter produces a decision artefact you can defend to your CFO, your CTO, and your board.",
  sections: [
    buildSection({
      number: "1.1",
      title: "The Opportunity Mindset",
      subtitle: "Why starting with AI is the wrong starting point",
      take: "The right question is never 'where can we use AI?' It is 'which business problems are costing us the most — and could AI change the economics?' Leaders who reverse this sequence end up with impressive demos and flat P&Ls.",
      why: "Every AI initiative that fails to deliver ROI started the same way: someone excited about a technology went looking for problems it could solve. Sustainable AI investment starts with the pain, not the solution.",
      paragraphs: [
        [
          s("Business leaders are pitched AI solutions daily in 2026. "),
          x(
            "Vendors lead with capability: 'our model can classify, generate, predict, automate.' That framing inverts sound investment logic.",
            "Sound investment logic starts with: where is value leaking from my business today? Then: could AI change that equation? The vendor pitch puts you in passenger seat before you've chosen the destination.",
          ),
          s(" Reclaim the driver's seat by starting with your own problem inventory before any vendor meeting."),
        ],
        [
          s("The opportunity mindset has three disciplines. "),
          x(
            "First: frame every candidate as a business problem, not a technology wish. Second: require a value hypothesis before any feasibility discussion. Third: reject any initiative that cannot articulate the metric it will move.",
            "These disciplines are not bureaucratic. They are the difference between a pilot that reports on accuracy metrics and a pilot that reports on revenue recovered or cost per transaction.",
          ),
          s(" Leaders who enforce these disciplines build reputations for credible AI investment."),
        ],
        [
          s("The mindset shift is also cultural. "),
          x(
            "When your team knows that AI proposals require a business-problem framing, the quality of proposals improves. Engineers stop bringing technology pitches; they bring cost-reduction or revenue hypotheses.",
            "That culture does not happen by decree — it happens when leadership consistently redirects technology-first pitches back to the problem statement in every review meeting.",
          ),
          s(" Model the behaviour once and it propagates faster than any policy document."),
        ],
      ],
      examples: [
        {
          title: "Maersk — logistics problems first, AI second",
          body: "Maersk's AI programme began with a rigorous mapping of where demurrage costs accumulated across container journeys — a purely business-problem exercise. AI prediction of port congestion was selected because it addressed a documented $200M+ annual cost. The technology choice followed the problem, not the other way around.",
        },
        {
          title: "A retailer's failed chatbot — technology-first trap",
          body: "A mid-size UK retailer deployed an AI chatbot because competitors had one. Eighteen months later, CSAT had not improved and call centre headcount was unchanged. Post-mortem revealed no problem had been scoped: the chatbot addressed questions customers were not asking. Starting with 'we need a chatbot' rather than 'we lose customers at the returns stage' guaranteed the failure.",
        },
        {
          title: "Commonwealth Bank — problem inventory as standard practice",
          body: "CBA runs a twice-yearly 'friction inventory' across all business units before AI initiative selection. Each friction item must be described in dollar terms: revenue lost, cost incurred, or customer outcome degraded. AI options are only evaluated against pre-scored frictions. The practice reduced pilot failure rate by keeping technology discussions downstream of value discussions.",
        },
      ],
    }),
    buildSection({
      number: "1.2",
      title: "The Value-Feasibility Matrix",
      subtitle: "The 2×2 that separates strategic bets from expensive experiments",
      take: "Plot every AI opportunity on two axes: business value (revenue, cost, risk) and AI feasibility (data availability, task structure, vendor maturity). High-value, high-feasibility opportunities belong in your portfolio immediately. Everything else needs conditions to change before it earns investment.",
      why: "Without a shared scoring framework, AI prioritisation devolves into politics — whoever shouts loudest or has the best vendor relationship wins budget. The matrix creates a defensible, repeatable conversation.",
      paragraphs: [
        [
          s("The value axis measures business impact, not technical elegance. "),
          x(
            "Ask: if this initiative performs as designed, what metric moves and by how much? Value must be expressed in a unit your finance team recognises — revenue uplift percentage, cost per unit reduction, churn rate points, risk exposure dollars.",
            "Qualitative claims like 'improve customer experience' belong on the matrix only after you have converted them: 'reduce customer effort score by 8 points, which correlates to 0.4% reduction in annual churn at our current revenue base.'",
          ),
          s(" Converting qualitative to quantitative is the discipline that separates a shortlist from a wish list."),
        ],
        [
          s("The feasibility axis measures AI-readiness, not engineering enthusiasm. "),
          x(
            "Three questions determine feasibility: Is the data available, labelled, and governed? Is the task repetitive and well-defined enough for current AI to reliably perform? Is there a production-ready vendor or internal path that does not require research breakthroughs?",
            "Leaders often underweight the data question. A task that is structurally ideal for AI — repetitive, rule-adjacent, high volume — is infeasible if the underlying data is siloed, unlabelled, or governed by a contract that prohibits use.",
          ),
          s(" Feasibility assessment is a data audit, not a technology enthusiasm survey."),
        ],
        [
          s("The quadrant logic drives resource allocation decisions. "),
          x(
            "High value, high feasibility: fund now, move fast, set quarterly milestones. High value, low feasibility: invest in data or process foundations before AI. Low value, high feasibility: let vendors test it on their own dime. Low value, low feasibility: decline without ceremony.",
            "Most organisations have too many initiatives in the high value, low feasibility quadrant — and they call those 'strategic priorities'. The matrix makes visible what conditions must change before those initiatives are viable.",
          ),
          s(" The discipline is acting on the quadrant, not just drawing it."),
        ],
      ],
      examples: [
        {
          title: "Unilever — matrix as portfolio governance",
          body: "Unilever's AI Centre of Excellence uses a value-feasibility scoring model across every business unit. Initiatives scoring below threshold on either axis are 'parked' with documented conditions for re-evaluation — not cancelled, not funded. The approach reduced active pilot count by 40% while increasing pilot-to-production conversion rate, because fewer diluted resources.",
        },
        {
          title: "A financial services firm — discovering data debt",
          body: "A wealth management firm mapped twelve AI use cases to the matrix. Eight landed in high-value, low-feasibility because client data was split across three legacy systems with conflicting identifiers. The matrix made explicit a pre-existing data unification programme — and gave it board-level urgency. Three AI initiatives could not be funded until the data programme completed.",
        },
        {
          title: "Rolls-Royce — feasibility from operational data",
          body: "Rolls-Royce's predictive maintenance programme succeeded because jet engine sensor data had been collected and structured for decades before AI tools could exploit it. Their feasibility score was genuinely high. Competitors attempting similar programmes discovered their maintenance data was technician notes in free text — a labelling project measured in years, not months.",
        },
      ],
    }),
    buildSection({
      number: "1.3",
      title: "Process Mapping for AI",
      subtitle: "You cannot automate what you haven't drawn",
      take: "AI acts on processes. Before any AI evaluation, map the end-to-end process at sufficient fidelity to see: where decisions happen, what information those decisions rely on, and where errors or delays accumulate. This map is the AI brief — without it, any vendor is guessing.",
      why: "Vendors cannot surface the right solution for a process they have not seen. Pilots fail because they automate the visible part of a process and ignore the exceptions. Mapping prevents both failure modes.",
      paragraphs: [
        [
          s("Process mapping for AI is not the same as a standard process improvement exercise. "),
          x(
            "Standard process maps trace steps and handoffs. AI-oriented process maps additionally annotate: what decision is made at each step, what information arrives at that decision point, what is the error rate when humans make this call, and what happens downstream when it is wrong.",
            "That annotation converts a process diagram into an AI target list: every annotated decision is a candidate for AI assistance, and the error rate and downstream cost quantify why.",
          ),
          s(" The additional fifteen minutes per decision node pays for itself in the first vendor scoping call."),
        ],
        [
          s("Walk the process, do not only map it from memory. "),
          x(
            "Leaders who map from their mental model of how a process works consistently miss exceptions, workarounds, and shadow steps. Exceptions are where AI earns its money — they are also where it most often fails if not designed for.",
            "Shadow steps — actions people take outside the documented process — reveal where the process was broken before AI arrived. Automating a shadow step with AI encodes the workaround as policy. Fixing the underlying issue first is the harder but more valuable path.",
          ),
          s(" Spend a session with the people who do the work, not just the people who manage it."),
        ],
        [
          s("The output is a decision inventory, not a flowchart. "),
          x(
            "Organise findings as: decision type, current information inputs, decision frequency, current error rate, cost of error, downstream impact. This inventory slots directly into the value-feasibility matrix from section 1.2.",
            "A well-constructed decision inventory changes vendor conversations. Instead of 'we want AI for our claims process', you bring 'we make 1,400 coverage eligibility decisions per week, 11% error rate, average rework cost £340, structured data available in our core system'. That specificity earns different vendor responses.",
          ),
          s(" Specificity in your brief produces specificity in vendor proposals — and makes evaluation objective."),
        ],
      ],
      examples: [
        {
          title: "Zurich Insurance — claims decision inventory",
          body: "Zurich mapped its claims triage process to a decision inventory before evaluating AI vendors. The inventory identified that 60% of claim decisions were straightforward eligibility checks using three structured data fields. AI automation of those decisions was feasible within weeks. The remaining 40% involved unstructured correspondence — a separate, longer programme. Separating them allowed parallel progress rather than a single failed initiative.",
        },
        {
          title: "NHS supply chain — the shadow step discovery",
          body: "A UK NHS trust mapped its medical supply ordering process for an AI demand forecasting project. Walkthroughs revealed procurement coordinators maintained personal spreadsheets as a parallel system because the ERP was too slow to update. AI trained on ERP data would have been trained on systematically incomplete inputs. The shadow spreadsheet discovery redirected the project design before any model was built.",
        },
        {
          title: "Deutsche Telekom — decision frequency as selection criterion",
          body: "Deutsche Telekom's digital operations team ran a decision frequency analysis across all candidate AI use cases. Their rule: AI investment is justified when decision frequency exceeds 500 instances per week per decision type. High-value but low-frequency decisions were deprioritised in favour of high-frequency routine decisions. The frequency criterion alone eliminated a third of the candidate list before any technical evaluation.",
        },
      ],
    }),
    buildSection({
      number: "1.4",
      title: "The Automation Suitability Test",
      subtitle: "Not every task AI can do is a task AI should do",
      take: "Apply four tests to every candidate process: Is it repetitive at sufficient volume? Is the input structured or structurable? Is acceptable performance clearly definable? Are the consequences of error bounded and recoverable? Fail two or more and the process is not suitable for current AI automation — regardless of vendor claims.",
      why: "Vendors will not tell you when their solution is inappropriate for your process. This test is the business leader's protection against buying AI that is technically functional but operationally unfit.",
      paragraphs: [
        [
          s("Repetition at volume is the first qualifier. "),
          x(
            "AI investment is justified by scale of application. A task done twenty times a week with variable inputs and high judgment requirement is not an AI candidate — it is a skilled knowledge worker task. The same task done 2,000 times a week with structured inputs is a prime automation target.",
            "Frequency and volume are measurable. Before evaluating any AI solution, measure how many times the task occurs monthly, seasonally, and at peak. Volume estimates that are 'around a thousand or so' are not ready for AI scoping.",
          ),
          s(" Demand the number. Every process owner knows their volume — they track it for headcount justification."),
        ],
        [
          s("Structured input determines feasibility ceiling. "),
          x(
            "AI processes what it receives. If the task input is a standardised form, a structured database record, or a consistent sensor reading — AI can receive it cleanly. If the task input is a handwritten letter, a phone call, a photo of a whiteboard, or a negotiation — you are adding an extraction layer that carries its own error rate before the decision AI even activates.",
            "Each unstructured input type requires its own AI layer — OCR, speech-to-text, vision — each with its own accuracy ceiling and failure mode. Compound error rates multiply. A 95% accurate extraction feeding a 95% accurate classifier produces 90% end-to-end accuracy. That may be insufficient for your process.",
          ),
          s(" Be explicit about input types before assuming feasibility."),
        ],
        [
          s("Definable performance and bounded error complete the test. "),
          x(
            "If you cannot write down what 'good' looks like for this task — measurable, testable, auditable — you cannot evaluate whether the AI is performing. Many failed AI pilots discovered this at month nine: the business had never agreed on what success meant.",
            "Bounded error asks: what happens when the AI is wrong? In claims processing, a wrong eligibility decision triggers a manual review. In an autonomous trading system, a wrong decision triggers a market event. The error consequences must be proportionate to the automation level you are implementing.",
          ),
          s(" Unbounded error consequence requires human oversight in the loop — and must be designed in from day one."),
        ],
      ],
      examples: [
        {
          title: "A law firm — the frequency test saves a pilot",
          body: "A UK law firm considered AI contract review. The automation suitability test revealed: high-value contracts requiring review averaged 12 per week (low volume) with highly variable clause structures (low input structure) and partnership-level judgment requirements (undefined performance ceiling). The AI investment was correctly redirected to high-volume, low-value NDAs — 200+ per week, standard structure, clear pass/fail criteria.",
        },
        {
          title: "Siemens — structured input as pre-investment",
          body: "Siemens' industrial AI programme discovered that 70% of candidate processes required sensor data standardisation before AI could be applied. Rather than running parallel pilots, they front-loaded a sensor data unification project. AI deployment followed in cohorts, each cohort ready because the input structure question had been answered in advance.",
        },
        {
          title: "A bank — bounded error design prevents regulatory risk",
          body: "A major European bank tested AI credit pre-screening. The automation suitability test flagged that an incorrect pre-screen rejection was an adverse action under EU regulation, requiring explanation and appeal rights. The AI was deployed with a mandatory human confirmation step for any rejection, not as a decision-maker but as a ranker with human sign-off. The error was bounded; the regulatory position was clean.",
        },
      ],
    }),
    buildSection({
      number: "1.5",
      title: "Reading Competitive Pressure Correctly",
      subtitle: "The difference between a competitive signal and a competitive panic",
      take: "A competitor deploying AI is a signal, not a mandate. The correct response is to ask: what business outcome are they pursuing, is it material to our competitive position, and do we have the conditions to match or differentiate? 'They have it so we need it' is how budget gets spent on AI theatre.",
      why: "Competitive panic generates the worst AI decisions. Leaders feel visible pressure to respond and approve initiatives that fail all the suitability tests. Understanding competitive signals prevents reactive investment.",
      paragraphs: [
        [
          s("Competitor AI announcements are marketing before they are market reality. "),
          x(
            "Press releases about AI deployments routinely describe ambition, not production. Research before responding: is this a pilot with twenty users or a production system with measurable outcomes? Vendor case studies are commissioned — independent evidence of sustained operational results is the benchmark.",
            "The lead time between AI announcement and meaningful customer impact in complex enterprise processes is typically 18 to 36 months. Responding in month one to an announcement that will not be in production for two years creates urgency that benefits vendors and costs you.",
          ),
          s(" Request evidence of production scale and business outcomes, not pilot metrics, before adjusting strategy."),
        ],
        [
          s("Identify which customer outcome the competitor's AI addresses. "),
          x(
            "If their AI improves onboarding speed and your business wins on relationship quality, the competitive signal is adjacent — not direct. If their AI reduces quote turnaround from days to minutes and your customers cite quote speed as a top decision criterion, the signal is urgent.",
            "Map competitor AI moves to your customer value drivers. The intersection of 'competitor is investing here' and 'customers weight this heavily' is the only zone that demands a response within your current planning cycle.",
          ),
          s(" Everything outside that intersection is intelligence, not urgency."),
        ],
        [
          s("Use competitive pressure to accelerate internally-justified initiatives. "),
          x(
            "The best use of competitive intelligence is not to copy — it is to validate. When your process mapping and value-feasibility analysis has already identified an opportunity, a competitor moving in that direction confirms your direction and can justify accelerating the timeline.",
            "If the competitive move exposes an opportunity you had not seen, treat it as a new entry in your assessment process — not as a bypass of assessment. Competitive pressure does not change the suitability tests.",
          ),
          s(" Maintain assessment rigour; use competitive signals to prioritise, not to override."),
        ],
      ],
      examples: [
        {
          title: "Insurance — market signal vs market panic",
          body: "When Lemonade's AI claims processing received widespread press in 2022, several traditional insurers approved emergency AI pilot budgets. Most produced nothing material by 2024. The insurers that responded by running their existing opportunity assessment process on claims automation — rather than panic-funding pilots — produced better outcomes because their data and process foundations were in place before AI was layered on.",
        },
        {
          title: "Banking — competitor signal as validation",
          body: "A regional bank's process mapping had identified mortgage underwriting support as a high-value, improving-feasibility opportunity, but it had not been prioritised due to data readiness concerns. When two competitor banks announced AI underwriting tools in the same quarter, the leadership team used the competitive signal to justify accelerating the data readiness programme — not to fund the AI immediately. Twelve months later, data readiness was achieved and the AI programme began with genuine foundations.",
        },
        {
          title: "Retail — differentiating rather than copying",
          body: "A European grocery chain observed competitors deploying AI chatbots for customer service. Rather than building a matching chatbot, they assessed their competitive position: customers chose them for store experience, not digital convenience. Their AI investment went to supply chain demand forecasting — invisible to customers but directly supporting on-shelf availability. The competitive response was deliberate non-imitation.",
        },
      ],
    }),
    buildSection({
      number: "1.6",
      title: "Structuring Stakeholder Input",
      subtitle: "Getting signal from your organisation without running a survey",
      take: "Stakeholder input is essential for opportunity identification — people closest to processes see frictions leaders cannot. But unstructured input generates wish lists, not prioritised opportunities. Use a structured problem-statement format and a single conversation per business unit to extract signal efficiently.",
      why: "AI opportunity identification that relies only on top-down analysis misses the operational intelligence your frontline holds. But open-ended AI brainstorming wastes time and produces low-quality inputs. Structure the conversation to get the value without the noise.",
      paragraphs: [
        [
          s("Ask for problems, not solutions. "),
          x(
            "When you invite business unit input with 'what AI could help you?', you get shopping lists. When you ask 'what decisions or tasks consume disproportionate time relative to their value?' you get a problem inventory.",
            "The reframe is simple but the discipline to enforce it is real. In the first session, people will still offer solutions ('we need a chatbot'). Redirect: 'What customer interaction is breaking down? What is the cost of that breakdown?' The solution comes after the problem is clear.",
          ),
          s(" The facilitator's job is to translate every solution into the problem it addresses."),
        ],
        [
          s("Structure the conversation with three questions. "),
          x(
            "Question one: what task do people in your team spend the most time on that adds the least customer or business value? Question two: where do errors or delays in your processes cause the most downstream cost? Question three: what information do you need to make better decisions that you currently do not have or cannot get quickly enough?",
            "These three questions surface automation candidates, quality candidates, and decision-support candidates — the three AI use case archetypes — without mentioning AI once. That matters: if you mention AI, people either over-claim (anything can be AI) or under-claim (our work is too complex for AI).",
          ),
          s(" The questions produce raw material; the assessment framework converts it to a prioritised list."),
        ],
        [
          s("Limit input sessions to one hour and require pre-work. "),
          x(
            "Business unit leaders who prepare answers to the three questions in advance produce thirty times better signal than those who improvise. Send questions a week ahead with a simple template: problem description, frequency estimate, and consequence of the current state. The session becomes validation and clarification, not blank-sheet ideation.",
            "Cap at one session per business unit per cycle. The marginal value of additional sessions drops rapidly; the coordination cost does not. If a unit generates more problems than one session can handle, they are doing the pre-work correctly — review the written submissions directly.",
          ),
          s(" Efficiency in the input stage protects the analysis capacity you need for the assessment stage."),
        ],
      ],
      examples: [
        {
          title: "A professional services firm — pre-work changes the output quality",
          body: "A global consultancy redesigned its AI opportunity input process after initial sessions produced vague submissions. They required each practice leader to complete a two-page problem template one week before the session, with specific prompts for frequency, error rate, and consequence. Input quality in the following cycle was sufficient to directly populate the value-feasibility matrix without additional discovery conversations.",
        },
        {
          title: "Consumer goods — three-question structure surfaces unexpected opportunities",
          body: "A FMCG company running the three-question structure in its supply chain division received an unexpected response to question three: regional demand planners did not have real-time retailer inventory data, so they were over-ordering at quarter-end to avoid stockouts. That information gap — not an automation problem — became the highest-value AI opportunity in the cycle: a retailer inventory visibility tool that reduced write-offs by 8% in the first year.",
        },
        {
          title: "A hospital network — clinical vs administrative split",
          body: "A hospital network separated its stakeholder input process into two parallel tracks: clinical and administrative. The clinical track used the three questions with a compliance overlay — any AI touching patient care required regulatory pre-assessment before entering the matrix. The administrative track ran the standard process. Separating tracks prevented clinical complexity from slowing administrative AI adoption and vice versa.",
        },
      ],
    }),
    buildSection({
      number: "1.7",
      title: "The Readiness Filter",
      subtitle: "Good opportunities at the wrong time are expensive experiments",
      take: "An opportunity that passes the value and feasibility tests can still fail a readiness filter. Readiness asks: does your organisation have the change management capacity, governance infrastructure, and technology foundations to absorb this initiative today? Failing the readiness test means timing, not abandonment.",
      why: "Most AI pilots fail not because the technology did not work, but because the organisation was not ready to integrate, govern, or scale what the technology produced. Readiness assessment prevents technology success from becoming organisational failure.",
      paragraphs: [
        [
          s("The three readiness questions are distinct from the feasibility questions. "),
          x(
            "Feasibility asks whether AI can do the task. Readiness asks whether your organisation can adopt the result. The questions are: Does the impacted team have the capacity and willingness to change workflows? Does governance exist to manage the AI output (audit, override, escalation)? Is the required technology infrastructure in place — APIs, data pipelines, access controls?",
            "Each question has a binary answer for planning purposes. A 'no' on any dimension does not kill the opportunity — it identifies the pre-work required before the AI initiative is viable.",
          ),
          s(" Convert each 'no' into a pre-work task with an owner and a timeline."),
        ],
        [
          s("Change management readiness is the most consistently underestimated dimension. "),
          x(
            "Technology deployments that arrive without workflow redesign, training, and incentive alignment produce adoption rates that make ROI impossible. A process that required thirty minutes of skilled attention becomes a thirty-minute AI-assisted process that teams do not trust and manually verify — producing zero efficiency gain and full technology cost.",
            "The readiness question is not 'will people accept AI?' It is 'have we designed the new workflow, trained the team, and adjusted performance measures to reward the new way of working?' Acceptance follows design; it does not precede it.",
          ),
          s(" Assign change management ownership before signing the technology contract."),
        ],
        [
          s("Technology readiness prevents integration failure. "),
          x(
            "AI solutions that cannot access the data they need, cannot write results back to the system of record, or cannot be accessed by the tools the team actually uses are partially deployed at best. Integration feasibility — including data access, API availability, and security compliance — must be assessed before pilot design, not discovered during it.",
            "A common failure pattern: a vendor demo uses cleaned, structured sample data. Production deployment discovers that the equivalent data lives in three systems, two of which require a security review before integration, and one of which has no API. The pilot timeline doubles. The business case deteriorates. The readiness question prevents this.",
          ),
          s(" Run a technical readiness review in parallel with business case development, not after it."),
        ],
      ],
      examples: [
        {
          title: "A manufacturer — change management failure despite technology success",
          body: "A precision manufacturer deployed AI quality inspection with 99.2% accuracy on the test set. Twelve months post-deployment, operators were still manually reinspecting every flagged item because they did not trust the system and had never been trained to understand its confidence scores. The AI was technically working. The process outcome — reduced inspection time — had not materialised. The readiness filter had not been applied; change management had been treated as a training event rather than a workflow redesign.",
        },
        {
          title: "A bank — integration pre-work converts a no to a yes",
          body: "A credit card issuer ran the readiness filter on an AI fraud alert system. Technology readiness returned three 'no' answers: no API from the transactions system, no access control framework for the AI output, and no escalation workflow for disputed flags. Rather than deferring the initiative, they funded an integration sprint alongside the vendor selection process. Four months later, the deployment began on a ready foundation.",
        },
        {
          title: "A logistics company — timing the opportunity correctly",
          body: "A third-party logistics company assessed AI route optimisation as high-value and high-feasibility. The readiness filter identified that their fleet telematics data was inconsistently collected — a data quality issue, not a technology issue. They deferred the AI initiative by one planning cycle and invested in telematics standardisation. When the AI initiative launched in the following cycle, it performed to plan from week one.",
        },
      ],
    }),
    buildSection({
      number: "1.8",
      title: "Building the Business Leader's Prioritised Shortlist",
      subtitle: "From assessment to action — the artefact you take into the next leadership meeting",
      take: "The output of opportunity assessment is not a ranked list of every idea — it is a shortlist of three to five initiatives with documented value hypothesis, feasibility score, readiness status, and recommended next step. This is the artefact you own as the business leader. It informs budget requests, team assignments, and board conversations.",
      why: "Without a structured output, the assessment process creates work and conversation but no durable organisational signal. The shortlist is how you communicate AI strategy to finance, technology, and governance stakeholders in a language they can act on.",
      paragraphs: [
        [
          s("A well-formed shortlist entry has five fields. "),
          x(
            "Initiative name and problem statement. Estimated value range (conservative and optimistic) with the metric it moves. Feasibility score from the matrix, with the binding constraint identified. Readiness status with the pre-work required. Recommended next step: fund pilot, address pre-work, or defer.",
            "Five fields, one page per initiative. Anything shorter lacks the specificity needed for resource allocation. Anything longer is analysis paralysis. Business leaders who produce this artefact consistently report that their AI conversations with finance and technology stakeholders shift from debate to execution.",
          ),
          s(" The shortlist is not the strategy deck — it is the operational brief that the strategy deck references."),
        ],
        [
          s("Three to five initiatives is the right scope. "),
          x(
            "Organisations with more than five active AI pilots tend to have five initiatives that are well-resourced and several that are nominally alive but starved of attention. The starved initiatives produce failure statistics that discourage future investment. Three to five ensures each initiative receives the leadership attention and change management resource it needs.",
            "The discipline to hold to three to five requires explicitly declining or deferring good opportunities. That is the hardest part of the prioritisation job — and the part that most distinguishes leaders who generate AI ROI from leaders who generate AI activity.",
          ),
          s(" 'Not now' is a decision, not a failure."),
        ],
        [
          s("Revisit the shortlist quarterly, not annually. "),
          x(
            "Feasibility changes as vendor markets mature and data quality improves. Value changes as business conditions shift. Readiness changes as pre-work completes. A shortlist that is reviewed quarterly adapts to these changes; an annual review produces a strategy that is consistently behind reality.",
            "Quarterly reviews are not complete reassessments. They are status checks: has the binding constraint changed for any deferred initiative? Has the value hypothesis for any active initiative been validated or invalidated by pilot results? Do the priorities still reflect the business's current strategic direction?",
          ),
          s(" Build the shortlist review into your existing leadership governance cycle — it should not be a separate meeting."),
        ],
      ],
      examples: [
        {
          title: "A retail bank — shortlist as board artefact",
          body: "A retail bank's Chief Digital Officer presented a five-initiative shortlist to the board in Q1, with quarterly updates replacing ad-hoc AI project reports. Board members reported the shortlist format made AI investment decisions as legible as capital expenditure decisions. The bank's AI portfolio approval cycle reduced from six months to six weeks because the shortlist contained all the information the approval body needed.",
        },
        {
          title: "An insurer — the courage to defer",
          body: "An insurance group's opportunity assessment produced eleven high-value initiatives. The leadership team committed to five and explicitly deferred six with documented conditions for re-entry. Within twelve months, three of the deferred initiatives had met their re-entry conditions and entered the next shortlist cycle. Two were still not ready. One had been made redundant by a vendor acquiring the capability. The deferral discipline made the active portfolio succeed.",
        },
        {
          title: "A media company — shortlist entry protects against scope creep",
          body: "A media group's AI content personalisation initiative was approved based on a shortlist entry that documented the specific metric: increase subscription retention at the 90-day mark by 3 percentage points. When the programme team proposed expanding scope to include advertising personalisation during implementation, the leader used the shortlist entry to redirect: that is a separate initiative requiring its own assessment and shortlist entry. Scope discipline is easier when the original scope is written down.",
        },
      ],
    }),
  ],
  quiz: [
    {
      q: "Your team proposes a new AI initiative, saying 'competitors are using AI for customer onboarding so we should too.' What is the correct first response as a business leader?",
      options: [
        "Approve a pilot immediately — competitive parity is always worth funding.",
        "Ask: what specific business outcome does their onboarding AI address, and is that outcome a priority in our value-feasibility assessment?",
        "Reject it — reactive AI investment is always wrong.",
        "Delegate to the technology team to evaluate vendor options.",
      ],
      correct: 1,
      correctFeedback:
        "Right. Competitive signals require evaluation against your own assessment framework, not automatic approval. Identify what outcome the competitor addresses and whether it maps to your strategic priorities before committing budget.",
      wrongFeedback:
        "Competitive parity is not a business case. The value-feasibility matrix applies regardless of what competitors are doing. Re-read sections 1.2 and 1.5.",
    },
    {
      q: "A process mapping exercise reveals that a candidate AI process depends on inputs from handwritten customer forms scanned to PDF. What does this finding change about the initiative assessment?",
      options: [
        "Nothing — modern AI can read handwriting.",
        "It adds an OCR extraction layer with its own accuracy ceiling, compounding error rates before the decision AI activates, which may push feasibility below threshold.",
        "It means the initiative should be cancelled.",
        "It is a technology problem the vendor will solve — proceed with selection.",
      ],
      correct: 1,
      correctFeedback:
        "Right. Unstructured inputs require extraction layers that carry their own error rates. Compound error rates can make an otherwise feasible process fail the suitability test. This finding must change the feasibility score or the process design.",
      wrongFeedback:
        "Every AI layer has a performance ceiling. Compounding imperfect extraction with imperfect classification produces a system that may not meet operational requirements. Re-read section 1.4.",
    },
    {
      kind: "categorize",
      q: "Sort each initiative outcome into its correct matrix quadrant.",
      categories: [
        "Fund now — high value, high feasibility",
        "Build foundations — high value, low feasibility",
        "Low priority — low value, high feasibility",
        "Decline — low value, low feasibility",
      ],
      items: [
        { text: "Invoice matching automation: £2M/year in manual processing cost, structured data available in ERP, proven vendor solutions exist.", category: 0 },
        { text: "AI-powered contract negotiation: high legal value, inputs are unstructured correspondence, requires judgment not yet within AI capability.", category: 1 },
        { text: "Auto-categorisation of internal IT tickets: minor efficiency gain, structured ticket data available, off-the-shelf tools exist.", category: 2 },
        { text: "AI sentiment analysis of handwritten employee feedback forms with no digital equivalent.", category: 3 },
      ],
      correctFeedback:
        "Right. The matrix works by combining value and feasibility assessments. High-value, low-feasibility initiatives need data or process foundations before AI — not pilot funding. Re-read section 1.2.",
      wrongFeedback:
        "Both axes matter equally. A technically feasible initiative with low business value still does not justify investment. Re-read section 1.2.",
    },
    {
      q: "You have identified eleven strong AI opportunities through stakeholder input. How many should appear on your active shortlist?",
      options: [
        "All eleven — more initiatives means more learning.",
        "The top three to five, with the remainder explicitly deferred with documented conditions for re-entry.",
        "One — focus is everything.",
        "However many the technology team can handle simultaneously.",
      ],
      correct: 1,
      correctFeedback:
        "Right. Three to five active initiatives ensures adequate resourcing and leadership attention. Deferred initiatives are not abandoned — they have documented re-entry conditions and are reviewed quarterly.",
      wrongFeedback:
        "Organisations with too many active AI initiatives produce failure statistics across the board. Active portfolio size must match change management and governance capacity. Re-read section 1.8.",
    },
    {
      q: "The readiness filter on a high-value, high-feasibility initiative returns 'no' on change management readiness. What is the correct response?",
      options: [
        "Override the readiness filter — value and feasibility are sufficient to proceed.",
        "Cancel the initiative — if the organisation is not ready, the opportunity is lost.",
        "Document change management as a pre-work item with an owner and timeline, then defer the AI investment until readiness is achieved.",
        "Proceed and address change management after deployment.",
      ],
      correct: 2,
      correctFeedback:
        "Right. A 'no' on readiness means timing, not abandonment. Pre-work items convert a not-ready initiative into a ready one. Addressing change management after deployment guarantees the adoption failure pattern.",
      wrongFeedback:
        "Readiness failure is the most common cause of technically successful AI deployments producing zero business outcome. Change management must precede deployment, not follow it. Re-read section 1.7.",
    },
    {
      kind: "order",
      q: "Order the opportunity assessment steps from first to last.",
      prompt: "Drag to arrange the correct sequence (top = first).",
      items: [
        "Conduct structured stakeholder input using the three-question problem statement format.",
        "Run the value-feasibility matrix on all candidate opportunities.",
        "Apply the automation suitability test to high-scoring candidates.",
        "Apply the readiness filter to shortlisted initiatives.",
        "Produce the three-to-five item prioritised shortlist with recommended next steps.",
      ],
      correctFeedback:
        "Right. The sequence ensures every filter builds on the previous one, preventing wasted assessment effort on candidates that would be eliminated later.",
      wrongFeedback:
        "Assessment filters should sequence from broad (value-feasibility) to specific (suitability, readiness), with the shortlist as the output — not an input. Re-read sections 1.2 through 1.8.",
    },
  ],
});
