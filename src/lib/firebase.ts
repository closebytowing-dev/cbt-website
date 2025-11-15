// src/lib/firebase.ts
// Client-side Firebase configuration

import { initializeApp, getApps } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
// import { initializeAppCheck, ReCaptchaV3Provider } from "firebase/app-check"; // Disabled - not needed

const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
};

// Initialize Firebase (only once)
const app = getApps().length === 0 ? initializeApp(firebaseConfig) : getApps()[0];

// Firebase App Check - DISABLED
// Why: Not needed for this use case. The website has:
// - Public pricing data (anyone can read)
// - Secure API routes for job creation (server-side validation)
// - Square payment API (already secure)
// - Firestore rules prevent abuse
//
// Enable App Check only if you experience:
// - High bot traffic costs
// - Abuse of Firebase services
// - DDoS attacks on Firestore
//
// To enable: Get reCAPTCHA key from Firebase Console → App Check (not google.com/recaptcha)
/*
if (typeof window !== 'undefined' && process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY) {
  try {
    initializeAppCheck(app, {
      provider: new ReCaptchaV3Provider(process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY),
      isTokenAutoRefreshEnabled: true
    });
    console.log('✅ Firebase App Check enabled');
  } catch (error) {
    console.warn('⚠️ App Check failed:', error);
  }
}
*/
console.log('ℹ️ Firebase App Check is DISABLED (not needed for this use case)');

// Initialize Firestore
export const db = getFirestore(app);

// Initialize Firebase Auth
export const auth = getAuth(app);
