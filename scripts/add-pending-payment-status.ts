// Add "Pending Payment" status to Firebase statuses/job_statuses
import { adminDb } from '../src/lib/firebaseAdmin';

async function addPendingPaymentStatus() {
  console.log('\n');
  console.log('═'.repeat(80));
  console.log('📝 ADDING "Pending Payment" STATUS TO JOB STATUSES');
  console.log('═'.repeat(80));
  console.log('\n');

  try {
    // Get current job statuses
    const jobStatusesDoc = await adminDb.collection('statuses').doc('job_statuses').get();

    if (!jobStatusesDoc.exists) {
      console.log('   ❌ statuses/job_statuses document not found!\n');
      process.exit(1);
    }

    const data = jobStatusesDoc.data();
    const currentStatuses = data?.statuses || [];

    console.log('📊 Current Statuses:\n');
    currentStatuses.forEach((status: any) => {
      console.log(`   • ${status.value} (${status.label})`);
    });

    // Check if "Pending Payment" already exists
    const hasPendingPayment = currentStatuses.some(
      (s: any) => s.value === 'Pending Payment'
    );

    if (hasPendingPayment) {
      console.log('\n   ✅ "Pending Payment" status already exists!\n');
      process.exit(0);
    }

    console.log('\n➕ Adding "Pending Payment" status...\n');

    // Add "Pending Payment" as the first status (before Dispatched)
    const newStatus = {
      value: 'Pending Payment',
      label: 'Pending Payment',
      color: '#FF8C00',        // Dark orange
      bgColor: '#FFF3E0',      // Light orange background
      order: 0                  // First in order
    };

    // Update all existing statuses to increment their order
    const updatedStatuses = [
      newStatus,
      ...currentStatuses.map((s: any) => ({
        ...s,
        order: (s.order || 0) + 1
      }))
    ];

    // Update Firebase
    await adminDb.collection('statuses').doc('job_statuses').update({
      statuses: updatedStatuses,
      lastUpdated: new Date().toISOString()
    });

    console.log('   ✅ Successfully added "Pending Payment" status\n');

    console.log('📋 Updated Statuses:\n');
    updatedStatuses.forEach((status: any) => {
      console.log(`   ${status.order}. ${status.value} (${status.label})`);
    });

    console.log('\n');
    console.log('═'.repeat(80));
    console.log('✅ STATUS ADDED SUCCESSFULLY');
    console.log('═'.repeat(80));
    console.log('\n');

    process.exit(0);

  } catch (error) {
    console.error('\n❌ ERROR:', error);
    process.exit(1);
  }
}

addPendingPaymentStatus().catch(console.error);
