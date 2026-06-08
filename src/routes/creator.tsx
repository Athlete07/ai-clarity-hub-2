import { createFileRoute, Link } from "@tanstack/react-router";
import { Nav, Footer } from "@/components/site-nav";
import { Linkedin, Twitter, Github, Globe, Mail, ArrowRight } from "lucide-react";
import { CREATOR } from "@/lib/creator";

export const Route = createFileRoute("/creator")({
  head: () => {
    const sameAs = [
      CREATOR.socials.website,
      CREATOR.socials.linkedin,
      CREATOR.socials.twitter,
      CREATOR.socials.github,
    ].filter(Boolean);

    const personJsonLd = {
      "@context": "https://schema.org",
      "@type": "Person",
      name: CREATOR.name,
      jobTitle: CREATOR.role,
      description: CREATOR.shortBio,
      image: CREATOR.photo,
      url: "/creator",
      email: `mailto:${CREATOR.socials.email}`,
      knowsAbout: CREATOR.expertise,
      sameAs,
      creator: {
        "@type": "WebSite",
        name: "FactorBeam",
        url: "/",
      },
    };

    return {
      meta: [
        { title: `${CREATOR.name} — Author of FactorBeam` },
        {
          name: "description",
          content: `${CREATOR.name} is the ${CREATOR.role}. ${CREATOR.shortBio}`,
        },
        { name: "author", content: CREATOR.name },
        { property: "og:title", content: `${CREATOR.name} — Author of FactorBeam` },
        { property: "og:description", content: CREATOR.shortBio },
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
  component: CreatorPage,
});

function CreatorPage() {
  return (
    <>
      <Nav />
      <main className="overflow-x-hidden">
        {/* Hero */}
        <section className="relative">
          <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
            <div className="mesh-glow-1 absolute -top-24 left-1/2 h-[420px] w-[420px] -translate-x-1/2 rounded-full bg-purple-light/50 blur-[100px] dark:bg-purple-light/10" />
          </div>

          <div className="mx-auto max-w-[880px] px-5 pt-16 pb-10 sm:px-6 sm:pt-24 sm:pb-14">
            <div className="section-label mb-6">Author</div>
            <div className="flex flex-col items-start gap-8 sm:flex-row sm:items-center sm:gap-10">
              <div className="shrink-0">
                <img
                  src={CREATOR.photo}
                  alt={`Portrait of ${CREATOR.name}, ${CREATOR.role}`}
                  width={160}
                  height={160}
                  loading="eager"
                  className="h-32 w-32 rounded-2xl object-cover hairline sm:h-40 sm:w-40"
                />
              </div>
              <div>
                <h1 className="text-[32px] font-medium leading-[1.05] tracking-[-0.02em] sm:text-[44px]">
                  {CREATOR.name}
                </h1>
                <p className="mt-2 text-[14px] text-purple sm:text-[15px]">
                  {CREATOR.role}
                </p>
                <p className="mt-1 text-[13px] text-muted-foreground">
                  {CREATOR.location}
                </p>
                <p className="mt-4 max-w-[560px] text-[15px] leading-relaxed text-foreground/85 sm:text-[16px]">
                  {CREATOR.shortBio}
                </p>

                {/* Socials */}
                <div className="mt-5 flex flex-wrap items-center gap-2">
                  <SocialLink href={CREATOR.socials.linkedin} icon={Linkedin} label="LinkedIn" />
                  <SocialLink href={CREATOR.socials.twitter} icon={Twitter} label="Twitter" />
                  <SocialLink href={CREATOR.socials.github} icon={Github} label="GitHub" />
                  <SocialLink href={CREATOR.socials.website} icon={Globe} label="Website" />
                  <SocialLink
                    href={`mailto:${CREATOR.socials.email}`}
                    icon={Mail}
                    label="Email"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Bio */}
        <section className="mx-auto max-w-[680px] px-5 pb-16 sm:px-6 sm:pb-20">
          <h2 className="text-[20px] font-medium tracking-tight sm:text-[24px]">About</h2>
          <div className="mt-4 space-y-4 text-[15px] leading-[1.75] text-foreground/85 sm:text-[16px]">
            {CREATOR.longBio.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
            <p className="hairline rounded-xl bg-muted/30 px-4 py-3 text-[14px] leading-relaxed text-muted-foreground sm:px-5 sm:py-4 sm:text-[15px]">
              {CREATOR.aiDisclosure}
            </p>
          </div>
        </section>

        {/* Credentials & Expertise */}
        <section className="mx-auto max-w-[880px] px-5 pb-20 sm:px-6 sm:pb-28">
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <div className="hairline rounded-2xl bg-card p-6 sm:p-8">
              <div className="section-label mb-5">Credentials</div>
              <ul className="space-y-3 text-[14px] leading-relaxed text-foreground/85 sm:text-[15px]">
                {CREATOR.credentials.map((c) => (
                  <li key={c} className="flex gap-3">
                    <span
                      aria-hidden
                      className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-purple"
                    />
                    {c}
                  </li>
                ))}
              </ul>
            </div>
            <div className="hairline rounded-2xl bg-card p-6 sm:p-8">
              <div className="section-label mb-5">Areas of expertise</div>
              <div className="flex flex-wrap gap-2">
                {CREATOR.expertise.map((e) => (
                  <span
                    key={e}
                    className="rounded-full border border-border/60 bg-muted/40 px-3 py-1 text-[12px] font-medium text-muted-foreground"
                  >
                    {e}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="mx-auto max-w-[680px] px-5 pb-32 sm:px-6">
          <div className="hairline flex flex-col items-center rounded-2xl bg-card p-10 text-center sm:p-14">
            <h2 className="text-[24px] font-medium tracking-tight sm:text-[30px]">
              Read what I've been writing.
            </h2>
            <p className="mt-3 text-[14.5px] text-muted-foreground sm:text-[15.5px]">
              Every playbook is researched, structured, and edited in public.
            </p>
            <Link
              to="/playbooks"
              className="mt-7 inline-flex items-center justify-center gap-2 rounded-md bg-purple px-6 py-3 text-[14px] font-medium text-white transition-colors hover:bg-purple-dark"
            >
              Browse the playbooks
              <ArrowRight size={15} />
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

function SocialLink({
  href,
  icon: Icon,
  label,
}: {
  href: string;
  icon: typeof Linkedin;
  label: string;
}) {
  const isExternal = href.startsWith("http");
  return (
    <a
      href={href}
      target={isExternal ? "_blank" : undefined}
      rel={isExternal ? "noopener noreferrer me" : "me"}
      aria-label={`${label} (opens in a new tab)`}
      className="hairline inline-flex items-center gap-1.5 rounded-md bg-card px-3 py-1.5 text-[12.5px] font-medium text-muted-foreground transition-colors hover:border-purple/40 hover:text-foreground"
    >
      <Icon size={13} />
      {label}
    </a>
  );
}
