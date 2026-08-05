/**
 * Dispatch base for travel-mile calculations.
 *
 * P1.10a: canonical address lives on price_rate_config/company.dispatchBase.address
 * (also mirrored historically as company.location.office.address / company.info.address).
 * This module keeps a hardcoded FALLBACK so the website works if Firestore is
 * unavailable or the field is missing — identical address to today's constant.
 */

export const DISPATCH_BASE_ADDRESS_FALLBACK =
  "10325 Caminito Cuervo, San Diego, CA 92108";

/**
 * Resolve dispatch base from a pricing config.company object (from fetchConfig).
 * Prefer explicit dispatchBase.address, then office/info address, then fallback.
 */
export function getDispatchBaseAddress(company?: {
  dispatchBase?: { address?: string };
  location?: { office?: { address?: string } };
  info?: { address?: string };
} | null): string {
  const explicit = company?.dispatchBase?.address?.trim();
  if (explicit) return explicit;
  const office = company?.location?.office?.address?.trim();
  if (office) return office;
  const info = company?.info?.address?.trim();
  if (info) return info;
  return DISPATCH_BASE_ADDRESS_FALLBACK;
}

/** @deprecated Prefer getDispatchBaseAddress(config.company). Kept for existing imports. */
export const DISPATCH_BASE_ADDRESS = DISPATCH_BASE_ADDRESS_FALLBACK;
