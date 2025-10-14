
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { SEOAuditData } from "@/pages/SEOAudit";

interface SEOGoalsAndIssuesSectionProps {
  formData: SEOAuditData;
  setFormData: React.Dispatch<React.SetStateAction<SEOAuditData>>;
}

const seoGoals = [
  "Improve local search rankings",
  "Increase organic traffic",
  "Beat specific competitors",
  "Rank for branded keywords",
  "Improve mobile search visibility",
  "Enhance local business listings"
];

const currentIssues = [
  "Low search rankings",
  "Website not mobile-friendly",
  "Slow page loading speed",
  "Missing meta descriptions",
  "Poor local SEO presence",
  "Outdated content"
];

const SEOGoalsAndIssuesSection = ({ formData, setFormData }: SEOGoalsAndIssuesSectionProps) => {
  const handleGoalChange = (goal: string, checked: boolean) => {
    setFormData(prev => ({
      ...prev,
      seoGoals: checked 
        ? [...prev.seoGoals, goal]
        : prev.seoGoals.filter(g => g !== goal)
    }));
  };

  const handleIssueChange = (issue: string, checked: boolean) => {
    setFormData(prev => ({
      ...prev,
      currentIssues: checked 
        ? [...prev.currentIssues, issue]
        : prev.currentIssues.filter(i => i !== issue)
    }));
  };

  return (
    <div className="space-y-6">
      <div>
        <Label className="text-brand-silver mb-3 block">SEO Goals (select all that apply)</Label>
        <div className="grid md:grid-cols-2 gap-3">
          {seoGoals.map((goal) => (
            <div key={goal} className="flex items-center space-x-2">
              <Checkbox 
                id={goal}
                checked={formData.seoGoals.includes(goal)}
                onCheckedChange={(checked) => handleGoalChange(goal, checked as boolean)}
              />
              <Label htmlFor={goal} className="text-brand-silver text-sm">{goal}</Label>
            </div>
          ))}
        </div>
      </div>

      <div>
        <Label className="text-brand-silver mb-3 block">Current SEO Issues (select all that apply)</Label>
        <div className="grid md:grid-cols-2 gap-3">
          {currentIssues.map((issue) => (
            <div key={issue} className="flex items-center space-x-2">
              <Checkbox 
                id={issue}
                checked={formData.currentIssues.includes(issue)}
                onCheckedChange={(checked) => handleIssueChange(issue, checked as boolean)}
              />
              <Label htmlFor={issue} className="text-brand-silver text-sm">{issue}</Label>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SEOGoalsAndIssuesSection;
