import { Badge, Container, MonoLabel } from "@/components/ui";
import { siteConfig, type SiteConfig } from "@/config/site.config";
import { pad } from "@/lib/projects";
import { cn } from "@/lib/utils";

type SkillGroupsProps = {
  title?: string;
  skills?: SiteConfig["skills"];
  id?: string;
  className?: string;
};

/** Sticky serif title beside one row of skill chips per group. */
export function SkillGroups({
  title = siteConfig.about.skillsTitle,
  skills = siteConfig.skills,
  id = "skills",
  className,
}: SkillGroupsProps) {
  return (
    <section
      id={id}
      aria-labelledby={`${id}-title`}
      className={cn("scroll-mt-24 pt-section pb-section-end", className)}
    >
      <Container className="grid items-start gap-12 desktop:grid-cols-[320px_minmax(0,1fr)] desktop:gap-24">
        <div className="scroll-reveal flex items-end justify-between gap-6 desktop:sticky desktop:top-30 desktop:block">
          <h2 id={`${id}-title`} className="font-serif text-section font-normal tracking-serif italic">
            {title}
          </h2>
          <MonoLabel as="p" aria-hidden="true" className="desktop:mt-5">
            ({pad(skills.length)})
          </MonoLabel>
        </div>

        <dl>
          {skills.map((skill) => (
            <div
              key={skill.group}
              className="grid gap-4 border-t border-border py-7 last:border-b tablet:grid-cols-[180px_minmax(0,1fr)] tablet:gap-8"
            >
              <dt>
                <MonoLabel className="text-foreground">{skill.group}</MonoLabel>
              </dt>
              <dd>
                <ul className="flex flex-wrap gap-2">
                  {skill.items.map((item) => (
                    <li key={item}>
                      <Badge variant="outline" className="text-sm text-foreground">
                        {item}
                      </Badge>
                    </li>
                  ))}
                </ul>
              </dd>
            </div>
          ))}
        </dl>
      </Container>
    </section>
  );
}
