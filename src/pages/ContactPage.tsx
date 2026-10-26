import { ArrowUpRight } from "lucide-react";
import { content } from "../../data/content";
import { FooterIcon } from "../components/FooterIcon";

export function ContactPage() {
  const { contact, profile } = content;

  const channels = [
    {
      key: "email",
      ...contact.email,
      href: `mailto:${profile.email}`,
      value: profile.email,
      icon: "email" as const,
      className: "col-span-7 max-[760px]:col-span-6 max-[560px]:col-span-1",
    },
    {
      key: "github",
      ...contact.github,
      href: profile.links.github,
      value: "github.com/faizanshaikh212",
      icon: "github" as const,
      className: "col-span-5 max-[760px]:col-span-6 max-[560px]:col-span-1",
    },
    {
      key: "linkedin",
      ...contact.linkedin,
      href: profile.links.linkedin,
      value: "Connect professionally",
      icon: "linkedin" as const,
      className: "col-span-5 max-[760px]:col-span-6 max-[560px]:col-span-1",
    },
    {
      key: "website",
      ...contact.website,
      href: profile.links.website,
      value: "faizanshaikh212.vercel.app",
      icon: "website" as const,
      className: "col-span-7 max-[760px]:col-span-6 max-[560px]:col-span-1",
    },
  ];

  return (
    <section className="mt-8 space-y-6 pb-12 max-[600px]:mt-5" aria-labelledby="contact-page-title">
      <header className="max-w-2xl px-1">
        <p className="m-0 text-xs font-semibold uppercase tracking-[0.14em] text-[var(--muted)]">
          {contact.title}
        </p>
        <h1 className="-ml-[0.06em] mb-0 mt-3 text-[clamp(2.5rem,7vw,5rem)] font-medium leading-[0.98] tracking-[-0.075em]" id="contact-page-title">
          {contact.headline}
        </h1>
        <p className="mb-0 mt-4 max-w-xl leading-relaxed text-[var(--muted)]">
          {contact.introduction}
        </p>
      </header>

      <div className="grid grid-cols-12 gap-[var(--card-gap)] max-[560px]:grid-cols-1">
        {channels.map((channel) => (
          <a
            className={`contact-card glass-panel group flex min-h-[220px] flex-col justify-between overflow-hidden rounded-[var(--card-radius)] border p-6 no-underline max-[560px]:min-h-[190px] ${channel.className}`}
            href={channel.href}
            key={channel.key}
            target={channel.key === "email" ? undefined : "_blank"}
            rel={channel.key === "email" ? undefined : "noreferrer"}
          >
            <div className="flex items-start justify-between">
              <span className="grid size-12 place-items-center rounded-2xl border border-[var(--line)] bg-[var(--accent-soft)] text-[var(--accent)]">
                <FooterIcon name={channel.icon} />
              </span>
              <ArrowUpRight
                aria-hidden="true"
                className="contact-card__arrow size-5 text-[var(--muted)]"
              />
            </div>
            <div>
              <h2 className="-ml-[0.04em] mb-0 mt-6 text-2xl font-medium tracking-[-0.05em]">
                {channel.label}
              </h2>
              <p className="mb-0 mt-2 max-w-md text-sm leading-relaxed text-[var(--muted)]">
                {channel.description}
              </p>
              <p className="mb-0 mt-4 text-sm font-medium text-[var(--accent)]">
                {channel.action}
                <span className="ml-2 text-[var(--muted)]">{channel.value}</span>
              </p>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}
