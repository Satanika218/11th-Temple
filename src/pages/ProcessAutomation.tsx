import { Zap, Clock, DollarSign, CheckCircle, Bot, ArrowRight, Shield } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import Navigation from "@/components/navigation/Navigation";
import Footer from "@/components/Footer";
import ChatbotLauncher from "@/components/ChatbotLauncher";
import { Link } from "react-router-dom";

const ProcessAutomation = () => {
  const benefits = [
    {
      icon: <Clock className="h-8 w-8 text-brand-lime" />,
      title: "Save 40+ Hours/Week",
      description: "Eliminate repetitive manual tasks and focus on strategic work"
    },
    {
      icon: <DollarSign className="h-8 w-8 text-brand-lime" />,
      title: "Reduce Costs by 60%",
      description: "Lower operational expenses through intelligent automation"
    },
    {
      icon: <Zap className="h-8 w-8 text-brand-lime" />,
      title: "Increase Efficiency",
      description: "Process tasks 10x faster with 99.9% accuracy"
    },
    {
      icon: <Shield className="h-8 w-8 text-brand-lime" />,
      title: "Reduce Errors",
      description: "Eliminate human error and ensure consistent quality"
    }
  ];

  const features = [
    {
      icon: <Bot className="h-6 w-6 text-brand-lime" />,
      title: "Workflow Design",
      description: "Custom-built automation workflows tailored to your business needs"
    },
    {
      icon: <CheckCircle className="h-6 w-6 text-brand-lime" />,
      title: "Task Management",
      description: "Automated task assignment, tracking, and completion"
    },
    {
      icon: <Zap className="h-6 w-6 text-brand-lime" />,
      title: "Data Integration",
      description: "Seamlessly connect your systems and data sources"
    },
    {
      icon: <Clock className="h-6 w-6 text-brand-lime" />,
      title: "Real-time Monitoring",
      description: "Track performance and identify bottlenecks in real-time"
    }
  ];

  return (
    <div className="min-h-screen bg-brand-navy">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-20 pb-16 bg-gradient-to-br from-brand-navy via-brand-navy-light to-brand-navy">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Process <span className="text-brand-lime">Automation</span>
            </h1>
            <p className="text-xl text-brand-silver max-w-3xl mx-auto mb-8">
              Transform your business operations with intelligent automation that works 24/7, reduces costs, and eliminates human error.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/consultation">
                <Button size="lg" className="bg-brand-lime text-brand-navy hover:bg-brand-lime-dark font-semibold">
                  Get Free Automation Assessment
                </Button>
              </Link>
              <Link to="/contact">
                <Button size="lg" variant="outline" className="border-brand-lime text-brand-lime hover:bg-brand-lime hover:text-brand-navy font-semibold">
                  Contact Us
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* What is Process Automation Section */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h2 className="text-3xl md:text-4xl font-bold text-brand-navy mb-6">
              What is Process Automation?
            </h2>
            <div className="bg-gray-50 rounded-2xl p-8 text-left">
              <p className="text-lg text-gray-700 mb-4">
                Think of process automation like having a tireless assistant that never takes breaks, never makes mistakes, and works exactly the same way every time.
              </p>
              <p className="text-lg text-gray-700 mb-4">
                Instead of you or your team doing repetitive tasks like sending emails, organizing files, or entering data, software takes over these jobs. It's like setting up a series of "if this, then that" rules that your computer follows automatically.
              </p>
              <p className="text-lg text-gray-700">
                For example: When a customer fills out a form on your website, automation can instantly send them a welcome email, add their details to your customer database, and notify your sales team - all without anyone lifting a finger.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 bg-brand-navy-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Why Choose Process Automation?
            </h2>
            <p className="text-xl text-brand-silver max-w-3xl mx-auto">
              Streamline your operations and focus on what matters most
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <Card key={index} className="bg-brand-navy border-brand-silver/20 h-full">
                <CardContent className="p-6 text-center">
                  <div className="flex justify-center mb-4">{benefit.icon}</div>
                  <h3 className="text-xl font-semibold text-white mb-3">{benefit.title}</h3>
                  <p className="text-brand-silver">{benefit.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-brand-navy">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Key Features
            </h2>
            <p className="text-xl text-brand-silver max-w-3xl mx-auto">
              Unlock the power of automation with these essential features
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="bg-brand-navy-light border-brand-silver/20 h-full">
                <CardContent className="p-6">
                  <div className="flex items-center space-x-4 mb-4">
                    {feature.icon}
                    <h3 className="text-xl font-semibold text-white">{feature.title}</h3>
                  </div>
                  <p className="text-brand-silver">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-16 bg-gradient-to-r from-brand-navy via-brand-navy-light to-brand-navy">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Automate Your Business?
          </h2>
          <p className="text-xl text-brand-silver mb-8">
            Take the first step towards efficiency and growth.
          </p>
          <Link to="/consultation">
            <Button size="lg" className="bg-brand-lime text-brand-navy hover:bg-brand-lime-dark font-semibold">
              Free 30min Consultation - Let's Talk How We Help
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
        </div>
      </section>

      <Footer />
      <ChatbotLauncher />
    </div>
  );
};

export default ProcessAutomation;
