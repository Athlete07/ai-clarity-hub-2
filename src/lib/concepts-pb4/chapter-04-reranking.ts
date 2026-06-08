import { buildChapter, buildSection, s, x } from "../concepts-pb4-helpers";

export const chapter04Reranking = buildChapter({
  slug: "pb4-reranking",
  number: 4,
  shortTitle: "Reranking",
  title: "Reranking",
  readingMinutes: 26,
  summary:
    "First-pass retrieval gets you in the ballpark; reranking decides what actually reaches the model. Cross-encoders, fusion strategies, and cost tradeoffs — the second stage every serious RAG pipeline eventually adds.",
  keyTakeaway:
    "Reranking is a second-pass scoring step that re-orders retrieval candidates using a more accurate (and more expensive) model. It trades latency and compute for precision at the top of the context window — where it matters most.",
  pmCallout:
    "As a PM: if your RAG answers cite the wrong document 30% of the time, the fix is rarely 'bigger embeddings.' It's usually 'rerank the top 20 before you stuff them into the prompt.' Know when that tradeoff pays for itself.",
  sections: [
    buildSection({
      number: "4.1",
      title: "What is reranking",
      subtitle: "The second pass that turns 'close enough' retrieval into 'actually relevant'",
      take: "Reranking takes a shortlist of documents your retriever already found and re-scores each query–document pair with a more precise model, then re-orders the list so the best matches rise to the top before anything hits the LLM context window.",
      why: "Users don't experience 'recall at 50.' They experience the one chunk that landed in position 7 and poisoned the answer. Reranking is how you convert broad retrieval into the three paragraphs that actually matter.",
      paragraphs: [
        [
          s("In a typical RAG pipeline, retrieval is deliberately fast and approximate. "),
          x(
            "A bi-encoder embeds the query and every document independently, then cosine similarity ranks the corpus in milliseconds — but independent encoding means the model never sees query and document together at scoring time.",
            "Bi-encoders compress each text into a fixed vector offline. At query time you only compare vectors. That's fast enough for millions of chunks, but the score is a rough semantic guess, not a careful read of whether this paragraph answers this question.",
          ),
          s(" Reranking inserts a slower, sharper step after that: take the top 20–100 candidates, score each pair jointly, and promote the winners."),
        ],
        [
          s("Think of retrieval as a wide net and reranking as a sorting table. "),
          x(
            "Retrieval optimises for recall — don't miss the right document somewhere in the top 50. Reranking optimises for precision at the top — make sure positions 1–5 are actually the ones the LLM should read.",
            "The LLM only sees k chunks (often 3–8). If the true answer sits at rank 14, it might as well not exist. Reranking's entire job is to move rank-14 material into rank 2 before the prompt is assembled.",
          ),
          s(" PMs who skip this step often blame the generator when the retriever never put the right evidence in front of it."),
        ],
        [
          s("Reranking is not a replacement for retrieval — it's a refinement layer. "),
          x(
            "You still need a vector index (or BM25, or hybrid search) to narrow millions of chunks down to a manageable shortlist. Running a cross-encoder over your entire corpus at query time is economically impossible at product scale.",
            "Rule of thumb: retrieve 50–200, rerank down to 5–10, send 3–5 to the LLM. Each stage has a different cost profile and a different error mode.",
          ),
          s(" The product decision is where to draw those cutoffs and whether the quality lift justifies the added latency."),
        ],
      ],
      examples: [
        {
          title: "Notion AI's internal retrieval stack — rerank before you generate",
          body: "Teams building enterprise search over messy wikis consistently report the same pattern: vector search alone returns plausible-but-wrong pages (meeting notes that mention a keyword vs the policy doc that defines it). Adding a reranker on the top 50 candidates is often the single highest-leverage quality fix before touching the LLM prompt. The latency cost is tens of milliseconds; the alternative is users re-asking the same question three times.",
        },
        {
          title: "Cohere Rerank API — reranking as a productised primitive",
          body: "Cohere ships reranking as a standalone API: send a query plus an array of document strings, get back relevance scores and a re-ordered list. PMs can A/B test 'retrieve-only' vs 'retrieve + rerank' without training a custom model. Several B2B copilots adopted rerank in week two of pilot — not because retrieval was broken, but because pilot users only read the first cited source and judged the whole product on it.",
        },
        {
          title: "Legal-tech RAG — when the right paragraph is buried on page 47",
          body: "A contract-review startup found that embedding search surfaced the correct clause in the top 30 results 78% of the time — but only in the top 5 after reranking 62% of the time. Attorneys don't scroll through six citations; they trust the first one or declare the tool useless. Reranking moved their task-completion rate more than switching from GPT-4 to GPT-4 Turbo.",
        },
      ],
    }),
    buildSection({
      number: "4.2",
      title: "Why first-pass retrieval isn't enough",
      subtitle: "Recall and precision fail in different places — and users only feel precision",
      take: "First-pass retrievers are built for speed and scale, which means they sacrifice the fine-grained judgement of whether this exact paragraph answers this exact question — and that gap shows up as confident wrong answers, not as 'search returned nothing.'",
      why: "When stakeholders say 'the AI hallucinated,' half the time the model faithfully summarised the wrong chunk that retrieval ranked too high. Diagnosing retrieval vs generation saves quarters of misdirected prompt engineering.",
      paragraphs: [
        [
          s("Embedding search fails in predictable ways. "),
          x(
            "Semantic similarity is not relevance: two documents can embed close together because they share vocabulary, domain, or structure while answering completely different questions.",
            "A query about 'refund policy for annual plans' might rank a marketing page about 'annual plan benefits' above the actual policy PDF because both discuss annual plans in similar language.",
          ),
          s(" Chunking makes this worse — the right answer might be a 200-token paragraph inside a 1,500-token chunk whose average embedding dilutes the signal."),
        ],
        [
          s("BM25 and hybrid search have the opposite failure mode but the same user symptom. "),
          x(
            "Keyword search nails exact token matches but misses paraphrases; hybrid fusion helps but still produces a ranked list optimised by cheap heuristics, not by 'would a human pick this source to answer this question?'",
            "Common hybrid pattern: combine BM25 + dense vectors with reciprocal rank fusion (RRF). Better recall, still no guarantee the #1 slot is the right evidence for the LLM.",
          ),
          s(" Users experience all of these as the same bug: 'it cited something that doesn't answer my question.'"),
        ],
        [
          s("The business impact is subtle because retrieval metrics lie. "),
          x(
            "Engineering might report 'Recall@50 = 0.92' while product sees 40% thumbs-down — because Recall@50 only asks whether the right doc appears anywhere in 50, not whether it reaches the prompt.",
            "The metrics that correlate with user satisfaction are Precision@k for small k (3, 5) and nDCG@k — exactly what reranking improves. PMs should insist on reporting top-k precision, not just recall at large k.",
          ),
          s(" If your eval dashboard doesn't distinguish 'found eventually' from 'found in time for the LLM to use,' you're optimising the wrong number."),
        ],
      ],
      examples: [
        {
          title: "Support-bot regression — same embedding model, worse answers",
          body: "A SaaS company expanded its help centre 3× without re-chunking. Recall@100 stayed flat, but Precision@3 dropped because new pages crowded out old canonical articles in embedding space. The LLM didn't get dumber — retrieval got noisier at the top. Reranking on the shortlist recovered Precision@3 without re-embedding the corpus.",
        },
        {
          title: "Slack AI search pilots — 'related' vs 'answers'",
          body: "Enterprise search pilots consistently surface the tension: users want answers, retrieval returns related conversations. A thread that discusses a bug is semantically close to a thread that contains the fix. First-pass retrieval conflates the two; reranking trained on click-through or human labels learns to prefer the fix.",
        },
        {
          title: "The 'empty retrieval' red herring",
          body: "PMs often celebrate when retrieval returns results 99% of the time. But in one fintech copilot audit, 34% of returned chunks were topically related and factually useless for the question — refunds vs chargebacks, compliance vs marketing. Empty results would have triggered a honest 'I don't know'; wrong results produced confident misinformation. Reranking is partly a safety layer.",
        },
      ],
    }),
    buildSection({
      number: "4.3",
      title: "Cross-encoders vs bi-encoders",
      subtitle: "The fundamental speed-vs-accuracy tradeoff in retrieval architecture",
      take: "Bi-encoders embed query and document separately (fast, scalable, approximate). Cross-encoders feed query and document through the model together (slow, expensive, accurate). Reranking is where you deploy cross-encoders on a shortlist the bi-encoder already narrowed.",
      why: "Every architecture argument in your RAG standup boils down to this tradeoff. If you can't explain why you're not running a cross-encoder over the full corpus, you can't explain why reranking exists.",
      paragraphs: [
        [
          s("Bi-encoders are the workhorse of vector search. "),
          x(
            "Encode all documents once, store vectors in an index, encode the query at search time, compare with dot product — complexity scales with index size, not with comparing every pair through a transformer.",
            "Models like OpenAI text-embedding-3, Cohere embed, and BGE bi-encoder variants are tuned for this pattern. Latency is often 20–80ms for top-k over millions of vectors.",
          ),
          s(" The limitation is architectural: the model never attends across query and document tokens in a single forward pass when producing the score."),
        ],
        [
          s("Cross-encoders pay the compute cost upfront per pair. "),
          x(
            "A cross-encoder concatenates [query, document] (with a separator token) and runs full self-attention across both sequences, outputting a single relevance score — typically from a classification head on the [CLS] token.",
            "Each query–document pair is a separate forward pass. 50 candidates = 50 passes. That's why you rerank dozens, not millions. Latency might be 200ms–2s depending on model size, batching, and hardware.",
          ),
          s(" The accuracy gain comes from true interaction: the model can match entities, negation, temporal qualifiers, and fine distinctions that averaged embeddings smear together."),
        ],
        [
          s("The PM framing: bi-encoder for inventory, cross-encoder for checkout. "),
          x(
            "You wouldn't run a fraud model on every card swipe in the world — you run it on transactions that already passed cheaper filters. Same pattern: bi-encoder filters the warehouse; cross-encoder validates what goes in the cart.",
            "Some teams experiment with late interaction models (ColBERT) as a middle ground — more interaction than bi-encoders, more batchable than full cross-encoders. That's a cost/latency knob worth knowing exists.",
          ),
          s(" Your job is to set the shortlist size where marginal precision gains stop paying for marginal latency."),
        ],
      ],
      examples: [
        {
          title: "MS MARCO leaderboard lessons — cross-encoders dominate nDCG",
          body: "The MS MARCO passage ranking benchmark is the canonical proof point: cross-encoder models consistently beat bi-encoder-only pipelines on nDCG@10 by large margins. Production teams treat the leaderboard as directional, not gospel — but the gap explains why every serious search vendor ships a rerank stage. PMs can cite this when engineering proposes 'just tune the embedding model' for the third sprint in a row.",
        },
        {
          title: "BGE reranker — open-source cross-encoder you can benchmark in a day",
          body: "BAAI's BGE family ships both bi-encoder (BGE-M3) and cross-encoder reranker variants. A PM can run a offline eval: take 200 real user queries, compare top-5 precision with and without BGE-reranker on the top 50 bi-encoder hits. If precision jumps 15+ points, the business case for added latency writes itself.",
        },
        {
          title: "Batching cross-encoders — latency is not fixed",
          body: "Engineering will quote rerank latency as '500ms' based on naive sequential scoring. Batched GPU inference on 50 pairs often lands under 150ms. PMs should ask for batched benchmarks on production hardware before accepting 'too slow' as a veto — the number changes the product decision.",
        },
      ],
    }),
    buildSection({
      number: "4.4",
      title: "Major reranking models",
      subtitle: "Cohere Rerank, BGE, ColBERT — what to evaluate and when",
      take: "The reranking market splits into managed APIs (Cohere), open-source cross-encoders (BGE, ms-marco-MiniLM), and late-interaction models (ColBERT) — each with different latency, hosting, and licensing tradeoffs.",
      why: "Build-vs-buy for reranking is a one-week eval, not a quarter-long science project. Knowing the major options lets you write a PRD with concrete acceptance criteria instead of 'improve search quality.'",
      paragraphs: [
        [
          s("Cohere Rerank is the default managed choice for product teams without ML infra. "),
          x(
            "Send query + document list, receive scored ordering. Pricing is per search unit (query + documents evaluated), not per token — which makes cost modelling simpler than LLM calls.",
            "Rerank 3.x supports 100+ languages and multi-hop relevance signals. Latency is typically competitive with self-hosted MiniLM cross-encoders because Cohere batches at datacenter scale.",
          ),
          s(" Tradeoff: vendor lock-in, data leaves your VPC unless you negotiate enterprise terms, and you're dependent on their uptime SLA."),
        ],
        [
          s("BGE rerankers are the open-source workhorse. "),
          x(
            "BGE-reranker-v2-m3 and related models from BAAI score strongly on BEIR and MS MARCO, run on Hugging Face + ONNX, and cost only GPU/CPU time you already pay for.",
            "Self-hosting makes sense at high query volume (millions of reranks/month) or strict data residency. Ops burden: model serving, versioning, autoscaling — real MLOps, not a weekend deploy.",
          ),
          s(" PMs at Series B+ with compliance constraints often start on Cohere and migrate to BGE when rerank line items exceed low five figures annually."),
        ],
        [
          s("ColBERT occupies the middle ground — late interaction without full cross-attention on every pair. "),
          x(
            "ColBERT encodes query and document into token-level embeddings (not one vector per doc), then computes a cheap MaxSim interaction at query time — more expressive than bi-encoders, more scalable than cross-encoders for larger candidate sets.",
            "RAGatouille and similar libraries made ColBERT easier to adopt, but it's still more complex to operate than 'call rerank API.' Best when you need rerank-quality signals on 200–500 candidates, not just 50.",
          ),
          s(" For most PM-led RAG v1 launches: Cohere or BGE cross-encoder on top 50 is the 80/20. ColBERT is optimisation pass two."),
        ],
      ],
      examples: [
        {
          title: "Vercel AI SDK + Cohere Rerank — prototype in an afternoon",
          body: "Teams using the Vercel AI SDK pattern often wire: vector search → top 25 chunks → Cohere rerank → top 5 to LLM. The integration is ~30 lines. PMs can run a blind eval with internal users in a week: same UI, rerank flag on/off. Decision-grade data without a custom model team.",
        },
        {
          title: "Enterprise procurement — BGE on-prem wins the security review",
          body: "A healthcare analytics vendor failed procurement because Cohere rerank sent PHI to a third-party API. Re-architecting with self-hosted BGE-reranker on their existing GPU cluster cleared security in two sprints. The PM cost model: Cohere unit cost × volume vs one ML engineer quarter + GPU amortisation — break-even was ~8M reranks/month for them.",
        },
        {
          title: "ColBERT for e-commerce catalog search",
          body: "A marketplace with 12M SKUs found cross-encoders on 50 candidates missed nuance in attribute-heavy queries ('16GB RAM laptop under $800 refurbished'). ColBERT rerank over 200 candidates improved add-to-cart rate on search 6% — worth the extra 120ms for them. Niche use case, but illustrates when 'middle' architectures win.",
        },
      ],
    }),
    buildSection({
      number: "4.5",
      title: "Reranking in a RAG pipeline",
      subtitle: "Where the rerank step sits — and what breaks if you put it in the wrong place",
      take: "The canonical RAG stack is: chunk → embed → index → retrieve top-N → rerank to top-k → assemble prompt → generate. Reranking happens after candidate generation and before context assembly — never after the LLM, never instead of retrieval.",
      why: "Misplacing reranking (e.g., reranking generated summaries instead of source chunks, or reranking after the LLM already committed to a wrong path) is a common architecture mistake that PMs catch in design review if they know the sequence.",
      paragraphs: [
        [
          s("The happy-path pipeline has six measurable stages. "),
          x(
            "Query rewrite (optional) → retrieval (bi-encoder / hybrid, N=50–200) → rerank (cross-encoder, k=5–10) → context packing (fit chunks in token budget) → LLM generation → citation rendering.",
            "Each stage should log inputs, outputs, and latency separately. Without that, you can't tell whether bad answers come from retrieval noise, rerank failure, or generation drift.",
          ),
          s(" PMs should require trace IDs that follow a user query through all six stages — that's observability, not engineering luxury."),
        ],
        [
          s("Context packing after rerank is its own product decision. "),
          x(
            "Even after reranking, five chunks might exceed your token budget. Strategies: take top chunks until budget fills, summarise lower-ranked chunks, or dynamic k based on score gaps.",
            "A sharp score drop between rank 3 and rank 4 is a signal to send three chunks, not five. PMs can define UX rules: 'only show citations above confidence threshold X.'",
          ),
          s(" Shipping rerank without defining what happens at the token ceiling wastes the precision you just bought."),
        ],
        [
          s("Multi-query and HyDE patterns complicate the pipeline. "),
          x(
            "Some systems generate multiple search queries or hypothetical documents (HyDE), retrieve for each, merge lists, then rerank the union. Reranking becomes the deduplication and fusion layer.",
            "Without rerank, merged lists from 3 sub-queries might send 15 near-duplicate chunks. With rerank, you collapse to the 5 truly distinct best passages.",
          ),
          s(" If your roadmap includes 'agentic retrieval,' reranking is the guardrail that keeps expanded retrieval from bloating prompts."),
        ],
      ],
      examples: [
        {
          title: "LangChain / LlamaIndex rerank integrations — same slot in the stack",
          body: "Both LangChain's ContextualCompressionRetriever and LlamaIndex's postprocessors apply rerankers after retrieval and before the LLM. PMs evaluating frameworks should verify rerank is a first-class postprocessor, not a custom hack — it signals the framework authors understand production RAG shape.",
        },
        {
          title: "Score-threshold gating — when not to answer",
          body: "A compliance copilot reranks top 30, then checks whether the top score exceeds 0.7. Below threshold, the product returns 'I couldn't find authoritative guidance' instead of guessing. Reranking enabled a abstention feature that reduced escalations to legal by 22%. PM-defined threshold, engineering-implemented.",
        },
        {
          title: "Parent-child chunking + rerank",
          body: "Teams store small child chunks for retrieval but pass parent documents to the reranker for richer context. Pipeline: retrieve children → map to parents → dedupe → rerank parents → send winning parent text to LLM. PMs champion this when users complain answers lack surrounding context.",
        },
      ],
    }),
    buildSection({
      number: "4.6",
      title: "Reciprocal Rank Fusion (RRF)",
      subtitle: "Merging multiple ranked lists without training a fusion model",
      take: "RRF combines several retrieval rankings (e.g., BM25 + dense + metadata filter) into one list using a simple formula that rewards documents appearing high across multiple retrievers — no labelled data required.",
      why: "Hybrid search is table stakes; RRF is how you fuse hybrid results before reranking. PMs who understand RRF can reason about 'why did this doc win?' without reading fusion model code.",
      paragraphs: [
        [
          s("The RRF formula is intentionally simple. "),
          x(
            "For each document d, score = Σ 1 / (k + rank_i(d)) across all retrievers i, where k is a constant (often 60) and rank_i is the document's rank in list i (missing docs contribute 0).",
            "Documents that rank well in both BM25 and vector search rise to the top. Documents that only win in one retriever still get credit, but not as much as consistent winners.",
          ),
          s(" The k constant dampens dominance of rank-1 in any single list — tuning k is an offline eval exercise, not a user-facing setting."),
        ],
        [
          s("RRF is not reranking — it's pre-rerank fusion. "),
          x(
            "Typical stack: BM25 top 50 + vector top 50 → RRF merge to unified top 50 → cross-encoder rerank to top 5. RRF improves recall of the shortlist; rerank improves precision at the top.",
            "Some teams skip RRF and concatenate lists with deduplication — works, but overweight duplicates and single-retriever noise. RRF is the cleaner default in 2026 RAG templates.",
          ),
          s(" Confusing RRF with reranking leads to wrong evals: you measured fusion lift and called it rerank lift."),
        ],
        [
          s("RRF helps PMs ship hybrid search without a data science sprint. "),
          x(
            "No training labels needed — unlike learned-to-rank models that need click logs or human judgements. You can add a third retriever (e.g., title keyword match) and fuse day one.",
            "Limitation: RRF doesn't understand semantics beyond rank positions. A cross-encoder reranker still needed for 'does this answer the question' judgement.",
          ),
          s(" Roadmap framing: RRF in v1 hybrid retrieval, rerank in v1.5 when pilot users complain about top-result quality."),
        ],
      ],
      examples: [
        {
          title: "Elasticsearch + vector hybrid — RRF in managed search",
          body: "Elasticsearch 8.x and OpenSearch ship RRF for hybrid lexical + kNN queries. PMs on managed search stacks can enable hybrid + RRF without custom code, then add Cohere rerank as a post-step. Layered quality improvements with clear A/B boundaries.",
        },
        {
          title: "Debugging 'why this doc?' with RRF scores",
          body: "An internal wiki search team logged per-retriever ranks alongside RRF score. PMs discovered product spec pages ranked #2 in BM25 but #40 in vectors — RRF rescued them to #8, rerank promoted to #2. Without decomposition, the team would have blamed 'bad embeddings' and started a re-embedding project.",
        },
        {
          title: "When RRF hurts — homogeneous retrievers",
          body: "Running two nearly identical embedding models and fusing with RRF adds latency without diversity. A startup duplicated their vector index with different chunk sizes, fused with RRF, and saw recall gains — because the retrievers were actually diverse. PM lesson: fusion only helps when sources disagree productively.",
        },
      ],
    }),
    buildSection({
      number: "4.7",
      title: "When reranking isn't worth it",
      subtitle: "Latency budgets, tiny corpora, and the law of diminishing returns",
      take: "Reranking pays off when you have a large noisy corpus, quality-sensitive use cases, and latency headroom. It often doesn't pay off when your corpus is small, your retrieval is already precise, or you're sub-200ms end-to-end.",
      why: "Adding rerank because 'best practices say so' bloats latency and COGS on workloads that never needed it. The PM skill is knowing when to stop stacking retrieval layers.",
      paragraphs: [
        [
          s("Small corpora don't need a second pass. "),
          x(
            "If you have 500 chunks and retrieve top 10, a decent embedding model often achieves Precision@5 > 0.9 without reranking. You're paying cross-encoder latency to reorder a list that's already right.",
            "Rule of thumb: under ~5,000 chunks with good chunking and hybrid search, run an eval before adding rerank. Many internal copilots over one product's docs fall in this bucket.",
          ),
          s(" The opportunity cost is engineering time on eval harnesses and chunking strategy — usually higher ROI at small scale."),
        ],
        [
          s("Hard latency SLAs veto rerank unless you have GPU budget. "),
          x(
            "Voice assistants, inline autocomplete, and sub-300ms search boxes can't absorb 150–500ms rerank without user-visible regression. Options: smaller reranker (MiniLM), async rerank with streaming UI, or accept lower precision.",
            "Some products rerank only on 'deep search' mode while instant mode skips it — a PM-visible tiering decision, not a hidden compromise.",
          ),
          s(" Always A/B latency and quality together; engineering-only quality wins that add 400ms get rolled back in production."),
        ],
        [
          s("Diminishing returns appear when retrieval is already excellent. "),
          x(
            "If Precision@5 is 0.95 before rerank, rerank might buy 0.02 — invisible to users. Invest in generation, citations UX, or freshness instead.",
            "Conversely, if Precision@5 is 0.55, rerank often buys 0.15–0.25 — transformative. The eval tells you which side you're on.",
          ),
          s(" PMs should gate rerank roadmap items on measured Precision@k gap, not on competitor feature checklists."),
        ],
      ],
      examples: [
        {
          title: "Single-product FAQ bot — rerank removed after eval",
          body: "A 200-article FAQ copilot added Cohere rerank in beta. Offline Precision@3 went from 0.91 to 0.94; p95 latency went from 1.2s to 1.9s. User completion rate didn't move. The PM removed rerank and spent the sprint on answer formatting. Right call — the corpus was tiny and clean.",
        },
        {
          title: "Customer support chat — async rerank pattern",
          body: "A chat widget targeted <800ms first token. Full rerank blew the budget. Solution: stream a fast draft from top-3 bi-encoder hits while rerank runs in parallel; if rerank order differs materially, append a correction. Complex engineering — PM justified it only for enterprise tier where answer accuracy was contractual.",
        },
        {
          title: "Metadata-filtered retrieval obviates rerank",
          body: "A multi-tenant HR tool filters by country + policy type before vector search — shrinking each query to ~200 chunks. Precision@5 was already 0.88. Rerank added 0.04 for 180ms. PM chose structured filters + better chunk titles over rerank. Domain structure beat generic reranking.",
        },
      ],
    }),
    buildSection({
      number: "4.8",
      title: "PM decision lens",
      subtitle: "Evaluating rerank ROI — precision, latency, and cost in one frame",
      take: "The rerank decision is a three-variable optimisation: Precision@k (quality), p95 latency (UX), and cost per query (margin). PMs who put all three on one slide make better build-vs-skip calls than teams that optimise quality in isolation.",
      why: "Reranking is the archetype of an AI systems tradeoff — no vendor slide deck gives you your numbers. You need a one-page decision framework before the eng spike, not after.",
      paragraphs: [
        [
          s("Start with an offline eval on real queries. "),
          x(
            "Collect 100–300 production or support-ticket phrasings. Label the ideally correct chunk(s). Measure Recall@N, Precision@3, Precision@5 with and without rerank on your actual pipeline.",
            "If rerank moves Precision@3 by <5 points, stop. If >15 points, prioritize. Between 5–15, run a blind user study — human perception doesn't track linearly with metrics.",
          ),
          s(" Label quality matters more than label quantity; 50 gold-standard labels beat 500 sloppy ones."),
        ],
        [
          s("Model the economics explicitly. "),
          x(
            "Managed rerank: Cohere charges per search unit. Self-hosted: GPU ms × cloud rate. Add to retrieval + LLM cost per query for total COGS.",
            "Example: 50 docs reranked × $0.000002/unit × 1M queries/month = $100/month — often negligible vs LLM spend. But at 500 docs × 10M queries, line items grow. PMs own the multiplication.",
          ),
          s(" Compare rerank COGS to cost of user rework (support tickets, churn) when answers are wrong — that's the ROI numerator."),
        ],
        [
          s("Ship with observability and a kill switch. "),
          x(
            "Log rerank input order, output order, score distribution, and latency per query. Feature-flag rerank for instant rollback. A/B on 10% traffic before full rollout.",
            "Define alert thresholds: if p95 latency exceeds X or rerank scores cluster below Y, page on-call. PM writes the thresholds; eng wires the alerts.",
          ),
          s(" The teams that regret rerank launches skipped the kill switch. The teams that love it treat rerank as a tunable product layer, not a one-time integration."),
        ],
      ],
      examples: [
        {
          title: "The one-page rerank PRD template",
          body: "Mature AI PMs include in every rerank PRD: corpus size, current Precision@5, target Precision@5, max p95 latency delta, monthly query volume, estimated rerank COGS, eval dataset link, and rollback criteria. Reviewers can approve or reject in 15 minutes. Ambiguous 'improve search' tickets take 15 weeks.",
        },
        {
          title: "Glean-style enterprise search — rerank as premium tier",
          body: "Several enterprise search products gate 'high accuracy mode' (hybrid + rerank + larger k) behind paid tiers while standard mode stays bi-encoder-only. PMs monetise the latency/quality tradeoff instead of subsidising everyone's rerank GPU bill.",
        },
        {
          title: "Quarterly rerank model refresh",
          body: "A B2B copilot treats reranker version like LLM version: quarterly eval against new BGE/Cohere releases, changelog for compliance customers, feature flag per tenant. PM owns the release notes; ML owns the benchmark. Reranking is infrastructure with a lifecycle, not a checkbox.",
        },
      ],
    }),
  ],
  quiz: [
    {
      q: "Your RAG pipeline has Recall@50 of 0.94 but users report wrong citations in the top 3 slots. What's the most targeted fix?",
      options: [
        "Switch to a larger LLM — the generator is hallucinating.",
        "Add a reranking step on the retrieval shortlist before context assembly.",
        "Increase chunk size so each chunk contains more context.",
        "Remove hybrid search and use vectors only.",
      ],
      correct: 1,
      correctFeedback:
        "Right. High recall at 50 with bad top-3 precision is the classic reranking problem — the right doc is in the shortlist but ranked too low. Reranking re-orders candidates with a cross-encoder before the LLM sees them.",
      wrongFeedback:
        "Recall@50 is already strong, so retrieval finds relevant material — it just doesn't prioritise it at the top. That's precision at low k, which reranking addresses. Re-read sections 4.2 and 4.5.",
    },
    {
      q: "Why can't you run a cross-encoder over your entire 2-million-chunk corpus at query time?",
      options: [
        "Cross-encoders don't support non-English text.",
        "Each query–document pair requires a separate forward pass — 2M pairs per query is computationally prohibitive.",
        "Cross-encoders only work on PDFs, not chunked text.",
        "Vector databases can't store cross-encoder scores.",
      ],
      correct: 1,
      correctFeedback:
        "Exactly. Cross-encoders score query and document jointly, which is accurate but O(candidates) per query. Bi-encoders pre-compute document vectors so search is O(index). Hence retrieve wide, rerank narrow.",
      wrongFeedback:
        "The bottleneck is compute per pair, not language or file format. Bi-encoders exist precisely to make million-scale search feasible; cross-encoders refine shortlists. Re-read section 4.3.",
    },
    {
      q: "Where does RRF sit relative to reranking in a typical hybrid RAG stack?",
      options: [
        "RRF replaces reranking entirely.",
        "RRF runs after the LLM to merge multiple answers.",
        "RRF fuses multiple retrieval rankings before the reranker scores the merged shortlist.",
        "RRF and reranking are the same technique with different names.",
      ],
      correct: 2,
      correctFeedback:
        "Right. RRF merges BM25 + vector (and other) ranked lists into one candidate set. The cross-encoder reranker then re-orders that fused shortlist for precision at the top.",
      wrongFeedback:
        "RRF is rank fusion without labelled data; reranking is semantic re-scoring with a cross-encoder. They stack: fuse first, rerank second. Re-read section 4.6.",
    },
    {
      kind: "categorize",
      q: "Sort each scenario into whether reranking is likely worth it or likely not worth it.",
      categories: ["Worth reranking", "Skip reranking"],
      items: [
        { text: "500K-chunk enterprise wiki with noisy top-5 precision and 2s latency budget.", category: 0 },
        { text: "200-article FAQ with Precision@3 already at 0.92 and strict sub-500ms SLA.", category: 1 },
        { text: "Legal copilot where wrong top citation triggers malpractice risk.", category: 0 },
        { text: "Metadata filtering shrinks each query to 150 chunks with Precision@5 at 0.89.", category: 1 },
        { text: "Pilot users only read the first cited source when judging answer quality.", category: 0 },
        { text: "Rerank eval shows Precision@3 moving from 0.94 to 0.95 at +400ms latency.", category: 1 },
      ],
      correctFeedback:
        "Right. Rerank ROI shows up with large noisy corpora, high-stakes precision, and user behaviour that concentrates on top slots — not when retrieval is already excellent or latency can't absorb the cost.",
      wrongFeedback:
        "Ask: is Precision@k low enough to matter, is the corpus large/noisy, and is there latency headroom? Re-read section 4.7 and 4.8.",
    },
    {
      kind: "order",
      q: "Put the canonical RAG pipeline stages in the correct execution order.",
      prompt: "Drag to arrange first step (top) to last (bottom).",
      items: [
        "Chunk documents and embed them into a vector index.",
        "Retrieve top-N candidates via bi-encoder / hybrid search.",
        "Rerank the shortlist with a cross-encoder to top-k.",
        "Assemble the winning chunks into the LLM prompt.",
        "Generate the answer with citations.",
      ],
      correctFeedback:
        "Exactly. Rerank sits between retrieval and prompt assembly — never after generation. Each stage has distinct metrics and failure modes.",
      wrongFeedback:
        "Embedding and indexing happen offline; at query time it's retrieve → rerank → pack context → generate. Re-read section 4.5.",
    },
    {
      q: "Your team debates Cohere Rerank API vs self-hosted BGE reranker. Which framing best reflects the PM tradeoff?",
      options: [
        "Always self-host — APIs are never enterprise-ready.",
        "Cohere wins on time-to-eval and ops simplicity; BGE wins at high volume or strict data residency when GPU ops are available.",
        "BGE is always higher quality than Cohere.",
        "The choice doesn't affect unit economics.",
      ],
      correct: 1,
      correctFeedback:
        "Right. Managed APIs accelerate pilot and shift ops burden to vendor; self-hosted open models win on data control and unit economics at scale — if you can operate model serving.",
      wrongFeedback:
        "Both are production-viable; the decision is speed-to-ship vs data residency vs volume economics. Re-read section 4.4.",
    },
  ],
});
