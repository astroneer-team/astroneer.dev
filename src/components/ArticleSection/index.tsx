export default function ArticleSection({
  children,
}: {
  children: React.ReactNode;
}) {
  return <section className="py-12 first-of-type:pt-0">{children}</section>;
}
