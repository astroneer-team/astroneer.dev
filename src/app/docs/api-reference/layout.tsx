export default function Layout({
  children,
  file_based_routing,
}: {
  children: React.ReactNode;
  file_based_routing: React.ReactNode;
}) {
  return (
    <>
      {children}
      {file_based_routing}
    </>
  );
}
