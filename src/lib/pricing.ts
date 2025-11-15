// src/lib/pricing.ts

export type BreakdownItem = { label: string; amount: number };

export type QuoteBreakdown = {
  base: number;                     // price before discount
  milesRounded?: number;            // rounded miles for towing (if any)
  items: BreakdownItem[];           // line items that sum to "base"
};

// Base rules (NO discount here). Always return a detailed breakdown.
export function quoteWithBreakdown(
  service: string,
  milesRounded?: number
): QuoteBreakdown {
  const items: BreakdownItem[] = [];
  const isTowing = service === "Local Towing" || service === "Long-Distance Towing";

  if (isTowing) {
    // Round up incoming tow miles
    const miles = typeof milesRounded === "number" ? Math.max(0, Math.ceil(milesRounded)) : undefined;
    // Bill at least 5 miles even if unknown yet
    const billMiles = typeof miles === "number" ? Math.max(5, miles) : 5;

    // $65 hook-up + $8/mi (5 mi min)
    items.push({ label: "Hook-up", amount: 65 });
    items.push({ label: `${billMiles} mi × $8 (5 mi min)`, amount: 8 * billMiles });

    return { base: sum(items), milesRounded: miles, items };
  }

  // Roadside / other services
  switch (service) {
    case "Battery Jump Start":
      items.push({ label: "Jump start", amount: 88 }); // + travel (15% online discount = $75)
      break;
    case "Lockout Service":
      items.push({ label: "Lockout", amount: 88 }); // + travel (15% online discount = $75)
      break;
    case "Tire Change":
      items.push({ label: "Tire change", amount: 88 }); // + travel (15% online discount = $75)
      break;
    case "Fuel Delivery":
      items.push({ label: "Fuel delivery service", amount: 88 }); // + travel (15% online discount = $75)
      break;
    case "Winch-Out / Recovery":
    case "Collision Recovery":
      items.push({ label: "Recovery (port-to-port, 1 hr min.)", amount: 195 });
      break;
    case "Impound":
      // No price; UI shows disclaimer text
      return { base: 0, items: [] };
    case "Emergency Roadside Assistance":
      items.push({ label: "Roadside service", amount: 65 });
      break;
    default:
      items.push({ label: "Service", amount: 65 });
  }

  return { base: sum(items), items };
}
export function applyOnlineDiscount(amount: number, rate = 0.15): number {
  // round to whole dollars (like big brands) - 15% discount
  return Math.round(amount * (1 - rate));
}

function sum(arr: BreakdownItem[]) {
  return arr.reduce((t, i) => t + i.amount, 0);
}

// --- Travel (base -> pickup) helpers ----------------------------------------

export const TRAVEL_RATE = 1.75;

/**
 * Add travel (dispatch base -> pickup) into an existing breakdown.
 * Miles are rounded up to whole miles before pricing.
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
 * - For towing: pass pickup->dropoff miles as `towMilesRounded`
 * - For all services: pass base->pickup miles as `travelMilesRounded`
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

  // Do NOT add travel for hourly/impound services
  const NO_TRAVEL = new Set(["Winch-Out / Recovery", "Collision Recovery", "Impound"]);
  if (NO_TRAVEL.has(service)) return base;

  return addTravel(base, travelMilesRounded);
}
