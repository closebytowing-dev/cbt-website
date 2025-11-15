import { adminDb } from '../src/lib/firebaseAdmin.js';

async function enableAfterHours() {
  try {
    console.log('Enabling after-hours pricing...\n');

    // Update features document to enable after-hours pricing
    await adminDb.collection('Price & Rate config').doc('features').update({
      'pricing.afterHoursPricing.enabled': true,
      'lastUpdated': new Date().toISOString()
    });

    console.log('✅ After-hours pricing has been enabled!');
    console.log('\nTime periods that will be applied:');
    console.log('  • Standard Hours (7 AM - 5 PM): 1.0x (no surcharge)');
    console.log('  • Evening Hours (5 PM - 8 PM): 1.2x (+20% surcharge)');
    console.log('  • Night Hours (8 PM - 11 PM): 1.3x (+30% surcharge)');
    console.log('  • Late Night/Early Morning (11 PM - 7 AM): 1.5x (+50% surcharge)');
    console.log('\nEligible services:');
    console.log('  • Battery Jump Start');
    console.log('  • Collision Recovery');
    console.log('  • Emergency Roadside Assistance');
    console.log('  • Fuel Delivery');
    console.log('  • Local Towing');
    console.log('  • Lockout Service');
    console.log('  • Long-Distance Towing');
    console.log('  • Tire Change');
    console.log('  • Winch-Out / Recovery');

    process.exit(0);
  } catch (error) {
    console.error('Error enabling after-hours pricing:', error);
    process.exit(1);
  }
}

enableAfterHours();
