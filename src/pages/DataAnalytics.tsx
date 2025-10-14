import { TrendingUp, Users, BarChart3, PieChart, LineChart, Database } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import Navigation from "@/components/navigation/Navigation";
import Footer from "@/components/Footer";
import ChatbotLauncher from "@/components/ChatbotLauncher";
import { Link } from "react-router-dom";

const DataAnalytics = () => {
  const benefits = [
    {
      icon: <TrendingUp className="h-8 w-8 text-brand-lime" />,
      title: "Increase Revenue",
      description: "Identify high-performing products and customer segments to boost sales by 25-40%"
    },
    {
      icon: <Users className="h-8 w-8 text-brand-lime" />,
      title: "Understand Customers",
      description: "Gain deep insights into customer behavior and preferences"
    },
    {
      icon: <BarChart3 className="h-8 w-8 text-brand-lime" />,
      title: "Optimize Operations",
      description: "Streamline processes and reduce costs through data-driven decisions"
    },
    {
      icon: <PieChart className="h-8 w-8 text-brand-lime" />,
      title: "Predict Trends",
      description: "Stay ahead of market changes with predictive analytics"
    }
  ];

  const features = [
    {
      icon: <Database className="h-6 w-6 text-brand-lime" />,
      title: "Data Integration",
      description: "Connect all your data sources into one unified dashboard"
    },
    {
      icon: <LineChart className="h-6 w-6 text-brand-lime" />,
      title: "Real-time Reporting",
      description: "Get instant insights with live data visualization"
    },
    {
      icon: <BarChart3 className="h-6 w-6 text-brand-lime" />,
      title: "Custom Dashboards",
      description: "Create personalized dashboards tailored to your specific needs"
    },
    {
      icon: <TrendingUp className="h-6 w-6 text-brand-lime" />,
      title: "Predictive Analytics",
      description: "Forecast future trends and make proactive decisions"
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
              Data <span className="text-brand-lime">Analytics</span> Solutions
            </h1>
            <p className="text-xl text-brand-silver max-w-3xl mx-auto mb-8">
              Transform your raw data into actionable insights that drive business growth and competitive advantage.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/analytics-audit">
                <Button size="lg" className="bg-brand-lime text-brand-navy hover:bg-brand-lime-dark font-semibold">
                  Get Free Analytics Audit
                </Button>
              </Link>
              <Link to="/consultation">
                <Button size="lg" variant="outline" className="border-brand-lime text-brand-lime hover:bg-brand-lime hover:text-brand-navy font-semibold">
                  Schedule Consultation
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* What is Data Analytics Section */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h2 className="text-3xl md:text-4xl font-bold text-brand-navy mb-6">
              What is Data Analytics?
            </h2>
            <div className="bg-gray-50 rounded-2xl p-6 lg:p-8 text-left">
              <div className="grid md:grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">
                <div>
                  <p className="text-lg text-gray-700 mb-4">
                    Think of data analytics like having a detective for your business. Instead of guessing what's working, you get clear answers from the information you already have.
                  </p>
                  <p className="text-lg text-gray-700">
                    Every day, your business creates lots of information - website visits, sales, customer emails, social media clicks. Data analytics looks at all this information and tells you the story behind it.
                  </p>
                </div>
                <div>
                  <p className="text-lg text-gray-700">
                    For example: Instead of wondering "Why did sales drop last month?", data analytics can show you exactly what happened - maybe fewer people visited your website, or customers from a specific area stopped buying. Then you know exactly what to fix.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 bg-brand-navy-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Why Data Analytics Matters
            </h2>
            <p className="text-xl text-brand-silver max-w-3xl mx-auto">
              Make informed decisions backed by data, not guesswork
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
              Unlock the power of your data with our comprehensive analytics platform
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="bg-brand-navy-light border-brand-silver/20 h-full">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    {feature.icon}
                    <h3 className="text-xl font-semibold text-white ml-3">{feature.title}</h3>
                  </div>
                  <p className="text-brand-silver">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <Footer />
      <ChatbotLauncher />
    </div>
  );
};

export default DataAnalytics;
