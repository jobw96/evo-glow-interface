import { Smartphone, Target, TrendingUp } from "lucide-react";
import { motion } from "framer-motion";
import { ScrollAnimation } from "@/components/ui/scroll-animation";

const HowItWorks = () => {
  const steps = [
    {
      icon: Smartphone,
      title: "Connect Your Device",
      description: "Pair your EvoTrack watch with your phone in seconds. Sync is automatic.",
    },
    {
      icon: Target,
      title: "Set Up Your Goals",
      description: "Tell us what you want to achieve. Our AI will create your personalized plan.",
    },
    {
      icon: TrendingUp,
      title: "Track & Accelerate Progress",
      description: "Get real-time insights and coaching that adapts to your performance.",
    },
  ];

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
    <section className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <ScrollAnimation direction="fade" className="text-center mb-16">
          <h2 className="mb-4">How It Works</h2>
          <p className="text-lg text-muted-foreground">
            Three simple steps to transform your training
          </p>
        </ScrollAnimation>

        <motion.div
          className="grid md:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {steps.map((step, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="glass-card rounded-3xl p-8 text-center"
              whileHover={{ y: -8, transition: { duration: 0.3 } }}
            >
              <motion.div
                className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 bg-accent/10"
                whileHover={{ scale: 1.1, rotate: 5 }}
                transition={{ duration: 0.3 }}
              >
                <step.icon className="w-8 h-8 text-accent" />
              </motion.div>
              <h3 className="mb-4">{step.title}</h3>
              <p className="text-muted-foreground">{step.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
export default HowItWorks;