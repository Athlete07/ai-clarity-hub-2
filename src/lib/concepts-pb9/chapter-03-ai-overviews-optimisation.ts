import { buildChapter, buildSection, s, x } from "../concepts-pb4-helpers";

export const chapter03AiOverviewsOptimisation = buildChapter({
  slug: "pb9-ai-overviews-optimisation",
  number: 3,
  shortTitle: "AI Overviews",
  title: "AI Overviews Optimisation",
  readingMinutes: 29,
  summary:
    "Ranking in the answer, not just below it — how to structure content that gets selected as source material for AI-generated search summaries",
  keyTakeaway:
    "AI Overviews are Google's AI-generated summaries above organic results — 'position one' now includes being cited as a source inside the answer. Selection favours clear structure, direct answers, factual precision, trustworthy citations, and topical authority. For PMs, optimise for citation share and brand visibility alongside clicks — lead with answers, use Q&A patterns, maintain accuracy, and track when you appear or disappear in AI surfaces.",
  pmCallout:
    "As a PM: AI Overviews change the success metric from CTR alone to citation + brand recall. Structure content so a machine can extract a correct 50-word answer without misrepresenting you. Invest in accuracy and primary-source citations — hallucinated summaries from sloppy pages damage trust. Report AI Overview appearances in cluster dashboards alongside GSC impressions.",
  sections: [
    buildSection({
      number: "3.1",
      title: "What are AI Overviews",
      subtitle:
        "Google's AI-generated answer summaries that appear above organic results — the feature that changed what 'position one' means",
      take: "AI Overviews (formerly SGE) are AI-generated answer summaries Google displays above traditional organic results for many queries — synthesising information from indexed sources with inline citations — so winning search visibility increasingly means being selected as a cited source inside the overview, not only ranking in the blue-link list below.",
      why: "Teams still report only traditional rankings. PMs who track AI Overviews understand that zero-click answers can still build authority — or erode it if competitors get cited instead.",
      paragraphs: [
        [
          s("The SERP layout bifurcated: answer layer + link layer. "),
          x(
            "Users may get a complete answer without scrolling. Organic listings still matter for depth, transactions, and queries without overviews — but the fold changed.",
            "PM metric expansion: impressions in overview citations, not just position 1–10 blue links.",
          ),
          s(" Visibility now includes in-answer brand presence."),
        ],
        [
          s("AI Overviews are query-selective, not universal. "),
          x(
            "Google enables them for informational and exploratory queries more than pure navigational or sensitive YMYL without safeguards. Coverage expands over time.",
            "Do not assume every keyword gets an overview — monitor your query set.",
          ),
          s(" Strategy targets query classes where overviews appear and matter."),
        ],
        [
          s("Synthesis pulls from existing index — not a separate index. "),
          x(
            "Pages must rank in consideration set and be structurally extractable. Traditional SEO foundations still gate entry; formatting wins citation among qualified sources.",
            "Weak pages do not get cited because of AI tricks — they must earn relevance first.",
          ),
          s(" AI Overview optimisation layers on semantic SEO and clusters."),
        ],
      ],
      examples: [
        {
          title: "Citation without click — brand win",
          body: "B2B data vendor cited in AI Overview for 'what is data mesh' three weeks before earning position-one blue link. Branded search volume +15% despite flat clicks on that URL. PM added citation tracking — proved awareness value beyond CTR.",
        },
        {
          title: "Overview absent on transactional query",
          body: "PM expected overview on 'buy CRM software' — SERP remained traditional ads + listings. Shifted AIO effort to definitional and comparison queries in cluster where overviews appeared. Matched strategy to query class behaviour.",
        },
        {
          title: "Competitor cited, us ignored",
          body: "Same cluster topic: competitor cited in overview, own pillar ranked #3 but not cited. Diagnosis: competitor led with definitional paragraph and FAQ schema; own page buried answer below brand video. Restructure followed in section 3.4 playbook.",
        },
      ],
    }),
    buildSection({
      number: "3.2",
      title: "How AI Overviews select sources",
      subtitle:
        "The signals Google uses to choose which pages contribute to an AI Overview — and what differentiates cited pages from ignored ones",
      take: "Google selects AI Overview sources from pages that already demonstrate relevance and quality — then prefers content with clear extractable answers, strong E-E-A-T, structural clarity (headings, lists, definitions), freshness where needed, and alignment with the query intent — differentiating cited pages from ignored ones at similar rank positions.",
      why: "Teams assume rank #1 guarantees citation. PMs who know selection criteria fix structure and trust gaps on pages that rank but never appear in overviews.",
      paragraphs: [
        [
          s("Relevance threshold comes first. "),
          x(
            "You must be in the candidate set — topical authority, backlinks, and intent match still gatekeep. Citation optimisation is about winning among qualified pages.",
            "Fix cluster authority before micro-optimising FAQ formatting on a thin domain.",
          ),
          s(" No amount of schema rescues irrelevant pages."),
        ],
        [
          s("Extractability distinguishes cited URLs. "),
          x(
            "Concise definition paragraphs, question-shaped H2s, bullet steps, and tables map cleanly to summary sentences. Dense marketing prose without clear claims is hard to cite safely.",
            "PM acceptance: every cluster page has a standalone 40–60 word answer block for its core question.",
          ),
          s(" If a human cannot skim an answer in 10 seconds, neither can the summariser."),
        ],
        [
          s("Trust and safety filter risky sources. "),
          x(
            "YMYL topics face stricter selection — medical, financial, legal content needs credentials, citations to primary sources, and conservative claims.",
            "Promotional superlatives and uncited stats reduce selection likelihood.",
          ),
          s(" Trust signals are citation signals for AI Overviews."),
        ],
      ],
      examples: [
        {
          title: "Rank #2 cited over #1",
          body: "Health publisher ranked #2 but got overview citation vs #1 hospital page with long unstructured narrative. #2 had definition block, author credentials, and cited NIH sources. PM replicated template across condition cluster.",
        },
        {
          title: "Extractability audit",
          body: "PM ran '10-second skim test' on 20 money pages — only 6 had clear lead answers. Rewrote intros on failures. Overview citation rate on those queries rose from 2/20 to 9/20 in 10 weeks.",
        },
        {
          title: "Promotional copy filtered out",
          body: "Vendor page opening with 'industry-leading revolutionary platform' never cited. Neutral definitional rewrite + third-party stats increased citation appearances. Tone matters for safe synthesis.",
        },
      ],
    }),
    buildSection({
      number: "3.3",
      title: "The citation opportunity",
      subtitle:
        "Why appearing as a source in an AI Overview drives brand authority even when it cannibalises clicks — the new definition of search visibility",
      take: "Being cited in an AI Overview builds brand authority and recall even when clicks decline — users see your brand as the source of truth — redefining search visibility from CTR-only to citation share, branded search lift, and downstream conversions you attribute through multi-touch models.",
      why: "Marketing panics when CTR drops. PMs who reframe citations as top-of-funnel awareness can justify content investment when classic metrics look worse but pipeline improves.",
      paragraphs: [
        [
          s("Zero-click can still be positive-sum. "),
          x(
            "User reads overview citing your brand → later branded search or direct visit. Multi-touch attribution often undercounts this path.",
            "Track branded search, direct traffic, and sales mentions 'I found you on Google' in win/loss.",
          ),
          s(" Citation is brand placement in the highest-attention SERP real estate."),
        ],
        [
          s("Competitor citation is competitor mindshare. "),
          x(
            "If only rivals appear in overviews for your category queries, buyers learn from their framing. Defensive AIO strategy is as important as offensive ranking.",
            "Prioritise citation on category-defining queries even at CTR cost.",
          ),
          s(" Unowned answers let competitors define the category narrative."),
        ],
        [
          s("Balance portfolio metrics. "),
          x(
            "Report cluster-level: overview citation rate, blue-link CTR, branded search, assisted conversions. Optimise the mix — some pages chase citations, others chase high-intent clicks.",
            "PM dashboard avoids single-metric tyranny of CTR alone.",
          ),
          s(" Different URLs serve citation vs conversion roles in one cluster."),
        ],
      ],
      examples: [
        {
          title: "Branded search lift post-citation",
          body: "After citations on five 'how to' queries, branded search impressions +22% over 90 days. Sales noted more prospects 'already knew' product terminology from content. PM tied citation campaign to awareness KPI, not page CTR.",
        },
        {
          title: "Defensive play — category definition",
          body: "Competitor owned overview on 'customer data platform vs CDP.' PM fast-tracked neutral comparison pillar with citations to Gartner and Forrester. Secured co-citation within six weeks. Prevented competitor-only narrative.",
        },
        {
          title: "Multi-touch saves budget cut",
          body: "Content team faced cut after CTR dip site-wide. PM showed overview citations on top-funnel cluster correlated with 19% of opp creates within 30 days (multi-touch). Budget retained with revised success metrics.",
        },
      ],
    }),
    buildSection({
      number: "3.4",
      title: "Content structure for AI selection",
      subtitle:
        "Clear headings, concise definitions, direct answers to questions — the formatting signals that increase selection likelihood",
      take: "Structure content for AI selection with descriptive H2/H3 headings, a concise definitional lead paragraph, short paragraphs, bulleted steps where appropriate, comparison tables, and FAQ blocks — formatting that lets summarisers extract accurate sentences with minimal transformation.",
      why: "Beautiful narrative prose underperforms for extraction. PMs who spec structure templates in content briefs scale citation-friendly pages without hoping writers guess format.",
      paragraphs: [
        [
          s("Headings mirror questions and claims. "),
          x(
            "'What is X?' 'How does Y work?' 'X vs Z' — headings become extraction boundaries. Vague H2s ('Overview', 'Deep dive') waste semantic signal.",
            "Brief template: required H2 patterns per intent type.",
          ),
          s(" Heading text is API surface for summarisers."),
        ],
        [
          s("Lead with the answer block. "),
          x(
            "First paragraph under each major H2: direct answer in 40–80 words, then supporting detail. Matches inverted pyramid and snippet extraction patterns.",
            "Do not bury definitions below brand story — machines and skimmers never reach them.",
          ),
          s(" Answer-first is non-negotiable for AIO-target pages."),
        ],
        [
          s("Tables and lists reduce synthesis error. "),
          x(
            "Comparisons in tables cite more accurately than prose paragraphs. Numbered steps for processes. Definitions in bold term + colon pattern.",
            "PM pairs structure with fact-checking — tables full of wrong numbers get cited wrong.",
          ),
          s(" Structure increases extraction fidelity when facts are right."),
        ],
      ],
      examples: [
        {
          title: "Template rollout — citation rate",
          body: "PM mandated AIO content template on 30 cluster pages: definitional lead, question H2s, FAQ block, comparison table where relevant. Overview citations on tracked queries went from 8% to 31% in one quarter.",
        },
        {
          title: "Narrative redesign — insurance explainer",
          body: "Legal team produced 2,000-word narrative on policy types. Zero citations. Rewrote with H2 per policy type, lead definition each, eligibility table. Citations on three high-volume queries within 45 days.",
        },
        {
          title: "Table accuracy incident",
          body: "Comparison table had outdated pricing — overview quoted wrong number. PM added quarterly table review to content ops. Structure plus accuracy discipline — extraction amplifies errors too.",
        },
      ],
    }),
    buildSection({
      number: "3.5",
      title: "The inverted pyramid for AI",
      subtitle:
        "Leading with the direct answer before the supporting detail — the writing pattern optimised for both human readers and AI summarisers",
      take: "The inverted pyramid for AI means placing the direct, complete answer in the first sentences under each heading — then supporting context, examples, and nuance below — so both skimming humans and extractive summarisers get the core claim without parsing fluff.",
      why: "Writers trained in storytelling bury lede. PMs who enforce inverted pyramid improve snippet wins, accessibility, and citation accuracy simultaneously.",
      paragraphs: [
        [
          s("First sentences carry disproportionate weight. "),
          x(
            "Summarisers weight opening sentences heavily. 'Kubernetes is an open-source container orchestration platform that automates deployment, scaling, and management' beats three paragraphs of history before the definition.",
            "Editorial rule: no heading without immediate answer sentence.",
          ),
          s(" Hook = answer, not metaphor."),
        ],
        [
          s("Nuance belongs below the fold of each section. "),
          x(
            "Qualifications, edge cases, and expert commentary follow the direct answer — still indexed, still valuable for depth seekers and long-tail variants.",
            "Balances AIO extraction with E-E-A-T depth requirements.",
          ),
          s(" Depth supports authority; lead supports extraction."),
        ],
        [
          s("Consistent pattern trains writers and models. "),
          x(
            "Site-wide consistency helps Google predict extractable structure across your domain — cluster templates reinforce pattern.",
            "CMS block types: 'Definition', 'Steps', 'Comparison' — each with prescribed lead format.",
          ),
          s(" Template consistency scales quality faster than one-off edits."),
        ],
      ],
      examples: [
        {
          title: "Writer training — inverted pyramid",
          body: "PM ran 90-minute workshop with examples of cited vs ignored pages. Required peer review checklist: 'answer in sentence one?' Citation rate on new publishes doubled vs prior quarter's unstructured drafts.",
        },
        {
          title: "Historical intro removed",
          body: "Every guide started with 'Since the dawn of digital marketing...' PM cut history intros site-wide on AIO-target URLs. Average time-to-answer for readers improved; citations on 12 URLs within 60 days.",
        },
        {
          title: "Edge case subsection",
          body: "Security guide led with 'Zero trust means never trusting network location by default' — citations followed. Edge cases moved to H3 'When zero trust fails' below. Extraction stayed accurate; depth preserved for experts.",
        },
      ],
    }),
    buildSection({
      number: "3.6",
      title: "Question-and-answer content patterns",
      subtitle:
        "FAQ sections, definition blocks, and step-by-step explanations — the content types AI Overviews preferentially cite",
      take: "FAQ sections with genuine user questions, standalone definition blocks, and numbered step-by-step explanations are disproportionately cited in AI Overviews — because they map cleanly to query shapes and reduce summarisation risk.",
      why: "FAQs get added as footer SEO spam. PMs who source FAQs from real user questions and verify answers create high-citation assets instead of penalty bait.",
      paragraphs: [
        [
          s("FAQ content must reflect real questions. "),
          x(
            "Mine PAA, support tickets, sales calls, and community forums. Each Q&A pair: question as H3 or schema FAQ, concise verified answer.",
            "Fake FAQ spam ('What is the best company? We are!') erodes trust and selection.",
          ),
          s(" Authentic FAQs are data products — curate and maintain them."),
        ],
        [
          s("Definition blocks anchor entity clarity. "),
          x(
            "'Term: one-sentence definition. Extended explanation...' Helps knowledge graph alignment and overview extraction for 'what is' queries.",
            "Pair with schema where appropriate — FAQ and definedTerm patterns.",
          ),
          s(" Definitions are the atomic units of informational search."),
        ],
        [
          s("Step-by-step for procedural queries. "),
          x(
            "Numbered steps with imperative verbs — 'Configure SSO in five steps' — match how-to query shapes. Screenshots optional; clarity mandatory.",
            "HowTo schema can reinforce but content quality gates selection.",
          ),
          s(" Process content should be scannable and testable."),
        ],
      ],
      examples: [
        {
          title: "Support-sourced FAQ — citation spike",
          body: "PM imported top 40 support questions into pillar FAQ with engineering review. FAQ schema on verified pairs. Overview citations on 18 procedural queries within one quarter — highest ROI content sprint of the year.",
        },
        {
          title: "Fake FAQ penalty near-miss",
          body: "Agency added 100 generic FAQs with keyword stuffing. PM rejected publish; trimmed to 12 real questions. Avoided quality hit and later earned citations on the trimmed set. Quality over quantity.",
        },
        {
          title: "HowTo cluster — procedural dominance",
          body: "'Migrate database to cloud' cluster used numbered steps on every page. Captured majority of overview appearances for how-to variants in category. Procedural pattern matched query intent.",
        },
      ],
    }),
    buildSection({
      number: "3.7",
      title: "Accuracy and citation trustworthiness",
      subtitle:
        "Why AI Overviews favour pages that cite primary sources, use precise language, and avoid hedged or promotional claims",
      take: "AI Overviews favour sources that cite primary references, use precise careful language, show author expertise, and avoid exaggerated promotional claims — because Google reduces hallucination risk by preferring pages that are themselves trustworthy and verifiable.",
      why: "Marketing copy conflicts with citation selection. PMs who enforce fact-checking and source citation on YMYL and category-defining content protect brand and increase overview inclusion.",
      paragraphs: [
        [
          s("Primary sources beat vague authority. "),
          x(
            "Link to standards bodies, government data, peer-reviewed research, official docs — not 'studies show' without citation.",
            "PM workflow: footnotes or inline links for stats; quarterly link health check.",
          ),
          s(" Uncited stats are liability in AI-mediated search."),
        ],
        [
          s("Precise language reduces synthesis harm. "),
          x(
            "Avoid absolute claims ('always', 'guaranteed', 'best') unless provable. Qualify scope: 'for teams under 50 engineers' vs 'for everyone'.",
            "Precise copy survives summarisation; hype becomes embarrassment when quoted in overview.",
          ),
          s(" If you fear overview quoting it, rewrite it."),
        ],
        [
          s("Author and review signals matter on sensitive topics. "),
          x(
            "Named experts, credentials, 'medically reviewed by', update dates — E-E-A-T elements influence selection on YMYL.",
            "Anonymous blog byline on health content rarely earns overview trust.",
          ),
          s(" Expertise display is product work on content pages."),
        ],
      ],
      examples: [
        {
          title: "Stats footnote program",
          body: "PM required primary source link for every statistic on money pages. Overview citations on finance explainers rose; legal approved faster. Trust formatting unlocked distribution.",
        },
        {
          title: "Promotional claim rewrite",
          body: "Page claimed 'only platform with 100% uptime.' Rewrote to sourced SLA metrics with date range. Co-citation in overview within weeks. Precision beat superlative.",
        },
        {
          title: "Medical review byline",
          body: "Health content added 'Reviewed by [MD], [date]' on 25 condition pages. Overview appearances on 14 queries vs 2 before. YMYL trust gate was author visibility.",
        },
      ],
    }),
    buildSection({
      number: "3.8",
      title: "Monitoring AI Overview appearances",
      subtitle:
        "The tools and manual methods for tracking when and how your content is cited — and what changes when it stops appearing",
      take: "Monitor AI Overview appearances through a mix of rank trackers with AIO modules, manual SERP sampling of priority query sets, GSC impression anomalies, and brand mention tools — tracking when you are cited, dropped, or replaced and correlating with content or algorithm changes.",
      why: "You cannot improve what you do not measure. PMs who institutionalise AIO monitoring catch losses early and validate structural experiments with data.",
      paragraphs: [
        [
          s("Build a priority query watchlist. "),
          x(
            "50–200 queries per cluster — head definitions, category comparisons, key how-tos. Weekly manual check or automated SERP API where compliant.",
            "Document citation URL, competitor co-citations, and overview presence boolean.",
          ),
          s(" Watchlist beats random spot checks."),
        ],
        [
          s("Tools supplement, not replace, judgment. "),
          x(
            "Semrush, Ahrefs, and others added AI overview tracking; accuracy varies by locale and query. Combine with GSC and analytics.",
            "PM owns query list and interprets tool noise — do not outsource strategy to dashboard alone.",
          ),
          s(" Validate tool flags with manual SERP confirmation."),
        ],
        [
          s("Diagnose drops with change log correlation. "),
          x(
            "Lost citation after content rewrite? Competitor published better structure? Algorithm update? Maintain content change log and overview status columns.",
            "Run post-mortem when high-value citations disappear — often fixable structure regression.",
          ),
          s(" Citation churn is operational signal, not background noise."),
        ],
      ],
      examples: [
        {
          title: "Weekly AIO standup",
          body: "PM added 15-minute weekly review: watchlist queries, citation changes, actions. Caught competitor leap on 'API rate limiting' early; countered with updated table and FAQ. Regained citation in 21 days.",
        },
        {
          title: "Rewrite regression",
          body: "Brand redesign rewrote intros to storytelling style — overview citations dropped on 8 URLs. Rolled back to answer-first template on priority pages. Citations recovered in 30 days. Change log caught causation.",
        },
        {
          title: "Tool + manual hybrid",
          body: "Ahrefs flagged new overview on 40 queries; manual sample confirmed 12 were ICP-relevant. Prioritised optimisation on 12, ignored 28 low-fit. PM prevented wasted writer capacity.",
        },
      ],
    }),
    buildSection({
      number: "3.9",
      title: "PM decision lens: optimising for AI Overviews vs traditional ranking",
      subtitle:
        "The traffic model shift, the content investment required, and when the citation strategy is worth prioritising over click-through",
      take: "Optimising for AI Overviews trades some click-through for citation visibility — worth prioritising on category-defining informational queries, defensive brand narratives, and top-funnel education; traditional CTR optimisation remains primary on high-intent transactional pages where overviews are rare and clicks convert directly.",
      why: "Teams apply AIO tactics everywhere or nowhere. PMs who segment URL roles within clusters allocate expensive structural work where citation ROI is highest.",
      paragraphs: [
        [
          s("Segment pages by funnel role. "),
          x(
            "Top-funnel definitions and how-tos: optimise citation + brand. Mid-funnel comparisons: balance citation and CTR. Bottom-funnel pricing/signup: classic conversion SEO, schema for rich results.",
            "Same cluster, different optimisation targets per URL — document in brief.",
          ),
          s(" One-size AIO strategy wastes effort on wrong pages."),
        ],
        [
          s("Investment: templates, review, monitoring. "),
          x(
            "AIO-ready content costs more — SME review, primary sources, structural editing, ongoing monitoring. ROI on awareness and pipeline, not overnight traffic spikes.",
            "PM budgets AIO work as % of cluster capacity — e.g., 30% on citation-optimised refreshes.",
          ),
          s(" Citation optimisation is recurring ops, not one project."),
        ],
        [
          s("Decision framework: when to prioritise AIO. "),
          x(
            "Prioritise when: overviews appear on query set, competitor cited, query defines category, branded search lift matters, CTR already low from snippets. Deprioritise when: pure transactional SERP, tiny search volume, or page is login-gated.",
            "Revisit quarterly as overview coverage expands.",
          ),
          s(" AIO priority is query-class and competitive dynamics — not ideology."),
        ],
      ],
      examples: [
        {
          title: "URL role matrix",
          body: "PM tagged cluster URLs: Citation / Balanced / Conversion. Writers received different brief templates. Citation-tagged pages earned 73% of overview appearances with 40% of writer hours. Efficiency from segmentation.",
        },
        {
          title: "Transactional deprioritisation",
          body: "Stopped AIO rewrites on pricing and demo request pages — no overviews, high CTR value. Reallocated budget to definitional cluster. Overall pipeline up despite fewer total content edits.",
        },
        {
          title: "Quarterly strategy refresh",
          body: "Q1 overview coverage expanded to comparison queries in EU locales. PM expanded watchlist and EU FAQ schema. Proactive quarterly review caught platform shift before competitors.",
        },
      ],
    }),
  ],
  quiz: [
    {
      q: "What changed about 'position one' with AI Overviews?",
      options: [
        "Organic rankings no longer exist",
        "Visibility includes being cited inside the AI-generated answer above blue links",
        "Only paid ads appear on search results pages",
        "AI Overviews replace all website hosting",
      ],
      correct: 1,
      correctFeedback:
        "Right. AI Overviews add a citation layer — brand visibility can exist inside the answer, not only in blue links.",
      wrongFeedback:
        "AI Overviews cite sources in the answer block above traditional results. Re-read section 3.1.",
    },
    {
      q: "What most differentiates cited pages from uncited pages at similar rankings?",
      options: [
        "Higher keyword density in footers",
        "Clear extractable answers, structure, and trust signals",
        "Longer pages with no headings",
        "More pop-up forms above the fold",
      ],
      correct: 1,
      correctFeedback:
        "Exactly. Extractability, structure, and E-E-A-T differentiate citations among relevant pages.",
      wrongFeedback:
        "Citation favours clear answers and trust — not stuffing or unstructured length. Re-read section 3.2.",
    },
    {
      q: "Why use the inverted pyramid structure for AI Overviews?",
      options: [
        "It hides the answer from users",
        "Direct answers in opening sentences are easier for summarisers and skimmers to extract accurately",
        "Google penalises short paragraphs",
        "It eliminates the need for any citations",
      ],
      correct: 1,
      correctFeedback:
        "Right. Lead with the answer — summarisers weight opening sentences heavily.",
      wrongFeedback:
        "Inverted pyramid puts the answer first for extraction. Re-read section 3.5.",
    },
    {
      kind: "categorize",
      q: "Match each tactic to the best AIO optimisation category.",
      categories: ["Structure & format", "Trust & accuracy", "Measurement & strategy"],
      items: [
        { text: "Question-shaped H2 with 40-word lead answer", category: 0 },
        { text: "Link stats to primary government or standards sources", category: 1 },
        { text: "Weekly watchlist SERP sampling for priority queries", category: 2 },
        { text: "FAQ blocks sourced from real support tickets", category: 0 },
        { text: "Named expert review byline on YMYL pages", category: 1 },
        { text: "Tag URLs as Citation vs Conversion roles in cluster", category: 2 },
      ],
      correctFeedback:
        "Right. Structure wins extraction; trust wins selection; measurement and segmentation guide investment.",
      wrongFeedback:
        "Review structure (3.4–3.6), trust (3.7), and monitoring/strategy (3.8–3.9).",
    },
    {
      kind: "order",
      q: "Order the content optimisation flow for AI Overview citation.",
      prompt: "Drag to arrange the recommended sequence.",
      items: [
        "Confirm page is in relevance set via cluster authority",
        "Add answer-first definitional lead under clear headings",
        "Source FAQs and stats from verified primary references",
        "Deploy FAQ or HowTo schema where appropriate",
        "Monitor citation appearances and iterate on drops",
      ],
      correctFeedback:
        "Exactly. Relevance → structure → trust → schema → monitor.",
      wrongFeedback:
        "Earn relevance first, then structure and trust, then measure. Re-read sections 3.2–3.8.",
    },
    {
      q: "When should PMs deprioritise AI Overview optimisation?",
      options: [
        "On all blog posts regardless of intent",
        "On high-intent transactional pages where overviews rarely appear and clicks drive conversion",
        "Never — AIO is always the top priority",
        "Only on pages that already rank number one",
      ],
      correct: 1,
      correctFeedback:
        "Right. Segment by funnel role — transactional conversion pages often deserve classic CTR focus over citation tactics.",
      wrongFeedback:
        "AIO optimisation targets informational and category queries; not every URL needs citation focus. Re-read section 3.9.",
    },
  ],
});
