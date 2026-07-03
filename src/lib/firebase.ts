// src/lib/firebase.ts
// Client-side Firebase configuration

import { initializeApp, getApps } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
};

// Initialize Firebase (only once). initializeApp() only stores config — it makes
// no network requests — so it is safe to run wherever this module gets loaded.
const app = getApps().length === 0 ? initializeApp(firebaseConfig) : getApps()[0];

// Firestore is lazy: getFirestore() does not open a connection until an actual
// query runs, so exporting it here costs nothing on pages that never query.
export const db = getFirestore(app);

// NOTE: We intentionally do NOT call getAuth(app) at module load.
// Doing so boots Firebase Auth — which loads the /__/auth/iframe.js helper and
// hits Google's identitytoolkit API — even on pages that have no login (e.g. the
// homepage, whenever a partner page chunk gets pulled in). That was measurably
// dragging down mobile LCP/performance. Auth pages import getAuth() directly from
// "firebase/auth" and call it on mount, so nothing here needs an eager instance.
