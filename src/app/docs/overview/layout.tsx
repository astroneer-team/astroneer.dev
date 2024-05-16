import { Metadata } from 'next';

export const metadata: Metadata = {
  metadataBase: new URL('https://astroneer.dev/docs/overview'),
  title: 'Overview | Docs - Astroneer.js',
  description:
    'Astroneer.js is a next-generation framework for building modern, scalable and powerfull Node.js server-side applications. This documentation will guide you through the process of getting started with Astroneer.js, from installation to creating your first application.',
  openGraph: {
    title: 'Overview | Docs - Astroneer.js',
    description:
      'Astroneer.js is a next-generation framework for building modern, scalable and powerfull Node.js server-side applications. This documentation will guide you through the process of getting started with Astroneer.js, from installation to creating your first application.',
    url: new URL('https://astroneer.dev/docs/overview'),
  },
};

export default function Layout({
  children,
  first_steps,
}: {
  children: React.ReactNode;
  first_steps: React.ReactNode;
}) {
  return (
    <>
      {children}
      {first_steps}
    </>
  );
}
