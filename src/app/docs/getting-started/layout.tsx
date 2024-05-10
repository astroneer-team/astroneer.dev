export default function Layout({
  children,
  installation,
  project_structure,
}: {
  children: React.ReactNode;
  installation: React.ReactNode;
  project_structure: React.ReactNode;
}) {
  return (
    <>
      {children}
      {installation}
      {project_structure}
    </>
  );
}
