import { useEffect, useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useToast } from "@/hooks/use-toast";
const WaitlistSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [email, setEmail] = useState("");
  const {
    toast
  } = useToast();
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
      observer.observe(sectionRef.current);
    }
    return () => observer.disconnect();
  }, []);
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      toast({
        title: "You're on the list!",
        description: "We'll notify you when EvoTrack launches."
      });
      setEmail("");
    }
  };
  return <section id="waitlist" ref={sectionRef} className="scroll-reveal py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="glass-card rounded-3xl overflow-hidden">
          <div className="relative h-[400px] md:h-[500px] flex items-center justify-center">
            <div className="absolute inset-0 bg-gradient-to-br from-hero-start to-hero-end" style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=1600&h=900&fit=crop')",
            backgroundSize: "cover",
            backgroundPosition: "center"
          }} />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/50 to-transparent" />
            
            <div className="relative z-10 text-center text-white px-6 max-w-2xl">
              <h2 className="text-white mb-4">Be the First to<br />Experience EvoTrack</h2>
              <p className="text-lg text-white/90 mb-8">
                Sign up today to get early access, exclusive updates, and priority launch offers.
              </p>

              <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                <Input type="email" placeholder="jane@framer.com" value={email} onChange={e => setEmail(e.target.value)} required className="bg-white/10 backdrop-blur-lg border-white/20 text-white placeholder:text-white/60 h-12" />
                <Button type="submit" className="neuro-button whitespace-nowrap h-12 px-8 text-zinc-950 bg-lime-400 hover:bg-lime-300">
                  Join the waitlist
                </Button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default WaitlistSection;