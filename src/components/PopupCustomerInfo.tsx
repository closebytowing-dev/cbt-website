"use client";
import { useState, useMemo } from "react";
import type { AddressPayload } from "./types";
import { getOnlineDiscountRate } from "@/lib/pricing-client";

type Props = {
  payload: AddressPayload;
  onBack: () => void; // go back to Panel 2
  onSubmit?: (args: { name: string; phone: string }) => void; // optional hook
};

export default function PopupCustomerInfo({ payload, onBack, onSubmit }: Props) {

  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [isCreatingJob, setIsCreatingJob] = useState(false);

  // Enhanced validation with better UX
  const isValidName = useMemo(() => {
    const trimmed = name.trim();
    // At least 2 characters, contains at least one letter
    return trimmed.length >= 2 && /[a-zA-Z]/.test(trimmed);
  }, [name]);

  const isValidPhone = useMemo(() => {
    // Remove all non-digit characters except +
    const cleaned = phone.replace(/[^\d+]/g, "");
    // Valid if 10+ digits (US format) or starts with + and has 10+ digits
    return cleaned.length >= 10 || (cleaned.startsWith('+') && cleaned.length >= 11);
  }, [phone]);

  const canSubmit = isValidName && isValidPhone;

  // Calculate the actual discounted total that customer will pay
  // Use estimatedQuote from payload which already includes time multipliers
  const calculateDiscountedTotal = useMemo(() => {
    if (!payload.estimatedQuote || payload.estimatedQuote <= 0) return 0;

    // Get discount rate from Firebase (defaults to 15% if not configured)
    const discountRate = getOnlineDiscountRate();

    // Apply online discount to the pre-calculated quote
    // estimatedQuote already includes: base price + time multipliers + travel + tow miles
    return Math.round(payload.estimatedQuote * (1 - discountRate));
  }, [payload.estimatedQuote]);

  const requestTow = async () => {
    if (!canSubmit || isCreatingJob) return;

    setIsCreatingJob(true);

    try {
      // Comprehensive sanitization of customer inputs
      const sanitizedName = name
        .trim()
        .replace(/[\u200B-\u200D\uFEFF]/g, '') // Remove zero-width spaces
        .replace(/\s+/g, ' ') // Normalize multiple spaces to single space
        .replace(/[^\w\s\-'.]/g, ''); // Keep only letters, numbers, spaces, hyphens, apostrophes, and periods

      const sanitizedPhone = phone
        .trim()
        .replace(/[\u200B-\u200D\uFEFF]/g, '') // Remove zero-width spaces
        .replace(/[^\d+\-() ]/g, ''); // Keep only digits, +, -, (), and spaces

      // Prepare job data
      const jobData = {
        service: payload.service,
        pickup: payload.pickup.address,
        dropoff: payload.isTowing ? payload.dropoff?.address : undefined,
        vehicle: `${payload.vehicle.year} ${payload.vehicle.make} ${payload.vehicle.model} • ${payload.vehicle.color}`,
        customer_name: sanitizedName,
        customer_phone: sanitizedPhone,
        amountQuoted: calculateDiscountedTotal,
      };

      console.log("📤 Creating job with data:", jobData);

      // Create job first
      const jobResponse = await fetch("/api/create-job", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify(jobData),
      });

      if (!jobResponse.ok) {
        const errorData = await jobResponse.json().catch(() => ({}));
        console.error("Job creation failed:", errorData);
        throw new Error(`Failed to create job: ${errorData.error || jobResponse.status}`);
      }

      const jobResult = await jobResponse.json();
      const jobId = jobResult.jobId;

      if (!jobId) {
        console.error("No jobId returned from create-job API");
        throw new Error("No job ID received from server");
      }

      // Optional external hook
      onSubmit?.({ name, phone });

      // Create Square Payment Link and redirect
      const paymentLinkResponse = await fetch("/api/create-square-payment-link", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({
          amount: calculateDiscountedTotal,
          jobId: jobId,
          service: payload.service,
          customer_name: sanitizedName,
          customer_phone: sanitizedPhone,
          pickup_address: payload.pickup.address, // Pass pickup address for pre-filling
        }),
      });

      if (!paymentLinkResponse.ok) {
        const errorData = await paymentLinkResponse.json().catch(() => ({}));
        console.error("Payment link creation failed:", errorData);
        throw new Error(`Failed to create payment link: ${errorData.error || paymentLinkResponse.status}`);
      }

      const paymentLinkData = await paymentLinkResponse.json();

      // Redirect to Square Payment Link
      if (paymentLinkData.paymentLinkUrl) {
        window.location.href = paymentLinkData.paymentLinkUrl;
      } else {
        throw new Error('No payment link URL received');
      }
    } catch (error) {
      console.error("Error creating job or redirecting to Square:", error);
      // Show more detailed error message
      const errorMessage = error instanceof Error ? error.message : 'Unknown error';
      alert(`There was an error processing your request: ${errorMessage}\n\nPlease try again or call us directly at (858) 999-9293.`);
    } finally {
      setIsCreatingJob(false);
    }
  };

  return (
    <div className="w-full flex flex-col gap-3 relative">
      {/* Loading Overlay */}
      {isCreatingJob && (
        <div className="absolute inset-0 z-50 flex items-center justify-center bg-white/95 backdrop-blur-sm rounded-lg">
          <div className="flex flex-col items-center gap-4">
            {/* Spinner */}
            <div className="relative w-16 h-16">
              <div className="absolute inset-0 border-4 border-gray-200 rounded-full"></div>
              <div className="absolute inset-0 border-4 border-[#ffba42] rounded-full border-t-transparent animate-spin"></div>
            </div>
            {/* Loading Text */}
            <div className="text-center">
              <p className="text-2xl sm:text-3xl font-bold text-[#1e1e4a]">Processing Your Request...</p>
              <p className="text-base sm:text-lg text-gray-600 mt-2">Redirecting to secure checkout</p>
            </div>
          </div>
        </div>
      )}

      {/* Header + Back */}
      <div className="flex items-center justify-between">
        <button
          type="button"
          onClick={onBack}
          className="inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-semibold bg-[#1e1e4a] text-white hover:bg-[#2a2a5a]"
          aria-label="Go back to address selection"
          title="Back"
        >
          ← Back
        </button>

        <div className="text-base sm:text-lg font-bold text-black">
          Customer Info
        </div>

        {/* spacer to balance layout */}
        <div className="w-[72px]" />
      </div>

      {/* Light blue background container */}
      <div className="p-4 sm:p-6 flex flex-col gap-4 transition-all duration-200 rounded-b-lg" style={{ backgroundColor: "#f0f8ff", marginBottom: '8px' }}>
        {/* Service name display */}
        {payload.service && (
          <div className="text-lg sm:text-xl font-bold text-[#1e1e4a] text-center mb-2">
            Selected service:&nbsp;<span className="font-extrabold">{payload.service}</span>
          </div>
        )}

        {/* Comprehensive Pricing Display */}
        {payload.priceBreakdown && payload.priceBreakdown.items && payload.priceBreakdown.items.length > 0 && (
          <div className="w-full max-w-2xl mx-auto bg-white border-2 border-[#1e1e4a] rounded-lg shadow-lg">
            {/* Header */}
            <div className="bg-[#1e1e4a] text-white px-4 py-3 rounded-t-lg">
              <div className="text-lg font-bold">Price Breakdown</div>
              {payload.priceBreakdown.timeMultiplier && payload.priceBreakdown.timeMultiplier > 1 && (
                <div className="text-xs text-yellow-300 mt-1">
                  {payload.priceBreakdown.timeMultiplierLabel} rate applied
                </div>
              )}
            </div>

            {/* Price Items */}
            <div className="p-4 space-y-3">
              {/* Render all breakdown items */}
              {payload.priceBreakdown.items.map((item: any, index: number) => {
                // Skip the after-hours indicator line (amount = 0)
                if (item.amount === 0) return null;

                // Determine color based on item label
                const isTravel = item.label.toLowerCase().includes('travel');
                const isTow = item.label.toLowerCase().includes('mi ×') && !isTravel;
                const color = isTravel ? '#42b3ff' : isTow ? '#ffba42' : '#1e1e4a';

                const originalAmount = item.amount;
                const discountRate = getOnlineDiscountRate();
                const discountedAmount = Math.round(originalAmount * (1 - discountRate));

                return (
                  <div key={index} className="flex justify-between items-center pb-3 border-b border-gray-200">
                    <div className="flex-1">
                      <div className="text-base font-semibold" style={{ color }}>
                        {item.label}
                      </div>
                    </div>
                    <div className="flex flex-col items-end ml-4">
                      <div className="text-lg font-bold" style={{ color }}>
                        ${discountedAmount.toFixed(2)}
                      </div>
                      <div className="text-xs text-gray-500 line-through">
                        ${originalAmount.toFixed(2)}
                      </div>
                    </div>
                  </div>
                );
              })}

              {/* Total */}
              <div className="flex justify-between items-center pt-2">
                <div className="text-lg font-bold text-[#1e1e4a]">
                  Total
                </div>
                <div className="flex flex-col items-end">
                  <div className="text-xl font-bold text-green-600">
                    ${calculateDiscountedTotal.toFixed(2)}
                  </div>
                  <div className="text-xs text-gray-500 line-through">
                    ${payload.priceBreakdown.base.toFixed(2)}
                  </div>
                </div>
              </div>

              {/* Discount Notice */}
              <div className="mt-2 mx-2 px-4 py-3 rounded-lg border-2 border-green-300 text-center" style={{ backgroundColor: '#f0f8ff' }}>
                <div className="flex items-center justify-center gap-2">
                  <span style={{ fontSize: '1.2em' }}>💰</span>
                  <span className="text-sm font-bold text-green-900">
                    {Math.round(getOnlineDiscountRate() * 100)}% Online Discount Applied
                  </span>
                </div>
                <div className="text-xs text-green-700 mt-1">
                  All prices shown include your online savings
                </div>
              </div>
            </div>
          </div>
        )}

      {/* Form fields */}
      <div className="rounded-xl border border-white/20 bg-white/70 p-4">
        <div className="grid grid-cols-1 gap-4">
          <div className="flex flex-col gap-1">
            <label htmlFor="customerName" className="text-sm font-semibold text-[#1e1e4a]">
              What is your name?
            </label>
            <input
              id="customerName"
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              onPaste={(e) => {
                // Auto-clean pasted content
                e.preventDefault();
                const pastedText = e.clipboardData.getData('text')
                  .trim()
                  .replace(/[\u200B-\u200D\uFEFF]/g, '')
                  .replace(/\s+/g, ' ');
                setName(pastedText);
              }}
              className="h-12 rounded-xl border-2 border-[#1e1e4a] bg-white px-4 text-base focus:outline-none focus:ring-4 focus:ring-[#1e1e4a]/30 focus:border-[#1e1e4a]"
              placeholder="Full name"
              autoComplete="name"
              autoCapitalize="words"
              spellCheck="false"
            />
          </div>

          <div className="flex flex-col gap-1">
            <label htmlFor="customerPhone" className="text-sm font-semibold text-[#1e1e4a]">
              Phone number
            </label>
            <input
              id="customerPhone"
              type="tel"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              onPaste={(e) => {
                // Auto-clean pasted content
                e.preventDefault();
                const pastedText = e.clipboardData.getData('text')
                  .trim()
                  .replace(/[\u200B-\u200D\uFEFF]/g, '')
                  .replace(/[^\d+\-() ]/g, '');
                setPhone(pastedText);
              }}
              className="h-12 rounded-xl border-2 border-[#1e1e4a] bg-white px-4 text-base focus:outline-none focus:ring-4 focus:ring-[#1e1e4a]/30 focus:border-[#1e1e4a]"
              placeholder="(555) 123-4567"
              autoComplete="tel"
              inputMode="tel"
            />
          </div>
        </div>
      </div>

        {/* Submit */}
        <div className="flex justify-center">
          <button
            type="button"
            onClick={requestTow}
            disabled={!canSubmit || isCreatingJob}
            className="relative overflow-hidden rounded-xl px-8 py-4 sm:px-12 sm:py-6 font-bold text-base sm:text-2xl shadow-lg hover:shadow-xl focus:shadow-none focus:outline-none focus:ring-0 border border-transparent bg-[#ffba42] text-white hover:bg-[#e6a739] transition disabled:opacity-50 disabled:cursor-not-allowed hover:scale-105 active:scale-95"
            style={{
              boxShadow: '0 4px 20px rgba(255, 186, 66, 0.4), 0 0 30px rgba(255, 186, 66, 0.3)',
            }}
            title={
              isCreatingJob ? "Creating job..." :
              !isValidName ? "Please enter your full name" :
              !isValidPhone ? "Please enter a valid phone number (10+ digits)" :
              "Click to proceed to secure checkout"
            }
          >
            {/* Animated shimmer effect */}
            <span
              className="absolute inset-0 shimmer-effect"
              style={{
                background: 'linear-gradient(90deg, transparent 0%, transparent 30%, rgba(255,255,255,0.8) 50%, transparent 70%, transparent 100%)',
                transform: 'translateX(-100%)',
              }}
            />
            <span className="relative z-10">{isCreatingJob ? "Creating Job..." : "Request Now →"}</span>
          </button>
        </div>
      </div>
    </div>
  );
}
