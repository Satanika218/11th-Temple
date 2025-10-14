
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { SEOAuditData } from "@/pages/SEOAudit";

interface SEOGDPRConsentSectionProps {
  formData: SEOAuditData;
  setFormData: React.Dispatch<React.SetStateAction<SEOAuditData>>;
}

const SEOGDPRConsentSection = ({ formData, setFormData }: SEOGDPRConsentSectionProps) => {
  return (
    <div className="border-t border-brand-silver/20 pt-6 bg-white/10 rounded-lg p-6">
      <div className="flex items-start space-x-3">
        <Checkbox 
          id="gdprConsent"
          checked={formData.gdprConsent}
          onCheckedChange={(checked) => setFormData(prev => ({ ...prev, gdprConsent: checked as boolean }))}
          required
          className="border-2 border-brand-lime data-[state=checked]:bg-brand-lime data-[state=checked]:border-brand-lime data-[state=checked]:text-purple-900"
        />
        <div className="flex-1">
          <Label htmlFor="gdprConsent" className="text-white text-sm leading-relaxed font-medium">
            <span className="text-brand-lime font-bold">REQUIRED:</span> I consent to 11th Temple processing my personal data to provide the SEO audit and contact me about relevant services. 
            You can withdraw consent at any time. View our{" "}
            <a href="/privacy" className="text-brand-lime hover:text-brand-lime-dark underline font-semibold">
              Privacy Policy
            </a>{" "}
            for more information. *
          </Label>
        </div>
      </div>
    </div>
  );
};

export default SEOGDPRConsentSection;
