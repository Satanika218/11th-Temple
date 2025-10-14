import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { CheckCircle, Globe, TrendingUp, Palette, DollarSign, Users, Zap, UserCheck, MessageCircle, BarChart3, FolderOpen, Download } from "lucide-react";
import { useCallback } from "react";
import { generateServicesPDF } from "@/utils/servicesPDFGenerator";
import Navigation from "@/components/navigation/Navigation";
import Footer from "@/components/Footer";
import ChatbotLauncher from "@/components/ChatbotLauncher";
import PDFDownloadForm from "@/components/forms/PDFDownloadForm";

import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";

const services = [
  {
    icon: <Globe className="h-10 w-10 text-brand-lime" />,
    title: "Website & Digital Presence",
    description: "Professional websites and digital solutions that convert visitors into customers.",
    bullets: [
      "AI-powered website building and optimization",
      "Mobile-responsive design with fast loading",
      "SEO optimization for local search visibility",
      "User experience improvements to reduce bounce rates"
    ]
  },
  {
    icon: <TrendingUp className="h-10 w-10 text-brand-lime" />,
    title: "Digital Marketing",
    description: "AI-driven marketing strategies that attract and retain customers.",
    bullets: [
      "Automated social media content creation and scheduling",
      "Personalized email marketing campaigns",
      "Local SEO to dominate search results",
      "Content optimization for maximum engagement"
    ]
  },
  {
    icon: <Palette className="h-10 w-10 text-brand-lime" />,
    title: "Creative & Design",
    description: "Professional visual identity and marketing materials that captivate audiences.",
    bullets: [
      "AI-powered logo design and brand development",
      "Automated graphic creation for social media",
      "Consistent brand application across all materials",
      "Professional image enhancement and editing"
    ]
  },
  {
    icon: <DollarSign className="h-10 w-10 text-brand-lime" />,
    title: "Financial Operations",
    description: "Streamline financial processes with intelligent automation.",
    bullets: [
      "Automated invoice and receipt processing",
      "AI-powered cash flow forecasting",
      "Budget variance tracking and alerts",
      "Financial document classification and storage"
    ]
  },
  {
    icon: <Users className="h-10 w-10 text-brand-lime" />,
    title: "Customer Relationships",
    description: "Build stronger connections with AI-powered customer insights.",
    bullets: [
      "Personalized customer communication at scale",
      "Intelligent customer segmentation",
      "Competitive intelligence and market analysis",
      "Trend identification for emerging opportunities"
    ]
  },
  {
    icon: <Zap className="h-10 w-10 text-brand-lime" />,
    title: "Sales & Lead Generation",
    description: "Automate your sales pipeline and generate more qualified leads.",
    bullets: [
      "AI-powered lead generation and qualification",
      "Automated follow-up sequences",
      "Professional proposal generation",
      "Sales pipeline optimization and tracking"
    ]
  },
  {
    icon: <UserCheck className="h-10 w-10 text-brand-lime" />,
    title: "Human Resources",
    description: "Streamline HR processes from recruitment to employee engagement.",
    bullets: [
      "Automated resume screening and candidate matching",
      "AI-powered interview scheduling coordination",
      "Personalized employee onboarding experiences",
      "Employee sentiment analysis and engagement tracking"
    ]
  },
  {
    icon: <MessageCircle className="h-10 w-10 text-brand-lime" />,
    title: "Customer Support",
    description: "Provide exceptional 24/7 support with AI-powered solutions.",
    bullets: [
      "Intelligent chatbots for instant customer service",
      "Automated response suggestions for support teams",
      "Customer satisfaction sentiment analysis",
      "Predictive customer churn prevention"
    ]
  },
  {
    icon: <BarChart3 className="h-10 w-10 text-brand-lime" />,
    title: "Project Management",
    description: "Optimize workflows and resource allocation with smart automation.",
    bullets: [
      "AI-powered task prioritization and scheduling",
      "Predictive project timeline generation",
      "Team workload optimization and balancing",
      "Automated time tracking and categorization"
    ]
  },
  {
    icon: <FolderOpen className="h-10 w-10 text-brand-lime" />,
    title: "Administrative Operations",
    description: "Eliminate manual tasks with intelligent document and communication management.",
    bullets: [
      "Automated document classification and organization",
      "Smart email management and prioritization",
      "AI-powered meeting scheduling coordination",
      "Intelligent data extraction from any document type"
    ]
  },
];

export default function Services() {
  const [isGeneratingPDF, setIsGeneratingPDF] = useState(false);
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const handlePDFDownload = useCallback(async (formData: any) => {
    setIsGeneratingPDF(true);
    try {
      console.log('PDF Download form data:', formData);
      await generateServicesPDF(services);
      setIsDialogOpen(false);
    } catch (error) {
      console.error('Error generating PDF:', error);
      alert('Error generating PDF. Please try again.');
    } finally {
      setIsGeneratingPDF(false);
    }
  }, []);

  return (
    <div className="min-h-screen bg-brand-navy">
      <Navigation />
      
      {/* Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-12 text-center">
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
          <span className="text-brand-lime">AI Automation Services</span>
        </h1>
        <p className="text-xl text-brand-silver max-w-2xl mx-auto mb-6">
          Comprehensive solutions designed specifically for local businesses. We combine cutting-edge technology with local market knowledge.
        </p>
        <div className="flex gap-4 justify-center">
          <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
            <DialogTrigger asChild>
              <Button className="bg-brand-lime text-brand-navy hover:bg-brand-lime-dark font-semibold">
                <Download className="h-4 w-4 mr-2" />
                Download Service Guide (.PDF)
              </Button>
            </DialogTrigger>
            <DialogContent className="bg-brand-navy border-brand-silver/30 max-w-md">
              <PDFDownloadForm onSubmit={handlePDFDownload} isLoading={isGeneratingPDF} />
            </DialogContent>
          </Dialog>
          
        </div>
      </div>

      {/* Services Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-8">
        <h2 className="text-3xl font-bold text-white text-center mb-10">Complete Business <span className="text-brand-lime">Solutions</span></h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, idx) => (
            <div key={service.title} className="bg-brand-navy-light rounded-2xl p-8 h-full border border-brand-silver/20 shadow transition-transform hover:-translate-y-2">
              <div className="flex items-center mb-4">
                {service.icon}
                <h3 className="ml-3 text-xl font-bold text-white">{service.title}</h3>
              </div>
              <p className="text-brand-silver mb-4">{service.description}</p>
              <ul className="mb-0 space-y-2">
                {service.bullets.map((bullet, i) => (
                  <li className="flex items-center text-brand-silver" key={i}>
                    <CheckCircle className="h-4 w-4 text-brand-lime mr-2" />
                    <span>{bullet}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* CTA */}
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 pb-16 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
          Ready to Start Your AI Journey?
        </h2>
        <p className="text-xl text-brand-silver mb-6">
          Contact us today for a free consultation and discover how our AI automation solutions can transform your local business.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link to="/consultation">
            <Button className="bg-brand-lime text-brand-navy hover:bg-brand-lime-dark font-semibold">
              Free 30min Consultation - Let's Talk How We Help
            </Button>
          </Link>
          <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
            <DialogTrigger asChild>
              <Button variant="outline" className="border-brand-lime text-brand-lime hover:bg-brand-lime hover:text-brand-navy">
                <Download className="h-4 w-4 mr-2" />
                Download Service Guide
              </Button>
            </DialogTrigger>
            <DialogContent className="bg-brand-navy border-brand-silver/30 max-w-md">
              <PDFDownloadForm onSubmit={handlePDFDownload} isLoading={isGeneratingPDF} />
            </DialogContent>
          </Dialog>
        </div>
      </div>
      
      <Footer />
      <ChatbotLauncher />
    </div>
  );
}
