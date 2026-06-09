// PlayBeat Payment Gateways Configuration
// Supports: Stripe (International), Bank Alfalah, Meezan Bank, JazzCash (Local Pakistan)

export const PAYMENT_GATEWAYS = {
  STRIPE: {
    id: 'stripe',
    label: 'Debit / Credit Card',
    type: 'card',
    icon: 'stripe',
    currencies: ['USD', 'PKR'],
    publishableKey: import.meta.env.VITE_STRIPE_PUBLISHABLE_KEY,
    endpoint: '/api/payments/stripe/create-checkout',
  },
  JAZZCASH: {
    id: 'jazzcash',
    label: 'JazzCash Wallet',
    type: 'wallet',
    icon: 'jazzcash',
    currencies: ['PKR'],
    account: 'PLAYBEAT ARENA MERCHANT ACCOUNT',
    wallet: '03318333368',
    endpoint: '/api/payments/jazzcash/initiate',
  },
  ALFALAH: {
    id: 'alfalah',
    label: 'Bank Alfalah Transfer',
    type: 'bank_transfer',
    icon: 'alfalah',
    currencies: ['PKR'],
    accountTitle: 'PLAYBEAT DIGITAL (PRIVATE LIMITED)',
    accountNumber: '00681011050474',
    endpoint: '/api/payments/alfalah/initiate',
  },
  MEEZAN: {
    id: 'meezan',
    label: 'Meezan Bank Transfer',
    type: 'bank_transfer',
    icon: 'meezan',
    currencies: ['PKR'],
    iban: 'PK86MEZN0015040115102971',
    accountTitle: 'PLAYBEAT DIGITAL PRIVATE LIMITED',
    endpoint: '/api/payments/meezan/initiate',
  },
};

export const DEFAULT_CURRENCY = 'PKR';
export const API_BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000';

// Payment Methods Available
export const AVAILABLE_PAYMENT_METHODS = [
  PAYMENT_GATEWAYS.STRIPE,
  PAYMENT_GATEWAYS.JAZZCASH,
  PAYMENT_GATEWAYS.ALFALAH,
  PAYMENT_GATEWAYS.MEEZAN,
];
