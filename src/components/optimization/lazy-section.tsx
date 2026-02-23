"use client";

import * as React from "react";

interface LazySectionProps {
  children: React.ReactNode;
  fallback?: React.ReactNode;
  /** Distance before viewport to start loading. Default: '100px 0px' */
  rootMargin?: string;
  /** 0 = any pixel visible. Default: 0.1 */
  threshold?: number;
  className?: string;
}

export function LazySection({
  children,
  fallback,
  rootMargin = "100px 0px",
  threshold = 0.1,
  className,
}: LazySectionProps) {
  const [isVisible, setIsVisible] = React.useState(false);
  const [hasLoaded, setHasLoaded] = React.useState(false);
  const [isMounted, setIsMounted] = React.useState(false);
  const ref = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    setIsMounted(true);
  }, []);

  React.useEffect(() => {
    const el = ref.current;
    if (!isMounted || !el) return;

    if (!("IntersectionObserver" in window)) {
      setIsVisible(true);
      setHasLoaded(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasLoaded) {
          setIsVisible(true);
          setHasLoaded(true);
          observer.unobserve(el);
        }
      },
      { rootMargin, threshold },
    );

    observer.observe(el);
    return () => observer.unobserve(el);
  }, [rootMargin, threshold, hasLoaded, isMounted]);

  // SSR: always render fallback so crawlers see content
  if (!isMounted) {
    return <div className={className}>{fallback ?? <DefaultSkeleton />}</div>;
  }

  return (
    <div ref={ref} className={className}>
      {isVisible || hasLoaded
        ? children
        : (fallback ?? <DefaultSkeleton />)}
    </div>
  );
}

function DefaultSkeleton() {
  return (
    <div className="w-full py-16 animate-pulse">
      <div className="container px-4">
        <div className="mx-auto max-w-2xl text-center mb-8">
          <div className="h-8 bg-muted rounded-lg w-3/4 mx-auto mb-4" />
          <div className="h-4 bg-muted rounded w-full mb-2" />
          <div className="h-4 bg-muted rounded w-2/3 mx-auto" />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[0, 1, 2].map((i) => (
            <div key={i} className="h-48 bg-muted rounded-lg" />
          ))}
        </div>
      </div>
    </div>
  );
}
