import type { MetadataRoute } from "next";
import { profile } from "@/content/profile";
import { getProjects } from "@/lib/projects";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = profile.siteUrl.replace(/\/$/, "");
  return [
    { url: base, changeFrequency: "monthly", priority: 1 },
    ...getProjects().map((project) => ({
      url: `${base}/projects/${project.slug}`,
      changeFrequency: "yearly" as const,
      priority: 0.7,
    })),
  ];
}
