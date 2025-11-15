// scripts/fetch-latest-job.ts
import { adminDb } from "../src/lib/firebaseAdmin";

async function fetchLatestJob() {
  try {
    const snapshot = await adminDb.collection('live_jobs')
      .orderBy('createdAt', 'desc')
      .limit(1)
      .get();

    if (snapshot.empty) {
      console.log('No jobs found in /live_jobs collection');
      return;
    }

    const doc = snapshot.docs[0];
    const data = doc.data();

    console.log('═══════════════════════════════════════════════════════════');
    console.log('LATEST JOB DOCUMENT');
    console.log('═══════════════════════════════════════════════════════════');
    console.log('Document ID:', doc.id);
    console.log('Created At:', data.createdAt?.toDate());
    console.log('');
    console.log('COMPLETE DOCUMENT STRUCTURE:');
    console.log('═══════════════════════════════════════════════════════════');

    // Convert to JSON-friendly format
    const jsonData: Record<string, any> = {};
    Object.keys(data).forEach(key => {
      const value = data[key];
      if (value && typeof value === 'object' && 'toDate' in value) {
        jsonData[key] = value.toDate().toISOString();
      } else {
        jsonData[key] = value;
      }
    });

    console.log(JSON.stringify(jsonData, null, 2));
    console.log('═══════════════════════════════════════════════════════════');
    console.log('\n✅ Document visible in Firebase Console at: /live_jobs/' + doc.id);
  } catch (error: any) {
    console.error('❌ Error fetching job:', error.message);
  }
}

fetchLatestJob();
