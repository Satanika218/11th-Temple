
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { TrendingUp, CheckCircle } from "lucide-react";

const NextStepsSection = () => {
  return (
    <Card className="bg-brand-navy border-brand-silver/20">
      <CardHeader>
        <CardTitle className="text-white flex items-center gap-2">
          <TrendingUp className="h-5 w-5 text-brand-lime" />
          Next Steps
        </CardTitle>
      </CardHeader>
      <CardContent className="bg-brand-silver/10 rounded-lg p-6">
        <p className="text-brand-silver mb-4">
          Ready to improve your search rankings? Our team at 11th Temple can help you:
        </p>
        <ul className="space-y-2 text-brand-silver mb-6">
          <li className="flex items-center gap-2">
            <CheckCircle className="h-4 w-4 text-brand-lime" />
            Implement comprehensive SEO strategy
          </li>
          <li className="flex items-center gap-2">
            <CheckCircle className="h-4 w-4 text-brand-lime" />
            Optimize for local search rankings
          </li>
          <li className="flex items-center gap-2">
            <CheckCircle className="h-4 w-4 text-brand-lime" />
            Create high-quality, SEO-optimized content
          </li>
          <li className="flex items-center gap-2">
            <CheckCircle className="h-4 w-4 text-brand-lime" />
            Monitor and report on SEO progress
          </li>
        </ul>
        <Button className="bg-brand-lime text-brand-navy hover:bg-brand-lime-dark font-semibold">
          Free 30min Consultation - Let's Talk How We Help
        </Button>
      </CardContent>
    </Card>
  );
};

export default NextStepsSection;
