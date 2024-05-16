import { MetadataRoute } from 'next';

export const baseUrl = 'https://astroneer.dev';

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 1,
    },
    {
      url: `${baseUrl}/docs`,
      lastModified: new Date(),
      changeFrequency: 'always',
      priority: 1,
    },
  ];
}
