'use client';

import DocsAdvertisingPanel from '@/components/DocsAdvertisingPanel';
import DocsSidePanel, { DocsNavigationItem } from '@/components/DocsSidePanel';
import { clear } from '@/lib/features/topics/topicsSlice';
import { useAppDispatch } from '@/lib/hooks';
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/16/solid';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';

const navigation: DocsNavigationItem[] = [
  {
    title: 'Getting Started',
    path: '/docs/getting-started#index',
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
    path: '/docs/overview#index',
    topics: [
      {
        title: 'First steps',
        path: '/docs/overview#first-steps',
      },
    ],
  },
  {
    title: 'Security',
    path: '/docs/security#index',
    topics: [
      {
        title: 'Authentication',
        path: '/docs/security#authentication',
      },
      {
        title: 'Authorization',
        path: '/docs/security#authorization',
      },
      {
        title: 'Encryption & Hashing',
        path: '/docs/security#encryption-hashing',
      },
      {
        title: 'Helmet',
        path: '/docs/security#helmet',
      },
      {
        title: 'CORS',
        path: '/docs/security#cors',
      },
    ],
  },
  {
    title: 'CLI',
    path: '/docs/cli#index',
    topics: [
      {
        title: 'Overview',
        path: '/docs/cli#overview',
      },
      {
        title: 'Usage',
        path: '/docs/cli#usage',
      },
      {
        title: 'Scripts',
        path: '/docs/cli#scripts',
      },
    ],
  },
  {
    title: 'Comunity',
    path: '/docs/community#index',
    topics: [
      {
        title: 'Contributing',
        path: '/docs/community#contributing',
      },
      {
        title: 'Code of Conduct',
        path: '/docs/community#code-of-conduct',
      },
    ],
  },
  {
    title: 'Support Us',
    path: '/docs/support-us#index',
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
      <article className="mt-12 w-full min-w-0 max-w-6xl px-1 md:px-6">
        {children}
        <footer className="py-12 border-t border-solid border-white/10 w-full flex justify-between items-center">
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
        </footer>
      </article>
      <DocsAdvertisingPanel />
    </>
  );
}
