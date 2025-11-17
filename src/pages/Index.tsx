import Hero from "@/components/ui/neural-network-hero";
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
      <Hero 
        title="Push Your Limits with AI Precision"
        description="Train smarter with real-time feedback, AI-driven insights, and precision tracking that adapts to your goals."
        badgeText="AI-Powered Fitness"
        badgeLabel="New"
        ctaButtons={[
          { text: "Join waitlist now", href: "#waitlist", primary: true },
          { text: "Learn more", href: "#intro" }
        ]}
        microDetails={["Real-time tracking", "Smart AI insights", "Adaptive goals"]}
      />
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