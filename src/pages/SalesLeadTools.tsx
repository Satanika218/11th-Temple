import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Zap, Target, TrendingUp, Users, CheckCircle, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import Navigation from "@/components/navigation/Navigation";
import Footer from "@/components/Footer";
import ChatbotLauncher from "@/components/ChatbotLauncher";

export default function SalesLeadTools() {
  return (
    <div className="min-h-screen bg-brand-navy">
      <Navigation />

      {/* Hero Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-12 text-center">
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
          <span className="text-brand-lime">Sales & Lead Generation</span> Tools
        </h1>
        <p className="text-xl text-brand-silver max-w-2xl mx-auto mb-6">
          Automate your sales pipeline and generate more qualified leads with our AI-powered tools.
        </p>
        <Link to="/consultation">
          <Button className="bg-brand-lime text-brand-navy hover:bg-brand-lime-dark font-semibold">
            Get Started Today
          </Button>
        </Link>
      </div>

      {/* What are Sales & Lead Tools Section */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h2 className="text-3xl md:text-4xl font-bold text-brand-navy mb-6">
              What are Sales & Lead Generation Tools?
            </h2>
            <div className="bg-gray-50 rounded-2xl p-6 lg:p-8 text-left">
              <div className="grid md:grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">
                <div>
                  <p className="text-lg text-gray-700 mb-4">
                    Imagine having a tireless salesperson who works 24/7, never forgets to follow up with customers, and knows exactly when someone is ready to buy - that's what sales and lead tools do for your business.
                  </p>
                  <p className="text-lg text-gray-700">
                    These tools automatically find potential customers (leads), keep track of everyone who's interested in your business, and help you stay in touch with them until they're ready to make a purchase.
                  </p>
                </div>
                <div>
                  <p className="text-lg text-gray-700">
                    For example: When someone visits your website, the tool can automatically send them helpful information, remind you to call them, and even tell you the best time to contact them based on their behavior.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Key Features Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h2 className="text-3xl font-bold text-white text-center mb-8">
          Key <span className="text-brand-lime">Features</span>
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Feature Card 1 */}
          <Card className="bg-brand-navy-light border border-brand-silver/20 shadow">
            <CardHeader>
              <CardTitle className="text-xl font-bold text-white flex items-center space-x-2">
                <Zap className="h-5 w-5 text-brand-lime" />
                <span>AI-Powered Lead Generation</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-brand-silver">
                Identify and qualify leads using advanced AI algorithms.
              </p>
            </CardContent>
          </Card>

          {/* Feature Card 2 */}
          <Card className="bg-brand-navy-light border border-brand-silver/20 shadow">
            <CardHeader>
              <CardTitle className="text-xl font-bold text-white flex items-center space-x-2">
                <Target className="h-5 w-5 text-brand-lime" />
                <span>Automated Follow-Up Sequences</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-brand-silver">
                Engage leads with personalized, automated follow-up sequences.
              </p>
            </CardContent>
          </Card>

          {/* Feature Card 3 */}
          <Card className="bg-brand-navy-light border border-brand-silver/20 shadow">
            <CardHeader>
              <CardTitle className="text-xl font-bold text-white flex items-center space-x-2">
                <TrendingUp className="h-5 w-5 text-brand-lime" />
                <span>Sales Pipeline Optimization</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-brand-silver">
                Optimize your sales pipeline for maximum efficiency and conversion rates.
              </p>
            </CardContent>
          </Card>

          {/* Feature Card 4 */}
          <Card className="bg-brand-navy-light border border-brand-silver/20 shadow">
            <CardHeader>
              <CardTitle className="text-xl font-bold text-white flex items-center space-x-2">
                <Users className="h-5 w-5 text-brand-lime" />
                <span>Customer Relationship Management</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-brand-silver">
                Build stronger customer relationships with AI-powered insights.
              </p>
            </CardContent>
          </Card>

          {/* Feature Card 5 */}
          <Card className="bg-brand-navy-light border border-brand-silver/20 shadow">
            <CardHeader>
              <CardTitle className="text-xl font-bold text-white flex items-center space-x-2">
                <CheckCircle className="h-5 w-5 text-brand-lime" />
                <span>Lead Qualification</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-brand-silver">
                Automatically qualify leads based on their behavior and engagement.
              </p>
            </CardContent>
          </Card>

          {/* Feature Card 6 */}
          <Card className="bg-brand-navy-light border border-brand-silver/20 shadow">
            <CardHeader>
              <CardTitle className="text-xl font-bold text-white flex items-center space-x-2">
                <ArrowRight className="h-5 w-5 text-brand-lime" />
                <span>Seamless Integration</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-brand-silver">
                Integrate with your existing CRM and marketing automation tools.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* CTA Section */}
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 pb-16 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
          Transform Your Sales Process Today
        </h2>
        <p className="text-xl text-brand-silver mb-6">
          Contact us for a free consultation and see how our AI-powered sales and lead generation tools can help you grow your business.
        </p>
        <Link to="/consultation">
          <Button className="bg-brand-lime text-brand-navy hover:bg-brand-lime-dark font-semibold">
            Free 30min Consultation - Let's Talk How We Help
          </Button>
        </Link>
      </div>

      <Footer />
      <ChatbotLauncher />
    </div>
  );
}
