// Show current Firebase database structure in clear, simple format
import { adminDb } from '../src/lib/firebaseAdmin';

async function showDatabase() {
  console.log('\n');
  console.log('═'.repeat(80));
  console.log('📊 YOUR CURRENT FIREBASE DATABASE - SIMPLE VIEW');
  console.log('═'.repeat(80));
  console.log('\n');

  try {
    const collections = await adminDb.listCollections();

    for (const collection of collections) {
      const docs = await collection.get();

      console.log(`\n📁 Collection: ${collection.id}`);
      console.log('─'.repeat(80));
      console.log(`   Total documents: ${docs.size}`);

      if (docs.size > 0) {
        console.log('   Documents:');
        for (const doc of docs.docs) {
          console.log(`      • ${doc.id}`);
        }
      }
      console.log('');
    }

    console.log('\n═'.repeat(80));
    console.log('🔍 LET\'S FOCUS ON THE IMPORTANT ONES');
    console.log('═'.repeat(80));
    console.log('\n');

    // Show config collection in detail
    console.log('1️⃣  NEW "config" COLLECTION (This is what I created):');
    console.log('─'.repeat(80));
    const configDocs = await adminDb.collection('config').get();
    for (const doc of configDocs.docs) {
      console.log(`   📄 ${doc.id}`);
    }
    console.log('');

    // Show old collections
    console.log('2️⃣  OLD "prices" COLLECTION (Original - still exists):');
    console.log('─'.repeat(80));
    const pricesDocs = await adminDb.collection('prices').get();
    for (const doc of pricesDocs.docs) {
      console.log(`   📄 ${doc.id}`);
    }
    console.log('');

    console.log('3️⃣  OLD "services" COLLECTION (Original - still exists):');
    console.log('─'.repeat(80));
    const servicesDocs = await adminDb.collection('services').get();
    console.log(`   Total: ${servicesDocs.size} documents`);
    console.log('');

    console.log('4️⃣  ARCHIVED COLLECTIONS (Backups I created):');
    console.log('─'.repeat(80));
    console.log('   📦 _archived_prices (backup of prices)');
    console.log('   📦 _archived_services (backup of services)');
    console.log('   📦 _archived_settings (backup of settings/pricing)');
    console.log('');

    console.log('\n═'.repeat(80));
    console.log('❓ WHICH COLLECTIONS ARE BEING USED BY THE WEBSITE?');
    console.log('═'.repeat(80));
    console.log('\n');
    console.log('   ✅ CURRENTLY ACTIVE: config/');
    console.log('      └─ The website code reads from here NOW');
    console.log('');
    console.log('   ⏸️  NOT USED: prices/, services/');
    console.log('      └─ Old collections, still exist but website doesn\'t use them');
    console.log('');
    console.log('   📦 NOT USED: _archived_*');
    console.log('      └─ Just backups for safety');
    console.log('');

    process.exit(0);
  } catch (error) {
    console.error('Error:', error);
    process.exit(1);
  }
}

showDatabase();
