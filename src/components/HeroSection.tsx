import { content } from "../../data/content";
import type { Theme } from "../../config/app";

export function HeroSection({ theme }: { theme: Theme }) {
  const { profile, home } = content;

  return (
    <article className="glass-panel relative isolate col-span-8 flex min-h-[390px] items-center overflow-hidden rounded-[var(--card-radius)] border p-[clamp(1.75rem,5vw,3.5rem)] max-[820px]:col-span-7 max-[820px]:min-h-[360px] max-[820px]:items-end max-[600px]:col-span-full max-[600px]:min-h-[400px] max-[600px]:p-6">
      <div className="relative z-[1] max-w-[570px]">
        <p className="m-0 text-[0.75rem] font-semibold uppercase leading-[1.5] tracking-[0.14em] text-[var(--muted)]">{home.eyebrow}</p>
        <p className="mb-[0.35rem] mt-8 text-lg text-[var(--muted)] max-[600px]:mt-[1.6rem]">{home.greeting}</p>
        <h1 className="-ml-[0.06em] m-0 whitespace-pre-line text-[clamp(3.9rem,8.75vw,7.4rem)] font-medium leading-[0.91] tracking-[-0.09em] max-[820px]:text-[clamp(3.1rem,8vw,4.5rem)] max-[600px]:text-[clamp(4rem,19vw,6rem)]">{home.headline}</h1>
        <p className="mb-0 mt-5 max-w-[430px] text-[1.05rem] leading-[1.75] text-[var(--muted)] max-[600px]:max-w-[320px] max-[600px]:text-[0.95rem]">{home.introduction}</p>
        <div className="mt-[1.65rem] flex items-center gap-[1.3rem]">
          <a className="inline-flex min-h-[46px] items-center gap-3 rounded-full bg-[var(--text)] px-4 text-[0.9rem] font-semibold text-[var(--page)] transition-colors duration-200 hover:-translate-y-0.5 hover:bg-[var(--text)]" href="#work">
            {home.primaryAction} <span aria-hidden="true">↗</span>
          </a>
          <a className="text-[0.9rem] font-medium text-[var(--text)] hover:text-[var(--accent)]" href={`mailto:${profile.email}`}>
            {home.secondaryAction}
          </a>
        </div>
      </div>
      <div className="absolute right-[4%] top-1/2 aspect-square w-[clamp(150px,24vw,230px)] -translate-y-1/2 overflow-hidden rounded-full shadow-[0_0_70px_var(--ambient)] max-[820px]:right-5 max-[820px]:top-5 max-[820px]:w-[clamp(100px,20vw,145px)] max-[820px]:translate-y-0 max-[600px]:right-5 max-[600px]:top-5 max-[600px]:w-[clamp(112px,34vw,160px)] max-[600px]:translate-y-0">
        <img
          className="block size-full rounded-full object-cover"
          src={theme === "dark" ? "/assets/images/profile-dark.gif" : "/assets/images/profile-light.jpg"}
          alt={`${content.accessibility.portraitAltPrefix} ${profile.name}`}
          width="600"
          height="600"
          fetchPriority="high"
        />
      </div>
    </article>
  );
}
