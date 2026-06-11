import { buildChapter, buildSection, s, x, sectionWithDiagram } from "../concepts-pb4-helpers";

export const chapter04FounderFinetuningRagPrompting = buildChapter({
  slug: "founder-finetuning-rag-prompting",
  number: 4,
  shortTitle: "Fine-tune vs RAG vs Prompts",
  title: "Fine-tuning vs RAG vs Prompt Engineering — The Capital Decision",
  readingMinutes: 26,
  summary:
    "Three paths to customising AI behaviour — prompts, RAG, and fine-tuning — with completely different cost structures. Honest cost comparison, decision tree, hybrid architectures, and how to lead the engineering conversation without faking technical depth.",
  keyTakeaway:
    "Start with prompts, escalate to RAG when knowledge is the gap, escalate to fine-tune when behaviour is the gap — and only combine when measured evals prove each layer earns its cost. Capital follows the failure mode, not the demo frustration.",
  pmCallout:
    "As a founder: if your team says 'we need to fine-tune' before they have exhausted prompts and RAG on a golden eval set, you are funding engineering preference, not product evidence. Ask for the eval numbers, not the architecture diagram.",
  sections: [
    sectionWithDiagram({
      number: "4.1",
      title: "The three customisation options — a plain language overview",
      subtitle: "What each one does, what it costs, and what it produces",
      take: "Prompt engineering changes instructions to the model — zero training cost, fastest iteration. RAG retrieves your documents at inference time — knowledge gap solution. Fine-tuning changes model weights — behaviour and style gap solution. Three different failure modes, three different price tags.",
      why: "Founders and engineers use 'customise the AI' as one bucket. Capital misallocation follows — fine-tuning for knowledge problems, RAG for behaviour problems, prompts abandoned too early.",
      paragraphs: [
        [
          s("Prompt engineering is the instruction layer. "),
          x(
            "System prompts, few-shot examples, chain-of-thought, structured output modes — all change behaviour without changing weights.",
            "Cost: engineering time only. Limit: inconsistency across edge cases and token cost of long prompts.",
          ),
          s(" Default starting point for every new AI feature."),
        ],
        [
          s("RAG is the knowledge layer. "),
          x(
            "Retrieve relevant chunks from your corpus, inject into context — model 'knows' your content without training.",
            "Cost: embedding, vector DB, chunking pipeline, retrieval tuning. Limit: does not fix wrong tone or format behaviour.",
          ),
          s(" RAG when the model lacks facts, not when it lacks discipline."),
        ],
        [
          s("Fine-tuning is the behaviour layer. "),
          x(
            "Supervised fine-tuning, LoRA adapters, DPO for preferences — encodes patterns in weights.",
            "Cost: labelled data, GPU runs, eval infrastructure, versioning. Limit: does not add facts absent from training data.",
          ),
          s(" Fine-tune when prompts fight the base model consistently."),
        ],
      ],
      examples: [
        {
          title: "Knowledge vs behaviour confusion",
          body: "Support bot gave wrong refund policy — model lacked latest docs. Team proposed fine-tune; founder asked failure mode question. RAG over policy PDFs fixed 89% of errors in two weeks. Fine-tune would not inject facts model never saw.",
        },
        {
          title: "Behaviour problem misdiagnosed",
          body: "Legal assistant output wrong citation format despite glossary prompt. RAG did not help — knowledge was fine, format was not. SFT on 2K labelled examples raised format compliance from 71% to 96%. Right escalation path.",
        },
        {
          title: "Prompt abandoned too early",
          body: "Team requested $60K fine-tune budget. Founder required 200-case prompt eval first — hit 83% with structured output mode. Shipped without fine-tune; saved budget for RAG infrastructure. Escalation ladder worked.",
        },
      ],
    }, {
      kind: "diagram",
      id: "prompting-vs-finetuning-ladder",
      type: "flow",
      title: "Prompt Before Fine-Tune Ladder",
      caption:
        "Climb the ladder only when eval proves the rung beneath has hit its ceiling — better prompts and RAG before expensive fine-tunes.",
    }),
    buildSection({
      number: "4.2",
      title: "Prompt engineering — the zero-capital option",
      subtitle: "What you can achieve before spending a dollar on training or infrastructure",
      take: "Before RAG or fine-tune, exhaust prompt engineering: system instructions, few-shot examples from real failures, chain-of-thought for reasoning tasks, JSON schema mode for structure, prompt versioning and A/B testing. Many founders leave 30–40 points of quality on the table here.",
      why: "Prompt engineering is free capital allocation — engineering hours only. Skipping it burns fine-tune budget on problems instructions could solve.",
      paragraphs: [
        [
          s("Structured prompts beat heroic single paragraphs. "),
          x(
            "Decompose: role, constraints, output format, examples, refusal rules. Test variations on golden set — not vibes.",
            "Version prompts in git; treat prompt change like code deploy with eval gate.",
          ),
          s(" Prompt discipline is MLOps for companies without ML."),
        ],
        [
          s("Few-shot from real failures is highest ROI. "),
          x(
            "Collect 20–50 examples where current prompt fails. Add as few-shot in prompt or dynamic example selector.",
            "Cheaper than fine-tune and faster than RAG pipeline for behaviour patterns.",
          ),
          s(" Your support tickets are prompt training data."),
        ],
        [
          s("Know the prompt ceiling before escalating. "),
          x(
            "Run 200+ case eval. If prompt plateaus below target and errors are inconsistent tone/format → consider fine-tune. If errors are missing facts → RAG.",
            "Document ceiling number — 'prompt achieves 84%, target 92%' — for board and budget requests.",
          ),
          s(" Escalation without ceiling measurement is guessing."),
        ],
      ],
      examples: [
        {
          title: "JSON schema mode — 82% to 94%",
          body: "Invoice extraction stuck at 82% valid JSON with prose instructions. Structured output mode hit 94% — zero training cost. Founder rule: try schema mode before any fine-tune conversation.",
        },
        {
          title: "Few-shot from tickets",
          body: "Support tone inconsistent. Team added 30 real ticket examples to dynamic few-shot selector. Style compliance 68% → 85%. Deferred $40K fine-tune until plateau proven.",
        },
        {
          title: "Prompt versioning prevented regression",
          body: "Marketing edited system prompt in production without version control — quality dropped 15%. Git-versioned prompts + eval gate before deploy became company policy. Zero-capital discipline reduced incidents.",
        },
      ],
    }),
    sectionWithDiagram({
      number: "4.3",
      title: "RAG — the knowledge option",
      subtitle: "When your problem is that the model doesn't know your content, not that it behaves wrong",
      take: "RAG solves knowledge gaps: policies, product docs, proprietary research, customer-specific data. Pipeline: chunk, embed, retrieve, rerank, inject. Cost is infrastructure and maintenance — not GPU training. Wrong tool when behaviour or style is the failure mode.",
      why: "RAG is the most common correct escalation from prompts for B2B AI. Founders who skip RAG jump to fine-tune and spend capital teaching weights facts that belong in a retrieval index.",
      paragraphs: [
        [
          s("RAG architecture decisions affect quality more than model choice. "),
          x(
            "Chunk size, overlap, metadata filters, hybrid search, rerankers — each moves task completion 5–15 points.",
            "Start simple: good chunks + embeddings + top-k retrieval. Add reranker when evals plateau.",
          ),
          s(" RAG quality is systems engineering, not model shopping."),
        ],
        [
          s("Operational cost is ongoing — not one-time. "),
          x(
            "Index updates when docs change, embedding re-runs, retrieval latency monitoring, permission-aware filters for multi-tenant.",
            "Budget 0.2–0.5 FTE maintenance for production RAG — not 'ship and forget.'",
          ),
          s(" Stale index is silent product degradation."),
        ],
        [
          s("RAG plus prompts solves most B2B knowledge products. "),
          x(
            "Strong system prompt for behaviour + RAG for facts covers support, sales enablement, internal search, compliance Q&A.",
            "Fine-tune only when RAG+prompt still misses format or tone on diverse inputs.",
          ),
          s(" Default B2B stack: prompt + RAG before fine-tune."),
        ],
      ],
      examples: [
        {
          title: "Policy bot — RAG fixed knowledge gap",
          body: "HR policy bot hallucinated leave rules. RAG over Confluence policies with metadata filters by country. Accuracy 61% → 91%. Fine-tune was wrong tool — model knew how to answer, not what policy said.",
        },
        {
          title: "Chunk size regression",
          body: "Engineering doubled chunk size for speed — retrieval precision dropped 18%. Eval harness caught regression before deploy. RAG maintenance is tuning, not setup.",
        },
        {
          title: "Permission-aware RAG",
          body: "Enterprise SaaS needed document retrieval respecting per-customer ACLs. Metadata filters in vector query — without them, RAG leaked cross-tenant snippets. Architecture requirement, not optional.",
        },
      ],
    }, {
      kind: "diagram",
      id: "pb4-rag-pipeline",
      type: "flow",
      title: "The RAG Pipeline",
      caption:
        "Ingest → chunk → embed → index → retrieve → generate. RAG is the default architecture for knowledge-grounded AI products.",
    }),
    buildSection({
      number: "4.4",
      title: "Fine-tuning — the behaviour option",
      subtitle: "When your problem is how the model responds, not what it knows",
      take: "Fine-tune when prompts and RAG are insufficient for consistent behaviour: brand voice, domain terminology, output format, safety refusals, preference alignment. Requires labelled examples, eval gates, and version pinning. Does not replace RAG for changing knowledge.",
      why: "Fine-tune is the most expensive escalation. Founders who approve it without measured prompt/RAG ceiling fund GPU experiments instead of product outcomes.",
      paragraphs: [
        [
          s("Fine-tune triggers are measurable, not emotional. "),
          x(
            "Trigger 1: prompt+RAG plateau ≥5 points below target on 200+ eval. Trigger 2: errors are stylistic/format, not factual. Trigger 3: token cost of long prompts exceeds fine-tune amortisation.",
            "Without triggers, fine-tune is engineer boredom tax.",
          ),
          s(" Document triggers in build/buy decision doc."),
        ],
        [
          s("Data quality gates fine-tune success. "),
          x(
            "Hundreds to thousands of curated examples for SFT. Bad labels teach bad habits faster than prompts fail.",
            "Budget labelling: $30K–$150K for serious domain fine-tune — often exceeds first GPU bill.",
          ),
          s(" 'We have chat logs' is not a dataset until labelled and reviewed."),
        ],
        [
          s("Versioning and vendor coupling are ongoing costs. "),
          x(
            "Every weight change needs eval, canary, rollback. Base model deprecation orphans adapters.",
            "Fine-tune couples you to vendor model lifecycle — reversibility score drops.",
          ),
          s(" Fine-tune is a commitment, not a weekend experiment."),
        ],
      ],
      examples: [
        {
          title: "Insurance tone SFT",
          body: "Claims assistant needed consistent empathetic brevity. Prompts: 71% style compliance. 800 curator-reviewed examples + LoRA: 89%. $45K labelling + $8K compute — justified vs brand risk at scale.",
        },
        {
          title: "Fine-tune on wrong problem",
          body: "Team fine-tuned on product FAQs while errors were stale documentation. Quality improved 3 points — RAG later added 22. Fine-tune before failure mode diagnosis wasted one quarter.",
        },
        {
          title: "Adapter orphan on deprecation",
          body: "Four production adapters pinned to deprecated base model — 11-week retrain. Fine-tune TCO now includes vendor lifecycle monitoring.",
        },
      ],
    }),
    buildSection({
      number: "4.5",
      title: "Cost comparison — the honest numbers",
      subtitle: "What each approach costs to implement, maintain, and scale",
      take: "Rough seed-to-Series-A ranges: prompt engineering $0–$30K (engineering time). RAG $20K–$120K setup + $3K–$15K/month ops. Fine-tune $50K–$250K first version + ongoing retrain. Scale costs: prompts grow token bills; RAG grows index and retrieval; fine-tune grows labelling and GPU.",
      why: "Founders approve fine-tune hearing GPU cost alone — miss labelling, eval, and maintenance. Honest comparison prevents order-of-magnitude budget errors.",
      paragraphs: [
        [
          s("Implementation cost comparison. "),
          x(
            "Prompts: 1–4 engineering weeks. RAG: 4–12 weeks for production pipeline. Fine-tune: 8–20 weeks including labelling and eval iteration.",
            "Fine-tune rarely ships faster than RAG — data preparation is the bottleneck.",
          ),
          s(" Timeline is capital — model implementation in runway weeks."),
        ],
        [
          s("Ongoing maintenance comparison. "),
          x(
            "Prompts: version control and eval on each model provider update. RAG: index freshness, embedding costs, retrieval tuning. Fine-tune: retrain on drift, adapter management, base model migrations.",
            "Rule of thumb: fine-tune maintenance ≈ 0.3–0.5 FTE; RAG ≈ 0.2–0.4 FTE; prompts ≈ 0.1 FTE if disciplined.",
          ),
          s(" OpEx matters more than CapEx for AI features."),
        ],
        [
          s("Scale cost comparison at 10× volume. "),
          x(
            "Prompts: token cost may dominate — prompt compression and routing become critical. RAG: embedding and retrieval compute grow linearly. Fine-tune: inference on owned weights may beat API if quality holds.",
            "Build scale spreadsheet for all three paths before choosing.",
          ),
          s(" Cheapest at pilot volume is often expensive at scale."),
        ],
      ],
      examples: [
        {
          title: "Three-path spreadsheet",
          body: "Founder required finance model for prompts vs RAG vs fine-tune at 1× and 10× volume. Prompts cheapest year one; RAG won at scale for knowledge product; fine-tune only justified for tone layer at Series B. Spreadsheet settled executive debate.",
        },
        {
          title: "Hidden labelling cost",
          body: "Fine-tune budget approved at $25K GPU. Actual cost: $110K with labelling and reviewer time. Honest cost comparison now includes labelling line item mandatory.",
        },
        {
          title: "Token cost crossover",
          body: "Long system prompt + few-shot consumed 8K tokens/request. At 2M requests/month, token cost exceeded amortised fine-tune inference. Scale analysis triggered fine-tune — rare valid economic trigger.",
        },
      ],
    }),
    buildSection({
      number: "4.6",
      title: "The decision tree",
      subtitle: "The sequence of questions that leads to the right choice for your specific use case",
      take: "Decision tree: (1) Is missing knowledge the failure mode? → RAG. (2) Else, did prompts hit measured ceiling below target? → No: improve prompts. (3) Yes, are errors behavioural/format? → Fine-tune. (4) Else, hybrid or new model. (5) At each node, run 200+ case eval before proceeding.",
      why: "A decision tree prevents architecture debates driven by engineer preference or vendor marketing. Founders enforce the tree with eval evidence requirements.",
      paragraphs: [
        [
          s("Question one: knowledge or behaviour? "),
          x(
            "Wrong fact, outdated policy, missing doc content → knowledge → RAG (or update index).",
            "Right fact, wrong tone, wrong format, inconsistent structure → behaviour → prompts then maybe fine-tune.",
          ),
          s(" Misdiagnosis here wastes the entire budget."),
        ],
        [
          s("Question two: prompt ceiling with evidence. "),
          x(
            "Run eval. If below target and improving prompts still moves metrics → continue prompts.",
            "If plateau for two sprint cycles with documented effort → escalate.",
          ),
          s(" 'We tried prompts' without eval numbers does not pass."),
        ],
        [
          s("Question three: economic trigger for fine-tune. "),
          x(
            "Even with behaviour gap, check token economics and reversibility before fine-tune.",
            "If long prompts cost more than fine-tune inference at volume — economic fine-tune. If not — behavioural fine-tune only with label budget approved.",
          ),
          s(" Tree ends in hybrid architectures for most mature products."),
        ],
      ],
      examples: [
        {
          title: "Tree applied — legal citations",
          body: "Failure: wrong citation format. Knowledge? No — statutes retrieved correctly. Prompt ceiling? Yes — 74% after three iterations. Behaviour? Yes → fine-tune approved. Tree prevented RAG spend.",
        },
        {
          title: "Tree blocked premature fine-tune",
          body: "Engineers requested fine-tune. Failure: wrong product specs. Knowledge? Yes → RAG. Post-RAG 88%, target 90% → prompts improved to 91%. Fine-tune deferred. Tree saved $80K.",
        },
        {
          title: "Hybrid outcome",
          body: "Mature support product: RAG for policies, prompts for workflow, light fine-tune for tone. Each layer approved by separate eval gate. Tree executed sequentially, not all-at-once.",
        },
      ],
    }),
    buildSection({
      number: "4.7",
      title: "Combining approaches — when more is actually more",
      subtitle: "The architectures that combine all three and when the complexity is justified",
      take: "Production systems often combine: fine-tuned model for tone/format, RAG for knowledge, prompts for session-specific instructions. Complexity is justified when each layer passes independent eval gate and maintenance FTE is budgeted. Otherwise, complexity is failure mode hiding.",
      why: "Founders hear 'sophisticated architecture' and approve stacks nobody can operate. Hybrid is correct at scale — premature hybrid is a seed-stage trap.",
      paragraphs: [
        [
          s("Layer independence is the design rule. "),
          x(
            "Each layer must be testable in isolation: RAG off, fine-tune off, prompt only — evals still run.",
            "Coupled stacks cannot debug — regressions become mysteries.",
          ),
          s(" Independent eval per layer before combination."),
        ],
        [
          s("Justify each layer with marginal eval gain. "),
          x(
            "RAG adds +18 points. Prompt adds +6. Fine-tune adds +4. Keep all only if +4 worth maintenance — else stop at prompt+RAG.",
            "Marginal gain threshold should be set upfront — e.g. minimum +3 points for new layer.",
          ),
          s(" Complexity tax must earn its points."),
        ],
        [
          s("Stage-appropriate hybrid. "),
          x(
            "Seed: prompt + RAG maximum. Series A: add fine-tune for one high-value behaviour. Series B: multi-model routing + hybrid.",
            "Hybrid before PMF is over-engineering with investor money.",
          ),
          s(" Sequence layers with stage, not with envy."),
        ],
      ],
      examples: [
        {
          title: "Support stack at Series B",
          body: "RAG over 50K articles, fine-tuned tone adapter, dynamic prompts per customer tier. Each layer +eval documented. 0.6 FTE maintenance budgeted. Hybrid justified by enterprise SLAs.",
        },
        {
          title: "Premature hybrid — seed trap",
          body: "Seed startup built fine-tune + RAG + agent before 100 paying customers. Six months infrastructure, no PMF signal. Stripped to prompt + RAG — shipped features in 5 weeks.",
        },
        {
          title: "Marginal gain rejection",
          body: "Fine-tune added +2 points on top of RAG+prompt — below +3 threshold. Founder killed fine-tune layer, invested in reranker instead (+9 points). Marginal analysis redirected capital.",
        },
      ],
    }),
    buildSection({
      number: "4.8",
      title: "Founder decision lens: making this decision with your engineering team",
      subtitle: "How to lead this conversation without pretending to have technical depth you don't have",
      take: "Lead with questions, not architecture mandates: What is the failure mode? What did eval show for prompts? What is the ceiling number? What is cost at 10×? What is reversibility? You do not need to understand LoRA — you need to enforce evidence gates before capital release.",
      why: "Founders either defer entirely to engineering or dictate solutions without context. The correct role is decision quality enforcement — failure mode, eval evidence, cost, reversibility.",
      paragraphs: [
        [
          s("The four questions every escalation request must answer. "),
          x(
            "1) Failure mode: knowledge or behaviour? 2) Eval: current score, target, sample size. 3) Cost: setup + 12-month ops + 10× scale. 4) Reversibility: undo weeks and dollars.",
            "No answer → no budget. Not hostile — disciplined.",
          ),
          s(" Questions replace need for founder to design architecture."),
        ],
        [
          s("Translate engineering jargon into capital decisions. "),
          x(
            "'LoRA fine-tune' = $50K–$150K behaviour bet coupled to vendor base model.",
            "'Hybrid RAG' = ongoing index maintenance FTE + embedding COGS.",
          ),
          s(" Translation builds shared language with CTO without fake expertise."),
        ],
        [
          s("Document decisions for board and diligence. "),
          x(
            "One-page escalation memo: failure mode, eval chart, path chosen, layers deferred, review date.",
            "Pattern of evidence-based decisions signals founder maturity in AI diligence.",
          ),
          s(" Memos beat meeting memory when investors ask 'why fine-tune?'"),
        ],
      ],
      examples: [
        {
          title: "Four-question gate",
          body: "CTO requested $90K fine-tune. Founder asked four questions. Failure mode: behaviour. Prompt ceiling: 79% documented. Cost sheet provided. Reversibility: medium. Approved with quarterly re-eval — conversation took 45 minutes, no PhD required.",
        },
        {
          title: "Jargon translation",
          body: "Engineer said 'we need QLoRA on 70B.' Founder translated: '$120K behaviour bet, 14-week timeline, vendor-coupled.' Board understood tradeoff. Approved alternative: prompt+RAG first, fine-tune trigger at Series A.",
        },
        {
          title: "Diligence memo",
          body: "Investor asked why not fine-tune. Founder produced escalation memo from month 6 showing RAG solved knowledge gap, prompts hit 86%, fine-tune deferred with trigger. Evidence-based narrative closed diligence in days.",
        },
      ],
    }),
  ],
  quiz: [
    {
      q: "Support bot gives wrong refund policy because model lacks latest policy PDFs. Correct first escalation?",
      options: ["Fine-tune on support transcripts", "RAG over policy documents", "Pretrain domain model", "Buy more GPUs"],
      correct: 1,
      correctFeedback:
        "Right. Missing facts = knowledge gap = RAG. Fine-tune does not inject facts the model never saw.",
      wrongFeedback:
        "Diagnose failure mode first. Wrong facts → RAG. Re-read sections 4.1 and 4.3.",
    },
    {
      q: "Prompt eval plateaus at 74% on citation format; facts are correct via RAG. Target is 92%. Next step?",
      options: ["More RAG chunks", "Fine-tune for behaviour/format", "Abandon AI", "Only change vendor logo"],
      correct: 1,
      correctFeedback:
        "Right. Knowledge solved by RAG; behaviour gap after prompt ceiling → fine-tune candidate.",
      wrongFeedback:
        "Format/tone after prompt ceiling = behaviour → fine-tune path. Re-read sections 4.4 and 4.6.",
    },
    {
      kind: "categorize",
      q: "Match each cost to the primary customisation path.",
      categories: ["Prompt engineering", "RAG", "Fine-tuning"],
      items: [
        { text: "$0–$30K engineering time; token cost at scale.", category: 0 },
        { text: "Vector index maintenance and embedding monthly bill.", category: 1 },
        { text: "$50K–$250K labelling plus GPU and adapter versioning.", category: 2 },
        { text: "Few-shot examples from support tickets in git.", category: 0 },
        { text: "Reranker tuning and chunk size optimisation.", category: 1 },
        { text: "Base model deprecation forcing adapter retrain.", category: 2 },
      ],
      correctFeedback:
        "Right. Prompts = time/tokens. RAG = index ops. Fine-tune = labels, GPU, coupling.",
      wrongFeedback:
        "Each path has distinct cost structure. Re-read section 4.5.",
    },
    {
      q: "Engineer requests fine-tune before 200-case prompt eval. Founder-correct response?",
      options: [
        "Approve immediately — engineer knows best",
        "Require eval evidence and documented prompt ceiling before budget",
        "Cancel AI feature",
        "Switch to pretraining",
      ],
      correct: 1,
      correctFeedback:
        "Right. Enforce escalation ladder with eval evidence — capital follows data, not preference.",
      wrongFeedback:
        "Fine-tune requires measured prompt ceiling. Re-read sections 4.2 and 4.8.",
    },
    {
      kind: "order",
      q: "Order the customisation escalation decision tree (first question at top).",
      prompt: "Drag to arrange the correct sequence.",
      items: [
        "Is failure mode missing knowledge vs behaviour?",
        "If knowledge → RAG; if behaviour → optimise prompts with eval.",
        "Did prompts hit measured ceiling below target?",
        "If behaviour gap remains → evaluate fine-tune economics and reversibility.",
      ],
      correctFeedback:
        "Right. Failure mode → prompts → ceiling → fine-tune. Sequence prevents misallocated capital.",
      wrongFeedback:
        "Start with failure mode diagnosis. Re-read section 4.6.",
    },
    {
      q: "Four questions a founder should ask before approving fine-tune budget?",
      options: [
        "Logo color, office location, team size, favourite model",
        "Failure mode, eval scores, cost at scale, reversibility",
        "Only vendor market cap",
        "Only engineer seniority",
      ],
      correct: 1,
      correctFeedback:
        "Right. Evidence gates: failure mode, eval, cost, reversibility — no PhD required.",
      wrongFeedback:
        "Founder enforces four evidence questions. Re-read section 4.8.",
    },
  ],
});
