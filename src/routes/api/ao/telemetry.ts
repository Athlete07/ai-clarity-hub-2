import { createFileRoute } from "@tanstack/react-router";
import { z } from "zod";
import { securityHeadersInit } from "@/lib/security-headers";
import { getWorkerBindings } from "@/lib/worker-env";

const telemetryEventSchema = z.object({
  event_type: z.enum([
    "mutex_applied",
    "mutex_released",
    "node_selected",
    "dispatch",
    "livelock_resolved",
    "wave_complete",
    "game_over",
    "wave_failed",
  ]),
  wave: z.number().int().min(0).max(999),
  timestamp: z.string().max(64),
  node_id: z.string().max(128).optional(),
  resolution_time_ms: z.number().int().min(0).optional(),
  score_delta: z.number().int().optional(),
});

const telemetryBodySchema = z.array(telemetryEventSchema).max(200);

export const Route = createFileRoute("/api/ao/telemetry")({
  server: {
    handlers: {
      POST: async ({ request }) => {
        const contentType = request.headers.get("content-type") ?? "";
        if (!contentType.includes("application/json")) {
          return new Response("Unsupported Media Type", securityHeadersInit({ status: 415 }));
        }

        const raw = await request.text();
        if (raw.length > 8192) {
          return new Response("Payload Too Large", securityHeadersInit({ status: 413 }));
        }

        let json: unknown;
        try {
          json = JSON.parse(raw);
        } catch {
          return new Response("Bad Request", securityHeadersInit({ status: 400 }));
        }

        const parsed = telemetryBodySchema.safeParse(json);
        if (!parsed.success) {
          return new Response("Bad Request", securityHeadersInit({ status: 400 }));
        }

        const { HRIS_ENDPOINT, HRIS_TOKEN } = getWorkerBindings();
        if (!HRIS_ENDPOINT) {
          return new Response(null, securityHeadersInit({ status: 204 }));
        }

        try {
          const upstream = await fetch(HRIS_ENDPOINT, {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              ...(HRIS_TOKEN ? { Authorization: `Bearer ${HRIS_TOKEN}` } : {}),
            },
            body: JSON.stringify(parsed.data),
          });
          if (!upstream.ok) {
            return new Response("Bad Gateway", securityHeadersInit({ status: 502 }));
          }
        } catch {
          return new Response("Bad Gateway", securityHeadersInit({ status: 502 }));
        }

        return new Response(null, securityHeadersInit({ status: 204 }));
      },
    },
  },
});

// Re-export schema for tests
export { telemetryBodySchema };
