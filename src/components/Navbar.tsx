import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import DarkModeToggle from "./DarkModeToggle";

const navLinks = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/cv", label: "CV" },
  { to: "/education", label: "Education" },
  { to: "/skills", label: "Skills" },
  { to: "/projects", label: "Projects" },
  { to: "/certificates", label: "Certificates" },
  { to: "/achievements", label: "Achievements" },
  { to: "/internships", label: "Experience" },
  { to: "/contact", label: "Contact" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const location = useLocation();

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur-xl bg-navy-dark/90 border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          
          {/* Logo */}
          <Link to="/" className="font-serif text-xl font-bold text-cream tracking-wide">
            KS<span className="text-navy">.</span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-2">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className={`px-3 py-2 text-sm font-medium rounded-md transition-all duration-300 ${
                  location.pathname === link.to
                    ? "text-cream bg-white/10"
                    : "text-cream/70 hover:text-cream hover:bg-white/5"
                }`}
              >
                {link.label}
              </Link>
            ))}

            {/* Dark Mode Toggle */}
            <DarkModeToggle />
          </div>

          {/* Mobile Toggle */}
          <button
            onClick={() => setOpen(!open)}
            className="lg:hidden text-cream p-2"
          >
            {open ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="lg:hidden backdrop-blur-xl bg-navy-dark/95 border-t border-white/10">
          <div className="px-4 py-4 space-y-2">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                onClick={() => setOpen(false)}
                className={`block px-4 py-2.5 rounded-lg text-sm font-medium ${
                  location.pathname === link.to
                    ? "text-cream bg-white/10"
                    : "text-cream/70 hover:text-cream hover:bg-white/5"
                }`}
              >
                {link.label}
              </Link>
            ))}

            {/* Dark Mode Toggle (mobile) */}
            <div className="pt-2">
              <DarkModeToggle />
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;