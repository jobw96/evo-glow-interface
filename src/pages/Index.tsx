import Navigation from "@/components/Navigation";
import HeroSection from "@/components/sections/HeroSection";
import ProductShowcase from "@/components/sections/ProductShowcase";
import FeaturedIn from "@/components/sections/FeaturedIn";
import IntroSection from "@/components/sections/IntroSection";
import FeaturesCarousel from "@/components/sections/FeaturesCarousel";
import HowItWorks from "@/components/sections/HowItWorks";
import BenefitsSection from "@/components/sections/BenefitsSection";
import TestimonialsSection from "@/components/sections/TestimonialsSection";
import FAQSection from "@/components/sections/FAQSection";
import WaitlistSection from "@/components/sections/WaitlistSection";
import FooterSection from "@/components/sections/FooterSection";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <HeroSection />
      <ProductShowcase />
      <FeaturedIn />
      <IntroSection />
      <FeaturesCarousel />
      <HowItWorks />
      <BenefitsSection />
      <TestimonialsSection />
      <FAQSection />
      <WaitlistSection />
      <FooterSection />
    </div>
  );
};

export default Index;
