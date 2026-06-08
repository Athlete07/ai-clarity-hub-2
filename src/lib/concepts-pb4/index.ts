import type { Concept } from "../concepts";
import { chapter01RagArchitecture } from "./chapter-01-rag-architecture";
import { chapter02VectorDatabases } from "./chapter-02-vector-databases";
import { chapter03ChunkingRetrieval } from "./chapter-03-chunking-retrieval";
import { chapter04Reranking } from "./chapter-04-reranking";
import { chapter05LangchainOrchestration } from "./chapter-05-langchain-orchestration";
import { chapter06FineTuningDeepDive } from "./chapter-06-fine-tuning-deep-dive";
import { chapter07EvalsBenchmarks } from "./chapter-07-evals-benchmarks";
import { chapter08GuardrailsSafety } from "./chapter-08-guardrails-safety";
import { chapter09ObservabilityTracing } from "./chapter-09-observability-tracing";

export const pb4Concepts: Concept[] = [
  chapter01RagArchitecture,
  chapter02VectorDatabases,
  chapter03ChunkingRetrieval,
  chapter04Reranking,
  chapter05LangchainOrchestration,
  chapter06FineTuningDeepDive,
  chapter07EvalsBenchmarks,
  chapter08GuardrailsSafety,
  chapter09ObservabilityTracing,
];
