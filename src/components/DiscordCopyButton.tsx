import { useEffect, useRef, useState } from "react";
import { content } from "../../data/content";
import { FooterIcon } from "./FooterIcon";

export function DiscordCopyButton() {
  const { footer, profile } = content;
  const [copyStatus, setCopyStatus] = useState<"idle" | "copied" | "error">("idle");
  const statusTimer = useRef<number | null>(null);
  const tooltip = copyStatus === "copied"
    ? footer.copiedTooltip
    : copyStatus === "error"
      ? footer.copyFailedTooltip
      : `${footer.links.discord} · ${profile.discord}`;

  function setTemporaryStatus(status: "copied" | "error") {
    if (statusTimer.current !== null) {
      window.clearTimeout(statusTimer.current);
    }
    setCopyStatus(status);
    statusTimer.current = window.setTimeout(() => {
      statusTimer.current = null;
      setCopyStatus("idle");
    }, 1800);
  }

  async function copyUsername() {
    try {
      if (!navigator.clipboard) {
        throw new Error("Clipboard access is unavailable.");
      }
      await navigator.clipboard.writeText(profile.discord);
      setTemporaryStatus("copied");
    } catch (error) {
      console.error("Could not copy the Discord username.", error);
      setTemporaryStatus("error");
    }
  }

  useEffect(() => () => {
    if (statusTimer.current !== null) {
      window.clearTimeout(statusTimer.current);
    }
  }, []);

  return (
    <button
      className="footer-icon-link"
      type="button"
      aria-label={copyStatus === "copied" ? content.accessibility.discordUsernameCopied : `${content.accessibility.copyDiscordUsername} ${profile.discord}`}
      aria-live="polite"
      data-tooltip={tooltip}
      title={tooltip}
      onClick={copyUsername}
    >
      <FooterIcon name="discord" />
    </button>
  );
}
