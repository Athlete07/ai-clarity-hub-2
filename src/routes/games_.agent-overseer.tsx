import { createFileRoute, redirect } from "@tanstack/react-router";

/** Legacy /games/agent-overseer → /simulations/agent-overseer */
export const Route = createFileRoute("/games_/agent-overseer")({
  beforeLoad: () => {
    throw redirect({ to: "/simulations/agent-overseer", replace: true });
  },
});
