import { buildChapter, buildSection, s, x } from "../concepts-pb4-helpers";

export const chapter09EmergingAiFrontier = buildChapter({
  slug: "pb8-emerging-ai-frontier",
  number: 9,
  shortTitle: "Emerging AI",
  title: "What's Coming — World Models, Reasoning Models & Beyond",
  readingMinutes: 29,
  summary:
    "The frontier that will define the next generation of AI products — what's already here, what's arriving, and how to build strategy around deep uncertainty",
  keyTakeaway:
    "Reasoning models trade latency for accuracy on hard tasks; world models enable physical planning and robotics; long-context and multimodal reasoning unlock new product categories. PMs who make scenario-based roadmap bets, build modular architectures that swap models, and avoid overcommitting to today's limitations — or ignoring tomorrow's capabilities — navigate frontier uncertainty better than competitors chasing every launch announcement.",
  pmCallout:
    "As a PM: don't replatform your product every time OpenAI ships a new model. Build eval infrastructure, modular routing, and scenario-based roadmaps so you can adopt reasoning models, world models, and agentic capabilities when they cross your quality gate — not when the press release drops.",
  sections: [
    buildSection({
      number: "9.1",
      title: "What is a reasoning model",
      subtitle: "Models that think before they answer — OpenAI o-series, Gemini Thinking, Claude's extended thinking — the capability shift and the latency cost",
      take: "Reasoning models allocate additional inference compute to 'think' before responding — generating internal chain-of-thought tokens invisible to users, then producing a final answer. OpenAI o-series, Gemini Thinking, Claude extended thinking, and DeepSeek-R1 exemplify the pattern. Quality on maths, logic, code, and multi-step planning improves materially — at 5–30× latency and cost versus standard models. Reasoning is a capability tier, not a replacement for fast models.",
      why: "PMs who understand reasoning as a latency-cost-quality tradeoff route correctly: hard tasks to reasoning models, simple tasks to fast models. Treating all queries as reasoning destroys unit economics and UX.",
      paragraphs: [
        [
          s("Reasoning models spend compute before answering. "),
          x(
            "Standard model: prompt → answer. Reasoning model: prompt → internal reasoning tokens → answer.",
            "User sees delay; model sees expanded context for deliberation.",
          ),
          s(" PM sets user expectation: 'deep analysis' mode has wait time — like human expert thinking."),
        ],
        [
          s("Latency is the primary product constraint. "),
          x(
            "Simple query on fast model: 1–3 seconds. Same query on reasoning model: 15–120 seconds.",
            "Unacceptable for chat UX without explicit 'thinking' mode and progress indication.",
          ),
          s(" Reasoning requires async UX patterns — not streaming chat defaults."),
        ],
        [
          s("Cost scales with thinking tokens. "),
          x(
            "Reasoning models may generate 10K+ internal tokens per response — billed even if hidden from user.",
            "PM models unit economics at reasoning tier separately from standard tier.",
          ),
          s(" Premium pricing or usage caps for reasoning features are economic necessity."),
        ],
      ],
      examples: [
        {
          title: "Math tutor — reasoning mode justified",
          body: "EdTech PM routed step-by-step proofs to reasoning model; quick factual answers to fast model. Students accepted 45-second wait for proofs with progress spinner. Reasoning pass rate on calculus: 91% vs 62% fast model. Right task for right tier.",
        },
        {
          title: "Chat UX failure — all reasoning",
          body: "PM enabled reasoning model for all support queries. Avg response time 38 seconds. CSAT dropped 22 points. Reverted to fast model for FAQ; reasoning only for escalated complex tickets. Routing discipline restored satisfaction.",
        },
        {
          title: "Premium tier — reasoning as upsell",
          body: "PM packaged 'Deep Analysis' as premium feature: 50 reasoning queries/month. Power users converted at 3× standard tier price. Unit economics positive at capped usage. Reasoning became revenue driver, not cost centre.",
        },
      ],
    }),
    buildSection({
      number: "9.2",
      title: "How reasoning models work",
      subtitle: "Chain-of-thought at inference time, not just training time — the internal scratchpad that improves accuracy on hard tasks",
      take: "Reasoning models apply chain-of-thought at inference time — generating step-by-step reasoning in a hidden scratchpad before the final answer. Training methods include reinforcement learning on reasoning traces (RLHF/RLAIF on correct reasoning paths) and distillation from larger reasoning teachers. The scratchpad lets models decompose problems, check intermediate steps, and recover from errors — mimicking human deliberate thinking.",
      why: "PMs who understand the mechanism set realistic expectations: reasoning helps on decomposable problems, not on creative brainstorming or retrieval tasks. Wrong task routing wastes compute without quality gain.",
      paragraphs: [
        [
          s("Inference-time CoT differs from prompt-engineered CoT. "),
          x(
            "Prompt 'think step by step' on standard model: shallow. Native reasoning training: model learned to generate useful internal traces.",
            "Quality gap is architectural — not prompt trick.",
          ),
          s(" PM doesn't replicate reasoning by adding 'think step by step' to fast model prompts."),
        ],
        [
          s("Scratchpad tokens are hidden but billed. "),
          x(
            "User sees final answer. Provider bills input + scratchpad + output tokens.",
            "Cost estimation must include thinking token budget — often 5–20× output length.",
          ),
          s(" PM asks vendor: thinking token visibility and billing breakdown."),
        ],
        [
          s("Reasoning quality varies by problem structure. "),
          x(
            "Structured problems (math, code, logic puzzles): large gains. Open-ended creative, retrieval, summarisation: minimal or negative gains.",
            "PM defines reasoning eligibility rules — not 'use everywhere.'",
          ),
          s(" Eval reasoning models on your specific hard-task golden set — not vendor benchmarks alone."),
        ],
      ],
      examples: [
        {
          title: "Code debugging — scratchpad value",
          body: "DevTools PM used reasoning model for bug diagnosis. Scratchpad showed model checking hypotheses — final fix correct 78% vs 51% fast model. PM exposed optional 'show reasoning' for developer trust. Transparency increased adoption.",
        },
        {
          title: "Summarisation — reasoning hurt quality",
          body: "PM tested reasoning model for document summarisation. Reasoning added latency; summary quality unchanged vs fast model. Kept fast model for summarisation. Reasoning routed only to analysis and Q&A tasks. Task-specific eval prevented wasted compute.",
        },
        {
          title: "Billing surprise — thinking tokens",
          body: "First month reasoning feature: COGS 4× forecast. Vendor billed 12K thinking tokens per query average. PM implemented thinking token budget cap and user-facing 'depth' slider. Economics stabilised.",
        },
      ],
    }),
    buildSection({
      number: "9.3",
      title: "When reasoning models win",
      subtitle: "Maths, code, logic, multi-step planning — the task categories where thinking time pays back in quality",
      take: "Reasoning models win on: mathematical proof and calculation, code generation and debugging, logical deduction and constraint satisfaction, multi-step planning with dependencies, and scientific analysis. They lose or tie on: creative writing, simple retrieval, summarisation, conversational chat, and real-time interaction. PMs build routing classifiers or user-selected modes that send only eligible tasks to reasoning tier.",
      why: "Reasoning everywhere is slow and expensive. Reasoning where it matters is competitive advantage. PM task taxonomy is the product decision that captures value.",
      paragraphs: [
        [
          s("Math and code are the clearest reasoning wins. "),
          x(
            "Benchmark gaps largest on GSM8K, MATH, HumanEval, SWE-bench — structured problems with verifiable answers.",
            "If your product's core value is math/code accuracy, reasoning tier is strategic investment.",
          ),
          s(" PM prioritises reasoning adoption for verifiable-output features first."),
        ],
        [
          s("Multi-step planning benefits from deliberation. "),
          x(
            "Travel itinerary with constraints, project plan with dependencies, supply chain optimisation — reasoning decomposes and checks.",
            "Planning UX must tolerate 30–90 second generation — async with notification.",
          ),
          s(" Real-time planning chat is wrong UX for reasoning models."),
        ],
        [
          s("Simple tasks should never hit reasoning path. "),
          x(
            "FAQ lookup, sentiment classification, entity extraction — fast model sufficient.",
            "Routing classifier or rule engine prevents reasoning overkill.",
          ),
          s(" PM defines negative routing rules — what never uses reasoning."),
        ],
      ],
      examples: [
        {
          title: "Financial modelling — reasoning core value",
          body: "FP&A tool PM made reasoning model default for spreadsheet formula generation and scenario analysis. 89% formula correctness vs 67% fast model. Users accepted 60-second generation for complex models. Reasoning was product differentiator.",
        },
        {
          title: "Routing classifier — 70% cost reduction",
          body: "PM deployed complexity classifier: simple queries → fast model, complex → reasoning. 70% of queries stayed fast path. Reasoning COGS dropped 70% with no quality loss on hard tasks. Classifier accuracy 94% after 2 weeks tuning.",
        },
        {
          title: "Creative writing — kept fast model",
          body: "Content tool PM tested reasoning for blog drafts. Reasoning outputs more formulaic; latency unacceptable. Creative tasks stayed on fast model with style fine-tune. Reasoning reserved for fact-checking and outline logic only.",
        },
      ],
    }),
    buildSection({
      number: "9.4",
      title: "What is a world model",
      subtitle: "A model that builds an internal simulation of how the world works — the architecture behind AI that can plan, predict, and act in physical environments",
      take: "A world model learns an internal simulation of environment dynamics — predicting what happens if an action is taken, without executing in reality. World models enable planning: simulate multiple action sequences, evaluate outcomes, choose best path. Architecture connects to model-based reinforcement learning, video prediction models, and robotics simulators. Sora and similar video models are partially world models — they predict plausible future frames, encoding physical intuition.",
      why: "World models are the foundation for physical AI — robotics, autonomous systems, interactive simulations. PMs in these domains need world model literacy; PMs in pure software should know the capability is coming for planning and simulation products.",
      paragraphs: [
        [
          s("World models predict consequences of actions. "),
          x(
            "Given state and action, predict next state. Roll forward multiple steps — simulate trajectories.",
            "Enables 'try in simulation before real world' — critical for costly or dangerous actions.",
          ),
          s(" Robotics and autonomous systems depend on world model quality."),
        ],
        [
          s("Video prediction models encode physical intuition. "),
          x(
            "Models trained on video learn object permanence, gravity, collision — implicit physics.",
            "Sora-style generation demonstrates world model capabilities — not just pixels.",
          ),
          s(" PM in simulation/gaming/robotics: world model quality is core IP."),
        ],
        [
          s("Planning horizon is the capability constraint. "),
          x(
            "Short-horizon prediction (seconds): emerging reliability. Long-horizon planning (minutes): research stage.",
            "PM scopes robotics/simulation features to proven horizon length.",
          ),
          s(" 'AI that plans your day' needs world model maturity not yet production-ready."),
        ],
      ],
      examples: [
        {
          title: "Warehouse robot — simulation before deploy",
          body: "Logistics PM used world model simulator to test robot path plans before physical deployment. 10K simulated runs per layout change. Reduced physical collision incidents 80%. World model was safety gate, not demo.",
        },
        {
          title: "Game NPC — emergent behaviour",
          body: "Game studio used world model for NPCs that predict player actions and react. Short-horizon (2–3 seconds) worked; long-horizon narrative planning failed. PM scoped to combat/reaction, not story generation.",
        },
        {
          title: "Overpromised planning assistant",
          body: "Startup marketed 'AI that simulates your week and optimises schedule.' World model couldn't handle real-world contingency depth. Product failed. PM lesson: match world model horizon to actual capability — not aspirational demos.",
        },
      ],
    }),
    buildSection({
      number: "9.5",
      title: "World models and robotics",
      subtitle: "How physical AI agents use world models to plan actions without trying every option in the real world",
      take: "Robotics world models enable: simulating grasp attempts before moving arm, predicting navigation outcomes, learning from synthetic rollouts, and safe exploration in constrained environments. Physical AI stack: perception (vision/language) → world model (dynamics prediction) → planner (action selection) → actuator. PMs in robotics prioritise simulation fidelity, safety bounds, and human oversight — real-world failure is costly and dangerous.",
      why: "Robotics PMs face different failure modes than software PMs — hardware damage, human injury, regulatory scrutiny. World model quality directly maps to safety. PM judgment on autonomy level is life-safety relevant.",
      paragraphs: [
        [
          s("Simulation-to-real gap is the core robotics challenge. "),
          x(
            "World model trained in simulation may fail on real physics — friction, lighting, wear differ.",
            "PM budgets sim-to-real transfer work; doesn't assume simulation success equals deployment success.",
          ),
          s(" Progressive real-world validation gates are mandatory for physical AI."),
        ],
        [
          s("Planning in world model reduces physical trial-and-error. "),
          x(
            "Robot tries 1000 grasps in simulation; executes top 3 in reality.",
            "Dramatically reduces hardware wear and cycle time for task learning.",
          ),
          s(" PM ROI case for world models: fewer physical iterations, faster deployment."),
        ],
        [
          s("Human oversight remains required for high-stakes actions. "),
          x(
            "Autonomous warehouse: low stakes, high automation. Surgical robot: high stakes, human-in-loop mandatory.",
            "PM defines autonomy spectrum per use case — not maximum autonomy by default.",
          ),
          s(" World model maturity doesn't eliminate human oversight — it reduces trial count."),
        ],
      ],
      examples: [
        {
          title: "Pick-and-place — sim-first deployment",
          body: "Manufacturing PM deployed pick-and-place robot with 50K simulated grasps before physical testing. Sim-to-real transfer: 85% success day one vs 40% without sim pre-training. World model shortened deployment 6 weeks.",
        },
        {
          title: "Sim-to-real failure — caught in staging",
          body: "Navigation world model failed on wet floor surfaces not in training distribution. Staging environment caught before production floor. PM added environmental diversity to sim training. Gate: physical staging sign-off.",
        },
        {
          title: "Autonomy spectrum — human override always",
          body: "Delivery robot PM: autonomous navigation in warehouse; human remote override for sidewalk. World model handled warehouse; human oversight for unpredictable public space. PM documented autonomy boundaries in safety case.",
        },
      ],
    }),
    buildSection({
      number: "9.6",
      title: "Video as world model training data",
      subtitle: "Why companies are using internet video to teach models about physical causality, object permanence, and spatial reasoning",
      take: "Internet video is the largest dataset of physical world dynamics — objects falling, people walking, liquids pouring, doors opening. Training on video teaches models implicit physics: gravity, object permanence, collision, causality. Companies invest in video foundation models (Sora, Genie, others) partly as world model pre-training — not just for generation, but for downstream planning and robotics. Data scale and diversity matter more than curated simulation for general physical intuition.",
      why: "PMs evaluating video AI vendors or robotics partners should ask about world model training data and downstream planning capabilities — not just generation quality. Video generation and physical AI share underlying world models.",
      paragraphs: [
        [
          s("Video encodes causal structure at scale. "),
          x(
            "Billions of hours show: push → move, drop → fall, open → reveal.",
            "Models learn statistical physics without explicit physics engine.",
          ),
          s(" Video foundation models are world model pre-training — strategic asset."),
        ],
        [
          s("Generation quality proxies world model quality. "),
          x(
            "Video that respects physics (objects don't float, people don't morph) indicates stronger world model.",
            "PM uses generation coherence as rough world model eval — not perfect, but signal.",
          ),
          s(" Physics-violating video generation = weak world model for robotics downstream."),
        ],
        [
          s("Curated simulation complements video scale. "),
          x(
            "Video: diverse but noisy. Simulation: precise but narrow. Robotics leaders combine both.",
            "PM asks partners: video pre-train + sim fine-tune pipeline?",
          ),
          s(" Pure video-only world models may lack precision for industrial robotics."),
        ],
      ],
      examples: [
        {
          title: "Video model vendor — robotics roadmap",
          body: "PM evaluated video generation vendor. Asked: world model downstream for warehouse robotics? Vendor had internal robotics team using same foundation model. Chose vendor for long-term platform bet — not just ad generation.",
        },
        {
          title: "Physics benchmark — vendor comparison",
          body: "PM ran physics coherence eval: ball drop, liquid pour, door open across 3 video models. Model C scored highest on causal consistency. Selected for simulation product despite lower cinematic quality. World model signal trumped aesthetics.",
        },
        {
          title: "Sim + video hybrid — robotics partner",
          body: "Robotics startup combined internet video pre-train with Isaac Sim fine-tune. PM due diligence: verified both data sources. Hybrid achieved 90% sim-to-real vs 60% video-only. Data strategy was investment thesis.",
        },
      ],
    }),
    buildSection({
      number: "9.7",
      title: "Long-context and infinite context",
      subtitle: "What becomes possible when context windows are no longer a binding constraint — and the product designs it unlocks",
      take: "Context windows expanded from 4K to 128K to 1M+ tokens — enabling entire codebases, book libraries, and multi-hour transcripts in single prompts. 'Infinite context' approaches (RAG + long context hybrid, memory compression, retrieval-augmented attention) aim to remove context as product constraint. Unlocked product patterns: analyse entire document corpus, persistent cross-session memory, whole-repo code understanding, and long-form video/audio processing without chunking.",
      why: "PMs who design for long-context unlock product categories impossible at 4K — but must model cost (attention scales with context) and latency. Long-context is capability tier with unit economics implications.",
      paragraphs: [
        [
          s("Whole-corpus analysis replaces chunk-and-stitch. "),
          x(
            "Previously: chunk docs, retrieve, synthesise. Now: load entire corpus, ask holistic questions.",
            "Product UX: 'analyse all my contracts' not 'search one contract.'",
          ),
          s(" PM redesigns features assuming full-corpus context — not RAG workarounds."),
        ],
        [
          s("Cost scales with context length. "),
          x(
            "1M token input costs 100× 10K token input. Long-context features need premium pricing or usage caps.",
            "PM models cost per 'full corpus analysis' — may be $5–50 per query.",
          ),
          s(" Long-context is premium tier — not default for all users."),
        ],
        [
          s("Retrieval still matters at infinite scale. "),
          x(
            "Even 1M tokens can't hold entire enterprise knowledge base. Hybrid: retrieval narrows + long context deepens.",
            "PM designs retrieval + long-context pipeline — not either/or.",
          ),
          s(" 'Infinite context' marketing exceeds practical single-prompt limits for years."),
        ],
      ],
      examples: [
        {
          title: "Legal — full contract corpus analysis",
          body: "Legal PM shipped 'analyse all 400 contracts' with 500K context model. Holistic risk questions previously required weeks of associate time. Premium tier: $200/month, 20 full-corpus analyses. Unit economics positive at capped usage.",
        },
        {
          title: "Code — whole-repo understanding",
          body: "DevTools PM loaded entire repo (80K tokens) for architecture questions. Replaced chunk-based code search for structural queries. Developers paid 3× for 'repo context' tier. Long-context was clear upsell.",
        },
        {
          title: "Cost guardrail — context budget",
          body: "PM implemented per-user context budget: 200K tokens/day. Prevents runaway COGS from power users loading massive corpora repeatedly. Budget visible in UI. Abuse prevented; premium unlimited tier for enterprise.",
        },
      ],
    }),
    buildSection({
      number: "9.8",
      title: "Multimodal reasoning",
      subtitle: "Models that reason across text, images, audio, and code simultaneously — the unified intelligence layer that's still emerging",
      take: "Multimodal reasoning combines reasoning capability with cross-modal understanding — analysing a chart image while reasoning about implications, debugging code from screenshot, interpreting lab results from photo plus patient history. Models like GPT-4o, Gemini, and Claude process multiple modalities in unified forward pass, then apply reasoning scratchpad across combined context. Still emerging: reasoning quality on visual inputs lags text; complex multimodal planning is research-stage.",
      why: "Multimodal reasoning unlocks high-value enterprise patterns — document understanding, visual QA, medical imaging analysis. PMs who scope to proven modality combinations avoid shipping impressive demos with unreliable production quality.",
      paragraphs: [
        [
          s("Unified forward pass enables cross-modal reasoning. "),
          x(
            "Model sees image and text together — reasons about relationships, not separately then merges.",
            "Enables: 'why does this chart contradict the paragraph?' in one pass.",
          ),
          s(" PM designs prompts that require cross-modal reasoning — not siloed per-modality."),
        ],
        [
          s("Visual reasoning lags text reasoning today. "),
          x(
            "Math on text: reasoning models excel. Math from handwritten image: higher error rate.",
            "PM evals multimodal reasoning on actual user inputs — not text-only benchmarks.",
          ),
          s(" Golden set must include real images, scans, charts — not text descriptions of them."),
        ],
        [
          s("Enterprise document understanding is the near-term win. "),
          x(
            "PDFs with text, tables, charts, signatures — multimodal reasoning extracts and reasons holistically.",
            "Higher value than consumer 'reason about this photo' features.",
          ),
          s(" PM prioritises document multimodal reasoning for B2B roadmap."),
        ],
      ],
      examples: [
        {
          title: "Invoice processing — multimodal reasoning",
          body: "AP automation PM used multimodal reasoning on invoice PDFs: extract line items from table image, cross-check math, flag anomalies vs PO. 92% accuracy vs 78% OCR+text pipeline. Reasoning across visual table and text was key.",
        },
        {
          title: "Chart QA — failed golden set",
          body: "PM shipped 'ask questions about uploaded chart.' Multimodal reasoning on complex dual-axis charts: 61% accuracy. Descoped to simple bar/line charts only. Honest modality limit prevented enterprise churn.",
        },
        {
          title: "Medical imaging — human-in-loop mandatory",
          body: "Health PM piloted multimodal reasoning on X-ray + patient history. Reasoning quality promising but liability requires radiologist sign-off. Shipped as 'AI draft report' not diagnosis. Multimodal reasoning as assist, not autonomous.",
        },
      ],
    }),
    buildSection({
      number: "9.9",
      title: "Agentic AI at scale",
      subtitle: "From single agents to networks of specialised agents acting autonomously over days and weeks — the infrastructure and trust challenges ahead",
      take: "Agentic AI at scale moves from single-session agents to persistent, multi-agent systems that work over days and weeks — research agents gathering sources, coding agents implementing features, ops agents monitoring systems. Challenges: trust and oversight at autonomy scale, cost accumulation over long runs, coordination between agents, failure recovery across sessions, and accountability when agents act on user's behalf. Infrastructure: agent memory, tool registries, supervisor patterns, budget caps, and kill switches.",
      why: "PMs building agent products today are laying groundwork for scaled agentic systems. Architecture choices — memory, supervision, budget controls — compound. PMs who ignore scale challenges ship demos that can't run for a week without human intervention.",
      paragraphs: [
        [
          s("Long-horizon agents accumulate cost and risk. "),
          x(
            "Agent running 8 hours: thousands of tool calls, millions of tokens. Runaway agent can incur $500+ and take irreversible actions.",
            "PM implements: budget caps, action approval gates, periodic human checkpoints.",
          ),
          s(" Autonomy duration is product parameter — not 'let it run until done.'"),
        ],
        [
          s("Multi-agent coordination requires supervisor design. "),
          x(
            "Research agent + writer agent + fact-checker agent — supervisor orchestrates, resolves conflicts, enforces quality gates.",
            "PM defines agent roles, handoff protocols, and escalation to human.",
          ),
          s(" Multi-agent without supervisor is coordination chaos."),
        ],
        [
          s("Trust scales slower than capability. "),
          x(
            "Users trust agent for 5-minute task. Same agent for 5-day project: trust gap.",
            "PM builds trust incrementally: short tasks → supervised long tasks → autonomous long tasks.",
          ),
          s(" Autonomy roadmap follows trust curve — not capability curve."),
        ],
      ],
      examples: [
        {
          title: "Research agent — budget cap prevented incident",
          body: "PM set $50 and 2-hour cap on research agent. Runaway loop at 90 minutes burned $47 before cap killed it. Without cap: estimated $800+ and duplicate API calls to vendor. Budget caps non-negotiable for autonomous agents.",
        },
        {
          title: "Multi-agent content pipeline",
          body: "PM orchestrated: researcher → writer → editor → fact-checker agents. Supervisor agent managed handoffs. Human approved before publish. 3× throughput vs single agent. Supervisor pattern was core architecture.",
        },
        {
          title: "Trust ladder — 6-month autonomy rollout",
          body: "PM rolled autonomy: month 1–2 single-task agents only. Month 3–4 multi-step with approval gates. Month 5–6 supervised long-horizon for power users. Churn near zero; competitors who launched full autonomy had incident headlines.",
        },
      ],
    }),
    buildSection({
      number: "9.10",
      title: "PM decision lens: building strategy on an uncertain frontier",
      subtitle: "How to make roadmap bets on emerging capabilities without overcommitting to today's limitations or ignoring tomorrow's possibilities",
      take: "Frontier PM strategy: build modular architecture that swaps models and capabilities without replatforming; invest in eval infrastructure that gates adoption of new capabilities; use scenario-based roadmaps (optimistic/base/conservative) for emerging tech; maintain 'capability watch' process for vendor and research announcements; avoid both 'we'll never need reasoning' and 'replatform everything for o-series.' Bet when eval crosses threshold — not when press release drops.",
      why: "The frontier punishes both laggards and hype-chasers. PMs with disciplined adoption frameworks capture new capabilities faster than competitors — without betting the company on unproven tech.",
      paragraphs: [
        [
          s("Modular routing architecture is the frontier insurance policy. "),
          x(
            "Abstract model calls behind router: fast, reasoning, multimodal, on-device. Swap implementations without product rewrite.",
            "PM requires eng: no hardcoded single-model dependencies in product logic.",
          ),
          s(" Router pattern paid back within first model generation swap."),
        ],
        [
          s("Eval gates adoption — not announcements. "),
          x(
            "New reasoning model launches → run golden set → compare to incumbent → adopt if ≥X% improvement at acceptable cost/latency.",
            "Disciplined process prevents hype-driven replatform and enables fast adoption when ready.",
          ),
          s(" PM owns capability adoption checklist — eng runs eval, PM decides ship."),
        ],
        [
          s("Scenario roadmaps for emerging capabilities. "),
          x(
            "Conservative: reasoning for premium tier only, 2026. Base: reasoning for hard tasks, 2025 H2. Optimistic: reasoning default for pro users, 2025 Q3.",
            "Pre-agreed scenarios prevent panic pivots and missed opportunities.",
          ),
          s(" Frontier strategy is scenario planning — not single-point prophecy."),
        ],
      ],
      examples: [
        {
          title: "Model router — 2-week o-series adoption",
          body: "When OpenAI shipped o-series, PM's team ran golden set in 3 days. Router already abstracted model calls. Shipped reasoning tier in 2 weeks. Competitor without router: 3-month replatform. Modular architecture was strategic asset.",
        },
        {
          title: "Eval gate — declined premature world model bet",
          body: "Vendor pitched world model for product planning. PM golden set: 45% accuracy on real planning tasks. Gate: 75%. Declined partnership. 9 months later, vendor product still below gate. Eval discipline saved 6-figure investment.",
        },
        {
          title: "Capability watch — quarterly frontier review",
          body: "PM instituted quarterly frontier review: reasoning, world models, long-context, agents. Cross-functional: eng, PM, design. Output: updated scenario roadmap and adoption triggers. Team adopted reasoning 4 weeks after threshold crossed — no emergency sprint.",
        },
      ],
    }),
  ],
  quiz: [
    {
      q: "What is the primary tradeoff with reasoning models?",
      options: [
        "They are always cheaper than standard models.",
        "They improve accuracy on hard tasks but at 5–30× latency and cost.",
        "They replace the need for fast models entirely.",
        "They only work for creative writing.",
      ],
      correct: 1,
      correctFeedback:
        "Right. Reasoning models trade latency and cost for accuracy on structured hard tasks.",
      wrongFeedback:
        "Reasoning models cost more and take longer — quality gain is task-specific. Re-read sections 9.1–9.3.",
    },
    {
      q: "What is a world model?",
      options: [
        "A model that knows every fact about Earth.",
        "An internal simulation that predicts environment dynamics and consequences of actions.",
        "A global deployment of cloud AI.",
        "A model trained only on satellite imagery.",
      ],
      correct: 1,
      correctFeedback:
        "Exactly. World models simulate dynamics to enable planning without real-world trial-and-error.",
      wrongFeedback:
        "World models predict consequences of actions in simulated environments. Re-read section 9.4.",
    },
    {
      q: "When should PMs route queries to reasoning models?",
      options: [
        "All queries — reasoning is always better.",
        "Math, code, logic, and multi-step planning — not simple retrieval or creative chat.",
        "Only when the user explicitly pays extra — never automatically.",
        "Never — reasoning models are not production-ready.",
      ],
      correct: 1,
      correctFeedback:
        "Right. Reasoning wins on structured, verifiable hard tasks — not all task types.",
      wrongFeedback:
        "Route reasoning to math, code, logic, planning — not everything. Re-read section 9.3.",
    },
    {
      q: "Why are companies training on internet video for world models?",
      options: [
        "Video is cheaper than text to store.",
        "Video encodes physical causality, object permanence, and spatial dynamics at massive scale.",
        "Regulators require video training data.",
        "Video models don't need world model capabilities.",
      ],
      correct: 1,
      correctFeedback:
        "Right. Video teaches implicit physics and causality — foundation for planning and robotics.",
      wrongFeedback:
        "Video provides physical dynamics training data at scale. Re-read section 9.6.",
    },
    {
      kind: "order",
      q: "Put the disciplined frontier capability adoption process in order.",
      prompt: "Drag to arrange from first step (top) to last (bottom).",
      items: [
        "New capability announced or available (reasoning, world model, etc.).",
        "Run golden set eval against incumbent on your specific tasks.",
        "Compare quality, latency, and cost against adoption threshold.",
        "If threshold met: integrate via modular router architecture.",
        "Ship with scenario-appropriate scope; monitor and iterate.",
      ],
      correctFeedback:
        "Right. Announce → eval → compare → integrate via router → ship with scope.",
      wrongFeedback:
        "Adoption flow: announce → eval → threshold compare → router integrate → ship. Re-read section 9.10.",
    },
    {
      kind: "categorize",
      q: "Match each emerging AI capability to its primary product implication.",
      categories: ["Latency & cost tier", "Physical / simulation", "Architecture & strategy"],
      items: [
        { text: "Route hard tasks to reasoning; simple tasks to fast model.", category: 0 },
        { text: "Simulate robot grasps before physical deployment.", category: 1 },
        { text: "Build model router to swap capabilities without replatform.", category: 2 },
        { text: "Premium pricing for 1M-token corpus analysis.", category: 0 },
        { text: "Video foundation model as world model pre-training.", category: 1 },
        { text: "Quarterly frontier review with scenario roadmaps.", category: 2 },
      ],
      correctFeedback:
        "Right. Latency/cost, physical/simulation, and architecture/strategy are distinct frontier lenses.",
      wrongFeedback:
        "Match items to cost tier, physical AI, and strategy categories. Re-read sections 9.1–9.10.",
    },
  ],
});
