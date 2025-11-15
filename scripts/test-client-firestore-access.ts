// Test script to verify client-side Firestore access
import { initializeApp } from 'firebase/app';
import { getFirestore, collection, getDocs } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
};

async function testClientAccess() {
  try {
    console.log('Initializing Firebase client...');
    const app = initializeApp(firebaseConfig);
    const db = getFirestore(app);

    console.log('Attempting to read services collection...');
    const servicesSnapshot = await getDocs(collection(db, "services"));

    console.log(`✅ SUCCESS: Found ${servicesSnapshot.size} services`);

    servicesSnapshot.forEach(doc => {
      console.log(`  - ${doc.id}: ${doc.data().name}`);
    });

    process.exit(0);
  } catch (error: any) {
    console.error('❌ ERROR accessing Firestore:');
    console.error('  Code:', error.code);
    console.error('  Message:', error.message);
    console.error('  Full error:', error);
    process.exit(1);
  }
}

testClientAccess();
