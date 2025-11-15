"use client";

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';

type JobDetails = {
  id: string;
  service: string;
  pickup: string;
  dropoff?: string;
  vehicle: string;
  customerName: string;
  customerPhone: string;
  amountQuoted: number;
  status: string;
  paymentStatus: string;
};

export default function PaymentSuccessClient() {
  const searchParams = useSearchParams();
  const jobId = searchParams?.get('jobId');
  const paymentLinkId = searchParams?.get('paymentLinkId');

  const [job, setJob] = useState<JobDetails | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [verifying, setVerifying] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  useEffect(() => {
    async function verifyPayment() {
      if (!jobId || !paymentLinkId) {
        setError("Missing payment information. Please contact support.");
        setLoading(false);
        return;
      }

      setVerifying(true);

      try {
        const response = await fetch('/api/verify-payment', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ jobId, paymentLinkId }),
        });

        const data = await response.json();

        if (response.ok && data.job) {
          setJob(data.job);
          // Trigger success animation
          setTimeout(() => setShowSuccess(true), 100);
        } else {
          setError(data.error || "Failed to verify payment. Please contact support.");
        }
      } catch (err) {
        console.error("Error verifying payment:", err);
        setError("An error occurred. Please contact us at (858) 999-9293.");
      } finally {
        setLoading(false);
        setVerifying(false);
      }
    }

    verifyPayment();
  }, [jobId, paymentLinkId]);

  if (loading || verifying) {
    return (
      <div className="fixed inset-0 bg-gradient-to-br from-blue-50 via-blue-100 to-indigo-100 flex items-center justify-center">
        <div className="text-center">
          <div className="inline-flex items-center justify-center w-16 h-16 mb-6">
            <div className="animate-spin rounded-full h-16 w-16 border-4 border-blue-200 border-t-blue-600"></div>
          </div>
          <h2 className="text-2xl font-semibold text-gray-800 mb-2">Confirming Payment...</h2>
          <p className="text-gray-600">Just a moment while we verify your transaction</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="fixed inset-0 bg-gradient-to-br from-red-50 via-red-100 to-rose-100 flex items-center justify-center p-4">
        <div className="max-w-md w-full text-center">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-red-100 rounded-full mb-6">
            <svg className="w-10 h-10 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </div>
          <h1 className="text-3xl font-bold text-gray-900 mb-3">Verification Issue</h1>
          <p className="text-lg text-gray-700 mb-8">{error}</p>
          <div className="flex flex-col gap-3">
            <a
              href="tel:+18589999293"
              className="bg-red-600 text-white px-8 py-4 rounded-xl font-semibold hover:bg-red-700 transition-all shadow-lg hover:shadow-xl text-lg"
            >
              Call Us: (858) 999-9293
            </a>
            <Link
              href="/"
              className="bg-white text-gray-800 px-8 py-4 rounded-xl font-semibold hover:bg-gray-50 transition-all border-2 border-gray-200 text-lg"
            >
              Return to Home
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className={`fixed inset-0 bg-gradient-to-br from-blue-50 via-blue-100 to-indigo-100 flex items-center justify-center p-4 transition-all duration-700 ${showSuccess ? 'opacity-100' : 'opacity-0'}`}>
      <div className={`max-w-2xl w-full transform transition-all duration-700 ${showSuccess ? 'scale-100 translate-y-0' : 'scale-95 translate-y-4'}`}>

        {/* Success Icon with Animation */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center w-24 h-24 bg-green-500 rounded-full mb-6 shadow-2xl animate-bounce-in">
            <svg className="w-14 h-14 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
            </svg>
          </div>

          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Payment Confirmed!
          </h1>

          <p className="text-xl md:text-2xl text-gray-700 mb-2">
            Your tow operator is on the way
          </p>

          <p className="text-lg text-gray-600">
            You'll receive a call with the exact ETA in the next few minutes
          </p>
        </div>

        {/* Main Info Card */}
        <div className="bg-white rounded-2xl shadow-2xl p-8 mb-6">

          {/* ETA Banner */}
          <div className="bg-gradient-to-r from-blue-500 to-indigo-600 rounded-xl p-6 mb-6 text-white text-center">
            <div className="flex items-center justify-center gap-3 mb-2">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span className="text-2xl font-bold">Estimated Arrival</span>
            </div>
            <div className="text-4xl font-bold">
              Less than 30 minutes
            </div>
            <p className="text-blue-100 mt-2">Your operator will call you in the next few minutes with the exact ETA</p>
          </div>

          {/* Service Details */}
          {job && (
            <div className="space-y-4">
              <div className="border-b border-gray-200 pb-4">
                <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wide mb-3">Service Details</h3>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <p className="text-sm text-gray-600">Service</p>
                    <p className="text-lg font-semibold text-gray-900">{job.service}</p>
                  </div>
                  <div className="text-right">
                    <p className="text-sm text-gray-600">Amount Paid</p>
                    <p className="text-lg font-bold text-green-600">${job.amountQuoted}</p>
                  </div>
                </div>
              </div>

              <div className="border-b border-gray-200 pb-4">
                <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wide mb-3">Location Information</h3>
                <div className="space-y-3">
                  <div>
                    <p className="text-sm text-gray-600 mb-1">Pickup Location</p>
                    <p className="text-base font-medium text-gray-900">{job.pickup}</p>
                  </div>
                  {job.dropoff && (
                    <div>
                      <p className="text-sm text-gray-600 mb-1">Drop-off Location</p>
                      <p className="text-base font-medium text-gray-900">{job.dropoff}</p>
                    </div>
                  )}
                </div>
              </div>

              <div>
                <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wide mb-3">Vehicle Information</h3>
                <p className="text-base font-medium text-gray-900">{job.vehicle}</p>
              </div>
            </div>
          )}
        </div>

        {/* What Happens Next */}
        <div className="bg-white rounded-2xl shadow-xl p-6 mb-6">
          <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
            <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            What Happens Next
          </h3>
          <div className="space-y-3">
            <div className="flex items-start gap-3">
              <div className="flex-shrink-0 w-6 h-6 bg-green-500 rounded-full flex items-center justify-center mt-0.5">
                <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                </svg>
              </div>
              <div>
                <p className="font-semibold text-gray-900">Confirmation sent</p>
                <p className="text-sm text-gray-600">A text message confirmation is on its way to {job?.customerPhone}</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <div className="flex-shrink-0 w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center mt-0.5">
                <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"/>
                </svg>
              </div>
              <div>
                <p className="font-semibold text-gray-900">Operator en route</p>
                <p className="text-sm text-gray-600">Your driver will call you in the next few minutes with the exact ETA</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <div className="flex-shrink-0 w-6 h-6 bg-indigo-500 rounded-full flex items-center justify-center mt-0.5">
                <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M8 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM15 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z"/>
                  <path d="M3 4a1 1 0 00-1 1v10a1 1 0 001 1h1.05a2.5 2.5 0 014.9 0H10a1 1 0 001-1V5a1 1 0 00-1-1H3zM14 7a1 1 0 00-1 1v6.05A2.5 2.5 0 0115.95 16H17a1 1 0 001-1v-5a1 1 0 00-.293-.707l-2-2A1 1 0 0015 7h-1z"/>
                </svg>
              </div>
              <div>
                <p className="font-semibold text-gray-900">Service delivery</p>
                <p className="text-sm text-gray-600">Our professional team will complete your service as requested</p>
              </div>
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4">
          <a
            href="tel:+18589999293"
            className="flex-1 bg-blue-600 text-white px-8 py-4 rounded-xl font-semibold hover:bg-blue-700 transition-all shadow-lg hover:shadow-xl text-center text-lg flex items-center justify-center gap-2"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
              <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"/>
            </svg>
            Call (858) 999-9293
          </a>
          <Link
            href="/"
            className="flex-1 bg-white text-gray-800 px-8 py-4 rounded-xl font-semibold hover:bg-gray-50 transition-all border-2 border-gray-200 text-center text-lg"
          >
            Return to Home
          </Link>
        </div>

        {/* Reference Number */}
        {job && (
          <div className="text-center mt-6">
            <p className="text-sm text-gray-600">
              Confirmation Reference: <span className="font-mono font-semibold text-gray-800">#{job.id.slice(0, 8).toUpperCase()}</span>
            </p>
          </div>
        )}
      </div>

      <style jsx>{`
        @keyframes bounce-in {
          0% {
            transform: scale(0);
            opacity: 0;
          }
          50% {
            transform: scale(1.1);
          }
          100% {
            transform: scale(1);
            opacity: 1;
          }
        }
        .animate-bounce-in {
          animation: bounce-in 0.6s cubic-bezier(0.68, -0.55, 0.265, 1.55);
        }
      `}</style>
    </div>
  );
}
