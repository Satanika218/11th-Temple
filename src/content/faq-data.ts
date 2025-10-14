// FAQ Data for 11th Temple Solutions
// Implementing Prompt 29: Create FAQ section addressing top 20 SME concerns

export interface FAQItem {
  id: string;
  category: string;
  question: string;
  answer: string;
  relatedLinks?: { text: string; url: string }[];
}

export const faqCategories = [
  'Getting Started',
  'Pricing & ROI',
  'Implementation',
  'Support & Training',
  'Technical Questions'
];

export const faqData: FAQItem[] = [
  // GETTING STARTED
  {
    id: 'gs-1',
    category: 'Getting Started',
    question: 'Is my business ready for AI?',
    answer: 'Most Welsh SMEs are ready for AI, even if they don\'t realize it! If you\'re spending time on repetitive tasks, struggling with customer inquiries, or want to understand your data better, AI can help. We offer a free AI Readiness Assessment to evaluate your specific situation and recommend the best starting point.',
    relatedLinks: [
      { text: 'Take AI Readiness Quiz', url: '/digital-skills-quiz' },
      { text: 'Book Free Assessment', url: '/consultation' }
    ]
  },
  {
    id: 'gs-2',
    category: 'Getting Started',
    question: 'Do I need technical expertise to use AI?',
    answer: 'Absolutely not! We design our AI solutions specifically for non-technical business owners. Our systems are user-friendly, and we provide comprehensive training. If you can use a smartphone or computer, you can use our AI tools. We handle all the technical complexity behind the scenes.',
    relatedLinks: [
      { text: 'See How It Works', url: '/services' }
    ]
  },
  {
    id: 'gs-3',
    category: 'Getting Started',
    question: 'How long does it take to see results?',
    answer: 'Most clients see measurable improvements within 30-90 days. Quick wins like chatbot deployment or document automation can show results in weeks. More complex implementations like predictive analytics may take 2-3 months. We focus on delivering early wins while building toward long-term transformation.',
    relatedLinks: [
      { text: 'View Success Stories', url: '/results-gallery' }
    ]
  },
  {
    id: 'gs-4',
    category: 'Getting Started',
    question: 'What industries do you work with?',
    answer: 'We specialize in Welsh and border county SMEs across all industries, with particular expertise in agriculture, tourism, manufacturing, retail, and professional services. Our rural business focus means we understand the unique challenges of businesses in Powys, Herefordshire, Shropshire, and Monmouthshire.',
    relatedLinks: [
      { text: 'Industry Solutions', url: '/solutions' }
    ]
  },
  {
    id: 'gs-5',
    category: 'Getting Started',
    question: 'Can AI really help a small business like mine?',
    answer: 'Yes! In fact, SMEs often benefit more from AI than large enterprises because the efficiency gains are more immediately noticeable. Our clients typically save £10-15k annually and reduce operational costs by 50%. AI levels the playing field, giving small businesses enterprise-level capabilities at SME prices.',
    relatedLinks: [
      { text: 'Calculate Your Savings', url: '/roi-calculator' }
    ]
  },

  // PRICING & ROI
  {
    id: 'pr-1',
    category: 'Pricing & ROI',
    question: 'How much does AI implementation cost?',
    answer: 'Our solutions range from £2,500 for basic automation to £50,000 for comprehensive enterprise systems. Most Welsh SMEs invest £5,000-£15,000 for solutions that deliver £10-15k in annual savings. We offer flexible payment plans and can help you access government funding to reduce costs.',
    relatedLinks: [
      { text: 'View Pricing', url: '/pricing' },
      { text: 'Funding Navigator', url: '/funding-navigator' }
    ]
  },
  {
    id: 'pr-2',
    category: 'Pricing & ROI',
    question: 'What kind of ROI can I expect?',
    answer: 'Our clients typically see 200-400% ROI in the first year. Average annual savings are £10-15k through reduced operational costs, increased efficiency, and improved customer satisfaction. We provide detailed ROI projections during your free consultation and track results throughout implementation.',
    relatedLinks: [
      { text: 'ROI Calculator', url: '/roi-calculator' },
      { text: 'Success Stories', url: '/results-gallery' }
    ]
  },
  {
    id: 'pr-3',
    category: 'Pricing & ROI',
    question: 'Are there ongoing costs after implementation?',
    answer: 'Yes, but they\'re minimal. Most solutions have monthly costs of £50-200 for software licenses and cloud services. We also offer optional support packages (£200-500/month) for ongoing optimization and updates. All costs are transparent and discussed upfront - no hidden fees.',
    relatedLinks: [
      { text: 'View Pricing Details', url: '/pricing' }
    ]
  },
  {
    id: 'pr-4',
    category: 'Pricing & ROI',
    question: 'Do you offer payment plans?',
    answer: 'Yes! We offer flexible payment plans to make AI accessible for SMEs. Options include monthly installments, milestone-based payments, and revenue-share arrangements. We can also help you apply for government grants and funding that can cover 40-60% of implementation costs.',
    relatedLinks: [
      { text: 'Funding Options', url: '/funding-navigator' },
      { text: 'Book Consultation', url: '/consultation' }
    ]
  },
  {
    id: 'pr-5',
    category: 'Pricing & ROI',
    question: 'Is there a money-back guarantee?',
    answer: 'Yes! We offer a 30-day money-back guarantee. If you\'re not satisfied with the results or don\'t see measurable improvements, we\'ll refund 100% of your investment. We\'re confident in our solutions because we\'ve seen them transform 50+ Welsh SMEs.',
    relatedLinks: [
      { text: 'Learn More', url: '/about' }
    ]
  },

  // IMPLEMENTATION
  {
    id: 'im-1',
    category: 'Implementation',
    question: 'How long does implementation take?',
    answer: 'Implementation timelines vary by solution complexity: Simple automation (2-4 weeks), Chatbots and customer service (4-6 weeks), Data analytics systems (6-8 weeks), Comprehensive solutions (8-12 weeks). We work around your schedule and ensure minimal disruption to your business operations.',
    relatedLinks: [
      { text: 'Implementation Process', url: '/services' }
    ]
  },
  {
    id: 'im-2',
    category: 'Implementation',
    question: 'Will AI disrupt my current operations?',
    answer: 'No. We design implementations to minimize disruption. Most work happens in parallel with your existing systems, and we switch over during quiet periods. We also provide comprehensive training so your team is comfortable before going live. Our phased approach ensures smooth transitions.',
    relatedLinks: [
      { text: 'Our Process', url: '/about' }
    ]
  },
  {
    id: 'im-3',
    category: 'Implementation',
    question: 'What happens if something goes wrong?',
    answer: 'We provide 24/7 emergency support during implementation and 90 days post-launch. Our systems include backup and rollback capabilities. If issues arise, we respond within 2 hours for critical problems. We also maintain your existing systems until the new solution is proven stable.',
    relatedLinks: [
      { text: 'Support Options', url: '/contact' }
    ]
  },
  {
    id: 'im-4',
    category: 'Implementation',
    question: 'Do I need to hire new staff?',
    answer: 'No. Our AI solutions are designed to augment your existing team, not replace them. We train your current staff to use the new systems effectively. In fact, most clients find they can handle more work with their existing team, or redeploy staff to higher-value activities.',
    relatedLinks: [
      { text: 'Training Programs', url: '/services' }
    ]
  },
  {
    id: 'im-5',
    category: 'Implementation',
    question: 'Can AI integrate with my existing systems?',
    answer: 'Yes! We specialize in integrating AI with existing business systems including accounting software (Xero, QuickBooks, Sage), CRM systems, booking platforms, and industry-specific tools. We assess your current tech stack during consultation and design seamless integrations.',
    relatedLinks: [
      { text: 'Book Technical Consultation', url: '/consultation' }
    ]
  },

  // SUPPORT & TRAINING
  {
    id: 'st-1',
    category: 'Support & Training',
    question: 'What training do you provide?',
    answer: 'We provide comprehensive training including: Initial onboarding sessions (2-4 hours), Hands-on workshops for your team, Video tutorials and documentation, Ongoing support calls (first 90 days), Advanced training for power users. All training is tailored to your team\'s technical level.',
    relatedLinks: [
      { text: 'Training Programs', url: '/services' }
    ]
  },
  {
    id: 'st-2',
    category: 'Support & Training',
    question: 'Do you offer ongoing support?',
    answer: 'Yes! We offer multiple support tiers: Basic (email support, 48-hour response), Standard (email + phone, 24-hour response, £200/month), Premium (priority support, 2-hour response, monthly optimization, £500/month). All clients get 90 days of free premium support post-implementation.',
    relatedLinks: [
      { text: 'Support Plans', url: '/pricing' }
    ]
  },
  {
    id: 'st-3',
    category: 'Support & Training',
    question: 'Can you train my team remotely?',
    answer: 'Absolutely! We offer both in-person and remote training. Remote training via video call works well for most clients and saves travel time. We also provide recorded sessions so your team can review training materials anytime. For complex implementations, we recommend at least one in-person session.',
    relatedLinks: [
      { text: 'Book Training', url: '/consultation' }
    ]
  },
  {
    id: 'st-4',
    category: 'Support & Training',
    question: 'What if my team is resistant to change?',
    answer: 'Change management is part of our service. We help you communicate benefits to your team, provide hands-on training that builds confidence, show quick wins to build enthusiasm, and offer ongoing support during the transition. We\'ve successfully helped 50+ teams embrace AI.',
    relatedLinks: [
      { text: 'Success Stories', url: '/results-gallery' }
    ]
  },
  {
    id: 'st-5',
    category: 'Support & Training',
    question: 'Do you provide Welsh language support?',
    answer: 'Yes! We provide bilingual support in Welsh and English. Our team includes Welsh speakers, and we can deliver training and documentation in Welsh. We understand the importance of Welsh language in business and community contexts across Wales.',
    relatedLinks: [
      { text: 'Contact Us', url: '/contact' }
    ]
  },

  // TECHNICAL QUESTIONS
  {
    id: 'tq-1',
    category: 'Technical Questions',
    question: 'Is my data safe and secure?',
    answer: 'Yes. We implement enterprise-grade security including: UK-based data storage (GDPR compliant), Encrypted data transmission and storage, Regular security audits, Access controls and authentication, Backup and disaster recovery. We never share your data with third parties.',
    relatedLinks: [
      { text: 'Privacy Policy', url: '/privacy' },
      { text: 'GDPR Compliance', url: '/gdpr-compliance' }
    ]
  },
  {
    id: 'tq-2',
    category: 'Technical Questions',
    question: 'What about GDPR compliance?',
    answer: 'All our solutions are GDPR compliant by design. We help you: Conduct data protection impact assessments, Implement proper consent mechanisms, Set up data retention policies, Create privacy notices, Train your team on GDPR requirements. We can also provide GDPR audit services.',
    relatedLinks: [
      { text: 'GDPR Services', url: '/gdpr-compliance' },
      { text: 'Take GDPR Quiz', url: '/gdpr-quiz' }
    ]
  },
  {
    id: 'tq-3',
    category: 'Technical Questions',
    question: 'What if I have poor internet connectivity?',
    answer: 'We understand rural connectivity challenges. We offer: Hybrid solutions (cloud + local processing), Offline-capable systems, Low-bandwidth optimized applications, Mobile-first designs. We assess your connectivity during consultation and design solutions that work with your infrastructure.',
    relatedLinks: [
      { text: 'Technical Consultation', url: '/consultation' }
    ]
  },
  {
    id: 'tq-4',
    category: 'Technical Questions',
    question: 'Can I access AI systems from mobile devices?',
    answer: 'Yes! All our solutions are mobile-responsive and work on smartphones and tablets. Many include dedicated mobile apps. This is especially important for businesses where staff work on-site or in the field. You can manage your AI systems from anywhere.',
    relatedLinks: [
      { text: 'See Demos', url: '/services' }
    ]
  },
  {
    id: 'tq-5',
    category: 'Technical Questions',
    question: 'What happens to my AI system if your company closes?',
    answer: 'We build portable solutions that you own. You receive: Full source code and documentation, Export capabilities for all data, Training to maintain systems independently, Recommendations for alternative providers. Your AI systems continue working even if we\'re not involved.',
    relatedLinks: [
      { text: 'Our Guarantee', url: '/about' }
    ]
  }
];

// Featured FAQs for homepage
export const featuredFAQs = faqData.filter(faq => 
  ['gs-1', 'pr-1', 'pr-2', 'im-1', 'st-1'].includes(faq.id)
);

export default {
  faqData,
  faqCategories,
  featuredFAQs
};