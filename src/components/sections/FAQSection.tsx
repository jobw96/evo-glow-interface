import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { ScrollAnimation } from "@/components/ui/scroll-animation";

const FAQSection = () => {
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
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { x: -30, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: [0.25, 0.46, 0.45, 0.94],
      },
    },
  };

  return (
    <section id="faq" className="py-24 px-6">
      <div className="max-w-4xl mx-auto">
        <motion.div
          className="grid md:grid-cols-2 gap-12 mb-12"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          <motion.div variants={itemVariants}>
            <span className="inline-flex items-center gap-1 rounded-full bg-yellow-400/10 px-3 py-1.5 text-xs text-yellow-300 ring-1 ring-yellow-300/20 uppercase tracking-tight mb-4">
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
                <circle cx="12" cy="12" r="10" />
                <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3" />
                <path d="M12 17h.01" />
              </svg>
              FAQ
            </span>
            <h2 className="mb-4">
              Frequently Asked<br />
              Questions
            </h2>
            <p className="text-lg text-muted-foreground mb-6">
              Everything you need to know about EvoTrack before getting started.
            </p>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button
                onClick={scrollToWaitlist}
                className="neuro-button bg-lime-400 hover:bg-lime-300 text-zinc-950 bg-[3bf73b] bg-green-500 hover:bg-green-400"
              >
                Join waitlist
              </Button>
            </motion.div>
          </motion.div>

          <motion.div variants={itemVariants}>
            <Accordion
              type="single"
              collapsible
              className="space-y-4"
              defaultValue="item-0"
            >
              {faqs.map((faq, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <AccordionItem
                    value={`item-${index}`}
                    className="border-b border-border/50"
                  >
                    <AccordionTrigger className="hover:no-underline text-left font-normal py-4">
                      {faq.question}
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground pb-4">
                      {faq.answer}
                    </AccordionContent>
                  </AccordionItem>
                </motion.div>
              ))}
            </Accordion>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};
export default FAQSection;