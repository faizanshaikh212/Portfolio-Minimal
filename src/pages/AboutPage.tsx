import { Infinity as InfinityIcon } from "lucide-react";
import { content } from "../../data/content";
import education from "../../data/education";
import experience from "../../data/experience";
import stats from "../../data/stats";
import { AgeCounter } from "../components/AgeCounter";
import { siteConfig } from "../../config/app";
import type { Theme } from "../../config/app";

export function AboutPage({ theme }: { theme: Theme }) {
  const { about, profile, accessibility } = content;
  const config = siteConfig.about;

  return (
    <div className="mt-8 space-y-4 pb-12 max-[600px]:mt-5">
      <div className="grid grid-cols-12 items-start gap-[var(--card-gap)] max-[760px]:grid-cols-1">
        {config.showProfile && (
          <aside className="glass-panel sticky top-[7.5rem] col-span-4 rounded-[var(--card-radius)] border p-5 max-[760px]:static max-[760px]:col-span-1">
            <h1 className="mb-4 mt-0 text-xl font-semibold tracking-tight">{about.title}</h1>
            <div className="aspect-[4/4.2] overflow-hidden rounded-[calc(var(--card-radius)-8px)]">
              <img
                className="size-full object-cover"
                src={theme === "dark" ? "/assets/images/profile-dark.gif" : "/assets/images/profile-light.jpg"}
                alt={`${accessibility.portraitAltPrefix} ${profile.name}`}
                width="600"
                height="600"
                loading="lazy"
              />
            </div>
            <h2 className="mb-0 mt-5 text-2xl font-semibold tracking-tight">{profile.name}</h2>
            <p className="mb-0 mt-1 text-sm text-[var(--muted)]">{profile.role}</p>
            <p className="mb-0 mt-4 text-sm text-[var(--muted)]">{profile.location}</p>
            <div className="mt-5 grid auto-rows-[5.75rem] grid-cols-2 gap-2">
              {stats.map((stat) => (
                <div className="flex flex-col items-start rounded-2xl border border-[var(--line)] p-3" key={stat.label}>
                  <strong className="flex h-8 items-center font-semibold">
                    {stat.value === "∞" ? (
                      <InfinityIcon aria-hidden="true" className="h-7 w-8" strokeWidth={3} />
                    ) : (
                      <span className="text-2xl">{stat.value}</span>
                    )}
                  </strong>
                  <span className="mt-1.5 text-[0.65rem] font-semibold uppercase leading-tight tracking-[0.12em] text-[var(--muted)]">{stat.label}</span>
                </div>
              ))}
              {config.showAge && (
                <div className="flex flex-col items-start rounded-2xl border border-[var(--line)] p-3" aria-label={about.ageLabel}>
                  <strong className="flex h-8 items-center text-2xl font-semibold">
                    <AgeCounter dateOfBirth={siteConfig.about.dateOfBirth} />
                  </strong>
                  <span className="mt-1.5 text-[0.65rem] font-semibold uppercase leading-tight tracking-[0.12em] text-[var(--muted)]">{about.ageLabel} · {about.ageSuffix}</span>
                </div>
              )}
            </div>
          </aside>
        )}

        <div className={`${config.showProfile ? "col-span-8" : "col-span-12"} space-y-4 max-[760px]:col-span-1`}>
          {config.showOverview && (
            <section className="glass-panel rounded-[var(--card-radius)] border p-6 md:p-8" aria-labelledby="about-overview-title">
              <h2 className="sr-only" id="about-overview-title">{about.overviewLabel}</h2>
              <p className="m-0 leading-relaxed">{about.introduction}</p>
              <p className="mb-0 mt-4 leading-relaxed text-[var(--muted)]">{about.additional}</p>
            </section>
          )}

          {config.showExperience && (
            <section className="glass-panel rounded-[var(--card-radius)] border p-6 md:p-8" aria-labelledby="about-experience-title">
              <h2 className="mb-5 mt-0 text-2xl font-semibold tracking-tight" id="about-experience-title">{about.experienceTitle}</h2>
              <div className="space-y-3">
                {experience.map((item) => (
                  <article className="rounded-2xl border border-[var(--line)] p-4" key={`${item.dateRange}-${item.organization}`}>
                    <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
                      <h3 className="m-0 text-lg font-semibold">{item.organization}</h3>
                      <span className="text-xs text-[var(--muted)]">{item.dateRange}</span>
                    </div>
                    <p className="mb-0 mt-1 text-sm font-medium text-[var(--accent)]">{item.role}</p>
                    <p className="mb-0 mt-3 text-sm leading-relaxed text-[var(--muted)]">{item.description}</p>
                  </article>
                ))}
              </div>
            </section>
          )}

          {config.showEducation && (
            <section className="glass-panel rounded-[var(--card-radius)] border p-6 md:p-8" aria-labelledby="about-education-title">
              <h2 className="mb-5 mt-0 text-2xl font-semibold tracking-tight" id="about-education-title">{about.educationTitle}</h2>
              <div className="grid grid-cols-2 gap-3 max-[520px]:grid-cols-1">
                {education.map((item) => (
                  <article className="rounded-2xl border border-[var(--line)] p-4" key={item.institution}>
                    <h3 className="mb-0 mt-0 text-lg font-semibold">{item.program}</h3>
                    <p className="mb-0 mt-2 text-sm text-[var(--muted)]">{item.institution}</p>
                    <p className="mb-0 mt-4 text-xs font-semibold uppercase tracking-[0.12em] text-[var(--muted)]">{item.dateRange}</p>
                  </article>
                ))}
              </div>
            </section>
          )}
        </div>
      </div>
    </div>
  );
}
