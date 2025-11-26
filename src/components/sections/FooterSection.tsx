import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Instagram, Music2, Linkedin, ArrowUpRight } from "lucide-react";

const FooterSection = () => {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start end", "end end"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [-100, 0]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [0, 1]);

  return (
    <footer
      ref={container}
      className="relative bg-black text-white py-20 overflow-hidden"
    >
      {/* Parallax Background Text */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-10 select-none overflow-hidden">
        <motion.h1
          style={{ y }}
          className="text-[20vw] font-bold leading-none tracking-tighter text-white whitespace-nowrap"
        >
          EVOTRACK
        </motion.h1>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-20">
          <div className="space-y-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="flex items-center gap-2 text-2xl font-bold tracking-tight"
            >
              <span className="text-3xl">⚡</span>
              EvoTrack
            </motion.div>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-gray-400 max-w-xs"
            >
              Track every move, analyze your performance, and get real-time
              coaching, all from your wrist.
            </motion.p>
          </div>

          <div className="space-y-6">
            <motion.h4
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-lg font-semibold"
            >
              Navigation
            </motion.h4>
            <nav className="flex flex-col gap-4">
              {["About", "Features", "Testimonials", "FAQ"].map((item, i) => (
                <motion.a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.3 + i * 0.1 }}
                  className="text-gray-400 hover:text-white transition-colors flex items-center gap-2 group"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-accent scale-0 group-hover:scale-100 transition-transform" />
                  {item}
                </motion.a>
              ))}
            </nav>
          </div>

          <div className="space-y-6">
            <motion.h4
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="text-lg font-semibold"
            >
              Socials
            </motion.h4>
            <div className="flex gap-4">
              {[
                { icon: Instagram, href: "https://instagram.com" },
                { icon: Music2, href: "https://tiktok.com" },
                { icon: Linkedin, href: "https://linkedin.com" },
              ].map((social, i) => (
                <motion.a
                  key={i}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{
                    type: "spring",
                    stiffness: 260,
                    damping: 20,
                    delay: 0.5 + i * 0.1,
                  }}
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-white/10 hover:border-white/20 transition-colors text-white"
                >
                  <social.icon size={20} />
                </motion.a>
              ))}
            </div>
          </div>

          <div className="space-y-6">
            <motion.h4
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="text-lg font-semibold"
            >
              Get in touch
            </motion.h4>
            <motion.a
              href="mailto:hello@evotrack.com"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="text-2xl font-light hover:text-accent transition-colors flex items-center gap-2"
            >
              hello@evotrack.com
              <ArrowUpRight className="w-5 h-5" />
            </motion.a>
          </div>
        </div>

        <motion.div
          style={{ opacity }}
          className="pt-8 border-t border-white/10 flex flex-col sm:flex-row justify-between items-center gap-4 text-sm text-gray-500"
        >
          <p>© 2025 EvoTrack. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-white transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-white transition-colors">
              Terms of Service
            </a>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default FooterSection;