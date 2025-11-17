import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-image.jpg";

const HeroSection = () => {
  const scrollToWaitlist = () => {
    const element = document.getElementById("waitlist");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${heroImage})` }}
      />
      <div
        className="absolute inset-0"
        style={{
          background: "linear-gradient(180deg, rgba(10,37,64,0.8) 0%, rgba(10,37,64,0.4) 100%)",
        }}
      />
      
      <div className="relative z-10 container mx-auto px-6 md:px-20 text-left md:max-w-[50%] md:ml-20 animate-fade-in-up">
        <h1 className="text-white mb-6">
          Push Your Limits<br />
          with AI Precision
        </h1>
        <p className="text-xl md:text-2xl text-[#E2E8F0] mb-12 max-w-2xl leading-relaxed">
          Train smarter with real-time feedback, AI-driven insights, and precision tracking that adapts to your goals.
        </p>
        <Button
          onClick={scrollToWaitlist}
          variant="lime"
          size="lg"
          className="text-lg font-bold px-12 py-7 text-navy"
        >
          Join waitlist now
        </Button>
      </div>
    </section>
  );
};

export default HeroSection;