// Script to list all Firestore collections
import { adminDb } from '../src/lib/firebaseAdmin';

async function listCollections() {
  try {
    console.log('Fetching all collections from Firestore...\n');

    const collections = await adminDb.listCollections();

    console.log(`Found ${collections.length} collection(s):\n`);

    for (const collection of collections) {
      console.log(`📁 Collection: ${collection.id}`);

      // Get document count for each collection
      const snapshot = await collection.count().get();
      console.log(`   Documents: ${snapshot.data().count}`);

      // Get a few sample document IDs
      const docs = await collection.limit(5).get();
      if (!docs.empty) {
        console.log(`   Sample document IDs:`);
        docs.forEach(doc => {
          console.log(`     - ${doc.id}`);
        });
      }
      console.log('');
    }

    process.exit(0);
  } catch (error) {
    console.error('Error listing collections:', error);
    process.exit(1);
  }
}

listCollections();
