import { useEffect, useRef, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
const FeaturesCarousel = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const features = [{
    title: "Personalized Training",
    description: "Tailored workouts that evolve with your goals.",
    image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800&h=600&fit=crop"
  }, {
    title: "Injury Prevention",
    description: "Instant alerts when risky movements put you at risk.",
    image: "https://images.unsplash.com/photo-1476480862126-209bfaa8edc8?w=800&h=600&fit=crop"
  }, {
    title: "Recovery Optimization",
    description: "AI helps you recover smarter for tomorrow's session.",
    image: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=800&h=600&fit=crop"
  }, {
    title: "Smart Nutrition Tips",
    description: "AI suggests meal timing and hydration reminders.",
    image: "https://images.unsplash.com/photo-1490645935967-10de6ba17061?w=800&h=600&fit=crop"
  }, {
    title: "Connected Ecosystem",
    description: "Syncs seamlessly with your favorite fitness platforms.",
    image: "https://images.unsplash.com/photo-1434494878577-86c23bcb06b9?w=800&h=600&fit=crop"
  }];
  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("revealed");
        }
      });
    }, {
      threshold: 0.1
    });
    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }
    return () => observer.disconnect();
  }, []);
  const next = () => {
    setCurrentIndex(prev => (prev + 1) % features.length);
  };
  const prev = () => {
    setCurrentIndex(prev => (prev - 1 + features.length) % features.length);
  };
  return <section id="features" ref={sectionRef} className="scroll-reveal py-24 px-6 bg-secondary/30">
      <div className="max-w-7xl mx-auto">
        <div className="mb-12">
          <h2 className="mb-4">Your AI coach,<br />always on your wrist.</h2>
          <p className="text-lg text-muted-foreground max-w-xl">
            Discover how powerful smart features turn every workout into lasting progress.
          </p>
        </div>

        <div className="relative">
          <div className="overflow-hidden">
            <div className="flex transition-transform duration-500 ease-out" style={{
            transform: `translateX(-${currentIndex * 100}%)`
          }}>
              {features.map((feature, index) => <div key={index} className="min-w-full px-2">
                  <div className="glass-card rounded-3xl overflow-hidden group">
                    <div className="relative h-[400px]">
                      <img src={feature.image} alt={feature.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
                      <div className="absolute bottom-8 left-8 text-white">
                        <h3 className="text-white mb-2">{feature.title}</h3>
                        <p className="text-white/80">{feature.description}</p>
                      </div>
                    </div>
                  </div>
                </div>)}
            </div>
          </div>

          <div className="flex justify-center gap-4 mt-8">
            <Button onClick={prev} size="icon" className="neuro-button rounded-full w-12 h-12 bg-lime-400 hover:bg-lime-300">
              <ChevronLeft className="w-5 h-5 text-accent-foreground" />
            </Button>
            <Button onClick={next} size="icon" className="neuro-button rounded-full w-12 h-12 bg-lime-400 hover:bg-lime-300">
              <ChevronRight className="w-5 h-5 text-accent-foreground" />
            </Button>
          </div>
        </div>
      </div>
    </section>;
};
export default FeaturesCarousel;