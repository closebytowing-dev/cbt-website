import { adminDb } from '../src/lib/firebaseAdmin.js';

async function fetchLiveJobs() {
  try {
    console.log('Fetching all jobs from /live_jobs collection...\n');
    console.log('═══════════════════════════════════════════════════════════════\n');

    const snapshot = await adminDb.collection('live_jobs').get();

    if (snapshot.empty) {
      console.log('No jobs found in /live_jobs collection');
      process.exit(0);
    }

    console.log(`Found ${snapshot.size} job(s)\n`);

    snapshot.forEach(doc => {
      console.log('Job ID:', doc.id);
      const data = doc.data();

      // Redact personal information but keep structure
      const redactedData = {
        ...data,
        customerName: data.customerName ? '[REDACTED]' : data.customerName,
        customerPhone: data.customerPhone ? '[REDACTED]' : data.customerPhone,
        pickupLocation: data.pickupLocation ? '[REDACTED ADDRESS]' : data.pickupLocation,
        dropoffLocation: data.dropoffLocation ? '[REDACTED ADDRESS]' : data.dropoffLocation,
      };

      console.log('Job Data:', JSON.stringify(redactedData, null, 2));
      console.log('\n---\n');
    });

    console.log('═══════════════════════════════════════════════════════════════');
    process.exit(0);
  } catch (error) {
    console.error('Error:', error);
    process.exit(1);
  }
}

fetchLiveJobs();
