import { useState, useEffect } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Shield } from "lucide-react";
import { navLinks } from "../../data/siteData";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [location.pathname]);

  const navClass = scrolled
    ? "bg-black/90 backdrop-blur-md border-b border-gold/20 py-3"
    : "bg-transparent py-5";

  return (
    <header className={`fixed top-1 left-0 right-0 z-50 transition-all duration-500 ${navClass}`}>
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link to="/" className="flex items-center gap-3 group">
          <Shield className="h-8 w-8 text-gold transition-transform group-hover:scale-110" />
          <div>
            <span className="font-heading text-2xl text-white tracking-wider">CTC</span>
            <p className="hidden sm:block text-[10px] text-gold/80 uppercase tracking-widest -mt-1">
              Commando Training Center
            </p>
          </div>
        </Link>

        <ul className="hidden lg:flex items-center gap-1">
          {navLinks.map((link) => (
            <li key={link.path}>
              <NavLink
                to={link.path}
                end={link.path === "/"}
                className={({ isActive }) =>
                  `px-4 py-2 text-sm font-medium uppercase tracking-wider transition-colors rounded-sm ${
                    isActive
                      ? "text-gold bg-gold/10"
                      : "text-white/80 hover:text-gold hover:bg-white/5"
                  }`
                }
              >
                {link.name}
              </NavLink>
            </li>
          ))}
        </ul>

        <Link
          to="/contact"
          className="hidden lg:inline-flex items-center px-5 py-2.5 bg-gold text-black text-sm font-semibold uppercase tracking-wider rounded-sm hover:bg-gold-dark transition-colors"
        >
          Join CTC
        </Link>

        <button
          type="button"
          className="lg:hidden p-2 text-gold"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </nav>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-black/95 border-t border-gold/20 overflow-hidden"
          >
            <ul className="px-4 py-4 space-y-1">
              {navLinks.map((link) => (
                <li key={link.path}>
                  <NavLink
                    to={link.path}
                    end={link.path === "/"}
                    className={({ isActive }) =>
                      `block px-4 py-3 text-sm font-medium uppercase tracking-wider rounded-sm ${
                        isActive ? "text-gold bg-gold/10" : "text-white/80"
                      }`
                    }
                  >
                    {link.name}
                  </NavLink>
                </li>
              ))}
              <li className="pt-2">
                <Link
                  to="/contact"
                  className="block text-center px-4 py-3 bg-gold text-black font-semibold uppercase tracking-wider rounded-sm"
                >
                  Join CTC
                </Link>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
