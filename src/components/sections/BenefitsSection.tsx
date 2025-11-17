import { useEffect, useRef } from "react";
import { Target, Brain, RefreshCw, Shield } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const BenefitsSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

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
      const elements = sectionRef.current.querySelectorAll(".scroll-reveal");
      elements.forEach((el) => observer.observe(el));
    }

    return () => observer.disconnect();
  }, []);

  const benefits = [
    {
      icon: Target,
      title: "Proven Accuracy",
      description: "Medical-grade sensors combined with AI algorithms deliver the most accurate fitness data available.",
    },
    {
      icon: Brain,
      title: "Adaptive AI Engine",
      description: "Our AI learns from every workout, continuously optimizing recommendations based on your progress and recovery patterns.",
    },
    {
      icon: RefreshCw,
      title: "Seamless App Sync",
      description: "Works with Strava, Apple Health, Google Fit, and all major fitness platforms. Your data, unified in one place.",
    },
    {
      icon: Shield,
      title: "Peak Recovery Tools",
      description: "Advanced sleep tracking and HRV monitoring help you train harder by knowing exactly when your body is ready.",
    },
  ];

  return (
    <section ref={sectionRef} className="py-24 px-6 bg-secondary/30">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div className="scroll-reveal">
            <span className="inline-flex items-center gap-2 text-sm text-muted-foreground mb-4">
              <span className="w-2 h-2 rounded-full bg-accent" />
              Why It Works
            </span>
            <h2 className="mb-6">Smarter training, with clear<br />and proven results</h2>
            <p className="text-lg text-muted-foreground">
              Our AI-powered smartwatch isn't just about tracking, it's about transforming the way you train, recover, and perform.
            </p>
          </div>

          <div className="scroll-reveal">
            <Accordion type="single" collapsible className="space-y-4">
              {benefits.map((benefit, index) => (
                <AccordionItem
                  key={index}
                  value={`item-${index}`}
                  className="glass-card border-none rounded-2xl px-6"
                >
                  <AccordionTrigger className="hover:no-underline py-6">
                    <div className="flex items-center gap-4">
                      <div className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center shrink-0">
                        <benefit.icon className="w-5 h-5 text-accent" />
                      </div>
                      <span className="text-left font-normal">{benefit.title}</span>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground pb-6 pl-14">
                    {benefit.description}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
