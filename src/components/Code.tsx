'use client';

import { useLineProps } from './SyntaxHighlighter';

interface CodeLineProps {
  children: React.ReactNode;
  prefix?: string | number;
  tabSize?: number;
}

const Code: React.FC<CodeLineProps> = ({ children, prefix, tabSize }) => {
  const lineProps = useLineProps();
  return (
    <div className="flex items-center whitespace-nowrap leading-6 min-h-6">
      {lineProps.showLineNumber && (
        <span
          className="text-xs text-white/40 text-right select-none"
          style={{
            width: `${lineProps.lineNumberPlaces}ch`,
          }}
        >
          {prefix}
        </span>
      )}
      <span
        style={{
          paddingLeft: `${(tabSize || 0) * 0.5}rem`,
        }}
        className={`${lineProps.showLineNumber ? 'ml-4' : ''}`}
      >
        {children}
      </span>
    </div>
  );
};

export type { CodeLineProps };
export default Code;
