// Analyze what data popup needs vs what's available in Firebase
import { adminDb } from '../src/lib/firebaseAdmin';

async function analyzePopupFirebaseIntegration() {
  console.log('\n');
  console.log('═'.repeat(80));
  console.log('📊 POPUP BOOKING SYSTEM vs FIREBASE ANALYSIS');
  console.log('═'.repeat(80));
  console.log('\n');

  // Get all Firebase configuration
  const [
    pricingDoc,
    timeMultipliersDoc,
    featuresDoc,
    serviceCatalogDoc,
    companyDoc,
    jobStatusesDoc,
    paymentStatusesDoc
  ] = await Promise.all([
    adminDb.collection('Price & Rate config').doc('pricing').get(),
    adminDb.collection('Price & Rate config').doc('time_multipliers').get(),
    adminDb.collection('Price & Rate config').doc('features').get(),
    adminDb.collection('Price & Rate config').doc('service_catalog').get(),
    adminDb.collection('Price & Rate config').doc('company').get(),
    adminDb.collection('statuses').doc('job_statuses').get(),
    adminDb.collection('statuses').doc('payment_statuses').get(),
  ]);

  console.log('1️⃣  PRICING DATA IN FIREBASE\n');
  console.log('────────────────────────────────────────────────────────────────────────────────');

  if (pricingDoc.exists) {
    const pricing = pricingDoc.data();
    console.log('\n📄 Price & Rate config/pricing:\n');
    console.log('   Base Pricing:');
    console.log(`      • Travel Rate: $${pricing?.base?.travelRate}/mile`);
    console.log(`      • Online Discount: ${(pricing?.base?.onlineDiscountRate || 0) * 100}%`);

    console.log('\n   Services Available:');
    if (pricing?.services) {
      Object.entries(pricing.services).forEach(([service, details]: [string, any]) => {
        console.log(`      • ${service}: $${details.basePrice}`);
      });
    }

    console.log('\n   Towing Services:');
    if (pricing?.towing) {
      Object.entries(pricing.towing).forEach(([service, details]: [string, any]) => {
        console.log(`      • ${service}:`);
        console.log(`         Hook-up: $${details.hookupFee}`);
        console.log(`         Per Mile: $${details.perMileRate}`);
        console.log(`         Minimum: ${details.minimumMiles} miles`);
      });
    }
  }

  console.log('\n\n2️⃣  TIME-BASED PRICING (AFTER-HOURS)\n');
  console.log('────────────────────────────────────────────────────────────────────────────────');

  if (timeMultipliersDoc.exists) {
    const timeMultipliers = timeMultipliersDoc.data();
    console.log(`\n   Status: ${timeMultipliers?.enabled ? '✅ ENABLED' : '❌ DISABLED'}`);
    console.log(`   Timezone: ${timeMultipliers?.timezone}`);

    if (timeMultipliers?.periods) {
      console.log('\n   Time Periods:');
      timeMultipliers.periods.forEach((period: any) => {
        console.log(`      • ${period.startTime} - ${period.endTime}: ${period.multiplier}x (${period.name})`);
      });
    }
  }

  console.log('\n\n3️⃣  FEATURE FLAGS\n');
  console.log('────────────────────────────────────────────────────────────────────────────────');

  if (featuresDoc.exists) {
    const features = featuresDoc.data();
    console.log('\n   Pricing Features:');
    console.log(`      • After-Hours Pricing: ${features?.pricing?.afterHoursPricing?.enabled ? '✅ ON' : '❌ OFF'}`);
    console.log(`      • Online Discount: ${features?.pricing?.onlineDiscount?.enabled ? '✅ ON' : '❌ OFF'}`);

    console.log('\n   Booking Features:');
    console.log(`      • Instant Booking: ${features?.booking?.instantBooking?.enabled ? '✅ ON' : '❌ OFF'}`);
    console.log(`      • Payment Required: ${features?.booking?.paymentRequired?.enabled ? '✅ ON' : '❌ OFF'}`);
  }

  console.log('\n\n4️⃣  SERVICE CATALOG\n');
  console.log('────────────────────────────────────────────────────────────────────────────────');

  if (serviceCatalogDoc.exists) {
    const catalog = serviceCatalogDoc.data();
    if (catalog?.categories) {
      Object.entries(catalog.categories).forEach(([category, data]: [string, any]) => {
        console.log(`\n   ${category}:`);
        console.log(`      Enabled: ${data.enabled ? '✅' : '❌'}`);
        if (data.services) {
          console.log('      Services:');
          data.services.forEach((service: any) => {
            console.log(`         • ${service.name} (${service.enabled ? '✅' : '❌'})`);
          });
        }
      });
    }
  }

  console.log('\n\n5️⃣  JOB STATUSES\n');
  console.log('────────────────────────────────────────────────────────────────────────────────');

  if (jobStatusesDoc.exists) {
    const jobStatuses = jobStatusesDoc.data();
    console.log('\n   Available Job Statuses:');
    if (jobStatuses?.statuses) {
      jobStatuses.statuses.forEach((status: any) => {
        console.log(`      • ${status.value} (${status.label})`);
      });
    }
  }

  console.log('\n\n6️⃣  WHAT POPUP CURRENTLY USES FROM FIREBASE\n');
  console.log('────────────────────────────────────────────────────────────────────────────────');

  console.log('\n   ✅ CURRENTLY USING:');
  console.log('      • Price & Rate config/pricing (base rates, service prices, towing prices)');
  console.log('      • Price & Rate config/time_multipliers (after-hours pricing)');
  console.log('      • Price & Rate config/features (feature flags for pricing)');
  console.log('      • Hardcoded collection path: "config/" (WRONG - should be "Price & Rate config/")');

  console.log('\n   ❌ NOT USING (but available):');
  console.log('      • Price & Rate config/service_catalog (service categories and enabled flags)');
  console.log('      • Price & Rate config/company (company info)');
  console.log('      • statuses/job_statuses (job workflow statuses)');
  console.log('      • statuses/payment_statuses (payment statuses)');

  console.log('\n\n7️⃣  WHAT POPUP CREATES IN FIREBASE\n');
  console.log('────────────────────────────────────────────────────────────────────────────────');

  console.log('\n   When user submits popup, creates document in live_jobs/:');
  console.log('      • customerName');
  console.log('      • customerPhone');
  console.log('      • pickupLocation');
  console.log('      • dropoffLocation (if towing)');
  console.log('      • vehicle (combined string)');
  console.log('      • service (service name)');
  console.log('      • status: "Pending Payment" (HARDCODED)');
  console.log('      • source: "website" (HARDCODED)');
  console.log('      • amountQuoted');
  console.log('      • createdAt (server timestamp)');

  console.log('\n\n8️⃣  ISSUES & RECOMMENDATIONS\n');
  console.log('────────────────────────────────────────────────────────────────────────────────');

  const issues = [];

  // Check collection path
  console.log('\n   🔴 CRITICAL ISSUES:\n');
  console.log('      1. Popup code uses "config/" collection path');
  console.log('         → Should use "Price & Rate config/" (renamed collection)');
  console.log('         → This will break pricing when code runs!\n');

  console.log('   🟡 POTENTIAL IMPROVEMENTS:\n');

  if (serviceCatalogDoc.exists) {
    console.log('      1. Service catalog exists but popup doesn\'t use it');
    console.log('         → Could filter/enable services dynamically from Firebase');
    console.log('         → Currently services are hardcoded in popup\n');
  }

  if (jobStatusesDoc.exists) {
    console.log('      2. Job statuses exist in Firebase');
    console.log('         → Popup hardcodes status as "Pending Payment"');
    console.log('         → Could validate status against Firebase statuses\n');
  }

  if (featuresDoc.exists) {
    const features = featuresDoc.data();
    if (features?.booking?.instantBooking) {
      console.log('      3. Feature flags exist for booking behavior');
      console.log('         → Popup could respect instantBooking flag');
      console.log('         → Popup could respect paymentRequired flag\n');
    }
  }

  console.log('\n\n9️⃣  RECOMMENDED PLAN\n');
  console.log('────────────────────────────────────────────────────────────────────────────────');

  console.log('\n   MUST FIX (Critical):');
  console.log('      ✓ Update pricing-client.ts to use "Price & Rate config/" instead of "config/"');

  console.log('\n   SHOULD IMPLEMENT (High Value):');
  console.log('      ✓ Use service_catalog to dynamically show/hide services in popup');
  console.log('      ✓ Validate job status against statuses/job_statuses');
  console.log('      ✓ Use feature flags to control booking behavior');

  console.log('\n   OPTIONAL (Nice to Have):');
  console.log('      • Use company info from Firebase for contact display');
  console.log('      • Add more metadata to job creation (IP, user agent, etc.)');
  console.log('      • Store breakdown details in job document\n');

  console.log('═'.repeat(80));
  console.log('✅ ANALYSIS COMPLETE');
  console.log('═'.repeat(80));
  console.log('\n');

  process.exit(0);
}

analyzePopupFirebaseIntegration().catch(console.error);
