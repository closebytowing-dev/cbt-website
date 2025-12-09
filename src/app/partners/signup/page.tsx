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
      router.push("/partners/dashboard/request");
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
      router.push("/partners/dashboard/request");
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
    {/* Hero Section */}
    <div className="min-h-screen relative flex items-start overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="/images/partner-signup-bg.webp"
          alt="Partner with CloseBy Towing"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/40" />
      </div>

      {/* Two-Way Partnership Boxes - Left side of signup */}
      <div className="relative z-10 flex-1 flex items-start justify-end p-8 lg:pr-4 lg:pl-16 mt-4">
        <div className="max-w-md">
          <div className="grid grid-cols-1 gap-6">
            {/* You Send Us Tows - Arrow pointing right */}
            <div className="relative animate-energy-pulse" style={{ clipPath: 'polygon(0 0, calc(100% - 40px) 0, 100% 50%, calc(100% - 40px) 100%, 0 100%)' }}>
              <div className="bg-gradient-to-r from-blue-700 via-blue-600 to-blue-500 py-8 px-6 shadow-xl overflow-hidden">
                <h3 className="text-2xl font-bold text-white mb-3 pr-10">You Send Us Tows</h3>
                <p className="text-blue-100 text-base pr-10">
                  Your customer needs a tow? Call us. Earn <span className="font-semibold text-white">10-20% commission</span> on every referral.
                </p>
                {/* Light sweep effect - inside the clipped container */}
                <div className="absolute inset-0 w-1/2 h-[200%] bg-gradient-to-r from-transparent via-white/50 to-transparent animate-light-sweep-blue pointer-events-none"></div>
              </div>
            </div>

            {/* We Send You Work - Arrow pointing left */}
            <div className="relative animate-energy-pulse" style={{ clipPath: 'polygon(40px 0, 100% 0, 100% 100%, 40px 100%, 0 50%)' }}>
              <div className="bg-gradient-to-l from-green-700 via-green-600 to-green-500 py-8 px-6 shadow-xl overflow-hidden">
                <div className="flex items-center justify-between mb-3 pl-10">
                  <h3 className="text-2xl font-bold text-white">We Send You Work</h3>
                  <span className="text-3xl font-extrabold text-white bg-white/20 px-3 py-1 rounded-lg shadow-lg">FREE</span>
                </div>
                <p className="text-green-100 text-base pl-10">
                  Our customers need repairs? We send them <span className="font-semibold text-white">straight to you</span>.
                </p>
                {/* Light sweep effect - inside the clipped container */}
                <div className="absolute inset-0 w-1/2 h-[200%] bg-gradient-to-r from-transparent via-white/50 to-transparent animate-light-sweep-green pointer-events-none"></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Right side container - Auth Card + Tier Cards */}
      <div className="relative z-10 flex flex-col items-end mr-8 lg:mr-16 mt-4 gap-8">
        {/* Auth Card */}
        <div className="w-full max-w-md">
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

        {/* Tier Cards - Below Auth Card */}
        <div className="grid grid-cols-3 gap-4">
        {/* Silver */}
        <div className="bg-gray-400/40 backdrop-blur-[2px] border border-gray-300/50 rounded-2xl p-6 text-white shadow-2xl w-72">
          <h4 className="font-bold text-lg text-center mb-1">Silver Partner</h4>
          <p className="text-xs text-white/70 text-center mb-4">Starting Tier</p>
          <div className="text-5xl font-bold text-center mb-1">10%</div>
          <p className="text-sm text-white/80 text-center mb-4">of service fee</p>
          <ul className="space-y-2 text-sm">
            <li className="flex items-center gap-2">
              <svg className="w-4 h-4 text-white/80" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
              </svg>
              0-10 referrals/month
            </li>
            <li className="flex items-center gap-2">
              <svg className="w-4 h-4 text-white/80" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
              </svg>
              Weekly payments
            </li>
            <li className="flex items-center gap-2">
              <svg className="w-4 h-4 text-white/80" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
              </svg>
              Partner dashboard access
            </li>
          </ul>
        </div>

        {/* Gold */}
        <div className="bg-yellow-500/40 backdrop-blur-[2px] border border-yellow-400/50 rounded-2xl p-6 text-white shadow-2xl w-72">
          <h4 className="font-bold text-lg text-center mb-1">Gold Partner</h4>
          <p className="text-xs text-white/70 text-center mb-4">Best Value</p>
          <div className="text-5xl font-bold text-center mb-1">15%</div>
          <p className="text-sm text-white/80 text-center mb-4">of service fee</p>
          <ul className="space-y-2 text-sm">
            <li className="flex items-center gap-2">
              <svg className="w-4 h-4 text-white/80" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
              </svg>
              11-25 referrals/month
            </li>
            <li className="flex items-center gap-2">
              <svg className="w-4 h-4 text-white/80" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
              </svg>
              Priority support line
            </li>
            <li className="flex items-center gap-2">
              <svg className="w-4 h-4 text-white/80" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
              </svg>
              Bi-weekly payments
            </li>
            <li className="flex items-center gap-2">
              <svg className="w-4 h-4 text-white/80" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
              </svg>
              Monthly bonus opportunities
            </li>
          </ul>
        </div>

        {/* Platinum */}
        <div className="bg-purple-500/40 backdrop-blur-[2px] border border-purple-400/50 rounded-2xl p-6 text-white shadow-2xl w-72">
          <h4 className="font-bold text-lg text-center mb-1">Platinum Partner</h4>
          <p className="text-xs text-white/70 text-center mb-4">Elite Level</p>
          <div className="text-5xl font-bold text-center mb-1">20%</div>
          <p className="text-sm text-white/80 text-center mb-4">of service fee</p>
          <ul className="space-y-2 text-sm">
            <li className="flex items-center gap-2">
              <svg className="w-4 h-4 text-white/80" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
              </svg>
              26+ referrals/month
            </li>
            <li className="flex items-center gap-2">
              <svg className="w-4 h-4 text-white/80" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
              </svg>
              Dedicated account manager
            </li>
            <li className="flex items-center gap-2">
              <svg className="w-4 h-4 text-white/80" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
              </svg>
              Same-day payments
            </li>
            <li className="flex items-center gap-2">
              <svg className="w-4 h-4 text-white/80" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
              </svg>
              Exclusive bonus programs
            </li>
            <li className="flex items-center gap-2">
              <svg className="w-4 h-4 text-white/80" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
              </svg>
              Marketing materials provided
            </li>
          </ul>
        </div>
        </div>
      </div>
    </div>

    {/* How It Works Section */}
    <section className="bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900 py-24 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            How Our Partnership Works
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            A simple, profitable relationship that benefits both of us. Here&apos;s exactly how it works.
          </p>
        </div>

        {/* Two Paths */}
        <div className="grid md:grid-cols-2 gap-16 mb-20">
          {/* Path 1: You Send Us Tows */}
          <div className="relative">
            <div className="bg-gradient-to-br from-blue-900/50 to-blue-800/30 backdrop-blur-sm rounded-3xl p-10 border border-blue-500/20">
              <div className="flex items-center gap-5 mb-10">
                <div className="w-20 h-20 rounded-2xl bg-blue-600 flex items-center justify-center">
                  <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                  </svg>
                </div>
                <h3 className="text-3xl font-bold text-white">You Send Us Tows</h3>
              </div>

              {/* Steps */}
              <div className="space-y-8">
                <div className="flex gap-5">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-blue-600 flex items-center justify-center text-white font-bold text-xl">1</div>
                  <div>
                    <h4 className="text-xl font-semibold text-white mb-2">Customer Needs a Tow</h4>
                    <p className="text-gray-300 text-lg">Your customer&apos;s car breaks down or needs transport and you don&apos;t offer towing services.</p>
                  </div>
                </div>
                <div className="flex gap-5">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-blue-600 flex items-center justify-center text-white font-bold text-xl">2</div>
                  <div>
                    <h4 className="text-xl font-semibold text-white mb-2">Submit a Quick Form</h4>
                    <p className="text-gray-300 text-lg">Your shop is already set as the destination. Just enter pickup location and customer phone - <span className="text-blue-400 font-semibold">that&apos;s it!</span></p>
                  </div>
                </div>
                <div className="flex gap-5">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-blue-600 flex items-center justify-center text-white font-bold text-xl">3</div>
                  <div>
                    <h4 className="text-xl font-semibold text-white mb-2">Get Paid Commission</h4>
                    <p className="text-gray-300 text-lg">Earn <span className="text-blue-400 font-semibold">10-20% of the service fee</span> for every successful referral.</p>
                  </div>
                </div>
              </div>

              {/* Commission highlight */}
              <div className="mt-10 p-5 bg-blue-600/20 rounded-xl border border-blue-500/30">
                <p className="text-blue-300 text-base">
                  <span className="font-semibold">Example:</span> Refer a $150 tow = earn $15-$30 commission. It adds up fast!
                </p>
              </div>
            </div>
          </div>

          {/* Path 2: We Send You Work */}
          <div className="relative">
            <div className="bg-gradient-to-br from-green-900/50 to-green-800/30 backdrop-blur-sm rounded-3xl p-10 border border-green-500/20">
              <div className="flex items-center gap-5 mb-10">
                <div className="w-20 h-20 rounded-2xl bg-green-600 flex items-center justify-center">
                  <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                  </svg>
                </div>
                <div className="flex items-center gap-4">
                  <h3 className="text-3xl font-bold text-white">We Send You Work</h3>
                  <span className="text-2xl font-extrabold text-white bg-green-600 px-4 py-2 rounded-lg">FREE</span>
                </div>
              </div>

              {/* Steps */}
              <div className="space-y-8">
                <div className="flex gap-5">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-green-600 flex items-center justify-center text-white font-bold text-xl">1</div>
                  <div>
                    <h4 className="text-xl font-semibold text-white mb-2">We Tow a Vehicle</h4>
                    <p className="text-gray-300 text-lg">A customer&apos;s car needs repairs after we tow it - transmission, engine, body work, etc.</p>
                  </div>
                </div>
                <div className="flex gap-5">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-green-600 flex items-center justify-center text-white font-bold text-xl">2</div>
                  <div>
                    <h4 className="text-xl font-semibold text-white mb-2">We Recommend You</h4>
                    <p className="text-gray-300 text-lg">We send the customer directly to your shop as a trusted partner.</p>
                  </div>
                </div>
                <div className="flex gap-5">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-green-600 flex items-center justify-center text-white font-bold text-xl">3</div>
                  <div>
                    <h4 className="text-xl font-semibold text-white mb-2">You Get New Business</h4>
                    <p className="text-gray-300 text-lg">New customers walk through your door - <span className="text-green-400 font-semibold">completely free</span> for you.</p>
                  </div>
                </div>
              </div>

              {/* Free highlight */}
              <div className="mt-10 p-5 bg-green-600/20 rounded-xl border border-green-500/30">
                <p className="text-green-300 text-base">
                  <span className="font-semibold">No fees, no catch:</span> We send you business because happy customers make us all successful.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Why Partner Section */}
        <div className="bg-gradient-to-r from-gray-800/50 to-gray-700/50 backdrop-blur-sm rounded-3xl p-10 border border-gray-600/30">
          <h3 className="text-3xl font-bold text-white text-center mb-12">Why Businesses Partner With Us</h3>
          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 rounded-2xl bg-yellow-500/20 flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-yellow-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h4 className="text-lg font-semibold text-white mb-2">Passive Income</h4>
              <p className="text-gray-400 text-sm">Earn money from customers you couldn&apos;t serve anyway</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 rounded-2xl bg-purple-500/20 flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h4 className="text-lg font-semibold text-white mb-2">New Customers</h4>
              <p className="text-gray-400 text-sm">We bring you business you never would have found</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 rounded-2xl bg-blue-500/20 flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h4 className="text-lg font-semibold text-white mb-2">Trusted Network</h4>
              <p className="text-gray-400 text-sm">Join San Diego&apos;s most reliable towing partner network</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 rounded-2xl bg-green-500/20 flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h4 className="text-lg font-semibold text-white mb-2">Fast Payments</h4>
              <p className="text-gray-400 text-sm">Get paid weekly, bi-weekly, or same-day based on tier</p>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <p className="text-gray-400 mb-6">Ready to start earning?</p>
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-500 hover:to-blue-400 text-white px-10 py-4 rounded-xl font-bold text-lg transition-all shadow-lg hover:shadow-blue-500/25"
          >
            Sign Up Now - It&apos;s Free
          </button>
        </div>
      </div>
    </section>
    </>
  );
}
