import { buildChapter, buildSection, s, x } from "../concepts-pb4-helpers";

export const chapter07SearchIntentMapping = buildChapter({
  slug: "pb9-search-intent-mapping",
  number: 7,
  shortTitle: "Search Intent",
  title: "Search Intent Mapping",
  readingMinutes: 28,
  summary:
    "The discipline that connects what users actually want to the content you build — classifying queries by intent, validating against SERPs, and matching formats so every page earns its place in the funnel",
  keyTakeaway:
    "Search intent is the organising principle behind every content decision — informational, navigational, transactional, and commercial investigation intents demand different formats, CTAs, and success metrics. PMs who map keywords to intent, validate against live SERPs, and measure alignment (not just rankings) build content portfolios that convert and survive algorithm shifts.",
  pmCallout:
    "As a PM: stop approving content briefs that list keywords without intent labels. Every page needs a declared intent, a SERP-validated format, and a success metric matched to that intent — ranking position alone is the wrong KPI for half your portfolio.",
  sections: [
    buildSection({
      number: "7.1",
      title: "What is search intent",
      subtitle: "The underlying goal behind every query — the reason a user typed those words into a search box, not the words themselves",
      take: "Search intent is the goal behind a query — what the user wants to accomplish, not the literal keywords they typed. 'Project management software' could mean learning what PM software is (informational), finding Asana's homepage (navigational), comparing tools before purchase (commercial investigation), or buying a subscription (transactional). Intent determines content format, page structure, CTA placement, and which metric defines success. Keyword volume without intent classification is a planning error.",
      why: "PMs who treat keywords as interchangeable traffic targets build pages that rank but don't convert — or worse, cannibalise each other. Intent is the filter that turns a keyword list into a content strategy.",
      paragraphs: [
        [
          s("Intent is the job-to-be-done behind the query. "),
          x(
            "Users don't search for keywords — they search to solve problems, find brands, compare options, or complete transactions.",
            "PM frames every content initiative as 'what job does this page do for the searcher?'",
          ),
          s(" Keyword strings are proxies for jobs, not the jobs themselves."),
        ],
        [
          s("Intent mismatch is the primary cause of content failure. "),
          x(
            "A blog post ranking for a transactional query loses to product pages. A sales landing page ranking for an informational query bounces users who wanted education first.",
            "High traffic with wrong intent produces misleading analytics — visits without outcomes.",
          ),
          s(" PM audits existing rankings for intent fit before scaling content production."),
        ],
        [
          s("Intent mapping scales content governance. "),
          x(
            "With intent labels on every URL, teams stop debating 'should this be a blog post or landing page?' — the intent classification answers it.",
            "Intent taxonomy becomes shared language between SEO, content, product, and paid teams.",
          ),
          s(" PM owns the intent taxonomy as a cross-functional artefact, not an SEO spreadsheet."),
        ],
      ],
      examples: [
        {
          title: "Ranking without converting — intent mismatch",
          body: "SaaS PM's pricing page ranked #3 for 'what is CRM software' — 12K monthly visits, 0.2% trial conversion. SERP was dominated by educational guides. PM created separate informational pillar; pricing page dropped from that query but overall trial signups rose 18%. Right intent, right format.",
        },
        {
          title: "Intent taxonomy — ended format debates",
          body: "Content team spent 3 weeks debating blog vs landing page for 'enterprise data warehouse.' PM classified as commercial investigation → comparison guide format. Decision took 10 minutes once intent was declared. Taxonomy removed recurring approval bottleneck.",
        },
        {
          title: "Cannibalisation discovered via intent audit",
          body: "Four URLs competed for 'marketing automation' variants — two informational blogs, one product page, one comparison page. Intent audit revealed three informational pieces cannibalising each other. PM consolidated into one pillar + one comparison. Combined traffic rose 34%.",
        },
      ],
    }),
    buildSection({
      number: "7.2",
      title: "The four core intent types",
      subtitle: "Informational, navigational, transactional, and commercial investigation — the taxonomy every content portfolio needs",
      take: "Four intent types cover the vast majority of queries: informational (learn something — 'how does RAG work'), navigational (find a specific site or page — 'OpenAI login'), transactional (complete an action — 'buy MacBook Pro'), and commercial investigation (compare before buying — 'best project management tools 2025'). Most B2B content portfolios are 40–60% informational, 20–30% commercial investigation, 10–20% transactional, and 5–10% navigational. PMs assign every target keyword to exactly one primary intent.",
      why: "Without a shared four-type taxonomy, teams invent inconsistent labels ('top of funnel,' 'BOFU,' 'awareness') that don't connect to SERP evidence. The four-type model is SERP-validated and industry-standard.",
      paragraphs: [
        [
          s("Informational intent serves the learning journey. "),
          x(
            "User wants knowledge — definitions, how-tos, explanations, tutorials. SERP shows articles, videos, featured snippets, People Also Ask.",
            "Success metric: engagement, assisted conversions, email capture — not direct purchase.",
          ),
          s(" PM resists putting hard-sell CTAs on informational content — it damages trust and bounce rate."),
        ],
        [
          s("Commercial investigation bridges research and purchase. "),
          x(
            "User is evaluating options — 'best,' 'vs,' 'alternatives,' 'review,' 'pricing comparison.' SERP shows comparison articles, review roundups, category pages.",
            "Highest-value intent for B2B SaaS — captures buyers mid-funnel.",
          ),
          s(" PM prioritises commercial investigation content in roadmap — highest conversion proximity."),
        ],
        [
          s("Transactional and navigational intents demand precision. "),
          x(
            "Transactional: user ready to act — buy, sign up, download, book. Navigational: user wants a specific destination — brand name, login, support page.",
            "Wrong format here isn't just ineffective — it actively damages conversion and brand trust.",
          ),
          s(" PM ensures product and brand pages serve transactional/navigational queries without blog-wrapper workarounds."),
        ],
      ],
      examples: [
        {
          title: "Portfolio rebalance — commercial investigation gap",
          body: "PM audited 200 indexed pages: 72% informational, 8% commercial investigation, 12% transactional, 8% navigational. Competitor won 'best [category]' queries with 40 comparison pages. PM shifted Q3 roadmap to 15 comparison guides. Commercial investigation traffic rose 89% in two quarters.",
        },
        {
          title: "Navigational intent — brand query hijack",
          body: "Competitor's comparison page ranked #2 for '[Our Brand] pricing' — navigational intent. Users expected official pricing page, got competitor FUD. PM built dedicated pricing URL, added schema, secured branded SERP. Navigational defence is brand protection, not SEO vanity.",
        },
        {
          title: "Informational content — wrong success metric",
          body: "Leadership demanded direct demo bookings from 'how to automate invoices' blog post. Intent was informational; SERP was guides and videos. PM reframed KPI to email subscribers and assisted conversions (users who read guide then visited pricing within 14 days). Metric matched intent; team stopped calling the page 'failed.'",
        },
      ],
    }),
    buildSection({
      number: "7.3",
      title: "Intent signals in SERPs",
      subtitle: "Reading the search results page as intent evidence — SERP features reveal what Google believes users want",
      take: "SERP composition is the strongest intent signal available. Featured snippets and PAA boxes indicate informational intent. Shopping carousels and product panels signal transactional. Comparison and review content dominating organic results signals commercial investigation. Sitelinks and brand knowledge panels signal navigational. PMs treat SERP analysis as mandatory validation — if your intent classification disagrees with the SERP, the SERP wins.",
      why: "Self-declared intent labels without SERP validation are guesses. Google's ranking algorithm is the world's largest intent classification engine — the SERP is its output. Ignoring it means building content Google won't reward.",
      paragraphs: [
        [
          s("SERP features are intent labels made visible. "),
          x(
            "Featured snippet = Google chose one answer. Shopping results = purchase intent. Local pack = location intent. Video carousel = visual/learn intent.",
            "PM documents SERP features per target keyword in content briefs.",
          ),
          s(" Feature presence/absence changes content format requirements."),
        ],
        [
          s("Top-ranking content type reveals dominant intent. "),
          x(
            "If 8 of 10 results are long-form guides, Google expects a guide. If 8 of 10 are product/category pages, Google expects commercial content.",
            "Outlier formats rarely outrank consensus — don't bet your roadmap on being the exception.",
          ),
          s(" PM aligns page template to SERP majority, not internal preference."),
        ],
        [
          s("SERP volatility signals intent shift. "),
          x(
            "When a SERP changes composition — e.g., AI Overviews appear, video carousel replaces articles — intent interpretation may be shifting.",
            "PM monitors SERP changes quarterly; intent labels aren't permanent.",
          ),
          s(" Intent mapping is a living process, not a one-time spreadsheet exercise."),
        ],
      ],
      examples: [
        {
          title: "SERP override — PM was wrong",
          body: "PM classified 'data pipeline architecture' as commercial investigation (B2B buyer query). SERP was 9/10 informational tutorials and documentation. PM reclassified, rebuilt page as technical guide. Rankings moved from page 4 to position 6 within 8 weeks. SERP evidence corrected strategy.",
        },
        {
          title: "Shopping carousel — transactional signal missed",
          body: "E-commerce PM planned blog post for 'wireless noise-cancelling headphones.' SERP showed shopping carousel + product pages — transactional intent. PM pivoted to optimised category page with filters and reviews. Blog would have been dead on arrival.",
        },
        {
          title: "SERP monitoring caught intent drift",
          body: "Query 'AI content strategy' had been informational for 2 years. Q1 SERP shifted: 4 AI Overviews, 3 comparison articles, 2 tools. PM reclassified as commercial investigation, published comparison guide. Captured new SERP composition before competitor.",
        },
      ],
    }),
    buildSection({
      number: "7.4",
      title: "The intent mapping workflow",
      subtitle: "A repeatable process for classifying keywords, validating against SERPs, and assigning content formats",
      take: "Intent mapping workflow: (1) collect keyword cluster, (2) assign preliminary intent label, (3) validate against live SERP, (4) confirm or revise intent, (5) assign content format and template, (6) define success metric, (7) document in content registry. PMs run this workflow for every new content initiative and during quarterly portfolio audits. The output is an intent-mapped content plan — not a keyword list.",
      why: "Ad hoc intent guessing doesn't scale past 20 pages. A documented workflow ensures every writer, agency, and stakeholder classifies intent the same way — and catches mismatches before production spend.",
      paragraphs: [
        [
          s("Step 1–3: classify, then validate — never skip validation. "),
          x(
            "Analyst assigns intent based on keyword modifiers ('best,' 'how to,' 'buy') and business context. Then opens live SERP and checks consensus.",
            "Modifier heuristics are starting points, not conclusions.",
          ),
          s(" PM requires SERP screenshot or feature log in every content brief."),
        ],
        [
          s("Step 4–5: intent determines format, not the reverse. "),
          x(
            "Format library mapped to intent: informational → guide/tutorial, commercial → comparison/review, transactional → product/landing, navigational → brand/support page.",
            "Prevents 'we have a blog template, let's use it for everything.'",
          ),
          s(" PM maintains format-to-intent lookup table in content governance docs."),
        ],
        [
          s("Step 6–7: metric and registry close the loop. "),
          x(
            "Each intent type gets a default KPI: informational → engagement + assisted conv, commercial → demo/trial from page, transactional → conversion rate.",
            "Registry tracks intent label, SERP validation date, format, owner, and KPI.",
          ),
          s(" PM reviews registry quarterly — stale SERP validations get refreshed."),
        ],
      ],
      examples: [
        {
          title: "Workflow adoption — agency alignment",
          body: "PM embedded intent mapping workflow in agency briefs. Required fields: keyword, intent label, SERP validation date, format, KPI. First month: 40% of agency drafts had intent mismatches caught at brief stage (not after publication). Rework cost dropped 60%.",
        },
        {
          title: "Registry prevented duplicate investment",
          body: "New writer proposed 'CRM comparison guide' — registry showed existing commercial investigation page targeting same cluster, updated 3 weeks prior. PM redirected writer to update existing page. Registry saved 3 weeks of duplicate production.",
        },
        {
          title: "Quarterly audit — 23 reclassifications",
          body: "PM ran Q2 intent audit on 180 pages. 23 needed reclassification due to SERP shifts (AI Overviews, new competitors, format changes). 8 pages consolidated, 5 new gaps identified. Audit cycle prevented slow portfolio decay.",
        },
      ],
    }),
    buildSection({
      number: "7.5",
      title: "Keyword modifiers and intent heuristics",
      subtitle: "The linguistic patterns that signal intent — fast classification rules before SERP validation",
      take: "Keyword modifiers provide fast intent signals: 'how to,' 'what is,' 'why' → informational. 'Best,' 'top,' 'vs,' 'alternatives,' 'review' → commercial investigation. 'Buy,' 'pricing,' 'discount,' 'free trial' → transactional. Brand names alone → navigational. Heuristics accelerate triage but never replace SERP validation — modifiers can mislead ('best practices' is informational, not commercial). PMs document modifier rules as first-pass filters, not final classifications.",
      why: "Manual SERP checking for 500 keywords is impractical. Modifier heuristics let teams batch-classify at scale, then prioritize SERP validation for high-volume and high-stakes queries.",
      paragraphs: [
        [
          s("Modifier rules are triage, not truth. "),
          x(
            "'Best data governance framework' sounds commercial but SERP may be informational guides from analysts.",
            "High-volume keywords always get SERP validation regardless of modifier match.",
          ),
          s(" PM sets volume threshold for mandatory SERP check — e.g., >500 monthly searches."),
        ],
        [
          s("Compound modifiers increase confidence. "),
          x(
            "'Best project management software for startups' — 'best' + category + audience = strong commercial signal.",
            "'How to implement project management' — 'how to' + action = strong informational signal.",
          ),
          s(" PM trains content team on compound modifier patterns, not single-word rules."),
        ],
        [
          s("Branded vs non-branded changes intent interpretation. "),
          x(
            "'Salesforce pricing' = navigational/transactional (brand known). 'CRM pricing comparison' = commercial investigation (category search).",
            "Same product category, different intent based on brand presence in query.",
          ),
          s(" PM tags keywords as branded/non-branded before applying modifier heuristics."),
        ],
      ],
      examples: [
        {
          title: "Heuristic trap — 'best practices' misclassified",
          body: "Automated intent tool tagged 45 'best practices' keywords as commercial investigation ('best' modifier). SERP validation: 41 were informational (industry guides). PM added exception rule: 'best practices' → default informational until SERP says otherwise. Prevented 41 wrong-format pages.",
        },
        {
          title: "Compound modifier — batch triage at scale",
          body: "PM imported 800 keywords from research tool. Modifier heuristics classified 680 with confidence. 120 ambiguous flagged for manual SERP review. Team validated high-stakes 120 in 2 days vs 3 weeks for full manual pass. Heuristics accelerated without sacrificing accuracy on priority terms.",
        },
        {
          title: "Branded query — different playbook",
          body: "'[Competitor] vs [Us]' is commercial investigation. '[Our Brand] login' is navigational. PM separated branded keyword lists into intent-specific playbooks. Support team owned navigational; content team owned commercial. Reduced cross-team conflict on branded SERP strategy.",
        },
      ],
    }),
    buildSection({
      number: "7.6",
      title: "Content format matching",
      subtitle: "Aligning page type, structure, and CTA to intent — the format decisions that determine whether content satisfies the searcher",
      take: "Each intent type has proven format patterns: informational → long-form guide, tutorial, glossary, video explainer. Commercial investigation → comparison table, 'best of' roundup, alternative page, interactive quiz. Transactional → product page, pricing page, signup landing. Navigational → homepage, login, docs entry, support hub. Format mismatch — putting a 3,000-word blog wrapper around a pricing query — fails users and Google. PMs define format templates per intent in the content design system.",
      why: "Format is how intent becomes user experience. The right content in the wrong container underperforms even when rankings are strong. PMs who own format-intent mapping prevent the 'everything is a blog post' anti-pattern.",
      paragraphs: [
        [
          s("Informational formats prioritise comprehension. "),
          x(
            "Table of contents, clear headings, diagrams, step-by-step structure, minimal product pitch.",
            "CTA placement: end of article or sidebar — not interrupting learning flow.",
          ),
          s(" PM measures informational success by time on page and scroll depth, not demo clicks."),
        ],
        [
          s("Commercial investigation formats prioritise comparison. "),
          x(
            "Side-by-side tables, pros/cons, pricing summaries, 'who it's for' sections, verdict/recommendation.",
            "Users are deciding — give them decision infrastructure, not thought leadership essays.",
          ),
          s(" PM includes product inclusion criteria in commercial briefs — transparency builds trust."),
        ],
        [
          s("Transactional formats remove friction. "),
          x(
            "Above-fold value prop, pricing clarity, social proof, single primary CTA, fast load time.",
            "Every scroll past CTA without action is a leak. No 2,000-word preamble.",
          ),
          s(" PM pairs transactional pages with conversion rate optimisation, not content word count targets."),
        ],
      ],
      examples: [
        {
          title: "Format fix — comparison table doubled conversions",
          body: "Commercial investigation page for 'marketing automation tools' was 2,500-word narrative essay. Conversion rate: 0.8%. PM rebuilt with comparison table, feature matrix, and verdict section. Same rankings, conversion rose to 2.1%. Format matched intent; rankings were never the problem.",
        },
        {
          title: "Informational page — CTA placement test",
          body: "PM tested aggressive mid-article demo CTAs on 'what is zero trust security' guide. Bounce rate rose 22%, assisted conversions fell. Removed mid-article CTAs; added subtle end-of-article 'next steps' link. Bounce normalised; assisted conversions recovered. Intent-appropriate CTA placement matters.",
        },
        {
          title: "Transactional — blog wrapper killed signup rate",
          body: "Growth team published 'free trial' content as 1,500-word blog post with signup form at bottom. Signup rate: 1.2%. PM replaced with dedicated landing page — headline, 3 benefits, form above fold. Signup rate: 4.7%. Transactional intent demands transactional format.",
        },
      ],
    }),
    buildSection({
      number: "7.7",
      title: "Intent clusters and gap analysis",
      subtitle: "Grouping keywords by shared intent to find portfolio gaps, overlaps, and cannibalisation risks",
      take: "Intent clusters group keywords sharing the same user goal — not just the same topic. 'How to choose CRM,' 'CRM comparison,' and 'best CRM for small business' may form one commercial investigation cluster around 'CRM selection.' Gap analysis maps clusters to existing content: covered (page exists, intent matched), gap (no page serves this intent), overlap (multiple pages compete), misaligned (page exists, wrong intent/format). PMs prioritise gap closure on high-volume commercial investigation clusters first.",
      why: "Topic-based planning misses intent nuance — you can have comprehensive topic coverage with critical intent gaps. Cluster-level gap analysis reveals where the portfolio actually fails users.",
      paragraphs: [
        [
          s("Cluster by user goal, not keyword stem. "),
          x(
            "'Data lake vs data warehouse' and 'data lake architecture guide' share a topic but different intents — commercial vs informational.",
            "Forcing them into one cluster creates format conflict.",
          ),
          s(" PM allows one topic to spawn multiple intent clusters — each gets its own page."),
        ],
        [
          s("Gap analysis prioritises by volume × intent value. "),
          x(
            "Commercial investigation gaps with high volume = highest priority. Informational gaps with low volume = backlog.",
            "Scoring formula prevents 'fill gaps randomly' content production.",
          ),
          s(" PM presents gap analysis as prioritised roadmap input, not exhaustive keyword dump."),
        ],
        [
          s("Overlap detection prevents cannibalisation. "),
          x(
            "Two pages in the same intent cluster targeting the same SERP = cannibalisation risk. Consolidate or differentiate intent.",
            "Differentiation only works if intents are genuinely different — not just reworded titles.",
          ),
          s(" PM runs overlap report before approving any new page in existing topic territory."),
        ],
      ],
      examples: [
        {
          title: "Gap analysis — commercial cluster unlocked pipeline",
          body: "PM mapped 'identity management' topic: 4 informational pages, 0 commercial investigation pages. Competitors owned all 'best IAM solution' queries. Gap analysis scored commercial cluster at 14K monthly searches, zero coverage. Two comparison pages in Q1 captured 4,200 monthly visits and 34 demos.",
        },
        {
          title: "Overlap consolidation — 3 pages into 1",
          body: "Three informational pages targeted 'API security' variants with 80% keyword overlap and identical intent. All ranked page 2–4. PM consolidated into one definitive guide with 301 redirects. Consolidated page hit position 5 within 6 weeks. Intent cluster should have one primary URL.",
        },
        {
          title: "Same topic, two intents — correct separation",
          body: "'Kubernetes' topic spawned two clusters: 'what is Kubernetes' (informational — beginner guide) and 'Kubernetes vs Docker Swarm' (commercial investigation — comparison). PM maintained separate pages with clear cross-links. Both ranked top 10. Forced single-page approach would have failed one intent.",
        },
      ],
    }),
    buildSection({
      number: "7.8",
      title: "Multi-intent queries and blended SERPs",
      subtitle: "When a single query serves multiple goals — and how to handle SERPs that mix intent types",
      take: "Some queries carry multiple intents: 'Slack pricing' is navigational (find Slack's pricing) and transactional (evaluate purchase). Blended SERPs show mixed content types — guides alongside product pages. PMs assign a primary intent (the one matching majority SERP results) and optionally a secondary intent (addressed via on-page section, not separate page). Multi-intent pages need clear section architecture — don't blend incompatible CTAs above the fold.",
      why: "Ignoring multi-intent reality leads to binary classification errors. PMs who handle blended SERPs with section-level intent architecture capture more value than those forcing single-intent templates.",
      paragraphs: [
        [
          s("Primary intent wins the page template. "),
          x(
            "If 6/10 SERP results are product/pricing pages, primary intent is transactional even if 4 are informational.",
            "Secondary intent gets a section — FAQ, 'how it works' block — not a competing page structure.",
          ),
          s(" PM documents primary and secondary intent in brief; writers know which drives structure."),
        ],
        [
          s("Blended SERPs signal emerging intent shift. "),
          x(
            "When informational and commercial results are evenly split, the query may be transitioning — market is deciding what users want.",
            "Monitor these queries closely; first mover on the emerging dominant intent wins.",
          ),
          s(" PM flags 50/50 SERPs as 'watch list' in quarterly review."),
        ],
        [
          s("AI Overviews increase multi-intent prevalence. "),
          x(
            "AI answers may satisfy informational layer while organic links serve commercial/transactional layers.",
            "Page must be extractable for AI (informational) AND compelling for click-through (commercial).",
          ),
          s(" Multi-intent architecture is increasingly the default, not the exception."),
        ],
      ],
      examples: [
        {
          title: "Primary + secondary — pricing page with education block",
          body: "Query 'HubSpot pricing' had blended SERP: pricing pages + pricing guides. PM built pricing page (primary: transactional) with 'how HubSpot pricing works' section (secondary: informational). Page ranked #4; section captured featured snippet. Multi-intent architecture on single URL.",
        },
        {
          title: "50/50 SERP — first mover advantage",
          body: "'AI SEO tools' SERP shifted from 80% informational to 50/50 commercial/informational in 6 months. PM published comparison guide while competitors still had blog posts. Captured position 3 before SERP fully commercialised. Watch-list monitoring paid off.",
        },
        {
          title: "Multi-intent mistake — competing CTAs",
          body: "Page targeted 'project management software' with hero CTA 'Buy Now' and mid-page CTA 'Download Free Guide.' Primary intent was commercial investigation. 'Buy Now' above fold alienated researchers. PM reordered: comparison content first, soft CTA 'See pricing' at end. Engagement and demo requests both rose.",
        },
      ],
    }),
    buildSection({
      number: "7.9",
      title: "Measuring intent alignment",
      subtitle: "KPIs that prove your content satisfies the searcher's goal — beyond rankings and raw traffic",
      take: "Intent-aligned measurement matches KPIs to declared intent: informational → engagement rate, scroll depth, assisted conversions, return visits. Commercial investigation → demo requests, trial signups, comparison tool usage. Transactional → conversion rate, revenue per visit. Navigational → task completion (user found what they sought), branded CTR. PMs build an intent-aligned dashboard — every page grouped by intent with its designated KPI. Ranking position is a diagnostic metric, not the success metric for most intents.",
      why: "Reporting aggregate traffic and rankings hides intent misalignment. A page ranking #1 with 0% conversion on a transactional query is failing — but aggregate dashboards call it a win. Intent-aligned measurement surfaces real performance.",
      paragraphs: [
        [
          s("Assisted conversions connect informational to revenue. "),
          x(
            "Track users who visit informational content then convert on transactional pages within 14–30 day window.",
            "Attributes education content's role in pipeline without demanding direct conversion.",
          ),
          s(" PM reports assisted conversions in board metrics — proves top-of-funnel content value."),
        ],
        [
          s("SERP position decay triggers intent revalidation. "),
          x(
            "Ranking drop from position 4 to 15 may indicate intent shift, not content quality decline.",
            "Before rewriting content, PM checks: has SERP composition changed?",
          ),
          s(" Intent revalidation before content refresh saves wasted production cycles."),
        ],
        [
          s("Intent alignment score audits portfolio health. "),
          x(
            "Score = % of pages where primary KPI meets target AND intent label matches current SERP.",
            "Quarterly alignment score trending down = portfolio needs intent audit, not more content volume.",
          ),
          s(" PM presents alignment score alongside traffic — tells qualitatively different story."),
        ],
      ],
      examples: [
        {
          title: "Assisted conversion — proved blog ROI",
          body: "CFO questioned $200K annual content spend. PM tracked assisted conversions: 23% of enterprise deals had touchpoint with informational content in prior 30 days. Average deal size unchanged. Board approved continued investment. Metric matched informational intent to business outcome.",
        },
        {
          title: "Ranking drop — intent shift, not quality issue",
          body: "Comparison page dropped from #3 to #12 for 'best HR software.' Content quality unchanged. SERP analysis: 4 new AI Overviews, 3 vendor category pages replaced blogs. PM reclassified intent, added structured comparison data and schema. Recovered to #5 with different content structure — not word count increase.",
        },
        {
          title: "Alignment score — stopped volume chasing",
          body: "Team celebrated 40% traffic growth. Intent alignment score dropped from 78% to 61% — new pages were informational filler on commercial investigation gaps. PM froze informational production, redirected to 12 commercial gaps. Traffic dipped 5% but demos rose 28%. Alignment score recovered to 74%.",
        },
      ],
    }),
  ],
  quiz: [
    {
      q: "What is search intent?",
      options: [
        "The exact keywords a user types into a search engine.",
        "The underlying goal behind a query — what the user wants to accomplish.",
        "The number of monthly searches for a keyword.",
        "The meta description Google displays in results.",
      ],
      correct: 1,
      correctFeedback:
        "Right. Intent is the job behind the query, not the words themselves.",
      wrongFeedback:
        "Intent is the user's goal, not the keyword string. Re-read section 7.1.",
    },
    {
      q: "Which query best represents commercial investigation intent?",
      options: [
        "What is marketing automation",
        "HubSpot login",
        "Best marketing automation tools for startups",
        "Buy HubSpot Professional plan",
      ],
      correct: 2,
      correctFeedback:
        "Correct. 'Best [category] for [audience]' is classic commercial investigation — comparing before purchase.",
      wrongFeedback:
        "Commercial investigation involves comparing options. Re-read section 7.2.",
    },
    {
      q: "Your intent classification disagrees with the live SERP. What should you do?",
      options: [
        "Trust your classification — you know your audience better.",
        "Split the difference — use a hybrid format.",
        "Revise your classification to match SERP evidence — the SERP wins.",
        "Ignore SERP and focus on backlinks instead.",
      ],
      correct: 2,
      correctFeedback:
        "Right. SERP composition is the strongest intent signal — Google has already classified the query.",
      wrongFeedback:
        "When classification and SERP disagree, trust the SERP. Re-read section 7.3.",
    },
    {
      kind: "order",
      q: "Put the intent mapping workflow steps in the correct order.",
      prompt: "Drag to arrange from first step (top) to last step (bottom).",
      items: [
        "Define success metric matched to intent type.",
        "Validate intent against live SERP composition.",
        "Assign preliminary intent label to keyword cluster.",
        "Assign content format and template.",
        "Document in content registry with validation date.",
      ],
      correctFeedback:
        "Right. Classify → validate → format → metric → registry.",
      wrongFeedback:
        "Workflow order: classify, SERP validate, format, metric, registry. Re-read section 7.4.",
    },
    {
      q: "What is the appropriate primary KPI for an informational intent page?",
      options: [
        "Direct demo booking conversion rate.",
        "Engagement, scroll depth, and assisted conversions.",
        "E-commerce revenue per visit.",
        "Branded click-through rate to homepage.",
      ],
      correct: 1,
      correctFeedback:
        "Correct. Informational content succeeds on engagement and assisted conversions, not direct purchase.",
      wrongFeedback:
        "Match KPI to intent. Informational pages measure engagement and assisted conversions. Re-read section 7.9.",
    },
    {
      kind: "categorize",
      q: "Match each query to its primary intent type.",
      categories: [
        "Informational",
        "Commercial investigation",
        "Transactional",
        "Navigational",
      ],
      items: [
        { text: "How to set up two-factor authentication", category: 0 },
        { text: "Salesforce vs HubSpot for enterprise", category: 1 },
        { text: "Sign up for Notion Team plan", category: 2 },
        { text: "Figma dashboard login", category: 3 },
        { text: "What is zero trust security", category: 0 },
        { text: "Top 10 CRM tools 2025", category: 1 },
      ],
      correctFeedback:
        "Right. Modifier patterns and query structure map cleanly to the four intent types.",
      wrongFeedback:
        "Review modifier heuristics and the four intent types. Re-read sections 7.2 and 7.5.",
    },
  ],
});
