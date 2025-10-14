import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { MessageCircle, Clock, Users, TrendingUp, CheckCircle, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import Navigation from "@/components/navigation/Navigation";
import Footer from "@/components/Footer";
import ChatbotLauncher from "@/components/ChatbotLauncher";

export default function CustomerService() {
  return (
    <div className="min-h-screen bg-brand-navy">
      <Navigation />

      {/* Hero Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-12 text-center">
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
          <span className="text-brand-lime">Customer Service</span> Solutions
        </h1>
        <p className="text-xl text-brand-silver max-w-2xl mx-auto mb-6">
          Elevate your customer support with AI-driven solutions that provide exceptional service and build lasting relationships.
        </p>
        <Link to="/consultation">
          <Button className="bg-brand-lime text-brand-navy hover:bg-brand-lime-dark font-semibold">
            Explore Our Solutions
          </Button>
        </Link>
      </div>

      {/* What is Customer Service AI Section */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h2 className="text-3xl md:text-4xl font-bold text-brand-navy mb-6">
              What is AI Customer Service?
            </h2>
            <div className="bg-gray-50 rounded-2xl p-8 text-left">
              <p className="text-lg text-gray-700 mb-4">
                Imagine having a helpful assistant who knows everything about your business and can talk to customers any time of day or night - that's AI customer service.
              </p>
              <p className="text-lg text-gray-700 mb-4">
                It's like a very smart chatbot that can understand what customers are asking for and give them the right answers immediately. Unlike basic chatbots that only work with simple questions, AI customer service can handle complex conversations and even learn from each interaction.
              </p>
              <p className="text-lg text-gray-700">
                For example: A customer might ask "What's the best product for my small garden?" and the AI can ask follow-up questions, understand their specific needs, and recommend the perfect solution - just like your best salesperson would.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Solutions Overview */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
        <h2 className="text-3xl font-bold text-white text-center mb-10">
          AI-Powered <span className="text-brand-lime">Customer Service</span>
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Card 1: Intelligent Chatbots */}
          <Card className="bg-brand-navy-light border border-brand-silver/20 shadow transition-transform hover:-translate-y-2">
            <CardHeader>
              <CardTitle className="text-xl font-bold text-white flex items-center space-x-2">
                <MessageCircle className="h-5 w-5 text-brand-lime" />
                <span>Intelligent Chatbots</span>
              </CardTitle>
              <CardDescription className="text-brand-silver">
                24/7 support that understands and resolves customer issues instantly.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="list-none space-y-2">
                <li className="flex items-center text-brand-silver">
                  <CheckCircle className="h-4 w-4 text-brand-lime mr-2" />
                  <span>Instant responses to common queries</span>
                </li>
                <li className="flex items-center text-brand-silver">
                  <CheckCircle className="h-4 w-4 text-brand-lime mr-2" />
                  <span>Personalized support based on customer history</span>
                </li>
                <li className="flex items-center text-brand-silver">
                  <CheckCircle className="h-4 w-4 text-brand-lime mr-2" />
                  <span>Seamless handoff to human agents when needed</span>
                </li>
              </ul>
            </CardContent>
          </Card>

          {/* Card 2: Automated Ticket Management */}
          <Card className="bg-brand-navy-light border border-brand-silver/20 shadow transition-transform hover:-translate-y-2">
            <CardHeader>
              <CardTitle className="text-xl font-bold text-white flex items-center space-x-2">
                <Clock className="h-5 w-5 text-brand-lime" />
                <span>Automated Ticket Management</span>
              </CardTitle>
              <CardDescription className="text-brand-silver">
                Efficiently manage and prioritize support tickets with AI-driven automation.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="list-none space-y-2">
                <li className="flex items-center text-brand-silver">
                  <CheckCircle className="h-4 w-4 text-brand-lime mr-2" />
                  <span>Automatic ticket routing to the right agents</span>
                </li>
                <li className="flex items-center text-brand-silver">
                  <CheckCircle className="h-4 w-4 text-brand-lime mr-2" />
                  <span>Intelligent prioritization based on urgency</span>
                </li>
                <li className="flex items-center text-brand-silver">
                  <CheckCircle className="h-4 w-4 text-brand-lime mr-2" />
                  <span>Real-time tracking and reporting on ticket status</span>
                </li>
              </ul>
            </CardContent>
          </Card>

          {/* Card 3: Customer Service Agents */}
          <Card className="bg-brand-navy-light border border-brand-silver/20 shadow transition-transform hover:-translate-y-2">
            <CardHeader>
              <CardTitle className="text-xl font-bold text-white flex items-center space-x-2">
                <Users className="h-5 w-5 text-brand-lime" />
                <span>Customer Service Agents</span>
              </CardTitle>
              <CardDescription className="text-brand-silver">
                Dedicated support professionals trained to deliver exceptional customer experiences.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="list-none space-y-2">
                <li className="flex items-center text-brand-silver">
                  <CheckCircle className="h-4 w-4 text-brand-lime mr-2" />
                  <span>Highly trained agents with industry expertise</span>
                </li>
                <li className="flex items-center text-brand-silver">
                  <CheckCircle className="h-4 w-4 text-brand-lime mr-2" />
                  <span>Personalized support tailored to your business needs</span>
                </li>
                <li className="flex items-center text-brand-silver">
                  <CheckCircle className="h-4 w-4 text-brand-lime mr-2" />
                  <span>Scalable solutions to handle fluctuating support volumes</span>
                </li>
              </ul>
            </CardContent>
          </Card>

          {/* Card 4: Sentiment Analysis */}
          <Card className="bg-brand-navy-light border border-brand-silver/20 shadow transition-transform hover:-translate-y-2">
            <CardHeader>
              <CardTitle className="text-xl font-bold text-white flex items-center space-x-2">
                <TrendingUp className="h-5 w-5 text-brand-lime" />
                <span>Sentiment Analysis</span>
              </CardTitle>
              <CardDescription className="text-brand-silver">
                Understand customer emotions and improve satisfaction with AI-powered sentiment analysis.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="list-none space-y-2">
                <li className="flex items-center text-brand-silver">
                  <CheckCircle className="h-4 w-4 text-brand-lime mr-2" />
                  <span>Real-time monitoring of customer sentiment</span>
                </li>
                <li className="flex items-center text-brand-silver">
                  <CheckCircle className="h-4 w-4 text-brand-lime mr-2" />
                  <span>Identification of potential issues before they escalate</span>
                </li>
                <li className="flex items-center text-brand-silver">
                  <CheckCircle className="h-4 w-4 text-brand-lime mr-2" />
                  <span>Data-driven insights to improve customer experiences</span>
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* CTA Section */}
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 pb-16 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
          Transform Your Customer Service Today
        </h2>
        <p className="text-xl text-brand-silver mb-6">
          Contact us to learn how our AI-powered solutions can help you deliver exceptional customer experiences and drive business growth.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link to="/consultation">
            <Button className="bg-brand-lime text-brand-navy hover:bg-brand-lime-dark font-semibold">
              Schedule a Consultation
            </Button>
          </Link>
          <Button variant="outline" className="border-brand-lime text-brand-lime hover:bg-brand-lime hover:text-brand-navy">
            Learn More <ArrowRight className="ml-2" />
          </Button>
        </div>
      </div>

      <Footer />
      <ChatbotLauncher />
    </div>
  );
}
