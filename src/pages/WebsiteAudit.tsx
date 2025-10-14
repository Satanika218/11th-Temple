import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { ArrowLeft, Globe, Shield, Zap, Eye, Search, Download } from "lucide-react";
import Navigation from "@/components/navigation/Navigation";
import Footer from "@/components/Footer";
import ChatbotLauncher from "@/components/ChatbotLauncher";
import { Link } from "react-router-dom";
import { useToast } from "@/hooks/use-toast";
import { generateWebsiteAuditPDF } from "@/utils/websiteAuditPDFGenerator";
import { processUrl } from "@/utils/urlUtils";

export type WebsiteAuditData = {
  websiteUrl: string;
  businessName: string;
  contactName: string;
  contactEmail: string;
  industry: string;
  targetAudience: string;
  currentIssues: string[];
  improvementGoals: string[];
  gdprConsent: boolean;
};

export default function WebsiteAudit() {
  const [results, setResults] = useState<WebsiteAuditData | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [auditData, setAuditData] = useState<WebsiteAuditData>({
    websiteUrl: "",
    businessName: "",
    contactName: "",
    contactEmail: "",
    industry: "",
    targetAudience: "",
    currentIssues: [],
    improvementGoals: [],
    gdprConsent: false,
  });
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!auditData.gdprConsent) {
      toast({
        title: "Consent Required",
        description: "Please consent to GDPR data processing to continue.",
        variant: "destructive",
      });
      return;
    }

    const processedUrl = processUrl(auditData.websiteUrl);

    setIsLoading(true);
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 3000));
      setResults({
        ...auditData,
        websiteUrl: processedUrl,
      });
    } catch (error) {
      console.error("Error:", error);
      toast({
        title: "Error",
        description: "An error occurred. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  const calculateOverallScore = () => {
    // Simulate comprehensive website audit scoring
    const baseScore = Math.floor(Math.random() * 30) + 50; // 50-80 base
    const issuesPenalty = (auditData.currentIssues.length * 5);
    const goalsBonus = (auditData.improvementGoals.length * 2);
    return Math.min(100, Math.max(30, baseScore - issuesPenalty + goalsBonus));
  };

  const handleDownloadPDF = async () => {
    if (!results) return;
    
    try {
      const score = calculateOverallScore();
      await generateWebsiteAuditPDF(results, score, "/lovable-uploads/87c7e72a-88ad-4a5e-bd58-1bff5a3dee6b.png");
      toast({
        title: "PDF Downloaded",
        description: "Your website audit report has been downloaded successfully.",
      });
    } catch (error) {
      console.error("Error generating PDF:", error);
      toast({
        title: "Error",
        description: "Failed to generate PDF report.",
        variant: "destructive",
      });
    }
  };

  if (results) {
    const score = calculateOverallScore();
    const getScoreColor = (score: number) => {
      if (score >= 80) return "text-brand-lime";
      if (score >= 60) return "text-yellow-600";
      return "text-red-600";
    };

    return (
      <div className="min-h-screen bg-brand-navy">
        <Navigation />

        <div className="max-w-5xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
          {/* Results Header */}
          <Card className="bg-gradient-to-r from-brand-navy to-brand-navy-light border-brand-silver/20 mb-8">
            <CardHeader>
              <div className="flex justify-between items-center">
                <div>
                  <CardTitle className="text-2xl font-bold text-white mb-2">
                    Website Audit Report
                  </CardTitle>
                  <p className="text-brand-silver">
                    Analysis for {results.businessName} • {results.targetAudience}
                  </p>
                </div>
                <div className="text-center">
                  <div className={`text-4xl font-bold ${getScoreColor(score)}`}>{score}</div>
                  <div className="text-brand-silver text-sm">Overall Score</div>
                  <div className="text-xs text-brand-silver mt-1">Performance, UX, Security & SEO</div>
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

          {/* Audit Categories */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            <Card className="bg-brand-navy-light border-brand-silver/20">
              <CardHeader className="text-center">
                <Zap className="h-8 w-8 text-brand-lime mx-auto mb-2" />
                <CardTitle className="text-white">Performance</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <div className="text-2xl font-bold text-white mb-2">{Math.floor(Math.random() * 20) + 70}</div>
                <p className="text-brand-silver text-sm">Page Speed & Loading</p>
              </CardContent>
            </Card>

            <Card className="bg-brand-navy-light border-brand-silver/20">
              <CardHeader className="text-center">
                <Eye className="h-8 w-8 text-brand-lime mx-auto mb-2" />
                <CardTitle className="text-white">User Experience</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <div className="text-2xl font-bold text-white mb-2">{Math.floor(Math.random() * 25) + 65}</div>
                <p className="text-brand-silver text-sm">Navigation & Design</p>
              </CardContent>
            </Card>

            <Card className="bg-brand-navy-light border-brand-silver/20">
              <CardHeader className="text-center">
                <Shield className="h-8 w-8 text-brand-lime mx-auto mb-2" />
                <CardTitle className="text-white">Security</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <div className="text-2xl font-bold text-white mb-2">{Math.floor(Math.random() * 20) + 75}</div>
                <p className="text-brand-silver text-sm">HTTPS & Protection</p>
              </CardContent>
            </Card>

            <Card className="bg-brand-navy-light border-brand-silver/20">
              <CardHeader className="text-center">
                <Search className="h-8 w-8 text-brand-lime mx-auto mb-2" />
                <CardTitle className="text-white">SEO</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <div className="text-2xl font-bold text-white mb-2">{Math.floor(Math.random() * 30) + 55}</div>
                <p className="text-brand-silver text-sm">Search Optimization</p>
              </CardContent>
            </Card>
          </div>

          {/* Recommendations */}
          <Card className="bg-brand-navy-light border-brand-silver/20 mb-8">
            <CardHeader>
              <CardTitle className="text-white">Priority Recommendations</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 rounded-full bg-red-500 mt-2"></div>
                  <div>
                    <h4 className="text-white font-semibold">Critical: Improve Page Loading Speed</h4>
                    <p className="text-brand-silver text-sm">Optimize images and reduce server response time to improve user experience.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 rounded-full bg-brand-lime mt-2"></div>
                  <div>
                    <h4 className="text-white font-semibold">High: Enhance Mobile Responsiveness</h4>
                    <p className="text-brand-silver text-sm">Improve mobile layout and touch targets for better mobile user experience.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 rounded-full bg-red-500 mt-2"></div>
                  <div>
                    <h4 className="text-white font-semibold">Medium: Optimize SEO Meta Tags</h4>
                    <p className="text-brand-silver text-sm">Add missing meta descriptions and improve title tags for better search visibility.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 rounded-full bg-brand-lime mt-2"></div>
                  <div>
                    <h4 className="text-white font-semibold">Low: Add Structured Data</h4>
                    <p className="text-brand-silver text-sm">Implement schema markup to help search engines understand your content better.</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Next Steps */}
          <Card className="bg-brand-navy-light border-brand-silver/20">
            <CardHeader>
              <CardTitle className="text-white">Next Steps</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-brand-silver mb-4">
                Ready to implement these improvements? Our team can help you optimize your website for better performance, user experience, and search rankings.
              </p>
              <Link to="/consultation">
                <Button className="bg-brand-lime text-brand-navy hover:bg-brand-lime-dark font-semibold">
                  Free 30min Consultation - Let's Talk How We Help
                </Button>
              </Link>
            </CardContent>
          </Card>
        </div>

        <div className="max-w-5xl mx-auto px-4 py-8 sm:px-6 lg:px-8 text-center">
          <Link to="/free-tools" className="text-brand-lime hover:underline flex items-center justify-center gap-2">
            <ArrowLeft /> Back to Free Tools
          </Link>
        </div>

        <Footer />
        <ChatbotLauncher />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-brand-navy">
      <Navigation />

      {/* Hero Section */}
      <div className="max-w-5xl mx-auto px-4 py-12 sm:px-6 lg:px-8 text-center">
        <h1 className="text-3xl font-bold text-white sm:text-4xl mb-4">
          Free Website Audit
        </h1>
        <p className="text-lg text-brand-silver mb-4">
          Get a comprehensive analysis of your website's performance, user experience, security, and SEO.
        </p>
        <div className="bg-brand-navy-light border border-brand-silver/20 rounded-xl p-6 max-w-3xl mx-auto mb-8">
          <h3 className="text-lg font-semibold text-brand-lime mb-2">What is a Website Audit?</h3>
          <p className="text-brand-silver">
            A website audit evaluates your site's overall health including loading speed, mobile responsiveness, security, 
            SEO optimization, and user experience to identify areas for improvement.
          </p>
        </div>
      </div>

      {/* Form Section */}
      <div className="max-w-5xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
        <Card className="bg-brand-navy-light border border-brand-silver/20">
          <CardContent className="p-6">
            {isLoading ? (
              <div className="text-center py-8">
                <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-brand-lime mx-auto mb-4"></div>
                <p className="text-white mb-2">Analyzing your website...</p>
                <div className="max-w-md mx-auto">
                  <div className="text-sm text-brand-silver mb-2">Checking performance metrics...</div>
                  <Progress value={33} className="mb-2" />
                  <div className="text-sm text-brand-silver mb-2">Evaluating user experience...</div>
                  <Progress value={66} className="mb-2" />
                  <div className="text-sm text-brand-silver mb-2">Analyzing SEO factors...</div>
                  <Progress value={100} />
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-white font-semibold mb-2">Website URL</label>
                    <Input
                      type="text"
                      placeholder="example.com or www.example.com"
                      required
                      value={auditData.websiteUrl}
                      onChange={(e) => setAuditData({ ...auditData, websiteUrl: e.target.value })}
                      className="bg-brand-navy border-brand-silver/20 text-white placeholder-brand-silver/50"
                    />
                  </div>
                  <div>
                    <label className="block text-white font-semibold mb-2">Business Name</label>
                    <Input
                      type="text"
                      placeholder="Your Business Name"
                      required
                      value={auditData.businessName}
                      onChange={(e) => setAuditData({ ...auditData, businessName: e.target.value })}
                      className="bg-brand-navy border-brand-silver/20 text-white placeholder-brand-silver/50"
                    />
                  </div>
                  <div>
                    <label className="block text-white font-semibold mb-2">Contact Name</label>
                    <Input
                      type="text"
                      placeholder="Your Name"
                      required
                      value={auditData.contactName}
                      onChange={(e) => setAuditData({ ...auditData, contactName: e.target.value })}
                      className="bg-brand-navy border-brand-silver/20 text-white placeholder-brand-silver/50"
                    />
                  </div>
                  <div>
                    <label className="block text-white font-semibold mb-2">Email Address</label>
                    <Input
                      type="email"
                      placeholder="your@email.com"
                      required
                      value={auditData.contactEmail}
                      onChange={(e) => setAuditData({ ...auditData, contactEmail: e.target.value })}
                      className="bg-brand-navy border-brand-silver/20 text-white placeholder-brand-silver/50"
                    />
                  </div>
                  <div>
                    <label className="block text-white font-semibold mb-2">Industry</label>
                    <Input
                      type="text"
                      placeholder="e.g., Retail, Healthcare, Tourism"
                      required
                      value={auditData.industry}
                      onChange={(e) => setAuditData({ ...auditData, industry: e.target.value })}
                      className="bg-brand-navy border-brand-silver/20 text-white placeholder-brand-silver/50"
                    />
                  </div>
                  <div>
                    <label className="block text-white font-semibold mb-2">Target Audience</label>
                    <Input
                      type="text"
                      placeholder="Who are your main customers?"
                      required
                      value={auditData.targetAudience}
                      onChange={(e) => setAuditData({ ...auditData, targetAudience: e.target.value })}
                      className="bg-brand-navy border-brand-silver/20 text-white placeholder-brand-silver/50"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-white font-semibold mb-2">Current Website Issues (select all that apply)</label>
                  <div className="grid md:grid-cols-2 gap-3">
                    {[
                      "Slow loading speed",
                      "Poor mobile experience",
                      "Low search rankings",
                      "High bounce rate",
                      "Security concerns",
                      "Outdated design",
                      "Poor navigation",
                      "Lack of conversions"
                    ].map((issue) => (
                      <label key={issue} className="flex items-center space-x-2">
                        <input
                          type="checkbox"
                          checked={auditData.currentIssues.includes(issue)}
                          onChange={(e) => {
                            if (e.target.checked) {
                              setAuditData({
                                ...auditData,
                                currentIssues: [...auditData.currentIssues, issue]
                              });
                            } else {
                              setAuditData({
                                ...auditData,
                                currentIssues: auditData.currentIssues.filter(i => i !== issue)
                              });
                            }
                          }}
                          className="rounded"
                        />
                        <span className="text-brand-silver">{issue}</span>
                      </label>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="block text-white font-semibold mb-2">Improvement Goals (select all that apply)</label>
                  <div className="grid md:grid-cols-2 gap-3">
                    {[
                      "Increase website traffic",
                      "Improve conversion rates",
                      "Better search rankings",
                      "Enhanced user experience",
                      "Mobile optimization",
                      "Faster loading times",
                      "Better security",
                      "Modern design refresh"
                    ].map((goal) => (
                      <label key={goal} className="flex items-center space-x-2">
                        <input
                          type="checkbox"
                          checked={auditData.improvementGoals.includes(goal)}
                          onChange={(e) => {
                            if (e.target.checked) {
                              setAuditData({
                                ...auditData,
                                improvementGoals: [...auditData.improvementGoals, goal]
                              });
                            } else {
                              setAuditData({
                                ...auditData,
                                improvementGoals: auditData.improvementGoals.filter(g => g !== goal)
                              });
                            }
                          }}
                          className="rounded"
                        />
                        <span className="text-brand-silver">{goal}</span>
                      </label>
                    ))}
                  </div>
                </div>

                <div className="bg-brand-navy border border-brand-silver/20 rounded-lg p-4">
                  <label className="flex items-start space-x-3">
                    <input
                      type="checkbox"
                      checked={auditData.gdprConsent}
                      onChange={(e) => setAuditData({ ...auditData, gdprConsent: e.target.checked })}
                      className="mt-1 rounded"
                      required
                    />
                    <span className="text-brand-silver text-sm">
                      I consent to the processing of my personal data for the purpose of receiving this website audit 
                      and marketing communications from 11th Temple Solutions. You can unsubscribe at any time.
                    </span>
                  </label>
                </div>

                <Button
                  type="submit"
                  className="w-full bg-brand-lime text-brand-navy hover:bg-brand-lime-dark font-semibold py-3"
                >
                  <Globe className="mr-2 h-5 w-5" />
                  Start Website Audit
                </Button>
              </form>
            )}
          </CardContent>
        </Card>
      </div>

      {/* Back to Tools */}
      <div className="max-w-5xl mx-auto px-4 py-8 sm:px-6 lg:px-8 text-center">
        <Link to="/free-tools" className="text-brand-lime hover:underline flex items-center justify-center gap-2">
          <ArrowLeft /> Back to Free Tools
        </Link>
      </div>

      <Footer />
      <ChatbotLauncher />
    </div>
  );
}