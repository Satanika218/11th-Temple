
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowLeft, Search, TrendingUp, AlertCircle } from "lucide-react";
import Navigation from "@/components/navigation/Navigation";
import Footer from "@/components/Footer";
import ChatbotLauncher from "@/components/ChatbotLauncher";
import { Link } from "react-router-dom";
import SEOAuditForm from "@/components/SEOAuditForm";
import SEOAuditResults from "@/components/SEOAuditResults";

export type SEOAuditData = {
  websiteUrl: string;
  businessName: string;
  contactName: string;
  contactEmail: string;
  industry: string;
  targetLocation: string;
  primaryKeywords: string[];
  currentRanking: string;
  competitors: string[];
  seoGoals: string[];
  currentIssues: string[];
  gdprConsent: boolean;
};

export default function SEOAudit() {
  const [results, setResults] = useState<SEOAuditData | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (data: SEOAuditData) => {
    setIsLoading(true);
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 2000));
      setResults(data);
    } catch (error) {
      console.error("Error:", error);
      alert("An error occurred. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-brand-navy">
      <Navigation />

      {/* Hero Section */}
      <div className="max-w-5xl mx-auto px-4 py-12 sm:px-6 lg:px-8 text-center">
        <h1 className="text-3xl font-bold text-white sm:text-4xl mb-4">
          Free SEO Audit
        </h1>
        <p className="text-lg text-brand-silver mb-4">
          Get a comprehensive SEO analysis of your website with actionable recommendations.
        </p>
        <div className="bg-brand-navy-light border border-brand-silver/20 rounded-xl p-6 max-w-3xl mx-auto mb-8">
          <h3 className="text-lg font-semibold text-brand-lime mb-2">What is SEO?</h3>
          <p className="text-brand-silver">
            SEO (Search Engine Optimization) focuses on improving your website to rank higher in Google search results when people look for your services. Analytics tracks what visitors actually do once they're on your website, showing you how to improve their experience.
          </p>
        </div>
      </div>

      {/* Form or Results Section */}
      <div className="max-w-5xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
        {!results ? (
          <Card className="bg-brand-navy-light border border-brand-silver/20">
            <CardContent className="p-6">
              {isLoading ? (
                <div className="text-center py-8">
                  <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-brand-lime mx-auto mb-4"></div>
                  <p className="text-white">Analyzing your website...</p>
                </div>
              ) : (
                <SEOAuditForm onSubmit={handleSubmit} />
              )}
            </CardContent>
          </Card>
        ) : (
          <SEOAuditResults auditData={results} />
        )}
      </div>

      {/* Back to Home */}
      <div className="max-w-5xl mx-auto px-4 py-8 sm:px-6 lg:px-8 text-center">
        <Link to="/" className="text-brand-lime hover:underline flex items-center justify-center gap-2">
          <ArrowLeft /> Back to Home
        </Link>
      </div>

      <Footer />
      <ChatbotLauncher />
    </div>
  );
}
