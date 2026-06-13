import type { CredentialStamp } from "./types";
import { clearSyncQueue, queueStampForSync, readSyncQueue } from "./storage";
import { issueStampPayload, verifyStamp } from "./stamp-crypto";

/** SHA-256 stamp + client integrity signature. */
export async function issueStamp(
  playerId: string,
  wave: number,
  score: number,
): Promise<CredentialStamp> {
  return issueStampPayload(playerId, wave, score);
}

export { verifyStamp } from "./stamp-crypto";

const AO_SYNC_API = "/api/ao/sync";

/** Forwards stamp to the server proxy — HRIS credentials never leave the Worker. */
export async function syncToHRIS(stamp: CredentialStamp): Promise<Response> {
  return fetch(AO_SYNC_API, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(stamp),
  });
}

export function queueStamp(stamp: CredentialStamp): void {
  queueStampForSync(stamp);
}

export async function retryQueuedSync(): Promise<boolean> {
  const queue = readSyncQueue();
  if (!queue.length) return true;
  try {
    for (const stamp of queue) {
      if (!(await verifyStamp(stamp))) continue;
      const res = await syncToHRIS(stamp);
      if (!res.ok && res.status !== 204) return false;
    }
    clearSyncQueue();
    return true;
  } catch {
    return false;
  }
}
