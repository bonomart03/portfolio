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

export const profile: Profile = {
  name: "Bono Martinez",
  role: "Desarrollador Full Stack",
  headline:
    "Desarrollo sistemas web completos para negocios reales: APIs seguras, bases de datos bien modeladas y automatizaciones con IA.",
  about: [
    "Soy desarrollador full stack y estudiante de Análisis de Sistemas en Buenos Aires. Mi foco está en el backend (Python/Flask, Node.js, Java/Spring Boot) y en las bases de datos, sin descuidar el frontend con React y Next.js.",
    "Construyo sistemas que usan comercios reales: pedidos y cadetería para un restaurante, gestión para un taller de motos, e-commerce y landings. También desarrollo agentes y herramientas con IA generativa, y apps móviles en Java y Kotlin.",
  ],
  location: "Buenos Aires, Argentina",
  socials: [{ label: "GitHub", href: "https://github.com/bonomart03" }],
  siteUrl: resolveSiteUrl(),
};

export const skills: SkillGroup[] = [
  { category: "Backend", items: ["Python / Flask", "FastAPI", "Node.js / Express", "Java / Spring Boot"] },
  { category: "Frontend", items: ["React", "Next.js", "TypeScript", "Tailwind CSS", "PWA"] },
  { category: "Datos", items: ["PostgreSQL", "MySQL", "SQLite", "Prisma", "SQLAlchemy"] },
  { category: "DevOps", items: ["Vercel", "Render", "Docker", "JWT / RBAC"] },
  { category: "IA & Automatización", items: ["LangGraph", "Integración de LLMs", "Scraping", "n8n"] },
];
