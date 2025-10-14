
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { AuditData } from "@/pages/AnalyticsAudit";

interface GoalsAndChallengesSectionProps {
  formData: AuditData;
  setFormData: React.Dispatch<React.SetStateAction<AuditData>>;
}

const goals = [
  "Increase website traffic",
  "Improve conversion rates",
  "Generate more leads",
  "Boost local visibility",
  "Enhance user engagement",
  "Improve customer retention"
];

const challenges = [
  "Low website traffic",
  "Poor conversion rates",
  "High bounce rate",
  "Lack of local visibility",
  "Difficulty tracking ROI",
  "Understanding customer behavior"
];

const GoalsAndChallengesSection = ({ formData, setFormData }: GoalsAndChallengesSectionProps) => {
  const handleGoalChange = (goal: string, checked: boolean) => {
    setFormData(prev => ({
      ...prev,
      primaryGoals: checked 
        ? [...prev.primaryGoals, goal]
        : prev.primaryGoals.filter(g => g !== goal)
    }));
  };

  const handleChallengeChange = (challenge: string, checked: boolean) => {
    setFormData(prev => ({
      ...prev,
      currentChallenges: checked 
        ? [...prev.currentChallenges, challenge]
        : prev.currentChallenges.filter(c => c !== challenge)
    }));
  };

  return (
    <div className="space-y-6">
      <div>
        <Label className="text-brand-silver mb-3 block">Primary Goals (select all that apply)</Label>
        <div className="grid md:grid-cols-2 gap-3">
          {goals.map((goal) => (
            <div key={goal} className="flex items-center space-x-2">
              <Checkbox 
                id={goal}
                checked={formData.primaryGoals.includes(goal)}
                onCheckedChange={(checked) => handleGoalChange(goal, checked as boolean)}
              />
              <Label htmlFor={goal} className="text-brand-silver text-sm">{goal}</Label>
            </div>
          ))}
        </div>
      </div>

      <div>
        <Label className="text-brand-silver mb-3 block">Current Challenges (select all that apply)</Label>
        <div className="grid md:grid-cols-2 gap-3">
          {challenges.map((challenge) => (
            <div key={challenge} className="flex items-center space-x-2">
              <Checkbox 
                id={challenge}
                checked={formData.currentChallenges.includes(challenge)}
                onCheckedChange={(checked) => handleChallengeChange(challenge, checked as boolean)}
              />
              <Label htmlFor={challenge} className="text-brand-silver text-sm">{challenge}</Label>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default GoalsAndChallengesSection;
