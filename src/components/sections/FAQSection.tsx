import { useEffect, useRef } from "react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
const FAQSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
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
      const elements = sectionRef.current.querySelectorAll(".scroll-reveal");
      elements.forEach(el => observer.observe(el));
    }
    return () => observer.disconnect();
  }, []);
  const scrollToWaitlist = () => {
    const element = document.getElementById("waitlist");
    element?.scrollIntoView({
      behavior: "smooth"
    });
  };
  const faqs = [{
    question: "How accurate are EvoTrack's health and fitness metrics?",
    answer: "EvoTrack uses advanced AI algorithms combined with medical-grade sensors to ensure highly accurate data for heart rate, sleep, recovery, and training insights."
  }, {
    question: "Can EvoTrack sync with my favorite fitness apps?",
    answer: "Yes! EvoTrack seamlessly integrates with popular platforms including Strava, Apple Health, Google Fit, and many other fitness ecosystems."
  }, {
    question: "Is EvoTrack suitable for all types of athletes?",
    answer: "Absolutely. Whether you're a runner, cyclist, swimmer, or gym enthusiast, EvoTrack's AI adapts to your specific sport and training style."
  }, {
    question: "How does AI improve my training sessions?",
    answer: "Our AI analyzes your performance patterns, recovery metrics, and training load to provide personalized coaching recommendations that help you train smarter, not just harder."
  }, {
    question: "What's the battery life like?",
    answer: "EvoTrack offers up to 7 days of battery life with typical use, and up to 30 hours with continuous GPS tracking for long endurance activities."
  }, {
    question: "Is EvoTrack waterproof?",
    answer: "Yes, EvoTrack is water-resistant up to 50 meters, making it perfect for swimming, showering, and all weather conditions."
  }];
  return <section id="faq" ref={sectionRef} className="py-24 px-6">
      <div className="max-w-4xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 mb-12">
          <div className="scroll-reveal">
            <span className="inline-flex items-center gap-2 text-sm text-muted-foreground mb-4">
              <span className="w-2 h-2 rounded-full bg-accent" />
              FAQ
            </span>
            <h2 className="mb-4">Frequently Asked<br />Questions</h2>
            <p className="text-lg text-muted-foreground mb-6">
              Everything you need to know about EvoTrack before getting started.
            </p>
            <Button onClick={scrollToWaitlist} className="neuro-button bg-lime-400 hover:bg-lime-300 text-zinc-950 bg-[3bf73b] bg-green-500 hover:bg-green-400">
              Join waitlist
            </Button>
          </div>

          <div className="scroll-reveal">
            <Accordion type="single" collapsible className="space-y-4" defaultValue="item-0">
              {faqs.map((faq, index) => <AccordionItem key={index} value={`item-${index}`} className="border-b border-border/50">
                  <AccordionTrigger className="hover:no-underline text-left font-normal py-4">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground pb-4">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>)}
            </Accordion>
          </div>
        </div>
      </div>
    </section>;
};
export default FAQSection;