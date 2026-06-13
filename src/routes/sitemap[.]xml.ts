import { createFileRoute } from "@tanstack/react-router";
import type {} from "@tanstack/react-start";
import { EXECUTIVE_KBS, chapterPath } from "@/lib/executive-kb";
import { FOUNDER_EXECUTIVE_KBS } from "@/lib/executive-kb-founder";
import { BUSINESS_LEADER_EXECUTIVE_KBS } from "@/lib/executive-kb-business-leader";
import { MARKETER_EXECUTIVE_KBS } from "@/lib/executive-kb-marketer";
import { BRAND } from "@/lib/brand";
import { securityHeadersInit } from "@/lib/security-headers";

const BASE_URL = BRAND.siteUrl;

interface SitemapEntry {
  path: string;
  changefreq?: "always" | "hourly" | "daily" | "weekly" | "monthly" | "yearly" | "never";
  priority?: string;
}

export const Route = createFileRoute("/sitemap.xml")({
  server: {
    handlers: {
      GET: async () => {
        const allKbs = [
          ...EXECUTIVE_KBS,
          ...FOUNDER_EXECUTIVE_KBS,
          ...BUSINESS_LEADER_EXECUTIVE_KBS,
          ...MARKETER_EXECUTIVE_KBS,
        ];
        const entries: SitemapEntry[] = [
          { path: "/", changefreq: "weekly", priority: "1.0" },
          { path: "/executive-kb", changefreq: "weekly", priority: "0.9" },
          { path: "/about", changefreq: "monthly", priority: "0.5" },
          { path: "/contact", changefreq: "monthly", priority: "0.4" },
          { path: "/creator", changefreq: "monthly", priority: "0.4" },
          { path: "/games", changefreq: "monthly", priority: "0.5" },
          { path: "/playbook", changefreq: "monthly", priority: "0.5" },
          { path: "/privacy-policy", changefreq: "yearly", priority: "0.3" },
          { path: "/terms-of-service", changefreq: "yearly", priority: "0.3" },
          ...allKbs.flatMap((p) =>
            p.sequence.map((c) => ({
              path: chapterPath(p.id, c.slug),
              changefreq: "monthly" as const,
              priority: "0.8",
            })),
          ),
        ];

        const urls = entries.map((e) =>
          [
            `  <url>`,
            `    <loc>${BASE_URL}${e.path}</loc>`,
            e.changefreq ? `    <changefreq>${e.changefreq}</changefreq>` : null,
            e.priority ? `    <priority>${e.priority}</priority>` : null,
            `  </url>`,
          ]
            .filter(Boolean)
            .join("\n"),
        );

        const xml = [
          `<?xml version="1.0" encoding="UTF-8"?>`,
          `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">`,
          ...urls,
          `</urlset>`,
        ].join("\n");

        return new Response(
          xml,
          securityHeadersInit({
            headers: {
              "Content-Type": "application/xml",
              "Cache-Control": "public, max-age=3600",
            },
          }),
        );
      },
    },
  },
});
