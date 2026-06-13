import { describe, expect, it, vi } from "vitest";
import { TutorialDrill } from "./tutorial-drill";
import { NodeStatus } from "./types";

/** Canvas height used by OnboardingTutorial — nodes must sit inside this band. */
const CANVAS_H = 120;
const HIT_RADIUS = 28;

describe("TutorialDrill", () => {
  it("places nodes inside the briefing canvas hit area", () => {
    const drill = new TutorialDrill();
    for (const n of drill.nodes) {
      expect(n.y).toBeGreaterThanOrEqual(HIT_RADIUS);
      expect(n.y).toBeLessThanOrEqual(CANVAS_H - HIT_RADIUS);
    }
  });

  it("walks through the full mutex workflow", () => {
    const drill = new TutorialDrill();
    drill.phase = "livelock";
    drill.nodes[1].status = NodeStatus.LIVELOCK;

    drill.select("t2");
    expect(drill.phase).toBe("lock");

    expect(drill.applyMutex()).toBe(true);
    expect(drill.nodes[1].status).toBe(NodeStatus.LOCKED);
    expect(drill.phase).toBe("path");

    expect(drill.serializePath()).toBe(true);
    expect(drill.phase).toBe("release");

    expect(drill.release()).toBe(true);
    expect(drill.phase).toBe("done");
    expect(drill.nodes[1].status).toBe(NodeStatus.COMPLETED);
    expect(drill.nodes[2].status).toBe(NodeStatus.READY);
  });

  it("requires path confirmation before release", () => {
    const drill = new TutorialDrill();
    drill.phase = "release";
    drill.pathConfirmed = false;
    expect(drill.release()).toBe(false);
  });

  it("returns the dependency path for scoring", () => {
    const drill = new TutorialDrill();
    expect(drill.getPath()).toEqual(["t1", "t2"]);
  });

  it("selects infer during livelock to unlock mutex step", () => {
    const drill = new TutorialDrill();
    drill.phase = "livelock";
    drill.nodes[1].status = NodeStatus.LIVELOCK;
    drill.select("t2");
    expect(drill.phase).toBe("lock");
  });

  it("auto-advances from watch to livelock", () => {
    const drill = new TutorialDrill();
    vi.useFakeTimers();
    vi.advanceTimersByTime(2500);
    drill.tick();
    expect(drill.phase).toBe("livelock");
    expect(drill.nodes[1].status).toBe(NodeStatus.LIVELOCK);
    vi.useRealTimers();
  });
});
