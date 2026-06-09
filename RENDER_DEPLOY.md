# Render Deployment Guide

## 🚀 Deploy Backend to Render

### API Key
```
rnd_uA4ieARjGF6ca52ECjtneJ85cnZM
```

### Deployment Steps

#### Option A: Via Render Dashboard (Recommended for First Time)

1. **Visit Render Dashboard**
   - Go to https://render.com/dashboard
   - Sign in to your account

2. **Create New Web Service**
   - Click "New +" → "Web Service"
   - Connect GitHub repository: `https://github.com/annissak3g/custom868-.git`
   - Select repository `custom868`
   - Select branch: `main`

3. **Configure Service**
   - Name: `playbeat-backend`
   - Environment: `Node`
   - Build Command: `cd 2 && npm install --production`
   - Start Command: `cd 2 && npm start`
   - Instance Type: Free (or Starter for production)

4. **Set Environment Variables**
   
   **Core Settings:**
   ```
   PORT=3000
   NODE_ENV=production
   MONGODB_URI=mongodb+srv://admin:<admin>@playbeat.umqpdyx.mongodb.net/?appName=playbeat
   FRONTEND_URL=https://custom868.vercel.app
   SECRET_KEY=RLTJLDFGLDJFGVC
   ```

   **Stripe (International)**
   ```
   STRIPE_PUBLISHABLE_KEY=pk_test_51TMvD1K7C5jIjluKwjpb2ZJzlZoH4I9hxOwbcZkXr15wNvaLLX7wHpfeTw6Eu09O0aZDCpWo6ptHvoQjhloFApJ200lkcdWYVw
   STRIPE_SECRET_KEY=[YOUR_STRIPE_SECRET_KEY]
   STRIPE_RESTRICTED_KEY=[YOUR_STRIPE_RESTRICTED_KEY]
   STRIPE_ACCOUNT_ID=acct_1TMvCGGTlnWXlnXp
   ```
   
   ⚠️ **Note:** Use actual keys from [Stripe Dashboard](https://dashboard.stripe.com/apikeys)

   **Bank Alfalah (Local)**
   ```
   ALFAPAY_MERCHANT_ID=197
   ALFAPAY_STORE_ID=000001
   ALFAPAY_CHANNEL_ID=1002
   ALFAPAY_API_URL=https://sandbox.bankalfalah.com/HS/api/HSAPI/HSAPI
   ALFAPAY_MODE=sandbox
   ALFAPAY_RETURN_URL=https://custom868.vercel.app/payment/success
   ALFAPAY_SETTLEMENT_ACCOUNT=00681011050474
   ALFAPAY_SETTLEMENT_TITLE=PLAYBEAT DIGITAL (PRIVATE LIMITED)
   ```

   **Meezan Bank (Local)**
   ```
   MEEZAN_IBAN=PK86MEZN0015040115102971
   MEEZAN_ACCOUNT_TITLE=PLAYBEAT DIGITAL PRIVATE LIMITED
   MEZPAY_SUCCESS_CALLBACK=success
   MEZPAY_FAILED_CALLBACK=failed
   ```

   **JazzCash (Local)**
   ```
   JAZZCASH_MERCHANT_ACCOUNT=PLAYBEAT ARENA MERCHANT ACCOUNT
   JAZZCASH_WALLET_NUMBER=03318333368
   JAZZCASH_TIMEZONE=Asia/Karachi
   JAZZCASH_PAYMENTMODE=sandbox
   ```

5. **Deploy**
   - Click "Create Web Service"
   - Render will automatically build and deploy
   - Monitor logs in the dashboard

---

#### Option B: Via Render CLI (Advanced)

```bash
# Install Render CLI
npm install -g @render-com/cli

# Authenticate with API key
render login --api-key rnd_uA4ieARjGF6ca52ECjtneJ85cnZM

# Deploy from render.yaml
render deploy --yaml render.yaml
```

---

### ✅ Deployment Verification

After deployment completes:

1. **Check Backend Health**
   ```
   curl https://playbeat-backend.onrender.com/api/health
   ```

2. **Expected Response**
   ```json
   { "status": "ok", "message": "Backend server is running" }
   ```

3. **Test Frontend Connection**
   - Visit https://custom868.vercel.app
   - Should load without connection errors

---

### 🔗 Service URLs

| Service | URL |
|---------|-----|
| Frontend | https://custom868.vercel.app |
| Backend API | https://playbeat-backend.onrender.com |
| Admin Panel | https://custom868.vercel.app/admin |
| Admin Payments | https://custom868.vercel.app/admin/payments |

---

### 📋 Current Environment

| Variable | Value |
|----------|-------|
| Backend Port | 3000 |
| Database | MongoDB Atlas |
| Frontend URL | https://custom868.vercel.app |
| Node Environment | production |

---

### 🔧 Troubleshooting

| Issue | Solution |
|-------|----------|
| Service suspended | Free tier auto-suspends. Upgrade to Starter plan or keep active. |
| Build failed | Check buildCommand `cd 2 && npm install --production` |
| Connection refused | Backend not running. Check logs in Render dashboard. |
| Environment vars not set | Use "Environment" tab in Render dashboard, not config files. |

---

### 📞 Support

- Render Dashboard: https://render.com/dashboard
- Documentation: https://render.com/docs
- Status Page: https://status.render.com
