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