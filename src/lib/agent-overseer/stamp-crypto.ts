import type { CredentialStamp } from "./types";

export async function digestHex(payload: string): Promise<string> {
  if (typeof crypto !== "undefined" && crypto.subtle) {
    const hashBuffer = await crypto.subtle.digest("SHA-256", new TextEncoder().encode(payload));
    return Array.from(new Uint8Array(hashBuffer))
      .map((b) => b.toString(16).padStart(2, "0"))
      .join("");
  }
  let h = 0x811c9dc5;
  for (let i = 0; i < payload.length; i++) {
    h ^= payload.charCodeAt(i);
    h = Math.imul(h, 0x01000193);
  }
  return (h >>> 0).toString(16).padStart(64, "0");
}

export async function issueStampPayload(
  playerId: string,
  wave: number,
  score: number,
): Promise<CredentialStamp> {
  const timestamp = new Date().toISOString();
  const payload = `${playerId}:wave_${wave}:${score}:${timestamp}`;
  const sha256 = await digestHex(payload);
  const signature = await digestHex(`${sha256}:${playerId}:factorbeam-ao-v1`);
  return { wave, timestamp, sha256, playerId, score, signature };
}

export async function verifyStampSignature(stamp: CredentialStamp): Promise<boolean> {
  const expected = await digestHex(`${stamp.sha256}:${stamp.playerId}:factorbeam-ao-v1`);
  return expected === stamp.signature;
}

/** Recomputes the content hash to detect tampered wave/score/timestamp fields. */
export async function verifyStampPayload(stamp: CredentialStamp): Promise<boolean> {
  const payload = `${stamp.playerId}:wave_${stamp.wave}:${stamp.score}:${stamp.timestamp}`;
  const expected = await digestHex(payload);
  return expected === stamp.sha256;
}

export async function verifyStamp(stamp: CredentialStamp): Promise<boolean> {
  return (await verifyStampPayload(stamp)) && (await verifyStampSignature(stamp));
}
