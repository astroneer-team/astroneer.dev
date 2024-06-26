import { baseUrl } from '@/app/sitemap';
import ArticleSection from '@/components/ArticleSection';
import ArticleTitle from '@/components/ArticleTitle';
import { Metadata, ResolvingMetadata } from 'next';

interface PageProps {}

export async function generateMetadata(
  _: PageProps,
  parent: ResolvingMetadata,
): Promise<Metadata> {
  const resolvedParentMetadata = (await parent) as Metadata;

  return {
    ...resolvedParentMetadata,
    title: 'Support us | Docs - Astroneer.js',
    description:
      'Astroneer.js is a next-generation framework for building modern, scalable and powerfull Node.js server-side applications. This documentation will guide you through the process of getting started with Astroneer.js, from installation to creating your first application.',
    openGraph: {
      ...resolvedParentMetadata.openGraph,
      title: 'Support us | Docs - Astroneer.js',
      description:
        'Astroneer.js is a next-generation framework for building modern, scalable and powerfull Node.js server-side applications. This documentation will guide you through the process of getting started with Astroneer.js, from installation to creating your first application.',
      url: new URL(`/docs/support-us`, baseUrl),
    },
    twitter: {
      ...resolvedParentMetadata.twitter,
      title: 'Support us | Docs - Astroneer.js',
      description:
        'Astroneer.js is a next-generation framework for building modern, scalable and powerfull Node.js server-side applications. This documentation will guide you through the process of getting started with Astroneer.js, from installation to creating your first application.',
    },
  };
}

export default function Page() {
  return (
    <>
      <ArticleSection>
        <ArticleTitle>Support us</ArticleTitle>
        <div className="space-y-4">
          <p>
            Astroneer is an MIT-licensed open source project. It&apos;s an
            independent project with its ongoing development made possible
            thanks to the support by the community. Astroneer is free to use and
            always will be. This framework is a result of sleepless nights,
            hours of development, and continuous improvement.
          </p>
        </div>
      </ArticleSection>
    </>
  );
}
