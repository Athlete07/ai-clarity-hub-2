import { buildChapter, buildSection, s, x } from "../concepts-pb4-helpers";

export const chapter06ContentArchitecture = buildChapter({
  slug: "pb9-content-architecture",
  number: 6,
  shortTitle: "Content Architecture",
  title: "Content Architecture",
  readingMinutes: 29,
  summary:
    "The structural decisions that determine whether your content compounds in value or collapses under its own weight",
  keyTakeaway:
    "Content architecture is the platform decision beneath every SEO tactic — URL hierarchy, taxonomy, canonicals, hub structure, crawl paths, and retirement policy. PMs who treat structure as 'the CMS team's problem' inherit cannibalisation, index bloat, and migration debt that no amount of keyword optimisation fixes. Good architecture makes topic clusters, schema, and entity pages discoverable; bad architecture buries them under duplicate URLs and orphaned posts.",
  pmCallout:
    "As a PM: before approving the next 50 blog posts, ask whether your URL tree, internal links, and canonicals can support them — or whether you're adding weight to a structure that already confuses crawlers. Content architecture is cheaper to design in year one than to untangle in year three.",
  sections: [
    buildSection({
      number: "6.1",
      title: "What is content architecture",
      subtitle: "The organisation, hierarchy, URL structure, and internal linking that shape how search engines and users navigate your content",
      take: "Content architecture is how content is organised, labelled, linked, and addressed — site hierarchy, URL patterns, taxonomies, navigation, and internal link graphs. It's the structural layer that makes topic clusters navigable, distributes authority, and tells crawlers which pages matter. Architecture is slow to change and expensive to fix — a platform decision, not a copy decision.",
      why: "PMs own outcomes of organic discovery; architecture determines whether new content strengthens or competes with existing URLs. Ignoring it produces duplicate rankings and crawl waste.",
      paragraphs: [
        [
          s("Architecture connects user mental models to crawler logic. "),
          x(
            "Users expect /products/analytics/features; crawlers infer topical parent-child from URL depth and internal links.",
            "Flat /blog/post-slug-123 archives hide relationships — pillar-cluster linking must compensate.",
          ),
          s(" PM aligns URL design with topic cluster map from Chapter 2."),
        ],
        [
          s("Internal link graph is architecture, not decoration. "),
          x(
            "Navigation, breadcrumbs, related links, and hub pages distribute PageRank and semantic signals.",
            "Orphan pages — no internal inlinks — may never be indexed or rank regardless of quality.",
          ),
          s(" Every publish workflow should require minimum internal links in/out."),
        ],
        [
          s("Architecture documentation is a product artefact. "),
          x(
            "Content model diagram: templates, URL rules, taxonomy, canonical policy, redirect rules.",
            "Onboarding writers and engineers without this doc guarantees inconsistent URLs and duplicates.",
          ),
          s(" PM maintains living architecture spec alongside content calendar."),
        ],
      ],
      examples: [
        {
          title: "Blog sprawl — architecture audit before scale",
          body: "PM paused content calendar at 800 posts; audit found 40% orphaned, 15% cannibalising pillar keywords. Restructured into 6 hubs with mandatory hub links before resuming publish. Average position on pillar terms improved 4 slots in 5 months — architecture before volume.",
        },
        {
          title: "Headless CMS — URL contract in PRD",
          body: "New CMS launch PRD specified URL patterns per template, canonical rules, and breadcrumb schema. Zero post-launch duplicate URL incidents vs previous migration's 3-month canonical fire drill. PM lesson: architecture in PRD, not post-hoc SEO fix.",
        },
        {
          title: "Marketplace UGC — architecture for scale",
          body: "User listings threatened index bloat. PM defined architecture: index high-quality listings, noindex thin duplicates, canonical to parent category hubs. Crawl budget stabilised; category hubs gained authority as designed.",
        },
      ],
    }),
    buildSection({
      number: "6.2",
      title: "Site hierarchy and URL structure",
      subtitle: "How folder depth, URL naming, and subdomain choices signal content relationships and topical authority",
      take: "URL structure communicates hierarchy: /learn/topic/subtopic/page signals subtopic belongs to topic under learn section. Shallow, descriptive, hyphenated slugs beat deep opaque paths. Subdomain vs subdirectory (blog.example.com vs example.com/blog) affects how Google treats authority consolidation — subdirectories usually consolidate; subdomains may be treated separately.",
      why: "URL changes require redirects and equity transfer — PMs get hierarchy right before scale because refactoring 10,000 URLs is a migration project.",
      paragraphs: [
        [
          s("Prefer subdirectories over subdomains for content marketing. "),
          x(
            "docs.company.com vs company.com/docs — subdirectory keeps link equity on root domain unless docs are truly separate product.",
            "Exception: international ccTLDs or wholly separate products may justify subdomains.",
          ),
          s(" PM default: subdirectory unless legal or technical isolation requires subdomain."),
        ],
        [
          s("URL depth should reflect semantic depth, not CMS defaults. "),
          x(
            "/blog/2024/03/post-title encodes date in URL — locks content to year, hurts evergreen updates.",
            "/guides/running-shoes/best-trail-shoes encodes topic hierarchy — better for clusters.",
          ),
          s(" Remove date segments from evergreen content URL patterns."),
        ],
        [
          s("Slug readability is UX and SEO. "),
          x(
            "Short, descriptive slugs with primary entity or topic: /integrations/salesforce not /p?id=4829.",
            "Slug changes need 301 — PM avoids launch-and-rename churn.",
          ),
          s(" Slug policy in CMS prevents opaque auto-generated URLs."),
        ],
      ],
      examples: [
        {
          title: "Subdomain migration to subdirectory",
          body: "blog.saas.com moved to saas.com/blog via 301 map. Root domain authority consolidated; organic traffic to blog content +28% over 6 months. PM sponsored migration as year-one architecture investment.",
        },
        {
          title: "Date-based URL regret",
          body: "News site used /2020/03/article-slug; evergreen guides trapped in year folders. PM created /guides/ parallel structure for new evergreen; legacy URLs 301'd on major refreshes only — phased fix over 18 months.",
        },
        {
          title: "International hreflang + URL structure",
          body: "PM chose example.com/de/ subdirectory for German content vs de.example.com subdomain. Hreflang paired with consistent path structure; regional rankings improved with consolidated domain signals.",
        },
      ],
    }),
    buildSection({
      number: "6.3",
      title: "Content taxonomies",
      subtitle: "Categories, tags, and topic labels — the classification system that organises content into a navigable structure rather than a flat archive",
      take: "Taxonomies classify content: categories (broad, hierarchical), tags (specific, often flat), and custom topic labels aligned to business taxonomy. Good taxonomies power hub pages, faceted navigation, and internal linking. Bad taxonomies — 200 tags with one post each — create thin archive pages and crawl noise.",
      why: "PMs define taxonomy governance: who creates terms, merge rules, minimum posts per archive, and index/noindex on filter pages.",
      paragraphs: [
        [
          s("Categories map to pillars; tags are not a second pillar system. "),
          x(
            "One primary category per post; tags for cross-cutting attributes sparingly.",
            "Tag sprawl produces hundreds of thin /tag/x pages — noindex or consolidate.",
          ),
          s(" PM caps tag count per post and audits tag archives quarterly."),
        ],
        [
          s("Faceted navigation needs crawl control. "),
          x(
            "Filter combinations (?color=red&size=large) explode URL variants. Canonical to master category or noindex filters.",
            "E-commerce PM coordinates with eng on parameter handling in Search Console.",
          ),
          s(" Taxonomy UX without crawl rules creates duplicate index bloat."),
        ],
        [
          s("Business taxonomy alignment. "),
          x(
            "Categories should mirror product lines, industries, or jobs-to-be-done — not internal org chart.",
            "Sales team navigates same taxonomy as SEO hub structure — alignment reduces friction.",
          ),
          s(" Taxonomy workshop includes marketing, sales, and SEO — PM facilitates."),
        ],
      ],
      examples: [
        {
          title: "Tag cleanup — 400 tags to 40",
          body: "PM merged synonym tags, noindexed archives with <3 posts, redirected merged URLs. Crawl stats showed 30% fewer low-value URLs crawled; hub category pages gained impressions.",
        },
        {
          title: "Industry taxonomy for ABM",
          body: "Categories aligned to ICP industries: healthcare, fintech, retail. Sales used same URLs in outreach; SEO hubs ranked for '[solution] for [industry].' Taxonomy served GTM and architecture simultaneously.",
        },
        {
          title: "Faceted filter canonical disaster",
          body: "E-commerce filters indexed 50k variant URLs. PM implemented canonical to category base + Search Console parameter rules. Index count dropped; category rankings recovered from cannibalisation.",
        },
      ],
    }),
    buildSection({
      number: "6.4",
      title: "Canonical URLs and duplicate content",
      subtitle: "How to tell search engines which version of a page is authoritative — and the crawl budget waste that cannibalisation causes",
      take: "Canonical tags (rel=canonical) declare the preferred URL when duplicate or near-duplicate content exists — HTTP/HTTPS, www/non-www, print versions, syndication, pagination parameters. Without canonicals, Google may split signals across duplicates or rank the wrong URL. Cannibalisation is when your own pages compete for the same query.",
      why: "Duplicate management is PM-relevant when product, marketing, and partners publish same content in multiple places — architecture policy prevents self-inflicted ranking conflicts.",
      paragraphs: [
        [
          s("Self-referencing canonical is baseline hygiene. "),
          x(
            "Every indexable page should canonical to itself (or true master) — prevents parameter duplicates from indexing.",
            "CMS templates must emit canonical automatically — not manual per post.",
          ),
          s(" PM verifies canonical in template QA for every content type."),
        ],
        [
          s("Cross-domain canonical for syndication. "),
          x(
            "Partner republishes your article — their page canonicals to yours (or vice versa by agreement).",
            "Syndication without canonical transfers credit to wrong domain.",
          ),
          s(" PM includes canonical clause in content syndication contracts."),
        ],
        [
          s("Cannibalisation audit finds internal competition. "),
          x(
            "Multiple URLs ranking positions 8–15 for same query — merge, redirect, or differentiate intent.",
            "PM runs cannibalisation report quarterly on money keywords.",
          ),
          s(" Consolidation often beats new content for stuck rankings."),
        ],
      ],
      examples: [
        {
          title: "HTTP/HTTPS duplicate — sitewide canonical fix",
          body: "Legacy HTTP URLs indexed alongside HTTPS. PM required 301 + canonical on HTTPS template. Duplicate index halved in 6 weeks; root authority consolidated.",
        },
        {
          title: "Partner syndication — canonical clause",
          body: "Forbes republished CEO article without canonical. PM negotiated cross-domain canonical to owned version. Rankings and AI citations consolidated to company blog — syndication became distribution, not competitor.",
        },
        {
          title: "Cannibalisation merge — three posts one guide",
          body: "Three blog posts targeted 'marketing attribution models' at positions 9, 11, 14. PM merged into single pillar, 301'd old URLs. Position 4 within 8 weeks — consolidation beat publishing a fourth post.",
        },
      ],
    }),
    buildSection({
      number: "6.5",
      title: "Content hubs vs blogs",
      subtitle: "The architectural difference between a structured content resource and an unorganised stream of posts — and why the hub model wins for SEO",
      take: "A blog archive is chronological — posts accumulate without enforced relationships. A content hub is intentional architecture: pillar page, cluster children, curated navigation, and update cadence. Hubs signal topical authority; blogs signal activity. Most SEO programmes need hub structure with blog as one input channel, not the whole architecture.",
      why: "PMs approving 'more blog posts' without hub placement add weight without structure — Chapter 2 clusters require hub architecture to function.",
      paragraphs: [
        [
          s("Hub pages are products, not category indexes. "),
          x(
            "Pillar hub: curated overview, links to best cluster content, updated quarterly.",
            "Thin category archive listing 50 post titles is not a hub — it's crawl noise.",
          ),
          s(" PM specs hub template: intro copy, featured links, schema, refresh owner."),
        ],
        [
          s("Blog posts should land in a cluster, not float. "),
          x(
            "Publish checklist: primary pillar, 3 internal links, breadcrumb to hub.",
            "Floating posts orphan — PM blocks publish without hub assignment in CMS workflow.",
          ),
          s(" CMS workflow enforces architecture at creation time."),
        ],
        [
          s("Resource centres outperform raw archives in conversion. "),
          x(
            "Users navigating /learn/payroll-tax hub convert higher than random blog discovery.",
            "SEO and UX align on hub navigation — not only crawler benefits.",
          ),
          s(" Hub architecture is product IA, not SEO gimmick."),
        ],
      ],
      examples: [
        {
          title: "Blog to hub migration — HR software",
          body: "PM rebranded /blog to /learn with 8 industry hubs. Existing posts reassigned to hubs with 301s from old category URLs. Organic engaged sessions +35%; sales cited hub URLs in nurture sequences.",
        },
        {
          title: "Thin hub failure",
          body: "Hub pages auto-generated from category name only — 50-word intro. No rankings. PM rewrote top 6 hubs as 2,000-word curated resources with editor ownership. Hub impressions 5× in one quarter.",
        },
        {
          title: "News vs hub separation",
          body: "Company news stayed in /news chronological archive (noindex after 90 days for minor items). Evergreen guides in /learn hubs. Architecture separated temporal vs compounding content — crawl focused on hubs.",
        },
      ],
    }),
    buildSection({
      number: "6.6",
      title: "Pagination and infinite scroll",
      subtitle: "How to make paginated content crawlable — and when infinite scroll destroys the indexability of your archive",
      take: "Paginated archives (page 2, page 3) need crawlable links — not only JavaScript load-more. Infinite scroll without paginated URL fallbacks often hides content from crawlers. rel=next/prev is deprecated; best practice is self-referencing canonical per page or view-all page strategy for smaller archives.",
      why: "PMs on content-heavy and e-commerce sites must confirm engineering implements crawlable pagination — invisible archives mean invisible deep content.",
      paragraphs: [
        [
          s("Infinite scroll requires progressive enhancement. "),
          x(
            "Provide crawlable paginated URLs (/archive/page/2) even if UX uses infinite scroll.",
            "Google's documentation: ensure items load in static HTML or crawlable links.",
          ),
          s(" PM acceptance: view-source shows links to page 2+ content."),
        ],
        [
          s("View-all vs paginated canonical strategy. "),
          x(
            "Small archives: single view-all may be canonical. Large e-commerce: canonical each page to self; avoid thin view-all with 10,000 items.",
            "Strategy depends on catalogue size — PM decides with SEO lead per template.",
          ),
          s(" No one-size pagination policy — template-specific rules."),
        ],
        [
          s("Faceted pagination multiplies URLs faster than content. "),
          x(
            "Page 7 of sorted filter results may be low value — noindex or canonical to unfiltered category.",
            "PM prioritises index on page 1 and high-value filters only.",
          ),
          s(" Pagination + filters = architecture risk at scale."),
        ],
      ],
      examples: [
        {
          title: "Infinite scroll fix — media archive",
          body: "500 interview pages invisible after scroll-only redesign. PM required paginated fallback URLs in sitemap; deep interview pages re-indexed. Long-tail traffic recovered 70% in 10 weeks.",
        },
        {
          title: "E-commerce pagination canonical",
          body: "Category with 200 products across 10 pages — each page canonical to self, unique titles. Avoided view-all thin page; all product pages discovered via paginated crawl path.",
        },
        {
          title: "Blog page/2 noindex test",
          body: "PM noindexed blog page 2+ (posts already linked from hubs). Reduced duplicate archive indexing; post URLs retained full equity via hub links. Crawl budget shifted to money pages.",
        },
      ],
    }),
    buildSection({
      number: "6.7",
      title: "Content freshness signals",
      subtitle: "Publication date, last-modified timestamps, and update cadence — the signals that tell search engines your content is current",
      take: "Freshness signals include visible and schema dates (datePublished, dateModified), HTTP Last-Modified headers, sitemap lastmod, and substantive content updates. Google uses freshness for time-sensitive queries; evergreen content needs honest update discipline — not fake date bumps.",
      why: "PMs define refresh policy: which templates need quarterly updates, what constitutes a meaningful modification, and how dates display to users and schema.",
      paragraphs: [
        [
          s("dateModified requires substantive change. "),
          x(
            "Typo fix ≠ update. New section, revised data, updated screenshots = legitimate dateModified.",
            "Frequent immaterial date changes may be ignored or trusted less over time.",
          ),
          s(" PM editorial policy defines 'material update' for date display."),
        ],
        [
          s("Sitemap lastmod should reflect real changes. "),
          x(
            "CMS auto-updating lastmod on every template render wastes crawl signals.",
            "Accurate lastmod helps crawlers prioritise genuinely refreshed URLs.",
          ),
          s(" Engineering implements lastmod on content save, not page view."),
        ],
        [
          s("Freshness vs evergreen content strategy split. "),
          x(
            "News and regulatory content: high refresh cadence. Pillar guides: annual deep refresh.",
            "Mixed architecture routes each type to appropriate template and date policy.",
          ),
          s(" Not all content competes on freshness — PM segments by query type."),
        ],
      ],
      examples: [
        {
          title: "Tax guide annual refresh programme",
          body: "PM scheduled Q1 refresh for 12 tax guides with schema dateModified, visible 'Updated for 2025' banner, and revised rates. Rankings held through tax season; competitors with 2023 dates lost AI Overview citations.",
        },
        {
          title: "Fake freshness backlash",
          body: "CMS auto-updated 'modified date' on every deploy sitewide. Users and search lost trust in dates. PM disabled auto-bump; manual material-update workflow restored credibility.",
        },
        {
          title: "Changelog as freshness signal",
          body: "API docs added changelog section per endpoint with dated entries. dateModified in Article schema aligned to changelog. Developer search queries favoured docs with visible recency — freshness mattered for technical content.",
        },
      ],
    }),
    buildSection({
      number: "6.8",
      title: "Content retirement and redirects",
      subtitle: "What to do with outdated, thin, or cannibalising content — the consolidation strategy that improves average page quality",
      take: "Content retirement options: update, merge and redirect (301), noindex, or delete (410). Pruning thin and outdated pages raises average site quality and reduces cannibalisation. Retirement is proactive architecture maintenance — not failure admission.",
      why: "PMs who only measure content production volume accumulate debt. Retirement KPIs — pages pruned, equity preserved via 301 — balance the content ledger.",
      paragraphs: [
        [
          s("301 merge preserves equity when consolidating. "),
          x(
            "Redirect old URL to best replacement — not homepage. Map user intent: old post → new pillar section.",
            "Redirect chains and loops damage equity — PM reviews redirect maps in migrations.",
          ),
          s(" Every retirement ticket includes redirect target justification."),
        ],
        [
          s("410 Gone for deliberately removed content. "),
          x(
            "Discontinued products, deprecated features — 410 signals permanent removal vs 404 ambiguous.",
            "Update internal links before or with retirement — no new orphans.",
          ),
          s(" Product sunset PRD includes SEO retirement checklist."),
        ],
        [
          s("Prune in batches with before/after measurement. "),
          x(
            "Quarterly prune: URLs with zero traffic 12 months, thin word count, duplicate intent.",
            "Measure domain impressions and avg position 90 days post-prune — usually neutral or positive.",
          ),
          s(" PM reports prune outcomes to counter 'never delete content' myth."),
        ],
      ],
      examples: [
        {
          title: "Quarterly content prune — SaaS blog",
          body: "PM pruned 120 thin posts (under 400 words, no traffic), 301'd to relevant hubs. Total indexed pages −8%; organic traffic flat; pillar avg position +2. Quality density beat volume.",
        },
        {
          title: "Product sunset — 410 + hub update",
          body: "Legacy product discontinued. Product pages 410; features merged into flagship product page with 301 from top blog posts. Branded search for old product routed users correctly — zero 404 spike in GSC.",
        },
        {
          title: "Merge not delete — support KB",
          body: "47 overlapping help articles merged to 12 comprehensive guides. 301 map preserved bookmarked URLs. Support ticket deflection improved — users found single authoritative answer.",
        },
      ],
    }),
    buildSection({
      number: "6.9",
      title: "Crawl budget management",
      subtitle: "How to prioritise what search engines index by controlling what they can reach — the enterprise-scale consideration most smaller sites don't need until suddenly they do",
      take: "Crawl budget is how often and how deeply search engines crawl your site — relevant at large scale (100k+ URLs), faceted explosions, or slow servers. Management tools: robots.txt, noindex, canonicals, sitemap prioritisation, internal link emphasis, and server performance. Smaller sites rarely need aggressive crawl tuning — but faceted e-commerce and UGC marketplaces hit limits suddenly.",
      why: "PMs on large properties coordinate crawl policy with engineering before index bloat becomes emergency noindex patches.",
      paragraphs: [
        [
          s("robots.txt blocks crawl, not index. "),
          x(
            "Blocked URLs can still index if linked externally. noindex on page is needed to keep out of index.",
            "PM doesn't 'fix' duplicates with robots.txt alone — canonical/noindex strategy.",
          ),
          s(" robots.txt is for crawl budget, not duplicate management solo."),
        ],
        [
          s("Internal links prioritise what matters. "),
          x(
            "Money pages linked from nav and hubs get crawled often; orphans languish.",
            "XML sitemap supplements but doesn't replace internal link architecture.",
          ),
          s(" Strategic internal linking is crawl budget allocation."),
        ],
        [
          s("Server speed affects crawl rate. "),
          x(
            "Slow TTFB reduces Googlebot crawl rate — new content indexes slower.",
            "PM includes crawl stats and response time in platform health dashboard at scale.",
          ),
          s(" Infra performance is SEO at enterprise scale."),
        ],
      ],
      examples: [
        {
          title: "Marketplace — faceted crawl explosion",
          body: "10M filter URLs crawled monthly; money listings starved. PM noindexed low-value filter combos, canonicalised core categories, improved server response. Crawl on product pages +40%; new listings indexed within 48 hours.",
        },
        {
          title: "Staging environment accidental index",
          body: "staging.example.com indexed — crawl budget waste + duplicate content. PM required auth wall + robots disallow + noindex meta on non-prod. GSC removal request expedited cleanup.",
        },
        {
          title: "Small site — crawl budget not the bottleneck",
          body: "PM at 800-page SaaS investigated crawl budget; data showed full crawl daily. Redirected effort to hub architecture instead — right diagnosis avoided over-engineering.",
        },
      ],
    }),
    buildSection({
      number: "6.10",
      title: "PM decision lens: content architecture as a platform decision",
      subtitle: "Why the structural choices made in year one determine how much the content asset compounds — or how much it costs to untangle in year three",
      take: "Content architecture is a platform bet: URL rules, taxonomy, hub templates, canonical policy, and retirement cadence set compounding trajectory. Good architecture makes each new post strengthen the graph; bad architecture makes each new post a liability. PMs fund architecture sprints with same priority as CMS selection — because refactoring is 10× the cost of designing right.",
      why: "Year-three migration projects often trace to year-one 'just publish' decisions. PM decision lens prevents expensive untangling.",
      paragraphs: [
        [
          s("Architecture review gates major content initiatives. "),
          x(
            "New locale, new product line, acquisition content merge — architecture impact assessment before launch.",
            "Checklist: URL pattern, canonical, hub placement, redirect plan, schema template.",
          ),
          s(" No content initiative ships without architecture sign-off at scale."),
        ],
        [
          s("Budget for migration, not only creation. "),
          x(
            "Annual architecture debt sprint: prune, merge, redirect, hub upgrades.",
            "Underfunded maintenance produces ranking plateaus blamed on 'algorithm updates.'",
          ),
          s(" PM line-items content maintenance in annual marketing budget."),
        ],
        [
          s("Measure structural health metrics. "),
          x(
            "Indexed vs submitted ratio, orphan page count, cannibalisation instances, avg clicks per indexed URL, hub vs blog traffic mix.",
            "Structural KPIs predict SEO ceiling before content volume stalls.",
          ),
          s(" Architecture metrics belong in quarterly business reviews."),
        ],
      ],
      examples: [
        {
          title: "Year-one architecture charter",
          body: "PM wrote 6-page content architecture charter before hiring content team: URL rules, 8 hubs, taxonomy, canonical policy. Two years later, zero migration projects — competitors in same space ran 6-month replatform SEO recoveries.",
        },
        {
          title: "Acquisition content merge",
          body: "Acquired company's 2,000 URLs merged via architecture playbook: hub mapping, 301 matrix, duplicate prune. PM treated merge as platform project (8 weeks) not weekender — organic synergy realised in Q3 post-close.",
        },
        {
          title: "Architecture debt ROI",
          body: "PM funded Q4 architecture sprint: 300 redirects, 6 hub rewrites, tag cleanup. Q1 organic traffic +18% with zero new posts — executive team approved ongoing maintenance budget from single-quarter proof.",
        },
      ],
    }),
  ],
  quiz: [
    {
      q: "What is content architecture in an SEO context?",
      options: [
        "The font and colour choices on blog posts.",
        "How content is organised — URL hierarchy, taxonomies, internal linking, and crawl paths that shape discovery.",
        "The number of blog posts published per month.",
        "Paid media channel allocation.",
      ],
      correct: 1,
      correctFeedback:
        "Right. Architecture is the structural layer — URLs, taxonomy, links, canonicals — beneath individual pages.",
      wrongFeedback:
        "Content architecture is structural organisation, not visual design or volume. Re-read section 6.1.",
    },
    {
      q: "Why do SEO practitioners generally prefer subdirectories over subdomains for a company blog?",
      options: [
        "Subdomains load faster than subdirectories.",
        "Subdirectories typically consolidate link equity and authority on the root domain.",
        "Google cannot crawl subdomains.",
        "Subdirectories require no redirects.",
      ],
      correct: 1,
      correctFeedback:
        "Exactly. Subdirectories usually consolidate authority; subdomains may be treated as separate sites.",
      wrongFeedback:
        "Authority consolidation favours subdirectories for most content marketing. Re-read section 6.2.",
    },
    {
      q: "What is the primary purpose of a rel=canonical tag?",
      options: [
        "To increase keyword density on a page.",
        "To declare the preferred authoritative URL when duplicate or near-duplicate content exists.",
        "To block Google from crawling a page.",
        "To add star ratings to search results.",
      ],
      correct: 1,
      correctFeedback:
        "Right. Canonicals consolidate signals to the master URL and manage duplicate content.",
      wrongFeedback:
        "Canonicals declare preferred URLs — they don't block crawls or add rich results. Re-read section 6.4.",
    },
    {
      kind: "categorize",
      q: "Match each content architecture tactic to its primary problem solved.",
      categories: ["Duplicate content", "Discovery", "Quality density", "Crawl efficiency"],
      items: [
        { text: "301 redirect after merging two competing posts.", category: 0 },
        { text: "Mandatory internal links from new posts to pillar hubs.", category: 1 },
        { text: "Quarterly prune of thin zero-traffic URLs.", category: 2 },
        { text: "noindex on low-value faceted filter pages.", category: 3 },
        { text: "Self-referencing canonical on product pages.", category: 0 },
        { text: "Crawlable pagination URLs alongside infinite scroll.", category: 1 },
      ],
      correctFeedback:
        "Correct. Canonicals/redirects for duplicates, linking/pagination for discovery, pruning for quality, noindex for crawl efficiency.",
      wrongFeedback:
        "Map each tactic to duplicate content, discovery, quality, or crawl efficiency. Re-read sections 6.4–6.9.",
    },
    {
      q: "When should dateModified in Article schema be updated?",
      options: [
        "On every page deploy or typo fix sitewide.",
        "Only when substantive content changes occur — new data, sections, or revised guidance.",
        "Never — dates should be hidden from search engines.",
        "Automatically daily to maximise freshness rankings.",
      ],
      correct: 1,
      correctFeedback:
        "Right. Material updates only — fake freshness erodes trust with users and systems.",
      wrongFeedback:
        "dateModified reflects substantive updates, not cosmetic changes. Re-read section 6.7.",
    },
    {
      kind: "order",
      q: "Put the content retirement decision workflow in the correct order.",
      prompt: "Drag to arrange from first step (top) to last (bottom).",
      items: [
        "Identify outdated, thin, or cannibalising URLs via audit.",
        "Decide: update, merge, noindex, or delete for each URL.",
        "Map 301 redirects to the best intent-matching replacement.",
        "Update internal links and sitemap.",
        "Measure traffic and ranking impact 90 days post-retirement.",
      ],
      correctFeedback:
        "Exactly. Audit → decide → redirect → fix links → measure — the disciplined retirement workflow.",
      wrongFeedback:
        "Start with audit and intent-matched redirects before measuring outcomes. Re-read section 6.8.",
    },
  ],
});
