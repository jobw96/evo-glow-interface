import { useEffect, useRef, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
const TestimonialsSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const testimonials = [{
    quote: "Perfecte webshop, direct meer verkopen.",
    text: "Nieuwblik heeft onze volledige webshop gebouwd inclusief product fotografie. Het resultaat overtrof alle verwachtingen en onze conversie is met 65% gestegen.",
    name: "Lisa van der Berg",
    role: "Eigenaar Kitchen Essentials",
    result: "65% hogere conversie",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=500&fit=crop"
  }, {
    quote: "Modern design dat perfect past bij ons merk.",
    text: "De website die Nieuwblik voor ons ontwikkelde is niet alleen visueel prachtig, maar laadt ook razendsnel en scoort hoog in Google. Precies wat we nodig hadden.",
    name: "Mark Jansen",
    role: "Marketing Manager TechFlow",
    result: "Top 3 in Google binnen 2 maanden",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=500&fit=crop"
  }, {
    quote: "Branding die écht verschil maakt.",
    text: "Van logo tot complete huisstijl - Nieuwblik heeft ons merk getransformeerd. We worden nu direct herkend en dat voelen we terug in onze omzet.",
    name: "Sophie Vermeulen",
    role: "Oprichter BLOOM Cosmetics",
    result: "3x meer merkherkenning",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=500&fit=crop"
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
        <span className="inline-flex items-center gap-1 rounded-full bg-lime/10 px-3 py-1.5 text-xs text-lime ring-1 ring-lime/20 uppercase tracking-tight mb-4">
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
          Reviews
        </span>
        <h2 className="mb-3">Wat onze klanten zeggen</h2>
        <p className="text-base text-muted-foreground">
          Echte resultaten van bedrijven die met ons samenwerkten
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