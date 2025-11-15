// Update Firestore security rules to allow public read access to services/
import { initializeApp, cert } from 'firebase-admin/app';
import { getAuth } from 'firebase-admin/auth';
import * as path from 'path';
import * as fs from 'fs';

async function updateFirestoreRules() {
  console.log('\n');
  console.log('═'.repeat(80));
  console.log('🔒 UPDATING FIRESTORE SECURITY RULES');
  console.log('═'.repeat(80));
  console.log('\n');

  console.log('⚠️  NOTE: Firestore security rules cannot be updated programmatically');
  console.log('   via Node.js scripts. They must be updated through:');
  console.log('   1. Firebase Console (web UI)');
  console.log('   2. Firebase CLI (firebase deploy --only firestore:rules)');
  console.log('   3. REST API (requires OAuth token)\n');

  console.log('📝 Creating firestore.rules file...\n');

  const rulesContent = `rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {

    // ===================================================================
    // PUBLIC READ COLLECTIONS (Website needs these)
    // ===================================================================

    // Services collection - public read for website pricing
    match /services/{serviceId} {
      allow read: if true;  // Website can read pricing
      allow write: if false; // Only admin/server can write
    }

    // Price & Rate config - public read for website configuration
    match /Price & Rate config/{document} {
      allow read: if true;  // Website can read config
      allow write: if false; // Only admin/server can write
    }

    // Statuses - public read for website job status display
    match /statuses/{document} {
      allow read: if true;  // Website can read statuses
      allow write: if false; // Only admin/server can write
    }

    // ===================================================================
    // PROTECTED COLLECTIONS (Require authentication)
    // ===================================================================

    // Live jobs - authenticated users can create, only admins can read all
    match /live_jobs/{jobId} {
      allow read: if request.auth != null;
      allow create: if true; // Website creates jobs
      allow update, delete: if request.auth != null && request.auth.token.role == 'admin';
    }

    // Settings - admin only
    match /settings/{document} {
      allow read: if request.auth != null;
      allow write: if request.auth != null && request.auth.token.role == 'admin';
    }

    // Users - users can read their own, admins can read all
    match /users/{userId} {
      allow read: if request.auth != null && (request.auth.uid == userId || request.auth.token.role == 'admin');
      allow write: if request.auth != null && request.auth.token.role == 'admin';
    }

    // Drivers - authenticated users only
    match /drivers/{driverId} {
      allow read: if request.auth != null;
      allow write: if request.auth != null && request.auth.token.role == 'admin';
    }

    // Partners - authenticated users only
    match /partners/{partnerId} {
      allow read: if request.auth != null;
      allow write: if request.auth != null && request.auth.token.role == 'admin';
    }

    // Partner payments - authenticated users only
    match /partner_payments/{paymentId} {
      allow read: if request.auth != null;
      allow write: if request.auth != null && request.auth.token.role == 'admin';
    }

    // Default deny all other collections
    match /{document=**} {
      allow read, write: if false;
    }
  }
}`;

  const rulesPath = path.join('/Users/danielheydari/Desktop/Website -12', 'firestore.rules');

  fs.writeFileSync(rulesPath, rulesContent);

  console.log(`   ✅ Created firestore.rules file at: ${rulesPath}\n`);

  console.log('═'.repeat(80));
  console.log('📋 NEXT STEPS - CHOOSE ONE:');
  console.log('═'.repeat(80));
  console.log('\n');

  console.log('OPTION 1: Deploy via Firebase CLI (RECOMMENDED)\n');
  console.log('   1. Run: firebase deploy --only firestore:rules');
  console.log('   2. Wait for deployment to complete');
  console.log('   3. Refresh your website\n');

  console.log('OPTION 2: Update manually in Firebase Console\n');
  console.log('   1. Go to: https://console.firebase.google.com');
  console.log('   2. Select your project');
  console.log('   3. Go to: Firestore Database → Rules');
  console.log('   4. Copy the rules from firestore.rules file');
  console.log('   5. Paste and click "Publish"\n');

  console.log('═'.repeat(80));
  console.log('✅ RULES FILE CREATED - Ready to deploy!');
  console.log('═'.repeat(80));
  console.log('\n');

  process.exit(0);
}

updateFirestoreRules().catch(console.error);
