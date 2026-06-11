import { createFileRoute, redirect } from "@tanstack/react-router";

/** Legacy /games → /simulations */
export const Route = createFileRoute("/games")({
  beforeLoad: () => {
    throw redirect({ to: "/simulations", replace: true });
  },
});
