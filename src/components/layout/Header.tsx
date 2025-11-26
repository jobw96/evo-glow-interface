import { Link, useLocation } from "react-router-dom";
import { Leaf, Menu, ArrowRight } from "lucide-react";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const Header = () => {
  const location = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { label: "Home", path: "/" },
    { label: "Device", path: "#device" },
    { label: "Story", path: "#story" },
    { label: "Support", path: "#support" },
  ];

  const isActive = (path: string) => {
    if (path === "/") {
      return location.pathname === "/";
    }
    return location.pathname.includes(path);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 flex items-center justify-center px-6 py-4 backdrop-blur-md bg-background/80 dark:bg-background/90 border-b border-border/50">
      <div className="flex items-center justify-between gap-4 w-full max-w-5xl">
        <Link to="/" className="flex items-center gap-3">
          <div className="h-9 w-9 rounded-xl flex items-center justify-center shadow-sm ring-1 bg-neutral-100 dark:bg-neutral-800 text-black dark:text-white ring-border">
            <Leaf className="h-4 w-4" />
          </div>
          <span className="text-lg tracking-tight font-medium text-foreground">
            solace
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

          <Link
            to="#waitlist"
            className="hidden md:inline-flex items-center justify-center rounded-xl bg-amber-500 px-4 py-2.5 text-sm font-medium shadow-sm transition-colors text-white hover:bg-amber-600"
          >
            Preorder
            <ArrowRight className="h-4 w-4 ml-2" />
          </Link>
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

