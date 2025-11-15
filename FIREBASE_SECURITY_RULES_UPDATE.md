# 🔒 FIREBASE SECURITY RULES - REQUIRED UPDATE

## ⚠️ ISSUE: Website Can't Read services/ Collection

The website is showing **$0 estimate** because it cannot read from the `services/` collection due to Firebase security rules.

---

## 📋 WHAT YOU NEED TO DO

Go to **Firebase Console** → **Firestore Database** → **Rules**

Add read permission for the `services/` collection:

```javascript
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {

    // Allow public read access to services collection (for website pricing)
    match /services/{serviceId} {
      allow read: if true;  // Public can read
      allow write: if false; // Only admin/server can write
    }

    // Allow public read access to Price & Rate config (for website)
    match /Price & Rate config/{document} {
      allow read: if true;  // Public can read config
      allow write: if false; // Only admin/server can write
    }

    // Allow public read access to statuses (for website)
    match /statuses/{document} {
      allow read: if true;  // Public can read statuses
      allow write: if false; // Only admin/server can write
    }

    // ... your existing rules for other collections ...
  }
}
```

---

## 🎯 WHY THIS IS NEEDED

**Before:** Pricing was in `Price & Rate config/pricing` which was already publicly readable

**Now:** Pricing is in `services/` collection which is NOT publicly readable yet

**Website needs to:**
- Read `services/` collection to get pricing
- Read `Price & Rate config/time_multipliers` for after-hours pricing
- Read `Price & Rate config/features` for feature flags
- Read `Price & Rate config/company` for company info

---

## ✅ AFTER YOU UPDATE THE RULES

The website will be able to:
1. ✅ Fetch services from `services/` collection
2. ✅ Calculate pricing correctly
3. ✅ Show estimates instead of $0
4. ✅ Create jobs when customers submit

---

## 🔒 SECURITY

**This is SAFE because:**
- ✅ Only READ access (not write)
- ✅ Pricing should be public anyway (customers need to see it)
- ✅ Only admin/dispatcher can modify prices (write: false)
- ✅ Standard practice for public-facing pricing

---

**Please update the Firebase security rules and then refresh the website!**
