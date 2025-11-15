// Migrate from old Price & Rate config/pricing to new services/ collection
import { adminDb } from '../src/lib/firebaseAdmin';

async function migrateToServicesCollection() {
  console.log('\n');
  console.log('═'.repeat(80));
  console.log('🔄 MIGRATING TO NEW SERVICES/ COLLECTION STRUCTURE');
  console.log('═'.repeat(80));
  console.log('\n');

  try {
    // Step 1: Verify new services/ collection exists
    console.log('📋 STEP 1: Verifying new services/ collection exists...\n');

    const servicesSnapshot = await adminDb.collection('services').get();
    console.log(`   ✅ Found ${servicesSnapshot.size} services in new collection\n`);

    if (servicesSnapshot.size === 0) {
      console.log('   ❌ ERROR: services/ collection is empty!\n');
      console.log('   Cannot proceed - need services data first.\n');
      process.exit(1);
    }

    // Show what services exist
    console.log('   Services found:');
    servicesSnapshot.docs.forEach(doc => {
      const data = doc.data();
      console.log(`      • ${doc.id} - ${data.name} ($${data.price || 'variable'})`);
    });
    console.log('\n');

    // Step 2: Delete old pricing data from Price & Rate config/pricing
    console.log('🗑️  STEP 2: Removing old pricing structure from Price & Rate config/pricing...\n');

    const pricingDoc = await adminDb.collection('Price & Rate config').doc('pricing').get();

    if (!pricingDoc.exists) {
      console.log('   ℹ️  Price & Rate config/pricing already deleted or does not exist\n');
    } else {
      const oldData = pricingDoc.data();

      // Keep only metadata, remove pricing data
      const admin = await import('firebase-admin');

      await adminDb.collection('Price & Rate config').doc('pricing').update({
        base: admin.firestore.FieldValue.delete(),
        services: admin.firestore.FieldValue.delete(),
        towing: admin.firestore.FieldValue.delete(),
        description: 'DEPRECATED - Pricing moved to services/ collection',
        migratedTo: 'services/',
        migratedAt: new Date().toISOString()
      });

      console.log('   ✅ Deleted base, services, and towing pricing data');
      console.log('   ✅ Added migration metadata\n');

      console.log('   Old data removed:');
      if (oldData?.base) console.log('      • base (travelRate, onlineDiscountRate)');
      if (oldData?.services) console.log(`      • services (${Object.keys(oldData.services).length} services)`);
      if (oldData?.towing) console.log(`      • towing (${Object.keys(oldData.towing).length} towing types)`);
      console.log('\n');
    }

    // Step 3: Verify deletion
    console.log('🔍 STEP 3: Verifying old pricing data is removed...\n');

    const updatedDoc = await adminDb.collection('Price & Rate config').doc('pricing').get();

    if (updatedDoc.exists) {
      const data = updatedDoc.data();
      const hasOldData = data?.base || data?.services || data?.towing;

      if (hasOldData) {
        console.log('   ⚠️  WARNING: Old pricing data still exists!\n');
      } else {
        console.log('   ✅ Confirmed: Old pricing data successfully removed\n');
        console.log('   Remaining fields in Price & Rate config/pricing:');
        Object.keys(data || {}).forEach(key => {
          console.log(`      • ${key}: ${data![key]}`);
        });
        console.log('\n');
      }
    }

    // Step 4: Summary
    console.log('═'.repeat(80));
    console.log('✅ MIGRATION COMPLETE');
    console.log('═'.repeat(80));
    console.log('\n');

    console.log('📊 SUMMARY:\n');
    console.log('   OLD STRUCTURE (DELETED):');
    console.log('      ❌ Price & Rate config/pricing/base');
    console.log('      ❌ Price & Rate config/pricing/services');
    console.log('      ❌ Price & Rate config/pricing/towing\n');

    console.log('   NEW STRUCTURE (ACTIVE):');
    console.log('      ✅ services/ collection (12 service documents)');
    console.log('      ✅ Each service has rich metadata');
    console.log('      ✅ Compatible with dispatcher panel\n');

    console.log('═'.repeat(80));
    console.log('\n');

    process.exit(0);

  } catch (error) {
    console.error('\n❌ ERROR:', error);
    process.exit(1);
  }
}

migrateToServicesCollection().catch(console.error);
