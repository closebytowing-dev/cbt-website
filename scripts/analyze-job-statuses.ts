// Analyze job status system across Firebase
import { adminDb } from '../src/lib/firebaseAdmin';

async function analyzeJobStatuses() {
  console.log('\n');
  console.log('═'.repeat(80));
  console.log('📊 JOB STATUS SYSTEM ANALYSIS');
  console.log('═'.repeat(80));
  console.log('\n');

  // 1. Check settings/job_statuses configuration
  console.log('1️⃣  Checking settings/job_statuses configuration...\n');

  const jobStatusesDoc = await adminDb.collection('settings').doc('job_statuses').get();

  if (jobStatusesDoc.exists) {
    const data = jobStatusesDoc.data();
    console.log('   📄 settings/job_statuses document:\n');
    console.log(JSON.stringify(data, null, 2));
    console.log('\n');

    if (data?.statuses) {
      console.log('   📋 Configured Statuses:');
      data.statuses.forEach((status: any, idx: number) => {
        console.log(`      ${idx + 1}. ${status.label || status.value || status}`);
        if (status.value) console.log(`         Value: ${status.value}`);
        if (status.color) console.log(`         Color: ${status.color}`);
        if (status.description) console.log(`         Description: ${status.description}`);
      });
      console.log('\n');
    }
  } else {
    console.log('   ⚠️  settings/job_statuses document does NOT exist!\n');
  }

  // 2. Check what status values are actually used in live_jobs
  console.log('2️⃣  Analyzing actual status values in live_jobs...\n');

  const liveJobsSnapshot = await adminDb.collection('live_jobs').get();

  const statusCounts: Record<string, number> = {};
  const jobProgressStatusCounts: Record<string, number> = {};
  const paymentStatusCounts: Record<string, number> = {};

  const jobsWithStatusFields: any[] = [];

  liveJobsSnapshot.docs.forEach(doc => {
    const data = doc.data();
    const jobInfo: any = {
      id: doc.id,
      fields: []
    };

    // Check for 'status' field
    if (data.status !== undefined) {
      statusCounts[data.status] = (statusCounts[data.status] || 0) + 1;
      jobInfo.fields.push({ field: 'status', value: data.status });
    }

    // Check for 'jobProgressStatus' field
    if (data.jobProgressStatus !== undefined) {
      jobProgressStatusCounts[data.jobProgressStatus] = (jobProgressStatusCounts[data.jobProgressStatus] || 0) + 1;
      jobInfo.fields.push({ field: 'jobProgressStatus', value: data.jobProgressStatus });
    }

    // Check for 'paymentStatus' field
    if (data.paymentStatus !== undefined) {
      paymentStatusCounts[data.paymentStatus] = (paymentStatusCounts[data.paymentStatus] || 0) + 1;
      jobInfo.fields.push({ field: 'paymentStatus', value: data.paymentStatus });
    }

    if (jobInfo.fields.length > 0) {
      jobsWithStatusFields.push(jobInfo);
    }
  });

  console.log(`   📊 Total Jobs Analyzed: ${liveJobsSnapshot.size}\n`);

  console.log('   📋 STATUS FIELD VALUES:\n');
  if (Object.keys(statusCounts).length > 0) {
    Object.entries(statusCounts).forEach(([status, count]) => {
      console.log(`      • "${status}": ${count} jobs`);
    });
  } else {
    console.log('      (No "status" field found in any jobs)\n');
  }
  console.log('\n');

  console.log('   📋 JOB_PROGRESS_STATUS FIELD VALUES:\n');
  if (Object.keys(jobProgressStatusCounts).length > 0) {
    Object.entries(jobProgressStatusCounts).forEach(([status, count]) => {
      console.log(`      • "${status}": ${count} jobs`);
    });
  } else {
    console.log('      (No "jobProgressStatus" field found in any jobs)\n');
  }
  console.log('\n');

  console.log('   📋 PAYMENT_STATUS FIELD VALUES:\n');
  if (Object.keys(paymentStatusCounts).length > 0) {
    Object.entries(paymentStatusCounts).forEach(([status, count]) => {
      console.log(`      • "${status}": ${count} jobs`);
    });
  } else {
    console.log('      (No "paymentStatus" field found in any jobs)\n');
  }
  console.log('\n');

  // 3. Check payment_statuses configuration
  console.log('3️⃣  Checking settings/payment_statuses configuration...\n');

  const paymentStatusesDoc = await adminDb.collection('settings').doc('payment_statuses').get();

  if (paymentStatusesDoc.exists) {
    const data = paymentStatusesDoc.data();
    console.log('   📄 settings/payment_statuses document:\n');
    console.log(JSON.stringify(data, null, 2));
    console.log('\n');
  } else {
    console.log('   ⚠️  settings/payment_statuses document does NOT exist!\n');
  }

  // 4. Show detailed breakdown per job
  console.log('4️⃣  Detailed Job Status Breakdown:\n');
  console.log('─'.repeat(80));

  jobsWithStatusFields.forEach(job => {
    console.log(`   📄 Job ID: ${job.id}`);
    job.fields.forEach((field: any) => {
      console.log(`      ${field.field}: "${field.value}"`);
    });
    console.log('');
  });

  // 5. Analysis and Recommendations
  console.log('\n');
  console.log('═'.repeat(80));
  console.log('🔍 ANALYSIS & FINDINGS');
  console.log('═'.repeat(80));
  console.log('\n');

  const findings: string[] = [];

  // Check if settings/job_statuses exists
  if (!jobStatusesDoc.exists) {
    findings.push('⚠️  MISSING: settings/job_statuses document does not exist');
    findings.push('   → Driver/Dispatcher apps may not have status options configured');
  }

  // Check for multiple status field names
  const statusFieldsUsed = [];
  if (Object.keys(statusCounts).length > 0) statusFieldsUsed.push('status');
  if (Object.keys(jobProgressStatusCounts).length > 0) statusFieldsUsed.push('jobProgressStatus');
  if (Object.keys(paymentStatusCounts).length > 0) statusFieldsUsed.push('paymentStatus');

  if (statusFieldsUsed.length > 1) {
    findings.push(`⚠️  INCONSISTENCY: Multiple status field names used: ${statusFieldsUsed.join(', ')}`);
    findings.push('   → This could cause confusion between driver/dispatcher apps');
  }

  // Check if configured statuses match actual usage
  if (jobStatusesDoc.exists) {
    const configuredStatuses = jobStatusesDoc.data()?.statuses || [];
    const configuredValues = configuredStatuses.map((s: any) => s.value || s.label || s);
    const actualStatuses = Object.keys(statusCounts);

    actualStatuses.forEach(actualStatus => {
      if (!configuredValues.includes(actualStatus)) {
        findings.push(`⚠️  MISMATCH: Status "${actualStatus}" is used in jobs but not in settings/job_statuses`);
      }
    });
  }

  if (findings.length > 0) {
    findings.forEach(finding => console.log(finding + '\n'));
  } else {
    console.log('✅ No issues found - Job status system is properly configured\n');
  }

  console.log('═'.repeat(80));
  console.log('✅ ANALYSIS COMPLETE');
  console.log('═'.repeat(80));
  console.log('\n');

  process.exit(0);
}

analyzeJobStatuses().catch(console.error);
