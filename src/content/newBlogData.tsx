import React from 'react';
import { BlogPost } from './types';

// Import all blog content
import { post as springDigitalTransformation } from './blogs/spring-digital-transformation-sme-tech-upgrades';
import { post as ruralAdvantagePowys } from './blogs/rural-advantage-powys-smes-ai-competitive-edge';
import { post as agenticAIExplained } from './blogs/agentic-ai-explained-business-automation-evolution';
import { post as costBenefitAnalysis } from './blogs/cost-benefit-analysis-ai-roi-welsh-smes';
import { post as shropshireDigitalRenaissance } from './blogs/shropshire-digital-renaissance-tech-adoption-trends';
import { post as buildingDigitalSkills } from './blogs/building-digital-skills-rural-communities-framework';
import { post as machineLearningInventory } from './blogs/machine-learning-inventory-optimization-welsh-retailer';
import { post as governmentDigitalSkills } from './blogs/government-digital-skills-framework-smes-guide';
import { post as aiPoweredCustomerService } from './blogs/ai-powered-customer-service-24-7-support';
import { post as dataPrivacyAI } from './blogs/data-privacy-ai-gdpr-compliance-welsh-businesses';
import { post as skillsGapCrisis } from './blogs/skills-gap-crisis-ai-bridge-talent-shortage';
import { post as sustainableBusinessAI } from './blogs/sustainable-business-ai-reducing-waste-energy';
import { post as predictiveMaintenance } from './blogs/predictive-maintenance-rural-manufacturing-powys';
import { post as voiceAIAccessibility } from './blogs/voice-ai-accessibility-technology-for-everyone';
import { post as agriculturalAI } from './blogs/agricultural-ai-welsh-farms-smart-technology';
import { post as psychologyAIAdoption } from './blogs/psychology-ai-adoption-overcoming-team-resistance';
import { post as cybersecurityAI } from './blogs/cybersecurity-ai-era-protecting-business-threats';
import { post as localAIvsCloudAI } from './blogs/local-ai-vs-cloud-ai-deployment-sme';
import { post as aiMarketingPersonalization } from './blogs/ai-marketing-personalization-scale-small-business';
import { post as futureWorkRuralWales } from './blogs/future-work-rural-wales-ai-remote-opportunity';
import { post as documentProcessingAI } from './blogs/document-processing-ai-eliminating-paperwork-bottlenecks';
import { post as aiEthicsSMEs } from './blogs/ai-ethics-smes-building-trust-responsible-technology';
import { post as supplyChainResilience } from './blogs/supply-chain-resilience-ai-navigate-uncertainty';
import { post as aiTalentParadox } from './blogs/ai-talent-paradox-training-team-hiring-specialists';
import { post as conversationalAI } from './blogs/conversational-ai-beyond-chatbots-intelligent-assistants';
import { post as aiFinancialPlanning } from './blogs/ai-financial-planning-smarter-forecasting-smes';
import { post as hybridWorkforce } from './blogs/hybrid-workforce-managing-human-ai-collaboration';
import { post as aiReadinessAssessment } from './blogs/ai-readiness-assessment-business-prepared-transformation';
import { post as octoberTechReview } from './blogs/october-tech-review-autumn-digital-innovation';

// Blog posts with dates (every Sunday from March 23, 2025 to October 5, 2025)
export const newBlogPosts: BlogPost[] = [
  // March 2025
  {
    id: 30,
    slug: springDigitalTransformation.slug,
    title: springDigitalTransformation.title,
    excerpt: springDigitalTransformation.excerpt,
    content: springDigitalTransformation.content,
    author: 'Dan Armour',
    date: '2025-03-23'
  },
  {
    id: 31,
    slug: ruralAdvantagePowys.slug,
    title: ruralAdvantagePowys.title,
    excerpt: ruralAdvantagePowys.excerpt,
    content: ruralAdvantagePowys.content,
    author: 'Dan Armour',
    date: '2025-03-30'
  },
  
  // April 2025
  {
    id: 32,
    slug: agenticAIExplained.slug,
    title: agenticAIExplained.title,
    excerpt: agenticAIExplained.excerpt,
    content: agenticAIExplained.content,
    author: 'Dan Armour',
    date: '2025-04-06'
  },
  {
    id: 33,
    slug: costBenefitAnalysis.slug,
    title: costBenefitAnalysis.title,
    excerpt: costBenefitAnalysis.excerpt,
    content: costBenefitAnalysis.content,
    author: 'Dan Armour',
    date: '2025-04-13'
  },
  {
    id: 34,
    slug: shropshireDigitalRenaissance.slug,
    title: shropshireDigitalRenaissance.title,
    excerpt: shropshireDigitalRenaissance.excerpt,
    content: shropshireDigitalRenaissance.content,
    author: 'Dan Armour',
    date: '2025-04-20'
  },
  {
    id: 35,
    slug: buildingDigitalSkills.slug,
    title: buildingDigitalSkills.title,
    excerpt: buildingDigitalSkills.excerpt,
    content: buildingDigitalSkills.content,
    author: 'Dan Armour',
    date: '2025-04-27'
  },
  
  // May 2025
  {
    id: 36,
    slug: machineLearningInventory.slug,
    title: machineLearningInventory.title,
    excerpt: machineLearningInventory.excerpt,
    content: machineLearningInventory.content,
    author: 'Dan Armour',
    date: '2025-05-04'
  },
  {
    id: 37,
    slug: governmentDigitalSkills.slug,
    title: governmentDigitalSkills.title,
    excerpt: governmentDigitalSkills.excerpt,
    content: governmentDigitalSkills.content,
    author: 'Dan Armour',
    date: '2025-05-11'
  },
  {
    id: 38,
    slug: aiPoweredCustomerService.slug,
    title: aiPoweredCustomerService.title,
    excerpt: aiPoweredCustomerService.excerpt,
    content: aiPoweredCustomerService.content,
    author: 'Dan Armour',
    date: '2025-05-18'
  },
  {
    id: 39,
    slug: dataPrivacyAI.slug,
    title: dataPrivacyAI.title,
    excerpt: dataPrivacyAI.excerpt,
    content: dataPrivacyAI.content,
    author: 'Dan Armour',
    date: '2025-05-25'
  },
  
  // June 2025
  {
    id: 40,
    slug: skillsGapCrisis.slug,
    title: skillsGapCrisis.title,
    excerpt: skillsGapCrisis.excerpt,
    content: skillsGapCrisis.content,
    author: 'Dan Armour',
    date: '2025-06-01'
  },
  {
    id: 41,
    slug: sustainableBusinessAI.slug,
    title: sustainableBusinessAI.title,
    excerpt: sustainableBusinessAI.excerpt,
    content: sustainableBusinessAI.content,
    author: 'Dan Armour',
    date: '2025-06-08'
  },
  {
    id: 42,
    slug: predictiveMaintenance.slug,
    title: predictiveMaintenance.title,
    excerpt: predictiveMaintenance.excerpt,
    content: predictiveMaintenance.content,
    author: 'Dan Armour',
    date: '2025-06-15'
  },
  {
    id: 43,
    slug: voiceAIAccessibility.slug,
    title: voiceAIAccessibility.title,
    excerpt: voiceAIAccessibility.excerpt,
    content: voiceAIAccessibility.content,
    author: 'Dan Armour',
    date: '2025-06-22'
  },
  {
    id: 44,
    slug: agriculturalAI.slug,
    title: agriculturalAI.title,
    excerpt: agriculturalAI.excerpt,
    content: agriculturalAI.content,
    author: 'Danveau Armour',
    date: '2025-06-29'
  },
  
  // July 2025
  {
    id: 45,
    slug: psychologyAIAdoption.slug,
    title: psychologyAIAdoption.title,
    excerpt: psychologyAIAdoption.excerpt,
    content: psychologyAIAdoption.content,
    author: 'Dan Armour',
    date: '2025-07-06'
  },
  {
    id: 46,
    slug: cybersecurityAI.slug,
    title: cybersecurityAI.title,
    excerpt: cybersecurityAI.excerpt,
    content: cybersecurityAI.content,
    author: 'Dan Armour',
    date: '2025-07-13'
  },
  {
    id: 47,
    slug: localAIvsCloudAI.slug,
    title: localAIvsCloudAI.title,
    excerpt: localAIvsCloudAI.excerpt,
    content: localAIvsCloudAI.content,
    author: 'Dan Armour',
    date: '2025-07-20'
  },
  {
    id: 48,
    slug: aiMarketingPersonalization.slug,
    title: aiMarketingPersonalization.title,
    excerpt: aiMarketingPersonalization.excerpt,
    content: aiMarketingPersonalization.content,
    author: 'Dan Armour',
    date: '2025-07-27'
  },
  
  // August 2025
  {
    id: 49,
    slug: futureWorkRuralWales.slug,
    title: futureWorkRuralWales.title,
    excerpt: futureWorkRuralWales.excerpt,
    content: futureWorkRuralWales.content,
    author: 'Dan Armour',
    date: '2025-08-03'
  },
  {
    id: 50,
    slug: documentProcessingAI.slug,
    title: documentProcessingAI.title,
    excerpt: documentProcessingAI.excerpt,
    content: documentProcessingAI.content,
    author: 'Dan Armour',
    date: '2025-08-10'
  },
  {
    id: 51,
    slug: aiEthicsSMEs.slug,
    title: aiEthicsSMEs.title,
    excerpt: aiEthicsSMEs.excerpt,
    content: aiEthicsSMEs.content,
    author: 'Dan Armour',
    date: '2025-08-17'
  },
  {
    id: 52,
    slug: supplyChainResilience.slug,
    title: supplyChainResilience.title,
    excerpt: supplyChainResilience.excerpt,
    content: supplyChainResilience.content,
    author: 'Dan Armour',
    date: '2025-08-24'
  },
  {
    id: 53,
    slug: aiTalentParadox.slug,
    title: aiTalentParadox.title,
    excerpt: aiTalentParadox.excerpt,
    content: aiTalentParadox.content,
    author: 'Dan Armour',
    date: '2025-08-31'
  },
  
  // September 2025
  {
    id: 54,
    slug: conversationalAI.slug,
    title: conversationalAI.title,
    excerpt: conversationalAI.excerpt,
    content: conversationalAI.content,
    author: 'Dan Armour',
    date: '2025-09-07'
  },
  {
    id: 55,
    slug: aiFinancialPlanning.slug,
    title: aiFinancialPlanning.title,
    excerpt: aiFinancialPlanning.excerpt,
    content: aiFinancialPlanning.content,
    author: 'Dan Armour',
    date: '2025-09-14'
  },
  {
    id: 56,
    slug: hybridWorkforce.slug,
    title: hybridWorkforce.title,
    excerpt: hybridWorkforce.excerpt,
    content: hybridWorkforce.content,
    author: 'Dan Armour',
    date: '2025-09-21'
  },
  {
    id: 57,
    slug: aiReadinessAssessment.slug,
    title: aiReadinessAssessment.title,
    excerpt: aiReadinessAssessment.excerpt,
    content: aiReadinessAssessment.content,
    author: 'Dan Armour',
    date: '2025-09-28'
  },
  
  // October 2025
  {
    id: 58,
    slug: octoberTechReview.slug,
    title: octoberTechReview.title,
    excerpt: octoberTechReview.excerpt,
    content: octoberTechReview.content,
    author: 'Dan Armour',
    date: '2025-10-05'
  }
];

// Export function to merge with existing blog data
export const getAllBlogPosts = () => {
  // This would be merged with existing blog posts from the original blogData.tsx
  return newBlogPosts;
};