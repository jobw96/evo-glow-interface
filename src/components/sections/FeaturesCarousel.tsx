import { useEffect, useRef, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const FeaturesCarousel = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const features = [
    {
      title: "Personalized Training",
      description: "Tailored workouts that evolve with your goals.",
      image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800&h=600&fit=crop"
    },
    {
      title: "Injury Prevention",
      description: "Instant alerts when risky movements put you at risk.",
      image: "https://images.unsplash.com/photo-1476480862126-209bfaa8edc8?w=800&h=600&fit=crop"
    },
    {
      title: "Recovery Optimization",
      description: "AI helps you recover smarter for tomorrow's session.",
      image: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=800&h=600&fit=crop"
    },
    {
      title: "Smart Nutrition Tips",
      description: "AI suggests meal timing and hydration reminders.",
      image: "https://images.unsplash.com/photo-1490645935967-10de6ba17061?w=800&h=600&fit=crop"
    },
    {
      title: "Connected Ecosystem",
      description: "Syncs seamlessly with your favorite fitness platforms.",
      image: "https://images.unsplash.com/photo-1434494878577-86c23bcb06b9?w=800&h=600&fit=crop"
    }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("revealed");
          }
        });
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const next = () => {
    setCurrentIndex((prev) => (prev + 1) % features.length);
  };

  const prev = () => {
    setCurrentIndex((prev) => (prev - 1 + features.length) % features.length);
  };

  return (
    <section
      id="features"
      ref={sectionRef}
      className="scroll-reveal py-24 px-6"
    >
      <div className="max-w-7xl mx-auto">
        <div className="mb-16 text-center">
          <h2 className="mb-4 text-4xl md:text-5xl font-bold">
            Your AI coach,
            <br />
            always on your wrist.
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Discover how powerful smart features turn every workout into lasting progress.
          </p>
        </div>

        <div className="relative max-w-5xl mx-auto">
          {/* Main Gallery */}
          <div className="relative overflow-hidden rounded-3xl">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -100 }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
                className="relative aspect-[16/10] md:aspect-[21/9]"
              >
                <img
                  src={features[currentIndex].image}
                  alt={features[currentIndex].title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent" />

                {/* Content Overlay */}
                <div className="absolute bottom-0 left-0 right-0 p-8 md:p-12">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2, duration: 0.5 }}
                  >
                    <h3 className="text-white text-3xl md:text-4xl font-bold mb-3">
                      {features[currentIndex].title}
                    </h3>
                    <p className="text-white/90 text-lg md:text-xl max-w-2xl">
                      {features[currentIndex].description}
                    </p>
                  </motion.div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Navigation Arrows - Subtle Style */}
          <div className="absolute top-1/2 -translate-y-1/2 left-0 right-0 flex justify-between px-4 md:-mx-20">
            <motion.button
              onClick={prev}
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="bg-white/5 text-gray-300 border border-white/10 hover:bg-white/10 hover:border-white/20 backdrop-blur-sm rounded-xl p-3 md:p-4 transition-all duration-300"
            >
              <ChevronLeft className="w-5 h-5 md:w-6 md:h-6" />
            </motion.button>
            <motion.button
              onClick={next}
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="bg-white/5 text-gray-300 border border-white/10 hover:bg-white/10 hover:border-white/20 backdrop-blur-sm rounded-xl p-3 md:p-4 transition-all duration-300"
            >
              <ChevronRight className="w-5 h-5 md:w-6 md:h-6" />
            </motion.button>
          </div>

          {/* Dots Indicator */}
          <div className="flex justify-center gap-2 mt-8">
            {features.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`h-2 rounded-full transition-all duration-300 ${index === currentIndex
                  ? "w-8 bg-white"
                  : "w-2 bg-white/30 hover:bg-white/50"
                  }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesCarousel;