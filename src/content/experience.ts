import type { Experience } from "./types";

// TODO: confirmar períodos y agregar experiencia laboral formal si la hay.
export const experience: Experience[] = [
  {
    company: "Proyectos para clientes",
    role: "Desarrollador Full Stack",
    period: "2024 — Actualidad",
    achievements: [
      "Sistema de pedidos y cadetería con despacho automático y pagos para un restaurante (Next.js, Prisma, Neon).",
      "Sistema de gestión para un taller de motos con auth segura y roles (React, Express, PostgreSQL).",
      "Landings y e-commerce para comercios locales, desplegados en Vercel.",
    ],
  },
  {
    company: "Formación",
    role: "Estudiante de Análisis de Sistemas",
    period: "En curso",
    achievements: [
      "Desarrollo backend con Python/Flask y Java, modelado de bases de datos y desarrollo móvil Android.",
    ],
  },
];
