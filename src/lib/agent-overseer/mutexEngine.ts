/**
 * Mutex coordination buffer. Workers would read buf[1] via Atomics.wait;
 * the main-thread engine mirrors pause via isWorkerPaused() for compatibility mode.
 */

let warned = false;

export function sabSupported(): boolean {
  return (
    typeof SharedArrayBuffer !== "undefined" &&
    (globalThis as { crossOriginIsolated?: boolean }).crossOriginIsolated === true
  );
}

export function initSharedBuffer(): Int32Array {
  if (sabSupported()) {
    return new Int32Array(new SharedArrayBuffer(64));
  }
  if (!warned && typeof console !== "undefined") {
    console.warn(
      "[AgentOverseer] SharedArrayBuffer unavailable — engine polls Int32Array pause signal",
    );
    warned = true;
  }
  return new Int32Array(16);
}

export function applyMutexLock(buf: Int32Array, nodeId: string): void {
  Atomics.store(buf, 0, 1);
  Atomics.store(buf, 1, 1);
  if (typeof window !== "undefined") {
    window.dispatchEvent(new CustomEvent("mutex:locked", { detail: { nodeId } }));
  }
}

export function releaseMutexLock(buf: Int32Array): void {
  Atomics.store(buf, 0, 0);
  Atomics.store(buf, 1, 0);
  try {
    Atomics.notify(buf, 1);
  } catch {
    // Non-shared buffer — engine polls instead.
  }
  if (typeof window !== "undefined") {
    window.dispatchEvent(new CustomEvent("mutex:released"));
  }
}

export function isLocked(buf: Int32Array): boolean {
  return Atomics.load(buf, 0) === 1;
}

export function isWorkerPaused(buf: Int32Array): boolean {
  return Atomics.load(buf, 1) === 1;
}

export function setLivelockFlag(buf: Int32Array, active: boolean): void {
  Atomics.store(buf, 2, active ? 1 : 0);
}

export function isLivelockFlagged(buf: Int32Array): boolean {
  return Atomics.load(buf, 2) === 1;
}
