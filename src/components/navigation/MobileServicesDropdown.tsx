
import { Link } from "react-router-dom";
import { ChevronDown } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
} from "@/components/ui/dropdown-menu";

// Service items for submenu - reordered per user requirements
const serviceItems = [
  { name: "Sales & Lead Tools", path: "/services/sales-lead-tools" },
  { name: "GDPR Compliance", path: "/services/gdpr-compliance" },
  { name: "Digital Skills for Workplace", path: "/services/digital-skills-workplace" },
  { name: "Local SEO AI", path: "/services/local-seo" },
  { name: "Process Automation", path: "/services/process-automation" },
  { name: "Data Analytics", path: "/services/data-analytics" },
  { name: "Customer Service Agents", path: "/services/customer-service" },
  { name: "Design & Marketing", path: "/services/design-marketing" },
  { name: "Website Creation", path: "/services/website-creation" },
];

const MobileServicesDropdown = ({
  isActive,
  closeMenu,
}: {
  isActive: (p: string) => boolean,
  closeMenu: () => void
}) => (
  <div className="w-full">
    <Link
      to="/services-overview"
      className={`mobile-nav-item block rounded-lg text-lg font-medium transition-colors duration-200 no-underline mobile-touch-target ${
        isActive("/services-overview") || serviceItems.some((srv) => isActive(srv.path))
          ? "text-brand-lime bg-brand-lime/10 underline"
          : "text-white hover:text-brand-lime hover:bg-white/5 hover:underline"
      }`}
      onClick={closeMenu}
    >
      Services
    </Link>
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <button className="w-full flex justify-between items-center mobile-nav-item rounded-lg text-lg font-medium transition-colors duration-200 outline-none text-brand-silver hover:text-brand-lime hover:bg-white/5 mobile-touch-target">
          <span>View All Services</span>
          <ChevronDown className="h-5 w-5 ml-2 text-brand-lime" />
        </button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-72 ml-2 bg-brand-navy-light border-2 border-brand-silver/40 mt-2 shadow-xl rounded-xl p-2 z-[110] max-h-[70vh] overflow-y-auto">
        {serviceItems.map((service) => (
          <DropdownMenuItem asChild key={service.name}>
            <Link
              to={service.path}
              className={`block px-4 py-3 text-sm md:text-base font-medium transition-colors duration-200 rounded-lg no-underline mobile-touch-target min-h-[44px] flex items-center ${
                isActive(service.path)
                  ? "text-brand-lime underline bg-brand-lime/10"
                  : "text-white hover:text-brand-lime hover:bg-brand-lime/10"
              }`}
              onClick={closeMenu}
            >
              {service.name}
            </Link>
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  </div>
);

export default MobileServicesDropdown;
