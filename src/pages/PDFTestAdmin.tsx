import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Download, FileText, BarChart3, Search, Eye, Brain, Shield } from "lucide-react";
import Navigation from "@/components/navigation/Navigation";
import Footer from "@/components/Footer";
import { useLoadingState } from "@/hooks/useLoadingState";
import { generateSEOAuditPDF } from "@/utils/seoAuditPDFGenerator";
import { generateAuditPDF } from "@/utils/pdfGenerator";
import { generateWebsiteAuditPDF } from "@/utils/websiteAuditPDFGenerator";
import { generateServicesPDF } from "@/utils/servicesPDFGenerator";
import { generateDigitalSkillsPDF } from "@/utils/digitalSkillsPDFGenerator";
import { generateGDPRQuizPDF } from "@/utils/gdprQuizPDFGenerator";
import { toast } from "sonner";

const PDFTestAdmin = () => {
  const { isLoading, execute } = useLoadingState();

  // Sample data for testing
  const sampleSEOData = {
    websiteUrl: "https://example-business.co.uk",
    businessName: "Example Welsh Business Ltd",
    contactName: "John Smith",
    contactEmail: "john@example-business.co.uk",
    industry: "Professional Services",
    targetLocation: "Cardiff, Wales",
    primaryKeywords: ["accounting services Cardiff", "tax advice Wales", "bookkeeping services", "business consultancy"],
    currentRanking: "Page 2-3 on Google",
    competitors: ["competitor1.co.uk", "competitor2.co.uk", "competitor3.co.uk"],
    seoGoals: ["Rank on page 1 for main keywords", "Increase local visibility", "Drive more qualified traffic"],
    currentIssues: ["Slow page loading", "Missing meta descriptions", "No Google Business Profile"],
    gdprConsent: true
  };

  const sampleAnalyticsData = {
    websiteUrl: "https://example-business.co.uk",
    businessName: "Example Welsh Business Ltd",
    contactName: "John Smith",
    contactEmail: "john@example-business.co.uk",
    industry: "Professional Services",
    targetLocation: "Cardiff, Wales",
    targetAudience: "Small businesses and entrepreneurs",
    monthlyVisitors: "1,000-5,000",
    primaryGoals: ["Increase online sales", "Generate more leads", "Improve customer engagement"],
    currentChallenges: ["Low conversion rates", "High bounce rate", "Unclear user journey"],
    gdprConsent: true
  };

  const sampleWebsiteData = {
    websiteUrl: "https://example-business.co.uk",
    businessName: "Example Welsh Business Ltd",
    contactName: "John Smith",
    contactEmail: "john@example-business.co.uk",
    industry: "Professional Services",
    targetAudience: "Small businesses in Wales",
    currentIssues: ["Slow loading times", "Poor mobile responsiveness", "Outdated design"],
    improvementGoals: ["Faster loading", "Better user experience", "Modern design", "Mobile optimization"],
    gdprConsent: true
  };

  const sampleServicesData = [
    {
      title: "AI-Powered Process Automation",
      description: "Streamline your business operations with intelligent automation solutions.",
      bullets: [
        "Automate repetitive tasks and workflows",
        "Reduce manual errors by up to 95%",
        "Save 10-20 hours per week on admin tasks",
        "Integrate with existing systems seamlessly"
      ]
    },
    {
      title: "Customer Service AI Solutions",
      description: "Enhance customer experience with AI-powered support tools.",
      bullets: [
        "24/7 intelligent chatbot support",
        "Automated ticket routing and prioritization",
        "Real-time sentiment analysis",
        "Multi-channel customer communication"
      ]
    },
    {
      title: "Data Analytics & Business Intelligence",
      description: "Turn your business data into actionable insights and strategic advantages.",
      bullets: [
        "Real-time dashboard creation",
        "Predictive analytics and forecasting",
        "Customer behavior analysis",
        "Performance tracking and KPI monitoring"
      ]
    }
  ];

  const sampleDigitalSkillsResult = {
    score: 72,
    answers: [1, 2, 1, 3, 2, 1, 2, 3, 1, 2], // Sample answers
    businessName: "Example Welsh Business Ltd",
    contactName: "John Smith",
    contactEmail: "john@example-business.co.uk"
  };

  const sampleGDPRResult = {
    score: 68,
    answers: [2, 1, 3, 2, 1, 3, 2, 1, 2, 3], // Sample answers
    businessName: "Example Welsh Business Ltd",
    contactName: "John Smith", 
    contactEmail: "john@example-business.co.uk"
  };

  const testPDFs = [
    {
      title: "SEO Audit PDF",
      description: "Complete SEO analysis with keyword insights and recommendations",
      icon: <Search className="h-6 w-6" />,
      action: () => execute(async () => {
        await generateSEOAuditPDF(sampleSEOData, 73);
        toast.success("SEO Audit PDF generated successfully!");
      })
    },
    {
      title: "Analytics Audit PDF",
      description: "Website analytics review with performance metrics",
      icon: <BarChart3 className="h-6 w-6" />,
      action: () => execute(async () => {
        await generateAuditPDF(sampleAnalyticsData, 68);
        toast.success("Analytics Audit PDF generated successfully!");
      })
    },
    {
      title: "Website Audit PDF", 
      description: "Comprehensive website performance and UX analysis",
      icon: <Eye className="h-6 w-6" />,
      action: () => execute(async () => {
        await generateWebsiteAuditPDF(sampleWebsiteData, 75);
        toast.success("Website Audit PDF generated successfully!");
      })
    },
    {
      title: "Services Guide PDF",
      description: "AI services overview with detailed feature breakdowns",
      icon: <FileText className="h-6 w-6" />,
      action: () => execute(async () => {
        await generateServicesPDF(sampleServicesData);
        toast.success("Services Guide PDF generated successfully!");
      })
    },
    {
      title: "Digital Skills Quiz PDF",
      description: "Digital skills assessment results with personalized recommendations",
      icon: <Brain className="h-6 w-6" />,
      action: () => execute(async () => {
        await generateDigitalSkillsPDF(sampleDigitalSkillsResult);
        toast.success("Digital Skills Quiz PDF generated successfully!");
      })
    },
    {
      title: "GDPR Quiz PDF",
      description: "GDPR compliance assessment with detailed compliance guidance",
      icon: <Shield className="h-6 w-6" />,
      action: () => execute(async () => {
        await generateGDPRQuizPDF(sampleGDPRResult);
        toast.success("GDPR Quiz PDF generated successfully!");
      })
    }
  ];

  return (
    <div className="min-h-screen bg-brand-navy">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-20 pb-16 purple-gradient">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              PDF Test <span className="text-brand-lime">Admin</span>
            </h1>
            <p className="text-xl text-white mb-8 max-w-3xl mx-auto">
              Test all PDF exports with realistic sample data to verify formatting and branding
            </p>
          </div>
        </div>
      </section>

      {/* PDF Test Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testPDFs.map((pdf, index) => (
              <Card key={index} className="bg-white hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-0 rounded-2xl overflow-hidden">
                <CardHeader className="text-center pb-4">
                  <div className="flex justify-center mb-4">
                    <div className="bg-brand-purple rounded-2xl p-4 w-16 h-16 flex items-center justify-center text-white">
                      {pdf.icon}
                    </div>
                  </div>
                  <CardTitle className="text-xl font-bold text-brand-navy mb-2">{pdf.title}</CardTitle>
                  <p className="text-gray-600 text-sm">
                    {pdf.description}
                  </p>
                </CardHeader>
                <CardContent className="pt-0 pb-6">
                  <Button 
                    onClick={pdf.action}
                    disabled={isLoading}
                    className="w-full bg-brand-lime text-brand-navy hover:bg-brand-lime-dark font-semibold py-3 rounded-xl transition-all duration-300 hover:shadow-lg disabled:opacity-50"
                  >
                    <Download className="mr-2 h-4 w-4" />
                    {isLoading ? "Generating..." : "Download Test PDF"}
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Instructions Section */}
      <section className="py-20 bg-gradient-to-br from-brand-navy via-slate-800 to-brand-navy">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Card className="bg-brand-navy-light border border-brand-silver/20">
            <CardHeader>
              <CardTitle className="text-2xl font-bold text-white text-center">
                Testing Instructions
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="text-brand-silver">
                <h3 className="text-lg font-semibold text-brand-lime mb-2">What to Check:</h3>
                <ul className="space-y-2 ml-4">
                  <li>• Logo positioning and quality</li>
                  <li>• Brand color consistency (#6B46C1 navy, #FCD34D lime)</li>
                  <li>• Text formatting and readability</li>
                  <li>• Page layouts and content alignment</li>
                  <li>• Footer information accuracy</li>
                  <li>• Data presentation and organization</li>
                </ul>
              </div>
              
              <div className="text-brand-silver mt-6">
                <h3 className="text-lg font-semibold text-brand-lime mb-2">Sample Data Used:</h3>
                <p className="text-sm">
                  All PDFs use realistic sample data representing typical customer submissions. 
                  This allows you to see exactly what customers will receive when they complete your free tools.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default PDFTestAdmin;