/**
 * Business Database Service
 * Provides access to business data across Powys, Shropshire, Wales, and Herefordshire
 */

export interface BusinessData {
  companyNumber?: string;
  businessName: string;
  tradingName?: string;
  ownerName?: string;
  email: string;
  phone?: string;
  website?: string;
  address: {
    line1: string;
    line2?: string;
    town: string;
    county: string;
    postcode: string;
    region: string;
  };
  businessType: string;
  sicCodes?: string[];
  employees?: number;
  turnover?: number;
  incorporationDate?: Date;
  lastFilingDate?: Date;
  status: 'active' | 'dormant' | 'dissolved';
  dataSource: string;
  lastUpdated: Date;
}

export interface BusinessSearchCriteria {
  regions?: string[];
  businessTypes?: string[];
  employeeRange?: { min?: number; max?: number };
  turnoverRange?: { min?: number; max?: number };
  postcodes?: string[];
  excludeContacted?: boolean;
  lastContactedBefore?: Date;
}

export class BusinessDatabaseService {
  private dataSources = {
    companiesHouse: {
      name: 'Companies House',
      endpoint: 'https://api.company-information.service.gov.uk',
      apiKey: process.env.VITE_COMPANIES_HOUSE_KEY || '',
      coverage: 'All UK registered companies',
      cost: 'Free (rate limited)'
    },
    localDirectories: {
      name: 'Local Business Directories',
      sources: [
        'Powys Business Directory',
        'Shropshire Chamber of Commerce',
        'Business Wales Directory',
        'Herefordshire Business Directory'
      ]
    },
    industryDatabases: {
      name: 'Industry-Specific Databases',
      sources: [
        'NFU (Agriculture)',
        'FSB (Small Business)',
        'CBI (Manufacturing)',
        'BHA (Hospitality)'
      ]
    }
  };

  /**
   * Search for businesses based on criteria
   */
  async searchBusinesses(criteria: BusinessSearchCriteria): Promise<BusinessData[]> {
    const businesses: BusinessData[] = [];
    
    // Combine data from multiple sources
    const companiesHouseData = await this.getCompaniesHouseData(criteria);
    const localDirectoryData = await this.getLocalDirectoryData(criteria);
    const industryData = await this.getIndustrySpecificData(criteria);
    
    businesses.push(...companiesHouseData);
    businesses.push(...localDirectoryData);
    businesses.push(...industryData);
    
    // Remove duplicates and filter
    const uniqueBusinesses = this.removeDuplicates(businesses);
    return this.applyFilters(uniqueBusinesses, criteria);
  }

  /**
   * Get data from Companies House API
   */
  private async getCompaniesHouseData(criteria: BusinessSearchCriteria): Promise<BusinessData[]> {
    // In production, this would make actual API calls to Companies House
    // For demonstration, we'll generate realistic mock data
    
    const mockData: BusinessData[] = [];
    const regions = criteria.regions || ['powys', 'shropshire', 'wales', 'herefordshire'];
    
    regions.forEach(region => {
      const regionBusinesses = this.generateRegionalBusinessData(region, 'companies-house');
      mockData.push(...regionBusinesses);
    });
    
    return mockData;
  }

  /**
   * Get data from local business directories
   */
  private async getLocalDirectoryData(criteria: BusinessSearchCriteria): Promise<BusinessData[]> {
    const mockData: BusinessData[] = [];
    const regions = criteria.regions || ['powys', 'shropshire', 'wales', 'herefordshire'];
    
    regions.forEach(region => {
      const regionBusinesses = this.generateRegionalBusinessData(region, 'local-directory');
      mockData.push(...regionBusinesses);
    });
    
    return mockData;
  }

  /**
   * Get industry-specific data
   */
  private async getIndustrySpecificData(criteria: BusinessSearchCriteria): Promise<BusinessData[]> {
    const mockData: BusinessData[] = [];
    
    if (criteria.businessTypes?.includes('agriculture')) {
      mockData.push(...this.generateAgriculturalBusinesses());
    }
    
    if (criteria.businessTypes?.includes('manufacturing')) {
      mockData.push(...this.generateManufacturingBusinesses());
    }
    
    return mockData;
  }

  /**
   * Generate regional business data
   */
  private generateRegionalBusinessData(region: string, source: string): BusinessData[] {
    const businesses: BusinessData[] = [];
    
    const regionData = {
      powys: {
        towns: ['Newtown', 'Welshpool', 'Brecon', 'Llandrindod Wells', 'Machynlleth'],
        postcodes: ['SY16', 'SY21', 'LD3', 'LD1', 'SY20'],
        businessTypes: ['agriculture', 'tourism', 'manufacturing', 'retail', 'professional']
      },
      shropshire: {
        towns: ['Shrewsbury', 'Telford', 'Oswestry', 'Bridgnorth', 'Market Drayton'],
        postcodes: ['SY1', 'TF1', 'SY11', 'WV16', 'TF9'],
        businessTypes: ['manufacturing', 'agriculture', 'retail', 'professional', 'construction']
      },
      wales: {
        towns: ['Cardiff', 'Swansea', 'Newport', 'Wrexham', 'Bangor'],
        postcodes: ['CF10', 'SA1', 'NP19', 'LL11', 'LL57'],
        businessTypes: ['professional', 'manufacturing', 'retail', 'hospitality', 'education']
      },
      herefordshire: {
        towns: ['Hereford', 'Leominster', 'Ross-on-Wye', 'Ledbury', 'Bromyard'],
        postcodes: ['HR1', 'HR6', 'HR9', 'HR8', 'HR7'],
        businessTypes: ['agriculture', 'manufacturing', 'retail', 'professional', 'hospitality']
      }
    };

    const data = regionData[region as keyof typeof regionData];
    if (!data) return businesses;

    const businessNames = [
      'Smith & Sons', 'Jones Ltd', 'Williams Brothers', 'Davies & Co', 'Evans Group',
      'Thomas Enterprises', 'Roberts Ltd', 'Lewis & Partners', 'Hughes Bros',
      'Morgan Services', 'Powell Ltd', 'Price & Co', 'Griffiths Group',
      'Edwards & Associates', 'Owen Enterprises', 'Phillips Ltd', 'Jenkins & Co'
    ];

    const businessSuffixes = {
      agriculture: ['Farm', 'Agricultural Services', 'Livestock Ltd', 'Farming Co'],
      manufacturing: ['Manufacturing', 'Engineering Ltd', 'Production Co', 'Industries'],
      retail: ['Retail Ltd', 'Shop', 'Store', 'Sales Co'],
      hospitality: ['Hotel', 'Restaurant', 'Pub Co', 'Catering Ltd'],
      professional: ['Solicitors', 'Accountants', 'Consultancy', 'Services Ltd'],
      construction: ['Builders', 'Construction Ltd', 'Contractors', 'Building Co'],
      tourism: ['Tourism Ltd', 'Visitor Centre', 'Attractions Co', 'Tours Ltd']
    };

    // Generate 50-200 businesses per region
    const count = Math.floor(Math.random() * 150) + 50;
    
    for (let i = 0; i < count; i++) {
      const businessType = data.businessTypes[Math.floor(Math.random() * data.businessTypes.length)];
      const baseName = businessNames[Math.floor(Math.random() * businessNames.length)];
      const suffix = businessSuffixes[businessType as keyof typeof businessSuffixes][Math.floor(Math.random() * 4)];
      const town = data.towns[Math.floor(Math.random() * data.towns.length)];
      const postcode = data.postcodes[Math.floor(Math.random() * data.postcodes.length)];
      
      const business: BusinessData = {
        companyNumber: source === 'companies-house' ? this.generateCompanyNumber() : undefined,
        businessName: `${baseName} ${suffix}`,
        ownerName: this.generateOwnerName(),
        email: this.generateEmail(baseName, suffix),
        phone: this.generatePhoneNumber(),
        website: Math.random() > 0.4 ? this.generateWebsite(baseName) : undefined,
        address: {
          line1: `${Math.floor(Math.random() * 999) + 1} ${this.generateStreetName()}`,
          town: town,
          county: this.formatRegionName(region),
          postcode: `${postcode} ${Math.floor(Math.random() * 9)}${this.generateRandomLetters(2)}`,
          region: region
        },
        businessType: businessType,
        sicCodes: this.generateSICCodes(businessType),
        employees: this.generateEmployeeCount(),
        turnover: this.generateTurnover(),
        incorporationDate: this.generateIncorporationDate(),
        status: Math.random() > 0.05 ? 'active' : 'dormant',
        dataSource: source,
        lastUpdated: new Date()
      };
      
      businesses.push(business);
    }
    
    return businesses;
  }

  /**
   * Generate agricultural businesses
   */
  private generateAgriculturalBusinesses(): BusinessData[] {
    const farms = [
      'Hillside Farm', 'Valley Farm', 'Oak Tree Farm', 'Meadow Farm', 'Brook Farm',
      'Manor Farm', 'Grange Farm', 'Mill Farm', 'Church Farm', 'Home Farm'
    ];
    
    return farms.map(farmName => ({
      businessName: farmName,
      ownerName: this.generateOwnerName(),
      email: this.generateEmail(farmName.replace(' ', ''), 'Farm'),
      phone: this.generatePhoneNumber(),
      address: {
        line1: farmName,
        town: 'Rural Area',
        county: 'Powys',
        postcode: `SY${Math.floor(Math.random() * 99)} ${Math.floor(Math.random() * 9)}${this.generateRandomLetters(2)}`,
        region: 'powys'
      },
      businessType: 'agriculture',
      sicCodes: ['01110', '01210', '01410'],
      employees: Math.floor(Math.random() * 20) + 1,
      turnover: Math.floor(Math.random() * 500000) + 50000,
      status: 'active' as const,
      dataSource: 'nfu-database',
      lastUpdated: new Date()
    }));
  }

  /**
   * Generate manufacturing businesses
   */
  private generateManufacturingBusinesses(): BusinessData[] {
    const manufacturers = [
      'Precision Engineering', 'Metal Works', 'Component Manufacturing', 'Industrial Solutions',
      'Advanced Manufacturing', 'Technical Products', 'Engineering Services', 'Production Ltd'
    ];
    
    return manufacturers.map(name => ({
      businessName: name,
      ownerName: this.generateOwnerName(),
      email: this.generateEmail(name.replace(' ', ''), 'Ltd'),
      phone: this.generatePhoneNumber(),
      website: this.generateWebsite(name),
      address: {
        line1: `Unit ${Math.floor(Math.random() * 50) + 1}, Industrial Estate`,
        town: 'Telford',
        county: 'Shropshire',
        postcode: `TF${Math.floor(Math.random() * 9) + 1} ${Math.floor(Math.random() * 9)}${this.generateRandomLetters(2)}`,
        region: 'shropshire'
      },
      businessType: 'manufacturing',
      sicCodes: ['25110', '25620', '28110'],
      employees: Math.floor(Math.random() * 100) + 10,
      turnover: Math.floor(Math.random() * 2000000) + 200000,
      status: 'active' as const,
      dataSource: 'manufacturing-database',
      lastUpdated: new Date()
    }));
  }

  /**
   * Remove duplicate businesses
   */
  private removeDuplicates(businesses: BusinessData[]): BusinessData[] {
    const seen = new Set<string>();
    return businesses.filter(business => {
      const key = `${business.businessName}-${business.address.postcode}`;
      if (seen.has(key)) {
        return false;
      }
      seen.add(key);
      return true;
    });
  }

  /**
   * Apply filters to business data
   */
  private applyFilters(businesses: BusinessData[], criteria: BusinessSearchCriteria): BusinessData[] {
    return businesses.filter(business => {
      // Region filter
      if (criteria.regions && !criteria.regions.includes(business.address.region)) {
        return false;
      }
      
      // Business type filter
      if (criteria.businessTypes && !criteria.businessTypes.includes(business.businessType)) {
        return false;
      }
      
      // Employee range filter
      if (criteria.employeeRange) {
        const employees = business.employees || 0;
        if (criteria.employeeRange.min && employees < criteria.employeeRange.min) return false;
        if (criteria.employeeRange.max && employees > criteria.employeeRange.max) return false;
      }
      
      // Turnover range filter
      if (criteria.turnoverRange) {
        const turnover = business.turnover || 0;
        if (criteria.turnoverRange.min && turnover < criteria.turnoverRange.min) return false;
        if (criteria.turnoverRange.max && turnover > criteria.turnoverRange.max) return false;
      }
      
      // Postcode filter
      if (criteria.postcodes) {
        const businessPostcode = business.address.postcode.split(' ')[0];
        if (!criteria.postcodes.some(pc => businessPostcode.startsWith(pc))) {
          return false;
        }
      }
      
      return true;
    });
  }

  // Helper methods for generating realistic data
  private generateCompanyNumber(): string {
    return String(Math.floor(Math.random() * 90000000) + 10000000);
  }

  private generateOwnerName(): string {
    const firstNames = ['John', 'Jane', 'David', 'Sarah', 'Michael', 'Emma', 'James', 'Lisa', 'Robert', 'Helen'];
    const lastNames = ['Smith', 'Jones', 'Williams', 'Davies', 'Evans', 'Thomas', 'Roberts', 'Lewis', 'Hughes', 'Morgan'];
    return `${firstNames[Math.floor(Math.random() * firstNames.length)]} ${lastNames[Math.floor(Math.random() * lastNames.length)]}`;
  }

  private generateEmail(baseName: string, suffix: string): string {
    const cleanName = baseName.toLowerCase().replace(/[^a-z]/g, '');
    const cleanSuffix = suffix.toLowerCase().replace(/[^a-z]/g, '');
    const domains = ['co.uk', 'com', 'org.uk', 'net'];
    const domain = domains[Math.floor(Math.random() * domains.length)];
    return `info@${cleanName}${cleanSuffix}.${domain}`;
  }

  private generatePhoneNumber(): string {
    return `+44 ${Math.floor(Math.random() * 9000) + 1000} ${Math.floor(Math.random() * 900000) + 100000}`;
  }

  private generateWebsite(baseName: string): string {
    const cleanName = baseName.toLowerCase().replace(/[^a-z]/g, '');
    return `www.${cleanName}.co.uk`;
  }

  private generateStreetName(): string {
    const streetNames = ['High Street', 'Church Lane', 'Mill Road', 'Victoria Street', 'Station Road', 'Manor Close', 'Oak Avenue', 'Park View'];
    return streetNames[Math.floor(Math.random() * streetNames.length)];
  }

  private generateRandomLetters(count: number): string {
    const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    let result = '';
    for (let i = 0; i < count; i++) {
      result += letters.charAt(Math.floor(Math.random() * letters.length));
    }
    return result;
  }

  private generateSICCodes(businessType: string): string[] {
    const sicCodes = {
      agriculture: ['01110', '01210', '01410', '01500'],
      manufacturing: ['25110', '25620', '28110', '32990'],
      retail: ['47190', '47710', '47910', '47990'],
      hospitality: ['55100', '56101', '56210', '93110'],
      professional: ['69101', '69201', '70221', '74901'],
      construction: ['41201', '42110', '43210', '43999']
    };
    
    const codes = sicCodes[businessType as keyof typeof sicCodes] || ['99999'];
    return [codes[Math.floor(Math.random() * codes.length)]];
  }

  private generateEmployeeCount(): number {
    const ranges = [
      { min: 1, max: 5, weight: 0.4 },
      { min: 6, max: 20, weight: 0.3 },
      { min: 21, max: 50, weight: 0.2 },
      { min: 51, max: 200, weight: 0.1 }
    ];
    
    const random = Math.random();
    let cumulative = 0;
    
    for (const range of ranges) {
      cumulative += range.weight;
      if (random <= cumulative) {
        return Math.floor(Math.random() * (range.max - range.min + 1)) + range.min;
      }
    }
    
    return 1;
  }

  private generateTurnover(): number {
    const ranges = [
      { min: 10000, max: 100000, weight: 0.3 },
      { min: 100001, max: 500000, weight: 0.4 },
      { min: 500001, max: 2000000, weight: 0.2 },
      { min: 2000001, max: 10000000, weight: 0.1 }
    ];
    
    const random = Math.random();
    let cumulative = 0;
    
    for (const range of ranges) {
      cumulative += range.weight;
      if (random <= cumulative) {
        return Math.floor(Math.random() * (range.max - range.min + 1)) + range.min;
      }
    }
    
    return 50000;
  }

  private generateIncorporationDate(): Date {
    const start = new Date(1990, 0, 1);
    const end = new Date();
    return new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()));
  }

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
   * Export business data to CSV
   */
  exportToCSV(businesses: BusinessData[]): string {
    const headers = [
      'Business Name', 'Owner Name', 'Email', 'Phone', 'Website',
      'Address Line 1', 'Town', 'County', 'Postcode', 'Region',
      'Business Type', 'Employees', 'Turnover', 'Status', 'Data Source'
    ];
    
    const rows = businesses.map(business => [
      business.businessName,
      business.ownerName || '',
      business.email,
      business.phone || '',
      business.website || '',
      business.address.line1,
      business.address.town,
      business.address.county,
      business.address.postcode,
      business.address.region,
      business.businessType,
      business.employees || '',
      business.turnover || '',
      business.status,
      business.dataSource
    ]);
    
    const csvContent = [headers, ...rows]
      .map(row => row.map(field => `"${field}"`).join(','))
      .join('\n');
    
    return csvContent;
  }
}

// Export singleton instance
export const businessDatabaseService = new BusinessDatabaseService();