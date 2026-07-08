// src/lib/apiSecurity.ts
//
// Pure, dependency-free security helpers for the website's API routes (P1.4 #3).
// Deliberately imports ONLY node:crypto (no Next/Firebase) so it is unit-testable
// in isolation and cannot accidentally touch production Firestore.
//
// Context: the website ships a full Firebase Admin service account, so its API
// routes bypass ALL Firestore security rules. Every privileged route must
// therefore authorize itself. These helpers centralize that logic.

import { createHash, timingSafeEqual } from 'crypto';

/** Constant-time string comparison that tolerates unequal lengths. */
export function safeEqual(a: string, b: string): boolean {
  const ab = Buffer.from(a, 'utf8');
  const bb = Buffer.from(b, 'utf8');
  if (ab.length !== bb.length) return false;
  return timingSafeEqual(ab, bb);
}

/** Opaque admin session token derived from the admin password (never the raw password). */
export function adminSessionToken(password: string): string {
  return createHash('sha256').update(`closeby-admin-session:${password}`).digest('hex');
}

/**
 * Validate the admin login password. There is NO default/fallback password: if
 * ADMIN_PASSWORD is unset this fails closed (returns false). This is what removes
 * the old `ADMIN_PASSWORD || 'admin123'` backdoor — 'admin123' is only ever
 * accepted if it is literally the configured password.
 */
export function checkAdminPassword(input: unknown, adminPassword: string | undefined): boolean {
  if (!adminPassword) return false; // never a default; fail closed
  if (typeof input !== 'string' || input.length === 0) return false;
  return safeEqual(input, adminPassword);
}

/**
 * Verify an admin session cookie against the configured admin password. Used by
 * staff-only Admin-SDK write routes (e.g. settings/visibility). Fails closed if
 * unconfigured or the cookie is missing/wrong.
 */
export function isValidAdminSession(cookieToken: unknown, adminPassword: string | undefined): boolean {
  if (!adminPassword) return false;
  if (typeof cookieToken !== 'string' || cookieToken.length === 0) return false;
  return safeEqual(cookieToken, adminSessionToken(adminPassword));
}

/**
 * A job may only be marked paid via the payment link stored ON that job. Prevents
 * an anonymous caller from marking an arbitrary job paid using a paid link that
 * belongs to a different job (payment-status forgery).
 */
export function paymentLinkMatchesJob(jobPaymentLinkId: unknown, providedLinkId: unknown): boolean {
  return (
    typeof jobPaymentLinkId === 'string' && jobPaymentLinkId.length > 0 &&
    typeof providedLinkId === 'string' && providedLinkId.length > 0 &&
    safeEqual(jobPaymentLinkId, providedLinkId)
  );
}

export type CreateJobBody = Record<string, unknown>;

/**
 * Field-whitelist for the PUBLIC customer create-job endpoint. ONLY these
 * customer-supplied content fields are ever written — the request body is never
 * spread, so money/status/privilege fields (offerAmount, networkFee, whoCollected,
 * completerId, status, paymentStatus, role, isProvider, approved, …) can never be
 * injected. Server-owned fields (source, payment placeholders, createdAt) are
 * added by the route, not here.
 */
export function buildCreateJobContent(body: CreateJobBody): Record<string, unknown> {
  const content: Record<string, unknown> = {
    customerName: body.customer_name,
    customerPhone: body.customer_phone,
    pickupLocation: body.pickup,
    dropoffLocation: body.dropoff || '',
    vehicle: body.vehicle || '',
    service: body.service || '',
  };
  if (body.amountQuoted != null) content.amountQuoted = Number(body.amountQuoted);
  if (body.jobUid) content.jobUid = body.jobUid;
  if (body.year) content.year = body.year;
  if (body.make) content.make = body.make;
  if (body.model) content.model = body.model;
  if (body.color) content.color = body.color;
  return content;
}
