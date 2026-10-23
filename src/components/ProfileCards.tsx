import { siteConfig } from "../../config/app";
import { content } from "../../data/content";
import skills from "../../data/skills";

export function ProfileCards() {
  const { profile, home } = content;

  return (
    <>
      <div className="col-span-4 grid min-h-[390px] grid-rows-2 gap-[var(--card-gap)] max-[820px]:col-span-5 max-[820px]:min-h-[360px] max-[600px]:col-span-full max-[600px]:grid-rows-[minmax(230px,1.1fr)_minmax(190px,0.9fr)] max-[600px]:min-h-[436px]">
        {siteConfig.home.showAvailability && (
          <article className="glass-panel flex min-h-0 flex-col justify-between overflow-hidden rounded-[var(--card-radius)] border p-[1.6rem] max-[600px]:p-5">
            <p className="m-0 flex items-center gap-[0.55rem] text-[0.75rem] font-semibold uppercase leading-[1.5] tracking-[0.14em] text-[var(--muted)]">{home.statusEyebrow}</p>
            <h2 className="m-0 text-[clamp(1.45rem,2.5vw,2rem)] font-medium leading-[1.18] tracking-[-0.055em]">{profile.availability}</h2>
            <p className="m-0 text-[0.95rem] leading-[1.65] text-[var(--muted)]">{home.availabilityLabel}</p>
            <div className="flex items-center gap-[0.6rem] border-t border-[var(--line)] pt-4 text-[0.82rem] text-[var(--muted)]">
              <span className="relative size-[7px] shrink-0 rounded-full bg-[#80b99a] after:absolute after:-inset-1 after:animate-ping after:rounded-full after:border after:border-[#80b99a] after:content-[''] motion-reduce:after:animate-none" />
              <span>{home.availabilityStatus}</span>
            </div>
          </article>
        )}

        <article className="glass-panel relative flex min-h-0 flex-col justify-center overflow-hidden rounded-[var(--card-radius)] border p-[1.6rem] max-[600px]:p-5">
          <p className="m-0 flex items-center gap-[0.55rem] text-[0.75rem] font-semibold uppercase leading-[1.5] tracking-[0.14em] text-[var(--muted)]">{home.aboutEyebrow}</p>
          <h2 className="mb-0 mt-3 max-w-[340px] text-[clamp(1.6rem,3.15vw,2.5rem)] font-medium leading-[1.18] tracking-[-0.055em]">{profile.role}</h2>
          <p className="my-2 text-[0.95rem] leading-[1.65] text-[var(--muted)]">{profile.location}</p>
          <span className="absolute bottom-[1.15rem] right-6 text-[2.1rem] text-[var(--accent)] opacity-70" aria-hidden="true"><span className="asterisk-spin">✳</span></span>
        </article>
      </div>

      {siteConfig.home.showSkills && (
        <article className="glass-panel col-start-5 col-span-8 overflow-hidden rounded-[var(--card-radius)] border p-[1.6rem] max-[820px]:col-start-auto max-[820px]:col-span-6 max-[600px]:col-span-full max-[600px]:p-5">
          <p className="m-0 flex items-center gap-[0.55rem] text-[0.75rem] font-semibold uppercase leading-[1.5] tracking-[0.14em] text-[var(--muted)]">{home.skillsEyebrow}</p>
          <div className="mt-[1.35rem] grid grid-cols-3 gap-4 max-[820px]:grid-cols-1 max-[820px]:gap-3.5 max-[600px]:grid-cols-2">
            {skills.map((group) => (
              <div key={group.category}>
                <h3 className="mb-[0.7rem] mt-0 text-[0.85rem] font-medium text-[var(--muted)]">{group.category}</h3>
                <div className="flex flex-wrap gap-[0.4rem]">
                  {group.items.map((skill) => (
                    <span className="inline-flex min-h-[30px] items-center rounded-full border border-[var(--line)] px-[0.65rem] py-1 text-[0.75rem] leading-tight text-[var(--muted)]" key={skill}>{skill}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </article>
      )}
    </>
  );
}
