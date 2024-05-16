import { baseUrl } from '@/app/sitemap';
import { Metadata, ResolvingMetadata } from 'next';

export async function generateMetadata(
  {},
  parent: ResolvingMetadata,
): Promise<Metadata> {
  const resolvedParentMetadata = (await parent) as Metadata;

  return {
    ...resolvedParentMetadata,
    title: 'Getting Started | Docs - Astroneer.js',
    description:
      'Astroneer.js is a next-generation framework for building modern, scalable and powerfull Node.js server-side applications. This documentation will guide you through the process of getting started with Astroneer.js, from installation to creating your first application.',
    openGraph: {
      ...resolvedParentMetadata.openGraph,
      title: 'Getting Started | Docs - Astroneer.js',
      description:
        'Astroneer.js is a next-generation framework for building modern, scalable and powerfull Node.js server-side applications. This documentation will guide you through the process of getting started with Astroneer.js, from installation to creating your first application.',
      url: new URL(`/docs/support-us`, baseUrl),
    },
    twitter: {
      ...resolvedParentMetadata.twitter,
      title: 'Getting Started | Docs - Astroneer.js',
      description:
        'Astroneer.js is a next-generation framework for building modern, scalable and powerfull Node.js server-side applications. This documentation will guide you through the process of getting started with Astroneer.js, from installation to creating your first application.',
    },
  };
}

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
