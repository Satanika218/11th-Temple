import jsPDF from "jspdf";

type DigitalSkillsResult = {
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

function getScoreLevel(score: number) {
  if (score >= 80) return { level: "Digital Leader", color: lime, description: "Excellent digital skills across all areas" };
  if (score >= 65) return { level: "Digitally Confident", color: [34, 197, 94], description: "Strong digital foundation with room for growth" };
  if (score >= 50) return { level: "Building Skills", color: [251, 146, 60], description: "Good progress but key areas need development" };
  return { level: "Getting Started", color: [239, 68, 68], description: "Significant digital skills development needed" };
}

export async function generateDigitalSkillsPDF(result: DigitalSkillsResult) {
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
  doc.text("Digital Skills Assessment Report", 20, 32);

  // Add logo
  await new Promise<void>(resolve => {
    addLogo(doc, pageWidth - 36, 7, 26, resolve);
  });

  let y = 56;
  const scoreLevel = getScoreLevel(result.score);

  // Business info
  if (result.businessName) {
    doc.setFontSize(18);
    doc.setFont("helvetica", "bold");
    doc.setTextColor(navy[0], navy[1], navy[2]);
    doc.text(`Assessment Results for ${result.businessName}`, 20, y);
    y += 16;
  }

  // Score display
  doc.setFillColor(scoreLevel.color[0], scoreLevel.color[1], scoreLevel.color[2]);
  doc.rect(20, y, pageWidth - 40, 40, 'F');
  doc.setTextColor(255, 255, 255);
  doc.setFontSize(36);
  doc.setFont("helvetica", "bold");
  doc.text(`${result.score}/100`, 30, y + 25);
  doc.setFontSize(18);
  doc.text(scoreLevel.level, 100, y + 20);
  doc.setFontSize(12);
  doc.setFont("helvetica", "normal");
  doc.text(scoreLevel.description, 100, y + 32);
  y += 45;

  // Score calculation explanation
  doc.setFontSize(14);
  doc.setFont("helvetica", "bold");
  doc.setTextColor(navy[0], navy[1], navy[2]);
  doc.text("How Your Score is Calculated", 20, y);
  
  y += 12;
  doc.setFontSize(10);
  doc.setFont("helvetica", "normal");
  const calculations = [
    "• Basic digital operations and software skills (30 points)",
    "• Communication and collaboration tools (25 points)", 
    "• Information management and security awareness (25 points)",
    "• Problem-solving and emerging tech adaptability (20 points)"
  ];
  
  calculations.forEach((calc) => {
    doc.text(calc, 25, y);
    y += 7;
  });
  y += 10;

  // Key areas analysis
  doc.setFontSize(16);
  doc.setFont("helvetica", "bold");
  doc.setTextColor(navy[0], navy[1], navy[2]);
  doc.text("Skills Analysis", 20, y);
  y += 12;

  const skillAreas = [
    "Basic Digital Operations",
    "Communication & Collaboration", 
    "Information Management",
    "Content Creation",
    "Online Safety & Privacy",
    "Problem Solving",
    "Software Proficiency",
    "Digital Marketing",
    "Data Analysis",
    "Emerging Technologies"
  ];

  doc.setFontSize(11);
  doc.setTextColor(silver[0], silver[1], silver[2]);
  skillAreas.forEach((area, index) => {
    const answered = result.answers[index] !== undefined;
    const status = answered ? "✓ Assessed" : "- Not completed";
    doc.text(`${area}: ${status}`, 25, y);
    y += 7;
  });

  // Recommendations section
  y += 10;
  doc.setFontSize(16);
  doc.setFont("helvetica", "bold");
  doc.setTextColor(navy[0], navy[1], navy[2]);
  doc.text("Recommended Next Steps", 20, y);
  y += 12;

  const recommendations = result.score >= 80 
    ? [
        "Continue leading digital transformation initiatives",
        "Mentor team members in advanced digital skills",
        "Explore emerging technologies like AI and automation",
        "Share best practices with industry peers"
      ]
    : result.score >= 65
    ? [
        "Focus on advanced digital marketing strategies",
        "Develop data analysis and reporting skills",
        "Explore automation tools for efficiency",
        "Consider digital leadership training"
      ]
    : result.score >= 50
    ? [
        "Strengthen core software proficiency",
        "Improve online communication skills",
        "Learn basic data analysis techniques",
        "Enhance digital security awareness"
      ]
    : [
        "Start with basic computer skills training",
        "Learn essential software applications",
        "Develop safe internet browsing habits",
        "Focus on email and communication tools"
      ];

  doc.setFontSize(11);
  doc.setTextColor(silver[0], silver[1], silver[2]);
  recommendations.forEach(rec => {
    doc.text(`• ${rec}`, 25, y);
    y += 7;
  });

  // Contact section
  y += 15;
  doc.setFillColor(navy[0], navy[1], navy[2]);
  doc.rect(20, y, pageWidth - 40, 30, 'F');
  doc.setTextColor(255, 255, 255);
  doc.setFontSize(14);
  doc.setFont("helvetica", "bold");
  doc.text("Get Personalized Digital Skills Training", 30, y + 12);
  doc.setFontSize(11);
  doc.setFont("helvetica", "normal");
  doc.text("Contact us for customized training programs: hello@11thtemplesolutions.com", 30, y + 22);

  // Footer
  const footerY = pageHeight - 18;
  doc.setFillColor(navy[0], navy[1], navy[2]);
  doc.rect(0, footerY - 5, pageWidth, 22, 'F');
  doc.setTextColor(255, 255, 255);
  doc.setFontSize(10);
  doc.text('Digital Skills Assessment Report', 18, footerY + 5);
  doc.text('© 2025 11th Temple Solutions. All rights reserved.', 18, footerY + 12);
  const dateStr = new Date().toLocaleDateString();
  doc.text(`Generated: ${dateStr}`, pageWidth - 64, footerY + 5);

  doc.save(`Digital_Skills_Assessment_${result.businessName || 'Results'}.pdf`);
}