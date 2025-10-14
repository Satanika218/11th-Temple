
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { SEOAuditData } from "@/pages/SEOAudit";
import { processUrl } from "@/utils/urlUtils";
import SEOContactInfoSection from "./seo-audit/SEOContactInfoSection";
import SEOBusinessInfoSection from "./seo-audit/SEOBusinessInfoSection";
import KeywordsAndCompetitorsSection from "./seo-audit/KeywordsAndCompetitorsSection";
import SEOGoalsAndIssuesSection from "./seo-audit/SEOGoalsAndIssuesSection";
import SEOGDPRConsentSection from "./seo-audit/SEOGDPRConsentSection";

interface SEOAuditFormProps {
  onSubmit: (data: SEOAuditData) => void;
}

const SEOAuditForm = ({ onSubmit }: SEOAuditFormProps) => {
  const [formData, setFormData] = useState<SEOAuditData>({
    websiteUrl: "",
    businessName: "",
    contactName: "",
    contactEmail: "",
    industry: "",
    targetLocation: "",
    primaryKeywords: [],
    currentRanking: "",
    competitors: [],
    seoGoals: [],
    currentIssues: [],
    gdprConsent: false
  });


  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.gdprConsent) {
      alert("Please consent to data processing to continue.");
      return;
    }

    const processedUrl = processUrl(formData.websiteUrl);

    onSubmit({
      ...formData,
      websiteUrl: processedUrl,
    });
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <SEOContactInfoSection formData={formData} setFormData={setFormData} />
      <SEOBusinessInfoSection formData={formData} setFormData={setFormData} />
      <KeywordsAndCompetitorsSection formData={formData} setFormData={setFormData} />
      <SEOGoalsAndIssuesSection formData={formData} setFormData={setFormData} />
      <SEOGDPRConsentSection formData={formData} setFormData={setFormData} />

      <Button 
        type="submit" 
        size="lg" 
        className="w-full bg-brand-lime text-brand-navy hover:bg-brand-lime-dark font-semibold"
      >
        Generate My Free SEO Audit
      </Button>
    </form>
  );
};

export default SEOAuditForm;
