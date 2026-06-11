import { createFileRoute, Link } from "@tanstack/react-router";
import { Nav, Footer } from "@/components/site-nav";
import { ArrowRight } from "lucide-react";
import { AuthorPortrait } from "@/components/author-portrait";
import { BRAND } from "@/lib/brand";
import { CREATOR } from "@/lib/creator";

export const Route = createFileRoute("/creator")({
  head: () => {
    const description = `${CREATOR.hook[0]} ${CREATOR.hook[1]}`;

    const personJsonLd = {
      "@context": "https://schema.org",
      "@type": "Person",
      name: CREATOR.name,
      jobTitle: CREATOR.title,
      description,
      image: CREATOR.photo,
      url: "/creator",
      email: `mailto:${CREATOR.socials.email}`,
      worksFor: {
        "@type": "Organization",
        name: BRAND.name,
      },
    };

    return {
      meta: [
        { title: `${CREATOR.pageName} — ${CREATOR.name} · ${BRAND.name}` },
        { name: "description", content: description },
        { name: "author", content: CREATOR.name },
        {
          property: "og:title",
          content: `${CREATOR.pageName} — ${CREATOR.name}`,
        },
        { property: "og:description", content: description },
        { property: "og:url", content: "/creator" },
        { property: "og:type", content: "profile" },
        { property: "og:image", content: CREATOR.photo },
        { property: "profile:first_name", content: CREATOR.name.split(" ")[0] },
        {
          property: "profile:last_name",
          content: CREATOR.name.split(" ").slice(1).join(" "),
        },
      ],
      links: [{ rel: "canonical", href: "/creator" }],
      scripts: [
        {
          type: "application/ld+json",
          children: JSON.stringify(personJsonLd),
        },
      ],
    };
  },
  component: CuratorBoxPage,
});

function CuratorBoxPage() {
  return (
    <>
      <Nav />
      <main className="overflow-x-hidden">
        <section className="mx-auto max-w-xl px-5 pb-24 pt-16 sm:px-6 sm:pb-32 sm:pt-24">
          <p className="section-label text-center">{CREATOR.pageName}</p>

          <div className="mt-10 flex justify-center">
            <AuthorPortrait size="spotlight" tone="editorial" priority />
          </div>

          <div className="mt-10 text-center">
            <h1 className="text-[28px] font-medium tracking-[-0.03em] text-foreground sm:text-[34px]">
              {CREATOR.name}
            </h1>
            <p className="mt-2 text-[15px] font-medium text-purple sm:text-[16px]">
              {CREATOR.title}
              <span className="font-normal text-muted-foreground"> · {CREATOR.brand}</span>
            </p>
            <p className="mt-1 text-[13px] text-muted-foreground">{CREATOR.location}</p>
          </div>

          <div className="mt-10 space-y-4 border-y border-border/80 py-10 text-center">
            <p className="text-[17px] font-medium leading-[1.55] tracking-[-0.01em] text-foreground sm:text-[18px]">
              {CREATOR.hook[0]}
            </p>
            <p className="text-[16px] leading-[1.65] text-muted-foreground sm:text-[17px]">
              {CREATOR.hook[1]}
            </p>
          </div>

          <div className="mt-10 flex justify-center">
            <a
              href={CREATOR.methodologyCta.href}
              className="group inline-flex items-center gap-2 text-[14px] font-medium text-purple transition-colors hover:text-purple-dark"
            >
              <ArrowRight
                size={15}
                className="transition-transform group-hover:translate-x-0.5"
                aria-hidden
              />
              {CREATOR.methodologyCta.label}
            </a>
          </div>

          <p className="mt-14 text-center text-[12px] leading-relaxed text-muted-foreground">
            Questions or corrections?{" "}
            <Link to="/contact" className="text-foreground/80 underline-offset-2 hover:underline">
              Get in touch
            </Link>
          </p>
        </section>
      </main>
      <Footer />
    </>
  );
}
