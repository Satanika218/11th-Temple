
import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import MobileServicesDropdown from "./MobileServicesDropdown";

const navItems = [
  { name: "Free Tools", path: "/free-tools" },
  { name: "About", path: "/about" },
  { name: "Blog", path: "/blog" },
  { name: "Testimonials", path: "/case-studies" },
  { name: "Contact", path: "/contact" },
];

const BurgerMenu = ({
  isOpen,
  closeMenu,
  isActive,
}: {
  isOpen: boolean;
  closeMenu: () => void;
  isActive: (p: string) => boolean;
}) => {
  if (!isOpen) return null;
  return (
    <div 
      className="border-t border-brand-silver/20 bg-brand-navy-light md:hidden z-[10000] fixed top-20 left-0 right-0 shadow-lg"
      id="mobile-menu"
      role="menu"
      aria-label="Mobile navigation menu"
    >
      <div className="px-4 pt-4 pb-6 space-y-2 max-h-[calc(100vh-5rem)] overflow-y-auto ios-safe-area">
          <Link
            key="Home-mobile"
            to="/"
            className={`mobile-nav-item block rounded-lg text-lg font-medium transition-colors duration-200 no-underline mobile-touch-target focus:outline-none focus:ring-2 focus:ring-brand-lime focus:ring-offset-2 focus:ring-offset-brand-navy ${
              isActive("/")
                ? "text-brand-lime bg-brand-lime/10 underline"
                : "text-white hover:text-brand-lime hover:bg-white/5 hover:underline"
            }`}
            onClick={closeMenu}
            role="menuitem"
          >
          Home
        </Link>
        <MobileServicesDropdown isActive={isActive} closeMenu={closeMenu} />
        {navItems.map((item) => (
            <Link
              key={item.name + "-mobile"}
              to={item.path}
              className={`mobile-nav-item block rounded-lg text-lg font-medium transition-colors duration-200 no-underline mobile-touch-target focus:outline-none focus:ring-2 focus:ring-brand-lime focus:ring-offset-2 focus:ring-offset-brand-navy ${
                isActive(item.path)
                  ? "text-brand-lime bg-brand-lime/10 underline"
                  : "text-white hover:text-brand-lime hover:bg-white/5 hover:underline"
              }`}
              onClick={closeMenu}
              role="menuitem"
            >
            {item.name}
          </Link>
        ))}
        <div className="pt-4">
          <Link to="/consultation" onClick={closeMenu}>
            <Button className="mobile-cta w-full bg-brand-lime text-brand-navy hover:bg-brand-lime-dark font-semibold text-base sm:text-lg py-4 min-h-[48px]">
              Get Started
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default BurgerMenu;
