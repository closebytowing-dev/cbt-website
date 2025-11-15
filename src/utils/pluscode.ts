export const OLC_ALPHABET = "23456789CFGHJMPQRVWX";
export const OLC_SEPARATOR = "+";
export const OLC_SEPARATOR_POSITION = 8;
export const OLC_PADDING = "0";
export const OLC_LATITUDE_MAX = 90;
export const OLC_LONGITUDE_MAX = 180;
export const OLC_PAIR_CODE_LENGTH = 10;
export const OLC_GRID_ROWS = 5;
export const OLC_GRID_COLUMNS = 4;

function clipLatitude(lat: number) {
  return Math.min(OLC_LATITUDE_MAX, Math.max(-OLC_LATITUDE_MAX, lat));
}
function normalizeLongitude(lng: number) {
  while (lng < -OLC_LONGITUDE_MAX) lng += 360;
  while (lng >= OLC_LONGITUDE_MAX) lng -= 360;
  return lng;
}
function encodePairs(lat: number, lng: number, codeLength: number) {
  let code = "";
  const adjLat = lat + OLC_LATITUDE_MAX;
  const adjLng = lng + OLC_LONGITUDE_MAX;
  let digitCount = 0;
  while (digitCount < Math.min(codeLength, 10)) {
    const latPlaceValue = Math.pow(20, Math.floor((digitCount + 2) / 2) - 1);
    const lngPlaceValue = latPlaceValue;
    const latDigit = Math.floor(adjLat / (OLC_LATITUDE_MAX * 2 / latPlaceValue)) % 20;
    const lngDigit = Math.floor(adjLng / (OLC_LONGITUDE_MAX * 2 / lngPlaceValue)) % 20;
    code += OLC_ALPHABET[lngDigit];
    code += OLC_ALPHABET[latDigit];
    digitCount += 2;
    if (digitCount === OLC_SEPARATOR_POSITION && digitCount < codeLength) code += OLC_SEPARATOR;
  }
  if (code.length < OLC_SEPARATOR_POSITION) {
    code = code.padEnd(OLC_SEPARATOR_POSITION, OLC_PADDING) + OLC_SEPARATOR;
  } else if (code.length === OLC_SEPARATOR_POSITION) {
    code += OLC_SEPARATOR;
  }
  return code;
}
function encodeGrid(lat: number, lng: number, codeLength: number) {
  let code = "";
  let adjLat = (lat + OLC_LATITUDE_MAX) % 1;
  let adjLng = (lng + OLC_LONGITUDE_MAX) % 1;
  for (let i = 0; i < codeLength - 10; i++) {
    adjLat *= OLC_GRID_ROWS;
    adjLng *= OLC_GRID_COLUMNS;
    const latDigit = Math.floor(adjLat);
    const lngDigit = Math.floor(adjLng);
    code += OLC_ALPHABET[latDigit * OLC_GRID_COLUMNS + lngDigit];
    adjLat -= latDigit;
    adjLng -= lngDigit;
  }
  return code;
}
export function encodePlusCode(lat: number, lng: number, codeLength = OLC_PAIR_CODE_LENGTH) {
  const cLat = clipLatitude(lat);
  const nLng = normalizeLongitude(lng);
  let code = encodePairs(cLat, nLng, Math.min(codeLength, 10));
  if (codeLength > 10) code += encodeGrid(cLat, nLng, codeLength);
  return code;
}
