
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { SEOAuditData } from "@/pages/SEOAudit";

interface SEOContactInfoSectionProps {
  formData: SEOAuditData;
  setFormData: React.Dispatch<React.SetStateAction<SEOAuditData>>;
}

const SEOContactInfoSection = ({ formData, setFormData }: SEOContactInfoSectionProps) => {
  return (
    <div className="border-b border-brand-silver/20 pb-6">
      <h3 className="text-lg font-semibold text-white mb-4">Contact Information</h3>
      <div className="grid md:grid-cols-2 gap-4">
        <div>
          <Label htmlFor="contactName" className="text-brand-silver">Your Name *</Label>
          <Input
            id="contactName"
            placeholder="John Smith"
            value={formData.contactName}
            onChange={(e) => setFormData(prev => ({ ...prev, contactName: e.target.value }))}
            required
            className="bg-brand-navy-light border-brand-silver/30 text-white placeholder:text-brand-silver/60 focus:border-brand-lime focus:ring-brand-lime"
          />
        </div>
        <div>
          <Label htmlFor="contactEmail" className="text-brand-silver">Email Address *</Label>
          <Input
            id="contactEmail"
            type="email"
            placeholder="john@company.com"
            value={formData.contactEmail}
            onChange={(e) => setFormData(prev => ({ ...prev, contactEmail: e.target.value }))}
            required
            className="bg-brand-navy-light border-brand-silver/30 text-white placeholder:text-brand-silver/60 focus:border-brand-lime focus:ring-brand-lime"
          />
        </div>
      </div>
    </div>
  );
};

export default SEOContactInfoSection;
