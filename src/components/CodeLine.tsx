'use client';

import { useLineProps } from './SyntaxHighlighter';

interface CodeLineProps {
  line: string;
  prefix?: string | number;
}

type LanguageSyntaxes = {
  [key: string]: {
    operators: string[];
    keywords: string[];
    literals: string[];
  };
};

const languageSyntax: LanguageSyntaxes = {
  typescript: {
    operators: [
      '+',
      '-',
      '*',
      '/',
      '%',
      '++',
      '--',
      '==',
      '!=',
      '>',
      '<',
      '>=',
      '<=',
      '&&',
      '||',
      '!',
      '&',
      '|',
      '^',
      '<<',
      '>>',
      '>>>',
    ],
    keywords: [
      'abstract',
      'as',
      'break',
      'case',
      'catch',
      'class',
      'continue',
      'const',
      'constructor',
      'debugger',
      'declare',
      'default',
      'delete',
      'do',
      'else',
      'enum',
      'export',
      'extends',
      'false',
      'finally',
      'for',
      'from',
      'function',
      'get',
      'if',
      'implements',
      'import',
      'in',
      'instanceof',
      'interface',
      'let',
      'module',
      'namespace',
      'new',
      'null',
      'package',
      'private',
      'protected',
      'public',
      'readonly',
      'require',
      'return',
      'set',
      'static',
      'super',
      'switch',
      'symbol',
      'this',
      'throw',
      'true',
      'try',
      'type',
      'typeof',
      'var',
      'void',
      'while',
      'with',
      'yield',
    ],
    literals: ['undefined', 'NaN', 'Infinity'],
  },
  bash: {
    operators: [],
    keywords: [],
    literals: [],
  },
};

const CodeLine: React.FC<CodeLineProps> = ({ line, prefix }) => {
  const lineProps = useLineProps();

  const isOperator = (word: string) => {
    return languageSyntax[lineProps.language || '']?.operators.includes(word);
  };

  const isKeyword = (word: string) => {
    return languageSyntax[lineProps.language || '']?.keywords.includes(word);
  };

  const isLiteral = (word: string) => {
    return languageSyntax[lineProps.language || '']?.literals.includes(word);
  };

  const highlight = (word: string) => {
    if (isOperator(word)) return 'text-yellow-400';
    if (isKeyword(word)) return 'text-green-400';
    if (isLiteral(word)) return 'text-blue-400';
    return 'text-white';
  };

  const words = line.split(' ').map((word) => (
    <span key={word} className={highlight(word)}>
      {word}{' '}
    </span>
  ));

  return (
    <div className="flex items-center whitespace-nowrap leading-6">
      {lineProps.showLineNumber && (
        <span
          className="text-xs text-white/40 text-right"
          style={{
            width: `${lineProps.lineNumberPlaces}ch`,
          }}
        >
          {prefix}
        </span>
      )}
      <span className={`${lineProps.showLineNumber ? 'ml-4' : ''}`}>
        {words}
      </span>
    </div>
  );
};

export type { CodeLineProps };
export default CodeLine;
