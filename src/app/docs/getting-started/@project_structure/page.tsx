import ArticleSection from '@/components/ArticleSection';
import ArticleTitle from '@/components/ArticleTitle';
import Code from '@/components/Code';
import CodeViewer from '@/components/CodeViewer';
import InlineCode from '@/components/InlineCode';
import Topic from '@/components/Topic';

export default function ProjectStructureArticle() {
  return (
    <Topic hash="project-structure">
      <ArticleSection>
        <ArticleTitle>Project Structure</ArticleTitle>
        <div className="space-y-4">
          <p>
            Astroneer projects are structured in a way that makes it easy to
            manage and scale your application. The following is the default
            project structure:
          </p>
          <CodeViewer language="plaintext">
            <Code>
              <span className="text-gray-500">
                ┌ <span className="text-white">.astroneer/</span>
              </span>
            </Code>
            <Code>
              <span className="text-gray-500 pl-[1.7px]">
                │{' '}
                <span>
                  └{' '}
                  <span className="text-gray-500">
                    # dist folder for compiled files
                  </span>
                </span>
              </span>
            </Code>
            <Code>
              <span className="text-gray-500">
                ├ <span className="text-white">src/</span>
              </span>
            </Code>
            <Code>
              <span className="text-gray-500 pl-[1.7px]">
                │{' '}
                <span>
                  ├ <span className="text-green-500">routes/</span>
                </span>
              </span>
            </Code>
            <Code>
              <span className="text-gray-500 pl-[1.7px]">
                │{' '}
                <span className="pl-[1.7px]">
                  │{' '}
                  <span>
                    └ <span className="text-primary">hello.ts</span>{' '}
                    <span className="text-gray-500"># Example route file</span>
                  </span>
                </span>
              </span>
            </Code>
            <Code>
              <span className="text-gray-500 pl-[1.7px]">
                │{' '}
                <span>
                  └ <span className="text-primary">server.ts</span>{' '}
                  <span className="text-gray-500"># Server entry point</span>
                </span>
              </span>
            </Code>
            <Code>
              <span className="text-gray-500">
                └ <span># Other project files</span>
              </span>
            </Code>
          </CodeViewer>
          <p>
            The <InlineCode>.astroneer</InlineCode> folder contains all the
            production build of your Astroneer app. Due to the process of
            bundling, the only files that will be compiled are the{' '}
            <InlineCode>server.ts</InlineCode> and the route files in the{' '}
            <InlineCode>src/routes</InlineCode> directory.
          </p>
          <p>
            The <InlineCode>server.ts</InlineCode> file is the entry point of
            your application. It is responsible for starting the Astroneer app
            server and setting up the routes. The best part is that you can
            modify the server file to suit your needs. Be sure to not change the
            name of this file or its location, as it is required for the
            application to run.
          </p>
          <p>
            THe <InlineCode>src/routes</InlineCode> directory contains all the
            route files of your application. Each file in this directory
            represents a route in your application. You can create as many route
            files as you want, but be sure to follow the naming convention for
            route files.
          </p>
          <p>
            To map a route to a file, you need to export at least one function
            with the following signature:
          </p>
          <CodeViewer language="typescript">
            <Code>
              <span className="text-primary">import</span>
              <span className="text-white"> {'{ Request, Response }'}</span>
              <span className="text-primary"> from</span>
              <span className="text-green-500"> {"'@astroneer/core'"}</span>
            </Code>
            <Code>
              <></>
            </Code>
            <Code>
              <span className="text-gray-500">{`// GET /hello`}</span>
            </Code>
            <Code>
              <span className="text-primary">export</span>
              <span className="text-primary"> function</span>
              <span className="text-primary"> async</span>
              <span className="text-purple-500"> GET</span>
              <span className="text-white">(</span>
              <span className="text-white">req</span>
              <span className="text-primary">:</span>
              <span className="text-purple-500"> Request</span>
              <span className="text-gray-500">,</span>
              <span className="text-white"> res</span>
              <span className="text-primary">:</span>
              <span className="text-purple-500"> Response</span>
              <span className="text-white">)</span>
              <span className="text-white"> {`{`}</span>
            </Code>
            <Code tabSize={2}>
              <span className="text-gray-500">
                {'  // Send a response to the client'}
              </span>
            </Code>
            <Code>
              <span className="text-white">{'}'}</span>
            </Code>
          </CodeViewer>
          <p>
            It supports the following HTTP methods: <InlineCode>GET</InlineCode>
            , <InlineCode>POST</InlineCode>, <InlineCode>PUT</InlineCode>,{' '}
            <InlineCode>DELETE</InlineCode>, <InlineCode>OPTIONS</InlineCode>,{' '}
            <InlineCode>HEAD</InlineCode>, <InlineCode>PATCH</InlineCode>,{' '}
            <InlineCode>CONNECT</InlineCode>, and <InlineCode>TRACE</InlineCode>
            . Please note that the method name must be in uppercase, otherwise
            it will not be recognized.
          </p>
        </div>
      </ArticleSection>
      <ArticleSection>
        <ArticleTitle subtitle>Route file naming convention</ArticleTitle>
        <div className="space-y-4">
          <p>
            Route files must follow a specific naming convention in order to be
            recognized by the Astroneer app. The naming convention is as
            follows:
          </p>
          <div className="border-t border-white/10 py-4">
            <table className="w-full">
              <thead>
                <tr className="text-sm font-medium">
                  <td className="mb-4 block">Static routes convention </td>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    <InlineCode>index</InlineCode>
                  </td>
                  <td className="space-x-1">
                    <InlineCode>.js</InlineCode>
                    <InlineCode>.ts</InlineCode>
                  </td>
                  <td>
                    Route file for the <InlineCode>/</InlineCode> route
                  </td>
                </tr>
                <tr>
                  <td>
                    <InlineCode>hello</InlineCode>
                  </td>
                  <td className="space-x-1">
                    <InlineCode>.js</InlineCode>
                    <InlineCode>.ts</InlineCode>
                  </td>
                  <td>
                    Route file for the <InlineCode>/hello</InlineCode> route
                  </td>
                </tr>
                <tr>
                  <td>
                    <InlineCode>folder/index</InlineCode>
                  </td>
                  <td className="space-x-1">
                    <InlineCode>.js</InlineCode>
                    <InlineCode>.ts</InlineCode>
                  </td>
                  <td>
                    Route file for the <InlineCode>/folder</InlineCode> route
                  </td>
                </tr>
                <tr>
                  <td>
                    <InlineCode>folder/hello</InlineCode>
                  </td>
                  <td className="space-x-1">
                    <InlineCode>.js</InlineCode>
                    <InlineCode>.ts</InlineCode>
                  </td>
                  <td>
                    Route file for the <InlineCode>/folder/hello</InlineCode>{' '}
                    route
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="border-t border-white/10 py-4 last-of-type:pb-0">
            <table className="w-full">
              <thead>
                <tr className="text-sm font-medium">
                  <td className="mb-4 block">Dynamic routes convention </td>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    <InlineCode>user/[id]</InlineCode>
                  </td>
                  <td className="space-x-1">
                    <InlineCode>.js</InlineCode>
                    <InlineCode>.ts</InlineCode>
                  </td>
                  <td>
                    Route file for the <InlineCode>/user/:id</InlineCode> route
                  </td>
                </tr>
                <tr>
                  <td>
                    <InlineCode>user/[id]/[action]</InlineCode>
                  </td>
                  <td className="space-x-1">
                    <InlineCode>.js</InlineCode>
                    <InlineCode>.ts</InlineCode>
                  </td>
                  <td>
                    Route file for the{' '}
                    <InlineCode>/user/:id/:action</InlineCode> route
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </ArticleSection>
    </Topic>
  );
}
