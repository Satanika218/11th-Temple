import React from 'react';
import { BlogPostType } from '../types';

export const post: Omit<BlogPostType, 'id' | 'date'> = {
  slug: 'predictive-maintenance-rural-manufacturing-powys',
  title: 'Predictive Maintenance for Rural Manufacturing: A Powys Case Study',
  excerpt: 'A Powys manufacturing firm reduced equipment downtime by 60% using AI-powered predictive maintenance. Explore how even small manufacturers can benefit from this technology.',
  content: (
    <>
      <p>A family-owned manufacturing company in rural Powys was struggling with unexpected equipment failures. Each breakdown cost thousands in lost production, emergency repairs, and missed delivery deadlines. Traditional maintenance schedules weren't preventing failures, and the company couldn't justify full-time maintenance staff for their small operation.</p>

<h3 className="text-2xl font-bold text-white mt-6 mb-4">The Predictive Maintenance Solution</h3>
<p>The company implemented an AI system that continuously monitors equipment performance through sensors measuring vibration, temperature, power consumption, and output quality. Machine learning algorithms analyze these patterns to predict when maintenance will be needed before failures occur.</p>

<p>Unlike traditional scheduled maintenance, this approach identifies specific equipment conditions that precede failures. The system learned normal operating patterns and can detect subtle changes that indicate developing problems weeks before they would cause breakdowns.</p>

<h3 className="text-2xl font-bold text-white mt-6 mb-4">Implementation and Results</h3>
<p>Installation took just two weeks, with wireless sensors added to critical equipment. The AI system began learning normal patterns immediately, building baseline data over the first month. By month three, it accurately predicted three potential failures that were prevented through targeted maintenance.</p>

<p>Equipment downtime decreased by 60% within six months, saving approximately £45,000 annually in lost production and emergency repairs. Maintenance costs actually decreased despite more frequent interventions, because problems were addressed before they caused expensive damage.</p>

<h3 className="text-2xl font-bold text-white mt-6 mb-4">Technology Accessibility for SMEs</h3>
<p>Predictive maintenance systems have become increasingly affordable for smaller manufacturers. Cloud-based solutions eliminate the need for expensive on-site servers, while wireless sensors reduce installation costs. Subscription pricing models make the technology accessible without large capital investments.</p>

<p>The system's remote monitoring capabilities are particularly valuable for rural businesses with limited local technical support. Issues can be identified and diagnosed remotely, often without requiring on-site visits from specialists.</p>

<h3 className="text-2xl font-bold text-white mt-6 mb-4">Scaling and Expansion</h3>
<p>Based on initial success, the company expanded the system to include supply chain monitoring. The AI now tracks supplier performance and predicts potential delivery delays, allowing proactive adjustments to production schedules.</p>

<p>Quality control has also improved, as the system identifies equipment conditions that affect product quality before defects occur. This has reduced waste and improved customer satisfaction while maintaining the company's reputation for reliability.</p>

<p className="mt-6 text-brand-lime font-semibold">Ready to implement predictive maintenance? Contact 11th Temple Solutions to explore solutions for your manufacturing operation.</p>
    </>
  )
};
