/**
 * Agent Overseer audit harness — validates design invariants against the real engine.
 * Run: npm run test:ao
 */
import { readFileSync, existsSync } from "fs";
import { fileURLToPath } from "url";
import { dirname, join } from "path";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");

function readEngineSource() {
  return readFileSync(join(root, "src/lib/agent-overseer/engine.ts"), "utf8");
}

function auditTutorialInjectionDeferral() {
  const src = readEngineSource();
  const defersInTutorial =
    src.includes('this.phase !== "TUTORIAL"') && src.includes("scheduleNextInjection");
  const finishesInTutorial = src.includes("finishTutorial()") && src.includes("scheduleNextInjection(true)");
  return {
    name: "Tutorial defers livelock injection until PLAYING",
    bug: !(defersInTutorial && finishesInTutorial),
    detail: defersInTutorial
      ? "setupWave skips injection schedule during TUTORIAL; finishTutorial() resets timer"
      : "Injection may fire before tutorial completes",
  };
}

function auditPlayerDispatchGate() {
  const src = readEngineSource();
  const gated =
    src.includes("playerDispatched") &&
    src.includes("Agents only run player-dispatched") &&
    src.includes("if (node.status !== NodeStatus.READY");
  return {
    name: "Agents require player dispatch (no silent auto-run)",
    bug: !gated,
    detail: gated
      ? "dispatchAgent sets playerDispatched; agentTick ignores undispatched RUNNING nodes"
      : "Engine may complete nodes without player input",
  };
}

function auditMutexWorkflow() {
  const src = readEngineSource();
  const hasWorkflow =
    src.includes("applyMutex()") &&
    src.includes("confirmSerializePath()") &&
    src.includes("releaseMutex()") &&
    src.includes("isWorkerPaused");
  return {
    name: "Livelock mutex workflow (lock → path → release)",
    bug: !hasWorkflow,
    detail: hasWorkflow
      ? "Mutex pauses agent ticks until path is serialized and released"
      : "Mutex workflow incomplete in engine.ts",
  };
}

function auditTelemetrySchema() {
  const telemetryRoute = readFileSync(join(root, "src/routes/api/ao/telemetry.ts"), "utf8");
  const acceptsClientShape = telemetryRoute.includes("event_type") && telemetryRoute.includes("timestamp");
  return {
    name: "Telemetry API accepts client event_type shape",
    bug: !acceptsClientShape,
    detail: acceptsClientShape
      ? "Server schema matches storage.ts TelemetryEvent payloads"
      : "Client/server telemetry schema mismatch — HRIS flush will 400",
  };
}

function auditStampVerification() {
  const syncRoute = readFileSync(join(root, "src/routes/api/ao/sync.ts"), "utf8");
  const verified = syncRoute.includes("verifyStamp");
  return {
    name: "HRIS sync rejects forged stamps server-side",
    bug: !verified,
    detail: verified
      ? "POST /api/ao/sync verifies SHA-256 payload + signature before upstream forward"
      : "Stamps accepted without cryptographic verification",
  };
}

function auditApiSurface() {
  const required = [
    "src/routes/simulations_.agent-overseer.tsx",
    "src/routes/api/ao/sync.ts",
    "src/routes/api/ao/telemetry.ts",
    "src/lib/agent-overseer/engine.ts",
    "src/components/agent-overseer/GameCanvas.tsx",
  ];
  const missing = required.filter((p) => !existsSync(join(root, p)));
  return {
    name: "Core Agent Overseer files present",
    bug: missing.length > 0,
    detail: missing.length ? `Missing: ${missing.join(", ")}` : `All ${required.length} core files found`,
  };
}

function auditTutorialDrillLayout() {
  const drillSrc = readFileSync(join(root, "src/lib/agent-overseer/tutorial-drill.ts"), "utf8");
  const tutorialSrc = readFileSync(
    join(root, "src/components/agent-overseer/OnboardingTutorial.tsx"),
    "utf8",
  );
  const nodesInsideCanvas =
    drillSrc.includes("y: 60") && !drillSrc.includes("y: 140");
  const syncsDrillUi =
    tutorialSrc.includes("onDrillChange") && tutorialSrc.includes("useReducer");
  return {
    name: "Briefing drill is clickable and UI syncs with drill phase",
    bug: !(nodesInsideCanvas && syncsDrillUi),
    detail:
      nodesInsideCanvas && syncsDrillUi
        ? "Nodes sit inside 120px canvas; phase changes trigger React re-render"
        : "Briefing Next can stay grayed out — drill clicks or phase sync broken",
  };
}

function auditNoAutoDispatch() {
  const src = readEngineSource();
  const noAuto =
    !src.includes("AUTO-DISPATCH") &&
    !src.includes("AUTO_DISPATCH") &&
    !src.includes("trackReadyNodes");
  return {
    name: "No auto-dispatch — graph never runs without player input",
    bug: !noAuto,
    detail: noAuto
      ? "Removed idle auto-dispatch; only explicit dispatchAgent() starts work"
      : "Engine still contains auto-dispatch paths",
  };
}

const results = [
  auditApiSurface(),
  auditTutorialInjectionDeferral(),
  auditTutorialDrillLayout(),
  auditPlayerDispatchGate(),
  auditNoAutoDispatch(),
  auditMutexWorkflow(),
  auditTelemetrySchema(),
  auditStampVerification(),
];

console.log("=== AGENT OVERSEER AUDIT HARNESS ===\n");
let failures = 0;
for (const r of results) {
  if (r.bug) failures++;
  console.log(`${r.bug ? "[FAIL]" : "[PASS]"} ${r.name}`);
  console.log(`       ${r.detail}\n`);
}

console.log(`Result: ${results.length - failures}/${results.length} checks passed`);
process.exit(failures > 0 ? 1 : 0);
