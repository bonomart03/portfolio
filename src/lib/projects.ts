import { projects as allProjects } from "@/content/projects";
import type { Project } from "@/content/types";

/**
 * Capa de acceso a proyectos. La UI consulta aquí y no al array directamente,
 * así migrar a un CMS o base de datos solo cambia este módulo.
 */

/** Proyectos ordenados: destacados primero, luego por año descendente. */
export function getProjects(source: readonly Project[] = allProjects): Project[] {
  return [...source].sort((a, b) => Number(b.featured) - Number(a.featured) || b.year - a.year);
}

export function getProjectBySlug(slug: string, source: readonly Project[] = allProjects): Project | undefined {
  return source.find((project) => project.slug === slug);
}

export function getProjectSlugs(source: readonly Project[] = allProjects): string[] {
  return source.map((project) => project.slug);
}
