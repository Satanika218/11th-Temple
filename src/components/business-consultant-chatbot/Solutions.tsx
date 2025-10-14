
import { Solution } from "./types";
import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";

interface SolutionsProps {
  solutions: Solution[];
}

export const Solutions = ({ solutions }: SolutionsProps) => {
  return (
    <div className="flex flex-col gap-2 my-2">
      {solutions.map((solution, index) => (
        <Card key={index} className="bg-brand-navy border-brand-silver/20">
          <CardHeader>
            <CardTitle className="text-brand-lime">{solution.title}</CardTitle>
            <CardDescription className="text-brand-silver">{solution.description}</CardDescription>
          </CardHeader>
        </Card>
      ))}
    </div>
  );
};
