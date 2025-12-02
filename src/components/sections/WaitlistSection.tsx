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
        title: "Aanvraag verstuurd!",
        description: "We nemen binnen 24 uur contact met je op."
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
            <span className="inline-flex items-center gap-1 rounded-full bg-lime/10 px-3 py-1.5 text-xs text-lime ring-1 ring-lime/20 uppercase tracking-tight mb-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-3.5 w-3.5"
              >
                <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
                <circle cx="9" cy="7" r="4" />
                <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
                <path d="M16 3.13a4 4 0 0 1 0 7.75" />
              </svg>
              Start je project
            </span>
            <h2 className="text-white mb-4">Klaar om te beginnen?<br />Neem contact op</h2>
            <p className="text-lg text-white/90 mb-8">
              Laat je gegevens achter en we nemen binnen 24 uur contact met je op voor een vrijblijvend gesprek.
            </p>

            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <Input type="email" placeholder="jouw@email.nl" value={email} onChange={e => setEmail(e.target.value)} required className="bg-white/10 backdrop-blur-lg border-white/20 text-white placeholder:text-white/60 h-12" />
              <Button type="submit" className="whitespace-nowrap h-12 px-8 bg-lime text-navy hover:bg-lime/90">
                Verstuur aanvraag
              </Button>
            </form>
          </div>
        </div>
      </div>
    </div>
  </section>;
};
export default WaitlistSection;