import type { CredentialStamp } from "./types";
import { clearSyncQueue, queueStampForSync, readSyncQueue } from "./storage";

async function digestHex(payload: string): Promise<string> {
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

/** SHA-256 stamp + client integrity signature (verified locally on leaderboard submit). */
export async function issueStamp(
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

export async function verifyStamp(stamp: CredentialStamp): Promise<boolean> {
  const expected = await digestHex(`${stamp.sha256}:${stamp.playerId}:factorbeam-ao-v1`);
  return expected === stamp.signature;
}

export async function syncToHRIS(
  stamp: CredentialStamp,
  endpoint: string,
  token: string,
): Promise<void> {
  if (!endpoint) return;
  await fetch(endpoint, {
    method: "POST",
    headers: { Authorization: `Bearer ${token}`, "Content-Type": "application/json" },
    body: JSON.stringify(stamp),
  });
}

export function queueStamp(stamp: CredentialStamp): void {
  queueStampForSync(stamp);
}

export async function retryQueuedSync(endpoint: string, token: string): Promise<boolean> {
  if (!endpoint) return false;
  const queue = readSyncQueue();
  if (!queue.length) return true;
  try {
    for (const stamp of queue) {
      if (!(await verifyStamp(stamp))) continue;
      await syncToHRIS(stamp, endpoint, token);
    }
    clearSyncQueue();
    return true;
  } catch {
    return false;
  }
}
