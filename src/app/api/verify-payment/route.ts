// src/app/api/verify-payment/route.ts
export const runtime = "nodejs";

// P1.4 #3 Step C — payment verification happens ONLY via verifyCustomerPayment (which
// confirms with Square and marks the job paid; the client never asserts payment). The
// website holds NO Firebase Admin service account and NO Square token here. Requires
// INTAKE_SECRET to be set.
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
        { status: 400, headers: { "content-type": "application/json" } }
      );
    }

    const secret = process.env.INTAKE_SECRET || "";
    const resp = await fetch(VERIFY_CUSTOMER_PAYMENT_URL, {
      method: "POST",
      headers: { "content-type": "application/json", "x-intake-secret": secret },
      body: JSON.stringify({ jobId, paymentLinkId }),
    });
    // The function returns the same { job, ... } shape the payment-success page renders.
    const data = await resp.json().catch(() => ({}));
    return new Response(JSON.stringify(data), {
      status: resp.status,
      headers: { "content-type": "application/json" },
    });
  } catch (err: unknown) {
    console.error("Error verifying payment:", err);
    return new Response(
      JSON.stringify({ error: "An error occurred verifying payment" }),
      { status: 500, headers: { "content-type": "application/json" } }
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
