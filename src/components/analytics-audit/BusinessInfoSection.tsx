
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { AuditData } from "@/pages/AnalyticsAudit";
import { industries } from "@/data/industries";

interface BusinessInfoSectionProps {
  formData: AuditData;
  setFormData: React.Dispatch<React.SetStateAction<AuditData>>;
}

const BusinessInfoSection = ({ formData, setFormData }: BusinessInfoSectionProps) => {
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
            className="bg-brand-navy-light border-brand-silver/30 text-white placeholder:text-brand-silver focus:border-brand-lime focus:ring-brand-lime"
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
            className="bg-brand-navy-light border-brand-silver/30 text-white placeholder:text-brand-silver focus:border-brand-lime focus:ring-brand-lime"
          />
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-4 mt-4">
        <div>
          <Label htmlFor="industry" className="text-brand-silver">Industry *</Label>
          <Select onValueChange={(value) => setFormData(prev => ({ ...prev, industry: value }))}>
            <SelectTrigger className="bg-brand-navy-light border-brand-silver/30 text-white focus:border-brand-lime focus:ring-brand-lime">
              <SelectValue placeholder="Select your industry" />
            </SelectTrigger>
            <SelectContent>
              {industries.map((industry) => (
                <SelectItem key={industry} value={industry.toLowerCase().replace(/[^a-z0-9]/g, '-')}>
                  {industry}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
        <div>
          <Label htmlFor="targetLocation" className="text-brand-silver">Business Location *</Label>
          <Input
            id="targetLocation"
            placeholder="City, Region"
            value={formData.targetLocation}
            onChange={(e) => setFormData(prev => ({ ...prev, targetLocation: e.target.value }))}
            required
            className="bg-brand-navy-light border-brand-silver/30 text-white placeholder:text-brand-silver focus:border-brand-lime focus:ring-brand-lime"
          />
        </div>
      </div>

      <div className="mt-4">
        <Label htmlFor="monthlyVisitors" className="text-brand-silver">Monthly Website Visitors</Label>
        <Select onValueChange={(value) => setFormData(prev => ({ ...prev, monthlyVisitors: value }))}>
          <SelectTrigger className="bg-brand-navy-light border-brand-silver/30 text-white focus:border-brand-lime focus:ring-brand-lime">
            <SelectValue placeholder="Select visitor range" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="0-500">0 - 500</SelectItem>
            <SelectItem value="500-2000">500 - 2,000</SelectItem>
            <SelectItem value="2000-5000">2,000 - 5,000</SelectItem>
            <SelectItem value="5000-10000">5,000 - 10,000</SelectItem>
            <SelectItem value="10000+">10,000+</SelectItem>
          </SelectContent>
        </Select>
      </div>
    </div>
  );
};

export default BusinessInfoSection;
