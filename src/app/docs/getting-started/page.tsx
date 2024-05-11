import ArticleSection from '@/components/ArticleSection';
import ArticleTitle from '@/components/ArticleTitle';
import DescriptionList from '@/components/DescriptionList';
import ExternalLink from '@/components/ExternalLink';
import InlineCode from '@/components/InlineCode';
import Link from 'next/link';

export default function GettingStartedArticle() {
  return (
    <div>
      <ArticleSection>
        <ArticleTitle>Introduction</ArticleTitle>
        <div className="space-y-4">
          <p>
            Astroneer (Astroneer.js) is a next-generation framework for building
            modern, scalable, and powerful Node.js server-side applications. It
            is built on top of TypeScript and combines elements of popular
            frameworks like Next.js to provide an API that is simple to use and
            easy to understand.
          </p>
          <p>
            This documentation will guide you through the process of getting
            started with Astroneer.js, from installation to creating your first
            application.
          </p>
        </div>
      </ArticleSection>
      <ArticleSection>
        <ArticleTitle subtitle>What&apos;s Astroneer.js?</ArticleTitle>
        <div className="space-y-4">
          <p>
            Astroneer is a next-generation framework for building modern,
            scalable, and powerful Node.js server-side applications. Inspired by
            the{' '}
            <ExternalLink href="https://nextjs.org/docs/app/building-your-application/routing/route-handlers">
              Route Handlers in Next.js
            </ExternalLink>
            , Astroneer provides a simple and intuitive API that allows
            developers to build applications quickly and efficiently.
          </p>
          <p>
            Under the hood, Astroneer makes use of the native{' '}
            <ExternalLink href="https://nodejs.org/api/http.html">
              Node.js HTTP module
            </ExternalLink>{' '}
            to create a server and handle incoming requests.
          </p>
          <p>
            Astroneer provides a level of abstraction over the native HTTP
            module, and other Node.js frameworks (Express/Fastify), allowing
            developers to focus on building their applications without worrying
            about the underlying implementation details.
          </p>
        </div>
      </ArticleSection>
      <ArticleSection>
        <ArticleTitle subtitle>Why Astroneer.js?</ArticleTitle>
        <div className="space-y-4">
          <p>
            In the world of Node.js, there are many frameworks to choose from.
            Some are simple and lightweight, while others are complex and
            feature-rich. Astroneer aims to strike a balance between simplicity
            and power, allowing developers to build complex applications with
            the less amount of boilerplate code.
          </p>
          <p>
            Here are some reasons why you might choose Astroneer over other
            frameworks:
          </p>
          <DescriptionList>
            <li>
              <span className="font-bold">Lightweight:</span> Astroneer is
              lightweight and has a small footprint, making it suitable for
              building microservices and APIs.
            </li>
            <li>
              <span className="font-bold">Fast compilation and bundling:</span>{' '}
              Astroneer uses{' '}
              <ExternalLink href="https://esbuild.github.io/">
                esbuild
              </ExternalLink>{' '}
              for compilation and bundling, resulting in faster build times. Why
              bundle server-side applications? Check out some of the benefits:
              <div className="mt-4">
                <DescriptionList>
                  <li>
                    <span className="font-bold">Faster startup time:</span> By
                    bundling your application, you can reduce the number of
                    files that need to be loaded, resulting in faster startup
                    times.
                  </li>
                  <li>
                    <span className="font-bold">Better performance:</span>{' '}
                    Bundling your application can help reduce the number of
                    requests made to the server, resulting in better
                    performance.
                  </li>
                  <li>
                    <span className="font-bold">
                      Compatibility and distribution:
                    </span>{' '}
                    Bundling your application allows you to distribute your
                    application without worrying about dependencies. This can be
                    useful when deploying your application to different servers
                    or environments.
                  </li>
                </DescriptionList>
              </div>
            </li>
            <li>
              <span className="font-bold">TypeScript support:</span> Astroneer
              is built on top of TypeScript, providing type safety and
              intellisense out of the box. We believe that TypeScript is the
              future of JavaScript, and we want to make it easy for developers
              to use it in their projects, but you can still use JavaScript if
              you prefer.
            </li>
            <li>
              <span className="font-bold">File-based routing:</span> Astroneer
              uses a file-based routing system inspired by Next.js. This allows
              developers to create routes by simply creating files in the{' '}
              <InlineCode>routes</InlineCode> directory. Check out the{' '}
              <Link
                href="/docs/overview#routing"
                className="text-primary hover:brightness-125 transition-all duration-300"
              >
                Routes Handlers
              </Link>{' '}
              article to learn more.
            </li>
            <li>
              <span className="font-bold">Built-in middleware support:</span>{' '}
              Astroneer provides built-in support for middleware, allowing
              developers to add custom logic to their routes. Check out the{' '}
              <Link
                href="/docs/overview#middleware"
                className="text-primary hover:brightness-125 transition-all duration-300"
              >
                Middleware
              </Link>{' '}
              article to learn more.
            </li>
            <li>
              <span className="font-bold">Built-in error handling:</span>{' '}
              Astroneer provides built-in error handling, allowing developers to
              handle errors in a consistent and predictable way. Check out the{' '}
              <Link
                href="/docs/overview#error-handling"
                className="text-primary hover:brightness-125 transition-all duration-300"
              >
                Error Handling
              </Link>{' '}
              article to learn more.
            </li>
            <li>
              <span className="font-bold">Built-in logging:</span> Astroneer
              provides built-in logging, allowing developers to log messages to
              the console or a file. Check out the{' '}
              <Link
                href="/docs/overview#logging"
                className="text-primary hover:brightness-125 transition-all duration-300"
              >
                Logging
              </Link>{' '}
              article to learn more.
            </li>
            <li>
              <span className="font-bold">Built-in testing:</span> Astroneer
              provides built-in testing support, allowing developers to write
              tests for their applications. Check out the{' '}
              <Link
                href="/docs/overview#testing"
                className="text-primary hover:brightness-125 transition-all duration-300"
              >
                Testing
              </Link>{' '}
              article to learn more.
            </li>
          </DescriptionList>
          <p>
            Astroneer is a new framework and under active development. We are
            constantly adding new features and improvements, so stay tuned for
            updates!
          </p>
        </div>
      </ArticleSection>
    </div>
  );
}
