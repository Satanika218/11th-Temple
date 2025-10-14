
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle, AlertTriangle } from "lucide-react";

interface InsightsGridProps {
  strengths: string[];
  weaknesses: string[];
}

const InsightsGrid = ({ strengths, weaknesses }: InsightsGridProps) => {
  return (
    <div className="grid md:grid-cols-2 gap-6">
      {/* Strengths */}
      <Card className="bg-brand-navy border-brand-silver/20">
        <CardHeader>
          <CardTitle className="text-white flex items-center gap-2">
            <CheckCircle className="h-5 w-5 text-brand-lime" />
            SEO Strengths
          </CardTitle>
        </CardHeader>
        <CardContent>
          <ul className="space-y-2">
            {strengths.map((strength, index) => (
              <li key={index} className="text-brand-silver flex items-start gap-2">
                <div className="w-2 h-2 bg-brand-lime rounded-full mt-2 flex-shrink-0"></div>
                {strength}
              </li>
            ))}
          </ul>
        </CardContent>
      </Card>

      {/* Areas for Improvement */}
      <Card className="bg-brand-navy border-brand-silver/20">
        <CardHeader>
          <CardTitle className="text-white flex items-center gap-2">
            <AlertTriangle className="h-5 w-5 text-brand-lime" />
            Areas for Improvement
          </CardTitle>
        </CardHeader>
        <CardContent>
          <ul className="space-y-2">
            {weaknesses.map((weakness, index) => (
              <li key={index} className="text-brand-silver flex items-start gap-2">
                <div className="w-2 h-2 bg-brand-lime rounded-full mt-2 flex-shrink-0"></div>
                {weakness}
              </li>
            ))}
          </ul>
        </CardContent>
      </Card>
    </div>
  );
};

export default InsightsGrid;
