// CTA Variations for 11th Temple Solutions
// Implementing Prompt 1: Create 5 different CTA variations with urgency and value propositions

export interface CTAVariation {
  id: string;
  type: 'urgency' | 'value' | 'risk-reversal' | 'social-proof' | 'benefit';
  headline: string;
  subheadline: string;
  buttonText: string;
  buttonLink: string;
  urgencyText?: string;
  icon?: string;
}

export const ctaVariations: CTAVariation[] = [
  {
    id: 'urgency-1',
    type: 'urgency',
    headline: 'Limited Consultation Slots Available',
    subheadline: 'Only 5 free AI readiness assessments remaining this month for Welsh SMEs',
    buttonText: 'Claim Your Free Assessment',
    buttonLink: '/consultation',
    urgencyText: '⏰ Book within 48 hours',
    icon: 'clock'
  },
  {
    id: 'value-1',
    type: 'value',
    headline: 'Get Your Free AI Readiness Assessment',
    subheadline: 'Discover exactly how AI can transform your business with our comprehensive 30-minute consultation',
    buttonText: 'Start Free Assessment',
    buttonLink: '/consultation',
    icon: 'gift'
  },
  {
    id: 'risk-reversal-1',
    type: 'risk-reversal',
    headline: 'Risk-Free AI Transformation',
    subheadline: '30-day money-back guarantee. If you don\'t see measurable improvements, we\'ll refund 100%',
    buttonText: 'Get Started Risk-Free',
    buttonLink: '/consultation',
    icon: 'shield'
  },
  {
    id: 'social-proof-1',
    type: 'social-proof',
    headline: 'Join 50+ Welsh SMEs Already Transforming',
    subheadline: 'Businesses across Powys, Herefordshire, and Shropshire are saving £10-15k annually with our AI solutions',
    buttonText: 'See Success Stories',
    buttonLink: '/results-gallery',
    icon: 'users'
  },
  {
    id: 'benefit-1',
    type: 'benefit',
    headline: 'Save £10-15k Annually with AI Automation',
    subheadline: 'Reduce operational costs by 50% while improving customer satisfaction by 300%',
    buttonText: 'Calculate Your Savings',
    buttonLink: '/roi-calculator',
    icon: 'trending-up'
  }
];

// Homepage Hero CTAs
export const heroC TAs = {
  primary: {
    text: 'Book Free Consultation',
    link: '/consultation',
    variant: 'default' as const
  },
  secondary: {
    text: 'Explore Free Tools',
    link: '/free-tools',
    variant: 'outline' as const
  },
  tertiary: {
    text: 'Calculate Your ROI',
    link: '/roi-calculator',
    variant: 'ghost' as const
  }
};

// Service Page CTAs
export const servicePageCTAs = {
  processAutomation: {
    headline: 'Automate Your Business Processes Today',
    subheadline: 'Save 10+ hours per week on repetitive tasks',
    buttonText: 'Get Started',
    buttonLink: '/consultation'
  },
  customerService: {
    headline: 'Transform Your Customer Service',
    subheadline: '24/7 AI-powered support for your customers',
    buttonText: 'See How It Works',
    buttonLink: '/consultation'
  },
  dataAnalytics: {
    headline: 'Unlock Your Business Data',
    subheadline: 'Make data-driven decisions with AI insights',
    buttonText: 'Start Analysis',
    buttonLink: '/consultation'
  },
  localSEO: {
    headline: 'Dominate Local Search Results',
    subheadline: 'Outrank competitors in Powys, Herefordshire & Shropshire',
    buttonText: 'Boost Rankings',
    buttonLink: '/consultation'
  }
};

// Blog Post CTAs
export const blogCTAs = [
  {
    headline: 'Ready to Implement AI in Your Business?',
    subheadline: 'Get a personalized AI strategy consultation',
    buttonText: 'Book Free Consultation',
    buttonLink: '/consultation'
  },
  {
    headline: 'Download Our Free AI Adoption Guide',
    subheadline: 'Complete roadmap for Welsh SMEs',
    buttonText: 'Get Free Guide',
    buttonLink: '/resources/ai-adoption-guide'
  },
  {
    headline: 'Take Our AI Readiness Quiz',
    subheadline: 'Find out if your business is ready for AI in 5 minutes',
    buttonText: 'Start Quiz',
    buttonLink: '/digital-skills-quiz'
  }
];

// Exit Intent CTAs
export const exitIntentCTAs = [
  {
    headline: 'Wait! Before You Go...',
    subheadline: 'Get our free "AI for Welsh SMEs" guide delivered to your inbox',
    buttonText: 'Send Me The Guide',
    placeholder: 'Enter your email',
    icon: 'mail'
  },
  {
    headline: 'Don\'t Miss Out on Free AI Assessment',
    subheadline: 'Limited slots available - book your free 30-minute consultation',
    buttonText: 'Claim My Free Slot',
    buttonLink: '/consultation',
    icon: 'calendar'
  }
];

// Urgency Messages
export const urgencyMessages = [
  '⏰ Only 3 consultation slots left this week',
  '🔥 Special offer ends in 48 hours',
  '⚡ Limited time: Free AI readiness assessment',
  '🎯 Join 50+ Welsh SMEs already transforming',
  '💡 Book today, start saving tomorrow'
];

// Trust Indicators
export const trustIndicators = [
  {
    icon: 'users',
    text: '50+ Welsh SMEs Served',
    subtext: 'Across Powys, Herefordshire & Shropshire'
  },
  {
    icon: 'award',
    text: '£500k+ in Client Savings',
    subtext: 'Average £10-15k per business annually'
  },
  {
    icon: 'star',
    text: '4.9/5 Client Satisfaction',
    subtext: 'Based on 40+ verified reviews'
  },
  {
    icon: 'shield',
    text: '100% Money-Back Guarantee',
    subtext: 'Risk-free 30-day trial period'
  }
];

// Social Proof Elements
export const socialProofElements = [
  {
    type: 'stat',
    value: '92.6%',
    label: 'of Welsh SMEs haven\'t adopted AI yet',
    context: 'Be ahead of the curve'
  },
  {
    type: 'stat',
    value: '£10-15k',
    label: 'Average annual savings',
    context: 'For businesses using our solutions'
  },
  {
    type: 'stat',
    value: '50%',
    label: 'Reduction in operational costs',
    context: 'Typical results within 90 days'
  },
  {
    type: 'testimonial',
    quote: 'Saved us 10 hours per week on admin tasks',
    author: 'Construction Company, Mid-Wales',
    rating: 5
  }
];

// Value Propositions
export const valuePropositions = [
  {
    headline: 'AI Democratization for Rural Britain',
    subheadline: 'Making enterprise-level AI accessible and affordable for Welsh SMEs',
    benefits: [
      'No technical expertise required',
      'Affordable pricing for SMEs',
      'Local support in Welsh & English',
      'Government funding assistance'
    ]
  },
  {
    headline: 'Your Rural Business AI Partner',
    subheadline: 'We understand the unique challenges of Welsh and border county businesses',
    benefits: [
      'Specialized in rural business needs',
      'Understanding of local markets',
      'Bilingual support (Welsh/English)',
      'Community-focused approach'
    ]
  }
];

export default {
  ctaVariations,
  heroCTAs,
  servicePageCTAs,
  blogCTAs,
  exitIntentCTAs,
  urgencyMessages,
  trustIndicators,
  socialProofElements,
  valuePropositions
};