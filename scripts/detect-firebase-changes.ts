// Detect all changes made to Firebase database
import { adminDb } from '../src/lib/firebaseAdmin';

async function detectFirebaseChanges() {
  console.log('\n');
  console.log('═'.repeat(80));
  console.log('🔍 SCANNING FIREBASE FOR CHANGES');
  console.log('═'.repeat(80));
  console.log('\n');

  const collections = await adminDb.listCollections();

  console.log(`📊 Total Collections: ${collections.length}\n`);

  for (const collection of collections) {
    console.log('\n' + '═'.repeat(80));
    console.log(`📁 COLLECTION: ${collection.id}`);
    console.log('═'.repeat(80));

    const snapshot = await collection.get();
    console.log(`   Documents: ${snapshot.size}\n`);

    for (const doc of snapshot.docs) {
      const data = doc.data();

      console.log(`\n   📄 ${collection.id}/${doc.id}`);
      console.log('   ' + '─'.repeat(76));

      // Show all fields and their values
      const fields = Object.keys(data);

      fields.forEach(field => {
        const value = data[field];

        if (value === null || value === undefined) {
          console.log(`      ${field}: ${value}`);
        } else if (typeof value === 'object' && !Array.isArray(value)) {
          // Object - show nested
          console.log(`      ${field}:`);
          const subFields = Object.keys(value);
          subFields.forEach(subField => {
            const subValue = value[subField];
            if (typeof subValue === 'object' && !Array.isArray(subValue)) {
              console.log(`         ${subField}: [Object]`);
            } else if (Array.isArray(subValue)) {
              console.log(`         ${subField}: [Array with ${subValue.length} items]`);
            } else {
              const displayValue = String(subValue).length > 50
                ? String(subValue).substring(0, 47) + '...'
                : subValue;
              console.log(`         ${subField}: ${displayValue}`);
            }
          });
        } else if (Array.isArray(value)) {
          console.log(`      ${field}: [Array with ${value.length} items]`);

          // Show array items if they're objects
          if (value.length > 0 && typeof value[0] === 'object') {
            value.forEach((item, idx) => {
              if (idx < 5) { // Show first 5 items
                console.log(`         [${idx}]:`);
                const itemKeys = Object.keys(item);
                itemKeys.forEach(key => {
                  const displayValue = String(item[key]).length > 40
                    ? String(item[key]).substring(0, 37) + '...'
                    : item[key];
                  console.log(`            ${key}: ${displayValue}`);
                });
              }
            });
            if (value.length > 5) {
              console.log(`         ... and ${value.length - 5} more items`);
            }
          } else {
            // Simple array, show values
            value.slice(0, 5).forEach((item, idx) => {
              console.log(`         [${idx}]: ${item}`);
            });
            if (value.length > 5) {
              console.log(`         ... and ${value.length - 5} more items`);
            }
          }
        } else {
          const displayValue = String(value).length > 60
            ? String(value).substring(0, 57) + '...'
            : value;
          console.log(`      ${field}: ${displayValue}`);
        }
      });
    }

    console.log('\n');
  }

  console.log('\n');
  console.log('═'.repeat(80));
  console.log('🔎 LOOKING FOR RECENT CHANGES...');
  console.log('═'.repeat(80));
  console.log('\n');

  // Check for documents with recent timestamps
  const now = new Date();
  const oneHourAgo = new Date(now.getTime() - 60 * 60 * 1000);

  for (const collection of collections) {
    const snapshot = await collection.get();

    for (const doc of snapshot.docs) {
      const data = doc.data();

      // Check various timestamp fields
      const timestampFields = ['updatedAt', 'lastUpdated', 'createdAt', 'modifiedAt'];

      for (const field of timestampFields) {
        if (data[field]) {
          let timestamp: Date | null = null;

          // Handle different timestamp formats
          if (data[field]._seconds) {
            // Firestore Timestamp
            timestamp = new Date(data[field]._seconds * 1000);
          } else if (typeof data[field] === 'string') {
            // ISO string
            timestamp = new Date(data[field]);
          } else if (data[field] instanceof Date) {
            timestamp = data[field];
          }

          if (timestamp && timestamp > oneHourAgo) {
            console.log(`   🆕 RECENT CHANGE: ${collection.id}/${doc.id}`);
            console.log(`      Field: ${field}`);
            console.log(`      Timestamp: ${timestamp.toISOString()}`);
            console.log(`      Time ago: ${Math.round((now.getTime() - timestamp.getTime()) / 60000)} minutes ago\n`);
          }
        }
      }
    }
  }

  console.log('\n');
  console.log('═'.repeat(80));
  console.log('✅ SCAN COMPLETE');
  console.log('═'.repeat(80));
  console.log('\n');

  process.exit(0);
}

detectFirebaseChanges().catch(console.error);
