import ArticleSection from '@/components/ArticleSection';
import ArticleTitle from '@/components/ArticleTitle';
import Code from '@/components/Code';
import ExternalLink from '@/components/ExternalLink';

export default function Page() {
  return (
    <div>
      <ArticleSection>
        <ArticleTitle>Introduction</ArticleTitle>
        <p>Welcome to Astroneer.js documentation!</p>
      </ArticleSection>
      <ArticleSection>
        <ArticleTitle subtitle>What&apos;s Astroneer.js?</ArticleTitle>
        <div className="space-y-4">
          <p>
            Astroneer.js is a next-generation framework for building modern,
            scalable, and fast Node.js server-side applications.
          </p>
          <p>
            It is designed to be simple to use and easy to understand, while
            providing powerful features that allow you to build complex and
            powerfull applications.
          </p>
          <p>
            Inspired by the simplicity of the{' '}
            <ExternalLink href="https://nextjs.org/docs/app/building-your-application/routing/route-handlers">
              API routes in Next.js
            </ExternalLink>
            , Astroneer.js provides a file-based routing system that allows you
            to create routes by simply creating files in the <Code>routes</Code>{' '}
            directory.
          </p>
          <p>
            It also comes with a powerful middleware system that allows you to
            create middleware functions that can be applied to all routes or
            specific routes.
          </p>
        </div>
      </ArticleSection>
    </div>
  );
}
