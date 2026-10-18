import { content } from "../../data/content";
import type { Project } from "../../data/projects";

function FinancePreview() {
  const bars = [32, 45, 38, 62, 51, 76, 60, 88, 70, 100, 82, 112];

  return (
    <div className="flex min-h-[135px] w-[min(70%,340px)] flex-col justify-center rounded-t-2xl rounded-b-[4px] border border-white/15 bg-[linear-gradient(145deg,rgba(24,31,29,0.94),rgba(17,20,19,0.9))] px-5 pb-0 pt-[1.1rem] shadow-[0_18px_48px_rgb(0_0_0_/_22%)] [transform:perspective(800px)_rotateX(8deg)_rotateY(-8deg)]">
      <span className="text-[0.68rem] tracking-[0.12em] text-[#9aa9a0]">TOTAL BALANCE</span>
      <span className="mt-[0.45rem] text-xl font-medium tracking-[-0.04em] text-[#e7eee8]">$12,840.50</span>
      <span className="mt-[0.6rem] flex h-11 items-end gap-[5px] border-b border-white/10">
        {bars.map((height, index) => (
          <i className="flex-1 rounded-t-[3px] bg-[linear-gradient(180deg,#9edbff,#418bbd)] opacity-85" key={index} style={{ height }} />
        ))}
      </span>
    </div>
  );
}

function ControllerPreview() {
  return (
    <div className="relative flex h-[104px] w-[250px] items-center justify-between rounded-[48px_48px_34px_34px] border border-white/20 bg-[linear-gradient(145deg,#526b8d,#263c5a_72%)] px-6 shadow-[0_20px_42px_rgb(0_0_0_/_24%),inset_0_2px_2px_rgb(255_255_255_/_15%)] [transform:rotate(-7deg)]">
      <span className="relative size-[34px] before:absolute before:left-1/2 before:top-1/2 before:h-[11px] before:w-[34px] before:-translate-x-1/2 before:-translate-y-1/2 before:rounded-[3px] before:bg-[#17171d] before:content-[''] after:absolute after:left-1/2 after:top-1/2 after:h-[34px] after:w-[11px] after:-translate-x-1/2 after:-translate-y-1/2 after:rounded-[3px] after:bg-[#17171d] after:content-['']">
        <i />
      </span>
      <span className="text-[0.72rem] font-semibold tracking-[0.11em] text-[#c6e4ff]">MK</span>
      <span className="grid grid-cols-2 gap-2 [transform:rotate(18deg)] [&>i]:size-[9px] [&>i]:rounded-full [&>i]:bg-[#a9d5ff] [&>i]:shadow-[inset_0_1px_2px_rgb(255_255_255_/_50%)]">
        <i /><i /><i /><i />
      </span>
    </div>
  );
}

function ProjectPreview({ visual }: { visual: "lifeboat" | "academic" }) {
  const isLifeboat = visual === "lifeboat";

  return (
    <div className={`grid size-[108px] place-items-center rounded-[30px] border border-white/20 shadow-[0_20px_42px_rgb(0_0_0_/_24%),inset_0_2px_2px_rgb(255_255_255_/_15%)] ${isLifeboat ? "rotate-[-8deg] bg-[linear-gradient(145deg,#79a9a6,#365b69)]" : "rotate-[6deg] bg-[linear-gradient(145deg,#6d8fb9,#354f77)]"}`}>
      <span className={`font-serif text-3xl ${isLifeboat ? "text-[#e0f2e5]" : "font-sans text-xl font-semibold tracking-[-0.08em] text-[#e0edff]"}`}>
        {isLifeboat ? "✳" : "AV"}
      </span>
    </div>
  );
}

export function ProjectCard({ project }: { project: Project }) {
  return (
    <article className={`glass-panel group overflow-hidden rounded-[var(--card-radius)] border transition duration-200 hover:-translate-y-1 hover:border-[color-mix(in_srgb,var(--accent)_48%,var(--line))]`}>
      <a
        className="block h-full"
        href={project.href}
        target="_blank"
        rel="noreferrer"
        aria-label={`${project.title} — ${content.home.projectOpenLabel}`}
      >
        <div className={`relative grid min-h-[190px] place-items-center overflow-hidden bg-[radial-gradient(ellipse_at_48%_80%,var(--project-glow),transparent_62%),var(--raised)] max-[600px]:min-h-[175px] ${project.visual === "finance" ? "[--project-glow:rgba(92,168,231,0.27)]" : "[--project-glow:rgba(102,145,220,0.26)]"}`} aria-hidden="true">
          {project.visual === "finance" ? (
            <FinancePreview />
          ) : project.visual === "controller" ? (
            <ControllerPreview />
          ) : (
            <ProjectPreview visual={project.visual} />
          )}
          <span className="absolute right-4 top-4 grid size-[30px] place-items-center rounded-full border border-[var(--line)] bg-[var(--surface)] text-[0.9rem] text-[var(--text)] backdrop-blur-xl">↗</span>
        </div>
        <div className="grid grid-cols-[1fr_auto] gap-x-4 gap-y-[0.6rem] p-5">
          <div>
            <p className="mb-[0.3rem] mt-0 text-[0.78rem] text-[var(--muted)]">{project.category}</p>
            <h3 className="m-0 text-[1.25rem] font-medium tracking-[-0.04em]">{project.title}</h3>
          </div>
          <span className="text-[0.78rem] text-[var(--muted)]">{project.year}</span>
          <p className="col-span-full m-0 max-w-[500px] text-[0.9rem] leading-[1.65] text-[var(--muted)]">{project.description}</p>
          <div className="col-span-full flex flex-wrap gap-[0.4rem]" aria-label="Technologies">
            {project.technologies.map((technology) => (
              <span className="inline-flex min-h-[30px] items-center rounded-full border border-[var(--line)] px-[0.65rem] py-1 text-[0.75rem] leading-tight text-[var(--muted)]" key={technology}>
                {technology}
              </span>
            ))}
          </div>
        </div>
      </a>
    </article>
  );
}
