export const runtime = "nodejs";

import { adminDb } from "@/lib/firebaseAdmin";

export async function POST(req: Request) {
  try {
    const origin = req.headers.get("origin") || "";
    const body = await req.json().catch((error) => {
      console.error("Failed to parse request JSON:", error);
      return {} as Record<string, unknown>;
    });

    const { amount, service, customer_name, customer_phone, jobId, pickup_address } = body;

    if (!amount || amount <= 0) {
      return new Response(JSON.stringify({ error: "Invalid amount" }), {
        status: 400,
        headers: { "content-type": "application/json" },
      });
    }

    const amountInCents = Math.round(amount * 100);
    const accessToken = process.env.SQUARE_ACCESS_TOKEN;
    const locationId = process.env.NEXT_PUBLIC_SQUARE_LOCATION_ID;
    const environment = process.env.SQUARE_ENVIRONMENT === 'production' ? 'production' : 'sandbox';

    if (!accessToken || !locationId) {
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
      prePopulatedData.buyer_phone_number = customer_phone;
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

    if (!response.ok) {
      throw new Error(result.errors?.[0]?.detail || 'Square API error');
    }

    if (result.payment_link?.url) {
      const paymentLinkId = result.payment_link.id;

      // Update job document with paymentLinkId if we have a jobId
      if (jobId) {
        try {
          await adminDb.collection("live_jobs").doc(jobId).update({
            paymentLinkId: paymentLinkId,
          });
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
    return new Response(
      JSON.stringify({
        error: "Payment link creation failed",
        details: null
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
