import Image from "next/image";
import type { Project } from "@/config/site.config";
import { MockScreen } from "./mocks";

type ProjectCoverProps = { project: Project; sizes: string; className?: string };

/** A project's real cover image, else its drawn mock screen, at the 656 × 460 ratio. Decorative. */
export function ProjectCover({ project, sizes, className }: ProjectCoverProps) {
  if (project.cover) {
    return (
      <div className={`relative aspect-[656/460] ${className ?? ""}`}>
        <Image
          src={project.cover.src}
          alt=""
          fill
          sizes={sizes}
          className="object-cover"
          style={{ objectPosition: project.cover.position }}
        />
      </div>
    );
  }
  return project.preview ? <MockScreen screen={project.preview} className={className} /> : null;
}
