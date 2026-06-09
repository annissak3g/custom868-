# PlayBeat Digital - Payment Gateways Configuration

## 🌍 Payment Methods

### 1. **Stripe** (International)
- **Type**: Card Payment
- **Currencies**: USD, PKR
- **Account ID**: acct_1TMvCGGTlnWXlnXp
- **Live Key**: pk_test_51TMvD1K7C5jIjluKwjpb2ZJzlZoH4I9hxOwbcZkXr15wNvaLLX7wHpfeTw6Eu09O0aZDCpWo6ptHvoQjhloFApJ200lkcdWYVw
- **Status**: ✅ Configured & Active

### 2. **Bank Alfalah** (Local - Pakistan)
- **Type**: Bank Transfer
- **Account Title**: PLAYBEAT DIGITAL (PRIVATE LIMITED)
- **Account Number**: 00681011050474
- **Merchant ID**: 197
- **Store ID**: 000001
- **Status**: ✅ Configured & Ready

### 3. **Meezan Bank** (Local - Pakistan)
- **Type**: Bank Transfer
- **Account Title**: PLAYBEAT DIGITAL PRIVATE LIMITED
- **IBAN**: PK86MEZN0015040115102971
- **Status**: ✅ Configured & Ready

### 4. **JazzCash** (Local - Pakistan)
- **Type**: Wallet Payment
- **Merchant Account**: PLAYBEAT ARENA MERCHANT ACCOUNT
- **Wallet Number**: 03318333368
- **Status**: ✅ Configured & Ready

## 🔐 Security Notes

- All sensitive keys are stored in `.env` (not in version control)
- Stripe uses restricted keys for frontend
- Bank credentials are protected on backend only
- CORS configured for `https://custom868.vercel.app`
- Rate limiting enabled on payment endpoints

## 📋 Environment Variables Setup

### Backend (.env in folder 2/)
```bash
STRIPE_PUBLISHABLE_KEY=pk_test_...
STRIPE_SECRET_KEY=sk_test_...
STRIPE_RESTRICTED_KEY=rk_test_...
STRIPE_ACCOUNT_ID=acct_1TMvCGGTlnWXlnXp

ALFAPAY_MERCHANT_ID=197
ALFAPAY_STORE_ID=000001
ALFAPAY_CHANNEL_ID=1002

MEEZAN_IBAN=PK86MEZN0015040115102971
MEEZAN_ACCOUNT_TITLE=PLAYBEAT DIGITAL PRIVATE LIMITED

JAZZCASH_WALLET_NUMBER=03318333368
JAZZCASH_MERCHANT_ACCOUNT=PLAYBEAT ARENA MERCHANT ACCOUNT
```

### Frontend (.env.production in folder 1/)
```bash
VITE_API_URL=https://playbeat-backend.onrender.com
VITE_STRIPE_PUBLISHABLE_KEY=pk_test_...
```

## 🚀 Payment Flow

1. **User selects payment method** on checkout page
2. **Frontend** sends payment request to backend API
3. **Backend** routes to appropriate payment gateway
4. **Gateway** processes payment (instant for cards, manual for bank transfers)
5. **Webhook** confirms payment status
6. **Order** status updated in MongoDB

## ✅ Testing

- Use test Stripe card: `4242 4242 4242 4242`
- Bank transfers: Manual verification via bank dashboards
- JazzCash: Test wallet integration with provided merchant account
- All gateways configured for sandbox/test mode

## 📞 Support

- **Stripe**: https://dashboard.stripe.com/acct_1TMvCGGTlnWXlnXp
- **Bank Alfalah**: Contact merchant support
- **Meezan Bank**: Contact merchant support
- **JazzCash**: Contact merchant support
