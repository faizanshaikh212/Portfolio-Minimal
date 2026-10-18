export function CyberspaceCard() {
  return (
    <article className="glass-panel cyberspace-card group relative isolate col-start-1 row-start-2 col-span-4 flex min-h-[250px] items-center overflow-hidden rounded-[var(--card-radius)] border p-8 transition duration-500 hover:border-[var(--accent)] max-[820px]:col-start-auto max-[820px]:row-start-auto max-[820px]:col-span-6 max-[820px]:p-6 max-[600px]:col-span-full max-[600px]:min-h-[220px] max-[600px]:px-5">
      <video
        className="absolute inset-0 size-full object-cover"
        src="/assets/videos/moon.mp4"
        poster="/assets/images/moon-poster.jpg"
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
        aria-hidden="true"
      />
      <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(4,12,27,0.7),rgba(4,12,27,0.18))]" aria-hidden="true" />
      <h2 className="relative z-[1] m-0 max-w-[260px] text-[clamp(2rem,4.2vw,3.2rem)] font-medium tracking-[-0.06em] text-white">
        Enter the cyberspace
      </h2>
    </article>
  );
}
