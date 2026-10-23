import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { ImageResponse } from "next/og";
import { siteConfig } from "@/config/site.config";

// Social share card, generated at build time. Every route inherits it.
export const alt = siteConfig.seo.defaultTitle;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

/** Reads colour tokens straight from tokens.css so the card stays on-brand. */
async function tokenColors() {
  "use cache";
  const css = await readFile(join(process.cwd(), "src/styles/tokens.css"), "utf8");
  const token = (name: string) => css.match(new RegExp(`--color-${name}:\\s*([^;]+);`))?.[1].trim();
  return {
    background: token("background"),
    foreground: token("foreground"),
    muted: token("muted"),
    border: token("border"),
    accent: token("primary-text"),
  };
}

export default async function OpengraphImage() {
  const color = await tokenColors();
  const { person } = siteConfig;

  return new ImageResponse(
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        padding: 80,
        background: color.background,
        color: color.foreground,
        border: `2px solid ${color.border}`,
      }}
    >
      <div style={{ display: "flex", alignItems: "center", gap: 16, fontSize: 26, color: color.muted, letterSpacing: 3 }}>
        <div style={{ width: 14, height: 14, borderRadius: 999, background: color.accent }} />
        {person.location.toUpperCase()}
      </div>
      <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
        <div style={{ fontSize: 112, fontWeight: 600, letterSpacing: -4, lineHeight: 1 }}>{person.name}</div>
        <div style={{ fontSize: 40, color: color.accent }}>{person.role}</div>
      </div>
    </div>,
    size,
  );
}
