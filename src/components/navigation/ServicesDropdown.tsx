
import { Link, useLocation } from "react-router-dom";
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

const ServicesDropdown = ({
  isActive,
}: {
  isActive: (p: string) => boolean
}) => (
  <DropdownMenu>
    <DropdownMenuTrigger asChild>
      <div className="flex items-center group">
        <Link
          to="/services-overview"
          className={`px-4 py-2 flex items-center text-sm xl:text-base rounded-md transition-colors duration-200 ${
            isActive("/services-overview") || serviceItems.some((srv) => isActive(srv.path))
              ? "text-brand-lime underline"
              : "text-white hover:text-brand-lime hover:underline"
          }`}
        >
          Services
        </Link>
        <button 
          className="p-1 hover:bg-brand-navy-light rounded focus:outline-none focus:ring-2 focus:ring-brand-lime focus:ring-offset-2 focus:ring-offset-brand-navy"
          aria-label="Open services menu"
          aria-haspopup="menu"
        >
          <ChevronDown className="h-4 w-4 text-white group-hover:text-brand-lime" />
        </button>
      </div>
    </DropdownMenuTrigger>
    <DropdownMenuContent 
      className="w-64 bg-brand-navy-light border-2 border-brand-silver/40 mt-2 shadow-xl rounded-xl p-2 z-[10001] max-h-[70vh] overflow-y-auto"
      role="menu"
      aria-label="Services menu"
    >
      {serviceItems.map((service) => (
        <DropdownMenuItem asChild key={service.name}>
          <Link
            to={service.path}
            className={`block px-4 py-3 text-sm md:text-base transition-colors duration-200 rounded-lg no-underline min-h-[44px] flex items-center ${
              isActive(service.path)
                ? "text-brand-lime underline bg-brand-lime/10"
                : "text-white hover:text-brand-lime hover:bg-brand-lime/10"
            }`}
          >
            {service.name}
          </Link>
        </DropdownMenuItem>
      ))}
    </DropdownMenuContent>
  </DropdownMenu>
);

export default ServicesDropdown;
