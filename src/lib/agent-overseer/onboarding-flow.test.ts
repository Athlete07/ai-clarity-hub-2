import { describe, expect, it } from "vitest";

/** Mirrors OnboardingTutorial STEPS gating — regression for grayed-out Next. */
const STEPS = [
  { drill: false },
  { drill: true },
  { drill: false },
] as const;

function isNextDisabled(step: number, drillPhase: string): boolean {
  const s = STEPS[step];
  const drillDone = drillPhase === "done";
  return Boolean(s.drill && !drillDone);
}

describe("OnboardingTutorial next-button gating", () => {
  it("enables Next on briefing 1/3 without completing a drill", () => {
    expect(isNextDisabled(0, "watch")).toBe(false);
  });

  it("disables Next on drill step until phase is done", () => {
    expect(isNextDisabled(1, "watch")).toBe(true);
    expect(isNextDisabled(1, "livelock")).toBe(true);
    expect(isNextDisabled(1, "release")).toBe(true);
    expect(isNextDisabled(1, "done")).toBe(false);
  });

  it("enables Next on final briefing after drill completed", () => {
    expect(isNextDisabled(2, "done")).toBe(false);
  });
});
