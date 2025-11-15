# Production Deployment Checklist for V1

## ✅ Code Changes Completed

### 1. Job Structure Updates (Manager Integration)
- ✅ **create-job API** ([src/app/api/create-job/route.ts](src/app/api/create-job/route.ts)):
  - Removed `status` field from job creation
  - Changed `paymentStatus: "pending"` → `paymentStatus: "unpaid"`

- ✅ **verify-payment API** ([src/app/api/verify-payment/route.ts](src/app/api/verify-payment/route.ts)):
  - Changed `paymentStatus: "completed"` → `paymentStatus: "paid"`
  - Removed `status: "Paid"` update

### 2. Pricing System Improvements
- ✅ **Added retry logic** for Firebase App Check initialization ([src/lib/pricing-client.ts](src/lib/pricing-client.ts)):
  - `fetchServices()` retries up to 3 times with exponential backoff
  - `fetchDocWithRetry()` retries config document fetches
  - Handles permission-denied errors gracefully

- ✅ **Added debug logging** to pricing system:
  - Logs when config is cached vs fetched
  - Shows number of services loaded
  - Displays errors clearly in console

### 3. Firebase App Check Configuration
- ✅ **Development mode** ([src/lib/firebase.ts](src/lib/firebase.ts)):
  - Uses debug token (`FIREBASE_APPCHECK_DEBUG_TOKEN = true`)
  - Bypasses reCAPTCHA in localhost

- ✅ **Production mode** (automatic when deployed):
  - Uses real reCAPTCHA v3 token
  - Graceful error handling (won't block requests if App Check fails)

### 4. Payment Confirmation Page
- ✅ **Redesigned confirmation page** ([src/app/payment-success/page-client.tsx](src/app/payment-success/page-client.tsx)):
  - Elegant light blue fullscreen design
  - Animated checkmark
  - Large ETA display ("Less than 30 minutes")
  - Clear messaging: "Your tow operator is on the way"

---

## ⚠️ CRITICAL: Before Production Deployment

### 1. Fix Firebase App Check reCAPTCHA (REQUIRED)

**Current Issue:**
The reCAPTCHA site key (`6LdK9fIrAAAAAO6F1j3m84Q-qO0XLKJ_pAmfBUgH`) is returning 400 errors because it's not properly configured for Firebase App Check.

**Solution:**

1. **Go to Firebase Console** → **App Check** section:
   - URL: https://console.firebase.google.com/project/closebydriverapp1/appcheck

2. **Register your Web App with reCAPTCHA v3**:
   - Click on your web app
   - Select "reCAPTCHA v3" as the provider
   - Firebase will generate a **new reCAPTCHA site key** specifically for App Check
   - This is DIFFERENT from regular Google reCAPTCHA keys

3. **Update .env.local with the new key**:
   ```bash
   NEXT_PUBLIC_RECAPTCHA_SITE_KEY=<NEW_KEY_FROM_FIREBASE_APP_CHECK>
   ```

4. **Add your production domain to reCAPTCHA settings**:
   - Go to Google Cloud Console → reCAPTCHA settings
   - Add your domain (e.g., `yourdomain.com`)
   - Add `localhost` for development testing

**Alternative (Temporary):**
If you want to deploy immediately without fixing App Check:
- App Check is in "Monitoring" mode (not enforced)
- The website will work but show warnings in console
- You can fix App Check after deployment

---

### 2. Environment Variables for Production

Make sure these are set in your hosting platform (Vercel/Netlify/etc.):

```bash
# Firebase Client Config
NEXT_PUBLIC_FIREBASE_API_KEY=AIzaSyC1GOce-zUy2DTBS7iEuKPnLEVEJvuOrU0
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=closebydriverapp1.firebaseapp.com
NEXT_PUBLIC_FIREBASE_PROJECT_ID=closebydriverapp1
NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=closebydriverapp1.firebasestorage.app
NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=126047199661
NEXT_PUBLIC_FIREBASE_APP_ID=1:126047199661:web:2ac74dbf7e437dc8bd4124

# App Check (fix before production!)
NEXT_PUBLIC_RECAPTCHA_SITE_KEY=<GET_NEW_KEY_FROM_FIREBASE_APP_CHECK>

# Square Payment
SQUARE_ACCESS_TOKEN=<YOUR_PRODUCTION_SQUARE_TOKEN>
SQUARE_ENVIRONMENT=production  # Change from 'sandbox'
NEXT_PUBLIC_SQUARE_LOCATION_ID=<YOUR_SQUARE_LOCATION_ID>

# Google Maps
NEXT_PUBLIC_GOOGLE_MAPS_API_KEY=<YOUR_MAPS_KEY>

# Support
SUPPORT_EMAIL=support@yourdomain.com
```

---

### 3. Square Payment Configuration

**IMPORTANT:** Currently using SANDBOX mode. Before production:

1. **Switch to Production Square credentials**:
   - Get production access token from Square Dashboard
   - Update `SQUARE_ACCESS_TOKEN` in environment variables
   - Set `SQUARE_ENVIRONMENT=production`

2. **Update payment redirect URL**:
   - The website creates redirect URLs like: `https://yourdomain.com/payment-success?jobId=...`
   - Make sure your production domain is correct

3. **Test payment flow** with real credit card in production

---

### 4. Firestore Security Rules

✅ **Already deployed** - rules are production-ready:
- Public read access for `services/` and `Price & Rate config/`
- Website can create jobs in `/live_jobs`
- Admin-only write access for all config collections

**Verify rules are deployed:**
```bash
firebase deploy --only firestore:rules
```

---

### 5. Firebase Hosting (if using)

If deploying to Firebase Hosting:

```bash
# Build the Next.js app
npm run build

# Deploy to Firebase
firebase deploy --only hosting
```

**Update firebase.json** if needed for Next.js routing.

---

## 🧪 Testing Checklist

Before deploying to production, test these flows:

### Local Testing (Development)
- [ ] Homepage loads correctly
- [ ] "Get a Quote" button opens popup
- [ ] Select "Local Towing" service
- [ ] Enter pickup address → see pricing estimate (NOT $0)
- [ ] Enter dropoff address → see updated price
- [ ] Fill out customer info
- [ ] Submit → creates job in Firebase `/live_jobs`
- [ ] Redirects to Square payment
- [ ] Complete payment → redirects back to `/payment-success`
- [ ] Payment success page shows elegant blue screen
- [ ] Job in Firebase updated with `paymentStatus: "paid"`

### Production Testing (After Deployment)
- [ ] All above tests on production domain
- [ ] Check browser console for App Check errors
- [ ] Verify Firebase App Check shows requests in Console
- [ ] Test with real payment (small amount)
- [ ] Verify dispatcher panel receives the job

---

## 📋 Job Document Structure (V1 Format)

### Website Jobs (what your website creates):
```json
{
  "customerName": "John Doe",
  "customerPhone": "18581234567",
  "pickupLocation": "123 Main St, San Diego, CA",
  "dropoffLocation": "456 Elm St, San Diego, CA",
  "vehicle": "2024 Toyota Camry • Blue",
  "service": "Local Towing",
  "source": "website",
  "paymentStatus": "unpaid",  // or "paid" after payment
  "paymentLinkId": "SQUARE_PAYMENT_LINK_ID",
  "squareOrderId": "ORDER_123",
  "paymentCompletedAt": "2025-10-24T05:27:13.128Z",
  "amountQuoted": 138,
  "createdAt": "2025-10-24T05:27:13.128Z"
}
```

**Note:** NO `status` field (removed for V1 integration)

---

## 🚀 Deployment Commands

### Option 1: Vercel (Recommended for Next.js)
```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel

# Set environment variables in Vercel dashboard
```

### Option 2: Firebase Hosting
```bash
# Build
npm run build

# Deploy
firebase deploy --only hosting
```

### Option 3: Netlify
```bash
# Install Netlify CLI
npm i -g netlify-cli

# Deploy
netlify deploy --prod
```

---

## ✅ Post-Deployment Verification

1. **Check Firebase App Check metrics**:
   - Go to Firebase Console → App Check
   - Should see verified requests (green) if reCAPTCHA is working
   - Unverified requests (red) if App Check is still broken

2. **Monitor Firebase `/live_jobs` collection**:
   - New jobs should have `paymentStatus: "unpaid"`
   - After payment: `paymentStatus: "paid"`
   - NO `status` field

3. **Test dispatcher panel integration**:
   - Verify dispatcher can see new website jobs
   - Check job format matches dispatcher expectations

---

## 🔧 Troubleshooting

### Issue: Pricing shows $0
**Solution:** Hard refresh browser (`Cmd+Shift+R`)

### Issue: App Check 400 errors
**Solution:** Get new reCAPTCHA key from Firebase App Check (see above)

### Issue: Payment link fails
**Solution:**
- Check Square credentials are correct
- Verify `SQUARE_ENVIRONMENT` is set correctly
- Check Square API logs

### Issue: Jobs not appearing in dispatcher
**Solution:**
- Verify job structure matches V1 format (no `status` field)
- Check Firebase security rules allow dispatcher to read `/live_jobs`

---

## 📞 Support

If you encounter issues during deployment, check:
1. Browser console for errors
2. Firebase Console → App Check for request metrics
3. Square Dashboard for payment logs
4. Firebase Console → Firestore for job documents

---

**Generated:** 2025-10-24
**Next.js Version:** 15.5.4
**Firebase SDK:** Admin + Client
**Square SDK:** Latest
