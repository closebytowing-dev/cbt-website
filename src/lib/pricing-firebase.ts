// src/lib/pricing-firebase.ts
// Firebase-integrated pricing with fallback to hardcoded values

export type BreakdownItem = { label: string; amount: number };

export type QuoteBreakdown = {
  base: number;
  milesRounded?: number;
  items: BreakdownItem[];
};

// Pricing cache
let pricingCache: any = null;
let cacheTimestamp: number = 0;
const CACHE_DURATION = 5 * 60 * 1000; // 5 minutes

// Hardcoded fallback prices (same as original pricing.ts)
const FALLBACK_PRICES = {
  services: {
    "Battery Jump Start": { basePrice: 88, label: "Jump start", discountRate: 0.15 },
    "Lockout Service": { basePrice: 88, label: "Lockout", discountRate: 0.15 },
    "Tire Change": { basePrice: 88, label: "Tire change", discountRate: 0.15 },
    "Fuel Delivery": { basePrice: 88, label: "Fuel delivery service", discountRate: 0.15 },
    "Winch-Out / Recovery": { basePrice: 195, label: "Recovery (port-to-port, 1 hr min.)", discountRate: 0 },
    "Collision Recovery": { basePrice: 195, label: "Recovery (port-to-port, 1 hr min.)", discountRate: 0 },
    "Emergency Roadside Assistance": { basePrice: 65, label: "Roadside service", discountRate: 0.15 },
    "Impound": { basePrice: 0, label: "Impound", discountRate: 0 },
  },
  towing: {
    "Local Towing": { hookupFee: 65, perMileRate: 8, minimumMiles: 5, discountRate: 0.15 },
    "Long-Distance Towing": { hookupFee: 65, perMileRate: 8, minimumMiles: 5, discountRate: 0.15 },
  },
  rates: {
    travelRate: 1.75,
    onlineDiscountRate: 0.15,
  }
};

/**
 * Fetch pricing from Firebase API with caching
 */
async function fetchPricing(): Promise<any> {
  const now = Date.now();

  // Return cache if still valid
  if (pricingCache && (now - cacheTimestamp) < CACHE_DURATION) {
    return pricingCache;
  }

  try {
    const response = await fetch('/api/get-prices', {
      method: 'GET',
      headers: { 'Content-Type': 'application/json' },
      cache: 'no-store'
    });

    if (!response.ok) {
      console.error('Failed to fetch prices from Firebase, using fallback');
      return FALLBACK_PRICES;
    }

    const data = await response.json();

    if (data.success && data.prices) {
      pricingCache = data.prices;
      cacheTimestamp = now;
      return pricingCache;
    }

    return FALLBACK_PRICES;
  } catch (error) {
    console.error('Error fetching pricing from Firebase:', error);
    return FALLBACK_PRICES;
  }
}

/**
 * Get pricing synchronously (for backwards compatibility)
 * This uses cached pricing or fallback
 */
function getPricingSync(): any {
  return pricingCache || FALLBACK_PRICES;
}

/**
 * Base quote with breakdown (async version that fetches from Firebase)
 */
export async function quoteWithBreakdownAsync(
  service: string,
  milesRounded?: number
): Promise<QuoteBreakdown> {
  const pricing = await fetchPricing();
  return quoteWithBreakdownFromData(pricing, service, milesRounded);
}

/**
 * Base quote with breakdown (sync version using cache/fallback)
 */
export function quoteWithBreakdown(
  service: string,
  milesRounded?: number
): QuoteBreakdown {
  const pricing = getPricingSync();
  return quoteWithBreakdownFromData(pricing, service, milesRounded);
}

/**
 * Internal function to calculate quote from pricing data
 */
function quoteWithBreakdownFromData(
  pricing: any,
  service: string,
  milesRounded?: number
): QuoteBreakdown {
  const items: BreakdownItem[] = [];
  const isTowing = service === "Local Towing" || service === "Long-Distance Towing";

  if (isTowing) {
    const towingData = pricing.towing?.[service] || FALLBACK_PRICES.towing[service as keyof typeof FALLBACK_PRICES.towing];
    const miles = typeof milesRounded === "number" ? Math.max(0, Math.ceil(milesRounded)) : undefined;
    const billMiles = typeof miles === "number" ? Math.max(towingData.minimumMiles, miles) : towingData.minimumMiles;

    items.push({ label: "Hook-up", amount: towingData.hookupFee });
    items.push({
      label: `${billMiles} mi × $${towingData.perMileRate} (${towingData.minimumMiles} mi min)`,
      amount: towingData.perMileRate * billMiles
    });

    return { base: sum(items), milesRounded: miles, items };
  }

  // Roadside / other services
  const serviceData = pricing.services?.[service] || FALLBACK_PRICES.services[service as keyof typeof FALLBACK_PRICES.services];

  if (!serviceData) {
    items.push({ label: "Service", amount: 65 });
    return { base: sum(items), items };
  }

  if (service === "Impound") {
    return { base: 0, items: [] };
  }

  items.push({ label: serviceData.label, amount: serviceData.basePrice });
  return { base: sum(items), items };
}

export function applyOnlineDiscount(amount: number, rate = 0.15): number {
  return Math.round(amount * (1 - rate));
}

function sum(arr: BreakdownItem[]) {
  return arr.reduce((t, i) => t + i.amount, 0);
}

// --- Travel (base -> pickup) helpers ----------------------------------------

export const TRAVEL_RATE = 1.75;

/**
 * Add travel (dispatch base -> pickup) into an existing breakdown.
 */
export function addTravel(
  breakdown: QuoteBreakdown,
  travelMilesRounded?: number | null
): QuoteBreakdown {
  const miles =
    typeof travelMilesRounded === "number" && isFinite(travelMilesRounded)
      ? Math.max(0, Math.ceil(travelMilesRounded))
      : 0;

  if (miles <= 0) return breakdown;

  const travelItem: BreakdownItem = {
    label: `${miles} mi travel × $${TRAVEL_RATE.toFixed(2)}`,
    amount: miles * TRAVEL_RATE,
  };

  return {
    ...breakdown,
    base: breakdown.base + travelItem.amount,
    items: [...breakdown.items, travelItem],
  };
}

/**
 * Convenience: compute a total including travel in one call.
 */
export function quoteWithTravel(
  service: string,
  towMilesRounded?: number | null,
  travelMilesRounded?: number | null
): QuoteBreakdown {
  const base = quoteWithBreakdown(
    service,
    typeof towMilesRounded === "number" ? towMilesRounded : undefined
  );

  const NO_TRAVEL = new Set(["Winch-Out / Recovery", "Collision Recovery", "Impound"]);
  if (NO_TRAVEL.has(service)) return base;

  return addTravel(base, travelMilesRounded);
}

/**
 * Async version of quoteWithTravel
 */
export async function quoteWithTravelAsync(
  service: string,
  towMilesRounded?: number | null,
  travelMilesRounded?: number | null
): Promise<QuoteBreakdown> {
  const base = await quoteWithBreakdownAsync(
    service,
    typeof towMilesRounded === "number" ? towMilesRounded : undefined
  );

  const NO_TRAVEL = new Set(["Winch-Out / Recovery", "Collision Recovery", "Impound"]);
  if (NO_TRAVEL.has(service)) return base;

  return addTravel(base, travelMilesRounded);
}

/**
 * Pre-fetch pricing data (call this on app initialization or page load)
 */
export async function initializePricing(): Promise<void> {
  await fetchPricing();
}
