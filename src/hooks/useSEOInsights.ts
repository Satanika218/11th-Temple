
import { SEOAuditData } from "@/pages/SEOAudit";

interface SEOInsights {
  strengths: string[];
  weaknesses: string[];
  recommendations: string[];
}

export const useSEOInsights = (auditData: SEOAuditData): SEOInsights => {
  const generateInsights = (): SEOInsights => {
    const insights: SEOInsights = {
      strengths: [],
      weaknesses: [],
      recommendations: []
    };

    // Add insights based on industry
    if (auditData.industry === "retail") {
      insights.recommendations.push("Optimize product pages for local search terms");
      insights.recommendations.push("Implement structured data for products");
    }

    if (auditData.industry === "restaurant") {
      insights.recommendations.push("Optimize for 'near me' searches");
      insights.recommendations.push("Improve Google My Business listing");
    }

    // Add insights based on current ranking
    if (auditData.currentRanking === "not-ranking") {
      insights.weaknesses.push("Website not appearing in search results");
      insights.recommendations.push("Implement basic on-page SEO fundamentals");
    }

    if (auditData.currentRanking === "beyond-page-3") {
      insights.weaknesses.push("Low search visibility");
      insights.recommendations.push("Improve content quality and keyword targeting");
    }

    // Add insights based on goals
    if (auditData.seoGoals.includes("Improve local search rankings")) {
      insights.recommendations.push("Optimize for local SEO keywords");
      insights.recommendations.push("Build local citations and directory listings");
    }

    if (auditData.seoGoals.includes("Beat specific competitors")) {
      insights.recommendations.push("Conduct competitive analysis and gap identification");
      insights.strengths.push("Clear competitive targets identified");
    }

    // Add insights based on issues
    if (auditData.currentIssues.includes("Slow page loading speed")) {
      insights.recommendations.push("Optimize website performance and loading speed");
      insights.weaknesses.push("Page speed optimization needed");
    }

    if (auditData.currentIssues.includes("Missing meta descriptions")) {
      insights.recommendations.push("Add compelling meta descriptions to all pages");
      insights.weaknesses.push("Missing or poor meta descriptions");
    }

    // Default recommendations and insights
    insights.recommendations.push("Improve internal linking structure");
    insights.recommendations.push("Create location-specific landing pages");
    insights.strengths.push("Good keyword targeting potential");
    insights.weaknesses.push("Limited backlink profile");

    return insights;
  };

  return generateInsights();
};
