"use client";

import { useState, useEffect } from "react";
import { fetchConfig } from "@/lib/pricing-client";

/**
 * Hook to get online discount rate and percentage from Firebase
 * Returns both the rate (0.15) and formatted percentage (15)
 */
export function useOnlineDiscount() {
  const [discountRate, setDiscountRate] = useState(0.15); // Default 15%
  const [discountPercentage, setDiscountPercentage] = useState(15); // Default 15

  useEffect(() => {
    async function loadDiscount() {
      try {
        console.log("🔍 [useOnlineDiscount] Fetching config from Firebase...");
        const config = await fetchConfig();
        const discountConfig = config.features?.pricing?.onlineDiscount;

        console.log("🔍 [useOnlineDiscount] discountConfig:", discountConfig);

        if (discountConfig?.enabled && typeof discountConfig.rate === 'number') {
          const rate = discountConfig.rate;
          console.log("✅ [useOnlineDiscount] Setting rate:", rate, "->", Math.round(rate * 100) + "%");
          setDiscountRate(rate);
          setDiscountPercentage(Math.round(rate * 100));
        } else {
          console.log("⚠️ [useOnlineDiscount] Using default 15%");
        }
      } catch (error) {
        console.error("❌ [useOnlineDiscount] Error fetching discount rate:", error);
        // Keep defaults if error
      }
    }

    loadDiscount();
  }, []);

  return {
    discountRate,        // 0.15
    discountPercentage,  // 15
    discountText: `${discountPercentage}%` // "15%"
  };
}
