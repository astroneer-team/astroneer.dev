import ArticleSection from '@/components/ArticleSection';
import ArticleTitle from '@/components/ArticleTitle';
import CodeLine from '@/components/CodeLine';
import CodeViewer from '@/components/CodeViewer';
import DescriptionList from '@/components/DescriptionList';
import ExternalLink from '@/components/ExternalLink';
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
            <CodeLine line="npm install -g @astroneer/cli" />
            <CodeLine line="astroneer new my-astroneer-app" />
          </CodeViewer>
        </div>
      </ArticleSection>
    </Topic>
  );
}
