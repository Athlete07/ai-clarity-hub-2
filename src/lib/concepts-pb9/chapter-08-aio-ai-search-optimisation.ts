import { buildChapter, buildSection, s, x } from "../concepts-pb4-helpers";

export const chapter08AioAiSearchOptimisation = buildChapter({
  slug: "pb9-aio-ai-search-optimisation",
  number: 8,
  shortTitle: "AIO",
  title: "AIO — AI Search Optimisation",
  readingMinutes: 29,
  summary:
    "Optimising for the answer engines that are replacing blue links — how AI search surfaces select, cite, and summarise content, and the PM playbook for earning visibility when there is no position #1",
  keyTakeaway:
    "AIO (AI Search Optimisation) is the practice of earning citations and brand presence in AI-generated answers — not just ranking in traditional SERPs. PMs who optimise for extractability, entity authority, passage-level clarity, and multi-surface measurement build visibility across Google AI Overviews, ChatGPT, Perplexity, and Bing Copilot. Traditional SEO fundamentals persist; AIO adds citation-worthiness as the new success criterion.",
  pmCallout:
    "As a PM: AIO is not 'SEO plus schema.' It is a distinct visibility goal — being cited in AI answers when users never click a link. Build an AIO programme with citation tracking, extractability standards, and entity authority investment — or watch competitors become the default answer while your pages rank #3 unseen.",
  sections: [
    buildSection({
      number: "8.1",
      title: "What is AIO",
      subtitle: "AI Search Optimisation — earning visibility in AI-generated answers, not just traditional search rankings",
      take: "AIO (AI Search Optimisation) is the practice of optimising content, brand presence, and site architecture to be selected, cited, and accurately represented in AI-generated search answers. Unlike traditional SEO where success is a ranking position and click, AIO success is citation in an AI response — Google AI Overviews, ChatGPT with browsing, Perplexity, Bing Copilot, and emerging answer engines. Users increasingly get complete answers without clicking; AIO ensures your brand and content are the source of those answers.",
      why: "PMs who conflate AIO with traditional SEO underinvest in extractability and citation-worthiness. Ranking #3 while a competitor is cited in the AI Overview above you means losing the query — even with strong classic SEO.",
      paragraphs: [
        [
          s("AIO targets answer engines, not just search engines. "),
          x(
            "Answer engines synthesise responses from multiple sources. Success = being one of those sources, ideally the primary citation.",
            "PM tracks citation share, not just ranking position, for priority queries.",
          ),
          s(" Zero-click answers make citation the new impression."),
        ],
        [
          s("AIO builds on SEO — it doesn't replace it. "),
          x(
            "Crawlability, authority, topical relevance, and technical health remain prerequisites. AIO adds extractability, passage clarity, and entity presence.",
            "Sites that can't rank traditionally rarely get cited by AI systems either.",
          ),
          s(" PM frames AIO as an extension of SEO strategy, not a competing initiative."),
        ],
        [
          s("Citation is the AIO conversion event. "),
          x(
            "In traditional SEO, the conversion event is a click. In AIO, it's a citation — your brand named, your URL linked, your data quoted in the AI response.",
            "PM defines 'citation rate' as a core metric alongside CTR and conversion.",
          ),
          s(" Uncited rankings are declining in value as AI surfaces expand."),
        ],
      ],
      examples: [
        {
          title: "Ranked #2 but uncited — invisible win",
          body: "PM celebrated #2 ranking for 'enterprise API management.' AI Overview cited positions #4 and #7 — not them. Brand search volume flat despite strong classic SEO. PM launched AIO programme: restructured content for extractability, added original benchmark data. Cited in AI Overview within 10 weeks; branded searches rose 22%.",
        },
        {
          title: "AIO as distinct OKR — board alignment",
          body: "CMO asked 'why invest in content if AI answers the question?' PM defined AIO OKR: 'cited in AI answers for 40% of priority commercial queries by Q4.' Gave leadership a measurable goal beyond traffic. Secured headcount for AIO content operations.",
        },
        {
          title: "Competitor cited by default — entity gap",
          body: "For 'what is data mesh,' competitor was cited in ChatGPT, Perplexity, and Google AI Overview despite PM's page ranking #1. Analysis: competitor had stronger entity presence (Wikipedia mention, analyst reports, conference keynotes). AIO required entity authority investment, not just on-page SEO.",
        },
      ],
    }),
    buildSection({
      number: "8.2",
      title: "The AI search landscape",
      subtitle: "Google AI Overviews, ChatGPT, Perplexity, Bing Copilot — the surfaces where AIO visibility matters",
      take: "AI search spans multiple surfaces with different citation behaviours: Google AI Overviews (SERP-integrated, sources linked below answer), ChatGPT with browsing (conversational, cites during multi-turn research), Perplexity (source-forward, citation-per-sentence model), Bing Copilot (SERP + chat hybrid), and vertical AI tools (industry-specific answer engines). Each surface has different source selection logic, freshness requirements, and citation formats. PMs prioritise surfaces by audience behaviour — B2B buyers may use Perplexity and ChatGPT; consumers may see AI Overviews first.",
      why: "Optimising for one AI surface misses others. PMs who map audience research behaviour to AI platforms allocate AIO investment across the surfaces that matter for their market.",
      paragraphs: [
        [
          s("Google AI Overviews dominate consumer and prosumer queries. "),
          x(
            "AI Overviews appear on ~15–30% of Google queries and growing. Sources are listed below the synthesized answer — citation is visible but subordinate to the answer.",
            "PM monitors AI Overview presence for priority keywords weekly.",
          ),
          s(" Losing AI Overview citation while ranking organically means losing the query's primary real estate."),
        ],
        [
          s("Perplexity and ChatGPT serve research-heavy journeys. "),
          x(
            "B2B buyers increasingly start vendor research in conversational AI. Perplexity cites per-claim; ChatGPT cites during browsing turns.",
            "Citation here influences consideration before the buyer ever visits your site.",
          ),
          s(" PM includes conversational AI surfaces in AIO tracking for commercial investigation queries."),
        ],
        [
          s("Each surface weights signals differently. "),
          x(
            "Google: E-E-A-T, structured data, passage relevance. Perplexity: recency, source diversity, direct answer extractability. ChatGPT: authority, comprehensiveness, training data presence.",
            "No single optimisation checklist works across all surfaces.",
          ),
          s(" PM builds surface-specific playbooks within the broader AIO programme."),
        ],
      ],
      examples: [
        {
          title: "Surface prioritisation — B2B research path",
          body: "PM surveyed 200 enterprise buyers: 34% used Perplexity for vendor research, 28% ChatGPT, 41% Google (often with AI Overview). PM weighted AIO investment: 40% Google AI Overviews, 35% Perplexity, 25% ChatGPT. Surface-specific content formats followed — concise extractable passages for Google, comprehensive comparison tables for Perplexity.",
        },
        {
          title: "Perplexity citation — original data won",
          body: "PM published original industry benchmark report with clear data tables. Perplexity cited the report in 12 category queries within 3 weeks. Blog rewrites of existing content were never cited. Original, structured data was the differentiator across AI surfaces.",
        },
        {
          title: "AI Overview absent — adjusted expectations",
          body: "PM tracked 50 priority keywords: AI Overviews appeared on only 18. For the 32 without AI Overviews, traditional SEO remained primary. PM avoided over-investing in AIO formatting for queries without AI surfaces. Surface monitoring prevented wasted effort.",
        },
      ],
    }),
    buildSection({
      number: "8.3",
      title: "How AI systems select sources",
      subtitle: "Retrieval, ranking, and synthesis — the pipeline that determines whether your content becomes a citation",
      take: "AI search systems follow a pipeline: retrieve candidate sources (web search, index, or training data), rank by relevance and authority, extract passages, synthesise an answer, and attribute citations. Retrieval favours content that directly answers the query in extractable form. Ranking weights topical authority, freshness, E-E-A-T signals, and domain trust. Synthesis selects the clearest, most quotable passages. PMs optimise for each stage: retrieval (indexability, semantic coverage), ranking (authority, entity presence), extraction (passage clarity, structured data), and attribution (brand name prominence, unique data).",
      why: "PMs who optimise only for retrieval (classic SEO) miss ranking and extraction stages. Content that ranks but isn't extractable doesn't get cited. Understanding the full pipeline directs investment.",
      paragraphs: [
        [
          s("Retrieval requires semantic coverage and indexability. "),
          x(
            "AI systems retrieve pages that comprehensively cover the query topic. Thin content, orphan pages, and noindex errors eliminate candidates before ranking begins.",
            "PM ensures priority content is indexed, internally linked, and topically complete.",
          ),
          s(" Retrieval is table stakes — the same crawlability SEO has always required."),
        ],
        [
          s("Ranking within the candidate set favours authority and freshness. "),
          x(
            "Among retrieved pages, AI systems prefer established authorities, recently updated content, and sources with corroborating mentions across the web.",
            "New content on authoritative domains outperforms comprehensive content on unknown domains.",
          ),
          s(" PM invests in domain authority and entity presence, not just page-level optimisation."),
        ],
        [
          s("Extraction selects quotable, self-contained passages. "),
          x(
            "AI systems extract 1–3 sentence passages that directly answer the query. Buried answers in 3,000-word essays get skipped.",
            "Answer-first paragraph structure — clear claim, supporting evidence, in first 150 words — maximises extraction.",
          ),
          s(" PM adds 'extractability review' to content QA checklist."),
        ],
      ],
      examples: [
        {
          title: "Extractability fix — citation in 2 weeks",
          body: "Comprehensive 4,000-word guide on 'SOC 2 compliance' ranked #2 but was never cited. PM restructured: answer-first summary box, H2-per-question format, 2–3 sentence definitional paragraphs. AI Overview citation appeared within 2 weeks. Same URL, same authority — better extraction.",
        },
        {
          title: "Authority gap — new domain never cited",
          body: "Startup published best-in-class comparison content. Google ranked it #6; AI systems never cited it. Established competitors with 10× domain authority were cited despite ranking lower. PM paired content quality with digital PR and analyst mentions to build authority. Citations followed authority signals 4 months later.",
        },
        {
          title: "Noindex accident — invisible to AI",
          body: "Staging noindex tag left on 12 pillar pages after migration. Pages ranked nowhere; AI systems couldn't retrieve them. PM caught in monthly crawl audit. Fixed indexing; 8 of 12 pages cited within 6 weeks. Retrieval failure is silent — monitoring is essential.",
        },
      ],
    }),
    buildSection({
      number: "8.4",
      title: "Content characteristics that win citations",
      subtitle: "Original data, clear definitions, structured comparisons — the content traits AI systems prefer to quote",
      take: "Cited content shares common traits: original data or research (not available elsewhere), clear definitional passages (self-contained 2–3 sentence answers), structured comparisons (tables, pros/cons lists), specific numbers and statistics (quotable facts), expert attribution (named authors with credentials), and freshness signals (updated dates, current year references). Generic rewrites of existing content rarely get cited — AI systems have already seen the same information. PMs prioritise original, extractable, fact-dense content for AIO targets.",
      why: "Content production volume without citation-worthy characteristics wastes budget. PMs who define 'citation-worthy content criteria' in briefs produce assets AI systems actually select.",
      paragraphs: [
        [
          s("Original data is the strongest citation magnet. "),
          x(
            "Benchmark reports, survey results, proprietary metrics, and case study numbers give AI systems something unique to quote.",
            "PM prioritises one original data asset per quarter over 20 generic blog posts.",
          ),
          s(" 'First source with this data' beats 'best written explanation of existing data.'"),
        ],
        [
          s("Definitional clarity serves extraction algorithms. "),
          x(
            "'[Term] is [category] that [function], used by [audience] to [outcome].' — template AI systems extract reliably.",
            "Glossary and 'what is' pages are AIO infrastructure, not SEO afterthoughts.",
          ),
          s(" PM maintains a glossary of 50+ core terms with extractable definitions."),
        ],
        [
          s("Structured formats outperform narrative prose for citations. "),
          x(
            "Tables, numbered lists, comparison matrices, and FAQ schema are machine-parseable. Long narrative paragraphs are not.",
            "PM requires at least one structured data element per AIO-targeted page.",
          ),
          s(" Format for machines first, narrative second — on AIO priority pages."),
        ],
      ],
      examples: [
        {
          title: "Original benchmark — 18 AI citations",
          body: "PM commissioned annual 'State of DevOps Automation' survey with 400 respondents. Published with clear data tables and methodology section. Cited in Google AI Overviews (8 queries), Perplexity (6 queries), ChatGPT (4 queries) within one quarter. Single data asset outperformed 30 blog posts.",
        },
        {
          title: "Glossary infrastructure — entity foundation",
          body: "PM built 60-term glossary with extractable definitions, schema markup, and internal links to pillar pages. 45 terms cited in AI answers within 6 months. Glossary became AIO foundation — each definition a potential citation anchor.",
        },
        {
          title: "Generic rewrite — zero citations",
          body: "Agency delivered 10 'AI SEO best practices' articles — all rehashing existing content. None cited by any AI surface after 4 months. PM cancelled retainer clause for generic content. Replaced with 3 original research pieces. First research piece cited within 5 weeks.",
        },
      ],
    }),
    buildSection({
      number: "8.5",
      title: "E-E-A-T in AI search",
      subtitle: "Experience, expertise, authoritativeness, and trust — the signals that determine whether AI systems trust your content enough to cite it",
      take: "E-E-A-T (Experience, Expertise, Authoritativeness, Trustworthiness) is amplified in AI search — systems must choose which sources to quote in a single answer, so trust signals act as citation filters. Experience: first-hand accounts, case studies, original research. Expertise: credentialed authors, technical depth, accurate terminology. Authoritativeness: brand recognition, external citations, industry mentions, Wikipedia/Knowledge Graph presence. Trustworthiness: accurate claims, transparent methodology, updated content, HTTPS, clear ownership. PMs treat E-E-A-T as AIO infrastructure, not a Google guideline checkbox.",
      why: "AI systems risk reputational damage by citing untrustworthy sources. They bias toward sources with corroborated authority. PMs who invest in E-E-A-T build citation preference that compounds over time.",
      paragraphs: [
        [
          s("Experience signals differentiate from AI-generated fluff. "),
          x(
            "First-hand case studies, screenshots of real implementations, named customer outcomes — content only your team could produce.",
            "PM requires 'experience evidence' in AIO-targeted content briefs.",
          ),
          s(" Generic advice without experience markers is increasingly ignored by AI systems."),
        ],
        [
          s("Entity authority extends beyond your website. "),
          x(
            "Wikipedia mentions, analyst report citations, conference presentations, podcast appearances — off-site signals that establish your brand as a recognised entity.",
            "PM coordinates with PR and analyst relations for entity building — not just content team.",
          ),
          s(" AI systems check whether the broader web corroborates your authority."),
        ],
        [
          s("Trust requires accuracy and transparency. "),
          x(
            "Factual errors, outdated statistics, and missing methodology destroy citation eligibility. AI systems cross-reference claims against other sources.",
            "PM implements fact-check and freshness review cycles for AIO priority content.",
          ),
          s(" One factual error on a cited page can eliminate citation trust for the entire domain."),
        ],
      ],
      examples: [
        {
          title: "Author expertise — citation preference shifted",
          body: "PM added named author bios with credentials (CISSP, 12 years enterprise security) to all security content. Attributed articles cited 3× more often than unattributed equivalents. AI systems extracted author expertise as trust signal. E-E-A-T investment was author infrastructure, not vanity.",
        },
        {
          title: "Entity building — Wikipedia mention unlocked citations",
          body: "Brand had strong content but zero AI citations for 18 months. PM invested in notability: industry award, analyst mention, conference keynote. Wikipedia stub article created. AI citations for branded and category queries appeared within 3 months. Entity authority was the missing layer.",
        },
        {
          title: "Outdated statistics — citation revoked",
          body: "Page cited in AI Overview for 'cloud migration statistics' used 2021 data. Competitor published 2025 data. PM's citation replaced within 6 weeks. PM implemented annual freshness audit for all data-heavy pages. Stale content loses citations silently.",
        },
      ],
    }),
    buildSection({
      number: "8.6",
      title: "Passage-level optimisation",
      subtitle: "Designing content so AI systems can extract precise, self-contained answers — the unit of AIO success",
      take: "Passage-level optimisation structures content so individual sections — not just pages — serve as citation candidates. Techniques: answer-first paragraphs (direct answer in first 2 sentences), H2-as-question format (each heading is a query, each section is an answer), 2–3 sentence definitional blocks, summary boxes with key facts, and FAQ schema matching real user questions. PMs evaluate content at passage granularity: 'could an AI system extract this paragraph as a standalone answer?' If not, restructure.",
      why: "AI systems cite passages, not pages. A 5,000-word page with one extractable paragraph gets one citation opportunity. A page with 15 extractable passages gets 15 opportunities. Passage architecture multiplies AIO surface area.",
      paragraphs: [
        [
          s("Answer-first structure front-loads extraction value. "),
          x(
            "Lead each section with the direct answer, then provide supporting detail. Inverted pyramid — not narrative build-up.",
            "PM rejects content briefs that specify 'hook with story, answer at end.'",
          ),
          s(" AI extraction reads top-down; buried answers are missed answers."),
        ],
        [
          s("H2-as-question maps content to query patterns. "),
          x(
            "'What is X?' 'How does X work?' 'X vs Y: which is better?' — headings mirror how users and AI systems formulate queries.",
            "Each H2 section becomes an independent citation candidate.",
          ),
          s(" PM uses People Also Ask and AI query logs to generate H2 question lists."),
        ],
        [
          s("Summary boxes concentrate quotable facts. "),
          x(
            "Key takeaways box, definition callout, stat highlight — visually distinct blocks with 3–5 quotable facts.",
            "Schema markup on summary boxes increases machine parseability.",
          ),
          s(" PM templates include mandatory summary/definition block on AIO-targeted pages."),
        ],
      ],
      examples: [
        {
          title: "H2-as-question — 5× citation surface",
          body: "PM restructured 'cloud security' pillar from narrative format (6 H2s as topics) to question format (14 H2s as questions). Citation count for the URL rose from 1 query to 7 queries across AI surfaces. Same word count, more extractable passages.",
        },
        {
          title: "Answer-first rewrite — citation in 10 days",
          body: "Section on 'data encryption at rest' buried the definition in paragraph 4. PM moved definition to sentence 1: 'Data encryption at rest converts stored data into ciphertext using AES-256 or equivalent, rendering it unreadable without the decryption key.' Cited in AI Overview 10 days later.",
        },
        {
          title: "FAQ schema — PAA and AI coverage",
          body: "PM added FAQ schema with 12 questions matching People Also Ask for priority page. Featured snippet captured for 4 questions; AI Overview cited page for 6. FAQ schema served dual purpose: traditional SERP and AIO extraction.",
        },
      ],
    }),
    buildSection({
      number: "8.7",
      title: "Brand visibility beyond blue links",
      subtitle: "Entity presence, brand mentions, and knowledge graph authority — AIO visibility when your URL isn't the citation",
      take: "AIO brand visibility extends beyond URL citations. AI systems name brands in synthesized answers — 'leading tools include [Brand A], [Brand B], and [Brand C]' — without linking to any of them. Entity presence (Knowledge Graph, Wikipedia, Wikidata, consistent NAP, schema Organization markup) increases the probability of brand mention. PMs track brand mention rate in AI answers separately from URL citation rate. Both matter; brand mention influences consideration even without a click.",
      why: "PMs who measure only URL citations miss brand mention value. A buyer who sees your brand named in a ChatGPT comparison may search for you directly — no citation click needed. Entity presence is the AIO brand strategy.",
      paragraphs: [
        [
          s("Knowledge Graph presence is AIO brand infrastructure. "),
          x(
            "Google Knowledge Graph, Wikidata entry, consistent entity references across the web — these are how AI systems 'know' your brand exists.",
            "PM coordinates entity creation with PR, legal, and SEO teams.",
          ),
          s(" Brands without entity presence are invisible to AI brand mention algorithms."),
        ],
        [
          s("Brand mention tracking is a separate AIO metric. "),
          x(
            "Query 50 priority prompts across AI surfaces monthly. Record: brand mentioned? URL cited? Competitors mentioned?",
            "Brand mention rate ≠ citation rate. Track both.",
          ),
          s(" PM reports brand mention share of voice in AI answers quarterly."),
        ],
        [
          s("Consistent entity signals across the web compound. "),
          x(
            "Same brand name, same description, same category classification across website, social, directories, press, and Wikipedia.",
            "Inconsistent entity signals confuse AI systems — they may not recognise your brand.",
          ),
          s(" PM maintains an entity style guide — brand name, description, category — for all external mentions."),
        ],
      ],
      examples: [
        {
          title: "Brand mention without citation — direct traffic uplift",
          body: "PM tracked AI answers for 'best incident management tools.' Brand mentioned in 40% of ChatGPT responses but URL cited in only 8%. Despite low citation rate, branded direct traffic rose 15% — users searched brand name after AI mention. Brand mention metric justified continued AIO investment.",
        },
        {
          title: "Entity inconsistency — AI confusion",
          body: "Parent company rebranded product line but Wikipedia, Wikidata, and schema markup still used old name. AI systems mentioned old brand name or confused two entities. PM ran entity reconciliation project: updated all references in 6 weeks. Correct brand mentions normalised across AI surfaces.",
        },
        {
          title: "Competitor entity dominance — share of voice gap",
          body: "PM audited AI brand mentions for 20 category queries. Market leader mentioned in 78% of AI answers; PM's brand in 12%. Entity gap analysis: leader had Wikipedia article, 4 analyst mentions, and Knowledge Panel. PM built 18-month entity authority roadmap.",
        },
      ],
    }),
    buildSection({
      number: "8.8",
      title: "AIO vs traditional SEO",
      subtitle: "What persists, what changes, and what to measure differently — the PM's dual-track framework",
      take: "Traditional SEO fundamentals persist in AIO: crawlability, indexation, topical authority, internal linking, backlink quality, and page speed. What changes: click-through is no longer the only success event (citation matters), passage-level quality matters more than page-level word count, entity presence is as important as on-page optimisation, freshness cycles accelerate, and zero-click answers reduce traffic even as visibility increases. PMs run dual-track measurement: classic SEO metrics (rankings, traffic, conversions) plus AIO metrics (citation rate, brand mention rate, AI share of voice).",
      why: "Teams that abandon SEO for AIO — or ignore AIO while optimising only for clicks — both fail. The PM's job is dual-track strategy with shared content infrastructure serving both goals.",
      paragraphs: [
        [
          s("Shared content serves both tracks — with AIO additions. "),
          x(
            "Same pillar page can rank (#3 position) and get cited (AI Overview source). AIO additions: answer-first structure, schema, original data, extractability review.",
            "PM doesn't build separate 'AIO content' and 'SEO content' — one asset, dual optimisation.",
          ),
          s(" Separate tracks create production duplication and governance chaos."),
        ],
        [
          s("Traffic may decline while influence increases. "),
          x(
            "AI answers satisfy users without clicks. Cited content drives brand awareness and direct traffic, not referral traffic.",
            "PM educates stakeholders: citation visibility is valuable even when GA shows flat traffic.",
          ),
          s(" Attribution models must capture AI-influenced branded search and direct visits."),
        ],
        [
          s("AIO accelerates freshness requirements. "),
          x(
            "AI systems prefer recent sources. Content refresh cycles compress from annual to quarterly for priority pages.",
            "PM builds refresh calendar for AIO-targeted content — not just publish calendar.",
          ),
          s(" Stale cited content loses citations faster than it loses rankings."),
        ],
      ],
      examples: [
        {
          title: "Dual-track dashboard — stakeholder clarity",
          body: "PM built dashboard with two panels: SEO (rankings, organic traffic, conversions) and AIO (citation rate, brand mentions, AI share of voice). Leadership saw SEO traffic flat but AIO citation rate rose from 8% to 31% over 2 quarters. Dual-track reporting prevented premature content budget cuts.",
        },
        {
          title: "Traffic decline — citation success story",
          body: "Organic traffic to top pillar dropped 18% after AI Overviews expanded. But brand mentioned in 52% of AI answers for that topic (up from 9%). Branded search volume rose 24%. PM reframed narrative: 'we own the AI answer even when users don't click.' Stakeholders accepted traffic trade-off with evidence.",
        },
        {
          title: "Refresh cadence — citation retention",
          body: "PM implemented quarterly refresh for top 30 AIO-cited pages. Updated statistics, added new examples, refreshed schema dates. Citation retention rate: 89% vs 54% for annually-refreshed pages. Freshness investment directly correlated with sustained AI visibility.",
        },
      ],
    }),
    buildSection({
      number: "8.9",
      title: "Measuring AIO performance",
      subtitle: "Citation tracking, brand mention monitoring, and AI share of voice — the metrics that prove AIO investment works",
      take: "AIO measurement toolkit: manual prompt auditing (query priority prompts across AI surfaces monthly), citation tracking tools (Otterly, Profound, Peec AI, or custom monitoring), brand mention rate (% of AI answers naming your brand), citation rate (% of AI answers linking to your content), AI share of voice (your citations vs competitors for priority queries), and assisted branded search (branded search volume correlation with AI visibility). PMs define AIO KPIs at programme launch — not after stakeholders ask 'is this working?'",
      why: "AIO without measurement is faith-based marketing. PMs who define citation and mention KPIs upfront secure continued investment and can iterate on what works.",
      paragraphs: [
        [
          s("Manual prompt auditing is the baseline. "),
          x(
            "Monthly: run 50–100 priority queries through Google AI Overviews, ChatGPT, Perplexity. Record citations, mentions, and competitor presence.",
            "Manual auditing is labour-intensive but calibrates automated tools.",
          ),
          s(" PM starts with manual auditing; automates once baseline is established."),
        ],
        [
          s("AI share of voice is the competitive metric. "),
          x(
            "For priority query set: what % of AI citations go to your brand vs competitors?",
            "Share of voice trending up = AIO programme working, regardless of absolute traffic.",
          ),
          s(" PM reports AI share of voice in quarterly business reviews."),
        ],
        [
          s("Correlate AIO visibility with branded search and pipeline. "),
          x(
            "Track branded search volume, direct traffic, and pipeline influenced by AI-visible queries.",
            "Proves AIO business impact beyond vanity citation counts.",
          ),
          s(" PM connects AIO metrics to revenue narrative for board reporting."),
        ],
      ],
      examples: [
        {
          title: "Manual audit baseline — calibrated automation",
          body: "PM ran manual audit on 80 queries for 3 months before subscribing to citation tracking tool. Manual baseline: 11% citation rate, 19% brand mention rate. Tool showed 13% and 22% — close enough to trust. PM saved 15 hours/month while maintaining accuracy spot-checks.",
        },
        {
          title: "AI share of voice — competitive win tracked",
          body: "PM tracked share of voice for 30 commercial investigation queries. Q1: 14% (4th of 6 competitors). Q3: 31% (2nd). Single metric convinced leadership AIO programme was working. Competitor analysis included in quarterly report.",
        },
        {
          title: "Pipeline correlation — AIO ROI proven",
          body: "PM correlated AI citation presence with CRM data: deals where buyer's company appeared in AI answer tracking had 18% higher close rate. Not causation, but compelling correlation. Secured 2-year AIO programme funding.",
        },
      ],
    }),
    buildSection({
      number: "8.10",
      title: "Building an AIO programme",
      subtitle: "Team structure, content operations, governance, and roadmap — how PMs institutionalise AI Search Optimisation",
      take: "AIO programme components: governance (citation-worthy content criteria, extractability QA checklist, E-E-A-T standards), operations (AIO-targeted content calendar, quarterly refresh cycles, original data pipeline), measurement (citation tracking, brand mention monitoring, share of voice reporting), team (SEO lead + content + PR for entity building + analytics), and roadmap (Phase 1: audit and baseline, Phase 2: restructure priority content, Phase 3: original data and entity investment, Phase 4: scale and automate). PMs own the programme charter and cross-functional coordination.",
      why: "AIO fails as a side project. Without programme structure — governance, measurement, dedicated capacity — it degrades into one-off experiments that don't compound. PMs who institutionalise AIO build durable competitive advantage.",
      paragraphs: [
        [
          s("Phase 1: audit and baseline before production. "),
          x(
            "Map priority queries, run manual AI audit, score current citation rate and brand mentions, identify top gaps.",
            "Baseline prevents 'we feel like it's working' narrative without evidence.",
          ),
          s(" PM delivers AIO audit report before requesting production budget."),
        ],
        [
          s("Governance prevents citation-unworthy content at scale. "),
          x(
            "AIO content criteria in every brief: original data? answer-first structure? schema? author expertise? freshness plan?",
            "QA checklist rejects content that ranks but won't be cited.",
          ),
          s(" PM embeds AIO criteria in existing content governance — not a separate process."),
        ],
        [
          s("Cross-functional coordination is non-negotiable. "),
          x(
            "SEO owns technical and on-page. Content owns extractability and structure. PR owns entity building. Analytics owns measurement. PM coordinates.",
            "AIO programme fails when it's 'the SEO team's side project.'",
          ),
          s(" PM charters AIO as cross-functional programme with shared KPIs."),
        ],
      ],
      examples: [
        {
          title: "Programme charter — secured cross-functional buy-in",
          body: "PM wrote 2-page AIO programme charter: scope, KPIs, team roles, quarterly milestones, budget. Signed by CMO, SEO lead, content director, and PR lead. Charter prevented AIO from being deprioritised when quarterly SEO fire drills emerged.",
        },
        {
          title: "Governance checklist — caught 12 issues pre-publish",
          body: "PM added AIO QA gate to content workflow: extractability review, schema check, author attribution, freshness date. First quarter: 12 of 45 articles failed AIO QA and were restructured pre-publish. Post-publish citation rate for QA-passed content: 34% vs 7% for pre-governance content.",
        },
        {
          title: "18-month roadmap — phased investment",
          body: "Phase 1 (Q1): audit + restructure top 20 pages. Phase 2 (Q2–Q3): original data report + glossary build. Phase 3 (Q4–Q5): entity authority (Wikipedia, analyst). Phase 4 (Q6+): automate tracking, scale to 100 pages. PM presented phased roadmap to board; each phase had clear KPI gate.",
        },
      ],
    }),
  ],
  quiz: [
    {
      q: "What is AIO (AI Search Optimisation)?",
      options: [
        "Replacing all SEO with AI-generated content.",
        "Optimising to be cited and mentioned in AI-generated search answers.",
        "Buying ads on ChatGPT and Perplexity.",
        "Using AI tools to write blog posts faster.",
      ],
      correct: 1,
      correctFeedback:
        "Right. AIO targets citation and brand presence in AI answers — a distinct visibility goal from traditional rankings.",
      wrongFeedback:
        "AIO is about earning citations in AI answers. Re-read section 8.1.",
    },
    {
      q: "What content characteristic most strongly attracts AI citations?",
      options: [
        "Longest word count on the topic.",
        "Original data and research not available elsewhere.",
        "Keyword density above 3%.",
        "Maximum number of internal links.",
      ],
      correct: 1,
      correctFeedback:
        "Correct. Original, quotable data gives AI systems something unique to cite.",
      wrongFeedback:
        "Original data and extractable facts win citations. Re-read section 8.4.",
    },
    {
      q: "What is passage-level optimisation?",
      options: [
        "Writing longer paragraphs for better narrative flow.",
        "Structuring content so individual sections can be extracted as standalone answers.",
        "Adding more images per page.",
        "Optimising meta descriptions for each paragraph.",
      ],
      correct: 1,
      correctFeedback:
        "Right. AI systems cite passages, not pages — each section should be extractable.",
      wrongFeedback:
        "Passage-level optimisation makes sections independently quotable. Re-read section 8.6.",
    },
    {
      q: "How should PMs measure AIO success alongside traditional SEO?",
      options: [
        "Replace all SEO metrics with AIO metrics.",
        "Track only organic traffic — citations don't matter.",
        "Run dual-track measurement: classic SEO metrics plus citation rate, brand mentions, and AI share of voice.",
        "Measure AIO only after traffic doubles.",
      ],
      correct: 2,
      correctFeedback:
        "Correct. Dual-track measurement captures both click-based and citation-based visibility.",
      wrongFeedback:
        "PMs need dual-track SEO + AIO metrics. Re-read section 8.8.",
    },
    {
      kind: "order",
      q: "Put the AIO programme build phases in the correct order.",
      prompt: "Drag to arrange from first phase (top) to last phase (bottom).",
      items: [
        "Scale content optimisation and automate tracking.",
        "Audit current AI visibility and establish baseline metrics.",
        "Invest in entity authority and original data assets.",
        "Restructure priority content for extractability.",
      ],
      correctFeedback:
        "Right. Audit → restructure → entity/data investment → scale.",
      wrongFeedback:
        "Programme order: audit, restructure, entity/data, scale. Re-read section 8.10.",
    },
    {
      kind: "categorize",
      q: "Match each AIO concept to its category.",
      categories: [
        "Content optimisation",
        "Brand & entity",
        "Measurement",
      ],
      items: [
        { text: "Answer-first paragraph structure", category: 0 },
        { text: "Wikipedia and Knowledge Graph presence", category: 1 },
        { text: "AI share of voice tracking", category: 2 },
        { text: "FAQ schema and H2-as-question format", category: 0 },
        { text: "Brand mention rate in AI answers", category: 2 },
        { text: "Consistent entity signals across the web", category: 1 },
      ],
      correctFeedback:
        "Right. Content, entity, and measurement are the three AIO programme pillars.",
      wrongFeedback:
        "Group items into content optimisation, brand/entity, and measurement. Re-read sections 8.6–8.9.",
    },
  ],
});
