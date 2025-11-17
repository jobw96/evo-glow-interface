import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import NavLink from "./NavLink";

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsMobileMenuOpen(false);
    }
  };

  const navLinks = [
    { label: "About", id: "intro" },
    { label: "Features", id: "features" },
    { label: "Testimonials", id: "testimonials" },
    { label: "FAQ", id: "faq" },
  ];

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled ? "bg-white/95 backdrop-blur-[12px] shadow-sm" : "bg-white/95 backdrop-blur-[12px]"
        }`}
        style={{ height: "90px" }}
      >
        <div className="container mx-auto px-6 md:px-20 h-full flex items-center justify-between">
          <button 
            onClick={() => scrollToSection("hero")}
            className="text-[28px] font-bold text-navy hover:opacity-80 transition-opacity"
          >
            EvoTrack
          </button>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <NavLink
                key={link.id}
                onClick={() => scrollToSection(link.id)}
              >
                {link.label}
              </NavLink>
            ))}
          </div>

          <div className="flex items-center gap-4">
            <Button
              onClick={() => scrollToSection("waitlist")}
              variant="lime"
              className="hidden md:inline-flex px-8 py-3.5 font-bold"
            >
              Join waitlist now
            </Button>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden p-2 text-text-medium hover:text-navy transition-colors"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Tray */}
      <div
        className={`fixed inset-y-0 right-0 z-50 w-full max-w-sm bg-white shadow-2xl transform transition-transform duration-300 md:hidden ${
          isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex flex-col h-full pt-24 px-6">
          <div className="flex flex-col gap-6">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => scrollToSection(link.id)}
                className="text-left text-lg text-text-medium hover:text-navy transition-colors py-2"
              >
                {link.label}
              </button>
            ))}
          </div>
          <div className="mt-8">
            <Button
              onClick={() => scrollToSection("waitlist")}
              variant="lime"
              className="w-full py-3.5 font-bold"
            >
              Join waitlist now
            </Button>
          </div>
        </div>
      </div>

      {/* Overlay */}
      {isMobileMenuOpen && (
        <div
          className="fixed inset-0 bg-black/20 z-40 md:hidden"
          onClick={() => setIsMobileMenuOpen(false)}
        />
      )}
    </>
  );
};

export default Navigation;