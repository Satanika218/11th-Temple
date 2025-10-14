
import { Link } from "react-router-dom";

const NavLogo = () => (
  <div className="flex items-center space-x-2 flex-shrink-0 min-w-fit">
    <Link to="/" className="flex items-center space-x-2">
      <img 
        src="/lovable-uploads/87c7e72a-88ad-4a5e-bd58-1bff5a3dee6b.png" 
        alt="11th Temple Solutions - AI Automation for Local Businesses in Wales and Border Counties" 
        className="h-12 w-12 sm:h-16 sm:w-16 md:h-20 md:w-20 drop-shadow-lg flex-shrink-0"
        width="80"
        height="80"
      />
      <div className="hidden sm:block">
        <div className="text-sm md:text-lg xl:text-xl font-bold text-white whitespace-nowrap">11th Temple</div>
        <div className="text-xs md:text-sm xl:text-base text-brand-lime -mt-1 whitespace-nowrap">Solutions</div>
      </div>
    </Link>
  </div>
);

export default NavLogo;
