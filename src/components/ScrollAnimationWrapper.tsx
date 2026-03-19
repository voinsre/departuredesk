'use client';

import { useScrollAnimation } from './useScrollAnimation';

export default function ScrollAnimationWrapper({ children }: { children: React.ReactNode }) {
  const ref = useScrollAnimation();
  return <div ref={ref}>{children}</div>;
}
