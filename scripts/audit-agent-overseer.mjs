/**
 * Agent Overseer audit harness — headless simulation of engine logic.
 * Run: node scripts/audit-agent-overseer.mjs
 */
import { readFileSync } from "fs";
import { fileURLToPath } from "url";
import { dirname, join } from "path";

// Minimal inline reimplementation of critical engine paths for Node (no DOM).
const NodeStatus = {
  PENDING: "PENDING",
  RUNNING: "RUNNING",
  COMPLETED: "COMPLETED",
  LOCKED: "LOCKED",
  LIVELOCK: "LIVELOCK",
};

const WAVE_PARAMS = [
  { nodes: 6, injectionMs: 45_000 },
  { nodes: 35, injectionMs: 12_000 },
];

function simulateWaveProgress({ pauseOnLivelock, resolveLivelockMs }) {
  let nodes = WAVE_PARAMS[0].nodes;
  let completed = 0;
  let livelockActive = false;
  let time = 0;
  const execPerNode = 2000;
  const agents = 2;
  let nextInjection = 45_000;
  let locks = 0;
  let playerActions = 0;

  while (completed < nodes && time < 900_000) {
    // Simulate agent throughput: 2 agents complete nodes in parallel
    if (!livelockActive) {
      const tickProgress = (200 / execPerNode) * agents;
      completed = Math.min(nodes, completed + tickProgress);
    }
    time += 200;

    if (!livelockActive && time >= nextInjection) {
      livelockActive = true;
      if (pauseOnLivelock) {
        // player resolves after delay
        if (resolveLivelockMs !== null) {
          time += resolveLivelockMs;
          playerActions += 2; // apply + release
          locks++;
          livelockActive = false;
          nextInjection = time + 45_000;
        }
      }
    }
  }
  return { completed, time, locks, playerActions, won: completed >= nodes };
}

function auditTutorialInjectionTiming() {
  const constructionInjectionAt = 45_000;
  const tutorialDuration = 120_000; // 2 min reading tutorial
  const injectionDueAtTutorialEnd = constructionInjectionAt - tutorialDuration;
  return {
    name: "Tutorial delays injection timer reset",
    bug: injectionDueAtTutorialEnd < 0,
    detail: `nextInjectionAt set at construction; after ${tutorialDuration / 1000}s tutorial, injection is ${Math.abs(injectionDueAtTutorialEnd / 1000)}s overdue`,
  };
}

const results = [];

results.push(auditTutorialInjectionTiming());

const noInput = simulateWaveProgress({ pauseOnLivelock: true, resolveLivelockMs: null });
results.push({
  name: "Wave completes without player input",
  bug: noInput.won,
  detail: noInput.won
    ? "Wave completed with zero player actions"
    : `Stalled: ${noInput.completed}/${WAVE_PARAMS[0].nodes} nodes, ${noInput.time / 1000}s elapsed`,
});

const withInput = simulateWaveProgress({ pauseOnLivelock: true, resolveLivelockMs: 5000 });
results.push({
  name: "Minimum viable play (2 clicks per livelock)",
  bug: false,
  detail: `Completed with ${withInput.playerActions} clicks in ${(withInput.time / 1000).toFixed(0)}s, ${withInput.locks} livelocks`,
});

const idleRatio = withInput.time > 0 ? 1 - (withInput.playerActions * 2) / (withInput.time / 1000) : 0;
results.push({
  name: "Player active time ratio estimate",
  bug: idleRatio > 0.95,
  detail: `~${(idleRatio * 100).toFixed(1)}% session time is passive watching (assuming 2s per click pair)`,
});

console.log("=== AGENT OVERSEER AUDIT HARNESS ===\n");
for (const r of results) {
  console.log(`${r.bug ? "[FAIL]" : "[INFO]"} ${r.name}`);
  console.log(`       ${r.detail}\n`);
}

// Check spec vs implementation file presence
const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const expected = [
  "src/workers/graphWorker.ts",
  "src/workers/agentWorker.ts",
  "src/store/gameStore.ts",
  "src/lib/oauthClient.ts",
];
const missing = expected.filter((p) => {
  try {
    readFileSync(join(root, p));
    return false;
  } catch {
    return true;
  }
});
console.log("=== SPEC GAP (missing files) ===");
for (const m of missing) console.log(`  MISSING: ${m}`);
console.log(`\n${missing.length} of ${expected.length} sampled spec artifacts absent.`);
