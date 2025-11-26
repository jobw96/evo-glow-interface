import { useScroll, useTransform, MotionValue } from "framer-motion";
import { useRef, RefObject } from "react";

interface UseScrollZoomOptions {
  start?: string;
  end?: string;
  scaleStart?: number;
  scaleEnd?: number;
}

export function useScrollZoom(options: UseScrollZoomOptions = {}) {
  const ref = useRef<HTMLDivElement>(null);
  const {
    start = "top bottom",
    end = "bottom top",
    scaleStart = 0.8,
    scaleEnd = 1,
  } = options;

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: [start, end],
  });

  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [scaleStart, scaleEnd, scaleStart]);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);

  return { ref, scale, opacity, scrollYProgress };
}

export function useScrollReveal() {
  const ref = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [100, -100]);
  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0, 1, 1, 0]);

  return { ref, y, opacity, scrollYProgress };
}

export function useParallaxScroll(speed: number = 0.5) {
  const ref = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [-speed * 100, speed * 100]);

  return { ref, y };
}

interface UseScrollSectionOptions {
  threshold?: number;
}

export function useScrollSection(options: UseScrollSectionOptions = {}) {
  const ref = useRef<HTMLDivElement>(null);
  const { threshold = 0.5 } = options;

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const scale = useTransform(
    scrollYProgress,
    [0, threshold, 1],
    [0.95, 1, 0.95]
  );

  const opacity = useTransform(
    scrollYProgress,
    [0, 0.1, threshold, 0.9, 1],
    [0, 1, 1, 1, 0]
  );

  const y = useTransform(scrollYProgress, [0, threshold, 1], [50, 0, -50]);

  return { ref, scale, opacity, y, scrollYProgress };
}

export function useScrollProgress() {
  const { scrollYProgress } = useScroll();
  return scrollYProgress;
}


