import { useEffect, useRef, useState } from 'react';
import { UseIntersectionObserverOptions, UseIntersectionObserverReturn } from '@/types';

// SOLID Principle: Single Responsibility - Hook handles only intersection observation logic
// Interface Segregation Principle: Clients only depend on options they actually use

const useIntersectionObserver = ({
  threshold = 0,
  root = null,
  rootMargin = '0%',
  freezeOnceVisible = false,
}: UseIntersectionObserverOptions = {}): UseIntersectionObserverReturn => {
  const ref = useRef<HTMLDivElement>(null);
  const [entry, setEntry] = useState<IntersectionObserverEntry>();
  const [isVisible, setIsVisible] = useState(false);

  // Freeze visibility state once element becomes visible (if enabled)
  const frozen = freezeOnceVisible && isVisible;

  useEffect(() => {
    const element = ref.current;
    const hasIOSupport = !!window.IntersectionObserver;

    if (!hasIOSupport || frozen || !element) {
      return;
    }

    const observerParams = { threshold, root, rootMargin };
    const observer = new IntersectionObserver(([entry]) => {
      setEntry(entry);
      setIsVisible(entry.isIntersecting);
    }, observerParams);

    observer.observe(element);

    return () => {
      observer.disconnect();
    };
  }, [threshold, root, rootMargin, frozen]);

  return {
    ref,
    entry,
    isVisible,
  };
};

export default useIntersectionObserver;