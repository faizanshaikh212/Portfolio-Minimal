import { useEffect, useState } from "react";

const YEAR_IN_MILLISECONDS = 365.2425 * 24 * 60 * 60 * 1000;

function getAgeInYears(dateOfBirth: string, now: Date): number {
  const [year, month, day] = dateOfBirth.split("-").map(Number);
  const birthTime = Date.UTC(year, month - 1, day);
  const nowTime = now.getTime();

  if (!Number.isFinite(birthTime) || nowTime < birthTime) {
    return 0;
  }

  return (nowTime - birthTime) / YEAR_IN_MILLISECONDS;
}

export function AgeCounter({ dateOfBirth }: { dateOfBirth: string }) {
  const [age, setAge] = useState(() => getAgeInYears(dateOfBirth, new Date()));

  useEffect(() => {
    const startTime = Date.now();
    const startFrame = performance.now();
    let frameId = 0;

    function updateAge(frameTime: number) {
      const elapsed = frameTime - startFrame;
      setAge(getAgeInYears(dateOfBirth, new Date(startTime + elapsed)));
      frameId = window.requestAnimationFrame(updateAge);
    }

    frameId = window.requestAnimationFrame(updateAge);
    return () => window.cancelAnimationFrame(frameId);
  }, [dateOfBirth]);

  const [wholeYears, fractionalYears] = age.toFixed(10).split(".");

  return (
    <>
      <span>{wholeYears}</span>
      <span className="text-[0.65em] font-mono tabular-nums">.{fractionalYears}</span>
    </>
  );
}
