import { readFileSync } from 'fs';
import { join } from 'path';

interface ContentSection {
  title: string;
  content: string;
  type: 'page' | 'blog' | 'service' | 'about';
}

/**
 * Extract all relevant content from the website for LLM training
 */
export async function extractWebsiteContent(): Promise<string> {
  try {
    const contentSections: ContentSection[] = [];
    
    // Extract content from main pages
    const pages = [
      { name: 'Home', path: 'src/pages/Home.tsx', type: 'page' as const },
      { name: 'About', path: 'src/pages/About.tsx', type: 'about' as const },
      { name: 'Services', path: 'src/pages/Services.tsx', type: 'service' as const },
      { name: 'Contact', path: 'src/pages/Contact.tsx', type: 'page' as const },
      { name: 'Blog', path: 'src/pages/Blog.tsx', type: 'page' as const }
    ];

    for (const page of pages) {
      try {
        const content = extractPageContent(page.path, page.name);
        if (content) {
          contentSections.push({
            title: page.name,
            content: content,
            type: page.type
          });
        }
      } catch (error) {
        console.warn(`Could not extract content from ${page.path}:`, error);
      }
    }

    // Extract blog content
    const blogContent = await extractBlogContent();
    contentSections.push(...blogContent);

    // Extract service details
    const serviceDetails = await extractServiceDetails();
    contentSections.push(...serviceDetails);

    // Combine all content into a single string
    return combineContent(contentSections);
  } catch (error) {
    console.error('Error extracting website content:', error);
    throw error;
  }
}

/**
 * Extract content from a page file
 */
function extractPageContent(filePath: string, pageName: string): string {
  try {
    // This is a simplified extraction - in a real implementation, you'd parse the React components
    // For now, we'll use placeholder content based on what we know about the pages
    const pageContent = getPageContentByName(pageName);
    return pageContent;
  } catch (error) {
    console.error(`Error reading ${filePath}:`, error);
    return '';
  }
}

/**
 * Get page content based on page name
 */
function getPageContentByName(pageName: string): string {
  const pageContents: Record<string, string> = {
    'Home': `11th Temple Solutions specializes in AI and digital transformation for SMEs. We help businesses save time, reduce costs, and grow through practical AI implementation. Our services include AI opportunity assessment, practical implementation, integration, and skills development. We serve businesses across Wales and the border counties, with particular expertise in rural business transformation.`,
    
    'About': `11th Temple Solutions is led by Dan Armour, who brings extensive experience in AI and digital transformation for SMEs. The company focuses on making AI accessible to small and medium businesses through practical, affordable solutions. We're based in Newtown, Powys, and understand the unique challenges and opportunities facing rural businesses in Wales and the border counties.`,
    
    'Services': `We offer comprehensive AI and digital transformation services including: AI Opportunity Assessment to identify where AI can deliver the most value, Practical Implementation of right-sized AI solutions, Integration with existing systems, and Skills Development to ensure teams can effectively use new technologies. We specialize in serving SMEs across Wales and the border counties.`,
    
    'Contact': `Contact 11th Temple Solutions at Hello@11thtemplesolutions.com or call +44 7312 190 728. We're based in Newtown, Powys, and serve businesses across Wales and the border counties. We offer free consultations to discuss how AI and digital transformation can benefit your business.`,
    
    'Blog': `Our blog provides insights and practical advice on AI, digital transformation, and technology for SMEs. We cover topics relevant to Welsh and border county businesses, including rural technology adoption, AI implementation strategies, and digital skills development. All content is written by Dan Armour and focuses on practical, actionable advice.`
  };

  return pageContents[pageName] || `Content for ${pageName} page`;
}

/**
 * Extract content from blog posts
 */
async function extractBlogContent(): Promise<ContentSection[]> {
  const blogSections: ContentSection[] = [];
  
  try {
    // Get list of blog files
    const blogFiles = [
      'ai-for-smes.tsx',
      'automation-advantage.tsx',
      'data-analytics-advantage.tsx',
      'cyber-secure-welsh-smes.tsx',
      'customer-relationships-crm-advantage.tsx',
      'mind-the-skills-gap.tsx',
      'mobile-first-business.tsx',
      'hybrid-work-success.tsx',
      'supply-chain-digitization.tsx',
      'business-continuity-in-uncertain-times.tsx',
      'navigating-the-compliance-maze.tsx',
      'breaking-free-from-legacy-systems.tsx',
      '20-essential-digital-skills.tsx',
      'agentic-ai-revolution-welsh-smes.tsx',
      'powys-digital-transformation-opportunity.tsx',
      'cost-benefits-ai-automation-smes.tsx',
      'shropshire-business-tech-adoption.tsx',
      'rural-tech-skills-development.tsx',
      'government-digital-skills-framework-smes.tsx',
      'ai-customer-service-24-7.tsx',
      'machine-learning-inventory-management.tsx',
      'welsh-farms-ai-technology.tsx',
      'predictive-analytics-rural-markets.tsx',
      'summer-automation-strategies.tsx',
      'sustainable-business-ai.tsx',
      'digital-transformation-success-welsh-smes.tsx',
      'mid-year-tech-assessment.tsx',
      'ai-driven-decision-making.tsx',
      'future-retail-rural-communities.tsx',
      'workplace-champions-tech-adoption.tsx'
    ];

    // Extract content from each blog (simplified approach)
    for (const blogFile of blogFiles) {
      try {
        const blogContent = getBlogContentByFilename(blogFile);
        if (blogContent) {
          blogSections.push({
            title: `Blog: ${blogFile.replace('.tsx', '').replace(/-/g, ' ')}`,
            content: blogContent,
            type: 'blog'
          });
        }
      } catch (error) {
        console.warn(`Could not extract content from blog ${blogFile}:`, error);
      }
    }
  } catch (error) {
    console.error('Error extracting blog content:', error);
  }

  return blogSections;
}

/**
 * Get blog content based on filename
 */
function getBlogContentByFilename(filename: string): string {
  const blogContents: Record<string, string> = {
    'ai-for-smes.tsx': 'AI for SMEs: Artificial intelligence is now accessible to small businesses. This blog explores how SMEs can implement AI solutions for customer service, process automation, and data analysis. It covers cost considerations, implementation strategies, and real-world examples from Welsh businesses.',
    'automation-advantage.tsx': 'The Automation Advantage: Process automation can transform SME operations by reducing manual work and errors. This post explains how to identify automation opportunities, choose the right tools, and implement solutions that deliver measurable ROI.',
    // Add more blog content summaries...
  };

  return blogContents[filename] || `Blog content from ${filename}`;
}

/**
 * Extract detailed service information
 */
async function extractServiceDetails(): Promise<ContentSection[]> {
  return [
    {
      title: 'AI Opportunity Assessment',
      content: 'Our AI Opportunity Assessment service helps businesses identify where artificial intelligence can deliver the most value. We analyze your current processes, data assets, and business objectives to create a prioritized roadmap for AI implementation. This service typically takes 2-3 weeks and results in a detailed report with specific recommendations and ROI projections.',
      type: 'service'
    },
    {
      title: 'Practical AI Implementation',
      content: 'We implement right-sized AI solutions that address real business challenges without unnecessary complexity. Our approach focuses on practical applications that deliver immediate value, such as customer service automation, process optimization, and data analysis. We ensure solutions integrate seamlessly with existing systems and processes.',
      type: 'service'
    },
    {
      title: 'System Integration',
      content: 'Our integration services ensure that new AI tools work seamlessly with your existing systems and processes. We handle technical integration, data migration, and workflow optimization to minimize disruption and maximize efficiency. This includes training staff on new integrated workflows.',
      type: 'service'
    },
    {
      title: 'Skills Development',
      content: 'We provide comprehensive training to ensure your team can effectively work with and benefit from AI tools. Our training programs are tailored to different skill levels and roles within your organization. We focus on practical skills that enable staff to maximize the value of new technologies.',
      type: 'service'
    }
  ];
}

/**
 * Combine all content sections into a single string
 */
function combineContent(sections: ContentSection[]): string {
  let combined = '';
  
  for (const section of sections) {
    combined += `## ${section.title}\n\n`;
    combined += `${section.content}\n\n`;
    combined += `Type: ${section.type}\n\n`;
    combined += '---\n\n';
  }
  
  return combined.trim();
}

/**
 * Get the total word count of extracted content
 */
export function getContentWordCount(content: string): number {
  return content.split(/\s+/).length;
}