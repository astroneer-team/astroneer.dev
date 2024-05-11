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
    <div className="divide-y divide-white/10">
      {children}
      {installation}
      {project_structure}
    </div>
  );
}
