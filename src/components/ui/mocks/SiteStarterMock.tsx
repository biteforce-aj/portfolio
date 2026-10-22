import type { SiteConfig } from "@/config/site.config";
import { box, u } from "./units";

/** Site Starter demo hero. */
export function SiteStarterMock({ content }: { content: SiteConfig["mocks"] }) {
  const m = content.siteStarter;
  const button = { top: u(288), padding: `${u(9)} ${u(16)}`, borderRadius: u(8), fontSize: u(11) };

  return (
    <div className="absolute inset-0 overflow-hidden bg-mock-ss-bg text-white">
      <div
        className="rounded-full bg-mock-ss-accent opacity-35"
        style={{ ...box(430, 60, 260, 260), filter: `blur(${u(70)})` }}
      />
      <div className="font-semibold" style={{ ...box(32, 26), fontSize: u(12) }}>
        {m.brand}
      </div>
      <div className="flex text-mock-ss-muted" style={{ ...box(430, 30), gap: u(20), fontSize: u(10) }}>
        {m.nav.map((item) => (
          <span key={item}>{item}</span>
        ))}
      </div>
      <div
        className="rounded-full bg-mock-ss-accent font-medium text-mock-ss-bg"
        style={{ ...box(570, 22), padding: `${u(6)} ${u(12)}`, fontSize: u(10) }}
      >
        {m.cta}
      </div>
      <div
        className="font-mono text-mock-ss-accent"
        style={{ ...box(32, 110), fontSize: u(9), letterSpacing: "0.12em" }}
      >
        {m.eyebrow}
      </div>
      <div
        className="font-semibold whitespace-nowrap"
        style={{ ...box(32, 132), fontSize: u(40), lineHeight: 1.04, letterSpacing: "-0.03em" }}
      >
        {m.heading[0]}
        <br />
        {m.heading[1]}
      </div>
      <div className="text-mock-ss-muted" style={{ ...box(32, 232, 330), fontSize: u(12), lineHeight: 1.5 }}>
        {m.text}
      </div>
      <div
        className="absolute bg-mock-ss-accent font-medium whitespace-nowrap text-mock-ss-bg"
        style={{ ...button, left: u(32) }}
      >
        {m.primary}
      </div>
      <div
        className="absolute border border-white/25 font-medium whitespace-nowrap"
        style={{ ...button, left: u(168) }}
      >
        {m.secondary}
      </div>
      {[32, 232, 432].map((left) => (
        <div
          key={left}
          className="border border-white/8 bg-mock-ss-card"
          style={{ ...box(left, 350, 184, 90), borderRadius: u(10) }}
        />
      ))}
    </div>
  );
}
