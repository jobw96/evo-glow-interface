import { useEffect, useRef, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
const TestimonialsSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const testimonials = [{
    quote: "Smart coaching for every mile.",
    text: "EvoTrack has completely redefined how I train. The AI coaching adapts to my pace, recovery, and even my mindset on race day. It feels like having a personal trainer on my wrist.",
    name: "Darius Cole",
    role: "Marathon Runner",
    result: "Increased consistency by 42%",
    image: "https://images.unsplash.com/photo-1568602471122-7832951cc4c5?w=400&h=500&fit=crop"
  }, {
    quote: "Recovery insights that actually work.",
    text: "The sleep and HRV tracking helped me understand when to push hard and when to rest. I've seen my performance improve while actually training less.",
    name: "Sarah Chen",
    role: "Triathlete",
    result: "Improved race times by 18%",
    image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=400&h=500&fit=crop"
  }, {
    quote: "Data that drives real progress.",
    text: "As a competitive cyclist, having accurate power and heart rate data is crucial. EvoTrack delivers medical-grade accuracy with insights I can actually use.",
    name: "Marcus Johnson",
    role: "Professional Cyclist",
    result: "Reduced overtraining by 35%",
    image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=400&h=500&fit=crop"
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
    setCurrentIndex(prev => (prev + 1) % testimonials.length);
  };
  const prev = () => {
    setCurrentIndex(prev => (prev - 1 + testimonials.length) % testimonials.length);
  };
  return <section id="testimonials" ref={sectionRef} className="scroll-reveal py-16 px-6">
    <div className="max-w-4xl mx-auto">
      <div className="mb-8 text-center">
        <span className="inline-flex items-center gap-1 rounded-full bg-orange-400/10 px-3 py-1.5 text-xs text-orange-300 ring-1 ring-orange-300/20 uppercase tracking-tight mb-4">
          <svg
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
            <path d="M7.9 20A9 9 0 1 0 4 16.1L2 22Z" />
          </svg>
          Testimonials
        </span>
        <h2 className="mb-3">Trusted by Athletes Worldwide</h2>
        <p className="text-base text-muted-foreground">
          Real feedback from athletes pushing their limits
        </p>
      </div>

      <div className="glass-card rounded-2xl p-6 md:p-8">
        <div className="flex flex-col md:flex-row gap-6 items-start">
          <img
            src={testimonials[currentIndex].image}
            alt={testimonials[currentIndex].name}
            className="w-20 h-20 rounded-full object-cover flex-shrink-0"
          />

          <div className="flex-1">
            <div className="text-2xl font-light mb-4 leading-tight italic">
              "{testimonials[currentIndex].quote}"
            </div>
            <p className="text-sm text-muted-foreground mb-4">
              {testimonials[currentIndex].text}
            </p>
            <div className="flex items-center justify-between flex-wrap gap-4">
              <div>
                <div className="font-semibold">{testimonials[currentIndex].name}</div>
                <div className="text-sm text-muted-foreground">{testimonials[currentIndex].role}</div>
              </div>
              <div className="text-sm font-semibold text-lime">
                {testimonials[currentIndex].result}
              </div>
            </div>
          </div>
        </div>

        <div className="flex items-center justify-between mt-6 pt-6 border-t">
          <div className="flex gap-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-2 h-2 rounded-full transition-all ${index === currentIndex ? 'bg-lime w-6' : 'bg-gray-300'
                  }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>

          <div className="flex gap-2">
            <Button onClick={prev} size="icon" variant="ghost" className="h-8 w-8">
              <ChevronLeft className="w-4 h-4" />
            </Button>
            <Button onClick={next} size="icon" variant="ghost" className="h-8 w-8">
              <ChevronRight className="w-4 h-4" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  </section>;
};
export default TestimonialsSection;