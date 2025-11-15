// Global type declarations

declare namespace google.maps {
  class DistanceMatrixService {
    getDistanceMatrix(
      request: DistanceMatrixRequest,
      callback: (response: DistanceMatrixResponse | null, status: DistanceMatrixStatus) => void
    ): void;
  }

  interface DistanceMatrixRequest {
    origins: string[];
    destinations: string[];
    travelMode: TravelMode;
    unitSystem: UnitSystem;
  }

  interface DistanceMatrixResponse {
    rows: DistanceMatrixResponseRow[];
  }

  interface DistanceMatrixResponseRow {
    elements: DistanceMatrixResponseElement[];
  }

  interface DistanceMatrixResponseElement {
    status: string;
    distance: {
      text: string;
      value: number;
    };
    duration: {
      text: string;
      value: number;
    };
  }

  enum DistanceMatrixStatus {
    OK = 'OK',
    INVALID_REQUEST = 'INVALID_REQUEST',
    MAX_ELEMENTS_EXCEEDED = 'MAX_ELEMENTS_EXCEEDED',
    OVER_QUERY_LIMIT = 'OVER_QUERY_LIMIT',
    REQUEST_DENIED = 'REQUEST_DENIED',
    UNKNOWN_ERROR = 'UNKNOWN_ERROR'
  }
}
