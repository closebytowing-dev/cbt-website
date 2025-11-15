# 🚀 CLOSEBY TOWING - POST-LAUNCH SETUP GUIDE

## CRITICAL: Complete These Steps Immediately After Launch

This document contains all the setup steps needed to activate analytics, tracking, and SEO features.

---

## 📊 STEP 1: Google Analytics 4 Setup (15 minutes)

### Create Google Analytics Account

1. Go to [https://analytics.google.com](https://analytics.google.com)
2. Click "Start measuring"
3. Account name: "CloseBy Towing"
4. Property name: "CloseBy Towing Website"
5. Select "San Diego" as location, "Automotive" as industry
6. Choose "Web" as platform
7. **IMPORTANT**: Copy the **Measurement ID** (format: `G-XXXXXXXXXX`)

### Add to Website

1. Open `/src/app/layout.tsx`
2. Find line 110: `<script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"></script>`
3. Replace `G-XXXXXXXXXX` with your actual Measurement ID (2 places: line 110 and 116)
4. Save and redeploy

### Verify Installation

1. Go back to Google Analytics
2. Click "See your Google Analytics property"
3. Go to Reports → Realtime
4. Visit your website
5. You should see yourself in Real-time reports

---

## 📦 STEP 2: Google Tag Manager Setup (10 minutes)

### Create GTM Account

1. Go to [https://tagmanager.google.com](https://tagmanager.google.com)
2. Create account: "CloseBy Towing"
3. Container name: "closebytowing.com"
4. Target platform: "Web"
5. **IMPORTANT**: Copy the **Container ID** (format: `GTM-XXXXXXX`)

### Add to Website

1. Open `/src/app/layout.tsx`
2. Find line 105: `})(window,document,'script','dataLayer','GTM-XXXXXXX');`
3. Replace `GTM-XXXXXXX` with your actual Container ID (2 places: line 105 and 166)
4. Save and redeploy

### Configure GTM (Optional but Recommended)

1. In GTM, click "Add a new tag"
2. Choose "Google Analytics: GA4 Configuration"
3. Enter your GA4 Measurement ID
4. Set trigger to "All Pages"
5. Save and publish container

---

## 📘 STEP 3: Facebook Pixel Setup (10 minutes)

### Create Facebook Pixel

1. Go to [https://business.facebook.com/events_manager](https://business.facebook.com/events_manager)
2. Click "+ Connect Data Sources" → "Web"
3. Choose "Facebook Pixel" → "Connect"
4. Name: "CloseBy Towing Website"
5. Enter website URL: `https://closebytowing.com`
6. **IMPORTANT**: Copy the **Pixel ID** (format: `123456789012345`)

### Add to Website

1. Open `/src/app/layout.tsx`
2. Find line 134: `fbq('init', 'YOUR_PIXEL_ID');`
3. Replace `YOUR_PIXEL_ID` with your actual Pixel ID (2 places: line 134 and 140)
4. Save and redeploy

### Verify Installation

1. Install "Facebook Pixel Helper" Chrome extension
2. Visit your website
3. Extension should show green checkmark with your Pixel ID

---

## 🔍 STEP 4: Microsoft Clarity Setup (5 minutes) - FREE!

### Create Clarity Project

1. Go to [https://clarity.microsoft.com](https://clarity.microsoft.com)
2. Sign in with Microsoft account (create if needed)
3. Click "Add new project"
4. Name: "CloseBy Towing"
5. Website: `https://closebytowing.com`
6. **IMPORTANT**: Copy the **Project ID** (format: `abcdef1234`)

### Add to Website

1. Open `/src/app/layout.tsx`
2. Find line 152: `})(window, document, "clarity", "script", "YOUR_CLARITY_ID");`
3. Replace `YOUR_CLARITY_ID` with your actual Project ID
4. Save and redeploy

### What You Get

- FREE heatmaps showing where users click
- FREE session recordings (watch users navigate)
- FREE insights dashboard

---

## 🔎 STEP 5: Google Search Console (CRITICAL - 15 minutes)

### Claim Your Website

1. Go to [https://search.google.com/search-console](https://search.google.com/search-console)
2. Click "Add property"
3. Enter: `https://closebytowing.com`
4. Choose "HTML tag" verification method
5. **IMPORTANT**: Copy the verification code (format: `google1234567890abcdef`)

### Add Verification to Website

1. Open `/src/app/layout.tsx`
2. Find line 46: `google: 'PLACEHOLDER_ADD_YOUR_GOOGLE_SEARCH_CONSOLE_CODE'`
3. Replace placeholder with your verification code
4. Save and redeploy
5. Go back to Search Console and click "Verify"

### Submit Sitemap (REQUIRED FOR GOOGLE INDEXING)

1. In Search Console, go to "Sitemaps" (left sidebar)
2. Add new sitemap: `https://closebytowing.com/sitemap.xml`
3. Click "Submit"
4. Status should change to "Success" within 24 hours

### What to Monitor

- **Coverage**: Make sure all pages are indexed
- **Performance**: See which keywords bring traffic
- **Mobile Usability**: Fix any mobile issues
- **Core Web Vitals**: Monitor page speed scores

---

## 🎯 STEP 6: Bing Webmaster Tools (5 minutes) - BONUS TRAFFIC!

1. Go to [https://www.bing.com/webmasters](https://www.bing.com/webmasters)
2. Sign in and add site: `https://closebytowing.com`
3. Import from Google Search Console (easy!)
4. Submit sitemap: `https://closebytowing.com/sitemap.xml`

**Why?** Bing = 5-10% extra traffic (free money!)

---

## 📍 STEP 7: Google Business Profile (CRITICAL FOR LOCAL SEO - 30 minutes)

### Claim Your Listing

1. Go to [https://www.google.com/business](https://www.google.com/business)
2. Search for "CloseBy Towing San Diego"
3. If exists: Claim it
4. If not: Create new listing

### Complete Your Profile 100%

**Basic Info:**
- Business name: CloseBy Towing
- Category: Towing service
- Address: (your dispatch location or leave as service area business)
- Phone: (858) 999-9293
- Website: https://closebytowing.com
- Hours: 24/7

**Advanced:**
- Add 10+ photos (tow trucks, team, services)
- Add services (list all 8 services)
- Write description (200-300 words)
- Add attributes (Licensed, Insured, 24/7, etc.)

### Get Reviews

**THIS IS CRITICAL!** More reviews = higher rankings

1. Create review link: `https://g.page/r/YOUR_PLACE_ID/review`
2. Ask happy customers to leave reviews
3. Respond to ALL reviews (good and bad)

**Target:** 50 reviews in first 3 months

---

## 📊 STEP 8: Set Up Conversion Tracking

### Phone Call Tracking

**Option 1: CallRail (Recommended)**
1. Sign up at [CallRail.com](https://www.callrail.com)
2. Get tracking number (forwards to 858-999-9293)
3. Replace phone number on website with tracking number
4. Track which ads/pages drive calls

**Option 2: Google Ads Call Tracking**
1. If running Google Ads, use their call extension tracking
2. Free with Google Ads account

### Form Tracking

Already set up! Your popup tracks:
- `popup_opened` - When popup appears
- `service_selected` - Which service chosen
- `booking_step_2_reached` - Address entered
- `booking_abandoned` - User left mid-booking

View in Google Analytics → Events

---

## 🎨 STEP 9: Add Real Reviews to Website

### Get Google Reviews Widget

1. Go to your Google Business Profile
2. Click "Get more reviews"
3. Copy review link
4. Add Google reviews widget to homepage (future enhancement)

### Alternative: Testimonial Management

Currently have 3 hardcoded testimonials in LeftPopup.tsx. Consider:
1. Adding more real testimonials
2. Rotating through 10-15 reviews
3. Including customer photos
4. Adding video testimonials

---

## 🔗 STEP 10: Build Citations & Backlinks

### Submit to Directories (Do within first week)

**Free Listings:**
- [x] Google Business Profile (Step 7)
- [ ] Bing Places
- [ ] Yelp for Business
- [ ] Yellow Pages
- [ ] Better Business Bureau
- [ ] Angi (formerly Angie's List)
- [ ] Thumbtack
- [ ] San Diego Chamber of Commerce
- [ ] TowingAndRecoveryAssociation.org

**Ensure NAP Consistency:**
- Name: CloseBy Towing (exact same everywhere)
- Address: (use same format everywhere)
- Phone: (858) 999-9293 (same format everywhere)

### Local Partnerships

**Reach out to:**
1. Auto repair shops → Referral program
2. Car dealerships → Preferred vendor
3. Insurance companies → Add to network
4. Hotels/Tourism → Tourist breakdown service
5. Fleet companies → B2B contracts

---

## 📱 STEP 11: Social Media Setup

### Create Profiles

1. **Facebook Business Page**
   - Post service updates, photos, customer stories
   - Run ads to local audience

2. **Instagram Business**
   - Photos of rescues, team, equipment
   - Stories: behind-the-scenes, customer testimonials

3. **YouTube Channel**
   - How-to videos
   - Customer testimonials
   - "Day in the life" content

### Link Everything

- Add social links to website footer
- Add website link to all social profiles
- Cross-promote everywhere

---

## 🎯 STEP 12: Launch Google Ads (Optional but Recommended)

### Why Google Ads?

- Emergency towing searches = HIGH intent
- Immediate visibility while SEO builds
- Target exact keywords like "towing near me"

### Quick Start

1. Create Google Ads account
2. Campaign type: "Search"
3. Budget: $20-50/day to start
4. Keywords:
   - "emergency towing san diego"
   - "24/7 towing near me"
   - "roadside assistance san diego"
   - "tow truck san diego"
5. Landing page: Homepage OR create dedicated PPC landing page

### Track ROI

Use Google Analytics to see:
- Cost per click
- Conversion rate
- Revenue per ad dollar

**Target:** 3:1 return (every $1 spent = $3 revenue)

---

## ✅ POST-LAUNCH CHECKLIST

### Week 1 (Launch Week)
- [ ] Google Analytics installed & verified
- [ ] Google Tag Manager installed & verified
- [ ] Facebook Pixel installed & verified
- [ ] Microsoft Clarity installed & verified
- [ ] Google Search Console verified
- [ ] Sitemap submitted to Google
- [ ] Sitemap submitted to Bing
- [ ] Google Business Profile claimed/created
- [ ] First 10 business directory listings created

### Month 1
- [ ] 20+ Google Business reviews
- [ ] All social media profiles created
- [ ] Weekly blog post schedule started
- [ ] Google Ads campaign launched (if budget allows)
- [ ] CallRail or call tracking set up
- [ ] 25+ directory citations completed

### Month 3
- [ ] 50+ Google Business reviews
- [ ] 10-15 blog posts published
- [ ] Ranking on page 1 for brand name
- [ ] Ranking on page 2-3 for "towing san diego"
- [ ] 100+ organic visitors/month

### Month 6
- [ ] 100+ Google Business reviews
- [ ] Ranking page 1 for 5+ keywords
- [ ] 500+ organic visitors/month
- [ ] 20+ neighborhood landing pages
- [ ] Video content library (10+ videos)

---

## 🆘 TROUBLESHOOTING

### Analytics Not Showing Data

1. Check Realtime reports (not regular reports)
2. Wait 24-48 hours for data to appear
3. Verify IDs are correct in layout.tsx
4. Clear browser cache and test again
5. Use Google Tag Assistant Chrome extension

### Search Console Verification Fails

1. Make sure code is exactly as provided (no extra spaces)
2. Redeploy website after adding code
3. Wait 5 minutes, then try verification again
4. Try alternative verification method (DNS TXT record)

### Sitemap Not Indexing

1. Check sitemap is accessible: visit `https://closebytowing.com/sitemap.xml`
2. Validate with [XML-Sitemaps.com validator](https://www.xml-sitemaps.com/validate-xml-sitemap.html)
3. Resubmit in Search Console
4. Request indexing for individual URLs

---

## 📞 NEED HELP?

**Technical Issues:**
- Check Next.js documentation: [nextjs.org/docs](https://nextjs.org/docs)
- Google Analytics help: [support.google.com/analytics](https://support.google.com/analytics)

**SEO Questions:**
- Google Search Central: [developers.google.com/search](https://developers.google.com/search)
- Moz Beginner's Guide: [moz.com/beginners-guide-to-seo](https://moz.com/beginners-guide-to-seo)

---

## 🎉 YOU'RE READY TO DOMINATE!

Once you complete all steps above, you'll have:

✅ Complete analytics tracking
✅ Conversion tracking for all actions
✅ Google indexing your site
✅ Local SEO foundation
✅ Citation building started
✅ Review generation system
✅ Social media presence

**Expected Results:**
- Month 1: 100-200 organic visitors
- Month 3: 500-1,000 organic visitors
- Month 6: 2,000-3,000 organic visitors
- Month 12: 5,000-10,000 organic visitors

**Let's make CloseBy Towing the #1 towing company in San Diego!** 🚀
