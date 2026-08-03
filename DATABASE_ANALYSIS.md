# 🔍 COMPLETE FIREBASE DATABASE ANALYSIS & REORGANIZATION PLAN

## 📊 CURRENT DATABASE SUMMARY

**Total Collections: 8**
- drivers (1 doc)
- live_jobs (13 docs)
- partner_payments (1 doc)
- partners (1 doc)
- **prices (3 docs)** ⚠️ PRICING CONFLICT
- **services (10 docs)** ⚠️ PRICING CONFLICT
- **settings (6 docs)** ⚠️ PRICING CONFLICT
- users (3 docs)

---

## 🚨 CRITICAL ISSUES FOUND

### 1. **PRICING DATA DUPLICATION & CONFLICTS**

You have **THREE different places** storing pricing information:

#### A. `prices/` collection (Used by website)
```
prices/rates → travelRate: $3/mi
prices/services → Battery Jump Start: $88
prices/towing → Local Towing: $75 hookup + $8/mi
```

#### B. `services/` collection (Used by dispatcher app?)
```
services/jump-start → baseFee: $75
services/local-towing → baseFee: $75, perMile: $8
services/travel-miles → ratePerMile: $1.75  ⚠️ DIFFERENT FROM prices!
```

#### C. `settings/pricing` document (Old/legacy?)
```
settings/pricing/travelMiles → ratePerMile: $1.75  ⚠️ DIFFERENT FROM prices!
settings/pricing/timeMultipliers → Has after-hours multipliers!
```

**🔴 MAJOR CONFLICT:**
- `prices/rates` says travelRate = $3/mi
- `services/travel-miles` says ratePerMile = $1.75/mi
- `settings/pricing/travelMiles` says ratePerMile = $1.75/mi

**Which is correct?** This causes inconsistent pricing between website and dispatcher app!

---

### 2. **AFTER-HOURS PRICING ALREADY EXISTS!**

Found in `settings/pricing/timeMultipliers`:
```json
{
  "standard": { "multiplier": 1, "start": "07:00", "end": "17:00" },
  "evening": { "multiplier": 1.4, "start": "17:00", "end": "20:00" },
  "overnight": { "multiplier": 2, "start": "20:00", "end": "07:00" }
}
```

**BUT** these multipliers are NOT being used by the website (only in Firebase, not in code).

---

### 3. **DATA STRUCTURE INCONSISTENCIES**

#### Services Collection Issues:
- `displayOrder` document contains service data (should just be a number)
- Inconsistent field names: `calcType` vs calculation type
- Mixed migration metadata (`migratedAt`, `migratedFrom`)
- `afterHoursEligible` exists but not used

#### Jobs Collection Issues:
- Inconsistent field usage across jobs
- Some jobs from "website" source, others from "dispatcher"
- Mixed status values
- No clear job lifecycle tracking

---

## ✅ PROPOSED REORGANIZATION (HIGHEST LEVEL)

### **OPTION 1: SINGLE SOURCE OF TRUTH (Recommended)**

```
📁 config/                          [NEW - All configuration data]
  ├── pricing                       [Master pricing - single source]
  ├── time_multipliers              [After-hours pricing rules]
  ├── service_catalog               [Service definitions]
  ├── company                       [Company info]
  └── features                      [Feature flags]

📁 jobs/                            [Renamed from live_jobs]
  └── {jobId}                       [Each job document]

📁 users/
  └── {userId}

📁 drivers/
  └── {driverId}

📁 partners/
  └── {partnerId}

📁 partner_payments/
  └── {paymentId}

📁 archived_jobs/                   [NEW - Completed/deleted jobs]
  └── {jobId}
```

---

### **config/pricing** Structure:
```json
{
  "version": "2.0",
  "lastUpdated": "2025-10-23T...",
  "updatedBy": "admin",

  "base": {
    "travelRate": 1.75,              // ✅ CHOOSE: $1.75 or $3?
    "onlineDiscountRate": 0.15
  },

  "services": {
    "Battery Jump Start": {
      "basePrice": 88,
      "label": "Jump start",
      "description": "Professional battery jump start service",
      "calcType": "ONSITE",
      "discountEligible": true,
      "afterHoursEligible": true,
      "displayOrder": 40
    },
    "Lockout Service": { ... },
    "Tire Change": { ... },
    "Fuel Delivery": { ... },
    "Winch-Out / Recovery": {
      "basePrice": 195,
      "hourlyRate": 195,
      "minHours": 1,
      "portToPort": true,
      ...
    },
    "Collision Recovery": { ... },
    "Emergency Roadside Assistance": { ... },
    "Impound": { ... }
  },

  "towing": {
    "Local Towing": {
      "hookupFee": 75,              // ✅ CHOOSE: $65 or $75?
      "perMileRate": 8,
      "minimumMiles": 5,
      "discountEligible": true,
      "afterHoursEligible": true
    },
    "Long-Distance Towing": { ... }
  }
}
```

---

### **config/time_multipliers** Structure:
```json
{
  "enabled": true,
  "timezone": "America/Los_Angeles",
  "version": "1.0",
  "lastUpdated": "2025-10-23T...",

  "periods": [
    {
      "id": "standard",
      "name": "Standard Hours",
      "startTime": "07:00",
      "endTime": "17:00",
      "multiplier": 1.0,
      "daysOfWeek": [0,1,2,3,4,5,6],
      "description": "7 AM - 5 PM (Standard rate)",
      "badge": "Standard"
    },
    {
      "id": "evening",
      "name": "Evening Hours",
      "startTime": "17:00",
      "endTime": "20:00",
      "multiplier": 1.2,
      "daysOfWeek": [0,1,2,3,4,5,6],
      "description": "5 PM - 8 PM (20% surcharge)",
      "badge": "Evening +20%"
    },
    {
      "id": "night",
      "name": "Night Hours",
      "startTime": "20:00",
      "endTime": "23:00",
      "multiplier": 1.3,
      "daysOfWeek": [0,1,2,3,4,5,6],
      "description": "8 PM - 11 PM (30% surcharge)",
      "badge": "Night +30%"
    },
    {
      "id": "late_night",
      "name": "Late Night/Early Morning",
      "startTime": "23:00",
      "endTime": "07:00",
      "multiplier": 1.5,
      "daysOfWeek": [0,1,2,3,4,5,6],
      "description": "11 PM - 7 AM (50% surcharge)",
      "badge": "Late Night +50%"
    }
  ],

  "holidays": {
    "enabled": false,
    "multiplier": 1.5,
    "dates": []
  },

  "weekends": {
    "enabled": false,
    "multiplier": 1.0,
    "daysOfWeek": [0, 6]
  }
}
```

---

### **config/service_catalog** Structure:
```json
{
  "version": "1.0",
  "categories": {
    "towing": {
      "name": "Towing Services",
      "displayOrder": 1,
      "services": ["Local Towing", "Long-Distance Towing"]
    },
    "roadside": {
      "name": "Roadside Assistance",
      "displayOrder": 2,
      "services": ["Battery Jump Start", "Lockout Service", "Tire Change", "Fuel Delivery"]
    },
    "recovery": {
      "name": "Recovery Services",
      "displayOrder": 3,
      "services": ["Winch-Out / Recovery", "Collision Recovery"]
    }
  }
}
```

---

### **config/company** Structure:
```json
{
  "name": "CloseBy Towing",
  "phone": "(858) 999-9293",
  "email": "Closebytowing@gmail.com",
  "address": "10325 Caminito Cuervo, San Diego, CA 92108",
  "timezone": "America/Los_Angeles",
  "serviceArea": {
    "city": "San Diego",
    "state": "CA",
    "radius": 50
  },
  "hours": {
    "standard": "24/7",
    "emergency": true
  }
}
```

---

## 🎯 MIGRATION STEPS

### Phase 1: Fix Pricing Conflicts (CRITICAL)
1. ✅ Decide: Travel rate = $1.75 or $3?
2. ✅ Decide: Local towing hookup = $65 or $75?
3. Create `config/pricing` with correct values
4. Update website code to use `config/pricing`
5. Update dispatcher app to use `config/pricing`
6. Archive old `prices/`, `services/`, `settings/pricing`

### Phase 2: Add After-Hours Pricing
1. Create `config/time_multipliers`
2. Update pricing logic to apply multipliers
3. Add UI indicator for after-hours rates
4. Test all time periods

### Phase 3: Clean Up Jobs
1. Rename `live_jobs` → `jobs`
2. Archive completed jobs to `archived_jobs`
3. Standardize job schema
4. Add proper indexing

### Phase 4: Remove Legacy Data
1. Delete `settings/pricing` (moved to config)
2. Delete `services/` collection (moved to config/pricing)
3. Delete old `prices/` collection (moved to config/pricing)
4. Clean up migration metadata

---

## ❓ QUESTIONS TO ANSWER BEFORE PROCEEDING

1. **Travel Rate:** Is it $1.75/mile or $3/mile?
2. ~~**Local Towing Hookup:** Is it $65 or $75?~~ **RESOLVED 2026-08 → $75.**
   Local Towing ($75) and Long-Distance Towing ($65) were **collapsed into ONE `Towing`
   service** (Firestore id `towing`, name "Towing", **hookupFee $75**). Distance is a rate
   detail billed via Tow Miles / Travel Miles — it is not a separate service, and a longer
   tow must never have a *cheaper* hookup, so the $65 on long-distance was drift, not a
   decision. `/services/local-towing` and `/services/long-distance-towing` were deleted; the
   2 historical jobs referencing `local-towing` were backfilled to `towing` (price unchanged);
   every writer, seed, and pricing-config script now uses the single `Towing` @ $75. **The
   website `/long-distance-towing` marketing/SEO page is intentionally kept** — it just no
   longer maps to a separate catalog service.
3. **Dispatcher App:** Do you have a separate dispatcher app using the `services` collection?
4. **After-Hours:** Do you want to use the existing multipliers (1.4x evening, 2x overnight) or your new ones (1.2x, 1.3x, 1.5x)?
5. **Service Prices:** Should all roadside services be $88 base (before discount) or $75?
6. **Archive Strategy:** Should completed jobs older than X days be moved to `archived_jobs`?

---

## 🚀 RECOMMENDED IMMEDIATE ACTIONS

1. **STOP** - Don't add any more pricing until conflicts are resolved
2. **AUDIT** - Check which pricing source your dispatcher app uses
3. **DECIDE** - Choose correct values for conflicting prices
4. **UNIFY** - Create single `config/pricing` collection
5. **MIGRATE** - Move all apps to use `config/pricing`
6. **ADD** - Implement after-hours multipliers
7. **TEST** - Verify all pricing calculations are correct
8. **CLEANUP** - Remove duplicate/legacy collections

---

## 📝 NOTES

- Your `settings/pricing` already has after-hours multipliers that you're not using!
- You have both $1.75 and $3 travel rates in different places
- The `services` collection seems to be from a dispatcher app migration
- Jobs from "website" source have different schema than "dispatcher" jobs
- Invoice numbering is centralized in `settings/invoiceCounter` ✅ Good!

