// Comprehensive scan for duplications and optimization opportunities
import { adminDb } from '../src/lib/firebaseAdmin';

interface DuplicationIssue {
  type: 'duplicate_field' | 'redundant_data' | 'optimization_opportunity';
  severity: 'high' | 'medium' | 'low';
  description: string;
  location: string;
  recommendation: string;
}

async function comprehensiveScan() {
  console.log('\n');
  console.log('═'.repeat(80));
  console.log('🔍 COMPREHENSIVE DUPLICATION & OPTIMIZATION SCAN');
  console.log('═'.repeat(80));
  console.log('\n');

  const issues: DuplicationIssue[] = [];
  const allData: Record<string, any> = {};

  // Step 1: Collect all data from all collections
  console.log('📦 STEP 1: Collecting all data from all collections...\n');

  const collections = await adminDb.listCollections();

  for (const collection of collections) {
    const snapshot = await collection.get();
    allData[collection.id] = {};

    for (const doc of snapshot.docs) {
      allData[collection.id][doc.id] = doc.data();
    }

    console.log(`   ✅ Collected ${snapshot.size} documents from ${collection.id}/`);
  }

  console.log('\n');
  console.log('═'.repeat(80));
  console.log('🔬 STEP 2: Analyzing for duplications and redundancies...\n');
  console.log('═'.repeat(80));
  console.log('\n');

  // Analysis 1: Check "Price & Rate config" vs "settings" overlap
  console.log('1️⃣  Checking "Price & Rate config" vs "settings" overlap...\n');

  const priceRateConfig = allData['Price & Rate config'] || {};
  const settings = allData['settings'] || {};

  // Check if company info duplicated
  if (priceRateConfig.company && settings.company_info) {
    issues.push({
      type: 'duplicate_field',
      severity: 'high',
      description: 'Company information exists in both "Price & Rate config/company" and "settings/company_info"',
      location: 'Price & Rate config/company + settings/company_info',
      recommendation: 'Delete settings/company_info (already recommended and agreed)'
    });
  }

  // Check if location info duplicated
  if (priceRateConfig.company?.location && settings.locations) {
    const priceRateOffice = priceRateConfig.company.location.office;
    const settingsLocations = settings.locations;

    // Check if office address matches any location in settings
    if (priceRateOffice && settingsLocations) {
      const addressMatch = JSON.stringify(priceRateOffice).toLowerCase();
      const settingsAddressMatch = JSON.stringify(settingsLocations).toLowerCase();

      if (addressMatch && settingsAddressMatch.includes(priceRateOffice.address?.toLowerCase() || '')) {
        issues.push({
          type: 'duplicate_field',
          severity: 'medium',
          description: 'Office address appears in both "Price & Rate config/company/location" and "settings/locations"',
          location: 'Price & Rate config/company/location + settings/locations',
          recommendation: 'Verify if settings/locations is needed separately or can reference Price & Rate config'
        });
      }
    }
  }

  console.log('   ✅ Company/Location overlap analysis complete\n');

  // Analysis 2: Check for duplicate pricing/rate fields across collections
  console.log('2️⃣  Scanning for pricing/rate fields across all collections...\n');

  const pricingFields = ['price', 'basePrice', 'travelRate', 'perMileRate', 'ratePerMile', 'hookupFee', 'onlineDiscountRate'];
  const collectionsWithPricing: Record<string, string[]> = {};

  for (const [collectionName, docs] of Object.entries(allData)) {
    for (const [docId, data] of Object.entries(docs as Record<string, any>)) {
      const foundFields: string[] = [];

      // Check top-level fields
      for (const field of pricingFields) {
        if (data[field] !== undefined) {
          foundFields.push(field);
        }
      }

      // Check nested fields
      if (data.base) {
        for (const field of pricingFields) {
          if (data.base[field] !== undefined) {
            foundFields.push(`base.${field}`);
          }
        }
      }

      if (data.services) {
        foundFields.push('services (pricing data)');
      }

      if (data.towing) {
        foundFields.push('towing (pricing data)');
      }

      if (foundFields.length > 0) {
        const key = `${collectionName}/${docId}`;
        collectionsWithPricing[key] = foundFields;
      }
    }
  }

  console.log('   📊 Collections/Documents with pricing data:\n');
  for (const [location, fields] of Object.entries(collectionsWithPricing)) {
    console.log(`      • ${location}`);
    console.log(`        Fields: ${fields.join(', ')}`);
  }

  // Should only be in "Price & Rate config/pricing"
  const expectedPricingLocation = 'Price & Rate config/pricing';
  const unexpectedPricingLocations = Object.keys(collectionsWithPricing).filter(
    loc => loc !== expectedPricingLocation
  );

  if (unexpectedPricingLocations.length > 0) {
    issues.push({
      type: 'redundant_data',
      severity: 'high',
      description: `Pricing data found in ${unexpectedPricingLocations.length} unexpected locations`,
      location: unexpectedPricingLocations.join(', '),
      recommendation: 'All pricing should be centralized in "Price & Rate config/pricing" only'
    });
  }

  console.log('\n   ✅ Pricing field scan complete\n');

  // Analysis 3: Check for redundant metadata fields
  console.log('3️⃣  Checking for redundant metadata fields...\n');

  const metadataFields = ['createdAt', 'updatedAt', 'lastModified', 'timestamp', 'version'];
  const metadataUsage: Record<string, string[]> = {};

  for (const [collectionName, docs] of Object.entries(allData)) {
    for (const [docId, data] of Object.entries(docs as Record<string, any>)) {
      for (const field of metadataFields) {
        if (data[field] !== undefined) {
          const key = field;
          if (!metadataUsage[key]) {
            metadataUsage[key] = [];
          }
          metadataUsage[key].push(`${collectionName}/${docId}`);
        }
      }
    }
  }

  console.log('   📊 Metadata field usage:\n');
  for (const [field, locations] of Object.entries(metadataUsage)) {
    console.log(`      • ${field}: ${locations.length} occurrences`);
  }
  console.log('\n   ✅ Metadata analysis complete\n');

  // Analysis 4: Check for similar/overlapping data structures
  console.log('4️⃣  Analyzing data structure similarities...\n');

  // Compare settings documents
  if (settings) {
    const settingsDocs = Object.keys(settings);
    console.log(`   📄 Settings documents: ${settingsDocs.join(', ')}\n`);

    // Check if any settings could be moved to Price & Rate config
    const configDocs = Object.keys(priceRateConfig);
    console.log(`   📄 Price & Rate config documents: ${configDocs.join(', ')}\n`);
  }

  console.log('   ✅ Structure analysis complete\n');

  // Analysis 5: Check for empty or placeholder data
  console.log('5️⃣  Checking for empty or placeholder data...\n');

  for (const [collectionName, docs] of Object.entries(allData)) {
    for (const [docId, data] of Object.entries(docs as Record<string, any>)) {
      const keys = Object.keys(data);

      if (keys.length === 0) {
        issues.push({
          type: 'optimization_opportunity',
          severity: 'low',
          description: `Empty document found`,
          location: `${collectionName}/${docId}`,
          recommendation: 'Consider deleting if not needed'
        });
      }

      // Check for placeholder values
      const placeholderValues = ['TODO', 'PLACEHOLDER', 'TBD', 'null', 'undefined'];
      for (const [key, value] of Object.entries(data)) {
        if (typeof value === 'string' && placeholderValues.some(p => value.toUpperCase().includes(p))) {
          issues.push({
            type: 'optimization_opportunity',
            severity: 'low',
            description: `Placeholder value found in ${key}`,
            location: `${collectionName}/${docId}`,
            recommendation: 'Fill in actual value or remove field'
          });
        }
      }
    }
  }

  console.log('   ✅ Empty/placeholder check complete\n');

  // Analysis 6: Check live_jobs for any pricing-related data
  console.log('6️⃣  Checking live_jobs for pricing data storage...\n');

  const liveJobs = allData['live_jobs'] || {};
  let jobsWithPricing = 0;

  for (const [jobId, jobData] of Object.entries(liveJobs)) {
    if (jobData.price || jobData.totalPrice || jobData.estimatedPrice || jobData.quote) {
      jobsWithPricing++;
    }
  }

  console.log(`   📊 Jobs with pricing data: ${jobsWithPricing} / ${Object.keys(liveJobs).length}`);

  if (jobsWithPricing > 0) {
    console.log('   ℹ️  Note: Jobs storing prices is normal and expected\n');
  }

  console.log('   ✅ Live jobs analysis complete\n');

  // Generate Final Report
  console.log('\n');
  console.log('═'.repeat(80));
  console.log('📋 FINAL REPORT: ISSUES FOUND');
  console.log('═'.repeat(80));
  console.log('\n');

  if (issues.length === 0) {
    console.log('   🎉 NO ISSUES FOUND! Database is perfectly organized!\n');
  } else {
    // Group by severity
    const highSeverity = issues.filter(i => i.severity === 'high');
    const mediumSeverity = issues.filter(i => i.severity === 'medium');
    const lowSeverity = issues.filter(i => i.severity === 'low');

    if (highSeverity.length > 0) {
      console.log('🔴 HIGH SEVERITY ISSUES:\n');
      highSeverity.forEach((issue, idx) => {
        console.log(`   ${idx + 1}. ${issue.type.toUpperCase()}`);
        console.log(`      Description: ${issue.description}`);
        console.log(`      Location: ${issue.location}`);
        console.log(`      Recommendation: ${issue.recommendation}`);
        console.log('');
      });
    }

    if (mediumSeverity.length > 0) {
      console.log('🟡 MEDIUM SEVERITY ISSUES:\n');
      mediumSeverity.forEach((issue, idx) => {
        console.log(`   ${idx + 1}. ${issue.type.toUpperCase()}`);
        console.log(`      Description: ${issue.description}`);
        console.log(`      Location: ${issue.location}`);
        console.log(`      Recommendation: ${issue.recommendation}`);
        console.log('');
      });
    }

    if (lowSeverity.length > 0) {
      console.log('🟢 LOW SEVERITY ISSUES:\n');
      lowSeverity.forEach((issue, idx) => {
        console.log(`   ${idx + 1}. ${issue.type.toUpperCase()}`);
        console.log(`      Description: ${issue.description}`);
        console.log(`      Location: ${issue.location}`);
        console.log(`      Recommendation: ${issue.recommendation}`);
        console.log('');
      });
    }
  }

  console.log('═'.repeat(80));
  console.log('📊 SUMMARY');
  console.log('═'.repeat(80));
  console.log(`   Total Issues Found: ${issues.length}`);
  console.log(`   High Severity: ${issues.filter(i => i.severity === 'high').length}`);
  console.log(`   Medium Severity: ${issues.filter(i => i.severity === 'medium').length}`);
  console.log(`   Low Severity: ${issues.filter(i => i.severity === 'low').length}`);
  console.log('═'.repeat(80));
  console.log('\n');

  // Detailed data dump for manual inspection
  console.log('═'.repeat(80));
  console.log('📂 COMPLETE DATABASE SNAPSHOT (for manual review)');
  console.log('═'.repeat(80));
  console.log('\n');

  for (const [collectionName, docs] of Object.entries(allData)) {
    console.log(`📁 ${collectionName}/`);
    console.log('─'.repeat(80));

    for (const [docId, data] of Object.entries(docs as Record<string, any>)) {
      console.log(`   📄 ${docId}`);

      // Show all fields
      const fields = Object.keys(data);
      if (fields.length > 0) {
        console.log(`      Fields (${fields.length}): ${fields.join(', ')}`);

        // Show sample values for important fields
        const importantFields = ['name', 'title', 'type', 'version', 'enabled', 'address', 'phone', 'email'];
        for (const field of importantFields) {
          if (data[field] !== undefined) {
            const value = typeof data[field] === 'object' ? JSON.stringify(data[field]) : data[field];
            const displayValue = String(value).length > 50 ? String(value).substring(0, 47) + '...' : value;
            console.log(`      → ${field}: ${displayValue}`);
          }
        }
      }
      console.log('');
    }
    console.log('');
  }

  console.log('═'.repeat(80));
  console.log('✅ COMPREHENSIVE SCAN COMPLETE');
  console.log('═'.repeat(80));
  console.log('\n');

  process.exit(0);
}

comprehensiveScan().catch(console.error);
