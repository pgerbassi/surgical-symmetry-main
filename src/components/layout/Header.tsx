
import { cn } from "@/lib/utils";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "../ui/Button";

const navItems = [
  { name: "Início", path: "/" },
  { name: "Sobre Nós", path: "/about" },
  { name: "Produtos", path: "/products" },
  { name: "Serviços", path: "/services" },
  { name: "Certificações", path: "/certifications" },
  { name: "Contato", path: "/contact" },
];

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu when changing routes
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location]);

  return (
    <header
      className={cn(
        "fixed top-0 z-50 w-full transition-all duration-300",
        isScrolled
          ? "bg-white/95 backdrop-blur-md shadow-lg"
          : "bg-black/30 backdrop-blur-md"
      )}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-20 items-center justify-between">
          {/* Logo */}
          <Link 
            to="/" 
            className="flex items-center"
            aria-label="Ir para página inicial"
          >
            <span className={cn(
              "text-2xl font-bold transition-colors",
              isScrolled ? "text-surgical-dark" : "text-white drop-shadow-md"
            )}>
              MedVix
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex md:items-center md:space-x-6">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className={cn(
                  "text-sm font-medium transition-colors duration-200 link-hover px-2 py-1 rounded",
                  location.pathname === item.path
                    ? isScrolled 
                      ? "text-surgical-accent font-bold after:w-full" 
                      : "text-white bg-surgical-accent/70 font-bold"
                    : isScrolled
                      ? "text-surgical-dark/90 hover:text-surgical-accent hover:bg-gray-100"
                      : "text-white hover:text-white hover:bg-white/20"
                )}
              >
                {item.name}
              </Link>
            ))}
            <Button 
              variant="cta" 
              size="sm"
              className="bg-gradient-to-r from-surgical-accent to-surgical-accent/80 text-white shadow-md hover:shadow-lg hover:scale-105 transition-all border border-white/20"
            >
              Solicitar Orçamento
            </Button>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="flex md:hidden"
            aria-label={isMobileMenuOpen ? "Fechar menu" : "Abrir menu"}
          >
            {isMobileMenuOpen ? (
              <X className={cn("h-6 w-6", isScrolled ? "text-surgical-dark" : "text-white")} />
            ) : (
              <Menu className={cn("h-6 w-6", isScrolled ? "text-surgical-dark" : "text-white")} />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden"
          >
            <div className="glass-card m-4 overflow-hidden rounded-lg bg-white/95 shadow-xl border border-surgical-accent/20">
              <nav className="flex flex-col space-y-4 p-6">
                {navItems.map((item, i) => (
                  <motion.div
                    key={item.name}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.1 }}
                  >
                    <Link
                      to={item.path}
                      className={cn(
                        "block py-2 text-lg font-medium transition-colors duration-200",
                        location.pathname === item.path
                          ? "text-surgical-accent font-bold"
                          : "text-surgical-dark/80 hover:text-surgical-dark hover:bg-gray-100 rounded px-2"
                      )}
                    >
                      {item.name}
                    </Link>
                  </motion.div>
                ))}
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: navItems.length * 0.1 }}
                  className="pt-2"
                >
                  <Button 
                    variant="cta" 
                    className="w-full bg-gradient-to-r from-surgical-accent to-surgical-accent/80 text-white shadow-md hover:shadow-lg"
                  >
                    Solicitar Orçamento
                  </Button>
                </motion.div>
              </nav>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
