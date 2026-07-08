export const runtime = "nodejs";

import { adminDb } from "@/lib/firebaseAdmin";

// P1.4 #3 Phase 2 — the narrow Cloud Function that derives the amount server-side.
const CREATE_CUSTOMER_PAYMENT_LINK_URL =
  process.env.CREATE_CUSTOMER_PAYMENT_LINK_URL ||
  "https://us-central1-closebydriverapp1.cloudfunctions.net/createCustomerPaymentLink";

/**
 * NEW path: create the Square payment link via createCustomerPaymentLink. The website
 * forwards ONLY jobId + the redirect origin + the intake secret; the FUNCTION derives
 * the amount from the job (client can't supply it) and holds the Square token — so the
 * website needs no Admin SDK and no Square token here.
 */
async function createLinkViaFunction(
  jobId: string,
  origin: string
): Promise<{ ok: boolean; status: number; paymentLinkUrl?: string; paymentLinkId?: string; error?: string }> {
  const secret = process.env.INTAKE_SECRET || "";
  const resp = await fetch(CREATE_CUSTOMER_PAYMENT_LINK_URL, {
    method: "POST",
    headers: { "content-type": "application/json", "x-intake-secret": secret },
    body: JSON.stringify({ jobId, redirectBase: origin }),
  });
  const data = await resp.json().catch(() => ({} as Record<string, unknown>));
  if (!resp.ok) {
    return { ok: false, status: resp.status, error: (data as { error?: string }).error || `createCustomerPaymentLink ${resp.status}` };
  }
  return {
    ok: true,
    status: 200,
    paymentLinkUrl: (data as { paymentLinkUrl?: string }).paymentLinkUrl,
    paymentLinkId: (data as { paymentLinkId?: string }).paymentLinkId,
  };
}

export async function POST(req: Request) {
  try {
    const origin = req.headers.get("origin") || "";
    const body = await req.json().catch((error) => {
      console.error("Failed to parse request JSON:", error);
      return {} as Record<string, unknown>;
    });

    const { amount, service, customer_name, customer_phone, jobId, pickup_address } = body;

    console.log("📥 Received payment link request:", {
      amount,
      service,
      customer_name,
      customer_phone,
      jobId,
      pickup_address
    });

    // ── NEW PATH (flag-gated) ────────────────────────────────────────────────
    // When USE_CREATE_PAYMENT_LINK=true, route through createCustomerPaymentLink,
    // which derives the amount from the job (no client amount, no Admin SDK here).
    // Instantly revertable by clearing the flag. jobId is required on this path.
    if (process.env.USE_CREATE_PAYMENT_LINK === "true") {
      if (!jobId) {
        return new Response(JSON.stringify({ error: "jobId is required" }), {
          status: 400,
          headers: { "content-type": "application/json", "access-control-allow-origin": origin },
        });
      }
      const r = await createLinkViaFunction(jobId, origin);
      if (!r.ok) {
        console.error("❌ createCustomerPaymentLink failed:", r.status, r.error);
        return new Response(JSON.stringify({ error: r.error || "Payment link creation failed" }), {
          status: r.status && r.status >= 400 ? r.status : 502,
          headers: { "content-type": "application/json", "access-control-allow-origin": origin },
        });
      }
      return new Response(JSON.stringify({
        success: true,
        paymentLinkUrl: r.paymentLinkUrl,
        paymentLinkId: r.paymentLinkId,
        message: "Payment link created successfully",
      }), {
        status: 200,
        headers: { "content-type": "application/json", "access-control-allow-origin": origin },
      });
    }

    // ── OLD PATH (retained for instant revert) ───────────────────────────────
    if (!amount || amount <= 0) {
      console.error("❌ Invalid amount:", amount);
      return new Response(JSON.stringify({ error: "Invalid amount" }), {
        status: 400,
        headers: { "content-type": "application/json" },
      });
    }

    const amountInCents = Math.round(amount * 100);
    const accessToken = process.env.SQUARE_ACCESS_TOKEN;
    const locationId = process.env.NEXT_PUBLIC_SQUARE_LOCATION_ID;
    const environment = process.env.SQUARE_ENVIRONMENT === 'production' ? 'production' : 'sandbox';

    console.log("💳 Square config:", {
      hasAccessToken: !!accessToken,
      locationId,
      environment,
      amountInCents
    });

    if (!accessToken || !locationId) {
      console.error("❌ Missing Square credentials:", {
        hasAccessToken: !!accessToken,
        hasLocationId: !!locationId
      });
      return new Response(JSON.stringify({ error: "Square credentials not configured" }), {
        status: 500,
        headers: { "content-type": "application/json" },
      });
    }

    // Create Square Payment Link using REST API
    const squareApiUrl = environment === 'production' 
      ? 'https://connect.squareup.com/v2/online-checkout/payment-links'
      : 'https://connect.squareupsandbox.com/v2/online-checkout/payment-links';

    // Build pre-populated data object
    const prePopulatedData: Record<string, unknown> = {};

    if (customer_phone) {
      // Format phone number for Square (requires +1 prefix for US numbers)
      const digitsOnly = customer_phone.replace(/\D/g, '');
      const formattedPhone = digitsOnly.startsWith('1') ? `+${digitsOnly}` : `+1${digitsOnly}`;
      prePopulatedData.buyer_phone_number = formattedPhone;
    }

    if (customer_name) {
      // Split name into first and last name
      const nameParts = customer_name.trim().split(/\s+/);
      const givenName = nameParts[0] || '';
      const familyName = nameParts.slice(1).join(' ') || givenName;

      prePopulatedData.buyer_address = {
        given_name: givenName,
        family_name: familyName,
      };
    }

    // Build checkout options
    const checkoutOptions: Record<string, unknown> = {
      ask_for_shipping_address: false, // Disable shipping (we already have pickup location)
      allow_tipping: false, // Disable tipping for towing service
      enable_coupon: false, // Disable coupon field
      enable_loyalty: false, // Disable loyalty rewards
      accepted_payment_methods: {
        apple_pay: true,
        google_pay: true,
        cash_app_pay: true,
        afterpay_clearpay: false, // Remove buy-now-pay-later
      },
      // Merchant support email
      merchant_support_email: process.env.SUPPORT_EMAIL || 'support@yourdomain.com',
    };

    // Note: We'll add paymentLinkId to redirect URL after creating the payment link

    console.log("📤 Creating Square payment link...");

    const response = await fetch(squareApiUrl, {
      method: 'POST',
      headers: {
        'Square-Version': '2023-10-18',
        'Authorization': `Bearer ${accessToken}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        idempotency_key: crypto.randomUUID(),
        quick_pay: {
          name: service || 'Towing Service',
          price_money: {
            amount: amountInCents,
            currency: 'USD',
          },
          location_id: locationId,
        },
        // Add payment note with service details
        payment_note: pickup_address
          ? `${service || 'Service'} - Pickup: ${pickup_address}`
          : `${service || 'Towing Service'}`,
        // Pre-fill customer data
        ...(Object.keys(prePopulatedData).length > 0 && { pre_populated_data: prePopulatedData }),
        // Checkout customization
        checkout_options: checkoutOptions,
      }),
    });

    const result = await response.json();

    console.log("Square API response status:", response.status);

    if (!response.ok) {
      console.error("❌ Square API error:", {
        status: response.status,
        errors: result.errors,
        result
      });
      throw new Error(result.errors?.[0]?.detail || 'Square API error');
    }

    if (result.payment_link?.url) {
      const paymentLinkId = result.payment_link.id;
      console.log("✅ Payment link created:", paymentLinkId);

      // Update job document with paymentLinkId if we have a jobId
      if (jobId) {
        try {
          console.log("💾 Updating job with paymentLinkId:", jobId);
          await adminDb.collection("live_jobs").doc(jobId).update({
            paymentLinkId: paymentLinkId,
          });
          console.log("✅ Job updated with paymentLinkId");
        } catch (error) {
          console.error("Failed to update job with paymentLinkId:", error);
          // Don't fail the request, just log the error
        }

        // Update the payment link with redirect URL that includes both jobId and paymentLinkId
        try {
          const updateResponse = await fetch(`${squareApiUrl}/${paymentLinkId}`, {
            method: 'PUT',
            headers: {
              'Square-Version': '2023-10-18',
              'Authorization': `Bearer ${accessToken}`,
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
              payment_link: {
                checkout_options: {
                  ...checkoutOptions,
                  redirect_url: `${origin}/payment-success?jobId=${jobId}&paymentLinkId=${paymentLinkId}`,
                }
              }
            }),
          });

          if (!updateResponse.ok) {
            console.error("Failed to update payment link with redirect URL");
            // Don't fail the request, the payment link will still work
          }
        } catch (error) {
          console.error("Error updating payment link:", error);
          // Don't fail the request
        }
      }

      return new Response(JSON.stringify({
        success: true,
        paymentLinkUrl: result.payment_link.url,
        paymentLinkId: paymentLinkId,
        message: "Payment link created successfully"
      }), {
        status: 200,
        headers: {
          "content-type": "application/json",
          "access-control-allow-origin": origin,
        },
      });
    } else {
      throw new Error("Payment link creation failed");
    }

  } catch (err: unknown) {
    // TODO: Add proper error logging service (e.g., Sentry)
    console.error("❌ Error in create-square-payment-link API:", err);
    const errorMessage = err instanceof Error ? err.message : "Unknown error occurred";
    return new Response(
      JSON.stringify({
        error: "Payment link creation failed",
        details: errorMessage
      }),
      {
        status: 500,
        headers: {
          "content-type": "application/json",
          "access-control-allow-origin": req.headers.get("origin") || "",
        }
      }
    );
  }
}
