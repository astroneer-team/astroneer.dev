import Header from '@/components/Header';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

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
  ],
  category: 'Web Development',
  creator: 'Lucas Larangeira',
  publisher: 'Lucas Larangeira',
  robots: 'index, follow',
  bookmarks: 'yes',
  classification: 'Web Development',
  openGraph: {
    type: 'website',
    emails: 'team@astroneer.dev',
    images: '/images/og-image.png',
  },
  twitter: {
    creator: '@luketsx_',
    site: '@astroneerjs',
  },
  alternates: {
    canonical: '/',
    languages: {
      'en-US': '/',
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        {children}
      </body>
    </html>
  );
}
