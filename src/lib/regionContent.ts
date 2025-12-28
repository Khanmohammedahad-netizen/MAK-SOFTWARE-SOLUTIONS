export interface RegionContent {
  hero: {
    title: string;
    subtitle: string;
  };
  approach: {
    title: string;
    communication: string;
    workStyle: string;
    expectations: string;
  };
  whyChoose: {
    culture: string;
    businessPractice: string;
    timezone: string;
  };
}

export const regionContent: Record<string, RegionContent> = {
  global: {
    hero: {
      title: 'Enterprise Software Development for Global Businesses',
      subtitle:
        'Dedicated development teams delivering custom software solutions with enterprise-grade quality and accountability.',
    },
    approach: {
      title: 'Global Delivery, Local Excellence',
      communication: 'English-first communication with 24/7 availability across time zones',
      workStyle: 'Agile methodology with bi-weekly sprints and continuous delivery',
      expectations:
        'Professional, transparent reporting with clear milestones and deliverables',
    },
    whyChoose: {
      culture: 'International team with experience serving Fortune 500 companies',
      businessPractice:
        'ISO-compliant processes with enterprise security standards',
      timezone: 'Follow-the-sun development model for faster turnaround',
    },
  },
  japan: {
    hero: {
      title: 'Reliable Software Engineering for Japanese Enterprises',
      subtitle:
        'Dedicated development teams with understanding of Japanese business culture, communication style, and quality expectations.',
    },
    approach: {
      title: 'Japan-First Communication',
      communication:
        'Dedicated Japanese-speaking coordinator with understanding of hou-ren-sou (reporting, communication, consultation)',
      workStyle:
        'Detailed documentation, consensus-based decisions, and respect for established processes',
      expectations:
        'High attention to detail, thorough testing, and commitment to scheduled deliveries',
    },
    whyChoose: {
      culture:
        'Team trained in Japanese business etiquette and long-term relationship building',
      businessPractice:
        'Experience with Japanese enterprises, understanding of ringi process and quality standards',
      timezone:
        'Overlap hours with Japanese business time for real-time communication',
    },
  },
  dubai: {
    hero: {
      title: 'Premium Software Solutions for Middle East Enterprises',
      subtitle:
        'Custom software development with understanding of regional business culture and rapid scaling requirements.',
    },
    approach: {
      title: 'Regional Excellence',
      communication:
        'Arabic and English language support with regional business hours coverage',
      workStyle:
        'Fast-paced execution with flexibility for changing requirements and ambitious timelines',
      expectations:
        'Premium service delivery with white-glove support and executive-level reporting',
    },
    whyChoose: {
      culture:
        'Understanding of regional business culture and relationship-driven approach',
      businessPractice:
        'Experience with family offices, government entities, and regional conglomerates',
      timezone:
        'UAE business hours coverage with teams aligned to Gulf Standard Time',
    },
  },
  usa: {
    hero: {
      title: 'Custom Software Development for US Enterprises',
      subtitle:
        'Scalable engineering teams delivering innovative solutions with Silicon Valley quality standards.',
    },
    approach: {
      title: 'US Business Standards',
      communication:
        'Direct, results-oriented communication with US business hours coverage',
      workStyle:
        'Fast iteration, MVP-first approach, and continuous deployment practices',
      expectations:
        'Startup mentality with enterprise reliability, focus on business outcomes over process',
    },
    whyChoose: {
      culture:
        'Team experienced with US tech culture, fast-paced decision making, and innovation focus',
      businessPractice:
        'Understanding of US legal requirements, compliance standards (SOC2, HIPAA), and procurement processes',
      timezone:
        'Full coverage of US time zones (EST, CST, MST, PST) for seamless collaboration',
    },
  },
  uk: {
    hero: {
      title: 'Enterprise Software Solutions for UK Businesses',
      subtitle:
        'Professional software development teams with understanding of UK business culture and regulatory requirements.',
    },
    approach: {
      title: 'UK Business Approach',
      communication:
        'British English communication with UK business hours coverage and formal reporting',
      workStyle:
        'Structured approach balancing agility with thorough documentation and governance',
      expectations:
        'Professional service delivery with clear accountability and adherence to agreed processes',
    },
    whyChoose: {
      culture:
        'Team familiar with UK business etiquette, communication style, and working practices',
      businessPractice:
        'Understanding of UK regulations (GDPR, financial services), procurement frameworks, and corporate governance',
      timezone:
        'GMT/BST aligned teams ensuring overlap with UK business hours',
    },
  },
  europe: {
    hero: {
      title: 'Software Development for European Enterprises',
      subtitle:
        'Custom software solutions with understanding of European business practices and regulatory landscape.',
    },
    approach: {
      title: 'European Standards',
      communication:
        'Multilingual support (English, German, French) with Central European business hours',
      workStyle:
        'Balanced approach combining innovation with thorough planning and quality assurance',
      expectations:
        'High standards for data privacy, security, and regulatory compliance',
    },
    whyChoose: {
      culture:
        'Experience with diverse European markets and multicultural team collaboration',
      businessPractice:
        'Deep understanding of GDPR, EU regulations, and regional business practices',
      timezone:
        'CET/CEST coverage for seamless collaboration across European markets',
    },
  },
};

export function getRegionContent(region: string): RegionContent {
  return regionContent[region] || regionContent.global;
}
