import { useId } from "react";
import "./ThemeToggle.css";

const STARS = [
  { top: "47%", left: "12%", size: 1.5 },
  { top: "26%", left: "23%", size: 2.5, bright: true },
  { top: "66%", left: "31%", size: 1.5 },
  { top: "42%", left: "42%", size: 1.5 },
  { top: "68%", left: "53%", size: 1.5 },
  { top: "23%", left: "65%", size: 2 },
];

export interface MoonCrater {
  size: number;
  top: number;
  left: number;
}

export const CRATER_SIZE_VARIATION_CHANCE = 0.3;
const CRATER_POSITIONS = [
  { top: 4.5, left: 11 },
  { top: 10.5, left: 4.5 },
  { top: 13.5, left: 14.5 },
] as const;
const REFERENCE_CRATER_SIZES = [4.5, 7, 5] as const;

export const INITIAL_CRATERS: MoonCrater[] = CRATER_POSITIONS.map((position, index) => ({
  ...position,
  size: REFERENCE_CRATER_SIZES[index],
}));

export function createCraterLayout(
  variationChance = CRATER_SIZE_VARIATION_CHANCE,
): MoonCrater[] {
  if (variationChance < 0 || variationChance > 1) {
    throw new RangeError("Crater variation chance must be between 0 and 1.");
  }

  const sizes = [...REFERENCE_CRATER_SIZES];

  if (Math.random() >= variationChance) {
    return INITIAL_CRATERS;
  }

  for (let i = sizes.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [sizes[i], sizes[j]] = [sizes[j], sizes[i]];
  }

  if (sizes.every((size, index) => size === REFERENCE_CRATER_SIZES[index])) {
    [sizes[0], sizes[1]] = [sizes[1], sizes[0]];
  }

  return CRATER_POSITIONS.map((position, index) => ({
    ...position,
    size: sizes[index],
  }));
}

export function ThemeToggle({
  theme,
  craters,
  onToggle,
}: {
  theme: "light" | "dark";
  craters: MoonCrater[];
  onToggle: () => void;
}) {
  const isDark = theme === "dark";
  const toggleId = useId().replaceAll(":", "");
  const cloudBackGradientId = `${toggleId}-cloud-back`;
  const cloudFrontGradientId = `${toggleId}-cloud-front`;
  const rimGradientId = `${toggleId}-rim`;

  return (
    <button
      type="button"
      role="switch"
      aria-checked={isDark}
      aria-label={`Switch to ${isDark ? "light" : "dark"} mode`}
      onClick={onToggle}
      className="theme-toggle"
      style={{
        touchAction: "manipulation",
        boxShadow:
          isDark
            ? "inset 0 2px 3px rgba(0, 0, 0, 0.32), inset 0 -1px 2px rgba(120, 150, 190, 0.16)"
            : "inset 0 2px 3px rgba(0, 56, 112, 0.24), inset 0 -1px 2px rgba(255, 255, 255, 0.58)",
      }}
    >
      {/* Sky layers */}
      <span
        aria-hidden
        className="theme-toggle__layer"
        style={{
          transitionDuration: "var(--duration-slow)",
          transitionTimingFunction: "var(--ease-in-out)",
          opacity: isDark ? 0 : 1,
          background: "linear-gradient(180deg, #1688e6 0%, #39a5f5 48%, #0874d1 100%)",
        }}
      />
      <span
        aria-hidden
        className="theme-toggle__layer"
        style={{
          transitionDuration: "var(--duration-slow)",
          transitionTimingFunction: "var(--ease-in-out)",
          opacity: isDark ? 1 : 0,
          background: "#081326",
        }}
      />

      {/* Stars and sparkles (dark mode only) */}
      <span
        aria-hidden
        className="theme-toggle__layer"
        style={{
          transitionDuration: "var(--duration-slow)",
          transitionDelay: isDark ? "150ms" : "0ms",
          opacity: isDark ? 1 : 0,
        }}
      >
        {STARS.map((star, i) => (
          <span
            key={i}
            className="theme-toggle__star"
            style={{
              top: star.top,
              left: star.left,
              width: star.size,
              height: star.size,
              boxShadow: star.bright ? "0 0 3px 1px rgba(255,255,255,0.7)" : undefined,
              opacity: star.bright ? 1 : 0.85,
            }}
          />
        ))}
        <span
          className="theme-toggle__sparkle"
          style={{
            top: "24%",
            left: "30%",
            width: 5,
            height: 5,
            clipPath: "polygon(50% 0, 64% 38%, 100% 50%, 64% 62%, 50% 100%, 36% 62%, 0 50%, 36% 38%)",
            filter: "drop-shadow(0 0 1px rgba(255,255,255,0.6))",
          }}
        />
        <span
          className="theme-toggle__sparkle"
          style={{
            top: "44%",
            left: "57%",
            width: 6,
            height: 6,
            clipPath: "polygon(50% 0, 64% 38%, 100% 50%, 64% 62%, 50% 100%, 36% 62%, 0 50%, 36% 38%)",
            filter: "drop-shadow(0 0 1px rgba(255,255,255,0.55))",
          }}
        />
        <span
          className="theme-toggle__sparkle"
          style={{
            top: "76%",
            left: "48%",
            width: 4,
            height: 4,
            clipPath: "polygon(50% 0, 64% 38%, 100% 50%, 64% 62%, 50% 100%, 36% 62%, 0 50%, 36% 38%)",
          }}
        />
      </span>

      {/* Clouds (light mode only) */}
      <span
        aria-hidden
        className="theme-toggle__layer"
        style={{
          transitionDuration: "var(--duration-slow)",
          transitionTimingFunction: "var(--ease-in-out)",
          opacity: isDark ? 0 : 1,
        }}
      >
        <svg aria-hidden viewBox="0 0 64 32" preserveAspectRatio="none" className="theme-toggle__artwork">
          <defs>
            <linearGradient id={cloudBackGradientId} x1="0" y1="0" x2="0" y2="1">
              <stop offset="0" stopColor="#9edaff" />
              <stop offset="1" stopColor="#d8f1ff" />
            </linearGradient>
            <linearGradient id={cloudFrontGradientId} x1="0" y1="0" x2="0" y2="1">
              <stop offset="0" stopColor="#fff" />
              <stop offset=".58" stopColor="#e9f7ff" />
              <stop offset="1" stopColor="#c9e9fc" />
            </linearGradient>
          </defs>
          <path
            d="M0 32V25c3-4 7-5 11-3 3-6 9-8 15-5 4-9 12-11 19-6 4-8 12-11 19-6v27Z"
            fill="#62b2e8"
            opacity=".58"
            transform="translate(0 2)"
          />
          <path
            d="M0 32V24c3-4 7-5 11-3 3-6 9-8 15-5 4-9 12-11 19-6 4-8 12-11 19-6v28Z"
            fill={`url(#${cloudBackGradientId})`}
          />
          <path
            d="M14 32c2-5 7-8 12-6 3-6 9-8 15-4 4-7 12-9 18-4 2-5 5-8 9-9v23Z"
            fill="#b9e4fc"
          />
          <path
            d="M17 32c2-5 7-7 12-5 3-5 9-7 14-3 4-6 12-8 17-3 2-4 5-7 8-8v19Z"
            fill={`url(#${cloudFrontGradientId})`}
          />
        </svg>
      </span>

      {/* Celestial body: travels left (sun) to right (moon) */}
      <span
        aria-hidden
        className="theme-toggle__body"
        style={{
          left: 4,
          transitionDuration: "var(--duration-slow)",
          transitionTimingFunction: "var(--ease-in-out)",
          transform: `translate(${isDark ? 32 : 0}px, -50%)`,
        }}
      >
        <span
          className="theme-toggle__body-shape"
          style={{
            transitionDuration: "var(--duration-base)",
            opacity: isDark ? 0 : 1,
            background:
              "linear-gradient(145deg, #fff4a8 0%, #ffe34a 36%, #ffd02a 72%, #f6b51b 100%)",
            boxShadow:
              "0.75px 1px 0.6px rgba(61, 47, 0, 0.44), inset 0 1px 1.25px rgba(255, 255, 225, 0.96), inset 1px 0 1px rgba(255, 255, 205, 0.46), inset 0 -1.75px 1.25px rgba(190, 112, 0, 0.4)",
          }}
        />
        <span
          className="theme-toggle__body-shape"
          style={{
            transitionDuration: "var(--duration-base)",
            opacity: isDark ? 1 : 0,
            background:
              "linear-gradient(145deg, #ffffff 0%, #edf4fd 42%, #d5e2f2 100%)",
            boxShadow:
              "0 2px 4px rgba(0, 0, 10, 0.34), inset 0 1px 1.25px rgba(255, 255, 255, 1), inset 1px 0 1.1px rgba(255, 255, 255, 0.55), inset 0 -1.75px 1.25px rgba(67, 91, 125, 0.4)",
          }}
        />
        {craters.map((crater, index) => (
          <span
            key={index}
            aria-hidden
            className="theme-toggle__crater"
            style={{
              width: crater.size,
              height: crater.size,
              top: crater.top,
              left: crater.left,
              boxShadow:
                "inset 0 1px 1px rgba(32, 48, 70, 0.36), inset 0 -1px 1px rgba(255, 255, 255, 0.32)",
              opacity: isDark ? 1 : 0,
              transitionDuration: "var(--duration-base)",
            }}
          />
        ))}
      </span>

      <svg
        aria-hidden
        viewBox="0 0 64 32"
        preserveAspectRatio="none"
        className="theme-toggle__artwork"
      >
        <defs>
          <linearGradient id={rimGradientId} x1="0" y1="0" x2="0" y2="1">
            <stop
              offset="0"
              stopColor={isDark ? "#020817" : "#075da8"}
              style={{ transition: "stop-color var(--duration-slow) var(--ease-in-out)" }}
            />
            <stop
              offset=".48"
              stopColor={isDark ? "#172744" : "#4a9bd1"}
              style={{ transition: "stop-color var(--duration-slow) var(--ease-in-out)" }}
            />
            <stop
              offset="1"
              stopColor={isDark ? "#344967" : "#d9f1ff"}
              style={{ transition: "stop-color var(--duration-slow) var(--ease-in-out)" }}
            />
          </linearGradient>
        </defs>
        <rect
          x=".75"
          y=".75"
          width="62.5"
          height="30.5"
          rx="15.25"
          fill="none"
          stroke={`url(#${rimGradientId})`}
          strokeWidth="1.5"
        />
      </svg>
    </button>
  );
}
