// Complete Firebase database audit
import { adminDb } from '../src/lib/firebaseAdmin';

async function auditDatabase() {
  try {
    console.log('🔍 COMPLETE FIREBASE DATABASE AUDIT');
    console.log('═'.repeat(80));
    console.log('\n');

    const collections = await adminDb.listCollections();

    for (const collection of collections) {
      const snapshot = await collection.get();

      console.log(`\n📁 COLLECTION: ${collection.id.toUpperCase()}`);
      console.log('─'.repeat(80));
      console.log(`Total Documents: ${snapshot.size}\n`);

      for (const doc of snapshot.docs) {
        console.log(`  📄 Document ID: ${doc.id}`);
        const data = doc.data();

        // Pretty print the data with proper indentation
        console.log('  Data:');
        console.log(JSON.stringify(data, null, 4).split('\n').map(line => '    ' + line).join('\n'));
        console.log('');
      }

      console.log('─'.repeat(80));
      console.log('\n');
    }

    // Summary
    console.log('\n');
    console.log('📊 DATABASE SUMMARY');
    console.log('═'.repeat(80));
    for (const collection of collections) {
      const count = await collection.count().get();
      console.log(`  ${collection.id.padEnd(25)} → ${count.data().count} document(s)`);
    }
    console.log('\n');

    process.exit(0);
  } catch (error) {
    console.error('Error during audit:', error);
    process.exit(1);
  }
}

auditDatabase();
