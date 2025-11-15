// src/lib/pricing-client.ts
// Next-generation pricing client with Firebase integration, time multipliers, and feature flags

import { db } from "./firebase";
import { collection, doc, getDoc } from "firebase/firestore";

export type BreakdownItem = { label: string; amount: number };

export type QuoteBreakdown = {
  base: number;
  milesRounded?: number;
  items: BreakdownItem[];
  timeMultiplier?: number;
  timeMultiplierLabel?: string;
};

// In-memory cache
let configCache: any = null;
let cacheTimestamp: number = 0;
const CACHE_DURATION = 5 * 60 * 1000; // 5 minutes

// Default fallback phone number
const FALLBACK_PHONE = "(858) 999-9293";

/**
 * Get company phone number from config or fallback
 */
export function getCompanyPhone(): string {
  try {
    return configCache?.company?.info?.phone || FALLBACK_PHONE;
  } catch {
    return FALLBACK_PHONE;
  }
}

/**
 * Fetch all configuration from Firestore "Price & Rate config" collection
 */
export async function fetchConfig(): Promise<any> {
  const now = Date.now();

  // Return cache if still valid
  if (configCache && (now - cacheTimestamp) < CACHE_DURATION) {
    return configCache;
  }

  try {
    // Fetch all config documents
    const [pricingDoc, timeMultipliersDoc, featuresDoc, serviceCatalogDoc, companyDoc] = await Promise.all([
      getDoc(doc(db, "Price & Rate config", "pricing")),
      getDoc(doc(db, "Price & Rate config", "time_multipliers")),
      getDoc(doc(db, "Price & Rate config", "features")),
      getDoc(doc(db, "Price & Rate config", "service_catalog")),
      getDoc(doc(db, "Price & Rate config", "company"))
    ]);

    if (!pricingDoc.exists()) {
      throw new Error(`Config pricing not found in Firebase. Please contact us at ${FALLBACK_PHONE}.`);
    }

    // Build config object
    const config = {
      pricing: pricingDoc.data(),
      timeMultipliers: timeMultipliersDoc.exists() ? timeMultipliersDoc.data() : null,
      features: featuresDoc.exists() ? featuresDoc.data() : null,
      serviceCatalog: serviceCatalogDoc.exists() ? serviceCatalogDoc.data() : null,
      company: companyDoc.exists() ? companyDoc.data() : null
    };

    // Cache the result
    configCache = config;
    cacheTimestamp = now;

    return config;

  } catch (error) {
    console.error("Error fetching config from Firebase:", error);
    // Clear cache on error
    configCache = null;
    cacheTimestamp = 0;
    throw new Error(`Unable to load pricing. Please contact us at ${FALLBACK_PHONE} for pricing.`);
  }
}

/**
 * Get config synchronously (returns cache or throws error)
 */
export function getConfigSync(): any {
  if (!configCache) {
    throw new Error(`Config not loaded. Please contact us at ${FALLBACK_PHONE} for pricing.`);
  }
  return configCache;
}

/**
 * Get current time multiplier based on time of day
 */
function getCurrentTimeMultiplier(config: any): { multiplier: number; label: string } | null {
  // Check if time multipliers are enabled
  if (!config.features?.pricing?.afterHoursPricing?.enabled) {
    return null;
  }

  if (!config.timeMultipliers?.enabled || !config.timeMultipliers?.periods) {
    return null;
  }

  const now = new Date();
  const timeZone = config.timeMultipliers.timezone || 'America/Los_Angeles';

  // Get current time in service timezone
  const currentTime = now.toLocaleTimeString('en-US', {
    timeZone,
    hour12: false,
    hour: '2-digit',
    minute: '2-digit'
  });

  const currentDay = now.getDay(); // 0 = Sunday, 6 = Saturday

  // Find matching period
  for (const period of config.timeMultipliers.periods) {
    if (!period.active) continue;
    if (!period.daysOfWeek.includes(currentDay)) continue;

    // Handle time periods that cross midnight
    if (period.startTime > period.endTime) {
      // e.g., 23:00 to 07:00
      if (currentTime >= period.startTime || currentTime < period.endTime) {
        return {
          multiplier: period.multiplier,
          label: period.badge || period.name
        };
      }
    } else {
      // Normal period within same day
      if (currentTime >= period.startTime && currentTime < period.endTime) {
        return {
          multiplier: period.multiplier,
          label: period.badge || period.name
        };
      }
    }
  }

  // Default to 1.0 if no period matches
  return { multiplier: 1.0, label: 'Standard' };
}

/**
 * Calculate quote from config data
 */
function quoteWithBreakdownFromConfig(
  config: any,
  service: string,
  milesRounded?: number
): QuoteBreakdown {
  const items: BreakdownItem[] = [];
  const isTowing = service === "Local Towing" || service === "Long-Distance Towing";

  if (isTowing) {
    const towingData = config.pricing.towing?.[service];
    if (!towingData) {
      throw new Error(`Pricing not available for ${service}. Please contact us at ${FALLBACK_PHONE}.`);
    }
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
  const serviceData = config.pricing.services?.[service];

  if (!serviceData) {
    throw new Error(`Pricing not available for ${service}. Please contact us at ${FALLBACK_PHONE}.`);
  }

  if (service === "Impound") {
    return { base: 0, items: [] };
  }

  items.push({ label: serviceData.label, amount: serviceData.basePrice });
  return { base: sum(items), items };
}

/**
 * Apply time multiplier to breakdown if applicable
 */
function applyTimeMultiplier(
  breakdown: QuoteBreakdown,
  config: any,
  service: string
): QuoteBreakdown {
  const timeMultiplierData = getCurrentTimeMultiplier(config);

  if (!timeMultiplierData || timeMultiplierData.multiplier === 1.0) {
    return breakdown;
  }

  // Check if service is eligible for after-hours pricing
  const isTowing = service === "Local Towing" || service === "Long-Distance Towing";
  let afterHoursEligible = false;

  if (isTowing) {
    afterHoursEligible = config.pricing.towing?.[service]?.afterHoursEligible || false;
  } else {
    afterHoursEligible = config.pricing.services?.[service]?.afterHoursEligible || false;
  }

  if (!afterHoursEligible) {
    return breakdown;
  }

  // Apply multiplier to all items
  const multipliedItems = breakdown.items.map(item => ({
    ...item,
    amount: item.amount * timeMultiplierData.multiplier
  }));

  // Add multiplier indicator
  multipliedItems.push({
    label: `After-hours (${timeMultiplierData.label})`,
    amount: 0 // Already applied to items above
  });

  return {
    ...breakdown,
    base: breakdown.base * timeMultiplierData.multiplier,
    items: multipliedItems,
    timeMultiplier: timeMultiplierData.multiplier,
    timeMultiplierLabel: timeMultiplierData.label
  };
}

/**
 * Quote with breakdown (async - fetches from Firebase)
 */
export async function quoteWithBreakdownAsync(
  service: string,
  milesRounded?: number
): Promise<QuoteBreakdown> {
  const config = await fetchConfig();
  let breakdown = quoteWithBreakdownFromConfig(config, service, milesRounded);
  breakdown = applyTimeMultiplier(breakdown, config, service);
  return breakdown;
}

/**
 * Quote with breakdown (sync - uses cache)
 */
export function quoteWithBreakdown(
  service: string,
  milesRounded?: number
): QuoteBreakdown {
  const config = getConfigSync();
  let breakdown = quoteWithBreakdownFromConfig(config, service, milesRounded);
  breakdown = applyTimeMultiplier(breakdown, config, service);
  return breakdown;
}

/**
 * Apply online discount (15% by default)
 */
export function applyOnlineDiscount(amount: number, rate = 0.15): number {
  return Math.round(amount * (1 - rate));
}

function sum(arr: BreakdownItem[]) {
  return arr.reduce((t, i) => t + i.amount, 0);
}

// --- Travel (base -> pickup) helpers ----------------------------------------

export const TRAVEL_RATE = 1.75;

/**
 * Add travel charges to breakdown
 */
export function addTravel(
  breakdown: QuoteBreakdown,
  travelMilesRounded?: number | null
): QuoteBreakdown {
  const config = getConfigSync();
  const travelRate = config?.pricing?.base?.travelRate || TRAVEL_RATE;

  const miles =
    typeof travelMilesRounded === "number" && isFinite(travelMilesRounded)
      ? Math.max(0, Math.ceil(travelMilesRounded))
      : 0;

  if (miles <= 0) return breakdown;

  const travelItem: BreakdownItem = {
    label: `${miles} mi travel × $${travelRate.toFixed(2)}`,
    amount: miles * travelRate,
  };

  return {
    ...breakdown,
    base: breakdown.base + travelItem.amount,
    items: [...breakdown.items, travelItem],
  };
}

/**
 * Quote with travel (sync version)
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
 * Quote with travel (async version)
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
 * Initialize config on app load (pre-fetch and cache)
 */
export async function initializePricing(): Promise<void> {
  await fetchConfig();
}
