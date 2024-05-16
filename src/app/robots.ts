import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: ['/_next', '/_vercel', '/_assets'],
    },
    sitemap: [
      'https://astroneer.dev/sitemap.xml',
      'https://astroneer.dev/docs/sitemap.xml',
    ],
  };
}
