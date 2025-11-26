import { Smartphone, Target, TrendingUp } from "lucide-react";
import { motion } from "framer-motion";
import { ScrollAnimation } from "@/components/ui/scroll-animation";
import { useState } from "react";

const HowItWorks = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const steps = [
    {
      icon: Smartphone,
      title: "Connect Your Device",
      description: "Pair your EvoTrack watch with your phone in seconds. Sync is automatic.",
      color: "from-blue-500 to-cyan-500",
      bgColor: "bg-blue-500/10",
      hoverBg: "hover:bg-blue-500/20",
    },
    {
      icon: Target,
      title: "Set Up Your Goals",
      description: "Tell us what you want to achieve. Our AI will create your personalized plan.",
      color: "from-purple-500 to-pink-500",
      bgColor: "bg-purple-500/10",
      hoverBg: "hover:bg-purple-500/20",
    },
    {
      icon: TrendingUp,
      title: "Track & Accelerate Progress",
      description: "Get real-time insights and coaching that adapts to your performance.",
      color: "from-green-500 to-emerald-500",
      bgColor: "bg-green-500/10",
      hoverBg: "hover:bg-green-500/20",
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

  const lineVariants = {
    hidden: { scaleX: 0 },
    visible: {
      scaleX: 1,
      transition: {
        duration: 0.8,
        ease: "easeInOut",
        delay: 0.5,
      },
    },
  };

  return (
    <section className="py-24 px-6 relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-accent/5 to-transparent pointer-events-none" />

      <div className="max-w-6xl mx-auto relative">
        <ScrollAnimation direction="fade" className="text-center mb-20">
          <h2 className="mb-4 text-4xl md:text-5xl font-bold">How It Works</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Three simple steps to transform your training
          </p>
        </ScrollAnimation>

        <motion.div
          className="relative grid md:grid-cols-3 gap-8 md:gap-12"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {/* Connecting lines - desktop only */}
          <div className="hidden md:block absolute top-24 left-0 right-0 h-0.5 -z-10">
            <motion.div
              variants={lineVariants}
              className="h-full bg-gradient-to-r from-accent/20 via-accent/40 to-accent/20 origin-left"
            />
          </div>

          {steps.map((step, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="relative"
              onHoverStart={() => setHoveredIndex(index)}
              onHoverEnd={() => setHoveredIndex(null)}
            >
              {/* Step number badge */}
              <motion.div
                className="absolute -top-4 -right-4 w-12 h-12 rounded-full bg-gradient-to-br from-accent to-accent/60 flex items-center justify-center text-white font-bold text-lg shadow-lg z-10"
                animate={{
                  scale: hoveredIndex === index ? 1.2 : 1,
                  rotate: hoveredIndex === index ? 360 : 0,
                }}
                transition={{ duration: 0.5, ease: "easeOut" }}
              >
                {index + 1}
              </motion.div>

              <motion.div
                className={`glass-card rounded-3xl p-8 text-center h-full relative overflow-hidden ${step.hoverBg} transition-colors duration-300`}
                whileHover={{
                  y: -12,
                  transition: { duration: 0.3 }
                }}
              >
                {/* Glow effect on hover */}
                <motion.div
                  className={`absolute inset-0 bg-gradient-to-br ${step.color} opacity-0 blur-2xl`}
                  animate={{
                    opacity: hoveredIndex === index ? 0.1 : 0,
                  }}
                  transition={{ duration: 0.3 }}
                />

                {/* Icon container */}
                <motion.div
                  className={`relative w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-6 ${step.bgColor}`}
                  animate={{
                    scale: hoveredIndex === index ? 1.1 : 1,
                    rotate: hoveredIndex === index ? [0, -5, 5, 0] : 0,
                  }}
                  transition={{
                    duration: 0.5,
                    rotate: {
                      repeat: hoveredIndex === index ? Infinity : 0,
                      duration: 2,
                    }
                  }}
                >
                  <motion.div
                    className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${step.color} opacity-0`}
                    animate={{
                      opacity: hoveredIndex === index ? 0.2 : 0,
                    }}
                    transition={{ duration: 0.3 }}
                  />
                  <step.icon
                    className="w-10 h-10 text-accent relative z-10"
                    strokeWidth={hoveredIndex === index ? 2.5 : 2}
                  />
                </motion.div>

                <h3 className="mb-4 text-xl font-semibold">{step.title}</h3>
                <p className="text-muted-foreground leading-relaxed">
                  {step.description}
                </p>

                {/* Bottom accent line */}
                <motion.div
                  className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${step.color}`}
                  initial={{ scaleX: 0 }}
                  animate={{
                    scaleX: hoveredIndex === index ? 1 : 0,
                  }}
                  transition={{ duration: 0.3 }}
                  style={{ originX: 0.5 }}
                />
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default HowItWorks;