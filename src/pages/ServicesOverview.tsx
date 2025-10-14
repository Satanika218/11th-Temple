
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowRight, Zap, Globe, Users, TrendingUp, Bot, Shield, Clock, DollarSign, Target, Lightbulb, CheckCircle, Palette, GraduationCap, Search } from "lucide-react";
import { Link } from "react-router-dom";
import Navigation from "@/components/navigation/Navigation";
import Footer from "@/components/Footer";
import ChatbotLauncher from "@/components/ChatbotLauncher";

const businessChallenges = [
  {
    problem: "Losing customers to competitors online",
    icon: <Globe className="h-8 w-8 text-red-400" />,
    solution: "Professional Website & SEO",
    solutionIcon: <TrendingUp className="h-8 w-8 text-brand-lime" />,
    description: "Get found online with a professional website and local SEO that puts you ahead of competitors.",
    benefits: ["Rank higher in Google searches", "Convert more visitors to customers", "Professional online presence"],
    link: "/services/website-creation",
    auditLink: "/seo-audit"
  },
  {
    problem: "Spending too much time on repetitive tasks",
    icon: <Clock className="h-8 w-8 text-red-400" />,
    solution: "Process Automation",
    solutionIcon: <Bot className="h-8 w-8 text-brand-lime" />,
    description: "Automate repetitive tasks and focus on growing your business instead of managing it.",
    benefits: ["Save 40+ hours per week", "Reduce human errors by 95%", "24/7 automated operations"],
    link: "/services/process-automation"
  },
  {
    problem: "Missing sales opportunities",
    icon: <DollarSign className="h-8 w-8 text-red-400" />,
    solution: "Sales & Lead Generation",
    solutionIcon: <Target className="h-8 w-8 text-brand-lime" />,
    description: "Never miss a lead again with AI-powered sales automation and lead tracking.",
    benefits: ["Capture every lead automatically", "Follow up instantly", "Track your sales pipeline"],
    link: "/services/sales-lead-tools"
  },
  {
    problem: "Customers calling at all hours",
    icon: <Users className="h-8 w-8 text-red-400" />,
    solution: "24/7 Customer Service",
    solutionIcon: <Shield className="h-8 w-8 text-brand-lime" />,
    description: "Provide instant customer support around the clock with intelligent chatbots.",
    benefits: ["Answer questions instantly", "Reduce support workload", "Improve customer satisfaction"],
    link: "/services/customer-service"
  },
  {
    problem: "Don't know what's working in your business",
    icon: <Lightbulb className="h-8 w-8 text-red-400" />,
    solution: "Data Analytics & Insights",
    solutionIcon: <TrendingUp className="h-8 w-8 text-brand-lime" />,
    description: "Make data-driven decisions with clear insights into your business performance.",
    benefits: ["Understand your customers better", "Identify profit opportunities", "Predict future trends"],
    link: "/services/data-analytics",
    auditLink: "/analytics-audit"
  }
];

export default function ServicesOverview() {
  return (
    <div className="min-h-screen bg-brand-navy">
      <Navigation />

      {/* Hero Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-12 text-center">
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
          Stop Struggling With <span className="text-brand-lime">Business Problems</span>
        </h1>
        <p className="text-xl text-brand-silver max-w-3xl mx-auto mb-8">
          Every independent business faces the same challenges. We solve them with AI automation 
          so you can focus on what you do best - serving your customers.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link to="/consultation">
            <Button size="lg" className="bg-brand-lime text-brand-navy hover:bg-brand-lime-dark font-semibold">
              Free 30min Consultation - No Commitment - Learn How We Help
            </Button>
          </Link>
          <Link to="/solutions">
            <Button size="lg" variant="outline" className="border-brand-lime text-brand-lime hover:bg-brand-lime hover:text-brand-navy font-semibold">
              View All Solutions
            </Button>
          </Link>
        </div>
      </div>

      {/* Problems & Solutions Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Common Business Problems We Solve
          </h2>
          <p className="text-xl text-brand-silver max-w-3xl mx-auto">
            Recognise any of these challenges? We have the solution.
          </p>
        </div>

        <div className="space-y-12">
          {businessChallenges.map((challenge, index) => (
            <Card key={index} className="bg-brand-navy-light border border-brand-silver/20 overflow-hidden">
              <CardContent className="p-0">
                <div className="grid lg:grid-cols-2 gap-0">
                  {/* Problem Side */}
                  <div className="p-8 bg-red-50/5 border-r border-brand-silver/20">
                    <div className="flex items-center mb-4">
                      {challenge.icon}
                      <h3 className="text-xl font-bold text-white ml-4">The Problem</h3>
                    </div>
                    <p className="text-lg text-red-300 font-semibold mb-4">
                      "{challenge.problem}"
                    </p>
                    <p className="text-brand-silver">
                      This is costing you customers, time, and money every day.
                    </p>
                  </div>

                  {/* Solution Side */}
                  <div className="p-8">
                    <div className="flex items-center mb-4">
                      {challenge.solutionIcon}
                      <h3 className="text-xl font-bold text-brand-lime ml-4">{challenge.solution}</h3>
                    </div>
                    <p className="text-brand-silver mb-6">
                      {challenge.description}
                    </p>
                    <div className="space-y-3 mb-6">
                      {challenge.benefits.map((benefit, benefitIndex) => (
                        <div key={benefitIndex} className="flex items-center">
                          <CheckCircle className="h-5 w-5 text-brand-lime mr-3 flex-shrink-0" />
                          <span className="text-brand-silver">{benefit}</span>
                        </div>
                      ))}
                    </div>
                    <div className="flex flex-col sm:flex-row gap-3">
                      <Link to={challenge.link} className="flex-1">
                        <Button className="bg-brand-lime text-brand-navy hover:bg-brand-lime-dark font-semibold w-full">
                          Learn More
                          <ArrowRight className="ml-2 h-4 w-4" />
                        </Button>
                      </Link>
                      {challenge.auditLink && (
                        <Link to={challenge.auditLink} className="flex-1">
                          <Button variant="outline" className="border-brand-lime text-brand-lime hover:bg-brand-lime hover:text-brand-navy font-semibold w-full">
                            Free Audit
                          </Button>
                        </Link>
                      )}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Quick Access to All Services */}
      <div className="bg-brand-navy-light py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">
              Explore All <span className="text-brand-lime">Our Services</span>
            </h2>
            <p className="text-xl text-brand-silver">
              Comprehensive AI solutions for every aspect of your business
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Link to="/services/sales-lead-tools">
              <Card className="bg-brand-navy border-brand-silver/20 hover:border-brand-lime/50 transition-colors h-full">
                <CardHeader>
                  <Target className="h-10 w-10 text-brand-lime mb-2" />
                  <CardTitle className="text-white">Sales & Lead Tools</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-brand-silver">
                    Automate your sales pipeline and capture more leads
                  </CardDescription>
                </CardContent>
              </Card>
            </Link>
            
            <Link to="/services/gdpr-compliance">
              <Card className="bg-brand-navy border-brand-silver/20 hover:border-brand-lime/50 transition-colors h-full">
                <CardHeader>
                  <Shield className="h-10 w-10 text-brand-lime mb-2" />
                  <CardTitle className="text-white">GDPR Compliance</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-brand-silver">
                    Ensure your business meets all data protection requirements
                  </CardDescription>
                </CardContent>
              </Card>
            </Link>
            
            <Link to="/services/digital-skills-workplace">
              <Card className="bg-brand-navy border-brand-silver/20 hover:border-brand-lime/50 transition-colors h-full">
                <CardHeader>
                  <GraduationCap className="h-10 w-10 text-brand-lime mb-2" />
                  <CardTitle className="text-white">Digital Skills for Workplace</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-brand-silver">
                    Upskill your team with essential digital workplace skills
                  </CardDescription>
                </CardContent>
              </Card>
            </Link>
            
            <Link to="/services/local-seo">
              <Card className="bg-brand-navy border-brand-silver/20 hover:border-brand-lime/50 transition-colors h-full">
                <CardHeader>
                  <Search className="h-10 w-10 text-brand-lime mb-2" />
                  <CardTitle className="text-white">Local SEO AI</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-brand-silver">
                    AI-powered local search optimization for better visibility
                  </CardDescription>
                </CardContent>
              </Card>
            </Link>
            
            <Link to="/services/process-automation">
              <Card className="bg-brand-navy border-brand-silver/20 hover:border-brand-lime/50 transition-colors h-full">
                <CardHeader>
                  <Bot className="h-10 w-10 text-brand-lime mb-2" />
                  <CardTitle className="text-white">Process Automation</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-brand-silver">
                    Automate repetitive tasks and streamline operations
                  </CardDescription>
                </CardContent>
              </Card>
            </Link>
            
            <Link to="/services/data-analytics">
              <Card className="bg-brand-navy border-brand-silver/20 hover:border-brand-lime/50 transition-colors h-full">
                <CardHeader>
                  <TrendingUp className="h-10 w-10 text-brand-lime mb-2" />
                  <CardTitle className="text-white">Data Analytics</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-brand-silver">
                    Turn your data into actionable business insights
                  </CardDescription>
                </CardContent>
              </Card>
            </Link>
            
            <Link to="/services/customer-service">
              <Card className="bg-brand-navy border-brand-silver/20 hover:border-brand-lime/50 transition-colors h-full">
                <CardHeader>
                  <Users className="h-10 w-10 text-brand-lime mb-2" />
                  <CardTitle className="text-white">Customer Service Agents</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-brand-silver">
                    24/7 intelligent customer support solutions
                  </CardDescription>
                </CardContent>
              </Card>
            </Link>
            
            <Link to="/services/design-marketing">
              <Card className="bg-brand-navy border-brand-silver/20 hover:border-brand-lime/50 transition-colors h-full">
                <CardHeader>
                  <Palette className="h-10 w-10 text-brand-lime mb-2" />
                  <CardTitle className="text-white">Design & Marketing</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-brand-silver">
                    Professional design and marketing that drives results
                  </CardDescription>
                </CardContent>
              </Card>
            </Link>
            
            <Link to="/services/website-creation">
              <Card className="bg-brand-navy border-brand-silver/20 hover:border-brand-lime/50 transition-colors h-full">
                <CardHeader>
                  <Globe className="h-10 w-10 text-brand-lime mb-2" />
                  <CardTitle className="text-white">Website Creation</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-brand-silver">
                    Professional websites that convert visitors into customers
                  </CardDescription>
                </CardContent>
              </Card>
            </Link>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-16 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
          Ready to Solve Your Business Problems?
        </h2>
        <p className="text-xl text-brand-silver mb-8">
          Let's discuss your specific challenges and show you exactly how our AI solutions can help.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link to="/consultation">
            <Button size="lg" className="bg-brand-lime text-brand-navy hover:bg-brand-lime-dark font-semibold">
              Free 30min Consultation - No Commitment - Learn How We Help
            </Button>
          </Link>
          <Link to="/seo-audit">
            <Button size="lg" variant="outline" className="border-brand-lime text-brand-lime hover:bg-brand-lime hover:text-brand-navy font-semibold">
              Get Free SEO Audit
            </Button>
          </Link>
        </div>
      </div>
      
      <Footer />
      <ChatbotLauncher />
    </div>
  );
}
