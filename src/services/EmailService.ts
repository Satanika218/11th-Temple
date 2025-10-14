/**
 * Email Service for Mass Mailer System
 * Integrates with multiple email providers for business outreach
 */

export interface EmailProvider {
  name: string;
  apiKey: string;
  endpoint: string;
  rateLimit: number; // emails per hour
  costPer1000: number; // cost in GBP
}

export interface EmailCampaign {
  id: string;
  name: string;
  subject: string;
  content: string;
  region: string;
  businessType: string;
  recipients: EmailRecipient[];
  status: 'draft' | 'scheduled' | 'sending' | 'completed' | 'paused';
  scheduledDate?: Date;
  createdAt: Date;
  stats: CampaignStats;
}

export interface EmailRecipient {
  email: string;
  businessName: string;
  ownerName?: string;
  businessType: string;
  region: string;
  postcode: string;
  phone?: string;
  website?: string;
  employees?: number;
  lastContacted?: Date;
  status: 'pending' | 'sent' | 'delivered' | 'opened' | 'clicked' | 'bounced' | 'unsubscribed';
}

export interface CampaignStats {
  totalSent: number;
  delivered: number;
  opened: number;
  clicked: number;
  bounced: number;
  unsubscribed: number;
  replied: number;
  openRate: number;
  clickRate: number;
  bounceRate: number;
}

export class EmailService {
  private providers: EmailProvider[] = [
    {
      name: 'Mailgun',
      apiKey: process.env.VITE_MAILGUN_API_KEY || '',
      endpoint: 'https://api.mailgun.net/v3',
      rateLimit: 10000, // 10k per hour
      costPer1000: 0.80 // £0.80 per 1000 emails
    },
    {
      name: 'SendGrid',
      apiKey: process.env.VITE_SENDGRID_API_KEY || '',
      endpoint: 'https://api.sendgrid.com/v3',
      rateLimit: 15000, // 15k per hour
      costPer1000: 1.20 // £1.20 per 1000 emails
    },
    {
      name: 'AWS SES',
      apiKey: process.env.VITE_AWS_SES_KEY || '',
      endpoint: 'https://email.us-east-1.amazonaws.com',
      rateLimit: 14, // 14 per second = ~50k per hour
      costPer1000: 0.10 // £0.10 per 1000 emails
    }
  ];

  /**
   * Get business database for target regions
   */
  async getBusinessDatabase(region: string, businessType: string = 'all'): Promise<EmailRecipient[]> {
    // In production, this would connect to business databases like:
    // - Companies House API
    // - Local business directories
    // - Chamber of Commerce databases
    // - Industry-specific databases
    
    const mockDatabase = this.generateMockBusinessData(region, businessType);
    return mockDatabase;
  }

  /**
   * Generate mock business data for demonstration
   */
  private generateMockBusinessData(region: string, businessType: string): EmailRecipient[] {
    const businesses: EmailRecipient[] = [];
    
    const regions = {
      powys: { count: 2500, postcodes: ['LD', 'SY', 'NP'] },
      shropshire: { count: 4200, postcodes: ['SY', 'TF', 'WV'] },
      wales: { count: 15000, postcodes: ['CF', 'SA', 'NP', 'LL', 'CH'] },
      herefordshire: { count: 1800, postcodes: ['HR'] }
    };

    const businessTypes = {
      agriculture: ['Farm', 'Agricultural Services', 'Livestock', 'Crop Production'],
      manufacturing: ['Manufacturing', 'Engineering', 'Production', 'Assembly'],
      retail: ['Shop', 'Store', 'Retail', 'Sales'],
      hospitality: ['Hotel', 'Restaurant', 'Pub', 'B&B', 'Tourism'],
      professional: ['Solicitors', 'Accountants', 'Consultancy', 'Services'],
      construction: ['Builders', 'Construction', 'Trades', 'Contractors'],
      healthcare: ['Practice', 'Clinic', 'Care Home', 'Pharmacy'],
      education: ['School', 'College', 'Training', 'Education']
    };

    const sampleNames = [
      'Smith & Sons', 'Jones Ltd', 'Williams Bros', 'Davies & Co', 'Evans Group',
      'Thomas Enterprises', 'Roberts Ltd', 'Lewis & Partners', 'Hughes Bros',
      'Morgan Services', 'Powell Ltd', 'Price & Co', 'Griffiths Group'
    ];

    let targetRegions = region === 'all' ? Object.keys(regions) : [region];
    if (region === 'border-counties') {
      targetRegions = ['powys', 'shropshire', 'herefordshire'];
    }

    targetRegions.forEach(reg => {
      const regionData = regions[reg as keyof typeof regions];
      if (!regionData) return;

      let count = regionData.count;
      if (businessType !== 'all' && businessType !== '') {
        count = Math.floor(count * 0.15); // Each business type ~15% of total
      }

      for (let i = 0; i < Math.min(count, 1000); i++) { // Limit for demo
        const businessTypeNames = businessType !== 'all' && businessType !== '' 
          ? businessTypes[businessType as keyof typeof businessTypes] 
          : Object.values(businessTypes).flat();
        
        const randomBusinessType = businessTypeNames[Math.floor(Math.random() * businessTypeNames.length)];
        const randomName = sampleNames[Math.floor(Math.random() * sampleNames.length)];
        const postcode = regionData.postcodes[Math.floor(Math.random() * regionData.postcodes.length)];
        
        businesses.push({
          email: `info@${randomName.toLowerCase().replace(/[^a-z]/g, '')}.co.uk`,
          businessName: `${randomName} ${randomBusinessType}`,
          ownerName: `${['John', 'Jane', 'David', 'Sarah', 'Michael', 'Emma'][Math.floor(Math.random() * 6)]} ${['Smith', 'Jones', 'Williams', 'Davies'][Math.floor(Math.random() * 4)]}`,
          businessType: businessType === 'all' ? Object.keys(businessTypes)[Math.floor(Math.random() * Object.keys(businessTypes).length)] : businessType,
          region: reg,
          postcode: `${postcode}${Math.floor(Math.random() * 99) + 1} ${Math.floor(Math.random() * 9)}${['AA', 'AB', 'AC', 'AD'][Math.floor(Math.random() * 4)]}`,
          phone: `+44 ${Math.floor(Math.random() * 9000) + 1000} ${Math.floor(Math.random() * 900000) + 100000}`,
          website: Math.random() > 0.3 ? `www.${randomName.toLowerCase().replace(/[^a-z]/g, '')}.co.uk` : undefined,
          employees: Math.floor(Math.random() * 50) + 1,
          status: 'pending'
        });
      }
    });

    return businesses;
  }

  /**
   * Personalize email content with recipient data
   */
  personalizeContent(template: string, recipient: EmailRecipient): string {
    return template
      .replace(/{BusinessOwner}/g, recipient.ownerName || 'Business Owner')
      .replace(/{BusinessName}/g, recipient.businessName)
      .replace(/{BusinessType}/g, recipient.businessType)
      .replace(/{Region}/g, this.formatRegionName(recipient.region))
      .replace(/{Postcode}/g, recipient.postcode);
  }

  /**
   * Format region name for display
   */
  private formatRegionName(region: string): string {
    const regionNames = {
      powys: 'Powys',
      shropshire: 'Shropshire',
      wales: 'Wales',
      herefordshire: 'Herefordshire'
    };
    return regionNames[region as keyof typeof regionNames] || region;
  }

  /**
   * Send email campaign
   */
  async sendCampaign(campaign: EmailCampaign): Promise<void> {
    console.log(`Starting campaign: ${campaign.name}`);
    console.log(`Recipients: ${campaign.recipients.length}`);
    
    // In production, this would:
    // 1. Validate email addresses
    // 2. Check against unsubscribe lists
    // 3. Respect rate limits
    // 4. Handle bounces and failures
    // 5. Track opens and clicks
    // 6. Update campaign statistics
    
    // Simulate sending process
    for (const recipient of campaign.recipients) {
      const personalizedSubject = this.personalizeContent(campaign.subject, recipient);
      const personalizedContent = this.personalizeContent(campaign.content, recipient);
      
      // Simulate email sending
      await this.sendSingleEmail(recipient.email, personalizedSubject, personalizedContent);
      
      // Update recipient status
      recipient.status = Math.random() > 0.05 ? 'sent' : 'bounced'; // 95% success rate
      
      // Respect rate limits (simulate delay)
      await new Promise(resolve => setTimeout(resolve, 100));
    }
    
    campaign.status = 'completed';
    console.log(`Campaign completed: ${campaign.name}`);
  }

  /**
   * Send single email
   */
  private async sendSingleEmail(to: string, subject: string, content: string): Promise<void> {
    // In production, this would integrate with actual email providers
    console.log(`Sending email to: ${to}`);
    console.log(`Subject: ${subject}`);
    
    // Example integration with Mailgun:
    /*
    const response = await fetch(`${this.providers[0].endpoint}/your-domain.com/messages`, {
      method: 'POST',
      headers: {
        'Authorization': `Basic ${btoa(`api:${this.providers[0].apiKey}`)}`,
        'Content-Type': 'application/x-www-form-urlencoded'
      },
      body: new URLSearchParams({
        from: 'Dan Armour <hello@11thtemplesolutions.com>',
        to: to,
        subject: subject,
        text: content,
        'o:tracking': 'yes',
        'o:tracking-clicks': 'yes',
        'o:tracking-opens': 'yes'
      })
    });
    */
  }

  /**
   * Get campaign statistics
   */
  async getCampaignStats(campaignId: string): Promise<CampaignStats> {
    // In production, this would fetch real statistics from email provider
    return {
      totalSent: 1000,
      delivered: 950,
      opened: 285,
      clicked: 57,
      bounced: 50,
      unsubscribed: 5,
      replied: 12,
      openRate: 30.0,
      clickRate: 20.0,
      bounceRate: 5.0
    };
  }

  /**
   * Calculate campaign cost
   */
  calculateCampaignCost(recipientCount: number, provider: string = 'AWS SES'): number {
    const selectedProvider = this.providers.find(p => p.name === provider) || this.providers[2];
    return (recipientCount / 1000) * selectedProvider.costPer1000;
  }

  /**
   * Validate email addresses
   */
  validateEmailAddresses(emails: string[]): { valid: string[], invalid: string[] } {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const valid: string[] = [];
    const invalid: string[] = [];
    
    emails.forEach(email => {
      if (emailRegex.test(email)) {
        valid.push(email);
      } else {
        invalid.push(email);
      }
    });
    
    return { valid, invalid };
  }

  /**
   * Check unsubscribe status
   */
  async checkUnsubscribeStatus(emails: string[]): Promise<string[]> {
    // In production, this would check against unsubscribe database
    // For now, simulate 2% unsubscribe rate
    return emails.filter(() => Math.random() > 0.02);
  }
}

// Export singleton instance
export const emailService = new EmailService();