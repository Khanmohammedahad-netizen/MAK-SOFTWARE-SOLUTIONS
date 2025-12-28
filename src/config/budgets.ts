export const REGION_BUDGETS = {
  Japan: {
    currency: 'JPY',
    symbol: '¥',
    options: [
      '¥200,000 – ¥500,000',
      '¥500,000 – ¥1,000,000',
      '¥1,000,000+',
    ],
  },
  USA: {
    currency: 'USD',
    symbol: '$',
    options: [
      '$1,200 – $1,500',
      '$1,500 – $3,000',
      '$3,000+',
    ],
  },
  Dubai: {
    currency: 'AED',
    symbol: 'د.إ',
    options: [
      'AED 4,000 – 8,000',
      'AED 8,000 – 15,000',
      'AED 15,000+',
    ],
  },
  UK: {
    currency: 'GBP',
    symbol: '£',
    options: [
      '£1,000 – £2,000',
      '£2,000 – £4,000',
      '£4,000+',
    ],
  },
  Europe: {
    currency: 'EUR',
    symbol: '€',
    options: [
      '€1,000 – €2,000',
      '€2,000 – €4,000',
      '€4,000+',
    ],
  },
} as const;
