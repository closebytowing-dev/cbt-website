"use client";

import { useEffect, useState } from "react";
import { useRouter, usePathname } from "next/navigation";
import Link from "next/link";
import { getAuth, onAuthStateChanged, signOut } from "firebase/auth";
import { collection, query, where, getDocs } from "firebase/firestore";
import { db } from "@/lib/firebase";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const router = useRouter();
  const pathname = usePathname();
  const [loading, setLoading] = useState(true);
  const [partnerData, setPartnerData] = useState<any>(null);
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const handleLogout = async () => {
    const auth = getAuth();
    try {
      await signOut(auth);
      router.push("/");
    } catch (error) {
      console.error("Logout error:", error);
    }
  };

  useEffect(() => {
    const auth = getAuth();
    const unsubscribe = onAuthStateChanged(auth, async (user) => {
      if (!user) {
        // Not logged in, redirect to login
        router.push("/partners/login");
        return;
      }

      try {
        // Fetch partner data from Firestore
        const partnersRef = collection(db, "partners");
        const q = query(partnersRef, where("userId", "==", user.uid));
        const querySnapshot = await getDocs(q);

        if (!querySnapshot.empty) {
          const partnerDoc = querySnapshot.docs[0];
          setPartnerData({
            id: partnerDoc.id,
            ...partnerDoc.data(),
          });
        }
      } catch (error) {
        console.error("Error fetching partner data:", error);
      } finally {
        setLoading(false);
      }
    });

    return () => unsubscribe();
  }, [router]);

  // Listen for custom event from the hamburger menu button in the Header
  useEffect(() => {
    const handleMenuToggle = () => {
      setSidebarOpen(prev => !prev);
    };

    // Listen for custom event
    window.addEventListener('toggle-dashboard-menu', handleMenuToggle as EventListener);

    return () => {
      window.removeEventListener('toggle-dashboard-menu', handleMenuToggle as EventListener);
    };
  }, []);

  const navItems = [
    {
      name: "Request Tow",
      href: "/partners/dashboard/request",
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v2H7a1 1 0 100 2h2v2a1 1 0 102 0v-2h2a1 1 0 100-2h-2V7z" clipRule="evenodd"/>
        </svg>
      ),
    },
    {
      name: "Account Settings",
      href: "/partners/dashboard/settings",
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M11.49 3.17c-.38-1.56-2.6-1.56-2.98 0a1.532 1.532 0 01-2.286.948c-1.372-.836-2.942.734-2.106 2.106.54.886.061 2.042-.947 2.287-1.561.379-1.561 2.6 0 2.978a1.532 1.532 0 01.947 2.287c-.836 1.372.734 2.942 2.106 2.106a1.532 1.532 0 012.287.947c.379 1.561 2.6 1.561 2.978 0a1.533 1.533 0 012.287-.947c1.372.836 2.942-.734 2.106-2.106a1.533 1.533 0 01.947-2.287c1.561-.379 1.561-2.6 0-2.978a1.532 1.532 0 01-.947-2.287c.836-1.372-.734-2.942-2.106-2.106a1.532 1.532 0 01-2.287-.947zM10 13a3 3 0 100-6 3 3 0 000 6z" clipRule="evenodd"/>
        </svg>
      ),
    },
  ];

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto"></div>
          <p className="mt-4 text-gray-600">Loading...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 flex lg:flex-row">
      {/* Sidebar - scrolls with content on desktop, fixed on mobile */}
      <aside
        className={`fixed lg:relative top-0 left-0 z-40 w-64 h-screen lg:h-auto transition-transform ${
          sidebarOpen ? "translate-x-0" : "-translate-x-full"
        } lg:translate-x-0 bg-[#1e1e4a] text-white flex-shrink-0`}
      >
        <div className="h-full lg:min-h-screen flex flex-col">
          {/* Partner Info */}
          {partnerData && (
            <div className="p-6 border-b border-white/10">
              <div className="text-sm text-white/60 mb-1">Welcome back,</div>
              <div className="font-semibold text-white truncate">
                {partnerData.contactName?.split(' ')[0] || partnerData.contactName}
              </div>
              <div className="mt-2 flex items-center gap-2 flex-wrap">
                <span className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium whitespace-nowrap ${
                  partnerData.status === 'active'
                    ? 'bg-green-500/20 text-green-300'
                    : 'bg-yellow-500/20 text-yellow-300'
                }`}>
                  {partnerData.status === 'active' ? '● Active' : '● Pending'}
                </span>
                {partnerData.membershipTier && (
                  <span className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-bold whitespace-nowrap ${
                    partnerData.membershipTier?.toLowerCase() === 'platinum'
                      ? 'bg-gradient-to-r from-gray-400 to-gray-300 text-gray-900'
                      : partnerData.membershipTier?.toLowerCase() === 'gold'
                      ? 'bg-gradient-to-r from-yellow-500 to-yellow-400 text-yellow-900'
                      : partnerData.membershipTier?.toLowerCase() === 'silver'
                      ? 'bg-gradient-to-r from-slate-400 to-slate-300 text-slate-900'
                      : 'bg-blue-500/20 text-blue-300'
                  }`}>
                    ✦ {partnerData.membershipTier}
                  </span>
                )}
              </div>
            </div>
          )}

          {/* Logo/Header */}
          <div className="p-6 border-b border-white/10">
            <Link href="/partners/dashboard" className="flex items-center gap-3">
              <div className="w-10 h-10 bg-blue-500 rounded-lg flex items-center justify-center">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z"/>
                </svg>
              </div>
              <div className="font-bold text-lg">Dashboard</div>
            </Link>
          </div>

          {/* Navigation */}
          <nav className="flex-1 p-4 space-y-1 overflow-y-auto">
            {navItems.map((item) => {
              const isActive = pathname === item.href;
              return (
                <Link
                  key={item.name}
                  href={item.href}
                  onClick={() => setSidebarOpen(false)}
                  className={`flex items-center gap-3 px-4 py-3 rounded-lg transition ${
                    isActive
                      ? "bg-blue-600 text-white"
                      : "text-white/80 hover:bg-white/10 hover:text-white"
                  }`}
                >
                  {item.icon}
                  <span className="font-medium">{item.name}</span>
                </Link>
              );
            })}
          </nav>

          {/* Logout Button - Mobile only */}
          <div className="p-4 border-t border-white/10 lg:hidden">
            <button
              onClick={handleLogout}
              className="flex items-center gap-3 px-4 py-3 rounded-lg transition w-full text-white/80 hover:bg-red-600/20 hover:text-red-300"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
              </svg>
              <span className="font-medium">Logout</span>
            </button>
          </div>
        </div>
      </aside>

      {/* Mobile overlay */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 z-30 bg-black/50 lg:hidden"
          onClick={() => setSidebarOpen(false)}
        ></div>
      )}

      {/* Main Content */}
      <div className="flex-1 min-h-screen">
        <div className="lg:pt-0">
          {children}
        </div>
      </div>
    </div>
  );
}
