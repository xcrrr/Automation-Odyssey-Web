import React, { useEffect, useLayoutEffect, useRef, useState } from 'react';

interface RevealOnScrollProps {
  children: React.ReactNode;
  delay?: number;
}

export const RevealOnScroll: React.FC<RevealOnScrollProps> = ({ children, delay = 0 }) => {
  // Start visible — content is never hidden by default, which prevents a black
  // screen if JavaScript is slow or if layout hasn't been computed yet.
  const [isVisible, setIsVisible] = useState(true);
  const [shouldAnimate, setShouldAnimate] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  // Before the first browser paint, check whether the element is below the
  // fold.  Only below-fold elements get the scroll-reveal animation (starting
  // hidden); elements already in the viewport remain permanently visible.
  useLayoutEffect(() => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    if (rect.top >= window.innerHeight) {
      setShouldAnimate(true);
      setIsVisible(false);
    }
  }, []);

  useEffect(() => {
    if (!shouldAnimate || isVisible) return;

    // Fallback: if IntersectionObserver is unavailable just show the content.
    if (typeof IntersectionObserver === 'undefined') {
      setIsVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, [shouldAnimate, isVisible]);

  return (
    <div
      ref={ref}
      className={
        shouldAnimate
          ? `transition-all duration-700 ease-luxury transform will-change-transform ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`
          : undefined
      }
      style={shouldAnimate && delay ? { transitionDelay: `${delay}ms` } : undefined}
    >
      {children}
    </div>
  );
};