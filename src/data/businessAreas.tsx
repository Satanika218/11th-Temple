
import { Bot, TrendingUp, Users, Shield, Zap, Palette } from "lucide-react";

export const businessAreas = [
  {
    id: "customer-growth",
    title: "Customer Growth & Marketing",
    icon: <TrendingUp className="h-6 w-6" />,
    description: "Drive customer acquisition and retention with AI-powered marketing solutions tailored for regional businesses.",
    services: [
      {
        icon: <TrendingUp className="h-8 w-8 text-brand-lime" />,
        title: "Local SEO AI",
        description: "Boost your local visibility and attract more nearby customers with our AI-powered local SEO services.",
        benefits: [
          "Free SEO audit and report",
          "Location-specific keyword optimization", 
          "Google Business Profile optimization",
          "Local citation building"
        ],
        link: "/services/local-seo",
        primaryCta: "Learn More",
        secondaryCta: "Get Free Audit",
        secondaryLink: "/seo-audit"
      }
    ]
  },
  {
    id: "operational-efficiency", 
    title: "Operational Efficiency",
    icon: <Bot className="h-6 w-6" />,
    description: "Streamline your operations with intelligent automation that eliminates manual tasks and reduces costs.",
    services: [
      {
        icon: <Bot className="h-8 w-8 text-brand-lime" />,
        title: "Process Automation",
        description: "Transform repetitive tasks into automated workflows that understand your local business context.",
        benefits: [
          "Save 40+ hours per week on manual tasks",
          "Reduce human error by 95%",
          "24/7 automated operations",
          "Custom workflows for your business"
        ],
        link: "/services/process-automation",
        primaryCta: "Learn More"
      },
      {
        icon: <TrendingUp className="h-8 w-8 text-brand-lime" />,
        title: "Data Analytics",
        description: "Make data-driven decisions with AI analytics that reveal insights unique to your local market.",
        benefits: [
          "Free analytics audit and report",
          "Understand local buying patterns",
          "Predict seasonal demand fluctuations",
          "Increase customer retention by 45%"
        ],
        link: "/services/data-analytics",
        primaryCta: "Learn More",
        secondaryCta: "Get Free Audit", 
        secondaryLink: "/analytics-audit"
      }
    ]
  },
  {
    id: "customer-experience",
    title: "Customer Experience", 
    icon: <Users className="h-6 w-6" />,
    description: "Deliver exceptional customer experiences with AI-powered service solutions that work around the clock.",
    services: [
      {
        icon: <Users className="h-8 w-8 text-brand-lime" />,
        title: "Smart Customer Service",
        description: "AI-powered customer service that speaks your local language and understands your community values.",
        benefits: [
          "24/7 intelligent customer support",
          "Instant response to customer inquiries", 
          "Local cultural understanding",
          "Seamless escalation to human agents"
        ],
        link: "/services/customer-service",
        primaryCta: "Learn More"
      },
      {
        icon: <Bot className="h-8 w-8 text-brand-lime" />,
        title: "Website Creation & Optimization",
        description: "Modern, mobile-friendly websites designed to convert visitors into customers.",
        benefits: [
          "Mobile-optimized design",
          "Fast loading speeds",
          "SEO-friendly structure", 
          "Easy content management"
        ],
        link: "/services/website-creation",
        primaryCta: "Learn More"
      }
    ]
  },
  {
    id: "design-marketing",
    title: "Design & Marketing",
    icon: <Palette className="h-6 w-6" />,
    description: "Transform your brand's visual identity with comprehensive design services that captivate audiences and strengthen market presence.",
    services: [
      {
        icon: <Palette className="h-8 w-8 text-brand-lime" />,
        title: "Visual Design Services",
        description: "Elevate your brand with strategic visual design solutions that drive engagement and support growth.",
        benefits: [
          "Brand development and guidelines",
          "Digital presence optimization",
          "Visual content creation",
          "Marketing materials design"
        ],
        link: "/services/design-marketing",
        primaryCta: "Learn More"
      }
    ]
  },
  {
    id: "data-security",
    title: "Data Security & Compliance",
    icon: <Shield className="h-6 w-6" />,
    description: "Protect your business data and ensure compliance with robust security solutions.",
    services: [
      {
        icon: <Shield className="h-8 w-8 text-brand-lime" />,
        title: "Security & Compliance",
        description: "Comprehensive data protection and compliance management for peace of mind.",
        benefits: [
          "GDPR compliance support",
          "Secure data storage solutions",
          "Regular security audits",
          "24/7 monitoring and alerts"
        ],
        link: "/contact",
        primaryCta: "Contact Us"
      }
    ]
  },
  {
    id: "business-resilience", 
    title: "Business Resilience",
    icon: <Zap className="h-6 w-6" />,
    description: "Ensure your business stays operational with robust continuity and infrastructure support.",
    services: [
      {
        icon: <Zap className="h-8 w-8 text-brand-lime" />,
        title: "Sales & Lead Generation Tools",
        description: "Automate your sales pipeline and generate more qualified leads for your business.",
        benefits: [
          "Automated lead capture",
          "CRM integration",
          "Sales pipeline optimization",
          "Performance tracking and analytics"
        ],
        link: "/services/sales-lead-tools",
        primaryCta: "Learn More"
      }
    ]
  }
];
