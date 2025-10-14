
import { useState } from "react";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { SEOAuditData } from "@/pages/SEOAudit";

interface KeywordsAndCompetitorsSectionProps {
  formData: SEOAuditData;
  setFormData: React.Dispatch<React.SetStateAction<SEOAuditData>>;
}

const KeywordsAndCompetitorsSection = ({ formData, setFormData }: KeywordsAndCompetitorsSectionProps) => {
  const [keywordInput, setKeywordInput] = useState("");
  const [competitorInput, setCompetitorInput] = useState("");

  const handleKeywordAdd = () => {
    if (keywordInput.trim() && !formData.primaryKeywords.includes(keywordInput.trim())) {
      setFormData(prev => ({
        ...prev,
        primaryKeywords: [...prev.primaryKeywords, keywordInput.trim()]
      }));
      setKeywordInput("");
    }
  };

  const handleKeywordRemove = (keyword: string) => {
    setFormData(prev => ({
      ...prev,
      primaryKeywords: prev.primaryKeywords.filter(k => k !== keyword)
    }));
  };

  const handleCompetitorAdd = () => {
    if (competitorInput.trim() && !formData.competitors.includes(competitorInput.trim())) {
      setFormData(prev => ({
        ...prev,
        competitors: [...prev.competitors, competitorInput.trim()]
      }));
      setCompetitorInput("");
    }
  };

  const handleCompetitorRemove = (competitor: string) => {
    setFormData(prev => ({
      ...prev,
      competitors: prev.competitors.filter(c => c !== competitor)
    }));
  };

  return (
    <div className="space-y-6">
      <div>
        <Label className="text-brand-silver mb-3 block">Primary Keywords</Label>
        <div className="flex gap-2 mb-3">
          <Input
            placeholder="Enter a keyword"
            value={keywordInput}
            onChange={(e) => setKeywordInput(e.target.value)}
            className="bg-brand-navy-light border-brand-silver/30 text-white placeholder:text-brand-silver/60 focus:border-brand-lime focus:ring-brand-lime"
            onKeyPress={(e) => e.key === 'Enter' && (e.preventDefault(), handleKeywordAdd())}
          />
          <Button type="button" onClick={handleKeywordAdd} className="bg-brand-lime text-brand-navy">
            Add
          </Button>
        </div>
        <div className="flex flex-wrap gap-2">
          {formData.primaryKeywords.map((keyword) => (
            <span
              key={keyword}
              className="bg-brand-lime text-brand-navy px-3 py-1 rounded-full text-sm flex items-center gap-2"
            >
              {keyword}
              <button
                type="button"
                onClick={() => handleKeywordRemove(keyword)}
                className="hover:bg-brand-navy hover:text-brand-lime rounded-full w-4 h-4 flex items-center justify-center"
              >
                ×
              </button>
            </span>
          ))}
        </div>
      </div>

      <div>
        <Label className="text-brand-silver mb-3 block">Main Competitors</Label>
        <div className="flex gap-2 mb-3">
          <Input
            placeholder="Enter competitor website"
            value={competitorInput}
            onChange={(e) => setCompetitorInput(e.target.value)}
            className="bg-brand-navy-light border-brand-silver/30 text-white placeholder:text-brand-silver/60 focus:border-brand-lime focus:ring-brand-lime"
            onKeyPress={(e) => e.key === 'Enter' && (e.preventDefault(), handleCompetitorAdd())}
          />
          <Button type="button" onClick={handleCompetitorAdd} className="bg-brand-lime text-brand-navy">
            Add
          </Button>
        </div>
        <div className="flex flex-wrap gap-2">
          {formData.competitors.map((competitor) => (
            <span
              key={competitor}
              className="bg-brand-silver text-brand-navy px-3 py-1 rounded-full text-sm flex items-center gap-2"
            >
              {competitor}
              <button
                type="button"
                onClick={() => handleCompetitorRemove(competitor)}
                className="hover:bg-brand-navy hover:text-brand-silver rounded-full w-4 h-4 flex items-center justify-center"
              >
                ×
              </button>
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default KeywordsAndCompetitorsSection;
