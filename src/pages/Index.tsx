import Hero from "@/components/ui/neural-network-hero";
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
      <Hero
        title="Innovatieve digitale oplossingen voor jouw merk"
        description="Bij Nieuwblik creëren we unieke webdesigns, krachtige e-commerce platforms en sterke branding die jouw bedrijf laat groeien. Van concept tot lancering."
        badgeText="Webdesign • E-commerce • Branding"
        badgeLabel="Nieuw"
        ctaButtons={[
          { text: "Bekijk portfolio", href: "#portfolio", primary: true },
          { text: "Neem contact op", href: "/contact" }
        ]}
        microDetails={["Moderne technologie", "Creatieve oplossingen", "Resultaatgericht"]}
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