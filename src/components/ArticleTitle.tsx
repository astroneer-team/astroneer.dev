export default function ArticleTitle({
  children,
  subtitle = false,
}: {
  children: React.ReactNode;
  subtitle?: boolean;
}) {
  return (
    <h1
      className={`${subtitle ? 'text-2xl' : 'text-4xl'} font-bold tracking-tight mb-8 last:mb-0`}
    >
      {children}
    </h1>
  );
}
