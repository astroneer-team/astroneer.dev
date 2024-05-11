'use client';

import ExternalLink from '@/components/ExternalLink';
import { clear } from '@/lib/features/topics/topicsSlice';
import { useAppDispatch } from '@/lib/hooks';
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/16/solid';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
import DocsAdvertisingPanel from './AdvertisingPanel';
import DocsSidePanel, { DocsNavigationItem } from './SidePanel';

const navigation: DocsNavigationItem[] = [
  {
    title: 'Getting Started',
    path: '/docs/getting-started',
    topics: [
      {
        title: 'Installation',
        path: '/docs/getting-started#installation',
      },
      {
        title: 'Project Structure',
        path: '/docs/getting-started#project-structure',
      },
    ],
  },
  {
    title: 'Overview',
    path: '/docs/overview',
    topics: [
      {
        title: 'First steps',
        path: '/docs/overview#first-steps',
      },
    ],
  },
  {
    title: 'File Conventions',
    path: '/docs/file-conventions',
    topics: [
      {
        title: 'server.ts',
        path: '/docs/file-conventions#server-js',
      },
      {
        title: 'Route Files',
        path: '/docs/file-conventions#route-files',
      },
    ],
  },
  {
    title: 'API Reference',
    path: '/docs/api-reference',
    topics: [
      {
        title: 'File-Based Routing',
        path: '/docs/api-reference#file-based-routing',
      },
    ],
  },
  {
    title: 'Support Us',
    path: '/docs/support-us',
  },
];

export default function Template({ children }: { children: React.ReactNode }) {
  const [next, setNext] = useState<DocsNavigationItem | null>(null);
  const [prev, setPrev] = useState<DocsNavigationItem | null>(null);
  const pathname = usePathname();
  const dispatch = useAppDispatch();

  useEffect(() => {
    const currentIndex = navigation.findIndex((item) =>
      item.path.startsWith(pathname),
    );

    const nextIndex = currentIndex + 1;
    const prevIndex = currentIndex - 1;

    if (nextIndex < navigation.length) {
      setNext(navigation[nextIndex]);
    } else {
      setNext(null);
    }

    if (prevIndex >= 0) {
      setPrev(navigation[prevIndex]);
    } else {
      setPrev(null);
    }

    dispatch(clear());
  }, [pathname, dispatch]);

  return (
    <>
      <DocsSidePanel navigation={navigation} />
      <article className="w-full min-w-0 max-w-6xl px-1 md:px-6">
        {children}
        <footer className="py-12 border-t border-solid border-white/10 w-full">
          <div className="flex justify-between items-center mb-12">
            <div className="relative px-6">
              {prev && (
                <Link
                  href={prev.path}
                  className="child:hover:opacity-100 child:child:hover:opacity-100"
                >
                  <span className="opacity-50 text-xs mb-1 block transition-opacity">
                    Previous
                  </span>
                  <div className="flex items-center relative">
                    <span>{prev.title}</span>
                    <ChevronLeftIcon className="w-6 h-6 absolute -left-6 opacity-50 transition-opacity" />
                  </div>
                </Link>
              )}
            </div>
            <div className="relative px-6">
              {next && (
                <Link
                  href={next.path}
                  className="text-right child:hover:opacity-100 child:child:hover:opacity-100"
                >
                  <span className="opacity-50 text-xs mb-1 block">Next</span>
                  <div className="flex items-center relative">
                    <span>{next.title}</span>
                    <ChevronRightIcon className="w-6 h-6 absolute -right-6 opacity-50" />
                  </div>
                </Link>
              )}
            </div>
          </div>
          <ExternalLink href="https://nextjs.org/docs/getting-started">
            <div className="mx-auto w-fit p-3 rounded-full border border-white/10 text-xs bg-white/5 hover:bg-white/10 transition-colors">
              This layout is inspired by the Next.js documentation.
            </div>
          </ExternalLink>
        </footer>
      </article>
      <DocsAdvertisingPanel />
    </>
  );
}
