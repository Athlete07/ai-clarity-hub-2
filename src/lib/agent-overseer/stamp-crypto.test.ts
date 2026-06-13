import { describe, expect, it } from "vitest";
import { issueStampPayload, verifyStamp, verifyStampPayload, verifyStampSignature } from "./stamp-crypto";

describe("stamp-crypto", () => {
  it("issues and verifies a valid stamp", async () => {
    const stamp = await issueStampPayload("guest-abc123", 3, 4200);
    expect(stamp.sha256).toHaveLength(64);
    expect(stamp.signature).toHaveLength(64);
    expect(await verifyStamp(stamp)).toBe(true);
  });

  it("rejects tampered score", async () => {
    const stamp = await issueStampPayload("guest-abc123", 3, 4200);
    const tampered = { ...stamp, score: 999_999 };
    expect(await verifyStampPayload(tampered)).toBe(false);
    expect(await verifyStamp(tampered)).toBe(false);
  });

  it("rejects tampered signature", async () => {
    const stamp = await issueStampPayload("guest-abc123", 1, 100);
    const tampered = { ...stamp, signature: "0".repeat(64) };
    expect(await verifyStampSignature(tampered)).toBe(false);
    expect(await verifyStamp(tampered)).toBe(false);
  });
});
