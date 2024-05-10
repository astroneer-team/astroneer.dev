import Code from '@/components/Code';

const ServerFileCodeExample: React.FC = () => {
  return (
    <>
      <Code>
        <span className="text-pink-500">import</span>
        <span className="text-yellow-600"> {'{'}</span>
        <span className="text-purple-500"> Logger</span>
        <span className="text-yellow-600"> {'}'}</span>
        <span className="text-pink-400"> from</span>
        <span className="text-green-400"> &apos;@astroneer/common&apos;</span>
        <span className="text-gray-400">;</span>
      </Code>
      <Code>
        <span className="text-pink-500">import</span>
        <span className="text-yellow-600"> {'{'}</span>
        <span className="text-purple-500"> Astroneer</span>
        <span className="text-yellow-600"> {'}'}</span>
        <span className="text-pink-400"> from</span>
        <span className="text-green-400"> &apos;@astroneer/core&apos;</span>
        <span className="text-gray-400">;</span>
      </Code>
      <Code>
        <span className="text-pink-500">import</span>
        <span className="text-yellow-600"> {'{'}</span>
        <span className="text-blue-500"> createServer</span>
        <span className="text-yellow-600"> {'}'}</span>
        <span className="text-pink-400"> from</span>
        <span className="text-green-400"> &apos;http&apos;</span>
        <span className="text-gray-400">;</span>
      </Code>
      <Code>
        <span className="text-pink-500">import</span>
        <span className="text-yellow-600"> {'{'}</span>
        <span className="text-blue-500"> parse</span>
        <span className="text-yellow-600"> {'}'}</span>
        <span className="text-pink-400"> from</span>
        <span className="text-green-400"> &apos;url&apos;</span>
        <span className="text-gray-400">;</span>
      </Code>
      <Code>
        <></>
      </Code>
      <Code>
        <span className="text-pink-500">const</span>
        <span className="text-orange-500"> port</span>
        <span className="text-yellow-600"> =</span>
        <span className="text-purple-500"> 3000</span>
        <span className="text-gray-400">;</span>
      </Code>
      <Code>
        <span className="text-pink-500">const</span>
        <span className="text-orange-500"> hostname</span>
        <span className="text-yellow-600"> =</span>
        <span className="text-green-400"> &apos;localhost&apos;</span>
        <span className="text-gray-400">;</span>
      </Code>
      <Code>
        <></>
      </Code>
      <Code>
        <span className="text-purple-500">Astroneer</span>
        <span className="text-yellow-600">.</span>
        <span className="text-blue-500">prepare</span>
        <span className="text-yellow-600">()</span>
        <span className="text-yellow-600">.</span>
        <span className="text-blue-500">then</span>
        <span className="text-yellow-600">{'(('}</span>
        <span className="text-orange-500">app</span>
        <span className="text-yellow-600">{')'}</span>
        <span className="text-yellow-600"> =&gt;</span>
        <span className="text-yellow-600"> {'{'}</span>
      </Code>
      <Code tabSize={2}>
        <span className="text-pink-500">const</span>
        <span className="text-purple-500"> server</span>
        <span className="text-yellow-600"> =</span>
        <span className="text-blue-500"> createServer</span>
        <span className="text-yellow-600">(</span>
        <span className="text-pink-500">async </span>
        <span className="text-yellow-600"> (</span>
        <span className="text-orange-500">req</span>
        <span className="text-yellow-600">,</span>
        <span className="text-orange-500"> res</span>
        <span className="text-yellow-600">)</span>
        <span className="text-yellow-600"> =&gt;</span>
        <span className="text-yellow-600"> {'{'}</span>
      </Code>
      <Code tabSize={4}>
        <span className="text-pink-500">try</span>
        <span className="text-yellow-600"> {'{'}</span>
      </Code>
      <Code tabSize={6}>
        <span className="text-pink-500">const</span>
        <span className="text-orange-500"> parsedUrl</span>
        <span className="text-yellow-600"> =</span>
        <span className="text-blue-500"> parse</span>
        <span className="text-yellow-600">(</span>
        <span className="text-orange-500">req</span>
        <span className="text-yellow-600">.</span>
        <span className="text-orange-500">url</span>
        <span className="text-yellow-600">||</span>
        <span className="text-green-400"> &apos;/&apos;</span>
        <span className="text-yellow-600">,</span>
        <span className="text-purple-500"> true</span>
        <span className="text-yellow-600">)</span>
        <span className="text-gray-400">;</span>
      </Code>
      <Code tabSize={6}>
        <span className="text-pink-500">await</span>
        <span className="text-orange-500"> app</span>
        <span className="text-yellow-600">.</span>
        <span className="text-blue-500">handle</span>
        <span className="text-yellow-600">(</span>
        <span className="text-orange-500">req</span>
        <span className="text-yellow-600">,</span>
        <span className="text-orange-500"> res</span>
        <span className="text-yellow-600">,</span>
        <span className="text-orange-500"> parsedUrl</span>
        <span className="text-yellow-600">)</span>
        <span className="text-gray-400">;</span>
      </Code>
      <Code tabSize={4}>
        <span className="text-yellow-600">{'}'}</span>
        <span className="text-pink-500"> catch</span>
        <span className="text-yellow-600"> {'('}</span>
        <span className="text-orange-500">err</span>
        <span className="text-yellow-600">)</span>
        <span className="text-yellow-600"> {'{'}</span>
      </Code>
      <Code tabSize={6}>
        <span className="text-purple-500">Logger</span>
        <span className="text-yellow-600">.</span>
        <span className="text-blue-500">error</span>
        <span className="text-yellow-600">(</span>
        <span className="text-orange-500">err</span>
        <span className="text-yellow-600">)</span>
        <span className="text-gray-400">;</span>
      </Code>
      <Code tabSize={4}>
        <span className="text-yellow-600">{'}'}</span>
      </Code>
      <Code tabSize={2}>
        <span className="text-yellow-600">{'}'}</span>
        <span className="text-yellow-600">)</span>
        <span className="text-gray-400">;</span>
      </Code>
      <Code>
        <></>
      </Code>
      <Code tabSize={2}>
        <span className="text-purple-500">server</span>
        <span className="text-yellow-600">.</span>
        <span className="text-blue-500">once</span>
        <span className="text-yellow-600">(</span>
        <span className="text-green-400">&apos;error&apos;</span>
        <span className="text-yellow-600">,</span>
        <span className="text-yellow-600"> (</span>
        <span className="text-orange-500">err</span>
        <span className="text-yellow-600">)</span>
        <span className="text-yellow-600"> =&gt;</span>
        <span className="text-yellow-600"> {'{'}</span>
      </Code>
      <Code tabSize={4}>
        <span className="text-purple-500">Logger</span>
        <span className="text-yellow-600">.</span>
        <span className="text-blue-500">error</span>
        <span className="text-yellow-600">(</span>
        <span className="text-orange-500">err</span>
        <span className="text-yellow-600">)</span>
        <span className="text-gray-400">;</span>
      </Code>
      <Code tabSize={4}>
        <span className="text-orange-500">process</span>
        <span className="text-yellow-600">.</span>
        <span className="text-blue-500">exit</span>
        <span className="text-yellow-600">(</span>
        <span className="text-purple-500">1</span>
        <span className="text-yellow-600">)</span>
        <span className="text-gray-400">;</span>
      </Code>
      <Code tabSize={2}>
        <span className="text-yellow-600">{'})'}</span>
        <span className="text-gray-400">;</span>
      </Code>
      <Code>
        <></>
      </Code>
      <Code tabSize={2}>
        <span className="text-purple-500">server</span>
        <span className="text-yellow-600">.</span>
        <span className="text-blue-500">listen</span>
        <span className="text-yellow-600">(</span>
        <span className="text-orange-500">port</span>
        <span className="text-yellow-600">,</span>
        <span className="text-orange-500"> hostname</span>
        <span className="text-yellow-600">,</span>
        <span className="text-yellow-600"> ()</span>
        <span className="text-yellow-600"> =&gt;</span>
        <span className="text-yellow-600"> {'{'}</span>
      </Code>
      <Code tabSize={4}>
        <span className="text-purple-500">Logger</span>
        <span className="text-yellow-600">.</span>
        <span className="text-blue-500">log</span>
        <span className="text-yellow-600">(</span>
        <span className="text-green-400">`Server running at http://</span>
        <span className="text-gray-500">$</span>
        <span className="text-gray-500">{'{'}</span>
        <span className="text-orange-500">hostname</span>
        <span className="text-gray-500">{'}'}</span>
        <span className="text-green-400">:</span>
        <span className="text-gray-500">$</span>
        <span className="text-gray-500">{'{'}</span>
        <span className="text-orange-500">port</span>
        <span className="text-gray-500">{'}'}</span>
        <span className="text-green-400">/`</span>
        <span className="text-yellow-600">)</span>
        <span className="text-gray-400">;</span>
      </Code>
      <Code tabSize={2}>
        <span className="text-yellow-600">{'}'}</span>
        <span className="text-gray-400">;</span>
      </Code>
      <Code>
        <span className="text-yellow-600">{'})'}</span>
        <span className="text-gray-400">;</span>
      </Code>
    </>
  );
};

export default ServerFileCodeExample;
