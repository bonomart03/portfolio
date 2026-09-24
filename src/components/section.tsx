import type { ReactNode } from "react";

interface SectionProps {
  id: string;
  title: string;
  eyebrow?: string;
  children: ReactNode;
}

/** Contenedor de sección con ancla para la navegación y encabezado consistente. */
export function Section({ id, title, eyebrow, children }: SectionProps) {
  const headingId = `${id}-title`;
  return (
    <section id={id} aria-labelledby={headingId} className="scroll-mt-20 py-16 sm:py-20">
      <div className="mx-auto max-w-5xl px-4 sm:px-6">
        {eyebrow && <p className="mb-2 font-mono text-xs uppercase tracking-widest text-accent">{eyebrow}</p>}
        <h2 id={headingId} className="mb-8 text-2xl font-semibold tracking-tight sm:text-3xl">
          {title}
        </h2>
        {children}
      </div>
    </section>
  );
}
