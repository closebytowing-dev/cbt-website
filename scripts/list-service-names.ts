import { initializeApp } from 'firebase/app';
import { getFirestore, collection, getDocs } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

async function listServiceNames() {
  console.log('📋 Listing all service names from Firebase:\n');

  const servicesSnapshot = await getDocs(collection(db, 'services'));

  servicesSnapshot.forEach((doc) => {
    const data = doc.data();
    console.log(`ID: ${doc.id}`);
    console.log(`  name: "${data.name}"`);
    console.log(`  basePrice: $${data.basePrice || data.price || '?'}`);
    console.log('');
  });
}

listServiceNames();
