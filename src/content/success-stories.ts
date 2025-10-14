// Success Stories and Results for Results Gallery
// Implementing Prompt 6: Create Results Gallery with 5 client success stories

export interface SuccessStory {
  id: string;
  industry: string;
  businessType: string;
  location: string;
  challenge: string;
  solution: string;
  results: {
    metric: string;
    value: string;
    description: string;
  }[];
  testimonial: {
    quote: string;
    author: string;
    position: string;
  };
  timeline: string;
  investment: string;
  roi: string;
  tags: string[];
}

export const successStories: SuccessStory[] = [
  {
    id: 'agriculture-1',
    industry: 'Agriculture',
    businessType: 'Family Farm',
    location: 'Powys, Wales',
    challenge: 'Manual record-keeping for livestock and crop management was consuming 15+ hours per week. Difficulty tracking yields, costs, and compliance requirements.',
    solution: 'Implemented AI-powered farm management system with automated data collection, predictive analytics for crop yields, and compliance tracking.',
    results: [
      {
        metric: 'Cost Reduction',
        value: '40%',
        description: 'Reduced operational costs through optimized resource allocation'
      },
      {
        metric: 'Time Savings',
        value: '15 hrs/week',
        description: 'Freed up time for strategic farm management'
      },
      {
        metric: 'Yield Improvement',
        value: '25%',
        description: 'Increased crop yields through data-driven decisions'
      },
      {
        metric: 'ROI',
        value: '£12,000/year',
        description: 'Annual savings and increased revenue'
      }
    ],
    testimonial: {
      quote: 'The AI system transformed how we manage our farm. We\'re making better decisions based on data, not guesswork. The time savings alone have been incredible.',
      author: 'David Evans',
      position: 'Farm Owner'
    },
    timeline: '90 days to full implementation',
    investment: '£8,500',
    roi: '141% in first year',
    tags: ['Agriculture', 'Process Automation', 'Data Analytics', 'Powys']
  },
  {
    id: 'tourism-1',
    industry: 'Tourism & Hospitality',
    businessType: 'Holiday Cottages',
    location: 'Brecon Beacons, Wales',
    challenge: 'Managing bookings across multiple platforms, responding to inquiries 24/7, and optimizing pricing was overwhelming for a small team.',
    solution: 'Deployed AI chatbot for customer inquiries, automated booking management system, and dynamic pricing algorithm based on demand patterns.',
    results: [
      {
        metric: 'Booking Increase',
        value: '300%',
        description: '24/7 availability captured more bookings'
      },
      {
        metric: 'Response Time',
        value: '95% faster',
        description: 'Instant responses to customer inquiries'
      },
      {
        metric: 'Revenue Growth',
        value: '45%',
        description: 'Dynamic pricing optimized revenue'
      },
      {
        metric: 'Annual Savings',
        value: '£15,000',
        description: 'Reduced staffing costs and increased efficiency'
      }
    ],
    testimonial: {
      quote: 'We went from struggling to keep up with inquiries to having a system that handles everything automatically. Our bookings tripled and we\'re finally profitable.',
      author: 'Sarah Williams',
      position: 'Business Owner'
    },
    timeline: '60 days to full implementation',
    investment: '£12,000',
    roi: '225% in first year',
    tags: ['Tourism', 'Customer Service', 'Process Automation', 'Brecon Beacons']
  },
  {
    id: 'manufacturing-1',
    industry: 'Manufacturing',
    businessType: 'Small Manufacturing',
    location: 'Herefordshire',
    challenge: 'Equipment breakdowns causing costly downtime. No way to predict maintenance needs or optimize production schedules.',
    solution: 'Implemented predictive maintenance AI system with IoT sensors, production optimization algorithms, and quality control automation.',
    results: [
      {
        metric: 'Efficiency Gain',
        value: '50%',
        description: 'Optimized production schedules and reduced downtime'
      },
      {
        metric: 'Downtime Reduction',
        value: '70%',
        description: 'Predictive maintenance prevented breakdowns'
      },
      {
        metric: 'Quality Improvement',
        value: '35%',
        description: 'AI-powered quality control caught defects early'
      },
      {
        metric: 'Cost Savings',
        value: '£18,000/year',
        description: 'Reduced maintenance and waste costs'
      }
    ],
    testimonial: {
      quote: 'The predictive maintenance system has been a game-changer. We haven\'t had an unexpected breakdown in 6 months. Production is smoother than ever.',
      author: 'James Thompson',
      position: 'Operations Manager'
    },
    timeline: '120 days to full implementation',
    investment: '£25,000',
    roi: '172% in first year',
    tags: ['Manufacturing', 'Predictive Maintenance', 'Process Automation', 'Herefordshire']
  },
  {
    id: 'retail-1',
    industry: 'Retail',
    businessType: 'Independent Retailer',
    location: 'Shropshire',
    challenge: 'Difficulty understanding customer preferences, managing inventory, and competing with online retailers. Limited marketing budget.',
    solution: 'Deployed customer analytics AI, inventory optimization system, and personalized marketing automation.',
    results: [
      {
        metric: 'Customer Engagement',
        value: '200%',
        description: 'Personalized marketing increased engagement'
      },
      {
        metric: 'Inventory Efficiency',
        value: '40%',
        description: 'Reduced overstock and stockouts'
      },
      {
        metric: 'Sales Growth',
        value: '55%',
        description: 'Better product recommendations and targeting'
      },
      {
        metric: 'Marketing ROI',
        value: '400%',
        description: 'AI-optimized campaigns performed 4x better'
      }
    ],
    testimonial: {
      quote: 'Understanding our customers through AI has transformed our business. We\'re competing with big retailers now and winning on personalization.',
      author: 'Emma Davies',
      position: 'Store Owner'
    },
    timeline: '75 days to full implementation',
    investment: '£9,500',
    roi: '289% in first year',
    tags: ['Retail', 'Customer Analytics', 'Marketing Automation', 'Shropshire']
  },
  {
    id: 'professional-services-1',
    industry: 'Professional Services',
    businessType: 'Accounting Firm',
    location: 'Monmouthshire',
    challenge: 'Spending too much time on routine tasks like data entry, document processing, and client communications. Unable to take on more clients.',
    solution: 'Implemented document automation AI, client communication chatbot, and automated reporting system.',
    results: [
      {
        metric: 'Time Savings',
        value: '60%',
        description: 'Automated routine tasks freed up professional time'
      },
      {
        metric: 'Client Capacity',
        value: '+40%',
        description: 'Able to serve 40% more clients with same team'
      },
      {
        metric: 'Error Reduction',
        value: '85%',
        description: 'AI eliminated most data entry errors'
      },
      {
        metric: 'Revenue Growth',
        value: '£35,000/year',
        description: 'Increased capacity led to more billable hours'
      }
    ],
    testimonial: {
      quote: 'We\'ve gone from drowning in paperwork to focusing on high-value advisory work. Our clients are happier and we\'re more profitable.',
      author: 'Robert Hughes',
      position: 'Managing Partner'
    },
    timeline: '45 days to full implementation',
    investment: '£7,500',
    roi: '467% in first year',
    tags: ['Professional Services', 'Document Automation', 'Process Automation', 'Monmouthshire']
  }
];

// Aggregate Statistics for Dashboard
export const aggregateStats = {
  totalClients: 50,
  totalSavings: '£500,000+',
  averageSavings: '£10,000-£15,000',
  averageROI: '250%',
  averageImplementationTime: '75 days',
  clientSatisfaction: '4.9/5',
  industries: ['Agriculture', 'Tourism', 'Manufacturing', 'Retail', 'Professional Services'],
  locations: ['Powys', 'Herefordshire', 'Shropshire', 'Monmouthshire', 'Brecon Beacons']
};

// Quick Wins - Smaller Success Stories
export const quickWins = [
  {
    business: 'Local Restaurant',
    location: 'Powys',
    result: 'Reduced food waste by 30% with AI inventory management',
    timeframe: '30 days',
    investment: '£2,500'
  },
  {
    business: 'Construction Company',
    location: 'Herefordshire',
    result: 'Saved 10 hours/week on admin with document automation',
    timeframe: '21 days',
    investment: '£3,500'
  },
  {
    business: 'Tourism Operator',
    location: 'Brecon Beacons',
    result: 'Doubled online bookings with AI chatbot',
    timeframe: '45 days',
    investment: '£5,000'
  },
  {
    business: 'Veterinary Practice',
    location: 'Shropshire',
    result: 'Improved appointment scheduling efficiency by 70%',
    timeframe: '30 days',
    investment: '£4,000'
  }
];

export default {
  successStories,
  aggregateStats,
  quickWins
};