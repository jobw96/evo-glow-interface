import { useEffect, useRef, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const TestimonialsSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials = [
    {
      quote: "Smart coaching for every mile.",
      text: "EvoTrack has completely redefined how I train. The AI coaching adapts to my pace, recovery, and even my mindset on race day. It feels like having a personal trainer on my wrist.",
      name: "Darius Cole",
      role: "Marathon Runner",
      result: "Increased consistency by 42%",
      image: "https://images.unsplash.com/photo-1568602471122-7832951cc4c5?w=400&h=500&fit=crop",
    },
    {
      quote: "Recovery insights that actually work.",
      text: "The sleep and HRV tracking helped me understand when to push hard and when to rest. I've seen my performance improve while actually training less.",
      name: "Sarah Chen",
      role: "Triathlete",
      result: "Improved race times by 18%",
      image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=400&h=500&fit=crop",
    },
    {
      quote: "Data that drives real progress.",
      text: "As a competitive cyclist, having accurate power and heart rate data is crucial. EvoTrack delivers medical-grade accuracy with insights I can actually use.",
      name: "Marcus Johnson",
      role: "Professional Cyclist",
      result: "Reduced overtraining by 35%",
      image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=400&h=500&fit=crop",
    },
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
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prev = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section id="testimonials" ref={sectionRef} className="scroll-reveal py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="mb-12">
          <span className="inline-flex items-center gap-2 text-sm text-muted-foreground mb-4">
            <span className="w-2 h-2 rounded-full bg-accent" />
            Testimonials
          </span>
          <h2 className="mb-4">Trusted by Athletes<br />Worldwide</h2>
          <p className="text-lg text-muted-foreground max-w-xl">
            Real feedback from athletes pushing the limits of human performance, powered by AI.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className="flex justify-center gap-4 md:order-1">
            <Button
              onClick={prev}
              size="icon"
              className="neuro-button rounded-full w-12 h-12"
            >
              <ChevronLeft className="w-5 h-5 text-accent-foreground" />
            </Button>
            <Button
              onClick={next}
              size="icon"
              className="neuro-button rounded-full w-12 h-12"
            >
              <ChevronRight className="w-5 h-5 text-accent-foreground" />
            </Button>
          </div>

          <div className="glass-card rounded-3xl overflow-hidden md:order-2">
            <img
              src={testimonials[currentIndex].image}
              alt={testimonials[currentIndex].name}
              className="w-full h-[400px] object-cover"
            />
          </div>

          <div className="md:col-span-2 glass-card rounded-3xl p-8 md:p-12 md:order-3">
            <div className="max-w-3xl">
              <div className="text-4xl md:text-5xl font-light mb-6 leading-tight">
                "{testimonials[currentIndex].quote}"
              </div>
              <p className="text-lg text-muted-foreground mb-8">
                {testimonials[currentIndex].text}
              </p>
              <div className="flex items-center justify-between flex-wrap gap-4">
                <div>
                  <div className="font-normal text-lg">{testimonials[currentIndex].name}</div>
                  <div className="text-muted-foreground">{testimonials[currentIndex].role}</div>
                </div>
                <div className="text-right">
                  <div className="text-sm text-muted-foreground mb-1">Result</div>
                  <div className="font-normal text-accent">{testimonials[currentIndex].result}</div>
                </div>
              </div>
              <div className="text-sm text-muted-foreground mt-6">
                {currentIndex + 1}/{testimonials.length}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
