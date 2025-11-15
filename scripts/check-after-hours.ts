import { adminDb } from '../src/lib/firebaseAdmin.js';

async function checkAfterHours() {
  try {
    console.log('Checking after-hours configuration...\n');

    // Get time_multipliers document
    const timeMultipliersDoc = await adminDb.collection('Price & Rate config').doc('time_multipliers').get();

    if (!timeMultipliersDoc.exists) {
      console.log('❌ time_multipliers document NOT FOUND');
      return;
    }

    const timeMultipliers = timeMultipliersDoc.data();
    console.log('✅ time_multipliers document found:');
    console.log(JSON.stringify(timeMultipliers, null, 2));
    console.log('\n');

    // Get features document
    const featuresDoc = await adminDb.collection('Price & Rate config').doc('features').get();

    if (!featuresDoc.exists) {
      console.log('❌ features document NOT FOUND');
      return;
    }

    const features = featuresDoc.data();
    console.log('✅ features document found:');
    console.log(JSON.stringify(features, null, 2));
    console.log('\n');

    // Check which services have afterHoursEligible flag
    const servicesSnapshot = await adminDb.collection('services').get();
    console.log('Services with afterHoursEligible flag:');

    servicesSnapshot.forEach(doc => {
      const data = doc.data();
      if (data.afterHoursEligible) {
        console.log(`  ✅ ${data.name} - afterHoursEligible: true`);
      }
    });

    process.exit(0);
  } catch (error) {
    console.error('Error:', error);
    process.exit(1);
  }
}

checkAfterHours();
