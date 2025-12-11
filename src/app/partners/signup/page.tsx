"use client";

import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { doc, setDoc, serverTimestamp } from "firebase/firestore";
import { db } from "@/lib/firebase";
import {
  getAuth,
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
  setPersistence,
  browserLocalPersistence,
} from "firebase/auth";

export default function PartnerSignupPage() {
  const router = useRouter();
  const isPopupOpen = useRef(false);

  // Set persistence once on component mount
  useEffect(() => {
    const auth = getAuth();
    setPersistence(auth, browserLocalPersistence);
  }, []);

  const [formData, setFormData] = useState({
    businessName: "",
    email: "",
    password: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isGoogleLoading, setIsGoogleLoading] = useState(false);
  const [error, setError] = useState("");
  const [showCreatingAccount, setShowCreatingAccount] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    setError("");
  };

  const handleSignUp = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError("");

    try {
      if (formData.password.length < 6) {
        setError("Password must be at least 6 characters long.");
        setIsSubmitting(false);
        return;
      }

      const auth = getAuth();
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        formData.email,
        formData.password
      );

      const userId = userCredential.user.uid;

      const partnerData = {
        userId: userId,
        address: "",
        commissionOwed: 0,
        commissionRate: 10,
        companyName: formData.businessName,
        contactName: "",
        createdAt: serverTimestamp(),
        email: formData.email,
        notes: "",
        paymentMethod: "check",
        pendingJobs: [],
        phone: "",
        status: "active",
        totalCommissionEarned: 0,
        totalPaid: 0,
        totalReferrals: 0,
        totalRevenue: 0,
        updatedAt: serverTimestamp(),
      };

      await setDoc(doc(db, "partners", userCredential.user.uid), partnerData);

      // Show creating account overlay
      setShowCreatingAccount(true);

      // Wait 3 seconds then redirect
      setTimeout(() => {
        router.push("/partners/dashboard/request");
      }, 3000);
    } catch (error: unknown) {
      console.error("Error creating partner:", error);
      const firebaseError = error as { code?: string };

      if (firebaseError.code === "auth/email-already-in-use") {
        setError("An account with this email already exists. Try signing in.");
      } else if (firebaseError.code === "auth/invalid-email") {
        setError("Please enter a valid email address.");
      } else if (firebaseError.code === "auth/weak-password") {
        setError("Password is too weak. Please use at least 6 characters.");
      } else {
        setError("Something went wrong. Please try again.");
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleGoogleSignUp = async () => {
    // Prevent multiple popup invocations
    if (isPopupOpen.current) return;
    isPopupOpen.current = true;

    setIsGoogleLoading(true);
    setError("");

    try {
      const auth = getAuth();
      const provider = new GoogleAuthProvider();

      const result = await signInWithPopup(auth, provider);
      const user = result.user;

      // Create partner record in Firestore
      const partnerData = {
        userId: user.uid,
        address: "",
        commissionOwed: 0,
        commissionRate: 10,
        companyName: user.displayName || "",
        contactName: user.displayName || "",
        createdAt: serverTimestamp(),
        email: user.email || "",
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

      await setDoc(doc(db, "partners", user.uid), partnerData);

      // Show creating account overlay
      setShowCreatingAccount(true);

      // Wait 3 seconds then redirect
      setTimeout(() => {
        router.push("/partners/dashboard/request");
      }, 3000);
    } catch (error: unknown) {
      console.error("Google sign-up error:", error);
      const firebaseError = error as { code?: string };

      if (firebaseError.code === "auth/popup-closed-by-user") {
        setError("Sign-up was cancelled. Please try again.");
      } else if (firebaseError.code === "auth/account-exists-with-different-credential") {
        setError("An account already exists with this email. Try signing in instead.");
      } else {
        setError("Something went wrong with Google sign-up. Please try again.");
      }
    } finally {
      setIsGoogleLoading(false);
      isPopupOpen.current = false;
    }
  };

  return (
    <>
    {/* Full-screen Creating Account Overlay */}
    {showCreatingAccount && (
      <div className="fixed inset-0 z-[9999] bg-gradient-to-br from-[#0f172a] via-[#1e3a5f] to-[#0f172a] flex flex-col items-center justify-center">
        {/* Animated background elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        </div>

        {/* Content */}
        <div className="relative z-10 flex flex-col items-center">
          {/* Stylish spinner */}
          <div className="relative w-24 h-24 mb-8">
            {/* Outer ring */}
            <div className="absolute inset-0 border-4 border-blue-500/20 rounded-full"></div>
            {/* Spinning ring */}
            <div className="absolute inset-0 border-4 border-transparent border-t-cyan-400 border-r-blue-500 rounded-full animate-spin" style={{ animationDuration: '1s' }}></div>
            {/* Inner spinning ring */}
            <div className="absolute inset-2 border-4 border-transparent border-b-cyan-300 border-l-blue-400 rounded-full animate-spin" style={{ animationDuration: '1.5s', animationDirection: 'reverse' }}></div>
            {/* Center dot */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-4 h-4 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full animate-pulse"></div>
            </div>
          </div>

          {/* Text */}
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-3 text-center">
            Creating your account
          </h2>
          <p className="text-gray-400 text-lg text-center">
            Setting up your partner dashboard...
          </p>

          {/* Progress dots */}
          <div className="flex gap-2 mt-8">
            <div className="w-2 h-2 bg-cyan-400 rounded-full animate-bounce" style={{ animationDelay: '0s' }}></div>
            <div className="w-2 h-2 bg-cyan-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
            <div className="w-2 h-2 bg-cyan-400 rounded-full animate-bounce" style={{ animationDelay: '0.4s' }}></div>
          </div>
        </div>
      </div>
    )}

    {/* Hero Section */}
    <div className="min-h-[95vh] relative overflow-x-auto">
      {/* Background Image - Only this squeezes */}
      <div className="absolute inset-0 min-w-full">
        <Image
          src="/images/partner-signup-bg.webp"
          alt="Partner with CloseBy Towing"
          fill
          className="object-cover object-top"
          priority
        />
        <div className="absolute inset-0 bg-black/40" />
      </div>

      {/* Main Content - Fixed sizes, horizontal scroll if needed */}
      <div className="relative z-10 flex items-start justify-end min-w-max px-8 lg:px-16 pt-4">

        {/* Right side container - Auth Card + Tier Cards - with banners positioned relative to it */}
        <div className="flex flex-col items-end gap-8 flex-shrink-0 relative">
          {/* Banners - Absolutely positioned to the left of auth card */}
          <div className="hidden lg:flex flex-col gap-6 absolute right-[105%] top-[7vh]">
            {/* Blue Banner */}
            <div className="relative flex-shrink-0">
              <div className="bg-black/30 backdrop-blur-[1px] px-14 py-10 rounded-2xl shadow-2xl relative w-[480px] overflow-hidden">
                <h3 className="text-4xl font-bold text-white mb-3 relative z-10 drop-shadow-[0_0_10px_rgba(255,255,255,0.5)]">You Send Us Tows</h3>
                <p className="text-white text-xl relative z-10 mb-4 drop-shadow-[0_0_8px_rgba(255,255,255,0.4)]">
                  Earn <span className="font-extrabold text-white bg-black px-3 py-1 rounded-lg drop-shadow-[0_0_10px_rgba(255,255,255,0.5)]">10-20%</span> commission on every referral
                </p>
                <ul className="space-y-2 relative z-10">
                  <li className="flex items-center gap-2 text-white text-lg drop-shadow-[0_0_6px_rgba(255,255,255,0.4)]">
                    <svg className="w-6 h-6 text-white drop-shadow-[0_0_6px_rgba(255,255,255,0.5)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Quick 30-second referral form</span>
                  </li>
                  <li className="flex items-center gap-2 text-white text-lg drop-shadow-[0_0_6px_rgba(255,255,255,0.4)]">
                    <svg className="w-6 h-6 text-white drop-shadow-[0_0_6px_rgba(255,255,255,0.5)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Track all your referrals in real-time</span>
                  </li>
                  <li className="flex items-center gap-2 text-white text-lg drop-shadow-[0_0_6px_rgba(255,255,255,0.4)]">
                    <svg className="w-6 h-6 text-white drop-shadow-[0_0_6px_rgba(255,255,255,0.5)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Get paid weekly or faster</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Green Banner */}
            <div className="relative flex-shrink-0">
              <div className="bg-black/30 backdrop-blur-[1px] px-14 py-10 rounded-2xl shadow-2xl relative w-[480px] overflow-hidden">
                <div className="flex items-center gap-4 mb-3 relative z-10">
                  <h3 className="text-4xl font-bold text-white drop-shadow-[0_0_10px_rgba(255,255,255,0.5)]">We Send You Work</h3>
                  <span className="text-xl font-extrabold text-white bg-black px-3 py-1 rounded-lg drop-shadow-[0_0_10px_rgba(255,255,255,0.5)]">FREE</span>
                </div>
                <p className="text-white text-xl relative z-10 mb-4 drop-shadow-[0_0_8px_rgba(255,255,255,0.4)]">
                  We send customers <span className="font-semibold text-white drop-shadow-[0_0_10px_rgba(255,255,255,0.6)]">straight to you</span>
                </p>
                <ul className="space-y-2 relative z-10">
                  <li className="flex items-center gap-2 text-white text-lg drop-shadow-[0_0_6px_rgba(255,255,255,0.4)]">
                    <svg className="w-6 h-6 text-white drop-shadow-[0_0_6px_rgba(255,255,255,0.5)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Free leads from our towing customers</span>
                  </li>
                  <li className="flex items-center gap-2 text-white text-lg drop-shadow-[0_0_6px_rgba(255,255,255,0.4)]">
                    <svg className="w-6 h-6 text-white drop-shadow-[0_0_6px_rgba(255,255,255,0.5)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    <span>No fees or hidden charges</span>
                  </li>
                  <li className="flex items-center gap-2 text-white text-lg drop-shadow-[0_0_6px_rgba(255,255,255,0.4)]">
                    <svg className="w-6 h-6 text-white drop-shadow-[0_0_6px_rgba(255,255,255,0.5)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Grow your business effortlessly</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        {/* Auth Card - Fixed width, never shrinks */}
        <div className="w-[512px] flex-shrink-0">
          <div className="bg-gray-200/30 backdrop-blur-[2px] rounded-2xl shadow-2xl overflow-hidden border border-white/40">
          {/* Logo - Full width, cropped top/bottom empty space */}
          <div className="overflow-hidden">
            <Image
              src="/images/signup-logo.webp"
              alt="CloseBy Towing"
              width={400}
              height={400}
              className="w-[80%] h-auto mx-auto -my-[20%]"
              priority
            />
          </div>

          {/* Form Content */}
          <div className="p-8">
            {/* Error Message */}
            {error && (
              <div className="mb-6 bg-red-500/20 border border-red-500/50 rounded-lg p-3">
                <p className="text-sm text-red-300">{error}</p>
              </div>
            )}

            {/* Sign Up Form */}
            <form onSubmit={handleSignUp} className="space-y-5">
              {/* Google Sign Up Button - at top */}
              <button
                type="button"
                onClick={handleGoogleSignUp}
                disabled={isGoogleLoading || isSubmitting}
                className="w-full bg-red-600 hover:bg-red-700 text-white py-3 rounded-lg font-semibold text-base transition disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-3"
              >
                {isGoogleLoading ? (
                  <span className="flex items-center justify-center gap-2">
                    <svg
                      className="animate-spin h-5 w-5 text-gray-600"
                      viewBox="0 0 24 24"
                    >
                      <circle
                        className="opacity-25"
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="4"
                        fill="none"
                      />
                      <path
                        className="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                      />
                    </svg>
                    Signing up...
                  </span>
                ) : (
                  <>
                    <svg className="w-6 h-6" viewBox="0 0 24 24">
                      <path fill="#ffffff" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                      <path fill="#ffffff" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                      <path fill="#ffffff" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                      <path fill="#ffffff" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
                    </svg>
                    Sign up with Google
                  </>
                )}
              </button>

              {/* Divider */}
              <div className="relative my-4">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-gray-600"></div>
                </div>
                <div className="relative flex justify-center text-sm">
                  <span className="px-3 bg-white/60 text-gray-700">or continue with email</span>
                </div>
              </div>

              <div>
                <label
                  htmlFor="businessName"
                  className="block text-sm font-medium text-gray-900 mb-2"
                >
                  Business Name
                </label>
                <input
                  type="text"
                  id="businessName"
                  name="businessName"
                  required
                  value={formData.businessName}
                  onChange={handleInputChange}
                  className="w-full h-12 rounded-lg bg-white border border-gray-300 px-4 text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="Your Business Name"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-900 mb-2"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full h-12 rounded-lg bg-white border border-gray-300 px-4 text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="you@email.com"
                />
              </div>

              <div>
                <label
                  htmlFor="password"
                  className="block text-sm font-medium text-gray-900 mb-2"
                >
                  Password
                </label>
                <input
                  type="password"
                  id="password"
                  name="password"
                  required
                  value={formData.password}
                  onChange={handleInputChange}
                  className="w-full h-12 rounded-lg bg-white border border-gray-300 px-4 text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="6+ characters"
                  minLength={6}
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting || isGoogleLoading}
                className="w-full bg-red-600 hover:bg-red-700 text-white py-3 rounded-lg font-bold text-lg transition disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? (
                  <span className="flex items-center justify-center gap-2">
                    <svg
                      className="animate-spin h-5 w-5"
                      viewBox="0 0 24 24"
                    >
                      <circle
                        className="opacity-25"
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="4"
                        fill="none"
                      />
                      <path
                        className="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                      />
                    </svg>
                    Creating Account...
                  </span>
                ) : (
                  "Join Now"
                )}
              </button>

            </form>
          </div>
        </div>
        </div>

        </div>
      </div>
    </div>

    {/* ═══════════════════════════════════════════════════════════════════════════════
        MAGNIFICENT BRIDGE SECTION - Where Hero Meets Value
        A revolutionary design that creates visual poetry between sections
    ═══════════════════════════════════════════════════════════════════════════════ */}

    {/* The Grand Transition - Flowing Wave with Embedded Header */}
    <div className="relative z-30 -mt-[20vh]">
      {/* Animated SVG Wave Transition */}
      <div className="absolute inset-x-0 top-[120px] h-[150px] overflow-hidden">
        <svg
          className="absolute w-full h-full"
          viewBox="0 0 1440 300"
          preserveAspectRatio="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <linearGradient id="waveGradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#1e1e4a" stopOpacity="0.9">
                <animate attributeName="stop-color" values="#1e1e4a;#2d2d6a;#1e1e4a" dur="4s" repeatCount="indefinite"/>
              </stop>
              <stop offset="50%" stopColor="#2d2d6a" stopOpacity="0.95">
                <animate attributeName="stop-color" values="#2d2d6a;#1e1e4a;#2d2d6a" dur="4s" repeatCount="indefinite"/>
              </stop>
              <stop offset="100%" stopColor="#1e1e4a" stopOpacity="0.9">
                <animate attributeName="stop-color" values="#1e1e4a;#2d2d6a;#1e1e4a" dur="4s" repeatCount="indefinite"/>
              </stop>
            </linearGradient>
            <linearGradient id="shimmerGradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="white" stopOpacity="0">
                <animate attributeName="offset" values="-0.5;1.5" dur="3s" repeatCount="indefinite"/>
              </stop>
              <stop offset="50%" stopColor="white" stopOpacity="0.1">
                <animate attributeName="offset" values="0;2" dur="3s" repeatCount="indefinite"/>
              </stop>
              <stop offset="100%" stopColor="white" stopOpacity="0">
                <animate attributeName="offset" values="0.5;2.5" dur="3s" repeatCount="indefinite"/>
              </stop>
            </linearGradient>
          </defs>
          {/* Main wave */}
          <path
            d="M0,100 C360,200 720,0 1080,100 C1260,150 1380,80 1440,100 L1440,300 L0,300 Z"
            fill="url(#waveGradient)"
          >
            <animate
              attributeName="d"
              values="M0,100 C360,200 720,0 1080,100 C1260,150 1380,80 1440,100 L1440,300 L0,300 Z;
                      M0,120 C360,20 720,180 1080,80 C1260,40 1380,120 1440,80 L1440,300 L0,300 Z;
                      M0,100 C360,200 720,0 1080,100 C1260,150 1380,80 1440,100 L1440,300 L0,300 Z"
              dur="8s"
              repeatCount="indefinite"
            />
          </path>
          {/* Shimmer overlay */}
          <path
            d="M0,100 C360,200 720,0 1080,100 C1260,150 1380,80 1440,100 L1440,300 L0,300 Z"
            fill="url(#shimmerGradient)"
          >
            <animate
              attributeName="d"
              values="M0,100 C360,200 720,0 1080,100 C1260,150 1380,80 1440,100 L1440,300 L0,300 Z;
                      M0,120 C360,20 720,180 1080,80 C1260,40 1380,120 1440,80 L1440,300 L0,300 Z;
                      M0,100 C360,200 720,0 1080,100 C1260,150 1380,80 1440,100 L1440,300 L0,300 Z"
              dur="8s"
              repeatCount="indefinite"
            />
          </path>
        </svg>
      </div>

      {/* The Floating Header - Embedded in the wave */}
      <div className="relative z-40 flex justify-center lg:justify-end lg:pr-[25%] pt-2">
        <div className="relative group">
          {/* Glowing orb behind header */}
          <div className="absolute -inset-10 bg-gradient-to-r from-blue-500/20 via-purple-500/30 to-pink-500/20 rounded-full blur-3xl opacity-60 group-hover:opacity-80 transition-opacity duration-700 animate-pulse"></div>

          {/* Main header card with glass morphism */}
          <div className="relative bg-white/95 backdrop-blur-xl rounded-3xl px-12 py-10 shadow-[0_20px_60px_-15px_rgba(0,0,0,0.4)] border border-white/50 text-center max-w-3xl overflow-hidden">
            {/* Animated border glow */}
            <div className="absolute inset-0 rounded-3xl">
              <div className="absolute inset-[-2px] bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-3xl opacity-20 blur-sm animate-spin-slow"></div>
            </div>

            {/* Floating particles inside */}
            <div className="absolute inset-0 overflow-hidden rounded-3xl">
              <div className="absolute w-2 h-2 bg-blue-400 rounded-full top-4 left-8 animate-float-slow opacity-40"></div>
              <div className="absolute w-1.5 h-1.5 bg-purple-400 rounded-full top-12 right-12 animate-float-medium opacity-50"></div>
              <div className="absolute w-1 h-1 bg-pink-400 rounded-full bottom-8 left-1/4 animate-float-fast opacity-40"></div>
              <div className="absolute w-2 h-2 bg-cyan-400 rounded-full bottom-6 right-1/3 animate-float-slow opacity-30"></div>
            </div>

            {/* Content */}
            <div className="relative z-10">
              <h2 className="text-4xl md:text-5xl font-black bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 bg-clip-text text-transparent mb-4 leading-tight">
                How Our Partnership Works
              </h2>
              <p className="text-lg text-gray-600 max-w-xl mx-auto leading-relaxed">
                A simple, profitable relationship that benefits both of us. Here&apos;s exactly how it works.
              </p>

                          </div>
          </div>

          {/* Connection lines flowing down */}
          <div className="absolute left-1/2 -translate-x-1/2 top-full w-1 h-16 bg-gradient-to-b from-gray-300 to-transparent"></div>
        </div>
      </div>
    </div>

    {/* Main Value Section with Integrated Tier Cards */}
    <section className="relative bg-gradient-to-b from-[#1e1e4a] via-[#1a1a40] to-white pt-32 pb-24 px-6 overflow-hidden">
      {/* Ambient background effects */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-blue-500/5 rounded-full blur-3xl"></div>
        <div className="absolute top-1/3 right-1/4 w-[500px] h-[500px] bg-purple-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-1/2 w-[800px] h-[400px] bg-white/50 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">

        {/* ═══ TIER CARDS - Horizontal Premium Display ═══ */}
        <div className="mb-24">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-white mb-3">Choose Your Partnership Tier</h3>
            <p className="text-gray-400">The more you refer, the more you earn</p>
          </div>

          <div className="grid lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {/* Silver Tier */}
            <div className="group relative">
              <div className="absolute inset-0 bg-gradient-to-br from-gray-400 to-gray-600 rounded-3xl blur-xl opacity-30 group-hover:opacity-50 transition-opacity"></div>
              <div className="relative bg-gradient-to-br from-gray-800/80 to-gray-900/80 backdrop-blur-xl rounded-3xl p-8 border border-gray-600/30 hover:border-gray-500/50 transition-all duration-500 hover:transform hover:scale-[1.02] hover:shadow-2xl">
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-gray-400/20 to-transparent rounded-full blur-2xl"></div>
                <div className="relative">
                  <div className="flex items-center justify-between mb-6">
                    <span className="text-gray-400 text-sm font-medium uppercase tracking-wider">Silver</span>
                    <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-gray-300 to-gray-500 flex items-center justify-center">
                      <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                      </svg>
                    </div>
                  </div>
                  <div className="text-7xl font-black text-white mb-2 tracking-tight">10<span className="text-4xl">%</span></div>
                  <p className="text-gray-400 mb-6">Commission per referral</p>
                  <div className="h-px bg-gradient-to-r from-transparent via-gray-600 to-transparent mb-6"></div>
                  <ul className="space-y-3 text-gray-300 text-sm">
                    <li className="flex items-center gap-3">
                      <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"/></svg>
                      0-10 referrals/month
                    </li>
                    <li className="flex items-center gap-3">
                      <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"/></svg>
                      Weekly payments
                    </li>
                    <li className="flex items-center gap-3">
                      <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"/></svg>
                      Partner dashboard access
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Gold Tier - Featured */}
            <div className="group relative lg:-mt-4 lg:mb-4">
              <div className="absolute inset-0 bg-gradient-to-br from-yellow-400 to-amber-600 rounded-3xl blur-xl opacity-40 group-hover:opacity-60 transition-opacity"></div>
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-gradient-to-r from-yellow-400 to-amber-500 text-black text-xs font-bold px-4 py-1 rounded-full shadow-lg">
                MOST POPULAR
              </div>
              <div className="relative bg-gradient-to-br from-yellow-900/80 to-amber-950/80 backdrop-blur-xl rounded-3xl p-8 border-2 border-yellow-500/50 hover:border-yellow-400/70 transition-all duration-500 hover:transform hover:scale-[1.02] hover:shadow-2xl hover:shadow-yellow-500/20">
                <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-br from-yellow-400/20 to-transparent rounded-full blur-2xl"></div>
                <div className="relative">
                  <div className="flex items-center justify-between mb-6">
                    <span className="text-yellow-400 text-sm font-medium uppercase tracking-wider">Gold</span>
                    <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-yellow-400 to-amber-600 flex items-center justify-center shadow-lg shadow-yellow-500/30">
                      <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                      </svg>
                    </div>
                  </div>
                  <div className="text-7xl font-black text-white mb-2 tracking-tight">15<span className="text-4xl">%</span></div>
                  <p className="text-yellow-200/70 mb-6">Commission per referral</p>
                  <div className="h-px bg-gradient-to-r from-transparent via-yellow-500/50 to-transparent mb-6"></div>
                  <ul className="space-y-3 text-yellow-100/90 text-sm">
                    <li className="flex items-center gap-3">
                      <svg className="w-5 h-5 text-yellow-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"/></svg>
                      11-25 referrals/month
                    </li>
                    <li className="flex items-center gap-3">
                      <svg className="w-5 h-5 text-yellow-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"/></svg>
                      Bi-weekly payments
                    </li>
                    <li className="flex items-center gap-3">
                      <svg className="w-5 h-5 text-yellow-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"/></svg>
                      Priority support line
                    </li>
                    <li className="flex items-center gap-3">
                      <svg className="w-5 h-5 text-yellow-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"/></svg>
                      Monthly bonus opportunities
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Platinum Tier */}
            <div className="group relative">
              <div className="absolute inset-0 bg-gradient-to-br from-purple-400 to-violet-600 rounded-3xl blur-xl opacity-30 group-hover:opacity-50 transition-opacity"></div>
              <div className="relative bg-gradient-to-br from-purple-900/80 to-violet-950/80 backdrop-blur-xl rounded-3xl p-8 border border-purple-500/30 hover:border-purple-400/50 transition-all duration-500 hover:transform hover:scale-[1.02] hover:shadow-2xl hover:shadow-purple-500/20">
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-purple-400/20 to-transparent rounded-full blur-2xl"></div>
                <div className="relative">
                  <div className="flex items-center justify-between mb-6">
                    <span className="text-purple-400 text-sm font-medium uppercase tracking-wider">Platinum</span>
                    <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-purple-400 to-violet-600 flex items-center justify-center">
                      <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                      </svg>
                    </div>
                  </div>
                  <div className="text-7xl font-black text-white mb-2 tracking-tight">20<span className="text-4xl">%</span></div>
                  <p className="text-purple-200/70 mb-6">Commission per referral</p>
                  <div className="h-px bg-gradient-to-r from-transparent via-purple-500/50 to-transparent mb-6"></div>
                  <ul className="space-y-3 text-purple-100/90 text-sm">
                    <li className="flex items-center gap-3">
                      <svg className="w-5 h-5 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"/></svg>
                      26+ referrals/month
                    </li>
                    <li className="flex items-center gap-3">
                      <svg className="w-5 h-5 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"/></svg>
                      Same-day payments
                    </li>
                    <li className="flex items-center gap-3">
                      <svg className="w-5 h-5 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"/></svg>
                      Dedicated account manager
                    </li>
                    <li className="flex items-center gap-3">
                      <svg className="w-5 h-5 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"/></svg>
                      Exclusive bonus programs
                    </li>
                    <li className="flex items-center gap-3">
                      <svg className="w-5 h-5 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"/></svg>
                      Marketing materials
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ═══ TWO PATHS SECTION ═══ */}
        <div className="grid lg:grid-cols-2 gap-8 mb-20">
          {/* Path 1: You Send Us Tows */}
          <div className="group relative">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-cyan-600 rounded-3xl blur-[72px] opacity-20 group-hover:opacity-30 transition-opacity"></div>
            <div className="relative bg-white rounded-3xl p-10 shadow-xl border border-gray-100 hover:shadow-2xl transition-all duration-500">
              <div className="flex items-center gap-5 mb-10">
                <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-blue-500 to-blue-700 flex items-center justify-center shadow-lg shadow-blue-500/30">
                  <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                  </svg>
                </div>
                <h3 className="text-3xl font-bold text-gray-900">You Send Us Tows</h3>
              </div>

              <div className="space-y-8">
                <div className="flex gap-5">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-gradient-to-br from-blue-500 to-blue-700 flex items-center justify-center text-white font-bold text-xl shadow-lg">1</div>
                  <div>
                    <h4 className="text-xl font-semibold text-gray-900 mb-2">Customer Needs a Tow</h4>
                    <p className="text-gray-600 text-lg">Your customer&apos;s car breaks down or needs transport and you don&apos;t offer towing services.</p>
                  </div>
                </div>
                <div className="flex gap-5">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-gradient-to-br from-blue-500 to-blue-700 flex items-center justify-center text-white font-bold text-xl shadow-lg">2</div>
                  <div>
                    <h4 className="text-xl font-semibold text-gray-900 mb-2">Submit a Quick Form</h4>
                    <p className="text-gray-600 text-lg">Your shop is already set as the destination. Just enter pickup location and customer phone - <span className="text-blue-600 font-semibold">that&apos;s it!</span></p>
                  </div>
                </div>
                <div className="flex gap-5">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-gradient-to-br from-blue-500 to-blue-700 flex items-center justify-center text-white font-bold text-xl shadow-lg">3</div>
                  <div>
                    <h4 className="text-xl font-semibold text-gray-900 mb-2">Get Paid Commission</h4>
                    <p className="text-gray-600 text-lg">Earn <span className="text-blue-600 font-semibold">10-20% of the service fee</span> for every successful referral.</p>
                  </div>
                </div>
              </div>

              <div className="mt-10 p-5 bg-gradient-to-r from-blue-50 to-cyan-50 rounded-xl border border-blue-200">
                <p className="text-blue-800 text-base">
                  <span className="font-semibold">Example:</span> Refer a $150 tow = earn $15-$30 commission. It adds up fast!
                </p>
              </div>
            </div>
          </div>

          {/* Path 2: We Send You Work */}
          <div className="group relative">
            <div className="absolute inset-0 bg-gradient-to-br from-green-500 to-emerald-600 rounded-3xl blur-xl opacity-20 group-hover:opacity-30 transition-opacity"></div>
            <div className="relative bg-white rounded-3xl p-10 shadow-xl border border-gray-100 hover:shadow-2xl transition-all duration-500">
              <div className="flex items-center gap-5 mb-10">
                <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-green-500 to-green-700 flex items-center justify-center shadow-lg shadow-green-500/30">
                  <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                  </svg>
                </div>
                <div className="flex items-center gap-4">
                  <h3 className="text-3xl font-bold text-gray-900">We Send You Work</h3>
                  <span className="text-xl font-extrabold text-white bg-gradient-to-r from-green-500 to-emerald-600 px-4 py-2 rounded-lg shadow-lg shadow-green-500/30">FREE</span>
                </div>
              </div>

              <div className="space-y-8">
                <div className="flex gap-5">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-gradient-to-br from-green-500 to-green-700 flex items-center justify-center text-white font-bold text-xl shadow-lg">1</div>
                  <div>
                    <h4 className="text-xl font-semibold text-gray-900 mb-2">We Tow a Vehicle</h4>
                    <p className="text-gray-600 text-lg">A customer&apos;s car needs repairs after we tow it - transmission, engine, body work, etc.</p>
                  </div>
                </div>
                <div className="flex gap-5">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-gradient-to-br from-green-500 to-green-700 flex items-center justify-center text-white font-bold text-xl shadow-lg">2</div>
                  <div>
                    <h4 className="text-xl font-semibold text-gray-900 mb-2">We Recommend You</h4>
                    <p className="text-gray-600 text-lg">We send the customer directly to your shop as a trusted partner.</p>
                  </div>
                </div>
                <div className="flex gap-5">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-gradient-to-br from-green-500 to-green-700 flex items-center justify-center text-white font-bold text-xl shadow-lg">3</div>
                  <div>
                    <h4 className="text-xl font-semibold text-gray-900 mb-2">You Get New Business</h4>
                    <p className="text-gray-600 text-lg">New customers walk through your door - <span className="text-green-600 font-semibold">completely free</span> for you.</p>
                  </div>
                </div>
              </div>

              <div className="mt-10 p-5 bg-gradient-to-r from-green-50 to-emerald-50 rounded-xl border border-green-200">
                <p className="text-green-800 text-base">
                  <span className="font-semibold">No fees, no catch:</span> We send you business because happy customers make us all successful.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* ═══ WHY PARTNER SECTION ═══ */}
        <div className="relative">
          <div className="absolute inset-0 bg-gradient-to-r from-gray-100 to-gray-200 rounded-3xl"></div>
          <div className="relative bg-white/80 backdrop-blur-sm rounded-3xl p-12 border border-gray-200 shadow-xl">
            <h3 className="text-3xl font-bold text-gray-900 text-center mb-12">Why Businesses Partner With Us</h3>
            <div className="grid md:grid-cols-4 gap-8">
              <div className="text-center group">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-yellow-400 to-amber-500 flex items-center justify-center mx-auto mb-4 shadow-lg shadow-yellow-500/30 group-hover:scale-110 transition-transform">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h4 className="text-lg font-semibold text-gray-900 mb-2">Passive Income</h4>
                <p className="text-gray-600 text-sm">Earn money from customers you couldn&apos;t serve anyway</p>
              </div>
              <div className="text-center group">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-purple-400 to-violet-500 flex items-center justify-center mx-auto mb-4 shadow-lg shadow-purple-500/30 group-hover:scale-110 transition-transform">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <h4 className="text-lg font-semibold text-gray-900 mb-2">New Customers</h4>
                <p className="text-gray-600 text-sm">We bring you business you never would have found</p>
              </div>
              <div className="text-center group">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-400 to-cyan-500 flex items-center justify-center mx-auto mb-4 shadow-lg shadow-blue-500/30 group-hover:scale-110 transition-transform">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <h4 className="text-lg font-semibold text-gray-900 mb-2">Trusted Network</h4>
                <p className="text-gray-600 text-sm">Join San Diego&apos;s most reliable towing partner network</p>
              </div>
              <div className="text-center group">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-green-400 to-emerald-500 flex items-center justify-center mx-auto mb-4 shadow-lg shadow-green-500/30 group-hover:scale-110 transition-transform">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h4 className="text-lg font-semibold text-gray-900 mb-2">Fast Payments</h4>
                <p className="text-gray-600 text-sm">Get paid weekly, bi-weekly, or same-day based on tier</p>
              </div>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <p className="text-gray-600 mb-6">Ready to start earning?</p>
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="group relative bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 text-white px-12 py-5 rounded-2xl font-bold text-lg transition-all shadow-xl hover:shadow-2xl hover:shadow-purple-500/25 hover:scale-105"
          >
            <span className="relative z-10">Sign Up Now - It&apos;s Free</span>
            <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-purple-400 rounded-2xl blur opacity-0 group-hover:opacity-50 transition-opacity"></div>
          </button>
        </div>
      </div>

      {/* Custom animations */}
      <style jsx>{`
        @keyframes float-slow {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-10px) rotate(5deg); }
        }
        @keyframes float-medium {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-15px) rotate(-5deg); }
        }
        @keyframes float-fast {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-8px); }
        }
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        .animate-float-slow {
          animation: float-slow 6s ease-in-out infinite;
        }
        .animate-float-medium {
          animation: float-medium 4s ease-in-out infinite;
        }
        .animate-float-fast {
          animation: float-fast 3s ease-in-out infinite;
        }
        .animate-spin-slow {
          animation: spin-slow 20s linear infinite;
        }
      `}</style>
    </section>
    </>
  );
}
