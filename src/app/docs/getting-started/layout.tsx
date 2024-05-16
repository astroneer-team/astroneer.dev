import { Metadata } from 'next';

export const metadata: Metadata = {
  metadataBase: new URL('https://astroneer.dev/docs/getting-started'),
  title: 'Getting Started | Docs - Astroneer.js',
  description:
    'Astroneer.js is a next-generation framework for building modern, scalable and powerfull Node.js server-side applications. This documentation will guide you through the process of getting started with Astroneer.js, from installation to creating your first application.',
  openGraph: {
    title: 'Getting Started | Docs - Astroneer.js',
    description:
      'Astroneer.js is a next-generation framework for building modern, scalable and powerfull Node.js server-side applications. This documentation will guide you through the process of getting started with Astroneer.js, from installation to creating your first application.',
    url: new URL('https://astroneer.dev/docs/getting-started'),
  },
};

export default function Layout({
  children,
  installation,
  project_structure,
}: {
  children: React.ReactNode;
  installation: React.ReactNode;
  project_structure: React.ReactNode;
}) {
  return (
    <div className="divide-y divide-white/10">
      {children}
      {installation}
      {project_structure}
    </div>
  );
}
