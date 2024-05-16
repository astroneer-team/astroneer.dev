import { MetadataRoute } from 'next';
import { baseUrl } from '../sitemap';

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: `${baseUrl}/docs/getting-started`,
      lastModified: new Date(),
      changeFrequency: 'always',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/docs/overview`,
      lastModified: new Date(),
      changeFrequency: 'always',
      priority: 0.3,
    },
    {
      url: `${baseUrl}/docs/file-conventions`,
      lastModified: new Date(),
      changeFrequency: 'always',
      priority: 0.3,
    },
    {
      url: `${baseUrl}/docs/api-reference`,
      lastModified: new Date(),
      changeFrequency: 'always',
      priority: 0.3,
    },
    {
      url: `${baseUrl}/docs/support-us`,
      lastModified: new Date(),
      changeFrequency: 'always',
      priority: 0.3,
    },
  ];
}
