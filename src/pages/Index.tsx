import ModernHero from "@/components/ui/modern-hero";
import IntroSection from "@/components/sections/IntroSection";
import FeaturesCarousel from "@/components/sections/FeaturesCarousel";
import HowItWorks from "@/components/sections/HowItWorks";
import TestimonialsSection from "@/components/sections/TestimonialsSection";
import FAQSection from "@/components/sections/FAQSection";
import WaitlistSection from "@/components/sections/WaitlistSection";
import FooterSection from "@/components/sections/FooterSection";
import Header from "@/components/layout/Header";
import { ThemeToggle } from "@/components/ui/theme-toggle";
import { ParallaxSection } from "@/components/ui/scroll-animation";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <ThemeToggle />
      <ModernHero 
        title="Creative Developer"
        subtitle="& Digital Designer"
        description="I craft digital experiences that blend beautiful design with seamless functionality. Specializing in modern web technologies, interactive animations, and user-centered design that makes brands memorable and products delightful to use."
        badgeText="Available for new projects"
        ctaButtons={[
          { text: "Join waitlist now", href: "#waitlist", primary: true },
          { text: "neem contact", href: "/contact" }
        ]}
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
      <FooterSection />
    </div>
  );
};

export default Index;