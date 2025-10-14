
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { SEOAuditData } from "@/pages/SEOAudit";

interface KeywordAnalysisProps {
  auditData: SEOAuditData;
}

const KeywordAnalysis = ({ auditData }: KeywordAnalysisProps) => {
  if (auditData.primaryKeywords.length === 0) return null;

  return (
    <Card className="bg-brand-navy border-brand-silver/20">
      <CardHeader>
        <CardTitle className="text-white">Keyword Analysis</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid md:grid-cols-2 gap-4">
          <div>
            <h4 className="text-brand-lime font-semibold mb-2">Primary Keywords</h4>
            <div className="flex flex-wrap gap-2">
              {auditData.primaryKeywords.map((keyword) => (
                <span key={keyword} className="bg-brand-lime text-brand-navy px-2 py-1 rounded text-sm">
                  {keyword}
                </span>
              ))}
            </div>
          </div>
          {auditData.competitors.length > 0 && (
            <div>
              <h4 className="text-brand-lime font-semibold mb-2">Competitors</h4>
              <div className="flex flex-wrap gap-2">
                {auditData.competitors.map((competitor) => (
                  <span key={competitor} className="bg-brand-silver text-brand-navy px-2 py-1 rounded text-sm">
                    {competitor}
                  </span>
                ))}
              </div>
            </div>
          )}
        </div>
      </CardContent>
    </Card>
  );
};

export default KeywordAnalysis;
