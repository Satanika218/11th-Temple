
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { AuditData } from "@/pages/AnalyticsAudit";

interface GDPRConsentSectionProps {
  formData: AuditData;
  setFormData: React.Dispatch<React.SetStateAction<AuditData>>;
}

const GDPRConsentSection = ({ formData, setFormData }: GDPRConsentSectionProps) => {
  return (
    <div className="border-t border-brand-silver/20 pt-6 bg-white/10 rounded-lg p-6">
      <div className="flex items-start space-x-3">
        <Checkbox 
          id="gdprConsent"
          checked={formData.gdprConsent}
          onCheckedChange={(checked) => setFormData(prev => ({ ...prev, gdprConsent: checked as boolean }))}
          required
        />
        <div className="flex-1">
          <Label htmlFor="gdprConsent" className="text-white text-sm leading-relaxed font-medium">
            <span className="text-brand-lime font-bold">REQUIRED:</span> I consent to 11th Temple processing my personal data to provide the analytics audit and contact me about relevant services. 
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

export default GDPRConsentSection;
