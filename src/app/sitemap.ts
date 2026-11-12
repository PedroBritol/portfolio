import { MetadataRoute } from 'next';
import { projectsData } from '@/data/projectsData';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://www.pedrobritol.com.br';
  const lastModified = new Date();

  const projectRoutes: MetadataRoute.Sitemap = projectsData
    .filter((project) => !project.externalLink)
    .map((project) => ({
      url: `${baseUrl}/projetos/${project.id}`,
      lastModified,
      changeFrequency: 'monthly',
      priority: 0.7,
    }));

  return [
    {
      url: baseUrl,
      lastModified,
      changeFrequency: 'monthly',
      priority: 1,
    },
    {
      url: `${baseUrl}/projetos`,
      lastModified,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    ...projectRoutes,
  ];
}
