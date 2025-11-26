import { useEffect, useRef } from "react";

interface UseParallaxOptions {
  speed?: number;
  direction?: "up" | "down";
}

export function useParallax<T extends HTMLElement = HTMLDivElement>(
  options: UseParallaxOptions = {}
) {
  const ref = useRef<T>(null);
  const { speed = 0.5, direction = "up" } = options;

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const handleScroll = () => {
      const rect = element.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      const elementTop = rect.top;
      const elementHeight = rect.height;

      // Calculate if element is in viewport
      const isInViewport =
        elementTop < windowHeight && elementTop + elementHeight > 0;

      if (isInViewport) {
        // Calculate scroll progress (0 to 1)
        const scrollProgress =
          (windowHeight - elementTop) / (windowHeight + elementHeight);
        const clampedProgress = Math.max(0, Math.min(1, scrollProgress));

        // Apply parallax transform
        const offset = (clampedProgress - 0.5) * speed * 100;
        const transformValue = direction === "up" ? -offset : offset;

        element.style.transform = `translateY(${transformValue}px)`;
      }
    };

    // Throttle scroll events for performance
    let ticking = false;
    const onScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          handleScroll();
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    handleScroll(); // Initial call

    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, [speed, direction]);

  return ref;
}

