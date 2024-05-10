export default function DescriptionList({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ul className="block space-y-4 child:before:content-['-'] child:before:text-gray-400 child:before:absolute child:relative child:before:left-0 child:pl-6">
      {children}
    </ul>
  );
}
