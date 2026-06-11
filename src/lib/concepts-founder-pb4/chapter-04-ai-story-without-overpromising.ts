import { buildChapter, buildSection, s, x, sectionWithDiagram } from "../concepts-pb4-helpers";

export const chapter04AiStoryWithoutOverpromising = buildChapter({
  slug: "founder-ai-story-without-overpromising",
  number: 4,
  shortTitle: "AI Story Without Overpromising",
  title: "Telling Your AI Story Without Overpromising",
  readingMinutes: 26,
  summary:
    "The line between a compelling narrative and a misleading one — credible structure, honest model talk, demo design, and investor-specific calibration.",
  keyTakeaway:
    "Investors fund credible compounding stories, not science fiction. Overselling accuracy, hiding failure modes, or misrepresenting your stack destroys term sheets in diligence and reputation in the market. Honest narrative is a competitive advantage.",
  pmCallout:
    "As a founder: read your pitch deck and ask — if the AI does not work as promised, what exactly did I commit to? If you cannot answer precisely, you are overpromising.",
  sections: [
    sectionWithDiagram({
      number: "4.1",
      title: "Why AI founders overpromise — and the long-term cost",
      subtitle: "The reputation damage that follows a founder who oversold the technology",
      take: "Founders overpromise because demos are optimistic, competition is fierce, and AI capabilities sound magical until they fail in production. The long-term cost is diligence death, churn, down rounds, and a reputation that follows you to the next company.",
      why: "Short-term wow wins meetings. Long-term honesty wins term sheets that close and customers who stay. Founders who learn this late rebuild trust for years.",
      paragraphs: [
        [
          s("The incentive to overpromise is structural. "),
          x(
            "Demos use curated inputs. Pilots cherry-pick friendly users. Competitors claim 'autonomous' and '95% accurate.' Founders feel pressure to match or exceed.",
            "The fundraising window rewards confidence. Diligence and production punish fiction.",
          ),
          s(" Optimistic demos are expected — optimistic claims without evidence are not."),
        ],
        [
          s("The cost curve is asymmetric. "),
          x(
            "Overselling might win a meeting but loses the term sheet when technical diligence finds gaps. Customers churn when reality misses the pitch. Next-round investors talk to the last round.",
            "Reputation in AI is a small village. Partners share notes on founders who hid failure modes.",
          ),
          s(" One diligence failure can cost more than ten honest passes."),
        ],
        [
          s("Honest narrative is commercially superior in enterprise and regulated markets. "),
          x(
            "Procurement teams and legal counsel increasingly ask for override rates, failure modes, and human oversight design.",
            "Founders who proactively discuss limitations win trust — and contracts — that oversellers lose in security review.",
          ),
          s(" Underpromise on capability, overdeliver on operations."),
        ],
      ],
      examples: [
        {
          title: "Pilot success, production failure — churn wave",
          body: "A sales AI oversold 'autonomous outreach' in the seed deck. Enterprise pilots succeeded on curated lists; production produced embarrassing emails at scale. Churn hit 40% in two quarters. Series A investors cited 'credibility gap between pitch and product.'",
        },
        {
          title: "Diligence unwind — accuracy claim",
          body: "A health AI claimed 'clinician-grade accuracy' without held-out methodology. Technical diligence found cherry-picked cases. The lead investor withdrew. The founder's reputation in the sector took years to recover.",
        },
        {
          title: "Honest limitations — enterprise win",
          body: "A legal AI founder opened enterprise sales calls with: 'We draft; attorneys review. Here is our override rate and escalation UX.' Honesty shortened security review and won three Fortune 500 logos competitors lost on overclaiming.",
        },
      ],
    }, {
      kind: "diagram",
      id: "founder-vc-diligence-stack",
      type: "flow",
      title: "Investor Diligence Stack",
      caption:
        "Team → data moat → unit economics → timing → risk. The five lenses on every AI term sheet.",
    }),
    sectionWithDiagram({
      number: "4.2",
      title: "The components of a credible AI narrative",
      subtitle: "Problem, data advantage, feedback loop, defensibility, team — the structure that sophisticated investors trust",
      take: "A credible AI narrative has five components: the problem worth solving, the proprietary data advantage, the feedback loop that compounds, the defensibility against commoditisation, and the team that can execute. Missing any component creates diligence gaps.",
      why: "Sophisticated investors map your story to this structure automatically. Founders who present it explicitly signal strategic clarity.",
      paragraphs: [
        [
          s("Start with the problem — not the technology. "),
          x(
            "Investors fund pain, frequency, and willingness to pay. AI is the mechanism, not the headline.",
            "'Lawyers spend 6 hours on NDA review' beats 'we use advanced AI' every time.",
          ),
          s(" Quantify pain in dollars or hours before mentioning models."),
        ],
        [
          s("Data advantage and feedback loop are the middle of the story. "),
          x(
            "Explain what proprietary signal you capture, how fast it accumulates, and how it ships back into the product.",
            "This is where AI-native companies separate from wrappers — and where honest founders show evidence.",
          ),
          s(" Use metrics: accumulation rate, loop latency, improvement trend."),
        ],
        [
          s("Close with defensibility and team execution. "),
          x(
            "Name the moat: vertical data, workflow depth, distribution, switching costs. Acknowledge commoditisation risk and your response.",
            "Team section should show shipped AI products, not just credentials — execution evidence beats PhD counts.",
          ),
          s(" The narrative arc is problem → compounding → defensibility → execution."),
        ],
      ],
      examples: [
        {
          title: "Harvey narrative structure",
          body: "Harvey's story: expensive legal workflows (problem), firm-specific interaction data (advantage), attorney corrections improving outputs (loop), workflow integration in Am Law firms (defensibility), team with legal + AI execution (team). Investors recognised the template instantly.",
        },
        {
          title: "Wrapper narrative — missing middle",
          body: "A horizontal writing tool pitched problem and team but skipped data and loop. Partners classified it as feature AI. The narrative gap predicted the SaaS multiple they received.",
        },
        {
          title: "Five-component one-pager",
          body: "One seed founder replaced a 20-slide deck with a five-component one-pager plus metrics appendix. Meeting-to-memo conversion doubled. Structure reduced investor cognitive load.",
        },
      ],
    }, {
      kind: "diagram",
      id: "founder-eval-framework",
      type: "flow",
      title: "Evaluation Framework",
      caption:
        "Define task → golden set → ship gate → monitor drift.",
    }),
    buildSection({
      number: "4.3",
      title: "How to talk about your model without lying",
      subtitle: "What to say when your model is GPT-4 with a good prompt — honestly and compellingly",
      take: "Honest model talk: name the foundation model if material, explain your proprietary layer (data, retrieval, fine-tuning, orchestration, evaluation), and never imply you built what you rent. Sophistication is in the system, not the base weights.",
      why: "Investors will discover your stack in diligence. Misrepresentation is a terminal trust event. Honest framing of rented intelligence plus owned data is compelling when done well.",
      paragraphs: [
        [
          s("Use precise language: 'we build on' not 'we built.' "),
          x(
            "'We build on frontier models via API, with proprietary retrieval over 200K labelled contracts and monthly fine-tunes on partner corrections' is honest and strong.",
            "'Our proprietary AI engine' when you mean GPT-4 and LangChain is dishonest and weak.",
          ),
          s(" Own the layers you actually engineered."),
        ],
        [
          s("Highlight the value you add: data, evals, guardrails, workflow. "),
          x(
            "The product is the system: ingestion, chunking, retrieval, reranking, human review, logging, feedback pipelines.",
            "Founders who describe the full system sound sophisticated. Founders who hide behind 'the model' sound like wrappers.",
          ),
          s(" Diagram your stack with owned vs rented components labelled."),
        ],
        [
          s("Discuss model choice as a business decision, not a flex. "),
          x(
            "Why this model, fallback plan, cost per task, and quality tradeoffs show operational maturity.",
            "Model name-dropping without economics signals immaturity.",
          ),
          s(" Investors respect founders who treat models as interchangeable infrastructure where possible."),
        ],
      ],
      examples: [
        {
          title: "Honest API stack — seed close",
          body: "A founder said: 'Foundation model is rented. Our IP is the labelled corpus, eval harness, and 9-day correction loop.' The lead investor called it 'refreshingly precise.' The round closed without technical diligence surprises.",
        },
        {
          title: "'Proprietary model' discovery — deal killer",
          body: "Diligence found 'proprietary model' meant GPT-4 with system prompts. The term sheet included a 25% valuation adjustment. Honest framing upfront would have avoided renegotiation and embarrassment.",
        },
        {
          title: "System diagram in the data room",
          body: "One company included an architecture diagram with green (owned) and grey (rented) components in the data room. Investors praised transparency. The diagram became the technical narrative backbone.",
        },
      ],
    }),
    buildSection({
      number: "4.4",
      title: "Handling the 'what if OpenAI builds this' question",
      subtitle: "The answer that demonstrates strategic maturity vs the answer that ends the conversation",
      take: "The mature answer: acknowledge the risk, explain why your proprietary data, workflow integration, and switching costs compound faster than platform feature parity, and show architectural portability. Denial or dismissiveness ends conversations.",
      why: "Every AI application founder gets this question. Your answer is a test of strategic thinking — not technical bravado.",
      paragraphs: [
        [
          s("Acknowledge platform risk explicitly. "),
          x(
            "'Yes, OpenAI could ship a similar feature. Here is why we still win.'",
            "Denial ('they would never') signals naivety. Acknowledgment signals maturity.",
          ),
          s(" Investors reward founders who have thought about platform encroachment."),
        ],
        [
          s("Name non-commoditised assets. "),
          x(
            "Proprietary labelled data, vertical workflow depth, enterprise integrations, compliance posture, and distribution in a specific segment.",
            "Platform features are horizontal. Vertical depth is hard to replicate with a general release.",
          ),
          s(" Be specific about what compounds with usage that platforms cannot copy quickly."),
        ],
        [
          s("Show portability as risk management, not paranoia. "),
          x(
            "Model-agnostic architecture means platform moves are survivable — you swap models, not rebuild the business.",
            "Portability plus vertical moat is the complete answer.",
          ),
          s(" Practice this answer until it is under ninety seconds and evidence-backed."),
        ],
      ],
      examples: [
        {
          title: "Cursor — platform risk answer",
          body: "Cursor acknowledges Microsoft/GitHub competition. Their answer: IDE integration depth, developer workflow data, and suggestion quality from usage loops — not raw model superiority. Investors accepted the framing and funded platform-risk exposure.",
        },
        {
          title: "Dismissal — meeting ended early",
          body: "A founder answered 'OpenAI is focused on AGI, not our niche' without data or workflow evidence. The partner ended the meeting. Platform risk requires a moat answer, not a hope answer.",
        },
        {
          title: "Vertical compliance moat",
          body: "A healthcare documentation AI answered platform risk with HIPAA audit trails, EHR integrations, and clinician override workflows accumulated over three years. Platforms can ship features; they cannot ship three years of regulated workflow trust overnight.",
        },
      ],
    }),
    buildSection({
      number: "4.5",
      title: "Demo design for AI products",
      subtitle: "How to show the model working without hiding the failure modes — and why honesty in demos builds more trust",
      take: "Design demos that show the happy path and the failure path: confidence thresholds, human escalation, override UX, and logging. Investors and customers trust founders who demo reality — not theatre.",
      why: "Curated demos that hide failure modes convert meetings but destroy diligence. Honest demos filter for investors and customers who fit your actual product.",
      paragraphs: [
        [
          s("Script the demo around real production metrics, not cherry-picked inputs. "),
          x(
            "Use examples from last week's user sessions — including one that required escalation.",
            "Say aloud: 'Here is our override rate and here is what happens when confidence is low.'",
          ),
          s(" A demo that includes failure handling signals production maturity."),
        ],
        [
          s("Show observability, not just output. "),
          x(
            "Confidence scores, retrieved sources, latency, and model version in the UI impress technical investors.",
            "Black-box magic outputs impress no one in diligence — they trigger scepticism.",
          ),
          s(" Transparency in demo predicts transparency in operations."),
        ],
        [
          s("Match demo scope to committed capability. "),
          x(
            "If the product assists humans, demo assistance — not autonomy. If accuracy is 85% on a task, do not imply 99%.",
            "Scope mismatch between demo and contract is the fastest path to churn and lawsuits.",
          ),
          s(" End every demo with explicit limitations and human oversight design."),
        ],
      ],
      examples: [
        {
          title: "Failure-path demo — Series A conviction",
          body: "A document AI demo included a low-confidence extraction triggering attorney review. The investor said: 'Finally someone showing reality.' The company closed the round with no technical surprises.",
        },
        {
          title: "Curated demo — diligence collapse",
          body: "A recruiting AI demo used hand-picked candidates. Live production testing in diligence showed bias and errors. The investor walked. Honest demo would have filtered mismatched expectations earlier.",
        },
        {
          title: "Observability impresses technical angels",
          body: "A technical angel invested after a demo showing retrieval sources, confidence, and logged overrides — not because the output was perfect. Observability signalled operational seriousness.",
        },
      ],
    }),
    buildSection({
      number: "4.6",
      title: "The AI narrative across different investor types",
      subtitle: "How to adjust your story for technical angels, generalist VCs, and corporate investors",
      take: "Technical angels want architecture depth and metric honesty. Generalist VCs want problem, moat, and business outcomes. Corporate investors want strategic fit, data rights, and risk posture. Same company, three emphases.",
      why: "One pitch to all investor types wastes meetings. Calibration shows founder sophistication and respects audience expertise.",
      paragraphs: [
        [
          s("Technical angels and AI-focused funds: lead with metrics and architecture. "),
          x(
            "Loop latency, eval methodology, model cards, failure modes. Skip AI 101. Go deep on proprietary layers.",
            "They will drill — be ready for forty-five minutes of technical questions.",
          ),
          s(" Bring engineering leads to these meetings."),
        ],
        [
          s("Generalist VCs: lead with problem, wedge, and defensibility. "),
          x(
            "Translate technical metrics to business outcomes: override down → retention up → NRR up.",
            "Use the five-component narrative in section 4.2. Minimise jargon.",
          ),
          s(" Your job is making compounding legible to a smart non-specialist."),
        ],
        [
          s("Corporate and strategic investors: lead with partnership fit and data governance. "),
          x(
            "Data rights, training opt-out, competitive boundaries, and integration roadmap matter more than model benchmarks.",
            "They invest to learn and partner — show how the relationship compounds without threatening their core business.",
          ),
          s(" Prepare a data governance one-pager for corporate meetings."),
        ],
      ],
      examples: [
        {
          title: "Same company, three pitch versions",
          body: "One founder used a 10-slide generalist deck, a 5-page technical appendix for AI funds, and a data governance brief for corporate strategics. Conversion improved across all three channels. Calibration beat a single generic pitch.",
        },
        {
          title: "Generalist partner — business translation",
          body: "When a generalist asked 'what is RAG?', the founder answered: 'It means our answers cite the customer's own documents, which improves trust and retention — here is the task completion impact.' Translation won the meeting.",
        },
        {
          title: "Corporate strategic — data rights focus",
          body: "A retail corporate strategic passed on model depth but invested after data governance clarity: no training on partner data, audit trails, and exclusive category insights. Risk posture closed the deal.",
        },
      ],
    }),
    buildSection({
      number: "4.7",
      title: "Founder decision lens: the AI narrative stress test",
      subtitle: "Read your pitch deck and ask — if this doesn't work as promised, what exactly did I commit to?",
      take: "Stress-test every claim: accuracy, autonomy, data ownership, improvement timeline, and regulatory posture. For each slide, write the failure mode and your mitigation. If mitigation does not exist, remove or revise the claim before fundraising.",
      why: "This exercise prevents diligence surprises and aligns sales, product, and fundraising language. It is the cheapest risk reduction a founder can do.",
      paragraphs: [
        [
          s("Run the commitment audit slide by slide. "),
          x(
            "For each claim, ask: what did I promise? What happens if we are wrong? Who is harmed? What is our mitigation?",
            "Claims without mitigations are liabilities — not marketing.",
          ),
          s(" Remove slides that fail the audit."),
        ],
        [
          s("Align sales, marketing, and investor decks. "),
          x(
            "Divergent language between customer-facing claims and investor claims is discovered in reference calls and diligence.",
            "One source of truth for capability, limitations, and oversight.",
          ),
          s(" Legal and product should sign off on external AI claims."),
        ],
        [
          s("Re-run the stress test after every major model or product change. "),
          x(
            "New capabilities create new commitments. Updated failure modes need updated mitigations.",
            "Quarterly narrative review should be a board agenda item for AI companies.",
          ),
          s(" Narrative discipline is ongoing operations — not a one-time deck polish."),
        ],
      ],
      examples: [
        {
          title: "Commitment audit — slide removed",
          body: "A founder's audit found 'fully autonomous' on slide 7 with no escalation UX built. The slide was removed and replaced with 'AI-assisted with human review — 8% override rate.' Diligence proceeded smoothly.",
        },
        {
          title: "Sales-deck mismatch discovered",
          body: "Investor reference calls revealed sales promised 99% accuracy while the fundraise deck said 85–90% with human review. The lead paused the round until language unified. Stress test would have caught the mismatch.",
        },
        {
          title: "Quarterly narrative board review",
          body: "One CEO presents 'narrative risk' quarterly: claims vs reality, new failure modes, mitigation status. Board members cite it as best practice. Discipline compounds trust with investors and customers.",
        },
      ],
    }),
  ],
  quiz: [
    {
      q: "What is the long-term cost of overpromising AI capabilities in fundraising?",
      options: [
        "Nothing — investors expect exaggeration.",
        "Diligence failure, churn, down rounds, and damaged founder reputation.",
        "Higher initial valuation with no downside.",
        "Faster product development.",
      ],
      correct: 1,
      correctFeedback:
        "Right. Short-term wow loses to long-term diligence and production reality.",
      wrongFeedback:
        "Re-read section 4.1. Overselling has asymmetric long-term costs.",
    },
    {
      kind: "order",
      q: "Order the five components of a credible AI narrative.",
      prompt: "Drag to arrange the narrative arc (top = start).",
      items: [
        "Problem worth solving — quantified pain.",
        "Proprietary data advantage and feedback loop.",
        "Defensibility against commoditisation.",
        "Team execution evidence.",
      ],
      correctFeedback:
        "Right. Problem → compounding middle → defensibility → execution. Re-read section 4.2.",
      wrongFeedback:
        "Credible narrative flows problem → data/loop → defensibility → team. Re-read section 4.2.",
    },
    {
      q: "How should a founder honestly describe a product built on GPT-4 with proprietary RAG and fine-tuning?",
      options: [
        "'Our proprietary foundation model.'",
        "'We build on frontier models via API; our IP is proprietary retrieval, labelled data, and the correction loop.'",
        "Avoid mentioning the foundation model entirely.",
        "'We have advanced algorithms.'",
      ],
      correct: 1,
      correctFeedback:
        "Right. Honest framing names rented vs owned layers precisely.",
      wrongFeedback:
        "Re-read section 4.3. Precision about rented intelligence plus owned systems builds trust.",
    },
    {
      q: "What is the mature response to 'what if OpenAI builds this?'",
      options: [
        "Deny that platforms would ever compete.",
        "Acknowledge risk, name proprietary data/workflow moats, and show model portability.",
        "Pivot to a completely different business.",
        "Refuse to answer as competitive secrecy.",
      ],
      correct: 1,
      correctFeedback:
        "Right. Acknowledgment plus moat evidence demonstrates strategic maturity.",
      wrongFeedback:
        "Re-read section 4.4. Denial ends conversations; moat answers continue them.",
    },
    {
      kind: "categorize",
      q: "Sort each demo practice into builds trust vs destroys trust.",
      categories: ["Builds trust", "Destroys trust"],
      items: [
        { text: "Showing low-confidence escalation and override UX.", category: 0 },
        { text: "Cherry-picked inputs that hide production failure modes.", category: 1 },
        { text: "Citing live override rate during the demo.", category: 0 },
        { text: "Implying full autonomy when product is human-in-the-loop.", category: 1 },
        { text: "Displaying retrieval sources and confidence scores.", category: 0 },
        { text: "Black-box output with no observability.", category: 1 },
      ],
      correctFeedback:
        "Exactly. Honest demos with failure paths and observability build diligence-ready trust.",
      wrongFeedback:
        "Re-read section 4.5. Reality beats theatre in AI demos.",
    },
    {
      q: "What is the founder decision lens stress test question?",
      options: [
        "How do we maximise demo wow-factor?",
        "If this doesn't work as promised, what exactly did I commit to — and what is the mitigation?",
        "How do we avoid mentioning limitations?",
        "Which buzzwords resonate most with investors?",
      ],
      correct: 1,
      correctFeedback:
        "Right. Commitment audit with mitigations prevents diligence and customer surprises.",
      wrongFeedback:
        "Re-read section 4.7. Stress-test every claim for failure modes and mitigations.",
    },
  ],
});
