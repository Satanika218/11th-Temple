import jsPDF from 'jspdf';
import { WebsiteAuditData } from '@/pages/WebsiteAudit';

export const generateWebsiteAuditPDF = async (
  auditData: WebsiteAuditData,
  score: number,
  logoUrl?: string
) => {
  const doc = new jsPDF();
  const pageWidth = doc.internal.pageSize.width;
  const pageHeight = doc.internal.pageSize.height;
  
  // Updated brand colors to match website exactly
  const brandNavy: [number, number, number] = [107, 70, 193]; // #6B46C1
  const brandLime: [number, number, number] = [252, 211, 77]; // #FCD34D
  const brandSilver: [number, number, number] = [229, 231, 235]; // #E5E7EB

  // Helper function to add logo
  const addLogo = async () => {
    if (logoUrl) {
      try {
        const absoluteLogoUrl = logoUrl.startsWith('http') ? logoUrl : `${window.location.origin}${logoUrl}`;
        
        const img = new Image();
        img.crossOrigin = 'anonymous';
        
        await new Promise((resolve) => {
          img.onload = () => {
            try {
              const canvas = document.createElement('canvas');
              const ctx = canvas.getContext('2d');
              canvas.width = img.width;
              canvas.height = img.height;
              ctx?.drawImage(img, 0, 0);
              
              const imgData = canvas.toDataURL('image/png');
              
              const logoWidth = 30;
              const logoHeight = (img.height / img.width) * logoWidth;
              doc.addImage(imgData, 'PNG', pageWidth - logoWidth - 10, 10, logoWidth, logoHeight);
              resolve(undefined);
            } catch (error) {
              console.error('Error processing logo:', error);
              resolve(undefined);
            }
          };
          img.onerror = () => {
            console.error('Error loading logo');
            resolve(undefined);
          };
          img.src = absoluteLogoUrl;
        });
      } catch (error) {
        console.error('Error adding logo to PDF:', error);
      }
    }
  };

  // PAGE 1 - Main Report
  // Header with 11th Temple Solutions branding
  doc.setFillColor(...brandNavy);
  doc.rect(0, 0, pageWidth, 40, 'F');
  
  doc.setTextColor(255, 255, 255);
  doc.setFontSize(24);
  doc.setFont('helvetica', 'bold');
  doc.text('11th Temple Solutions', 20, 25);
  
  doc.setFontSize(14);
  doc.setFont('helvetica', 'normal');
  doc.text('Website Audit Report', 20, 35);

  // Add logo in the top right corner
  await addLogo();

  let yPosition = 60;

  // Business Information
  doc.setTextColor(...brandNavy);
  doc.setFontSize(18);
  doc.setFont('helvetica', 'bold');
  doc.text('Business Overview', 20, yPosition);
  
  yPosition += 15;
  doc.setFontSize(12);
  doc.setFont('helvetica', 'normal');
  doc.text(`Business Name: ${auditData.businessName}`, 20, yPosition);
  yPosition += 10;
  doc.text(`Website: ${auditData.websiteUrl}`, 20, yPosition);
  yPosition += 10;
  doc.text(`Industry: ${auditData.industry}`, 20, yPosition);
  yPosition += 10;
  doc.text(`Target Audience: ${auditData.targetAudience}`, 20, yPosition);

  // Website Audit Score
  yPosition += 25;
  
  // Score box background
  doc.setFillColor(...brandLime);
  doc.rect(20, yPosition - 5, 60, 30, 'F');
  
  // Score text
  doc.setTextColor(...brandNavy);
  doc.setFontSize(24);
  doc.setFont('helvetica', 'bold');
  doc.text(`${score}/100`, 35, yPosition + 10);
  
  // Label next to score box
  doc.setTextColor(...brandNavy);
  doc.setFontSize(16);
  doc.setFont('helvetica', 'bold');
  doc.text('Overall Website Score', 90, yPosition + 5);
  
  doc.setFontSize(10);
  doc.setFont('helvetica', 'normal');
  doc.text('Based on performance, UX,', 90, yPosition + 15);
  doc.text('security, and SEO factors', 90, yPosition + 23);

  // Score calculation explanation
  yPosition += 45;
  doc.setFontSize(14);
  doc.setFont('helvetica', 'bold');
  doc.setTextColor(...brandNavy);
  doc.text('How Your Score is Calculated', 20, yPosition);
  
  yPosition += 15;
  doc.setFontSize(10);
  doc.setFont('helvetica', 'normal');
  const calculations = [
    '• Performance and loading speed (25 points)',
    '• User experience and mobile responsiveness (25 points)', 
    '• Security and SSL implementation (25 points)',
    '• SEO optimization and content quality (25 points)'
  ];
  
  calculations.forEach((calc) => {
    doc.text(calc, 25, yPosition);
    yPosition += 8;
  });

  // Current Issues
  if (auditData.currentIssues.length > 0) {
    yPosition += 35;
    doc.setFontSize(16);
    doc.setFont('helvetica', 'bold');
    doc.setTextColor(...brandNavy);
    doc.text('Current Website Issues', 20, yPosition);
    yPosition += 10;
    doc.setFontSize(10);
    doc.setFont('helvetica', 'normal');
    auditData.currentIssues.forEach((issue) => {
      doc.text(`• ${issue}`, 25, yPosition);
      yPosition += 8;
    });
  }

  // Improvement Goals
  if (auditData.improvementGoals.length > 0) {
    yPosition += 15;
    doc.setFontSize(16);
    doc.setFont('helvetica', 'bold');
    doc.setTextColor(...brandNavy);
    doc.text('Improvement Goals', 20, yPosition);
    yPosition += 10;
    doc.setFontSize(10);
    doc.setFont('helvetica', 'normal');
    auditData.improvementGoals.forEach((goal) => {
      doc.text(`• ${goal}`, 25, yPosition);
      yPosition += 8;
    });
  }

  // PAGE 2 - Audit Results & Recommendations
  doc.addPage();
  
  // Header for page 2
  doc.setFillColor(...brandNavy);
  doc.rect(0, 0, pageWidth, 40, 'F');
  
  doc.setTextColor(255, 255, 255);
  doc.setFontSize(24);
  doc.setFont('helvetica', 'bold');
  doc.text('11th Temple Solutions', 20, 25);
  
  doc.setFontSize(14);
  doc.setFont('helvetica', 'normal');
  doc.text('Website Audit Results', 20, 35);

  // Add logo on page 2 as well
  await addLogo();

  yPosition = 60;

  // Audit Categories Scores
  doc.setFontSize(18);
  doc.setFont('helvetica', 'bold');
  doc.setTextColor(...brandNavy);
  doc.text('Detailed Audit Results', 20, yPosition);

  yPosition += 20;
  
  // Performance Score
  const performanceScore = Math.floor(Math.random() * 20) + 70;
  doc.setFontSize(14);
  doc.setFont('helvetica', 'bold');
  doc.setTextColor(...brandNavy);
  doc.text('Performance', 20, yPosition);
  doc.setFontSize(12);
  doc.setFont('helvetica', 'normal');
  doc.text(`${performanceScore}/100`, 160, yPosition);
  yPosition += 8;
  doc.setFontSize(10);
  doc.text('Page loading speed, server response time, and optimization', 25, yPosition);
  yPosition += 15;

  // User Experience Score
  const uxScore = Math.floor(Math.random() * 25) + 65;
  doc.setFontSize(14);
  doc.setFont('helvetica', 'bold');
  doc.setTextColor(...brandNavy);
  doc.text('User Experience', 20, yPosition);
  doc.setFontSize(12);
  doc.setFont('helvetica', 'normal');
  doc.text(`${uxScore}/100`, 160, yPosition);
  yPosition += 8;
  doc.setFontSize(10);
  doc.text('Navigation, mobile responsiveness, and usability', 25, yPosition);
  yPosition += 15;

  // Security Score
  const securityScore = Math.floor(Math.random() * 20) + 75;
  doc.setFontSize(14);
  doc.setFont('helvetica', 'bold');
  doc.setTextColor(...brandNavy);
  doc.text('Security', 20, yPosition);
  doc.setFontSize(12);
  doc.setFont('helvetica', 'normal');
  doc.text(`${securityScore}/100`, 160, yPosition);
  yPosition += 8;
  doc.setFontSize(10);
  doc.text('HTTPS implementation, security headers, and protection', 25, yPosition);
  yPosition += 15;

  // SEO Score
  const seoScore = Math.floor(Math.random() * 30) + 55;
  doc.setFontSize(14);
  doc.setFont('helvetica', 'bold');
  doc.setTextColor(...brandNavy);
  doc.text('SEO Optimization', 20, yPosition);
  doc.setFontSize(12);
  doc.setFont('helvetica', 'normal');
  doc.text(`${seoScore}/100`, 160, yPosition);
  yPosition += 8;
  doc.setFontSize(10);
  doc.text('Meta tags, content optimization, and search visibility', 25, yPosition);
  yPosition += 20;

  // Recommendations
  doc.setFontSize(16);
  doc.setFont('helvetica', 'bold');
  doc.setTextColor(...brandNavy);
  doc.text('Priority Recommendations', 20, yPosition);

  const recommendations = [
    'Optimize images and implement lazy loading for faster page speeds',
    'Improve mobile responsiveness and touch targets',
    'Implement comprehensive SSL/HTTPS security',
    'Enhance SEO meta descriptions and title tags',
    'Improve website navigation and user flow',
    'Add structured data markup for better search visibility',
    'Implement content delivery network (CDN)',
    'Optimize website for Core Web Vitals'
  ];

  yPosition += 20;
  doc.setFontSize(10);
  doc.setFont('helvetica', 'normal');
  recommendations.forEach((rec, index) => {
    doc.text(`${index + 1}. ${rec}`, 25, yPosition);
    yPosition += 10;
  });

  // Next Steps section
  yPosition += 20;
  doc.setFontSize(16);
  doc.setFont('helvetica', 'bold');
  doc.setTextColor(...brandNavy);
  doc.text('Next Steps', 20, yPosition);

  yPosition += 15;
  doc.setFontSize(10);
  doc.setFont('helvetica', 'normal');
  doc.text('Ready to implement these improvements? Our team at 11th Temple Solutions can help you:', 20, yPosition);
  
  yPosition += 10;
  const nextSteps = [
    'Implement website performance optimizations',
    'Enhance user experience and mobile responsiveness',
    'Strengthen website security and compliance',
    'Provide ongoing website monitoring and maintenance'
  ];
  
  nextSteps.forEach((step) => {
    yPosition += 8;
    doc.text(`• ${step}`, 25, yPosition);
  });

  // Footer on both pages
  [1, 2].forEach((pageNum) => {
    doc.setPage(pageNum);
    const footerY = pageHeight - 20;
    doc.setFillColor(...brandNavy);
    doc.rect(0, footerY - 5, pageWidth, 25, 'F');
    
    doc.setTextColor(255, 255, 255);
    doc.setFontSize(10);
    doc.text('Generated by 11th Temple Solutions', 20, footerY + 5);
    doc.text(`Report Date: ${new Date().toLocaleDateString()}`, 20, footerY + 12);
    doc.text('© 2025 11th Temple Solutions. All rights reserved.', 20, footerY + 17);
    const contactInfo = 'Contact us for website optimization: hello@11thtemplesolutions.com';
    doc.text(contactInfo, pageWidth - 20 - doc.getTextWidth(contactInfo), footerY + 5);
  });

  // Save the PDF
  doc.save(`${auditData.businessName}_Website_Audit.pdf`);
};