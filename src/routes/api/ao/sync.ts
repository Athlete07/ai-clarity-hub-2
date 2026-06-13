import { createFileRoute } from "@tanstack/react-router";
import { z } from "zod";
import { verifyStamp } from "@/lib/agent-overseer/stamp-crypto";
import { securityHeadersInit } from "@/lib/security-headers";
import { getWorkerBindings } from "@/lib/worker-env";

const stampSchema = z.object({
  wave: z.number().int().min(0).max(999),
  timestamp: z.string().max(64),
  sha256: z.string().max(128),
  playerId: z.string().max(128),
  score: z.number().int().min(0).max(99_999_999),
  signature: z.string().max(128),
});

export const Route = createFileRoute("/api/ao/sync")({
  server: {
    handlers: {
      POST: async ({ request }) => {
        const contentType = request.headers.get("content-type") ?? "";
        if (!contentType.includes("application/json")) {
          return new Response("Unsupported Media Type", securityHeadersInit({ status: 415 }));
        }

        const raw = await request.text();
        if (raw.length > 4096) {
          return new Response("Payload Too Large", securityHeadersInit({ status: 413 }));
        }

        let json: unknown;
        try {
          json = JSON.parse(raw);
        } catch {
          return new Response("Bad Request", securityHeadersInit({ status: 400 }));
        }

        const parsed = stampSchema.safeParse(json);
        if (!parsed.success) {
          return new Response("Bad Request", securityHeadersInit({ status: 400 }));
        }

        if (!(await verifyStamp(parsed.data))) {
          return new Response("Forbidden", securityHeadersInit({ status: 403 }));
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

export { stampSchema };
