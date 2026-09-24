import Link from "next/link";
import type { Project } from "@/content/types";
import { TagList } from "./tag-list";

export function ProjectCard({ project }: { project: Project }) {
  return (
    <article className="group relative flex h-full flex-col rounded-xl border border-border bg-surface p-6 transition-colors hover:border-accent">
      <div className="mb-3 flex items-center justify-between font-mono text-xs text-muted">
        <span>{project.year}</span>
        {project.featured && <span className="text-accent">Destacado</span>}
      </div>
      <h3 className="mb-2 text-lg font-semibold">
        {/* El ::after del link expande el área clickeable a toda la card. */}
        <Link href={`/projects/${project.slug}`} className="after:absolute after:inset-0 after:rounded-xl">
          {project.title}
        </Link>
      </h3>
      <p className="mb-5 flex-1 text-sm leading-relaxed text-muted">{project.summary}</p>
      <TagList items={project.stack.slice(0, 5)} label={`Tecnologías de ${project.title}`} />
    </article>
  );
}
