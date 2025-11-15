import type { Metadata } from 'next';
import { Suspense } from 'react';
import PaymentSuccessClient from './page-client';

export const metadata: Metadata = {
  title: 'Payment Successful | CloseBy Towing San Diego',
  description: 'Your payment has been processed successfully. Our operator will be on the way shortly.',
  robots: {
    index: false,
    follow: false,
  },
};

export default function PaymentSuccessPage() {
  return (
    <Suspense fallback={
      <div className="min-h-screen bg-gradient-to-b from-[#1e1e4a] to-[#ffba42] flex items-center justify-center p-4">
        <div className="bg-white rounded-3xl p-8 max-w-md w-full text-center shadow-2xl">
          <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-[#1e1e4a] mx-auto mb-4"></div>
          <h2 className="text-xl font-semibold text-[#1e1e4a]">Loading...</h2>
        </div>
      </div>
    }>
      <PaymentSuccessClient />
    </Suspense>
  );
}
