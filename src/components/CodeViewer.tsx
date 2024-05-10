import SyntaxHighlighter, { CodeLineNode } from './SyntaxHighlighter';

interface CodeViewerProps {
  title?: string;
  language?: string;
  children: CodeLineNode | CodeLineNode[];
}

const CodeViewer: React.FC<CodeViewerProps> = ({
  title,
  language = 'bash',
  children,
}: CodeViewerProps) => {
  const capitalize = (str: string) => {
    return str.charAt(0).toUpperCase() + str.slice(1);
  };

  return (
    <div className="rounded-md border border-solid border-white/10 overflow-hidden bg-white/5 relative">
      <div className="p-4 bg-black border-b border-solid border-white/10 flex items-center gap-4">
        {title && (
          <span className="text-xs font-medium after:content-['|'] after:ml-4 after:text-gray-400">
            {title}
          </span>
        )}
        <span className="text-primary text-xs font-medium">
          {capitalize(language)}
        </span>
      </div>
      <SyntaxHighlighter showLineNumber language={language}>
        {children}
      </SyntaxHighlighter>
    </div>
  );
};

export default CodeViewer;
