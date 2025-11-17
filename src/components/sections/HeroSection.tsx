import { useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-image.jpg";

const HeroSection = () => {
  const contentRef = useRef<HTMLDivElement>(null);

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

    if (contentRef.current) {
      observer.observe(contentRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const scrollToWaitlist = () => {
    const element = document.getElementById("waitlist");
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Hero Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroImage}
          alt="Athlete with fitness tracker"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-hero-start/70 via-hero-end/60 to-background/90" />
      </div>

      {/* Content */}
      <div ref={contentRef} className="scroll-reveal relative z-10 max-w-4xl mx-auto px-6 text-center">
        <h1 className="text-white mb-6">
          Push Your Limits<br />with AI Precision
        </h1>
        <p className="text-xl md:text-2xl text-white/90 mb-12 font-light max-w-2xl mx-auto">
          Track every move, analyze your performance, and get real-time coaching, all from your wrist.
        </p>
        <Button
          onClick={scrollToWaitlist}
          size="lg"
          className="neuro-button text-accent-foreground text-lg px-8 py-6"
        >
          Join waitlist now
        </Button>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex items-start justify-center p-2">
          <div className="w-1 h-3 bg-white/50 rounded-full" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
