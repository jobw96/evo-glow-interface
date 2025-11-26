import { motion, AnimatePresence } from "framer-motion";
import { ReactNode, useEffect } from "react";
import { useLocation } from "react-router-dom";

interface PageTransitionProps {
  children: ReactNode;
}

const luxuryTransition = {
  duration: 0.8,
  ease: [0.22, 1, 0.36, 1], // Custom ease similar to Apple's timing function
};

const overlayVariants = {
  initial: { 
    scaleY: 0,
    originY: 1,
  },
  animate: { 
    scaleY: 0,
    originY: 1,
    transition: {
      duration: 0.8,
      ease: [0.22, 1, 0.36, 1],
    }
  },
  exit: { 
    scaleY: 1,
    originY: 0,
    transition: {
      duration: 0.8,
      ease: [0.22, 1, 0.36, 1],
    }
  },
};

const contentVariants = {
  initial: { 
    opacity: 0,
    y: 20,
    scale: 0.98,
  },
  animate: { 
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.8,
      ease: [0.22, 1, 0.36, 1],
      delay: 0.2, // Wait for overlay to clear
    }
  },
  exit: { 
    opacity: 0,
    y: -20,
    scale: 0.98,
    transition: {
      duration: 0.6,
      ease: [0.22, 1, 0.36, 1],
    }
  },
};

export function PageTransition({ children }: PageTransitionProps) {
  const location = useLocation();

  return (
    <>
      {/* Transition Overlay - creates a curtain effect */}
      <motion.div
        className="fixed inset-0 z-[100] bg-foreground/5 pointer-events-none backdrop-blur-[2px]"
        variants={overlayVariants}
        initial="initial"
        animate="animate"
        exit="exit"
      />
      
      {/* Main Content Transition */}
      <motion.div
        key={location.pathname}
        variants={contentVariants}
        initial="initial"
        animate="animate"
        exit="exit"
        className="w-full min-h-screen"
      >
        {children}
      </motion.div>
    </>
  );
}

export function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "instant", // Instant scroll to prevent visual jump before transition
    });
  }, [pathname]);

  return null;
}
