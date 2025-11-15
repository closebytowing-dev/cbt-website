// src/lib/firebaseAdmin.ts
import { getApps, initializeApp, App, cert, ServiceAccount } from "firebase-admin/app";
import { getFirestore } from "firebase-admin/firestore";

// Validate required environment variables
if (!process.env.FIREBASE_PROJECT_ID || !process.env.FIREBASE_PRIVATE_KEY || !process.env.FIREBASE_CLIENT_EMAIL) {
    throw new Error('Missing required Firebase Admin environment variables');
}

// Clean up the private key - handle both quoted and unquoted formats
let privateKey = process.env.FIREBASE_PRIVATE_KEY;

// Remove surrounding quotes if they exist (for .env.local format)
if (privateKey.startsWith('"') && privateKey.endsWith('"')) {
    privateKey = privateKey.slice(1, -1);
}

// Replace escaped newlines with actual newlines
// This handles both \\n (double backslash from quoted strings) and \n (from Vercel)
privateKey = privateKey.replace(/\\n/g, '\n');

// Debug logging (will be visible in Vercel logs)
console.log('🔧 Firebase Admin SDK Initialization:');
console.log('Project ID:', process.env.FIREBASE_PROJECT_ID);
console.log('Client Email:', process.env.FIREBASE_CLIENT_EMAIL);
console.log('Private Key starts with:', privateKey.substring(0, 50) + '...');
console.log('Private Key ends with:', '...' + privateKey.substring(privateKey.length - 50));

// Create proper service account object matching the JSON format
const serviceAccount: ServiceAccount = {
    projectId: process.env.FIREBASE_PROJECT_ID,
    privateKey: privateKey,
    clientEmail: process.env.FIREBASE_CLIENT_EMAIL,
};

let app: App;

if (getApps().length === 0) {
    app = initializeApp({
        credential: cert(serviceAccount),
    });
} else {
    app = getApps()[0];
}

// Initialize Firestore
export const adminDb = getFirestore(app);
