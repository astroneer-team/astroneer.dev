export default function Code({ children }: { children: React.ReactNode }) {
  return (
    <code className="bg-gray-800/70 px-1 py-0.5 rounded-md border border-solid border-white/10">
      {children}
    </code>
  );
}
