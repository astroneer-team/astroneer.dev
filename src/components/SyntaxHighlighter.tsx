'use client';

import { Fira_Code } from 'next/font/google';
import React from 'react';
import { CodeLineProps } from './Code';

interface SyntaxHighlighterProps {
  language: string;
  children: CodeLineNode | CodeLineNode[];
  showLineNumber?: boolean;
}

interface LineProps {
  showLineNumber: boolean;
  language?: string;
  lineNumberPlaces?: number;
}

type CodeLineNode = React.ReactElement<CodeLineProps>;

const firaCode = Fira_Code({
  subsets: ['latin'],
});

const LinePropsContext = React.createContext<LineProps>({
  showLineNumber: false,
  lineNumberPlaces: 0,
});

const SyntaxHightlighter: React.FC<SyntaxHighlighterProps> = ({
  children,
  language,
  showLineNumber = false,
}) => {
  let lineNumber = 1;

  const withLineNumbers = (children: CodeLineNode | CodeLineNode[]) => {
    if (!showLineNumber) return children;
    if (!Array.isArray(children))
      return React.cloneElement(children, {
        prefix: language === 'bash' || language === 'shell' ? '$' : 1,
      });

    return React.Children.map(children, (child: CodeLineNode) => {
      return React.cloneElement(child, {
        prefix:
          language === 'bash' || language === 'shell' ? '$' : lineNumber++,
      });
    });
  };

  const code = withLineNumbers(children);

  return (
    <LinePropsContext.Provider
      value={{
        showLineNumber,
        language,
        lineNumberPlaces: lineNumber.toString().length,
      }}
    >
      <pre
        style={firaCode.style}
        className={`language-${language} p-4 text-sm overflow-scroll scrollbar-none`}
      >
        {code}
      </pre>
    </LinePropsContext.Provider>
  );
};

export type { CodeLineNode };
export const useLineProps = () => React.useContext(LinePropsContext);
export default SyntaxHightlighter;
