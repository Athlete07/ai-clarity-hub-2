import { buildChapter, buildSection, s, x, sectionWithDiagram } from "../concepts-bl-helpers";
import { BL_CALLOUT } from "../concepts-bl-helpers";

export const chapter02BlChangeManagementFrameworkAi = buildChapter({
  slug: "bl-change-management-framework-ai",
  number: 2,
  shortTitle: "AI Change Management Framework",
  title: "The AI Change Management Framework for Business Leaders",
  readingMinutes: 30,
  summary:
    "AI transformation is the most complex change management challenge most organisations have encountered — not because the technology is hard, but because AI changes the nature of work itself. Standard change management frameworks were designed for process change. AI requires a framework that addresses identity change, continuous learning, and sustained uncertainty over a multi-year horizon. This chapter provides that framework.",
  keyTakeaway:
    "AI change management requires three elements that standard change frameworks omit: explicit work on the identity implications of AI augmentation, a structure for managing continuous learning as the technology evolves, and a multi-year change architecture rather than a single-deployment change plan. Leaders who apply ERP-style change management to AI transformation are using the wrong tool.",
  pmCallout: BL_CALLOUT,
  sections: [
    sectionWithDiagram({
      number: "2.1",
      title: "Why AI change is different from past technology change",
      subtitle: "The three dimensions where AI transformation exceeds prior technology change in complexity",
      take: "AI change differs from ERP, CRM, and cloud migration change in three fundamental ways: it changes what decisions humans are authorised to make, it renders certain skills obsolete faster than retraining can compensate, and it requires continuous adaptation as the technology itself evolves. A change management framework that does not address these three dimensions will fail on all three.",
      why: "Leaders who treat AI change management as a faster version of ERP change management are applying a framework designed for a different problem. ERP changed processes and tools. AI changes roles, authority, and professional identity. The framework must match the scope of the change.",
      paragraphs: [
        [
          s("ERP and CRM implementations changed how work was recorded and reported. AI changes which part of the work humans do at all. "),
          x(
            "When a CRM was deployed, a sales rep still made every customer decision — the CRM just tracked them differently. When AI is deployed in the same function, the AI makes routine recommendations about which customers to contact, when, with what message, and in what priority order. The human's decision-making scope narrows.",
            "This scope narrowing is not universally experienced as a loss — many workers welcome the reduction in routine cognitive load. But for workers who derived professional identity from the expertise now automated, the experience is closer to redundancy than productivity improvement.",
          ),
          s(" AI change management must name the decision scope change explicitly and address its identity implications — not just its workflow implications."),
        ],
        [
          s("Skills become obsolete faster in AI transformation than in any prior technology change. "),
          x(
            "A person who spent five years developing expertise in manual financial modelling faces a different proposition from AI automation than a person who spent five years on data entry. The data entry worker's skill was always a task. The modeller's skill was part of their professional identity and career trajectory. The change management requirement for the modeller is categorically more complex.",
            "Change management frameworks that address skill change through generic retraining programmes miss the identity dimension. A retraining programme that says 'your new skill is AI prompt engineering' does not address the loss of five years of accumulated modelling expertise.",
          ),
          s(" Distinguish between task displacement and expertise displacement in your change management design. They require different interventions."),
        ],
        [
          s("AI technology itself evolves continuously during the transformation period, requiring organisations to manage change-on-change. "),
          x(
            "An ERP implementation had a go-live date after which the system was stable. An AI transformation has no go-live date — the AI models update, new capabilities emerge, and the competitive landscape of AI tools shifts every six months. The change management programme must be designed for a moving target, not a single deployment event.",
            "Change-on-change is the most psychologically demanding element of AI transformation. People who have just adapted to one AI tool discover it is being replaced or substantially upgraded. The change management investment must build adaptive capacity, not just adapt people to a specific tool.",
          ),
          s(" Design your AI change management programme for a rolling 18-month horizon with a quarterly review cycle — not for a single deployment event."),
        ],
      ],
      examples: [
        {
          title: "Financial services — modeller identity displacement underestimated",
          body: "A bank deployed AI financial modelling tools and positioned it to analysts as 'freeing them from routine modelling to focus on strategic analysis.' Six months in, 40% of analysts reported lower job satisfaction despite productivity gains. Exit interviews revealed they had not valued the routine modelling they lost — they had valued being the person whose models the bank trusted. AI had not freed them from work. It had given that trusted role to an algorithm. The change management programme had addressed workflow but not the identity of being 'the person who builds the models.'",
        },
        {
          title: "Retailer — change-on-change exhaustion",
          body: "A retailer deployed an AI inventory management tool, ran a six-month change programme, achieved 78% adoption — and then upgraded to a significantly different AI platform eight months later. The second change programme launched into a team that had barely finished adapting to the first. Resistance was higher than the first deployment despite the second tool being objectively superior. The change fatigue from change-on-change was more resistant than technical scepticism. The retailer instituted a 12-month stability commitment — no major tool changes within 12 months of initial deployment — to allow adaptation before the next change cycle.",
        },
        {
          title: "Legal department — continuous evolution designed in",
          body: "A law firm's legal AI change programme was designed from the start for a three-year horizon with quarterly capability updates. Associates were enrolled in ongoing AI capability development as a structured professional development stream, not a one-time training event. Each quarterly update was presented as the next module in a programme they were already enrolled in, not as a new change requiring new adaptation. Adoption of each capability update was 15–20 percentage points higher than the firm's previous technology change initiatives, because the change was experienced as progression rather than disruption.",
        },
      ],
    }, {
      kind: "diagram",
      id: "bl-change-management",
      type: "flow",
      title: "AI Change Management",
      caption:
        "Executive sponsor → honest communication → training → champions → adoption metrics.",
    }),
    sectionWithDiagram({
      number: "2.2",
      title: "The three-horizon AI change model",
      subtitle: "How to structure AI transformation across a three-year horizon without losing momentum or coherence",
      take: "AI transformation cannot be managed as a single change event or a series of unconnected deployments. It requires a three-horizon model: Horizon 1 (0–12 months) establishes foundation and proves concept; Horizon 2 (12–24 months) scales proven use cases and expands capability; Horizon 3 (24–36 months) integrates AI into organisational identity and competitive strategy. Each horizon has different leadership priorities, change management investments, and success measures.",
      why: "Business leaders who plan only Horizon 1 build a successful pilot programme that has no architecture for what comes next. When Horizon 1 ends, the organisation is in a gap — it has proven AI works but has not yet built the capacity to scale. The three-horizon model prevents the post-pilot gap.",
      paragraphs: [
        [
          s("Horizon 1 change management focuses on psychological safety, early adoption, and learning infrastructure. "),
          x(
            "The primary change objective in Horizon 1 is not adoption of specific tools — it is building the organisation's capacity to learn with AI. This means creating safe environments for mistakes, celebrating early adopters, and establishing the feedback loops that will accelerate Horizon 2 adoption.",
            "Organisations that focus Horizon 1 change management purely on adoption of specific tools are optimising for the wrong metric. Adoption of Tool A in Horizon 1 is less valuable than the capacity to adopt Tool B faster in Horizon 2 because the learning infrastructure was built.",
          ),
          s(" Horizon 1 change management success is measured by learning velocity, not just tool adoption rate."),
        ],
        [
          s("Horizon 2 change management focuses on scaling proof points, managing the resistance that emerges as AI reaches more complex and sensitive roles, and maintaining the change momentum built in Horizon 1. "),
          x(
            "Horizon 1 change often encounters lower resistance because early adopters self-select — they are enthusiasts. Horizon 2 reaches the mainstream and the sceptics. The change management challenge intensifies in Horizon 2 even as leadership attention often shifts toward technology optimisation.",
            "The most common Horizon 2 failure mode is change management investment reduction just as the change challenge increases. Horizon 2 requires more change management investment than Horizon 1, not less.",
          ),
          s(" Do not reduce change management investment in Horizon 2 because adoption metrics improved in Horizon 1. Horizon 2 is harder, not easier."),
        ],
        [
          s("Horizon 3 change management addresses the deepest and most lasting dimension of AI transformation: how the organisation thinks of itself. "),
          x(
            "By Horizon 3, AI is no longer a change programme — it is how the organisation works. The change management objective shifts from adoption to identity integration: helping the organisation own its AI capability as a core competency rather than an externally introduced technology.",
            "Horizon 3 is where AI transformation either becomes sustainable competitive advantage or plateaus. The difference is whether leaders have built an organisation that continuously evolves with AI technology — or one that adopted a set of tools and stopped.",
          ),
          s(" Horizon 3 success is measured by whether the organisation improves its AI capability without external programme management — not whether it uses the tools it deployed in Horizon 1."),
        ],
      ],
      examples: [
        {
          title: "Manufacturer — three-horizon architecture prevents post-pilot gap",
          body: "A manufacturer built a three-horizon AI change architecture before launching its first pilot. Horizon 1 covered predictive maintenance in two plants. Horizon 2 was pre-scoped to cover quality inspection and supply chain optimisation. Horizon 3 was defined as AI-embedded operations across all 18 plants. When Horizon 1 succeeded, the next investments were already approved in principle and the scale architecture was pre-designed. The post-pilot gap that had stalled competitors' programmes was avoided entirely.",
        },
        {
          title: "Financial services — Horizon 2 resistance surge managed",
          body: "A bank's AI transformation sailed through Horizon 1 with high adoption among technology-forward staff. In Horizon 2, the programme reached compliance and risk functions — where AI accuracy concerns were highest and professional identity investment was deepest. Resistance was 3× higher than Horizon 1. The bank had anticipated this using the three-horizon model and had pre-allocated additional change management budget for Horizon 2 compliance function engagement. A dedicated change lead for the compliance function, paired with conservative AI deployment that positioned AI as a compliance aid rather than a compliance decision-maker, reduced resistance to manageable levels.",
        },
        {
          title: "Professional services firm — Horizon 3 identity integration",
          body: "A consulting firm reached Horizon 3 when its AI research and knowledge management tools were embedded across all practice areas. The Horizon 3 change objective was helping the firm describe its AI capability to clients and recruits as a genuine differentiator — not just a tool set, but an organisational capability. The firm integrated AI proficiency into its career framework, embedded AI tool demonstration into client pitches, and published its AI capability story in its annual report. AI had become part of the firm's identity, not just its technology stack.",
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
    buildSection({
      number: "2.3",
      title: "Building the change coalition",
      subtitle: "Who must be in your AI change coalition — and why each member has a different and essential role",
      take: "An AI change coalition is not a steering committee of senior sponsors. It is a multi-level network of change owners who are doing the work of adoption across every stakeholder group. The coalition must include executive sponsors, functional change leads, HR and L&D partners, IT champions, and peer role models. Missing any one of these layers creates a gap in your change coverage.",
      why: "Change coalitions fail when they are constituted at the top of the organisation only. Executive support creates permission for change. Functional change leads create the practical pathway to change. Peer role models create the social proof that actually moves behaviour. All three layers must be active and resourced.",
      paragraphs: [
        [
          s("The five roles in a complete AI change coalition are: executive sponsor (authority and resources), functional change lead (day-to-day implementation), HR and L&D partner (capability and wellbeing), IT champion (technical barrier removal), and peer role model (social proof and adoption acceleration). "),
          x(
            "Each role is irreplaceable. An executive sponsor without a functional change lead creates strategy without execution. A functional change lead without peer role models creates mandated compliance rather than genuine adoption. IT champions without HR partners create technically capable users who are psychologically resistant.",
            "The change coalition should be constituted in Horizon 1, month one. Adding coalition members after problems emerge is reactive; building the coalition before problems emerge is preventive.",
          ),
          s(" Map each of the five coalition roles against named individuals before programme launch. Empty roles predict adoption failures."),
        ],
        [
          s("The functional change lead is the most underinvested role in most AI change coalitions. "),
          x(
            "Organisations often assign functional change leads as a part-time responsibility on top of existing workloads. AI change management is a full-time job for a skilled change practitioner during the deployment phase. A part-time change lead is a structural underinvestment that guarantees partial results.",
            "A functional change lead should be backfilled for their operational responsibilities during the deployment phase — not expected to run change management activities in addition to their normal role. The backfill cost is small relative to the adoption gap created by a stretched change lead.",
          ),
          s(" If your functional change leads are doing change management as a part-time additional responsibility, you are systematically underinvesting in the human side of AI adoption."),
        ],
        [
          s("Peer role models are most effective when they are self-selected, not assigned. "),
          x(
            "An enthusiastic early adopter who volunteers to share their experience is more credible than a designated 'AI champion' who was selected by management. The credibility difference is visible to the people you are trying to influence — and it matters. Assigned champions are often perceived as programme advocates. Self-selected champions are peers who found genuine value.",
            "To identify genuine peer role models, watch who is already using the AI tools most actively, who other team members ask for help with AI, and who is sharing AI tips informally. These people are your champions — invest in making them more visible, not in creating the role.",
          ),
          s(" Do not assign peer champions. Identify who is already acting as one and resource them to do it better."),
        ],
      ],
      examples: [
        {
          title: "Healthcare — coalition gap in IT slows deployment",
          body: "A hospital's AI change coalition had strong executive sponsorship, three dedicated functional change leads, and active peer role models in the nursing staff. The coalition did not include a dedicated IT champion. Technical integration issues — SSO configuration, system access provisioning, and data feed latency — took an average of 18 days to resolve because IT support was managed through a standard helpdesk queue. When an IT champion was added to the coalition with escalation authority for AI deployment issues, resolution time dropped to 3 days. The missing IT coalition member had been creating an invisible deployment friction that suppressed adoption.",
        },
        {
          title: "Manufacturer — part-time change lead gap",
          body: "A manufacturer's first AI deployment assigned change management to a plant operations manager as a 20% time activity alongside their full operational role. At month four, the change manager had completed the initial training rollout but had not addressed a growing swell of frontline resistance driven by shift supervisor anxieties. The resistance had been visible for six weeks but the part-time change lead had not had capacity to investigate and respond. A dedicated change resource was engaged at month five. The delay cost two months of adoption momentum.",
        },
        {
          title: "Professional services — self-selected champions outperform assigned ones",
          body: "A consulting firm ran a pilot: one practice area used assigned AI champions (selected by partners), another used self-identified champions (volunteers who were already enthusiastic users). At six months, the self-identified champion practice area had 78% adoption; the assigned champion practice area had 52%. The assigned champions were credible professionally but were perceived as management proxies rather than genuine AI enthusiasts. The firm converted all practice areas to the self-identified model in Horizon 2.",
        },
      ],
    }),
    buildSection({
      number: "2.4",
      title: "Creating urgency without creating fear",
      subtitle: "How to make the compelling case for AI transformation without triggering anxiety that stalls adoption",
      take: "Creating urgency around AI transformation is necessary — organisations that cannot feel the cost of not changing will not change. But urgency created by threats (job loss, competitive extinction, irrelevance) triggers defensive psychology that makes adoption harder. Urgency created by opportunity (capability expansion, career advancement, competitive advantage) triggers approach psychology that accelerates adoption.",
      why: "Leaders who frame AI urgency as 'change or be left behind' activate fear responses that reduce the psychological safety needed for experimentation and adoption. Leaders who frame urgency as 'this is the capability expansion of our generation' activate aspiration responses that pull people toward adoption rather than pushing them into it.",
      paragraphs: [
        [
          s("Threat-based urgency and opportunity-based urgency have opposite effects on adoption psychology. "),
          x(
            "Threat-based urgency ('our competitors are ahead and we will lose market share if we don't act') activates the amygdala's threat response, which in the context of AI is typically interpreted as personal job threat — regardless of how the message was intended. Once the threat response is activated, people spend cognitive energy on self-protection rather than on learning.",
            "Opportunity-based urgency ('this technology allows our team to do work we couldn't do before and deliver for clients in ways competitors cannot yet') activates the prefrontal cortex's reward and planning systems. People in an approach orientation are more likely to experiment, share what they learn, and sustain adoption over time.",
          ),
          s(" Audit every AI communication for threat language. Replace 'we must' and 'or else' framing with 'we can' and 'because of this' framing."),
        ],
        [
          s("The business case for AI urgency can be made entirely in opportunity language without losing its force. "),
          x(
            "A competitor comparison: 'Company X has reduced their proposal cycle to 48 hours using AI. We can do the same — and that means winning business we are currently losing.' This is urgency. It is competitive. And it frames the AI as a capability the team can use to win, not a threat that will make them redundant.",
            "The opportunity framing requires more creativity than the threat framing. It is easier to say 'our competitors are ahead' than to articulate specifically how AI capability creates a concrete opportunity for this team. The extra effort in crafting the opportunity narrative is repaid in adoption behaviour.",
          ),
          s(" Every AI urgency communication should answer: what can our team do with AI that we cannot do today — and what does winning look like with that capability?"),
        ],
        [
          s("Individual-level urgency is more effective than organisational-level urgency for driving personal adoption. "),
          x(
            "An organisational urgency message ('the company needs to transform to remain competitive') is true but distant. An individual urgency message ('you can use AI to produce the first draft of every client proposal in 20 minutes — here is how') is immediate and personal. The individual-level message is more likely to produce behaviour change in the next 48 hours.",
            "Individual urgency messages require functional specificity. They cannot be written centrally and distributed to all staff. They must be crafted for each functional group, showing the specific AI capability relevant to their specific work.",
          ),
          s(" Require functional change leads to develop role-specific urgency messages — what does AI allow this specific person to do that they cannot do today?"),
        ],
      ],
      examples: [
        {
          title: "Law firm — threat vs opportunity framing compared",
          body: "A law firm ran two internal communications about its AI legal research tool. The first (to one practice area): 'The legal market is being disrupted. Firms using AI are delivering research in hours that used to take days. We need to adopt or risk client loss.' The second (to a second practice area): 'Our AI legal research tool lets each associate produce a fully cited research memo in 90 minutes instead of 8 hours. Here is what one of your peers built with it this week.' Six-week adoption rate: first practice area 29%, second 61%. Same tool, different urgency framing.",
        },
        {
          title: "Insurance company — individual urgency converts sceptics",
          body: "An insurance company's AI claims tool had low adoption among senior adjusters despite strong executive sponsorship. A change manager spent four 30-minute sessions with individual sceptical adjusters showing them specifically how the tool reduced documentation time for the complex claims they personally handled most. Each session used the adjuster's own recent claim as the demonstration case. Of 12 sceptical adjusters who received personalised sessions, 10 became active adopters within two weeks. Generic communications had failed; individual opportunity demonstrations succeeded.",
        },
        {
          title: "Technology company — competitor urgency in opportunity framing",
          body: "A mid-market technology company's Chief Revenue Officer needed to create urgency around AI sales tools without triggering fear among a sales team that already felt pressure. The CRO presented three competitor companies by name and showed the specific AI capabilities each was using in their sales process — pipeline intelligence, proposal generation, and competitive battlecard automation. The message: 'Here is what they can do. Here is what we will be able to do when we adopt the same capability. Our window to match them is six months.' Framing the competitor information as a catching-up opportunity rather than an existential threat produced a 40% reduction in sales team resistance compared to a prior technology rollout.",
        },
      ],
    }),
    buildSection({
      number: "2.5",
      title: "Stakeholder mapping for AI transformation",
      subtitle: "How to identify who needs what kind of engagement — and sequence your change management accordingly",
      take: "AI stakeholder mapping is not a one-time exercise at programme launch. It is a living document that tracks each stakeholder group's position on the change adoption curve and prescribes the right engagement for each position. Stakeholders who are enthusiastic supporters in month one may become active resisters in month six as AI reaches their core responsibilities.",
      why: "Business leaders who treat stakeholder engagement as a launch-phase activity discover that the stakeholders who matter most in months 6–12 were not prioritised in months 1–3. Continuous stakeholder mapping prevents this gap.",
      paragraphs: [
        [
          s("AI stakeholder mapping organises stakeholders across two axes: change impact (how significantly does AI change their work?) and change disposition (are they currently a supporter, neutral, or resister?). "),
          x(
            "High impact + supporter: invest in making them change champions. High impact + neutral: invest in individual engagement to convert to supporter. High impact + resister: invest in deep understanding of their resistance source and targeted intervention. Low impact + any disposition: minimum viable engagement — they are not a risk and not a leverage point.",
            "The highest-value stakeholder engagement investment is always high-impact + neutral. Converting one high-impact neutral to a supporter creates more adoption momentum than any number of communications to already-supportive stakeholders.",
          ),
          s(" Map stakeholders before every phase transition. The stakeholder landscape changes as AI expands into new functions and roles."),
        ],
        [
          s("Middle managers are consistently the highest-impact stakeholder group in AI adoption — and consistently the most neglected. "),
          x(
            "Middle managers determine whether AI tools are used in practice by setting the day-to-day norms of their teams. A middle manager who is sceptical about AI will create an implicit permission structure where not using the AI is normalised. A middle manager who uses AI visibly and rewards its use in their team will create an adoption environment no amount of executive communication can replicate.",
            "Middle manager AI programmes — specific training, peer communities, leadership recognition for AI-adopting managers — have consistently produced the highest return on change management investment of any stakeholder engagement activity.",
          ),
          s(" Design a dedicated middle manager AI programme that is separate from the general employee programme. Middle managers need different support, different content, and different peer communities."),
        ],
        [
          s("Subject matter experts (SMEs) are the stakeholder group most likely to transition from supporter to resister as AI capability matures. "),
          x(
            "SMEs are often enthusiastic AI supporters in Horizon 1 when AI augments their expertise. They become resisters in Horizon 2 when AI begins to match or exceed their expertise in some domains. This transition is predictable, not surprising. SME stakeholder mapping should include a Horizon 2 resistence risk flag for every SME group whose core expertise is in an AI-automatable domain.",
            "Pre-empting SME resistance in Horizon 2 requires redefining the SME's value during Horizon 1 — before the automation reaches their expertise level. A programme that waits until SMEs become resisters to engage them has missed the window for pre-emption.",
          ),
          s(" For every SME group in your AI transformation, map when their expertise domain will be AI-automatable and design a role redefinition programme to run before that point."),
        ],
      ],
      examples: [
        {
          title: "Retailer — middle manager programme drives adoption",
          body: "A retailer's AI adoption programme had 58% employee utilisation at month three — disappointing given the tool's quality. A store-level analysis showed that stores with AI-adopting store managers had 79% employee adoption; stores with sceptical managers had 31%. The retailer launched a dedicated 6-week Middle Manager AI Programme: small cohort sessions, personal AI use case development, peer community, and a monthly 'AI practice' sharing session with the regional director. Store manager adoption moved from 47% to 84% over 12 weeks. Employee adoption followed to 73% within six weeks of manager adoption reaching 84%.",
        },
        {
          title: "Financial services — SME pre-emption programme",
          body: "A bank identified in its Horizon 1 stakeholder map that its 35 senior credit analysts had expertise in precisely the loan risk assessment domain that its Horizon 2 AI deployment would automate. The bank launched a credit analyst role redefinition programme six months before the Horizon 2 deployment — repositioning analysts as AI model validators, complex edge case specialists, and client relationship advisors. When the Horizon 2 deployment launched, the analysts had already experienced their new role definition and had practised it. Resistance was 14% — compared to 67% at a peer institution that deployed AI without pre-emption.",
        },
        {
          title: "Healthcare — stakeholder map tracks shift to resistance",
          body: "A hospital's quarterly stakeholder map update in month eight identified a significant shift: radiologists who were supporters in month two had moved to the neutral-to-resistant quadrant as AI diagnostic tools began flagging cases the radiologists had cleared. The map update triggered an immediate engagement programme: a clinical roundtable co-chaired by the CMO and three lead radiologists, a revised protocol positioning AI as a second opinion rather than a first decision, and a published accuracy comparison showing AI performance versus the radiologist average. The engagement prevented an organised clinical resistance campaign that would have required board-level intervention.",
        },
      ],
    }),
    buildSection({
      number: "2.6",
      title: "Quick wins as transformation anchors",
      subtitle: "How to design, celebrate, and build on early AI wins to sustain transformation momentum",
      take: "Quick wins in AI transformation serve three functions: they prove to sceptics that AI works in your specific context, they give champions something concrete to communicate, and they create positive emotional association with the transformation that sustains motivation through the harder Horizon 2 and 3 work. Quick wins must be real, visible, and connected to the transformation narrative — not cherry-picked anecdotes that the organisation cannot relate to.",
      why: "Leaders who launch AI transformation without engineering early quick wins are relying on the natural emergence of positive results to sustain momentum. Natural emergence is slow and uneven. Engineered quick wins are faster, more visible, and more directly connected to the transformation narrative the leader is communicating.",
      paragraphs: [
        [
          s("A quick win in AI transformation has three characteristics: it is demonstrably real (the numbers are auditable), it is relevant to a broad stakeholder group (not just a niche technical team), and it is connected to a business outcome that the organisation cares about. "),
          x(
            "An AI tool that saves a niche operations team 2 hours per week is real but not relevant to most stakeholders. An AI tool that reduces the time from customer complaint to resolution by 40% is real, relevant to every customer-facing employee, and connected to an outcome (customer satisfaction) the entire organisation values.",
            "Design your first AI deployment to produce a quick win that meets all three criteria — not just the deployment that is technically easiest or most convenient for the IT team.",
          ),
          s(" Before selecting your first AI use case, evaluate each candidate against the three quick win criteria. The technically easiest first use case is often not the best momentum-building first use case."),
        ],
        [
          s("The celebration of quick wins is as important as the wins themselves. "),
          x(
            "An AI quick win that is reported in a programme status update is a data point. An AI quick win that is shared in an all-hands meeting by the person who experienced it, with a before-and-after illustration, becomes a story that the organisation retells. Stories create social proof. Data points create awareness.",
            "The most effective quick win celebrations feature a real employee narrating their experience with AI — not a leader presenting a metric. Employee-narrated stories are more credible, more memorable, and more motivating than executive dashboards.",
          ),
          s(" For every major quick win, invest in the story as well as the metric. Identify the person whose experience best illustrates the win and give them a platform to narrate it."),
        ],
        [
          s("Quick wins must be sequenced to build on each other and connect to the transformation narrative. "),
          x(
            "A series of quick wins in unrelated functions looks like a collection of successful experiments, not a transformation. A series of quick wins that each build on the previous one — starting with a single function, expanding to adjacent functions, and eventually connecting to the organisation's core strategic value — tells the story of a transformation in progress.",
            "The transformation narrative connects each quick win to the next: 'Six months ago, we showed that AI could reduce our customer service response time by 40%. Today, we are announcing that the same AI capability has now reduced our new customer onboarding time by 35%. Next quarter, we will bring this to our account management team.'",
          ),
          s(" Write your quick win sequence narrative before your first deployment. The sequence is a communication strategy as much as a deployment strategy."),
        ],
      ],
      examples: [
        {
          title: "Insurance — quick win selection drives momentum",
          body: "An insurance company evaluated three potential first AI deployments: policy document extraction (high technical confidence, relevant to 8 people), customer churn prediction (medium technical confidence, relevant to 200 sales staff), and claims fraud detection (high technical confidence, relevant to the CFO). The company chose customer churn prediction — despite lower technical confidence — because it was relevant to the largest stakeholder group. The quick win was 12% reduction in churn in the first month. Shared in an all-hands by a sales manager who had used the tool, it became the most retold story in the company's AI transformation narrative.",
        },
        {
          title: "Professional services — employee-narrated win doubles impact",
          body: "A consulting firm's AI knowledge management tool produced a measurable quick win: research time per project reduced from 18 hours to 5 hours on average. The firm presented this in two ways: as a statistic in a partner communication and as a 3-minute video narrated by a first-year associate showing exactly how she used the tool on her most recent client project. Partner views of the statistic: 45%. Associate views of the video: 91%. The video produced four times as many voluntary tool trials in the week after publication as the statistic had in the preceding month.",
        },
        {
          title: "Manufacturer — sequenced quick wins tell transformation story",
          body: "A manufacturer's AI programme sequenced three quick wins to tell a connected story. Win 1 (month 3): AI predictive maintenance reduced unplanned downtime by 23% in Plant 1. Win 2 (month 8): AI quality inspection reduced defect rate by 18% in Plant 1, building on the maintenance reliability established in Win 1. Win 3 (month 14): AI supply chain optimisation reduced inventory holding costs by 14% across all plants, enabled by the data infrastructure built during Wins 1 and 2. The three wins told a coherent story: 'We are building a manufacturing operation that gets smarter every year.' The sequencing was planned before Win 1 was deployed.",
        },
      ],
    }),
    buildSection({
      number: "2.7",
      title: "Managing the messy middle of AI transformation",
      subtitle: "How to navigate the energy drop, resistance surge, and momentum loss that characterise months 6–18",
      take: "Every major transformation passes through a 'messy middle' — the period after the excitement of launch and before the visible success of scale. In AI transformation, the messy middle is particularly challenging because AI technology is evolving during this period, resistance from mainstream adopters is peaking, and the business case for continued investment is not yet fully proven. Leaders who recognise the messy middle as normal — not as failure — can navigate it.",
      why: "Leaders who mistake the messy middle for programme failure make premature decisions to scale back or redesign the programme, destroying the momentum that was building underneath the surface turbulence. Recognising the messy middle pattern is the first step to navigating it.",
      paragraphs: [
        [
          s("The messy middle in AI transformation is characterised by five simultaneous challenges: early adopter fatigue, mainstream resistence, technology evolution pressure, business case scrutiny, and leadership attention competition. "),
          x(
            "Early adopters who drove Horizon 1 success are now managing a live deployment while being asked to expand into Horizon 2. Mainstream adopters are experiencing the tool in their real workflows and encountering its limitations. The AI technology is generating news about newer, better tools that make the deployed tool seem outdated. Finance is asking for ROI evidence that is not yet fully measurable. And three other strategic programmes are competing for the CEO's attention.",
            "Each of these five challenges is individually manageable. Together, they create a sense of programme fragility that can cause premature course corrections.",
          ),
          s(" Name the messy middle to your leadership team before you reach it. A shared mental model of 'this is expected' reduces the risk of premature intervention."),
        ],
        [
          s("Three leadership behaviours sustain transformation through the messy middle: visible continued investment, patience with imperfect evidence, and connection to long-term purpose. "),
          x(
            "Visible continued investment — a leader who increases their personal engagement with the AI programme during the messy middle signals confidence in the programme's direction. Patience with imperfect evidence — a leader who does not demand full ROI proof at 12 months in a 36-month transformation allows the programme to develop. Connection to long-term purpose — a leader who consistently connects AI programme progress to the organisation's long-term strategy prevents the programme from being evaluated against short-term metrics it cannot yet meet.",
            "The most damaging leader behaviour in the messy middle is visible doubt. When the leadership team appears uncertain about whether the programme will succeed, the organisation reads the uncertainty as permission to reduce their own investment in adoption.",
          ),
          s(" If you are entering the messy middle, increase — not maintain, and never reduce — your visible personal engagement with the AI transformation programme."),
        ],
        [
          s("The messy middle is the right moment for a structured mid-programme review — not a programme redesign. "),
          x(
            "A mid-programme review at months 9–12 assesses what is working, what is not working, and what specific adjustments will improve programme trajectory without abandoning programme direction. It is diagnostic and corrective, not evaluative and terminal.",
            "A programme redesign at month 12 — changing programme goals, replacing core vendors, or resequencing the deployment plan — destroys the institutional learning that has accumulated and restarts the change management cycle from a lower baseline. Structural corrections in the messy middle are almost always net-negative.",
          ),
          s(" At month 9–12, conduct a mid-programme review. Fix what is broken. Don't redesign the programme."),
        ],
      ],
      examples: [
        {
          title: "Bank — premature intervention destroys momentum",
          body: "A bank's AI transformation programme had achieved 41% adoption at month 10 — below the 60% target. The CEO interpreted the underperformance as programme failure and commissioned a programme redesign, replacing the change management firm and restarting stakeholder engagement from the beginning. Adoption dropped to 28% as the organisation interpreted the redesign as confirmation that the programme had failed. At month 18, a new change management engagement reported that the original programme had been on a standard adoption curve that would have reached 65% adoption by month 14 — two months after the intervention that reset it.",
        },
        {
          title: "Retailer — mid-programme review prevents wrong intervention",
          body: "A retailer's month 10 mid-programme review identified two specific obstacles: store managers in regions 3 and 4 were not completing mandatory AI training, and the AI tool's mobile interface was causing friction for shift workers without desktop access. Neither issue was a programme design problem — they were execution gaps. Targeted interventions — a regional manager engagement programme and a mobile interface improvement — resolved both within eight weeks. Adoption reached programme targets by month 15 without a programme redesign.",
        },
        {
          title: "Technology company — messy middle named and navigated",
          body: "A technology company's CTO explicitly named the messy middle in a month 8 all-hands: 'We are in the hardest phase of this transformation — it's called the messy middle and every transformation goes through it. Our adoption numbers are below where we expected. We have also learned things that make our Horizon 2 deployment better than it would have been without these 8 months. I'm more confident in where we are going than I was in month 1.' Employee survey at month 9 showed a 14-point increase in AI programme confidence compared to month 7 — driven by the CTO's explicit acknowledgement that the difficulty was expected and the direction was unchanged.",
        },
      ],
    }),
    buildSection({
      number: "2.8",
      title: "Sustaining change through setbacks",
      subtitle: "How to respond to AI failures, errors, and public setbacks without losing transformation momentum",
      take: "AI setbacks — a model producing a costly wrong answer, a privacy incident, a high-profile adoption failure — are not exceptions in AI transformation. They are near-certainties over a multi-year programme horizon. Leaders who have a setback response framework before the setback occurs recover faster, retain more organisational trust, and sustain more programme momentum than leaders who respond reactively.",
      why: "Business leaders who have thought through their setback response before a setback is visible can respond with honesty, speed, and a clear path forward. Leaders who are surprised by setbacks tend to respond with defensiveness, delay, and uncertainty that amplifies the damage beyond the incident itself.",
      paragraphs: [
        [
          s("The setback response framework has four phases: immediate acknowledgement (within 24 hours), honest investigation (within 5 business days), transparent correction (published and communicated), and programme continuity reaffirmation (within 30 days). "),
          x(
            "Immediate acknowledgement means the organisation's leadership does not wait for a full investigation before communicating. 'We are aware of [the issue], we are investigating, and we will communicate our findings by [specific date]' is a complete and honest immediate response that preserves trust better than silence.",
            "The most damaging setback response pattern is: silence during investigation, defensive communication when findings are complete, correction without acknowledgement of the failure's impact. This pattern is experienced as institutional dishonesty even when each individual step was taken in good faith.",
          ),
          s(" Write your setback communication template before any setback occurs. A pre-written template prevents the hesitation that turns a 24-hour response window into a 72-hour silence."),
        ],
        [
          s("Setbacks that are handled well consistently strengthen programme trust more than setbacks that never occurred. "),
          x(
            "An organisation that experiences a visible AI error, investigates it honestly, communicates the root cause transparently, and makes the correction visible demonstrates a level of AI governance maturity that organisations without setbacks cannot demonstrate. The setback, handled well, is evidence that the organisation's AI governance is real.",
            "Employee surveys consistently show that trust in an AI programme increases when a setback is handled honestly — even among employees who were sceptical of the AI before the setback. The honest response to failure is more persuasive than any number of success communications.",
          ),
          s(" After resolving a setback, share the root cause and correction with the full programme audience. Transparent post-incident communication is the highest-ROI trust-building activity in your programme calendar."),
        ],
        [
          s("The setback that most consistently damages AI transformation programmes is not a technical failure but a perceived leadership failure — when the programme team knew about a problem and did not communicate it. "),
          x(
            "A technical AI failure is recoverable with honest communication. A communication failure — when affected stakeholders discover they were not told about a known issue — damages the trust foundation of the entire programme, not just the specific incident. The perception of institutional concealment is more damaging than the original error.",
            "A simple internal reporting norm — any team member who identifies a material AI error escalates immediately to the programme lead, who communicates to affected stakeholders within 24 hours — prevents the communication failure even when technical failures are unavoidable.",
          ),
          s(" Establish a clear AI incident escalation protocol before deployment. The protocol should be simpler than your IT incident process — speed of communication matters more than procedural completeness."),
        ],
      ],
      examples: [
        {
          title: "Financial services — honest setback response builds trust",
          body: "A bank's AI credit scoring tool produced a systematic error in one loan category for six weeks before detection, affecting 340 loan applications. The bank's immediate response was a customer communication within 24 hours, a public statement of the root cause within 5 days, and a remediation offer to every affected applicant within 10 days. An employee trust survey taken 30 days after the incident showed AI programme trust at 71% — 8 points higher than the survey taken before the incident. The honest response to a real failure had demonstrated more credible AI governance than 12 months of positive programme communications.",
        },
        {
          title: "Retailer — communication failure amplifies incident",
          body: "A retailer's AI demand forecasting tool produced materially incorrect forecasts for a seasonal product range, leading to overstock in three product categories. The programme team identified the error in week two but delayed communication pending an internal investigation. By week five, store managers had independently identified the overstock and connected it to the AI forecasting. When the programme team communicated the error in week five, the delay was interpreted as concealment. Store manager trust in the AI programme dropped 31 points in a follow-up survey. The original error was recoverable. The communication delay was not.",
        },
        {
          title: "Healthcare — pre-written setback protocol deployed",
          body: "A hospital system had developed a pre-written AI setback communication template as part of its governance framework. When an AI diagnostic tool produced an unexpected recommendation pattern that required clinical review, the template allowed the CMO to communicate to clinical staff within 4 hours: what had occurred, that an investigation was underway, the specific actions taken to pause the tool's use until investigation was complete, and the date by which findings would be shared. Clinical staff trust survey at 30 days was unchanged from pre-incident levels — the structured, rapid response had neutralised the incident's trust impact.",
        },
      ],
    }),
    buildSection({
      number: "2.9",
      title: "BL decision lens: your AI change management plan",
      subtitle: "The six decisions that determine whether your AI change management programme will succeed",
      take: "An AI change management plan is not a document — it is a set of leadership decisions made before transformation begins. The six decisions are: which horizon model are we using, who are the five coalition roles and who fills each one, what is our stakeholder map and engagement sequence, what are our quick wins and how will we celebrate them, what is our setback response protocol, and what outcome metrics will we use at each review. These six decisions, documented and owned, are your change management plan.",
      why: "Business leaders who delegate AI change management planning entirely to HR or an external firm often discover that the plan does not reflect the leadership team's values, knowledge of the organisation, or commitment level. The six decisions cannot be delegated because they require leadership ownership to be credible to the organisation.",
      paragraphs: [
        [
          s("Decision 1 — Horizon model: which three-horizon timeline is right for this organisation's AI maturity, resource level, and strategic ambition? "),
          x(
            "An organisation at AI maturity Level 1 (no current AI deployment, no dedicated AI team) should plan a Horizon 1 of 18 months, not 12. An organisation at maturity Level 3 (multiple active AI deployments, dedicated AI team) can plan a 12-month Horizon 1 with higher confidence. The horizon timeline is a risk management decision, not just a scheduling decision.",
            "Horizon timelines that are too aggressive for the organisation's change capacity produce messy middle crises. Horizon timelines that are too conservative for the organisation's strategic urgency produce competitive lag. The right timeline is the intersection of change capacity and strategic urgency.",
          ),
          s(" Document the horizon timeline decision with the rationale — it will be revisited at every quarterly review."),
        ],
        [
          s("Decision 2 — Coalition constitution: who specifically fills each of the five coalition roles, with what time commitment and what decision authority? "),
          x(
            "The coalition constitution should name individuals, not job titles, for each of the five roles. It should specify the time commitment in hours per week (not 'as needed' — that means zero). And it should specify what each coalition member is authorised to decide without escalation — because decision authority determines whether the coalition can move at the speed the transformation requires.",
            "A coalition whose members have authority to recommend but not decide will slow the programme at every point requiring a decision. Coalition members need real authority within their scope, or the programme will be managed through a slower escalation pathway.",
          ),
          s(" Before launching, confirm that each coalition member knows their time commitment, authority scope, and the escalation pathway for decisions outside their scope."),
        ],
        [
          s("Decisions 3–6 require the same specificity: stakeholder maps with named individuals and engagement owners; quick wins with measurable criteria and celebration plans; setback protocols with named contacts and communication templates; and outcome metrics with measurement owners and review frequency. "),
          x(
            "The difference between a change management plan that succeeds and one that fails is almost always specificity. 'We will engage stakeholders' fails. 'Maria Chen will meet individually with all 12 regional operations managers in weeks 3–6 to address AI concerns and gather adoption barriers' succeeds. The specificity creates accountability, predictability, and a record that can be evaluated.",
            "Vague plans produce vague results. The investment in specificity before launch is returned as clarity during execution and evidence during review.",
          ),
          s(" Review your change management plan against the specificity standard: if any element says 'we will' without naming who, when, and how, it is not a plan — it is an aspiration."),
        ],
      ],
      examples: [
        {
          title: "Manufacturer — six-decision framework builds credible plan",
          body: "A manufacturer's leadership team spent a half-day session making all six change management decisions before programme launch. The output was a four-page document: the three-horizon timeline, the coalition roster with time commitments and authority scopes, the stakeholder map with engagement owners and sequences, the first three quick wins with measurement criteria and celebration plans, the setback protocol with the VP of Operations as named communication owner, and five outcome metrics with the Analytics Director as owner and monthly reporting cadence. The document was shared with the full programme team. Every programme review used it as the baseline for tracking progress and divergence.",
        },
        {
          title: "Financial services — coalition authority gap identified before launch",
          body: "A financial services firm's change management planning session identified that its proposed functional change leads had authority to recommend training schedules and communications but not to make system access decisions for AI tool deployment. The change leads' recommendations required IT security approval that averaged 14 days. Before launch, the firm established a pre-approved access protocol for AI programme tools, reducing IT security review to 3 days for programme-approved tools. The authority gap was identified and resolved in a planning session, not discovered during execution.",
        },
        {
          title: "Healthcare — specificity in stakeholder plan prevents gap",
          body: "A hospital's change management plan specified that the Physician AI Champion Programme — three lead physicians who would engage sceptical colleagues — required 4 hours per week from each physician. When the plan was reviewed with the CMO, two of the three physicians were already at full clinical capacity and could not commit 4 hours per week without backfill. The plan was revised to reduce commitment to 2 hours per week and add a fourth champion. The revision was possible because the plan was specific enough to test against real capacity before launch.",
        },
      ],
    }),
  ],
  quiz: [
    {
      q: "What is the primary reason AI change management requires more investment than ERP or CRM change management?",
      options: [
        "AI technology is more complex and requires more technical training",
        "AI tools are more expensive and require more governance oversight",
        "AI changes what decisions humans make and their professional identity, not just their workflows and tools",
        "AI deployments take longer and therefore require more programme management",
      ],
      correct: 2,
      correctFeedback:
        "Correct. ERP and CRM changed processes and tools. AI changes the scope of human decision-making and professional identity. The change management framework must address decision authority transfer, skill obsolescence anxiety, and output ownership ambiguity — dimensions that standard IT change management was not designed for.",
      wrongFeedback:
        "The key difference is what changes. ERP changed processes and tools. AI changes roles, authority, and identity. Standard IT change management addresses the first category. AI change management must address both — with the identity dimension requiring specialised interventions that ERP change management never needed.",
    },
    {
      q: "In the three-horizon AI change model, what is the primary change management objective in Horizon 1?",
      options: [
        "Achieving maximum tool adoption as quickly as possible",
        "Building the organisation's capacity to learn with AI — not just adopting specific tools",
        "Proving AI ROI to justify Horizon 2 investment",
        "Eliminating all change resistance before scaling begins",
      ],
      correct: 1,
      correctFeedback:
        "Correct. Horizon 1's primary objective is building adaptive learning capacity, not maximising adoption of specific tools. An organisation that can learn with AI quickly in Horizon 2 and 3 is more valuable than one that adopted Tool A at 80% utilisation but cannot adapt when Tool B replaces it.",
      wrongFeedback:
        "Horizon 1's primary objective is learning capacity, not adoption rate. Adoption of specific tools is a means to an end. The end is an organisation that can learn with AI continuously — not one that mastered a specific tool that may be outdated in 18 months.",
    },
    {
      kind: "categorize",
      q: "Categorise these AI urgency communication examples as either 'Threat-Based Framing' or 'Opportunity-Based Framing':",
      categories: ["Threat-Based Framing", "Opportunity-Based Framing"],
      items: [
        { text: "Our competitors are ahead — we risk losing market share if we don't adopt AI", category: 0 },
        { text: "AI will reduce headcount if productivity targets are not met", category: 0 },
        { text: "This tool lets our team produce client proposals in 20 minutes instead of 3 days", category: 1 },
        { text: "Here is specifically what our team can do with AI that our competitors cannot yet", category: 1 },
        { text: "Staff who do not adopt AI tools risk becoming redundant", category: 0 },
        { text: "AI gives each analyst the research capacity of five people — here is what that means for your career", category: 1 },
      ],
      correctFeedback:
        "Correct. Threat-based framing activates defensive psychology that reduces psychological safety and slows adoption. Opportunity-based framing activates approach psychology that accelerates learning and adoption. The business case for AI urgency can be made entirely in opportunity language without losing competitive relevance.",
      wrongFeedback:
        "Threat-based framing — market share loss, headcount reduction, redundancy risk — activates the threat response and triggers self-protection rather than learning. Opportunity-based framing — specific capability gains, career advancement, competitive advantage — activates approach behaviour that is more conducive to adoption.",
    },
    {
      q: "A business leader is reviewing month 10 AI adoption metrics: 43% utilisation against a 60% target. The programme team is recommending a programme redesign. What should the leader do?",
      options: [
        "Approve the programme redesign — a 17-point gap at month 10 indicates programme failure",
        "Commission a mid-programme review to identify specific obstacles, then fix those — not redesign the programme",
        "Set a 30-day deadline for the programme team to reach 60% or the programme will be shut down",
        "Replace the change management firm responsible for the adoption shortfall",
      ],
      correct: 1,
      correctFeedback:
        "Correct. Month 10 adoption below target is a common pattern in the messy middle of transformation. A mid-programme review identifies the specific obstacles — which are almost always execution gaps, not programme design flaws. Targeted corrections consistently outperform programme redesigns, which destroy institutional learning and restart the change management cycle from a lower baseline.",
      wrongFeedback:
        "43% at month 10 in a transformation planned for 36 months is not programme failure — it is the messy middle. A programme redesign at this stage destroys the institutional learning that has accumulated and restarts the adoption clock. A mid-programme review identifies specific obstacles; targeted corrections address them without abandoning programme direction.",
    },
    {
      kind: "order",
      q: "Order these setback response phases in the correct sequence:",
      items: [
        "Immediate acknowledgement within 24 hours to affected stakeholders",
        "Honest investigation completed within 5 business days",
        "Transparent correction communicated to all stakeholders",
        "Programme continuity reaffirmation within 30 days",
      ],
      prompt: "Drag to arrange in the correct sequence",
      correctFeedback:
        "Correct. The setback response sequence prioritises speed of communication over completeness of investigation. Acknowledging within 24 hours — before the investigation is complete — preserves trust. The worst response is silence during investigation followed by defensive communication when findings are available.",
      wrongFeedback:
        "The setback response must start with immediate acknowledgement — even before the investigation is complete. 'We are aware and investigating' is a complete honest response. Silence during investigation is the pattern that damages trust most severely.",
    },
    {
      q: "Middle managers have consistently high impact on AI adoption. Why are they frequently underinvested in AI change management programmes?",
      options: [
        "Middle managers are typically resistant to technology change and difficult to engage",
        "Executive sponsors believe middle managers will follow their lead automatically",
        "Middle managers are seen as a transmission layer rather than as the primary adoption lever they actually are",
        "Middle managers do not have sufficient technical knowledge to be effective AI champions",
      ],
      correct: 2,
      correctFeedback:
        "Correct. Middle managers are treated as a communication transmission layer — people who pass messages from senior leadership to frontline teams. In reality, they are the primary adoption lever: their day-to-day norms determine whether AI use is expected, optional, or subtly discouraged in their teams. Dedicated middle manager AI programmes consistently outperform general employee programmes in adoption impact.",
      wrongFeedback:
        "Middle managers are the highest-impact AI adoption lever and are frequently underinvested because they are viewed as a communication relay rather than as the primary culture-setters whose daily behaviour determines whether AI is genuinely used or officially available but practically ignored.",
    },
  ],
});
