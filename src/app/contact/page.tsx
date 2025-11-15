"use client";
import Image from "next/image";
import { useState } from "react";
import LeftPopup from "@/components/LeftPopup";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would integrate with your email service (SendGrid, etc.)
    console.log("Form submitted:", formData);
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 5000);
  };

  return (
    <>
      <main className="min-h-screen bg-gradient-to-b from-[#1e1e4a] to-[#2a2a5a]">
        {/* Hero Section */}
        <section className="relative bg-[#1e1e4a] text-white py-12 sm:py-16 lg:py-24">
          <div className="max-w-6xl mx-auto px-4 sm:px-6">
            <div className="text-center">
              <h1 className="text-3xl sm:text-4xl lg:text-6xl font-extrabold leading-tight">
                Contact <span className="text-[#ffba42]">CloseBy Towing</span>
              </h1>
              <p className="mt-4 sm:mt-6 text-lg sm:text-xl lg:text-2xl text-white/90 max-w-3xl mx-auto px-4">
                24/7 Emergency Assistance • Multiple Ways to Reach Us
              </p>
            </div>
          </div>
        </section>

        {/* Emergency Contact Buttons */}
        <section className="py-8 sm:py-12 bg-[#ffba42]">
          <div className="max-w-6xl mx-auto px-4 sm:px-6">
            <div className="text-center mb-6 sm:mb-8">
              <h2 className="text-2xl sm:text-3xl font-extrabold text-[#1e1e4a] mb-2">
                🚨 Need Emergency Assistance?
              </h2>
              <p className="text-[#1e1e4a]/80 text-base sm:text-lg px-4">
                We're available 24/7/365 - Call or text us now!
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6 max-w-4xl mx-auto">
              <a
                href="tel:+18589999293"
                className="flex flex-col items-center justify-center bg-[#1e1e4a] text-white p-6 rounded-xl hover:scale-105 transition-transform shadow-lg"
              >
                <svg className="w-12 h-12 mb-3" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                </svg>
                <span className="text-3xl sm:text-4xl font-bold">(858) 999-9293</span>
                <span className="text-sm text-white/70 mt-1">Tap to Call</span>
              </a>
              <a
                href="sms:+18589999293?&body=I need roadside assistance"
                className="flex flex-col items-center justify-center bg-green-600 text-white p-6 rounded-xl hover:scale-105 transition-transform shadow-lg"
              >
                <svg className="w-12 h-12 mb-3" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2 5a2 2 0 012-2h12a2 2 0 012 2v10a2 2 0 01-2 2H4a2 2 0 01-2-2V5zm3.293 1.293a1 1 0 011.414 0l3 3a1 1 0 010 1.414l-3 3a1 1 0 01-1.414-1.414L7.586 10 5.293 7.707a1 1 0 010-1.414zM11 12a1 1 0 100 2h3a1 1 0 100-2h-3z" />
                </svg>
                <span className="text-2xl sm:text-3xl font-bold">Text Us</span>
                <span className="text-base sm:text-lg text-white/70 mt-1">(858) 999-9293</span>
              </a>
              <a
                href="mailto:info@closebytowing.com"
                className="flex flex-col items-center justify-center bg-blue-600 text-white p-6 rounded-xl hover:scale-105 transition-transform shadow-lg"
              >
                <svg className="w-12 h-12 mb-3" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                  <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                </svg>
                <span className="text-lg font-bold">Email Us</span>
                <span className="text-sm text-white/70 mt-1">info@closebytowing.com</span>
              </a>
            </div>
          </div>
        </section>

        {/* Contact Form & Info */}
        <section className="py-12 sm:py-16 lg:py-20 bg-white">
          <div className="max-w-6xl mx-auto px-4 sm:px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12">
              {/* Contact Form */}
              <div>
                <h2 className="text-3xl font-bold text-[#1e1e4a] mb-6">
                  Send Us a Message
                </h2>
                <p className="text-gray-700 mb-6">
                  Have a question? Want to schedule non-emergency service? Fill out the form below and we'll get back to you within 24 hours.
                </p>
                {submitted && (
                  <div className="mb-6 p-4 bg-green-100 border border-green-400 rounded-lg text-green-800">
                    ✅ Thank you! We'll get back to you within 24 hours.
                  </div>
                )}
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Your Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#ffba42] text-gray-900"
                      placeholder="John Doe"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#ffba42] text-gray-900"
                      placeholder="john@example.com"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#ffba42] text-gray-900"
                      placeholder="(858) 999-9293"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Message *
                    </label>
                    <textarea
                      required
                      rows={5}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#ffba42] text-gray-900"
                      placeholder="How can we help you?"
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full bg-[#ffba42] text-[#1e1e4a] px-8 py-4 rounded-lg font-bold text-lg hover:brightness-110 transition-all shadow-lg"
                  >
                    Send Message
                  </button>
                </form>
              </div>

              {/* Contact Information */}
              <div>
                <h2 className="text-3xl font-bold text-[#1e1e4a] mb-6">
                  Contact Information
                </h2>

                <div className="space-y-6">
                  {/* Phone */}
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-[#ffba42] rounded-full flex items-center justify-center flex-shrink-0">
                      <svg className="w-6 h-6 text-[#1e1e4a]" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-bold text-[#1e1e4a] mb-1">Phone</h3>
                      <a href="tel:+18589999293" className="text-blue-600 hover:underline text-xl sm:text-2xl">
                        (858) 999-9293
                      </a>
                      <p className="text-sm text-gray-600 mt-1">Available 24/7 for emergencies</p>
                    </div>
                  </div>

                  {/* Email */}
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-[#ffba42] rounded-full flex items-center justify-center flex-shrink-0">
                      <svg className="w-6 h-6 text-[#1e1e4a]" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                        <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-bold text-[#1e1e4a] mb-1">Email</h3>
                      <a href="mailto:info@closebytowing.com" className="text-blue-600 hover:underline">
                        info@closebytowing.com
                      </a>
                      <p className="text-sm text-gray-600 mt-1">We respond within 24 hours</p>
                    </div>
                  </div>

                  {/* Service Area */}
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-[#ffba42] rounded-full flex items-center justify-center flex-shrink-0">
                      <svg className="w-6 h-6 text-[#1e1e4a]" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-bold text-[#1e1e4a] mb-1">Service Area</h3>
                      <p className="text-gray-700">All of San Diego County</p>
                      <p className="text-sm text-gray-600 mt-1">Including all major neighborhoods and surrounding areas</p>
                    </div>
                  </div>

                  {/* Hours */}
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-[#ffba42] rounded-full flex items-center justify-center flex-shrink-0">
                      <svg className="w-6 h-6 text-[#1e1e4a]" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-bold text-[#1e1e4a] mb-1">Hours</h3>
                      <p className="text-gray-700 font-semibold">24/7/365</p>
                      <p className="text-sm text-gray-600 mt-1">Open every day, including holidays</p>
                    </div>
                  </div>
                </div>

                {/* Quick Facts */}
                <div className="mt-8 bg-[#1e1e4a] text-white rounded-xl p-6">
                  <h3 className="font-bold text-xl mb-4 text-[#ffba42]">Why Choose Us?</h3>
                  <ul className="space-y-3">
                    <li className="flex items-center gap-2">
                      <span className="text-[#ffba42]">✓</span>
                      <span>20-35 minute average response time</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="text-[#ffba42]">✓</span>
                      <span>Licensed & fully insured</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="text-[#ffba42]">✓</span>
                      <span>Upfront pricing, no hidden fees</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="text-[#ffba42]">✓</span>
                      <span>4.9★ rating with 1,247+ reviews</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="text-[#ffba42]">✓</span>
                      <span>15% discount for online orders</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Map Section - Placeholder */}
        <section className="py-12 sm:py-16 bg-gray-100">
          <div className="max-w-6xl mx-auto px-4 sm:px-6">
            <h2 className="text-2xl sm:text-3xl font-bold text-center text-[#1e1e4a] mb-6 sm:mb-8">
              We Serve All of San Diego County
            </h2>
            <div className="bg-white rounded-xl shadow-lg p-3 sm:p-4">
              <div className="relative h-[300px] sm:h-[400px] rounded-lg overflow-hidden">
                <Image
                  src="/service-area/san-diego-service-area.webp"
                  alt="CloseBy Towing service area map - San Diego County"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        <LeftPopup />
      </main>
    </>
  );
}
