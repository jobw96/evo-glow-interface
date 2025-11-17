import { useEffect, useRef } from "react";
import { Smartphone, Target, TrendingUp } from "lucide-react";
const HowItWorks = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("revealed");
        }
      });
    }, {
      threshold: 0.1
    });
    if (sectionRef.current) {
      const elements = sectionRef.current.querySelectorAll(".scroll-reveal");
      elements.forEach(el => observer.observe(el));
    }
    return () => observer.disconnect();
  }, []);
  const steps = [{
    icon: Smartphone,
    title: "Connect Your Device",
    description: "Pair your EvoTrack watch with your phone in seconds. Sync is automatic."
  }, {
    icon: Target,
    title: "Set Up Your Goals",
    description: "Tell us what you want to achieve. Our AI will create your personalized plan."
  }, {
    icon: TrendingUp,
    title: "Track & Accelerate Progress",
    description: "Get real-time insights and coaching that adapts to your performance."
  }];
  return <section ref={sectionRef} className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="scroll-reveal text-center mb-16">
          <h2 className="mb-4">How It Works</h2>
          <p className="text-lg text-muted-foreground">Three simple steps to transform your training</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {steps.map((step, index) => <div key={index} className="scroll-reveal glass-card rounded-3xl p-8 text-center">
              <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 bg-[#00ee00]/0">
                <step.icon className="w-8 h-8 text-accent" />
              </div>
              <h3 className="mb-4">{step.title}</h3>
              <p className="text-muted-foreground">{step.description}</p>
            </div>)}
        </div>
      </div>
    </section>;
};
export default HowItWorks;