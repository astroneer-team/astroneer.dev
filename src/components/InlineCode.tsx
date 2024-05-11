export default function InlineCode({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <code className="bg-gray-800/60 px-1 py-[0.05px] rounded-md border border-solid border-white/10">
      {children}
    </code>
  );
}
