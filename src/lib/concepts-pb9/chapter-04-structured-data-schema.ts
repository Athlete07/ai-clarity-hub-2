import { buildChapter, buildSection, s, x } from "../concepts-pb4-helpers";

export const chapter04StructuredDataSchema = buildChapter({
  slug: "pb9-structured-data-schema",
  number: 4,
  shortTitle: "Structured Data",
  title: "Structured Data & Schema",
  readingMinutes: 28,
  summary:
    "Speaking the language search engines prefer — the markup that makes your content machine-readable and eligible for rich results",
  keyTakeaway:
    "Structured data is not a ranking hack — it is a machine-readable contract between your content and search systems. JSON-LD schema tells Google what your page means (product, FAQ, article, organisation) so it can surface rich results and feed AI Overviews with trustworthy facts. PMs who treat schema as a one-time dev ticket miss the compounding value: every correctly marked page becomes a citation candidate with explicit fields search can extract without guessing.",
  pmCallout:
    "As a PM: before you ask engineering for schema, map which content types drive revenue and which rich result formats apply. FAQ and HowTo schema on high-intent pages often beats Article schema on every blog post. Prioritise by traffic value × rich result eligibility × implementation cost — not by marking up the entire site at once.",
  sections: [
    buildSection({
      number: "4.1",
      title: "What is structured data",
      subtitle: "Machine-readable markup added to HTML that explicitly tells search engines what your content means — not just what it says",
      take: "Structured data is standardised markup embedded in web pages that labels content elements in a machine-readable format — product price, author name, event date, FAQ question. Search engines parse visible HTML text heuristically; structured data removes ambiguity by declaring 'this is a Product with price $49 and availability InStock.' It powers rich results, knowledge panels, and AI citation extraction.",
      why: "PMs who confuse structured data with 'better SEO copy' scope the wrong work. Schema is an engineering deliverable with measurable eligibility outcomes — rich result impressions in Search Console — not a content rewrite.",
      paragraphs: [
        [
          s("Structured data complements, not replaces, quality content. "),
          x(
            "Google still requires visible content matching the markup. Invisible schema for prices or reviews that don't appear on-page triggers manual actions.",
            "The rule: if it's in schema, it must be on the page. PMs include this in acceptance criteria for any schema sprint.",
          ),
          s(" Schema without visible content is a policy violation, not an optimisation."),
        ],
        [
          s("The benefit is explicit semantics, not keyword stuffing. "),
          x(
            "A paragraph saying 'our team of experts published this in March' requires NLP to extract author and date. Article schema states them as fields: author, datePublished.",
            "AI Overviews and featured snippets prefer pages where facts are structurally extractable — schema accelerates that.",
          ),
          s(" Machine-readable fields reduce extraction errors in AI-generated answers."),
        ],
        [
          s("Implementation scope should follow content inventory, not site-wide defaults. "),
          x(
            "E-commerce: Product + Review schema on PDPs. Publishers: Article + Author on editorial. SaaS: FAQ + HowTo on help centre. Blanket WebPage schema everywhere adds crawl noise without rich result upside.",
            "PM builds a content-type → schema-type matrix before the sprint.",
          ),
          s(" Targeted schema beats universal markup."),
        ],
      ],
      examples: [
        {
          title: "SaaS help centre — FAQ schema drove AIO citations",
          body: "PM prioritised FAQ schema on top 40 support articles (60% of help traffic). Rich result impressions +34% in 8 weeks; three articles cited in AI Overviews for 'how to integrate X API.' Lesson: structured data on high-intent help content beats blog-wide Article schema.",
        },
        {
          title: "Marketplace — invisible review schema penalty",
          body: "Engineering added AggregateRating schema sitewide from database without rendering stars on-page. Google Search Console flagged structured data policy issues; rich results stripped for 6 weeks. PM rewrote sprint scope: schema only where UI displays the data. Recovery took one crawl cycle.",
        },
        {
          title: "Publisher — datePublished fixed freshness signals",
          body: "News site had updated articles showing old dates in SERPs. Article schema with dateModified aligned to visible 'last updated' footer. CTR on refreshed evergreen guides rose 18% — search showed accurate recency. PM metric: schema accuracy = SERP snippet truthfulness.",
        },
      ],
    }),
    buildSection({
      number: "4.2",
      title: "What is Schema.org",
      subtitle: "The shared vocabulary for structured data — the taxonomy of types that Google, Bing, and others agreed to understand",
      take: "Schema.org is the collaborative vocabulary — types (Product, Article, FAQPage), properties (name, price, author), and expected relationships — that major search engines agreed to parse. It's not a Google proprietary format; it's the lingua franca of structured data. Types nest: LocalBusiness extends Organisation; NewsArticle extends Article.",
      why: "PMs who say 'add Google schema' often mean Schema.org types interpreted by Google. Understanding the vocabulary prevents requesting invalid combinations — e.g., Product schema on a blog post — and speeds vendor conversations.",
      paragraphs: [
        [
          s("Types define what the page is about; properties define attributes. "),
          x(
            "@type: Product declares a product page. Properties like offers.price, brand.name, and aggregateRating.ratingValue fill in details.",
            "Wrong @type is the most common implementation error — FAQ content marked as WebPage loses FAQ rich result eligibility.",
          ),
          s(" PM reviews @type choices per template, not per developer discretion."),
        ],
        [
          s("Google supports a subset of Schema.org for rich results. "),
          x(
            "Schema.org defines hundreds of types; Google documents which trigger rich results: Product, FAQ, HowTo, Recipe, Event, JobPosting, etc.",
            "Bing and other engines overlap but differ. PM checks Google Search Central docs for supported types — not the full Schema.org catalogue.",
          ),
          s(" Supported types list is the PM's schema backlog filter."),
        ],
        [
          s("Extensions and custom properties require caution. "),
          x(
            "Schema.org allows additional properties, but unsupported fields are ignored for rich results. Proprietary extensions don't hurt but don't help eligibility.",
            "Stick to documented properties for v1; extend only when a clear rich result or knowledge graph use case exists.",
          ),
          s(" Custom schema fields are engineering time without search upside unless documented."),
        ],
      ],
      examples: [
        {
          title: "E-commerce — wrong @type blocked merchant listings",
          body: "Category pages used CollectionPage with embedded Product arrays — valid Schema.org but wrong pattern for Google Merchant. PM required dedicated Product @type on each PDP with offers, image, and availability. Merchant Center disapprovals dropped from 40% to 8%.",
        },
        {
          title: "Event SaaS — Event schema unlocked date rich results",
          body: "Conference platform marked sessions as generic WebPage. PM scoped Event schema with startDate, location (VirtualLocation), and performer. Event rich results appeared for '[conference name] 2025 schedule' queries — branded SERP real estate without ad spend.",
        },
        {
          title: "B2B glossary — DefinedTerm schema pilot",
          body: "PM tested DefinedTerm and DefinedTermSet on 50 glossary pages. No rich result yet, but AI Overview citations increased for definition queries. Treated as experimental schema investment with 90-day citation tracking — not traffic KPI alone.",
        },
      ],
    }),
    buildSection({
      number: "4.3",
      title: "JSON-LD vs Microdata vs RDFa",
      subtitle: "The three implementation formats — and why JSON-LD became the recommended approach",
      take: "Structured data can be embedded three ways: JSON-LD (a script block in the page head), Microdata (HTML attributes on elements), and RDFa (RDF attributes in HTML). Google recommends JSON-LD because it separates markup from presentation, is easier to generate from CMS templates, and doesn't break when designers change HTML structure.",
      why: "PMs approving schema implementation should mandate JSON-LD unless legacy constraints forbid it — it reduces ongoing maintenance cost and CMS coupling.",
      paragraphs: [
        [
          s("JSON-LD lives in a script tag — decoupled from visible HTML. "),
          x(
            "Engineering injects JSON from product database or CMS fields. Frontend redesigns don't strip schema unless the data pipeline breaks.",
            "Microdata requires itemprop attributes on specific DOM nodes — fragile when React components refactor.",
          ),
          s(" JSON-LD is the default for dynamic sites and headless CMS architectures."),
        ],
        [
          s("Microdata and RDFa still appear in legacy templates. "),
          x(
            "Older WordPress themes and enterprise CMSs may use Microdata. Migration to JSON-LD is a refactor sprint, not urgent unless errors accumulate.",
            "Duplicate formats on the same page (JSON-LD + Microdata for same entity) can confuse validators — pick one.",
          ),
          s(" PM avoids duplicate structured data formats per URL."),
        ],
        [
          s("Server-side generation beats client-side injection. "),
          x(
            "Schema rendered only via JavaScript after page load may be missed by crawlers if rendering fails. SSR or static JSON-LD in initial HTML is reliable.",
            "PM asks: is schema in the first HTML response? If not, flag as technical SEO risk.",
          ),
          s(" Crawlable schema requires server-rendered or prerendered JSON-LD."),
        ],
      ],
      examples: [
        {
          title: "Headless commerce — JSON-LD from API",
          body: "React storefront generated Product schema client-side; rich results intermittent. PM required JSON-LD in SSR response from product API. Rich result impressions stabilised within two crawl cycles. Lesson: schema delivery method matters as much as schema content.",
        },
        {
          title: "WordPress migration — Microdata to JSON-LD",
          body: "Legacy theme used Microdata on blog posts. Replatform to block editor with Yoast JSON-LD output. PM scoped 2-week migration: export old posts, validate new template, redirect-only content unchanged. Zero rich result regression post-migration.",
        },
        {
          title: "Duplicate format confusion",
          body: "Agency added JSON-LD while in-house team kept Microdata on same PDPs. Rich Results Test showed warnings. PM standardised on JSON-LD single source of truth in product data layer — one pipeline, one format.",
        },
      ],
    }),
    buildSection({
      number: "4.4",
      title: "Rich results and their value",
      subtitle: "How structured data unlocks star ratings, FAQs, how-to steps, event dates, and product prices directly in search results",
      take: "Rich results are enhanced SERP listings — FAQ accordions, star ratings, recipe cards, how-to carousels, product price snippets — powered by valid structured data plus Google's quality thresholds. They increase SERP real estate and CTR but don't guarantee rankings. Value is visibility and click quality, not position alone.",
      why: "PMs justify schema investment with rich result CTR lifts and branded SERP presence — measurable in Search Console's Enhancements reports. Without that KPI, schema becomes invisible engineering work.",
      paragraphs: [
        [
          s("Eligibility ≠ guaranteed display. "),
          x(
            "Valid schema makes a page eligible; Google still decides whether to show rich results based on query, quality, and policy.",
            "PM tracks 'valid items' vs 'rich result impressions' — the gap shows opportunity or quality issues.",
          ),
          s(" Schema is necessary but not sufficient for rich snippets."),
        ],
        [
          s("CTR impact varies by format and intent. "),
          x(
            "FAQ rich results can satisfy informational queries without clicks — brand visibility tradeoff. Product rich results with price and stars drive high commercial CTR.",
            "PM models rich result value per format: awareness (FAQ) vs conversion (Product).",
          ),
          s(" Not all rich results are click-positive — some are citation-positive."),
        ],
        [
          s("Competitive SERP analysis includes rich result presence. "),
          x(
            "If competitors show FAQ accordions for your target queries and you don't, you're losing SERP share even at similar rankings.",
            "SERP feature gap analysis belongs in quarterly SEO reviews alongside rank tracking.",
          ),
          s(" Rich result parity is a competitive content deliverable."),
        ],
      ],
      examples: [
        {
          title: "Recipe site — Recipe schema CTR +22%",
          body: "Food publisher implemented Recipe schema with cookTime, nutrition, and image on top 200 posts. Rich result impressions 3× in 12 weeks; organic CTR on recipe queries +22%. PM attributed lift to image + time badges in SERP — not ranking change.",
        },
        {
          title: "B2B software — FAQ rich results cannibalised clicks",
          body: "FAQ schema on pricing page surfaced answers in SERP accordion. Impressions up, clicks flat. PM accepted tradeoff: fewer unqualified clicks, higher demo conversion from remaining traffic. Rich result strategy aligned to funnel quality, not volume.",
        },
        {
          title: "Local services — star ratings as trust signal",
          body: "Home services marketplace added Review schema where verified reviews displayed. Star ratings in local pack adjacent results increased call clicks 15%. PM KPI: rich result CTR on commercial investigation queries.",
        },
      ],
    }),
    buildSection({
      number: "4.5",
      title: "Article and NewsArticle schema",
      subtitle: "The markup for editorial content — how it signals publication date, author, and content type to search and AI systems",
      take: "Article and NewsArticle schema declare headline, author, datePublished, dateModified, image, and publisher organisation. NewsArticle adds stricter freshness expectations for Google News surfaces. For publishers and content marketing teams, this markup helps search systems attribute content correctly, surface bylines, and assess recency for AI citation.",
      why: "Editorial teams invest in E-E-A-T; Article schema is the machine-readable expression of author and date signals. PMs align schema fields with visible bylines and update policies.",
      paragraphs: [
        [
          s("Author should link to a Person or ProfilePage entity. "),
          x(
            "author: { @type: Person, name, url } connects content to author entity — supports E-E-A-T and author archive pages.",
            "Generic 'Admin' author strings waste schema value. PM requires real author profiles for schema-eligible content.",
          ),
          s(" Author schema without author pages is half-implemented E-E-A-T."),
        ],
        [
          s("dateModified must reflect real updates. "),
          x(
            "Changing dateModified without substantive content updates is a spam signal. dateModified should align with visible 'updated' dates and meaningful edits.",
            "PM defines update policy: what counts as a refresh vs cosmetic tweak.",
          ),
          s(" Freshness gaming via schema backfires in quality algorithms."),
        ],
        [
          s("publisher and logo anchor brand entity. "),
          x(
            "publisher: Organisation with logo ImageObject supports Knowledge Panel consistency and Google Discover eligibility.",
            "Logo must meet Google's size and format requirements — PM includes brand assets in schema sprint checklist.",
          ),
          s(" Publisher block ties editorial content to organisation entity."),
        ],
      ],
      examples: [
        {
          title: "Tech blog — author entity programme",
          body: "PM launched author profile pages with Person schema linked from Article author property. Author archive traffic +40%; several authors gained People Also Ask presence. Schema made human bylines machine-navigable.",
        },
        {
          title: "Newsletter republish — NewsArticle vs Article",
          body: "Media site marked evergreen guides as NewsArticle for Discover chase. Google News rejected thin updates. PM split templates: NewsArticle for true news (<48hr), Article for evergreen. Discover traffic stabilised; policy warnings cleared.",
        },
        {
          title: "AI Overview citation — datePublished trust",
          body: "Cybersecurity guide cited in AI Overview for vulnerability query. Article schema dateModified matched substantial February rewrite with new CVE data. PM tracked citation persistence — outdated schema dates correlated with citation drops on competitor content.",
        },
      ],
    }),
    buildSection({
      number: "4.6",
      title: "FAQ and HowTo schema",
      subtitle: "The structured formats that directly feed AI Overviews and featured snippets — the highest-leverage schema types for most content teams",
      take: "FAQPage schema marks question-answer pairs; HowTo schema marks step-by-step instructions with optional images, tools, and time estimates. Both map directly to SERP features and AI Overview extraction patterns. They're the highest ROI schema types for support, educational, and commercial investigation content.",
      why: "When PMs have limited engineering bandwidth, FAQ and HowTo schema on top-traffic instructional pages deliver the fastest rich result and AI citation wins.",
      paragraphs: [
        [
          s("FAQ content must be visible on-page — not schema-only. "),
          x(
            "Google requires matching visible Q&A. Hidden FAQ schema in JSON-LD alone violates guidelines.",
            "Accordion UI is fine — content must be in HTML, not loaded only on click in ways crawlers miss (test with rendered HTML).",
          ),
          s(" PM pairs FAQ schema with UX that displays the same questions users see in SERP."),
        ],
        [
          s("HowTo steps need clear, ordered instructions. "),
          x(
            "Each HowToStep needs name and text; image per step improves rich result quality.",
            "Vague steps ('configure settings') fail extraction. PM applies content quality bar to schema-bound help articles.",
          ),
          s(" HowTo schema forces instructional content discipline."),
        ],
        [
          s("Don't mark up pages that aren't true FAQs or how-tos. "),
          x(
            "Applying FAQ schema to a sales page with rhetorical questions triggers manual actions.",
            "One FAQPage per URL with genuinely user-asked questions — sourced from support tickets and People Also Ask research.",
          ),
          s(" FAQ schema scope = real user questions, not marketing copy."),
        ],
      ],
      examples: [
        {
          title: "Fintech onboarding — HowTo schema on KYC guide",
          body: "PM prioritised HowTo schema on identity verification guide (top support driver). HowTo rich results appeared for 'how to verify account' queries; support ticket volume on topic −25%. Schema + clear steps reduced friction before users hit the app.",
        },
        {
          title: "HR software — FAQ from support ticket mining",
          body: "PM extracted top 12 questions from Zendesk, published FAQ page with FAQPage schema. FAQ rich result dominated branded troubleshooting queries. AI Overview cited page for integration questions — dual visibility win.",
        },
        {
          title: "Penalty lesson — FAQ schema on landing page",
          body: "Marketing added FAQ schema with soft-sell questions ('Why is our product the best?') on homepage. Rich results removed sitewide for 30 days. PM instituted content-type review gate: FAQ schema only on help/glossary templates.",
        },
      ],
    }),
    buildSection({
      number: "4.7",
      title: "Product and Review schema",
      subtitle: "The e-commerce markup that surfaces pricing, availability, and ratings — and the feed quality requirements that determine whether Google trusts it",
      take: "Product schema declares name, image, description, sku, brand, offers (price, currency, availability), and optional aggregateRating. Review schema marks individual reviews. For e-commerce, schema must align with Merchant Center feeds, on-page display, and checkout reality — mismatches cause disapprovals and rich result loss.",
      why: "Product schema is revenue-critical. PMs own the data accuracy SLA between PIM, storefront, and schema output — not just 'engineering added JSON-LD.'",
      paragraphs: [
        [
          s("Price and availability must match the buy box. "),
          x(
            "Schema price $29 when cart shows $39 triggers policy issues. Dynamic pricing requires schema regeneration on price change — near real-time for flash sales.",
            "PM defines sync latency SLA: schema within 15 minutes of PIM update for top SKUs.",
          ),
          s(" Stale Product schema is worse than no schema."),
        ],
        [
          s("Review schema requires verified, visible reviews. "),
          x(
            "aggregateRating must reflect on-page reviews from real purchasers. Imported syndicated reviews need proper attribution.",
            "Self-serving fake review schema is a manual action trigger.",
          ),
          s(" PM ties review schema to moderation and verification workflow."),
        ],
        [
          s("Merchant Center and schema are twin channels. "),
          x(
            "Google Shopping uses feeds; organic rich results use on-page schema. Data must be consistent across both.",
            "PM coordinates feed and schema ownership — often different teams, same product truth.",
          ),
          s(" Product data governance spans feeds, PDP, and schema."),
        ],
      ],
      examples: [
        {
          title: "DTC brand — dynamic pricing schema pipeline",
          body: "Flash sales broke schema price sync; Merchant listings showed wrong price for 4 hours. PM required event-driven schema update from pricing service. Rich result errors dropped to <1%; sale weekend revenue protected.",
        },
        {
          title: "Marketplace — review schema moderation gate",
          body: "Sellers injected fake 5-star reviews visible only in schema. PM added review schema only after human moderation flag — same as on-page display. Policy warnings eliminated; star rich results returned in 3 weeks.",
        },
        {
          title: "B2B catalog — Product without offers",
          body: "Quote-only products used Product schema without offers.price. Google showed incomplete snippets. PM split templates: Product+Offer for buyable SKUs, Product without offer for RFQ-only — honest availability signalling.",
        },
      ],
    }),
    buildSection({
      number: "4.8",
      title: "Organisation and SiteLinks schema",
      subtitle: "Establishing your brand entity in search — the markup that anchors your Knowledge Panel and brand authority",
      take: "Organisation schema on the homepage or about page declares legal name, logo, url, sameAs (social and Wikidata links), contactPoint, and foundingDate. WebSite schema with SearchAction can enable sitelinks search box. These types anchor your brand as an entity in Google's graph — supporting navigational queries and Knowledge Panel consistency.",
      why: "Brand entity establishment is long-term SEO infrastructure. Organisation schema is the on-site foundation that complements Wikipedia, Wikidata, and consistent NAP (name, address, phone) across the web.",
      paragraphs: [
        [
          s("sameAs links connect your site to external entity IDs. "),
          x(
            "sameAs: [LinkedIn, Twitter, Wikidata, Crunchbase] helps Google merge signals into one entity.",
            "PM maintains a canonical list of official profiles — outdated sameAs URLs weaken entity resolution.",
          ),
          s(" sameAs is the bridge between owned site and knowledge graph."),
        ],
        [
          s("Logo and name must match Knowledge Panel assets. "),
          x(
            "Organisation logo in schema should be the same image Google uses for brand panel — typically square, high resolution.",
            "Rebrands require coordinated schema, Knowledge Panel update request, and sameAs refresh.",
          ),
          s(" Brand changes are schema migration events."),
        ],
        [
          s("WebSite SearchAction is optional and query-gated. "),
          x(
            "Sitelinks search box schema points to your site's search URL template. Google enables it selectively — implementation doesn't guarantee display.",
            "Low-value for sites with poor on-site search. PM enables only when search is a core navigation path.",
          ),
          s(" SearchAction schema follows product-quality site search, not the reverse."),
        ],
      ],
      examples: [
        {
          title: "Series B SaaS — Organisation schema + Wikidata",
          body: "PM added Organisation schema with sameAs including new Wikidata entry post-PR campaign. Knowledge Panel appeared for brand query within 6 weeks. Navigational CTR to pricing and docs improved — sitelinks reflected product structure.",
        },
        {
          title: "Rebrand — coordinated schema update",
          body: "Company renamed; old Organisation name in schema conflicted with new logo in SERP. PM ran schema + Search Console name change + press sameAs update in one release. Knowledge Panel updated without duplicate entity confusion.",
        },
        {
          title: "LocalBusiness extension for hybrid SaaS",
          body: "Product company with flagship office added LocalBusiness on contact page linked from Organisation parent. Local pack appeared for '[brand] headquarters' queries — schema expressed hybrid digital-physical presence.",
        },
      ],
    }),
    buildSection({
      number: "4.9",
      title: "Schema validation and testing",
      subtitle: "Google's Rich Results Test, Schema Markup Validator — the tools that catch implementation errors before they cost you rich result eligibility",
      take: "Schema ships through validation gates: Google Rich Results Test (eligibility per URL), Schema Markup Validator (syntax), Search Console Enhancements (production monitoring), and automated CI checks on templates. PMs define 'no deploy without valid schema' for revenue templates — same rigour as broken checkout.",
      why: "Schema errors are silent until rich results disappear. Validation workflow prevents regressions when CMS templates change.",
      paragraphs: [
        [
          s("Pre-launch: URL-level and template-level tests. "),
          x(
            "Rich Results Test on staging URLs before release. Template tests on representative pages per content type — product variant, sale price, out of stock.",
            "PM acceptance criteria: zero errors, warnings documented and accepted.",
          ),
          s(" Schema QA is part of release checklist for SEO-critical templates."),
        ],
        [
          s("Post-launch: Search Console Enhancements monitoring. "),
          x(
            "FAQ, Product, Article reports show valid vs error items over time. Sudden error spikes flag deploy regressions.",
            "PM weekly review: new errors correlated to releases.",
          ),
          s(" Enhancements reports are schema uptime dashboards."),
        ],
        [
          s("Automate regression detection in CI/CD. "),
          x(
            "Screaming Frog, custom scripts, or schema validation in PR checks for template changes.",
            "Manual testing doesn't scale past 50 templates. PM funds one automation story per platform team.",
          ),
          s(" Schema regressions are preventable with pipeline tests."),
        ],
      ],
      examples: [
        {
          title: "CMS upgrade — CI schema test caught regression",
          body: "Headless CMS migration broke JSON-LD injection on 404 template — unrelated page type. Automated PR check failed on Product template sample. PM blocked release until fixed. Estimated 2 weeks of rich result loss avoided.",
        },
        {
          title: "Black Friday — pre-flight validation sprint",
          body: "PM required Rich Results Test on top 500 SKUs before sale launch. 23 had image URL errors; fixed pre-go-live. Sale weekend merchant snippet error rate 0.1% vs 4% prior year.",
        },
        {
          title: "Agency handoff — validation documentation",
          body: "External SEO agency delivered schema playbook with validator screenshots per template. PM inherited monitoring SOP in Search Console Enhancements — no knowledge loss at contract end.",
        },
      ],
    }),
    buildSection({
      number: "4.10",
      title: "PM decision lens: structured data as a development priority",
      subtitle: "When to invest engineering time in schema implementation — the rich result opportunity by content type and traffic value",
      take: "Prioritise schema by (traffic × commercial value × rich result eligibility × implementation readiness). Tier 1: Product, FAQ, HowTo on revenue and support URLs. Tier 2: Article, Organisation sitewide. Tier 3: experimental types (DefinedTerm, Course) with citation-tracking KPIs. Defer low-traffic templates and unsupported types.",
      why: "Schema competes with feature roadmap for engineering time. PMs who score opportunities win budget; those who ask for 'full site schema' get deprioritised.",
      paragraphs: [
        [
          s("Build a schema ROI matrix. "),
          x(
            "Rows: content templates. Columns: monthly organic sessions, conversion rate, supported rich type, eng days to implement.",
            "Score = sessions × CVR × rich result CTR uplift estimate / eng days. PM presents ranked backlog to engineering.",
          ),
          s(" Quantified backlog beats generic SEO requests."),
        ],
        [
          s("Phase implementation across quarters. "),
          x(
            "Q1: FAQ/HowTo on help centre + Product on top SKUs. Q2: Article author pipeline + Organisation. Q3: automated validation + long-tail templates.",
            "Phasing delivers measurable wins before full coverage.",
          ),
          s(" Schema roadmap looks like product roadmap — sequenced, owned, measured."),
        ],
        [
          s("Define success metrics beyond 'implemented.' "),
          x(
            "Valid items in Search Console, rich result impressions, CTR delta on enhanced queries, AI Overview citation count for FAQ/HowTo URLs.",
            "PM sets 90-day targets per tier — implementation without measurement is technical debt.",
          ),
          s(" Schema done = eligible, displayed, and performing — not just deployed."),
        ],
      ],
      examples: [
        {
          title: "PM schema backlog — ranked by ROI",
          body: "E-commerce PM scored 8 templates; Product PDP schema ranked #1 (2 eng days, $2M organic PDP sessions). Blog Article schema ranked #6. Shipped tier 1 in sprint 1; rich result impressions +31% on PDPs. Article schema deferred to Q3 — honest prioritisation.",
        },
        {
          title: "Engineering tradeoff — buy vs build schema",
          body: "Shopify native schema covered 80% of PDP needs; custom bundle pages needed hand-built JSON-LD. PM approved 1-week custom work for 15% of revenue SKUs only — not replatforming entire schema layer.",
        },
        {
          title: "Executive reporting — rich result as KPI",
          body: "PM added 'rich result impression share' to monthly marketing deck alongside rank and traffic. Schema investment renewed for year 2 with clear attribution — executives funded validation automation.",
        },
      ],
    }),
  ],
  quiz: [
    {
      q: "What is the primary purpose of structured data on a web page?",
      options: [
        "To replace visible content with hidden keywords for ranking.",
        "To provide machine-readable labels that tell search engines what content means — enabling rich results and accurate extraction.",
        "To increase page load speed for crawlers.",
        "To block AI systems from summarising your content.",
      ],
      correct: 1,
      correctFeedback:
        "Right. Structured data declares semantics explicitly — it complements visible content and powers rich results and AI extraction.",
      wrongFeedback:
        "Structured data labels meaning for machines; it doesn't replace visible content or hide keywords. Re-read section 4.1.",
    },
    {
      q: "Why does Google recommend JSON-LD over Microdata for most implementations?",
      options: [
        "JSON-LD ranks pages higher by default.",
        "JSON-LD separates markup from HTML presentation, making it easier to maintain and less fragile when templates change.",
        "Microdata is no longer supported by any search engine.",
        "JSON-LD works only on static HTML sites.",
      ],
      correct: 1,
      correctFeedback:
        "Exactly. JSON-LD decouples schema from DOM structure — the maintenance and CMS integration advantage.",
      wrongFeedback:
        "JSON-LD is recommended for maintainability, not ranking magic. Re-read section 4.3.",
    },
    {
      kind: "categorize",
      q: "Match each schema type to its primary use case.",
      categories: ["Editorial", "Instructional", "Commerce", "Brand entity"],
      items: [
        { text: "NewsArticle with author and datePublished.", category: 0 },
        { text: "HowTo with ordered HowToStep items.", category: 1 },
        { text: "Product with offers.price and availability.", category: 2 },
        { text: "Organisation with sameAs and logo.", category: 3 },
        { text: "FAQPage with Question and acceptedAnswer.", category: 1 },
        { text: "aggregateRating on verified reviews.", category: 2 },
      ],
      correctFeedback:
        "Right. Article for editorial, FAQ/HowTo for instructional, Product for commerce, Organisation for brand entity.",
      wrongFeedback:
        "Map each type to editorial, instructional, commerce, or brand entity. Re-read sections 4.5–4.8.",
    },
    {
      q: "What happens if FAQ schema marks up questions that are not visible on the page?",
      options: [
        "Nothing — schema-only FAQs are a best practice.",
        "Google may issue structured data policy violations and remove rich result eligibility.",
        "The page ranks higher because crawlers prefer hidden content.",
        "FAQ schema automatically generates visible content.",
      ],
      correct: 1,
      correctFeedback:
        "Correct. Visible content must match schema — invisible FAQ markup violates guidelines.",
      wrongFeedback:
        "Schema must match on-page visible content. Re-read sections 4.1 and 4.6.",
    },
    {
      q: "Which schema types typically deliver the highest ROI for limited engineering bandwidth?",
      options: [
        "WebPage schema on every URL sitewide.",
        "FAQ and HowTo schema on high-traffic instructional and support content.",
        "Custom proprietary schema extensions.",
        "BreadcrumbList only on the homepage.",
      ],
      correct: 1,
      correctFeedback:
        "Right. FAQ and HowTo directly feed rich results and AI Overview extraction on high-intent pages.",
      wrongFeedback:
        "FAQ and HowTo offer the fastest rich result wins — not blanket WebPage markup. Re-read sections 4.6 and 4.10.",
    },
    {
      kind: "order",
      q: "Put the schema implementation workflow in the correct order.",
      prompt: "Drag to arrange from first step (top) to last (bottom).",
      items: [
        "Map content templates to supported Schema.org types by traffic value.",
        "Implement JSON-LD via CMS or server-side templates.",
        "Validate with Rich Results Test and Schema Markup Validator on staging.",
        "Deploy and monitor Search Console Enhancements reports.",
        "Measure rich result impressions, CTR, and AI citation impact.",
      ],
      correctFeedback:
        "Exactly. Prioritise → implement → validate → deploy/monitor → measure — the PM-owned schema lifecycle.",
      wrongFeedback:
        "Start with prioritisation, end with measurement. Re-read sections 4.9 and 4.10.",
    },
  ],
});
