"use client";

import { useEffect, useState } from "react";
import { getAuth, onAuthStateChanged, updatePassword, EmailAuthProvider, reauthenticateWithCredential } from "firebase/auth";
import { collection, query, where, getDocs, doc, updateDoc } from "firebase/firestore";
import { db } from "@/lib/firebase";
import Link from "next/link";

const businessTypes = [
  "Mechanic Shop",
  "Body Shop",
  "Auto Repair",
  "Tire Shop",
  "Collision Center",
  "Glass Repair",
  "Other"
];

export default function AccountSettingsPage() {
  const [loading, setLoading] = useState(true);
  const [partnerData, setPartnerData] = useState<any>(null);
  const [partnerId, setPartnerId] = useState<string>("");

  // Form states
  const [profileForm, setProfileForm] = useState({
    companyName: "",
    businessType: "",
    contactName: "",
    phone: "",
    address: "",
  });

  const [passwordForm, setPasswordForm] = useState({
    currentPassword: "",
    newPassword: "",
    confirmPassword: "",
  });

  const [isSubmittingProfile, setIsSubmittingProfile] = useState(false);
  const [isSubmittingPassword, setIsSubmittingPassword] = useState(false);
  const [profileSuccess, setProfileSuccess] = useState("");
  const [profileError, setProfileError] = useState("");
  const [passwordSuccess, setPasswordSuccess] = useState("");
  const [passwordError, setPasswordError] = useState("");

  useEffect(() => {
    const auth = getAuth();
    const unsubscribe = onAuthStateChanged(auth, async (user) => {
      if (!user) {
        return;
      }

      try {
        // Fetch partner data from Firestore
        const partnersRef = collection(db, "partners");
        const q = query(partnersRef, where("userId", "==", user.uid));
        const querySnapshot = await getDocs(q);

        if (!querySnapshot.empty) {
          const partnerDoc = querySnapshot.docs[0];
          const data = partnerDoc.data();

          setPartnerId(partnerDoc.id);
          setPartnerData({
            id: partnerDoc.id,
            ...data,
          });

          // Extract business type from notes field
          const businessTypeMatch = data.notes?.match(/Business Type: (.+)/);
          const businessType = businessTypeMatch ? businessTypeMatch[1] : "";

          // Initialize profile form with current data
          setProfileForm({
            companyName: data.companyName || "",
            businessType: businessType,
            contactName: data.contactName || "",
            phone: data.phone || "",
            address: data.address || "",
          });
        }
      } catch (error) {
        console.error("Error fetching partner data:", error);
      } finally {
        setLoading(false);
      }
    });

    return () => unsubscribe();
  }, []);

  const handleProfileInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setProfileForm(prev => ({ ...prev, [name]: value }));
    setProfileSuccess("");
    setProfileError("");
  };

  const handlePasswordInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setPasswordForm(prev => ({ ...prev, [name]: value }));
    setPasswordSuccess("");
    setPasswordError("");
  };

  const handleProfileSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmittingProfile(true);
    setProfileSuccess("");
    setProfileError("");

    try {
      if (!partnerId) {
        throw new Error("Partner ID not found");
      }

      // Update Firestore document
      const partnerRef = doc(db, "partners", partnerId);
      await updateDoc(partnerRef, {
        companyName: profileForm.companyName,
        contactName: profileForm.contactName,
        phone: profileForm.phone,
        address: profileForm.address,
        notes: `Business Type: ${profileForm.businessType}`,
      });

      // Update local state
      setPartnerData((prev: any) => ({
        ...prev,
        companyName: profileForm.companyName,
        contactName: profileForm.contactName,
        phone: profileForm.phone,
        address: profileForm.address,
        notes: `Business Type: ${profileForm.businessType}`,
      }));

      setProfileSuccess("Profile updated successfully!");
    } catch (error: any) {
      console.error("Error updating profile:", error);
      setProfileError("Failed to update profile. Please try again.");
    } finally {
      setIsSubmittingProfile(false);
    }
  };

  const handlePasswordSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmittingPassword(true);
    setPasswordSuccess("");
    setPasswordError("");

    try {
      // Validate passwords
      if (passwordForm.newPassword !== passwordForm.confirmPassword) {
        setPasswordError("New passwords do not match.");
        setIsSubmittingPassword(false);
        return;
      }

      if (passwordForm.newPassword.length < 6) {
        setPasswordError("New password must be at least 6 characters long.");
        setIsSubmittingPassword(false);
        return;
      }

      const auth = getAuth();
      const user = auth.currentUser;

      if (!user || !user.email) {
        throw new Error("User not authenticated");
      }

      // Re-authenticate user before changing password
      const credential = EmailAuthProvider.credential(
        user.email,
        passwordForm.currentPassword
      );

      await reauthenticateWithCredential(user, credential);

      // Update password
      await updatePassword(user, passwordForm.newPassword);

      setPasswordSuccess("Password updated successfully!");

      // Clear password form
      setPasswordForm({
        currentPassword: "",
        newPassword: "",
        confirmPassword: "",
      });
    } catch (error: any) {
      console.error("Error updating password:", error);

      if (error.code === 'auth/wrong-password' || error.code === 'auth/invalid-credential') {
        setPasswordError("Current password is incorrect.");
      } else if (error.code === 'auth/weak-password') {
        setPasswordError("New password is too weak. Please use at least 6 characters.");
      } else {
        setPasswordError("Failed to update password. Please try again.");
      }
    } finally {
      setIsSubmittingPassword(false);
    }
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto"></div>
          <p className="mt-4 text-gray-600">Loading...</p>
        </div>
      </div>
    );
  }

  if (!partnerData) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="bg-red-50 border border-red-200 rounded-xl p-6 max-w-md">
          <p className="text-red-800">Unable to load partner data. Please try refreshing the page.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="p-6 max-w-4xl mx-auto">
      {/* Back Navigation */}
      <div className="mb-6">
        <Link
          href="/partners/dashboard/request"
          className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 font-semibold transition-colors"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
          Back to Request Form
        </Link>
      </div>

      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900">Account Settings</h1>
        <p className="text-gray-600 mt-2">Manage your partner account information and security</p>
      </div>

      {/* Profile Information Section */}
      <div className="bg-white rounded-xl shadow-lg p-6 mb-6">
        <div className="mb-6">
          <h2 className="text-xl font-bold text-gray-900 mb-1">Profile Information</h2>
          <p className="text-sm text-gray-600">Update your business and contact details</p>
        </div>

        {profileSuccess && (
          <div className="mb-4 bg-green-50 border border-green-200 rounded-xl p-4">
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
              </svg>
              <p className="text-sm text-green-800 font-medium">{profileSuccess}</p>
            </div>
          </div>
        )}

        {profileError && (
          <div className="mb-4 bg-red-50 border border-red-200 rounded-xl p-4">
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-red-600" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd"/>
              </svg>
              <p className="text-sm text-red-800 font-medium">{profileError}</p>
            </div>
          </div>
        )}

        <form onSubmit={handleProfileSubmit} className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label htmlFor="companyName" className="block text-sm font-semibold text-gray-700 mb-2">
                Business Name *
              </label>
              <input
                type="text"
                id="companyName"
                name="companyName"
                required
                value={profileForm.companyName}
                onChange={handleProfileInputChange}
                className="w-full h-12 rounded-xl border-2 border-gray-300 bg-white px-4 text-base focus:outline-none focus:ring-4 focus:ring-blue-500/30 focus:border-blue-500"
              />
            </div>

            <div>
              <label htmlFor="businessType" className="block text-sm font-semibold text-gray-700 mb-2">
                Business Type *
              </label>
              <select
                id="businessType"
                name="businessType"
                required
                value={profileForm.businessType}
                onChange={handleProfileInputChange}
                className="w-full h-12 rounded-xl border-2 border-gray-300 bg-white px-4 text-base focus:outline-none focus:ring-4 focus:ring-blue-500/30 focus:border-blue-500"
              >
                <option value="">Select type...</option>
                {businessTypes.map(type => (
                  <option key={type} value={type}>{type}</option>
                ))}
              </select>
            </div>

            <div>
              <label htmlFor="contactName" className="block text-sm font-semibold text-gray-700 mb-2">
                Your Name *
              </label>
              <input
                type="text"
                id="contactName"
                name="contactName"
                required
                value={profileForm.contactName}
                onChange={handleProfileInputChange}
                className="w-full h-12 rounded-xl border-2 border-gray-300 bg-white px-4 text-base focus:outline-none focus:ring-4 focus:ring-blue-500/30 focus:border-blue-500"
              />
            </div>

            <div>
              <label htmlFor="phone" className="block text-sm font-semibold text-gray-700 mb-2">
                Phone Number *
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                required
                value={profileForm.phone}
                onChange={handleProfileInputChange}
                className="w-full h-12 rounded-xl border-2 border-gray-300 bg-white px-4 text-base focus:outline-none focus:ring-4 focus:ring-blue-500/30 focus:border-blue-500"
              />
            </div>

            <div className="md:col-span-2">
              <label htmlFor="address" className="block text-sm font-semibold text-gray-700 mb-2">
                Business Address *
              </label>
              <input
                type="text"
                id="address"
                name="address"
                required
                value={profileForm.address}
                onChange={handleProfileInputChange}
                className="w-full h-12 rounded-xl border-2 border-gray-300 bg-white px-4 text-base focus:outline-none focus:ring-4 focus:ring-blue-500/30 focus:border-blue-500"
              />
            </div>
          </div>

          {/* Read-only Email */}
          <div>
            <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
              Email Address
            </label>
            <input
              type="email"
              id="email"
              value={partnerData.email}
              disabled
              className="w-full h-12 rounded-xl border-2 border-gray-300 bg-gray-100 px-4 text-base text-gray-600 cursor-not-allowed"
            />
            <p className="text-xs text-gray-500 mt-1">Email cannot be changed. Contact support if you need to update it.</p>
          </div>

          <div className="flex justify-end">
            <button
              type="submit"
              disabled={isSubmittingProfile}
              className="bg-gradient-to-r from-blue-600 to-blue-700 text-white px-8 py-3 rounded-xl font-bold text-base shadow-lg hover:shadow-xl hover:from-blue-700 hover:to-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-500/50 transition disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isSubmittingProfile ? (
                <span className="flex items-center gap-2">
                  <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                  </svg>
                  Saving...
                </span>
              ) : (
                "Save Changes"
              )}
            </button>
          </div>
        </form>
      </div>

      {/* Change Password Section */}
      <div className="bg-white rounded-xl shadow-lg p-6">
        <div className="mb-6">
          <h2 className="text-xl font-bold text-gray-900 mb-1">Change Password</h2>
          <p className="text-sm text-gray-600">Update your password to keep your account secure</p>
        </div>

        {passwordSuccess && (
          <div className="mb-4 bg-green-50 border border-green-200 rounded-xl p-4">
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
              </svg>
              <p className="text-sm text-green-800 font-medium">{passwordSuccess}</p>
            </div>
          </div>
        )}

        {passwordError && (
          <div className="mb-4 bg-red-50 border border-red-200 rounded-xl p-4">
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-red-600" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd"/>
              </svg>
              <p className="text-sm text-red-800 font-medium">{passwordError}</p>
            </div>
          </div>
        )}

        <form onSubmit={handlePasswordSubmit} className="space-y-4">
          <div>
            <label htmlFor="currentPassword" className="block text-sm font-semibold text-gray-700 mb-2">
              Current Password *
            </label>
            <input
              type="password"
              id="currentPassword"
              name="currentPassword"
              required
              value={passwordForm.currentPassword}
              onChange={handlePasswordInputChange}
              className="w-full h-12 rounded-xl border-2 border-gray-300 bg-white px-4 text-base focus:outline-none focus:ring-4 focus:ring-blue-500/30 focus:border-blue-500"
              placeholder="Enter your current password"
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label htmlFor="newPassword" className="block text-sm font-semibold text-gray-700 mb-2">
                New Password *
              </label>
              <input
                type="password"
                id="newPassword"
                name="newPassword"
                required
                value={passwordForm.newPassword}
                onChange={handlePasswordInputChange}
                className="w-full h-12 rounded-xl border-2 border-gray-300 bg-white px-4 text-base focus:outline-none focus:ring-4 focus:ring-blue-500/30 focus:border-blue-500"
                placeholder="At least 6 characters"
                minLength={6}
              />
            </div>

            <div>
              <label htmlFor="confirmPassword" className="block text-sm font-semibold text-gray-700 mb-2">
                Confirm New Password *
              </label>
              <input
                type="password"
                id="confirmPassword"
                name="confirmPassword"
                required
                value={passwordForm.confirmPassword}
                onChange={handlePasswordInputChange}
                className="w-full h-12 rounded-xl border-2 border-gray-300 bg-white px-4 text-base focus:outline-none focus:ring-4 focus:ring-blue-500/30 focus:border-blue-500"
                placeholder="Re-enter new password"
                minLength={6}
              />
            </div>
          </div>

          <div className="flex justify-end">
            <button
              type="submit"
              disabled={isSubmittingPassword}
              className="bg-gradient-to-r from-blue-600 to-blue-700 text-white px-8 py-3 rounded-xl font-bold text-base shadow-lg hover:shadow-xl hover:from-blue-700 hover:to-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-500/50 transition disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isSubmittingPassword ? (
                <span className="flex items-center gap-2">
                  <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                  </svg>
                  Updating...
                </span>
              ) : (
                "Update Password"
              )}
            </button>
          </div>
        </form>
      </div>

      {/* Account Status Info */}
      <div className="mt-6 bg-blue-50 border border-blue-200 rounded-xl p-4">
        <div className="flex items-start gap-3">
          <svg className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd"/>
          </svg>
          <div>
            <p className="text-sm font-semibold text-blue-900 mb-1">Account Status</p>
            <div className="text-sm text-blue-800 space-y-1">
              <p>Status: <span className={`font-semibold ${partnerData.status === 'active' ? 'text-green-700' : 'text-yellow-700'}`}>
                {partnerData.status === 'active' ? 'Active' : 'Pending'}
              </span></p>
              <p>Commission Rate: <span className="font-semibold">{partnerData.commissionRate}%</span></p>
              <p className="text-xs mt-2">Need to update your email or have other questions? Contact us at <a href="tel:+18589999293" className="font-semibold underline">(858) 999-9293</a></p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
