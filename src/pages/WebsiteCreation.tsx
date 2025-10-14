import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Globe, Smartphone, Search, Zap, CheckCircle, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import Navigation from "@/components/navigation/Navigation";
import Footer from "@/components/Footer";
import ChatbotLauncher from "@/components/ChatbotLauncher";

export default function WebsiteCreation() {
  return (
    <div className="min-h-screen bg-brand-navy">
      <Navigation />

      {/* Hero Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-12 text-center">
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
          <span className="text-brand-lime">Website Creation</span>
        </h1>
        <p className="text-xl text-brand-silver max-w-2xl mx-auto mb-6">
          Establish a powerful online presence with our AI-driven website creation services.
        </p>
           <Link to="/consultation">
             <Button className="bg-brand-lime text-brand-navy hover:bg-brand-lime-dark font-semibold">
               Get Started
             </Button>
           </Link>
      </div>

      {/* What is Website Creation Section */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h2 className="text-3xl md:text-4xl font-bold text-brand-navy mb-6">
              What is Professional Website Creation?
            </h2>
            <div className="bg-gray-50 rounded-2xl p-8 text-left">
              <p className="text-lg text-gray-700 mb-4">
                Think of a professional website like a 24/7 shopfront that never closes. It's where customers get their first impression of your business and decide whether to trust you with their money.
              </p>
              <p className="text-lg text-gray-700 mb-4">
                Unlike a basic website that just shows information, a professional website is designed to turn visitors into customers. It loads fast, looks great on phones and computers, and guides people exactly where you want them to go.
              </p>
              <p className="text-lg text-gray-700">
                For example: Instead of just saying "We sell shoes", a professional website might show happy customers wearing your shoes, make it easy to find the right size, and have a simple way to buy - all designed to make people want to purchase from you.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Key Features Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
        <h2 className="text-3xl font-bold text-white text-center mb-10">
          Key <span className="text-brand-lime">Features</span>
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Feature Card 1 */}
          <Card className="bg-brand-navy-light border border-brand-silver/20 shadow transition-transform hover:-translate-y-2">
            <CardHeader>
              <CardTitle className="text-xl font-bold text-white flex items-center space-x-2">
                <Globe className="h-5 w-5 text-brand-lime" />
                <span>Responsive Design</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-brand-silver">
                Websites that adapt seamlessly to any device, ensuring a consistent user experience.
              </p>
            </CardContent>
          </Card>

          {/* Feature Card 2 */}
          <Card className="bg-brand-navy-light border border-brand-silver/20 shadow transition-transform hover:-translate-y-2">
            <CardHeader>
              <CardTitle className="text-xl font-bold text-white flex items-center space-x-2">
                <Smartphone className="h-5 w-5 text-brand-lime" />
                <span>Mobile Optimization</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-brand-silver">
                Ensure your website looks and performs flawlessly on smartphones and tablets.
              </p>
            </CardContent>
          </Card>

          {/* Feature Card 3 */}
          <Card className="bg-brand-navy-light border border-brand-silver/20 shadow transition-transform hover:-translate-y-2">
            <CardHeader>
              <CardTitle className="text-xl font-bold text-white flex items-center space-x-2">
                <Search className="h-5 w-5 text-brand-lime" />
                <span>SEO Friendly</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-brand-silver">
                Optimized for search engines to improve visibility and attract more organic traffic.
              </p>
            </CardContent>
          </Card>

          {/* Feature Card 4 */}
          <Card className="bg-brand-navy-light border border-brand-silver/20 shadow transition-transform hover:-translate-y-2">
            <CardHeader>
              <CardTitle className="text-xl font-bold text-white flex items-center space-x-2">
                <Zap className="h-5 w-5 text-brand-lime" />
                <span>Fast Loading</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-brand-silver">
                Quick loading times to reduce bounce rates and improve user satisfaction.
              </p>
            </CardContent>
          </Card>

          {/* Feature Card 5 */}
          <Card className="bg-brand-navy-light border border-brand-silver/20 shadow transition-transform hover:-translate-y-2">
            <CardHeader>
              <CardTitle className="text-xl font-bold text-white flex items-center space-x-2">
                <CheckCircle className="h-5 w-5 text-brand-lime" />
                <span>Customizable</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-brand-silver">
                Tailor your website to reflect your brand identity and meet your specific needs.
              </p>
            </CardContent>
          </Card>

          {/* Feature Card 6 */}
          <Card className="bg-brand-navy-light border border-brand-silver/20 shadow transition-transform hover:-translate-y-2">
            <CardHeader>
              <CardTitle className="text-xl font-bold text-white flex items-center space-x-2">
                <ArrowRight className="h-5 w-5 text-brand-lime" />
                <span>Easy Navigation</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-brand-silver">
                Intuitive navigation to guide visitors through your website effortlessly.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* CTA */}
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 pb-16 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
          Ready to Elevate Your Online Presence?
        </h2>
        <p className="text-xl text-brand-silver mb-6">
          Contact us today for a free consultation and discover how our website creation services can transform your business.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link to="/consultation">
            <Button className="bg-brand-lime text-brand-navy hover:bg-brand-lime-dark font-semibold">
              Free 30min Consultation - Let's Talk How We Help
            </Button>
          </Link>
          <Link to="/contact">
            <Button variant="outline" className="border-brand-lime text-brand-lime hover:bg-brand-lime hover:text-brand-navy">
              Contact Us
            </Button>
          </Link>
        </div>
      </div>

      <Footer />
      <ChatbotLauncher />
    </div>
  );
}
