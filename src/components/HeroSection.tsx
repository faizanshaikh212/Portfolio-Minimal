import { content } from "../../data/content";

export function HeroSection() {
  const { profile, home } = content;

  return (
    <article className="relative isolate col-span-8 flex min-h-[390px] items-center overflow-hidden rounded-[var(--card-radius)] border border-[var(--line)] bg-[var(--surface)] p-[clamp(1.75rem,5vw,3.5rem)] shadow-[0_24px_70px_rgb(0_0_0_/_9%),inset_0_1px_0_rgb(255_255_255_/_5%)] backdrop-blur-2xl backdrop-saturate-150 max-[820px]:col-span-7 max-[820px]:min-h-[360px] max-[600px]:col-span-full max-[600px]:min-h-[400px] max-[600px]:items-end max-[600px]:p-6">
      <div className="relative z-[1] max-w-[570px]">
        <p className="m-0 flex items-center gap-[0.55rem] text-[0.65rem] font-semibold uppercase leading-[1.5] tracking-[0.14em] text-[var(--muted)]">
          <span className="size-[7px] shrink-0 rounded-full bg-[#80b99a]" />
          {home.eyebrow}
        </p>
        <p className="mb-[0.35rem] mt-8 text-base text-[var(--muted)] max-[600px]:mt-[1.6rem]">{home.greeting}</p>
        <h1 className="m-0 whitespace-pre-line text-[clamp(3.7rem,8.5vw,7.1rem)] font-medium leading-[0.91] tracking-[-0.09em] max-[600px]:text-[clamp(4rem,19vw,6rem)]">{home.headline}</h1>
        <p className="mb-0 mt-5 max-w-[430px] text-[0.94rem] leading-[1.75] text-[var(--muted)] max-[600px]:max-w-[320px] max-[600px]:text-[0.85rem]">{home.introduction}</p>
        <div className="mt-[1.65rem] flex items-center gap-[1.3rem]">
          <a className="inline-flex min-h-[42px] items-center gap-3 rounded-full bg-[var(--text)] px-4 text-[0.78rem] font-semibold text-[var(--page)] transition-colors duration-200 hover:-translate-y-0.5 hover:bg-[var(--text)]" href="#work">
            {home.primaryAction} <span aria-hidden="true">↗</span>
          </a>
          <a className="text-[0.78rem] font-medium text-[var(--text)] hover:text-[var(--accent)]" href={`mailto:${profile.email}`}>
            {home.secondaryAction}
          </a>
        </div>
      </div>
      <div className="absolute right-[4%] top-1/2 aspect-square w-[clamp(150px,24vw,230px)] -translate-y-1/2 overflow-hidden rounded-full shadow-[0_0_70px_var(--ambient)] max-[600px]:right-5 max-[600px]:top-5 max-[600px]:w-[clamp(112px,34vw,160px)] max-[600px]:translate-y-0">
        <img
          className="block size-full rounded-full object-cover"
          src="/assets/images/profile_glitched.gif"
          alt={`Portrait of ${profile.name}`}
          width="600"
          height="600"
          fetchPriority="high"
        />
      </div>
      <span className="absolute bottom-[1.35rem] right-6 text-[0.58rem] tracking-[0.12em] text-[var(--muted)] max-[600px]:bottom-4 max-[600px]:right-4 max-[600px]:text-[0.5rem]">01 / PORTFOLIO</span>
    </article>
  );
}
