import tailwindcss from "@tailwindcss/vite";
import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";
import { siteConfig } from "./config/app.ts";

function escapeHtml(value: string): string {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll('"', "&quot;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;");
}

export default defineConfig({
  plugins: [
    {
      name: "portfolio-content-metadata",
      transformIndexHtml(html) {
        return html
          .replaceAll("__SITE_TITLE__", escapeHtml(siteConfig.metadata.title))
          .replaceAll("__SITE_DESCRIPTION__", escapeHtml(siteConfig.metadata.description))
          .replaceAll("__SITE_AUTHOR__", escapeHtml(siteConfig.metadata.author));
      },
    },
    react(),
    tailwindcss(),
  ],
});
