
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

export const SuccessStorySection = () => {
  return (
    <div className="bg-brand-silver/10 rounded-2xl p-8 backdrop-blur-sm border border-brand-silver/20">
      <h3 className="text-xl font-bold text-white mb-4">Success Stories</h3>
      <p className="text-brand-silver mb-6">
        See how businesses like yours have transformed their operations with our solutions.
      </p>
      <Link to="/case-studies">
        <Button className="bg-brand-lime text-brand-navy hover:bg-brand-lime-dark font-semibold">
          Testimonials
          <ArrowRight className="ml-2 h-4 w-4" />
        </Button>
      </Link>
    </div>
  );
};
