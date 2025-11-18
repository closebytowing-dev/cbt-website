"use client";

import { usePathname } from "next/navigation";
import { useVisibility } from "@/hooks/useVisibility";

export default function Footer() {
  const toTop = () => window.scrollTo({ top: 0, behavior: "smooth" });
  const pathname = usePathname();
  const isDashboard = pathname?.startsWith("/partners/dashboard");
  const { config } = useVisibility();

  return (
    <footer className="w-full text-white">
      {/* Main footer block */}
      {config.footer.mainFooter && (
        <div className={`bg-[#0d0d36] ${isDashboard ? "hidden md:block" : ""}`}>
        <div className="mx-auto max-w-[1800px] px-4 sm:px-6 py-8 sm:py-12">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {/* Company info */}
            <div>
              <div className="text-2xl font-bold tracking-tight mb-4">
                <div>CloseBy</div>
                <div className="font-normal opacity-90">Towing</div>
              </div>
              <p className="text-white/80 text-sm">
                San Diego's trusted 24/7 towing and roadside assistance. Licensed, insured, and ready to help.
              </p>
              <div className="mt-4 flex items-center gap-2 text-yellow-400">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                </svg>
                <span className="font-semibold text-white">4.9 Stars • 1,247+ Reviews</span>
              </div>
            </div>

            {/* Services */}
            <div>
              <h3 className="text-lg font-bold mb-4">Our Services</h3>
              <nav className="flex flex-col gap-2 text-white/80">
                <a href="/services/towing" className="hover:text-white transition">Emergency Towing</a>
                <a href="/services/jump-start" className="hover:text-white transition">Jump Start Service</a>
                <a href="/services/tire-change" className="hover:text-white transition">Tire Change</a>
                <a href="/services/gas-delivery" className="hover:text-white transition">Fuel Delivery</a>
                <a href="/services/lockout" className="hover:text-white transition">Lockout Service</a>
                <a href="/services/collision-recovery" className="hover:text-white transition">Collision Recovery</a>
                <a href="/services/winch-out" className="hover:text-white transition">Winch-Out Service</a>
              </nav>
            </div>

            {/* Contact */}
            <div>
              <h3 className="text-lg font-bold mb-4">Contact Us</h3>
              <div className="flex flex-col gap-3 text-white/80">
                <a href="tel:+18589999293" className="flex items-center gap-2 hover:text-white transition">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"/>
                  </svg>
                  <span className="text-xl sm:text-2xl font-semibold">(858) 999-9293</span>
                </a>
                <a href="mailto:info@closebytowing.com" className="flex items-center gap-2 hover:text-white transition">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"/>
                    <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"/>
                  </svg>
                  info@closebytowing.com
                </a>
                <a href="https://wa.me/18589007211" className="flex items-center gap-2 text-green-400 hover:text-green-300 transition">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.890-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                  </svg>
                  Chat on WhatsApp
                </a>
                <p className="mt-2 text-sm">
                  <strong className="text-white">Hours:</strong> 24/7, 365 Days
                </p>
              </div>
            </div>

            {/* Partners Section */}
            {config.footer.partnerLinks && (
              <div>
                <h3 className="text-lg font-bold mb-4 flex items-center gap-2">
                  <svg className="w-5 h-5 text-blue-400" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z"/>
                  </svg>
                  Partner Portal
                </h3>
                <nav className="flex flex-col gap-2 text-white/80">
                  <a href="/partners/login" className="flex items-center gap-2 hover:text-blue-300 transition group">
                    <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4" />
                      <polyline points="10 17 15 12 10 7" />
                      <line x1="15" y1="12" x2="3" y2="12" />
                    </svg>
                    Partner Login
                  </a>
                  <a href="/partners/signup" className="flex items-center gap-2 hover:text-blue-300 transition group">
                    <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                      <circle cx="8.5" cy="7" r="4" />
                      <line x1="20" y1="8" x2="20" y2="14" />
                      <line x1="23" y1="11" x2="17" y2="11" />
                    </svg>
                    Become a Partner
                  </a>
                  <a href="/partners" className="flex items-center gap-2 hover:text-blue-300 transition group">
                    <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
                    </svg>
                    Partner Benefits
                  </a>
                </nav>
                <div className="mt-4 p-3 bg-blue-500/10 border border-blue-400/30 rounded-lg">
                  <p className="text-xs text-blue-300 font-semibold mb-1">Join Our Network</p>
                  <p className="text-xs text-white/70">
                    Mechanic shops, body shops & auto services: Partner with us for exclusive referrals.
                  </p>
                </div>
              </div>
            )}
          </div>

          <div className="mt-8 pt-6 border-t border-white/20 text-sm text-white/70 text-center">
            &copy; {new Date().getFullYear()} CloseBy Towing San Diego. All rights reserved. Licensed & Insured Towing Company.
          </div>
        </div>
        </div>
      )}

      {/* Slim lower bar with strong white borders and Back to top box (1.5× taller) */}
      {config.footer.backToTop && (
        <div className="bg-[#0d0d36] border-y-2 border-white">
        <div className="mx-auto max-w-[1600px]">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_auto]">
            {/* Left area with bold right divider */}
            <div className="h-auto sm:h-[5rem] px-4 sm:px-6 py-4 sm:py-0 flex flex-col sm:flex-row items-center gap-4 sm:gap-10 lg:border-r-2 border-white">
              <div className="text-xl sm:text-2xl font-serif tracking-widest">CBT</div>
              <nav className="flex flex-wrap items-center justify-center gap-4 sm:gap-8 text-white/80 text-base sm:text-lg">
                <a href="/about" className="hover:text-white">About</a>
                <a href="/contact" className="hover:text-white">Contact</a>
                <a href="/privacy" className="hover:text-white">Privacy</a>
                <a href="/terms" className="hover:text-white">Terms</a>
              </nav>
            </div>

            {/* Right: boxed Back to top with clear white outline and left divider */}
            <div className="h-auto sm:h-[5rem] px-4 sm:px-6 py-4 sm:py-0 flex items-center justify-center lg:border-l-2 border-white border-t-2 lg:border-t-0">
              <button
                onClick={toTop}
                className="inline-flex items-center gap-2 rounded-md border-2 border-white px-4 sm:px-5 py-2 sm:py-2.5 text-white hover:bg-white/10 focus:outline-none"
                aria-label="Back to top"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none"
                     xmlns="http://www.w3.org/2000/svg" className="-mt-[1px] sm:w-5 sm:h-5">
                  <path d="M12 19V5M12 5l-6 6M12 5l6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                <span className="text-base sm:text-lg">Back to top</span>
              </button>
            </div>
          </div>
        </div>
        </div>
      )}
    </footer>
  );
}
