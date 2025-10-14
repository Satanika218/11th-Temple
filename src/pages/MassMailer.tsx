import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Mail, Users, MapPin, Send, Upload, Download, Eye, Settings } from "lucide-react";
import Navigation from "@/components/navigation/Navigation";
import Footer from "@/components/Footer";
import { useToast } from "@/hooks/use-toast";

const MassMailer = () => {
  const { toast } = useToast();
  
  const [campaign, setCampaign] = useState({
    name: "",
    subject: "",
    content: "",
    region: "",
    businessType: "",
    template: ""
  });

  const [recipients, setRecipients] = useState({
    total: 0,
    powys: 0,
    shropshire: 0,
    wales: 0,
    herefordshire: 0
  });

  const regions = [
    { value: "all", label: "All Regions (Powys, Shropshire, Wales, Herefordshire)" },
    { value: "powys", label: "Powys Only" },
    { value: "shropshire", label: "Shropshire Only" },
    { value: "wales", label: "Wales (excluding Powys)" },
    { value: "herefordshire", label: "Herefordshire Only" },
    { value: "border-counties", label: "Border Counties (Powys + Shropshire + Herefordshire)" }
  ];

  const businessTypes = [
    { value: "all", label: "All Business Types" },
    { value: "agriculture", label: "Agriculture & Farming" },
    { value: "manufacturing", label: "Manufacturing" },
    { value: "retail", label: "Retail & E-commerce" },
    { value: "hospitality", label: "Tourism & Hospitality" },
    { value: "professional", label: "Professional Services" },
    { value: "construction", label: "Construction & Trades" },
    { value: "healthcare", label: "Healthcare & Care" },
    { value: "education", label: "Education & Training" }
  ];

  const emailTemplates = [
    {
      id: "ai-introduction",
      name: "AI Solutions Introduction",
      subject: "Save 10+ Hours Weekly: AI Solutions for {BusinessType} in {Region}",
      content: `Dear {BusinessOwner},

I hope this message finds you well. I'm Dan from 11th Temple Solutions, and I'm reaching out because I believe we can help your {BusinessType} business save significant time and money through practical AI and automation solutions.

**Why am I contacting you?**
We specialize in helping businesses across {Region} implement simple technology solutions that:
• Save 10-15 hours per week on administrative tasks
• Reduce operational costs by 20-40%
• Improve customer service without hiring additional staff
• Ensure GDPR compliance and data security

**What makes us different:**
• We speak plain English, not tech jargon
• We train your existing staff (no need to hire specialists)
• We provide ongoing support from our {Region} base
• We offer free consultations with no pressure

**Recent Success Stories in {Region}:**
• A Powys manufacturer reduced equipment downtime by 60%
• A Shropshire retailer cut inventory costs by £150,000 annually
• A Herefordshire farm improved yields by 15% using AI monitoring

**Free 30-Minute Consultation:**
I'd love to show you exactly how these solutions could work for your business. No sales pitch - just practical advice tailored to your specific challenges.

Would you be interested in a brief conversation? I can work around your schedule, including evenings and weekends.

Best regards,
Dan Armour
11th Temple Solutions
📧 Hello@11thtemplesolutions.com
📞 +44 7312 190 728
🌐 www.11thtemplesolutions.com

P.S. We're offering free digital skills assessments for {Region} businesses throughout October. This alone could save you thousands in training costs.`
    },
    {
      id: "gdpr-compliance",
      name: "GDPR Compliance Alert",
      subject: "URGENT: GDPR Compliance Check for {Region} Businesses",
      content: `Dear Business Owner,

With GDPR fines reaching £17.5 million and 73% of UK SMEs experiencing data breaches, I wanted to reach out with a quick compliance check for your {BusinessType} business.

**Are you confident about:**
✓ Where all your customer data is stored?
✓ How long you keep personal information?
✓ Your staff's understanding of data protection?
✓ Your procedures if a breach occurs?

**Why This Matters for {Region} Businesses:**
Local businesses often handle customer data differently than large corporations, but the legal requirements are exactly the same. One mistake can result in devastating fines.

**Free GDPR Health Check:**
We're offering complimentary GDPR assessments for {Region} businesses. This 30-minute review could save you from costly compliance issues.

**What We'll Cover:**
• Current compliance status
• Simple fixes for common issues
• Staff training recommendations
• Affordable ongoing protection

No obligation - just practical advice to protect your business.

Book your free assessment: Hello@11thtemplesolutions.com

Best regards,
Dan Armour
11th Temple Solutions
GDPR Compliance Specialist`
    },
    {
      id: "digital-skills-training",
      name: "Digital Skills Training",
      subject: "Train Your Team: Digital Skills Program for {Region} Businesses",
      content: `Hello,

Is your team confident with technology, or do you find yourself constantly helping with "computer problems"?

**The Challenge:**
60% of UK workers can't complete essential digital tasks. This creates security risks, slows productivity, and frustrates everyone involved.

**The Solution:**
We train someone from your team to become your internal "tech champion" - your go-to person for technology help and training.

**Why This Works:**
• Your staff learn from someone they trust
• Knowledge stays in your business
• Ongoing support reduces technology anxiety
• Costs less than hiring specialists

**Perfect for {Region} Businesses:**
We understand rural and border county challenges. Our training works around your schedule and focuses on practical skills your team actually needs.

**What's Included:**
• 2-4 week training program for your chosen champion
• Train-the-trainer skills so they can help colleagues
• Ongoing support and resources
• Backup training for a second person

**Free Consultation:**
Let's discuss how this could work for your {BusinessType} business. No pressure - just practical advice.

Contact: Hello@11thtemplesolutions.com or +44 7312 190 728

Best regards,
Dan Armour
11th Temple Solutions
Digital Skills Training Specialist`
    }
  ];

  const handleTemplateSelect = (templateId: string) => {
    const template = emailTemplates.find(t => t.id === templateId);
    if (template) {
      setCampaign({
        ...campaign,
        template: templateId,
        subject: template.subject,
        content: template.content
      });
    }
  };

  const updateRecipientCount = () => {
    // Simulated recipient counts based on region and business type
    const baseCounts = {
      powys: 2500,
      shropshire: 4200,
      wales: 15000,
      herefordshire: 1800
    };

    let total = 0;
    if (campaign.region === "all") {
      total = Object.values(baseCounts).reduce((sum, count) => sum + count, 0);
    } else if (campaign.region === "border-counties") {
      total = baseCounts.powys + baseCounts.shropshire + baseCounts.herefordshire;
    } else if (baseCounts[campaign.region as keyof typeof baseCounts]) {
      total = baseCounts[campaign.region as keyof typeof baseCounts];
    }

    // Adjust for business type (rough estimates)
    if (campaign.businessType !== "all" && campaign.businessType !== "") {
      total = Math.floor(total * 0.15); // Assume each business type is ~15% of total
    }

    setRecipients({
      total,
      powys: campaign.region === "all" || campaign.region === "powys" ? baseCounts.powys : 0,
      shropshire: campaign.region === "all" || campaign.region === "shropshire" ? baseCounts.shropshire : 0,
      wales: campaign.region === "all" || campaign.region === "wales" ? baseCounts.wales : 0,
      herefordshire: campaign.region === "all" || campaign.region === "herefordshire" ? baseCounts.herefordshire : 0
    });
  };

  const handlePreview = () => {
    if (!campaign.subject || !campaign.content) {
      toast({
        title: "Preview Error",
        description: "Please select a template or enter subject and content first.",
        variant: "destructive"
      });
      return;
    }

    // Open preview in new window
    const previewWindow = window.open("", "_blank", "width=800,height=600");
    if (previewWindow) {
      previewWindow.document.write(`
        <html>
          <head>
            <title>Email Preview</title>
            <style>
              body { font-family: Arial, sans-serif; padding: 20px; line-height: 1.6; }
              .email-container { max-width: 600px; margin: 0 auto; border: 1px solid #ddd; padding: 20px; }
              .subject { font-weight: bold; font-size: 18px; margin-bottom: 20px; color: #333; }
              .content { white-space: pre-wrap; }
            </style>
          </head>
          <body>
            <div class="email-container">
              <div class="subject">Subject: ${campaign.subject}</div>
              <div class="content">${campaign.content}</div>
            </div>
          </body>
        </html>
      `);
      previewWindow.document.close();
    }
  };

  const handleSendCampaign = () => {
    if (!campaign.name || !campaign.subject || !campaign.content || !campaign.region) {
      toast({
        title: "Campaign Error",
        description: "Please fill in all required fields before sending.",
        variant: "destructive"
      });
      return;
    }

    // In a real implementation, this would integrate with email service
    toast({
      title: "Campaign Scheduled",
      description: `Your campaign "${campaign.name}" has been scheduled to send to ${recipients.total} recipients.`,
    });
  };

  return (
    <div className="min-h-screen bg-brand-navy">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 purple-gradient relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center animate-fade-in">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              Admin <span className="text-brand-lime">Mass Mailer</span>
            </h1>
            <p className="text-xl text-white mb-8 max-w-3xl mx-auto">
              Private email campaign system for business outreach
            </p>
            <p className="text-lg text-white/80 max-w-2xl mx-auto">
              ⚠️ Admin-only tool - Not accessible to public visitors
            </p>
          </div>
        </div>
      </section>

      {/* Campaign Builder */}
      <section className="py-20 bg-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-8">
            
            {/* Campaign Setup */}
            <Card className="lg:col-span-2 bg-white shadow-xl">
              <CardHeader className="bg-brand-purple text-white">
                <CardTitle className="text-2xl font-bold flex items-center">
                  <Mail className="mr-3 h-6 w-6" />
                  Campaign Builder
                </CardTitle>
              </CardHeader>
              <CardContent className="p-8 space-y-6">
                
                {/* Campaign Name */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Campaign Name *
                  </label>
                  <Input
                    value={campaign.name}
                    onChange={(e) => setCampaign({...campaign, name: e.target.value})}
                    placeholder="e.g., October AI Solutions Outreach"
                    className="w-full"
                  />
                </div>

                {/* Template Selection */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Email Template
                  </label>
                  <Select onValueChange={handleTemplateSelect}>
                    <SelectTrigger>
                      <SelectValue placeholder="Choose a template or create custom" />
                    </SelectTrigger>
                    <SelectContent>
                      {emailTemplates.map((template) => (
                        <SelectItem key={template.id} value={template.id}>
                          {template.name}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                {/* Region Selection */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Target Region *
                  </label>
                  <Select onValueChange={(value) => {
                    setCampaign({...campaign, region: value});
                    setTimeout(updateRecipientCount, 100);
                  }}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select target region" />
                    </SelectTrigger>
                    <SelectContent>
                      {regions.map((region) => (
                        <SelectItem key={region.value} value={region.value}>
                          {region.label}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                {/* Business Type */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Business Type
                  </label>
                  <Select onValueChange={(value) => {
                    setCampaign({...campaign, businessType: value});
                    setTimeout(updateRecipientCount, 100);
                  }}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select business type (optional)" />
                    </SelectTrigger>
                    <SelectContent>
                      {businessTypes.map((type) => (
                        <SelectItem key={type.value} value={type.value}>
                          {type.label}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                {/* Subject Line */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Subject Line *
                  </label>
                  <Input
                    value={campaign.subject}
                    onChange={(e) => setCampaign({...campaign, subject: e.target.value})}
                    placeholder="Enter email subject"
                    className="w-full"
                  />
                  <p className="text-xs text-gray-500 mt-1">
                    Use {"{BusinessType}"} and {"{Region}"} for personalization
                  </p>
                </div>

                {/* Email Content */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Email Content *
                  </label>
                  <Textarea
                    value={campaign.content}
                    onChange={(e) => setCampaign({...campaign, content: e.target.value})}
                    placeholder="Enter your email content..."
                    rows={12}
                    className="w-full"
                  />
                  <p className="text-xs text-gray-500 mt-1">
                    Available variables: {"{BusinessOwner}"}, {"{BusinessType}"}, {"{Region}"}
                  </p>
                </div>

                {/* Action Buttons */}
                <div className="flex flex-wrap gap-4 pt-4">
                  <Button
                    onClick={handlePreview}
                    variant="outline"
                    className="flex items-center"
                  >
                    <Eye className="mr-2 h-4 w-4" />
                    Preview Email
                  </Button>
                  
                  <Button
                    onClick={handleSendCampaign}
                    className="bg-brand-lime text-brand-navy hover:bg-brand-lime/90 flex items-center"
                  >
                    <Send className="mr-2 h-4 w-4" />
                    Schedule Campaign
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Campaign Stats & Recipients */}
            <div className="space-y-6">
              
              {/* Recipient Count */}
              <Card className="bg-white shadow-xl">
                <CardHeader className="bg-brand-navy text-white">
                  <CardTitle className="text-xl font-bold flex items-center">
                    <Users className="mr-2 h-5 w-5" />
                    Target Audience
                  </CardTitle>
                </CardHeader>
                <CardContent className="p-6">
                  <div className="text-center mb-4">
                    <div className="text-4xl font-bold text-brand-purple mb-2">
                      {recipients.total.toLocaleString()}
                    </div>
                    <p className="text-gray-600">Total Recipients</p>
                  </div>
                  
                  {recipients.total > 0 && (
                    <div className="space-y-3">
                      {recipients.powys > 0 && (
                        <div className="flex justify-between">
                          <span className="text-sm text-gray-600">Powys:</span>
                          <span className="font-semibold">{recipients.powys.toLocaleString()}</span>
                        </div>
                      )}
                      {recipients.shropshire > 0 && (
                        <div className="flex justify-between">
                          <span className="text-sm text-gray-600">Shropshire:</span>
                          <span className="font-semibold">{recipients.shropshire.toLocaleString()}</span>
                        </div>
                      )}
                      {recipients.wales > 0 && (
                        <div className="flex justify-between">
                          <span className="text-sm text-gray-600">Wales:</span>
                          <span className="font-semibold">{recipients.wales.toLocaleString()}</span>
                        </div>
                      )}
                      {recipients.herefordshire > 0 && (
                        <div className="flex justify-between">
                          <span className="text-sm text-gray-600">Herefordshire:</span>
                          <span className="font-semibold">{recipients.herefordshire.toLocaleString()}</span>
                        </div>
                      )}
                    </div>
                  )}
                </CardContent>
              </Card>

              {/* Campaign Templates */}
              <Card className="bg-white shadow-xl">
                <CardHeader className="bg-brand-lime text-brand-navy">
                  <CardTitle className="text-xl font-bold flex items-center">
                    <Settings className="mr-2 h-5 w-5" />
                    Quick Templates
                  </CardTitle>
                </CardHeader>
                <CardContent className="p-6">
                  <div className="space-y-3">
                    {emailTemplates.map((template) => (
                      <Button
                        key={template.id}
                        onClick={() => handleTemplateSelect(template.id)}
                        variant="outline"
                        className="w-full text-left justify-start h-auto p-3"
                      >
                        <div>
                          <div className="font-semibold text-sm">{template.name}</div>
                          <div className="text-xs text-gray-500 mt-1">
                            {template.subject.substring(0, 40)}...
                          </div>
                        </div>
                      </Button>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Campaign Tips */}
              <Card className="bg-white shadow-xl">
                <CardHeader className="bg-gradient-to-r from-green-600 to-blue-600 text-white">
                  <CardTitle className="text-lg font-bold">💡 Campaign Tips</CardTitle>
                </CardHeader>
                <CardContent className="p-6">
                  <div className="space-y-3 text-sm">
                    <div>
                      <strong>Best Send Times:</strong>
                      <p className="text-gray-600">Tuesday-Thursday, 10am-2pm for business emails</p>
                    </div>
                    <div>
                      <strong>Subject Lines:</strong>
                      <p className="text-gray-600">Keep under 50 characters, include location/benefit</p>
                    </div>
                    <div>
                      <strong>Personalization:</strong>
                      <p className="text-gray-600">Use region and business type variables for better engagement</p>
                    </div>
                    <div>
                      <strong>Follow-up:</strong>
                      <p className="text-gray-600">Wait 1-2 weeks between campaigns to same audience</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default MassMailer;