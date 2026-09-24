import type { Project } from "./types";

// TODO: reemplazar por tus proyectos reales. Estos son ejemplos alineados a tu stack.
export const projects: Project[] = [
  {
    slug: "api-gestion-rbac",
    title: "API de gestión con RBAC",
    summary: "API REST en Flask con autenticación JWT, roles y permisos granulares sobre PostgreSQL.",
    description: [
      "Backend para una aplicación interna de gestión: usuarios, roles y recursos con permisos por acción.",
      "Arquitectura en capas (rutas → servicios → repositorios) para aislar la lógica de negocio del acceso a datos y facilitar el testing.",
    ],
    stack: ["Python", "Flask", "PostgreSQL", "SQLAlchemy", "JWT", "Docker", "pytest"],
    highlights: [
      "Refresh tokens con rotación y revocación",
      "Queries parametrizadas vía ORM (sin SQL injection)",
      "Cobertura de tests > 85% con pytest",
    ],
    repoUrl: "https://github.com/tu-usuario/api-gestion-rbac",
    featured: true,
    year: 2026,
  },
  {
    slug: "automatizacion-n8n-ia",
    title: "Automatización de leads con n8n + IA",
    summary: "Workflow que clasifica y enriquece leads entrantes con un LLM y los sincroniza con el CRM.",
    description: [
      "Pipeline de automatización que recibe leads por webhook, los clasifica con IA generativa y los enruta al equipo correspondiente.",
      "Incluye reintentos, manejo de errores y notificaciones cuando un paso falla.",
    ],
    stack: ["n8n", "Node.js", "LLM API", "PostgreSQL", "Cloudflare"],
    highlights: [
      "Redujo el tiempo de respuesta a leads de horas a minutos",
      "Clasificación estructurada con salida JSON validada",
    ],
    featured: true,
    year: 2025,
  },
  {
    slug: "dashboard-react-spring",
    title: "Dashboard de operaciones",
    summary: "Frontend en React con backend Spring Boot para monitorear métricas de negocio en tiempo real.",
    description: [
      "Dashboard con gráficos y filtros sobre datos operativos, con backend Spring Boot y MySQL.",
      "Code splitting por ruta y lazy loading de los gráficos para mantener un bundle inicial liviano.",
    ],
    stack: ["React", "TypeScript", "Spring Boot", "MySQL", "Nginx"],
    highlights: ["Paginación y filtros del lado del servidor", "Índices compuestos para las queries más frecuentes"],
    liveUrl: "https://example.com",
    featured: false,
    year: 2024,
  },
];
