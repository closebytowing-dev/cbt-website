export const runtime = "nodejs";

// P1.4 #3 Step C — payment links are created ONLY via createCustomerPaymentLink, which
// derives the charge amount SERVER-SIDE from the job (no client amount) and holds the
// Square token. The website holds NO Firebase Admin service account and NO Square token
// here. Requires INTAKE_SECRET to be set.
const CREATE_CUSTOMER_PAYMENT_LINK_URL =
  process.env.CREATE_CUSTOMER_PAYMENT_LINK_URL ||
  "https://us-central1-closebydriverapp1.cloudfunctions.net/createCustomerPaymentLink";

export async function POST(req: Request) {
  const origin = req.headers.get("origin") || "";
  try {
    const body = await req.json().catch(() => ({} as Record<string, unknown>));
    const jobId = (body as { jobId?: string }).jobId;

    if (!jobId) {
      return new Response(JSON.stringify({ error: "jobId is required" }), {
        status: 400,
        headers: { "content-type": "application/json", "access-control-allow-origin": origin },
      });
    }

    const secret = process.env.INTAKE_SECRET || "";
    const resp = await fetch(CREATE_CUSTOMER_PAYMENT_LINK_URL, {
      method: "POST",
      headers: { "content-type": "application/json", "x-intake-secret": secret },
      body: JSON.stringify({ jobId, redirectBase: origin }),
    });
    const data = await resp.json().catch(() => ({} as Record<string, unknown>));
    if (!resp.ok) {
      const error = (data as { error?: string }).error || `createCustomerPaymentLink ${resp.status}`;
      console.error("❌ createCustomerPaymentLink failed:", resp.status, error);
      return new Response(JSON.stringify({ error }), {
        status: resp.status >= 400 ? resp.status : 502,
        headers: { "content-type": "application/json", "access-control-allow-origin": origin },
      });
    }
    return new Response(JSON.stringify({
      success: true,
      paymentLinkUrl: (data as { paymentLinkUrl?: string }).paymentLinkUrl,
      paymentLinkId: (data as { paymentLinkId?: string }).paymentLinkId,
      message: "Payment link created successfully",
    }), {
      status: 200,
      headers: { "content-type": "application/json", "access-control-allow-origin": origin },
    });
  } catch (err: unknown) {
    console.error("❌ Error in create-square-payment-link API:", err);
    const errorMessage = err instanceof Error ? err.message : "Unknown error occurred";
    return new Response(
      JSON.stringify({ error: "Payment link creation failed", details: errorMessage }),
      { status: 500, headers: { "content-type": "application/json", "access-control-allow-origin": origin } }
    );
  }
}
