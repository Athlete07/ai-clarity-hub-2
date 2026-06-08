import type { ConceptBodyBlock } from "../concepts";
import { buildChapter, buildSection, s, x } from "../concepts-pb4-helpers";

function insertDiagram(
  blocks: ConceptBodyBlock[],
  diagram: Extract<ConceptBodyBlock, { kind: "diagram" }>,
): ConceptBodyBlock[] {
  const exIdx = blocks.findIndex((b) => b.kind === "ex");
  const idx = exIdx === -1 ? blocks.length : exIdx;
  return [...blocks.slice(0, idx), diagram, ...blocks.slice(idx)];
}

const section12 = buildSection({
  number: "1.2",
  title: "RAG pipeline end-to-end",
  subtitle: "From raw documents to grounded answers — the full loop every production system runs",
  take: "RAG is not a single API call. It is a pipeline with two distinct phases: an offline indexing phase that turns your knowledge base into searchable vectors, and an online query phase that retrieves relevant chunks and feeds them to the LLM at generation time.",
  why: "PMs who treat RAG as 'connect the LLM to our docs' ship features that work in demos and fail in production. Understanding the full pipeline is how you scope sprints, set latency budgets, and know which stage broke when users report wrong answers.",
  paragraphs: [
    [
      s("Every RAG system, regardless of vendor or framework, follows the same skeleton. "),
      x(
        "Offline: ingest documents → chunk into passages → embed each chunk → store vectors (and metadata) in an index. Online: embed the user query → retrieve top-N similar chunks → assemble them into a prompt → call the LLM → return the answer (ideally with citations).",
        "The offline phase is batch or event-driven — it runs when docs change. The online phase runs on every user question. Latency, cost, and quality are negotiated differently in each phase.",
      ),
      s(" Confusing the two is how teams end up re-embedding the entire corpus on every query — technically RAG, economically catastrophic."),
    ],
    [
      s("Between retrieval and generation sits context assembly — the step most architecture diagrams skip. "),
      x(
        "Retrieval returns ranked chunks; assembly decides which ones fit in the context window, in what order, with what headers, and whether to deduplicate or compress.",
        "A retriever might return 20 chunks totalling 40,000 tokens; the LLM might only accept 8,000. Assembly is where you truncate, rerank, or summarise — and where silent quality loss happens if nobody owns the logic.",
      ),
      s(" PMs should ask 'what is our k, our token budget, and our overflow strategy?' before signing off on any RAG PRD."),
    ],
    [
      s("Advanced pipelines add optional stages without changing the core shape. "),
      x(
        "Query rewriting, hybrid search (BM25 + vectors), reranking with a cross-encoder, metadata pre-filtering, and citation extraction all plug into specific slots in the loop.",
        "Naive RAG is retrieve-then-generate. Advanced RAG might be: rewrite query → filter by tenant → hybrid retrieve top-50 → rerank to top-5 → assemble with source labels → generate with structured citations.",
      ),
      s(" The PM skill is knowing which optional stages your use case needs — not adopting all of them because a conference talk said so."),
    ],
  ],
  examples: [
    {
      title: "Perplexity's architecture — RAG as the product, not a feature",
      body: "Perplexity is RAG end-to-end: crawl/index the web, retrieve at query time, synthesise with citations. The product surface is the pipeline. PM decisions — freshness of index, number of sources shown, when to search vs answer from parametric knowledge — are pipeline decisions. Teams copying 'Perplexity for our docs' without indexing discipline ship a chatbot with a search bar glued on.",
    },
    {
      title: "Glean's enterprise rollout — indexing before generation",
      body: "Glean's enterprise deployments spend weeks on the offline phase: connector permissions, document freshness, chunking policy per source type (Confluence vs Drive vs Slack). Pilot quality correlates with indexing completeness more than LLM choice. PMs who rush to 'turn on the AI' before the index is trustworthy inherit a support queue of 'it can't find the doc I can see in SharePoint.'",
    },
    {
      title: "Internal copilot post-mortem — the missing assembly step",
      body: "A B2B SaaS team shipped RAG with top-10 retrieval into an 8K context model. No deduplication, no ordering logic, no token counting. Duplicate chunks from overlapping splits ate 60% of the window; the LLM answered from the wrong duplicate. Fix wasn't a better model — it was assembly: dedupe by doc ID, cap at 5 chunks, sort by rerank score. Two days of eng work; three months of user distrust to recover.",
    },
  ],
});

export const chapter01RagArchitecture = buildChapter({
  slug: "pb4-rag-architecture",
  number: 1,
  shortTitle: "RAG Architecture",
  title: "RAG Architecture",
  readingMinutes: 24,
  summary:
    "The most important pattern in applied AI — giving your model knowledge it wasn't trained on",
  keyTakeaway:
    "RAG is a two-phase pipeline: offline indexing turns your knowledge into searchable vectors; online retrieval grounds the LLM at query time. Quality lives in chunking, retrieval, and assembly — not just the model you pick.",
  pmCallout:
    "As a PM: draw the pipeline before you pick vendors. If you can't point to where chunking, retrieval, and context assembly happen, you're not ready to estimate latency, cost, or answer quality.",
  sections: [
    buildSection({
      number: "1.1",
      title: "What is RAG and why it exists",
      subtitle: "Retrieval-Augmented Generation — knowledge at inference time, not training time",
      take: "RAG augments an LLM's parametric memory (what it learned in training) with non-parametric memory (your documents, retrieved at query time). The model generates answers grounded in evidence you control, without retraining weights on every doc update.",
      why: "Every product team eventually hits the same wall: the model doesn't know your pricing, your policies, or yesterday's release notes. RAG is the default answer to 'how do we give the AI our knowledge?' — and the architecture choice that shapes everything downstream.",
      paragraphs: [
        [
          s("Large language models are frozen snapshots of the internet at training time. "),
          x(
            "They cannot know your private data, your latest SKU list, or the ticket your support team closed an hour ago — unless you inject that information into the prompt at inference time.",
            "Fine-tuning bakes knowledge into weights (slow to update, expensive, risk of stale memorisation). RAG fetches knowledge dynamically (fast to update, auditable, citeable).",
          ),
          s(" For most product teams, RAG wins on freshness, cost, and explainability — fine-tuning wins on style, format, and deeply internalised behaviour."),
        ],
        [
          s("The name encodes the mechanism: Retrieval first, Generation second. "),
          x(
            "You don't ask the model to recall a fact from weights. You retrieve relevant passages from an external store and present them as context — 'given these sources, answer this question.'",
            "This shifts the failure mode from silent hallucination to 'wrong source retrieved' or 'right source, wrong synthesis' — both debuggable with logging, evals, and citations.",
          ),
          s(" PMs who understand this shift build citation UX and retrieval dashboards instead of blaming 'the AI' generically."),
        ],
        [
          s("RAG became the dominant enterprise pattern because it maps to how organisations already think about knowledge. "),
          x(
            "Legal teams want answers tied to clauses. Support teams want answers tied to help articles. Compliance wants audit trails. RAG's retrieve-then-cite loop satisfies those requirements in ways pure prompting cannot.",
            "It also decouples knowledge updates from model releases: update the index tonight, better answers tomorrow — no fine-tune job, no deployment risk.",
          ),
          s(" The tradeoff is engineering complexity: you now operate a search system alongside an LLM, and search quality becomes product quality."),
        ],
      ],
      examples: [
        {
          title: "Bloomberg GPT vs Bloomberg Assistant — parametric vs RAG",
          body: "Bloomberg trained a domain-specific model (BloombergGPT) for financial language — parametric knowledge. Their assistant products also ground answers in live market data and news via retrieval. The lesson for PMs: even teams with custom models use RAG for freshness. Your startup almost certainly needs RAG before it needs a bespoke foundation model.",
        },
        {
          title: "Klarna's support AI — RAG over policy docs",
          body: "Klarna's widely discussed AI assistant handles customer queries grounded in policy and procedure documentation — classic RAG. When refund rules change, the ops team updates docs and re-indexes; the model doesn't need retraining. PMs own the freshness SLA: how quickly do policy changes reach the index? That's a product commitment, not an infra detail.",
        },
        {
          title: "The 'just use ChatGPT' pilot that failed procurement",
          body: "An enterprise tried pointing employees at vanilla ChatGPT for internal HR questions. Security blocked it (data leaves the perimeter); quality failed it (model doesn't know company PTO policy). The approved replacement was RAG over the HR handbook with tenant isolation. The PM win wasn't a smarter model — it was architecture that satisfied legal and actually answered from approved sources.",
        },
      ],
    }),
    insertDiagram(section12, {
      kind: "diagram",
      id: "pb4-rag-pipeline",
      type: "flow",
      title: "The RAG pipeline end-to-end",
      caption:
        "Offline indexing (ingest → chunk → embed → store) runs when knowledge changes. Online query (embed query → retrieve → assemble context → generate) runs on every user question. Optional stages — hybrid search, rerank, query rewrite — plug in before assembly.",
    }),
    buildSection({
      number: "1.3",
      title: "Indexing phase",
      subtitle: "The offline work that determines whether retrieval can ever succeed",
      take: "Indexing transforms raw knowledge into a searchable vector index: parse documents, chunk them into retrieval units, embed each chunk, and store vectors with metadata (source, date, permissions). Garbage in at indexing time guarantees garbage out at query time — no retrieval trick recovers from bad chunks.",
      why: "Most RAG quality problems are diagnosed at query time but born at index time. PMs who invest in indexing observability — chunk counts, embedding failures, stale docs — prevent months of prompt-engineering theatre.",
      paragraphs: [
        [
          s("Ingestion is where enterprise RAG projects spend their first quarter. "),
          x(
            "Connectors pull from Confluence, Google Drive, Slack, Salesforce, ticket systems — each with different auth, rate limits, and document formats.",
            "A PDF with scanned images needs OCR. A Slack thread needs threading logic. A permissions model must flow from source system to index (user A shouldn't retrieve user B's docs).",
          ),
          s(" PMs scope connector coverage as a feature matrix: which sources, which freshness, which permission model — not 'connect everything.'"),
        ],
        [
          s("Chunking splits documents into passages sized for retrieval. "),
          x(
            "Too large: the embedding averages away the specific sentence that answers the question. Too small: context fragments and the LLM lacks surrounding nuance.",
            "Chunk boundaries matter: splitting mid-table, mid-procedure, or mid-definition produces chunks that retrieve well but read nonsense. Chapter 3 covers strategies; the PM takeaway is that chunking is a product quality decision.",
          ),
          s(" Re-indexing after chunking policy changes is a planned migration, not a hotfix — budget eng time whenever you revise chunk strategy."),
        ],
        [
          s("Embedding and storage complete the offline loop. "),
          x(
            "An embedding model converts each chunk to a dense vector (typically 384–3072 dimensions). Vectors land in a vector database with metadata for filtering and citation.",
            "Embedding model choice locks semantic meaning: switching models usually requires re-embedding the entire corpus. PMs should treat embedding model changes like database migrations — with rollback plans and eval gates.",
          ),
          s(" Index freshness SLAs belong in the PRD: 'policy docs within 15 minutes of publish, Slack within 24 hours' sets engineering priorities visibly."),
        ],
      ],
      examples: [
        {
          title: "Notion AI — indexing user workspaces, not the public internet",
          body: "Notion AI retrieves from the user's own workspace. Indexing must respect page permissions, handle nested blocks, and update when pages edit. PM tradeoff: index on every keystroke (expensive, fresh) vs batch (cheap, stale). Their product promise of 'AI that knows your docs' is entirely an indexing promise.",
        },
        {
          title: "Airbnb's early knowledge bot — connector backlog as roadmap",
          body: "Internal knowledge projects often publish a 'source coverage' dashboard: % of support macros indexed, % of Confluence spaces connected, median doc age. PMs who surface this metric align stakeholders on why answers fail ('we haven't indexed the refunds space yet') instead of debating model temperature.",
        },
        {
          title: "Embedding migration at scale — the re-index weekend",
          body: "A fintech switched embedding models for better multilingual support. 4M chunks, 18-hour re-embed job, dual-index cutover with eval gates. PM owned the comms: feature flag per tenant, rollback if Precision@5 dropped. Treating indexing as a release train — not a background script — is what kept compliance comfortable.",
        },
      ],
    }),
    buildSection({
      number: "1.4",
      title: "Query phase",
      subtitle: "What happens in the milliseconds between user question and LLM call",
      take: "At query time the system embeds the user's question (or a rewritten variant), searches the vector index for nearest neighbours, optionally applies metadata filters and reranking, and returns a ranked shortlist of chunks. This phase is latency-sensitive and entirely separate from generation.",
      why: "Users blame 'the AI' for slow responses, but retrieval often consumes 30–70% of p95 latency. PMs who separate retrieval SLOs from generation SLOs can optimise and tier features without mystery regressions.",
      paragraphs: [
        [
          s("Query embedding must match index embedding. "),
          x(
            "The same model (and model version) that embedded the corpus must embed the query. Mixing models breaks semantic space — like searching a French index with English query vectors.",
            "Production systems version embedding models explicitly: index_v3_bge_large, query_v3_bge_large. Deploying query_v4 against index_v3 without re-embedding is a silent quality collapse.",
          ),
          s(" PMs should ask 'what happens when we upgrade the embedding model?' on every vendor eval."),
        ],
        [
          s("Similarity search returns candidates, not answers. "),
          x(
            "Vector search finds chunks whose embeddings are close to the query embedding in cosine distance or dot product. 'Close' means semantically similar — not necessarily factually relevant.",
            "Top-k (often 5–50) and similarity thresholds are product knobs. Low k misses context; high k drowns the LLM in noise. Thresholds below 0.7 cosine (model-dependent) often admit irrelevant chunks.",
          ),
          s(" Logging retrieved chunk IDs and scores per query is the minimum observability bar for any RAG product."),
        ],
        [
          s("Metadata filters narrow the search space before vectors compete. "),
          x(
            "Tenant ID, product line, document type, date range, access level — filters applied pre-search shrink the corpus from millions to thousands.",
            "Pre-filtering is how multi-tenant SaaS keeps Customer A from retrieving Customer B's data. It's also how 'search only in Policies, not in Slack' product UX maps to architecture.",
          ),
          s(" PMs define filter UX ('search this folder', 'last 90 days only') as retrieval requirements, not UI polish."),
        ],
      ],
      examples: [
        {
          title: "Shopify Sidekick — tenant-scoped retrieval by default",
          body: "Merchant-facing AI must never retrieve another merchant's data. Query phase always includes store_id metadata filter before vector search. PMs treat filter omission as a P0 security bug, not an edge case — because embedding similarity alone has no concept of 'this doc belongs to store 4829.'",
        },
        {
          title: "Latency breakdown in a support copilot",
          body: "A team instrumented query phase: embedding 40ms, vector search 80ms, metadata filter 10ms, rerank 200ms, assembly 15ms, LLM 1.2s. PM used the breakdown to justify deferring rerank to 'deep answer' mode while keeping quick replies under 500ms retrieval. Without phase-level metrics, they'd have argued about 'the model being slow.'",
        },
        {
          title: "Query rewrite A/B — 'refund' vs 'money back for annual subscription'",
          body: "Users ask casually; docs use formal language. Query rewriting (LLM or rules) expands 'refund' to match policy vocabulary before embedding. A/B test showed 12-point Precision@3 lift on support queries. PM owned the rewrite prompt and the failure mode ('when rewrite is wrong, fall back to original query').",
        },
      ],
    }),
    buildSection({
      number: "1.5",
      title: "Context assembly",
      subtitle: "Turning retrieved chunks into a prompt the LLM can actually use",
      take: "Context assembly packs retrieved chunks into the LLM's context window: ordering, deduplication, truncation, source labelling, and token budgeting. It's the bridge between search results and generation — and the step where relevant evidence gets dropped silently.",
      why: "Teams obsess over retrieval recall but lose answers in assembly. If the right chunk is retrieved at rank 8 and your assembly only keeps top 5, users experience a retrieval failure that metrics report as a success.",
      paragraphs: [
        [
          s("Token budgeting is the hard constraint. "),
          x(
            "System prompt, conversation history, tool schemas, and retrieved context share one context window. A 128K model doesn't mean 128K tokens of docs — it means everything competes.",
            "Assembly must reserve tokens for the answer. Rule of thumb: retrieved context often gets 30–60% of available input budget; history and system instructions take the rest.",
          ),
          s(" PMs define max context per source and total retrieval budget in the PRD — same way they'd cap attachment size in email."),
        ],
        [
          s("Ordering and labelling affect synthesis quality. "),
          x(
            "Chunks presented first get disproportionate weight in LLM attention. Common pattern: sort by rerank score, label each with [Source: Policy Handbook §4.2, updated 2025-03-01].",
            "Deduplication merges overlapping chunks from the same parent doc. Without it, redundant paragraphs waste tokens and can bias the model toward repeated (possibly wrong) phrasing.",
          ),
          s(" Citation UX starts here: if assembly doesn't preserve source IDs, the frontend can't link answers to evidence."),
        ],
        [
          s("Overflow strategies define behaviour when retrieval exceeds budget. "),
          x(
            "Options: truncate lowest-ranked chunks, summarise chunks with a smaller model, retrieve fewer but rerank harder, or refuse ('too much context — narrow your question').",
            "Silent truncation of the highest-ranked chunk because it was long is a common bug. Length-aware assembly (fit the most evidence under budget) is a deliberate product choice.",
          ),
          s(" PMs should specify overflow behaviour in user-visible terms: 'we'll search more but show the top 3 sources' vs 'we'll summarise 10 sources into one paragraph.'"),
        ],
      ],
      examples: [
        {
          title: "Harvey (legal AI) — source-labelled assembly for trust",
          body: "Legal users won't trust an answer without pinpoint citations. Assembly injects clause IDs and page references into every chunk header before generation. PM requirement: every sentence in the output must map to a labelled source block in the prompt. That constraint shaped the entire assembly design — not an afterthought in the UI.",
        },
        {
          title: "ChatGPT file upload — assembly as the user-facing limit",
          body: "When users upload files, the product enforces file count and size limits — those are assembly and indexing constraints dressed as UX. PMs who explain 'you can attach 10 files because that's our context budget' set clearer expectations than opaque 'something went wrong' errors.",
        },
        {
          title: "Deduplication win in a wiki copilot",
          body: "Overlapping 512-token chunks from the same Confluence page appeared 3× in top-10 retrieval, consuming 1,800 tokens of a 2,000-token retrieval budget. Assembly deduped by page_id + heading, freed space for a second document, and answer quality jumped in blind evals. One line of logic; PM identified the issue from 'why does it keep quoting the same paragraph three times?'",
        },
      ],
    }),
    buildSection({
      number: "1.6",
      title: "Naive vs advanced RAG",
      subtitle: "From retrieve-then-generate to multi-stage pipelines that actually ship",
      take: "Naive RAG: embed query, fetch top-k, stuff into prompt, generate. Advanced RAG adds stages — query transformation, hybrid retrieval, reranking, iterative retrieval, and self-correction — each targeting a specific failure mode of the naive baseline.",
      why: "Teams either over-engineer (six stages before validating naive) or under-engineer (naive in production on a 500K-chunk corpus). The PM job is to match pipeline complexity to corpus size, stakes, and eval data.",
      paragraphs: [
        [
          s("Naive RAG is the right MVP for small, clean corpora. "),
          x(
            "Under ~5,000 well-structured chunks, top-5 vector search + decent chunking often achieves acceptable Precision@3 without hybrid search or rerank.",
            "Naive fails predictably at scale: semantic collision (similar but wrong docs), vocabulary mismatch (user says 'billing', doc says 'invoicing'), and multi-hop questions (answer requires two docs).",
          ),
          s(" Ship naive first with evals; add stages when metrics or user complaints identify a specific failure mode."),
        ],
        [
          s("Advanced patterns map to failure modes. "),
          x(
            "Hybrid search fixes keyword mismatch. Reranking fixes 'right doc at rank 40'. Query decomposition fixes multi-hop. HyDE (hypothetical document embedding) fixes short queries. Parent-child chunking fixes 'right section, wrong granularity.",
            "Each stage adds latency and ops burden. The advanced pipeline is a toolkit, not a checklist.",
          ),
          s(" PMs prioritise stages by eval gap: if Recall@50 is high but Precision@3 is low, rerank before HyDE."),
        ],
        [
          s("Agentic RAG blurs the line between retrieval and reasoning. "),
          x(
            "The LLM decides what to retrieve, iterates, and may call tools — retrieval becomes a loop, not a single shot.",
            "Higher capability, higher cost and failure surface (infinite retrieve loops, tool misuse). Justified for research assistants; often overkill for FAQ bots.",
          ),
          s(" Frame agentic RAG as a product tier ('research mode') with explicit latency and cost expectations."),
        ],
      ],
      examples: [
        {
          title: "Pinecone's RAG maturity model — stages as a roadmap",
          body: "Vendor maturity models (naive → advanced → agentic) give PMs a sequencing framework. A Series B startup staged their roadmap: Q1 naive + evals, Q2 hybrid + metadata filters, Q3 rerank, Q4 query rewrite. Each gate required Precision@3 improvement in offline eval before the next stage shipped.",
        },
        {
          title: "Financial compliance bot — hybrid before rerank",
          body: "Compliance queries often include exact identifiers: 'Regulation 12 CFR 1026.43'. Pure embedding search missed exact matches; BM25 + vector hybrid lifted Recall@10 from 0.71 to 0.94. PM chose hybrid first because failure mode was 'can't find the regulation number' — not 'wrong doc ranked too low.'",
        },
        {
          title: "Agentic RAG rolled back — cost and latency",
          body: "A research tool let the LLM retrieve iteratively. Power users loved it; median query cost 4× and p95 latency 45s. PM introduced 'quick answer' (naive, 2s) vs 'deep research' (agentic, 30s+) as explicit modes. Complexity became a user choice with clear tradeoffs — not the default path.",
        },
      ],
    }),
    buildSection({
      number: "1.7",
      title: "When RAG fails",
      subtitle: "Failure modes you will hit in production — and what users actually see",
      take: "RAG fails in four buckets: retrieval miss (right doc not found), retrieval noise (wrong doc ranked high), synthesis error (right evidence, wrong answer), and stale index (right doc was true yesterday). Each bucket has different owners and fixes.",
      why: "Without a failure taxonomy, every bug becomes 'prompt tuning' or 'try GPT-5.' PMs who classify incidents by bucket ship fixes in days instead of quarters.",
      paragraphs: [
        [
          s("Retrieval miss feels like 'the AI doesn't know.' "),
          x(
            "Causes: chunk too large/small, embedding model mismatch, missing docs in index, overly aggressive metadata filter, query vocabulary gap.",
            "User symptom: 'I know this doc exists but it says it can't find it.' Fix: indexing coverage, chunking, hybrid search — not temperature.",
          ),
          s(" Run periodic 'golden doc' tests: for 50 canonical questions, assert the known answer doc appears in top-10."),
        ],
        [
          s("Retrieval noise feels like 'it cited the wrong source.' "),
          x(
            "Causes: semantic similarity without relevance, duplicate/near-duplicate docs, outdated version ranked above current policy.",
            "User symptom: confident answer with a citation that doesn't support the claim. Fix: rerank, freshness boosts, version metadata, dedup in assembly.",
          ),
          s(" Citation-click-through rate is a leading product metric for retrieval noise — users who click citations and immediately bounce are telling you retrieval failed."),
        ],
        [
          s("Synthesis error feels like hallucination but isn't. "),
          x(
            "The retrieved chunk contains the answer; the LLM misreads, combines incompatible sources, or ignores a negation. Causes: conflicting chunks in context, weak citation enforcement, chunk missing critical qualifier.",
            "Fix: fewer chunks, stronger 'answer only from sources' prompting, structured output with per-claim citations, or smaller context to reduce distraction.",
          ),
          s(" If eval shows high retrieval precision but low answer accuracy, you're in synthesis territory — generation and prompt design, not search."),
        ],
      ],
      examples: [
        {
          title: "Stale policy incident — right retrieval, wrong world",
          body: "A telecom bot cited the 2023 refund policy; HR had published 2024 rules but indexing lagged 9 days. Retrieval worked perfectly — it found the highest-similarity doc, which was obsolete. PM fix: freshness metadata in UI ('sources from last 7 days'), indexing SLA, and boost recency in ranking. Not a model swap.",
        },
        {
          title: "Conflicting chunks — synthesis nightmare",
          body: "Two chunks: 'Annual plans are refundable within 30 days' and 'Annual plans are non-refundable.' Both retrieved; LLM blended them into a wrong summary. PM fix: conflict detection in assembly (flag contradictory sources, ask user to clarify), plus single-source-of-truth tagging in the CMS.",
        },
        {
          title: "The empty retrieval honesty gap",
          body: "When retrieval returns nothing above threshold, some products still generate — hallucinating freely. Better products say 'I couldn't find this in your docs' and route to human support. PM decision: false negative (admit ignorance) vs false positive (confident wrong answer). Enterprise buyers overwhelmingly prefer the former.",
        },
      ],
    }),
    buildSection({
      number: "1.8",
      title: "RAG vs fine-tuning revisited",
      subtitle: "The decision framework most teams get backwards",
      take: "RAG injects knowledge at inference time; fine-tuning adjusts model behaviour and style at training time. They are complements, not competitors. Use RAG for facts that change; use fine-tuning for how the model should speak, format, and reason within a domain.",
      why: "Teams fine-tune to 'teach the model our docs' and wonder why answers are stale. Teams RAG everything and wonder why tone is generic. The revisit is worth doing because the wrong choice wastes months and six-figure GPU bills.",
      paragraphs: [
        [
          s("Fine-tuning is a poor knowledge database. "),
          x(
            "Weights encode patterns statistically — updating a fact means retraining or risky in-context patching. Fine-tuned 'knowledge' is hard to audit, hard to cite, and drifts stale silently.",
            "RAG knowledge is explicit: chunk text in the index, citeable, deletable, versioned. Compliance and legal strongly prefer RAG for factual grounding.",
          ),
          s(" Fine-tune when you need consistent JSON schema, brand voice, or domain reasoning patterns — not when you need Tuesday's price list."),
        ],
        [
          s("RAG is a poor substitute for learned behaviour. "),
          x(
            "Long system prompts that say 'always respond in this format' compete with retrieved context for tokens and are inconsistently followed.",
            "Fine-tuning (or preference tuning with DPO) bakes format and tone into weights — more reliable than 2,000 tokens of instructions on every call.",
          ),
          s(" Hybrid stack is common: fine-tuned model for voice + RAG for facts. PMs scope both lines on the architecture diagram."),
        ],
        [
          s("Cost and ops profiles differ sharply. "),
          x(
            "RAG: ongoing index ops, retrieval infra, embedding costs — scales with corpus and query volume. Fine-tune: upfront GPU, eval harness, retrain cadence — scales with model size and update frequency.",
            "Rule of thumb: knowledge updates weekly or faster → RAG. Behaviour stable for quarters → fine-tune. Both change → you need both, or accept tradeoffs.",
          ),
          s(" PMs model 12-month TCO for each path before approving a fine-tune project — not just the training job quote."),
        ],
      ],
      examples: [
        {
          title: "Duolingo — fine-tune for pedagogy, not for word lists",
          body: "Duolingo fine-tunes for teaching style and exercise format; lesson content and vocabulary live in structured data surfaced at runtime — closer to RAG/tool-use than 'fine-tune on all French words.' PM lesson: fine-tune the how, retrieve or rule-engine the what.",
        },
        {
          title: "Support bot fine-tune regret",
          body: "A startup fine-tuned on 10K historical tickets to 'learn the answers.' Model memorised outdated resolutions; couldn't cite sources. Reverted to RAG over current KB + light fine-tune for tone only. Six weeks and $40K later, PM wrote the decision matrix that should have existed at kickoff.",
        },
        {
          title: "Harvey + domain fine-tune + legal RAG",
          body: "Legal AI products often combine domain-adapted models with RAG over matter-specific documents. Fine-tuning carries legal reasoning patterns; RAG carries the client's actual contracts. PMs who ask 'which part of this answer must be citeable?' get the architecture right on the first pass.",
        },
      ],
    }),
    buildSection({
      number: "1.9",
      title: "PM decision lens: RAG as product feature",
      subtitle: "Scoping, shipping, and operating retrieval-grounded AI users will trust",
      take: "RAG is not a backend integration — it's a product surface: what sources users trust, how citations appear, what happens when retrieval fails, and how fresh the knowledge is. PMs who own those UX contracts ship features; PMs who delegate 'RAG to eng' ship demos.",
      why: "The chapter's through-line is that RAG quality is systems quality. This section turns architecture into a checklist you can put in a PRD and defend in roadmap review.",
      paragraphs: [
        [
          s("Start every RAG feature with a source-of-truth map. "),
          x(
            "List document types, owners, update cadence, permission model, and coverage target (e.g. '95% of Tier-1 help articles indexed').",
            "If marketing owns the pricing page and eng owns the API docs, who gets paged when retrieval cites wrong pricing? Ownership must be explicit before launch.",
          ),
          s(" Source-of-truth maps also define eval labels — you can't measure accuracy without knowing where truth lives."),
        ],
        [
          s("Define user-visible contracts for retrieval behaviour. "),
          x(
            "Citations: inline links vs footnotes vs hover. Empty retrieval: apologise vs guess. Stale sources: show dates vs hide. Scope: 'search all docs' vs 'this project only'.",
            "These are product decisions with legal implications. Enterprise buyers ask about them in security review; consumers feel them as trust or distrust.",
          ),
          s(" Write the failure copy before launch: 'I couldn't find an answer in your connected sources' is a feature, not an embarrassment."),
        ],
        [
          s("Instrument the pipeline per stage and review weekly. "),
          x(
            "Metrics: indexing lag, retrieval hit rate, Precision@k on golden set, citation CTR, thumbs-down by failure bucket, p95 latency split (retrieve vs generate), cost per query.",
            "Weekly review: top 10 failed queries, bucketed. That meeting is where roadmap priorities for chunking, hybrid, or rerank get set — from evidence, not hype.",
          ),
          s(" RAG products mature when PMs run them like search products with an LLM on top — because that's what they are."),
        ],
      ],
      examples: [
        {
          title: "The RAG PRD one-pager",
          body: "Mature teams include: corpus scope, chunking policy, embedding model, k and token budget, filter rules, citation format, empty-retrieval behaviour, freshness SLA, eval dataset link, and rollback criteria. Reviewers approve in one meeting. Missing any field guarantees a mid-pilot surprise.",
        },
        {
          title: "Intercom Fin — citations as the product",
          body: "Fin shows sources prominently and routes low-confidence answers to humans. PM bet: enterprise buyers care more about traceability than fluency. Retrieval and citation UX were sprint 1; model upgrades were sprint 4. Architecture followed trust requirements, not the reverse.",
        },
        {
          title: "Quarterly 'index health' business review",
          body: "A B2B copilot added index health to the QBR: docs indexed vs total, median age, connector uptime, re-embed status. Executives stopped asking 'can we use GPT-5 yet?' and started asking 'why is the Salesforce connector 3 days behind?' — the right conversation for RAG maturity.",
        },
      ],
    }),
  ],
  quiz: [
    {
      q: "A user asks about yesterday's pricing change. The model gives last month's price confidently. The pricing page IS in the index but was re-indexed 6 days ago. Which failure bucket?",
      options: [
        "Retrieval miss — the doc wasn't found.",
        "Stale index — retrieval worked but knowledge is outdated.",
        "Synthesis error — the LLM misread the chunk.",
        "Embedding model mismatch.",
      ],
      correct: 1,
      correctFeedback:
        "Right. The doc exists and may even retrieve correctly — but the indexed content is stale. Fix indexing freshness SLAs and recency ranking, not the prompt.",
      wrongFeedback:
        "If the doc is in the index but content is old, that's a freshness/indexing problem. Re-read section 1.7 on stale index failures.",
    },
    {
      q: "Your eval shows Recall@50 of 0.96 but Precision@3 of 0.52. Where should you invest first?",
      options: [
        "Fine-tune the LLM on your docs.",
        "Improve context assembly and reranking — relevant docs are in the shortlist but not reaching the top slots.",
        "Switch to a larger context window model.",
        "Add more documents to the corpus.",
      ],
      correct: 1,
      correctFeedback:
        "High recall at 50 with low precision at 3 means retrieval finds material but ranks it poorly at the top — reranking, hybrid tuning, or assembly cutoffs address this. Fine-tuning won't fix ranking.",
      wrongFeedback:
        "Recall@50 is already strong. The gap is precision at low k — what actually reaches the prompt. Re-read sections 1.5 and 1.6.",
    },
    {
      q: "When is naive RAG (embed query → top-k → generate) most appropriate?",
      options: [
        "Always — it's best practice.",
        "Never — production always needs hybrid search and reranking.",
        "Small, clean corpora where eval shows acceptable Precision@3 without added stages.",
        "Only for prototypes you plan to throw away.",
      ],
      correct: 2,
      correctFeedback:
        "Naive RAG is a valid production choice at small scale with good eval numbers. Add complexity when metrics or user complaints justify each stage.",
      wrongFeedback:
        "Naive RAG isn't throwaway by definition. Match pipeline complexity to corpus size and eval data. Re-read section 1.6.",
    },
    {
      kind: "categorize",
      q: "Sort each item into the correct RAG pipeline phase.",
      categories: ["Indexing (offline)", "Query (online)"],
      items: [
        { text: "Chunking policy applied to new Confluence pages.", category: 0 },
        { text: "Embedding the user's question at request time.", category: 1 },
        { text: "Storing vectors and metadata in Pinecone.", category: 0 },
        { text: "Metadata filter by tenant_id before similarity search.", category: 1 },
        { text: "OCR pass on uploaded PDF scans.", category: 0 },
        { text: "Deduplicating overlapping chunks before the LLM call.", category: 1 },
      ],
      correctFeedback:
        "Right. Indexing prepares the knowledge base; query-time work retrieves and assembles. Assembly happens online even though it feeds generation.",
      wrongFeedback:
        "If it runs when docs change, it's indexing. If it runs per user question, it's query (including assembly). Re-read sections 1.2–1.5.",
    },
    {
      kind: "order",
      q: "Put the core online RAG query path in correct execution order.",
      prompt: "Drag to arrange first step (top) to last (bottom).",
      items: [
        "Embed the user query (or rewritten variant).",
        "Retrieve top-N chunks from the vector index.",
        "Assemble selected chunks into the prompt with source labels.",
        "Call the LLM to generate a grounded answer.",
      ],
      correctFeedback:
        "Exactly. Retrieve before assemble, assemble before generate. Optional stages (rerank, hybrid fusion) sit between retrieve and assemble.",
      wrongFeedback:
        "You can't assemble context before retrieval, or generate before context is packed. Re-read section 1.2.",
    },
    {
      q: "Your legal team requires every factual claim to be citeable and auditable. Which architecture emphasis is correct?",
      options: [
        "Fine-tune on all contracts so the model 'knows' them.",
        "RAG with explicit source-labelled chunks and citation UX — fine-tune only for tone/format if needed.",
        "Longer system prompt listing all policies.",
        "Higher temperature for more natural answers.",
      ],
      correct: 1,
      correctFeedback:
        "RAG provides explicit, citeable evidence in the prompt. Fine-tuning alone cannot produce auditable citations. Hybrid (RAG + light fine-tune) is common in legal AI.",
      wrongFeedback:
        "Fine-tuned weights aren't citeable or easily auditable. RAG's retrieve-and-label loop satisfies legal traceability. Re-read section 1.8.",
    },
  ],
});
