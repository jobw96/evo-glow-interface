import { Instagram, Music2, Linkedin } from "lucide-react";
const FooterSection = () => {
  return <footer className="py-16 px-6 border-t border-border/50">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          <div>
            <div className="flex items-center gap-2 text-xl font-light tracking-tight mb-4">
              <span className="text-2xl">⚡</span>
              EvoTrack
            </div>
            <p className="text-sm text-muted-foreground mb-6">
              Track every move, analyze your performance, and get real-time coaching, all from your wrist.
            </p>
            <div className="flex gap-4">
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full border border-border flex items-center justify-center hover:border-accent transition-colors">
                <Instagram size={18} />
              </a>
              <a href="https://tiktok.com" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full border border-border flex items-center justify-center hover:border-accent transition-colors">
                <Music2 size={18} />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full border border-border flex items-center justify-center hover:border-accent transition-colors">
                <Linkedin size={18} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-normal mb-4">Navigation</h4>
            <nav className="flex flex-col gap-3">
              <a href="#about" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                About
              </a>
              <a href="#features" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                Features
              </a>
              <a href="#testimonials" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                Testimonials
              </a>
              <a href="#faq" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                FAQ
              </a>
              <a href="#waitlist" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                Waitlist
              </a>
            </nav>
          </div>

          <div>
            <h4 className="font-normal mb-4">Legal</h4>
            <nav className="flex flex-col gap-3">
              <a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                Terms of Service
              </a>
              <a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                Cookie Policy
              </a>
            </nav>
          </div>
        </div>

        <div className="pt-8 border-t border-border/50 flex flex-col sm:flex-row justify-between items-center gap-4 text-sm text-muted-foreground">
          
          <p>© 2025 Nieuwblik. All rights reserved.</p>
        </div>
      </div>
    </footer>;
};
export default FooterSection;