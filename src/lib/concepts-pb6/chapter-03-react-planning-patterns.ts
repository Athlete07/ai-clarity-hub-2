import { buildChapter, buildSection, s, x } from "../concepts-pb4-helpers";

export const chapter03ReactPlanningPatterns = buildChapter({
  slug: "pb6-react-planning-patterns",
  number: 3,
  shortTitle: "ReAct & Planning",
  title: "ReAct & Planning Patterns",
  readingMinutes: 28,
  summary:
    "The reasoning strategies that let agents tackle complex, multi-step tasks without losing the plot",
  keyTakeaway:
    "ReAct interleaves reasoning and acting so the model thinks before each tool call. Plan-and-execute, self-reflection, decomposition, and replanning add structure for long tasks — at the cost of latency and tokens. PMs choose planning depth based on task complexity, not maximum deliberation by default.",
  pmCallout:
    "As a PM: more reasoning steps mean higher COGS and slower UX. Match planning depth to task stakes and ambiguity — a refund lookup doesn't need tree-of-thought; a migration plan might need plan-and-execute with replanning gates.",
  sections: [
    buildSection({
      number: "3.1",
      title: "What is ReAct",
      subtitle: "Reasoning + Acting interleaved — the pattern where the model thinks out loud before every action",
      take: "ReAct (Reason + Act) is an agent pattern where the model alternates explicit reasoning traces ('Thought: …') with tool actions ('Action: …') and observations ('Observation: …') — grounding each step in the last result instead of planning the entire task in one shot.",
      why: "ReAct is the default mental model for modern agents. PMs who recognise the pattern can eval trace quality, debug wrong actions, and decide whether visible reasoning helps or hurts UX.",
      paragraphs: [
        [
          s("ReAct makes the scratchpad external and sequential. "),
          x(
            "Classic paper: Synergizing Reasoning and Acting in Language Models (Yao et al.). The model doesn't commit to a full plan upfront — it reasons one step, acts, observes, reasons again.",
            "Contrast with pure chain-of-thought: CoT reasons to an answer; ReAct reasons to an action.",
          ),
          s(" Most framework 'agents' are ReAct-shaped under the hood."),
        ],
        [
          s("Thought traces are optional in production but valuable internally. "),
          x(
            "Hiding thoughts from users saves tokens and reduces noise; logging them enables support debugging. Some products show abbreviated reasoning ('Checking order status…').",
            "PM tradeoff: transparency vs token cost vs revealing system logic to competitors.",
          ),
          s(" Always log thoughts internally even if UI hides them."),
        ],
        [
          s("ReAct suits tasks with uncertain depth. "),
          x(
            "You don't know if you need one search or five until you see results. ReAct adapts step count dynamically.",
            "Less suited when a fixed optimal plan exists — plan-and-execute may be cheaper.",
          ),
          s(" ReAct is the flexible default; specialised patterns optimise from there."),
        ],
      ],
      examples: [
        {
          title: "ReAct trace debugged wrong refund",
          body: "Support ticket: agent refunded wrong amount. Trace showed Thought: 'user wants full refund' before checking order partial-ship status. PM added eval case; prompt now requires order fetch before refund tool. Trace made root cause obvious.",
        },
        {
          title: "Hidden vs visible thoughts — A/B test",
          body: "Power users loved expandable reasoning; casual users found it noisy. PM shipped: thoughts logged, UI shows step labels only. CSAT neutral, support debug time -30%.",
        },
        {
          title: "LangChain ReAct agent — default starter",
          body: "Most LangChain agent tutorials use ReAct prompt template. PM learning: 'agent' in vendor docs often means ReAct loop — clarify before comparing frameworks.",
        },
      ],
    }),
    buildSection({
      number: "3.2",
      title: "Why interleaved reasoning works",
      subtitle: "How explicit scratchpad thinking reduces wrong tool calls and cascading errors",
      take: "Interleaved reasoning forces the model to condition each action on the latest observation — reducing blind multi-step plans that go wrong at step two and never recover. The scratchpad externalises working memory the context window might otherwise lose.",
      why: "When agents fail, PMs ask 'why did it do that?' Interleaved traces answer per-step — enabling targeted prompt fixes instead of vague 'be smarter' instructions.",
      paragraphs: [
        [
          s("Grounding beats upfront hallucinated plans. "),
          x(
            "Models confidently draft 8-step plans where step 3 assumes data they haven't fetched. ReAct fetches first, then reasons — plans stay tied to reality.",
            "Measured effect: wrong-tool rate often drops 10–20% vs act-without-thought on complex tasks.",
          ),
          s(" Grounding is why ReAct beats 'just call tools' on ambiguous tasks."),
        ],
        [
          s("Scratchpad reduces working memory load. "),
          x(
            "Long tasks accumulate context; explicit Thought lines summarise intent for the next token prediction — a cognitive anchor.",
            "Particularly helps smaller models on multi-tool workflows.",
          ),
          s(" Token cost of thoughts buys reliability — PM weighs the tradeoff."),
        ],
        [
          s("Errors become localised and recoverable. "),
          x(
            "Failed observation after a thought → next thought can acknowledge failure and retry differently. Monolithic plans collapse entirely on one surprise.",
            "Recovery is a product requirement; interleaved structure enables it.",
          ),
          s(" Design prompts that require acknowledging tool errors in the next thought."),
        ],
      ],
      examples: [
        {
          title: "Thought-before-action eval gate",
          body: "PM required golden traces to include fetch-before-act on financial tools. Automated linter on eval traces; 15% of prompt versions failed before human review. Quality gate cheaper than production incidents.",
        },
        {
          title: "Smaller model + ReAct matched larger model",
          body: "Haiku with explicit ReAct matched Sonnet raw tool-calling on internal lookup tasks — thoughts compensated for weaker intuition. PM cost savings: 70% on that workflow.",
        },
        {
          title: "Cascade prevented by mid-loop observation",
          body: "Agent searched KB, found conflicting docs, Thought noted conflict, asked clarifying question instead of posting wrong answer. Without interleaved reasoning, prior version guessed.",
        },
      ],
    }),
    buildSection({
      number: "3.3",
      title: "Plan-and-execute",
      subtitle: "Generating a full task plan upfront before taking any actions — when it helps and when the plan goes stale",
      take: "Plan-and-execute splits the agent into planner (generates step list) and executor (follows steps, often with a cheaper model). It front-loads structure for long, decomposable tasks — but plans go stale when reality diverges, requiring replanning triggers.",
      why: "PMs see 'planning agent' demos and expect reliability. Without replanning policy, plan-and-execute fails silently when step three returns unexpected data.",
      paragraphs: [
        [
          s("Planner optimises for global structure. "),
          x(
            "Good for: research reports, migration runbooks, multi-file refactors with clear phases. Planner outputs: 1) gather requirements 2) query analytics 3) draft summary 4) format citations.",
            "Executor runs each step with narrower context — token efficient.",
          ),
          s(" Use when optimal sequence is knowable in outline even if details vary."),
        ],
        [
          s("Stale plans are the failure mode. "),
          x(
            "Step 2 returns empty dataset — steps 3–8 assume data exists. Without replanning, executor bluffs or errors.",
            "PM spec: replan triggers on empty results, tool failure, or confidence drop.",
          ),
          s(" Plan-and-execute without replan is a demo architecture."),
        ],
        [
          s("Cost tradeoff: two model roles. "),
          x(
            "Planner call (frontier model) + N executor calls (cheaper model) can beat one frontier ReAct loop on long tasks — or cost more if replanning is frequent.",
            "PM models COGS per task type before choosing pattern.",
          ),
          s(" Benchmark both patterns on golden workflows — don't assume planner is cheaper."),
        ],
      ],
      examples: [
        {
          title: "Board report agent — planner + executor",
          body: "Planner (GPT-4 class) outlined 6 sections; executor (mini model) pulled data per section. Total cost 40% below pure ReAct on 20-minute task. Replan fired once when earnings API returned preliminary data.",
        },
        {
          title: "Stale plan failure — lesson learned",
          body: "Migration agent plan assumed 200 tables; actual 340. Executor skipped undocumented tables. PM added validation step + replan on schema mismatch. Reliability 78% → 94%.",
        },
        {
          title: "When NOT to plan-and-execute",
          body: "Simple order lookup — planner added 8s and 2K tokens for a 2-step task. PM routing: plan only when estimated steps >5 or task in 'research' class.",
        },
      ],
    }),
    buildSection({
      number: "3.4",
      title: "Chain-of-thought inside agents",
      subtitle: "Using CoT not just for answers but for action selection — extending the pattern into agentic loops",
      take: "Chain-of-thought inside agents means the model elaborates reasoning before choosing tools or final answers — not just 'Thought:' labels but structured deliberation: weighing options, checking prerequisites, verifying constraints before act.",
      why: "CoT is the highest-leverage prompt technique for agent reliability. PMs should know it applies per-step inside loops, not only for math word problems.",
      paragraphs: [
        [
          s("CoT before action selection reduces impulsive tool calls. "),
          x(
            "Prompt pattern: 'Before calling any tool, list what you know, what you need, and which tool provides it.'",
            "Especially effective for models prone to calling search when DB query is correct.",
          ),
          s(" CoT is prompt design, not a separate product feature."),
        ],
        [
          s("Structured CoT beats vague 'think step by step.' "),
          x(
            "Better: 'Verify: Do I have customer_id? If not, call get_user first. If yes, proceed to get_orders.' Checklist-style reasoning.",
            "PM provides domain checklists in system prompt for regulated workflows.",
          ),
          s(" Domain-specific CoT templates are reusable IP."),
        ],
        [
          s("CoT token cost scales with loop depth. "),
          x(
            "Verbose reasoning every step doubles token spend on 10-step tasks. Tune verbosity: full CoT on write decisions, minimal on routine reads.",
            "Adaptive CoT — eng pattern; PM defines which action classes need full deliberation.",
          ),
          s(" Budget CoT like you budget model tier."),
        ],
      ],
      examples: [
        {
          title: "Checklist CoT for healthcare triage agent",
          body: "System prompt included mandatory CoT checklist: symptoms collected?, contraindications checked?, escalation criteria? Wrong escalation rate dropped 11%. Legal approved explicit checklist over open reasoning.",
        },
        {
          title: "CoT ablation — quantified value",
          body: "Team A/B tested CoT on vs off in agent loop. Task success +7pp, cost +22%. PM kept CoT for write tools only; read tools direct. Net cost +8%, success +6pp.",
        },
        {
          title: "CoT for final answer, not just tools",
          body: "Agent gathered data via tools then CoT-synthesised before user response — reduced contradictory summaries. PM user trust metric improved.",
        },
      ],
    }),
    buildSection({
      number: "3.5",
      title: "Self-reflection and self-critique",
      subtitle: "Agents that evaluate their own outputs before proceeding — the quality gate inside the loop",
      take: "Self-reflection adds a step where the model critiques its draft output or proposed action against criteria — then revises or proceeds. Patterns: generate → reflect → revise; or act → observe → reflect → continue. Acts as an internal QA layer before user sees results.",
      why: "Reflection adds latency and cost but catches errors humans would otherwise report. PMs decide which task classes justify an extra model pass — not universal.",
      paragraphs: [
        [
          s("Reflection works when criteria are articulable. "),
          x(
            "Good: 'Does this JSON match schema? Are citations present? Is tone professional?' Bad: 'Is this a good strategy?' without rubric.",
            "Pair reflection with explicit checklists from domain experts.",
          ),
          s(" Vague reflection prompts produce vague confirmation bias."),
        ],
        [
          s("Critic role can be separate model or pass. "),
          x(
            "Same model reflects (cheap, fast) vs critic model (diverse perspective, higher cost). Multi-agent critics for high-stakes drafts.",
            "PM evaluates critic ROI on error catch rate vs added seconds.",
          ),
          s(" Reflection is not free — measure caught errors per dollar."),
        ],
        [
          s("Cap reflection loops to prevent spirals. "),
          x(
            "Max one reflection per step or two revisions total — otherwise agents iterate forever polishing mediocre drafts.",
            "PM spec: reflection_budget per run.",
          ),
          s(" Diminishing returns after 1–2 reflection passes on most tasks."),
        ],
      ],
      examples: [
        {
          title: "Reflect-before-send on customer emails",
          body: "Agent drafted email → reflect pass checked tone, PII, policy mentions → revise. Inappropriate sends dropped to near zero. PM accepted +3s latency on email tool.",
        },
        {
          title: "Reflection spiral — uncapped revision",
          body: "Agent revised report seven times; user waited 4 minutes. PM capped at 2 reflections; shipped 'good enough' threshold in prompt. p95 latency -60%.",
        },
        {
          title: "Separate critic model for contracts",
          body: "Draft model + critic model (different family) caught clause conflicts single-pass missed. Legal valued dual-model; PM priced into enterprise tier.",
        },
      ],
    }),
    buildSection({
      number: "3.6",
      title: "Task decomposition",
      subtitle: "Breaking a complex goal into sub-tasks — the skill that separates capable agents from ones that get stuck",
      take: "Task decomposition splits a user goal into ordered or parallel sub-tasks — explicitly in a plan node or implicitly in ReAct thoughts. Strong decomposition matches how experts tackle problems; weak decomposition causes skipped steps, wrong order, or infinite thrashing.",
      why: "Users ask holistic questions ('launch this feature'); agents need atomic steps. PMs define decomposition templates for recurring workflows — the playbook inside the agent.",
      paragraphs: [
        [
          s("Decomposition can be prompt-embedded or tool-assisted. "),
          x(
            "Prompt: 'For migration requests, always: assess → backup → migrate → verify.' Tool: create_subtask entries in project system.",
            "Templates accelerate reliability; pure model decomposition varies in quality.",
          ),
          s(" Productised workflows deserve explicit decomposition scripts."),
        ],
        [
          s("Sub-task granularity matters. "),
          x(
            "Too coarse: 'fix the bug' — one step, no guidance. Too fine: 40 micro-steps — context exhaustion.",
            "Rule of thumb: 3–12 sub-tasks for complex jobs; each sub-task one tool cluster or one deliverable.",
          ),
          s(" PM reviews decomposition on golden tasks during eval."),
        ],
        [
          s("Dependencies between sub-tasks must be explicit. "),
          x(
            "Can't 'send invoice' before 'calculate total.' Decomposition output should tag blockers: step B depends on step A output.",
            "LangGraph and planners can encode DAG structure; ReAct relies on prompt discipline.",
          ),
          s(" Missing dependency logic causes out-of-order actions."),
        ],
      ],
      examples: [
        {
          title: "Onboarding checklist decomposition",
          body: "HR agent decomposed onboarding into 9 sub-tasks with dependencies. Completion rate 88% vs 62% without template. PM maintained decomposition as versioned YAML — product asset.",
        },
        {
          title: "Over-decomposition token burn",
          body: "Agent created 35 sub-steps for 'summarise this doc' — unnecessary. PM prompt: 'If task completable in ≤3 tools, do not decompose.' Cost normalised.",
        },
        {
          title: "Hierarchical decomposition — manager agent",
          body: "Orchestrator decomposed 'QBR prep' into research, finance, narrative sub-agents. PM tracked handoff failures; improved sub-task I/O schema.",
        },
      ],
    }),
    buildSection({
      number: "3.7",
      title: "Replanning on failure",
      subtitle: "What happens when an action fails mid-task — agents that recover vs agents that spiral",
      take: "Replanning triggers when a tool fails, returns empty, violates assumptions, or hits a confidence threshold — the agent pauses execution, revises the plan, and continues or escalates. Without replanning, agents repeat failed actions or hallucinate progress.",
      why: "Production tasks fail mid-flight constantly — APIs down, data missing, permissions denied. Recovery behaviour separates demo agents from operational ones.",
      paragraphs: [
        [
          s("Detect failure explicitly — don't trust model vibes. "),
          x(
            "Runtime tags tool result as error, empty, or partial. Planner replans only on tagged states — not on model guessing success.",
            "PM defines failure signals per tool category.",
          ),
          s(" Structured failure metadata enables reliable replanning."),
        ],
        [
          s("Replan strategies: local fix vs global rewrite. "),
          x(
            "Local: retry alternate tool, broaden search. Global: discard plan, new planner call with failure context.",
            "Escalation to human is valid replan outcome — not a failure of the agent.",
          ),
          s(" PM documents escalation as acceptable terminal state."),
        ],
        [
          s("Prevent retry spirals with caps and backoff. "),
          x(
            "Same tool + same args failing 3 times → stop, escalate. Exponential backoff on transient errors.",
            "Spiral incidents are support nightmares and cost bombs.",
          ),
          s(" Replan budget pairs with loop budget from Chapter 1."),
        ],
      ],
      examples: [
        {
          title: "Empty search → replan broadened query",
          body: "Agent searched narrow filter, zero results. Replan widened date range, succeeded. Without replan, old version said 'no data exists' — wrong.",
        },
        {
          title: "Retry spiral on 403",
          body: "Permission denied; agent retried create_record 12 times. Fix: 403 = permanent, escalate to human with permission request template. PM added to failure playbook.",
        },
        {
          title: "Global replan after API schema change",
          body: "Mid-task tool started returning new field names. Local retries failed. Global replan with updated tool docs recovered. PM tied replan to tool version in state.",
        },
      ],
    }),
    buildSection({
      number: "3.8",
      title: "Tree-of-thought for agents",
      subtitle: "Exploring multiple action paths before committing — when the deliberation is worth the latency cost",
      take: "Tree-of-thought (ToT) explores multiple reasoning branches — scoring or voting on alternatives before committing to an action. Useful for puzzles, optimisation, and high-stakes decisions with enumerable options — expensive for routine agent tasks.",
      why: "ToT demos impress; production costs explode. PMs should approve ToT only when decision quality measurably improves on eval and users tolerate multi-second deliberation.",
      paragraphs: [
        [
          s("ToT trades compute for breadth. "),
          x(
            "Generate 3–5 candidate next actions, simulate or score, pick best. Each branch may need tool call or rollforward — latency multiplies.",
            "Best when action space is small and scoring rubric exists.",
          ),
          s(" Default away from ToT unless eval proves necessity."),
        ],
        [
          s("Scoring needs a criterion — model or heuristic. "),
          x(
            "Heuristic: pick shortest plan. Model critic: rate each branch 1–10 on goal alignment. Hybrid common.",
            "Without scoring, ToT is random branching — worse than ReAct.",
          ),
          s(" PM supplies rubric for critic when quality is subjective."),
        ],
        [
          s("ToT at decision forks only — not every step. "),
          x(
            "Pattern: ReAct for routine steps, ToT when two plausible tools tie or stakes spike (e.g., which delete path).",
            "Selective ToT captures most benefit at fraction of cost.",
          ),
          s(" PM marks decision forks in workflow diagrams for ToT candidacy."),
        ],
      ],
      examples: [
        {
          title: "ToT for SQL query plan selection",
          body: "Agent generated 3 SQL candidates, EXPLAIN scored performance, executed best. Worth +4s on heavy analytics; disabled for simple lookups. PM routing rule by query complexity.",
        },
        {
          title: "ToT rejected for support bot",
          body: "Eng proposed ToT for all turns. Eval: +12% accuracy, +280% cost, +6s p95. PM rejected — reflection on write tools sufficient.",
        },
        {
          title: "Game-playing agent — ToT natural fit",
          body: "Puzzle game agent used ToT for move selection — users expected think time. PM aligned UX with deliberate pacing — rare case where latency matched expectations.",
        },
      ],
    }),
    buildSection({
      number: "3.9",
      title: "Prompt patterns for reliable planning",
      subtitle: "The system prompt structures that produce better agent reasoning in practice",
      take: "Reliable agent planning comes from system prompt structure: role and constraints, tool usage rules, decomposition templates, failure handling, output format, and few-shot exemplar traces — not from hoping the base model 'figures it out.'",
      why: "Prompt patterns are the fastest ship lever PMs own with legal and domain input. Version, test, and rollback prompts like code.",
      paragraphs: [
        [
          s("Layer the system prompt: identity → rules → format → examples. "),
          x(
            "Identity: 'You are a billing support agent for Acme SaaS.' Rules: 'Never refund without order_id.' Format: 'Thought / Action / Observation.' Examples: 2–3 golden traces.",
            "Layers reduce contradiction and omission.",
          ),
          s(" Prompt bloat fights itself — prune conflicting instructions quarterly."),
        ],
        [
          s("Negative rules matter: what NOT to do. "),
          x(
            "'Do not call delete tools.' 'Do not guess customer IDs.' 'Do not answer from training data for policy questions — search KB.'",
            "Agents violate positive instructions; negative guards catch common failure modes.",
          ),
          s(" Mine support tickets for 'agent should not have…' → prompt negatives."),
        ],
        [
          s("Version prompts and tie to eval scores. "),
          x(
            "prompt_version in traces; A/B prompt v3.2 vs v3.3 on golden set before promote.",
            "PM changelog visible to support when behaviour shifts.",
          ),
          s(" Undocumented prompt changes are silent product releases."),
        ],
      ],
      examples: [
        {
          title: "Few-shot traces — highest ROI prompt investment",
          body: "Adding 3 exemplar ReAct traces for edge cases lifted success 9pp overnight. PM worked with support to harvest real successful traces (redacted).",
        },
        {
          title: "Conflicting prompt layers — regression",
          body: "Marketing added 'be creative' while compliance added 'stick to script.' Agent quality collapsed. PM instituted single prompt owner and layer review.",
        },
        {
          title: "Prompt version in admin console",
          body: "Enterprise customers saw prompt_version in audit log. Debugging 'it changed Tuesday' took minutes. PM feature for transparency.",
        },
      ],
    }),
    buildSection({
      number: "3.10",
      title: "PM decision lens: planning depth as a product tradeoff",
      subtitle: "More deliberation means more latency and cost — choosing the right reasoning depth for your task complexity",
      take: "Planning depth — ReAct only, CoT, reflection, plan-and-execute, ToT — is a dial on quality, latency, and COGS. PMs map task tiers to depth: routine lookups minimal, financial writes full CoT + reflection, research tasks plan-and-execute with replan.",
      why: "Teams max planning depth everywhere and wonder why unit economics fail and users churn on slow UX. Right-sizing depth is portfolio management.",
      paragraphs: [
        [
          s("Build a planning depth matrix. "),
          x(
            "Axes: task risk, ambiguity, step count. Cell: allowed patterns and token budget. Example: low risk + low ambiguity = ReAct, no reflection.",
            "Matrix becomes eng implementation config and sales honesty tool.",
          ),
          s(" One depth does not fit all features in one product."),
        ],
        [
          s("Measure marginal value of each deliberation layer. "),
          x(
            "Ablation: baseline ReAct, +CoT, +reflection, +planner. Plot success vs cost curve; knee of curve is optimal depth.",
            "PM presents curve to leadership — data beats intuition.",
          ),
          s(" Stop adding deliberation when marginal gain < marginal cost."),
        ],
        [
          s("Expose depth as product policy, not hidden implementation. "),
          x(
            "Pro tier: 'thorough mode' enables reflection and planning — slower, more accurate. Standard: fast ReAct.",
            "Users self-select; margin improves on premium depth.",
          ),
          s(" Planning depth is monetisable when tied to measurable outcomes."),
        ],
      ],
      examples: [
        {
          title: "Planning depth matrix — shipped in PRD",
          body: "PM matrix: 4 task classes × 3 depth levels. Eng implemented router; COGS -25% with -1pp success on low-stakes only. Executive deck showed pareto frontier.",
        },
        {
          title: "Thorough mode upsell",
          body: "'Deep research' enabled plan-and-execute + reflection; 2× cost, 1.4× success on complex reports. 12% of users opted in; ARPU +8%.",
        },
        {
          title: "Over-planning post-mortem",
          body: "All agent calls used planner + ToT + reflection. p95 52s, COGS 4× budget. PM reset defaults to ReAct; kept deep stack for flagged workflows only. NPS recovered.",
        },
      ],
    }),
  ],
  quiz: [
    {
      q: "What does ReAct interleave?",
      options: [
        "Retrieval and generation only.",
        "Reasoning traces and tool actions conditioned on observations.",
        "Multiple LLM models in parallel.",
        "User messages and system prompts.",
      ],
      correct: 1,
      correctFeedback:
        "Right. ReAct alternates reasoning with actions, grounding each step in the latest observation.",
      wrongFeedback:
        "ReAct = Reason + Act interleaved. Re-read sections 3.1 and 3.2.",
    },
    {
      q: "Main risk of plan-and-execute without replanning?",
      options: [
        "Plans consume too few tokens.",
        "Plans go stale when mid-task reality diverges from assumptions.",
        "Executors are always more expensive than planners.",
        "It cannot use tools.",
      ],
      correct: 1,
      correctFeedback:
        "Exactly. Stale plans fail silently — replan triggers on errors, empty results, or assumption violations are required.",
      wrongFeedback:
        "Plan-and-execute needs replanning when reality surprises the planner. Re-read section 3.3.",
    },
    {
      q: "When is tree-of-thought most justified?",
      options: [
        "Every agent turn for maximum quality.",
        "Small action spaces with clear scoring rubrics and tolerable latency.",
        "Only for models below 7B parameters.",
        "Never — ToT is research-only.",
      ],
      correct: 1,
      correctFeedback:
        "Right. ToT pays off when branching + scoring beats linear ReAct and users accept the latency cost.",
      wrongFeedback:
        "ToT is selective — small branching factor, clear criteria, worth the compute. Re-read section 3.8.",
    },
    {
      kind: "categorize",
      q: "Match each pattern to its best primary use case.",
      categories: ["ReAct", "Plan-and-execute", "Self-reflection", "Tree-of-thought"],
      items: [
        { text: "Variable-step lookup with unknown depth.", category: 0 },
        { text: "8-section research report with clear outline.", category: 1 },
        { text: "Draft customer email needing tone/policy check.", category: 2 },
        { text: "Choose among 3 SQL queries with measurable cost.", category: 3 },
        { text: "Routine order status fetch.", category: 0 },
        { text: "Mid-task API failure requires new approach.", category: 1 },
      ],
      correctFeedback:
        "Right. Match planning pattern to task structure — don't use heavy deliberation on simple paths.",
      wrongFeedback:
        "ReAct for flexible short paths; planning for long structured tasks; reflection for QA gates; ToT for scored branching. Re-read sections 3.1–3.8.",
    },
    {
      kind: "order",
      q: "Order the recommended approach to choosing planning depth.",
      prompt: "Drag from first step (top) to last (bottom).",
      items: [
        "Classify tasks by risk, ambiguity, and step count.",
        "Baseline ReAct and measure success + cost on golden set.",
        "Ablate adding CoT, reflection, planner, ToT — plot marginal gains.",
        "Publish planning depth matrix and defaults per task class.",
        "Offer premium 'thorough' tier where deeper planning has ROI.",
      ],
      correctFeedback:
        "Exactly. Classify, baseline, ablate, document matrix, monetise where depth pays.",
      wrongFeedback:
        "Right-size planning depth with measurement, not maximum deliberation everywhere. Re-read section 3.10.",
    },
    {
      q: "Agent retries the same failing tool call 10 times. Best fix?",
      options: [
        "Add more CoT examples.",
        "Switch to tree-of-thought.",
        "Cap retries, classify errors, replan or escalate on permanent failure.",
        "Increase max_steps to 50.",
      ],
      correct: 2,
      correctFeedback:
        "Right. Replanning and escalation with retry caps prevent spirals — not more steps or more branching.",
      wrongFeedback:
        "Recovery requires failure classification, retry limits, and replan/escalate paths. Re-read section 3.7.",
    },
  ],
});
