import Header from '@/components/Header';
import { Analytics } from '@vercel/analytics/next';
import { SpeedInsights } from '@vercel/speed-insights/next';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { baseUrl } from './sitemap';
import StoreProvider from './StoreProvider';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title:
    'Astroneer.js | Next-generation framework for building server-side applications with Node.js & TypeScript',
  description:
    'Astroneer.js is a next-generation framework for building server-side applications with Node.js & TypeScript.',
  keywords: [
    'astroneer.js',
    'astroneer',
    'node.js',
    'typescript',
    'framework',
    'server-side',
    'applications',
    'web',
    'development',
  ],
  authors: [
    {
      name: 'Lucas Larangeira',
      url: new URL('https://lucaslarangeira.com'),
    },
  ],
  category: 'Web Development',
  creator: 'Astroneer Team',
  publisher: 'Lucas Larangeira',
  robots: {
    follow: true,
    index: true,
  },
  classification: 'Web Development',
  openGraph: {
    title:
      'Astroneer.js | Next-generation framework for building server-side applications with Node.js & TypeScript',
    description:
      'Astroneer.js is a next-generation framework for building server-side applications with Node.js & TypeScript.',
    type: 'website',
    emails: 'team@astroneer.dev',
    images: [
      {
        url: new URL('/images/og-image.png', baseUrl),
        width: 1280,
        height: 720,
        alt: 'Astroneer.js',
      },
    ],
    siteName: 'Astroneer.js',
    url: new URL(baseUrl),
  },
  twitter: {
    images: [
      {
        url: new URL('/images/og-image.png', baseUrl),
        width: 1280,
        height: 720,
        alt: 'Astroneer.js',
      },
    ],
    card: 'summary_large_image',
    title:
      'Astroneer.js | Next-generation framework for building server-side applications with Node.js & TypeScript',
    description:
      'Astroneer.js is a next-generation framework for building server-side applications with Node.js & TypeScript.',
    creator: '@astroneerjs',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <StoreProvider>
      <html lang="en" className="styled-scrollbar">
        <body className={inter.className}>
          <Header />
          {children}
          <Analytics />
          <SpeedInsights />
        </body>
      </html>
    </StoreProvider>
  );
}
