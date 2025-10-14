
import { Link } from "react-router-dom";
import { Mail, Phone, MapPin, Linkedin } from "lucide-react";
import { AccessibilityFooterLink } from "./AccessibilityQuestion";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-brand-navy border-t border-brand-silver/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-4 mb-6">
              <img 
                src="/lovable-uploads/87c7e72a-88ad-4a5e-bd58-1bff5a3dee6b.png" 
                alt="11th Temple Solutions" 
                className="h-16 w-16 drop-shadow-lg"
              />
              <div>
                <span className="text-lg font-bold text-white">11th Temple Solutions</span>
                <p className="text-brand-lime text-sm">Powering Human Potential</p>
              </div>
            </div>
            <p className="text-brand-silver mb-6 max-w-md">
              We specialise in delivering AI automation solutions tailored for local businesses, 
              combining cutting-edge technology with deep local market knowledge.
            </p>
            <div className="space-y-2">
              <div className="flex items-center space-x-3 text-brand-silver">
                <Mail className="h-4 w-4 text-brand-lime" />
                <a 
                  href="mailto:Hello@11thtemplesolutions.com" 
                  className="hover:text-brand-lime transition-colors"
                >
                  Hello@11thtemplesolutions.com
                </a>
              </div>
              <div className="flex items-center space-x-3 text-brand-silver">
                <Phone className="h-4 w-4 text-brand-lime" />
                <a 
                  href="https://wa.me/447312190728" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-brand-lime transition-colors"
                >
                  +44 7312 190 728 (WhatsApp)
                </a>
              </div>
              <div className="flex items-center space-x-3 text-brand-silver">
                <MapPin className="h-4 w-4 text-brand-lime" />
                <span>Newtown, Powys</span>
              </div>
              <div className="flex items-center space-x-3 text-brand-silver">
                <span className="text-brand-lime font-medium">Local Knowledge - Nationwide Coverage</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="/about" className="text-brand-silver hover:text-brand-lime transition-colours">About Us</Link></li>
              <li><Link to="/services" className="text-brand-silver hover:text-brand-lime transition-colours">Services</Link></li>
              <li><Link to="/case-studies" className="text-brand-silver hover:text-brand-lime transition-colours">Testimonials</Link></li>
              <li><Link to="/contact" className="text-brand-silver hover:text-brand-lime transition-colours">Contact</Link></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-white font-semibold mb-4">Services</h3>
            <ul className="space-y-2">
              <li><Link to="/seo-audit" className="text-brand-silver hover:text-brand-lime transition-colours">Free SEO Audit</Link></li>
              <li><Link to="/analytics-audit" className="text-brand-silver hover:text-brand-lime transition-colours">Free Analytics Audit</Link></li>
              <li><Link to="/free-tools" className="text-brand-silver hover:text-brand-lime transition-colours">Free Tools</Link></li>
              <li><Link to="/services/process-automation" className="text-brand-silver hover:text-brand-lime transition-colours">Process Automation</Link></li>
              <li><Link to="/services/local-seo" className="text-brand-silver hover:text-brand-lime transition-colours">Local SEO AI</Link></li>
              <li><Link to="/services/customer-service" className="text-brand-silver hover:text-brand-lime transition-colours">Customer Service Agents</Link></li>
              <li><Link to="/services/data-analytics" className="text-brand-silver hover:text-brand-lime transition-colours">Data Analytics</Link></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-brand-silver/20 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <div className="flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-4">
            <p className="text-brand-silver text-sm">
              © 2025 11th Temple Solutions. All rights reserved.
            </p>
            <AccessibilityFooterLink />
          </div>
          {/* Only Linkedin remains */}
          <div className="flex space-x-4 mt-4 md:mt-0">
            <a href="#" className="text-brand-silver hover:text-brand-lime transition-colours" aria-label="Linkedin">
              <Linkedin className="h-5 w-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
