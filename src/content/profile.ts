import type { Profile, SkillGroup } from "./types";

/**
 * URL pública del sitio. Prioridad: variable explícita → dominio de producción
 * que inyecta Vercel automáticamente → localhost.
 */
function resolveSiteUrl(env: NodeJS.ProcessEnv = process.env): string {
  if (env.NEXT_PUBLIC_SITE_URL) return env.NEXT_PUBLIC_SITE_URL;
  if (env.VERCEL_PROJECT_PRODUCTION_URL) return `https://${env.VERCEL_PROJECT_PRODUCTION_URL}`;
  return "http://localhost:3000";
}

// TODO: reemplazar con tus datos reales.
export const profile: Profile = {
  name: "Tu Nombre",
  role: "Full-Stack Software Engineer",
  headline:
    "Construyo productos web de punta a punta: APIs seguras, interfaces rápidas y automatizaciones con IA.",
  about: [
    "Soy ingeniero de software full-stack con experiencia diseñando y operando aplicaciones en producción con Python/Flask, Node.js/TypeScript, Java/Spring Boot y React.",
    "Me enfoco en arquitecturas mantenibles, seguridad desde el diseño (JWT/RBAC, validación de inputs) y en automatizar procesos con n8n e IA generativa.",
  ],
  location: "Argentina · Remoto",
  socials: [
    { label: "GitHub", href: "https://github.com/tu-usuario" },
    { label: "LinkedIn", href: "https://www.linkedin.com/in/tu-usuario" },
  ],
  siteUrl: resolveSiteUrl(),
};

export const skills: SkillGroup[] = [
  { category: "Backend", items: ["Python / Flask", "Node.js / TypeScript", "Java / Spring Boot", "REST APIs"] },
  { category: "Frontend", items: ["React 19", "Next.js", "Tailwind CSS", "Accesibilidad"] },
  { category: "Datos", items: ["PostgreSQL", "MySQL", "SQLite", "Modelado relacional"] },
  { category: "DevOps", items: ["Docker", "Nginx", "Vercel", "Cloudflare", "JWT / RBAC"] },
  { category: "IA & Automatización", items: ["IA generativa", "n8n", "Integración de LLMs"] },
];
