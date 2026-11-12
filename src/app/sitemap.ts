import { MetadataRoute } from "next";
import { projectsData } from "@/data/projectsData";

const site = "https://www.pedrobritol.com.br";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: site, lastModified: new Date(), changeFrequency: "monthly", priority: 1 },
    ...projectsData.map((p) => ({
      url: `${site}/projetos/${p.id}`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.8,
    })),
  ];
}
