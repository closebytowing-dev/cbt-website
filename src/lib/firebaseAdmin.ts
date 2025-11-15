// src/lib/firebaseAdmin.ts
import { getApps, initializeApp, cert } from "firebase-admin/app";
import { getFirestore } from "firebase-admin/firestore";

if (!process.env.FIREBASE_SERVICE_ACCOUNT) {
  throw new Error("Missing FIREBASE_SERVICE_ACCOUNT");
}

const serviceAccount = JSON.parse(process.env.FIREBASE_SERVICE_ACCOUNT);

let app;
if (getApps().length === 0) {
  app = initializeApp({
    credential: cert(serviceAccount),
  });
  console.log("✅ Firebase Admin initialized");
} else {
  app = getApps()[0];
}

export const adminDb = getFirestore(app);
