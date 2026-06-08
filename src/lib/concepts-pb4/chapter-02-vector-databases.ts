import { buildChapter, buildSection, s, x } from "../concepts-pb4-helpers";

export const chapter02VectorDatabases = buildChapter({
  slug: "pb4-vector-databases",
  number: 2,
  shortTitle: "Vector Databases",
  title: "Vector Databases",
  readingMinutes: 23,
  summary:
    "The specialised index that makes million-scale semantic search possible — and the vendor choice that locks in your RAG economics",
  keyTakeaway:
    "Vector databases store embeddings and answer approximate nearest-neighbour queries at scale. They are not magic — they trade exactness for speed, and the PM-relevant decisions are metadata filtering, hybrid search support, and total cost of ownership at your query volume.",
  pmCallout:
    "As a PM: your vector DB choice is a 18-month commitment. Ask about filter performance, re-embedding migrations, and the bill at 10M queries/month before you let eng pick the shiniest benchmark.",
  sections: [
    buildSection({
      number: "2.1",
      title: "What is a vector database",
      subtitle: "Purpose-built storage for embeddings and similarity search",
      take: "A vector database stores high-dimensional embedding vectors with associated metadata and returns the nearest neighbours to a query vector in milliseconds — even across millions or billions of entries. It is to RAG what a search engine is to the web.",
      why: "You cannot brute-force cosine similarity over 5 million chunks on every user query. Vector DBs exist because RAG needs sub-second retrieval at scale, and general-purpose SQL databases were not built for 768-dimensional similarity search.",
      paragraphs: [
        [
          s("Traditional databases index exact values: user_id = 4829, created_at > '2025-01-01'. "),
          x(
            "Vector databases index by geometric proximity in embedding space: 'which stored vectors are closest to this query vector?'",
            "Closest means highest cosine similarity or smallest L2 distance — mathematical proxies for semantic relatedness, not guaranteed relevance.",
          ),
          s(" PMs should internalise that vector search is similarity search, not truth search — ranking quality depends on embeddings, chunking, and optional reranking upstream and downstream."),
        ],
        [
          s("A vector DB row is more than a vector. "),
          x(
            "Production entries store: the embedding, the original text (or pointer to blob storage), and metadata — source URL, doc ID, tenant, timestamp, access level, chunk index.",
            "Metadata enables pre-filtering ('only search this customer's docs'), citation ('link back to source'), and freshness boosts. Vectors without metadata produce answers you can't attribute or permission.",
          ),
          s(" Schema design for metadata is a PM-facing decision when it maps to product filters and security boundaries."),
        ],
        [
          s("Vector DBs sit in the RAG stack between embedding models and the LLM. "),
          x(
            "Embedding model choice defines the vector space. Vector DB choice defines query latency, scale ceiling, filter performance, and ops model.",
            "Swapping vector DBs is painful but possible. Swapping embedding models without re-embedding is not. PMs prioritise embedding decisions first, vector DB second.",
          ),
          s(" Many teams start with pgvector in Postgres (good enough to ~1M vectors) and migrate to specialised stores when latency or scale demands it."),
        ],
      ],
      examples: [
        {
          title: "Pinecone's positioning — vector DB as managed primitive",
          body: "Pinecone popularised 'vector database' as a category distinct from 'Postgres with a vector column.' PM lesson: specialised stores sell speed-to-ship and ops abstraction. Teams with <500K chunks and existing Postgres often skip them initially; teams hitting p95 >200ms on pgvector migrate.",
        },
        {
          title: "Shopify's search evolution — when Postgres stops being enough",
          body: "Many startups index in pgvector until query latency or write throughput breaks SLOs — often around 1–5M vectors with heavy filter queries. The migration trigger is a metrics dashboard moment, not a blog post. PMs should define the latency SLO that forces the migration conversation before you're in crisis.",
        },
        {
          title: "Weaviate's object model — vectors + metadata as first-class",
          body: "Weaviate treats each entry as an 'object' with properties and vector modules. PMs evaluating vendors should compare metadata schemas to product filter requirements — 'can we filter by product_line AND region AND doc_type in one query under 50ms?' — not just ANN benchmark leaderboard scores.",
        },
      ],
    }),
    buildSection({
      number: "2.2",
      title: "How vector search works (ANN)",
      subtitle: "Approximate nearest neighbours — the speed-accuracy tradeoff inside every query",
      take: "Exact nearest-neighbour search compares the query to every vector — O(n) and too slow at scale. Approximate nearest neighbour (ANN) algorithms build graph or cluster structures that find likely matches in O(log n) time, trading a small recall loss for 100–1000× speedup.",
      why: "When eng says 'recall@10 dropped 2% after the index rebuild,' that's the ANN tradeoff surfacing. PMs who understand ANN can interpret eval regressions and avoid panic-switching vendors over tunable parameters.",
      paragraphs: [
        [
          s("Brute force is the quality ceiling. "),
          x(
            "Compute similarity between the query vector and every stored vector; sort; return top-k. Perfect recall, unacceptable latency at millions of vectors.",
            "On 5M vectors × 768 dimensions, brute force is billions of multiply-adds per query. ANN exists because nobody waits 30 seconds for search.",
          ),
          s(" ANN is the default in every production vector DB. 'Approximate' is a feature, not a bug — if you tune and measure it."),
        ],
        [
          s("ANN algorithms navigate embedding space intelligently. "),
          x(
            "HNSW (Hierarchical Navigable Small World) builds a multi-layer graph: search starts on a sparse top layer and refines downward. IVF (Inverted File Index) clusters vectors and searches only the nearest clusters.",
            "Both skip large regions of the space. Usually the true nearest neighbours are in the searched region; sometimes they're not — that's approximate recall loss.",
          ),
          s(" Recall@k on your golden query set is how you measure whether ANN settings are too aggressive for your product."),
        ],
        [
          s("Query parameters tune the speed-recall knob. "),
          x(
            "HNSW: ef_search (higher = more accurate, slower). IVF: nprobe (more clusters searched = better recall, slower).",
            "Engineering can often recover a 3% recall drop by raising ef_search 20% with 15ms added latency — cheaper than re-embedding or switching DBs.",
          ),
          s(" PMs belong in the conversation when latency SLO and quality SLO conflict — it's a product tradeoff, not a pure algo tuning exercise."),
        ],
      ],
      examples: [
        {
          title: "ANN recall audit before launch",
          body: "A healthtech RAG team ran brute-force vs HNSW on 2,000 labelled queries before launch. HNSW recall@10 was 0.97 vs brute-force 1.0 — acceptable. They documented ef_search settings in the runbook so on-call wouldn't 'optimise' latency and silently drop recall. PM signed off on the 3% tradeoff with eyes open.",
        },
        {
          title: "Qdrant's configurable search — product-tiered accuracy",
          body: "Some teams expose 'fast search' (lower ef) vs 'thorough search' (higher ef) as product modes — same index, different ANN parameters. PM monetises or UX-packages a knob that already exists in the engine.",
        },
        {
          title: "The regression that wasn't the embedding model",
          body: "Answer quality dropped after infra 'optimised' the index. Root cause: nprobe cut from 16 to 4 for cost savings. Recall@5 fell from 0.91 to 0.78. Rollback fixed it in an hour. PM lesson: index config changes are releases — with eval gates.",
        },
      ],
    }),
    buildSection({
      number: "2.3",
      title: "Major vector DBs compared",
      subtitle: "Pinecone, Weaviate, Qdrant, Milvus, pgvector — different bets on ops, scale, and features",
      take: "No single vector DB wins every workload. Managed SaaS (Pinecone) optimises time-to-ship. Open-source self-hosted (Qdrant, Milvus, Weaviate) optimises control and unit economics at scale. pgvector optimises 'we already run Postgres.'",
      why: "Vendor selection happens early and migrates painfully. PMs who compare on filter performance, hybrid search, pricing model, and team ops capacity — not just HNSW benchmarks — avoid a re-platforming project in year two.",
      paragraphs: [
        [
          s("Pinecone: managed, serverless options, enterprise GTM. "),
          x(
            "Strengths: minimal ops, predictable SaaS, good docs, fast pilot. Weaknesses: cost at very high scale, less control over index internals, data leaves your VPC unless enterprise contract.",
            "Best fit: teams shipping RAG in weeks, moderate scale, limited platform eng. PM watch: per-query and per-storage pricing at projected 12-month volume.",
          ),
          s(" Pinecone is often the right first production choice — not always the right at-scale choice."),
        ],
        [
          s("Qdrant, Weaviate, Milvus: open-source with managed offerings. "),
          x(
            "Qdrant: Rust, strong filtering, good performance. Weaviate: GraphQL API, modular vectorisers, hybrid search built-in. Milvus: scale-out for billion-vector workloads, more ops complexity.",
            "All three support self-hosting on Kubernetes or managed cloud. Best fit: teams with platform eng, data residency requirements, or cost sensitivity above ~10M vectors.",
          ),
          s(" PM question: 'Do we have someone who will pager for the index at 3am?' If no, pay for managed."),
        ],
        [
          s("pgvector: Postgres extension, lowest friction start. "),
          x(
            "Strengths: one database for app data + vectors, familiar ops, ACID transactions. Weaknesses: ANN performance plateaus, limited hybrid search primitives, index build times on large tables.",
            "Best fit: MVPs, <1M vectors, teams already on Postgres. Migration trigger: p95 search latency or filter-query performance breaks SLO.",
          ),
          s(" Starting on pgvector is rational; pretending you'll never migrate is not."),
        ],
      ],
      examples: [
        {
          title: "Notion-scale vs startup-scale vendor paths",
          body: "A 20-person startup on Pinecone serverless: $400/month, zero ops. Same workload self-hosted on Qdrant at 50M queries/month: lower infra bill, two eng-days/month ops. PM models both at 6× and 12× volume — crossover point drives the decision, not ideology.",
        },
        {
          title: "Data residency — EU health data on self-hosted Weaviate",
          body: "A German health startup couldn't use US-only SaaS. Self-hosted Weaviate in Frankfurt satisfied GDPR and customer security questionnaires. PM time-to-ship was slower, but deal velocity depended on residency — non-negotiable filter in vendor selection.",
        },
        {
          title: "pgvector → Qdrant migration post-mortem",
          body: "Team hit 2.3M chunks, filtered queries p95 450ms on pgvector. Migrated to Qdrant in three sprints: dual-write, eval parity gate, cutover. PM comms to customers: zero downtime, 4× search speedup. Migration cost was planned; surprise would have been a fire drill.",
        },
      ],
    }),
    buildSection({
      number: "2.4",
      title: "Indexing algorithms (HNSW, IVF, FAISS)",
      subtitle: "What's inside the box — and what your eng team is actually tuning",
      take: "HNSW, IVF, and FAISS are the building blocks of vector indexing. HNSW is the default for interactive search. IVF scales to huge corpora with cluster pruning. FAISS is Meta's library — often embedded inside other systems rather than used directly by product teams.",
      why: "You won't implement these algorithms. You will hear them in incident reviews and vendor pitches. Knowing what each optimises for lets PMs ask sharp questions in architecture reviews.",
      paragraphs: [
        [
          s("HNSW builds a navigable graph over vectors. "),
          x(
            "Vectors are nodes; edges connect similar neighbours across layers. Search enters at the top sparse layer and greedily descends toward the query.",
            "Pros: excellent recall-latency balance for interactive search. Cons: memory-heavy (stores graph edges), slower index builds, painful updates on high-churn corpora.",
          ),
          s(" Default choice for most RAG products under ~50M vectors with batch-oriented index updates."),
        ],
        [
          s("IVF partitions space into clusters (voronoi cells). "),
          x(
            "At query time, find the nearest cluster centroids, search only vectors inside those cells. nprobe controls how many cells to open.",
            "Pros: memory-efficient at billion scale. Cons: recall depends on cluster quality; cold-start on new vectors needs reassignment.",
          ),
          s(" Common in Milvus and large-scale deployments where HNSW RAM costs dominate the bill."),
        ],
        [
          s("FAISS is a toolkit, not a product. "),
          x(
            "Meta's open-source library implements HNSW, IVF, PQ (product quantisation), and GPU-accelerated search. Pinecone, Weaviate, and others borrow concepts or benchmarks from FAISS.",
            "PM relevance: when a vendor says 'FAISS-class performance,' they're claiming algorithmic parity with industry-standard implementations — ask for recall@k on YOUR data, not MNIST benchmarks.",
          ),
          s(" Product quantisation (PQ) compresses vectors for memory savings at recall cost — relevant when eng proposes 'save 60% on RAM.'"),
        ],
      ],
      examples: [
        {
          title: "HNSW memory bill shock",
          body: "A team indexed 20M vectors on HNSW; RAM requirement exceeded budget by 3×. Switched to IVF-PQ compression: 70% memory reduction, recall@10 dropped from 0.96 to 0.91. PM accepted the tradeoff after blind user testing showed no significant quality change — but only because they measured, not assumed.",
        },
        {
          title: "Index rebuild window — HNSW on Black Friday",
          body: "HNSW full rebuilds on large indexes can take hours. A retail copilot scheduled rebuilds for Sunday 3am and froze index config during peak season. PM aligned marketing: 'AI search may lag new products by 24h during BFCM' — better than degraded search from mid-week rebuilds.",
        },
        {
          title: "FAISS benchmark scepticism",
          body: "A vendor claimed '2ms queries on 10M vectors.' Internal eval on the customer's chunky, filtered workload: 45ms p95. The gap was filter selectivity and embedding dimension — not the headline benchmark. PM now requires vendor eval on a 500-query sample before PO signing.",
        },
      ],
    }),
    buildSection({
      number: "2.5",
      title: "Metadata filtering",
      subtitle: "Pre-filter, post-filter, and why tenant isolation is non-negotiable",
      take: "Metadata filtering restricts vector search to a subset of the index — by tenant, date, doc type, permissions — before or after ANN search. Filter performance varies wildly by vendor and index design; bad filter strategy is how multi-tenant RAG leaks data or times out.",
      why: "Every enterprise RAG deal includes 'data isolation' in security review. Metadata filtering is the mechanism. PMs who understand pre vs post-filter tradeoffs catch architecture mistakes before pen testing does.",
      paragraphs: [
        [
          s("Pre-filtering applies constraints before ANN search. "),
          x(
            "Search only vectors where tenant_id = X AND doc_type = 'policy'. ANN runs on the filtered subset.",
            "Efficient when filters are selective (narrow to thousands of vectors). Slow or broken when filters match 80% of the index — some engines degrade to brute force within the filter.",
          ),
          s(" PMs document expected filter selectivity: 'typical query searches 2% of corpus' helps eng pick strategies."),
        ],
        [
          s("Post-filtering retrieves ANN candidates then drops non-matching metadata. "),
          x(
            "Retrieve top-100 from full index, keep items matching filter, hope enough survive. Fast when filters are loose; fails when filters are strict (top-100 might contain zero matches).",
            "Hybrid pattern: over-fetch (top-500) then post-filter to k — works but adds latency and can still miss if matches are rare in embedding space.",
          ),
          s(" Post-filter-only architectures fail enterprise isolation reviews — don't rely on them for security boundaries."),
        ],
        [
          s("Permission models must mirror source systems. "),
          x(
            "If a user loses access to a Google Drive folder, vectors from that folder must disappear from their search results — ideally within defined SLA.",
            "Implementation: metadata ACLs on each chunk, synced from source permissions on re-index. Stale ACLs are a security incident, not a quality nit.",
          ),
          s(" PM defines permission sync SLA alongside index freshness SLA in enterprise contracts."),
        ],
      ],
      examples: [
        {
          title: "Multi-tenant leak — post-filter wasn't enough",
          body: "A pilot used post-filter on global ANN results. Pen test found edge cases where competitor doc snippets appeared in embedding-space neighbours before filter dropped them — logged in telemetry. Fix: namespace per tenant (separate index partition). PM escalated to P0 before GA.",
        },
        {
          title: "Glean-style workspace filters as product UX",
          body: "Enterprise search exposes filters: 'Slack only', 'last 30 days', 'engineering wiki'. Each maps to metadata pre-filters. PM owns the filter taxonomy — it must match how users think about knowledge, not how eng stored JSON fields.",
        },
        {
          title: "Date-range filter on compliance queries",
          body: "Auditors ask 'what did policy say in Q3 2024?' Date metadata pre-filter restricts to docs effective in that range. Without it, current policy retrieves and the model confidently cites the wrong era. PM requirement for legal vertical — not a nice-to-have.",
        },
      ],
    }),
    buildSection({
      number: "2.6",
      title: "Hybrid search",
      subtitle: "Combining dense vectors with sparse keywords for the queries real users type",
      take: "Hybrid search runs dense vector similarity and sparse keyword search (BM25) in parallel, then fuses rankings — often with reciprocal rank fusion (RRF). It catches exact matches vectors miss and semantic matches keywords miss.",
      why: "Pure vector search fails on SKUs, regulation numbers, error codes, and rare proper nouns. Hybrid is the default upgrade when eval shows high recall on paraphrases but misses on exact-token queries.",
      paragraphs: [
        [
          s("Dense and sparse search fail in complementary ways. "),
          x(
            "Dense (vectors): great for paraphrase ('money back' ↔ 'refund policy'). Sparse (BM25): great for exact tokens ('ERR_CONNECTION_RESET', 'SOC 2 Type II').",
            "Users type both styles. Hybrid fuses two ranked lists into one without training a custom model.",
          ),
          s(" RRF is the common fusion algorithm: score by reciprocal rank position, not raw similarity scores — avoids normalisation headaches across systems."),
        ],
        [
          s("Not every vector DB ships hybrid natively. "),
          x(
            "Weaviate and Elasticsearch (with dense_vector) support hybrid in-product. Pinecone added sparse-dense support. pgvector-only stacks often run BM25 in Elasticsearch/OpenSearch alongside Postgres vectors — two systems to operate.",
            "PM TCO must include dual-system ops if that's the architecture.",
          ),
          s(" Ask vendors: 'show hybrid recall@10 on our eval set' — not 'do you support hybrid?'"),
        ],
        [
          s("Weighting keyword vs semantic is a product knob. "),
          x(
            "Support bots might weight BM25 higher (exact error codes). Internal wiki search might weight vectors higher (conceptual questions).",
            "Some products expose 'exact match mode' vs 'conceptual search' — same backend, different fusion weights.",
          ),
          s(" A/B test fusion weights on task completion, not just offline recall."),
        ],
      ],
      examples: [
        {
          title: "Error-code search — hybrid saved the support bot",
          body: "Pure vector search couldn't reliably return 'KB-4429' when users pasted error codes. BM25 + vector hybrid lifted exact-match retrieval from 0.62 to 0.97. PM made hybrid default for support tier; kept vector-only for conceptual 'how do I…' queries with routing.",
        },
        {
          title: "Elasticsearch hybrid at Bloomberg-scale internal search",
          body: "Teams on Elasticsearch often add dense_vector fields to existing inverted indexes — hybrid without a new vendor. PM advantage: one ops team, one security review. Disadvantage: tuning complexity. Migration path from legacy search to RAG often starts here.",
        },
        {
          title: "RRF vs weighted sum — eng debate, PM decision",
          body: "Weighted sum fusion needed score normalisation that broke on skewed corpora. RRF worked out of the box with 4-point Precision@5 improvement. PM didn't pick the algorithm — but set the eval gate that resolved the debate in one afternoon.",
        },
      ],
    }),
    buildSection({
      number: "2.7",
      title: "Scaling and cost",
      subtitle: "Vectors, queries, and the line items that show up on your AWS bill",
      take: "Vector DB cost is driven by: stored vectors (RAM/disk), query QPS, index rebuild frequency, embedding API calls, and egress. At 1M queries/month it's a rounding error; at 100M it's a board-level line item.",
      why: "PMs who model vector economics at 10× current volume avoid approving architectures that work in pilot and bankrupt the feature at growth. Unit economics per query includes retrieval, not just LLM tokens.",
      paragraphs: [
        [
          s("Storage scales with vectors × dimensions × metadata overhead. "),
          x(
            "1M chunks × 768-dim float32 ≈ 3GB raw vectors — before HNSW graph overhead (often 1.5–2×), replicas, and metadata.",
            "Product quantisation and smaller embedding models (384-dim) cut storage 50–75% with measurable recall tradeoffs.",
          ),
          s(" Chunk count is a cost driver — aggressive chunking doubles vectors and doubles index cost."),
        ],
        [
          s("Query cost scales with QPS and index complexity. "),
          x(
            "Managed vendors charge per query or include query pods. Self-hosted costs are compute + RAM for keeping the index hot.",
            "Filtered queries on bad index design can consume more CPU than unfiltered — filter selectivity affects infra, not just latency.",
          ),
          s(" PMs should know queries-per-user-per-day for the AI feature — it multiplies everything."),
        ],
        [
          s("Hidden costs: embedding, re-indexing, and dual-write migrations. "),
          x(
            "Embedding 5M chunks at $0.0001/1K tokens adds up. Full re-embed on model change is a batch job with compute and validation cost.",
            "Dual-write during migration doubles storage temporarily. Budget these as migration projects, not 'free because we're already paying for the DB.'",
          ),
          s(" Include retrieval in per-query COGS slide: embed query + ANN search + (optional) rerank + LLM."),
        ],
      ],
      examples: [
        {
          title: "Chunk explosion — 2× vectors, 2× bill",
          body: "Switching from 1,000-token chunks to 256-token chunks with overlap nearly 4×'d vector count. Index cost went from $800/month to $2,900/month. PM walked back overlap policy and invested in smarter chunk boundaries instead of smaller blind splits.",
        },
        {
          title: "Query pod rightsizing",
          body: "Pinecone query pods were over-provisioned for a B2B tool with 50K queries/month. Downsized tier saved $1,200/month with no latency change. PM worked with eng on actual QPS metrics — not peak demo traffic.",
        },
        {
          title: "COGS slide that won pricing approval",
          body: "PM presented per-query cost: $0.0008 embed + $0.0003 vector search + $0.012 LLM = $0.0131. At 12 queries/user/day and 8K MAU → ~$38K/month inference. Retrieval was 8% of total — still worth optimising, but LLM dominated. Informed the 'use cheaper model for retrieval rewrite' decision.",
        },
      ],
    }),
    buildSection({
      number: "2.8",
      title: "Managed vs self-hosted",
      subtitle: "Who wakes up when the index is down — and who owns the compliance binder",
      take: "Managed vector DBs (Pinecone serverless, Weaviate Cloud, Qdrant Cloud) trade margin for ops abstraction. Self-hosted trades eng time for control, data residency, and unit economics at scale. The right choice follows team capacity and contractual constraints — not Hacker News consensus.",
      why: "Picking self-hosted without platform headcount creates a slow-burn reliability crisis. Picking managed without modelling at-scale cost creates a margin crisis. PMs align infra choice with team reality and commercial model.",
      paragraphs: [
        [
          s("Managed wins when speed and focus matter. "),
          x(
            "No K8s operators, no index tuning on-call, SOC2 inherited from vendor. Pilot to production in days.",
            "Tradeoffs: per-unit cost higher, less control over index internals, data residency depends on vendor regions and enterprise contracts.",
          ),
          s(" Default for startups without dedicated platform eng — rational, not lazy."),
        ],
        [
          s("Self-hosted wins at scale, residency, or custom index needs. "),
          x(
            "10M+ vectors, strict VPC requirements, custom hardware (GPU ANN), or query volumes where SaaS pricing breaks the unit economics.",
            "Requires: someone who owns upgrades, backups, disaster recovery, and index rebuild runbooks.",
          ),
          s(" PM staffs platform work in the roadmap — not as 'infra magic' that happens for free."),
        ],
        [
          s("Hybrid paths exist. "),
          x(
            "Start managed, migrate self-hosted at scale crossover. Or managed prod + self-hosted dev/staging. Or multi-region managed with customer choice.",
            "Contract exit clauses matter: embedding model lock-in and metadata schema portability reduce migration pain.",
          ),
          s(" Document migration triggers in the architecture doc: 'move off managed when monthly vector bill exceeds $X or p95 exceeds Yms.'"),
        ],
      ],
      examples: [
        {
          title: "Series A on Pinecone → Series C on Qdrant",
          body: "Common pattern: managed for PMF, self-hosted when vector bill hits 15% of COGS. Migration took two quarters with dual-write. PM communicated 'no user impact' because triggers were planned at Series A, not panic at Series C.",
        },
        {
          title: "Bank on-prem Milvus",
          body: "A bank required all embeddings inside their VPC. Managed SaaS was non-starter. Self-hosted Milvus on internal K8s added 6 weeks to timeline but unlocked procurement. PM traded time-to-ship for deal eligibility — correct trade.",
        },
        {
          title: "Over-ops self-host regret",
          body: "A 15-person startup self-hosted Weaviate because 'it's free.' Two eng-weeks/month on index issues; one outage during a demo. Moved to managed Qdrant Cloud. PM retrospective: free software isn't free if nobody owns the pager.",
        },
      ],
    }),
    buildSection({
      number: "2.9",
      title: "PM decision lens: choosing a vector DB",
      subtitle: "A vendor scorecard that survives pilot hype and procurement review",
      take: "Choose a vector DB on: filter performance for your metadata model, hybrid search needs, scale at 12-month projection, ops capacity, data residency, migration portability, and total cost — in that order before raw ANN benchmarks.",
      why: "The vector DB is plumbing users never see — until search is slow, leaky, or too expensive. This scorecard turns a technical shopping list into a defensible PM decision.",
      paragraphs: [
        [
          s("Run a structured pilot, not a hello-world demo. "),
          x(
            "Index 10K–100K real chunks (not Lorem Ipsum). Run 200–500 real user queries with human relevance labels. Measure Recall@10, p95 latency, p99 with filters, and monthly cost at projected QPS.",
            "Include worst-case queries: rare tokens, long questions, multi-filter combinations. Vendors look identical on toy data.",
          ),
          s(" Pilot exit criteria go in the PRD before eng spikes — prevents endless bake-offs."),
        ],
        [
          s("Scorecard dimensions PMs should weight. "),
          x(
            "Security: tenant isolation model, encryption, audit logs. Ops: managed vs self, rebuild time, backup. Product: hybrid support, metadata schema flexibility. Economics: cost at 3× and 10× volume.",
            "Weight security and residency 0% or 100% — many enterprises are binary gates, not tradeoffs.",
          ),
          s(" Document the decision and revisit triggers: 're-evaluate at 5M vectors or $5K/month.'"),
        ],
        [
          s("Plan the embedding migration story on day one. "),
          x(
            "You will change embedding models. Ask: dual-index support, re-embed tooling, blue-green cutover, eval gates.",
            "Vector DB portability (export vectors + metadata) reduces lock-in. Some teams store raw text in blob storage and re-embed on demand — slower migration, more flexibility.",
          ),
          s(" The PM who asks 'how do we switch embedding models without a week of downtime?' in vendor eval saves a future quarter."),
        ],
      ],
      examples: [
        {
          title: "The vector DB scorecard template",
          body: "Rows: filter p95, hybrid recall@10, ops model, residency, 12-mo cost at projected QPS, migration complexity. Columns: 3 vendors. Weighted score + binary gates (SOC2, EU region). Legal and eng sign same sheet. Decisions in 2 weeks, not 2 quarters.",
        },
        {
          title: "Procurement question that filtered two vendors",
          body: "Enterprise buyer asked: 'show per-tenant index isolation architecture.' One vendor had namespace partitions; one relied on post-filter only. PM disqualified the latter before POC wasted a month. Security questionnaire is a feature filter.",
        },
        {
          title: "Planned re-eval at 3M vectors",
          body: "Team chose pgvector with written trigger: re-evaluate specialised DB at 3M vectors OR p95 >150ms. Hit 2.8M vectors, latency crept to 180ms, migration approved with budget already allocated. Proactive beats emergency.",
        },
      ],
    }),
  ],
  quiz: [
    {
      q: "Your multi-tenant RAG product must guarantee Customer A never retrieves Customer B's documents. Which architecture is required?",
      options: [
        "Post-filter ANN results by tenant_id after retrieving top-100 globally.",
        "Pre-filter or namespace isolation so ANN search runs only within the tenant's partition.",
        "Higher similarity threshold.",
        "Larger embedding model.",
      ],
      correct: 1,
      correctFeedback:
        "Pre-filter or separate namespaces ensure ANN never surfaces cross-tenant neighbours. Post-filter alone can leak snippets in logs and fails strict security reviews.",
      wrongFeedback:
        "Security isolation must happen before or via index partitioning — not by hoping post-filter catches all neighbours. Re-read section 2.5.",
    },
    {
      q: "Users search for exact error code 'E-4421' but vector-only search misses it. Best first fix?",
      options: [
        "Fine-tune the embedding model on error codes.",
        "Add hybrid search combining BM25 keyword matching with dense vectors.",
        "Increase k from 5 to 100.",
        "Switch to a larger LLM.",
      ],
      correct: 1,
      correctFeedback:
        "Exact-token queries are BM25's strength. Hybrid fusion addresses vocabulary mismatch without retraining embeddings.",
      wrongFeedback:
        "Error codes are sparse exact-match problems — hybrid search is the targeted fix. Re-read section 2.6.",
    },
    {
      q: "What does ANN (approximate nearest neighbour) trade for speed?",
      options: [
        "Storage space only.",
        "Perfect recall — a small percentage of true nearest neighbours may be missed.",
        "Metadata filtering capability.",
        "Embedding dimension.",
      ],
      correct: 1,
      correctFeedback:
        "ANN skips parts of the search space to go faster, occasionally missing true nearest neighbours. Tune ef_search/nprobe to balance recall vs latency.",
      wrongFeedback:
        "ANN's core tradeoff is recall vs speed — not storage or metadata. Re-read section 2.2.",
    },
    {
      kind: "categorize",
      q: "Sort each factor into primarily a storage cost driver or a query cost driver.",
      categories: ["Storage cost", "Query cost"],
      items: [
        { text: "Number of vectors (chunk count × corpus size).", category: 0 },
        { text: "HNSW graph memory overhead.", category: 0 },
        { text: "Queries per second at peak traffic.", category: 1 },
        { text: "Embedding API calls per user question.", category: 1 },
        { text: "Vector dimension (768 vs 384).", category: 0 },
        { text: "Filter complexity affecting CPU per query.", category: 1 },
      ],
      correctFeedback:
        "Right. Storage scales with vectors and dimensions; query cost scales with QPS, per-query compute, and embedding calls.",
      wrongFeedback:
        "Chunk count and dimensions drive storage; QPS and per-query work drive query cost. Re-read section 2.7.",
    },
    {
      kind: "order",
      q: "Put these vector DB vendor evaluation steps in the order a PM should run them.",
      prompt: "Drag to arrange first step (top) to last (bottom).",
      items: [
        "Define binary gates: data residency, SOC2, tenant isolation requirements.",
        "Index 10K–100K real production-like chunks with real metadata schema.",
        "Run 200–500 labelled queries measuring Recall@10 and p95 latency with filters.",
        "Model monthly cost at 3× and 10× projected query volume.",
        "Document decision, migration triggers, and embedding upgrade story.",
      ],
      correctFeedback:
        "Gates first (fail fast), then realistic pilot, then economics, then document. Skipping gates wastes pilot time on vendors that can't pass procurement.",
      wrongFeedback:
        "Binary security/residency gates come before benchmarking. Cost modelling comes after you have latency/recall data on real workloads. Re-read section 2.9.",
    },
    {
      q: "A 15-person startup with no platform engineer and 200K chunks needs production RAG in 4 weeks. Most rational vector DB path?",
      options: [
        "Self-hosted Milvus on Kubernetes for maximum control.",
        "Managed vector DB (e.g. Pinecone/Qdrant Cloud) or pgvector if already on Postgres — optimise ops burden first.",
        "Build custom FAISS index on S3.",
        "Wait until 10M vectors to choose.",
      ],
      correct: 1,
      correctFeedback:
        "Managed or pgvector minimises ops burden for small teams on tight timelines. Self-hosted at 200K is viable but steals eng weeks you don't have.",
      wrongFeedback:
        "Without platform headcount, managed wins on time-to-ship. Re-read section 2.8.",
    },
  ],
});
