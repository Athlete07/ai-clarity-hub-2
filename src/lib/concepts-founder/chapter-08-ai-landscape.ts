import { buildChapter, buildSection, s, x, sectionWithDiagram } from "../concepts-pb4-helpers";

export const chapter08AiLandscape = buildChapter({
  slug: "founder-ai-landscape",
  number: 8,
  shortTitle: "AI Landscape",
  title: "AI Landscape & Market Structure — Where value accumulates and where startups die",
  readingMinutes: 27,
  summary:
    "The AI value chain from chips to applications — who captures margin, why foundation model providers hold power, and why thin wrappers around GPT-4 are not businesses.",
  keyTakeaway:
    "The AI market has a clear value chain: compute and chips at the base, foundation models in the middle, applications at the top. Most venture dollars chase the application layer with wrapper economics — thin margins, no moat, instant replication. Founders who understand where power and margin accumulate choose wedges with defensibility: proprietary data, workflow embedding, vertical depth, or infrastructure picks-and-shovels.",
  pmCallout:
    "As a founder: draw your company on the AI value chain in one sentence. If your answer is 'we put a UI on OpenAI,' you do not yet have a strategy — you have a demo. Investors have seen five hundred of those this quarter.",
  sections: [
    buildSection({
      number: "8.1",
      title: "The AI value chain",
      subtitle: "Chips, compute, models, tooling, applications — where money and power flow",
      take: "The AI industry stacks in layers: semiconductor and hardware, cloud compute, foundation model training, inference and hosting, developer tooling, and end-user applications. Margin and bargaining power concentrate at the base and the model layer; the application layer is crowded and often commoditized.",
      why: "Founders who cannot place their company on this stack cannot explain defensibility to investors. 'We use AI' is not a position on the value chain. 'We own proprietary workflow data at the application layer in legal' is.",
      paragraphs: [
        [
          s("An investor asks where your company sits in the AI stack. You say 'we use GPT-4.' "),
          x(
            "That places you at the application layer using someone else's model — the most crowded, lowest-margin position.",
            "Value chain position determines margin, bargaining power, and acquirer interest.",
          ),
          s(" The investor's next question is always: 'What happens when OpenAI ships your feature?'"),
        ],
        [
          s("At the base: NVIDIA, TSMC, and hyperscaler data centers capture infrastructure margin. "),
          x(
            "Foundation model labs — OpenAI, Anthropic, Google, Meta — capture model-layer margin through API pricing and enterprise contracts.",
            "Middle layers (vector DBs, orchestration, eval tools) are picks-and-shovels with variable defensibility.",
          ),
          s(" Application layer startups compete on distribution, data, and workflow embedding — rarely on model quality."),
        ],
        [
          s("The business consequence is capital efficiency and exit dynamics. "),
          x(
            "Infrastructure and model-layer companies raise billions and trade at platform multiples. Application wrappers raise seed rounds and struggle to Series B.",
            "Acquirers buy data, customers, and workflow lock-in — not prompt libraries.",
          ),
          s(" Your value chain position should predict your fundraising path and valuation comps."),
        ],
        [
          s("Map your company on the value chain before writing your pitch deck. "),
          x(
            "Ask: which layer do we own? What do we control if our model provider changes pricing 3x tomorrow?",
            "If the answer is nothing proprietary, your strategy homework is not done.",
          ),
          s(" Investors reward founders who articulate layer position and migration risk honestly."),
        ],
      ],
      examples: [
        {
          title: "NVIDIA — value at the base",
          body: "NVIDIA captures AI boom margin at the chip layer regardless of which application wins. A SaaS founder used this analogy in a board meeting: 'We are not NVIDIA. We must win at a layer where software margins exist — and that requires data or workflow moats, not GPU access.'",
        },
        {
          title: "OpenAI API pricing power",
          body: "When OpenAI cut prices 50% in 2024, wrapper startups' margins improved overnight — but differentiation did not. When prices rise, wrappers have no lever. A founder modeled ±40% API cost sensitivity in financial projections after watching a competitor's margin collapse on a surprise price increase.",
        },
        {
          title: "Databricks — middle-layer platform",
          body: "Databricks sits between infrastructure and applications, owning data pipeline and ML ops workflows. A data infrastructure founder positioned as 'the workflow layer for vertical X' — copying Databricks' middle-layer playbook rather than competing at the application surface.",
        },
      ],
    }),
    sectionWithDiagram({
      number: "8.2",
      title: "Foundation model providers",
      subtitle: "OpenAI, Anthropic, Google, Meta — the platform layer everyone builds on",
      take: "Foundation model providers are the new cloud platforms — they set pricing, capability ceilings, rate limits, and policy boundaries for millions of downstream products. Building on them is rational at seed stage; depending on them without exit strategy is a terminal risk.",
      why: "Every investor asks about model provider concentration. Founders who articulate a multi-provider or model-agnostic strategy — with real engineering evidence — pass diligence. Founders who say 'we're GPT-only' signal lock-in risk.",
      paragraphs: [
        [
          s("Your entire product runs on a single provider's API. They deprecate a model version with 30 days notice. "),
          x(
            "Your eval suite shows 15% quality regression on the replacement. You have no alternative provider integrated.",
            "Provider dependency is a single point of failure for product quality, cost, and availability.",
          ),
          s(" This is the platform risk VCs price into AI application valuations."),
        ],
        [
          s("The major providers differ on capability, price, safety, context length, and enterprise terms. "),
          x(
            "OpenAI: broadest ecosystem, fastest feature velocity. Anthropic: safety positioning, long context. Google: enterprise distribution. Meta: open weights for self-hosting.",
            "No single provider wins all use cases. Provider selection is a product decision.",
          ),
          s(" Founders should evaluate providers against their specific latency, cost, and compliance requirements — not brand affinity."),
        ],
        [
          s("The business consequence is margin and roadmap dependency. "),
          x(
            "When your provider ships a native feature matching yours — browsing, code execution, document analysis — your differentiation can evaporate in a keynote.",
            "Provider roadmap risk is competitor risk. Monitor release notes like you monitor competitors.",
          ),
          s(" Enterprise customers increasingly require multi-provider architecture for resilience and negotiation leverage."),
        ],
        [
          s("Build model abstraction at seed, not at Series B. "),
          x(
            "A thin adapter layer letting you swap providers with eval-gated migration costs one sprint now and saves a quarter later.",
            "Founders who demonstrate provider portability in diligence reduce perceived platform risk.",
          ),
          s(" Negotiate enterprise terms early — committed spend unlocks pricing, support, and roadmap access."),
        ],
      ],
      examples: [
        {
          title: "OpenAI DevDay feature absorption",
          body: "Multiple startups building GPT wrappers for code analysis, browsing, and document Q&A saw differentiation compress when OpenAI shipped native capabilities. Survivors had proprietary data or workflow embedding — not better prompts. A founder pivoted from 'AI analysis' to 'analysis embedded in customer compliance workflow.'",
        },
        {
          title: "Anthropic enterprise positioning",
          body: "A B2B founder chose Anthropic for enterprise deals citing safety documentation and long-context reliability. The 15% API premium was offset by faster security review and fewer hallucination incidents. Provider selection became a sales asset, not just a technical choice.",
        },
        {
          title: "Llama self-host as BATNA",
          body: "A founder integrated Llama 3 self-hosted as a fallback provider. Never switched in production, but used cost comparison in OpenAI enterprise negotiation to secure 20% discount. Model-agnostic architecture paid for itself in contract leverage alone.",
        },
      ],
    }, {
      kind: "diagram",
      id: "ch8-cost-latency-frontier",
      type: "comparison",
      title: "The Cost-Latency-Quality Frontier",
      caption:
        "Frontier models sit at one corner; small fast models at another. Mature products route different requests to different points on this curve.",
    }),
    sectionWithDiagram({
      number: "8.3",
      title: "Inference, hosting, and tooling",
      subtitle: "The picks-and-shovels layer — vector DBs, orchestration, evals, and MLOps",
      take: "Between foundation models and applications sits a growing tooling layer: vector databases, retrieval pipelines, agent orchestration, evaluation frameworks, and observability. Some of these businesses achieve real defensibility; many are feature-extensions waiting to be absorbed.",
      why: "Founders often pitch 'we built the orchestration layer' without explaining why that layer persists when LangChain, LlamaIndex, or the model provider ships the same capability natively. Tooling-layer founders need a sharper moat story.",
      paragraphs: [
        [
          s("You pitch 'we are the AI infrastructure for enterprises.' The investor asks what you own. "),
          x(
            "If the answer is a thin wrapper on open-source orchestration libraries, you are a services company, not infrastructure.",
            "Infrastructure implies switching costs, data gravity, or network effects — not GitHub repos.",
          ),
          s(" Tooling without lock-in is a consulting business with a logo."),
        ],
        [
          s("Defensible tooling layers share traits: deep enterprise integration, proprietary eval datasets, compliance certifications, or network effects. "),
          x(
            "Commoditized tooling — generic vector search, basic prompt management — faces margin compression as providers bundle features.",
            "The test: would a customer switch in a weekend? If yes, the moat is thin.",
          ),
          s(" Vector DBs, eval platforms, and observability tools are fighting for permanence as the stack matures."),
        ],
        [
          s("The business consequence is Series A bar height. "),
          x(
            "Tooling companies need $1M+ ARR with clear expansion revenue to raise Series A in 2025-2026. 'Usage growing' without retention or upsell path does not clear the bar.",
            "Investors compare tooling startups to Datadog and Snowflake — not to application SaaS.",
          ),
          s(" Founders at this layer must show embedding depth per customer, not logo count alone."),
        ],
        [
          s("If you are building tooling, ask: what is our Datadog moment? "),
          x(
            "What data or workflow do we accumulate that makes switching painful? What do we know about model performance that customers cannot replicate internally?",
            "Eval datasets, production telemetry, and compliance audit trails are stronger moats than orchestration code.",
          ),
          s(" Partner with application-layer companies if your moat is thin — do not pretend to be a platform."),
        ],
      ],
      examples: [
        {
          title: "Pinecone — early vector DB lead",
          body: "Pinecone built managed vector search when enterprises could not self-host reliably. Moat was operational maturity and multi-tenancy — not the ANN algorithm itself. A founder studied Pinecone's path: commoditized algorithm, defensible operations and enterprise features.",
        },
        {
          title: "LangChain absorption risk",
          body: "Startups built entirely on LangChain abstractions discovered provider-native agent frameworks reduced their value. Survivors added proprietary eval suites and production monitoring customers could not get from raw SDKs. A founder repositioned from 'orchestration' to 'production AI reliability.'",
        },
        {
          title: "Weights & Biases — workflow embedding",
          body: "W&B embedded in ML team workflows with experiment history, artifact lineage, and team collaboration. Switching cost is organizational, not technical. A tooling founder designed for team habit formation — daily-use dashboards, not one-time setup tools.",
        },
      ],
    }, {
      kind: "diagram",
      id: "bl-ai-transformation",
      type: "flow",
      title: "AI Initiative Execution Path",
      caption:
        "Assess → prioritise → pilot → scale → embed. The sequence that turns AI ambition into measurable outcomes.",
    }),
    buildSection({
      number: "8.4",
      title: "The application layer",
      subtitle: "Where most startups land — and where differentiation must come from data and workflow",
      take: "The application layer is where AI meets the customer problem — copilots, vertical SaaS, agents, and AI-native products. It is the largest opportunity and the most crowded. Defensibility here comes from proprietary data, workflow embedding, and distribution — never from the model API call alone.",
      why: "90% of AI startup pitches live here. Investors pattern-match quickly: wrapper or wedge? Founders who articulate a wedge with data or workflow moat get meetings. Founders who articulate 'GPT for X' get pass emails.",
      paragraphs: [
        [
          s("You build 'AI for real estate agents.' Your entire product is a prompt chain over GPT-4 with a CRM integration. "),
          x(
            "A competitor ships the same in six weeks. Your only defense is speed — which is not a moat.",
            "Application-layer defensibility must be named explicitly: data, workflow, network, or brand.",
          ),
          s(" Without a named moat, you are in a race to zero margin."),
        ],
        [
          s("Strong application-layer moats: proprietary behavioral data from product usage, deep workflow embedding (switching costs), vertical regulatory expertise, and owned distribution channels. "),
          x(
            "Weak moats: prompt libraries, thin UI, single API integration, public-data RAG.",
            "If your moat requires 'we got there first,' you do not have a moat — you have a head start.",
          ),
          s(" AI-native products should deepen the moat with every user interaction via feedback loops."),
        ],
        [
          s("The business consequence is fundraising and M&A positioning. "),
          x(
            "Application-layer AI companies with data moats trade at SaaS multiples. Wrappers trade at acqui-hire or shut down.",
            "Acquirers buy customer relationships and embedded workflows — not API integrations.",
          ),
          s(" Your application should get harder to replicate with scale, not easier."),
        ],
        [
          s("Define your moat mechanism in one sentence on slide two of your deck. "),
          x(
            "'Every customer interaction improves our proprietary model of X' is a moat. 'We use the best AI' is not.",
            "Investors test this sentence in the first three minutes. Founders who hesitate lose the room.",
          ),
          s(" If you cannot complete the sentence, solve the moat problem before raising."),
        ],
      ],
      examples: [
        {
          title: "Harvey — vertical legal depth",
          body: "Harvey built AI for law firms with domain-specific workflows, firm data handling, and legal eval benchmarks — not generic chat. Vertical depth and compliance posture created defensibility a horizontal wrapper could not replicate in six weeks. Vertical positioning justified premium pricing.",
        },
        {
          title: "Notion AI — distribution over model",
          body: "Notion AI is a wrapper on third-party models, but Notion's moat is 30M users' structured workspace data and habitual workflow. AI features leverage existing data gravity. A founder with a productivity tool copied this: AI on existing user data, not AI as standalone product.",
        },
        {
          title: "Wrapper graveyard — 'ChatGPT for X'",
          body: "Dozens of 'ChatGPT for doctors/lawyers/teachers' startups launched in 2023. Most shut down by 2024 when horizontal tools added domain modes or users used ChatGPT directly. Survivors had EHR integrations, billing workflows, or proprietary clinical datasets — not better chat UI.",
        },
      ],
    }),
    buildSection({
      number: "8.5",
      title: "The wrapper problem",
      subtitle: "Why thin GPT shells are not businesses — and the three paths that actually work",
      take: "A wrapper is a product whose core value is a third-party model API call with minimal proprietary technology, data, or workflow embedding. Wrappers can validate demand but rarely sustain venture-scale businesses because replication cost is near zero and provider pricing power is total.",
      why: "Every VC has a mental 'wrapper filter' active in the first five minutes. Founders who acknowledge the wrapper risk and articulate an escape path earn credibility. Founders who deny it confirm the filter.",
      paragraphs: [
        [
          s("Your product is a web app that sends user input to GPT-4 and displays the output with formatting. "),
          x(
            "Replication cost for a competent engineer: one week. Defensibility: zero. Margin: whatever OpenAI leaves you.",
            "This is the wrapper trap — demand validation without business durability.",
          ),
          s(" You may have a lifestyle business or an acqui-hire — not a venture outcome."),
        ],
        [
          s("Three escape paths from wrapper economics: go vertical deep, accumulate proprietary data, or embed into an irreplaceable workflow. "),
          x(
            "Vertical depth: domain-specific evals, compliance, integrations, and buyer trust. Data: behavioral feedback loops that improve the product per customer. Workflow: become the system of record, not the assistant.",
            "Each path requires intentional architecture from day one — not a pivot after Series A rejection.",
          ),
          s(" Prompt engineering alone is not an escape path."),
        ],
        [
          s("The business consequence is fundraising physics. "),
          x(
            "Wrapper startups raise pre-seed on team and vision. Series A requires evidence of moat — retention, expansion, data accumulation, or vertical lock-in.",
            "The 'wrapper to wedge' pivot is the most common AI startup arc — and the most failure-prone if started too late.",
          ),
          s(" Start the escape path at month one, not month eighteen."),
        ],
        [
          s("Run the wrapper test on your own product honestly. "),
          x(
            "Remove your brand and your prompts. What remains? If the answer is 'an API key,' you are a wrapper.",
            "Founders who pass this test describe what remains: customer data, workflow state, compliance artifacts, or domain models.",
          ),
          s(" Build what remains, not what disappears."),
        ],
      ],
      examples: [
        {
          title: "Jasper's pivot pressure",
          body: "Jasper built early GPT-3 marketing copy tooling — classic wrapper economics. Competitive pressure from ChatGPT and provider feature absorption forced pivot toward brand voice, team workflows, and enterprise marketing operations. Founder lesson: wrappers must evolve before the platform absorbs them.",
        },
        {
          title: "Vertical escape — Abridge in clinical notes",
          body: "Abridge could have been a 'GPT for doctors' wrapper. Instead it embedded in clinical workflows with EHR integration, HIPAA compliance, and proprietary audio-to-note training on clinical encounters. Vertical depth escaped the wrapper trap.",
        },
        {
          title: "Data escape — Gong in sales intelligence",
          body: "Gong used ML on proprietary call recording data — not generic LLM wrappers. Each customer call improved models of what winning sales conversations look like. Data flywheel created defensibility no API product could match.",
        },
      ],
    }),
    buildSection({
      number: "8.6",
      title: "Vertical vs horizontal AI",
      subtitle: "Where startups find wedges — and where they get crushed by platforms",
      take: "Horizontal AI products serve broad use cases across industries. Vertical AI products solve deep problems for one industry with domain-specific data, compliance, and workflow. Vertical positioning trades TAM size for defensibility and willingness-to-pay.",
      why: "Investors debate horizontal TAM vs vertical defensibility constantly. Founders who choose vertical with a clear thesis — 'legal AI wins on trust and compliance, not model quality' — outperform founders who choose horizontal and compete with Microsoft.",
      paragraphs: [
        [
          s("You pitch 'AI writing assistant for everyone.' Microsoft Copilot is your competitor. "),
          x(
            "You have their distribution disadvantage and their model access parity. Horizontal without distribution is a death sentence.",
            "Horizontal bets require either massive distribution or a genuinely novel capability — rare at seed.",
          ),
          s(" Vertical reframing changes the competitive set entirely."),
        ],
        [
          s("Vertical AI wins on: domain-specific eval benchmarks, regulatory compliance, industry integrations, buyer trust, and specialized data. "),
          x(
            "A horizontal model can draft text. A vertical product knows your industry's citation format, liability rules, and approval workflows.",
            "Vertical depth is moat. Horizontal breadth is often a marketing choice that invites platform competition.",
          ),
          s(" Enterprise vertical buyers pay 3-10x horizontal pricing for compliance and integration certainty."),
        ],
        [
          s("The business consequence is sales motion and fundraising narrative. "),
          x(
            "Vertical AI companies sell to industry buyers with industry language. Horizontal companies sell against platform defaults.",
            "VCs fund vertical AI when the founder demonstrates domain expertise and buyer access — not just technical skill.",
          ),
          s(" Choose vertical when you have unfair domain access. Choose horizontal only with unfair distribution."),
        ],
        [
          s("Pick your wedge: industry, workflow, or buyer segment. "),
          x(
            "'AI for construction project managers managing OSHA compliance' beats 'AI for business.'",
            "Specificity signals founder-market fit. Vagueness signals wrapper risk.",
          ),
          s(" Expand horizontally after vertical dominance — not before."),
        ],
      ],
      examples: [
        {
          title: "Harvey vs ChatGPT — legal vertical",
          body: "ChatGPT can answer legal questions. Harvey handles firm workflows, privilege, citation standards, and matter context. Law firms pay Harvey enterprise prices because vertical trust beats horizontal capability. A founder chose medtech vertical over 'AI for healthcare' horizontal and closed three hospital pilots in six months.",
        },
        {
          title: "EvenUp — personal injury vertical",
          body: "EvenUp built AI for personal injury demand letters — a narrow vertical with specific format, legal, and medical requirements. Horizontal legal AI could not match domain eval performance. Vertical focus enabled premium pricing and law-firm partnerships.",
        },
        {
          title: "Horizontal failure — generic sales email AI",
          body: "A dozen startups built 'AI writes your sales emails' in 2023. Outreach, Salesloft, and HubSpot absorbed the capability. Horizontal startups without CRM embedding died. Survivors were embedded in sales workflows with proprietary engagement data.",
        },
      ],
    }),
    buildSection({
      number: "8.7",
      title: "Open vs closed models",
      subtitle: "API dependency vs self-hosting — strategic tradeoffs for founders",
      take: "Closed models (OpenAI, Anthropic, Google APIs) offer best-in-class capability with zero infrastructure burden. Open models (Llama, Mistral, Qwen) offer self-hosting control, cost predictability, and data privacy — at the cost of engineering overhead and capability gaps.",
      why: "Model openness is a strategic decision affecting margin, compliance, provider lock-in, and enterprise sales. Founders must choose based on customer requirements and unit economics — not open-source ideology or API convenience alone.",
      paragraphs: [
        [
          s("Your enterprise customer requires data never leaves their VPC. Closed API is a non-starter. "),
          x(
            "Open-model self-hosting becomes a revenue requirement, not an engineering preference.",
            "Compliance and data residency requirements drive model strategy as much as capability benchmarks.",
          ),
          s(" Founders who only know closed APIs lose regulated enterprise deals."),
        ],
        [
          s("Closed models: fastest time-to-market, best capability, provider dependency, variable pricing. "),
          x(
            "Open models: infrastructure investment, cost predictability at scale, fine-tuning freedom, privacy control.",
            "Hybrid strategies — closed for quality, open for cost-sensitive or private workloads — are increasingly common.",
          ),
          s(" At scale, inference cost often flips the calculus toward open models for high-volume workloads."),
        ],
        [
          s("The business consequence is margin structure at 10x scale. "),
          x(
            "A product at 10M daily API calls may spend $500K/month on closed APIs vs $80K self-hosting open models with engineering overhead.",
            "Founders who model this crossover point in financial projections make better seed architecture decisions.",
          ),
          s(" Enterprise buyers increasingly ask about open-model options for negotiation leverage."),
        ],
        [
          s("Default closed at seed for speed; architect portability; evaluate open at scale or compliance trigger. "),
          x(
            "Triggers to go open: inference bill exceeds 20% of revenue, enterprise VPC requirements, or provider pricing shock.",
            "Document your model strategy and migration plan in the data room.",
          ),
          s(" Model-agnostic architecture is the meta-strategy — not religious commitment to either path."),
        ],
      ],
      examples: [
        {
          title: "Databricks — open model serving",
          body: "Databricks bet on open-model serving for enterprise data privacy. Customers run Llama and Mistral inside their VPC. A B2B founder adopted the same pitch: 'your data, your model, your cloud' — winning three financial services deals closed APIs could not.",
        },
        {
          title: "Scale AI inference crossover",
          body: "A founder projected closed API costs at 1M users: $400K/month. Open-model self-host estimate: $90K/month plus $50K engineering. Crossover justified open-model investment at Series A. The financial model convinced investors the margin story improved with scale.",
        },
        {
          title: "Mistral — open weights pressure",
          body: "Mistral's open-weights models put downward pressure on closed API pricing. A founder used Mistral self-host quotes to negotiate 25% OpenAI enterprise discount. Open models as BATNA changed commercial dynamics even without switching.",
        },
      ],
    }),
    buildSection({
      number: "8.8",
      title: "Founder decision lens — mapping your position",
      subtitle: "The four questions that determine whether you have a business or a demo",
      take: "Before raising or scaling, answer four questions: Where are we on the value chain? What is our moat mechanism? What happens when our provider ships our feature? What is our wrapper escape path? Honest answers determine fundability.",
      why: "These four questions are what experienced AI investors ask in the first meeting. Founders who have crisp answers get term sheets. Founders who discover the answers during diligence do not.",
      paragraphs: [
        [
          s("Question one: Where do we sit on the value chain, and do we intend to move? "),
          x(
            "Application today with data moat tomorrow is a strategy. Application forever with no moat is a lifestyle business.",
            "Movement up or down the stack should be intentional — not accidental.",
          ),
          s(" Name your layer and your planned migration."),
        ],
        [
          s("Question two: What is our moat mechanism — data, workflow, network, or vertical depth? "),
          x(
            "If none apply, you are a wrapper. Acknowledge it and state your escape timeline.",
            "Moat mechanisms should strengthen with each customer — not weaken.",
          ),
          s(" Slide two of your deck should answer this in one sentence."),
        ],
        [
          s("Question three: What happens when our model provider ships our core feature? "),
          x(
            "If your answer is 'we die,' rebuild before raising. If your answer is 'we go deeper on workflow/data,' you have a strategy.",
            "Provider roadmap monitoring should be a founder-level weekly habit.",
          ),
          s(" Build what providers will not absorb — customer-specific data and embedded workflows."),
        ],
        [
          s("Question four: What is our model strategy — closed, open, hybrid — and at what scale does it change? "),
          x(
            "Document the inference cost crossover point. Document compliance triggers for self-hosting.",
            "Investors reward founders who have modeled provider concentration risk with numbers.",
          ),
          s(" The AI landscape is not static. Your strategy should not be either."),
        ],
      ],
      examples: [
        {
          title: "Investor first-meeting prep",
          body: "A founder rehearsed four answers: value chain position (application, vertical legal), moat (proprietary clause edit data), provider risk (EHR integration depth OpenAI won't build), model strategy (closed now, open at $200K/month inference). The meeting converted to a second partner meeting. Preparation beat pedigree.",
        },
        {
          title: "Board quarterly landscape review",
          body: "A seed-stage founder added 'AI landscape review' to quarterly board agenda: provider pricing changes, new model releases, competitor positioning shifts. When Anthropic cut prices, the board had already modeled impact. Landscape awareness became a governance habit.",
        },
        {
          title: "Pivot triggered by wrapper test",
          body: "A founder ran the wrapper test at month four: remove brand and prompts, nothing remains. Pivoted from horizontal writing AI to vertical compliance document generation with proprietary regulatory corpus. Series A narrative changed from 'we use GPT' to 'we own compliance data moat.'",
        },
      ],
    }),
  ],
  quiz: [
    {
      q: "A startup whose core product is a UI sending prompts to GPT-4 with no proprietary data or workflow embedding sits primarily at:",
      options: [
        "The chip and semiconductor layer.",
        "The application layer with wrapper economics — low defensibility and high provider dependency.",
        "The foundation model training layer.",
        "The cloud infrastructure layer with platform margins.",
      ],
      correct: 1,
      correctFeedback:
        "Right. Thin application-layer wrappers face replication risk and provider pricing power.",
      wrongFeedback:
        "Re-read sections 8.1 and 8.5. A UI on an API is application layer without moat.",
    },
    {
      q: "The most durable escape path from the wrapper trap is:",
      options: [
        "Better prompt engineering than competitors.",
        "Proprietary data accumulation, vertical workflow embedding, or deep domain integration.",
        "Using a newer foundation model before competitors.",
        "Lower pricing than ChatGPT.",
      ],
      correct: 1,
      correctFeedback:
        "Exactly. Data, workflow, and vertical depth create switching costs prompts cannot.",
      wrongFeedback:
        "Re-read section 8.5. Prompts replicate in days. Data and workflow embed over months.",
    },
    {
      q: "When a foundation model provider ships a feature matching your core product, the best long-term defense is:",
      options: [
        "Switching to a different provider with the same exposure.",
        "Proprietary customer data, embedded workflows, and vertical depth providers will not build.",
        "Removing AI from the product entirely.",
        "Suing the provider for feature copying.",
      ],
      correct: 1,
      correctFeedback:
        "Right. Build what platforms absorb slowly — customer-specific data and workflow lock-in.",
      wrongFeedback:
        "Re-read sections 8.2 and 8.4. Provider features commoditize surface-level applications.",
    },
    {
      q: "Vertical AI startups typically win against horizontal platforms because:",
      options: [
        "They use better foundation models.",
        "They offer domain-specific compliance, integrations, eval benchmarks, and buyer trust horizontal tools lack.",
        "They have larger total addressable markets.",
        "They avoid all regulatory requirements.",
      ],
      correct: 1,
      correctFeedback:
        "Exactly. Vertical depth — compliance, integrations, domain data — is the wedge.",
      wrongFeedback:
        "Re-read section 8.6. Vertical wins on domain depth, not model superiority.",
    },
    {
      q: "A founder's inference bill exceeds 25% of revenue and enterprise customers require data residency. The strategic response is:",
      options: [
        "Accept margin compression indefinitely.",
        "Evaluate open-model self-hosting or hybrid architecture for cost control and compliance.",
        "Shut down the AI features entirely.",
        "Raise prices 10x without changing architecture.",
      ],
      correct: 1,
      correctFeedback:
        "Right. Open models offer cost predictability and VPC deployment for compliance-constrained customers.",
      wrongFeedback:
        "Re-read section 8.7. Scale and compliance triggers push toward open or hybrid model strategy.",
    },
    {
      q: "In the first investor meeting, the most important AI landscape question a founder should answer crisply is:",
      options: [
        "Which GPU brand the team prefers.",
        "What is our moat mechanism and what happens when our model provider ships our feature?",
        "How many parameters our fine-tuned model has.",
        "Whether AI will achieve AGI within five years.",
      ],
      correct: 1,
      correctFeedback:
        "Exactly. Moat and provider risk are the landscape questions investors test first.",
      wrongFeedback:
        "Re-read section 8.8. Fundability hinges on defensibility and provider concentration risk.",
    },
  ],
});
