// src/app/api/verify-payment/route.ts
export const runtime = "nodejs";

import { adminDb } from "@/lib/firebaseAdmin";
import { FieldValue } from "firebase-admin/firestore";
import { paymentLinkMatchesJob } from "@/lib/apiSecurity";

// P1.4 #3 Phase 2 — the narrow Cloud Function that confirms payment via Square.
const VERIFY_CUSTOMER_PAYMENT_URL =
  process.env.VERIFY_CUSTOMER_PAYMENT_URL ||
  "https://us-central1-closebydriverapp1.cloudfunctions.net/verifyCustomerPayment";

export async function POST(req: Request) {
  try {
    const body = await req.json().catch(() => ({}));
    const { jobId, paymentLinkId } = body;

    // Validate required parameters
    if (!jobId || !paymentLinkId) {
      return new Response(
        JSON.stringify({ error: "Missing required parameters: jobId and paymentLinkId" }),
        {
          status: 400,
          headers: { "content-type": "application/json" },
        }
      );
    }

    // ── NEW PATH (flag-gated) ────────────────────────────────────────────────
    // When USE_VERIFY_PAYMENT_FN=true, verify via verifyCustomerPayment (Square-
    // confirmed, no Admin SDK / Square token here). The function returns the same
    // { job, ... } shape; forward its response verbatim. Revertable by clearing the flag.
    if (process.env.USE_VERIFY_PAYMENT_FN === "true") {
      const secret = process.env.INTAKE_SECRET || "";
      const resp = await fetch(VERIFY_CUSTOMER_PAYMENT_URL, {
        method: "POST",
        headers: { "content-type": "application/json", "x-intake-secret": secret },
        body: JSON.stringify({ jobId, paymentLinkId }),
      });
      const data = await resp.json().catch(() => ({}));
      return new Response(JSON.stringify(data), {
        status: resp.status,
        headers: { "content-type": "application/json" },
      });
    }

    // ── OLD PATH (retained for instant revert) ───────────────────────────────
    // Get job document
    const jobDoc = await adminDb.collection("live_jobs").doc(jobId).get();

    if (!jobDoc.exists) {
      return new Response(
        JSON.stringify({ error: "Job not found" }),
        {
          status: 404,
          headers: { "content-type": "application/json" },
        }
      );
    }

    // Guaranteed defined: we returned 404 above if the job did not exist.
    const jobData = jobDoc.data()!;

    // The paymentLinkId MUST be the one stored on THIS job. Without this, an
    // anonymous caller could mark an arbitrary job paid using a paid link that
    // belongs to a different job (the Admin SDK bypasses Firestore rules). Also
    // prevents enumerating a job's customer details by jobId alone. (P1.4 #3.)
    if (!paymentLinkMatchesJob(jobData?.paymentLinkId, paymentLinkId)) {
      return new Response(
        JSON.stringify({ error: "Payment link does not match this job" }),
        { status: 403, headers: { "content-type": "application/json" } }
      );
    }

    // Check if payment is already verified
    if (jobData?.paymentStatus === "paid") {
      return new Response(
        JSON.stringify({
          success: true,
          message: "Payment already verified",
          job: {
            id: jobId,
            service: jobData.service,
            pickup: jobData.pickupLocation,
            dropoff: jobData.dropoffLocation,
            vehicle: jobData.vehicle,
            customerName: jobData.customerName,
            customerPhone: jobData.customerPhone,
            amountQuoted: jobData.amountQuoted,
            status: jobData.status,
            paymentStatus: jobData.paymentStatus,
          },
        }),
        {
          status: 200,
          headers: { "content-type": "application/json" },
        }
      );
    }

    // Verify with Square Payment Links API
    const accessToken = process.env.SQUARE_ACCESS_TOKEN;
    const environment = process.env.SQUARE_ENVIRONMENT === 'production' ? 'production' : 'sandbox';

    if (!accessToken) {
      return new Response(
        JSON.stringify({ error: "Square credentials not configured" }),
        {
          status: 500,
          headers: { "content-type": "application/json" },
        }
      );
    }

    const squareApiUrl = environment === 'production'
      ? `https://connect.squareup.com/v2/online-checkout/payment-links/${paymentLinkId}`
      : `https://connect.squareupsandbox.com/v2/online-checkout/payment-links/${paymentLinkId}`;

    const response = await fetch(squareApiUrl, {
      method: 'GET',
      headers: {
        'Square-Version': '2023-10-18',
        'Authorization': `Bearer ${accessToken}`,
        'Content-Type': 'application/json',
      },
    });

    if (!response.ok) {
      console.error("Square API error:", response.status, await response.text());
      return new Response(
        JSON.stringify({ error: "Failed to verify payment with Square" }),
        {
          status: 500,
          headers: { "content-type": "application/json" },
        }
      );
    }

    const result = await response.json();
    const paymentLink = result.payment_link;

    // Check if payment link has associated orders (indicating payment was made)
    // Note: Square Payment Links don't have a direct "paid" status,
    // but we can check if orders were created
    const hasOrders = paymentLink?.order_id;

    if (hasOrders) {
      // Payment was completed - update job status
      await adminDb.collection("live_jobs").doc(jobId).update({
        paymentStatus: "paid",
        squareOrderId: paymentLink.order_id || null,
        paymentCompletedAt: FieldValue.serverTimestamp(),
      });

      // Re-fetch updated job data
      const updatedJobDoc = await adminDb.collection("live_jobs").doc(jobId).get();
      const updatedJobData = updatedJobDoc.data();

      return new Response(
        JSON.stringify({
          success: true,
          message: "Payment verified and job updated",
          job: {
            id: jobId,
            service: updatedJobData?.service,
            pickup: updatedJobData?.pickupLocation,
            dropoff: updatedJobData?.dropoffLocation,
            vehicle: updatedJobData?.vehicle,
            customerName: updatedJobData?.customerName,
            customerPhone: updatedJobData?.customerPhone,
            amountQuoted: updatedJobData?.amountQuoted,
            status: updatedJobData?.status,
            paymentStatus: updatedJobData?.paymentStatus,
          },
        }),
        {
          status: 200,
          headers: { "content-type": "application/json" },
        }
      );
    } else {
      // Payment not yet completed
      return new Response(
        JSON.stringify({
          success: false,
          message: "Payment not yet completed",
          job: {
            id: jobId,
            service: jobData.service,
            pickup: jobData.pickupLocation,
            dropoff: jobData.dropoffLocation,
            vehicle: jobData.vehicle,
            customerName: jobData.customerName,
            customerPhone: jobData.customerPhone,
            amountQuoted: jobData.amountQuoted,
            status: jobData.status,
            paymentStatus: jobData.paymentStatus,
          },
        }),
        {
          status: 200,
          headers: { "content-type": "application/json" },
        }
      );
    }

  } catch (err: unknown) {
    console.error("Error verifying payment:", err);
    return new Response(
      JSON.stringify({ error: "An error occurred verifying payment" }),
      {
        status: 500,
        headers: { "content-type": "application/json" },
      }
    );
  }
}

// Allow CORS preflight
export async function OPTIONS() {
  return new Response(null, {
    status: 204,
    headers: {
      "access-control-allow-origin": "*",
      "access-control-allow-methods": "POST, OPTIONS",
      "access-control-allow-headers": "content-type",
    },
  });
}
