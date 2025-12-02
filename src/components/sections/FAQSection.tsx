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
    question: "Wat zijn de kosten voor een website of webshop?",
    answer: "De kosten variëren per project. Een basis website start vanaf €2.500, terwijl een complete e-commerce oplossing vanaf €5.000 begint. We maken altijd een offerte op maat na een intake gesprek."
  }, {
    question: "Hoe lang duurt het om een website te bouwen?",
    answer: "Een standaard website realiseren we binnen 4-6 weken. Voor complexere projecten zoals webshops of custom applicaties plannen we 8-12 weken. We houden je gedurende het hele proces op de hoogte."
  }, {
    question: "Krijg ik ook hulp met content en SEO?",
    answer: "Absoluut! We helpen met het schrijven van SEO-geoptimaliseerde content, keyword onderzoek en technische SEO. Ook verzorgen we productfotografie voor e-commerce projecten."
  }, {
    question: "Kan ik zelf aanpassingen doen na oplevering?",
    answer: "Ja, we bouwen gebruiksvriendelijke websites waar je zelf eenvoudig content kunt aanpassen. We geven een uitgebreide uitleg en blijven beschikbaar voor vragen."
  }, {
    question: "Bieden jullie ook onderhoud en support?",
    answer: "Ja, we bieden verschillende onderhoudscontracten aan. Van basis hosting en updates tot volledige support en doorontwikkeling. Je kiest zelf wat bij jouw situatie past."
  }, {
    question: "Werken jullie ook met bestaande merken of alleen nieuwe?",
    answer: "We werken met beide! Of je nu een complete rebranding nodig hebt of een website binnen je bestaande huisstijl, wij zorgen ervoor dat alles perfect aansluit bij jouw merk."
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
                <circle cx="12" cy="12" r="10" />
                <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3" />
                <path d="M12 17h.01" />
              </svg>
              Veelgestelde vragen
            </span>
            <h2 className="mb-4">
              Vragen over<br />
              onze diensten?
            </h2>
            <p className="text-lg text-muted-foreground mb-6">
              Alles wat je moet weten voordat we van start gaan met jouw project.
            </p>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button
                onClick={scrollToWaitlist}
                className="bg-lime text-navy hover:bg-lime/90"
              >
                Neem contact op
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