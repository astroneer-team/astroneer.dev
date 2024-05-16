import { baseUrl } from '@/app/sitemap';
import { Metadata, ResolvingMetadata } from 'next';

interface LayoutProps {
  children: React.ReactNode;
  first_steps: React.ReactNode;
}

export async function generateMetadata(
  _: LayoutProps,
  parent: ResolvingMetadata,
): Promise<Metadata> {
  const resolvedParentMetadata = (await parent) as Metadata;

  return {
    ...resolvedParentMetadata,
    title: 'Overview | Docs - Astroneer.js',
    description:
      'Astroneer.js is a next-generation framework for building modern, scalable and powerfull Node.js server-side applications. This documentation will guide you through the process of getting started with Astroneer.js, from installation to creating your first application.',
    openGraph: {
      ...resolvedParentMetadata.openGraph,
      title: 'Overview | Docs - Astroneer.js',
      description:
        'Astroneer.js is a next-generation framework for building modern, scalable and powerfull Node.js server-side applications. This documentation will guide you through the process of getting started with Astroneer.js, from installation to creating your first application.',
      url: new URL(`/docs/support-us`, baseUrl),
    },
    twitter: {
      ...resolvedParentMetadata.twitter,
      title: 'Overview | Docs - Astroneer.js',
      description:
        'Astroneer.js is a next-generation framework for building modern, scalable and powerfull Node.js server-side applications. This documentation will guide you through the process of getting started with Astroneer.js, from installation to creating your first application.',
    },
  };
}

export default function Layout({ children, first_steps }: LayoutProps) {
  return (
    <>
      {children}
      {first_steps}
    </>
  );
}
