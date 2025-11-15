"use client";

import { useState, useEffect } from "react";

export default function PrivacyPolicyPage() {
  const [mouseX, setMouseX] = useState(0);
  const [mouseY, setMouseY] = useState(0);
  const [activeSection, setActiveSection] = useState("");

  // Mouse tracking for gradient effect
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMouseX(e.clientX);
      setMouseY(e.clientY);
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  // Scroll tracking for active section
  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll("section[id]");
      let current = "";

      sections.forEach((section) => {
        const sectionTop = (section as HTMLElement).offsetTop;
        const sectionHeight = (section as HTMLElement).offsetHeight;
        if (window.scrollY >= sectionTop - 200) {
          current = section.getAttribute("id") || "";
        }
      });

      setActiveSection(current);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const sections = [
    { id: "information-collection", title: "Information We Collect", icon: "📋" },
    { id: "how-we-use", title: "How We Use Your Information", icon: "🔧" },
    { id: "information-sharing", title: "Information Sharing", icon: "🤝" },
    { id: "data-security", title: "Data Security", icon: "🔒" },
    { id: "your-rights", title: "Your Rights", icon: "⚖️" },
    { id: "cookies", title: "Cookies & Tracking", icon: "🍪" },
    { id: "sms-communications", title: "SMS Communications", icon: "💬" },
    { id: "updates", title: "Policy Updates", icon: "🔄" },
    { id: "contact", title: "Contact Us", icon: "📧" },
  ];

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <div className="min-h-screen bg-[#0a0a1f] text-white">

      {/* HERO SECTION */}
      <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden">

        {/* Animated Gradient Background */}
        <div
          className="absolute inset-0 opacity-30"
          style={{
            background: `radial-gradient(circle at ${mouseX}px ${mouseY}px, rgba(99, 102, 241, 0.4), rgba(139, 92, 246, 0.3), transparent 50%)`,
          }}
        ></div>

        {/* Grid Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `linear-gradient(rgba(99, 102, 241, 0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(99, 102, 241, 0.3) 1px, transparent 1px)`,
            backgroundSize: '50px 50px',
          }}></div>
        </div>

        {/* Floating Privacy Icons */}
        {[...Array(15)].map((_, i) => (
          <div
            key={i}
            className="absolute text-4xl opacity-10"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animation: `float ${5 + Math.random() * 10}s ease-in-out infinite`,
              animationDelay: `${Math.random() * 5}s`,
            }}
          >
            {["🔒", "🛡️", "👤", "📝"][Math.floor(Math.random() * 4)]}
          </div>
        ))}

        {/* Hero Content */}
        <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">

          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-indigo-500/20 border border-indigo-500/50 text-indigo-300 px-5 py-2 rounded-full font-semibold text-sm backdrop-blur-sm mb-8">
            <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
            EFFECTIVE DATE: JANUARY 1, 2025
          </div>

          {/* Main Headline */}
          <h1 className="text-6xl lg:text-8xl font-black leading-none tracking-tight mb-6">
            Privacy
            <span className="block bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 bg-clip-text text-transparent mt-2">
              Policy
            </span>
          </h1>

          {/* Subheadline */}
          <p className="text-2xl text-slate-300 leading-relaxed max-w-3xl mx-auto mb-12">
            Your privacy matters to us. Learn how CloseBy Towing collects, uses, and protects your personal information.
          </p>

          {/* Trust Indicators */}
          <div className="flex flex-wrap justify-center gap-6">
            <div className="flex items-center gap-3 bg-white/10 backdrop-blur-sm px-6 py-3 rounded-xl border border-white/20">
              <span className="text-3xl">🔒</span>
              <div className="text-left">
                <p className="font-bold text-sm">256-bit Encryption</p>
                <p className="text-xs text-slate-400">Bank-level Security</p>
              </div>
            </div>

            <div className="flex items-center gap-3 bg-white/10 backdrop-blur-sm px-6 py-3 rounded-xl border border-white/20">
              <span className="text-3xl">🛡️</span>
              <div className="text-left">
                <p className="font-bold text-sm">CCPA Compliant</p>
                <p className="text-xs text-slate-400">California Privacy Rights</p>
              </div>
            </div>

            <div className="flex items-center gap-3 bg-white/10 backdrop-blur-sm px-6 py-3 rounded-xl border border-white/20">
              <span className="text-3xl">✓</span>
              <div className="text-left">
                <p className="font-bold text-sm">No Data Selling</p>
                <p className="text-xs text-slate-400">Never Shared</p>
              </div>
            </div>
          </div>

        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
          <svg className="w-8 h-8 text-white/50" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>

      </section>

      {/* MAIN CONTENT SECTION */}
      <section className="relative py-20 bg-gradient-to-b from-[#0a0a1f] via-slate-900 to-[#0a0a1f]">
        <div className="max-w-7xl mx-auto px-6">

          <div className="grid lg:grid-cols-12 gap-12">

            {/* SIDEBAR - Table of Contents */}
            <aside className="lg:col-span-3">
              <div className="sticky top-24">
                <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6">
                  <h3 className="text-xl font-black mb-6 flex items-center gap-2">
                    <span>📑</span>
                    Table of Contents
                  </h3>
                  <nav className="space-y-2">
                    {sections.map((section) => (
                      <button
                        key={section.id}
                        onClick={() => scrollToSection(section.id)}
                        className={`w-full text-left px-4 py-3 rounded-xl transition-all duration-300 flex items-center gap-3 ${
                          activeSection === section.id
                            ? "bg-indigo-500/30 border border-indigo-500/50 text-white font-bold"
                            : "hover:bg-white/10 text-slate-300 border border-transparent"
                        }`}
                      >
                        <span className="text-xl">{section.icon}</span>
                        <span className="text-sm">{section.title}</span>
                      </button>
                    ))}
                  </nav>
                </div>
              </div>
            </aside>

            {/* MAIN CONTENT */}
            <main className="lg:col-span-9 space-y-16">

              {/* Introduction */}
              <div className="bg-gradient-to-br from-indigo-500/10 to-purple-500/10 border border-indigo-500/30 rounded-3xl p-10">
                <div className="flex items-start gap-4 mb-6">
                  <div className="w-14 h-14 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-2xl flex items-center justify-center text-2xl flex-shrink-0">
                    👋
                  </div>
                  <div>
                    <h2 className="text-3xl font-black mb-3">Welcome to Our Privacy Policy</h2>
                    <p className="text-slate-300 text-lg leading-relaxed">
                      At CloseBy Towing, we are committed to protecting your privacy and ensuring the security of your personal information.
                      This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our services,
                      visit our website, or contact us for roadside assistance.
                    </p>
                  </div>
                </div>
                <div className="bg-white/5 rounded-xl p-6 border border-white/10">
                  <p className="text-sm text-slate-400">
                    <strong className="text-indigo-400">Last Updated:</strong> January 1, 2025 •
                    <strong className="text-indigo-400 ml-3">Effective Date:</strong> January 1, 2025
                  </p>
                </div>
              </div>

              {/* Section 1: Information We Collect */}
              <section id="information-collection" className="scroll-mt-24">
                <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl p-10">
                  <div className="flex items-start gap-4 mb-8">
                    <div className="w-14 h-14 bg-gradient-to-br from-blue-500 to-cyan-600 rounded-2xl flex items-center justify-center text-2xl flex-shrink-0">
                      📋
                    </div>
                    <div>
                      <h2 className="text-4xl font-black mb-4">Information We Collect</h2>
                      <p className="text-slate-300 text-lg">
                        We collect information that you provide directly to us and information automatically collected when you use our services.
                      </p>
                    </div>
                  </div>

                  <div className="space-y-6">
                    <div className="bg-blue-500/10 border border-blue-500/30 rounded-2xl p-6">
                      <h3 className="text-xl font-bold mb-3 flex items-center gap-2">
                        <span className="text-blue-400">→</span>
                        Personal Information You Provide
                      </h3>
                      <ul className="space-y-3 text-slate-300">
                        <li className="flex items-start gap-3">
                          <svg className="w-5 h-5 text-green-400 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                          </svg>
                          <span><strong>Contact Information:</strong> Name, phone number, email address</span>
                        </li>
                        <li className="flex items-start gap-3">
                          <svg className="w-5 h-5 text-green-400 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                          </svg>
                          <span><strong>Location Data:</strong> Your current location for service dispatch and GPS coordinates</span>
                        </li>
                        <li className="flex items-start gap-3">
                          <svg className="w-5 h-5 text-green-400 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                          </svg>
                          <span><strong>Vehicle Information:</strong> Make, model, year, license plate, VIN (when applicable)</span>
                        </li>
                        <li className="flex items-start gap-3">
                          <svg className="w-5 h-5 text-green-400 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                          </svg>
                          <span><strong>Payment Information:</strong> Credit/debit card details, billing address (processed securely)</span>
                        </li>
                        <li className="flex items-start gap-3">
                          <svg className="w-5 h-5 text-green-400 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                          </svg>
                          <span><strong>Service Details:</strong> Type of service requested, time, date, and service notes</span>
                        </li>
                      </ul>
                    </div>

                    <div className="bg-cyan-500/10 border border-cyan-500/30 rounded-2xl p-6">
                      <h3 className="text-xl font-bold mb-3 flex items-center gap-2">
                        <span className="text-cyan-400">→</span>
                        Automatically Collected Information
                      </h3>
                      <ul className="space-y-3 text-slate-300">
                        <li className="flex items-start gap-3">
                          <svg className="w-5 h-5 text-green-400 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                          </svg>
                          <span><strong>Device Information:</strong> IP address, browser type, operating system, device identifiers</span>
                        </li>
                        <li className="flex items-start gap-3">
                          <svg className="w-5 h-5 text-green-400 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                          </svg>
                          <span><strong>Usage Data:</strong> Pages visited, time spent on site, links clicked, referral source</span>
                        </li>
                        <li className="flex items-start gap-3">
                          <svg className="w-5 h-5 text-green-400 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                          </svg>
                          <span><strong>Cookies & Tracking:</strong> Session cookies, analytics cookies, preference cookies</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </section>

              {/* Section 2: How We Use Your Information */}
              <section id="how-we-use" className="scroll-mt-24">
                <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl p-10">
                  <div className="flex items-start gap-4 mb-8">
                    <div className="w-14 h-14 bg-gradient-to-br from-purple-500 to-pink-600 rounded-2xl flex items-center justify-center text-2xl flex-shrink-0">
                      🔧
                    </div>
                    <div>
                      <h2 className="text-4xl font-black mb-4">How We Use Your Information</h2>
                      <p className="text-slate-300 text-lg">
                        We use the information we collect to provide, maintain, and improve our services.
                      </p>
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    {[
                      { title: "Service Delivery", desc: "Dispatch tow trucks, provide roadside assistance, and communicate service status", icon: "🚗" },
                      { title: "Payment Processing", desc: "Process transactions securely and maintain billing records", icon: "💳" },
                      { title: "Customer Support", desc: "Respond to inquiries, resolve issues, and provide assistance", icon: "💬" },
                      { title: "Service Improvement", desc: "Analyze usage patterns to enhance user experience and service quality", icon: "📊" },
                      { title: "Marketing Communications", desc: "Send promotional offers, service updates (with your consent)", icon: "📧" },
                      { title: "Legal Compliance", desc: "Comply with applicable laws, regulations, and legal processes", icon: "⚖️" },
                    ].map((item, i) => (
                      <div key={i} className="bg-gradient-to-br from-purple-500/10 to-pink-500/10 border border-purple-500/30 rounded-2xl p-6 hover:border-purple-400 transition-all duration-300">
                        <div className="text-4xl mb-3">{item.icon}</div>
                        <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                        <p className="text-slate-300">{item.desc}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </section>

              {/* Section 3: Information Sharing */}
              <section id="information-sharing" className="scroll-mt-24">
                <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl p-10">
                  <div className="flex items-start gap-4 mb-8">
                    <div className="w-14 h-14 bg-gradient-to-br from-green-500 to-emerald-600 rounded-2xl flex items-center justify-center text-2xl flex-shrink-0">
                      🤝
                    </div>
                    <div>
                      <h2 className="text-4xl font-black mb-4">Information Sharing</h2>
                      <p className="text-slate-300 text-lg">
                        We do not sell your personal information. We may share your information only in the following circumstances:
                      </p>
                    </div>
                  </div>

                  <div className="space-y-4">
                    {[
                      { title: "Service Providers", desc: "Third-party vendors who assist with payment processing, analytics, customer support, and other business operations" },
                      { title: "Business Partners", desc: "Tow truck operators and roadside assistance providers who deliver services on our behalf" },
                      { title: "Legal Requirements", desc: "When required by law, court order, or government request, or to protect our rights and safety" },
                      { title: "Business Transfers", desc: "In connection with a merger, acquisition, or sale of assets (with notice to you)" },
                      { title: "With Your Consent", desc: "When you explicitly authorize us to share your information with third parties" },
                    ].map((item, i) => (
                      <div key={i} className="bg-green-500/10 border border-green-500/30 rounded-xl p-6">
                        <h3 className="text-lg font-bold mb-2 text-green-400">✓ {item.title}</h3>
                        <p className="text-slate-300">{item.desc}</p>
                      </div>
                    ))}
                  </div>

                  <div className="mt-8 bg-red-500/10 border border-red-500/30 rounded-xl p-6">
                    <h3 className="text-xl font-bold mb-2 text-red-400 flex items-center gap-2">
                      <span>🚫</span>
                      We Never Sell Your Data
                    </h3>
                    <p className="text-slate-300">
                      CloseBy Towing does not sell, rent, or trade your personal information to third parties for marketing purposes.
                      Your privacy is our priority.
                    </p>
                  </div>
                </div>
              </section>

              {/* Section 4: Data Security */}
              <section id="data-security" className="scroll-mt-24">
                <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl p-10">
                  <div className="flex items-start gap-4 mb-8">
                    <div className="w-14 h-14 bg-gradient-to-br from-orange-500 to-red-600 rounded-2xl flex items-center justify-center text-2xl flex-shrink-0">
                      🔒
                    </div>
                    <div>
                      <h2 className="text-4xl font-black mb-4">Data Security</h2>
                      <p className="text-slate-300 text-lg">
                        We implement industry-standard security measures to protect your personal information.
                      </p>
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="bg-gradient-to-br from-orange-500/10 to-red-500/10 border border-orange-500/30 rounded-2xl p-6">
                      <div className="text-4xl mb-4">🔐</div>
                      <h3 className="text-xl font-bold mb-3">Encryption</h3>
                      <p className="text-slate-300 mb-4">All sensitive data is encrypted in transit using SSL/TLS and at rest using AES-256 encryption.</p>
                      <div className="flex items-center gap-2 text-sm text-orange-400">
                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                        <span>Bank-level security</span>
                      </div>
                    </div>

                    <div className="bg-gradient-to-br from-orange-500/10 to-red-500/10 border border-orange-500/30 rounded-2xl p-6">
                      <div className="text-4xl mb-4">🛡️</div>
                      <h3 className="text-xl font-bold mb-3">Access Controls</h3>
                      <p className="text-slate-300 mb-4">Strict access controls ensure only authorized personnel can access your information.</p>
                      <div className="flex items-center gap-2 text-sm text-orange-400">
                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                        <span>Role-based permissions</span>
                      </div>
                    </div>

                    <div className="bg-gradient-to-br from-orange-500/10 to-red-500/10 border border-orange-500/30 rounded-2xl p-6">
                      <div className="text-4xl mb-4">🔍</div>
                      <h3 className="text-xl font-bold mb-3">Regular Audits</h3>
                      <p className="text-slate-300 mb-4">We conduct regular security audits and vulnerability assessments.</p>
                      <div className="flex items-center gap-2 text-sm text-orange-400">
                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                        <span>Continuous monitoring</span>
                      </div>
                    </div>

                    <div className="bg-gradient-to-br from-orange-500/10 to-red-500/10 border border-orange-500/30 rounded-2xl p-6">
                      <div className="text-4xl mb-4">🔄</div>
                      <h3 className="text-xl font-bold mb-3">Secure Backups</h3>
                      <p className="text-slate-300 mb-4">Encrypted backups are stored securely to prevent data loss.</p>
                      <div className="flex items-center gap-2 text-sm text-orange-400">
                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                        <span>Disaster recovery ready</span>
                      </div>
                    </div>
                  </div>

                  <div className="mt-6 bg-yellow-500/10 border border-yellow-500/30 rounded-xl p-6">
                    <p className="text-slate-300 text-sm">
                      <strong className="text-yellow-400">Important:</strong> While we implement robust security measures,
                      no method of transmission over the internet or electronic storage is 100% secure. We cannot guarantee absolute security.
                    </p>
                  </div>
                </div>
              </section>

              {/* Section 5: Your Rights */}
              <section id="your-rights" className="scroll-mt-24">
                <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl p-10">
                  <div className="flex items-start gap-4 mb-8">
                    <div className="w-14 h-14 bg-gradient-to-br from-indigo-500 to-blue-600 rounded-2xl flex items-center justify-center text-2xl flex-shrink-0">
                      ⚖️
                    </div>
                    <div>
                      <h2 className="text-4xl font-black mb-4">Your Privacy Rights</h2>
                      <p className="text-slate-300 text-lg">
                        You have certain rights regarding your personal information under applicable privacy laws.
                      </p>
                    </div>
                  </div>

                  <div className="space-y-4">
                    {[
                      { right: "Access", desc: "Request a copy of the personal information we hold about you", icon: "👁️" },
                      { right: "Correction", desc: "Request correction of inaccurate or incomplete information", icon: "✏️" },
                      { right: "Deletion", desc: "Request deletion of your personal information (subject to legal obligations)", icon: "🗑️" },
                      { right: "Opt-Out", desc: "Unsubscribe from marketing communications at any time", icon: "🚫" },
                      { right: "Data Portability", desc: "Receive your personal information in a structured, machine-readable format", icon: "📦" },
                      { right: "Restrict Processing", desc: "Request restriction of how we process your personal information", icon: "⏸️" },
                    ].map((item, i) => (
                      <div key={i} className="bg-indigo-500/10 border border-indigo-500/30 rounded-xl p-6 flex items-start gap-4 hover:border-indigo-400 transition-all duration-300">
                        <div className="text-3xl flex-shrink-0">{item.icon}</div>
                        <div>
                          <h3 className="text-xl font-bold mb-2 text-indigo-400">{item.right}</h3>
                          <p className="text-slate-300">{item.desc}</p>
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="mt-8 bg-gradient-to-r from-indigo-500/20 to-blue-500/20 border border-indigo-500/50 rounded-2xl p-8">
                    <h3 className="text-2xl font-black mb-4">How to Exercise Your Rights</h3>
                    <p className="text-slate-300 mb-6">
                      To exercise any of these rights, please contact us at:
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4">
                      <a href="mailto:privacy@closebytowing.com" className="inline-flex items-center justify-center gap-3 bg-indigo-600 hover:bg-indigo-700 text-white px-8 py-4 rounded-xl font-bold transition-all duration-300">
                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                          <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                          <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                        </svg>
                        privacy@closebytowing.com
                      </a>
                      <a href="tel:8589999293" className="inline-flex items-center justify-center gap-3 bg-white/10 hover:bg-white/20 text-white px-8 py-4 rounded-xl font-bold border-2 border-white/30 transition-all duration-300">
                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                          <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                        </svg>
                        (858) 999-9293
                      </a>
                    </div>
                  </div>
                </div>
              </section>

              {/* Section 6: Cookies */}
              <section id="cookies" className="scroll-mt-24">
                <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl p-10">
                  <div className="flex items-start gap-4 mb-8">
                    <div className="w-14 h-14 bg-gradient-to-br from-amber-500 to-orange-600 rounded-2xl flex items-center justify-center text-2xl flex-shrink-0">
                      🍪
                    </div>
                    <div>
                      <h2 className="text-4xl font-black mb-4">Cookies & Tracking Technologies</h2>
                      <p className="text-slate-300 text-lg">
                        We use cookies and similar technologies to enhance your experience on our website.
                      </p>
                    </div>
                  </div>

                  <div className="grid md:grid-cols-3 gap-6">
                    <div className="bg-amber-500/10 border border-amber-500/30 rounded-2xl p-6">
                      <h3 className="text-lg font-bold mb-3 text-amber-400">Essential Cookies</h3>
                      <p className="text-slate-300 text-sm mb-4">Required for basic site functionality and security.</p>
                      <div className="text-xs text-slate-400">
                        <strong>Examples:</strong> Session management, authentication, security
                      </div>
                    </div>

                    <div className="bg-amber-500/10 border border-amber-500/30 rounded-2xl p-6">
                      <h3 className="text-lg font-bold mb-3 text-amber-400">Analytics Cookies</h3>
                      <p className="text-slate-300 text-sm mb-4">Help us understand how visitors use our site.</p>
                      <div className="text-xs text-slate-400">
                        <strong>Examples:</strong> Google Analytics, page views, user behavior
                      </div>
                    </div>

                    <div className="bg-amber-500/10 border border-amber-500/30 rounded-2xl p-6">
                      <h3 className="text-lg font-bold mb-3 text-amber-400">Preference Cookies</h3>
                      <p className="text-slate-300 text-sm mb-4">Remember your settings and preferences.</p>
                      <div className="text-xs text-slate-400">
                        <strong>Examples:</strong> Language, location, display settings
                      </div>
                    </div>
                  </div>

                  <div className="mt-6 bg-white/5 rounded-xl p-6 border border-white/10">
                    <h3 className="text-lg font-bold mb-3">Managing Cookies</h3>
                    <p className="text-slate-300">
                      You can control cookies through your browser settings. Note that disabling certain cookies may impact site functionality.
                    </p>
                  </div>
                </div>
              </section>

              {/* Section 7: SMS Communications */}
              <section id="sms-communications" className="scroll-mt-24">
                <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl p-10">
                  <div className="flex items-start gap-4 mb-8">
                    <div className="w-14 h-14 bg-gradient-to-br from-green-500 to-teal-600 rounded-2xl flex items-center justify-center text-2xl flex-shrink-0">
                      💬
                    </div>
                    <div>
                      <h2 className="text-4xl font-black mb-4">SMS Communications</h2>
                      <p className="text-slate-300 text-lg">
                        When you provide your phone number and consent to receive SMS messages from CloseBy Towing, we use your number solely to send service updates, dispatch notifications, and other messages related to your towing or roadside assistance requests.
                      </p>
                    </div>
                  </div>

                  <div className="space-y-6">
                    <div className="bg-green-500/10 border border-green-500/30 rounded-2xl p-6">
                      <h3 className="text-xl font-bold mb-4 flex items-center gap-2 text-green-400">
                        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                        Privacy Protection
                      </h3>
                      <p className="text-slate-300 text-lg">
                        SMS consent is not shared, sold, or transferred to any third party.
                      </p>
                    </div>

                    <div className="bg-teal-500/10 border border-teal-500/30 rounded-2xl p-6">
                      <h3 className="text-xl font-bold mb-4 flex items-center gap-2 text-teal-400">
                        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                        </svg>
                        Opt-Out & Assistance
                      </h3>
                      <p className="text-slate-300 text-lg mb-4">
                        You can opt out of SMS messages at any time by replying <strong className="text-teal-400">STOP</strong>, or request assistance by replying <strong className="text-teal-400">HELP</strong>.
                      </p>
                      <div className="flex flex-wrap gap-3">
                        <div className="inline-flex items-center gap-2 bg-teal-600/30 px-4 py-2 rounded-lg text-sm font-bold">
                          <span>📱</span>
                          Reply "STOP" to Unsubscribe
                        </div>
                        <div className="inline-flex items-center gap-2 bg-green-600/30 px-4 py-2 rounded-lg text-sm font-bold">
                          <span>💡</span>
                          Reply "HELP" for Support
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </section>

              {/* Section 9: Policy Updates */}
              <section id="updates" className="scroll-mt-24">
                <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl p-10">
                  <div className="flex items-start gap-4 mb-8">
                    <div className="w-14 h-14 bg-gradient-to-br from-pink-500 to-rose-600 rounded-2xl flex items-center justify-center text-2xl flex-shrink-0">
                      🔄
                    </div>
                    <div>
                      <h2 className="text-4xl font-black mb-4">Policy Updates</h2>
                      <p className="text-slate-300 text-lg">
                        We may update this Privacy Policy from time to time to reflect changes in our practices or legal requirements.
                      </p>
                    </div>
                  </div>

                  <div className="bg-pink-500/10 border border-pink-500/30 rounded-2xl p-8">
                    <div className="space-y-4 text-slate-300">
                      <p>
                        <strong className="text-pink-400">Notification:</strong> We will notify you of any material changes by posting
                        the updated policy on this page and updating the "Last Updated" date.
                      </p>
                      <p>
                        <strong className="text-pink-400">Significant Changes:</strong> For significant changes, we may also send you
                        an email notification or display a prominent notice on our website.
                      </p>
                      <p>
                        <strong className="text-pink-400">Your Continued Use:</strong> Your continued use of our services after any
                        changes indicates your acceptance of the updated Privacy Policy.
                      </p>
                    </div>
                  </div>
                </div>
              </section>

              {/* Section 10: Contact */}
              <section id="contact" className="scroll-mt-24">
                <div className="bg-gradient-to-br from-indigo-500/20 to-purple-500/20 border border-indigo-500/50 rounded-3xl p-10">
                  <div className="flex items-start gap-4 mb-8">
                    <div className="w-14 h-14 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-2xl flex items-center justify-center text-2xl flex-shrink-0">
                      📧
                    </div>
                    <div>
                      <h2 className="text-4xl font-black mb-4">Contact Us</h2>
                      <p className="text-slate-300 text-lg">
                        If you have any questions, concerns, or requests regarding this Privacy Policy, please contact us:
                      </p>
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
                      <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                        <span>📍</span>
                        Mailing Address
                      </h3>
                      <p className="text-slate-300">
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
                      <div className="space-y-2 text-slate-300">
                        <p><strong>Phone:</strong> (858) 999-9293</p>
                        <p><strong>Email:</strong> privacy@closebytowing.com</p>
                        <p><strong>Website:</strong> www.closebytowing.com</p>
                      </div>
                    </div>
                  </div>

                  <div className="mt-8 bg-indigo-600 rounded-2xl p-8 text-center">
                    <h3 className="text-2xl font-black mb-4">Response Time</h3>
                    <p className="text-white/90 mb-6">
                      We aim to respond to all privacy-related inquiries within 30 days.
                    </p>
                    <div className="flex items-center justify-center gap-3 text-sm text-white/80">
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
                      </svg>
                      <span>Typically within 5-7 business days</span>
                    </div>
                  </div>
                </div>
              </section>

            </main>

          </div>

        </div>
      </section>

      {/* FOOTER CTA */}
      <section className="relative py-20 bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(circle, rgba(255, 255, 255, 0.1) 1px, transparent 1px)`,
            backgroundSize: '50px 50px',
          }}></div>
        </div>

        <div className="relative max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl lg:text-6xl font-black mb-6">
            Questions About Your Privacy?
          </h2>
          <p className="text-xl text-white/90 mb-10">
            Our team is here to help. Contact us anytime for privacy-related inquiries.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="mailto:privacy@closebytowing.com"
              className="inline-flex items-center justify-center gap-3 bg-white text-indigo-900 px-10 py-5 rounded-xl font-black text-lg shadow-2xl hover:bg-slate-100 transition-all duration-300 hover:scale-105"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
              </svg>
              Email Privacy Team
            </a>
            <a
              href="/"
              className="inline-flex items-center justify-center gap-3 bg-white/10 backdrop-blur-sm text-white px-10 py-5 rounded-xl font-black text-lg border-2 border-white/30 hover:bg-white/20 transition-all duration-300"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
              </svg>
              Back to Home
            </a>
          </div>
        </div>
      </section>

      {/* Floating animation keyframes */}
      <style jsx>{`
        @keyframes float {
          0%, 100% {
            transform: translateY(0px) rotate(0deg);
          }
          50% {
            transform: translateY(-20px) rotate(5deg);
          }
        }
      `}</style>

    </div>
  );
}
