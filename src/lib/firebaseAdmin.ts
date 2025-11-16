// src/lib/firebaseAdmin.ts
import { getApps, initializeApp, cert } from "firebase-admin/app";
import { getFirestore } from "firebase-admin/firestore";

// Support both old (single JSON) and new (individual vars) formats
let serviceAccount: any;

if (process.env.FIREBASE_SERVICE_ACCOUNT) {
  // Old format: single JSON string
  serviceAccount = JSON.parse(process.env.FIREBASE_SERVICE_ACCOUNT);
} else if (process.env.FIREBASE_PROJECT_ID && process.env.FIREBASE_CLIENT_EMAIL && process.env.FIREBASE_PRIVATE_KEY) {
  // New format: individual environment variables
  serviceAccount = {
    projectId: process.env.FIREBASE_PROJECT_ID,
    clientEmail: process.env.FIREBASE_CLIENT_EMAIL,
    privateKey: process.env.FIREBASE_PRIVATE_KEY.replace(/\\n/g, '\n'), // Handle escaped newlines
  };
} else {
  throw new Error("Missing Firebase credentials. Need either FIREBASE_SERVICE_ACCOUNT or (FIREBASE_PROJECT_ID, FIREBASE_CLIENT_EMAIL, FIREBASE_PRIVATE_KEY)");
}

let app;
if (getApps().length === 0) {
  app = initializeApp({
    credential: cert(serviceAccount),
  });
  console.log("✅ Firebase Admin initialized with projectId:", serviceAccount.projectId);
} else {
  app = getApps()[0];
}

export const adminDb = getFirestore(app);
