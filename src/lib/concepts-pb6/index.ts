import type { Concept } from "../concepts";
import { chapter01AgentFundamentals } from "./chapter-01-agent-fundamentals";
import { chapter02ToolUseFunctionCalling } from "./chapter-02-tool-use-function-calling";
import { chapter03ReactPlanningPatterns } from "./chapter-03-react-planning-patterns";
import { chapter04MemoryTypes } from "./chapter-04-memory-types";
import { chapter05LanggraphDeepDive } from "./chapter-05-langgraph-deep-dive";
import { chapter06MultiAgentCoordination } from "./chapter-06-multi-agent-coordination";
import { chapter07McpProtocol } from "./chapter-07-mcp-protocol";
import { chapter08AgentReliability } from "./chapter-08-agent-reliability";
import { chapter09HumanInTheLoop } from "./chapter-09-human-in-the-loop";

export const pb6Concepts: Concept[] = [
  chapter01AgentFundamentals,
  chapter02ToolUseFunctionCalling,
  chapter03ReactPlanningPatterns,
  chapter04MemoryTypes,
  chapter05LanggraphDeepDive,
  chapter06MultiAgentCoordination,
  chapter07McpProtocol,
  chapter08AgentReliability,
  chapter09HumanInTheLoop,
];
