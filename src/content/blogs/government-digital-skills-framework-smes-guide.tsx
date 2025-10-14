import React from 'react';
import { BlogPostType } from '../types';

export const post: Omit<BlogPostType, 'id' | 'date'> = {
  slug: 'government-digital-skills-framework-smes-guide',
  title: 'Government Digital Skills Framework: What SMEs Need to Know',
  excerpt: 'The UK Government Digital Skills Framework provides a roadmap for workforce development. Discover how SMEs can leverage this framework to build competitive digital capabilities.',
  author: 'Dan Armour',
  content: (
    <>
      <p>The UK Government Digital Skills Framework offers SMEs a structured approach to building workforce capabilities. This comprehensive guide helps businesses understand digital competency requirements and develop training strategies that align with national standards.</p>

      <h3 className="text-2xl font-bold text-white mt-6 mb-4">Understanding the Framework Structure</h3>
      <p>The framework identifies five key competency areas: digital foundation skills, digital communication and collaboration, digital data and information literacy, digital creation and innovation, and digital safety and security. Each area contains specific skills and proficiency levels.</p>

      <p>For SMEs, this structure provides clarity on what skills to prioritize and how to measure progress. Rather than guessing what training might be useful, businesses can follow government-endorsed standards that align with broader economic objectives.</p>

      <h3 className="text-2xl font-bold text-white mt-6 mb-4">Benefits for Welsh SMEs</h3>
      <p>Welsh businesses can access government funding for framework-aligned training programs. The Welsh Government Digital Skills Partnership offers grants covering up to 50% of training costs for eligible programs.</p>

      <p>Following the framework also helps SMEs compete for government contracts. Many public sector tenders now require evidence of digital competency development, making framework compliance a competitive advantage.</p>

      <h3 className="text-2xl font-bold text-white mt-6 mb-4">Implementation Strategies</h3>
      <p>Start with skills assessment to identify current capabilities and gaps. The framework provides assessment tools that help businesses understand where they stand against national standards. This baseline measurement guides training priorities.</p>

      <p>Focus on foundation skills first before advancing to specialized areas. Basic digital literacy must be solid before attempting complex implementations like AI or automation. This progressive approach ensures sustainable capability building.</p>

      <h3 className="text-2xl font-bold text-white mt-6 mb-4">Practical Applications</h3>
      <p>Use framework competencies when recruiting new staff. Job descriptions that reference specific framework skills attract candidates with relevant capabilities. This standardization simplifies hiring and reduces training time.</p>

      <p>Align internal training programs with framework standards. This ensures consistency across teams and provides clear progression paths for staff development. Employees understand what skills they need and how to advance their careers.</p>

      <p className="mt-6 text-brand-lime font-semibold">Ready to implement the Digital Skills Framework? Contact 11th Temple Solutions for assessment and training support.</p>
    </>
  )
};
