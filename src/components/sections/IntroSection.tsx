import { Sparkles, Heart, Target } from "lucide-react";
import { motion } from "framer-motion";
import athlete1 from "@/assets/athlete-1.jpg";
import athlete2 from "@/assets/athlete-2.jpg";
import watchCloseup from "@/assets/watch-closeup.jpg";
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
          <span className="inline-flex items-center gap-1 rounded-full bg-blue-400/10 px-3 py-1.5 text-xs text-blue-300 ring-1 ring-blue-300/20 uppercase tracking-tight mb-4">
            <Sparkles className="h-3.5 w-3.5" />
            Introduction
          </span>
          <h2 className="mb-6">Smarter. Faster. More Personal.</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Everything you need from a smartwatch, powered by AI that learns and adapts to you.
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
              src={athlete1}
              alt="AI-driven insights"
              className="w-full h-full object-cover min-h-[400px]"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.7, ease: "easeOut" }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
            <div className="absolute bottom-8 left-8 text-white">
              <Sparkles className="w-8 h-8 mb-4" />
              <h3 className="text-white mb-2">
                AI-driven insights tailored<br />
                to your training style
              </h3>
            </div>
          </motion.div>

          <motion.div variants={itemVariants} className="flex flex-col gap-6">
            <motion.div
              className="glass-card rounded-3xl p-8 flex flex-col items-center justify-center text-center h-full"
              whileHover={{ y: -5, transition: { duration: 0.3 } }}
            >
              <Heart className="w-12 h-12 mb-4" />
              <h3 className="mb-2">
                Advanced health &<br />
                heart rate tracking
              </h3>
            </motion.div>

            <motion.div
              className="neuro-button rounded-3xl p-8 flex flex-col items-center justify-center text-center h-full bg-lime-400"
              whileHover={{ y: -5, scale: 1.02, transition: { duration: 0.3 } }}
            >
              <div className="text-5xl font-light mb-2">25%</div>
              <p className="text-accent-foreground font-normal">
                faster progress with<br />
                smart AI guidance
              </p>
            </motion.div>
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="md:col-span-1 relative rounded-3xl overflow-hidden group"
          >
            <motion.img
              src={athlete2}
              alt="Personalized workouts"
              className="w-full h-full object-cover min-h-[300px]"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.7, ease: "easeOut" }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
            <div className="absolute bottom-8 left-8 text-white">
              <Target className="w-8 h-8 mb-4" />
              <h3 className="text-white">
                Personalized workout<br />
                recommendations
              </h3>
            </div>
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="md:col-span-2 relative rounded-3xl overflow-hidden group"
          >
            <motion.img
              src={watchCloseup}
              alt="Connected ecosystem"
              className="w-full h-full object-cover min-h-[300px]"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.7, ease: "easeOut" }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
            <div className="absolute bottom-8 left-8 text-white">
              <div className="w-8 h-8 mb-4 flex items-center justify-center">
                <div className="w-6 h-6 border-2 border-white rounded-full" />
              </div>
              <h3 className="text-white">Connected Ecosystem</h3>
              <p className="text-white/80 text-sm mt-2">
                Syncs seamlessly with your favorite<br />
                fitness apps
              </p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};
export default IntroSection;