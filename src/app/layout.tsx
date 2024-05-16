import Header from '@/components/Header';
import { Analytics } from '@vercel/analytics/next';
import { SpeedInsights } from '@vercel/speed-insights/next';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import StoreProvider from './StoreProvider';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  metadataBase: new URL('https://astroneer.dev'),
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
      url: 'https://lucaslarangeira.com',
    },
    {
      name: 'Astroneer Team',
      url: 'https://github.com/astroneer-team',
    },
  ],
  category: 'Web Development',
  creator: 'Astroneer Team',
  publisher: 'Lucas Larangeira',
  robots: 'index, follow',
  classification: 'Web Development',
  openGraph: {
    title:
      'Astroneer.js | Next-generation framework for building server-side applications with Node.js & TypeScript',
    description:
      'Astroneer.js is a next-generation framework for building server-side applications with Node.js & TypeScript.',
    type: 'website',
    emails: 'team@astroneer.dev',
    images: '/images/og-image.png',
    siteName: 'Astroneer.js',
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
