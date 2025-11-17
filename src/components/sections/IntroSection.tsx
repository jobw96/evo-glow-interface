import { useEffect, useRef } from "react";
import { Sparkles, Heart, Target } from "lucide-react";
import athlete1 from "@/assets/athlete-1.jpg";
import athlete2 from "@/assets/athlete-2.jpg";
import watchCloseup from "@/assets/watch-closeup.jpg";
const IntroSection = () => {
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
  return <section id="about" ref={sectionRef} className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="scroll-reveal text-center mb-16">
          <span className="inline-flex items-center gap-2 text-sm text-muted-foreground mb-4">
            <span className="w-2 h-2 rounded-full bg-accent text-green-500" />
            Introduction
          </span>
          <h2 className="mb-6">Smarter. Faster. More Personal.</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Everything you need from a smartwatch, powered by AI that learns and adapts to you.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          <div className="scroll-reveal md:col-span-2 relative rounded-3xl overflow-hidden group">
            <img src={athlete1} alt="AI-driven insights" className="w-full h-full object-cover min-h-[400px] transition-transform duration-700 group-hover:scale-105" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
            <div className="absolute bottom-8 left-8 text-white">
              <Sparkles className="w-8 h-8 mb-4" />
              <h3 className="text-white mb-2">AI-driven insights tailored<br />to your training style</h3>
            </div>
          </div>

          <div className="scroll-reveal flex flex-col gap-6">
            <div className="glass-card rounded-3xl p-8 flex flex-col items-center justify-center text-center h-full">
              <Heart className="w-12 h-12 mb-4" />
              <h3 className="mb-2">Advanced health &<br />heart rate tracking</h3>
            </div>

            <div className="neuro-button rounded-3xl p-8 flex flex-col items-center justify-center text-center h-full bg-lime-400">
              <div className="text-5xl font-light mb-2">25%</div>
              <p className="text-accent-foreground font-normal">faster progress with<br />smart AI guidance</p>
            </div>
          </div>

          <div className="scroll-reveal md:col-span-1 relative rounded-3xl overflow-hidden group">
            <img src={athlete2} alt="Personalized workouts" className="w-full h-full object-cover min-h-[300px] transition-transform duration-700 group-hover:scale-105" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
            <div className="absolute bottom-8 left-8 text-white">
              <Target className="w-8 h-8 mb-4" />
              <h3 className="text-white">Personalized workout<br />recommendations</h3>
            </div>
          </div>

          <div className="scroll-reveal md:col-span-2 relative rounded-3xl overflow-hidden group">
            <img src={watchCloseup} alt="Connected ecosystem" className="w-full h-full object-cover min-h-[300px] transition-transform duration-700 group-hover:scale-105" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
            <div className="absolute bottom-8 left-8 text-white">
              <div className="w-8 h-8 mb-4 flex items-center justify-center">
                <div className="w-6 h-6 border-2 border-white rounded-full" />
              </div>
              <h3 className="text-white">Connected Ecosystem</h3>
              <p className="text-white/80 text-sm mt-2">Syncs seamlessly with your favorite<br />fitness apps</p>
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default IntroSection;