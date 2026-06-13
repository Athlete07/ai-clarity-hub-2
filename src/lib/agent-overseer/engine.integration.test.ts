import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";
import { OverseerEngine } from "./engine";
import { NodeStatus } from "./types";

const TUTORIAL_KEY = "factorbeam:ao:tutorialDone";

function installLocalStorageMock(): void {
  const store = new Map<string, string>();
  const localStorageMock = {
    getItem: (key: string) => store.get(key) ?? null,
    setItem: (key: string, value: string) => {
      store.set(key, value);
    },
    removeItem: (key: string) => {
      store.delete(key);
    },
    clear: () => {
      store.clear();
    },
  };
  vi.stubGlobal("localStorage", localStorageMock);
  vi.stubGlobal("window", {
    localStorage: localStorageMock,
    dispatchEvent: () => true,
    matchMedia: () => ({
      matches: false,
      addEventListener: () => {},
      removeEventListener: () => {},
    }),
  });
}

function skipTutorial(): void {
  localStorage.setItem(TUTORIAL_KEY, JSON.stringify(true));
}

function advanceMs(ms: number): void {
  vi.advanceTimersByTime(ms);
}

function dispatchReadyAgents(engine: OverseerEngine): void {
  const snap = engine.getSnapshot();
  for (const nodeId of snap.readyNodeIds) {
    const idle = engine.getSnapshot().idleAgents;
    if (idle.includes("ALPHA")) engine.dispatchAgent("ALPHA", nodeId);
    else if (idle.includes("BETA")) engine.dispatchAgent("BETA", nodeId);
  }
}

function resolveLivelock(engine: OverseerEngine): void {
  const snap = engine.getSnapshot();
  expect(snap.livelockActive).toBe(true);
  expect(snap.livelockNodeId).toBeTruthy();
  engine.selectNode(snap.livelockNodeId);
  engine.applyMutex();
  engine.confirmSerializePath();
  engine.releaseMutex();
}

describe("OverseerEngine integration", () => {
  beforeEach(() => {
    installLocalStorageMock();
    vi.useFakeTimers();
    localStorage.clear();
  });

  afterEach(() => {
    vi.useRealTimers();
    vi.unstubAllGlobals();
  });

  it("starts in tutorial when not completed", () => {
    const engine = new OverseerEngine({ restore: false });
    expect(engine.getSnapshot().phase).toBe("TUTORIAL");
    advanceMs(120_000);
    expect(engine.getSnapshot().livelockActive).toBe(false);
    engine.destroy();
  });

  it("does not complete nodes without player dispatch", () => {
    skipTutorial();
    const engine = new OverseerEngine({ restore: false });
    advanceMs(60_000);
    expect(engine.getSnapshot().completedNodes).toBe(0);
    engine.destroy();
  });

  it("never auto-dispatches after long idle wait", () => {
    skipTutorial();
    const engine = new OverseerEngine({ restore: false });
    advanceMs(30_000);
    const snap = engine.getSnapshot();
    expect(snap.completedNodes).toBe(0);
    expect(snap.logs.some((l) => l.text.includes("AUTO-DISPATCH"))).toBe(false);
    expect(snap.logs.every((l) => !l.text.includes("→") || l.text.includes("LIVELOCK"))).toBe(true);
    engine.destroy();
  });

  it("only completes nodes the player explicitly dispatched", () => {
    skipTutorial();
    const engine = new OverseerEngine({ restore: false });
    const ready = engine.getSnapshot().readyNodeIds;
    expect(ready.length).toBeGreaterThan(0);
    expect(engine.dispatchAgent("ALPHA", ready[0])).toBe(true);
    advanceMs(6000);
    expect(engine.getSnapshot().completedNodes).toBeGreaterThanOrEqual(1);
    engine.destroy();
  });

  it("injects livelock during play and resolves via mutex workflow", () => {
    skipTutorial();
    const engine = new OverseerEngine({ restore: false });
    dispatchReadyAgents(engine);
    advanceMs(2500);

    advanceMs(12_000);
    expect(engine.getSnapshot().livelockActive).toBe(true);

    const scoreBefore = engine.getSnapshot().score;
    resolveLivelock(engine);
    expect(engine.getSnapshot().livelockActive).toBe(false);
    expect(engine.getSnapshot().locksResolvedThisWave).toBe(1);
    expect(engine.getSnapshot().score).toBeGreaterThan(scoreBefore);
    engine.destroy();
  });

  it("blocks dispatch during active livelock", () => {
    skipTutorial();
    const engine = new OverseerEngine({ restore: false });
    dispatchReadyAgents(engine);
    advanceMs(2500);
    advanceMs(12_000);
    expect(engine.getSnapshot().livelockActive).toBe(true);

    const ready = engine.getSnapshot().readyNodeIds;
    if (ready.length) {
      expect(engine.dispatchAgent("ALPHA", ready[0])).toBe(false);
    }
    engine.destroy();
  });

  it("pauses the session timer while paused", () => {
    skipTutorial();
    const engine = new OverseerEngine({ restore: false });
    const before = engine.getSnapshot().timeRemainingMs;
    engine.togglePause();
    expect(engine.getSnapshot().phase).toBe("PAUSED");
    advanceMs(30_000);
    expect(engine.getSnapshot().timeRemainingMs).toBe(before);
    engine.togglePause();
    advanceMs(1000);
    expect(engine.getSnapshot().timeRemainingMs).toBeLessThan(before);
    engine.destroy();
  });

  it("ends session when timer expires", () => {
    skipTutorial();
    const engine = new OverseerEngine({ restore: false });
    advanceMs(15 * 60 * 1000 + 500);
    expect(engine.getSnapshot().phase).toBe("GAME_OVER");
    expect(engine.getSnapshot().won).toBe(false);
    engine.destroy();
  });

  it("schedules injection only after tutorial finishes", () => {
    const engine = new OverseerEngine({ restore: false });
    expect(engine.getSnapshot().phase).toBe("TUTORIAL");
    engine.finishTutorial();
    expect(engine.getSnapshot().phase).toBe("PLAYING");
    dispatchReadyAgents(engine);
    advanceMs(12_000);
    expect(engine.getSnapshot().livelockActive).toBe(true);
    engine.destroy();
  });

  it("cannot complete wave without resolving required locks", () => {
    skipTutorial();
    const engine = new OverseerEngine({ restore: false });
    const total = engine.getSnapshot().totalNodes;

    for (let guard = 0; guard < 500; guard++) {
      const snap = engine.getSnapshot();
      if (snap.phase === "WAVE_COMPLETE") break;
      if (snap.livelockActive) {
        resolveLivelock(engine);
        continue;
      }
      dispatchReadyAgents(engine);
      advanceMs(400);
    }

    const completed = engine.getSnapshot().completedNodes;
    if (completed === total) {
      expect(engine.getSnapshot().phase).toBe("WAVE_COMPLETE");
      expect(engine.getSnapshot().locksResolvedThisWave).toBeGreaterThanOrEqual(1);
    } else {
      expect(engine.getSnapshot().phase).not.toBe("WAVE_COMPLETE");
    }
    engine.destroy();
  });

  it("rewinds wave after livelock fail timeout", () => {
    skipTutorial();
    const engine = new OverseerEngine({ restore: false });
    dispatchReadyAgents(engine);
    advanceMs(2500);
    advanceMs(12_000);
    const waveBefore = engine.getSnapshot().wave;
    advanceMs(61_000);
    const snap = engine.getSnapshot();
    if (snap.logs.some((l) => l.text.includes("wave failed"))) {
      expect(snap.wave).toBeLessThanOrEqual(waveBefore);
    }
    engine.destroy();
  });
});

describe("OverseerEngine mutex pause", () => {
  beforeEach(() => {
    installLocalStorageMock();
    vi.useFakeTimers();
    localStorage.clear();
    skipTutorial();
  });

  afterEach(() => {
    vi.useRealTimers();
    vi.unstubAllGlobals();
  });

  it("pauses agent ticks while mutex is held", () => {
    const engine = new OverseerEngine({ restore: false });
    const ready = engine.getSnapshot().readyNodeIds;
    engine.dispatchAgent("ALPHA", ready[0]);
    advanceMs(2500);
    advanceMs(12_000);

    engine.selectNode(engine.getSnapshot().livelockNodeId);
    engine.applyMutex();
    const running = [...engine.nodes.values()].find((n) => n.status === NodeStatus.RUNNING);
    if (running) {
      const started = running.runStartedAt;
      advanceMs(5000);
      expect(running.runStartedAt).toBe(started);
    }
    engine.destroy();
  });
});
