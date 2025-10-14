
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Navigation from "@/components/navigation/Navigation";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";
import ChatbotLauncher from "@/components/ChatbotLauncher";
import { SolutionsTabsContent } from "@/components/solutions/SolutionsTabsContent";
import { businessAreas } from "@/data/businessAreas";

const Solutions = () => {
  return (
    <div className="min-h-screen bg-brand-navy">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-20 pb-16 bg-gradient-to-br from-brand-navy via-brand-navy-light to-brand-navy">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Business <span className="text-brand-lime">Solutions</span>
            </h1>
            <p className="text-xl text-brand-silver max-w-3xl mx-auto mb-8">
              Discover AI automation solutions organized by business function to help you solve specific challenges and drive growth.
            </p>
          </div>
        </div>
      </section>

      {/* Solutions Tabs Section */}
      <section className="py-16 bg-brand-navy-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Tabs defaultValue="customer-growth" className="w-full">
            <TabsList className="grid w-full grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 bg-brand-navy border border-brand-silver/20 mb-8 gap-1 h-auto p-2">
              {businessAreas.map((area) => (
                <TabsTrigger 
                  key={area.id} 
                  value={area.id}
                  className="flex flex-col items-center space-y-2 p-3 text-brand-silver data-[state=active]:text-brand-lime data-[state=active]:bg-brand-lime/10 h-auto min-h-[80px] text-center"
                >
                  <div className="flex-shrink-0">{area.icon}</div>
                  <span className="text-xs font-medium leading-tight">{area.title}</span>
                </TabsTrigger>
              ))}
            </TabsList>

            <SolutionsTabsContent />
          </Tabs>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-brand-navy via-brand-navy-light to-brand-navy">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl text-brand-silver mb-8">
            Choose the solutions that fit your needs or get a custom package designed for your business.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/consultation">
              <Button size="lg" className="bg-brand-lime text-brand-navy hover:bg-brand-lime-dark font-semibold">
                Free 30min Consultation - Let's Talk How We Help
              </Button>
            </Link>
            <Link to="/contact">
              <Button size="lg" className="bg-brand-silver text-black hover:bg-brand-silver-dark font-semibold">
                Contact Us
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
      <ChatbotLauncher />
    </div>
  );
};

export default Solutions;
