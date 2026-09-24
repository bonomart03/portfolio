# Portfolio

Portfolio personal en **Next.js 16** (App Router, TypeScript, Tailwind CSS v4), listo para desplegar en **Vercel**.

## Scripts

| Comando | Descripción |
| --- | --- |
| `npm run dev` | Servidor de desarrollo |
| `npm run build` | Build de producción |
| `npm test` | Tests unitarios (Jest + Testing Library) |
| `npm run test:coverage` | Tests con cobertura |
| `npm run typecheck` / `npm run lint` | Chequeo de tipos / ESLint |

## Editar contenido

Todo el contenido vive en `src/content/` como datos tipados:

- `profile.ts`: nombre, rol, bio, redes y skills
- `projects.ts`: proyectos (cada uno genera `/projects/<slug>` en build)
- `experience.ts`: experiencia laboral

## Arquitectura

```
src/
├── app/                  # Rutas (Server Components, SSG)
│   ├── actions/contact.ts   # Server Action (wrapper delgado)
│   ├── projects/[slug]/     # Detalle de proyecto (generateStaticParams)
│   └── sitemap.ts, robots.ts, opengraph-image.tsx
├── components/           # UI; solo contact-form.tsx es Client Component
├── content/              # Datos editables + tipos
└── lib/
    ├── projects.ts          # Capa de acceso a proyectos
    └── contact/             # Validación (Zod), manejo y entrega del formulario
```

## Formulario de contacto

Validación en servidor con Zod, honeypot anti-spam y entrega vía `ContactNotifier`:

- Con `CONTACT_WEBHOOK_URL` → POST JSON al webhook (ideal para un workflow de **n8n** que reenvíe por email/Slack).
- Sin configurar → se registra en consola (útil en desarrollo).

Ver `.env.example`.

## Deploy en Vercel

1. Subí el repo a GitHub e importalo en [vercel.com/new](https://vercel.com/new), **o** usá la CLI: `npm i -g vercel && vercel`.
2. Configurá las variables de entorno (`CONTACT_WEBHOOK_URL`, `CONTACT_WEBHOOK_SECRET`) en el proyecto de Vercel.
3. `vercel --prod` (o push a `main`) para publicar en producción.
