import { useEffect, useRef, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import ecommerceListing from "@/assets/e-commerce-listing.jpg";
import ecommerceListing2 from "@/assets/e-commerce-listing-2.jpg";
import packageDesign from "@/assets/package-design.jpg";
import websiteDesign3 from "@/assets/website-design-3.jpg";
import websiteDesign2 from "@/assets/website-design-2.jpg";

const FeaturesCarousel = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const features = [
    {
      title: "E-commerce listings",
      description: "Professionele productfotografie en listings die verkopen.",
      image: ecommerceListing
    },
    {
      title: "Webdesign op maat",
      description: "Responsive websites die perfect werken op elk apparaat.",
      image: websiteDesign3
    },
    {
      title: "Package design",
      description: "Verpakkingsontwerp dat opvalt en je product versterkt.",
      image: packageDesign
    },
    {
      title: "E-commerce platforms",
      description: "Complete online shops met krachtige product presentaties.",
      image: ecommerceListing2
    },
    {
      title: "Branding & identiteit",
      description: "Sterke merkidentiteit die blijft hangen bij je doelgroep.",
      image: websiteDesign2
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
          <span className="inline-flex items-center gap-1 rounded-full bg-lime/10 px-3 py-1.5 text-xs text-lime ring-1 ring-lime/20 uppercase tracking-tight mb-4">
            <motion.svg
              xmlns="http://www.w3.org/2000/svg"
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="h-3.5 w-3.5"
            >
              <path d="M12 2v20M2 12h20" />
            </motion.svg>
            Portfolio
          </span>
          <h2 className="mb-4 text-4xl md:text-5xl font-bold">
            Onze diensten,
            <br />
            jouw succes.
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Ontdek hoe onze expertise jouw merk naar een hoger niveau tilt.
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
                  ? "w-8 bg-lime"
                  : "w-2 bg-white/30 hover:bg-lime/50"
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