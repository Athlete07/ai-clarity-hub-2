import { buildChapter, buildSection, s, x } from "../concepts-pb4-helpers";

export const chapter05EntityBasedSeo = buildChapter({
  slug: "pb9-entity-based-seo",
  number: 5,
  shortTitle: "Entity SEO",
  title: "Entity-Based SEO",
  readingMinutes: 27,
  summary:
    "How search engines understand the world through named things — and how to make your brand, products, and content part of that knowledge graph",
  keyTakeaway:
    "Search no longer matches strings — it resolves entities. Google anchors queries to things in the Knowledge Graph: brands, people, products, places. PMs who optimise only for keywords miss the layer that powers AI answers, rich results, and brand panels. Entity-based SEO means making your organisation, authors, and product names unambiguously identifiable and richly connected — on-site, off-site, and in structured data — so search systems trust you as a source about those things.",
  pmCallout:
    "As a PM: ask whether a user searching your brand name gets a Knowledge Panel or a list of confused homonyms. If it's the latter, your entity establishment programme is behind your content programme. Entity work is slower than publishing blog posts — but it compounds into citation moats AI systems reuse for years.",
  sections: [
    buildSection({
      number: "5.1",
      title: "What is an entity in SEO",
      subtitle: "A uniquely identifiable thing — a person, place, organisation, concept, or product — that search engines can anchor knowledge to",
      take: "An entity is a distinct, identifiable thing search engines represent in a knowledge graph — not a keyword, but a named object with attributes and relationships. 'Apple' the company is an entity; 'apple' the fruit is another. 'Tim Cook' links to Apple via employment relationship. SEO entity work ensures your brand, products, and key people resolve to the correct graph nodes.",
      why: "Keyword rankings fluctuate; entity resolution is infrastructure. PMs who understand entities explain why brand SERPs, AI citations, and disambiguation matter beyond blog traffic.",
      paragraphs: [
        [
          s("Entities have identifiers, attributes, and edges. "),
          x(
            "Identifiers: name, Wikidata QID, Knowledge Graph MID. Attributes: founding date, industry, CEO. Edges: foundedBy, parentOrganisation, product.",
            "Content that consistently uses canonical entity names strengthens resolution — 'FactorBeam' not 'factor beam software solution.'",
          ),
          s(" Naming consistency across site, press, and profiles is entity hygiene."),
        ],
        [
          s("Queries map to entities before results. "),
          x(
            "Search for 'Tesla stock' resolves company entity Tesla Inc., not Nikola Tesla the person.",
            "Ambiguous queries trigger disambiguation — entity strength determines whether you win the default interpretation.",
          ),
          s(" Weak entity signals mean losing navigational and branded queries to homonyms."),
        ],
        [
          s("Entities power AI answers, not just blue links. "),
          x(
            "AI Overviews synthesise from entity-trusted sources about entity-known topics. Unresolved brands get paraphrased from third parties.",
            "Entity establishment is visibility in synthesis engines — not only traditional rank.",
          ),
          s(" PM scope includes 'who does AI think we are?' not just keyword positions."),
        ],
      ],
      examples: [
        {
          title: "Generic brand name — disambiguation failure",
          body: "PM joined 'Wave' analytics startup; branded search returned ocean articles and Spotify playlists. Entity programme: Wikidata entry, consistent Wave Analytics Inc. naming, Organisation schema, press sameAs links. Knowledge Panel in 5 months; navigational traffic +55%.",
        },
        {
          title: "Product name collision",
          body: "Security tool named 'Shield' competed with Marvel and VPN brands. PM renamed feature to 'ShieldDMARC' in docs and schema; built DefinedTerm cluster. Entity-specific queries cited product docs in AI answers within two quarters.",
        },
        {
          title: "Person entity — founder visibility",
          body: "B2B buyers searched founder name post-podcast. No entity connection to company. PM published founder profile, Person schema, sameAs to LinkedIn, linked from About and articles. Branded '[founder] + [company]' SERP owned — sales attributed 12 inbound leads.",
        },
      ],
    }),
    buildSection({
      number: "5.2",
      title: "What is the Knowledge Graph",
      subtitle: "Google's database of entities and their relationships — the structure that powers rich results, entity understanding, and AI answers",
      take: "Google's Knowledge Graph is a large semantic database of entities and relationships — people, places, organisations, works, events — sourced from licensed data, web crawling, structured data, and user signals. It powers Knowledge Panels, disambiguation, related entities in SERPs, and the entity layer beneath AI-generated answers.",
      why: "PMs who treat Google as 'ten blue links' miss the graph layer deciding which facts appear in panels and AI summaries without a click.",
      paragraphs: [
        [
          s("The graph is facts plus relationships, not pages. "),
          x(
            "Knowledge Panel shows graph-sourced facts: CEO, founded, headquarters — often without clicking your site.",
            "Your site influences the graph via structured data, consistent citations, and authoritative third-party mentions.",
          ),
          s(" PM goal: accurate graph representation, not only ranking URLs."),
        ],
        [
          s("Inclusion is earned, not submitted like a sitemap. "),
          x(
            "No 'add to Knowledge Graph' form. Signals: notability (press, Wikipedia), structured data, entity home pages, corroborating sources.",
            "PM programmes entity signals over 6–18 months — not one SEO sprint.",
          ),
          s(" Knowledge Graph presence is a brand PR + technical SEO joint initiative."),
        ],
        [
          s("Graph errors require multi-channel correction. "),
          x(
            "Wrong CEO or acquisition in Knowledge Panel: fix structured data, update Wikipedia/Wikidata, use Google feedback, publish clear press.",
            "Single on-site fix rarely sufficient — graph trusts corroboration.",
          ),
          s(" PM coordinates legal, comms, and SEO for entity corrections."),
        ],
      ],
      examples: [
        {
          title: "Knowledge Panel after funding round",
          body: "Series A press in tier-1 tech media + Wikidata creation + Organisation schema triggered Knowledge Panel for startup brand. Panel showed funding, founders, LinkedIn — zero ad spend. PM tracked branded query CTR +38% vs pre-panel baseline.",
        },
        {
          title: "Wrong acquisition fact — graph correction",
          body: "Knowledge Panel showed acquired company from rumour blog. PM filed Google feedback, updated Wikidata with sourced acquisition date, published official press release. Correction took 8 weeks — required off-site corroboration, not homepage edit alone.",
        },
        {
          title: "Local entity — graph + maps fusion",
          body: "Dental chain PM unified NAP across 40 locations, LocalBusiness schema, Google Business Profile verification. Knowledge Graph showed parent org; maps pack dominated '[brand] near me.' Entity work bridged local and brand search.",
        },
      ],
    }),
    buildSection({
      number: "5.3",
      title: "Entity recognition in content",
      subtitle: "How search engines extract entities from your text and relate them to known things in the graph",
      take: "Search engines run named entity recognition (NER) on content — identifying people, organisations, locations, products, and concepts — then link mentions to knowledge graph nodes when confidence is high. Clear, consistent entity references ('FactorBeam's API' not 'our API') and co-occurrence with known entities strengthen classification.",
      why: "Content that avoids proper nouns and speaks in generic pronouns is harder for machines to attribute. PMs set editorial standards for entity naming in product and editorial content.",
      paragraphs: [
        [
          s("Explicit naming beats ambiguous pronouns. "),
          x(
            "'It integrates with Salesforce' vs 'FactorBeam integrates with Salesforce CRM' — second links two entities explicitly.",
            "AI extractors and NER systems prefer sentences with resolvable named entities.",
          ),
          s(" Editorial style guide should require entity names in definitional paragraphs."),
        ],
        [
          s("Salience matters — how central an entity is to the page. "),
          x(
            "Page titled and structured around one primary entity ranks and cites as about that entity. Kitchen-sink posts dilute entity salience.",
            "One primary entity per URL aligns with topic cluster architecture from Chapter 2.",
          ),
          s(" PM audits top URLs for primary entity clarity."),
        ],
        [
          s("Structured data reinforces NER extractions. "),
          x(
            "Article author Person, Product name, Organisation publisher — schema confirms what NER inferred from text.",
            "Mismatch between text ('our platform') and schema (name: CompetitorX) confuses systems.",
          ),
          s(" Text + schema alignment is entity recognition best practice."),
        ],
      ],
      examples: [
        {
          title: "API docs — entity naming standard",
          body: "Docs said 'the platform' 200 times per page. PM required product name in H1, first paragraph, and schema SoftwareApplication. AI Overview citations for integration queries rose — extractors could attribute statements to product entity.",
        },
        {
          title: "Comparison pages — dual entity salience",
          body: "PM structured 'FactorBeam vs Datadog' pages with both brand names in title, headers, and comparison table schema. Page cited in AI answers for comparison queries — dual entity co-occurrence signalled relevance.",
        },
        {
          title: "Generic thought leadership — weak entity signal",
          body: "Ghostwritten posts avoided brand name for 'thought leadership tone.' NER couldn't tie expertise to company entity. PM mandated author byline + brand mention in conclusion + Organisation schema. E-E-A-T scores improved in quality rater-aligned audits.",
        },
      ],
    }),
    buildSection({
      number: "5.4",
      title: "Establishing your brand as an entity",
      subtitle: "Wikipedia, Wikidata, Google Knowledge Panel — the signals that make your organisation a recognised entity rather than an anonymous domain",
      take: "Brand entity establishment combines on-site signals (Organisation schema, about page, consistent naming), authoritative off-site mentions (press, directories, industry lists), and knowledge bases (Wikidata, sometimes Wikipedia) that corroborate notability. Knowledge Panel is the visible outcome — not the starting task.",
      why: "PMs sequence entity work: notability content first, knowledge base entries second, panel monitoring third. Skipping notability produces rejected Wikipedia drafts and empty panels.",
      paragraphs: [
        [
          s("Wikidata is often the practical first knowledge base target. "),
          x(
            "Lower notability bar than Wikipedia; provides QID for sameAs links; feeds Knowledge Graph indirectly.",
            "Requires sourced statements — press releases, Crunchbase, official filings — not marketing copy.",
          ),
          s(" PM coordinates with comms for citable third-party sources before Wikidata creation."),
        ],
        [
          s("Wikipedia requires notability and neutral tone. "),
          x(
            "Significant coverage in independent reliable sources — not press releases alone. Promotional articles get deleted.",
            "PM doesn't assign intern to write Wikipedia; engages experienced editor or waits for journalist coverage.",
          ),
          s(" Wikipedia is outcome of PR success, not SEO tactic."),
        ],
        [
          s("Consistent NAP and brand variants globally. "),
          x(
            "Legal name vs DBA vs product brand — document canonical entity name and acceptable aliases.",
            "Inconsistent 'FactorBeam' vs 'Factor Beam Inc.' vs 'FB' across profiles fractures entity merge.",
          ),
          s(" Brand style guide includes entity naming for SEO and PR."),
        ],
      ],
      examples: [
        {
          title: "Wikidata-first strategy — B2B SaaS",
          body: "PM commissioned Wikidata entry with sourced funding, HQ, and industry statements from TechCrunch and SEC filings. Added QID to Organisation sameAs. Knowledge Panel followed in 4 months without Wikipedia — pragmatic entity path for non-consumer brand.",
        },
        {
          title: "Wikipedia rejection lesson",
          body: "Marketing drafted promotional Wikipedia page; deleted in 48 hours. PM paused, invested in 3 independent journalist profiles over 6 months, engaged neutral editor. Article stuck second attempt — notability earned first.",
        },
        {
          title: "Rebrand entity merge",
          body: "Acquisition renamed product line. PM updated Wikidata acquiredBy, 301 old brand URLs, Organisation schema name change, press sameAs. Knowledge Panel merged entities within one quarter — avoided duplicate panels.",
        },
      ],
    }),
    buildSection({
      number: "5.5",
      title: "Entity co-occurrence",
      subtitle: "How appearing alongside authoritative entities in relevant contexts strengthens your own entity associations",
      take: "Entity co-occurrence is the pattern of your brand appearing near established entities in trustworthy contexts — integration docs with Salesforce, comparison pages with Gartner leaders, guest posts on industry publications, conference agendas with known speakers. Search systems infer 'FactorBeam is related to CRM integrations' from repeated co-occurrence with Salesforce entity in credible pages.",
      why: "PMs plan co-occurrence deliberately: partnership content, comparison SEO, analyst coverage, and event presence — not random keyword articles.",
      paragraphs: [
        [
          s("Choose co-occurrence entities aligned to positioning. "),
          x(
            "B2B integration vendor co-occurs with platform entities (HubSpot, Snowflake). Consumer app co-occurs with category leaders and use-case entities.",
            "Wrong co-occurrence (tangential celebrity mentions) doesn't build relevant associations.",
          ),
          s(" Partnership and comparison content are entity strategy, not only sales."),
        ],
        [
          s("Authority of the hosting page transfers association signal. "),
          x(
            "Mention on a scraped directory weakens; mention in Reuters or official partner directory strengthens.",
            "PM prioritises high-trust co-occurrence placements over volume of low-quality listings.",
          ),
          s(" One tier-1 press co-occurrence beats fifty directory spam links."),
        ],
        [
          s("On-site co-occurrence via integrations and ecosystem pages. "),
          x(
            "Official integration pages naming partner entities with logos, schema, and deep linking create owned co-occurrence.",
            "PM requires partner name in title and H1 — not buried in footer badges.",
          ),
          s(" Integration hub is owned entity association asset."),
        ],
      ],
      examples: [
        {
          title: "Integration marketplace listings",
          body: "PM launched 20 official integration pages: '[Product] + [Partner] integration' with Partner logo, docs, schema. Ranked for long-tail integration queries; AI answers associated product with partner ecosystem within 6 months.",
        },
        {
          title: "Analyst report co-occurrence",
          body: "Appearance in Gartner MQ graphic placed brand entity adjacent to market leaders. Branded + category AI Overview answers began citing report mention — entity authority by association. PM invested in analyst relations as SEO-adjacent programme.",
        },
        {
          title: "Comparison content ethics",
          body: "PM published honest 'us vs leader' pages with factual feature tables — no fake reviews. Co-occurrence with category leader entity captured commercial investigation queries and AI comparison citations without misleading claims.",
        },
      ],
    }),
    buildSection({
      number: "5.6",
      title: "Author entities and E-E-A-T",
      subtitle: "How Google's Experience, Expertise, Authoritativeness, and Trust signals connect to the humans and organisations behind the content",
      take: "E-E-A-T (Experience, Expertise, Authoritativeness, Trustworthiness) evaluates whether content comes from credible sources on topics where accuracy matters (YMYL: health, finance, legal). Author entities — real people with verifiable credentials, author pages, and publication history — connect content to accountable humans. Organisation entity backs the publisher.",
      why: "AI-generated commodity content flooded SERPs; entity-backed authorship is differentiation PMs can operationalise — not a vague quality slogan.",
      paragraphs: [
        [
          s("Experience is demonstrated, not claimed. "),
          x(
            "First-hand screenshots, original data, case studies with named customers (with permission), practitioner bylines.",
            "'10 best tools' listicles without experience signals lose to entity-verified experts.",
          ),
          s(" PM requires experience proof points in content briefs for YMYL topics."),
        ],
        [
          s("Author pages are entity home pages. "),
          x(
            "Bio, credentials, sameAs to LinkedIn, list of articles, Person schema. Consistent author URL across site.",
            "Ghost authors and rotating 'Team' bylines weaken entity trust.",
          ),
          s(" Named authors with archive pages are non-negotiable for thought leadership."),
        ],
        [
          s("Organisation reputation backs all content. "),
          x(
            "Publisher entity trust flows to articles. Controversy, security breaches, or deceptive practices harm entire domain entity — not single pages.",
            "PM aligns product marketing claims with editorial trust — overpromising erodes entity authority.",
          ),
          s(" E-E-A-T is domain-level and author-level — both need investment."),
        ],
      ],
      examples: [
        {
          title: "Healthcare content — clinician bylines",
          body: "Med content startup required MD-reviewed bylines with credentials schema. YMYL rankings improved vs generic AI health content. PM metric: % articles with verified author entity — target 100% on medical library.",
        },
        {
          title: "Fintech — author entity after algorithm update",
          body: "Traffic dropped on unsigned blog posts post core update. PM retrofitted author pages for 6 SMEs, added Person schema, linked from articles. Recovery on expertise-heavy queries in 2 quarters — author entity was differentiator.",
        },
        {
          title: "Guest expert programme",
          body: "PM invited 12 industry practitioners for co-authored guides — their LinkedIn entities co-occurred with brand. Reach + E-E-A-T dual win; authors shared content, earning links and entity associations.",
        },
      ],
    }),
    buildSection({
      number: "5.7",
      title: "Product and content entities",
      subtitle: "How your product names, feature names, and proprietary terms can be established as recognised entities — and why it matters for AI-generated answers",
      take: "Product names, feature brands, and coined category terms can become entities when search volume, structured data, press, and consistent usage create graph resolution. 'Salesforce CRM' is an entity; your feature name can be too — if you treat it as a definitional asset with glossary pages, schema, and external mentions.",
      why: "PMs naming features should ask: will AI know what this term means and attribute it to us? Coined terms need entity establishment work, not just launch blog posts.",
      paragraphs: [
        [
          s("Coined terms need definitional content. "),
          x(
            "Glossary page: what it is, who created it, how it relates to category entities. DefinedTerm schema optional experiment.",
            "First-mover defines term in AI training and retrieval corpora — latecomers cite the definer.",
          ),
          s(" PM ships glossary with every major feature brand launch."),
        ],
        [
          s("Product entity distinct from company entity. "),
          x(
            "SoftwareApplication or Product schema for flagship product; Organisation for company. AI answers 'What is [Product]?' pull product entity facts.",
            "Single-product startups often merge; multi-product needs separate product entity pages.",
          ),
          s(" Product marketing and entity architecture align at naming."),
        ],
        [
          s("Avoid generic feature names without qualifiers. "),
          x(
            "'Dashboard,' 'Insights,' 'Copilot' — non-entities competing with giants. 'FactorBeam Insights' is resolvable.",
            "PM naming review includes SEO entity collision check.",
          ),
          s(" Distinctive product vocabulary is entity strategy."),
        ],
      ],
      examples: [
        {
          title: "Category creation — 'RevOps intelligence'",
          body: "PM coined category term, published definitional pillar, spoke at 3 conferences using exact phrase, Wikidata industry tag. Within a year, AI answers for term cited company content as definitional source — entity establishment for proprietary category.",
        },
        {
          title: "Feature rename for entity clarity",
          body: "Feature 'Assist' renamed to 'DataAssist' after collision with Microsoft Copilot family in AI answers. Traffic on branded feature queries consolidated to owned entity within one quarter.",
        },
        {
          title: "Open-source project entity",
          body: "Dev tool PM maintained GitHub, docs site, and SoftwareApplication schema for OSS project separate from commercial product. Community searches resolved to correct entity; commercial upsell path preserved via clear organisation link.",
        },
      ],
    }),
    buildSection({
      number: "5.8",
      title: "Entity-based content strategy",
      subtitle: "Writing content that explicitly addresses entity attributes, relationships, and context — not just ranking for keyword variations",
      take: "Entity-based content strategy plans coverage around entities and their attributes — not keyword lists. For a company entity: leadership, products, integrations, customers, locations. For a product entity: features, pricing model, competitors, use cases. Content answers 'what is true about this entity?' in machine-extractable form.",
      why: "Keyword-first content produces thin variations; entity-first content builds the knowledge corpus AI and search reuse — aligned with semantic SEO from Chapter 1.",
      paragraphs: [
        [
          s("Entity attribute matrix drives content gaps. "),
          x(
            "Rows: entities (brand, product A, product B). Columns: attributes (pricing, security, integrations, support). Empty cells = content to create.",
            "PM uses matrix in quarterly planning — replaces keyword-only content calendars.",
          ),
          s(" Attribute gaps are semantic gaps visible to AI systems."),
        ],
        [
          s("Relationship content links entities explicitly. "),
          x(
            "'FactorBeam integrates with Snowflake' is a relationship edge. Integration guides, case studies, and partner pages document edges search graphs ingest.",
            "Internal linking between entity home pages (product, integration, industry) reinforces graph on-site.",
          ),
          s(" Relationship pages are entity SEO primitives."),
        ],
        [
          s("Refresh entity facts when reality changes. "),
          x(
            "New CEO, pricing change, acquisition — entity content and schema stale faster than evergreen blogs.",
            "PM ties product launch calendar to entity content updates — same as changelog discipline.",
          ),
          s(" Stale entity facts erode AI citation trust faster than stale tutorials."),
        ],
      ],
      examples: [
        {
          title: "Entity content matrix — enterprise SaaS",
          body: "PM audited 6 product entities × 12 attributes; found security and compliance empty for 4 products. Shipped trust centre + per-product security pages. AI and organic citations on '[product] SOC 2' queries within 90 days.",
        },
        {
          title: "Customer entity co-occurrence",
          body: "Case studies named customer entities (with logo permission) — Fortune 500 co-occurrence on owned site. Commercial investigation AI answers referenced customer proof — entity association beyond testimonial quote.",
        },
        {
          title: "Post-acquisition entity merge content",
          body: "Acquired startup brand retained as product entity page with acquiredBy relationship to parent Organisation schema. Search confusion dropped; both brand queries routed to correct product entity — content expressed M&A graph.",
        },
      ],
    }),
    buildSection({
      number: "5.9",
      title: "PM decision lens: entity establishment as a long-term brand asset",
      subtitle: "Why investing in Knowledge Graph presence is a compounding moat that protects brand visibility in both search and AI answers",
      take: "Entity establishment is a 12–24 month brand asset: Wikidata, Knowledge Panel, author entities, product glossary, integration co-occurrence, and consistent schema. It compounds — each citation and panel impression reinforces default resolution. PMs budget entity work alongside content production, with KPIs: panel presence, branded AI citation rate, disambiguation success.",
      why: "Short-term keyword campaigns decay; entity presence persists across algorithm and interface changes — the strategic case for PM investment.",
      paragraphs: [
        [
          s("Sequence entity milestones like product launches. "),
          x(
            "M1: naming guide + Organisation schema. M6: Wikidata + author programme. M12: integration hub + product entities. M18: panel optimisation + AI citation tracking.",
            "Phased roadmap prevents one overwhelmed 'entity sprint.'",
          ),
          s(" Entity roadmap is multi-quarter — plan resourcing accordingly."),
        ],
        [
          s("Cross-functional ownership is mandatory. "),
          x(
            "PR owns notability sources. Legal approves Wikipedia/Wikidata statements. Product owns feature naming. SEO/dev owns schema. PM coordinates — no single team owns entity.",
            "Entity programmes fail when SEO owns everything alone — notability and naming require cross-functional input.",
          ),
          s(" PM is entity programme DRI, not sole executor."),
        ],
        [
          s("Measure entity health, not only traffic. "),
          x(
            "KPIs: Knowledge Panel accuracy, branded query entity resolution rate, AI answer citation share, Wikidata statement count with sources.",
            "Traffic lags entity work by quarters — leading indicators prevent premature programme cuts.",
          ),
          s(" Entity KPIs belong in brand and SEO dashboards."),
        ],
      ],
      examples: [
        {
          title: "18-month entity programme ROI",
          body: "PM tracked entity KPIs quarterly; Knowledge Panel at M8, AI branded citations 40% of surveyed queries at M14. Organic branded traffic +62% — partially attributed to zero-click panel trust. Board renewed entity budget as brand moat, not cost centre.",
        },
        {
          title: "Entity programme cut — regression case",
          body: "New CMO killed Wikidata and author work as 'slow SEO.' Six months later competitor won AI comparison citations; branded confusion resurfaced after homonym startup launch. PM relaunched entity programme with regression data — executive buyback at 2× original budget.",
        },
        {
          title: "Global entity localisation",
          body: "EU subsidiary used translated brand alias without entity mapping. PM created language-specific about pages, hreflang, consistent legal entity links in Wikidata. Regional Knowledge Panels appeared — entity work extended to international GTM.",
        },
      ],
    }),
  ],
  quiz: [
    {
      q: "What is an entity in the context of SEO?",
      options: [
        "Any keyword with high search volume.",
        "A uniquely identifiable thing — person, organisation, product, or place — that search engines represent in a knowledge graph.",
        "A backlink from a high-domain-authority site.",
        "A JSON-LD script tag on a homepage.",
      ],
      correct: 1,
      correctFeedback:
        "Right. Entities are named things with attributes and relationships — not keywords or markup alone.",
      wrongFeedback:
        "Entities are identifiable things in knowledge graphs. Re-read section 5.1.",
    },
    {
      q: "What primarily powers Google Knowledge Panels?",
      options: [
        "Paid Google Ads campaigns.",
        "The Knowledge Graph — a database of entities and relationships from corroborated sources.",
        "Meta keyword tags.",
        "High keyword density on the homepage.",
      ],
      correct: 1,
      correctFeedback:
        "Exactly. Knowledge Panels surface Knowledge Graph facts — earned through notability and corroboration.",
      wrongFeedback:
        "Panels come from the Knowledge Graph, not ads or meta keywords. Re-read section 5.2.",
    },
    {
      q: "Why is entity co-occurrence strategically valuable?",
      options: [
        "It increases keyword density on a page.",
        "Appearing alongside authoritative entities in credible contexts strengthens your brand's associated relationships in search systems.",
        "It replaces the need for structured data.",
        "It only affects image search rankings.",
      ],
      correct: 1,
      correctFeedback:
        "Right. Co-occurrence with trusted entities builds relevant associations — integrations, comparisons, press.",
      wrongFeedback:
        "Co-occurrence builds entity relationships, not keyword stuffing benefits. Re-read section 5.5.",
    },
    {
      kind: "categorize",
      q: "Match each entity establishment tactic to its primary purpose.",
      categories: ["Brand identity", "Author trust", "Product definition", "Relationship signal"],
      items: [
        { text: "Organisation schema with sameAs to Wikidata.", category: 0 },
        { text: "Person schema on author profile pages.", category: 1 },
        { text: "Glossary page for coined feature name.", category: 2 },
        { text: "Official Salesforce integration landing page.", category: 3 },
        { text: "MD credentials on health articles.", category: 1 },
        { text: "SoftwareApplication schema on product page.", category: 2 },
      ],
      correctFeedback:
        "Correct. Organisation for brand, Person for authors, glossary/schema for products, integrations for relationships.",
      wrongFeedback:
        "Map tactics to brand, author, product, or relationship purposes. Re-read sections 5.4–5.8.",
    },
    {
      q: "What is the recommended approach to Wikipedia for brand entity establishment?",
      options: [
        "Marketing should publish a promotional article immediately after launch.",
        "Pursue Wikipedia only after independent reliable-source notability exists; it is an outcome of PR, not an SEO shortcut.",
        "Wikipedia is required before any Knowledge Panel can appear.",
        "Wikipedia replaces the need for on-site content.",
      ],
      correct: 1,
      correctFeedback:
        "Right. Wikipedia requires notability and neutral coverage — often preceded by Wikidata and press.",
      wrongFeedback:
        "Wikipedia follows notability; Wikidata is often the first step. Re-read section 5.4.",
    },
    {
      kind: "order",
      q: "Put the entity establishment programme in a sensible priority order for a growing B2B SaaS brand.",
      prompt: "Drag to arrange from first step (top) to last (bottom).",
      items: [
        "Publish naming guide and Organisation schema on site.",
        "Create Wikidata entry with sourced company facts.",
        "Build author entity pages with Person schema.",
        "Launch integration and product entity content hubs.",
        "Monitor Knowledge Panel and AI branded citation share.",
      ],
      correctFeedback:
        "Exactly. On-site foundation → knowledge base → authors → product/relationship content → measurement.",
      wrongFeedback:
        "Start with on-site identity and schema, build outward to knowledge bases and content hubs. Re-read section 5.9.",
    },
  ],
});
