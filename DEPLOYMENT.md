# PlayBeat Digital - Deployment Guide

## 🚀 Quick Start Deployment

### Frontend (Vercel)
**URL**: https://custom868.vercel.app

**Auto-deployed from**: `main` branch
- Production builds trigger automatically on push
- Environment: `.env.production`

### Backend (Render)
**API Base**: `https://playbeat-backend.onrender.com`

#### Manual Deployment Steps:

1. **Go to Render Dashboard**
   - https://dashboard.render.com

2. **Connect GitHub Repository**
   - Click "New +" → "Web Service"
   - Select: `https://github.com/annissak3g/custom868-.git`
   - Build Command: `cd 2 && npm install --production`
   - Start Command: `cd 2 && npm start`

3. **Environment Variables** (Set these on Render):
   ```
   MONGODB_URI=mongodb+srv://admin:<admin>@playbeat.umqpdyx.mongodb.net/?appName=playbeat
   PORT=5000
   NODE_ENV=production
   FRONTEND_URL=https://custom868.vercel.app
   
   # Stripe
   STRIPE_SECRET_KEY=sk_...
   STRIPE_PUBLISHABLE_KEY=pk_...
   STRIPE_ACCOUNT_ID=acct_...
   
   # JazzCash
   JAZZ_CASH_AGENT_ID=your_agent_id
   JAZZ_CASH_PASSWORD=your_password
   
   # Bank Alfalah
   ALFALAH_MERCHANT_ID=your_merchant_id
   ALFALAH_PASSWORD=your_password
   
   # Meezan Bank
   MEEZAN_MERCHANT_ID=your_merchant_id
   MEEZAN_PASSWORD=your_password
   
   SECRET_KEY=RLTJLDFGLDJFGVC
   ```

## ✅ Deployed Features

### Payment Gateways
- ✓ **Stripe** - Cards (USD/PKR)
- ✓ **JazzCash** - Pakistan Wallet
- ✓ **Bank Alfalah** - Bank Transfer
- ✓ **Meezan Bank** - Bank Transfer

### Frontend Routes
- `/` - Storefront (Home)
- `/checkout` - Payment Checkout
- `/admin` - Admin Panel
- `/inventory` - Inventory Manager
- `/dashboard` - Backend Dashboard

### API Endpoints
- `POST /api/orders` - Create order
- `POST /api/payments/stripe/create-checkout` - Stripe checkout
- `POST /api/payments/jazzcash/initiate` - JazzCash payment
- `POST /api/payments/alfalah/initiate` - Alfalah payment
- `POST /api/payments/meezan/initiate` - Meezan payment
- `GET /api/payments/methods` - Available payment methods

## 🔐 Security

- CORS configured for `https://custom868.vercel.app`
- Rate limiting on API endpoints
- Helmet.js security headers
- Environment variables protected on Render
- MongoDB connection secured with credentials

## 📊 Monitoring

**Render Logs**: https://dashboard.render.com/services
**Vercel Logs**: https://vercel.com/dashboard
**MongoDB**: https://cloud.mongodb.com

## 🛠️ Troubleshooting

### Backend not connecting
- Check `FRONTEND_URL` is set to frontend domain
- Verify CORS origin matches
- Check MongoDB connection string

### Payment gateways failing
- Verify environment variables on Render
- Check gateway credentials
- Review payment controller logs

### Frontend showing empty
- Clear browser cache
- Check Vercel deployment status
- Verify `VITE_API_URL` points to Render backend
