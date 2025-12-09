"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import {
  getAuth,
  signInWithEmailAndPassword,
  sendPasswordResetEmail,
  GoogleAuthProvider,
  signInWithPopup,
  setPersistence,
  browserLocalPersistence,
  onAuthStateChanged,
} from "firebase/auth";
import { collection, query, where, getDocs, addDoc, serverTimestamp } from "firebase/firestore";
import { db } from "@/lib/firebase";

export default function PartnerSigninPage() {
  const router = useRouter();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [keepLoggedIn, setKeepLoggedIn] = useState(true);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState("");
  const [resetEmailSent, setResetEmailSent] = useState(false);
  const [isCheckingAuth, setIsCheckingAuth] = useState(true);

  // Check if user is already logged in
  useEffect(() => {
    const auth = getAuth();
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is already logged in, redirect to dashboard
        router.push("/partners/dashboard/request");
      } else {
        setIsCheckingAuth(false);
      }
    });

    return () => unsubscribe();
  }, [router]);

  // Load saved credentials on mount
  useEffect(() => {
    const savedEmail = localStorage.getItem("partnerEmail");
    const savedPassword = localStorage.getItem("partnerPassword");
    const rememberMe = localStorage.getItem("partnerRememberMe");

    if (rememberMe === "true" && savedEmail) {
      setFormData({
        email: savedEmail,
        password: savedPassword || "",
      });
      setKeepLoggedIn(true);
    }
  }, []);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    setError("");
  };

  const handleSignIn = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError("");

    try {
      const auth = getAuth();

      // Set persistence to LOCAL - keeps user logged in even after browser closes
      await setPersistence(auth, browserLocalPersistence);

      await signInWithEmailAndPassword(auth, formData.email, formData.password);

      // Save credentials if "Remember me" is checked
      if (keepLoggedIn) {
        localStorage.setItem("partnerEmail", formData.email);
        localStorage.setItem("partnerPassword", formData.password);
        localStorage.setItem("partnerRememberMe", "true");
      } else {
        localStorage.removeItem("partnerEmail");
        localStorage.removeItem("partnerPassword");
        localStorage.removeItem("partnerRememberMe");
      }

      router.push("/partners/dashboard/request");
    } catch (error: unknown) {
      console.error("Login error:", error);
      const firebaseError = error as { code?: string };

      if (
        firebaseError.code === "auth/invalid-credential" ||
        firebaseError.code === "auth/wrong-password" ||
        firebaseError.code === "auth/user-not-found"
      ) {
        setError("Invalid email or password.");
      } else if (firebaseError.code === "auth/invalid-email") {
        setError("Please enter a valid email address.");
      } else if (firebaseError.code === "auth/too-many-requests") {
        setError("Too many attempts. Please try again later.");
      } else {
        setError("Login failed. Please try again.");
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleGoogleSignIn = async () => {
    setIsSubmitting(true);
    setError("");

    try {
      const auth = getAuth();

      // Set persistence to LOCAL - keeps user logged in even after browser closes
      await setPersistence(auth, browserLocalPersistence);

      const provider = new GoogleAuthProvider();
      const result = await signInWithPopup(auth, provider);
      const user = result.user;

      // Check if partner document exists
      const partnersRef = collection(db, "partners");
      const q = query(partnersRef, where("userId", "==", user.uid));
      const querySnapshot = await getDocs(q);

      if (querySnapshot.empty) {
        // Create new partner document for Google sign-in users
        const partnerData = {
          userId: user.uid,
          address: "",
          commissionOwed: 0,
          commissionRate: 10,
          companyName: user.displayName || "",
          contactName: user.displayName || "",
          createdAt: serverTimestamp(),
          email: user.email,
          notes: "",
          paymentMethod: "check",
          pendingJobs: [],
          phone: user.phoneNumber || "",
          status: "active",
          totalCommissionEarned: 0,
          totalPaid: 0,
          totalReferrals: 0,
          totalRevenue: 0,
          updatedAt: serverTimestamp(),
        };

        await addDoc(collection(db, "partners"), partnerData);
      }

      router.push("/partners/dashboard/request");
    } catch (error: unknown) {
      console.error("Google sign-in error:", error);
      setError("Google sign-in failed. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleForgotPassword = async () => {
    if (!formData.email) {
      setError("Please enter your email address first.");
      return;
    }

    try {
      const auth = getAuth();
      await sendPasswordResetEmail(auth, formData.email);
      setResetEmailSent(true);
      setError("");
    } catch (error: unknown) {
      console.error("Password reset error:", error);
      const firebaseError = error as { code?: string };

      if (firebaseError.code === "auth/user-not-found") {
        setError("No account found with this email.");
      } else if (firebaseError.code === "auth/invalid-email") {
        setError("Please enter a valid email address.");
      } else {
        setError("Failed to send reset email. Please try again.");
      }
    }
  };

  // Show loading while checking auth status
  if (isCheckingAuth) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-[#0f172a] via-[#1e1e4a] to-[#0f172a]">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-cyan-500 mx-auto"></div>
          <p className="mt-4 text-gray-400">Loading...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen relative flex overflow-hidden">
      {/* Background Image - Left side only (up to where sign-in panel starts) */}
      <div className="absolute inset-y-0 left-0 right-[28%] hidden lg:block">
        <Image
          src="/images/partner-login-bg.webp"
          alt="Partner with CloseBy Towing"
          fill
          className="object-cover object-center"
          priority
        />
      </div>
      {/* Background for tablet */}
      <div className="absolute inset-y-0 left-0 right-[32%] hidden md:block lg:hidden">
        <Image
          src="/images/partner-login-bg.webp"
          alt="Partner with CloseBy Towing"
          fill
          className="object-cover object-center"
          priority
        />
      </div>
      {/* Background for mobile - full width behind */}
      <div className="absolute inset-0 md:hidden">
        <Image
          src="/images/partner-login-bg.webp"
          alt="Partner with CloseBy Towing"
          fill
          className="object-cover object-center"
          priority
        />
      </div>

      {/* Right Side Panel - 28% width, full height */}
      <div className="ml-auto w-full md:w-[32%] lg:w-[28%] min-h-screen relative z-10">
        <div className="h-full bg-gradient-to-b from-[#0f172a] via-[#1e1e4a] to-[#0f172a] backdrop-blur-md flex flex-col">
          {/* Form Content */}
          <div className="flex-1 flex flex-col justify-center px-6 md:px-10 lg:px-12 py-8">
            {/* Header with icon */}
            <div className="text-center mb-10">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-cyan-500 to-blue-600 mb-4 shadow-lg shadow-cyan-500/30">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
              </div>
              <h1 className="text-2xl font-bold text-white">Welcome Back</h1>
              <p className="text-gray-400 text-sm mt-1">Sign in to your partner account</p>
            </div>

            {/* Error Message */}
            {error && (
              <div className="mb-6 bg-red-500/20 border border-red-500/40 rounded-xl p-4 flex items-center gap-3">
                <svg className="w-5 h-5 text-red-400 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                </svg>
                <p className="text-sm text-red-300">{error}</p>
              </div>
            )}

            {/* Reset Email Sent Message */}
            {resetEmailSent && (
              <div className="mb-6 bg-green-500/20 border border-green-500/40 rounded-xl p-4 flex items-center gap-3">
                <svg className="w-5 h-5 text-green-400 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <p className="text-sm text-green-300">
                  Password reset email sent! Check your inbox.
                </p>
              </div>
            )}

            {/* Sign In Form */}
            <form onSubmit={handleSignIn} className="space-y-5">
              {/* Email Field */}
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-300 mb-2"
                >
                  Email Address
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                    <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207" />
                    </svg>
                  </div>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    autoComplete="off"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full h-14 bg-white/10 border border-white/20 rounded-xl pl-12 pr-4 text-white text-base placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all"
                    placeholder="you@email.com"
                  />
                </div>
              </div>

              {/* Password Field */}
              <div>
                <label
                  htmlFor="password"
                  className="block text-sm font-medium text-gray-300 mb-2"
                >
                  Password
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                    <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                    </svg>
                  </div>
                  <input
                    type="password"
                    id="password"
                    name="password"
                    required
                    autoComplete="off"
                    value={formData.password}
                    onChange={handleInputChange}
                    className="w-full h-14 bg-white/10 border border-white/20 rounded-xl pl-12 pr-4 text-white text-base placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all"
                    placeholder="Enter your password"
                  />
                </div>
              </div>

              {/* Keep me logged in & Forgot password */}
              <div className="flex items-center justify-between">
                <label className="flex items-center gap-2 cursor-pointer group">
                  <div className="relative">
                    <input
                      type="checkbox"
                      checked={keepLoggedIn}
                      onChange={(e) => setKeepLoggedIn(e.target.checked)}
                      className="sr-only"
                    />
                    <div className={`w-5 h-5 rounded border-2 transition-all ${keepLoggedIn ? 'bg-cyan-500 border-cyan-500' : 'border-gray-500 group-hover:border-gray-400'}`}>
                      {keepLoggedIn && (
                        <svg className="w-full h-full text-white p-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                        </svg>
                      )}
                    </div>
                  </div>
                  <span className="text-sm text-gray-400 group-hover:text-gray-300 transition">Remember me</span>
                </label>
                <button
                  type="button"
                  onClick={handleForgotPassword}
                  className="text-sm text-cyan-400 hover:text-cyan-300 transition font-medium"
                >
                  Forgot password?
                </button>
              </div>

              {/* Sign In Button */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full h-14 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white rounded-xl font-bold text-lg transition-all disabled:opacity-50 disabled:cursor-not-allowed shadow-lg shadow-cyan-500/30 hover:shadow-cyan-500/50 hover:scale-[1.02] active:scale-[0.98]"
              >
                {isSubmitting ? (
                  <span className="flex items-center justify-center gap-2">
                    <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                    </svg>
                    Signing In...
                  </span>
                ) : (
                  <span className="flex items-center justify-center gap-2">
                    Sign In
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </span>
                )}
              </button>

              {/* Or divider */}
              <div className="relative py-3">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-white/10"></div>
                </div>
                <div className="relative flex justify-center text-sm">
                  <span className="px-4 bg-[#1e1e4a] text-gray-500 uppercase text-xs tracking-wider">or continue with</span>
                </div>
              </div>

              {/* Google Sign In */}
              <button
                type="button"
                onClick={handleGoogleSignIn}
                disabled={isSubmitting}
                className="w-full h-14 bg-white hover:bg-gray-100 border-0 text-gray-800 rounded-xl font-semibold text-base transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-3 shadow-lg hover:scale-[1.02] active:scale-[0.98]"
              >
                <svg className="w-5 h-5" viewBox="0 0 24 24">
                  <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                  <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                  <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                  <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
                </svg>
                Google
              </button>

              {/* Sign Up Link */}
              <div className="text-center pt-4 space-y-3">
                <p className="text-gray-400 text-sm">
                  Don&apos;t have an account?{" "}
                  <Link href="/partners/signup" className="text-cyan-400 hover:text-cyan-300 font-semibold transition">
                    Sign Up
                  </Link>
                </p>
                <p className="text-gray-500 text-xs">
                  Need help? <a href="tel:+18589999293" className="text-cyan-400 hover:text-cyan-300 transition">(858) 999-9293</a>
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
