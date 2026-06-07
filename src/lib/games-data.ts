// Per-game content data.

export type AiOrNotRound = {
  prompt: string;
  answer: "ai" | "rules";
  feedback: string;
};

export const AI_OR_NOT_ROUNDS: AiOrNotRound[] = [
  {
    prompt:
      "Gmail suggests three short replies based on the email you received.",
    answer: "ai",
    feedback:
      "Gmail's Smart Reply uses a neural network trained on millions of email conversations — not a template library.",
  },
  {
    prompt:
      "A banking app blocks your card if you spend more than ₹50,000 in a single transaction.",
    answer: "rules",
    feedback:
      "This is a simple threshold rule — if transaction > ₹50,000 then block. No learning, no pattern recognition.",
  },
  {
    prompt:
      "Spotify's Discover Weekly creates a new playlist of songs you haven't heard but will probably like.",
    answer: "ai",
    feedback:
      "Spotify uses collaborative filtering — a machine learning technique that finds users with similar taste and recommends what they loved.",
  },
  {
    prompt:
      "An e-commerce site shows 'Only 3 left in stock!' when inventory drops below 3 units.",
    answer: "rules",
    feedback:
      "Pure inventory threshold rule. The system checks stock count and displays a message. No AI involved.",
  },
  {
    prompt:
      "Grammarly rewrites your sentence to sound more confident and professional.",
    answer: "ai",
    feedback:
      "Grammarly's tone and rewrite suggestions use a large language model trained on writing style — far beyond grammar rules.",
  },
  {
    prompt: "A food delivery app charges higher prices during rain.",
    answer: "rules",
    feedback:
      "Surge pricing triggered by weather API data is a conditional rule — if weather = rain then multiply price by 1.3. Classic if/then logic.",
  },
  {
    prompt:
      "Google Photos automatically groups your pictures by the people in them without you labelling anyone.",
    answer: "ai",
    feedback:
      "Google Photos uses facial recognition — a deep learning model that learns to identify faces across thousands of your photos.",
  },
  {
    prompt:
      "A SaaS dashboard sends you an email when your trial expires in 3 days.",
    answer: "rules",
    feedback:
      "A scheduled job checks trial end dates and triggers emails at the 3-day mark. Entirely rule-based, no intelligence required.",
  },
];

export type SpotFakeOption =
  | "Genuine AI"
  | "Rule-based dressed as AI"
  | "Partially AI"
  | "Misleading but technically true";

export type SpotFakeRound = {
  pitch: string;
  correct: SpotFakeOption;
  rightFeedback: string;
  wrongFeedback: string;
};

export const SPOT_FAKE_OPTIONS: SpotFakeOption[] = [
  "Genuine AI",
  "Rule-based dressed as AI",
  "Partially AI",
  "Misleading but technically true",
];

export const SPOT_FAKE_ROUNDS: SpotFakeRound[] = [
  {
    pitch:
      "Our AI-powered CRM automatically prioritises your leads based on conversion likelihood.",
    correct: "Genuine AI",
    rightFeedback:
      "Lead scoring using historical conversion data and ML models is a legitimate AI application — the system genuinely learns which signals predict conversion.",
    wrongFeedback:
      "Look again — predictive lead scoring requires pattern recognition across thousands of data points, which is genuine machine learning territory.",
  },
  {
    pitch:
      "Our AI chatbot answers customer queries 24/7 with human-like responses.",
    correct: "Rule-based dressed as AI",
    rightFeedback:
      "Most '24/7 AI chatbots' are decision tree chatbots — they follow scripted paths based on keywords. Genuinely intelligent chatbots are far less common than vendors claim.",
    wrongFeedback:
      "This is one of the most common vendor deceptions — 'human-like' usually means 'scripted to sound human', not actually intelligent.",
  },
  {
    pitch:
      "Our platform uses AI to send emails at the exact time each subscriber is most likely to open them.",
    correct: "Genuine AI",
    rightFeedback:
      "Send-time optimisation uses ML models trained on each user's historical open patterns — this is legitimate predictive AI, not a rule.",
    wrongFeedback:
      "This one is real — platforms like Mailchimp and HubSpot use genuine ML models to predict individual open probability by time of day.",
  },
  {
    pitch:
      "Our AI automatically flags inappropriate content on your platform in real time.",
    correct: "Partially AI",
    rightFeedback:
      "Content moderation uses a combination of ML classifiers and hard-coded rules — the AI catches patterns but rule-based filters handle known banned content.",
    wrongFeedback:
      "Content moderation is almost never purely AI or purely rules — most production systems combine both, making this answer 'partially AI.'",
  },
  {
    pitch:
      "Our AI generates personalised product descriptions for every item in your catalogue.",
    correct: "Genuine AI",
    rightFeedback:
      "Using an LLM to generate product descriptions from structured data (SKU, category, attributes) is a genuine and common AI application in e-commerce.",
    wrongFeedback:
      "This is legitimate generative AI — not marketing fiction. LLMs generating catalogue copy from product data is one of the most practical enterprise AI use cases right now.",
  },
];

export type HalluRound = {
  // sentences listed in order. correctIndex = which is the hallucination; -1 means none
  sentences: string[];
  hallucinationIndex: number; // -1 if none and "No hallucination" choice is correct
  noneOptionLabel?: string; // when present, render extra option
  explanation: string;
};

export const HALLU_ROUNDS: HalluRound[] = [
  {
    sentences: [
      "The Transformer architecture was introduced in the 2017 paper 'Attention Is All You Need' by researchers at Google Brain.",
      "It replaced recurrent neural networks as the dominant architecture for natural language processing tasks.",
      "The paper's lead author was Yoshua Bengio, one of the pioneers of deep learning.",
      "Transformers are now the foundation of models like GPT, Claude and Gemini.",
    ],
    hallucinationIndex: 2,
    explanation:
      "The lead authors were Ashish Vaswani and Noam Shazeer, both at Google Brain at the time. Yoshua Bengio is a deep learning pioneer but had no role in this paper.",
  },
  {
    sentences: [
      "OpenAI was founded in 2015 as a non-profit AI research company.",
      "Its early backers included Elon Musk and Sam Altman, who also served as co-chairs.",
      "The company released GPT-1 in 2018, GPT-2 in 2019, and GPT-3 in 2020.",
      "OpenAI transitioned to a capped-profit structure in 2019 to attract the investment needed for large-scale compute.",
    ],
    hallucinationIndex: 1,
    explanation:
      "Sam Altman was a backer and board member but Elon Musk and Greg Brockman were the co-chairs at founding. Altman became CEO in 2019.",
  },
  {
    sentences: [
      "India's AI startup ecosystem grew significantly between 2022 and 2025, with Bengaluru emerging as the primary hub.",
      "The government launched the IndiaAI Mission in 2024 with an allocation of ₹10,371 crore.",
      "AI adoption among Indian SMEs remains low, with most citing cost and lack of technical talent as primary barriers.",
      "The mission's primary goal is to build sovereign AI infrastructure including compute capacity.",
    ],
    hallucinationIndex: -1,
    noneOptionLabel: "No hallucination — this paragraph is accurate",
    explanation:
      "This is a clean paragraph — all facts are accurate. A critical skill is knowing when AI output is correct, not just catching errors.",
  },
  {
    sentences: [
      "Claude is an AI assistant built by Anthropic, a company founded in 2021 by former OpenAI researchers including Dario Amodei and Daniela Amodei.",
      "Anthropic's safety research framework is called Constitutional AI, first published in 2022.",
      "The company is headquartered in San Francisco and has raised over $7 billion in funding as of 2024.",
      "Claude was first released publicly in March 2022.",
    ],
    hallucinationIndex: 3,
    explanation:
      "Claude was first released publicly in March 2023, not 2022. Anthropic was founded in 2021 and spent its first year on research before any public product release.",
  },
  {
    sentences: [
      "Large language models are trained using a technique called unsupervised learning on massive text datasets scraped from the internet.",
      "After pre-training, models are fine-tuned using Reinforcement Learning from Human Feedback (RLHF) to make them more helpful and less harmful.",
      "GPT-4 was trained on approximately 45 terabytes of text data.",
      "The compute cost of training a frontier model like GPT-4 is estimated at over $100 million.",
    ],
    hallucinationIndex: 2,
    explanation:
      "OpenAI has never disclosed GPT-4's training data size. The 45TB figure relates to GPT-3's dataset. Stating a specific unconfirmed number for GPT-4 is a hallucination — a confident-sounding fabricated fact.",
  },
];

export type PromptBattleRound = {
  task: string;
  promptA: string;
  promptB: string;
  winner: "A" | "B";
  explanation: string;
};

export const PROMPT_BATTLE_ROUNDS: PromptBattleRound[] = [
  {
    task: "You want an AI to write a subject line for a product launch email targeting senior product managers.",
    promptA: "Write an email subject line for a product launch.",
    promptB:
      "Write 5 email subject lines for a product launch email targeting senior product managers at B2B SaaS companies. The product is a free AI literacy playbook. Tone: direct and professional, not salesy. Each subject line should be under 50 characters.",
    winner: "B",
    explanation:
      "Prompt B defines the audience, the product, the tone, the format and the constraint. Prompt A gives the AI nothing to work with — the output will be generic and unusable.",
  },
  {
    task: "You want AI to help you prepare for a tough stakeholder meeting about deprioritising a feature.",
    promptA:
      "Help me prepare for a difficult stakeholder meeting where I need to explain why we are deprioritising the reporting feature. The stakeholder is the VP of Sales who championed this feature. I need 3 talking points that acknowledge their concern, explain the trade-off, and redirect to what we are building instead. Keep it under 200 words.",
    promptB: "How do I handle a difficult stakeholder?",
    winner: "A",
    explanation:
      "Prompt A gives context (who, what, why), constraints (3 points, 200 words), and structure (acknowledge, explain, redirect). Prompt B will return a generic 500-word essay that helps nobody.",
  },
  {
    task: "You want AI to summarise a long product requirements document.",
    promptA: "Summarise this PRD.",
    promptB:
      "Summarise this PRD in 3 sections: (1) the problem being solved in 2 sentences, (2) the proposed solution in 3 bullet points, (3) the top 3 open questions or risks. Audience: an engineering lead who hasn't read the PRD. Avoid jargon.",
    winner: "B",
    explanation:
      "Structured output prompts consistently outperform open-ended ones. By defining the three sections and the audience, Prompt B ensures the summary is immediately usable in a real engineering conversation.",
  },
  {
    task: "You want AI to review your job description for a Senior AI PM role.",
    promptA:
      "Review this job description: [JD text]. Identify: (1) any requirements that will unnecessarily filter out strong non-traditional candidates, (2) any missing requirements for a genuine AI PM role in 2026, (3) the overall tone — does it sound like a place good PMs would want to work? Be direct.",
    promptB: "Is this a good job description? [JD text]",
    winner: "A",
    explanation:
      "Yes/no questions get yes/no answers. Prompt A gives the AI three specific lenses to evaluate through — each one actionable. The result is a structured critique you can actually use to rewrite the JD.",
  },
  {
    task: "You want AI to generate user interview questions for a new AI feature.",
    promptA: "Generate user interview questions for an AI feature.",
    promptB:
      "Generate 8 user interview questions for a discovery interview about an AI-powered expense categorisation feature in a finance tool. Users are finance managers at companies with 50–500 employees. Questions should uncover: current manual process pain, trust in AI decisions, and willingness to override AI suggestions. No leading questions.",
    winner: "B",
    explanation:
      "User research prompts require context about who the user is, what the feature does, and what you're trying to learn. Without this, AI generates textbook questions that reveal nothing about your specific user's behaviour.",
  },
];

export type JargonRound = {
  jargon: string;
  options: string[]; // 4 options
  correctIndex: number;
  explanation: string;
};

export const JARGON_ROUNDS: JargonRound[] = [
  {
    jargon: "Our model uses retrieval-augmented generation to reduce hallucinations.",
    options: [
      "The AI searches a database of real information before answering, so it's less likely to make things up.",
      "The AI generates multiple answers and picks the most confident one.",
      "The AI uses the internet in real time to fact-check its responses.",
      "The AI is trained on more data to improve accuracy.",
    ],
    correctIndex: 0,
    explanation:
      "RAG (retrieval-augmented generation) grounds AI responses in retrieved facts from a knowledge base before generating — it doesn't search the live internet or pick between outputs.",
  },
  {
    jargon: "We fine-tuned the base model on proprietary domain data.",
    options: [
      "We took an existing AI model and gave it additional training using our own company's specific data to make it better at our use case.",
      "We built a new AI model from scratch using only our internal data.",
      "We connected the AI to our database so it can search it in real time.",
      "We improved the AI's speed by optimising it for our servers.",
    ],
    correctIndex: 0,
    explanation:
      "Fine-tuning starts with an existing model (not from scratch) and trains it further on specific data — it changes the model's weights, unlike RAG which only retrieves information at inference time.",
  },
  {
    jargon: "The model's context window is 128k tokens.",
    options: [
      "The AI can read and consider roughly 100,000 words of text at once before it starts forgetting earlier parts.",
      "The AI can generate up to 128,000 words in a single response.",
      "The AI was trained on 128,000 documents.",
      "The AI can process 128,000 user requests simultaneously.",
    ],
    correctIndex: 0,
    explanation:
      "Context window is input capacity — how much the model can see at once. It is not output length, training data size, or concurrent users.",
  },
  {
    jargon: "We're using an agentic AI architecture with tool use.",
    options: [
      "The AI can take actions on its own — like searching the web, running code or sending emails — not just answer questions.",
      "The AI has a personality and can adapt its communication style to different users.",
      "The AI uses multiple models working together to give better answers.",
      "The AI can train itself on new data without human involvement.",
    ],
    correctIndex: 0,
    explanation:
      "Agentic AI with tool use means the model can call external tools (APIs, code runners, browsers) to complete multi-step tasks autonomously — it acts, not just answers.",
  },
  {
    jargon: "Our embeddings model converts your documents into vector representations.",
    options: [
      "The AI turns your text documents into lists of numbers that capture their meaning, so similar documents can be found quickly.",
      "The AI compresses your documents into smaller file sizes for storage efficiency.",
      "The AI translates your documents into a standardised format for processing.",
      "The AI extracts key words from your documents and indexes them.",
    ],
    correctIndex: 0,
    explanation:
      "Embeddings encode semantic meaning as numbers — a vector for 'cat' will be mathematically close to the vector for 'kitten'. This is fundamentally different from compression, formatting, or keyword extraction.",
  },
  {
    jargon: "We use RLHF to align the model with user preferences.",
    options: [
      "Human reviewers rate the AI's responses and those ratings train the model to give better, more helpful answers over time.",
      "The AI learns from user clicks and engagement data automatically.",
      "The AI is programmed with a set of rules about what good responses look like.",
      "The AI surveys users after each interaction and adjusts instantly.",
    ],
    correctIndex: 0,
    explanation:
      "RLHF (Reinforcement Learning from Human Feedback) involves humans explicitly rating outputs — it is not automatic click tracking, rule programming, or real-time adjustment.",
  },
  {
    jargon: "The model exhibits emergent capabilities at scale.",
    options: [
      "As the AI gets bigger and is trained on more data, it suddenly develops abilities nobody explicitly programmed — like reasoning or coding — that smaller versions couldn't do.",
      "The larger the model, the faster it gets at answering questions.",
      "The model learns new skills by being exposed to more users over time.",
      "Bigger models are more expensive but not necessarily more capable.",
    ],
    correctIndex: 0,
    explanation:
      "Emergence is one of the most surprising phenomena in AI — capabilities appear suddenly at certain scale thresholds, not gradually. This is why GPT-4 can reason in ways GPT-2 fundamentally cannot.",
  },
  {
    jargon: "We're implementing guardrails using a constitutional AI approach.",
    options: [
      "The AI is trained to follow a set of written principles about what it should and shouldn't do, rather than relying only on human reviewers to catch bad outputs.",
      "The AI is connected to a content moderation system that filters outputs after they're generated.",
      "The AI refuses to answer any question outside its designated topic area.",
      "The AI is monitored by human reviewers in real time before responses are shown to users.",
    ],
    correctIndex: 0,
    explanation:
      "Constitutional AI (Anthropic's approach) bakes principles into the training process itself — the model learns to self-critique against a constitution. This is architecturally different from post-generation filtering or human review.",
  },
];
