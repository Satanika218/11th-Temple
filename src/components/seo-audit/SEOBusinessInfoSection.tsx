
import { useState } from "react";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { SEOAuditData } from "@/pages/SEOAudit";
import { industries } from "@/data/industries";

interface SEOBusinessInfoSectionProps {
  formData: SEOAuditData;
  setFormData: React.Dispatch<React.SetStateAction<SEOAuditData>>;
}

const SEOBusinessInfoSection = ({ formData, setFormData }: SEOBusinessInfoSectionProps) => {
  const [showOtherIndustry, setShowOtherIndustry] = useState(false);
  const [otherIndustry, setOtherIndustry] = useState("");

  const handleIndustryChange = (value: string) => {
    if (value === "other-specify") {
      setShowOtherIndustry(true);
      setFormData(prev => ({ ...prev, industry: "" }));
    } else {
      setShowOtherIndustry(false);
      setOtherIndustry("");
      setFormData(prev => ({ ...prev, industry: value }));
    }
  };

  return (
    <div>
      <h3 className="text-lg font-semibold text-white mb-4">Business Information</h3>
      <div className="grid md:grid-cols-2 gap-4">
        <div>
          <Label htmlFor="websiteUrl" className="text-brand-silver">Website URL *</Label>
          <Input
            id="websiteUrl"
            placeholder="example.co.uk or www.example.com"
            value={formData.websiteUrl}
            onChange={(e) => setFormData(prev => ({ ...prev, websiteUrl: e.target.value }))}
            required
            className="bg-brand-navy-light border-brand-silver/30 text-white placeholder:text-brand-silver/60 focus:border-brand-lime focus:ring-brand-lime"
          />
        </div>
        <div>
          <Label htmlFor="businessName" className="text-brand-silver">Business Name *</Label>
          <Input
            id="businessName"
            placeholder="Your Business Name"
            value={formData.businessName}
            onChange={(e) => setFormData(prev => ({ ...prev, businessName: e.target.value }))}
            required
            className="bg-brand-navy-light border-brand-silver/30 text-white placeholder:text-brand-silver/60 focus:border-brand-lime focus:ring-brand-lime"
          />
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-4 mt-4">
        <div>
          <Label htmlFor="industry" className="text-brand-silver">Industry *</Label>
          <Select onValueChange={handleIndustryChange}>
            <SelectTrigger className="bg-brand-navy-light border-brand-silver/30 text-white">
              <SelectValue placeholder="Select your industry" />
            </SelectTrigger>
            <SelectContent>
              {industries.map((industry) => (
                <SelectItem key={industry} value={industry.toLowerCase().replace(/[^a-z0-9]/g, '-')}>
                  {industry}
                </SelectItem>
              ))}
              <SelectItem value="other-specify">Other (please specify)</SelectItem>
            </SelectContent>
          </Select>
          
          {showOtherIndustry && (
            <Input
              placeholder="Please specify your industry"
              value={otherIndustry}
              onChange={(e) => {
                setOtherIndustry(e.target.value);
                setFormData(prev => ({ ...prev, industry: e.target.value }));
              }}
              className="mt-2 bg-brand-navy-light border-brand-silver/30 text-white placeholder:text-brand-silver/60 focus:border-brand-lime focus:ring-brand-lime"
              required
            />
          )}
        </div>
        <div>
          <Label htmlFor="targetLocation" className="text-brand-silver">Target Location *</Label>
          <Input
            id="targetLocation"
            placeholder="City, Region"
            value={formData.targetLocation}
            onChange={(e) => setFormData(prev => ({ ...prev, targetLocation: e.target.value }))}
            required
            className="bg-brand-navy-light border-brand-silver/30 text-white placeholder:text-brand-silver/60 focus:border-brand-lime focus:ring-brand-lime"
          />
        </div>
      </div>

      <div className="mt-4">
        <Label className="text-brand-silver">Current Search Ranking</Label>
        <Select onValueChange={(value) => setFormData(prev => ({ ...prev, currentRanking: value }))}>
          <SelectTrigger className="bg-brand-navy-light border-brand-silver/30 text-white">
            <SelectValue placeholder="How well do you rank currently?" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="page-1">Page 1 (Top 10)</SelectItem>
            <SelectItem value="page-2-3">Page 2-3 (11-30)</SelectItem>
            <SelectItem value="beyond-page-3">Beyond Page 3</SelectItem>
            <SelectItem value="not-ranking">Not ranking / Don't know</SelectItem>
          </SelectContent>
        </Select>
      </div>
    </div>
  );
};

export default SEOBusinessInfoSection;
