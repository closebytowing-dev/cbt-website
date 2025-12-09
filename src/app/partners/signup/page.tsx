"use client";

import { useState } from "react";
import Link from "next/link";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import { db } from "@/lib/firebase";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

export default function PartnerSignupPage() {
  const [formData, setFormData] = useState({
    businessName: "",
    email: "",
    password: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Validate password length
      if (formData.password.length < 6) {
        alert("Password must be at least 6 characters long.");
        setIsSubmitting(false);
        return;
      }

      // Create Firebase Auth account
      const auth = getAuth();
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        formData.email,
        formData.password
      );

      const userId = userCredential.user.uid;
      console.log("Firebase Auth user created with UID:", userId);

      // Prepare partner data for Firestore
      const partnerData = {
        userId: userId, // Link to Firebase Auth user
        address: "",
        commissionOwed: 0,
        commissionRate: 10, // Default to Silver tier (10%)
        companyName: formData.businessName,
        contactName: "",
        createdAt: serverTimestamp(),
        email: formData.email,
        notes: "",
        paymentMethod: "check", // Default payment method
        pendingJobs: [],
        phone: "",
        status: "active", // Auto-approve - verify when they submit first request
        totalCommissionEarned: 0,
        totalPaid: 0,
        totalReferrals: 0,
        totalRevenue: 0,
        updatedAt: serverTimestamp(),
      };

      // Save to Firestore partners collection
      const docRef = await addDoc(collection(db, "partners"), partnerData);
      console.log("Partner document created with ID:", docRef.id);

      setSubmitted(true);
    } catch (error: any) {
      console.error("Error creating partner:", error);

      // Provide more specific error messages
      let errorMessage = "There was an error submitting your application. ";

      if (error.code === 'auth/email-already-in-use') {
        errorMessage += "An account with this email already exists. Please try logging in or use a different email.";
      } else if (error.code === 'auth/invalid-email') {
        errorMessage += "Please enter a valid email address.";
      } else if (error.code === 'auth/weak-password') {
        errorMessage += "Password is too weak. Please use at least 6 characters.";
      } else if (error.code === 'permission-denied') {
        errorMessage += "Please contact us directly at (858) 999-9293 or info@closebytowing.com to complete your registration.";
      } else if (error.code === 'unavailable') {
        errorMessage += "Please check your internet connection and try again.";
      } else {
        errorMessage += "Please try again or contact us at (858) 999-9293.";
      }

      alert(errorMessage);
    } finally {
      setIsSubmitting(false);
    }
  };

  if (submitted) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-blue-50">
        <div className="container mx-auto px-4 py-16">
          <div className="max-w-2xl mx-auto">
            <div className="bg-white rounded-2xl shadow-2xl p-8 sm:p-12 text-center">
              <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-10 h-10 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h1 className="text-3xl font-bold text-gray-900 mb-4">Welcome to Our Partner Network!</h1>
              <p className="text-lg text-gray-600 mb-4">
                Your account has been created successfully! You can now log in to your partner dashboard.
              </p>
              <div className="bg-green-50 border border-green-200 rounded-xl p-4 mb-6">
                <p className="text-sm text-green-800 font-semibold mb-2">Your Login Credentials:</p>
                <p className="text-sm text-green-700">
                  <strong>Email:</strong> {formData.email}
                </p>
                <p className="text-sm text-green-700 mt-1">
                  <strong>Password:</strong> The password you just created
                </p>
              </div>
              <div className="bg-blue-50 border border-blue-200 rounded-xl p-6 mb-8">
                <p className="text-sm text-blue-800 font-semibold mb-2">You're All Set! 🎉</p>
                <ul className="text-sm text-blue-700 space-y-2 text-left">
                  <li className="flex items-start gap-2">
                    <span className="text-blue-500 mt-0.5">•</span>
                    <span>Your account is active and ready to use</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-500 mt-0.5">•</span>
                    <span>Submit your first referral right away</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-500 mt-0.5">•</span>
                    <span>We'll call you after your first request to verify your business</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-500 mt-0.5">•</span>
                    <span>Start earning {partnerData?.commissionRate || 10}% commission on all referrals!</span>
                  </li>
                </ul>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="/partners/dashboard/request"
                  className="inline-block bg-blue-600 text-white px-8 py-3 rounded-xl font-semibold hover:bg-blue-700 transition"
                >
                  Go to Dashboard →
                </Link>
                <Link
                  href="/"
                  className="inline-block bg-gray-200 text-gray-800 px-8 py-3 rounded-xl font-semibold hover:bg-gray-300 transition"
                >
                  Back to Home
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-blue-50 py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          {/* Header */}
          <div className="text-center mb-10">
            <h1 className="text-4xl sm:text-5xl font-bold text-[#1e1e4a] mb-4">
              Partner With CloseBy - Send & Receive Jobs
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              You send us tows, we send you repairs. Everybody wins.
            </p>
          </div>

          {/* Two-Way Partnership Section */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl shadow-xl p-8 border-2 border-blue-200">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-14 h-14 bg-blue-600 rounded-full flex items-center justify-center shadow-lg">
                  <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-[#1e1e4a]">You Send Us Tows</h3>
              </div>
              <p className="text-gray-700">
                Your customer needs a tow? Call us. Earn <span className="font-semibold text-blue-600">10-20% commission</span> on every referral.
              </p>
            </div>

            <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-2xl shadow-xl p-8 border-2 border-green-200">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-14 h-14 bg-green-600 rounded-full flex items-center justify-center shadow-lg">
                  <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 16l-4-4m0 0l4-4m-4 4h18" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-[#1e1e4a]">We Send You Work</h3>
              </div>
              <p className="text-gray-700">
                Our customers need repairs? We send them <span className="font-semibold text-green-600">straight to you</span>.
              </p>
            </div>
          </div>

          {/* Membership Tiers */}
          <div className="mb-12">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Silver Tier */}
              <div className="bg-gradient-to-br from-gray-400 to-gray-500 rounded-2xl shadow-xl p-6 text-white transform hover:scale-105 transition">
                <div className="flex items-center justify-center mb-4">
                  <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center">
                    <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                    </svg>
                  </div>
                </div>
                <h3 className="text-2xl font-bold text-center mb-2">Silver Partner</h3>
                <p className="text-center text-white/90 text-sm mb-4">Starting Tier</p>
                <div className="bg-white/20 rounded-xl p-4 mb-4">
                  <div className="text-center">
                    <div className="text-3xl font-bold mb-1">10%</div>
                    <div className="text-sm text-white/80">of service fee</div>
                  </div>
                </div>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-start gap-2">
                    <svg className="w-5 h-5 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                    </svg>
                    <span>0-10 referrals/month</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <svg className="w-5 h-5 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                    </svg>
                    <span>Weekly payments</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <svg className="w-5 h-5 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                    </svg>
                    <span>Partner dashboard access</span>
                  </li>
                </ul>
              </div>

              {/* Gold Tier */}
              <div className="bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-2xl shadow-xl p-6 text-white transform hover:scale-105 transition border-4 border-yellow-300">
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-yellow-300 text-yellow-900 px-4 py-1 rounded-full text-xs font-bold">
                  POPULAR
                </div>
                <div className="flex items-center justify-center mb-4">
                  <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center">
                    <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                    </svg>
                  </div>
                </div>
                <h3 className="text-2xl font-bold text-center mb-2">Gold Partner</h3>
                <p className="text-center text-white/90 text-sm mb-4">Best Value</p>
                <div className="bg-white/20 rounded-xl p-4 mb-4">
                  <div className="text-center">
                    <div className="text-3xl font-bold mb-1">15%</div>
                    <div className="text-sm text-white/80">of service fee</div>
                  </div>
                </div>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-start gap-2">
                    <svg className="w-5 h-5 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                    </svg>
                    <span>11-25 referrals/month</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <svg className="w-5 h-5 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                    </svg>
                    <span>Priority support line</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <svg className="w-5 h-5 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                    </svg>
                    <span>Bi-weekly payments</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <svg className="w-5 h-5 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                    </svg>
                    <span>Monthly bonus opportunities</span>
                  </li>
                </ul>
              </div>

              {/* Platinum Tier */}
              <div className="bg-gradient-to-br from-purple-600 to-purple-800 rounded-2xl shadow-xl p-6 text-white transform hover:scale-105 transition">
                <div className="flex items-center justify-center mb-4">
                  <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center">
                    <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                    </svg>
                  </div>
                </div>
                <h3 className="text-2xl font-bold text-center mb-2">Platinum Partner</h3>
                <p className="text-center text-white/90 text-sm mb-4">Elite Level</p>
                <div className="bg-white/20 rounded-xl p-4 mb-4">
                  <div className="text-center">
                    <div className="text-3xl font-bold mb-1">20%</div>
                    <div className="text-sm text-white/80">of service fee</div>
                  </div>
                </div>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-start gap-2">
                    <svg className="w-5 h-5 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                    </svg>
                    <span>26+ referrals/month</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <svg className="w-5 h-5 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                    </svg>
                    <span>Dedicated account manager</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <svg className="w-5 h-5 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                    </svg>
                    <span>Same-day payments</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <svg className="w-5 h-5 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                    </svg>
                    <span>Exclusive bonus programs</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <svg className="w-5 h-5 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                    </svg>
                    <span>Marketing materials provided</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Inline Signup Form */}
            <form onSubmit={handleSubmit} className="mt-10 bg-gradient-to-r from-blue-600 to-blue-700 rounded-2xl p-6 sm:p-8">
              <div className="text-center mb-6">
                <h2 className="text-2xl sm:text-3xl font-bold text-white mb-2">Join the Network</h2>
                <p className="text-blue-100 text-sm sm:text-base">Sign up now and get instant access to start referring customers</p>
              </div>

              <div className="flex flex-col lg:flex-row gap-3 items-end">
                <div className="flex-1 w-full">
                  <label htmlFor="businessName" className="block text-xs font-semibold text-blue-100 mb-1">
                    Business Name
                  </label>
                  <input
                    type="text"
                    id="businessName"
                    name="businessName"
                    required
                    value={formData.businessName}
                    onChange={handleInputChange}
                    className="w-full h-12 rounded-lg border-0 bg-white px-4 text-base focus:outline-none focus:ring-4 focus:ring-white/30"
                    placeholder="Your Business Name"
                  />
                </div>

                <div className="flex-1 w-full">
                  <label htmlFor="email" className="block text-xs font-semibold text-blue-100 mb-1">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full h-12 rounded-lg border-0 bg-white px-4 text-base focus:outline-none focus:ring-4 focus:ring-white/30"
                    placeholder="you@email.com"
                  />
                </div>

                <div className="flex-1 w-full">
                  <label htmlFor="password" className="block text-xs font-semibold text-blue-100 mb-1">
                    Password
                  </label>
                  <input
                    type="password"
                    id="password"
                    name="password"
                    required
                    value={formData.password}
                    onChange={handleInputChange}
                    className="w-full h-12 rounded-lg border-0 bg-white px-4 text-base focus:outline-none focus:ring-4 focus:ring-white/30"
                    placeholder="6+ characters"
                    minLength={6}
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full lg:w-auto bg-white text-blue-600 px-8 h-12 rounded-lg font-bold text-base shadow-lg hover:bg-blue-50 focus:outline-none focus:ring-4 focus:ring-white/30 transition disabled:opacity-50 disabled:cursor-not-allowed whitespace-nowrap"
                >
                  {isSubmitting ? (
                    <span className="flex items-center gap-2 justify-center">
                      <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                      </svg>
                      Signing up...
                    </span>
                  ) : (
                    "Join Now →"
                  )}
                </button>
              </div>

              <p className="text-center text-blue-100 text-sm mt-4">
                Already have an account?{" "}
                <Link href="/partners/login" className="text-white font-semibold hover:underline">
                  Log in
                </Link>
              </p>
            </form>

            <div className="mt-8 bg-blue-50 border-2 border-blue-200 rounded-xl p-6 text-center">
              <p className="text-blue-800 font-semibold mb-2">
                Your tier is automatically upgraded based on monthly referral volume!
              </p>
              <p className="text-sm text-blue-700">
                Start at Silver and work your way up to Platinum for maximum earnings. Tiers are calculated monthly.
              </p>
            </div>
          </div>

          {/* How It Works */}
          <div className="bg-white rounded-2xl shadow-xl p-8">
            <h2 className="text-2xl font-bold text-[#1e1e4a] mb-6 text-center">How the Partnership Works</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-blue-600">1</span>
                </div>
                <h3 className="font-bold text-lg mb-2">You Send Us a Tow</h3>
                <p className="text-sm text-gray-600">Your customer needs towing? Call us.</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-blue-600">2</span>
                </div>
                <h3 className="font-bold text-lg mb-2">We Handle Everything</h3>
                <p className="text-sm text-gray-600">We dispatch a truck and take care of your customer</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-blue-600">3</span>
                </div>
                <h3 className="font-bold text-lg mb-2">You Get Paid</h3>
                <p className="text-sm text-gray-600">Earn your referral fee - tracked in your dashboard</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-green-600">4</span>
                </div>
                <h3 className="font-bold text-lg mb-2">We Send You Work</h3>
                <p className="text-sm text-gray-600">Our customer needs repairs? We send them to you.</p>
              </div>
            </div>
          </div>

          {/* Contact Info */}
          <div className="mt-12 text-center text-gray-600">
            <p className="text-sm mb-2">
              Questions about the referral program?
            </p>
            <p className="text-sm">
              Call us at{" "}
              <a href="tel:+18589999293" className="text-blue-600 hover:text-blue-700 font-semibold">
                (858) 999-9293
              </a>
              {" "}or email{" "}
              <a href="mailto:info@closebytowing.com" className="text-blue-600 hover:text-blue-700 font-semibold">
                info@closebytowing.com
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
