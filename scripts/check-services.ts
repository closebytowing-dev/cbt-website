// scripts/check-services.ts
import { adminDb } from "../src/lib/firebaseAdmin";

async function checkServices() {
  try {
    const snapshot = await adminDb.collection('services').get();

    console.log('═══════════════════════════════════════════════════════');
    console.log('SERVICES IN FIREBASE');
    console.log('═══════════════════════════════════════════════════════\n');

    snapshot.forEach(doc => {
      const data = doc.data();
      console.log(`Document ID: ${doc.id}`);
      console.log(`  name: "${data.name}"`);
      console.log(`  label: "${data.label}"`);
      console.log(`  type: ${data.type}`);
      console.log(`  basePrice: ${data.basePrice}`);
      console.log('');
    });

    console.log('═══════════════════════════════════════════════════════');
    console.log(`Total services: ${snapshot.size}`);
  } catch (error: any) {
    console.error('Error:', error.message);
  }
}

checkServices();
