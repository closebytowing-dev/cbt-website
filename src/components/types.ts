export type LatLng = { lat: number; lng: number };
export type AddressPoint = { address: string; coords: LatLng | null };

export type VehicleInfo = {
  year: string;
  make: string;
  model: string;
  color: string;
};

export type BreakdownItem = { label: string; amount: number };

export type QuoteBreakdown = {
  base: number;
  milesRounded?: number;
  items: BreakdownItem[];
  timeMultiplier?: number;
  timeMultiplierLabel?: string;
};

export type AddressPayload = {
  service: string;
  isTowing: boolean;
  pickup: AddressPoint;
  dropoff?: AddressPoint;
  vehicle: VehicleInfo;
  distanceMilesRounded?: number | null;
  baseTravelMilesRounded?: number | null;
  serviceBasePrice?: number;
  estimatedQuote: number;
  priceBreakdown?: QuoteBreakdown; // Full breakdown with time multipliers
};
