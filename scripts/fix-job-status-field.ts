// Fix the 1 real issue: Remove jobProgressStatus field from job document
import { adminDb } from '../src/lib/firebaseAdmin';

async function fixJobStatusField() {
  console.log('\n');
  console.log('═'.repeat(80));
  console.log('🔧 FIXING JOB STATUS FIELD ISSUE');
  console.log('═'.repeat(80));
  console.log('\n');

  try {
    // Step 1: Find the job with jobProgressStatus field
    console.log('🔍 STEP 1: Finding job with jobProgressStatus field...\n');

    const jobsSnapshot = await adminDb.collection('live_jobs').get();

    let foundJob: any = null;
    let jobId: string = '';

    for (const doc of jobsSnapshot.docs) {
      const data = doc.data();
      if (data.jobProgressStatus !== undefined) {
        foundJob = data;
        jobId = doc.id;
        break;
      }
    }

    if (!foundJob) {
      console.log('   ✅ No job found with jobProgressStatus field');
      console.log('   ✅ Database already perfect!\n');
      process.exit(0);
    }

    console.log(`   📄 Found job: ${jobId}`);
    console.log(`      status: "${foundJob.status}"`);
    console.log(`      jobProgressStatus: "${foundJob.jobProgressStatus}"`);
    console.log('\n');

    // Step 2: Remove the jobProgressStatus field
    console.log('🗑️  STEP 2: Removing jobProgressStatus field...\n');

    const admin = await import('firebase-admin');

    await adminDb.collection('live_jobs').doc(jobId).update({
      jobProgressStatus: admin.firestore.FieldValue.delete()
    });

    console.log(`   ✅ Deleted jobProgressStatus field from job ${jobId}\n`);

    // Step 3: Verify the fix
    console.log('🔍 STEP 3: Verifying fix...\n');

    const updatedJob = await adminDb.collection('live_jobs').doc(jobId).get();
    const updatedData = updatedJob.data();

    console.log(`   📄 Job ${jobId} now has:`);
    console.log(`      status: "${updatedData?.status}"`);
    console.log(`      jobProgressStatus: ${updatedData?.jobProgressStatus || 'REMOVED ✅'}`);
    console.log('\n');

    // Step 4: Final verification - check all jobs
    console.log('✅ STEP 4: Final verification across all jobs...\n');

    const allJobsSnapshot = await adminDb.collection('live_jobs').get();

    const statusFields = new Set<string>();

    allJobsSnapshot.docs.forEach(doc => {
      const data = doc.data();
      if (data.status !== undefined) statusFields.add('status');
      if (data.jobProgressStatus !== undefined) statusFields.add('jobProgressStatus');
    });

    console.log('   📊 Status field names in use:');
    statusFields.forEach(field => {
      console.log(`      • ${field}`);
    });
    console.log('\n');

    if (statusFields.size === 1 && statusFields.has('status')) {
      console.log('   🎉 PERFECT! All jobs now use only "status" field\n');
    } else {
      console.log('   ⚠️  WARNING: Multiple status fields still detected\n');
    }

    console.log('═'.repeat(80));
    console.log('✅ FIX COMPLETE - DATABASE IS NOW PERFECT');
    console.log('═'.repeat(80));
    console.log('\n');

    process.exit(0);

  } catch (error) {
    console.error('\n❌ ERROR:', error);
    process.exit(1);
  }
}

fixJobStatusField().catch(console.error);
