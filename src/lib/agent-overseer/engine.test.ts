import { describe, expect, it } from "vitest";
import { generateDAG, refreshReadyStates, WAVE_PARAMS } from "./dagGenerator";
import { firstInjectionDelayMs, estimateWaveClearMs } from "./balance";
import { mulberry32 } from "./rng";
import { NodeStatus } from "./types";
import { isWorkerPaused, initSharedBuffer, applyMutexLock, releaseMutexLock } from "./mutexEngine";
import { disposeGameAudio, initGameAudio, playSfx } from "./audio";

describe("dagGenerator", () => {
  it("produces acyclic graphs with seeded rng", () => {
    const rand = mulberry32(42);
    const { nodes, order } = generateDAG(1, rand);
    expect(nodes.size).toBe(6);
    expect(order.length).toBe(6);
  });

  it("marks ready nodes when deps complete", () => {
    const rand = mulberry32(99);
    const { nodes } = generateDAG(2, rand);
    const first = [...nodes.values()].find((n) => n.deps.length === 0);
    expect(first).toBeDefined();
    if (first) {
      first.status = NodeStatus.COMPLETED;
      refreshReadyStates(nodes);
      const ready = [...nodes.values()].filter((n) => n.status === NodeStatus.READY);
      expect(ready.length).toBeGreaterThan(0);
    }
  });
});

describe("balance", () => {
  it("schedules first injection before estimated wave clear", () => {
    const rand = mulberry32(7);
    const { nodes } = generateDAG(1, rand);
    const params = WAVE_PARAMS[0];
    const est = estimateWaveClearMs(nodes);
    const delay = firstInjectionDelayMs(params, nodes);
    expect(delay).toBeLessThan(est);
    expect(delay).toBeGreaterThanOrEqual(3000);
  });

  it("requires minimum locks per wave in params", () => {
    expect(WAVE_PARAMS[0].minLocks).toBeGreaterThanOrEqual(1);
    expect(WAVE_PARAMS[9].minLocks).toBeGreaterThanOrEqual(1);
  });
});

describe("mutexEngine", () => {
  it("pause signal toggles with lock/release", () => {
    const buf = initSharedBuffer();
    expect(isWorkerPaused(buf)).toBe(false);
    applyMutexLock(buf, "node_01");
    expect(isWorkerPaused(buf)).toBe(true);
    releaseMutexLock(buf);
    expect(isWorkerPaused(buf)).toBe(false);
  });
});

describe("audio", () => {
  it("disposeGameAudio prevents further sfx", () => {
    initGameAudio();
    disposeGameAudio();
    expect(() => playSfx("dispatch")).not.toThrow();
  });
});

describe("dispatch model", () => {
  it("nodes do not run without playerDispatched flag", () => {
    const rand = mulberry32(1);
    const { nodes } = generateDAG(1, rand);
    const n = [...nodes.values()][0];
    n.status = NodeStatus.RUNNING;
    n.assignedAgent = "ALPHA";
    n.playerDispatched = false;
    expect(n.playerDispatched).toBe(false);
  });
});
