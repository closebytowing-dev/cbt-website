# ⚡ QUICK START GUIDE - 5 MINUTES TO LAUNCH

## Step 1: Replace These IDs (2 minutes)

Open `/src/app/layout.tsx` and replace:

### Line 105 & 166:
```typescript
'GTM-XXXXXXX'  →  Your Google Tag Manager ID
```

### Line 110 & 116:
```typescript
'G-XXXXXXXXXX'  →  Your Google Analytics 4 Measurement ID
```

### Line 134 & 140:
```typescript
'YOUR_PIXEL_ID'  →  Your Facebook Pixel ID
```

### Line 152:
```typescript
'YOUR_CLARITY_ID'  →  Your Microsoft Clarity Project ID
```

### Line 46:
```typescript
'PLACEHOLDER_ADD_YOUR_GOOGLE_SEARCH_CONSOLE_CODE'  →  Your Google Search Console verification code
```

---

## Step 2: Get Your IDs (5-10 minutes each)

### Google Analytics 4:
1. Go to [analytics.google.com](https://analytics.google.com)
2. Create property
3. Copy Measurement ID (starts with `G-`)

### Google Tag Manager:
1. Go to [tagmanager.google.com](https://tagmanager.google.com)
2. Create container
3. Copy Container ID (starts with `GTM-`)

### Facebook Pixel:
1. Go to [business.facebook.com/events_manager](https://business.facebook.com/events_manager)
2. Create pixel
3. Copy Pixel ID (numbers only)

### Microsoft Clarity (FREE):
1. Go to [clarity.microsoft.com](https://clarity.microsoft.com)
2. Add project
3. Copy Project ID

### Google Search Console:
1. Go to [search.google.com/search-console](https://search.google.com/search-console)
2. Add property: `https://closebytowing.com`
3. Choose "HTML tag" method
4. Copy verification code

---

## Step 3: Deploy (1 minute)

```bash
npm run build
# Deploy to your hosting provider
```

---

## Step 4: Verify (2 minutes)

1. Visit your website
2. Open Google Analytics → Realtime → Should see yourself
3. Open Facebook Pixel Helper (Chrome extension) → Should show green
4. Go back to Google Search Console → Click "Verify" button
5. Submit sitemap: `https://closebytowing.com/sitemap.xml`

---

## ✅ YOU'RE DONE!

Your website is now tracking everything and ready to dominate Google!

### Next Steps:
- Read `SETUP_INSTRUCTIONS.md` for complete setup guide
- Review `IMPLEMENTATION_SUMMARY.md` for full details
- Start getting Google Business reviews
- Create 25+ directory listings (Yelp, Yellow Pages, etc.)

---

**Questions?** Check the detailed guides in your project folder.

**Ready to explode on Google!** 🚀
