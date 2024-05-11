import { Fira_Code } from 'next/font/google';

const firaCode = Fira_Code({
  subsets: ['latin'],
});

export default function InlineCode({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <span
      style={firaCode.style}
      className="bg-gray-800/60 px-1 py-[0.05px] rounded-md border border-solid border-white/10 whitespace-pre"
    >
      {children}
    </span>
  );
}
