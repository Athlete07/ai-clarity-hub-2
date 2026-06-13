import type { CredentialStamp, LeaderboardEntry, SavedSession, TelemetryEvent } from "./types";

const PLAYER_KEY = "factorbeam:ao:playerId";
const TUTORIAL_KEY = "factorbeam:ao:tutorialDone";
const STAMPS_KEY = "factorbeam:ao:stamps";
const TELEMETRY_KEY = "factorbeam:ao:telemetry";
const SYNC_QUEUE_KEY = "factorbeam:ao:hrisQueue";
const SESSION_KEY = "factorbeam:ao:session";
const LEADERBOARD_KEY = "factorbeam:ao:leaderboard";

const isBrowser = () => typeof window !== "undefined";

function read<T>(key: string, fallback: T): T {
  if (!isBrowser()) return fallback;
  try {
    const raw = window.localStorage.getItem(key);
    return raw ? (JSON.parse(raw) as T) : fallback;
  } catch {
    return fallback;
  }
}

function write<T>(key: string, value: T): void {
  if (!isBrowser()) return;
  try {
    window.localStorage.setItem(key, JSON.stringify(value));
  } catch {
    // quota
  }
}

export function getPlayerId(): string {
  const existing = read<string | null>(PLAYER_KEY, null);
  if (existing) return existing;
  const id = `guest-${
    typeof crypto !== "undefined" && "randomUUID" in crypto
      ? crypto.randomUUID().slice(0, 8)
      : Math.random().toString(36).slice(2, 10)
  }`;
  write(PLAYER_KEY, id);
  return id;
}

export function isTutorialDone(): boolean {
  return read<boolean>(TUTORIAL_KEY, false);
}

export function setTutorialDone(): void {
  write(TUTORIAL_KEY, true);
}

export function loadStamps(): CredentialStamp[] {
  return read<CredentialStamp[]>(STAMPS_KEY, []);
}

export function saveStamp(stamp: CredentialStamp): void {
  write(STAMPS_KEY, [...loadStamps(), stamp]);
}

let telemetryBuffer: TelemetryEvent[] = [];
let telemetryFlushTimer: ReturnType<typeof setTimeout> | null = null;

function persistTelemetry(all: TelemetryEvent[]): void {
  write(TELEMETRY_KEY, all.slice(-300));
}

/** Batched telemetry — flushes to localStorage at most every 2s. */
export function logTelemetry(event: TelemetryEvent): void {
  telemetryBuffer.push(event);
  if (telemetryFlushTimer) return;
  telemetryFlushTimer = setTimeout(() => {
    const existing = read<TelemetryEvent[]>(TELEMETRY_KEY, []);
    persistTelemetry([...existing, ...telemetryBuffer]);
    telemetryBuffer = [];
    telemetryFlushTimer = null;
  }, 2000);
}

export function flushTelemetryNow(): TelemetryEvent[] {
  const existing = read<TelemetryEvent[]>(TELEMETRY_KEY, []);
  const merged = [...existing, ...telemetryBuffer];
  telemetryBuffer = [];
  if (telemetryFlushTimer) {
    clearTimeout(telemetryFlushTimer);
    telemetryFlushTimer = null;
  }
  persistTelemetry(merged);
  return merged;
}

const AO_TELEMETRY_API = "/api/ao/telemetry";

export async function flushTelemetry(): Promise<boolean> {
  const all = flushTelemetryNow();
  if (!all.length) return true;
  try {
    const res = await fetch(AO_TELEMETRY_API, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(all),
    });
    if (res.ok || res.status === 204) {
      write(TELEMETRY_KEY, []);
      return true;
    }
    return false;
  } catch {
    return false;
  }
}

export function queueStampForSync(stamp: CredentialStamp): void {
  const queue = read<CredentialStamp[]>(SYNC_QUEUE_KEY, []);
  queue.push(stamp);
  write(SYNC_QUEUE_KEY, queue);
}

export function readSyncQueue(): CredentialStamp[] {
  return read<CredentialStamp[]>(SYNC_QUEUE_KEY, []);
}

export function clearSyncQueue(): void {
  write(SYNC_QUEUE_KEY, []);
}

export function saveSession(session: SavedSession): void {
  write(SESSION_KEY, session);
}

export function loadSession(): SavedSession | null {
  const s = read<SavedSession | null>(SESSION_KEY, null);
  if (!s || s.version !== 1) return null;
  if (Date.now() - s.savedAt > 20 * 60_000) {
    clearSession();
    return null;
  }
  return s;
}

export function clearSession(): void {
  if (!isBrowser()) return;
  try {
    window.localStorage.removeItem(SESSION_KEY);
  } catch {
    // ignore
  }
}

export function loadLeaderboard(): LeaderboardEntry[] {
  return read<LeaderboardEntry[]>(LEADERBOARD_KEY, []);
}

export function submitLeaderboard(entry: LeaderboardEntry): LeaderboardEntry[] {
  const board = [...loadLeaderboard(), entry]
    .sort((a, b) => b.score - a.score)
    .slice(0, 10);
  write(LEADERBOARD_KEY, board);
  return board;
}
