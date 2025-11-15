"use client";
import ServicesMenu from "@/components/ServicesMenu";
import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import { getAuth, onAuthStateChanged, signOut } from "firebase/auth";
import { collection, query, where, getDocs } from "firebase/firestore";
import { db } from "@/lib/firebase";
import { useRouter, usePathname } from "next/navigation";

export default function Header() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [companyName, setCompanyName] = useState<string>("");
  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    const auth = getAuth();
    const unsubscribe = onAuthStateChanged(auth, async (user) => {
      setIsLoggedIn(!!user);

      if (user) {
        // Fetch partner data to get company name
        try {
          const partnersRef = collection(db, "partners");
          const q = query(partnersRef, where("userId", "==", user.uid));
          const querySnapshot = await getDocs(q);

          if (!querySnapshot.empty) {
            const partnerDoc = querySnapshot.docs[0];
            const partnerData = partnerDoc.data();
            setCompanyName(partnerData.companyName || "");
          }
        } catch (error) {
          console.error("Error fetching partner data:", error);
        }
      } else {
        setCompanyName("");
      }
    });
    return () => unsubscribe();
  }, []);

  const handleLogout = async () => {
    const auth = getAuth();
    try {
      await signOut(auth);
      router.push("/");
    } catch (error) {
      console.error("Logout error:", error);
    }
  };

  return (
    <header className="sticky top-0 z-50 w-full">
      {/* Top dark bar (reduced height ~40%) */}
      <div className="bg-[#1e1e4a] text-white">
        <div className="mx-auto max-w-[1800px] px-4 sm:px-6 h-[4.5rem] flex items-center justify-between relative">
          {/* Left: logo (mobile) and brand text (desktop center) */}
          <div className="flex items-center lg:hidden">
            <Link href="/" className="flex items-center gap-2">
              <Image
                src="/_archive/CloseBy-Towing-Logo.webp"
                alt="CloseBy Towing logo"
                width={96}
                height={96}
                className="w-auto h-8"
                priority
              />
              <span className="font-bold tracking-tight text-lg whitespace-nowrap">
                <span className="text-red-500">CloseBy</span>{" "}
                <span className="opacity-90">Towing</span>
              </span>
            </Link>
          </div>

          {/* Desktop: logo on left */}
          <div className="hidden lg:flex items-center">
            <Image
              src="/_archive/CloseBy-Towing-Logo.webp"
              alt="CloseBy Towing logo"
              width={96}
              height={96}
              className="w-auto h-10 sm:h-13"
              priority
            />
          </div>

          {/* Desktop: brand text centered */}
          <div className="hidden lg:block absolute left-1/2 transform -translate-x-1/2">
            <Link
              href="/"
              className="font-bold tracking-tight text-xl sm:text-3xl whitespace-nowrap"
            >
              <span className="text-red-500">CloseBy</span>{" "}
              <span className="opacity-90">Towing</span>
            </Link>
          </div>

          {/* Right: phone button */}
          <div className="flex items-center">
            <a
              href="tel:+18589999293"
              aria-label="Call CloseBy Towing (858) 999-9293"
              className="inline-flex items-center gap-2 rounded-lg border border-white/0 bg-transparent px-3 sm:px-3 py-2 text-white text-xl font-semibold leading-tight hover:bg-white/20 focus:outline-none focus:ring-2 focus:ring-white/40 active:scale-95 transition whitespace-nowrap"
            >
              <svg className="w-4 h-4 sm:w-5 sm:h-5" viewBox="0 0 24 24" fill="none" aria-hidden>
                <path
                  d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6A19.79 19.79 0 012.08 4.18 2 2 0 014.06 2h3a2 2 0 012 1.72c.13.99.35 1.96.66 2.9a2 2 0 01-.45 2.11l-1.27 1.27a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.94.31 1.91.53 2.9.66A2 2 0 0122 16.92z"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <span className="text-lg sm:text-2xl lg:text-2xl font-semibold">(858) 999-9293</span>
            </a>
          </div>
        </div>
      </div>

      {/* Subnav bar (reduced height) */}
      <div className="bg-white text-[#1e1e4a] border-t border-[#1e1e4a]/10">
        <div className="mx-auto max-w-[1800px] px-4 sm:px-6 h-12 flex items-center justify-between relative">
          {/* Left side: Hamburger Menu (Mobile when logged in) or Desktop Navigation */}
          <div className="flex items-center">
            {/* Mobile Navigation - Services link */}
            <nav className="lg:hidden flex items-center">
              <ServicesMenu />
            </nav>

            {/* Hamburger Menu Button - Mobile only, shown when logged in */}
            {isLoggedIn && (
              <>
                <span className="text-[#1e1e4a]/30 text-base sm:text-lg lg:hidden mx-2">|</span>
                <button
                  id="dashboard-menu-toggle"
                  type="button"
                  onClick={(e) => {
                    e.preventDefault();
                    // Dispatch custom event for dashboard layout to handle
                    const event = new CustomEvent('toggle-dashboard-menu');
                    window.dispatchEvent(event);
                  }}
                  className="lg:hidden text-gray-600 hover:text-gray-900 flex items-center gap-1.5 px-2 py-1.5 rounded hover:bg-gray-100"
                  aria-label="Toggle dashboard menu"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                  </svg>
                  <span className="text-xs font-semibold">Menu</span>
                </button>
                <span className="text-[#1e1e4a]/30 text-base sm:text-lg lg:hidden mx-2">|</span>

                {/* Request Tow link - Mobile only, shown when on dashboard home page */}
                {pathname === "/partners/dashboard" && (
                  <>
                    <Link
                      href="/partners/dashboard/request"
                      className="lg:hidden text-sm font-semibold text-blue-600 hover:text-blue-700 hover:underline underline-offset-2 transition whitespace-nowrap"
                    >
                      Request Tow
                    </Link>
                  </>
                )}
              </>
            )}

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-4 xl:gap-10 text-[1.0rem] font-semibold leading-none">
              <ServicesMenu />
              <Link href="/#reviews" className="hover:opacity-60">
                Reviews
              </Link>
              <Link href="/#area" className="hover:opacity-60">
                Service Area
              </Link>
              <Link href="/about" className="hover:opacity-60">
                About
              </Link>
              <Link href="/contact" className="hover:opacity-60">
                Contact
              </Link>
            </nav>
          </div>

          {/* Center: Company name (when logged in) - Desktop only */}
          {isLoggedIn && companyName && (
            <div className="hidden lg:block absolute left-1/2 transform -translate-x-1/2">
              <div className="relative animate-pulse-slow">
                <div className="text-xl xl:text-2xl font-extrabold bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent whitespace-nowrap tracking-wider bg-[length:200%_auto] animate-gradient">
                  {companyName}
                </div>
                <div className="absolute inset-0 text-xl xl:text-2xl font-extrabold bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent whitespace-nowrap tracking-wider blur-sm opacity-50 animate-glow">
                  {companyName}
                </div>
              </div>
            </div>
          )}

          <style jsx>{`
            @keyframes gradient {
              0%, 100% { background-position: 0% 50%; }
              50% { background-position: 100% 50%; }
            }

            @keyframes glow {
              0%, 100% { opacity: 0.3; }
              50% { opacity: 0.7; }
            }

            @keyframes pulse-slow {
              0%, 100% { transform: scale(1); }
              50% { transform: scale(1.02); }
            }

            .animate-gradient {
              animation: gradient 3s ease infinite;
            }

            .animate-glow {
              animation: glow 2s ease-in-out infinite;
            }

            .animate-pulse-slow {
              animation: pulse-slow 4s ease-in-out infinite;
            }
          `}</style>

          {/* Right side: Dashboard/Logout or Login/Sign Up */}
          <div className="flex items-center gap-2 sm:gap-4 ml-auto lg:mr-8">
            {isLoggedIn ? (
              <>
                <Link
                  href="/partners/dashboard"
                  className="hidden lg:inline text-sm sm:text-base font-semibold text-blue-600 hover:text-blue-700 hover:underline underline-offset-2 transition whitespace-nowrap"
                >
                  Dashboard
                </Link>
                <span className="hidden lg:inline text-[#1e1e4a]/30 text-base sm:text-lg">|</span>
                <button
                  onClick={handleLogout}
                  className="hidden lg:inline text-sm sm:text-base font-semibold text-red-600 hover:text-red-700 hover:underline underline-offset-2 transition whitespace-nowrap"
                >
                  Logout
                </button>
              </>
            ) : (
              <>
                <Link
                  href="/partners/login"
                  className="text-sm sm:text-base font-semibold text-blue-600 hover:text-blue-700 hover:underline underline-offset-2 transition whitespace-nowrap"
                >
                  Login
                </Link>
                <span className="text-[#1e1e4a]/30 text-base sm:text-lg">|</span>
                <Link
                  href="/partners/signup"
                  className="text-sm sm:text-base font-semibold text-blue-600 hover:text-blue-700 hover:underline underline-offset-2 transition whitespace-nowrap"
                >
                  Sign Up
                </Link>
              </>
            )}
          </div>
        </div>
      </div>
    </header>
  );
}
