import React from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Shield, AlertTriangle, TrendingUp, Users, CheckCircle, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import Navigation from "@/components/navigation/Navigation";
import Footer from "@/components/Footer";
import ChatbotLauncher from "@/components/ChatbotLauncher";

const GDPRCompliance = () => {
  return (
    <div className="min-h-screen bg-brand-navy">
      <Navigation />
      {/* Hero Section */}
      <section className="relative py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="flex justify-center mb-6">
              <Shield className="h-16 w-16 text-brand-lime" />
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              GDPR Compliance Services
            </h1>
            <p className="text-xl md:text-2xl text-purple-100 mb-8">
              Protecting Powys businesses from costly data breaches and regulatory penalties
            </p>
            <Link to="/consultation">
              <Button className="bg-brand-lime text-purple-900 hover:bg-yellow-300 font-bold py-4 px-8 text-lg">
                Free 30min Consultation - Let's Talk How We Help
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="py-16 bg-white/5">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold text-white text-center mb-12">
              The GDPR Crisis in Powys & Wales
            </h2>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
              <Card className="bg-gradient-to-br from-red-600 to-red-800 border-red-500 text-white">
                <CardHeader className="text-center">
                  <AlertTriangle className="h-12 w-12 text-red-200 mx-auto mb-2" />
                  <CardTitle className="text-3xl font-bold">52%</CardTitle>
                  <CardDescription className="text-red-100">
                    UK businesses still not fully GDPR compliant
                  </CardDescription>
                </CardHeader>
              </Card>

              <Card className="bg-gradient-to-br from-orange-600 to-orange-800 border-orange-500 text-white">
                <CardHeader className="text-center">
                  <TrendingUp className="h-12 w-12 text-orange-200 mx-auto mb-2" />
                  <CardTitle className="text-3xl font-bold">£17.5M</CardTitle>
                  <CardDescription className="text-orange-100">
                    Maximum GDPR fine or 4% of annual turnover
                  </CardDescription>
                </CardHeader>
              </Card>

              <Card className="bg-gradient-to-br from-yellow-600 to-yellow-800 border-yellow-500 text-white">
                <CardHeader className="text-center">
                  <Users className="h-12 w-12 text-yellow-200 mx-auto mb-2" />
                  <CardTitle className="text-3xl font-bold">73%</CardTitle>
                  <CardDescription className="text-yellow-100">
                    UK SMEs experienced data breaches in 2023
                  </CardDescription>
                </CardHeader>
              </Card>

              <Card className="bg-gradient-to-br from-purple-600 to-purple-800 border-purple-500 text-white">
                <CardHeader className="text-center">
                  <Shield className="h-12 w-12 text-purple-200 mx-auto mb-2" />
                  <CardTitle className="text-3xl font-bold">£3.5M</CardTitle>
                  <CardDescription className="text-purple-100">
                    Average cost of a data breach for UK businesses
                  </CardDescription>
                </CardHeader>
              </Card>
            </div>

            <div className="bg-gradient-to-r from-red-900/30 to-orange-900/30 rounded-lg p-8 border border-red-500/30">
              <h3 className="text-2xl font-bold text-white mb-4">The Powys Challenge</h3>
              <p className="text-purple-100 mb-4">
                Rural businesses in Powys face unique GDPR compliance challenges. With limited access to specialist 
                legal advice and increasing digitalization demands, many local businesses operate without proper 
                data protection frameworks.
              </p>
              <p className="text-purple-100">
                Tourism businesses handling international visitor data, agricultural enterprises managing supplier 
                information, and local retailers processing customer details all face severe penalties for 
                non-compliance. Recent ICO enforcement shows no business is too small to escape scrutiny.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How We Help Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold text-white text-center mb-12">
              How We Protect Your Business
            </h2>

            <div className="grid lg:grid-cols-2 gap-8 mb-12">
              <Card className="bg-brand-navy-light border-brand-silver/20">
                <CardHeader>
                  <div className="flex items-center space-x-3">
                    <Shield className="h-8 w-8 text-brand-lime" />
                    <CardTitle className="text-white">Technology Solutions</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="text-brand-silver">
                  <ul className="space-y-3">
                    <li className="flex items-start space-x-2">
                      <CheckCircle className="h-5 w-5 text-brand-lime mt-0.5 flex-shrink-0" />
                      <span>Automated data mapping and inventory systems</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <CheckCircle className="h-5 w-5 text-brand-lime mt-0.5 flex-shrink-0" />
                      <span>Smart consent management platforms</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <CheckCircle className="h-5 w-5 text-brand-lime mt-0.5 flex-shrink-0" />
                      <span>Breach detection and notification systems</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <CheckCircle className="h-5 w-5 text-brand-lime mt-0.5 flex-shrink-0" />
                      <span>Subject access request automation</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <CheckCircle className="h-5 w-5 text-brand-lime mt-0.5 flex-shrink-0" />
                      <span>Privacy impact assessment tools</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="bg-brand-navy-light border-brand-silver/20">
                <CardHeader>
                  <div className="flex items-center space-x-3">
                    <Users className="h-8 w-8 text-brand-lime" />
                    <CardTitle className="text-white">Human Expertise</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="text-brand-silver">
                  <ul className="space-y-3">
                    <li className="flex items-start space-x-2">
                      <CheckCircle className="h-5 w-5 text-brand-lime mt-0.5 flex-shrink-0" />
                      <span>GDPR compliance audits and gap analysis</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <CheckCircle className="h-5 w-5 text-brand-lime mt-0.5 flex-shrink-0" />
                      <span>Staff training and awareness programs</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <CheckCircle className="h-5 w-5 text-brand-lime mt-0.5 flex-shrink-0" />
                      <span>Policy development and documentation</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <CheckCircle className="h-5 w-5 text-brand-lime mt-0.5 flex-shrink-0" />
                      <span>Ongoing compliance monitoring and support</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <CheckCircle className="h-5 w-5 text-brand-lime mt-0.5 flex-shrink-0" />
                      <span>Incident response planning and execution</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>

            <div className="bg-gradient-to-r from-brand-lime/20 to-brand-purple/20 rounded-lg p-8 border border-brand-lime/30">
              <h3 className="text-2xl font-bold text-white mb-4">Workforce Development</h3>
              <p className="text-purple-100 mb-4">
                We create a culture of data protection within your organization by developing internal 
                "GDPR Champions" - team members who understand both the technology and human elements 
                of compliance.
              </p>
              <p className="text-purple-100">
                Our approach ensures your staff feel confident handling personal data, understand their 
                responsibilities, and can identify potential risks before they become costly breaches.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-gradient-to-r from-yellow-600/20 to-orange-600/20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-white mb-6">
              Don't Risk Your Business on GDPR Non-Compliance
            </h2>
            <p className="text-xl text-purple-100 mb-8">
              With enforcement increasing and penalties severe, now is the time to ensure your 
              Powys business is fully protected.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/consultation">
                <Button className="bg-brand-lime text-purple-900 hover:bg-yellow-300 font-bold py-4 px-8 text-lg">
                  <Shield className="h-5 w-5 mr-2" />
                  Free GDPR Assessment
                </Button>
              </Link>
              <Link to="/gdpr-quiz">
                <Button variant="outline" className="border-white text-white hover:bg-white hover:text-purple-900 font-bold py-4 px-8 text-lg">
                  <CheckCircle className="h-5 w-5 mr-2" />
                  Test Your GDPR Knowledge
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
      <ChatbotLauncher />
    </div>
  );
};

export default GDPRCompliance;