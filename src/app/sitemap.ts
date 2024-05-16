import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: 'https://astroneer.dev',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 1,
    },
    {
      url: 'https://astroneer.dev/docs',
      lastModified: new Date(),
      changeFrequency: 'always',
      priority: 1,
    },
  ];
}
