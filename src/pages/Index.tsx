import Hero from "@/components/ui/neural-network-hero";
import IntroSection from "@/components/sections/IntroSection";
import FeaturesCarousel from "@/components/sections/FeaturesCarousel";
import HowItWorks from "@/components/sections/HowItWorks";
import TestimonialsSection from "@/components/sections/TestimonialsSection";
import FAQSection from "@/components/sections/FAQSection";
import WaitlistSection from "@/components/sections/WaitlistSection";
import ContactSection from "@/components/sections/ContactSection";
import FooterSection from "@/components/sections/FooterSection";
import { ThemeToggle } from "@/components/ui/theme-toggle";
import { useParallax } from "@/hooks/use-parallax";

const Index = () => {
  const introParallax = useParallax<HTMLElement>({ speed: 0.315 });
  const featuresParallax = useParallax<HTMLElement>({ speed: 0.21 });
  const howItWorksParallax = useParallax<HTMLElement>({ speed: 0.2625 });
  const testimonialsParallax = useParallax<HTMLElement>({ speed: 0.21 });
  const faqParallax = useParallax<HTMLElement>({ speed: 0.1575 });
  const contactParallax = useParallax<HTMLElement>({ speed: 0.18 });

  return (
    <div className="min-h-screen">
      <ThemeToggle />
      <Hero 
        title="dit is een test"
        description="Train smarter with real-time feedback, AI-driven insights, and precision tracking that adapts to your goals."
        badgeText="AI-Powered Fitness"
        badgeLabel="New"
        ctaButtons={[
          { text: "Join waitlist now", href: "#waitlist", primary: true },
          { text: "Learn more", href: "#intro" }
        ]}
        microDetails={["Real-time tracking", "Smart AI insights", "Adaptive goals"]}
      />
      <div ref={introParallax}>
        <IntroSection />
      </div>
      <div ref={featuresParallax}>
        <FeaturesCarousel />
      </div>
      <div ref={howItWorksParallax}>
        <HowItWorks />
      </div>
      <div ref={testimonialsParallax}>
        <TestimonialsSection />
      </div>
      <div ref={faqParallax}>
        <FAQSection />
      </div>
      <WaitlistSection />
      <div ref={contactParallax}>
        <ContactSection />
      </div>
      <FooterSection />
    </div>
  );
};

export default Index;