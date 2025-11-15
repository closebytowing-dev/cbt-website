// src/lib/firebaseAdmin.ts
import { getApps, initializeApp, App, cert, ServiceAccount } from "firebase-admin/app";
import { getFirestore } from "firebase-admin/firestore";

// Validate required environment variables
if (!process.env.FIREBASE_PROJECT_ID || !process.env.FIREBASE_PRIVATE_KEY || !process.env.FIREBASE_CLIENT_EMAIL) {
    throw new Error('Missing required Firebase Admin environment variables');
}

// Clean up the private key - remove quotes if present and handle newlines
let privateKey = process.env.FIREBASE_PRIVATE_KEY;
// Remove surrounding quotes if they exist
if (privateKey.startsWith('"') && privateKey.endsWith('"')) {
    privateKey = privateKey.slice(1, -1);
}
// Replace escaped newlines with actual newlines
privateKey = privateKey.replace(/\\n/g, '\n');

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
