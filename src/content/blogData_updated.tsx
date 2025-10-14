import React from 'react';
import { BlogPost } from './types';

// Import all blog content
import { post as aiForSMEs } from './blogs/ai-for-smes';
import { post as automationAdvantage } from './blogs/automation-advantage';
import { post as dataAnalyticsAdvantage } from './blogs/data-analytics-advantage';
import { post as cyberSecureWelshSMEs } from './blogs/cyber-secure-welsh-smes';
import { post as customerRelationshipsCRMAdvantage } from './blogs/customer-relationships-crm-advantage';
import { post as mindTheSkillsGap } from './blogs/mind-the-skills-gap';
import { post as mobileFirstBusiness } from './blogs/mobile-first-business';
import { post as hybridWorkSuccess } from './blogs/hybrid-work-success';
import { post as supplyChainDigitization } from './blogs/supply-chain-digitization';
import { post as businessContinuityInUncertainTimes } from './blogs/business-continuity-in-uncertain-times';
import { post as navigatingTheComplianceMaze } from './blogs/navigating-the-compliance-maze';
import { post as breakingFreeFromLegacySystems } from './blogs/breaking-free-from-legacy-systems';
import { post as twentyEssentialDigitalSkills } from './blogs/20-essential-digital-skills';

import { post as agenticAiRevolutionWelshSMEs } from './blogs/agentic-ai-revolution-welsh-smes';
import { post as powysDigitalTransformationOpportunity } from './blogs/powys-digital-transformation-opportunity';
import { post as costBenefitsAIAutomationSMEs } from './blogs/cost-benefits-ai-automation-smes';
import { post as shropshireBusinessTechAdoption } from './blogs/shropshire-business-tech-adoption';
import { post as ruralTechSkillsDevelopment } from './blogs/rural-tech-skills-development';
import { post as governmentDigitalSkillsFrameworkSMEs } from './blogs/government-digital-skills-framework-smes';
import { post as aiCustomerService24_7 } from './blogs/ai-customer-service-24-7';
import { post as machineLearningInventoryManagement } from './blogs/machine-learning-inventory-management';
import { post as welshFarmsAiTechnology } from './blogs/welsh-farms-ai-technology';
import { post as predictiveAnalyticsRuralMarkets } from './blogs/predictive-analytics-rural-markets';
import { post as summerAutomationStrategies } from './blogs/summer-automation-strategies';
import { post as sustainableBusinessAI } from './blogs/sustainable-business-ai';
import { post as digitalTransformationSuccessWelshSMEs } from './blogs/digital-transformation-success-welsh-smes';
import { post as midYearTechAssessment } from './blogs/mid-year-tech-assessment';
import { post as aiDrivenDecisionMaking } from './blogs/ai-driven-decision-making';
import { post as futureRetailRuralCommunities } from './blogs/future-retail-rural-communities';
import { post as workplaceChampionsTechAdoption } from './blogs/workplace-champions-tech-adoption';

export const blogPosts: BlogPost[] = [
  {
    id: 1,
    slug: aiForSMEs.slug,
    title: aiForSMEs.title,
    excerpt: aiForSMEs.excerpt,
    content: aiForSMEs.content,
    author: 'Dan Armour',
    date: '2024-03-15'
  },
  {
    id: 2,
    slug: automationAdvantage.slug,
    title: automationAdvantage.title,
    excerpt: automationAdvantage.excerpt,
    content: automationAdvantage.content,
    author: 'Dan Armour',
    date: '2024-03-10'
  },
  {
    id: 3,
    slug: dataAnalyticsAdvantage.slug,
    title: dataAnalyticsAdvantage.title,
    excerpt: dataAnalyticsAdvantage.excerpt,
    content: dataAnalyticsAdvantage.content,
    author: 'Dan Armour',
    date: '2024-03-05'
  },
  {
    id: 4,
    slug: cyberSecureWelshSMEs.slug,
    title: cyberSecureWelshSMEs.title,
    excerpt: cyberSecureWelshSMEs.excerpt,
    content: cyberSecureWelshSMEs.content,
    author: 'Dan Armour',
    date: '2024-02-28'
  },
  {
    id: 5,
    slug: customerRelationshipsCRMAdvantage.slug,
    title: customerRelationshipsCRMAdvantage.title,
    excerpt: customerRelationshipsCRMAdvantage.excerpt,
    content: customerRelationshipsCRMAdvantage.content,
    author: 'Dan Armour',
    date: '2024-02-20'
  },
  {
    id: 6,
    slug: mindTheSkillsGap.slug,
    title: mindTheSkillsGap.title,
    excerpt: mindTheSkillsGap.excerpt,
    content: mindTheSkillsGap.content,
    author: 'Dan Armour',
    date: '2024-02-15'
  },
  {
    id: 7,
    slug: mobileFirstBusiness.slug,
    title: mobileFirstBusiness.title,
    excerpt: mobileFirstBusiness.excerpt,
    content: mobileFirstBusiness.content,
    author: 'Dan Armour',
    date: '2024-02-10'
  },
  // Additional blog posts from 2024
  {
    id: 14,
    slug: agenticAiRevolutionWelshSMEs.slug,
    title: agenticAiRevolutionWelshSMEs.title,
    excerpt: agenticAiRevolutionWelshSMEs.excerpt,
    content: agenticAiRevolutionWelshSMEs.content,
    author: 'Dan Armour',
    date: '2024-06-15'
  },
  {
    id: 15,
    slug: powysDigitalTransformationOpportunity.slug,
    title: powysDigitalTransformationOpportunity.title,
    excerpt: powysDigitalTransformationOpportunity.excerpt,
    content: powysDigitalTransformationOpportunity.content,
    author: 'Dan Armour',
    date: '2024-06-10'
  },
  {
    id: 16,
    slug: costBenefitsAIAutomationSMEs.slug,
    title: costBenefitsAIAutomationSMEs.title,
    excerpt: costBenefitsAIAutomationSMEs.excerpt,
    content: costBenefitsAIAutomationSMEs.content,
    author: 'Dan Armour',
    date: '2024-06-05'
  },
  {
    id: 17,
    slug: shropshireBusinessTechAdoption.slug,
    title: shropshireBusinessTechAdoption.title,
    excerpt: shropshireBusinessTechAdoption.excerpt,
    content: shropshireBusinessTechAdoption.content,
    author: 'Dan Armour',
    date: '2024-05-28'
  },
  {
    id: 18,
    slug: ruralTechSkillsDevelopment.slug,
    title: ruralTechSkillsDevelopment.title,
    excerpt: ruralTechSkillsDevelopment.excerpt,
    content: ruralTechSkillsDevelopment.content,
    author: 'Dan Armour',
    date: '2024-05-20'
  },
  {
    id: 19,
    slug: governmentDigitalSkillsFrameworkSMEs.slug,
    title: governmentDigitalSkillsFrameworkSMEs.title,
    excerpt: governmentDigitalSkillsFrameworkSMEs.excerpt,
    content: governmentDigitalSkillsFrameworkSMEs.content,
    author: 'Dan Armour',
    date: '2024-05-15'
  },
  {
    id: 20,
    slug: aiCustomerService24_7.slug,
    title: aiCustomerService24_7.title,
    excerpt: aiCustomerService24_7.excerpt,
    content: aiCustomerService24_7.content,
    author: 'Dan Armour',
    date: '2024-05-10'
  },
  {
    id: 21,
    slug: machineLearningInventoryManagement.slug,
    title: machineLearningInventoryManagement.title,
    excerpt: machineLearningInventoryManagement.excerpt,
    content: machineLearningInventoryManagement.content,
    author: 'Dan Armour',
    date: '2024-05-05'
  },
  {
    id: 22,
    slug: welshFarmsAiTechnology.slug,
    title: welshFarmsAiTechnology.title,
    excerpt: welshFarmsAiTechnology.excerpt,
    content: welshFarmsAiTechnology.content,
    author: 'Dan Armour',
    date: '2024-04-28'
  },
  {
    id: 23,
    slug: predictiveAnalyticsRuralMarkets.slug,
    title: predictiveAnalyticsRuralMarkets.title,
    excerpt: predictiveAnalyticsRuralMarkets.excerpt,
    content: predictiveAnalyticsRuralMarkets.content,
    author: 'Dan Armour',
    date: '2024-04-20'
  },
  {
    id: 24,
    slug: summerAutomationStrategies.slug,
    title: summerAutomationStrategies.title,
    excerpt: summerAutomationStrategies.excerpt,
    content: summerAutomationStrategies.content,
    author: 'Dan Armour',
    date: '2024-04-15'
  },
  {
    id: 25,
    slug: sustainableBusinessAI.slug,
    title: sustainableBusinessAI.title,
    excerpt: sustainableBusinessAI.excerpt,
    content: sustainableBusinessAI.content,
    author: 'Dan Armour',
    date: '2024-04-10'
  },
  {
    id: 26,
    slug: digitalTransformationSuccessWelshSMEs.slug,
    title: digitalTransformationSuccessWelshSMEs.title,
    excerpt: digitalTransformationSuccessWelshSMEs.excerpt,
    content: digitalTransformationSuccessWelshSMEs.content,
    author: 'Dan Armour',
    date: '2024-04-05'
  },
  {
    id: 27,
    slug: midYearTechAssessment.slug,
    title: midYearTechAssessment.title,
    excerpt: midYearTechAssessment.excerpt,
    content: midYearTechAssessment.content,
    author: 'Dan Armour',
    date: '2024-03-30'
  },
  {
    id: 28,
    slug: aiDrivenDecisionMaking.slug,
    title: aiDrivenDecisionMaking.title,
    excerpt: aiDrivenDecisionMaking.excerpt,
    content: aiDrivenDecisionMaking.content,
    author: 'Dan Armour',
    date: '2024-03-25'
  },
  {
    id: 29,
    slug: futureRetailRuralCommunities.slug,
    title: futureRetailRuralCommunities.title,
    excerpt: futureRetailRuralCommunities.excerpt,
    content: futureRetailRuralCommunities.content,
    author: 'Dan Armour',
    date: '2024-03-20'
  },
  {
    id: 30,
    slug: workplaceChampionsTechAdoption.slug,
    title: workplaceChampionsTechAdoption.title,
    excerpt: workplaceChampionsTechAdoption.excerpt,
    content: workplaceChampionsTechAdoption.content,
    author: 'Dan Armour',
    date: '2024-03-15'
  },
  {
    id: 8,
    slug: hybridWorkSuccess.slug,
    title: hybridWorkSuccess.title,
    excerpt: hybridWorkSuccess.excerpt,
    content: hybridWorkSuccess.content,
    author: 'Dan Armour',
    date: '2024-02-05'
  },
  {
    id: 9,
    slug: supplyChainDigitization.slug,
    title: supplyChainDigitization.title,
    excerpt: supplyChainDigitization.excerpt,
    content: supplyChainDigitization.content,
    author: 'Dan Armour',
    date: '2024-01-30'
  },
  {
    id: 10,
    slug: businessContinuityInUncertainTimes.slug,
    title: businessContinuityInUncertainTimes.title,
    excerpt: businessContinuityInUncertainTimes.excerpt,
    content: businessContinuityInUncertainTimes.content,
    author: 'Dan Armour',
    date: '2024-01-25'
  },
  {
    id: 11,
    slug: navigatingTheComplianceMaze.slug,
    title: navigatingTheComplianceMaze.title,
    excerpt: navigatingTheComplianceMaze.excerpt,
    content: navigatingTheComplianceMaze.content,
    author: 'Dan Armour',
    date: '2024-01-20'
  },
  {
    id: 12,
    slug: breakingFreeFromLegacySystems.slug,
    title: breakingFreeFromLegacySystems.title,
    excerpt: breakingFreeFromLegacySystems.excerpt,
    content: breakingFreeFromLegacySystems.content,
    author: 'Dan Armour',
    date: '2024-01-15'
  },
  {
    id: 13,
    slug: twentyEssentialDigitalSkills.slug,
    title: twentyEssentialDigitalSkills.title,
    excerpt: twentyEssentialDigitalSkills.excerpt,
    content: twentyEssentialDigitalSkills.content,
    author: 'Dan Armour',
    date: '2024-01-10'
  }
];