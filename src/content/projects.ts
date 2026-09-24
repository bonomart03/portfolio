import type { Project } from "./types";

const GITHUB = "https://github.com/bonomart03";

export const projects: Project[] = [
  {
    slug: "la-vieja-estacion",
    title: "La Vieja Estación — Pedidos y cadetería",
    summary:
      "Plataforma de pedidos online para un restaurante: tienda, pantalla de cocina (KDS), PWA de cadetes con despacho automático y pagos con Mercado Pago.",
    description: [
      "Sistema completo para un local de comidas caseras: los clientes piden desde la tienda online, la cocina gestiona las comandas en un KDS y los cadetes reciben ofertas de viaje en una PWA con GPS.",
      "El despacho es just-in-time: la búsqueda de cadete arranca cuando falta el tiempo justo para que llegue al local con el pedido listo, y ofrece el viaje al cadete disponible más cercano con una oferta de 45 segundos.",
      "Incluye tarifa dinámica por distancia, clima y demanda, notificaciones por WhatsApp y Web Push, y liquidaciones para el reparto de la tarifa entre cadete y plataforma.",
    ],
    stack: ["Next.js", "TypeScript", "Prisma", "PostgreSQL (Neon)", "Mercado Pago", "Web Push", "Vercel"],
    highlights: [
      "Precios recalculados en el servidor: nunca se confía en los montos del cliente",
      "Motor de ofertas con TTL y escalamiento automático si no hay cadete",
      "Modo simulado de pagos y WhatsApp para desarrollo sin credenciales",
    ],
    repoUrl: `${GITHUB}/servicio-cadeteria`,
    liveUrl: "https://la-vieja-estacion-nine.vercel.app",
    featured: true,
    year: 2026,
  },
  {
    slug: "taller-tohan",
    title: "Taller Tohan — Sistema de gestión",
    summary:
      "Sistema web para un taller de motos: clientes, vehículos, órdenes de servicio con historial y dashboard en tiempo real, instalable como PWA.",
    description: [
      "Gestión integral del taller: alta de clientes y vehículos, órdenes de trabajo con diagnóstico, repuestos, costos y estados, e historial completo por cliente.",
      "Frontend en React + Vite desplegado en Vercel y API en Node/Express desplegada en Render, conectados mediante un proxy same-origin para usar cookies seguras.",
    ],
    stack: ["React 18", "TypeScript", "Node.js", "Express", "Prisma", "PostgreSQL", "Zod"],
    highlights: [
      "Auth con JWT en cookies httpOnly y contraseñas con argon2id",
      "Roles ADMIN y MECÁNICO",
      "Validación con Zod, rate limiting, Helmet y paginación obligatoria",
    ],
    repoUrl: `${GITHUB}/tohan-motorcycle-workshop-manager`,
    liveUrl: "https://frontend-bono-s-projects2.vercel.app",
    featured: true,
    year: 2026,
  },
  {
    slug: "agente-ia",
    title: "Agente de IA con herramientas y memoria",
    summary: "Agente en Python con FastAPI y LangGraph: ciclo razonar → herramienta → observar, memoria de conversación y API REST.",
    description: [
      "Agente de IA modular: un orquestador ejecuta el ciclo de razonamiento y llama a herramientas (búsqueda web, calculadora, clima) según lo que necesite la consulta.",
      "El código separa agente, herramientas, clientes de modelos, prompts y capa de API, para poder sumar herramientas o cambiar de LLM sin tocar el resto.",
    ],
    stack: ["Python", "FastAPI", "LangGraph", "LLMs", "Docker"],
    highlights: [
      "Arquitectura por capas: agente, herramientas, modelos, prompts y API",
      "Proceso de desarrollo documentado con decisiones técnicas",
    ],
    repoUrl: `${GITHUB}/agente-ia`,
    featured: true,
    year: 2026,
  },
  {
    slug: "scraper-leads",
    title: "Scraper de leads con IA",
    summary:
      "Busca comercios en Google Maps, los puntúa por probabilidad de conversión, genera un mockup de sitio para cada uno y redacta el mensaje de venta con un LLM.",
    description: [
      "Herramienta de prospección: dado un rubro y una zona, encuentra comercios y prioriza los que tienen clientes (reseñas) pero no tienen sitio web propio.",
      "Para los mejores candidatos genera un mockup de sitio y un mensaje de venta personalizado con IA. La salida es un CSV ordenado por score.",
    ],
    stack: ["Python", "Scraping", "LLMs", "SQLite"],
    highlights: [
      "Scoring por reseñas, calificación, verificación y ausencia de sitio web",
      "Los datos de comercios reales quedan fuera del repositorio",
    ],
    repoUrl: `${GITHUB}/scraper-leads`,
    featured: false,
    year: 2026,
  },
  {
    slug: "dr-labone-dashboard",
    title: "Dr. Labone — Dashboard multimedia",
    summary: "Sistema full-stack para gestionar entidades y personajes, con frontend en React y backend en Spring Boot sobre MySQL.",
    description: [
      "Panel de gestión multimedia con operaciones CRUD sobre entidades y personajes.",
      "Frontend en React desplegado en Vercel, que consume una API REST en Spring Boot con persistencia en MySQL.",
    ],
    stack: ["React", "JavaScript", "Java", "Spring Boot", "MySQL"],
    highlights: ["API REST en Spring Boot", "Frontend desplegado en Vercel"],
    repoUrl: `${GITHUB}/dr-labone-dashboard`,
    liveUrl: "https://dr-labone-dashboard.vercel.app",
    featured: false,
    year: 2026,
  },
  {
    slug: "tohan-imports",
    title: "Tohan Imports — E-commerce",
    summary: "Catálogo e-commerce en Flask con buscador, filtros por categoría y panel de administración de inventario y logística.",
    description: [
      "Tienda con estética cyberpunk desarrollada en Python con Flask y SQLAlchemy.",
      "Incluye buscador, filtros por categoría y un panel de administración para gestionar inventario y logística.",
    ],
    stack: ["Python", "Flask", "SQLAlchemy", "SQL"],
    highlights: ["Panel de administración de inventario", "Buscador con filtros por categoría"],
    repoUrl: `${GITHUB}/Tohan-Imports`,
    featured: false,
    year: 2026,
  },
  {
    slug: "hotel-booking-android",
    title: "App de reservas de hotel (Android)",
    summary: "App nativa en Java para gestionar reservas: cálculo dinámico de tarifas, persistencia local con SQLite y consulta por DNI.",
    description: [
      "Aplicación Android desarrollada en la cursada de Análisis de Sistemas.",
      "Calcula el costo según noches y tipo de habitación, guarda las reservas en SQLite y genera un comprobante en una segunda Activity mediante Intents explícitos.",
    ],
    stack: ["Java", "Android", "SQLite"],
    highlights: ["Persistencia local con SQLiteOpenHelper", "Validación de formularios"],
    repoUrl: `${GITHUB}/Android-Hotel-Booking-App`,
    featured: false,
    year: 2026,
  },
];
