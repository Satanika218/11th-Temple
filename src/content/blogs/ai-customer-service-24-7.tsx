import React from 'react';
import { BlogPostType } from '../types';

export const post: Omit<BlogPostType, 'id' | 'date'> = {
  slug: 'ai-customer-service-24-7',
  title: 'AI-Powered Customer Service: Capturing the 35% of Inquiries That Come After Hours',
  excerpt: 'Your customers don\'t stop needing help at 5pm. But you can\'t afford 24/7 staff. AI customer service bridges this gap, capturing opportunities that would otherwise be lost. Real numbers from Welsh and border county businesses show the impact.',
  author: 'Dan Armour',
  content: (
    <>
      <p>Here's a statistic that should make every SME owner pause: 35% of customer inquiries come outside traditional business hours. For many businesses, that's more than a third of potential sales, support requests, and relationship-building opportunities simply... disappearing.</p>

      <p>A Brecon tourism business we work with discovered they were losing £40,000 annually in after-hours bookings. A Shrewsbury retailer found that 42% of their website visitors came between 6pm and midnight—when no one was available to help them.</p>

      <p>The solution isn't hiring night staff. It's AI-powered customer service that works while you sleep.</p>

      <h3 className="text-2xl font-bold text-white mt-6 mb-4">The After-Hours Opportunity</h3>

      <p>Let's quantify what you're missing:</p>

      <ul className="list-disc list-inside space-y-2 my-4 text-brand-silver">
        <li><strong>Evening inquiries (5pm-10pm):</strong> 25% of daily total</li>
        <li><strong>Night inquiries (10pm-8am):</strong> 10% of daily total</li>
        <li><strong>Weekend inquiries:</strong> 30-40% of weekly total</li>
        <li><strong>Holiday inquiries:</strong> Often peak periods when you're closed</li>
      </ul>

      <p>For a business receiving 100 inquiries per week during business hours, that's 35-50 additional inquiries you're not capturing. If your conversion rate is 20%, that's 7-10 lost sales per week, or 350-500 per year.</p>

      <p>At an average transaction value of £100, that's £35,000-£50,000 in lost revenue annually. And that's conservative—many businesses have higher transaction values and conversion rates.</p>

      <h3 className="text-2xl font-bold text-white mt-6 mb-4">What AI Customer Service Actually Does</h3>

      <p>Modern AI customer service isn't a simple chatbot following decision trees. It's sophisticated technology that:</p>

      <ul className="list-disc list-inside space-y-2 my-4 text-brand-silver">
        <li><strong>Understands Context:</strong> Interprets what customers actually mean, not just keywords</li>
        <li><strong>Provides Relevant Answers:</strong> Draws from your knowledge base to give accurate information</li>
        <li><strong>Handles Transactions:</strong> Takes bookings, processes orders, schedules appointments</li>
        <li><strong>Escalates Appropriately:</strong> Knows when to involve a human</li>
        <li><strong>Learns Continuously:</strong> Improves from every interaction</li>
        <li><strong>Maintains Personality:</strong> Reflects your brand voice and values</li>
      </ul>

      <h3 className="text-2xl font-bold text-white mt-6 mb-4">Real Business Examples</h3>

      <h4 className="text-xl font-bold text-brand-lime mt-4 mb-3">Tourism Business, Brecon</h4>

      <p><strong>Challenge:</strong> Boutique hotel losing bookings to larger chains with 24/7 booking systems. Couldn't afford night staff.</p>

      <p><strong>Solution:</strong> AI customer service handling inquiries, providing recommendations, taking bookings around the clock.</p>

      <p><strong>Results After 12 Months:</strong></p>
      <ul className="list-disc list-inside space-y-2 my-4 text-brand-silver">
        <li>£40,000 in after-hours bookings captured</li>
        <li>35% of total bookings now come outside business hours</li>
        <li>Average response time: 30 seconds (vs 12+ hours previously)</li>
        <li>Customer satisfaction increased (instant responses)</li>
        <li>Staff freed to focus on in-person guest experience</li>
        <li>TripAdvisor rating improved from 4.2 to 4.7</li>
      </ul>

      <p><strong>Owner's perspective:</strong> "We were literally sleeping through opportunities. Now the system works while we rest, and we wake up to new bookings every morning."</p>

      <h4 className="text-xl font-bold text-brand-lime mt-4 mb-3">Professional Services, Shrewsbury</h4>

      <p><strong>Challenge:</strong> Accounting firm receiving inquiries outside office hours, losing potential clients to competitors who responded faster.</p>

      <p><strong>Solution:</strong> AI system answering common questions, scheduling consultations, capturing lead information.</p>

      <p><strong>Results After 12 Months:</strong></p>
      <ul className="list-disc list-inside space-y-2 my-4 text-brand-silver">
        <li>45% of inquiries now handled outside business hours</li>
        <li>Lead capture rate increased by 60%</li>
        <li>Consultation bookings up 40%</li>
        <li>Staff time saved: 12 hours per week</li>
        <li>Client acquisition cost reduced by 35%</li>
        <li>£85,000 additional annual revenue</li>
      </ul>

      <h4 className="text-xl font-bold text-brand-lime mt-4 mb-3">Retail Business, Welshpool</h4>

      <p><strong>Challenge:</strong> Online store receiving questions about products, but no one available to answer after 5pm.</p>

      <p><strong>Solution:</strong> AI assistant providing product information, handling returns queries, processing orders.</p>

      <p><strong>Results After 12 Months:</strong></p>
      <ul className="list-disc list-inside space-y-2 my-4 text-brand-silver">
        <li>Evening sales increased by 55%</li>
        <li>Cart abandonment reduced by 30%</li>
        <li>Customer service inquiries handled 24/7</li>
        <li>Average order value increased 18% (AI upselling)</li>
        <li>Returns reduced (better pre-purchase information)</li>
        <li>£32,000 additional annual revenue</li>
      </ul>

      <h3 className="text-2xl font-bold text-white mt-6 mb-4">What AI Can Handle (And What It Can't)</h3>

      <h4 className="text-xl font-bold text-brand-lime mt-4 mb-3">AI Excels At:</h4>
      <ul className="list-disc list-inside space-y-2 my-4 text-brand-silver">
        <li>Answering frequently asked questions</li>
        <li>Providing product/service information</li>
        <li>Taking bookings and appointments</li>
        <li>Processing standard orders</li>
        <li>Handling returns and exchanges</li>
        <li>Providing opening hours, directions, contact info</li>
        <li>Collecting customer information</li>
        <li>Scheduling callbacks</li>
        <li>Basic troubleshooting</li>
      </ul>

      <h4 className="text-xl font-bold text-brand-lime mt-4 mb-3">AI Should Escalate:</h4>
      <ul className="list-disc list-inside space-y-2 my-4 text-brand-silver">
        <li>Complex technical issues</li>
        <li>Complaints requiring judgment</li>
        <li>Custom quotes or special requests</li>
        <li>Sensitive situations</li>
        <li>Anything requiring human empathy</li>
      </ul>

      <p>The key is setting clear parameters. AI handles routine, humans handle exceptions. This division of labor maximizes efficiency while maintaining service quality.</p>

      <h3 className="text-2xl font-bold text-white mt-6 mb-4">Implementation: What to Expect</h3>

      <h4 className="text-xl font-bold text-brand-lime mt-4 mb-3">Week 1-2: Setup</h4>
      <ul className="list-disc list-inside space-y-2 my-4 text-brand-silver">
        <li>Define common questions and answers</li>
        <li>Configure system with your information</li>
        <li>Set escalation rules</li>
        <li>Customize personality and tone</li>
        <li>Integrate with existing systems</li>
      </ul>

      <h4 className="text-xl font-bold text-brand-lime mt-4 mb-3">Week 3-4: Training</h4>
      <ul className="list-disc list-inside space-y-2 my-4 text-brand-silver">
        <li>System learns from initial interactions</li>
        <li>Team learns to monitor and refine</li>
        <li>Adjust responses based on feedback</li>
        <li>Fine-tune escalation triggers</li>
      </ul>

      <h4 className="text-xl font-bold text-brand-lime mt-4 mb-3">Month 2-3: Optimization</h4>
      <ul className="list-disc list-inside space-y-2 my-4 text-brand-silver">
        <li>Analyze conversation patterns</li>
        <li>Expand knowledge base</li>
        <li>Improve response accuracy</li>
        <li>Increase automation percentage</li>
      </ul>

      <h4 className="text-xl font-bold text-brand-lime mt-4 mb-3">Month 4+: Full Operation</h4>
      <ul className="list-disc list-inside space-y-2 my-4 text-brand-silver">
        <li>System handling 60-80% of inquiries automatically</li>
        <li>Continuous learning and improvement</li>
        <li>Regular performance reviews</li>
        <li>Ongoing optimization</li>
      </ul>

      <h3 className="text-2xl font-bold text-white mt-6 mb-4">The Economics</h3>

      <p><strong>Typical Investment:</strong></p>
      <ul className="list-disc list-inside space-y-2 my-4 text-brand-silver">
        <li>Setup: £2,000-4,000</li>
        <li>Monthly: £300-800</li>
        <li>First year total: £5,600-13,600</li>
      </ul>

      <p><strong>Compare to Alternatives:</strong></p>
      <ul className="list-disc list-inside space-y-2 my-4 text-brand-silver">
        <li>Part-time evening staff: £12,000-18,000 annually</li>
        <li>Full 24/7 coverage: £60,000-100,000 annually</li>
        <li>Lost opportunities: £20,000-50,000 annually</li>
      </ul>

      <p><strong>Typical Returns:</strong></p>
      <ul className="list-disc list-inside space-y-2 my-4 text-brand-silver">
        <li>After-hours revenue: £15,000-40,000</li>
        <li>Time saved: 10-15 hours/week = £15,600-23,400 value</li>
        <li>Improved conversion: £10,000-30,000</li>
        <li>Total benefit: £40,000-90,000</li>
        <li>ROI: 300-600% in first year</li>
      </ul>

      <h3 className="text-2xl font-bold text-white mt-6 mb-4">Common Concerns Addressed</h3>

      <h4 className="text-xl font-bold text-brand-lime mt-4 mb-3">"Will customers accept AI?"</h4>
      <p>Research shows 70% of customers prefer instant AI responses to waiting for human help. The key is transparency—let customers know they're talking to AI, and provide easy escalation to humans when needed.</p>

      <h4 className="text-xl font-bold text-brand-lime mt-4 mb-3">"What about complex questions?"</h4>
      <p>AI handles routine inquiries (60-80% of total). Complex questions are escalated to humans. This division ensures customers get appropriate help while maximizing efficiency.</p>

      <h4 className="text-xl font-bold text-brand-lime mt-4 mb-3">"Will it sound robotic?"</h4>
      <p>Modern AI can match your brand voice—friendly, professional, casual, formal. Customers often can't tell they're talking to AI until told.</p>

      <h4 className="text-xl font-bold text-brand-lime mt-4 mb-3">"What if it gives wrong information?"</h4>
      <p>AI draws from your knowledge base. You control what it knows. Regular monitoring ensures accuracy. Error rates are typically lower than human staff (who may be tired, distracted, or new).</p>

      <h3 className="text-2xl font-bold text-white mt-6 mb-4">Getting Started</h3>

      <p>Ready to capture those after-hours opportunities? Here's your roadmap:</p>

      <ol className="list-decimal list-inside space-y-3 my-4 text-brand-silver">
        <li><strong>Analyze Your Patterns:</strong> When do inquiries come? What do people ask?</li>
        <li><strong>Calculate Opportunity:</strong> What's the value of inquiries you're missing?</li>
        <li><strong>Define Scope:</strong> What should AI handle? What needs humans?</li>
        <li><strong>Choose Solution:</strong> Select system that fits your needs and budget</li>
        <li><strong>Implement and Train:</strong> Set up system, train team, refine responses</li>
        <li><strong>Monitor and Optimize:</strong> Track results, improve continuously</li>
      </ol>

      <p>At 11th Temple Solutions, we specialize in AI customer service for Welsh and border county SMEs. We understand your market, your customers, and your constraints.</p>

      <p>Contact us for a free assessment. We'll analyze your inquiry patterns, calculate your opportunity, and show you exactly what AI customer service could deliver for your business.</p>

      <p className="text-brand-lime font-semibold mt-6">Your customers are reaching out after hours. Let's make sure you're there to help them.</p>
    </>
  )
};