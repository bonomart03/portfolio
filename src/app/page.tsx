import { ContactForm } from "@/components/contact-form";
import { ProjectCard } from "@/components/project-card";
import { Section } from "@/components/section";
import { TagList } from "@/components/tag-list";
import { experience } from "@/content/experience";
import { profile, skills } from "@/content/profile";
import { getProjects } from "@/lib/projects";

/** Página principal: 100% Server Component y prerenderizada en build (SSG). */
export default function Home() {
  const projects = getProjects();

  return (
    <>
      {/* Hero */}
      <section className="mx-auto max-w-5xl px-4 pt-20 pb-12 sm:px-6 sm:pt-28">
        <p className="mb-4 font-mono text-sm text-accent">
          {profile.role} · {profile.location}
        </p>
        <h1 className="max-w-3xl text-4xl font-semibold tracking-tight text-balance sm:text-5xl">
          Hola, soy {profile.name}.
        </h1>
        <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted text-pretty">{profile.headline}</p>
        <div className="mt-8 flex flex-wrap gap-3">
          <a
            href="#proyectos"
            className="rounded-lg bg-accent px-5 py-2.5 text-sm font-medium text-accent-foreground hover:opacity-90"
          >
            Ver proyectos
          </a>
          <a href="#contacto" className="rounded-lg border border-border px-5 py-2.5 text-sm font-medium hover:border-accent">
            Contactarme
          </a>
        </div>
      </section>

      <Section id="sobre-mi" eyebrow="01" title="Sobre mí">
        <div className="grid gap-10 md:grid-cols-[3fr_2fr]">
          <div className="space-y-4 leading-relaxed text-muted">
            {profile.about.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
          <dl className="space-y-5">
            {skills.map((group) => (
              <div key={group.category}>
                <dt className="mb-2 text-sm font-medium">{group.category}</dt>
                <dd>
                  <TagList items={group.items} label={`Habilidades de ${group.category}`} />
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </Section>

      <Section id="proyectos" eyebrow="02" title="Proyectos">
        <ul className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <li key={project.slug}>
              <ProjectCard project={project} />
            </li>
          ))}
        </ul>
      </Section>

      <Section id="experiencia" eyebrow="03" title="Experiencia y formación">
        <ol className="space-y-8 border-l border-border pl-6">
          {experience.map((job) => (
            <li key={`${job.company}-${job.period}`} className="relative">
              <span aria-hidden className="absolute top-2 -left-[29px] size-2.5 rounded-full bg-accent" />
              <p className="font-mono text-xs text-muted">{job.period}</p>
              <h3 className="mt-1 font-semibold">
                {job.role} · <span className="text-muted">{job.company}</span>
              </h3>
              <ul className="mt-3 list-disc space-y-1 pl-5 text-sm text-muted">
                {job.achievements.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </li>
          ))}
        </ol>
      </Section>

      <Section id="contacto" eyebrow="04" title="Contacto">
        <p className="mb-8 max-w-xl text-muted">
          ¿Tenés un proyecto o una propuesta? Escribime y te respondo a la brevedad.
        </p>
        <ContactForm />
      </Section>
    </>
  );
}
