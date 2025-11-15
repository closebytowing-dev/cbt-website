// src/lib/firebaseAdmin.ts
import { getApps, initializeApp, App, cert } from "firebase-admin/app";
import { getFirestore } from "firebase-admin/firestore";

// Use environment variables instead of hardcoding
const serviceAccount = {
    type: "service_account",
    project_id: process.env.FIREBASE_PROJECT_ID,
    private_key: process.env.FIREBASE_PRIVATE_KEY?.replace(/\\n/g, '\n'),
    client_email: process.env.FIREBASE_CLIENT_EMAIL,
};

const app: App = getApps()[0] || initializeApp({
    credential: cert(serviceAccount as any),
    projectId: process.env.FIREBASE_PROJECT_ID
});

export const adminDb = getFirestore(app);
