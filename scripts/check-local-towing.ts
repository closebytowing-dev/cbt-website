// scripts/check-local-towing.ts
import { adminDb } from "../src/lib/firebaseAdmin";

async function checkLocalTowing() {
  try {
    const doc = await adminDb.collection('services').doc('local-towing').get();

    if (!doc.exists) {
      console.log('❌ local-towing document does not exist!');
      return;
    }

    console.log('═══════════════════════════════════════════════════════');
    console.log('LOCAL TOWING SERVICE - COMPLETE STRUCTURE');
    console.log('═══════════════════════════════════════════════════════\n');

    const data = doc.data();
    console.log(JSON.stringify(data, null, 2));

    console.log('\n═══════════════════════════════════════════════════════');
    console.log('REQUIRED FIELDS FOR TOWING:');
    console.log('═══════════════════════════════════════════════════════');
    console.log(`✓ name: ${data?.name}`);
    console.log(`✓ type: ${data?.type}`);
    console.log(`${data?.hookupFee ? '✓' : '❌'} hookupFee: ${data?.hookupFee}`);
    console.log(`${data?.perMileRate ? '✓' : '❌'} perMileRate: ${data?.perMileRate}`);
    console.log(`${data?.minimumMiles ? '✓' : '❌'} minimumMiles: ${data?.minimumMiles}`);

  } catch (error: any) {
    console.error('Error:', error.message);
  }
}

checkLocalTowing();
