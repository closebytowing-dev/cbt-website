"use client";
import { useState, useMemo } from "react";
import type { AddressPayload } from "./types";

type Props = {
  payload: AddressPayload;
  onBack: () => void; // go back to Panel 2
  onSubmit?: (args: { name: string; phone: string }) => void; // optional hook
};

export default function PopupCustomerInfo({ payload, onBack, onSubmit }: Props) {

  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [isCreatingJob, setIsCreatingJob] = useState(false);

  // basic validation
  const isValidName = useMemo(() => name.trim().length >= 2, [name]);
  const isValidPhone = useMemo(() => {
    const p = phone.replace(/[^\d+]/g, "").trim();
    return p.length >= 7; // lightweight check; adjust as you like
  }, [phone]);

  const canSubmit = isValidName && isValidPhone;

  const requestTow = async () => {
    if (!canSubmit || isCreatingJob) return;

    setIsCreatingJob(true);

    try {
      // Prepare job data
      const jobData = {
        service: payload.service,
        pickup: payload.pickup.address,
        dropoff: payload.isTowing ? payload.dropoff?.address : undefined,
        vehicle: `${payload.vehicle.year} ${payload.vehicle.make} ${payload.vehicle.model} • ${payload.vehicle.color}`,
        customer_name: name,
        customer_phone: phone,
        amountQuoted: payload.estimatedQuote || 0,
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
          amount: payload.estimatedQuote || 0,
          jobId: jobId,
          service: payload.service,
          customer_name: name,
          customer_phone: phone,
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
        {payload.serviceBasePrice && (
          <div className="w-full max-w-2xl mx-auto bg-white border-2 border-[#1e1e4a] rounded-lg shadow-lg">
            {/* Header */}
            <div className="bg-[#1e1e4a] text-white px-4 py-3 rounded-t-lg">
              <div className="text-lg font-bold">Price Breakdown</div>
            </div>

            {/* Price Items */}
            <div className="p-4 space-y-3">
              {/* Service Base Price */}
              <div className="flex justify-between items-center pb-3 border-b border-gray-200">
                <div className="flex-1">
                  <div className="text-base font-semibold text-[#1e1e4a]">
                    {payload.service || "Service"}
                  </div>
                  <div className="text-xs text-gray-600">
                    {payload.isTowing ? "Hook-up fee" : "On-site service fee"}
                  </div>
                </div>
                <div className="flex flex-col items-end ml-4">
                  <div className="text-lg font-bold text-[#1e1e4a]">
                    ${Math.round(payload.serviceBasePrice * 0.85).toFixed(2)}
                  </div>
                  <div className="text-xs text-gray-500 line-through">
                    ${payload.serviceBasePrice.toFixed(2)}
                  </div>
                </div>
              </div>

              {/* Travel Miles */}
              {payload.baseTravelMilesRounded != null && payload.baseTravelMilesRounded > 0 && (() => {
                const TRAVEL_RATE = 1.75;
                const travelMilesAmount = payload.baseTravelMilesRounded * TRAVEL_RATE;
                const travelMilesDiscounted = Math.round(travelMilesAmount * 0.85);
                return (
                  <div className="flex justify-between items-center pb-3 border-b border-gray-200">
                    <div className="flex-1">
                      <div className="text-base font-semibold text-[#42b3ff]">
                        Travel Miles ({payload.baseTravelMilesRounded} mi)
                      </div>
                      <div className="text-xs text-gray-600">
                        Distance from our location to pickup
                      </div>
                    </div>
                    <div className="flex flex-col items-end ml-4">
                      <div className="text-lg font-bold text-[#42b3ff]">
                        ${travelMilesDiscounted.toFixed(2)}
                      </div>
                      <div className="text-xs text-gray-500 line-through">
                        ${travelMilesAmount.toFixed(2)}
                      </div>
                    </div>
                  </div>
                );
              })()}

              {/* Tow Miles (only for towing services) */}
              {payload.isTowing && payload.distanceMilesRounded != null && payload.distanceMilesRounded > 0 && (
                <div className="flex justify-between items-center pb-3 border-b border-gray-200">
                  <div className="flex-1">
                    <div className="text-base font-semibold text-[#ffba42]">
                      Tow Miles ({payload.distanceMilesRounded} mi)
                    </div>
                    <div className="text-xs text-gray-600">
                      Distance from pickup to drop-off
                    </div>
                  </div>
                  <div className="flex flex-col items-end ml-4">
                    <div className="text-lg font-bold text-[#ffba42]">
                      ${Math.round(payload.distanceMilesRounded * 8 * 0.85).toFixed(2)}
                    </div>
                    <div className="text-xs text-gray-500 line-through">
                      ${(payload.distanceMilesRounded * 8).toFixed(2)}
                    </div>
                  </div>
                </div>
              )}

              {/* Total */}
              <div className="flex justify-between items-center pt-2">
                <div className="text-lg font-bold text-[#1e1e4a]">
                  Total
                </div>
                <div className="flex flex-col items-end">
                  <div className="text-xl font-bold text-green-600">
                    ${(() => {
                      const TRAVEL_RATE = 1.75;
                      let total = Math.round(payload.serviceBasePrice * 0.85);
                      if (payload.baseTravelMilesRounded && payload.baseTravelMilesRounded > 0) {
                        const travelMilesAmount = payload.baseTravelMilesRounded * TRAVEL_RATE;
                        total += Math.round(travelMilesAmount * 0.85);
                      }
                      if (payload.isTowing && payload.distanceMilesRounded) {
                        total += Math.round(payload.distanceMilesRounded * 8 * 0.85);
                      }
                      return total.toFixed(2);
                    })()}
                  </div>
                  <div className="text-xs text-gray-500 line-through">
                    ${(() => {
                      const TRAVEL_RATE = 1.75;
                      let originalTotal = payload.serviceBasePrice;
                      if (payload.baseTravelMilesRounded && payload.baseTravelMilesRounded > 0) {
                        originalTotal += payload.baseTravelMilesRounded * TRAVEL_RATE;
                      }
                      if (payload.isTowing && payload.distanceMilesRounded) {
                        originalTotal += payload.distanceMilesRounded * 8;
                      }
                      return originalTotal.toFixed(2);
                    })()}
                  </div>
                </div>
              </div>

              {/* Discount Notice */}
              <div className="text-xs font-semibold text-green-600 text-center pt-2 border-t border-gray-200">
                ✓ 15% online discount applied to all charges
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
              className="h-12 rounded-xl border-2 border-[#1e1e4a] bg-white px-4 text-base focus:outline-none focus:ring-4 focus:ring-[#1e1e4a]/30 focus:border-[#1e1e4a]"
              placeholder="Full name"
              autoComplete="name"
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
              className="h-12 rounded-xl border-2 border-[#1e1e4a] bg-white px-4 text-base focus:outline-none focus:ring-4 focus:ring-[#1e1e4a]/30 focus:border-[#1e1e4a]"
              placeholder="(555) 123-4567"
              autoComplete="tel"
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
            title={isCreatingJob ? "Creating job..." : "Request Now"}
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
