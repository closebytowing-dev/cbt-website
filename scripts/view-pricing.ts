// Script to view current pricing structure
import { adminDb } from '../src/lib/firebaseAdmin';

async function viewPricing() {
  try {
    console.log('Fetching current pricing from Firestore...\n');

    const pricesRef = adminDb.collection('prices');
    const snapshot = await pricesRef.get();

    snapshot.forEach(doc => {
      console.log(`\n📄 Document: ${doc.id}`);
      console.log('─'.repeat(50));
      console.log(JSON.stringify(doc.data(), null, 2));
      console.log('─'.repeat(50));
    });

    process.exit(0);
  } catch (error) {
    console.error('Error fetching pricing:', error);
    process.exit(1);
  }
}

viewPricing();
