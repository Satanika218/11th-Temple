
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Download } from "lucide-react";
import { industries } from "@/data/industries";

interface PDFFormData {
  name: string;
  email: string;
  company: string;
  industry: string;
  gdprConsent: boolean;
}

interface PDFDownloadFormProps {
  onSubmit: (data: PDFFormData) => void;
  isLoading?: boolean;
}

const PDFDownloadForm = ({ onSubmit, isLoading = false }: PDFDownloadFormProps) => {
  const [formData, setFormData] = useState<PDFFormData>({
    name: '',
    email: '',
    company: '',
    industry: '',
    gdprConsent: false
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.gdprConsent) {
      alert('Please consent to data processing to download the guide.');
      return;
    }
    onSubmit(formData);
  };

  return (
    <Card className="bg-brand-navy-light border-brand-silver/20 max-w-md mx-auto">
      <CardHeader>
        <CardTitle className="text-white flex items-center">
          <Download className="h-5 w-5 mr-2 text-brand-lime" />
          Download Service Guide
        </CardTitle>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <Label htmlFor="name" className="text-brand-silver">Your Name *</Label>
            <Input
              id="name"
              value={formData.name}
              onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
              required
              className="bg-brand-navy border-brand-silver/30 text-white placeholder:text-brand-silver focus:border-brand-lime focus:ring-brand-lime"
            />
          </div>
          
          <div>
            <Label htmlFor="email" className="text-brand-silver">Email Address *</Label>
            <Input
              id="email"
              type="email"
              value={formData.email}
              onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
              required
              className="bg-brand-navy border-brand-silver/30 text-white placeholder:text-brand-silver focus:border-brand-lime focus:ring-brand-lime"
            />
          </div>
          
          <div>
            <Label htmlFor="company" className="text-brand-silver">Company Name *</Label>
            <Input
              id="company"
              value={formData.company}
              onChange={(e) => setFormData(prev => ({ ...prev, company: e.target.value }))}
              required
              className="bg-brand-navy border-brand-silver/30 text-white placeholder:text-brand-silver focus:border-brand-lime focus:ring-brand-lime"
            />
          </div>
          
          <div>
            <Label htmlFor="industry" className="text-brand-silver">Industry *</Label>
            <Select value={formData.industry} onValueChange={(value) => setFormData(prev => ({ ...prev, industry: value }))}>
              <SelectTrigger className="bg-brand-navy border-brand-silver/30 text-white focus:border-brand-lime focus:ring-brand-lime">
                <SelectValue placeholder="Select your industry" />
              </SelectTrigger>
              <SelectContent className="bg-brand-navy border-brand-silver/30">
                {industries.map((industry) => (
                  <SelectItem key={industry} value={industry} className="text-white hover:bg-brand-navy-light">
                    {industry}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
          
          <div className="border-t border-brand-silver/20 pt-4 bg-white/10 rounded-lg p-6">
            <div className="flex items-start space-x-3">
              <Checkbox 
                id="gdprConsent"
                checked={formData.gdprConsent}
                onCheckedChange={(checked) => setFormData(prev => ({ ...prev, gdprConsent: checked as boolean }))}
                required
              />
              <div className="flex-1">
                <Label htmlFor="gdprConsent" className="text-white text-sm leading-relaxed font-medium">
                  <span className="text-brand-lime font-bold">REQUIRED:</span> I consent to 11th Temple processing my personal data to provide the service guide and contact me about relevant services. 
                  You can withdraw consent at any time. View our{" "}
                  <a href="/privacy" className="text-brand-lime hover:text-brand-lime-dark underline font-semibold">
                    Privacy Policy
                  </a>{" "}
                  for more information. *
                </Label>
              </div>
            </div>
          </div>
          
          <Button 
            type="submit" 
            className="w-full bg-brand-lime text-brand-navy hover:bg-brand-lime-dark font-semibold"
            disabled={isLoading}
          >
            {isLoading ? 'Generating PDF...' : 'Download Service Guide'}
          </Button>
        </form>
      </CardContent>
    </Card>
  );
};

export default PDFDownloadForm;
