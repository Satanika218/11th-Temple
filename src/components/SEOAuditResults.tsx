
import { useState } from "react";
import { SEOAuditData } from "@/pages/SEOAudit";
import { generateSEOAuditPDF } from "@/utils/seoAuditPDFGenerator";
import { useSEOInsights } from "@/hooks/useSEOInsights";
import AuditScoreHeader from "./seo-audit/AuditScoreHeader";
import KeywordAnalysis from "./seo-audit/KeywordAnalysis";
import InsightsGrid from "./seo-audit/InsightsGrid";
import RecommendationsList from "./seo-audit/RecommendationsList";
import NextStepsSection from "./seo-audit/NextStepsSection";

interface SEOAuditResultsProps {
  auditData: SEOAuditData;
}

const logoUrl = "/lovable-uploads/75f77758-fb5a-45f9-a0e0-770aa7766795.png";

const SEOAuditResults = ({ auditData }: SEOAuditResultsProps) => {
  // Make sure score is generated only once per audit
  const [score] = useState(() => Math.floor(Math.random() * 35) + 55);
  const insights = useSEOInsights(auditData);

  const handleDownloadPDF = async () => {
    await generateSEOAuditPDF(auditData, score, logoUrl);
  };

  return (
    <div className="space-y-6">
      <AuditScoreHeader 
        auditData={auditData} 
        score={score} 
        onDownloadPDF={handleDownloadPDF} 
      />
      
      <KeywordAnalysis auditData={auditData} />
      
      <InsightsGrid 
        strengths={insights.strengths} 
        weaknesses={insights.weaknesses} 
      />
      
      <RecommendationsList recommendations={insights.recommendations} />
      
      <NextStepsSection />
    </div>
  );
};

export default SEOAuditResults;
