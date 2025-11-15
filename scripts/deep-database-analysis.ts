// Deep analysis of entire Firebase database - Done Once, Done Right
import { adminDb } from '../src/lib/firebaseAdmin';

interface Issue {
  severity: 'critical' | 'high' | 'medium' | 'low';
  collection: string;
  document?: string;
  field?: string;
  issue: string;
  recommendation: string;
}

async function deepDatabaseAnalysis() {
  console.log('\n');
  console.log('═'.repeat(80));
  console.log('🔬 DEEP DATABASE ANALYSIS - DONE ONCE, DONE RIGHT');
  console.log('═'.repeat(80));
  console.log('\n');

  const issues: Issue[] = [];
  const allCollections = await adminDb.listCollections();

  console.log(`📊 Total Collections: ${allCollections.length}\n`);
  console.log('═'.repeat(80));
  console.log('\n');

  // Analyze each collection
  for (const collection of allCollections) {
    console.log(`\n📁 ANALYZING: ${collection.id}/`);
    console.log('─'.repeat(80));

    const snapshot = await collection.get();
    console.log(`   Documents: ${snapshot.size}\n`);

    // Track field consistency across documents
    const fieldTracking: Record<string, { count: number; types: Set<string>; samples: any[] }> = {};

    for (const doc of snapshot.docs) {
      const data = doc.data();
      const fields = Object.keys(data);

      // Track fields
      fields.forEach(field => {
        if (!fieldTracking[field]) {
          fieldTracking[field] = { count: 0, types: new Set(), samples: [] };
        }
        fieldTracking[field].count++;
        fieldTracking[field].types.add(typeof data[field]);
        if (fieldTracking[field].samples.length < 3) {
          fieldTracking[field].samples.push(data[field]);
        }
      });

      // Check for missing critical fields based on collection type
      if (collection.id === 'statuses') {
        if (!data.version) {
          issues.push({
            severity: 'medium',
            collection: collection.id,
            document: doc.id,
            field: 'version',
            issue: 'Missing version field',
            recommendation: 'Add version field for tracking'
          });
        }
        if (!data.lastUpdated && !data.updatedAt) {
          issues.push({
            severity: 'medium',
            collection: collection.id,
            document: doc.id,
            field: 'lastUpdated/updatedAt',
            issue: 'Missing timestamp field',
            recommendation: 'Add lastUpdated or updatedAt field'
          });
        }
        if (!data.statuses || !Array.isArray(data.statuses)) {
          issues.push({
            severity: 'critical',
            collection: collection.id,
            document: doc.id,
            field: 'statuses',
            issue: 'Missing or invalid statuses array',
            recommendation: 'Add statuses array with status definitions'
          });
        }
      }

      if (collection.id === 'Price & Rate config') {
        if (!data.version) {
          issues.push({
            severity: 'medium',
            collection: collection.id,
            document: doc.id,
            field: 'version',
            issue: 'Missing version field',
            recommendation: 'Add version field for tracking'
          });
        }
        if (!data.lastUpdated && !data.updatedAt) {
          issues.push({
            severity: 'medium',
            collection: collection.id,
            document: doc.id,
            field: 'lastUpdated/updatedAt',
            issue: 'Missing timestamp field',
            recommendation: 'Add lastUpdated or updatedAt field'
          });
        }
      }

      if (collection.id === 'settings') {
        if (!data.createdAt && !data.lastUpdated && !data.updatedAt) {
          issues.push({
            severity: 'low',
            collection: collection.id,
            document: doc.id,
            field: 'timestamp',
            issue: 'Missing timestamp fields',
            recommendation: 'Add createdAt/updatedAt for tracking'
          });
        }
      }

      // Check for empty values
      fields.forEach(field => {
        const value = data[field];
        if (value === null || value === undefined || value === '') {
          issues.push({
            severity: 'low',
            collection: collection.id,
            document: doc.id,
            field: field,
            issue: `Empty value: ${value}`,
            recommendation: 'Provide value or remove field'
          });
        }
      });

      // Check for inconsistent field naming (camelCase vs snake_case)
      fields.forEach(field => {
        const hasUnderscore = field.includes('_');
        const hasCamelCase = /[a-z][A-Z]/.test(field);

        if (hasUnderscore && hasCamelCase) {
          issues.push({
            severity: 'low',
            collection: collection.id,
            document: doc.id,
            field: field,
            issue: 'Mixed naming convention (has both _ and camelCase)',
            recommendation: 'Use consistent naming: either snake_case or camelCase'
          });
        }
      });
    }

    // Report field consistency
    console.log('   📋 Field Analysis:\n');

    const sortedFields = Object.entries(fieldTracking).sort((a, b) => b[1].count - a[1].count);

    sortedFields.forEach(([field, info]) => {
      const percentage = ((info.count / snapshot.size) * 100).toFixed(0);
      const typeList = Array.from(info.types).join(', ');

      console.log(`      ${field}`);
      console.log(`         Present in: ${info.count}/${snapshot.size} docs (${percentage}%)`);
      console.log(`         Types: ${typeList}`);

      // Flag inconsistent presence
      if (info.count > 0 && info.count < snapshot.size) {
        issues.push({
          severity: 'medium',
          collection: collection.id,
          field: field,
          issue: `Inconsistent field presence: ${info.count}/${snapshot.size} documents`,
          recommendation: 'Either add to all documents or remove from some'
        });
      }

      // Flag type inconsistency
      if (info.types.size > 1) {
        issues.push({
          severity: 'high',
          collection: collection.id,
          field: field,
          issue: `Inconsistent types: ${Array.from(info.types).join(', ')}`,
          recommendation: 'Standardize field type across all documents'
        });
      }
    });

    console.log('\n');

    // Collection-specific analysis
    if (collection.id === 'live_jobs') {
      console.log('   🔍 Job-Specific Analysis:\n');

      // Check status field consistency
      const statusFieldNames = new Set<string>();
      snapshot.docs.forEach(doc => {
        const data = doc.data();
        if (data.status !== undefined) statusFieldNames.add('status');
        if (data.jobProgressStatus !== undefined) statusFieldNames.add('jobProgressStatus');
        if (data.jobStatus !== undefined) statusFieldNames.add('jobStatus');
      });

      if (statusFieldNames.size > 1) {
        issues.push({
          severity: 'high',
          collection: collection.id,
          issue: `Multiple status field names used: ${Array.from(statusFieldNames).join(', ')}`,
          recommendation: 'Standardize to single field name: "status"'
        });
        console.log(`      ⚠️  Multiple status fields: ${Array.from(statusFieldNames).join(', ')}\n`);
      }

      // Check payment status field consistency
      const paymentFieldNames = new Set<string>();
      snapshot.docs.forEach(doc => {
        const data = doc.data();
        if (data.paymentStatus !== undefined) paymentFieldNames.add('paymentStatus');
        if (data.payment_status !== undefined) paymentFieldNames.add('payment_status');
      });

      if (paymentFieldNames.size > 1) {
        issues.push({
          severity: 'high',
          collection: collection.id,
          issue: `Multiple payment status field names: ${Array.from(paymentFieldNames).join(', ')}`,
          recommendation: 'Standardize to single field name: "paymentStatus"'
        });
      }
    }

    if (collection.id === 'statuses') {
      console.log('   🔍 Status-Specific Analysis:\n');

      // Check each status document
      for (const doc of snapshot.docs) {
        const data = doc.data();

        if (data.statuses && Array.isArray(data.statuses)) {
          console.log(`      ${doc.id}: ${data.statuses.length} statuses defined\n`);

          // Check status object consistency
          data.statuses.forEach((status: any, idx: number) => {
            if (!status.value && !status.label) {
              issues.push({
                severity: 'high',
                collection: collection.id,
                document: doc.id,
                issue: `Status #${idx + 1} missing value and label`,
                recommendation: 'Add value and label to status definition'
              });
            }
            if (!status.color && !status.bgColor) {
              issues.push({
                severity: 'low',
                collection: collection.id,
                document: doc.id,
                issue: `Status #${idx + 1} (${status.value || status.label}) missing color`,
                recommendation: 'Add color and bgColor for UI consistency'
              });
            }
          });
        }
      }
    }

    if (collection.id === 'Price & Rate config') {
      console.log('   🔍 Pricing-Specific Analysis:\n');

      for (const doc of snapshot.docs) {
        const data = doc.data();

        if (doc.id === 'pricing') {
          // Check base pricing
          if (!data.base || !data.base.travelRate) {
            issues.push({
              severity: 'critical',
              collection: collection.id,
              document: doc.id,
              field: 'base.travelRate',
              issue: 'Missing critical travelRate in base pricing',
              recommendation: 'Add base.travelRate field'
            });
          }

          // Check services
          if (!data.services || typeof data.services !== 'object') {
            issues.push({
              severity: 'critical',
              collection: collection.id,
              document: doc.id,
              field: 'services',
              issue: 'Missing or invalid services pricing',
              recommendation: 'Add services object with pricing for each service'
            });
          }

          // Check towing
          if (!data.towing || typeof data.towing !== 'object') {
            issues.push({
              severity: 'critical',
              collection: collection.id,
              document: doc.id,
              field: 'towing',
              issue: 'Missing or invalid towing pricing',
              recommendation: 'Add towing object with pricing for towing services'
            });
          }
        }

        if (doc.id === 'time_multipliers') {
          if (!data.enabled && data.enabled !== false) {
            issues.push({
              severity: 'medium',
              collection: collection.id,
              document: doc.id,
              field: 'enabled',
              issue: 'Missing enabled flag',
              recommendation: 'Add enabled boolean field'
            });
          }

          if (!data.periods || !Array.isArray(data.periods)) {
            issues.push({
              severity: 'high',
              collection: collection.id,
              document: doc.id,
              field: 'periods',
              issue: 'Missing or invalid periods array',
              recommendation: 'Add periods array with time multiplier definitions'
            });
          }
        }
      }
    }
  }

  // Print Issues Report
  console.log('\n');
  console.log('═'.repeat(80));
  console.log('📋 ISSUES REPORT');
  console.log('═'.repeat(80));
  console.log('\n');

  if (issues.length === 0) {
    console.log('   🎉 PERFECT! No issues found!\n');
  } else {
    const critical = issues.filter(i => i.severity === 'critical');
    const high = issues.filter(i => i.severity === 'high');
    const medium = issues.filter(i => i.severity === 'medium');
    const low = issues.filter(i => i.severity === 'low');

    console.log(`   Total Issues: ${issues.length}\n`);
    console.log(`   🔴 Critical: ${critical.length}`);
    console.log(`   🟠 High: ${high.length}`);
    console.log(`   🟡 Medium: ${medium.length}`);
    console.log(`   🟢 Low: ${low.length}\n`);

    if (critical.length > 0) {
      console.log('\n🔴 CRITICAL ISSUES:\n');
      critical.forEach((issue, idx) => {
        console.log(`   ${idx + 1}. ${issue.collection}/${issue.document || ''}${issue.field ? '/' + issue.field : ''}`);
        console.log(`      Issue: ${issue.issue}`);
        console.log(`      Fix: ${issue.recommendation}\n`);
      });
    }

    if (high.length > 0) {
      console.log('\n🟠 HIGH PRIORITY ISSUES:\n');
      high.forEach((issue, idx) => {
        console.log(`   ${idx + 1}. ${issue.collection}/${issue.document || ''}${issue.field ? '/' + issue.field : ''}`);
        console.log(`      Issue: ${issue.issue}`);
        console.log(`      Fix: ${issue.recommendation}\n`);
      });
    }

    if (medium.length > 0) {
      console.log('\n🟡 MEDIUM PRIORITY ISSUES:\n');
      medium.forEach((issue, idx) => {
        console.log(`   ${idx + 1}. ${issue.collection}/${issue.document || ''}${issue.field ? '/' + issue.field : ''}`);
        console.log(`      Issue: ${issue.issue}`);
        console.log(`      Fix: ${issue.recommendation}\n`);
      });
    }

    if (low.length > 0) {
      console.log('\n🟢 LOW PRIORITY ISSUES:\n');
      low.forEach((issue, idx) => {
        console.log(`   ${idx + 1}. ${issue.collection}/${issue.document || ''}${issue.field ? '/' + issue.field : ''}`);
        console.log(`      Issue: ${issue.issue}`);
        console.log(`      Fix: ${issue.recommendation}\n`);
      });
    }
  }

  console.log('═'.repeat(80));
  console.log('✅ DEEP ANALYSIS COMPLETE');
  console.log('═'.repeat(80));
  console.log('\n');

  process.exit(0);
}

deepDatabaseAnalysis().catch(console.error);
