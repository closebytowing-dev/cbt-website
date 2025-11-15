// Test pricing calculation with new services/ structure
import { db } from '../src/lib/firebase';
import { collection, getDocs } from 'firebase/firestore';

async function testPricing() {
  console.log('\n');
  console.log('═'.repeat(80));
  console.log('🧪 TESTING PRICING WITH NEW SERVICES/ STRUCTURE');
  console.log('═'.repeat(80));
  console.log('\n');

  try {
    // Fetch all services
    console.log('📋 Fetching services from Firebase...\n');

    const servicesSnapshot = await getDocs(collection(db, 'services'));

    console.log(`   Found ${servicesSnapshot.size} services\n`);

    const services: Record<string, any> = {};

    servicesSnapshot.forEach(doc => {
      const data = doc.data();
      services[data.name] = {
        id: doc.id,
        ...data
      };
      console.log(`   ✅ ${data.name}`);
      console.log(`      Type: ${data.type}`);
      console.log(`      Base Price: $${data.basePrice || data.price || 'variable'}`);
      if (data.hookupFee) console.log(`      Hookup Fee: $${data.hookupFee}`);
      if (data.perMileRate) console.log(`      Per Mile: $${data.perMileRate}`);
      if (data.ratePerMile) console.log(`      Rate Per Mile: $${data.ratePerMile}`);
      console.log('');
    });

    // Test Local Towing calculation
    console.log('\n');
    console.log('═'.repeat(80));
    console.log('🧮 TESTING: Local Towing (13 miles)');
    console.log('═'.repeat(80));
    console.log('\n');

    const localTowing = services['Local Towing'];

    if (!localTowing) {
      console.log('   ❌ ERROR: Local Towing service not found!\n');
      console.log('   Available services:', Object.keys(services));
      return;
    }

    console.log('   Service Data:');
    console.log(`      Name: ${localTowing.name}`);
    console.log(`      Type: ${localTowing.type}`);
    console.log(`      Hookup Fee: $${localTowing.hookupFee}`);
    console.log(`      Per Mile Rate: $${localTowing.perMileRate}`);
    console.log(`      Minimum Miles: ${localTowing.minimumMiles}`);
    console.log('\n');

    const towMiles = 13;
    const billMiles = Math.max(localTowing.minimumMiles, towMiles);

    console.log('   Calculation:');
    console.log(`      Hookup: $${localTowing.hookupFee}`);
    console.log(`      Tow Miles: ${towMiles} mi (billing ${billMiles} mi)`);
    console.log(`      Tow Cost: ${billMiles} × $${localTowing.perMileRate} = $${billMiles * localTowing.perMileRate}`);
    console.log(`      Subtotal: $${localTowing.hookupFee + (billMiles * localTowing.perMileRate)}`);
    console.log('\n');

    // Test Travel Miles
    console.log('═'.repeat(80));
    console.log('🧮 TESTING: Travel Miles (12 miles)');
    console.log('═'.repeat(80));
    console.log('\n');

    const travelMiles = services['Travel Miles'];

    if (!travelMiles) {
      console.log('   ❌ ERROR: Travel Miles service not found!\n');
      return;
    }

    console.log('   Service Data:');
    console.log(`      Name: ${travelMiles.name}`);
    console.log(`      Rate Per Mile: $${travelMiles.ratePerMile}`);
    console.log('\n');

    const travelDistance = 12;
    console.log('   Calculation:');
    console.log(`      Distance: ${travelDistance} mi`);
    console.log(`      Travel Cost: ${travelDistance} × $${travelMiles.ratePerMile} = $${travelDistance * travelMiles.ratePerMile}`);
    console.log('\n');

    // Total
    const total = localTowing.hookupFee + (billMiles * localTowing.perMileRate) + (travelDistance * travelMiles.ratePerMile);

    console.log('═'.repeat(80));
    console.log('💰 TOTAL ESTIMATE');
    console.log('═'.repeat(80));
    console.log('\n');
    console.log(`   Local Towing (13 mi): $${localTowing.hookupFee + (billMiles * localTowing.perMileRate)}`);
    console.log(`   Travel (12 mi): $${travelDistance * travelMiles.ratePerMile}`);
    console.log(`   TOTAL: $${total}`);
    console.log('\n');
    console.log('═'.repeat(80));
    console.log('\n');

    process.exit(0);

  } catch (error) {
    console.error('\n❌ ERROR:', error);
    process.exit(1);
  }
}

testPricing().catch(console.error);
