import { buildChapter, buildSection, s, x, sectionWithDiagram } from "../concepts-bl-helpers";
import { BL_CALLOUT } from "../concepts-bl-helpers";

export const chapter08BlLeadingByExampleAi = buildChapter({
  slug: "bl-leading-by-example-ai",
  number: 8,
  shortTitle: "Leading by Example with AI",
  title: "Leading by Example: How Leader AI Behaviour Shapes Organisation-Wide Adoption",
  readingMinutes: 24,
  summary:
    "Leader AI behaviour is the strongest single signal the organisation receives about whether AI adoption is genuinely expected. A leader who talks about AI transformation but does not personally use AI in visible ways sends a clear signal: AI is for others. A leader who uses AI in public, shares their learning openly, and demonstrates AI-augmented work creates the permission and the model that the organisation follows. This chapter provides a practical framework for deliberate AI leadership practice.",
  keyTakeaway:
    "Leader AI behaviour influences organisation-wide adoption more than any communications campaign, incentive programme, or training curriculum. The multiplication effect of leader modelling — one leader's visible AI behaviour influencing hundreds of others — makes personal AI practice the highest-ROI adoption investment a leader can make. It is also the most neglected.",
  pmCallout: BL_CALLOUT,
  sections: [
    sectionWithDiagram({
      number: "8.1",
      title: "Why leader behaviour is the strongest adoption signal",
      subtitle: "The evidence for why what leaders do with AI matters more than what they say about it",
      take: "Research on organisational change consistently shows that employee behaviour follows leader behaviour more reliably than it follows leader communication. In AI adoption, this principle is amplified: employees who observe their leaders genuinely engaging with AI interpret the observation as more credible evidence of AI value than any amount of programme communication. The leader who uses AI creates permission; the leader who does not use AI creates restriction — regardless of what either one says.",
      why: "Business leaders who understand the multiplication effect of their personal AI behaviour — one leader's practice influencing hundreds of observers simultaneously — can redirect their AI transformation investment toward the most efficient channel: their own visible behaviour change.",
      paragraphs: [
        [
          s("The multiplication effect of leader AI modelling operates through three channels simultaneously: permission (it must be acceptable if the leader does it), competence (if the leader can learn it, I can learn it), and priority (the leader uses time on this, therefore it matters). "),
          x(
            "Permission signalling is particularly powerful in organisations where AI adoption requires a change in professional norms. When a senior physician uses AI diagnostic support in a clinical review, junior physicians receive permission that no communications programme can provide. When a senior partner in a law firm uses AI legal research, associates receive permission that is categorically more credible than a programme announcement.",
            "Competence signalling matters most in professional environments where AI is perceived as a technical skill that non-technical professionals may lack. A senior finance executive who visibly learns AI financial analysis tools demonstrates that AI competence is accessible to domain professionals, not only to technical specialists.",
          ),
          s(" Identify which of the three channels — permission, competence, or priority — is the most significant adoption barrier in your organisation, and focus your personal AI behaviour on demonstrating that specific signal."),
        ],
        [
          s("The absence of leader AI behaviour has a stronger signal than any negative communication. "),
          x(
            "When employees are told that AI transformation is a strategic priority, and they observe that their leaders do not personally use AI tools in any visible way, the observation overrides the communication. The implicit message: 'This transformation is for our people to do, not for us to do.' This message, unintentionally sent, produces the adoption gap that every subsequent communications campaign struggles to close.",
            "Research on organisational role modelling shows that employees monitor leader behaviour for authenticity signals — evidence that the leader personally believes in and practises what they advocate. In AI transformation, the authenticity signal is personal AI use. Its absence is interpreted as inauthenticity.",
          ),
          s(" Assess your own AI behaviour honestly: do you personally use AI tools in your work in ways that are observable by your direct reports? If the answer is no, this is your highest-priority transformation action."),
        ],
        [
          s("Leader AI behaviour has a longer influence horizon than leader AI communication. "),
          x(
            "A leader's AI communication is heard once, perhaps remembered for weeks. A leader's AI behaviour — observed repeatedly in meetings, presentations, and daily interactions — creates a persistent signal that accumulates over months. The accumulation converts from a signal into a culture: what is normal here is for leaders to use AI in their work.",
            "The culture creation is the goal, not just the individual adoption. A leader who creates an AI-active leadership culture produces an organisation that self-perpetuates AI adoption without requiring ongoing programme investment.",
          ),
          s(" Think of your personal AI behaviour as a culture investment, not a compliance signal. The return on consistent personal AI practice compounds over the transformation horizon."),
        ],
      ],
      examples: [
        {
          title: "Financial services — CMO modelling accelerates team adoption",
          body: "A bank's CMO began using an AI market analysis tool in his weekly team meeting — summarising competitor activity with AI-generated briefings and discussing them with his team. The visible AI use in the leadership setting was observed by eight direct reports, each of whom managed teams of 20–40 analysts. Within six weeks, four of the eight direct reports had independently started using AI tools in their own team meetings. By week twelve, 67% of the analyst function was using the same tool. The CMO had not issued any adoption mandates — his observable personal practice had created the adoption cascade.",
        },
        {
          title: "Healthcare — physician leader signals permission",
          body: "A hospital's Chief of Radiology began using AI diagnostic support in clinical case reviews — reviewing AI findings alongside his own, demonstrating when he agreed with the AI and when he disagreed. Junior radiologists who observed the Chief's AI use — and specifically his demonstration of both trust and appropriate scepticism — adopted the tool within weeks. Survey data showed that the Chief's visible use was cited by 81% of adopting radiologists as the primary factor that made them feel AI use was clinically appropriate. No programme communication had been as credible.",
        },
        {
          title: "Consulting firm — partner non-use restricts adoption",
          body: "A consulting firm's AI research programme had achieved 72% associate adoption but only 31% partner adoption. Survey data showed that associate adoption was clustered in practices where at least one partner was a visible AI user. In practices where no partner used AI visibly, associate adoption was 18%. The correlation between partner AI use and associate adoption was 0.87. The programme team had been investing in associate training; the bottleneck was partner permission signalling. A focused partner AI adoption programme — personal coaching, peer community, and explicit AI practice time — moved partner adoption from 31% to 64% over six months, and associate adoption followed to 89%.",
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
      number: "8.2",
      title: "Visible AI use by leaders",
      subtitle: "What deliberate visible AI use looks like in practice — and how to build it into leadership routine",
      take: "Visible AI use is not about showing off AI capability — it is about normalising AI as a natural part of how leaders work. The most effective visible AI use is organic and contextual: using AI in the normal course of work in ways that colleagues and teams naturally observe. Manufactured or forced visible AI use is detectable as performance and has lower credibility than authentic tool integration.",
      why: "Leaders who integrate AI into their genuine work practice — rather than performing AI use for programme purposes — create an authentic adoption signal that is more credible and more sustainable than programme-managed demonstration activities.",
      paragraphs: [
        [
          s("Three leadership contexts create natural visible AI use opportunities: team meetings, written communications, and individual work product. "),
          x(
            "Team meetings: using AI for real-time research during discussions, demonstrating AI-assisted preparation (agenda generation, meeting notes), sharing AI-generated analysis as a discussion input rather than as a final answer. Written communications: acknowledging AI assistance in written work ('I used AI to draft this summary — here is what it got right and where I changed it'). Individual work product: sharing AI-augmented analytical work and narrating the AI's contribution.",
            "The narration element is important: visible AI use that includes a brief account of what AI contributed and what the human added is more educationally valuable than visible AI use without narration. The narration teaches the team what good AI collaboration looks like.",
          ),
          s(" In your next three team meetings, find one natural opportunity to use AI in real time and narrate what you are doing. The three meetings create the habit and the signal simultaneously."),
        ],
        [
          s("Visible AI use at leadership level normalises AI for the functions and seniority levels that are watching. "),
          x(
            "A C-suite leader's AI use is observed by senior managers who interpret it as signal for senior management. Senior managers' AI use is observed by middle managers. Middle managers' AI use is observed by frontline staff. The cascade requires each leadership level to model for the level below, creating a top-down normalisation effect that programme communications cannot replicate.",
            "The normalisation cascade is blocked at each level where leaders do not personally model AI use. A CEO who uses AI but whose CFO, COO, and functional heads do not sends a CEO-level signal that the CFO's function does not receive.",
          ),
          s(" Map the normalisation cascade in your organisation: which leadership levels are currently AI-active and which are not? The blockage points in the cascade predict where adoption is stalling."),
        ],
        [
          s("Authentic visible AI use includes visible AI limitations and visible AI corrections. "),
          x(
            "A leader who uses AI in public and only shows the good outputs is performing AI capability, not modelling AI collaboration. A leader who uses AI in public, shows the AI's limitations, corrects AI errors in real time, and demonstrates the human judgement that improves the AI output is modelling what the organisation needs to learn: that AI is a tool that requires human collaboration to produce good outcomes.",
            "The AI correction demonstration is particularly valuable in professional environments where accuracy standards are high. A leader who shows 'the AI got this wrong — here is how I identified the error and corrected it' is modelling AI governance in real time.",
          ),
          s(" In your visible AI use, deliberately show at least one AI limitation or correction in every three public demonstrations. The correction models the cognitive process that good AI collaboration requires."),
        ],
      ],
      examples: [
        {
          title: "Technology company — CEO AI use in board preparation",
          body: "A technology company's CEO began preparing her board presentations using AI research and synthesis tools — and told the board she was doing so. She shared the AI-prepared competitive landscape analysis alongside her own commentary on where the AI's synthesis matched her judgment and where she had revised it. Board members saw both the capability (comprehensive competitive analysis in two hours) and the human judgment layer (CEO critical review and revision). Two board members subsequently adopted similar tools in their own board preparation. The CEO's transparent process had made AI visible in the organisation's highest-status context.",
        },
        {
          title: "Healthcare — CMO normalisation cascade",
          body: "A hospital's CMO used AI clinical literature synthesis in weekly grand rounds — showing AI-generated summaries of recent research and leading the clinical team through her evaluation of the AI's synthesis quality. Department heads who observed the CMO's AI use in grand rounds began using AI literature tools in their own department meetings. Residents who observed department head AI use began using AI in their own case preparation. The adoption cascade from CMO to resident took 16 weeks and was entirely driven by observational modelling, not programme communications.",
        },
        {
          title: "Financial services — CFO shows AI correction in leadership meeting",
          body: "A bank's CFO used AI financial scenario modelling in a monthly leadership team meeting. The AI produced a cash flow projection that the CFO immediately identified as using incorrect seasonal adjustment parameters. She corrected the parameters in real time — taking 90 seconds — and showed the corrected output. Her commentary: 'This is why AI doesn't replace your judgment — it requires it. The AI's output was plausible but wrong. If I hadn't reviewed it critically, this would have been in the board presentation.' The incident was cited by six direct reports in a subsequent survey as the single most useful AI demonstration they had observed, because it modelled the critical judgment the AI requires.",
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
      number: "8.3",
      title: "Public learning as a leadership practice",
      subtitle: "How sharing your AI learning journey — including failures — creates the permission that drives adoption",
      take: "Public AI learning — sharing your own experience with AI tools, including what has not worked — is among the most powerful adoption-accelerating leadership behaviours. It removes the social cost of being a learner, normalises imperfect AI outcomes, and demonstrates that AI mastery is a journey, not a prerequisite for use. Leaders who share their learning make AI learning safe for everyone who observes them.",
      why: "Most professionals will not adopt a tool they have not seen a respected peer struggle with and succeed at. The leader's public learning journey provides the model that converts observers from watchers to participants.",
      paragraphs: [
        [
          s("Public AI learning has three elements: the attempt (showing what you tried), the obstacle (showing what did not work and why), and the progress (showing what you learned and how you improved). "),
          x(
            "The obstacle element is the most important and most omitted. A leader who shares only successful AI use is modelling capability, which is educational but not safety-building. A leader who shares the attempt that did not work — 'I tried to use AI to draft a client proposal and the output was generic and unusable; here is what I learned about prompting for context-rich output' — is modelling the learning process that every observer is actually in.",
            "Sharing the learning process is more valuable to early-stage adopters than sharing the outcomes of mastered use, because early-stage adopters are in the process, not yet at the outcome.",
          ),
          s(" In public AI learning shares, spend at least as much time on what did not work as on what did. The obstacle is the most educational part of the story for most observers."),
        ],
        [
          s("The format of public learning shares should be chosen for accessibility, not for production quality. "),
          x(
            "A five-minute informal walkthrough of an AI tool use in a team meeting is more credible than a polished AI demonstration video produced by the communications team. The informality signals authenticity: this is how the leader actually works, not a produced performance. The accessibility signals that learning AI is a normal activity, not a technical achievement requiring specialist capability.",
            "The most effective formats are: live demonstration during an existing meeting (highest credibility, lowest production cost), a brief written reflection in a team communication channel (moderate credibility, very low cost), and a short informal video recorded in the normal work context (high credibility, low cost).",
          ),
          s(" Choose the lowest-production-cost format that is still visible to your target audience. High-production AI demonstrations from senior leaders are experienced as marketing, not learning."),
        ],
        [
          s("A structured public learning cadence — monthly is sufficient for senior leaders — creates an ongoing signal that AI learning is a continuous organisational norm. "),
          x(
            "A monthly AI learning share from the top three or four leaders in an organisation creates 12 shares per year from each — 36–48 signals of AI learning in progress, AI failures encountered and navigated, and AI capability growing. This cadence converts AI adoption from a one-time change initiative into a continuous organisational practice.",
            "The cadence also creates accountability: a leader who has committed to a monthly AI learning share will use AI actively each month to have something genuine to share. The public commitment to sharing drives the private behaviour of using.",
          ),
          s(" Commit to a monthly AI learning share and put it in your calendar — not as an aspiration but as a scheduled event. The scheduled commitment drives the behaviour."),
        ],
      ],
      examples: [
        {
          title: "Law firm — senior partner's learning share converts associates",
          body: "A law firm's senior partner — known for his exceptional manual contract analysis — shared a 6-minute story at a firm knowledge-sharing session: he had spent a week trying to use AI contract review to speed up his NDA review process. He described three approaches that had not worked, his frustration, what he had eventually figured out, and why the working approach required his legal expertise to prompt correctly. The share converted 14 associates who had been AI non-adopters — specifically because they had assumed that AI mastery required either technical knowledge or enthusiastic adoption, neither of which they had. The partner's story of struggle and learning had made the journey legible.",
        },
        {
          title: "Healthcare — CMO monthly AI share builds clinical culture",
          body: "A hospital's CMO established a monthly 'What I tried with AI this month' segment in the clinical leadership meeting — 3 minutes, no slides, informal narration. Over 12 months, the CMO shared 12 attempts: 7 were useful, 3 were interesting failures, and 2 were abandoned. The clinical leadership team's survey data showed a direct correlation between CMO share months and their own AI experimentation rates. The months with the highest quality CMO shares (high obstacle content, specific learning) had the highest downstream experimentation rates among department heads.",
        },
        {
          title: "Technology company — live AI learning in board meeting",
          body: "A technology company's CEO used a board meeting as a live AI learning moment: she attempted to use an AI data analysis tool to answer a board member's question in real time. The tool required three prompt revisions before producing a useful output. The CEO narrated each revision: 'That prompt was too broad; let me specify the time period' and 'The AI is focusing on the wrong comparison; let me redirect it.' The board observed 4 minutes of authentic AI learning. Three board members independently mentioned the demonstration as the most useful AI education they had received — not because it showed great AI, but because it showed how good AI use actually works.",
        },
      ],
    }),
    buildSection({
      number: "8.4",
      title: "When leaders fail with AI — modelling recovery",
      subtitle: "How leaders who handle AI failures publicly create safety and credibility simultaneously",
      take: "AI failures are inevitable for leaders who genuinely use AI. The question is not whether a leader will fail with AI, but whether their response to failure creates more safety and credibility than the failure costs. Leaders who handle AI failures with transparency, curiosity, and public learning convert failures into their most powerful adoption-building moments.",
      why: "The leader who fails publicly with AI and handles it well is more credible about AI's capabilities and limitations than any leader who only presents AI successes. The failure, handled well, is evidence that the leader genuinely engages with AI — not as a spokesperson but as a practitioner.",
      paragraphs: [
        [
          s("Public AI failure handling has three elements: immediate acknowledgement (naming the failure in real time without defensiveness), curious investigation (treating the failure as information, not as a problem to manage), and transparent narration (sharing what you learned from the failure and how you would do it differently). "),
          x(
            "Immediate acknowledgement: 'That output is not right — the AI has misunderstood the context I gave it.' Curious investigation: 'Let me see what it did with the input I provided... I see — I gave it the summary version rather than the underlying data. The AI worked with what I gave it.' Transparent narration: 'What I learned from this: AI requires the actual context, not the summary of the context. I will share this with anyone who uses this tool for this type of analysis.'",
            "All three elements are present in 90 seconds. They convert a public AI failure into a 90-second masterclass in AI collaboration quality — more educational than any structured training content.",
          ),
          s(" In your next public AI failure, resist the defensive impulse. Use the failure publicly as a teaching opportunity by narrating all three elements in real time."),
        ],
        [
          s("The most common leader failure response pattern — minimising the failure and moving past it quickly — is the least useful response for the organisation's learning. "),
          x(
            "'Let me come back to that offline' is a common AI failure response in public settings. It removes the failure from the public context quickly and efficiently. It also removes the learning opportunity, models avoidance behaviour, and creates the impression that AI failures are embarrassments rather than information.",
            "The cost of spending 90 seconds on a public AI failure response is low. The benefit — modelling what good AI failure handling looks like for every observer — is high. The 90 seconds is one of the highest-ROI moments in the leader's AI adoption programme.",
          ),
          s(" Practice the three-element failure response before you need to use it in public. A practised response is more natural and more effective than an improvised one."),
        ],
        [
          s("AI failure stories shared after the event — in communications, team meetings, or learning forums — have a long shelf life as adoption-normalising content. "),
          x(
            "A leader who shares an AI failure story two weeks after the event — 'I wanted to share something that happened in our board prep last week...' — creates a composed, reflective narrative that is more educational than the in-the-moment response. The post-event story can include the full arc: what happened, the immediate reaction, the investigation, and the lesson. This arc is the template that others follow when they encounter their own AI failures.",
            "AI failure stories from senior leaders become organisational folklore: they are repeated, discussed, and referenced in ways that success stories are not. The leader who shares their AI failures is investing in a narrative that outlasts any programme communication.",
          ),
          s(" After your next significant AI failure, write a brief narrative of the experience and share it with your team or your programme community. The post-event reflection story compounds the learning beyond the original moment."),
        ],
      ],
      examples: [
        {
          title: "Consulting firm — partner's failure story becomes programme folklore",
          body: "A consulting firm's managing partner described his experience at an all-hands: he had used AI to prepare a competitive intelligence summary for a major client pitch. The AI had confidently provided three market data points that were incorrect. He had caught two of them before the pitch; one had made it into the pitch document. The client had corrected it in the meeting. The partner described his response: curiosity about how the AI had produced confident incorrect data, a new personal protocol for verifying AI-generated market data, and a firm-wide protocol recommendation that followed. The story was shared by 67% of associates in a follow-up survey as 'the AI failure story I most remember' — cited specifically because it showed that even the managing partner encountered AI failures and the correct response was transparent investigation, not concealment.",
        },
        {
          title: "Healthcare — CMO public failure models clinical AI culture",
          body: "A hospital's CMO attempted to use AI clinical literature synthesis in a grand rounds session and encountered an AI output that cited a study with incorrect findings. The CMO responded: 'The AI has cited this study incorrectly — let me show you what the study actually found.' She pulled up the original study, demonstrated the discrepancy, and then said: 'This is why AI in clinical settings requires clinical judgment — the AI doesn't know the difference between a plausible output and an accurate one. I do, because I read this study. Our job is to bring that knowledge to the AI's output.' The live correction was cited by clinical staff in a follow-up survey as the most valuable AI education they had received.",
        },
        {
          title: "Financial services — CFO post-event failure narrative builds data culture",
          body: "A bank's CFO shared a written AI failure story in the internal monthly AI update: she had used an AI forecasting tool and trusted its output without reviewing the underlying assumptions. The forecast had been materially off because the AI had used pre-COVID baseline data for a seasonal adjustment. She described her investigation, her learning (always review AI assumption inputs, not just AI outputs), and the updated protocol she had established for her team. The narrative was the most-read item in the AI update's 18-month history. Three finance team members wrote to her saying it had changed how they verified AI-generated forecasts.",
        },
      ],
    }),
    buildSection({
      number: "8.5",
      title: "The three leader archetypes in AI transformation",
      subtitle: "Champion, sceptic, and sceptic-turned-champion — and how to work with each",
      take: "Every organisation has three leader archetypes in AI transformation: the Champion (enthusiastic and visibly active), the Sceptic (thoughtfully questioning, not yet convinced), and the Non-Participant (disengaged and passive). Each archetype has a different role to play and requires a different engagement strategy. The most valuable conversion in AI transformation is the Sceptic-turned-Champion — because a leader who thought carefully before endorsing is more credible than a leader who was enthusiastic from the start.",
      why: "Leaders who understand the archetype landscape in their organisation can invest engagement energy precisely: enabling Champions, converting Sceptics, and re-engaging Non-Participants. Treating all three archetypes the same — with the same communication and the same pressure — is the most common AI leadership engagement failure.",
      paragraphs: [
        [
          s("The Champion archetype is the programme's most visible enabler — and its most manageable risk. "),
          x(
            "Champions are valuable for early adoption momentum, peer advocacy, and quick win generation. They are at risk of overclaiming AI capability (creating promise gaps), moving faster than the organisation can follow (leaving mainstream adopters behind), and creating a social dynamic where AI enthusiasm is a loyalty signal rather than a genuine assessment.",
            "Managing Champions well requires redirecting their enthusiasm toward peer development and genuine adoption infrastructure — making them coaches and advocates rather than solo performers. The Champion who converts sceptics is more valuable than the Champion who impresses audiences.",
          ),
          s(" Redirect your Champions from performing AI capability to coaching AI adoption. The coaching role is higher leverage for the programme and more sustainable for the individual."),
        ],
        [
          s("The Sceptic archetype is the most undervalued resource in AI transformation — and the most often mismanaged. "),
          x(
            "Sceptics are not resisters — they are leaders who have not yet been convinced. They are often the most respected leaders in the organisation precisely because their endorsement is hard to earn. A Sceptic who becomes an AI Champion after genuine engagement is the most persuasive possible advocate — because the organisation watched them think it through.",
            "Sceptics are mismanaged when they are pressured rather than engaged. A Sceptic who is told 'you need to be more supportive of the AI programme' becomes a reluctant complier at best and an organised resister at worst. A Sceptic who is genuinely engaged with their specific concerns becomes a thoughtful advocate.",
          ),
          s(" List the three most influential Sceptics in your leadership team and invest in genuine, individual engagement with each — not communications targeted at Sceptics in aggregate."),
        ],
        [
          s("The Non-Participant archetype requires reframing before engagement can work. "),
          x(
            "Non-Participants are not sceptical — they are disengaged. The disengagement may be a signal of competing priorities, low perceived relevance, or insufficient clarity about what AI leadership requires of them specifically. Engagement begins with the relevance question: why does AI transformation matter specifically to this leader in their specific context?",
            "A Non-Participant who discovers that AI directly affects their function's performance metrics becomes a motivated participant quickly. The re-engagement is not a change management challenge — it is a relevance demonstration challenge.",
          ),
          s(" For Non-Participant leaders, lead with function-specific impact: what specific metric that this leader is accountable for will AI affect? The relevance question converts disengagement faster than general AI advocacy."),
        ],
      ],
      examples: [
        {
          title: "Financial services — champion redirected to coaching role",
          body: "A bank's AI Champion — a senior analyst who had been demonstrating AI tools in every team meeting and leadership forum — was creating a social dynamic where AI enthusiasm was being interpreted as performance. Colleagues who were less enthusiastic were becoming passive observers rather than adopters. The programme manager worked with the Champion to redirect his energy: instead of demonstrating AI capability, he ran a monthly AI coaching session for a rotating cohort of 10 analysts, helping each develop their personal AI practice. Cohort adoption rates after coaching sessions were 34 points higher than before. The Champion's impact had multiplied through coaching.",
        },
        {
          title: "Healthcare — sceptic-turned-champion creates clinical trust",
          body: "A hospital's Chief of Medicine was known for thoughtful scepticism about AI diagnostic tools — specifically concerned about bias in training data and liability for AI-assisted diagnoses. The programme lead engaged him individually: a three-hour session with the AI vendor's clinical validation team, a review of the specific bias testing the model had undergone, and a discussion of the liability framework the hospital had developed. The Chief of Medicine became a conditional supporter, publicly endorsing the tool with explicit conditions: 'I support this tool for clinical decision support in the specific cases where the training data is representative of our patient population. I will review the bias audit quarterly.' His conditional endorsement, grounded in specific analysis, was more credible to clinicians than any programme communications had been.",
        },
        {
          title: "Consulting firm — non-participant converted through relevance",
          body: "A consulting firm's most senior practice leader in the financial advisory practice was a Non-Participant in the AI programme — not resistant, simply disengaged. The programme lead reviewed the practice's performance data and found that AI-assisted financial modelling was directly reducing average engagement profitability in the practice (junior analysts with AI tools were completing at a lower margin than senior consultants without). A 30-minute meeting presenting this data to the practice leader converted him from non-participant to active sponsor within the week. He had not needed advocacy; he had needed relevance — a direct connection between AI adoption and a metric he was accountable for.",
        },
      ],
    }),
    buildSection({
      number: "8.6",
      title: "Building AI habits as a leadership team",
      subtitle: "How to create consistent AI practices across the leadership team that create an organisation-wide adoption norm",
      take: "Individual leader AI practice is valuable. A leadership team with shared AI habits is transformative. When all four or five members of a leadership team visibly use AI in consistent ways, the organisation receives a signal that AI is how leadership works — not how a particular leader happens to work. Building shared AI habits requires deliberate practice design and accountability structures.",
      why: "Leadership teams that develop shared AI habits create an AI adoption culture that is more resilient than any individual leader's practice — because it does not depend on any single person's energy, attention, or tenure. The collective habit persists through leadership changes, priority shifts, and transformation fatigue.",
      paragraphs: [
        [
          s("Shared AI habits in a leadership team are built through four elements: a common AI tool set, shared learning sessions, mutual accountability, and visible shared practice in leadership forums. "),
          x(
            "Common tool set: the leadership team uses the same AI tools for similar tasks — not because tools should be standardised but because shared tools allow shared learning and visible shared practice. Shared learning sessions: monthly 60-minute sessions where the leadership team shares what they are learning with AI — creating a peer community that accelerates individual practice. Mutual accountability: leadership team members hold each other accountable for using AI in agreed contexts. Visible shared practice: leadership team AI use in board meetings, client sessions, and all-hands events.",
            "The visible shared practice element is the most impactful for the organisation but the hardest to build — because it requires the team to practise using AI together, including with imperfect outputs, in high-stakes settings.",
          ),
          s(" Build leadership team AI habits through shared practice before requiring individual practice in high-stakes settings. The shared practice creates the confidence and the collective norm that makes individual performance in public AI use possible."),
        ],
        [
          s("Mutual accountability within the leadership team is the mechanism that sustains AI habits through competing priorities. "),
          x(
            "Without accountability, leadership AI habits are the first casualties of organisational urgency. A CFO who committed to monthly AI learning shares will miss the commitment in a busy quarter unless a peer checks in. The peer accountability structure — 'did you do your AI share this month? What did you learn?' — converts aspirational commitments to reliable behaviour.",
            "Peer accountability in leadership teams is culturally sensitive — leaders must have sufficient trust to hold each other accountable without creating status competition. A facilitator for the first three leadership AI sharing sessions can establish the norm before removing the structured support.",
          ),
          s(" Establish peer accountability pairs within the leadership team — two leaders who specifically check on each other's AI practice monthly. The pairing personalises the accountability and removes the awkwardness of unstructured peer challenge."),
        ],
        [
          s("Leadership team AI habit development has a 90-day cycle: commitment, practice, reflection, recalibration. "),
          x(
            "90-day commitment: the leadership team agrees on three specific AI habits to develop together (e.g., use AI for meeting preparation, share AI learning monthly, use AI in board reporting). 90-day practice: each leader practises the three habits with peer check-ins at 30 and 60 days. 90-day reflection: the team reviews what worked, what did not, and why. Recalibration: adjust the habits for the next 90-day cycle based on the reflection.",
            "The 90-day cycle prevents the habit development from either stalling (90 days is long enough to build genuine habits) or losing relevance (recalibration ensures the habits evolve with the team's growing AI capability).",
          ),
          s(" Design your leadership team AI habit development as a 90-day cycle with explicit commitments, peer accountability, and a group reflection at the end. The structure converts intention into practice."),
        ],
      ],
      examples: [
        {
          title: "Technology company — leadership AI habit cohort",
          body: "A technology company's five-person executive team committed to a 90-day AI habit cohort: all five would use AI in board preparation (common tool set: Microsoft Copilot for document synthesis), share one AI learning monthly (format: 3-minute informal narration in the exec team weekly meeting), and check in at day 45 on adoption. At day 90 reflection: all five had maintained the board preparation habit, three had maintained the monthly sharing, and two had fallen behind. The two leaders identified competing priorities as the cause. The recalibrated commitment for the next 90 days reduced the sharing frequency to every six weeks and added a peer accountability pair. All five maintained both habits in the second cycle.",
        },
        {
          title: "Financial services — visible shared practice in board setting",
          body: "A bank's leadership team prepared their first AI-assisted quarterly board presentation after 60 days of shared habit development. Four of the five C-suite members used AI tools in specific sections of the presentation — and the opening slide acknowledged the AI assistance with a brief explanation of which sections were AI-assisted and how the leadership team had reviewed and augmented the AI-generated content. The board's response was strongly positive: 'This is exactly the AI governance posture we want to see — using AI for efficiency and applying human judgment for accuracy.' The shared visible practice had created a governance demonstration that individual AI use could not have produced.",
        },
        {
          title: "Healthcare — peer accountability pair sustains habits through crisis",
          body: "A hospital's CMO and CHRO had committed to monthly AI learning shares as part of their leadership team habits. During a three-month period that included a significant clinical incident and two major regulatory reviews, the CMO missed two monthly shares due to the clinical workload. The CHRO — as peer accountability partner — sent a message at the beginning of the third month: 'I know it's been a hard three months. Your AI share still matters to the clinical team — even 2 minutes would help. Can you do it this week?' The CMO shared a 90-second verbal update in the monthly clinical leadership meeting. The shares had continued through the organisation's hardest period because the peer accountability structure had kept the habit alive.",
        },
      ],
    }),
    buildSection({
      number: "8.7",
      title: "Creating followership through AI leadership",
      subtitle: "How authentic AI leadership generates the voluntary followership that mandated adoption cannot produce",
      take: "There are two paths to AI adoption: mandate (adopt this tool or face consequences) and followership (watch someone lead well and want to follow). Mandate produces compliance. Followership produces genuine adoption. The distinction matters over the long term: mandate produces the minimum adoption that avoids consequences; followership produces the maximum adoption that the value of AI can generate.",
      why: "Business leaders who create followership through their AI leadership practice produce adoption that compounds: each person who follows becomes a potential advocate who creates their own followers. The adoption cascade from genuine followership is exponential; the adoption from mandate is linear and capped at the minimum.",
      paragraphs: [
        [
          s("Followership in AI adoption is created by three leader qualities: competence (they are genuinely skilled, not performing), authenticity (they use AI in ways that are genuine, not staged), and generosity (they share their learning rather than hoarding competitive advantage). "),
          x(
            "Competence and authenticity are established through the behaviours described in earlier sections: genuine visible AI use, public learning including failures, honest uncertainty acknowledgement. Generosity is the additional quality that creates followership rather than admiration: a leader who shares their AI approaches, prompts, and tools with their team creates a community of learners rather than a group of observers.",
            "Generosity in AI leadership is counterintuitive for leaders in competitive environments. Sharing AI techniques can feel like surrendering competitive advantage. In practice, it creates competitive advantage: a team that learns together becomes more collectively capable than any individual practitioner.",
          ),
          s(" Actively share your AI prompts, approaches, and discoveries with your team. The generosity creates a learning culture that makes the whole team more capable — which is more valuable than any individual advantage from hoarding techniques."),
        ],
        [
          s("Followership requires the leader to be on the same learning journey as those they lead — not ahead of it by a distance that makes following impossible. "),
          x(
            "A leader who is six months ahead of their team in AI proficiency is inspiring — their practice shows what the team can become. A leader who is 18 months ahead of their team is intimidating — their practice seems unattainable. The optimal following distance is one where the leader's current practice is visible as the learner's near-term destination, not a distant aspiration.",
            "Leaders who are significantly ahead of their teams can create following distance by deliberately sharing their earlier learning journey — the 'where I was six months ago' story — rather than only their current practice. The earlier journey story is closer to where the follower is, making the leader's example more followable.",
          ),
          s(" Share your AI learning journey, including earlier stages that are closer to where your followers currently are. Your current proficiency is aspirational; your earlier learning is followable."),
        ],
        [
          s("The transition from AI leadership to AI culture is complete when the organisation no longer needs the leader to model. "),
          x(
            "In a mature AI culture, peer modelling has replaced leader modelling as the primary adoption signal: team members share AI approaches with each other, celebrate each other's AI learning, and hold each other accountable for AI practice without needing the leader to initiate. The leader's role shifts from model to steward — ensuring the culture continues to develop and protecting the safety conditions that allow it to thrive.",
            "Recognising this transition — and celebrating it — is itself a leadership act. A leader who publicly acknowledges that the organisation's AI practice has moved beyond their personal level models the humility that sustains the culture.",
          ),
          s(" Watch for the transition moment when peer AI sharing exceeds leader AI sharing in your team. When you observe it, name it and celebrate it — the culture has become self-sustaining."),
        ],
      ],
      examples: [
        {
          title: "Consulting firm — prompt sharing creates learning community",
          body: "A consulting firm's practice leader began sharing his AI prompt library with his team — a document of prompts he had developed for the practice's most common analysis tasks, including notes on when each worked well and when it failed. The document became the most-accessed resource in the practice's knowledge management system within two months. Team members began adding their own prompts and notes, converting the leader's individual prompt library into a collective learning resource. The leader's generosity had seeded a community learning dynamic that far exceeded any individual benefit.",
        },
        {
          title: "Healthcare — CMO's earlier journey story creates followable path",
          body: "A hospital's CMO who had been using AI clinical tools for 18 months shared a structured reflection with the clinical staff: 'Eighteen months ago, I didn't use AI at all. Here are the five things I did in the first six weeks that got me from zero to useful.' The five steps — simple, specific, and within everyone's reach — were documented in a one-page guide distributed to all clinical staff. The guide produced more AI trial attempts in the two weeks after distribution than any previous communications. The CMO's earlier journey story had created a followable path that her current practice could not.",
        },
        {
          title: "Financial services — culture transition celebrated",
          body: "A bank's AI programme lead observed in month 14 that the analysts' Slack community had more daily AI tips being shared peer-to-peer than the programme team was publishing officially. He brought this data to the monthly leadership team meeting: 'We have reached a transition point. The team's AI sharing activity has exceeded our programme content. The culture is self-sustaining.' The CEO's response — 'This is the best AI programme news I have heard in 14 months' — was shared with the entire team. The celebration of the culture transition became itself a culture-strengthening moment: the organisation recognised its own achievement and reinforced the behaviours that had created it.",
        },
      ],
    }),
    buildSection({
      number: "8.8",
      title: "BL decision lens: your personal AI leadership practice",
      subtitle: "A five-element practice framework that every business leader should have before the next AI programme review",
      take: "A personal AI leadership practice is not a productivity exercise — it is a programme investment. Five elements constitute a complete practice: regular personal AI tool use, a visible sharing cadence, a failure response protocol, an archetype engagement plan, and a leadership team habit cohort. A leader who has all five is doing more for AI adoption than any programme activity that does not involve their personal behaviour.",
      why: "The investment in personal AI leadership practice is almost always less than one hour per week — typically 20–30 minutes of AI tool use and 10 minutes of sharing or reflection. The return is a multiplication effect on organisation-wide adoption that no other investment of equivalent time can produce.",
      paragraphs: [
        [
          s("Element 1 — Personal AI tool use: which specific tools will you use, in which contexts, and how frequently? "),
          x(
            "Personal AI tool use must be specific to be a real practice. 'I will use AI more' is not a practice. 'I will use AI meeting preparation for every direct report meeting (weekly), AI competitor briefing for every leadership team meeting (monthly), and AI document synthesis for every board preparation (quarterly)' is a practice. The specificity creates the habit that visibility then makes influential.",
            "The tools chosen should be in the domains the leader cares about — not the tools being promoted in the programme. A CFO who uses AI for financial analysis is a more credible AI advocate to the finance function than a CFO who uses AI for a communications task chosen to demonstrate programme support.",
          ),
          s(" Choose AI tools that genuinely help your own work. A practice built on tools that improve your personal productivity is more sustainable and more authentic than a practice built on tools chosen for programme visibility."),
        ],
        [
          s("Elements 2–4 — Sharing cadence, failure response, and archetype plan: how will you share learning, respond to failure, and engage the three leader archetypes in your organisation? "),
          x(
            "Sharing cadence: a specific format, frequency, and audience for your AI learning shares. Failure response: a pre-practised three-element response (acknowledge, investigate, narrate) so that public AI failures become learning moments rather than managed embarrassments. Archetype plan: a specific engagement strategy for each of the three or four most influential Champions, Sceptics, and Non-Participants in your leadership team.",
            "The archetype plan is the most frequently neglected element of personal AI leadership practice — because it requires thinking about specific colleagues rather than general programme activities. The specificity is its value.",
          ),
          s(" Write the names of your top Champions, Sceptics, and Non-Participants and the specific engagement action for each. Archetype engagement without specific names and actions is a category, not a plan."),
        ],
        [
          s("Element 5 — Leadership team habit cohort: what is your plan for building shared AI habits with your direct leadership team? "),
          x(
            "The leadership team cohort plan specifies: the three shared AI habits to develop in the next 90 days, the peer accountability structure, the shared learning session cadence, and the 90-day reflection design. It is the mechanism that converts individual leadership practice into collective leadership culture.",
            "The cohort plan does not require the entire leadership team to be enthusiastic AI adopters from day one. It requires three or four engaged peers who are willing to try. The cohort builds momentum; the enthusiasm follows the momentum.",
          ),
          s(" Identify three peers in your leadership team who would join an AI habit cohort and propose the 90-day structure to them directly. An informal conversation with three colleagues is how every successful leadership cohort begins."),
        ],
      ],
      examples: [
        {
          title: "Technology company — five-element practice produces measurable impact",
          body: "A technology company's COO built a complete five-element AI leadership practice: AI use in all staff communications and operational reviews (3 tools, specific contexts), monthly AI learning share in the ops leadership meeting, practised failure response used three times in the first quarter, individual engagement with two Champions and one Sceptic in her leadership team, and a 90-day habit cohort with four senior operations managers. At six months, her function's AI adoption rate was 74% — the highest in the company. The programme team's attribution analysis identified her personal practice as the primary adoption driver, accounting for 40% of the variance between her function's adoption and the company average.",
        },
        {
          title: "Financial services — archetype plan converts key Sceptic",
          body: "A bank's programme lead identified one CFO as a critical Sceptic: analytically rigorous, respected by all programme sponsors, and not yet convinced of AI value in finance. The engagement plan was specific: a private 90-minute session showing AI's performance specifically on the three financial analysis tasks the CFO valued most, using real finance data the CFO recognised, and including the AI failure cases from each analysis. The specificity of the demonstration — not the programme's general AI capability case — converted the CFO. His subsequent public endorsement ('I was not convinced until I saw it work on our actual numbers') was cited by finance team members as the most persuasive AI communication they had received.",
        },
        {
          title: "Healthcare — cohort plan launch conversation",
          body: "A hospital CMO identified three department heads willing to participate in a 90-day AI habit cohort through individual conversations: 'I want to build a better AI practice and I think we should do it together. Would you join me for 90 days? I'm proposing three habits, monthly peer sharing, and a check-in at day 45.' All three agreed. The cohort's shared habit of using AI for weekly team meeting preparation — visible in their respective departments — produced an adoption increase in all three departments that was measurably higher than the four departments whose leaders were not in the cohort.",
        },
      ],
    }),
  ],
  quiz: [
    {
      q: "Why is leader AI behaviour a more powerful adoption signal than leader AI communication?",
      options: [
        "Communication reaches more people than behaviour can influence",
        "Behaviour signals authenticity and operates through permission, competence, and priority simultaneously — whereas communication can be disbelieved",
        "Leaders communicate more frequently than they can behave consistently",
        "AI communication is technically complex and difficult for non-technical leaders to produce",
      ],
      correct: 1,
      correctFeedback:
        "Correct. Leader AI behaviour signals authenticity across three channels — permission (it must be acceptable if the leader does it), competence (if the leader can learn it, I can), and priority (this matters because the leader invests time in it). Communication can be disbelieved; observed behaviour cannot.",
      wrongFeedback:
        "Leader AI behaviour signals three things simultaneously: permission (it is acceptable), competence (it is learnable), and priority (it matters enough to invest time in). Communication conveys information; behaviour creates culture. The employee who observes their leader genuinely using AI receives a more credible and more motivating signal than any communication provides.",
    },
    {
      q: "What is the most common leader failure response pattern — and why is it the least useful for AI adoption?",
      options: [
        "Overclaiming the AI's capability after a failure to maintain confidence",
        "Minimising the failure and moving past it quickly — removing the learning opportunity and modelling avoidance",
        "Assigning the failure to the AI vendor without personal accountability",
        "Conducting a detailed technical analysis that is not accessible to the audience",
      ],
      correct: 1,
      correctFeedback:
        "Correct. 'Let me come back to that offline' is the most common AI failure response in public settings. It efficiently removes the failure from public view — and simultaneously removes the learning opportunity, models avoidance behaviour, and treats AI failures as embarrassments rather than information. A 90-second public investigation is more valuable than 30 seconds of graceful deflection.",
      wrongFeedback:
        "Minimising and moving on quickly is the most common response because it is the most socially comfortable. It is also the least useful because it removes exactly the learning content — what went wrong, why, and how to approach it differently — that observers most need to see.",
    },
    {
      kind: "categorize",
      q: "Match each leader archetype to the correct engagement strategy:",
      categories: ["Champion", "Sceptic", "Non-Participant"],
      items: [
        { text: "Redirect from solo performance to peer coaching and advocacy", category: 0 },
        { text: "Invest in genuine individual engagement with their specific concerns", category: 1 },
        { text: "Lead with function-specific impact — what metric does AI directly affect for them?", category: 2 },
        { text: "Involve them in AI governance quality roles that leverage their analytical rigor", category: 1 },
        { text: "Enable as a visible peer role model for the organisation", category: 0 },
        { text: "Identify two to three leaders who might join an AI habit cohort as a starting point", category: 2 },
      ],
      correctFeedback:
        "Correct. Champions need redirection to sustainable, high-leverage activities. Sceptics need genuine individual engagement — not pressure. Non-Participants need relevance demonstration before any other engagement can work. Applying the same engagement to all three archetypes is the most common AI leadership engagement failure.",
      wrongFeedback:
        "Each archetype requires a fundamentally different engagement approach. Champions: redirect to coaching. Sceptics: individual genuine engagement with their specific concerns. Non-Participants: relevance demonstration before anything else. The single most valuable conversion is the Sceptic-turned-Champion because their endorsement is credible in ways that enthusiastic early support is not.",
    },
    {
      q: "What are the four elements that build shared AI habits in a leadership team?",
      options: [
        "Vision alignment, training completion, tool standardisation, and performance measurement",
        "Common AI tool set, shared learning sessions, mutual accountability, and visible shared practice in leadership forums",
        "Executive sponsorship, change management, communications, and governance",
        "Risk management, compliance review, ethics policy, and deployment governance",
      ],
      correct: 1,
      correctFeedback:
        "Correct. The four elements are: common tool set (shared tools enable shared learning and visible shared practice), shared learning sessions (peer community accelerates individual practice), mutual accountability (sustains habits through competing priorities), and visible shared practice in leadership forums (creates organisation-wide AI culture signal).",
      wrongFeedback:
        "Shared leadership AI habits require: common AI tool set, shared learning sessions, mutual peer accountability, and visible shared practice in leadership forums. Together, these four elements convert individual AI practice into collective leadership culture that signals organisation-wide that AI is how leadership works.",
    },
    {
      kind: "order",
      q: "Order the five elements of a personal AI leadership practice:",
      items: [
        "Regular personal AI tool use — specific tools, contexts, and frequency",
        "Visible sharing cadence — format, frequency, and audience for learning shares",
        "Failure response protocol — practised three-element response for public AI failures",
        "Archetype engagement plan — specific actions for Champions, Sceptics, and Non-Participants",
        "Leadership team habit cohort — 90-day shared habit structure with peer accountability",
      ],
      prompt: "Drag to arrange in the correct sequence",
      correctFeedback:
        "Correct. The sequence builds from personal practice to visible sharing to failure readiness to team engagement to collective culture. Personal practice must come first — without genuine personal AI use, the sharing has no content, the failure response has no context, and the cohort has no leader who is practising.",
      wrongFeedback:
        "Personal AI practice is the foundation: without genuine personal tool use, no other element is authentic. Sharing follows — it requires something genuine to share. Failure response preparation follows — once you are using AI publicly, failure readiness matters. Archetype engagement follows — once you are practising, you can engage others genuinely. The cohort is the culmination that converts individual practice into collective culture.",
    },
    {
      q: "What is the signal that a leader's AI modelling has created a self-sustaining AI culture in their organisation?",
      options: [
        "AI adoption rate exceeds the programme's target utilisation benchmark",
        "Peer AI sharing and learning among team members exceeds leader-initiated sharing",
        "The AI programme budget has been absorbed into the standard operating budget",
        "The AI vendor relationship has been transferred from programme management to IT",
      ],
      correct: 1,
      correctFeedback:
        "Correct. When peer AI sharing exceeds leader-initiated sharing, the culture has become self-sustaining: the adoption signal is no longer dependent on the leader's personal behaviour but is perpetuated by the community that leader modelling created. This is the transition from AI leadership to AI culture.",
      wrongFeedback:
        "The culture transition is signalled when peer sharing exceeds leader sharing — when team members are sharing AI learning with each other without waiting for the leader to model. This self-sustaining peer culture is the goal of AI leadership modelling, not a byproduct of it.",
    },
  ],
});
