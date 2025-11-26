import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { ScrollAnimation } from "@/components/ui/scroll-animation";
import Header from "@/components/layout/Header";
import FooterSection from "@/components/sections/FooterSection";
import { ThemeToggle } from "@/components/ui/theme-toggle";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const { toast } = useToast();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: [0.25, 0.46, 0.45, 0.94],
      },
    },
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message sent!",
      description: "We'll get back to you as soon as possible.",
    });
    setFormData({
      name: "",
      email: "",
      subject: "",
      message: "",
    });
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="min-h-screen">
      <Header />
      <ThemeToggle />
      <div className="pt-24">
        <section className="py-24 px-6">
          <div className="max-w-6xl mx-auto">
            <ScrollAnimation direction="fade" className="text-center mb-16">
              <span className="inline-flex items-center gap-2 text-sm text-muted-foreground mb-4">
                <span className="w-2 h-2 rounded-full bg-accent" />
                Contact
              </span>
              <h1 className="mb-6">Get in Touch</h1>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Have questions? We'd love to hear from you. Send us a message
                and we'll respond as soon as possible.
              </p>
            </ScrollAnimation>

            <motion.div
              className="grid md:grid-cols-2 gap-8"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
            >
              {/* Contact Information */}
              <motion.div variants={itemVariants} className="space-y-6">
                <motion.div
                  className="glass-card rounded-3xl p-8"
                  whileHover={{ y: -5, transition: { duration: 0.3 } }}
                >
                  <h3 className="mb-6">Contact Information</h3>
                  <div className="space-y-6">
                    <motion.div
                      className="flex items-start gap-4"
                      whileHover={{ x: 5, transition: { duration: 0.2 } }}
                    >
                      <div className="rounded-full bg-accent/10 p-3 flex-shrink-0">
                        <Mail className="w-5 h-5 text-accent" />
                      </div>
                      <div>
                        <h4 className="font-semibold mb-1">Email</h4>
                        <p className="text-muted-foreground">
                          hello@evotrack.com
                        </p>
                      </div>
                    </motion.div>

                    <motion.div
                      className="flex items-start gap-4"
                      whileHover={{ x: 5, transition: { duration: 0.2 } }}
                    >
                      <div className="rounded-full bg-accent/10 p-3 flex-shrink-0">
                        <Phone className="w-5 h-5 text-accent" />
                      </div>
                      <div>
                        <h4 className="font-semibold mb-1">Phone</h4>
                        <p className="text-muted-foreground">
                          +1 (555) 123-4567
                        </p>
                      </div>
                    </motion.div>

                    <motion.div
                      className="flex items-start gap-4"
                      whileHover={{ x: 5, transition: { duration: 0.2 } }}
                    >
                      <div className="rounded-full bg-accent/10 p-3 flex-shrink-0">
                        <MapPin className="w-5 h-5 text-accent" />
                      </div>
                      <div>
                        <h4 className="font-semibold mb-1">Address</h4>
                        <p className="text-muted-foreground">
                          123 Fitness Street
                          <br />
                          San Francisco, CA 94102
                        </p>
                      </div>
                    </motion.div>
                  </div>
                </motion.div>
              </motion.div>

              {/* Contact Form */}
              <motion.div variants={itemVariants}>
                <motion.div
                  className="glass-card rounded-3xl p-8"
                  whileHover={{ y: -5, transition: { duration: 0.3 } }}
                >
                  <h3 className="mb-6">Send us a Message</h3>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.3 }}
                    >
                      <Input
                        type="text"
                        name="name"
                        placeholder="Your name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="h-12"
                      />
                    </motion.div>

                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.4 }}
                    >
                      <Input
                        type="email"
                        name="email"
                        placeholder="your.email@example.com"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="h-12"
                      />
                    </motion.div>

                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.5 }}
                    >
                      <Input
                        type="text"
                        name="subject"
                        placeholder="Subject"
                        value={formData.subject}
                        onChange={handleChange}
                        required
                        className="h-12"
                      />
                    </motion.div>

                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.6 }}
                    >
                      <Textarea
                        name="message"
                        placeholder="Your message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        rows={6}
                        className="resize-none"
                      />
                    </motion.div>

                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.7 }}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <Button
                        type="submit"
                        className="w-full h-12 lime-button"
                      >
                        <Send className="w-4 h-4 mr-2" />
                        Send Message
                      </Button>
                    </motion.div>
                  </form>
                </motion.div>
              </motion.div>
            </motion.div>
          </div>
        </section>
      </div>
      <FooterSection />
    </div>
  );
};

export default Contact;

