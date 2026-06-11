import type { ConceptBodyBlock } from "../concepts";
import { buildChapter, buildSection, s, x, sectionWithDiagram } from "../concepts-pb4-helpers";

function insertDiagram(
  blocks: ConceptBodyBlock[],
  diagram: Extract<ConceptBodyBlock, { kind: "diagram" }>,
): ConceptBodyBlock[] {
  const exIdx = blocks.findIndex((b) => b.kind === "ex");
  const idx = exIdx === -1 ? blocks.length : exIdx;
  return [...blocks.slice(0, idx), diagram, ...blocks.slice(idx)];
}

const section16 = insertDiagram(
  buildSection({
    number: "1.6",
    title: "The feedback loop business model",
    subtitle: "Why more usage making the product smarter is the only AI business model that compounds",
    take: "AI-native companies do not sell static software — they sell a system that improves with every user action. If usage does not generate training signal that ships back into the product, you have a SaaS business with an API bill, not an AI business that compounds.",
    why: "Investors price compounding. A product that gets marginally better each quarter without proportional engineering spend is a different asset class than a feature team shipping prompt updates. Your business model must explain how usage becomes intelligence.",
    paragraphs: [
      [
        s("Traditional SaaS sells capability that is fixed at ship date. "),
        x(
          "Every new customer gets the same product. Engineering effort scales linearly with feature requests.",
          "AI-native businesses sell improvement velocity — the rate at which the product learns from aggregate usage.",
        ),
        s(" The economic engine is not seats times price; it is usage times signal times model delta."),
      ],
      [
        s("The feedback loop business model has four connected stages: predict, user reacts, reaction becomes label, model updates, product improves. "),
        x(
          "Break any link and you have a static tool wearing an AI costume.",
          "Compounding requires closed-loop architecture — not quarterly manual exports and a data science side project.",
        ),
        s(" Founders must be able to name the user action that closes the loop today, not on the roadmap."),
      ],
      [
        s("Boards and investors distinguish loop diagrams from loop metrics. "),
        x(
          "Report signal volume, label throughput, time from interaction to model update, and measurable quality delta after retrain.",
          "A flywheel slide without numbers is marketing. A flywheel with weekly improvement metrics is a valuation story.",
        ),
        s(" If your unit economics do not improve as usage grows, you do not have a feedback loop business — you have inference cost scaling with revenue."),
      ],
    ],
    examples: [
      {
        title: "Google Search — clicks as currency",
        body: "Every search and click trains ranking. Google does not sell search as static software — it sells a system that improves with usage. Founders should identify their equivalent click signal before claiming AI-native status.",
      },
      {
        title: "Duolingo — learning loop as product core",
        body: "Birdbrain adapts lesson difficulty from millions of learner interactions daily. Remove the ML loop and Duolingo becomes flashcards. The business model is improvement velocity, not content library access.",
      },
      {
        title: "Fake loop — quarterly CSV retrain",
        body: "A Series A candidate showed a flywheel slide but admitted retraining happened manually every quarter from exported spreadsheets. Lead investor passed: no compounding, no premium multiple. Architecture must close the loop before the deck claims it.",
      },
    ],
  }),
  {
    kind: "diagram",
    id: "ch1-feedback-loop",
    type: "flow",
    title: "The Feedback Loop Business Model",
    caption:
      "Usage generates signal, signal improves the model, a better model drives retention — the only AI business model that compounds without linear engineering headcount.",
  },
);

export const chapter01WhatAiNativeMeans = buildChapter({
  slug: "founder-what-ai-native-means",
  number: 1,
  shortTitle: "What AI-Native Means",
  title: "What AI-Native Actually Means",
  readingMinutes: 24,
  summary:
    "The honest definition of AI-native — and the architectural, data, and org tests your company probably fails. Where you sit on the spectrum determines valuation, hiring, and whether you are building a moat or renting a feature.",
  keyTakeaway:
    "AI-native means the model is in your core loop, your data architecture, and your improvement mechanism — not just your marketing. Three tiers, three tests, six audit questions before investors ask.",
  pmCallout:
    "As a founder: before you put 'AI-native' on the website, run the three tests on your actual architecture. Investors will — and the gap between your label and your loop is where down rounds begin.",
  sections: [
    sectionWithDiagram({
      number: "1.1",
      title: "AI-native vs AI-powered vs AI-washed",
      subtitle: "Three tiers with completely different valuations, defensibility, and hiring implications",
      take: "AI-native: remove the model and the company does not exist. AI-powered: AI materially improves a product that survives without it. AI-washed: marketing claims without architectural commitment. Each tier commands different multiples, hiring plans, and diligence outcomes.",
      why: "Misplacing yourself on this spectrum is how seed rounds become bridge rounds. 'AI-native' earns premium multiples only when the model, data flywheel, and unit economics are real — not when ChatGPT powers a settings page.",
      paragraphs: [
        [
          s("AI-native companies have inference at the centre of value creation. "),
          x(
            "Remove the model and there is no product — Harvey without legal synthesis, Midjourney without generation, Scale AI without labelling infrastructure.",
            "These companies budget inference as COGS, data as moat, and model quality as core roadmap — not a feature squad.",
          ),
          s(" They raise on AI multiples because the business cannot be described without AI."),
        ],
        [
          s("AI-powered companies use AI to improve a product with independent value. "),
          x(
            "Notion, Salesforce, HubSpot — AI features matter, but the CRM, docs, or workflow exists without them.",
            "The strategic question is margin: does AI improve retention enough to justify inference cost? Often yes — but it is feature ROI, not a category bet.",
          ),
          s(" Honest placement protects you from pressure to misallocate capital chasing a native narrative you do not earn."),
        ],
        [
          s("AI-washed is rules, integrations, or thin prompts marketed as intelligence. "),
          x(
            "The tell: no training data story, no evaluation metrics, no retraining plan, no proprietary signal — just an API key and a landing page.",
            "Diligence kills these in one call. Customers churn when the wrapper adds latency without value.",
          ),
          s(" Self-assess tier before investors do it publicly."),
        ],
      ],
      examples: [
        {
          title: "Harvey — native with vertical workflow",
          body: "Harvey's core value is model output inside legal workflow with firm-specific retrieval. Remove inference and the product vanishes. Founders in vertical AI should study this: native tier requires the model to be the engine, not the sidebar.",
        },
        {
          title: "Intercom Fin — powered with clarity",
          body: "Fin improves support resolution on Intercom's existing platform. Intercom articulates exactly what breaks if you remove Fin: faster resolution, not product existence. Founders should envy this tier clarity in their own pitch.",
        },
        {
          title: "The Zapier startup — washed in diligence",
          body: "A seed deck claimed 'proprietary AI orchestration'. Diligence found Zapier triggers plus OpenAI API plus Notion export. Accurate tier: AI-washed automation. The round repriced. Self-assessment before the meeting keeps narrative control.",
        },
      ],
    }, {
      kind: "diagram",
      id: "founder-ai-native-spectrum",
      type: "nested",
      title: "AI-Native vs AI-Powered vs AI-Washed",
      caption:
        "Three tiers with different valuations, defensibility, and hiring plans. Honest placement determines your fundraising narrative.",
    }),
    buildSection({
      number: "1.2",
      title: "The three tests for genuine AI-nativity",
      subtitle: "Is AI in your core loop, your data architecture, and your improvement mechanism — or just your marketing?",
      take: "Genuine AI-nativity passes three tests: the core loop test (inference is essential to the primary user workflow), the data architecture test (product generates proprietary labelled signal), and the improvement mechanism test (signal flows back to model updates on a defined cadence). Fail any one and you are powered or washed, regardless of branding.",
      why: "Investors and acquirers run these tests even when founders do not. Marketing can claim native; architecture reveals the truth in one engineering walkthrough.",
      paragraphs: [
        [
          s("The core loop test asks: if you disable inference tomorrow, does the primary workflow break? "),
          x(
            "AI-native: yes — the user's job cannot be done. AI-powered: the workflow continues, degraded. AI-washed: nothing meaningful changes.",
            "Founders confuse 'AI in the product' with 'AI in the loop'. A chatbot on a settings page fails the core loop test.",
          ),
          s(" Map your top user journey and mark where inference is load-bearing."),
        ],
        [
          s("The data architecture test asks: does every meaningful user action generate proprietary training signal? "),
          x(
            "Native companies instrument for labels at launch — accepts, edits, outcomes, corrections attached to specific inferences.",
            "Logging prompts without capturing outcomes creates storage cost, not a moat.",
          ),
          s(" If your data architecture was designed after PMF, you are retrofitting nativity — expensive and often too late."),
        ],
        [
          s("The improvement mechanism test asks: how does signal become a better product, on what schedule, with what measurable delta? "),
          x(
            "A roadmap item called 'retrain quarterly' fails. A pipeline with weekly eval gates and automated promotion passes.",
            "Improvement mechanism is operational infrastructure — not a data science aspiration.",
          ),
          s(" Document the path from user action to shipped model improvement before claiming native tier."),
        ],
      ],
      examples: [
        {
          title: "GitHub Copilot — passes all three",
          body: "Core loop: code completion is the product. Data: Tab acceptance and ignore signals at billions of events. Improvement: continuous model updates from usage. Founders building dev tools should benchmark against this bar.",
        },
        {
          title: "Legal AI with no edit logging — fails test two",
          body: "A contract tool called itself AI-native but logged drafts without lawyer edit diffs. No proprietary labels compounded. Series A diligence reframed as AI-powered assist. The data architecture test failed despite strong demos.",
        },
        {
          title: "Support bot with static prompts — fails test three",
          body: "A startup captured thumbs up/down but never piped ratings into retraining — manual prompt edits only. Improvement mechanism was founder intuition, not system. Investors classified as powered with high ops risk.",
        },
      ],
    }),
    buildSection({
      number: "1.3",
      title: "What AI-native looks like in product architecture",
      subtitle: "When AI is the engine, not the spoiler",
      take: "In AI-native product architecture, inference sits on the critical path of the primary user outcome — not as an optional panel, bolt-on chatbot, or demo feature. The UI, data model, and error handling are designed around model behaviour, uncertainty, and human review — not retrofitted onto CRUD.",
      why: "Architecture reveals tier faster than marketing. A diligence walkthrough that shows AI as layer seven on a legacy stack tells investors you are powered at best — regardless of what the homepage says.",
      paragraphs: [
        [
          s("AI-native products treat the model as a first-class citizen in the system design. "),
          x(
            "Request routing, context assembly, retrieval, inference, post-processing, and human escalation are core services — not scripts glued to a database.",
            "Powered products add an AI endpoint to existing workflows. Native products rebuild the workflow around what the model can and cannot do reliably.",
          ),
          s(" The schema, permissions, and audit trail reflect AI outputs as primary artefacts — not logs buried in analytics."),
        ],
        [
          s("Error handling and uncertainty are product features, not engineering debt. "),
          x(
            "Native architecture surfaces confidence, citations, fallback paths, and human review queues in the UX — because model failure is expected, not exceptional.",
            "Bolt-on AI hides failures behind generic errors. Native AI designs for failure modes users and regulators will encounter.",
          ),
          s(" Founders who skip this ship demos that break in enterprise pilots."),
        ],
        [
          s("The architectural tell in diligence: can you remove the AI layer without rewriting the product? "),
          x(
            "If removal leaves a hollow shell, architecture supports native. If removal leaves a complete product with one fewer button, you are powered.",
            "Investors ask engineers this directly. Founders should ask it first.",
          ),
          s(" Design the critical path around inference before you design the landing page."),
        ],
      ],
      examples: [
        {
          title: "Midjourney — inference is the product surface",
          body: "There is no Midjourney without image generation. The entire UX — prompts, variations, upscales — exists to steer inference. Founders building generative products should treat the model output as the primary artefact, not an export.",
        },
        {
          title: "Stripe Radar — hybrid architecture done honestly",
          body: "Radar combines merchant rules with ML scores, exposing both in dashboard. Stripe does not claim pure AI-native — they architect transparency into a hybrid fraud stack. Founders in trust-critical domains should study layered honesty.",
        },
        {
          title: "CRM with chatbot sidebar — powered pattern",
          body: "A B2B SaaS added GPT summarisation to account notes — useful, but the CRM functions fully without it. Architecture placed AI off the critical path. Honest tier: powered. Founders should not pitch this as native without restructuring the workflow.",
        },
      ],
    }),
    buildSection({
      number: "1.4",
      title: "What AI-native looks like in data architecture",
      subtitle: "Why your database decisions in month one determine your AI ceiling in year three",
      take: "AI-native data architecture captures inference inputs, outputs, user reactions, and downstream outcomes as linked, queryable records from day one — with consent, retention policy, and labelling schema designed for training, not just analytics. Month-one schema choices become year-three moat or year-three liability.",
      why: "Retrofitting feedback capture onto a product built for CRUD is a multi-quarter rewrite. Investors ask data architects in diligence whether the schema supports flywheels — founders who waited until Series A discover the answer is no.",
      paragraphs: [
        [
          s("Native data architecture links every inference to its context and its outcome. "),
          x(
            "Not just 'user asked X' — but document version, retrieval sources, model version, output, user edit, and business outcome in one traceable chain.",
            "CRUD schemas store entities. AI-native schemas store episodes — complete interaction records suitable for training.",
          ),
          s(" If you cannot reconstruct a training example from your database, you do not have AI-native data architecture."),
        ],
        [
          s("Consent and rights must be architectural, not legal afterthought. "),
          x(
            "Terms of service clicked at signup do not create a training pipeline. Explicit opt-in, deletion paths, and regional retention rules belong in the data model.",
            "Series B diligence on data provenance kills companies that treated user content as free training fuel.",
          ),
          s(" Design deletion and export as first-class operations — regulators and enterprise buyers will require them."),
        ],
        [
          s("The founder decision in month one: what signal do we need in year three, and does today's schema capture it? "),
          x(
            "Most founders optimize for shipping features. AI-native founders optimize for compounding signal — often logging fields that feel unnecessary at 100 users.",
            "The cost of missing fields is not storage — it is irreversible history you cannot backfill with labels.",
          ),
          s(" Write the data schema for the flywheel you want, not the MVP you have."),
        ],
      ],
      examples: [
        {
          title: "Gmail Smart Reply — episode storage at scale",
          body: "Google stores email context, suggested replies, and acceptance/rejection as linked training episodes. The schema was designed for learning, not just delivery. Founders should ask: does our schema support episode reconstruction?",
        },
        {
          title: "Healthcare startup — PII in training pipeline",
          body: "A diagnostic tool logged images with patient identifiers in the same table as model outputs. Series B diligence flagged GDPR and HIPAA exposure. Data architecture created liability that product success could not offset. Separate PII from training stores from day one.",
        },
        {
          title: "Legal AI — edit diff as first-class field",
          body: "Harvey-class tools store lawyer edits as structured diffs against model drafts — not just final documents. That architectural choice creates proprietary labels competitors cannot scrape. Founders in professional tools should instrument diffs, not just outputs.",
        },
      ],
    }),
    buildSection({
      number: "1.5",
      title: "What AI-native looks like in org design",
      subtitle: "How team structure differs when AI is the product vs when AI is a feature",
      take: "When AI is the product, inference quality, data pipelines, and evaluation are owned by core product teams — not a sidecar 'AI squad' serving tickets from a backlog. When AI is a feature, embedded engineers with clear ROI metrics beat a central lab that ships demos nobody ships.",
      why: "Org design exposes tier. A five-person 'AI innovation team' disconnected from revenue metrics signals powered or washed — regardless of how many PhDs are on the org chart.",
      paragraphs: [
        [
          s("AI-native orgs place model quality on the same OKR tree as revenue and retention. "),
          x(
            "The person accountable for task completion rate sits in the room when roadmap priorities are set.",
            "Ivory-tower AI teams optimize benchmarks; product-embedded teams optimize user outcomes.",
          ),
          s(" If AI metrics are not in company-level goals, AI is a feature — org design confirms it."),
        ],
        [
          s("AI-powered orgs embed AI engineers in product squads with explicit feature ROI. "),
          x(
            "Central AI teams at seed stage create bottlenecks. Embedded engineers with eval harnesses and inference budgets ship faster.",
            "Native orgs at scale may recentralize platform MLOps — but product loops stay embedded.",
          ),
          s(" Match structure to tier: native needs platform plus embedded loops; powered needs embedded with ROI gates."),
        ],
        [
          s("Hiring sequence differs by tier. "),
          x(
            "Native: data pipeline and eval before second ML hire. Powered: AI engineer who ships RAG before researcher. Washed: stop hiring ML until architecture passes the three tests.",
            "Wrong hire order burns 12 months — a generalist AI lead at seed, not a research scientist.",
          ),
          s(" Draw the org chart for 18 months out and mark which roles own the feedback loop."),
        ],
      ],
      examples: [
        {
          title: "OpenAI — research as the product",
          body: "OpenAI's org is structurally AI-native: model capability is the product, and most functions serve improvement velocity. Application-layer founders cannot copy this — but they should copy the principle: core metrics drive org design.",
        },
        {
          title: "Salesforce Einstein — embedded in product lines",
          body: "Einstein teams sit inside cloud product orgs with CRM revenue accountability — not a standalone lab. Powered tier done at scale: AI improves existing products with clear ROI owners. Founders at Series A should embed, not isolate.",
        },
        {
          title: "Ivory tower pass — impressive demos, zero adoption",
          body: "A Series A company staffed a central AI team that shipped internal benchmarks while product squads ignored outputs. CEO dissolved the team and embedded two engineers per squad with task-completion OKRs. Adoption moved in one quarter. Org design fixed what branding could not.",
        },
      ],
    }),
    section16,
    buildSection({
      number: "1.7",
      title: "Honest examples",
      subtitle: "An unsparing look at companies that live up to the label vs those that don't",
      take: "Genuinely AI-native companies fail the 'remove inference' test, show measurable loop velocity, and cannot be described without AI. Many well-funded companies marketed as AI-native are AI-powered or repositioning after margin compression. Honesty about peers calibrates your own tier.",
      why: "Founders benchmark against logos on conference slides, not architecture. Understanding who actually passes the three tests prevents you from pitching a Jasper trajectory while claiming a Harvey moat.",
      paragraphs: [
        [
          s("Clear AI-native examples share structural traits: inference on the critical path, proprietary signal, and published or inferable improvement cadence. "),
          x(
            "Midjourney, Scale AI, Harvey, Waymo — remove the model and the business disappears.",
            "They also face real constraints: inference COGS, regulatory opacity, and platform dependency risks.",
          ),
          s(" Native tier is not a compliment — it is a capital intensity commitment."),
        ],
        [
          s("AI-powered winners are often more durable than native wrappers without moats. "),
          x(
            "Notion, Shopify, Intuit — AI improves retention on products with independent value and distribution.",
            "Jasper rode native hype then faced margin compression when ChatGPT shipped writing natively — wedge without workflow lock-in erodes.",
          ),
          s(" Powered with distribution beats native without signal."),
        ],
        [
          s("AI-washed is everywhere in pitch decks — and diligence exposes it quickly. "),
          x(
            "Thin API wrappers, regex sold as ML, and 'orchestration platforms' that are Zapier with a logo.",
            "The cost of washing is not just valuation — it is hiring ML talent who leave when the mission is theatre.",
          ),
          s(" Use peer honesty to stress-test your own label before the market does."),
        ],
      ],
      examples: [
        {
          title: "Scale AI — native infrastructure, not app wrapper",
          body: "Scale sells the data pipeline others need to train — labelling ops and enterprise contracts, not a GPT wrapper. Native tier with a different shape: infrastructure instead of application. Founders whose product is data should claim this honestly.",
        },
        {
          title: "Jasper — native hype to powered pivot",
          body: "Jasper marketed AI-native marketing at peak GPT excitement, then faced compression when writing became a commodity feature. Lesson: native without workflow lock-in and proprietary signal is a feature on someone else's platform. Jasper pivoted toward brand workflow — honest tier migration.",
        },
        {
          title: "Character.ai — native with engagement loop",
          body: "Conversation is the product; model personality is the value. User messages generate behavioural signal for improvement. Passes core loop test. Founders in consumer AI should study engagement-native loops, not just enterprise RAG.",
        },
      ],
    }),
    buildSection({
      number: "1.8",
      title: "Founder decision lens",
      subtitle: "Six questions that tell you where you actually stand before your investors ask",
      take: "Run the AI-native audit: (1) Does disabling inference break the primary workflow? (2) What proprietary label does each user action generate? (3) What is time from signal to shipped model improvement? (4) What percentage of COGS is inference? (5) Does your org own AI quality metrics? (6) If OpenAI ships your feature natively, what remains? Honest answers determine tier, hiring, and fundraise narrative.",
      why: "This audit belongs in your internal strategy doc before the pitch deck — not after diligence exposes gaps. Six questions take an hour; fixing architecture takes quarters.",
      paragraphs: [
        [
          s("Questions one through three test architecture: core loop, data, improvement mechanism. "),
          x(
            "If any answer is vague, you are not native yet — decide whether to invest to get there or honestly claim powered.",
            "Vague answers in investor meetings become credibility losses; vague answers internally become wrong hires.",
          ),
          s(" Write one-sentence answers and share with your lead engineer — disagreement here is signal."),
        ],
        [
          s("Questions four and five test economics and org alignment. "),
          x(
            "Native companies model inference in unit economics from day one — not 'we'll figure out margins at scale'.",
            "If no executive owns task completion rate or human override rate, AI is not in the operating system.",
          ),
          s(" Board decks should show AI quality metrics alongside MRR — or stop claiming native tier."),
        ],
        [
          s("Question six is the wrapper stress test. "),
          x(
            "If the honest answer is 'our UI and customer list', you need a moat plan — data, workflow depth, or vertical trust.",
            "If the answer is 'nothing', you are building a demo feature, not a company.",
          ),
          s(" Revisit the audit quarterly — tier is not static as models and markets shift."),
        ],
      ],
      examples: [
        {
          title: "HR tech founder — audit-driven reframe",
          body: "Founder pitched AI-native screening. Audit revealed: GPT API, no edit labels, no retrain pipeline. Reframed as AI-powered ranking assist with human final decision. Hired customer success instead of second ML engineer. Series A story improved because honesty reduced diligence risk.",
        },
        {
          title: "Fintech fraud — audit confirmed native",
          body: "Audit answers: workflow breaks without scores; chargeback outcomes label every inference; weekly retrain with measured precision delta; inference 18% COGS; Head of Risk owns override rate; moat is proprietary transaction graph. Fundraise narrative held under technical diligence.",
        },
        {
          title: "Board quarterly audit — tier migration tracked",
          body: "CEO added six-question audit to board pack quarterly. When Q3 showed loop velocity stalling, team prioritized feedback pipeline over new features. Metric recovery before Series B. Founders should treat audit as operating cadence, not one-time exercise.",
        },
      ],
    }),
  ],
  quiz: [
    {
      q: "You use GPT-4 via API to draft sales emails inside an existing CRM. No proprietary training data, no feedback loop into model improvement. Which tier is most honest?",
      options: [
        "AI-native — we use a frontier model.",
        "AI-powered — AI improves an existing workflow but remove it and the CRM survives; no compounding moat yet.",
        "AI-washed — we should remove all AI branding.",
        "Not applicable — all CRMs are AI-native in 2026.",
      ],
      correct: 1,
      correctFeedback:
        "Right. API drafting on an existing product is AI-powered at best — valuable, but not native without proprietary signal and a closed improvement loop.",
      wrongFeedback:
        "Native requires inference on the critical path plus data and improvement architecture. Re-read sections 1.1 and 1.2.",
    },
    {
      kind: "categorize",
      q: "Sort each company into the correct AI tier.",
      categories: ["AI-native", "AI-powered", "AI-washed"],
      items: [
        { text: "Midjourney — image generation is the entire product.", category: 0 },
        { text: "Notion AI — writing assist on a docs product that existed for years.", category: 1 },
        { text: "Startup whose AI is Zapier plus ChatGPT API with no eval or data moat.", category: 2 },
        { text: "Harvey — legal synthesis where core value is model output in workflow.", category: 0 },
        { text: "HubSpot AI features on CRM that functions without them.", category: 1 },
        { text: "Lead scorer that is three hand-picked signals with no training pipeline.", category: 2 },
      ],
      correctFeedback:
        "Right. Native = no model, no company. Powered = AI improves existing product. Washed = marketing without architecture.",
      wrongFeedback:
        "Ask: if you remove inference, does the company exist? Is there proprietary training signal? Re-read section 1.1.",
    },
    {
      q: "Which of the three tests for genuine AI-nativity does a product fail if it logs user prompts but never captures whether users acted on the output?",
      options: [
        "Core loop test only.",
        "Data architecture test — no labelled outcomes linked to inferences.",
        "Improvement mechanism test only.",
        "None — logging prompts is sufficient.",
      ],
      correct: 1,
      correctFeedback:
        "Right. Prompts without outcomes are inference logs, not training episodes. The data architecture test requires linked signal.",
      wrongFeedback:
        "Native data architecture links inferences to outcomes. Re-read sections 1.2 and 1.4.",
    },
    {
      kind: "order",
      q: "Order the six AI-native audit questions from foundational architecture to strategic stress test.",
      prompt: "Drag to arrange (top = first).",
      items: [
        "Does disabling inference break the primary workflow?",
        "What proprietary label does each user action generate?",
        "What is time from signal to shipped model improvement?",
        "What percentage of COGS is inference?",
        "Does your org own AI quality metrics?",
        "If OpenAI ships your feature natively, what remains?",
      ],
      correctFeedback:
        "Right. Loop and data first, then economics, org, and wrapper stress test. Re-read section 1.8.",
      wrongFeedback:
        "Start with architecture (loop, data, improvement), then economics and org, then competitive stress. Re-read section 1.8.",
    },
    {
      q: "Your CTO proposes calling the company AI-native because 'every feature will eventually use AI.' What is the founder-correct response?",
      options: [
        "Agree — vision statements define tier.",
        "Require passing the three tests today on shipped architecture — roadmap aspirations do not set tier.",
        "Wait until Series B to define tier.",
        "Let marketing decide — they know positioning best.",
      ],
      correct: 1,
      correctFeedback:
        "Right. Tier is architectural fact, not aspiration. Investors diligence what ships, not what slides promise.",
      wrongFeedback:
        "Native tier requires core loop, data architecture, and improvement mechanism now — not eventually. Re-read sections 1.2 and 1.8.",
    },
    {
      kind: "order",
      q: "Order the feedback loop business model stages correctly.",
      prompt: "Drag to arrange the cycle (top = start).",
      items: [
        "Model predicts or generates output for the user.",
        "User reacts — accept, edit, reject, or downstream outcome occurs.",
        "Reaction captured as labelled training signal.",
        "Model updates; product measurably improves; more usage follows.",
      ],
      correctFeedback:
        "Exactly. Predict → react → label → improve. Break any link and compounding stops. Re-read section 1.6.",
      wrongFeedback:
        "The loop requires all four stages connected. Re-read section 1.6.",
    },
  ],
});
