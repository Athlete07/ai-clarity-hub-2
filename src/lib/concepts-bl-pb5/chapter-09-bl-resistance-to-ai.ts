import { BL_CALLOUT, buildChapter, buildSection, s, x } from "../concepts-bl-helpers";

export const chapter09BlResistanceToAi = buildChapter({
  slug: "bl-resistance-to-ai",
  number: 9,
  shortTitle: "Resistance to AI",
  title: "Understanding and Responding to Resistance to AI",
  readingMinutes: 25,
  summary:
    "AI resistance is not a character flaw in employees — it is a rational response to genuine uncertainty, and it must be treated as evidence, not as an obstacle. The most common leadership mistake in managing AI resistance is attempting to overcome it through persuasion, mandate, or social pressure. Resistance that is overcome through pressure does not disappear — it goes underground, producing passive non-compliance that is far more damaging to AI adoption than explicit resistance. The most effective approach is diagnosing the type of resistance first and then designing a targeted response.",
  keyTakeaway:
    "AI resistance has three distinct sources — fear-based, capability-based, and values-based — and each requires a different response. Fear-based resistance requires honest communication about job impact. Capability-based resistance requires targeted training and supervised practice. Values-based resistance requires genuine dialogue about AI ethics, bias, and the limits of AI in high-stakes decisions. Conflating the three sources and applying a single solution produces responses that are effective for one type and counterproductive for the others.",
  pmCallout: BL_CALLOUT,
  sections: [
    buildSection({
      number: "9.1",
      title: "The sources of AI resistance in organisations",
      subtitle: "Why employees resist AI and why their reasons are usually rational",
      take: "AI resistance originates from three sources that require different responses: fear (job security, status loss, uncertainty), capability (inability to use AI effectively, fear of looking incompetent), and values (ethical concerns about AI, distrust of AI's objectivity, concern about AI replacing human judgement in consequential decisions). Most AI adoption programmes address only the first source and in doing so miss the 40–60% of resistance that comes from capability and values sources.",
      why: "Leaders who treat all resistance as fear-based resistance apply communications solutions (reassurance, leadership endorsement, positive messaging) to capability and values problems — which produces no change in the resistant behaviour. Diagnosing resistance source before designing the response is the difference between targeted and wasteful intervention.",
      paragraphs: [
        [
          s("Fear-based resistance is the most visible and emotionally charged form of AI resistance. "),
          x(
            "Fear-based resistance manifests as: refusal to engage with AI tools, expressing public scepticism about AI value, and actively discouraging colleagues from AI adoption. The underlying driver is not always job security — it can also be fear of becoming irrelevant, fear of being evaluated against AI output rather than human expertise, or fear of the speed of change in an area where the employee has built significant mastery.",
            "The diagnosis question for fear-based resistance: 'Is this employee's behaviour explained by what they believe will happen to them personally if AI succeeds?' If yes, the source is fear and the response is direct, honest communication about personal impact — not performance management or training.",
          ),
          s(" Do not mandate AI use for employees with unaddressed fear-based resistance. Mandated use of a feared tool produces compliance without adoption and resentment that outlasts the mandate."),
        ],
        [
          s("Capability-based resistance is the least visible form and the most often misdiagnosed as fear or values-based resistance. "),
          x(
            "Capability-based resistance manifests as: avoiding AI tool use without explicitly opposing it, completing work tasks through non-AI methods despite AI being available, and expressing vague criticisms of AI quality rather than specific concerns. The underlying driver is the employee's knowledge that they cannot use the AI tool effectively — and their desire to avoid exposing this inability to their manager or colleagues.",
            "The diagnosis question for capability-based resistance: 'If this employee had full confidence in their ability to use the AI tool well, would their resistance disappear?' If yes, the source is capability and the response is targeted training and supervised practice — not communication or values dialogue.",
          ),
          s(" Provide capability-resistant employees with a safe learning environment where AI tool use errors are confidential coaching opportunities, not performance observations."),
        ],
        [
          s("Values-based resistance is the most intellectually legitimate form of AI resistance and the one most likely to be dismissed by leaders as obstruction. "),
          x(
            "Values-based resistance manifests as: specific, reasoned objections to AI use in particular contexts (a doctor who believes AI diagnostic tools should not be used without full patient history review, a lawyer who believes AI-generated legal positions risk undermining professional accountability, a teacher who believes AI assessment of student work reduces the relational intelligence required for effective teaching).",
            "Values-based resistance frequently identifies genuine AI deployment risks that leaders have not considered. The tendency to dismiss it as obstruction is a risk management failure. An employee who raises legitimate ethical concerns about AI and is told to 'just use the tool' creates the conditions for exactly the type of AI deployment failure that makes the news.",
          ),
          s(" Treat values-based resistance as evidence until proven otherwise. Address the specific concern before concluding it is unfounded."),
        ],
      ],
      examples: [
        {
          title: "Financial services — misdiagnosed capability resistance",
          body: "A bank's senior credit analyst consistently avoided using the new AI credit risk tool, expressing vague concerns about 'model reliability.' The change team classified the resistance as fear-based and scheduled a leadership communication session. The resistance did not change. A conversation with the analyst's manager revealed the analyst had completed the training module but had not understood the tool's interface — a capability issue masked by the vague criticism. A 2-hour one-to-one coaching session resolved the interface confusion. The analyst became one of the tool's strongest advocates within 4 weeks.",
        },
        {
          title: "Healthcare — values resistance identified valid risk",
          body: "A senior clinical consultant resisted deploying an AI diagnostic support tool for cancer screening, citing concerns that AI recommendations would be acted on by junior clinicians without senior review. The change team initially classified this as values-based obstruction. Investigation revealed the consultant's concern was accurate: the tool's design did not require senior review before action, and the clinical protocols did not specify review requirements for AI-assisted diagnoses. The consultant's resistance prevented a deployment that would have created a clinical governance gap. The tool was redeployed with mandatory senior review protocols. The consultant became a supporter.",
        },
        {
          title: "Retail — fear-based resistance addressed directly",
          body: "A buying team's senior manager resisted AI demand forecasting, expressing scepticism about model accuracy. The change team suspected fear-based resistance related to the manager's longstanding mastery in manual forecasting. The manager was invited to a direct conversation about the AI programme's intent: 'We are not replacing your forecasting judgement — we are trying to reduce the data preparation work that takes 8 hours of your week so you can apply your experience to the decisions that matter most.' The manager disclosed that they had been concerned AI would make their 20 years of domain expertise irrelevant. The direct conversation, which took 45 minutes, produced more attitude change than 4 months of programme communications.",
        },
      ],
    }),
    buildSection({
      number: "9.2",
      title: "Fear-based vs capability-based resistance",
      subtitle: "The diagnostic conversation that identifies which type of resistance you are dealing with",
      take: "Distinguishing fear-based from capability-based resistance requires a structured diagnostic conversation, not assumption. The two types often look identical in surface behaviour (avoiding AI use, expressing scepticism, finding reasons not to use the tool) but require opposite responses. Fear-based resistance responds to communication; capability-based resistance responds to training. Applying communication to capability-based resistance and training to fear-based resistance both produce no change — and months of wasted intervention effort.",
      why: "Misdiagnosis is the primary reason AI resistance interventions fail. A manager who assumes all AI resistance is fear-based will commission a leadership communications programme for employees who need a 2-hour coaching session. The communications produce no change, the manager concludes the employee is intractably resistant, and the adoption failure continues.",
      paragraphs: [
        [
          s("The three-question diagnostic conversation identifies the resistance source in 10–15 minutes. "),
          x(
            "Question 1: 'If you were guaranteed that using this AI tool would not affect your job security or performance evaluation, would you use it?' If yes, the source is likely fear-based. If no, proceed to Question 2. Question 2: 'If you had a dedicated 2-hour session with a coach helping you use the tool on your actual work, would you feel confident using it after that?' If yes, the source is likely capability-based. If no, proceed to Question 3. Question 3: 'Is there something specific about how this AI tool works or what it is being used for that concerns you on principle?' A yes answer and a specific concern identifies values-based resistance.",
            "The diagnostic conversation should be conducted by the employee's direct manager, not by the change team. The manager relationship provides the psychological safety required for honest answers. Change team-conducted diagnostics produce socially acceptable answers.",
          ),
          s(" Train managers in the three-question diagnostic conversation before any resistance intervention is deployed."),
        ],
        [
          s("Fear-based and capability-based resistance have different symptom profiles that allow provisional diagnosis before the conversation. "),
          x(
            "Fear-based indicators: the employee expressed positive interest in AI before their role's AI impact became clear; resistance emerged or intensified after a specific event (layoff announcement, org restructure, productivity target announcement); the employee's resistance language focuses on AI's impact ('AI is going to change everything') rather than AI's quality ('this AI isn't accurate enough'). Capability-based indicators: the employee has been trained but avoids the tool; criticism focuses on tool complexity rather than AI value; the employee uses workarounds that achieve similar outcomes through manual methods.",
            "Symptom profiles enable provisional diagnosis before the conversation — allowing the manager to frame the conversation appropriately rather than arriving without any working hypothesis.",
          ),
          s(" Use symptom profiles to form a working hypothesis before the diagnostic conversation. A hypothesis helps the manager ask better questions."),
        ],
        [
          s("Mixed resistance profiles — fear plus capability — are more common than pure profiles and require sequenced responses. "),
          x(
            "An employee who is simultaneously anxious about job security and unable to use the AI tool effectively is experiencing compounded resistance. Addressing only the fear — through communication — leaves the capability gap unresolved. Addressing only the capability — through training — does not reduce the anxiety that is still impeding engagement with the training. The sequenced response: address fear first (communication about job impact), then address capability (targeted training and practice).",
            "An employee who is anxious and incapable cannot learn effectively. Anxiety reduces working memory and learning efficiency. Reducing anxiety enough to clear the path for learning is the prerequisite for capability development, not a separate track.",
          ),
          s(" For mixed resistance profiles, always address fear before capability. Anxious employees cannot learn effectively."),
        ],
      ],
      examples: [
        {
          title: "Insurance — diagnostic conversation",
          body: "A claims manager trained 12 team managers in the 3-question diagnostic conversation for the AI claims processing rollout. In 31 diagnostic conversations, provisional diagnoses before the conversation matched post-conversation diagnoses in 26 cases (84%). The 5 cases where the diagnostic conversation changed the provisional diagnosis: 4 were fear misdiagnosed as values (the employees' values concerns dissolved when job security was addressed), 1 was capability misdiagnosed as fear (the employee's anxiety was entirely about looking incompetent, not about job security). The 5 misdiagnoses were prevented from becoming month-long failed interventions.",
        },
        {
          title: "Healthcare — fear symptom profile",
          body: "A hospital department's AI documentation tool rollout encountered resistance from 3 senior nurses who had been enthusiastic early in the programme. The change team noted the timing: resistance intensified in the week following an announcement that 2 administrative roles in the department would be consolidated. Provisional diagnosis: fear-based (emergence after a specific event, language focused on AI impact rather than quality). The three diagnostic conversations confirmed fear-based resistance — all three nurses were concerned that the AI documentation tool was a precursor to further role changes. A direct conversation with the ward manager about the scope of the programme resolved the resistance in all three cases within 2 weeks.",
        },
        {
          title: "Manufacturing — mixed profile sequencing",
          body: "A production supervisor had both significant anxiety about AI in the quality inspection process (job security concern) and genuine inability to use the AI quality tool (had missed the training due to shift patterns). The change manager sequenced responses: first, a direct conversation with the plant manager about job impact (resolved the anxiety over 2 sessions), then a dedicated catch-up training session with a practitioner coach. The supervisor completed training in week 7 (3 weeks after the anxiety was resolved). Attempting training in week 4 (before the anxiety conversation) had produced a session where the supervisor could not retain basic tool navigation — confirmation that anxious employees cannot learn effectively.",
        },
      ],
    }),
    buildSection({
      number: "9.3",
      title: "The four resistance profiles and how to respond",
      subtitle: "From anxious avoiders to principled objectors — a response framework for each profile",
      take: "Resistance is not binary — it exists on a spectrum with four profiles: the Anxious Avoider (avoids AI due to fear of job impact, responds to honest communication), the Capability-Blocked (avoids AI due to inability, responds to confidential coaching), the Principled Objector (refuses AI on ethical or professional grounds, responds to substantive dialogue and modified deployment), and the Active Resistor (actively undermines AI adoption, requires performance management after other sources are ruled out). Each profile needs a different response; conflating them produces responses that are effective for one profile and damaging for others.",
      why: "Business leaders who manage resistance as a single phenomenon — escalating through communication, training, and then performance management sequentially for all resistors — waste months on responses that do not match the profile. The profile determines the response; the response determines the outcome.",
      paragraphs: [
        [
          s("The Anxious Avoider: avoids AI use, expresses vague scepticism, is anxious when AI is discussed in team settings. "),
          x(
            "Response: a direct, private conversation with the direct manager addressing job impact honestly. Content: which aspects of the employee's role will change, which will not, what new opportunities the change creates, and what support is available. Format: 45–60 minute conversation, not a communication cascade or a group briefing. Follow-up: a check-in conversation 2 weeks later to address any questions that have emerged since the first conversation.",
            "The Anxious Avoider does not need more communications — they need a specific, honest conversation about their specific situation. Generic communications make Anxious Avoiders more anxious because the gap between general reassurance and personal reality amplifies their uncertainty.",
          ),
          s(" The Anxious Avoider's manager must be willing to have an honest conversation about job impact — including honest uncertainty where it exists. False reassurance makes the anxiety worse."),
        ],
        [
          s("The Capability-Blocked: uses workarounds to avoid AI tools, complains about complexity or poor interface, asks frequent helpdesk questions without progressing. "),
          x(
            "Response: confidential one-to-one coaching with a practitioner, away from peers, using the employee's actual work tasks. Confidentiality is essential — Capability-Blocked employees are typically high-performers who are ashamed of their inability to use a new tool. A group training or help session exposes their gap to colleagues, which increases avoidance.",
            "The Capability-Blocked employee often responds very quickly to targeted coaching — their resistance is based on not knowing how to use the tool, which is a solvable problem. Managers who identify Capability-Blocked employees early and provide private coaching typically resolve the resistance in 1–3 sessions.",
          ),
          s(" Use one-to-one confidential coaching for Capability-Blocked employees. Group settings intensify their shame and avoidance."),
        ],
        [
          s("The Principled Objector: articulates specific concerns about AI ethics, bias, autonomy, or risk; does not generalise their resistance to all AI use. "),
          x(
            "Response: a substantive dialogue that takes the concern seriously, investigates whether it identifies a genuine deployment risk, and either resolves the concern with evidence or modifies the deployment to address it. The goal is not to overcome the objection — it is to determine whether the objection is valid. If valid, the deployment should be modified. If not valid, the resolution must be evidential, not political.",
            "The Principled Objector is the AI resistance profile that business leaders most need to engage carefully. They have a 30–40% probability of identifying a genuine deployment risk. Dismissing them produces both a missed risk and an employee who escalates to external channels (regulatory, union, media).",
          ),
          s(" Treat every Principled Objector's concern as a potential deployment risk until an evidential review concludes otherwise."),
        ],
      ],
      examples: [
        {
          title: "Operations — Anxious Avoider conversation template",
          body: "An operations director provided team managers with a 4-element conversation template for Anxious Avoider conversations: (1) Acknowledge: 'I understand you have some concerns about what AI means for your role — I want to talk about that specifically.' (2) Be honest about change: 'Your role will change in these specific ways...' (3) Be honest about security: 'My commitment is that...' (4) Clarify opportunity: 'What this change opens up for you is...' Of 22 Anxious Avoider conversations conducted using the template, 18 resulted in resolved resistance within 4 weeks. The 4 unresolved cases were reclassified as mixed profiles (fear plus capability) and received sequenced responses.",
        },
        {
          title: "Financial services — Capability-Blocked confidential coaching",
          body: "A senior relationship manager at a bank had been avoiding the new AI client analytics tool for 2 months. The manager identified the Capability-Blocked profile (using workarounds, declining help from colleagues). A confidential coaching arrangement was made with an AI practitioner: 3 × 90-minute sessions in a private office using the manager's actual client accounts. By session 2, the manager was using the tool competently. By session 3, they had identified a use case (client meeting preparation) that the practitioner had not thought of. The manager's resistance had nothing to do with fear — they were one of the bank's highest performers and had been embarrassed by their initial inability to use the tool.",
        },
        {
          title: "Healthcare — Principled Objector identifies real risk",
          body: "A hospital trust's palliative care lead objected to deploying an AI patient trajectory tool in their ward. Specific concern: 'AI mortality predictions will be accessed by junior clinical staff before family conversations have taken place, causing premature or inappropriate disclosures.' The change team investigated and confirmed the concern was valid — the tool's data access was not role-segmented. Access was modified to senior clinicians only before ward deployment. The palliative care lead became a supporter and led the ward's adoption programme after the modification.",
        },
      ],
    }),
    buildSection({
      number: "9.4",
      title: "Addressing job displacement anxiety directly",
      subtitle: "The honest communication approach that reduces anxiety more effectively than reassurance",
      take: "Job displacement anxiety is the most common source of AI resistance and the source most poorly handled by change management teams that default to reassurance. Reassurance — 'AI won't replace your job,' 'AI is a tool to help you, not replace you' — fails because employees do not believe it, not because it is always wrong. Honest, specific communication about job impact — including the genuine uncertainty — reduces anxiety more effectively than repeated reassurance.",
      why: "The trust gap in AI change communication is not between employees and AI — it is between employees and their organisation. Employees who have experienced previous 'efficiency programme' communications that preceded redundancies have learned that reassuring messages about technology are unreliable. Rebuilding communication credibility requires a level of honesty that makes many leaders uncomfortable.",
      paragraphs: [
        [
          s("Honest communication about job displacement has three components: what will change, what will not, and what is genuinely uncertain. "),
          x(
            "The third component — what is genuinely uncertain — is the one most commonly omitted. Leaders who acknowledge uncertainty ('we do not yet know whether this AI capability will affect headcount in the X department — we will know more in 12 months when we have seen the tool's operational impact') reduce anxiety more effectively than leaders who provide certainty that employees do not believe.",
            "Acknowledged uncertainty is more credible than false certainty. An employee who is told 'I do not know yet, but I commit to telling you as soon as I do know' feels more respected than an employee told 'your job is completely safe' — which they do not believe and which will damage trust if it later proves incorrect.",
          ),
          s(" In every AI job impact communication, include an explicit section on what is genuinely uncertain, and a commitment to communicate when the uncertainty is resolved."),
        ],
        [
          s("Role evolution framing is more accurate and more credible than 'AI won't replace you' framing. "),
          x(
            "Most AI deployments do not eliminate roles — they eliminate specific tasks within roles and create new tasks that require human capability. A framing that describes the role evolution accurately ('your role will shift from spending 60% of your time on data preparation to spending 60% of your time on analysis and interpretation') is both truer and more credible than a generic assurance that AI is a tool not a replacement.",
            "Role evolution framing requires business leaders to have done the analysis. A leader who can describe specifically which tasks in a role will be affected has done the work to understand the change. A leader who provides general reassurance has not.",
          ),
          s(" Before any AI job impact communication, complete a role evolution analysis that specifies which tasks change, which do not, and what new tasks emerge. This is the content of honest communication."),
        ],
        [
          s("Long-term AI impact should be separated from immediate deployment impact in communications. "),
          x(
            "Employees who fear that the current AI deployment is a step on a path to eventual role elimination are experiencing a different anxiety from employees who fear the current deployment directly. Conflating immediate impact ('this AI tool will take over your invoice data entry') with speculative long-term impact ('AI might eventually do much of what your function does') in the same communication increases anxiety rather than reducing it.",
            "Communicate only what is known and what is planned. The long-term AI trajectory of the organisation is a leadership strategy conversation — not an employee change communication. Employees cannot act on information about what AI might do in 10 years; they can only be made anxious by it.",
          ),
          s(" Restrict AI job impact communications to the 12-18 month known horizon. Do not speculate about long-term AI evolution in employee-facing communications."),
        ],
      ],
      examples: [
        {
          title: "Insurance — role evolution analysis",
          body: "An insurer's claims director completed a role evolution analysis for claims handlers before any AI change communication: task by task analysis of the 8 main claims handler activities, categorised as: AI-enabled (2 activities to be substantially automated), AI-augmented (4 activities to be assisted by AI), human-only (2 activities requiring full human judgement). The communication used the analysis: 'Your role will shift from spending 40% of your time on data entry and document checking (AI-enabled) to spending 40% of that time on complex exception management and customer conversations (currently 20% of your time but growing). The total role is not smaller — it is differently distributed.' Anxiety levels post-communication: 31% 'concerned' versus 68% 'concerned' after the previous generic reassurance communication.",
        },
        {
          title: "Technology company — uncertainty acknowledgement",
          body: "A technology company's AI programme director broke from standard communication practice to acknowledge uncertainty explicitly: 'We do not yet know whether the AI deployment in the data operations team will affect team size. We will know by month 12 when we understand the productivity changes. I commit to a specific communication to the data operations team by month 12, regardless of what the numbers show.' Trust scores in the data operations team (measured by pulse survey): increased 18 points in the month following this communication — the largest trust increase in the AI programme's communications history. The previous month's reassurance communication had produced a 3-point increase.",
        },
        {
          title: "Retail — 12-month horizon communication",
          body: "A retailer's commercial director was advised by the AI programme team to include a section on the long-term impact of AI on retail buying roles in the awareness communication. The director declined: 'If I speculate about what AI will do to this team in 5 years, I will produce anxiety that cannot be resolved with any current action. I will communicate what we know about the next 18 months and commit to updating them as we know more.' Post-communication pulse survey: 'I understand how AI will affect my role' — 74% agree (versus 38% after a previous long-horizon communication at a comparable retailer).",
        },
      ],
    }),
    buildSection({
      number: "9.5",
      title: "Converting sceptics: the evidence-first approach",
      subtitle: "Why data from peer experiences is more effective than leadership communication in converting sceptics",
      take: "AI sceptics — employees who are not resistant enough to avoid AI tools but who engage with them without genuine commitment — are typically converted by evidence, not by persuasion. The evidence that converts sceptics is specific, local, and credible: a colleague in an equivalent role who has used the AI tool and seen a concrete improvement. Leadership endorsement, vendor case studies, and aggregate statistics do not convert sceptics because sceptics discount sources that have an obvious interest in AI success.",
      why: "The persuasion gap between leadership-endorsed AI communications and sceptical employees' willingness to be persuaded is large and is not reduced by more communication. Peer evidence from credible colleagues is not constrained by the same trust gap — and consistently converts sceptics faster than any other approach.",
      paragraphs: [
        [
          s("A sceptic's hierarchy of evidence has four levels, from least to most persuasive. "),
          x(
            "Level 1 (least persuasive): vendor case studies and AI programme claims. Level 2: leadership endorsement and organisational AI strategy. Level 3: aggregate statistics about AI impact ('studies show AI improves productivity by 30%'). Level 4 (most persuasive): a specific colleague in an equivalent role who says 'I tried this and here is what actually happened' — including what did not work as expected.",
            "The most persuasive evidence is from a peer who is perceived as a credible, disinterested witness — someone who has no obvious motivation to promote AI adoption and who provides both positives and limitations from their experience.",
          ),
          s(" Invest in creating Level 4 peer evidence: identify 3–5 converted sceptics in each function and enable them to share their specific experiences with their peers."),
        ],
        [
          s("The conversion conversation has three phases: acknowledgement, evidence, and invitation. "),
          x(
            "Phase 1 (acknowledgement): 'Your scepticism is reasonable — AI tools don't always work as advertised and the business case isn't always clear.' Phase 2 (evidence): 'Here is a colleague in an equivalent role who had similar concerns. Their specific experience was X. I can arrange 30 minutes for you to talk to them.' Phase 3 (invitation): 'Would you be willing to try the tool for one specific use case for 2 weeks? If it does not improve that specific thing, we will move on.' Limiting the trial to one specific use case reduces the perceived commitment and increases willingness to try.",
            "The invitation must be low commitment. A sceptic who is asked to 'adopt AI across their workflow' will decline. A sceptic who is asked to 'try the AI for meeting note-taking for 2 weeks' has a small enough commitment to accept.",
          ),
          s(" Use low-commitment trial invitations for sceptics: one specific use case, two weeks, with an explicit no-pressure exit if the trial does not show value."),
        ],
        [
          s("Converted sceptics are the most persuasive AI adoption advocates in any organisation. "),
          x(
            "A team member who was visibly sceptical about AI, tried it under peer pressure, and then changed their view has enormous peer credibility as an advocate. Their story — 'I thought this was hype, here is what changed my mind, and here is where I still think we need to be careful' — is more persuasive to other sceptics than any other source. Formally activating converted sceptics as peer advocates produces adoption multiplier effects that are disproportionate to their number.",
            "Converted sceptics should be activated by asking them to share their experience in team meetings, not by assigning them a formal advocacy role. Formal roles can make the story feel scripted. Spontaneous sharing in a team meeting — where the converted sceptic tells their story in their own words — is perceived as authentic.",
          ),
          s(" Ask converted sceptics to share their experience in 1–2 team meetings within 30 days of conversion. The story loses half its impact after 30 days."),
        ],
      ],
      examples: [
        {
          title: "Financial services — peer evidence programme",
          body: "A bank identified 12 converted sceptics from its AI advisory tool pilot. Each was asked to attend one team meeting in their closest peer group and share their experience for 5 minutes. Instructions: share what you were sceptical about, what you tried, what happened (including what did not work as expected), and what you changed as a result. Post-sharing adoption in teams that included a converted sceptic presentation: 62% at week 4. Adoption in comparable teams without a presentation: 34%. The peer evidence programme cost 60 person-hours of converted sceptic time and produced a 28-percentage-point adoption differential.",
        },
        {
          title: "Healthcare — low-commitment trial",
          body: "A clinician who was sceptical of AI clinical note-taking was offered a 2-week trial for a single use case: post-consultation summaries only. After 2 weeks, the clinician reported that the AI summary quality was insufficient for complex cases but excellent for straightforward follow-up consultations. The change manager accepted the mixed finding and asked: 'Would you be willing to use it for follow-up consultations going forward?' The clinician agreed. Six months later, the clinician was using the AI for 60% of consultation summaries and had become a vocal advocate for its use in follow-up care — while maintaining their specific concerns about complex case documentation.",
        },
        {
          title: "Retail — converted sceptic activation timing",
          body: "A retailer's AI merchandising tool had 3 converted sceptics from the pilot. The change team activated all 3 within 2 weeks of the pilot completing: informal sharing in team meetings, no formal presentation format. Three months later, the team attempted to activate a 4th converted sceptic who had converted during the main rollout. Peer feedback on the fourth activation: 'It felt like they were being asked to promote AI, not share their experience.' The story had lost its freshness. The first 3 activations produced significantly stronger peer response — the spontaneity of a recent experience was the credibility signal that later, more deliberate activations lacked.",
        },
      ],
    }),
    buildSection({
      number: "9.6",
      title: "When resistance is rational and should be respected",
      subtitle: "The conditions under which AI resistance identifies genuine deployment problems",
      take: "Not all AI resistance is a change management problem. Some resistance is rational information about genuine deployment risks: the AI tool is not reliable enough for its intended use, the deployment has not addressed regulatory requirements, the workflow integration creates accountability gaps, or the AI application oversteps the appropriate boundary of AI decision-making in a high-stakes context. Leaders who dismiss all resistance as change management failure will deploy systems that should not be deployed.",
      why: "The cost of acting on rational resistance is project delay — typically 2–12 weeks for a deployment modification or additional review. The cost of dismissing rational resistance is AI deployment failure — compliance incidents, trust breaches, clinical harm, or financial errors. The asymmetry in cost makes engaging with resistance evidence a risk management requirement, not a leadership preference.",
      paragraphs: [
        [
          s("Four conditions indicate that resistance may be rational rather than change-related. "),
          x(
            "Condition 1: the resistor has domain expertise directly relevant to the AI deployment (a senior underwriter resisting AI credit tools, a regulatory specialist resisting AI compliance outputs). Condition 2: the concern is specific rather than general ('this AI recommendation is wrong in cases involving X' rather than 'AI is not ready'). Condition 3: the resistor can provide examples that demonstrate the concern (failure cases, gap scenarios, regulatory edge cases). Condition 4: the concern has not been previously addressed in the deployment design documentation.",
            "When all four conditions are present, treat the resistance as a deployment quality review trigger — not as a change management escalation.",
          ),
          s(" Use the four-condition test before classifying any resistance as change management resistance. If all four conditions are present, convene a technical review before proceeding with the deployment."),
        ],
        [
          s("The technical review process for rational resistance must have a defined scope and a defined timeline to prevent indefinite delay. "),
          x(
            "Rational resistance should trigger a defined technical review: a named reviewer, a specific question to be answered (does this deployment create the risk identified by the resistor?), a timeline (review complete within 10 business days), and a defined outcome (modify deployment, provide evidence to address concern, or proceed with documented rationale for why the concern was investigated and not acted on).",
            "A technical review process without defined timeline and outcome becomes a permanent blocker. The resistor will continue to raise concerns indefinitely; the deployment will be indefinitely delayed. Structure and timeline are the mechanism that converts rational resistance into productive quality review rather than indefinite obstruction.",
          ),
          s(" Define review scope, reviewer, timeline (10 business days), and outcome format before any technical review is initiated. Undefined reviews become infinite delays."),
        ],
        [
          s("Documenting the rational resistance engagement protects the organisation if the deployment produces a failure. "),
          x(
            "When an AI deployment is proceeding despite identified concerns, documenting the concerns raised, the review conducted, the evidence assessed, and the rationale for proceeding creates a governance record. If the deployment subsequently produces the failure the resistor predicted, the documentation demonstrates that the concern was considered and a reasoned decision was made — rather than the concern being dismissed without review.",
            "This documentation is not primarily for legal protection — it is for continuous improvement. A governance record of concerns raised and addressed (or not addressed) provides the organisational memory that prevents future deployments from making the same mistake.",
          ),
          s(" Create a governance record for every rational resistance engagement, including concerns raised, review conducted, decision made, and rationale."),
        ],
      ],
      examples: [
        {
          title: "Insurance — domain expert resistance triggers review",
          body: "A senior actuary raised specific concerns about an AI pricing model: it had been trained on data that under-represented extreme weather events, making it likely to systematically underprice climate-sensitive risks. All four rational resistance conditions were present: domain expertise, specific concern, examples of affected risk categories, and the concern was not addressed in the deployment review. A 10-day technical review confirmed the gap. The model was retrained with a more representative dataset before deployment. The actuary's resistance prevented a pricing gap that would have created significant adverse selection exposure.",
        },
        {
          title: "Financial services — documentation protects governance",
          body: "A compliance officer raised concerns about an AI transaction monitoring tool's false negative rate in a specific transaction pattern. The technical review found the rate was within the vendor's published specification but above the compliance officer's professional judgement threshold. The decision was made to deploy with additional manual review for the identified pattern — with full documentation of the concern, review, and rationale. Six months later, a regulatory inquiry into transaction monitoring practices asked specifically about the pattern in question. The documentation demonstrated that the risk had been identified, reviewed, and managed. The regulator cited the governance process as exemplary.",
        },
        {
          title: "Healthcare — structured review prevents infinite delay",
          body: "A senior radiologist raised concerns about AI diagnostic tool deployment in emergency radiology settings. Without a structured review process, the concern had blocked deployment for 11 months through a series of unstructured discussions and escalations. A structured review was initiated: named reviewer (chief radiologist and clinical informatics director), specific question (is the AI tool's accuracy in the emergency context materially lower than in the elective context?), 10-day timeline, defined outcome. Review finding: accuracy was lower in emergency contexts due to image quality differences. Modified deployment: AI used for preliminary flagging in emergency settings, not for primary diagnosis. The structured review resolved an 11-month impasse in 10 days.",
        },
      ],
    }),
    buildSection({
      number: "9.7",
      title: "Senior leader resistance: the most dangerous type",
      subtitle: "Why resistant senior leaders create adoption failures that no change programme can overcome",
      take: "Senior leader resistance to AI is the most damaging type in an organisation — not because senior leaders are the most numerous resistors but because their behaviour is the primary adoption signal for every employee in their reporting line. A senior leader who does not use the AI tools they are sponsoring, who expresses scepticism about AI in informal settings, or who exempts themselves from AI training requirements sends a behavioural message that no change communications can overcome.",
      why: "Employees watch their leaders' behaviour more carefully than they listen to their words. A leader who says 'AI is strategic for our organisation' and then uses none of the AI tools deployed in their function has communicated the opposite of what they said — and the behavioural message is more credible than the verbal one.",
      paragraphs: [
        [
          s("Senior leader AI resistance has four distinct patterns. "),
          x(
            "Pattern 1 (Passive non-participation): the senior leader does not use deployed AI tools but does not openly oppose them. Pattern 2 (Verbal ambivalence): the senior leader supports AI in formal settings but expresses doubts informally. Pattern 3 (Exemption-seeking): the senior leader participates in AI training requirements for their team but exempts themselves. Pattern 4 (Active scepticism): the senior leader openly questions AI's value in team meetings, client discussions, or board settings.",
            "Patterns 1 and 3 are the most common and least visible — they do not produce explicit resistance events but create consistent adoption suppression across the reporting line. Patterns 2 and 4 are more visible and require direct engagement from the leader's peer or from the CISO, CHRO, or CEO depending on the seniority level.",
          ),
          s(" Monitor senior leader AI usage (active use rate in deployed tools) as an adoption leading indicator. Non-participation by senior leaders is a leading indicator of function-wide adoption failure."),
        ],
        [
          s("The source of senior leader resistance is almost always one of three things: fear of looking incompetent with AI tools, genuine values-based concern about AI in their domain, or strategic disagreement with the AI programme's direction. "),
          x(
            "Fear of incompetence in senior leaders is more common than in junior employees because senior leaders have more reputational stake and less organisational safety to make mistakes visibly. A CEO who cannot use the AI tools their organisation is deploying faces a specific identity threat: the loss of the mastery and authority that their career has been built on.",
            "Senior leader capability-based resistance is best addressed through private, one-to-one coaching with a trusted internal AI practitioner — not through inclusion in standard training programmes that put senior leaders in the same learning environment as their direct reports.",
          ),
          s(" Offer private AI coaching to all senior leaders before any public or group AI training commitment is made. Private coaching removes the identity threat that group settings create."),
        ],
        [
          s("Peer accountability is the most effective mechanism for addressing senior leader resistance. "),
          x(
            "The direct manager of a resistant senior leader has the most leverage to address the resistance — but most direct managers are reluctant to raise AI non-adoption as a performance issue with a senior leader. Peer accountability — where an AI steering committee or peer leadership group reviews AI adoption metrics including senior leader participation — creates accountability through peer pressure rather than hierarchical management.",
            "When a CEO's direct reports know that the board or AI steering committee reviews their AI tool usage, the social accountability of peer visibility is often sufficient to produce the participation that manager instruction does not.",
          ),
          s(" Include senior leader AI usage data in AI steering committee reviews. Peer visibility is the accountability mechanism that senior leaders respond to most reliably."),
        ],
      ],
      examples: [
        {
          title: "Financial services — CEO coaching",
          body: "A bank's CEO was the organisation's most visible AI adoption sponsor but had not used any of the AI tools deployed for senior leaders (executive summary tool, board preparation AI). An AI programme lead arranged private coaching sessions for the CEO: 3 × 45-minute sessions using the CEO's actual board documents as material. By session 2, the CEO was actively using the executive summary tool. By session 3, the CEO mentioned the AI tool unprompted in a town hall when asked about their personal experience of AI. The mention produced the highest measured AI adoption response in the entire programme — because the source was the most credible available.",
        },
        {
          title: "Healthcare — peer accountability",
          body: "A hospital trust's AI steering committee included senior leader AI usage data (active use rate for all AI tools in each function leader's scope) in its quarterly dashboard. In the first quarter, 2 of 5 divisional directors had zero personal active use. The dashboard made this visible to the CEO and to the 3 other directors. Both non-participating directors initiated private coaching before the next quarterly review — without any direct management instruction. Both achieved active use at the next review. The peer visibility mechanism worked where direct management conversation had not.",
        },
        {
          title: "Retail — exemption-seeking pattern",
          body: "A national retailer's buying director agreed to an AI adoption programme for all 120 buying team members but requested personal exemption from the training requirement ('too busy, will catch up when things settle down'). The AI programme director raised the issue with the chief commercial officer: 'If the buying director is exempted, the buying team will interpret this as a signal that senior leaders do not take this seriously. We will lose the adoption momentum we have built.' The chief commercial officer spoke to the buying director. The director completed the training programme — and subsequently became one of the most engaged AI users in the buying team because the training revealed capabilities they had not known existed.",
        },
      ],
    }),
    buildSection({
      number: "9.8",
      title: "BL decision lens: your AI resistance response strategy",
      subtitle: "Three decisions that determine whether AI resistance becomes programme failure or programme intelligence",
      take: "AI resistance is information, not obstruction. A business leader who treats resistance as information — diagnosing its source, engaging with its content, and responding with the right intervention for each type — extracts programme intelligence and converts resistors into advocates. A leader who treats resistance as obstruction and pushes through it produces underground non-compliance that undermines adoption invisibly for years.",
      why: "The attitude of leadership toward resistance is the single most powerful determinant of whether AI adoption programmes succeed or fail. Leaders who are curious about resistance produce organisations that are honest about adoption problems. Leaders who are hostile toward resistance produce organisations that hide adoption problems until they are too large to ignore.",
      paragraphs: [
        [
          s("Decision 1: implement the three-question diagnostic conversation as standard practice for every case of identified AI resistance. "),
          x(
            "Train every manager with AI-using direct reports in the three-question diagnostic conversation. The training takes 2 hours and produces the skill required to distinguish fear-based from capability-based from values-based resistance — which is the prerequisite for any effective resistance response. Without this skill, managers will default to their personal instinct about resistance source, which will be wrong 40–50% of the time.",
            "The diagnostic conversation is a management skill investment that pays back across every future AI deployment, not just the current one. Managers who learn to diagnose resistance source for one AI tool have the skill for all future AI tools in their function.",
          ),
          s(" Include the diagnostic conversation training in every manager AI capability programme, not just in the change management programme for the current deployment."),
        ],
        [
          s("Decision 2: implement the four-condition test before classifying any resistance as change management resistance. "),
          x(
            "Before any resistance is managed as a change management issue, apply the four-condition test: does the resistor have relevant domain expertise, a specific concern, supporting examples, and a concern not addressed in the deployment design? If all four conditions are met, convene a structured technical review before proceeding. This test takes 15 minutes and prevents the most expensive AI deployment failure mode: proceeding with a deployment despite valid resistance from a domain expert.",
            "The four-condition test is not a veto mechanism for employees who want to block AI deployments. The technical review has a defined timeline (10 business days) and a defined outcome that may be to proceed with the deployment. It is a quality review, not a deployment blocker.",
          ),
          s(" Apply the four-condition test as a gate between 'resistance classification' and 'resistance management.' It takes 15 minutes and prevents months of avoidable failure."),
        ],
        [
          s("Decision 3: make senior leader AI participation a named element of the AI steering committee agenda. "),
          x(
            "Include senior leader active use rate in the monthly AI adoption dashboard reviewed by the AI steering committee. This makes senior leader participation a governance accountability rather than a personal choice. Combine this with private AI coaching offered to all senior leaders before any group training requirement — to remove the identity threat that group settings create for leaders who are not yet AI-capable.",
            "The combination of governance accountability (peer visibility of participation) and private enablement (coaching that removes the competence barrier) is the two-part senior leader adoption strategy. Neither element works without the other: accountability without enablement produces anxiety; enablement without accountability produces procrastination.",
          ),
          s(" Add senior leader AI participation to the governance dashboard and offer private AI coaching to all senior leaders in the same month. Announce both changes simultaneously."),
        ],
      ],
      examples: [
        {
          title: "Diagnostic training converts resistance faster",
          body: "A logistics company trained 45 managers in the diagnostic conversation before deploying its AI route optimisation tool. Post-deployment, manager intervention time for resistance cases averaged 3.1 weeks per case. The previous AI deployment without diagnostic training averaged 8.4 weeks per resistance case — because managers applied the same intervention (communications) regardless of resistance source. The diagnostic training reduced intervention time by 63% and increased conversion rate from 58% to 79%.",
        },
        {
          title: "Four-condition test prevents premature deployment",
          body: "An insurance company applied the four-condition test to 11 cases of identified AI resistance during an AI claims tool rollout. 8 cases failed one or more conditions (classified as change management resistance — addressed through communications or coaching). 3 cases met all four conditions — domain expertise, specific concern, supporting examples, and unaddressed in design. All 3 triggered technical reviews. 2 reviews resulted in deployment modifications; 1 resulted in a documented decision to proceed with the design as planned after the review found the concern did not materialise in testing. The 4-condition test cost 165 minutes of review time and prevented 2 deployment modifications that would have been significantly more expensive to address post-launch.",
        },
        {
          title: "Governance plus coaching",
          body: "A bank announced simultaneously: (1) senior leader AI participation data would be included in the next AI steering committee dashboard, and (2) all senior leaders were offered private AI coaching from an internal AI practice lead. In the 6 weeks following the announcement, 12 of 15 senior leaders accessed the private coaching programme. At the next steering committee, 14 of 15 senior leaders had active use data to report. The one non-participant had a health absence. The combined approach achieved what 3 months of direct management conversations had not.",
        },
      ],
    }),
  ],
  quiz: [
    {
      q: "A senior analyst avoids using the AI forecasting tool and expresses vague criticisms about its accuracy. Investigation shows the analyst completed training but uses manual workarounds. Which resistance profile is most likely?",
      options: [
        "Anxious Avoider — they are worried about job security",
        "Principled Objector — they have ethical concerns about AI forecasting",
        "Capability-Blocked — they cannot use the tool effectively and are masking this with vague criticism",
        "Active Resistor — they are deliberately undermining AI adoption",
      ],
      correct: 2,
      correctFeedback:
        "Correct. The Capability-Blocked profile presents as vague criticism combined with workarounds — the employee knows the tool exists, has been trained, but cannot use it effectively and does not want to expose this inability. The correct response is confidential one-to-one coaching, not additional communications or performance management.",
      wrongFeedback:
        "The symptom pattern — completed training, uses workarounds, vague quality criticisms — is the signature of the Capability-Blocked profile. The analyst is not resisting AI in principle; they are avoiding exposure of their inability to use the tool. Confidential coaching that develops genuine tool capability will resolve the resistance.",
    },
    {
      q: "A clinician raises a specific concern about an AI diagnostic tool: 'The tool was not trained on cases with multiple co-morbidities and will produce unreliable outputs for elderly patients.' The change team wants to classify this as change management resistance. What should happen first?",
      options: [
        "Schedule the clinician for additional AI awareness training",
        "Apply the four-condition test to determine whether this is rational resistance identifying a genuine deployment risk",
        "Escalate to the clinician's manager for performance discussion",
        "Present vendor validation data to address the concern",
      ],
      correct: 1,
      correctFeedback:
        "Correct. The concern is specific, comes from a domain expert, may include examples, and may not have been addressed in the deployment design — potentially meeting all four conditions for rational resistance. Before classifying it as change management resistance, the four-condition test must be applied. If all four conditions are met, a technical review is required.",
      wrongFeedback:
        "A specific clinical concern from a domain expert must be evaluated against the four rational resistance conditions before being classified as change management resistance. Applying training or management pressure to a valid clinical risk concern would be both ineffective and a governance failure.",
    },
    {
      kind: "order",
      q: "Order these steps for responding to identified AI resistance:",
      items: [
        "Apply the four-condition test to determine if the resistance is rational",
        "Conduct the three-question diagnostic conversation to identify resistance source",
        "Select the response matched to the identified profile (communication, coaching, or technical review)",
        "Implement the targeted response with clear timeline and success criteria",
        "Follow up to assess whether the resistance has been resolved",
      ],
      prompt: "Drag to arrange in the correct sequence",
      correctFeedback:
        "Correct. Rational resistance screening first (four-condition test), then source diagnosis (three-question conversation), then matched response selection, then targeted implementation, then follow-up. Skipping the diagnosis and jumping directly to response is the most common AI resistance management failure.",
      wrongFeedback:
        "The sequence is diagnostic before responsive: first check whether the resistance is rational (four-condition test), then diagnose the source (three-question conversation), then select the matched response, then implement with a clear timeline, then follow up. Responding before diagnosing produces mismatched interventions that do not resolve the resistance.",
    },
    {
      q: "What is the most effective source of evidence for converting AI sceptics in a business function?",
      options: [
        "Vendor case studies showing ROI from comparable organisations",
        "Leadership endorsement and AI programme communications",
        "A peer in an equivalent role who was sceptical and changed their view after trying the tool",
        "Aggregate industry statistics on AI adoption rates",
      ],
      correct: 2,
      correctFeedback:
        "Correct. Peer evidence from a converted sceptic — someone who was visibly doubtful and changed their view — is the most persuasive source because it comes from a credible, disinterested witness who had the same concerns and worked through them. Vendor evidence, leadership endorsement, and aggregate statistics all carry obvious advocacy bias.",
      wrongFeedback:
        "Sceptics discount sources with obvious interest in AI success: vendors, leadership, programme teams. A peer who was previously sceptical and changed their view has the same original position as the sceptic and no obvious advocacy motive — which makes their conversion story the most credible evidence available.",
    },
    {
      kind: "categorize",
      q: "Categorise these resistance characteristics as belonging to either 'Rational Resistance' or 'Change Management Resistance':",
      categories: ["Rational Resistance", "Change Management Resistance"],
      items: [
        { text: "Specific concern with examples from a domain expert not addressed in deployment design", category: 0 },
        { text: "Vague scepticism about AI quality without specific examples", category: 1 },
        { text: "Resistance that intensified after a redundancy announcement", category: 1 },
        { text: "Specific regulatory concern about AI data handling from a compliance specialist", category: 0 },
        { text: "Avoidance of the AI tool combined with manual workarounds", category: 1 },
        { text: "Named failure mode examples for a specific AI tool application area", category: 0 },
      ],
      correctFeedback:
        "Correct. Rational resistance is specific, expert-sourced, evidence-backed, and addresses gaps in deployment design. Change management resistance is general, non-expert, linked to change anxiety or capability gaps, and does not identify specific deployment risks.",
      wrongFeedback:
        "Rational resistance has four characteristics: domain expertise, specific concern, supporting examples, and an unaddressed deployment design gap. Change management resistance is general, emotionally driven (anxiety, capability), and does not identify specific technical or regulatory risks in the deployment.",
    },
    {
      q: "A resistant senior leader exempts themselves from AI training while requiring their 80-person team to complete it. What is the most effective response strategy?",
      options: [
        "Allow the exemption to maintain senior leader goodwill toward the AI programme",
        "Mandate training for all employees including senior leaders through HR policy",
        "Offer private AI coaching to the leader (to remove the competence barrier) while including their participation data in the governance dashboard (to create peer accountability)",
        "Have the CEO speak to the resistant leader about the importance of AI adoption",
      ],
      correct: 2,
      correctFeedback:
        "Correct. The two-part strategy addresses both dimensions of senior leader resistance: private coaching removes the identity threat that group training creates (enablement); governance dashboard inclusion creates peer accountability pressure (accountability). Neither works alone; together they are the most effective approach.",
      wrongFeedback:
        "The most effective strategy combines enablement (private coaching to develop capability without the identity threat of group settings) and accountability (governance dashboard visibility to peers). Mandating training creates compliance without engagement; relying on CEO conversation depends on the CEO being willing and the conversation being persuasive.",
    },
  ],
});
