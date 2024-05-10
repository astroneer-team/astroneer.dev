export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="mx-auto max-w-screen-xl px-4 md:flex md:flex-row relative">
      {children}
    </div>
  );
}
