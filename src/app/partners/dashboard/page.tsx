"use client";

import { useEffect, useState } from "react";
import { getAuth, signOut } from "firebase/auth";
import { collection, query, where, getDocs, orderBy } from "firebase/firestore";
import { db } from "@/lib/firebase";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function DashboardPage() {
  const router = useRouter();
  const [partnerData, setPartnerData] = useState<any>(null);
  const [allJobs, setAllJobs] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const auth = getAuth();
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        fetchPartnerData(user.uid);
      } else {
        setLoading(false);
      }
    });

    return () => unsubscribe();
  }, []);

  const fetchPartnerData = async (userId: string) => {
    try {
      const partnersRef = collection(db, "partners");
      const q = query(partnersRef, where("userId", "==", userId));
      const querySnapshot = await getDocs(q);

      if (!querySnapshot.empty) {
        const partnerDoc = querySnapshot.docs[0];
        const partner = {
          id: partnerDoc.id,
          ...partnerDoc.data(),
        };
        setPartnerData(partner);

        // Fetch all jobs for this partner
        const jobsRef = collection(db, "live_jobs");
        const jobsQuery = query(
          jobsRef,
          where("partnerId", "==", partnerDoc.id),
          orderBy("createdAt", "desc")
        );
        const jobsSnapshot = await getDocs(jobsQuery);
        const jobsList = jobsSnapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data(),
        }));
        setAllJobs(jobsList);
      }
    } catch (error) {
      console.error("Error fetching partner data:", error);
    } finally {
      setLoading(false);
    }
  };

  const handleLogout = async () => {
    try {
      const auth = getAuth();
      await signOut(auth);
      router.push("/partners/signin");
    } catch (error) {
      console.error("Logout error:", error);
    }
  };

  const getGreeting = () => {
    const hour = new Date().getHours();
    if (hour < 12) return "Good morning";
    if (hour < 17) return "Good afternoon";
    return "Good evening";
  };

  const formatDate = (timestamp: any) => {
    if (!timestamp) return "N/A";
    const date = timestamp.toDate ? timestamp.toDate() : new Date(timestamp);
    return date.toLocaleDateString("en-US", {
      month: "short",
      day: "numeric",
      year: "numeric",
    });
  };

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(amount);
  };

  // Calculate stats
  const pendingJobs = allJobs.filter(j => j.status === "pending");
  const completedJobs = allJobs.filter(j => j.status === "completed");
  const inProgressJobs = allJobs.filter(j => j.status === "accepted" || j.status === "in_progress");

  // Calculate monthly earnings
  const thisMonth = new Date();
  const thisMonthJobs = completedJobs.filter(j => {
    if (!j.createdAt) return false;
    const date = j.createdAt.toDate ? j.createdAt.toDate() : new Date(j.createdAt);
    return date.getMonth() === thisMonth.getMonth() && date.getFullYear() === thisMonth.getFullYear();
  });
  const thisMonthEarnings = thisMonthJobs.reduce((sum, j) => sum + ((j.finalPrice || 0) * (j.commissionRate || 0) / 100), 0);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-50 to-slate-100">
        <div className="text-center">
          <div className="w-16 h-16 border-4 border-blue-200 border-t-blue-600 rounded-full animate-spin mx-auto"></div>
          <p className="mt-4 text-slate-500 font-medium">Loading your dashboard...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Header */}
      <div className="bg-gradient-to-r from-[#1e1e4a] to-[#2d2d6a] text-white">
        <div className="max-w-7xl mx-auto px-4 py-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-blue-200 text-sm font-medium mb-1">{getGreeting()}</p>
              <h1 className="text-2xl md:text-3xl font-bold tracking-tight">
                {partnerData?.companyName || "Partner Dashboard"}
              </h1>
            </div>
            <div className="flex items-center gap-3">
              <Link
                href="/partners/dashboard/request"
                className="px-5 py-2.5 rounded-xl bg-blue-500 hover:bg-blue-400 transition text-sm font-semibold flex items-center gap-2"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v2H7a1 1 0 100 2h2v2a1 1 0 102 0v-2h2a1 1 0 100-2h-2V7z" clipRule="evenodd"/>
                </svg>
                New Request
              </Link>
              <Link
                href="/partners/dashboard/settings"
                className="p-2.5 rounded-xl bg-white/10 hover:bg-white/20 transition"
                title="Settings"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </Link>
              <button
                onClick={handleLogout}
                className="p-2.5 rounded-xl bg-white/10 hover:bg-red-500/80 transition"
                title="Logout"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 py-8">
        {/* Stats Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          {/* Total Earnings */}
          <div className="bg-white rounded-2xl shadow-sm border border-slate-200 p-6">
            <div className="flex items-center justify-between mb-3">
              <div className="w-12 h-12 bg-emerald-100 rounded-xl flex items-center justify-center">
                <svg className="w-6 h-6 text-emerald-600" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M8.433 7.418c.155-.103.346-.196.567-.267v1.698a2.305 2.305 0 01-.567-.267C8.07 8.34 8 8.114 8 8c0-.114.07-.34.433-.582zM11 12.849v-1.698c.22.071.412.164.567.267.364.243.433.468.433.582 0 .114-.07.34-.433.582a2.305 2.305 0 01-.567.267z"/>
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-13a1 1 0 10-2 0v.092a4.535 4.535 0 00-1.676.662C6.602 6.234 6 7.009 6 8c0 .99.602 1.765 1.324 2.246.48.32 1.054.545 1.676.662v1.941c-.391-.127-.68-.317-.843-.504a1 1 0 10-1.51 1.31c.562.649 1.413 1.076 2.353 1.253V15a1 1 0 102 0v-.092a4.535 4.535 0 001.676-.662C13.398 13.766 14 12.991 14 12c0-.99-.602-1.765-1.324-2.246A4.535 4.535 0 0011 9.092V7.151c.391.127.68.317.843.504a1 1 0 101.511-1.31c-.563-.649-1.413-1.076-2.354-1.253V5z" clipRule="evenodd"/>
                </svg>
              </div>
              <span className="text-xs font-medium text-emerald-600 bg-emerald-50 px-2 py-1 rounded-full">Total</span>
            </div>
            <p className="text-3xl font-bold text-slate-900">{formatCurrency(partnerData?.totalCommissionEarned || 0)}</p>
            <p className="text-sm text-slate-500 mt-1">Total Earnings</p>
          </div>

          {/* This Month */}
          <div className="bg-white rounded-2xl shadow-sm border border-slate-200 p-6">
            <div className="flex items-center justify-between mb-3">
              <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center">
                <svg className="w-6 h-6 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd"/>
                </svg>
              </div>
              <span className="text-xs font-medium text-blue-600 bg-blue-50 px-2 py-1 rounded-full">This Month</span>
            </div>
            <p className="text-3xl font-bold text-slate-900">{formatCurrency(thisMonthEarnings)}</p>
            <p className="text-sm text-slate-500 mt-1">{thisMonthJobs.length} Jobs</p>
          </div>

          {/* Commission Rate */}
          <div className="bg-white rounded-2xl shadow-sm border border-slate-200 p-6">
            <div className="flex items-center justify-between mb-3">
              <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center">
                <svg className="w-6 h-6 text-purple-600" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M12 7a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0V8.414l-4.293 4.293a1 1 0 01-1.414 0L8 10.414l-4.293 4.293a1 1 0 01-1.414-1.414l5-5a1 1 0 011.414 0L11 10.586 14.586 7H12z" clipRule="evenodd"/>
                </svg>
              </div>
              <span className="text-xs font-medium text-purple-600 bg-purple-50 px-2 py-1 rounded-full">Rate</span>
            </div>
            <p className="text-3xl font-bold text-slate-900">{partnerData?.commissionRate || 10}%</p>
            <p className="text-sm text-slate-500 mt-1">Commission Rate</p>
          </div>

          {/* Total Referrals */}
          <div className="bg-white rounded-2xl shadow-sm border border-slate-200 p-6">
            <div className="flex items-center justify-between mb-3">
              <div className="w-12 h-12 bg-orange-100 rounded-xl flex items-center justify-center">
                <svg className="w-6 h-6 text-orange-600" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9 6a3 3 0 11-6 0 3 3 0 016 0zM17 6a3 3 0 11-6 0 3 3 0 016 0zM12.93 17c.046-.327.07-.66.07-1a6.97 6.97 0 00-1.5-4.33A5 5 0 0119 16v1h-6.07zM6 11a5 5 0 015 5v1H1v-1a5 5 0 015-5z"/>
                </svg>
              </div>
              <span className="text-xs font-medium text-orange-600 bg-orange-50 px-2 py-1 rounded-full">Total</span>
            </div>
            <p className="text-3xl font-bold text-slate-900">{allJobs.length}</p>
            <p className="text-sm text-slate-500 mt-1">Total Referrals</p>
          </div>
        </div>

        {/* Job Status Overview */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 mb-8">
          <div className="bg-yellow-50 border border-yellow-200 rounded-2xl p-5 flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-yellow-800">Pending Jobs</p>
              <p className="text-2xl font-bold text-yellow-900">{pendingJobs.length}</p>
            </div>
            <div className="w-12 h-12 bg-yellow-200 rounded-full flex items-center justify-center">
              <svg className="w-6 h-6 text-yellow-700" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd"/>
              </svg>
            </div>
          </div>

          <div className="bg-blue-50 border border-blue-200 rounded-2xl p-5 flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-blue-800">In Progress</p>
              <p className="text-2xl font-bold text-blue-900">{inProgressJobs.length}</p>
            </div>
            <div className="w-12 h-12 bg-blue-200 rounded-full flex items-center justify-center">
              <svg className="w-6 h-6 text-blue-700" fill="currentColor" viewBox="0 0 20 20">
                <path d="M8 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM15 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z"/>
                <path d="M3 4a1 1 0 00-1 1v10a1 1 0 001 1h1.05a2.5 2.5 0 014.9 0H10a1 1 0 001-1V5a1 1 0 00-1-1H3zM14 7a1 1 0 00-1 1v6.05A2.5 2.5 0 0115.95 16H17a1 1 0 001-1v-5a1 1 0 00-.293-.707l-2-2A1 1 0 0015 7h-1z"/>
              </svg>
            </div>
          </div>

          <div className="bg-green-50 border border-green-200 rounded-2xl p-5 flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-green-800">Completed</p>
              <p className="text-2xl font-bold text-green-900">{completedJobs.length}</p>
            </div>
            <div className="w-12 h-12 bg-green-200 rounded-full flex items-center justify-center">
              <svg className="w-6 h-6 text-green-700" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
              </svg>
            </div>
          </div>
        </div>

        {/* Recent Activity & Payment Info */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Recent Jobs */}
          <div className="lg:col-span-2 bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden">
            <div className="px-6 py-4 border-b border-slate-200 flex items-center justify-between">
              <h2 className="text-lg font-bold text-slate-900">Recent Referrals</h2>
              <Link href="/partners/dashboard/referrals" className="text-sm text-blue-600 hover:text-blue-700 font-medium">
                View All
              </Link>
            </div>

            {allJobs.length === 0 ? (
              <div className="p-8 text-center">
                <div className="w-16 h-16 bg-slate-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-slate-400" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M5 3a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2V5a2 2 0 00-2-2H5zm0 2h10v7h-2l-1 2H8l-1-2H5V5z" clipRule="evenodd"/>
                  </svg>
                </div>
                <p className="text-slate-600 mb-4">No referrals yet</p>
                <Link
                  href="/partners/dashboard/request"
                  className="inline-flex items-center gap-2 bg-blue-600 text-white px-5 py-2.5 rounded-xl font-semibold hover:bg-blue-700 transition"
                >
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v2H7a1 1 0 100 2h2v2a1 1 0 102 0v-2h2a1 1 0 100-2h-2V7z" clipRule="evenodd"/>
                  </svg>
                  Submit First Referral
                </Link>
              </div>
            ) : (
              <div className="divide-y divide-slate-100">
                {allJobs.slice(0, 8).map((job) => (
                  <div key={job.id} className="px-6 py-4 hover:bg-slate-50 transition">
                    <div className="flex items-center justify-between">
                      <div className="flex-1">
                        <div className="flex items-center gap-3">
                          <p className="font-semibold text-slate-900">
                            {job.vehicleYear} {job.vehicleMake} {job.vehicleModel}
                          </p>
                          <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                            job.status === "completed" ? "bg-green-100 text-green-800" :
                            job.status === "pending" ? "bg-yellow-100 text-yellow-800" :
                            job.status === "accepted" || job.status === "in_progress" ? "bg-blue-100 text-blue-800" :
                            job.status === "cancelled" ? "bg-red-100 text-red-800" :
                            "bg-slate-100 text-slate-800"
                          }`}>
                            {job.status === "accepted" ? "In Progress" : job.status?.charAt(0).toUpperCase() + job.status?.slice(1)}
                          </span>
                        </div>
                        <p className="text-sm text-slate-500 mt-1">{job.serviceType}</p>
                      </div>
                      <div className="text-right">
                        <p className="text-sm text-slate-500">{formatDate(job.createdAt)}</p>
                        {job.finalPrice && (
                          <p className="text-sm font-semibold text-emerald-600">
                            +{formatCurrency((job.finalPrice * (job.commissionRate || 0)) / 100)}
                          </p>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Account Info */}
          <div className="space-y-6">
            {/* Payment Summary */}
            <div className="bg-white rounded-2xl shadow-sm border border-slate-200 p-6">
              <h3 className="text-lg font-bold text-slate-900 mb-4">Payment Summary</h3>

              <div className="space-y-4">
                <div className="flex items-center justify-between py-3 border-b border-slate-100">
                  <span className="text-slate-600">Total Earned</span>
                  <span className="font-bold text-slate-900">{formatCurrency(partnerData?.totalCommissionEarned || 0)}</span>
                </div>
                <div className="flex items-center justify-between py-3 border-b border-slate-100">
                  <span className="text-slate-600">Total Paid Out</span>
                  <span className="font-bold text-slate-900">{formatCurrency(partnerData?.totalPaid || 0)}</span>
                </div>
                <div className="flex items-center justify-between py-3">
                  <span className="text-slate-600">Pending Balance</span>
                  <span className="font-bold text-emerald-600">{formatCurrency(partnerData?.commissionOwed || 0)}</span>
                </div>
              </div>

              <div className="mt-6 p-4 bg-blue-50 rounded-xl">
                <p className="text-sm text-blue-800">
                  <strong>Payment Schedule:</strong> Commissions are paid weekly via {partnerData?.paymentMethod || "check"}.
                </p>
              </div>
            </div>

            {/* Partner Tier */}
            <div className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl p-6 text-white">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-gradient-to-br from-amber-400 to-amber-600 rounded-full flex items-center justify-center">
                  <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M5 2a1 1 0 011 1v1h1a1 1 0 010 2H6v1a1 1 0 01-2 0V6H3a1 1 0 010-2h1V3a1 1 0 011-1zm0 10a1 1 0 011 1v1h1a1 1 0 110 2H6v1a1 1 0 11-2 0v-1H3a1 1 0 110-2h1v-1a1 1 0 011-1zM12 2a1 1 0 01.967.744L14.146 7.2 17.5 9.134a1 1 0 010 1.732l-3.354 1.935-1.18 4.455a1 1 0 01-1.933 0L9.854 12.8 6.5 10.866a1 1 0 010-1.732l3.354-1.935 1.18-4.455A1 1 0 0112 2z" clipRule="evenodd"/>
                  </svg>
                </div>
                <div>
                  <p className="text-sm text-slate-400">Partner Tier</p>
                  <p className="text-xl font-bold">{partnerData?.membershipTier || "Silver"}</p>
                </div>
              </div>
              <p className="text-sm text-slate-400">
                Earn more referrals to unlock higher commission rates and faster payouts.
              </p>
            </div>

            {/* Quick Actions */}
            <div className="bg-white rounded-2xl shadow-sm border border-slate-200 p-6">
              <h3 className="text-lg font-bold text-slate-900 mb-4">Quick Actions</h3>
              <div className="space-y-3">
                <Link
                  href="/partners/dashboard/request"
                  className="flex items-center gap-3 p-3 rounded-xl bg-blue-50 hover:bg-blue-100 transition"
                >
                  <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center">
                    <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v2H7a1 1 0 100 2h2v2a1 1 0 102 0v-2h2a1 1 0 100-2h-2V7z" clipRule="evenodd"/>
                    </svg>
                  </div>
                  <div>
                    <p className="font-semibold text-slate-900">New Request</p>
                    <p className="text-xs text-slate-500">Submit a tow request</p>
                  </div>
                </Link>

                <Link
                  href="/partners/dashboard/referrals"
                  className="flex items-center gap-3 p-3 rounded-xl bg-slate-50 hover:bg-slate-100 transition"
                >
                  <div className="w-10 h-10 bg-slate-600 rounded-lg flex items-center justify-center">
                    <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M3 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd"/>
                    </svg>
                  </div>
                  <div>
                    <p className="font-semibold text-slate-900">View Referrals</p>
                    <p className="text-xs text-slate-500">See all your jobs</p>
                  </div>
                </Link>

                <Link
                  href="/partners/dashboard/settings"
                  className="flex items-center gap-3 p-3 rounded-xl bg-slate-50 hover:bg-slate-100 transition"
                >
                  <div className="w-10 h-10 bg-slate-600 rounded-lg flex items-center justify-center">
                    <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div>
                    <p className="font-semibold text-slate-900">Settings</p>
                    <p className="text-xs text-slate-500">Update your profile</p>
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Support Footer */}
        <div className="mt-8 text-center">
          <p className="text-slate-500">
            Need help? Call us at{" "}
            <a href="tel:+18589999293" className="text-blue-600 hover:text-blue-700 font-semibold">
              (858) 999-9293
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}
