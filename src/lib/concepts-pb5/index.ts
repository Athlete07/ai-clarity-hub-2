import type { Concept } from "../concepts";
import { chapter01ModelServingArchitectures } from "./chapter-01-model-serving-architectures";
import { chapter02GpuVsCpuInference } from "./chapter-02-gpu-vs-cpu-inference";
import { chapter03BatchVsStreaming } from "./chapter-03-batch-vs-streaming";
import { chapter04QuantisationDistillation } from "./chapter-04-quantisation-distillation";
import { chapter05EdgeVsCloud } from "./chapter-05-edge-vs-cloud";
import { chapter06MlopsPipelines } from "./chapter-06-mlops-pipelines";
import { chapter07ModelVersioning } from "./chapter-07-model-versioning";
import { chapter08CanaryShadowDeployments } from "./chapter-08-canary-shadow-deployments";
import { chapter09LatencyCostQuality } from "./chapter-09-latency-cost-quality";

export const pb5Concepts: Concept[] = [
  chapter01ModelServingArchitectures,
  chapter02GpuVsCpuInference,
  chapter03BatchVsStreaming,
  chapter04QuantisationDistillation,
  chapter05EdgeVsCloud,
  chapter06MlopsPipelines,
  chapter07ModelVersioning,
  chapter08CanaryShadowDeployments,
  chapter09LatencyCostQuality,
];
