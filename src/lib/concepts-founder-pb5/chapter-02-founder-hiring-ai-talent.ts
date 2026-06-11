import { buildChapter, buildSection, s, x, sectionWithDiagram } from "../concepts-pb4-helpers";

export const chapter02FounderHiringAiTalent = buildChapter({
  slug: "founder-hiring-ai-talent",
  number: 2,
  shortTitle: "Hiring AI Talent",
  title: "Hiring AI Talent — The Practical Reality",
  readingMinutes: 26,
  summary:
    "The market is brutal, the signals are confusing, and most founders get this wrong. Supply and demand, non-technical interviewing, portfolio assessment, take-home design, compensation, and the red flags that sound impressive but slow you down.",
  keyTakeaway:
    "You do not need to be technical to hire technical AI talent — you need a structured evaluation framework and honest compensation math.",
  pmCallout:
    "As a founder: every month without a hiring framework is a month your competitor hires the engineer you needed. Structure beats intuition in the AI talent war.",
  sections: [
    sectionWithDiagram({
      number: "2.1",
      title: "The AI talent market in 2025",
      subtitle: "Where the talent is, what it costs, and what you are actually competing against",
      take: "Top AI talent competes with OpenAI, Google, Anthropic, and well-funded startups offering $300K–$500K+ total comp. You win on problem, equity upside, and speed — not on cash alone.",
      why: "Founders who post jobs without understanding the market wonder why they get zero qualified applicants. The market sets the price; your job is to justify the trade.",
      paragraphs: [
        [
          s("Supply is concentrated and demand is infinite. "),
          x(
            "The best AI Engineers and ML Engineers have multiple offers within two weeks of becoming active.",
            "Big Tech, foundation model labs, and Series B+ startups absorb most senior talent. Seed companies compete for generalists willing to bet on equity.",
          ),
          s(" Your recruiting window is narrow — move fast or lose."),
        ],
        [
          s("Geography reshaped the market. "),
          x(
            "India produces strong AI talent at 40–60% of US cash cost, but the best engineers still choose US remote roles at global rates.",
            "Remote-first startups access global talent; location-bound startups pay a premium or accept thinner pipelines.",
          ),
          s(" Founders should decide geography strategy before writing the job description."),
        ],
        [
          s("What you compete against is not salary alone. "),
          x(
            "Candidates compare: problem interestingness, team quality, equity percentage, title trajectory, and whether the founder can articulate the AI bet.",
            "A compelling mission with 0.5% equity beats a boring role with 0.1% — for the right candidate.",
          ),
          s(" Your pitch is part of compensation."),
        ],
      ],
      examples: [
        {
          title: "OpenAI talent magnet — the benchmark you cannot match on cash",
          body: "OpenAI and Anthropic set compensation ceilings that seed startups cannot approach. Founders who benchmark offers against Big Tech lose on cash every time. Winners benchmark on equity, problem, and speed to impact.",
        },
        {
          title: "Remote-first startup — global pipeline advantage",
          body: "A seed AI company hired senior AI Engineers in Poland and Bangalore at competitive local rates with meaningful equity. US-only recruiting had produced three candidates in two months; global produced forty. Geography is a strategy, not a default.",
        },
        {
          title: "Series B poaching — the counter-offer you cannot win with cash",
          body: "A Series A startup lost a lead AI Engineer to a Series B competitor offering 2x cash. The founder retained the next candidate by offering lead title, board visibility, and 0.75% equity. Lesson: know which lever you can pull.",
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
      number: "2.2",
      title: "How to evaluate AI candidates as a non-technical founder",
      subtitle: "The interview framework that lets you assess AI engineers without being one",
      take: "You cannot evaluate model architecture — but you can evaluate: shipped work, decision reasoning, communication, and how they handle failure modes. Four dimensions, structured questions, reference checks.",
      why: "Deferring all technical assessment to a advisor who appears once breeds bad hires. Founders must own the framework even when they delegate execution details.",
      paragraphs: [
        [
          s("Start with 'show me what you shipped'. "),
          x(
            "Ask candidates to walk through a project end-to-end: problem, approach, what failed, what they would do differently.",
            "Strong candidates narrate tradeoffs. Weak candidates describe technologies without outcomes.",
          ),
          s(" You are evaluating judgment and ownership, not syntax."),
        ],
        [
          s("Use scenario questions grounded in your product. "),
          x(
            "'Our model hallucinates citations 8% of the time — what do you do?' Listen for: measure first, root-cause, fix options (RAG, prompt, fine-tune), eval before deploy.",
            "Red flag: jump to solution without asking about metrics or user impact.",
          ),
          s(" Their process reveals more than their resume."),
        ],
        [
          s("Bring a technical advisor for depth — not for delegation. "),
          x(
            "A 60-minute technical screen with a trusted ML engineer or AI engineer validates what you assessed on process and communication.",
            "You own the hire decision. Advisors provide signal; founders provide context on culture and mission fit.",
          ),
          s(" Never hire someone you cannot explain the value of to your board."),
        ],
      ],
      examples: [
        {
          title: "Founder-led interview — scenario beats trivia",
          body: "A non-technical CEO asked five candidates how they would reduce inference cost 50% without dropping quality. One asked about usage patterns and model routing; four jumped to 'use a smaller model'. The questioner got hired and delivered 45% cost reduction in eight weeks.",
        },
        {
          title: "Advisor screen — structured debrief",
          body: "A founder used a technical advisor for a 90-minute deep dive but required a written scorecard: ship velocity, eval discipline, communication, red flags. Founder made final call weighing advisor score against culture fit. Process scaled to five hires without founder learning to code.",
        },
        {
          title: "Bad hire — charisma without depth",
          body: "A candidate impressed the board with AI buzzwords but could not describe a single eval they had run. Hired anyway because 'we needed someone fast'. Three months, no production feature. Founder lesson: if they cannot explain failure modes, they cannot prevent them.",
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
      number: "2.3",
      title: "Portfolio and GitHub assessment",
      subtitle: "The signals in a candidate's public work that predict on-the-job performance",
      take: "Look for: complete projects (not tutorials), eval/test discipline, README clarity, and commit history showing iteration. A polished GitHub with one forked tutorial is weaker than a messy repo with a shipped side project.",
      why: "Résumés lie. GitHub and portfolios show how candidates actually work when nobody is watching.",
      paragraphs: [
        [
          s("Green flags in public work. "),
          x(
            "Repos with tests or eval scripts. READMEs that explain tradeoffs. Projects that solve a real problem, not reproduce a Kaggle notebook.",
            "Blog posts or talks that explain decisions — especially failures — signal communication skill.",
          ),
          s(" Depth beats breadth: one strong project beats ten half-finished ones."),
        ],
        [
          s("Red flags in public work. "),
          x(
            "Only forked repos with no commits. Jupyter notebooks with no path to production. Claims of 'built GPT clone' that are thin wrappers.",
            "No evidence of collaboration — no PRs, no issues, no code review history.",
          ),
          s(" Absence of public work is not disqualifying — but claims without evidence are."),
        ],
        [
          s("What to ask about their best repo. "),
          x(
            "'What would you change if you rebuilt this today?' 'What broke in production?' 'How did you measure success?'",
            "Answers reveal whether they own outcomes or participated peripherally.",
          ),
          s(" Ten minutes on one repo beats an hour on resume bullets."),
        ],
      ],
      examples: [
        {
          title: "Side project as hiring signal",
          body: "A candidate's GitHub showed a RAG chatbot over personal notes with 40-case eval suite and cost tracking. No employer project was as impressive. Hired at seed; eval discipline transferred immediately to production. Founders: side projects reveal true capability.",
        },
        {
          title: "Impressive resume, empty GitHub",
          body: "Senior candidate claimed five years of LLM work but GitHub was empty — 'proprietary'. Reference checks revealed they wrote prompts, not pipelines. Passed. Founders should treat unverifiable claims with skepticism.",
        },
        {
          title: "Open-source contributor — collaboration signal",
          body: "A candidate's LangChain PRs showed code review responsiveness and documentation fixes — not just feature dumps. Hired for team fit on a small AI team where everyone reviews code. Collaboration matters at seed scale.",
        },
      ],
    }),
    buildSection({
      number: "2.4",
      title: "The take-home project for AI roles",
      subtitle: "How to design an evaluation that reveals real capability without exploiting candidates",
      take: "Cap at 4–6 hours. Use a problem close to your domain. Require a README explaining tradeoffs. Pay for senior candidates' time if above 6 hours. Evaluate process and eval discipline, not perfect accuracy.",
      why: "Bad take-homes repel top talent. Good take-homes predict on-the-job behavior better than any whiteboard puzzle.",
      paragraphs: [
        [
          s("Design principles for AI take-homes. "),
          x(
            "Scoped: build a small RAG pipeline, design an eval for a given prompt, or debug a provided broken agent.",
            "Open-ended enough to show judgment; bounded enough to respect time.",
          ),
          s(" Provide sample data — do not make candidates scrape the internet."),
        ],
        [
          s("What to evaluate. "),
          x(
            "Did they write tests or evals? Did they document assumptions? Did they note what they would do with more time?",
            "Perfect accuracy on a toy dataset matters less than structured thinking.",
          ),
          s(" A strong README with mediocre code beats polished code with no explanation."),
        ],
        [
          s("Ethics and talent market reality. "),
          x(
            "Unpaid 20-hour take-homes filter out candidates with jobs and families — often your best prospects.",
            "Pay $500–$1,000 for senior take-homes above 6 hours, or use a shared paid assessment platform.",
          ),
          s(" How you treat candidates in hiring predicts how you treat employees."),
        ],
      ],
      examples: [
        {
          title: "4-hour RAG take-home — predictive hire",
          body: "Take-home: build RAG over provided PDFs, answer five test questions, write eval scoring rubric. Winner included failure analysis ('Q3 failed because chunk size too large'). That person still runs eval at the company two years later.",
        },
        {
          title: "20-hour unpaid take-home — pipeline killer",
          body: "A startup required a full agent build with deployment. Three strong candidates declined. Founder shortened to 5 hours, paid $750, and filled the role in three weeks. Long take-homes are negative employer branding.",
        },
        {
          title: "Live debug session — alternative to take-home",
          body: "For candidates who cannot do take-homes, a 90-minute live session: fix a broken prompt chain with provided logs. Reveals debugging process without homework. Inclusive and effective for senior hires.",
        },
      ],
    }),
    buildSection({
      number: "2.5",
      title: "Compensation benchmarks — India and global",
      subtitle: "What AI engineers actually cost at seed, Series A, and Series B — the real numbers",
      take: "US senior AI Engineers: $180K–$280K base + equity at seed. India senior: ₹40L–₹80L ($48K–$96K) depending on city and remote US premium. Series A adds 20–40% to cash. You will not match Big Tech — design comp accordingly.",
      why: "Underpaying produces zero pipeline. Overpaying without equity discipline burns runway. Founders need real numbers before the first conversation.",
      paragraphs: [
        [
          s("US benchmarks (2025, private startup). "),
          x(
            "Seed AI Engineer: $150K–$200K base, 0.25%–1.0% equity for first hire. Series A: $180K–$250K, 0.1%–0.5%. Series B: $200K–$280K+.",
            "ML Engineers and MLOps at similar bands; Research Scientists command premium if you insist on hiring them.",
          ),
          s(" Total comp narrative matters as much as base."),
        ],
        [
          s("India benchmarks (2025). "),
          x(
            "Bangalore/Hyderabad senior AI Engineer: ₹35L–₹70L cash. Remote-for-US roles: ₹60L–₹1.2Cr as companies compete for global delivery.",
            "Equity percentages often higher than US hires at same stage — Indian talent prices in startup risk differently.",
          ),
          s(" Founders hiring in India should benchmark against both local startups and US remote recruiters."),
        ],
        [
          s("Equity is not a substitute for insulting cash. "),
          x(
            "Offering 2% with $90K base to a candidate making $220K elsewhere is not a negotiation — it is a pass.",
            "Structure: competitive cash for stage + meaningful equity + clear title path. Refresh grants at Series A for early hires.",
          ),
          s(" Run comp past two advisors before your first offer."),
        ],
      ],
      examples: [
        {
          title: "Seed offer that closed — transparent math",
          body: "Founder shared cap table, explained 0.6% at $8M post, and offered $165K — below market but with lead title and board observer seat. Candidate accepted because math was transparent and problem was compelling. Transparency beats mystery equity.",
        },
        {
          title: "India hire — dual market pressure",
          body: "Bangalore startup lost candidate to US remote role at 2x cash. Closed next hire with ₹55L + 0.4% + learning budget. Founders in India must track US remote recruiters as direct competitors.",
        },
        {
          title: "Series A refresh — retention signal",
          body: "First AI hire at 0.8% received additional 0.15% at Series A with cash bump to $195K. Stayed through Series B. Founders who refresh early retain through the counter-offer window.",
        },
      ],
    }),
    buildSection({
      number: "2.6",
      title: "Equity vs cash for AI talent",
      subtitle: "How to structure compensation when you cannot match Big Tech salaries",
      take: "Lead with problem and equity upside. Offer competitive-for-stage cash — not insulting cash plus lottery tickets. Early hires should get 0.5%–1.5%; refresh at next round. Four-year vest, one-year cliff is standard.",
      why: "AI talent has optionality. They will not join a startup for 0.05% and a vision deck. Equity structure is a product you are selling.",
      paragraphs: [
        [
          s("The equity story must be numerate. "),
          x(
            "Show: current valuation, your ownership, what 0.5% is worth today, and a credible path to 10x.",
            "Hand-wavy 'this could be worth millions' without math insults sophisticated candidates.",
          ),
          s(" If you cannot defend the valuation, fix the fundraise — not the offer."),
        ],
        [
          s("Trade cash for equity only with mutual eyes open. "),
          x(
            "Some candidates prefer higher equity lower cash — especially if they believe in the bet.",
            "Never use equity to justify below-market cash without explicit conversation. Surprise at offer stage kills deals.",
          ),
          s(" Document the trade in the offer letter."),
        ],
        [
          s("Accelerate vesting on acquisition — retention tool. "),
          x(
            "Single-trigger acceleration is rare and expensive. Double-trigger (acquisition + termination) is more common and still attractive.",
            "Early AI hires worry about acqui-hire that wipes equity. Address it in negotiation.",
          ),
          s(" The best candidates ask these questions. Have answers."),
        ],
      ],
      examples: [
        {
          title: "Cash-equity slider — closed senior hire",
          body: "Candidate wanted $200K; startup budget was $170K. Offered $170K + 0.9% vs $185K + 0.55% — candidate chose higher equity. Explicit slider respected agency and closed the hire.",
        },
        {
          title: "0.05% offer — instant rejection",
          body: "A seed company offered a senior AI Engineer 0.05% at $12M post with $130K cash. Candidate posted offer anonymously; company's recruiting brand damaged for months. Founders: first AI hire equity is rarely below 0.25%.",
        },
        {
          title: "Double-trigger — peace of mind",
          body: "Second AI hire negotiated double-trigger on 50% of unvested shares. Cost the company nothing unless acquired and terminated. Hire stayed through acquisition talks. Standard tool for senior AI talent.",
        },
      ],
    }),
    buildSection({
      number: "2.7",
      title: "Red flags in AI candidate interviews",
      subtitle: "The answers that sound impressive but signal someone who will slow you down",
      take: "Red flags: cannot explain tradeoffs, dismisses evals, over-indexes on latest framework, blames past teams, claims solo credit for team work, or suggests training a foundation model at seed. Listen for depth, not buzzwords.",
      why: "A bad AI hire costs 6–12 months and poisons team culture. Red flags in interviews become disasters in production.",
      paragraphs: [
        [
          s("'We should fine-tune our own model' for every problem. "),
          x(
            "Fine-tuning is expensive and often unnecessary. Candidates who default to training may enjoy research more than shipping.",
            "Ask: when would you NOT fine-tune? Strong candidates mention RAG, prompts, and cost.",
          ),
          s(" One-size-fits-all training talk is a warning."),
        ],
        [
          s("Cannot describe how they measure success. "),
          x(
            "If they shipped models but never defined metrics, quality was luck.",
            "Ask for specific numbers: accuracy, latency, cost per request, human override rate.",
          ),
          s(" Vague answers on measurement predict vague production outcomes."),
        ],
        [
          s("Technology tourism — latest tool with no depth. "),
          x(
            "Name-dropping LangGraph, CrewAI, or AutoGPT without explaining when simpler approaches suffice.",
            "Startups need pragmatists who ship boring reliable solutions before exotic architectures.",
          ),
          s(" Framework obsession without product context is a hire risk."),
        ],
      ],
      examples: [
        {
          title: "Fine-tune everything — six-month detour",
          body: "Hired candidate insisted on fine-tuning before trying prompt improvements. Six months and $40K GPU spend later, prompt-only baseline matched fine-tuned quality. Candidate exited. Founders should probe default instincts in interviews.",
        },
        {
          title: "No eval culture — production surprise",
          body: "Candidate said 'we just shipped and users told us if it was bad'. Hired despite flag. First deploy caused customer escalation. Re-read section on eval discipline. Red flags ignored become incidents.",
        },
        {
          title: "Buzzword bingo — passed correctly",
          body: "Founder counted framework name-drops without tradeoff discussion — stopped at four. Asked one grounding question: 'When would you not use RAG?' Candidate could not answer. Passed. Saved months.",
        },
      ],
    }),
    buildSection({
      number: "2.8",
      title: "Founder decision lens: the AI hiring scorecard",
      subtitle: "The five dimensions to evaluate every AI candidate against — regardless of role",
      take: "Score each candidate 1–5 on: shipped outcomes, technical judgment, eval discipline, communication, and mission fit. Require 4+ average with no dimension below 3. Use the same scorecard for every role.",
      why: "Unstructured hiring produces inconsistent teams and founder regret. A scorecard turns intuition into a repeatable process you can delegate as you scale.",
      paragraphs: [
        [
          s("Dimension 1 — Shipped outcomes. "),
          x(
            "Evidence of production AI features or models, not just experiments.",
            "Weight recent work highest. Side projects count if substantive.",
          ),
          s(" Ask: what is live because of them?"),
        ],
        [
          s("Dimension 2 — Technical judgment. "),
          x(
            "Tradeoff reasoning: RAG vs fine-tune, model selection, cost vs quality.",
            "Scenario answers reveal this better than trivia.",
          ),
          s(" Ask: what would they do differently?"),
        ],
        [
          s("Dimensions 3–5 — Eval discipline, communication, mission fit. "),
          x(
            "Eval: do they measure before and after? Communication: can they explain to you and customers? Mission: do they care about your problem specifically?",
            "A 5 on technical judgment and 2 on communication fails for early teams where everyone talks to customers.",
          ),
          s(" No dimension below 3 — non-negotiable for hire."),
        ],
      ],
      examples: [
        {
          title: "Scorecard hire — board-visible process",
          body: "Founder shared anonymised scorecards with board after three hires. Average time-to-hire dropped 40% because process was clear. Investors cited hiring discipline as confidence signal in Series A memo.",
        },
        {
          title: "Technical star, communication fail",
          body: "Candidate scored 5 on judgment, 2 on communication. Founder passed despite advisor push — early team needed customer-facing engineers. Hired second-choice 4/4/4 profile. Correct call at seed scale.",
        },
        {
          title: "Delegated hiring — scorecard scaled",
          body: "At 25 people, founder trained hiring manager on same five-dimension scorecard. AI team grew from 2 to 8 without quality drop. Framework outlived founder's direct involvement in every interview.",
        },
      ],
    }),
  ],
  quiz: [
    {
      q: "You are a non-technical founder interviewing an AI Engineer candidate. Which question best reveals capability?",
      options: [
        "Explain transformer attention mechanisms in detail.",
        "Walk through a project you shipped: problem, approach, failures, and metrics.",
        "List every framework you have used.",
        "Do you prefer PyTorch or TensorFlow?",
      ],
      correct: 1,
      correctFeedback:
        "Right. Shipped work narrative reveals judgment, ownership, and measurement discipline — what founders can assess without being technical.",
      wrongFeedback:
        "Trivia and framework lists do not predict on-the-job performance. Re-read section 2.2.",
    },
    {
      q: "A senior AI candidate asks for $240K base. Your seed budget is $170K with meaningful equity. Best response?",
      options: [
        "Offer $130K and 0.05% — they should believe in the mission.",
        "Transparently share cap table math and explore cash-equity tradeoffs within budget.",
        "Ghost them — too expensive.",
        "Promise $240K at Series A without documentation.",
      ],
      correct: 1,
      correctFeedback:
        "Right. Transparent numerate equity conversation with explicit tradeoffs respects candidates and closes hires you can afford.",
      wrongFeedback:
        "Insulting cash or vague promises fail. Structure compensation honestly. Re-read sections 2.5 and 2.6.",
    },
    {
      kind: "categorize",
      q: "Sort each signal into green flag or red flag.",
      categories: ["Green flag", "Red flag"],
      items: [
        { text: "Side project with eval suite and README explaining tradeoffs.", category: 0 },
        { text: "Cannot name a single metric from their last AI project.", category: 1 },
        { text: "Asks about your data moat and failure modes in the interview.", category: 0 },
        { text: "Proposes training a foundation model at seed for a RAG product.", category: 1 },
        { text: "GitHub shows iterative commits on a real problem.", category: 0 },
        { text: "Only forked tutorial repos with no original commits.", category: 1 },
      ],
      correctFeedback:
        "Right. Shipped work, metrics, and curiosity are green. Training defaults, no measurement, and empty portfolios are red.",
      wrongFeedback:
        "Evaluate for outcomes and judgment, not buzzwords. Re-read sections 2.3 and 2.7.",
    },
    {
      q: "Your take-home project takes 15 unpaid hours. What happens to your candidate pipeline?",
      options: [
        "Top candidates with jobs often decline — shorten, pay, or replace with live session.",
        "Only weak candidates decline — keep it long to filter.",
        "Length does not affect pipeline.",
        "Cancel hiring entirely.",
      ],
      correct: 0,
      correctFeedback:
        "Right. Long unpaid take-homes repel strong candidates. Respect time or pay for it.",
      wrongFeedback:
        "Take-home design directly affects who applies. Re-read section 2.4.",
    },
    {
      kind: "order",
      q: "Order the founder hiring process steps (first to last).",
      prompt: "Drag to arrange the recommended sequence (top = first).",
      items: [
        "Define role clearly (AI vs ML vs DS) based on technical bet.",
        "Structured founder interview: shipped work + scenarios.",
        "Technical advisor screen with written scorecard.",
        "Offer with transparent cash-equity math.",
      ],
      correctFeedback:
        "Right. Role clarity → founder assessment → technical validation → transparent offer.",
      wrongFeedback:
        "Sequence matters. Define the role before interviewing. Re-read sections 2.1 and 2.8.",
    },
    {
      q: "Using the five-dimension scorecard, a candidate scores 5 on technical judgment but 2 on communication for a seed team where engineers talk to customers. Correct decision?",
      options: [
        "Hire — technical judgment is what matters.",
        "Pass — no dimension below 3; communication is critical at seed.",
        "Hire as researcher only.",
        "Ignore scorecard — gut feel.",
      ],
      correct: 1,
      correctFeedback:
        "Right. Scorecard requires no dimension below 3. Early teams need communicators, not isolated experts.",
      wrongFeedback:
        "The scorecard exists to catch exactly this tradeoff. Re-read section 2.8.",
    },
  ],
});
