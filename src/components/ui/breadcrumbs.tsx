import { Link, useLocation } from "react-router-dom";
import { ChevronRight, Home } from "lucide-react";
import { motion } from "framer-motion";

interface BreadcrumbItem {
  label: string;
  path: string;
}

export function Breadcrumbs() {
  const location = useLocation();
  const pathnames = location.pathname.split("/").filter((x) => x);

  const breadcrumbs: BreadcrumbItem[] = [
    { label: "Home", path: "/" },
    ...pathnames.map((name, index) => {
      const path = `/${pathnames.slice(0, index + 1).join("/")}`;
      const label = name.charAt(0).toUpperCase() + name.slice(1);
      return { label, path };
    }),
  ];

  // Don't show breadcrumbs on home page
  if (location.pathname === "/") {
    return null;
  }

  const containerVariants = {
    hidden: { opacity: 0, y: -10 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.4,
        ease: [0.22, 1, 0.36, 1],
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -10 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.3,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  return (
    <motion.nav
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="fixed top-20 left-0 right-0 z-40 bg-background/80 backdrop-blur-md border-b border-border/50 px-6 py-3"
    >
      <div className="max-w-7xl mx-auto">
        <ol className="flex items-center gap-2 text-sm">
          {breadcrumbs.map((crumb, index) => {
            const isLast = index === breadcrumbs.length - 1;
            const isFirst = index === 0;

            return (
              <motion.li
                key={crumb.path}
                variants={itemVariants}
                className="flex items-center gap-2"
              >
                {index > 0 && (
                  <ChevronRight className="w-4 h-4 text-muted-foreground" />
                )}
                {isLast ? (
                  <span className="text-foreground font-medium">
                    {crumb.label}
                  </span>
                ) : (
                  <Link
                    to={crumb.path}
                    className="flex items-center gap-1.5 text-muted-foreground hover:text-foreground transition-colors group"
                  >
                    {isFirst && <Home className="w-4 h-4" />}
                    <span className="group-hover:underline">{crumb.label}</span>
                  </Link>
                )}
              </motion.li>
            );
          })}
        </ol>
      </div>
    </motion.nav>
  );
}


