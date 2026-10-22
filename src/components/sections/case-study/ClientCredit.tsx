import { Dot, MonoLabel } from "@/components/ui";
import { siteConfig } from "@/config/site.config";

type ClientCreditProps = { children: React.ReactNode; label?: string };

/** Callout that says plainly which parts of the work belong to the client. */
export function ClientCredit({ children, label = siteConfig.caseStudy.credit }: ClientCreditProps) {
  return (
    <aside className="flex gap-4 rounded-panel border border-border bg-surface p-5 tablet:p-6">
      <Dot className="mt-2" />
      <div>
        <MonoLabel as="p">{label}</MonoLabel>
        <p className="mt-1.5 text-foreground">{children}</p>
      </div>
    </aside>
  );
}
