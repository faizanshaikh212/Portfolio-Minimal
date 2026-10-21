import { content } from "../../data/content";

export function ContactCards() {
  const { profile, home } = content;

  return (
    <>
      <article className="glass-panel relative col-span-4 flex min-h-[200px] flex-col justify-end overflow-hidden rounded-[var(--card-radius)] border p-6 max-[820px]:col-span-5 max-[600px]:col-span-full max-[600px]:min-h-[180px] max-[600px]:p-5">
        <p className="m-0 flex items-center gap-[0.55rem] text-[0.75rem] font-semibold uppercase leading-[1.5] tracking-[0.14em] text-[var(--muted)]">{home.locationLabel}</p>
        <h2 className="mb-0 mt-3 text-[2.5rem] font-medium leading-[1.18] tracking-[-0.055em]">{profile.city}</h2>
        <p className="my-2 text-[0.95rem] leading-[1.65] text-[var(--muted)]">{profile.timezone}</p>
      </article>

      <article className="glass-panel col-span-8 flex min-h-[200px] flex-col items-start justify-center overflow-hidden rounded-[var(--card-radius)] border px-[clamp(1.5rem,4vw,2.5rem)] py-6 max-[820px]:col-span-7 max-[600px]:col-span-full max-[600px]:min-h-[180px] max-[600px]:p-5" id="contact">
        <p className="m-0 flex items-center gap-[0.55rem] text-[0.75rem] font-semibold uppercase leading-[1.5] tracking-[0.14em] text-[var(--muted)]">HAVE A GOOD ONE IN MIND?</p>
        <h2 className="mb-0 mt-2 text-[clamp(2rem,4.2vw,3.2rem)] font-medium leading-[1.18] tracking-[-0.055em]">{home.contactTitle}</h2>
        <a href={`mailto:${profile.email}`} className="mt-4 inline-flex items-center gap-[0.55rem] text-[0.9rem] font-medium text-[var(--text)] hover:text-[var(--accent)]">
          {home.contactAction} <span aria-hidden="true">↗</span>
        </a>
      </article>
    </>
  );
}
