'use client';

import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const LINKS = [
  {
    path: '/showcase',
    label: 'Showcase',
  },
  {
    path: '/docs',
    label: 'Docs',
  },
  {
    path: '/blog',
    label: 'Blog',
  },
  {
    path: '/templates',
    label: 'Templates',
  },
];

export default function Header() {
  const pathname = usePathname();

  return (
    <header className="px-6 py-4 sticky top-0 left-0 border-b border-solid border-white/10">
      <div className="mx-auto max-w-screen-xl flex gap-12 items-center">
        <Link href="/" className="block w-fit">
          <Image
            src="/icons/astroneerjs.svg"
            alt="Astroneer.js"
            width={645}
            height={138}
            className="h-8 block w-fit select-none"
            priority
          />
        </Link>
        <nav>
          {LINKS.map(({ path, label }) => (
            <Link
              key={path}
              href={path}
              className={`${pathname.startsWith(path) ? 'text-primary opacity-100' : 'opacity-50'} mr-4 uppercase text-xs font-semibold hover:opacity-100 transition-all`}
            >
              {label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
