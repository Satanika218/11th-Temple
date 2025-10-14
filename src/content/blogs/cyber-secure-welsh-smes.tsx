
import React from 'react';
import { BlogPostType } from '../types';

export const post: Omit<BlogPostType, 'id' | 'date'> = {
  slug: 'cyber-secure-welsh-smes',
  title: 'Is Your Business Cyber-Secure? The Hidden Threats Facing Welsh SMEs',
  excerpt: 'In today\'s digital landscape, cybersecurity isn\'t just for large corporations—it\'s essential for businesses of all sizes. Yet a concerning 58% of UK small businesses experienced cyber-attacks in the past year, with that number rising to 70% for medium-sized enterprises.',
  content: (
    <>
      <p>In today&apos;s digital landscape, cybersecurity isn&apos;t just for large corporations—it&apos;s essential for businesses of all sizes. Yet a concerning 58% of UK small businesses experienced cyber-attacks in the past year, with that number rising to 70% for medium-sized enterprises.</p>
      <h3 className="text-2xl font-bold text-white mt-6 mb-4">Are You at Risk?</h3>
      <p>Ask yourself:</p>
      <ul className="list-disc list-inside space-y-2 my-4 text-brand-silver">
        <li>Could your business withstand a sophisticated cyber attack tomorrow?</li>
        <li>Do you have protocols to protect your most valuable data?</li>
        <li>Are your employees trained to recognize increasingly convincing phishing attempts?</li>
      </ul>
      <p>For SMEs in Wales and the border counties, these risks are particularly acute. With 70% of Welsh SMEs classified as micro-businesses, many lack dedicated IT security resources, making them attractive targets for cybercriminals.</p>
      <h3 className="text-2xl font-bold text-white mt-6 mb-4">The Evolving Threat Landscape</h3>
      <p>Today&apos;s cyber threats are far more sophisticated than simple viruses:</p>
      <div className="space-y-4 my-4">
        <p><strong>AI-Powered Phishing</strong>: Modern attacks use artificial intelligence to analyze your company&apos;s communication patterns, creating eerily convincing personalized messages that even careful employees might fall for.</p>
        <p><strong>Supply Chain Vulnerabilities</strong>: Cybercriminals increasingly target smaller businesses as entry points to larger partners. Your business could be compromised not because you&apos;re the ultimate target, but as a stepping stone to a larger organization.</p>
        <p><strong>Ransomware-as-a-Service</strong>: Criminal organizations now offer ransomware tools to less technically skilled attackers through subscription models, dramatically increasing the number of potential threats.</p>
      </div>
      <h3 className="text-2xl font-bold text-white mt-6 mb-4">Regional Impact</h3>
      <p>The manufacturing sector in Shropshire faces particular risks, with the National Cyber Security Centre reporting a 300% increase in attacks targeting production systems since 2021. Meanwhile, tourism businesses in North Wales handling customer payment data represent attractive targets for data theft.</p>
      <h3 className="text-2xl font-bold text-white mt-6 mb-4">How 11th Temple Solutions Can Help</h3>
      <p>At 11th Temple Solutions, we understand the unique cybersecurity challenges facing SMEs in Wales and the border counties. Our Cyber Resilience Programme provides:</p>
      <ul className="list-disc list-inside space-y-2 my-4 text-brand-silver">
        <li>Tailored security assessments designed specifically for micro and small businesses</li>
        <li>Employee security awareness training that&apos;s jargon-free and effective</li>
        <li>Affordable, scalable security measures that grow with your business</li>
        <li>Ongoing monitoring and support from local security experts</li>
      </ul>
      <blockquote className="border-l-4 border-brand-lime p-4 my-6 bg-brand-navy-light text-brand-silver italic">
        &quot;After implementing 11th Temple&apos;s security recommendations, we not only avoided what could have been a devastating ransomware attack, but we&apos;ve also been able to use our improved security posture as a selling point with larger clients,&quot; says David Hughes, owner of a small manufacturing business in Welshpool.
      </blockquote>
      <p>The Welsh Government&apos;s Cyber Resilience Centre for Wales offers grants covering up to 50% of cybersecurity improvements for eligible SMEs—we can help you access this funding while building your digital defenses.</p>
      <p>Don&apos;t wait until after an attack to think about cybersecurity. Contact us today for a free initial security assessment and take the first step toward protecting your business from increasingly sophisticated threats.</p>
    </>
  ),
};
