// Find all pricing and rates data in Firebase
import { adminDb } from '../src/lib/firebaseAdmin';

async function findPricingAndRates() {
  console.log('🔍 SEARCHING FOR ALL PRICING AND RATES IN FIREBASE\n');
  console.log('═'.repeat(80));
  console.log('\n');

  const collections = await adminDb.listCollections();
  let foundCount = 0;

  for (const collection of collections) {
    const snapshot = await collection.get();

    for (const doc of snapshot.docs) {
      const data = doc.data();

      // Check if document contains pricing or rates data
      const hasPricing =
        doc.id.includes('pricing') ||
        doc.id.includes('rates') ||
        data.basePrice !== undefined ||
        data.travelRate !== undefined ||
        data.onlineDiscountRate !== undefined ||
        data.perMileRate !== undefined ||
        data.hookupFee !== undefined ||
        data.price !== undefined;

      if (hasPricing) {
        foundCount++;
        console.log('📍 FOUND: ' + collection.id + '/' + doc.id);

        // Show relevant pricing fields
        if (data.travelRate !== undefined) {
          console.log('   → travelRate: $' + data.travelRate);
        }
        if (data.onlineDiscountRate !== undefined) {
          console.log('   → onlineDiscountRate: ' + (data.onlineDiscountRate * 100) + '%');
        }
        if (data.basePrice !== undefined) {
          console.log('   → basePrice: $' + data.basePrice);
        }
        if (data.price !== undefined) {
          console.log('   → price: $' + data.price);
        }
        if (data.hookupFee !== undefined) {
          console.log('   → hookupFee: $' + data.hookupFee);
        }
        if (data.perMileRate !== undefined) {
          console.log('   → perMileRate: $' + data.perMileRate);
        }
        if (data.ratePerMile !== undefined) {
          console.log('   → ratePerMile: $' + data.ratePerMile);
        }

        // Check if it has nested pricing data
        if (data.base && (data.base.travelRate || data.base.onlineDiscountRate)) {
          console.log('   → base.travelRate: $' + data.base.travelRate);
          console.log('   → base.onlineDiscountRate: ' + (data.base.onlineDiscountRate * 100) + '%');
        }
        if (data.services && typeof data.services === 'object') {
          console.log('   → services: ' + Object.keys(data.services).length + ' services with pricing');
        }
        if (data.towing && typeof data.towing === 'object') {
          console.log('   → towing: ' + Object.keys(data.towing).length + ' towing types with pricing');
        }

        console.log('');
      }
    }
  }

  console.log('═'.repeat(80));
  console.log('📊 TOTAL: Found ' + foundCount + ' documents with pricing/rates data');
  console.log('═'.repeat(80));
  console.log('\n');

  process.exit(0);
}

findPricingAndRates().catch(console.error);
