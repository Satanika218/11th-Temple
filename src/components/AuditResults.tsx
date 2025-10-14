
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Download, TrendingUp, Target, AlertTriangle, CheckCircle } from "lucide-react";
import { AuditData } from "@/pages/AnalyticsAudit";
import { generateAuditPDF } from "@/utils/pdfGenerator";

interface AuditResultsProps {
  auditData: AuditData;
}

const logoUrl = "/lovable-uploads/75f77758-fb5a-45f9-a0e0-770aa7766795.png";

const AuditResults = ({ auditData }: AuditResultsProps) => {
  // Generate score only once per audit
  const [score] = useState(() => Math.floor(Math.random() * 30) + 60);

  const handleDownloadPDF = () => {
    generateAuditPDF(auditData, score, logoUrl);
  };

  // Generate mock audit insights based on the form data
  const generateInsights = () => {
    const insights = {
      strengths: [],
      weaknesses: [],
      recommendations: []
    };

    // Add insights based on industry
    if (auditData.industry === "retail") {
      insights.recommendations.push("Implement e-commerce tracking for better conversion insights");
      insights.recommendations.push("Set up product performance analytics");
    }

    // Add insights based on goals
    if (auditData.primaryGoals.includes("Increase website traffic")) {
      insights.recommendations.push("Optimize for local SEO keywords");
      insights.weaknesses.push("Limited organic search visibility");
    }

    if (auditData.primaryGoals.includes("Improve conversion rates")) {
      insights.recommendations.push("Implement A/B testing for key landing pages");
      insights.strengths.push("Good user engagement metrics");
    }

    // Add insights based on challenges
    if (auditData.currentChallenges.includes("Low website traffic")) {
      insights.recommendations.push("Develop a content marketing strategy");
      insights.recommendations.push("Improve technical SEO fundamentals");
    }

    if (auditData.currentChallenges.includes("High bounce rate")) {
      insights.recommendations.push("Optimize page loading speed");
      insights.recommendations.push("Improve mobile user experience");
    }

    // Default recommendations
    insights.recommendations.push("Set up Google Analytics 4 enhanced tracking");
    insights.recommendations.push("Implement local business schema markup");
    insights.strengths.push("Good mobile responsiveness");
    insights.weaknesses.push("Missing heat map analysis");

    return insights;
  };

  const insights = generateInsights();

  return (
    <div className="space-y-6">
      {/* Header Card with Score */}
      <Card className="bg-gradient-to-r from-brand-navy to-brand-navy-light border-brand-silver/20">
        <CardHeader>
          <div className="flex justify-between items-center">
            <div>
              <CardTitle className="text-2xl font-bold text-white mb-2">
                Analytics Audit Report
              </CardTitle>
              <p className="text-brand-silver">
                Analysis for {auditData.businessName} • {auditData.targetLocation}
              </p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-brand-lime">{score}</div>
              <div className="text-brand-silver text-sm">Overall Score</div>
              <div className="text-xs text-brand-silver mt-1">Based on goal alignment, data quality, and implementation readiness</div>
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <Button 
            onClick={handleDownloadPDF}
            className="bg-brand-lime text-brand-navy hover:bg-brand-lime-dark font-semibold"
          >
            <Download className="mr-2 h-4 w-4" />
            Download PDF Report
          </Button>
        </CardContent>
      </Card>

      {/* Insights Grid */}
      <div className="grid md:grid-cols-2 gap-6">
        {/* Strengths */}
        <Card className="bg-brand-navy border-brand-silver/20">
          <CardHeader>
            <CardTitle className="text-white flex items-center gap-2">
              <CheckCircle className="h-5 w-5 text-brand-lime" />
              Strengths
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-2">
              {insights.strengths.map((strength, index) => (
                <li key={index} className="text-brand-silver flex items-start gap-2">
                  <div className="w-2 h-2 bg-brand-lime rounded-full mt-2 flex-shrink-0"></div>
                  {strength}
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>

        {/* Areas for Improvement */}
        <Card className="bg-brand-navy border-brand-silver/20">
          <CardHeader>
            <CardTitle className="text-white flex items-center gap-2">
              <AlertTriangle className="h-5 w-5 text-brand-lime" />
              Areas for Improvement
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-2">
              {insights.weaknesses.map((weakness, index) => (
                <li key={index} className="text-brand-silver flex items-start gap-2">
                  <div className="w-2 h-2 bg-brand-lime rounded-full mt-2 flex-shrink-0"></div>
                  {weakness}
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>
      </div>

      {/* Recommendations */}
      <Card className="bg-brand-navy border-brand-silver/20">
        <CardHeader>
          <CardTitle className="text-white flex items-center gap-2">
            <Target className="h-5 w-5 text-brand-lime" />
            Priority Recommendations
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {insights.recommendations.map((recommendation, index) => (
              <div key={index} className="flex items-start gap-3 p-3 bg-brand-navy-light rounded-lg">
                <div className="bg-brand-lime text-brand-navy rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold flex-shrink-0">
                  {index + 1}
                </div>
                <p className="text-brand-silver">{recommendation}</p>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Next Steps */}
      <Card className="bg-brand-navy border-brand-silver/20">
        <CardHeader>
          <CardTitle className="text-white flex items-center gap-2">
            <TrendingUp className="h-5 w-5 text-brand-lime" />
            Next Steps
          </CardTitle>
        </CardHeader>
        <CardContent className="bg-brand-silver/10 rounded-lg p-6">
          <p className="text-brand-silver mb-4">
            Ready to implement these recommendations? Our team at 11th Temple can help you:
          </p>
          <ul className="space-y-2 text-brand-silver mb-6">
            <li className="flex items-center gap-2">
              <CheckCircle className="h-4 w-4 text-brand-lime" />
              Set up advanced analytics tracking
            </li>
            <li className="flex items-center gap-2">
              <CheckCircle className="h-4 w-4 text-brand-lime" />
              Implement conversion optimization strategies
            </li>
            <li className="flex items-center gap-2">
              <CheckCircle className="h-4 w-4 text-brand-lime" />
              Create custom dashboards and reports
            </li>
            <li className="flex items-center gap-2">
              <CheckCircle className="h-4 w-4 text-brand-lime" />
              Provide ongoing analytics support
            </li>
          </ul>
          <Button className="bg-brand-lime text-brand-navy hover:bg-brand-lime-dark font-semibold">
            Free 30min Consultation - Let's Talk How We Help
          </Button>
        </CardContent>
      </Card>
    </div>
  );
};

export default AuditResults;
