import { MetadataRoute } from 'next';

const baseUrl = 'https://astroneer.dev/docs';

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: `${baseUrl}/getting-started`,
      lastModified: new Date(),
      changeFrequency: 'always',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/overview`,
      lastModified: new Date(),
      changeFrequency: 'always',
      priority: 0.3,
    },
    {
      url: `${baseUrl}/file-conventions`,
      lastModified: new Date(),
      changeFrequency: 'always',
      priority: 0.3,
    },
    {
      url: `${baseUrl}/api-reference`,
      lastModified: new Date(),
      changeFrequency: 'always',
      priority: 0.3,
    },
    {
      url: `${baseUrl}/support-us`,
      lastModified: new Date(),
      changeFrequency: 'always',
      priority: 0.3,
    },
  ];
}
