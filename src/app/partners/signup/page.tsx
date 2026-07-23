"use client";

import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { getFunctions, httpsCallable } from "firebase/functions";
import { getApp } from "firebase/app";
import "@/lib/firebase";
import {
  getAuth,
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
  setPersistence,
  browserLocalPersistence,
  onAuthStateChanged,
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
  const [checkingAuth, setCheckingAuth] = useState(true);

  // If already signed in, redirect to dashboard. Otherwise stop the auth check
  // so the signup page can render. While the check is running we render a
  // spinner — the form must not flash for already-authenticated visitors.
  useEffect(() => {
    const auth = getAuth();
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        router.replace("/partners/dashboard");
      } else {
        setCheckingAuth(false);
      }
    });
    return () => unsubscribe();
  }, [router]);

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
      // Creates + signs in the Auth account; the createPartner call below runs authenticated
      // as this new user (context.auth), so we don't need the credential handle here.
      await createUserWithEmailAndPassword(
        auth,
        formData.email,
        formData.password
      );

      // Server-owned create: the createPartner CF (Admin SDK) creates partners/{uid} and
      // sets commissionRate/status/balances. The client CANNOT write partners/{uid} directly
      // (rules: isManager only) — that was the signup outage. Send ONLY profile fields; the
      // server ignores any client-supplied money/authority field.
      const createPartner = httpsCallable(getFunctions(getApp(), "us-central1"), "createPartner");
      await createPartner({ businessName: formData.businessName, email: formData.email });

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

      // Server-owned create (see the email path): the createPartner CF creates
      // partners/{uid} + sets the money/authority fields. Client sends ONLY profile.
      const createPartner = httpsCallable(getFunctions(getApp(), "us-central1"), "createPartner");
      await createPartner({
        businessName: user.displayName || "",
        displayName: user.displayName || "",
        email: user.email || "",
        phone: user.phoneNumber || "",
      });

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

  if (checkingAuth) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#1e1e4a]">
        <svg className="animate-spin h-12 w-12 text-white" viewBox="0 0 24 24" aria-label="Checking sign-in">
          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
        </svg>
      </div>
    );
  }

  return (
    <div className="overflow-x-hidden">
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
    <div className="min-h-[95vh] relative overflow-x-hidden">
      {/* Background Image - Only this squeezes */}
      <div className="absolute inset-0 min-w-full">
        <Image
          src="/images/partner-signup-bg.webp"
          alt="Partner with CloseBy Towing"
          fill
          className="object-cover object-top"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-black/30" />
        {/* Extra darken band on the right so the form card pops too */}
        <div className="absolute inset-y-0 right-0 w-1/2 bg-gradient-to-l from-black/55 to-transparent pointer-events-none" />
      </div>

      {/* Main Content - Responsive layout */}
      <div className="relative z-10 flex items-start justify-center lg:justify-end px-4 sm:px-8 lg:px-16 pt-1 lg:pt-4">

        {/* Right side container - Auth Card + Tier Cards - with banners positioned relative to it */}
        <div className="flex flex-col items-center lg:items-end gap-2 lg:gap-8 flex-shrink-0 relative w-full max-w-[512px] lg:max-w-none lg:w-auto">
          {/* Desktop hero headline - absolutely positioned in the left half of the hero image */}
          <div className="hidden lg:block absolute right-[108%] top-[5.5vh] w-[504px]">
            <h1 className="text-5xl xl:text-6xl font-black text-white leading-[1.05] tracking-tight mb-6 drop-shadow-[0_2px_8px_rgba(0,0,0,0.6)]">
              Your customer needs a tow.<br />
              We&apos;re 20 minutes away.
            </h1>
            <p className="text-xl xl:text-2xl text-white/95 leading-relaxed mb-3 drop-shadow-[0_2px_6px_rgba(0,0,0,0.6)]">
              Send the job to us. Get paid same-day via Zelle.
            </p>
            <p className="text-xl xl:text-2xl font-bold text-white mb-6 drop-shadow-[0_2px_6px_rgba(0,0,0,0.6)]">
              Earn <span className="text-amber-300">20–30% commission</span> on every tow.
            </p>
            <ul className="space-y-3 text-white/95 text-lg drop-shadow-[0_1px_4px_rgba(0,0,0,0.6)]">
              <li className="flex items-start gap-3">
                <svg className="w-6 h-6 text-emerald-400 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M5 13l4 4L19 7" /></svg>
                <span>No fees, no contracts, no minimums</span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-6 h-6 text-emerald-400 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M5 13l4 4L19 7" /></svg>
                <span>Sign up in 30 seconds</span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-6 h-6 text-emerald-400 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M5 13l4 4L19 7" /></svg>
                <span>We handle the customer — you just send the lead</span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-6 h-6 text-emerald-400 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M5 13l4 4L19 7" /></svg>
                <span>When our customers ask for a mechanic, we recommend our partners — ranked by who sends us the most tows</span>
              </li>
            </ul>
          </div>
        {/* Mobile hero headline - stacked above the form */}
        <div className="lg:hidden text-left mb-4 px-2 w-full">
          <h1 className="text-3xl sm:text-4xl font-black text-white leading-tight mb-3 drop-shadow-[0_2px_6px_rgba(0,0,0,0.6)]">
            Your customer needs a tow.<br />
            We&apos;re 20 minutes away.
          </h1>
          <p className="text-base sm:text-lg text-white/95 mb-1 drop-shadow-[0_1px_4px_rgba(0,0,0,0.6)]">
            Send the job to us. Get paid same-day via Zelle.
          </p>
          <p className="text-base sm:text-lg font-bold text-white mb-3 drop-shadow-[0_1px_4px_rgba(0,0,0,0.6)]">
            Earn <span className="text-amber-300">20–30% commission</span> on every tow.
          </p>
          <ul className="space-y-2 text-white/95 text-sm sm:text-base drop-shadow-[0_1px_3px_rgba(0,0,0,0.6)]">
            <li className="flex items-start gap-2">
              <svg className="w-5 h-5 text-emerald-400 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M5 13l4 4L19 7" /></svg>
              <span>No fees, no contracts, no minimums</span>
            </li>
            <li className="flex items-start gap-2">
              <svg className="w-5 h-5 text-emerald-400 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M5 13l4 4L19 7" /></svg>
              <span>Sign up in 30 seconds</span>
            </li>
            <li className="flex items-start gap-2">
              <svg className="w-5 h-5 text-emerald-400 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M5 13l4 4L19 7" /></svg>
              <span>We handle the customer — you just send the lead</span>
            </li>
            <li className="flex items-start gap-2">
              <svg className="w-5 h-5 text-emerald-400 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M5 13l4 4L19 7" /></svg>
              <span>When our customers ask for a mechanic, we recommend our partners — ranked by who sends us the most tows</span>
            </li>
          </ul>
        </div>

        {/* Auth Card - Responsive width */}
        <div className="w-full lg:w-[512px] flex-shrink-0">
          <div className="bg-gray-200/30 backdrop-blur-[2px] rounded-2xl shadow-2xl overflow-hidden border border-white/40">
          {/* Form card headline */}
          <div className="text-center pt-6 px-6">
            <h2 className="text-2xl sm:text-3xl font-black text-white drop-shadow-[0_2px_4px_rgba(0,0,0,0.5)]">Start Earning Today</h2>
            <p className="text-sm sm:text-base text-white/85 mt-1 drop-shadow-[0_1px_3px_rgba(0,0,0,0.5)]">Free to join. Same-day payouts. Cancel anytime.</p>
          </div>
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
          <div className="p-4 sm:p-6 lg:p-8">
            {/* Error Message */}
            {error && (
              <div className="mb-6 bg-red-500/20 border border-red-500/50 rounded-lg p-3">
                <p className="text-sm text-red-300">{error}</p>
              </div>
            )}

            {/* Sign Up Form */}
            <form onSubmit={handleSignUp} className="space-y-2 sm:space-y-5">
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
                    <svg className="w-8 h-8" viewBox="0 0 24 24">
                      <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                      <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                      <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                      <path fill="#34A853" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
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
                  className="block text-sm font-medium text-white mb-2"
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
                  className="block text-sm font-medium text-white mb-2"
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
                  className="block text-sm font-medium text-white mb-2"
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
                  "Sign Up Free →"
                )}
              </button>

            </form>
          </div>
        </div>
        </div>

        </div>
      </div>
    </div>

    {/* ═══ HOW IT WORKS - 3-step strip ═══ */}
    <section className="relative z-20 bg-[#1e1e4a] pt-12 sm:pt-16 lg:pt-20 pb-[26vh] px-4 sm:px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-8 sm:mb-12">
          <h2 className="text-3xl sm:text-4xl font-black text-white mb-2">How It Works</h2>
          <p className="text-base sm:text-lg text-white/70">From referral to payment in three simple steps.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          <div className="text-center">
            <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-amber-500 flex items-center justify-center text-2xl font-black text-white shadow-lg shadow-amber-500/30">1</div>
            <h3 className="text-xl font-bold text-white mb-2">Customer needs a tow</h3>
            <p className="text-white/80">You call or text us the job</p>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-amber-500 flex items-center justify-center text-2xl font-black text-white shadow-lg shadow-amber-500/30">2</div>
            <h3 className="text-xl font-bold text-white mb-2">We dispatch a driver</h3>
            <p className="text-white/80">Customer gets help in 20 minutes</p>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-amber-500 flex items-center justify-center text-2xl font-black text-white shadow-lg shadow-amber-500/30">3</div>
            <h3 className="text-xl font-bold text-white mb-2">You get paid same-day</h3>
            <p className="text-white/80">Up to 30% commission via Zelle</p>
          </div>
        </div>
      </div>
    </section>

    {/* ═══════════════════════════════════════════════════════════════════════════════
        MAGNIFICENT BRIDGE SECTION - Where Hero Meets Value
        A revolutionary design that creates visual poetry between sections
    ═══════════════════════════════════════════════════════════════════════════════ */}

    {/* The Grand Transition - Flowing Wave with Embedded Header */}
    <div className="relative z-30 -mt-[20vh]">
      {/* Animated SVG Wave Transition */}
      <div className="absolute inset-x-0 top-[120px] h-[250px] overflow-visible">
        <svg
          className="absolute w-full h-full"
          viewBox="0 0 1440 400"
          preserveAspectRatio="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            {/* Vertical gradient - ocean blue at top, deep navy at bottom - seamless transition */}
            <linearGradient id="waveGradient" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#2741AA" stopOpacity="1">
                <animate attributeName="stop-color" values="#2741AA;#3251BA;#2741AA" dur="5s" repeatCount="indefinite"/>
              </stop>
              <stop offset="30%" stopColor="#243990" stopOpacity="1">
                <animate attributeName="stop-color" values="#243990;#2a429e;#243990" dur="5s" repeatCount="indefinite"/>
              </stop>
              <stop offset="60%" stopColor="#213175" stopOpacity="1">
                <animate attributeName="stop-color" values="#213175;#263a85;#213175" dur="5s" repeatCount="indefinite"/>
              </stop>
              <stop offset="85%" stopColor="#1e275c" stopOpacity="1">
                <animate attributeName="stop-color" values="#1e275c;#222d66;#1e275c" dur="5s" repeatCount="indefinite"/>
              </stop>
              <stop offset="100%" stopColor="#1e1e4a" stopOpacity="1"/>
            </linearGradient>
            {/* Subtle surface shimmer - only at the top of the wave */}
            <linearGradient id="surfaceShimmer" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="white" stopOpacity="0.12"/>
              <stop offset="15%" stopColor="white" stopOpacity="0.05"/>
              <stop offset="30%" stopColor="white" stopOpacity="0"/>
            </linearGradient>
          </defs>
          {/* Main wave - extends well past viewbox for seamless blend */}
          <path
            d="M0,80 C360,160 720,0 1080,80 C1260,120 1380,60 1440,80 L1440,400 L0,400 Z"
            fill="url(#waveGradient)"
          >
            <animate
              attributeName="d"
              values="M0,80 C360,160 720,0 1080,80 C1260,120 1380,60 1440,80 L1440,400 L0,400 Z;
                      M0,100 C360,20 720,150 1080,60 C1260,30 1380,100 1440,60 L1440,400 L0,400 Z;
                      M0,80 C360,160 720,0 1080,80 C1260,120 1380,60 1440,80 L1440,400 L0,400 Z"
              dur="8s"
              repeatCount="indefinite"
            />
          </path>
          {/* Surface shimmer - subtle light reflection only at wave crest */}
          <path
            d="M0,80 C360,160 720,0 1080,80 C1260,120 1380,60 1440,80 L1440,200 L0,200 Z"
            fill="url(#surfaceShimmer)"
          >
            <animate
              attributeName="d"
              values="M0,80 C360,160 720,0 1080,80 C1260,120 1380,60 1440,80 L1440,200 L0,200 Z;
                      M0,100 C360,20 720,150 1080,60 C1260,30 1380,100 1440,60 L1440,200 L0,200 Z;
                      M0,80 C360,160 720,0 1080,80 C1260,120 1380,60 1440,80 L1440,200 L0,200 Z"
              dur="8s"
              repeatCount="indefinite"
            />
          </path>
        </svg>
        {/* Seamless color extension below wave - matches exact bottom color */}
        <div className="absolute inset-x-0 bottom-0 h-[100px] bg-[#1e1e4a] -mb-[100px]"></div>
      </div>

      {/* The Floating Header - Embedded in the wave */}
      <div className="relative z-40 flex justify-center lg:justify-end lg:pr-[25%] pt-64 sm:pt-20 lg:pt-2">
        <div className="relative group">
          {/* Glowing orb behind header */}
          <div className="absolute -inset-10 bg-gradient-to-r from-blue-500/20 via-purple-500/30 to-pink-500/20 rounded-full blur-3xl opacity-60 group-hover:opacity-80 transition-opacity duration-700 animate-pulse"></div>

          {/* Main header card with glass morphism */}
          <div className="relative bg-white/95 backdrop-blur-xl rounded-2xl sm:rounded-3xl px-6 sm:px-8 lg:px-12 py-6 sm:py-8 lg:py-10 shadow-[0_20px_60px_-15px_rgba(0,0,0,0.4)] border border-white/50 text-center max-w-3xl mx-4 sm:mx-0 overflow-hidden">
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
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 bg-clip-text text-transparent mb-3 sm:mb-4 leading-tight">
                How Our Partnership Works
              </h2>
              <p className="text-sm sm:text-base lg:text-lg text-gray-600 max-w-xl mx-auto leading-relaxed">
                A simple, profitable relationship that benefits both of us. Here&apos;s exactly how it works.
              </p>

                          </div>
          </div>

          {/* Connection line flowing down */}
          <div className="absolute left-1/2 -translate-x-1/2 top-full w-[6px] h-40 bg-gradient-to-b from-white via-gray-300 to-transparent rounded-full"></div>
        </div>
      </div>
    </div>

    {/* Main Value Section with Integrated Tier Cards */}
    <section className="relative bg-gradient-to-b from-[#1e1e4a] via-[#1a1a40] to-white pt-32 sm:pt-28 lg:pt-32 pb-16 sm:pb-20 lg:pb-24 px-4 sm:px-6 overflow-hidden">
      {/* Ambient background effects */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-blue-500/5 rounded-full blur-3xl"></div>
        <div className="absolute top-1/3 right-1/4 w-[500px] h-[500px] bg-purple-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-1/2 w-[800px] h-[400px] bg-white/50 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">

        {/* ═══ TIER CARDS - Horizontal Premium Display ═══ */}
        <div className="mb-16 lg:mb-24">
          <div className="text-center mb-8 lg:mb-12">
            <h3 className="text-2xl sm:text-3xl font-bold text-white mb-2 sm:mb-3">Choose Your Partnership Tier</h3>
            <p className="text-sm sm:text-base text-gray-400">The more you refer, the more you earn</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 max-w-6xl mx-auto">
            {/* Silver Tier */}
            <div className="group relative">
              <div className="absolute inset-0 bg-gradient-to-br from-[#C0C0C0] to-[#A8A8A8] rounded-3xl blur-xl opacity-50 group-hover:opacity-70 transition-opacity"></div>
              <div className="relative bg-gradient-to-br from-[#F8F8F8] via-[#E8E8E8] to-[#C0C0C0] backdrop-blur-xl rounded-2xl sm:rounded-3xl p-6 sm:p-8 border border-[#E0E0E0] hover:border-white transition-all duration-500 hover:transform hover:scale-[1.02] hover:shadow-2xl hover:shadow-white/60 overflow-hidden">
                {/* Metallic shine overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-white/70 via-white/20 to-white/30 pointer-events-none"></div>
                {/* Multiple diagonal shine streaks for extra shimmer */}
                <div className="absolute -top-20 -left-20 w-40 h-[200%] bg-gradient-to-r from-transparent via-white/50 to-transparent rotate-[30deg] pointer-events-none group-hover:translate-x-[400px] transition-transform duration-1000"></div>
                <div className="absolute -top-40 -left-10 w-20 h-[200%] bg-gradient-to-r from-transparent via-white/30 to-transparent rotate-[25deg] pointer-events-none group-hover:translate-x-[450px] transition-transform duration-700"></div>
                {/* Top highlight - enhanced */}
                <div className="absolute top-0 left-0 right-0 h-1/2 bg-gradient-to-b from-white/60 via-white/20 to-transparent rounded-t-3xl pointer-events-none"></div>
                {/* Edge highlights */}
                <div className="absolute inset-0 rounded-3xl border border-white/40 pointer-events-none"></div>
                <div className="relative">
                  <div className="flex items-center justify-between mb-6">
                    <span className="text-gray-700 text-sm font-medium uppercase tracking-wider">Silver</span>
                    <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#E8E8E8] to-[#A0A0A0] flex items-center justify-center shadow-lg">
                      <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                      </svg>
                    </div>
                  </div>
                  <div className="text-5xl sm:text-6xl lg:text-7xl font-black text-gray-800 mb-2 tracking-tight drop-shadow-[0_2px_2px_rgba(255,255,255,0.5)]">20<span className="text-3xl sm:text-4xl">%</span></div>
                  <p className="text-sm sm:text-base text-gray-600 mb-4 sm:mb-6">Commission per referral</p>
                  <div className="h-px bg-gradient-to-r from-transparent via-gray-400 to-transparent mb-6"></div>
                  <ul className="space-y-3 text-gray-700 text-sm">
                    <li className="flex items-center gap-3">
                      <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"/></svg>
                      0–5 jobs in last 30 days
                    </li>
                    <li className="flex items-center gap-3">
                      <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"/></svg>
                      Same-day payments
                    </li>
                    <li className="flex items-center gap-3">
                      <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"/></svg>
                      Partner dashboard access
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Gold Tier - Featured */}
            <div className="group relative md:col-span-2 lg:col-span-1">
              <div className="absolute inset-0 bg-gradient-to-br from-[#FFD700] to-[#B8860B] rounded-3xl blur-xl opacity-60 group-hover:opacity-80 transition-opacity"></div>
              <div className="relative bg-gradient-to-br from-[#FFFACD] via-[#FFD700] to-[#DAA520] backdrop-blur-xl rounded-2xl sm:rounded-3xl p-6 sm:p-8 border-2 border-[#FFE55C] hover:border-[#FFFACD] transition-all duration-500 hover:transform hover:scale-[1.02] hover:shadow-2xl hover:shadow-[#FFD700]/70 overflow-hidden">
                {/* Metallic shine overlay - extra bright for gold */}
                <div className="absolute inset-0 bg-gradient-to-br from-[#FFFACD]/80 via-[#FFD700]/30 to-[#FFFACD]/40 pointer-events-none"></div>
                {/* Multiple diagonal shine streaks for maximum shimmer */}
                <div className="absolute -top-20 -left-20 w-48 h-[200%] bg-gradient-to-r from-transparent via-[#FFFACD]/70 to-transparent rotate-[30deg] pointer-events-none group-hover:translate-x-[400px] transition-transform duration-1000"></div>
                <div className="absolute -top-40 -left-10 w-24 h-[200%] bg-gradient-to-r from-transparent via-white/50 to-transparent rotate-[25deg] pointer-events-none group-hover:translate-x-[450px] transition-transform duration-700"></div>
                <div className="absolute -top-60 left-10 w-16 h-[200%] bg-gradient-to-r from-transparent via-[#FFFACD]/40 to-transparent rotate-[35deg] pointer-events-none group-hover:translate-x-[380px] transition-transform duration-1200"></div>
                {/* Top highlight - extra enhanced for gold */}
                <div className="absolute top-0 left-0 right-0 h-1/2 bg-gradient-to-b from-[#FFFACD]/70 via-[#FFD700]/30 to-transparent rounded-t-3xl pointer-events-none"></div>
                {/* Edge highlights - golden glow */}
                <div className="absolute inset-0 rounded-3xl border border-[#FFFACD]/60 pointer-events-none"></div>
                {/* Sparkle effect */}
                <div className="absolute top-4 right-8 w-2 h-2 bg-white rounded-full opacity-80 animate-pulse pointer-events-none"></div>
                <div className="absolute top-12 right-16 w-1.5 h-1.5 bg-white rounded-full opacity-60 animate-pulse pointer-events-none" style={{animationDelay: '0.5s'}}></div>
                <div className="relative">
                  <div className="flex items-center justify-between mb-6">
                    <span className="text-[#8B6914] text-sm font-medium uppercase tracking-wider">Gold</span>
                    <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#FFD700] to-[#B8860B] flex items-center justify-center shadow-lg shadow-[#DAA520]/40">
                      <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                      </svg>
                    </div>
                  </div>
                  <div className="text-5xl sm:text-6xl lg:text-7xl font-black text-[#7B5B00] mb-2 tracking-tight drop-shadow-[0_2px_2px_rgba(255,255,255,0.5)]">25<span className="text-3xl sm:text-4xl">%</span></div>
                  <p className="text-sm sm:text-base text-[#8B6914] mb-4 sm:mb-6">Commission per referral</p>
                  <div className="h-px bg-gradient-to-r from-transparent via-[#B8860B] to-transparent mb-6"></div>
                  <ul className="space-y-3 text-[#6B4F00] text-sm">
                    <li className="flex items-center gap-3">
                      <svg className="w-5 h-5 text-[#8B6914]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"/></svg>
                      6–9 jobs in last 30 days
                    </li>
                    <li className="flex items-center gap-3">
                      <svg className="w-5 h-5 text-[#8B6914]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"/></svg>
                      Same-day payments
                    </li>
                    <li className="flex items-center gap-3">
                      <svg className="w-5 h-5 text-[#8B6914]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"/></svg>
                      Priority support line
                    </li>
                    <li className="flex items-center gap-3">
                      <svg className="w-5 h-5 text-[#8B6914]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"/></svg>
                      Monthly bonus opportunities
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Platinum Tier */}
            <div className="group relative">
              <div className="absolute inset-0 bg-gradient-to-br from-[#9CA3AF] to-[#6B7280] rounded-3xl blur-xl opacity-50 group-hover:opacity-70 transition-opacity"></div>
              <div className="relative bg-gradient-to-br from-[#D1D5DB] via-[#9CA3AF] to-[#6B7280] backdrop-blur-xl rounded-2xl sm:rounded-3xl p-6 sm:p-8 border border-[#9CA3AF] hover:border-[#D1D5DB] transition-all duration-500 hover:transform hover:scale-[1.02] hover:shadow-2xl hover:shadow-[#6B7280]/50 overflow-hidden">
                {/* Metallic shine overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-white/50 via-transparent to-[#4B5563]/20 pointer-events-none"></div>
                {/* Diagonal shine streak */}
                <div className="absolute -top-20 -left-20 w-40 h-[200%] bg-gradient-to-r from-transparent via-white/40 to-transparent rotate-[30deg] pointer-events-none group-hover:translate-x-[400px] transition-transform duration-1000"></div>
                {/* Top highlight */}
                <div className="absolute top-0 left-0 right-0 h-1/3 bg-gradient-to-b from-white/40 to-transparent rounded-t-3xl pointer-events-none"></div>
                <div className="relative">
                  <div className="flex items-center justify-between mb-6">
                    <span className="text-gray-700 text-sm font-medium uppercase tracking-wider">Platinum</span>
                    <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#D1D5DB] to-[#6B7280] flex items-center justify-center shadow-lg">
                      <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                      </svg>
                    </div>
                  </div>
                  <div className="text-5xl sm:text-6xl lg:text-7xl font-black text-gray-800 mb-2 tracking-tight drop-shadow-[0_2px_2px_rgba(255,255,255,0.5)]">30<span className="text-3xl sm:text-4xl">%</span></div>
                  <p className="text-sm sm:text-base text-gray-600 mb-4 sm:mb-6">Commission per referral</p>
                  <div className="h-px bg-gradient-to-r from-transparent via-gray-400 to-transparent mb-6"></div>
                  <ul className="space-y-3 text-gray-700 text-sm">
                    <li className="flex items-center gap-3">
                      <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"/></svg>
                      10+ jobs in last 30 days
                    </li>
                    <li className="flex items-center gap-3">
                      <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"/></svg>
                      Same-day payments
                    </li>
                    <li className="flex items-center gap-3">
                      <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"/></svg>
                      Dedicated account manager
                    </li>
                    <li className="flex items-center gap-3">
                      <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"/></svg>
                      Exclusive bonus programs
                    </li>
                    <li className="flex items-center gap-3">
                      <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"/></svg>
                      Marketing materials
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ═══ TWO PATHS SECTION ═══ */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 mb-12 sm:mb-16 lg:mb-20">
          {/* Path 1: You Send Us Tows */}
          <div className="group relative">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-cyan-600 rounded-3xl blur-[72px] opacity-20 group-hover:opacity-30 transition-opacity"></div>
            <div className="relative bg-white rounded-2xl sm:rounded-3xl p-6 sm:p-8 lg:p-10 shadow-xl border border-gray-100 hover:shadow-2xl transition-all duration-500">
              <div className="flex items-center gap-3 sm:gap-5 mb-6 sm:mb-8 lg:mb-10">
                <div className="w-14 h-14 sm:w-16 sm:h-16 lg:w-20 lg:h-20 rounded-xl sm:rounded-2xl bg-gradient-to-br from-blue-500 to-blue-700 flex items-center justify-center shadow-lg shadow-blue-500/30 flex-shrink-0">
                  <svg className="w-7 h-7 sm:w-8 sm:h-8 lg:w-10 lg:h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                  </svg>
                </div>
                <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900">You Send Us Tows</h3>
              </div>

              <div className="space-y-5 sm:space-y-6 lg:space-y-8">
                <div className="flex gap-3 sm:gap-4 lg:gap-5">
                  <div className="flex-shrink-0 w-10 h-10 sm:w-11 sm:h-11 lg:w-12 lg:h-12 rounded-full bg-gradient-to-br from-blue-500 to-blue-700 flex items-center justify-center text-white font-bold text-lg sm:text-xl shadow-lg">1</div>
                  <div>
                    <h4 className="text-base sm:text-lg lg:text-xl font-semibold text-gray-900 mb-1 sm:mb-2">Customer Needs a Tow</h4>
                    <p className="text-gray-600 text-sm sm:text-base lg:text-lg">Your customer&apos;s car breaks down or needs transport and you don&apos;t offer towing services.</p>
                  </div>
                </div>
                <div className="flex gap-3 sm:gap-4 lg:gap-5">
                  <div className="flex-shrink-0 w-10 h-10 sm:w-11 sm:h-11 lg:w-12 lg:h-12 rounded-full bg-gradient-to-br from-blue-500 to-blue-700 flex items-center justify-center text-white font-bold text-lg sm:text-xl shadow-lg">2</div>
                  <div>
                    <h4 className="text-base sm:text-lg lg:text-xl font-semibold text-gray-900 mb-1 sm:mb-2">Submit a Quick Form</h4>
                    <p className="text-gray-600 text-sm sm:text-base lg:text-lg">Your shop is already set as the destination. Just enter pickup location and customer phone - <span className="text-blue-600 font-semibold">that&apos;s it!</span></p>
                  </div>
                </div>
                <div className="flex gap-3 sm:gap-4 lg:gap-5">
                  <div className="flex-shrink-0 w-10 h-10 sm:w-11 sm:h-11 lg:w-12 lg:h-12 rounded-full bg-gradient-to-br from-blue-500 to-blue-700 flex items-center justify-center text-white font-bold text-lg sm:text-xl shadow-lg">3</div>
                  <div>
                    <h4 className="text-base sm:text-lg lg:text-xl font-semibold text-gray-900 mb-1 sm:mb-2">Get Paid Commission</h4>
                    <p className="text-gray-600 text-sm sm:text-base lg:text-lg">Earn <span className="text-blue-600 font-semibold">10-20% of the service fee</span> for every successful referral.</p>
                  </div>
                </div>
              </div>

              <div className="mt-6 sm:mt-8 lg:mt-10 p-4 sm:p-5 bg-gradient-to-r from-blue-50 to-cyan-50 rounded-xl border border-blue-200">
                <p className="text-blue-800 text-sm sm:text-base">
                  <span className="font-semibold">Example:</span> Refer a $150 tow = earn $15-$30 commission. It adds up fast!
                </p>
              </div>
            </div>
          </div>

          {/* Path 2: We Send You Work */}
          <div className="group relative">
            <div className="absolute inset-0 bg-gradient-to-br from-green-500 to-emerald-600 rounded-3xl blur-xl opacity-20 group-hover:opacity-30 transition-opacity"></div>
            <div className="relative bg-white rounded-2xl sm:rounded-3xl p-6 sm:p-8 lg:p-10 shadow-xl border border-gray-100 hover:shadow-2xl transition-all duration-500">
              <div className="flex flex-wrap items-center gap-3 sm:gap-5 mb-6 sm:mb-8 lg:mb-10">
                <div className="w-14 h-14 sm:w-16 sm:h-16 lg:w-20 lg:h-20 rounded-xl sm:rounded-2xl bg-gradient-to-br from-green-500 to-green-700 flex items-center justify-center shadow-lg shadow-green-500/30 flex-shrink-0">
                  <svg className="w-7 h-7 sm:w-8 sm:h-8 lg:w-10 lg:h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                  </svg>
                </div>
                <div className="flex flex-wrap items-center gap-2 sm:gap-4">
                  <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900">We Send You Work</h3>
                  <span className="text-base sm:text-lg lg:text-xl font-extrabold text-white bg-gradient-to-r from-green-500 to-emerald-600 px-3 py-1 sm:px-4 sm:py-2 rounded-lg shadow-lg shadow-green-500/30">FREE</span>
                </div>
              </div>

              <div className="space-y-5 sm:space-y-6 lg:space-y-8">
                <div className="flex gap-3 sm:gap-4 lg:gap-5">
                  <div className="flex-shrink-0 w-10 h-10 sm:w-11 sm:h-11 lg:w-12 lg:h-12 rounded-full bg-gradient-to-br from-green-500 to-green-700 flex items-center justify-center text-white font-bold text-lg sm:text-xl shadow-lg">1</div>
                  <div>
                    <h4 className="text-base sm:text-lg lg:text-xl font-semibold text-gray-900 mb-1 sm:mb-2">We Tow a Vehicle</h4>
                    <p className="text-gray-600 text-sm sm:text-base lg:text-lg">A customer&apos;s car needs repairs after we tow it - transmission, engine, body work, etc.</p>
                  </div>
                </div>
                <div className="flex gap-3 sm:gap-4 lg:gap-5">
                  <div className="flex-shrink-0 w-10 h-10 sm:w-11 sm:h-11 lg:w-12 lg:h-12 rounded-full bg-gradient-to-br from-green-500 to-green-700 flex items-center justify-center text-white font-bold text-lg sm:text-xl shadow-lg">2</div>
                  <div>
                    <h4 className="text-base sm:text-lg lg:text-xl font-semibold text-gray-900 mb-1 sm:mb-2">We Recommend You</h4>
                    <p className="text-gray-600 text-sm sm:text-base lg:text-lg">We send the customer directly to your shop as a trusted partner.</p>
                  </div>
                </div>
                <div className="flex gap-3 sm:gap-4 lg:gap-5">
                  <div className="flex-shrink-0 w-10 h-10 sm:w-11 sm:h-11 lg:w-12 lg:h-12 rounded-full bg-gradient-to-br from-green-500 to-green-700 flex items-center justify-center text-white font-bold text-lg sm:text-xl shadow-lg">3</div>
                  <div>
                    <h4 className="text-base sm:text-lg lg:text-xl font-semibold text-gray-900 mb-1 sm:mb-2">You Get New Business</h4>
                    <p className="text-gray-600 text-sm sm:text-base lg:text-lg">New customers walk through your door - <span className="text-green-600 font-semibold">completely free</span> for you.</p>
                  </div>
                </div>
              </div>

              <div className="mt-6 sm:mt-8 lg:mt-10 p-4 sm:p-5 bg-gradient-to-r from-green-50 to-emerald-50 rounded-xl border border-green-200">
                <p className="text-green-800 text-sm sm:text-base">
                  <span className="font-semibold">No fees, no catch:</span> We send you business because happy customers make us all successful.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* ═══ WHY PARTNER SECTION ═══ */}
        <div className="relative">
          <div className="absolute inset-0 bg-gradient-to-r from-gray-100 to-gray-200 rounded-2xl sm:rounded-3xl"></div>
          <div className="relative bg-white/80 backdrop-blur-sm rounded-2xl sm:rounded-3xl p-6 sm:p-8 lg:p-12 border border-gray-200 shadow-xl">
            <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900 text-center mb-8 sm:mb-10 lg:mb-12">Why Businesses Partner With Us</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
              <div className="text-center group">
                <div className="w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 rounded-xl sm:rounded-2xl bg-gradient-to-br from-yellow-400 to-amber-500 flex items-center justify-center mx-auto mb-2 sm:mb-3 lg:mb-4 shadow-lg shadow-yellow-500/30 group-hover:scale-110 transition-transform">
                  <svg className="w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h4 className="text-sm sm:text-base lg:text-lg font-semibold text-gray-900 mb-1 sm:mb-2">Passive Income</h4>
                <p className="text-gray-600 text-xs sm:text-sm">Earn money from customers you couldn&apos;t serve anyway</p>
              </div>
              <div className="text-center group">
                <div className="w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 rounded-xl sm:rounded-2xl bg-gradient-to-br from-purple-400 to-violet-500 flex items-center justify-center mx-auto mb-2 sm:mb-3 lg:mb-4 shadow-lg shadow-purple-500/30 group-hover:scale-110 transition-transform">
                  <svg className="w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <h4 className="text-sm sm:text-base lg:text-lg font-semibold text-gray-900 mb-1 sm:mb-2">New Customers</h4>
                <p className="text-gray-600 text-xs sm:text-sm">We bring you business you never would have found</p>
              </div>
              <div className="text-center group">
                <div className="w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 rounded-xl sm:rounded-2xl bg-gradient-to-br from-blue-400 to-cyan-500 flex items-center justify-center mx-auto mb-2 sm:mb-3 lg:mb-4 shadow-lg shadow-blue-500/30 group-hover:scale-110 transition-transform">
                  <svg className="w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <h4 className="text-sm sm:text-base lg:text-lg font-semibold text-gray-900 mb-1 sm:mb-2">Trusted Network</h4>
                <p className="text-gray-600 text-xs sm:text-sm">Join San Diego&apos;s most reliable towing partner network</p>
              </div>
              <div className="text-center group">
                <div className="w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 rounded-xl sm:rounded-2xl bg-gradient-to-br from-green-400 to-emerald-500 flex items-center justify-center mx-auto mb-2 sm:mb-3 lg:mb-4 shadow-lg shadow-green-500/30 group-hover:scale-110 transition-transform">
                  <svg className="w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h4 className="text-sm sm:text-base lg:text-lg font-semibold text-gray-900 mb-1 sm:mb-2">Fast Payments</h4>
                <p className="text-gray-600 text-xs sm:text-sm">Get paid weekly, bi-weekly, or same-day based on tier</p>
              </div>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-10 sm:mt-12 lg:mt-16">
          <p className="text-gray-600 mb-4 sm:mb-6 text-sm sm:text-base">Ready to start earning?</p>
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="group relative bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 text-white px-8 sm:px-10 lg:px-12 py-3 sm:py-4 lg:py-5 rounded-xl sm:rounded-2xl font-bold text-base sm:text-lg transition-all shadow-xl hover:shadow-2xl hover:shadow-purple-500/25 hover:scale-105"
          >
            <span className="relative z-10">Sign Up Now - It&apos;s Free</span>
            <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-purple-400 rounded-xl sm:rounded-2xl blur opacity-0 group-hover:opacity-50 transition-opacity"></div>
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
    </div>
  );
}
