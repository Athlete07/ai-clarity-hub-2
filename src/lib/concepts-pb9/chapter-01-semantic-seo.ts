import { buildChapter, buildSection, s, x } from "../concepts-pb4-helpers";

export const chapter01SemanticSeo = buildChapter({
  slug: "pb9-semantic-seo",
  number: 1,
  shortTitle: "Semantic SEO",
  title: "Semantic SEO",
  readingMinutes: 28,
  summary:
    "Beyond keywords — how search engines moved from matching strings to understanding meaning, and what that demands from your content",
  keyTakeaway:
    "Semantic SEO means optimising for topics, entities, and user intent — not keyword density. Search engines use knowledge graphs, NLP, and contextual signals to decide whether your content genuinely covers a subject. For PMs, the shift is strategic: topical depth compounds over years while keyword hacks decay every algorithm update. Invest in concept coverage, entity clarity, and intent-matched formats — measure cluster-level authority, not page-level keyword rankings alone.",
  pmCallout:
    "As a PM: stop approving content briefs built around keyword lists and start approving topic coverage maps. Your content roadmap should answer 'what concepts must we own?' not 'what exact phrases do we repeat?' Resource semantic depth like product infrastructure — it is a compounding asset that protects organic acquisition when AI Overviews and zero-click SERPs eat individual page clicks.",
  sections: [
    buildSection({
      number: "1.1",
      title: "What is semantic SEO",
      subtitle:
        "Optimising for meaning and intent rather than exact keyword matches — the shift that changed everything about how content ranks",
      take: "Semantic SEO is the practice of structuring and writing content so search engines understand the full meaning of a topic — entities, relationships, and user intent — rather than rewarding pages that repeat exact keyword strings.",
      why: "Marketing teams still ship keyword-stuffed briefs while rankings flatline. PMs who grasp semantic SEO can redirect budget from low-ROI keyword tactics toward topical authority that survives algorithm updates and feeds AI answer engines.",
      paragraphs: [
        [
          s("The shift is from strings to meaning. "),
          x(
            "Legacy SEO: repeat 'best running shoes' 12 times, buy exact-match anchors, rank. Modern search: Google parses entities (brand, product type, use case), infers intent (compare vs buy vs learn), and scores whether your page comprehensively answers the underlying question.",
            "Semantic SEO aligns content with how ranking systems actually work — topic models, entity graphs, and NLP — not 2005 keyword density formulas.",
          ),
          s(" Ranking is now a comprehension test, not a word-count contest."),
        ],
        [
          s("Semantic signals span on-page and off-page context. "),
          x(
            "Co-occurring concepts, internal links between related subtopics, structured data, author expertise, and how other authoritative sources reference your brand all reinforce 'this site understands running footwear for marathon training.'",
            "PM implication: content quality is systemic. One hero blog post cannot fake expertise — the whole content architecture must reinforce the same semantic theme.",
          ),
          s(" Isolated keyword pages decay; connected topical coverage compounds."),
        ],
        [
          s("Semantic SEO is the foundation for AI search surfaces. "),
          x(
            "AI Overviews, ChatGPT Search, and Perplexity select sources that are factually clear, structurally parseable, and topically authoritative — the same traits semantic SEO builds.",
            "Teams optimising only for blue-link position ten miss the citation layer. Semantic depth increases odds your content becomes the cited source above the fold.",
          ),
          s(" Meaning-first content wins both traditional rankings and AI citations."),
        ],
      ],
      examples: [
        {
          title: "SaaS blog pivot — keywords to topics",
          body: "B2B analytics vendor had 400 posts targeting long-tail keyword variants ('dashboard tool for startups', 'startup KPI dashboard'). Traffic flat for 18 months. PM reframed roadmap around one topic cluster: 'product analytics for early-stage teams.' Consolidated 60 thin posts into 12 deep guides. Organic traffic +34% in two quarters — fewer URLs, stronger semantic signals.",
        },
        {
          title: "E-commerce category page failure",
          body: "Retailer SEO agency added 800 words of synonym-stuffed copy to category pages. Rankings dropped — Google interpreted pages as low-quality doorway content. PM killed the project, invested in buyer guides linked from categories. Lesson: semantic relevance requires useful depth, not synonym spam.",
        },
        {
          title: "Exec ask — 'Why aren't we ranking for AI SEO?'",
          body: "CMO wanted a single landing page targeting 'AI SEO.' PM explained semantic gap: site had no connected content on search intent, structured data, or AI Overviews. Shipped a topic cluster over six months instead of one page. Cluster earned citations in AI Overviews within four months — the single-page shortcut would have failed.",
        },
      ],
    }),
    buildSection({
      number: "1.2",
      title: "How search engines understand meaning",
      subtitle:
        "Knowledge graphs, entity recognition, and natural language understanding — the technology stack behind semantic search",
      take: "Modern search combines knowledge graphs (structured facts about entities), named-entity recognition (extracting people, products, places from text), and large-scale NLP to map queries and pages into a shared semantic space — then ranks content that best satisfies the inferred intent.",
      why: "Engineering and marketing debate 'what Google wants' in abstract terms. PMs who understand the tech stack make better calls on schema investment, entity strategy, and when content needs expert authors versus generic freelancers.",
      paragraphs: [
        [
          s("Knowledge graphs anchor facts to identifiable entities. "),
          x(
            "Google's Knowledge Graph links 'Nike' → company → products → athletes → events. When your page clearly references entities and their relationships, search systems can slot your content into that graph.",
            "This is why brand panels, product rich results, and consistent naming matter — you are teaching the machine who and what you are.",
          ),
          s(" Ambiguous brands fight the graph; explicit entities get recognised."),
        ],
        [
          s("NER and NLP extract structure from unstructured copy. "),
          x(
            "Search engines detect entities in your H2s, definitions, lists, and body text. They compare your topic vector to the query vector — built from words, context, search history, and location.",
            "PM takeaway: clear headings, defined terms, and consistent vocabulary help machines parse your page. Wall-of-text marketing fluff hides meaning from both users and crawlers.",
          ),
          s(" Readable structure is a ranking signal, not just UX polish."),
        ],
        [
          s("The stack is unified across web search and AI answers. "),
          x(
            "AI Overviews do not use a separate magic algorithm — they synthesise from indexed content that already passed quality and relevance thresholds. Weak semantic clarity excludes you before summarisation begins.",
            "Invest in the same foundations: entity clarity, factual precision, crawlable structure. Semantic SEO is dual-use for links and citations.",
          ),
          s(" Build for machine comprehension; humans benefit from the same clarity."),
        ],
      ],
      examples: [
        {
          title: "Fintech glossary — entity recognition win",
          body: "Neobank published a structured glossary defining 80 financial terms with consistent entity references (regulators, product types, fee structures). Featured snippets and AI Overview citations grew 3×. PM credited explicit definitions and schema — not keyword repetition.",
        },
        {
          title: "Rebrand confusion — graph mismatch",
          body: "Company renamed product line but old and new names appeared interchangeably across 200 URLs. Knowledge Panel showed wrong product links. PM led entity consolidation project: canonical naming, sameAs schema, Wikipedia update. Branded search CTR recovered in eight weeks.",
        },
        {
          title: "Healthcare publisher — NLP-friendly structure",
          body: "Medical content used narrative prose without condition headings. Rewrote top 50 articles with condition → symptoms → treatment → when to see a doctor structure. NLP-friendly hierarchy improved rankings and reduced clinician review time. Structure served humans and parsers.",
        },
      ],
    }),
    buildSection({
      number: "1.3",
      title: "From keywords to concepts",
      subtitle:
        "Why a page about 'running shoes' must now demonstrate deep topical authority, not just keyword density",
      take: "A page targeting 'running shoes' must demonstrate coverage of related concepts — gait types, cushioning technologies, terrain, injury prevention, sizing, brand comparisons — because search engines reward topical authority across a subject, not a single keyword-optimised URL.",
      why: "Content briefs still list primary and secondary keywords. PMs who reframe briefs around concept maps prevent thin pages that technically mention the keyword but lose to competitors who own the full topic.",
      paragraphs: [
        [
          s("Concept coverage beats keyword repetition. "),
          x(
            "Ten pages each targeting a keyword variant cannibalise each other. One pillar plus deep cluster pages on pronation, marathon vs trail, carbon plates, and recovery shoes signal comprehensive expertise.",
            "The ranking unit is increasingly the topic cluster, not the individual keyword-page pair.",
          ),
          s(" Ask 'what concepts must we explain?' before 'what keywords do we repeat?'"),
        ],
        [
          s("User questions reveal the concept map. "),
          x(
            "People Also Ask, support tickets, sales calls, and community forums list the sub-concepts users expect answered. Missing concepts create semantic gaps competitors fill.",
            "PM workflow: mine questions → map to cluster pages → prioritise by business value and search demand. This is product discovery applied to SEO.",
          ),
          s(" Concept maps turn SEO from guesswork into prioritised roadmaps."),
        ],
        [
          s("Keyword tools still help — but as concept discovery, not targets. "),
          x(
            "Use Ahrefs, Semrush, or GSC to find which concepts drive demand, not to set density targets. Volume validates priority; depth wins the ranking.",
            "Report cluster coverage and citation share to leadership — not keyword position tables alone.",
          ),
          s(" Metrics should track topical ownership, not keyword bingo."),
        ],
      ],
      examples: [
        {
          title: "Outdoor retailer — concept map sprint",
          body: "PM ran two-day workshop mapping 'hiking boots' concepts: waterproofing, ankle support, break-in, weight, vegan materials. Identified 14 cluster gaps vs competitor. Six-month roadmap filled gaps; category organic revenue +22%. Keywords were output of the map, not the input.",
        },
        {
          title: "Cannibalisation from keyword splitting",
          body: "Legal tech blog had 25 posts on slight keyword variants of 'contract management software.' None ranked page one. PM consolidated into one pillar + eight true subtopics. Average position moved from 18 to 4 for head terms. Concept consolidation beat keyword proliferation.",
        },
        {
          title: "Support-driven concept discovery",
          body: "PM linked Zendesk tags to content gaps. Top unanswered concept: 'SSO setup for enterprise' — no dedicated guide. Single deep cluster page became #1 organic lead source for enterprise tier. Support data beat keyword tool suggestions.",
        },
      ],
    }),
    buildSection({
      number: "1.4",
      title: "Latent semantic indexing and beyond",
      subtitle:
        "How search engines infer topic relevance from co-occurring terms and contextual signals",
      take: "Search engines infer topic relevance from co-occurring terms, contextual patterns, and semantic relationships in your content and across the web — modern systems extend classical latent semantic ideas with neural embeddings and graph-based relevance, so pages rank when their overall topic profile matches the query, not when they hit a keyword checklist.",
      why: "Teams try to 'LSI keywords' from generator tools — mostly noise. PMs who understand co-occurrence as natural expertise signalling avoid gimmicks and invest in genuine subtopic coverage that models recognise.",
      paragraphs: [
        [
          s("Co-occurrence signals topical depth naturally. "),
          x(
            "A genuine guide to email deliverability mentions SPF, DKIM, DMARC, bounce rates, and warm-up — not because a tool said so, but because the subject requires them. Search systems detect these patterns.",
            "Artificial synonym lists feel unnatural to NLP models and often correlate with low-quality content classifiers.",
          ),
          s(" Write for the subject; co-occurrence follows authentic expertise."),
        ],
        [
          s("Context extends beyond your page. "),
          x(
            "Inbound links from relevant domains, brand mentions alongside industry entities, and internal links from related cluster pages reinforce your topic profile site-wide.",
            "PM lens: PR, partnerships, and community presence are semantic signals — not separate from SEO.",
          ),
          s(" Off-page context confirms on-page meaning."),
        ],
        [
          s("Neural retrieval replaced bag-of-words matching. "),
          x(
            "Google's systems use transformer-based understanding — queries and documents live in embedding space where paraphrases align. 'Best trainers for marathons' matches content about marathon running shoes without exact phrase match.",
            "Implication: natural language, varied vocabulary, and clear definitions outperform mechanical keyword insertion.",
          ),
          s(" Paraphrase-friendly writing is a feature, not a ranking risk."),
        ],
      ],
      examples: [
        {
          title: "LSI tool experiment — no lift",
          body: "Content team added 30 'LSI keywords' from a generator to each post. Quality rater patterns flagged unnatural phrasing. Rankings unchanged after 90 days. PM discontinued tool budget, reallocated to expert interviews that naturally introduced co-occurring concepts. Engagement time +18%.",
        },
        {
          title: "DevRel co-occurrence — partnership signal",
          body: "API company co-published integration guides with three major platforms. Co-occurrence of brand names in authoritative contexts lifted rankings for 'webhook reliability' — no keyword changes on-site. PM tracked partnerships as SEO investments.",
        },
        {
          title: "Paraphrase ranking win",
          body: "Page targeted 'employee onboarding checklist' but ranked for 'new hire onboarding template' and 'staff induction workflow' without those exact phrases. PM stopped forcing awkward exact matches in copy; expanded FAQ with natural question variants.",
        },
      ],
    }),
    buildSection({
      number: "1.5",
      title: "TF-IDF vs semantic relevance",
      subtitle:
        "The old ranking signal vs the new one — why stuffing synonyms no longer works and what replaced it",
      take: "TF-IDF and raw term frequency were early signals for term importance in a document; modern semantic relevance uses neural topic understanding, user satisfaction signals, and entity-graph alignment — so synonym stuffing and mechanical term repetition hurt more than they help.",
      why: "Legacy SEO freelancers still sell 'TF-IDF optimisation.' PMs who know the signal evolution can reject outdated tactics and defend budget for depth, expertise, and structured content.",
      paragraphs: [
        [
          s("TF-IDF measured word rarity, not meaning. "),
          x(
            "Classic IR: terms frequent in your doc but rare corpus-wide look important. SEO abused this with synonym lists and competitor term scraping.",
            "Modern systems penalise manipulative patterns and reward helpfulness metrics — dwell time, pogo-sticking, and satisfaction models.",
          ),
          s(" Mechanical term matching is obsolete as a primary strategy."),
        ],
        [
          s("Semantic relevance is query-document intent alignment. "),
          x(
            "Does your page format, depth, and freshness match what searchers need? Informational queries want guides; transactional want product pages; comparison wants tables and pros/cons.",
            "PMs align content type to intent — a semantic decision more than a keyword decision.",
          ),
          s(" Wrong format fails even with perfect term coverage."),
        ],
        [
          s("What replaced stuffing: E-E-A-T and helpful content. "),
          x(
            "Experience, expertise, authoritativeness, trust — demonstrated through real authors, citations, updates, and accurate claims. Google's helpful content systems target mass-produced SEO content.",
            "Resource expert writers and fact-checking for YMYL topics; generic AI spam is a strategic liability.",
          ),
          s(" Trust signals are the new density metrics."),
        ],
      ],
      examples: [
        {
          title: "Agency TF-IDF audit rejected",
          body: "Vendor proposed $40K 'semantic TF-IDF' rewrite of 200 pages. PM asked for predicted outcome vs consolidating 40 thin pages. Chose consolidation + author bylines. Organic leads +15% vs vendor's projected 3%. Rejected gimmick, funded expertise.",
        },
        {
          title: "Intent mismatch — right terms, wrong page",
          body: "Product page ranked poorly for 'what is CRM' — page was transactional, SERP was informational. PM created definitional guide in cluster, linked to product. Both pages improved. Semantic relevance required format shift, not more synonyms on product page.",
        },
        {
          title: "Helpful content recovery",
          body: "Affiliate site hit by helpful content update — thin comparison pages. PM cut 60% of posts, added hands-on testing methodology and author credentials. Traffic recovered over five months. Quality depth replaced volume SEO.",
        },
      ],
    }),
    buildSection({
      number: "1.6",
      title: "Natural language queries",
      subtitle:
        "How voice search and conversational AI shifted query patterns from keywords to full questions",
      take: "Voice assistants, mobile search, and AI chat interfaces normalise full-sentence questions — 'what's the best way to fix a leaky faucet' instead of 'leaky faucet fix' — so content must answer questions directly in natural language, with clear headings that mirror how people actually ask.",
      why: "Content still titles pages with awkward keyword strings. PMs who prioritise question-answer patterns capture featured snippets, voice results, and AI Overview citations — the fastest-growing visible surfaces.",
      paragraphs: [
        [
          s("Query length and conversational tone increased. "),
          x(
            "Voice and AI interfaces encourage complete questions. Long-tail is no longer niche — it is default for many discovery paths.",
            "Brief writers should include 'question variants' section: how users phrase the same need five different ways.",
          ),
          s(" Headings should sound like spoken questions where appropriate."),
        ],
        [
          s("Answer-first formatting wins extraction. "),
          x(
            "Lead sections with a direct 40–60 word answer, then elaborate. AI summarisers and snippet extractors grab the first clear definitional block.",
            "Inverted pyramid is not just journalism — it is machine-readable answer design.",
          ),
          s(" Burying the answer in paragraph four hides you from AI surfaces."),
        ],
        [
          s("Conversational AI changes discovery funnels. "),
          x(
            "Users may never click your link but still encounter your brand as a cited source in ChatGPT or Perplexity. Natural-language-optimised content increases citation likelihood.",
            "Track brand mentions in AI tools alongside GSC clicks — visibility split across surfaces.",
          ),
          s(" NL-query optimisation is citation optimisation."),
        ],
      ],
      examples: [
        {
          title: "FAQ schema + natural questions",
          body: "Home services marketplace rewrote service pages with H2s as spoken questions ('How much does duct cleaning cost?'). FAQ schema on verified answers. Featured snippet share +28%; AI Overview citations appeared on 12 high-volume queries within 90 days.",
        },
        {
          title: "Voice search local win",
          body: "Dental clinic group added conversational local pages ('Where can I get emergency dental care in Austin?'). Voice and mobile impressions +41% for 'near me' variants. PM paired content with GBP accuracy — content alone insufficient for local.",
        },
        {
          title: "B2B — chatbot query mining",
          body: "PM exported top 500 sales-chat questions, mapped to content gaps. 'How does SOC 2 compliance affect vendor selection?' became pillar subsection — cited in Perplexity within six weeks. Sales chat logs beat keyword tools for NL patterns.",
        },
      ],
    }),
    buildSection({
      number: "1.7",
      title: "Topical authority",
      subtitle:
        "Why demonstrating deep expertise across a subject area now outweighs optimising individual pages in isolation",
      take: "Topical authority is the cumulative signal that your site comprehensively and reliably covers a subject — built through interconnected cluster content, consistent entity references, expert authorship, and external recognition — and it outweighs optimising any single page in isolation.",
      why: "Teams celebrate one viral post while the category stagnates. PMs who measure authority at cluster level allocate resources to breadth and depth that compound — and avoid one-off SEO wins that do not transfer.",
      paragraphs: [
        [
          s("Authority is site-level, not page-level. "),
          x(
            "Google assesses whether your domain is a go-to source for a topic. One outstanding page on a thin site rarely sustains rankings against domains with dozens of interlinked expert pieces.",
            "PM roadmap: sequence cluster builds to establish authority before attacking competitive head terms.",
          ),
          s(" Win the library, not the single book."),
        ],
        [
          s("Internal linking distributes authority within topics. "),
          x(
            "Pillar → cluster → supporting links create semantic webs. Orphan pages do not contribute authority even if well-written.",
            "Content ops must enforce linking templates and quarterly orphan audits — architecture is ongoing product work.",
          ),
          s(" Unlinked content is invisible to topical authority models."),
        ],
        [
          s("External validation accelerates authority. "),
          x(
            "Citations from .edu, industry bodies, press, and recognised experts reinforce trust. Digital PR and original research are authority investments.",
            "PMs align thought leadership budget with target topic clusters — not generic brand awareness.",
          ),
          s(" Topical authority is earned on and off your domain."),
        ],
      ],
      examples: [
        {
          title: "Cybersecurity vendor — authority sequencing",
          body: "PM delayed competitive head term 'zero trust architecture' until 18 cluster pages shipped on identity, segmentation, and MFA. Pillar launched after foundation; reached page one in 11 weeks vs 9-month stall on earlier isolated attempt. Sequencing matched authority build.",
        },
        {
          title: "Orphan content audit",
          body: "Media site had 2,000 posts; 40% had zero internal inlinks. PM led linking sprint connecting posts to eight topic hubs. Hub pages' average position improved 6 positions without new copy. Architecture fix beat new content volume.",
        },
        {
          title: "Original research as authority lever",
          body: "HR software published annual remote-work survey cited by 40 publications. Topical authority for 'hybrid work policy' cluster jumped — rankings followed citations. PM funded research as SEO/PR joint line item with cluster KPI.",
        },
      ],
    }),
    buildSection({
      number: "1.8",
      title: "Semantic content gaps",
      subtitle:
        "Finding the concepts your content should cover but doesn't — the audit that surfaces ranking opportunities",
      take: "A semantic content gap audit compares the concepts your audience and competitors cover against your existing content — surfacing missing subtopics, thin coverage, intent mismatches, and outdated pages — to prioritise the highest-ROI additions to your topical map.",
      why: "Teams publish on calendar autopilot without gap analysis. PMs who run systematic gap audits focus writers on opportunities that move rankings instead of redundant posts that cannibalise existing URLs.",
      paragraphs: [
        [
          s("Gap analysis starts from the topic map, not keywords alone. "),
          x(
            "Build a concept inventory for your pillar topic. Mark covered, thin, missing, and outdated. Overlay search volume and business value.",
            "Tools: content gap in Semrush/Ahrefs, GSC query coverage, competitor cluster reverse-engineering, support and sales question logs.",
          ),
          s(" Prioritise gaps that combine demand, feasibility, and revenue proximity."),
        ],
        [
          s("Competitor coverage reveals blind spots. "),
          x(
            "Export competitor URLs ranking for your target cluster. Cluster their headings into concepts. Your missing headings are likely gaps.",
            "Do not copy — outdepth on concepts where you have product advantage or unique data.",
          ),
          s(" Competitive gap analysis is concept diffing, not keyword stealing."),
        ],
        [
          s("Refresh gaps matter as much as new pages. "),
          x(
            "Outdated stats, deprecated product names, and pre-regulation advice create trust gaps. Semantic audits flag content that hurts authority if left stale.",
            "PM maintenance budget: allocate 20–30% of content capacity to refreshes on money pages and pillar content.",
          ),
          s(" A gap can be 'we never updated this' not only 'we never wrote this.'"),
        ],
      ],
      examples: [
        {
          title: "Concept matrix — project management SaaS",
          body: "PM built spreadsheet: 45 concepts in 'agile for distributed teams' cluster. Company covered 19 adequately, 12 thinly, 14 missing. Q1 roadmap filled top 8 missing by revenue-weighted score. Cluster traffic +52% year over year.",
        },
        {
          title: "Competitor heading scrape",
          body: "SEO lead scraped H2s from top five ranking guides on 'data warehouse migration.' Found four concepts competitors all covered that internal team skipped: rollback planning, parallel run validation, cutover checklist, post-migration monitoring. Four cluster pages closed gap; pillar moved to position 3.",
        },
        {
          title: "Stale content drag",
          body: "Semantic audit flagged 30 pages with pre-2023 AI references in a fast-moving category. PM prioritised refresh sprint over new posts. Average dwell time +24%; rankings recovered on 18 URLs without new URLs. Refresh closed trust gaps.",
        },
      ],
    }),
    buildSection({
      number: "1.9",
      title: "PM decision lens: semantic SEO as a content investment",
      subtitle:
        "Why building topical depth is a compounding asset and how to resource it against short-term keyword tactics",
      take: "Semantic SEO is a compounding content investment — topical depth, entity clarity, and cluster architecture appreciate over years while short-term keyword tactics decay with every algorithm update — so PMs should resource it like platform work: sequenced roadmaps, clear ownership, cluster KPIs, and explicit tradeoffs against paid acquisition and one-off campaigns.",
      why: "Leadership wants SEO results this quarter. PMs who frame semantic depth as durable acquisition infrastructure secure sustained budget and resist pressure for spammy shortcuts that create technical debt.",
      paragraphs: [
        [
          s("Compounding vs decaying tactics. "),
          x(
            "Keyword micro-pages and link schemes decay. Interlinked expert clusters appreciate — each new page strengthens the whole. Model ROI over 18–36 months, not 90 days.",
            "Compare CAC from organic clusters vs paid — semantic depth lowers blended acquisition cost when done right.",
          ),
          s(" Pitch semantic SEO as asset building, not expense."),
        ],
        [
          s("Resourcing: specialists, ops, and engineering. "),
          x(
            "Need: subject-matter experts or rigorous SME review, content ops for linking and refresh cadence, engineering for schema, performance, and crawl fixes.",
            "PM allocates capacity across create, consolidate, refresh — not 100% net-new posts.",
          ),
          s(" Under-resourced semantic SEO produces thin clusters that fail."),
        ],
        [
          s("Decision checklist before approving SEO projects. "),
          x(
            "1) Does this expand topic coverage or duplicate? 2) Which cluster and business goal? 3) Intent-matched format? 4) SME and fact-check path? 5) Internal link plan? 6) Success metric — cluster traffic, citations, conversions?",
            "Reject projects that fail ≥2 checks — they are keyword theatre.",
          ),
          s(" Same rigour as feature prioritisation: ROI, sequencing, ownership."),
        ],
      ],
      examples: [
        {
          title: "Board slide — organic as infrastructure",
          body: "PM presented 3-year cluster roadmap with cumulative traffic and assisted conversion projections. Secured headcount for content ops vs one-time agency keyword project. Year two organic sourced 31% of pipeline — board renewed investment.",
        },
        {
          title: "Short-term pressure resisted",
          body: "Q4 demand for '50 SEO pages in 30 days.' PM proposed 8 cluster pages with SME review and consolidation of 20 thin URLs instead. Hit traffic goal without quality penalty. Resisted decay tactic; protected compounding asset.",
        },
        {
          title: "Cross-functional ownership model",
          body: "PM assigned cluster owners from product marketing, one SEO lead for architecture, eng sprint for schema templates. Quarterly cluster review replaced page-level reporting. Attribution to product signups clarified which clusters deserved depth vs pause.",
        },
      ],
    }),
  ],
  quiz: [
    {
      q: "What is the core shift semantic SEO addresses?",
      options: [
        "Repeating exact keywords more times than competitors",
        "Optimising for topic meaning, entities, and intent rather than string matching",
        "Buying more backlinks regardless of topical relevance",
        "Publishing daily without regard to subject coverage",
      ],
      correct: 1,
      correctFeedback:
        "Right. Semantic SEO aligns content with how modern search understands meaning — topics, entities, and intent — not keyword density.",
      wrongFeedback:
        "Semantic SEO is about meaning and topical authority, not repetition or volume alone. Re-read sections 1.1 and 1.3.",
    },
    {
      q: "Why did TF-IDF-style synonym stuffing stop working as a primary tactic?",
      options: [
        "Google removed all ranking algorithms in 2020",
        "Modern systems use neural semantic understanding and quality signals that penalise manipulative patterns",
        "Users stopped using search engines entirely",
        "TF-IDF only ever applied to paid ads",
      ],
      correct: 1,
      correctFeedback:
        "Exactly. Neural relevance and helpfulness signals replaced mechanical term-frequency games.",
      wrongFeedback:
        "Search evolved toward semantic relevance and quality — not keyword stuffing. Re-read section 1.5.",
    },
    {
      q: "What builds topical authority most effectively?",
      options: [
        "One viral blog post on an otherwise thin site",
        "Interconnected cluster content with expert depth and consistent internal linking",
        "Hiding text in white font for extra keywords",
        "Duplicate pages for every city name without unique value",
      ],
      correct: 1,
      correctFeedback:
        "Right. Authority accumulates across interconnected, expert coverage of a subject — not isolated pages.",
      wrongFeedback:
        "Topical authority is site-level and cluster-based. Re-read sections 1.7 and 1.3.",
    },
    {
      kind: "categorize",
      q: "Match each practice to the best category.",
      categories: ["Semantic best practice", "Legacy tactic to avoid", "Gap audit action"],
      items: [
        { text: "Build a concept map before writing cluster pages", category: 0 },
        { text: "Scrape competitor keywords into synonym lists", category: 1 },
        { text: "Compare your H2 coverage vs top-ranking guides", category: 2 },
        { text: "Lead sections with direct answers to natural-language questions", category: 0 },
        { text: "Publish 50 thin pages in 30 days for volume", category: 1 },
        { text: "Flag outdated stats on money pages for refresh", category: 2 },
      ],
      correctFeedback:
        "Right. Concept maps, NL answers, and refreshes build semantic depth; stuffing and thin volume hurt.",
      wrongFeedback:
        "Semantic SEO favours depth, structure, and audits — not mechanical keyword tactics. Re-read sections 1.3–1.8.",
    },
    {
      kind: "order",
      q: "Order the PM semantic SEO investment sequence.",
      prompt: "Drag to arrange the recommended strategic flow.",
      items: [
        "Define topic clusters tied to business goals",
        "Run semantic gap audit against concept map",
        "Prioritise create, consolidate, and refresh backlog",
        "Ship intent-matched depth with SME review",
        "Measure cluster-level traffic, citations, and conversions",
      ],
      correctFeedback:
        "Exactly. Strategy → audit → prioritise → execute with quality → measure at cluster level.",
      wrongFeedback:
        "Start with cluster strategy and gap analysis before production and cluster KPIs. Re-read section 1.9.",
    },
    {
      q: "How should PMs treat natural-language query trends?",
      options: [
        "Ignore them — only exact keyword matches rank",
        "Structure content with question headings and answer-first blocks for snippets and AI citations",
        "Remove all headings to make pages look more natural",
        "Write only in bullet lists with no definitions",
      ],
      correct: 1,
      correctFeedback:
        "Right. NL queries favour direct answers, question-shaped headings, and extractable definitions.",
      wrongFeedback:
        "Voice and AI interfaces reward natural question-answer patterns. Re-read section 1.6.",
    },
  ],
});
