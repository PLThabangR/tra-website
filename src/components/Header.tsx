import { Link, useLocation } from "react-router-dom";
import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { to: "/", label: "Home" },
    { to: "/services", label: "Services" },
    { to: "/work", label: "Projects" },
    { to: "/approach", label: "Approach" },
    { to: "/about", label: "About" },
    { to: "/contact", label: "Contact" },
  ];

  return (
    <header className="sticky top-0 z-50 bg-bg-main border-b border-border-subtle">
      <div className="container-custom flex items-center justify-between py-4">
        <a
          href="https://trsoftwaredev.vercel.app/"
          className="flex items-center gap-3 group"
        >
          <img
            src="/trlogo.png"
            alt="TR Software Development Consulting"
            className="h-8 w-auto md:hidden"
          />

          <img
            src="/trbgblue.png"
            alt="TR Software Development Consulting"
            className="h-16 w-auto hidden md:block"
          />
        </a>
        <nav className="hidden lg:flex items-center gap-6">
          {navLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              className={`text-sm font-medium transition-colors ${
                location.pathname === link.to
                  ? "text-gold"
                  : "text-text-secondary hover:text-text-primary"
              }`}
            >
              {link.label}
            </Link>
          ))}
          <Link to="/contact" className="btn-primary py-2 px-4 text-sm ml-4">
            Discuss Your Project
          </Link>
        </nav>

        <button
          className="lg:hidden text-text-primary p-2"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {menuOpen && (
        <nav className="lg:hidden bg-bg-main border-t border-border-subtle">
          <div className="container-custom py-4 flex flex-col gap-2">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                onClick={() => setMenuOpen(false)}
                className={`px-4 py-3 text-sm font-medium rounded-md ${
                  location.pathname === link.to
                    ? "text-gold bg-gold/5"
                    : "text-text-secondary hover:text-text-primary"
                }`}
              >
                {link.label}
              </Link>
            ))}
            <Link
              to="/contact"
              onClick={() => setMenuOpen(false)}
              className="btn-primary text-sm mt-2"
            >
              Discuss Your Project
            </Link>
          </div>
        </nav>
      )}
    </header>
  );
}
