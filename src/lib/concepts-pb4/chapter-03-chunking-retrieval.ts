import { buildChapter, buildSection, s, x } from "../concepts-pb4-helpers";

export const chapter03ChunkingRetrieval = buildChapter({
  slug: "pb4-chunking-retrieval",
  number: 3,
  shortTitle: "Chunking & Retrieval",
  title: "Chunking & Retrieval",
  readingMinutes: 24,
  summary:
    "How you split knowledge determines what can be found — chunking and retrieval strategy are the highest-leverage quality knobs in any RAG system",
  keyTakeaway:
    "Chunking defines the atomic unit of retrieval; retrieval strategy defines which units compete for the context window. Most RAG quality problems trace to one or both — not to the LLM's IQ.",
  pmCallout:
    "As a PM: before you approve a model upgrade, run an eval on chunk size and top-k. Nine times out of ten, chunking beats a bigger model — and costs a fraction as much.",
  sections: [
    buildSection({
      number: "3.1",
      title: "What is chunking",
      subtitle: "Splitting documents into retrieval-sized passages — the decision that echoes through every query",
      take: "Chunking splits source documents into passages small enough to embed precisely and fit in a context window, large enough to carry meaningful context. The chunk is the atomic unit of retrieval — you never retrieve a whole PDF, you retrieve a chunk.",
      why: "Embed a 50-page policy as one vector and you get one blurry average of the entire document. Embed it as 200 focused paragraphs and you can retrieve the refund section when someone asks about refunds. Chunking is how search granularity gets set.",
      paragraphs: [
        [
          s("LLMs and embedding models have finite context; your corpus does not. "),
          x(
            "Chunking bridges the gap: each chunk becomes one row in the vector index with its own embedding and metadata pointing back to the parent document.",
            "At query time you retrieve chunks, not documents. Citations link to chunks; users perceive them as 'the doc' but retrieval is always chunk-level.",
          ),
          s(" PMs who say 'we indexed all our PDFs' should ask 'into how many chunks, with what boundaries?'"),
        ],
        [
          s("Chunk boundaries encode editorial judgement. "),
          x(
            "Split at paragraph boundaries preserves coherence. Split every 512 tokens mid-sentence produces chunks that embed poorly and read badly in citations.",
            "Structure-aware chunking respects headings, tables, lists, and code blocks. A table split in half retrieves as nonsense.",
          ),
          s(" Chunking policy belongs in the content pipeline — same seriousness as CMS taxonomy."),
        ],
        [
          s("Chunking interacts with every downstream stage. "),
          x(
            "Smaller chunks: precise retrieval, more vectors, higher index cost, risk of missing surrounding context. Larger chunks: more context per hit, muddier embeddings, fewer index rows.",
            "Retrieval k, reranking, and assembly all assume a chunk size. Changing chunk size requires re-embedding — a migration, not a config toggle.",
          ),
          s(" Treat chunking changes like schema migrations: eval gates, re-index plan, rollback."),
        ],
      ],
      examples: [
        {
          title: "Stripe docs — structure-aware chunking by heading",
          body: "Technical docs chunk by H2/H3 sections so each chunk is a complete concept ('Authentication', 'Webhooks'). Users retrieve the right section, not a random 500-token window through four topics. PM lesson: if your docs have good headings, chunking should mirror them.",
        },
        {
          title: "Legal contracts — chunk boundary disasters",
          body: "A contract RAG tool split every 400 tokens. Clause 7.3 ('Termination for convenience') was torn across two chunks; neither retrieved well for 'how do I cancel?' Blind eval Precision@3 was 0.41. Re-chunking at clause boundaries moved it to 0.78 without any model change.",
        },
        {
          title: "Slack thread chunking — conversation as unit",
          body: "Indexing Slack by individual message loses thread context. Indexing whole threads as one chunk works for short threads; long threads need thread-summary + message-level children (hierarchical chunking, section 3.6). PM defined 'retrieval unit' as 'the resolution message plus 3 messages of context' based on how support agents actually read threads.",
        },
      ],
    }),
    buildSection({
      number: "3.2",
      title: "Fixed-size chunking",
      subtitle: "Split every N tokens or characters — simple, predictable, often good enough to start",
      take: "Fixed-size chunking splits text every N tokens (or characters) with optional overlap. It's the default MVP: easy to implement, consistent chunk sizes, works reasonably on homogeneous prose. It fails on structured docs, tables, and content where boundaries matter.",
      why: "Most teams start here — correctly. PMs should know when fixed-size stops being good enough (structured docs, low Precision@k) so they can fund structure-aware chunking instead of another model upgrade.",
      paragraphs: [
        [
          s("Implementation is straightforward: pick N, slide a window, embed. "),
          x(
            "Common defaults: 256, 512, or 1024 tokens with 10–20% overlap (50–100 tokens). LangChain and LlamaIndex ship RecursiveCharacterTextSplitter as the default.",
            "Overlap reduces boundary effects: a sentence split across two chunks appears intact in at least one window.",
          ),
          s(" Defaults are starting points — your eval set picks the actual N."),
        ],
        [
          s("Fixed-size works best on uniform prose. "),
          x(
            "Blog posts, essays, narrative help articles — content without tables, nested lists, or cross-references.",
            "Heterogeneous enterprise knowledge (PDFs + Slack + spreadsheets) is where fixed-size produces the 'related but useless' chunks users complain about.",
          ),
          s(" Homogeneous corpus → fixed-size may survive to production. Mixed corpus → plan structure-aware chunking in roadmap."),
        ],
        [
          s("Token vs character splitting matters. "),
          x(
            "Token-based splitting aligns with embedding model limits and LLM context. Character-based is simpler but drifts from tokenizer boundaries — a '512 character' chunk might be 180 or 320 tokens.",
            "Always split with the same tokenizer the embedding model uses. Mismatch inflates or deflates effective chunk size silently.",
          ),
          s(" PMs ask eng 'are we splitting by tokens or characters?' — surprising how often teams don't know."),
        ],
      ],
      examples: [
        {
          title: "512-token default — the industry habit",
          body: "Many pilots use 512 tokens because it's the middle of the road: not so small that context vanishes, not so large that embeddings blur. A SaaS docs copilot ran evals at 256/512/1024 and found 512 optimal for their prose-heavy KB — but 256 won for API reference with short entries. One size rarely fits all doc types.",
        },
        {
          title: "PDF fixed-size failure mode",
          body: "Fixed 500-token chunks through a PDF with two-column layout interleaved sentences from different sections. Retrieval returned chimera chunks mixing 'Pricing' and 'Security'. Fix: PDF parser with layout detection, then chunk by section. PM added 'document type' to chunking policy matrix.",
        },
        {
          title: "Overlap A/B — 0% vs 20%",
          body: "Support KB with 0% overlap missed answers that straddled chunk boundaries 18% of the time in eval. 20% overlap (100 tokens on 512) cut misses to 4% but increased vector count 22%. PM accepted the storage cost — cheaper than reranking or a bigger model.",
        },
      ],
    }),
    buildSection({
      number: "3.3",
      title: "Semantic chunking",
      subtitle: "Split where meaning shifts — when structure isn't explicit in the markup",
      take: "Semantic chunking uses embedding similarity between sentences or paragraphs to find natural breakpoints — when consecutive text stops being about the same thing, start a new chunk. It produces variable-size chunks that respect topic boundaries without requiring clean headings.",
      why: "Enterprise docs are messy: exported PDFs, pasted emails, legacy wikis without H2s. Semantic chunking is how you chunk prose that wasn't written for retrieval — at the cost of more compute at index time.",
      paragraphs: [
        [
          s("The algorithm compares adjacent text windows. "),
          x(
            "Embed sentences or paragraphs; measure similarity between neighbours. When similarity drops below a threshold, cut. Result: chunks that start and end on topic shifts.",
            "Threshold tuning is sensitive: too low → tiny fragments; too high → mega-chunks. Most implementations add min/max chunk size guards.",
          ),
          s(" Indexing is slower (many embedding calls per doc) — budget this in migration timelines."),
        ],
        [
          s("Semantic chunking shines on unstructured narrative. "),
          x(
            "Interview transcripts, research reports, long emails, meeting notes — content with topical flow but no headings.",
            "Less valuable when docs already have clean structure — heading-based chunking is cheaper and often better.",
          ),
          s(" PM rule: semantic for unstructured sources; structure-aware for well-formatted docs."),
        ],
        [
          s("Quality gains show up in Precision@k, not Recall@100. "),
          x(
            "Semantic chunks embed more coherently — the vector represents one topic, not three. Top ranks become less noisy.",
            "Tradeoff: variable chunk sizes complicate assembly (some chunks are 2,000 tokens) — max-size caps are still needed.",
          ),
          s(" Eval semantic vs fixed-size on your worst doc types, not your best."),
        ],
      ],
      examples: [
        {
          title: "Sales call transcript RAG",
          body: "Rep asks 'what did Acme say about implementation timeline?' Semantic chunking split by topic shift (pricing discussion → implementation → next steps). Fixed-size had timeline mention split across a chunk mostly about pricing. Semantic lifted task success 19% in rep blind tests.",
        },
        {
          title: "LlamaIndex SemanticSplitterNodeParser",
          body: "Teams using LlamaIndex often A/B SemanticSplitter vs RecursiveCharacter on the same corpus. PM takeaway: framework support makes semantic chunking a config change — but index-time embedding cost still 3–5× higher. Model the re-index budget.",
        },
        {
          title: "When semantic made things worse",
          body: "API reference with uniform short entries: semantic chunking merged distinct endpoints into mega-chunks because descriptions sounded similar. Fixed 256-token won. PM lesson: semantic isn't universal — match strategy to content shape.",
        },
      ],
    }),
    buildSection({
      number: "3.4",
      title: "Chunk size tradeoffs",
      subtitle: "Small chunks find needles; large chunks carry haystacks — pick per use case",
      take: "Small chunks (128–256 tokens) maximise retrieval precision for pinpoint facts. Large chunks (1024–2048 tokens) preserve surrounding context for synthesis questions. The right size is the one that maximises Precision@k on your eval set for your dominant query types.",
      why: "Chunk size is the highest-leverage hyperparameter in RAG and the one PMs can influence without GPU clusters. Getting it wrong wastes every other optimisation.",
      paragraphs: [
        [
          s("Small chunks win on 'where is the fact?' queries. "),
          x(
            "What's the refund window? What's the API rate limit? Embed a tight paragraph and it lands near the query vector.",
            "Risk: multi-sentence answers that require adjacent context ('if X then Y unless Z') get split and the model sees only X.",
          ),
          s(" Support macros, FAQs, and policy lookups often want 200–400 token chunks."),
        ],
        [
          s("Large chunks win on 'explain the concept' queries. "),
          x(
            "How does our auth flow work? A 1,500-token chunk with setup, flow, and edge cases gives the LLM material to synthesise.",
            "Risk: embedding averages across topics; retrieval returns the wrong section of a long chunk because the whole thing 'sort of' matches.",
          ),
          s(" Technical overviews and training content often want 800–1,500 token chunks."),
        ],
        [
          s("Mixed corpora need per-doc-type policies. "),
          x(
            "One global chunk size is a convenience, not a law. Policy: FAQ 256, product docs 512, engineering RFCs 1024.",
            "Metadata records chunk_policy version so you know what you're searching when debugging.",
          ),
          s(" PM maintains a chunking matrix: source type × size × overlap × splitter — reviewed quarterly."),
        ],
      ],
      examples: [
        {
          title: "Eval-driven chunk size at Intercom-scale KB",
          body: "Team swept 128/256/512/1024 on 400 labelled support queries. Precision@3 peaked at 256 for billing questions, 512 for how-to guides. Shipped per-category policies. PM presented as 'quality without model spend' — accurate.",
        },
        {
          title: "Large chunk + rerank failure",
          body: "1,500-token chunks improved single-chunk context but killed Precision@5 — too much noise per hit. Combined 512-token chunks with parent-document retrieval (section 3.6): small child retrieves, large parent assembles. Best of both.",
        },
        {
          title: "Token budget math",
          body: "k=5 × 1,024 tokens = 5,120 tokens retrieval budget — leaves little room for history on 8K models. PM reduced to k=4 × 512 after realising large chunks forced low k, hurting multi-doc questions.",
        },
      ],
    }),
    buildSection({
      number: "3.5",
      title: "Overlapping chunks",
      subtitle: "Sliding windows that catch answers sitting on the boundary",
      take: "Overlap repeats tail content from chunk N at the start of chunk N+1 — typically 10–20% of chunk size. It reduces 'answer split across two chunks' failures at the cost of more vectors, storage, and deduplication work at assembly time.",
      why: "Overlap is cheap insurance until it doubles your index bill. PMs weigh boundary miss rate in eval against storage and dedup complexity.",
      paragraphs: [
        [
          s("Boundary misses are invisible in aggregate recall, painful in user sessions. "),
          x(
            "The exact sentence answering the query is the last line of chunk 7 and the first line of chunk 8. Neither chunk embeds strongly alone.",
            "Overlap ensures at least one chunk contains the full sentence cluster intact.",
          ),
          s(" Measure boundary miss rate explicitly: label queries where the answer spans a known split."),
        ],
        [
          s("More overlap is not linearly better. "),
          x(
            "10% overlap fixes most boundary issues. 50% overlap nearly doubles vectors with diminishing returns and heavy dedup needs.",
            "Assembly must deduplicate overlapping text or the LLM sees the same paragraph twice — wasting tokens and biasing toward repeated (possibly wrong) content.",
          ),
          s(" PM approves overlap % with a storage cost projection attached."),
        ],
        [
          s("Alternative to overlap: structure-aware boundaries. "),
          x(
            "If you chunk at paragraph or clause boundaries, overlap matters less — natural breaks rarely bisect answers.",
            "Teams often use modest overlap (50 tokens) as safety net even with structure-aware splitting — belt and suspenders.",
          ),
          s(" Fix boundaries first; add overlap if eval still shows boundary misses."),
        ],
      ],
      examples: [
        {
          title: "20% overlap on legal clauses",
          body: "Even clause-boundary chunking sometimes split sub-clauses. 15% overlap + dedup in assembly reduced boundary misses from 11% to 2%. Vector count +18%; PM signed off because wrong legal answers were existential risk.",
        },
        {
          title: "Dedup bug — overlap doubled answer repetition",
          body: "Overlap without assembly dedup caused the LLM to cite the same refund paragraph twice with different chunk IDs. Users thought two policies conflicted. One dedup rule by content hash fixed it. PM added dedup to assembly checklist.",
        },
        {
          title: "Zero overlap on structured API docs",
          body: "Each endpoint is a self-contained entry under 200 tokens. Boundary misses near zero in eval. PM dropped overlap, saved 30% index storage, reallocated budget to hybrid search.",
        },
      ],
    }),
    buildSection({
      number: "3.6",
      title: "Hierarchical chunking",
      subtitle: "Parent-child, summary leaves, and multi-granularity retrieval",
      take: "Hierarchical chunking indexes multiple granularities: small child chunks for precise retrieval, large parent chunks (sections, full docs) for context at assembly time. Retrieve the child; pass the parent to the LLM — precision of small, context of large.",
      why: "It's the standard answer to the chunk size tradeoff and increasingly a product differentiator for enterprise search over long documents.",
      paragraphs: [
        [
          s("Parent-child is the most common pattern. "),
          x(
            "Child: 256-token paragraphs for search. Parent: full section or document stored by ID, fetched when child hits.",
            "Vector index stores children only; parent text lives in blob store or separate DB field.",
          ),
          s(" Assembly swaps child match for parent text before the LLM call — user still cites the doc."),
        ],
        [
          s("Summary leaves add navigation for long corpora. "),
          x(
            "Generate LLM summaries at each heading level; index summaries as entry points. Query matches summary → expand to children underneath.",
            "Useful for 'what's in this 80-page report?' without retrieving random mid-document chunks.",
          ),
          s(" Summary generation is index-time cost; stale summaries when docs change need re-generation in the pipeline."),
        ],
        [
          s("Multi-granularity complicates metadata and eval. "),
          x(
            "Track parent_id, child_index, level. Eval must label at child level but judge answer quality at parent level.",
            "Worth it when single-granularity eval plateaus below product quality bar.",
          ),
          s(" PM funds hierarchical chunking when doc length distribution is heavy-tailed — many 50+ page docs."),
        ],
      ],
      examples: [
        {
          title: "LlamaIndex auto-merging retriever",
          body: "Auto-merging retrieves small chunks, merges siblings under shared parent when multiple children hit — dynamic context expansion. PM value: users don't configure k; system adapts context width to query complexity.",
        },
        {
          title: "SEC filing analysis",
          body: "10-K filings: child chunks by item section, parent is full Item 7. Analyst asks about risk factors; child 'Item 1A' retrieves, parent supplies full risk section for synthesis. Fixed 512-token chunks without hierarchy missed cross-paragraph risk themes.",
        },
        {
          title: "Notion page hierarchy",
          body: "Nested pages map naturally to tree chunking: block-level children, page-level parent. Breadcrumbs in metadata ('Product > Billing > Refunds') become filters and citation paths. PM aligned chunk hierarchy with how users browse the workspace.",
        },
      ],
    }),
    buildSection({
      number: "3.7",
      title: "Retrieval strategies (top-k, MMR)",
      subtitle: "How many chunks to fetch — and how to avoid five near-duplicate paragraphs",
      take: "top-k returns the k highest-similarity chunks. MMR (Maximal Marginal Relevance) trades raw similarity for diversity — reduce redundant chunks that say the same thing. k and diversity strategy shape what assembly receives.",
      why: "High k inflates latency, cost, and noise. Low k misses evidence. MMR fixes redundancy but can demote the best chunk. PMs set k and diversity policy from eval, not defaults.",
      paragraphs: [
        [
          s("top-k is the baseline: take the k best matches. "),
          x(
            "k=3 for focused Q&A; k=10–20 when reranking will cut down; k=50+ only as input to rerank or fusion — never straight to LLM.",
            "Similarity score thresholds add a gate: return fewer than k if nothing scores above 0.75 — enables honest 'no good match' paths.",
          ),
          s(" Log score distribution per query — a cliff at rank 4 tells you effective k is 3."),
        ],
        [
          s("MMR reduces redundancy in results. "),
          x(
            "MMR score = λ × relevance − (1−λ) × max_similarity_to_already_selected. λ=1 is pure top-k; λ=0.5 balances relevance and diversity.",
            "Critical when corpus has near-duplicate docs (versioned policies, copied Confluence pages) or overlapping chunks.",
          ),
          s(" Users who see five citations to nearly identical paragraphs lose trust in the citation system."),
        ],
        [
          s("Reranking changes the k calculus. "),
          x(
            "Retrieve k=50, rerank to k=5, send k=3 to LLM is standard. MMR at retrieve stage vs diversity from reranker — don't double-apply without reason.",
            "Each stage should have a documented k with a job description: 'retrieve casts wide; rerank sharpens; assembly fits budget.'",
          ),
          s(" PM documents the k cascade in the architecture one-pager."),
        ],
      ],
      examples: [
        {
          title: "MMR on versioned policy docs",
          body: "2023, 2024, 2025 refund policies all retrieved in top-5 without MMR. With MMR λ=0.6, top-5 spanned related but distinct sections (eligibility, process, exceptions). Answer quality up; users stopped asking 'which policy version?'",
        },
        {
          title: "k=20 straight to LLM disaster",
          body: "Junior eng set k=20 'for more context.' 20 × 600 tokens drowned the 8K window; answers got generic. PM spec: max 4 chunks to LLM after rerank. Enforced in assembly, not left to prompt hope.",
        },
        {
          title: "Similarity threshold for honest abstention",
          body: "When top score < 0.68, product says 'I couldn't find relevant docs' instead of forcing k=3. False 'I don't know' rate 8%; false confident answer rate dropped from 22% to 9%. PM chose abstention copy and escalation path to human.",
        },
      ],
    }),
    buildSection({
      number: "3.8",
      title: "Multi-query retrieval",
      subtitle: "One user question, multiple search angles — for ambiguous or multi-faceted queries",
      take: "Multi-query retrieval generates several reformulations of the user question (by rules or LLM), runs retrieval for each, and merges results. It improves recall when a single embedding misses paraphrases or when the question has multiple sub-parts.",
      why: "Single-query retrieval assumes the user's phrasing matches the doc's phrasing in embedding space. It often doesn't. Multi-query is relatively cheap recall insurance — at latency and cost multiples PMs must approve.",
      paragraphs: [
        [
          s("LLM-generated query variants are the common pattern. "),
          x(
            "Prompt: 'Generate 3 search queries for: {user_question}'. Embed each; union top-k results; dedupe; rerank.",
            "Variants explore vocabulary ('cancel subscription' / 'terminate plan' / 'end billing'). Recall@10 lifts 10–25% on paraphrase-heavy evals.",
          ),
          s(" Each variant is an embedding API call — 3× retrieval cost before merge."),
        ],
        [
          s("HyDE generates a hypothetical answer, embeds that. "),
          x(
            "LLM writes a fake answer paragraph; embed the fake answer; search with that vector. Often closer to doc language than the question.",
            "Powerful for short questions; risky when hypothetical answer is wrong — can pull irrelevant docs confidently.",
          ),
          s(" Feature-flag HyDE; measure on eval before default-on."),
        ],
        [
          s("Sub-query decomposition for multi-hop. "),
          x(
            "Compare plan A vs plan B' → retrieve separately for A, for B, merge. Agentic patterns extend this to iterative retrieval.",
            "Latency stacks linearly with sub-queries — productise as 'deep search' tier with explicit wait UX.",
          ),
          s(" PM caps variant count (3, not 10) and sets p95 latency budget for multi-query modes."),
        ],
      ],
      examples: [
        {
          title: "Multi-query lift on internal HR bot",
          body: "Single-query Recall@10: 0.74. Three LLM variants + union: 0.89. Added 120ms and $0.0002/query. PM enabled for benefits questions (high paraphrase variance); disabled for direct policy number lookups (BM25 sufficient).",
        },
        {
          title: "HyDE wrong hypothetical — retrieval drift",
          body: "User asked about 'pet insurance'; HyDE hallucinated a detailed pet policy that doesn't exist; retrieval followed the hallucination to unrelated wellness benefits. Fallback to original query on low scores fixed edge cases. PM required confidence gate.",
        },
        {
          title: "RAG-Fusion ranking",
          body: "Multiple queries + reciprocal rank fusion across result lists — no single query's failure dominates. Used in research-mode product tier with 5–8s p95. PM priced tier at $29/seat; COGS model included 4× embed calls per query.",
        },
      ],
    }),
    buildSection({
      number: "3.9",
      title: "PM decision lens: chunking as product quality",
      subtitle: "Owning the retrieval unit — evals, policies, and migrations that outlast any model version",
      take: "Chunking and retrieval strategy are product quality levers disguised as preprocessing. PMs who own chunk policies, eval golden sets, and k/MMR settings ship RAG that improves without model upgrades — PMs who don't chase GPT-N forever.",
      why: "This chapter's thesis: the LLM is the last mile. Chunking and retrieval are the first 90%. This section turns that into operating rhythm.",
      paragraphs: [
        [
          s("Build and maintain a chunking policy document. "),
          x(
            "Per source type: splitter, size, overlap, hierarchy, update trigger. Version it. Link to eval results that justified each choice.",
            "When a new connector ships (Salesforce, Jira), chunking policy is a launch requirement — not 'we'll use defaults.'",
          ),
          s(" Review quarterly when new doc types land or quality complaints cluster by source."),
        ],
        [
          s("Invest in eval before model shopping. "),
          x(
            "200+ labelled query-chunk pairs. Sweep chunk size, overlap, k, MMR, multi-query on the same set. Report Precision@3 and boundary miss rate.",
            "One eval sprint often beats six months of prompt tuning. PM funds eval infrastructure as product infra, not research.",
          ),
          s(" Share eval dashboard with stakeholders — makes 'we need to re-chunk' as credible as 'we need GPT-5.'"),
        ],
        [
          s("Plan re-chunk migrations as releases. "),
          x(
            "Dual-index, shadow eval, cutover flag, rollback. Communicate if citation URLs change format.",
            "Chunk migration without eval is how teams break production citations silently.",
          ),
          s(" The PM who schedules re-chunking like a feature launch avoids the 'quality mysteriously dropped' incident."),
        ],
      ],
      examples: [
        {
          title: "Chunking policy in the PRD template",
          body: "Every new RAG source in PRD: doc type, expected chunk count, splitter, size, overlap, hierarchy, eval target Precision@3. Eng won't index until PM signs policy row. Prevents 11th-hour 'why are answers bad on PDFs?'",
        },
        {
          title: "Eval beat model upgrade",
          body: "Team proposed $8K/month larger embedding model. Eval showed chunk size change 512→256 on FAQs bought more Precision@3 than the model upgrade — at re-index cost only. PM reallocated budget to structure-aware PDF parsing instead.",
        },
        {
          title: "User-reported miss → chunk fix in 48h",
          body: "User flagged wrong answer; logged chunk IDs showed boundary miss on known split. Hotfix: 15% overlap on that doc type only. Proper fix: clause-boundary chunking in next sprint. Observability + chunk policy version made root cause obvious in one triage session.",
        },
      ],
    }),
  ],
  quiz: [
    {
      q: "A user asks a pinpoint question ('What's the API rate limit?') and your eval shows large 1,500-token chunks retrieve related but wrong sections. Best first intervention?",
      options: [
        "Switch to GPT-4 Turbo.",
        "Reduce chunk size or use hierarchical child chunks for precise retrieval.",
        "Increase k to 20.",
        "Add 50% overlap.",
      ],
      correct: 1,
      correctFeedback:
        "Pinpoint factual queries need tight, focused chunks. Large chunks blur embeddings. Smaller or child chunks improve precision before you touch the model.",
      wrongFeedback:
        "Large chunks hurt precision for factoid queries. Fix granularity first. Re-read sections 3.4 and 3.6.",
    },
    {
      q: "Your top-5 retrieval results are five near-duplicate versions of the same policy. What retrieval technique addresses this?",
      options: [
        "Increase embedding dimensions.",
        "MMR (Maximal Marginal Relevance) to balance similarity and diversity.",
        "Smaller k only.",
        "Higher temperature on the LLM.",
      ],
      correct: 1,
      correctFeedback:
        "MMR explicitly penalises selecting chunks too similar to ones already chosen — ideal for duplicate-heavy corpora.",
      wrongFeedback:
        "Smaller k might hide duplicates but also hides diverse relevant evidence. MMR targets redundancy directly. Re-read section 3.7.",
    },
    {
      q: "When is semantic chunking most justified over fixed-size splitting?",
      options: [
        "Always — it's strictly better.",
        "Unstructured narrative content without reliable headings (transcripts, long emails).",
        "API reference with short uniform entries.",
        "Never — it's too expensive.",
      ],
      correct: 1,
      correctFeedback:
        "Semantic chunking helps when topic boundaries aren't marked up but exist in the prose. Structured short entries favour fixed-size or structure-aware splits.",
      wrongFeedback:
        "Semantic chunking targets unstructured narrative — not API refs or always-on scenarios. Re-read section 3.3.",
    },
    {
      kind: "categorize",
      q: "Match each technique to the primary problem it solves.",
      categories: ["Boundary / granularity", "Redundancy / diversity", "Recall / phrasing"],
      items: [
        { text: "Overlapping chunks (10–20%).", category: 0 },
        { text: "Parent-child hierarchical chunking.", category: 0 },
        { text: "MMR at retrieval time.", category: 1 },
        { text: "Multi-query retrieval with LLM variants.", category: 2 },
        { text: "HyDE (hypothetical document embedding).", category: 2 },
        { text: "Deduplication in context assembly.", category: 1 },
      ],
      correctFeedback:
        "Overlap and hierarchy fix granularity/boundary issues. MMR and dedup fight redundancy. Multi-query and HyDE improve recall across phrasings.",
      wrongFeedback:
        "Each technique targets a specific failure mode. Re-read sections 3.5–3.8.",
    },
    {
      kind: "order",
      q: "Put the recommended chunking optimisation workflow in order for a PM-led quality sprint.",
      prompt: "Drag to arrange first step (top) to last (bottom).",
      items: [
        "Build 200+ labelled query–answer pairs with known source passages.",
        "Sweep chunk size / overlap / strategy on the same eval set.",
        "Measure Precision@3 and boundary miss rate — pick winning policy per doc type.",
        "Plan re-index migration with dual-index eval gate and rollback.",
        "Document chunking policy version and monitor in weekly quality review.",
      ],
      correctFeedback:
        "Eval first, sweep policies, measure, migrate safely, then operate. Skipping eval turns chunking into guesswork.",
      wrongFeedback:
        "You need labels before you can sweep meaningfully, and migrations before declaring victory. Re-read section 3.9.",
    },
    {
      q: "Parent-child hierarchical chunking primarily enables:",
      options: [
        "Faster embedding at index time.",
        "Small chunks for precise search with large parent context for the LLM.",
        "Eliminating the need for metadata filters.",
        "Replacing vector search with keyword search.",
      ],
      correct: 1,
      correctFeedback:
        "Retrieve on precise children; assemble parents for synthesis context — the standard resolution to the chunk size tradeoff.",
      wrongFeedback:
        "Hierarchy trades index complexity for precision + context — it doesn't replace filters or search. Re-read section 3.6.",
    },
  ],
});
