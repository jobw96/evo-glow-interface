import { motion, useScroll, useTransform } from "framer-motion";
import { ReactNode, useRef } from "react";

interface AppleScrollSectionProps {
  children: ReactNode;
  className?: string;
}

export function AppleScrollSection({ children, className = "" }: AppleScrollSectionProps) {
  const ref = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.8, 1, 0.8]);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);
  const y = useTransform(scrollYProgress, [0, 0.5, 1], [100, 0, -100]);

  return (
    <motion.div
      ref={ref}
      style={{ scale, opacity, y }}
      className={`will-change-transform ${className}`}
    >
      {children}
    </motion.div>
  );
}

interface ZoomScrollSectionProps {
  children: ReactNode;
  zoomStart?: number;
  zoomEnd?: number;
  className?: string;
}

export function ZoomScrollSection({
  children,
  zoomStart = 0.8,
  zoomEnd = 1.2,
  className = "",
}: ZoomScrollSectionProps) {
  const ref = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [zoomStart, zoomEnd, zoomStart]);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.5, 0.8, 1], [0, 1, 1, 1, 0]);

  return (
    <div ref={ref} className={`relative ${className}`}>
      <motion.div
        style={{ scale, opacity }}
        className="will-change-transform sticky top-20"
      >
        {children}
      </motion.div>
    </div>
  );
}

interface ParallaxTextProps {
  children: ReactNode;
  speed?: number;
  className?: string;
}

export function ParallaxText({ children, speed = 50, className = "" }: ParallaxTextProps) {
  const ref = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [-speed, speed]);

  return (
    <motion.div ref={ref} style={{ y }} className={className}>
      {children}
    </motion.div>
  );
}

interface StickyScrollProps {
  children: ReactNode;
  className?: string;
}

export function StickyScroll({ children, className = "" }: StickyScrollProps) {
  return (
    <div className={`sticky top-24 ${className}`}>
      {children}
    </div>
  );
}


