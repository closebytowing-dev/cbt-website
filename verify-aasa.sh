#!/usr/bin/env bash
#
# verify-aasa.sh — confirm the CloseBy Pro Universal-Links AASA is correct + reachable.
# Run AFTER deploying the website. Checks: (1) the local file is valid JSON with the right
# appID, (2) the live URL serves it over HTTPS as JSON with no redirect, (3) Apple's CDN
# has picked it up (can lag a few minutes to ~a day after the first deploy).
#
#   bash verify-aasa.sh
#
set -uo pipefail

DOMAIN="www.closebytowing.com"   # canonical host (apex 307-redirects here; AASA must not redirect)
APPID="8URH469RUU.com.closeby.pro"
PATH_REL="/.well-known/apple-app-site-association"
LOCAL="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)/public${PATH_REL}"
LIVE="https://${DOMAIN}${PATH_REL}"
APPLE_CDN="https://app-site-association.cdn-apple.com/a/v1/${DOMAIN}"

ok()   { printf '  ✅ %s\n' "$1"; }
bad()  { printf '  ❌ %s\n' "$1"; }
warn() { printf '  ⚠️  %s\n' "$1"; }

# JSON validator: jq if present, else python3.
json_ok() { if command -v jq >/dev/null; then jq -e . >/dev/null 2>&1; else python3 -c 'import sys,json; json.load(sys.stdin)' >/dev/null 2>&1; fi; }
has_appid() {
  if command -v jq >/dev/null; then jq -e --arg a "$APPID" '(.applinks.details[]? | (.appID, .appIDs[]?)) | select(. == $a)' >/dev/null 2>&1;
  else python3 -c 'import sys,json
d=json.load(sys.stdin); a=sys.argv[1]; ids=[]
for det in d.get("applinks",{}).get("details",[]):
    if det.get("appID"): ids.append(det["appID"])
    ids+=det.get("appIDs",[])
sys.exit(0 if a in ids else 1)' "$APPID"; fi
}

echo "── 1. Local file ($LOCAL) ──"
if [ -f "$LOCAL" ]; then
  if json_ok < "$LOCAL"; then ok "valid JSON"; else bad "NOT valid JSON — fix before deploy"; fi
  if has_appid < "$LOCAL"; then ok "contains appID $APPID"; else bad "missing appID $APPID"; fi
else
  bad "not found at $LOCAL"
fi

echo "── 2. Live URL ($LIVE) ──"
CODE=$(curl -s -o /tmp/aasa_live.json -w '%{http_code}' -L "$LIVE" 2>/dev/null)
FINAL=$(curl -s -o /dev/null -w '%{url_effective}' -L "$LIVE" 2>/dev/null)
CT=$(curl -sI "$LIVE" 2>/dev/null | tr -d '\r' | awk -F': ' 'tolower($1)=="content-type"{print $2}' | head -1)
if [ "$CODE" = "200" ]; then ok "HTTP 200"; else bad "HTTP $CODE (expected 200 — is the website deployed?)"; fi
[ "$FINAL" = "$LIVE" ] && ok "no redirect" || warn "redirected to $FINAL (Apple rejects redirected AASA)"
case "$CT" in *application/json*) ok "Content-Type: $CT";; *) warn "Content-Type: ${CT:-none} (should be application/json)";; esac
if json_ok < /tmp/aasa_live.json; then ok "live body is valid JSON"; else bad "live body is not valid JSON"; fi
has_appid < /tmp/aasa_live.json && ok "live body contains appID" || bad "live body missing appID"

echo "── 3. Apple CDN ($APPLE_CDN) ──"
ACODE=$(curl -s -o /tmp/aasa_apple.json -w '%{http_code}' "$APPLE_CDN" 2>/dev/null)
if [ "$ACODE" = "200" ] && has_appid < /tmp/aasa_apple.json; then
  ok "Apple has cached the AASA with our appID — Universal Links are live"
else
  warn "Apple CDN not serving it yet (HTTP $ACODE). This can lag minutes→a day after the first deploy; re-run later. Force a device refresh by reinstalling the app."
fi

echo
echo "Entitlement to confirm in the app build: applinks:${DOMAIN} (Runner.entitlements)."
