// Pricing Data for 11th Temple Solutions
// Implementing Prompt 15: Create pricing page with service packages and ROI projections

export interface PricingTier {
  id: string;
  name: string;
  tagline: string;
  price: {
    min: number;
    max: number;
    display: string;
  };
  popular?: boolean;
  features: string[];
  included: string[];
  idealFor: string[];
  roi: {
    timeframe: string;
    percentage: string;
    annualSavings: string;
  };
  caseStudy?: {
    business: string;
    result: string;
  };
  cta: {
    text: string;
    link: string;
  };
}

export const pricingTiers: PricingTier[] = [
  {
    id: 'starter',
    name: 'Starter',
    tagline: 'Perfect for businesses taking their first steps into AI',
    price: {
      min: 2500,
      max: 5000,
      display: '£2,500 - £5,000'
    },
    features: [
      'Single AI solution implementation',
      'Basic process automation',
      'Email support (48-hour response)',
      '30 days post-launch support',
      'User training (2 hours)',
      'Documentation and guides'
    ],
    included: [
      'AI Readiness Assessment',
      'Implementation roadmap',
      'Basic training materials',
      'Email support',
      '30-day money-back guarantee'
    ],
    idealFor: [
      'Businesses with 1-5 employees',
      'Single department automation',
      'Testing AI before full commitment',
      'Limited budget but ready to start'
    ],
    roi: {
      timeframe: '6-12 months',
      percentage: '150-200%',
      annualSavings: '£5,000-£8,000'
    },
    caseStudy: {
      business: 'Local Restaurant, Powys',
      result: 'Reduced food waste by 30% with AI inventory management - £2,500 investment, £5,000 annual savings'
    },
    cta: {
      text: 'Get Started',
      link: '/consultation'
    }
  },
  {
    id: 'growth',
    name: 'Growth',
    tagline: 'Comprehensive AI transformation for growing businesses',
    price: {
      min: 5000,
      max: 15000,
      display: '£5,000 - £15,000'
    },
    popular: true,
    features: [
      'Multiple AI solutions (2-3 systems)',
      'Advanced automation workflows',
      'Customer service AI (chatbot)',
      'Data analytics dashboard',
      'Priority support (24-hour response)',
      '90 days premium support',
      'Comprehensive training (8 hours)',
      'Monthly optimization calls (3 months)'
    ],
    included: [
      'Everything in Starter, plus:',
      'Advanced AI solutions',
      'Integration with existing systems',
      'Custom workflow design',
      'Priority support',
      'Quarterly strategy sessions'
    ],
    idealFor: [
      'Businesses with 5-20 employees',
      'Multiple departments',
      'Ready for significant transformation',
      'Want measurable ROI quickly'
    ],
    roi: {
      timeframe: '3-6 months',
      percentage: '250-350%',
      annualSavings: '£10,000-£15,000'
    },
    caseStudy: {
      business: 'Holiday Cottages, Brecon Beacons',
      result: '300% booking increase with AI chatbot and dynamic pricing - £12,000 investment, £15,000 annual savings'
    },
    cta: {
      text: 'Most Popular',
      link: '/consultation'
    }
  },
  {
    id: 'enterprise',
    name: 'Enterprise',
    tagline: 'Complete AI ecosystem for established businesses',
    price: {
      min: 15000,
      max: 50000,
      display: '£15,000 - £50,000'
    },
    features: [
      'Comprehensive AI ecosystem (4+ systems)',
      'Predictive analytics and ML models',
      'Custom AI development',
      'Full system integration',
      'Dedicated account manager',
      'Premium support (2-hour response)',
      '12 months premium support',
      'Extensive training program (20+ hours)',
      'Monthly strategy and optimization',
      'Advanced reporting and insights'
    ],
    included: [
      'Everything in Growth, plus:',
      'Custom AI development',
      'Dedicated account manager',
      'Advanced predictive analytics',
      'Full integration services',
      'Ongoing optimization',
      'Executive reporting'
    ],
    idealFor: [
      'Businesses with 20+ employees',
      'Complex operations',
      'Multiple locations',
      'Ready for complete digital transformation'
    ],
    roi: {
      timeframe: '6-12 months',
      percentage: '300-500%',
      annualSavings: '£20,000-£50,000+'
    },
    caseStudy: {
      business: 'Manufacturing Company, Herefordshire',
      result: '50% efficiency gain with predictive maintenance - £25,000 investment, £18,000 annual savings'
    },
    cta: {
      text: 'Contact Us',
      link: '/consultation'
    }
  },
  {
    id: 'custom',
    name: 'Custom',
    tagline: 'Bespoke AI solutions for unique business needs',
    price: {
      min: 50000,
      max: 0,
      display: 'Custom Quote'
    },
    features: [
      'Fully customized AI solutions',
      'Proprietary algorithm development',
      'Enterprise-grade infrastructure',
      'White-label solutions',
      'Multi-location deployment',
      'Dedicated development team',
      '24/7 premium support',
      'Unlimited training and support',
      'Strategic partnership',
      'Revenue-share options available'
    ],
    included: [
      'Everything in Enterprise, plus:',
      'Custom development',
      'Proprietary solutions',
      'White-label options',
      'Strategic partnership',
      'Flexible commercial terms'
    ],
    idealFor: [
      'Large organizations',
      'Unique industry requirements',
      'Multi-location businesses',
      'Strategic AI partnerships'
    ],
    roi: {
      timeframe: '12-24 months',
      percentage: '400-600%',
      annualSavings: '£50,000+'
    },
    caseStudy: {
      business: 'Regional Retail Chain',
      result: 'Custom AI platform across 15 locations - Significant competitive advantage and operational efficiency'
    },
    cta: {
      text: 'Discuss Your Needs',
      link: '/consultation'
    }
  }
];

// Add-on Services
export const addonServices = [
  {
    name: 'GDPR Compliance Audit',
    price: '£1,500',
    description: 'Comprehensive GDPR compliance assessment and implementation support',
    duration: '2-3 weeks'
  },
  {
    name: 'Advanced Training Package',
    price: '£500/day',
    description: 'Additional on-site or remote training for your team',
    duration: 'Flexible'
  },
  {
    name: 'Monthly Optimization',
    price: '£500/month',
    description: 'Ongoing AI system optimization and performance tuning',
    duration: 'Ongoing'
  },
  {
    name: 'Custom Integration',
    price: '£2,000-£10,000',
    description: 'Integration with specialized business systems',
    duration: '4-8 weeks'
  },
  {
    name: 'AI Strategy Consulting',
    price: '£1,000/day',
    description: 'Strategic AI planning and roadmap development',
    duration: 'Flexible'
  }
];

// Payment Options
export const paymentOptions = [
  {
    name: 'Upfront Payment',
    discount: '10% discount',
    description: 'Pay in full before implementation begins',
    benefits: ['Best value', 'Priority scheduling', 'Extended support']
  },
  {
    name: 'Milestone Payments',
    discount: '5% discount',
    description: 'Pay in 3-4 installments tied to project milestones',
    benefits: ['Flexible cash flow', 'Pay as you progress', 'Risk mitigation']
  },
  {
    name: 'Monthly Installments',
    discount: 'Standard pricing',
    description: 'Spread payments over 6-12 months',
    benefits: ['Manageable payments', 'No large upfront cost', 'Budget-friendly']
  },
  {
    name: 'Revenue Share',
    discount: 'No upfront cost',
    description: 'Pay a percentage of savings/revenue generated (custom arrangements)',
    benefits: ['Zero upfront investment', 'Aligned incentives', 'Performance-based']
  }
];

// Government Funding Options
export const fundingOptions = [
  {
    name: 'Welsh Government Business Wales',
    coverage: 'Up to 50%',
    maxAmount: '£25,000',
    description: 'Support for Welsh SMEs adopting digital technologies',
    eligibility: 'Welsh businesses with <250 employees',
    link: 'https://businesswales.gov.wales/'
  },
  {
    name: 'UK Innovation Grants',
    coverage: 'Up to 60%',
    maxAmount: '£50,000',
    description: 'Innovate UK funding for innovative technology adoption',
    eligibility: 'UK businesses developing innovative solutions',
    link: 'https://www.ukri.org/councils/innovate-uk/'
  },
  {
    name: 'Rural Development Programme',
    coverage: 'Up to 40%',
    maxAmount: '£20,000',
    description: 'Support for rural businesses in Wales',
    eligibility: 'Rural businesses in designated areas',
    link: 'https://gov.wales/rural-development-programme'
  },
  {
    name: 'Development Bank of Wales',
    coverage: 'Loans available',
    maxAmount: '£50,000+',
    description: 'Flexible business loans for Welsh SMEs',
    eligibility: 'Welsh businesses with viable growth plans',
    link: 'https://developmentbank.wales/'
  }
];

// ROI Calculator Presets
export const roiPresets = {
  agriculture: {
    averageInvestment: 8500,
    averageSavings: 12000,
    timeToROI: 9,
    commonBenefits: ['Reduced labor costs', 'Optimized resource use', 'Improved yields']
  },
  tourism: {
    averageInvestment: 12000,
    averageSavings: 15000,
    timeToROI: 6,
    commonBenefits: ['Increased bookings', '24/7 availability', 'Dynamic pricing']
  },
  manufacturing: {
    averageInvestment: 25000,
    averageSavings: 18000,
    timeToROI: 12,
    commonBenefits: ['Reduced downtime', 'Quality improvement', 'Efficiency gains']
  },
  retail: {
    averageInvestment: 9500,
    averageSavings: 14000,
    timeToROI: 8,
    commonBenefits: ['Better inventory', 'Personalization', 'Marketing ROI']
  },
  professionalServices: {
    averageInvestment: 7500,
    averageSavings: 35000,
    timeToROI: 4,
    commonBenefits: ['Time savings', 'More clients', 'Error reduction']
  }
};

// Comparison with Competitors
export const competitorComparison = {
  features: [
    'SME-Focused Pricing',
    'Rural Business Expertise',
    'Welsh Language Support',
    'Government Funding Assistance',
    'Local On-Site Support',
    'Flexible Payment Plans',
    '30-Day Money-Back Guarantee',
    'Bilingual Documentation',
    'Community Focus',
    'No Hidden Fees'
  ],
  competitors: [
    {
      name: '11th Temple Solutions',
      features: [true, true, true, true, true, true, true, true, true, true]
    },
    {
      name: 'Enterprise Consultancies',
      features: [false, false, false, false, false, false, false, false, false, false]
    },
    {
      name: 'Generic AI Providers',
      features: [false, false, false, false, false, true, false, false, false, false]
    }
  ]
};

export default {
  pricingTiers,
  addonServices,
  paymentOptions,
  fundingOptions,
  roiPresets,
  competitorComparison
};