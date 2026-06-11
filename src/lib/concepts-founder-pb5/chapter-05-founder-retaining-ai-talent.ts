import { buildChapter, buildSection, s, x, sectionWithDiagram } from "../concepts-pb4-helpers";

export const chapter05FounderRetainingAiTalent = buildChapter({
  slug: "founder-retaining-ai-talent",
  number: 5,
  shortTitle: "Retaining AI Talent",
  title: "Retaining AI Talent — The Ongoing War",
  readingMinutes: 20,
  summary:
    "Hiring is hard. Keeping great AI people is harder. Why AI talent leaves, technical challenge as retention, publication culture, career pathing, compensation cadence, Big Tech counter-offers, and the quarterly retention audit.",
  keyTakeaway:
    "AI engineers stay for hard problems, honest comp, and visible career paths — not ping pong tables. Retention is a founder job, not an HR afterthought.",
  pmCallout:
    "As a founder: losing your founding AI lead costs 12–18 months of capability. Retention conversations belong in your calendar quarterly — not in panic when LinkedIn updates appear.",
  sections: [
    sectionWithDiagram({
      number: "5.1",
      title: "Why AI talent leaves startups",
      subtitle: "The real reasons — not the ones people say in exit interviews",
      take: "Real reasons: better comp, harder technical problems elsewhere, lack of career path, founder technical illiteracy blocking decisions, burnout from firefighting without platform support, and loss of faith in company AI bet.",
      why: "Exit interviews cite 'new opportunity'. Founders who understand real drivers can intervene before the offer letter arrives.",
      paragraphs: [
        [
          s("Comp is the honest first reason. "),
          x(
            "AI talent gets recruited constantly. A 40% cash bump plus liquid RSUs at Big Tech is rational for many engineers with families.",
            "Startups cannot always match cash — but must know when gap becomes unbridgeable.",
          ),
          s(" Surprise departures often follow six months of under-market comp with no conversation."),
        ],
        [
          s("Problem quality is the second reason. "),
          x(
            "Top AI engineers want hard problems: novel data, scale, production impact.",
            "If your AI work devolves into prompt tweaking without eval culture or roadmap ambition, they interview elsewhere.",
          ),
          s(" Boredom is a retention failure."),
        ],
        [
          s("Organisational dysfunction is the silent killer. "),
          x(
            "Ivory tower AI teams, founder overriding technical decisions without understanding, endless reorgs without triggers.",
            "Loss of faith in the AI bet — pivot away from AI, underinvestment after hype — triggers departures faster than comp.",
          ),
          s(" Listen in stay interviews, not only exit interviews."),
        ],
      ],
      examples: [
        {
          title: "Comp gap — predictable loss",
          body: "Founding AI Engineer under market by $45K for 14 months; no comp review conversation. Google offer at 2.2x total comp. Founder could not close gap. Departure was predictable — not betrayal.",
        },
        {
          title: "Problem quality — retained with roadmap",
          body: "AI lead threatened leave citing 'boring prompts'. Founder committed Series A roadmap: custom fine-tune on proprietary data, agent architecture, hire #2. Stayed 18 months. Technical ambition retained.",
        },
        {
          title: "Faith loss — pivot triggered exit",
          body: "Company pivoted from AI-native to services; AI team reduced to support role. Three AI engineers left within two months. Mission alignment is retention foundation.",
        },
      ],
    }, {
      kind: "diagram",
      id: "founder-hiring-sequence",
      type: "flow",
      title: "AI Talent Strategy",
      caption:
        "Assess gap → upskill or hire → prove pilot → scale team.",
    }),
    sectionWithDiagram({
      number: "5.2",
      title: "Technical challenge as retention",
      subtitle: "Why the quality of the problems you give AI engineers matters more than the perks you offer",
      take: "Assign problems that stretch: new architectures, proprietary data challenges, scale milestones. Rotate engineers off pure maintenance quarterly. Celebrate technical wins in all-hands.",
      why: "Perks decay in a week. A hard problem with ownership lasts years. AI talent optimises for learning velocity.",
      paragraphs: [
        [
          s("Map problems to ambition levels. "),
          x(
            "Level 1: maintain existing prompts. Level 2: improve evals and quality. Level 3: new capability (agents, fine-tune, multimodal).",
            "Engineers stuck at Level 1 for 12 months will leave regardless of snacks.",
          ),
          s(" Every AI engineer should have a Level 3 project on horizon."),
        ],
        [
          s("Production scale is its own challenge. "),
          x(
            "Going from 1K to 100K users changes inference, monitoring, and data pipelines fundamentally.",
            "Frame scale milestones as technical achievements, not only business metrics.",
          ),
          s(" 'We need you for the 10x scale problem' is a retention pitch."),
        ],
        [
          s("Protect focus time from firefighting. "),
          x(
            "If AI engineers spend 80% on support tickets, they leave for companies with platform teams.",
            "Hire MLOps or dedicate 20% sprint capacity to platform debt reduction.",
          ),
          s(" Firefighting without relief is a retention timer."),
        ],
      ],
      examples: [
        {
          title: "Level 3 project — stayed through Series B",
          body: "AI lead bored with maintenance; founder approved Q3 project: multi-agent workflow on proprietary data. Published internal tech talk; engineer stayed two more years. Problem quality > perks.",
        },
        {
          title: "Scale milestone framing",
          body: "Founder framed Series A milestone as '10x inference challenge' with dedicated sprint. Team treated scale as technical achievement. Morale spike during hardest infrastructure month.",
        },
        {
          title: "Firefighting burnout — preventable exit",
          body: "Solo AI engineer on call 24/7 for six months; quit with no counter-offer. Next hire paired with contract MLOps for on-call rotation. Cheap retention fix ignored too long.",
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
      number: "5.3",
      title: "Publication and conference culture",
      subtitle: "Whether to encourage your AI team to publish — the strategic tradeoff",
      take: "Publishing attracts talent and builds brand — but risks IP leakage and distracts from shipping. Policy: internal tech talks always; external posts with review; papers only if strategic for recruiting or partnerships.",
      why: "Blanket ban drives researchers away. Blanket encourage slows product. Founders need explicit policy.",
      paragraphs: [
        [
          s("Benefits of publication culture. "),
          x(
            "Recruiting magnet for strong candidates. Enterprise credibility in research-sensitive verticals.",
            "Forces clarity — writing reveals gaps in thinking.",
          ),
          s(" Brand 'we solve hard problems' supports hiring pipeline."),
        ],
        [
          s("Risks of publication culture. "),
          x(
            "IP exposure — methods reveal moat. Competitor intelligence. Time spent on papers instead of product.",
            "Academic incentives misalign with startup shipping at seed.",
          ),
          s(" Default seed policy: ship first, publish later."),
        ],
        [
          s("Practical policy framework. "),
          x(
            "Internal: encourage tech talks and postmortems. Blog: founder/comm review for IP. Conference: 1–2 per year per senior IC with business case.",
            "Never require publication for promotion at application-layer startups.",
          ),
          s(" Make policy explicit in offer letters and career ladder."),
        ],
      ],
      examples: [
        {
          title: "Blog policy — recruiting win",
          body: "Startup allowed engineers to blog about eval methodology (not data). Two hires cited blog posts in interviews. IP-safe transparency attracted talent.",
        },
        {
          title: "Paper distraction — seed regret",
          body: "Seed researcher spent 40% time on conference submission. Product roadmap slipped quarter. Founder clarified: papers optional, shipping required. Researcher left; product velocity recovered.",
        },
        {
          title: "NeurIPS sponsorship — enterprise signal",
          body: "Series B company sponsored workshop and sent two engineers to present partner-safe research. Enterprise prospects cited visibility in sales calls. Publication as GTM at scale — not at seed.",
        },
      ],
    }),
    buildSection({
      number: "5.4",
      title: "Career pathing for AI engineers",
      subtitle: "The dual track — technical leadership vs people management — and why you need both",
      take: "Define IC track (Senior → Staff → Principal) and management track (Lead → Head of AI) with equivalent comp. Promote on impact, not tenure. First promotions set culture for every subsequent hire.",
      why: "AI engineers who hit ceiling become flight risks. Dual track retains deep technical talent who do not want to manage.",
      paragraphs: [
        [
          s("IC track must be real, not cosmetic. "),
          x(
            "Staff AI Engineer should mean: owns architecture across teams, sets technical bar, mentors — without people management.",
            "If only management path pays at senior levels, you lose your best ICs.",
          ),
          s(" Comp parity between tracks at each level."),
        ],
        [
          s("Promotion criteria for AI roles. "),
          x(
            "Shipped production impact, eval discipline, mentorship, cross-team influence.",
            "Not: hours worked, frameworks learned, papers published (unless research company).",
          ),
          s(" Write criteria down — ambiguity breeds resentment."),
        ],
        [
          s("Founding lead path visibility. "),
          x(
            "First AI hire should see path to Head of AI or Principal with headcount plan.",
            "Surprise 'we're hiring above you' without conversation loses founders' most important technical relationship.",
          ),
          s(" Co-author career ladder with AI lead at Series A."),
        ],
      ],
      examples: [
        {
          title: "Staff IC promotion — retained expert",
          body: "Senior AI Engineer did not want management. Promoted to Staff with $35K bump and architecture ownership — same band as new engineering manager. Stayed three years. IC track worked because comp was real.",
        },
        {
          title: "Ceiling exit — no IC path",
          body: "Only promotion path was team lead. Best IC left for lab role with Principal title. Added Staff track six months late; next IC almost left, saved by new ladder.",
        },
        {
          title: "Co-authored ladder — trust",
          body: "AI lead wrote career ladder with founder at Series A. Included Head of AI criteria and timeline. Lead referred two senior hires citing visible path. Transparency retained.",
        },
      ],
    }),
    buildSection({
      number: "5.5",
      title: "Compensation review cadence for AI roles",
      subtitle: "How often to benchmark and adjust — and what happens when you don't",
      take: "Benchmark AI comp quarterly against market data and recruiter intel. Adjust annually minimum; off-cycle for counter-offer risk on key people. Refresh equity at funding rounds for first five AI hires.",
      why: "AI market moves faster than generic eng comp. Annual-only reviews guarantee you are 6–12 months behind market.",
      paragraphs: [
        [
          s("Quarterly benchmark, annual adjustment minimum. "),
          x(
            "Track: Levels.fyi, recruiter quotes, candidate offer data from your own interviews.",
            "You learn market rate from every candidate conversation — use it.",
          ),
          s(" Data beats gut on AI comp."),
        ],
        [
          s("Off-cycle adjustments for retention risk. "),
          x(
            "If key AI engineer is 20%+ below market, waiting for annual cycle invites counter-offers.",
            "Board approval for retention grants is normal — use it before resignation.",
          ),
          s(" Cheap retention adjustment beats expensive re-hire."),
        ],
        [
          s("Equity refresh at rounds. "),
          x(
            "First three AI hires dilute at Series A — refresh 0.1%–0.3% signals continued bet on them.",
            "Silence on equity while new hires get grants breeds resentment.",
          ),
          s(" Refresh conversation belongs in term sheet week."),
        ],
      ],
      examples: [
        {
          title: "Quarterly benchmark — caught gap early",
          body: "Founder learned from interview offers that market moved $25K. Adjusted AI lead comp off-cycle before external offer. $25K cost vs 12-month rebuild cost.",
        },
        {
          title: "Annual-only — lost two engineers",
          body: "Company did annual reviews in January; market moved in June. Two AI engineers left in August for 35% bumps. Switched to quarterly benchmark after.",
        },
        {
          title: "Series A refresh — retention package",
          body: "Three early AI hires received 0.15%–0.25% refresh at Series A with explanation of dilution math. All stayed through Series B. Refresh conversation took one board email.",
        },
      ],
    }),
    buildSection({
      number: "5.6",
      title: "The Big Tech counter-offer problem",
      subtitle: "What to say and what to offer when Google calls your best AI engineer",
      take: "When counter-offer arrives: listen, understand comp and problem drivers, decide fast if you can match meaningfully. Match with cash + equity + title + problem — not guilt. If you cannot match, celebrate alumni network.",
      why: "Panic counter-offers without strategy overpay or under-deliver. Prepared founders retain 30–40% of counter-offer situations.",
      paragraphs: [
        [
          s("Stay interview before counter-offer. "),
          x(
            "Quarterly: 'What would make you leave? What would make you stay five more years?'",
            "If you only hear truth in resignation meeting, you failed retention.",
          ),
          s(" Proactive conversation is cheapest retention tool."),
        ],
        [
          s("Counter-offer package components. "),
          x(
            "Cash bump (often 15–30%), equity refresh, title promotion, committed hard problem, reporting line clarity.",
            "Guilt ('we're a family') never works on rational engineers comparing liquid RSUs.",
          ),
          s(" Match what you can; be honest about what you cannot."),
        ],
        [
          s("When to let go gracefully. "),
          x(
            "If gap is 2x+ total comp and engineer wants liquidity, you may not win — and burning cap table to try hurts everyone.",
            "Alumni relationship matters: boomerang hires happen. Burning bridges does not.",
          ),
          s(" Sometimes losing is correct capital allocation."),
        ],
      ],
      examples: [
        {
          title: "Counter-offer retained — problem + comp",
          body: "Meta offered 2x cash. Startup matched 60% cash bump, 0.2% refresh, Staff title, and committed agent architecture project. Engineer stayed. Could not match fully but closed meaningful gap plus problem.",
        },
        {
          title: "Guilt counter — failed",
          body: "Founder said 'we believed in you first' without comp change. Engineer left anyway. Next retention used numerate package. Emotion without math fails.",
        },
        {
          title: "Graceful exit — boomerang",
          body: "Could not match Google offer at Series A. Celebrated exit, stayed advisors. Engineer returned at Series C as Principal with Big Tech experience. Graceful loss became win.",
        },
      ],
    }),
    buildSection({
      number: "5.7",
      title: "Founder decision lens: the AI retention audit",
      subtitle: "The six questions to ask your AI team quarterly before you read about them leaving on LinkedIn",
      take: "Quarterly retention audit with each AI team member: comp vs market, problem satisfaction, career path clarity, platform support, faith in AI bet, and manager/founder relationship. Score risks 1–5; act on 4+.",
      why: "Retention is measurable. Founders who audit quarterly intervene; founders who react to resignations rebuild.",
      paragraphs: [
        [
          s("Question 1–2: comp and market position. "),
          x(
            "'Are we within 15% of market for your role?' 'What offer would make you seriously consider leaving?'",
            "Direct questions get direct answers if trust exists.",
          ),
          s(" If trust does not exist, fix that first."),
        ],
        [
          s("Question 3–4: problem and path. "),
          x(
            "'Is your current work challenging enough?' 'Can you see your title and scope in 18 months?'",
            "Vague answers signal risk. Push for specifics.",
          ),
          s(" Document commitments you make in audit."),
        ],
        [
          s("Question 5–6: platform and faith. "),
          x(
            "'Do you have support to do your job without 24/7 firefighting?' 'Do you believe our AI bet is still central?'",
            "Faith loss is non-negotiable — address strategy or expect departures.",
          ),
          s(" Run audit before board meeting, not after departures."),
        ],
      ],
      examples: [
        {
          title: "Audit surfaced comp risk — saved hire",
          body: "Q1 audit: AI engineer rated comp risk 5/5. Off-cycle $30K adjustment and equity refresh. Q3 audit: 2/5. Stayed through Series B. Audit cost less than re-hire.",
        },
        {
          title: "Faith loss flagged — strategy reset",
          body: "Audit revealed team believed AI deprioritised after pivot conversation. Founder clarified roadmap in all-hands with AI milestones. Prevented three resignations.",
        },
        {
          title: "Ignored audit — LinkedIn surprise",
          body: "Founder skipped Q2 audits during fundraise. Two AI engineers resigned same month post-close. Retrospective showed audit would have flagged burnout and comp. Calendar item now non-optional.",
        },
      ],
    }),
  ],
  quiz: [
    {
      q: "Founding AI Engineer leaves for 2x total comp at Big Tech. They never received comp review in 16 months. Primary failure?",
      options: [
        "Engineer lacked loyalty.",
        "Founder retention process — comp benchmarking and stay conversations neglected.",
        "Should have banned LinkedIn.",
        "Should have required non-compete.",
      ],
      correct: 1,
      correctFeedback:
        "Right. Predictable comp gap without conversation is a founder process failure, not a loyalty failure.",
      wrongFeedback:
        "AI talent markets move fast. Re-read section 5.1 and 5.5.",
    },
    {
      q: "AI engineer stuck maintaining prompts for 14 months with no challenging project on horizon. Best retention intervention?",
      options: [
        "Add ping pong table.",
        "Assign Level 3 technical project aligned to roadmap; reduce pure maintenance load.",
        "Require publication to distract them.",
        "Ignore — maintenance is the job.",
      ],
      correct: 1,
      correctFeedback:
        "Right. Problem quality retains AI talent. Level 3 projects and reduced firefighting beat perks.",
      wrongFeedback:
        "Boredom drives departures. Re-read section 5.2.",
    },
    {
      kind: "categorize",
      q: "Sort each policy into seed-appropriate or Series B+ appropriate.",
      categories: ["Seed-appropriate", "Series B+ appropriate"],
      items: [
        { text: "Internal tech talks and postmortems encouraged.", category: 0 },
        { text: "NeurIPS workshop sponsorship for recruiting brand.", category: 1 },
        { text: "Blog about eval methodology with IP review.", category: 0 },
        { text: "Required conference papers for promotion.", category: 1 },
        { text: "Ship-first publication policy.", category: 0 },
        { text: "External research lab partnership announcements.", category: 1 },
      ],
      correctFeedback:
        "Right. Seed: ship first, internal learning, careful external content. Scale: publication as recruiting and GTM.",
      wrongFeedback:
        "Publication policy must match stage. Re-read section 5.3.",
    },
    {
      q: "Senior IC AI engineer does not want people management. Best retention structure?",
      options: [
        "Force management path or stall career.",
        "Staff/Principal IC track with comp parity to engineering manager track.",
        "No promotion possible.",
        "Replace with manager hire above them without conversation.",
      ],
      correct: 1,
      correctFeedback:
        "Right. Dual track with real comp parity retains deep technical ICs.",
      wrongFeedback:
        "IC ceiling without path loses best engineers. Re-read section 5.4.",
    },
    {
      kind: "order",
      q: "Order counter-offer response steps (first to last).",
      prompt: "Drag to arrange recommended response (top = first).",
      items: [
        "Listen: understand comp, problem, and timeline drivers.",
        "Decide quickly what you can offer: cash, equity, title, project.",
        "Make numerate offer — not guilt.",
        "If cannot match meaningfully, exit gracefully and preserve relationship.",
      ],
      correctFeedback:
        "Right. Listen → package → honest offer → graceful loss if needed.",
      wrongFeedback:
        "Counter-offers require speed and math, not guilt. Re-read section 5.6.",
    },
    {
      q: "Quarterly retention audit shows engineer rates 'faith in AI bet' as 5/5 risk after strategy pivot. Founder action?",
      options: [
        "Ignore until resignation.",
        "Address strategy clarity immediately — faith loss is non-negotiable retention risk.",
        "Offer gym membership.",
        "Reduce their scope.",
      ],
      correct: 1,
      correctFeedback:
        "Right. Loss of faith in AI bet triggers departures faster than comp. Clarify roadmap or expect exits.",
      wrongFeedback:
        "Retention audit exists to catch faith and problem risks early. Re-read section 5.7.",
    },
  ],
});
