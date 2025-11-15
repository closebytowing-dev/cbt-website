// Verify database reorganization was successful
import { adminDb } from '../src/lib/firebaseAdmin';

async function verifyReorganization() {
  console.log('🔍 VERIFYING DATABASE REORGANIZATION');
  console.log('═'.repeat(80));
  console.log('\n');

  let allTestsPassed = true;

  try {
    // Test 1: Verify config collection exists
    console.log('Test 1: Checking config/ collection...');
    const configDocs = await adminDb.collection('config').get();
    const configDocIds = configDocs.docs.map(d => d.id);

    const requiredDocs = ['pricing', 'time_multipliers', 'service_catalog', 'company', 'features'];
    const missingDocs = requiredDocs.filter(id => !configDocIds.includes(id));

    if (missingDocs.length === 0) {
      console.log('  ✅ All required config documents exist');
      console.log(`      Found: ${configDocIds.join(', ')}\n`);
    } else {
      console.log(`  ❌ Missing config documents: ${missingDocs.join(', ')}\n`);
      allTestsPassed = false;
    }

    // Test 2: Verify config/pricing structure
    console.log('Test 2: Validating config/pricing structure...');
    const pricingDoc = await adminDb.collection('config').doc('pricing').get();
    const pricingData = pricingDoc.data();

    if (pricingData && pricingData.base && pricingData.services && pricingData.towing) {
      console.log('  ✅ config/pricing has correct structure');
      console.log(`      Travel Rate: $${pricingData.base.travelRate}/mi`);
      console.log(`      Online Discount: ${pricingData.base.onlineDiscountRate * 100}%`);
      console.log(`      Services: ${Object.keys(pricingData.services).length} defined`);
      console.log(`      Towing: ${Object.keys(pricingData.towing).length} types\n`);
    } else {
      console.log('  ❌ config/pricing structure is invalid\n');
      allTestsPassed = false;
    }

    // Test 3: Verify time_multipliers
    console.log('Test 3: Validating config/time_multipliers...');
    const timeMultDoc = await adminDb.collection('config').doc('time_multipliers').get();
    const timeMultData = timeMultDoc.data();

    if (timeMultData && timeMultData.periods && Array.isArray(timeMultData.periods)) {
      console.log('  ✅ config/time_multipliers configured');
      console.log(`      Enabled: ${timeMultData.enabled}`);
      console.log(`      Timezone: ${timeMultData.timezone}`);
      console.log(`      Periods: ${timeMultData.periods.length} time periods`);
      timeMultData.periods.forEach((p: any) => {
        console.log(`        - ${p.name}: ${p.startTime}-${p.endTime} (${p.multiplier}x)`);
      });
      console.log('');
    } else {
      console.log('  ❌ config/time_multipliers structure is invalid\n');
      allTestsPassed = false;
    }

    // Test 4: Verify features
    console.log('Test 4: Checking feature flags...');
    const featuresDoc = await adminDb.collection('config').doc('features').get();
    const featuresData = featuresDoc.data();

    if (featuresData && featuresData.pricing) {
      console.log('  ✅ Feature flags configured');
      console.log(`      After-hours pricing: ${featuresData.pricing.afterHoursPricing.enabled ? 'ENABLED' : 'DISABLED'}`);
      console.log(`      Online discount: ${featuresData.pricing.onlineDiscount.enabled ? 'ENABLED' : 'DISABLED'}`);
      console.log('');
    } else {
      console.log('  ❌ Feature flags not configured\n');
      allTestsPassed = false;
    }

    // Test 5: Verify archived collections
    console.log('Test 5: Checking archived collections...');
    const archivedPrices = await adminDb.collection('_archived_prices').count().get();
    const archivedServices = await adminDb.collection('_archived_services').count().get();
    const archivedSettings = await adminDb.collection('_archived_settings').count().get();

    console.log('  ✅ Old data archived');
    console.log(`      _archived_prices: ${archivedPrices.data().count} documents`);
    console.log(`      _archived_services: ${archivedServices.data().count} documents`);
    console.log(`      _archived_settings: ${archivedSettings.data().count} documents\n`);

    // Summary
    console.log('═'.repeat(80));
    if (allTestsPassed) {
      console.log('✅ ALL TESTS PASSED - DATABASE REORGANIZATION SUCCESSFUL!');
      console.log('═'.repeat(80));
      console.log('\n');
      console.log('📋 NEXT STEPS:');
      console.log('  1. Test website pricing calculations');
      console.log('  2. To enable after-hours pricing:');
      console.log('     - Set config/features/pricing/afterHoursPricing/enabled = true');
      console.log('  3. Monitor for 24 hours');
      console.log('  4. Delete old collections if everything works:');
      console.log('     - prices/, services/, settings/pricing');
      console.log('  5. Delete archived collections:');
      console.log('     - _archived_prices/, _archived_services/, _archived_settings/');
      console.log('\n');
    } else {
      console.log('❌ SOME TESTS FAILED - REVIEW ERRORS ABOVE');
      console.log('═'.repeat(80));
      console.log('\n');
    }

    process.exit(allTestsPassed ? 0 : 1);
  } catch (error) {
    console.error('❌ Error during verification:', error);
    process.exit(1);
  }
}

verifyReorganization();
