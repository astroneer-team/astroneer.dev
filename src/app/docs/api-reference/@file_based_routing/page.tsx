import ArticleSection from '@/components/ArticleSection';
import ArticleTitle from '@/components/ArticleTitle';
import InlineCode from '@/components/InlineCode';
import Topic from '@/components/Topic';
import Link from 'next/link';

export default function FileBasedRoutingArticle() {
  return (
    <Topic hash="file-based-routing">
      <ArticleSection>
        <ArticleTitle>File-Based Routing</ArticleTitle>
        <div className="space-y-4">
          <p>
            Astroneer.js uses a file-based routing system to handle incoming
            requests. This means that each route in your application is defined
            by a file in the{' '}
            <InlineCode>
              <Link
                className="text-primary"
                href="/docs/getting-started#project-structure"
              >
                routes
              </Link>
            </InlineCode>{' '}
            directory.
          </p>
          <p>
            When your Astroneer app starts, the{' '}
            <InlineCode>
              <Link
                className="text-primary"
                href="/docs/api-reference#astroneer-router"
              >
                AstroneerRouter
              </Link>
            </InlineCode>
            , which is responsible for routing requests to the appropriate
            handler, reads the files in the{' '}
            <InlineCode>
              <Link
                className="text-primary"
                href="/docs/getting-started#project-structure"
              >
                routes
              </Link>
            </InlineCode>{' '}
            directory and creates a routing table.
          </p>
          <p>
            The routing table is a map of route patterns to the corresponding
            handler functions. The router uses this table to determine which
            handler to call when a request is received.
          </p>
        </div>
      </ArticleSection>
    </Topic>
  );
}
