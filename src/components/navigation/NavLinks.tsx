
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import ServicesDropdown from "./ServicesDropdown";

// Main navigation items (excluding Home and Services)
const navItems = [
  { name: "Free Tools", path: "/free-tools" },
  { name: "About", path: "/about" },
  { name: "Blog", path: "/blog" },
  { name: "Testimonials", path: "/case-studies" },
  { name: "Contact", path: "/contact" },
];

const NavLinks = ({
  isActive,
}: {
  isActive: (p: string) => boolean
}) => (
  <div className="hidden md:flex flex-1 items-center justify-center space-x-2 font-semibold relative z-[10000]">
    <Link
      key="Home"
      to="/"
      className={`px-4 py-2 text-sm xl:text-base rounded-md transition-colors duration-200 ${
        isActive("/")
          ? "text-brand-lime underline"
          : "text-white hover:text-brand-lime hover:underline"
      }`}
    >
      Home
    </Link>
    <ServicesDropdown isActive={isActive} />
    {navItems.map((item) => (
        <Link
          key={item.name}
          to={item.path}
          className={`px-4 py-2 text-sm xl:text-base rounded-md transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-brand-lime focus:ring-offset-2 focus:ring-offset-brand-navy ${
            isActive(item.path)
              ? "text-brand-lime underline"
              : "text-white hover:text-brand-lime hover:underline"
          }`}
        >
        {item.name}
      </Link>
    ))}
    <Link to="/consultation" className="ml-2">
      <Button className="bg-brand-lime text-brand-navy hover:bg-brand-lime-dark font-semibold text-sm xl:text-base whitespace-nowrap">
        Get Started
      </Button>
    </Link>
  </div>
);

export default NavLinks;
