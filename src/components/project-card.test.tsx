import { render, screen } from "@testing-library/react";
import type { Project } from "@/content/types";
import { ProjectCard } from "./project-card";

const project: Project = {
  slug: "demo",
  title: "Proyecto Demo",
  summary: "Resumen del proyecto",
  description: [],
  stack: ["React", "Flask", "PostgreSQL", "Docker", "Nginx", "Redis"],
  highlights: [],
  featured: true,
  year: 2026,
};

describe("ProjectCard", () => {
  it("enlaza a la página de detalle del proyecto", () => {
    render(<ProjectCard project={project} />);
    expect(screen.getByRole("link", { name: "Proyecto Demo" })).toHaveAttribute("href", "/projects/demo");
  });

  it("muestra como máximo 5 tecnologías y la marca de destacado", () => {
    render(<ProjectCard project={project} />);
    expect(screen.getAllByRole("listitem")).toHaveLength(5);
    expect(screen.queryByText("Redis")).not.toBeInTheDocument();
    expect(screen.getByText("Destacado")).toBeInTheDocument();
  });
});
