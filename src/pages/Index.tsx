import ModernHero from "@/components/ui/modern-hero";
import IntroSection from "@/components/sections/IntroSection";
import FeaturesCarousel from "@/components/sections/FeaturesCarousel";
import IntegrationsSection from "@/components/sections/IntegrationsSection";
import HowItWorks from "@/components/sections/HowItWorks";
import TestimonialsSection from "@/components/sections/TestimonialsSection";
import FAQSection from "@/components/sections/FAQSection";
import WaitlistSection from "@/components/sections/WaitlistSection";
import FooterSection from "@/components/sections/FooterSection";
import Header from "@/components/layout/Header";
import BackToTop from "@/components/ui/back-to-top";
import { AppleScrollSection, ZoomScrollSection } from "@/components/ui/apple-scroll-section";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <BackToTop />
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
      <AppleScrollSection className="py-12">
        <IntroSection />
      </AppleScrollSection>
      <ZoomScrollSection zoomStart={0.9} zoomEnd={1.05} className="min-h-screen py-12">
        <FeaturesCarousel />
      </ZoomScrollSection>
      <AppleScrollSection className="py-12">
        <IntegrationsSection />
      </AppleScrollSection>
      <AppleScrollSection className="py-12">
        <HowItWorks />
      </AppleScrollSection>
      <ZoomScrollSection zoomStart={0.85} zoomEnd={1} className="min-h-screen py-12">
        <TestimonialsSection />
      </ZoomScrollSection>
      <AppleScrollSection className="py-12">
        <FAQSection />
      </AppleScrollSection>
      <AppleScrollSection>
        <WaitlistSection />
      </AppleScrollSection>
      <FooterSection />
    </div>
  );
};

export default Index;