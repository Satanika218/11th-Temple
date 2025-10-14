
import jsPDF from 'jspdf';
import { SEOAuditData } from '@/pages/SEOAudit';

// New function signature: accept score and logoUrl
export const generateSEOAuditPDF = async (
  auditData: SEOAuditData,
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

  // PAGE 1 - Main Report
  // Header with 11th Temple branding
  doc.setFillColor(...brandNavy);
  doc.rect(0, 0, pageWidth, 40, 'F');
  
  doc.setTextColor(255, 255, 255);
  doc.setFontSize(24);
  doc.setFont('helvetica', 'bold');
  doc.text('11th Temple Solutions', 20, 25);
  
  doc.setFontSize(14);
  doc.setFont('helvetica', 'normal');
  doc.text('SEO Audit Report', 20, 35);

  // Add logo in the top right corner if provided
  if (logoUrl) {
    try {
      const absoluteLogoUrl = logoUrl.startsWith('http') ? logoUrl : `${window.location.origin}${logoUrl}`;
      
      const img = new Image();
      img.crossOrigin = 'anonymous';
      
      await new Promise((resolve, reject) => {
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
  doc.text(`Target Location: ${auditData.targetLocation}`, 20, yPosition);
  yPosition += 10;
  doc.text(`Current Ranking: ${auditData.currentRanking}`, 20, yPosition);

  // SEO Score - Improved layout
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
  doc.text('Overall SEO Score', 90, yPosition + 5);
  
  doc.setFontSize(10);
  doc.setFont('helvetica', 'normal');
  doc.text('Based on keywords, competition,', 90, yPosition + 15);
  doc.text('goals, and current issues', 90, yPosition + 23);

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
    '• Keywords relevance and competition level (25 points)',
    '• Current ranking position and visibility (25 points)', 
    '• SEO goals alignment and achievability (25 points)',
    '• Current issues impact and severity (25 points)'
  ];
  
  calculations.forEach((calc) => {
    doc.text(calc, 25, yPosition);
    yPosition += 8;
  });

  // Primary Keywords
  if (auditData.primaryKeywords.length > 0) {
    yPosition += 35;
    doc.setFontSize(16);
    doc.setFont('helvetica', 'bold');
    doc.setTextColor(...brandNavy);
    doc.text('Primary Keywords', 20, yPosition);
    yPosition += 10;
    doc.setFontSize(10);
    doc.setFont('helvetica', 'normal');
    auditData.primaryKeywords.forEach((keyword) => {
      doc.text(`• ${keyword}`, 25, yPosition);
      yPosition += 8;
    });
  }

  // Competitors
  if (auditData.competitors.length > 0) {
    yPosition += 10;
    doc.setFontSize(16);
    doc.setFont('helvetica', 'bold');
    doc.setTextColor(...brandNavy);
    doc.text('Main Competitors', 20, yPosition);
    yPosition += 10;
    doc.setFontSize(10);
    doc.setFont('helvetica', 'normal');
    auditData.competitors.forEach((competitor) => {
      doc.text(`• ${competitor}`, 25, yPosition);
      yPosition += 8;
    });
  }

  // SEO Goals
  if (auditData.seoGoals.length > 0) {
    yPosition += 10;
    doc.setFontSize(16);
    doc.setFont('helvetica', 'bold');
    doc.setTextColor(...brandNavy);
    doc.text('SEO Goals', 20, yPosition);
    yPosition += 10;
    doc.setFontSize(10);
    doc.setFont('helvetica', 'normal');
    auditData.seoGoals.forEach((goal) => {
      doc.text(`• ${goal}`, 25, yPosition);
      yPosition += 8;
    });
  }

  // Current Issues
  if (auditData.currentIssues.length > 0) {
    yPosition += 10;
    doc.setFontSize(16);
    doc.setFont('helvetica', 'bold');
    doc.setTextColor(...brandNavy);
    doc.text('Current SEO Issues', 20, yPosition);
    yPosition += 10;
    doc.setFontSize(10);
    doc.setFont('helvetica', 'normal');
    auditData.currentIssues.forEach((issue) => {
      doc.text(`• ${issue}`, 25, yPosition);
      yPosition += 8;
    });
  }

  // PAGE 2 - Recommendations
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
  doc.text('SEO Recommendations', 20, 35);

  // Add logo on page 2 as well
  if (logoUrl) {
    try {
      const absoluteLogoUrl = logoUrl.startsWith('http') ? logoUrl : `${window.location.origin}${logoUrl}`;
      
      const img = new Image();
      img.crossOrigin = 'anonymous';
      
      await new Promise((resolve, reject) => {
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

  yPosition = 60;

  // Page 2 Title
  doc.setFontSize(18);
  doc.setFont('helvetica', 'bold');
  doc.setTextColor(...brandNavy);
  doc.text('Priority SEO Recommendations', 20, yPosition);

  // Recommendations
  const recommendations = [
    'Implement comprehensive keyword strategy',
    'Optimize website for local search terms',
    'Improve page loading speed and performance',
    'Create high-quality, SEO-optimized content',
    'Build authoritative backlink profile',
    'Optimize Google My Business listing',
    'Implement structured data markup',
    'Improve internal linking structure'
  ];

  yPosition += 20;
  doc.setFontSize(10);
  doc.setFont('helvetica', 'normal');
  recommendations.forEach((rec, index) => {
    doc.text(`${index + 1}. ${rec}`, 25, yPosition);
    yPosition += 10;
  });

  // Next Steps section on page 2
  yPosition += 20;
  doc.setFontSize(16);
  doc.setFont('helvetica', 'bold');
  doc.setTextColor(...brandNavy);
  doc.text('Next Steps', 20, yPosition);

  yPosition += 15;
  doc.setFontSize(10);
  doc.setFont('helvetica', 'normal');
  doc.text('Ready to implement these recommendations? Our team at 11th Temple can help you:', 20, yPosition);
  
  yPosition += 10;
  const nextSteps = [
    'Set up advanced SEO tracking and analytics',
    'Implement local SEO optimization strategies',
    'Create custom SEO strategy and content plan',
    'Provide ongoing SEO support and monitoring'
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
    const contactInfo = 'Contact us for SEO implementation: hello@11thtemplesolutions.com';
    doc.text(contactInfo, pageWidth - 20 - doc.getTextWidth(contactInfo), footerY + 5);
  });

  // Save the PDF
  doc.save(`${auditData.businessName}_SEO_Audit.pdf`);
};
