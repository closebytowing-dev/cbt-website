// src/lib/firebase.ts
// Client-side Firebase configuration with lazy loading for performance

import { initializeApp, getApps, type FirebaseApp } from "firebase/app";
import { getFirestore, type Firestore } from "firebase/firestore";
import { getAuth, type Auth } from "firebase/auth";

const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
};

// Lazy initialization - only initialize when actually needed
let _app: FirebaseApp | null = null;
let _db: Firestore | null = null;
let _auth: Auth | null = null;

// Get Firebase app instance (lazy init)
function getApp(): FirebaseApp {
  if (!_app) {
    _app = getApps().length === 0 ? initializeApp(firebaseConfig) : getApps()[0];
  }
  return _app;
}

// Export lazy-initialized instances
// These will only initialize Firebase when first accessed
export const db: Firestore = new Proxy({} as Firestore, {
  get(_, prop) {
    if (!_db) {
      _db = getFirestore(getApp());
    }
    return (_db as Record<string | symbol, unknown>)[prop];
  },
});

export const auth: Auth = new Proxy({} as Auth, {
  get(_, prop) {
    if (!_auth) {
      _auth = getAuth(getApp());
    }
    return (_auth as Record<string | symbol, unknown>)[prop];
  },
});

// For cases where you need the actual instance (not proxy)
export function getFirestoreInstance(): Firestore {
  if (!_db) {
    _db = getFirestore(getApp());
  }
  return _db;
}

export function getAuthInstance(): Auth {
  if (!_auth) {
    _auth = getAuth(getApp());
  }
  return _auth;
}
