import { Metadata } from 'next';

export const metadata: Metadata = {
  metadataBase: new URL('https://astroneer.dev/docs/api-reference'),
  title: 'API Reference | Docs - Astroneer.js',
  description:
    'Astroneer.js is a next-generation framework for building modern, scalable and powerfull Node.js server-side applications. This documentation will guide you through the process of getting started with Astroneer.js, from installation to creating your first application.',
  openGraph: {
    title: 'API Reference | Docs - Astroneer.js',
    description:
      'Astroneer.js is a next-generation framework for building modern, scalable and powerfull Node.js server-side applications. This documentation will guide you through the process of getting started with Astroneer.js, from installation to creating your first application.',
    url: new URL('https://astroneer.dev/docs/api-reference'),
  },
};

export default function Layout({
  children,
  file_based_routing,
}: {
  children: React.ReactNode;
  file_based_routing: React.ReactNode;
}) {
  return (
    <>
      {children}
      {file_based_routing}
    </>
  );
}
