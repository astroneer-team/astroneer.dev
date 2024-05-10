export default function ExternalLink({
  children,
  href,
}: {
  children: React.ReactNode;
  href: string;
}) {
  return (
    <a
      href={href}
      target="_blank"
      className="text-primary hover:brightness-125 transition-all duration-300"
    >
      {children}
    </a>
  );
}
