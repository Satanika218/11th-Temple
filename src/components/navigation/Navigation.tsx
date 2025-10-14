
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import NavLogo from "./NavLogo";
import NavLinks from "./NavLinks";
import BurgerMenu from "./BurgerMenu";
import { useLocation } from "react-router-dom";

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const isActive = (path: string) => {
    if (path === "/services") {
      return location.pathname === "/services" || location.pathname.startsWith("/services/");
    }
    return location.pathname === path;
  };

  return (
    <nav 
      className="bg-brand-navy/95 backdrop-blur-md border-b border-brand-silver/20 sticky top-0 z-[9999]"
      role="navigation"
      aria-label="Main navigation"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <NavLogo />

          {/* Inline navigation for md+ screens */}
          <NavLinks isActive={isActive} />

          {/* Burger and mobile actions */}
          <div className="flex items-center space-x-2 md:hidden">
            <button
              className="text-brand-silver hover:text-brand-lime flex-shrink-0 focus:outline-none focus:ring-2 focus:ring-brand-lime focus:ring-offset-2 focus:ring-offset-brand-navy p-3 -mr-3 mobile-touch-target rounded-md"
              onClick={() => setIsMenuOpen((o) => !o)}
              aria-label={isMenuOpen ? "Close navigation menu" : "Open navigation menu"}
              aria-expanded={isMenuOpen}
              aria-controls="mobile-menu"
            >
              {isMenuOpen ? <X className="h-7 w-7" /> : <Menu className="h-7 w-7" />}
            </button>
          </div>
        </div>

        {/* Burger Menu for mobile */}
        <BurgerMenu
          isOpen={isMenuOpen}
          closeMenu={() => setIsMenuOpen(false)}
          isActive={isActive}
        />
      </div>
    </nav>
  );
};

export default Navigation;
