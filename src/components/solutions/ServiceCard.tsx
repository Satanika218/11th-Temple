
import { CheckCircle, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";

interface ServiceCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  benefits: string[];
  link: string;
  primaryCta: string;
  secondaryCta?: string;
  secondaryLink?: string;
}

export const ServiceCard = ({
  icon,
  title,
  description,
  benefits,
  link,
  primaryCta,
  secondaryCta,
  secondaryLink
}: ServiceCardProps) => {
  return (
    <Card className="bg-brand-navy border-brand-silver/20 h-full">
      <CardContent className="p-8">
        <div className="flex items-center space-x-4 mb-6">
          {icon}
          <h3 className="text-2xl font-bold text-white">{title}</h3>
        </div>
        <p className="text-brand-silver text-lg mb-6">{description}</p>
        <div className="space-y-3 mb-8">
          {benefits.map((benefit, benefitIndex) => (
            <div key={benefitIndex} className="flex items-center space-x-3">
              <CheckCircle className="h-5 w-5 text-brand-lime flex-shrink-0" />
              <span className="text-brand-silver">{benefit}</span>
            </div>
          ))}
        </div>
        <div className="flex flex-col sm:flex-row gap-4">
          <Link to={link} className="flex-1">
            <Button className="bg-brand-lime text-brand-navy hover:bg-brand-lime-dark font-semibold w-full">
              {primaryCta}
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
          {secondaryCta && secondaryLink && (
            <Link to={secondaryLink} className="flex-1">
              <Button variant="outline" className="border-brand-lime text-brand-lime hover:bg-brand-lime hover:text-brand-navy font-semibold w-full">
                {secondaryCta}
              </Button>
            </Link>
          )}
        </div>
      </CardContent>
    </Card>
  );
};
