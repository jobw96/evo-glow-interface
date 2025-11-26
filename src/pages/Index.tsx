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
import { ParallaxSection } from "@/components/ui/scroll-animation";

const Index = () => {
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
      <ParallaxSection speed={0.315}>
        <IntroSection />
      </ParallaxSection>
      <ParallaxSection speed={0.21}>
        <FeaturesCarousel />
      </ParallaxSection>
      <ParallaxSection speed={0.2625}>
        <HowItWorks />
      </ParallaxSection>
      <ParallaxSection speed={0.21}>
        <TestimonialsSection />
      </ParallaxSection>
      <ParallaxSection speed={0.1575}>
        <FAQSection />
      </ParallaxSection>
      <WaitlistSection />
      <ParallaxSection speed={0.18}>
        <ContactSection />
      </ParallaxSection>
      <FooterSection />
    </div>
  );
};

export default Index;