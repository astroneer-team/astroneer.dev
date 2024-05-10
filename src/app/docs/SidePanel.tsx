'use client';

import { useAppSelector } from '@/lib/hooks';
import Link from 'next/link';

export type DocsNavigationItem = {
  title: string;
  path: string;
  topics?: {
    title: string;
    path: string;
  }[];
};

export default function DocsSidePanel({
  navigation,
}: {
  navigation: DocsNavigationItem[];
}) {
  const inView = useAppSelector((state) => state.topics.inView);

  return (
    <div className="sticky top-[65px] left-0 h-[calc(100vh-65px)] hidden md:flex md:flex-shrink-0 md:flex-col md:justify-between">
      <div className="relative overflow-hidden">
        <nav className="styled-scrollbar flex h-[calc(100vh-65px)] flex-col overflow-y-scroll pb-4 pr-2 pt-12">
          <div
            aria-hidden
            className="from-black pointer-events-none absolute left-0 top-0 z-10 h-3 w-full bg-gradient-to-b to-transparent"
          ></div>
          {navigation.map((section, index) => (
            <ul key={section.title.trim()} className="last-of-type:pb-3">
              <li className="my-1.5 ml-[3px]">
                <Link
                  className="text-sm font-medium py-1 pl-2 text-left"
                  href={section.path}
                >
                  {section.title}
                </Link>
                {section.topics?.length && (
                  <div className="relative">
                    <ul className="px-0.5 last-of-type:mb-0 mb-8">
                      {section.topics.map((topic) => (
                        <li className="my-1.5" key={topic.path}>
                          <Link
                            className={`${inView.includes(topic.path.split('#').pop() ?? '') ? 'text-primary hover:brightness-125 opacity-100' : 'opacity-50'} text-sm py-1 pl-2 text-left hover:opacity-100 transition-all duration-500`}
                            href={topic.path}
                          >
                            {topic.title}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </li>
            </ul>
          ))}
          <div
            aria-hidden
            className="from-black pointer-events-none absolute left-0 bottom-0 z-10 h-3 w-full bg-gradient-to-t to-transparent"
          ></div>
        </nav>
      </div>
    </div>
  );
}
