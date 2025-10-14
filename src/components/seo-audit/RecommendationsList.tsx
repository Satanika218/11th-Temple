
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Target } from "lucide-react";

interface RecommendationsListProps {
  recommendations: string[];
}

const RecommendationsList = ({ recommendations }: RecommendationsListProps) => {
  return (
    <Card className="bg-brand-navy border-brand-silver/20">
      <CardHeader>
        <CardTitle className="text-white flex items-center gap-2">
          <Target className="h-5 w-5 text-brand-lime" />
          Priority SEO Recommendations
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {recommendations.map((recommendation, index) => (
            <div key={index} className="flex items-start gap-3 p-3 bg-brand-navy-light rounded-lg">
              <div className="bg-brand-lime text-brand-navy rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold flex-shrink-0">
                {index + 1}
              </div>
              <p className="text-brand-silver">{recommendation}</p>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default RecommendationsList;
