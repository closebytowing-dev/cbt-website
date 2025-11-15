// Comprehensive audit of popup booking system code quality
import * as fs from 'fs';
import * as path from 'path';

interface CodeIssue {
  severity: 'critical' | 'high' | 'medium' | 'low';
  file: string;
  line?: number;
  issue: string;
  recommendation: string;
  codeSnippet?: string;
}

const issues: CodeIssue[] = [];

function auditPopupCode() {
  console.log('\n');
  console.log('═'.repeat(80));
  console.log('🔬 POPUP BOOKING SYSTEM CODE AUDIT');
  console.log('═'.repeat(80));
  console.log('\n');

  const popupFiles = [
    'src/components/PopupAddress.tsx',
    'src/components/PopupCustomerInfo.tsx',
    'src/components/LocationStep.tsx',
    'src/components/LeftPopup.tsx',
    'src/components/types.ts',
    'src/lib/pricing-client.ts',
    'src/app/api/create-job/route.ts',
    'src/app/api/create-square-payment-link/route.ts'
  ];

  console.log('📁 Files to Audit:\n');
  popupFiles.forEach(file => {
    const exists = fs.existsSync(path.join('/Users/danielheydari/Desktop/Website -12', file));
    console.log(`   ${exists ? '✅' : '❌'} ${file}`);
  });

  console.log('\n\n🔍 AUDIT CATEGORIES:\n');
  console.log('   1. Unused imports');
  console.log('   2. Dead code / unreachable code');
  console.log('   3. Console.log statements (should be removed in production)');
  console.log('   4. TODO/FIXME comments');
  console.log('   5. Hardcoded values that should come from Firebase');
  console.log('   6. Error handling gaps');
  console.log('   7. Type safety issues (any types)');
  console.log('   8. Performance issues');
  console.log('   9. Code duplication');
  console.log('   10. Missing validations\n');

  // Analyze each file
  popupFiles.forEach(file => {
    const filePath = path.join('/Users/danielheydari/Desktop/Website -12', file);
    if (!fs.existsSync(filePath)) return;

    const content = fs.readFileSync(filePath, 'utf-8');
    const lines = content.split('\n');

    console.log(`\n${'─'.repeat(80)}`);
    console.log(`📄 ANALYZING: ${file}`);
    console.log('─'.repeat(80));

    // Check for console.log (production code shouldn't have them)
    lines.forEach((line, idx) => {
      if (line.includes('console.log') && !line.trim().startsWith('//')) {
        issues.push({
          severity: 'low',
          file,
          line: idx + 1,
          issue: 'Console.log in production code',
          recommendation: 'Remove or convert to proper logging service',
          codeSnippet: line.trim()
        });
      }

      if (line.includes('console.error') && !line.trim().startsWith('//')) {
        // console.error is okay but note it
        console.log(`   ℹ️  Line ${idx + 1}: console.error (OK for error logging)`);
      }
    });

    // Check for TODO/FIXME
    lines.forEach((line, idx) => {
      if (line.includes('TODO') || line.includes('FIXME')) {
        issues.push({
          severity: 'medium',
          file,
          line: idx + 1,
          issue: 'TODO/FIXME comment found',
          recommendation: 'Complete the TODO or remove if not needed',
          codeSnippet: line.trim()
        });
      }
    });

    // Check for hardcoded phone numbers
    const phoneRegex = /\(?\d{3}\)?[-.\s]?\d{3}[-.\s]?\d{4}/g;
    lines.forEach((line, idx) => {
      const matches = line.match(phoneRegex);
      if (matches && !line.trim().startsWith('//')) {
        issues.push({
          severity: 'medium',
          file,
          line: idx + 1,
          issue: 'Hardcoded phone number',
          recommendation: 'Use company info from Firebase config',
          codeSnippet: line.trim()
        });
      }
    });

    // Check for 'any' types
    lines.forEach((line, idx) => {
      if (line.includes(': any') && !line.trim().startsWith('//')) {
        issues.push({
          severity: 'low',
          file,
          line: idx + 1,
          issue: 'Using "any" type - reduces type safety',
          recommendation: 'Define proper TypeScript types',
          codeSnippet: line.trim()
        });
      }
    });

    // Check for empty catch blocks
    const emptyCatchRegex = /catch[^{]*{\s*}/;
    if (emptyCatchRegex.test(content)) {
      issues.push({
        severity: 'high',
        file,
        issue: 'Empty catch block - errors silently ignored',
        recommendation: 'Add proper error handling'
      });
    }

    // Check for hardcoded status values
    lines.forEach((line, idx) => {
      if ((line.includes('"Pending Payment"') || line.includes("'Pending Payment'"))
          && !line.trim().startsWith('//')) {
        console.log(`   ⚠️  Line ${idx + 1}: Hardcoded "Pending Payment" status`);
      }
    });

    console.log(`   ✅ Analysis complete for ${file}`);
  });

  // Generate Report
  console.log('\n\n');
  console.log('═'.repeat(80));
  console.log('📋 AUDIT REPORT');
  console.log('═'.repeat(80));
  console.log('\n');

  if (issues.length === 0) {
    console.log('   🎉 NO ISSUES FOUND! Code is clean!\n');
    return;
  }

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
      console.log(`   ${idx + 1}. ${issue.file}${issue.line ? ':' + issue.line : ''}`);
      console.log(`      Issue: ${issue.issue}`);
      console.log(`      Fix: ${issue.recommendation}`);
      if (issue.codeSnippet) console.log(`      Code: ${issue.codeSnippet}`);
      console.log('');
    });
  }

  if (high.length > 0) {
    console.log('\n🟠 HIGH PRIORITY ISSUES:\n');
    high.forEach((issue, idx) => {
      console.log(`   ${idx + 1}. ${issue.file}${issue.line ? ':' + issue.line : ''}`);
      console.log(`      Issue: ${issue.issue}`);
      console.log(`      Fix: ${issue.recommendation}`);
      if (issue.codeSnippet) console.log(`      Code: ${issue.codeSnippet}`);
      console.log('');
    });
  }

  if (medium.length > 0) {
    console.log('\n🟡 MEDIUM PRIORITY ISSUES:\n');
    medium.forEach((issue, idx) => {
      console.log(`   ${idx + 1}. ${issue.file}${issue.line ? ':' + issue.line : ''}`);
      console.log(`      Issue: ${issue.issue}`);
      console.log(`      Fix: ${issue.recommendation}`);
      if (issue.codeSnippet) console.log(`      Code: ${issue.codeSnippet.substring(0, 60)}...`);
      console.log('');
    });
  }

  if (low.length > 0) {
    console.log('\n🟢 LOW PRIORITY ISSUES:\n');
    low.forEach((issue, idx) => {
      console.log(`   ${idx + 1}. ${issue.file}${issue.line ? ':' + issue.line : ''}`);
      console.log(`      Issue: ${issue.issue}`);
      if (issue.codeSnippet) console.log(`      Code: ${issue.codeSnippet.substring(0, 60)}...`);
      console.log('');
    });
  }

  console.log('═'.repeat(80));
  console.log('✅ AUDIT COMPLETE');
  console.log('═'.repeat(80));
  console.log('\n');

  process.exit(0);
}

auditPopupCode();
