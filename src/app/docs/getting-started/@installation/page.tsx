import ArticleSection from '@/components/ArticleSection';
import ArticleTitle from '@/components/ArticleTitle';
import Code from '@/components/Code';
import CodeViewer from '@/components/CodeViewer';
import DescriptionList from '@/components/DescriptionList';
import ExternalLink from '@/components/ExternalLink';
import InlineCode from '@/components/InlineCode';
import Topic from '@/components/Topic';
import Link from 'next/link';

export default function InstallationArticle() {
  return (
    <Topic hash="installation">
      <ArticleSection>
        <ArticleTitle>Installation</ArticleTitle>
        <div className="space-y-4">
          <p>System requirements:</p>
          <DescriptionList>
            <li>
              <ExternalLink href="https://nodejs.org/en/download/">
                Node.js 18.x
              </ExternalLink>{' '}
              or later
            </li>
            <li>Any operating system that supports Node.js</li>
          </DescriptionList>
        </div>
      </ArticleSection>
      <ArticleSection>
        <ArticleTitle subtitle>Scaffolding a New Project</ArticleTitle>
        <div className="space-y-4">
          <p>
            To get started, we recommend starting a new Astroneer.js project
            using the{' '}
            <Link
              href="/docs/cli"
              className="text-primary hover:brightness-125 duration-300 transition-all"
            >
              Astroneer CLI
            </Link>
            , which sets up everything you need to build your application in
            seconds. To install the CLI, run the following command:
          </p>
          <CodeViewer title="Terminal" language="bash">
            <Code>npm install -g @astroneer/cli</Code>
            <Code>astroneer new my-astroneer-app</Code>
          </CodeViewer>
          <p>
            It will create a new directory called{' '}
            <InlineCode>my-astroneer-app</InlineCode> and scaffold a new
            Astroneer.js project inside it.
          </p>
        </div>
      </ArticleSection>
      <ArticleSection>
        <ArticleTitle subtitle>Running for the First Time</ArticleTitle>
        <div className="space-y-4">
          <p>
            To run the application, navigate to the project directory and run
            the following command:
          </p>
          <CodeViewer title="Terminal" language="bash">
            <Code>cd my-astroneer-app</Code>
            <Code>npm run dev</Code>
          </CodeViewer>
          <p>
            This command will start the development server with hot reloading
            enabled.
          </p>
          <p>You should see the following messages in the terminal: </p>
          <CodeViewer title="Terminal" language="bash">
            <Code>
              <span className="text-gray-500">INFO</span>
              <span className="text-primary"> ✓ </span>
              <span className="text-gray-500">.astroneer/routes/hello.ts</span>
              <span className="text-primary"> (21ms)</span>
            </Code>
            <Code>
              <span className="text-gray-500">INFO</span>
              <span className="text-primary"> ✓ </span>
              <span className="text-gray-500">.astroneer/server.ts</span>
              <span className="text-primary"> (38ms)</span>
            </Code>
            <Code>
              <span className="text-gray-500">INFO</span>
              <span className="text-primary"> λ Mapped GET /hello</span>
            </Code>
            <Code>
              <span className="text-gray-500">INFO</span>
              <span className="text-primary">
                {' '}
                {'>'} Listening on http://localhost:3000
              </span>
            </Code>
          </CodeViewer>
          <p>
            After that, all you need to do is start launching rockets to{' '}
            <InlineCode>http://localhost:3000</InlineCode>!
          </p>
        </div>
      </ArticleSection>
    </Topic>
  );
}
