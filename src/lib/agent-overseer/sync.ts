import { flushTelemetry, flushTelemetryNow } from "./storage";
import { retryQueuedSync } from "./credentialIssuer";

const HRIS_ENDPOINT = import.meta.env.VITE_AO_HRIS_ENDPOINT ?? "";
const HRIS_TOKEN = import.meta.env.VITE_AO_HRIS_TOKEN ?? "";

let wired = false;

export function initAgentOverseerSync(): () => void {
  if (wired || typeof window === "undefined") return () => {};
  wired = true;

  const onOnline = () => {
    void retryQueuedSync(HRIS_ENDPOINT, HRIS_TOKEN);
    if (HRIS_ENDPOINT) void flushTelemetry(HRIS_ENDPOINT);
  };

  const onUnload = () => flushTelemetryNow();

  window.addEventListener("online", onOnline);
  window.addEventListener("beforeunload", onUnload);

  if (navigator.onLine && HRIS_ENDPOINT) void onOnline();

  return () => {
    window.removeEventListener("online", onOnline);
    window.removeEventListener("beforeunload", onUnload);
    wired = false;
  };
}

export function hrisConfigured(): boolean {
  return Boolean(HRIS_ENDPOINT);
}
