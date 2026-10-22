import type { SiteConfig } from "@/config/site.config";
import { box, u } from "./units";

const imageBox =
  "border border-border-strong bg-[linear-gradient(to_top_right,transparent_calc(50%-0.5px),var(--color-border-strong)_50%,transparent_calc(50%+0.5px)),linear-gradient(to_bottom_right,transparent_calc(50%-0.5px),var(--color-border-strong)_50%,transparent_calc(50%+0.5px))]";
const corners = ["-top-1 -left-1", "-top-1 -right-1", "-bottom-1 -left-1", "-right-1 -bottom-1"];

function Label({ x, y, children }: { x: number; y: number; children: string }) {
  return (
    <div
      className="font-mono tracking-wide whitespace-nowrap text-muted uppercase"
      style={{ ...box(x, y), fontSize: u(8) }}
    >
      {children}
    </div>
  );
}

function Bar({ x, y, w, h, r = 3 }: { x: number; y: number; w: number; h: number; r?: number }) {
  return <div className="bg-border-strong" style={{ ...box(x, y, w, h), borderRadius: u(r) }} />;
}

/** The same W+Men hero as a Figma wireframe, with a selected heading layer. */
export function WireframeMock({ content }: { content: SiteConfig["mocks"] }) {
  const { labels, selection } = content.wireframe;

  return (
    <div className="absolute inset-0 bg-surface">
      <Bar x={32} y={28} w={64} h={12} />
      <Label x={32} y={46}>
        {labels.nav}
      </Label>
      <Bar x={470} y={30} w={38} h={8} />
      <Bar x={528} y={30} w={42} h={8} />
      <Bar x={590} y={30} w={34} h={8} />
      <Label x={32} y={102}>
        {labels.eyebrow}
      </Label>
      <Bar x={32} y={116} w={84} h={8} />
      <Bar x={32} y={142} w={270} h={26} r={4} />
      <Bar x={32} y={176} w={170} h={26} r={4} />
      <Label x={32} y={216}>
        {labels.heading}
      </Label>
      <Bar x={32} y={240} w={250} h={7} />
      <Bar x={32} y={255} w={262} h={7} />
      <Bar x={32} y={270} w={200} h={7} />
      <div className="rounded-full border border-dashed border-border-strong" style={box(32, 312, 144, 32)} />
      <div className="rounded-full border border-dashed border-border-strong" style={box(190, 312, 124, 32)} />
      <Label x={32} y={352}>
        {labels.buttons}
      </Label>
      <Label x={372} y={90}>
        {labels.image}
      </Label>
      <div className={imageBox} style={{ ...box(372, 104, 250, 190), borderRadius: u(16) }} />
      <div className={imageBox} style={{ ...box(342, 248, 150, 150), borderRadius: u(16) }} />
      <div className="border border-dashed border-border-strong" style={box(32, 408, 592, 40)} />
      <div className="border-[1.5px] border-primary" style={box(28, 138, 278, 72)}>
        {corners.map((corner) => (
          <i key={corner} className={`absolute size-[7px] border-[1.5px] border-primary bg-white ${corner}`} />
        ))}
      </div>
      <div
        className="bg-primary font-mono whitespace-nowrap text-primary-foreground"
        style={{ ...box(28, 118), fontSize: u(9), padding: `${u(2)} ${u(6)}`, borderRadius: u(4) }}
      >
        {selection}
      </div>
    </div>
  );
}
