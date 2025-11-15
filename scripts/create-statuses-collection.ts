// Move statuses to dedicated collection - Do it right, do it once
import { adminDb } from '../src/lib/firebaseAdmin';

async function createStatusesCollection() {
  console.log('\n');
  console.log('═'.repeat(80));
  console.log('🎯 CREATING DEDICATED STATUSES COLLECTION');
  console.log('═'.repeat(80));
  console.log('\n');

  try {
    // Step 1: Read existing status documents from settings/
    console.log('📖 STEP 1: Reading existing status documents from settings/...\n');

    const jobStatusesDoc = await adminDb.collection('settings').doc('job_statuses').get();
    const paymentStatusesDoc = await adminDb.collection('settings').doc('payment_statuses').get();

    if (!jobStatusesDoc.exists) {
      throw new Error('settings/job_statuses document not found!');
    }

    if (!paymentStatusesDoc.exists) {
      throw new Error('settings/payment_statuses document not found!');
    }

    const jobStatusesData = jobStatusesDoc.data();
    const paymentStatusesData = paymentStatusesDoc.data();

    console.log('   ✅ Read settings/job_statuses');
    console.log('   ✅ Read settings/payment_statuses\n');

    // Step 2: Create new statuses/ collection with improved structure
    console.log('📝 STEP 2: Creating new statuses/ collection...\n');

    // Create job_statuses document in statuses/ collection
    await adminDb.collection('statuses').doc('job_statuses').set({
      version: '1.0',
      description: 'Job workflow statuses used by driver and dispatcher apps',
      lastUpdated: new Date().toISOString(),
      statuses: jobStatusesData?.statuses || []
    });

    console.log('   ✅ Created statuses/job_statuses');

    // Create payment_statuses document in statuses/ collection
    await adminDb.collection('statuses').doc('payment_statuses').set({
      version: '1.0',
      description: 'Payment statuses for job billing',
      lastUpdated: new Date().toISOString(),
      statuses: paymentStatusesData?.statuses || []
    });

    console.log('   ✅ Created statuses/payment_statuses\n');

    // Step 3: Verify new collection
    console.log('🔍 STEP 3: Verifying new statuses/ collection...\n');

    const statusesSnapshot = await adminDb.collection('statuses').get();

    console.log(`   📊 Total documents in statuses/: ${statusesSnapshot.size}\n`);

    statusesSnapshot.docs.forEach(doc => {
      const data = doc.data();
      console.log(`   📄 statuses/${doc.id}`);
      console.log(`      Version: ${data.version}`);
      console.log(`      Description: ${data.description}`);
      console.log(`      Statuses count: ${data.statuses?.length || 0}`);
      console.log('');
    });

    // Step 4: Delete old status documents from settings/
    console.log('🗑️  STEP 4: Deleting old status documents from settings/...\n');

    await adminDb.collection('settings').doc('job_statuses').delete();
    console.log('   ✅ Deleted settings/job_statuses');

    await adminDb.collection('settings').doc('payment_statuses').delete();
    console.log('   ✅ Deleted settings/payment_statuses\n');

    // Step 5: Verify settings/ now only has operational settings
    console.log('🔍 STEP 5: Verifying settings/ collection...\n');

    const settingsSnapshot = await adminDb.collection('settings').get();

    console.log(`   📊 Remaining documents in settings/: ${settingsSnapshot.size}\n`);

    settingsSnapshot.docs.forEach(doc => {
      console.log(`   📄 settings/${doc.id}`);
    });

    console.log('\n');

    // Step 6: Show final structure
    console.log('═'.repeat(80));
    console.log('✅ FINAL DATABASE STRUCTURE');
    console.log('═'.repeat(80));
    console.log('\n');

    console.log('📁 statuses/                    ← NEW: Status configurations');
    console.log('   ├── job_statuses             ← Job workflow statuses (Dispatched, Enroute, etc.)');
    console.log('   └── payment_statuses         ← Payment statuses (paid, unpaid, etc.)\n');

    console.log('📁 settings/                    ← System operational settings');
    console.log('   ├── invoiceCounter           ← Invoice numbering');
    console.log('   └── locations                ← Office locations\n');

    console.log('📁 Price & Rate config/         ← Business pricing rules');
    console.log('   ├── company');
    console.log('   ├── features');
    console.log('   ├── pricing');
    console.log('   ├── service_catalog');
    console.log('   └── time_multipliers\n');

    console.log('📁 live_jobs/                   ← Job records');
    console.log('📁 drivers/                     ← Driver records');
    console.log('📁 partners/                    ← Partner records');
    console.log('📁 partner_payments/            ← Partner payments');
    console.log('📁 users/                       ← User accounts\n');

    console.log('═'.repeat(80));
    console.log('🎉 SUCCESS: Statuses moved to dedicated collection!');
    console.log('═'.repeat(80));
    console.log('\n');

    console.log('📋 PERFECT SEPARATION OF CONCERNS:\n');
    console.log('   • Price & Rate config/  = Business pricing & service rules');
    console.log('   • statuses/             = Workflow & payment state options');
    console.log('   • settings/             = System operational settings\n');

    console.log('═'.repeat(80));
    console.log('\n');

    process.exit(0);

  } catch (error) {
    console.error('\n❌ ERROR:', error);
    process.exit(1);
  }
}

createStatusesCollection().catch(console.error);
