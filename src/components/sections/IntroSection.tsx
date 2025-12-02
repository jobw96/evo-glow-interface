import { Code, ShoppingCart, Palette } from "lucide-react";
import { motion } from "framer-motion";
import websiteDesign1 from "@/assets/website-design-1.jpg";
import websiteDesign2 from "@/assets/website-design-2.jpg";
import branding from "@/assets/branding.jpg";
import { ScrollAnimation } from "@/components/ui/scroll-animation";

const IntroSection = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 40, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: [0.25, 0.46, 0.45, 0.94],
      },
    },
  };

  return (
    <section id="about" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <ScrollAnimation direction="fade" className="text-center mb-16">
          <span className="inline-flex items-center gap-1 rounded-full bg-lime/10 px-3 py-1.5 text-xs text-lime ring-1 ring-lime/20 uppercase tracking-tight mb-4">
            <Code className="h-3.5 w-3.5" />
            Onze expertises
          </span>
          <h2 className="mb-6">Webdesign. E-commerce. Branding.</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Van strategie tot uitvoering - wij helpen jouw merk groeien met moderne digitale oplossingen.
          </p>
        </ScrollAnimation>

        <motion.div
          className="grid md:grid-cols-3 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          <motion.div
            variants={itemVariants}
            className="md:col-span-2 relative rounded-3xl overflow-hidden group"
          >
            <motion.img
              src={websiteDesign1}
              alt="Website design"
              className="w-full h-full object-cover min-h-[400px]"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.7, ease: "easeOut" }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
            <div className="absolute bottom-8 left-8 text-white">
              <Code className="w-8 h-8 mb-4" />
              <h3 className="text-white mb-2">
                Modern webdesign dat<br />
                converteert en indruk maakt
              </h3>
            </div>
          </motion.div>

          <motion.div variants={itemVariants} className="flex flex-col gap-6">
            <motion.div
              className="glass-card rounded-3xl p-8 flex flex-col items-center justify-center text-center h-full"
              whileHover={{ y: -5, transition: { duration: 0.3 } }}
            >
              <ShoppingCart className="w-12 h-12 mb-4" />
              <h3 className="mb-2">
                Krachtige e-commerce<br />
                platforms die verkopen
              </h3>
            </motion.div>

            <motion.div
              className="rounded-3xl p-8 flex flex-col items-center justify-center text-center h-full bg-lime text-navy"
              whileHover={{ y: -5, scale: 1.02, transition: { duration: 0.3 } }}
            >
              <div className="text-5xl font-light mb-2">100+</div>
              <p className="font-normal">
                succesvolle projecten<br />
                opgeleverd
              </p>
            </motion.div>
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="md:col-span-1 relative rounded-3xl overflow-hidden group"
          >
            <motion.img
              src={branding}
              alt="Branding"
              className="w-full h-full object-cover min-h-[300px]"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.7, ease: "easeOut" }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
            <div className="absolute bottom-8 left-8 text-white">
              <Palette className="w-8 h-8 mb-4" />
              <h3 className="text-white">
                Herkenbare branding<br />
                die blijft hangen
              </h3>
            </div>
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="md:col-span-2 relative rounded-3xl overflow-hidden group"
          >
            <motion.img
              src={websiteDesign2}
              alt="Custom development"
              className="w-full h-full object-cover min-h-[300px]"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.7, ease: "easeOut" }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
            <div className="absolute bottom-8 left-8 text-white">
              <div className="w-8 h-8 mb-4 flex items-center justify-center">
                <div className="w-6 h-6 border-2 border-white rounded-full" />
              </div>
              <h3 className="text-white">Maatwerk oplossingen</h3>
              <p className="text-white/80 text-sm mt-2">
                Van concept tot lancering,<br />
                volledig op maat gemaakt
              </p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};
export default IntroSection;