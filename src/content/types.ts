/**
 * Modelos de contenido del portfolio.
 * Toda la información editable vive en `src/content/*` y se valida por tipos,
 * de modo que la UI nunca depende de un CMS ni de datos sin forma conocida.
 */

export interface SocialLink {
  label: string;
  href: string;
}

export interface Profile {
  name: string;
  role: string;
  /** Frase corta para el hero. */
  headline: string;
  /** Párrafos de la sección "Sobre mí". */
  about: string[];
  location: string;
  /** Email público de contacto (opcional: el formulario funciona sin él). */
  email?: string;
  socials: SocialLink[];
  /** URL absoluta del sitio en producción, usada para SEO y sitemap. */
  siteUrl: string;
}

export type SkillCategory = "Backend" | "Frontend" | "Datos" | "DevOps" | "IA & Automatización";

export interface SkillGroup {
  category: SkillCategory;
  items: string[];
}

export interface Project {
  /** Identificador URL-safe; se usa en `/projects/[slug]`. */
  slug: string;
  title: string;
  summary: string;
  /** Descripción larga para la página de detalle (párrafos). */
  description: string[];
  stack: string[];
  highlights: string[];
  repoUrl?: string;
  liveUrl?: string;
  featured: boolean;
  year: number;
}

export interface Experience {
  company: string;
  role: string;
  /** Formato libre, p. ej. "2023 — Actualidad". */
  period: string;
  achievements: string[];
}
