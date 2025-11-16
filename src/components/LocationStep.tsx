"use client";
import { RefObject, useEffect, useMemo, useState } from "react";
import { YEARS, MAKES, MODELS_BY_MAKE, COLORS } from "../data/vehicleOptions";
import { getOnlineDiscountRate } from "@/lib/pricing-client";

type Props = {
  isTowing: boolean;
  choice: string;
  address: string;
  onAddressChange: (v: string) => void;
  pickupConfirmed: boolean;
  confirmPickupIfManual: () => void;
  resetPickup: () => void;
  dropoff: string;
  setDropoff: (v: string) => void;
  dropoffConfirmed: boolean;
  confirmDropoffIfManual: () => void;
  resetDropoff: () => void;
  distanceMilesRounded: number | null;
  baseTravelMilesRounded: number | null;
  inputRefPickup: RefObject<HTMLInputElement | null>;
  inputRefDropoff: RefObject<HTMLInputElement | null>;
  initAutocompleteFor: (which: "pickup" | "dropoff") => void;
  isLocating: boolean;
  shareCurrentLocation: () => void;
  dropPinPlusCode: () => void;
  geoError: string | null;
  pricingError: string | null;
  year: string; setYear: (v: string) => void;
  make: string; setMake: (v: string) => void;
  model: string; setModel: (v: string) => void;
  color: string; setColor: (v: string) => void;
  travelMilesAmount?: number | null;
  serviceBasePrice?: number | null;
};

export default function LocationStep(props: Props) {
  const {
    isTowing, choice,
    address, onAddressChange, pickupConfirmed, confirmPickupIfManual, resetPickup,
    dropoff, setDropoff, dropoffConfirmed, confirmDropoffIfManual, resetDropoff,
    distanceMilesRounded,
    baseTravelMilesRounded,
    inputRefPickup, inputRefDropoff, initAutocompleteFor,
    isLocating, shareCurrentLocation, dropPinPlusCode,
    geoError,
    pricingError,
    year, setYear, make, setMake, model, setModel, color, setColor,
    travelMilesAmount,
    serviceBasePrice,
  } = props;

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

  return (
    <div className="p-4 sm:p-6 flex flex-col items-center justify-start gap-4 transition-all duration-200 rounded-b-lg" style={{ backgroundColor: "#f0f8ff", marginBottom: '8px' }}>
      {/* Comprehensive Pricing Display */}
      {serviceBasePrice !== null && serviceBasePrice > 0 && (
        <div className="w-full max-w-2xl bg-white border-2 border-[#42b3ff] rounded-lg shadow-lg">
          {/* Header with Discount Info */}
          <div className="px-4 py-3 rounded-t-lg bg-[#42b3ff] text-white">
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
                  {choice}
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

            {/* Travel Miles (only if pickup confirmed) */}
            {pickupConfirmed && baseTravelMilesRounded !== null && baseTravelMilesRounded >= 0 && travelMilesAmount !== null && (
              <div className="flex justify-between items-center pb-3 border-b border-gray-200">
                <div className="flex-1">
                  <div className="text-base font-semibold text-[#42b3ff]">
                    {baseTravelMilesRounded} mi travel × $1.75
                  </div>
                  <div className="text-xs text-gray-600">
                    Distance from our location to pickup
                  </div>
                </div>
                <div className="flex flex-col items-end ml-4">
                  <div className="text-lg font-bold text-[#42b3ff]">
                    ${Math.round(travelMilesAmount * 0.85).toFixed(2)}
                  </div>
                  <div className="text-xs text-gray-500 line-through">
                    ${travelMilesAmount.toFixed(2)}
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
                    if (pickupConfirmed && travelMilesAmount !== null) {
                      total += Math.round(travelMilesAmount * 0.85);
                    }
                    return total.toFixed(2);
                  })()}
                </div>
                <div className="text-xs text-gray-500 line-through">
                  ${(() => {
                    let originalTotal = serviceBasePrice;
                    if (pickupConfirmed && travelMilesAmount !== null) {
                      originalTotal += travelMilesAmount;
                    }
                    return originalTotal.toFixed(2);
                  })()}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* PICKUP / VEHICLE LOCATION */}
      <div className="w-full max-w-2xl">
        {!pickupConfirmed ? (
          <>
            {/* Small, left-aligned label (matches drop-off style) */}
            <div className="mb-2 text-base font-semibold text-[#1e1e4a]">
              {isTowing ? "What is pick up location" : "What is your vehicle location"}
            </div>

            <input
              id="pickupAddress"
              ref={inputRefPickup}
              value={address}
              onChange={(e) => onAddressChange(e.target.value)}
              onFocus={() => initAutocompleteFor("pickup")}
              onKeyDown={(e) => e.key === "Enter" && confirmPickupIfManual()}
              type="text"
              placeholder={isTowing ? "Enter pickup address (street, city, ZIP)…" : "Enter vehicle location (street, city, ZIP)…"}
              className="w-full h-16 rounded-2xl border-2 border-[#1e1e4a] bg-white px-6 text-xl focus:outline-none focus:ring-4 focus:ring-[#1e1e4a]/30 focus:border-[#1e1e4a] placeholder:text-[#1e1e4a]/40"
              autoComplete="off"
            />

            {/* Share location and Drop Pin buttons hidden for v1 - will be fixed in v2 */}
            {/*
            <div className="mt-3 grid grid-cols-2 gap-3">
              <button ... Share my current location ... />
              <button ... Drop A Pin on Google Maps ... />
            </div>
            */}

            {geoError && (
              <div className="mt-2 text-sm text-red-700">{geoError}</div>
            )}

            {pricingError && (
              <div className="mt-3 p-3 rounded-lg bg-red-50 border border-red-200">
                <div className="text-sm font-semibold text-red-800 mb-1">Pricing Error</div>
                <div className="text-sm text-red-700">{pricingError}</div>
              </div>
            )}
          </>
        ) : (
          <>
            <div className="rounded-2xl border-2 border-[#1e1e4a] bg-white px-6 py-4">
              <div className="text-sm font-semibold text-[#1e1e4a]/70 mb-1">Location</div>
              <div className="text-lg font-bold text-[#1e1e4a] break-words">{address}</div>
              <div className="mt-3">
                <button type="button" onClick={resetPickup} className="text-sm font-semibold underline underline-offset-2 text-[#1e1e4a]/80 hover:text-[#1e1e4a]">
                  Edit location
                </button>
              </div>
            </div>
          </>
        )}
      </div>

      {/* DROPOFF SECTION (towing only) - Only show after pickup is confirmed */}
      {isTowing && pickupConfirmed && (
        <div className="w-full max-w-2xl">
          {!dropoffConfirmed ? (
            <>
              <div className="mb-2 text-base font-semibold text-[#1e1e4a]">What is drop-off location</div>
              <input
                id="dropoffAddress"
                ref={inputRefDropoff}
                value={dropoff}
                onChange={(e) => setDropoff(e.target.value)}
                onFocus={() => initAutocompleteFor("dropoff")}
                onKeyDown={(e) => e.key === "Enter" && confirmDropoffIfManual()}
                type="text"
                placeholder="Enter drop-off address (street, city, ZIP)…"
                className="w-full h-16 rounded-2xl border-2 border-[#1e1e4a] bg-white px-6 text-xl focus:outline-none focus:ring-4 focus:ring-[#1e1e4a]/30 focus:border-[#1e1e4a] placeholder:text-[#1e1e4a]/40"
                autoComplete="off"
              />
              <div className="mt-3">
                <button
                  type="button"
                  onClick={confirmDropoffIfManual}
                  className="rounded-xl px-5 py-3 font-semibold shadow-md border border-[#1e1e4a]/30 bg-white hover:bg-[#ffba42]/20 transition"
                >
                  Confirm drop-off
                </button>
              </div>
            </>
          ) : (
            <>
              <div className="rounded-2xl border-2 border-[#1e1e4a] bg-white px-6 py-4">
                <div className="text-sm font-semibold text-[#1e1e4a]/70 mb-1">Drop-off</div>
                <div className="text-lg font-bold text-[#1e1e4a] break-words">{dropoff}</div>
                <div className="mt-3">
                  <button type="button" onClick={resetDropoff} className="text-sm font-semibold underline underline-offset-2 text-[#1e1e4a]/80 hover:text-[#1e1e4a]">
                    Edit drop-off
                  </button>
                </div>
              </div>
            </>
          )}
        </div>
      )}
    </div>
  );
}
