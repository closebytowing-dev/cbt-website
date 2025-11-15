// Delete old pricing collections and rename config
import { adminDb } from '../src/lib/firebaseAdmin';

async function cleanupAndRename() {
  console.log('🗑️  STEP 1: Deleting old pricing collections...\n');
  console.log('═'.repeat(80));

  // Delete prices/ collection
  console.log('\n📁 Deleting prices/...');
  const pricesSnapshot = await adminDb.collection('prices').get();
  for (const doc of pricesSnapshot.docs) {
    await doc.ref.delete();
    console.log('   ✅ Deleted prices/' + doc.id);
  }

  // Delete services/ collection
  console.log('\n📁 Deleting services/...');
  const servicesSnapshot = await adminDb.collection('services').get();
  for (const doc of servicesSnapshot.docs) {
    await doc.ref.delete();
    console.log('   ✅ Deleted services/' + doc.id);
  }

  // Delete settings/pricing document
  console.log('\n📁 Deleting settings/pricing...');
  await adminDb.collection('settings').doc('pricing').delete();
  console.log('   ✅ Deleted settings/pricing');

  console.log('\n');
  console.log('═'.repeat(80));
  console.log('📝 STEP 2: Renaming config/ to "Price & Rate config"/...\n');
  console.log('═'.repeat(80));

  // Copy all documents from config/ to "Price & Rate config/"
  const configSnapshot = await adminDb.collection('config').get();

  console.log('\n📁 Copying to new collection...');
  for (const doc of configSnapshot.docs) {
    const data = doc.data();
    await adminDb.collection('Price & Rate config').doc(doc.id).set(data);
    console.log('   ✅ Copied to Price & Rate config/' + doc.id);
  }

  // Delete old config/ collection
  console.log('\n📁 Deleting old config/...');
  for (const doc of configSnapshot.docs) {
    await doc.ref.delete();
    console.log('   ✅ Deleted config/' + doc.id);
  }

  console.log('\n');
  console.log('═'.repeat(80));
  console.log('✅ COMPLETE!');
  console.log('═'.repeat(80));
  console.log('\nOLD collections deleted:');
  console.log('   ❌ prices/');
  console.log('   ❌ services/');
  console.log('   ❌ settings/pricing');
  console.log('   ❌ config/');
  console.log('\nNEW collection created:');
  console.log('   ✅ Price & Rate config/');
  console.log('      ├─ company');
  console.log('      ├─ features');
  console.log('      ├─ pricing');
  console.log('      ├─ service_catalog');
  console.log('      └─ time_multipliers');
  console.log('\n');

  process.exit(0);
}

cleanupAndRename().catch(console.error);
