import { ChevronDown } from "lucide-react";
import { Link } from "react-router-dom";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
} from "@/components/ui/dropdown-menu";

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

const ServicesDropdownButton = () => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <button className="bg-brand-purple hover:bg-brand-purple/90 text-white rounded-lg p-4 w-16 h-16 flex items-center justify-center transition-all duration-200 hover:scale-105 shadow-lg">
          <ChevronDown className="h-6 w-6" />
        </button>
      </DropdownMenuTrigger>
      <DropdownMenuContent 
        className="w-64 bg-brand-navy border border-brand-silver/30 mt-2 shadow-xl rounded-xl p-1 z-50"
        side="bottom"
        align="center"
      >
        <div className="p-2">
          <h3 className="text-brand-lime font-semibold text-lg mb-2 px-2">Our Services</h3>
          {serviceItems.map((service) => (
            <DropdownMenuItem asChild key={service.name}>
              <Link
                to={service.path}
                className="block px-4 py-2 text-base transition-colors duration-200 rounded-md no-underline text-brand-silver hover:text-brand-lime hover:bg-brand-lime/10"
              >
                {service.name}
              </Link>
            </DropdownMenuItem>
          ))}
          <div className="border-t border-brand-silver/30 mt-2 pt-2">
            <DropdownMenuItem asChild>
              <Link
                to="/services-overview"
                className="block px-4 py-2 text-base transition-colors duration-200 rounded-md no-underline text-brand-lime hover:bg-brand-lime/10 font-semibold"
              >
                View All Services →
              </Link>
            </DropdownMenuItem>
          </div>
        </div>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default ServicesDropdownButton;