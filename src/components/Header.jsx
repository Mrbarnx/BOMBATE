import { useCallback, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";

import bombateLogo from "../assets/bombate-logo.jpg";

const navClasses =
  "text-sm font-medium text-slate-600 hover:text-slate-900 transition";

const primaryLinks = [
  { id: "home", label: "Home" },
  { id: "services", label: "Services" },
  { id: "academy", label: "Academy" }
];

const secondaryLinks = [
  { id: "about", label: "About" },
  { id: "contact", label: "Contact" }
];

const mobileDropdownLinks = [...primaryLinks, ...secondaryLinks];

function Header() {
  // Track whether the mobile-only menu is expanded
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const handleSectionClick = useCallback(
    (sectionId) => {
      const scrollToSection = () => {
        const target = document.getElementById(sectionId);
        if (target) {
          target.scrollIntoView({ behavior: "smooth" });
        }
      };

      if (location.pathname !== "/") {
        navigate("/");
        // Wait for navigation to home before attempting to scroll
        setTimeout(scrollToSection, 100);
      } else {
        scrollToSection();
      }

      // Close the mobile dropdown after navigating
      setMobileMenuOpen(false);
    },
    [location.pathname, navigate]
  );

  return (
    <header className="border-b border-slate-200 bg-white">
      <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-3 py-4 sm:px-4 md:px-6">
        {/* Logo and brand */}
        <Link to="/" className="flex items-center gap-4 text-2xl font-bold tracking-tight text-slate-900">
          <img
            src={bombateLogo}
            alt="Bombate logo"
            className="h-12 w-12 object-contain mix-blend-multiply md:h-16 md:w-16"
            style={{ backgroundColor: "transparent" }}
          />
          <span>BOMBATE</span>
        </Link>

        {/* Primary navigation links (always visible) */}
        <nav className="ml-10 flex flex-1 items-center justify-end gap-5 md:ml-20">
          {primaryLinks.map((section) => (
            <button
              key={section.id}
              type="button"
              className={`${navClasses} hidden bg-transparent md:inline-flex`}
              onClick={() => handleSectionClick(section.id)}
            >
              {section.label}
            </button>
          ))}

          {/* Secondary links visible on desktop */}
          {secondaryLinks.map((section) => (
            <button
              key={section.id}
              type="button"
              className={`${navClasses} hidden bg-transparent md:inline-flex`}
              onClick={() => handleSectionClick(section.id)}
            >
              {section.label}
            </button>
          ))}

          {/* Hamburger toggle for mobile-only links */}
          <button
            type="button"
            aria-label="Toggle navigation menu"
            aria-expanded={mobileMenuOpen}
            onClick={() => setMobileMenuOpen((open) => !open)}
            className="inline-flex items-center gap-2 rounded-full border border-slate-300 px-3 py-2 text-sm font-semibold uppercase tracking-wide text-slate-600 transition hover:border-emerald-400 hover:text-emerald-500 md:hidden"
          >
            <svg
              className="h-5 w-5"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.8}
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
            <span>MENU</span>
          </button>
        </nav>
      </div>

      {/* Mobile dropdown containing secondary links */}
      <div
        className={`md:hidden ${
          mobileMenuOpen ? "max-h-80 opacity-100" : "max-h-0 opacity-0"
        } overflow-hidden border-t border-slate-200 bg-white transition-all duration-300`}
      >
        <div className="space-y-1 px-4 py-3">
          {mobileDropdownLinks.map((section) => (
            <button
              key={section.id}
              type="button"
              className="w-full rounded-2xl border border-slate-200 px-4 py-3 text-left text-sm font-medium text-slate-600 transition hover:border-emerald-400 hover:text-emerald-500"
              onClick={() => handleSectionClick(section.id)}
            >
              {section.label}
            </button>
          ))}
        </div>
      </div>
    </header>
  );
}

export default Header;
