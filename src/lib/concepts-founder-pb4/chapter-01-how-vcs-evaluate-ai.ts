import { buildChapter, buildSection, s, x, sectionWithDiagram } from "../concepts-pb4-helpers";

export const chapter01HowVcsEvaluateAi = buildChapter({
  slug: "founder-how-vcs-evaluate-ai",
  number: 1,
  shortTitle: "How VCs Evaluate AI",
  title: "How VCs Actually Evaluate AI Companies",
  readingMinutes: 28,
  summary:
    "What investors say in the pitch meeting vs what they write in the investment memo — the shared thesis, the questions that decide term sheets, and the red flags that kill deals quietly.",
  keyTakeaway:
    "VCs fund compounding AI businesses, not impressive demos. Data strategy, feedback loop design, and model dependency risk matter more than your architecture diagram — and sophisticated investors already know more about AI than most founders assume.",
  pmCallout:
    "As a founder: prepare for the interrogation, not the pitch. If you cannot answer ten hard questions cold — without slides — about your data moat, loop velocity, and vendor risk, you are not ready for a term sheet conversation.",
  sections: [
    buildSection({
      number: "1.1",
      title: "The AI investment thesis — what most VCs believe right now",
      subtitle: "The shared mental model driving the majority of AI investment decisions in 2025",
      take: "Most active AI investors share a thesis: foundation models commoditise capabilities, application-layer winners compound through proprietary data and feedback loops, and the best returns go to companies that turn usage into defensibility — not companies that rent the smartest API.",
      why: "Your pitch lands inside a mental model the partner already holds. Founders who understand that thesis speak to what gets written in the memo; founders who ignore it pitch features into a framework designed to evaluate businesses.",
      paragraphs: [
        [
          s("The dominant 2025 AI investment thesis has three pillars. "),
          x(
            "First, model capabilities are converging — GPT-4, Claude, and Gemini are substitutable for most application use cases. Second, data and distribution determine who captures value at the application layer. Third, feedback loop velocity separates companies that compound from companies that plateau.",
            "Partners are not betting on who has the best model today. They are betting on who will have the best proprietary dataset and fastest improvement cycle in three years.",
          ),
          s(" Your deck should map directly to those three pillars or explain why your market is an exception."),
        ],
        [
          s("This thesis explains why two companies with identical revenue get different term sheets. "),
          x(
            "The one with a documented data flywheel, measurable model improvement, and model-agnostic architecture gets an AI premium. The one with impressive demos and no proprietary signal gets SaaS multiples with an AI label.",
            "Investors are pricing future defensibility, not current feature parity. A $2M ARR company with a real loop can outraise a $5M ARR wrapper.",
          ),
          s(" Founders who internalise this stop leading with 'we use the latest model' and start leading with 'here is what compounds with every user action.'"),
        ],
        [
          s("The thesis also explains sector concentration. "),
          x(
            "VCs overweight vertical AI in regulated or workflow-heavy domains — legal, healthcare, finance, industrial — where proprietary data is harder to replicate and switching costs are real.",
            "Horizontal 'AI for everything' plays face the wrapper problem immediately: if the capability is an API call, why are you the long-term winner?",
          ),
          s(" Position your company inside the thesis or prepare for the 'why won't OpenAI build this' objection on slide three."),
        ],
      ],
      examples: [
        {
          title: "Harvey — vertical thesis alignment",
          body: "Harvey raised on legal workflow depth, firm-specific data, and attorney feedback loops — not on having a better foundation model. Investors priced the compounding legal corpus and switching costs, not GPT-4 access. Founders in regulated verticals should study how Harvey's memo was about defensibility, not architecture.",
        },
        {
          title: "Jasper's valuation reset — thesis mismatch",
          body: "Jasper raised at a premium when generative copy felt magically defensible. As capabilities commoditised and wrappers proliferated, the market repriced toward SaaS reality. Founders who pitched 'AI-first content' without a data moat learned that thesis alignment is not permanent — you must keep compounding.",
        },
        {
          title: "Seed memo pattern — what partners actually write",
          body: "A typical 2025 AI seed memo weights team 30%, market 25%, data/loop defensibility 30%, and capital efficiency 15%. Technology depth alone rarely exceeds two sentences. Founders who optimise for demo wow-factor instead of memo-weighted factors wonder why 'great meetings' don't convert.",
        },
      ],
    }),
    sectionWithDiagram({
      number: "1.2",
      title: "What VCs look for that most founders don't talk about",
      subtitle: "Data strategy, feedback loop design, and model dependency risk — the three underweighted factors",
      take: "Founders pitch product and team. Investors diligence data strategy, feedback loop design, and model dependency risk. The gap between what you emphasise and what they score is where deals die after the partner meeting.",
      why: "These three factors determine whether your company is an AI business or an AI feature with venture funding. Founders who surface them proactively signal operational maturity; founders who hide them discover the issues in due diligence.",
      paragraphs: [
        [
          s("Data strategy is the first underweighted topic. "),
          x(
            "Investors want to know: what proprietary signal do you capture per user action, who owns it, how is it labelled, and what prevents a competitor from buying equivalent data?",
            "Saying 'we have lots of data' without answering provenance, consent, and exclusivity is a diligence red flag — not a moat claim.",
          ),
          s(" Bring a one-page data strategy to the first meeting, not a footnote on slide twelve."),
        ],
        [
          s("Feedback loop design is the second. "),
          x(
            "Collecting logs is not a loop. A loop requires: capture → label → train or fine-tune → deploy → measure improvement → repeat — with documented latency and ownership.",
            "Investors ask 'how long from user correction to model improvement?' Founders who cannot answer in days or weeks are admitting they have observability, not compounding.",
          ),
          s(" Diagram your loop before your architecture — partners will reverse-engineer it anyway."),
        ],
        [
          s("Model dependency risk is the third. "),
          x(
            "Single-vendor API dependency, pricing exposure, terms-of-service training rights, and competitive overlap with your provider all land in the risk section of the memo.",
            "Model-agnostic architecture and a credible portability plan are not engineering nice-to-haves — they are fundraising requirements for any API-dependent startup.",
          ),
          s(" If 80% of gross margin rides on one vendor's pricing goodwill, investors price that as a liability, not leverage."),
        ],
      ],
      examples: [
        {
          title: "Gong — data strategy as the investment",
          body: "Gong's value is conversation intelligence data aggregated across customers — not the transcription model. Investors funded the proprietary behavioural dataset and the loop that improves coaching recommendations. Founders should ask: is our investor story about the model or the corpus only we can build?",
        },
        {
          title: "Series A pass — 'we'll figure out the loop later'",
          body: "A recruiting AI startup had strong revenue but no pipeline from recruiter overrides to model updates. The partner liked the team and passed quietly — the memo cited 'no evidence of compounding ML advantage.' Six months of product work could have changed the outcome if the loop had been designed at seed.",
        },
        {
          title: "OpenAI dependency disclosure — upfront vs discovered",
          body: "One founder opened the seed meeting with a vendor risk register: multi-model abstraction, cost ceilings, and fallback providers. Another hid 100% GPT-4 dependency until diligence. The first closed; the second got a conditional term sheet with a 20% lower valuation. Transparency on dependency is cheaper than discovery.",
        },
      ],
    }, {
      kind: "diagram",
      id: "founder-vc-diligence-stack",
      type: "flow",
      title: "How VCs Evaluate AI Startups",
      caption:
        "Team, data moat, unit economics, market timing, risk surface — the five diligence lenses on every AI term sheet.",
    }),
    sectionWithDiagram({
      number: "1.3",
      title: "The questions every serious AI investor will ask",
      subtitle: "Not 'tell me about your technology' — the real questions that determine term sheets",
      take: "Serious AI investors skip technology tourism. They ask about data provenance, improvement velocity, unit economics at scale, failure modes, and what happens when your model provider becomes your competitor. Your answers — not your slides — determine term sheets.",
      why: "These questions are predictable. Founders who rehearse crisp answers convert partner meetings into memos. Founders who improvise signal that the CEO does not own the AI strategy.",
      paragraphs: [
        [
          s("Expect data questions first. "),
          x(
            "'What data do you have that a well-funded competitor cannot acquire in twelve months?' and 'Who owns the training rights on user-generated content?' are table stakes.",
            "Weak answers: 'we scrape public data' or 'our terms of service probably cover it.' Strong answers: specific proprietary streams, consent chains, and exclusivity.",
          ),
          s(" If you hesitate on ownership, the meeting pivots from conviction to risk assessment."),
        ],
        [
          s("Expect economics and quality questions next. "),
          x(
            "'What is your cost per successful AI task at current scale — and at 10x?' and 'How do you measure quality in production, not in demos?' separate operators from storytellers.",
            "Investors know inference costs dominate margins. Founders who model unit economics and human-override rates earn credibility instantly.",
          ),
          s(" Bring a spreadsheet, not adjectives."),
        ],
        [
          s("Expect strategic risk questions last. "),
          x(
            "'What happens if OpenAI ships your feature natively?' and 'What is your plan if API pricing doubles?' test whether you have a strategy or a feature.",
            "The mature answer acknowledges the risk, names your moat (data, workflow, distribution), and shows architectural portability. Denial ends conversations.",
          ),
          s(" The best founders treat these as invitations to explain defensibility, not attacks to deflect."),
        ],
      ],
      examples: [
        {
          title: "Cursor — answering the commoditisation question",
          body: "When investors ask 'why won't Microsoft own this?', Cursor's answer is IDE integration depth, developer workflow lock-in, and usage data that improves suggestions — not 'our model is smarter.' Founders should prepare the same structure: acknowledge capability commoditisation, name the non-commoditised assets.",
        },
        {
          title: "Healthcare AI seed — the provenance drill-down",
          body: "An investor asked five consecutive questions about HIPAA compliance, consent for model training, and deletion rights. The founder had a data processing agreement and a labelled clinical dataset with documented IRB approval. The drill-down became a conviction driver. Founders without provenance documentation lose deals in the fifth question.",
        },
        {
          title: "The 'two-minute' rule in partner meetings",
          body: "Top founders rehearse answers to twelve standard questions under two minutes each, without slides. One partner said yes to a seed round after the founder answered override rate, loop latency, and vendor portability cold. Preparation is indistinguishable from competence in AI fundraising.",
        },
      ],
    }, {
      kind: "diagram",
      id: "founder-vc-diligence-stack",
      type: "flow",
      title: "Investor Diligence Stack",
      caption:
        "Team → data moat → unit economics → timing → risk. The five lenses on every AI term sheet.",
    }),
    buildSection({
      number: "1.4",
      title: "The difference between Seed, Series A, and growth-stage AI evaluation",
      subtitle: "What matters at each stage — and the mistakes founders make by pitching the wrong story",
      take: "Seed investors bet on team, wedge, and credible path to a data moat. Series A investors require evidence the loop works — metrics, not narratives. Growth investors price unit economics and defensibility at scale. Pitching the wrong stage story is one of the most common fundraising mistakes.",
      why: "A seed story about $50M ARR margins signals you do not know who you are talking to. A Series A story without live AI metrics signals you are not ready. Stage-fit is founder fluency.",
      paragraphs: [
        [
          s("At seed, investors fund the wedge and the team's ability to build the loop. "),
          x(
            "They accept pre-product-market-fit metrics but expect clarity on: what proprietary data you will capture, why the wedge is AI-solvable, and why you win before incumbents wake up.",
            "Seed memos forgive low revenue. They do not forgive vague data strategy or 'we'll add ML later.'",
          ),
          s(" Your seed deck should feel like a strategy document, not a growth equity pitch."),
        ],
        [
          s("At Series A, investors require proof the AI thesis is working. "),
          x(
            "Model improvement rate, override trends, task completion, and AI-attributed revenue should be live dashboards — not roadmap items.",
            "The bar shifts from 'can you build it?' to 'is it compounding?' Partners compare your metrics to other AI A-round companies in the portfolio.",
          ),
          s(" Raising an A on vision alone worked in 2021. It does not work in 2025."),
        ],
        [
          s("At growth stage, investors price like financial buyers with AI optionality. "),
          x(
            "Gross margin after inference, CAC payback with AI costs included, net revenue retention, and regulatory exposure dominate.",
            "The AI premium compresses if unit economics look like a services business with an API bill attached.",
          ),
          s(" Growth-stage founders need a CFO-grade AI cost model, not a visionary founder story."),
        ],
      ],
      examples: [
        {
          title: "Seed success — wedge before revenue",
          body: "A legal-document AI raised $4M seed with $200K ARR because the wedge was narrow (NDA review), the data loop was designed, and the founder could articulate path to firm-specific fine-tuning. Revenue was secondary to strategic clarity. Seed investors bought the compounding path.",
        },
        {
          title: "Series A miss — great ARR, no AI metrics",
          body: "A customer-support AI had $3M ARR but no tracked override rate, no model versioning, and no evidence the product improved month-over-month. Partners called it 'AI-labelled SaaS.' The company eventually raised at flat terms with a downgraded narrative. Metrics would have changed the multiple.",
        },
        {
          title: "Growth round — margin story wins",
          body: "An enterprise AI assistant raised growth capital after demonstrating 72% gross margin at scale through model routing, caching, and a hybrid of fine-tuned small models. The story was financial, supported by AI architecture choices. Growth investors fund spreadsheets that happen to include transformers.",
        },
      ],
    }),
    buildSection({
      number: "1.5",
      title: "Red flags that kill AI deals quietly",
      subtitle: "The things you say in a pitch that make investors politely pass without telling you why",
      take: "Investors rarely say 'your AI story is nonsense.' They say 'let's stay in touch.' Red flags include: leading with the model provider, claiming proprietary AI without proprietary data, ignoring unit economics, and overselling accuracy without production evidence.",
      why: "Quiet passes waste six months of runway. Founders who know the red flags self-audit before fundraising and fix narrative gaps while there is still time.",
      paragraphs: [
        [
          s("The loudest red flag is 'our moat is our AI.' "),
          x(
            "If your moat is an API key, investors hear wrapper risk. If your moat is 'we fine-tuned GPT-4,' they hear reproducible engineering.",
            "Moat language must point to data, workflow depth, distribution, or switching costs — not model access.",
          ),
          s(" Replace 'advanced AI' with the specific asset that compounds."),
        ],
        [
          s("Accuracy claims without production context are the second killer. "),
          x(
            "'95% accurate' without defining the task, population, failure cost, and measurement methodology is either meaningless or dangerous.",
            "Sophisticated investors ask for offline vs online metrics, segment breakdowns, and override rates. Hand-waving signals you have not shipped to real users.",
          ),
          s(" Quote metrics with denominators, measurement windows, and known failure modes."),
        ],
        [
          s("Dismissing vendor risk and regulatory exposure is the third. "),
          x(
            "'OpenAI would never compete with us' and 'regulation won't apply to us' tell investors you have not stress-tested the strategy.",
            "Mature founders name risks and mitigations. Immature founders treat diligence questions as insults.",
          ),
          s(" A polite pass often means the partner does not trust your risk awareness."),
        ],
      ],
      examples: [
        {
          title: "The 'powered by GPT-4' deck — instant scepticism",
          body: "A founder's opening slide was a OpenAI logo and 'enterprise-grade AI.' The partner's notes: 'no differentiated data story, commodity stack.' The meeting lasted twenty minutes. Founders should open with the problem and proprietary advantage, not the vendor logo.",
        },
        {
          title: "Accuracy slide without denominator — diligence stop",
          body: "A health-tech founder claimed '98% diagnostic accuracy' on a pilot of 40 cases. Diligence revealed no held-out test set and no production deployment. The term sheet died in technical review. Founders must tie accuracy claims to methodology or remove them.",
        },
        {
          title: "The polite pass email decoded",
          body: " 'We're impressed by the team and would love to see more traction' after a single meeting usually means a red flag blocked memo writing. Founders who follow up with 'what would change your conviction?' sometimes get honest feedback. Most learn by comparing their pitch to the red flags in section 1.5.",
        },
      ],
    }),
    buildSection({
      number: "1.6",
      title: "What sophisticated AI investors understand that most founders assume they don't",
      subtitle: "Why talking down to investors about AI concepts is one of the fastest ways to lose a deal",
      take: "Top AI investors already understand RAG, fine-tuning tradeoffs, and foundation model economics. They do not need education — they need evidence you can execute. Talking down to them wastes time; talking up without substance destroys trust.",
      why: "Misjudging investor sophistication leads to two failure modes: condescending explanations that bore partners, or hand-waving that insults their intelligence. Calibration earns respect.",
      paragraphs: [
        [
          s("Many founders assume investors are non-technical generalists. "),
          x(
            "In 2025, AI-focused partners have seen hundreds of RAG architectures, eval frameworks, and unit economics models. They attend model launches and read technical diligence reports.",
            "Your job is not to explain what a vector database is. Your job is to explain why your retrieval strategy survives at scale and produces proprietary signal.",
          ),
          s(" Lead with business-specific insight, not AI 101."),
        ],
        [
          s("The corollary: buzzwords without depth fail instantly. "),
          x(
            "Saying 'we use agents with RAG and fine-tuning' tells an investor nothing. Saying 'we retrieve from 200K labelled support resolutions, rerank with a cross-encoder, and fine-tune monthly on override labels' tells them everything.",
            "Specificity signals you ship; vocabulary signals you read Twitter.",
          ),
          s(" Replace category labels with your actual pipeline and its metrics."),
        ],
        [
          s("Investors also understand that most AI demos are optimistic. "),
          x(
            "They have been burned by pilot success that collapsed in production. Proactively discussing failure modes, override rates, and human-in-the-loop design signals maturity.",
            "Founders who only show happy-path demos look naive. Founders who show failure handling look fundable.",
          ),
          s(" Assume your investor has seen a better demo. Win on operational honesty."),
        ],
      ],
      examples: [
        {
          title: "Condescension backfire — 'let me explain LLMs'",
          body: "A founder spent ten minutes explaining transformers to an ex-DeepMind associate. The partner disengaged. The next founder jumped straight to data flywheel metrics and held attention for an hour. Investors respect founders who meet them at their level.",
        },
        {
          title: "Specificity win — architecture in one sentence",
          body: "A founder described their stack as: 'RAG over 50K proprietary contracts, human review on low-confidence extractions, monthly fine-tune on partner corrections, 12-day loop latency.' No education required. The partner asked about expansion to adjacent document types — a buying signal.",
        },
        {
          title: "Failure-mode transparency — trust builder",
          body: "A medical-documentation AI showed the investor their override dashboard: 8% clinician correction rate, trending down quarterly. The demo included a wrong output and the escalation UX. The partner cited 'production maturity' in the memo. Honesty about imperfection closed the round.",
        },
      ],
    }),
    buildSection({
      number: "1.7",
      title: "Founder decision lens: preparing for the investor AI interrogation",
      subtitle: "The ten questions to be able to answer cold, without slides, in under two minutes each",
      take: "Fundraising is an interrogation with a friendly tone. Before you book partner meetings, rehearse ten answers cold: data moat, loop latency, override rate, unit economics, vendor risk, regulatory posture, failure handling, improvement evidence, competitive response, and stage-appropriate milestones.",
      why: "This preparation is the highest-ROI fundraising work a founder can do. It surfaces gaps in your actual business months before diligence — and fixes them while you still control the narrative.",
      paragraphs: [
        [
          s("Build your interrogation list from memo-weighted factors, not deck order. "),
          x(
            "Ten essentials: (1) proprietary data source, (2) labelling pipeline, (3) loop latency, (4) model improvement evidence, (5) cost per successful task, (6) override rate trend, (7) vendor dependency plan, (8) regulatory classification, (9) incumbent response, (10) next-stage milestones.",
            "If any answer is 'we haven't measured that yet,' you have a product or ops task before you have a fundraising task.",
          ),
          s(" Record yourself answering each in under two minutes. Gaps become obvious."),
        ],
        [
          s("Run the list with a sceptical board member or advisor first. "),
          x(
            "Ask them to interrupt, drill down, and play devil's advocate. The investor will do the same with less politeness.",
            "Practice with someone who has seen AI diligence — not just generic pitch coaching.",
          ),
          s(" Revise answers until they are crisp, honest, and evidence-backed."),
        ],
        [
          s("Convert weak answers into ninety-day execution plans. "),
          x(
            "If loop latency is 'eventually,' set a target: corrections shipped to production model within fourteen days by Q2.",
            "Investors fund trajectories. A honest 'here is where we are weak and here is the plan' beats a fabricated moat every time.",
          ),
          s(" Fundraise when your answers are true — or when your plan to make them true is credible and funded."),
        ],
      ],
      examples: [
        {
          title: "The interrogation prep doc — internal only",
          body: "One seed founder maintained a two-page internal doc with the ten questions, current honest answers, and target answers for the raise. Three answers were weak; the team spent eight weeks fixing loop latency before meetings. First partner meeting produced a term sheet. Preparation created the metrics.",
        },
        {
          title: "Advisor red-team session",
          body: "A Series A candidate ran a two-hour red-team with an ex-VC advisor playing partner. The advisor found the override rate was undefined and the data room had no model cards. They delayed the raise six weeks, built dashboards, and closed at a higher pre-money than the initial target.",
        },
        {
          title: "The two-minute timer exercise",
          body: "Founders on a YC batch prep call used phone timers: two minutes per question, no slides. Anyone who exceeded time or used buzzwords without numbers re-did the answer. The discipline carried into partner meetings — concise founders get second meetings.",
        },
      ],
    }),
  ],
  quiz: [
    {
      q: "A seed-stage founder opens the pitch with 'We're built on GPT-4.' What do sophisticated AI investors most likely hear?",
      options: [
        "Proprietary technology advantage.",
        "Commodity stack — tell me about data, loop, and defensibility instead.",
        "Proof of technical depth.",
        "Lower diligence burden.",
      ],
      correct: 1,
      correctFeedback:
        "Right. Model access is not a moat. Investors immediately pivot to data strategy, feedback loops, and vendor risk.",
      wrongFeedback:
        "Leading with the provider signals wrapper risk. Re-read sections 1.1 and 1.5.",
    },
    {
      q: "Which three factors do investors weight heavily that many founders under-emphasise in pitches?",
      options: [
        "Logo design, office location, and social media following.",
        "Data strategy, feedback loop design, and model dependency risk.",
        "Number of GitHub stars, conference talks, and patent filings.",
        "Choice of frontend framework, cloud region, and programming language.",
      ],
      correct: 1,
      correctFeedback:
        "Exactly. These three determine whether you are an AI business or an AI-labelled feature.",
      wrongFeedback:
        "Re-read section 1.2. Investors diligence data, loops, and dependency — not demos alone.",
    },
    {
      kind: "order",
      q: "Order what investors prioritise from seed to growth stage (earliest focus first).",
      prompt: "Drag to arrange seed-stage focus (top) through growth-stage focus (bottom).",
      items: [
        "Team, wedge, and credible path to a data moat.",
        "Proof the AI thesis compounds — live metrics and loop evidence.",
        "Unit economics, margins after inference, and defensibility at scale.",
      ],
      correctFeedback:
        "Right. Stage-fit storytelling is founder fluency. Re-read section 1.4.",
      wrongFeedback:
        "Seed = wedge and path. Series A = proof. Growth = economics. Re-read section 1.4.",
    },
    {
      kind: "categorize",
      q: "Sort each pitch behaviour into the correct investor reaction.",
      categories: ["Builds conviction", "Quiet pass risk"],
      items: [
        { text: "Shows override-rate dashboard trending down over two quarters.", category: 0 },
        { text: "Claims '95% accurate' with no task definition or production data.", category: 1 },
        { text: "Opens with proprietary data flywheel and loop latency in days.", category: 0 },
        { text: "Dismisses OpenAI competitive risk with 'they would never do that.'", category: 1 },
        { text: "Presents vendor risk register and model-agnostic architecture.", category: 0 },
        { text: "Spends ten minutes explaining what an LLM is to an AI-focused partner.", category: 1 },
      ],
      correctFeedback:
        "Right. Specificity, metrics, and honest risk handling build trust. Buzzwords, vagueness, and condescension kill deals quietly.",
      wrongFeedback:
        "Re-read sections 1.5 and 1.6 for red flags vs conviction signals.",
    },
    {
      q: "At Series A, which evidence shift matters most compared to seed?",
      options: [
        "A larger office and more employees.",
        "Live AI metrics proving the thesis compounds — not just vision.",
        "A newer foundation model version.",
        "More impressive demo videos.",
      ],
      correct: 1,
      correctFeedback:
        "Right. Series A investors require proof the loop works — improvement rate, overrides, task completion.",
      wrongFeedback:
        "A-round bar is compounding evidence, not vision alone. Re-read section 1.4.",
    },
    {
      kind: "order",
      q: "Order the founder interrogation prep sequence.",
      prompt: "Drag to arrange first step (top) to last (bottom).",
      items: [
        "List ten memo-weighted questions with honest current answers.",
        "Red-team with a sceptical advisor who drills down.",
        "Fix gaps with ninety-day execution plans and metrics.",
        "Rehearse two-minute cold answers before partner meetings.",
      ],
      correctFeedback:
        "Exactly. Preparation surfaces real gaps before investors do. Re-read section 1.7.",
      wrongFeedback:
        "Start with honest answers, red-team, fix gaps, then rehearse. Re-read section 1.7.",
    },
  ],
});
