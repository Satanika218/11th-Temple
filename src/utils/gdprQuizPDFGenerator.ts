import jsPDF from "jspdf";

type GDPRQuizResult = {
  score: number;
  answers: number[];
  businessName?: string;
  contactName?: string;
  contactEmail?: string;
};

function addLogo(doc: jsPDF, x: number, y: number, width: number, cb: () => void) {
  const logoUrl = "/lovable-uploads/87c7e72a-88ad-4a5e-bd58-1bff5a3dee6b.png";
  const img = new Image();
  img.crossOrigin = "anonymous";
  img.onload = function () {
    try {
      const canvas = document.createElement("canvas");
      canvas.width = img.width;
      canvas.height = img.height;
      const ctx = canvas.getContext("2d");
      ctx?.drawImage(img, 0, 0);
      const imgData = canvas.toDataURL("image/png");
      doc.addImage(imgData, "PNG", x, y, width, (img.height / img.width) * width);
    } finally {
      cb();
    }
  };
  img.onerror = cb;
  img.src = logoUrl;
}

// Brand colors
const navy = [107, 70, 193] as const; // #6B46C1
const lime = [252, 211, 77] as const; // #FCD34D
const silver = [229, 231, 235] as const; // #E5E7EB

function getComplianceLevel(score: number) {
  if (score >= 85) return { 
    level: "GDPR Compliant", 
    color: [34, 197, 94], 
    description: "Excellent understanding of GDPR requirements",
    risk: "Low compliance risk"
  };
  if (score >= 70) return { 
    level: "Generally Compliant", 
    color: lime, 
    description: "Good GDPR knowledge with minor gaps",
    risk: "Moderate compliance risk"
  };
  if (score >= 50) return { 
    level: "Partially Compliant", 
    color: [251, 146, 60], 
    description: "Some GDPR understanding but significant gaps",
    risk: "High compliance risk"
  };
  return { 
    level: "Non-Compliant", 
    color: [239, 68, 68], 
    description: "Significant GDPR compliance gaps requiring immediate attention",
    risk: "Very high compliance risk"
  };
}

export async function generateGDPRQuizPDF(result: GDPRQuizResult) {
  const doc = new jsPDF();
  const pageWidth = doc.internal.pageSize.width;
  const pageHeight = doc.internal.pageSize.height;

  // Header
  doc.setFillColor(navy[0], navy[1], navy[2]);
  doc.rect(0, 0, pageWidth, 36, 'F');
  doc.setTextColor(255, 255, 255);
  doc.setFont("helvetica", "bold");
  doc.setFontSize(22);
  doc.text("11th Temple Solutions", 20, 22);

  doc.setFontSize(14);
  doc.setFont("helvetica", "normal");
  doc.text("GDPR Compliance Assessment Report", 20, 32);

  // Add logo
  await new Promise<void>(resolve => {
    addLogo(doc, pageWidth - 36, 7, 26, resolve);
  });

  let y = 56;
  const complianceLevel = getComplianceLevel(result.score);

  // Business info
  if (result.businessName) {
    doc.setFontSize(18);
    doc.setFont("helvetica", "bold");
    doc.setTextColor(navy[0], navy[1], navy[2]);
    doc.text(`GDPR Assessment for ${result.businessName}`, 20, y);
    y += 16;
  }

  // Score display
  doc.setFillColor(complianceLevel.color[0], complianceLevel.color[1], complianceLevel.color[2]);
  doc.rect(20, y, pageWidth - 40, 45, 'F');
  doc.setTextColor(255, 255, 255);
  doc.setFontSize(36);
  doc.setFont("helvetica", "bold");
  doc.text(`${result.score}%`, 30, y + 25);
  doc.setFontSize(16);
  doc.text(complianceLevel.level, 100, y + 18);
  doc.setFontSize(12);
  doc.setFont("helvetica", "normal");
  doc.text(complianceLevel.description, 100, y + 28);
  doc.setFontSize(11);
  doc.text(`Risk Level: ${complianceLevel.risk}`, 100, y + 38);
  y += 50;

  // Score calculation explanation
  doc.setFontSize(14);
  doc.setFont("helvetica", "bold");
  doc.setTextColor(navy[0], navy[1], navy[2]);
  doc.text("How Your Score is Calculated", 20, y);
  
  y += 12;
  doc.setFontSize(10);
  doc.setFont("helvetica", "normal");
  const calculations = [
    "• Data protection principles understanding (25 points)",
    "• Individual rights and breach procedures (25 points)", 
    "• Technical and organizational measures (25 points)",
    "• Staff training and vendor management (25 points)"
  ];
  
  calculations.forEach((calc) => {
    doc.text(calc, 25, y);
    y += 7;
  });
  y += 10;

  // Key compliance areas
  doc.setFontSize(16);
  doc.setFont("helvetica", "bold");
  doc.setTextColor(navy[0], navy[1], navy[2]);
  doc.text("Compliance Areas Assessed", 20, y);
  y += 12;

  const complianceAreas = [
    "Data Protection Principles",
    "Lawful Basis for Processing",
    "Individual Rights & Requests",
    "Data Breach Procedures",
    "Privacy by Design",
    "Data Protection Officer Requirements",
    "International Data Transfers",
    "Record Keeping Obligations",
    "Staff Training & Awareness",
    "Vendor & Third-Party Management"
  ];

  doc.setFontSize(11);
  doc.setTextColor(silver[0], silver[1], silver[2]);
  complianceAreas.forEach((area, index) => {
    const answered = result.answers[index] !== undefined;
    const status = answered ? "✓ Assessed" : "- Not assessed";
    doc.text(`${area}: ${status}`, 25, y);
    y += 7;
  });

  // Immediate actions needed
  y += 10;
  doc.setFillColor(239, 68, 68);
  doc.rect(20, y, pageWidth - 40, 12, 'F');
  doc.setTextColor(255, 255, 255);
  doc.setFontSize(14);
  doc.setFont("helvetica", "bold");
  doc.text("Priority Actions Required", 25, y + 8);
  y += 20;

  const priorityActions = result.score >= 85
    ? [
        "Maintain current GDPR compliance measures",
        "Regular compliance reviews and updates",
        "Staff refresher training annually",
        "Monitor regulatory changes"
      ]
    : result.score >= 70
    ? [
        "Address identified compliance gaps",
        "Enhance data breach response procedures", 
        "Improve staff GDPR training",
        "Review and update privacy policies"
      ]
    : result.score >= 50
    ? [
        "Urgent compliance audit required",
        "Implement proper consent mechanisms",
        "Establish data protection procedures",
        "Appoint Data Protection Officer if required"
      ]
    : [
        "Immediate comprehensive GDPR compliance review",
        "Legal consultation recommended",
        "Complete overhaul of data handling practices",
        "Staff emergency GDPR training required"
      ];

  doc.setFontSize(11);
  doc.setTextColor(navy[0], navy[1], navy[2]);
  priorityActions.forEach(action => {
    doc.text(`• ${action}`, 25, y);
    y += 7;
  });

  // UK GDPR specific notes
  y += 15;
  doc.setFillColor(navy[0], navy[1], navy[2]);
  doc.rect(20, y, pageWidth - 40, 35, 'F');
  doc.setTextColor(255, 255, 255);
  doc.setFontSize(14);
  doc.setFont("helvetica", "bold");
  doc.text("UK GDPR Compliance Support", 30, y + 12);
  doc.setFontSize(11);
  doc.setFont("helvetica", "normal");
  doc.text("Get expert guidance on UK GDPR requirements and implementation:", 30, y + 22);
  doc.text("hello@11thtemplesolutions.com | +44 7312 190 728", 30, y + 30);

  // Footer
  const footerY = pageHeight - 18;
  doc.setFillColor(navy[0], navy[1], navy[2]);
  doc.rect(0, footerY - 5, pageWidth, 22, 'F');
  doc.setTextColor(255, 255, 255);
  doc.setFontSize(10);
  doc.text('GDPR Compliance Assessment Report', 18, footerY + 5);
  doc.text('© 2025 11th Temple Solutions. All rights reserved.', 18, footerY + 12);
  const dateStr = new Date().toLocaleDateString();
  doc.text(`Generated: ${dateStr}`, pageWidth - 64, footerY + 5);

  doc.save(`GDPR_Compliance_Assessment_${result.businessName || 'Results'}.pdf`);
}