// src/lib/pricing-client.ts
// Pricing client using services/ collection structure (dispatcher panel compatible)

import { db } from "./firebase";
import { collection, getDocs, doc, getDoc } from "firebase/firestore";

export type BreakdownItem = { label: string; amount: number };

export type QuoteBreakdown = {
  base: number;
  milesRounded?: number;
  items: BreakdownItem[];
  timeMultiplier?: number;
  timeMultiplierLabel?: string;
};

// In-memory cache
let servicesCache: any = null;
let configCache: any = null;
let cacheTimestamp: number = 0;
const CACHE_DURATION = 1 * 1000; // 1 second (reduced to prevent stale data on reorders)

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
 * Fetch all services from services/ collection with retry logic for App Check
 */
async function fetchServices(retryCount = 0): Promise<any> {
  try {
    const servicesSnapshot = await getDocs(collection(db, "services"));
    const services: Record<string, any> = {};

    servicesSnapshot.forEach(doc => {
      const serviceName = doc.data().name;
      // Store with original case for display
      services[serviceName] = {
        id: doc.id,
        ...doc.data()
      };
      // Also store with lowercase key for case-insensitive lookup
      services[serviceName.toLowerCase()] = {
        id: doc.id,
        ...doc.data()
      };
    });

    return services;
  } catch (error: any) {
    // If permission denied and we haven't retried yet, wait and retry
    // This handles App Check initialization delay
    if (error.code === 'permission-denied' && retryCount < 3) {
      console.log(`App Check may be initializing, retrying... (attempt ${retryCount + 1}/3)`);
      await new Promise(resolve => setTimeout(resolve, 1000 * (retryCount + 1))); // Exponential backoff
      return fetchServices(retryCount + 1);
    }
    throw error;
  }
}

/**
 * Fetch a Firestore document with retry logic for App Check
 */
async function fetchDocWithRetry(docRef: any, retryCount = 0): Promise<any> {
  try {
    return await getDoc(docRef);
  } catch (error: any) {
    if (error.code === 'permission-denied' && retryCount < 3) {
      console.log(`App Check may be initializing for doc, retrying... (attempt ${retryCount + 1}/3)`);
      await new Promise(resolve => setTimeout(resolve, 1000 * (retryCount + 1)));
      return fetchDocWithRetry(docRef, retryCount + 1);
    }
    throw error;
  }
}

/**
 * Fetch configuration from Firebase
 */
export async function fetchConfig(): Promise<any> {
  const now = Date.now();

  // Return cache if still valid
  if (servicesCache && configCache && (now - cacheTimestamp) < CACHE_DURATION) {
    console.log("✅ Returning cached config (age:", Math.round((now - cacheTimestamp) / 1000), "seconds)");
    return { services: servicesCache, ...configCache };
  }

  console.log("📡 Fetching pricing config from Firebase...");

  try {
    // Fetch services and config documents in parallel with retry logic
    const [services, timeMultipliersDoc, featuresDoc, companyDoc] = await Promise.all([
      fetchServices(),
      fetchDocWithRetry(doc(db, "Price & Rate config", "time_multipliers")),
      fetchDocWithRetry(doc(db, "Price & Rate config", "features")),
      fetchDocWithRetry(doc(db, "Price & Rate config", "company"))
    ]);

    if (Object.keys(services).length === 0) {
      throw new Error(`No services found in Firebase. Please contact us at ${FALLBACK_PHONE}.`);
    }

    console.log("✅ Fetched", Object.keys(services).length, "services from Firebase");

    // Build config object
    const config = {
      services,
      timeMultipliers: timeMultipliersDoc.exists() ? timeMultipliersDoc.data() : null,
      features: featuresDoc.exists() ? featuresDoc.data() : null,
      company: companyDoc.exists() ? companyDoc.data() : null
    };

    // Cache the results
    servicesCache = services;
    configCache = {
      timeMultipliers: config.timeMultipliers,
      features: config.features,
      company: config.company
    };
    cacheTimestamp = now;

    console.log("✅ Config cached successfully");

    return config;

  } catch (error) {
    console.error("❌ Error fetching config from Firebase:", error);
    // Clear cache on error
    servicesCache = null;
    configCache = null;
    cacheTimestamp = 0;
    throw new Error(`Unable to load pricing. Please contact us at ${FALLBACK_PHONE} for pricing.`);
  }
}

/**
 * Get config synchronously (returns cache or throws error)
 */
export function getConfigSync(): any {
  if (!servicesCache || !configCache) {
    console.error("❌ PRICING ERROR: Config not loaded yet!");
    console.error("  servicesCache:", servicesCache);
    console.error("  configCache:", configCache);
    console.error("  cacheTimestamp:", cacheTimestamp);
    throw new Error(`Config not loaded. Please contact us at ${FALLBACK_PHONE} for pricing.`);
  }
  console.log("✅ Config loaded successfully from cache");
  return { services: servicesCache, ...configCache };
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
 * Calculate quote from services/ collection data
 */
function quoteWithBreakdownFromConfig(
  config: any,
  serviceName: string,
  milesRounded?: number
): QuoteBreakdown {
  const items: BreakdownItem[] = [];

  // Get service from services cache (case-insensitive)
  let serviceData = config.services[serviceName];

  // If exact match fails, try lowercase
  if (!serviceData) {
    serviceData = config.services[serviceName.toLowerCase()];
  }

  if (!serviceData) {
    throw new Error(`Pricing not available for ${serviceName}. Please contact us at ${FALLBACK_PHONE}.`);
  }

  // Handle towing services
  if (serviceData.type === 'towing') {
    const miles = typeof milesRounded === "number" ? Math.max(0, Math.ceil(milesRounded)) : undefined;
    const billMiles = typeof miles === "number" ? miles : 0;

    items.push({ label: "Hook-up", amount: serviceData.hookupFee });
    if (billMiles > 0) {
      items.push({
        label: `${billMiles} mi × $${serviceData.perMileRate}`,
        amount: serviceData.perMileRate * billMiles
      });
    }

    const total = sum(items);

    return { base: total, milesRounded: miles, items };
  }

  // Handle recovery services (hourly)
  if (serviceData.calcType === 'RECOVERY') {
    items.push({ label: serviceData.label, amount: serviceData.basePrice });
    return { base: sum(items), items };
  }

  // Handle impound (custom pricing)
  if (serviceData.calcType === 'CUSTOM' || serviceName === "Impound") {
    return { base: 0, items: [] };
  }

  // Handle regular onsite services
  items.push({ label: serviceData.label, amount: serviceData.basePrice });
  return { base: sum(items), items };
}

/**
 * Apply time multiplier to breakdown if applicable
 */
function applyTimeMultiplier(
  breakdown: QuoteBreakdown,
  config: any,
  serviceName: string
): QuoteBreakdown {
  const timeMultiplierData = getCurrentTimeMultiplier(config);

  if (!timeMultiplierData || timeMultiplierData.multiplier === 1.0) {
    return breakdown;
  }

  // Check if service is eligible for after-hours pricing
  const serviceData = config.services[serviceName];
  const afterHoursEligible = serviceData?.afterHoursEligible || false;

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
  serviceName: string,
  milesRounded?: number
): Promise<QuoteBreakdown> {
  const config = await fetchConfig();
  let breakdown = quoteWithBreakdownFromConfig(config, serviceName, milesRounded);
  breakdown = applyTimeMultiplier(breakdown, config, serviceName);
  return breakdown;
}

/**
 * Quote with breakdown (sync - uses cache)
 */
export function quoteWithBreakdown(
  serviceName: string,
  milesRounded?: number
): QuoteBreakdown {
  const config = getConfigSync();
  let breakdown = quoteWithBreakdownFromConfig(config, serviceName, milesRounded);
  breakdown = applyTimeMultiplier(breakdown, config, serviceName);
  return breakdown;
}

/**
 * Get online discount rate from Firebase config
 */
export function getOnlineDiscountRate(): number {
  try {
    const config = getConfigSync();
    const discountConfig = config.features?.pricing?.onlineDiscount;

    console.log("🔍 [getOnlineDiscountRate] discountConfig:", discountConfig);

    if (discountConfig?.enabled && typeof discountConfig.rate === 'number') {
      console.log("✅ [getOnlineDiscountRate] Returning rate:", discountConfig.rate);
      return discountConfig.rate;
    }

    // Fallback to 15% if not configured
    console.log("⚠️ [getOnlineDiscountRate] Using fallback 0.15");
    return 0.15;
  } catch (error) {
    // Fallback to 15% if config not loaded
    console.error("❌ [getOnlineDiscountRate] Config not loaded, using fallback:", error);
    return 0.15;
  }
}

/**
 * Apply online discount using rate from Firebase
 */
export function applyOnlineDiscount(amount: number, rate?: number): number {
  const discountRate = rate !== undefined ? rate : getOnlineDiscountRate();
  return Math.round(amount * (1 - discountRate));
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

  // Get travel rate from Travel Miles service
  const travelService = config.services["Travel Miles"];
  const travelRate = travelService?.ratePerMile || TRAVEL_RATE;

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
  serviceName: string,
  towMilesRounded?: number | null,
  travelMilesRounded?: number | null
): QuoteBreakdown {
  const base = quoteWithBreakdown(
    serviceName,
    typeof towMilesRounded === "number" ? towMilesRounded : undefined
  );

  const NO_TRAVEL = new Set(["Winch-Out / Recovery", "Collision Recovery", "Impound"]);
  if (NO_TRAVEL.has(serviceName)) return base;

  return addTravel(base, travelMilesRounded);
}

/**
 * Quote with travel (async version)
 */
export async function quoteWithTravelAsync(
  serviceName: string,
  towMilesRounded?: number | null,
  travelMilesRounded?: number | null
): Promise<QuoteBreakdown> {
  const base = await quoteWithBreakdownAsync(
    serviceName,
    typeof towMilesRounded === "number" ? towMilesRounded : undefined
  );

  const NO_TRAVEL = new Set(["Winch-Out / Recovery", "Collision Recovery", "Impound"]);
  if (NO_TRAVEL.has(serviceName)) return base;

  return addTravel(base, travelMilesRounded);
}

/**
 * Initialize config on app load (pre-fetch and cache)
 */
export async function initializePricing(): Promise<void> {
  await fetchConfig();
}
