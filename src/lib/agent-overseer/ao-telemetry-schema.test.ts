import { describe, expect, it } from "vitest";
import { telemetryBodySchema } from "@/routes/api/ao/telemetry";

describe("AO telemetry API schema", () => {
  it("accepts client TelemetryEvent payloads", () => {
    const events = [
      {
        event_type: "dispatch",
        node_id: "node_03",
        wave: 1,
        timestamp: "2026-06-13T12:00:00.000Z",
      },
      {
        event_type: "mutex_applied",
        node_id: "node_03",
        wave: 1,
        timestamp: "2026-06-13T12:00:05.000Z",
      },
      {
        event_type: "mutex_released",
        node_id: "node_03",
        wave: 1,
        timestamp: "2026-06-13T12:00:10.000Z",
        resolution_time_ms: 5000,
        score_delta: 995,
      },
      {
        event_type: "livelock_resolved",
        node_id: "node_03",
        wave: 1,
        timestamp: "2026-06-13T12:00:10.000Z",
        resolution_time_ms: 5000,
        score_delta: 995,
      },
      {
        event_type: "wave_complete",
        wave: 1,
        timestamp: "2026-06-13T12:05:00.000Z",
        score_delta: 1500,
      },
      {
        event_type: "game_over",
        wave: 10,
        timestamp: "2026-06-13T12:15:00.000Z",
        score_delta: 12000,
      },
    ];
    expect(telemetryBodySchema.safeParse(events).success).toBe(true);
  });

  it("rejects legacy type/at shape", () => {
    const legacy = [{ type: "dispatch", at: "2026-06-13T12:00:00.000Z", wave: 1 }];
    expect(telemetryBodySchema.safeParse(legacy).success).toBe(false);
  });

  it("rejects unknown event types", () => {
    const bad = [
      {
        event_type: "unknown_event",
        wave: 1,
        timestamp: "2026-06-13T12:00:00.000Z",
      },
    ];
    expect(telemetryBodySchema.safeParse(bad).success).toBe(false);
  });
});
