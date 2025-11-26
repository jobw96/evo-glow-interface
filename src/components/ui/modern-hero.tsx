import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { ArrowDown } from "lucide-react";

interface HeroProps {
  title?: string;
  subtitle?: string;
  description: string;
  badgeText?: string;
  ctaButtons?: Array<{ text: string; href: string; primary?: boolean }>;
}

export default function ModernHero({
  title = "Creative Developer",
  subtitle = "& Digital Designer",
  description,
  badgeText = "Available for new projects",
  ctaButtons = [],
}: HeroProps) {
  const navigate = useNavigate();

  const handleNavigation = (href: string) => {
    if (href.startsWith("/")) {
      navigate(href);
    } else {
      const element = document.getElementById(href.replace("#", ""));
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: [0.25, 0.46, 0.45, 0.94],
      },
    },
  };

  const stats = [
    { value: "> 150+", label: ["Projects", "Completed"] },
    { value: "10+", label: ["Years", "Experience"] },
    { value: "50+", label: ["Happy", "Clients"] },
  ];

  const specialties = [
    "Frontend Development",
    "UI/UX Design",
    "Creative Coding",
    "Web Animations",
    "Brand Identity",
  ];

  return (
    <section className="relative min-h-screen w-full overflow-hidden bg-black">
      {/* Gradient orb background */}
      <div className="absolute inset-0">
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-radial from-purple-900/30 via-blue-900/20 to-transparent blur-3xl" />
        <div className="absolute top-1/2 left-1/3 w-[500px] h-[500px] bg-gradient-radial from-indigo-900/20 via-transparent to-transparent blur-3xl" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-gray-900/10 via-black to-black" />
        {/* Noise texture overlay */}
        <div className="absolute inset-0 opacity-30 mix-blend-overlay bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMDAiIGhlaWdodD0iMzAwIj48ZmlsdGVyIGlkPSJhIiB4PSIwIiB5PSIwIj48ZmVUdXJidWxlbmNlIGJhc2VGcmVxdWVuY3k9Ii43NSIgc3RpdGNoVGlsZXM9InN0aXRjaCIgdHlwZT0iZnJhY3RhbE5vaXNlIi8+PGZlQ29sb3JNYXRyaXggdHlwZT0ic2F0dXJhdGUiIHZhbHVlcz0iMCIvPjwvZmlsdGVyPjxwYXRoIGQ9Ik0wIDBoMzAwdjMwMEgweiIgZmlsdGVyPSJ1cmwoI2EpIiBvcGFjaXR5PSIuMDUiLz48L3N2Zz4=')]" />
      </div>

      <div className="relative z-10 container mx-auto px-6 py-24 md:py-32">
        <div className="grid lg:grid-cols-[200px_1fr_200px] gap-12 items-center min-h-[80vh]">
          {/* Left sidebar - Specialties */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="hidden lg:block space-y-8"
          >
            <div>
              <h3 className="text-xs font-medium tracking-wider text-gray-400 uppercase mb-6">
                SPECIALTIES
              </h3>
              <ul className="space-y-3">
                {specialties.map((specialty, index) => (
                  <motion.li
                    key={specialty}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: 0.5 + index * 0.1 }}
                    className="text-sm text-gray-400 hover:text-white transition-colors cursor-default flex items-start gap-2"
                  >
                    <span className="text-lime-400">•</span>
                    {specialty}
                  </motion.li>
                ))}
              </ul>
            </div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 1 }}
            >
              <h3 className="text-xs font-medium tracking-wider text-gray-400 uppercase mb-4">
                CURRENTLY
              </h3>
              <p className="text-sm text-gray-400 mb-3">
                Available for freelance projects & full-time opportunities
              </p>
              <div className="flex items-center gap-2 text-lime-400">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-lime-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-lime-400"></span>
                </span>
                <span className="text-xs font-medium">Open to work</span>
              </div>
            </motion.div>
          </motion.div>

          {/* Center content */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="text-center lg:text-left max-w-3xl mx-auto lg:mx-0"
          >
            <motion.div variants={itemVariants} className="mb-8">
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-sm text-sm text-gray-300">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-lime-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-lime-400"></span>
                </span>
                {badgeText}
              </span>
            </motion.div>

            <motion.h1
              variants={itemVariants}
              className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-4 leading-tight"
            >
              {title}
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-gray-400 to-gray-600">
                {subtitle}
              </span>
            </motion.h1>

            <motion.p
              variants={itemVariants}
              className="text-gray-400 text-base md:text-lg leading-relaxed mb-10 max-w-2xl"
            >
              {description}
            </motion.p>

            <motion.div
              variants={itemVariants}
              className="flex flex-wrap items-center gap-4 justify-center lg:justify-start"
            >
              {ctaButtons.map((button, index) => (
                <motion.button
                  key={index}
                  onClick={() => handleNavigation(button.href)}
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className={`
                    px-6 py-3 rounded-xl text-sm font-medium transition-all duration-300
                    ${button.primary
                      ? "bg-white text-black hover:bg-gray-100 shadow-lg shadow-white/10"
                      : "bg-white/5 text-gray-300 border border-white/10 hover:bg-white/10 hover:border-white/20 backdrop-blur-sm"
                    }
                  `}
                >
                  {button.text}
                </motion.button>
              ))}
            </motion.div>

            {/* Stats Section */}
            <motion.div
              variants={containerVariants}
              className="mt-20 pt-12 border-t border-white/10 grid grid-cols-3 gap-8"
            >
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="text-center lg:text-left"
                >
                  <div className="text-3xl md:text-4xl font-bold text-white mb-2">
                    {stat.value}
                  </div>
                  <div className="text-sm text-gray-400">
                    {stat.label.map((line, i) => (
                      <div key={i}>{line}</div>
                    ))}
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right - Empty space for balance */}
          <div className="hidden lg:block" />
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          className="flex flex-col items-center gap-2 text-gray-500"
        >
          <span className="text-xs uppercase tracking-wider">Scroll</span>
          <ArrowDown className="w-4 h-4" />
        </motion.div>
      </motion.div>
    </section>
  );
}


