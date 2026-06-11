import { buildChapter, buildSection, s, x, sectionWithDiagram } from "../concepts-pb4-helpers";

export const chapter03FounderFirstAiHire = buildChapter({
  slug: "founder-first-ai-hire",
  number: 3,
  shortTitle: "Your First AI Hire",
  title: "Your First AI Hire — The Most Important Decision",
  readingMinutes: 22,
  summary:
    "Getting this wrong sets your AI capability back by 12 months. When to hire, generalist vs specialist, the founding AI lead profile, internal promotion vs external hire, contractor vs full-time, reference checks, and the job description that attracts the right candidates.",
  keyTakeaway:
    "Your first AI hire is a generalist builder with product sense — not a researcher, not a narrow specialist, and not a contractor unless the scope is explicitly bounded.",
  pmCallout:
    "As a founder: the first AI hire sets your technical culture, architecture, and hiring bar for years. Rush this decision and you rebuild the team; get it right and you compound.",
  sections: [
    sectionWithDiagram({
      number: "3.1",
      title: "When to make your first AI hire",
      subtitle: "The milestone that tells you it is time — not the calendar date",
      take: "Hire when AI is committed to the core product roadmap, the founder cannot prototype further, and delaying blocks revenue or fundraising — not when investors say 'where is your AI team?'",
      why: "Too early: expensive talent sits idle while product pivots. Too late: competitors ship, technical debt compounds, and you hire desperately.",
      paragraphs: [
        [
          s("The milestone test has three parts. "),
          x(
            "One: AI is in the product roadmap for the next two quarters, not 'exploring'. Two: a founder or engineer has validated a prototype and hit a skill ceiling. Three: the cost of delay exceeds $15K–$25K/month in opportunity or contractor spend.",
            "If only one is true, wait or contract.",
          ),
          s(" Calendar dates ('hire after seed') mislead."),
        ],
        [
          s("Signs you are too early. "),
          x(
            "Product still pivoting weekly. No labelled data or user feedback. AI is a deck slide, not a user story.",
            "Hiring now produces a senior engineer who optimises the wrong problem.",
          ),
          s(" Contractors or advisors bridge exploration cheaper than FTE."),
        ],
        [
          s("Signs you are too late. "),
          x(
            "Engineers hack prompts in production without evals. Customers expect AI features you cannot ship. Fundraise narrative requires a technical AI lead you do not have.",
            "Desperation hiring lowers bar and produces 12-month regret.",
          ),
          s(" The window between too early and too late is often 8–12 weeks — move deliberately."),
        ],
      ],
      examples: [
        {
          title: "Right timing — prototype ceiling hit",
          body: "Founders built RAG demo with OpenAI API; enterprise pilot required permissions, evals, and 99.5% uptime narrative. Contractor spent $30K over two months. First FTE AI Engineer hired when pilot contract was signed. Timing matched revenue trigger.",
        },
        {
          title: "Too early — idle expensive hire",
          body: "Post-seed, founder hired AI Engineer before product direction settled. Three months of fine-tuning experiments abandoned after pivot to different vertical. $75K burned. Lesson: commit the roadmap before committing the headcount.",
        },
        {
          title: "Too late — competitor won the enterprise deal",
          body: "B2B startup delayed AI hire six months while outsourcing. Competitor shipped compliant AI feature; lost three enterprise deals. Emergency hire at inflated comp. Delay cost more than early hire would have.",
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
      number: "3.2",
      title: "Generalist AI engineer vs specialist",
      subtitle: "Why your first AI hire should be able to do three jobs and why that narrows the field dramatically",
      take: "First hire must: build features, set up basic evals and monitoring, and talk to customers about failure modes. Specialist researchers, pure MLOps, or narrow CV experts are wrong for seat one.",
      why: "At seed, one person is the entire AI function. Specialists excel in large teams; generalists survive alone.",
      paragraphs: [
        [
          s("The generalist profile at seed. "),
          x(
            "Ship LLM features end-to-end: data ingestion, retrieval, prompts, API integration, basic frontend if needed. Set up eval harnesses and logging — minimum viable MLOps. Join customer calls when AI fails and translate feedback into fixes.",
            "This is the full generalist profile at seed — three jobs, one person.",
          ),
          s(" This is a T-shaped engineer: broad with one deep area."),
        ],
        [
          s("Why specialists fail as hire #1. "),
          x(
            "NLP researcher wants to publish, not fix production bugs. MLOps expert wants infrastructure that does not exist yet. CV specialist cannot help with your text agent.",
            "Specialists become hire #3–5 when team size supports focus.",
          ),
          s(" Narrow excellence is a luxury of headcount."),
        ],
        [
          s("Interview for breadth with evidence. "),
          x(
            "Ask: 'Tell me about a week where you did backend, prompt tuning, and a customer call.'",
            "Single-domain depth without adjacent skills is a Series B profile, not seed.",
          ),
          s(" The field narrows — expect 30–50 qualified candidates globally for a compelling role, not thousands."),
        ],
      ],
      examples: [
        {
          title: "Founding AI Engineer — three hats one quarter",
          body: "First hire shipped RAG feature, built eval dashboard, and joined five customer calls explaining hallucination rates. No MLOps team, no AI PM. Generalist profile matched seed reality. Still lead at Series B.",
        },
        {
          title: "Specialist misfire — CV PhD at text startup",
          body: "Hired computer vision PhD for document AI startup. Brilliant papers, could not debug LangChain pipeline. Replaced with generalist AI Engineer in four months. Specialist was hire #4 material, not #1.",
        },
        {
          title: "Full-stack + AI — underrated profile",
          body: "Candidate was strong backend engineer who self-taught RAG and evals via side project. Hired as first AI seat. Shipped faster than pure ML candidates because they owned deployment. Founders: adjacent generalists often outperform AI-only specialists at seed.",
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
      number: "3.3",
      title: "The founding AI lead — what this person must be",
      subtitle: "Technical depth, product sense, and communication ability — why all three are non-negotiable",
      take: "Founding AI lead sets architecture, hiring bar, and technical culture. They need depth to make irreversible decisions, product sense to prioritise user outcomes, and communication to align founders, engineers, and customers.",
      why: "Weak founding leads produce wrong architecture that survives three pivots. Strong ones compound capability with every hire they make.",
      paragraphs: [
        [
          s("Technical depth — not the deepest, but deep enough. "),
          x(
            "They choose RAG vs fine-tune, model provider, eval strategy, and data schema — decisions expensive to reverse.",
            "They do not need to invent architectures — they need to select wisely among known options.",
          ),
          s(" Ask: what irreversible decision would they own in month one?"),
        ],
        [
          s("Product sense — AI is a user experience problem. "),
          x(
            "They push back on features that demo well but fail in production. They define 'good enough' accuracy with user context.",
            "They treat human override rate as a product metric, not an engineering embarrassment.",
          ),
          s(" Founders should hire someone who argues with the roadmap constructively."),
        ],
        [
          s("Communication — the glue at seed scale. "),
          x(
            "They explain model limits to sales without killing deals. They write docs the next hire reads. They debrief founders in business terms.",
            "Brilliant engineers who cannot communicate create founder bottlenecks.",
          ),
          s(" All three dimensions are non-negotiable for the founding AI lead."),
        ],
      ],
      examples: [
        {
          title: "Architecture decision — RAG first",
          body: "Founding lead chose RAG over fine-tune for legal product, documented rationale, set eval bar at 92% citation accuracy. Decision still correct 18 months later. Depth + product sense prevented $80K fine-tune detour.",
        },
        {
          title: "Communication save — enterprise sales",
          body: "Enterprise prospect asked about hallucination liability. AI lead joined call, explained guardrails and human review, closed deal. Founder could not have answered alone. Communication was revenue.",
        },
        {
          title: "Depth without product — rejected candidate",
          body: "Candidate optimised BLEU scores on internal benchmark while user task completion stagnated. Founder passed — wanted someone who optimises user outcomes. Founding lead must connect metrics to product.",
        },
      ],
    }),
    buildSection({
      number: "3.4",
      title: "Internal promotion vs external hire",
      subtitle: "When your best engineer can grow into the AI lead role — and when that is wishful thinking",
      take: "Promote internally when someone has already shipped AI features, wants the role, and has stakeholder trust. Hire externally when AI is net-new capability, timeline is urgent, or internal candidate has potential but no evidence.",
      why: "Internal promotion preserves culture and costs less. External hire brings experience you lack. Wrong choice costs a year.",
      paragraphs: [
        [
          s("When internal promotion works. "),
          x(
            "Your full-stack engineer built the AI prototype, runs the evals, and customers already trust them.",
            "They want the role and can articulate what they would do differently with dedicated time.",
          ),
          s(" Promote with title, comp, and explicit mandate — not just extra work."),
        ],
        [
          s("When internal promotion is wishful thinking. "),
          x(
            "'They are smart, they can learn AI' without shipped evidence is hope, not strategy.",
            "Learning on the job at lead level while competitors hire experienced builders is a race you lose.",
          ),
          s(" Potential is not proof."),
        ],
        [
          s("Hybrid path — external lead, internal growth. "),
          x(
            "Hire external founding AI lead; pair with strong internal engineer for domain knowledge transfer.",
            "Common in vertical AI where internal person knows industry, external person knows stack.",
          ),
          s(" Structure onboarding for knowledge transfer, not territorial warfare."),
        ],
      ],
      examples: [
        {
          title: "Internal promotion — backend engineer to AI lead",
          body: "Backend engineer shipped entire RAG MVP and wanted the role. Promoted with $40K raise and 0.5% refresh. External search would have lost six months of domain context. Right call when evidence exists.",
        },
        {
          title: "Wishful promotion — regret",
          body: "CEO promoted loyal early engineer to 'Head of AI' with no LLM experience. Twelve months, no production AI feature. External hire replaced them; morale damage took quarters to repair. Loyalty without capability is expensive.",
        },
        {
          title: "Hybrid — external lead + domain engineer",
          body: "Health-tech startup hired external AI lead; paired with clinician-engineer co-founder. External owned stack; internal owned clinical eval criteria. Model shipped with domain-valid metrics. Hybrid model for vertical AI.",
        },
      ],
    }),
    buildSection({
      number: "3.5",
      title: "Contractor vs full-time for the first AI role",
      subtitle: "The cases where starting with a contractor is smart and the cases where it signals you are not serious",
      take: "Contractors work for bounded scope: prototype, eval framework, architecture review. Full-time is right when AI is core product and you need ownership, not deliverables. Never let a contractor become permanent tech lead by default.",
      why: "Contractors reduce commitment risk during exploration. They also reduce ownership and accumulate architecture decisions nobody maintains.",
      paragraphs: [
        [
          s("When contractor is smart. "),
          x(
            "Pre-product-market-fit exploration. Need architecture review before FTE. Specific 6–8 week deliverable (eval harness, RAG prototype).",
            "Budget under $50K to de-risk before $200K/year hire.",
          ),
          s(" Write explicit handoff requirements in the SOW."),
        ],
        [
          s("When contractor signals you are not serious. "),
          x(
            "AI is core to fundraise narrative but you will not commit FTE. Contractor has been 'interim lead' for 9+ months.",
            "No internal person learning alongside contractor — bus factor remains one.",
          ),
          s(" Top AI talent avoids 'permanent contractor' companies."),
        ],
        [
          s("Contractor-to-hire path. "),
          x(
            "Structure 3-month contract with conversion option and mutual eval.",
            "Best contractors become best hires because you have production evidence.",
          ),
          s(" Trial before marriage — but set a decision date."),
        ],
      ],
      examples: [
        {
          title: "Contractor prototype — clean handoff",
          body: "Contractor built RAG POC and eval suite in six weeks, documented architecture, trained founder's engineer on maintenance. FTE hired with clear spec. Contractor path worked because scope was bounded.",
        },
        {
          title: "Permanent contractor — architecture rot",
          body: "Nine months of contractor-as-lead; no internal ownership. Contractor left; codebase undocumented. Rebuild cost six months. Founder lesson: contractors advise or deliver bounded work — they do not permanently lead.",
        },
        {
          title: "Contract-to-hire success",
          body: "Three-month contract with conversion clause. Contractor shipped production feature month two; converted to FTE with mutual enthusiasm. Lower risk than blind hire.",
        },
      ],
    }),
    buildSection({
      number: "3.6",
      title: "Reference checking AI candidates",
      subtitle: "The questions that matter — what to ask former managers and collaborators that reveals things interviews cannot",
      take: "Ask references: What shipped because of them? How did they handle production failures? Would you hire them again as founding AI lead? Weak enthusiasm is a pass.",
      why: "Candidates rehearse interviews. References reveal patterns — especially how they behave under failure and ambiguity.",
      paragraphs: [
        [
          s("Questions for managers. "),
          x(
            "'What AI feature or model did they ship to production?' 'What happened when it failed?' 'How do they prioritise — research vs shipping?'",
            "'Would you hire them as the first AI person at a startup?' — listen for pause.",
          ),
          s(" Specific questions beat 'would you rehire them?'"),
        ],
        [
          s("Questions for peers. "),
          x(
            "'What was it like to code review their work?' 'Did they document decisions?' 'How did they handle disagreement on architecture?'",
            "Peers reveal collaboration truth managers may not see.",
          ),
          s(" One peer reference minimum for senior hires."),
        ],
        [
          s("Red flags in references. "),
          x(
            "Hesitation, qualified praise ('great researcher, needed more product direction'), or references who barely know the work.",
            "Candidate provides only friends from university — insist on manager and peer.",
          ),
          s(" Founders who skip references on AI hires regret it."),
        ],
      ],
      examples: [
        {
          title: "Reference reveal — production failure response",
          body: "Reference described candidate who owned a model regression, rolled back in two hours, wrote postmortem, and added eval gate. Hired. Reference check predicted exactly the behaviour needed at seed.",
        },
        {
          title: "Qualified praise — pass",
          body: "Manager said 'brilliant, but needed heavy PM support to ship'. Founder needed self-directed founding lead. Passed despite strong technical interview. Reference saved a mis-hire.",
        },
        {
          title: "Fake reference list — investigative pass",
          body: "Candidate listed three references who were personal friends. Founder insisted on former manager from LinkedIn. Manager's lukewarm response confirmed interview doubts. Always verify independently.",
        },
      ],
    }),
    buildSection({
      number: "3.7",
      title: "Founder decision lens: the first AI hire job description",
      subtitle: "What to write, what not to write, and where to post it to attract the right candidates",
      take: "Write: specific problem, stack hints, what they'll ship in 90 days, comp range, equity. Avoid: 'rockstar', 'ninja', vague 'AI expert', unrealistic PhD requirements for application roles. Post: niche communities, not only LinkedIn.",
      why: "Job descriptions filter candidates before you speak. Vague posts attract vague applicants; specific posts attract builders.",
      paragraphs: [
        [
          s("Structure that works. "),
          x(
            "Paragraph 1: problem and why it matters. Paragraph 2: what you'll ship in first 90 days. Paragraph 3: stack and team. Paragraph 4: comp range and equity.",
            "Include 'first AI hire' explicitly — signals scope and upside.",
          ),
          s(" Specificity is recruiting marketing."),
        ],
        [
          s("What to avoid. "),
          x(
            "Laundry lists of 20 frameworks. '10 years LLM experience' (field is three years old). Hidden comp — top candidates skip.",
            "'Fast-paced environment' without mentioning eval culture or on-call reality.",
          ),
          s(" Bad JDs are negative branding in a small talent pool."),
        ],
        [
          s("Where to post. "),
          x(
            "LinkedIn + Twitter/X AI community + Hacker News Who's Hiring + niche Slack/Discord (Latent Space, local AI meetups).",
            "Warm intros beat job boards 3:1 for senior AI talent. Ask investors and advisors for referrals before posting.",
          ),
          s(" Referral bonus ($5K–$10K) pays for itself on first AI hire."),
        ],
      ],
      examples: [
        {
          title: "JD that filled in 3 weeks",
          body: "JD opened with: 'You will own RAG over 50K legal documents and ship to three enterprise pilots in 90 days.' Listed comp $165K–$185K + 0.5%–0.8%. Forty qualified applicants, five interviews, one offer. Specificity worked.",
        },
        {
          title: "Vague JD — zero pipeline",
          body: "'AI expert needed for exciting startup' — no problem, no comp, 15 frameworks listed. Two applicants in six weeks. Rewrote with 90-day deliverable; pipeline opened in ten days.",
        },
        {
          title: "Investor referral — closed before posting",
          body: "Founder asked lead investor for three AI engineer intros before writing JD. Hired from second intro. JD posted anyway for pipeline depth. Warm intros are the highest-ROI recruiting channel.",
        },
      ],
    }),
  ],
  quiz: [
    {
      q: "You have an AI prototype, a signed enterprise pilot requiring production AI in 60 days, and founders cannot advance the stack. Correct action?",
      options: [
        "Wait until Series A to hire — conserve cash.",
        "Make first AI hire (or convert proven contractor) — milestone triggers hiring.",
        "Hire AI Research Scientist for credibility.",
        "Keep hacking in production without evals.",
      ],
      correct: 1,
      correctFeedback:
        "Right. Committed roadmap + skill ceiling + revenue trigger = hire time. Enterprise pilot is a hard deadline.",
      wrongFeedback:
        "Delay with revenue on the line costs more than FTE. Re-read section 3.1.",
    },
    {
      q: "Best profile for seed-stage first AI hire building a GPT-4 RAG product?",
      options: [
        "NLP Research Scientist with publications.",
        "Generalist AI Engineer who ships LLM features, evals, and talks to customers.",
        "Dedicated MLOps Engineer.",
        "Data Scientist who builds dashboards only.",
      ],
      correct: 1,
      correctFeedback:
        "Right. First hire is a generalist builder on the application AI stack — not research, ops-only, or analysis-only.",
      wrongFeedback:
        "Seed first hire wears three hats. Re-read sections 3.2 and 3.3.",
    },
    {
      kind: "categorize",
      q: "Sort each situation into internal promotion or external hire.",
      categories: ["Promote internally", "Hire externally"],
      items: [
        { text: "Full-stack engineer shipped entire AI MVP and wants the role.", category: 0 },
        { text: "AI is net-new; no one has shipped LLM features; fundraise in 90 days.", category: 1 },
        { text: "'Smart engineer' with no AI shipping evidence.", category: 1 },
        { text: "Engineer built evals and owns customer AI conversations already.", category: 0 },
        { text: "Vertical domain expert paired with need for external stack experience.", category: 1 },
        { text: "Loyal early employee with no AI work — CEO feels obligated.", category: 1 },
      ],
      correctFeedback:
        "Right. Promote on evidence and desire. Hire externally for net-new capability, urgency, or wishful thinking.",
      wrongFeedback:
        "Internal promotion requires shipped evidence, not potential or loyalty alone. Re-read section 3.4.",
    },
    {
      q: "Contractor has been 'interim AI lead' for 10 months with no FTE plan. What does this signal?",
      options: [
        "Smart capital efficiency.",
        "Lack of commitment; top talent avoids; architecture risk — hire FTE or structure contract-to-hire.",
        "Ideal permanent state.",
        "Ready for Series C.",
      ],
      correct: 1,
      correctFeedback:
        "Right. Permanent contractor-as-lead signals unseriousness and creates ownership vacuum.",
      wrongFeedback:
        "Contractors bound scope; they do not permanently lead core product. Re-read section 3.5.",
    },
    {
      kind: "order",
      q: "Order the first AI hire process (earliest first).",
      prompt: "Drag to arrange recommended sequence (top = first).",
      items: [
        "Confirm milestone: committed roadmap + skill ceiling.",
        "Write specific JD with 90-day deliverables and comp range.",
        "Founder interview + scorecard + technical screen.",
        "Reference checks with production-focused questions.",
      ],
      correctFeedback:
        "Right. Milestone → attract → assess → verify references before offer.",
      wrongFeedback:
        "Do not post jobs before confirming you need the hire. Re-read sections 3.1 and 3.7.",
    },
    {
      q: "Reference says candidate is 'brilliant researcher who needed heavy PM support to ship'. Founding AI lead role at seed. Decision?",
      options: [
        "Hire — brilliant is enough.",
        "Pass — founding lead needs self-directed shipping; qualified praise is a red flag.",
        "Hire as intern.",
        "Skip references — interview was strong.",
      ],
      correct: 1,
      correctFeedback:
        "Right. Founding AI lead must ship without heavy PM support. Qualified reference praise is a pass signal.",
      wrongFeedback:
        "References reveal patterns interviews hide. Re-read section 3.6.",
    },
  ],
});
