import { Link, useLocation } from "react-router-dom";
import { Menu } from "lucide-react";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import nieuwblikLogo from "@/assets/nieuwblik-logo.svg";

const Header = () => {
  const location = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { label: "Home", path: "/" },
    { label: "Webdesign", path: "#webdesign" },
    { label: "E-commerce", path: "#ecommerce" },
    { label: "Branding", path: "#branding" },
  ];

  const isActive = (path: string) => {
    if (path === "/") {
      return location.pathname === "/";
    }
    return location.pathname.includes(path);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-[9999] flex items-center justify-center px-6 py-4 backdrop-blur-md bg-background/95 dark:bg-background/95 border-b border-border/50 shadow-sm">
      <div className="flex items-center justify-between gap-4 w-full max-w-5xl">
        <Link to="/" className="flex items-center gap-3">
          <img src={nieuwblikLogo} alt="Nieuwblik" className="h-9 w-9" />
          <span className="text-lg tracking-tight font-medium text-foreground">
            Nieuwblik
          </span>
        </Link>

        <nav className="hidden md:flex items-center gap-6 text-sm text-muted-foreground">
          {navItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={`transition-colors hover:text-foreground ${
                isActive(item.path) ? "text-foreground font-medium" : ""
              }`}
            >
              {item.label}
            </Link>
          ))}
          <Link
            to="/contact"
            className={`transition-colors hover:text-foreground ${
              location.pathname === "/contact"
                ? "text-foreground font-medium"
                : ""
            }`}
          >
            Contact
          </Link>
        </nav>

        <div className="flex items-center gap-3">
          <button
            className="md:hidden inline-flex items-center justify-center h-10 w-10 rounded-lg ring-1 ring-border bg-muted text-foreground"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            <Menu className="h-5 w-5" />
          </button>

          <motion.div
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
            className="hidden md:block"
          >
            <Link
              to="/contact"
              className="inline-flex items-center justify-center px-6 py-3 rounded-xl text-sm font-medium transition-all duration-300 bg-white text-black hover:bg-gray-100 shadow-lg shadow-white/10"
            >
              Contact
            </Link>
          </motion.div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="absolute top-full left-0 right-0 bg-background/95 dark:bg-neutral-900/95 backdrop-blur-md border-b border-border/50 md:hidden"
          >
            <nav className="flex flex-col gap-4 p-6">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`text-sm transition-colors ${
                    isActive(item.path)
                      ? "text-foreground font-medium"
                      : "text-muted-foreground"
                  }`}
                >
                  {item.label}
                </Link>
              ))}
              <Link
                to="/contact"
                onClick={() => setMobileMenuOpen(false)}
                className={`text-sm transition-colors ${
                  location.pathname === "/contact"
                    ? "text-foreground font-medium"
                    : "text-muted-foreground"
                }`}
              >
                Contact
              </Link>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;

