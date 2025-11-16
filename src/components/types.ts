export type LatLng = { lat: number; lng: number };
export type AddressPoint = { address: string; coords: LatLng | null };

export type VehicleInfo = {
  year: string;
  make: string;
  model: string;
  color: string;
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
};
