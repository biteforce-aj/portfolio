import type { SiteConfig } from "@/config/site.config";
import { box, u } from "./units";

/** W+Men Leading Change partners hero, drawn in the client's brand colours. */
export function WmenMock({ content }: { content: SiteConfig["mocks"] }) {
  const m = content.wmen;
  const button = { top: u(312), padding: `${u(10)} ${u(16)}`, fontSize: u(11) };

  return (
    <div className="absolute inset-0 bg-mock-wmen-green font-sans text-white">
      <div className="font-semibold" style={{ ...box(32, 24), fontSize: u(15), letterSpacing: "0.02em" }}>
        {m.logo}
        <b className="text-mock-wmen-pink">{m.logoAccent}</b>
        {m.logoTail}
        <small
          className="block font-mono font-normal text-mock-wmen-mint"
          style={{ fontSize: u(6), letterSpacing: "0.1em" }}
        >
          {m.logoSub}
        </small>
      </div>
      <div
        className="absolute flex font-medium"
        style={{ right: u(32), top: u(28), gap: u(22), fontSize: u(9), letterSpacing: "0.06em" }}
      >
        {m.nav.map((item) => (
          <span key={item}>{item}</span>
        ))}
      </div>
      <div
        className="font-mono text-mock-wmen-rose"
        style={{ ...box(32, 116), fontSize: u(9), letterSpacing: "0.14em" }}
      >
        {m.eyebrow}
      </div>
      <div
        className="font-medium"
        style={{ ...box(32, 136, 300), fontSize: u(36), lineHeight: 1.04, letterSpacing: "-0.03em" }}
      >
        {m.heading} <em className="text-mock-wmen-lime not-italic">{m.headingAccent}</em>
      </div>
      <div className="text-mock-wmen-mint" style={{ ...box(32, 236, 270), fontSize: u(11), lineHeight: 1.5 }}>
        {m.text}
      </div>
      <div
        className="absolute rounded-full bg-mock-wmen-magenta font-medium whitespace-nowrap"
        style={{ ...button, left: u(32) }}
      >
        {m.primary}
      </div>
      <div
        className="absolute rounded-full border border-white/60 font-medium whitespace-nowrap"
        style={{ ...button, left: u(190) }}
      >
        {m.secondary}
      </div>
      <div
        className="bg-linear-135 from-mock-photo-1a to-mock-photo-1b"
        style={{ ...box(372, 104, 250, 190), borderRadius: u(18) }}
      />
      <div
        className="bg-linear-135 from-mock-photo-2a to-mock-photo-2b"
        style={{ ...box(342, 248, 150, 150), borderRadius: u(16) }}
      />
      <div
        className="flex items-center bg-white font-semibold text-mock-wmen-green"
        style={{
          ...box(526, 300),
          gap: u(8),
          padding: `${u(9)} ${u(12)}`,
          borderRadius: u(12),
          fontSize: u(10),
          lineHeight: 1.15,
        }}
      >
        <i className="rounded-full bg-mock-wmen-magenta" style={{ width: u(10), height: u(10) }} />
        <span>
          {m.badge[0]}
          <br />
          {m.badge[1]}
        </span>
      </div>
      <div
        className="absolute bottom-0 left-0 flex w-full items-center bg-mock-wmen-cream font-semibold text-mock-wmen-ink"
        style={{ height: u(56), gap: u(64), paddingLeft: u(40), fontSize: u(11), letterSpacing: "0.04em" }}
      >
        {m.partners.map((partner) => (
          <span key={partner}>{partner}</span>
        ))}
      </div>
    </div>
  );
}
