// About the Platform — manifesto copy (you/we voice, problem-first).

export const PLATFORM_ABOUT = {
  pageName: "About the Platform",

  hero: {
    headline:
      "Cutting through the AI noise for Product Managers, Founders, and Leaders.",
    subheadline:
      "We test the tools and build the frameworks so you can focus on execution.",
  },

  enemy: {
    label: "The problem",
    title: "You are wasting hours on AI content that will not survive a real workplace.",
    body: [
      "Roughly nine in ten AI resources online are useless hype, high-level fluff, or raw, unedited ChatGPT output — fine for a LinkedIn post, useless in a roadmap review, procurement cycle, or compliance conversation.",
      "FactorBeam exists because you should not have to become a part-time researcher just to ship one AI-powered feature. You need tactics that work in B2B reality, not another generic prompt list.",
    ],
  },

  methodology: {
    label: "Methodology",
    title: "How we turn AI noise into deployable signal",
    intro:
      "Every chapter passes through a transparent three-step pipeline — so you know exactly what you are reading and why you can trust it.",
    steps: [
      {
        step: "01",
        title: "AI-powered aggregation",
        body: "We use advanced LLMs to scan the market, summarize technical documentation, and map foundational concepts at scale — so you are not starting from a blank page.",
      },
      {
        step: "02",
        title: "Human stress-testing",
        body: "Our curation team takes those raw outputs and stress-tests them against real-world B2B scenarios — hunting for hallucinations, inefficiencies, and missing corporate context before anything ships.",
      },
      {
        step: "03",
        title: "Executive formatting",
        body: "We strip away the fluff and format the surviving tactics into strict, copy-paste playbooks designed for immediate deployment — sequenced chapters, real examples, and quizzes that surface gaps before you move on.",
      },
    ],
  },

  conversion: {
    primary: {
      label: "Test your AI readiness with our Executive Simulation",
      hint: "Agent Overseer — an 8-minute orchestration sandbox. No login.",
      href: "/simulations/agent-overseer" as const,
    },
    secondary: {
      label: "Get the 5 most downloaded PM AI workflows",
      hint: "Sent to your inbox — the tactics teams actually reuse.",
      mailSubject: "PM AI workflows request",
    },
  },
} as const;
