import { createFileRoute, Outlet } from "@tanstack/react-router";

export const Route = createFileRoute("/playbook")({
  head: () => ({
    meta: [
      { title: "AI playbook chapters — FactorBeam" },
      {
        name: "description",
        content:
          "Read FactorBeam's AI playbook chapters — plain-English explanations of how modern AI actually works, written for product managers.",
      },
      { property: "og:title", content: "AI playbook chapters — FactorBeam" },
      {
        property: "og:description",
        content:
          "Plain-English chapters on how modern AI actually works — written for product managers.",
      },
      { property: "og:type", content: "website" },
    ],
  }),
  component: () => <Outlet />,
});
