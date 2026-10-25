import type { CSSProperties } from "react";
import LogoLoop, { type LogoItem } from "./LogoLoop";
import { technologyBeltConfig } from "../../config/technology-belt";

const technologyLogos: LogoItem[] = technologyBeltConfig.logos.map(
  ({ icon: Icon, title, href }) => ({
    node: <Icon aria-hidden="true" />,
    title,
    href,
    ariaLabel: title,
  }),
);

export function TechnologyBelt() {
  return (
    <div
      className="technology-belt mt-4"
      role="group"
      aria-label={technologyBeltConfig.ariaLabel}
      style={{
        color: technologyBeltConfig.appearance.color,
        opacity: technologyBeltConfig.appearance.opacity,
        "--technology-belt-hover-color": technologyBeltConfig.appearance.hoverColor,
        "--technology-belt-hover-opacity": technologyBeltConfig.appearance.hoverOpacity,
      } as CSSProperties}
    >
      <LogoLoop
        {...technologyBeltConfig.loop}
        className="technology-belt__loop"
        logos={technologyLogos}
        ariaLabel={technologyBeltConfig.ariaLabel}
      />
    </div>
  );
}
