import { MetadataRoute } from 'next';
import { projectsData } from '@/data/projectsData';

const LAST_MODIFIED = new Date('2026-11-12T00:00:00Z');

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://www.pedrobritol.com.br';

  const projectRoutes: MetadataRoute.Sitemap = projectsData
    .filter((project) => !project.externalLink)
    .map((project) => ({
      url: `${baseUrl}/projetos/${project.id}`,
      lastModified: LAST_MODIFIED,
      changeFrequency: 'monthly',
      priority: 0.7,
    }));

  return [
    {
      url: baseUrl,
      lastModified: LAST_MODIFIED,
      changeFrequency: 'monthly',
      priority: 1,
    },
    {
      url: `${baseUrl}/projetos`,
      lastModified: LAST_MODIFIED,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    ...projectRoutes,
  ];
}
