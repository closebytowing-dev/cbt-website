import { adminDb } from '../src/lib/firebaseAdmin.js';

async function showStructureForManager() {
  try {
    console.log('Reading Firebase Firestore Database Structure...\n');
    console.log('═══════════════════════════════════════════════════════════════');
    console.log('');

    // Get all collections
    const collections = await adminDb.listCollections();

    for (const collection of collections) {
      const collectionName = collection.id;

      // Get first document to understand structure
      const snapshot = await collection.limit(1).get();

      console.log(`/${collectionName}`);

      if (!snapshot.empty) {
        const doc = snapshot.docs[0];
        const data = doc.data();

        console.log(`  /{${collectionName}Id}`);

        // Show all fields with their types
        for (const [key, value] of Object.entries(data)) {
          let type = typeof value;

          if (value === null) {
            type = 'null';
          } else if (Array.isArray(value)) {
            type = 'array';
          } else if (value instanceof Date || (value && typeof value === 'object' && value._seconds !== undefined)) {
            type = 'timestamp';
          } else if (typeof value === 'object') {
            type = 'object';
            // Show nested object structure
            console.log(`    - ${key}: object`);
            if (value && Object.keys(value).length > 0) {
              for (const [nestedKey, nestedValue] of Object.entries(value)) {
                let nestedType = typeof nestedValue;
                if (nestedValue === null) nestedType = 'null';
                else if (Array.isArray(nestedValue)) nestedType = 'array';
                else if (nestedValue instanceof Date || (nestedValue && typeof nestedValue === 'object' && (nestedValue as any)._seconds !== undefined)) nestedType = 'timestamp';
                else if (typeof nestedValue === 'object') nestedType = 'object';

                console.log(`        - ${nestedKey}: ${nestedType}`);
              }
            }
            continue; // Skip the normal output since we already printed it
          }

          console.log(`    - ${key}: ${type}`);
        }
      } else {
        console.log(`  (empty collection)`);
      }

      console.log('');
    }

    console.log('═══════════════════════════════════════════════════════════════');
    console.log('\nNote: This is Firestore (NoSQL Document Database), not Realtime Database');
    console.log('Each collection contains documents with the structure shown above.');

    process.exit(0);
  } catch (error) {
    console.error('Error:', error);
    process.exit(1);
  }
}

showStructureForManager();
