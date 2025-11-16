"use client";

import { useState, useEffect } from "react";
import { getOnlineDiscountRate } from "@/lib/pricing-client";

/**
 * Hook to get online discount rate and percentage from Firebase
 * Returns both the rate (0.15) and formatted percentage (15)
 */
export function useOnlineDiscount() {
  const [discountRate, setDiscountRate] = useState(0.15); // Default 15%
  const [discountPercentage, setDiscountPercentage] = useState(15); // Default 15

  useEffect(() => {
    try {
      const rate = getOnlineDiscountRate();
      setDiscountRate(rate);
      setDiscountPercentage(Math.round(rate * 100));
    } catch (error) {
      console.error("Error fetching discount rate:", error);
      // Keep defaults if error
    }
  }, []);

  return {
    discountRate,        // 0.15
    discountPercentage,  // 15
    discountText: `${discountPercentage}%` // "15%"
  };
}
