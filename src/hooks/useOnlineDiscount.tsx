"use client";

/**
 * Hook to get online discount rate and percentage
 * Returns hardcoded defaults to avoid Firebase loading on homepage
 * The actual discount is applied server-side when calculating prices
 */
export function useOnlineDiscount() {
  // Hardcoded defaults - no Firebase fetch needed
  // Server-side pricing-client handles actual discount calculation
  const discountRate = 0.15; // 15%
  const discountPercentage = 15;

  return {
    discountRate,        // 0.15
    discountPercentage,  // 15
    discountText: `${discountPercentage}%` // "15%"
  };
}
