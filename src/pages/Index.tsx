import { HeroSection } from "@/components/ui/hero-section-9";
import IntroSection from "@/components/sections/IntroSection";
import FeaturesCarousel from "@/components/sections/FeaturesCarousel";
import HowItWorks from "@/components/sections/HowItWorks";
import TestimonialsSection from "@/components/sections/TestimonialsSection";
import FAQSection from "@/components/sections/FAQSection";
import WaitlistSection from "@/components/sections/WaitlistSection";
import FooterSection from "@/components/sections/FooterSection";

const Index = () => {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <IntroSection />
      <FeaturesCarousel />
      <HowItWorks />
      <TestimonialsSection />
      <FAQSection />
      <WaitlistSection />
      <FooterSection />
    </div>
  );
};

export default Index;