import type { SiteConfig } from "@/config/site.config";
import { box, u } from "./units";

const blobs = [
  { color: "bg-mock-blob-1", at: box(80, 60, 300, 300) },
  { color: "bg-mock-blob-2", at: box(330, 180, 260, 260) },
  { color: "bg-mock-blob-3", at: box(180, 240, 220, 220) },
];

/** Abstract cover for unreleased client work: no name, screenshot or link. */
export function SoonMock({ content }: { content: SiteConfig["mocks"] }) {
  return (
    <div className="absolute inset-0 grid place-items-center overflow-hidden bg-surface text-center">
      {blobs.map((blob) => (
        <div
          key={blob.color}
          className={`rounded-full opacity-50 ${blob.color}`}
          style={{ ...blob.at, filter: `blur(${u(80)})` }}
        />
      ))}
      <div className="relative grid justify-items-center" style={{ gap: u(10) }}>
        <svg style={{ width: u(34), height: u(34) }} viewBox="0 0 24 24" fill="none" className="text-foreground">
          <rect x="5" y="11" width="14" height="10" rx="2" stroke="currentColor" strokeWidth="1.6" />
          <path d="M8 11V8a4 4 0 0 1 8 0v3" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
        </svg>
        <div className="font-serif text-foreground italic" style={{ fontSize: u(44), lineHeight: 1.1 }}>
          {content.soon.title}
        </div>
        <div className="font-mono tracking-mono text-foreground uppercase opacity-70" style={{ fontSize: u(12) }}>
          {content.soon.label}
        </div>
      </div>
    </div>
  );
}
