import { buildChapter, buildSection, s, x } from "../concepts-pb4-helpers";

export const chapter02TopicClustersPillarPages = buildChapter({
  slug: "pb9-topic-clusters-pillar-pages",
  number: 2,
  shortTitle: "Topic Clusters",
  title: "Topic Clusters & Pillar Pages",
  readingMinutes: 27,
  summary:
    "The content architecture that signals expertise to search engines — and organises knowledge in a way users actually navigate",
  keyTakeaway:
    "Topic clusters replace flat keyword strategies with architecture: one comprehensive pillar page anchors a broad subject, cluster pages go deep on subtopics, and deliberate internal linking signals relationships to search engines and users. For PMs, clusters are product roadmaps for content — prioritise by business goals, measure at cluster level, and treat migration of legacy posts as a platform refactor, not a blogging side project.",
  pmCallout:
    "As a PM: approve topic clusters the same way you approve feature epics — each cluster needs a business anchor, an owner, a coverage map, and success metrics. A pillar is not a long blog post; it is the hub users and crawlers orbit. If your site is a graveyard of unrelated posts, cluster architecture is the reorganisation that turns archive into acquisition infrastructure.",
  sections: [
    buildSection({
      number: "2.1",
      title: "What is a topic cluster",
      subtitle:
        "A pillar page covering a broad subject linked to cluster pages covering subtopics in depth — the architecture that replaced the flat keyword strategy",
      take: "A topic cluster is a content architecture pattern: one pillar page provides a comprehensive overview of a broad subject, multiple cluster pages each cover one subtopic in depth, and bidirectional internal links connect them — replacing the old model of dozens of disconnected keyword-targeted posts.",
      why: "Flat blogs create cannibalisation and confuse crawlers. PMs who mandate cluster architecture give search engines a clear map of expertise and give users navigable learning paths that convert.",
      paragraphs: [
        [
          s("Clusters replace keyword silos with semantic webs. "),
          x(
            "Old model: one post per keyword variant, minimal linking, overlapping intent. Cluster model: one pillar owns the head topic; clusters own sub-intents; links declare relationships.",
            "Search engines interpret link graphs as topical maps — clusters make your expertise legible.",
          ),
          s(" Architecture is a ranking signal, not just information design."),
        ],
        [
          s("Each cluster maps to a user journey and business outcome. "),
          x(
            "A 'marketing automation' cluster might progress from definitions → use cases → integration guides → pricing comparison → signup. Content sequence mirrors funnel.",
            "PMs define clusters around product categories, personas, or jobs-to-be-done — not SEO tool exports alone.",
          ),
          s(" Clusters are funnels expressed as URL structure."),
        ],
        [
          s("Scale by adding clusters, not random posts. "),
          x(
            "New demand? Extend an existing cluster with a subtopic page or spin a new pillar when the subject is distinct enough. Avoid one-off posts outside architecture.",
            "Editorial calendar becomes cluster backlog — prioritised like a product roadmap.",
          ),
          s(" Governance prevents the blog from reverting to flat chaos."),
        ],
      ],
      examples: [
        {
          title: "HR software — first cluster launch",
          body: "PM defined inaugural cluster: 'employee performance reviews.' Pillar covered full cycle; eight clusters on calibration, templates, remote reviews, legal compliance, etc. Six-month organic signups from cluster attributed 18% of free trials. Architecture preceded volume.",
        },
        {
          title: "Flat blog cannibalisation",
          body: "Dev tool had 90 posts on overlapping 'API' keywords. None ranked top five. PM paused new posts, launched three clusters: REST design, authentication, rate limiting. Consolidated 40 posts into pillars + clusters. Head term visibility +6 average positions in four months.",
        },
        {
          title: "Cluster vs campaign microsite",
          body: "Marketing wanted separate campaign site for 'AI features.' PM argued for cluster under main domain to pass authority. Cluster on primary domain outranked isolated microsite; integrated analytics showed higher trial conversion. Architecture choice was acquisition strategy.",
        },
      ],
    }),
    buildSection({
      number: "2.2",
      title: "What is a pillar page",
      subtitle:
        "The authoritative, comprehensive overview of a topic that anchors the cluster — not a landing page, not a blog post, something more substantial",
      take: "A pillar page is a long-form, authoritative hub that comprehensively covers a broad topic, links to every cluster subtopic, and serves as the canonical entry point for users and search engines — distinct from a product landing page (conversion-focused) or a typical blog post (narrow and dated).",
      why: "Teams label any long article a 'pillar.' PMs who define pillars precisely avoid thin hubs that fail to rank and confuse users expecting depth, not sales copy.",
      paragraphs: [
        [
          s("Pillars educate; landing pages convert. "),
          x(
            "Pillar: 3,000–6,000+ words covering landscape, definitions, subtopic summaries with links to clusters, updated regularly. Landing page: hero, social proof, CTA — thin on educational depth.",
            "Mixing formats hurts both SEO and UX. Link pillars to product pages; do not replace them.",
          ),
          s(" Separate hub content from conversion surfaces."),
        ],
        [
          s("Pillars must earn the right to be canonical. "),
          x(
            "Table of contents, clear H2 per subtopic, 'last updated' date, expert author, internal links out and in from every cluster. Pillar is the spine — broken links or stale sections weaken the whole cluster.",
            "PM acceptance criteria for pillar launch: all cluster links live, SME sign-off, schema, performance budget met.",
          ),
          s(" Ship pillars complete — partial hubs leak authority."),
        ],
        [
          s("Pillar URL and placement signal importance. "),
          x(
            "Prefer stable URLs at hub depth: /guides/topic/ not /blog/2023/03/post-slug/. Navigation exposes pillar in resource centers.",
            "URL and IA decisions are hard to reverse — treat pillar placement as platform choice.",
          ),
          s(" Pillars belong in resource architecture, not the dated blog stream."),
        ],
      ],
      examples: [
        {
          title: "Pillar vs landing page — conversion clarity",
          body: "Product marketing published 'ultimate guide to CRM' as gated PDF landing page. Zero rankings. PM rebuilt as ungated pillar with cluster links; product CTAs in sidebar. Pillar ranked position 4; assisted conversions tracked via multi-touch rose 12%. Education and conversion separated but connected.",
        },
        {
          title: "Incomplete pillar launch mistake",
          body: "Pillar went live with six of twelve planned cluster links as 'coming soon.' Crawlers indexed thin hub; cluster pages launched later did not inherit expected boost. PM instituted 'cluster minimum viable coverage' gate — at least 60% subtopics live before pillar index push.",
        },
        {
          title: "Resource center IA",
          body: "PM moved pillars from /blog/ to /learn/ with persistent nav. Bounce rate on pillars dropped 19%; time on site rose. URL and nav signalled reference content vs news. IA reinforced pillar status for users and bots.",
        },
      ],
    }),
    buildSection({
      number: "2.3",
      title: "Cluster page design",
      subtitle:
        "Subtopic pages that go deep on one aspect of the pillar — and the internal linking pattern that connects them back",
      take: "Cluster pages go deep on a single subtopic with focused intent, comprehensive coverage of that slice, contextual links back to the pillar and sideways to related clusters — forming a navigable mesh where no page is an orphan.",
      why: "Writers produce standalone posts without link plans. PMs who spec cluster page templates ensure every new URL strengthens the hub instead of competing with it.",
      paragraphs: [
        [
          s("One cluster page, one primary intent. "),
          x(
            "Cluster on 'email warmup' covers warmup mechanics, timelines, tools, mistakes — not general email marketing. Scope discipline prevents pillar duplication.",
            "Title and H1 match the sub-intent; opening paragraph links to pillar for broader context.",
          ),
          s(" Narrow depth beats shallow breadth on cluster pages."),
        ],
        [
          s("Linking pattern: up, across, and down. "),
          x(
            "Up: link to pillar in intro and conclusion. Across: link to related clusters ('see also deliverability'). Down: link to tools, templates, or product features when relevant.",
            "Template enforces minimum three internal links per cluster page — ops checklist item.",
          ),
          s(" Mesh linking distributes authority and improves user paths."),
        ],
        [
          s("Format follows sub-intent. "),
          x(
            "How-to cluster → steps and screenshots. Comparison cluster → table and criteria. Definition cluster → concise answer block + depth below.",
            "Intent mismatch on cluster pages is as fatal as on pillars — match SERP format.",
          ),
          s(" Cluster format is a product decision tied to query type."),
        ],
      ],
      examples: [
        {
          title: "Link template enforcement",
          body: "Content ops added CMS checklist: pillar link, two sibling cluster links, one product link where relevant. Orphan rate dropped from 35% to 4% in two quarters. Average cluster position improved 3.2 positions without new backlinks.",
        },
        {
          title: "Scope creep — cluster became mini-pillar",
          body: "Writer expanded 'SOC 2 Type II' cluster to cover all compliance frameworks. Cannibalised pillar and split rankings. PM split content: refocused cluster on Type II audit process only; moved framework comparison back to pillar. Rankings recovered in six weeks.",
        },
        {
          title: "Sideways links — session depth",
          body: "Added 'related guides' block with three sibling clusters at end of each page. Pages per session from organic +0.8; email capture on template downloads rose. Sideways links improved UX and semantic relatedness.",
        },
      ],
    }),
    buildSection({
      number: "2.4",
      title: "Internal linking as a signal",
      subtitle:
        "How the link architecture of a cluster communicates topical relationships to search engines — not just navigation for users",
      take: "Internal links in a cluster communicate topical relationships to search engines — anchor text, link placement, and link graph density help crawlers understand which pages are central, which are subtopics, and how concepts relate — not merely serving user navigation.",
      why: "Design treats internal links as optional footer clutter. PMs who treat link architecture as an SEO product surface get ranking lift without new content — often the highest ROI sprint available.",
      paragraphs: [
        [
          s("Anchor text carries semantic weight. "),
          x(
            "Descriptive anchors ('email authentication setup') beat generic ('click here'). Consistent entity naming across anchors reinforces topic models.",
            "PM guideline: anchor text should name the concept, not the marketing title alone.",
          ),
          s(" Link text is metadata — write it deliberately."),
        ],
        [
          s("Link placement signals importance. "),
          x(
            "Links in body copy weigh more than footer boilerplate. Pillar linked from homepage or resource nav passes stronger signals than buried blog sidebar.",
            "Prioritise in-content links on high-traffic pages pointing into emerging clusters.",
          ),
          s(" Strategic links from authority URLs accelerate new clusters."),
        ],
        [
          s("Avoid over-optimised patterns. "),
          x(
            "Thousands of exact-match footer links trigger spam heuristics. Natural, user-helpful linking within topical bounds is the goal.",
            "Audit for link stuffing during migrations — consolidate redundant cross-links.",
          ),
          s(" Helpful mesh beats mechanical link wheels."),
        ],
      ],
      examples: [
        {
          title: "Homepage link to new pillar",
          body: "PM added resource spotlight on homepage to new 'data privacy' pillar during launch month. Pillar indexed in 5 days; reached page two within three weeks — faster than previous pillars without homepage link. Placement mattered.",
        },
        {
          title: "Anchor text cleanup",
          body: "Legacy posts used 'read more' anchors to money pages. Rewrote 120 anchors to descriptive phrases in one sprint. Target cluster URLs gained average 2 positions. Zero new content — pure architecture fix.",
        },
        {
          title: "Footer link reduction",
          body: "Site-wide footer linked 40 commercial terms. PM cut to five user-helpful resource links. Crawl efficiency improved; no ranking loss on commercial pages. Quality over quantity in internal graphs.",
        },
      ],
    }),
    buildSection({
      number: "2.5",
      title: "Mapping clusters to business goals",
      subtitle:
        "Why every topic cluster should be anchored to a product category, use case, or audience segment — not just search volume",
      take: "Every topic cluster should anchor to a product category, use case, or audience segment with measurable business outcomes — pipeline, activation, retention, or expansion — not exist solely because a keyword tool showed volume.",
      why: "SEO teams chase traffic that does not convert. PMs who tie clusters to business goals win budget and kill vanity projects that inflate sessions but not revenue.",
      paragraphs: [
        [
          s("Volume without fit wastes capacity. "),
          x(
            "High-volume informational topics far from your product attract tourists, not buyers — unless brand awareness is the explicit goal with its own KPI.",
            "Score clusters: search demand × business proximity × competitive feasibility.",
          ),
          s(" Prioritise clusters that move a metric leadership cares about."),
        ],
        [
          s("Persona and use-case anchors clarify voice and depth. "),
          x(
            "'Marketing automation for ecommerce' vs 'for B2B SaaS' are different clusters with different examples, integrations, and CTAs — same head term family, different business anchors.",
            "PM defines ICP per cluster so writers do not produce generic fluff.",
          ),
          s(" Business anchor is a creative brief requirement."),
        ],
        [
          s("Align sales and support with cluster strategy. "),
          x(
            "Sales objection docs and support macros should link to cluster pages — closing the loop between content and revenue teams.",
            "If sales never shares your content, the cluster may be off-ICP or unknown to GTM.",
          ),
          s(" Clusters succeed when GTM adopts them as enablement assets."),
        ],
      ],
      examples: [
        {
          title: "Cluster scorecard",
          body: "PM scored 12 proposed clusters on volume, product fit, win rate correlation, and eng effort. Deprioritised 'AI history' (high volume, zero fit). Prioritised 'LLM evals for product teams' (medium volume, high fit). Pipeline from organic to enterprise tier +24% YoY.",
        },
        {
          title: "Wrong ICP traffic",
          body: "Cluster targeting 'free project management' attracted students; 0.1% trial conversion vs 3.2% on 'project management for agencies' cluster. PM rebalanced roadmap toward commercial-intent subtopics. Quality of traffic beat raw sessions.",
        },
        {
          title: "Sales enablement integration",
          body: "PM packaged cluster URLs into sales battlecards for three competitor displacements. Win rate in those deals +8pp. Business anchor made content discoverable internally — not just via Google.",
        },
      ],
    }),
    buildSection({
      number: "2.6",
      title: "Cluster depth vs breadth",
      subtitle:
        "When to add more cluster pages vs when to go deeper on existing ones — the coverage vs quality tradeoff",
      take: "Expand cluster breadth when semantic gap analysis reveals missing subtopics with demand; go deeper on existing pages when rankings stall due to thin coverage, outdated content, or intent mismatch — the tradeoff is coverage vs quality, not always more URLs.",
      why: "Teams default to 'publish more.' PMs who diagnose whether the bottleneck is missing pages or weak pages avoid URL bloat that dilutes crawl budget and confuses users.",
      paragraphs: [
        [
          s("Breadth when the map has holes. "),
          x(
            "Competitor and PAA analysis show subtopics you never address — add cluster pages. Pillar table of contents with empty sections signals incomplete authority.",
            "Each new URL must cover a distinct intent not served elsewhere on your site.",
          ),
          s(" New pages need distinct intent — not keyword variants."),
        ],
        [
          s("Depth when pages underperform on quality. "),
          x(
            "Page five with 800 words while top results have 2,500 words, original data, and video — expand and enrich before spawning siblings.",
            "Refresh beats new URL when cannibalisation risk is high.",
          ),
          s(" Sometimes the answer is better, not more."),
        ],
        [
          s("Capacity constrains the tradeoff. "),
          x(
            "Small team: finish one cluster deeply before starting the next. Large team: parallel clusters with owners — but never shallow simultaneously.",
            "PM sets WIP limits on in-flight clusters like engineering sprints.",
          ),
          s(" Half-built clusters signal weakness to users and crawlers."),
        ],
      ],
      examples: [
        {
          title: "Depth sprint — ranking lift",
          body: "Stalled cluster page on 'Kubernetes networking' at position 11. PM approved depth sprint: add diagrams, troubleshooting section, expert quote — no new URL. Moved to position 3 in eight weeks. Depth solved; breadth would have cannibalised.",
        },
        {
          title: "Breadth — competitor subtopic gap",
          body: "Gap analysis found five subtopics all competitors covered in 'customer onboarding' cluster. PM added five cluster pages over two quarters. Pillar rose from position 15 to 5. Breadth completed the semantic map.",
        },
        {
          title: "WIP limit — two clusters max",
          body: "Team started five clusters simultaneously; all thin. PM capped WIP at two clusters until pillar + 70% clusters live. Completion velocity slowed but average quality rose; first completed cluster hit ROI targets.",
        },
      ],
    }),
    buildSection({
      number: "2.7",
      title: "Auditing existing content into clusters",
      subtitle:
        "Reorganising legacy content around topic clusters — the migration strategy for sites with years of unstructured posts",
      take: "Migrating legacy content into clusters means auditing existing URLs, grouping by topic, consolidating cannibalising pages, redirecting or merging thin posts, rewriting pillars, and fixing internal links — a content platform migration, not a cosmetic relabel.",
      why: "Mature sites carry years of blog debt. PMs who run structured migrations recover authority trapped in orphans and duplicates instead of abandoning the archive for greenfield clusters only.",
      paragraphs: [
        [
          s("Start with inventory and intent tagging. "),
          x(
            "Export all URLs with traffic, backlinks, and publish date. Tag each with topic and intent. Identify cannibal groups and top performers to preserve.",
            "Use GSC and analytics — protect URLs with traffic and links during consolidation.",
          ),
          s(" Migration without data destroys equity on legacy winners."),
        ],
        [
          s("Consolidate, redirect, or retire. "),
          x(
            "Merge three thin posts into one strong cluster page; 301 old URLs. Retire hopeless thin content with no traffic. Update pillars to link merged content.",
            "PM communication plan: SEO migration can cause temporary volatility — set expectations.",
          ),
          s(" 301 merges concentrate signals; orphans dilute them."),
        ],
        [
          s("Phased migration reduces risk. "),
          x(
            "Pilot one cluster migration, measure for 60–90 days, then scale playbook. Fix internal links cluster-by-cluster.",
            "Parallel run: new cluster IA live while legacy URLs redirect — avoid duplicate content during transition.",
          ),
          s(" Treat migration like a phased product rollout with rollback plans."),
        ],
      ],
      examples: [
        {
          title: "Merge 12 → 1 — payroll cluster",
          body: "Account software had 12 posts on payroll taxes. PM merged into one definitive cluster page; 301s from all legacy URLs. Combined page ranked position 2 vs none in top 20 before. Migration concentrated equity.",
        },
        {
          title: "Pilot cluster migration",
          body: "Chose 'remote work' as pilot: 80 legacy posts tagged, 45 merged or redirected, pillar rewritten. Traffic to topic +38% in 90 days despite 30% fewer URLs. Scaled playbook to three more clusters.",
        },
        {
          title: "Protected legacy winner",
          body: "Top traffic post was thin but had 200 referring domains. PM expanded in place instead of merge-kill. Added cluster links and depth. Preserved URL equity while upgrading quality. Migration is not always consolidation.",
        },
      ],
    }),
    buildSection({
      number: "2.8",
      title: "Measuring cluster performance",
      subtitle:
        "Cluster-level ranking, traffic, and conversion — the analytics view that replaces page-by-page reporting",
      take: "Measure clusters as portfolios: aggregate organic traffic, ranking distribution for target query sets, assisted conversions, citation appearances, and engagement across pillar plus all cluster URLs — replacing vanity page-by-page reporting that hides strategic progress.",
      why: "Leadership asks 'why did this post drop?' PMs who report cluster health show systemic authority gains and diagnose local issues without panic over single-URL noise.",
      paragraphs: [
        [
          s("Define cluster query sets upfront. "),
          x(
            "List head, mid-tail, and long-tail queries each cluster owns. Track average position and impression share for the set — not one keyword.",
            "Tools: GSC filtered by URL prefix or tag, Looker dashboards with content group dimensions.",
          ),
          s(" Cluster KPIs need agreed query baskets and URL groups."),
        ],
        [
          s("Attribution across the cluster funnel. "),
          x(
            "First touch on definitional cluster → later conversion on product page is cluster success. Use multi-touch models and UTM discipline on CTAs.",
            "PM reports assisted conversions per cluster to justify depth investment.",
          ),
          s(" Last-click undervalues educational cluster content."),
        ],
        [
          s("Leading indicators: indexation, links, citations. "),
          x(
            "Before traffic moves: are all URLs indexed? Internal link count? AI Overview citations? Leading metrics predict lagging revenue.",
            "Review quarterly: refresh stale cluster pages dragging portfolio metrics.",
          ),
          s(" Cluster dashboards should show health, not just traffic spikes."),
        ],
      ],
      examples: [
        {
          title: "Looker cluster dashboard",
          body: "PM worked with data team to tag URLs by cluster ID. Dashboard showed traffic, signups, and average position per query set. Replaced weekly 'post performance' meetings. Leadership funded second cluster hire based on dashboard ROI proof.",
        },
        {
          title: "Assisted conversion reveal",
          body: "Pillar had low last-click conversion; multi-touch showed 28% of enterprise deals touched cluster content pre-demo. PM reframed pillar as pipeline influencer — saved it from deprioritisation in favour of only bottom-funnel pages.",
        },
        {
          title: "Citation leading indicator",
          body: "AI Overview citations on cluster queries appeared 60 days before traffic inflection. PM added citation tracking to cluster scorecard. Early signal validated depth strategy before rankings moved.",
        },
      ],
    }),
    buildSection({
      number: "2.9",
      title: "PM decision lens: topic cluster planning as product roadmapping",
      subtitle:
        "Treating content architecture decisions with the same rigour as feature prioritisation — ROI, sequencing, and ownership",
      take: "Topic cluster planning deserves product roadmapping rigour: scored backlogs, explicit owners, phased delivery, dependency management (pillar before clusters, schema before launch), and ROI reviews — because architecture mistakes are as expensive as platform technical debt.",
      why: "Content 'strategy' often lacks accountability. PMs who run clusters like product epics get predictable delivery and defend resources against ad hoc requests.",
      paragraphs: [
        [
          s("Cluster epics with acceptance criteria. "),
          x(
            "Epic: 'Ship data governance cluster Q2.' Done = pillar live, ≥8 clusters, linking complete, schema, SME review, dashboard live.",
            "Same ceremony as feature epics: kickoff, mid-quarter review, retro.",
          ),
          s(" Vague 'more SEO content' goals fail; epics ship."),
        ],
        [
          s("Sequencing and dependencies. "),
          x(
            "Schema templates before bulk publish. SME availability before YMYL clusters. Migration of legacy URLs before new pillar competes with orphans.",
            "PM maintains cluster dependency graph — parallelise only where safe.",
          ),
          s(" Wrong sequence wastes writes and creates cannibalisation."),
        ],
        [
          s("ROI review and kill criteria. "),
          x(
            "After two quarters, cluster should show leading indicators (rankings, citations) or lagging (pipeline). If flat, diagnose depth vs wrong ICP vs competitive block — pivot or pause.",
            "Kill criteria prevent infinite investment in wrong topics — same as product sunsetting.",
          ),
          s(" Not every cluster deserves eternal investment."),
        ],
      ],
      examples: [
        {
          title: "Cluster epic in Jira",
          body: "PM mirrored eng workflow: epics per cluster, stories per page, linking task as blocker for 'done.' Velocity visible to leadership. Q3 committed two clusters delivered on time vs historical 40% slip on 'content projects.'",
        },
        {
          title: "Paused cluster — wrong sequence",
          body: "Started competitive comparison cluster before product integration docs existed. Pages felt hollow; conversion poor. PM paused, shipped integration cluster first, resumed comparison Q3 with real customer proof. Sequencing fix.",
        },
        {
          title: "Kill decision — low fit topic",
          body: "After three quarters, 'blockchain for supply chain' cluster showed traffic but zero pipeline in non-crypto ICP. PM sunset cluster, redirected effort to 'supplier risk management.' Roadmap discipline freed capacity.",
        },
      ],
    }),
  ],
  quiz: [
    {
      q: "What defines a topic cluster architecture?",
      options: [
        "Random blog posts targeting trending keywords",
        "A pillar page, deep cluster subtopic pages, and deliberate internal linking",
        "Only product landing pages with no educational content",
        "Duplicate pages for every city without unique value",
      ],
      correct: 1,
      correctFeedback:
        "Right. Clusters combine a comprehensive pillar, focused cluster pages, and linking that maps topical relationships.",
      wrongFeedback:
        "Topic clusters are pillar + subtopic pages + internal links. Re-read sections 2.1–2.3.",
    },
    {
      q: "How is a pillar page different from a product landing page?",
      options: [
        "Pillars are shorter and more promotional",
        "Pillars comprehensively educate on a broad topic and link to cluster depth; landing pages focus on conversion",
        "Landing pages must never link to other pages",
        "Pillars are only for paid traffic",
      ],
      correct: 1,
      correctFeedback:
        "Exactly. Pillars are authoritative hubs; landing pages convert — link between them, don't merge formats.",
      wrongFeedback:
        "Pillars educate and connect subtopics; landing pages sell. Re-read section 2.2.",
    },
    {
      q: "When should you add breadth (new cluster pages) vs depth (expand existing)?",
      options: [
        "Always add new URLs — more pages always win",
        "Breadth for missing subtopics with distinct intent; depth when existing pages are thin or outdated",
        "Never add new pages — only refresh",
        "Depth only matters for paid ads",
      ],
      correct: 1,
      correctFeedback:
        "Right. Gap analysis tells you whether you need new subtopic coverage or richer existing pages.",
      wrongFeedback:
        "Breadth fills semantic gaps; depth fixes underperforming pages. Re-read section 2.6.",
    },
    {
      kind: "categorize",
      q: "Match each action to the best cluster practice category.",
      categories: ["Pillar / cluster design", "Internal linking", "Migration / measurement"],
      items: [
        { text: "One subtopic intent per cluster page", category: 0 },
        { text: "Descriptive anchor text to sibling clusters", category: 1 },
        { text: "301 merge thin legacy posts into one cluster URL", category: 2 },
        { text: "Launch pillar only after minimum cluster coverage", category: 0 },
        { text: "Homepage spotlight link to new pillar", category: 1 },
        { text: "Track assisted conversions per cluster ID", category: 2 },
      ],
      correctFeedback:
        "Right. Design, linking, and migration/measurement are distinct cluster disciplines.",
      wrongFeedback:
        "Review pillar design (2.2–2.3), linking (2.4), and migration/metrics (2.7–2.8).",
    },
    {
      kind: "order",
      q: "Order the legacy-to-cluster migration sequence.",
      prompt: "Drag to arrange the recommended migration flow.",
      items: [
        "Inventory URLs and tag by topic and intent",
        "Plan consolidate, redirect, or retire per URL",
        "Pilot one cluster migration and measure 60–90 days",
        "Rewrite pillar and fix internal link mesh",
        "Scale playbook to remaining clusters",
      ],
      correctFeedback:
        "Exactly. Inventory → plan → pilot → pillar/links → scale.",
      wrongFeedback:
        "Start with audit and pilot before site-wide migration. Re-read section 2.7.",
    },
    {
      q: "How should PMs prioritise which clusters to build?",
      options: [
        "Highest keyword volume only, regardless of product fit",
        "Search demand weighted by business proximity, ICP fit, and competitive feasibility",
        "Alphabetical order of topics",
        "Whatever competitors published last week",
      ],
      correct: 1,
      correctFeedback:
        "Right. Clusters anchor to business goals — volume alone produces non-converting traffic.",
      wrongFeedback:
        "Cluster prioritisation needs business fit, not volume alone. Re-read section 2.5.",
    },
  ],
});
