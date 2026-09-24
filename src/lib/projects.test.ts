/**
 * @jest-environment node
 */
import { projects } from "@/content/projects";
import type { Project } from "@/content/types";
import { getProjectBySlug, getProjects, getProjectSlugs } from "./projects";

const make = (slug: string, year: number, featured: boolean): Project => ({
  slug,
  year,
  featured,
  title: slug,
  summary: "",
  description: [],
  stack: [],
  highlights: [],
});

describe("projects", () => {
  it("ordena destacados primero y luego por año descendente", () => {
    const source = [make("a", 2023, false), make("b", 2021, true), make("c", 2025, false), make("d", 2024, true)];
    expect(getProjects(source).map((p) => p.slug)).toEqual(["d", "b", "c", "a"]);
  });

  it("no muta el array original", () => {
    const source = [make("a", 2020, false), make("b", 2025, true)];
    getProjects(source);
    expect(source.map((p) => p.slug)).toEqual(["a", "b"]);
  });

  it("busca por slug", () => {
    expect(getProjectBySlug("b", [make("a", 2020, false), make("b", 2021, false)])?.slug).toBe("b");
    expect(getProjectBySlug("x", [])).toBeUndefined();
  });

  // Invariantes del contenido real: rompen el build de tests si se edita mal.
  it("el contenido tiene slugs únicos y URL-safe", () => {
    const slugs = getProjectSlugs(projects);
    expect(new Set(slugs).size).toBe(slugs.length);
    for (const slug of slugs) expect(slug).toMatch(/^[a-z0-9]+(?:-[a-z0-9]+)*$/);
  });
});
