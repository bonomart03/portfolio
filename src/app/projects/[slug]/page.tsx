import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { TagList } from "@/components/tag-list";
import { getProjectBySlug, getProjectSlugs } from "@/lib/projects";

/** Todos los proyectos se prerenderizan en build; slugs desconocidos → 404. */
export const dynamicParams = false;

export function generateStaticParams() {
  return getProjectSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: PageProps<"/projects/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) return {};
  return {
    title: project.title,
    description: project.summary,
    alternates: { canonical: `/projects/${project.slug}` },
  };
}

export default async function ProjectPage({ params }: PageProps<"/projects/[slug]">) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) notFound();

  const links = [
    project.repoUrl && { href: project.repoUrl, label: "Código fuente" },
    project.liveUrl && { href: project.liveUrl, label: "Ver en vivo" },
  ].filter((link): link is { href: string; label: string } => Boolean(link));

  return (
    <article className="mx-auto max-w-3xl px-4 py-16 sm:px-6 sm:py-24">
      <Link href="/#proyectos" className="font-mono text-sm text-muted hover:text-foreground">
        ← Volver a proyectos
      </Link>

      <header className="mt-8 mb-10">
        <p className="font-mono text-sm text-accent">{project.year}</p>
        <h1 className="mt-2 text-3xl font-semibold tracking-tight text-balance sm:text-4xl">{project.title}</h1>
        <p className="mt-4 text-lg text-muted text-pretty">{project.summary}</p>
      </header>

      <div className="space-y-4 leading-relaxed">
        {project.description.map((paragraph) => (
          <p key={paragraph}>{paragraph}</p>
        ))}
      </div>

      <h2 className="mt-12 mb-4 text-lg font-semibold">Aspectos destacados</h2>
      <ul className="list-disc space-y-2 pl-5 text-muted">
        {project.highlights.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>

      <h2 className="mt-12 mb-4 text-lg font-semibold">Stack</h2>
      <TagList items={project.stack} label="Tecnologías" />

      {links.length > 0 && (
        <div className="mt-12 flex flex-wrap gap-3">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-lg border border-border px-4 py-2 text-sm font-medium hover:border-accent"
            >
              {link.label} ↗
            </a>
          ))}
        </div>
      )}
    </article>
  );
}
