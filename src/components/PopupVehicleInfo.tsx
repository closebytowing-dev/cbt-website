"use client";
import { useState, useMemo, useEffect } from "react";
import { YEARS, MAKES, MODELS_BY_MAKE, COLORS } from "../data/vehicleOptions";
import { getOnlineDiscountRate } from "@/lib/pricing-client";

type Props = {
  year: string;
  setYear: (v: string) => void;
  make: string;
  setMake: (v: string) => void;
  model: string;
  setModel: (v: string) => void;
  color: string;
  setColor: (v: string) => void;
  onBack: () => void;
  onContinue: () => void;
  isTowing?: boolean;
  baseTravelMilesRounded?: number | null;
  distanceMilesRounded?: number | null;
  serviceName?: string;
  serviceBasePrice?: number;
};

export default function PopupVehicleInfo({
  year,
  setYear,
  make,
  setMake,
  model,
  setModel,
  color,
  setColor,
  onBack,
  onContinue,
  isTowing,
  baseTravelMilesRounded,
  distanceMilesRounded,
  serviceName,
  serviceBasePrice,
}: Props) {
  const [customMake, setCustomMake] = useState("");
  const [isCustomMake, setIsCustomMake] = useState(false);
  const [customModel, setCustomModel] = useState("");
  const [isCustomModel, setIsCustomModel] = useState(false);

  // --- Robust model list for selected make (case/space tolerant)
  const modelsForMake = useMemo(() => {
    const m = (make || "").trim();
    if (!m || isCustomMake) return [];
    // direct match first
    if (MODELS_BY_MAKE[m]) return MODELS_BY_MAKE[m];

    // try case-insensitive, space-insensitive
    const keyNorm = m.toLowerCase().replace(/\s+/g, "");
    for (const [k, v] of Object.entries(MODELS_BY_MAKE)) {
      const kn = k.toLowerCase().replace(/\s+/g, "");
      if (kn === keyNorm) return v;
    }
    return [];
  }, [make, isCustomMake]);

  // Reset model whenever make changes
  useEffect(() => {
    setModel("");
    setCustomModel("");
    setIsCustomModel(false);
  }, [make, setModel]);

  // Check if form is valid
  const isValid = year.trim() !== "" && make.trim() !== "" && model.trim() !== "";

  // Calculate pricing amounts
  const TRAVEL_RATE = 1.75;
  const travelMilesAmount = baseTravelMilesRounded && baseTravelMilesRounded > 0 ? baseTravelMilesRounded * TRAVEL_RATE : null;
  const travelMilesDiscounted = travelMilesAmount ? Math.round(travelMilesAmount * 0.85) : null;

  // Debug logging
  console.log('PopupVehicleInfo Debug:', {
    isTowing,
    distanceMilesRounded,
    baseTravelMilesRounded,
    serviceName,
    serviceBasePrice
  });

  return (
    <div className="w-full flex flex-col gap-3 relative">
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
          Vehicle Information
        </div>

        {/* spacer to balance layout */}
        <div className="w-[72px]" />
      </div>

      {/* Light blue background container */}
      <div className="p-4 sm:p-6 flex flex-col gap-4 transition-all duration-200 rounded-b-lg" style={{ backgroundColor: "#f0f8ff", marginBottom: '8px' }}>
        {/* Service name display */}
        {serviceName && (
          <div className="text-lg sm:text-xl font-bold text-[#1e1e4a] text-center mb-2">
            Selected service:&nbsp;<span className="font-extrabold">{serviceName}</span>
          </div>
        )}

        {/* Comprehensive Pricing Display */}
        {serviceBasePrice && (
          <div className="w-full max-w-2xl mx-auto bg-white border-2 border-[#1e1e4a] rounded-lg shadow-lg">
            {/* Header with Discount Info */}
            <div className="px-4 py-3 rounded-t-lg bg-[#1e1e4a] text-white">
              <div className="flex items-center justify-between gap-3">
                <div className="text-lg font-bold">Price Breakdown</div>
                <div className="flex items-center gap-2">
                  <span style={{ fontSize: '1.2em' }}>💰</span>
                  <span className="text-sm font-bold">
                    {Math.round(getOnlineDiscountRate() * 100)}% Online Discount Applied
                  </span>
                </div>
              </div>
              <div className="text-xs text-white/80 mt-1 text-center">
                All prices shown include your online savings
              </div>
            </div>

            {/* Price Items */}
            <div className="p-4 space-y-3">
              {/* Service Base Price */}
              <div className="flex justify-between items-center pb-3 border-b border-gray-200">
                <div className="flex-1">
                  <div className="text-base font-semibold text-[#1e1e4a]">
                    {serviceName || "Service"}
                  </div>
                  <div className="text-xs text-gray-600">
                    {isTowing ? "Hook-up fee" : "On-site service fee"}
                  </div>
                </div>
                <div className="flex flex-col items-end ml-4">
                  <div className="text-lg font-bold text-[#1e1e4a]">
                    ${Math.round(serviceBasePrice * 0.85).toFixed(2)}
                  </div>
                  <div className="text-xs text-gray-500 line-through">
                    ${serviceBasePrice.toFixed(2)}
                  </div>
                </div>
              </div>

              {/* Travel Miles */}
              {baseTravelMilesRounded != null && baseTravelMilesRounded > 0 && travelMilesAmount && (
                <div className="flex justify-between items-center pb-3 border-b border-gray-200">
                  <div className="flex-1">
                    <div className="text-base font-semibold text-[#42b3ff]">
                      Travel Miles ({baseTravelMilesRounded} mi)
                    </div>
                    <div className="text-xs text-gray-600">
                      Distance from our location to pickup
                    </div>
                  </div>
                  <div className="flex flex-col items-end ml-4">
                    <div className="text-lg font-bold text-[#42b3ff]">
                      ${travelMilesDiscounted?.toFixed(2)}
                    </div>
                    <div className="text-xs text-gray-500 line-through">
                      ${travelMilesAmount.toFixed(2)}
                    </div>
                  </div>
                </div>
              )}

              {/* Tow Miles (only for towing services) */}
              {isTowing && distanceMilesRounded != null && distanceMilesRounded > 0 && (
                <div className="flex justify-between items-center pb-3 border-b border-gray-200">
                  <div className="flex-1">
                    <div className="text-base font-semibold text-[#ffba42]">
                      Tow Miles ({distanceMilesRounded} mi)
                    </div>
                    <div className="text-xs text-gray-600">
                      Distance from pickup to drop-off
                    </div>
                  </div>
                  <div className="flex flex-col items-end ml-4">
                    <div className="text-lg font-bold text-[#ffba42]">
                      ${Math.round(distanceMilesRounded * 8 * 0.85).toFixed(2)}
                    </div>
                    <div className="text-xs text-gray-500 line-through">
                      ${(distanceMilesRounded * 8).toFixed(2)}
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
                      let total = Math.round(serviceBasePrice * 0.85);
                      if (travelMilesAmount && travelMilesDiscounted) {
                        total += travelMilesDiscounted;
                      }
                      if (isTowing && distanceMilesRounded) {
                        total += Math.round(distanceMilesRounded * 8 * 0.85);
                      }
                      return total.toFixed(2);
                    })()}
                  </div>
                  <div className="text-xs text-gray-500 line-through">
                    ${(() => {
                      let originalTotal = serviceBasePrice;
                      if (travelMilesAmount) {
                        originalTotal += travelMilesAmount;
                      }
                      if (isTowing && distanceMilesRounded) {
                        originalTotal += distanceMilesRounded * 8;
                      }
                      return originalTotal.toFixed(2);
                    })()}
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
        {/* Vehicle info fields */}
        <div className="w-full max-w-2xl mx-auto grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="flex flex-col gap-1">
            <label htmlFor="year" className="text-sm font-semibold text-[#1e1e4a]">
              Year <span className="text-xs text-red-600">*</span>
            </label>
            <select
              id="year"
              value={year}
              onChange={(e) => setYear(e.target.value)}
              className="h-12 rounded-xl border-2 border-[#1e1e4a] bg-white px-3 text-base focus:outline-none focus:ring-4 focus:ring-[#1e1e4a]/30 focus:border-[#1e1e4a]"
            >
              <option value="">Select year</option>
              {YEARS.map((y) => (
                <option key={y} value={String(y)}>{y}</option>
              ))}
            </select>
          </div>

          <div className="flex flex-col gap-1">
            <label htmlFor="make" className="text-sm font-semibold text-[#1e1e4a]">
              Make <span className="text-xs text-red-600">*</span>
            </label>
            <select
              id="make"
              value={isCustomMake ? "Other" : make}
              onChange={(e) => {
                const val = e.target.value;
                if (val === "Other") {
                  setIsCustomMake(true);
                  setMake("");
                  setCustomMake("");
                } else {
                  setIsCustomMake(false);
                  setMake(val);
                  setCustomMake("");
                }
              }}
              className="h-12 rounded-xl border-2 border-[#1e1e4a] bg-white px-3 text-base focus:outline-none focus:ring-4 focus:ring-[#1e1e4a]/30 focus:border-[#1e1e4a]"
            >
              <option value="">Select make</option>
              {MAKES.map((m) => (
                <option key={m} value={m}>{m}</option>
              ))}
              <option value="Other">Other (type your own)</option>
            </select>
          </div>

          {/* Custom Make Input - shown when "Other" is selected */}
          {isCustomMake && (
            <div className="flex flex-col gap-1 sm:col-span-2">
              <label htmlFor="customMake" className="text-sm font-semibold text-[#1e1e4a]">
                Enter your vehicle make
              </label>
              <input
                id="customMake"
                type="text"
                value={customMake}
                onChange={(e) => {
                  const val = e.target.value;
                  setCustomMake(val);
                  setMake(val);
                }}
                placeholder="e.g., Maserati, Bentley, McLaren..."
                className="h-12 rounded-xl border-2 border-[#1e1e4a] bg-white px-4 text-base focus:outline-none focus:ring-4 focus:ring-[#1e1e4a]/30 focus:border-[#1e1e4a] placeholder:text-[#1e1e4a]/40"
                autoFocus
              />
            </div>
          )}

          <div className="flex flex-col gap-1">
            <label htmlFor="model" className="text-sm font-semibold text-[#1e1e4a]">
              Model <span className="text-xs text-red-600">*</span>
            </label>
            <select
              id="model"
              value={isCustomModel ? "Other" : model}
              onChange={(e) => {
                const val = e.target.value;
                if (val === "Other") {
                  setIsCustomModel(true);
                  setModel("");
                  setCustomModel("");
                } else {
                  setIsCustomModel(false);
                  setModel(val);
                  setCustomModel("");
                }
              }}
              disabled={!make.trim()}
              className={`h-12 rounded-xl border-2 border-[#1e1e4a] bg-white px-3 text-base focus:outline-none focus:ring-4 focus:ring-[#1e1e4a]/30 focus:border-[#1e1e4a] ${!make.trim() ? "opacity-60 cursor-not-allowed" : ""}`}
            >
              <option value="">{!make.trim() ? "Select make first" : "Select model"}</option>
              {modelsForMake.map((md) => (
                <option key={md} value={md}>{md}</option>
              ))}
              <option value="Other">Other (type your own)</option>
            </select>
          </div>

          {/* Custom Model Input - shown when "Other" is selected */}
          {isCustomModel && (
            <div className="flex flex-col gap-1 sm:col-span-2">
              <label htmlFor="customModel" className="text-sm font-semibold text-[#1e1e4a]">
                Enter your vehicle model
              </label>
              <input
                id="customModel"
                type="text"
                value={customModel}
                onChange={(e) => {
                  const val = e.target.value;
                  setCustomModel(val);
                  setModel(val);
                }}
                placeholder="e.g., Granturismo, Continental GT, 720S..."
                className="h-12 rounded-xl border-2 border-[#1e1e4a] bg-white px-4 text-base focus:outline-none focus:ring-4 focus:ring-[#1e1e4a]/30 focus:border-[#1e1e4a] placeholder:text-[#1e1e4a]/40"
                autoFocus
              />
            </div>
          )}

          <div className="flex flex-col gap-1">
            <label htmlFor="color" className="text-sm font-semibold text-[#1e1e4a]">
              Color <span className="text-xs text-[#1e1e4a]/60">(optional)</span>
            </label>
            <select
              id="color"
              value={color}
              onChange={(e) => setColor(e.target.value)}
              className="h-12 rounded-xl border-2 border-[#1e1e4a] bg-white px-3 text-base focus:outline-none focus:ring-4 focus:ring-[#1e1e4a]/30 focus:border-[#1e1e4a]"
            >
              <option value="">Select color or skip</option>
              <option value="Skip">Skip</option>
              {COLORS.map((c) => (
                <option key={c} value={c}>{c}</option>
              ))}
            </select>
          </div>
        </div>

        {/* Continue button */}
        <div className="flex justify-center mt-4">
          <button
            type="button"
            onClick={onContinue}
            disabled={!isValid}
            className="relative overflow-hidden rounded-xl px-8 py-4 sm:px-12 sm:py-6 font-bold text-base sm:text-2xl shadow-lg hover:shadow-xl focus:shadow-none focus:outline-none focus:ring-0 border border-transparent bg-[#ffba42] text-white hover:bg-[#e6a739] transition disabled:opacity-50 disabled:cursor-not-allowed hover:scale-105 active:scale-95"
            style={{
              boxShadow: '0 4px 20px rgba(255, 186, 66, 0.4), 0 0 30px rgba(255, 186, 66, 0.3)',
            }}
            title={isValid ? "Continue to customer info" : "Please fill in required fields"}
          >
            {/* Animated shimmer effect */}
            <span
              className="absolute inset-0 shimmer-effect"
              style={{
                background: 'linear-gradient(90deg, transparent 0%, transparent 30%, rgba(255,255,255,0.8) 50%, transparent 70%, transparent 100%)',
                transform: 'translateX(-100%)',
              }}
            />
            <span className="relative z-10">Continue →</span>
          </button>
        </div>
      </div>
    </div>
  );
}
