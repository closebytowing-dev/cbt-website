import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service & SMS Program | CloseBy Towing San Diego",
  description: "Terms of Service, SMS program terms, and user agreement for CloseBy Towing. Learn about our service terms, SMS notifications, opt-out options, and privacy practices.",
  keywords: "terms of service, SMS terms, text message program, towing terms, service agreement, user terms, CloseBy Towing terms",
  openGraph: {
    title: "Terms of Service & SMS Program | CloseBy Towing",
    description: "Terms of Service and SMS program terms for CloseBy Towing San Diego.",
    url: "https://closebytowing.com/terms",
    type: "website",
  },
  alternates: {
    canonical: "/terms",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function TermsPage() {
  const sections = [
    { id: "acceptance", title: "Acceptance of Terms", icon: "✓" },
    { id: "services", title: "Services Description", icon: "🚚" },
    { id: "sms-program", title: "SMS/Text Message Program", icon: "💬" },
    { id: "payment", title: "Payment Terms", icon: "💳" },
    { id: "liability", title: "Liability & Insurance", icon: "🛡️" },
    { id: "cancellation", title: "Cancellation Policy", icon: "⏸️" },
    { id: "user-responsibilities", title: "User Responsibilities", icon: "👤" },
    { id: "intellectual-property", title: "Intellectual Property", icon: "©" },
    { id: "modifications", title: "Modifications", icon: "🔄" },
    { id: "contact", title: "Contact Information", icon: "📧" },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">

      {/* HERO SECTION */}
      <section className="relative bg-gradient-to-br from-[#1e1e4a] via-[#2a2a5a] to-[#1e1e4a] text-white py-16 sm:py-20">

        {/* Background pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `linear-gradient(rgba(255, 186, 66, 0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(255, 186, 66, 0.3) 1px, transparent 1px)`,
            backgroundSize: '50px 50px',
          }}></div>
        </div>

        <div className="relative max-w-5xl mx-auto px-6 text-center">

          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-[#ffba42]/20 border border-[#ffba42]/50 text-[#ffba42] px-5 py-2 rounded-full font-semibold text-sm backdrop-blur-sm mb-6">
            <div className="w-2 h-2 bg-[#ffba42] rounded-full animate-pulse"></div>
            EFFECTIVE DATE: JANUARY 1, 2025
          </div>

          {/* Main Headline */}
          <h1 className="text-5xl lg:text-7xl font-black leading-tight mb-6">
            Terms of Service
          </h1>

          {/* Subheadline */}
          <p className="text-xl text-white/90 leading-relaxed max-w-3xl mx-auto mb-8">
            Please read these terms carefully before using CloseBy Towing's services. By using our services, you agree to be bound by these terms.
          </p>

          {/* Trust Badge */}
          <div className="flex flex-wrap justify-center gap-4">
            <div className="flex items-center gap-3 bg-white/10 backdrop-blur-sm px-6 py-3 rounded-xl border border-white/20">
              <span className="text-2xl">🔒</span>
              <div className="text-left">
                <p className="font-bold text-sm">Secure & Transparent</p>
                <p className="text-xs text-white/70">Clear Terms & Conditions</p>
              </div>
            </div>

            <div className="flex items-center gap-3 bg-white/10 backdrop-blur-sm px-6 py-3 rounded-xl border border-white/20">
              <span className="text-2xl">📱</span>
              <div className="text-left">
                <p className="font-bold text-sm">SMS Notifications</p>
                <p className="text-xs text-white/70">Stay Updated on Service Status</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* MAIN CONTENT */}
      <section className="py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-6">

          <div className="grid lg:grid-cols-12 gap-12">

            {/* SIDEBAR - Table of Contents */}
            <aside className="lg:col-span-3">
              <div className="sticky top-24">
                <div className="bg-white border-2 border-[#ffba42]/30 rounded-2xl p-6 shadow-lg">
                  <h3 className="text-xl font-black mb-6 flex items-center gap-2 text-[#1e1e4a]">
                    <span>📑</span>
                    Table of Contents
                  </h3>
                  <nav className="space-y-2">
                    {sections.map((section) => (
                      <a
                        key={section.id}
                        href={`#${section.id}`}
                        className="block px-4 py-3 rounded-xl transition-all duration-300 flex items-center gap-3 hover:bg-[#ffba42]/10 text-slate-700 border border-transparent hover:border-[#ffba42]/30"
                      >
                        <span className="text-lg">{section.icon}</span>
                        <span className="text-sm font-medium">{section.title}</span>
                      </a>
                    ))}
                  </nav>
                </div>
              </div>
            </aside>

            {/* MAIN CONTENT */}
            <main className="lg:col-span-9 space-y-12">

              {/* Introduction */}
              <div className="bg-gradient-to-br from-[#ffba42]/10 to-[#ffba42]/5 border-2 border-[#ffba42]/30 rounded-3xl p-8 sm:p-10">
                <div className="flex items-start gap-4 mb-6">
                  <div className="w-14 h-14 bg-[#ffba42] rounded-2xl flex items-center justify-center text-2xl flex-shrink-0">
                    👋
                  </div>
                  <div>
                    <h2 className="text-3xl font-black mb-3 text-[#1e1e4a]">Welcome</h2>
                    <p className="text-slate-700 text-lg leading-relaxed">
                      These Terms of Service ("Terms") govern your use of CloseBy Towing's website, services, and SMS text message program.
                      By requesting towing or roadside assistance from CloseBy Towing, you acknowledge that you have read, understood, and agree to these Terms.
                    </p>
                  </div>
                </div>
                <div className="bg-white/60 rounded-xl p-6 border border-[#ffba42]/20">
                  <p className="text-sm text-slate-600">
                    <strong className="text-[#1e1e4a]">Last Updated:</strong> January 1, 2025 •
                    <strong className="text-[#1e1e4a] ml-3">Effective Date:</strong> January 1, 2025
                  </p>
                </div>
              </div>

              {/* Section 1: Acceptance of Terms */}
              <section id="acceptance" className="scroll-mt-24">
                <div className="bg-white border-2 border-slate-200 rounded-3xl p-8 sm:p-10 shadow-sm">
                  <div className="flex items-start gap-4 mb-6">
                    <div className="w-14 h-14 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center text-2xl flex-shrink-0">
                      ✓
                    </div>
                    <div>
                      <h2 className="text-3xl sm:text-4xl font-black mb-4 text-[#1e1e4a]">Acceptance of Terms</h2>
                      <p className="text-slate-700 text-lg leading-relaxed">
                        By accessing our website, calling our phone number, submitting a service request, or using any of our services, you agree to comply with and be bound by these Terms of Service.
                      </p>
                    </div>
                  </div>

                  <div className="space-y-4 text-slate-700">
                    <p className="leading-relaxed">
                      If you do not agree to these Terms, please do not use our services. We reserve the right to refuse service to anyone for any reason at any time.
                    </p>
                    <div className="bg-blue-50 border border-blue-200 rounded-xl p-6">
                      <h3 className="text-lg font-bold mb-2 text-blue-900">Age Requirement</h3>
                      <p className="text-blue-800">You must be at least 18 years old to use our services. By using CloseBy Towing, you represent and warrant that you are at least 18 years of age.</p>
                    </div>
                  </div>
                </div>
              </section>

              {/* Section 2: Services Description */}
              <section id="services" className="scroll-mt-24">
                <div className="bg-white border-2 border-slate-200 rounded-3xl p-8 sm:p-10 shadow-sm">
                  <div className="flex items-start gap-4 mb-6">
                    <div className="w-14 h-14 bg-gradient-to-br from-[#ffba42] to-[#ffc857] rounded-2xl flex items-center justify-center text-2xl flex-shrink-0">
                      🚚
                    </div>
                    <div>
                      <h2 className="text-3xl sm:text-4xl font-black mb-4 text-[#1e1e4a]">Services Description</h2>
                      <p className="text-slate-700 text-lg">
                        CloseBy Towing provides 24/7 emergency towing and roadside assistance services in San Diego County, California.
                      </p>
                    </div>
                  </div>

                  <div className="space-y-6">
                    <div>
                      <h3 className="text-xl font-bold mb-3 text-[#1e1e4a]">Our Services Include:</h3>
                      <ul className="space-y-3">
                        {[
                          "Emergency towing (flatbed and wheel-lift)",
                          "Jump start service for dead batteries",
                          "Tire change and flat tire assistance",
                          "Fuel delivery (gas and diesel)",
                          "Lockout service for locked vehicles",
                          "Collision recovery and accident towing",
                          "Winch-out and recovery services",
                          "Long-distance towing",
                        ].map((service, i) => (
                          <li key={i} className="flex items-start gap-3 text-slate-700">
                            <svg className="w-5 h-5 text-[#ffba42] mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                            </svg>
                            <span>{service}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="bg-amber-50 border border-amber-200 rounded-xl p-6">
                      <h3 className="text-lg font-bold mb-2 text-amber-900">Service Availability</h3>
                      <p className="text-amber-800">While we strive to provide 24/7 service, availability may be affected by weather conditions, demand, driver availability, and other factors beyond our control. Response times are estimates and not guarantees.</p>
                    </div>
                  </div>
                </div>
              </section>

              {/* Section 3: SMS/Text Message Program - CARRIER COMPLIANCE */}
              <section id="sms-program" className="scroll-mt-24">
                <div className="bg-gradient-to-br from-green-50 to-emerald-50 border-2 border-green-300 rounded-3xl p-8 sm:p-10 shadow-lg">
                  <div className="flex items-start gap-4 mb-6">
                    <div className="w-14 h-14 bg-gradient-to-br from-green-500 to-emerald-600 rounded-2xl flex items-center justify-center text-2xl flex-shrink-0">
                      💬
                    </div>
                    <div>
                      <h2 className="text-3xl sm:text-4xl font-black mb-4 text-green-900">SMS/Text Message Program</h2>
                      <p className="text-green-800 text-lg leading-relaxed">
                        When you provide your phone number to CloseBy Towing and opt in to receive text messages, you consent to participate in our SMS notification program.
                      </p>
                    </div>
                  </div>

                  <div className="space-y-6">

                    {/* Program Purpose */}
                    <div className="bg-white border border-green-200 rounded-2xl p-6">
                      <h3 className="text-xl font-bold mb-4 flex items-center gap-2 text-green-900">
                        <svg className="w-6 h-6 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                        </svg>
                        Program Purpose & Message Types
                      </h3>
                      <p className="text-slate-700 mb-4 leading-relaxed">
                        Our SMS program is designed for <strong>customer care and service updates</strong>. When you request a service, we may send you text messages including:
                      </p>
                      <ul className="space-y-2 text-slate-700">
                        {[
                          "Service request confirmation",
                          "Driver assignment and estimated time of arrival (ETA)",
                          "Updates on driver location and status",
                          "Service arrival notifications",
                          "Service completion notices",
                          "Payment confirmations and receipts",
                          "Follow-up service quality surveys",
                        ].map((msg, i) => (
                          <li key={i} className="flex items-start gap-3">
                            <span className="text-green-600 font-bold mt-1">•</span>
                            <span>{msg}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Message Frequency */}
                    <div className="bg-white border border-green-200 rounded-2xl p-6">
                      <h3 className="text-xl font-bold mb-3 text-green-900">Message Frequency</h3>
                      <p className="text-slate-700 leading-relaxed">
                        <strong>Message frequency varies</strong> based on your service request and interactions with us. You may receive multiple messages per service call (typically 3-8 messages), including status updates, arrival notifications, and completion confirmations.
                      </p>
                    </div>

                    {/* Costs & Data Rates */}
                    <div className="bg-yellow-50 border-2 border-yellow-300 rounded-2xl p-6">
                      <h3 className="text-xl font-bold mb-3 flex items-center gap-2 text-yellow-900">
                        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                        </svg>
                        Standard Message & Data Rates May Apply
                      </h3>
                      <p className="text-yellow-900 leading-relaxed">
                        Message and data rates may apply based on your mobile carrier plan. You are responsible for any charges from your mobile carrier. CloseBy Towing does not charge for text messages, but your carrier may.
                      </p>
                    </div>

                    {/* Opt-Out Instructions */}
                    <div className="bg-white border-2 border-red-300 rounded-2xl p-6">
                      <h3 className="text-xl font-bold mb-4 flex items-center gap-2 text-red-900">
                        <svg className="w-6 h-6 text-red-600" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M13.477 14.89A6 6 0 015.11 6.524l8.367 8.368zm1.414-1.414L6.524 5.11a6 6 0 018.367 8.367zM18 10a8 8 0 11-16 0 8 8 0 0116 0z" clipRule="evenodd" />
                        </svg>
                        How to Opt Out
                      </h3>
                      <div className="space-y-4">
                        <p className="text-slate-700 leading-relaxed">
                          <strong>You can opt out of receiving SMS messages at any time.</strong> To stop receiving text messages from CloseBy Towing:
                        </p>
                        <div className="bg-red-50 border border-red-200 rounded-xl p-5">
                          <p className="text-red-900 font-bold text-lg mb-2">Reply "STOP" to opt out</p>
                          <p className="text-red-800 text-sm">
                            Simply reply <strong>STOP</strong> to any text message you receive from us, and you will be immediately unsubscribed from future messages. You may receive one final confirmation message.
                          </p>
                        </div>
                        <p className="text-slate-600 text-sm">
                          Note: Opting out of SMS messages may affect your ability to receive real-time service updates. You can still receive service updates via phone call or email.
                        </p>
                      </div>
                    </div>

                    {/* Help Instructions */}
                    <div className="bg-white border border-green-200 rounded-2xl p-6">
                      <h3 className="text-xl font-bold mb-3 flex items-center gap-2 text-green-900">
                        <svg className="w-6 h-6 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z" clipRule="evenodd" />
                        </svg>
                        Need Help?
                      </h3>
                      <p className="text-slate-700 leading-relaxed mb-4">
                        If you need assistance with our SMS program or have questions:
                      </p>
                      <div className="flex flex-wrap gap-3">
                        <div className="inline-flex items-center gap-2 bg-green-100 px-4 py-2 rounded-lg text-sm font-bold text-green-900">
                          <span>📱</span>
                          Reply "HELP" for support
                        </div>
                      </div>
                      <div className="mt-4 p-4 bg-slate-50 rounded-lg">
                        <p className="text-slate-700 text-sm mb-2"><strong>Or contact us directly:</strong></p>
                        <p className="text-slate-700 text-sm">
                          <strong>Phone:</strong> <a href="tel:+18589999293" className="text-blue-600 hover:underline">(858) 999-9293</a><br />
                          <strong>Email:</strong> <a href="mailto:info@closebytowing.com" className="text-blue-600 hover:underline">info@closebytowing.com</a>
                        </p>
                      </div>
                    </div>

                    {/* Privacy & Data Sharing */}
                    <div className="bg-white border-2 border-blue-300 rounded-2xl p-6">
                      <h3 className="text-xl font-bold mb-4 flex items-center gap-2 text-blue-900">
                        <svg className="w-6 h-6 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                        Privacy & Data Protection
                      </h3>
                      <div className="space-y-3 text-slate-700">
                        <p className="leading-relaxed">
                          <strong className="text-blue-900">SMS consent is not shared, sold, or transferred to third parties.</strong> Your phone number and SMS consent are used solely for providing you with service updates related to your towing or roadside assistance request.
                        </p>
                        <p className="leading-relaxed">
                          We do not sell, rent, or share your phone number with third-party marketers. Your information is handled in accordance with our <a href="/privacy" className="text-blue-600 hover:underline font-semibold">Privacy Policy</a>.
                        </p>
                      </div>
                    </div>

                    {/* Supported Carriers */}
                    <div className="bg-slate-50 border border-slate-200 rounded-2xl p-6">
                      <h3 className="text-lg font-bold mb-3 text-slate-900">Supported Carriers</h3>
                      <p className="text-slate-700 text-sm">
                        Our SMS program is supported by all major U.S. carriers including AT&T, T-Mobile, Verizon, Sprint, and regional carriers. Message delivery is subject to carrier network availability.
                      </p>
                    </div>

                  </div>
                </div>
              </section>

              {/* Section 4: Payment Terms */}
              <section id="payment" className="scroll-mt-24">
                <div className="bg-white border-2 border-slate-200 rounded-3xl p-8 sm:p-10 shadow-sm">
                  <div className="flex items-start gap-4 mb-6">
                    <div className="w-14 h-14 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-2xl flex items-center justify-center text-2xl flex-shrink-0">
                      💳
                    </div>
                    <div>
                      <h2 className="text-3xl sm:text-4xl font-black mb-4 text-[#1e1e4a]">Payment Terms</h2>
                      <p className="text-slate-700 text-lg">
                        Payment for services is due at the time of service completion unless otherwise arranged.
                      </p>
                    </div>
                  </div>

                  <div className="space-y-6">
                    <div>
                      <h3 className="text-xl font-bold mb-3 text-[#1e1e4a]">Accepted Payment Methods:</h3>
                      <ul className="space-y-3">
                        {[
                          "Major credit cards (Visa, Mastercard, American Express, Discover)",
                          "Debit cards",
                          "Cash (on-site)",
                          "Contactless payments (Apple Pay, Google Pay)",
                        ].map((method, i) => (
                          <li key={i} className="flex items-start gap-3 text-slate-700">
                            <svg className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                            </svg>
                            <span>{method}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="bg-blue-50 border border-blue-200 rounded-xl p-6">
                      <h3 className="text-lg font-bold mb-2 text-blue-900">Pricing & Quotes</h3>
                      <p className="text-blue-800">
                        Prices are provided as estimates based on the information you provide. Final pricing may vary based on actual service requirements, distance, vehicle condition, and other factors. We provide upfront pricing whenever possible and will inform you of any changes before proceeding with service.
                      </p>
                    </div>

                    <div className="bg-amber-50 border border-amber-200 rounded-xl p-6">
                      <h3 className="text-lg font-bold mb-2 text-amber-900">Online Discount</h3>
                      <p className="text-amber-800">
                        When you book online through our website, you automatically receive a 15% discount. This discount is applied at checkout and requires no promo code.
                      </p>
                    </div>
                  </div>
                </div>
              </section>

              {/* Section 5: Liability & Insurance */}
              <section id="liability" className="scroll-mt-24">
                <div className="bg-white border-2 border-slate-200 rounded-3xl p-8 sm:p-10 shadow-sm">
                  <div className="flex items-start gap-4 mb-6">
                    <div className="w-14 h-14 bg-gradient-to-br from-orange-500 to-red-600 rounded-2xl flex items-center justify-center text-2xl flex-shrink-0">
                      🛡️
                    </div>
                    <div>
                      <h2 className="text-3xl sm:text-4xl font-black mb-4 text-[#1e1e4a]">Liability & Insurance</h2>
                      <p className="text-slate-700 text-lg">
                        CloseBy Towing is fully licensed, bonded, and insured. We carry comprehensive liability and cargo insurance.
                      </p>
                    </div>
                  </div>

                  <div className="space-y-6">
                    <div className="space-y-4 text-slate-700">
                      <p className="leading-relaxed">
                        <strong>Insurance Coverage:</strong> We maintain insurance coverage for your vehicle during transport. However, you agree to inspect your vehicle before and after service and report any damage immediately.
                      </p>
                      <p className="leading-relaxed">
                        <strong>Limitation of Liability:</strong> CloseBy Towing's liability is limited to the actual damage caused by our negligence or misconduct, up to the limits of our insurance coverage. We are not liable for pre-existing damage, mechanical failures, or damage caused by factors beyond our control.
                      </p>
                      <p className="leading-relaxed">
                        <strong>Customer Responsibility:</strong> You are responsible for securing all loose items, removing valuables, and ensuring your vehicle is in a condition suitable for towing. We are not responsible for items left in the vehicle.
                      </p>
                    </div>

                    <div className="bg-red-50 border border-red-200 rounded-xl p-6">
                      <h3 className="text-lg font-bold mb-2 text-red-900">Damage Claims</h3>
                      <p className="text-red-800">
                        Any damage claims must be reported within 24 hours of service completion. Claims reported after 24 hours may not be honored. Photographic evidence is required for all damage claims.
                      </p>
                    </div>
                  </div>
                </div>
              </section>

              {/* Section 6: Cancellation Policy */}
              <section id="cancellation" className="scroll-mt-24">
                <div className="bg-white border-2 border-slate-200 rounded-3xl p-8 sm:p-10 shadow-sm">
                  <div className="flex items-start gap-4 mb-6">
                    <div className="w-14 h-14 bg-gradient-to-br from-purple-500 to-pink-600 rounded-2xl flex items-center justify-center text-2xl flex-shrink-0">
                      ⏸️
                    </div>
                    <div>
                      <h2 className="text-3xl sm:text-4xl font-black mb-4 text-[#1e1e4a]">Cancellation Policy</h2>
                      <p className="text-slate-700 text-lg">
                        You may cancel your service request at any time before the driver arrives at your location.
                      </p>
                    </div>
                  </div>

                  <div className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="bg-green-50 border border-green-200 rounded-xl p-6">
                        <h3 className="text-lg font-bold mb-2 text-green-900 flex items-center gap-2">
                          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                          </svg>
                          Free Cancellation
                        </h3>
                        <p className="text-green-800">
                          No charge if you cancel before the driver is dispatched or en route to your location.
                        </p>
                      </div>

                      <div className="bg-amber-50 border border-amber-200 rounded-xl p-6">
                        <h3 className="text-lg font-bold mb-2 text-amber-900 flex items-center gap-2">
                          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                          </svg>
                          Late Cancellation
                        </h3>
                        <p className="text-amber-800">
                          A cancellation fee may apply if you cancel after the driver has been dispatched or is en route.
                        </p>
                      </div>

                      <div className="bg-red-50 border border-red-200 rounded-xl p-6">
                        <h3 className="text-lg font-bold mb-2 text-red-900 flex items-center gap-2">
                          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M13.477 14.89A6 6 0 015.11 6.524l8.367 8.368zm1.414-1.414L6.524 5.11a6 6 0 018.367 8.367zM18 10a8 8 0 11-16 0 8 8 0 0116 0z" clipRule="evenodd" />
                          </svg>
                          No-Show Fee
                        </h3>
                        <p className="text-red-800">
                          If our driver arrives at your location and you are not present or no longer need service, a no-show fee will be charged.
                        </p>
                      </div>

                      <div className="bg-blue-50 border border-blue-200 rounded-xl p-6">
                        <h3 className="text-lg font-bold mb-2 text-blue-900 flex items-center gap-2">
                          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                            <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"/>
                          </svg>
                          How to Cancel
                        </h3>
                        <p className="text-blue-800">
                          Call us at (858) 999-9293 immediately to cancel your service request.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </section>

              {/* Section 7: User Responsibilities */}
              <section id="user-responsibilities" className="scroll-mt-24">
                <div className="bg-white border-2 border-slate-200 rounded-3xl p-8 sm:p-10 shadow-sm">
                  <div className="flex items-start gap-4 mb-6">
                    <div className="w-14 h-14 bg-gradient-to-br from-teal-500 to-cyan-600 rounded-2xl flex items-center justify-center text-2xl flex-shrink-0">
                      👤
                    </div>
                    <div>
                      <h2 className="text-3xl sm:text-4xl font-black mb-4 text-[#1e1e4a]">User Responsibilities</h2>
                      <p className="text-slate-700 text-lg">
                        By using our services, you agree to the following responsibilities:
                      </p>
                    </div>
                  </div>

                  <div className="space-y-4">
                    {[
                      { title: "Accurate Information", desc: "Provide accurate location, vehicle details, and contact information." },
                      { title: "Vehicle Condition", desc: "Ensure your vehicle is in park, keys are available, and parking brake is engaged." },
                      { title: "Remove Valuables", desc: "Remove all valuable items from your vehicle. We are not responsible for personal belongings." },
                      { title: "Vehicle Access", desc: "Ensure the vehicle is accessible and not blocking traffic or in a hazardous location." },
                      { title: "Legal Ownership", desc: "You must be the owner of the vehicle or have authorization to request towing services." },
                      { title: "Payment Authorization", desc: "Provide valid payment method and authorization for charges." },
                      { title: "Cooperation", desc: "Cooperate with our drivers and follow safety instructions." },
                    ].map((item, i) => (
                      <div key={i} className="bg-slate-50 border border-slate-200 rounded-xl p-6">
                        <h3 className="text-lg font-bold mb-2 text-[#1e1e4a]">{item.title}</h3>
                        <p className="text-slate-700">{item.desc}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </section>

              {/* Section 8: Intellectual Property */}
              <section id="intellectual-property" className="scroll-mt-24">
                <div className="bg-white border-2 border-slate-200 rounded-3xl p-8 sm:p-10 shadow-sm">
                  <div className="flex items-start gap-4 mb-6">
                    <div className="w-14 h-14 bg-gradient-to-br from-violet-500 to-purple-600 rounded-2xl flex items-center justify-center text-2xl flex-shrink-0">
                      ©
                    </div>
                    <div>
                      <h2 className="text-3xl sm:text-4xl font-black mb-4 text-[#1e1e4a]">Intellectual Property</h2>
                      <p className="text-slate-700 text-lg">
                        All content on our website, including text, graphics, logos, images, and software, is the property of CloseBy Towing and protected by copyright and trademark laws.
                      </p>
                    </div>
                  </div>

                  <div className="space-y-4 text-slate-700">
                    <p className="leading-relaxed">
                      You may not reproduce, distribute, modify, create derivative works, publicly display, or otherwise use our content without prior written permission.
                    </p>
                  </div>
                </div>
              </section>

              {/* Section 9: Modifications */}
              <section id="modifications" className="scroll-mt-24">
                <div className="bg-white border-2 border-slate-200 rounded-3xl p-8 sm:p-10 shadow-sm">
                  <div className="flex items-start gap-4 mb-6">
                    <div className="w-14 h-14 bg-gradient-to-br from-pink-500 to-rose-600 rounded-2xl flex items-center justify-center text-2xl flex-shrink-0">
                      🔄
                    </div>
                    <div>
                      <h2 className="text-3xl sm:text-4xl font-black mb-4 text-[#1e1e4a]">Modifications to Terms</h2>
                      <p className="text-slate-700 text-lg">
                        We reserve the right to modify these Terms of Service at any time.
                      </p>
                    </div>
                  </div>

                  <div className="space-y-4 text-slate-700">
                    <p className="leading-relaxed">
                      Changes will be posted on this page with an updated "Last Updated" date. Your continued use of our services after any changes indicates your acceptance of the updated Terms.
                    </p>
                    <div className="bg-pink-50 border border-pink-200 rounded-xl p-6">
                      <p className="text-pink-900">
                        <strong>Important:</strong> We recommend reviewing these Terms periodically to stay informed of any updates.
                      </p>
                    </div>
                  </div>
                </div>
              </section>

              {/* Section 10: Contact */}
              <section id="contact" className="scroll-mt-24">
                <div className="bg-gradient-to-br from-[#1e1e4a] to-[#2a2a5a] text-white border-2 border-[#ffba42] rounded-3xl p-8 sm:p-10 shadow-xl">
                  <div className="flex items-start gap-4 mb-6">
                    <div className="w-14 h-14 bg-[#ffba42] rounded-2xl flex items-center justify-center text-2xl flex-shrink-0">
                      📧
                    </div>
                    <div>
                      <h2 className="text-3xl sm:text-4xl font-black mb-4">Contact Us</h2>
                      <p className="text-white/90 text-lg">
                        If you have questions about these Terms of Service or our SMS program, please contact us:
                      </p>
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
                      <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                        <span>📍</span>
                        Mailing Address
                      </h3>
                      <p className="text-white/90">
                        CloseBy Towing<br />
                        San Diego, CA<br />
                        United States
                      </p>
                    </div>

                    <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
                      <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                        <span>📞</span>
                        Contact Information
                      </h3>
                      <div className="space-y-2 text-white/90">
                        <p><strong>Phone:</strong> <a href="tel:+18589999293" className="text-[#ffba42] hover:underline">(858) 999-9293</a></p>
                        <p><strong>Email:</strong> <a href="mailto:info@closebytowing.com" className="text-[#ffba42] hover:underline">info@closebytowing.com</a></p>
                        <p><strong>Website:</strong> <a href="/" className="text-[#ffba42] hover:underline">www.closebytowing.com</a></p>
                      </div>
                    </div>
                  </div>

                  <div className="mt-8 bg-[#ffba42] text-[#1e1e4a] rounded-2xl p-8 text-center">
                    <h3 className="text-2xl font-black mb-4">Need Immediate Assistance?</h3>
                    <p className="text-[#1e1e4a]/90 mb-6">
                      Our team is available 24/7 to help you with any questions or service requests.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                      <a
                        href="tel:+18589999293"
                        className="inline-flex items-center justify-center gap-3 bg-[#1e1e4a] text-white px-10 py-5 rounded-xl font-black text-lg shadow-2xl hover:bg-[#2a2a5a] transition-all duration-300 hover:scale-105"
                      >
                        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                          <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"/>
                        </svg>
                        Call Now
                      </a>
                      <a
                        href="/"
                        className="inline-flex items-center justify-center gap-3 bg-white text-[#1e1e4a] px-10 py-5 rounded-xl font-black text-lg border-2 border-[#1e1e4a] hover:bg-slate-50 transition-all duration-300"
                      >
                        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                          <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
                        </svg>
                        Back to Home
                      </a>
                    </div>
                  </div>
                </div>
              </section>

            </main>

          </div>

        </div>
      </section>

      {/* Schema.org Legal Page Markup */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            "name": "Terms of Service",
            "description": "Terms of Service and SMS program terms for CloseBy Towing San Diego",
            "url": "https://closebytowing.com/terms",
            "publisher": {
              "@type": "Organization",
              "name": "CloseBy Towing",
              "url": "https://closebytowing.com"
            },
            "datePublished": "2025-01-01",
            "dateModified": "2025-01-01",
          })
        }}
      />

    </div>
  );
}
