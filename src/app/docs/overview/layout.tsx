export default function Layout({
  children,
  first_steps,
}: {
  children: React.ReactNode;
  first_steps: React.ReactNode;
}) {
  return (
    <>
      {children}
      {first_steps}
    </>
  );
}
