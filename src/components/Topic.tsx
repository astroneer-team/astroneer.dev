'use client';

import { attach, detach } from '@/lib/features/topics/topicsSlice';
import { useAppDispatch } from '@/lib/hooks';
import { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';

export default function Topic({
  children,
  hash,
}: {
  children: React.ReactNode;
  hash: string;
}) {
  const dispatch = useAppDispatch();
  const { ref, inView } = useInView({
    threshold: 0,
    rootMargin: '0px',
  });

  useEffect(() => {
    if (inView) {
      dispatch(attach(hash));
    } else {
      dispatch(detach(hash));
    }
  }, [inView, dispatch, hash]);

  return (
    <div ref={ref} id={hash}>
      {children}
    </div>
  );
}
