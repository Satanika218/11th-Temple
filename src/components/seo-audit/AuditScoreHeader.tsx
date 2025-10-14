
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Download } from "lucide-react";
import { SEOAuditData } from "@/pages/SEOAudit";

interface AuditScoreHeaderProps {
  auditData: SEOAuditData;
  score: number;
  onDownloadPDF: () => Promise<void>;
}

const AuditScoreHeader = ({ auditData, score, onDownloadPDF }: AuditScoreHeaderProps) => {
  return (
    <Card className="bg-gradient-to-r from-brand-navy to-brand-navy-light border-brand-silver/20">
      <CardHeader>
        <div className="flex justify-between items-center">
          <div>
            <CardTitle className="text-2xl font-bold text-white mb-2">
              SEO Audit Report
            </CardTitle>
            <p className="text-brand-silver">
              Analysis for {auditData.businessName} • {auditData.targetLocation}
            </p>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-brand-lime">{score}</div>
            <div className="text-brand-silver text-sm">SEO Score</div>
            <div className="text-xs text-brand-silver mt-1">Based on keywords, competition, goals, and current issues</div>
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <Button 
          onClick={onDownloadPDF}
          className="bg-brand-lime text-brand-navy hover:bg-brand-lime-dark font-semibold"
        >
          <Download className="mr-2 h-4 w-4" />
          Download PDF Report
        </Button>
      </CardContent>
    </Card>
  );
};

export default AuditScoreHeader;
