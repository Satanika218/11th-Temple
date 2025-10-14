
import React from 'react';
import { BlogPostType } from '../types';

export const post: Omit<BlogPostType, 'id' | 'date'> = {
  slug: 'mind-the-skills-gap',
  title: 'Mind the Skills Gap: Is Your Team Ready for the Digital Future?',
  excerpt: 'The digital skills shortage represents one of the most significant barriers to business growth and innovation in the UK today. With technology evolving rapidly, many SMEs find themselves with a team that\'s falling behind the digital curve.',
  content: (
    <>
      <p>The digital skills shortage represents one of the most significant barriers to business growth and innovation in the UK today. With technology evolving rapidly, many SMEs find themselves with a team that&apos;s falling behind the digital curve.</p>
      <h3 className="text-2xl font-bold text-white mt-6 mb-4">How Does Your Team Measure Up?</h3>
      <p>Consider these questions:</p>
      <ul className="list-disc list-inside space-y-2 my-4 text-brand-silver">
          <li>Can your staff confidently use the digital tools essential for your industry?</li>
          <li>Do you struggle to find employees with both industry knowledge and technical skills?</li>
          <li>Is your business growth limited by your team&apos;s digital capabilities?</li>
      </ul>
      <p>The statistics paint a concerning picture: 72% of UK business leaders report having skills gaps related to technology—up from 69% just last year. This gap is costing the UK economy an estimated £63 billion annually.</p>
      <h3 className="text-2xl font-bold text-white mt-6 mb-4">The 20 Essential Digital Skills</h3>
      <p>The UK Government and industry leaders have identified 20 essential digital skills that today&apos;s workforce needs:</p>
      <ol className="list-decimal list-inside space-y-2 my-4 text-brand-silver">
        <li>Setting up and using digital devices</li>
        <li>Finding, managing and storing digital information</li>
        <li>Digital communication via email and messaging</li>
        <li>Creating and editing digital content</li>
        <li>Using digital collaboration tools</li>
        <li>Basic IT troubleshooting</li>
        <li>Understanding digital security measures</li>
        <li>Managing digital identity</li>
        <li>Using digital tools for problem-solving</li>
        <li>Critical thinking about online information</li>
        <li>Digital learning and development</li>
        <li>Using productivity software (word processing, spreadsheets)</li>
        <li>Data literacy and basic analysis</li>
        <li>Digital project management</li>
        <li>Understanding digital ethics and legal requirements</li>
        <li>Basic coding and technical skills</li>
        <li>Digital marketing fundamentals</li>
        <li>Using industry-specific software</li>
        <li>Digital accessibility awareness</li>
        <li>Continuous digital adaptation and learning</li>
      </ol>
      <p>How many of these skills are confidently present across your workforce?</p>
      <h3 className="text-2xl font-bold text-white mt-6 mb-4">Regional Challenges</h3>
      <p>In rural areas of Wales and the border counties, the digital skills gap is particularly pronounced. According to research by the Learning and Work Institute, rural businesses are 30% more likely to report significant digital skills shortages than their urban counterparts.</p>
      <p>Agricultural businesses in Powys and Herefordshire face particular challenges finding employees with both agricultural knowledge and digital skills for precision farming technologies. Meanwhile, tourism enterprises in North Wales struggle to implement effective digital marketing strategies due to skills shortages.</p>
      <h3 className="text-2xl font-bold text-white mt-6 mb-4">How 11th Temple Solutions Can Help</h3>
      <p>At 11th Temple Solutions, we&apos;ve developed a practical approach to bridging the digital skills gap:</p>
      <ul className="list-disc list-inside space-y-2 my-4 text-brand-silver">
          <li><strong>Skills Assessment</strong>: We begin with a comprehensive evaluation of your team&apos;s current digital capabilities, identifying specific gaps that may be limiting your business.</li>
          <li><strong>Tailored Training</strong>: Our training programs are designed specifically for SMEs in Wales and the border counties, focusing on practical skills that deliver immediate business benefits.</li>
          <li><strong>Ongoing Support</strong>: We provide continued guidance as your team applies new skills, ensuring that training translates into real business improvements.</li>
          <li><strong>Skills Development Strategy</strong>: We help you create a long-term plan for continuous skills development, aligned with your business goals.</li>
      </ul>
      <blockquote className="border-l-4 border-brand-lime p-4 my-6 bg-brand-navy-light text-brand-silver italic">
        &quot;The training 11th Temple provided was completely different from previous courses we&apos;d tried,&quot; says Sarah Williams, owner of a small retail business in Hereford. &quot;Instead of generic tech training, they focused on exactly what my team needed to know for our specific business challenges. The improvement in productivity was immediate.&quot;
      </blockquote>
      <p>The Welsh Government&apos;s Skills Gateway for Business offers funding support for digital skills training—we can help you access these resources to upskill your team cost-effectively.</p>
      <p>Don&apos;t let skills gaps limit your business potential. Contact us today to discuss how we can help your team develop the digital capabilities needed for success in today&apos;s business environment.</p>
    </>
  )
};
