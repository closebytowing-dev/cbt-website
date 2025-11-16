// src/hooks/useServicePricing.ts
// Custom hook for fetching dynamic pricing from Firebase for service pages

"use client";

import { useState, useEffect } from "react";
import { initializePricing, quoteWithBreakdownAsync, applyOnlineDiscount, getOnlineDiscountRate } from "@/lib/pricing-client";

export interface ServicePricing {
  standardPrice: number;
  onlinePrice: number;
  discountPercentage: number;
  loading: boolean;
  error: string | null;
}

/**
 * Hook to fetch dynamic pricing for a service
 * @param serviceName - The name of the service (must match Firebase collection)
 * @param milesRounded - Optional: For towing services, the number of miles
 * @returns ServicePricing object with standard and online prices
 */
export function useServicePricing(
  serviceName: string,
  milesRounded?: number
): ServicePricing {
  const [standardPrice, setStandardPrice] = useState<number>(0);
  const [onlinePrice, setOnlinePrice] = useState<number>(0);
  const [discountPercentage, setDiscountPercentage] = useState<number>(15);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let isMounted = true;

    async function fetchPricing() {
      try {
        setLoading(true);
        setError(null);

        // Initialize Firebase pricing (caches for future use)
        await initializePricing();

        // Fetch quote breakdown for the service
        const breakdown = await quoteWithBreakdownAsync(serviceName, milesRounded);

        if (!isMounted) return;

        // Standard price is the base price from Firebase
        const standard = breakdown.base;

        // Get discount rate from Firebase
        const discountRate = getOnlineDiscountRate();
        const discountPercent = Math.round(discountRate * 100);

        // Online price is discounted by the Firebase rate
        const online = applyOnlineDiscount(standard, discountRate);

        console.log(`📊 [useServicePricing] ${serviceName}: standard=$${standard}, discount=${discountPercent}%, online=$${online}`);

        setStandardPrice(standard);
        setOnlinePrice(online);
        setDiscountPercentage(discountPercent);
      } catch (err: any) {
        if (!isMounted) return;
        console.error(`Error fetching pricing for ${serviceName}:`, err);
        setError(err.message || "Unable to load pricing. Please call (858) 999-9293.");
      } finally {
        if (isMounted) {
          setLoading(false);
        }
      }
    }

    fetchPricing();

    return () => {
      isMounted = false;
    };
  }, [serviceName, milesRounded]);

  return {
    standardPrice,
    onlinePrice,
    discountPercentage,
    loading,
    error,
  };
}

/**
 * Simple component to display price with loading/error states
 */
export function PriceDisplay({
  price,
  loading,
  fallback = "...",
}: {
  price: number;
  loading: boolean;
  fallback?: string;
}) {
  if (loading) {
    return <span className="inline-block animate-pulse">{fallback}</span>;
  }

  return <>${price}</>;
}
