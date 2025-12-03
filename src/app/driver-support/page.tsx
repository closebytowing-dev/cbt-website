"use client";

import { useState } from "react";
import Link from "next/link";

// FAQ data for driver app support
const driverFAQ = [
  {
    question: "How do I accept a job?",
    answer: "When a new job comes in, you'll receive a push notification with the job details. Tap the notification or open the app to view the job. Review the pickup location, destination, service type, and estimated payout. Tap 'Accept Job' to confirm. Once accepted, the customer will be notified and you can begin navigation to the pickup location."
  },
  {
    question: "How do I update my availability?",
    answer: "From the main screen of the app, you'll see a toggle switch for your availability status. Set yourself to 'Available' when you're ready to receive jobs, and 'Unavailable' when you're taking a break or done for the day. When unavailable, you won't receive new job notifications. You can change your status at any time."
  },
  {
    question: "How does navigation work?",
    answer: "After accepting a job, tap 'Navigate' to open turn-by-turn directions. The app uses Apple Maps for navigation. You'll be guided first to the customer's pickup location, then to the drop-off destination. The app tracks your location in real-time so dispatch and customers can see your ETA."
  },
  {
    question: "How do I upload job photos?",
    answer: "Job photos are required for documentation. After arriving at a job, you'll be prompted to take photos at key stages: vehicle condition before loading, vehicle secured on truck, and vehicle at drop-off. Tap the camera icon and capture clear photos. These are uploaded automatically and attached to the job record for quality assurance and dispute resolution."
  },
  {
    question: "How do I track my earnings?",
    answer: "Your earnings are displayed in the 'Earnings' tab of the app. You can view your daily, weekly, and monthly totals. Each completed job shows the payout amount, service type, and completion time. Detailed earnings reports can be exported for your records. Payments are processed according to your payout schedule."
  },
  {
    question: "What if I have issues with a job?",
    answer: "If you encounter problems during a job (customer not present, unsafe location, vehicle condition issues, etc.), use the in-app messaging to contact dispatch immediately. You can also call our driver support line at (858) 999-9293. Document any issues with photos and notes in the app. Never leave a job incomplete without contacting dispatch first."
  },
  {
    question: "How do I update my profile or vehicle info?",
    answer: "Go to the 'Profile' tab in the app. Here you can update your contact information, profile photo, and vehicle details. If you change vehicles or need to update your tow truck information (capacity, type, equipment), update it here so dispatch can assign you appropriate jobs. Changes take effect immediately."
  },
  {
    question: "Why am I not receiving job notifications?",
    answer: "First, check that you're set to 'Available' in the app. Verify that notifications are enabled in your iPhone Settings > CloseBy Driver > Notifications. Make sure you have a stable internet connection. If issues persist, try logging out and back in, or contact driver support for assistance."
  },
  {
    question: "How do I mark a job as complete?",
    answer: "After dropping off the vehicle and taking final photos, tap 'Complete Job' on the job screen. You'll be prompted to confirm completion and may need to collect payment if applicable. Once confirmed, the job is closed and added to your completed jobs history. Your earnings will be updated automatically."
  },
  {
    question: "What do I do if the app crashes or freezes?",
    answer: "Force close the app by swiping up from the bottom of your screen and swiping the app away. Reopen the app and log back in if needed. If you were in the middle of a job, your progress is saved and the job will still be assigned to you. Contact driver support if you continue experiencing technical issues."
  }
];

// Utility to create stable IDs
function slugify(str: string) {
  return str
    .toLowerCase()
    .replace(/&/g, "and")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

export default function DriverSupportPage() {
  const [openFAQ, setOpenFAQ] = useState<string | null>(null);

  const toggleFAQ = (id: string) => {
    setOpenFAQ(openFAQ === id ? null : id);
  };

  return (
    <main className="min-h-screen bg-gradient-to-b from-[#1e1e4a] to-[#2a2a5a]">
      {/* Hero Section */}
      <section className="relative bg-[#1e1e4a] text-white py-12 sm:py-16 lg:py-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="text-center">
            {/* App Icon Badge */}
            <div className="inline-flex items-center justify-center w-20 h-20 sm:w-24 sm:h-24 bg-gradient-to-br from-[#ffba42] to-[#ff9500] rounded-2xl shadow-2xl mb-6">
              <svg className="w-12 h-12 sm:w-14 sm:h-14 text-[#1e1e4a]" fill="currentColor" viewBox="0 0 24 24">
                <path d="M18.92 6.01C18.72 5.42 18.16 5 17.5 5h-11c-.66 0-1.21.42-1.42 1.01L3 12v8c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-1h12v1c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-8l-2.08-5.99zM6.5 16c-.83 0-1.5-.67-1.5-1.5S5.67 13 6.5 13s1.5.67 1.5 1.5S7.33 16 6.5 16zm11 0c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5zM5 11l1.5-4.5h11L19 11H5z"/>
              </svg>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-6xl font-extrabold leading-tight">
              CloseBy Driver <span className="text-[#ffba42]">App Support</span>
            </h1>
            <p className="mt-4 sm:mt-6 text-lg sm:text-xl lg:text-2xl text-white/90 max-w-3xl mx-auto px-4">
              Help center for tow truck operators and service providers using the CloseBy Driver app
            </p>
          </div>
        </div>
      </section>

      {/* Getting Started Section */}
      <section className="py-12 sm:py-16 lg:py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-center text-[#1e1e4a] mb-8 sm:mb-12">
            Getting Started
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                step: "1",
                title: "Download the App",
                description: "Get the CloseBy Driver app from the App Store on your iPhone.",
                icon: (
                  <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17 1.01L7 1c-1.1 0-2 .9-2 2v18c0 1.1.9 2 2 2h10c1.1 0 2-.9 2-2V3c0-1.1-.9-1.99-2-1.99zM17 19H7V5h10v14z"/>
                  </svg>
                )
              },
              {
                step: "2",
                title: "Sign Up & Verify",
                description: "Create your driver account and complete the verification process.",
                icon: (
                  <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
                  </svg>
                )
              },
              {
                step: "3",
                title: "Go Available",
                description: "Toggle your status to available when you're ready to receive jobs.",
                icon: (
                  <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                  </svg>
                )
              },
              {
                step: "4",
                title: "Accept Jobs",
                description: "Receive job notifications and accept services in your area.",
                icon: (
                  <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M18.92 6.01C18.72 5.42 18.16 5 17.5 5h-11c-.66 0-1.21.42-1.42 1.01L3 12v8c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-1h12v1c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-8l-2.08-5.99zM6.5 16c-.83 0-1.5-.67-1.5-1.5S5.67 13 6.5 13s1.5.67 1.5 1.5S7.33 16 6.5 16zm11 0c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5zM5 11l1.5-4.5h11L19 11H5z"/>
                  </svg>
                )
              }
            ].map((item) => (
              <div key={item.step} className="relative bg-gradient-to-br from-[#1e1e4a] to-[#2a2a5a] rounded-xl p-6 text-white hover:scale-105 transition-transform">
                {/* Step Number */}
                <div className="absolute -top-3 -left-3 w-10 h-10 bg-[#ffba42] rounded-full flex items-center justify-center text-[#1e1e4a] font-bold text-lg shadow-lg">
                  {item.step}
                </div>

                <div className="text-[#ffba42] mb-4 mt-2">
                  {item.icon}
                </div>

                <h3 className="text-lg font-bold mb-2">{item.title}</h3>
                <p className="text-white/80 text-sm leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-12 sm:py-16 lg:py-20 bg-[#1e1e4a]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-center text-white mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-center text-white/70 mb-8 sm:mb-12 max-w-2xl mx-auto">
            Find answers to common questions about using the CloseBy Driver app
          </p>

          <div className="space-y-4">
            {driverFAQ.map((faq) => {
              const id = slugify(faq.question);
              const isOpen = openFAQ === id;

              return (
                <div
                  key={id}
                  id={id}
                  className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl overflow-hidden scroll-mt-28"
                >
                  <button
                    onClick={() => toggleFAQ(id)}
                    className="w-full px-6 py-5 flex items-center justify-between gap-4 text-left hover:bg-white/5 transition"
                    aria-expanded={isOpen}
                    aria-controls={`${id}-answer`}
                  >
                    <span className="text-base sm:text-lg font-semibold text-white">
                      {faq.question}
                    </span>
                    <span className={`flex-shrink-0 w-8 h-8 rounded-full border border-[#ffba42] flex items-center justify-center transition-transform ${isOpen ? 'rotate-45' : ''}`}>
                      <svg className="w-4 h-4 text-[#ffba42]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                      </svg>
                    </span>
                  </button>

                  {isOpen && (
                    <div
                      id={`${id}-answer`}
                      className="px-6 pb-5 text-white/80 leading-relaxed"
                    >
                      {faq.answer}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Contact Support Section */}
      <section className="py-12 sm:py-16 lg:py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-center text-[#1e1e4a] mb-4">
            Contact Driver Support
          </h2>
          <p className="text-center text-gray-600 mb-8 sm:mb-12 max-w-2xl mx-auto">
            Need help with the app or have a technical issue? Our driver support team is here to assist you.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {/* Phone */}
            <a
              href="tel:+18589999293"
              className="flex flex-col items-center justify-center bg-[#1e1e4a] text-white p-8 rounded-xl hover:scale-105 transition-transform shadow-lg"
            >
              <div className="w-16 h-16 bg-[#ffba42] rounded-full flex items-center justify-center mb-4">
                <svg className="w-8 h-8 text-[#1e1e4a]" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                </svg>
              </div>
              <span className="text-2xl sm:text-3xl font-bold">(858) 999-9293</span>
              <span className="text-sm text-white/70 mt-2">Tap to Call</span>
              <span className="text-xs text-[#ffba42] mt-1">Available 24/7</span>
            </a>

            {/* Email */}
            <a
              href="mailto:drivers@closebytowing.com"
              className="flex flex-col items-center justify-center bg-blue-600 text-white p-8 rounded-xl hover:scale-105 transition-transform shadow-lg"
            >
              <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mb-4">
                <svg className="w-8 h-8 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                  <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                </svg>
              </div>
              <span className="text-lg font-bold">Email Support</span>
              <span className="text-sm text-white/90 mt-1">drivers@closebytowing.com</span>
              <span className="text-xs text-white/70 mt-1">Response within 24 hours</span>
            </a>

            {/* In-App */}
            <div className="flex flex-col items-center justify-center bg-gradient-to-br from-emerald-500 to-teal-600 text-white p-8 rounded-xl shadow-lg">
              <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mb-4">
                <svg className="w-8 h-8 text-emerald-600" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M18 10c0 3.866-3.582 7-8 7a8.841 8.841 0 01-4.083-.98L2 17l1.338-3.123C2.493 12.767 2 11.434 2 10c0-3.866 3.582-7 8-7s8 3.134 8 7zM7 9H5v2h2V9zm8 0h-2v2h2V9zM9 9h2v2H9V9z" clipRule="evenodd" />
                </svg>
              </div>
              <span className="text-lg font-bold">In-App Chat</span>
              <span className="text-sm text-white/90 mt-1 text-center">Message dispatch directly from the app</span>
              <span className="text-xs text-white/70 mt-1">Fastest response</span>
            </div>
          </div>
        </div>
      </section>

      {/* App Information Section */}
      <section className="py-12 sm:py-16 lg:py-20 bg-[#ffba42]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-center text-[#1e1e4a] mb-8 sm:mb-12">
            App Information
          </h2>

          <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
            <div className="grid grid-cols-1 md:grid-cols-2">
              {/* Left: App Details */}
              <div className="p-8 space-y-6">
                <div>
                  <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wide">App Name</h3>
                  <p className="text-xl font-bold text-[#1e1e4a] mt-1">CloseBy Driver</p>
                </div>

                <div>
                  <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wide">Current Version</h3>
                  <p className="text-xl font-bold text-[#1e1e4a] mt-1">1.0.0</p>
                </div>

                <div>
                  <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wide">Compatibility</h3>
                  <p className="text-lg text-gray-700 mt-1">Requires iOS 14.0 or later</p>
                  <p className="text-sm text-gray-500">Compatible with iPhone</p>
                </div>

                <div>
                  <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wide">Developer</h3>
                  <p className="text-lg text-gray-700 mt-1">CloseBy Towing LLC</p>
                </div>
              </div>

              {/* Right: Download Button */}
              <div className="bg-[#1e1e4a] p-8 flex flex-col items-center justify-center">
                <div className="w-24 h-24 bg-gradient-to-br from-[#ffba42] to-[#ff9500] rounded-2xl flex items-center justify-center mb-6 shadow-lg">
                  <svg className="w-14 h-14 text-[#1e1e4a]" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M18.92 6.01C18.72 5.42 18.16 5 17.5 5h-11c-.66 0-1.21.42-1.42 1.01L3 12v8c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-1h12v1c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-8l-2.08-5.99zM6.5 16c-.83 0-1.5-.67-1.5-1.5S5.67 13 6.5 13s1.5.67 1.5 1.5S7.33 16 6.5 16zm11 0c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5zM5 11l1.5-4.5h11L19 11H5z"/>
                  </svg>
                </div>

                <p className="text-white/80 text-center mb-6">Download the CloseBy Driver app from the App Store</p>

                {/* App Store Button */}
                <a
                  href="#"
                  className="inline-flex items-center gap-3 bg-white text-[#1e1e4a] px-6 py-3 rounded-xl font-semibold hover:bg-gray-100 transition shadow-lg"
                  aria-label="Download on the App Store"
                >
                  <svg className="w-8 h-8" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
                  </svg>
                  <div className="text-left">
                    <div className="text-xs">Download on the</div>
                    <div className="text-lg font-bold -mt-1">App Store</div>
                  </div>
                </a>

                <p className="text-white/50 text-xs mt-4 text-center">
                  Free download • In-app features require driver account
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Back to Home */}
      <section className="py-8 bg-[#1e1e4a]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-white/70 hover:text-white transition"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            Back to CloseBy Towing
          </Link>
        </div>
      </section>
    </main>
  );
}
